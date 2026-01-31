import{r as m,a as P,j as d,R as M,b as Gt}from"./index-BTxCUwbS.js";import{G as tt,F as Wt,a as Ut,b as Ht,c as Kt,d as Ie,e as Se,f as ke,g as Vt,h as Qt,S as Yt,i as Xt}from"./slideBar-BLoVtkfQ.js";import{I as xe,d as T,aO as rt,Y as oe,D as se,aP as nt,aQ as Zt,Z as le,L as V,G as ee,N as Jt,aR as qt,a as at,O as it,aS as er,aT as tr,aU as rr,x as ve,y as ye,aV as Oe,aW as Ne,aX as Me,aY as ot,aZ as st,e as ce,h as be,k as lt,l as ct,j as nr,a_ as ar,r as ir,c as or,a$ as dt,m as Re,n as sr,w as lr,z as cr,S as dr,A as ur,v as pr,B as ut,C as hr,E as fr,b0 as mr,b1 as gr,H as ze,b2 as De,Q as xr,b3 as vr,U as yr,V as W,$ as br,W as wr,X as Pr,aF as Cr,au as de,b as te,b4 as Er,a1 as jr,R as Ar,T as Ir}from"./CategoricalChart-DD_Vt4QT.js";import{g as pt,d as ht,s as we,a as Pe,u as Sr,G as kr,C as Or,X as Nr,Y as Mr}from"./CartesianChart-BsQIAA4k.js";function he(){return he=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},he.apply(null,arguments)}var ft=t=>{var{cx:e,cy:r,r:n,className:s}=t,c=xe("recharts-dot",s);return T(e)&&T(r)&&T(n)?m.createElement("circle",he({},oe(t),rt(t),{className:c,cx:e,cy:r,r:n})):null},Rr=["points"];function Te(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),r.push.apply(r,n)}return r}function ue(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Te(Object(r),!0).forEach(function(n){zr(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Te(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function zr(t,e,r){return(e=Dr(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Dr(t){var e=Tr(t,"string");return typeof e=="symbol"?e:e+""}function Tr(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function re(){return re=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},re.apply(null,arguments)}function Lr(t,e){if(t==null)return{};var r,n,s=Fr(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)===-1&&{}.propertyIsEnumerable.call(t,r)&&(s[r]=t[r])}return s}function Fr(t,e){if(t==null)return{};var r={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.indexOf(n)!==-1)continue;r[n]=t[n]}return r}function Br(t){var{option:e,dotProps:r,className:n}=t;if(m.isValidElement(e))return m.cloneElement(e,r);if(typeof e=="function")return e(r);var s=xe(n,typeof e!="boolean"?e.className:""),c=r??{},{points:g}=c,p=Lr(c,Rr);return m.createElement(ft,re({},p,{className:s}))}function _r(t,e){return t==null?!1:e?!0:t.length===1}function $r(t){var{points:e,dot:r,className:n,dotClassName:s,dataKey:c,baseProps:g,needClip:p,clipPathId:a,zIndex:i=se.scatter}=t;if(!_r(e,r))return null;var o=nt(r),l=Zt(r),u=e.map((f,b)=>{var h,j,y=ue(ue(ue({r:3},g),l),{},{index:b,cx:(h=f.x)!==null&&h!==void 0?h:void 0,cy:(j=f.y)!==null&&j!==void 0?j:void 0,dataKey:c,value:f.value,payload:f.payload,points:e});return m.createElement(Br,{key:"dot-".concat(b),option:r,dotProps:y,className:s})}),x={};return p&&a!=null&&(x.clipPath="url(#clipPath-".concat(o?"":"dots-").concat(a,")")),m.createElement(le,{zIndex:i},m.createElement(V,re({className:n},x),u))}function Le(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),r.push.apply(r,n)}return r}function pe(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Le(Object(r),!0).forEach(function(n){Gr(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Le(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function Gr(t,e,r){return(e=Wr(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Wr(t){var e=Ur(t,"string");return typeof e=="symbol"?e:e+""}function Ur(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Hr=t=>{var{point:e,childIndex:r,mainColor:n,activeDot:s,dataKey:c,clipPath:g}=t;if(s===!1||e.x==null||e.y==null)return null;var p={index:r,dataKey:c,cx:e.x,cy:e.y,r:4,fill:n??"none",strokeWidth:2,stroke:"#fff",payload:e.payload,value:e.value},a=pe(pe(pe({},p),it(s)),rt(s)),i;return m.isValidElement(s)?i=m.cloneElement(s,a):typeof s=="function"?i=s(a):i=m.createElement(ft,a),m.createElement(V,{className:"recharts-active-dot",clipPath:g},i)};function Fe(t){var{points:e,mainColor:r,activeDot:n,itemDataKey:s,clipPath:c,zIndex:g=se.activeDot}=t,p=ee(Jt),a=qt();if(e==null||a==null)return null;var i=e.find(o=>a.includes(o.payload));return at(i)?null:m.createElement(le,{zIndex:g},m.createElement(Hr,{point:i,childIndex:Number(p),mainColor:r,dataKey:s,activeDot:n,clipPath:c}))}var Kr=["x1","y1","x2","y2","key"],Vr=["offset"],Qr=["xAxisId","yAxisId"],Yr=["xAxisId","yAxisId"];function Be(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),r.push.apply(r,n)}return r}function R(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Be(Object(r),!0).forEach(function(n){Xr(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Be(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function Xr(t,e,r){return(e=Zr(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Zr(t){var e=Jr(t,"string");return typeof e=="symbol"?e:e+""}function Jr(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function _(){return _=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},_.apply(null,arguments)}function ne(t,e){if(t==null)return{};var r,n,s=qr(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)===-1&&{}.propertyIsEnumerable.call(t,r)&&(s[r]=t[r])}return s}function qr(t,e){if(t==null)return{};var r={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.indexOf(n)!==-1)continue;r[n]=t[n]}return r}var en=t=>{var{fill:e}=t;if(!e||e==="none")return null;var{fillOpacity:r,x:n,y:s,width:c,height:g,ry:p}=t;return m.createElement("rect",{x:n,y:s,ry:p,width:c,height:g,stroke:"none",fill:e,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function mt(t){var{option:e,lineItemProps:r}=t,n;if(m.isValidElement(e))n=m.cloneElement(e,r);else if(typeof e=="function")n=e(r);else{var s,{x1:c,y1:g,x2:p,y2:a,key:i}=r,o=ne(r,Kr),l=(s=oe(o))!==null&&s!==void 0?s:{},{offset:u}=l,x=ne(l,Vr);n=m.createElement("line",_({},x,{x1:c,y1:g,x2:p,y2:a,fill:"none",key:i}))}return n}function tn(t){var{x:e,width:r,horizontal:n=!0,horizontalPoints:s}=t;if(!n||!s||!s.length)return null;var{xAxisId:c,yAxisId:g}=t,p=ne(t,Qr),a=s.map((i,o)=>{var l=R(R({},p),{},{x1:e,y1:i,x2:e+r,y2:i,key:"line-".concat(o),index:o});return m.createElement(mt,{key:"line-".concat(o),option:n,lineItemProps:l})});return m.createElement("g",{className:"recharts-cartesian-grid-horizontal"},a)}function rn(t){var{y:e,height:r,vertical:n=!0,verticalPoints:s}=t;if(!n||!s||!s.length)return null;var{xAxisId:c,yAxisId:g}=t,p=ne(t,Yr),a=s.map((i,o)=>{var l=R(R({},p),{},{x1:i,y1:e,x2:i,y2:e+r,key:"line-".concat(o),index:o});return m.createElement(mt,{option:n,lineItemProps:l,key:"line-".concat(o)})});return m.createElement("g",{className:"recharts-cartesian-grid-vertical"},a)}function nn(t){var{horizontalFill:e,fillOpacity:r,x:n,y:s,width:c,height:g,horizontalPoints:p,horizontal:a=!0}=t;if(!a||!e||!e.length||p==null)return null;var i=p.map(l=>Math.round(l+s-s)).sort((l,u)=>l-u);s!==i[0]&&i.unshift(0);var o=i.map((l,u)=>{var x=!i[u+1],f=x?s+g-l:i[u+1]-l;if(f<=0)return null;var b=u%e.length;return m.createElement("rect",{key:"react-".concat(u),y:l,x:n,height:f,width:c,stroke:"none",fill:e[b],fillOpacity:r,className:"recharts-cartesian-grid-bg"})});return m.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},o)}function an(t){var{vertical:e=!0,verticalFill:r,fillOpacity:n,x:s,y:c,width:g,height:p,verticalPoints:a}=t;if(!e||!r||!r.length)return null;var i=a.map(l=>Math.round(l+s-s)).sort((l,u)=>l-u);s!==i[0]&&i.unshift(0);var o=i.map((l,u)=>{var x=!i[u+1],f=x?s+g-l:i[u+1]-l;if(f<=0)return null;var b=u%r.length;return m.createElement("rect",{key:"react-".concat(u),x:l,y:c,width:f,height:p,stroke:"none",fill:r[b],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return m.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},o)}var on=(t,e)=>{var{xAxis:r,width:n,height:s,offset:c}=t;return ot(pt(R(R(R({},ht),r),{},{ticks:st(r),viewBox:{x:0,y:0,width:n,height:s}})),c.left,c.left+c.width,e)},sn=(t,e)=>{var{yAxis:r,width:n,height:s,offset:c}=t;return ot(pt(R(R(R({},ht),r),{},{ticks:st(r),viewBox:{x:0,y:0,width:n,height:s}})),c.top,c.top+c.height,e)},ln={horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[],xAxisId:0,yAxisId:0,syncWithTicks:!1,zIndex:se.grid};function gt(t){var e=er(),r=tr(),n=rr(),s=R(R({},ve(t,ln)),{},{x:T(t.x)?t.x:n.left,y:T(t.y)?t.y:n.top,width:T(t.width)?t.width:n.width,height:T(t.height)?t.height:n.height}),{xAxisId:c,yAxisId:g,x:p,y:a,width:i,height:o,syncWithTicks:l,horizontalValues:u,verticalValues:x}=s,f=ye(),b=ee(k=>Oe(k,"xAxis",c,f)),h=ee(k=>Oe(k,"yAxis",g,f));if(!Ne(i)||!Ne(o)||!T(p)||!T(a))return null;var j=s.verticalCoordinatesGenerator||on,y=s.horizontalCoordinatesGenerator||sn,{horizontalPoints:v,verticalPoints:C}=s;if((!v||!v.length)&&typeof y=="function"){var w=u&&u.length,E=y({yAxis:h?R(R({},h),{},{ticks:w?u:h.ticks}):void 0,width:e??i,height:r??o,offset:n},w?!0:l);Me(Array.isArray(E),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof E,"]")),Array.isArray(E)&&(v=E)}if((!C||!C.length)&&typeof j=="function"){var S=x&&x.length,A=j({xAxis:b?R(R({},b),{},{ticks:S?x:b.ticks}):void 0,width:e??i,height:r??o,offset:n},S?!0:l);Me(Array.isArray(A),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof A,"]")),Array.isArray(A)&&(C=A)}return m.createElement(le,{zIndex:s.zIndex},m.createElement("g",{className:"recharts-cartesian-grid"},m.createElement(en,{fill:s.fill,fillOpacity:s.fillOpacity,x:s.x,y:s.y,width:s.width,height:s.height,ry:s.ry}),m.createElement(nn,_({},s,{horizontalPoints:v})),m.createElement(an,_({},s,{verticalPoints:C})),m.createElement(tn,_({},s,{offset:n,horizontalPoints:v,xAxis:b,yAxis:h})),m.createElement(rn,_({},s,{offset:n,verticalPoints:C,xAxis:b,yAxis:h}))))}gt.displayName="CartesianGrid";function cn(t){var e=it(t),r=3,n=2;if(e!=null){var{r:s,strokeWidth:c}=e,g=Number(s),p=Number(c);return(Number.isNaN(g)||g<0)&&(g=r),(Number.isNaN(p)||p<0)&&(p=n),{r:g,strokeWidth:p}}return{r,strokeWidth:n}}var xt=(t,e,r)=>lt(t,"xAxis",we(t,e),r),vt=(t,e,r)=>ct(t,"xAxis",we(t,e),r),yt=(t,e,r)=>lt(t,"yAxis",Pe(t,e),r),bt=(t,e,r)=>ct(t,"yAxis",Pe(t,e),r),dn=ce([be,xt,yt,vt,bt],(t,e,r,n,s)=>dt(t,"xAxis")?Re(e,n,!1):Re(r,s,!1)),un=(t,e)=>e,wt=ce([sr,un],(t,e)=>t.filter(r=>r.type==="area").find(r=>r.id===e)),Pt=t=>{var e=be(t),r=dt(e,"xAxis");return r?"yAxis":"xAxis"},pn=(t,e)=>{var r=Pt(t);return r==="yAxis"?Pe(t,e):we(t,e)},hn=(t,e,r)=>ir(t,Pt(t),pn(t,e),r),fn=ce([wt,hn],(t,e)=>{var r;if(!(t==null||e==null)){var{stackId:n}=t,s=or(t);if(!(n==null||s==null)){var c=(r=e[n])===null||r===void 0?void 0:r.stackedData,g=c?.find(p=>p.key===s);if(g!=null)return g.map(p=>[p[0],p[1]])}}}),mn=ce([be,xt,yt,vt,bt,fn,nr,dn,wt,ar],(t,e,r,n,s,c,g,p,a,i)=>{var{chartData:o,dataStartIndex:l,dataEndIndex:u}=g;if(!(a==null||t!=="horizontal"&&t!=="vertical"||e==null||r==null||n==null||s==null||n.length===0||s.length===0||p==null)){var{data:x}=a,f;if(x&&x.length>0?f=x:f=o?.slice(l,u+1),f!=null)return zn({layout:t,xAxis:e,yAxis:r,xAxisTicks:n,yAxisTicks:s,dataStartIndex:l,areaSettings:a,stackedData:c,displayedData:f,chartBaseValue:i,bandSize:p})}}),gn=["id"],xn=["activeDot","animationBegin","animationDuration","animationEasing","connectNulls","dot","fill","fillOpacity","hide","isAnimationActive","legendType","stroke","xAxisId","yAxisId"];function $(){return $=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},$.apply(null,arguments)}function Ct(t,e){if(t==null)return{};var r,n,s=vn(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)===-1&&{}.propertyIsEnumerable.call(t,r)&&(s[r]=t[r])}return s}function vn(t,e){if(t==null)return{};var r={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.indexOf(n)!==-1)continue;r[n]=t[n]}return r}function _e(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),r.push.apply(r,n)}return r}function H(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?_e(Object(r),!0).forEach(function(n){yn(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_e(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function yn(t,e,r){return(e=bn(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function bn(t){var e=wn(t,"string");return typeof e=="symbol"?e:e+""}function wn(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ae(t,e){return t&&t!=="none"?t:e}var Pn=t=>{var{dataKey:e,name:r,stroke:n,fill:s,legendType:c,hide:g}=t;return[{inactive:g,dataKey:e,type:c,color:ae(n,s),value:ut(r,e),payload:t}]},Cn=m.memo(t=>{var{dataKey:e,data:r,stroke:n,strokeWidth:s,fill:c,name:g,hide:p,unit:a,tooltipType:i,id:o}=t,l={dataDefinedOnItem:r,positions:void 0,settings:{stroke:n,strokeWidth:s,fill:c,dataKey:e,nameKey:void 0,name:ut(g,e),hide:p,type:i,color:ae(n,c),unit:a,graphicalItemId:o}};return m.createElement(hr,{tooltipEntrySettings:l})});function En(t){var{clipPathId:e,points:r,props:n}=t,{needClip:s,dot:c,dataKey:g}=n,p=oe(n);return m.createElement($r,{points:r,dot:c,className:"recharts-area-dots",dotClassName:"recharts-area-dot",dataKey:g,baseProps:p,needClip:s,clipPathId:e})}function jn(t){var{showLabels:e,children:r,points:n}=t,s=n.map(c=>{var g,p,a={x:(g=c.x)!==null&&g!==void 0?g:0,y:(p=c.y)!==null&&p!==void 0?p:0,width:0,lowerWidth:0,upperWidth:0,height:0};return H(H({},a),{},{value:c.value,payload:c.payload,parentViewBox:void 0,viewBox:a,fill:void 0})});return m.createElement(Pr,{value:e?s:void 0},r)}function $e(t){var{points:e,baseLine:r,needClip:n,clipPathId:s,props:c}=t,{layout:g,type:p,stroke:a,connectNulls:i,isRange:o}=c,{id:l}=c,u=Ct(c,gn),x=oe(u),f=Cr(u);return m.createElement(m.Fragment,null,e?.length>1&&m.createElement(V,{clipPath:n?"url(#clipPath-".concat(s,")"):void 0},m.createElement(de,$({},f,{id:l,points:e,connectNulls:i,type:p,baseLine:r,layout:g,stroke:"none",className:"recharts-area-area"})),a!=="none"&&m.createElement(de,$({},x,{className:"recharts-area-curve",layout:g,type:p,connectNulls:i,fill:"none",points:e})),a!=="none"&&o&&m.createElement(de,$({},x,{className:"recharts-area-curve",layout:g,type:p,connectNulls:i,fill:"none",points:r}))),m.createElement(En,{points:e,props:u,clipPathId:s}))}function An(t){var e,r,{alpha:n,baseLine:s,points:c,strokeWidth:g}=t,p=(e=c[0])===null||e===void 0?void 0:e.y,a=(r=c[c.length-1])===null||r===void 0?void 0:r.y;if(!te(p)||!te(a))return null;var i=n*Math.abs(p-a),o=Math.max(...c.map(l=>l.x||0));return T(s)?o=Math.max(s,o):s&&Array.isArray(s)&&s.length&&(o=Math.max(...s.map(l=>l.x||0),o)),T(o)?m.createElement("rect",{x:0,y:p<a?p:p-i,width:o+(g?parseInt("".concat(g),10):1),height:Math.floor(i)}):null}function In(t){var e,r,{alpha:n,baseLine:s,points:c,strokeWidth:g}=t,p=(e=c[0])===null||e===void 0?void 0:e.x,a=(r=c[c.length-1])===null||r===void 0?void 0:r.x;if(!te(p)||!te(a))return null;var i=n*Math.abs(p-a),o=Math.max(...c.map(l=>l.y||0));return T(s)?o=Math.max(s,o):s&&Array.isArray(s)&&s.length&&(o=Math.max(...s.map(l=>l.y||0),o)),T(o)?m.createElement("rect",{x:p<a?p:p-i,y:0,width:i,height:Math.floor(o+(g?parseInt("".concat(g),10):1))}):null}function Sn(t){var{alpha:e,layout:r,points:n,baseLine:s,strokeWidth:c}=t;return r==="vertical"?m.createElement(An,{alpha:e,points:n,baseLine:s,strokeWidth:c}):m.createElement(In,{alpha:e,points:n,baseLine:s,strokeWidth:c})}function kn(t){var{needClip:e,clipPathId:r,props:n,previousPointsRef:s,previousBaselineRef:c}=t,{points:g,baseLine:p,isAnimationActive:a,animationBegin:i,animationDuration:o,animationEasing:l,onAnimationStart:u,onAnimationEnd:x}=n,f=m.useMemo(()=>({points:g,baseLine:p}),[g,p]),b=xr(f,"recharts-area-"),h=vr(),[j,y]=m.useState(!1),v=!j,C=m.useCallback(()=>{typeof x=="function"&&x(),y(!1)},[x]),w=m.useCallback(()=>{typeof u=="function"&&u(),y(!0)},[u]);if(h==null)return null;var E=s.current,S=c.current;return m.createElement(jn,{showLabels:v,points:g},n.children,m.createElement(yr,{animationId:b,begin:i,duration:o,isActive:a,easing:l,onAnimationEnd:C,onAnimationStart:w,key:b},A=>{if(E){var k=E.length/g.length,F=A===1?g:g.map((L,B)=>{var z=Math.floor(B*k);if(E[z]){var D=E[z];return H(H({},L),{},{x:W(D.x,L.x,A),y:W(D.y,L.y,A)})}return L}),O;return T(p)?O=W(S,p,A):at(p)||br(p)?O=W(S,0,A):O=p.map((L,B)=>{var z=Math.floor(B*k);if(Array.isArray(S)&&S[z]){var D=S[z];return H(H({},L),{},{x:W(D.x,L.x,A),y:W(D.y,L.y,A)})}return L}),A>0&&(s.current=F,c.current=O),m.createElement($e,{points:F,baseLine:O,needClip:e,clipPathId:r,props:n})}return A>0&&(s.current=g,c.current=p),m.createElement(V,null,a&&m.createElement("defs",null,m.createElement("clipPath",{id:"animationClipPath-".concat(r)},m.createElement(Sn,{alpha:A,points:g,baseLine:p,layout:h,strokeWidth:n.strokeWidth}))),m.createElement(V,{clipPath:"url(#animationClipPath-".concat(r,")")},m.createElement($e,{points:g,baseLine:p,needClip:e,clipPathId:r,props:n})))}),m.createElement(wr,{label:n.label}))}function On(t){var{needClip:e,clipPathId:r,props:n}=t,s=m.useRef(null),c=m.useRef();return m.createElement(kn,{needClip:e,clipPathId:r,props:n,previousPointsRef:s,previousBaselineRef:c})}class Nn extends m.PureComponent{render(){var{hide:e,dot:r,points:n,className:s,top:c,left:g,needClip:p,xAxisId:a,yAxisId:i,width:o,height:l,id:u,baseLine:x,zIndex:f}=this.props;if(e)return null;var b=xe("recharts-area",s),h=u,{r:j,strokeWidth:y}=cn(r),v=nt(r),C=j*2+y,w=p?"url(#clipPath-".concat(v?"":"dots-").concat(h,")"):void 0;return m.createElement(le,{zIndex:f},m.createElement(V,{className:b},p&&m.createElement("defs",null,m.createElement(kr,{clipPathId:h,xAxisId:a,yAxisId:i}),!v&&m.createElement("clipPath",{id:"clipPath-dots-".concat(h)},m.createElement("rect",{x:g-C/2,y:c-C/2,width:o+C,height:l+C}))),m.createElement(On,{needClip:p,clipPathId:h,props:this.props})),m.createElement(Fe,{points:n,mainColor:ae(this.props.stroke,this.props.fill),itemDataKey:this.props.dataKey,activeDot:this.props.activeDot,clipPath:w}),this.props.isRange&&Array.isArray(x)&&m.createElement(Fe,{points:x,mainColor:ae(this.props.stroke,this.props.fill),itemDataKey:this.props.dataKey,activeDot:this.props.activeDot,clipPath:w}))}}var Et={activeDot:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",connectNulls:!1,dot:!1,fill:"#3182bd",fillOpacity:.6,hide:!1,isAnimationActive:"auto",legendType:"line",stroke:"#3182bd",strokeWidth:1,type:"linear",label:!1,xAxisId:0,yAxisId:0,zIndex:se.area};function Mn(t){var e,r=ve(t,Et),{activeDot:n,animationBegin:s,animationDuration:c,animationEasing:g,connectNulls:p,dot:a,fill:i,fillOpacity:o,hide:l,isAnimationActive:u,legendType:x,stroke:f,xAxisId:b,yAxisId:h}=r,j=Ct(r,xn),y=fr(),v=mr(),{needClip:C}=Sr(b,h),w=ye(),{points:E,isRange:S,baseLine:A}=(e=ee(z=>mn(z,t.id,w)))!==null&&e!==void 0?e:{},k=gr();if(y!=="horizontal"&&y!=="vertical"||k==null||v!=="AreaChart"&&v!=="ComposedChart")return null;var{height:F,width:O,x:L,y:B}=k;return!E||!E.length?null:m.createElement(Nn,$({},j,{activeDot:n,animationBegin:s,animationDuration:c,animationEasing:g,baseLine:A,connectNulls:p,dot:a,fill:i,fillOpacity:o,height:F,hide:l,layout:y,isAnimationActive:u==="auto"?!Er.isSsr:u,isRange:S,legendType:x,needClip:C,points:E,stroke:f,width:O,left:L,top:B,xAxisId:b,yAxisId:h}))}var Rn=(t,e,r,n,s)=>{var c=r??e;if(T(c))return c;var g=t==="horizontal"?s:n,p=g.scale.domain();if(g.type==="number"){var a=Math.max(p[0],p[1]),i=Math.min(p[0],p[1]);return c==="dataMin"?i:c==="dataMax"||a<0?a:Math.max(Math.min(p[0],p[1]),0)}return c==="dataMin"?p[0]:c==="dataMax"?p[1]:p[0]};function zn(t){var{areaSettings:{connectNulls:e,baseValue:r,dataKey:n},stackedData:s,layout:c,chartBaseValue:g,xAxis:p,yAxis:a,displayedData:i,dataStartIndex:o,xAxisTicks:l,yAxisTicks:u,bandSize:x}=t,f=s&&s.length,b=Rn(c,g,r,p,a),h=c==="horizontal",j=!1,y=i.map((C,w)=>{var E,S,A;if(f)A=s[o+w];else{var k=ze(C,n);Array.isArray(k)?(A=k,j=!0):A=[b,k]}var F=(E=(S=A)===null||S===void 0?void 0:S[1])!==null&&E!==void 0?E:null,O=F==null||f&&!e&&ze(C,n)==null;return h?{x:De({axis:p,ticks:l,bandSize:x,entry:C,index:w}),y:O?null:a.scale(F),value:A,payload:C}:{x:O?null:p.scale(F),y:De({axis:a,ticks:u,bandSize:x,entry:C,index:w}),value:A,payload:C}}),v;return f||j?v=y.map(C=>{var w=Array.isArray(C.value)?C.value[0]:null;return h?{x:C.x,y:w!=null&&C.y!=null?a.scale(w):null,payload:C.payload}:{x:w!=null?p.scale(w):null,y:C.y,payload:C.payload}}):v=h?a.scale(b):p.scale(b),{points:y,baseLine:v,isRange:j}}function Dn(t){var e=ve(t,Et),r=ye();return m.createElement(cr,{id:e.id,type:"area"},n=>m.createElement(m.Fragment,null,m.createElement(dr,{legendPayload:Pn(e)}),m.createElement(Cn,{dataKey:e.dataKey,data:e.data,stroke:e.stroke,strokeWidth:e.strokeWidth,fill:e.fill,name:e.name,hide:e.hide,unit:e.unit,tooltipType:e.tooltipType,id:n}),m.createElement(ur,{type:"area",id:n,data:e.data,dataKey:e.dataKey,xAxisId:e.xAxisId,yAxisId:e.yAxisId,zAxisId:0,stackId:pr(e.stackId),hide:e.hide,barSize:void 0,baseValue:e.baseValue,isPanorama:r,connectNulls:e.connectNulls}),m.createElement(Mn,$({},e,{id:n}))))}var jt=m.memo(Dn,lr);jt.displayName="Area";var Tn=["axis"],Ln=m.forwardRef((t,e)=>m.createElement(Or,{chartName:"AreaChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:Tn,tooltipPayloadSearcher:jr,categoricalChartProps:t,ref:e}));const Fn="/assets/dineIn-s9ivoN3Y.png";function Bn(t){return tt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(t)}function _n(t){return tt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(t)}const Ge=P.div`
  margin-top: 24px;
  padding: 22px;
  border-radius: 22px;
  background: linear-gradient(
    180deg,
    rgba(2, 6, 23, 0.92),
    rgba(2, 6, 23, 0.97)
  );
  border: 1px solid rgba(34, 211, 238, 0.35);
  backdrop-filter: blur(18px);
`,We=P.h3`
  font-size: 18px;
  font-weight: 700;
  color: #e5e7eb;
  margin-bottom: 16px;
   svg {
    font-size: 22px;
    color: #22d3ee;
    padding: 12px 6px 0px;
    filter: drop-shadow(0 0 6px rgba(34, 211, 238, 0.6));
  }
`,$n=P.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Gn=P.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 14px;
  border-radius: 14px;
  background: rgba(2, 6, 23, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.06);
`,Wn=P.span`
  color: #e5e7eb;
  font-weight: 600;
`,Un=P.span`
  color: #22d3ee;
  font-weight: 700;
`,Ue=P.div`
  margin-top: 18px;
`,He=P.p`
  color: #94a3b8;
  font-size: 13px;
  margin-bottom: 8px;
`,Ke=P.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Ve=P.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #e5e7eb;
  font-size: 14px;
`,Hn=P.p`
  margin-top: 12px;
  color: #22d3ee;
  font-weight: 600;
`,Kn=P.button`
  width: 100%;
  margin-top: 14px;
  padding: 12px;
  border-radius: 14px;
  border: none;
  background: linear-gradient(135deg, #22d3ee, #38bdf8);
  color: #020617;
  font-weight: 700;
  cursor: pointer;

  opacity: ${({disabled:t})=>t?.4:1};
  pointer-events: ${({disabled:t})=>t?"none":"auto"};
`,Vn=P.div`
display: flex;
justify-content: space-around;
`,Qn=P.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,Yn=P.span`
  font-size: 13px;
  color: #94a3b8;
`,Xn=P.button`
  border: none;
  background: rgba(34, 211, 238, 0.15);
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(34, 211, 238, 0.3);
  }
`,Zn=P.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Jn=P.button`
  border: none;
  background: rgba(239, 68, 68, 0.15); /* red-500 */
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(239, 68, 68, 0.3);
  }
`,qn=t=>{const e={};return!t?.people?.length||!t?.items?.length||(t.people.forEach(r=>e[r]=0),t.items.forEach(r=>{if(!r.sharedBy?.length)return;const n=r.price/r.sharedBy.length;r.sharedBy.forEach(s=>e[s]+=n)})),e};function ea({group:t,submittedOrders:e,onAddSplitItem:r,onClearSplit:n}){const[s,c]=m.useState([]),[g,p]=m.useState([]),a=m.useMemo(()=>{const h=new Map;return e.forEach(j=>{j.items.forEach(y=>{if(y.isSplit)return;const v=`${y.name}-${y.price}`;h.has(v)||h.set(v,{id:v,name:y.name,price:y.price})})}),Array.from(h.values())},[e]),i=a.filter(h=>g.includes(h.id)),o=i.reduce((h,j)=>h+j.price,0),l=qn(t);if(!e.length)return d.jsxs(Ge,{children:[d.jsxs(We,{children:[" ",d.jsx(Wt,{})," Split Summary"]}),d.jsx("p",{style:{color:"#94a3b8"},children:"Submit orders to enable bill splitting."})]});const u=()=>{s.length<2||!i.length||(r({name:i.map(h=>h.name).join(", "),price:o,sharedBy:s,isSplit:!0}),c([]),p([]))},x=()=>{const j=`Split Summary

${Object.entries(l).map(([y,v])=>`${y}: ₹${v.toFixed(2)}`).join(`
`)}`;window.open(`https://wa.me/?text=${encodeURIComponent(j)}`,"_blank")},f=new Date().toLocaleString("en-IN",{weekday:"long",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),b=()=>{c([]),p([]),n()};return d.jsxs(Ge,{children:[d.jsxs(Qn,{children:[d.jsx(Yn,{children:f}),d.jsxs(Zn,{children:[d.jsx(Xn,{onClick:x,children:d.jsx(Bn,{size:18,color:"#22d3ee"})}),d.jsx(Jn,{onClick:b,children:d.jsx(_n,{size:16,color:"#ef4444"})})]})]}),d.jsx(We,{children:"Split Summary"}),d.jsx($n,{children:Object.entries(l).map(([h,j])=>d.jsxs(Gn,{children:[d.jsx(Wn,{children:h}),d.jsxs(Un,{children:["₹",j.toFixed(2)]})]},h))}),d.jsxs(Vn,{children:[d.jsxs(Ue,{children:[d.jsx(He,{children:"Select Customers"}),d.jsx(Ke,{children:t.people.map(h=>d.jsxs(Ve,{children:[d.jsx("input",{type:"checkbox",checked:s.includes(h),onChange:()=>c(j=>j.includes(h)?j.filter(y=>y!==h):[...j,h])}),h]},h))})]}),d.jsxs(Ue,{children:[d.jsx(He,{children:"Select Food Items"}),d.jsx(Ke,{children:a.map(h=>d.jsxs(Ve,{children:[d.jsx("input",{type:"checkbox",checked:g.includes(h.id),onChange:()=>p(j=>j.includes(h.id)?j.filter(y=>y!==h.id):[...j,h.id])}),h.name," — ₹",h.price]},h.id))})]})]}),s.length>1&&o>0&&d.jsxs(Hn,{children:["₹",(o/s.length).toFixed(2)," per person"]}),d.jsx(Kn,{onClick:u,disabled:s.length<2||!i.length,children:"Split & Confirm"})]})}var ta=Object.defineProperty,ie=Object.getOwnPropertySymbols,At=Object.prototype.hasOwnProperty,It=Object.prototype.propertyIsEnumerable,Qe=(t,e,r)=>e in t?ta(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,fe=(t,e)=>{for(var r in e||(e={}))At.call(e,r)&&Qe(t,r,e[r]);if(ie)for(var r of ie(e))It.call(e,r)&&Qe(t,r,e[r]);return t},me=(t,e)=>{var r={};for(var n in t)At.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&ie)for(var n of ie(t))e.indexOf(n)<0&&It.call(t,n)&&(r[n]=t[n]);return r};var G;(t=>{const e=class I{constructor(a,i,o,l){if(this.version=a,this.errorCorrectionLevel=i,this.modules=[],this.isFunction=[],a<I.MIN_VERSION||a>I.MAX_VERSION)throw new RangeError("Version value out of range");if(l<-1||l>7)throw new RangeError("Mask value out of range");this.size=a*4+17;let u=[];for(let f=0;f<this.size;f++)u.push(!1);for(let f=0;f<this.size;f++)this.modules.push(u.slice()),this.isFunction.push(u.slice());this.drawFunctionPatterns();const x=this.addEccAndInterleave(o);if(this.drawCodewords(x),l==-1){let f=1e9;for(let b=0;b<8;b++){this.applyMask(b),this.drawFormatBits(b);const h=this.getPenaltyScore();h<f&&(l=b,f=h),this.applyMask(b)}}s(0<=l&&l<=7),this.mask=l,this.applyMask(l),this.drawFormatBits(l),this.isFunction=[]}static encodeText(a,i){const o=t.QrSegment.makeSegments(a);return I.encodeSegments(o,i)}static encodeBinary(a,i){const o=t.QrSegment.makeBytes(a);return I.encodeSegments([o],i)}static encodeSegments(a,i,o=1,l=40,u=-1,x=!0){if(!(I.MIN_VERSION<=o&&o<=l&&l<=I.MAX_VERSION)||u<-1||u>7)throw new RangeError("Invalid value");let f,b;for(f=o;;f++){const v=I.getNumDataCodewords(f,i)*8,C=g.getTotalBits(a,f);if(C<=v){b=C;break}if(f>=l)throw new RangeError("Data too long")}for(const v of[I.Ecc.MEDIUM,I.Ecc.QUARTILE,I.Ecc.HIGH])x&&b<=I.getNumDataCodewords(f,v)*8&&(i=v);let h=[];for(const v of a){r(v.mode.modeBits,4,h),r(v.numChars,v.mode.numCharCountBits(f),h);for(const C of v.getData())h.push(C)}s(h.length==b);const j=I.getNumDataCodewords(f,i)*8;s(h.length<=j),r(0,Math.min(4,j-h.length),h),r(0,(8-h.length%8)%8,h),s(h.length%8==0);for(let v=236;h.length<j;v^=253)r(v,8,h);let y=[];for(;y.length*8<h.length;)y.push(0);return h.forEach((v,C)=>y[C>>>3]|=v<<7-(C&7)),new I(f,i,y,u)}getModule(a,i){return 0<=a&&a<this.size&&0<=i&&i<this.size&&this.modules[i][a]}getModules(){return this.modules}drawFunctionPatterns(){for(let o=0;o<this.size;o++)this.setFunctionModule(6,o,o%2==0),this.setFunctionModule(o,6,o%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const a=this.getAlignmentPatternPositions(),i=a.length;for(let o=0;o<i;o++)for(let l=0;l<i;l++)o==0&&l==0||o==0&&l==i-1||o==i-1&&l==0||this.drawAlignmentPattern(a[o],a[l]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(a){const i=this.errorCorrectionLevel.formatBits<<3|a;let o=i;for(let u=0;u<10;u++)o=o<<1^(o>>>9)*1335;const l=(i<<10|o)^21522;s(l>>>15==0);for(let u=0;u<=5;u++)this.setFunctionModule(8,u,n(l,u));this.setFunctionModule(8,7,n(l,6)),this.setFunctionModule(8,8,n(l,7)),this.setFunctionModule(7,8,n(l,8));for(let u=9;u<15;u++)this.setFunctionModule(14-u,8,n(l,u));for(let u=0;u<8;u++)this.setFunctionModule(this.size-1-u,8,n(l,u));for(let u=8;u<15;u++)this.setFunctionModule(8,this.size-15+u,n(l,u));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let a=this.version;for(let o=0;o<12;o++)a=a<<1^(a>>>11)*7973;const i=this.version<<12|a;s(i>>>18==0);for(let o=0;o<18;o++){const l=n(i,o),u=this.size-11+o%3,x=Math.floor(o/3);this.setFunctionModule(u,x,l),this.setFunctionModule(x,u,l)}}drawFinderPattern(a,i){for(let o=-4;o<=4;o++)for(let l=-4;l<=4;l++){const u=Math.max(Math.abs(l),Math.abs(o)),x=a+l,f=i+o;0<=x&&x<this.size&&0<=f&&f<this.size&&this.setFunctionModule(x,f,u!=2&&u!=4)}}drawAlignmentPattern(a,i){for(let o=-2;o<=2;o++)for(let l=-2;l<=2;l++)this.setFunctionModule(a+l,i+o,Math.max(Math.abs(l),Math.abs(o))!=1)}setFunctionModule(a,i,o){this.modules[i][a]=o,this.isFunction[i][a]=!0}addEccAndInterleave(a){const i=this.version,o=this.errorCorrectionLevel;if(a.length!=I.getNumDataCodewords(i,o))throw new RangeError("Invalid argument");const l=I.NUM_ERROR_CORRECTION_BLOCKS[o.ordinal][i],u=I.ECC_CODEWORDS_PER_BLOCK[o.ordinal][i],x=Math.floor(I.getNumRawDataModules(i)/8),f=l-x%l,b=Math.floor(x/l);let h=[];const j=I.reedSolomonComputeDivisor(u);for(let v=0,C=0;v<l;v++){let w=a.slice(C,C+b-u+(v<f?0:1));C+=w.length;const E=I.reedSolomonComputeRemainder(w,j);v<f&&w.push(0),h.push(w.concat(E))}let y=[];for(let v=0;v<h[0].length;v++)h.forEach((C,w)=>{(v!=b-u||w>=f)&&y.push(C[v])});return s(y.length==x),y}drawCodewords(a){if(a.length!=Math.floor(I.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let i=0;for(let o=this.size-1;o>=1;o-=2){o==6&&(o=5);for(let l=0;l<this.size;l++)for(let u=0;u<2;u++){const x=o-u,b=(o+1&2)==0?this.size-1-l:l;!this.isFunction[b][x]&&i<a.length*8&&(this.modules[b][x]=n(a[i>>>3],7-(i&7)),i++)}}s(i==a.length*8)}applyMask(a){if(a<0||a>7)throw new RangeError("Mask value out of range");for(let i=0;i<this.size;i++)for(let o=0;o<this.size;o++){let l;switch(a){case 0:l=(o+i)%2==0;break;case 1:l=i%2==0;break;case 2:l=o%3==0;break;case 3:l=(o+i)%3==0;break;case 4:l=(Math.floor(o/3)+Math.floor(i/2))%2==0;break;case 5:l=o*i%2+o*i%3==0;break;case 6:l=(o*i%2+o*i%3)%2==0;break;case 7:l=((o+i)%2+o*i%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[i][o]&&l&&(this.modules[i][o]=!this.modules[i][o])}}getPenaltyScore(){let a=0;for(let u=0;u<this.size;u++){let x=!1,f=0,b=[0,0,0,0,0,0,0];for(let h=0;h<this.size;h++)this.modules[u][h]==x?(f++,f==5?a+=I.PENALTY_N1:f>5&&a++):(this.finderPenaltyAddHistory(f,b),x||(a+=this.finderPenaltyCountPatterns(b)*I.PENALTY_N3),x=this.modules[u][h],f=1);a+=this.finderPenaltyTerminateAndCount(x,f,b)*I.PENALTY_N3}for(let u=0;u<this.size;u++){let x=!1,f=0,b=[0,0,0,0,0,0,0];for(let h=0;h<this.size;h++)this.modules[h][u]==x?(f++,f==5?a+=I.PENALTY_N1:f>5&&a++):(this.finderPenaltyAddHistory(f,b),x||(a+=this.finderPenaltyCountPatterns(b)*I.PENALTY_N3),x=this.modules[h][u],f=1);a+=this.finderPenaltyTerminateAndCount(x,f,b)*I.PENALTY_N3}for(let u=0;u<this.size-1;u++)for(let x=0;x<this.size-1;x++){const f=this.modules[u][x];f==this.modules[u][x+1]&&f==this.modules[u+1][x]&&f==this.modules[u+1][x+1]&&(a+=I.PENALTY_N2)}let i=0;for(const u of this.modules)i=u.reduce((x,f)=>x+(f?1:0),i);const o=this.size*this.size,l=Math.ceil(Math.abs(i*20-o*10)/o)-1;return s(0<=l&&l<=9),a+=l*I.PENALTY_N4,s(0<=a&&a<=2568888),a}getAlignmentPatternPositions(){if(this.version==1)return[];{const a=Math.floor(this.version/7)+2,i=this.version==32?26:Math.ceil((this.version*4+4)/(a*2-2))*2;let o=[6];for(let l=this.size-7;o.length<a;l-=i)o.splice(1,0,l);return o}}static getNumRawDataModules(a){if(a<I.MIN_VERSION||a>I.MAX_VERSION)throw new RangeError("Version number out of range");let i=(16*a+128)*a+64;if(a>=2){const o=Math.floor(a/7)+2;i-=(25*o-10)*o-55,a>=7&&(i-=36)}return s(208<=i&&i<=29648),i}static getNumDataCodewords(a,i){return Math.floor(I.getNumRawDataModules(a)/8)-I.ECC_CODEWORDS_PER_BLOCK[i.ordinal][a]*I.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][a]}static reedSolomonComputeDivisor(a){if(a<1||a>255)throw new RangeError("Degree out of range");let i=[];for(let l=0;l<a-1;l++)i.push(0);i.push(1);let o=1;for(let l=0;l<a;l++){for(let u=0;u<i.length;u++)i[u]=I.reedSolomonMultiply(i[u],o),u+1<i.length&&(i[u]^=i[u+1]);o=I.reedSolomonMultiply(o,2)}return i}static reedSolomonComputeRemainder(a,i){let o=i.map(l=>0);for(const l of a){const u=l^o.shift();o.push(0),i.forEach((x,f)=>o[f]^=I.reedSolomonMultiply(x,u))}return o}static reedSolomonMultiply(a,i){if(a>>>8||i>>>8)throw new RangeError("Byte out of range");let o=0;for(let l=7;l>=0;l--)o=o<<1^(o>>>7)*285,o^=(i>>>l&1)*a;return s(o>>>8==0),o}finderPenaltyCountPatterns(a){const i=a[1];s(i<=this.size*3);const o=i>0&&a[2]==i&&a[3]==i*3&&a[4]==i&&a[5]==i;return(o&&a[0]>=i*4&&a[6]>=i?1:0)+(o&&a[6]>=i*4&&a[0]>=i?1:0)}finderPenaltyTerminateAndCount(a,i,o){return a&&(this.finderPenaltyAddHistory(i,o),i=0),i+=this.size,this.finderPenaltyAddHistory(i,o),this.finderPenaltyCountPatterns(o)}finderPenaltyAddHistory(a,i){i[0]==0&&(a+=this.size),i.pop(),i.unshift(a)}};e.MIN_VERSION=1,e.MAX_VERSION=40,e.PENALTY_N1=3,e.PENALTY_N2=3,e.PENALTY_N3=40,e.PENALTY_N4=10,e.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],e.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],t.QrCode=e;function r(p,a,i){if(a<0||a>31||p>>>a)throw new RangeError("Value out of range");for(let o=a-1;o>=0;o--)i.push(p>>>o&1)}function n(p,a){return(p>>>a&1)!=0}function s(p){if(!p)throw new Error("Assertion error")}const c=class N{constructor(a,i,o){if(this.mode=a,this.numChars=i,this.bitData=o,i<0)throw new RangeError("Invalid argument");this.bitData=o.slice()}static makeBytes(a){let i=[];for(const o of a)r(o,8,i);return new N(N.Mode.BYTE,a.length,i)}static makeNumeric(a){if(!N.isNumeric(a))throw new RangeError("String contains non-numeric characters");let i=[];for(let o=0;o<a.length;){const l=Math.min(a.length-o,3);r(parseInt(a.substring(o,o+l),10),l*3+1,i),o+=l}return new N(N.Mode.NUMERIC,a.length,i)}static makeAlphanumeric(a){if(!N.isAlphanumeric(a))throw new RangeError("String contains unencodable characters in alphanumeric mode");let i=[],o;for(o=0;o+2<=a.length;o+=2){let l=N.ALPHANUMERIC_CHARSET.indexOf(a.charAt(o))*45;l+=N.ALPHANUMERIC_CHARSET.indexOf(a.charAt(o+1)),r(l,11,i)}return o<a.length&&r(N.ALPHANUMERIC_CHARSET.indexOf(a.charAt(o)),6,i),new N(N.Mode.ALPHANUMERIC,a.length,i)}static makeSegments(a){return a==""?[]:N.isNumeric(a)?[N.makeNumeric(a)]:N.isAlphanumeric(a)?[N.makeAlphanumeric(a)]:[N.makeBytes(N.toUtf8ByteArray(a))]}static makeEci(a){let i=[];if(a<0)throw new RangeError("ECI assignment value out of range");if(a<128)r(a,8,i);else if(a<16384)r(2,2,i),r(a,14,i);else if(a<1e6)r(6,3,i),r(a,21,i);else throw new RangeError("ECI assignment value out of range");return new N(N.Mode.ECI,0,i)}static isNumeric(a){return N.NUMERIC_REGEX.test(a)}static isAlphanumeric(a){return N.ALPHANUMERIC_REGEX.test(a)}getData(){return this.bitData.slice()}static getTotalBits(a,i){let o=0;for(const l of a){const u=l.mode.numCharCountBits(i);if(l.numChars>=1<<u)return 1/0;o+=4+u+l.bitData.length}return o}static toUtf8ByteArray(a){a=encodeURI(a);let i=[];for(let o=0;o<a.length;o++)a.charAt(o)!="%"?i.push(a.charCodeAt(o)):(i.push(parseInt(a.substring(o+1,o+3),16)),o+=2);return i}};c.NUMERIC_REGEX=/^[0-9]*$/,c.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,c.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let g=c;t.QrSegment=c})(G||(G={}));(t=>{(e=>{const r=class{constructor(s,c){this.ordinal=s,this.formatBits=c}};r.LOW=new r(0,1),r.MEDIUM=new r(1,0),r.QUARTILE=new r(2,3),r.HIGH=new r(3,2),e.Ecc=r})(t.QrCode||(t.QrCode={}))})(G||(G={}));(t=>{(e=>{const r=class{constructor(s,c){this.modeBits=s,this.numBitsCharCount=c}numCharCountBits(s){return this.numBitsCharCount[Math.floor((s+7)/17)]}};r.NUMERIC=new r(1,[10,12,14]),r.ALPHANUMERIC=new r(2,[9,11,13]),r.BYTE=new r(4,[8,16,16]),r.KANJI=new r(8,[8,10,12]),r.ECI=new r(7,[0,0,0]),e.Mode=r})(t.QrSegment||(t.QrSegment={}))})(G||(G={}));var K=G;var ra={L:K.QrCode.Ecc.LOW,M:K.QrCode.Ecc.MEDIUM,Q:K.QrCode.Ecc.QUARTILE,H:K.QrCode.Ecc.HIGH},St=128,kt="L",Ot="#FFFFFF",Nt="#000000",Mt=!1,Rt=1,na=4,aa=0,ia=.1;function zt(t,e=0){const r=[];return t.forEach(function(n,s){let c=null;n.forEach(function(g,p){if(!g&&c!==null){r.push(`M${c+e} ${s+e}h${p-c}v1H${c+e}z`),c=null;return}if(p===n.length-1){if(!g)return;c===null?r.push(`M${p+e},${s+e} h1v1H${p+e}z`):r.push(`M${c+e},${s+e} h${p+1-c}v1H${c+e}z`);return}g&&c===null&&(c=p)})}),r.join("")}function Dt(t,e){return t.slice().map((r,n)=>n<e.y||n>=e.y+e.h?r:r.map((s,c)=>c<e.x||c>=e.x+e.w?s:!1))}function oa(t,e,r,n){if(n==null)return null;const s=t.length+r*2,c=Math.floor(e*ia),g=s/e,p=(n.width||c)*g,a=(n.height||c)*g,i=n.x==null?t.length/2-p/2:n.x*g,o=n.y==null?t.length/2-a/2:n.y*g,l=n.opacity==null?1:n.opacity;let u=null;if(n.excavate){let f=Math.floor(i),b=Math.floor(o),h=Math.ceil(p+i-f),j=Math.ceil(a+o-b);u={x:f,y:b,w:h,h:j}}const x=n.crossOrigin;return{x:i,y:o,h:a,w:p,excavation:u,opacity:l,crossOrigin:x}}function sa(t,e){return e!=null?Math.max(Math.floor(e),0):t?na:aa}function Tt({value:t,level:e,minVersion:r,includeMargin:n,marginSize:s,imageSettings:c,size:g,boostLevel:p}){let a=M.useMemo(()=>{const f=(Array.isArray(t)?t:[t]).reduce((b,h)=>(b.push(...K.QrSegment.makeSegments(h)),b),[]);return K.QrCode.encodeSegments(f,ra[e],r,void 0,void 0,p)},[t,e,r,p]);const{cells:i,margin:o,numCells:l,calculatedImageSettings:u}=M.useMemo(()=>{let x=a.getModules();const f=sa(n,s),b=x.length+f*2,h=oa(x,g,f,c);return{cells:x,margin:f,numCells:b,calculatedImageSettings:h}},[a,g,c,n,s]);return{qrcode:a,margin:o,cells:i,numCells:l,calculatedImageSettings:u}}var la=(function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0})(),Lt=M.forwardRef(function(e,r){const n=e,{value:s,size:c=St,level:g=kt,bgColor:p=Ot,fgColor:a=Nt,includeMargin:i=Mt,minVersion:o=Rt,boostLevel:l,marginSize:u,imageSettings:x}=n,b=me(n,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:h}=b,j=me(b,["style"]),y=x?.src,v=M.useRef(null),C=M.useRef(null),w=M.useCallback(z=>{v.current=z,typeof r=="function"?r(z):r&&(r.current=z)},[r]),[E,S]=M.useState(!1),{margin:A,cells:k,numCells:F,calculatedImageSettings:O}=Tt({value:s,level:g,minVersion:o,boostLevel:l,includeMargin:i,marginSize:u,imageSettings:x,size:c});M.useEffect(()=>{if(v.current!=null){const z=v.current,D=z.getContext("2d");if(!D)return;let Ce=k;const Q=C.current,Ee=O!=null&&Q!==null&&Q.complete&&Q.naturalHeight!==0&&Q.naturalWidth!==0;Ee&&O.excavation!=null&&(Ce=Dt(k,O.excavation));const je=window.devicePixelRatio||1;z.height=z.width=c*je;const Ae=c/F*je;D.scale(Ae,Ae),D.fillStyle=p,D.fillRect(0,0,F,F),D.fillStyle=a,la?D.fill(new Path2D(zt(Ce,A))):k.forEach(function(Ft,Bt){Ft.forEach(function(_t,$t){_t&&D.fillRect($t+A,Bt+A,1,1)})}),O&&(D.globalAlpha=O.opacity),Ee&&D.drawImage(Q,O.x+A,O.y+A,O.w,O.h)}}),M.useEffect(()=>{S(!1)},[y]);const L=fe({height:c,width:c},h);let B=null;return y!=null&&(B=M.createElement("img",{src:y,key:y,style:{display:"none"},onLoad:()=>{S(!0)},ref:C,crossOrigin:O?.crossOrigin})),M.createElement(M.Fragment,null,M.createElement("canvas",fe({style:L,height:c,width:c,ref:w,role:"img"},j)),B)});Lt.displayName="QRCodeCanvas";var ca=M.forwardRef(function(e,r){const n=e,{value:s,size:c=St,level:g=kt,bgColor:p=Ot,fgColor:a=Nt,includeMargin:i=Mt,minVersion:o=Rt,boostLevel:l,title:u,marginSize:x,imageSettings:f}=n,b=me(n,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:h,cells:j,numCells:y,calculatedImageSettings:v}=Tt({value:s,level:g,minVersion:o,boostLevel:l,includeMargin:i,marginSize:x,imageSettings:f,size:c});let C=j,w=null;f!=null&&v!=null&&(v.excavation!=null&&(C=Dt(j,v.excavation)),w=M.createElement("image",{href:f.src,height:v.h,width:v.w,x:v.x+h,y:v.y+h,preserveAspectRatio:"none",opacity:v.opacity,crossOrigin:v.crossOrigin}));const E=zt(C,h);return M.createElement("svg",fe({height:c,width:c,viewBox:`0 0 ${y} ${y}`,ref:r,role:"img"},b),!!u&&M.createElement("title",null,u),M.createElement("path",{fill:p,d:`M0,0 h${y}v${y}H0z`,shapeRendering:"crispEdges"}),M.createElement("path",{fill:a,d:E,shapeRendering:"crispEdges"}),w)});ca.displayName="QRCodeSVG";const da=P.h3`
  font-size: 22px;
  font-weight: 700;
  color: #e5e7eb;
`,ua=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`,pa=P.p`
  font-size: 13px;
  opacity: 0.7;
`,Ye=P.div`
  display: flex;
  gap: 10px;
`,Z=P.button`
  flex: 1;
  padding: 10px;
  border-radius: 12px;
  background: #22d3ee;
  border: none;
  font-weight: 600;
  cursor: pointer;
`,ha=P.div`
  display: flex;
  gap: 10px;
`,Xe=P.button`
  flex: 1;
  padding: 10px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #e5e7eb;
  cursor: pointer;

  &:hover {
    background: rgba(34, 211, 238, 0.15);
  }
`;P.p`
  text-align: center;
  font-size: 12px;
  opacity: 0.6;
  margin: 8px 0;
`;const fa=P.div`
  font-size: 18px;
  font-weight: bold;
  color: #22d3ee;
  margin-bottom: 12px;
`,ma=P.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(8px) saturate(140%);

  border-radius: 22px;
  padding: 26px;
  color: #e5e7eb;

  border: 1px solid rgba(34, 211, 238, 0.35);

  box-shadow:
    0 0 30px rgba(34, 211, 238, 0.15),
    inset 0 0 20px rgba(255, 255, 255, 0.03);
    
`,ga=P.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
`,xa=P.div`
  display: flex;
  flex-direction: column;
`;function va({order:t}){const e=/Android|iPhone|iPad/i.test(navigator.userAgent),r="yourupi@bank",n=t?.customer||"—",s=Number(t?.total)||0,c=`upi://pay?pa=${r}&pn=${n}&am=${s}&cu=INR`,g=`🧾 Order Payment
Customer: ${n}
Amount: ₹${s}
UPI ID: ${r}`;return d.jsxs(ma,{children:[d.jsxs(xa,{children:[d.jsx(da,{children:"💳 Pay & Share"}),d.jsxs(fa,{children:["₹",s,d.jsxs("span",{style:{fontSize:14,opacity:.7},children:[" ","• ",n]})]}),d.jsxs(ua,{children:[d.jsx(Lt,{value:c,size:180,bgColor:"#020617",fgColor:"#22d3ee"}),d.jsx(pa,{children:"Scan this QR using Google Pay / PhonePe / Paytm"})]})]}),d.jsxs(ga,{children:[e?d.jsxs(Ye,{children:[d.jsx(Z,{onClick:()=>window.location.href=c,children:"Google Pay"}),d.jsx(Z,{onClick:()=>window.location.href=c,children:"PhonePe"}),d.jsx(Z,{onClick:()=>window.location.href=c,children:"Paytm"})]}):d.jsx(Ye,{children:d.jsx(Z,{onClick:()=>window.open(`https://paytm.com/online-payments?amount=${s}`,"_blank"),children:"Pay via Paytm Web"})}),d.jsxs(ha,{children:[d.jsx(Xe,{onClick:()=>window.open(`https://wa.me/?text=${encodeURIComponent(g)}`,"_blank"),children:"WhatsApp"}),d.jsx(Xe,{onClick:()=>window.open(`mailto:?subject=Order Payment&body=${encodeURIComponent(g)}`,"_blank"),children:"Email"})]})]})]})}function ya({orders:t}){return t.length?d.jsx(Ar,{width:"100%",height:320,children:d.jsxs(Ln,{data:t,margin:{top:20,right:30,left:0,bottom:0},children:[d.jsx("defs",{children:d.jsxs("linearGradient",{id:"colorTotal",x1:"0",y1:"0",x2:"0",y2:"1",children:[d.jsx("stop",{offset:"5%",stopColor:"#f59e0b",stopOpacity:.6}),d.jsx("stop",{offset:"95%",stopColor:"#f59e0b",stopOpacity:.05})]})}),d.jsx(gt,{strokeDasharray:"3 6",vertical:!0,horizontal:!1,stroke:"#334155"}),d.jsx(Nr,{dataKey:"customer",stroke:"#cbd5f5",tick:{fontSize:12}}),d.jsx(Mr,{stroke:"#cbd5f5",tick:{fontSize:12}}),d.jsx(Ir,{contentStyle:{background:"#020617",border:"1px solid #334155",borderRadius:8,color:"#e5e7eb"}}),d.jsx(jt,{type:"monotone",dataKey:"total",stroke:"#f59e0b",strokeWidth:3,fill:"url(#colorTotal)",dot:!1,activeDot:{r:6}})]})}):d.jsx("p",{style:{opacity:.6},children:"No data to display"})}const ba=P.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 148px;

  background-image: url(${t=>t.bg});
  background-size: cover;
  background-position: center;

  border-radius: 22px 22px 0 0;

  /* Dark overlay for text readability */
  &::after {
    content: "";
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(2, 6, 23, 0.9)
    );
    border-radius: 22px 22px 0 0;
  }
`,wa=P.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: linear-gradient(
    180deg,
    rgba(2, 6, 23, 0.88),
    rgba(2, 6, 23, 0.95)
  );
  border-radius: 22px;
  padding: 28px;
  color: #e5e7eb;
  backdrop-filter: blur(16px);

  border: 1px solid rgba(56, 189, 248, 0.25);
`,Pa=P.h3`
  margin-top: 120px;
  font-size: 22px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #f8fafc;
`,Y=P.input`
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.08);
  color: #f8fafc;
  font-size: 14px;

  ::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: none;
    border-color: #38bdf8;
    box-shadow: 0 0 12px rgba(56, 189, 248, 0.6);
  }
`,Ze=P.div`
  display: flex;
  grid-template-columns: 1.5fr 1fr auto;
  gap: 12px;
  margin-top: 12px;
  align-items: center;
`,Je=P.div`
  margin-top: 22px;
`,ge=P.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 14px;
  color: #dbeafe;

  span:last-child {
    font-weight: 600;
    color: #f8fafc;
  }
`,Ca=P.div`
  margin-top: 24px;
  font-size: 20px;
  font-weight: 700;
  text-align: right;
  color: #7dd3fc;
`,Ea=P.div`
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    color: #22d3ee;
    font-size: 22px;
    position: relative;
    padding-top: 100px;
  }
`,qe=P.h4`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #e5e7eb;

  svg {
    color: #22d3ee;
  }
`,X=P.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 12px 14px;
  border-radius: 14px;

  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);

  svg {
    color: #22d3ee;
    font-size: 18px;
  }

  &:focus-within {
    border-color: rgba(34, 211, 238, 0.5);
    box-shadow: 0 0 10px rgba(34, 211, 238, 0.25);
  }
`,et=P.button`
  width: 44px;
  height: 44px;
  border-radius: 12px;

  border: none;
  background: #38bdf8;
  color: #020617;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 14px rgba(56, 189, 248, 0.6);
  }
`,ja=P.button`
  width: 100%;
  margin-top: 14px;
  padding: 14px;

  border-radius: 16px;
  border: none;

  background: linear-gradient(135deg, #22d3ee, #38bdf8);
  color: #020617;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  font-weight: 700;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 20px rgba(34, 211, 238, 0.6);
  }
`;function Aa({orders:t,onRemove:e,onSelect:r,selectedId:n}){return d.jsxs(d.Fragment,{children:[t.length===0&&d.jsx("p",{style:{opacity:.6},children:"No orders yet"}),t.map(s=>d.jsxs(ge,{onClick:()=>r(s),style:{cursor:"pointer",background:n===s.id?"rgba(34, 211, 238, 0.15)":"transparent",borderRadius:8,padding:"8px 10px"},children:[d.jsx("span",{children:s.customer}),d.jsxs("span",{children:["₹",s.total]}),d.jsx("button",{onClick:c=>{c.stopPropagation(),e(s.id)},style:{background:"transparent",border:"none",cursor:"pointer",color:"#ef4444",fontSize:16},children:"❌"})]},s.id))]})}const Ia="/assets/dineBanner-CiQjSs20.png";function Sa({onSubmit:t}){const[e,r]=m.useState(""),[n,s]=m.useState(""),[c,g]=m.useState(""),[p,a]=m.useState(""),[i,o]=m.useState(""),[l,u]=m.useState([]),[x,f]=m.useState([]),b=()=>{!n||!c||(u([...l,{name:n,price:Number(c),type:"food"}]),s(""),g(""))},h=()=>{!p||!i||(f([...x,{name:p,price:Number(i),type:"drink"}]),a(""),o(""))},j=l.reduce((w,E)=>w+(Number(E.price)||0),0),y=x.reduce((w,E)=>w+(Number(E.price)||0),0),v=j+y,C=()=>{if(!e||v===0)return;const w=[...l,...x];t({customer:e,items:w,total:v}),r(""),u([]),f([]),s(""),g(""),a(""),o("")};return d.jsxs(wa,{children:[d.jsx(ba,{bg:Ia}),d.jsxs(Ea,{children:[d.jsx(Ut,{}),d.jsx(Pa,{children:"Manual Order Entry"})]}),d.jsxs(X,{children:[d.jsx(Ht,{}),d.jsx(Y,{placeholder:"Customer Name",value:e,onChange:w=>r(w.target.value.replace(/[^a-zA-Z\s]/g,""))})]}),d.jsxs(Je,{children:[d.jsxs(qe,{children:[d.jsx(Kt,{}),d.jsx("span",{children:"Food Items"})]}),d.jsxs(Ze,{children:[d.jsxs(X,{children:[d.jsx(Ie,{}),d.jsx(Y,{placeholder:"Item name",value:n,onChange:w=>s(w.target.value.replace(/[^a-zA-Z\s]/g,""))})]}),d.jsxs(X,{children:[d.jsx(Se,{}),d.jsx(Y,{placeholder:"₹ Price",type:"number",value:c,onChange:w=>g(w.target.value.replace(/[^0-9]/g,""))})]}),d.jsx(et,{onClick:b,children:d.jsx(ke,{})})]}),l.map((w,E)=>d.jsxs(ge,{children:[d.jsx("span",{children:w.name}),d.jsxs("span",{children:["₹",w.price]})]},E))]}),d.jsxs(Je,{children:[d.jsxs(qe,{children:[d.jsx(Vt,{}),d.jsx("span",{children:"Drinks"})]}),d.jsxs(Ze,{children:[d.jsxs(X,{children:[d.jsx(Ie,{}),d.jsx(Y,{placeholder:"Drink name",value:p,onChange:w=>a(w.target.value.replace(/[^a-zA-Z\s]/g,""))})]}),d.jsxs(X,{children:[d.jsx(Se,{}),d.jsx(Y,{placeholder:"₹ Price",type:"number",value:i,onChange:w=>o(w.target.value.replace(/[^0-9]/g,""))})]}),d.jsx(et,{onClick:h,children:d.jsx(ke,{})})]}),x.map((w,E)=>d.jsxs(ge,{children:[d.jsx("span",{children:w.name}),d.jsxs("span",{children:["₹",w.price]})]},E))]}),d.jsxs(Ca,{children:["Grand Total: ₹",v]}),d.jsxs(ja,{onClick:C,children:[d.jsx(Qt,{}),d.jsx("span",{children:"Submit Order"})]})]})}const ka=P.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,Oa=P.div`
  width: 480px;
  max-height: 85vh;
  overflow-y: auto;
  background: rgba(15,23,42,0.9);
  backdrop-filter: blur(14px);
  border-radius: 24px;
  padding: 24px;
  color: white;
  border: 1px solid #4fc3f7;
  box-shadow: 0 0 15px rgba(79, 195, 247, 0.4);
`,Na=P.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`,Ma=P.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`,J=P.div`
  margin-bottom: 16px;
`,q=P.h4`
  margin-bottom: 6px;
`,U=P.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  opacity: 0.85;
  margin-bottom: 4px;
`,Ra=P.div`
  margin-top: 16px;
  font-size: 16px;
  text-align: right;
`;function za({items:t=[],billTotal:e=0,billType:r="RECEIPT",onClose:n}){const s=y=>{const v=(y.name||"").toLowerCase();return v.includes("packaging")?"packaging":["chicken","mutton","fish","egg","prawn","lamb","hyderabadi dum","biryani"].some(E=>v.includes(E))?"non-veg":["thumbs","thums","coke","pepsi","soda","water","ml"].some(E=>v.includes(E))?"drink":"veg"},c=y=>r==="GST_INVOICE"?Number(y.total)||0:Number(y.net??y.total)||0,g=y=>y.reduce((v,C)=>v+c(C),0),p=t.filter(y=>s(y)==="veg"),a=t.filter(y=>s(y)==="non-veg"),i=t.filter(y=>s(y)==="drink"),o=t.filter(y=>s(y)==="packaging"),l=g(p),u=g(a),x=g(i),f=g(o),b=r==="GST_INVOICE"?l+u+x+f:l+u+x,h=r==="GST_INVOICE"?0:Math.max(e-b,0),j=e||b+h;return d.jsx(ka,{children:d.jsxs(Oa,{children:[d.jsxs(Na,{children:[d.jsx("h3",{children:"🧾 Order Breakdown"}),d.jsx(Ma,{onClick:n,children:"✕"})]}),d.jsxs(J,{children:[d.jsxs(q,{children:["🟢 Veg Items (₹",l.toFixed(2),")"]}),p.map((y,v)=>d.jsxs(U,{children:[y.name,d.jsxs("span",{children:["₹",c(y).toFixed(2)]})]},v))]}),d.jsxs(J,{children:[d.jsxs(q,{children:["🔴 Non-Veg Items (₹",u.toFixed(2),")"]}),a.map((y,v)=>d.jsxs(U,{children:[y.name,d.jsxs("span",{children:["₹",c(y).toFixed(2)]})]},v))]}),d.jsxs(J,{children:[d.jsxs(q,{children:["🟡 Drinks (₹",x.toFixed(2),")"]}),i.map((y,v)=>d.jsxs(U,{children:[y.name,d.jsxs("span",{children:["₹",c(y).toFixed(2)]})]},v))]}),o.length>0&&d.jsxs(J,{children:[d.jsxs(q,{children:["📦 Packaging (₹",f.toFixed(2),")"]}),o.map((y,v)=>d.jsxs(U,{children:[y.name,d.jsxs("span",{children:["₹",c(y).toFixed(2)]})]},v))]}),d.jsxs(Ra,{children:[d.jsxs(U,{children:["Subtotal ",d.jsxs("span",{children:["₹",b.toFixed(2)]})]}),h>0&&d.jsxs(U,{children:["Tax ",d.jsxs("span",{children:["₹",h.toFixed(2)]})]}),d.jsxs("strong",{children:["Grand Total: ₹",j.toFixed(2)]})]})]})})}const Da=P.div`
  width: 100%;
  min-height: 100%;
  overflow: auto;
  background:
    linear-gradient(rgba(2, 6, 23, 0.6), rgba(2, 6, 23, 0.6)),
    url(${t=>t.$bg}) center / cover no-repeat;
  background-size: cover;
`,Ta=P.div`
  border-radius: 22px;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`,La=P.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding-right: 8px;

  @media (max-width: 768px) {
    height: auto;
    overflow: visible;
  }
`,Fa=P.div`
  padding: 26px;
  border-radius: 22px;

  background: linear-gradient(
    180deg,
    rgba(2, 6, 23, 0.92),
    rgba(2, 6, 23, 0.97)
  );

  border: 1px solid rgba(56, 189, 248, 0.3);
  backdrop-filter: blur(18px);
`,Ba=P.h3`
  font-size: 22px;
  font-weight: 700;
  color: #e5e7eb;
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    font-size: 22px;
    color: #22d3ee;
    filter: drop-shadow(0 0 6px rgba(34, 211, 238, 0.6));
  }
`,_a=P.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #fff;
`,$a=P.div`
  margin-top: 12px;
  height: 300px;
`,Ga=P.div`
  min-height: calc(100vh - 88px);
  background: transparent;
  position: relative;
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    margin-left: 0;
    flex-direction: column;
    height: auto;
  }
`;P.div`
  width: 100%;
`;const Wa=P.button`
  z-index: 30;

  padding: 14px 36px;
  border-radius: 999px;
  border: 6px solid #020617; /* dark outer ring */

  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.3px;

  color: #020617;
  cursor: pointer;

  background:
    /* glossy highlight */
    radial-gradient(
      120% 120% at 30% 20%,
      rgba(255, 255, 255, 0.45),
      rgba(255, 255, 255, 0) 45%
    ),
    /* main blue gradient */ linear-gradient(135deg, #1ebcd4, #0d8ac0, #7dd3fc);

  box-shadow:
    inset 0 -6px 12px rgba(255, 255, 255, 0.35),
    inset 0 8px 16px rgba(255, 255, 255, 0.2),
    0 16px 40px rgba(34, 211, 238, 0.45);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      inset 0 -6px 16px rgba(255, 255, 255, 0.45),
      0 22px 55px rgba(34, 211, 238, 0.65);
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
    filter: grayscale(0.4);
  }
`,Ua=P.div`
  display: flex;
  margin-top: 120px;
  gap: 50px;
  
  flex-direction: column;

   @media (min-width: 1024px) {
   flex-direction: row;
   width: 1140px;
   }
`,Ha=P.div``,Ka=P.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  z-index: 1;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 0 24px;

  background: linear-gradient(
    180deg,
    rgba(2, 6, 23, 0.85),
    rgba(2, 6, 23, 0.55)
  );

  backdrop-filter: blur(10px);
`;function qa(){const t=Gt(),[e,r]=m.useState(!1),[n,s]=m.useState([]),[c,g]=m.useState(""),[p,a]=m.useState(!1),[i,o]=m.useState(0),[l,u]=m.useState([]),[x,f]=m.useState(null),[b,h]=m.useState(!1),[j,y]=m.useState({people:[],items:[]}),v=async w=>{try{const S=await(await fetch("http://localhost:5001/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)})).json();console.log("SAVED ORDER:",S),u(k=>[...k,S]),f(S);const A=S.customer||S.customerName||w.customer;A&&y(k=>({people:Array.from(new Set([...k.people,A])),items:k.items}))}catch(E){console.error("Save failed",E)}},C=async w=>{await fetch(`http://localhost:5001/api/orders/${w}`,{method:"DELETE"}),u(E=>E.filter(S=>S.id!==w)),x?.id===w&&f(null)};return m.useEffect(()=>{const w=sessionStorage.getItem("billScanResult");if(w)try{const E=JSON.parse(w);s(E.items||[]),o(Number(E.total)||0),g(E.rawText||""),a(E.aiProcessed),r(!0)}catch(E){console.error("Invalid bill scan data",E)}},[t.key]),d.jsxs(Da,{$bg:Fn,children:[d.jsx(Ka,{children:d.jsx(Wa,{disabled:!x,onClick:()=>h(!0),children:"Scan & Pay"})}),d.jsxs(Ga,{children:[d.jsx(Yt,{}),d.jsxs(Ua,{children:[d.jsx(Ta,{children:d.jsx(Sa,{onSubmit:v})}),d.jsxs(La,{children:[d.jsxs(Fa,{children:[d.jsxs(Ba,{children:[d.jsx(Xt,{}),"Submitted Orders"]}),d.jsx(_a,{children:d.jsx(Aa,{orders:l,onRemove:C,onSelect:f,selectedId:x?.id})}),l.length>0&&d.jsx($a,{children:d.jsx(ya,{orders:l})})]}),d.jsx(Ha,{children:d.jsx(ea,{group:j,submittedOrders:l,onAddSplitItem:w=>{u(E=>E.map(S=>({...S,items:S.items.map(A=>`${A.name}-${A.price}`===w.id?{...A,isSplit:!0}:A)}))),y(E=>({...E,items:[...E.items,w]}))},onClearSplit:()=>{u(w=>w.map(E=>({...E,items:E.items.map(S=>({...S,isSplit:!1}))}))),y({people:[],items:[]})}})})]})]})]}),b&&d.jsx("div",{onClick:()=>h(!1),style:{position:"fixed",inset:0,background:"rgba(2,6,23,0.75)",backdropFilter:"blur(10px)",zIndex:50,display:"flex",alignItems:"center",justifyContent:"center"},children:d.jsxs("div",{onClick:w=>w.stopPropagation(),style:{width:380,maxWidth:"92%"},children:[d.jsx(va,{order:x}),d.jsx("button",{onClick:()=>h(!1),style:{width:"100%",marginTop:12,padding:10,borderRadius:10,border:"1px solid rgba(255,255,255,0.2)",background:"transparent",color:"#94a3b8",cursor:"pointer"},children:"Close"})]})}),e&&d.jsx(za,{items:n,billTotal:i,rawText:c,aiProcessed:p,onClose:()=>r(!1)})]})}export{qa as default};
