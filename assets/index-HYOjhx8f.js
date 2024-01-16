import{g as _,T as y,r as u,w as h}from"./index-cmBhvwLn.js";import"./socialbtn-mxcEwa4w.js";import{Q as C,U as V,V as k,X as B,Y as w,Z as P,u as b,x as d,d as S,n as m,q as f,K as O,h as v,a as j,b as $,c as g}from"./vendor-0vo4Ah28.js";import"./dialog-2nBsSlQN.js";import"./icon-mIDwM8EI.js";const L=async s=>{let a=`{
      voteLogs(first: ${s}, orderBy: time, orderDirection:desc) {
        id
        voter{
          address
        }
        time
        value
      }
    }`;return await _("MediaBoard",a)},M="svg{display:inline-flex;align-items:center;overflow:hidden;border-radius:9999px;background:#c81444}svg svg{height:100%;width:100%}.ui-list.bidders{display:grid;min-height:15rem;grid-template-columns:repeat(3,minmax(0,1fr));align-items:end;justify-items:end;place-items:end;grid-gap:1rem;gap:1rem}@media (min-width: 768px){.ui-list.bidders{grid-template-columns:repeat(1,minmax(0,1fr))}}.ui-list.bidders.loading{grid-template-columns:repeat(1,minmax(0,1fr))!important}.ui-list.bidders .header{grid-column:span 3 / span 3}@media (min-width: 768px){.ui-list.bidders .header{grid-column:span 1 / span 1}}.ui-list .item{--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -2px rgba(0, 0, 0, .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow)}@media (min-width: 768px){.ui-list .item{--tw-shadow: 0 0 rgba(0,0,0,0);--tw-shadow-colored: 0 0 rgba(0,0,0,0);box-shadow:0 0 #0000,0 0 #0000,0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow)}}";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class T extends V{constructor(){super(...arguments),this._$Cq=new k(this),this._$CK=new B}render(a,i){return w}update(a,[i,t]){if(this.isConnected||this.disconnected(),i===this._$CX)return;this._$CX=i;let e=0;const{_$Cq:o,_$CK:r}=this;return P(i,async c=>{for(;r.get();)await r.get();const p=o.deref();if(p!==void 0){if(p._$CX!==i)return!1;t!==void 0&&(c=t(c,e)),p.commitValue(c,e),e++}return!0}),w}commitValue(a,i){this.setValue(a)}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const q=C(T);var D=Object.defineProperty,A=Object.getOwnPropertyDescriptor,l=(s,a,i,t)=>{for(var e=t>1?void 0:t?A(a,i):a,o=s.length-1,r;o>=0;o--)(r=s[o])&&(e=(t?r(a,i,e):r(e))||e);return t&&e&&D(a,i,e),e};let n=class extends y(M){constructor(){super(...arguments),this.weekly=!1,this.latestVotes=[],this.albumToVote={id:"",voter:0,time:0,value:0},this.pending=!1,this.init=async()=>{this.pending=!0;try{let s=await L(12);this.latestVotes=s.voteLogs}catch(s){console.error(s)}finally{this.pending=!1}},this.timeAgo=async function*(s){for(;;){let a=BigInt(new Date().getTime())/1000n,i=a-s,t=i/86400n,e="";if(t>0&&(e+=t<1?"":t>14?"2 weeks ":`${t>7?7:t.toString()}${t>1?"days":"day"} `),t<7){const o=(i-t*86400n)/3600n,r=(i-t*86400n-o*3600n)/60n;o>0&&t<1&&(e+=+o.toString()+"h "),r>0&&t<1&&(e+=r.toString()+"m ")}e?e+="ago":e="<1m",yield e,await new Promise(o=>setTimeout(o,1e3))}}}get isMobi(){return b.screen.isMobi}get skeletonLen(){return this.isMobi?2:3}connectedCallback(){super.connectedCallback(),this.init()}render(){return d`<div role="list" class="ui-list gap-2 bidders ${S(this.$c([this.pending?"loading":"hover"]))}"><div class="flex header border-bottom"><div class="w-full">Bidders</div></div>${m(this.pending&&this.latestVotes.length==0,()=>d`<div name="Loading" class="doc-intro"><div class="w-full flex flex-col gap-8">${f([...Array(this.skeletonLen).keys()],()=>d`<loading-skeleton num="3" class="${this.isMobi?"":"sm"}"></loading-skeleton>`)}</div></div>`,()=>d`${f(this.latestVotes,s=>d`<div class="item flex items-center pr-0.5"><div class="w-full flex items-center justify-between gap-2"><ui-link href="${`/user/${s.voter.address}`}"><ui-address class="text-xl" .address="${s.voter.address}" avatar hideAddr></ui-address></ui-link><div class="flex flex-col justify-center items-end"><p class="opacity-95 text-base">${O(s.value,18)}</p><p class="text-right text-xs leading-none text-neutral-400 whitespace-nowrap">${q(this.timeAgo(BigInt(s.time)))}</p></div></div></div>`)}`)}</div>`}};l([j({type:Boolean})],n.prototype,"weekly",2);l([v()],n.prototype,"latestVotes",2);l([v()],n.prototype,"albumToVote",2);l([v()],n.prototype,"pending",2);n=l([$("latest-votes")],n);const K=":host{--homeBoardWidth: 8rem;--homeBoardHalf: calc((100% - var(--homeBoardWidth)) / 2 - 3rem)}.home-board{width:100%}@media (min-width: 1024px){.home-board{width:30rem;flex:0 1 auto}}.home-board .home-board-header{display:flex;height:4rem;justify-content:space-between;padding:.375rem}@media (min-width: 768px){.home-board .home-board-header{height:5rem}}.home-board .home-board-header .home-board-lead{display:flex;flex-direction:column;gap:.375rem}.home-board .home-board-header .home-board-lead h5{align-items:center;font-size:1.25rem;line-height:1.75rem}.home-board .home-board-header .home-board-lead .home-board-subtitle{--tw-text-opacity: 1;color:#a3a3a3;color:rgba(163,163,163,var(--tw-text-opacity))}.home-board:nth-of-type(1){flex-shrink:1;flex-grow:0}@media (min-width: 1024px){.home-board:nth-of-type(1){width:100%}}.home-board:nth-of-type(1){width:var(--homeBoardHalf)}.home-board:nth-of-type(2){flex-shrink:1;flex-grow:0;width:var(--homeBoardHalf)}.home-board:nth-of-type(3){flex-shrink:1;flex-grow:0}@media (min-width: 1024px){.home-board:nth-of-type(3){width:7rem}}@media (max-width: 1024px){.home-board:nth-of-type(1),.home-board:nth-of-type(2){width:auto}}";var H=Object.defineProperty,W=Object.getOwnPropertyDescriptor,X=(s,a,i,t)=>{for(var e=t>1?void 0:t?W(a,i):a,o=s.length-1,r;o>=0;o--)(r=s[o])&&(e=(t?r(a,i,e):r(e))||e);return t&&e&&H(a,i,e),e};let x=class extends y(K){constructor(){super(...arguments),this.bindScreen=new g(this,b),this.bindStore=new g(this,u),this.bindWeekly=new g(this,h)}get isMobi(){return b.screen.isMobi}async connectedCallback(){super.connectedCallback()}render(){return d`<div class="ui-container flex flex-col lg_flex-row lg_mt-8 px-2 lg_px-8 gap-4 lg_gap-12 place-content-center"><div class="home-board"><div class="home-board-header"><div class="home-board-lead"><h5>Weekly</h5><div class="home-board-subtitle">${m(h.latest,()=>d`${h.latestRange}, <span class="text-green-500">${h.latestLeft}</span> left`)}</div></div><div class="home-board-lead">${m(u.inited,()=>d`<h5><span class="text-base text-gray-300">Pool: </span><span class="ui-em text-xl">${u.weeklyPool||0}</span></h5>`,()=>d`<i class="mdi mdi-loading"></i>`)}</div></div><top-album weekly></top-album></div>${m(!0,()=>d`<div class="home-board"><div class="home-board-header"><div class="home-board-lead"><div class="text-xl">Top 10</div></div></div><top-album></top-album></div><div class="home-board"><div class="home-board-header"><div class="text-xl">Votes</div></div><latest-votes></latest-votes></div>`)}</div>`}};x=X([$("view-home")],x);export{x as ViewHome};
