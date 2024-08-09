/******/(()=>{// webpackBootstrap
/******/var e={
/***/65194:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */C:()=>/* binding */c
/* harmony export */});
/* harmony import */var r=s(69307),n=s(65736),o=s(49373),i=s(55609),l=s(73487),a=s(6180);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/**
 * Export page.
 *
 * @param {Object}   props
 * @param {Object}   props.job
 * @param {Object}   props.error
 * @param {Function} props.start
 * @param {Function} props.reset
 * @param {Function} props.cancel
 */
const c=e=>{let{job:t,error:s,start:c,reset:d,cancel:u}=e;return(0,o/* .useSenseiColorTheme */.I)(),(0,r.createElement)("div",{className:"sensei-page-export"},(0,r.createElement)("section",{className:"sensei-data-port-step"},(0,r.createElement)("header",{className:"sensei-data-port-step__header"},(0,r.createElement)("h2",null,(0,n.__)("Export content to a CSV file","sensei-lms")),(0,r.createElement)("p",null,(0,n.__)("This tool enables you to export courses, lessons, and questions to CSV files. These files are bundled together and downloaded to your computer in .zip format.","sensei-lms"))),s&&(0,r.createElement)(i.Notice,{status:"error",isDismissible:!1},s),t&&"creating"!==t.status?(0,r.createElement)(l/* .ExportProgressPage */.y,{job:t,reset:d,cancel:u}):(0,r.createElement)(a/* .ExportSelectContentPage */.B,{onSubmit:c,job:t})))};
/***/},
/***/73487:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */y:()=>/* binding */a
/* harmony export */});
/* harmony import */var r=s(69307),n=s(55609),o=s(65736),i=s(69435),l=s(29822);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/**
 * @typedef Job
 * @property {string}       status     Export status.
 * @property {number}       percentage Export progress percentage.
 * @property {ExportFile[]} files      Exported files.
 * @property {string}       error      Error message.
 */
/**
 * @typedef ExportFile
 * @property {string} url  File URL.
 * @property {string} name File name.
 */
/**
 * Exporter progress and result.
 *
 * @param {Object}   props
 * @param {Job}      props.job    Export job state.
 * @param {Function} props.reset  Function to return to initial export screen.
 * @param {Function} props.cancel Function to request job cancellation.
 */
