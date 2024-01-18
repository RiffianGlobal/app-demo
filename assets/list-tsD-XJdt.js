import{T as x,b as u,w as b,t as y}from"./index-O2QfwP56.js";import{a as w}from"./action-JYXsc9cD.js";import{c as p,w as m,f as $,e as f,X as _,x as n,n as h,d as j,u as M,k as d,a as g,b as S}from"./vendor-Yy_wTTXu.js";import"./index-KgAK_TTG.js";const L=["https://cdn.shopify.com/app-store/listing_images/a82167e02b45cadf681efc6c17c35f3a/icon/CMmMjb30lu8CEAE=.jpg"],v=()=>({pageNum:1,pageSize:10,hasMore:!0}),k="@media (min-width: 500px){.name{font-size:1rem;line-height:1.5rem}}.icon{font-size:1.25rem;line-height:1.75rem}@media (max-width: 500px){.icon{font-size:1.5rem;line-height:2rem}}";var C=Object.defineProperty,z=Object.getOwnPropertyDescriptor,l=(e,t,s,r)=>{for(var i=r>1?void 0:r?z(t,s):t,o=e.length-1,c;o>=0;o--)(c=e[o])&&(i=(r?c(t,s,i):c(i))||i);return r&&i&&C(t,s,i),i};let a=class extends x(k){constructor(){super(...arguments),this.indScreen=new p(this,m),this.bindBridge=new p(this,u),this.bindWeekly=new p(this,b),this.paging=!1,this.brief=!0,this.pageSize=10,this.subjectList=[],this.pending=!1,this.ts=0,this.err="",this.pagination=Object.assign(v(),{pageSize:this.pageSize}),this.hasMore=!0,this.fetch=async(e=!1)=>{if(!(this.pending&&!e)&&!(this.paging&&!this.hasMore)){this.err="",this.pending=!0;try{const t={};if(this.pagination){const{pageSize:i,pageNum:o}=this.pagination;Object.assign(t,{first:i,skip:(o-1)*i})}let{subjects:s}=await w(t);const r=s.map(i=>{var o;return{...i,totalVal:+$(i.totalVoteValue).toString(),image:(o=i.image)!=null&&o.startsWith("http")?i.image:L[0]}});this.paging?(this.subjectList.push(...r),this.hasMore=s.length>=this.pagination.pageSize,this.pagination.pageNum++):this.subjectList=[...r]}catch(t){this.err=t.message||t.msg||t,this.ts||y.add({summary:"Fetch failed",detail:this.err})}finally{this.pending=!1,this.ts++}}},this.loaded=()=>{this.fetch()},this.go2=(e,t)=>{var s;e.preventDefault(),e.stopPropagation(),this.disabled?f.emit("connect-wallet"):((s=e.target)==null?void 0:s.tagName)=="I"?window.open(t.uri,"_blank"):_(`/track/${t.id}`)},this.headerEle=()=>this.brief?n`<div class="w-8 md_w-10">Rank</div><div class="flex-shrink">Collection</div><div class="flex-auto"></div><div class="num flex-auto w-32">Price</div>`:n`<div class="w-16">Index</div><div class="flex-auto">Name</div><div class="flex-none w-40">Created</div><div class="num flex-none w-24">Vote Value</div><div class="num flex-none w-24">Price</div><div class="num flex-none w-24">24H</div>`,this.itemEle=(e,t)=>this.brief?n`<div class="item flex items-center"><div class="flex-none w-8 md_pl-3 text-sm font-light opacity-70">${t+1}</div><div class="flex-shrink"><img-loader @click="${s=>this.go2(s,e)}" .src="${e.image}" class="w-[3rem] h-[3rem] md_w-[3.75rem] md_h-[3.75rem] rounded-lg cursor-pointer"></img-loader></div><div class="flex-auto truncate"><p class="name truncate cursor-pointer" @click="${s=>this.go2(s,e)}">${e.name}</p><a href="${e.uri}" target="_blank"><span class="icon mt-1"><i class="mdi mdi-play-circle-outline"></i></span></a></div><div class="num flex-initial flex flex-col !w-18 text-sm items-end"><span>${(Number(e.supply)+1)/10}</span> <span class="text-xs" style="color:#34c77b">${a.dayChange(e)}</span></div></div>`:n`<div class="item flex items-center hover_cursor-pointer" @click="${s=>this.go2(s,e)}"><div class="flex-none w-16 pl-4 text-sm font-light opacity-75">${t+1} ${h(this.subjectList.length>3&&t<3,()=>n`<i class="mdi mdi-fire text-red-400"></i>`)}</div><div class="flex-auto flex"><div class="w-[3.25rem] h-[3.25rem] mr-4 rounded-lg"><img-loader src="${e.image}" class="rounded-lg"></img-loader></div><div><p class="name truncate">${e.name}</p><span class="icon mt-1"><i class="mdi mdi-play-circle-outline"></i></span></div></div><div class="flex-none w-40 text-xs text-gray-300/60">${new Date(e.createdAt*1e3).toLocaleString()}</div><div class="flex-none w-24 text-right text-sm"><span>${e.totalVal}</span></div><div class="flex-none w-24 text-right text-sm"><span>${(Number(e.supply)+1)/10}</span></div><div class="flex-none w-24 text-right text-sm"><span>${a.dayChange(e)}</span></div></div>`}get disabled(){return!u.bridge.account}get isMobi(){return m.isMobi}get scrollMode(){return this.isMobi?"click":"scroll"}get empty(){return this.pending&&!this.subjectList.length}static dayChange(e){if(e.voteLogs.length==0)return"New";{let t=e.voteLogs[0].supply,s=e.supply,r=Math.abs(t-s),i=(r*100/t).toFixed(1);return t>s?n`<p class="text-red-500">-${i}%</p>`:n`<p class="text-green-500">+${i}%</p>`}}async connectedCallback(){super.connectedCallback(),this.fetch(!0),f.on("toplist-fetch",()=>{this.pagination=v(),this.fetch(!0)})}render(){return n`<div role="list" class="ui-list gap-2 ${j(this.$c([this.pending?"loading":"hover"]))}"><div class="flex header border-bottom">${this.headerEle()}</div>${h(this.empty,()=>n`<div name="loading" class="doc-intro"></div><loading-skeleton num="4"></loading-skeleton>`,()=>n`${M(this.subjectList,(e,t)=>n`${this.itemEle(e,t)}`)} ${h(this.paging,()=>n`<ui-pagination mode="${this.scrollMode}" .firstLoad="${!1}" .pending="${this.pending}" @loadmore="${this.loaded}"></ui-pagination>`)}`)}</div>`}};l([g({type:Boolean})],a.prototype,"paging",2);l([g({type:Boolean})],a.prototype,"brief",2);l([g({type:Number})],a.prototype,"pageSize",2);l([d()],a.prototype,"subjectList",2);l([d()],a.prototype,"pending",2);l([d()],a.prototype,"ts",2);l([d()],a.prototype,"err",2);l([d()],a.prototype,"pagination",2);l([d()],a.prototype,"hasMore",2);a=l([S("top-album")],a);export{L as M,v as p,k as s};
