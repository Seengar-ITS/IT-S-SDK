import React,{useState}from'react';import*as S from'../styles.js';
const examples=[{title:'AI Chatbot',desc:'Build a chatbot using IT-S AI API',code:"import{ITSClient}from'@its-universe/sdk';\nconst its=new ITSClient({apiKey:'your-key'});\nconst bot=await its.ai.chat({message:'Hi'});"},{title:'Document Manager',desc:'Create and manage documents',code:"const doc=await its.docs.create({\n  title:'My Doc',content:'Hello world'\n});"},{title:'File Upload',desc:'Upload files to IT-S Cloud',code:"const file=await its.cloud.upload({file,name:'image.png'});"}];
export default function Examples(){
  const[sel,setSel]=useState(examples[0]);
  return React.createElement('div',{style:{...S.page,display:'grid',gridTemplateColumns:'240px 1fr',gap:'1.5rem'}},
    React.createElement('div',null,examples.map(e=>React.createElement('div',{key:e.title,style:{...S.card,cursor:'pointer',background:sel.title===e.title?'#1e293b':'#0d1117'},onClick:()=>setSel(e)},React.createElement('p',{style:{fontWeight:600,color:'#e2e8f0'}},e.title),React.createElement('p',{style:S.muted},e.desc)))),
    React.createElement('div',null,React.createElement('h2',{style:S.h2},sel.title),React.createElement('p',{style:{...S.muted,marginBottom:'1rem'}},sel.desc),React.createElement('pre',{style:{fontFamily:'monospace',fontSize:'0.85rem',color:'#a78bfa',background:'#0d1117',border:'1px solid #1e293b',padding:'1.5rem',borderRadius:'8px',overflowX:'auto',whiteSpace:'pre-wrap'}},sel.code))
  );
}