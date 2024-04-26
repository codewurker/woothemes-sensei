/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e,t,n,r,o={
/***/24430:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */K:()=>/* binding */d
/* harmony export */});
/* harmony import */var r=n(92694);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * The Course Video Progression settings.
 */
const{courseVideoRequired:o,courseVideoAutoComplete:i,courseVideoAutoPause:s}=window.sensei.courseVideoSettings,a={},d=e=>{let{pauseVideo:t=(()=>{}),registerVideoEndHandler:n=(()=>{}),url:s="",blockElement:d}=e;const c=d.hasAttribute("data-sensei-is-required"),h=d.hasAttribute("data-sensei-is-not-required");
// Block level setting overwrites the course level setting.
(c||o&&!h)&&(
/**
     * Called when a required video for the current lesson is registered.
     *
     * @since 4.4.3
     *
     * @hook sensei.videoProgression.registerVideo Hook used to run an arbitrary code when new required
     *                                             video for the current lesson is registered.
     * @param {Object}      video
     * @param {string}      video.url          The source url of the video.
     * @param {HTMLElement} video.blockElement The video block DOM element.
     */
(0,r.doAction)("sensei.videoProgression.registerVideo",{url:s,blockElement:d}),a[s]={pauseVideo:t,completed:!1},u()),n((()=>{
// Block level setting overwrites the course level setting.
(c||o&&!h)&&(
/**
       * Called when a required video for the current lesson is finished playing.
       *
       * @since 4.4.3
       *
       * @hook sensei.videoProgression.videoEnded Hook used to run an arbitrary code when a required video
       *                                          for the current lesson is finished playing.
       * @param {Object} video
       * @param {string} video.url The source url of the video.
       */
(0,r.doAction)("sensei.videoProgression.videoEnded",{url:s}),a[s].completed=!0,l()&&p()),i&&l()&&m()}))},l=()=>{let e=!0;for(const t in a)a[t].completed||(e=!1);
/**
   * Tells if all the required videos for the current lesson are finished playing or not.
   *
   * @since 4.4.3
   *
   * @hook sensei.videoProgression.allCompleted Hook used to tell if all the required videos for the current lesson have finished playing.
   *
   * @param {boolean} allCompleted Whether all the required videos for the current lesson are completed.
   */return e=(0,r.applyFilters)("sensei.videoProgression.allCompleted",e),e},u=()=>{(0,r.applyFilters)("sensei.videoProgression.preventLessonCompletion",!0)&&document.querySelectorAll('[data-id="complete-lesson-button"]').forEach((e=>{e.disabled=!0,e.addEventListener("click",c)}))},c=e=>(e.preventDefault(),!1),p=()=>{(0,r.applyFilters)("sensei.videoProgression.allowLessonCompletion",!0)&&document.querySelectorAll('[data-id="complete-lesson-button"]').forEach((e=>{e.removeEventListener("click",c),e.disabled=!1}))},m=()=>{const e=document.querySelector('[data-id="complete-lesson-button"]');e&&setTimeout((()=>{e.click()}),3e3)};
/**
 * Map of videos.
 */
/**
 * If pause video setting is set. Then attach an event listener
 * to detect user navigating away and pause the videos.
 */
s&&void 0!==document.hidden&&
// eslint-disable-next-line @wordpress/no-global-event-listener
document.addEventListener("visibilitychange",(()=>{if(document.hidden)for(const e in a){const t=a[e].pauseVideo;"function"==typeof t&&t()}}),!1)
/***/},
/***/59446:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */t:()=>/* binding */s
/* harmony export */});
/* harmony import */var r=n(24430),o=n(39801);
/* harmony import */
/**
 * Internal dependencies
 */
/**
 * Initializes the Video block player.
 *
 * @param {HTMLElement} video The video element of the Video block.
 */
