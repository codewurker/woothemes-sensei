/******/(()=>{// webpackBootstrap
/******/var e={
/***/98578:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>c
/* harmony export */});
/* harmony import */var r=n(24246),o=n(65736),i=n(90005),s=n.n(i),a=n(92819);
/* harmony import */n(49384);const c=({activePageIndex:e,numberOfPages:t,onChange:n,classNames:i,children:c})=>{const u=s()("pagination-control",i);return(0,r.jsxs)("ul",{className:u,"aria-label":(0,o.__)("Pagination control"),children:[(0,a.times)(t,(i=>(0,r.jsx)("li",{"aria-current":i===e?"page":void 0,children:(0,r.jsx)("button",{className:s()("pagination-control__page",{"is-current":i===e}),disabled:i===e,"aria-label":(0,o.sprintf)(
/* translators: 1: current page number 2: total number of pages */
(0,o.__)("Page %1$d of %2$d"),i+1,t),onClick:()=>n(i)})},`${t}-${i}`))),c&&(0,r.jsx)("li",{className:"pagination-control__last-item",children:c})]})};
/* harmony default export */}
//# sourceMappingURL=index.js.map
/***/,
/***/64870:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>a
/* harmony export */});
/* harmony import */var r=n(24246),o=n(82833),i=n(4442),s=n(84970);
/* harmony import */
/**
 * Internal dependencies
 */
const a=({onMinimize:e,onDismiss:t,onNextStepProgression:n,onPreviousStepProgression:a,tourContainerRef:c,isMinimized:u})=>(0,o/* ["default"] */.Z)(c)?u?(0,r.jsx)((function(){return(0,s/* ["default"] */.Z)({onEscape:t("esc-key-minimized")}),null}),{}):(0,r.jsx)((function(){return(0,s/* ["default"] */.Z)({onEscape:e,onArrowRight:n,onArrowLeft:a}),(0,i/* ["default"] */.Z)(c),null}),{}):null;
/* harmony default export */}
//# sourceMappingURL=keyboard-navigation.js.map
/***/,
/***/39167:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */S:()=>/* binding */s
/* harmony export */,Z:()=>a
/* harmony export */});
/* harmony import */var r=n(24246),o=n(69307);
/* harmony import */const i=(0,o.createContext)({}),s=()=>(0,o.useContext)(i)
/* harmony default export */,a=({config:e,children:t})=>(0,r.jsx)(i.Provider,{value:{config:e},children:t})}
//# sourceMappingURL=tour-kit-context.js.map
/***/,
/***/50516:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>b
/* harmony export */});
/* harmony import */var r=n(24246),o=n(5157),i=n(69307),s=n(90005),a=n.n(s),c=n(69570),u=n(39129),l=n(94795),d=n(63630),f=n(64870),p=n(21303),m=n(390),h=n(55422),v=n(3897);
/* harmony import */
/**
 * External Dependencies
 */
/**
 * Internal Dependencies
 */
const g=(e,t)=>{"function"==typeof t&&t(e)},b=({config:e})=>{const[t,n]=(0,i.useState)(0),[s,b]=(0,i.useState)(null),[y,w]=(0,i.useState)(e.isMinimized??!1),[x,Z]=(0,i.useState)(null),[k,S]=(0,i.useState)(!1),C=(0,i.useRef)(null),O=(0,o/* .useMobileBreakpoint */._z)(),j=e.steps.length-1,_=e.steps[t].referenceElements?.[O?"mobile":"desktop"]||null,E=_?document.querySelector(_):null;(0,i.useEffect)((()=>{e.isMinimized&&w(!0)}),[e.isMinimized]);const F=(0,i.useCallback)((()=>!1!==e.options?.effects?.arrowIndicator&&!(!E||y||!k)),[e.options?.effects?.arrowIndicator,y,E,k]),R=(0,i.useCallback)((()=>!!e.options?.effects?.spotlight&&!y),[e.options?.effects?.spotlight,y]),T=(0,i.useCallback)((()=>!(R()||!e.options?.effects?.overlay)&&!y),[e.options?.effects?.overlay,y,R]),P=(0,i.useCallback)((n=>()=>{e.closeHandler(e.steps,t,n)}),[e,t]),M=(0,i.useCallback)((()=>{j>t&&n(t+1),g(t,e.options?.callbacks?.onNextStep)}),[e.options?.callbacks?.onNextStep,t,j]),z=(0,i.useCallback)((()=>{t&&n(t-1),g(t,e.options?.callbacks?.onPreviousStep)}),[e.options?.callbacks?.onPreviousStep,t]),A=(0,i.useCallback)((r=>{n(r),g(t,e.options?.callbacks?.onGoToStep)}),[e.options?.callbacks?.onGoToStep,t]),N=(0,i.useCallback)((()=>{w(!0),g(t,e.options?.callbacks?.onMinimize)}),[e.options?.callbacks?.onMinimize,t]),I=(0,i.useCallback)((()=>{w(!1),g(t,e.options?.callbacks?.onMaximize)}),[e.options?.callbacks?.onMaximize,t]),{styles:L,attributes:D,update:B}=(0,c/* .usePopper */.D)(E,x,{strategy:"fixed",placement:e?.placement??"bottom",modifiers:[{name:"preventOverflow",options:{rootBoundary:"document",padding:16}},{name:"arrow",options:{padding:12}},{name:"offset",options:{offset:[0,F()?12:10]}},{name:"flip",options:{fallbackPlacements:["top","left","right"]}},(0,i.useMemo)((()=>(0,d/* .liveResizeModifier */._)(e.options?.effects?.liveResize)),[e.options?.effects?.liveResize]),...e.options?.popperModifiers||[]]}),q=!y&&E&&k?{style:L?.popper,...D?.popper}:null,H=!y&&E&&k?{style:L?.arrow,...D?.arrow}:null;
/*
     * Focus first interactive element when step renders.
     */
(0,i.useEffect)((()=>{setTimeout((()=>s?.focus()))}),[s]),
/*
     * Fixes issue with Popper misplacing the instance on mount
     * See: https://stackoverflow.com/questions/65585859/react-popper-incorrect-position-on-mount
     */
(0,i.useEffect)((()=>{
// If no reference element to position step near
E?(S(!1),B&&B().then((()=>S(!0))).catch((()=>S(!0)))):S(!0)}),[B,E]),(0,i.useEffect)((()=>{E&&e.options?.effects?.autoScroll&&E.scrollIntoView(e.options.effects.autoScroll)}),[e.options?.effects?.autoScroll,E]);const $=a()("tour-kit-frame",O?"is-mobile":"is-desktop",{"is-visible":k},(0,l/* .classParser */.s)(e.options?.classNames));return(0,u/* ["default"] */.Z)(t,e.options?.callbacks?.onStepViewOnce),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f/* ["default"] */.Z,{onMinimize:N,onDismiss:P,onNextStepProgression:M,onPreviousStepProgression:z,tourContainerRef:C,isMinimized:y}),(0,r.jsxs)("div",{className:$,ref:C,children:[T()&&(0,r.jsx)(m/* ["default"] */.Z,{visible:!0}),R()&&(0,r.jsx)(h/* ["default"] */.Z,{referenceElement:E,liveResize:e.options?.effects?.liveResize||{},...e.options?.effects?.spotlight||{}}),(0,r.jsxs)("div",{className:"tour-kit-frame__container",ref:Z,...q,children:[F()&&(0,r.jsx)("div",{className:"tour-kit-frame__arrow","data-popper-arrow":!0,...H}),y?(0,r.jsx)(p/* ["default"] */.Z,{config:e,steps:e.steps,currentStepIndex:t,onMaximize:I,onDismiss:P}):(0,r.jsx)(v/* ["default"] */.Z,{config:e,steps:e.steps,currentStepIndex:t,onMinimize:N,onDismiss:P,onNextStep:M,onPreviousStep:z,onGoToStep:A,setInitialFocusedElement:b})]})]})]})}}
//# sourceMappingURL=tour-kit-frame.js.map
/***/,
/***/21303:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>o
/* harmony export */});
/* harmony import */var r=n(24246);const o=({config:e,steps:t,currentStepIndex:n,onMaximize:o,onDismiss:i})=>(0,r.jsx)("div",{className:"tour-kit-minimized",children:(0,r.jsx)(e.renderers.tourMinimized,{steps:t,currentStepIndex:n,onMaximize:o,onDismiss:i})});
/* harmony default export */}
//# sourceMappingURL=tour-kit-minimized.js.map
/***/,
/***/390:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>s
/* harmony export */});
/* harmony import */var r=n(24246),o=n(90005),i=n.n(o);
/* harmony import */
/**
 * External Dependencies
 */
const s=({visible:e})=>(0,r.jsx)("div",{className:i()("tour-kit-overlay",{"is-visible":e})});
/* harmony default export */}
//# sourceMappingURL=tour-kit-overlay.js.map
/***/,
/***/11441:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */l:()=>/* binding */i
/* harmony export */});
/* harmony import */var r=n(24246),o=n(55422);
/* harmony import */const i=({enabled:e=!1,rootElementSelector:t="#wpwrap"})=>e?(0,r.jsx)("style",{children:`\n    .${o/* .SPOTLIT_ELEMENT_CLASS */.u}, .${o/* .SPOTLIT_ELEMENT_CLASS */.u} * {\n        pointer-events: auto;\n    }\n    .tour-kit-frame__container button {\n        pointer-events: auto;\n    }\n    .tour-kit-spotlight, .tour-kit-overlay {\n        pointer-events: none;\n    }\n    ${t} :not(.${o/* .SPOTLIT_ELEMENT_CLASS */.u}, .${o/* .SPOTLIT_ELEMENT_CLASS */.u} *) {\n        pointer-events: none;\n    }\n    `}):null;
//# sourceMappingURL=tour-kit-spotlight-interactivity.js.map
/***/},
/***/55422:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */u:()=>/* binding */d
/* harmony export */,Z:()=>f
/* harmony export */});
/* harmony import */var r=n(24246),o=n(69307),i=n(90005),s=n.n(i),a=n(69570),c=n(63630),u=n(390),l=n(11441);
/* harmony import */const d="wp-tour-kit-spotlit",f=({referenceElement:e,styles:t,interactivity:n,liveResize:i})=>{const[f,p]=(0,o.useState)(null),m=e?.getBoundingClientRect(),h=[{name:"flip",enabled:!1},{name:"preventOverflow",options:{mainAxis:!1}},(0,o.useMemo)((()=>({name:"offset",options:{offset:({placement:e,reference:t,popper:n})=>"bottom"===e?[0,-(t.height+(n.height-t.height)/2)]:[0,0]}})),[]),
// useMemo because https://popper.js.org/react-popper/v2/faq/#why-i-get-render-loop-whenever-i-put-a-function-inside-the-popper-configuration
(0,o.useMemo)((()=>(0,c/* .liveResizeModifier */._)(i)),[i])],{styles:v,attributes:g}=(0,a/* .usePopper */.D)(e,f,{strategy:"fixed",placement:"bottom",modifiers:h}),b=m?{width:`${m.width}px`,height:`${m.height}px`}:null,y=e?{style:{...b&&b,...v?.popper,...t&&t},...g?.popper}:null;
/**
     * Add a .wp-spotlit class to the referenced element so that we can
     * apply CSS styles to it, for whatever purposes such as interactivity
     */
return(0,o.useEffect)((()=>(e?.classList.add(d),()=>{e?.classList.remove(d)})),[e]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l/* .SpotlightInteractivity */.l,{...n}),(0,r.jsx)(u/* ["default"] */.Z,{visible:!y}),(0,r.jsx)("div",{className:s()("tour-kit-spotlight",{"is-visible":!!y}),ref:p,...y})]})}}
//# sourceMappingURL=tour-kit-spotlight.js.map
/***/,
/***/3897:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>c
/* harmony export */});
/* harmony import */var r=n(24246),o=n(5157),i=n(90005),s=n.n(i),a=n(94795);
/* harmony import */
/**
 * External Dependencies
 */
/**
 * Internal Dependencies
 */
const c=({config:e,steps:t,currentStepIndex:n,onMinimize:i,onDismiss:c,onNextStep:u,onPreviousStep:l,setInitialFocusedElement:d,onGoToStep:f})=>{const p=(0,o/* .useMobileBreakpoint */._z)(),m=s()("tour-kit-step",`is-step-${n}`,(0,a/* .classParser */.s)(e.steps[n].options?.classNames?.[p?"mobile":"desktop"]));return(0,r.jsx)("div",{className:m,children:(0,r.jsx)(e.renderers.tourStep,{steps:t,currentStepIndex:n,onDismiss:c,onNextStep:u,onPreviousStep:l,onMinimize:i,setInitialFocusedElement:d,onGoToStep:f})})};
/* harmony default export */}
//# sourceMappingURL=tour-kit-step.js.map
/***/,
/***/52163:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>c
/* harmony export */});
/* harmony import */var r=n(24246),o=n(69307),i=n(45124),s=n(39167),a=n(50516);
/* harmony import */n(55823);
// import { TourKitContextProvider } from './tour-kit-context';
const c=({config:e,__temp__className:t})=>{const n=(0,o.useRef)(document.createElement("div")).current;return(0,o.useEffect)((()=>{const r=["tour-kit",...t?[t]:[]];n.classList.add(...r);const o=e.options?.portalParentElement||document.body;return o.appendChild(n),()=>{o.removeChild(n)}}),[t,n,e.options?.portalParentElement]),(0,r.jsx)(i/* ["default"] */.Z,{children:(0,r.jsx)(s/* ["default"] */.Z,{config:e,children:(0,r.jsx)("div",{children:(0,o.createPortal)((0,r.jsx)(a/* ["default"] */.Z,{config:e}),n)})})})};
/* harmony default export */}
//# sourceMappingURL=tour-kit.js.map
/***/,
/***/45124:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>a
/* harmony export */});
/* harmony import */var r=n(24246),o=n(99196),i=n.n(o);
/* harmony import */class s extends i().Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){
// Update state so the next render will show the fallback UI.
return{hasError:!0}}componentDidCatch(e,t){
// You can also log the error to an error reporting service
// eslint-disable-next-line no-console
console.error(e,t)}render(){return this.state.hasError?(0,r.jsx)("h1",{children:"Something went wrong."}):this.props.children}}
/* harmony default export */const a=s;
//# sourceMappingURL=error-boundary.js.map
/***/},
/***/82833:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>o
/* harmony export */});
/* harmony import */var r=n(69307);
/* harmony import */
/**
 * External Dependencies
 */
/**
 * A hook that returns true/false if ref node receives focus by either tabbing or clicking into any of its children.
 *
 * @param ref React.MutableRefObject< null | HTMLElement >
 */
