/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e={
/***/68734:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */Z:()=>i
/* harmony export */});
/* harmony import */var r,o=n(99196);
/* harmony import */function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}
/* harmony default export */const i=function(e){
return o.createElement("svg",s({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.5 9.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM10 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm4.75 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",fill:"#00594F"})))};
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
/***/
/******/}},t={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function n(r){
/******/ // Check if module is in cache
/******/var o=t[r];
/******/if(void 0!==o)
/******/return o.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var s=t[r]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[r](s,s.exports,n),s.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/n.n=e=>{
/******/var t=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return n.d(t,{a:t}),t;
/******/},
/******/ // define getter functions for harmony exports
/******/n.d=(e,t)=>{
/******/for(var r in t)
/******/n.o(t,r)&&!n.o(e,r)&&
/******/Object.defineProperty(e,r,{enumerable:!0,get:t[r]})
/******/;
/******/},
/******/n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)
/******/,
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(()=>{
/* unused harmony export addQuestionGeneratorUpsellButtonToQuizBlock */
/* harmony import */var e=n(69307),t=n(55609),r=n(65736),o=n(92694),s=n(94333),i=n(36414),a=n(68734);
/* harmony import */
/**
 * WordPress dependencies
 */
const l=n=>o=>(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t.Fill,{name:"SenseiQuizHeader"},(0,e.createElement)(t.Button,{variant:"secondary",className:"sensei-pro-ai-generate-questions-button upsell",onClick:()=>{window.open("https://senseilms.com/sensei-pro/?utm_source=plugin_sensei&utm_medium=upsell&utm_campaign=quesion-ai","_blank")}},(0,e.createElement)("div",{className:"button-text-content"},(0,e.createElement)(i/* ["default"] */.Z,{icon:(0,e.createElement)(a/* ["default"] */.Z,null)}),(0,r.__)("Generate quiz questions with AI","sensei-pro")),(0,e.createElement)("span",{className:"awaiting-mod sensei-upsell-pro-badge"},(0,r.__)("Pro","sensei-lms")))),(0,e.createElement)(n,o));(0,o.addFilter)("blocks.registerBlockType","sensei-lms/with-chat-gpt-question-generator",(e=>"sensei-lms/quiz"!==e.name?e:{...e,edit:(0,s.compose)(l)(e.edit)}))})()})
/******/();