import{N as C,T as b,a as q,t as I,n as V,g as A,c as L,b as y}from"./index-9vjOeiFm.js";import{x as o,Z as M,a0 as U,v,t as x,a7 as G,a8 as J,a9 as K,aa as H,ab as O,ac as X,V as T,E as g,a3 as j,w as l}from"./vendor-DbPfqJYA.js";const F=function(s){let{status:t,statusText:e}=s;if(s.ok)return s;e||(e+=t);let a=new Error(e);throw Object.assign(a,{raw:s,code:t,message:e}),a},z=function(s){const t=s.headers.get("content-type");return/^image\//.test(t)?s.blob():/^(text)\//.test(t)?s.text():s.json().catch(function(e){throw e}).then(function(e){const a=e.data??e.result??e,r=e.error_code??a.error_code??a.code??a.error??e.code??(a.errors?"Errors":void 0)??s.status;if(r&&![200].includes(r)){const i=a.error_message||a.error_msg||a.message||a.msg||e.msg||e.message||e.data||(a.errors??[]).map(n=>n.message).join(`

`);throw Object.assign(new Error(r),{code:r,message:i,raw:s})}return a})},S=async function(s,t={}){const e={method:"GET",headers:{accept:"application/json, */*"},mode:"cors",credentials:"same-origin"};return Object.assign(t,e,{...t}),t.headers&&Object.assign(t.headers,e.headers,{...t.headers}),fetch(s,t).then(F).then(z).catch(function(a){throw a})},Q=s=>!/^(?:[a-z+]+:)?\/\//.test(s),Y=s=>Q(s)?location.origin+(/^\//.test(s)?"":location.pathname):s,P=function(s,t={}){const e=new URL(s,Y(s));for(let a in t)e.searchParams.set(a,t[a]);return e.toString()};class Z{constructor(){this.fetch=S}get(t,e={},a){return S(P(t,e),a)}post(t,e={},{method:a="POST",form:r=!1,search:i=!1,headers:n={}}={}){const c=r?new URLSearchParams(e).toString():JSON.stringify(e);return S(i?P(t,e):t,{method:a,headers:{"Content-Type":r?"application/x-www-form-urlencoded":"application/json",...n},body:c})}delete(t,e={},a={}){return this.post(t,e,{...a,method:"DELETE"})}}const tt=new Z,D={main:{"0x1":"https://api.studio.thegraph.com/query/","0xaa36a7":"https://api.studio.thegraph.com/query/","0x5":"https://api.studio.thegraph.com/query/"},MediaBoard:{"0xfa2":"https://api.thegraph.com/subgraphs/name/pho360360/riffianboard"}},et=s=>{let t=D[s][C.chainId];return t||(console.error(`Not available for selected network(chain id ${C.chainId}). Fallback to default chainid`),t=D[s][C.defaultChainId]),t},E=async(s="main",t,e,a)=>tt.post(et(s),{query:t,variables:e,operationName:a}),st='.skeleton{display:inline-flex;height:100%;width:100%;flex-direction:column;gap:1rem}.p{height:100%;width:6rem;overflow:hidden;border-radius:.375rem;height:1em;background:#dee2e6}.p:after{content:"";display:block;height:100%;width:100%;background:linear-gradient(90deg,#fff0 8%,#fffc 36%,#fff0 66%) 0% 0% / 1200px;animation:skeleton 3s ease-in-out infinite}.p:nth-child(2){width:9rem}.p:nth-child(3){width:12rem}@keyframes skeleton{0%{background-position:-1200px 0}to{background-position:1200px 0}}';var at=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,$=(s,t,e,a)=>{for(var r=a>1?void 0:a?rt(t,e):t,i=s.length-1,n;i>=0;i--)(n=s[i])&&(r=(a?n(t,e,r):n(r))||r);return a&&r&&at(t,e,r),r};let w=class extends b(st){constructor(){super(...arguments),this.expect=!1,this.num=1,this.class=""}get groups(){return new Array(this.num)}render(){return this.expect?o`<slot></slot>`:o`<div class="skeleton ${M(this.$c([this.class]))}">${U(this.groups,()=>o`<div class="p"></div>`)}</div>`}};$([v({type:Boolean})],w.prototype,"expect",2);$([v({type:Number})],w.prototype,"num",2);$([v({type:String})],w.prototype,"class",2);w=$([x("loading-skeleton")],w);var it=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,N=(s,t,e,a)=>{for(var r=a>1?void 0:a?nt(t,e):t,i=s.length-1,n;i>=0;i--)(n=s[i])&&(r=(a?n(t,e,r):n(r))||r);return a&&r&&it(t,e,r),r};let R=class extends b(""){constructor(){super(...arguments),this.type="inline"}render(){switch(this.type){case"block":return o`<div class="block mx-auto my-8 text-center text-xl"><i class="mdi mdi-loading mx-1"></i></div>`;default:return o`<i class="mdi mdi-loading mr-1"></i><slot>Loading...</slot>`}}};N([v({type:String})],R.prototype,"type",2);R=N([x("loading-icon")],R);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ot extends J{constructor(){super(...arguments),this._$Cq=new K(this),this._$CK=new H}render(t,e){return O}update(t,[e,a]){if(this.isConnected||this.disconnected(),e===this._$CX)return;this._$CX=e;let r=0;const{_$Cq:i,_$CK:n}=this;return X(e,async c=>{for(;n.get();)await n.get();const d=i.deref();if(d!==void 0){if(d._$CX!==e)return!1;a!==void 0&&(c=a(c,r)),d.commitValue(c,r),r++}return!0}),O}commitValue(t,e){this.setValue(t)}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const ct=G(ot),k=async()=>A("MediaBoard",{account:await L()}),lt=async()=>{const s=await k(),t="claimReward",e={},a=[m()];await q(e,s,t,a);const r=s[t](...a);return new I(r,{errorCodes:"MediaBoard",allowAlmostSuccess:!0,seq:{type:"ClaimAlbumRewards",title:"Claim Album Rewards",ts:V(),overrides:e}})},dt=async s=>{const t=await k(),e=await m(),a="userWeeklyVotes",r=[s,e];let i=await t[a](...r);const n="weeklyVotes",c=[e];let d=await t[n](...c);return d==0n?0:await W()*i/d},W=async()=>{const s=await k(),t="weeklyReward",e=[m()];return await s[t](...e)};var u=0n;const ht=async()=>await E("MediaBoard",`{
      statistic(id:"riffian") {
        week
      }
    }`),ut=async s=>{let t=`{
      weeklyStatistic(id:"${s}") {
        volumeVote
      }
    }`;return await E("MediaBoard",t)},m=async()=>{if(u!=0n)return u;const s=7n*24n*60n*60n;try{let a=await(await k())["startTimeStamp"](),r=BigInt(new Date().getTime())/1000n;u=r-(r-a)%s}catch{let e=await ht(),a=BigInt(new Date().getTime())/1000n;u=BigInt(e.statistic.week),u=a-(a-u)%s}return u};var pt=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,p=(s,t,e,a)=>{for(var r=a>1?void 0:a?gt(t,e):t,i=s.length-1,n;i>=0;i--)(n=s[i])&&(r=(a?n(t,e,r):n(r))||r);return a&&r&&pt(t,e,r),r};const B=()=>({tx:""});let h=class extends b(""){constructor(){super(...arguments),this.bindBridge=new T(this,y),this.userWeeklyReward=-1,this.tx=null,this.success=!1,this.pending=!1,this.rewards=!1,this.err=B(),this.resetState=()=>{this.err=B(),this.pending=!1,this.success=!1,this.userWeeklyReward=0},this.close=async()=>{this.tx=null,this.resetState(),this.emit("close")},this.updateErr=(s={})=>this.err=Object.assign({},this.err,s)}connectedCallback(){super.connectedCallback(),this.getPrice()}async getPrice(){try{this.userWeeklyReward=await dt(y.bridge.account)}catch(s){let t=s.message||s.code;this.updateErr({tx:t})}finally{}}async claim(){this.pending=!0;try{this.tx=await lt(),this.success=await this.tx.wait()}catch(s){console.log(s);let t=s.message||s.code;if(s.code===4001||s.code==="INVALID_ARGUMENT")return this.updateErr({tx:t}),this.close()}finally{this.pending=!1}}render(){return o`<ui-dialog @close="${()=>{this.close()}}"><p slot="header" class="my-2 font-bold">Claim Rewards</p><div class="grid place-items-center b-1 border m-4 p-4 rounded-md">${g(!(this.userWeeklyReward>=0),()=>o`<div class="my-4"><loading-icon></loading-icon></div>`)} ${g(this.userWeeklyReward>=0&&!this.pending,()=>o`<p class="font-bold">Reward Value</p><p class="text-xl text-sky-500">${j(this.userWeeklyReward,18)} FTM</p><ui-button ?disabled="${this.userWeeklyReward<=0}" class="m-1" @click="${this.claim}">CLAIM</ui-button>`)}${g(this.pending,()=>o`<tx-state .tx="${this.tx}" .opts="${{state:{success:"Success. Your claim request has been submitted."}}}"><ui-button slot="view" href="/">Close</ui-button></tx-state>`)}</div></ui-dialog>`}};p([l()],h.prototype,"userWeeklyReward",2);p([l()],h.prototype,"tx",2);p([l()],h.prototype,"success",2);p([l()],h.prototype,"pending",2);p([l()],h.prototype,"rewards",2);p([l()],h.prototype,"err",2);h=p([x("claim-reward-dialog")],h);const wt=".text-highlight{color:var(--colorHighlight)}";var mt=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,_=(s,t,e,a)=>{for(var r=a>1?void 0:a?ft(t,e):t,i=s.length-1,n;i>=0;i--)(n=s[i])&&(r=(a?n(t,e,r):n(r))||r);return a&&r&&mt(t,e,r),r};let f=class extends b(wt){constructor(){super(...arguments),this.bindBridge=new T(this,y),this.rewards=0n,this.pending=!0,this.dialog=!1,this.timeCountDown=async function*(){const s=7n*24n*60n*60n;let t=await m(),e=0n;do{let a=BigInt(new Date().getTime())/1000n;e=t+s-a;let r=e/86400n,i=(e-r*86400n)/3600n,n=(e-r*86400n-i*3600n)/60n,c=e-r*86400n-i*3600n-n*60n;yield r.toString()+"D "+i.toString().padStart(2,"0")+"H "+n.toString().padStart(2,"0")+"M "+c.toString().padStart(2,"0"),await new Promise(d=>setTimeout(d,1e3))}while(e>1)},this.open=()=>this.dialog=!0,this.close=()=>this.dialog=!1}get disabled(){return!y.bridge.account}connectedCallback(){super.connectedCallback(),this.weeklyRewards()}async weeklyRewards(){try{this.pending=!0;try{this.rewards=await W()}catch{let t=await ut(await m());this.rewards=BigInt(t.weeklyStatistic.volumeVote)*4n/100n}this.pending=!1}catch(s){console.error("claim",s)}}render(){return o`<div class="text-right"><div class="font-light text-2xl text-highlight">${g(this.pending,()=>o`<i class="text-lg mdi mdi-loading"></i>`,()=>o`<ui-button icon class="ml-1 mx-auto sm" @click="${this.open}" ?disabled="${this.disabled}" title="Claim"><i class="mdi mdi-hand-coin-outline"></i></ui-button>${j(this.rewards,18)}`)}</div><div class="font-light text-green-500 mt-2">${ct(this.timeCountDown())}</div></div>${g(this.dialog,()=>o`<claim-reward-dialog @close="${this.close}"></claim-reward-dialog>`)}`}};_([l()],f.prototype,"rewards",2);_([l()],f.prototype,"pending",2);_([l()],f.prototype,"dialog",2);f=_([x("claim-rewards")],f);export{m as a,E as g,ct as h};
