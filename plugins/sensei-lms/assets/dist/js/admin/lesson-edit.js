/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e,s,o,t={
/***/25852:
/***/(e,s,o)=>{
/* harmony export */o.d(s,{
/* harmony export */F:()=>/* binding */g
/* harmony export */});
/* harmony import */var t=o(9818),n=o(65736),r=o(52175),i=o(72067),l=o(12238),c=o(41650);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
// Sensei blocks by post type.
const a={course:{outline:"sensei-lms/course-outline",takeCourse:"sensei-lms/button-take-course",contactTeacher:"sensei-lms/button-contact-teacher",courseProgress:"sensei-lms/course-progress",viewResults:"sensei-lms/button-view-results"},lesson:{lessonActions:"sensei-lms/lesson-actions",lessonProperties:"sensei-lms/lesson-properties",contactTeacher:"sensei-lms/button-contact-teacher",featuredVideo:"sensei-lms/featured-video"}},u={course:{"meta-box-course-lessons":[a.course.outline],"meta-box-module_course_mb":[a.course.outline],"meta-box-course-video":Object.values(a.course)},lesson:{"meta-box-lesson-info":[a.lesson.lessonProperties]}},d=(0,t.select)(r.store),p=(0,t.select)(l.store),m=(0,t.dispatch)(l.store),b=(0,t.select)(i.store),v=(0,t.dispatch)(i.store),w=p.isEditorPanelEnabled?p.isEditorPanelEnabled:b.isEditorPanelEnabled,h=m.toggleEditorPanelEnabled?m.toggleEditorPanelEnabled:v.toggleEditorPanelEnabled,g=e=>{if(!d)return;const{createWarningNotice:s,removeNotice:o}=(0,t.dispatch)("core/notices");let r;(0,c/* ["default"] */.Z)({subscribeListener:()=>{const e=d.getBlocks();
// Check if blocks were changed.
e!==r&&(r=e,i(),l())}});
/**
   * Check whether it has Sensei blocks.
   */
const i=()=>{Object.entries(u[e]).forEach((e=>{let[s,o]=e;!p(o)!==w(s)&&h(s)})),
// Prevent submit course modules.
document.querySelectorAll("#module_course_mb input").forEach((e=>{e.disabled=!w("meta-box-module_course_mb")})),
// Don't submit lesson length and complexity values in metaboxes.
document.querySelectorAll("#lesson-info input, #lesson-info select").forEach((e=>{e.disabled=!w("meta-box-lesson-info")}))},l=()=>{var t,r;const i=p(Object.values(a[e])),l=null===(t=window)||void 0===t||null===(r=t.sensei)||void 0===r?void 0:r.courseThemeEnabled;i||l?o("sensei-using-template"):s((0,n.__)("It looks like this course page doesn't have any Sensei blocks. This means that content will be handled by custom templates.","sensei-lms"),{id:"sensei-using-template",isDismissible:!0,actions:[{label:(0,n.__)("Learn more","sensei-lms"),url:"https://senseilms.com/documentation/course-page-blocks/"}]})},p=e=>e.some((e=>d.getGlobalBlockCount(e)>0));
/**
   * Toggle metaboxes if a replacement block is present or not.
   */};
// Metabox replacements.
}
/***/,
/***/41650:
/***/(e,s,o)=>{
/* harmony export */o.d(s,{
/* harmony export */Z:()=>n
/* harmony export */});
/* harmony import */var t=o(9818);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Helper function to fire callbacks on editor lifecycles.
 *
 * @param {Object}   options
 * @param {Function} options.subscribeListener Callback called everytime the subscribe listener is called.
 * @param {Function} options.onSetDirty        Callback called when the editor becomes dirty.
 * @param {Function} options.onSaveStart       Callback called when editor starts saving.
 * @param {Function} options.onSave            Callback called when a save is completed.
 *
 * @return {Function} Unsubscribe function.
 */
const n=e=>{let{subscribeListener:s=(()=>{}),onSetDirty:o=(()=>{}),onSaveStart:n=(()=>{}),onSave:r=(()=>{})}=e;const i=(0,t.select)("core/editor");let l=!1,c=!1;return(0,t.subscribe)((()=>{s();const e=i.isEditedPostDirty(),t=i.isSavingPost()&&!i.isAutosavingPost();!c&&e?(
// If editor becomes dirty.
c=!0,o()):c=e,l&&!t?(
// If it completed a saving.
l=t,r()):!l&&t?(
// If it started saving.
l=t,n()):l=t}))};
/* harmony default export */}
/***/,
/***/52175:
/***/e=>{e.exports=window.wp.blockEditor;
/***/},
/***/9818:
/***/e=>{e.exports=window.wp.data;
/***/},
/***/47701:
/***/e=>{e.exports=window.wp.domReady;
/***/},
/***/72067:
/***/e=>{e.exports=window.wp.editPost;
/***/},
/***/12238:
/***/e=>{e.exports=window.wp.editor;
/***/},
/***/65736:
/***/e=>{e.exports=window.wp.i18n;
/***/
/******/}},n={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function r(e){
/******/ // Check if module is in cache
/******/var s=n[e];
/******/if(void 0!==s)
/******/return s.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var o=n[e]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return t[e](o,o.exports,r),o.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/r.n=e=>{
/******/var s=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return r.d(s,{a:s}),s;
/******/},
/******/ // define getter functions for harmony exports
/******/r.d=(e,s)=>{
/******/for(var o in s)
/******/r.o(s,o)&&!r.o(e,o)&&
/******/Object.defineProperty(e,o,{enumerable:!0,get:s[o]})
/******/;
/******/},
/******/r.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s)
/******/,
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
e=r(47701),s=r.n(e),o=r(25852),
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
s()((()=>{(0,o/* .startBlocksTogglingControl */.F)("lesson");
// Lessons Write Panel.
const e=jQuery("#lesson-complexity-options");e.length>0&&e.select2({width:"resolve"});const s=jQuery("#lesson-prerequisite-options");s.length>0&&s.select2({width:"resolve"});const t=jQuery("#lesson-course-options");t.length>0&&t.select2({width:"resolve"});const n=jQuery("#lesson-module-options");n.length>0&&n.select2({width:"resolve"}),
// Refresh the prerequisite meta box when the course changes in order to get the relevant prerequisites.
jQuery("#lesson-course-options").on("change",(function(){var e;
// Try to get the lesson ID from the wp data store. If not present, fallback to getting it from the DOM.
const s=(null===(e=wp.data.select("core/editor"))||void 0===e?void 0:e.getCurrentPostId())||jQuery("#post_ID").val(),o=jQuery(this).val();jQuery.get(ajaxurl,{action:"get_prerequisite_meta_box_content",lesson_id:s,course_id:o,security:window.sensei_lesson_metadata.get_prerequisite_meta_box_content_nonce},(function(e){""!==e&&(
// Replace the meta box and re-initialize select2.
jQuery("> .inside","#lesson-prerequisite").html(e),jQuery("#lesson-prerequisite-options").select2({width:"resolve"}))}))}))}))})
/******/();