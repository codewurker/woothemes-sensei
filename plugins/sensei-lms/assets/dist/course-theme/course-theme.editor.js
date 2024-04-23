/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var r={
/***/26878:
/***/(r,e,t)=>{
/* unused harmony export StylesProbe */
/* harmony import */var o,n,i,l=t(66886),a=t(50189),c=(i={},{update:function(){var r,e;o&&o.isConnected||(e=(null===(r=document.querySelector(".edit-site-visual-editor__editor-canvas"))||void 0===r?void 0:r.contentDocument)||document,(o=null==e?void 0:e.querySelector(".editor-styles-wrapper"))&&(n=e.createElement("a"),Object.assign(n.attributes,{tabindex:"-1",id:"sensei-theme-style-probe"}),Object.assign(n.style,{position:"fixed",top:"-100vh"}),o.appendChild(n))),o&&function(r){for(var e=0,t=Object.entries(r);e<t.length;e++){var n=(0,l/* ["default"] */.Z)(t[e],2),i=n[0],a=n[1];o.style.setProperty(i,a)}}(function(){var r=window.getComputedStyle,e=r(o),t=e.color,l=e.backgroundColor,c={"--sensei-primary-color":r(n).color,"--sensei-text-color":t,"--sensei-background-color":l,"--sensei-primary-contrast-color":l};for(var u in(0,a/* ["default"] */.Z)({},c))i[u]===c[u]&&delete c[u];return i=(0,a/* ["default"] */.Z)((0,a/* ["default"] */.Z)({},i),c),c}())}});
/* harmony import */setInterval(c.update,1e3)}
/***/,
/***/25428:
/***/(r,e,t)=>{
/* harmony import */var o=t(50189),n=t(92694);
/* harmony import */
/**
 * Turn variable reference to CSS.
 *
 * From @wordpress/edit-site/src/components/global-styles/use-global-styles-output.js
 *
 * @param {string} uncompiledValue
 * @return {string} CSS property value.
 */
function i(r){var e,t="var:";if(null!=r&&null!==(e=r.startsWith)&&void 0!==e&&e.call(r,t)){var o=r.slice(4).split("|").join("--");return"var(--wp--".concat(o,")")}return r}
/**
 * Turn color name to CSS.
 *
 * @param {string} value A color name.
 * @return {string} CSS property value.
 */(0,n.addFilter)("blocks.registerBlockType","sensei/supports-color/withColorVariableSupport",(
/**
 * WordPress dependencies
 */
/**
 * Add settings to generate CSS variables for colors in the edit and save wrappers.
 *
 * @param {Object} settings Block settings.
 */
function(r){var e=r.getEditWrapperProps;return(0,o/* ["default"] */.Z)((0,o/* ["default"] */.Z)({},r),{},{getEditWrapperProps:function(r){var t,n={};e&&(n=e(r));var l=
/**
 * Get CSS variables for colors from style and color attributes.
 *
 * @param {Object} attributes Block attributes.
 * @return {Object} CSS variable name-value pairs.
 */
function(r){var e,t,o,n,l=r.style,a=r.backgroundColor,c=r.customBackgroundColor,u=null==l||null===(e=l.elements)||void 0===e||null===(t=e.link)||void 0===t||null===(o=t.color)||void 0===o?void 0:o.text,s=i(null==l||null===(n=l.color)||void 0===n?void 0:n.background)||(p=a,p&&"var(--wp--preset--color--".concat(p,")"))||c,d={};var p;u&&(d["--sensei-primary-color"]=i(u));s&&(d["--sensei-background-color"]=s,d["--sensei-primary-contrast-color"]=s);return d}(r);return(0,o/* ["default"] */.Z)((0,o/* ["default"] */.Z)({},n),{},{style:(0,o/* ["default"] */.Z)((0,o/* ["default"] */.Z)({},(null===(t=n)||void 0===t?void 0:t.style)||{}),l||{})})}})}))}
/***/,
/***/92694:
/***/r=>{r.exports=window.wp.hooks;
/***/},
/***/1793:
/***/(r,e,t)=>{function o(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=r[t];return o}
/***/
/* harmony export */t.d(e,{
/* harmony export */Z:()=>/* binding */o
/* harmony export */})},
/***/66470:
/***/(r,e,t)=>{function o(r){if(Array.isArray(r))return r}
/***/
/* harmony export */t.d(e,{
/* harmony export */Z:()=>/* binding */o
/* harmony export */})},
/***/64649:
/***/(r,e,t)=>{function o(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}
/***/
/* harmony export */t.d(e,{
/* harmony export */Z:()=>/* binding */o
/* harmony export */})},
/***/22446:
/***/(r,e,t)=>{function o(r,e){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var o,n,i=[],_n=!0,l=!1;try{for(t=t.call(r);!(_n=(o=t.next()).done)&&(i.push(o.value),!e||i.length!==e);_n=!0);}catch(r){l=!0,n=r}finally{try{_n||null==t.return||t.return()}finally{if(l)throw n}}return i}}
/***/
/* harmony export */t.d(e,{
/* harmony export */Z:()=>/* binding */o
/* harmony export */})},
/***/53764:
/***/(r,e,t)=>{function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
/***/
/* harmony export */t.d(e,{
/* harmony export */Z:()=>/* binding */o
/* harmony export */})},
/***/50189:
/***/(r,e,t)=>{
/* harmony export */t.d(e,{
/* harmony export */Z:()=>/* binding */i
/* harmony export */});
/* harmony import */var o=t(64649);function n(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,o)}return t}function i(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){(0,o/* ["default"] */.Z)(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}
/***/},
/***/66886:
/***/(r,e,t)=>{
/* harmony export */t.d(e,{
/* harmony export */Z:()=>/* binding */a
/* harmony export */});
/* harmony import */var o=t(66470),n=t(22446),i=t(64013),l=t(53764);
/* harmony import */function a(r,e){return(0,o/* ["default"] */.Z)(r)||(0,n/* ["default"] */.Z)(r,e)||(0,i/* ["default"] */.Z)(r,e)||(0,l/* ["default"] */.Z)()}
/***/},
/***/64013:
/***/(r,e,t)=>{
/* harmony export */t.d(e,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */});
/* harmony import */var o=t(1793);function n(r,e){if(r){if("string"==typeof r)return(0,o/* ["default"] */.Z)(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,o/* ["default"] */.Z)(r,e):void 0}}
/***/
/******/}},e={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function t(o){
/******/ // Check if module is in cache
/******/var n=e[o];
/******/if(void 0!==n)
/******/return n.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var i=e[o]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return r[o](i,i.exports,t),i.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/t.n=r=>{
/******/var e=r&&r.__esModule?
/******/()=>r.default
/******/:()=>r
/******/;
/******/return t.d(e,{a:e}),e;
/******/},
/******/ // define getter functions for harmony exports
/******/t.d=(r,e)=>{
/******/for(var o in e)
/******/t.o(e,o)&&!t.o(r,o)&&
/******/Object.defineProperty(r,o,{enumerable:!0,get:e[o]})
/******/;
/******/},
/******/t.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e)
/******/,t(25428),t(26878)})
/******/();