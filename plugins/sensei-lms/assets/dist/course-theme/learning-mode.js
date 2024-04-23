/******/(()=>{// webpackBootstrap
/******/var e={
/***/96539:
/***/(e,t,n)=>{var r=n(77400).Symbol;
/** Built-in value references. */e.exports=r}
/***/,
/***/99736:
/***/(e,t,n)=>{var r=n(96539),o=n(34840),i=n(21258),s=r?r.toStringTag:void 0;
/** `Object#toString` result references. */e.exports=
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":s&&s in Object(e)?o(e):i(e)}}
/***/,
/***/74833:
/***/(e,t,n)=>{var r=n(56127),o=/^\s+/;
/** Used to match leading whitespace. */e.exports=
/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}}
/***/,
/***/39120:
/***/e=>{
/** Detect free variable `global` from Node.js. */
var t="object"==typeof window&&window&&window.Object===Object&&window;e.exports=t}
/***/,
/***/34840:
/***/(e,t,n)=>{var r=n(96539),o=Object.prototype,i=o.hasOwnProperty,s=o.toString,c=r?r.toStringTag:void 0;
/** Used for built-in method references. */e.exports=
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function(e){var t=i.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(e){}var o=s.call(e);return r&&(t?e[c]=n:delete e[c]),o}}
/***/,
/***/21258:
/***/e=>{
/** Used for built-in method references. */
var t=Object.prototype.toString;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */e.exports=
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function(e){return t.call(e)}}
/***/,
/***/77400:
/***/(e,t,n)=>{var r=n(39120),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();
/** Detect free variable `self`. */e.exports=i}
/***/,
/***/56127:
/***/e=>{
/** Used to match a single whitespace character. */
var t=/\s/;
/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}}
/***/,
/***/66726:
/***/(e,t,n)=>{var r=n(11611),o=n(82846),i=n(91936),s=Math.max,c=Math.min;
/** Error message constants. */e.exports=
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function(e,t,n){var a,u,l,d,f,v,p=0,m=!1,y=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function w(t){var n=a,r=u;return a=u=void 0,p=t,d=e.apply(r,n)}function h(e){var n=e-v;
// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===v||n>=t||n<0||y&&e-p>=l}function g(){var e=o();if(h(e))return O(e);
// Restart the timer.
f=setTimeout(g,function(e){var n=t-(e-v);return y?c(n,l-(e-p)):n}(e))}function O(e){
// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
return f=void 0,b&&a?w(e):(a=u=void 0,d)}function j(){var e=o(),n=h(e);if(a=arguments,u=this,v=e,n){if(void 0===f)return function(e){
// Invoke the leading edge.
// Reset any `maxWait` timer.
return p=e,
// Start the timer for the trailing edge.
f=setTimeout(g,t),m?w(e):d}(v);if(y)
// Handle invocations in a tight loop.
return clearTimeout(f),f=setTimeout(g,t),w(v)}return void 0===f&&(f=setTimeout(g,t)),d}return t=i(t)||0,r(n)&&(m=!!n.leading,l=(y="maxWait"in n)?s(i(n.maxWait)||0,t):l,b="trailing"in n?!!n.trailing:b),j.cancel=function(){void 0!==f&&clearTimeout(f),p=0,a=v=u=f=void 0},j.flush=function(){return void 0===f?d:O(o())},j}}
/***/,
/***/11611:
/***/e=>{e.exports=
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}}
/***/,
/***/92360:
/***/e=>{e.exports=
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function(e){return null!=e&&"object"==typeof e}}
/***/,
/***/55193:
/***/(e,t,n)=>{var r=n(99736),o=n(92360);
/** `Object#toString` result references. */e.exports=
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}}
/***/,
/***/82846:
/***/(e,t,n)=>{var r=n(77400);
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */e.exports=function(){return r.Date.now()}}
/***/,
/***/91936:
/***/(e,t,n)=>{var r=n(74833),o=n(11611),i=n(55193),s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt;
/** Used as references for various `Number` constants. */e.exports=
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=c.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):s.test(e)?NaN:+e}}
/***/,
/***/49977:
/***/(e,t,n)=>{"use strict";
/* harmony import */var r=n(66726),o=n.n(r);
/* harmony import */ // eslint-disable-next-line @wordpress/no-global-event-listener
window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#wpadminbar");function t(){if(e){var t=e.getBoundingClientRect(),n=t.top,r=t.height,o=Math.max(0,r+n);document.documentElement.style.setProperty("--sensei-wpadminbar-offset",o+"px")}}e&&(t(),// eslint-disable-next-line @wordpress/no-global-event-listener
window.addEventListener("scroll",t,{capture:!1,passive:!0}),
/**
   * The debounce has 2 reasons here:
   * 1. Reduce the number of times we call the function in a resize.
   * 2. The admin bar contains an animated transition, so this transition
   *    needs to be completed in order to make the correct calc.
   */
// eslint-disable-next-line @wordpress/no-global-event-listener
window.addEventListener("resize",o()(t,500)))}))}
/***/,
/***/68825:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */F:()=>/* binding */i
/* harmony export */});
/* harmony import */var r=n(47701),o=n.n(r),i=function(){o()((function(){var e=document.querySelectorAll('[data-id="complete-lesson-form"]'),t=document.querySelectorAll('[data-id="complete-lesson-button"]'),n=document.querySelectorAll(".sensei-course-theme-course-progress-bar-inner"),r=function(e,n){e.preventDefault(),t.forEach((function(e){e.setAttribute("disabled","disabled"),e.classList.add("is-busy")})),setTimeout((function(){n.submit()}),1e3)},o=function(e){var t=e.target;r(e,t),n.forEach((function(e){var t=e.dataset,n=(+t.completed+1)/+t.count*100;// Percentage with one more completed.
e.style.width="".concat(n,"%")}))};e.forEach((function(e){e.addEventListener("submit",o)}))}))};
/* harmony import */}
/***/,
/***/1487:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */R:()=>/* binding */i
/* harmony export */});
/* harmony import */var r=n(64649),o=n(50189);
/* harmony import */
/**
 * @module ContactTeacher
 * @description Responsible for making a seamless ajax post of the
 * contact teacher form, without refreshing the whole page.
 */
