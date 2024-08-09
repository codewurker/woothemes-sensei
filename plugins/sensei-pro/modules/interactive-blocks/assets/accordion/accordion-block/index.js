/**
 * Internal dependencies
 */

import metadata from './block.json';
import edit from './accordion-edit';
import save from './accordion-save';

/**
 * WordPress dependencies
 */
import { ReactComponent as icon } from '../../icons/accordion.svg';
import { __ } from '@wordpress/i18n';

export default {
	...metadata,
	title: __( 'Accordion', 'sensei-pro' ),
	description: __(
		'Contains one or more sections with title and content.',
		'sensei-pro'
	),
	edit,
	save,
	icon,
};
