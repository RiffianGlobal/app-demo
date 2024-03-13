import{T as v}from"./index-A6rn-Z6U.js";import{x as d,q as x,I as f,j as c,l as m,N as y}from"./vendor-E6DebazZ.js";const O=`:host{display:inline-flex;align-items:center}.input{position:relative;box-sizing:border-box;display:inline-flex;transform-origin:center;align-items:center;justify-content:center;line-height:1;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s;border-radius:5px;width:1.25em;height:1.25em;border:2px solid #424b57}.input:before{content:"";visibility:hidden;display:block;transform-origin:center;width:90%;height:90%;background:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2014%2014'%3e%3cpath%20d='M4.862%2011.595a.55.55%200%200%201-.394-.186L.754%207.695c-.071-.046-.13-.107-.174-.18s-.07-.153-.078-.238.004-.169.034-.248.077-.15.139-.208.135-.101.216-.126.166-.032.249-.019.163.044.233.092.127.111.169.184l3.321%203.298%207.778-7.755c.105-.068.229-.099.354-.087s.241.064.332.15.15.199.169.323-.005.249-.067.358l-8.171%208.171a.55.55%200%200%201-.394.186z'%20fill='%23fff'/%3e%3c/svg%3e") no-repeat center}.ui-radio .input{border-radius:9999px}.ui-radio .input:before{border-radius:9999px;border:1px solid #fff;background:var(--formBorderActive);width:100%;height:100%}label:not([disabled]){cursor:pointer}label:not([disabled]):hover .input{border-color:var(--formBorderFocus)}label.checked .input{background:var(--formBorderFocus);border-color:var(--formBorderFocus)}label.checked .input:before{visibility:visible!important}label.checked[disabled] .input{background:var(--formBorder);border-color:var(--formBorder)}label:focus{background:red}`;var _=Object.defineProperty,k=Object.getOwnPropertyDescriptor,h=(e,t,i,r)=>{for(var s=r>1?void 0:r?k(t,i):t,l=e.length-1,o;l>=0;l--)(o=e[l])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&_(t,i,s),s};let n=class extends v(O){constructor(){super(...arguments),this.name="",this.readonly=!1,this.disabled=!1,this.checked=!1,this.model=!1}get isDisabled(){return this.disabled||this.readonly}toggle(e){e.preventDefault(),!this.isDisabled&&(this.model=!this.model,this.emit("change",this.model))}connectedCallback(){super.connectedCallback(),this.model=this.checked}render(){return d`<label ?disabled="${this.isDisabled}" @click="${this.toggle}" class="ui-checkbox inline-flex items-center gap-1 select-none leading-none ${x({checked:this.model})}"><i class="input"></i><slot></slot></label>`}};h([c()],n.prototype,"name",2);h([c()],n.prototype,"readonly",2);h([c()],n.prototype,"disabled",2);h([c()],n.prototype,"checked",2);h([f()],n.prototype,"model",2);n=h([m("ui-checkbox")],n);var w=Object.defineProperty,D=Object.getOwnPropertyDescriptor,p=(e,t,i,r)=>{for(var s=r>1?void 0:r?D(t,i):t,l=e.length-1,o;l>=0;l--)(o=e[l])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&w(t,i,s),s};let a=class extends v(O){constructor(){super(...arguments),this.checked=!1,this.readonly=!1,this.disabled=!1}select(e){e==null||e.preventDefault(),this.parentNode.querySelectorAll(`[name="${this.name}"]`).forEach(i=>{i.checked=i===this}),this.emit("change",this.value)}willUpdate(e){e.has("checked")}render(){return d`<label @click="${this.select}" class="ui-radio inline-flex items-center gap-1 cursor-pointer select-none leading-none ${x({checked:this.checked})}"><i class="input"></i><slot></slot></label>`}};p([c()],a.prototype,"name",2);p([c()],a.prototype,"value",2);p([c()],a.prototype,"checked",2);p([c()],a.prototype,"readonly",2);p([c()],a.prototype,"disabled",2);a=p([m("ui-radio")],a);var P=Object.defineProperty,j=Object.getOwnPropertyDescriptor,g=(e,t,i,r)=>{for(var s=r>1?void 0:r?j(t,i):t,l=e.length-1,o;l>=0;l--)(o=e[l])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&P(t,i,s),s};let u=class extends v(""){constructor(){super(...arguments),this.options=[],this.menu=!1,this.select=(e,t)=>{e==null||e.preventDefault(),t.value!==this.value&&this.emit("change",this.isObject?t:t.value),this.menu=!1}}get isObject(){return typeof this.options[0]=="object"}get titledOptions(){return this.options.map(e=>{const{title:t=e,value:i=e}=e;return{title:t,value:i}})}render(){return d`<ui-drop .show="${this.menu}" @change="${e=>this.menu=e.detail}" btnText icon align="left" dropClass="w-72"><slot slot="button" name="button">Select</slot><ul class="ui-option">${y(this.titledOptions,e=>d`<li @click="${t=>this.select(t,e)}" class="${x({active:e.value===this.value})}">${e.title}</li>`)}</ul></ui-drop>`}};g([c()],u.prototype,"options",2);g([c()],u.prototype,"value",2);g([f()],u.prototype,"menu",2);u=g([m("ui-select")],u);var C=Object.defineProperty,S=Object.getOwnPropertyDescriptor,$=(e,t,i,r)=>{for(var s=r>1?void 0:r?S(t,i):t,l=e.length-1,o;l>=0;l--)(o=e[l])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&C(t,i,s),s};let b=class extends v(""){constructor(){super(...arguments),this.checked=!0,this.options=["A","B","C","D"],this.selected=this.options[0],this.onChange=e=>this.checked=e.detail,this.onSelect=e=>this.selected=e.detail.value??e.detail}get titledOptions(){return this.options.map((e,t)=>({title:`Option ${t+1}`,value:e}))}get titledSelected(){return this.titledOptions.find(e=>e.value===this.selected)}render(){var e;return d`<p class="flex w-full gap-4">Checkbox:<ui-checkbox .checked="${this.checked}" @change="${this.onChange}">Checked: ${this.checked}</ui-checkbox><ui-checkbox disabled="disabled" checked="checked">Disabled</ui-checkbox></p><p class="mt-4 flex w-full items-center gap-4">Radio: ${y(this.options,(t,i)=>d`<ui-radio .value="${t}" name="radio" .checked="${t==this.selected}" @change="${this.onSelect}">Option ${i+1}</ui-radio>`)}</p><p class="mt-2 flex w-full items-center gap-2">Select:<ui-select .value="${this.selected}" .options="${this.options}" @change="${this.onSelect}"><span slot="button">${this.selected}</span></ui-select><ui-select .value="${this.selected}" .options="${this.titledOptions}" @change="${this.onSelect}"><span slot="button">${(e=this.titledSelected)==null?void 0:e.title}</span></ui-select></p>`}};$([f()],b.prototype,"checked",2);$([f()],b.prototype,"options",2);$([f()],b.prototype,"selected",2);b=$([m("doc-form")],b);export{b as DocForm};
