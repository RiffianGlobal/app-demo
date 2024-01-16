import{f as S,t as V,n as B,u as R,a as E,g as A,h as q,i as P,j as L,T as W,b as U}from"./index-WKZc7PgZ.js";import{a1 as Y,a2 as z,S as G,p as K,c as D,K as x,x as d,n as y,a3 as $,h as u,a as f,b as Q}from"./vendor-gd9Vg6JX.js";const w=async(e=!1)=>q("MediaBoard",{account:e?void 0:await E()}),Z=async(e,t,s)=>{const i=await w(),r="vote",a={},c=[e,t,s];await S(a,i,r,c);const g=i[r](...c);return new V(g,{errorCodes:"MediaBoard",allowAlmostSuccess:!0,seq:{type:"VoteSubject",title:"Vote Subject",ts:B(),overrides:a}})},H=async e=>{try{const t=await w(!0),s="getSocials",i=[e];return(await t[s](...i))[0][2]}catch(t){console.log(t)}},X=async(e,t)=>{const s=await w(),i="retreat",r={},a=[e,t];await S(r,s,i,a);const c=s[i](...a);return new V(c,{errorCodes:"MediaBoard",allowAlmostSuccess:!0,seq:{type:"RetreatSubject",title:"Retreat Subject",ts:B(),overrides:r}})},tt=async e=>{const t=await w(!0),s="subjectToData",i={},r=[e];return await S(i,t,s,r),await t[s](...r)},et=async e=>R(e,await E()),st=async e=>{try{const t=await w(!0),s="getRetreatPrice",i=[e,1];return await t[s](...i)}catch{return 0}},it=async e=>{const t=await w(!0),s="getVotePrice",i=[e,1];return await t[s](...i)},rt=async e=>{const t=await w(!0),s="getVotePriceWithFee",i={},r=[e,1];return await S(i,t,s,r),await t[s](...r)},ft=async(e,t)=>{const s=24n*60n*60n;let i=BigInt(new Date().getTime())/1000n-s,r=`{
      subjectWeeklyVotes(first: ${e}, where:{week:${t}}, orderBy: volumeTotal, orderDirection:desc) {
        id
        volumeTotal
        subject {
          id
          name
          image
          uri
          supply
          creator {
            address
          }
          voteLogs(first:1, where:{time_lt:${i}} orderBy:time, orderDirection:desc){
            supply
          }
        }
      }
    }`;return await A("MediaBoard",r)},gt=async e=>{const t=24n*60n*60n;let s=BigInt(new Date().getTime())/1000n-t,i=`{
      subjects(first: ${e}, orderBy:supply, orderDirection:desc, where: {creator_starts_with: "0x"}) {
        id
        image
        name
        uri
        supply
        creator {
          address
        }
        voteLogs(first:1, where:{time_lt:${s}} orderBy:time, orderDirection:desc){
          supply
        }
      }
    }`;return await A("MediaBoard",i)};var T={exports:{}};(function(e,t){(function(s,i){i(t,e)})(Y,function(s,i){var r={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function a(){return"jsonp_"+Date.now()+"_"+Math.ceil(Math.random()*1e5)}function c(h){try{delete window[h]}catch{window[h]=void 0}}function g(h){var l=document.getElementById(h);l&&document.getElementsByTagName("head")[0].removeChild(l)}function I(h){var l=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],j=h,J=l.timeout||r.timeout,C=l.jsonpCallback||r.jsonpCallback,v=void 0;return new Promise(function(M,k){var m=l.jsonpCallbackFunction||a(),b=C+"_"+m;window[m]=function(N){M({ok:!0,json:function(){return Promise.resolve(N)}}),v&&clearTimeout(v),g(b),c(m)},j+=j.indexOf("?")===-1?"?":"&";var p=document.createElement("script");p.setAttribute("src",""+j+C+"="+m),l.charset&&p.setAttribute("charset",l.charset),l.nonce&&p.setAttribute("nonce",l.nonce),l.referrerPolicy&&p.setAttribute("referrerPolicy",l.referrerPolicy),l.crossorigin&&p.setAttribute("crossorigin","true"),p.id=b,document.getElementsByTagName("head")[0].appendChild(p),v=setTimeout(function(){k(new Error("JSONP request to "+h+" timed out")),c(m),g(b),window[m]=function(){c(m)}},J),p.onerror=function(){k(new Error("JSONP request to "+h+" failed")),c(m),g(b),v&&clearTimeout(v)}})}i.exports=I})})(T,T.exports);var at=T.exports;const ot=z(at);var nt=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,lt=(e,t,s,i)=>{for(var r=i>1?void 0:i?ct(t,s):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(r=(i?c(t,s,r):c(r))||r);return i&&r&&nt(t,s,r),r};const dt=async e=>{let t;if(e)try{t=await(await ot("https://publish.twitter.com/oembed?url="+encodeURIComponent(e))).json()}catch{}return t},ut=async e=>{const{author_name:t="",author_url:s="",html:i=""}=await dt(e)??{};if(t)return{name:t,url:s,id:(s.match(/([^/]+?)$/)??[])[1]??"",address:(i.match(/(0x([a-zA-Z0-9]+)?)/)??[])[1]??""}};class F extends G{constructor(){super(),this.key=t=>`tweet.${t}`,this.set=(t,s,i=!1)=>(this.tweets={...this.tweets,[t]:s},i&&P.setItem(this.key(t),JSON.stringify(s),L*1e3),s),this.promises={},this.get=async t=>{let s=this.tweets[t];if(s)return s;const i=P.getItem(this.key(t));if(i)return this.set(t,s=JSON.parse(i));const r=this.promises[t];return r||(this.promises[t]=new Promise(async a=>{s=await ut(t),s?(this.set(t,s,!0),a(s)):a(void 0)}).finally(()=>delete this.promises[t]))},P.removeItem("tweets")}}lt([K({value:{}})],F.prototype,"tweets",2);const _=new F;var ht=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,n=(e,t,s,i)=>{for(var r=i>1?void 0:i?mt(t,s):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(r=(i?c(t,s,r):c(r))||r);return i&&r&&ht(t,s,r),r};const O=()=>({tx:""});let o=class extends W(""){constructor(){super(...arguments),this.bindBridge=new D(this,U),this.bindTweets=new D(this,_),this.action="",this.album="",this.url="",this.name="",this.author="",this.myVotes=0,this.retreatPrice=0,this.retreatDisabled=!0,this.tx=null,this.success=!1,this.pending=!1,this.rewards=!1,this.err=O(),this.ts=0,this.resetState=()=>{this.err=O(),this.pending=!1,this.success=!1,this.price=void 0,this.votes=void 0},this.close=async()=>{this.tx=null,this.resetState(),this.emit("close")},this.updateErr=(e={})=>this.err=Object.assign({},this.err,e)}async connectedCallback(){super.connectedCallback(),await this.getPrice(),await this.readFromTwitter(),this.ts++}get hasVoted(){return this.ts&&+x(this.myVotes,1)>0}async readFromTwitter(){const e=await H(this.author),t=await _.get(e);t&&Object.assign(t,{verified:t.address.includes(this.author)}),this.social=t}async getPrice(){try{this.votes=tt(this.album).then(e=>e[4]),this.myVotes=await et(this.album).then(e=>(e>0&&(this.retreatDisabled=!1),e)),this.price=it(this.album).then(e=>x(e,18)),this.retreatPrice=await st(this.album).then(e=>x(e,18))}catch(e){let t=e.message||e.code;this.updateErr({tx:t})}}async vote(){this.pending=!0;try{this.tx=await Z(this.album,1,{value:(await rt(this.album))[0]}),this.success=await this.tx.wait()}catch(e){this.tx||(this.tx={},this.tx.status=0,this.tx.err=e)}}async retreat(){this.pending=!0;try{this.tx=await X(this.album,1),this.success=await this.tx.wait()}catch(e){this.tx||(this.tx={},this.tx.status=0,this.tx.err=e)}}render(){var e,t,s;return d`<ui-dialog
      @close=${()=>{this.close()}}
    >
      <p slot="header" class="w-full text-base mr-2">Vote Track</p>
      <div slot="center" class="flex mx-4 my-6">
        <div class="flex grow justify-between p-4 bg-black/20">
          <!-- meta info -->
          <div class="flex gap-6">
            <div class="w-24 h-24 rounded-lg bg-white/10">
              <img-loader class="w-24 h-24 rounded-lg" src=${this.url}></img-loader>
            </div>
            <div>
              <div class="text-lg mb-1.5">${this.name}</div>
              <div class="text-sm">
                ${y((e=this.social)==null?void 0:e.verified,()=>d`<span><i class="text-green-600 text-sm mdi mdi-check-decagram"></i></span>`)}${(t=this.social)==null?void 0:t.name}
              </div>
              ${y((s=this.social)==null?void 0:s.id,()=>{var i,r;return d`
                  <a class="text-sm text-blue-300" href="${(i=this.social)==null?void 0:i.url}" target="_blank">@${(r=this.social)==null?void 0:r.id}</a>
                `},()=>d`-`)}

              <div class="text-neutral-400">
                You own
                ${y(this.ts,()=>d`${x(this.myVotes,0)}`,()=>d`<i class="text-sm mdi mdi-loading"></i>`)}
                tickets
              </div>
            </div>
          </div>
          <!-- Tickets -->
          <div class="text-right">
            <span class="text-lg text-sky-500"
              >${$(this.votes,d`<i class="text-sm mdi mdi-loading"></i>`)}</span
            >
            <div class="text-sm text-gray-500">Tickets</div>
          </div>
        </div>
        <!-- tip -->
      </div>
      <div slot="bottom" class="mx-4 pb-8">
        <p class="w-full flex justify-between items-center">
          It will cost
          <span class="text-right"
            ><span class="text-sm text-gray-500">Vote price <i class="text-sm mdi mdi-help-circle-outline"></i></span
          ></span>
        </p>
        <div class="mt-8">
          ${y(!this.pending,()=>d`
              ${y(this.ts&&this.action==="vote",()=>d`
                  <div class="flex flex-col justify-center items-center px-4">
                    <div>
                      <span class="text-2xl">${$(this.price,d`<i class="text-sm mdi mdi-loading"></i>`)}</span>
                    </div>
                    <ui-button
                      class="mt-3 w-full"
                      ?disabled=${this.pending}
                      ?pending=${this.pending}
                      @click=${this.vote}
                      >Vote</ui-button
                    >
                  </div>
                `)}
              ${y(this.ts&&this.hasVoted&&this.action==="retreat",()=>d`
                  <div class="flex flex-col justify-center items-center px-4 border-white/12">
                    <div class="text-2xl">
                      ${$(this.retreatPrice,d`<i class="text-sm mdi mdi-loading"></i>`)}
                    </div>

                    <ui-button
                      class="mt-3 w-full"
                      ?disabled=${this.retreatDisabled}
                      ?pending=${this.retreatDisabled}
                      @click=${this.retreat}
                      >Retreat</ui-button
                    >
                  </div>
                `)}
              <!-- <div class="text-sm text-gray-500">
                Retreat price: ${$(this.retreatPrice,d`<i class="text-sm mdi mdi-loading"></i>`)} FTM
              </div> -->
            `,()=>d`<tx-state .tx=${this.tx} .opts=${{state:{success:"Success. Your vote has been submitted."}}}
                ><ui-button slot="view" @click=${this.close}>Close</ui-button></tx-state
              >`)}
        </div>
      </div>
    </ui-dialog>`}};n([f({type:String})],o.prototype,"action",2);n([f({type:String})],o.prototype,"album",2);n([f({type:String})],o.prototype,"url",2);n([f({type:String})],o.prototype,"name",2);n([f({type:String})],o.prototype,"author",2);n([f({type:Promise})],o.prototype,"votes",2);n([u()],o.prototype,"myVotes",2);n([u()],o.prototype,"price",2);n([u()],o.prototype,"retreatPrice",2);n([u()],o.prototype,"retreatDisabled",2);n([u()],o.prototype,"social",2);n([u()],o.prototype,"tx",2);n([u()],o.prototype,"success",2);n([u()],o.prototype,"pending",2);n([u()],o.prototype,"rewards",2);n([u()],o.prototype,"err",2);n([u()],o.prototype,"ts",2);o=n([Q("vote-album-dialog")],o);export{gt as a,tt as b,et as m,_ as t,ft as w};
