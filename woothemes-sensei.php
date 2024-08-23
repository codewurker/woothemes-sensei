<?php
/**
 * Plugin Name: Sensei Pro (WC Paid Courses)
 * Plugin URI: https://senseilms.com
 * Description: Whether you want to teach, tutor or train, we have you covered.
 * Version: 4.24.3.1.24.1
 * Author: Automattic
 * Author URI: https://automattic.com
 * License: GPL version 2 or later - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 * Requires at least: 6.4
 * Tested up to: 6.6
 * Requires PHP: 7.4
 * WC requires at least: 4.0
 * WC tested up to: 9.1
 * Text Domain: sensei-compat
 * Domain Path: /languages
 *
 * Woo: 152116:bad2a02a063555b7e2bee59924690763
 *
 * @package sensei-compat
 */

use Automattic\WooCommerce\Utilities\FeaturesUtil;

define( 'SENSEI_COMPAT_PLUGIN', true );
define( 'SENSEI_COMPAT_PLUGIN_BASENAME', plugin_basename( __FILE__ ) );

// Declare compatibility with WooCommerce High-Performance Order Storage (HPOS).
// This is done before the conflicts check to ensure the compatibility warning is not shown if the check do not pass.
add_action(
	'before_woocommerce_init',
	function () {
		if ( class_exists( FeaturesUtil::class ) ) {
			FeaturesUtil::declare_compatibility( 'custom_order_tables', __FILE__, true );
		}
	}
);

require_once __DIR__ . '/sensei-compat-conflicts-checker.php';
if ( woothemes_sensei_has_conflicts() ) {
	return;
}

require_once __DIR__ . '/class-sensei-compat-dependency-checker.php';
if ( Sensei_Compat_Dependency_Checker::is_php_version_at_least( '7.4.0' ) ) {
	add_action( 'admin_notices', array( 'Sensei_Compat_Dependency_Checker', 'show_php_notice' ) );
	add_action( 'admin_init', array( 'Sensei_Compat_Dependency_Checker', 'deactivate_self' ) );
	return;
}

add_action( 'plugins_loaded', 'sensei_compat_load', 1 );
register_activation_hook( __FILE__, 'sensei_compat_activate' );
register_deactivation_hook( __FILE__, 'sensei_compat_deactivate' );

require_once __DIR__ . '/class-sensei-compat-admin.php';
add_action( 'init', array( 'Sensei_Compat_Admin', 'init' ) );

/**
 * Load Sensei Pro (WC Paid Courses).
 *
 * @since 1.0.0
 * @access private
 */
function sensei_compat_load() {
	static $loaded = false;
	if ( $loaded ) {
		return;
	}
	$loaded = true;

	if ( Sensei_Compat_Dependency_Checker::is_legacy_sensei_active() ) {
		add_action( 'admin_notices', array( 'Sensei_Compat_Dependency_Checker', 'show_legacy_sensei_notice' ) );
		add_action( 'admin_init', array( 'Sensei_Compat_Dependency_Checker', 'deactivate_self' ) );
		define( 'SENSEI_COMPAT_LOADING_SENSEI', false );
		define( 'SENSEI_COMPAT_LOADING_SENSEI_PRO', false );
		return;
	}

	if ( ! Sensei_Compat_Dependency_Checker::is_sensei_active() ) {
		define( 'SENSEI_COMPAT_LOADING_SENSEI', true );
	} else {
		define( 'SENSEI_COMPAT_LOADING_SENSEI', false );
	}

	add_filter( 'load_script_textdomain_relative_path', 'sensei_filter_script_textdomain_relative_path' );
	add_filter( 'loco_compile_script_reference', 'woothemes_sensei_fix_correct_path_check_for_loco_translate', 999, 3 );

	if ( SENSEI_COMPAT_LOADING_SENSEI ) {
		add_filter( 'load_textdomain_mofile', 'sensei_compat_load_sensei_static_translations', 10, 2 );

		require_once __DIR__ . '/plugins/sensei-lms/sensei-lms.php';

		if ( ! defined( 'SENSEI_IGNORE_ACTIVATION_CONFLICT' ) ) {
			// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedConstantFound
			define( 'SENSEI_IGNORE_ACTIVATION_CONFLICT', true );
		}
	}

	define( 'SENSEI_COMPAT_LOADING_SENSEI_PRO', true );
	require_once __DIR__ . '/plugins/sensei-pro/sensei-pro.php';
}

