/**
 * External dependencies
 */
import {
	answerFeedbackCorrectBlock as senseiAnswerFeedbackCorrectBlock,
	answerFeedbackIncorrectBlock as senseiAnswerFeedbackIncorrectBlock,
} from 'sensei/assets/blocks/quiz/answer-feedback-block';
import { ReactComponent as icon } from 'sensei/assets/icons/question.svg';
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import questionBlock from '../question-block';
import { InnerBlocksWrapper } from '../../shared/block-frontend/editor';

const saveIfNotEmpty = ( { innerBlocks, children, blockProps } ) => {
	// Check if only a single empty paragraph block.
	const firstBlock = innerBlocks[ 0 ];
	const isEmpty =
		1 === innerBlocks.length &&
		'core/paragraph' === firstBlock.name &&
		'' === firstBlock.attributes.content;

	return (
		<div
			{ ...blockProps }
			children={ isEmpty ? <InnerBlocksWrapper /> : children }
		/>
	);
};

const sharedSettings = {
	supports: {
		sensei: {
			frontend: true,
		},
	},
	icon,
	parent: [ questionBlock.name ],
	save: saveIfNotEmpty,
	attributes: {
		...senseiAnswerFeedbackCorrectBlock.attributes,
		slot: { type: 'string' },
	},
};

export const answerFeedbackCorrectBlock = {
	...senseiAnswerFeedbackCorrectBlock,
	...sharedSettings,
	name: 'sensei-pro/question-answer-feedback-correct',
	title: __( 'Correct Answer Feedback', 'sensei-pro' ),
	description: __( 'Display correct answer feedback.', 'sensei-pro' ),
};

export const answerFeedbackIncorrectBlock = {
	...senseiAnswerFeedbackIncorrectBlock,
	...sharedSettings,
	name: 'sensei-pro/question-answer-feedback-incorrect',
	title: __( 'Incorrect Answer Feedback', 'sensei-pro' ),
	description: __( 'Display incorrect answer feedback.', 'sensei-pro' ),
};
