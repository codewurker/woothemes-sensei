<?php
/**
 * File containing the Sensei_Home_Task_Sell_Course_With_WooCommerce class.
 *
 * @package sensei-lms
 * @since 4.8.0
 */

/**
 * Sensei_Home_Task_Sell_Course_With_WooCommerce class.
 *
 * @deprecated 4.23.0 We're now showing the "Sell your course with Sensei Pro" (Sensei_Home_Task_Pro_Upsell) task instead of this task.
 *
 * @since 4.8.0
 */
class Sensei_Home_Task_Sell_Course_With_WooCommerce implements Sensei_Home_Task {
	const VISITED_WOOCOMMERCE_ADMIN_OPTION_KEY = 'sensei_home_task_visited_woocommerce';

	/**
	 * Class constructor.
	 */
	public function __construct() {
		if ( is_wp_version_compatible( '6.4' ) ) {
			_deprecated_class( __CLASS__, '4.23.0', 'Sensei_Home_Task_Pro_Upsell' );
		} else {
			_deprecated_function( __METHOD__, '4.23.0', 'Sensei_Home_Task_Pro_Upsell::__construct' );
		}
	}

	/**
	 * The ID for the task.
	 *
	 * @return string
	 */
	public static function get_id(): string {
		return 'sell-course-with-woocommerce';
	}

	/**
	 * Number used to sort in frontend.
	 *
	 * @return int
	 */
	public function get_priority(): int {
		return 400;
	}

	/**
	 * Task title.
	 *
	 * @return string
	 */
	public function get_title(): string {
		return __( 'Sell your course with WooCommerce', 'sensei-lms' );
	}

	/**
	 * Task url.
	 *
	 * @return string
	 */
	public function get_url(): ?string {
		return admin_url( 'admin.php?page=wc-admin' );
	}

	/**
	 * Whether the task is completed or not.
	 *
	 * @return bool
	 */
	public function is_completed(): bool {
		return (bool) get_option( self::VISITED_WOOCOMMERCE_ADMIN_OPTION_KEY, false );
	}

	/**
	 * Mark the task as completed.
	 *
	 * @return void
	 */
	public static function mark_completed() {
		update_option( self::VISITED_WOOCOMMERCE_ADMIN_OPTION_KEY, true, false );
		sensei_log_event( 'home_task_complete', [ 'type' => self::get_id() ] );
	}

	/**
	 * Test if this task should be active or not.
	 *
	 * @return bool Whether the task should be active or not.
	 */
	public static function is_active() {
		if ( ! function_exists( 'get_plugins' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}

		if ( ! is_plugin_active( 'woocommerce/woocommerce.php' ) ) {
			return false;
		}
		$features = Sensei_Setup_Wizard::instance()->get_wizard_user_data( 'features' );
		return in_array( 'woocommerce', $features['selected'], true );
	}
}
