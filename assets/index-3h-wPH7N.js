import{T as y,b as v,e as _}from"./index-i1eC79s0.js";import{t as g,r as k}from"./prompt-XAvveWVx.js";import{g as b}from"./claim-XLc-w9iX.js";import{c as f,x as d,d as h,h as D,f as O,g as r,e as m,t as w}from"./vendor-_aDU801h.js";const I=async e=>{let t=`{
      user(id: "`+e+`") {
        address
        holding
        id
        rewardClaimed
        socials {
          id
          pid
          platform
          uri
        }
        subjectsCreated {
          address
          createdAt
          fansNumber
          id
          image
          lastVoteAt
          name
          supply
          totalVoteValue
          uri
          volumeRetreat
          volumeTotal
          volumeVote
        }
      }
    }`;return await b("MediaBoard",t)},C=async e=>{let t=`{
      user(id: "`+e+`") {
        address
        holding
        id
        rewardClaimed
        socials {
          id
          pid
          platform
          uri
        }
      }
    }`;return await b("MediaBoard",t)};var M=Object.defineProperty,P=Object.getOwnPropertyDescriptor,u=(e,t,l,o)=>{for(var s=o>1?void 0:o?P(t,l):t,n=e.length-1,c;n>=0;n--)(c=e[n])&&(s=(o?c(t,l,s):c(s))||s);return o&&s&&M(t,l,s),s};let p=class extends y(""){constructor(){super(...arguments),this.bindBridge=new f(this,v),this.weekly=!1,this.address="",this.userData={},this.trackList=[],this.pending=!1,this.prompt=!1,this.promptMessage="",this.init=async()=>{this.pending=!0;try{let e=await I(this.address);this.trackList=e.user.subjectsCreated,this.userData=e.user}catch(e){console.error(e),this.promptMessage=e,this.prompt=!0;return}this.pending=!1},this.close=()=>{this.init()}}get disabled(){return!v.bridge.account}connectedCallback(){super.connectedCallback(),this.init()}getRandomInt(e){return Math.floor(Math.random()*e)}render(){return d`<div>${h(this.pending&&!this.userData,()=>d`<div name="Loading" class="doc-intro"><div class="flex flex-col gap-8 m-8"><loading-skeleton num="3"></loading-skeleton><loading-skeleton num="3"></loading-skeleton><loading-skeleton num="3"></loading-skeleton></div></div>`)} ${h(this.userData,()=>d`<ul role="list"><li class="flex header p-1"><div class="w-16">Index</div><div class="flex-auto">Name</div><div class="flex-auto text-right pr-3">Tickets</div><div class="flex-none w-16 text-right">Voters</div>${h(this.pending,()=>d`<div><i class="text-sm mdi mdi-loading"></i><div></div></div>`)}</li>${D(this.trackList,(e,t)=>d`<li class="flex py-2 items-center cursor-pointer ${O({"bg-zinc-800/50":t%2})}" @click="${()=>{this.disabled?_.emit("connect-wallet"):location.href="/track/"+e.address}}"><div class="flex-none w-16 pl-4 text-lg font-light">${t+1}</div><div class="flex-initial flex"><div class="w-[4.6rem] h-[4.6rem] mr-4"><img-loader sizes="74px, 74px" src="${e.uri}"></img-loader></div><div><p class="name truncate mt-2">${e.name}</p><span class="icon mt-1"><i class="mdi mdi-play-circle-outline"></i></span></div></div><div class="flex-auto text-right pr-3 text-lg font-light"><p class="name truncate mt-2">${e.fansNumber}</p></div><div class="flex-none w-16 text-right text-lg font-light"><p class="name truncate mt-2">${e.supply}</p></div></li>`)}</ul>`)}</div>${h(this.prompt,()=>d`<p class="text-center text-orange-600">${this.promptMessage}</p>`)}`}};u([m({type:Boolean})],p.prototype,"weekly",2);u([m({type:String})],p.prototype,"address",2);u([r()],p.prototype,"userData",2);u([r()],p.prototype,"trackList",2);u([r()],p.prototype,"pending",2);u([r()],p.prototype,"prompt",2);u([r()],p.prototype,"promptMessage",2);p=u([w("track-list")],p);var T=Object.defineProperty,V=Object.getOwnPropertyDescriptor,a=(e,t,l,o)=>{for(var s=o>1?void 0:o?V(t,l):t,n=e.length-1,c;n>=0;n--)(c=e[n])&&(s=(o?c(t,l,s):c(s))||s);return o&&s&&T(t,l,s),s};const N=()=>({tx:""});let i=class extends y(""){constructor(){super(...arguments),this.bindBridge=new f(this,v),this.bindTweets=new f(this,g),this.weekly=!1,this.address="",this.retreatDisabled=!0,this.socialName="",this.socialURI="",this.socialID="",this.socialVerified=!1,this.voteList=[],this.pending=!1,this.prompt=!1,this.dialog=!1,this.promptMessage="",this.err=N(),this.updateErr=(e={})=>this.err=Object.assign({},this.err,e),this.init=async()=>{this.pending=!0;try{let e=await C(this.address);this.user=e.user,this.readFromTwitter()}catch(e){this.promptMessage=e,this.prompt=!0;return}finally{this.pending=!1}},this.close=()=>{this.dialog=!1,this.init()}}get disabled(){return!v.bridge.account}connectedCallback(){super.connectedCallback(),this.init()}getRandomInt(e){return Math.floor(Math.random()*e)}get tweets(){return g.tweets}readFromLocal(e){let t={key:"",author_name:"",author_url:"",html:""};return this.tweets.some(l=>{l.key==e&&(t=l)}),t}async readFromTwitter(){if(this.user&&this.user.socials){let e=this.user.socials[0][2],t=this.readFromLocal(e);(!t.key||t.key.length==0)&&(t=await k(e),t.key=e,this.tweets.unshift(t),g.save()),this.socialName=t.author_name,this.socialURI=t.author_url,this.socialID=t.author_url.substring(t.author_url.lastIndexOf("/")+1,t.author_url.length-1),this.socialVerified=t.html.includes(this.user.address),this.socialVerified=!0}else this.socialName="Unknown",this.socialURI="",this.socialID="NotBind",this.socialVerified=!1}render(){return d`<div>${h(this.pending&&!this.user,()=>d`<div name="Loading" class="doc-intro"><div class="flex flex-col gap-8 m-8"><loading-skeleton num="3"></loading-skeleton></div></div>`)} ${h(this.user,()=>d`<div slot="center" class="grid mx-4 mt-4 grid-cols-6 gap-4 place-items-center"><div class="flex grow pb-4 col-span-1"><div><ui-address .address="${this.user.address}" short avatar></ui-address><div><div class="text-sm font-light text-blue-300">${h(this.socialVerified,()=>d`<span><i class="text-green-600 text-sm mdi mdi-check-decagram"></i></span>`)}${this.socialName}</div><div class="text-sm font-light text-blue-300"><a href="${this.socialURI}" target="_blank">@${this.socialID}</a></div></div></div></div><div><div class="text-sm text-gray-500 align-center">Holding</div><div class="text-4xl align-center">${this.user.holding}</div></div><div><div class="text-sm text-gray-500 align-center">Reward Claimed</div><div class="text-4xl align-center">${this.user.rewardClaimed}</div></div></div>`)}</div>${h(this.prompt,()=>d`<p class="text-center text-orange-600">${this.promptMessage}</p>`)}`}};a([m({type:Boolean})],i.prototype,"weekly",2);a([m({type:String})],i.prototype,"address",2);a([m({type:Promise})],i.prototype,"votes",2);a([r()],i.prototype,"myVotes",2);a([r()],i.prototype,"retreatDisabled",2);a([r()],i.prototype,"socialName",2);a([r()],i.prototype,"socialURI",2);a([r()],i.prototype,"socialID",2);a([r()],i.prototype,"socialVerified",2);a([r()],i.prototype,"user",2);a([r()],i.prototype,"voteList",2);a([r()],i.prototype,"pending",2);a([r()],i.prototype,"prompt",2);a([r()],i.prototype,"dialog",2);a([r()],i.prototype,"promptMessage",2);a([r()],i.prototype,"err",2);i=a([w("user-detail")],i);const L="";var j=Object.defineProperty,R=Object.getOwnPropertyDescriptor,$=(e,t,l,o)=>{for(var s=o>1?void 0:o?R(t,l):t,n=e.length-1,c;n>=0;n--)(c=e[n])&&(s=(o?c(t,l,s):c(s))||s);return o&&s&&j(t,l,s),s};let x=class extends y(L){constructor(){super(...arguments),this.addr=""}render(){return d`<div class="flex px-8 space-x-8 place-content-center"><div class="flex-initial w-[64rem]"><div class="h-20 pt-1 mb-8"><div class="font-bold text-xl"><user-detail .address="${this.addr}"></user-detail></div></div><div class="h-10 pt-1 mt-20"><div class="font-bold text-xl">Tracks</div></div><div class="mt-0"><track-list .address="${this.addr}"></track-list></div></div></div>`}};$([m({type:String})],x.prototype,"addr",2);x=$([w("user-page")],x);export{x as TrackPage};
