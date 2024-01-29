import{T as x,b,w as u,g as L,t as D,r as _}from"./index-AnaKEuax.js";import{c as h,y as v,e as V,$ as T,x as l,d as B,n as p,u as C,f as j,k as d,a as y,b as $,a0 as N,a1 as W,a2 as q,a3 as A,a4 as O,a5 as H}from"./vendor-lrS3-e9f.js";import{w as K}from"./action-iJgCGPFZ.js";import{s as z,p as X,e as R}from"./list-P7-PlUt5.js";import"./index-FS8vCVSd.js";var E=Object.defineProperty,F=Object.getOwnPropertyDescriptor,c=(e,t,s,a)=>{for(var i=a>1?void 0:a?F(t,s):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(i=(a?o(t,s,i):o(i))||i);return a&&i&&E(t,s,i),i};let n=class extends x(z){constructor(){super(...arguments),this.bindScreen=new h(this,v),this.bindBridge=new h(this,b),this.bindWeekly=new h(this,u),this.paging=!1,this.brief=!0,this.week=1,this.collections=[],this.pending=!1,this.err="",this.ts=0,this.pagination=X(),this.hasMore=!0,this.fetch=async(e=!1)=>{if(!(this.pending&&!e)&&!(this.paging&&!this.hasMore)){this.err="",this.pending=!0;try{const t=await u.getLatest(),s={};if(this.pagination){const{pageSize:r,pageNum:o}=this.pagination;Object.assign(s,{first:r,skip:(o-1)*r})}const{subjectWeeklyVotes:a}=await K(t,s),i=a.map(r=>{var P;const{subject:o,volumeTotal:m,image:w}=r;return{...o,volumeTotal:m,image:(P=o.image)!=null&&P.startsWith("http")?o.image:R}});this.paging?(this.collections.push(...i),this.hasMore=a.length>=this.pagination.pageSize,this.pagination.pageNum++):this.collections=[...i]}catch(t){let s=t.message||t.code||t;this.err=t.message||t.msg||t,console.error(s)}finally{this.pending=!1,this.ts++}}},this.loadmore=()=>{this.fetch()},this.go2=(e,t)=>{var s;e.preventDefault(),e.stopPropagation(),this.disabled?V.emit("connect-wallet"):((s=e.target)==null?void 0:s.tagName)=="I"?window.open(t.uri,"_blank"):T(`/track/${t.id}`)}}get disabled(){return!b.bridge.account}get isMobi(){return v.isMobi}get scrollMode(){return this.isMobi?"click":"scroll"}get loading(){var e;return this.pending&&!((e=this.collections)!=null&&e.length)}get empty(){var e;return this.ts&&!((e=this.collections)!=null&&e.length)}static dayChange(e){if(e.voteLogs.length==0)return"New";{let t=e.voteLogs[0].supply,s=e.supply,a=Math.abs(t-s),i=(a*100/t).toFixed(1);return t>s?l`<p class="text-red-500">-${i}%</p>`:l`<p class="text-green-500">+${i}%</p>`}}connectedCallback(){super.connectedCallback(),this.fetch(!0)}render(){return l`<div role="list" class="ui-list gap-2 ${B(this.$c([this.pending?"loading":"hover"]))}"><div class="flex header border-bottom"><div class="w-8 md_w-10">Rank</div><div class="flex-shrink">Collection</div><div class="flex-auto"></div><div class="num flex-auto w-32">Volume</div></div>${p(this.loading,()=>l`<div name="loading" class="doc-intro"></div><loading-skeleton num="4"></loading-skeleton>`,()=>l`${C(this.collections,(e,t)=>l`<div class="item flex items-center" @click="${s=>this.go2(s,e)}"><div class="flex-none w-8 md_pl-3 text-sm font-light opacity-70">${t+1}</div><div class="flex-shrink flex justify-center"><img-loader .src="${e.image}" class="w-[3rem] h-[3rem] md_w-[3.75rem] md_h-[3.75rem] rounded-lg cursor-pointer"></img-loader></div><div class="flex-auto flex-col"><div class="inline-flex"><p class="name truncate cursor-pointer ${this.brief?"lg_max-w-64":""}">${e.name}</p><a href="${e.uri}" class="flex-none ml-2" target="_blank"><span class="icon mt-1"><i class="mdi mdi-play-circle opacity-85 hover_opacity-100"></i></span></a></div>${p(this.brief,()=>l`<div class="text-xs text-gray-400/70"><span class="mr-1.5">Price:</span>${(Number(e.supply)+1)/10}</div>`)}</div><div class="num flex-initial flex flex-col !w-18 text-sm items-end"><span>${j(e.volumeTotal)}</span> <span class="text-xs" style="color:#34c77b">${n.dayChange(e)}</span></div></div>`)}`)}</div>${p(this.empty,()=>l`<p class="p-2 opacity-60">No votes yet.</p>`)} ${p(this.paging,()=>l`<ui-pagination .nomore="${this.err}" mode="${this.scrollMode}" .firstLoad="${!1}" .pending="${this.pending}" @loadmore="${this.loadmore}"></ui-pagination>`)}`}};c([y({type:Boolean})],n.prototype,"paging",2);c([y({type:Boolean})],n.prototype,"brief",2);c([y({type:Number})],n.prototype,"week",2);c([d()],n.prototype,"collections",2);c([d()],n.prototype,"pending",2);c([d()],n.prototype,"err",2);c([d()],n.prototype,"ts",2);c([d()],n.prototype,"pagination",2);c([d()],n.prototype,"hasMore",2);n=c([$("weekly-top")],n);var I=Object.defineProperty,J=Object.getOwnPropertyDescriptor,S=(e,t,s,a)=>{for(var i=a>1?void 0:a?J(t,s):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(i=(a?o(t,s,i):o(i))||i);return a&&i&&I(t,s,i),i};let k=class extends x(""){constructor(){super(...arguments),this.bindBridge=new h(this,b),this.dialog=!1,this.open=()=>{this.disabled?V.emit("connect-wallet"):this.dialog=!0},this.close=()=>this.dialog=!1}get disabled(){return!b.bridge.account}render(){return l`<ui-button icon @click="${this.open}" title="Bind Social"><i class="i mdi mdi-twitter"></i></ui-button>${p(this.dialog,()=>l`<create-social-dialog @close="${this.close}"></create-social-dialog>`)}`}};S([d()],k.prototype,"dialog",2);k=S([$("bind-social-btn")],k);const Q=async e=>{let t=`{
      voteLogs(first: ${e}, orderBy: time, orderDirection:desc) {
        id
        voter{
          address
        }
        time
        value
      }
    }`;return await L("MediaBoard",t)},U="svg{display:inline-flex;align-items:center;overflow:hidden;border-radius:9999px;background:#c81444}svg svg{height:100%;width:100%}.ui-list.bidders{display:grid;min-height:15rem;grid-template-columns:repeat(3,minmax(0,1fr));align-items:end;justify-items:end;place-items:end;grid-gap:1rem;gap:1rem}@media (min-width: 768px){.ui-list.bidders{grid-template-columns:repeat(1,minmax(0,1fr))}}@media (min-width: 1024px){.ui-list.bidders{row-gap:.625rem}}.ui-list.bidders.loading{grid-template-columns:repeat(1,minmax(0,1fr))!important}.ui-list.bidders .header{grid-column:span 3 / span 3}@media (min-width: 768px){.ui-list.bidders .header{grid-column:span 1 / span 1}}.ui-list .item{--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -2px rgba(0, 0, 0, .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow)}@media (min-width: 768px){.ui-list .item{--tw-shadow: 0 0 rgba(0,0,0,0);--tw-shadow-colored: 0 0 rgba(0,0,0,0);box-shadow:0 0 #0000,0 0 #0000,0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow)}}";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class G extends W{constructor(){super(...arguments),this._$Cq=new q(this),this._$CK=new A}render(t,s){return O}update(t,[s,a]){if(this.isConnected||this.disconnected(),s===this._$CX)return;this._$CX=s;let i=0;const{_$Cq:r,_$CK:o}=this;return H(s,async m=>{for(;o.get();)await o.get();const w=r.deref();if(w!==void 0){if(w._$CX!==s)return!1;a!==void 0&&(m=a(m,i)),w.commitValue(m,i),i++}return!0}),O}commitValue(t,s){this.setValue(t)}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const Y=N(G);var Z=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,f=(e,t,s,a)=>{for(var i=a>1?void 0:a?ee(t,s):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(i=(a?o(t,s,i):o(i))||i);return a&&i&&Z(t,s,i),i};let g=class extends x(U){constructor(){super(...arguments),this.weekly=!1,this.latestVotes=[],this.albumToVote={id:"",voter:0,time:0,value:0},this.pending=!1,this.init=async()=>{this.pending=!0;try{let e=await Q(12);this.latestVotes=e.voteLogs}catch(e){console.error(e)}finally{this.pending=!1}},this.timeAgo=async function*(e){for(;;)yield D(e),await new Promise(t=>setTimeout(t,1e3))}}get isMobi(){return v.screen.isMobi}get skeletonLen(){return this.isMobi?2:3}connectedCallback(){super.connectedCallback(),this.init()}render(){return l`<div role="list" class="ui-list bidders ${B(this.$c([this.pending?"loading":"hover"]))}"><div class="flex header border-bottom"><div class="w-full">Bidders</div></div>${p(this.pending&&this.latestVotes.length==0,()=>l`<div name="Loading" class="doc-intro"><div class="w-full flex flex-col gap-8">${C([...Array(this.skeletonLen).keys()],()=>l`<loading-skeleton num="3" class="${this.isMobi?"":"sm"}"></loading-skeleton>`)}</div></div>`,()=>l`${C(this.latestVotes,e=>l`<div class="item flex items-center pr-0.5"><div class="w-full flex items-center justify-between gap-2"><ui-link href="${`/user/${e.voter.address}`}"><ui-address class="relative -top-1 text-xl" .address="${e.voter.address}" avatar hideAddr></ui-address></ui-link><div class="flex flex-col justify-center items-end text-right"><p class="opacity-95 text-base">${j(e.value)}</p><p class="relative text-right text-xs leading-none text-neutral-400 whitespace-nowrap h-3"><span class="absolute right-0">${Y(this.timeAgo(e.time))}</span></p></div></div></div>`)}`)}</div>`}};f([y({type:Boolean})],g.prototype,"weekly",2);f([d()],g.prototype,"latestVotes",2);f([d()],g.prototype,"albumToVote",2);f([d()],g.prototype,"pending",2);g=f([$("latest-votes")],g);const te=":host{--homeBoardWidth: 8rem;--homeBoardHalf: calc((100% - var(--homeBoardWidth)) / 2 - 3rem)}.ui-board{width:100%}@media (min-width: 1024px){.ui-board{width:30rem;flex:0 1 auto}}.ui-board:nth-of-type(1){flex-grow:1}@media (min-width: 1024px){.ui-board:nth-of-type(1){width:100%}}.ui-board:nth-of-type(1){width:var(--homeBoardHalf)}.ui-board:nth-of-type(2){flex-grow:1;width:var(--homeBoardHalf)}.ui-board:nth-of-type(3){flex-shrink:1;flex-grow:0}@media (min-width: 1024px){.ui-board:nth-of-type(3){width:7rem}}@media (max-width: 1024px){.ui-board:nth-of-type(1),.ui-board:nth-of-type(2){width:auto}}";var ie=Object.defineProperty,se=Object.getOwnPropertyDescriptor,ae=(e,t,s,a)=>{for(var i=a>1?void 0:a?se(t,s):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(i=(a?o(t,s,i):o(i))||i);return a&&i&&ie(t,s,i),i};let M=class extends x(te){constructor(){super(...arguments),this.bindScreen=new h(this,v),this.bindStore=new h(this,_),this.bindWeekly=new h(this,u)}get isMobi(){return v.screen.isMobi}async connectedCallback(){super.connectedCallback()}render(){return l`<div class="ui-pageview ui-container flex-col lg_flex-row place-content-center"><div class="ui-board"><div class="ui-board-header"><div class="ui-board-lead"><h5>Weekly</h5><div class="ui-board-subtitle">${p(u.latest,()=>l`${u.latestRange}, <span class="text-green-500">${u.latestLeft}</span> left`)}</div></div><div class="ui-board-lead">${p(_.inited,()=>l`<h5><span class="text-sm text-gray-300">Pool: </span><span class="ui-em text-xl">${_.weeklyPoolHumanized||"-"}</span></h5>`,()=>l`<i class="mdi mdi-loading"></i>`)}</div></div><weekly-top></weekly-top></div>${p(!0,()=>l`<div class="ui-board"><div class="ui-board-header"><div class="ui-board-lead"><div class="text-xl">Top 10<ui-link text class="ml-1 text-xs text-blue-300" href="${"/top"}">View all</ui-link></div></div></div><top-album></top-album></div><div class="ui-board"><div class="ui-board-header"><div class="text-xl">Votes</div></div><latest-votes></latest-votes></div>`)}</div>`}};M=ae([$("view-home")],M);export{M as ViewHome};
