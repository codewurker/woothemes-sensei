<?php
/**
 * File containing the class \Sensei_Compat_Conflicts_Checker.
 *
 * @package sensei-compat
 * @since   1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Sensei Compat Conflicts Checker
 *
 * @since 1.0.0
 */
class Sensei_Compat_Conflicts_Checker {
	/**
	 * Transient for marking the plugin activation request.
	 */
	const PLUGIN_ACTIVATION_TRANSIENT = 'woothemes_sensei_activation_requested';

	/**
	 * Given the plugin slug, retrieves the plugin file path relative to plugins directory.
	 *
	 * @param string $plugin_slug The plugin slug.
	 * @return string
	 */
	public static function get_plugin_file( string $plugin_slug ): string {
		require_once ABSPATH . 'wp-admin/includes/plugin.php';
		$plugins = get_plugins();
		foreach ( $plugins as $plugin_file => $plugin_data ) {
			if ( "$plugin_slug.php" === basename( $plugin_file ) ) {
				return $plugin_file;
			}
		}
		return '';
	}

	/**
	 * Given the plugin slug, tells if that plugin is active.
	 *
	 * @param string $plugin_slug The plugin slug.
	 * @return bool True if plugin is activated and false otherwise.
	 */
	public static function is_plugin_active( string $plugin_slug ): bool {
		$plugin_file = self::get_plugin_file( $plugin_slug );
		if ( ! $plugin_file ) {
			return false;
		}
		return is_plugin_active( $plugin_file );
	}

	/**
	 * Tells if the woothemes-sensei plugin is being activated.
	 */
	public static function is_activating(): bool {
		if ( get_transient( self::PLUGIN_ACTIVATION_TRANSIENT ) ) {
			return true;
		}

		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		if ( ! isset( $_GET['action'] ) || 'activate' !== $_GET['action'] ) {
			return false;
		}

		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		if ( ! isset( $_GET['plugin'] ) || self::get_plugin_file( 'woothemes-sensei' ) !== $_GET['plugin'] ) {
			return false;
		}

		set_transient( self::PLUGIN_ACTIVATION_TRANSIENT, true, 3 );

		return true;
	}

	/**
	 * Makes sure woothemes-sensei plugin is not colliding with an already installed
	 * sensei-pro plugin.
	 *
	 * @return bool
	 */
	public static function conflicts_with_sensei_pro() {
		if ( self::is_activating() && self::is_plugin_active( 'sensei-pro' ) ) {
			add_action( 'admin_notices', [ __CLASS__, 'add_conflicts_with_sensei_pro_notice' ] );
			add_action( 'admin_init', [ __CLASS__, 'deactivate_self' ] );
			return true;
		}
		return false;
	}

	/**
	 * Deactivate self.
	 */
	public static function deactivate_self() {
		deactivate_plugins( SENSEI_COMPAT_PLUGIN_BASENAME );
	}

	/**
	 * Adds the notice in WP Admin that woothemse-sensei is not
	 * compatible with sensei-pro.
	 */
	public static function add_conflicts_with_sensei_pro_notice() {
		$screen      = get_current_screen();
		$plugin_file = self::get_plugin_file( 'sensei-pro' );
		$plugin_file = $plugin_file ? realpath( WP_PLUGIN_DIR . "/$plugin_file" ) : '';
		$plugin_name = __( 'Sensei Pro', 'sensei-pro' );
		if ( $plugin_file ) {
			$plugin_data = get_plugin_data( $plugin_file );
			$plugin_name = $plugin_data['Name'];
		}

		if ( ! current_user_can( 'activate_plugins' ) || 'plugins' !== $screen->id ) {
			return;
		}

		$message = sprintf(
			// translators: %1$s is the name of the conflicting plugin.
			__(
				'<strong>%1$s</strong> plugin already provides all the features that
				<strong>Sensei Pro (WC Paid Courses)</strong> has. If you
				still want to activate the <strong>Sensei Pro (WC Paid Courses)</strong>
				then deactivate the <strong>%1$s</strong> first.',
				'sensei-pro'
			),
			$plugin_name
		);
		echo '<div class="error"><p>';
		echo wp_kses( $message, [ 'strong' => [] ] );
		echo '</p></div>';
	}
}
