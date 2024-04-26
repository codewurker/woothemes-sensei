/******/(()=>{// webpackBootstrap
/******/var e={
/***/96539:
/***/(e,t,o)=>{var n=o(77400).Symbol;
/** Built-in value references. */e.exports=n}
/***/,
/***/99736:
/***/(e,t,o)=>{var n=o(96539),r=o(34840),s=o(21258),i=n?n.toStringTag:void 0;
/** `Object#toString` result references. */e.exports=
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?r(e):s(e)}}
/***/,
/***/74833:
/***/(e,t,o)=>{var n=o(56127),r=/^\s+/;
/** Used to match leading whitespace. */e.exports=
/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function(e){return e?e.slice(0,n(e)+1).replace(r,""):e}}
/***/,
/***/39120:
/***/e=>{
/** Detect free variable `global` from Node.js. */
var t="object"==typeof window&&window&&window.Object===Object&&window;e.exports=t}
/***/,
/***/34840:
/***/(e,t,o)=>{var n=o(96539),r=Object.prototype,s=r.hasOwnProperty,i=r.toString,c=n?n.toStringTag:void 0;
/** Used for built-in method references. */e.exports=
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function(e){var t=s.call(e,c),o=e[c];try{e[c]=void 0;var n=!0}catch(e){}var r=i.call(e);return n&&(t?e[c]=o:delete e[c]),r}}
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
/***/(e,t,o)=>{var n=o(39120),r="object"==typeof self&&self&&self.Object===Object&&self,s=n||r||Function("return this")();
/** Detect free variable `self`. */e.exports=s}
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
 */e.exports=function(e){for(var o=e.length;o--&&t.test(e.charAt(o)););return o}}
/***/,
/***/66726:
/***/(e,t,o)=>{var n=o(11611),r=o(82846),s=o(91936),i=Math.max,c=Math.min;
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
function(e,t,o){var a,u,d,l,f,m,p=0,v=!1,b=!1,w=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var o=a,n=u;return a=u=void 0,p=t,l=e.apply(n,o)}function h(e){var o=e-m;
// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===m||o>=t||o<0||b&&e-p>=d}function g(){var e=r();if(h(e))return x(e);
// Restart the timer.
f=setTimeout(g,function(e){var o=t-(e-m);return b?c(o,d-(e-p)):o}(e))}function x(e){
// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
return f=void 0,w&&a?y(e):(a=u=void 0,l)}function S(){var e=r(),o=h(e);if(a=arguments,u=this,m=e,o){if(void 0===f)return function(e){
// Invoke the leading edge.
// Reset any `maxWait` timer.
return p=e,
// Start the timer for the trailing edge.
f=setTimeout(g,t),v?y(e):l}(m);if(b)
// Handle invocations in a tight loop.
return clearTimeout(f),f=setTimeout(g,t),y(m)}return void 0===f&&(f=setTimeout(g,t)),l}return t=s(t)||0,n(o)&&(v=!!o.leading,d=(b="maxWait"in o)?i(s(o.maxWait)||0,t):d,w="trailing"in o?!!o.trailing:w),S.cancel=function(){void 0!==f&&clearTimeout(f),p=0,a=m=u=f=void 0},S.flush=function(){return void 0===f?l:x(r())},S}}
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
/***/(e,t,o)=>{var n=o(99736),r=o(92360);
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
function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==n(e)}}
/***/,
/***/82846:
/***/(e,t,o)=>{var n=o(77400);
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
 */e.exports=function(){return n.Date.now()}}
