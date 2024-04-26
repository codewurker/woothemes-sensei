/******/(()=>{// webpackBootstrap
/******/var e={
/***/76061:
/***/(e,t,n)=>{"use strict";
/* harmony export */var r;n.d(t,{
/* harmony export */c3:()=>/* binding */l
/* harmony export */,po:()=>/* binding */i
/* harmony export */,zd:()=>/* binding */a
/* harmony export */,vX:()=>/* binding */o
/* harmony export */,cQ:()=>/* binding */c
/* harmony export */,fW:()=>/* binding */m
/* harmony export */});const s=(null===(r=window.sensei)||void 0===r?void 0:r.learningModeTemplateSetting)||{},l=s.value,i=s.name,a=s.options,o=s.customizeUrl,c=s.formId,m=s.section}
/***/,
/***/42616:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */M:()=>/* binding */a
/* harmony export */});
/* harmony import */var r=n(69307),s=n(65736),l=n(55609),i=n(76061);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/**
 * Renders the template action buttons.
 *
 * @param {Object}  props
 * @param {string}  props.name         The name of the template.
 * @param {Object}  props.upsell       The template upsell data.
 * @param {string}  props.upsell.title The upsell cta title.
 * @param {string}  props.upsell.url   The upsell url.
 * @param {boolean} props.isActive     Tells if this template is activated.
 */
const a=e=>{const{upsell:t,name:n,isActive:a}=e,o=(0,r.useCallback)((()=>{const e=document.querySelector(`#${i/* .formId */.cQ} input[name="_wp_http_referer"]`),t=e.getAttribute("value");e.setAttribute("value",`${t}#${i/* .tabId */.fW}`)}),[]);
// Update the _wp_http_referer so it opens the current settings
// tab after page refresh.
return(0,r.createElement)(r.Fragment,null,t&&(0,r.createElement)(l.Button,{isPrimary:!0,href:t.url,target:"_blank"},t.title),!a&&!t&&(0,r.createElement)(l.Button,{isPrimary:!0,type:"submit",value:n,name:i/* .inputName */.po,form:i/* .formId */.cQ,onClick:o},(0,s.__)("Activate","sensei-lms")),a&&(0,r.createElement)(l.Button,{isPrimary:!0,href:i/* .customizeUrl */.vX},(0,s.__)("Customize","sensei-lms")))};
/***/},
/***/34412:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */k:()=>/* binding */c
/* harmony export */});
/* harmony import */var r=n(69307),s=n(90005),l=n.n(s),i=n(65736),a=n(73552),o=n(42616);
/* harmony import */
/**
 * External dependencies
 */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/**
 * Renders the Learning Mode template option's footer.
 *
 * @param {Object} props
 * @param {string} props.name       The name of the template.
 * @param {string} props.title      The title of the template.
 * @param {string} props.isActive   Tells if the current template is activated.
 * @param {Object} props.upsell     The upsell data.
 * @param {string} props.upsell.tag The upsell tag.
 */
const c=e=>{const{title:t,isActive:n,upsell:s}=e;return(0,r.createElement)("div",{className:l()({"sensei-lm-template-option__footer":!0,"sensei-lm-template-option__footer--active":n})},(0,r.createElement)(a/* .TemplateOptionTitle */.w,{isActive:n,tag:n?t:null==s?void 0:s.tag},n?(0,i.__)("Active","sensei-lms"):t),(0,r.createElement)("div",{className:"sensei-lm-template-option__actions"},(0,r.createElement)(o/* .TemplateActions */.M,e)))};
/***/},
/***/46067:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */q:()=>/* binding */l
/* harmony export */});
/* harmony import */var r=n(69307),s=n(65736);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Renders the Learning Mode template thumbnail.
 *
 * @param {Object}   props
 * @param {string}   props.title     The title of the template.
 * @param {string}   props.url       The url of the image.
 * @param {Function} props.onPreview The callback to show preview.
 */
const l=e=>{let{title:t,url:n,onPreview:l}=e;return(0,r.createElement)("div",{className:"sensei-lm-template-option__thumbnail",onKeyPress:l,onClick:l,tabIndex:"0",role:"option",title:t},(0,r.createElement)("img",{alt:t,src:n}),(0,r.createElement)("div",{className:"sensei-lm-template-option__preview"},(0,r.createElement)("h4",{className:"sensei-lm-template-option__preview-title"},(0,s.__)("Preview","sensei-lms"))))};
/***/},
/***/73552:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */w:()=>/* binding */i
/* harmony export */});
/* harmony import */var r=n(69307),s=n(90005),l=n.n(s);
/* harmony import */
/**
 * External dependencies
 */
