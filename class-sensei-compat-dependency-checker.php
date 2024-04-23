<?php
/**
 * File containing the class Sensei_Compat_Dependency_Checker.
 *
 * @package sensei-compat
 * @since   1.0.0
 */

/**
 * Dependency_Checker
 *
 * Checks if required plugin dependencies are present.
 */
class Sensei_Compat_Dependency_Checker {
	const SENSEI_COMPAT_FAQ_DOC_URL         = 'https://senseilms.com/documentation/woocommerce-paid-courses-faq/';
	const WORDPRESS_ORG_PHP_UPGRADE_DOC_URL = 'https://wordpress.org/support/update-php/';

	/**
	 * Deactivate self.
	 */
	public static function deactivate_self() {
		deactivate_plugins( SENSEI_COMPAT_PLUGIN_BASENAME );
	}

	/**
	 * Show notice when minimum PHP version is not met.
	 */
	public static function show_php_notice() {
		$screen        = get_current_screen();
		$valid_screens = array( 'dashboard', 'plugins' );
		if ( ! current_user_can( 'activate_plugins' ) || ! in_array( $screen->id, $valid_screens, true ) ) {
			return;
		}
		// translators: %1$s is the minimum version number; %2$s if the current PHP version.
		$message = sprintf( __( '<strong>Sensei Pro (WC Paid Courses)</strong> requires a minimum PHP version of %1$s, but you are running %2$s.', 'sensei-compat' ), '7.4.0', phpversion() );
		echo '<div class="error"><p>';
		echo wp_kses( $message, array( 'strong' => array() ) );
		$php_update_url = self::WORDPRESS_ORG_PHP_UPGRADE_DOC_URL;
		if ( function_exists( 'wp_get_update_php_url' ) ) {
			$php_update_url = wp_get_update_php_url();
		}
		printf(
			'<p><a class="button button-primary" href="%1$s" target="_blank" rel="noopener noreferrer">%2$s <span class="screen-reader-text">%3$s</span><span aria-hidden="true" class="dashicons dashicons-external"></span></a></p>',
			esc_url( $php_update_url ),
			esc_html__( 'Learn more about updating PHP', 'sensei-compat' ),
			/* translators: accessibility text */
			esc_html__( '(opens in a new tab)', 'sensei-compat' )
		);
		echo '</p></div>';
	}

	/**
	 * Show notice when an 1.x version of Sensei is active.
	 */
	public static function show_legacy_sensei_notice() {
		$message = __( 'Please deactivate your older versions of <strong>Sensei</strong> before activating <strong>Sensei Pro (WC Paid Courses)</strong>.', 'sensei-compat' );
		echo '<div class="error"><p>';
		echo wp_kses( $message, array( 'strong' => array() ) );
		echo '</p></div>';
	}

	/**
	 * Show button to visit plugin details page.
	 *
	 * @param string $plugin_slug Plugin slug.
	 * @param string $plugin_name Plugin name.
	 */
	private static function show_details_button( $plugin_slug, $plugin_name ) {
		$url = self_admin_url( sprintf( 'plugin-install.php?s=%1$s&tab=search&type=term&plugin_details=%1$s', $plugin_slug ) );
		printf(
			'<a class="button button-primary" href="%1$s" aria-label="%2$s">%2$s</a>',
			esc_url( $url ),
			// translators: Placeholder is the name of the plugin to install.
			esc_html( sprintf( __( 'Install %s', 'sensei-compat' ), $plugin_name ) )
		);
	}

	/**
	 * Show button to activate a plugin.
	 *
	 * @param string $plugin_file Plugin slug and file path.
	 * @param string $plugin_name Plugin name.
	 */
	private static function show_activate_button( $plugin_file, $plugin_name ) {
		$url = wp_nonce_url(
			add_query_arg(
				array(
					'action' => 'activate',
					'plugin' => $plugin_file,
				),
				self_admin_url( 'plugins.php' )
			),
			'activate-plugin_' . $plugin_file
		);
		printf(
			'<a href="%1$s" class="button button-primary" aria-label="%2$s">%2$s</a>',
			esc_url( $url ),
			// translators: Placeholder is the name of the plugin to activate.
			esc_html( sprintf( __( 'Activate %s', 'sensei-compat' ), $plugin_name ) )
		);
	}

	/**
	 * Check if legacy plugin WooThemes Updater is activated.
	 *
	 * @return bool
	 */
	public static function is_woothemes_updater_active() {
		return class_exists( 'WooThemes_Updater' );
	}

	/**
	 * Check if Sensei is activated.
	 *
	 * @return bool
	 */
	public static function is_sensei_active() {
		return class_exists( 'Sensei_Main' );
	}

	/**
	 * Check if legacy Sensei is activated.
	 *
	 * @return bool
	 */
	public static function is_legacy_sensei_active() {
		if ( ! class_exists( 'Sensei_Main' ) || ! function_exists( 'Sensei' ) ) {
			return false;
		}

		return '1.' === substr( Sensei()->version, 0, 2 );
	}

	/**
	 * Check if PHP is at least a certain version.
	 *
	 * @param string $min_version Minimum PHP version.
	 * @return bool
	 */
	public static function is_php_version_at_least( $min_version ) {
		return version_compare( phpversion(), $min_version, '<' );
	}
}
