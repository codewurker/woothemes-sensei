<?php
/**
 * Content-lesson.php template file
 *
 * responsible for content on archive like pages. Only shows the lesson excerpt.
 *
 * For single lesson content please see single-lesson.php
 *
 * @author      Automattic
 * @package     Sensei
 * @category    Templates
 * @version     1.9.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

<article <?php post_class( get_the_ID() ); ?> >

	<section class="lesson-content">

		<?php
		/**
		 * Action that runs before the sensei {post_type} content.
		 * It runs inside the sensei content.php template.
		 * This applies to the specific post type that you've targeted.
		 *
		 * @since 1.9.0
		 *
		 * @hook sensei_content_lesson_before
		 *
		 * @param {int} $lesson_id The lesson ID.
		 */
		do_action( 'sensei_content_lesson_before', get_the_ID() );
		?>

		<section class="entry">

			<?php
			/**
			 * Fires just before the post content in the content-lesson.php file.
			 *
			 * @since 1.9.0
			 *
			 * @hook sensei_content_lesson_inside_before
			 *
			 * @param {int} $lesson_id The lesson ID.
			 *
			 * @hooked Sensei()->modules->module_archive_description -  11
			 * @hooked Sensei_Lesson::the_lesson_meta                -  20
			 */
			do_action( 'sensei_content_lesson_inside_before', get_the_ID() );
			?>

			<p class="lesson-excerpt">

				<?php sensei_the_lesson_excerpt(); ?>

			</p>

			<?php
			/**
			 * Fires just after the post content in the lesson-content.php file.
			 *
			 * @since 1.9.0
			 *
			 * @hook sensei_content_lesson_inside_after
			 *
			 * @param {int} $lesson_id The lesson ID.
			 */
			do_action( 'sensei_content_lesson_inside_after', get_the_ID() );
			?>

		</section> <!-- section .entry -->

		<?php
		/**
		 * This action runs after the sensei lesson content.
		 * It runs inside the sensei lesson-content.php template.
		 *
		 * @since 1.9.0
		 *
		 * @hook sensei_content_lesson_after
		 *
		 * @param {int} $lesson_id The lesson ID.
		 */
		do_action( 'sensei_content_lesson_after', get_the_ID() );
		?>

	</section> <!-- article .lesson-content -->

</article> <!-- article .(<?php echo esc_attr( implode( ' ', get_post_class( array( 'lesson', 'post' ) ) ) ); ?>  -->

