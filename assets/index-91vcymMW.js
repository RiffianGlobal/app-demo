import{T as p}from"./index-hVmcV6ng.js";import{m as v,U as c,x as d,I as h,j as u,J as b,l as f}from"./vendor-smxJkvnK.js";import"./charts-cate-Kx1KvTSc.js";const w="";var m=Object.defineProperty,y=Object.getOwnPropertyDescriptor,n=(l,r,i,s)=>{for(var e=s>1?void 0:s?y(r,i):r,o=l.length-1,a;o>=0;o--)(a=l[o])&&(e=(s?a(r,i,e):a(e))||e);return s&&e&&m(r,i,e),e};let t=class extends p(w){constructor(){super(...arguments),this.bindScreen=new v(this,c),this.keyword="",this.morePending=!1}get isMobi(){return c.isMobi}render(){return d`<div class="ui-pageview ui-container place-content-center relative flex flex-col"><div class="ui-board"><div class="ui-board-header"><div class="ui-board-lead"><div class="ui-board-title"><h5>Search results for <span class="inline-block font-bold">${this.keyword}</span></h5></div></div></div>${h(this.keyword,d`<object-search-list .keyword="${this.keyword}"></object-search-list>`)}</div></div>`}};n([u({type:String})],t.prototype,"keyword",2);n([b()],t.prototype,"morePending",2);t=n([f("view-search")],t);export{t as ViewSearch};