const o=e=>{const[t,n]=(0,r.useState)(!1),o=(0,r.useCallback)((()=>{document.hasFocus()&&e.current?.contains(document.activeElement)?n(!0):n(!1)}),[e]),i=(0,r.useCallback)((t=>{e.current?.contains(t.target)?n(!0):n(!1)}),[e]),s=(0,r.useCallback)((t=>{"Tab"===t.key&&(e.current?.contains(t.target)?n(!0):n(!1))}),[e]);return(0,r.useEffect)((()=>(document.addEventListener("focusin",o),document.addEventListener("mousedown",i),document.addEventListener("keyup",s),()=>{document.removeEventListener("focusin",o),document.removeEventListener("mousedown",i),document.removeEventListener("keyup",s)})),[e,o,s,i]),t};
/* harmony default export */}
//# sourceMappingURL=use-focus-handler.js.map
/***/,
/***/4442:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>i
/* harmony export */});
/* harmony import */var r=n(45904),o=n(69307);
/* harmony import */
/**
 * External Dependencies
 */
/**
 * A hook that constraints tabbing/focus on focuable elements in the given element ref.
 *
 * @param ref React.MutableRefObject< null | HTMLElement >
 */
const i=e=>{const[t,n]=(0,o.useState)(),[i,s]=(0,o.useState)(),a=(0,o.useCallback)((e=>{let n=!1;"Tab"===e.key&&(e.shiftKey?
// Shift + Tab
document.activeElement===t&&(i?.focus(),n=!0):document.activeElement===i&&(
// Tab
t?.focus(),n=!0)),n&&(e.preventDefault(),e.stopPropagation())}),[t,i]);(0,o.useEffect)((()=>{const t=e.current?r.focus.focusable.find(e.current):[];return t&&t.length&&(n(t[0]),s(t[t.length-1])),document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}}),[e,a])};
/* harmony default export */}
//# sourceMappingURL=use-focus-trap.js.map
/***/,
/***/84970:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>o
/* harmony export */});
/* harmony import */var r=n(69307);
/* harmony import */
/* eslint-disable jsdoc/require-param */
/**
 * External Dependencies
 */
/**
 * A hook the applies the respective callbacks in response to keydown events.
 */
const o=({onEscape:e,onArrowRight:t,onArrowLeft:n})=>{const o=(0,r.useCallback)((r=>{let o=!1;switch(r.key){case"Escape":e&&(e(),o=!0);break;case"ArrowRight":t&&(t(),o=!0);break;case"ArrowLeft":n&&(n(),o=!0)}o&&(r.preventDefault(),r.stopPropagation())}),[e,t,n]);(0,r.useEffect)((()=>(document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)})),[o])};
/* harmony default export */}
//# sourceMappingURL=use-keydown-handler.js.map
/***/,
/***/39129:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>o
/* harmony export */});
/* harmony import */var r=n(69307);
/* harmony import */
/**
 * External Dependencies
 */
const o=(e,t)=>{const[n,o]=(0,r.useState)([]);(0,r.useEffect)((()=>{n.includes(e)||(o((t=>[...t,e])),t?.(e))}),[e,t,n])};
/* harmony default export */}
//# sourceMappingURL=use-step-tracking.js.map
/***/,
/***/94795:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */s:()=>/* binding */o
/* harmony export */,f:()=>/* binding */i
/* harmony export */});
/* harmony import */var r=n(61282);
/* harmony import */
/**
 * Helper to convert CSV of `classes` to an array.
 *
 * @param classes String or array of classes to format.
 * @returns Array of classes
 */
function o(e){return e?.length?e.toString().split(","):null}const i=n.n(r)()("tour-kit");
//# sourceMappingURL=index.js.map
/***/},
/***/63630:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */_:()=>/* binding */o
/* harmony export */});
/* harmony import */var r=n(94795);
/**
 * Function that returns a Popper modifier that observes the specified root element as well as
 * reference element for any changes. The reason for being a currying function is so that
 * we can customise the root element selector, otherwise observing at a higher than necessary
 * level might cause unnecessary performance penalties.
 *
 * The Popper modifier queues an asynchronous update on the Popper instance whenever either of the
 * Observers trigger its callback.
 *
 * @returns custom Popper modifier
 */const o=({rootElementSelector:e,mutation:t=!1,resize:n=!1}={mutation:!1,resize:!1})=>({name:"liveResizeModifier",enabled:!0,phase:"main",fn:()=>{},effect:o=>{try{const{state:i,instance:s}=o,a=Symbol(),{reference:c}=i.elements;// augment types here because we are mutating the properties on the argument that is passed in
if(c[a]={resizeObserver:new ResizeObserver((()=>{s.update()})),mutationObserver:new MutationObserver((()=>{s.update()}))},n&&(c instanceof Element?c[a].resizeObserver.observe(c):(0,r/* .debug */.f)("Error: ResizeObserver does not work with virtual elements, Tour Kit will not resize automatically if the size of the referenced element changes.")),t){const t=document.querySelector(e||"#wpwrap");t instanceof Element?c[a].mutationObserver.observe(t,{attributes:!0,characterData:!0,childList:!0,subtree:!0}):(0,r/* .debug */.f)(`Error: ${e} selector did not find a valid DOM element, Tour Kit will not update automatically if the DOM layout changes.`)}return()=>{c[a].resizeObserver.disconnect(),c[a].mutationObserver.disconnect(),delete c[a]}}catch(e){(0,r/* .debug */.f)("Error: Tour Kit live resize modifier failed unexpectedly:",e)}}})
//# sourceMappingURL=live-resize-modifier.js.map
/***/},
/***/9072:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>d
/* harmony export */});
/* harmony import */var r=n(24246),o=n(55609),i=n(69307),s=n(65736),a=n(36414),c=n(62373),u=n(43032),l=n(21914);
/* harmony import */const d=({steps:e,onMaximize:t,onDismiss:n,currentStepIndex:d})=>{const{__}=(0,u/* .useI18n */.QT)(),f=d+1,p=e.length-1+1;return(0,r.jsxs)(o.Flex,{gap:0,className:"wpcom-tour-kit-minimized",children:[(0,r.jsx)(o.Button,{onClick:t,"aria-label":__("Resume Tour","default"),children:(0,r.jsxs)(o.Flex,{gap:13,children:[(0,r.jsx)("p",{children:(0,i.createInterpolateElement)((0,s.sprintf)(
/* translators: 1: current page number, 2: total number of pages */
__("Resume tour <span>(%1$d/%2$d)</span>","default"),f,p),{span:(0,r.jsx)("span",{className:"wpcom-tour-kit-minimized__tour-index"})})}),(0,r.jsx)(a/* ["default"] */.Z,{icon:l/* ["default"] */.Z,size:24})]})}),(0,r.jsx)(o.Button,{onClick:n("close-btn-minimized"),"aria-label":__("Close Tour","default"),children:(0,r.jsx)(a/* ["default"] */.Z,{icon:c/* ["default"] */.Z,size:24})})]})};
/* harmony default export */}
//# sourceMappingURL=wpcom-tour-kit-minimized.js.map
/***/,
/***/86301:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>f
/* harmony export */});
/* harmony import */var r=n(24246),o=n(55609),i=n(69307),s=n(43032),a=n(90005),c=n.n(a),u=n(39167),l=n(51059),d=n(12168);
/* harmony import */const f=()=>{const[e,t]=(0,i.useState)(),n=(0,u/* .useTourKitContext */.S)().config,a=n.options?.tourRating?.useTourRating?.()??e,{__}=(0,s/* .useI18n */.QT)();let f=!1;if(!n.options?.tourRating?.enabled)return null;
// check is on tempRating to allow rerating in a restarted tour
f||void 0===e||(f=!0);const p=e=>{if(f)return;const r=e?"thumbs-up":"thumbs-down";r!==a&&(f=!0,t(r),n.options?.tourRating?.onTourRate?.(r))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"wpcom-tour-kit-rating__end-text",children:__("Did you find this guide helpful?","default")}),(0,r.jsxs)("div",{children:[(0,r.jsx)(o.Button,{"aria-label":__("Rate thumbs up","default"),className:c()("wpcom-tour-kit-rating__end-icon",{active:"thumbs-up"===a}),disabled:f,icon:d/* ["default"] */.Z,onClick:()=>p(!0),iconSize:24}),(0,r.jsx)(o.Button,{"aria-label":__("Rate thumbs down","default"),className:c()("wpcom-tour-kit-rating__end-icon",{active:"thumbs-down"===a}),disabled:f,icon:l/* ["default"] */.Z,onClick:()=>p(!1),iconSize:24})]})]})};
/* harmony default export */}
//# sourceMappingURL=wpcom-tour-kit-rating.js.map
/***/,
/***/67809:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>a
/* harmony export */});
/* harmony import */var r=n(24246),o=n(98578),i=n(55609),s=n(43032);
/* harmony import */const a=({currentStepIndex:e,onDismiss:t,onGoToStep:n,onNextStep:a,onPreviousStep:c,setInitialFocusedElement:u,steps:l})=>{const{__}=(0,s/* .useI18n */.QT)(),d=0===e,f=l.length-1;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o/* ["default"] */.Z,{activePageIndex:e,numberOfPages:f+1,onChange:n,children:d?(0,r.jsxs)("div",{children:[(0,r.jsx)(i.Button,{isTertiary:!0,onClick:t("no-thanks-btn"),children:__("Skip","default")}),(0,r.jsx)(i.Button,{className:"wpcom-tour-kit-step-card-navigation__next-btn",isPrimary:!0,onClick:a,ref:u,children:__("Try it out!","default")})]}):(0,r.jsxs)("div",{children:[(0,r.jsx)(i.Button,{isTertiary:!0,onClick:c,children:__("Back","default")}),(0,r.jsx)(i.Button,{className:"wpcom-tour-kit-step-card-navigation__next-btn",isPrimary:!0,onClick:a,ref:u,children:__("Next","default")})]})})})};
/* harmony default export */}
//# sourceMappingURL=wpcom-tour-kit-step-card-navigation.js.map
/***/,
/***/42904:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>c
/* harmony export */});
/* harmony import */var r=n(24246),o=n(55609),i=n(62373),s=n(43032),a=n(81732);
/* harmony import */const c=({onMinimize:e,onDismiss:t})=>{const{__}=(0,s/* .useI18n */.QT)();return(0,r.jsx)("div",{className:"wpcom-tour-kit-step-card-overlay-controls",children:(0,r.jsxs)(o.Flex,{children:[(0,r.jsx)(o.Button,{label:__("Minimize Tour","default"),isPrimary:!0,className:"wpcom-tour-kit-step-card-overlay-controls__minimize-icon",icon:a/* ["default"] */.Z,iconSize:24,onClick:e}),(0,r.jsx)(o.Button,{label:__("Close Tour","default"),isPrimary:!0,icon:i/* ["default"] */.Z,iconSize:24,onClick:t("close-btn")})]})})};
/* harmony default export */}
//# sourceMappingURL=wpcom-tour-kit-step-card-overlay-controls.js.map
/***/,
/***/48881:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>l
/* harmony export */});
/* harmony import */var r=n(24246),o=n(15322),i=n(55609),s=n(43032),a=n(86301),c=n(67809),u=n(42904);
/* harmony import */const l=({steps:e,currentStepIndex:t,onMinimize:n,onDismiss:l,onGoToStep:d,onNextStep:f,onPreviousStep:p,setInitialFocusedElement:m})=>{const{__}=(0,s/* .useI18n */.QT)(),h=e.length-1,{descriptions:v,heading:g,imgSrc:b}=e[t].meta,y=t===h,w=v[(0,o/* .isMobile */.tq)()?"mobile":"desktop"]??v.desktop,x=(0,o/* .getMediaQueryList */.O9)(o/* .MOBILE_BREAKPOINT */.Gh);return(0,r.jsxs)(i.Card,{className:"wpcom-tour-kit-step-card",isElevated:!0,children:[(0,r.jsx)(u/* ["default"] */.Z,{onDismiss:l,onMinimize:n}),b&&(0,r.jsx)(i.CardMedia,{className:"wpcom-tour-kit-step-card__media",children:(0,r.jsxs)("picture",{children:[b.mobile&&(0,r.jsx)("source",{srcSet:b.mobile.src,type:b.mobile.type,media:x?.media}),(0,r.jsx)("img",{alt:__("Tour Media","default"),src:b.desktop?.src})]})}),(0,r.jsxs)(i.CardBody,{children:[(0,r.jsx)("h2",{className:"wpcom-tour-kit-step-card__heading",children:g}),(0,r.jsxs)("p",{className:"wpcom-tour-kit-step-card__description",children:[w,y?(0,r.jsx)(i.Button,{className:"wpcom-tour-kit-step-card__description",isTertiary:!0,onClick:()=>d(0),ref:m,children:__("Restart tour","default")}):null]})]}),(0,r.jsx)(i.CardFooter,{children:y?(0,r.jsx)(a/* ["default"] */.Z,{}):(0,r.jsx)(c/* ["default"] */.Z,{currentStepIndex:t,onDismiss:l,onGoToStep:d,onNextStep:f,onPreviousStep:p,setInitialFocusedElement:m,steps:e})})]})};
/* harmony default export */}
//# sourceMappingURL=wpcom-tour-kit-step-card.js.map
/***/,
/***/36878:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>i
/* harmony export */});
/* harmony import */var r=n(24246),o=n(48881);
/* harmony import */const i=({steps:e,currentStepIndex:t,onDismiss:n,onNextStep:i,onPreviousStep:s,onMinimize:a,setInitialFocusedElement:c,onGoToStep:u})=>(0,r.jsx)(o/* ["default"] */.Z,{steps:e,currentStepIndex:t,onDismiss:n,onMinimize:a,onGoToStep:u,onNextStep:i,onPreviousStep:s,setInitialFocusedElement:c});
/* harmony default export */}
//# sourceMappingURL=wpcom-tour-kit-step.js.map
/***/,
/***/58320:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>c
/* harmony export */});
/* harmony import */var r=n(24246),o=n(52163),i=n(36686),s=n(9072),a=n(36878);
/* harmony import */n(29314);const c=({config:e})=>((0,i/* ["default"] */.Z)(e.steps),(0,r.jsx)(o/* ["default"] */.Z,{__temp__className:"wpcom-tour-kit",config:{...e,renderers:{tourStep:a/* ["default"] */.Z,tourMinimized:s/* ["default"] */.Z}}}));
/* harmony default export */}
//# sourceMappingURL=wpcom-tour-kit.js.map
/***/,
/***/36686:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */o
/* harmony export */});
/* harmony import */var r=n(69307);
/* harmony import */function o(e){(0,r.useEffect)((()=>{e.forEach((e=>{e.meta.imgSrc?.mobile&&((new window.Image).src=e.meta.imgSrc.mobile.src),e.meta.imgSrc?.desktop&&((new window.Image).src=e.meta.imgSrc.desktop.src)}))}),[e])}
//# sourceMappingURL=use-prefetch-tour-assets.js.map
/***/},
/***/21914:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>i
/* harmony export */});
/* harmony import */var r=n(24246),o=n(70444);
/* harmony import */const i=(0,r.jsx)(o.SVG,{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)(o.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M14.086 5.412l3.476-.015c-.627.625-1.225 1.22-1.82 1.81l-.03.031c-.977.971-1.944 1.934-3.015 3.004l1.06 1.061c1.07-1.07 2.036-2.03 3.013-3.002l.03-.03 1.817-1.808-.03 3.448 1.5.013.046-5.28.007-.759-.76.003-5.301.024.007 1.5zM9.914 18.587l-3.476.016c.627-.625 1.225-1.22 1.82-1.81l.03-.031c.977-.971 1.944-1.934 3.015-3.004l-1.06-1.061c-1.07 1.069-2.036 2.03-3.012 3.001l-.001.001-.03.03-1.817 1.808.03-3.448-1.5-.013-.046 5.279-.007.76.76-.003 5.301-.024-.007-1.5z"})});
/* harmony default export */}
//# sourceMappingURL=maximize.js.map
/***/,
/***/81732:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>i
/* harmony export */});
/* harmony import */var r=n(24246),o=n(70444);
/* harmony import */const i=(0,r.jsx)(o.SVG,{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)(o.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M18.514 9.988l-3.476.016c.627-.626 1.225-1.22 1.82-1.811l.03-.03v-.001c.977-.971 1.944-1.933 3.015-3.004l-1.06-1.06c-1.07 1.069-2.037 2.03-3.013 3.001l-.03.03-1.818 1.809.03-3.449-1.5-.013-.045 5.28-.007.76.76-.004 5.301-.024-.007-1.5zM5.486 14.012l3.477-.016-1.82 1.811-.03.03c-.977.972-1.945 1.934-3.015 3.005l1.06 1.06c1.07-1.068 2.035-2.03 3.012-3V16.9l.03-.03 1.818-1.809-.03 3.449 1.5.013.046-5.28.006-.76-.76.004-5.3.024.006 1.5z",fill:"#fff"})});
/* harmony default export */}
//# sourceMappingURL=minimize.js.map
/***/,
/***/51059:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>i
/* harmony export */});
/* harmony import */var r=n(24246),o=n(70444);
/* harmony import */const i=(0,r.jsx)(o.SVG,{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)(o.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M13.131 19.12a.667.667 0 001.227-.417l-.436-4.989h3.88c.954 0 1.64-.916 1.37-1.831L17.42 5.919a.286.286 0 00-.274-.205H9.429v7.588l3.702 5.818zm-5.417-5.977V5.714h-2v7.429h2zm5.98 8a2.381 2.381 0 01-2.01-1.103l-3.297-5.183H4V4h13.145a2 2 0 011.919 1.436l1.753 5.963a3.143 3.143 0 01-3.015 4.03h-2.01l.274 3.125a2.381 2.381 0 01-2.372 2.589z",fill:"#000"})});
/* harmony default export */}
//# sourceMappingURL=thumbs_down.js.map
/***/,
/***/12168:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>i
/* harmony export */});
/* harmony import */var r=n(24246),o=n(70444);
/* harmony import */const i=(0,r.jsx)(o.SVG,{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/SVG",children:(0,r.jsx)(o.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M13.131 4.023a.667.667 0 011.227.416l-.436 4.99h3.88c.954 0 1.64.916 1.37 1.831l-1.753 5.963a.286.286 0 01-.274.206H9.429V9.84l3.702-5.818zM7.714 10v7.428h-2V10h2zm5.98-8c-.814 0-1.572.416-2.01 1.103L8.388 8.286H4v10.857h13.145a2 2 0 001.919-1.436l1.753-5.963a3.143 3.143 0 00-3.015-4.03h-2.01l.274-3.125A2.381 2.381 0 0013.694 2z",fill:"#000"})});
/* harmony default export */}
//# sourceMappingURL=thumbs_up.js.map
/***/,
/***/5157:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */_z:()=>/* binding */l
/* harmony export */});
/* unused harmony exports useBreakpoint, useDesktopBreakpoint, withBreakpoint, withMobileBreakpoint, withDesktopBreakpoint */
/* harmony import */var r=n(25773),o=n(66886),i=n(99196),s=n.n(i),a=n(94333),c=n(15322);
/* harmony import */
/**
 * External dependencies
 */
