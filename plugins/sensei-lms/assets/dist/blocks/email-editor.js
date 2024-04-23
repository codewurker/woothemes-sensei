/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e,r,t,o={
/***/92819:
/***/e=>{e.exports=window.lodash;
/***/},
/***/92694:
/***/e=>{e.exports=window.wp.hooks;
/***/},
/***/64649:
/***/(e,r,t)=>{function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}
/***/
/* harmony export */t.d(r,{
/* harmony export */Z:()=>/* binding */o
/* harmony export */})},
/***/50189:
/***/(e,r,t)=>{
/* harmony export */t.d(r,{
/* harmony export */Z:()=>/* binding */p
/* harmony export */});
/* harmony import */var o=t(64649);function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){(0,o/* ["default"] */.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}
/***/
/******/}},n={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function p(e){
/******/ // Check if module is in cache
/******/var r=n[e];
/******/if(void 0!==r)
/******/return r.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var t=n[e]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return o[e](t,t.exports,p),t.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/p.n=e=>{
/******/var r=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return p.d(r,{a:r}),r;
/******/},
/******/ // define getter functions for harmony exports
/******/p.d=(e,r)=>{
/******/for(var t in r)
/******/p.o(r,t)&&!p.o(e,t)&&
/******/Object.defineProperty(e,t,{enumerable:!0,get:r[t]})
/******/;
/******/},
/******/p.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)
/******/,
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
e=p(50189),r=p(92694),t=p(92819),(0,r.addFilter)("blocks.registerBlockType","sensei-lms/email-blocks",(
/**
   * Update the blocks to remove extra settings when used in email editor.
   *
   * @param {Object} settings Block settings.
   */
function(r){var o=(0,e/* ["default"] */.Z)({},r.supports?r.supports:{});// Remove font family setting.
return((0,t.has)(r,"supports.typography.fontFamily")||(0,t.has)(r,"supports.typography.__experimentalFontFamily"))&&(o.typography=(0,e/* ["default"] */.Z)((0,e/* ["default"] */.Z)({},o.typography),{},{__experimentalFontFamily:!1,fontFamily:!1})),// Remove alignWide setting.
(0,t.has)(r,"supports.alignWide")&&(o.alignWide=!1),// Remove wide from align options.
(0,t.has)(r,"supports.align.length")&&(o.align=o.align.filter((function(e){return"wide"!==e}))),(0,e/* ["default"] */.Z)((0,e/* ["default"] */.Z)({},r),{},{supports:o})}),10)})
/******/();