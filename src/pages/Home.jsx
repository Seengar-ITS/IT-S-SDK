import React from'react';import*as S from'../styles.js';
const sdks=[{name:'JavaScript / TypeScript',install:'npm install @its-universe/sdk',status:'available'},{name:'Python',install:'pip install its-universe',status:'available'},{name:'Go',install:'go get github.com/its-universe/go-sdk',status:'coming-soon'},{name:'Rust',install:'cargo add its-universe',status:'coming-soon'}];
export default function Home(){
  return React.createElement('div',{style:S.page},React.createElement('h1',{style:S.h1},'IT-S SDK'),React.createElement('p',{style:{...S.muted,marginBottom:'2rem'}},'Official SDKs for IT-S Universe services'),
    sdks.map(s=>React.createElement('div',{key:s.name,style:S.card},React.createElement('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'0.5rem'}},React.createElement('h2',{style:S.h2},s.name),React.createElement('span',{style:S.badge(s.status==='available'?'#22c55e':'#64748b')},s.status==='available'?'Available':'Coming Soon')),s.status==='available'&&React.createElement('code',{style:{...S.muted,fontFamily:'monospace',background:'#1e293b',padding:'0.3rem 0.6rem',borderRadius:'4px'}},s.install)))
  );
}