/**
 * Internal dependencies
 */
/**
 * React hook for getting the status for a breakpoint and keeping it updated.
 *
 * @param {string} breakpoint The breakpoint to consider.
 *
 * @returns {boolean} The current status for the breakpoint.
 */
function u(e){var t=(0,i.useState)((function(){return{isActive:(0,c/* .isWithinBreakpoint */.kV)(e),breakpoint:e}})),n=(0,o/* ["default"] */.Z)(t,2),r=n[0],s=n[1];return(0,i.useEffect)((function(){// The unsubscribe function is the entire cleanup for the effect.
return(0,c/* .subscribeIsWithinBreakpoint */.Sp)(e,(function(t){s((function(n){
// Ensure we bail out without rendering if nothing changes, by preserving state.
return n.isActive===t&&n.breakpoint===e?n:{isActive:t,breakpoint:e}}))}))}),[e]),e===r.breakpoint?r.isActive:(0,c/* .isWithinBreakpoint */.kV)(e)}
/**
 * React hook for getting the status for the mobile breakpoint and keeping it
 * updated.
 *
 * @returns {boolean} The current status for the breakpoint.
 */function l(){return u(c/* .MOBILE_BREAKPOINT */.Gh)}
/**
 * React hook for getting the status for the desktop breakpoint and keeping it
 * updated.
 *
 * @returns {boolean} The current status for the breakpoint.
 */
/**
 * React higher order component for getting the status for a breakpoint and
 * keeping it updated.
 *
 * @param {string} breakpoint The breakpoint to consider.
 *
 * @returns {Function} A function that given a component returns the
 * wrapped component.
 */
(0,a.createHigherOrderComponent)((function(e){return(0,i.forwardRef)((function(t,n){var o=u(c/* .MOBILE_BREAKPOINT */.Gh);return s().createElement(e,(0,r/* ["default"] */.Z)({},t,{isBreakpointActive:o,ref:n}))}))}),"WithMobileBreakpoint"),(0,a.createHigherOrderComponent)((function(e){return(0,i.forwardRef)((function(t,n){var o=u(c/* .DESKTOP_BREAKPOINT */.oh);return s().createElement(e,(0,r/* ["default"] */.Z)({},t,{isBreakpointActive:o,ref:n}))}))}),"WithDesktopBreakpoint")
/**
 * React higher order component for getting the status for the mobile
 * breakpoint and keeping it updated.
 *
 * @param {React.Component|Function} Wrapped The component to wrap.
 *
 * @returns {Function} The wrapped component.
 */}
/***/,
/***/15322:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Gh:()=>/* binding */o
/* harmony export */,oh:()=>/* binding */i
/* harmony export */,O9:()=>/* binding */d
/* harmony export */,kV:()=>/* binding */f
/* harmony export */,Sp:()=>/* binding */p
/* harmony export */,tq:()=>/* binding */m
/* harmony export */});
/* unused harmony exports subscribeIsMobile, isDesktop, subscribeIsDesktop, getWindowInnerWidth, isTabletResolution, DEVICE_MOBILE, DEVICE_TABLET, DEVICE_DESKTOP, resolveDeviceTypeByViewPort */
// Determine whether a user is viewing calypso from a device within a
// particular mobile-first responsive breakpoint, matching our existing media
// queries. [1]
// This function takes a string matching one of our mobile-first breakpoints
// and returns a boolean based on whether the current `window.innerWidth`
// matches. This is used to segment behavior based on device or browser size,
// but should not be used in place of css for design.
// Valid breakpoints include:
// - '<480px'
// - '<660px'
// - '<800px'
// - '<960px'
// - '<1040px'
// - '<1280px'
// - '<1400px'
// - '>480px'
// - '>660px'
// - '>800px'
// - '>960px'
// - '>1040px'
// - '>1280px'
// - '>1400px'
// - '480px-660px'
// - '480px-960px'
// - '660px-960px'
// As implemented in our sass media query mixins, minimums are exclusive, while
// maximums are inclusive. i.e.,
// - '>480px' is equivalent to `@media (min-width: 481px)`
// - '<960px' is equivalent to `@media (max-width: 960px)`
// - '480px-960px' is equivalent to `@media (max-width: 960px) and (min-width: 481px)`
// [1] https://github.com/Automattic/wp-calypso/blob/HEAD/docs/coding-guidelines/css.md#media-queries
// FIXME: We can't detect window size on the server, so until we have more intelligent detection,
// use 769, which is just above the general maximum mobile screen width.
const r=769,o="<480px",i=">960px",s="undefined"==typeof window||!window.matchMedia,a=()=>null;function c(e){return{addListener:()=>{},removeListener:()=>{},...e}}function u(e){const{min:t,max:n}=e??{};return void 0!==t&&void 0!==n?s?c({matches:r>t&&r<=n}):window.matchMedia(`(min-width: ${t+1}px) and (max-width: ${n}px)`):void 0!==t?s?c({matches:r>t}):window.matchMedia(`(min-width: ${t+1}px)`):void 0!==n&&(s?c({matches:r<=n}):window.matchMedia(`(max-width: ${n}px)`))}const l={"<480px":u({max:480}),"<660px":u({max:660}),"<782px":u({max:782}),"<800px":u({max:800}),"<960px":u({max:960}),"<1040px":u({max:1040}),"<1280px":u({max:1280}),"<1400px":u({max:1400}),">480px":u({min:480}),">660px":u({min:660}),">782px":u({min:782}),">800px":u({min:800}),">960px":u({min:960}),">1040px":u({min:1040}),">1280px":u({min:1280}),">1400px":u({min:1400}),"480px-660px":u({min:480,max:660}),"660px-960px":u({min:660,max:960}),"480px-960px":u({min:480,max:960})};function d(e){if(l.hasOwnProperty(e))return l[e];try{
// eslint-disable-next-line no-console
console.warn("Undefined breakpoint used in `mobile-first-breakpoint`",e)}catch(e){}}
/**
 * Returns whether the current window width matches a breakpoint.
 *
 * @param {string} breakpoint The breakpoint to consider.
 * @returns {boolean|undefined} Whether the provided breakpoint is matched.
 */function f(e){const t=d(e);return t?t.matches:void 0}
/**
 * Registers a listener to be notified of changes to breakpoint matching status.
 *
 * @param {string} breakpoint The breakpoint to consider.
 * @param {Function} listener The listener to be called on change.
 * @returns {Function} The function to be called when unsubscribing.
 */function p(e,t){if(!t)return a;const n=d(e);if(n&&!s){const e=e=>t(e.matches);
// Return unsubscribe function.
return n.addListener(e),()=>n.removeListener(e)}return a}
/**
 * Returns whether the current window width matches the mobile breakpoint.
 *
 * @returns {boolean|undefined} Whether the mobile breakpoint is matched.
 */function m(){return f(o)}
/**
 * Registers a listener to be notified of changes to mobile breakpoint matching status.
 *
 * @param {Function} listener The listener to be called on change.
 * @returns {Function} The registered subscription; undefined if none.
 */}
