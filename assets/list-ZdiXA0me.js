import{T as b,b as f,w as L,f as _}from"./index-unsB83yP.js";import{a as M}from"./action-QpO7sTOG.js";import{L as S,x as a,d as $,n as g,a as l,b as w,c as u,y as v,f as j,e as y,Z as k,u as z,k as m}from"./vendor-J8OSF_8X.js";const C="/assets/empty-SE8Z4v6N.webp?inline",x=(e={})=>({pageNum:1,pageSize:10,hasMore:!0,...e}),N=":host{background-color:transparent!important}:host::part(inner){display:flex;height:2rem;width:100%;align-items:center;justify-content:center}@media (min-width: 1024px){:host::part(inner){height:2.5rem}}";var P=Object.defineProperty,O=Object.getOwnPropertyDescriptor,c=(e,t,i,n)=>{for(var s=n>1?void 0:n?O(t,i):t,r=e.length-1,h;r>=0;r--)(h=e[r])&&(s=(n?h(t,i,s):h(s))||s);return n&&s&&P(t,i,s),s};let p=class extends S(b(N),{persistent:!0,rootMargin:"30px"}){constructor(){super(...arguments),this.pageSize=5,this.page=1,this.mode="scroll",this.pending=!1,this.firstLoad=!0,this.empty=!1,this.nomore=!1,this.class="",this.loadmore=()=>{if(!this.canLoad)return;const{pageSize:e,page:t,mode:i}=this;this.emit("cc"),this.emit("loadmore",{pageSize:e,page:t,mode:i})},this.onObserved=()=>{this.scrollMode&&this.loadmore()}}get canLoad(){return!this.pending&&!this.nomore&&!this.empty&&!this.firstLoad}get scrollMode(){return this.mode==="scroll"}connectedCallback(){super.connectedCallback()}render(){return a`<div class="ui-pagination w-full flex justify-center items-center mt-4 ${$(this.$c([{nomore:this.nomore,"pointer-events-none !bg-transparent":!this.canLoad||this.scrollMode,scrollMode:this.scrollMode},this.class]))}"><div part="inner" @click="${this.loadmore}">${g(this.empty,()=>a`<slot name="empty"></slot>`,()=>a`${g(this.nomore,()=>a`<slot name="nomore"></slot>`,()=>a`${g(this.pending,()=>a`<slot name="loading"><loading-icon type="block"></loading-icon></slot>`,()=>a`${g(!this.scrollMode&&!this.firstLoad,()=>a`<slot><ui-link>Load more</ui-link></slot>`)}`)}`)}`)}</div></div>`}};c([l({type:Number})],p.prototype,"pageSize",2);c([l({type:Number})],p.prototype,"page",2);c([l()],p.prototype,"mode",2);c([l()],p.prototype,"pending",2);c([l({type:Boolean})],p.prototype,"firstLoad",2);c([l({type:Boolean})],p.prototype,"empty",2);c([l({type:Boolean})],p.prototype,"nomore",2);c([l()],p.prototype,"class",2);p=c([w("ui-pagination")],p);const E="@media (min-width: 500px){.name{font-size:1rem;line-height:1.5rem}}.icon{font-size:1.25rem;line-height:1.75rem}@media (max-width: 500px){.icon{font-size:1.5rem;line-height:2rem}}";var B=Object.defineProperty,D=Object.getOwnPropertyDescriptor,d=(e,t,i,n)=>{for(var s=n>1?void 0:n?D(t,i):t,r=e.length-1,h;r>=0;r--)(h=e[r])&&(s=(n?h(t,i,s):h(s))||s);return n&&s&&B(t,i,s),s};let o=class extends b(E){constructor(){super(...arguments),this.indScreen=new u(this,v),this.bindBridge=new u(this,f),this.bindWeekly=new u(this,L),this.paging=!1,this.brief=!0,this.pageSize=10,this.subjectList=[],this.pending=!1,this.ts=0,this.err="",this.pagination=x({pageSize:this.pageSize}),this.hasMore=!0,this.fetch=async(e=!1)=>{if(!(this.pending&&!e)&&!(this.paging&&!this.hasMore)){this.err="",this.pending=!0;try{const t={};if(this.pagination){const{pageSize:s,pageNum:r}=this.pagination;Object.assign(t,{first:s,skip:(r-1)*s})}let{subjects:i}=await M(t);const n=i.map(s=>{var r;return{...s,totalVal:+j(s.totalVoteValue).toString(),image:(r=s.image)!=null&&r.startsWith("http")?s.image:C}});this.paging?(this.subjectList.push(...n),this.hasMore=i.length>=this.pagination.pageSize,this.pagination.pageNum++):this.subjectList=[...n]}catch(t){this.err=t.message||t.msg||t}finally{this.pending=!1,this.ts++}}},this.loadmore=()=>{this.fetch()},this.go2=(e,t)=>{var i;e.preventDefault(),e.stopPropagation(),this.disabled?y.emit("connect-wallet"):((i=e.target)==null?void 0:i.tagName)=="I"?window.open(t.uri,"_blank"):k(`/track/${t.id}`)},this.headerEle=()=>this.brief?a`<div class="w-8 md_w-10">Rank</div><div class="flex-shrink">Collection</div><div class="flex-auto"></div><div class="num flex-auto w-32">Price</div>`:a`<div class="w-16">Index</div><div class="flex-auto">Name</div><div class="flex-none w-40">Created</div><div class="num flex-none w-24">Vote Value</div><div class="num flex-none w-24">Price</div><div class="num flex-none w-24">24H</div>`,this.itemEle=(e,t)=>this.brief?a`<div class="item flex items-center"><div class="flex-none w-8 md_pl-3 text-sm font-light opacity-70">${t+1}</div><div class="flex-shrink"><img-loader @click="${i=>this.go2(i,e)}" .src="${e.image}" class="w-[3rem] h-[3rem] md_w-[3.75rem] md_h-[3.75rem] rounded-lg cursor-pointer"></img-loader></div><div class="flex-auto truncate"><p class="name truncate cursor-pointer" @click="${i=>this.go2(i,e)}">${e.name}</p><a href="${e.uri}" target="_blank"><span class="icon mt-1"><i class="mdi mdi-play-circle-outline"></i></span></a></div><div class="num flex-initial flex flex-col !w-18 text-sm items-end"><span>${(Number(e.supply)+1)/10}</span> <span class="text-xs" style="color:#34c77b">${o.dayChange(e)}</span></div></div>`:a`<div class="item flex items-center hover_cursor-pointer" @click="${i=>this.go2(i,e)}"><div class="flex-none w-16 pl-4 text-sm font-light opacity-75">${t+1} ${g(this.subjectList.length>3&&t<3,()=>a`<i class="mdi mdi-fire text-red-400"></i>`)}</div><div class="flex-auto flex"><div class="w-[3.25rem] h-[3.25rem] mr-4 rounded-lg"><img-loader src="${e.image}" class="rounded-lg"></img-loader></div><div><p class="name truncate">${e.name}</p><span class="icon mt-1"><i class="mdi mdi-play-circle-outline"></i></span></div></div><div class="flex-none w-40 text-xs text-gray-300/60">${_(e.createdAt)}</div><div class="flex-none w-24 text-right text-sm"><span>${e.totalVal}</span></div><div class="flex-none w-24 text-right text-sm"><span>${(Number(e.supply)+1)/10}</span></div><div class="flex-none w-24 text-right text-sm"><span>${o.dayChange(e)}</span></div></div>`}get disabled(){return!f.bridge.account}get isMobi(){return v.isMobi}get scrollMode(){return"scroll"}get empty(){return this.pending&&!this.subjectList.length}static dayChange(e){if(e.voteLogs.length==0)return"New";{let t=e.voteLogs[0].supply,i=e.supply,n=Math.abs(t-i),s=(n*100/t).toFixed(1);return t>i?a`<p class="text-red-500">-${s}%</p>`:a`<p class="text-green-500">+${s}%</p>`}}async connectedCallback(){super.connectedCallback(),this.fetch(!0),y.on("toplist-fetch",()=>{this.pagination=x(),this.fetch(!0)})}render(){return a`<div role="list" class="ui-list gap-2 ${$(this.$c([this.pending?"loading":"hover"]))}"><div class="flex header border-bottom">${this.headerEle()}</div>${g(this.empty,()=>a`<div name="loading" class="doc-intro"></div><loading-skeleton num="4"></loading-skeleton>`,()=>a`${z(this.subjectList,(e,t)=>a`${this.itemEle(e,t)}`)} ${g(this.paging,()=>a`<ui-pagination .nomore="${this.err}" mode="${this.scrollMode}" .firstLoad="${!1}" .pending="${this.pending}" @loadmore="${this.loadmore}"></ui-pagination>`)}`)}</div>`}};d([l({type:Boolean})],o.prototype,"paging",2);d([l({type:Boolean})],o.prototype,"brief",2);d([l({type:Number})],o.prototype,"pageSize",2);d([m()],o.prototype,"subjectList",2);d([m()],o.prototype,"pending",2);d([m()],o.prototype,"ts",2);d([m()],o.prototype,"err",2);d([m()],o.prototype,"pagination",2);d([m()],o.prototype,"hasMore",2);o=d([w("top-album")],o);export{C as e,x as p,E as s};
