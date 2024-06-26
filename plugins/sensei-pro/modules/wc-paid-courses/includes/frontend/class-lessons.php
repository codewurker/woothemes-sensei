<?php
/**
 * File containing the class \Sensei_WC_Paid_Courses\Frontend\Lessons.
 *
 * @package sensei-wc-paid-courses
 * @since   1.0.0
 */

namespace Sensei_WC_Paid_Courses\Frontend;

use Sensei_Utils;
use Sensei_WC;
use Sensei_WC_Paid_Courses\Sensei_WC_Paid_Courses;
use Sensei_Context_Notices;
use Sensei_Course;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class for admin functionality related to courses.
 *
 * @class Sensei_WC_Paid_Courses\Frontend\Lessons
 */
final class Lessons {
	/**
	 * Instance of class.
	 *
	 * @var self
	 */
	private static $instance;

	/**
	 * Lessons constructor. Prevents other instances from being created outside of `Lessons::instance()`.
	 */
	private function __construct() {}

	/**
	 * Initializes the class and adds all filters and actions related to the frontend.
	 *
	 * @since 1.0.0
	 */
	public function init() {
		add_filter( 'sensei_lesson_preview_title_text', [ $this, 'lesson_preview_title_text' ], 10, 2 );
		add_action( 'template_redirect', [ $this, 'maybe_add_purchase_notice' ], 11 );
	}

	/**
	 * Filter if we should show the course sign up notice on the lesson page.
	 *
	 * @deprecated 2.0.0
	 *
	 * @param bool $show_course_signup_notice True if we should show the sign up notice.
	 * @param int  $course_id                 Post ID for the course.
	 * @return bool
	 */
	public function do_show_course_signup_notice( $show_course_signup_notice, $course_id ) { // phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.FoundAfterLastUsed -- This is a deprecated method.
		_deprecated_function( __METHOD__, '2.0.0' );

		return $show_course_signup_notice;
	}

	/**
	 * Filter the course sign up notice message on the lesson page.
	 *
	 * @deprecated 2.0.0
	 *
	 * @param string $message     Message to show user.
	 * @param int    $course_id   Post ID for the course.
	 * @param string $course_link Generated HTML link to the course.
	 * @return string
	 */
	public function course_signup_notice_message( $message, $course_id, $course_link ) {  // phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.FoundAfterLastUsed -- This is a deprecated method.
		_deprecated_function( __METHOD__, '2.0.0' );

		return $message;
	}

	/**
	 * Filter the lesson preview title text and set to "Free Preview" for
	 * lessons in a paid course.
	 *
	 * @param string $preview_text The previous preview text.
	 * @param int    $course_id    Post ID for the course.
	 * @return string
	 */
	public function lesson_preview_title_text( $preview_text, $course_id ) {
		if ( Sensei_WC::is_course_purchasable( $course_id ) ) {
			$preview_text = __( 'Free Preview', 'sensei-pro' );
		}

		return $preview_text;
	}

	/**
	 * Override the enrollment notice to a purchase notice in the lesson
	 * when using Course Theme, and user is logged-out or not enrolled.
	 *
	 * @since 2.6.3
	 *
	 * @return void
	 */
	public function maybe_add_purchase_notice() {
		if (
			! class_exists( 'Sensei_Course_Theme_Option' )
			|| ! class_exists( 'Sensei_Context_Notices' )
			|| 'lesson' !== get_post_type()
			|| ! Sensei_WC_Paid_Courses::should_use_learning_mode()
		) {
			return;
		}

		$lesson_id = Sensei_Utils::get_current_lesson();
		$course_id = Sensei()->lesson->get_course_id( $lesson_id );

		if (
			! Sensei_WC::is_course_purchasable( $course_id )
			|| Sensei_Course::is_user_enrolled( $course_id )
			// Keep original notice if it contains a not completed prerequisite.
			|| ! Sensei_Course::is_prerequisite_complete( $course_id )
		) {
			return;
		}

		$purchase_url = $this->get_purchase_course_url( $course_id );
		$notices      = Sensei_Context_Notices::instance( 'course_theme_locked_lesson' );
		$notice_key   = 'locked_lesson';
		$notice_title = __( 'You don\'t have access to this lesson', 'sensei-pro' );
		$notice_icon  = 'lock';

		// Logged out notice.
		if ( ! is_user_logged_in() ) {
			$user_can_register = get_option( 'users_can_register' );

			// Sign in URL.
			$current_link = get_permalink();
			$sign_in_url  = $user_can_register ? sensei_user_registration_url( true, $current_link ) : sensei_user_login_url( $current_link );

			$actions = [
				[
					'label' => __( 'Purchase course', 'sensei-pro' ),
					'url'   => $purchase_url,
					'style' => 'primary wp-block-button__link wp-element-button',
				],
				[
					'label' => __( 'Sign in', 'sensei-pro' ),
					'url'   => $sign_in_url,
					'style' => 'secondary wp-element-button is-link',
				],
			];

			$notice_text = __( 'Please purchase this course, or sign in if you\'re already enrolled, to access the course content.', 'sensei-pro' );

			if ( Sensei_Utils::is_preview_lesson( $lesson_id ) ) {
				$notice_text  = __( 'Purchase this course, or sign in if you\'re already enrolled, to take this lesson.', 'sensei-pro' );
				$notice_title = __( 'This is a preview lesson', 'sensei-pro' );
				$notice_icon  = 'eye';
			}

			$notices->add_notice(
				$notice_key,
				$notice_text,
				$notice_title,
				$actions,
				$notice_icon
			);

			return;
		}

		// Not enrolled notice.
		$actions = [
			[
				'label' => __( 'Purchase course', 'sensei-pro' ),
				'url'   => $purchase_url,
				'style' => 'primary wp-block-button__link wp-element-button',
			],
		];

		$notice_text = __( 'Please purchase this course to access the content.', 'sensei-pro' );

		if ( Sensei_Utils::is_preview_lesson( $lesson_id ) ) {
			$notice_text  = __( 'Purchase this course to take this lesson.', 'sensei-pro' );
			$notice_title = __( 'This is a preview lesson', 'sensei-pro' );
			$notice_icon  = 'eye';
		}

		$notices->add_notice(
			$notice_key,
			$notice_text,
			$notice_title,
			$actions,
			$notice_icon
		);
	}

	/**
	 * Get purchase course URL.
	 *
	 * @param int $course_id Course ID.
	 *
	 * @return string Purchase course URL
	 */
	private function get_purchase_course_url( $course_id ) {
		/**
		 * Filter the purchase course URL.
		 *
		 * @since 1.2.0
		 * @hook sensei_pro_learning_mode_purchase_course_url
		 *
		 * @param {string} $purchase_course_url Purchase course URL.
		 * @param {int}    $course_id           Course ID.
		 *
		 * @return {string} Returns filtered purchase course URL.
		 */
		return apply_filters(
			'sensei_pro_learning_mode_purchase_course_url',
			get_permalink( $course_id ),
			$course_id
		);
	}

	/**
	 * Fetches an instance of the class.
	 *
	 * @return self
	 */
	public static function instance() {
		if ( ! self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}
}