/******************************************/
//# sourceMappingURL=index.js.map
/***/,
/***/85943:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */kZ:()=>/* binding */p
/* harmony export */});
/* unused harmony export createPopper */
/* harmony import */var r=n(4165),o=n(30982),i=n(32801),s=n(21108),a=n(22669),c=n(28346),u=n(22924),l=n(53817),d={placement:"bottom",modifiers:[],strategy:"absolute"};
/* harmony import */function f(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function p(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,p=void 0===n?[]:n,m=t.defaultOptions,h=void 0===m?d:m;return function(e,t,n){void 0===n&&(n=h);var m={placement:"bottom",orderedModifiers:[],options:Object.assign({},d,h),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},v=[],g=!1,b={state:m,setOptions:function(n){var r="function"==typeof n?n(m.options):n;y(),m.options=Object.assign({},h,m.options,r),m.scrollParents={reference:(0,l/* .isElement */.kK)(e)?(0,i/* ["default"] */.Z)(e):e.contextElement?(0,i/* ["default"] */.Z)(e.contextElement):[],popper:(0,i/* ["default"] */.Z)(t)};// Orders the modifiers based on their dependencies and `phase`
// properties
var o=(0,a/* ["default"] */.Z)((0,u/* ["default"] */.Z)([].concat(p,m.options.modifiers)));// Strip out disabled modifiers
return m.orderedModifiers=o.filter((function(e){return e.enabled})),m.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:m,name:t,instance:b,options:r}),s=function(){};v.push(i||s)}})),b.update()},
// Sync update – it will always be executed, even if not necessary. This
// is useful for low frequency updates where sync behavior simplifies the
// logic.
// For high frequency updates (e.g. `resize` and `scroll` events), always
// prefer the async Popper#update method
forceUpdate:function(){if(!g){var e=m.elements,t=e.reference,n=e.popper;// Don't proceed if `reference` or `popper` are not valid elements
// anymore
if(f(t,n)){// Store the reference and popper rects to be read by modifiers
m.rects={reference:(0,r/* ["default"] */.Z)(t,(0,s/* ["default"] */.Z)(n),"fixed"===m.options.strategy),popper:(0,o/* ["default"] */.Z)(n)},// Modifiers have the ability to reset the current update cycle. The
// most common use case for this is the `flip` modifier changing the
// placement, which then needs to re-run all the modifiers, because the
// logic was previously ran for the previous placement and is therefore
// stale/incorrect
m.reset=!1,m.placement=m.options.placement,// On each update cycle, the `modifiersData` property for each modifier
// is filled with the initial data specified by the modifier. This means
// it doesn't persist and is fresh on each update.
// To ensure persistent data, use `${name}#persistent`
m.orderedModifiers.forEach((function(e){return m.modifiersData[e.name]=Object.assign({},e.data)}));for(var i=0;i<m.orderedModifiers.length;i++)if(!0!==m.reset){var a=m.orderedModifiers[i],c=a.fn,u=a.options,l=void 0===u?{}:u,d=a.name;"function"==typeof c&&(m=c({state:m,options:l,name:d,instance:b})||m)}else m.reset=!1,i=-1}}},
// Async and optimistically optimized update – it will not be executed if
// not necessary (debounced to run at most once-per-tick)
update:(0,c/* ["default"] */.Z)((function(){return new Promise((function(e){b.forceUpdate(),e(m)}))})),destroy:function(){y(),g=!0}};if(!f(e,t))return b;function y(){v.forEach((function(e){return e()})),v=[]}return b.setOptions(n).then((function(e){!g&&n.onFirstUpdate&&n.onFirstUpdate(e)})),b}}}// eslint-disable-next-line import/no-unused-modules
/***/,
/***/25681:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */o
/* harmony export */});
/* harmony import */var r=n(53817);function o(e,t){var n=t.getRootNode&&t.getRootNode();// First, attempt with faster native method
if(e.contains(t))return!0;// Give up, the result is false
if(n&&(0,r/* .isShadowRoot */.Zq)(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;// $FlowFixMe[prop-missing]: need a better way to handle this...
o=o.parentNode||o.host}while(o)}return!1}
/***/},
/***/31778:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */i
/* harmony export */});
/* harmony import */var r=n(53817),o=n(53295);
/* harmony import */function i(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),i=1,s=1;if((0,r/* .isHTMLElement */.Re)(e)&&t){var a=e.offsetHeight,c=e.offsetWidth;// Do not attempt to divide by 0, otherwise we get `Infinity` as scale
// Fallback to 1 in case both values are `0`
c>0&&(i=(0,o/* .round */.NM)(n.width)/c||1),a>0&&(s=(0,o/* .round */.NM)(n.height)/a||1)}return{width:n.width/i,height:n.height/s,top:n.top/s,right:n.right/i,bottom:n.bottom/s,left:n.left/i,x:n.left/i,y:n.top/s}}
/***/},
/***/63957:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */b
/* harmony export */});
/* harmony import */var r=n(71899),o=n(40553),i=n(20011),s=n(32801),a=n(21108),c=n(55565),u=n(76594),l=n(53817),d=n(31778),f=n(33087),p=n(25681),m=n(63465),h=n(14515),v=n(53295);
/* harmony import */function g(e,t){return t===r/* .viewport */.Pj?(0,h/* ["default"] */.Z)((0,o/* ["default"] */.Z)(e)):(0,l/* .isElement */.kK)(t)?function(e){var t=(0,d/* ["default"] */.Z)(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):(0,h/* ["default"] */.Z)((0,i/* ["default"] */.Z)((0,c/* ["default"] */.Z)(e)))}// A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
// Gets the maximum area that the element is visible in due to any number of
// clipping parents
function b(e,t,n){var r="clippingParents"===t?function(e){var t=(0,s/* ["default"] */.Z)((0,f/* ["default"] */.Z)(e)),n=["absolute","fixed"].indexOf((0,u/* ["default"] */.Z)(e).position)>=0&&(0,l/* .isHTMLElement */.Re)(e)?(0,a/* ["default"] */.Z)(e):e;return(0,l/* .isElement */.kK)(n)?t.filter((function(e){return(0,l/* .isElement */.kK)(e)&&(0,p/* ["default"] */.Z)(e,n)&&"body"!==(0,m/* ["default"] */.Z)(e)})):[];// $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],c=o.reduce((function(t,n){var r=g(e,n);return t.top=(0,v/* .max */.Fp)(r.top,t.top),t.right=(0,v/* .min */.VV)(r.right,t.right),t.bottom=(0,v/* .min */.VV)(r.bottom,t.bottom),t.left=(0,v/* .max */.Fp)(r.left,t.left),t}),g(e,i));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}
/***/},
/***/4165:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */d
/* harmony export */});
/* harmony import */var r=n(31778),o=n(59866),i=n(63465),s=n(53817),a=n(41061),c=n(55565),u=n(62714),l=n(53295);
/* harmony import */ // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.
function d(e,t,n){void 0===n&&(n=!1);var d=(0,s/* .isHTMLElement */.Re)(t),f=(0,s/* .isHTMLElement */.Re)(t)&&function(e){var t=e.getBoundingClientRect(),n=(0,l/* .round */.NM)(t.width)/e.offsetWidth||1,r=(0,l/* .round */.NM)(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),p=(0,c/* ["default"] */.Z)(t),m=(0,r/* ["default"] */.Z)(e,f),h={scrollLeft:0,scrollTop:0},v={x:0,y:0};return(d||!d&&!n)&&(("body"!==(0,i/* ["default"] */.Z)(t)||// https://github.com/popperjs/popper-core/issues/1078
(0,u/* ["default"] */.Z)(p))&&(h=(0,o/* ["default"] */.Z)(t)),(0,s/* .isHTMLElement */.Re)(t)?((v=(0,r/* ["default"] */.Z)(t,!0)).x+=t.clientLeft,v.y+=t.clientTop):p&&(v.x=(0,a/* ["default"] */.Z)(p))),{x:m.left+h.scrollLeft-v.x,y:m.top+h.scrollTop-v.y,width:m.width,height:m.height}}
/***/},
/***/76594:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */o
/* harmony export */});
/* harmony import */var r=n(62475);function o(e){return(0,r/* ["default"] */.Z)(e).getComputedStyle(e)}
/***/},
/***/55565:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */o
/* harmony export */});
/* harmony import */var r=n(53817);function o(e){
// $FlowFixMe[incompatible-return]: assume body is always available
return(((0,r/* .isElement */.kK)(e)?e.ownerDocument:// $FlowFixMe[prop-missing]
e.document)||window.document).documentElement}
/***/},
/***/20011:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */c
/* harmony export */});
/* harmony import */var r=n(55565),o=n(76594),i=n(41061),s=n(47370),a=n(53295);
/* harmony import */
// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable
function c(e){var t,n=(0,r/* ["default"] */.Z)(e),c=(0,s/* ["default"] */.Z)(e),u=null==(t=e.ownerDocument)?void 0:t.body,l=(0,a/* .max */.Fp)(n.scrollWidth,n.clientWidth,u?u.scrollWidth:0,u?u.clientWidth:0),d=(0,a/* .max */.Fp)(n.scrollHeight,n.clientHeight,u?u.scrollHeight:0,u?u.clientHeight:0),f=-c.scrollLeft+(0,i/* ["default"] */.Z)(e),p=-c.scrollTop;return"rtl"===(0,o/* ["default"] */.Z)(u||n).direction&&(f+=(0,a/* .max */.Fp)(n.clientWidth,u?u.clientWidth:0)-l),{width:l,height:d,x:f,y:p}}
/***/},
/***/82895:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/30982:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */o
/* harmony export */});
/* harmony import */var r=n(31778);
// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function o(e){var t=(0,r/* ["default"] */.Z)(e),n=e.offsetWidth,o=e.offsetHeight;// Use the clientRect sizes if it's not been transformed.
// Fixes https://github.com/popperjs/popper-core/issues/1223
return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}
/***/},
/***/63465:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e){return e?(e.nodeName||"").toLowerCase():null}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/59866:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */a
/* harmony export */});
/* harmony import */var r=n(47370),o=n(62475),i=n(53817),s=n(82895);
/* harmony import */function a(e){return e!==(0,o/* ["default"] */.Z)(e)&&(0,i/* .isHTMLElement */.Re)(e)?(0,s/* ["default"] */.Z)(e):(0,r/* ["default"] */.Z)(e)}
/***/},
/***/21108:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */l
/* harmony export */});
/* harmony import */var r=n(62475),o=n(63465),i=n(76594),s=n(53817),a=n(78265),c=n(33087);
/* harmony import */function u(e){return(0,s/* .isHTMLElement */.Re)(e)&&// https://github.com/popperjs/popper-core/issues/837
"fixed"!==(0,i/* ["default"] */.Z)(e).position?e.offsetParent:null}// `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function l(e){for(var t=(0,r/* ["default"] */.Z)(e),n=u(e);n&&(0,a/* ["default"] */.Z)(n)&&"static"===(0,i/* ["default"] */.Z)(n).position;)n=u(n);return n&&("html"===(0,o/* ["default"] */.Z)(n)||"body"===(0,o/* ["default"] */.Z)(n)&&"static"===(0,i/* ["default"] */.Z)(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&(0,s/* .isHTMLElement */.Re)(e)&&"fixed"===(0,i/* ["default"] */.Z)(e).position)return null;var n=(0,c/* ["default"] */.Z)(e);for((0,s/* .isShadowRoot */.Zq)(n)&&(n=n.host);(0,s/* .isHTMLElement */.Re)(n)&&["html","body"].indexOf((0,o/* ["default"] */.Z)(n))<0;){var r=(0,i/* ["default"] */.Z)(n);// This is non-exhaustive but covers the most common CSS properties that
// create a containing block.
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}
/***/},
/***/33087:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */s
/* harmony export */});
/* harmony import */var r=n(63465),o=n(55565),i=n(53817);
/* harmony import */function s(e){return"html"===(0,r/* ["default"] */.Z)(e)?e:// this is a quicker (but less type safe) way to save quite some bytes from the bundle
// $FlowFixMe[incompatible-return]
// $FlowFixMe[prop-missing]
e.assignedSlot||// step into the shadow DOM of the parent of a slotted node
e.parentNode||(// DOM Element detected
(0,i/* .isShadowRoot */.Zq)(e)?e.host:null)||// ShadowRoot detected
// $FlowFixMe[incompatible-call]: HTMLElement is a Node
(0,o/* ["default"] */.Z)(e)}
/***/},
/***/37819:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */a
/* harmony export */});
/* harmony import */var r=n(33087),o=n(62714),i=n(63465),s=n(53817);
/* harmony import */function a(e){return["html","body","#document"].indexOf((0,i/* ["default"] */.Z)(e))>=0?e.ownerDocument.body:(0,s/* .isHTMLElement */.Re)(e)&&(0,o/* ["default"] */.Z)(e)?e:a((0,r/* ["default"] */.Z)(e))}
/***/},
/***/40553:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */s
/* harmony export */});
/* harmony import */var r=n(62475),o=n(55565),i=n(41061);
/* harmony import */function s(e){var t=(0,r/* ["default"] */.Z)(e),n=(0,o/* ["default"] */.Z)(e),s=t.visualViewport,a=n.clientWidth,c=n.clientHeight,u=0,l=0;// NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
// can be obscured underneath it.
// Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
// if it isn't open, so if this isn't available, the popper will be detected
// to overflow the bottom of the screen too early.
return s&&(a=s.width,c=s.height,// Uses Layout Viewport (like Chrome; Safari does not currently)
// In Chrome, it returns a value very close to 0 (+/-) but contains rounding
// errors due to floating point numbers, so we need to check precision.
// Safari returns a number <= 0, usually < -1 when pinch-zoomed
// Feature detection fails in mobile emulation mode in Chrome.
// Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
// 0.001
// Fallback here: "Not Safari" userAgent
/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(u=s.offsetLeft,l=s.offsetTop)),{width:a,height:c,x:u+(0,i/* ["default"] */.Z)(e),y:l}}
/***/},
/***/62475:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/47370:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */o
/* harmony export */});
/* harmony import */var r=n(62475);function o(e){var t=(0,r/* ["default"] */.Z)(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}
/***/},
/***/41061:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */s
/* harmony export */});
/* harmony import */var r=n(31778),o=n(55565),i=n(47370);
/* harmony import */function s(e){
// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
// Popper 1 is broken in this case and never had a bug report so let's assume
// it's not an issue. I don't think anyone ever specifies width on <html>
// anyway.
// Browsers where the left scrollbar doesn't cause an issue report `0` for
// this (e.g. Edge 2019, IE11, Safari)
return(0,r/* ["default"] */.Z)((0,o/* ["default"] */.Z)(e)).left+(0,i/* ["default"] */.Z)(e).scrollLeft}
/***/},
/***/53817:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */kK:()=>/* binding */o
/* harmony export */,Re:()=>/* binding */i
/* harmony export */,Zq:()=>/* binding */s
/* harmony export */});
/* harmony import */var r=n(62475);function o(e){return e instanceof(0,r/* ["default"] */.Z)(e).Element||e instanceof Element}function i(e){return e instanceof(0,r/* ["default"] */.Z)(e).HTMLElement||e instanceof HTMLElement}function s(e){
// IE 11 has no ShadowRoot
return"undefined"!=typeof ShadowRoot&&(e instanceof(0,r/* ["default"] */.Z)(e).ShadowRoot||e instanceof ShadowRoot)}
/***/},
/***/62714:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */o
/* harmony export */});
/* harmony import */var r=n(76594);function o(e){
// Firefox wants us to check `-x` and `-y` variations as well
var t=(0,r/* ["default"] */.Z)(e),n=t.overflow,o=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+o)}
/***/},
/***/78265:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */o
/* harmony export */});
/* harmony import */var r=n(63465);function o(e){return["table","td","th"].indexOf((0,r/* ["default"] */.Z)(e))>=0}
/***/},
/***/32801:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */a
/* harmony export */});
/* harmony import */var r=n(37819),o=n(33087),i=n(62475),s=n(62714);
/* harmony import */
/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/
function a(e,t){var n;void 0===t&&(t=[]);var c=(0,r/* ["default"] */.Z)(e),u=c===(null==(n=e.ownerDocument)?void 0:n.body),l=(0,i/* ["default"] */.Z)(c),d=u?[l].concat(l.visualViewport||[],(0,s/* ["default"] */.Z)(c)?c:[]):c,f=t.concat(d);return u?f:// $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
f.concat(a((0,o/* ["default"] */.Z)(d)))}
/***/},
/***/71899:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */we:()=>/* binding */r
/* harmony export */,I:()=>/* binding */o
/* harmony export */,F2:()=>/* binding */i
/* harmony export */,t$:()=>/* binding */s
/* harmony export */,d7:()=>/* binding */a
/* harmony export */,mv:()=>/* binding */c
/* harmony export */,BL:()=>/* binding */u
/* harmony export */,ut:()=>/* binding */l
/* harmony export */,zV:()=>/* binding */d
/* harmony export */,Pj:()=>/* binding */f
/* harmony export */,k5:()=>/* binding */p
/* harmony export */,YP:()=>/* binding */m
/* harmony export */,bw:()=>/* binding */h
/* harmony export */,Ct:()=>/* binding */v
/* harmony export */,xs:()=>/* binding */g
/* harmony export */});
/* unused harmony exports beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite */
var r="top",o="bottom",i="right",s="left",a="auto",c=[r,o,i,s],u="start",l="end",d="clippingParents",f="viewport",p="popper",m="reference",h=c.reduce((function(e,t){return e.concat([t+"-"+u,t+"-"+l])}),[]),v=[].concat(c,[a]).reduce((function(e,t){return e.concat([t,t+"-"+u,t+"-"+l])}),[]),g=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"]}
/***/,
/***/46087:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>i
/* harmony export */});
/* harmony import */var r=n(63465),o=n(53817);
/* harmony import */ // eslint-disable-next-line import/no-unused-modules
/* harmony default export */const i={name:"applyStyles",enabled:!0,phase:"write",fn:
// This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},s=t.elements[e];// arrow is optional + virtual elements
(0,o/* .isHTMLElement */.Re)(s)&&(0,r/* ["default"] */.Z)(s)&&(// Flow doesn't support to extend this property, but it's the most
// effective way to apply styles to an HTMLElement
// $FlowFixMe[cannot-write]
Object.assign(s.style,n),Object.keys(i).forEach((function(e){var t=i[e];!1===t?s.removeAttribute(e):s.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var i=t.elements[e],s=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});// arrow is optional + virtual elements
(0,o/* .isHTMLElement */.Re)(i)&&(0,r/* ["default"] */.Z)(i)&&(Object.assign(i.style,a),Object.keys(s).forEach((function(e){i.removeAttribute(e)})))}))}},requires:["computeStyles"]};
/***/},
/***/2089:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>f
/* harmony export */});
/* harmony import */var r=n(56066),o=n(30982),i=n(25681),s=n(21108),a=n(46159),c=n(944),u=n(62631),l=n(8104),d=n(71899);
/* harmony import */ // eslint-disable-next-line import/no-unused-modules
/* harmony default export */const f={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,i=e.name,f=e.options,p=n.elements.arrow,m=n.modifiersData.popperOffsets,h=(0,r/* ["default"] */.Z)(n.placement),v=(0,a/* ["default"] */.Z)(h),g=[d/* .left */.t$,d/* .right */.F2].indexOf(h)>=0?"height":"width";if(p&&m){var b=function(e,t){return e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,(0,u/* ["default"] */.Z)("number"!=typeof e?e:(0,l/* ["default"] */.Z)(e,d/* .basePlacements */.mv))}(f.padding,n),y=(0,o/* ["default"] */.Z)(p),w="y"===v?d/* .top */.we:d/* .left */.t$,x="y"===v?d/* .bottom */.I:d/* .right */.F2,Z=n.rects.reference[g]+n.rects.reference[v]-m[v]-n.rects.popper[g],k=m[v]-n.rects.reference[v],S=(0,s/* ["default"] */.Z)(p),C=S?"y"===v?S.clientHeight||0:S.clientWidth||0:0,O=Z/2-k/2,j=b[w],_=C-y[g]-b[x],E=C/2-y[g]/2+O,F=(0,c/* .within */.u)(j,E,_),R=v;n.modifiersData[i]=((t={})[R]=F,t.centerOffset=F-E,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&(0,i/* ["default"] */.Z)(t.elements.popper,r)&&(t.elements.arrow=r);// CSS selector
},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};
/***/},
/***/66938:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>p
/* harmony export */});
/* unused harmony export mapToStyles */
/* harmony import */var r=n(71899),o=n(21108),i=n(62475),s=n(55565),a=n(76594),c=n(56066),u=n(15262),l=n(53295),d={top:"auto",right:"auto",bottom:"auto",left:"auto"};
/* harmony import */function f(e){var t,n=e.popper,c=e.popperRect,u=e.placement,f=e.variation,p=e.offsets,m=e.position,h=e.gpuAcceleration,v=e.adaptive,g=e.roundOffsets,b=e.isFixed,y=p.x,w=void 0===y?0:y,x=p.y,Z=void 0===x?0:x,k="function"==typeof g?g({x:w,y:Z}):{x:w,y:Z};w=k.x,Z=k.y;var S=p.hasOwnProperty("x"),C=p.hasOwnProperty("y"),O=r/* .left */.t$,j=r/* .top */.we,_=window;if(v){var E=(0,o/* ["default"] */.Z)(n),F="clientHeight",R="clientWidth";if(E===(0,i/* ["default"] */.Z)(n)&&(E=(0,s/* ["default"] */.Z)(n),"static"!==(0,a/* ["default"] */.Z)(E).position&&"absolute"===m&&(F="scrollHeight",R="scrollWidth")),u===r/* .top */.we||(u===r/* .left */.t$||u===r/* .right */.F2)&&f===r/* .end */.ut)j=r/* .bottom */.I,Z-=(b&&E===_&&_.visualViewport?_.visualViewport.height:// $FlowFixMe[prop-missing]
E[F])-c.height,Z*=h?1:-1;if(u===r/* .left */.t$||(u===r/* .top */.we||u===r/* .bottom */.I)&&f===r/* .end */.ut)O=r/* .right */.F2,w-=(b&&E===_&&_.visualViewport?_.visualViewport.width:// $FlowFixMe[prop-missing]
E[R])-c.width,w*=h?1:-1}var T,P=Object.assign({position:m},v&&d),M=!0===g?// Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:(0,l/* .round */.NM)(t*r)/r||0,y:(0,l/* .round */.NM)(n*r)/r||0}}({x:w,y:Z}):{x:w,y:Z};return w=M.x,Z=M.y,h?Object.assign({},P,((T={})[j]=C?"0":"",T[O]=S?"0":"",T.transform=(_.devicePixelRatio||1)<=1?"translate("+w+"px, "+Z+"px)":"translate3d("+w+"px, "+Z+"px, 0)",T)):Object.assign({},P,((t={})[j]=C?Z+"px":"",t[O]=S?w+"px":"",t.transform="",t))}// eslint-disable-next-line import/no-unused-modules
/* harmony default export */const p={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,s=void 0===i||i,a=n.roundOffsets,l=void 0===a||a,d={placement:(0,c/* ["default"] */.Z)(t.placement),variation:(0,u/* ["default"] */.Z)(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,f(Object.assign({},d,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,f(Object.assign({},d,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};
/***/},
/***/65377:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>i
/* harmony export */});
/* harmony import */var r=n(62475),o={passive:!0};
// eslint-disable-next-line import/no-unused-modules
// eslint-disable-next-line import/no-unused-modules
/* harmony default export */const i={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,i=e.options,s=i.scroll,a=void 0===s||s,c=i.resize,u=void 0===c||c,l=(0,r/* ["default"] */.Z)(t.elements.popper),d=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&d.forEach((function(e){e.addEventListener("scroll",n.update,o)})),u&&l.addEventListener("resize",n.update,o),function(){a&&d.forEach((function(e){e.removeEventListener("scroll",n.update,o)})),u&&l.removeEventListener("resize",n.update,o)}},data:{}};
/***/},
/***/46190:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>l
/* harmony export */});
/* harmony import */var r=n(51037),o=n(56066),i=n(49432),s=n(30822),a=n(8341),c=n(71899),u=n(15262);
/* harmony import */ // eslint-disable-next-line import/no-unused-modules
/* harmony default export */const l={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,l=e.name;if(!t.modifiersData[l]._skip){for(var d=n.mainAxis,f=void 0===d||d,p=n.altAxis,m=void 0===p||p,h=n.fallbackPlacements,v=n.padding,g=n.boundary,b=n.rootBoundary,y=n.altBoundary,w=n.flipVariations,x=void 0===w||w,Z=n.allowedAutoPlacements,k=t.options.placement,S=(0,o/* ["default"] */.Z)(k),C=h||(S===k||!x?[(0,r/* ["default"] */.Z)(k)]:
// eslint-disable-next-line import/no-unused-modules
function(e){if((0,o/* ["default"] */.Z)(e)===c/* .auto */.d7)return[];var t=(0,r/* ["default"] */.Z)(e);return[(0,i/* ["default"] */.Z)(e),t,(0,i/* ["default"] */.Z)(t)]}(k)),O=[k].concat(C).reduce((function(e,n){return e.concat((0,o/* ["default"] */.Z)(n)===c/* .auto */.d7?(0,a/* ["default"] */.Z)(t,{placement:n,boundary:g,rootBoundary:b,padding:v,flipVariations:x,allowedAutoPlacements:Z}):n)}),[]),j=t.rects.reference,_=t.rects.popper,E=new Map,F=!0,R=O[0],T=0;T<O.length;T++){var P=O[T],M=(0,o/* ["default"] */.Z)(P),z=(0,u/* ["default"] */.Z)(P)===c/* .start */.BL,A=[c/* .top */.we,c/* .bottom */.I].indexOf(M)>=0,N=A?"width":"height",I=(0,s/* ["default"] */.Z)(t,{placement:P,boundary:g,rootBoundary:b,altBoundary:y,padding:v}),L=A?z?c/* .right */.F2:c/* .left */.t$:z?c/* .bottom */.I:c/* .top */.we;j[N]>_[N]&&(L=(0,r/* ["default"] */.Z)(L));var D=(0,r/* ["default"] */.Z)(L),B=[];if(f&&B.push(I[M]<=0),m&&B.push(I[L]<=0,I[D]<=0),B.every((function(e){return e}))){R=P,F=!1;break}E.set(P,B)}if(F)for(
// `2` may be desired in some cases – research later
var q=function(e){var t=O.find((function(t){var n=E.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return R=t,"break"},H=x?3:1;H>0;H--){if("break"===q(H))break}t.placement!==R&&(t.modifiersData[l]._skip=!0,t.placement=R,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};
/***/},
/***/67801:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>a
/* harmony export */});
/* harmony import */var r=n(71899),o=n(30822);
/* harmony import */function i(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function s(e){return[r/* .top */.we,r/* .right */.F2,r/* .bottom */.I,r/* .left */.t$].some((function(t){return e[t]>=0}))}// eslint-disable-next-line import/no-unused-modules
/* harmony default export */const a={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,a=t.rects.popper,c=t.modifiersData.preventOverflow,u=(0,o/* ["default"] */.Z)(t,{elementContext:"reference"}),l=(0,o/* ["default"] */.Z)(t,{altBoundary:!0}),d=i(u,r),f=i(l,a,c),p=s(d),m=s(f);t.modifiersData[n]={referenceClippingOffsets:d,popperEscapeOffsets:f,isReferenceHidden:p,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":m})}};
/***/},
/***/16415:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>i
/* harmony export */});
/* unused harmony export distanceAndSkiddingToXY */
/* harmony import */var r=n(56066),o=n(71899);
/* harmony import */ // eslint-disable-next-line import/no-unused-modules
/* harmony default export */const i={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,i=e.name,s=n.offset,a=void 0===s?[0,0]:s,c=o/* .placements.reduce */.Ct.reduce((function(e,n){return e[n]=
// eslint-disable-next-line import/no-unused-modules
function(e,t,n){var i=(0,r/* ["default"] */.Z)(e),s=[o/* .left */.t$,o/* .top */.we].indexOf(i)>=0?-1:1,a="function"==typeof n?n(Object.assign({},t,{placement:e})):n,c=a[0],u=a[1];return c=c||0,u=(u||0)*s,[o/* .left */.t$,o/* .right */.F2].indexOf(i)>=0?{x:u,y:c}:{x:c,y:u}}(n,t.rects,a),e}),{}),u=c[t.placement],l=u.x,d=u.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=d),t.modifiersData[i]=c}};
/***/},
/***/66915:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>o
/* harmony export */});
/* harmony import */var r=n(2012);// eslint-disable-next-line import/no-unused-modules
/* harmony default export */const o={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;
// Offsets are the actual position the popper needs to have to be
// properly positioned near its reference element
// This is the most basic placement, and will be adjusted by
// the modifiers in the next step
t.modifiersData[n]=(0,r/* ["default"] */.Z)({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};
/***/},
/***/53898:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>m
/* harmony export */});
/* harmony import */var r=n(71899),o=n(56066),i=n(46159),s=n(33736),a=n(944),c=n(30982),u=n(21108),l=n(30822),d=n(15262),f=n(89371),p=n(53295);
/* harmony import */ // eslint-disable-next-line import/no-unused-modules
/* harmony default export */const m={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,m=e.name,h=n.mainAxis,v=void 0===h||h,g=n.altAxis,b=void 0!==g&&g,y=n.boundary,w=n.rootBoundary,x=n.altBoundary,Z=n.padding,k=n.tether,S=void 0===k||k,C=n.tetherOffset,O=void 0===C?0:C,j=(0,l/* ["default"] */.Z)(t,{boundary:y,rootBoundary:w,padding:Z,altBoundary:x}),_=(0,o/* ["default"] */.Z)(t.placement),E=(0,d/* ["default"] */.Z)(t.placement),F=!E,R=(0,i/* ["default"] */.Z)(_),T=(0,s/* ["default"] */.Z)(R),P=t.modifiersData.popperOffsets,M=t.rects.reference,z=t.rects.popper,A="function"==typeof O?O(Object.assign({},t.rects,{placement:t.placement})):O,N="number"==typeof A?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),I=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(P){if(v){var D,B="y"===R?r/* .top */.we:r/* .left */.t$,q="y"===R?r/* .bottom */.I:r/* .right */.F2,H="y"===R?"height":"width",$=P[R],V=$+j[B],W=$-j[q],U=S?-z[H]/2:0,G=E===r/* .start */.BL?M[H]:z[H],Q=E===r/* .start */.BL?-z[H]:-M[H],X=t.elements.arrow,K=S&&X?(0,c/* ["default"] */.Z)(X):{width:0,height:0},Y=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:(0,f/* ["default"] */.Z)(),J=Y[B],ee=Y[q],te=(0,a/* .within */.u)(0,M[H],K[H]),ne=F?M[H]/2-U-te-J-N.mainAxis:G-te-J-N.mainAxis,re=F?-M[H]/2+U+te+ee+N.mainAxis:Q+te+ee+N.mainAxis,oe=t.elements.arrow&&(0,u/* ["default"] */.Z)(t.elements.arrow),ie=oe?"y"===R?oe.clientTop||0:oe.clientLeft||0:0,se=null!=(D=null==I?void 0:I[R])?D:0,ae=$+ne-se-ie,ce=$+re-se,ue=(0,a/* .within */.u)(S?(0,p/* .min */.VV)(V,ae):V,$,S?(0,p/* .max */.Fp)(W,ce):W);P[R]=ue,L[R]=ue-$}if(b){var le,de="x"===R?r/* .top */.we:r/* .left */.t$,fe="x"===R?r/* .bottom */.I:r/* .right */.F2,pe=P[T],me="y"===T?"height":"width",he=pe+j[de],ve=pe-j[fe],ge=-1!==[r/* .top */.we,r/* .left */.t$].indexOf(_),be=null!=(le=null==I?void 0:I[T])?le:0,ye=ge?he:pe-M[me]-z[me]-be+N.altAxis,we=ge?pe+M[me]+z[me]-be-N.altAxis:ve,xe=S&&ge?(0,a/* .withinMaxClamp */.q)(ye,pe,we):(0,a/* .within */.u)(S?ye:he,pe,S?we:ve);P[T]=xe,L[T]=xe-pe}t.modifiersData[m]=L}},requiresIfExists:["offset"]};
/***/},
/***/83781:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */fi:()=>/* binding */m
/* harmony export */});
/* unused harmony export defaultModifiers */
/* harmony import */var r=n(85943),o=n(65377),i=n(66915),s=n(66938),a=n(46087),c=n(16415),u=n(46190),l=n(53898),d=n(2089),f=n(67801),p=[o/* ["default"] */.Z,i/* ["default"] */.Z,s/* ["default"] */.Z,a/* ["default"] */.Z,c/* ["default"] */.Z,u/* ["default"] */.Z,l/* ["default"] */.Z,d/* ["default"] */.Z,f/* ["default"] */.Z],m=(0,r/* .popperGenerator */.kZ)({defaultModifiers:p});
/* harmony import */}// eslint-disable-next-line import/no-unused-modules
// eslint-disable-next-line import/no-unused-modules
// eslint-disable-next-line import/no-unused-modules
/***/,
/***/8341:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */a
/* harmony export */});
/* harmony import */var r=n(15262),o=n(71899),i=n(30822),s=n(56066);
/* harmony import */function a(e,t){void 0===t&&(t={});var n=t,a=n.placement,c=n.boundary,u=n.rootBoundary,l=n.padding,d=n.flipVariations,f=n.allowedAutoPlacements,p=void 0===f?o/* .placements */.Ct:f,m=(0,r/* ["default"] */.Z)(a),h=m?d?o/* .variationPlacements */.bw:o/* .variationPlacements.filter */.bw.filter((function(e){return(0,r/* ["default"] */.Z)(e)===m})):o/* .basePlacements */.mv,v=h.filter((function(e){return p.indexOf(e)>=0}));0===v.length&&(v=h);// $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
var g=v.reduce((function(t,n){return t[n]=(0,i/* ["default"] */.Z)(e,{placement:n,boundary:c,rootBoundary:u,padding:l})[(0,s/* ["default"] */.Z)(n)],t}),{});return Object.keys(g).sort((function(e,t){return g[e]-g[t]}))}
/***/},
/***/2012:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */a
/* harmony export */});
/* harmony import */var r=n(56066),o=n(15262),i=n(46159),s=n(71899);
/* harmony import */function a(e){var t,n=e.reference,a=e.element,c=e.placement,u=c?(0,r/* ["default"] */.Z)(c):null,l=c?(0,o/* ["default"] */.Z)(c):null,d=n.x+n.width/2-a.width/2,f=n.y+n.height/2-a.height/2;switch(u){case s/* .top */.we:t={x:d,y:n.y-a.height};break;case s/* .bottom */.I:t={x:d,y:n.y+n.height};break;case s/* .right */.F2:t={x:n.x+n.width,y:f};break;case s/* .left */.t$:t={x:n.x-a.width,y:f};break;default:t={x:n.x,y:n.y}}var p=u?(0,i/* ["default"] */.Z)(u):null;if(null!=p){var m="y"===p?"height":"width";switch(l){case s/* .start */.BL:t[p]=t[p]-(n[m]/2-a[m]/2);break;case s/* .end */.ut:t[p]=t[p]+(n[m]/2-a[m]/2)}}return t}
/***/},
/***/28346:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/30822:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */f
/* harmony export */});
/* harmony import */var r=n(63957),o=n(55565),i=n(31778),s=n(2012),a=n(14515),c=n(71899),u=n(53817),l=n(62631),d=n(8104);
/* harmony import */
// eslint-disable-next-line import/no-unused-modules
function f(e,t){void 0===t&&(t={});var n=t,f=n.placement,p=void 0===f?e.placement:f,m=n.boundary,h=void 0===m?c/* .clippingParents */.zV:m,v=n.rootBoundary,g=void 0===v?c/* .viewport */.Pj:v,b=n.elementContext,y=void 0===b?c/* .popper */.k5:b,w=n.altBoundary,x=void 0!==w&&w,Z=n.padding,k=void 0===Z?0:Z,S=(0,l/* ["default"] */.Z)("number"!=typeof k?k:(0,d/* ["default"] */.Z)(k,c/* .basePlacements */.mv)),C=y===c/* .popper */.k5?c/* .reference */.YP:c/* .popper */.k5,O=e.rects.popper,j=e.elements[x?C:y],_=(0,r/* ["default"] */.Z)((0,u/* .isElement */.kK)(j)?j:j.contextElement||(0,o/* ["default"] */.Z)(e.elements.popper),h,g),E=(0,i/* ["default"] */.Z)(e.elements.reference),F=(0,s/* ["default"] */.Z)({reference:E,element:O,strategy:"absolute",placement:p}),R=(0,a/* ["default"] */.Z)(Object.assign({},O,F)),T=y===c/* .popper */.k5?R:E,P={top:_.top-T.top+S.top,bottom:T.bottom-_.bottom+S.bottom,left:_.left-T.left+S.left,right:T.right-_.right+S.right},M=e.modifiersData.offset;// Offsets can be applied only to the popper element
if(y===c/* .popper */.k5&&M){var z=M[p];Object.keys(P).forEach((function(e){var t=[c/* .right */.F2,c/* .bottom */.I].indexOf(e)>=0?1:-1,n=[c/* .top */.we,c/* .bottom */.I].indexOf(e)>=0?"y":"x";P[e]+=z[n]*t}))}return P}
/***/},
/***/8104:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/33736:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e){return"x"===e?"y":"x"}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/56066:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e){return e.split("-")[0]}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/89371:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(){return{top:0,right:0,bottom:0,left:0}}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/46159:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/51037:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */o
/* harmony export */});var r={left:"right",right:"left",bottom:"top",top:"bottom"};function o(e){return e.replace(/left|right|bottom|top/g,(function(e){return r[e]}))}
/***/},
/***/49432:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */o
/* harmony export */});var r={start:"end",end:"start"};function o(e){return e.replace(/start|end/g,(function(e){return r[e]}))}
/***/},
/***/15262:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e){return e.split("-")[1]}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/53295:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Fp:()=>/* binding */r
/* harmony export */,VV:()=>/* binding */o
/* harmony export */,NM:()=>/* binding */i
/* harmony export */});var r=Math.max,o=Math.min,i=Math.round}
/***/,
/***/22924:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});// IE11 does not support Object.values
return Object.keys(t).map((function(e){return t[e]}))}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/62631:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */o
/* harmony export */});
/* harmony import */var r=n(89371);function o(e){return Object.assign({},(0,r/* ["default"] */.Z)(),e)}
/***/},
/***/22669:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */i
/* harmony export */});
/* harmony import */var r=n(71899);
// source: https://stackoverflow.com/questions/49875255
function o(e){var t=new Map,n=new Set,r=[];// On visiting object, check for its dependencies and visit them recursively
function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||
// check for visited object
o(e)})),r}function i(e){
// order based on dependencies
var t=o(e);// order based on phase
return r/* .modifierPhases.reduce */.xs.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}
/***/},
/***/14515:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/944:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */u:()=>/* binding */o
/* harmony export */,q:()=>/* binding */i
/* harmony export */});
/* harmony import */var r=n(53295);function o(e,t,n){return(0,r/* .max */.Fp)(e,(0,r/* .min */.VV)(t,n))}function i(e,t,n){var r=o(e,t,n);return r>n?n:r}
/***/},
/***/36414:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>o
/* harmony export */});
/* harmony import */var r=n(69307);
/* harmony import */
/* harmony default export */const o=(0,r.forwardRef)((
/**
 * WordPress dependencies
 */
/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */
/**
 * Return an SVG icon.
 *
 * @param {IconProps}                                 props icon is the SVG component to render
 *                                                          size is a number specifiying the icon size in pixels
 *                                                          Other props will be passed to wrapped SVG component
 * @param {import('react').ForwardedRef<HTMLElement>} ref   The forwarded ref to the SVG element.
 *
 * @return {JSX.Element}  Icon component
 */
function({icon:e,size:t=24,...n},o){return(0,r.cloneElement)(e,{width:t,height:t,...n,ref:o})}));
//# sourceMappingURL=index.js.map
/***/},
/***/62373:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>i
/* harmony export */});
/* harmony import */var r=n(99196),o=n(70444);
/* harmony import */
/**
 * WordPress dependencies
 */
