import{a as b,t as _,n as C,g as O,c as P,T as m,b as h}from"./index-j07SvdS3.js";import{g as V}from"./claim-jRGGu_nD.js";import{a as $,x as n,c as u,u as j,f as c,d as v,b as f,h as A}from"./vendor-od9KRoES.js";const y=async()=>O("MediaBoard",{account:await P()}),S=async(t,s)=>{const a=await y(),r="getRetreatPrice",e={},i=[t,s];return await b(e,a,r,i),await a[r](...i)},E=async(t,s)=>{const a=await y(),r="userSubjectVotes",e={},i=[t,s];return await b(e,a,r,i),await a[r](...i)},R=async(t,s)=>{const a=await y(),r="retreat",e={},i=[t,s];await b(e,a,r,i);const o=a[r](...i);return new _(o,{errorCodes:"MediaBoard",allowAlmostSuccess:!0,seq:{type:"RetreatSubject",title:"Retreat Subject",ts:C(),overrides:e}})},T=async t=>{let s=`{
      userAlbumVotes(where:{holding_gt:0,user:"${t.toLowerCase()}"}) {
        holding
        votes
        album {
          id
          name
          image
          url
          totalVotes
          artist{
            address
          }
        }
      }
    }`;return await V("MediaBoard",s)};var D=Object.defineProperty,M=Object.getOwnPropertyDescriptor,d=(t,s,a,r)=>{for(var e=r>1?void 0:r?M(s,a):s,i=t.length-1,o;i>=0;i--)(o=t[i])&&(e=(r?o(s,a,e):o(e))||e);return r&&e&&D(s,a,e),e};const w=()=>({tx:""});let l=class extends m(""){constructor(){super(...arguments),this.bindBridge=new $(this,h),this.album="",this.url="",this.votes=0,this.price=0,this.tx=null,this.success=!1,this.pending=!1,this.rewards=!1,this.err=w(),this.resetState=()=>{this.err=w(),this.pending=!1,this.success=!1,this.price=0},this.close=async()=>{this.tx=null,this.resetState(),this.emit("close")},this.updateErr=(t={})=>this.err=Object.assign({},this.err,t)}connectedCallback(){super.connectedCallback(),this.getPrice()}async getPrice(){try{let t=await E(this.album,h.bridge.account);this.votes=t,this.price=await S(this.album,this.votes)}catch(t){let s=t.message||t.code;this.updateErr({tx:s})}}async retreat(){this.pending=!0;try{this.tx=await R(this.album,this.votes),this.success=await this.tx.wait()}catch(t){let s=t.message||t.code;if(t.code==="ACTION_REJECTED")return this.updateErr({tx:s}),this.close()}finally{}}render(){return n`<ui-dialog @close="${()=>{this.close()}}"><p slot="header" class="my-2 font-bold">Retreat Subject</p><div class="grid place-items-center b-1 border m-4 p-4 rounded-md"><p class="w-36 h-36"><img-loader src="${this.url}"></img-loader></p>${u(!this.price,()=>n`<div class="my-4"><loading-skeleton num="3"></loading-skeleton><p class="my-4">Loading subject data...</p></div>`)} ${u(this.price&&!this.pending,()=>n`<p class="font-bold">Estimated returned value</p><p class="text-xl text-sky-500">${j(this.price,18)} FTM</p><p>Your Votes:${this.votes}</p><ui-button class="m-1" @click="${this.retreat}">RETREAT</ui-button>`)}${u(this.pending,()=>n`<tx-state .tx="${this.tx}" .opts="${{state:{success:"Success. Your retreat has been submit."}}}"><ui-button slot="view" href="/">Close</ui-button></tx-state>`)}</div></ui-dialog>`}};d([v({type:String})],l.prototype,"album",2);d([v({type:String})],l.prototype,"url",2);d([v({type:Number})],l.prototype,"votes",2);d([c()],l.prototype,"price",2);d([c()],l.prototype,"tx",2);d([c()],l.prototype,"success",2);d([c()],l.prototype,"pending",2);d([c()],l.prototype,"rewards",2);d([c()],l.prototype,"err",2);l=d([f("retreat-vote-dialog")],l);var B=Object.defineProperty,L=Object.getOwnPropertyDescriptor,g=(t,s,a,r)=>{for(var e=r>1?void 0:r?L(s,a):s,i=t.length-1,o;i>=0;i--)(o=t[i])&&(e=(r?o(s,a,e):o(e))||e);return r&&e&&B(s,a,e),e};let p=class extends m(""){constructor(){super(...arguments),this.bindBridge=new $(this,h),this.userVotes=[],this.dialog=!1,this.currentAlbum={id:"",votes:0,url:""},this.pending=!1,this.init=async()=>{this.pending=!0;let t=await T(h.bridge.account);this.userVotes=t.userAlbumVotes,this.pending=!1},this.close=()=>this.dialog=!1}get disabled(){return!h.bridge.account}connectedCallback(){super.connectedCallback(),this.init()}getRandomInt(t){return Math.floor(Math.random()*t)}render(){return n`<div class="grid place-items-center b-1 m-4 p-4 rounded-md">${u(this.pending,()=>n`<div name="Loading" class="doc-intro"><div class="flex flex-col gap-8 m-8"><loading-skeleton num="3"></loading-skeleton></div></div>`)} ${u(!this.pending,()=>n`<table class="w-full text-left border-collapse"><thead><th>Collection</th><th>Name</th><th>Author</th><th>Current Retreat Price</th><th>Holding</th><th>Operation</th></thead>${A(this.userVotes,t=>n`<tr><td><p class="w-24 h-24 rounded-md"><img-loader src="${t.album.image}" loading="lazy"></img-loader></p></td><td class="py-2 pl-2 text-lg leading-6 whitespace-pre dark:text-indigo-300 font-sans">${t.album.name}</td><td><ui-address .address="${t.album.artist.address}" short avatar></ui-address></td><td><p class="text-sm font-bold font-sans">${t.album.totalVotes/10}</p></td><td><p class="text-lg font-bold text-sky-500 font-sans">${t.holding}</p></td><td><div name="Dialog" class="doc-intro"><ui-button class="outlined" ?disabled="${this.disabled}" @click="${()=>{this.currentAlbum=t.album,this.dialog=!0}}">RETREAT</ui-button>${u(this.dialog&&t.album.id==this.currentAlbum.id,()=>n`<retreat-vote-dialog album="${t.album.id}" url="${t.album.image}" votes="${t.album.totalVotes}" @close="${this.close}"></retreat-vote-dialog>`)}</div></td></tr>`)}</table>`)}</div>`}};g([c()],p.prototype,"userVotes",2);g([c()],p.prototype,"dialog",2);g([c()],p.prototype,"currentAlbum",2);g([c()],p.prototype,"pending",2);p=g([f("user-votes-list")],p);const N="";var q=Object.defineProperty,I=Object.getOwnPropertyDescriptor,J=(t,s,a,r)=>{for(var e=r>1?void 0:r?I(s,a):s,i=t.length-1,o;i>=0;i--)(o=t[i])&&(e=(r?o(s,a,e):o(e))||e);return r&&e&&q(s,a,e),e};let x=class extends m(N){render(){return n`<div class="top"><div class="ui-container relative flex justify-between items-center"><div class="flex items-center gap-3 lg_gap-4 lg_w-40"><p class="font-bold text-xl">My Votes</p></div></div><div class="ui-container"><user-votes-list></user-votes-list></div></div>`}};x=J([f("user-votes")],x);export{x as ViewTop};
