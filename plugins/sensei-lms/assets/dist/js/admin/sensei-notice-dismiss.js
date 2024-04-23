/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e,t,n={
/***/47701:
/***/e=>{e.exports=window.wp.domReady;
/***/},
/***/1793:
/***/(e,t,n)=>{function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}
/***/
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/60726:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */a
/* harmony export */});
/* harmony import */var r=n(64013);function a(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=(0,r/* ["default"] */.Z)(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw i}}}}
/***/},
/***/64013:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */a
/* harmony export */});
/* harmony import */var r=n(1793);function a(e,t){if(e){if("string"==typeof e)return(0,r/* ["default"] */.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r/* ["default"] */.Z)(e,t):void 0}}
/***/
/******/}},r={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function a(e){
/******/ // Check if module is in cache
/******/var t=r[e];
/******/if(void 0!==t)
/******/return t.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var o=r[e]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return n[e](o,o.exports,a),o.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/a.n=e=>{
/******/var t=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return a.d(t,{a:t}),t;
/******/},
/******/ // define getter functions for harmony exports
/******/a.d=(e,t)=>{
/******/for(var n in t)
/******/a.o(t,n)&&!a.o(e,n)&&
/******/Object.defineProperty(e,n,{enumerable:!0,get:t[n]})
/******/;
/******/},
/******/a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)
/******/,
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
e=a(60726),t=a(47701),
/**
 * WordPress dependencies
 */
a.n(t)()((function(){var t="sensei-notice--is-hidden",n=function(e){var t=new FormData;e.dataset.dismissNotice&&t.append("notice",e.dataset.dismissNotice),t.append("action",e.dataset.dismissAction),t.append("nonce",e.dataset.dismissNonce),fetch(ajaxurl,{method:"POST",body:t})};
/**
   * Handle tasks present on the element if the element has the attribute "data-sensei-notice-tasks".
   *
   * @param  event The event to handle.
   */document.body.addEventListener("click",(function(r){var a=r.target.closest(".sensei-notice");a&&(a.dataset.dismissNonce&&a.dataset.dismissAction&&r.target.classList.contains("notice-dismiss")?n(a):function(r){var a=r.target;if(a.dataset.senseiNoticeTasks){var o=JSON.parse(a.dataset.senseiNoticeTasks);if(o){var i,s=(0,e/* ["default"] */.Z)(o);try{for(s.s();!(i=s.n()).done;){var c=i.value,d=c.notice_id&&document.querySelector('.sensei-notice[data-sensei-notice-id="'.concat(c.notice_id,'"]'));switch(c.type){case"preventDefault":r.preventDefault();break;case"show":null==d||d.classList.remove(t);break;case"dismiss":d&&n(d);
//  We need to also hide the notice being dismissed:
// eslint-disable-next-line no-fallthrough
case"hide":null==d||d.classList.add(t)}}}catch(e){s.e(e)}finally{s.f()}}}}(r))}))}))})
/******/();