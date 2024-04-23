<?php
/**
 * Sensei Uninstall.
 *
 * Uninstalls the plugin and associated data.
 *
 * @package sensei-compat
 * @since   1.0.0
 */

if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit();
}

require_once __DIR__ . '/plugins/sensei-lms/uninstall.php';
require_once __DIR__ . '/plugins/sensei-pro/uninstall.php';

/**
 * Runs when the compatibility plugin is uninstalled.
 *
 * @since 1.0.0
 */
do_action( 'sensei_compat_plugin_uninstall' );
