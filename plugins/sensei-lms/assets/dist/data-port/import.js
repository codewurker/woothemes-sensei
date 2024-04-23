/******/(()=>{// webpackBootstrap
/******/var e={
/***/8598:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>o
/* harmony export */});
/* harmony import */var n=r(99196),s=r(70444);
/* harmony import */
/**
 * WordPress dependencies
 */
const o=(0,n.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(s.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}));
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
 */e.exports=function(e,t,r,n,s,o,a,i){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,s,o,a,i],u=0;(l=new Error(t.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}// we don't care about invariant's own frame
throw l.framesToPop=1,l}}}
/***/,
/***/82264:
/***/(e,t,r)=>{"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */var n=r(33743);
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */e.exports=n}
/***/,
/***/19219:
/***/(e,t,r)=>{"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=i(r(99196)),o=i(r(40349)),a=i(r(58470));
/**
                                                                                                                                                                                                                                                                               * External Dependencies
                                                                                                                                                                                                                                                                               */
/**
 * Internal Dependencies
 */function i(e){return e&&e.__esModule?e:{default:e}}var l=void 0;function c(e,t){var r,a,i,u,p,m,d,f,v=[],g={};for(m=0;m<e.length;m++)if("string"!==(p=e[m]).type){
// component node should at least be set
if(!t.hasOwnProperty(p.value)||void 0===t[p.value])throw new Error("Invalid interpolation, missing component node: `"+p.value+"`");
// should be either ReactElement or null (both type "object"), all other types deprecated
if("object"!==n(t[p.value]))throw new Error("Invalid interpolation, component node must be a ReactElement or null: `"+p.value+"`","\n> "+l);
// we should never see a componentClose token in this loop
if("componentClose"===p.type)throw new Error("Missing opening component token: `"+p.value+"`");if("componentOpen"===p.type){r=t[p.value],i=m;break}
// componentSelfClosing token
v.push(t[p.value])}else v.push(p.value);return r&&(u=function(e,t){var r,n,s=t[e],o=0;for(n=e+1;n<t.length;n++)if((r=t[n]).value===s.value){if("componentOpen"===r.type){o++;continue}if("componentClose"===r.type){if(0===o)return n;o--}}
// if we get this far, there was no matching close token
throw new Error("Missing closing component token `"+s.value+"`")}(i,e),d=c(e.slice(i+1,u),t),a=s.default.cloneElement(r,{},d),v.push(a),u<e.length-1&&(f=c(e.slice(u+1),t),v=v.concat(f))),1===v.length?v[0]:(v.forEach((function(e,t){e&&(g["interpolation-child-"+t]=e)})),(0,o.default)(g))}t.Z=function(e){var t=e.mixedString,r=e.components,s=e.throwErrors;if(l=t,!r)return t;if("object"!==(void 0===r?"undefined":n(r))){if(s)throw new Error("Interpolation Error: unable to process `"+t+"` because components is not an object");return t}var o=(0,a.default)(t);try{return c(o,r)}catch(e){if(s)throw new Error("Interpolation Error: unable to process `"+t+"` because of error `"+e.message+"`");return t}}}
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
 */var n=r(99196),s="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=r(33743),a=r(87081),i=r(82264),l=".",c=":",u="function"==typeof Symbol&&Symbol.iterator,p="@@iterator";function m(e,t){
// Do some typechecking here since we call this blindly. We want to ensure
// that we don't block potential future ES APIs.
return e&&"object"==typeof e&&null!=e.key?(r=e.key,n={"=":"=0",":":"=2"},"$"+(""+r).replace(/[=:]/g,(function(e){return n[e]}))):t.toString(36);
// Implicit key determined by the index in the set
var r,n}function d(e,t,r,n){var o,i=typeof e;if("undefined"!==i&&"boolean"!==i||(
// All of the above are perceived as null.
e=null),null===e||"string"===i||"number"===i||
// The following is inlined from ReactElement. This means we can optimize
// some checks. React Fiber also inlines this logic for similar purposes.
"object"===i&&e.$$typeof===s)return r(n,e,
// If it's the only child, treat the name as if it was wrapped in an array
// so that it's consistent if the number of children grows.
""===t?l+m(e,0):t),1;var f=0,v=""===t?l:t+c;// Count of children found in the current subtree.
if(Array.isArray(e))for(var g=0;g<e.length;g++)f+=d(o=e[g],v+m(o,g),r,n);else{var y=// Before Symbol spec.
function(e){var t=e&&(u&&e[u]||e[p]);if("function"==typeof t)return t}(e);if(y){0;for(var h,E=y.call(e),b=0;!(h=E.next()).done;)f+=d(o=h.value,v+m(o,b++),r,n)}else if("object"===i){0;var w=""+e;a(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===w?"object with keys {"+Object.keys(e).join(", ")+"}":w,"")}}return f}var f=/\/+/g;function v(e){return(""+e).replace(f,"$&/")}var g,y,h=E,E=function(e){var t=this;if(t.instancePool.length){var r=t.instancePool.pop();return t.call(r,e),r}return new t(e)},b=function(e){var t=this;a(e instanceof t,"Trying to release an instance into a pool of a different type."),e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)};function w(e,t,r,n){this.result=e,this.keyPrefix=t,this.func=r,this.context=n,this.count=0}function _(e,t,r){var s,a,i=e.result,l=e.keyPrefix,c=e.func,u=e.context,p=c.call(u,t,e.count++);Array.isArray(p)?S(p,i,r,o.thatReturnsArgument):null!=p&&(n.isValidElement(p)&&(s=p,a=
// Keep both the (mapped) and old keys if they differ, just as
// traverseAllChildren used to do for objects as children
l+(!p.key||t&&t.key===p.key?"":v(p.key)+"/")+r,p=n.cloneElement(s,{key:a},void 0!==s.props?s.props.children:void 0)),i.push(p))}function S(e,t,r,n,s){var o="";null!=r&&(o=v(r)+"/");var a=w.getPooled(t,o,n,s);!function(e,t,r){null==e||d(e,"",t,r)}(e,_,a),w.release(a)}w.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},g=function(e,t,r,n){var s=this;if(s.instancePool.length){var o=s.instancePool.pop();return s.call(o,e,t,r,n),o}return new s(e,t,r,n)},(y=w).instancePool=[],y.getPooled=g||h,y.poolSize||(y.poolSize=10),y.release=b;e.exports=function(e){if("object"!=typeof e||!e||Array.isArray(e))return i(!1,"React.addons.createFragment only accepts a single object. Got: %s",e),e;if(n.isValidElement(e))return i(!1,"React.addons.createFragment does not accept a ReactElement without a wrapper object."),e;a(1!==e.nodeType,"React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");var t=[];for(var r in e)S(e[r],t,r,o.thatReturnsArgument);return t}}
/***/,
/***/90631:
/***/(e,t,r)=>{"use strict";r.r(t),
/* harmony export */r.d(t,{
/* harmony export */fetchFromAPI:()=>/* binding */m
/* harmony export */,wait:()=>/* binding */d
/* harmony export */,loadCurrentJobState:()=>/* binding */f
/* harmony export */,updateJobState:()=>/* binding */v
/* harmony export */,pollJobProgress:()=>/* binding */g
/* harmony export */,setJobState:()=>/* binding */y
/* harmony export */,submitStartImport:()=>/* binding */h
/* harmony export */,startImport:()=>/* binding */E
/* harmony export */,successStartImport:()=>/* binding */b
/* harmony export */,errorStartImport:()=>/* binding */w
/* harmony export */,uploadFileForLevel:()=>/* binding */_
/* harmony export */,throwEarlyUploadError:()=>/* binding */S
/* harmony export */,startFileUploadAction:()=>/* binding */Z
/* harmony export */,successFileUpload:()=>/* binding */x
/* harmony export */,errorFileUpload:()=>/* binding */R
/* harmony export */,deleteLevelFile:()=>/* binding */k
/* harmony export */,startDeleteLevelFileAction:()=>/* binding */O
/* harmony export */,successDeleteLevelFileAction:()=>/* binding */T
/* harmony export */,errorDeleteLevelFileAction:()=>/* binding */F
/* harmony export */,resetState:()=>/* binding */I
/* harmony export */,restartImporter:()=>/* binding */A
/* harmony export */});
/* harmony import */var n=r(25463),s=r(20832),o=r(70468),a=r(97769),i=regeneratorRuntime.mark(v),l=regeneratorRuntime.mark(h),c=regeneratorRuntime.mark(_),u=regeneratorRuntime.mark(k),p=regeneratorRuntime.mark(A),m=function(e){return{type:n/* .FETCH_FROM_API */.nx,request:e}},d=function(e){return{type:n/* .WAIT */.wF,timeout:e}},f=(0,s/* .composeFetchAction */.GI)(n/* .START_LOAD_CURRENT_JOB_STATE */.jn,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m({path:(0,a/* .buildJobEndpointUrl */.D)(n/* .API_SPECIAL_ACTIVE_JOB_ID */.BL)});case 2:return t=e.sent,e.abrupt("return",(0,o/* .normalizeImportData */.wh)(t));case 4:case"end":return e.stop()}}),e)})),n/* .SUCCESS_LOAD_CURRENT_JOB_STATE */.H1,n/* .ERROR_LOAD_CURRENT_JOB_STATE */.sw);
/* harmony import */
/**
 * Update job state in the background.
 *
 * @param {string} jobId The job ID.
 */
