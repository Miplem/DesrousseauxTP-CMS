"use strict";(globalThis.webpackChunkcomplianz_gdpr=globalThis.webpackChunkcomplianz_gdpr||[]).push([[7980,9216,7836],{29216:(e,a,t)=>{t.r(a),t.d(a,{default:()=>l});var s=t(30809),r=t(61744);const l=(0,s.Su)(((e,a)=>({apiRequestActive:!1,pluginAction:"status",wordPressUrl:"#",upgradeUrl:"#",rating:[],statusLoaded:!1,setStatusLoaded:a=>{e({statusLoaded:a})},startPluginAction:(t,s)=>{let l={};e({apiRequestActive:!0}),l.pluginAction=void 0!==s?s:a().pluginAction,l.slug=t;let n=!1;"download"===l.pluginAction&&(n="activate"),r.doAction("plugin_actions",l).then((s=>{e({pluginAction:s.pluginAction,wordPressUrl:s.wordpress_url,upgradeUrl:s.upgrade_url});let r=Math.round(s.star_rating.rating/10,0)/2;e({rating:r,ratingCount:s.star_rating.rating_count,apiRequestActive:!1,statusLoaded:!0}),"activate"===n&&"installed"!==s.pluginAction&&a().startPluginAction(t,s.pluginAction)}))}})))},67980:(e,a,t)=>{t.r(a),t.d(a,{default:()=>c});var s=t(51280),r=t(88496),l=t(93396),n=t(97836),i=t(29216);const c=(0,r.memo)((()=>{const{measuresDataLoaded:e,measures:a,has_7:t,getMeasuresData:c}=(0,n.default)(),{statusLoaded:u,startPluginAction:o,pluginAction:d}=(0,i.default)();(0,r.useEffect)((()=>{"status"!==d&&c()}),[d]);let m=u?d:"loading";if(u&&"installed"!==m&&"upgrade-to-premium"!==m){let e="activate"===m?(0,l.__)("Please activate Really Simple SSL & Security to unlock this feature.","complianz-gdpr"):(0,l.__)("Please install Really Simple SSL & Security to unlock this feature.","complianz-gdpr");return"loading"===m&&(e="..."),(0,s.createElement)("div",{className:"cmplz-locked"},(0,s.createElement)("div",{className:"cmplz-locked-overlay"},(0,s.createElement)("span",{className:"cmplz-task-status cmplz-open"},(0,l.__)("Not installed","complianz-gdpr")),(0,s.createElement)("span",null,e)))}const p={vulnerability_detection:(0,l.__)("Vulnerability Detection","complianz-gdpr"),recommended_headers:(0,l.__)("HTTP Strict Transport Security and related security headers","complianz-gdpr"),ssl:(0,l.__)("TLS / SSL","complianz-gdpr"),hardening:(0,l.__)("Recommended site hardening features","complianz-gdpr")},g=({measure:e})=>{let a=e.enabled?"cmplz-measure-enabled":"cmplz-measure-disabled";return(0,s.createElement)("ul",{className:"cmplz-measure"},(0,s.createElement)("li",{className:"cmplz-measure-description "+a},p[e.id]))};return(0,s.createElement)("div",{className:"cmplz-measures-container"},e&&t&&a.length>0&&(0,s.createElement)(s.Fragment,null,(0,s.createElement)("p",null,(0,l.__)("We are committed to the security of personal data. We take appropriate security measures to limit abuse of and unauthorized access to personal data. This ensures that only the necessary persons have access to your data, that access to the data is protected, and that our security measures are regularly reviewed.","complianz-gdpr")),(0,s.createElement)("p",null,(0,l.__)("The security measures we use consist of, but are not limited to:","complianz-gdpr")),a.map(((e,a)=>(0,s.createElement)(g,{key:a,measure:e})))),e&&0===a.length&&t&&(0,l.__)("No security measures enabled in Really Simple SSL & Security","complianz-gdpr"),e&&!t&&(0,l.__)("Please upgrade Really Simple SSL & Security to the latest version to unlock this feature.","complianz-gdpr"),!e&&(0,s.createElement)(s.Fragment,null,"..."))}))},97836:(e,a,t)=>{t.r(a),t.d(a,{default:()=>l});var s=t(30809),r=t(61744);const l=(0,s.Su)(((e,a)=>({measures:{},has_7:!1,measuresDataLoaded:!1,getMeasuresData:async()=>{const{measures:a,has_7:t}=await r.doAction("get_security_measures_data",{}).then((e=>e));e((e=>({measuresDataLoaded:!0,measures:a,has_7:t})))}})))}}]);