/**
 * Handles the contact teacher submit event.
 *
 * @param {Object} ev The contact teacher form submit event.
 */
function i(e){var t;
// If the fetch api is not available then bail.
if(window.fetch){var n=null===(t=document.querySelector('link[rel="https://api.w.org/"]'))||void 0===t?void 0:t.href;// If the rest api is not available then bail.
if(n){// Prevent browser from refreshing.
e.preventDefault();var i=e.target,s=i.querySelector("button.sensei-contact-teacher-form__submit"),c=i.parentElement.querySelector(".sensei-contact-teacher-close");s.classList.add("sensei-course-theme__button","is-busy"),s.disabled=!0;var a=["sensei_message_teacher_nonce","_wpnonce","post_id","contact_message"].reduce((function(e,t){return(0,o/* ["default"] */.Z)((0,o/* ["default"] */.Z)({},e),{},(0,r/* ["default"] */.Z)({},t,i.elements[t].value))}),{});window.fetch("".concat(n,"sensei-internal/v1/messages?_locale=user"),{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json","X-WP-Nonce":a._wpnonce}}).then((function(){i.classList.add("is-success"),c.focus()})).catch((function(){// TODO: Show submit failed message.
}))}}}
/***/},
/***/91729:
/***/(e,t,n)=>{"use strict";
/* harmony import */var r=n(47701);
/* harmony import */
/**
 * Update video height when its width changes to keep original aspect ratio.
 *
 * @param {HTMLElement} block Container to track. Must have an <iframe> width and height attributes.
 */
function o(e){var t,n,r,o=function(){return e.querySelector("iframe")},i=o(),s=i&&(n=(t=i).width,(r=t.height)&&n?+n/+r:null);function c(){if(i=o()){var e=i,t=e.offsetHeight,n=e.offsetWidth/s;n&&n!==t&&i.style.setProperty("height","".concat(n,"px"))}}s&&(new window.ResizeObserver(c).observe(e),c())}n.n(r)()((
/**
 * WordPress dependencies
 */
function(){document.querySelectorAll(".sensei-course-theme-lesson-video").forEach(o)}
/**
 * Get aspect ratio from element width and height attribute.
 *
 * @param {HTMLElement} element
 * @param {string}      element.width
 * @param {string}      element.height
 * @return {null|number} Width / Height aspect ratio.
 */))}
/***/,
/***/40365:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */w:()=>/* binding */s
/* harmony export */});
/**
 * Focus mode class name and session storage key.
 *
 * @type {string}
 */
