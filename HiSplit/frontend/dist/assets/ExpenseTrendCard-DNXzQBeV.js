import{a as e,j as o}from"./index-BTxCUwbS.js";import{U as c}from"./constants-B3xMendw.js";import{m as g}from"./proxy-DP42388_.js";const v=e.div`
  min-height: 100vh;
  min-height: 100dvh;

  background: #0b1220;
  color: white;

  display: flex;
  gap: 64px;

  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    
  }
`,y=e.div`
  display: flex;
  gap: 32px;
  width: 100%;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`,j=e.div`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  padding: 28px;
  border-radius: 22px;

  width: 100%;

  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    padding: 20px;
    border-radius: 18px;
  }
`,k=e.h3`
  margin-bottom: 16px;
`,z=e.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr auto;
  gap: 14px;
  align-items: center;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`,E=e.select`
  height: 42px;
  padding: 0 14px;
  border-radius: 12px;
  border: none;
  font-size: 14px;
`,T=e.input`
  height: 42px;
  padding: 0 14px;
  border-radius: 12px;
  border: none;
  font-size: 14px;
`,A=e.button`
  height: 44px;
  width: 100%;
  border-radius: 14px;
  background: linear-gradient(135deg, #6366f1, #22d3ee);
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 600;

  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(34, 211, 238, 0.35);
  }
`,S=e.button`
  background: linear-gradient(90deg, #8a4fff 0%, #ff8c52 100%);
  height: 44px;
  width: 100%;
  border-radius: 14px;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 600;

  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(34, 211, 238, 0.35);
  }
`,R=e.button`
  background: transparent;
  color: #f87171;
  border: none;
  font-size: 18px;
  cursor: pointer;
`,B=e.div`
  padding: 10px 0px;
`,C=e.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;

  background: radial-gradient(
    circle at top,
    rgba(34, 211, 238, 0.12),
    rgba(15, 23, 42, 0.95)
  );

  border-radius: 24px;
  padding: 24px;
`,I=e.img`
  width: 360px;
  mask-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 55%,
    rgba(0, 0, 0, 0) 85%
  );
  pointer-events: none;
`,W=e.button`
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
`,b=e.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
`,h=e.div`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 6px;
`,i=e.div`
  font-size: 13px;
  opacity: 0.7;
`,m=e.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(14px);
  border-radius: 20px;
  padding: 24px;
  color: #e5e7eb;

  box-shadow: 0 0 40px rgba(34, 211, 238, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.06);
  cursor: pointer;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;

  ${({withMargin:a})=>a&&`
      margin-top: 120px;
      margin-bottom: 120px;
    `}

  /* ✅ Only if glow prop is true */
  ${({glow:a})=>a&&`
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
`,Y=e.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    padding: 0 12px;
  }
`,N=e.div`
  @media (max-width: 1024px) {
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  padding: 12px 0px 12px;
`,D=e.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: 140px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`,H=e.div`
  width: 100%;
  max-width: 600px;
  padding: 80px 24px 120px;
  display: flex;
    flex-direction: column;
    justify-content: center;

  /* Desktop only */
  @media (min-width: 1024px) {
    max-width: 1100px;
    padding: 80px 24px 120px;
  }
`;function O({unnecessaryPercent:a,riskColor:t,riskBarWidth:n,categoryTotals:s,onClick:r,glow:d,withMargin:p,maxwidth:x}){return o.jsxs(m,{maxwidth:x,withMargin:p,as:g.div,glow:d,onClick:r,whileHover:r?{scale:1.02}:void 0,children:[o.jsx(b,{children:"Non-Essential Expense Ratio"}),o.jsxs(h,{style:{color:t},children:[a,".00"]}),o.jsx("div",{style:{marginTop:16,height:16,width:"100%",borderRadius:12,background:"rgba(255,255,255,0.08)",overflow:"hidden"},children:o.jsx("div",{style:{width:`${n}%`,height:"100%",background:t,transition:"width 0.6s ease"}})}),o.jsx(i,{style:{marginTop:12},children:a>70?"⚠️ High focus on non-essential expenses":a>40?"⚠️ Moderate unnecessary spending":"✅ Spending habits look healthy"}),o.jsxs(i,{style:{marginTop:6,opacity:.8},children:["Top waste areas:"," ",Object.keys(s).filter(l=>c.includes(l)).slice(0,3).join(", ")||"None"]})]})}export{v as A,D as B,B as C,O as E,N as I,C as P,z as R,j as S,k as T,H as a,y as b,E as c,T as d,R as e,A as f,S as g,I as h,Y as i,W as j};
