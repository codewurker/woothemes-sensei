/**
 * External dependencies
 */
import questionDescriptionBlock from 'sensei/assets/blocks/quiz/question-description-block';
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
	...questionDescriptionBlock,
	name: 'sensei-pro/question-description',
	title: __( 'Description', 'sensei-pro' ),
	description: __( 'Question Description.', 'sensei-pro' ),
	icon,
	usesContext: null,
	parent: [ questionBlock.name ],
	supports: {
		sensei: {
			frontend: true,
		},
	},
	save: ( { blockProps, children } ) => (
		<div { ...blockProps }>{ children }</div>
	),
	attributes: {
		...questionDescriptionBlock.attributes,
		slot: { type: 'string' },
	},
};
