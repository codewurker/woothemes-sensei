<?php
/**
 * File containing the class Sensei_Compat_Admin.
 *
 * @package sensei-compat
 * @since   1.0.0
 */

/**
 * Sensei_Compat_Admin class.
 */
class Sensei_Compat_Admin {
	const WOO_PRODUCT_ID = 152116;

	/**
	 * Initialize admin actions and filters.
	 */
	public static function init() {
		add_filter( 'plugin_row_meta', array( __CLASS__, 'plugin_row_meta' ), 10, 3 );
		add_filter( 'install_plugins_search', array( __CLASS__, 'load_plugin_information' ) );
		add_filter( 'sensei_admin_notices', [ __CLASS__, 'wccom_connect_notice' ] );
		add_filter( 'sensei_admin_notices', [ __CLASS__, 'woocommerce_notice' ] );
		add_filter( 'sensei_home_is_plugin_licensed_woothemes-sensei', [ __CLASS__, 'is_plugin_licensed' ] );

		if ( SENSEI_COMPAT_LOADING_SENSEI ) {
			add_filter( 'site_transient_update_plugins', array( __CLASS__, 'add_sensei_translations' ) );
			add_action( 'set_site_transient_update_plugins', array( __CLASS__, 'clear_sensei_translations' ) );
		}
	}

	/**
	 * Adds Sensei's language pack updates to the `update_plugins` transient.
	 *
	 * @access private
	 *
	 * @param  \stdClass $value Current value of `update_plugins` transient.
	 * @return \stdClass
	 */
	public static function add_sensei_translations( $value ) {
		if ( empty( $value ) ) {
			return $value;
		}

		$language_pack_transient_key = self::get_translation_update_cache_key();

		$translations_available = get_site_transient( $language_pack_transient_key );
		if ( ! $translations_available ) {
			$translations_available = self::get_sensei_language_pack_updates();
			set_site_transient( $language_pack_transient_key, $translations_available, DAY_IN_SECONDS );
		}

		foreach ( $translations_available as $locale => $package ) {
			$value->translations[] = $package;
		}

		return $value;
	}

	/**
	 * Clear's Sensei language pack update cache.
	 *
	 * @access private
	 */
	public static function clear_sensei_translations() {
		delete_site_transient( self::get_translation_update_cache_key() );
	}

	/**
	 * Gets the cache key for the current Sensei translation update cache.
	 *
	 * @return string
	 */
	private static function get_translation_update_cache_key() {
		$cache_key_parts   = array_values( get_available_languages() );
		$cache_key_parts[] = Sensei()->version;

		return 'sensei_language_packs_' . md5( implode( ',', $cache_key_parts ) );
	}

	/**
	 * Gets the available language package updates.
	 *
	 * @return array
	 */
	private static function get_sensei_language_pack_updates() {
		global $wp_version;

		static $plugin_translations;

		if ( isset( $plugin_translations ) ) {
			return $plugin_translations;
		}

		$plugin_translations        = array();
		$installed_translations_raw = wp_get_installed_translations( 'plugins' );
		$installed_translations     = array();

		// Only pass translations installed for Sensei.
		if ( isset( $installed_translations_raw['sensei-lms'] ) ) {
			$installed_translations['sensei-lms'] = $installed_translations_raw['sensei-lms'];
		}

		$to_send            = array();
		$to_send['plugins'] = array(
			'sensei-lms/sensei-lms.php' => array(
				'Name'       => 'Sensei LMS',
				'Title'      => 'Sensei LMS',
				'Version'    => Sensei()->version,
				'TextDomain' => 'sensei-lms',
			),
		);
		$to_send['active']  = array( 'sensei-lms/sensei-lms.php' );

		$locales = array_values( get_available_languages() );

		/** This action is documented in WordPress core's wp-includes/update.php */
		// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound
		$locales = apply_filters( 'plugins_update_check_locales', $locales );
		$locales = array_unique( $locales );

		$options = array(
			'timeout'    => 10,
			'body'       => array(
				'plugins'      => wp_json_encode( $to_send ),
				'translations' => wp_json_encode( $installed_translations ),
				'locale'       => wp_json_encode( $locales ),
				'all'          => wp_json_encode( true ),
			),
			'user-agent' => 'WordPress/' . $wp_version . '; ' . home_url( '/' ),
		);

		$url = 'http://api.wordpress.org/plugins/update-check/1.1/';
		$ssl = wp_http_supports( array( 'ssl' ) );
		if ( $ssl ) {
			$url = set_url_scheme( $url, 'https' );
		}
		$raw_response = wp_remote_post( $url, $options );
		if ( is_wp_error( $raw_response ) || 200 !== intval( wp_remote_retrieve_response_code( $raw_response ) ) ) {
			return array();
		}

		$response = json_decode( wp_remote_retrieve_body( $raw_response ), true );
		if ( is_array( $response ) && ! empty( $response['translations'] ) ) {
			$plugin_translations = $response['translations'];
		}

		return $plugin_translations;
	}

