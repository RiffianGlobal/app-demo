import{T as b,b as f,o as g,k as $}from"./index-n11rZymH.js";import{m as x,U as v,x as o,n as m,f as _,J as d,j as h,l as y,I as w}from"./vendor-LU6Xwd_5.js";import"./dialog-MbA74CWL.js";import{u as C}from"./dashboard-47j4AgZ-.js";import"./async-replace-X6Yu9Hge.js";const M='.middle-dot-divider:after{content:"·";padding:0 .375rem;font-weight:600}';var O=Object.defineProperty,P=Object.getOwnPropertyDescriptor,r=(e,i,l,a)=>{for(var t=a>1?void 0:a?P(i,l):i,n=e.length-1,p;n>=0;n--)(p=e[n])&&(t=(a?p(i,l,t):p(t))||t);return a&&t&&O(i,l,t),t};const k=()=>({loading:"",tx:""});let s=class extends b(M){constructor(){super(...arguments),this.bindWallet=new x(this,f),this.bindTweets=new x(this,g),this.bindScreen=new x(this,v),this.weekly=!1,this.address="",this.retreatDisabled=!0,this.voteList=[],this.pending=!1,this.prompt=!1,this.dialog=!1,this.promptMessage="",this.err=k(),this.ts=0,this.updateErr=(e={})=>this.err=Object.assign({},this.err,e),this.init=async()=>{this.pending=!0;try{let e=await C(this.address);this.user=e.user,this.readFromTwitter()}catch(e){this.updateErr({load:e.message||e}),this.promptMessage=e,this.prompt=!0;return}finally{this.ts++,this.pending=!1}},this.close=()=>{this.dialog=!1,this.init()}}get isMobi(){return v.screen.isMobi}get disabled(){return!f.account}connectedCallback(){super.connectedCallback(),this.init()}getRandomInt(e){return Math.floor(Math.random()*e)}async readFromTwitter(){let{uri:e}=this.user.socials[0]??{};this.social=await g.fromUri(e,this.user.address)}render(){return o`<div class="mx-2 md_m-4 md_text-center">${m(!this.ts&&!this.err.loading,()=>o`<div name="Loading" class="doc-intro"><div class="flex flex-col gap-8 m-8"><loading-skeleton num="3"></loading-skeleton></div></div>`,()=>o`${m(this.prompt,()=>o`<p class="text-center text-orange-600">${this.promptMessage}</p>`,()=>{var e;return o`<div class="py-4"><ui-address class="text-lg" .address="${this.user.address}" short avatar></ui-address><div class="md_my-4">${m((e=this.social)==null?void 0:e.id,()=>{var i,l,a,t;return o`<span class="text-sm md_text-base font-light middle-dot-divider">${(i=this.social)==null?void 0:i.name}<span class="ml-0.5">${m((l=this.social)==null?void 0:l.verified,()=>o`<i class="text-green-600 text-sm mdi mdi-check-decagram"></i>`)}</span></span><span class="text-sm md_text-base font-light"> <a href="${(a=this.social)==null?void 0:a.url}" class="text-blue-300" target="_blank">@${(t=this.social)==null?void 0:t.id}</a></span>`})}</div><div class="mt-4 md_mt-0.5 divide-x divide-white/20 md_divide-x-0"><span class="text-white/70 ${this.isMobi?"pr-6 inline-flex flex-col items-center":"middle-dot-divider"}"><span class="text-xs md_text-base">Holding</span><span class="ml-1 text-xl md_text-base text-blue-300">${this.user.holding??"-"}</span></span> <span class="text-white/70 ${this.isMobi?"pl-6 inline-flex flex-col items-center":""}"><span class="text-xs md_text-base">Reward Claimed</span> <span class="ml-1 text-xl md_text-base text-blue-300">${this.user.rewardClaimed?parseFloat((+_(this.user.rewardClaimed)).toFixed(2)):"-"}</span></span></div></div>`})}`)}</div>`}};r([h({type:Boolean})],s.prototype,"weekly",2);r([h({type:String})],s.prototype,"address",2);r([h({type:Promise})],s.prototype,"votes",2);r([d()],s.prototype,"myVotes",2);r([d()],s.prototype,"retreatDisabled",2);r([d()],s.prototype,"social",2);r([d()],s.prototype,"user",2);r([d()],s.prototype,"voteList",2);r([d()],s.prototype,"pending",2);r([d()],s.prototype,"prompt",2);r([d()],s.prototype,"dialog",2);r([d()],s.prototype,"promptMessage",2);r([d()],s.prototype,"err",2);r([d()],s.prototype,"ts",2);s=r([y("user-detail")],s);const D="";var S=Object.defineProperty,T=Object.getOwnPropertyDescriptor,u=(e,i,l,a)=>{for(var t=a>1?void 0:a?T(i,l):i,n=e.length-1,p;n>=0;n--)(p=e[n])&&(t=(a?p(i,l,t):p(t))||t);return a&&t&&S(i,l,t),t};let c=class extends b(D){constructor(){super(...arguments),this.addr="",this.cate="",this.address="",this.renderList=()=>this.addr?this.cate==="uploaded"?o`<track-list .address="${this.address}"></track-list>`:o`<user-votes-list by="id" .acc="${this.address}"></user-votes-list>`:""}async connectedCallback(){super.connectedCallback(),this.address=await $.getAddress(this.addr)}render(){return this.address?o`<div class="ui-container mx-auto flex flex-col place-content-center md_pt-10"><user-dashboard .acc="${this.address}"></user-dashboard><div class="mt-6 lg_mt-14 w-full flex gap-8 px-2 pb-3 text-lg border-b border-slate-50/10"><ui-link nav href="${`/user/${this.addr}`}" exact dense>Voted</ui-link><ui-link nav href="${`/user/${this.addr}/uploaded`}" exact dense>Uploaded</ui-link></div>${w(this.cate,o`${this.renderList()}`)}</div>`:""}};u([h({type:String})],c.prototype,"addr",2);u([h({type:String})],c.prototype,"cate",2);u([d()],c.prototype,"address",2);c=u([y("user-page")],c);export{c as TrackPage};
