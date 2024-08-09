/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var t,o,e={
/***/92819:
/***/t=>{t.exports=window.lodash;
/***/},
/***/92694:
/***/t=>{t.exports=window.wp.hooks;
/***/
/******/}},r={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function s(t){
/******/ // Check if module is in cache
/******/var o=r[t];
/******/if(void 0!==o)
/******/return o.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var a=r[t]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[t](a,a.exports,s),a.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/s.n=t=>{
/******/var o=t&&t.__esModule?
/******/()=>t.default
/******/:()=>t
/******/;
/******/return s.d(o,{a:o}),o;
/******/},
/******/ // define getter functions for harmony exports
/******/s.d=(t,o)=>{
/******/for(var e in o)
/******/s.o(o,e)&&!s.o(t,e)&&
/******/Object.defineProperty(t,e,{enumerable:!0,get:o[e]})
/******/;
/******/},
/******/s.o=(t,o)=>Object.prototype.hasOwnProperty.call(t,o)
/******/,
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
t=s(92694),o=s(92819),(0,t.addFilter)("blocks.registerBlockType","sensei-lms/email-blocks",(
/**
   * Update the blocks to remove extra settings when used in email editor.
   *
   * @param {Object} settings Block settings.
   * @param {string} name     Block name.
   */
function(t,e){const r={...t.supports?t.supports:{}};
// Remove font family setting.
return((0,o.has)(t,"supports.typography.fontFamily")||(0,o.has)(t,"supports.typography.__experimentalFontFamily"))&&(r.typography={...r.typography,__experimentalFontFamily:!1,fontFamily:!1}),
// Remove alignWide setting.
(0,o.has)(t,"supports.alignWide")&&(r.alignWide=!1),
// Remove wide from align options.
(0,o.has)(t,"supports.align.length")&&(r.align=r.align.filter((t=>"wide"!==t))),
// Alignment is not supported for buttons block in emails.
"core/buttons"===e&&(0,o.has)(r,"layout")&&(r.layout=!1),
// Alingment is not supported for image block in emails.
"core/image"===e&&(0,o.has)(r,"align")&&(r.align=!1),{...t,supports:r}}),10)})
/******/();