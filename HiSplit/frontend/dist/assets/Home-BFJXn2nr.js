import{a as t,j as e,u as z,r as d,L as A}from"./index-BTxCUwbS.js";import{S as Y}from"./slideBar-BLoVtkfQ.js";import{E as G}from"./ExpenseTrendCard-DNXzQBeV.js";import{U as N}from"./constants-B3xMendw.js";import{m as c}from"./proxy-DP42388_.js";const R="/assets/home-u_vryG64.jpg",F=t.div`
  padding: 18px 12px;
  border-radius: 24px;

  background:
    radial-gradient(
      120% 120% at 0% 0%,
      rgba(34, 211, 238, 0.12),
      transparent 40%
    ),
    rgba(10, 18, 32, 0.85);

  border: 2px solid rgba(99, 102, 241, 0.35);

  box-shadow:
    0 0 40px rgba(34, 211, 238, 0.25),
    inset 0 0 0 1px rgba(255, 255, 255, 0.04);

  color: #e5e7eb;
  position: relative;
  cursor: pointer;

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border 0.35s ease;

  /* ✨ HOVER GLOW ✨ */
  &:hover {
    transform: translateY(-6px) scale(1.02);

    border: 2px solid rgba(34, 211, 238, 0.7);

    box-shadow:
      0 0 25px rgba(34, 211, 238, 0.8),
      0 0 60px rgba(99, 102, 241, 0.5),
      inset 0 0 0 1px rgba(255, 255, 255, 0.08);
  }
  @media (min-width: 768px) {
    padding: 18px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`,H=t.h2`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 14px;
`,W=t.p`
  font-size: 15px;
  line-height: 1.6;
  opacity: 0.85;
  margin-bottom: 28px;
`,V=t.label`
  display: flex;
  align-items: center;
  gap: 14px;
  border-radius: 999px;
  margin-bottom: 28px;
  background: #1abe56;
  border: 2px solid rgba(147, 197, 253, 0.5);

  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background: rgba(15, 23, 42, 0.9);
    box-shadow:
      0 0 20px rgba(34, 211, 238, 0.4),
      inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`,L=t.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;

  border: 2px solid rgba(147, 197, 253, 0.7);
  display: grid;
  place-items: center;

  font-size: 24px;
  font-weight: 600;
`,J=t.input`
  display: none;
`,_=t.div`
  display: flex;
  gap: 28px;
`,k=t.div`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 14px;
  opacity: 0.8;
`;function X({onUpload:s,disabled:n}){const x=g=>{const l=g.target.files[0];!l||n||s(l)};return e.jsxs(F,{children:[e.jsx(H,{children:"Scan Your Bill"}),e.jsx(W,{children:"Upload a receipt or invoice to automatically extract details"}),e.jsxs(V,{style:{opacity:n?.6:1},children:[e.jsx(L,{children:"+"}),n?"Processing...":"Upload Bill",e.jsx(J,{type:"file",accept:"image/*,.pdf",capture:"environment",onChange:x,disabled:n})]}),e.jsxs(_,{children:[e.jsx(k,{children:"📄 Receipts"}),e.jsx(k,{children:"📦 Invoices"})]})]})}t.img`
  width: 300px;
  margin-bottom: 24px;
  height: auto;
`;const q=t.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;

  background:
    linear-gradient(rgba(2, 6, 23, 0.6), rgba(2, 6, 23, 0.6)),
    url(${s=>s.bg}) center / cover no-repeat;

`,K=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin: 84px;
`,y=t.div`
  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(14px);
  border-radius: 24px;

  padding: 32px;
  min-height: 500px;
  width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: #e5e7eb;
  box-shadow: 0 0 40px rgba(34, 211, 238, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.06);
  cursor: pointer;

  @media (min-width: 1024px) {
    min-height: 300px;
  }

  ${({glow:s})=>s&&`
      &:hover {
        transform: translateY(-6px) scale(1.01);
        box-shadow:
          0 0 18px rgba(34, 211, 238, 0.45),
          0 0 40px rgba(34, 211, 238, 0.25),
          0 10px 40px rgba(0, 0, 0, 0.6);
        border-color: rgba(34, 211, 238, 0.6);
      }

      &:active {
        transform: translateY(-3px) scale(1);
        box-shadow:
          0 0 14px rgba(34, 211, 238, 0.6),
          0 0 28px rgba(34, 211, 238, 0.35),
          0 8px 28px rgba(0, 0, 0, 0.6);
      }
    `}
