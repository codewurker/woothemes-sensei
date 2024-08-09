/******/(()=>{// webpackBootstrap
/******/var e={
/***/8598:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>o
/* harmony export */});
/* harmony import */var s=r(99196),n=r(70444);
/* harmony import */
/**
 * WordPress dependencies
 */
const o=(0,s.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(n.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}));
/* harmony default export */}
//# sourceMappingURL=close-small.js.map
/***/,
/***/33743:
/***/e=>{"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */function t(e){return function(){return e}}
/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */var r=function(){};r.thatReturns=t,r.thatReturnsFalse=t(!1),r.thatReturnsTrue=t(!0),r.thatReturnsNull=t(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r}
/***/,
/***/87081:
/***/e=>{"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */e.exports=function(e,t,r,s,n,o,l,i){if(!e){var a;if(void 0===t)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,s,n,o,l,i],u=0;(a=new Error(t.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}// we don't care about invariant's own frame
throw a.framesToPop=1,a}}}
/***/,
/***/82264:
/***/(e,t,r)=>{"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */var s=r(33743);
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */e.exports=s}
/***/,
/***/19219:
/***/(e,t,r)=>{"use strict";var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=i(r(99196)),o=i(r(40349)),l=i(r(58470));
/**
                                                                                                                                                                                                                                                                               * External Dependencies
                                                                                                                                                                                                                                                                               */
/**
 * Internal Dependencies
 */function i(e){return e&&e.__esModule?e:{default:e}}var a=void 0;function c(e,t){var r,l,i,u,p,d,m,g,f=[],y={};for(d=0;d<e.length;d++)if("string"!==(p=e[d]).type){
// component node should at least be set
if(!t.hasOwnProperty(p.value)||void 0===t[p.value])throw new Error("Invalid interpolation, missing component node: `"+p.value+"`");
// should be either ReactElement or null (both type "object"), all other types deprecated
if("object"!==s(t[p.value]))throw new Error("Invalid interpolation, component node must be a ReactElement or null: `"+p.value+"`","\n> "+a);
// we should never see a componentClose token in this loop
if("componentClose"===p.type)throw new Error("Missing opening component token: `"+p.value+"`");if("componentOpen"===p.type){r=t[p.value],i=d;break}
// componentSelfClosing token
f.push(t[p.value])}else f.push(p.value);return r&&(u=function(e,t){var r,s,n=t[e],o=0;for(s=e+1;s<t.length;s++)if((r=t[s]).value===n.value){if("componentOpen"===r.type){o++;continue}if("componentClose"===r.type){if(0===o)return s;o--}}
// if we get this far, there was no matching close token
throw new Error("Missing closing component token `"+n.value+"`")}(i,e),m=c(e.slice(i+1,u),t),l=n.default.cloneElement(r,{},m),f.push(l),u<e.length-1&&(g=c(e.slice(u+1),t),f=f.concat(g))),1===f.length?f[0]:(f.forEach((function(e,t){e&&(y["interpolation-child-"+t]=e)})),(0,o.default)(y))}t.Z=function(e){var t=e.mixedString,r=e.components,n=e.throwErrors;if(a=t,!r)return t;if("object"!==(void 0===r?"undefined":s(r))){if(n)throw new Error("Interpolation Error: unable to process `"+t+"` because components is not an object");return t}var o=(0,l.default)(t);try{return c(o,r)}catch(e){if(n)throw new Error("Interpolation Error: unable to process `"+t+"` because of error `"+e.message+"`");return t}}}
//# sourceMappingURL=index.js.map
/***/,
/***/58470:
/***/e=>{"use strict";function t(e){
// {{/example}}
return e.match(/^\{\{\//)?{type:"componentClose",value:e.replace(/\W/g,"")}:
// {{example /}}
e.match(/\/\}\}$/)?{type:"componentSelfClosing",value:e.replace(/\W/g,"")}:
// {{example}}
e.match(/^\{\{/)?{type:"componentOpen",value:e.replace(/\W/g,"")}:{type:"string",value:e}}e.exports=function(e){// split to components and strings
return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(t)}}
//# sourceMappingURL=tokenize.js.map
/***/,
/***/40349:
/***/(e,t,r)=>{"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=r(99196),n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=r(33743),l=r(87081),i=r(82264),a=".",c=":",u="function"==typeof Symbol&&Symbol.iterator,p="@@iterator";function d(e,t){
// Do some typechecking here since we call this blindly. We want to ensure
// that we don't block potential future ES APIs.
return e&&"object"==typeof e&&null!=e.key?(r=e.key,s={"=":"=0",":":"=2"},"$"+(""+r).replace(/[=:]/g,(function(e){return s[e]}))):t.toString(36);
// Implicit key determined by the index in the set
var r,s}function m(e,t,r,s){var o,i=typeof e;if("undefined"!==i&&"boolean"!==i||(
// All of the above are perceived as null.
e=null),null===e||"string"===i||"number"===i||
// The following is inlined from ReactElement. This means we can optimize
// some checks. React Fiber also inlines this logic for similar purposes.
"object"===i&&e.$$typeof===n)return r(s,e,
// If it's the only child, treat the name as if it was wrapped in an array
// so that it's consistent if the number of children grows.
""===t?a+d(e,0):t),1;var g=0,f=""===t?a:t+c;// Count of children found in the current subtree.
if(Array.isArray(e))for(var y=0;y<e.length;y++)g+=m(o=e[y],f+d(o,y),r,s);else{var E=// Before Symbol spec.
function(e){var t=e&&(u&&e[u]||e[p]);if("function"==typeof t)return t}(e);if(E){0;for(var h,_=E.call(e),v=0;!(h=_.next()).done;)g+=m(o=h.value,f+d(o,v++),r,s)}else if("object"===i){0;var S=""+e;l(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===S?"object with keys {"+Object.keys(e).join(", ")+"}":S,"")}}return g}var g=/\/+/g;function f(e){return(""+e).replace(g,"$&/")}var y,E,h=_,_=function(e){var t=this;if(t.instancePool.length){var r=t.instancePool.pop();return t.call(r,e),r}return new t(e)},v=function(e){var t=this;l(e instanceof t,"Trying to release an instance into a pool of a different type."),e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)};function S(e,t,r,s){this.result=e,this.keyPrefix=t,this.func=r,this.context=s,this.count=0}function b(e,t,r){var n,l,i=e.result,a=e.keyPrefix,c=e.func,u=e.context,p=c.call(u,t,e.count++);Array.isArray(p)?w(p,i,r,o.thatReturnsArgument):null!=p&&(s.isValidElement(p)&&(n=p,l=
// Keep both the (mapped) and old keys if they differ, just as
// traverseAllChildren used to do for objects as children
a+(!p.key||t&&t.key===p.key?"":f(p.key)+"/")+r,p=s.cloneElement(n,{key:l},void 0!==n.props?n.props.children:void 0)),i.push(p))}function w(e,t,r,s,n){var o="";null!=r&&(o=f(r)+"/");var l=S.getPooled(t,o,s,n);!function(e,t,r){null==e||m(e,"",t,r)}(e,b,l),S.release(l)}S.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},y=function(e,t,r,s){var n=this;if(n.instancePool.length){var o=n.instancePool.pop();return n.call(o,e,t,r,s),o}return new n(e,t,r,s)},(E=S).instancePool=[],E.getPooled=y||h,E.poolSize||(E.poolSize=10),E.release=v;e.exports=function(e){if("object"!=typeof e||!e||Array.isArray(e))return i(!1,"React.addons.createFragment only accepts a single object. Got: %s",e),e;if(s.isValidElement(e))return i(!1,"React.addons.createFragment does not accept a ReactElement without a wrapper object."),e;l(1!==e.nodeType,"React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");var t=[];for(var r in e)w(e[r],t,r,o.thatReturnsArgument);return t}}
/***/,
/***/90631:
/***/(e,t,r)=>{"use strict";r.r(t),
/* harmony export */r.d(t,{
/* harmony export */fetchFromAPI:()=>/* binding */i
/* harmony export */,wait:()=>/* binding */a
/* harmony export */,loadCurrentJobState:()=>/* binding */c
/* harmony export */,updateJobState:()=>/* binding */u
/* harmony export */,pollJobProgress:()=>/* binding */p
/* harmony export */,setJobState:()=>/* binding */d
/* harmony export */,submitStartImport:()=>/* binding */m
/* harmony export */,startImport:()=>/* binding */g
/* harmony export */,successStartImport:()=>/* binding */f
/* harmony export */,errorStartImport:()=>/* binding */y
/* harmony export */,uploadFileForLevel:()=>/* binding */E
/* harmony export */,throwEarlyUploadError:()=>/* binding */h
/* harmony export */,startFileUploadAction:()=>/* binding */_
/* harmony export */,successFileUpload:()=>/* binding */v
/* harmony export */,errorFileUpload:()=>/* binding */S
/* harmony export */,deleteLevelFile:()=>/* binding */b
/* harmony export */,startDeleteLevelFileAction:()=>/* binding */w
/* harmony export */,successDeleteLevelFileAction:()=>/* binding */T
/* harmony export */,errorDeleteLevelFileAction:()=>/* binding */F
/* harmony export */,resetState:()=>/* binding */R
/* harmony export */,restartImporter:()=>/* binding */I
/* harmony export */});
/* harmony import */var s=r(25463),n=r(20832),o=r(70468),l=r(97769);
/* harmony import */
/**
 * Internal dependencies
 */
/**
 * @typedef  {Object} FetchFromAPIAction
 * @property {string} type    Action type.
 * @property {Object} request Object that is used to fetch.
 */
/**
 * Fetch action creator.
 *
 * @param {Object} request Object that is used to fetch.
 *
 * @return {FetchFromAPIAction} Fetch action.
 */
const i=e=>({type:s/* .FETCH_FROM_API */.nx,request:e}),a=e=>({type:s/* .WAIT */.wF,timeout:e})
/**
 * Fetch importer data for current job.
 */,c=(0,n/* .composeFetchAction */.GI)(s/* .START_LOAD_CURRENT_JOB_STATE */.jn,(function*(){const e=yield i({path:(0,l/* .buildJobEndpointUrl */.D)(s/* .API_SPECIAL_ACTIVE_JOB_ID */.BL)});return(0,o/* .normalizeImportData */.wh)(e)}),s/* .SUCCESS_LOAD_CURRENT_JOB_STATE */.H1,s/* .ERROR_LOAD_CURRENT_JOB_STATE */.sw);
/**
 * Update job state in the background.
 *
 * @param {string} jobId The job ID.
 */
function*u(e){try{const t=yield i({path:(0,l/* .buildJobEndpointUrl */.D)(e)});yield d((0,o/* .normalizeImportData */.wh)(t))}catch(e){
// Silent.
}}
/**
 * Run job batches and query progress until it is completed.
 *
 * @param {string} jobId Job ID.
 */const p=function*(e){try{const t=yield i({path:(0,l/* .buildJobEndpointUrl */.D)(e,["process"]),method:"POST"});yield d((0,o/* .normalizeImportData */.wh)(t));const{status:r}=t.status;"completed"!==r&&(yield*p(e))}catch(t){yield a(2e3),yield*p(e)}},d=e=>({type:s/* .SET_JOB_STATE */.gL,data:e})
/**
 * Start import.
 *
 * @param {string}   jobId               The job identifier.
 * @param {Object}   [options]
 * @param {Function} [options.onSuccess] On Success handler.
 * @param {Function} [options.onError]   On Error handler.
 */;
/**
 * @typedef  {Object} SetJobStateAction
 * @property {string} type Action type.
 * @property {Object} data Job state.
 */
/**
 * Set job state action creator.
 *
 * @param {Object} data Job state.
 * @return {SetJobStateAction} Set job state action.
 */function*m(e){let{onSuccess:t,onError:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};yield g();try{if(!e)return void(yield y({message:null}));const r=yield i({path:(0,l/* .buildJobEndpointUrl */.D)(e,["start"]),method:"POST"});yield f((0,o/* .normalizeImportData */.wh)(r)),t&&t()}catch(e){yield y(e),r&&r(e)}}
/**
 * @typedef  {Object} StartImportAction
 * @property {string} type Action type.
 */
/**
 * Start action to start import.
 *
 * @return {StartImportAction} Start import action.
 */const g=()=>({type:s/* .START_IMPORT */.FG})
/**
 * @typedef  {Object} SuccessStartImportAction
 * @property {string} type Action type.
 * @property {Object} data Data object.
 */
/**
 * Success submit action creator.
 *
 * @param {Object} data Importer data.
 * @return {SuccessStartImportAction} Success submit action.
 */,f=e=>({type:s/* .SUCCESS_START_IMPORT */.XM,data:e})
/**
 * @typedef  {Object}         ErrorStartImportAction
 * @property {string}         type  Action type.
 * @property {Object|boolean} error Error object or false.
 */
/**
 * Error start import job creator.
 *
 * @param {Object} error Error object or false.
 *
 * @return {ErrorStartImportAction} Error action.
 */,y=e=>({type:s/* .ERROR_START_IMPORT */.UX,error:e})
/**
 * Upload a file for a level.
 *
 * @param {string}   jobId               The job identifier.
 * @param {string}   level               Level identifier.
 * @param {Object}   uploadData          Data to submit.
 * @param {Object}   [options]
 * @param {Function} [options.onSuccess] Callback on success.
 * @param {Function} [options.onError]   Callback on error.
 */;function*E(e,t,r){let{onSuccess:n,onError:a}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};yield _(t,r);try{e||(e=s/* .API_SPECIAL_ACTIVE_JOB_ID */.BL);const a=yield i({path:(0,l/* .buildJobEndpointUrl */.D)(e,["file",t]),method:"POST",body:r});yield v(t,(0,o/* .normalizeImportData */.wh)(a)),n&&n()}catch(e){yield S(t,e),a&&a(e)}}
