/******/(()=>{// webpackBootstrap
/******/var e={
/***/99854:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */Z:()=>o
/* harmony export */});
/* harmony import */var n=s(99196),r=s(70444);
/* harmony import */
/**
 * WordPress dependencies
 */
const o=(0,n.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(r.Path,{d:"M13 5c-3.3 0-6 2.7-6 6 0 1.4.5 2.7 1.3 3.7l-3.8 3.8 1.1 1.1 3.8-3.8c1 .8 2.3 1.3 3.7 1.3 3.3 0 6-2.7 6-6S16.3 5 13 5zm0 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"}));
/* harmony default export */}
//# sourceMappingURL=search.js.map
/***/,
/***/40483:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */});
/* harmony import */var n=s(69307);
/* harmony import */
/**
 * WordPress dependencies
 */
// Solution borrowed from https://gist.github.com/kentcdodds/b36572b6e9227207e6c71fd80e63f3b4.
function r(){const e=(0,n.useRef)(),t=(0,n.useCallback)((()=>(e.current||(e.current=new AbortController),e.current)),[]);(0,n.useEffect)((()=>()=>t().abort()),[t]);return{getSignal:(0,n.useCallback)((()=>t().signal),[t])}}
/***/},
/***/45031:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */Z:()=>m
/* harmony export */});
/* unused harmony export CourseList */
/* harmony import */var n=s(69307),r=s(55609),o=s(22629),a=s(65736),l=s(37798),i=s(86938);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/**
 * Callback for select or unselect courseItem
 *
 * @callback onChangeEvent
 * @param {boolean} isSelected Describes if the course was selected or unselected
 * @param {boolean} course     Course related to the triggered event
 */
/**
 * Loading course list component.
 */
const c=()=>(0,n.createElement)("li",{className:"sensei-student-modal__course-list--loading"},(0,n.createElement)(r.Spinner,null))
/**
 * Empty course list component.
 */,u=()=>(0,n.createElement)("li",{className:"sensei-student-modal__course-list--empty"},(0,a.__)("No courses found.","sensei-lms"))
/**
 * Course item.
 *
 * @param {Object}        props
 * @param {Object}        props.course   Course
 * @param {boolean}       props.checked  Checkbox state
 * @param {onChangeEvent} props.onChange Event triggered when the a course is select/unselected
 */,d=e=>{var t;let{course:s,checked:a=!1,onChange:l}=e;const i=null==s?void 0:s.id,c=(0,o.decodeEntities)(null==s||null===(t=s.title)||void 0===t?void 0:t.rendered),[u,d]=(0,n.useState)(a),m=(0,n.useCallback)((e=>{d(e),l({isSelected:e,course:s})}),[s,l]);return(0,n.createElement)("li",{className:"sensei-student-modal__course-list__item",key:i},(0,n.createElement)(r.CheckboxControl,{id:`course-${i}`,title:c,checked:u,onChange:m}),(0,n.createElement)("label",{htmlFor:`course-${i}`,title:c},c))},m=e=>{let{searchQuery:t,onChange:s}=e;const r=(0,n.useRef)([]),o=(0,n.useCallback)((e=>{let{isSelected:t,course:n}=e;r.current=t?[...r.current,n]:r.current.filter((e=>e.id!==n.id)),s(r.current)}),[s]),{courses:m,isFetching:p}=(0,i/* ["default"] */.Z)((e=>{const s=e(l.store),n={per_page:100,search:t,filter:"teacher"};return{courses:s.getEntityRecords("postType","course",n)||[],isFetching:!s.hasFinishedResolution("getEntityRecords",["postType","course",n])}}),[t],500);return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("span",{className:"sensei-student-modal__course-list__header"},(0,a.__)("Your Courses","sensei-lms")),(0,n.createElement)("ul",{className:"sensei-student-modal__course-list"},p&&(0,n.createElement)(c,null),!p&&0===m.length&&(0,n.createElement)(u,null),!p&&0<m.length&&m.map((e=>(0,n.createElement)(d,{key:e.id,course:e,onChange:o,checked:r.current.length>0&&r.current.find((t=>{let{id:s}=t;return s===e.id}))})))))}}
