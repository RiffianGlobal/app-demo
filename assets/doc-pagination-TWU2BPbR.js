import{T as d}from"./index-t8zAjO04.js";import"./index-XBNZ45Gz.js";import{x as l,k as g,b as m}from"./vendor-Yy_wTTXu.js";var f=Object.defineProperty,c=Object.getOwnPropertyDescriptor,p=(s,t,o,n)=>{for(var e=n>1?void 0:n?c(t,o):t,a=s.length-1,i;a>=0;a--)(i=s[a])&&(e=(n?i(t,o,e):i(e))||e);return n&&e&&f(t,o,e),e};let r=class extends d(""){constructor(){super(...arguments),this.pending=!1,this.loaded=()=>{this.pending=!0,console.log("load data"),setTimeout(()=>this.pending=!1,200)}}render(){return l`<ui-pagination mode="click" .firstLoad="${!1}" .pending="${this.pending}" @loadmore="${this.loaded}"><span slot="empty">No data yet.</span></ui-pagination>`}};p([g()],r.prototype,"pending",2);r=p([m("doc-pagination")],r);export{r as DocPagination};