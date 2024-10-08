<?php
// phpcs:disable VariableAnalysis.CodeAnalysis.VariableAnalysis -- Prevent "Unused global variable $sensei_email_data"
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( ! class_exists( 'Sensei_Email_Learner_Graded_Quiz', false ) ) :

	/**
	 * Learner Graded Quiz
	 *
	 * An email sent to the learner when their quiz has been graded (auto or manual).
	 *
	 * @package Users
	 * @author Automattic
	 *
	 * @since       1.6.0
	 */
	class Sensei_Email_Learner_Graded_Quiz {

		var $template;
		var $subject;
		var $heading;
		var $recipient;
		var $user;

		/**
		 * Constructor
		 *
		 * @access public
		 */
		function __construct() {
			$this->template = 'learner-graded-quiz';
		}

		/**
		 * trigger function.
		 *
		 * @param int $user_id
		 * @param int $quiz_id
		 * @param int $grade
		 * @param int $passmark
		 *
		 * @return void
		 */
		function trigger( $user_id = 0, $quiz_id = 0, $grade = 0, $passmark = 0 ) {

			global  $sensei_email_data;

			$lesson_id = get_post_meta( $quiz_id, '_quiz_lesson', true );

			if ( ! Sensei_Utils::user_started_lesson( $lesson_id, $user_id ) ) {
				return;
			}

			// Get learner user object
			$this->user = new WP_User( $user_id );

			// Set recipient (learner)
			$this->recipient = stripslashes( $this->user->user_email );

			/**
			 * Action hook before email is sent.
			 *
			 * @hook sensei_before_mail
			 *
			 * @param {string} $recipient The recipient email.
			 */
			do_action( 'sensei_before_mail', $this->recipient );

			// translators: Placeholder is the blog name.
			$this->subject = apply_filters( 'sensei_email_subject', sprintf( __( '[%1$s] Your quiz has been graded', 'sensei-lms' ), get_bloginfo( 'name' ) ), $this->template );
			$this->heading = apply_filters( 'sensei_email_heading', __( 'Your quiz has been graded', 'sensei-lms' ), $this->template );

			// Get passed flag
			$passed = __( 'failed', 'sensei-lms' );
			if ( $grade >= $passmark ) {
				$passed = __( 'passed', 'sensei-lms' );
			}

			// Get grade tye (auto/manual)
			$grade_type = get_post_meta( $quiz_id, '_quiz_grade_type', true );

			if ( 'auto' == $grade_type ) {
				// translators: Placeholder is the blog name.
				$this->subject = apply_filters( 'sensei_email_subject', sprintf( __( '[%1$s] You have completed a quiz', 'sensei-lms' ), get_bloginfo( 'name' ) ), $this->template );
				$this->heading = apply_filters( 'sensei_email_heading', __( 'You have completed a quiz', 'sensei-lms' ), $this->template );
			}

			// Construct data array
			$sensei_email_data = apply_filters(
				'sensei_email_data',
				array(
					'template'   => $this->template,
					'heading'    => $this->heading,
					'user_id'    => $user_id,
					'user_name'  => stripslashes( $this->user->display_name ),
					'lesson_id'  => $lesson_id,
					'quiz_id'    => $quiz_id,
					'grade'      => $grade,
					'passmark'   => $passmark,
					'passed'     => $passed,
					'grade_type' => $grade_type,
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
