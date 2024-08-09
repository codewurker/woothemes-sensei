/**
 * External dependencies
 */
import questionAnswersBlock from 'sensei/assets/blocks/quiz/question-answers-block';
import { ReactComponent as icon } from 'sensei/assets/icons/question.svg';
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import questionBlock from '../question-block';

// New block reusing the edit component from Sensei Core's QuestionDescriptionBlock.
export default {
	...questionAnswersBlock,
	name: 'sensei-pro/question-answers',
	title: __( 'Answers', 'sensei-lms' ),
	description: __( 'Question Answers.', 'sensei-pro' ),
	supports: {
		sensei: {
			frontend: true,
		},
	},
	icon,
	parent: [ questionBlock.name ],
	save: ( { children, blockProps } ) => {
		return <div { ...blockProps }>{ children }</div>;
	},
	attributes: {
		...questionAnswersBlock.attributes,
		slot: { type: 'string' },
	},
};