const i=e=>{const t=new o/* ["default"] */.Z(e);(0,r/* .registerVideo */.K)({registerVideoEndHandler:e=>{t.on("ended",e)},pauseVideo:()=>{t.pause()},url:e.src.split("?")[0],blockElement:e.closest("figure")})},s=()=>{document.querySelectorAll(".wp-block-video video").forEach(i)}}
/***/,
/***/21878:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */G:()=>/* binding */s
/* harmony export */});
/* harmony import */var r=n(24430),o=n(39801);
/* harmony import */
/**
 * Internal dependencies
 */
/**
 * Initializes the VideoPress block player.
 *
 * @param {HTMLIFrameElement} iframe The iframe of the VideoPress block.
 */
const i=e=>{const t=new o/* ["default"] */.Z(e);(0,r/* .registerVideo */.K)({registerVideoEndHandler:e=>{t.on("ended",e)},pauseVideo:()=>{t.pause()},url:e.src.split("?")[0],blockElement:e.closest("figure")})},s=()=>{document.querySelectorAll(".wp-block-embed-videopress iframe, .wp-block-jetpack-videopress iframe").forEach(i)}}
/***/,
/***/68519:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */V:()=>/* binding */s
/* harmony export */});
/* harmony import */var r=n(24430),o=n(39801);
/* harmony import */
/**
 * Internal dependencies
 */
/**
 * Initializes Vimeo block video player.
 *
 * @param {HTMLElement} iframe The iframe element of the Vimeo video block.
 */
const i=e=>{const t=new o/* ["default"] */.Z(e),n="https://vimeo.com/"+e.src.split("?")[0].split("/").pop();
// iframe.src should be in the format:
// https://player.vimeo.com/video/VIDEO_ID?other-query-parameters=and-their-values
(0,r/* .registerVideo */.K)({pauseVideo:()=>{t.pause()},registerVideoEndHandler:e=>{t.on("ended",e)},url:n,blockElement:e.closest("figure")})},s=()=>{document.querySelectorAll(".wp-block-embed-vimeo iframe").forEach(i)}}
/***/,
/***/39039:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */$:()=>/* binding */s
/* harmony export */});
/* harmony import */var r=n(24430),o=n(39801);
/* harmony import */
/**
 * Internal dependencies
 */
/**
 * Initializes the YouTube video block player.
 *
 * @param {HTMLElement} iframe The iframe element of the YouTube video block.
 */
const i=e=>{const t=new o/* ["default"] */.Z(e),n="https://www.youtube.com/watch?v="+e.src.split("?")[0].split("/").pop();
// iframe.src should be in the format:
// https://www.youtube.com/embed/VIDEO_ID?other-query-parameters=and-their-values&origin=https://example.com
(0,r/* .registerVideo */.K)({pauseVideo:()=>{t.pause()},registerVideoEndHandler:e=>{t.on("ended",e)},url:n,blockElement:e.closest("figure")})},s=()=>{document.querySelectorAll(".wp-block-embed-youtube iframe").forEach(i)}}
/***/,
/***/39801:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */Z:()=>m
/* harmony export */});
/* unused harmony export useVideoDuration */
/* harmony import */n(69307);
/* harmony import */var r=n(92574),o=n(88483),i=n(85694),s=n(39360),a=n(2427);
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
const d=r.ADAPTER_NAME,l=o.ADAPTER_NAME,u=i.ADAPTER_NAME,c=s.ADAPTER_NAME,p={[d]:r,[l]:o,[u]:i,[c]:s};
/**
 * Hook to get the video duration.
 *
 * @param {Object} player Player instance.
 *
 * @return {number|undefined} The video duration.
 */
const m=
/**
 * A class that abstracts the use of the player APIs: Video, VideoPress, YouTube, and Vimeo.
 */
