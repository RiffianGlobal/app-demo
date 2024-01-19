var m=(e,s,t)=>{if(!s.has(e))throw TypeError("Cannot "+t)};var x=(e,s,t)=>(m(e,s,"read from private field"),t?t.call(e):s.get(e)),y=(e,s,t)=>{if(s.has(e))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(e):s.set(e,t)},$=(e,s,t,o)=>(m(e,s,"write to private field"),o?o.call(e,t):s.set(e,t),t);var b=(e,s,t)=>(m(e,s,"access private method"),t);import{T as _,s as C}from"./index-8-A3la8V.js";import{j as u,m as D,d as P,q as B,a as p,x as c,b as E,n as w}from"./vendor-leRLsLN3.js";import{i as q,n as S}from"./index-mYmPYGKh.js";var I=Object.defineProperty,j=Object.getOwnPropertyDescriptor,r=(e,s,t,o)=>{for(var i=o>1?void 0:o?j(s,t):s,a=e.length-1,l;a>=0;a--)(l=e[a])&&(i=(o?l(s,t,i):l(i))||i);return o&&i&&I(s,t,i),i};const T=(e,s,{lower:t=!1,upper:o=!1}={})=>(e&&(t?e=e.toLowerCase():o&&(e=e.toUpperCase())),e),N=(e,{tag:s="input"}={})=>{var o,i,O;class t extends e{constructor(){super(...arguments);y(this,i);y(this,o,void 0);this.el$=D(),this.placeholder="",this.type="text",this.class="",this.sm=!1,this.dense=!1,this.disabled=!1,this.autofocus=!1,this.required=!1,this.lower=!1,this.upper=!1,this.err=!1,this.value="",this.debounce=300,this.rightSlotted=!1,this.leftSlotted=!1,this.tag=q(s),$(this,o,!1),this.onKeyup=n=>{n.key==="Enter"&&(this.emit("submit",this.value),setTimeout(()=>this.updateVal()))},this.renderDefRight=()=>S``,this.renderHtml=()=>S`<div class="ui-input-text ${P(this.$c([this.class,{sm:this.sm,dense:this.dense}]))}" ?required="${this.required}" ?rightSlotted="${this.rightSlotted}" ?leftSlotted="${this.leftSlotted}" part="ui-input-text"><label><slot name="label" @slotchange="${this.onSlotChange}"></slot></label> <span class="ui-input-left"><slot name="left" @slotchange="${this.onSlotLeft}"></slot></span><input ${B(this.el$)} .type="${this.type}" .disabled="${this.disabled}" placeholder="${this.placeholder}" value="${this.value}" title="${this.title}" ?autofocus="${this.autofocus}" @focus="${this.onFocus}" @input="${this.onInput}" @keyup="${this.onKeyup}"><div class="ui-input-right"><slot name="right" @slotchange="${this.onSlotRight}">${this.renderDefRight()}</slot></div><div class="ui-input-msg"><slot name="msg" @slotchange="${this.onSlotChange}"></slot></div><div class="ui-input-tip"><slot name="tip" @slotchange="${this.onSlotChange}"></slot></div></div>`}onSlotChange(n){const d=n.target;if(!d)return;d.assignedNodes({flatten:!0}).length}onSlotRight(n){this.rightSlotted=!!n.target}onSlotLeft(n){this.leftSlotted=!!n.target}onFocus(n){n.target.select()}updateVal(){const n=this.$("input");n&&(n.value=this.value)}onInput(n){n.stopImmediatePropagation();let d=n.target.value;this.value=T(d,null,{lower:this.lower,upper:this.upper})||"",this.updateVal(),this.emit("input",d.trim())}connectedCallback(){super.connectedCallback(),b(this,i,O).call(this)}render(){return this.renderHtml()}}return o=new WeakMap,i=new WeakSet,O=function(){!this.autofocus||x(this,o)||($(this,o,!0),setTimeout(()=>this.$("input").focus(),50))},r([p({type:String})],t.prototype,"placeholder",2),r([p({type:String})],t.prototype,"type",2),r([p({type:String})],t.prototype,"class",2),r([p({type:Boolean})],t.prototype,"sm",2),r([p({type:Boolean})],t.prototype,"dense",2),r([p({type:Boolean})],t.prototype,"disabled",2),r([p({type:Boolean})],t.prototype,"autofocus",2),r([p({type:Boolean})],t.prototype,"required",2),r([p({type:Boolean})],t.prototype,"lower",2),r([p({type:Boolean})],t.prototype,"upper",2),r([p({type:Boolean})],t.prototype,"err",2),r([p({type:String,converter:T})],t.prototype,"value",2),r([p({type:Number})],t.prototype,"debounce",2),r([u()],t.prototype,"rightSlotted",2),r([u()],t.prototype,"leftSlotted",2),t};var R=Object.defineProperty,H=Object.getOwnPropertyDescriptor,v=(e,s,t,o)=>{for(var i=o>1?void 0:o?H(s,t):s,a=e.length-1,l;a>=0;a--)(l=e[a])&&(i=(o?l(s,t,i):l(i))||i);return o&&i&&R(s,t,i),i};let g=class extends N(_(C)){constructor(){super(...arguments),this.toggle=!0,this.type="password",this.toggleSwitch=e=>{this.type=this.hide?"text":"password"},this.renderDefRight=()=>this.toggle?c`<ui-button tabindex="-1" sm icon @click="${this.toggleSwitch}" class="-mr-1"><i class="mdi ${P(this.$c([this.hide?"mdi-eye-off-outline":"mdi-eye"]))}"></i></ui-button>`:""}get hide(){return this.type==="password"}render(){return c`${this.renderHtml()}`}};v([p({type:Boolean})],g.prototype,"toggle",2);v([u()],g.prototype,"type",2);g=v([E("ui-input-pwd")],g);var L=Object.defineProperty,V=Object.getOwnPropertyDescriptor,f=(e,s,t,o)=>{for(var i=o>1?void 0:o?V(s,t):s,a=e.length-1,l;a>=0;a--)(l=e[a])&&(i=(o?l(s,t,i):l(i))||i);return o&&i&&L(s,t,i),i};let h=class extends _(""){constructor(){super(...arguments),this.inputPwd="",this.inputText="",this.inputTextErr="",this.pending=!1}async onInputText(e){this.inputText=e.detail,this.inputTextErr="";const s=this.inputText.length;s&&s<4&&(this.inputTextErr="Your input is too short")}render(){return c`<div class="flex gap-8 items-center"><ui-input-text @input="${this.onInputText}" value="${this.inputText}" placeholder="Enter your album name" required ?disabled="${this.pending}"><span slot="label">Album Name</span> <span slot="tip"><ui-link href="/help">How to?</ui-link></span><span slot="right" class="-mr-1"><ui-button @click="()=>{}" icon class="text-blue-500"><i class="mdi mdi-magnify"></i></ui-button></span><span slot="msg">${w(this.inputTextErr,()=>c`<span class="text-red-500">${this.inputTextErr}</span>`)}</span></ui-input-text><span>Your name is: ${w(!this.inputTextErr,()=>c`<b>${this.inputText}</b>`)}</span></div><div class="flex flex-col gap-4 w-72"><ui-input-text sm @input="${this.onInputText}" value="${this.inputText}" placeholder="Enter your album name" required ?disabled="${this.pending}"><span slot="right"><i class="mdi mdi-account-outline"></i></span></ui-input-text><ui-input-pwd sm value="${this.inputPwd}" placeholder="Enter your password" required ?disabled="${this.pending}"></ui-input-pwd></div>`}};f([u()],h.prototype,"inputPwd",2);f([u()],h.prototype,"inputText",2);f([u()],h.prototype,"inputTextErr",2);f([u()],h.prototype,"pending",2);h=f([E("doc-text")],h);export{h as DocText};
