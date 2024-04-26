/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e,r={
/***/47701:
/***/e=>{e.exports=window.wp.domReady;
/***/
/******/}},t={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function n(e){
/******/ // Check if module is in cache
/******/var o=t[e];
/******/if(void 0!==o)
/******/return o.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var a=t[e]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return r[e](a,a.exports,n),a.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/n.n=e=>{
/******/var r=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return n.d(r,{a:r}),r;
/******/},
/******/ // define getter functions for harmony exports
/******/n.d=(e,r)=>{
/******/for(var t in r)
/******/n.o(r,t)&&!n.o(e,t)&&
/******/Object.defineProperty(e,t,{enumerable:!0,get:r[t]})
/******/;
/******/},
/******/n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)
/******/,
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
e=n(47701),
/**
 * WordPress dependencies
 */
/**
 * Handles uploading a file for a file upload question.
 *
 */
n.n(e)()((()=>{document.querySelectorAll(".sensei-lms-question-block__file-input").forEach((e=>{e.addEventListener("change",(e=>{var r;const t=e.target,n=null===(r=t.files)||void 0===r?void 0:r[0],o=t.parentElement.parentElement.querySelector(".sensei-lms-question-block__file-upload-name");o&&(o.innerText=n&&n.name)}))}))}))})
/******/();