`,w=t.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
`,Q=t.div`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 6px;
`,i=t.div`
  font-size: 13px;
  opacity: 0.7;
`,I=t.div`
  margin-top: 16px;
  height: 120px;
  border-radius: 12px;
  background: linear-gradient(
    180deg,
    rgba(34, 211, 238, 0.35),
    rgba(34, 211, 238, 0.05)
  );
`,Z=t.div`
  margin: 20px auto;
  width: 160px;
  height: 80px;
  border-radius: 160px 160px 0 0;
  position: relative;

  background: ${({percent:s,status:n})=>n==="danger"?`linear-gradient(
          90deg,
          #ef4444 ${s}%,
          rgba(255, 255, 255, 0.1) ${s}%
        )`:`linear-gradient(
          90deg,
          #22d3ee ${s}%,
          rgba(255, 255, 255, 0.1) ${s}%
        )`};

  box-shadow: ${({status:s})=>s==="danger"?"0 0 25px rgba(239, 68, 68, 0.6)":"0 0 20px rgba(34, 211, 238, 0.4)"};

  transition:
    background 0.4s ease,
    box-shadow 0.4s ease;

  span {
    position: absolute;
    bottom: -28px;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 600;
  }
`,ee=t.div`
  margin-top: 16px;
  padding: 14px;
  border-radius: 14px;
  background: rgba(15, 23, 42, 0.6);
  text-align: center;
`,te=t.div``,ae=t.div`
  display: flex;
  justify-content: center;
  padding: 4px 16px;

  @media (min-width: 1024px) {
    padding: 0;
    align-items: flex-start;
    min-height: 100vh;
  }
`,ne=t.div`
  display: flex;
  justify-content: center;
  padding-top: 54px;
`,se=t.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 35px;
  gap: 10px;
`,re=t.div`
  @media (min-width: 768px) {
    width: 360px;
    max-height: 560px;
    display: flex;
  }
`,oe={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.15}}},v={hidden:{opacity:0,scale:.9,y:20},show:{opacity:1,scale:1,y:0,transition:{duration:.35,ease:"easeOut"}}},T=window.innerWidth<768;function ge(){const s=z(),[n,x]=d.useState(null),[g,l]=d.useState(null),[j,S]=d.useState(!1),h="test@financegrow.com";d.useEffect(()=>{fetch(`http://localhost:5001/api/monthly-summary?userEmail=${h}`).then(a=>a.json()).then(x).catch(console.error)},[h]);const M=async()=>{try{const a=await fetch(`http://localhost:5001/api/expense-analysis?userEmail=${h}`);if(!a.ok)throw new Error(`HTTP error! Status: ${a.status}`);const r=await a.text();if(!r){console.warn("Empty expense response from server"),l({expenses:[]});return}const o=JSON.parse(r);l(o)}catch(a){console.error("Expense fetch failed:",a),l({expenses:[]})}};d.useEffect(()=>{M()},[]);const $=async a=>{const r=new FormData;r.append("bill",a);try{S(!0);const o=await fetch("http://localhost:5001/api/bill-scan",{method:"POST",body:r});if(!o.ok)throw new Error(`Upload failed: ${o.status}`);const D=await o.json();sessionStorage.setItem("billScanResult",JSON.stringify(D)),s("/home/order-breakdown")}catch(o){console.error("Bill scan failed:",o)}finally{S(!1)}},B=new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate(),m=n?n.monthlyExpense+n.dailyExpense*B:0,b=n?.salary?Math.max(n.salary-m,0):0,u=n?.salary>0?Math.round(m/n.salary*100):0,E=Math.min(u,100),f=(g?.expenses??[]).reduce((a,r)=>(a[r.category]=(a[r.category]||0)+r.amount,a),{}),C=Object.values(f).reduce((a,r)=>a+r,0),O=Object.entries(f).filter(([a])=>N.includes(a)).reduce((a,[,r])=>a+r,0),p=C>0?Math.round(O/C*100):0,P=Math.min(p,100),U=p>70?"#ef4444":p>40?"#facc15":"#22c55e";return e.jsxs(q,{bg:R,children:[e.jsxs(ae,{children:[e.jsx(te,{children:e.jsx(Y,{})}),e.jsxs(K,{as:c.div,variants:oe,initial:"hidden",animate:"show",children:[e.jsxs(y,{as:c.div,variants:v,children:[e.jsx(w,{children:"Total Savings"}),e.jsxs(Q,{children:["₹",b]}),e.jsx(i,{children:"Budget from earnings"}),e.jsx(I,{}),e.jsxs(i,{style:{marginTop:10},children:["Income: ₹",n?.salary??0]}),e.jsx(i,{style:{marginTop:6,color:b>0?"#22c55e":"#ef4444"},children:b>0?"💰 Positive savings":"⚠️ No savings left"})]}),e.jsxs(y,{glow:!0,as:c.div,variants:v,onClick:()=>s("/home/expense"),children:[e.jsx(w,{children:"Monthly Spending"}),e.jsx(Z,{percent:E,children:e.jsxs(ne,{children:[E,"%"]})}),e.jsxs(se,{children:[e.jsxs(i,{children:["Avg ₹",m," / month"]}),e.jsxs(i,{children:["Daily ₹",n?.dailyExpense??0]}),e.jsxs(i,{children:["Monthly ₹",n?.monthlyExpense??0]}),u>100&&e.jsxs(i,{style:{color:"#ef4444",marginTop:8},children:["⚠️ Overspent by ",u-100,"%"]})]})]}),e.jsxs(y,{as:c.div,variants:v,children:[e.jsx(w,{children:"AI Insights"}),e.jsx(I,{}),e.jsx(ee,{children:"🧠 You can save ₹200 more this month"})]}),e.jsx(re,{children:e.jsx(X,{onUpload:$,disabled:j})}),e.jsx(G,{maxwidth:T,withMargin:T,glow:!0,unnecessaryPercent:p,riskColor:U,riskBarWidth:P,categoryTotals:f,onClick:()=>s("/home/expense/analysis")})]})]}),j&&e.jsx(A,{text:"Scanning bill, please wait…"})]})}export{ge as default};