const i=(0,r.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(o.Path,{d:"M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"}));
/* harmony default export */}
//# sourceMappingURL=close.js.map
/***/,
/***/43032:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */QT:()=>/* binding */a
/* harmony export */});
/* unused harmony exports I18nProvider, withI18n */
/* harmony import */n(99196);
/* harmony import */var r=n(69307),o=n(65736);
/**
 * External dependencies
 */
/**
 * WordPress dependencies
 */
/**
 * Utility to make a new context value
 *
 * @param i18n
 */
function i(e){return{__:e.__.bind(e),_x:e._x.bind(e),_n:e._n.bind(e),_nx:e._nx.bind(e),isRTL:e.isRTL.bind(e),hasTranslation:e.hasTranslation.bind(e)}}const s=(0,r.createContext)(i(o.defaultI18n));
/**
 * The `I18nProvider` should be mounted above any localized components:
 *
 * @example
 * ```js
 * import { createI18n } from '@wordpress/i18n';
 * import { I18nProvider } from '@wordpress/react-i18n';
 * const i18n = createI18n();
 *
 * ReactDom.render(
 * 	<I18nProvider i18n={ i18n }>
 * 		<App />
 * 	</I18nProvider>,
 * 	el
 * );
 * ```
 *
 * You can also instantiate the provider without the `i18n` prop. In that case it will use the
 * default `I18n` instance exported from `@wordpress/i18n`.
 *
 * @param props i18n provider props.
 * @return Children wrapped in the I18nProvider.
 */
