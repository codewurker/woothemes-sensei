/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e,t,n,r,i={
/***/24430:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */K:()=>/* binding */s
/* harmony export */});
/* harmony import */var r=n(92694),i=window.sensei.courseVideoSettings,o=i.courseVideoRequired,a=i.courseVideoAutoComplete,u=i.courseVideoAutoPause,d={},s=function(e){var t=e.pauseVideo,n=void 0===t?function(){}:t,i=e.registerVideoEndHandler,u=void 0===i?function(){}:i,s=e.url,f=void 0===s?"":s,m=e.blockElement,h=m.hasAttribute("data-sensei-is-required"),y=m.hasAttribute("data-sensei-is-not-required");// Block level setting overwrites the course level setting.
(h||o&&!y)&&(
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
(0,r.doAction)("sensei.videoProgression.registerVideo",{url:f,blockElement:m}),d[f]={pauseVideo:n,completed:!1},l()),u((function(){
// Block level setting overwrites the course level setting.
(h||o&&!y)&&(
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
(0,r.doAction)("sensei.videoProgression.videoEnded",{url:f}),d[f].completed=!0,c()&&v()),a&&c()&&p()}))},c=function(){var e=!0;for(var t in d)d[t].completed||(e=!1);
/**
   * Tells if all the required videos for the current lesson are finished playing or not.
   *
   * @since 4.4.3
   *
   * @hook sensei.videoProgression.allCompleted Hook used to tell if all the required videos for the current lesson have finished playing.
   *
   * @param {boolean} allCompleted Whether all the required videos for the current lesson are completed.
   */return e=(0,r.applyFilters)("sensei.videoProgression.allCompleted",e)},l=function(){(0,r.applyFilters)("sensei.videoProgression.preventLessonCompletion",!0)&&document.querySelectorAll('[data-id="complete-lesson-button"]').forEach((function(e){e.disabled=!0,e.addEventListener("click",f)}))},f=function(e){return e.preventDefault(),!1},v=function(){(0,r.applyFilters)("sensei.videoProgression.allowLessonCompletion",!0)&&document.querySelectorAll('[data-id="complete-lesson-button"]').forEach((function(e){e.removeEventListener("click",f),e.disabled=!1}))},p=function(){var e=document.querySelector('[data-id="complete-lesson-button"]');e&&setTimeout((function(){e.click()}),3e3)};
/* harmony import */
/**
 * If pause video setting is set. Then attach an event listener
 * to detect user navigating away and pause the videos.
 */