/**
 * Throw an early upload error.
 *
 * @param {string} level    Level identifier.
 * @param {string} errorMsg Error object or false.
 */const h=(e,t)=>S(e,{code:"",message:t})
/**
 * @typedef  {Object} StartFileUploadAction
 * @property {string} type       Action type.
 * @property {string} level      Level identifier.
 * @property {Object} uploadData Error object or false.
 */
/**
 * Start file upload action creator.
 *
 * @param {string} level      Level identifier.
 * @param {Object} uploadData Data to submit.
 *
 * @return {StartFileUploadAction} Start file upload action.
 */,_=(e,t)=>({type:s/* .START_UPLOAD_IMPORT_DATA_FILE */.fo,level:e,uploadData:t})
/**
 * @typedef  {Object} SuccessFileUploadAction
 * @property {string} type  Action type.
 * @property {string} level Level identifier.
 * @property {Object} data  Data object.
 */
/**
 * Success upload file action.
 *
 * @param {string} level Level identifier.
 * @param {Object} data  Importer data.
 * @return {SuccessFileUploadAction} Success file upload action.
 */,v=(e,t)=>({type:s/* .SUCCESS_UPLOAD_IMPORT_DATA_FILE */.i7,level:e,data:t})
/**
 * @typedef  {Object}         ErrorFileUploadAction
 * @property {string}         type  Action type.
 * @property {string}         level Level identifier.
 * @property {Object|boolean} error Error object or false.
 */
