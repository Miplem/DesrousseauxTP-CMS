"use strict";(globalThis.webpackChunkcomplianz_gdpr=globalThis.webpackChunkcomplianz_gdpr||[]).push([[5872],{65872:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var a=n(51280),u=n(88496);const r=(0,u.memo)((({value:e,onChange:t,onError:n,required:r,disabled:l,id:i,name:p})=>{const o=i||p,[c,s]=(0,u.useState)("");return(0,u.useEffect)((()=>{e||(e=""),s(e)}),[]),(0,u.useEffect)((()=>{if(c===e)return;const a=setTimeout((()=>{t(c),null===c.match(/^\+?[\d\-\(\)\.\s]*$/)&&n("invalid_phone")}),500);return()=>{clearTimeout(a)}}),[c]),(0,a.createElement)("div",{className:"cmplz-input-group cmplz-phone-input-group"},(0,a.createElement)("input",{type:"tel",id:o,name:p,value:c,onChange:e=>(e=>{s(e)})(e.target.value),required:r,disabled:l,className:"cmplz-phone-input-group__input"}))}))}}]);