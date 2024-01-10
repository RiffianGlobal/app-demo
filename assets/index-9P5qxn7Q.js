import{g as $,T as y,r as w,a as k}from"./index-CGmnUKqq.js";import"./socialbtn-c3hANrEG.js";import{M as _,N as C,O as B,P as D,Q as v,U as S,x as n,n as c,q as V,G as P,h as l,d as O,c as x,a as b,u as f}from"./vendor-nB3vpjqU.js";import"./dialog-HAWkITgk.js";import"./icon-322VXvYZ.js";const j=async o=>{let a=`{
      voteLogs(first: ${o}, orderBy: time, orderDirection:desc) {
        id
        voter{
          address
        }
        time
        value
      }
    }`;return await $("MediaBoard",a)},T="svg{display:inline-flex;align-items:center;overflow:hidden;border-radius:9999px;background:#c81444}svg svg{height:100%;width:100%}li.header{margin-bottom:.5rem;--tw-text-opacity: 1;color:#a3a3a3;color:rgba(163,163,163,var(--tw-text-opacity));border-bottom:1px solid rgba(255,255,255,.12)}";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class W extends C{constructor(){super(...arguments),this._$Cq=new B(this),this._$CK=new D}render(a,s){return v}update(a,[s,e]){if(this.isConnected||this.disconnected(),s===this._$CX)return;this._$CX=s;let t=0;const{_$Cq:i,_$CK:r}=this;return S(s,async h=>{for(;r.get();)await r.get();const u=i.deref();if(u!==void 0){if(u._$CX!==s)return!1;e!==void 0&&(h=e(h,t)),u.commitValue(h,t),t++}return!0}),v}commitValue(a,s){this.setValue(a)}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const M=_(W);var R=Object.defineProperty,q=Object.getOwnPropertyDescriptor,p=(o,a,s,e)=>{for(var t=e>1?void 0:e?q(a,s):a,i=o.length-1,r;i>=0;i--)(r=o[i])&&(t=(e?r(a,s,t):r(t))||t);return e&&t&&R(a,s,t),t};let d=class extends y(T){constructor(){super(...arguments),this.weekly=!1,this.latestVotes=[],this.albumToVote={id:"",voter:0,time:0,value:0},this.pending=!1,this.init=async()=>{this.pending=!0;try{let o=await j(14);this.latestVotes=o.voteLogs}catch(o){console.error(o)}this.pending=!1},this.timeAgo=async function*(o){for(;;){let a=BigInt(new Date().getTime())/1000n,s=a-o,e=s/86400n,t="";if(e>0&&(t+=e<2?`${e.toString()}d `:e>14?"2 weeks ":e<7?`${e.toString()} days `:"7 days "),e<7){const i=(s-e*86400n)/3600n,r=(s-e*86400n-i*3600n)/60n;i>0&&e<2&&(t+=+i.toString()+"h "),r>0&&e<2&&(t+=r.toString()+"m ")}t?t+="ago":t="<1m",yield t,await new Promise(i=>setTimeout(i,1e3))}}}connectedCallback(){super.connectedCallback(),this.init()}render(){return n`${c(this.pending&&this.latestVotes.length==0,()=>n`<loading-skeleton num="4"></loading-skeleton>`)} ${c(!this.pending,()=>n`<ul role="ui-list hover gap-2"><li class="flex header p-1 lg_mt-2"><div class="w-16">Bidders</div></li>${V(this.latestVotes,(o,a)=>n`<li class="my-4 py-0.5 justify-start"><div class="relative flex items-center justify-between gap-2"><ui-link href="${`/user/${o.voter.address}`}"><ui-address class="text-xl" .address="${o.voter.address}" avatar hideAddr></ui-address></ui-link><div class="flex flex-col justify-center items-end"><p class="opacity-95 text-base">${P(o.value,18)}</p><p class="text-right text-xs leading-none text-neutral-400 whitespace-nowrap">${M(this.timeAgo(BigInt(o.time)))}</p></div></div></li>`)}</ul>`)}`}};p([O({type:Boolean})],d.prototype,"weekly",2);p([l()],d.prototype,"latestVotes",2);p([l()],d.prototype,"albumToVote",2);p([l()],d.prototype,"pending",2);d=p([x("latest-votes")],d);const L=":host{--homeBoardWidth: 8rem;--homeBoardHalf: calc((100% - var(--homeBoardWidth)) / 2 - 3rem)}.home-board{width:100%}@media (min-width: 1024px){.home-board{width:30rem;flex:0 1 auto}}.home-board .home-board-header{display:flex;height:5rem;justify-content:space-between;padding:.375rem}.home-board .home-board-header .home-board-lead{display:flex;flex-direction:column;gap:.375rem}.home-board .home-board-header .home-board-lead h5{align-items:center;font-size:1.25rem;line-height:1.75rem}.home-board .home-board-header .home-board-lead .home-board-subtitle{--tw-text-opacity: 1;color:#a3a3a3;color:rgba(163,163,163,var(--tw-text-opacity))}.home-board:nth-of-type(1){flex-shrink:1;flex-grow:0}@media (min-width: 1024px){.home-board:nth-of-type(1){width:100%}}.home-board:nth-of-type(1){width:var(--homeBoardHalf)}.home-board:nth-of-type(2){flex-shrink:1;flex-grow:0;width:var(--homeBoardHalf)}.home-board:nth-of-type(3){flex-shrink:1;flex-grow:0}@media (min-width: 1024px){.home-board:nth-of-type(3){width:6rem}}@media (max-width: 1024px){.home-board:nth-of-type(1){width:auto}}";var N=Object.defineProperty,A=Object.getOwnPropertyDescriptor,g=(o,a,s,e)=>{for(var t=e>1?void 0:e?A(a,s):a,i=o.length-1,r;i>=0;i--)(r=o[i])&&(t=(e?r(a,s,t):r(t))||t);return e&&t&&N(a,s,t),t};let m=class extends y(L){constructor(){super(...arguments),this.bindScreen=new b(this,f),this.bindStore=new b(this,w),this.weekCD="",this.weekRange="",this.weekBegin=0n,this.getWeekRange=async()=>{const o=7n*24n*60n*60n;let a=this.weekBegin+o,s=new Date(Number(this.weekBegin*1000n)),e=new Date(Number(a*1000n));this.weekRange=s.toLocaleString("en-US",{month:"short"})+s.getDate()+(s.getFullYear()==e.getFullYear()?"":", "+s.getFullYear())+"-"+(s.getMonth()==e.getMonth()?"":e.toLocaleString("en-us",{month:"short"}))+e.getDate()+" "+e.getFullYear()},this.getWeekCD=()=>{const o=7n*24n*60n*60n;let a=BigInt(new Date().getTime())/1000n;const s=this.weekBegin+o-a;let e=s/86400n,t=(s-e*86400n)/3600n,i=(s-e*86400n-t*3600n)/60n,r=s-e*86400n-t*3600n-i*60n;this.weekCD=[e*24n+t,i,r].map(h=>(h+"").padStart(2,"0")).join(":"),setTimeout(this.getWeekCD,1e3)}}get isMobi(){return f.screen.isMobi}async connectedCallback(){super.connectedCallback(),this.weekBegin=await k(),this.getWeekCD(),this.getWeekRange()}render(){return n`<div class="flex flex-col lg_flex-row lg_mt-8 px-2 lg_px-8 gap-4 lg_gap-12 place-content-center"><div class="home-board"><div class="home-board-header"><div class="home-board-lead"><h5>Weekly</h5><div class="home-board-subtitle">${c(this.weekRange,()=>n`${this.weekRange}, <span class="text-green-500">${this.weekCD}</span> left`)}</div></div><div class="home-board-lead">${c(w.weeklyPool,()=>n`<h5><span class="text-base text-gray-300">Pool: </span><span class="ui-em text-xl">${w.weeklyPool}</span></h5>`,()=>n`<i class="mdi mdi-loading"></i>`)}</div></div><top-album weekly></top-album></div>${c(!this.isMobi,()=>n`<div class="home-board"><div class="home-board-header"><div class="home-board-lead"><div class="text-xl">Top 10</div></div></div><top-album></top-album></div><div class="home-board"><div class="home-board-header"><div class="text-xl">Votes</div></div><latest-votes></latest-votes></div>`)}</div>`}};g([l()],m.prototype,"weekCD",2);g([l()],m.prototype,"weekRange",2);g([l()],m.prototype,"weekBegin",2);m=g([x("view-home")],m);export{m as ViewHome};
