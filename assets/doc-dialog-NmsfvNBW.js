import{T as f,U as d}from"./index-WKZc7PgZ.js";import{l as g,x as a,m as v,b as h,n as p,h as m}from"./vendor-gd9Vg6JX.js";const $=":host::part(dialog-container){min-height:100px}:host::part(dialog-header){min-height:0}:host::part(dialog-body){min-height:0}:host::part(dialog-footer){min-height:0}";var b=Object.defineProperty,_=Object.getOwnPropertyDescriptor,x=(i,o,s,e)=>{for(var t=e>1?void 0:e?_(o,s):o,r=i.length-1,l;r>=0;r--)(l=i[r])&&(t=(e?l(o,s,t):l(t))||t);return e&&t&&b(o,s,t),t};let u=class extends f([d.styles,$]){constructor(){super(...arguments),this.el$=g()}onClose(){this.emit("close")}close(){var i;(i=this.el$.value)==null||i.close()}confirm(){this.emit("confirm")}render(){return a`<ui-dialog ${v(this.el$)} @close="${this.onClose}"><slot slot="header" name="header" class="font-bold"></slot><slot></slot><div slot="footer" class="w-full flex justify-end gap-4"><ui-button text @click="${this.close}">Dismiss</ui-button><ui-button text @click="${this.confirm}">Accept</ui-button></div></ui-dialog>`}};u=x([h("ui-confirm")],u);var y=Object.defineProperty,C=Object.getOwnPropertyDescriptor,c=(i,o,s,e)=>{for(var t=e>1?void 0:e?C(o,s):o,r=i.length-1,l;r>=0;r--)(l=i[r])&&(t=(e?l(o,s,t):l(t))||t);return e&&t&&y(o,s,t),t};let n=class extends f(""){constructor(){super(...arguments),this.dialog=!1,this.prompt=!1,this.confirm=!1,this.confirmed=!1,this.onConfirm=()=>{this.confirmed=!0,this.confirm=!1}}render(){return a`<p class="flex w-full gap-2 my-2 items-center"><ui-button sm @click="${()=>this.dialog=!0}">Simple Dialog</ui-button><ui-button sm @click="${()=>this.prompt=!0}">Prompt</ui-button><ui-button sm @click="${()=>this.confirm=!0}">Confirm</ui-button>Confirmed: ${this.confirmed}</p>${p(this.dialog,()=>a`<ui-dialog @close="${()=>this.dialog=!1}"><p slot="header">Title</p>Content<p slot="footer">Footer</p></ui-dialog>`)} ${p(this.prompt,()=>a`<ui-prompt button @close="${()=>this.prompt=!1}"><div class="text-base">Some Message here</div></ui-prompt>`)} ${p(this.confirm,()=>a`<ui-confirm button @close="${()=>this.confirm=!1}" @confirm="${this.onConfirm}"><div slot="header">Use location service?</div><div class="text-base">Let us help apps determine location. This means sending anonymouse location data to use.</div></ui-confirm>`)}`}};c([m()],n.prototype,"dialog",2);c([m()],n.prototype,"prompt",2);c([m()],n.prototype,"confirm",2);c([m()],n.prototype,"confirmed",2);n=c([h("doc-dialog")],n);export{n as DocDialog};