/**
 * React hook providing access to i18n functions. It exposes the `__`, `_x`, `_n`, `_nx`,
 * `isRTL` and `hasTranslation` functions from [`@wordpress/i18n`](../i18n).
 * Refer to their documentation there.
 *
 * @example
 * ```js
 * import { useI18n } from '@wordpress/react-i18n';
 *
 * function MyComponent() {
 * 	const { __ } = useI18n();
 * 	return __( 'Hello, world!' );
 * }
 * ```
 */
const a=()=>(0,r.useContext)(s)
/**
 * React higher-order component that passes the i18n translate functions (the same set
 * as exposed by the `useI18n` hook) to the wrapped component as props.
 *
 * @example
 * ```js
 * import { withI18n } from '@wordpress/react-i18n';
 *
 * function MyComponent( { __ } ) {
 * 	return __( 'Hello, world!' );
 * }
 *
 * export default withI18n( MyComponent );
 * ```
 *
 * @param InnerComponent React component to be wrapped and receive the i18n functions like `__`
 * @return The wrapped component
 */}
//# sourceMappingURL=index.js.map
/***/,
/***/15862:
/***/e=>{
/**
 * Helpers.
 */
var t=1e3,n=60*t,r=60*n,o=24*r,i=7*o,s=365.25*o;
/**
 * Pluralization helper.
 */
function a(e,t,n,r){var o=t>=1.5*n;return Math.round(e/n)+" "+r+(o?"s":"")}
/***/
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */
e.exports=function(e,c){c=c||{};var u=typeof e;if("string"===u&&e.length>0)
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */
return function(e){if((e=String(e)).length>100)return;var a=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!a)return;var c=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*s;case"weeks":case"week":case"w":return c*i;case"days":case"day":case"d":return c*o;case"hours":case"hour":case"hrs":case"hr":case"h":return c*r;case"minutes":case"minute":case"mins":case"min":case"m":return c*n;case"seconds":case"second":case"secs":case"sec":case"s":return c*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */(e);if("number"===u&&isFinite(e))return c.long?
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */
function(e){var i=Math.abs(e);if(i>=o)return a(e,i,o,"day");if(i>=r)return a(e,i,r,"hour");if(i>=n)return a(e,i,n,"minute");if(i>=t)return a(e,i,t,"second");return e+" ms"}(e):function(e){var i=Math.abs(e);if(i>=o)return Math.round(e/o)+"d";if(i>=r)return Math.round(e/r)+"h";if(i>=n)return Math.round(e/n)+"m";if(i>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},
/***/49384:
/***/()=>{}
// extracted by mini-css-extract-plugin
/***/,
/***/55823:
/***/()=>{}
// extracted by mini-css-extract-plugin
/***/,
/***/29314:
/***/()=>{}
// extracted by mini-css-extract-plugin
/***/,
/***/62525:
/***/e=>{"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;
// Detect buggy property enumeration order in older V8 versions.
// https://bugs.chromium.org/p/v8/issues/detail?id=4118
var e=new String("abc");// eslint-disable-line no-new-wrappers
if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;
// https://bugs.chromium.org/p/v8/issues/detail?id=3056
for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;
// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){
// We don't expect any of the above to throw, but better to be safe.
return!1}}()?Object.assign:function(e,o){for(var i,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))n.call(i,u)&&(a[u]=i[u]);if(t){s=t(i);for(var l=0;l<s.length;l++)r.call(i,s[l])&&(a[s[l]]=i[s[l]])}}return a}}
/***/,
/***/54335:
/***/e=>{
/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */
var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;
// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js
function i(e,s){
// START: fast-deep-equal es6/index.js 3.1.3
if(e===s)return!0;if(e&&s&&"object"==typeof e&&"object"==typeof s){if(e.constructor!==s.constructor)return!1;var a,c,u,l;if(Array.isArray(e)){if((a=e.length)!=s.length)return!1;for(c=a;0!=c--;)if(!i(e[c],s[c]))return!1;return!0}
// START: Modifications:
// 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
//    to co-exist with es5.
// 2. Replace `for of` with es5 compliant iteration using `for`.
//    Basically, take:

//    ```js
//    for (i of a.entries())
//      if (!b.has(i[0])) return false;
//    ```

//    ... and convert to:

//    ```js
//    it = a.entries();
//    while (!(i = it.next()).done)
//      if (!b.has(i.value[0])) return false;
//    ```

//    **Note**: `i` access switches to `i.value`.
if(n&&e instanceof Map&&s instanceof Map){if(e.size!==s.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!s.has(c.value[0]))return!1;for(l=e.entries();!(c=l.next()).done;)if(!i(c.value[1],s.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&s instanceof Set){if(e.size!==s.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!s.has(c.value[0]))return!1;return!0}
// END: Modifications
if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(s)){if((a=e.length)!=s.length)return!1;for(c=a;0!=c--;)if(e[c]!==s[c])return!1;return!0}if(e.constructor===RegExp)return e.source===s.source&&e.flags===s.flags;
// START: Modifications:
// Apply guards for `Object.create(null)` handling. See:
// - https://github.com/FormidableLabs/react-fast-compare/issues/64
// - https://github.com/epoberezkin/fast-deep-equal/issues/49
if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof s.valueOf)return e.valueOf()===s.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof s.toString)return e.toString()===s.toString();
// END: Modifications
if((a=(u=Object.keys(e)).length)!==Object.keys(s).length)return!1;for(c=a;0!=c--;)if(!Object.prototype.hasOwnProperty.call(s,u[c]))return!1;
// END: fast-deep-equal
// START: react-fast-compare
// custom handling for DOM elements
if(t&&e instanceof Element)return!1;
// custom handling for React/Preact
for(c=a;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!e.$$typeof)&&!i(e[u[c]],s[u[c]]))return!1;
// all other properties should be traversed as usual
// END: react-fast-compare
// START: fast-deep-equal
return!0}return e!=e&&s!=s}
// end fast-deep-equal
e.exports=function(e,t){try{return i(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))
// warn on circular references, don't crash
// browsers give this different errors name and messages:
// chrome/safari: "RangeError", "Maximum call stack size exceeded"
// firefox: "InternalError", too much recursion"
// edge: "Error", "Out of stack space"
return console.warn("react-fast-compare cannot handle circular refs"),!1;
// some other error. we should definitely know about these
throw e}}}
/***/,
/***/69570:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */D:()=>/* binding */l
/* harmony export */});
/* harmony import */var r=n(99196),o=n(91850),i=n(83781),s=n(54335),a=n.n(s),c=n(75907),u=[],l=function(e,t,n){void 0===n&&(n={});var s=r.useRef(null),l={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||u},d=r.useState({styles:{popper:{position:l.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),f=d[0],p=d[1],m=r.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);o.flushSync((function(){p({styles:(0,c/* .fromEntries */.sq)(n.map((function(e){return[e,t.styles[e]||{}]}))),attributes:(0,c/* .fromEntries */.sq)(n.map((function(e){return[e,t.attributes[e]]})))})}))},requires:["computeStyles"]}}),[]),h=r.useMemo((function(){var e={onFirstUpdate:l.onFirstUpdate,placement:l.placement,strategy:l.strategy,modifiers:[].concat(l.modifiers,[m,{name:"applyStyles",enabled:!1}])};return a()(s.current,e)?s.current||e:(s.current=e,e)}),[l.onFirstUpdate,l.placement,l.strategy,l.modifiers,m]),v=r.useRef();return(0,c/* .useIsomorphicLayoutEffect */.LI)((function(){v.current&&v.current.setOptions(h)}),[h]),(0,c/* .useIsomorphicLayoutEffect */.LI)((function(){if(null!=e&&null!=t){var r=(n.createPopper||i/* .createPopper */.fi)(e,t,h);return v.current=r,function(){r.destroy(),v.current=null}}}),[e,t,n.createPopper]),{state:v.current?v.current.state:null,styles:f.styles,attributes:f.attributes,update:v.current?v.current.update:null,forceUpdate:v.current?v.current.forceUpdate:null}};
/* harmony import */}
/***/,
/***/75907:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */sq:()=>/* binding */o
/* harmony export */,LI:()=>/* binding */i
/* harmony export */});
/* unused harmony exports unwrapArray, safeInvoke, setRef */
/* harmony import */var r=n(99196),o=function(e){return e.reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{})},i="undefined"!=typeof window&&window.document&&window.document.createElement?r.useLayoutEffect:r.useEffect;
/* harmony import */}
/***/,
/***/71426:
/***/(e,t,n)=>{"use strict";
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */n(62525);var r=n(99196),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,i={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:i,_owner:s.current}}t.jsx=u,t.jsxs=u}
/***/,
/***/24246:
/***/(e,t,n)=>{"use strict";e.exports=n(71426)}
/***/,
/***/55512:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>l
/* harmony export */});
/* harmony import */var r=n(69307),o=n(92819),i=n.n(o),s=n(9818),a=n(70602),c=n(52994),u=n(58320);
/* harmony import */
/* harmony default export */const l=
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
 * Renders a tour kit component for Sensei.
 *
 * @param {Object}     props                  Component props.
 * @param {string}     props.tourName         The unique name of the tour.
 * @param {string}     props.trackId          ID of tracking event (optional). Tracking will be enabled only when provided.
 * @param {TourStep[]} props.steps            An array of steps to include in the tour.
 * @param {Function}   [props.beforeEach]     A function to run before each step.
 * @param {Object}     [props.extraConfig={}] Additional configuration options for the tour kit.
 */
