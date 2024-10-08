<?php
/**
 * File containing the \Sensei\WPML\Email class.
 *
 * @package sensei
 */

namespace Sensei\WPML;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class Email
 *
 * Compatibility code with WPML.
 *
 * @since 4.22.0
 *
 * @internal
 */
class Email {
	/**
	 * Init hooks.
	 */
	public function init() {
		add_action( 'sensei_before_mail', array( $this, 'sensei_before_mail' ) );
		add_action( 'sensei_after_sending_email', array( $this, 'sensei_after_sending_email' ) );
	}

	/**
	 * Switch language for email.
	 *
	 * @internal
	 *
	 * @param string $email_address Recipient's email address.
	 */
	public function sensei_before_mail( $email_address ) {
		/**
		* Switch language for email
		*
		* Allows WPML to switch current language to one preferred by email recipient.
		* WPML checks language set in user preferences and applies it for email string localisation.
		* It runs before any email string is obtained and localised.
		*
		* @since 1.9.7
		*
		* @hook wpml_switch_language_for_email
		*
		* @param {string} $email_address Recipient's email address
		*/
		do_action( 'wpml_switch_language_for_email', $email_address ); // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound
	}

	/**
	 * Restore language after sending email.
	 */
	public function sensei_after_sending_email() {
		/**
		* Restore language after sending email
		*
		* Allows WPML to switch language to the last one before switching with action 'wpml_switch_language_for_email'.
		* It runs just after wp_mail() call.
		*
		* @since 1.9.7
		*
		* @hook wpml_restore_language_from_email
		*/
		do_action( 'wpml_restore_language_from_email' ); // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound
	}
}
