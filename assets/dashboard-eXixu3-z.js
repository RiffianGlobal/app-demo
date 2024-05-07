import{o as O,y as M,T as _,x as V,k as T,z as B,A as E,B as L,b as x,E as I,t as R,l as U,q as F,r as C,m as P,u as H}from"./index-G1yWYrvX.js";import{m as g,x as i,n as c,f as z,J as n,j as p,l as k,U as j,e as f,a2 as A,q as D,O as $,I as N}from"./vendor-smxJkvnK.js";import{h as Q}from"./async-replace-IIwg0rJk.js";import"./dialog-Kz7Y0uhC.js";const W=(e,t={})=>O("MediaBoard",J(e,t)),q=e=>O("MediaBoard",Y(e)),Y=e=>`{
  user ( id: "${e.toLowerCase()}" ) {
    address, holding, rewardClaimed
    socials {
      id, pid, uri, platform
    }
    subjectsCreated {
      id
    }
  }
}`,J=(e,{first:t=0,skip:r=0}={})=>`{
  user ( id: "${e.toLowerCase()}" ) {
    subjectsCreated(orderBy: supply, orderDirection: desc${t>0?`, first: ${t}`:""}${r>0?`, ${r}`:""}) {
      address, createdAt, name, image, uri
      fansNumber, supply, totalVoteValue
      volumeTotal, volumeRetreat, volumeVote, lastVoteAt
    }
  }
}`,G=async e=>{var r;const{subjectsCreated:t=[]}=((r=await W(e))==null?void 0:r.user)??{};return M(t),{subjects:t}},K=async e=>await q(e);var X=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,u=(e,t,r,a)=>{for(var s=a>1?void 0:a?Z(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(s=(a?l(t,r,s):l(s))||s);return a&&s&&X(t,r,s),s};const S=()=>({tx:""});let h=class extends _(""){constructor(){super(...arguments),this.bindBridge=new g(this,V),this.album="",this.url="",this.votes=0,this.price=0,this.tx=null,this.success=!1,this.pending=!1,this.rewards=!1,this.err=S(),this.resetState=()=>{this.err=S(),this.pending=!1,this.success=!1,this.price=0},this.close=async()=>{this.tx=null,this.resetState(),this.emit("close")},this.updateErr=(e={})=>this.err=Object.assign({},this.err,e)}connectedCallback(){super.connectedCallback(),this.getPrice()}async getPrice(){try{let e=await B(this.album,await T());this.votes=e,this.price=await E(this.album,this.votes)}catch(e){let t=e.message||e.code;this.updateErr({tx:t})}}async retreat(){this.pending=!0;try{this.tx=await L(this.album,this.votes),this.success=await this.tx.wait()}catch(e){let t=e.message||e.code;if(e.code===4001)return this.updateErr({tx:t}),this.close()}finally{this.pending=!1}}render(){return i`<ui-dialog @close="${()=>{this.close()}}"><p slot="header" class="my-2 font-bold">Retreat Subject</p><div class="grid place-items-center b-1 border m-4 p-4 rounded-md"><p class="w-36 h-36"><img-loader src="${this.url}"></img-loader></p>${c(!this.price,()=>i`<div class="my-4"><loading-skeleton num="3"></loading-skeleton><p class="my-4">Loading subject data...</p></div>`)} ${c(this.price&&!this.pending,()=>i`<p class="font-bold">Estimated returned value</p><p class="text-xl text-sky-500">${z(this.price)} FTM</p><p>Your Votes:${this.votes}</p><ui-button class="m-1" @click="${this.retreat}">RETREAT</ui-button>`)}${c(this.pending,()=>i`<tx-state .tx="${this.tx}" .opts="${{state:{success:"Success. Your retreat has been submitted."}}}"><ui-button slot="view" href="/">Close</ui-button></tx-state>`)}</div></ui-dialog>`}};u([p({type:String})],h.prototype,"album",2);u([p({type:String})],h.prototype,"url",2);u([p({type:Number})],h.prototype,"votes",2);u([n()],h.prototype,"price",2);u([n()],h.prototype,"tx",2);u([n()],h.prototype,"success",2);u([n()],h.prototype,"pending",2);u([n()],h.prototype,"rewards",2);u([n()],h.prototype,"err",2);h=u([k("retreat-vote-dialog")],h);const ee=".subject-name{width:100%;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 1024px){.subject-name{max-width:10rem;font-size:1rem;line-height:1.5rem}}.subject-play{position:absolute;padding:.5rem;font-size:1.875rem;line-height:2.25rem;line-height:1;color:#fff6;--tw-drop-shadow: drop-shadow(0 25px 25px rgba(0, 0, 0, .15));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) drop-shadow(0 25px 25px rgba(0,0,0,.15));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.subject-play:hover{--tw-text-opacity: 1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}.subject-intro{display:flex;flex:1 1 auto;flex-grow:1}.subject-intro .subject-minor{padding-bottom:.25rem;font-size:.75rem;line-height:1rem;color:#9ca3afcc}.subject-intro-cnt{display:flex;flex-direction:column;justify-content:center;gap:.125rem;line-height:1}.subject-cover{position:relative;margin-right:1rem;display:inline-flex;height:3.5rem;width:3.5rem;align-items:center;justify-content:center;overflow:hidden;border-radius:.5rem}.subject-brief{display:flex;width:100%;cursor:pointer;align-items:center;font-size:.875rem;line-height:1.25rem;gap:.625rem}@media (min-width: 1024px){.subject-brief{gap:1rem}}.subject-brief .subject-name{max-width:10rem}@media (min-width: 768px){.subject-brief .subject-name{max-width:20rem}}@media (min-width: 1024px){.subject-brief .subject-name{max-width:28rem}}@media (min-width: 1280px){.subject-brief .subject-name{max-width:32rem}}@media (min-width: 1536px){.subject-brief .subject-name{max-width:36rem}}.subject-brief.dense .subject-name{max-width:13rem}@media (min-width: 1280px){.subject-brief.dense .subject-name{max-width:18rem}}.subject-brief.sm .subject-intro-cnt{gap:0px}.subject-brief.sm .subject-name{font-size:.75rem;line-height:1rem}@media (min-width: 768px){.subject-brief.sm .subject-name{max-width:6rem}}@media (min-width: 1024px){.subject-brief.sm .subject-name{max-width:10rem}}.subject-brief.sm .subject-cover{margin-right:.5rem;height:2rem;width:2rem}.subject-brief.sm .subject-play{display:none}.subject-brief.sm .subject-minor{padding-bottom:0;font-size:11px!important}.subject-rank{width:2rem;text-align:center;font-size:.875rem;line-height:1.25rem;font-weight:300;opacity:.7}.subject-rank.hot{width:3rem;padding-left:.375rem;text-align:left}";var te=Object.defineProperty,se=Object.getOwnPropertyDescriptor,w=(e,t,r,a)=>{for(var s=a>1?void 0:a?se(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(s=(a?l(t,r,s):l(s))||s);return a&&s&&te(t,r,s),s};let b=class extends _(ee){constructor(){super(...arguments),this.bindWallet=new g(this,x),this.bindScreen=new g(this,j),this.by="",this.dir="",this.subjects=[],this.dialog=!1,this.currentAlbum={id:"",votes:0,url:""},this.pending=!1,this.fetch=async()=>{if(!this.disabled){this.pending=!0;try{const{subjects:e}=await I(this.acc,{orderBy:this.by});this.subjects=e}catch(e){console.log(e)}finally{this.pending=!1}}},this.close=()=>this.dialog=!1,this.go2=e=>{this.disabled?f.emit("connect-wallet"):A(`/track/${e.id}`)}}get isMobi(){return j.isMobi}get disabled(){return!x.account}getRandomInt(e){return Math.floor(Math.random()*e)}connectedCallback(){super.connectedCallback(),this.fetch(),f.on("block-world",this.fetch)}disconnectedCallback(){super.disconnectedCallback(),f.off("block-world",this.fetch)}render(){return i`<div role="list" class="ui-list py-4 md_py-6 ${D(this.$c([this.pending?"loading":"hover"]))}">${c(!this.isMobi,()=>i`<div class="flex header"><div class="subject-intro">Collection</div><div class="num">Price</div><div class="num">Tickets</div><div class="num">Holding</div></div>`)} ${c(this.pending,()=>i`<div name="Loading" class="doc-intro"><div class="flex flex-col gap-8 m-6">${$([...Array(3).keys()],()=>i`<div name="Loading" class="doc-intro"><loading-skeleton num="4"></loading-skeleton></div>`)}</div></div>`,()=>i`${$(this.subjects,(e,t)=>i`<div class="isubject-brief" @click="${()=>this.go2(e)}"><div class="subject-intro"><div class="subject-cover"><img-loader src="${e.cooked.src}" class="rounded-lg"></img-loader>${c(e.cooked.src,()=>i`<i class="subject-play mdi mdi-play-circle"></i>`)}</div><div class="subject-intro-cnt"><p class="subject-name">${e.name}</p><p class="subject-minor"><ui-address .address="${e.cooked.address}" short doid></ui-address></p></div></div>${c(this.isMobi,()=>i`<div class="subject-intro-cnt num num2 truncate"><span class="subject-line1">${e.holding}</span> <span class="block pt-0.5 text-xs">${e.supply}<span class="text-gray-300/60 ml-1">tickets</span></span></div>`,()=>i`<p class="num date">${e.cooked.price}</p><p class="num">${e.supply}</p><p class="num">${e.holding}</p>`)}</div>`)}`)}</div>`}};w([p()],b.prototype,"acc",2);w([p()],b.prototype,"by",2);w([p()],b.prototype,"dir",2);w([n()],b.prototype,"subjects",2);w([n()],b.prototype,"dialog",2);w([n()],b.prototype,"currentAlbum",2);w([n()],b.prototype,"pending",2);b=w([k("user-votes-list")],b);const ie=".subject-name{width:100%;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 1024px){.subject-name{max-width:10rem;font-size:1rem;line-height:1.5rem}}.subject-play{position:absolute;padding:.5rem;font-size:1.875rem;line-height:2.25rem;line-height:1;color:#fff6;--tw-drop-shadow: drop-shadow(0 25px 25px rgba(0, 0, 0, .15));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) drop-shadow(0 25px 25px rgba(0,0,0,.15));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.subject-play:hover{--tw-text-opacity: 1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}.subject-intro{display:flex;flex:1 1 auto;flex-grow:1}.subject-intro .subject-minor{padding-bottom:.25rem;font-size:.75rem;line-height:1rem;color:#9ca3afcc}.subject-intro-cnt{display:flex;flex-direction:column;justify-content:center;gap:.125rem;line-height:1}.subject-cover{position:relative;margin-right:1rem;display:inline-flex;height:3.5rem;width:3.5rem;align-items:center;justify-content:center;overflow:hidden;border-radius:.5rem}.subject-brief{display:flex;width:100%;cursor:pointer;align-items:center;font-size:.875rem;line-height:1.25rem;gap:.625rem}@media (min-width: 1024px){.subject-brief{gap:1rem}}.subject-brief .subject-name{max-width:10rem}@media (min-width: 768px){.subject-brief .subject-name{max-width:20rem}}@media (min-width: 1024px){.subject-brief .subject-name{max-width:28rem}}@media (min-width: 1280px){.subject-brief .subject-name{max-width:32rem}}@media (min-width: 1536px){.subject-brief .subject-name{max-width:36rem}}.subject-brief.dense .subject-name{max-width:13rem}@media (min-width: 1280px){.subject-brief.dense .subject-name{max-width:18rem}}.subject-brief.sm .subject-intro-cnt{gap:0px}.subject-brief.sm .subject-name{font-size:.75rem;line-height:1rem}@media (min-width: 768px){.subject-brief.sm .subject-name{max-width:6rem}}@media (min-width: 1024px){.subject-brief.sm .subject-name{max-width:10rem}}.subject-brief.sm .subject-cover{margin-right:.5rem;height:2rem;width:2rem}.subject-brief.sm .subject-play{display:none}.subject-brief.sm .subject-minor{padding-bottom:0;font-size:11px!important}.subject-rank{width:2rem;text-align:center;font-size:.875rem;line-height:1.25rem;font-weight:300;opacity:.7}.subject-rank.hot{width:3rem;padding-left:.375rem;text-align:left}";var re=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,y=(e,t,r,a)=>{for(var s=a>1?void 0:a?ae(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(s=(a?l(t,r,s):l(s))||s);return a&&s&&re(t,r,s),s};let v=class extends _(ie){constructor(){super(...arguments),this.bindWallet=new g(this,x),this.bindScreen=new g(this,j),this.weekly=!1,this.address="",this.subjects=[],this.pending=!1,this.err="",this.ts=0,this.go2=e=>{this.disabled?f.emit("connect-wallet"):A(`/track/${e.address}`)},this.timeAgo=async function*(e){for(;;)yield R(e),await new Promise(t=>setTimeout(t,1e3))},this.init=async()=>{this.pending=!0;try{const{subjects:e}=await G(this.address);this.subjects=e}catch(e){this.err=e.message||e.msg||e,U.add({summary:"Fetch failed",detail:this.err})}finally{this.pending=!1,this.ts++}},this.listen=F(this.init)}get isMobi(){return j.screen.isMobi}get disabled(){return!x.account}async connectedCallback(){super.connectedCallback(),await this.init(),f.on("block-world",this.listen)}disconnectedCallback(){super.disconnectedCallback(),f.off("block-world",this.listen)}render(){return i`<div role="list" class="ui-list py-4 md_py-6 ${D(this.$c([this.pending?"loading":"hover"]))}">${c(!this.isMobi,()=>i`<div class="flex header"><div class="subject-intro">Collection</div><div class="num date">Uploaded Time</div><div class="num">Voters</div><div class="num">Tickets</div><div class="num num2">Vote Value</div></div>`)} ${c(!this.ts&&!this.subjects.length,()=>i`<div name="Loading" class="doc-intro"><div class="flex flex-col gap-8 m-6">${$([...Array(3).keys()],()=>i`<div name="Loading" class="doc-intro"><loading-skeleton num="4"></loading-skeleton></div>`)}</div></div>`,()=>i`${$(this.subjects,(e,t)=>i`<div class="subject-brief" @click="${()=>this.go2(e)}"><div class="subject-intro"><div class="subject-cover"><img-loader src="${e.cooked.src}" class="rounded-lg"></img-loader>${c(e.cooked.src,()=>i`<i class="subject-play mdi mdi-play-circle"></i>`)}</div><div class="subject-intro-cnt"><p class="subject-name">${e.name}</p><p class="subject-minor">${c(this.isMobi,()=>i`<span class="block pt-1">${Q(this.timeAgo(e.createdAt))}</span>`,()=>i`<span class="mr-1 text-xs opacity-80">Price:</span>${e.cooked.price}`)}</p></div></div>${c(this.isMobi,()=>i`<div class="subject-intro-cnt num num2 truncate"><span class="subject-line1">${e.cooked.total}</span> <span class="block pt-0.5 text-xs">${e.cooked.price}<span class="text-gray-300/60 ml-1">tickets</span></span></div>`,()=>i`<p class="num date">${e.cooked.date}</p><p class="num">${e.fansNumber}</p><p class="num">${e.cooked.price}</p><p class="num num2">${e.cooked.total}</p>`)}</div>`)}`)}</div>`}};y([p({type:Boolean})],v.prototype,"weekly",2);y([p({type:String})],v.prototype,"address",2);y([n()],v.prototype,"subjects",2);y([n()],v.prototype,"pending",2);y([n()],v.prototype,"err",2);y([n()],v.prototype,"ts",2);v=y([k("track-list")],v);const ne='.middle-dot-divider:after{content:"·";padding:0 .375rem;font-weight:600}';var oe=Object.defineProperty,le=Object.getOwnPropertyDescriptor,m=(e,t,r,a)=>{for(var s=a>1?void 0:a?le(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(s=(a?l(t,r,s):l(s))||s);return a&&s&&oe(t,r,s),s};const ce=()=>({own:null,holding:null,rewards:null,claimed:null});let d=class extends _(ne){constructor(){super(...arguments),this.bindWallet=new g(this,x),this.bindReward=new g(this,C),this.bindDOID=new g(this,P),this.acc="",this.cate="",this.self=!1,this.user=null,this.stat=ce(),this.pending=!1,this.err="",this.inited=!1,this.address="",this.fetch=async()=>{this.pending=!0;try{this.address=await P.getAddress(this.account)??"";const{user:e}=await K(this.address);this.user=e;const{socials:t=[],holding:r,rewardClaimed:a,subjectsCreated:s}=e,{uri:o}=t[0]??{};this.social=await H.fromUri(o,this.address),this.stat={...this.stat,own:s.length,holding:r,rewards:"",claimed:parseFloat((+z(a)).toFixed(2))}}catch{this.user=null}this.pending=!1,this.inited=!0}}get account(){return this.self?x.account:this.acc}get itsMe(){return x.account==this.account}get loading(){return!this.inited&&this.pending}get key(){return this.account+this.cate}async connectedCallback(){super.connectedCallback(),await this.fetch(),f.on("block-world",this.fetch)}disconnectedCallback(){super.disconnectedCallback(),f.off("block-world",this.fetch)}render(){return i`${N(this.key,i`<div class="py-2 lg_py-0 flex flex-col lg_flex-row gap-4 justify-between items-center"><div>${c(!this.inited&&!this.err,()=>i`${c(this.loading,()=>i`<div class="self-start lg_self-center"><loading-skeleton num="2"></loading-skeleton></div>`)}`,()=>{var e;return i`<div class="flex flex-col items-center lg_items-start leading-none"><div class="lg_min-h-6 text-lg"><ui-address class="text-lg" .address="${this.address}" short></ui-address></div><div class="flex items-center lg_min-h-6 text-sm font-light">${c((e=this.social)==null?void 0:e.id,()=>{var t,r,a,s;return i`<span class="font-light"><span class="middle-dot-divider">${(t=this.social)==null?void 0:t.name}</span><ui-link href="${(r=this.social)==null?void 0:r.url}">${(a=this.social)!=null&&a.id?"@":""}${(s=this.social)==null?void 0:s.id}</ui-link></span>`})}</div></div>`})}</div><div class="w-full lg_w-1/2 lg_h-32 grid grid-cols-4 lg_gap-4 divide-x divide-white/20 md_divide-x-0 items-center border-x border-white/20 lg_border-none"><div class="h-full lg_h-24 flex flex-col justify-center items-center lg_rounded-xl gapy-y-1 lg_gap-y-1.5 lg_bg-white/5"><span class="text-xs md_text-base text-gray-500">Upload</span><div class="text-xl lg_text-2xl font-light">${this.inited?this.stat.own??0:"-"}</div></div><div class="h-full lg_h-24 flex flex-col justify-center items-center lg_rounded-xl gapy-y-1 lg_gap-y-1.5 lg_bg-white/5"><span class="text-xs md_text-base text-gray-500">Holding</span><div class="text-xl lg_text-2xl font-light">${this.inited?this.stat.holding??"0":"-"}</div></div><div class="h-full lg_h-24 flex flex-col justify-center items-center lg_rounded-xl gapy-y-1 lg_gap-y-1.5 lg_bg-white/5"><span class="text-xs md_text-base text-gray-500">Rewards</span><div class="text-xl lg_text-2xl font-light">${this.inited?C.totalHumanized?C.totalHumanized:"0":"-"}</div></div><div class="h-full lg_h-24 flex flex-col justify-center items-center lg_rounded-xl gapy-y-1 lg_gap-y-1.5 lg_bg-white/5"><span class="text-xs md_text-base text-gray-500">Claimed</span><div class="text-xl lg_text-2xl font-light">${this.stat.claimed??"-"}</div></div></div></div>`)}`}};m([p({type:String})],d.prototype,"acc",2);m([p({type:String})],d.prototype,"cate",2);m([p({type:Boolean})],d.prototype,"self",2);m([n()],d.prototype,"user",2);m([n()],d.prototype,"social",2);m([n()],d.prototype,"stat",2);m([n()],d.prototype,"pending",2);m([n()],d.prototype,"err",2);m([n()],d.prototype,"inited",2);m([n()],d.prototype,"address",2);d=m([k("user-dashboard")],d);export{K as u};