function v(e){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,m({path:(0,a/* .buildJobEndpointUrl */.D)(e)});case 3:return t=r.sent,r.next=6,y((0,o/* .normalizeImportData */.wh)(t));case 6:r.next=10;break;case 8:r.prev=8,r.t0=r.catch(0);case 10:case"end":return r.stop()}}),i,null,[[0,8]])}
/**
 * Run job batches and query progress until it is completed.
 *
 * @param {string} jobId Job ID.
 */var g=regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m({path:(0,a/* .buildJobEndpointUrl */.D)(t,["process"]),method:"POST"});case 3:return r=n.sent,n.next=6,y((0,o/* .normalizeImportData */.wh)(r));case 6:if("completed"===r.status.status){n.next=9;break}return n.delegateYield(e(t),"t0",9);case 9:n.next=16;break;case 11:return n.prev=11,n.t1=n.catch(0),n.next=15,d(2e3);case 15:return n.delegateYield(e(t),"t2",16);case 16:case"end":return n.stop()}}),e,null,[[0,11]])})),y=function(e){return{type:n/* .SET_JOB_STATE */.gL,data:e}};
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
 */
/**
 * Start import.
 *
 * @param {string}   jobId               The job identifier.
 * @param {Object}   [options]
 * @param {Function} [options.onSuccess] On Success handler.
 * @param {Function} [options.onError]   On Error handler.
 */
function h(e){var t,r,n,s,i=arguments;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return r=(t=i.length>1&&void 0!==i[1]?i[1]:{}).onSuccess,n=t.onError,l.next=3,E();case 3:if(l.prev=3,e){l.next=8;break}return l.next=7,w({message:null});case 7:return l.abrupt("return");case 8:return l.next=10,m({path:(0,a/* .buildJobEndpointUrl */.D)(e,["start"]),method:"POST"});case 10:return s=l.sent,l.next=13,b((0,o/* .normalizeImportData */.wh)(s));case 13:r&&r(),l.next=21;break;case 16:return l.prev=16,l.t0=l.catch(3),l.next=20,w(l.t0);case 20:n&&n(l.t0);case 21:case"end":return l.stop()}}),l,null,[[3,16]])}
/**
 * @typedef  {Object} StartImportAction
 * @property {string} type Action type.
 */
/**
 * Start action to start import.
 *
 * @return {StartImportAction} Start import action.
 */var E=function(){return{type:n/* .START_IMPORT */.FG}},b=function(e){return{type:n/* .SUCCESS_START_IMPORT */.XM,data:e}},w=function(e){return{type:n/* .ERROR_START_IMPORT */.UX,error:e}};
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
 */
/**
 * Upload a file for a level.
 *
 * @param {string}   jobId               The job identifier.
 * @param {string}   level               Level identifier.
 * @param {Object}   uploadData          Data to submit.
 * @param {Object}   [options]
 * @param {Function} [options.onSuccess] Callback on success.
 * @param {Function} [options.onError]   Callback on error.
 */