u&&void 0!==document.hidden&&
// eslint-disable-next-line @wordpress/no-global-event-listener
document.addEventListener("visibilitychange",(function(){if(document.hidden)for(var e in d){var t=d[e].pauseVideo;"function"==typeof t&&t()}}),!1)
/***/},
/***/59446:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */t:()=>/* binding */a
/* harmony export */});
/* harmony import */var r=n(24430),i=n(39801),o=function(e){var t=new i/* ["default"] */.Z(e);(0,r/* .registerVideo */.K)({registerVideoEndHandler:function(e){t.on("ended",e)},pauseVideo:function(){t.pause()},url:e.src.split("?")[0],blockElement:e.closest("figure")})},a=function(){document.querySelectorAll(".wp-block-video video").forEach(o)};
/* harmony import */}
/***/,
/***/21878:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */G:()=>/* binding */a
/* harmony export */});
/* harmony import */var r=n(24430),i=n(39801),o=function(e){var t=new i/* ["default"] */.Z(e);(0,r/* .registerVideo */.K)({registerVideoEndHandler:function(e){t.on("ended",e)},pauseVideo:function(){t.pause()},url:e.src.split("?")[0],blockElement:e.closest("figure")})},a=function(){document.querySelectorAll(".wp-block-embed-videopress iframe").forEach(o)};
/* harmony import */}
/***/,
/***/68519:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */V:()=>/* binding */a
/* harmony export */});
/* harmony import */var r=n(24430),i=n(39801),o=function(e){var t=new i/* ["default"] */.Z(e),n="https://vimeo.com/"+e.src.split("?")[0].split("/").pop();// iframe.src should be in the format:
// https://player.vimeo.com/video/VIDEO_ID?other-query-parameters=and-their-values
(0,r/* .registerVideo */.K)({pauseVideo:function(){t.pause()},registerVideoEndHandler:function(e){t.on("ended",e)},url:n,blockElement:e.closest("figure")})},a=function(){document.querySelectorAll(".wp-block-embed-vimeo iframe").forEach(o)};
/* harmony import */}
/***/,
/***/39039:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */$:()=>/* binding */a
/* harmony export */});
/* harmony import */var r=n(24430),i=n(39801),o=function(e){var t=new i/* ["default"] */.Z(e),n="https://www.youtube.com/watch?v="+e.src.split("?")[0].split("/").pop();// iframe.src should be in the format:
// https://www.youtube.com/embed/VIDEO_ID?other-query-parameters=and-their-values&origin=https://example.com
(0,r/* .registerVideo */.K)({pauseVideo:function(){t.pause()},registerVideoEndHandler:function(e){t.on("ended",e)},url:n,blockElement:e.closest("figure")})},a=function(){document.querySelectorAll(".wp-block-embed-youtube iframe").forEach(o)};
/* harmony import */}
/***/,
/***/39801:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */Z:()=>g
/* harmony export */});
/* unused harmony export useVideoDuration */
/* harmony import */var r,i=n(66886),o=n(22951),a=n(91976),u=n(64649),d=(n(69307),n(92574)),s=n(88483),c=n(85694),l=n(39360),f=n(2427),v=d.ADAPTER_NAME,p=s.ADAPTER_NAME,m=c.ADAPTER_NAME,h=l.ADAPTER_NAME,y=(r={},(0,u/* ["default"] */.Z)(r,v,d),(0,u/* ["default"] */.Z)(r,p,s),(0,u/* ["default"] */.Z)(r,m,c),(0,u/* ["default"] */.Z)(r,h,l),r);
/* harmony import */
/* harmony default export */const g=function(){
/**
   * Player constructor.
   *
   * @param {HTMLVideoElement|HTMLIFrameElement} element The player element.
   * @param {Window}                             w       A custom window.
   */
function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;(0,o/* ["default"] */.Z)(this,e),this.playerPromise=null,this.adapterName=null,this.element=t,this.w=n,this.setAdapter()}
/**
   * Set the player adapter.
   */return(0,a/* ["default"] */.Z)(e,[{key:"setAdapter",value:function(){var e=this;if(this.element instanceof this.w.HTMLVideoElement)this.adapterName=v;else if(this.element instanceof this.w.HTMLIFrameElement){var t;this.adapterName=null===(t=Object.entries(y).find((function(t){var n,r=(0,i/* ["default"] */.Z)(t,2)[1].EMBED_PATTERN,o=void 0===r?null:r;return o&&(null===(n=e.element.src)||void 0===n?void 0:n.match(o))})))||void 0===t?void 0:t[0]}this.adapterName||
// eslint-disable-next-line no-console -- We want to expose the element with problem.
console.error("Video adapter not found",this.element)}
/**
     * Get the adapter.
     *
     * @access private
     *
     * @return {Object} The adapter.
     */},{key:"getAdapter",value:function(){return y[this.adapterName]}
/**
     * Get the video player.
     *
     * @return {Promise<Object|HTMLVideoElement|HTMLIFrameElement>} The video player through a promise.
     */},{key:"getPlayer",value:function(){var e;this.playerPromise||(this.playerPromise=(null===(e=this.getAdapter())||void 0===e?void 0:e.initializePlayer(this.element,this.w))||// A promise that never resolves if it doesn't exist.
Promise.reject(new Error("Failed getting the player")));return this.playerPromise}
/**
     * Get the video duration.
     *
     * @return {Promise<number>} The duration of the video in seconds through a promise.
     */},{key:"getDuration",value:function(){var e=this;return this.getPlayer().then((function(t){return e.getAdapter().getDuration(t)}))}
/**
     * Get the video current time.
     *
     * @return {Promise<number>} The current video time in seconds through a promise.
     */},{key:"getCurrentTime",value:function(){var e=this;return this.getPlayer().then((function(t){return e.getAdapter().getCurrentTime(t)})).then((function(e){return(0,f/* ["default"] */.Z)(e,3)}))}
/**
     * Set the video to a current time.
     *
     * @param {number} seconds The video time in seconds to set.
     *
     * @return {Promise} A promise that resolves if the video was set to a current time successfully.
     */},{key:"setCurrentTime",value:function(e){var t=this;return this.getPlayer().then((function(n){return t.getAdapter().setCurrentTime(n,e)}))}
/**
     * Play the video.
     *
     * @return {Promise} A promise that resolves if the video play was called successfully.
     */},{key:"play",value:function(){var e=this;return this.getPlayer().then((function(t){return e.getAdapter().play(t)}))}
/**
     * Pause the video.
     *
     * @return {Promise} A promise that resolves if the video pause was called successfully.
     */},{key:"pause",value:function(){var e=this;return this.getPlayer().then((function(t){return e.getAdapter().pause(t)}))}
/**
     * Add an event listener to the player.
     *
     * @param {string}   eventName Event name (supported: `timeupdate`).
     * @param {Function} callback  Listener callback.
     *
     * @throws Will throw an error if the event is not supported.
     *
     * @return {Promise<Function>} The function to unsubscribe the event through a promise.
     */},{key:"on",value:function(e,t){
// Supported events.
var n={timeupdate:this.onTimeUpdate.bind(this),ended:this.onEnded.bind(this)}[e];if(!n)throw new Error("Event ".concat(e," not supported"));return n(t)}
/**
     * Wrapper to the `onTimeUpdate` event from the adapters.
     *
     * @access private
     *
     * @param {Function} callback Listener callback.
     *
     * @return {Promise<Function>} The function to unsubscribe the event through a promise.
     */},{key:"onTimeUpdate",value:function(e){var t=this,n=function(t){e((0,f/* ["default"] */.Z)(t,3))};return this.getPlayer().then((function(e){return t.getAdapter().onTimeupdate(e,n,t.w)}))}
/**
     * Wrapper to the `onEnded` event from the adapters.
     *
     * @access private
     *
     * @param {Function} callback Listener callback.
     *
     * @return {Promise<Function>} The function to unsubscribe the event through a promise.
     */},{key:"onEnded",value:function(e){var t=this;return this.getPlayer().then((function(n){return t.getAdapter().onEnded(n,e,t.w)}))}}]),e}();
