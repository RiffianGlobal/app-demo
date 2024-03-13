import{c as w,w as g,d as C,e as j,n as D,h as R,T as $,i as A,j as S,k as y}from"./index-A6rn-Z6U.js";import{S as B,a6 as I,p as x,m as h,e as T,x as o,n as f,q,I as u,j as _,l as O,O as m,a1 as M}from"./vendor-E6DebazZ.js";var E=Object.defineProperty,F=Object.getOwnPropertyDescriptor,P=(r,t,s,a)=>{for(var e=a>1?void 0:a?F(t,s):t,i=r.length-1,d;i>=0;i--)(d=r[i])&&(e=(a?d(t,s,e):d(e))||e);return a&&e&&E(t,s,e),e};class v extends B{constructor(){super(...arguments),this.get=async()=>{if(!this.address){const t=await w();try{const s=await t.agentAddress(g.account);s&&+s!=0&&(this.address=s)}catch{}}return this.inited=!0,this.address},this.set=async t=>{try{const s=await w(),[a,e]=["bindAgent",{}],i=[t,I(["address","address"],[t,C("MediaBoard")])];await j(e,s,a,i);const d=s[a](...i);await new R(d,{errorCodes:"MediaBoard",seq:{type:"Referral",title:"Referral",ts:D(),overrides:e}}).wait(),this.address=t}catch(s){throw s}}}get bound(){return this.inited&&!!g.account&&!!this.address}}P([x({value:""})],v.prototype,"address",2);P([x({value:!1})],v.prototype,"inited",2);const n=new v,K="";var V=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,b=(r,t,s,a)=>{for(var e=a>1?void 0:a?Y(t,s):t,i=r.length-1,d;i>=0;i--)(d=r[i])&&(e=(a?d(t,s,e):d(e))||e);return a&&e&&V(t,s,e),e};let l=class extends $(K){constructor(){super(...arguments),this.bindReferral=new h(this,n),this.address="",this.pending=!1,this.bind=async()=>{if(!await A())return T.emit("connect-wallet");if(this.pending=!0,!n.address)try{await n.set(this.address)}catch(r){r.code!==4001&&S.add({summary:"Set Failed",detail:r.message})}finally{this.pending=!1}}}get addr(){return n.address||this.address}connectedCallback(){super.connectedCallback(),n.get()}render(){return o`<div class="flex flex-col gap-8 w-full"><div class="mt-8">${f(!n.bound,()=>o`<ui-button @click="${()=>this.bind()}" .pending="${this.pending}">Accept</ui-button>`)}</div><div><i class="mdi ${q(this.$c([this.pending?"mdi-loading":"mdi-check-circle-outline invisible",n.bound?"mdi-check-circle-outline text-green-600 !visible":""]))}"></i></div></div>`}};b([_()],l.prototype,"address",2);b([u()],l.prototype,"pending",2);l=b([O("bind-referrer")],l);const z="";var G=Object.defineProperty,H=Object.getOwnPropertyDescriptor,p=(r,t,s,a)=>{for(var e=a>1?void 0:a?H(t,s):t,i=r.length-1,d;i>=0;i--)(d=r[i])&&(e=(a?d(t,s,e):d(e))||e);return a&&e&&G(t,s,e),e};let c=class extends $(z){constructor(){super(...arguments),this.bindReferral=new h(this,n),this.bindDOID=new h(this,y),this.referrer="",this.address="",this.resolved=!1,this.validate=async()=>{},this.resolve=async()=>{const r=await n.get();if(r)this.address=r;else if(m(this.referrer))this.address=this.referrer;else{const s=await y.getAddress(this.referrer);s&&(this.address=s)}this.address?this.resolved=!0:M("/")}}get isAddress(){return m(this.referrer)}async connectedCallback(){super.connectedCallback(),await this.resolve()}render(){const r=o`<ui-address .href="${`/user/${this.address}`}" .address="${this.address}" short avatar></ui-address>`;return o`<div class="ui-pageview ui-container flex-col justify-center items-center"><h3 class="text-center mt-20 text-3xl font-bold uppercase">Compose your assets with us</h3><div class="text-center text-base">${f(n.inited&&this.resolved,()=>o`${f(n.bound,()=>o`<div class="flex flex-col text-center gap-2"><span class="opacity-80">You have been invited by:</span><p>${r}</p></div>`,()=>o`<h4>${r}</h4><p class="mt-2 opacity-80">invite you to join Riffian</p><bind-referrer .address="${this.address}"></bind-referrer>`)}`,()=>o`<loading-icon type="block"></loading-icon>`)}</div></div>`}};p([_()],c.prototype,"referrer",2);p([u()],c.prototype,"address",2);p([u()],c.prototype,"resolved",2);c=p([O("view-referral")],c);export{c as ViewReferral};