/**
 * Renders a template option title.
 *
 * @param {Object}  props
 * @param {string}  props.children The title.
 * @param {string}  props.tag      A tag for template to indicate it belongs to some group of templates. E.g.: "PREMIUM"
 * @param {boolean} props.isActive If the template is activated.
 */
const i=e=>{let{children:t,isActive:n,tag:s=""}=e;return(0,r.createElement)("h4",{className:l()({"sensei-lm-template-option__title":!0,"sensei-lm-template-option__title--active":n})},t,s&&(0,r.createElement)(r.Fragment,null,": ",(0,r.createElement)("span",{className:"sensei-lm-template-option__title-tag"},s)))};
/***/},
/***/31491:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */P:()=>/* binding */i
/* harmony export */});
/* harmony import */var r=n(69307),s=n(34412),l=n(46067);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/**
 * Renders the individual template.
 *
 * @param {Object}   props
 * @param {string}   props.name                  The name of the template.
 * @param {string}   props.title                 The title of the template.
 * @param {Object}   props.screenshots           The urls to screenshot images of the template.
 * @param {string}   props.screenshots.thumbnail The url to the thumbnail screenshot of the template.
 * @param {Function} props.onPreview             The callback that handles the preview.
 */
const i=e=>{const{name:t,title:n,screenshots:i,onPreview:a}=e,o=(0,r.useCallback)((()=>a(t)),[a,t]);return(0,r.createElement)("li",{className:"sensei-lm-template-option__container"},(0,r.createElement)(l/* .TemplateOptionThumbnail */.q,{title:n,url:i.thumbnail,onPreview:o}),(0,r.createElement)(s/* .TemplateOptionFooter */.k,e))};
/***/},
/***/36522:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */w:()=>/* binding */a
/* harmony export */});
/* harmony import */var r=n(69307),s=n(55609),l=n(65736),i=n(42616);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/**
 * Renders the template preview.
 *
 * @param {Object}   props
 * @param {Function} props.onClose          Handles the modal closing.
 * @param {string}   props.title            The title of the template.
 * @param {Object}   props.screenshots      The url of the screenshots.
 * @param {string}   props.screenshots.full The url of the full size screenshot.
 */
const a=e=>{const{onClose:t,title:n,screenshots:a}=e;return(0,r.createElement)(s.Modal,{onRequestClose:t,title:(0,l.sprintf)((0,l.__)("Preview %1$s","sensei-lms"),n),className:"sensei-lm-template-preview__modal"},(0,r.createElement)("div",{className:"sensei-lm-template-preview__container"},(0,r.createElement)("div",{className:"sensei-lm-template-preview__img"},(0,r.createElement)("img",{alt:n,src:a.full})),(0,r.createElement)("div",{className:"sensei-lm-template-preview__footer"},(0,r.createElement)(s.Button,{className:"sensei-lm-template-preview__cancel-btn",onClick:t,variant:"tertiary"},(0,l.__)("Cancel","sensei-lms")),(0,r.createElement)(i/* .TemplateActions */.M,e))))};
/***/},
/***/76153:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */k:()=>/* binding */o
/* harmony export */});
/* harmony import */var r=n(25773),s=n(69307),l=n(76061),i=n(31491),a=n(36522);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
const o=()=>{const[e,t]=(0,s.useState)(null),n=l/* .templates */.zd[e]||{},o=(0,s.useCallback)((e=>t(e)),[]),c=(0,s.useCallback)((()=>t(null)),[]);return(0,s.createElement)(s.Fragment,null,Object.keys(l/* .templates */.zd).map((e=>{const t=l/* .templates */.zd[e];return(0,s.createElement)(i/* .TemplateOption */.P,(0,r/* ["default"] */.Z)({},t,{key:t.name,isActive:l/* .activeTemplateName */.c3===t.name,onPreview:o}))})),e&&(0,s.createElement)(a/* .TemplatePreview */.w,(0,r/* ["default"] */.Z)({},n,{onClose:c,isActive:l/* .activeTemplateName */.c3===n.name})))};
/***/},
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
/***/(e,t)=>{var n;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */!function(){"use strict";var r={}.hasOwnProperty;function s(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,l(n)))}return e}function l(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=i(t,n));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()}
/***/,
/***/25773:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}
/***/
/******/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})}},t={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function n(r){
/******/ // Check if module is in cache
/******/var s=t[r];
/******/if(void 0!==s)
/******/return s.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var l=t[r]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[r](l,l.exports,n),l.exports;
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(()=>{"use strict";
/* harmony import */var e=n(69307),t=n(76153);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
const r=document.getElementById("sensei-lm-block-template__options");(0,e.render)((0,e.createElement)(t/* .TemplateSelector */.k,null),r)})()})
/******/();