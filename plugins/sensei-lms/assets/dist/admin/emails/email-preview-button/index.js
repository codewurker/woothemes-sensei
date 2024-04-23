/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e,t,r={
/***/58054:
/***/(e,t,r)=>{
/* harmony export */r.d(t,{
/* harmony export */Z:()=>c
/* harmony export */});
/* unused harmony export EmailPreviewButton */
/* harmony import */var n=r(27791),o=r(66886),i=r(69307),a=r(9818),s=r(55609),u=r(12238),l=r(65736),__=l.__;
/* harmony import */
/* harmony default export */const c=function(){var e=(0,a.useSelect)((function(e){return{postId:e(u.store).getCurrentPostId(),isSaveable:e(u.store).isEditedPostSaveable(),isAutosaveable:e(u.store).isEditedPostAutosaveable(),isLocked:e(u.store).isPostLocked(),isDraft:-1!==["draft","auto-draft"].indexOf(e(u.store).getEditedPostAttribute("status")),previewLink:window.sensei_email_preview.link}})),t=e.postId,r=e.isSaveable,l=e.isAutosaveable,c=e.isLocked,d=e.isDraft,p=e.previewLink,f=(0,a.useDispatch)(u.store),v=f.savePost,w=f.autosave,m=(0,i.useState)(!1),y=(0,o/* ["default"] */.Z)(m,2),b=y[0],h=y[1],x=(0,i.useState)(null),Z=(0,o/* ["default"] */.Z)(x,2),g=Z[0],P=Z[1];if((0,i.useEffect)((function(){P(document.querySelector(".block-editor-post-preview__dropdown"))}),[]),!g)return null;
/**
   * Open the preview in a new window. Triggers an autosave when needed.
   *
   * @param {MouseEvent} event
   * @return {Promise<void>}
   */var k=function(){var e=(0,n/* ["default"] */.Z)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),!l||c){e.next=11;break}if(h(!0),!d){e.next=8;break}return e.next=6,v({isPreview:!0});case 6:e.next=10;break;case 8:return e.next=10,w({isPreview:!0});case 10:h(!1);case 11:window.open(r.target.href,"sensei-email-preview-"+t);case 12:case"end":return e.stop()}}),e)})));return function(_x){return e.apply(this,arguments)}}();return(0,i.createPortal)((0,i.createElement)(s.Button,{href:p,onClick:k,isBusy:b,disabled:!r||b,className:"sensei-email-preview-button",variant:"tertiary",role:"menuitem"},__("Preview","sensei-lms")),g)};
/***/},
/***/55609:
/***/e=>{e.exports=window.wp.components;
/***/},
/***/9818:
/***/e=>{e.exports=window.wp.data;
/***/},
/***/12238:
/***/e=>{e.exports=window.wp.editor;
/***/},
/***/69307:
/***/e=>{e.exports=window.wp.element;
/***/},
/***/65736:
/***/e=>{e.exports=window.wp.i18n;
/***/},
/***/98817:
/***/e=>{e.exports=window.wp.plugins;
/***/},
/***/1793:
/***/(e,t,r)=>{function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}
/***/
/* harmony export */r.d(t,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/66470:
/***/(e,t,r)=>{function n(e){if(Array.isArray(e))return e}
/***/
/* harmony export */r.d(t,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/27791:
/***/(e,t,r)=>{function n(e,t,r,n,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function s(e){n(a,o,i,s,u,"next",e)}function u(e){n(a,o,i,s,u,"throw",e)}s(void 0)}))}}
/***/
/* harmony export */r.d(t,{
/* harmony export */Z:()=>/* binding */o
/* harmony export */})},
/***/22446:
/***/(e,t,r)=>{function n(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],_n=!0,a=!1;try{for(r=r.call(e);!(_n=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);_n=!0);}catch(e){a=!0,o=e}finally{try{_n||null==r.return||r.return()}finally{if(a)throw o}}return i}}
/***/
/* harmony export */r.d(t,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/53764:
/***/(e,t,r)=>{function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
/***/
/* harmony export */r.d(t,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/66886:
/***/(e,t,r)=>{
/* harmony export */r.d(t,{
/* harmony export */Z:()=>/* binding */s
/* harmony export */});
/* harmony import */var n=r(66470),o=r(22446),i=r(64013),a=r(53764);
/* harmony import */function s(e,t){return(0,n/* ["default"] */.Z)(e)||(0,o/* ["default"] */.Z)(e,t)||(0,i/* ["default"] */.Z)(e,t)||(0,a/* ["default"] */.Z)()}
/***/},
/***/64013:
/***/(e,t,r)=>{
/* harmony export */r.d(t,{
/* harmony export */Z:()=>/* binding */o
/* harmony export */});
/* harmony import */var n=r(1793);function o(e,t){if(e){if("string"==typeof e)return(0,n/* ["default"] */.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n/* ["default"] */.Z)(e,t):void 0}}
/***/
/******/}},n={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function o(e){
/******/ // Check if module is in cache
/******/var t=n[e];
/******/if(void 0!==t)
/******/return t.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var i=n[e]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return r[e](i,i.exports,o),i.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/o.n=e=>{
/******/var t=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return o.d(t,{a:t}),t;
/******/},
/******/ // define getter functions for harmony exports
/******/o.d=(e,t)=>{
/******/for(var r in t)
/******/o.o(t,r)&&!o.o(e,r)&&
/******/Object.defineProperty(e,r,{enumerable:!0,get:t[r]})
/******/;
/******/},
/******/o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)
/******/,
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
e=o(98817),t=o(58054),
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
(0,e.registerPlugin)("sensei-email-preview-plugin",{render:t/* ["default"] */.Z})})
/******/();