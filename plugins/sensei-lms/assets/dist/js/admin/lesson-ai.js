/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e,t,n,r,o,i,s,a,__,c,l={
/***/68734:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */Z:()=>s
/* harmony export */});
/* harmony import */var r,o=n(99196);
/* harmony import */function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}
/* harmony default export */const s=function(e){
return o.createElement("svg",i({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.5 9.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM10 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm4.75 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",fill:"#00594F"})))};
/***/},
/***/36414:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */Z:()=>o
/* harmony export */});
/* harmony import */var r=n(69307);
/* harmony import */
/* harmony default export */const o=(0,r.forwardRef)((
/**
 * WordPress dependencies
 */
/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */
/**
 * Return an SVG icon.
 *
 * @param {IconProps}                                 props icon is the SVG component to render
 *                                                          size is a number specifiying the icon size in pixels
 *                                                          Other props will be passed to wrapped SVG component
 * @param {import('react').ForwardedRef<HTMLElement>} ref   The forwarded ref to the SVG element.
 *
 * @return {JSX.Element}  Icon component
 */
function({icon:e,size:t=24,...n},o){return(0,r.cloneElement)(e,{width:t,height:t,...n,ref:o})}));
//# sourceMappingURL=index.js.map
/***/},
/***/99196:
/***/e=>{e.exports=window.React;
/***/},
/***/55609:
/***/e=>{e.exports=window.wp.components;
/***/},
/***/94333:
/***/e=>{e.exports=window.wp.compose;
/***/},
/***/69307:
/***/e=>{e.exports=window.wp.element;
/***/},
/***/92694:
/***/e=>{e.exports=window.wp.hooks;
/***/},
/***/65736:
/***/e=>{e.exports=window.wp.i18n;
/***/},
/***/64649:
/***/(e,t,n)=>{function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}
/***/
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/50189:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */i
/* harmony export */});
/* harmony import */var r=n(64649);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r/* ["default"] */.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}
/***/
/******/}},u={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function p(e){
/******/ // Check if module is in cache
/******/var t=u[e];
/******/if(void 0!==t)
/******/return t.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var n=u[e]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return l[e](n,n.exports,p),n.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/p.n=e=>{
/******/var t=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return p.d(t,{a:t}),t;
/******/},
/******/ // define getter functions for harmony exports
/******/p.d=(e,t)=>{
/******/for(var n in t)
/******/p.o(t,n)&&!p.o(e,n)&&
/******/Object.defineProperty(e,n,{enumerable:!0,get:t[n]})
/******/;
/******/},
/******/p.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)
/******/,
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
e=p(50189),t=p(69307),n=p(55609),r=p(65736),o=p(92694),i=p(94333),s=p(36414),a=p(68734),__=r.__,c=function(e){return function(r){return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(n.Fill,{name:"SenseiQuizHeader"},(0,t.createElement)(n.Button,{variant:"secondary",className:"sensei-pro-ai-generate-questions-button upsell",onClick:function(){window.open("https://senseilms.com/sensei-pro/?utm_source=plugin_sensei&utm_medium=upsell&utm_campaign=quesion-ai","_blank")}},(0,t.createElement)("div",{className:"button-text-content"},(0,t.createElement)(s/* ["default"] */.Z,{icon:(0,t.createElement)(a/* ["default"] */.Z,null)}),__("Generate quiz questions with AI","sensei-pro")),(0,t.createElement)("span",{className:"awaiting-mod sensei-upsell-pro-badge"},__("Pro","sensei-lms")))),(0,t.createElement)(e,r))}},(0,o.addFilter)("blocks.registerBlockType","sensei-lms/with-chat-gpt-question-generator",(function(t){return"sensei-lms/quiz"!==t.name?t:(0,e/* ["default"] */.Z)((0,e/* ["default"] */.Z)({},t),{},{edit:(0,i.compose)(c)(t.edit)})}))})
/******/();