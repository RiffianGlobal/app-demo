import{T as l}from"./index-DXbSfcBm.js";import"./index-yYQUkwfR.js";import{x as d,I as g,l as m}from"./vendor-K7AHe9wS.js";var f=Object.defineProperty,c=Object.getOwnPropertyDescriptor,p=(s,t,o,n)=>{for(var e=n>1?void 0:n?c(t,o):t,a=s.length-1,i;a>=0;a--)(i=s[a])&&(e=(n?i(t,o,e):i(e))||e);return n&&e&&f(t,o,e),e};let r=class extends l(""){constructor(){super(...arguments),this.pending=!1,this.loaded=()=>{this.pending=!0,console.log("load data"),setTimeout(()=>this.pending=!1,200)}}render(){return d`<ui-pagination mode="click" .firstLoad="${!1}" .pending="${this.pending}" @loadmore="${this.loaded}"><span slot="empty">No data yet.</span></ui-pagination>`}};p([g()],r.prototype,"pending",2);r=p([m("doc-pagination")],r);export{r as DocPagination};