/***/},
/***/2427:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */Z:()=>r
/* harmony export */});
/* harmony default export */const r=function(e,t){var n=Math.pow(10,t);return Math.round((e+Number.EPSILON)*n)/n};
/***/},
/***/92574:
/***/(e,t,n)=>{n.r(t),
/* harmony export */n.d(t,{
/* harmony export */ADAPTER_NAME:()=>/* binding */r
/* harmony export */,initializePlayer:()=>/* binding */i
/* harmony export */,getDuration:()=>/* binding */o
/* harmony export */,getCurrentTime:()=>/* binding */a
/* harmony export */,setCurrentTime:()=>/* binding */u
/* harmony export */,play:()=>/* binding */d
/* harmony export */,pause:()=>/* binding */s
/* harmony export */,onTimeupdate:()=>/* binding */c
/* harmony export */,onEnded:()=>/* binding */l
/* harmony export */});
/**
 * Adapter name.
 */
var r="video-file",i=function(e){return new Promise((function(t){
// Return that it's ready when it can get the video duration.
isNaN(e.duration)||t(e),e.addEventListener("durationchange",(function(){t(e)}),{once:!0})}))},o=function(e){return new Promise((function(t){t(e.duration)}))},a=function(e){return new Promise((function(t){t(e.currentTime)}))},u=function(e,t){return new Promise((function(n){e.currentTime=t,n()}))},d=function(e){return e.play()},s=function(e){return new Promise((function(t,n){e.pause(),e.paused&&t(),n(new Error("Video didn't pause"))}))},c=function(e,t){var n=function(e){t(e.target.currentTime)};return e.addEventListener("timeupdate",n),function(){e.removeEventListener("timeupdate",n)}},l=function(e,t){return e.addEventListener("ended",t),function(){e.removeEventListener("timeupdate",t)}};
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
/* harmony export */,EMBED_PATTERN:()=>/* binding */i
/* harmony export */,initializePlayer:()=>/* binding */o
/* harmony export */,getDuration:()=>/* binding */a
/* harmony export */,getCurrentTime:()=>/* binding */u
/* harmony export */,setCurrentTime:()=>/* binding */d
/* harmony export */,play:()=>/* binding */s
/* harmony export */,pause:()=>/* binding */c
/* harmony export */,onTimeupdate:()=>/* binding */l
/* harmony export */,onEnded:()=>/* binding */f
/* harmony export */});
/**
 * Adapter name.
 */
