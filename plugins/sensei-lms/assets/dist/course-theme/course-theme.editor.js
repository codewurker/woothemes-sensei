/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e={
/***/26878:
/***/(e,o,r)=>{
/* unused harmony export StylesProbe */
/**
 * Probe base colors and update Sensei theme variables when they change.
 */
const t=(()=>{let e,o,r={};return{update:function(){e&&e.isConnected||function(){var r;const t=(null===(r=document.querySelector(".edit-site-visual-editor__editor-canvas"))||void 0===r?void 0:r.contentDocument)||document;e=null==t?void 0:t.querySelector(".editor-styles-wrapper"),e&&(o=t.createElement("a"),Object.assign(o.attributes,{tabindex:"-1",id:"sensei-theme-style-probe"}),Object.assign(o.style,{position:"fixed",top:"-100vh"}),e.appendChild(o))}(),e&&function(o){for(const[r,t]of Object.entries(o))e.style.setProperty(r,t)}(function(){const{getComputedStyle:t}=window,{color:n,backgroundColor:s}=t(e),{color:l}=t(o),i={"--sensei-primary-color":l,"--sensei-text-color":n,"--sensei-background-color":s,"--sensei-primary-contrast-color":s};for(const e in{...i})r[e]===i[e]&&delete i[e];return r={...r,...i},i}())}}})();setInterval(t.update,1e3)}
/***/,
/***/25428:
/***/(e,o,r)=>{
/* harmony import */var t=r(92694);
/* harmony import */
/**
 * Turn variable reference to CSS.
 *
 * From @wordpress/edit-site/src/components/global-styles/use-global-styles-output.js
 *
 * @param {string} uncompiledValue
 * @return {string} CSS property value.
 */
function n(e){var o;const r="var:";if(null!=e&&null!==(o=e.startsWith)&&void 0!==o&&o.call(e,r)){return`var(--wp--${e.slice(4).split("|").join("--")})`}return e}
/**
 * Turn color name to CSS.
 *
 * @param {string} value A color name.
 * @return {string} CSS property value.
 */(0,t.addFilter)("blocks.registerBlockType","sensei/supports-color/withColorVariableSupport",(
/**
 * WordPress dependencies
 */
/**
 * Add settings to generate CSS variables for colors in the edit and save wrappers.
 *
 * @param {Object} settings Block settings.
 */
function(e){const{getEditWrapperProps:o}=e;return{...e,getEditWrapperProps:e=>{var r;let t={};o&&(t=o(e));const s=
/**
 * Get CSS variables for colors from style and color attributes.
 *
 * @param {Object} attributes Block attributes.
 * @return {Object} CSS variable name-value pairs.
 */
function(e){var o,r,t,s;const{style:l,backgroundColor:i,customBackgroundColor:c}=e,a=null==l||null===(o=l.elements)||void 0===o||null===(r=o.link)||void 0===r||null===(t=r.color)||void 0===t?void 0:t.text,u=n(null==l||null===(s=l.color)||void 0===s?void 0:s.background)||(p=i,p&&`var(--wp--preset--color--${p})`)||c,d={};var p;a&&(d["--sensei-primary-color"]=n(a));u&&(d["--sensei-background-color"]=u,d["--sensei-primary-contrast-color"]=u);return d}(e);return{...t,style:{...(null===(r=t)||void 0===r?void 0:r.style)||{},...s||{}}}}}}))}
/***/,
/***/92694:
/***/e=>{e.exports=window.wp.hooks;
/***/
/******/}},o={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function r(t){
/******/ // Check if module is in cache
/******/var n=o[t];
/******/if(void 0!==n)
/******/return n.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var s=o[t]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[t](s,s.exports,r),s.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/r.n=e=>{
/******/var o=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return r.d(o,{a:o}),o;
/******/},
/******/ // define getter functions for harmony exports
/******/r.d=(e,o)=>{
/******/for(var t in o)
/******/r.o(o,t)&&!r.o(e,t)&&
/******/Object.defineProperty(e,t,{enumerable:!0,get:o[t]})
/******/;
/******/},
/******/r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o)
/******/,r(25428),r(26878)})
/******/();