class{
/**
   * Player constructor.
   *
   * @param {HTMLVideoElement|HTMLIFrameElement} element The player element.
   * @param {Window}                             w       A custom window.
   */
constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;this.playerPromise=null,this.adapterName=null,this.element=e,this.w=t,this.setAdapter()}
/**
   * Set the player adapter.
   */setAdapter(){if(this.element instanceof this.w.HTMLVideoElement)this.adapterName=d;else if(this.element instanceof this.w.HTMLIFrameElement){var e;this.adapterName=null===(e=Object.entries(p).find((e=>{var t;let[,{EMBED_PATTERN:n=null}]=e;return n&&(null===(t=this.element.src)||void 0===t?void 0:t.match(n))})))||void 0===e?void 0:e[0]}this.adapterName||
// eslint-disable-next-line no-console -- We want to expose the element with problem.
console.error("Video adapter not found",this.element)}
/**
   * Get the adapter.
   *
   * @access private
   *
   * @return {Object} The adapter.
   */getAdapter(){return p[this.adapterName]}
/**
   * Get the video player.
   *
   * @return {Promise<Object|HTMLVideoElement|HTMLIFrameElement>} The video player through a promise.
   */getPlayer(){var e;this.playerPromise||(this.playerPromise=(null===(e=this.getAdapter())||void 0===e?void 0:e.initializePlayer(this.element,this.w))||
// A promise that never resolves if it doesn't exist.
Promise.reject(new Error("Failed getting the player")));return this.playerPromise}
/**
   * Get the video duration.
   *
   * @return {Promise<number>} The duration of the video in seconds through a promise.
   */getDuration(){return this.getPlayer().then((e=>this.getAdapter().getDuration(e)))}
/**
   * Get the video current time.
   *
   * @return {Promise<number>} The current video time in seconds through a promise.
   */getCurrentTime(){return this.getPlayer().then((e=>this.getAdapter().getCurrentTime(e))).then((e=>(0,a/* ["default"] */.Z)(e,3)))}
/**
   * Set the video to a current time.
   *
   * @param {number} seconds The video time in seconds to set.
   *
   * @return {Promise} A promise that resolves if the video was set to a current time successfully.
   */setCurrentTime(e){return this.getPlayer().then((t=>this.getAdapter().setCurrentTime(t,e)))}
/**
   * Play the video.
   *
   * @return {Promise} A promise that resolves if the video play was called successfully.
   */play(){return this.getPlayer().then((e=>this.getAdapter().play(e)))}
/**
   * Pause the video.
   *
   * @return {Promise} A promise that resolves if the video pause was called successfully.
   */pause(){return this.getPlayer().then((e=>this.getAdapter().pause(e)))}
/**
   * Add an event listener to the player.
   *
   * @param {string}   eventName Event name (supported: `timeupdate`).
   * @param {Function} callback  Listener callback.
   *
   * @throws Will throw an error if the event is not supported.
   *
   * @return {Promise<Function>} The function to unsubscribe the event through a promise.
   */on(e,t){
// Supported events.
const n={timeupdate:this.onTimeUpdate.bind(this),ended:this.onEnded.bind(this)}[e];if(!n)throw new Error(`Event ${e} not supported`);return n(t)}
/**
   * Wrapper to the `onTimeUpdate` event from the adapters.
   *
   * @access private
   *
   * @param {Function} callback Listener callback.
   *
   * @return {Promise<Function>} The function to unsubscribe the event through a promise.
   */onTimeUpdate(e){const t=t=>{e((0,a/* ["default"] */.Z)(t,3))};return this.getPlayer().then((e=>this.getAdapter().onTimeupdate(e,t,this.w)))}
/**
   * Wrapper to the `onEnded` event from the adapters.
   *
   * @access private
   *
   * @param {Function} callback Listener callback.
   *
   * @return {Promise<Function>} The function to unsubscribe the event through a promise.
   */onEnded(e){return this.getPlayer().then((t=>this.getAdapter().onEnded(t,e,this.w)))}};
/* harmony default export */}
/***/,
/***/2427:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */Z:()=>r
/* harmony export */});
/**
 * Round a number with certain amount of decimal digits.
 *
 * @param {number} number The number to be rounded.
 * @param {number} digits The number of digits to appear after the decimal point.
 *
 * @return {number} Rounded number.
 */
