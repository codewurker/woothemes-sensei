/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e,t,n,r,a,i,o,s,l,u,c={
/***/27253:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */o:()=>/* binding */a
/* harmony export */});
/* harmony import */var r=n(69307),a=function(e){var t=e.id,n=e.label,a=e.detailsLabel,i="sensei-exit-reason__".concat(t),o="".concat(i,"-details");return(0,r.createElement)("div",{className:"sensei-exit-survey__item"},(0,r.createElement)("input",{id:i,type:"radio",name:"reason",value:t,className:"sensei-exit-survey__radio"}),(0,r.createElement)("label",{htmlFor:i}," ",n),a&&(0,r.createElement)("div",{className:"sensei-exit-survey__details"},(0,r.createElement)("input",{id:o,name:"details-".concat(t),defaultValue:"",type:"text",placeholder:a})))};
/* harmony import */}
/***/,
/***/39246:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */C:()=>/* binding */u
/* harmony export */});
/* harmony import */var r=n(25773),a=n(66886),i=n(69307),o=n(65736),s=n(27253),l=n(3306),__=o.__,u=function(e){var t=e.submit,n=e.skip,o=(0,i.useRef)(null),u=(0,i.useState)(null),c=(0,a/* ["default"] */.Z)(u,2)[1],d=(0,i.useCallback)((function(e){e.preventDefault();var n=new window.FormData(o.current),r=n.get("reason");t({reason:r,details:r&&n.get("details-".concat(r))})}),[t]),m=!1;if(o.current){var p,f=new window.FormData(o.current),v="details-".concat(f.get("reason")),y=(null===(p=o.current)||void 0===p?void 0:p.elements[v])||!1;m=!(!f.get("reason")||y&&""===f.get(v).trim())}return(0,i.createElement)("form",{onChange:function(){var e=new window.FormData(o.current);c(e.values())},className:"sensei-modal sensei-exit-survey",ref:o,onSubmit:d},(0,i.createElement)("div",{className:"sensei-exit-survey__content"},(0,i.createElement)("h2",null,__("Quick Feedback","sensei-lms")),(0,i.createElement)("p",null,__("If you have a moment, please let us know why you are deactivating so that we can work to improve our product.","sensei-lms")),l/* .reasons.map */.l.map((function(e){return(0,i.createElement)(s/* .ExitSurveyFormItem */.o,(0,r/* ["default"] */.Z)({key:e.id},e))}))),(0,i.createElement)("div",{className:"sensei-exit-survey__buttons"},(0,i.createElement)("button",{className:"button button-primary",type:"submit",disabled:!m},__("Submit Feedback","sensei-lms")),(0,i.createElement)("button",{className:"button button-secondary",onClick:n,type:"button"},__("Skip Feedback","sensei-lms"))))};
/* harmony import */}
/***/,
/***/3306:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */l:()=>/* binding */a
/* harmony export */});
/* harmony import */var r=n(65736),__=r.__,a=[{id:"no-longer-need",label:__("I no longer need the plugin","sensei-lms")},{id:"not-working",label:__("The plugin isn't working","sensei-lms"),detailsLabel:__("What isn't working properly?","sensei-lms")},{id:"different-functionality",label:__("I'm looking for different functionality","sensei-lms"),detailsLabel:__("What functionality is missing?","sensei-lms")},{id:"found-better-plugin",label:__("I found a better plugin","sensei-lms"),detailsLabel:__("What's the name of the plugin?","sensei-lms")},{id:"temporary",label:__("It's a temporary deactivation","sensei-lms")},{id:"other",label:"Other",detailsLabel:__("Why are you deactivating?","sensei-lms")}];
/* harmony import */}
/***/,
/***/86989:
/***/e=>{e.exports=window.wp.apiFetch;
/***/},
/***/69307:
/***/e=>{e.exports=window.wp.element;
/***/},
/***/65736:
/***/e=>{e.exports=window.wp.i18n;
/***/},
/***/1793:
/***/(e,t,n)=>{function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}
/***/
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/66470:
/***/(e,t,n)=>{function r(e){if(Array.isArray(e))return e}
/***/
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/27791:
/***/(e,t,n)=>{function r(e,t,n,r,a,i,o){try{var s=e[i](o),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var o=e.apply(t,n);function s(e){r(o,a,i,s,l,"next",e)}function l(e){r(o,a,i,s,l,"throw",e)}s(void 0)}))}}
/***/
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */a
/* harmony export */})},
/***/22951:
/***/(e,t,n)=>{function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
/***/
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/91976:
/***/(e,t,n)=>{function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}
/***/
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */a
/* harmony export */})},
/***/64649:
/***/(e,t,n)=>{function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}
/***/
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/25773:
/***/(e,t,n)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}
/***/
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/22446:
/***/(e,t,n)=>{function r(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],_n=!0,o=!1;try{for(n=n.call(e);!(_n=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);_n=!0);}catch(e){o=!0,a=e}finally{try{_n||null==n.return||n.return()}finally{if(o)throw a}}return i}}
/***/
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/53764:
/***/(e,t,n)=>{function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
/***/
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/66886:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */s
/* harmony export */});
/* harmony import */var r=n(66470),a=n(22446),i=n(64013),o=n(53764);
/* harmony import */function s(e,t){return(0,r/* ["default"] */.Z)(e)||(0,a/* ["default"] */.Z)(e,t)||(0,i/* ["default"] */.Z)(e,t)||(0,o/* ["default"] */.Z)()}
/***/},
/***/64013:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */a
/* harmony export */});
/* harmony import */var r=n(1793);function a(e,t){if(e){if("string"==typeof e)return(0,r/* ["default"] */.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r/* ["default"] */.Z)(e,t):void 0}}
/***/
/******/}},d={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function m(e){
/******/ // Check if module is in cache
/******/var t=d[e];
/******/if(void 0!==t)
/******/return t.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var n=d[e]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return c[e](n,n.exports,m),n.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/m.n=e=>{
/******/var t=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return m.d(t,{a:t}),t;
/******/},
/******/ // define getter functions for harmony exports
/******/m.d=(e,t)=>{
/******/for(var n in t)
/******/m.o(t,n)&&!m.o(e,n)&&
/******/Object.defineProperty(e,n,{enumerable:!0,get:t[n]})
/******/;
/******/},
/******/m.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)
/******/,
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
n=m(27791),r=m(91976),a=m(22951),i=m(64649),o=m(69307),s=m(86989),l=m.n(s),u=m(39246),
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
t=(0,r/* ["default"] */.Z)((
/**
   * Exit survey constructor.
   *
   * @param {string} href Link to deactivate plugin.
   */
function e(t){var r=this,s=t.href;(0,a/* ["default"] */.Z)(this,e),(0,i/* ["default"] */.Z)(this,"href",void 0),(0,i/* ["default"] */.Z)(this,"container",void 0),(0,i/* ["default"] */.Z)(this,"open",(function(){var e=document.querySelector("#sensei-exit-survey");e||((e=document.createElement("div")).setAttribute("id","sensei-exit-survey-modal"),document.body.appendChild(e)),r.container=e,(0,o.render)((0,o.createElement)(u/* .ExitSurveyForm */.C,{submit:r.submitExitSurvey,skip:r.closeAndDeactivate}),e)})),(0,i/* ["default"] */.Z)(this,"submitExitSurvey",function(){var e=(0,n/* ["default"] */.Z)(regeneratorRuntime.mark((function e(t){var n,a,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new window.FormData).append("action","exit_survey"),a.append("_wpnonce",null===(n=window.sensei_exit_survey)||void 0===n?void 0:n.nonce),a.append("reason",t.reason),a.append("details",t.details),// Get the name of the active theme.
e.prev=5,e.next=8,l()({path:"/wp/v2/themes?status=active"});case 8:(i=e.sent).length>0&&a.append("theme",(null===(o=i[0].name)||void 0===o?void 0:o.raw)||""),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(5);case 14:return e.next=16,window.fetch(window.ajaxurl,{method:"POST",body:a});case 16:r.closeAndDeactivate();case 17:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(_x){return e.apply(this,arguments)}}()),(0,i/* ["default"] */.Z)(this,"closeAndDeactivate",(function(){r.container.remove(),window.location=r.href})),this.href=s}
/**
   * Create and open a modal with an exit survey form.
   *
   */)),[(e=function(e){return document.querySelector('#the-list [data-slug="'.concat(e,'"] span.deactivate a'))})("sensei-lms"),e("sensei-pro-wc-paid-courses"),e("sensei-with-woocommerce-paid-courses"),e("woocommerce-com-woocommerce-paid-courses")].filter((function(e){return!!e})).forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),new t({href:e.target.href}).open()}))}))})
/******/();