function(e){var t=e.tourName,n=e.trackId,o=e.steps,l=e.beforeEach,d=void 0===l?function(){}:l,f=e.extraConfig,p=void 0===f?{}:f,m=(0,s.useSelect)((function(e){return{showTour:(0,e(a/* .SENSEI_TOUR_STORE */.si).shouldShowTour)()}})).showTour,h=(0,s.useDispatch)(a/* .SENSEI_TOUR_STORE */.si).setTourShowStatus,v=(0,r.useCallback)((function(e){if(n&&e<o.length){var t=o[e];window.sensei_log_event(n,{step:t.slug})}}),[n,o]),g=function(e){d(o[e]),(0,c/* .performStepAction */.T$)(e,o)},b={steps:o,closeHandler:function(){(0,c/* .removeHighlightClasses */.y)(),h(!1,!0,t)},options:{effects:{spotlight:null,
// spotlight: { // To enable spotlighting
// 	interactivity: {
// 		enabled: true, // Needed to allow the user to click inside the spotlighted element
// 	},
// },
liveResize:{mutation:!0,resize:!0,rootElementSelector:"#root"}},callbacks:{onNextStep:function(e){g(e+1)},onPreviousStep:function(e){g(e-1)},onGoToStep:function(e){e===o.length-1?g(0):(0,c/* .removeHighlightClasses */.y)()},onMaximize:function(e){g(e)},onMinimize:function(){(0,c/* .removeHighlightClasses */.y)()},onStepViewOnce:function(e){0===e&&g(e),v(e)}}},placement:"bottom-start"};return m?(0,r.createElement)(u/* ["default"] */.Z,{config:i().merge(b,p)}):null};
/***/},
/***/13025:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>b
/* harmony export */});
/* unused harmony export getCourseOutlineBlock */
/* harmony import */var r=n(27791),o=n(69307),i=n(4981),s=n(65736),a=n(55609),c=n(9818),u=n(52175),l=n(12238),d=n(69973),f=n(52994),__=s.__,p=function(){return(0,d/* .getFirstBlockByName */.H4)("sensei-lms/course-outline",(0,c.select)(u.store).getBlocks())};
/* harmony import */function m(e){var t=p();t&&(0,(0,c.dispatch)(u.store).insertBlock)((0,i.createBlock)("sensei-lms/course-outline-lesson",{title:e}),0,t.clientId)}function h(){var e=p();e&&(0,c.dispatch)(l.store).selectBlock(e.clientId)}function v(){return g.apply(this,arguments)}
/**
 * Returns the tour steps for the Course Outline block.
 *
 * @return {Array.<TourStep>} An array containing the tour steps.
 */function g(){return(g=(0,r/* ["default"] */.Z)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=".wp-block-sensei-lms-course-outline__placeholder__option-blank",".wp-block-sensei-lms-course-outline-lesson",!document.querySelector(".wp-block-sensei-lms-course-outline-lesson")){e.next=5;break}return e.abrupt("return");case 5:// When the Course Outline block has the "Start with blank" option shown in it, instead of just inserting a lesson block,
// We click on that option to insert the lesson block.
if(!(n=document.querySelector(t))){e.next=10;break}return e.next=9,(0,f/* .performStepActionsAsync */.Bm)([{action:function(){(0,f/* .highlightElementsWithBorders */.QH)([t])}},{action:function(){n.click()},delay:600}]);case 9:return e.abrupt("return");case 10:m("Lesson 1");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/* harmony default export */const b=function(){return[{slug:"welcome",meta:{heading:__("Welcome to the Course Outline block","sensei-lms"),descriptions:{desktop:__("Take this short tour to learn how to create your course outline right in the editor. Click an option in the block to get started.","sensei-lms"),mobile:null},referenceElements:{desktop:""}},options:{classNames:{desktop:"",mobile:""}},referenceElements:{desktop:""},action:(d=(0,r/* ["default"] */.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,f/* .performStepActionsAsync */.Bm)([{action:function(){h();var e='[data-type="sensei-lms/course-outline"] div';(0,f/* .highlightElementsWithBorders */.QH)([e]),(0,f/* .scrollToCenter */.XT)(e)},delay:0}]);case 1:case"end":return e.stop()}}),e)}))),function(){return d.apply(this,arguments)})},{slug:"renaming-existing-lesson",meta:{heading:__("Renaming an existing lesson","sensei-lms"),descriptions:{desktop:__("Click on an existing lesson to select it. Then give it a new name.","sensei-lms"),mobile:null}},options:{classNames:{desktop:"",mobile:""}},referenceElements:{desktop:""},action:(u=(0,r/* ["default"] */.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return e.next=4,(0,f/* .performStepActionsAsync */.Bm)([{action:function(){var e=document.querySelector('[data-type="sensei-lms/course-outline-lesson"]');e&&e.focus()}},{action:function(){var e=document.querySelector('[data-type="sensei-lms/course-outline-lesson"] textarea');e&&e.focus(),(0,f/* .highlightElementsWithBorders */.QH)(['[data-type="sensei-lms/course-outline-lesson"] .wp-block-sensei-lms-course-outline-lesson'])},delay:100},{action:function(){(0,f/* .scrollToCenter */.XT)('[data-type="sensei-lms/course-outline-lesson"] .wp-block-sensei-lms-course-outline-lesson')},delay:200}]);case 4:case"end":return e.stop()}}),e)}))),function(){return u.apply(this,arguments)})},{slug:"adding-new-module",meta:{heading:__("Adding a module","sensei-lms"),descriptions:{desktop:__("A module is a container for a group of related lessons in a course. Click + to open the inserter. Then click the Module option.","sensei-lms"),mobile:null}},options:{classNames:{desktop:"",mobile:""}},action:(s=(0,r/* ["default"] */.Z)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return t=".wp-block-sensei-lms-course-outline .block-editor-inserter__toggle",n=".components-dropdown-menu__popover .components-dropdown-menu__menu .components-dropdown-menu__menu-item:last-child",e.next=6,(0,f/* .performStepActionsAsync */.Bm)([{action:function(){
// Necessary to focus on the Course Outline block here otherwise inserter won't appear.
h()}},{action:function(){(0,f/* .scrollToCenter */.XT)(t);var e=document.querySelector(t);e&&e.click()},delay:400},{action:function(){(0,f/* .highlightElementsWithBorders */.QH)([t])}},{action:function(){(0,f/* .highlightElementsWithBorders */.QH)([n]);var e=document.querySelector(n);e&&e.focus()},delay:400}]);case 6:case"end":return e.stop()}}),e)}))),function(){return s.apply(this,arguments)})},{slug:"adding-new-lesson",meta:{heading:__("Adding a new lesson","sensei-lms"),descriptions:{desktop:__("Click + to open the inserter. Then click the Lesson option.","sensei-lms"),mobile:null}},options:{classNames:{desktop:"",mobile:""}},action:(i=(0,r/* ["default"] */.Z)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=".wp-block-sensei-lms-course-outline .block-editor-inserter__toggle",n=".components-dropdown-menu__popover .components-dropdown-menu__menu .components-dropdown-menu__menu-item:first-child",(0,f/* .performStepActionsAsync */.Bm)([{action:function(){
// Necessary to focus on the Course Outline block here otherwise inserter won't appear.
h()}},{action:function(){(0,f/* .scrollToCenter */.XT)(t);var e=document.querySelector(t);e&&e.click()},delay:400},{action:function(){(0,f/* .highlightElementsWithBorders */.QH)([t]),(0,f/* .scrollToCenter */.XT)(t)}},{action:function(){(0,f/* .highlightElementsWithBorders */.QH)([n]);var e=document.querySelector(n);e&&e.focus(),(0,f/* .scrollToCenter */.XT)(n)},delay:400}]);case 5:case"end":return e.stop()}}),e)}))),function(){return i.apply(this,arguments)})},{slug:"deleting-lesson",meta:{heading:__("Deleting a lesson","sensei-lms"),descriptions:{desktop:__("Use the Options menu in the toolbar to delete a selected lesson.","sensei-lms"),mobile:null}},options:{classNames:{desktop:"",mobile:""}},action:(n=(0,r/* ["default"] */.Z)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=".block-editor-block-contextual-toolbar .components-dropdown-menu.block-editor-block-settings-menu button",(0,f/* .performStepActionsAsync */.Bm)([{action:function(){var e=document.querySelector(".wp-block-sensei-lms-course-outline-lesson");e&&e.parentElement.focus(),(0,f/* .highlightElementsWithBorders */.QH)(['[data-type="sensei-lms/course-outline-lesson"] .wp-block-sensei-lms-course-outline-lesson'])}},{action:function(){(0,f/* .scrollToCenter */.XT)(".wp-block-sensei-lms-course-outline-lesson"),(0,f/* .highlightElementsWithBorders */.QH)([t])},delay:400},{action:function(){var e=document.querySelector(t);e&&e.click()},delay:400},{action:function(){(0,f/* .highlightElementsWithBorders */.QH)([t])}},{action:function(){var e=".block-editor-block-settings-menu__popover.components-dropdown-menu__popover .components-menu-group:last-child .components-button.components-menu-item__button:last-child",t=document.querySelector(e);t&&t.focus(),(0,f/* .highlightElementsWithBorders */.QH)([e])},delay:400}]);case 4:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})},{slug:"saving-lessons",meta:{heading:__("Saving lessons","sensei-lms"),descriptions:{desktop:__('Click the "Save to edit lesson" option in the toolbar to save all lessons.',"sensei-lms"),mobile:null}},options:{classNames:{desktop:"",mobile:""}},action:(t=(0,r/* ["default"] */.Z)(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=".block-editor-block-contextual-toolbar .wp-block-sensei-lms-course-outline-lesson__save",n=".wp-block-sensei-lms-course-outline-lesson:not([data-lesson-id]):not(.is-auto-draft)",r=[],document.querySelector(n)||r.push({action:function(){m(__("Unsaved new lesson","sensei-lms"))}}),(0,f/* .performStepActionsAsync */.Bm)([].concat(r,[{action:function(){var e=document.querySelector(n);e&&e.parentElement.focus(),(0,f/* .highlightElementsWithBorders */.QH)([n])}},{action:function(){(0,f/* .highlightElementsWithBorders */.QH)([t]),(0,f/* .scrollToCenter */.XT)(t)},delay:400}]));case 8:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})},{slug:"editing-lesson",meta:{heading:__("Editing a lesson","sensei-lms"),descriptions:{desktop:__('Use the "Edit lesson" option in the toolbar to navigate to the lesson editor and add your content.',"sensei-lms"),mobile:null}},options:{classNames:{desktop:"",mobile:""}},action:(e=(0,r/* ["default"] */.Z)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:if(t=".block-editor-block-contextual-toolbar .block-editor-block-toolbar .wp-block-sensei-lms-course-outline-lesson__edit",n=".wp-block-sensei-lms-course-outline-lesson[data-lesson-id]",document.querySelector(n)){e.next=10;break}return(0,(0,c.dispatch)(l.store).savePost)(),e.next=10,(0,f/* .waitForElement */.br)(n,15);case 10:(0,f/* .performStepActionsAsync */.Bm)([{action:function(){var e=document.querySelector(n);e&&e.parentElement.focus(),(0,f/* .highlightElementsWithBorders */.QH)([n])}},{action:function(){(0,f/* .highlightElementsWithBorders */.QH)([t]),(0,f/* .scrollToCenter */.XT)(t)},delay:400}]);case 11:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})},{slug:"congratulations",meta:{heading:__("Congratulations!","sensei-lms"),descriptions:{desktop:(0,o.createInterpolateElement)(__("You've mastered the basics. View the <link_to_course_outline_block_doc>course outline docs</link_to_course_outline_block_doc> to learn more.","sensei-lms"),{link_to_course_outline_block_doc:(0,o.createElement)(a.ExternalLink,{href:"https://senseilms.com/documentation/courses/#course-outline",children:null})}),mobile:null}},options:{classNames:{desktop:"",mobile:""}},action:function(){(0,f/* .removeHighlightClasses */.y)()}}];var e,t,n,i,s,u,d};
/***/},
/***/70602:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */si:()=>/* binding */u
/* harmony export */});
/* unused harmony exports DEFAULT_STATE, actions, selectors, reducers, store */
/* harmony import */var r=n(50189),o=n(9818),i=n(20832),s=n(23418),a=n(86989),c=n.n(a),u="sensei/tour",l={
/**
   * Sets whether the tour should be shown.
   *
   * @param {boolean} show            The lesson status.
   * @param {boolean} persistOnServer If the action should be persisted.
   * @param {string}  tourName        The unique name of the tour.
   *
   * @return {Object} The setTourShowStatus action.
   */
setTourShowStatus:function(e,t,n){return t&&c()({path:"sensei-internal/v1/tour",method:"POST",data:{complete:!e,tour_id:n}}),{type:"SET_TOUR_SHOW_STATUS",showTour:e}}},d={
/**
   * Sets the show tour status.
   *
   * @param {Object}  action          The action.
   * @param {boolean} action.showTour If the tour should be shown.
   * @param {Object}  state           The state.
   *
   * @return {Object} The new state.
   */
SET_TOUR_SHOW_STATUS:function(e,t){var n=e.showTour;return(0,r/* ["default"] */.Z)((0,r/* ["default"] */.Z)({},t),{},{showTour:n})},DEFAULT:function(e,t){return t}},f=(0,o.createReduxStore)(u,{reducer:(0,i/* .createReducerFromActionMap */.lA)(d,{showTour:!0}),actions:l,selectors:{
/**
   * Get if the tour should be shown.
   *
   * @param {Object}  state          The state.
   * @param {boolean} state.showTour If the tour should be shown.
   *
   * @return {boolean} If the tour should be shown.
   */
shouldShowTour:function(e){return e.showTour}},controls:s.controls});
/* harmony import */(0,o.register)(f)}
/***/,
/***/52994:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */T$:()=>/* binding */a
/* harmony export */,QH:()=>/* binding */c
/* harmony export */,y:()=>/* binding */u
/* harmony export */,Bm:()=>/* binding */f
/* harmony export */,br:()=>/* binding */m
/* harmony export */,XT:()=>/* binding */v
/* harmony export */});
/* unused harmony export HIGHLIGHT_CLASS */
/* harmony import */var r=n(60726),o=n(27791),i=n(90228),s="sensei-tour-highlight";
/* harmony import */
/**
 * Performs the action for the step.
 *
 * @param {number}           index The index of the step.
 * @param {Array.<TourStep>} steps The steps array.
 */