/**
 * Error submit action creator.
 *
 * @param {string}         level Level identifier.
 * @param {Object|boolean} error Error object or false.
 *
 * @return {ErrorFileUploadAction} Error action.
 */,S=(e,t)=>({type:s/* .ERROR_UPLOAD_IMPORT_DATA_FILE */.wO,level:e,error:t})
/**
 * Delete a level file.
 *
 * @param {string} jobId The job identifier.
 * @param {string} level Level identifier.
 */;function*b(e,t){yield w(t);try{if(!e)return void(yield F({message:null}));const r=yield i({path:(0,l/* .buildJobEndpointUrl */.D)(e,["file",t]),method:"DELETE"});yield T(t,(0,o/* .normalizeImportData */.wh)(r))}catch(e){yield F(t,e)}}
/**
 * @typedef  {Object} StartDeleteLevelFileAction
 * @property {string} type  Action type.
 * @property {string} level Level identifier.
 */
/**
 * Start file upload action creator.
 *
 * @param {string} level Level identifier.
 *
 * @return {StartDeleteLevelFileAction} Start delete file action.
 */const w=e=>({type:s/* .START_DELETE_IMPORT_DATA_FILE */.AI,level:e})
/**
 * @typedef  {Object} SuccessDeleteLevelFileAction
 * @property {string} type  Action type.
 * @property {string} level Level identifier.
 * @property {Object} data  Data object.
 */
/**
 * Success delete level file action.
 *
 * @param {string} level Level identifier.
 * @param {Object} data  Importer data.
 * @return {SuccessDeleteLevelFileAction} Success delete level file action.
 */,T=(e,t)=>({type:s/* .SUCCESS_DELETE_IMPORT_DATA_FILE */.Wi,level:e,data:t})
/**
 * @typedef  {Object}  ErrorSuccessDeleteLevelFileAction
 * @property {string} type  Action type.
 * @property {string} level Level identifier.
 * @property {Object} error Error object or false.
 */
/**
 * Error delete level file action creator.
 *
 * @param {string} level Level identifier.
 * @param {Object} error Error object or false.
 *
 * @return {ErrorSuccessDeleteLevelFileAction} Error delete level file action.
 */,F=(e,t)=>({type:s/* .ERROR_DELETE_IMPORT_DATA_FILE */.sW,level:e,error:t})
/**
 * Reset importer state.
 */,R=()=>({type:s/* .RESET_STATE */.so})
/**
 * Restart importer.
 */;function*I(){yield R(),yield c()}
/***/},
/***/25463:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Lt:()=>/* binding */s
/* harmony export */,BL:()=>/* binding */n
/* harmony export */,nx:()=>/* binding */o
/* harmony export */,wF:()=>/* binding */l
/* harmony export */,jn:()=>/* binding */i
/* harmony export */,H1:()=>/* binding */a
/* harmony export */,sw:()=>/* binding */c
/* harmony export */,gL:()=>/* binding */u
/* harmony export */,FG:()=>/* binding */p
/* harmony export */,XM:()=>/* binding */d
/* harmony export */,UX:()=>/* binding */m
/* harmony export */,fo:()=>/* binding */g
/* harmony export */,i7:()=>/* binding */f
/* harmony export */,wO:()=>/* binding */y
/* harmony export */,AI:()=>/* binding */E
/* harmony export */,Wi:()=>/* binding */h
/* harmony export */,sW:()=>/* binding */_
/* harmony export */,ao:()=>/* binding */v
/* harmony export */,$L:()=>/* binding */S
/* harmony export */,so:()=>/* binding */b
/* harmony export */});
/**
 * Data import constants.
 */
const s="/sensei-internal/v1/import/",n="active",o="FETCH_FROM_API",l="WAIT",i="START_LOAD_CURRENT_JOB_STATE",a="SUCCESS_LOAD_CURRENT_JOB_STATE",c="ERROR_LOAD_CURRENT_JOB_STATE",u="SET_JOB_STATE",p="START_IMPORT",d="SUCCESS_START_IMPORT",m="ERROR_START_IMPORT",g="START_UPLOAD_IMPORT_DATA_FILE",f="SUCCESS_UPLOAD_IMPORT_DATA_FILE",y="ERROR_UPLOAD_IMPORT_DATA_FILE",E="START_DELETE_IMPORT_DATA_FILE",h="SUCCESS_DELETE_IMPORT_DATA_FILE",_="ERROR_DELETE_IMPORT_DATA_FILE",v="SET_IMPORT_LOG",S="ERROR_FETCH_IMPORT_LOG",b="RESET_STATE"}
/***/,
/***/42588:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>l
/* harmony export */});
/* harmony import */var s=r(86989),n=r.n(s),o=r(25463);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/* harmony default export */const l={
/**
   * Fetch control.
   *
   * @param {{request: Object}} action Action with the request object that is used to fetch.
   *
   * @return {Promise} API fetch promise.
   */
[o/* .FETCH_FROM_API */.nx]:e=>{let{request:t}=e;return n()(t)},[o/* .WAIT */.wF]:e=>{let{timeout:t}=e;return new Promise((e=>setTimeout(e,t)))}};
/***/},
/***/51842:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>c
/* harmony export */});
/* harmony import */var s=r(9818),n=r(19790),o=r(90631),l=r(50330),i=r(42588),a=r(43802);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
const c=()=>{(0,s.registerStore)("sensei/import",{reducer:n/* ["default"] */.Z,actions:o,selectors:l,controls:i/* ["default"] */.Z,resolvers:a})};
/* harmony default export */}
/***/,
/***/70468:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */wh:()=>/* binding */o
/* harmony export */});
/* unused harmony exports normalizeUploadsState, parseCompletedSteps */
/**
 * Normalize uploads state.
 *
 * @param {Object} files Files raw data.
 *
 * @return {Object} Normalized levels data.
 */
