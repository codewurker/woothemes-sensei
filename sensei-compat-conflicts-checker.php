<?php
/**
 * Conflicts checker.
 *
 * @package woothemes-sensei
 *
 * @since 1.2.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once __DIR__ . '/plugins/sensei-pro/modules/shared-module/includes/class-conflicts-checker.php';

// The namespace is replaced with `Woothemes_Sensei` in the `Conflicts_Checker` during the build.
use Woothemes_Sensei\Conflicts_Checker;

/**
 * Tells if Sensei Pro (Paid Courses) has conflicts with other activated plugins.
 */
function woothemes_sensei_has_conflicts(): bool {
	$checker = new Conflicts_Checker(
		[
			'plugin_slug' => 'woothemes-sensei',
			'conflicts'   => [
				[
					'plugin_slug' => 'sensei-pro',
					'message'     => __(
						'<strong>Sensei Pro</strong> plugin already provides all the features that
						<strong>Sensei Pro (WC Paid Courses)</strong> has. If you
						still want to activate the <strong>Sensei Pro (WooCommerce Paid Courses)</strong>
						then deactivate the <strong>Sensei Pro</strong> first.',
						'woothemes-sensei'
					),
				],
				[
					'plugin_slug'  => 'sensei-interactive-blocks',
					'deactivate'   => 'sensei-interactive-blocks',
					'message_type' => 'notice',
					'message'      => __(
						"<strong>Sensei Blocks</strong> plugin has been disabled. All the features in <strong>Sensei Blocks</strong>
						are included in <strong>Sensei Pro (WC Paid Courses)</strong>. You don't need both plugins.",
						'sensei-pro'
					),
				],
			],
		]
	);

	return $checker->has_conflicts();
}