const r=(e,t)=>{const n=Math.pow(10,t);return Math.round((e+Number.EPSILON)*n)/n};
/* harmony default export */}
/***/,
/***/92574:
/***/(e,t,n)=>{n.r(t),
/* harmony export */n.d(t,{
/* harmony export */ADAPTER_NAME:()=>/* binding */r
/* harmony export */,initializePlayer:()=>/* binding */o
/* harmony export */,getDuration:()=>/* binding */i
/* harmony export */,getCurrentTime:()=>/* binding */s
/* harmony export */,setCurrentTime:()=>/* binding */a
/* harmony export */,play:()=>/* binding */d
/* harmony export */,pause:()=>/* binding */l
/* harmony export */,onTimeupdate:()=>/* binding */u
/* harmony export */,onEnded:()=>/* binding */c
/* harmony export */});
/**
 * Adapter name.
 */
const r="video-file",o=e=>new Promise((t=>{
// Return that it's ready when it can get the video duration.
isNaN(e.duration)||t(e),e.addEventListener("durationchange",(()=>{t(e)}),{once:!0})}))
/**
 * Get the video duration.
 *
 * @param {HTMLVideoElement} player The player element.
 *
 * @return {Promise<number>} The duration of the video in seconds through a promise.
 */,i=e=>new Promise((t=>{t(e.duration)}))
/**
 * Get the current video time.
 *
 * @param {HTMLVideoElement} player The player element.
 *
 * @return {Promise<number>} The current video time in seconds through a promise.
 */,s=e=>new Promise((t=>{t(e.currentTime)}))
/**
 * Set the video to a current time.
 *
 * @param {HTMLVideoElement} player  The player element.
 * @param {number}           seconds The video time in seconds to set.
 *
 * @return {Promise} A promise that resolves if the video was set to a current time successfully.
 */,a=(e,t)=>new Promise((n=>{e.currentTime=t,n()}))
/**
 * Play the video.
 *
 * @param {HTMLVideoElement} player The player element.
 *
 * @return {Promise} The native promise from the video play function.
 */,d=e=>e.play()
/**
 * Pause the video.
 *
 * @param {HTMLVideoElement} player The player element.
 *
 * @return {Promise} A promise that resolves if the video was paused successfully.
 */,l=e=>new Promise(((t,n)=>{e.pause(),e.paused&&t(),n(new Error("Video didn't pause"))}))
/**
 * Add an timeupdate event listener to the player.
 *
 * @param {HTMLVideoElement} player   The player element.
 * @param {Function}         callback Listener callback.
 *
 * @return {Function} The function to unsubscribe the event.
 */,u=(e,t)=>{const n=e=>{t(e.target.currentTime)};return e.addEventListener("timeupdate",n),()=>{e.removeEventListener("timeupdate",n)}},c=(e,t)=>(e.addEventListener("ended",t),()=>{e.removeEventListener("timeupdate",t)});
/**
 * Initialize the player.
 *
 * @param {HTMLVideoElement} element The player element.
 *
 * @return {Promise<HTMLVideoElement>} The video player through a promise.
 */}