/***/,
/***/9240:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */Z:()=>p
/* harmony export */});
/* unused harmony export StudentModal */
/* harmony import */var n=s(69307),r=s(55609),o=s(99854),a=s(65736),l=s(81975),i=s(86989),c=s.n(i),u=s(45031),d=s(91442),m=s(40483);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
const p=e=>{let{action:t,onClose:s,students:i,studentDisplayName:p}=e;const{description:g,buttonLabel:_,errorMessage:h,isDestructive:b,sendAction:v}=((e,t,s)=>{const n=(0,l.escapeHTML)(s);return{add:{description:t>1?(0,a.sprintf)(
// Translators: placeholder is the number of selected students.
(0,a.__)("Select the course(s) you would like to add <strong>%d students</strong> to:","sensei-lms"),t):(0,a.sprintf)(
// Translators: placeholder is the student's name.
(0,a.__)("Select the course(s) you would like to add <strong>%s</strong> to:","sensei-lms"),n),buttonLabel:(0,a.__)("Add to Course","sensei-lms"),errorMessage:e=>(0,a._n)("Unable to add student. Please try again.","Unable to add students. Please try again.",e.length,"sensei-lms"),sendAction:(e,t,s)=>{let{signal:n}=s;return c()({path:"/sensei-internal/v1/course-students/batch",method:"POST",data:{student_ids:e,course_ids:t},signal:n})},isDestructive:!1},remove:{description:t>1?(0,a.sprintf)(
// Translators: placeholder is the number of selected students.
(0,a.__)("Select the course(s) you would like to remove <strong>%d students</strong> from:","sensei-lms"),t):(0,a.sprintf)(
// Translators: placeholder is the student's name.
(0,a.__)("Select the course(s) you would like to remove <strong>%s</strong> from:","sensei-lms"),n),buttonLabel:(0,a.__)("Remove from Course","sensei-lms"),errorMessage:e=>(0,a._n)("Unable to remove student. Please try again.","Unable to remove students. Please try again.",e.length,"sensei-lms"),sendAction:(e,t,s)=>{let{signal:n}=s;return c()({path:"/sensei-internal/v1/course-students/batch",method:"DELETE",data:{student_ids:e,course_ids:t},signal:n})},isDestructive:!0},"reset-progress":{
// Translators: placeholder is the number of selected students for plural, student's name for singular.
description:t>1?(0,a.sprintf)(
// Translators: placeholder is the number of selected students.
(0,a.__)("Select the course(s) you would like to reset progress from for <strong>%d students</strong>:","sensei-lms"),t):(0,a.sprintf)(
// Translators: placeholder is the student's name.
(0,a.__)("Select the course(s) you would like to reset progress from for <strong>%s</strong>:","sensei-lms"),n),buttonLabel:(0,a.__)("Reset Progress","sensei-lms"),errorMessage:e=>(0,a._n)("Unable to reset progress for this student. Please try again.","Unable to reset progress for these students. Please try again.",e.length,"sensei-lms"),sendAction:(e,t,s)=>{let{signal:n}=s;return c()({path:"/sensei-internal/v1/course-progress/batch",method:"DELETE",data:{student_ids:e,course_ids:t},signal:n})},isDestructive:!0}}[e]})(t,i.length,p),[w,f]=(0,n.useState)([]),[y,E]=(0,n.useState)(""),[S,k]=(0,n.useState)(!1),[C,x]=(0,n.useState)(!1),{getSignal:N}=(0,m/* ["default"] */.Z)(),D=(0,n.useCallback)((async()=>{k(!0);try{await v(i,w.map((e=>e.id)),{signal:N()}),s(!0)}catch(e){N().aborted||(x(!0),k(!1))}}),[v,i,w,s,N]);return(0,n.createElement)(r.Modal,{className:"sensei-student-modal",title:(0,a.__)("Choose Course","sensei-lms"),onRequestClose:()=>s()},(0,n.createElement)(n.RawHTML,null,g),(0,n.createElement)(d/* ["default"] */.Z,{iconRight:o/* ["default"] */.Z,onChange:e=>E(e),placeholder:(0,a.__)("Search courses","sensei-lms"),value:y}),(0,n.createElement)(u/* ["default"] */.Z,{searchQuery:y,onChange:e=>{f(e)}}),C&&(0,n.createElement)(r.Notice,{status:"error",isDismissible:!1,className:"sensei-student-modal__notice"},h(i)),(0,n.createElement)("div",{className:"sensei-student-modal__action"},(0,n.createElement)(r.Button,{className:"sensei-student-modal__action",variant:b?"":"primary",onClick:()=>D(),disabled:S||0===w.length,isDestructive:b},S&&(0,n.createElement)(r.Spinner,null),_)))};
/**
 * Student Actions Modal.
 *
 * @param {Object}   props
 * @param {Object}   props.action             Action that is being performed.
 * @param {Function} props.onClose            Close callback.
 * @param {Array}    props.students           A list of Student ids related to the action should be applied.
 * @param {string}   props.studentDisplayName Name of the student, shown when there's only one student.
 */}
