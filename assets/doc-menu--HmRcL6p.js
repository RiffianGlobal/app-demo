import{T as p}from"./index-S80eJr7Y.js";import{x as c,h as a,b as m}from"./vendor-_vG9yl0N.js";var h=Object.defineProperty,f=Object.getOwnPropertyDescriptor,u=(s,t,o,n)=>{for(var e=n>1?void 0:n?f(t,o):t,r=s.length-1,i;r>=0;r--)(i=s[r])&&(e=(n?i(t,o,e):i(e))||e);return n&&e&&h(t,o,e),e};let l=class extends p(""){constructor(){super(...arguments),this.menu=!1,this.closeMenu=()=>{this.menu=!1}}render(){return c`<ui-drop .show="${this.menu}" @change="${s=>this.menu=s.detail}" btnText icon align="left" dropClass="w-72"><span slot="button">Settings</span><ul class="ui-option"><li @click="${this.closeMenu}">Option A</li><li @click="${this.closeMenu}">Option B</li></ul></ui-drop>`}};u([a()],l.prototype,"menu",2);l=u([m("doc-menu")],l);export{l as DocMenu};