const s=e=>{const t={};return Object.entries(e).forEach((e=>{let[r,s]=e;s.name&&(t[r]={filename:s.name,isUploaded:!0})})),t},n=e=>"pending"===e.status?["upload"]:"completed"===e.status?["upload","progress"]:[],o=e=>{let{id:t,files:r,status:o,results:l,...i}=e;return{...i,jobId:t,progress:o,upload:s(r||[]),completedSteps:n(o||{}),done:{results:l}}};
/**
 * Parses completed steps data.
 *
 * @param {Object} data Status data.
 *
 * @return {Array} Parsed completed steps data.
 */}
/***/,
/***/19790:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>i
/* harmony export */});
/* harmony import */var s=r(92819),n=r(25463);
/* harmony import */
/**
 * External dependencies
 */
/**
 * Internal dependencies
 */
const o={jobId:null,isFetching:!0,fetchError:!1,completedSteps:[],upload:{isSubmitting:!1,errorMsg:null,courses:{isUploaded:!1,isUploading:!1,isDeleting:!1,hasError:!1,errorMsg:null,filename:null},lessons:{isUploaded:!1,isUploading:!1,isDeleting:!1,hasError:!1,errorMsg:null,filename:null},questions:{isUploaded:!1,isUploading:!1,isDeleting:!1,hasError:!1,errorMsg:null,filename:null}},progress:{status:"",percentage:0},done:{results:null,logs:null}},l=(e,t,r)=>({...e,upload:{...e.upload,[t]:r}})
/**
 * Data importer reducer.
 *
 * @param {Object}         state  Current state.
 * @param {{type: string}} action Action to update the state.
 *
 * @return {Object} State updated.
 */
/* harmony default export */,i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n/* .START_LOAD_CURRENT_JOB_STATE */.jn:return{...e,isFetching:!0,fetchError:!1};case n/* .SUCCESS_LOAD_CURRENT_JOB_STATE */.H1:return{...(0,s.merge)({},e,t.data),isFetching:!1};case n/* .SET_JOB_STATE */.gL:return{...(0,s.merge)({},e,t.data)};case n/* .ERROR_LOAD_CURRENT_JOB_STATE */.sw:return{...e,isFetching:!1,fetchError:t.error};case n/* .START_IMPORT */.FG:return{...e,upload:{...e.upload,errorMsg:null,isSubmitting:!0}};case n/* .ERROR_START_IMPORT */.UX:return{...e,upload:{...e.upload,errorMsg:t.error.message,isSubmitting:!1}};case n/* .SUCCESS_START_IMPORT */.XM:return{...e,completedSteps:t.data.completedSteps,upload:{...e.upload,isSubmitting:!1},progress:{...e.progress,...t.data.progress}};case n/* .START_UPLOAD_IMPORT_DATA_FILE */.fo:return l(e,t.level,{...e.upload[t.level],isUploaded:!1,isUploading:!0,isDeleting:!1,hasError:!1,errorMsg:null,filename:null});case n/* .SUCCESS_UPLOAD_IMPORT_DATA_FILE */.i7:return l({...e,jobId:t.data.jobId},t.level,{...e.upload[t.level],...t.data.upload[t.level],isUploading:!1,isDeleting:!1,hasError:!1,errorMsg:null});case n/* .ERROR_UPLOAD_IMPORT_DATA_FILE */.wO:return l(e,t.level,{...e.upload[t.level],isUploaded:!1,isUploading:!1,isDeleting:!1,hasError:!0,errorMsg:t.error.message,filename:null});case n/* .START_DELETE_IMPORT_DATA_FILE */.AI:return l(e,t.level,{...e.upload[t.level],isDeleting:!0});case n/* .SUCCESS_DELETE_IMPORT_DATA_FILE */.Wi:return l(e,t.level,{...t.data.upload[t.level],isUploaded:!1,isDeleting:!1,hasError:!1,errorMsg:null,filename:null});case n/* .ERROR_DELETE_IMPORT_DATA_FILE */.sW:return l(e,t.level,{...e.upload[t.level],isUploaded:!1,isDeleting:!1,hasError:!0,errorMsg:t.error.message});case n/* .SET_IMPORT_LOG */.ao:return{...e,done:{...e.done,logs:t.data}};case n/* .ERROR_FETCH_IMPORT_LOG */.$L:return{...e,done:{...e.done,logs:{fetchError:t.error}}};case n/* .RESET_STATE */.so:return{...o};default:return e}};
/**
 *
 * @param {Object}         state      Current state.
 * @param {{type: string}} levelKey   Level to update.
 * @param {Object}         attributes Attributes to set.
 * @return {Object} State updated.
 */}
/***/,
/***/43802:
/***/(e,t,r)=>{"use strict";r.r(t),
/* harmony export */r.d(t,{
/* harmony export */getLogsBySeverity:()=>/* binding */i
/* harmony export */});
/* harmony import */var s=r(25463),n=r(20832),o=r(90631),l=r(97769);
/* harmony import */
/**
 * Internal dependencies
 */
const i=(0,n/* .composeFetchAction */.GI)(null,(function*(e){if(e)return yield(0,o.fetchFromAPI)({path:(0,l/* .buildJobEndpointUrl */.D)(e,["logs"])})}),s/* .SET_IMPORT_LOG */.ao,s/* .ERROR_FETCH_IMPORT_LOG */.$L);
/***/},
/***/50330:
/***/(e,t,r)=>{"use strict";r.r(t),
/* harmony export */r.d(t,{
/* harmony export */isFetching:()=>/* binding */i
/* harmony export */,getJobId:()=>/* binding */a
/* harmony export */,getFetchError:()=>/* binding */c
/* harmony export */,getStepData:()=>/* binding */u
/* harmony export */,getNavigationSteps:()=>/* binding */p
/* harmony export */,isCompleteStep:()=>/* binding */d
/* harmony export */,isReadyToStart:()=>/* binding */m
/* harmony export */,getUploadedLevelKeys:()=>/* binding */g
/* harmony export */,getSuccessResults:()=>/* binding */f
/* harmony export */,getLogsBySeverity:()=>/* binding */y
/* harmony export */,getLogsFetchError:()=>/* binding */E
/* harmony export */});
/* harmony import */var s=r(92819),n=r(47854),o=r(35345);
/* harmony import */
/**
 * External dependencies
 */
/**
 * Internal dependencies
 */
const l=["course","lesson","question"],i=e=>e.isFetching
/**
 * Get the import job ID.
 *
 * @param {Object} state Current state.
 *
 * @return {string} Job ID.
 */,a=e=>e.jobId
/**
 * Fetch importer error selector.
 *
 * @param {Object} state Current state.
 *
 * @return {Object|boolean} Error object or false.
 */,c=e=>e.fetchError
/**
 * Step state selector.
 *
 * @param {Object} state Current state.
 * @param {string} step  Step name.
 *
 * @return {Object} Step data.
 */,u=(e,t)=>e[t]
/**
 * Get navigation steps with their state.
 *
 * @param {Object} state                Current state.
 * @param {Array}  state.completedSteps An array of the completed steps.
 *
 * @return {Array} Navigation steps.
 */,p=e=>{let{completedSteps:t}=e;const r=n/* .steps.map */.S.map((e=>({...e,isComplete:t.includes(e.key),isNext:!1})));return(r.find((e=>!e.isComplete))||r[0]).isNext=!0,r},d=(e,t)=>{let{completedSteps:r}=e;return r.includes(t)},m=e=>{const t=o/* .levels.map */.g.map((t=>{let{key:r}=t;return e.upload[r]})),r=t.some((e=>e.isUploaded)),s=t.some((e=>e.isUploading||e.isDeleting));return r&&!s},g=e=>{let{upload:t}=e;return o/* .levels.filter */.g.filter((e=>{let{key:r}=e;return t[r].isUploaded})).map((e=>{let{key:t}=e;return t}))},f=e=>{let{done:t}=e;return l.map((e=>({key:e,count:(0,s.get)(t,["results",e,"success"],0)+(0,s.get)(t,["results",e,"warning"],0)}))).filter((e=>{let{count:t}=e;return t>0}))},y=e=>{let{done:t,upload:r}=e;const n=(0,s.get)(t,"logs.items",[]).map((e=>({...e,filename:(0,s.get)(r,e.type+"s.filename","")})));return(0,s.groupBy)(n,"severity")},E=e=>{let{done:t}=e;return(0,s.get)(t,"logs.fetchError",!1)};
/**
 * Is fetching importer data selector.
 *
 * @param {Object} state Current state.
 *
 * @return {boolean} Is fetching.
 */}
