/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e,t,n,s,a={
/***/27253:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */o:()=>/* binding */a
/* harmony export */});
/* harmony import */var s=n(69307);
/* harmony import */
/**
 * Exit survey reason item with details text field.
 *
 * @param {Object} props
 * @param {string} props.id           Option key.
 * @param {string} props.label        Option text label.
 * @param {string} props.detailsLabel Label for details field.
 */
const a=e=>{let{id:t,label:n,detailsLabel:a}=e;const i=`sensei-exit-reason__${t}`,r=`${i}-details`;return(0,s.createElement)("div",{className:"sensei-exit-survey__item"},(0,s.createElement)("input",{id:i,type:"radio",name:"reason",value:t,className:"sensei-exit-survey__radio"}),(0,s.createElement)("label",{htmlFor:i}," ",n),a&&(0,s.createElement)("div",{className:"sensei-exit-survey__details"},(0,s.createElement)("input",{id:r,name:`details-${t}`,defaultValue:"",type:"text",placeholder:a})))};
/***/},
/***/39246:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */C:()=>/* binding */l
/* harmony export */});
/* harmony import */var s=n(25773),a=n(69307),i=n(65736),r=n(27253),o=n(3306);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/**
 * Exit survey form.
 *
 * @param {Object}   props
 * @param {Function} props.submit Callback to submit feedback.
 * @param {Function} props.skip   Callback to skip feedback.
 */
const l=e=>{let{submit:t,skip:n}=e;const l=(0,a.useRef)(null),[,c]=(0,a.useState)(null),d=(0,a.useCallback)((e=>{e.preventDefault();const n=new window.FormData(l.current),s=n.get("reason");t({reason:s,details:s&&n.get(`details-${s}`)})}),[t]);let u=!1;if(l.current){var m;const e=new window.FormData(l.current),t=`details-${e.get("reason")}`,n=(null===(m=l.current)||void 0===m?void 0:m.elements[t])||!1;u=!(!e.get("reason")||n&&""===e.get(t).trim())}return(0,a.createElement)("form",{onChange:()=>{const e=new window.FormData(l.current);c(e.values())},className:"sensei-modal sensei-exit-survey",ref:l,onSubmit:d},(0,a.createElement)("div",{className:"sensei-exit-survey__content"},(0,a.createElement)("h2",null,(0,i.__)("Quick Feedback","sensei-lms")),(0,a.createElement)("p",null,(0,i.__)("If you have a moment, please let us know why you are deactivating so that we can work to improve our product.","sensei-lms")),o/* .reasons.map */.l.map((e=>(0,a.createElement)(r/* .ExitSurveyFormItem */.o,(0,s/* ["default"] */.Z)({key:e.id},e))))),(0,a.createElement)("div",{className:"sensei-exit-survey__buttons"},(0,a.createElement)("button",{className:"button button-primary",type:"submit",disabled:!u},(0,i.__)("Submit Feedback","sensei-lms")),(0,a.createElement)("button",{className:"button button-secondary",onClick:n,type:"button"},(0,i.__)("Skip Feedback","sensei-lms"))))};
/***/},
/***/3306:
/***/(e,t,n)=>{
/* harmony export */n.d(t,{
/* harmony export */l:()=>/* binding */a
/* harmony export */});
/* harmony import */var s=n(65736);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Exit survey reasons
 */
const a=[{id:"no-longer-need",label:(0,s.__)("I no longer need the plugin","sensei-lms")},{id:"not-working",label:(0,s.__)("The plugin isn't working","sensei-lms"),detailsLabel:(0,s.__)("What isn't working properly?","sensei-lms")},{id:"different-functionality",label:(0,s.__)("I'm looking for different functionality","sensei-lms"),detailsLabel:(0,s.__)("What functionality is missing?","sensei-lms")},{id:"found-better-plugin",label:(0,s.__)("I found a better plugin","sensei-lms"),detailsLabel:(0,s.__)("What's the name of the plugin?","sensei-lms")},{id:"temporary",label:(0,s.__)("It's a temporary deactivation","sensei-lms")},{id:"other",label:"Other",detailsLabel:(0,s.__)("Why are you deactivating?","sensei-lms")}];
/***/},
/***/86989:
/***/e=>{e.exports=window.wp.apiFetch;
/***/},
/***/69307:
/***/e=>{e.exports=window.wp.element;
/***/},
/***/65736:
/***/e=>{e.exports=window.wp.i18n;
/***/},
/***/25773:
/***/(e,t,n)=>{function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},s.apply(this,arguments)}
/***/
/******/
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */s
/* harmony export */})}},i={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function r(e){
/******/ // Check if module is in cache
/******/var t=i[e];
/******/if(void 0!==t)
/******/return t.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var n=i[e]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return a[e](n,n.exports,r),n.exports;
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
e=r(69307),t=r(86989),n=r.n(t),s=r(39246),
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
function(){
/**
   * Exit survey modal.
   */
class t{href;container;
/**
     * Exit survey constructor.
     *
     * @param {string} href Link to deactivate plugin.
     */
constructor(e){let{href:t}=e;this.href=t}
/**
     * Create and open a modal with an exit survey form.
     *
     */open=()=>{let t=document.querySelector("#sensei-exit-survey");t||(t=document.createElement("div"),t.setAttribute("id","sensei-exit-survey-modal"),document.body.appendChild(t)),this.container=t,(0,e.render)((0,e.createElement)(s/* .ExitSurveyForm */.C,{submit:this.submitExitSurvey,skip:this.closeAndDeactivate}),t)};
/**
     * Submit exit survey to AJAX endpoint.
     *
     * @param {Object} data
     */
submitExitSurvey=async e=>{var t;const s=new window.FormData;s.append("action","exit_survey"),s.append("_wpnonce",null===(t=window.sensei_exit_survey)||void 0===t?void 0:t.nonce),s.append("reason",e.reason),s.append("details",e.details);
// Get the name of the active theme.
try{const e=await n()({path:"/wp/v2/themes?status=active"});var a;e.length>0&&s.append("theme",(null===(a=e[0].name)||void 0===a?void 0:a.raw)||"")}catch(e){}await window.fetch(window.ajaxurl,{method:"POST",body:s}),this.closeAndDeactivate()};
/**
     * Close survey modal and continue plugin deactivation.
     */
closeAndDeactivate=()=>{this.container.remove(),window.location=this.href}}(()=>{const e=e=>document.querySelector(`#the-list [data-slug="${e}"] span.deactivate a`);[e("sensei-lms"),e("sensei-pro-wc-paid-courses"),e("sensei-with-woocommerce-paid-courses"),e("woocommerce-com-woocommerce-paid-courses")].filter((e=>!!e)).forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),new t({href:e.target.href}).open()}))}))})()}()})
/******/();