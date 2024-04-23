/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e,t={
/***/47701:
/***/e=>{e.exports=window.wp.domReady;
/***/
/******/}},n={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function r(e){
/******/ // Check if module is in cache
/******/var o=n[e];
/******/if(void 0!==o)
/******/return o.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var i=n[e]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return t[e](i,i.exports,r),i.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/r.n=e=>{
/******/var t=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return r.d(t,{a:t}),t;
/******/},
/******/ // define getter functions for harmony exports
/******/r.d=(e,t)=>{
/******/for(var n in t)
/******/r.o(t,n)&&!r.o(e,n)&&
/******/Object.defineProperty(e,n,{enumerable:!0,get:t[n]})
/******/;
/******/},
/******/r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)
/******/,
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
e=r(47701),
/**
 * WordPress dependencies
 */
/**
 * Handles uploading a file for a file upload question.
 *
 */
r.n(e)()((function(){document.querySelectorAll(".sensei-lms-question-block__file-input").forEach((function(e){e.addEventListener("change",(function(e){var t,n=e.target,r=null===(t=n.files)||void 0===t?void 0:t[0],o=n.parentElement.parentElement.querySelector(".sensei-lms-question-block__file-upload-name");o&&(o.innerText=r&&r.name)}))}))}))})
/******/();