/***/,
/***/21051:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */w:()=>/* binding */c
/* harmony export */});
/* harmony import */var s=r(69307),n=r(65736),o=r(55609),l=r(74849),i=r(79801),a=r(43011);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/**
 * Done page of the importer.
 *
 * @param {Object}   input                 DonePage input.
 * @param {Function} input.restartImporter A callback to be called when the importer gets restarted.
 * @param {Array}    input.successResults  The results of the job.
 * @param {Object}   input.logs            The logs of the job.
 * @param {boolean}  input.isFetching      Whether the logs of the job are currently fetching.
 * @param {boolean}  input.fetchError      Whether there was an error during fetching.
 * @param {Function} input.retry           Callback to be called when fetching is retried.
 */
const c=e=>{let{restartImporter:t,successResults:r=[],logs:c={},isFetching:u=!1,fetchError:p=!1,retry:d}=e,m=(0,s.createElement)(s.Fragment,null,c.error&&c.error.length>0&&(0,s.createElement)("section",{className:"sensei-data-port-step"},(0,s.createElement)(a/* .Section */.$,{className:"sensei-data-port-step__body"},(0,s.createElement)("h2",null,(0,n.__)("Failed","sensei-lms")),(0,s.createElement)("p",{className:"sensei-import-done__section-description"},(0,n.__)("The following content was not imported. Please make the necessary corrections to the import file and try again.","sensei-lms")),(0,s.createElement)(l/* .ImportLog */._,{items:c.error,type:"error"}))),c.notice&&c.notice.length>0&&(0,s.createElement)("section",{className:"sensei-data-port-step"},(0,s.createElement)(a/* .Section */.$,{className:"sensei-data-port-step__body"},(0,s.createElement)("h2",null,(0,n.__)("Partial","sensei-lms")),(0,s.createElement)("p",{className:"sensei-import-done__section-description"},(0,n.__)("The following content was partially imported. The import process encountered some issues that you can resolve manually by clicking the link and making the necessary adjustments.","sensei-lms")),(0,s.createElement)(l/* .ImportLog */._,{items:c.notice,type:"warning"}))));return u?m=(0,s.createElement)("div",{className:"sensei-import-done__log-fetching"},(0,s.createElement)(o.Spinner,null)," ",(0,n.__)("Fetching log details…","sensei-lms")):p&&(m=(0,s.createElement)(o.Notice,{status:"error",isDismissible:!1},(0,n.__)("Failed to load import log.","sensei-lms")," ",p.message,(0,s.createElement)(o.Button,{onClick:d,isLink:!0,isSmall:!0},(0,n.__)("Retry","sensei-lms")))),(0,s.createElement)(s.Fragment,null,(0,s.createElement)("section",{className:"sensei-data-port-step"},(0,s.createElement)(a/* .Section */.$,{className:"sensei-data-port-step__body"},(0,s.createElement)("h2",null,(0,n.__)("Completed","sensei-lms")),r.length>0?(0,s.createElement)(s.Fragment,null,(0,s.createElement)("p",{className:"sensei-import-done__section-description"},(0,n.__)("The following content was imported:","sensei-lms")),(0,s.createElement)(i/* ["default"] */.Z,{successResults:r})):(0,s.createElement)("p",{className:"sensei-import-done__section-description"},(0,n.__)("No content was imported.","sensei-lms")),(0,s.createElement)("div",{className:"sensei-data-port-step__footer"},(0,s.createElement)(o.Button,{isPrimary:!0,onClick:t},(0,n.__)("Import More Content","sensei-lms"))))),m)};
/***/},
/***/74849:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */_:()=>/* binding */i
/* harmony export */});
/* harmony import */var s=r(69307),n=r(92819),o=r(65736),l=r(70761);
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
 * Create title with link.
 *
 * @param {string} title    Post title.
 * @param {string} editLink Post edit link.
 */
const i=e=>{let{items:t,type:r}=e;return(0,s.createElement)("div",{className:"sensei-import-done__log-data"},(0,s.createElement)("table",{className:"sensei-data-table"},(0,s.createElement)("thead",null,(0,s.createElement)("tr",null,"error"===r&&(0,s.createElement)("th",null,(0,o.__)("File","sensei-lms")),(0,s.createElement)("th",null,(0,o.__)("Title","sensei-lms")),(0,s.createElement)("th",null,(0,o.__)("Line #","sensei-lms")),(0,s.createElement)("th",null,l/* .logTypeLabels */.g[r]))),(0,s.createElement)("tbody",null,t.map((e=>{return(0,s.createElement)("tr",{key:(0,n.kebabCase)(Object.entries(e).join(""))},"error"===r&&(0,s.createElement)("td",null,e.filename),(0,s.createElement)("td",null,(t=e.post.title,(o=e.post.edit_link)?(0,s.createElement)("a",{href:o,target:"_blank",rel:"noreferrer"},t):t)),(0,s.createElement)("td",null,e.line),(0,s.createElement)("td",null,e.message));var t,o})))))};
/**
 * ImportLog component.
 *
 * @param {Object} input       ImportLog input.
 * @param {Array}  input.items An array of log items.
 * @param {string} input.type  Log type.
 */}