const a=e=>{let{job:t,reset:s,cancel:a}=e;const{status:c,percentage:d,files:u,error:p}=t||{},m="completed"!==c;return(0,r.useEffect)((()=>{!m&&u&&u.forEach(i/* .downloadFile */.S)}),[u,m]),(0,r.createElement)("section",{className:"sensei-data-port-step__body"},m?(0,r.createElement)(r.Fragment,null,(0,r.createElement)("p",null,(0,r.createElement)("progress",{className:"sensei-data-port__progressbar",max:"100",value:d||0})),(0,r.createElement)("div",{className:"sensei-data-port-step__footer"},(0,r.createElement)(n.Button,{isPrimary:!0,onClick:()=>a()},(0,o.__)("Cancel","sensei-lms")))):(0,r.createElement)(r.Fragment,null,(0,r.createElement)("div",{className:"sensei-export__output-result"},u&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)("p",null,(0,o._n)("The following file was exported:","The following files were exported:",u.length,"sensei-lms")),(0,r.createElement)("ul",{className:"sensei-export__output-files"},u.map((e=>{let{name:t,url:s}=e;return(0,r.createElement)("li",{className:"sensei-export__output-file sensei-data-port-step__line",key:t},(0,r.createElement)("a",{href:s,download:t},t))})))),p&&(0,r.createElement)("div",{className:"sensei-data-port-step__line"},(0,r.createElement)(l/* .Notice */.q,{isError:!0,message:p}))),(0,r.createElement)("div",{className:"sensei-data-port-step__footer"},(0,r.createElement)(n.Button,{isPrimary:!0,onClick:()=>s()},(0,o.__)("Export More Content","sensei-lms")))))};
/***/},
/***/6180:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */B:()=>/* binding */c
/* harmony export */});
/* harmony import */var r=s(69307),n=s(55609),o=s(65736),i=s(22446),l=s(2704),a=s(70761);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
const c=e=>{let{onSubmit:t,job:s}=e;const[c,d]=(0,i/* .useMergeReducer */.x)({course:!1,lesson:!1,question:!1}),u=Object.values(c).some((e=>e)),p=s&&"creating"===s.status;return(0,r.createElement)("form",{onSubmit:e=>{e.preventDefault(),t((0,l/* .getSelectedKeys */.V)(c))}},(0,r.createElement)("div",{className:"sensei-data-port-step__body"},(0,r.createElement)("p",{className:"sensei-export__select-content__label"},(0,o.__)("Which type of content would you like to export?","sensei-lms")),(0,r.createElement)("div",{className:"sensei-export__select-content__options"},["course","lesson","question"].map((e=>(0,r.createElement)(n.CheckboxControl,{className:"sensei-export__select-content__option sensei-data-port-step__line",key:e,name:e,checked:c[e],onChange:t=>d({[e]:t}),label:a/* .postTypeLabels */.h[e]})))),(0,r.createElement)("div",{className:"sensei-data-port-step__footer"},(0,r.createElement)(n.Button,{type:"submit",isPrimary:!0,disabled:!u||p,isBusy:p},(0,o.__)("Continue","sensei-lms")))))};
/***/},
/***/97290:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */Z:()=>l
/* harmony export */});
/* harmony import */var r=s(9818),n=s(94333),o=s(65194),i=s(89762);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
(0,i/* ["default"] */.Z)();
/* harmony default export */const l=(0,n.compose)((0,r.withSelect)((e=>({job:e(i/* .EXPORT_STORE */.P).getJob(),error:e(i/* .EXPORT_STORE */.P).getError()}))),(0,r.withDispatch)((e=>{const{start:t,cancel:s,reset:r}=e(i/* .EXPORT_STORE */.P);return{start:t,cancel:s,reset:r}})))(o/* .ExportPage */.C);
/***/},
/***/33974:
/***/(e,t,s)=>{"use strict";s.r(t),
/* harmony export */s.d(t,{
/* harmony export */start:()=>/* binding */p
/* harmony export */,reset:()=>/* binding */m
/* harmony export */,cancel:()=>/* binding */_
/* harmony export */,update:()=>/* binding */y
/* harmony export */,checkForActiveJob:()=>/* binding */E
/* harmony export */});
/* harmony import */var r=s(23418),n=s(89762),o=s(80573);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
const i="/sensei-internal/v1/export",l=e=>({type:"SET_JOB",job:e}),a=e=>({type:"UPDATE_JOB",job:e}),c=()=>(0,r.select)(n/* .EXPORT_STORE */.P,"getJobId")
/**
 * Set error.
 *
 * @param {string} error Error message.
 */,d=e=>({type:"SET_ERROR",error:e})
/**
 * Clear job state.
 */,u=function*(e){e&&!e.error&&"pending"===e.status.status&&(yield(0,o/* .timeout */.Vs)(y,1e3))},p=function*(e){yield l({status:"creating"}),yield g();const t=yield h(e);yield u(t)},m=function*(){yield(0,o/* .cancelTimeout */._1)(),yield{type:"CLEAR_JOB"}},_=function*(e){yield(0,o/* .cancelTimeout */._1)(),e||(e=yield c()),yield{type:"CLEAR_JOB"},yield b({method:"DELETE",jobId:e})},y=function*(){let e=yield c();if(!e)return;const t=yield b({endpoint:"process",method:"POST",jobId:e});e=yield c(),e&&(yield a(t),yield u(t),yield f(t))},f=function*(e){if("completed"===e.status.status){const e=yield b({endpoint:"logs",skipJobCheck:!0});e.items.length>0&&(yield d(e.items.map((e=>e.message)).join(" ")))}},E=function*(){const e=yield b({jobId:"active"});e&&e.id&&("setup"===e.status.status?yield _(e.id):(yield l(e),yield u(e)))},b=function*(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{jobId:t,...s}=e;if(t||(t=yield c(),t))return yield*v({jobId:t,...s});yield d("No job ID")},v=function*(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{skipJobCheck:t,endpoint:s,jobId:n,...o}=e,l=[i,n,s].filter((e=>!!e)).join("/");try{const e=yield(0,r.apiFetch)({path:l,...o});if(t||!e||!n||n===e.id||"active"===n)return e}catch(e){if("active"===n&&"sensei_data_port_job_not_found"===e.code)return yield{type:"CLEAR_JOB"};yield d(e.message)}},g=function*(){const e=yield v({method:"POST"});yield l(e)},h=function*(e){const t=yield b({endpoint:"start",method:"POST",data:{content_types:e}}),s=e.map((e=>e+"s")).join(",");
// Log when users start an export.
return window.sensei_log_event("export_continue_click",{type:s}),yield a(t),t};
/**
 * @typedef LogItem
 *
 * @property {string} message Log message.
 */
/**
 * @typedef LogsResponse
 *
 * @property {LogItem[]} items Log items.
 */
/**
 * @typedef JobResponse
 *
 * @property {Object}   status            Job status.
 * @property {string}   status.status     Job status name.
 * @property {number}   status.percentage Job progress percentage.
 * @property {string}   id                Job ID.
 * @property {boolean}  deleted           Was the job deleted.
 * @property {Object}   result            Job result.
 * @property {Object[]} files             Job files.
 * @property {Object}   error             Error message.
 */
/**
 * Set job state. Clears request error.
 *
 * @param {JobResponse} job Job state.
 */}
