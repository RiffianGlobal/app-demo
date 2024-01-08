import{T as m,b as h,e as g}from"./index-XwFopP50.js";import{w,a as x}from"./prompt-KDApxVCA.js";import{a as y}from"./claim-3rVrPObD.js";import{b,x as l,c as p,g as $,e as j,m as L,f as d,d as k,t as f}from"./vendor-27d7NQgn.js";const T="li.header{margin-bottom:.5rem;font-weight:300;--tw-text-opacity: 1;color:#fafaf9;color:rgba(250,250,249,var(--tw-text-opacity));border-bottom:1px solid #898989}li.item:hover{--tw-bg-opacity: 1;background-color:#3f3f46;background-color:rgba(63,63,70,var(--tw-bg-opacity))}@media (min-width: 500px){.name{font-size:1.25rem;line-height:1.75rem}}.icon{font-size:1.875rem;line-height:2.25rem}@media (max-width: 500px){.icon{font-size:1.5rem;line-height:2rem}}";var V=Object.defineProperty,_=Object.getOwnPropertyDescriptor,r=(t,e,s,o)=>{for(var i=o>1?void 0:o?_(e,s):e,n=t.length-1,c;n>=0;n--)(c=t[n])&&(i=(o?c(e,s,i):c(i))||i);return o&&i&&V(e,s,i),i};let a=class extends m(T){constructor(){super(...arguments),this.bindBridge=new b(this,h),this.weekly=!1,this.showAlbumVote=!1,this.albumToVote={id:"",supply:0,url:"",name:"",creator:{address:""},uri:"",image:""},this.pending=!1,this.prompt=!1,this.promptMessage="",this.init=async()=>{this.pending=!0;try{let s=this.weekly?await w(10,await y()):await x(10);this.subjectList=this.weekly?s.subjectWeeklyVotes:s.subjects}catch(s){console.error(s),this.promptMessage=s,this.prompt=!0;return}this.pending=!1;let t=["https://cdn.shopify.com/app-store/listing_images/a82167e02b45cadf681efc6c17c35f3a/icon/CMmMjb30lu8CEAE=.jpg"];for(var e=0;e<this.subjectList.length;e++){if(this.weekly){let s=this.subjectList[e];this.subjectList[e]=s.subject,this.subjectList[e].volumeTotal=s.volumeTotal}(!this.subjectList[e].image||!this.subjectList[e].image.startsWith("http"))&&(this.subjectList[e].image=t[0])}},this.close=()=>{this.showAlbumVote=!1,this.init()}}get disabled(){return!h.bridge.account}connectedCallback(){super.connectedCallback(),this.init()}getRandomInt(t){return Math.floor(Math.random()*t)}static dayChange(t){if(t.voteLogs.length==0)return"New";{let e=t.voteLogs[0].supply,s=t.supply,o=Math.abs(e-s),i=(o*100/e).toFixed(1);return e>s?l`<p class="text-red-500">-${i}%</p>`:l`<p class="text-green-500">+${i}%</p>`}}render(){return l`<div>${p(this.pending&&!this.subjectList,()=>l`<div name="Loading" class="doc-intro"><div class="flex flex-col gap-8 m-8"><loading-skeleton num="3"></loading-skeleton><loading-skeleton num="3"></loading-skeleton><loading-skeleton num="3"></loading-skeleton></div></div>`)} ${p(this.subjectList,()=>l`<ul role="list"><li class="flex header p-1"><div class="w-16">Rank</div><div class="flex-auto">Collection</div><div class="flex-auto text-right pr-3">${this.weekly?"Volume":"Price"}</div><div class="flex-none w-16 text-right">24H</div>${p(this.pending,()=>l`<div><i class="text-sm mdi mdi-loading"></i><div></div></div>`)}</li>${$(this.subjectList,(t,e)=>l`<li class="flex py-2 items-center cursor-pointer ${j({"bg-zinc-800/50":e%2})}" @click="${()=>{this.disabled?g.emit("connect-wallet"):(this.albumToVote=t,location.href="/track/"+t.id)}}"><div class="flex-none w-16 pl-4 text-lg font-light">${e+1}</div><div class="flex-initial flex"><div class="w-[4.6rem] h-[4.6rem] mr-4"><img-loader .src="${t.image}"></img-loader></div><div><p class="name truncate mt-2">${t.name}</p><span class="icon mt-1"><i class="mdi mdi-play-circle-outline"></i></span></div></div><div class="flex-auto text-right pr-3"><p class="text-2xl">${this.weekly?L(t.volumeTotal,18):(Number(t.supply)+1)/10}</p></div><div class="flex-none w-16 text-lg font-light">${a.dayChange(t)}</div></li>`)}</ul>${p(this.showAlbumVote,()=>l`<vote-album-dialog album="${this.albumToVote.id}" url="${this.albumToVote.image}" name="${this.albumToVote.name}" votes="${this.albumToVote.supply}" author="${this.albumToVote.creator.address}" @close="${this.close}"></vote-album-dialog>`)}`)}</div>${p(this.prompt,()=>l`<p class="text-center text-orange-600">${this.promptMessage}</p>`)}`}};r([k({type:Boolean})],a.prototype,"weekly",2);r([d()],a.prototype,"subjectList",2);r([d()],a.prototype,"showAlbumVote",2);r([d()],a.prototype,"albumToVote",2);r([d()],a.prototype,"pending",2);r([d()],a.prototype,"prompt",2);r([d()],a.prototype,"promptMessage",2);a=r([f("top-album")],a);var C=Object.defineProperty,M=Object.getOwnPropertyDescriptor,v=(t,e,s,o)=>{for(var i=o>1?void 0:o?M(e,s):e,n=t.length-1,c;n>=0;n--)(c=t[n])&&(i=(o?c(e,s,i):c(i))||i);return o&&i&&C(e,s,i),i};let u=class extends m(""){constructor(){super(...arguments),this.bindBridge=new b(this,h),this.dialog=!1,this.open=()=>{this.disabled?g.emit("connect-wallet"):this.dialog=!0},this.close=()=>this.dialog=!1}get disabled(){return!h.bridge.account}render(){return l`<ui-button icon @click="${this.open}" title="Bind Social"><i class="i mdi mdi-twitter"></i></ui-button>${p(this.dialog,()=>l`<create-social-dialog @close="${this.close}"></create-social-dialog>`)}`}};v([d()],u.prototype,"dialog",2);u=v([f("bind-social-btn")],u);