function a(e,t){if(e<t.length){var n=t[e];n.action&&n.action()}}
/**
 * Highlights the elements with a border.
 *
 * @param {Array}  selectors An array of selectors to highlight.
 * @param {string} modifier  A modifier to add to the highlight class.
 */function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e.forEach((function(e){var n=document.querySelector(e);n&&(n.classList.add(s),t&&n.classList.add(s+"--"+t))}))}
/**
 * Removes the highlight classes from the elements.
 */function u(){document.querySelectorAll(".sensei-tour-highlight").forEach((function(e){
// Remove class and modifiers.
(0,i.default)(e.classList).forEach((function(t){t.startsWith(s)&&e.classList.remove(t)}))}))}var l=null,d=null;
/**
 * Performs step actions one after another.
 *
 * @param {Array} stepActions An array of selectors to highlight.
 */
function f(_x){return p.apply(this,arguments)}
/**
 * Waits for an element to be available in the DOM.
 *
 * @param {string} selector  The selector to wait for.
 * @param {number} maxChecks The maximum number of checks to perform.
 * @param {number} delay     The delay between checks.
 *
 * @return {Promise<unknown>} A promise that resolves when the element is available.
 */function p(){return(p=(0,o/* ["default"] */.Z)(regeneratorRuntime.mark((function e(t){var n,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(),
// Clear the timeout and reject the last promise if it exists, so it stops the step if actions from another step started.
clearTimeout(l),d&&d(),e.prev=3,n=(0,r/* ["default"] */.Z)(t),e.prev=5,i=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=o.value)){e.next=4;break}return e.next=4,new Promise((function(e,n){var r;d=n,l=setTimeout((function(){t.action(),e()}),null!==(r=t.delay)&&void 0!==r?r:0)}));case 4:case"end":return e.stop()}}),e)})),n.s();case 8:if((o=n.n()).done){e.next=12;break}return e.delegateYield(i(),"t0",10);case 10:e.next=8;break;case 12:e.next=17;break;case 14:e.prev=14,e.t1=e.catch(5),n.e(e.t1);case 17:return e.prev=17,n.f(),e.finish(17);case 20:e.next=24;break;case 22:e.prev=22,e.t2=e.catch(3);case 24:case"end":return e.stop()}}),e,null,[[3,22],[5,14,17,20]])})))).apply(this,arguments)}function m(e){return h.apply(this,arguments)}
/**
 * Scrolls element to the center for better visibility.
 *
 * @param {string} selector
 */function h(){return h=(0,o/* ["default"] */.Z)(regeneratorRuntime.mark((function e(t){var n,r,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:10,r=o.length>2&&void 0!==o[2]?o[2]:300,e.abrupt("return",new Promise((function(e,o){var i=0;!function s(){var a=document.querySelector(t);a?e(a):++i>=n?o():setTimeout(s,r)}()})));case 3:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}var v=function(e){var t=document.querySelector(e);t&&t.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})};
/***/},
/***/69973:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */H4:()=>/* binding */s
/* harmony export */});
/* unused harmony exports blockNames, blockTypes, syncStructureToBlocks, extractStructure, getCourseInnerBlocks */
/* harmony import */n(4981),n(9818)
/* harmony import */;var r=n(92819),o={module:"sensei-lms/course-outline-module",lesson:"sensei-lms/course-outline-lesson"},i=(0,r.invert)(o),s=((0,r.curry)((function(e,t){var n=t.name,r=t.attributes,o=Object.keys(i).includes(n),s="module"===e.type;return!!o&&(s?[e.title,e.lastTitle].includes(r.title):r.id?e.id===r.id:void 0)})),function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];if(t===o.name)return o;if(o.innerBlocks&&o.innerBlocks.length>0){var i=e(t,o.innerBlocks);if(i)return i}}return!1})}
/***/,
/***/20832:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */lA:()=>/* binding */r
/* harmony export */});
/* unused harmony exports composeFetchAction, createStore */
/* harmony import */n(9818);
/* harmony import */var r=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1?arguments[1]:void 0;return(e[r.type]||e.DEFAULT)(r,n)}}}
/***/,
/***/61282:
/***/(e,t,n)=>{var r;
/* eslint-env browser */
/**
 * This is the web browser implementation of `debug()`.
 */
t.formatArgs=
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */
function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;var n="color: "+this.color;t.splice(1,0,n,"color: inherit");
// The final "%c" is somewhat tricky, because there could be other
// arguments passed either before or after the %c, so we need to
// figure out the correct index to insert the CSS into
var r=0,o=0;t[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(r++,"%c"===e&&(
// We only are interested in the *last* %c
// (the user may have provided their own)
o=r))})),t.splice(o,0,n)}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */,t.save=
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){
// Swallow
// XXX (@Qix-) should we be logging these?
}}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */,t.load=function(){var e;try{e=t.storage.getItem("debug")}catch(e){
// Swallow
// XXX (@Qix-) should we be logging these?
}
// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG);return e}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */,t.useColors=
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity
function(){
// NB: In an Electron preload script, document will be defined but not fully
// initialized. Since we know we're in Chrome, we'll just detect this case
// explicitly
if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;
// Internet Explorer and Edge do not support colors.
if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;
// Is webkit? http://stackoverflow.com/a/16459606/376773
// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||
// Is firebug? http://stackoverflow.com/a/398120/376773
"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||
// Is firefox >= v31?
// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||
// Double check webkit in userAgent just in case we are in a worker
"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{
// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
// The Browser also has localStorage in the global context.
return localStorage}catch(e){
// Swallow
// XXX (@Qix-) should we be logging these?
}}(),t.destroy=(r=!1,function(){r||(r=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}),
/**
 * Colors.
 */
t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||function(){},e.exports=n(42539)(t),
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */
e.exports.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}}
/***/,
/***/42539:
/***/(e,t,n)=>{var r=n(90228);
/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */e.exports=function(e){
/**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */
function t(e){var n,r,i,s=null;function a(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];
// Disabled?
if(a.enabled){var i=a,s=Number(new Date),c=s-(n||s);
// Set `diff` timestamp
i.diff=c,i.prev=n,i.curr=s,n=s,r[0]=t.coerce(r[0]),"string"!=typeof r[0]&&
// Anything else let's inspect with %O
r.unshift("%O");
// Apply any `formatters` transformations
var u=0;r[0]=r[0].replace(/%([a-zA-Z%])/g,(function(e,n){
// If we encounter an escaped % then don't increase the array index
if("%%"===e)return"%";u++;var o=t.formatters[n];if("function"==typeof o){var s=r[u];e=o.call(i,s),
// Now we need to remove `args[index]` since it's inlined in the `format`
r.splice(u,1),u--}return e})),
// Apply env-specific formatting (colors, etc.)
t.formatArgs.call(i,r),(i.log||t.log).apply(i,r)}}return a.namespace=e,a.useColors=t.useColors(),a.color=t.selectColor(e),a.extend=o,a.destroy=t.destroy,// XXX Temporary. Will be removed in the next major release.
Object.defineProperty(a,"enabled",{enumerable:!0,configurable:!1,get:function(){return null!==s?s:(r!==t.namespaces&&(r=t.namespaces,i=t.enabled(e)),i)},set:function(e){s=e}}),
// Env-specific initialization logic for debug instances
"function"==typeof t.init&&t.init(a),a}function o(e,n){var r=t(this.namespace+(void 0===n?":":n)+e);return r.log=this.log,r}
/**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */
/**
  * Convert regexp to namespace
  *
  * @param {RegExp} regxep
  * @return {String} namespace
  * @api private
  */
function i(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}
/**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */return t.debug=t,t.default=t,t.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e}
/**
  * XXX DO NOT USE. This is a temporary stub function.
  * XXX It WILL be removed in the next major release.
  */,t.disable=
/**
  * Disable debug output.
  *
  * @return {String} namespaces
  * @api public
  */
function(){var e=[].concat(r(t.names.map(i)),r(t.skips.map(i).map((function(e){return"-"+e})))).join(",");return t.enable(""),e}
/**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */,t.enable=function(e){var n;t.save(e),t.namespaces=e,t.names=[],t.skips=[];var r=("string"==typeof e?e:"").split(/[\s,]+/),o=r.length;for(n=0;n<o;n++)r[n]&&("-"===(e=r[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(15862),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((function(n){t[n]=e[n]})),
/**
  * The currently active debug mode names, and names to skip.
  */
t.names=[],t.skips=[],
/**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */
t.formatters={},t.selectColor=
/**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */
function(e){for(var n=0,r=0;r<e.length;r++)n=(n<<5)-n+e.charCodeAt(r),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t}}
/***/,
/***/99196:
/***/e=>{"use strict";e.exports=window.React}
/***/,
/***/91850:
/***/e=>{"use strict";e.exports=window.ReactDOM}
/***/,
/***/92819:
/***/e=>{"use strict";e.exports=window.lodash}
/***/,
/***/86989:
/***/e=>{"use strict";e.exports=window.wp.apiFetch}
/***/,
/***/52175:
/***/e=>{"use strict";e.exports=window.wp.blockEditor}
/***/,
/***/4981:
/***/e=>{"use strict";e.exports=window.wp.blocks}
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
/***/45904:
/***/e=>{"use strict";e.exports=window.wp.dom}
/***/,
/***/12238:
/***/e=>{"use strict";e.exports=window.wp.editor}
/***/,
/***/69307:
/***/e=>{"use strict";e.exports=window.wp.element}
/***/,
/***/65736:
/***/e=>{"use strict";e.exports=window.wp.i18n}
/***/,
/***/98817:
/***/e=>{"use strict";e.exports=window.wp.plugins}
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
/* global define */!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=s(e,i(n)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=s(t,n));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}
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
/* harmony export */Z:()=>/* binding */o
/* harmony export */});
/* harmony import */var r=n(1793);function o(e){if(Array.isArray(e))return(0,r/* ["default"] */.Z)(e)}
/***/},
/***/27791:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e,t,n,r,o,i,s){try{var a=e[i](s),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var s=e.apply(t,n);function a(e){r(s,o,i,a,c,"next",e)}function c(e){r(s,o,i,a,c,"throw",e)}a(void 0)}))}}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */o
/* harmony export */})},
/***/60726:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */o
/* harmony export */});
/* harmony import */var r=n(64013);function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=(0,r/* ["default"] */.Z)(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,s=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw s}}}}
/***/},
/***/64649:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
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
/* harmony export */function r(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],_n=!0,s=!1;try{for(n=n.call(e);!(_n=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);_n=!0);}catch(e){s=!0,o=e}finally{try{_n||null==n.return||n.return()}finally{if(s)throw o}}return i}}
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
/***/50189:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */i
/* harmony export */});
/* harmony import */var r=n(64649);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r/* ["default"] */.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}
/***/},
/***/66886:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */a
/* harmony export */});
/* harmony import */var r=n(66470),o=n(22446),i=n(64013),s=n(53764);
/* harmony import */function a(e,t){return(0,r/* ["default"] */.Z)(e)||(0,o/* ["default"] */.Z)(e,t)||(0,i/* ["default"] */.Z)(e,t)||(0,s/* ["default"] */.Z)()}
/***/},
/***/90228:
/***/(e,t,n)=>{"use strict";n.r(t),
/* harmony export */n.d(t,{
/* harmony export */default:()=>/* binding */a
/* harmony export */});
/* harmony import */var r=n(58138),o=n(55181),i=n(64013),s=n(83314);
/* harmony import */function a(e){return(0,r/* ["default"] */.Z)(e)||(0,o/* ["default"] */.Z)(e)||(0,i/* ["default"] */.Z)(e)||(0,s/* ["default"] */.Z)()}
/***/},
/***/64013:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */o
/* harmony export */});
/* harmony import */var r=n(1793);function o(e,t){if(e){if("string"==typeof e)return(0,r/* ["default"] */.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r/* ["default"] */.Z)(e,t):void 0}}
/***/
/******/}},t={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function n(r){
/******/ // Check if module is in cache
/******/var o=t[r];
/******/if(void 0!==o)
/******/return o.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var i=t[r]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[r](i,i.exports,n),i.exports;
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
/******/ // define __esModule on exports
/******/n.r=e=>{
/******/"undefined"!=typeof Symbol&&Symbol.toStringTag&&
/******/Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})
/******/,Object.defineProperty(e,"__esModule",{value:!0})}
/******/,
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(()=>{"use strict";
/* unused harmony export default */
/* harmony import */var e=n(66886),t=n(69307),r=n(9818),o=n(98817),i=n(69973),s=n(55512),a=n(13025),c="sensei-course-tour";
/* harmony import */function u(){var n=(0,r.useSelect)((function(e){var t=(0,e("core/block-editor").getBlocks)();return{courseOutlineBlock:(0,i/* .getFirstBlockByName */.H4)("sensei-lms/course-outline",t)}})).courseOutlineBlock,o=(0,t.useState)((0,a/* ["default"] */.Z)()),u=(0,e/* ["default"] */.Z)(o,1)[0];return n?(0,t.createElement)(s/* ["default"] */.Z,{trackId:"course_outline_onboarding_step_complete",tourName:c,steps:u}):null}(0,o.registerPlugin)(c,{render:function(){return(0,t.createElement)(u,null)}})})()})
/******/();