/***/,
/***/89762:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */P:()=>/* binding */m
/* harmony export */,Z:()=>_
/* harmony export */});
/* harmony import */var r=s(9818),n=s(23418),o=s(80573),i=s(20832),l=s(33974);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
const a={},c=e=>e&&!e.deleted?{job:{...e,...e.status,files:e.files&&Object.values(e.files)}}:a,d={UPDATE_JOB:(e,t)=>{let{job:s}=e;return t.job?c(s):t},SET_JOB:e=>{let{job:t}=e;return c(t)},SET_ERROR:(e,t)=>{let{error:s}=e;return{...t,error:s}},CLEAR_JOB:()=>a,DEFAULT:(e,t)=>t},u={
/**
   * Check for active job on first access.
   */
getJob:()=>l.checkForActiveJob()},p={getJobId:e=>{let{job:t}=e;return t&&t.id||null},getJob:e=>{let{job:t}=e;return t},getError:e=>{let{error:t}=e;return t}},m="sensei/export",_=()=>(0,r.registerStore)(m,{reducer:(0,i/* .createReducerFromActionMap */.lA)(d,a),actions:l,selectors:p,resolvers:u,controls:{...n.controls,...o/* ["default"] */.ZP}})
/* harmony default export */}
/***/,
/***/29822:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */q:()=>/* binding */l
/* harmony export */});
/* harmony import */var r=s(69307),n=s(90005),o=s.n(n),i=s(55609);
/* harmony import */
/**
 * External dependencies
 */
/**
 * WordPress dependencies
 */
/**
 * Sensei data port error notice.
 *
 * @param {Object}  input         Notice input.
 * @param {string}  input.message The message to be displayed.
 * @param {boolean} input.isError Whether the message is an error.
 */
const l=e=>{let{message:t,isError:s}=e;const n=o()({"sensei-data-port-notice__message":!0,error:s});return(0,r.createElement)("div",{className:"sensei-data-port-notice"},s&&(0,r.createElement)(i.Dashicon,{className:"sensei-data-port-notice__icon error",icon:"warning"}),(0,r.createElement)("span",{className:n},t))};
/***/},
/***/22446:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */x:()=>/* binding */n
/* harmony export */});
/* harmony import */var r=s(69307);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Shallow-merge new value into state object.
 *
 * @param {Object} initialState Initial state.
 * @return {Array.<(Object|Function)>} State object and updateState function.
 */
const n=e=>(0,r.useReducer)(((e,t)=>({...e,...t})),e);
/***/},
/***/49373:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */I:()=>/* binding */n
/* harmony export */});
/* harmony import */var r=s(69307);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Use Sensei color theme.
 *
 * Requires enqueueing the sensei-wp-components stylesheet.
 */
function n(){(0,r.useLayoutEffect)((()=>(document.body.classList.add("sensei-color"),()=>document.body.classList.remove("sensei-color"))))}
/***/},
/***/20832:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */lA:()=>/* binding */n
/* harmony export */});
/* unused harmony exports composeFetchAction, createStore */
/* harmony import */s(9818);
/* harmony import */
/**
 * WordPress dependencies
 */
// We register the store in the global scope to avoid registering it multiple times.
// The reason to be in the global scope is that some times we have different built files using the same source.
window.senseiStores=window.senseiStores||[];const{senseiStores:r}=window,n=(e,t)=>function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1?arguments[1]:void 0;return(e[r.type]||e.DEFAULT)(r,s)};
/**
 * Compose an action creator with the given start, success and error actions.
 *
 * @param {string}   startAction   Start action type.
 * @param {Function} fetchFn       The action creator to be wrapped. Should return the resolved data.
 * @param {string}   successAction Success action type.
 * @param {string}   errorAction   Error action type.
 * @return {Function} The wrapped action creator.
 */}
