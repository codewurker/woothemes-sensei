/**
 * Internal dependencies
 */
import meta from './block.json';
import edit from './break-point-edit';
import save from './break-point-save';
import { ReactComponent as icon } from '../../icons/interactive-video-break-point.svg';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Break Point Block definition.
 */
const breakPointBlock = {
	...meta,
	title: __( 'Break Point', 'sensei-pro' ),
	description: __(
		'Break Point for the Interactive Video Block.',
		'sensei-pro'
	),
	keywords: [
		__( 'sensei', 'sensei-pro' ),
		__( 'video', 'sensei-pro' ),
		__( 'interactive', 'sensei-pro' ),
		__( 'videopress', 'sensei-pro' ),
		__( 'youtube', 'sensei-pro' ),
		__( 'vimeo', 'sensei-pro' ),
		__( 'break', 'sensei-pro' ),
		__( 'point', 'sensei-pro' ),
		__( 'timeline', 'sensei-pro' ),
	],
	icon,
	edit,
	save,
};

export default breakPointBlock;
