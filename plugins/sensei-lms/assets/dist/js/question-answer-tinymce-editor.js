/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e,__,o={
/***/65736:
/***/e=>{e.exports=window.wp.i18n;
/***/
/******/}},r={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function n(e){
/******/ // Check if module is in cache
/******/var t=r[e];
/******/if(void 0!==t)
/******/return t.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var i=r[e]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return o[e](i,i.exports,n),i.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/n.n=e=>{
/******/var o=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return n.d(o,{a:o}),o;
/******/},
/******/ // define getter functions for harmony exports
/******/n.d=(e,o)=>{
/******/for(var r in o)
/******/n.o(o,r)&&!n.o(e,r)&&
/******/Object.defineProperty(e,r,{enumerable:!0,get:o[r]})
/******/;
/******/},
/******/n.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o)
/******/,
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
e=n(65736),__=e.__,window.addPlaceholderInTinymceEditor=function(e){
// Remove placeholder on submit.
jQuery("#sensei-quiz-form").submit((function(){return e.dom.remove("multi-line-placeholder"),!0})),// Add placeholder on init and blur.
e.on("blur init",(function(){""==e.getContent()&&e.setContent("<p id='multi-line-placeholder'>"+__("Your answer","sensei-lms")+"</p>")})),// Remove placeholder on focus.
e.on("focus",(function(){e.dom.remove("multi-line-placeholder")}))}})
/******/();