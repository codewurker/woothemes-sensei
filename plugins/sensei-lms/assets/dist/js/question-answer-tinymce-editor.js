/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e,r={
/***/65736:
/***/e=>{e.exports=window.wp.i18n;
/***/
/******/}},o={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function n(e){
/******/ // Check if module is in cache
/******/var t=o[e];
/******/if(void 0!==t)
/******/return t.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var i=o[e]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return r[e](i,i.exports,n),i.exports;
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
/******/for(var o in r)
/******/n.o(r,o)&&!n.o(e,o)&&
/******/Object.defineProperty(e,o,{enumerable:!0,get:r[o]})
/******/;
/******/},
/******/n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)
/******/,
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
e=n(65736),
/**
 * Add placeholder to tinymce editor
 *
 * @param  editor tinymce editor.
 */
window.addPlaceholderInTinymceEditor=r=>{
// Remove placeholder on submit.
jQuery("#sensei-quiz-form").submit((function(){return r.dom.remove("multi-line-placeholder"),!0})),
// Add placeholder on init and blur.
r.on("blur init",(function(){""==r.getContent()&&r.setContent("<p id='multi-line-placeholder'>"+(0,e.__)("Your answer","sensei-lms")+"</p>")})),
// Remove placeholder on focus.
r.on("focus",(function(){r.dom.remove("multi-line-placeholder")}))}})
/******/();