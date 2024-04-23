/******/(()=>{// webpackBootstrap
/******/var e={
/***/99854:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>o
/* harmony export */});
/* harmony import */var r=n(99196),s=n(70444);
/* harmony import */
/**
 * WordPress dependencies
 */
const o=(0,r.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(s.Path,{d:"M13 5c-3.3 0-6 2.7-6 6 0 1.4.5 2.7 1.3 3.7l-3.8 3.8 1.1 1.1 3.8-3.8c1 .8 2.3 1.3 3.7 1.3 3.3 0 6-2.7 6-6S16.3 5 13 5zm0 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"}));
/* harmony default export */}
//# sourceMappingURL=search.js.map
/***/,
/***/40483:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */s
/* harmony export */});
/* harmony import */var r=n(69307);
/* harmony import */
/**
 * WordPress dependencies
 */
// Solution borrowed from https://gist.github.com/kentcdodds/b36572b6e9227207e6c71fd80e63f3b4.
function s(){var e=(0,r.useRef)(),t=(0,r.useCallback)((function(){return e.current||(e.current=new AbortController),e.current}),[]);return(0,r.useEffect)((function(){return function(){return t().abort()}}),[t]),{getSignal:(0,r.useCallback)((function(){return t().signal}),[t])}}
/***/},
/***/45031:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>p
/* harmony export */});
/* unused harmony export CourseList */
/* harmony import */var r=n(90228),s=n(66886),o=n(69307),i=n(55609),a=n(22629),u=n(65736),c=n(37798),l=n(86938),__=u.__,d=function(){return(0,o.createElement)("li",{className:"sensei-student-modal__course-list--loading"},(0,o.createElement)(i.Spinner,null))},m=function(){return(0,o.createElement)("li",{className:"sensei-student-modal__course-list--empty"},__("No courses found.","sensei-lms"))},f=function(e){var t,n=e.course,r=e.checked,u=void 0!==r&&r,c=e.onChange,l=null==n?void 0:n.id,d=(0,a.decodeEntities)(null==n||null===(t=n.title)||void 0===t?void 0:t.rendered),m=(0,o.useState)(u),f=(0,s/* ["default"] */.Z)(m,2),p=f[0],g=f[1],v=(0,o.useCallback)((function(e){g(e),c({isSelected:e,course:n})}),[n,c]);return(0,o.createElement)("li",{className:"sensei-student-modal__course-list__item",key:l},(0,o.createElement)(i.CheckboxControl,{id:"course-".concat(l),title:d,checked:p,onChange:v}),(0,o.createElement)("label",{htmlFor:"course-".concat(l),title:d},d))};
/* harmony import */
/* harmony default export */const p=function(e){var t=e.searchQuery,n=e.onChange,s=(0,o.useRef)([]),i=(0,o.useCallback)((function(e){var t=e.isSelected,o=e.course;s.current=t?[].concat((0,r.default)(s.current),[o]):s.current.filter((function(e){return e.id!==o.id})),n(s.current)}),[n]),a=(0,l/* ["default"] */.Z)((function(e){var n=e(c.store),r={per_page:100,search:t,filter:"teacher"};return{courses:n.getEntityRecords("postType","course",r)||[],isFetching:!n.hasFinishedResolution("getEntityRecords",["postType","course",r])}}),[t],500),u=a.courses,p=a.isFetching;return(0,o.createElement)(o.Fragment,null,(0,o.createElement)("span",{className:"sensei-student-modal__course-list__header"},__("Your Courses","sensei-lms")),(0,o.createElement)("ul",{className:"sensei-student-modal__course-list"},p&&(0,o.createElement)(d,null),!p&&0===u.length&&(0,o.createElement)(m,null),!p&&0<u.length&&u.map((function(e){return(0,o.createElement)(f,{key:e.id,course:e,onChange:i,checked:s.current.length>0&&s.current.find((function(t){return t.id===e.id}))})}))))};
/***/},
/***/9240:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>g
/* harmony export */});
/* unused harmony export StudentModal */
/* harmony import */var r=n(27791),s=n(66886),o=n(69307),i=n(55609),a=n(99854),u=n(65736),c=n(81975),l=n(86989),d=n.n(l),m=n(45031),f=n(91442),p=n(40483),__=u.__,_n=u._n;
/* harmony import */
/* harmony default export */const g=function(e){var t=e.action,n=e.onClose,l=e.students,g=e.studentDisplayName,v=function(e,t,n){var r=(0,c.escapeHTML)(n);return{add:{description:t>1?(0,u.sprintf)(// Translators: placeholder is the number of selected students.
__("Select the course(s) you would like to add <strong>%d students</strong> to:","sensei-lms"),t):(0,u.sprintf)(// Translators: placeholder is the student's name.
__("Select the course(s) you would like to add <strong>%s</strong> to:","sensei-lms"),r),buttonLabel:__("Add to Course","sensei-lms"),errorMessage:function(e){return _n("Unable to add student. Please try again.","Unable to add students. Please try again.",e.length,"sensei-lms")},sendAction:function(e,t,n){var r=n.signal;return d()({path:"/sensei-internal/v1/course-students/batch",method:"POST",data:{student_ids:e,course_ids:t},signal:r})},isDestructive:!1},remove:{description:t>1?(0,u.sprintf)(// Translators: placeholder is the number of selected students.
__("Select the course(s) you would like to remove <strong>%d students</strong> from:","sensei-lms"),t):(0,u.sprintf)(// Translators: placeholder is the student's name.
__("Select the course(s) you would like to remove <strong>%s</strong> from:","sensei-lms"),r),buttonLabel:__("Remove from Course","sensei-lms"),errorMessage:function(e){return _n("Unable to remove student. Please try again.","Unable to remove students. Please try again.",e.length,"sensei-lms")},sendAction:function(e,t,n){var r=n.signal;return d()({path:"/sensei-internal/v1/course-students/batch",method:"DELETE",data:{student_ids:e,course_ids:t},signal:r})},isDestructive:!0},"reset-progress":{
// Translators: placeholder is the number of selected students for plural, student's name for singular.
description:t>1?(0,u.sprintf)(// Translators: placeholder is the number of selected students.
__("Select the course(s) you would like to reset progress from for <strong>%d students</strong>:","sensei-lms"),t):(0,u.sprintf)(// Translators: placeholder is the student's name.
__("Select the course(s) you would like to reset progress from for <strong>%s</strong>:","sensei-lms"),r),buttonLabel:__("Reset Progress","sensei-lms"),errorMessage:function(e){return _n("Unable to reset progress for this student. Please try again.","Unable to reset progress for these students. Please try again.",e.length,"sensei-lms")},sendAction:function(e,t,n){var r=n.signal;return d()({path:"/sensei-internal/v1/course-progress/batch",method:"DELETE",data:{student_ids:e,course_ids:t},signal:r})},isDestructive:!0}}[e]}(t,l.length,g),h=v.description,b=v.buttonLabel,y=v.errorMessage,w=v.isDestructive,E=v.sendAction,_=(0,o.useState)([]),S=(0,s/* ["default"] */.Z)(_,2),Z=S[0],k=S[1],C=(0,o.useState)(""),x=(0,s/* ["default"] */.Z)(C,2),A=x[0],O=x[1],N=(0,o.useState)(!1),P=(0,s/* ["default"] */.Z)(N,2),j=P[0],R=P[1],D=(0,o.useState)(!1),M=(0,s/* ["default"] */.Z)(D,2),T=M[0],L=M[1],I=(0,p/* ["default"] */.Z)().getSignal,F=(0,o.useCallback)((0,r/* ["default"] */.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(!0),e.prev=1,e.next=4,E(l,Z.map((function(e){return e.id})),{signal:I()});case 4:n(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),I().aborted||(L(!0),R(!1));case 10:case"end":return e.stop()}}),e,null,[[1,7]])}))),[E,l,Z,n,I]);return(0,o.createElement)(i.Modal,{className:"sensei-student-modal",title:__("Choose Course","sensei-lms"),onRequestClose:function(){return n()}},(0,o.createElement)(o.RawHTML,null,h),(0,o.createElement)(f/* ["default"] */.Z,{iconRight:a/* ["default"] */.Z,onChange:function(e){return O(e)},placeholder:__("Search courses","sensei-lms"),value:A}),(0,o.createElement)(m/* ["default"] */.Z,{searchQuery:A,onChange:function(e){k(e)}}),T&&(0,o.createElement)(i.Notice,{status:"error",isDismissible:!1,className:"sensei-student-modal__notice"},y(l)),(0,o.createElement)("div",{className:"sensei-student-modal__action"},(0,o.createElement)(i.Button,{className:"sensei-student-modal__action",variant:w?"":"primary",onClick:function(){return F()},disabled:j||0===Z.length,isDestructive:w},j&&(0,o.createElement)(i.Spinner,null),b)))};
/***/},
/***/91442:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>l
/* harmony export */});
/* harmony import */var r=n(25773),s=n(53782),o=n(69307),i=n(90005),a=n.n(i),u=n(55609),c=["className","id","label","value","help","iconRight","onChange"];
/* harmony import */
/* harmony default export */const l=function(e){var t=e.className,n=e.id,i=e.label,l=e.value,d=e.help,m=e.iconRight,f=e.onChange,p=(0,s/* ["default"] */.Z)(e,c);return(0,o.createElement)(u.BaseControl,{id:n,label:i,help:d},(0,o.createElement)("div",{className:"sensei-input-control"},(0,o.createElement)("input",(0,r/* ["default"] */.Z)({className:a()("sensei-input-control__input",{"sensei-input-control__input--with-icon-right":m},t),type:"text",id:n,value:null===l?"":l,onChange:function(e){return f(e.target.value)}},p)),m&&(0,o.createElement)("span",{className:"sensei-input-control__icon"},(0,o.createElement)(u.Icon,{icon:m}))))};
/***/},
/***/86938:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>a
/* harmony export */});
/* harmony import */var r=n(66886),s=n(92819),o=n(9818),i=n(69307);
/* harmony import */
/* harmony default export */const a=function(e,t,n){var a=(0,i.useState)(t),u=(0,r/* ["default"] */.Z)(a,2),c=u[0],l=u[1],d=(0,i.useCallback)((0,s.debounce)(l,n),[l,n]);// eslint-disable-next-line react-hooks/exhaustive-deps -- Using debounce as callback.
return(0,i.useEffect)((function(){d(t);// eslint-disable-next-line react-hooks/exhaustive-deps -- Dependencies coming from args.
}),t),(0,o.useSelect)(e,c)};
/***/},
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
/***/(e,t)=>{var n;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */!function(){"use strict";var r={}.hasOwnProperty;function s(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,o(n)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=i(t,n));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()}
/***/,
/***/1793:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/66470:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e){if(Array.isArray(e))return e}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/58138:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */s
/* harmony export */});
/* harmony import */var r=n(1793);function s(e){if(Array.isArray(e))return(0,r/* ["default"] */.Z)(e)}
/***/},
/***/27791:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e,t,n,r,s,o,i){try{var a=e[o](i),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,s)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(s,o){var i=e.apply(t,n);function a(e){r(i,s,o,a,u,"next",e)}function u(e){r(i,s,o,a,u,"throw",e)}a(void 0)}))}}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */s
/* harmony export */})},
/***/25773:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/55181:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/22446:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,s,o=[],_n=!0,i=!1;try{for(n=n.call(e);!(_n=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);_n=!0);}catch(e){i=!0,s=e}finally{try{_n||null==n.return||n.return()}finally{if(i)throw s}}return o}}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/53764:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/83314:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/53782:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */s
/* harmony export */});
/* harmony import */var r=n(30808);function s(e,t){if(null==e)return{};var n,s,o=(0,r/* ["default"] */.Z)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}
/***/},
/***/30808:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/66886:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */a
/* harmony export */});
/* harmony import */var r=n(66470),s=n(22446),o=n(64013),i=n(53764);
/* harmony import */function a(e,t){return(0,r/* ["default"] */.Z)(e)||(0,s/* ["default"] */.Z)(e,t)||(0,o/* ["default"] */.Z)(e,t)||(0,i/* ["default"] */.Z)()}
/***/},
/***/90228:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */default:()=>/* binding */a
/* harmony export */});
/* harmony import */var r=n(58138),s=n(55181),o=n(64013),i=n(83314);
/* harmony import */function a(e){return(0,r/* ["default"] */.Z)(e)||(0,s/* ["default"] */.Z)(e)||(0,o/* ["default"] */.Z)(e)||(0,i/* ["default"] */.Z)()}
/***/},
/***/64013:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */s
/* harmony export */});
/* harmony import */var r=n(1793);function s(e,t){if(e){if("string"==typeof e)return(0,r/* ["default"] */.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r/* ["default"] */.Z)(e,t):void 0}}
/***/
/******/}},t={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function n(r){
/******/ // Check if module is in cache
/******/var s=t[r];
/******/if(void 0!==s)
/******/return s.exports;
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
/******/return e[r](o,o.exports,n),o.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/n.n=e=>{
/******/var t=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return n.d(t,{a:t}),t;
/******/},
/******/ // define getter functions for harmony exports
/******/n.d=(e,t)=>{
/******/for(var r in t)
/******/n.o(t,r)&&!n.o(e,r)&&
/******/Object.defineProperty(e,r,{enumerable:!0,get:t[r]})
/******/;
/******/},
/******/n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)
/******/,
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(()=>{"use strict";
/* unused harmony export StudentBulkActionButton */
/* harmony import */var e=n(66886),t=n(69307),r=n(55609),s=n(92694),o=n(65736),i=n(9240),__=o.__,a=function(n){var o=n.isDisabled,a=void 0===o||o,u=(0,t.useState)("add"),c=(0,e/* ["default"] */.Z)(u,2),l=c[0],d=c[1],m=(0,t.useState)(!1),f=(0,e/* ["default"] */.Z)(m,2),p=f[0],g=f[1],v=(0,t.useState)([]),h=(0,e/* ["default"] */.Z)(v,2),b=h[0],y=h[1],w=(0,t.useState)(""),E=(0,e/* ["default"] */.Z)(w,2),_=E[0],S=E[1],Z=(0,t.useState)(a),k=(0,e/* ["default"] */.Z)(Z,2),C=k[0],x=k[1],A=function(e){e&&window.location.reload(),g(!1)},O=function(e){x(!(e.detail&&e.detail.enable))};(0,t.useEffect)((function(){return window.addEventListener("enableDisableCourseSelectionToggle",O),function(){window.removeEventListener("enableDisableCourseSelectionToggle",O)}}),[]);var N=(0,t.createElement)(i/* ["default"] */.Z,{action:l,onClose:A,students:b,studentDisplayName:_}),P=(0,s.applyFilters)("senseiStudentBulkActionModal",N,l,A,b,_);return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.Button,{className:"button button-primary sensei-student-bulk-actions__button",disabled:C,id:"sensei-bulk-learner-actions-modal-toggle",onClick:function(){var e=document.getElementById("bulk-action-selector-top"),t=document.getElementById("bulk-action-user-ids");if(e&&function(e){switch(e){case"enrol_restore_enrolment":d("add");break;case"remove_enrolment":d("remove");break;case"remove_progress":d("reset-progress");break;default:d(e)}}(e.value),t)try{var n=JSON.parse(t.value);y(n),1===n.length&&S(document.querySelector("input.sensei_user_select_id:checked").closest("tr").querySelector(".student-action-menu").getAttribute("data-user-display-name"))}catch(e){}g(!0)}},__("Select Action","sensei-lms")),(0,t.createElement)("input",{type:"hidden",id:"bulk-action-user-ids"}),p&&P)};
/* harmony import */Array.from(document.querySelectorAll("div.sensei-student-bulk-actions__button")).forEach((function(e){(0,t.render)((0,t.createElement)(a,null),e)}))})()})
/******/();