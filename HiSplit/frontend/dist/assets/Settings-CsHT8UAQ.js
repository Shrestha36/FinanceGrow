import{a as t,r as a,j as e}from"./index-BTxCUwbS.js";import{S as D,j as T}from"./slideBar-BLoVtkfQ.js";const J="/assets/visa-C-JneOOz.png",L="/assets/mastercard-Cu6iS3jB.png",V="/assets/paypal-D0poipds.png",Y=t.div`
  display: flex;
  min-height: 100vh;
  background: #0b1220;
`,B=t.div`
  flex: 1;
  padding: 80px 40px 40px 120px;

  @media (max-width: 768px) {
    padding: 80px 16px 16px 16px;
  }
`,F=t.h1`
  color: white;
  margin-bottom: 24px;
`,G=t.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,b=t.div`
  background: rgba(15, 23, 42, 0.6);
  border-radius: 18px;
  padding: 22px;
  color: #e5e7eb;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);

  box-shadow: ${({glow:i})=>i?"0 0 30px rgba(99,102,241,.45)":"none"};
`,p=t.h3`
  margin-bottom: 16px;
  color: #fff;
`,W=t.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,u=t.div`
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 10px;
`,f=t.div`
  opacity: 0.7;
`,j=t.div`
  font-weight: 500;
`,$=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,H=t.div`
  display: flex;
  gap: 14px;

  img {
    height: 34px;
    object-fit: contain;
    filter: drop-shadow(0 0 6px rgba(99, 102, 241, 0.5));
  }
`,d=t.button`
  background: rgba(255, 255, 255, 0.06);
  border: none;
  padding: 10px 16px;
  border-radius: 999px;
  color: #e5e7eb;
  cursor: pointer;
`,U=t(b)`
  margin-top: 28px;
`,_=t.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,q=t.div`
  background: rgba(255, 255, 255, 0.04);
  padding: 12px 14px;
  border-radius: 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  small {
    opacity: 0.7;
  }
`,K=t.div`
  color: #ef4444;
  cursor: pointer;
  font-size: 18px;
`,Q=t.div`
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`,X=t.div`
  width: 100%;
  max-width: 550px;
  background: rgba(15, 23, 42, 0.95);
  border-radius: 18px;
  padding: 24px;
  box-shadow: 0 0 40px rgba(99, 102, 241, 0.4);
`,x=t.input`
  width: 100%;
  margin-top: 12px;
  padding: 12px 14px;
  border-radius: 10px;
  border: none;
  outline: none;
  background: rgba(255,255,255,0.08);
  color: white;
`,Z=t.div`
  display: flex;
  gap: 12px;
`,ee=t.div`
  margin-top: 18px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`,se=t.div`
  width: 260px;
  height: 160px;
  border-radius: 16px;
  padding: 16px;
  background: linear-gradient(135deg, #1e293b, #312e81);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.35);
`,te=t.div`
  font-size: 18px;
  letter-spacing: 2px;
`,re=t.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  opacity: 0.85;
`,ae=t.div`
  text-transform: uppercase;
