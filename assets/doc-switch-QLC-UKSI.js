import{T as p}from"./index-WKZc7PgZ.js";import{x as u,d as f,a as l,b as d,h as w}from"./vendor-gd9Vg6JX.js";const g=':host{display:inline-flex;align-items:center}.ui-input-switch{position:relative;box-sizing:content-box;display:inline-flex;height:1rem;width:2rem;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;border-radius:9999px;--tw-bg-opacity: 1;background-color:#9ca3af;background-color:rgba(156,163,175,var(--tw-bg-opacity));transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s;border:1px solid transparent}.ui-input-switch:before{position:absolute;left:0;display:block;height:1rem;width:1rem;border-radius:9999px;--tw-bg-opacity: 1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s;content:""}.ui-input-switch.checked{background:var(--btnBg)}.ui-input-switch.checked:before{left:1rem}.ui-input-switch[disabled]{cursor:default;--tw-bg-opacity: 1;background-color:#e5e7eb;background-color:rgba(229,231,235,var(--tw-bg-opacity))}.ui-input-switch.checked[disabled]{background:var(--bgDisabled)!important}.ui-input-switch.sm{height:.75rem;width:1.5rem}.ui-input-switch.sm:before{height:.75rem;width:.75rem}.ui-input-switch.sm.checked:before{left:.75rem}';var m=Object.defineProperty,y=Object.getOwnPropertyDescriptor,a=(r,t,s,i)=>{for(var e=i>1?void 0:i?y(t,s):t,c=r.length-1,o;c>=0;c--)(o=r[c])&&(e=(i?o(t,s,e):o(e))||e);return i&&e&&m(t,s,e),e};let n=class extends p(g){constructor(){super(...arguments),this.checked=!1,this.readonly=!1,this.disabled=!1,this.sm=!1,this.switch=()=>{this.disabled||this.readonly||(this.checked=!this.checked,this.emit("change",this.checked))}}connectedCallback(){super.connectedCallback()}render(){return u`<span title="${this.checked?"Enabled":"Disabled"}" ?readonly="${this.readonly}" ?disabled="${this.disabled}" @click="${this.switch}" class="ui-input-switch ${f({checked:this.checked,sm:this.sm})}"></span>`}};a([l({type:Boolean})],n.prototype,"checked",2);a([l({type:Boolean,reflect:!0})],n.prototype,"readonly",2);a([l({type:Boolean,reflect:!0})],n.prototype,"disabled",2);a([l({type:Boolean})],n.prototype,"sm",2);n=a([d("ui-input-switch")],n);var v=Object.defineProperty,k=Object.getOwnPropertyDescriptor,b=(r,t,s,i)=>{for(var e=i>1?void 0:i?k(t,s):t,c=r.length-1,o;c>=0;c--)(o=r[c])&&(e=(i?o(t,s,e):o(e))||e);return i&&e&&v(t,s,e),e};let h=class extends p(""){constructor(){super(...arguments),this.val=!1}render(){return u`<p class="flex gap-1 items-center"><ui-input-switch .checked="val" @change="${r=>this.val=r.detail}"></ui-input-switch>${this.val}</p>`}};b([w()],h.prototype,"val",2);h=b([d("doc-switch")],h);export{h as DocSwitch};