function _(e,t,r){var s,i,l,u,p=arguments;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return i=(s=p.length>3&&void 0!==p[3]?p[3]:{}).onSuccess,l=s.onError,c.next=3,Z(t,r);case 3:return c.prev=3,e||(e=n/* .API_SPECIAL_ACTIVE_JOB_ID */.BL),c.next=7,m({path:(0,a/* .buildJobEndpointUrl */.D)(e,["file",t]),method:"POST",body:r});case 7:return u=c.sent,c.next=10,x(t,(0,o/* .normalizeImportData */.wh)(u));case 10:i&&i(),c.next=18;break;case 13:return c.prev=13,c.t0=c.catch(3),c.next=17,R(t,c.t0);case 17:l&&l(c.t0);case 18:case"end":return c.stop()}}),c,null,[[3,13]])}
/**
 * Throw an early upload error.
 *
 * @param {string} level    Level identifier.
 * @param {string} errorMsg Error object or false.
 */var S=function(e,t){return R(e,{code:"",message:t})},Z=function(e,t){return{type:n/* .START_UPLOAD_IMPORT_DATA_FILE */.fo,level:e,uploadData:t}},x=function(e,t){return{type:n/* .SUCCESS_UPLOAD_IMPORT_DATA_FILE */.i7,level:e,data:t}},R=function(e,t){return{type:n/* .ERROR_UPLOAD_IMPORT_DATA_FILE */.wO,level:e,error:t}};
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
 */
/**
 * Delete a level file.
 *
 * @param {string} jobId The job identifier.
 * @param {string} level Level identifier.
 */
function k(e,t){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O(t);case 2:if(n.prev=2,e){n.next=7;break}return n.next=6,F({message:null});case 6:return n.abrupt("return");case 7:return n.next=9,m({path:(0,a/* .buildJobEndpointUrl */.D)(e,["file",t]),method:"DELETE"});case 9:return r=n.sent,n.next=12,T(t,(0,o/* .normalizeImportData */.wh)(r));case 12:n.next=18;break;case 14:return n.prev=14,n.t0=n.catch(2),n.next=18,F(t,n.t0);case 18:case"end":return n.stop()}}),u,null,[[2,14]])}
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
 */var O=function(e){return{type:n/* .START_DELETE_IMPORT_DATA_FILE */.AI,level:e}},T=function(e,t){return{type:n/* .SUCCESS_DELETE_IMPORT_DATA_FILE */.Wi,level:e,data:t}},F=function(e,t){return{type:n/* .ERROR_DELETE_IMPORT_DATA_FILE */.sW,level:e,error:t}},I=function(){return{type:n/* .RESET_STATE */.so}};
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
 */
/**
 * Restart importer.
 */
function A(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:return e.next=4,f();case 4:case"end":return e.stop()}}),p)}
/***/},
/***/25463:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Lt:()=>/* binding */n
/* harmony export */,BL:()=>/* binding */s
/* harmony export */,nx:()=>/* binding */o
/* harmony export */,wF:()=>/* binding */a
/* harmony export */,jn:()=>/* binding */i
/* harmony export */,H1:()=>/* binding */l
/* harmony export */,sw:()=>/* binding */c
/* harmony export */,gL:()=>/* binding */u
/* harmony export */,FG:()=>/* binding */p
/* harmony export */,XM:()=>/* binding */m
/* harmony export */,UX:()=>/* binding */d
/* harmony export */,fo:()=>/* binding */f
/* harmony export */,i7:()=>/* binding */v
/* harmony export */,wO:()=>/* binding */g
/* harmony export */,AI:()=>/* binding */y
/* harmony export */,Wi:()=>/* binding */h
/* harmony export */,sW:()=>/* binding */E
/* harmony export */,ao:()=>/* binding */b
/* harmony export */,$L:()=>/* binding */w
/* harmony export */,so:()=>/* binding */_
/* harmony export */});
/**
 * Data import constants.
 */
var n="/sensei-internal/v1/import/",s="active",o="FETCH_FROM_API",a="WAIT",i="START_LOAD_CURRENT_JOB_STATE",l="SUCCESS_LOAD_CURRENT_JOB_STATE",c="ERROR_LOAD_CURRENT_JOB_STATE",u="SET_JOB_STATE",p="START_IMPORT",m="SUCCESS_START_IMPORT",d="ERROR_START_IMPORT",f="START_UPLOAD_IMPORT_DATA_FILE",v="SUCCESS_UPLOAD_IMPORT_DATA_FILE",g="ERROR_UPLOAD_IMPORT_DATA_FILE",y="START_DELETE_IMPORT_DATA_FILE",h="SUCCESS_DELETE_IMPORT_DATA_FILE",E="ERROR_DELETE_IMPORT_DATA_FILE",b="SET_IMPORT_LOG",w="ERROR_FETCH_IMPORT_LOG",_="RESET_STATE"}
/***/,
/***/42588:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>l
/* harmony export */});
/* harmony import */var n,s=r(64649),o=r(86989),a=r.n(o),i=r(25463);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/* harmony default export */const l=(n={},(0,s/* ["default"] */.Z)(n,i/* .FETCH_FROM_API */.nx,(function(e){var t=e.request;return a()(t)})),(0,s/* ["default"] */.Z)(n,i/* .WAIT */.wF,(function(e){var t=e.timeout;return new Promise((function(e){return setTimeout(e,t)}))})),n);
/***/},
/***/51842:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>c
/* harmony export */});
/* harmony import */var n=r(9818),s=r(19790),o=r(90631),a=r(50330),i=r(42588),l=r(43802);
/* harmony import */
/* harmony default export */const c=function(){(0,n.registerStore)("sensei/import",{reducer:s/* ["default"] */.Z,actions:o,selectors:a,controls:i/* ["default"] */.Z,resolvers:l})};
/***/},
/***/70468:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */wh:()=>/* binding */c
/* harmony export */});
/* unused harmony exports normalizeUploadsState, parseCompletedSteps */
/* harmony import */var n=r(50189),s=r(53782),o=r(66886),a=["id","files","status","results"],i=function(e){var t={};return Object.entries(e).forEach((function(e){var r=(0,o/* ["default"] */.Z)(e,2),n=r[0],s=r[1];s.name&&(t[n]={filename:s.name,isUploaded:!0})})),t},l=function(e){return"pending"===e.status?["upload"]:"completed"===e.status?["upload","progress"]:[]},c=function(e){var t=e.id,r=e.files,o=e.status,c=e.results,u=(0,s/* ["default"] */.Z)(e,a);return(0,n/* ["default"] */.Z)((0,n/* ["default"] */.Z)({},u),{},{jobId:t,progress:o,upload:i(r||[]),completedSteps:l(o||{}),done:{results:c}})};
/* harmony import */}
/***/,
/***/19790:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>c
/* harmony export */});
/* harmony import */var n=r(64649),s=r(50189),o=r(92819),a=r(25463),i={jobId:null,isFetching:!0,fetchError:!1,completedSteps:[],upload:{isSubmitting:!1,errorMsg:null,courses:{isUploaded:!1,isUploading:!1,isDeleting:!1,hasError:!1,errorMsg:null,filename:null},lessons:{isUploaded:!1,isUploading:!1,isDeleting:!1,hasError:!1,errorMsg:null,filename:null},questions:{isUploaded:!1,isUploading:!1,isDeleting:!1,hasError:!1,errorMsg:null,filename:null}},progress:{status:"",percentage:0},done:{results:null,logs:null}},l=function(e,t,r){return(0,s/* ["default"] */.Z)((0,s/* ["default"] */.Z)({},e),{},{upload:(0,s/* ["default"] */.Z)((0,s/* ["default"] */.Z)({},e.upload),{},(0,n/* ["default"] */.Z)({},t,r))})};
/* harmony import */
/**
 * Data importer reducer.
 *
 * @param {Object}         state  Current state.
 * @param {{type: string}} action Action to update the state.
 *
 * @return {Object} State updated.
 */