/***/,
/***/88483:
/***/(e,t,n)=>{n.r(t),
/* harmony export */n.d(t,{
/* harmony export */ADAPTER_NAME:()=>/* binding */r
/* harmony export */,EMBED_PATTERN:()=>/* binding */o
/* harmony export */,initializePlayer:()=>/* binding */i
/* harmony export */,getDuration:()=>/* binding */s
/* harmony export */,getCurrentTime:()=>/* binding */a
/* harmony export */,setCurrentTime:()=>/* binding */d
/* harmony export */,play:()=>/* binding */l
/* harmony export */,pause:()=>/* binding */u
/* harmony export */,onTimeupdate:()=>/* binding */c
/* harmony export */,onEnded:()=>/* binding */p
/* harmony export */});
/**
 * Adapter name.
 */
const r="videopress",o=/(videopress|video\.wordpress)\.com\/.+/i,i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;return new Promise((n=>{
// It was already initialized earlier.
const{duration:r}=e.dataset;if(r)return void n(e);
// eslint-disable-next-line @wordpress/no-global-event-listener -- Not in a React context.
t.addEventListener("message",(t=>{if(t.source!==e.contentWindow)return;const{data:r}=t;"videopress_durationchange"===r.event&&r.durationMs?(
// Set the duration to a dataset in order to be available later,
// and consider the initialization done.
e.dataset.duration=r.durationMs/1e3,
// If current time didn't return yet, set it to `0`.
e.dataset.currentTime||(e.dataset.currentTime=0),n(e)):"videopress_timeupdate"===r.event&&r.currentTimeMs?
// Set the current time to a dataset in order to be available later.
e.dataset.currentTime=r.currentTimeMs/1e3:"videopress_play"===r.event&&(
// Identify that video was already played.
e.dataset.hasPlayed="has-played")}))}))},s=e=>new Promise(((t,n)=>{const{duration:r}=e.dataset;r||n(new Error("Video duration not found")),t(parseFloat(r))}))
/**
 * Get the current video time.
 *
 * @param {HTMLIFrameElement} player The player element.
 *
 * @return {Promise<number>} The current video time in seconds through a promise.
 */,a=e=>new Promise(((t,n)=>{const{currentTime:r}=e.dataset;r?t(parseFloat(r)):n(new Error("Video current time not found"))}))
/**
 * Set the video to a current time.
 *
 * @param {HTMLIFrameElement} player  The player element.
 * @param {number}            seconds The video time in seconds to set.
 *
 * @return {Promise} A promise that resolves if the video was set to a current time successfully.
 */,d=(e,t)=>new Promise((n=>{const r=()=>{e.contentWindow.postMessage({event:"videopress_action_set_currenttime",currentTime:t},"*"),n()};e.dataset.hasPlayed?r():l(e).then((()=>u(e))).then(r)}))
/**
 * Play the video.
 *
 * @param {HTMLIFrameElement} player The player element.
 *
 * @return {Promise} A promise that resolves if the video play was sent successfully.
 */,l=e=>new Promise((t=>{e.contentWindow.postMessage({event:"videopress_action_play"},"*"),t()}))
/**
 * Pause the video.
 *
 * @param {HTMLIFrameElement} player The player element.
 *
 * @return {Promise} A promise that resolves if the video pause was sent successfully.
 */,u=e=>new Promise((t=>{e.contentWindow.postMessage({event:"videopress_action_pause"},"*"),t()}))
/**
 * Add an timeupdate event listener to the player.
 *
 * @param {HTMLIFrameElement} player   The player element.
 * @param {Function}          callback Listener callback.
 * @param {Window}            w        A custom window.
 *
 * @return {Function} The function to unsubscribe the event.
 */,c=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window;const r=n=>{n.source===e.contentWindow&&"videopress_timeupdate"===n.data.event&&n.data.currentTimeMs&&t(n.data.currentTimeMs/1e3)};
// eslint-disable-next-line @wordpress/no-global-event-listener -- Not in a React context.
return n.addEventListener("message",r),()=>{
// eslint-disable-next-line @wordpress/no-global-event-listener -- Not in a React context.
n.removeEventListener("message",r)}},p=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window;const r=n=>{n.source===e.contentWindow&&"videopress_ended"===n.data.event&&t()};
// eslint-disable-next-line @wordpress/no-global-event-listener -- Not in a React context.
return n.addEventListener("message",r),()=>{
// eslint-disable-next-line @wordpress/no-global-event-listener -- Not in a React context.
n.removeEventListener("message",r)}};
/**
 * The embed pattern to check if it's the respective type.
 */}
