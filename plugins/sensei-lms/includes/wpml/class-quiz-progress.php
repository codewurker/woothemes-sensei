<?php
/**
 * File containing \Sensei\WPML\Quiz_Progress class.
 *
 * @package sensei
 */

namespace Sensei\WPML;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class Quiz_Progress
 *
 * Compatibility code with WPML.
 *
 * @since 4.23.1
 *
 * @internal
 */
class Quiz_Progress {
	use WPML_API;

	/**
	 * Init hooks.
	 */
	public function init() {
		add_filter( 'sensei_quiz_progress_create_quiz_id', array( $this, 'translate_quiz_id' ) );
		add_filter( 'sensei_quiz_progress_get_quiz_id', array( $this, 'translate_quiz_id' ) );
		add_filter( 'sensei_quiz_progress_has_quiz_id', array( $this, 'translate_quiz_id' ) );
		add_filter( 'sensei_quiz_progress_delete_for_quiz_quiz_id', array( $this, 'translate_quiz_id' ) );
		add_filter( 'sensei_quiz_progress_find_quiz_id', array( $this, 'translate_quiz_id' ) );
	}

	/**
	 * Translate quiz ID.
	 *
	 * @since 4.23.1
	 *
	 * @internal
	 *
	 * @param int $quiz_id Quiz ID.
	 * @return int
	 */
	public function translate_quiz_id( $quiz_id ) {
		$details = $this->get_element_language_details( $quiz_id, 'quiz' );

		$original_language_code = $details['source_language_code'] ?? $details['language_code'] ?? null;

		return $this->get_object_id( $quiz_id, 'quiz', true, $original_language_code );
	}
}
