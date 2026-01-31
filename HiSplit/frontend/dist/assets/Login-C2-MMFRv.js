import{a as r,u as N,r as o,j as e}from"./index-BTxCUwbS.js";const J=r.div`
  min-height: 100vh;
  background: radial-gradient(circle at top, #0f172a, #020617);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  inset: 0;
`,A=r.div`
  width: 860px;
  height: 420px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 22px;
  overflow: hidden;

  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(22px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 80px rgba(34, 211, 238, 0.18);
`,I=r.div`
  padding: 48px;
  background: linear-gradient(
    160deg,
    rgba(2, 6, 23, 0.95),
    rgba(15, 23, 42, 0.9)
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
`,F=r.h1`
  font-size: 32px;
  font-weight: 700;
  color: #e5e7eb;

  span {
    color: #22c55e;
  }
`,R=r.p`
  margin-top: 14px;
  font-size: 15px;
  line-height: 1.6;
  opacity: 0.75;
  color: #ffff;
`,U=r.div`
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,m=r.h2`
  font-size: 26px;
  font-weight: 700;
  color: #e5e7eb;
  margin-bottom: 8px;
`,b=r.p`
  font-size: 14px;
  opacity: 0.7;
  margin-bottom: 28px;
  color: #fff;
`,c=r.input`
  width: 100%;
  padding: 14px;
  margin-bottom: 16px;
  border-radius: 12px;
  background: rgba(2, 6, 23, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #e5e7eb;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #22d3ee;
  }
`,y=r.button`
  width: 100%;
  padding: 14px;
  border-radius: 14px;
  background: linear-gradient(135deg, #22d3ee, #3b82f6);
  border: none;
  color: #020617;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 6px;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 30px rgba(34, 211, 238, 0.45);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,j=r.div`
  color: #f87171;
  font-size: 13px;
  margin-bottom: 10px;
`;function B(){const w=N(),[p,S]=o.useState(""),[a,v]=o.useState(""),[h,k]=o.useState("login"),[C,E]=o.useState(null),[g,P]=o.useState(""),[u,L]=o.useState(""),[i,s]=o.useState(""),[l,d]=o.useState(!1),T=/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`\\|-]).{8,}$/,O=async t=>{if(t.preventDefault(),!p||!a){s("All fields are required");return}if(!T.test(a)){s("Password must be at least 8 characters, include one capital letter and one special character");return}try{d(!0),s("");const n=await fetch("http://localhost:5001/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:p,password:a})}),x=await n.text(),f=x?JSON.parse(x):{};if(!n.ok)throw new Error(f.message||"Login failed");localStorage.setItem("user",JSON.stringify(f.user)),E(f.user),k("profile")}catch(n){s(n.message)}finally{d(!1)}},z=async()=>{if(!g||!u){s("Please fill all profile fields");return}try{d(!0),s("");const t=await fetch("http://localhost:5001/api/profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:C.email,username:g,address:u})}),n=await t.json();if(!t.ok)throw new Error(n.message||"Profile save failed");localStorage.setItem("profile",JSON.stringify(n.profile)),w("/home")}catch(t){s(t.message)}finally{d(!1)}};return e.jsx(J,{children:e.jsxs(A,{children:[e.jsxs(I,{children:[e.jsxs(F,{children:["Welcome to ",e.jsx("span",{children:"FinanceGrow"})]}),e.jsx(R,{children:"Take control of your finances, track your spending, and grow your savings with smart insights."})]}),e.jsxs(U,{children:[h==="login"&&e.jsxs(e.Fragment,{children:[e.jsx(m,{children:"Login"}),e.jsx(b,{children:"Enter your credentials to continue"}),e.jsxs("form",{onSubmit:O,children:[e.jsx(c,{type:"email",placeholder:"Email",value:p,onChange:t=>S(t.target.value),disabled:l}),e.jsx(c,{type:"password",placeholder:"Password",value:a,onChange:t=>v(t.target.value),disabled:l}),i&&e.jsx(j,{children:i}),e.jsx(y,{type:"submit",disabled:l,children:l?"Logging in...":"Login"})]})]}),h==="profile"&&e.jsxs(e.Fragment,{children:[e.jsx(m,{children:"Create profile"}),e.jsx(b,{children:"Complete your profile"}),e.jsx(c,{placeholder:"Username",value:g,onChange:t=>P(t.target.value)}),e.jsx(c,{placeholder:"Address",value:u,onChange:t=>L(t.target.value)}),i&&e.jsx(j,{children:i}),e.jsx(y,{onClick:z,children:"Continue"})]})]})]})})}export{B as default};
