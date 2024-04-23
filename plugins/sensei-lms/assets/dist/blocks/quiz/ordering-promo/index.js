/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e,s,n,r,__,t={
/***/55609:
/***/e=>{e.exports=window.wp.components;
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
/******/}},o={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function i(e){
/******/ // Check if module is in cache
/******/var s=o[e];
/******/if(void 0!==s)
/******/return s.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var n=o[e]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return t[e](n,n.exports,i),n.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/i.n=e=>{
/******/var s=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return i.d(s,{a:s}),s;
/******/},
/******/ // define getter functions for harmony exports
/******/i.d=(e,s)=>{
/******/for(var n in s)
/******/i.o(s,n)&&!i.o(e,n)&&
/******/Object.defineProperty(e,n,{enumerable:!0,get:s[n]})
/******/;
/******/},
/******/i.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s)
/******/,
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
e=i(69307),s=i(65736),n=i(92694),r=i(55609),__=s.__,(0,n.addFilter)("senseiQuestionTypeToolbarOptions","sensei-lms/ordering-promo",(function(e){return e.push({title:__("Ordering","sensei-lms"),description:__("Place the answers in the correct order.","sensei-lms"),label:__("Ordering","sensei-lms"),value:"ordering",disabled:!0}),e})),(0,n.addFilter)("senseiQuestionTypeToolbarOptionChildren","sensei-lms/ordering-promo",(function(s,n){return"ordering"!==n.value?s:(0,e.createElement)("div",{className:"sensei-lms-question-block__type-selector__option__container--disabled"},(0,e.createElement)("strong",null," ",n.title),(0,e.createElement)("div",{className:"sensei-lms-question-block__type-selector__option__description sensei-lms-question-block__type-selector__option__description--disabled"},n.description),(0,e.createElement)(r.ExternalLink,{href:"https://senseilms.com/sensei-pro/?utm_source=plugin_sensei&utm_medium=upsell&utm_campaign=quiz_ordering_question_type"},__("Upgrade to Sensei Pro","sensei-lms")))}))})
/******/();