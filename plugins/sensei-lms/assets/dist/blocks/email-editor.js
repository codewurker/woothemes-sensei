/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var r,t,e={
/***/92819:
/***/r=>{r.exports=window.lodash;
/***/},
/***/92694:
/***/r=>{r.exports=window.wp.hooks;
/***/
/******/}},o={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function s(r){
/******/ // Check if module is in cache
/******/var t=o[r];
/******/if(void 0!==t)
/******/return t.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var p=o[r]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[r](p,p.exports,s),p.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/s.n=r=>{
/******/var t=r&&r.__esModule?
/******/()=>r.default
/******/:()=>r
/******/;
/******/return s.d(t,{a:t}),t;
/******/},
/******/ // define getter functions for harmony exports
/******/s.d=(r,t)=>{
/******/for(var e in t)
/******/s.o(t,e)&&!s.o(r,e)&&
/******/Object.defineProperty(r,e,{enumerable:!0,get:t[e]})
/******/;
/******/},
/******/s.o=(r,t)=>Object.prototype.hasOwnProperty.call(r,t)
/******/,
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
r=s(92694),t=s(92819),(0,r.addFilter)("blocks.registerBlockType","sensei-lms/email-blocks",(
/**
   * Update the blocks to remove extra settings when used in email editor.
   *
   * @param {Object} settings Block settings.
   */
function(r){const e={...r.supports?r.supports:{}};
// Remove font family setting.
return((0,t.has)(r,"supports.typography.fontFamily")||(0,t.has)(r,"supports.typography.__experimentalFontFamily"))&&(e.typography={...e.typography,__experimentalFontFamily:!1,fontFamily:!1}),
// Remove alignWide setting.
(0,t.has)(r,"supports.alignWide")&&(e.alignWide=!1),
// Remove wide from align options.
(0,t.has)(r,"supports.align.length")&&(e.align=e.align.filter((r=>"wide"!==r))),{...r,supports:e}}),10)})
/******/();