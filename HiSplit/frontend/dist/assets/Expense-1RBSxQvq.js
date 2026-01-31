import{a as t,r as o,u as G,j as e,L as M}from"./index-BTxCUwbS.js";import{S as Y}from"./slideBar-BLoVtkfQ.js";import{C as F}from"./constants-B3xMendw.js";import{m as O}from"./proxy-DP42388_.js";import{R as U,T as W}from"./CategoricalChart-DD_Vt4QT.js";import{P as X,a as H}from"./PieChart-Bjvo06eT.js";import{C}from"./tooltipContext-jP36tpUq.js";const $=t.div`
  background: #0b1220;
  background-size: cover;
  background-position: center;
  display: flex;
  overflow: hidden;
  color: white;
`,J=t.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 120px;

  @media (min-width: 1024px) {
    justify-content: space-between;
     align-items: flex-start;
     flex-direction: row;
     gap: 80px;
  }
`,K=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 320px;
  margin: 20px 0;
`,u=t.input`
  padding: 12px 14px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #20a85b;
  }
`;t.button`
  padding: 10px 20px;
  border-radius: 8px;
  background: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
`;const c=t.h2`
  font-size: 18px;
  margin-bottom: 12px;
`,V=t.div``,q=t.div`
  width: 320px;
  padding: 20px 0px;
`,Q=t.div`
  min-width: 300px;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 16px;
`,Z=t.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`,_=t(O.div)`
  margin-top: 8px;
  padding: 12px 18px;
  border-radius: 18px;
  max-width: 300px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`,ee=t.div`
  width: 100%;
  height: 300px;
`,k=t.button`
  padding: 14px 28px;
  border-radius: 999px;
  border: none;

  background: linear-gradient(135deg, #6366f1, #22d3ee);
  color: white;

  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.3px;

  cursor: pointer;
  position: relative;
  overflow: hidden;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    filter 0.3s ease;

  /* 🌟 Default glow */
  box-shadow: 0 8px 24px rgba(34, 211, 238, 0.35);

  /* ✨ Hover magic */
  &:hover:not(:disabled) {
    transform: translateY(-3px) scale(1.03);
    box-shadow:
      0 0 18px rgba(99, 102, 241, 0.8),
      0 0 36px rgba(34, 211, 238, 0.6);
    filter: brightness(1.1);
  }

  /* ✨ Magical shimmer */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent 0%,
      rgba(255, 255, 255, 0.25) 50%,
      transparent 100%
    );
    transform: translateX(-120%);
    transition: transform 0.6s ease;
  }

  &:hover::before {
    transform: translateX(120%);
  }

  /* ⏳ Disabled / Loading */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: none;
  }
`,te=t.div`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 120px;

  @media (min-width: 1024px) {
    max-width: 300px;
     width: 100%;
  }
  ${({disabled:i})=>i&&`
      margin-top: 0;
    `}
  
`,ne=t.div`
  position: relative;
  width: 180px;
  height: 220px;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 16px;