	/**
	 * Adds details about the plugins packaged within this compatibility plugin.
	 *
	 * @param string[] $plugin_meta An array of the plugin's metadata,
	 *                              including the version, author,
	 *                              author URI, and plugin URI.
	 * @param string   $plugin_file Path to the plugin file relative to the plugins directory.
	 * @param array    $plugin_data An array of plugin data.
	 *
	 * @return string[]
	 */
	public static function plugin_row_meta( $plugin_meta, $plugin_file, $plugin_data ) {
		if ( ! in_array( $plugin_file, [ 'woothemes-sensei/woothemes-sensei.php', 'sensei/woothemes-sensei.php' ], true ) ) {
			return $plugin_meta;
		}

		if ( 'sensei-compat' !== $plugin_data['TextDomain'] ) {
			return $plugin_meta;
		}

		unset( $plugin_meta[0] );

		if ( SENSEI_COMPAT_LOADING_SENSEI_PRO && defined( 'SENSEI_PRO_VERSION' ) ) {
			// translators: placeholder is current version of Sensei Pro.
			array_unshift( $plugin_meta, esc_html( sprintf( __( 'Sensei Pro Version: %s', 'sensei-compat' ), SENSEI_PRO_VERSION ) ) );
		}

		if ( SENSEI_COMPAT_LOADING_SENSEI && function_exists( 'Sensei' ) ) {
			// translators: placeholder is current version of Sensei.
			array_unshift( $plugin_meta, esc_html( sprintf( __( 'Sensei LMS Version: %s', 'sensei-compat' ), Sensei()->version ) ) );
		}

		return $plugin_meta;
	}

	/**
	 * Manually load the plugin information on `plugin-install.php` page load.
	 */
	public static function load_plugin_information() {
		$plugins_handled = [
			'sensei-lms'  => 'Sensei LMS',
			'woocommerce' => 'WooCommerce',
		];
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		if ( empty( $_GET['plugin_details'] ) || ! isset( $plugins_handled[ $_GET['plugin_details'] ] ) ) {
			return;
		}

		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$plugin_slug = sanitize_title( wp_unslash( $_GET['plugin_details'] ) );
		$plugin_name = $plugins_handled[ $plugin_slug ];

		$details_link = self_admin_url(
			'plugin-install.php?tab=plugin-information&amp;plugin=' . $plugin_slug .
			'&amp;TB_iframe=true&amp;width=600&amp;height=550'
		);

		printf(
			'<a href="%1$s" style="display: none;" id="plugin-information-onload" class="thickbox open-plugin-details-modal" data-title="%2$s">%2$s</a>',
			esc_url( $details_link ),
			esc_attr( $plugin_name )
		);

		?>
		<script type="text/javascript">
			jQuery( document ).ready( function( $ ) {
				setTimeout( function () {
					$('#plugin-information-onload').click();
				} );
			} );
		</script>
		<?php
	}

	/**
	 * Check if WooCommerce.com connection has been made.
	 *
	 * @return bool
	 */
	private static function is_wccom_connected() {
		if ( ! class_exists( 'WC_Helper_Options' ) ) {
			return false;
		}

		$auth = WC_Helper_Options::get( 'auth' );

		return ! empty( $auth['access_token'] );
	}

