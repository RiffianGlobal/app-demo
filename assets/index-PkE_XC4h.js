import{T as c}from"./index-yzRW_d4q.js";import{Z as d,x as o,q as g,n as p,j as s,l as y}from"./vendor-xudCVxn2.js";const u=":host{background-color:transparent!important}:host::part(inner){display:flex;height:2rem;width:100%;align-items:center;justify-content:center}@media (min-width: 1024px){:host::part(inner){height:2.5rem}}";var f=Object.defineProperty,v=Object.getOwnPropertyDescriptor,t=(a,r,n,l)=>{for(var i=l>1?void 0:l?v(r,n):r,h=a.length-1,m;h>=0;h--)(m=a[h])&&(i=(l?m(r,n,i):m(i))||i);return l&&i&&f(r,n,i),i};let e=class extends d(c(u),{persistent:!0,rootMargin:"30px"}){constructor(){super(...arguments),this.pageSize=5,this.page=1,this.mode="scroll",this.pending=!1,this.firstLoad=!0,this.empty=!1,this.nomore=!1,this.class="",this.loadmore=()=>{if(!this.canLoad)return;const{pageSize:a,page:r,mode:n}=this;this.emit("cc"),this.emit("loadmore",{pageSize:a,page:r,mode:n})},this.onObserved=()=>{this.scrollMode&&this.loadmore()}}get canLoad(){return!this.pending&&!this.nomore&&!this.empty&&!this.firstLoad}get scrollMode(){return this.mode==="scroll"}connectedCallback(){super.connectedCallback()}render(){return o`<div class="ui-pagination w-full flex justify-center items-center mt-4 ${g(this.$c([{nomore:this.nomore,"pointer-events-none !bg-transparent":!this.canLoad||this.scrollMode,scrollMode:this.scrollMode},this.class]))}"><div part="inner" @click="${this.loadmore}">${p(this.empty,()=>o`<slot name="empty"></slot>`,()=>o`${p(this.nomore,()=>o`<slot name="nomore"></slot>`,()=>o`${p(this.pending,()=>o`<slot name="loading"><loading-icon type="block"></loading-icon></slot>`,()=>o`${p(!this.scrollMode&&!this.firstLoad,()=>o`<slot><ui-link>Load more</ui-link></slot>`)}`)}`)}`)}</div></div>`}};t([s({type:Number})],e.prototype,"pageSize",2);t([s({type:Number})],e.prototype,"page",2);t([s()],e.prototype,"mode",2);t([s()],e.prototype,"pending",2);t([s({type:Boolean})],e.prototype,"firstLoad",2);t([s({type:Boolean})],e.prototype,"empty",2);t([s({type:Boolean})],e.prototype,"nomore",2);t([s()],e.prototype,"class",2);e=t([y("ui-pagination")],e);
