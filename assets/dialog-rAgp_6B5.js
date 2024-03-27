import{g as v,f as g,h as $,n as P,x as V,i as j,T as _,u as C,o as f,y as p}from"./index-InXZl-Dp.js";import{m as x,e as B,f as m,x as c,n as d,ad as w,J as n,j as u,l as k}from"./vendor-P2KLLNE-.js";const F=async(t,e,a)=>{const s=await v(),o="vote",l={},h=[t,e,a];await g(l,s,o,h);const S=s[o](...h);return new $(S,{errorCodes:"MediaBoard",allowAlmostSuccess:!0,seq:{type:"VoteSubject",title:"Vote Subject",ts:P(),overrides:l}})},T=async(t,e)=>{const a=await v(),s="retreat",o={},l=[t,e];await g(o,a,s,l);const h=a[s](...l);return new $(h,{errorCodes:"MediaBoard",allowAlmostSuccess:!0,seq:{type:"RetreatSubject",title:"Retreat Subject",ts:P(),overrides:o}})},A=async t=>V(t,await j()),D=async t=>{try{const e=await v(!0),a="getRetreatPrice",s=[t,1];return await e[a](...s)}catch{return 0}},y=async t=>{const e=await v(!0),a="getVotePriceWithFee",s={},o=[t,1];return await g(s,e,a,o),await e[a](...o)};var E=Object.defineProperty,O=Object.getOwnPropertyDescriptor,r=(t,e,a,s)=>{for(var o=s>1?void 0:s?O(e,a):e,l=t.length-1,h;l>=0;l--)(h=t[l])&&(o=(s?h(e,a,o):h(o))||o);return s&&o&&E(e,a,o),o};const b=()=>({tx:""});let i=class extends _(""){constructor(){super(...arguments),this.bindBridge=new x(this,C),this.bindTweets=new x(this,f),this.bindBalance=new x(this,p),this.action="",this.album="",this.url="",this.name="",this.author="",this.myVotes=0,this.votePrice=0,this.voteFee=0,this.retreatPrice=0,this.tx=null,this.success=!1,this.pending=!1,this.rewards=!1,this.err=b(),this.ts=0,this.resetState=()=>{this.err=b(),this.pending=!1,this.success=!1,this.votePrice=0,this.retreatPrice=0,this.votes=void 0},this.emitChange=()=>{this.emit("change")},this.close=async()=>{this.tx=null,this.resetState(),this.emit("close")},this.go=(t="")=>{this.close(),t==="rewards"&&B.emit("reward-show")},this.updateErr=(t={})=>this.err=Object.assign({},this.err,t)}async connectedCallback(){super.connectedCallback(),await this.getPrice(),await this.readFromTwitter()}get hasVoted(){return this.ts&&+m(this.myVotes,1)>0}get insufficientBalance(){return!!(p.inited&&+p.balance==0||this.ts&&+p.balance<+this.votePrice)}get btnDisabled(){return this.pending||this.insufficientBalance}async readFromTwitter(){this.social=await f.fromAddress(this.author)}async getPrice(){try{const[[t,e],a,s]=await Promise.all([y(this.album),D(this.album),A(this.album)]);this.votePrice=m(t),this.voteFee=m(t-e).toString(),this.retreatPrice=m(a),this.myVotes=s}catch(t){let e=t.message||t.code;this.updateErr({tx:e})}this.ts++}async vote(){this.pending=!0;try{this.tx=await F(this.album,1,{value:(await y(this.album))[0]}),this.success=await this.tx.wait(),this.emitChange()}catch(t){let e=t.message||t.code;if(t.code===4001)return this.updateErr({tx:e}),this.close();this.tx||(this.tx={},this.tx.status=0,this.tx.err=t)}}async retreat(){this.pending=!0;try{this.tx=await T(this.album,1),this.success=await this.tx.wait(),await this.emitChange()}catch(t){let e=t.message||t.code;if(t.code===4001)return this.updateErr({tx:e}),this.close();this.tx||(this.tx={},this.tx.status=0,this.tx.err=t)}}render(){var t,e;return c`<ui-dialog @close="${()=>{this.close()}}"><p slot="header" class="w-full text-base mr-2">Vote</p><div slot="center" class="flex mx-4 my-6"><div class="flex grow justify-between p-4 border border-white/15 rounded-xl"><div class="flex gap-3 md_gap-6"><div class="w-20 h-20 md_w-24 md_h-24 rounded-lg bg-white/10"><img-loader class="w-20 h-20 md_w-24 md_h-24 rounded-lg" src="${this.url}"></img-loader></div><div><div class="text-lg mb-1.5">${this.name}</div><div class="text-sm">${(t=this.social)==null?void 0:t.name}</div>${d((e=this.social)==null?void 0:e.id,()=>{var a,s;return c`<a class="text-sm text-blue-300" href="${(a=this.social)==null?void 0:a.url}" target="_blank">@${(s=this.social)==null?void 0:s.id}</a>`},()=>c`-`)}<div class="text-neutral-400">You own ${d(this.ts,()=>c`${m(this.myVotes,0)}`,()=>c`<i class="text-sm mdi mdi-loading"></i>`)} tickets</div></div></div><div class="flex flex-col justify-center items-center"><span class="text-xl font-medium">${w(this.votes,c`<i class="text-sm mdi mdi-loading"></i>`)}</span><div class="text-sm text-gray-500">Tickets</div></div></div></div><div slot="bottom" class="mx-4 pb-8"><p class="w-full flex justify-between items-center">Price <span class="text-right"><span class="text-sm text-gray-500">Vote price <i class="text-sm mdi mdi-help-circle-outline"></i></span></span></p><div class="mt-8">${d(!this.pending,()=>c`${d(this.ts&&this.action==="vote",()=>c`<div class="flex flex-col justify-center items-center px-4"><div class="flex flex-col justify-center items-center">${d(this.votePrice>0,()=>c`<span class="text-3xl text-yellow-500">${this.votePrice}</span> <span class="opacity-80 ml-2">(${this.voteFee} fee included)</span>`,()=>c`<i class="text-sm mdi mdi-loading"></i>`)}</div><ui-button class="mt-3 min-w-36 w-full md_w-40" ?disabled="${this.btnDisabled}" ?pending="${this.pending}" @click="${this.vote}">${this.insufficientBalance?"Insufficient Balance":"Vote"}</ui-button><p class="mt-4">Please get<ui-link @click="${()=>this.go("rewards")}">rewards first</ui-link>or<ui-link href="/profile">retreat tickets</ui-link>and try again.</p></div>`)} ${d(this.ts&&this.hasVoted&&this.action==="retreat",()=>c`<div class="flex flex-col justify-center items-center px-4 border-white/12"><div class="text-3xl text-yellow-500">${w(this.retreatPrice,c`<i class="text-sm mdi mdi-loading"></i>`)}</div><ui-button class="mt-3 w-full md_w-36" ?disabled="${this.btnDisabled}" ?pending="${this.pending}" @click="${this.retreat}">${this.insufficientBalance?"Insufficient Balance":"Retreat"}</ui-button></div>`)}`,()=>c`<tx-state .tx="${this.tx}" .opts="${{state:{success:"Success. Your vote has been submitted."}}}"><ui-button slot="view" @click="${this.close}">Close</ui-button></tx-state>`)}</div></div></ui-dialog>`}};r([u({type:String})],i.prototype,"action",2);r([u({type:String})],i.prototype,"album",2);r([u({type:String})],i.prototype,"url",2);r([u({type:String})],i.prototype,"name",2);r([u({type:String})],i.prototype,"author",2);r([u({type:Promise})],i.prototype,"votes",2);r([n()],i.prototype,"myVotes",2);r([n()],i.prototype,"votePrice",2);r([n()],i.prototype,"voteFee",2);r([n()],i.prototype,"retreatPrice",2);r([n()],i.prototype,"social",2);r([n()],i.prototype,"tx",2);r([n()],i.prototype,"success",2);r([n()],i.prototype,"pending",2);r([n()],i.prototype,"rewards",2);r([n()],i.prototype,"err",2);r([n()],i.prototype,"ts",2);i=r([k("vote-album-dialog")],i);export{A as m};
