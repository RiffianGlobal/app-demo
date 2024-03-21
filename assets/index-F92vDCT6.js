import{T as w,p as k,i as S,u as O,s as V,v as M,w as b,x as E,r as y,l as D}from"./index-g4n1USL6.js";import{m as x,x as i,n as c,f as P,I as n,j as f,l as _,Q as $,e as m,a1 as A,q as H,N as j}from"./vendor-btwIW55d.js";import{u as R}from"./action-YsASyLAs.js";var T=Object.defineProperty,L=Object.getOwnPropertyDescriptor,h=(t,s,l,a)=>{for(var e=a>1?void 0:a?L(s,l):s,r=t.length-1,o;r>=0;r--)(o=t[r])&&(e=(a?o(s,l,e):o(e))||e);return a&&e&&T(s,l,e),e};const C=()=>({tx:""});let d=class extends w(""){constructor(){super(...arguments),this.bindBridge=new x(this,k),this.album="",this.url="",this.votes=0,this.price=0,this.tx=null,this.success=!1,this.pending=!1,this.rewards=!1,this.err=C(),this.resetState=()=>{this.err=C(),this.pending=!1,this.success=!1,this.price=0},this.close=async()=>{this.tx=null,this.resetState(),this.emit("close")},this.updateErr=(t={})=>this.err=Object.assign({},this.err,t)}connectedCallback(){super.connectedCallback(),this.getPrice()}async getPrice(){try{let t=await O(this.album,await S());this.votes=t,this.price=await V(this.album,this.votes)}catch(t){let s=t.message||t.code;this.updateErr({tx:s})}}async retreat(){this.pending=!0;try{this.tx=await M(this.album,this.votes),this.success=await this.tx.wait()}catch(t){let s=t.message||t.code;if(t.code===4001)return this.updateErr({tx:s}),this.close()}finally{this.pending=!1}}render(){return i`<ui-dialog @close="${()=>{this.close()}}"><p slot="header" class="my-2 font-bold">Retreat Subject</p><div class="grid place-items-center b-1 border m-4 p-4 rounded-md"><p class="w-36 h-36"><img-loader src="${this.url}"></img-loader></p>${c(!this.price,()=>i`<div class="my-4"><loading-skeleton num="3"></loading-skeleton><p class="my-4">Loading subject data...</p></div>`)} ${c(this.price&&!this.pending,()=>i`<p class="font-bold">Estimated returned value</p><p class="text-xl text-sky-500">${P(this.price)} FTM</p><p>Your Votes:${this.votes}</p><ui-button class="m-1" @click="${this.retreat}">RETREAT</ui-button>`)}${c(this.pending,()=>i`<tx-state .tx="${this.tx}" .opts="${{state:{success:"Success. Your retreat has been submitted."}}}"><ui-button slot="view" href="/">Close</ui-button></tx-state>`)}</div></ui-dialog>`}};h([f({type:String})],d.prototype,"album",2);h([f({type:String})],d.prototype,"url",2);h([f({type:Number})],d.prototype,"votes",2);h([n()],d.prototype,"price",2);h([n()],d.prototype,"tx",2);h([n()],d.prototype,"success",2);h([n()],d.prototype,"pending",2);h([n()],d.prototype,"rewards",2);h([n()],d.prototype,"err",2);d=h([_("retreat-vote-dialog")],d);const U=".ui-list .item{cursor:pointer;align-items:center}@media (min-width: 768px){.ui-list .name{font-size:1rem;line-height:1.5rem}}.ui-list .author{width:13rem;text-align:right}";var z=Object.defineProperty,F=Object.getOwnPropertyDescriptor,g=(t,s,l,a)=>{for(var e=a>1?void 0:a?F(s,l):s,r=t.length-1,o;r>=0;r--)(o=t[r])&&(e=(a?o(s,l,e):o(e))||e);return a&&e&&z(s,l,e),e};let p=class extends w(U){constructor(){super(...arguments),this.bindWallet=new x(this,b),this.bindScreen=new x(this,$),this.by="",this.dir="",this.uVotes=[],this.dialog=!1,this.currentAlbum={id:"",votes:0,url:""},this.pending=!1,this.fetch=async()=>{if(!this.disabled){this.pending=!0;try{const t=await E(this.acc,{orderBy:this.by});this.uVotes=t.map(s=>({...s,price:(+s.subject.supply+1)/10}))}catch{}finally{this.pending=!1}}},this.close=()=>this.dialog=!1,this.go2=t=>{this.disabled?m.emit("connect-wallet"):A(`/track/${t.subject.id}`)},this.itemMobi=t=>i`<div class="w-full overflow-hidden flex gap-x-2"><div class="w-[3.25rem] h-[3.25rem] mr-2 rounded-lg"><img-loader src="${t.subject.image}" class="w-[3.25rem] rounded-lg"></img-loader></div><div class="flex-auto flex flex-col"><div class="flex truncate items-center"><p class="truncate">${t.subject.name}</p><a href="${t.subject.uri}" class="flex-none ml-1.5" target="_blank"><i class="text-lg mdi mdi-play-circle-outline"></i></a></div><div class="mt-0.5 text-xs opacity-80"><ui-address .address="${t.subject.creator.address}" short avatar></ui-address></div></div><div class="num justify-center self-center"><div class="text-sm">${t.subject.supply}</div><span class="text-xs opacity-80 text-gray-300/60">tickets</span></div></div>`}get isMobi(){return $.screen.isMobi}get disabled(){return!b.account}getRandomInt(t){return Math.floor(Math.random()*t)}connectedCallback(){super.connectedCallback(),this.fetch(),m.on("block-world",this.fetch)}disconnectedCallback(){super.disconnectedCallback(),m.off("block-world",this.fetch)}render(){return i`<div role="list" class="ui-list py-4 md_py-6 ${H(this.$c([this.pending?"loading":"hover"]))}">${c(!this.isMobi,()=>i`<div class="flex header"><div class="flex-auto">Collection</div><div class="author flex-none w-32 text-right">Price</div><div class="num flex-none">Tickets</div><div class="num flex-none">Holding</div></div>`)} ${c(this.pending,()=>i`<div name="Loading" class="doc-intro"><div class="flex flex-col gap-8 m-6">${j([...Array(3).keys()],()=>i`<div name="Loading" class="doc-intro"><loading-skeleton num="4"></loading-skeleton></div>`)}</div></div>`,()=>i`${j(this.uVotes,t=>i`<div class="item flex items-center pr-0.5" @click="${()=>this.go2(t)}">${c(!this.isMobi,()=>i`<div class="flex-auto flex items-center"><img-loader .src="${t.subject.image}" class="w-[3.25rem] h-[3.25rem] rounded-lg mr-4"></img-loader><div><p class="name truncate mb-0.5">${t.subject.name}</p>${c(t.subject.uri,()=>i`<a href="${t.subject.uri}" target="_blank"><span class="icon mt-1"><i class="mdi mdi-play-circle-outline text-lg opacity-80 hover_opacity-100"></i></span></a>`)}</div></div><div class="author flex-none text-right">${t.price}</div><div class="num flex-none font-light">${t.subject.supply}</div><div class="num flex-none font-light">${t.holding}</div>`,()=>i`${this.itemMobi(t)}`)}</div>`)}`)}</div>`}};g([f()],p.prototype,"acc",2);g([f()],p.prototype,"by",2);g([f()],p.prototype,"dir",2);g([n()],p.prototype,"uVotes",2);g([n()],p.prototype,"dialog",2);g([n()],p.prototype,"currentAlbum",2);g([n()],p.prototype,"pending",2);p=g([_("user-votes-list")],p);const I=".page{min-height:calc(100vh - var(--headerH) - var(--footerH) - 1rem)}.page-profile{display:flex gap-4}";var B=Object.defineProperty,N=Object.getOwnPropertyDescriptor,v=(t,s,l,a)=>{for(var e=a>1?void 0:a?N(s,l):s,r=t.length-1,o;r>=0;r--)(o=t[r])&&(e=(a?o(s,l,e):o(e))||e);return a&&e&&B(s,l,e),e};const W=()=>({own:null,holding:null,rewards:null,claimed:null});let u=class extends w(I){constructor(){super(...arguments),this.bindWallet=new x(this,b),this.bindReward=new x(this,y),this.acc="",this.stat=W(),this.pending=!1,this.err="",this.inited=!1,this.fetch=async()=>{this.pending=!0;try{const{user:t}=await R(this.account);this.user=t;const{address:s,socials:l=[],holding:a,rewardClaimed:e,subjectsCreated:r}=t,{uri:o}=l[0]??{};this.social=await D.fromUri(s,o),this.stat={...this.stat,own:r.length,holding:a,rewards:"",claimed:parseFloat((+P(e)).toFixed(2))}}catch(t){console.error(t)}finally{this.pending=!1,this.inited=!0}}}get account(){return this.acc||b.account}get itsMe(){return this.acc==this.account}get loading(){return!this.inited&&this.pending}connectedCallback(){super.connectedCallback(),this.fetch(),m.on("block-world",this.fetch)}disconnectedCallback(){super.disconnectedCallback(),m.off("block-world",this.fetch)}render(){return i`<div class="page page-profile ui-container mx-auto pt-4 lg_pt-10"><div class="flex flex-col lg_flex-row gap-4 justify-between items-center"><div>${c(!this.inited&&!this.err,()=>i`${c(this.loading,()=>i`<div class="self-start lg_self-center"><loading-skeleton num="2"></loading-skeleton></div>`)}`,()=>{var t,s;return i`<div><div class="lg_min-h-6 text-base leading-6"><ui-address class="text-lg" .address="${(t=this.user)==null?void 0:t.address}" short avatar></ui-address></div><div class="lg_min-h-6 text-base leading-6">${c((s=this.social)==null?void 0:s.id,()=>{var l,a,e,r,o;return i`<span class="text-sm font-light middle-dot-divider">${(l=this.social)==null?void 0:l.name}<span class="ml-0.5"> ${c((a=this.social)==null?void 0:a.verified,()=>i`<i class="text-green-600 text-sm mdi mdi-check-decagram"></i>`)}</span> <span class="text-sm text-blue-300 font-light"><a href="${(e=this.social)==null?void 0:e.url}" target="_blank">${(r=this.social)!=null&&r.id?"@":""}${(o=this.social)==null?void 0:o.id}</a></span></span>`})}</div></div>`})}</div><div class="w-full lg_w-1/2 lg_h-32 grid grid-cols-4 lg_gap-4 divide-x divide-white/20 md_divide-x-0 items-center border-x border-white/20 lg_border-none"><div class="h-full lg_h-24 flex flex-col justify-center items-center lg_rounded-xl gapy-y-1 lg_gap-y-1.5 lg_bg-white/5"><span class="text-xs md_text-base text-gray-500">Upload</span><div class="text-xl lg_text-2xl font-light">${this.inited?this.stat.own??0:"-"}</div></div><div class="h-full lg_h-24 flex flex-col justify-center items-center lg_rounded-xl gapy-y-1 lg_gap-y-1.5 lg_bg-white/5"><span class="text-xs md_text-base text-gray-500">Holding</span><div class="text-xl lg_text-2xl font-light">${this.inited?this.stat.holding??"0":"-"}</div></div><div class="h-full lg_h-24 flex flex-col justify-center items-center lg_rounded-xl gapy-y-1 lg_gap-y-1.5 lg_bg-white/5"><span class="text-xs md_text-base text-gray-500">Rewards</span><div class="text-xl lg_text-2xl font-light">${this.inited?y.totalHumanized?y.totalHumanized:"0":"-"}</div></div><div class="h-full lg_h-24 flex flex-col justify-center items-center lg_rounded-xl gapy-y-1 lg_gap-y-1.5 lg_bg-white/5"><span class="text-xs md_text-base text-gray-500">Claimed</span><div class="text-xl lg_text-2xl font-light">${this.stat.claimed??"-"}</div></div></div></div><div class="mt-6 lg_mt-14"><div class="w-full inline-flex pb-2 border-b border-slate-50/10"><div class="py-1.5 px-3 text-base font-normal text-white/70 rounded-md">Voted</div></div>${c(this.account,()=>i`<user-votes-list by="id" .acc="${this.account}"></user-votes-list>`)}</div></div>`}};v([f()],u.prototype,"acc",2);v([n()],u.prototype,"user",2);v([n()],u.prototype,"social",2);v([n()],u.prototype,"stat",2);v([n()],u.prototype,"pending",2);v([n()],u.prototype,"err",2);v([n()],u.prototype,"inited",2);u=v([_("profile-page")],u);export{u as ProfilePage};
