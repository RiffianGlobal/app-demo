import{a as b,t as A,n as N,b as R,g as Y,c as Q,T as D,d as K}from"./index-myP7RGly.js";import{g as J}from"./claim-uN_pG3Lu.js";import{ak as X,al as Z,a1 as tt,a2 as et,a5 as V,ai as F,x as h,a7 as S,aj as $,ac as d,a9 as v,t as O,aa as st,ab as B,ag as it,ah as rt}from"./vendor-XorJYlIs.js";var j={exports:{}};(function(t,e){(function(i,r){r(e,t)})(X,function(i,r){var s={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function a(){return"jsonp_"+Date.now()+"_"+Math.ceil(Math.random()*1e5)}function o(u){try{delete window[u]}catch{window[u]=void 0}}function f(u){var c=document.getElementById(u);c&&document.getElementsByTagName("head")[0].removeChild(c)}function q(u){var c=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],P=u,W=c.timeout||s.timeout,E=c.jsonpCallback||s.jsonpCallback,y=void 0;return new Promise(function(z,I){var p=c.jsonpCallbackFunction||a(),x=E+"_"+p;window[p]=function(G){z({ok:!0,json:function(){return Promise.resolve(G)}}),y&&clearTimeout(y),f(x),o(p)},P+=P.indexOf("?")===-1?"?":"&";var m=document.createElement("script");m.setAttribute("src",""+P+E+"="+p),c.charset&&m.setAttribute("charset",c.charset),c.nonce&&m.setAttribute("nonce",c.nonce),c.referrerPolicy&&m.setAttribute("referrerPolicy",c.referrerPolicy),c.crossorigin&&m.setAttribute("crossorigin","true"),m.id=x,document.getElementsByTagName("head")[0].appendChild(m),y=setTimeout(function(){I(new Error("JSONP request to "+u+" timed out")),o(p),f(x),window[p]=function(){o(p)}},W),m.onerror=function(){I(new Error("JSONP request to "+u+" failed")),o(p),f(x),y&&clearTimeout(y)}})}r.exports=q})})(j,j.exports);var at=j.exports;const ot=Z(at),g=async()=>Y("MediaBoard",{account:await Q()}),nt=async(t,e,i)=>{const r=await g(),s="vote",a={},o=[t,e,i];await b(a,r,s,o);const f=r[s](...o);return new A(f,{errorCodes:"MediaBoard",allowAlmostSuccess:!0,seq:{type:"VoteSubject",title:"Vote Subject",ts:N(),overrides:a}})},lt=async t=>{try{return t="https://twitter.com/archdeaconsal/status/1732505736616563171",(await ot("https://publish.twitter.com/oembed?url="+encodeURIComponent(t))).json()}catch(e){console.log(e)}},ct=async t=>{try{const e=await g(),i="getSocials",r=[t];return(await e[i](...r))[0][2]}catch(e){console.log(e)}},dt=async(t,e)=>{const i=await g(),r="retreat",s={},a=[t,e];await b(s,i,r,a);const o=i[r](...a);return new A(o,{errorCodes:"MediaBoard",allowAlmostSuccess:!0,seq:{type:"RetreatSubject",title:"Retreat Subject",ts:N(),overrides:s}})},ht=async t=>{const e=await g(),i="subjectToData",r={},s=[t];return await b(r,e,i,s),await e[i](...s)},ut=async t=>{const e=await g(),i="userSubjectVotes",r={},s=[t,R.bridge.account];return await b(r,e,i,s),await e[i](...s)},pt=async t=>{try{const e=await g(),i="getRetreatPrice",r=[t,1];return await e[i](...r)}catch{return 0}},mt=async t=>{const e=await g(),i="getVotePrice",r=[t,1];return await e[i](...r)},gt=async t=>{const e=await g(),i="getVotePriceWithFee",r={},s=[t,1];return await b(r,e,i,s),await e[i](...s)},It=async(t,e)=>{const i=24n*60n*60n;let r=BigInt(new Date().getTime())/1000n-i,s=`{
      subjectWeeklyVotes(first: ${t}, where:{week:${e}}, orderBy: volumeTotal, orderDirection:desc) {
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
          voteLogs(first:1, where:{time_lt:${r}} orderBy:time, orderDirection:desc){
            supply
          }
        }
      }
    }`;return await J("MediaBoard",s)},Vt=async t=>{const e=24n*60n*60n;let i=BigInt(new Date().getTime())/1000n-e,r=`{
      subjects(first: ${t}, orderBy:supply, orderDirection:desc) {
        id
        image
        name
        uri
        supply
        creator {
          address
        }
        voteLogs(first:1, where:{time_lt:${i}} orderBy:time, orderDirection:desc){
          supply
        }
      }
    }`;return await J("MediaBoard",r)};var vt=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,yt=(t,e,i,r)=>{for(var s=r>1?void 0:r?ft(e,i):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(s=(r?o(e,i,s):o(s))||s);return r&&s&&vt(e,i,s),s};class L extends tt{constructor(){super(),this.key="",this.key="tweets",this.sync()}sync(){this.tweets=JSON.parse(localStorage.getItem(this.key)||"[]")}save(){this.tweets=[...this.tweets],localStorage.setItem(this.key,JSON.stringify(this.tweets))}}yt([et({value:[]})],L.prototype,"tweets",2);const C=new L;var wt=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,l=(t,e,i,r)=>{for(var s=r>1?void 0:r?bt(e,i):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(s=(r?o(e,i,s):o(s))||s);return r&&s&&wt(e,i,s),s};const M=()=>({tx:""});let n=class extends D(""){constructor(){super(...arguments),this.bindBridge=new V(this,R),this.bindTweets=new V(this,C),this.album="",this.url="",this.name="",this.author="",this.retreatDisabled=!0,this.socialName="",this.socialURI="",this.socialID="",this.socialVerified=!1,this.tx=null,this.success=!1,this.pending=!1,this.rewards=!1,this.err=M(),this.resetState=()=>{this.err=M(),this.pending=!1,this.success=!1,this.price=void 0,this.votes=void 0},this.close=async()=>{this.tx=null,this.resetState(),this.emit("close")},this.updateErr=(t={})=>this.err=Object.assign({},this.err,t)}connectedCallback(){super.connectedCallback(),this.getPrice(),this.readFromTwitter()}get tweets(){return C.tweets}readFromLocal(t){let e={key:"",author_name:"",author_url:"",html:""};return this.tweets.some(i=>{i.key==t&&(e=i)}),e}async readFromTwitter(){let t=await ct(this.author),e=this.readFromLocal(t);e.key.length==0&&(e=await lt(this.author),e.key=t,this.tweets.unshift(e),C.save()),this.socialName=e.author_name,this.socialURI=e.author_url,this.socialID=e.author_url.substring(e.author_url.lastIndexOf("/")+1,e.author_url.length-1),this.socialVerified=e.html.includes(this.author),this.socialVerified=!0}async getPrice(){try{this.votes=ht(this.album).then(t=>t[4]),this.myVotes=ut(this.album).then(t=>(t>0&&(this.retreatDisabled=!1),t)),this.price=mt(this.album).then(t=>F(t,18)),this.retreatPrice=pt(this.album).then(t=>F(t,18))}catch(t){let e=t.message||t.code;this.updateErr({tx:e})}}async vote(){this.pending=!0;try{this.tx=await nt(this.album,1,{value:(await gt(this.album))[0]}),this.success=await this.tx.wait()}catch(t){this.tx||(this.tx={},this.tx.status=0,this.tx.err=t)}}async retreat(){this.pending=!0;try{this.tx=await dt(this.album,1),this.success=await this.tx.wait()}catch(t){this.tx||(this.tx={},this.tx.status=0,this.tx.err=t)}}render(){return h`<ui-dialog @close="${()=>{this.close()}}"><p slot="header" class="font-bold">VOTE Track</p><div slot="center" class="flex mx-4 mt-4"><div class="flex grow pb-4"><div class="w-24 mr-4"><img-loader src="${this.url}"></img-loader></div><div><div class="text-lg font-bold">${this.name}</div><div><div class="text-sm font-light text-blue-300">${S(this.socialVerified,()=>h`<span><i class="text-green-600 text-sm mdi mdi-check-decagram"></i></span>`)}${this.socialName}</div><div class="text-sm font-light text-blue-300"><a href="${this.socialURI}" target="_blank">@${this.socialID}</a></div></div><div class="text-gray-500">You own ${$(this.myVotes,h`<i class="text-sm mdi mdi-loading"></i>`)} tickets</div></div></div><div class="text-right"><span class="text-lg text-sky-500">${$(this.votes,h`<i class="text-sm mdi mdi-loading"></i>`)}</span><div class="text-sm text-gray-500">Tickets</div><span class="text-lg text-sky-500">${$(this.price,h`<i class="text-sm mdi mdi-loading"></i>`)} FTM</span><div class="text-sm text-gray-500">Vote price <i class="text-sm mdi mdi-help-circle-outline"></i></div></div></div><div slot="bottom" class="mx-4 grid grid-cols-1 text-center">${S(!this.pending,()=>h`<ui-button class="mt-1 w-full" @click="${this.vote}">Vote</ui-button><ui-button class="mt-1 w-full" ?disabled="${this.retreatDisabled}" @click="${this.retreat}">Retreat</ui-button><div class="text-sm text-gray-500">Retreat price: ${$(this.retreatPrice,h`<i class="text-sm mdi mdi-loading"></i>`)} FTM</div>`,()=>h`<tx-state .tx="${this.tx}" .opts="${{state:{success:"Success. Your vote has been submitted."}}}"><ui-button slot="view" @click="${this.close}">Close</ui-button></tx-state>`)}</div></ui-dialog>`}};l([v({type:String})],n.prototype,"album",2);l([v({type:String})],n.prototype,"url",2);l([v({type:String})],n.prototype,"name",2);l([v({type:String})],n.prototype,"author",2);l([v({type:Promise})],n.prototype,"votes",2);l([d()],n.prototype,"myVotes",2);l([d()],n.prototype,"price",2);l([d()],n.prototype,"retreatPrice",2);l([d()],n.prototype,"retreatDisabled",2);l([d()],n.prototype,"socialName",2);l([d()],n.prototype,"socialURI",2);l([d()],n.prototype,"socialID",2);l([d()],n.prototype,"socialVerified",2);l([d()],n.prototype,"tx",2);l([d()],n.prototype,"success",2);l([d()],n.prototype,"pending",2);l([d()],n.prototype,"rewards",2);l([d()],n.prototype,"err",2);n=l([O("vote-album-dialog")],n);const xt=":host{--dialogMinH: 18rem;--dialogHeaderH: 3.5rem;--dialogFooterH: 3.3125rem;visibility:hidden;position:fixed;left:0;top:0;z-index:50;display:flex;height:100%;width:100%;align-items:center;justify-content:center;padding-left:1rem;padding-right:1rem}@media (min-width: 1024px){:host{padding-left:0;padding-right:0}}:host{display:flex;width:100%;flex-direction:column}:host::part(dialog-container){width:100%;max-width:28rem;max-width:var(--appMaxW, 28rem);min-height:var(--dialogMinH)}:host::part(dialog-header){min-height:var(--dialogHeaderH)}:host::part(dialog-body){min-height:calc(var(--dialogMinH) - var(--dialogHeaderH) - var(--dialogFooterH))}:host::part(dialog-footer){min-height:var(--dialogFooterH)}.dialog-container{display:flex;width:100%;flex-direction:column;box-shadow:0 1px 3px #0000004d}.dialog-header-icons{font-size:1.25rem;line-height:1.75rem}";var $t=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,T=(t,e,i,r)=>{for(var s=r>1?void 0:r?_t(e,i):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(s=(r?o(e,i,s):o(s))||s);return r&&s&&$t(e,i,s),s},Pt=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},H=(t,e,i)=>(Pt(t,e,"read from private field"),i?i.call(t):e.get(t)),Ct=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},_;let w=class extends D(xt){constructor(){super(...arguments),this.persistent=!1,this.model=!1,this.close=async()=>{this.model=!1,this.unlisten(),await K(160),this.emit("close"),this.remove()},Ct(this,_,t=>{t.key==="Escape"&&(t.preventDefault(),this.close())})}listen(){this.unlisten(),window.addEventListener("keydown",H(this,_))}unlisten(){window.removeEventListener("keydown",H(this,_))}connectedCallback(){super.connectedCallback(),this.persistent||this.listen()}disconnectedCallback(){super.disconnectedCallback(),this.persistent||this.unlisten()}render(){return setTimeout(()=>{this.model=!0}),h`<div part="dialog-container" class="relative !origin-center z-10 bg-neutral-900 border-neutral-800 border shadow-md shadow-neutral-900 rounded-md ${st(this.$c([this.model?"scale-100 opacity-100 visible":"scale-75 opacity-0 invisible"]))}" ${B({guard:()=>this.model,properties:["opacity","visibility","margin","transform"],keyframeOptions:{duration:200}})}><slot name="top"><i part="dialog-close" class="absolute flex justify-center items-center right-4 top-4 w-6 h-6 text-2xl cursor-pointer" @click="${this.close}"><i class="mdi mdi-close"></i></i><div part="dialog-header" class="w-full rounded-t-md p-4 pr-8 flex justify-between items-center text-base"><slot name="header"></slot></div></slot><slot name="center"><div part="dialog-body" class="p-4"><slot></slot></div></slot><slot name="bottom"><div part="dialog-footer" class="w-full p-4 rounded-b-md"><slot name="footer"></slot></div></slot></div><div @click="${()=>!this.persistent&&this.close()}" part="dialog-overlay" class="z-0 absolute left-0 top-0 w-full h-full visible bg-black ${this.model?"opacity-40":"opacity-0"}" ${B({guard:()=>this.model})}></div>`}};_=new WeakMap;T([v({type:Boolean})],w.prototype,"persistent",2);T([d()],w.prototype,"model",2);w=T([O("ui-dialog")],w);const St=":host::part(dialog-container){padding-left:1rem;padding-right:1rem;padding-top:.5rem;font-size:1rem;line-height:1.5rem;min-height:100px}:host::part(dialog-header){min-height:0}:host::part(dialog-body){min-height:0}:host::part(dialog-footer){min-height:0}";var jt=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,U=(t,e,i,r)=>{for(var s=r>1?void 0:r?kt(e,i):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(s=(r?o(e,i,s):o(s))||s);return r&&s&&jt(e,i,s),s};let k=class extends D([w.styles,St]){constructor(){super(...arguments),this.button=!1,this.el$=it()}onClose(){this.emit("close")}refClose(){var t;(t=this.el$.value)==null||t.close()}render(){return h`<ui-dialog ${rt(this.el$)} @close="${this.onClose}"><slot slot="header" name="header" class="font-bold"></slot><slot></slot>${S(this.button,()=>h`<div slot="footer" class="w-full flex justify-between gap-4"><div></div><div><ui-button text @click="${this.refClose}">Close</ui-button></div></div>`)}</ui-dialog>`}};U([v({type:Boolean})],k.prototype,"button",2);k=U([O("ui-prompt")],k);export{Vt as a,ht as b,ut as m,lt as r,C as t,It as w};