/***/,
/***/39360:
/***/(e,t,n)=>{n.r(t),
/* harmony export */n.d(t,{
/* harmony export */ADAPTER_NAME:()=>/* binding */r
/* harmony export */,EMBED_PATTERN:()=>/* binding */o
/* harmony export */,initializePlayer:()=>/* binding */i
/* harmony export */,getDuration:()=>/* binding */s
/* harmony export */,getCurrentTime:()=>/* binding */a
/* harmony export */,setCurrentTime:()=>/* binding */d
/* harmony export */,play:()=>/* binding */l
/* harmony export */,pause:()=>/* binding */u
/* harmony export */,onTimeupdate:()=>/* binding */c
/* harmony export */,onEnded:()=>/* binding */p
/* harmony export */});
/**
 * Adapter name.
 */
const r="vimeo",o=/vimeo\.com\/.+/i,i=function(e){const t=new(arguments.length>1&&void 0!==arguments[1]?arguments[1]:window).Vimeo.Player(e),n=()=>{e.dataset.hasPlayed="has-played",t.off("play",n)};
// Add a dataset to identify if video has played already.
return"has-played"!==e.dataset.hasPlayed&&t.on("play",n),t.ready().then((()=>t))},s=e=>e.getDuration()
/**
 * Get the current video time.
 *
 * @param {Object} player The Vimeo player instance.
 *
 * @return {Promise<number>} The current video time in seconds through a promise.
 */,a=e=>e.getCurrentTime()
/**
 * Set the video to a current time.
 *
 * @param {Object} player  The Vimeo player instance.
 * @param {number} seconds The video time in seconds to set.
 *
 * @return {Promise} A promise that resolves if the video was set to a current time successfully.
 *                   (original return from Vimeo API).
 */,d=(e,t)=>e.element.dataset.hasPlayed?e.setCurrentTime(t):l(e).then((()=>u(e))).then((()=>e.setCurrentTime(t))),l=e=>e.play()
/**
 * Pause the video.
 *
 * @param {Object} player The Vimeo player instance.
 *
 * @return {Promise} A promise that resolves if the video was paused successfully.
 *                   (original return from Vimeo API).
 */,u=e=>e.pause()
/**
 * Add an timeupdate event listener to the player.
 *
 * @param {Object}   player   The Vimeo player instance.
 * @param {Function} callback Listener callback.
 *
 * @return {Function} The function to unsubscribe the event.
 */,c=(e,t)=>{const n=e=>{t(e.seconds)};return e.on("timeupdate",n),()=>{e.off("timeupdate",n)}},p=(e,t)=>(e.on("ended",t),()=>{e.off("ended",t)});
/**
 * The embed pattern to check if it's the respective type.
 */}
/***/,
/***/85694:
/***/(e,t,n)=>{n.r(t),
/* harmony export */n.d(t,{
/* harmony export */ADAPTER_NAME:()=>/* binding */r
/* harmony export */,EMBED_PATTERN:()=>/* binding */o
/* harmony export */,initializePlayer:()=>/* binding */i
/* harmony export */,getDuration:()=>/* binding */s
/* harmony export */,getCurrentTime:()=>/* binding */a
/* harmony export */,setCurrentTime:()=>/* binding */d
/* harmony export */,play:()=>/* binding */l
/* harmony export */,pause:()=>/* binding */u
/* harmony export */,onTimeupdate:()=>/* binding */c
/* harmony export */,onEnded:()=>/* binding */p
/* harmony export */});
/**
 * Adapter name.
 */
const r="youtube",o=/(youtu\.be|youtube\.com)\/.+/i,i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;return new Promise((n=>{t.senseiYouTubeIframeAPIReady.then((()=>{const r=t.YT.get(e.id)||new t.YT.Player(e),o=()=>{n(r)};r.getDuration?
// Just in case it's called after the player is ready.
o():r.addEventListener("onReady",o);
// Add a dataset to identify if video has played already.
const i=n=>{n.data===t.YT.PlayerState.PLAYING&&(e.dataset.hasPlayed="has-played",r.removeEventListener("onStateChange",i))};"has-played"!==e.dataset.hasPlayed&&r.addEventListener("onStateChange",i)}))}))},s=e=>new Promise((t=>{t(e.getDuration())}))
/**
 * Get the current video time.
 *
 * @param {Object} player The YouTube player instance.
 *
 * @return {Promise<number>} The current video time in seconds through a promise.
 */,a=e=>new Promise((t=>{t(e.getCurrentTime())}))
