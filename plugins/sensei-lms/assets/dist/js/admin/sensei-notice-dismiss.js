/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e,s={
/***/47701:
/***/e=>{e.exports=window.wp.domReady;
/***/
/******/}},t={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function i(e){
/******/ // Check if module is in cache
/******/var a=t[e];
/******/if(void 0!==a)
/******/return a.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var n=t[e]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return s[e](n,n.exports,i),n.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/i.n=e=>{
/******/var s=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return i.d(s,{a:s}),s;
/******/},
/******/ // define getter functions for harmony exports
/******/i.d=(e,s)=>{
/******/for(var t in s)
/******/i.o(s,t)&&!i.o(e,t)&&
/******/Object.defineProperty(e,t,{enumerable:!0,get:s[t]})
/******/;
/******/},
/******/i.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s)
/******/,
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
e=i(47701),
/**
 * WordPress dependencies
 */
i.n(e)()((()=>{const e="sensei-notice--is-hidden",s=e=>{const s=new FormData;e.dataset.dismissNotice&&s.append("notice",e.dataset.dismissNotice),s.append("action",e.dataset.dismissAction),s.append("nonce",e.dataset.dismissNonce),fetch(ajaxurl,{method:"POST",body:s})};
/**
   * Handle tasks present on the element if the element has the attribute "data-sensei-notice-tasks".
   *
   * @param  event The event to handle.
   */document.body.addEventListener("click",(t=>{const i=t.target.closest(".sensei-notice");i&&(i.dataset.dismissNonce&&i.dataset.dismissAction&&t.target.classList.contains("notice-dismiss")?s(i):(t=>{const{target:i}=t;if(!i.dataset.senseiNoticeTasks)return;const a=JSON.parse(i.dataset.senseiNoticeTasks);if(a)for(const i of a){const a=i.notice_id&&document.querySelector(`.sensei-notice[data-sensei-notice-id="${i.notice_id}"]`);switch(i.type){case"preventDefault":t.preventDefault();break;case"show":null==a||a.classList.remove(e);break;case"dismiss":a&&s(a);
//  We need to also hide the notice being dismissed:
// eslint-disable-next-line no-fallthrough
case"hide":null==a||a.classList.add(e)}}})(t))}))}))})
/******/();