/**
 * We are tweaking the relative path for translations (see `sensei_filter_script_textdomain_relative_path`).
 * so that we can still use existing translations (despite files being packaged in a different way).
 *
 * Unfortunately Loco Translate checks for the JS file to exist before JSON translations are generated.
 * Here we are checking for the correct path ourselves thanks to a hook provided by Loco Translate.
 * More details here: https://wordpress.org/support/topic/request-disable-file-existence-check-to-generate-json-files
 * If we don't do this, translations for JS won't be generated when using Loco Translate.
 *
 * @since  1.0.3
 * @since  1.17.0 Check Sensei only when using Sensei Compat.
 * @access private
 *
 * @param boolean $file_exists Whether the JS file exists or not.
 * @param string  $relative    Path for the JS file.
 * @param string  $domain      Translation domain.
 * @return bool
 */
function woothemes_sensei_fix_correct_path_check_for_loco_translate( $file_exists, $relative, $domain ) {
	if ( 'sensei-pro' === $domain ) {
		return file_exists( __DIR__ . '/plugins/sensei-pro/' . $relative );
	}
	if ( 'sensei-lms' === $domain && SENSEI_COMPAT_LOADING_SENSEI ) {
		return file_exists( __DIR__ . '/plugins/sensei-lms/' . $relative );
	}

	return $file_exists;
}

/**
 * Loads the static translations if available. Set to load at a very low priority so WP_LANG translations' strings
 * are prioritized.
 *
 * @since  1.0.0
 * @access private
 *
 * @param string $mofile Path to the .mo file.
 * @param string $domain Text domain. Unique identifier for retrieving translated strings.
 * @return string
 */
function sensei_compat_load_sensei_static_translations( $mofile, $domain ) {
	$mofile_test   = WP_PLUGIN_DIR . '/' . dirname( plugin_basename( __DIR__ . '/plugins/sensei-lms/sensei-lms.php' ) ) . '/lang/' . basename( $mofile );
	$static_mofile = __DIR__ . '/languages/' . basename( $mofile );

	if ( 'sensei-lms' !== $domain || $mofile_test !== $mofile || ! is_readable( $static_mofile ) ) {
		return $mofile;
	}

	return $static_mofile;
}

/**
 * Filters the relative path to fix textdomain JSON filename hash.
 *
 * @since  2.4.0
 * @since  1.17.0 Change path for Sensei only when using Sensei Compat.
 * @access private
 *
 * @param string $relative Relative path to the script file.
 *
 * @return string Filtered relative.
 */
function sensei_filter_script_textdomain_relative_path( $relative ) {
	$sensei_prefix     = 'plugins/sensei-lms/';
	$sensei_pro_prefix = 'plugins/sensei-pro/';

	$relative = preg_replace( '/^' . preg_quote( $sensei_pro_prefix, '/' ) . '/', '', $relative );

	if ( SENSEI_COMPAT_LOADING_SENSEI ) {
		$relative = preg_replace( '/^' . preg_quote( $sensei_prefix, '/' ) . '/', '', $relative );
	}

	return $relative;
}

/**
 * Ensure that the activation hooks for the plugins are run.
 *
 * @since 1.0.0
 * @access private
 */
function sensei_compat_activate() {
	sensei_compat_load();
	if ( defined( 'SENSEI_COMPAT_LOADING_SENSEI' ) && SENSEI_COMPAT_LOADING_SENSEI ) {
		$sensei_plugin_file = __DIR__ . '/plugins/sensei-lms/sensei-lms.php';
		// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound
		do_action( 'activate_' . plugin_basename( $sensei_plugin_file ) );
	}

	if ( defined( 'SENSEI_COMPAT_LOADING_SENSEI_PRO' ) && SENSEI_COMPAT_LOADING_SENSEI_PRO ) {
		$sensei_pro_plugin_file = __DIR__ . '/plugins/sensei-pro/sensei-pro.php';
		// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound
		do_action( 'activate_' . plugin_basename( $sensei_pro_plugin_file ) );
	}
}


/**
 * Ensure that the deactivation hooks for the plugins are run.
 *
 * @since 2.0.0
 * @access private
 */
function sensei_compat_deactivate() {
	sensei_compat_load();
	if ( defined( 'SENSEI_COMPAT_LOADING_SENSEI' ) && SENSEI_COMPAT_LOADING_SENSEI ) {
		$sensei_plugin_file = __DIR__ . '/plugins/sensei-lms/sensei-lms.php';
		// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound
		do_action( 'deactivate_' . plugin_basename( $sensei_plugin_file ) );
	}

	if ( defined( 'SENSEI_COMPAT_LOADING_SENSEI' ) && SENSEI_COMPAT_LOADING_SENSEI_PRO ) {
		$sensei_pro_plugin_file = __DIR__ . '/plugins/sensei-pro/sensei-pro.php';
		// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound
		do_action( 'deactivate_' . plugin_basename( $sensei_pro_plugin_file ) );
	}
}