/***/,
/***/79801:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>o
/* harmony export */});
/* harmony import */var s=r(69307),n=r(65736);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Get post type label.
 *
 * @param {{key: string, count: number}} typeData Type data.
 *
 * @return {string} Translated label.
 */
const o=e=>{let{successResults:t}=e;return(0,s.createElement)("ul",{className:"sensei-import-bullet-list"},t.map((e=>{let{key:t,count:r}=e;return(0,s.createElement)("li",{key:t},r," ",(e=>{let{key:t,count:r}=e;return{course:(0,n._n)("course","courses",r,"sensei-lms"),lesson:(0,n._n)("lesson","lessons",r,"sensei-lms"),question:(0,n._n)("question","questions",r,"sensei-lms")}[t]})({key:t,count:r}))})))};
/**
 * ImportSuccessResults component.
 *
 * @param {Object} input                ImportSuccessResults input.
 * @param {Array}  input.successResults An array of counts of successfully imported items.
 */}
/***/,
/***/98740:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>l
/* harmony export */});
/* harmony import */var s=r(9818),n=r(94333),o=r(21051);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/* harmony default export */const l=(0,n.compose)((0,s.withSelect)((e=>{const t=e("sensei/import"),r=t.getJobId();return{successResults:t.getSuccessResults(),logs:t.getLogsBySeverity(r),isFetching:t.isResolving("getLogsBySeverity",[r]),fetchError:t.getLogsFetchError()}})),(0,s.withDispatch)((e=>{const{restartImporter:t,invalidateResolutionForStoreSelector:r}=e("sensei/import");return{restartImporter:t,retry:()=>r("getLogsBySeverity")}})))(o/* .DonePage */.w);
/***/},
/***/97769:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */D:()=>/* binding */n
/* harmony export */});
/* harmony import */var s=r(25463);
/**
 * Internal dependencies
 */
/**
 * Build a URL for a job specific route.
 *
 * @param {string?} jobId Job identifier.
 * @param {Array?}  parts Parts of the URL.
 * @return {string} Combined URL.
 */const n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const r=[...e?[e]:[],...t||[]].join("/");return s/* .API_BASE_PATH */.Lt+r};
/***/},
/***/45879:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */A:()=>/* binding */i
/* harmony export */});
/* harmony import */var s=r(69307),n=r(65736),o=r(55292),l=r(43011);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/**
 * This component displays the import progress page of the importer.
 *
 * @param {Object} input       ImportProgressPage input.
 * @param {Object} input.state The import state.
 */
const i=e=>{let{state:t}=e;const{percentage:r}=t;return(0,o/* ["default"] */.Z)(),(0,s.createElement)("section",{className:"sensei-data-port-step sensei-import-progress-page"},(0,s.createElement)("header",{className:"sensei-data-port-step__header"},(0,s.createElement)(l.H,null,(0,n.__)("Importing","sensei-lms")),(0,s.createElement)("p",null,(0,n.__)("Your content is now being imported…","sensei-lms"))),(0,s.createElement)(l/* .Section */.$,{className:"sensei-data-port-step__body",component:"section"},(0,s.createElement)("p",null,(0,s.createElement)("progress",{className:"sensei-data-port__progressbar sensei-import-progress-page__progress",max:"100",value:r}))))};
/***/},
/***/79357:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>l
/* harmony export */});
/* harmony import */var s=r(9818),n=r(94333),o=r(45879);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/* harmony default export */const l=(0,n.compose)((0,s.withSelect)((e=>({state:e("sensei/import").getStepData("progress")}))))(o/* .ImportProgressPage */.A);
/***/},
/***/55292:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>o
/* harmony export */});
/* harmony import */var s=r(69307),n=r(9818);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Progress polling hook.
 */
const o=()=>{const{pollJobProgress:e}=(0,n.useDispatch)("sensei/import"),t=(0,n.useSelect)((e=>e("sensei/import").getJobId()));(0,s.useEffect)((()=>{e(t)}),[e,t])};
/* harmony default export */}
/***/,
/***/35345:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */g:()=>/* binding */n
/* harmony export */});
/* harmony import */var s=r(65736);
/* harmony import */
/**
 * WordPress dependencies
 */
const n=[{key:"courses",description:(0,s.__)("Courses CSV File","sensei-lms")},{key:"lessons",description:(0,s.__)("Lessons CSV File","sensei-lms")},{key:"questions",description:(0,s.__)("Questions CSV File","sensei-lms")}];
/***/},
/***/47854:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */S:()=>/* binding */a
/* harmony export */});
/* harmony import */var s=r(69307),n=r(65736),o=r(71793),l=r(79357),i=r(98740);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
const a=[{key:"upload",container:(0,s.createElement)(o/* ["default"] */.Z,null),label:(0,n.__)("Upload CSV Files","sensei-lms")},{key:"progress",container:(0,s.createElement)(l/* ["default"] */.Z,null),label:(0,n.__)("Import","sensei-lms")},{key:"complete",container:(0,s.createElement)(i/* ["default"] */.Z,null),label:(0,n.__)("Done","sensei-lms")}];
/***/},
/***/31567:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>l
/* harmony export */});
/* harmony import */var s=r(9818),n=r(94333),o=r(56565);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/* harmony default export */const l=(0,n.compose)((0,s.withSelect)((e=>{const t=e("sensei/import");return{jobId:t.getJobId(),state:t.getStepData("upload")}})),(0,s.withDispatch)((e=>{const{deleteLevelFile:t,uploadFileForLevel:r,throwEarlyUploadError:s}=e("sensei/import");return{deleteLevelFile:t,uploadFileForLevel:r,throwEarlyUploadError:s}})))(o/* .UploadLevels */.B);
/***/},
/***/56565:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */B:()=>/* binding */c
/* harmony export */});
/* harmony import */var s=r(69307),n=r(55609),o=r(8598),l=r(65736),i=r(29822),a=r(35345);
/* harmony import */
/* global FormData */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/**
 * Helper method to upload a file.
 *
 * @param {string}   jobId                 The job identifier.
 * @param {FileList} files                 The files of the input.
 * @param {string}   levelKey              The level key.
 * @param {Function} uploadFileForLevel    Callback for action to upload file.
 * @param {Function} throwEarlyUploadError Callback for throwing an early upload error.
 */
