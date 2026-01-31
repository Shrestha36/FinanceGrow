import{R as s,a as c,u as m,b,r as j,j as i}from"./index-BTxCUwbS.js";var v={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=s.createContext&&s.createContext(v),w=["attr","size","title"];function L(t,r){if(t==null)return{};var e=C(t,r),n,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(e[n]=t[n])}return e}function C(t,r){if(t==null)return{};var e={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(r.indexOf(n)>=0)continue;e[n]=t[n]}return e}function p(){return p=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},p.apply(this,arguments)}function y(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,n)}return e}function g(t){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?y(Object(e),!0).forEach(function(n){O(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):y(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function O(t,r,e){return r=P(r),r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function P(t){var r=W(t,"string");return typeof r=="symbol"?r:r+""}function W(t,r){if(typeof t!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var n=e.call(t,r);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function k(t){return t&&t.map((r,e)=>s.createElement(r.tag,g({key:e},r.attr),k(r.child)))}function o(t){return r=>s.createElement(F,p({attr:g({},t.attr)},r),k(t.child))}function F(t){var r=e=>{var{attr:n,size:a,title:l}=t,x=L(t,w),d=a||e.size||"1em",h;return e.className&&(h=e.className),t.className&&(h=(h?h+" ":"")+t.className),s.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,n,x,{className:h,style:g(g({color:t.color||e.color},e.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&s.createElement("title",null,l),t.children)};return f!==void 0?s.createElement(f.Consumer,null,e=>r(e)):r(v)}function B(t){return o({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"20",x2:"18",y2:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"20",x2:"12",y2:"4"},child:[]},{tag:"line",attr:{x1:"6",y1:"20",x2:"6",y2:"14"},child:[]}]})(t)}function _(t){return o({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(t)}function S(t){return o({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(t)}function A(t){return o({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(t)}function G(t){return o({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"23"},child:[]},{tag:"path",attr:{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"},child:[]}]})(t)}function T(t){return o({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"},child:[]}]})(t)}function R(t){return o({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"},child:[]},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},child:[]}]})(t)}function z(t){return o({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(t)}function M(t){return o({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"},child:[]}]})(t)}function U(t){return o({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(t)}function X(t){return o({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(t)}function E(t){return o({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"},child:[]}]})(t)}function K(t){return o({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"},child:[]},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"},child:[]}]})(t)}function q(t){return o({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(t)}function J(t){return o({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(t)}function Q(t){return o({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(t)}c.div`
  display: flex;
  height: 100vh;
`;const N=c.aside`
  height: 100vh;

  /* 🖥 desktop → participate in layout */
  position: sticky;
  top: 0;

  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(18px);
  border-right: 1px solid rgba(255, 255, 255, 0.08);

  display: flex;
  flex-direction: column;
  color: #e5e7eb;

  z-index: 10;

  width: ${({open:t})=>t?"200px":"72px"};
  padding: ${({open:t})=>t?"32px 24px":"32px 12px"};

  transition:
    width 0.3s ease,
    padding 0.3s ease;

  /* 📱 mobile → overlay drawer */
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    top: 0;

    width: 220px;
    padding: 32px 20px;

    z-index: 1000;

    transform: ${({open:t})=>t?"translateX(0)":"translateX(-100%)"};

    transition: transform 0.3s ease;
  }
`,H=c.button`
  position: absolute;
  top: 20px;
  right: -14px;

  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;

  background: #22d3ee;
  color: #020617;
  font-weight: bold;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 0 12px rgba(34, 211, 238, 0.6);
`,I=c.h1`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 40px;

  span {
    color: #22c55e;
  }
`,V=c.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`,u=c.div`
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 10px 14px;
  border-radius: 12px;

  cursor: pointer;
  font-size: 16px;

  color: ${({$active:t})=>t?"#ffffff":"#94a3b8"};
  background: ${({$active:t})=>t?"rgba(34,211,238,0.15)":"transparent"};

  svg {
    font-size: 20px;
    color: ${({$active:t})=>t?"#22d3ee":"#64748b"};
    flex-shrink: 0;
  }

  span {
    white-space: nowrap;
  }

  &:hover {
    background: rgba(34, 211, 238, 0.12);

    svg {
      color: #38bdf8;
    }
  }
`,D=c.div`
  margin: 32px 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
`;c.main`
  flex: 1;
  padding: 40px;
  overflow-y: auto;
`;c.div``;function Y(){const t=m(),{pathname:r}=b(),[e,n]=j.useState(!1),a=!!localStorage.getItem("user"),l=d=>{t(d),n(!1)},x=()=>{localStorage.removeItem("user"),localStorage.removeItem("profile"),t("/login"),n(!1)};return i.jsxs(N,{open:e,children:[i.jsx(H,{onClick:()=>n(d=>!d),children:e?"‹":"›"}),i.jsx(I,{children:e?i.jsxs(i.Fragment,{children:["FINANCE",i.jsx("span",{children:"GROW"})]}):"FG"}),i.jsxs(V,{children:[i.jsxs(u,{$active:r==="/home",onClick:()=>l("/home"),children:[i.jsx(z,{}),e&&i.jsx("span",{children:"Dashboard"})]}),i.jsxs(u,{$active:r.includes("analytics"),onClick:()=>l("/home/monthly-analysis"),children:[i.jsx(B,{}),e&&i.jsx("span",{children:"Analytics"})]}),i.jsxs(u,{$active:a?r.includes("settings"):r.includes("login"),onClick:()=>l(a?"/home/settings":"/login"),children:[a?i.jsx(E,{}):i.jsx(S,{}),e&&i.jsx("span",{children:a?"Settings":"Login"})]}),a&&i.jsxs(u,{onClick:x,children:[i.jsx(M,{}),e&&i.jsx("span",{children:"Logout"})]})]}),i.jsx(D,{})]})}export{Q as F,o as G,Y as S,R as a,J as b,A as c,K as d,G as e,X as f,T as g,_ as h,U as i,q as j};
