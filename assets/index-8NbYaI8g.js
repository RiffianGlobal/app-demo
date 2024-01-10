import{T as y,b as v}from"./index-YZw6TJPB.js";import{t as g,r as k,b as V,m as D}from"./dialog-WZXmRGhJ.js";import{g as $}from"./claim-6yMbb5rj.js";import{a as f,x as d,n as p,q as T,e as O,y as b,h as a,d as m,c as w}from"./vendor-2IPsi7QR.js";const P=async e=>{let t=`{
    subject(
      id: "`+e+`"
    ) {
      address
      createdAt
      creator {
        address
        id
        rewardClaimed
        socials {
          uri
          pid
          id
          platform
        }
      }
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
  }`;return await $("MediaBoard",t)},A=async e=>{let t=`{
    subject(
      id: "`+e+`"
    ) {
      address
      createdAt
      creator {
        address
        id
        rewardClaimed
        socials {
          uri
          pid
          id
          platform
        }
      }
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
      userVotes {
        volumeRetreat
        volumeTotal
        volumeVote
        votes
        user {
          address
          rewardClaimed
        }
      }
    }
  }`;return await $("MediaBoard",t)},j=".ui-list .item{cursor:pointer;align-items:center}@media (min-width: 768px){.ui-list .name{font-size:1rem;line-height:1.5rem}}";var M=Object.defineProperty,C=Object.getOwnPropertyDescriptor,h=(e,t,l,o)=>{for(var s=o>1?void 0:o?C(t,l):t,n=e.length-1,c;n>=0;n--)(c=e[n])&&(s=(o?c(t,l,s):c(s))||s);return o&&s&&M(t,l,s),s};let u=class extends y(j){constructor(){super(...arguments),this.bindBridge=new f(this,v),this.weekly=!1,this.trackAddress="",this.subjectData={},this.voteList=[],this.pending=!1,this.prompt=!1,this.promptMessage="",this.init=async()=>{this.pending=!0;try{let e=await A(this.trackAddress);this.voteList=e.subject.userVotes,this.subjectData=e.subject}catch(e){console.error(e),this.promptMessage=e,this.prompt=!0;return}this.pending=!1},this.close=()=>{this.init()}}get disabled(){return!v.bridge.account}connectedCallback(){super.connectedCallback(),this.init()}getRandomInt(e){return Math.floor(Math.random()*e)}render(){return d`<div>${p(this.pending&&!this.subjectData,()=>d`<div name="Loading" class="doc-intro"><div class="flex flex-col gap-8 m-8"><loading-skeleton num="3"></loading-skeleton><loading-skeleton num="3"></loading-skeleton><loading-skeleton num="3"></loading-skeleton></div></div>`)} ${p(this.subjectData,()=>d`<ul role="list" class="ui-list hover py-5"><li class="flex header"><div class="w-16">Rank</div><div class="address flex-auto">Addr</div><div class="num flex-none">Comsumption<span class="ml-1 text-xs opacity-70">(ST)</span></div><div class="num flex-none w-28">Earning<span class="ml-1 text-xs opacity-70">(ST)</span></div>${p(this.pending,()=>d`<div><i class="text-sm mdi mdi-loading"></i><div></div></div>`)}</li>${T(this.voteList,(e,t)=>d`<li class="item flex py-2.5" @click="${()=>{this.disabled?O.emit("connect-wallet"):location.href="/user/"+e.user.address}}"><div class="flex-none w-16 pl-4 text-sm font-light opacity-70">${t+1}</div><div class="flex-auto"><ui-address .address="${e.user.address}" short avatar class="text-base"></ui-address></div><div class="num flex-none"><p class="name truncate mt-2">${b(e.volumeVote,18)}</p><p></p></div><div class="num flex-none w-28"><p class="name truncate mt-2">${b(e.user.rewardClaimed,18)}</p></div></li>`)}</ul>`)}</div>${p(this.prompt,()=>d`<p class="text-center text-orange-600">${this.promptMessage}</p>`)}`}};h([m({type:Boolean})],u.prototype,"weekly",2);h([m({type:String})],u.prototype,"trackAddress",2);h([a()],u.prototype,"subjectData",2);h([a()],u.prototype,"voteList",2);h([a()],u.prototype,"pending",2);h([a()],u.prototype,"prompt",2);h([a()],u.prototype,"promptMessage",2);u=h([w("voter-list")],u);var I=Object.defineProperty,S=Object.getOwnPropertyDescriptor,r=(e,t,l,o)=>{for(var s=o>1?void 0:o?S(t,l):t,n=e.length-1,c;n>=0;n--)(c=e[n])&&(s=(o?c(t,l,s):c(s))||s);return o&&s&&I(t,l,s),s};const L=()=>({tx:""});let i=class extends y(j){constructor(){super(...arguments),this.bindBridge=new f(this,v),this.bindTweets=new f(this,g),this.weekly=!1,this.trackAddress="",this.retreatDisabled=!0,this.socialName="",this.socialURI="",this.socialID="",this.socialVerified=!1,this.subject={totalVoteValue:"0"},this.voteList=[],this.pending=!1,this.prompt=!1,this.dialog=!1,this.promptMessage="",this.err=L(),this.updateErr=(e={})=>this.err=Object.assign({},this.err,e),this.init=async()=>{this.pending=!0;try{let e=await P(this.trackAddress);this.subject=e.subject,this.getPrice(),this.readFromTwitter()}catch(e){this.promptMessage=e,this.prompt=!0;return}finally{this.pending=!1}},this.close=()=>{this.dialog=!1,this.init()}}get disabled(){return!v.bridge.account}connectedCallback(){super.connectedCallback(),this.init()}getRandomInt(e){return Math.floor(Math.random()*e)}get tweets(){return g.tweets}readFromLocal(e){let t={key:"",author_name:"",author_url:"",html:""};return this.tweets.some(l=>{l.key==e&&(t=l)}),t}async readFromTwitter(){let e=this.subject.creator.socials[0][2],t=this.readFromLocal(e);(!t.key||t.key.length==0)&&(t=await k(e),t.key=e,this.tweets.unshift(t),g.save()),this.socialName=t.author_name,this.socialURI=t.author_url,this.socialID=t.author_url.substring(t.author_url.lastIndexOf("/")+1,t.author_url.length-1),this.socialVerified=t.html.includes(this.subject.creator.address),this.socialVerified=!0}async getPrice(){try{this.votes=V(this.trackAddress).then(e=>e[4]),this.myVotes=D(this.trackAddress).then(e=>(e>0&&(this.retreatDisabled=!1),e))}catch(e){let t=e.message||e.code;this.updateErr({tx:t})}}render(){return d`<div>${p(this.pending&&!this.subject,()=>d`<div name="Loading" class="doc-intro"><div class="flex flex-col gap-8 m-8"><loading-skeleton num="3"></loading-skeleton></div></div>`)} ${p(this.subject,()=>d`<div class="grid lg_grid-cols-13 gap-2"><div class="lg_col-span-6 flex gap-6"><div class="w-32 h-32 rounded-xl bg-white/10"><img-loader src="${this.subject.image}" class="w-32 h-32 rounded-xl"></img-loader></div><div class="flex flex-col justify-start ml-4"><div class="text-xl mb-1.5">${this.subject.name}</div><div class="inline-flex text-base font-normal mb-0.5">${this.socialName} ${p(this.socialVerified,()=>d`<span class="ml-0.5"><i class="mdi mdi-check-decagram text-sm text-green-600"></i></span>`)}</div><a class="text-base font-normal text-blue-300" href="${this.socialURI}" target="_blank">@${this.socialID}</a><div class="mt-2"><ui-button sm class="outlined" ?disabled="${this.disabled}" @click="${()=>{this.dialog=!0}}">VOTE</ui-button>${p(this.dialog,()=>d`<vote-album-dialog album="${this.subject.id}" url="${this.subject.image}" name="${this.subject.name}" votes="${this.subject.supply}" author="${this.subject.creator.address}" @close="${this.close}"></vote-album-dialog>`)}</div></div></div><div class="lg_col-start-7 lg_col-span-7 grid grid-cols-6 lg_grid-cols-8 gap-4 place-items-center items-center"><div class="lg_col-start-3 col-span-2 flex flex-col justify-center items-center w-full h-4/5 bg-white/5 rounded-xl gap-1.5"><div class="text-base text-gray-500 align-center">Voters</div><div class="text-4xl align-center lining-nums">${this.subject.fansNumber}</div></div><div class="col-span-2 flex flex-col justify-center items-center w-full h-4/5 bg-white/5 rounded-xl gap-1.5"><div class="text-base text-gray-500 align-center">Tickets</div><div class="text-4xl align-center lining-nums">${this.subject.supply}</div></div><div class="col-span-2 flex flex-col justify-center items-center w-full h-4/5 bg-white/5 rounded-xl gap-1.5"><div class="text-base text-gray-500 align-center">Total Vote Value</div><div class="text-4xl align-center lining-nums">${b(this.subject.totalVoteValue,18)}<span class="ml-2 text-lg">ST</span></div></div></div></div>`)}</div>${p(this.prompt,()=>d`<p class="text-center text-orange-600">${this.promptMessage}</p>`)}`}};r([m({type:Boolean})],i.prototype,"weekly",2);r([m({type:String})],i.prototype,"trackAddress",2);r([m({type:Promise})],i.prototype,"votes",2);r([a()],i.prototype,"myVotes",2);r([a()],i.prototype,"retreatDisabled",2);r([a()],i.prototype,"socialName",2);r([a()],i.prototype,"socialURI",2);r([a()],i.prototype,"socialID",2);r([a()],i.prototype,"socialVerified",2);r([a()],i.prototype,"subject",2);r([a()],i.prototype,"voteList",2);r([a()],i.prototype,"pending",2);r([a()],i.prototype,"prompt",2);r([a()],i.prototype,"dialog",2);r([a()],i.prototype,"promptMessage",2);r([a()],i.prototype,"err",2);i=r([w("track-detail")],i);const R="";var N=Object.defineProperty,B=Object.getOwnPropertyDescriptor,_=(e,t,l,o)=>{for(var s=o>1?void 0:o?B(t,l):t,n=e.length-1,c;n>=0;n--)(c=e[n])&&(s=(o?c(t,l,s):c(s))||s);return o&&s&&N(t,l,s),s};let x=class extends y(R){constructor(){super(...arguments),this.addr=""}render(){return d`<div class="md_max-w-7xl mx-auto flex flex-col place-content-center pt-12"><track-detail trackAddress="${this.addr}"></track-detail><div class="mt-14"><div class="w-full inline-flex pb-6 border-b border-slate-50/10"><div class="py-1.5 px-3 text-base font-normal bg-sky-300/10 text-white/70 rounded-md">Voters</div></div><voter-list trackAddress="${this.addr}"></voter-list></div></div>`}};_([m({type:String})],x.prototype,"addr",2);x=_([w("track-page")],x);export{x as TrackPage};