/**
 * Set the video to a current time.
 *
 * @param {Object} player  The YouTube player instance.
 * @param {number} seconds The video time in seconds to set.
 *
 * @return {Promise} A promise that resolves if the video was set to a current time successfully.
 */,d=(e,t)=>new Promise((n=>{e.getIframe().dataset.hasPlayed?(e.seekTo(t),n()):l(e).then((()=>u(e))).then((()=>{e.seekTo(t),n()}))}))
/**
 * Play the video.
 *
 * @param {Object} player The YouTube player instance.
 *
 * @return {Promise} A promise that resolves if the video play was called successfully.
 */,l=e=>new Promise((t=>{e.playVideo(),t()}))
/**
 * Pause the video.
 *
 * @param {Object} player The YouTube player instance.
 *
 * @return {Promise} A promise that resolves if the video pause was called successfully.
 */,u=e=>new Promise((t=>{e.pauseVideo(),t()}))
/**
 * Add an timeupdate event listener to the player.
 *
 * @param {Object}   player   The YouTube player instance.
 * @param {Function} callback Listener callback.
 * @param {Window}   w        A custom window.
 *
 * @return {Function} The function to unsubscribe the event.
 */,c=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window;let r;const o=e=>{r!==e&&(t(e),r=e)},i=setInterval((()=>{e.getPlayerState()!==n.YT.PlayerState.ENDED&&o(e.getCurrentTime())}),250),s=()=>{e.getPlayerState()===n.YT.PlayerState.ENDED&&o(e.getDuration())};
// Update the current time based on an interval.
return e.addEventListener("onStateChange",s),()=>{clearInterval(i),e.removeEventListener("onStateChange",s)}},p=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window;const r=()=>{e.getPlayerState()===n.YT.PlayerState.ENDED&&t()};return e.addEventListener("onStateChange",r),()=>{e.removeEventListener("onStateChange",r)}};
/**
 * The embed pattern to check if it's the respective type.
 */}
/***/,
/***/69307:
/***/e=>{e.exports=window.wp.element;
/***/},
/***/92694:
/***/e=>{e.exports=window.wp.hooks;
/***/
/******/}},i={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function s(e){
/******/ // Check if module is in cache
/******/var t=i[e];
/******/if(void 0!==t)
/******/return t.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var n=i[e]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return o[e](n,n.exports,s),n.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/s.n=e=>{
/******/var t=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return s.d(t,{a:t}),t;
/******/},
/******/ // define getter functions for harmony exports
/******/s.d=(e,t)=>{
/******/for(var n in t)
/******/s.o(t,n)&&!s.o(e,n)&&
/******/Object.defineProperty(e,n,{enumerable:!0,get:t[n]})
/******/;
/******/},
/******/s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)
/******/,
/******/ // define __esModule on exports
/******/s.r=e=>{
/******/"undefined"!=typeof Symbol&&Symbol.toStringTag&&
/******/Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})
/******/,Object.defineProperty(e,"__esModule",{value:!0})}
/******/,
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
e=s(39039),t=s(59446),n=s(68519),r=s(21878),
/**
 * Internal dependencies
 */
// Initialize video extensions only after all the resources are loaded.
// This makes sure that Required Blocks feature can hook into the
// Course Video Progression feature before it starts firing it's hooks.
// eslint-disable-next-line @wordpress/no-global-event-listener
window.addEventListener("load",(()=>{(0,r/* .initVideoPressExtension */.G)(),(0,t/* .initVideoExtension */.t)(),(0,n/* .initVimeoExtension */.V)(),(0,e/* .initYouTubeExtension */.$)()}))})
/******/();