const c=e=>{let{jobId:t,state:r,uploadFileForLevel:c,throwEarlyUploadError:u,deleteLevelFile:p}=e;return(0,s.createElement)("ol",null,a/* .levels.map */.g.map((e=>{const a=r[e.key],d=(e=>e.hasError?(0,s.createElement)(i/* .Notice */.q,{message:e.errorMsg,isError:!0}):e.isUploaded?(0,s.createElement)(i/* .Notice */.q,{message:e.filename}):void 0)(a);let m;
/* eslint-disable jsx-a11y/label-has-for */
return a.isDeleting?m=(0,s.createElement)("div",{className:"sensei-upload-file-line__delete-button-wrapper"},(0,s.createElement)(n.Spinner,null)):a.isUploaded&&(m=(0,s.createElement)("div",{className:"sensei-upload-file-line__delete-button-wrapper"},(0,s.createElement)(n.Button,{icon:o/* ["default"] */.Z,label:(0,l.__)("Delete File","sensei-lms"),onClick:()=>p(t,e.key),disabled:a.isDeleting}))),(0,s.createElement)("li",{key:e.key,className:"sensei-upload-file-line sensei-data-port-step__line"},(0,s.createElement)("label",{className:"sensei-upload-file-line__description",htmlFor:`sensei-upload-file-line-${e.key}`},e.description),(0,s.createElement)(n.FormFileUpload,{key:a.isUploading,isSecondary:!0,id:`sensei-upload-file-line-${e.key}`,accept:[".csv",".txt"],disabled:a.isUploading||a.isDeleting,onChange:r=>((e,t,r,s,n)=>{if(t.length<1)return;const o=t[0];if(!["csv","txt"].includes(o.name.split(".").pop()))return void n(r,(0,l.__)("Only CSV files are supported.","sensei-lms"));const i=new FormData;i.append("file",o),s(e,r,i)})(t,r.target.files,e.key,c,u)},a.isUploading?(0,l.__)("Uploading…","sensei-lms"):(0,l.__)("Upload","sensei-lms")),(d||m)&&(0,s.createElement)("div",{className:"sensei-upload-file-line__info"},d,m));
/* eslint-enable */})))};
/**
 * A component which displays a list of upload levels. Each level has each own description, upload button and a
 * placeholder for messages.
 *
 * @param {Object}   input                       UploadLevels input.
 * @param {number}   input.jobId                 The job id.
 * @param {Object}   input.state                 The import state.
 * @param {Function} input.uploadFileForLevel    Callback for action to upload file.
 * @param {Function} input.throwEarlyUploadError Callback for throwing an early upload error.
 * @param {Function} input.deleteLevelFile       The import state.
 */}
/***/,
/***/71793:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>l
/* harmony export */});
/* harmony import */var s=r(9818),n=r(94333),o=r(71247);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/* harmony default export */const l=(0,n.compose)((0,s.withSelect)((e=>{const t=e("sensei/import");return{state:t.getStepData("upload"),isReady:t.isReadyToStart()}})),(0,s.withDispatch)(((e,t,r)=>{let{select:s}=r;const{submitStartImport:n}=e("sensei/import");return{submitStartImport:()=>{n(s("sensei/import").getJobId());
// Log continue to import from uploaded files.
const e=s("sensei/import").getUploadedLevelKeys().join(",");window.sensei_log_event("import_continue_click",{type:e})}}})))(o/* .UploadPage */.b);
/***/},
/***/71247:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */b:()=>/* binding */u
/* harmony export */});
/* harmony import */var s=r(69307),n=r(65736),o=r(55609),l=r(31567),i=r(29822),a=r(22866),c=r(43011);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/**
 * This component displays the upload page of the importer.
 *
 * @param {Object}   input                   UploadPage input.
 * @param {Object}   input.state             The import state.
 * @param {boolean}  input.isReady           Whether the upload is finished.
 * @param {Function} input.submitStartImport Callback which is called when start button is clicked.
 */
const u=e=>{let{state:t,isReady:r,submitStartImport:u}=e;const{isSubmitting:p,errorMsg:d}=t;return(0,s.createElement)("section",{className:"sensei-data-port-step sensei-upload-page"},(0,s.createElement)("header",{className:"sensei-data-port-step__header"},(0,s.createElement)(c.H,null,(0,n.__)("Import content from a CSV file","sensei-lms")),(0,s.createElement)("p",null,(0,a/* .formatString */.U)((0,n.__)("This tool enables you to import courses, lessons, and questions from a CSV file. Please review the {{link}}documentation{{/link}} to learn more about the expected file structure.","sensei-lms"),{link:
// eslint-disable-next-line jsx-a11y/anchor-has-content
(0,s.createElement)("a",{className:"link__color-secondary",href:"https://senseilms.com/documentation/import/",target:"_blank",type:"external",rel:"noopener noreferrer"})}))),(0,s.createElement)(c/* .Section */.$,{className:"sensei-data-port-step__body",component:"section"},(0,s.createElement)("p",null,(0,n.__)("Choose one or more CSV files to upload from your computer.","sensei-lms")),(0,s.createElement)(l/* ["default"] */.Z,null),(0,s.createElement)("div",{className:"sensei-data-port-step__footer"},null!==d&&(0,s.createElement)(i/* .Notice */.q,{message:d,isError:!0}),(0,s.createElement)(o.Button,{isPrimary:!0,className:"continue-button",disabled:!r||p,onClick:u},(0,n.__)("Continue","sensei-lms")))))};
/***/},
/***/29822:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */q:()=>/* binding */i
/* harmony export */});
/* harmony import */var s=r(69307),n=r(90005),o=r.n(n),l=r(55609);
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
const i=e=>{let{message:t,isError:r}=e;const n=o()({"sensei-data-port-notice__message":!0,error:r});return(0,s.createElement)("div",{className:"sensei-data-port-notice"},r&&(0,s.createElement)(l.Dashicon,{className:"sensei-data-port-notice__icon error",icon:"warning"}),(0,s.createElement)("span",{className:n},t))};
/***/},
/***/17214:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */K:()=>/* binding */l
/* harmony export */});
/* harmony import */var s=r(69307),n=r(90005),o=r.n(n);
/* harmony import */
/**
 * External dependencies
 */
/**
 * @typedef  {Object}   Step
 * @property {string}  key         Unique key for the step.
 * @property {string}  description A description of the step that is going to be displayed.
 * @property {boolean} isActive    True if the step is the currently active one.
 * @property {boolean} isComplete  True if the step is completed.
 */
/**
 * A simple component to display a stepper on data port pages.
 *
 * @param {Step[]} steps The array of the steps.
 */
const l=e=>{let{steps:t}=e;return(0,s.createElement)("ol",{className:"sensei-data-port-steps"},t.map((e=>{const t=o()({active:e.isNext,done:e.isComplete});return(0,s.createElement)("li",{key:e.key,className:t},e.label)})))};
/***/},
/***/49373:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */I:()=>/* binding */n
/* harmony export */});
/* harmony import */var s=r(69307);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Use Sensei color theme.
 *
 * Requires enqueueing the sensei-wp-components stylesheet.
 */
function n(){(0,s.useLayoutEffect)((()=>(document.body.classList.add("sensei-color"),()=>document.body.classList.remove("sensei-color"))))}
/***/},
/***/43011:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */H:()=>/* binding */o
/* harmony export */,$:()=>/* binding */l
/* harmony export */});
/* harmony import */var s=r(69307);
/* harmony import */
/**
 * Section and Header helper component from `@woocommerce/components`.
 */