/* harmony default export */const c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a/* .START_LOAD_CURRENT_JOB_STATE */.jn:return(0,s/* ["default"] */.Z)((0,s/* ["default"] */.Z)({},e),{},{isFetching:!0,fetchError:!1});case a/* .SUCCESS_LOAD_CURRENT_JOB_STATE */.H1:return(0,s/* ["default"] */.Z)((0,s/* ["default"] */.Z)({},(0,o.merge)({},e,t.data)),{},{isFetching:!1});case a/* .SET_JOB_STATE */.gL:return(0,s/* ["default"] */.Z)({},(0,o.merge)({},e,t.data));case a/* .ERROR_LOAD_CURRENT_JOB_STATE */.sw:return(0,s/* ["default"] */.Z)((0,s/* ["default"] */.Z)({},e),{},{isFetching:!1,fetchError:t.error});case a/* .START_IMPORT */.FG:return(0,s/* ["default"] */.Z)((0,s/* ["default"] */.Z)({},e),{},{upload:(0,s/* ["default"] */.Z)((0,s/* ["default"] */.Z)({},e.upload),{},{errorMsg:null,isSubmitting:!0})});case a/* .ERROR_START_IMPORT */.UX:return(0,s/* ["default"] */.Z)((0,s/* ["default"] */.Z)({},e),{},{upload:(0,s/* ["default"] */.Z)((0,s/* ["default"] */.Z)({},e.upload),{},{errorMsg:t.error.message,isSubmitting:!1})});case a/* .SUCCESS_START_IMPORT */.XM:return(0,s/* ["default"] */.Z)((0,s/* ["default"] */.Z)({},e),{},{completedSteps:t.data.completedSteps,upload:(0,s/* ["default"] */.Z)((0,s/* ["default"] */.Z)({},e.upload),{},{isSubmitting:!1}),progress:(0,s/* ["default"] */.Z)((0,s/* ["default"] */.Z)({},e.progress),t.data.progress)});case a/* .START_UPLOAD_IMPORT_DATA_FILE */.fo:return l(e,t.level,(0,s/* ["default"] */.Z)((0,s/* ["default"] */.Z)({},e.upload[t.level]),{},{isUploaded:!1,isUploading:!0,isDeleting:!1,hasError:!1,errorMsg:null,filename:null}));case a/* .SUCCESS_UPLOAD_IMPORT_DATA_FILE */.i7:return l((0,s/* ["default"] */.Z)((0,s/* ["default"] */.Z)({},e),{},{jobId:t.data.jobId}),t.level,(0,s/* ["default"] */.Z)((0,s/* ["default"] */.Z)((0,s/* ["default"] */.Z)({},e.upload[t.level]),t.data.upload[t.level]),{},{isUploading:!1,isDeleting:!1,hasError:!1,errorMsg:null}));case a/* .ERROR_UPLOAD_IMPORT_DATA_FILE */.wO:return l(e,t.level,(0,s/* ["default"] */.Z)((0,s/* ["default"] */.Z)({},e.upload[t.level]),{},{isUploaded:!1,isUploading:!1,isDeleting:!1,hasError:!0,errorMsg:t.error.message,filename:null}));case a/* .START_DELETE_IMPORT_DATA_FILE */.AI:return l(e,t.level,(0,s/* ["default"] */.Z)((0,s/* ["default"] */.Z)({},e.upload[t.level]),{},{isDeleting:!0}));case a/* .SUCCESS_DELETE_IMPORT_DATA_FILE */.Wi:return l(e,t.level,(0,s/* ["default"] */.Z)((0,s/* ["default"] */.Z)({},t.data.upload[t.level]),{},{isUploaded:!1,isDeleting:!1,hasError:!1,errorMsg:null,filename:null}));case a/* .ERROR_DELETE_IMPORT_DATA_FILE */.sW:return l(e,t.level,(0,s/* ["default"] */.Z)((0,s/* ["default"] */.Z)({},e.upload[t.level]),{},{isUploaded:!1,isDeleting:!1,hasError:!0,errorMsg:t.error.message}));case a/* .SET_IMPORT_LOG */.ao:return(0,s/* ["default"] */.Z)((0,s/* ["default"] */.Z)({},e),{},{done:(0,s/* ["default"] */.Z)((0,s/* ["default"] */.Z)({},e.done),{},{logs:t.data})});case a/* .ERROR_FETCH_IMPORT_LOG */.$L:return(0,s/* ["default"] */.Z)((0,s/* ["default"] */.Z)({},e),{},{done:(0,s/* ["default"] */.Z)((0,s/* ["default"] */.Z)({},e.done),{},{logs:{fetchError:t.error}})});case a/* .RESET_STATE */.so:return(0,s/* ["default"] */.Z)({},i);default:return e}};
/***/},
/***/43802:
/***/(e,t,r)=>{"use strict";r.r(t),
/* harmony export */r.d(t,{
/* harmony export */getLogsBySeverity:()=>/* binding */i
/* harmony export */});
/* harmony import */var n=r(25463),s=r(20832),o=r(90631),a=r(97769),i=(0,s/* .composeFetchAction */.GI)(null,regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,o.fetchFromAPI)({path:(0,a/* .buildJobEndpointUrl */.D)(t,["logs"])});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})),n/* .SET_IMPORT_LOG */.ao,n/* .ERROR_FETCH_IMPORT_LOG */.$L);
/* harmony import */}
/***/,
/***/50330:
/***/(e,t,r)=>{"use strict";r.r(t),
/* harmony export */r.d(t,{
/* harmony export */isFetching:()=>/* binding */l
/* harmony export */,getJobId:()=>/* binding */c
/* harmony export */,getFetchError:()=>/* binding */u
/* harmony export */,getStepData:()=>/* binding */p
/* harmony export */,getNavigationSteps:()=>/* binding */m
/* harmony export */,isCompleteStep:()=>/* binding */d
/* harmony export */,isReadyToStart:()=>/* binding */f
/* harmony export */,getUploadedLevelKeys:()=>/* binding */v
/* harmony export */,getSuccessResults:()=>/* binding */g
/* harmony export */,getLogsBySeverity:()=>/* binding */y
/* harmony export */,getLogsFetchError:()=>/* binding */h
/* harmony export */});
/* harmony import */var n=r(50189),s=r(92819),o=r(47854),a=r(35345),i=["course","lesson","question"],l=function(e){return e.isFetching},c=function(e){return e.jobId},u=function(e){return e.fetchError},p=function(e,t){return e[t]},m=function(e){var t=e.completedSteps,r=o/* .steps.map */.S.map((function(e){return(0,n/* ["default"] */.Z)((0,n/* ["default"] */.Z)({},e),{},{isComplete:t.includes(e.key),isNext:!1})}));return(r.find((function(e){return!e.isComplete}))||r[0]).isNext=!0,r},d=function(e,t){return e.completedSteps.includes(t)},f=function(e){var t=a/* .levels.map */.g.map((function(t){var r=t.key;return e.upload[r]})),r=t.some((function(e){return e.isUploaded})),n=t.some((function(e){return e.isUploading||e.isDeleting}));return r&&!n},v=function(e){var t=e.upload;return a/* .levels.filter */.g.filter((function(e){var r=e.key;return t[r].isUploaded})).map((function(e){return e.key}))},g=function(e){var t=e.done;return i.map((function(e){return{key:e,count:(0,s.get)(t,["results",e,"success"],0)+(0,s.get)(t,["results",e,"warning"],0)}})).filter((function(e){return e.count>0}))},y=function(e){var t=e.done,r=e.upload,o=(0,s.get)(t,"logs.items",[]).map((function(e){return(0,n/* ["default"] */.Z)((0,n/* ["default"] */.Z)({},e),{},{filename:(0,s.get)(r,e.type+"s.filename","")})}));return(0,s.groupBy)(o,"severity")},h=function(e){var t=e.done;return(0,s.get)(t,"logs.fetchError",!1)};
/* harmony import */}
/***/,
/***/21051:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */w:()=>/* binding */c
/* harmony export */});
/* harmony import */var n=r(69307),s=r(65736),o=r(55609),a=r(74849),i=r(79801),l=r(43011),__=s.__,c=function(e){var t=e.restartImporter,r=e.successResults,s=void 0===r?[]:r,c=e.logs,u=void 0===c?{}:c,p=e.isFetching,m=void 0!==p&&p,d=e.fetchError,f=void 0!==d&&d,v=e.retry,g=(0,n.createElement)(n.Fragment,null,u.error&&u.error.length>0&&(0,n.createElement)("section",{className:"sensei-data-port-step"},(0,n.createElement)(l/* .Section */.$,{className:"sensei-data-port-step__body"},(0,n.createElement)("h2",null,__("Failed","sensei-lms")),(0,n.createElement)("p",{className:"sensei-import-done__section-description"},__("The following content was not imported. Please make the necessary corrections to the import file and try again.","sensei-lms")),(0,n.createElement)(a/* .ImportLog */._,{items:u.error,type:"error"}))),u.notice&&u.notice.length>0&&(0,n.createElement)("section",{className:"sensei-data-port-step"},(0,n.createElement)(l/* .Section */.$,{className:"sensei-data-port-step__body"},(0,n.createElement)("h2",null,__("Partial","sensei-lms")),(0,n.createElement)("p",{className:"sensei-import-done__section-description"},__("The following content was partially imported. The import process encountered some issues that you can resolve manually by clicking the link and making the necessary adjustments.","sensei-lms")),(0,n.createElement)(a/* .ImportLog */._,{items:u.notice,type:"warning"}))));return m?g=(0,n.createElement)("div",{className:"sensei-import-done__log-fetching"},(0,n.createElement)(o.Spinner,null)," ",__("Fetching log details…","sensei-lms")):f&&(g=(0,n.createElement)(o.Notice,{status:"error",isDismissible:!1},__("Failed to load import log.","sensei-lms")," ",f.message,(0,n.createElement)(o.Button,{onClick:v,isLink:!0,isSmall:!0},__("Retry","sensei-lms")))),(0,n.createElement)(n.Fragment,null,(0,n.createElement)("section",{className:"sensei-data-port-step"},(0,n.createElement)(l/* .Section */.$,{className:"sensei-data-port-step__body"},(0,n.createElement)("h2",null,__("Completed","sensei-lms")),s.length>0?(0,n.createElement)(n.Fragment,null,(0,n.createElement)("p",{className:"sensei-import-done__section-description"},__("The following content was imported:","sensei-lms")),(0,n.createElement)(i/* ["default"] */.Z,{successResults:s})):(0,n.createElement)("p",{className:"sensei-import-done__section-description"},__("No content was imported.","sensei-lms")),(0,n.createElement)("div",{className:"sensei-data-port-step__footer"},(0,n.createElement)(o.Button,{isPrimary:!0,onClick:t},__("Import More Content","sensei-lms"))))),g)};
/* harmony import */}
/***/,
/***/74849:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */_:()=>/* binding */i
/* harmony export */});
/* harmony import */var n=r(69307),s=r(92819),o=r(65736),a=r(70761),__=o.__,i=function(e){var t=e.items,r=e.type;return(0,n.createElement)("div",{className:"sensei-import-done__log-data"},(0,n.createElement)("table",{className:"sensei-data-table"},(0,n.createElement)("thead",null,(0,n.createElement)("tr",null,"error"===r&&(0,n.createElement)("th",null,__("File","sensei-lms")),(0,n.createElement)("th",null,__("Title","sensei-lms")),(0,n.createElement)("th",null,__("Line #","sensei-lms")),(0,n.createElement)("th",null,a/* .logTypeLabels */.g[r]))),(0,n.createElement)("tbody",null,t.map((function(e){return(0,n.createElement)("tr",{key:(0,s.kebabCase)(Object.entries(e).join(""))},"error"===r&&(0,n.createElement)("td",null,e.filename),(0,n.createElement)("td",null,(t=e.post.title,(o=e.post.edit_link)?(0,n.createElement)("a",{href:o,target:"_blank",rel:"noreferrer"},t):t)),(0,n.createElement)("td",null,e.line),(0,n.createElement)("td",null,e.message));var t,o})))))};
/* harmony import */}
/***/,
/***/79801:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>o
/* harmony export */});
/* harmony import */var n=r(69307),s=r(65736),_n=s._n;
/* harmony import */
/* harmony default export */const o=function(e){var t=e.successResults;return(0,n.createElement)("ul",{className:"sensei-import-bullet-list"},t.map((function(e){var t=e.key,r=e.count;return(0,n.createElement)("li",{key:t},r," ",function(e){var t=e.key,r=e.count;return{course:_n("course","courses",r,"sensei-lms"),lesson:_n("lesson","lessons",r,"sensei-lms"),question:_n("question","questions",r,"sensei-lms")}[t]}({key:t,count:r}))})))};
/***/},
/***/98740:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>a
/* harmony export */});
/* harmony import */var n=r(9818),s=r(94333),o=r(21051);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/* harmony default export */const a=(0,s.compose)((0,n.withSelect)((function(e){var t=e("sensei/import"),r=t.getJobId();return{successResults:t.getSuccessResults(),logs:t.getLogsBySeverity(r),isFetching:t.isResolving("getLogsBySeverity",[r]),fetchError:t.getLogsFetchError()}})),(0,n.withDispatch)((function(e){var t=e("sensei/import"),r=t.restartImporter,n=t.invalidateResolutionForStoreSelector;return{restartImporter:r,retry:function(){return n("getLogsBySeverity")}}})))(o/* .DonePage */.w);
/***/},
/***/97769:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */D:()=>/* binding */o
/* harmony export */});
/* harmony import */var n=r(90228),s=r(25463),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=[].concat((0,n.default)(e?[e]:[]),(0,n.default)(t||[])).join("/");return s/* .API_BASE_PATH */.Lt+r};
/* harmony import */}
/***/,
/***/45879:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */A:()=>/* binding */i
/* harmony export */});
/* harmony import */var n=r(69307),s=r(65736),o=r(55292),a=r(43011),__=s.__,i=function(e){var t=e.state.percentage;return(0,o/* ["default"] */.Z)(),(0,n.createElement)("section",{className:"sensei-data-port-step sensei-import-progress-page"},(0,n.createElement)("header",{className:"sensei-data-port-step__header"},(0,n.createElement)(a.H,null,__("Importing","sensei-lms")),(0,n.createElement)("p",null,__("Your content is now being imported…","sensei-lms"))),(0,n.createElement)(a/* .Section */.$,{className:"sensei-data-port-step__body",component:"section"},(0,n.createElement)("p",null,(0,n.createElement)("progress",{className:"sensei-data-port__progressbar sensei-import-progress-page__progress",max:"100",value:t}))))};
/* harmony import */}
/***/,
/***/79357:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>a
/* harmony export */});
/* harmony import */var n=r(9818),s=r(94333),o=r(45879);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/* harmony default export */const a=(0,s.compose)((0,n.withSelect)((function(e){return{state:e("sensei/import").getStepData("progress")}})))(o/* .ImportProgressPage */.A);
/***/},
/***/55292:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>o
/* harmony export */});
/* harmony import */var n=r(69307),s=r(9818);
/* harmony import */
/* harmony default export */const o=function(){var e=(0,s.useDispatch)("sensei/import").pollJobProgress,t=(0,s.useSelect)((function(e){return e("sensei/import").getJobId()}));(0,n.useEffect)((function(){e(t)}),[e,t])};
/***/},
/***/35345:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */g:()=>/* binding */s
/* harmony export */});
/* harmony import */var n=r(65736),__=n.__,s=[{key:"courses",description:__("Courses CSV File","sensei-lms")},{key:"lessons",description:__("Lessons CSV File","sensei-lms")},{key:"questions",description:__("Questions CSV File","sensei-lms")}];
/* harmony import */}
/***/,
/***/47854:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */S:()=>/* binding */l
/* harmony export */});
/* harmony import */var n=r(69307),s=r(65736),o=r(71793),a=r(79357),i=r(98740),__=s.__,l=[{key:"upload",container:(0,n.createElement)(o/* ["default"] */.Z,null),label:__("Upload CSV Files","sensei-lms")},{key:"progress",container:(0,n.createElement)(a/* ["default"] */.Z,null),label:__("Import","sensei-lms")},{key:"complete",container:(0,n.createElement)(i/* ["default"] */.Z,null),label:__("Done","sensei-lms")}];
/* harmony import */}
/***/,
/***/31567:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>a
/* harmony export */});
/* harmony import */var n=r(9818),s=r(94333),o=r(56565);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/* harmony default export */const a=(0,s.compose)((0,n.withSelect)((function(e){var t=e("sensei/import");return{jobId:t.getJobId(),state:t.getStepData("upload")}})),(0,n.withDispatch)((function(e){var t=e("sensei/import");return{deleteLevelFile:t.deleteLevelFile,uploadFileForLevel:t.uploadFileForLevel,throwEarlyUploadError:t.throwEarlyUploadError}})))(o/* .UploadLevels */.B);
/***/},
/***/56565:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */B:()=>/* binding */c
/* harmony export */});
/* harmony import */var n=r(69307),s=r(55609),o=r(8598),a=r(65736),i=r(29822),l=r(35345),__=a.__,c=function(e){var t=e.jobId,r=e.state,a=e.uploadFileForLevel,c=e.throwEarlyUploadError,u=e.deleteLevelFile;return(0,n.createElement)("ol",null,l/* .levels.map */.g.map((function(e){var l,p=r[e.key],m=function(e){return e.hasError?(0,n.createElement)(i/* .Notice */.q,{message:e.errorMsg,isError:!0}):e.isUploaded?(0,n.createElement)(i/* .Notice */.q,{message:e.filename}):void 0}(p);
/* eslint-disable jsx-a11y/label-has-for */
return p.isDeleting?l=(0,n.createElement)("div",{className:"sensei-upload-file-line__delete-button-wrapper"},(0,n.createElement)(s.Spinner,null)):p.isUploaded&&(l=(0,n.createElement)("div",{className:"sensei-upload-file-line__delete-button-wrapper"},(0,n.createElement)(s.Button,{icon:o/* ["default"] */.Z,label:__("Delete File","sensei-lms"),onClick:function(){return u(t,e.key)},disabled:p.isDeleting}))),(0,n.createElement)("li",{key:e.key,className:"sensei-upload-file-line sensei-data-port-step__line"},(0,n.createElement)("label",{className:"sensei-upload-file-line__description",htmlFor:"sensei-upload-file-line-".concat(e.key)},e.description),(0,n.createElement)(s.FormFileUpload,{key:p.isUploading,isSecondary:!0,id:"sensei-upload-file-line-".concat(e.key),accept:[".csv",".txt"],disabled:p.isUploading||p.isDeleting,onChange:function(r){return function(e,t,r,n,s){if(!(t.length<1)){var o=t[0];if(["csv","txt"].includes(o.name.split(".").pop())){var a=new FormData;a.append("file",o),n(e,r,a)}else s(r,__("Only CSV files are supported.","sensei-lms"))}}(t,r.target.files,e.key,a,c)}},p.isUploading?__("Uploading…","sensei-lms"):__("Upload","sensei-lms")),(m||l)&&(0,n.createElement)("div",{className:"sensei-upload-file-line__info"},m,l));
/* eslint-enable */})))};
/* harmony import */}
/***/,
/***/71793:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>a
/* harmony export */});
/* harmony import */var n=r(9818),s=r(94333),o=r(71247);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/* harmony default export */const a=(0,s.compose)((0,n.withSelect)((function(e){var t=e("sensei/import");return{state:t.getStepData("upload"),isReady:t.isReadyToStart()}})),(0,n.withDispatch)((function(e,t,r){var n=r.select,s=e("sensei/import").submitStartImport;return{submitStartImport:function(){s(n("sensei/import").getJobId());// Log continue to import from uploaded files.
var e=n("sensei/import").getUploadedLevelKeys().join(",");window.sensei_log_event("import_continue_click",{type:e})}}})))(o/* .UploadPage */.b);
/***/},
/***/71247:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */b:()=>/* binding */u
/* harmony export */});
/* harmony import */var n=r(69307),s=r(65736),o=r(55609),a=r(31567),i=r(29822),l=r(22866),c=r(43011),__=s.__,u=function(e){var t=e.state,r=e.isReady,s=e.submitStartImport,u=t.isSubmitting,p=t.errorMsg;return(0,n.createElement)("section",{className:"sensei-data-port-step sensei-upload-page"},(0,n.createElement)("header",{className:"sensei-data-port-step__header"},(0,n.createElement)(c.H,null,__("Import content from a CSV file","sensei-lms")),(0,n.createElement)("p",null,(0,l/* .formatString */.U)(__("This tool enables you to import courses, lessons, and questions from a CSV file. Please review the {{link}}documentation{{/link}} to learn more about the expected file structure.","sensei-lms"),{link:// eslint-disable-next-line jsx-a11y/anchor-has-content
(0,n.createElement)("a",{className:"link__color-secondary",href:"https://senseilms.com/documentation/import/",target:"_blank",type:"external",rel:"noopener noreferrer"})}))),(0,n.createElement)(c/* .Section */.$,{className:"sensei-data-port-step__body",component:"section"},(0,n.createElement)("p",null,__("Choose one or more CSV files to upload from your computer.","sensei-lms")),(0,n.createElement)(a/* ["default"] */.Z,null),(0,n.createElement)("div",{className:"sensei-data-port-step__footer"},null!==p&&(0,n.createElement)(i/* .Notice */.q,{message:p,isError:!0}),(0,n.createElement)(o.Button,{isPrimary:!0,className:"continue-button",disabled:!r||u,onClick:s},__("Continue","sensei-lms")))))};
/* harmony import */}
/***/,
/***/29822:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */q:()=>/* binding */i
/* harmony export */});
/* harmony import */var n=r(69307),s=r(90005),o=r.n(s),a=r(55609),i=function(e){var t=e.message,r=e.isError,s=o()({"sensei-data-port-notice__message":!0,error:r});return(0,n.createElement)("div",{className:"sensei-data-port-notice"},r&&(0,n.createElement)(a.Dashicon,{className:"sensei-data-port-notice__icon error",icon:"warning"}),(0,n.createElement)("span",{className:s},t))};
/* harmony import */}
/***/,
/***/17214:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */K:()=>/* binding */a
/* harmony export */});
/* harmony import */var n=r(69307),s=r(90005),o=r.n(s),a=function(e){var t=e.steps;return(0,n.createElement)("ol",{className:"sensei-data-port-steps"},t.map((function(e){var t=o()({active:e.isNext,done:e.isComplete});return(0,n.createElement)("li",{key:e.key,className:t},e.label)})))};
/* harmony import */}
/***/,
/***/49373:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */I:()=>/* binding */s
/* harmony export */});
/* harmony import */var n=r(69307);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Use Sensei color theme.
 *
 * Requires enqueueing the sensei-wp-components stylesheet.
 */
