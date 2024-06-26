<?php
/**
 * Timed Quiz lesson pattern template file.
 *
 * @package  sensei-pro
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

?>
<!-- wp:paragraph {"placeholder":"<?php esc_html_e( 'Write quiz introduction here. By default, the quiz timer is set for 5 minutes. Click on Quiz settings below to change the amount of time allowed.', 'sensei-pro' ); ?>","className":"sensei-content-description"} -->
<p class="sensei-content-description"></p>
<!-- /wp:paragraph -->

<!-- wp:sensei-lms/lesson-actions -->
<div class="wp-block-sensei-lms-lesson-actions">
	<div class="sensei-buttons-container">
		<!-- wp:sensei-lms/button-view-quiz {"inContainer":true} -->
		<div class="wp-block-sensei-lms-button-view-quiz is-style-default sensei-buttons-container__button-block wp-block-sensei-lms-button-view-quiz__wrapper">
			<div class="wp-block-sensei-lms-button-view-quiz is-style-default wp-block-sensei-button wp-block-button has-text-align-left">
				<button class="wp-block-button__link"><?php esc_html_e( 'Take Quiz', 'sensei-pro' ); ?></button>
			</div>
		</div>
		<!-- /wp:sensei-lms/button-view-quiz -->

		<!-- wp:sensei-lms/button-complete-lesson {"inContainer":true} -->
		<div class="wp-block-sensei-lms-button-complete-lesson is-style-default sensei-buttons-container__button-block wp-block-sensei-lms-button-complete-lesson__wrapper">
			<div class="wp-block-sensei-lms-button-complete-lesson is-style-default wp-block-sensei-button wp-block-button has-text-align-left">
				<button class="wp-block-button__link sensei-stop-double-submission"><?php esc_html_e( 'Complete Lesson', 'sensei-pro' ); ?></button>
			</div>
		</div>
		<!-- /wp:sensei-lms/button-complete-lesson -->

		<!-- wp:sensei-lms/button-next-lesson {"inContainer":true} -->
		<div class="wp-block-sensei-lms-button-next-lesson is-style-default sensei-buttons-container__button-block wp-block-sensei-lms-button-next-lesson__wrapper">
			<div class="wp-block-sensei-lms-button-next-lesson is-style-default wp-block-sensei-button wp-block-button has-text-align-left">
				<button class="wp-block-button__link"><?php esc_html_e( 'Next Lesson', 'sensei-pro' ); ?></button>
			</div>
		</div>
		<!-- /wp:sensei-lms/button-next-lesson -->

		<!-- wp:sensei-lms/button-reset-lesson {"inContainer":true} -->
		<div class="wp-block-sensei-lms-button-reset-lesson is-style-outline sensei-buttons-container__button-block wp-block-sensei-lms-button-reset-lesson__wrapper">
			<div class="wp-block-sensei-lms-button-reset-lesson is-style-outline wp-block-sensei-button wp-block-button has-text-align-left">
				<button class="wp-block-button__link sensei-stop-double-submission"><?php esc_html_e( 'Reset Lesson', 'sensei-pro' ); ?></button>
			</div>
		</div>
		<!-- /wp:sensei-lms/button-reset-lesson -->
	</div>
</div>
<!-- /wp:sensei-lms/lesson-actions -->

<!-- wp:sensei-lms/quiz {"options":{"passRequired":false,"quizPassmark":0,"autoGrade":false,"allowRetakes":false,"showQuestions":null,"randomQuestionOrder":false,"failedIndicateIncorrect":true,"failedShowCorrectAnswers":true,"failedShowAnswerFeedback":true,"buttonTextColor":null,"buttonBackgroundColor":null,"pagination":{"paginationNumber":null,"showProgressBar":false,"progressBarRadius":6,"progressBarHeight":12,"progressBarColor":null,"progressBarBackground":null},"enableQuizTimer":"1","timerValue":300},"isPostTemplate":true} /-->
