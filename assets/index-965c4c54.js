(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const l=document.querySelector(".display__row--first"),t=document.querySelector(".display__row--second");if(!l||!t)throw new Error("Issue with selector");const d=c=>{const o=c.currentTarget;if(t.innerHTML+=o.value,o.value==="C"&&(t.innerHTML="",l.innerHTML=""),o.value==="+/-"&&(t.innerHTML=`${Number(t.innerHTML.slice(0,-3))*-1}`),o.value==="="){l.innerHTML=t.innerHTML;const s=t.innerHTML.match(/[0-9.]+/g),i=t.innerHTML.match(/[^\d\.]/g);if(!s||!i)throw new Error("Error");let e=Number(s[0]),r=Number(s[1]),n=i[0];i.length>1&&i[0]==="-"&&(e=-e,n=i[1]),n==="+"?t.innerHTML=`${e+r}`:n==="-"?t.innerHTML=`${e-r}`:n==="x"?t.innerHTML=`${e*r}`:n==="/"?t.innerHTML=`${e/r}`:t.innerHTML=`${.01*e*r}`}},u=document.querySelectorAll("button");if(!u)throw new Error("Issue with selector");u.forEach(c=>{c.addEventListener("click",d)});
