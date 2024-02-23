import{T as b,b as g,c as _,u as j,k as P,l as O,m as C}from"./index-Oxxj_WLT.js";import{c as w,x as l,n as p,f as V,k as c,a as v,b as f,e as m,$ as S,d as E,u as y}from"./vendor-f-QFt302.js";var A=Object.defineProperty,D=Object.getOwnPropertyDescriptor,d=(e,s,r,i)=>{for(var t=i>1?void 0:i?D(s,r):s,a=e.length-1,o;a>=0;a--)(o=e[a])&&(t=(i?o(s,r,t):o(t))||t);return i&&t&&A(s,r,t),t};const x=()=>({tx:""});let n=class extends b(""){constructor(){super(...arguments),this.bindBridge=new w(this,g),this.album="",this.url="",this.votes=0,this.price=0,this.tx=null,this.success=!1,this.pending=!1,this.rewards=!1,this.err=x(),this.resetState=()=>{this.err=x(),this.pending=!1,this.success=!1,this.price=0},this.close=async()=>{this.tx=null,this.resetState(),this.emit("close")},this.updateErr=(e={})=>this.err=Object.assign({},this.err,e)}connectedCallback(){super.connectedCallback(),this.getPrice()}async getPrice(){try{let e=await j(this.album,await _());this.votes=e,this.price=await P(this.album,this.votes)}catch(e){let s=e.message||e.code;this.updateErr({tx:s})}}async retreat(){this.pending=!0;try{this.tx=await O(this.album,this.votes),this.success=await this.tx.wait()}catch(e){let s=e.message||e.code;if(e.code===4001)return this.updateErr({tx:s}),this.close()}finally{this.pending=!1}}render(){return l`<ui-dialog @close="${()=>{this.close()}}"><p slot="header" class="my-2 font-bold">Retreat Subject</p><div class="grid place-items-center b-1 border m-4 p-4 rounded-md"><p class="w-36 h-36"><img-loader src="${this.url}"></img-loader></p>${p(!this.price,()=>l`<div class="my-4"><loading-skeleton num="3"></loading-skeleton><p class="my-4">Loading subject data...</p></div>`)} ${p(this.price&&!this.pending,()=>l`<p class="font-bold">Estimated returned value</p><p class="text-xl text-sky-500">${V(this.price)} FTM</p><p>Your Votes:${this.votes}</p><ui-button class="m-1" @click="${this.retreat}">RETREAT</ui-button>`)}${p(this.pending,()=>l`<tx-state .tx="${this.tx}" .opts="${{state:{success:"Success. Your retreat has been submitted."}}}"><ui-button slot="view" href="/">Close</ui-button></tx-state>`)}</div></ui-dialog>`}};d([v({type:String})],n.prototype,"album",2);d([v({type:String})],n.prototype,"url",2);d([v({type:Number})],n.prototype,"votes",2);d([c()],n.prototype,"price",2);d([c()],n.prototype,"tx",2);d([c()],n.prototype,"success",2);d([c()],n.prototype,"pending",2);d([c()],n.prototype,"rewards",2);d([c()],n.prototype,"err",2);n=d([f("retreat-vote-dialog")],n);const T=".ui-list .item{cursor:pointer;align-items:center}@media (min-width: 768px){.ui-list .name{font-size:1rem;line-height:1.5rem}}.ui-list .author{width:13rem;text-align:right}";var k=Object.defineProperty,L=Object.getOwnPropertyDescriptor,h=(e,s,r,i)=>{for(var t=i>1?void 0:i?L(s,r):s,a=e.length-1,o;a>=0;a--)(o=e[a])&&(t=(i?o(s,r,t):o(t))||t);return i&&t&&k(s,r,t),t};let u=class extends b(T){constructor(){super(...arguments),this.bindBridge=new w(this,g),this.by="",this.dir="",this.uVotes=[],this.dialog=!1,this.currentAlbum={id:"",votes:0,url:""},this.pending=!1,this.fetch=async()=>{if(!this.disabled){this.pending=!0;try{const e=await C("",{orderBy:this.by});this.uVotes=e}catch{}finally{this.pending=!1}}},this.close=()=>this.dialog=!1,this.go2=e=>{this.disabled?m.emit("connect-wallet"):S(`/track/${e.subject.id}`)}}get disabled(){return!g.bridge.account}getRandomInt(e){return Math.floor(Math.random()*e)}connectedCallback(){super.connectedCallback(),this.fetch(),g.bridge.subscribe(this.fetch),m.on("manual-change",this.fetch)}disconnectedCallback(){super.disconnectedCallback(),m.off("manual-change",this.fetch)}render(){return l`<div role="list" class="ui-list ${E(this.$c([this.pending?"loading":"hover"]))}"><div class="flex header border-bottom"><div class="flex-auto">Collection</div><div class="author flex-none w-32 text-right">Author</div><div class="num flex-none">Tickets</div><div class="num flex-none">Holding</div></div>${p(this.pending,()=>l`<div name="Loading" class="doc-intro"><div class="flex flex-col gap-8 m-6">${y([...Array(3).keys()],()=>l`<div name="Loading" class="doc-intro"><loading-skeleton num="4"></loading-skeleton></div>`)}</div></div>`,()=>l`${y(this.uVotes,e=>l`<div class="item flex items-center pr-0.5" @click="${()=>this.go2(e)}"><div class="flex-auto flex items-center"><img-loader .src="${e.subject.image}" class="w-[3.25rem] h-[3.25rem] rounded-lg mr-4"></img-loader><div><p class="name truncate mb-0.5">${e.subject.name}</p>${p(e.subject.uri,()=>l`<a href="${e.subject.uri}" target="_blank"><span class="icon mt-1"><i class="mdi mdi-play-circle-outline text-lg opacity-80 hover_opacity-100"></i></span></a>`)}</div></div><div class="author flex-none text-right"><ui-address .address="${e.subject.creator.address}" short avatar></ui-address></div><div class="num flex-none font-light">${e.subject.supply}</div><div class="num flex-none font-light">${e.holding}</div></div>`)}`)}</div>`}};h([v()],u.prototype,"by",2);h([v()],u.prototype,"dir",2);h([c()],u.prototype,"uVotes",2);h([c()],u.prototype,"dialog",2);h([c()],u.prototype,"currentAlbum",2);h([c()],u.prototype,"pending",2);u=h([f("user-votes-list")],u);const M="";var R=Object.defineProperty,B=Object.getOwnPropertyDescriptor,U=(e,s,r,i)=>{for(var t=i>1?void 0:i?B(s,r):s,a=e.length-1,o;a>=0;a--)(o=e[a])&&(t=(i?o(s,r,t):o(t))||t);return i&&t&&R(s,r,t),t};let $=class extends b(M){render(){return l`<div class="ui-pageview ui-container"><div class="ui-board"><div class="ui-board-header"><div class="ui-board-lead"><h5>My Votes</h5></div></div><user-votes-list by="id"></user-votes-list></div></div>`}};$=U([f("user-votes")],$);export{$ as ViewTop};