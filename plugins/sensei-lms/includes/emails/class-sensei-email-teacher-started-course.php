<?php
// phpcs:disable VariableAnalysis.CodeAnalysis.VariableAnalysis -- Prevent "Unused global variable $sensei_email_data"
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( ! class_exists( 'Sensei_Email_Teacher_Started_Course', false ) ) :

	/**
	 * Teacher Started Course
	 *
	 * An email sent to the teacher when one of their students starts a course.
	 *
	 * @package Users
	 * @author Automattic
	 *
	 * @since       1.6.0
	 */
	class Sensei_Email_Teacher_Started_Course {

		var $template;
		var $subject;
		var $heading;
		var $recipient;
		var $learner;
		var $teacher;

		/**
		 * Constructor
		 */
		function __construct() {
			$this->template = 'teacher-started-course';
		}

		/**
		 * trigger function.
		 *
		 * @param int $learner_id
		 * @param int $course_id
		 *
		 * @return void
		 */
		function trigger( $learner_id = 0, $course_id = 0 ) {
			global  $sensei_email_data;

			// Get learner user object
			$this->learner = new WP_User( $learner_id );

			// Get teacher ID and user object
			$teacher_id    = get_post_field( 'post_author', $course_id, 'raw' );
			$this->teacher = new WP_User( $teacher_id );

			// Set recipient (learner)
			$this->recipient = stripslashes( $this->teacher->user_email );

			/**
			 * Action hook before email is sent.
			 *
			 * @hook sensei_before_mail
			 *
			 * @param {string} $recipient The email recipient.
			 */
			do_action( 'sensei_before_mail', $this->recipient );

			/**
			 * Filter the email subject.
			 *
			 * @hook sensei_email_subject
			 *
			 * @param {string} $subject The email subject.
			 * @param {string} $template The email template.
			 * @return {string} The filtered email subject.
			 */
			$this->subject = apply_filters(
				'sensei_email_subject',
				// translators: Placeholder is the blog name.
				sprintf( __( '[%1$s] Your student has started a course', 'sensei-lms' ), get_bloginfo( 'name' ) ),
				$this->template
			);

			/**
			 * Filter the email heading.
			 *
			 * @hook sensei_email_heading
			 *
			 * @param {string} $heading The email heading.
			 * @param {string} $template The email template.
			 * @return {string} The filtered email heading.
			 */
			$this->heading = apply_filters( 'sensei_email_heading', __( 'Your student has started a course', 'sensei-lms' ), $this->template );

			// Construct data array
			$sensei_email_data = apply_filters(
				'sensei_email_data',
				array(
					'template'     => $this->template,
					'heading'      => $this->heading,
					'teacher_id'   => $teacher_id,
					'learner_id'   => $learner_id,
					'learner_name' => $this->learner->display_name,
					'course_id'    => $course_id,
				),
				$this->template
			);

			// Send mail
			Sensei()->emails->send( $this->recipient, $this->subject, Sensei()->emails->get_content( $this->template ) );

			/**
			 * Action hook after email is sent.
			 *
			 * @hook sensei_after_sending_email
			 */
			do_action( 'sensei_after_sending_email' );
		}
	}

endif;
