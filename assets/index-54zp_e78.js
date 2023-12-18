import{T as p,s as g}from"./index-5QG9028x.js";import"./socialbtn-uHHL7-DW.js";import{g as f,h as w,a as x}from"./claim-k0y9ZzBy.js";import{x as o,E as c,a0 as b,a3 as y,w as v,v as $,t as u,V as S,a4 as _}from"./vendor-L6D-Rps7.js";import"./prompt-19baV0sF.js";const V=async t=>{let i=`{
      voteLogs(first: ${t}, orderBy: time, orderDirection:desc) {
        id
        voter{
          address
        }
        time
        value
      }
    }`;return await f("MediaBoard",i)},D=".text-highlight{color:var(--colorHighlight)}svg{display:inline-flex;align-items:center;overflow:hidden;border-radius:9999px;background:#c81444}svg svg{height:100%;width:100%}li.header{margin-bottom:.5rem;font-weight:300;--tw-text-opacity: 1;color:#fafaf9;color:rgba(250,250,249,var(--tw-text-opacity));border-bottom:1px solid #898989}";var O=Object.defineProperty,P=Object.getOwnPropertyDescriptor,d=(t,i,r,s)=>{for(var e=s>1?void 0:s?P(i,r):i,a=t.length-1,l;a>=0;a--)(l=t[a])&&(e=(s?l(i,r,e):l(e))||e);return s&&e&&O(i,r,e),e};let n=class extends p(D){constructor(){super(...arguments),this.weekly=!1,this.latestVotes=[],this.albumToVote={id:"",voter:0,time:0,value:0},this.pending=!1,this.init=async()=>{this.pending=!0;try{let t=await V(20);this.latestVotes=t.voteLogs}catch(t){console.error(t)}this.pending=!1},this.timeAgo=async function*(t){for(;;){let i=BigInt(new Date().getTime())/1000n,r=i-t,s=r/86400n,e=(r-s*86400n)/3600n,a=(r-s*86400n-e*3600n)/60n,l="";s>0&&(l+=s.toString()+"d "),e>0&&(l+=+e.toString()+"h "),a>0&&(l+=a.toString()+"m "),l?l+="ago":l="<1m",yield l,await new Promise(m=>setTimeout(m,1e3))}}}connectedCallback(){super.connectedCallback(),this.init()}render(){return o`${c(this.pending&&this.latestVotes.length==0,()=>o`<loading-skeleton num="4"></loading-skeleton>`)} ${c(!this.pending,()=>o`<ul role="list"><li class="flex header p-1"><div class="w-16">Bidders</div></li>${b(this.latestVotes,(t,i)=>o`<li class="py-2 justify-start"><div class="flex items-center justify-start space-x-2"><ui-address class="text-2xl" .address="${t.voter.address}" avatar hideAddr></ui-address><p class="text-highlight text-2xl">${y(t.value,18)}</p></div><div><p class="font-light text-gray-400 text-left text-sm">${w(this.timeAgo(BigInt(t.time)))}</p></div></li>`)}</ul>`)}`}};d([$({type:Boolean})],n.prototype,"weekly",2);d([v()],n.prototype,"latestVotes",2);d([v()],n.prototype,"albumToVote",2);d([v()],n.prototype,"pending",2);n=d([u("latest-votes")],n);const j=".text-highlight{color:var(--colorHighlight)}";var C=Object.defineProperty,T=Object.getOwnPropertyDescriptor,A=(t,i,r,s)=>{for(var e=s>1?void 0:s?T(i,r):i,a=t.length-1,l;a>=0;a--)(l=t[a])&&(e=(s?l(i,r,e):l(e))||e);return s&&e&&C(i,r,e),e};let h=class extends p(j){constructor(){super(...arguments),this.bindScreen=new S(this,g)}get isSmall(){return g.screen.lg}connectedCallback(){super.connectedCallback()}async weekRange(){return x().then(t=>{const i=7n*24n*60n*60n;let r=t+i,s=new Date(Number(t*1000n)),e=new Date(Number(r*1000n));return console.log(t,s),s.toLocaleString("en-US",{month:"short"})+s.getDate()+(s.getFullYear()==e.getFullYear()?"":", "+e.getFullYear())+"-"+(s.getMonth()==e.getMonth()?"":e.toLocaleString("en-us",{month:"short"}))+e.getDate()+", "+e.getFullYear()})}render(){return o`<div class="flex px-8 space-x-8 place-content-center"><div class="flex-initial w-[32rem]"><div class="flex justify-between h-20"><div><div class="font-bold text-2xl text-highlight">Weekly</div><div class="font-light mt-2">${_(this.weekRange())}</div></div><div class="flex flex-row-reverse"><claim-rewards></claim-rewards><bind-social-btn></bind-social-btn></div></div><div class="mt-3"><top-album weekly></top-album></div></div>${c(!this.isSmall,()=>o`<div class="flex-initial w-[32rem]"><div class="h-20 pt-1"><div class="font-bold text-xl">All</div></div><div class="mt-3"><top-album></top-album></div></div><div class="flex-initial w-32 pt-16 mt-7"><latest-votes></div>`)}</div>`}};h=A([u("view-home")],h);export{h as ViewHome};
