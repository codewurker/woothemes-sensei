/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import meta from './block.json';
import variations from './variations';
import transforms from './transforms';
import edit from './interactive-video-edit';
import save from './interactive-video-save';
import { ReactComponent as icon } from '../../icons/interactive-video-block.svg';

export { default as addTransformButtonToVideoBlocks } from './add-transform-button-to-video-blocks';

/**
 * Interactive Video Block definition.
 */
const interactiveVideoBlock = {
	...meta,
	title: __( 'Interactive Video', 'sensei-pro' ),
	description: __( 'Interactive Video Block.', 'sensei-pro' ),
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
	variations,
	transforms,
	edit,
	save,
};

export default interactiveVideoBlock;
