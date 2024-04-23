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
/******/function o(e){
/******/ // Check if module is in cache
/******/var n=t[e];
/******/if(void 0!==n)
/******/return n.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var s=t[e]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return r[e](s,s.exports,o),s.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/o.n=e=>{
/******/var r=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return o.d(r,{a:r}),r;
/******/},
/******/ // define getter functions for harmony exports
/******/o.d=(e,r)=>{
/******/for(var t in r)
/******/o.o(r,t)&&!o.o(e,t)&&
/******/Object.defineProperty(e,t,{enumerable:!0,get:r[t]})
/******/;
/******/},
/******/o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)
/******/,
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
e=o(47701),
/**
 * WordPress dependencies
 */
o.n(e)()((function(){jQuery(".sensei-show-more").on("click",(function(e){e.preventDefault(),jQuery(e.target).addClass("hidden").siblings().removeClass("hidden")}))}))})
/******/();