/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './content-edit';
import save from './content-save';
/**
 * WordPress dependencies
 */
import { group as icon } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

export default {
	...metadata,
	title: __( 'Content', 'sensei-pro' ),
	description: __( 'The accordion section content.', 'sensei-pro' ),
	edit,
	save,
	icon,
};
