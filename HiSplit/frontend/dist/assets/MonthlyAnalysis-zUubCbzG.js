import{r as o,j as s,a as j}from"./index-BTxCUwbS.js";import{S as We}from"./slideBar-BLoVtkfQ.js";import{Y as de,M as $e}from"./constants-B3xMendw.js";import{i as Ye,a as V,g as H,b as Q,c as Ue,d as ue,e as K,s as Ve,f as Je,h as _,j as Xe,k as z,l as R,m as je,n as Pe,o as Ee,p as Ze,q as qe,r as pe,t as He,u as ve,v as Qe,L as W,w as ea,x as aa,D as te,y as we,z as ta,S as ra,A as na,Z as re,B as Se,C as ia,E as oa,F as sa,G as $,H as Oe,I as la,J as ca,K as da,M as fe,N as Be,O as ua,P as Ce,Q as pa,U as va,V as D,W as fa,X as xa,Y as ha,_ as ma,$ as ga,a0 as xe,a1 as ya,R as ba,T as Aa}from"./CategoricalChart-DD_Vt4QT.js";import{s as L,a as T,u as ka,G as Ia,C as ja,X as Pa,Y as Ea}from"./CartesianChart-BsQIAA4k.js";import{S as wa,C as Sa,u as Me,a as De,b as Ke}from"./tooltipContext-jP36tpUq.js";var he=(e,a,t)=>{var r=t??e;if(!V(r))return H(r,a,0)},Oa=(e,a,t)=>{var r={},i=e.filter(Ye),n=e.filter(c=>c.stackId==null),l=i.reduce((c,d)=>(c[d.stackId]||(c[d.stackId]=[]),c[d.stackId].push(d),c),r),p=Object.entries(l).map(c=>{var[d,m]=c,y=m.map(A=>A.dataKey),b=he(a,t,m[0].barSize);return{stackId:d,dataKeys:y,barSize:b}}),x=n.map(c=>{var d=[c.dataKey].filter(y=>y!=null),m=he(a,t,c.barSize);return{stackId:void 0,dataKeys:d,barSize:m}});return[...p,...x]};function me(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function F(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?me(Object(t),!0).forEach(function(r){Ba(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):me(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Ba(e,a,t){return(a=Ca(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function Ca(e){var a=Ma(e,"string");return typeof a=="symbol"?a:a+""}function Ma(e,a){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,a);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function Da(e,a,t,r,i){var n=r.length;if(!(n<1)){var l=H(e,t,0,!0),p,x=[];if(Q(r[0].barSize)){var c=!1,d=t/n,m=r.reduce((v,h)=>v+(h.barSize||0),0);m+=(n-1)*l,m>=t&&(m-=(n-1)*l,l=0),m>=t&&d>0&&(c=!0,d*=.9,m=n*d);var y=(t-m)/2>>0,b={offset:y-l,size:0};p=r.reduce((v,h)=>{var u,f={stackId:h.stackId,dataKeys:h.dataKeys,position:{offset:b.offset+b.size+l,size:c?d:(u=h.barSize)!==null&&u!==void 0?u:0}},P=[...v,f];return b=P[P.length-1].position,P},x)}else{var A=H(a,t,0,!0);t-2*A-(n-1)*l<=0&&(l=0);var g=(t-2*A-(n-1)*l)/n;g>1&&(g>>=0);var k=Q(i)?Math.min(g,i):g;p=r.reduce((v,h,u)=>[...v,{stackId:h.stackId,dataKeys:h.dataKeys,position:{offset:A+(g+l)*u+(g-k)/2,size:k}}],x)}return p}}var Ka=(e,a,t,r,i,n,l)=>{var p=V(l)?a:l,x=Da(t,r,i!==n?i:n,e,p);return i!==n&&x!=null&&(x=x.map(c=>F(F({},c),{},{position:F(F({},c.position),{},{offset:c.position.offset-i/2})}))),x},La=(e,a)=>{var t=Ue(a);if(!(!e||t==null||a==null)){var{stackId:r}=a;if(r!=null){var i=e[r];if(i){var{stackedData:n}=i;if(n)return n.find(l=>l.key===t)}}}};function Ta(e,a){return e&&typeof e=="object"&&"zIndex"in e&&typeof e.zIndex=="number"&&Q(e.zIndex)?e.zIndex:a}var za=["children"];function Ra(e,a){if(e==null)return{};var t,r,i=_a(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function _a(e,a){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(a.indexOf(r)!==-1)continue;t[r]=e[r]}return t}var Na={data:[],xAxisId:"xAxis-0",yAxisId:"yAxis-0",dataPointFormatter:()=>({x:0,y:0,value:0}),errorBarOffset:0},Ga=o.createContext(Na);function Fa(e){var{children:a}=e,t=Ra(e,za);return o.createElement(Ga.Provider,{value:t},a)}var Wa="Invariant failed";function $a(e,a){throw new Error(Wa)}function ee(){return ee=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ee.apply(null,arguments)}function Y(e){return o.createElement(wa,ee({shapeType:"rectangle",activeClassName:"recharts-active-bar"},e))}var Ya=function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return(r,i)=>{if(ue(a))return a;var n=ue(r)||V(r);return n?a(r,i):(n||$a(),t)}},Ua=(e,a,t)=>t,Va=(e,a)=>a,N=K([Pe,Va],(e,a)=>e.filter(t=>t.type==="bar").find(t=>t.id===a)),Ja=K([N],e=>e?.maxBarSize),Xa=(e,a,t,r)=>r,Za=K([_,Pe,L,T,Ua],(e,a,t,r,i)=>a.filter(n=>e==="horizontal"?n.xAxisId===t:n.yAxisId===r).filter(n=>n.isPanorama===i).filter(n=>n.hide===!1).filter(n=>n.type==="bar")),qa=(e,a,t)=>{var r=_(e),i=L(e,a),n=T(e,a);if(!(i==null||n==null))return r==="horizontal"?pe(e,"yAxis",n,t):pe(e,"xAxis",i,t)},Ha=(e,a)=>{var t=_(e),r=L(e,a),i=T(e,a);if(!(r==null||i==null))return t==="horizontal"?ve(e,"xAxis",r):ve(e,"yAxis",i)},Qa=K([Za,He,Ha],Oa),et=(e,a,t)=>{var r,i,n=N(e,a);if(n!=null){var l=L(e,a),p=T(e,a);if(!(l==null||p==null)){var x=_(e),c=Ee(e),{maxBarSize:d}=n,m=V(d)?c:d,y,b;return x==="horizontal"?(y=z(e,"xAxis",l,t),b=R(e,"xAxis",l,t)):(y=z(e,"yAxis",p,t),b=R(e,"yAxis",p,t)),(r=(i=je(y,b,!0))!==null&&i!==void 0?i:m)!==null&&r!==void 0?r:0}}},Le=(e,a,t)=>{var r=_(e),i=L(e,a),n=T(e,a);if(!(i==null||n==null)){var l,p;return r==="horizontal"?(l=z(e,"xAxis",i,t),p=R(e,"xAxis",i,t)):(l=z(e,"yAxis",n,t),p=R(e,"yAxis",n,t)),je(l,p)}},at=K([Qa,Ee,Ze,qe,et,Le,Ja],Ka),tt=(e,a,t)=>{var r=L(e,a);if(r!=null)return z(e,"xAxis",r,t)},rt=(e,a,t)=>{var r=T(e,a);if(r!=null)return z(e,"yAxis",r,t)},nt=(e,a,t)=>{var r=L(e,a);if(r!=null)return R(e,"xAxis",r,t)},it=(e,a,t)=>{var r=T(e,a);if(r!=null)return R(e,"yAxis",r,t)},ot=K([at,N],(e,a)=>{if(!(e==null||a==null)){var t=e.find(r=>r.stackId===a.stackId&&a.dataKey!=null&&r.dataKeys.includes(a.dataKey));if(t!=null)return t.position}}),st=K([qa,N],La),lt=K([Ve,Je,tt,rt,nt,it,ot,_,Xe,Le,st,N,Xa],(e,a,t,r,i,n,l,p,x,c,d,m,y)=>{var{chartData:b,dataStartIndex:A,dataEndIndex:g}=x;if(!(m==null||l==null||a==null||p!=="horizontal"&&p!=="vertical"||t==null||r==null||i==null||n==null||c==null)){var{data:k}=m,v;if(k!=null&&k.length>0?v=k:v=b?.slice(A,g+1),v!=null)return zt({layout:p,barSettings:m,pos:l,parentViewBox:a,bandSize:c,xAxis:t,yAxis:r,xAxisTicks:i,yAxisTicks:n,stackedData:d,displayedData:v,offset:e,cells:y,dataStartIndex:A})}}),ct=["index"];function ae(){return ae=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ae.apply(null,arguments)}function dt(e,a){if(e==null)return{};var t,r,i=ut(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function ut(e,a){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(a.indexOf(r)!==-1)continue;t[r]=e[r]}return t}var Te=o.createContext(void 0),pt=e=>{var a=o.useContext(Te);if(a!=null)return a.stackId;if(e!=null)return Qe(e)},vt=(e,a)=>"recharts-bar-stack-clip-path-".concat(e,"-").concat(a),ft=e=>{var a=o.useContext(Te);if(a!=null){var{stackId:t}=a;return"url(#".concat(vt(t,e),")")}},xt=e=>{var{index:a}=e,t=dt(e,ct),r=ft(a);return o.createElement(W,ae({className:"recharts-bar-stack-layer",clipPath:r},t))},ht=["onMouseEnter","onMouseLeave","onClick"],mt=["value","background","tooltipPosition"],gt=["id"],yt=["onMouseEnter","onClick","onMouseLeave"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},C.apply(null,arguments)}function ge(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function E(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?ge(Object(t),!0).forEach(function(r){bt(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ge(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function bt(e,a,t){return(a=At(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function At(e){var a=kt(e,"string");return typeof a=="symbol"?a:a+""}function kt(e,a){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,a);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function U(e,a){if(e==null)return{};var t,r,i=It(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function It(e,a){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(a.indexOf(r)!==-1)continue;t[r]=e[r]}return t}var jt=e=>{var{dataKey:a,name:t,fill:r,legendType:i,hide:n}=e;return[{inactive:n,dataKey:a,type:i,color:r,value:Se(t,a),payload:e}]},Pt=o.memo(e=>{var{dataKey:a,stroke:t,strokeWidth:r,fill:i,name:n,hide:l,unit:p,tooltipType:x,id:c}=e,d={dataDefinedOnItem:void 0,positions:void 0,settings:{stroke:t,strokeWidth:r,fill:i,dataKey:a,nameKey:void 0,name:Se(n,a),hide:l,type:x,color:i,unit:p,graphicalItemId:c}};return o.createElement(ia,{tooltipEntrySettings:d})});function Et(e){var a=$(Be),{data:t,dataKey:r,background:i,allOtherBarProps:n}=e,{onMouseEnter:l,onMouseLeave:p,onClick:x}=n,c=U(n,ht),d=Me(l,r,n.id),m=De(p),y=Ke(x,r,n.id);if(!i||t==null)return null;var b=ua(i);return o.createElement(re,{zIndex:Ta(i,te.barBackground)},t.map((A,g)=>{var{value:k,background:v,tooltipPosition:h}=A,u=U(A,mt);if(!v)return null;var f=d(A,g),P=m(A,g),I=y(A,g),O=E(E(E(E(E({option:i,isActive:String(g)===a},u),{},{fill:"#eee"},v),b),Ce(c,A,g)),{},{onMouseEnter:f,onMouseLeave:P,onClick:I,dataKey:r,index:g,className:"recharts-bar-background-rectangle"});return o.createElement(Y,C({key:"background-bar-".concat(g)},O))}))}function wt(e){var{showLabels:a,children:t,rects:r}=e,i=r?.map(n=>{var l={x:n.x,y:n.y,width:n.width,lowerWidth:n.width,upperWidth:n.width,height:n.height};return E(E({},l),{},{value:n.value,payload:n.payload,parentViewBox:n.parentViewBox,viewBox:l,fill:n.fill})});return o.createElement(xa,{value:a?i:void 0},t)}function St(e){var{shape:a,activeBar:t,baseProps:r,entry:i,index:n,dataKey:l}=e,p=$(Be),x=$(ma),c=t&&String(n)===p&&(x==null||l===x),d=c?t:a;return c?o.createElement(re,{zIndex:te.activeBar},o.createElement(Y,C({},r,{name:String(r.name)},i,{isActive:c,option:d,index:n,dataKey:l}))):o.createElement(Y,C({},r,{name:String(r.name)},i,{isActive:c,option:d,index:n,dataKey:l}))}function Ot(e){var{shape:a,baseProps:t,entry:r,index:i,dataKey:n}=e;return o.createElement(Y,C({},t,{name:String(t.name)},r,{isActive:!1,option:a,index:i,dataKey:n}))}function Bt(e){var a,{data:t,props:r}=e,i=(a=ha(r))!==null&&a!==void 0?a:{},{id:n}=i,l=U(i,gt),{shape:p,dataKey:x,activeBar:c}=r,{onMouseEnter:d,onClick:m,onMouseLeave:y}=r,b=U(r,yt),A=Me(d,x,n),g=De(y),k=Ke(m,x,n);return t?o.createElement(o.Fragment,null,t.map((v,h)=>o.createElement(xt,C({index:h,key:"rectangle-".concat(v?.x,"-").concat(v?.y,"-").concat(v?.value,"-").concat(h),className:"recharts-bar-rectangle"},Ce(b,v,h),{onMouseEnter:A(v,h),onMouseLeave:g(v,h),onClick:k(v,h)}),c?o.createElement(St,{shape:p,activeBar:c,baseProps:l,entry:v,index:h,dataKey:x}):o.createElement(Ot,{shape:p,baseProps:l,entry:v,index:h,dataKey:x})))):null}function Ct(e){var{props:a,previousRectanglesRef:t}=e,{data:r,layout:i,isAnimationActive:n,animationBegin:l,animationDuration:p,animationEasing:x,onAnimationEnd:c,onAnimationStart:d}=a,m=t.current,y=pa(a,"recharts-bar-"),[b,A]=o.useState(!1),g=!b,k=o.useCallback(()=>{typeof c=="function"&&c(),A(!1)},[c]),v=o.useCallback(()=>{typeof d=="function"&&d(),A(!0)},[d]);return o.createElement(wt,{showLabels:g,rects:r},o.createElement(va,{animationId:y,begin:l,duration:p,isActive:n,easing:x,onAnimationEnd:k,onAnimationStart:v,key:y},h=>{var u=h===1?r:r?.map((f,P)=>{var I=m&&m[P];if(I)return E(E({},f),{},{x:D(I.x,f.x,h),y:D(I.y,f.y,h),width:D(I.width,f.width,h),height:D(I.height,f.height,h)});if(i==="horizontal"){var O=D(0,f.height,h),B=D(f.stackedBarStart,f.y,h);return E(E({},f),{},{y:B,height:O})}var w=D(0,f.width,h),S=D(f.stackedBarStart,f.x,h);return E(E({},f),{},{width:w,x:S})});return h>0&&(t.current=u??null),u==null?null:o.createElement(W,null,o.createElement(Bt,{props:a,data:u}))}),o.createElement(fa,{label:a.label}),a.children)}function Mt(e){var a=o.useRef(null);return o.createElement(Ct,{previousRectanglesRef:a,props:e})}var ze=0,Dt=(e,a)=>{var t=Array.isArray(e.value)?e.value[1]:e.value;return{x:e.x,y:e.y,value:t,errorVal:Oe(e,a)}};class Kt extends o.PureComponent{render(){var{hide:a,data:t,dataKey:r,className:i,xAxisId:n,yAxisId:l,needClip:p,background:x,id:c}=this.props;if(a||t==null)return null;var d=la("recharts-bar",i),m=c;return o.createElement(W,{className:d,id:c},p&&o.createElement("defs",null,o.createElement(Ia,{clipPathId:m,xAxisId:n,yAxisId:l})),o.createElement(W,{className:"recharts-bar-rectangles",clipPath:p?"url(#clipPath-".concat(m,")"):void 0},o.createElement(Et,{data:t,dataKey:r,background:x,allOtherBarProps:this.props}),o.createElement(Mt,this.props)))}}var Lt={activeBar:!1,animationBegin:0,animationDuration:400,animationEasing:"ease",background:!1,hide:!1,isAnimationActive:"auto",label:!1,legendType:"rect",minPointSize:ze,xAxisId:0,yAxisId:0,zIndex:te.bar};function Tt(e){var{xAxisId:a,yAxisId:t,hide:r,legendType:i,minPointSize:n,activeBar:l,animationBegin:p,animationDuration:x,animationEasing:c,isAnimationActive:d}=e,{needClip:m}=ka(a,t),y=oa(),b=we(),A=sa(e.children,Sa),g=$(h=>lt(h,e.id,b,A));if(y!=="vertical"&&y!=="horizontal")return null;var k,v=g?.[0];return v==null||v.height==null||v.width==null?k=0:k=y==="vertical"?v.height/2:v.width/2,o.createElement(Fa,{xAxisId:a,yAxisId:t,data:g,dataPointFormatter:Dt,errorBarOffset:k},o.createElement(Kt,C({},e,{layout:y,needClip:m,data:g,xAxisId:a,yAxisId:t,hide:r,legendType:i,minPointSize:n,activeBar:l,animationBegin:p,animationDuration:x,animationEasing:c,isAnimationActive:d})))}function zt(e){var{layout:a,barSettings:{dataKey:t,minPointSize:r},pos:i,bandSize:n,xAxis:l,yAxis:p,xAxisTicks:x,yAxisTicks:c,stackedData:d,displayedData:m,offset:y,cells:b,parentViewBox:A,dataStartIndex:g}=e,k=a==="horizontal"?p:l,v=d?k.scale.domain():null,h=ca({numericAxis:k}),u=k.scale(h);return m.map((f,P)=>{var I,O,B,w,S,J;if(d){var ie=d[P+g];if(ie==null)return null;I=da(ie,v)}else I=Oe(f,t),Array.isArray(I)||(I=[h,I]);var M=Ya(r,ze)(I[1],P);if(a==="horizontal"){var X,[oe,G]=[p.scale(I[0]),p.scale(I[1])];O=fe({axis:l,ticks:x,bandSize:n,offset:i.offset,entry:f,index:P}),B=(X=G??oe)!==null&&X!==void 0?X:void 0,w=i.size;var se=oe-G;if(S=ga(se)?0:se,J={x:O,y:y.top,width:w,height:y.height},Math.abs(M)>0&&Math.abs(S)<Math.abs(M)){var le=xe(S||M)*(Math.abs(M)-Math.abs(S));B-=le,S+=le}}else{var[ce,Ne]=[l.scale(I[0]),l.scale(I[1])];if(O=ce,B=fe({axis:p,ticks:c,bandSize:n,offset:i.offset,entry:f,index:P}),w=Ne-ce,S=i.size,J={x:y.left,y:B,width:y.width,height:S},Math.abs(M)>0&&Math.abs(w)<Math.abs(M)){var Ge=xe(w||M)*(Math.abs(M)-Math.abs(w));w+=Ge}}if(O==null||B==null||w==null||S==null)return null;var Fe=E(E({},f),{},{stackedBarStart:u,x:O,y:B,width:w,height:S,value:d?I:I[1],payload:f,background:J,tooltipPosition:{x:O+w/2,y:B+S/2},parentViewBox:A},b&&b[P]&&b[P].props);return Fe}).filter(Boolean)}function Rt(e){var a=aa(e,Lt),t=pt(a.stackId),r=we();return o.createElement(ta,{id:a.id,type:"bar"},i=>o.createElement(o.Fragment,null,o.createElement(ra,{legendPayload:jt(a)}),o.createElement(Pt,{dataKey:a.dataKey,stroke:a.stroke,strokeWidth:a.strokeWidth,fill:a.fill,name:a.name,hide:a.hide,unit:a.unit,tooltipType:a.tooltipType,id:i}),o.createElement(na,{type:"bar",id:i,data:void 0,xAxisId:a.xAxisId,yAxisId:a.yAxisId,zAxisId:0,dataKey:a.dataKey,stackId:t,hide:a.hide,barSize:a.barSize,minPointSize:a.minPointSize,maxBarSize:a.maxBarSize,isPanorama:r}),o.createElement(re,{zIndex:a.zIndex},o.createElement(Tt,C({},a,{id:i})))))}var Re=o.memo(Rt,ea);Re.displayName="Bar";var _t=["axis","item"],Nt=o.forwardRef((e,a)=>o.createElement(ja,{chartName:"BarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:_t,tooltipPayloadSearcher:ya,categoricalChartProps:e,ref:a}));function ye({percentage:e,size:a=120,stroke:t=10}){const r=(a-t)/2,i=2*Math.PI*r,n=i-i*e/100;return s.jsxs("svg",{width:a,height:a,children:[s.jsx("circle",{cx:a/2,cy:a/2,r,stroke:"rgba(255,255,255,0.2)",strokeWidth:t,fill:"none"}),s.jsx("circle",{cx:a/2,cy:a/2,r,stroke:"#22d3ee",strokeWidth:t,fill:"none",strokeDasharray:i,strokeDashoffset:n,strokeLinecap:"round",transform:`rotate(-90 ${a/2} ${a/2})`}),s.jsxs("text",{x:"50%",y:"50%",textAnchor:"middle",dy:"6",fill:"white",fontSize:"18",fontWeight:"600",children:[Math.round(e),"%"]})]})}const _e="http://localhost:5001/api/goals",Gt=async()=>(await fetch(_e)).json(),Ft=async e=>(await fetch(_e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:e})})).json(),ne="http://localhost:5001/api/expenses",Wt=async()=>(await fetch(ne)).json(),$t=async e=>{const a=await fetch(ne,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!a.ok){const t=await a.text();throw new Error(t)}return a.json()},Yt=async e=>{if(!(await fetch(`${ne}/${e}`,{method:"DELETE"})).ok)throw new Error("Delete failed")},Ut=async e=>(await fetch(`http://localhost:5001/api/expenses/analytics?mode=${e}`)).json(),Vt=j.div`
  min-height: 100vh;
  background: radial-gradient(circle at top, #0b1220, #020617);
  display: flex;
  color: white;
`,Jt=j.div`
  gap: 32px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    margin: 0 120px;
  }
`,Xt=j.div`
 background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(14px);
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 20px;
  width: 400px;

  ${({glow:e})=>e&&`
    box-shadow:
      0 0 0 1px rgba(34,211,238,0.5),
      0 0 30px rgba(34,211,238,0.25);
  `}
  
`,be=j.div`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(14px);
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 20px;
  

  @media (min-width: 1024px) {
    width: 400px;
  }

  ${({glow:e})=>e&&`
    box-shadow:
      0 0 0 1px rgba(34,211,238,0.5),
      0 0 30px rgba(34,211,238,0.25);
  `}
  
`,Z=j.h3`
  margin-bottom: 16px;
`,Ae=j.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
`,ke=j.select`
  padding: 10px;
  border-radius: 10px;
  border: none;
`,Ie=j.input`
  padding: 10px;
  border-radius: 10px;
  border: none;
  flex: 1;
`,q=j.button`
  width: 100%;
  padding: 12px;
  border-radius: 999px;
  background: linear-gradient(135deg, #22d3ee, #6366f1);
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  position: relative;
  z-index: 5;
`,Zt=j.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 14px;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`,qt=j.button`
  background: none;
  border: none;
  color: #f87171;
  cursor: pointer;
  position: relative;
  z-index: 5;
`,Ht=j.div`
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`,Qt=j.div`
  width: 360px;
  padding: 28px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
  text-align: center;
  box-shadow:
    0 0 40px rgba(34, 211, 238, 0.35);
`,er=j.div`
  margin: 18px 0;
  line-height: 1.7;
`,ar=j.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 0;
`,tr=j.div`
  display: flex;
  gap: 16px;

  @media (min-width: 1024px) {
    flex-direction: column;
    align-items: start;
  }
`,rr=j.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 1024px) {
    width: 400px;
  }
  
`,nr=j.div`
 gap: 32px;
    display: flex;
    flex-direction: column;

`;function ur(){const[e,a]=o.useState("month"),[t,r]=o.useState("Jan"),[i,n]=o.useState(""),[l,p]=o.useState([]),[x,c]=o.useState(null),[d,m]=o.useState(0),[y,b]=o.useState(!1),A=x?.total||0,g=async()=>{try{const u=await Ut(e);c(u)}catch(u){console.error("Failed to load analytics",u)}};o.useEffect(()=>{g()},[e]),o.useEffect(()=>{(async()=>{try{const f=await Wt();p(f)}catch(f){console.error("Failed to fetch expenses",f)}})()},[]),o.useEffect(()=>{(async()=>{const f=await Gt();f?.amount&&m(f.amount)})()},[]);const k=o.useMemo(()=>d?A/d*100:0,[A,d]),v=async()=>{try{if(i===""||Number(i)<=0)return;const u=await $t({label:t,amount:Number(i),mode:e});await g(),p(f=>[...f,u]),n("")}catch(u){console.error("Add failed:",u),alert("Failed to add expense")}},h=async u=>{try{await Yt(u),await g(),p(f=>f.filter(P=>P._id!==u))}catch(f){console.error("Failed to delete expense",f)}};return s.jsxs(Vt,{children:[s.jsx(We,{}),s.jsxs(Jt,{children:[s.jsxs(tr,{children:[s.jsxs(Xt,{glow:!0,children:[s.jsx(Z,{children:e==="month"?"Monthly Expense Input":"Yearly Expense Input"}),s.jsx(Ae,{children:s.jsxs(ke,{value:e,onChange:u=>{const f=u.target.value;a(f),r(f==="month"?"Jan":de[0])},children:[s.jsx("option",{value:"month",children:"Monthly"}),s.jsx("option",{value:"year",children:"Yearly"})]})}),s.jsxs(Ae,{children:[s.jsx(ke,{value:t,onChange:u=>r(u.target.value),children:(e==="month"?$e:de).map(u=>s.jsx("option",{value:u,children:u},u))}),s.jsx(Ie,{type:"number",placeholder:"Expense Amount",value:i,onChange:u=>n(u.target.value)})]}),s.jsxs(q,{onClick:v,children:["+ Add ",e==="month"?"Month":"Year"]})]}),s.jsx(rr,{children:l.map(u=>s.jsxs(Zt,{children:[s.jsxs("span",{children:[u.label,": ₹",Number(u.amount).toLocaleString()]}),s.jsx(qt,{onClick:()=>h(u._id),children:"✕"})]},u._id))})]}),s.jsxs(nr,{children:[s.jsxs(be,{glow:!0,children:[s.jsx(Z,{children:"Expense Comparison"}),x?.chartData?.length?s.jsx(ba,{width:"100%",height:240,children:s.jsxs(Nt,{data:x?.chartData||[],children:[s.jsx("defs",{children:s.jsxs("linearGradient",{id:"barGradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[s.jsx("stop",{offset:"0%",stopColor:"#22d3ee"}),s.jsx("stop",{offset:"50%",stopColor:"#3b82f6"}),s.jsx("stop",{offset:"100%",stopColor:"#a855f7"})]})}),s.jsx(Pa,{dataKey:"label"}),s.jsx(Ea,{}),s.jsx(Aa,{contentStyle:{backgroundColor:"#0f172a",borderRadius:"8px",border:"1px solid rgba(34, 211, 238, 0.5)",color:"#e5e7eb",boxShadow:"0 0 12px rgba(34, 211, 238, 0.6)"},labelStyle:{color:"#22d3ee",fontWeight:"600"},itemStyle:{color:"#e5e7eb"}}),s.jsx(Re,{dataKey:"amount",fill:"url(#barGradient)",radius:[8,8,0,0]})]})}):s.jsx("p",{style:{opacity:.6},children:"Add expenses to see the chart"})]}),s.jsx(ar,{children:s.jsx(ye,{percentage:Math.min(k,100)})}),s.jsxs(be,{glow:!0,children:[s.jsx(Z,{children:"Set Goal"}),s.jsx(Ie,{type:"number",placeholder:"Goal Amount",value:d||"",onChange:u=>m(Number(u.target.value))}),s.jsx(q,{disabled:!d,onClick:async()=>{await Ft(d),b(!0)},children:"Track Goal"})]})]})]}),y&&s.jsx(Ht,{children:s.jsxs(Qt,{children:[s.jsx("h2",{children:"Expense Goal Status"}),s.jsx(ye,{percentage:Math.min(k,100)}),s.jsxs(er,{children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Target:"})," ₹",d]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Total:"})," ₹",A.toFixed(0)]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Status:"})," ",k<=100?"✅ On Track":"⚠️ Overspending"]})]}),s.jsx(q,{onClick:()=>b(!1),children:"Close"})]})})]})}export{ur as default};
