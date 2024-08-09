/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './summary-edit';
import save from './summary-save';
/**
 * WordPress dependencies
 */
import { heading as icon } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

export default {
	...metadata,
	title: __( 'Title', 'sensei-pro' ),
	description: __( 'The accordion section title.', 'sensei-pro' ),
	edit,
	save,
	icon,
};
