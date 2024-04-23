/******/(()=>{// webpackBootstrap
/******/var e={
/***/76061:
/***/(e,t,r)=>{"use strict";
/* harmony export */var n;r.d(t,{
/* harmony export */c3:()=>/* binding */a
/* harmony export */,po:()=>/* binding */l
/* harmony export */,zd:()=>/* binding */s
/* harmony export */,vX:()=>/* binding */o
/* harmony export */,cQ:()=>/* binding */c
/* harmony export */,fW:()=>/* binding */u
/* harmony export */});var i=(null===(n=window.sensei)||void 0===n?void 0:n.learningModeTemplateSetting)||{},a=i.value,l=i.name,s=i.options,o=i.customizeUrl,c=i.formId,u=i.section}
/***/,
/***/42616:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */M:()=>/* binding */s
/* harmony export */});
/* harmony import */var n=r(69307),i=r(65736),a=r(55609),l=r(76061),__=i.__,s=function(e){var t=e.upsell,r=e.name,i=e.isActive,s=(0,n.useCallback)((function(){var e=document.querySelector("#".concat(l/* .formId */.cQ,' input[name="_wp_http_referer"]')),t=e.getAttribute("value");e.setAttribute("value","".concat(t,"#").concat(l/* .tabId */.fW))}),[]);// Update the _wp_http_referer so it opens the current settings
// tab after page refresh.
return(0,n.createElement)(n.Fragment,null,t&&(0,n.createElement)(a.Button,{isPrimary:!0,href:t.url,target:"_blank"},t.title),!i&&!t&&(0,n.createElement)(a.Button,{isPrimary:!0,type:"submit",value:r,name:l/* .inputName */.po,form:l/* .formId */.cQ,onClick:s},__("Activate","sensei-lms")),i&&(0,n.createElement)(a.Button,{isPrimary:!0,href:l/* .customizeUrl */.vX},__("Customize","sensei-lms")))};
/* harmony import */}
/***/,
/***/34412:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */k:()=>/* binding */c
/* harmony export */});
/* harmony import */var n=r(69307),i=r(90005),a=r.n(i),l=r(65736),s=r(73552),o=r(42616),__=l.__,c=function(e){var t=e.title,r=e.isActive,i=e.upsell;return(0,n.createElement)("div",{className:a()({"sensei-lm-template-option__footer":!0,"sensei-lm-template-option__footer--active":r})},(0,n.createElement)(s/* .TemplateOptionTitle */.w,{isActive:r,tag:r?t:null==i?void 0:i.tag},r?__("Active","sensei-lms"):t),(0,n.createElement)("div",{className:"sensei-lm-template-option__actions"},(0,n.createElement)(o/* .TemplateActions */.M,e)))};
/* harmony import */}
/***/,
/***/46067:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */q:()=>/* binding */a
/* harmony export */});
/* harmony import */var n=r(69307),i=r(65736),__=i.__,a=function(e){var t=e.title,r=e.url,i=e.onPreview;return(0,n.createElement)("div",{className:"sensei-lm-template-option__thumbnail",onKeyPress:i,onClick:i,tabIndex:"0",role:"option",title:t},(0,n.createElement)("img",{alt:t,src:r}),(0,n.createElement)("div",{className:"sensei-lm-template-option__preview"},(0,n.createElement)("h4",{className:"sensei-lm-template-option__preview-title"},__("Preview","sensei-lms"))))};
/* harmony import */}
/***/,
/***/73552:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */w:()=>/* binding */l
/* harmony export */});
/* harmony import */var n=r(69307),i=r(90005),a=r.n(i),l=function(e){var t=e.children,r=e.isActive,i=e.tag,l=void 0===i?"":i;return(0,n.createElement)("h4",{className:a()({"sensei-lm-template-option__title":!0,"sensei-lm-template-option__title--active":r})},t,l&&(0,n.createElement)(n.Fragment,null,": ",(0,n.createElement)("span",{className:"sensei-lm-template-option__title-tag"},l)))};
/* harmony import */}
/***/,
/***/31491:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */P:()=>/* binding */l
/* harmony export */});
/* harmony import */var n=r(69307),i=r(34412),a=r(46067),l=function(e){var t=e.name,r=e.title,l=e.screenshots,s=e.onPreview,o=(0,n.useCallback)((function(){return s(t)}),[s,t]);return(0,n.createElement)("li",{className:"sensei-lm-template-option__container"},(0,n.createElement)(a/* .TemplateOptionThumbnail */.q,{title:r,url:l.thumbnail,onPreview:o}),(0,n.createElement)(i/* .TemplateOptionFooter */.k,e))};
/* harmony import */}
/***/,
/***/36522:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */w:()=>/* binding */s
/* harmony export */});
/* harmony import */var n=r(69307),i=r(55609),a=r(65736),l=r(42616),__=a.__,s=function(e){var t=e.onClose,r=e.title,s=e.screenshots;return(0,n.createElement)(i.Modal,{onRequestClose:t,title:(0,a.sprintf)(__("Preview %1$s","sensei-lms"),r),className:"sensei-lm-template-preview__modal"},(0,n.createElement)("div",{className:"sensei-lm-template-preview__container"},(0,n.createElement)("div",{className:"sensei-lm-template-preview__img"},(0,n.createElement)("img",{alt:r,src:s.full})),(0,n.createElement)("div",{className:"sensei-lm-template-preview__footer"},(0,n.createElement)(i.Button,{className:"sensei-lm-template-preview__cancel-btn",onClick:t,variant:"tertiary"},__("Cancel","sensei-lms")),(0,n.createElement)(l/* .TemplateActions */.M,e))))};
/* harmony import */}
/***/,
/***/76153:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */k:()=>/* binding */c
/* harmony export */});
/* harmony import */var n=r(25773),i=r(66886),a=r(69307),l=r(76061),s=r(31491),o=r(36522),c=function(){var e=(0,a.useState)(null),t=(0,i/* ["default"] */.Z)(e,2),r=t[0],c=t[1],u=l/* .templates */.zd[r]||{},m=(0,a.useCallback)((function(e){return c(e)}),[]),p=(0,a.useCallback)((function(){return c(null)}),[]);return(0,a.createElement)(a.Fragment,null,Object.keys(l/* .templates */.zd).map((function(e){var t=l/* .templates */.zd[e];return(0,a.createElement)(s/* .TemplateOption */.P,(0,n/* ["default"] */.Z)({},t,{key:t.name,isActive:l/* .activeTemplateName */.c3===t.name,onPreview:m}))})),r&&(0,a.createElement)(o/* .TemplatePreview */.w,(0,n/* ["default"] */.Z)({},u,{onClose:p,isActive:l/* .activeTemplateName */.c3===u.name})))};
/* harmony import */}
/***/,
/***/55609:
/***/e=>{"use strict";e.exports=window.wp.components}
/***/,
/***/69307:
/***/e=>{"use strict";e.exports=window.wp.element}
/***/,
/***/65736:
/***/e=>{"use strict";e.exports=window.wp.i18n}
/***/,
/***/90005:
/***/(e,t)=>{var r;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=l(e,a(r)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=l(t,r));return t}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()}
/***/,
/***/1793:
/***/(e,t,r)=>{"use strict";
/* harmony export */function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}
/***/r.d(t,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/66470:
/***/(e,t,r)=>{"use strict";
/* harmony export */function n(e){if(Array.isArray(e))return e}
/***/r.d(t,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/25773:
/***/(e,t,r)=>{"use strict";
/* harmony export */function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}
/***/r.d(t,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/22446:
/***/(e,t,r)=>{"use strict";
/* harmony export */function n(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,a=[],_n=!0,l=!1;try{for(r=r.call(e);!(_n=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);_n=!0);}catch(e){l=!0,i=e}finally{try{_n||null==r.return||r.return()}finally{if(l)throw i}}return a}}
/***/r.d(t,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/53764:
/***/(e,t,r)=>{"use strict";
/* harmony export */function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
/***/r.d(t,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/66886:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>/* binding */s
/* harmony export */});
/* harmony import */var n=r(66470),i=r(22446),a=r(64013),l=r(53764);
/* harmony import */function s(e,t){return(0,n/* ["default"] */.Z)(e)||(0,i/* ["default"] */.Z)(e,t)||(0,a/* ["default"] */.Z)(e,t)||(0,l/* ["default"] */.Z)()}
/***/},
/***/64013:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>/* binding */i
/* harmony export */});
/* harmony import */var n=r(1793);function i(e,t){if(e){if("string"==typeof e)return(0,n/* ["default"] */.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n/* ["default"] */.Z)(e,t):void 0}}
/***/
/******/}},t={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function r(n){
/******/ // Check if module is in cache
/******/var i=t[n];
/******/if(void 0!==i)
/******/return i.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var a=t[n]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[n](a,a.exports,r),a.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/r.n=e=>{
/******/var t=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return r.d(t,{a:t}),t;
/******/},
/******/ // define getter functions for harmony exports
/******/r.d=(e,t)=>{
/******/for(var n in t)
/******/r.o(t,n)&&!r.o(e,n)&&
/******/Object.defineProperty(e,n,{enumerable:!0,get:t[n]})
/******/;
/******/},
/******/r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)
/******/,
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(()=>{"use strict";
/* harmony import */var e=r(69307),t=r(76153),n=document.getElementById("sensei-lm-block-template__options");
/* harmony import */(0,e.render)((0,e.createElement)(t/* .TemplateSelector */.k,null),n)})()})
/******/();