/***/,
/***/91442:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */Z:()=>i
/* harmony export */});
/* harmony import */var n=s(25773),r=s(69307),o=s(90005),a=s.n(o),l=s(55609);
/* harmony import */
/**
 * External dependencies
 */
/**
 * WordPress dependencies
 */
/**
 * Input control component.
 *
 * It can use or be replaced by the
 * WordPress [InputControl]{@link https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/input-control} when it's stable.
 *
 * @param {Object}   props             Component props.
 * @param {string}   [props.className] Additional classnames for the input.
 * @param {string}   [props.id]        Component id used to connect label and input - required if label is set.
 * @param {string}   [props.label]     Input label.
 * @param {number}   [props.value]     Input value.
 * @param {string}   [props.help]      Help text.
 * @param {string}   [props.iconRight] Icon right.
 * @param {Function} [props.onChange]  Change function.
 */
const i=e=>{let{className:t,id:s,label:o,value:i,help:c,iconRight:u,onChange:d,...m}=e;return(0,r.createElement)(l.BaseControl,{id:s,label:o,help:c},(0,r.createElement)("div",{className:"sensei-input-control"},(0,r.createElement)("input",(0,n/* ["default"] */.Z)({className:a()("sensei-input-control__input",{"sensei-input-control__input--with-icon-right":u},t),type:"text",id:s,value:null===i?"":i,onChange:e=>d(e.target.value)},m)),u&&(0,r.createElement)("span",{className:"sensei-input-control__icon"},(0,r.createElement)(l.Icon,{icon:u}))))};
/* harmony default export */}
/***/,
/***/86938:
/***/(e,t,s)=>{"use strict";
/* harmony export */s.d(t,{
/* harmony export */Z:()=>a
/* harmony export */});
/* harmony import */var n=s(92819),r=s(9818),o=s(69307);
/* harmony import */
/**
 * External dependencies
 */
/**
 * WordPress dependencies
 */
/**
 * Use select hook with debounce.
 *
 * @param {Function} mapSelect Map select function.
 * @param {Array}    deps      Use select dependencies.
 * @param {number}   wait      Wait time for the debounce.
 *
 * @return {*} Returns what useSelect returns through the mapSelect argument.
 */
const a=(e,t,s)=>{const[a,l]=(0,o.useState)(t),i=(0,o.useCallback)((0,n.debounce)(l,s),[l,s]);
// eslint-disable-next-line react-hooks/exhaustive-deps -- Using debounce as callback.
return(0,o.useEffect)((()=>{i(t);
// eslint-disable-next-line react-hooks/exhaustive-deps -- Dependencies coming from args.
}),t),(0,r.useSelect)(e,a)};
/* harmony default export */}
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
/***/37798:
/***/e=>{"use strict";e.exports=window.wp.coreData}
/***/,
/***/9818:
/***/e=>{"use strict";e.exports=window.wp.data}
/***/,
/***/69307:
/***/e=>{"use strict";e.exports=window.wp.element}
/***/,
/***/81975:
/***/e=>{"use strict";e.exports=window.wp.escapeHtml}
/***/,
/***/92694:
/***/e=>{"use strict";e.exports=window.wp.hooks}
/***/,
/***/22629:
/***/e=>{"use strict";e.exports=window.wp.htmlEntities}
/***/,
/***/65736:
/***/e=>{"use strict";e.exports=window.wp.i18n}
/***/,
/***/70444:
/***/e=>{"use strict";e.exports=window.wp.primitives}
/***/,
/***/90005:
/***/(e,t)=>{var s;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];s&&(e=a(e,o(s)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var s in e)n.call(e,s)&&e[s]&&(t=a(t,s));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(s=function(){return r}.apply(t,[]))||(e.exports=s)}()}
/***/,
/***/25773:
/***/(e,t,s)=>{"use strict";
/* harmony export */function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},n.apply(this,arguments)}
/***/
/******/s.d(t,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})}},t={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function s(n){
/******/ // Check if module is in cache
/******/var r=t[n];
/******/if(void 0!==r)
/******/return r.exports;
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
/******/return e[n](o,o.exports,s),o.exports;
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
/******/for(var n in t)
/******/s.o(t,n)&&!s.o(e,n)&&
/******/Object.defineProperty(e,n,{enumerable:!0,get:t[n]})
/******/;
/******/},
/******/s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)
/******/,
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(()=>{"use strict";
/* unused harmony export StudentBulkActionButton */
/* harmony import */var e=s(69307),t=s(55609),n=s(92694),r=s(65736),o=s(9240);
/* harmony import */
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
/**
 *  Student bulk action button.
 *
 * @param {Object}  props
 * @param {boolean} props.isDisabled Set button's initial state to be disabled or enabled, defaults to disabled.
 */
const a=s=>{let{isDisabled:a=!0}=s;const[l,i]=(0,e.useState)("add"),[c,u]=(0,e.useState)(!1),[d,m]=(0,e.useState)([]),[p,g]=(0,e.useState)(""),[_,h]=(0,e.useState)(a),b=e=>{e&&window.location.reload(),u(!1)},v=e=>{h(!(e.detail&&e.detail.enable))};(0,e.useEffect)((()=>(window.addEventListener("enableDisableCourseSelectionToggle",v),()=>{window.removeEventListener("enableDisableCourseSelectionToggle",v)})),[]);const w=(0,e.createElement)(o/* ["default"] */.Z,{action:l,onClose:b,students:d,studentDisplayName:p}),f=(0,n.applyFilters)("senseiStudentBulkActionModal",w,l,b,d,p);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t.Button,{className:"button button-primary sensei-student-bulk-actions__button",disabled:_,id:"sensei-bulk-learner-actions-modal-toggle",onClick:()=>{const e=document.getElementById("bulk-action-selector-top"),t=document.getElementById("bulk-action-user-ids");if(e&&(e=>{switch(e){case"enrol_restore_enrolment":i("add");break;case"remove_enrolment":i("remove");break;case"remove_progress":i("reset-progress");break;default:i(e)}})(e.value),t)try{const e=JSON.parse(t.value);m(e),1===e.length&&g(document.querySelector("input.sensei_user_select_id:checked").closest("tr").querySelector(".student-action-menu").getAttribute("data-user-display-name"))}catch(e){}u(!0)}},(0,r.__)("Select Action","sensei-lms")),(0,e.createElement)("input",{type:"hidden",id:"bulk-action-user-ids"}),c&&f)};Array.from(document.querySelectorAll("div.sensei-student-bulk-actions__button")).forEach((t=>{(0,e.render)((0,e.createElement)(a,null),t)}))})()})
/******/();