/***/,
/***/91936:
/***/(e,t,o)=>{var n=o(74833),r=o(11611),s=o(55193),i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt;
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
function(e){if("number"==typeof e)return e;if(s(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var o=c.test(e);return o||a.test(e)?u(e.slice(2),o?2:8):i.test(e)?NaN:+e}}
/***/,
/***/49977:
/***/(e,t,o)=>{"use strict";
/* harmony import */var n=o(66726),r=o.n(n);
/* harmony import */
// eslint-disable-next-line @wordpress/no-global-event-listener
window.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector("#wpadminbar");function t(){if(!e)return;const{top:t,height:o}=e.getBoundingClientRect(),n=Math.max(0,o+t);document.documentElement.style.setProperty("--sensei-wpadminbar-offset",n+"px")}e&&(t(),
// eslint-disable-next-line @wordpress/no-global-event-listener
window.addEventListener("scroll",t,{capture:!1,passive:!0}),
/**
   * The debounce has 2 reasons here:
   * 1. Reduce the number of times we call the function in a resize.
   * 2. The admin bar contains an animated transition, so this transition
   *    needs to be completed in order to make the correct calc.
   */
// eslint-disable-next-line @wordpress/no-global-event-listener
window.addEventListener("resize",r()(t,500)))}))}
/***/,
/***/68825:
/***/(e,t,o)=>{"use strict";
/* harmony export */o.d(t,{
/* harmony export */F:()=>/* binding */s
/* harmony export */});
/* harmony import */var n=o(47701),r=o.n(n);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Initializes complete lesson transition.
 */
const s=()=>{r()((()=>{const e=document.querySelectorAll('[data-id="complete-lesson-form"]'),t=document.querySelectorAll('[data-id="complete-lesson-button"]'),o=document.querySelectorAll(".sensei-course-theme-course-progress-bar-inner"),n=(e,o)=>{e.preventDefault(),t.forEach((e=>{e.setAttribute("disabled","disabled"),e.classList.add("is-busy")})),setTimeout((()=>{o.submit()}),1e3)},r=e=>{const t=e.target;n(e,t),o.forEach((e=>{const{completed:t,count:o}=e.dataset,n=(+t+1)/+o*100;
// Percentage with one more completed.
e.style.width=`${n}%`}))};e.forEach((e=>{e.addEventListener("submit",r)}))}))};
/***/},
/***/1487:
/***/(e,t,o)=>{"use strict";
/* harmony export */
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
function n(e){var t;
// If the fetch api is not available then bail.
if(!window.fetch)return;const o=null===(t=document.querySelector('link[rel="https://api.w.org/"]'))||void 0===t?void 0:t.href;
// If the rest api is not available then bail.
if(!o)return;
// Prevent browser from refreshing.
e.preventDefault();const n=e.target,r=n.querySelector("button.sensei-contact-teacher-form__submit"),s=n.parentElement.querySelector(".sensei-contact-teacher-close");r.classList.add("sensei-course-theme__button","is-busy"),r.disabled=!0;const i=["sensei_message_teacher_nonce","_wpnonce","post_id","contact_message"].reduce(((e,t)=>({...e,[t]:n.elements[t].value})),{});window.fetch(`${o}sensei-internal/v1/messages?_locale=user`,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json","X-WP-Nonce":i._wpnonce}}).then((()=>{n.classList.add("is-success"),s.focus()})).catch((()=>{}))}
/***/o.d(t,{
/* harmony export */R:()=>/* binding */n
/* harmony export */})},
/***/91729:
/***/(e,t,o)=>{"use strict";
/* harmony import */var n=o(47701);
/* harmony import */
/**
 * Update video height when its width changes to keep original aspect ratio.
 *
 * @param {HTMLElement} block Container to track. Must have an <iframe> width and height attributes.
 */
function r(e){const t=()=>e.querySelector("iframe");let o=t();const n=o&&
/**
 * Get aspect ratio from element width and height attribute.
 *
 * @param {HTMLElement} element
 * @param {string}      element.width
 * @param {string}      element.height
 * @return {null|number} Width / Height aspect ratio.
 */
function(e){let{width:t,height:o}=e;return o&&t?+t/+o:null}(o);function r(){if(o=t(),!o)return;const{offsetHeight:e,offsetWidth:r}=o,s=r/n;s&&s!==e&&o.style.setProperty("height",`${s}px`)}n&&(new window.ResizeObserver(r).observe(e),r())}o.n(n)()((
/**
 * WordPress dependencies
 */
function(){document.querySelectorAll(".sensei-course-theme-lesson-video").forEach(r)}))}
/***/,
/***/40365:
/***/(e,t,o)=>{"use strict";
/* harmony export */o.d(t,{
/* harmony export */w:()=>/* binding */i
/* harmony export */});
/**
 * Focus mode class name and session storage key.
 *
 * @type {string}
 */
const n="sensei-course-theme--focus-mode",r="sensei-course-theme__sidebar--hidden",s=()=>{const e=window.sessionStorage.getItem(n);if(e)try{const t=JSON.parse(e);"boolean"==typeof t&&i(t,!0)}catch(e){}},i=(e,t)=>{const{classList:o}=document.body,s=document.querySelector(".sensei-course-theme__sidebar"),i=o.contains(n),c=void 0===e?!i:e;c?t&&(null==s||s.classList.add(r)):null==s||s.classList.remove(r),o.toggle(n,c),window.sessionStorage.setItem(n,JSON.stringify(c))};
// eslint-disable-next-line @wordpress/no-global-event-listener
window.addEventListener("DOMContentLoaded",(()=>{var e;s(),setTimeout((()=>{document.body.classList.add(`${n}--animated`)}),500),null===(e=document.querySelector(".sensei-course-theme__sidebar"))||void 0===e||e.addEventListener("transitionend",(e=>{var t;"left"===e.propertyName&&document.body.classList.contains(n)&&(null===(t=document.querySelector(".sensei-course-theme__sidebar"))||void 0===t||t.classList.add(r))}))}))}
/***/,
/***/91971:
/***/()=>{let e=0;const t="scroll",o=e=>{const[o,n]=e<0?["up","down"]:["down","up"];document.body.classList.remove(`${t}-${n}`),document.body.classList.add(`${t}-${o}`)};
/**
 * Detect if a scroll movement is upward or downward.
 */
// eslint-disable-next-line @wordpress/no-global-event-listener
window.addEventListener("scroll",(()=>{const{scrollTop:n,scrollHeight:r,clientHeight:s}=document.documentElement,i=n-e;e=Math.max(0,n),o(i);const c=r-n-s<100;document.body.classList.toggle(`${t}-bottom`,c)}),{capture:!1,passive:!0})}
/***/,
/***/47701:
/***/e=>{"use strict";e.exports=window.wp.domReady}
/***/
/******/},t={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function o(n){
/******/ // Check if module is in cache
/******/var r=t[n];
/******/if(void 0!==r)
/******/return r.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var s=t[n]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[n](s,s.exports,o),s.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/o.n=e=>{
/******/var t=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return o.d(t,{a:t}),t;
/******/},
/******/ // define getter functions for harmony exports
/******/o.d=(e,t)=>{
/******/for(var n in t)
/******/o.o(t,n)&&!o.o(e,n)&&
/******/Object.defineProperty(e,n,{enumerable:!0,get:t[n]})
/******/;
/******/},
/******/o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)
/******/,
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(()=>{"use strict";
/* harmony import */o(49977),o(91729),o(91971)
/* harmony import */;var e=o(68825),t=o(1487),n=o(40365);
/**
 * Internal dependencies
 */
window.sensei||(window.sensei={})
/**
 * Show or hide the sidebar in mobile mode.
 */;window.sensei.courseTheme={toggleFocusMode:n/* .toggleFocusMode */.w,toggleSidebar:()=>{document.body.classList.toggle("sensei-course-theme--sidebar-open")}},window.sensei.submitContactTeacher=t/* .submitContactTeacher */.R,(0,e/* .initCompleteLessonTransition */.F)()})()})
/******/();