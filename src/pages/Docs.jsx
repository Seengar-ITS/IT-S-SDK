import React,{useState}from'react';import*as S from'../styles.js';
const sections=[{title:'Installation',code:'npm install @its-universe/sdk'},{title:'Initialize',code:"import{ITSClient}from'@its-universe/sdk';\nconst client=new ITSClient({apiKey:process.env.ITS_API_KEY});"},{title:'Chat with IT-S AI',code:"const reply=await client.ai.chat({\n  message:'Hello IT-S AI',\n  model:'its-ai-1'\n});"},{title:'Translate Text',code:"const result=await client.translate({\n  text:'Hello world',\n  from:'en',to:'ur'\n});"},{title:'Upload to IT-S Cloud',code:"await client.cloud.upload({\n  file,\n  name:'document.pdf'\n});"}];
export default function Docs(){
  return React.createElement('div',{style:S.page},React.createElement('h1',{style:S.h1},'SDK Documentation'),
    sections.map(s=>React.createElement('div',{key:s.title,style:{...S.card,marginBottom:'1.5rem'}},React.createElement('h2',{style:{...S.h2,marginBottom:'0.75rem'}},s.title),React.createElement('pre',{style:{fontFamily:'monospace',fontSize:'0.85rem',color:'#a78bfa',background:'#0a0a0f',padding:'1rem',borderRadius:'6px',overflowX:'auto',whiteSpace:'pre-wrap'}},s.code)))
  );
}