function s(){(0,n.useLayoutEffect)((function(){return document.body.classList.add("sensei-color"),function(){return document.body.classList.remove("sensei-color")}}))}
/***/},
/***/43011:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */H:()=>/* binding */i
/* harmony export */,$:()=>/* binding */l
/* harmony export */});
/* harmony import */var n=r(53782),s=r(69307),o=["component","children"],a=(0,s.createContext)(2);
/* harmony import */
/**
 * These components are used to frame out the page content for accessible heading hierarchy. Instead of defining fixed heading levels
 * (`h2`, `h3`, …) you can use `<H />` to create "section headings", which look to the parent `<Section />`s for the appropriate
 * heading level.
 *
 * @param {Object} props -
 * @return {Object} -
 */
function i(e){return(0,s.createElement)(a.Consumer,null,(function(t){var r="h"+Math.min(t,6);return(0,s.createElement)(r,e)}))}
/**
 * The section wrapper, used to indicate a sub-section (and change the header level context).
 *
 * @param {Object} props
 * @param {string} props.component
 * @param {Node}   props.children
 * @return {Object} -
 */function l(e){var t=e.component,r=e.children,i=(0,n/* ["default"] */.Z)(e,o),l=t||"div";return(0,s.createElement)(a.Consumer,null,(function(e){return(0,s.createElement)(a.Provider,{value:e+1},!1===t?r:(0,s.createElement)(l,i,r))}))}