	/**
	 * Tells if the current site is hosted in wordpress.com and the
	 * plan includes an active woothemes-sensei paid plan.
	 */
	public static function has_wpcom_subscription(): bool {
		$subscriptions = get_option( 'wpcom_active_subscriptions', [] );

		return isset( $subscriptions['woothemes-sensei'] );
	}

	/**
	 * Displays a notice for users that needs to install/activate WooCommerce.
	 *
	 * @internal
	 *
	 * @param array $notices Notices list.
	 *
	 * @return array
	 */
	public static function woocommerce_notice( $notices ) {
		if ( Sensei_Utils::is_woocommerce_active() ) {
			return $notices;
		}

		$action = [
			'label' => __( 'Activate', 'sensei-compat' ),
			'url'   => add_query_arg(
				'_wpnonce',
				wp_create_nonce( 'activate-plugin_woocommerce/woocommerce.php' ),
				self_admin_url( 'plugins.php?action=activate&plugin=woocommerce/woocommerce.php' )
			),
		];

		if ( ! Sensei_Utils::is_woocommerce_installed() ) {
			$action = [
				'label' => __( 'Install', 'sensei-compat' ),
				'url'   => add_query_arg(
					'_wpnonce',
					wp_create_nonce( 'install-plugin_woocommerce' ),
					self_admin_url( 'update.php?action=install-plugin&plugin=woocommerce' )
				),
			];
		}

		$notices['wcpc-woo-active'] = [
			'type'       => 'site-wide',
			'icon'       => 'sensei',
			'heading'    => __( 'Sensei Pro (WC Paid Courses)', 'sensei-compat' ),
			'message'    => __( 'WooCommerce must be installed and connected to WooCommerce.com in order to receive plugin updates.', 'sensei-compat' ),
			'actions'    => [ $action ],
			'conditions' => [
				[
					'type'    => 'screens',
					'screens' => [ 'sensei*', 'plugins', 'plugins-network' ],
				],
				[
					'type'         => 'user_cap',
					'capabilities' => [ 'install_plugins', 'activate_plugins' ],
				],
			],
		];

		return $notices;
	}
	/**
	 * Check if the plugin is licensed .
	 *
	 * @internal
	 *
	 * @return bool
	 */
	public static function is_plugin_licensed() {
		return self::has_wccom_subscription() || self::has_wpcom_subscription();
	}

	/**
	 * Tells if user has a woocommerce.com subscription.
	 */
	public static function has_wccom_subscription(): bool {
		if ( ! self::is_wccom_connected() ) {
			return false;
		}

		if ( ! class_exists( 'WC_Helper' ) ) {
			return false;
		}

		return WC_Helper::has_product_subscription( self::WOO_PRODUCT_ID );
	}

	/**
	 * Displays a notice for users that needs to connect the WCCOM.
	 *
	 * @internal
	 *
	 * @param array $notices Notices list.
	 *
	 * @return array Notices including the WCCOM connect notice.
	 */
	public static function wccom_connect_notice( $notices ) {
		if ( ! Sensei_Utils::is_woocommerce_active() || self::is_wccom_connected() || self::has_wpcom_subscription() ) {
			return $notices;
		}

		$connect_url = add_query_arg(
			[
				'page'              => 'wc-addons',
				'section'           => 'helper',
				'wc-helper-connect' => 1,
				'wc-helper-nonce'   => wp_create_nonce( 'connect' ),
			],
			admin_url( 'admin.php' )
		);

		$notices['wcpc-wccom-connect-notice'] = [
			'type'       => 'site-wide',
			'icon'       => 'sensei',
			'heading'    => __( 'Sensei Pro (WC Paid Courses)', 'sensei-compat' ),
			'message'    => __( 'WooCommerce must be connected to WooCommerce.com in order to receive plugin updates.', 'sensei-compat' ),
			'actions'    => [
				[
					'label' => __( 'Connect account', 'sensei-compat' ),
					'url'   => $connect_url,
				],
			],
			'conditions' => [
				[
					'type'    => 'screens',
					'screens' => [ 'sensei*', 'plugins', 'plugins-network' ],
				],
				[
					'type'         => 'user_cap',
					'capabilities' => [ 'activate_plugins' ],
				],
			],
		];

		return $notices;
	}
}
