import{T as p,D as n}from"./index-sVF374GA.js";import{x as o,l as f}from"./vendor-xudCVxn2.js";var v=Object.defineProperty,u=Object.getOwnPropertyDescriptor,d=(a,r,i,t)=>{for(var e=t>1?void 0:t?u(r,i):r,s=a.length-1,l;s>=0;s--)(l=a[s])&&(e=(t?l(r,i,e):l(e))||e);return t&&e&&v(r,i,e),e};let c=class extends p(""){constructor(){super(...arguments),this.back=()=>location.href=`https://${n}`}render(){return o`<div class="z-50 fixed w-screen h-screen top-0 left-0 bgBlur active"><div class="z-50 fixed w-screen h-screen flex justify-center items-center flex-col top-0 left-0 pb-20 text-center gap-3"><h6 class="text-2xl mb-6">Unable to load App</h6><div><p>Please try again later.</p><p>Our service is currently unavailable in your region.</p></div><p><ui-link @click="${this.back}" href="${`https://${n}`}">Back to ${n}</ui-link></p></div></div>`}};c=d([f("view-denied")],c);export{c as ViewDenied};
