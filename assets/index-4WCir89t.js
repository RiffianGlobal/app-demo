import{T as f,b,w as g,t as O,r as y}from"./index-aJ1IhnCu.js";import{l as p,O as m,e as k,$ as B,x as a,m as $,n,L as j,G as h,i as S,j as w,f as C}from"./vendor-KMCe_Sr5.js";import{s as D,c as d,p as V,w as L}from"./list-tICpKYHI.js";import{h as A}from"./async-replace-ryP8i0e2.js";var T=Object.defineProperty,W=Object.getOwnPropertyDescriptor,u=(e,t,s,r)=>{for(var i=r>1?void 0:r?W(t,s):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(i=(r?l(t,s,i):l(i))||i);return r&&i&&T(t,s,i),i};let c=class extends f(D){constructor(){super(...arguments),this.bindScreen=new p(this,m),this.bindBridge=new p(this,b),this.bindWeekly=new p(this,g),this.bindCharts=new p(this,d),this.paging=!1,this.brief=!0,this.moreSubjects=[],this.morePending=!1,this.err="",this.ts=0,this.pagination=V({pageNum:2}),this.hasMore=!0,this.fetch=async(e=!1)=>{if(!(this.morePending&&!e)&&!(this.paging&&!this.hasMore)){this.err="",this.morePending=!0;try{const s={week:await g.getLatest()};if(this.pagination){const{pageSize:i,pageNum:o}=this.pagination;Object.assign(s,{first:i,skip:(o-1)*i})}const{weeklySubjects:r}=await L(s);this.paging?(this.moreSubjects=[...this.moreSubjects,...r],this.hasMore=r.length>=this.pagination.pageSize,this.pagination.pageNum++):this.moreSubjects=[...r]}catch(t){let s=t.message||t.code||t;this.err=t.message||t.msg||t,console.error(s)}finally{this.morePending=!1,this.ts++}}},this.loadmore=()=>{this.fetch()},this.go2=(e,t)=>{var s;e.preventDefault(),e.stopPropagation(),this.disabled?k.emit("connect-wallet"):((s=e.target)==null?void 0:s.tagName)=="I"?window.open(t.uri,"_blank"):B(`/track/${t.id}`)}}get disabled(){return!b.bridge.account}get isMobi(){return m.isMobi}get scrollMode(){return this.isMobi?"click":"scroll"}get loading(){return d.pending&&!d.weeklySubjects.length}get empty(){return d.inited&&!d.weeklySubjects.length}get subjects(){return d.weeklySubjects.concat(this.moreSubjects)}render(){return a`<div role="list" class="ui-list gap-2 ${$(this.$c([this.morePending?"loading":"hover"]))}"><div class="flex header border-bottom">${n(!this.isMobi,()=>a`<div class="w-8">Rank</div>`)}<div class="flex-shrink">Collection</div><div class="flex-auto"></div><div class="num flex-auto w-32">Volume</div></div>${n(this.loading,()=>a`<div name="loading" class="doc-intro"></div><loading-skeleton num="4"></loading-skeleton>`,()=>a`${j(this.subjects,(e,t)=>a`<div class="item flex items-center" @click="${s=>this.go2(s,e)}">${n(!this.isMobi,()=>a`<div class="flex-none w-8 text-center text-sm font-light opacity-70">${t+1}</div>`)}<div class="subject-img flex-shrink flex justify-center"><img-loader .src="${e.cooked.src}" class="w-14 rounded-lg"></img-loader></div><div class="subject-lines flex-auto overflow-hidden"><div class="subject-line1"><p class="subject-name ${$({limit:this.brief})}">${e.name}</p><a href="${e.uri}" class="flex-none ml-1.5" target="_blank"><i class="subject-play mdi mdi-play-circle-outline"></i></a></div>${n(this.brief,()=>a`<div class="text-xs text-gray-400/80"><span class="mr-1 text-gray-400/60">Price:</span>${e.cooked.price}</div>`)}</div><div class="subject-lines num flex-initial !w-18 text-sm items-end"><span class="subject-line1">${e.cooked.total}</span> <span class="text-xs"><chg-stat .chg="${e.cooked.chg}"></chg-stat></span></div></div>`)}`)}</div>${n(this.empty,()=>a`<p class="p-2 opacity-60">No votes yet.</p>`)} ${n(this.paging,()=>a`<ui-pagination .nomore="${this.err}" mode="${this.scrollMode}" .firstLoad="${!1}" .pending="${this.morePending}" @loadmore="${this.loadmore}"></ui-pagination>`)}`}};u([S({type:Boolean})],c.prototype,"paging",2);u([S({type:Boolean})],c.prototype,"brief",2);u([h()],c.prototype,"moreSubjects",2);u([h()],c.prototype,"morePending",2);u([h()],c.prototype,"err",2);u([h()],c.prototype,"ts",2);u([h()],c.prototype,"pagination",2);u([h()],c.prototype,"hasMore",2);c=u([w("weekly-top")],c);var H=Object.defineProperty,N=Object.getOwnPropertyDescriptor,M=(e,t,s,r)=>{for(var i=r>1?void 0:r?N(t,s):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(i=(r?l(t,s,i):l(i))||i);return r&&i&&H(t,s,i),i};let P=class extends f(""){constructor(){super(...arguments),this.bindBridge=new p(this,b),this.dialog=!1,this.open=()=>{this.disabled?k.emit("connect-wallet"):this.dialog=!0},this.close=()=>this.dialog=!1}get disabled(){return!b.bridge.account}render(){return a`<ui-button icon @click="${this.open}" title="Bind Social"><i class="i mdi mdi-twitter"></i></ui-button>${n(this.dialog,()=>a`<create-social-dialog @close="${this.close}"></create-social-dialog>`)}`}};M([h()],P.prototype,"dialog",2);P=M([w("bind-social-btn")],P);const z="svg{display:inline-flex;align-items:center;overflow:hidden;border-radius:9999px;background:#c81444}svg svg{height:100%;width:100%}.ui-list.bidders{margin-top:.5rem;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));align-items:end;justify-items:end;place-items:end;grid-gap:1rem;gap:1rem}@media (min-width: 768px){.ui-list.bidders{min-height:20rem;grid-template-columns:repeat(1,minmax(0,1fr))}}@media (min-width: 1024px){.ui-list.bidders{row-gap:0px}}.ui-list.bidders>*:not(.header){padding-top:.75rem;padding-bottom:.75rem}.ui-list.bidders.loading{grid-template-columns:repeat(1,minmax(0,1fr))!important}.ui-list.bidders .header{grid-column:span 3 / span 3}@media (min-width: 768px){.ui-list.bidders .header{grid-column:span 1 / span 1}}.ui-list .item{--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -2px rgba(0, 0, 0, .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow)}@media (min-width: 768px){.ui-list .item{--tw-shadow: 0 0 rgba(0,0,0,0);--tw-shadow-colored: 0 0 rgba(0,0,0,0);box-shadow:0 0 #0000,0 0 #0000,0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow)}}";var R=Object.defineProperty,q=Object.getOwnPropertyDescriptor,x=(e,t,s,r)=>{for(var i=r>1?void 0:r?q(t,s):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(i=(r?l(t,s,i):l(i))||i);return r&&i&&R(t,s,i),i};let v=class extends f(z){constructor(){super(...arguments),this.bindCharts=new p(this,d),this.albumToVote={id:"",voter:0,time:0,value:0},this.moreVotes=[],this.morePending=!1,this.itemMobi=e=>a`<ui-link class="flex justify-center items-center" href="${`/user/${e.voter.address}`}"><ui-address class="relative -top-1 text-xl" .address="${e.voter.address}" avatar hideAddr></ui-address></ui-link>`,this.timeAgo=async function*(e){for(;;)yield O(e),await new Promise(t=>setTimeout(t,1e3))}}get isMobi(){return m.screen.isMobi}get skeletonLen(){return this.isMobi?2:3}get loading(){return d.pending&&!d.votes.length}get empty(){return d.inited&&!d.votes.length}get votes(){return d.votes.concat(this.moreVotes)}render(){return a`<div class="w-full p-2 text-sm text-neutral-400 border-b" style="border-color:#2e3349"><div class="w-full">Bidders</div></div><div role="list" class="ui-list bidders ${$(this.$c([this.morePending?"loading":"hover"]))}">${n(this.loading,()=>a`<div name="Loading" class="doc-intro"><div class="w-full flex flex-col gap-8">${j([...Array(this.skeletonLen).keys()],()=>a`<loading-skeleton num="3" class="${this.isMobi?"":"sm"}"></loading-skeleton>`)}</div></div>`,()=>a`${j(this.votes,(e,t)=>a`${n(!this.isMobi,()=>a`<div class="item flex items-center pr-0.5"><div class="w-full flex items-center justify-between gap-2"><ui-link href="${`/user/${e.voter.address}`}"><ui-address class="relative -top-1 text-xl" .address="${e.voter.address}" avatar hideAddr></ui-address></ui-link><div class="flex flex-col justify-center items-end text-right"><p class="opacity-95 text-base">${C(e.value)}</p><p class="relative text-right text-xs leading-none text-neutral-400 whitespace-nowrap h-3"><span class="absolute right-0">${A(this.timeAgo(e.time))}</span></p></div></div></div>`,()=>a`${n(t<5,()=>a`${this.itemMobi(e)}`)}`)}`)}`)}</div>`}};x([h()],v.prototype,"albumToVote",2);x([h()],v.prototype,"moreVotes",2);x([h()],v.prototype,"morePending",2);v=x([w("latest-votes")],v);const E=":host{--homeBoardWidth: 8rem;--homeBoardHalf: calc((100% - var(--homeBoardWidth)) / 2 - 3rem)}.ui-board{width:100%}@media (min-width: 1024px){.ui-board{width:30rem;flex:0 1 auto}}.ui-board:nth-of-type(1){flex-grow:1}@media (min-width: 1024px){.ui-board:nth-of-type(1){width:100%}}.ui-board:nth-of-type(1){width:var(--homeBoardHalf)}.ui-board:nth-of-type(2){flex-grow:1;width:var(--homeBoardHalf)}.ui-board:nth-of-type(3){flex-shrink:1;flex-grow:0}@media (min-width: 1024px){.ui-board:nth-of-type(3){width:7rem}}@media (max-width: 1024px){.ui-board:nth-of-type(1),.ui-board:nth-of-type(2){width:auto}}";var G=Object.defineProperty,I=Object.getOwnPropertyDescriptor,U=(e,t,s,r)=>{for(var i=r>1?void 0:r?I(t,s):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(i=(r?l(t,s,i):l(i))||i);return r&&i&&G(t,s,i),i};let _=class extends f(E){constructor(){super(...arguments),this.bindScreen=new p(this,m),this.bindStore=new p(this,y),this.bindWeekly=new p(this,g)}get isMobi(){return m.screen.isMobi}async connectedCallback(){super.connectedCallback()}render(){return a`<div class="ui-pageview ui-container flex-col lg_flex-row place-content-center"><div class="ui-board"><div class="ui-board-header"><div class="ui-board-lead"><h5>Weekly Chart</h5><div class="ui-board-subtitle">${n(g.latest,()=>a`${g.latestRange}, <span class="text-green-500">${g.latestLeft}</span> left`)}</div></div><div class="ui-board-lead">${n(y.inited,()=>a`<h5><span class="text-sm text-gray-300">Pool: </span><span class="ui-em text-xl">${y.weeklyPoolHumanized||"-"}</span></h5>`,()=>a`<i class="mdi mdi-loading"></i>`)}</div></div><weekly-top></weekly-top></div>${n(!0,()=>a`<div class="ui-board"><div class="ui-board-header"><div class="ui-board-lead"><div class="text-xl">All Chart<ui-link text class="ml-1 text-xs text-blue-300" href="${"/top"}">View all</ui-link></div></div></div><top-album></top-album></div><div class="ui-board"><div class="ui-board-header"><div class="text-xl">Votes</div></div><latest-votes></latest-votes></div>`)}</div>`}};_=U([w("view-home")],_);export{_ as ViewHome};