`,ie=t.div`
  display: flex;
  gap: 24px;
  margin-top: 16px;
  width: 500px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;function oe(){const[i,R]=a.useState(null),[v,y]=a.useState([]),[h,C]=a.useState(10),[o,g]=a.useState([]),[I,m]=a.useState(!1),[n,w]=a.useState(""),[l,S]=a.useState(""),[c,k]=a.useState(""),[P,M]=a.useState(""),z=()=>{if(!n||!l||!c||!P)return;const s={id:Date.now(),last4:n.slice(-4),cardName:l,expiry:c},r=[...o,s];g(r),localStorage.setItem("cards",JSON.stringify(r)),m(!1),w(""),S(""),k(""),M("")},O=s=>{y(r=>r.filter((N,E)=>E!==s))},A=s=>{const r=o.filter(N=>N.id!==s);g(r),localStorage.setItem("cards",JSON.stringify(r))};return a.useEffect(()=>{const s=localStorage.getItem("profile");s&&R(JSON.parse(s))},[]),a.useEffect(()=>{fetch("http://localhost:5001/api/orders").then(s=>s.json()).then(s=>y(s||[])).catch(console.error)},[]),a.useEffect(()=>{const s=localStorage.getItem("cards");s&&g(JSON.parse(s))},[]),e.jsxs(Y,{children:[e.jsx(D,{}),e.jsxs(B,{children:[e.jsx(F,{children:"Settings"}),e.jsxs(G,{children:[e.jsxs(b,{glow:!0,children:[e.jsx(p,{children:"Profile"}),i&&e.jsxs(W,{children:[e.jsxs(u,{children:[e.jsx(f,{children:"Username"}),e.jsx(j,{children:i.username})]}),e.jsxs(u,{children:[e.jsx(f,{children:"Address"}),e.jsx(j,{children:i.address})]}),e.jsxs(u,{children:[e.jsx(f,{children:"Email"}),e.jsx(j,{children:i.email})]})]})]}),e.jsxs(b,{glow:!0,children:[e.jsx(p,{children:"Payment Methods"}),e.jsxs($,{children:[e.jsxs(H,{children:[o.map(s=>e.jsxs("div",{style:{position:"relative",padding:"12px 16px",borderRadius:12,background:"rgba(255,255,255,0.08)",fontSize:14,cursor:"pointer",minWidth:110},children:["**** ",s.last4,e.jsx("div",{style:{fontSize:12,opacity:.7},children:s.cardName}),e.jsx("span",{onClick:r=>{r.stopPropagation(),A(s.id)},style:{position:"absolute",top:6,right:8,fontSize:12,color:"#f87171",cursor:"pointer"},children:"✕"})]},s.id)),o.length===0&&e.jsxs(e.Fragment,{children:[e.jsx("img",{src:J,alt:"Visa"}),e.jsx("img",{src:L,alt:"MasterCard"}),e.jsx("img",{src:V,alt:"PayPal"})]})]}),e.jsx(d,{onClick:()=>m(!0),children:"Add New Card"})]})]})]}),e.jsxs(U,{glow:!0,children:[e.jsx(p,{children:"Recent payments"}),e.jsx(_,{children:v.slice(0,h).map((s,r)=>e.jsxs(q,{children:[e.jsxs("div",{children:[e.jsxs("div",{children:["Customer: ",s.customer]}),e.jsxs("small",{children:["Total: ₹",s.total]})]}),e.jsx(K,{onClick:()=>O(r),children:e.jsx(T,{})})]},r))}),e.jsxs("div",{style:{textAlign:"center",marginTop:16,display:"flex",gap:12,justifyContent:"center"},children:[h<v.length&&e.jsx(d,{onClick:()=>C(s=>s+10),children:"Show more"}),h>10&&e.jsx(d,{onClick:()=>C(10),style:{opacity:.8},children:"Show less"})]})]})]}),I&&e.jsx(Q,{children:e.jsxs(X,{children:[e.jsx(p,{children:"Add new card"}),e.jsxs(ie,{children:[e.jsxs(se,{children:[e.jsx("div",{style:{fontSize:12,opacity:.8},children:"CARD"}),e.jsx(te,{children:n?n.replace(/(.{4})/g,"$1 "):"•••• •••• •••• ••••"}),e.jsxs(re,{children:[e.jsx(ae,{children:l||"Cardholder Name"}),e.jsx("div",{children:c||"MM/YY"})]})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx(x,{placeholder:"Card number",value:n,maxLength:16,onChange:s=>w(s.target.value.replace(/\D/g,""))}),e.jsx(x,{placeholder:"Card holder name",value:l,onChange:s=>S(s.target.value)}),e.jsxs(Z,{children:[e.jsx(x,{placeholder:"MM/YY",value:c,onChange:s=>k(s.target.value)}),e.jsx(x,{placeholder:"CVV",type:"password",maxLength:4,value:P,onChange:s=>M(s.target.value.replace(/\D/g,""))})]}),e.jsxs(ee,{children:[e.jsx(d,{onClick:z,children:"Save"}),e.jsx(d,{onClick:()=>m(!1),style:{opacity:.7},children:"Cancel"})]})]})]})]})})]})}export{oe as default};
