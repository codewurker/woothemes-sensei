/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e={
/***/80503:
/***/(e,t,n)=>{
/* harmony import */var o=n(7705),i=document.activeElement,s=function(e){null==e||e.preventDefault();var t=(0,o/* .querySelectorAncestor */.Z)(e.target,"[data-sensei-modal]");if(t){// Put element's copy at the end of the body element.
var n=t.cloneNode(!0);n.setAttribute("data-sensei-modal-clone",""),document.body.appendChild(n),["overlay","close"].forEach((function(e){n.querySelectorAll("[data-sensei-modal-".concat(e,"]")).forEach((function(e){e.addEventListener("click",a)}))})),// Open the modal.
// Make sure the elements are opened only after they are painted by
// the browser first. Otherwise the transition effects do not work.
window.requestAnimationFrame((function(){return window.requestAnimationFrame((function(){n.setAttribute("data-sensei-modal-is-open",""),document.body.dispatchEvent(new CustomEvent("sensei-modal-open",{detail:n})),i=document.activeElement;var e=n.querySelector("[data-sensei-modal-content]");e&&(e.tabIndex=0,e.focus())}))}))}},a=function(e){null==e||e.preventDefault(),document.querySelectorAll("[data-sensei-modal-clone]").forEach((function(e){var t;e.remove(),document.body.dispatchEvent(new CustomEvent("sensei-modal-close",{detail:e})),null===(t=i)||void 0===t||t.focus()}))};
/* eslint @wordpress/no-global-active-element: 0 -- Not relevant out of React.  */
/**
 * Internal dependencies
 */
/**
 * @module sensei-modal
 * @description Adds a basic suport for modals via "data-sensei-modal-*" attribures on HTML elements.
 *
 * @usage
 * The Sensei Modal consists of four basic elements: open, close, content and overlay.
 * Each of those elements should be denoted with HTML attributes:
 * - data-sensei-modal-open
 * - data-sensei-modal-content
 * - data-sensei-modal-overlay (Optional)
 * - data-sensei-modal-close (Optional)
 * The modal declaration should look like something this:
 * ```html
 * <div data-sensei-modal>
 *   <button data-sensei-modal-open>Open Modal</button>
 *   <div data-sensei-modal-overlay></div>
 *   <div data-sensei-modal-content>
 *     <h1>Hello Modal!</h1>
 *     <button data-sensei-modal-close>Close Modal</button>
 *   </div>
 * </div>
 * ```
 */
/**
 * The last focused element in the document.
 *
 * @type {Element}
 */ // Init modal when the DOM is fully ready.
// eslint-disable-next-line @wordpress/no-global-event-listener
window.addEventListener("load",(
/**
 * Attach modal events.
 */
function(){
// Attach open events.
document.querySelectorAll("[data-sensei-modal-open]").forEach((function(e){e.addEventListener("click",s)})),// Attach close event on Escape key.
// eslint-disable-next-line @wordpress/no-global-event-listener
document.addEventListener("keydown",(function(e){"Escape"===e.key&&a(e)}))})),
/**
 * Support for closing the Modal on Esc key.
 */
// eslint-disable-next-line @wordpress/no-global-event-listener
document.addEventListener("keydown",(function(e){["Esc","Escape"].includes(e.key)&&a()}))}
/***/,
/***/7705:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */o
/* harmony export */});
/**
 * Finds the first ancestor matching the CSS selector.
 *
 * @param {HTMLElement} element  The element whose parent you want to retrieve.
 * @param {string}      selector The CSS selector.
 * @return {HTMLElement|null} The parent element if found or null otherwise.
 */
var o=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t.parentElement?t.parentElement.matches(n)?t.parentElement:e(t.parentElement,n):null};
/***/
/******/}},t={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function n(o){
/******/ // Check if module is in cache
/******/var i=t[o];
/******/if(void 0!==i)
/******/return i.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var s=t[o]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[o](s,s.exports,n),s.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/
/******/ // define getter functions for harmony exports
/******/n.d=(e,t)=>{
/******/for(var o in t)
/******/n.o(t,o)&&!n.o(e,o)&&
/******/Object.defineProperty(e,o,{enumerable:!0,get:t[o]})
/******/;
/******/},
/******/n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)
/******/,
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(()=>{
/* harmony import */n(80503);
/**
 * Internal dependencies
 */
// eslint-disable-next-line @wordpress/no-global-event-listener
window.addEventListener("load",(function(){0!==document.querySelectorAll(".sensei-collapsible__toggle").length&&document.querySelectorAll(".sensei-collapsible").forEach((function(e){var t=e.querySelector(".sensei-collapsible__content"),n=e.querySelector(".sensei-collapsible__toggle");if(t&&n){var o=t.offsetHeight+"px";if(t.classList.contains("sensei-collapsed")){var i=t.style.transition;t.style.transition="unset",t.style.maxHeight="unset",o=t.offsetHeight+"px",t.style.visibility="hidden",t.style.maxHeight=0,t.style.transition=i}else t.style.maxHeight=o;n.addEventListener("click",(function(e){e.preventDefault();var i=t.classList.toggle("sensei-collapsed");n.classList.toggle("sensei-collapsed",i),n.setAttribute("aria-expanded",!i),i?t.style.maxHeight="0px":(t.style.visibility="",t.style.maxHeight=o)})),t.addEventListener("transitionend",(function(e){"max-height"===e.propertyName&&t.classList.contains("sensei-collapsed")&&(t.style.visibility="hidden")}))}}))}))})()})
/******/();