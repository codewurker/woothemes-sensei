/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e,t,o,n={
/***/25852:
/***/(e,t,o)=>{
/* harmony export */o.d(t,{
/* harmony export */F:()=>/* binding */v
/* harmony export */});
/* harmony import */var n=o(66886),s=o(9818),r=o(65736),i=o(41650),__=r.__,l={course:{outline:"sensei-lms/course-outline",takeCourse:"sensei-lms/button-take-course",contactTeacher:"sensei-lms/button-contact-teacher",courseProgress:"sensei-lms/course-progress",viewResults:"sensei-lms/button-view-results"},lesson:{lessonActions:"sensei-lms/lesson-actions",lessonProperties:"sensei-lms/lesson-properties",contactTeacher:"sensei-lms/button-contact-teacher",featuredVideo:"sensei-lms/featured-video"}},u={course:{"meta-box-course-lessons":[l.course.outline],"meta-box-module_course_mb":[l.course.outline],"meta-box-course-video":Object.values(l.course)},lesson:{"meta-box-lesson-info":[l.lesson.lessonProperties]}},a=(0,s.select)("core/block-editor"),c=(0,s.select)("core/edit-post"),d=(0,s.dispatch)("core/edit-post"),v=function(e){if(a){var t,o=(0,s.dispatch)("core/notices"),r=o.createWarningNotice,v=o.removeNotice;(0,i/* ["default"] */.Z)({subscribeListener:function(){var e=a.getBlocks();// Check if blocks were changed.
e!==t&&(t=e,m(),p())}});
/**
   * Check whether it has Sensei blocks.
   */
var m=function(){Object.entries(u[e]).forEach((function(e){var t=(0,n/* ["default"] */.Z)(e,2),o=t[0],s=t[1];!f(s)!==c.isEditorPanelEnabled(o)&&d.toggleEditorPanelEnabled(o)})),// Prevent submit course modules.
document.querySelectorAll("#module_course_mb input").forEach((function(e){e.disabled=!c.isEditorPanelEnabled("meta-box-module_course_mb")})),// Don't submit lesson length and complexity values in metaboxes.
document.querySelectorAll("#lesson-info input, #lesson-info select").forEach((function(e){e.disabled=!c.isEditorPanelEnabled("meta-box-lesson-info")}))},p=function(){var t,o,n=f(Object.values(l[e])),s=null===(t=window)||void 0===t||null===(o=t.sensei)||void 0===o?void 0:o.courseThemeEnabled;n||s?v("sensei-using-template"):r(__("It looks like this course page doesn't have any Sensei blocks. This means that content will be handled by custom templates.","sensei-lms"),{id:"sensei-using-template",isDismissible:!0,actions:[{label:__("Learn more","sensei-lms"),url:"https://senseilms.com/documentation/course-page-blocks/"}]})},f=function(e){return e.some((function(e){return a.getGlobalBlockCount(e)>0}))};
/**
   * Toggle metaboxes if a replacement block is present or not.
   */}};
/* harmony import */}
/***/,
/***/41650:
/***/(e,t,o)=>{
/* harmony export */o.d(t,{
/* harmony export */Z:()=>s
/* harmony export */});
/* harmony import */var n=o(9818);
/* harmony import */
/* harmony default export */const s=function(e){var t=e.subscribeListener,o=void 0===t?function(){}:t,s=e.onSetDirty,r=void 0===s?function(){}:s,i=e.onSaveStart,l=void 0===i?function(){}:i,u=e.onSave,a=void 0===u?function(){}:u,c=(0,n.select)("core/editor"),d=!1,v=!1;return(0,n.subscribe)((function(){o();var e=c.isEditedPostDirty(),t=c.isSavingPost()&&!c.isAutosavingPost();!v&&e?(
// If editor becomes dirty.
v=!0,r()):v=e,d&&!t?(
// If it completed a saving.
d=t,a()):!d&&t?(
// If it started saving.
d=t,l()):d=t}))};
/***/},
/***/9818:
/***/e=>{e.exports=window.wp.data;
/***/},
/***/47701:
/***/e=>{e.exports=window.wp.domReady;
/***/},
/***/65736:
/***/e=>{e.exports=window.wp.i18n;
/***/},
/***/1793:
/***/(e,t,o)=>{function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}
/***/
/* harmony export */o.d(t,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/66470:
/***/(e,t,o)=>{function n(e){if(Array.isArray(e))return e}
/***/
/* harmony export */o.d(t,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/22446:
/***/(e,t,o)=>{function n(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,s,r=[],_n=!0,i=!1;try{for(o=o.call(e);!(_n=(n=o.next()).done)&&(r.push(n.value),!t||r.length!==t);_n=!0);}catch(e){i=!0,s=e}finally{try{_n||null==o.return||o.return()}finally{if(i)throw s}}return r}}
/***/
/* harmony export */o.d(t,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/53764:
/***/(e,t,o)=>{function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
/***/
/* harmony export */o.d(t,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/66886:
/***/(e,t,o)=>{
/* harmony export */o.d(t,{
/* harmony export */Z:()=>/* binding */l
/* harmony export */});
/* harmony import */var n=o(66470),s=o(22446),r=o(64013),i=o(53764);
/* harmony import */function l(e,t){return(0,n/* ["default"] */.Z)(e)||(0,s/* ["default"] */.Z)(e,t)||(0,r/* ["default"] */.Z)(e,t)||(0,i/* ["default"] */.Z)()}
/***/},
/***/64013:
/***/(e,t,o)=>{
/* harmony export */o.d(t,{
/* harmony export */Z:()=>/* binding */s
/* harmony export */});
/* harmony import */var n=o(1793);function s(e,t){if(e){if("string"==typeof e)return(0,n/* ["default"] */.Z)(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?(0,n/* ["default"] */.Z)(e,t):void 0}}
/***/
/******/}},s={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function r(e){
/******/ // Check if module is in cache
/******/var t=s[e];
/******/if(void 0!==t)
/******/return t.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var o=s[e]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return n[e](o,o.exports,r),o.exports;
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
/******/for(var o in t)
/******/r.o(t,o)&&!r.o(e,o)&&
/******/Object.defineProperty(e,o,{enumerable:!0,get:t[o]})
/******/;
/******/},
/******/r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)
/******/,
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
e=r(47701),t=r.n(e),o=r(25852),
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
t()((function(){(0,o/* .startBlocksTogglingControl */.F)("lesson");// Lessons Write Panel.
var e=jQuery("#lesson-complexity-options");e.length>0&&e.select2({width:"resolve"});var t=jQuery("#lesson-prerequisite-options");t.length>0&&t.select2({width:"resolve"});var n=jQuery("#lesson-course-options");n.length>0&&n.select2({width:"resolve"});var s=jQuery("#lesson-module-options");s.length>0&&s.select2({width:"resolve"}),// Refresh the prerequisite meta box when the course changes in order to get the relevant prerequisites.
jQuery("#lesson-course-options").on("change",(function(){var e,t=(null===(e=wp.data.select("core/editor"))||void 0===e?void 0:e.getCurrentPostId())||jQuery("#post_ID").val(),o=jQuery(this).val();
// Try to get the lesson ID from the wp data store. If not present, fallback to getting it from the DOM.
jQuery.get(ajaxurl,{action:"get_prerequisite_meta_box_content",lesson_id:t,course_id:o,security:window.sensei_lesson_metadata.get_prerequisite_meta_box_content_nonce},(function(e){""!==e&&(
// Replace the meta box and re-initialize select2.
jQuery("> .inside","#lesson-prerequisite").html(e),jQuery("#lesson-prerequisite-options").select2({width:"resolve"}))}))}))}))})
/******/();