`,b=t.div`
  position: relative;
  width: 36px;
  height: ${({height:i})=>i};

  background: linear-gradient(180deg, #7dd3fc, #8b5cf6);

  border-radius: 6px;

  box-shadow:
    0 0 16px rgba(139, 92, 246, 0.7),
    inset -4px 0 6px rgba(0, 0, 0, 0.3);

  animation: grow 0.9s ease-out forwards;

  @keyframes grow {
    from {
      height: 0;
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* 👉 RIGHT SIDE FACE (depth) */
  &::after {
    content: "";
    position: absolute;
    bottom: 8px;
    right: -6px;
    width: 11px;
    height: calc(100% - 6px);
    background: linear-gradient(180deg, #60a5fa, #7c3aed);
    transform: skewY(-32deg);
  }

  /* 👉 TOP FACE (light) */
  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: 6px;
    width: calc(100% - 6px);
    height: 8px;
    background: linear-gradient(90deg, #bae6fd, #a78bfa);
    transform: skewX(-57deg);
  }
`;t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;t.p`
  font-size: 14px;
  opacity: 0.85;
  text-align: center;
`;const ie=t.div`
  width: 100%;
  height: 320px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  gap: 20px;
`,ae=t.div`
  position: relative;
  bottom: 74px;
  left: 34px;

  font-size: 34px;
  font-weight: 900;

  color: #38bdf8;

  transform: rotate(-10deg);

  text-shadow:
    0 0 8px rgba(56, 189, 248, 0.8),
    0 0 18px rgba(139, 92, 246, 0.6);

  animation: floatUp 2s ease-in-out infinite;

  @keyframes floatUp {
    0% {
      transform: translateY(0) rotate(-4deg);
      opacity: 0.8;
    }
    50% {
      transform: translateY(-10px) rotate(-4deg);
      opacity: 1;
    }
    100% {
      transform: translateY(0) rotate(-4deg);
      opacity: 0.8;
    }
  }
`,oe=t.div`
  position: absolute;
  bottom: -4px;
  left: 18px;

  width: 172px;
  height: 15px;

  background: linear-gradient(135deg, #1e3a8a, #0ea5e9);
  border-radius: 6px;

  transform: skewX(-66deg);

  box-shadow:
    0 10px 30px rgba(14, 165, 233, 0.35),
    inset 0 -4px 6px rgba(0, 0, 0, 0.4);

  overflow: hidden;

  /* 🔥 FAKE GRADUAL BLUR (VISUALLY IDENTICAL) */
  &::before {
    content: "";
    position: absolute;
    inset: 0;

    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.08) 40%,
      rgba(255, 255, 255, 0.18) 100%
    );
  }
`,se=t.div`
  display: flex;
  position: relative;
  flex-direction: column;
`,re=t.div`
  margin-top: 20px;
  padding: 20px 22px;

  border-radius: 18px;

  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(14px);

  border: 1px solid rgba(167, 139, 250, 0.45);
  box-shadow:
    0 0 30px rgba(139, 92, 246, 0.25),
    inset 0 0 30px rgba(139, 92, 246, 0.08);
`,de=t.div`
  font-size: 14px;
  line-height: 1.7;
  color: #e5e7eb;
  margin-bottom: 10px;
  display: flex;
  gap: 8px;

  &::before {
    content: "•";
    color: #a78bfa;
    font-weight: 700;
  }
`,le=t.div`
  margin-top: 14px;
  color: #f87171;
  font-size: 14px;
`;function ue(){const[i,E]=o.useState(0),[d,I]=o.useState(0),[l,T]=o.useState(0),[f,z]=o.useState("₹"),[x,y]=o.useState(),w=i>0&&(d>0||l>0),[m,v]=o.useState(""),[h,j]=o.useState(!1),[S,A]=o.useState(""),B=G(),L=d*30,p=Number(l)+L,s=i-p,N=[{name:"Spent",value:p},{name:"Saved",value:s>0?s:0}];let r="",g="";s>p?(r="🎉 Good job! You're saving more than you spend.",g="success"):s>i*.3?(r="👍 You're doing okay! Try to save a bit more next month.",g="warning"):(r="⚠️ Expenses are high. Let's focus on saving more next time!",g="danger");const P=n=>{if(!window.speechSynthesis)return;window.speechSynthesis.cancel();const a=new SpeechSynthesisUtterance(n);a.lang="en-US",a.rate=1,a.pitch=1,a.volume=1,window.speechSynthesis.speak(a)},R=async()=>{await fetch("http://localhost:5001/api/monthly-summary",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userEmail:"test@financegrow.com",salary:i,dailyExpense:d,monthlyExpense:l})})},D=async()=>{try{j(!0),A(""),v("");const n=await fetch("http://localhost:5001/api/ai/expense-advice",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({salary:i,daily:d,monthly:l,totalSpent:p,savings:s,currency:f})}),a=await n.json();if(!n.ok)throw new Error(a.message||"Failed to get AI advice");v(a.advice)}catch(n){A(n.message)}finally{j(!1)}};return o.useEffect(()=>{y(!1),window.speechSynthesis.cancel()},[i,d,l]),o.useEffect(()=>{if(!x||!r)return;const n=setTimeout(()=>{P(r)},2e3);return()=>{clearTimeout(n),window.speechSynthesis.cancel()}},[x]),e.jsxs($,{children:[e.jsx(Y,{}),e.jsxs(J,{children:[e.jsxs(Z,{children:[e.jsx(c,{children:"Expense Analyzer"}),e.jsxs(K,{children:[e.jsx(u,{type:"number",placeholder:"Income",onChange:n=>E(Number(n.target.value))}),e.jsx(u,{type:"number",placeholder:"Daily expense",onChange:n=>I(Number(n.target.value))}),e.jsx(u,{type:"number",placeholder:"Monthly expense",onChange:n=>T(Number(n.target.value))})]}),e.jsxs(q,{children:[e.jsx(V,{children:e.jsx("select",{onChange:n=>z(n.target.value),children:F.map(n=>e.jsx("option",{value:n.value,children:n.label},n.value))})}),e.jsxs(c,{children:["Total Spent: ",f," ",p]}),e.jsxs(c,{children:["Savings: ",f," ",Math.max(s,0)]})]})]}),e.jsxs(se,{children:[w?e.jsxs(Q,{children:[e.jsx(ee,{children:e.jsx(U,{width:"100%",height:300,children:e.jsxs(X,{children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"spentGradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#ff7a45"}),e.jsx("stop",{offset:"100%",stopColor:"#ff4d4f"})]}),e.jsxs("linearGradient",{id:"savedGradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#22d3ee"}),e.jsx("stop",{offset:"100%",stopColor:"#7c7cff"})]})]}),e.jsxs(H,{data:N,dataKey:"value",cx:"50%",cy:"50%",innerRadius:80,outerRadius:110,paddingAngle:4,stroke:"rgba(255,255,255,0.08)",strokeWidth:2,isAnimationActive:!0,animationDuration:700,onAnimationEnd:()=>{x||(y(!0),R())},children:[e.jsx(C,{fill:"url(#spentGradient)"}),e.jsx(C,{fill:"url(#savedGradient)"})]}),e.jsx("text",{x:"50%",y:"45%",textAnchor:"middle",dominantBaseline:"middle",fill:"#fff",fontSize:"28",fontWeight:"700",children:i>0?`${Math.round(Math.max(s,0)/i*100)}%`:"0%"}),e.jsx("text",{x:"50%",y:"56%",textAnchor:"middle",dominantBaseline:"middle",fill:"#9ca3af",fontSize:"14",children:"Savings"}),e.jsx(W,{})]})})}),x&&r&&e.jsx(_,{type:g,initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:r})]}):e.jsxs(ie,{children:[e.jsxs(ne,{children:[e.jsx(ae,{children:"↗"}),e.jsx(b,{height:"80px"}),e.jsx(b,{height:"130px"}),e.jsx(b,{height:"180px"}),e.jsx(oe,{})]}),e.jsx(c,{style:{marginTop:"20px",textAlign:"center"},children:"Ready to gain insights?"})]}),e.jsx(k,{onClick:()=>B("/home/expense/analysis"),children:"Analyze & Optimize Expense"})]}),e.jsxs(te,{disabled:h||!!m,children:[e.jsx(k,{onClick:D,disabled:!w||h,children:e.jsx("span",{className:"label",children:h?"Analyzing...":"Boost My Savings with AI"})}),h&&e.jsx(M,{text:"Boost My Savings with AI..."}),m&&e.jsxs(re,{children:[e.jsx(c,{style:{marginBottom:12},children:"AI Suggestions"}),m.replace(/^Here.*?\n/i,"").split(`
`).filter(n=>n.trim()).map((n,a)=>e.jsx(de,{children:n},a))]}),S&&e.jsx(le,{children:S})]})]})]})}export{ue as default};
