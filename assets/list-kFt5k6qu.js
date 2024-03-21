import{g as S,o as O,a as D,b as L,T as B,w as k,f as T}from"./index-g4n1USL6.js";import{a5 as x,f as P,S as F,B as I,p as m,x as a,q as w,j as $,l as N,m as b,Q as M,e as A,a1 as R,n as c,N as U,I as g}from"./vendor-btwIW55d.js";import"./index-1eJgj0I-.js";const W="/assets/empty-SE8Z4v6N.webp?inline",y=(e=[])=>([e].flat().forEach(t=>{t.subject&&(Object.assign(t,t.subject),delete t.subject);const{image:s,supply:r,voteLogs:i=[]}=t,o=t.totalVoteValue??t.volumeTotal,[n,h]=[!i.length,{val:0n,rate:"1",per:"",stat:""}];if(n)h.per="New";else{const[V,_]=[x(r),x(i[0].supply)],p=V-_;h.val=p,h.rate=P(p*x("100")/_),p!==0n&&(h.stat=p>0?"up":"down"),h.per=p==0n?"-":`${p>0?"+":"-"}${parseFloat(h.rate.toString()).toFixed(1)}%`}t.cooked={totalBN:o,total:+P(o).toString(),src:s!=null&&s.startsWith("http")?s:W,chg:h,newer:n,price:(+r+1)/10}}),e),z=({time:e=O(),first:t=10,skip:s=0}={})=>`
  subjects (
    where: { creator_starts_with: "0x" }${t?` first: ${t}`:""}${s?` skip: ${s}`:""}
    orderBy: supply orderDirection: desc
  ) {
    id image name uri supply createdAt totalVoteValue creator { address }
    voteLogs ( first: 1 where: { time_lt: ${e+""} } orderBy: time orderDirection: desc ) { supply }
  }
`,q=async e=>{const{subjects:t}=await S("MediaBoard",`{ ${z(e)} }`);return y(t),{subjects:t}},C=({week:e,time:t=O(),first:s=10,skip:r=0}={})=>`
  weeklySubjects: subjectWeeklyVotes (
    where: { week: ${e} }${s?` first: ${s}`:""}${r?` skip: ${r}`:""}
    orderBy: volumeTotal orderDirection: desc
  ) {
    id volumeTotal
    subject {
      id name image uri supply creator { address }
      voteLogs ( first: 1 where: { time_lt: ${t+""} } orderBy: time orderDirection: desc ) { supply }
    }
  }
`,ae=async e=>{const{weeklySubjects:t}=await S("MediaBoard",`{ ${C(e)} }`);return y(t),{weeklySubjects:t}},Q=({first:e=12}={})=>`
  votes: voteLogs ( first: ${e} orderBy: time orderDirection: desc) {
    id time value voter { address }
  }
`,H=async e=>{const{subjects:t,weeklySubjects:s,votes:r}=await S("MediaBoard",`{ ${C(e)} ${z(e)} ${Q(e)} }`);return y(t),y(s),{subjects:t,weeklySubjects:s,votes:r}};var Z=Object.defineProperty,G=Object.getOwnPropertyDescriptor,f=(e,t,s,r)=>{for(var i=r>1?void 0:r?G(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&Z(t,s,i),i};class v extends F{constructor(){super(),this.fetch=async()=>{try{const t=await D.getLatest(),{weeklySubjects:s,subjects:r,votes:i}=await H({week:t});this.weeklySubjects=s,this.subjects=r,this.votes=i}catch(t){console.error(t)}this.pending=!1,this.inited=!0},this.init=async()=>{this.fetch(),I.on("block-world",this.listener)},this.listener=L(this.fetch),this.init()}}f([m({value:[]})],v.prototype,"weeklySubjects",2);f([m({value:[]})],v.prototype,"subjects",2);f([m({value:[]})],v.prototype,"votes",2);f([m({value:!0})],v.prototype,"pending",2);f([m({value:!1})],v.prototype,"inited",2);const u=new v,J=(e={})=>({pageNum:1,pageSize:10,hasMore:!0,...e});var K=Object.defineProperty,X=Object.getOwnPropertyDescriptor,E=(e,t,s,r)=>{for(var i=r>1?void 0:r?X(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&K(t,s,i),i};let j=class extends B(""){render(){return this.chg.val==0?this.chg.per:a`<span class="${w({"text-green-500":this.chg.stat=="up","text-red-500":this.chg.stat=="down"})}">${this.chg.per}</span>`}};E([$({type:Object})],j.prototype,"chg",2);j=E([N("chg-stat")],j);const Y=".subject-name{cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 1024px){.subject-name{font-size:1rem;line-height:1.5rem}.subject-name.limit{max-width:10rem}}.subject-img{height:3.5rem;width:3.5rem;cursor:pointer;border-radius:.5rem}.subject-lines{display:flex;flex-direction:column;gap:.25rem;line-height:1}.subject-lines .subject-line1{display:flex;height:1.5rem;align-items:center;line-height:1}.subject-play{font-size:1.25rem;line-height:1.75rem;line-height:1;opacity:.85}.subject-play:hover{opacity:1}";var ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,d=(e,t,s,r)=>{for(var i=r>1?void 0:r?te(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&ee(t,s,i),i};let l=class extends B(Y){constructor(){super(...arguments),this.bindScreen=new b(this,M),this.bindWallet=new b(this,k),this.bindWeekly=new b(this,D),this.bindCharts=new b(this,u),this.paging=!1,this.brief=!0,this.pageSize=10,this.moreSubjects=[],this.morePending=!1,this.ts=0,this.err="",this.pagination=J({pageNum:2,pageSize:this.pageSize}),this.hasMore=!0,this.fetch=async(e=!1)=>{if(!(this.morePending&&!e)&&!(this.paging&&!this.hasMore)){this.err="",this.morePending=!0;try{const t={};if(this.pagination){const{pageSize:r,pageNum:i}=this.pagination;Object.assign(t,{first:r,skip:(i-1)*r})}const{subjects:s}=await q(t);this.paging?(this.moreSubjects=[...this.moreSubjects,...s],this.hasMore=s.length>=this.pagination.pageSize,this.pagination.pageNum++):this.moreSubjects=[...s]}catch(t){this.err=t.message||t.msg||t}finally{this.morePending=!1,this.ts++}}},this.loadmore=()=>{this.fetch()},this.fullItemMobi=e=>a`<div class="w-full overflow-hidden flex gap-x-2" @click="${t=>this.go2(t,e)}"><div class="w-[3.25rem] h-[3.25rem] mr-2 rounded-lg"><img-loader src="${e.image}" class="w-[3.25rem] rounded-lg"></img-loader></div><div class="subject-lines flex-auto overflow-hidden"><div class="subject-line1"><p class="subject-name ${w({limit:this.brief})}">${e.name}</p><a href="${e.uri}" class="flex-none ml-1.5" target="_blank"><i class="subject-play mdi mdi-play-circle-outline"></i></a></div><div class="text-xs text-gray-400/80"><span class="mr-1 text-gray-400/60">Price:</span>${e.cooked.price}</div></div><div class="subject-lines num flex-initial !w-12 text-sm items-end"><span class="subject-line1">${e.cooked.total}</span> <span class="text-xs"><chg-stat .chg="${e.cooked.chg}"></chg-stat></span></div></div>`,this.go2=(e,t)=>{var s;e.preventDefault(),e.stopPropagation(),this.disabled?A.emit("connect-wallet"):((s=e.target)==null?void 0:s.tagName)=="I"?window.open(t.uri,"_blank"):R(`/track/${t.id}`)},this.headerEle=()=>this.brief?a`${c(!this.isMobi,()=>a`<div class="w-8">Rank</div>`)}<div class="flex-shrink">Collection</div><div class="flex-auto"></div><div class="num flex-auto w-32">Volume</div>`:a`${c(!this.isMobi,()=>a`<div class="w-16">Index</div>`)}<div class="flex-auto">Name</div>${c(!this.isMobi,()=>a`<div class="flex-none w-40">Uploaded</div>`)}<div class="num flex-none w-24">Volume</div>${c(!this.isMobi,()=>a`<div class="num flex-none w-24">Price</div><div class="num flex-none w-24">24H</div>`)}`,this.itemEle=(e,t)=>this.brief?a`<div class="item flex items-center" @click="${s=>this.go2(s,e)}">${c(!this.isMobi,()=>a`<div class="flex-none w-8 text-center text-sm font-light opacity-70">${t+1}</div>`)}<div class="subject-img flex-shrink flex justify-center"><img-loader .src="${e.cooked.src}" class="w-14 rounded-lg"></img-loader></div><div class="subject-lines flex-auto overflow-hidden"><div class="subject-line1"><p class="subject-name ${w({limit:this.brief})}">${e.name}</p><a href="${e.uri}" class="flex-none ml-1.5" target="_blank"><i class="subject-play mdi mdi-play-circle-outline"></i></a></div>${c(this.brief,()=>a`<div class="text-xs text-gray-400/80"><span class="mr-1 text-gray-400/60">Price:</span>${e.cooked.price}</div>`)}</div><div class="subject-lines num flex-initial !w-12 text-sm items-end"><span class="subject-line1">${e.cooked.total}</span> <span class="text-xs"><chg-stat .chg="${e.cooked.chg}"></chg-stat></span></div></div>`:a`${c(!this.isMobi,()=>a`<div class="item flex items-center hover_cursor-pointer" @click="${s=>this.go2(s,e)}"><div class="flex-none w-16 pl-4 text-sm font-light opacity-75">${t+1} ${c(this.subjects.length>3&&t<3,()=>a`<i class="mdi mdi-fire text-red-400"></i>`)}</div><div class="flex-auto flex overflow-hidden"><div class="w-[3.25rem] h-[3.25rem] mr-4 rounded-lg"><img-loader src="${e.cooked.src}" class="w-[3.25rem] h-[3.25rem] rounded-lg"></img-loader></div><div class="truncate"><p class="subject-name subject-line1 lg_text-base truncate w-full">${e.name}</p><i class="subject-play mdi mdi-play-circle"></i></div></div><div class="flex-none w-40 text-xs text-gray-300/60">${T(e.createdAt)}</div><div class="flex-none w-24 text-right text-sm"><span>${e.cooked.total}</span></div><div class="flex-none w-24 text-right text-sm"><span>${e.cooked.price}</span></div><div class="flex-none w-24 text-right text-sm leading-none"><span><chg-stat .chg="${e.cooked.chg}"></chg-stat></span></div></div>`,()=>a`${this.fullItemMobi(e)}`)}`}get disabled(){return!k.account}get isMobi(){return M.isMobi}get scrollMode(){return"scroll"}get empty(){return u.inited&&!u.subjects.length}get loading(){return u.pending&&!u.subjects.length}get subjects(){return u.subjects.concat(this.moreSubjects)}render(){return a`<div role="list" class="ui-list gap-2 ${w(this.$c([this.morePending?"loading":"hover"]))}"><div class="flex header border-bottom">${this.headerEle()}</div>${c(this.loading,()=>a`<div name="loading" class="doc-intro"></div><loading-skeleton num="4"></loading-skeleton>`,()=>a`${U(this.subjects,(e,t)=>a`${this.itemEle(e,t)}`)} ${c(this.paging,()=>a`<ui-pagination .nomore="${this.err}" mode="${this.scrollMode}" .firstLoad="${!1}" .pending="${this.morePending}" @loadmore="${this.loadmore}"></ui-pagination>`)}`)}</div>`}};d([$({type:Boolean})],l.prototype,"paging",2);d([$({type:Boolean})],l.prototype,"brief",2);d([$({type:Number})],l.prototype,"pageSize",2);d([g()],l.prototype,"moreSubjects",2);d([g()],l.prototype,"morePending",2);d([g()],l.prototype,"ts",2);d([g()],l.prototype,"err",2);d([g()],l.prototype,"pagination",2);d([g()],l.prototype,"hasMore",2);l=d([N("top-album")],l);export{u as c,J as p,Y as s,ae as w};
