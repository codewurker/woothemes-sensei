/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e={
/***/80503:
/***/(e,t,n)=>{
/* harmony import */var s=n(7705);
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
 */let l=document.activeElement;
/**
 * Opens the modal
 * @param {MouseEvent} ev The click event.
 */const o=e=>{null==e||e.preventDefault();const t=(0,s/* .querySelectorAncestor */.Z)(e.target,"[data-sensei-modal]");if(!t)return;
// Put element's copy at the end of the body element.
const n=t.cloneNode(!0);n.setAttribute("data-sensei-modal-clone",""),document.body.appendChild(n),["overlay","close"].forEach((e=>{n.querySelectorAll(`[data-sensei-modal-${e}]`).forEach((e=>{e.addEventListener("click",i)}))})),
// Open the modal.
// Make sure the elements are opened only after they are painted by
// the browser first. Otherwise the transition effects do not work.
window.requestAnimationFrame((()=>window.requestAnimationFrame((()=>{n.setAttribute("data-sensei-modal-is-open",""),document.body.dispatchEvent(new CustomEvent("sensei-modal-open",{detail:n})),l=document.activeElement;const e=n.querySelector("[data-sensei-modal-content]");e&&(e.tabIndex=0,e.focus())}))))},i=e=>{null==e||e.preventDefault(),document.querySelectorAll("[data-sensei-modal-clone]").forEach((e=>{var t;e.remove(),document.body.dispatchEvent(new CustomEvent("sensei-modal-close",{detail:e})),null===(t=l)||void 0===t||t.focus()}))};
/**
 * Closes the opened modal
 * @param {MouseEvent} ev The click event.
 */
// Init modal when the DOM is fully ready.
// eslint-disable-next-line @wordpress/no-global-event-listener
window.addEventListener("load",(
/**
 * Attach modal events.
 */
function(){
// Attach open events.
document.querySelectorAll("[data-sensei-modal-open]").forEach((e=>{e.addEventListener("click",o)})),
// Attach close event on Escape key.
// eslint-disable-next-line @wordpress/no-global-event-listener
document.addEventListener("keydown",(e=>{"Escape"===e.key&&i(e)}))})),
/**
 * Support for closing the Modal on Esc key.
 */
// eslint-disable-next-line @wordpress/no-global-event-listener
document.addEventListener("keydown",(e=>{["Esc","Escape"].includes(e.key)&&i()}))}
/***/,
/***/7705:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */s
/* harmony export */});
/**
 * Finds the first ancestor matching the CSS selector.
 *
 * @param {HTMLElement} element  The element whose parent you want to retrieve.
 * @param {string}      selector The CSS selector.
 * @return {HTMLElement|null} The parent element if found or null otherwise.
 */
const s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.parentElement?e.parentElement.matches(t)?e.parentElement:s(e.parentElement,t):null};
/***/
/******/}},t={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function n(s){
/******/ // Check if module is in cache
/******/var l=t[s];
/******/if(void 0!==l)
/******/return l.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var o=t[s]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[s](o,o.exports,n),o.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/
/******/ // define getter functions for harmony exports
/******/n.d=(e,t)=>{
/******/for(var s in t)
/******/n.o(t,s)&&!n.o(e,s)&&
/******/Object.defineProperty(e,s,{enumerable:!0,get:t[s]})
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
window.addEventListener("load",(()=>{if(0===document.querySelectorAll(".sensei-collapsible__toggle").length)return;document.querySelectorAll(".sensei-collapsible").forEach((e=>{const t=e.querySelector(".sensei-collapsible__content"),n=e.querySelector(".sensei-collapsible__toggle");if(!t||!n)return;let s=t.offsetHeight+"px";if(t.classList.contains("sensei-collapsed")){const e=t.style.transition;t.style.transition="unset",t.style.maxHeight="unset",s=t.offsetHeight+"px",t.style.visibility="hidden",t.style.maxHeight=0,t.style.transition=e}else t.style.maxHeight=s;n.addEventListener("click",(e=>{e.preventDefault();const l=t.classList.toggle("sensei-collapsed");n.classList.toggle("sensei-collapsed",l),n.setAttribute("aria-expanded",!l),l?t.style.maxHeight="0px":(t.style.visibility="",t.style.maxHeight=s)})),t.addEventListener("transitionend",(e=>{"max-height"===e.propertyName&&t.classList.contains("sensei-collapsed")&&(t.style.visibility="hidden")}))}))}))})()})
/******/();