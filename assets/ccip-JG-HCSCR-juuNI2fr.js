import{A as g,x as k,d as x,Z as O,k as m,M as p,i as L,u as f,U as w,$ as h,s as b}from"./index-KrXXH54k.js";import"./index-IGiVYC6s.js";import"./vendor-J8OSF_8X.js";class $ extends f{constructor({callbackSelector:e,cause:a,data:l,extraData:o,sender:d,urls:t}){var c;super(a.shortMessage||"An error occurred while fetching for an offchain result.",{cause:a,metaMessages:[...a.metaMessages||[],(c=a.metaMessages)!=null&&c.length?"":[],"Offchain Gateway Call:",t&&["  Gateway URL(s):",...t.map(u=>`    ${w(u)}`)],`  Sender: ${d}`,`  Data: ${l}`,`  Callback selector: ${e}`,`  Extra data: ${o}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class M extends f{constructor({result:e,url:a}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${w(a)}`,`Response: ${m(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class S extends f{constructor({sender:e,to:a}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${a}`,`OffchainLookup sender address: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}function v(r,e){if(!h(r))throw new b({address:r});if(!h(e))throw new b({address:e});return r.toLowerCase()===e.toLowerCase()}const P="0x556f1830",C={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function j(r,{blockNumber:e,blockTag:a,data:l,to:o}){const{args:d}=g({data:l,abi:[C]}),[t,c,u,s,n]=d;try{if(!v(o,t))throw new S({sender:t,to:o});const i=await R({data:u,sender:t,urls:c}),{data:y}=await O(r,{blockNumber:e,blockTag:a,data:x([s,k([{type:"bytes"},{type:"bytes"}],[i,n])]),to:o});return y}catch(i){throw new $({callbackSelector:s,cause:i,data:l,extraData:n,sender:t,urls:c})}}async function R({data:r,sender:e,urls:a}){var l;let o=new Error("An unknown error occurred.");for(let d=0;d<a.length;d++){const t=a[d],c=t.includes("{data}")?"GET":"POST",u=c==="POST"?{data:r,sender:e}:void 0;try{const s=await fetch(t.replace("{sender}",e).replace("{data}",r),{body:JSON.stringify(u),method:c});let n;if((l=s.headers.get("Content-Type"))!=null&&l.startsWith("application/json")?n=(await s.json()).data:n=await s.text(),!s.ok){o=new p({body:u,details:n!=null&&n.error?m(n.error):s.statusText,headers:s.headers,status:s.status,url:t});continue}if(!L(n)){o=new M({result:n,url:t});continue}return n}catch(s){o=new p({body:u,details:s.message,url:t})}}throw o}export{R as ccipFetch,j as offchainLookup,C as offchainLookupAbiItem,P as offchainLookupSignature};
