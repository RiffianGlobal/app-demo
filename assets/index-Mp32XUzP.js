import{T as d,b as c}from"./index-EJjuDV-5.js";import"./dashboard-gOn_Xdx3.js";import{m as u,x as a,I as f,j as h,l as v}from"./vendor-wjEH0k6O.js";import"./async-replace-TkIIykbx.js";import"./dialog-f9O1yAq-.js";const m=".page{min-height:calc(100vh - var(--headerH) - var(--footerH) - 1rem)}.page-profile{display:flex gap-4}";var g=Object.defineProperty,b=Object.getOwnPropertyDescriptor,p=(n,t,s,r)=>{for(var e=r>1?void 0:r?b(t,s):t,i=n.length-1,l;i>=0;i--)(l=n[i])&&(e=(r?l(t,s,e):l(e))||e);return r&&e&&g(t,s,e),e};let o=class extends d(m){constructor(){super(...arguments),this.bindWallet=new u(this,c),this.cate="",this.renderList=()=>this.account?this.cate==="uploaded"?a`<track-list .address="${this.account}"></track-list>`:a`<user-votes-list by="id" .acc="${this.account}"></user-votes-list>`:""}get account(){return c.account}render(){return a`<div class="page page-profile ui-container mx-auto pt-4 lg_pt-10"><user-dashboard self .acc="${this.account}"></user-dashboard><div class="mt-6 lg_mt-14"><div class="w-full flex gap-8 px-2 pb-3 text-lg border-b border-slate-50/10"><ui-link nav href="/profile" exact dense>Voted</ui-link><ui-link nav href="/profile/uploaded" exact dense>Uploaded</ui-link></div>${f(this.cate,a`${this.renderList()}`)}</div></div>`}};p([h({type:String})],o.prototype,"cate",2);o=p([v("profile-page")],o);export{o as ProfilePage};