var r="videopress",i=/(videopress|video\.wordpress)\.com\/.+/i,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;return new Promise((function(n){if(e.dataset.duration)n(e);else{// eslint-disable-next-line @wordpress/no-global-event-listener -- Not in a React context.
t.addEventListener("message",(function(t){if(t.source===e.contentWindow){var r=t.data;"videopress_durationchange"===r.event&&r.durationMs?(
// Set the duration to a dataset in order to be available later,
// and consider the initialization done.
e.dataset.duration=r.durationMs/1e3,// If current time didn't return yet, set it to `0`.
e.dataset.currentTime||(e.dataset.currentTime=0),n(e)):"videopress_timeupdate"===r.event&&r.currentTimeMs?
// Set the current time to a dataset in order to be available later.
e.dataset.currentTime=r.currentTimeMs/1e3:"videopress_play"===r.event&&(
// Identify that video was already played.
e.dataset.hasPlayed="has-played")}}))}}))},a=function(e){return new Promise((function(t,n){var r=e.dataset.duration;r||n(new Error("Video duration not found")),t(parseFloat(r))}))},u=function(e){return new Promise((function(t,n){var r=e.dataset.currentTime;r?t(parseFloat(r)):n(new Error("Video current time not found"))}))},d=function(e,t){return new Promise((function(n){var r=function(){e.contentWindow.postMessage({event:"videopress_action_set_currenttime",currentTime:t},"*"),n()};e.dataset.hasPlayed?r():s(e).then((function(){return c(e)})).then(r)}))},s=function(e){return new Promise((function(t){e.contentWindow.postMessage({event:"videopress_action_play"},"*"),t()}))},c=function(e){return new Promise((function(t){e.contentWindow.postMessage({event:"videopress_action_pause"},"*"),t()}))},l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,r=function(n){n.source===e.contentWindow&&"videopress_timeupdate"===n.data.event&&n.data.currentTimeMs&&t(n.data.currentTimeMs/1e3)};// eslint-disable-next-line @wordpress/no-global-event-listener -- Not in a React context.
return n.addEventListener("message",r),function(){
// eslint-disable-next-line @wordpress/no-global-event-listener -- Not in a React context.
n.removeEventListener("message",r)}},f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,r=function(n){n.source===e.contentWindow&&"videopress_ended"===n.data.event&&t()};// eslint-disable-next-line @wordpress/no-global-event-listener -- Not in a React context.
return n.addEventListener("message",r),function(){
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
/* harmony export */,EMBED_PATTERN:()=>/* binding */i
/* harmony export */,initializePlayer:()=>/* binding */o
/* harmony export */,getDuration:()=>/* binding */a
/* harmony export */,getCurrentTime:()=>/* binding */u
/* harmony export */,setCurrentTime:()=>/* binding */d
/* harmony export */,play:()=>/* binding */s
/* harmony export */,pause:()=>/* binding */c
/* harmony export */,onTimeupdate:()=>/* binding */l
/* harmony export */,onEnded:()=>/* binding */f
/* harmony export */});
/**
 * Adapter name.
 */
var r="vimeo",i=/vimeo\.com\/.+/i,o=function(e){var t=new(arguments.length>1&&void 0!==arguments[1]?arguments[1]:window).Vimeo.Player(e);return"has-played"!==e.dataset.hasPlayed&&t.on("play",(function n(){e.dataset.hasPlayed="has-played",t.off("play",n)})),t.ready().then((function(){return t}))},a=function(e){return e.getDuration()},u=function(e){return e.getCurrentTime()},d=function(e,t){return e.element.dataset.hasPlayed?e.setCurrentTime(t):s(e).then((function(){return c(e)})).then((function(){return e.setCurrentTime(t)}));// Play the video a first time if it wasn't already played yet.
},s=function(e){return e.play()},c=function(e){return e.pause()},l=function(e,t){var n=function(e){t(e.seconds)};return e.on("timeupdate",n),function(){e.off("timeupdate",n)}},f=function(e,t){return e.on("ended",t),function(){e.off("ended",t)}};
/**
 * The embed pattern to check if it's the respective type.
 */}