/***/,
/***/80573:
/***/(e,t,s)=>{"use strict";
/* harmony export */
/**
 * Schedule to run action creator after the given time.
 *
 * @param {Function} action Action creator to dispatch.
 * @param {number}   wait   Timeout in milliseconds.
 */
function*r(e,t){yield{type:"TIMEOUT",wait:t},yield e()}
/**
 * Clear current timeout.
 */function n(){return{type:"CLEAR_TIMEOUT"}}
/**
 * Manage timeout reference.
 */s.d(t,{
/* harmony export */Vs:()=>/* binding */r
/* harmony export */,_1:()=>/* binding */n
/* harmony export */,ZP:()=>i
/* harmony export */});const o={current:null,
/**
   * Create a new timeout promise.
   *
   * @param {number} wait Timeout in ms.
   * @return {Promise} Promise resolved after the timeout.
   */
create:e=>new Promise((t=>{o.clear(),o.current=setTimeout((()=>{t()}),e)})),
/**
   * Clear current scheduled timeout.
   */
clear(){o.current&&(clearTimeout(o.current),o.current=null)}},i={TIMEOUT:e=>{let{wait:t}=e;return o.create(t)},CLEAR_TIMEOUT:()=>o.clear()};
/* harmony default export */}
/***/,
/***/2704:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */V:()=>/* binding */r
/* harmony export */});
/**
 * Return keys of a key-value map where their value is true.
 *
 * @param {Object} map Data.
 * @return {string[]} Selected keys.
 */
const r=e=>Object.keys(e).filter((t=>e[t]))
/***/},
/***/69435:
/***/(e,t,s)=>{"use strict";
/* harmony export */
/**
 * Prompt opening a file from the given url.
 *
 * @param {Object} options
 * @param {string} options.url    The file URL.
 * @param {string} [options.name] Filename for the downloaded file.
 */
function r(e){let{url:t,name:s}=e;const r=document.createElement("a");r.href=t,r.download=s||!0,document.body.appendChild(r),r.click(),document.body.removeChild(r)}
/***/s.d(t,{
/* harmony export */S:()=>/* binding */r
/* harmony export */})},
/***/70761:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */h:()=>/* binding */n
/* harmony export */});
/* unused harmony export logTypeLabels */
/* harmony import */var r=s(65736);
/* harmony import */
/**
 * WordPress dependencies
 */
const n={course:(0,r.__)("Courses","sensei-lms"),lesson:(0,r.__)("Lessons","sensei-lms"),question:(0,r.__)("Questions","sensei-lms")};(0,r.__)("Error","sensei-lms"),(0,r.__)("Warning","sensei-lms")}
/***/,
/***/55609:
/***/e=>{"use strict";e.exports=window.wp.components}
/***/,
/***/94333:
/***/e=>{"use strict";e.exports=window.wp.compose}
/***/,
/***/9818:
/***/e=>{"use strict";e.exports=window.wp.data}
/***/,
/***/23418:
/***/e=>{"use strict";e.exports=window.wp.dataControls}
/***/,
/***/69307:
/***/e=>{"use strict";e.exports=window.wp.element}
/***/,
/***/65736:
/***/e=>{"use strict";e.exports=window.wp.i18n}
/***/,
/***/90005:
/***/(e,t)=>{var s;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];s&&(e=i(e,o(s)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var s in e)r.call(e,s)&&e[s]&&(t=i(t,s));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(s=function(){return n}.apply(t,[]))||(e.exports=s)}()}
/***/
/******/},t={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function s(r){
/******/ // Check if module is in cache
/******/var n=t[r];
/******/if(void 0!==n)
/******/return n.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var o=t[r]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[r](o,o.exports,s),o.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/s.n=e=>{
/******/var t=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return s.d(t,{a:t}),t;
/******/},
/******/ // define getter functions for harmony exports
/******/s.d=(e,t)=>{
/******/for(var r in t)
/******/s.o(t,r)&&!s.o(e,r)&&
/******/Object.defineProperty(e,r,{enumerable:!0,get:t[r]})
/******/;
/******/},
/******/s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)
/******/,
/******/ // define __esModule on exports
/******/s.r=e=>{
/******/"undefined"!=typeof Symbol&&Symbol.toStringTag&&
/******/Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})
/******/,Object.defineProperty(e,"__esModule",{value:!0})}
/******/,
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(()=>{"use strict";
/* harmony import */var e=s(69307),t=s(97290);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
(0,e.render)((0,e.createElement)(t/* ["default"] */.Z,null),document.getElementById("sensei-export-page"))})()})
/******/();