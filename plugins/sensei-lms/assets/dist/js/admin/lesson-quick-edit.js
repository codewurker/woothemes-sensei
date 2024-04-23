/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e,r,t,n={
/***/1793:
/***/(e,r,t)=>{function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}
/***/
/* harmony export */t.d(r,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/66470:
/***/(e,r,t)=>{function n(e){if(Array.isArray(e))return e}
/***/
/* harmony export */t.d(r,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/22446:
/***/(e,r,t)=>{function n(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,i,o=[],_n=!0,a=!1;try{for(t=t.call(e);!(_n=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);_n=!0);}catch(e){a=!0,i=e}finally{try{_n||null==t.return||t.return()}finally{if(a)throw i}}return o}}
/***/
/* harmony export */t.d(r,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/53764:
/***/(e,r,t)=>{function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
/***/
/* harmony export */t.d(r,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/66886:
/***/(e,r,t)=>{
/* harmony export */t.d(r,{
/* harmony export */Z:()=>/* binding */u
/* harmony export */});
/* harmony import */var n=t(66470),i=t(22446),o=t(64013),a=t(53764);
/* harmony import */function u(e,r){return(0,n/* ["default"] */.Z)(e)||(0,i/* ["default"] */.Z)(e,r)||(0,o/* ["default"] */.Z)(e,r)||(0,a/* ["default"] */.Z)()}
/***/},
/***/64013:
/***/(e,r,t)=>{
/* harmony export */t.d(r,{
/* harmony export */Z:()=>/* binding */i
/* harmony export */});
/* harmony import */var n=t(1793);function i(e,r){if(e){if("string"==typeof e)return(0,n/* ["default"] */.Z)(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,n/* ["default"] */.Z)(e,r):void 0}}
/***/
/******/}},i={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function o(e){
/******/ // Check if module is in cache
/******/var r=i[e];
/******/if(void 0!==r)
/******/return r.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var t=i[e]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return n[e](t,t.exports,o),t.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/
/******/ // define getter functions for harmony exports
/******/o.d=(e,r)=>{
/******/for(var t in r)
/******/o.o(r,t)&&!o.o(e,t)&&
/******/Object.defineProperty(e,t,{enumerable:!0,get:r[t]})
/******/;
/******/},
/******/o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)
/******/,
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
t=o(66886),e=jQuery,r=window.inlineEditPost.edit,// and then we overwrite the function with our own code
window.inlineEditPost.edit=function(n){
// "call" the original WP edit function
// we don't want to leave WordPress hanging
r.apply(this,arguments);// now we take care of our business
// get the post ID
var i=0;if(n instanceof Element&&(i=parseInt(this.getId(n))),i>0){
// define the edit row
var o=e("#edit-"+i),a=window["sensei_quick_edit_"+i];//on the save button click, set senseiFieldValues to the values user entered in the form fields
o.find(".save").on("click",(function(){e(".sensei-quiz-settings :input",o).each((function(){var r=e(this).attr("name"),t=e(this).val();a[r]=t}))})),// populate the data
//data is localized in sensei_quick_edit object
"on"==a.pass_required||"1"==a.pass_required?a.pass_required=1:a.pass_required=0,"on"==a.enable_quiz_reset||"1"==a.enable_quiz_reset?a.enable_quiz_reset=1:a.enable_quiz_reset=0,"auto"===a.quiz_grade_type||"1"===a.quiz_grade_type?a.quiz_grade_type=1:a.quiz_grade_type=0,"yes"==a.random_question_order||"1"==a.random_question_order?a.random_question_order=1:a.random_question_order=0;for(var u=0,s=Object.entries(a);u<s.length;u++){var d=(0,t/* ["default"] */.Z)(s[u],2),l=d[0],c=d[1],p=e(':input[name="'+l+'"]',o);"INPUT"==p.prop("nodeName")?p.val(parseInt(c)):e(':input[name="'+l+'"] option[value="'+c+'"] ',o).attr("selected",!0)}}}})
/******/();