import{g as $,T as x,b as v,t as C,f as b}from"./index-TnptE4cu.js";import{c as g,e as P,X as L,f as k,x as o,d as O,n as m,u as w,k as d,a as u,b as y}from"./vendor-Yy_wTTXu.js";import"./dialog-NcrtzxFX.js";import"./action-vKdIsp-5.js";const V=(t,e={})=>$("MediaBoard",D(t,e)),T=t=>$("MediaBoard",j(t)),j=t=>`{
  user(id: "${t}") {
    address, holding, rewardClaimed
    socials {
      id, pid, uri, platform
    }
  }
}`,D=(t,{first:e=0,skip:i=0}={})=>`{
  user(id: "${t}") {
    subjectsCreated(orderBy: supply, orderDirection: desc${e>0?`, first: ${e}`:""}${i>0?`, ${i}`:""}) {
      address, createdAt, name, image, uri
      fansNumber, supply, totalVoteValue
      volumeTotal, volumeRetreat, volumeVote, lastVoteAt
    }
  }
}`,B=async t=>await V(t),M=async t=>await T(t),S="li.header{margin-bottom:.75rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:#a3a3a3;color:rgba(163,163,163,var(--tw-text-opacity))}li.item:hover{background-color:#ffffff0d}@media (min-width: 500px){.name{font-size:1rem;line-height:1.5rem}}.icon{font-size:1.5rem;line-height:2rem}@media (max-width: 500px){.icon{font-size:1.5rem;line-height:2rem}}";var I=Object.defineProperty,z=Object.getOwnPropertyDescriptor,h=(t,e,i,a)=>{for(var s=a>1?void 0:a?z(e,i):e,n=t.length-1,c;n>=0;n--)(c=t[n])&&(s=(a?c(e,i,s):c(s))||s);return a&&s&&I(e,i,s),s};let p=class extends x(S){constructor(){super(...arguments),this.bindBridge=new g(this,v),this.weekly=!1,this.address="",this.trackList=[],this.pending=!1,this.err="",this.ts=0,this.go2=t=>{this.disabled?P.emit("connect-wallet"):L(`/track/${t.address}`)},this.init=async()=>{this.pending=!0;try{let{user:{subjectsCreated:t}}=await B(this.address);this.trackList=t.map(e=>{const{totalVoteValue:i}=e;return{...e,totalVal:k(i)}})}catch(t){this.err=t.message||t.msg||t,C.add({summary:"Fetch failed",detail:this.err})}finally{this.pending=!1,this.ts++}}}get disabled(){return!v.bridge.account}connectedCallback(){super.connectedCallback(),this.init()}render(){return o`<div role="list" class="ui-list py-6 ${O(this.$c([this.pending?"loading":"hover"]))}"><div class="flex header"><div class="w-16">Index</div><div class="flex-auto">Name</div><div class="flex-none w-40">Created</div><div class="flex-none w-20 text-right">Voters</div><div class="flex-none w-24 text-right">Tickets</div><div class="flex-none w-24 text-right">Vote Value</div></div>${m(!this.ts&&!this.trackList.length,()=>o`<div name="Loading" class="doc-intro"><div class="flex flex-col gap-8 m-6">${w([...Array(3).keys()],()=>o`<div name="Loading" class="doc-intro"><loading-skeleton num="4"></loading-skeleton></div>`)}</div></div>`,()=>o`${w(this.trackList,(t,e)=>o`<div class="item flex py-2 pr-2 items-center cursor-pointer" @click="${()=>this.go2(t)}"><div class="flex-none w-16 pl-4 text-sm font-light opacity-75">${e+1} ${m(this.trackList.length>3&&e<3,()=>o`<i class="mdi mdi-fire text-red-400"></i>`)}</div><div class="flex-auto flex"><div class="w-[3.25rem] h-[3.25rem] mr-4 rounded-lg"><img-loader src="${t.image}" class="rounded-lg"></img-loader></div><div><p class="name truncate">${t.name}</p><span class="icon mt-1"><i class="mdi mdi-play-circle-outline"></i></span></div></div><div class="flex-none w-40 text-xs text-gray-300/60">${new Date(t.createdAt*1e3).toLocaleString()}</div><div class="flex-none w-20 text-right text-sm"><p class="num truncate mt-2">${t.fansNumber}</p></div><div class="flex-none w-24 text-right text-sm"><p class="num truncate mt-2">${t.supply}</p></div><div class="flex-none w-24 text-right text-sm"><p class="num truncate mt-2">${t.totalVal}</p></div></div>`)}`)}</div>`}};h([u({type:Boolean})],p.prototype,"weekly",2);h([u({type:String})],p.prototype,"address",2);h([d()],p.prototype,"trackList",2);h([d()],p.prototype,"pending",2);h([d()],p.prototype,"err",2);h([d()],p.prototype,"ts",2);p=h([y("track-list")],p);const A='.middle-dot-divider:after{content:"·";padding:0 .375rem;font-weight:600}';var E=Object.defineProperty,F=Object.getOwnPropertyDescriptor,l=(t,e,i,a)=>{for(var s=a>1?void 0:a?F(e,i):e,n=t.length-1,c;n>=0;n--)(c=t[n])&&(s=(a?c(e,i,s):c(s))||s);return a&&s&&E(e,i,s),s};const N=()=>({loading:"",tx:""});let r=class extends x(A){constructor(){super(...arguments),this.bindBridge=new g(this,v),this.bindTweets=new g(this,b),this.weekly=!1,this.address="",this.retreatDisabled=!0,this.voteList=[],this.pending=!1,this.prompt=!1,this.dialog=!1,this.promptMessage="",this.err=N(),this.ts=0,this.updateErr=(t={})=>this.err=Object.assign({},this.err,t),this.init=async()=>{this.pending=!0;try{let t=await M(this.address);this.user=t.user,this.readFromTwitter()}catch(t){this.updateErr({load:t.message||t}),this.promptMessage=t,this.prompt=!0;return}finally{this.ts++,this.pending=!1}},this.close=()=>{this.dialog=!1,this.init()}}get disabled(){return!v.bridge.account}connectedCallback(){super.connectedCallback(),this.init()}getRandomInt(t){return Math.floor(Math.random()*t)}async readFromTwitter(){let{uri:t}=this.user.socials[0]??{};this.social=await b.fromUri(t,this.user.address)}render(){return o`<div class="m-4 text-center">${m(!this.ts&&!this.err.loading,()=>o`<div name="Loading" class="doc-intro"><div class="flex flex-col gap-8 m-8"><loading-skeleton num="3"></loading-skeleton></div></div>`,()=>o`${m(this.prompt,()=>o`<p class="text-center text-orange-600">${this.promptMessage}</p>`,()=>{var t,e;return o`<div class="py-4"><ui-address class="text-lg" .address="${this.user.address}" short avatar></ui-address><div class="mt-4">${m((t=this.social)==null?void 0:t.verified,()=>{var i;return o`<span class="text-base font-light middle-dot-divider">${(i=this.social)==null?void 0:i.name}<span class="ml-0.5"><i class="text-green-600 text-sm mdi mdi-check-decagram"></i></span></span>`})} ${m((e=this.social)==null?void 0:e.url,()=>{var i,a;return o`<span class="text-base font-light"><a href="${(i=this.social)==null?void 0:i.url}" class="text-blue-300" target="_blank">@${(a=this.social)==null?void 0:a.id}</a></span>`})}</div><div class="mt-0.5"><span class="text-base text-white/70 middle-dot-divider">Holding <span class="ml-1 text-blue-300">${this.user.holding??"-"}</span></span> <span class="text-base text-white/70">Reward Claimed <span class="ml-1 text-blue-300">${this.user.rewardClaimed?(+k(this.user.rewardClaimed)).toFixed(4):"-"}</span></span></div></div>`})}`)}</div>`}};l([u({type:Boolean})],r.prototype,"weekly",2);l([u({type:String})],r.prototype,"address",2);l([u({type:Promise})],r.prototype,"votes",2);l([d()],r.prototype,"myVotes",2);l([d()],r.prototype,"retreatDisabled",2);l([d()],r.prototype,"social",2);l([d()],r.prototype,"user",2);l([d()],r.prototype,"voteList",2);l([d()],r.prototype,"pending",2);l([d()],r.prototype,"prompt",2);l([d()],r.prototype,"dialog",2);l([d()],r.prototype,"promptMessage",2);l([d()],r.prototype,"err",2);l([d()],r.prototype,"ts",2);r=l([y("user-detail")],r);const Q="";var R=Object.defineProperty,U=Object.getOwnPropertyDescriptor,_=(t,e,i,a)=>{for(var s=a>1?void 0:a?U(e,i):e,n=t.length-1,c;n>=0;n--)(c=t[n])&&(s=(a?c(e,i,s):c(s))||s);return a&&s&&R(e,i,s),s};let f=class extends x(Q){constructor(){super(...arguments),this.addr=""}render(){return o`<div class="ui-container mx-auto flex flex-col place-content-center pt-10">
      <!-- user profile -->
      <user-detail .address=${this.addr} class="mx-auto"></user-detail>

      <div class="w-full inline-flex pb-2 border-b border-slate-50/10">
        <div class="py-1.5 px-3 text-base font-normal text-white/70 rounded-md">Tracks</div>
      </div>

      <track-list .address=${this.addr}></track-list>

      <!-- <div class="h-20 pt-1 mb-8">
        <div class="font-bold text-xl">
          <user-detail .address=${this.addr}> </user-detail>
        </div>
      </div>
      <div class="h-10 pt-1 mt-20">
        <div class="font-bold text-xl">Tracks</div>
      </div>
      <div class="mt-0">
        <track-list .address=${this.addr}></track-list>
      </div> -->
    </div>`}};_([u({type:String})],f.prototype,"addr",2);f=_([y("user-page")],f);export{f as TrackPage};