/***/},
/***/16400:
/***/(e,t,r)=>{"use strict";
/* unused harmony export preloadedDataUsedOnceMiddleware */
/* harmony import */var n,s=r(96483),o=r(86989);
/* harmony import */r.n(o)().use((n={},function(e,t){return"string"!=typeof e.path||"GET"!==e.method&&e.method||(n[e.path]?e.path=(0,s.addQueryArgs)(e.path,{__skip_preload:1}):n[e.path]=!0),t(e)}))}
/***/,
/***/20832:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */GI:()=>/* binding */n
/* harmony export */});
/* unused harmony exports createReducerFromActionMap, createStore */
/* harmony import */r(9818);
/* harmony import */var n=function(e,t,r,n){
return regeneratorRuntime.mark((function s(){var o,a=arguments;return regeneratorRuntime.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(!e){s.next=3;break}return s.next=3,{type:e};case 3:return s.prev=3,s.delegateYield(t.apply(void 0,a),"t0",5);case 5:return o=s.t0,s.next=8,{type:r,data:o};case 8:s.next=14;break;case 10:return s.prev=10,s.t1=s.catch(3),s.next=14,{type:n,error:s.t1};case 14:case"end":return s.stop()}}),s,null,[[3,10]])}))}}
/***/,
/***/22866:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */U:()=>/* binding */i
/* harmony export */});
/* unused harmony export formattingComponents */
/* harmony import */var n=r(50189),s=r(69307),o=r(19219),a={em:(0,s.createElement)("em",null),strong:(0,s.createElement)("strong",null),code:(0,s.createElement)("code",null),small:(0,s.createElement)("small",null),sub:(0,s.createElement)("sub",null),sup:(0,s.createElement)("sup",null),br:(0,s.createElement)("br",null),p:(0,s.createElement)("p",null),del:(0,s.createElement)("del",null)},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,o/* ["default"] */.Z)({mixedString:e,components:(0,n/* ["default"] */.Z)((0,n/* ["default"] */.Z)({},a),t)})};
/* harmony import */}
/***/,
/***/70761:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */g:()=>/* binding */s
/* harmony export */});
/* unused harmony export postTypeLabels */
/* harmony import */var n=r(65736),__=n.__,s=(__("Courses","sensei-lms"),__("Lessons","sensei-lms"),__("Questions","sensei-lms"),{error:__("Error","sensei-lms"),warning:__("Warning","sensei-lms")});
/* harmony import */}
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
/* global define */!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=a(e,o(r)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=a(t,r));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(s.default=s,e.exports=s):void 0===(r=function(){return s}.apply(t,[]))||(e.exports=r)}()}
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
/***/58138:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>/* binding */s
/* harmony export */});
/* harmony import */var n=r(1793);function s(e){if(Array.isArray(e))return(0,n/* ["default"] */.Z)(e)}
/***/},
/***/64649:
/***/(e,t,r)=>{"use strict";
/* harmony export */function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}
/***/r.d(t,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/55181:
/***/(e,t,r)=>{"use strict";
/* harmony export */function n(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}
/***/r.d(t,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/22446:
/***/(e,t,r)=>{"use strict";
/* harmony export */function n(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,s,o=[],_n=!0,a=!1;try{for(r=r.call(e);!(_n=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);_n=!0);}catch(e){a=!0,s=e}finally{try{_n||null==r.return||r.return()}finally{if(a)throw s}}return o}}
/***/r.d(t,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/53764:
/***/(e,t,r)=>{"use strict";
/* harmony export */function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
/***/r.d(t,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/83314:
/***/(e,t,r)=>{"use strict";
/* harmony export */function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
/***/r.d(t,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/50189:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>/* binding */o
/* harmony export */});
/* harmony import */var n=r(64649);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,n/* ["default"] */.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}
/***/},
/***/53782:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>/* binding */s
/* harmony export */});
/* harmony import */var n=r(30808);function s(e,t){if(null==e)return{};var r,s,o=(0,n/* ["default"] */.Z)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}
/***/},
/***/30808:
/***/(e,t,r)=>{"use strict";
/* harmony export */function n(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}
/***/r.d(t,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/66886:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>/* binding */i
/* harmony export */});
/* harmony import */var n=r(66470),s=r(22446),o=r(64013),a=r(53764);
/* harmony import */function i(e,t){return(0,n/* ["default"] */.Z)(e)||(0,s/* ["default"] */.Z)(e,t)||(0,o/* ["default"] */.Z)(e,t)||(0,a/* ["default"] */.Z)()}
/***/},
/***/90228:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */default:()=>/* binding */i
/* harmony export */});
/* harmony import */var n=r(58138),s=r(55181),o=r(64013),a=r(83314);
/* harmony import */function i(e){return(0,n/* ["default"] */.Z)(e)||(0,s/* ["default"] */.Z)(e)||(0,o/* ["default"] */.Z)(e)||(0,a/* ["default"] */.Z)()}
/***/},
/***/64013:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>/* binding */s
/* harmony export */});
/* harmony import */var n=r(1793);function s(e,t){if(e){if("string"==typeof e)return(0,n/* ["default"] */.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n/* ["default"] */.Z)(e,t):void 0}}
/***/
/******/}},t={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function r(n){
/******/ // Check if module is in cache
/******/var s=t[n];
/******/if(void 0!==s)
/******/return s.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var o=t[n]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[n](o,o.exports,r),o.exports;
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
/******/ // define __esModule on exports
/******/r.r=e=>{
/******/"undefined"!=typeof Symbol&&Symbol.toStringTag&&
/******/Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})
/******/,Object.defineProperty(e,"__esModule",{value:!0})}
/******/,
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(()=>{"use strict";
/* harmony import */var e=r(69307),t=r(65736),n=r(9818),s=r(49373),o=r(17214),a=r(51842),i=r(55609),__=(r(16400),t.__);
/* harmony import */
/**
 * Internal dependencies
 */
(0,a/* ["default"] */.Z)();(0,e.render)((0,e.createElement)((function(){var t=(0,n.useSelect)((function(e){var t=e("sensei/import");return{error:t.getFetchError(),navigationSteps:t.getNavigationSteps()}}),[]),r=t.error,a=t.navigationSteps,l=(0,n.useDispatch)("sensei/import").loadCurrentJobState;if((0,e.useLayoutEffect)((function(){l()}),[l]),(0,s/* .useSenseiColorTheme */.I)(),r)return(0,e.createElement)(i.Notice,{status:"error",isDismissible:!1},__("An error has occurred while fetching the data. Please try again later!","sensei-lms"),(0,e.createElement)("br",null),__("Error details:","sensei-lms")," ",r.message);var c=a.find((function(e){return e.isNext}));return(0,e.createElement)("div",{className:"sensei-page-import"},(0,e.createElement)(o/* .DataPortStepper */.K,{steps:a}),c.container)}),null),document.getElementById("sensei-import-page"))})()})
/******/();