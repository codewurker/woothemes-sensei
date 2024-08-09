/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './section-edit';
import save from './section-save';
/**
 * WordPress dependencies
 */
import { ReactComponent as icon } from '../../icons/accordion-section.svg';
import { __ } from '@wordpress/i18n';

export default {
	...metadata,
	title: __( 'Section', 'sensei-pro' ),
	description: __(
		'Individual expandable block with title and content.',
		'sensei-pro'
	),
	edit,
	save,
	icon,
};
