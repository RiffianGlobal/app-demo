import{T as l}from"./index-G1yWYrvX.js";import{x as d,J as g,l as f}from"./vendor-smxJkvnK.js";var m=Object.defineProperty,c=Object.getOwnPropertyDescriptor,p=(r,t,o,n)=>{for(var e=n>1?void 0:n?c(t,o):t,a=r.length-1,s;a>=0;a--)(s=r[a])&&(e=(n?s(t,o,e):s(e))||e);return n&&e&&m(t,o,e),e};let i=class extends l(""){constructor(){super(...arguments),this.pending=!1,this.loaded=()=>{this.pending=!0,console.log("load data"),setTimeout(()=>this.pending=!1,200)}}render(){return d`<ui-pagination mode="click" .firstLoad="${!1}" .pending="${this.pending}" @loadmore="${this.loaded}"><span slot="empty">No data yet.</span></ui-pagination>`}};p([g()],i.prototype,"pending",2);i=p([f("doc-pagination")],i);export{i as DocPagination};