var r="sensei-course-theme--focus-mode",o="sensei-course-theme__sidebar--hidden",i=function(){var e=window.sessionStorage.getItem(r);if(e)try{var t=JSON.parse(e);"boolean"==typeof t&&s(t,!0)}catch(e){}},s=function(e,t){var n=document.body.classList,i=document.querySelector(".sensei-course-theme__sidebar"),s=n.contains(r),c=void 0===e?!s:e;c?t&&(null==i||i.classList.add(o)):null==i||i.classList.remove(o),n.toggle(r,c),window.sessionStorage.setItem(r,JSON.stringify(c))};// eslint-disable-next-line @wordpress/no-global-event-listener
window.addEventListener("DOMContentLoaded",(function(){var e;i(),setTimeout((function(){document.body.classList.add("".concat(r,"--animated"))}),500),null===(e=document.querySelector(".sensei-course-theme__sidebar"))||void 0===e||e.addEventListener("transitionend",(function(e){var t;"left"===e.propertyName&&document.body.classList.contains(r)&&(null===(t=document.querySelector(".sensei-course-theme__sidebar"))||void 0===t||t.classList.add(o))}))}))}
/***/,
/***/91971:
/***/(e,t,n)=>{"use strict";
/* harmony import */var r=n(66886),o=0,i="scroll",s=function(e){var t=e<0?["up","down"]:["down","up"],n=(0,r/* ["default"] */.Z)(t,2),o=n[0],s=n[1];document.body.classList.remove("".concat(i,"-").concat(s)),document.body.classList.add("".concat(i,"-").concat(o))};// eslint-disable-next-line @wordpress/no-global-event-listener
window.addEventListener("scroll",(function(){var e=document.documentElement,t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight,c=t-o;o=Math.max(0,t),s(c);var a=n-t-r<100;document.body.classList.toggle("".concat(i,"-bottom"),a)}),{capture:!1,passive:!0})}
/***/,
/***/47701:
/***/e=>{"use strict";e.exports=window.wp.domReady}
/***/,
/***/1793:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/66470:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e){if(Array.isArray(e))return e}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/64649:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/22446:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],_n=!0,s=!1;try{for(n=n.call(e);!(_n=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);_n=!0);}catch(e){s=!0,o=e}finally{try{_n||null==n.return||n.return()}finally{if(s)throw o}}return i}}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/53764:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/50189:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */i
/* harmony export */});
/* harmony import */var r=n(64649);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r/* ["default"] */.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}
/***/},
/***/66886:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */c
/* harmony export */});
/* harmony import */var r=n(66470),o=n(22446),i=n(64013),s=n(53764);
/* harmony import */function c(e,t){return(0,r/* ["default"] */.Z)(e)||(0,o/* ["default"] */.Z)(e,t)||(0,i/* ["default"] */.Z)(e,t)||(0,s/* ["default"] */.Z)()}
/***/},
/***/64013:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */o
/* harmony export */});
/* harmony import */var r=n(1793);function o(e,t){if(e){if("string"==typeof e)return(0,r/* ["default"] */.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r/* ["default"] */.Z)(e,t):void 0}}
/***/
/******/}},t={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function n(r){
/******/ // Check if module is in cache
/******/var o=t[r];
/******/if(void 0!==o)
/******/return o.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var i=t[r]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[r](i,i.exports,n),i.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/n.n=e=>{
/******/var t=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return n.d(t,{a:t}),t;
/******/},
/******/ // define getter functions for harmony exports
/******/n.d=(e,t)=>{
/******/for(var r in t)
/******/n.o(t,r)&&!n.o(e,r)&&
/******/Object.defineProperty(e,r,{enumerable:!0,get:t[r]})
/******/;
/******/},
/******/n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)
/******/,
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(()=>{"use strict";
/* harmony import */n(49977),n(91729),n(91971)
/* harmony import */;var e=n(68825),t=n(1487),r=n(40365);
/**
 * Internal dependencies
 */
window.sensei||(window.sensei={})
/**
 * Show or hide the sidebar in mobile mode.
 */;window.sensei.courseTheme={toggleFocusMode:r/* .toggleFocusMode */.w,toggleSidebar:function(){document.body.classList.toggle("sensei-course-theme--sidebar-open")}},window.sensei.submitContactTeacher=t/* .submitContactTeacher */.R,(0,e/* .initCompleteLessonTransition */.F)()})()})
/******/();