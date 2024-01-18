import{T as x,b as w,w as p,g as L,r as $}from"./index-TnptE4cu.js";import{c,w as f,e as B,X as D,x as n,d as S,n as m,u as _,f as V,k as d,a as C,b as y,Y as T,Z as W,_ as A,$ as N,a0 as P,a1 as q}from"./vendor-Yy_wTTXu.js";import{w as H}from"./action-vKdIsp-5.js";import{s as K,p as X,M as z}from"./list-DI982dBx.js";import"./index-GLVv7vcD.js";var E=Object.defineProperty,I=Object.getOwnPropertyDescriptor,h=(t,s,a,i)=>{for(var e=i>1?void 0:i?I(s,a):s,o=t.length-1,r;o>=0;o--)(r=t[o])&&(e=(i?r(s,a,e):r(e))||e);return i&&e&&E(s,a,e),e};let l=class extends x(K){constructor(){super(...arguments),this.bindScreen=new c(this,f),this.bindBridge=new c(this,w),this.bindWeekly=new c(this,p),this.paging=!1,this.week=1,this.collections=[],this.pending=!1,this.err="",this.ts=0,this.pagination=X(),this.hasMore=!0,this.fetch=async(t=!1)=>{if(!(this.pending&&!t)&&!(this.paging&&!this.hasMore)){this.err="",this.pending=!0;try{const s=await p.getLatest(),a={};if(this.pagination){const{pageSize:o,pageNum:r}=this.pagination;Object.assign(a,{first:o,skip:(r-1)*o})}const{subjectWeeklyVotes:i}=await H(s,a),e=i.map(o=>{var M;const{subject:r,volumeTotal:u,image:b}=o;return{...r,volumeTotal:u,image:(M=r.image)!=null&&M.startsWith("http")?r.image:z[0]}});this.paging?(this.collections.push(...e),this.hasMore=i.length>=this.pagination.pageSize,this.pagination.pageNum++):this.collections=[...e]}catch(s){let a=s.message||s.code||s;console.error(a)}finally{this.pending=!1,this.ts++}}},this.loaded=()=>{this.fetch()},this.go2=t=>{this.disabled?B.emit("connect-wallet"):D(`/track/${t.id}`)}}get disabled(){return!w.bridge.account}get isMobi(){return f.isMobi}get scrollMode(){return this.isMobi?"click":"scroll"}get empty(){var t;return this.pending&&!((t=this.collections)!=null&&t.length)}static dayChange(t){if(t.voteLogs.length==0)return"New";{let s=t.voteLogs[0].supply,a=t.supply,i=Math.abs(s-a),e=(i*100/s).toFixed(1);return s>a?n`<p class="text-red-500">-${e}%</p>`:n`<p class="text-green-500">+${e}%</p>`}}connectedCallback(){super.connectedCallback(),this.fetch(!0)}render(){return n`<div role="list" class="ui-list gap-2 ${S(this.$c([this.pending?"loading":"hover"]))}"><div class="flex header border-bottom"><div class="w-8 md_w-10">Rank</div><div class="flex-shrink">Collection</div><div class="flex-auto"></div><div class="num flex-auto w-32">Volume</div></div>${m(this.empty,()=>n`<div name="loading" class="doc-intro"></div><loading-skeleton num="4"></loading-skeleton>`,()=>n`${_(this.collections,(t,s)=>n`<div class="item flex items-center"><div class="flex-none w-8 md_pl-3 text-sm font-light opacity-70">${s+1}</div><div class="flex-shrink"><img-loader @click="${()=>this.go2(t)}" .src="${t.image}" class="w-[3rem] h-[3rem] md_w-[3.75rem] md_h-[3.75rem] rounded-lg cursor-pointer"></img-loader></div><div class="flex-auto truncate"><p class="name truncate cursor-pointer" @click="${()=>this.go2(t)}">${t.name}</p><a href="${t.uri}" target="_blank"><span class="icon mt-1"><i class="mdi mdi-play-circle-outline"></i></span></a></div><div class="num flex-initial flex flex-col !w-18 text-sm items-end"><span>${V(t.volumeTotal)}</span> <span class="text-xs" style="color:#34c77b">${l.dayChange(t)}</span></div></div>`)}<ui-pagination mode="${this.scrollMode}" .firstLoad="${!1}" .pending="${this.pending}" @loadmore="${this.loaded}"></ui-pagination>`)}</div>`}};h([C({type:Boolean})],l.prototype,"paging",2);h([C({type:Number})],l.prototype,"week",2);h([d()],l.prototype,"collections",2);h([d()],l.prototype,"pending",2);h([d()],l.prototype,"err",2);h([d()],l.prototype,"ts",2);h([d()],l.prototype,"pagination",2);h([d()],l.prototype,"hasMore",2);l=h([y("weekly-top")],l);var R=Object.defineProperty,U=Object.getOwnPropertyDescriptor,j=(t,s,a,i)=>{for(var e=i>1?void 0:i?U(s,a):s,o=t.length-1,r;o>=0;o--)(r=t[o])&&(e=(i?r(s,a,e):r(e))||e);return i&&e&&R(s,a,e),e};let k=class extends x(""){constructor(){super(...arguments),this.bindBridge=new c(this,w),this.dialog=!1,this.open=()=>{this.disabled?B.emit("connect-wallet"):this.dialog=!0},this.close=()=>this.dialog=!1}get disabled(){return!w.bridge.account}render(){return n`<ui-button icon @click="${this.open}" title="Bind Social"><i class="i mdi mdi-twitter"></i></ui-button>${m(this.dialog,()=>n`<create-social-dialog @close="${this.close}"></create-social-dialog>`)}`}};j([d()],k.prototype,"dialog",2);k=j([y("bind-social-btn")],k);const F=async t=>{let s=`{
      voteLogs(first: ${t}, orderBy: time, orderDirection:desc) {
        id
        voter{
          address
        }
        time
        value
      }
    }`;return await L("MediaBoard",s)},J="svg{display:inline-flex;align-items:center;overflow:hidden;border-radius:9999px;background:#c81444}svg svg{height:100%;width:100%}.ui-list.bidders{display:grid;min-height:15rem;grid-template-columns:repeat(3,minmax(0,1fr));align-items:end;justify-items:end;place-items:end;grid-gap:1rem;gap:1rem}@media (min-width: 768px){.ui-list.bidders{grid-template-columns:repeat(1,minmax(0,1fr))}}.ui-list.bidders.loading{grid-template-columns:repeat(1,minmax(0,1fr))!important}.ui-list.bidders .header{grid-column:span 3 / span 3}@media (min-width: 768px){.ui-list.bidders .header{grid-column:span 1 / span 1}}.ui-list .item{--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -2px rgba(0, 0, 0, .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow)}@media (min-width: 768px){.ui-list .item{--tw-shadow: 0 0 rgba(0,0,0,0);--tw-shadow-colored: 0 0 rgba(0,0,0,0);box-shadow:0 0 #0000,0 0 #0000,0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow)}}";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Q extends W{constructor(){super(...arguments),this._$Cq=new A(this),this._$CK=new N}render(s,a){return P}update(s,[a,i]){if(this.isConnected||this.disconnected(),a===this._$CX)return;this._$CX=a;let e=0;const{_$Cq:o,_$CK:r}=this;return q(a,async u=>{for(;r.get();)await r.get();const b=o.deref();if(b!==void 0){if(b._$CX!==a)return!1;i!==void 0&&(u=i(u,e)),b.commitValue(u,e),e++}return!0}),P}commitValue(s,a){this.setValue(s)}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const Y=T(Q);var Z=Object.defineProperty,G=Object.getOwnPropertyDescriptor,v=(t,s,a,i)=>{for(var e=i>1?void 0:i?G(s,a):s,o=t.length-1,r;o>=0;o--)(r=t[o])&&(e=(i?r(s,a,e):r(e))||e);return i&&e&&Z(s,a,e),e};let g=class extends x(J){constructor(){super(...arguments),this.weekly=!1,this.latestVotes=[],this.albumToVote={id:"",voter:0,time:0,value:0},this.pending=!1,this.init=async()=>{this.pending=!0;try{let t=await F(12);this.latestVotes=t.voteLogs}catch(t){console.error(t)}finally{this.pending=!1}},this.timeAgo=async function*(t){for(;;){let s=BigInt(new Date().getTime())/1000n,a=s-t,i=a/86400n,e="";if(i>0&&(e+=i<1?"":i>14?"2 weeks ":`${i>7?7:i.toString()}${i>1?"days":"day"} `),i<7){const o=(a-i*86400n)/3600n,r=(a-i*86400n-o*3600n)/60n;o>0&&i<1&&(e+=+o.toString()+"h "),r>0&&i<1&&(e+=r.toString()+"m ")}e?e+="ago":e="<1m",yield e,await new Promise(o=>setTimeout(o,1e3))}}}get isMobi(){return f.screen.isMobi}get skeletonLen(){return this.isMobi?2:3}connectedCallback(){super.connectedCallback(),this.init()}render(){return n`<div role="list" class="ui-list gap-2 bidders ${S(this.$c([this.pending?"loading":"hover"]))}"><div class="flex header border-bottom"><div class="w-full">Bidders</div></div>${m(this.pending&&this.latestVotes.length==0,()=>n`<div name="Loading" class="doc-intro"><div class="w-full flex flex-col gap-8">${_([...Array(this.skeletonLen).keys()],()=>n`<loading-skeleton num="3" class="${this.isMobi?"":"sm"}"></loading-skeleton>`)}</div></div>`,()=>n`${_(this.latestVotes,t=>n`<div class="item flex items-center pr-0.5"><div class="w-full flex items-center justify-between gap-2"><ui-link href="${`/user/${t.voter.address}`}"><ui-address class="text-xl" .address="${t.voter.address}" avatar hideAddr></ui-address></ui-link><div class="flex flex-col justify-center items-end"><p class="opacity-95 text-base">${V(t.value)}</p><p class="text-right text-xs leading-none text-neutral-400 whitespace-nowrap">${Y(this.timeAgo(BigInt(t.time)))}</p></div></div></div>`)}`)}</div>`}};v([C({type:Boolean})],g.prototype,"weekly",2);v([d()],g.prototype,"latestVotes",2);v([d()],g.prototype,"albumToVote",2);v([d()],g.prototype,"pending",2);g=v([y("latest-votes")],g);const ee=":host{--homeBoardWidth: 8rem;--homeBoardHalf: calc((100% - var(--homeBoardWidth)) / 2 - 3rem)}.home-board{width:100%}@media (min-width: 1024px){.home-board{width:30rem;flex:0 1 auto}}.home-board .home-board-header{display:flex;height:4rem;justify-content:space-between;padding:.375rem}@media (min-width: 768px){.home-board .home-board-header{height:5rem}}.home-board .home-board-header .home-board-lead{display:flex;flex-direction:column;gap:.375rem}.home-board .home-board-header .home-board-lead h5{align-items:center;font-size:1.25rem;line-height:1.75rem}.home-board .home-board-header .home-board-lead .home-board-subtitle{--tw-text-opacity: 1;color:#a3a3a3;color:rgba(163,163,163,var(--tw-text-opacity))}.home-board:nth-of-type(1){flex-shrink:1;flex-grow:0}@media (min-width: 1024px){.home-board:nth-of-type(1){width:100%}}.home-board:nth-of-type(1){width:var(--homeBoardHalf)}.home-board:nth-of-type(2){flex-shrink:1;flex-grow:0;width:var(--homeBoardHalf)}.home-board:nth-of-type(3){flex-shrink:1;flex-grow:0}@media (min-width: 1024px){.home-board:nth-of-type(3){width:7rem}}@media (max-width: 1024px){.home-board:nth-of-type(1),.home-board:nth-of-type(2){width:auto}}";var te=Object.defineProperty,se=Object.getOwnPropertyDescriptor,ie=(t,s,a,i)=>{for(var e=i>1?void 0:i?se(s,a):s,o=t.length-1,r;o>=0;o--)(r=t[o])&&(e=(i?r(s,a,e):r(e))||e);return i&&e&&te(s,a,e),e};let O=class extends x(ee){constructor(){super(...arguments),this.bindScreen=new c(this,f),this.bindStore=new c(this,$),this.bindWeekly=new c(this,p)}get isMobi(){return f.screen.isMobi}async connectedCallback(){super.connectedCallback()}render(){return n`<div class="ui-container flex flex-col lg_flex-row lg_mt-8 px-2 lg_px-8 gap-4 lg_gap-12 place-content-center"><div class="home-board"><div class="home-board-header"><div class="home-board-lead"><h5>Weekly</h5><div class="home-board-subtitle">${m(p.latest,()=>n`${p.latestRange}, <span class="text-green-500">${p.latestLeft}</span> left`)}</div></div><div class="home-board-lead">${m($.inited,()=>n`<h5><span class="text-base text-gray-300">Pool: </span><span class="ui-em text-xl">${$.weeklyPool||0}</span></h5>`,()=>n`<i class="mdi mdi-loading"></i>`)}</div></div><weekly-top></weekly-top></div>${m(!0,()=>n`<div class="home-board"><div class="home-board-header"><div class="home-board-lead"><div class="text-xl">Top 10<ui-link text class="ml-1 text-xs text-blue-300" href="${"/top"}">View all</ui-link></div></div></div><top-album></top-album></div><div class="home-board"><div class="home-board-header"><div class="text-xl">Votes</div></div><latest-votes></latest-votes></div>`)}</div>`}};O=ie([y("view-home")],O);export{O as ViewHome};