import{T as _,b as m,d as S,u as k,q as O,s as V,v as M,r as y,l as E}from"./index-jbH5dX5k.js";import{l as b,x as i,n as d,f as P,G as c,i as f,j as w,O as $,e as x,Y as D,m as A,L as j}from"./vendor-RGbHs7GY.js";import{u as H}from"./action-fWVcV4QZ.js";var T=Object.defineProperty,L=Object.getOwnPropertyDescriptor,h=(t,s,l,a)=>{for(var e=a>1?void 0:a?L(s,l):s,r=t.length-1,n;r>=0;r--)(n=t[r])&&(e=(a?n(s,l,e):n(e))||e);return a&&e&&T(s,l,e),e};const C=()=>({tx:""});let o=class extends _(""){constructor(){super(...arguments),this.bindBridge=new b(this,m),this.album="",this.url="",this.votes=0,this.price=0,this.tx=null,this.success=!1,this.pending=!1,this.rewards=!1,this.err=C(),this.resetState=()=>{this.err=C(),this.pending=!1,this.success=!1,this.price=0},this.close=async()=>{this.tx=null,this.resetState(),this.emit("close")},this.updateErr=(t={})=>this.err=Object.assign({},this.err,t)}connectedCallback(){super.connectedCallback(),this.getPrice()}async getPrice(){try{let t=await k(this.album,await S());this.votes=t,this.price=await O(this.album,this.votes)}catch(t){let s=t.message||t.code;this.updateErr({tx:s})}}async retreat(){this.pending=!0;try{this.tx=await V(this.album,this.votes),this.success=await this.tx.wait()}catch(t){let s=t.message||t.code;if(t.code===4001)return this.updateErr({tx:s}),this.close()}finally{this.pending=!1}}render(){return i`<ui-dialog @close="${()=>{this.close()}}"><p slot="header" class="my-2 font-bold">Retreat Subject</p><div class="grid place-items-center b-1 border m-4 p-4 rounded-md"><p class="w-36 h-36"><img-loader src="${this.url}"></img-loader></p>${d(!this.price,()=>i`<div class="my-4"><loading-skeleton num="3"></loading-skeleton><p class="my-4">Loading subject data...</p></div>`)} ${d(this.price&&!this.pending,()=>i`<p class="font-bold">Estimated returned value</p><p class="text-xl text-sky-500">${P(this.price)} FTM</p><p>Your Votes:${this.votes}</p><ui-button class="m-1" @click="${this.retreat}">RETREAT</ui-button>`)}${d(this.pending,()=>i`<tx-state .tx="${this.tx}" .opts="${{state:{success:"Success. Your retreat has been submitted."}}}"><ui-button slot="view" href="/">Close</ui-button></tx-state>`)}</div></ui-dialog>`}};h([f({type:String})],o.prototype,"album",2);h([f({type:String})],o.prototype,"url",2);h([f({type:Number})],o.prototype,"votes",2);h([c()],o.prototype,"price",2);h([c()],o.prototype,"tx",2);h([c()],o.prototype,"success",2);h([c()],o.prototype,"pending",2);h([c()],o.prototype,"rewards",2);h([c()],o.prototype,"err",2);o=h([w("retreat-vote-dialog")],o);const R=".ui-list .item{cursor:pointer;align-items:center}@media (min-width: 768px){.ui-list .name{font-size:1rem;line-height:1.5rem}}.ui-list .author{width:13rem;text-align:right}";var B=Object.defineProperty,z=Object.getOwnPropertyDescriptor,g=(t,s,l,a)=>{for(var e=a>1?void 0:a?z(s,l):s,r=t.length-1,n;r>=0;r--)(n=t[r])&&(e=(a?n(s,l,e):n(e))||e);return a&&e&&B(s,l,e),e};let p=class extends _(R){constructor(){super(...arguments),this.bindBridge=new b(this,m),this.bindScreen=new b(this,$),this.by="",this.dir="",this.uVotes=[],this.dialog=!1,this.currentAlbum={id:"",votes:0,url:""},this.pending=!1,this.fetch=async()=>{if(!this.disabled){this.pending=!0;try{const t=await M(this.acc,{orderBy:this.by});this.uVotes=t.map(s=>({...s,price:(+s.subject.supply+1)/10}))}catch{}finally{this.pending=!1}}},this.close=()=>this.dialog=!1,this.go2=t=>{this.disabled?x.emit("connect-wallet"):D(`/track/${t.subject.id}`)},this.itemMobi=t=>i`<div class="w-full overflow-hidden flex gap-x-2"><div class="w-[3.25rem] h-[3.25rem] mr-2 rounded-lg"><img-loader src="${t.subject.image}" class="w-[3.25rem] rounded-lg"></img-loader></div><div class="flex-auto flex flex-col"><div class="flex truncate items-center"><p class="truncate">${t.subject.name}</p><a href="${t.subject.uri}" class="flex-none ml-1.5" target="_blank"><i class="text-lg mdi mdi-play-circle-outline"></i></a></div><div class="mt-0.5 text-xs opacity-80"><ui-address .address="${t.subject.creator.address}" short avatar></ui-address></div></div><div class="num justify-center self-center"><div class="text-sm">${t.subject.supply}</div><span class="text-xs opacity-80 text-gray-300/60">tickets</span></div></div>`}get isMobi(){return $.screen.isMobi}get disabled(){return!m.bridge.account}getRandomInt(t){return Math.floor(Math.random()*t)}connectedCallback(){super.connectedCallback(),this.fetch(),m.bridge.subscribe(this.fetch),x.on("manual-change",this.fetch)}disconnectedCallback(){super.disconnectedCallback(),x.off("manual-change",this.fetch)}render(){return i`<div role="list" class="ui-list py-4 md_py-6 ${A(this.$c([this.pending?"loading":"hover"]))}">${d(!this.isMobi,()=>i`<div class="flex header"><div class="flex-auto">Collection</div><div class="author flex-none w-32 text-right">Price</div><div class="num flex-none">Tickets</div><div class="num flex-none">Holding</div></div>`)} ${d(this.pending,()=>i`<div name="Loading" class="doc-intro"><div class="flex flex-col gap-8 m-6">${j([...Array(3).keys()],()=>i`<div name="Loading" class="doc-intro"><loading-skeleton num="4"></loading-skeleton></div>`)}</div></div>`,()=>i`${j(this.uVotes,t=>i`<div class="item flex items-center pr-0.5" @click="${()=>this.go2(t)}">${d(!this.isMobi,()=>i`<div class="flex-auto flex items-center"><img-loader .src="${t.subject.image}" class="w-[3.25rem] h-[3.25rem] rounded-lg mr-4"></img-loader><div><p class="name truncate mb-0.5">${t.subject.name}</p>${d(t.subject.uri,()=>i`<a href="${t.subject.uri}" target="_blank"><span class="icon mt-1"><i class="mdi mdi-play-circle-outline text-lg opacity-80 hover_opacity-100"></i></span></a>`)}</div></div><div class="author flex-none text-right">${t.price}</div><div class="num flex-none font-light">${t.subject.supply}</div><div class="num flex-none font-light">${t.holding}</div>`,()=>i`${this.itemMobi(t)}`)}</div>`)}`)}</div>`}};g([f()],p.prototype,"acc",2);g([f()],p.prototype,"by",2);g([f()],p.prototype,"dir",2);g([c()],p.prototype,"uVotes",2);g([c()],p.prototype,"dialog",2);g([c()],p.prototype,"currentAlbum",2);g([c()],p.prototype,"pending",2);p=g([w("user-votes-list")],p);const F=".page{min-height:calc(100vh - var(--headerH) - var(--footerH) - 1rem)}.page-profile{display:flex gap-4}";var U=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,v=(t,s,l,a)=>{for(var e=a>1?void 0:a?Y(s,l):s,r=t.length-1,n;r>=0;r--)(n=t[r])&&(e=(a?n(s,l,e):n(e))||e);return a&&e&&U(s,l,e),e};const I=()=>({own:null,holding:null,rewards:null,claimed:null});let u=class extends _(F){constructor(){super(...arguments),this.bindBridge=new b(this,m),this.bindStore=new b(this,y),this.acc="",this.stat=I(),this.pending=!1,this.err="",this.inited=!1,this.fetch=async()=>{this.pending=!0;try{const{user:t}=await H(this.acc);this.user=t;const{address:s,socials:l=[],holding:a,rewardClaimed:e,subjectsCreated:r}=t,{uri:n}=l[0]??{};this.social=await E.fromUri(s,n),this.stat={...this.stat,own:r.length,holding:a,rewards:"",claimed:parseFloat((+P(e)).toFixed(4))}}catch(t){console.error(t)}finally{this.pending=!1,this.inited=!0}}}get account(){return m.bridge.account}get itsMe(){return this.acc==this.account}get loading(){return!this.inited&&this.pending}connectedCallback(){super.connectedCallback(),this.fetch(),x.on("block-world",this.fetch)}disconnectedCallback(){super.disconnectedCallback(),x.off("block-world",this.fetch)}render(){return i`<div class="page page-profile ui-container mx-auto pt-4 lg_pt-10"><div class="flex flex-col lg_flex-row gap-4 justify-between items-center"><div>${d(!this.inited&&!this.err,()=>i`${d(this.loading,()=>i`<div class="self-start lg_self-center"><loading-skeleton num="2"></loading-skeleton></div>`)}`,()=>{var t,s;return i`<div><div class="lg_min-h-6 text-base leading-6"><ui-address class="text-lg" .address="${(t=this.user)==null?void 0:t.address}" short avatar></ui-address></div><div class="lg_min-h-6 text-base leading-6">${d((s=this.social)==null?void 0:s.id,()=>{var l,a,e,r,n;return i`<span class="text-sm font-light middle-dot-divider">${(l=this.social)==null?void 0:l.name}<span class="ml-0.5"> ${d((a=this.social)==null?void 0:a.verified,()=>i`<i class="text-green-600 text-sm mdi mdi-check-decagram"></i>`)}</span> <span class="text-sm text-blue-300 font-light"><a href="${(e=this.social)==null?void 0:e.url}" target="_blank">${(r=this.social)!=null&&r.id?"@":""}${(n=this.social)==null?void 0:n.id}</a></span></span>`})}</div></div>`})}</div><div class="w-full lg_w-1/2 lg_h-32 grid grid-cols-4 lg_gap-4 divide-x divide-white/20 md_divide-x-0 items-center border-x border-white/20 lg_border-none"><div class="h-full lg_h-24 flex flex-col justify-center items-center lg_rounded-xl gapy-y-1 lg_gap-y-1.5 lg_bg-white/5"><span class="text-xs md_text-base text-gray-500">Create</span><div class="text-xl lg_text-2xl font-light">${this.ts?this.stat.own??0:"-"}</div></div><div class="h-full lg_h-24 flex flex-col justify-center items-center lg_rounded-xl gapy-y-1 lg_gap-y-1.5 lg_bg-white/5"><span class="text-xs md_text-base text-gray-500">Holding</span><div class="text-xl lg_text-2xl font-light">${this.ts?this.stat.holding??"0":"-"}</div></div><div class="h-full lg_h-24 flex flex-col justify-center items-center lg_rounded-xl gapy-y-1 lg_gap-y-1.5 lg_bg-white/5"><span class="text-xs md_text-base text-gray-500">Rewards</span><div class="text-xl lg_text-2xl font-light">${this.inited?y.totalHumanized?y.totalHumanized:"0":"-"}</div></div><div class="h-full lg_h-24 flex flex-col justify-center items-center lg_rounded-xl gapy-y-1 lg_gap-y-1.5 lg_bg-white/5"><span class="text-xs md_text-base text-gray-500">Claimed</span><div class="text-xl lg_text-2xl font-light">${this.stat.claimed??"-"}</div></div></div></div><div class="mt-6 lg_mt-14"><div class="w-full inline-flex pb-2 border-b border-slate-50/10"><div class="py-1.5 px-3 text-base font-normal text-white/70 rounded-md">Voted</div></div>${d(this.acc,()=>i`<user-votes-list by="id" .acc="${this.acc}"></user-votes-list>`)}</div></div>`}};v([f()],u.prototype,"acc",2);v([c()],u.prototype,"user",2);v([c()],u.prototype,"social",2);v([c()],u.prototype,"stat",2);v([c()],u.prototype,"pending",2);v([c()],u.prototype,"err",2);v([c()],u.prototype,"inited",2);u=v([w("profile-page")],u);export{u as ProfilePage};
