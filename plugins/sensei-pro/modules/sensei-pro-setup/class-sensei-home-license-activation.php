<?php
/**
 * File containing the class \Sensei_Pro_Setup\Sensei_Home_License_Activation.
 *
 * @package sensei-pro
 * @since   1.0.0
 */

namespace Sensei_Pro_Setup;

use SenseiLMS_Licensing\License_Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * The Sensei_Home_License_Activation class.
 */
class Sensei_Home_License_Activation {

	/**
	 * Singleton instance.
	 *
	 * @var Sensei_Home_License_Activation
	 */
	private static $instance;

	/**
	 * Plugin context in which the Wizard operates.
	 *
	 * @var Setup_Context
	 */
	private $setup_context;

	/**
	 * Class constructor. Prevents other instances from being created outside of `Class::instance()`.
	 *
	 * @param Setup_Context $setup_context The Setup Context.
	 */
	private function __construct( Setup_Context $setup_context ) {
		$this->setup_context = $setup_context;
	}

	/**
	 * Fetches an instance of the class that is bound to a context.
	 *
	 * @param Setup_Context $setup_context The plugin context under which the setup wizard operates.
	 * @return self
	 */
	public static function instance( Setup_Context $setup_context ) {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self( $setup_context );
		}
		return self::$instance;
	}

	/**
	 * Initializes the class and adds all filters and actions related to WP admin.
	 */
	public function init() {
		if ( is_admin() ) {
			add_action(
				'admin_enqueue_scripts',
				[ $this, 'enqueue_scripts' ],
				1
			);
		}
	}

	/**
	 * Whether there is a wpcom subscription for the plugin.
	 *
	 * @return boolean
	 */
	private function has_wpcom_subscription() {
		// See https://developer.wordpress.com/wordpress-com-marketplace/vendor-apis/#infrastructure-api.
		$is_wpcom = defined( 'IS_ATOMIC' ) && IS_ATOMIC && defined( 'ATOMIC_CLIENT_ID' ) && '2' === ATOMIC_CLIENT_ID;

		if ( ! $is_wpcom ) {
			return false;
		}

		$plugin_slug         = $this->setup_context->get_plugin_slug();
		$wpcom_subscriptions = get_option( 'wpcom_active_subscriptions', [] );

		if ( empty( $wpcom_subscriptions ) ) {
			return false;
		}

		return isset( $wpcom_subscriptions[ $plugin_slug ] );
	}

	/**
	 * Enqueue scripts.
	 *
	 * @param string $hook_suffix The hook suffix.
	 */
	public function enqueue_scripts( $hook_suffix ) {

		// Require `Screen_ID_Helper` manually because `sensei-pro-setup` module is loaded in a special way.
		include_once __DIR__ . '/../shared-module/includes/class-screen-id-helper.php';
		$home_screen_id = \Sensei_Pro\Screen_ID_Helper::get_sensei_home_screen_id();
		if ( is_null( $home_screen_id ) || $home_screen_id !== $hook_suffix ) {
			// Do not include if we are not inside Sensei Home screen.
			return;
		}

		wp_enqueue_script(
			'sensei-home-license-activation',
			"{$this->setup_context->get_setup_assets_url()}/sensei-home-license-activation.js",
			[ 'wp-components', 'wp-api-fetch' ],
			$this->setup_context->get_plugin_version(),
			true
		);

		wp_enqueue_style(
			'sensei-home-license-activation-style',
			"{$this->setup_context->get_setup_assets_url()}/sensei-home-license-activation-style.css",
			[],
			$this->setup_context->get_plugin_version()
		);

		$plugin_slug    = $this->setup_context->get_plugin_slug();
		$license_status = License_Manager::get_license_status( $plugin_slug );
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$force_show_license      = isset( $_GET['manage_license'] ) && '1' === $_GET['manage_license'];
		$license_activation_info = [
			'isLicenseActivated'   => ! is_null( $license_status['license_key'] ) && $license_status['is_valid'],
			'forceShowLicense'     => $force_show_license,
			'pluginSlug'           => $this->setup_context->get_plugin_slug(),
			'licenseKey'           => $license_status['license_key'] ?? '',
			'formNonce'            => wp_create_nonce( 'license-form-' . $plugin_slug ),
			'isMultisite'          => is_multisite(),
			'domain'               => $license_status['domain'] ?? '',
			'hasWpcomSubscription' => $this->has_wpcom_subscription(),
		];
		wp_add_inline_script( 'sensei-home-license-activation', 'window.senseiHomeLicenseActivation=' . wp_json_encode( $license_activation_info ) . ';', 'before' );
	}
}
