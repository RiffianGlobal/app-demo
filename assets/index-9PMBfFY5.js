import{T as x,b as v,e as V}from"./index-mMiUuFbq.js";import{t as g,r as _,b as D,m as T}from"./prompt-ig4uDWmV.js";import{g as $}from"./claim-F-DR1QQL.js";import{b as f,x as d,c as p,g as O,e as P,m as b,f as a,d as m,t as w,q as A}from"./vendor-27d7NQgn.js";const M=async t=>{let e=`{
    subject(
      id: "`+t+`"
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
  }`;return await $("MediaBoard",e)},C=async t=>{let e=`{
    subject(
      id: "`+t+`"
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
  }`;return await $("MediaBoard",e)},j="li.header{margin-bottom:.5rem;font-weight:300;--tw-text-opacity: 1;color:#fafaf9;color:rgba(250,250,249,var(--tw-text-opacity));border-bottom:1px solid #898989}li.item:hover{--tw-bg-opacity: 1;background-color:#3f3f46;background-color:rgba(63,63,70,var(--tw-bg-opacity))}@media (min-width: 500px){.name{font-size:1.25rem;line-height:1.75rem}}.icon{font-size:1.875rem;line-height:2.25rem}@media (max-width: 500px){.icon{font-size:1.5rem;line-height:2rem}}";var I=Object.defineProperty,S=Object.getOwnPropertyDescriptor,h=(t,e,o,l)=>{for(var s=l>1?void 0:l?S(e,o):e,c=t.length-1,n;c>=0;c--)(n=t[c])&&(s=(l?n(e,o,s):n(s))||s);return l&&s&&I(e,o,s),s};let u=class extends x(j){constructor(){super(...arguments),this.bindBridge=new f(this,v),this.weekly=!1,this.trackAddress="",this.subjectData={},this.voteList=[],this.pending=!1,this.prompt=!1,this.promptMessage="",this.init=async()=>{this.pending=!0;try{let t=await C(this.trackAddress);this.voteList=t.subject.userVotes,this.subjectData=t.subject}catch(t){console.error(t),this.promptMessage=t,this.prompt=!0;return}this.pending=!1},this.close=()=>{this.init()}}get disabled(){return!v.bridge.account}connectedCallback(){super.connectedCallback(),this.init()}getRandomInt(t){return Math.floor(Math.random()*t)}render(){return d`<div>${p(this.pending&&!this.subjectData,()=>d`<div name="Loading" class="doc-intro"><div class="flex flex-col gap-8 m-8"><loading-skeleton num="3"></loading-skeleton><loading-skeleton num="3"></loading-skeleton><loading-skeleton num="3"></loading-skeleton></div></div>`)} ${p(this.subjectData,()=>d`<ul role="list"><li class="flex header p-1"><div class="w-16">Rank</div><div class="flex-auto">Addr</div><div class="flex-auto text-right pr-3">Comsumption</div><div class="flex-none w-16 text-right">Earning</div>${p(this.pending,()=>d`<div><i class="text-sm mdi mdi-loading"></i><div></div></div>`)}</li>${O(this.voteList,(t,e)=>d`<li class="flex py-2 items-center cursor-pointer ${P({"bg-zinc-800/50":e%2})}" @click="${()=>{this.disabled?V.emit("connect-wallet"):location.href="/user/"+t.user.address}}"><div class="flex-none w-16 pl-4 text-lg font-light">${e+1}</div><div class="flex-initial flex"><ui-address .address="${t.user.address}" short avatar></ui-address></div><div class="flex-auto text-right pr-3"><p class="text-2xl"></p><p class="name truncate mt-2">${b(t.volumeVote,18)} ST</p><p></p></div><div class="flex-none w-16 text-lg font-light"><p class="name truncate mt-2">${b(t.user.rewardClaimed,18)} ST</p></div></li>`)}</ul>`)}</div>${p(this.prompt,()=>d`<p class="text-center text-orange-600">${this.promptMessage}</p>`)}`}};h([m({type:Boolean})],u.prototype,"weekly",2);h([m({type:String})],u.prototype,"trackAddress",2);h([a()],u.prototype,"subjectData",2);h([a()],u.prototype,"voteList",2);h([a()],u.prototype,"pending",2);h([a()],u.prototype,"prompt",2);h([a()],u.prototype,"promptMessage",2);u=h([w("voter-list")],u);var R=Object.defineProperty,L=Object.getOwnPropertyDescriptor,r=(t,e,o,l)=>{for(var s=l>1?void 0:l?L(e,o):e,c=t.length-1,n;c>=0;c--)(n=t[c])&&(s=(l?n(e,o,s):n(s))||s);return l&&s&&R(e,o,s),s};const N=()=>({tx:""});let i=class extends x(j){constructor(){super(...arguments),this.bindBridge=new f(this,v),this.bindTweets=new f(this,g),this.weekly=!1,this.trackAddress="",this.retreatDisabled=!0,this.socialName="",this.socialURI="",this.socialID="",this.socialVerified=!1,this.subject={totalVoteValue:"0"},this.voteList=[],this.pending=!1,this.prompt=!1,this.dialog=!1,this.promptMessage="",this.err=N(),this.updateErr=(t={})=>this.err=Object.assign({},this.err,t),this.init=async()=>{this.pending=!0;try{let t=await M(this.trackAddress);this.subject=t.subject,this.getPrice(),this.readFromTwitter()}catch(t){this.promptMessage=t,this.prompt=!0;return}finally{this.pending=!1}},this.close=()=>{this.dialog=!1,this.init()}}get disabled(){return!v.bridge.account}connectedCallback(){super.connectedCallback(),this.init()}getRandomInt(t){return Math.floor(Math.random()*t)}get tweets(){return g.tweets}readFromLocal(t){let e={key:"",author_name:"",author_url:"",html:""};return this.tweets.some(o=>{o.key==t&&(e=o)}),e}async readFromTwitter(){let t=this.subject.creator.socials[0][2],e=this.readFromLocal(t);(!e.key||e.key.length==0)&&(e=await _(t),e.key=t,this.tweets.unshift(e),g.save()),this.socialName=e.author_name,this.socialURI=e.author_url,this.socialID=e.author_url.substring(e.author_url.lastIndexOf("/")+1,e.author_url.length-1),this.socialVerified=e.html.includes(this.subject.creator.address),this.socialVerified=!0}async getPrice(){try{this.votes=D(this.trackAddress).then(t=>t[4]),this.myVotes=T(this.trackAddress).then(t=>(t>0&&(this.retreatDisabled=!1),t))}catch(t){let e=t.message||t.code;this.updateErr({tx:e})}}render(){return d`<div>
        ${p(this.pending&&!this.subject,()=>d`<div name="Loading" class="doc-intro">
              <div class="flex flex-col gap-8 m-8">
                <loading-skeleton num="3"></loading-skeleton>
              </div>
            </div>`)}
        ${p(this.subject,()=>d`
            <div slot="center" class="grid mx-4 mt-4 grid-cols-6 gap-4 place-items-center">
              <div class="flex grow pb-4 col-span-2">
                <div class="w-24 h-24 mr-4"><img-loader src=${this.subject.image}></img-loader></div>
                <div>
                  <div class="text-lg font-bold">${this.subject.name}</div>
                  <span class="icon mt-1"
                    ><a href="${this.subject.uri}"><i class="mdi mdi-play-circle-outline"></i></a
                  ></span>
                  <div>
                    <div class="text-sm font-light text-blue-300">
                      ${p(this.socialVerified,()=>d`<span><i class="text-green-600 text-sm mdi mdi-check-decagram"></i></span>`)}${this.socialName}
                    </div>
                    <div class="text-sm font-light text-blue-300">
                      <a href="${this.socialURI}" target="_blank">@${this.socialID}</a>
                    </div>
                  </div>
                  <!-- <div class="text-gray-500">
                    You own ${A(this.myVotes,d`<i class="text-sm mdi mdi-loading"></i>`)} tickets
                  </div> -->
                </div>
              </div>
              <div class="">
                <div class="text-sm text-gray-500 align-center">Voters</div>
                <div class="text-4xl align-center">${this.subject.fansNumber}</div>
              </div>
              <div class="">
                <div class="text-sm text-gray-500 align-center">Tickets</div>
                <div class="text-4xl align-center">${this.subject.supply}</div>
              </div>
              <div class="">
                <div class="text-sm text-gray-500 align-center">Total Vote Value</div>
                <div class="text-4xl align-center">${b(this.subject.totalVoteValue,18)} ST</div>
              </div>
              <div name="Dialog" class="">
                <ui-button
                  class="outlined"
                  ?disabled="${this.disabled}"
                  @click=${()=>{this.dialog=!0}}
                  >VOTE</ui-button
                >
                ${p(this.dialog,()=>d`<vote-album-dialog
                      album=${this.subject.id}
                      url=${this.subject.image}
                      name=${this.subject.name}
                      votes=${this.subject.supply}
                      author=${this.subject.creator.address}
                      @close=${this.close}
                    ></vote-album-dialog>`)}
              </div>
            </div>
          `)}
      </div>
      <!-- Prompt -->
      ${p(this.prompt,()=>d`<p class="text-center text-orange-600">${this.promptMessage}</p> `)}`}};r([m({type:Boolean})],i.prototype,"weekly",2);r([m({type:String})],i.prototype,"trackAddress",2);r([m({type:Promise})],i.prototype,"votes",2);r([a()],i.prototype,"myVotes",2);r([a()],i.prototype,"retreatDisabled",2);r([a()],i.prototype,"socialName",2);r([a()],i.prototype,"socialURI",2);r([a()],i.prototype,"socialID",2);r([a()],i.prototype,"socialVerified",2);r([a()],i.prototype,"subject",2);r([a()],i.prototype,"voteList",2);r([a()],i.prototype,"pending",2);r([a()],i.prototype,"prompt",2);r([a()],i.prototype,"dialog",2);r([a()],i.prototype,"promptMessage",2);r([a()],i.prototype,"err",2);i=r([w("track-detail")],i);const E="";var B=Object.defineProperty,U=Object.getOwnPropertyDescriptor,k=(t,e,o,l)=>{for(var s=l>1?void 0:l?U(e,o):e,c=t.length-1,n;c>=0;c--)(n=t[c])&&(s=(l?n(e,o,s):n(s))||s);return l&&s&&B(e,o,s),s};let y=class extends x(E){constructor(){super(...arguments),this.addr=""}render(){return d`<div class="flex px-8 space-x-8 place-content-center"><div class="flex-initial w-[64rem]"><div class="h-20 pt-1 mb-8"><div class="font-bold text-xl"><track-detail trackAddress="${this.addr}"></track-detail></div></div><div class="h-10 pt-1 mt-20"><div class="font-bold text-xl">VOTERS</div></div><div class="mt-0"><voter-list trackAddress="${this.addr}"></voter-list></div></div></div>`}};k([m({type:String})],y.prototype,"addr",2);y=k([w("track-page")],y);export{y as TrackPage};