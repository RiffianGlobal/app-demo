import{c as g,F as k,Y as x,C as O,Z as m,S as p,d as S,j as f,y,q as h,e as b}from"./index-TjAVVlar.js";import"./index-iwEc326e.js";import"./vendor-KMCe_Sr5.js";class L extends f{constructor({callbackSelector:e,cause:a,data:l,extraData:o,sender:d,urls:t}){var c;super(a.shortMessage||"An error occurred while fetching for an offchain result.",{cause:a,metaMessages:[...a.metaMessages||[],(c=a.metaMessages)!=null&&c.length?"":[],"Offchain Gateway Call:",t&&["  Gateway URL(s):",...t.map(i=>`    ${y(i)}`)],`  Sender: ${d}`,`  Data: ${l}`,`  Callback selector: ${e}`,`  Extra data: ${o}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class v extends f{constructor({result:e,url:a}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${y(a)}`,`Response: ${m(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class $ extends f{constructor({sender:e,to:a}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${a}`,`OffchainLookup sender address: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}function C(s,e){if(!h(s))throw new b({address:s});if(!h(e))throw new b({address:e});return s.toLowerCase()===e.toLowerCase()}const D="0x556f1830",M={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function P(s,{blockNumber:e,blockTag:a,data:l,to:o}){const{args:d}=g({data:l,abi:[M]}),[t,c,i,r,n]=d;try{if(!C(o,t))throw new $({sender:t,to:o});const u=await j({data:i,sender:t,urls:c}),{data:w}=await O(s,{blockNumber:e,blockTag:a,data:x([r,k([{type:"bytes"},{type:"bytes"}],[u,n])]),to:o});return w}catch(u){throw new L({callbackSelector:r,cause:u,data:l,extraData:n,sender:t,urls:c})}}async function j({data:s,sender:e,urls:a}){var l;let o=new Error("An unknown error occurred.");for(let d=0;d<a.length;d++){const t=a[d],c=t.includes("{data}")?"GET":"POST",i=c==="POST"?{data:s,sender:e}:void 0;try{const r=await fetch(t.replace("{sender}",e).replace("{data}",s),{body:JSON.stringify(i),method:c});let n;if((l=r.headers.get("Content-Type"))!=null&&l.startsWith("application/json")?n=(await r.json()).data:n=await r.text(),!r.ok){o=new p({body:i,details:n!=null&&n.error?m(n.error):r.statusText,headers:r.headers,status:r.status,url:t});continue}if(!S(n)){o=new v({result:n,url:t});continue}return n}catch(r){o=new p({body:i,details:r.message,url:t})}}throw o}export{j as ccipFetch,P as offchainLookup,M as offchainLookupAbiItem,D as offchainLookupSignature};
