import{a as _,t as A,n as N,b as R,g as Y,c as Q,T as D,d as K}from"./index-XwFopP50.js";import{u as X,g as J}from"./claim-3rVrPObD.js";import{u as Z,v as tt,S as et,p as st,b as V,m as F,x as h,c as S,q as x,f as d,d as g,t as O,e as it,F as B,k as rt,l as at}from"./vendor-27d7NQgn.js";var j={exports:{}};(function(t,e){(function(i,r){r(e,t)})(Z,function(i,r){var s={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function a(){return"jsonp_"+Date.now()+"_"+Math.ceil(Math.random()*1e5)}function o(u){try{delete window[u]}catch{window[u]=void 0}}function v(u){var c=document.getElementById(u);c&&document.getElementsByTagName("head")[0].removeChild(c)}function q(u){var c=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],P=u,W=c.timeout||s.timeout,E=c.jsonpCallback||s.jsonpCallback,y=void 0;return new Promise(function(z,I){var p=c.jsonpCallbackFunction||a(),b=E+"_"+p;window[p]=function(G){z({ok:!0,json:function(){return Promise.resolve(G)}}),y&&clearTimeout(y),v(b),o(p)},P+=P.indexOf("?")===-1?"?":"&";var m=document.createElement("script");m.setAttribute("src",""+P+E+"="+p),c.charset&&m.setAttribute("charset",c.charset),c.nonce&&m.setAttribute("nonce",c.nonce),c.referrerPolicy&&m.setAttribute("referrerPolicy",c.referrerPolicy),c.crossorigin&&m.setAttribute("crossorigin","true"),m.id=b,document.getElementsByTagName("head")[0].appendChild(m),y=setTimeout(function(){I(new Error("JSONP request to "+u+" timed out")),o(p),v(b),window[p]=function(){o(p)}},W),m.onerror=function(){I(new Error("JSONP request to "+u+" failed")),o(p),v(b),y&&clearTimeout(y)}})}r.exports=q})})(j,j.exports);var ot=j.exports;const nt=tt(ot),f=async(t=!1)=>Y("MediaBoard",{account:t?void 0:await Q()}),lt=async(t,e,i)=>{const r=await f(),s="vote",a={},o=[t,e,i];await _(a,r,s,o);const v=r[s](...o);return new A(v,{errorCodes:"MediaBoard",allowAlmostSuccess:!0,seq:{type:"VoteSubject",title:"Vote Subject",ts:N(),overrides:a}})},ct=async t=>{try{return t="https://twitter.com/archdeaconsal/status/1732505736616563171",(await nt("https://publish.twitter.com/oembed?url="+encodeURIComponent(t))).json()}catch(e){console.log(e)}},dt=async t=>{try{const e=await f(!0),i="getSocials",r=[t];return(await e[i](...r))[0][2]}catch(e){console.log(e)}},ht=async(t,e)=>{const i=await f(),r="retreat",s={},a=[t,e];await _(s,i,r,a);const o=i[r](...a);return new A(o,{errorCodes:"MediaBoard",allowAlmostSuccess:!0,seq:{type:"RetreatSubject",title:"Retreat Subject",ts:N(),overrides:s}})},ut=async t=>{const e=await f(!0),i="subjectToData",r={},s=[t];return await _(r,e,i,s),await e[i](...s)},pt=async t=>X(t,R.bridge.account),mt=async t=>{try{const e=await f(!0),i="getRetreatPrice",r=[t,1];return await e[i](...r)}catch{return 0}},gt=async t=>{const e=await f(!0),i="getVotePrice",r=[t,1];return await e[i](...r)},ft=async t=>{const e=await f(!0),i="getVotePriceWithFee",r={},s=[t,1];return await _(r,e,i,s),await e[i](...s)},Vt=async(t,e)=>{const i=24n*60n*60n;let r=BigInt(new Date().getTime())/1000n-i,s=`{
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
    }`;return await J("MediaBoard",s)},Ft=async t=>{const e=24n*60n*60n;let i=BigInt(new Date().getTime())/1000n-e,r=`{
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
    }`;return await J("MediaBoard",r)};var vt=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,wt=(t,e,i,r)=>{for(var s=r>1?void 0:r?yt(e,i):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(s=(r?o(e,i,s):o(s))||s);return r&&s&&vt(e,i,s),s};class L extends et{constructor(){super(),this.key="",this.key="tweets",this.sync()}sync(){this.tweets=JSON.parse(localStorage.getItem(this.key)||"[]")}save(){this.tweets=[...this.tweets],localStorage.setItem(this.key,JSON.stringify(this.tweets))}}wt([st({value:[]})],L.prototype,"tweets",2);const C=new L;var bt=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,l=(t,e,i,r)=>{for(var s=r>1?void 0:r?xt(e,i):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(s=(r?o(e,i,s):o(s))||s);return r&&s&&bt(e,i,s),s};const M=()=>({tx:""});let n=class extends D(""){constructor(){super(...arguments),this.bindBridge=new V(this,R),this.bindTweets=new V(this,C),this.album="",this.url="",this.name="",this.author="",this.retreatDisabled=!0,this.socialName="",this.socialURI="",this.socialID="",this.socialVerified=!1,this.tx=null,this.success=!1,this.pending=!1,this.rewards=!1,this.err=M(),this.resetState=()=>{this.err=M(),this.pending=!1,this.success=!1,this.price=void 0,this.votes=void 0},this.close=async()=>{this.tx=null,this.resetState(),this.emit("close")},this.updateErr=(t={})=>this.err=Object.assign({},this.err,t)}connectedCallback(){super.connectedCallback(),this.getPrice(),this.readFromTwitter()}get tweets(){return C.tweets}readFromLocal(t){let e={key:"",author_name:"",author_url:"",html:""};return this.tweets.some(i=>{i.key==t&&(e=i)}),e}async readFromTwitter(){let t=await dt(this.author),e=this.readFromLocal(t);e.key.length==0&&(e=await ct(this.author),e.key=t,this.tweets.unshift(e),C.save()),this.socialName=e.author_name,this.socialURI=e.author_url,this.socialID=e.author_url.substring(e.author_url.lastIndexOf("/")+1,e.author_url.length-1),this.socialVerified=e.html.includes(this.author),this.socialVerified=!0}async getPrice(){try{this.votes=ut(this.album).then(t=>t[4]),this.myVotes=pt(this.album).then(t=>(t>0&&(this.retreatDisabled=!1),t)),this.price=gt(this.album).then(t=>F(t,18)),this.retreatPrice=mt(this.album).then(t=>F(t,18))}catch(t){let e=t.message||t.code;this.updateErr({tx:e})}}async vote(){this.pending=!0;try{this.tx=await lt(this.album,1,{value:(await ft(this.album))[0]}),this.success=await this.tx.wait()}catch(t){this.tx||(this.tx={},this.tx.status=0,this.tx.err=t)}}async retreat(){this.pending=!0;try{this.tx=await ht(this.album,1),this.success=await this.tx.wait()}catch(t){this.tx||(this.tx={},this.tx.status=0,this.tx.err=t)}}render(){return h`<ui-dialog @close="${()=>{this.close()}}"><p slot="header" class="font-bold">VOTE Track</p><div slot="center" class="flex mx-4 mt-4"><div class="flex grow pb-4"><div class="w-24 mr-4"><img-loader src="${this.url}"></img-loader></div><div><div class="text-lg font-bold">${this.name}</div><div><div class="text-sm font-light text-blue-300">${S(this.socialVerified,()=>h`<span><i class="text-green-600 text-sm mdi mdi-check-decagram"></i></span>`)}${this.socialName}</div><div class="text-sm font-light text-blue-300"><a href="${this.socialURI}" target="_blank">@${this.socialID}</a></div></div><div class="text-gray-500">You own ${x(this.myVotes,h`<i class="text-sm mdi mdi-loading"></i>`)} tickets</div></div></div><div class="text-right"><span class="text-lg text-sky-500">${x(this.votes,h`<i class="text-sm mdi mdi-loading"></i>`)}</span><div class="text-sm text-gray-500">Tickets</div><span class="text-lg text-sky-500">${x(this.price,h`<i class="text-sm mdi mdi-loading"></i>`)} FTM</span><div class="text-sm text-gray-500">Vote price <i class="text-sm mdi mdi-help-circle-outline"></i></div></div></div><div slot="bottom" class="mx-4 grid grid-cols-1 text-center">${S(!this.pending,()=>h`<ui-button class="mt-1 w-full" @click="${this.vote}">Vote</ui-button><ui-button class="mt-1 w-full" ?disabled="${this.retreatDisabled}" @click="${this.retreat}">Retreat</ui-button><div class="text-sm text-gray-500">Retreat price: ${x(this.retreatPrice,h`<i class="text-sm mdi mdi-loading"></i>`)} FTM</div>`,()=>h`<tx-state .tx="${this.tx}" .opts="${{state:{success:"Success. Your vote has been submitted."}}}"><ui-button slot="view" @click="${this.close}">Close</ui-button></tx-state>`)}</div></ui-dialog>`}};l([g({type:String})],n.prototype,"album",2);l([g({type:String})],n.prototype,"url",2);l([g({type:String})],n.prototype,"name",2);l([g({type:String})],n.prototype,"author",2);l([g({type:Promise})],n.prototype,"votes",2);l([d()],n.prototype,"myVotes",2);l([d()],n.prototype,"price",2);l([d()],n.prototype,"retreatPrice",2);l([d()],n.prototype,"retreatDisabled",2);l([d()],n.prototype,"socialName",2);l([d()],n.prototype,"socialURI",2);l([d()],n.prototype,"socialID",2);l([d()],n.prototype,"socialVerified",2);l([d()],n.prototype,"tx",2);l([d()],n.prototype,"success",2);l([d()],n.prototype,"pending",2);l([d()],n.prototype,"rewards",2);l([d()],n.prototype,"err",2);n=l([O("vote-album-dialog")],n);const $t=":host{--dialogMinH: 18rem;--dialogHeaderH: 3.5rem;--dialogFooterH: 3.3125rem;visibility:hidden;position:fixed;left:0;top:0;z-index:50;display:flex;height:100%;width:100%;align-items:center;justify-content:center;padding-left:1rem;padding-right:1rem}@media (min-width: 1024px){:host{padding-left:0;padding-right:0}}:host{display:flex;width:100%;flex-direction:column}:host::part(dialog-container){width:100%;max-width:28rem;max-width:var(--appMaxW, 28rem);min-height:var(--dialogMinH)}:host::part(dialog-header){min-height:var(--dialogHeaderH)}:host::part(dialog-body){min-height:calc(var(--dialogMinH) - var(--dialogHeaderH) - var(--dialogFooterH))}:host::part(dialog-footer){min-height:var(--dialogFooterH)}.dialog-container{display:flex;width:100%;flex-direction:column;box-shadow:0 1px 3px #0000004d}.dialog-header-icons{font-size:1.25rem;line-height:1.75rem}";var _t=Object.defineProperty,Pt=Object.getOwnPropertyDescriptor,T=(t,e,i,r)=>{for(var s=r>1?void 0:r?Pt(e,i):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(s=(r?o(e,i,s):o(s))||s);return r&&s&&_t(e,i,s),s},Ct=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},H=(t,e,i)=>(Ct(t,e,"read from private field"),i?i.call(t):e.get(t)),St=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},$;let w=class extends D($t){constructor(){super(...arguments),this.persistent=!1,this.model=!1,this.close=async()=>{this.model=!1,this.unlisten(),await K(160),this.emit("close"),this.remove()},St(this,$,t=>{t.key==="Escape"&&(t.preventDefault(),this.close())})}listen(){this.unlisten(),window.addEventListener("keydown",H(this,$))}unlisten(){window.removeEventListener("keydown",H(this,$))}connectedCallback(){super.connectedCallback(),this.persistent||this.listen()}disconnectedCallback(){super.disconnectedCallback(),this.persistent||this.unlisten()}render(){return setTimeout(()=>{this.model=!0}),h`<div part="dialog-container" class="relative !origin-center z-10 bg-neutral-900 border-neutral-800 border shadow-md shadow-neutral-900 rounded-md ${it(this.$c([this.model?"scale-100 opacity-100 visible":"scale-75 opacity-0 invisible"]))}" ${B({guard:()=>this.model,properties:["opacity","visibility","margin","transform"],keyframeOptions:{duration:200}})}><slot name="top"><i part="dialog-close" class="absolute flex justify-center items-center right-4 top-4 w-6 h-6 text-2xl cursor-pointer" @click="${this.close}"><i class="mdi mdi-close"></i></i><div part="dialog-header" class="w-full rounded-t-md p-4 pr-8 flex justify-between items-center text-base"><slot name="header"></slot></div></slot><slot name="center"><div part="dialog-body" class="p-4"><slot></slot></div></slot><slot name="bottom"><div part="dialog-footer" class="w-full p-4 rounded-b-md"><slot name="footer"></slot></div></slot></div><div @click="${()=>!this.persistent&&this.close()}" part="dialog-overlay" class="z-0 absolute left-0 top-0 w-full h-full visible bg-black ${this.model?"opacity-40":"opacity-0"}" ${B({guard:()=>this.model})}></div>`}};$=new WeakMap;T([g({type:Boolean})],w.prototype,"persistent",2);T([d()],w.prototype,"model",2);w=T([O("ui-dialog")],w);const jt=":host::part(dialog-container){padding-left:1rem;padding-right:1rem;padding-top:.5rem;font-size:1rem;line-height:1.5rem;min-height:100px}:host::part(dialog-header){min-height:0}:host::part(dialog-body){min-height:0}:host::part(dialog-footer){min-height:0}";var kt=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,U=(t,e,i,r)=>{for(var s=r>1?void 0:r?Dt(e,i):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(s=(r?o(e,i,s):o(s))||s);return r&&s&&kt(e,i,s),s};let k=class extends D([w.styles,jt]){constructor(){super(...arguments),this.button=!1,this.el$=rt()}onClose(){this.emit("close")}refClose(){var t;(t=this.el$.value)==null||t.close()}render(){return h`<ui-dialog ${at(this.el$)} @close="${this.onClose}"><slot slot="header" name="header" class="font-bold"></slot><slot></slot>${S(this.button,()=>h`<div slot="footer" class="w-full flex justify-between gap-4"><div></div><div><ui-button text @click="${this.refClose}">Close</ui-button></div></div>`)}</ui-dialog>`}};U([g({type:Boolean})],k.prototype,"button",2);k=U([O("ui-prompt")],k);export{Ft as a,ut as b,pt as m,ct as r,C as t,Vt as w};
