import{c as g,d as m,e as C,h as j,n as D,i as R,b as A,T as $,j as S,k as w}from"./index-4M2Yx22Z.js";import{S as B,a1 as M,p as x,l as h,e as T,x as o,n as f,m as I,G as u,i as _,j as O,M as y,$ as q}from"./vendor-KMCe_Sr5.js";var E=Object.defineProperty,F=Object.getOwnPropertyDescriptor,P=(r,t,s,i)=>{for(var e=i>1?void 0:i?F(t,s):t,a=r.length-1,d;a>=0;a--)(d=r[a])&&(e=(i?d(t,s,e):d(e))||e);return i&&e&&E(t,s,e),e};class v extends B{constructor(){super(...arguments),this.get=async()=>{if(!this.address){const t=await g();try{const s=await t.agentAddress(await m());s&&+s!=0&&(this.address=s)}catch{}}return this.inited=!0,this.address},this.set=async t=>{try{const s=await g(),[i,e]=["bindAgent",{}],a=[t,M(["address","address"],[t,C("MediaBoard")])];await j(e,s,i,a);const d=s[i](...a);await new R(d,{errorCodes:"MediaBoard",seq:{type:"Referral",title:"Referral",ts:D(),overrides:e}}).wait(),this.address=t}catch(s){throw s}}}get bound(){return this.inited&&!!A.bridge.account&&!!this.address}}P([x({value:""})],v.prototype,"address",2);P([x({value:!1})],v.prototype,"inited",2);const n=new v,G="";var K=Object.defineProperty,V=Object.getOwnPropertyDescriptor,b=(r,t,s,i)=>{for(var e=i>1?void 0:i?V(t,s):t,a=r.length-1,d;a>=0;a--)(d=r[a])&&(e=(i?d(t,s,e):d(e))||e);return i&&e&&K(t,s,e),e};let l=class extends $(G){constructor(){super(...arguments),this.bindReferral=new h(this,n),this.address="",this.pending=!1,this.bind=async()=>{if(!await m())return T.emit("connect-wallet");if(this.pending=!0,!n.address)try{await n.set(this.address)}catch(r){r.code!==4001&&S.add({summary:"Set Failed",detail:r.message})}finally{this.pending=!1}}}get addr(){return n.address||this.address}connectedCallback(){super.connectedCallback(),n.get()}render(){return o`<div class="flex flex-col gap-8 w-full"><div class="mt-8">${f(!n.bound,()=>o`<ui-button @click="${()=>this.bind()}" .pending="${this.pending}">Accept</ui-button>`)}</div><div><i class="mdi ${I(this.$c([this.pending?"mdi-loading":"mdi-check-circle-outline invisible",n.bound?"mdi-check-circle-outline text-green-600 !visible":""]))}"></i></div></div>`}};b([_()],l.prototype,"address",2);b([u()],l.prototype,"pending",2);l=b([O("bind-referrer")],l);const Y="";var z=Object.defineProperty,H=Object.getOwnPropertyDescriptor,p=(r,t,s,i)=>{for(var e=i>1?void 0:i?H(t,s):t,a=r.length-1,d;a>=0;a--)(d=r[a])&&(e=(i?d(t,s,e):d(e))||e);return i&&e&&z(t,s,e),e};let c=class extends $(Y){constructor(){super(...arguments),this.bindReferral=new h(this,n),this.bindDOID=new h(this,w),this.referrer="",this.address="",this.resolved=!1,this.validate=async()=>{},this.resolve=async()=>{const r=await n.get();if(r)this.address=r;else if(y(this.referrer))this.address=this.referrer;else{const s=await w.getAddress(this.referrer);s&&(this.address=s)}this.address?this.resolved=!0:q("/")}}get isAddress(){return y(this.referrer)}async connectedCallback(){super.connectedCallback(),await this.resolve()}render(){const r=o`<ui-address .href="${`/user/${this.address}`}" .address="${this.address}" short avatar></ui-address>`;return o`<div class="ui-pageview ui-container flex-col justify-center items-center"><h3 class="text-center mt-20 text-3xl font-bold uppercase">Compose your assets with us</h3><div class="text-center text-base">${f(n.inited&&this.resolved,()=>o`${f(n.bound,()=>o`<div class="flex flex-col text-center gap-2"><span class="opacity-80">You have been invited by:</span><p>${r}</p></div>`,()=>o`<h4>${r}</h4><p class="mt-2 opacity-80">invite you to join Riffian</p><bind-referrer .address="${this.address}"></bind-referrer>`)}`,()=>o`<loading-icon type="block"></loading-icon>`)}</div></div>`}};p([_()],c.prototype,"referrer",2);p([u()],c.prototype,"address",2);p([u()],c.prototype,"resolved",2);c=p([O("view-referral")],c);export{c as ViewReferral};
