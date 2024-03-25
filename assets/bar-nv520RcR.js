import{T as u}from"./index-vT14mI4y.js";import{M as b,x as m,N as v,b6 as g,q as f,J as d,j as e,l as y}from"./vendor-P2KLLNE-.js";const $=":host{position:relative;display:block;height:100%;width:100%;--bg: #424b57;--fg: #4caf50}circle{height:100%;width:100%;fill:none;transform-origin:50% 50%;transition:stroke-dashoffset .3s;transform:rotate(-90deg)}circle.b{stroke:var(--bg)}circle.f{stroke:var(--fg)}circle.p{stroke:#09fd460d}.text{position:absolute;top:0;left:0;display:flex;height:100%;width:100%;align-items:center;justify-content:center}.text.done,.text.active{color:var(--fg)}";var w=Object.defineProperty,P=Object.getOwnPropertyDescriptor,n=(t,i,p,a)=>{for(var r=a>1?void 0:a?P(i,p):i,l=t.length-1,c;l>=0;l--)(c=t[l])&&(r=(a?c(i,p,r):c(r))||r);return a&&r&&w(i,p,r),r};let s=class extends u($){constructor(){super(...arguments),this.el$=b(),this.percent=0,this.randomTo=0,this.precision=2,this.label=!1,this.state=!1,this.stroke=2,this.randomProgress=this.randomTo,this.width=32}get progress(){return Math.min(this.percent,100)}get per(){return(this.randomTo?Math.max(this.progress,this.randomProgress):this.progress).toFixed(this.precision)}get stat(){return this.progress===100?"active done":this.progress?"active":""}get radius(){return this.width/2}get r(){return this.radius-this.stroke/2}get ring(){const t=2*Math.PI*this.r;return{"stroke-dasharray":`${t} ${t}`,"stroke-dashoffset":`${t-this.progress/100*t}`}}get r2(){return this.radius-this.radius/2}get pie(){const t=2*Math.PI*this.r2;return{"stroke-dasharray":`${t} ${t}`,"stroke-dashoffset":`${t-this.progress/100*t}`}}fit(){this.el$.value&&(this.width=this.el$.value.clientWidth)}connectedCallback(){super.connectedCallback(),this.fit()}render(){return m`<svg ${v(this.el$)} viewBox="${`0 0 ${this.width} ${this.width}`}"><g stroke-width="${this.radius}"><circle class="p" cx="${this.radius}" cy="${this.radius}" r="${this.r2}" style="${g(this.pie)}"/></g><g stroke-width="${this.stroke}"><circle class="b" cx="${this.radius}" cy="${this.radius}" r="${this.r}"/><circle class="f" cx="${this.radius}" cy="${this.radius}" r="${this.r}" style="${g(this.ring)}"/></g></svg><div class="text ${f(this.$c([this.stat]))}"><slot></slot></div>`}};n([e({type:Number})],s.prototype,"percent",2);n([e({type:Number})],s.prototype,"randomTo",2);n([e({type:Number})],s.prototype,"precision",2);n([e({type:Boolean})],s.prototype,"label",2);n([e({type:Boolean})],s.prototype,"state",2);n([e({type:Number})],s.prototype,"stroke",2);n([d()],s.prototype,"randomProgress",2);n([d()],s.prototype,"width",2);s=n([y("ui-progress-ring")],s);const T=".bar{--tw-bg-opacity: 1;background-color:#424b57;background-color:rgba(66,75,87,var(--tw-bg-opacity))}.per{--tw-bg-opacity: 1;background-color:#60a5fa;background-color:rgba(96,165,250,var(--tw-bg-opacity))}.per.state{background:linear-gradient(90deg,#60b864,#4caf50)}";var x=Object.defineProperty,k=Object.getOwnPropertyDescriptor,h=(t,i,p,a)=>{for(var r=a>1?void 0:a?k(i,p):i,l=t.length-1,c;l>=0;l--)(c=t[l])&&(r=(a?c(i,p,r):c(r))||r);return a&&r&&x(i,p,r),r};let o=class extends u(T){constructor(){super(...arguments),this.percent=0,this.randomTo=0,this.precision=2,this.label=!1,this.state=!1,this.pending=!1,this.randomProgress=this.percent,this.randomTimer=null}get progress(){return Math.min(this.percent,100)}get per(){return(this.randomTo?Math.max(this.progress,this.randomProgress):this.progress).toFixed(this.precision)}shouldUpdate(t){return t.has("randomTo")&&(this.randomTo?(clearInterval(this.randomTimer),this.randomProgress=this.percent,this.randomTimer=setInterval(()=>{this.randomProgress+=Math.floor(Math.random()*(.1-.01+1)+.01),this.randomProgress>=this.randomTo&&clearInterval(this.randomTimer)},200)):clearInterval(this.randomTimer)),!0}render(){return m`<div class="relative flex grow w-full items-center"><div class="bar relative block w-full h-1.5 overflow-hidden rounded-full"><p class="per pr-1 absolute top-0 h-full rounded-full transition-all ${f({state:this.state})}" style="${g({width:`${this.per}%`})}"></p></div></div>`}};h([e({type:Number})],o.prototype,"percent",2);h([e({type:Number})],o.prototype,"randomTo",2);h([e({type:Number})],o.prototype,"precision",2);h([e({type:Boolean})],o.prototype,"label",2);h([e({type:Boolean})],o.prototype,"state",2);h([d()],o.prototype,"pending",2);h([d()],o.prototype,"randomProgress",2);h([d()],o.prototype,"randomTimer",2);o=h([y("ui-progress-bar")],o);