/***/,
/***/85694:
/***/(e,t,n)=>{n.r(t),
/* harmony export */n.d(t,{
/* harmony export */ADAPTER_NAME:()=>/* binding */r
/* harmony export */,EMBED_PATTERN:()=>/* binding */i
/* harmony export */,initializePlayer:()=>/* binding */o
/* harmony export */,getDuration:()=>/* binding */a
/* harmony export */,getCurrentTime:()=>/* binding */u
/* harmony export */,setCurrentTime:()=>/* binding */d
/* harmony export */,play:()=>/* binding */s
/* harmony export */,pause:()=>/* binding */c
/* harmony export */,onTimeupdate:()=>/* binding */l
/* harmony export */,onEnded:()=>/* binding */f
/* harmony export */});
/**
 * Adapter name.
 */
var r="youtube",i=/(youtu\.be|youtube\.com)\/.+/i,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;return new Promise((function(n){t.senseiYouTubeIframeAPIReady.then((function(){var r=t.YT.get(e.id)||new t.YT.Player(e),i=function(){n(r)};r.getDuration?
// Just in case it's called after the player is ready.
i():r.addEventListener("onReady",i);// Add a dataset to identify if video has played already.
"has-played"!==e.dataset.hasPlayed&&r.addEventListener("onStateChange",(function n(i){i.data===t.YT.PlayerState.PLAYING&&(e.dataset.hasPlayed="has-played",r.removeEventListener("onStateChange",n))}))}))}))},a=function(e){return new Promise((function(t){t(e.getDuration())}))},u=function(e){return new Promise((function(t){t(e.getCurrentTime())}))},d=function(e,t){return new Promise((function(n){e.getIframe().dataset.hasPlayed?(e.seekTo(t),n()):s(e).then((function(){return c(e)})).then((function(){e.seekTo(t),n()}))}))},s=function(e){return new Promise((function(t){e.playVideo(),t()}))},c=function(e){return new Promise((function(t){e.pauseVideo(),t()}))},l=function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,i=function(e){n!==e&&(t(e),n=e)},o=setInterval((function(){e.getPlayerState()!==r.YT.PlayerState.ENDED&&i(e.getCurrentTime())}),250),a=function(){e.getPlayerState()===r.YT.PlayerState.ENDED&&i(e.getDuration())};return e.addEventListener("onStateChange",a),function(){clearInterval(o),e.removeEventListener("onStateChange",a)}},f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,r=function(){e.getPlayerState()===n.YT.PlayerState.ENDED&&t()};return e.addEventListener("onStateChange",r),function(){e.removeEventListener("onStateChange",r)}};
/**
 * The embed pattern to check if it's the respective type.
 */}
/***/,
/***/69307:
/***/e=>{e.exports=window.wp.element;
/***/},
/***/92694:
/***/e=>{e.exports=window.wp.hooks;
/***/},
/***/1793:
/***/(e,t,n)=>{function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}
/***/
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/66470:
/***/(e,t,n)=>{function r(e){if(Array.isArray(e))return e}
/***/
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/22951:
/***/(e,t,n)=>{function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
/***/
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/91976:
/***/(e,t,n)=>{function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}
/***/
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */i
/* harmony export */})},
/***/64649:
/***/(e,t,n)=>{function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}
/***/
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/22446:
/***/(e,t,n)=>{function r(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],_n=!0,a=!1;try{for(n=n.call(e);!(_n=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);_n=!0);}catch(e){a=!0,i=e}finally{try{_n||null==n.return||n.return()}finally{if(a)throw i}}return o}}
/***/
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/53764:
/***/(e,t,n)=>{function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
/***/
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/66886:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */u
/* harmony export */});
/* harmony import */var r=n(66470),i=n(22446),o=n(64013),a=n(53764);
/* harmony import */function u(e,t){return(0,r/* ["default"] */.Z)(e)||(0,i/* ["default"] */.Z)(e,t)||(0,o/* ["default"] */.Z)(e,t)||(0,a/* ["default"] */.Z)()}
/***/},
/***/64013:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */i
/* harmony export */});
/* harmony import */var r=n(1793);function i(e,t){if(e){if("string"==typeof e)return(0,r/* ["default"] */.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r/* ["default"] */.Z)(e,t):void 0}}
/***/
/******/}},o={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function a(e){
/******/ // Check if module is in cache
/******/var t=o[e];
/******/if(void 0!==t)
/******/return t.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var n=o[e]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return i[e](n,n.exports,a),n.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/a.n=e=>{
/******/var t=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return a.d(t,{a:t}),t;
/******/},
/******/ // define getter functions for harmony exports
/******/a.d=(e,t)=>{
/******/for(var n in t)
/******/a.o(t,n)&&!a.o(e,n)&&
/******/Object.defineProperty(e,n,{enumerable:!0,get:t[n]})
/******/;
/******/},
/******/a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)
/******/,
/******/ // define __esModule on exports
/******/a.r=e=>{
/******/"undefined"!=typeof Symbol&&Symbol.toStringTag&&
/******/Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})
/******/,Object.defineProperty(e,"__esModule",{value:!0})}
/******/,
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
e=a(39039),t=a(59446),n=a(68519),r=a(21878),
/**
 * Internal dependencies
 */
// Initialize video extensions only after all the resources are loaded.
// This makes sure that Required Blocks feature can hook into the
// Course Video Progression feature before it starts firing it's hooks.
// eslint-disable-next-line @wordpress/no-global-event-listener
window.addEventListener("load",(function(){(0,r/* .initVideoPressExtension */.G)(),(0,t/* .initVideoExtension */.t)(),(0,n/* .initVimeoExtension */.V)(),(0,e/* .initYouTubeExtension */.$)()}))})
/******/();