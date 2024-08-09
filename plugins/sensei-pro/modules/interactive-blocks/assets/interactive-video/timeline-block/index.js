/**
 * Internal dependencies
 */
import meta from './block.json';
import edit from './timeline-edit';
import save from './timeline-save';
import { ReactComponent as icon } from '../../icons/interactive-video-block.svg';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Timeline Block definition.
 */
const timelineBlock = {
	...meta,
	title: __( 'Interactive Video - Timeline', 'sensei-pro' ),
	description: __(
		'Timeline for the Interactive Video Block.',
		'sensei-pro'
	),
	keywords: [
		__( 'sensei', 'sensei-pro' ),
		__( 'video', 'sensei-pro' ),
		__( 'interactive', 'sensei-pro' ),
		__( 'videopress', 'sensei-pro' ),
		__( 'youtube', 'sensei-pro' ),
		__( 'vimeo', 'sensei-pro' ),
		__( 'timeline', 'sensei-pro' ),
	],
	icon,
	edit,
	save,
};

export default timelineBlock;