/**
 * WordPress dependencies
 */
/**
 * Context container for heading level. We start at 2 because the `h1` assumed to be the page header.
 */
const n=(0,s.createContext)(2);
/**
 * These components are used to frame out the page content for accessible heading hierarchy. Instead of defining fixed heading levels
 * (`h2`, `h3`, …) you can use `<H />` to create "section headings", which look to the parent `<Section />`s for the appropriate
 * heading level.
 *
 * @param {Object} props -
 * @return {Object} -
 */function o(e){return(0,s.createElement)(n.Consumer,null,(t=>{const r="h"+Math.min(t,6);return(0,s.createElement)(r,e)}))}
/**
 * The section wrapper, used to indicate a sub-section (and change the header level context).
 *
 * @param {Object} props
 * @param {string} props.component
 * @param {Node}   props.children
 * @return {Object} -
 */function l(e){let{component:t,children:r,...o}=e;const l=t||"div";return(0,s.createElement)(n.Consumer,null,(e=>(0,s.createElement)(n.Provider,{value:e+1},!1===t?r:(0,s.createElement)(l,o,r))))}
/***/},
/***/16400:
/***/(e,t,r)=>{"use strict";
/* unused harmony export preloadedDataUsedOnceMiddleware */
/* harmony import */var s=r(96483),n=r(86989);
/* harmony import */r.n(n)().use(
/**
 * WordPress dependencies
 */
/**
 * Use data preloaded with createPreloadingMiddleware only once.
 */
function(){const e={};return(t,r)=>("string"!=typeof t.path||"GET"!==t.method&&t.method||(e[t.path]?t.path=(0,s.addQueryArgs)(t.path,{__skip_preload:1}):e[t.path]=!0),r(t))}())}
/***/,
/***/20832:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */GI:()=>/* binding */n
/* harmony export */});
/* unused harmony exports createReducerFromActionMap, createStore */
/* harmony import */r(9818);
/* harmony import */
/**
 * WordPress dependencies
 */
// We register the store in the global scope to avoid registering it multiple times.
// The reason to be in the global scope is that some times we have different built files using the same source.
window.senseiStores=window.senseiStores||[];const{senseiStores:s}=window,n=(e,t,r,s)=>function*(){e&&(yield{type:e});try{const e=yield*t(...arguments);yield{type:r,data:e}}catch(e){yield{type:s,error:e}}}
/**
 * Create reducer from a map of action type keys and reducer function.
 *
 * @example
 *  createSimpleReducer({ SAMPLE_ACTION: ( { actionProperty }, state ) => ({ ...state, actionProperty }) )
 *
 * @param {Object} reducers     Map of action type - reducer functions.
 * @param {Object} defaultState Default state.
 *
 * @return {Function} Store reducer.
 */;
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
/***/22866:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */U:()=>/* binding */l
/* harmony export */});
/* unused harmony export formattingComponents */
/* harmony import */var s=r(69307),n=r(19219);
/* harmony import */
/**
 * External dependencies
 */
const o={em:(0,s.createElement)("em",null),strong:(0,s.createElement)("strong",null),code:(0,s.createElement)("code",null),small:(0,s.createElement)("small",null),sub:(0,s.createElement)("sub",null),sup:(0,s.createElement)("sup",null),br:(0,s.createElement)("br",null),p:(0,s.createElement)("p",null),del:(0,s.createElement)("del",null)},l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,n/* ["default"] */.Z)({mixedString:e,components:{...o,...t}})};
/**
 * Interpolate components and create a node from the given template string.
 *
 * @example formatString(' Welcome to {{strong}}Sensei{{/strong}}!')
 *
 * @param {string} mixedString Template string.
 * @param {Object} components  Replacements.
 */}
/***/,
/***/70761:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */g:()=>/* binding */n
/* harmony export */});
/* unused harmony export postTypeLabels */
/* harmony import */var s=r(65736);
/* harmony import */
/**
 * WordPress dependencies
 */
(0,s.__)("Courses","sensei-lms"),(0,s.__)("Lessons","sensei-lms"),(0,s.__)("Questions","sensei-lms");const n={error:(0,s.__)("Error","sensei-lms"),warning:(0,s.__)("Warning","sensei-lms")}}
/***/,
/***/99196:
/***/e=>{"use strict";e.exports=window.React}
/***/,
/***/92819:
/***/e=>{"use strict";e.exports=window.lodash}
/***/,
/***/86989:
/***/e=>{"use strict";e.exports=window.wp.apiFetch}
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
/***/69307:
/***/e=>{"use strict";e.exports=window.wp.element}
/***/,
/***/65736:
/***/e=>{"use strict";e.exports=window.wp.i18n}
/***/,
/***/70444:
/***/e=>{"use strict";e.exports=window.wp.primitives}
/***/,
/***/96483:
/***/e=>{"use strict";e.exports=window.wp.url}
/***/,
/***/90005:
/***/(e,t)=>{var r;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */!function(){"use strict";var s={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=l(e,o(r)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)s.call(e,r)&&e[r]&&(t=l(t,r));return t}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()}
/***/
/******/},t={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function r(s){
/******/ // Check if module is in cache
/******/var n=t[s];
/******/if(void 0!==n)
/******/return n.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var o=t[s]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[s](o,o.exports,r),o.exports;
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
/******/for(var s in t)
/******/r.o(t,s)&&!r.o(e,s)&&
/******/Object.defineProperty(e,s,{enumerable:!0,get:t[s]})
/******/;
/******/},
/******/r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)
/******/,
/******/ // define __esModule on exports
/******/r.r=e=>{
/******/"undefined"!=typeof Symbol&&Symbol.toStringTag&&
/******/Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})
/******/,Object.defineProperty(e,"__esModule",{value:!0})}
/******/,
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(()=>{"use strict";
/* harmony import */var e=r(69307),t=r(65736),s=r(9818),n=r(49373),o=r(17214),l=r(51842),i=r(55609);
/* harmony import */r(16400);
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
(0,l/* ["default"] */.Z)();(0,e.render)((0,e.createElement)((()=>{const{error:r,navigationSteps:l}=(0,s.useSelect)((e=>{const t=e("sensei/import");return{error:t.getFetchError(),navigationSteps:t.getNavigationSteps()}}),[]),{loadCurrentJobState:a}=(0,s.useDispatch)("sensei/import");if((0,e.useLayoutEffect)((()=>{a()}),[a]),(0,n/* .useSenseiColorTheme */.I)(),r)return(0,e.createElement)(i.Notice,{status:"error",isDismissible:!1},(0,t.__)("An error has occurred while fetching the data. Please try again later!","sensei-lms"),(0,e.createElement)("br",null),(0,t.__)("Error details:","sensei-lms")," ",r.message);const c=l.find((e=>e.isNext));return(0,e.createElement)("div",{className:"sensei-page-import"},(0,e.createElement)(o/* .DataPortStepper */.K,{steps:l}),c.container)}),null),document.getElementById("sensei-import-page"))})()})
/******/();