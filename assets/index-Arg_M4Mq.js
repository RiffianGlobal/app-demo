import{g as f,T as p}from"./index-doPZh83d.js";import"./socialbtn-YNyht6B5.js";import{h as x,g as w}from"./claim-amhLY5Cc.js";import{x as o,n as c,q as y,y as b,h as v,d as _,c as h,a as $,u as g,E as S}from"./vendor-YHmzau40.js";import"./dialog-DVD2hI1G.js";const V=async t=>{let l=`{
      voteLogs(first: ${t}, orderBy: time, orderDirection:desc) {
        id
        voter{
          address
        }
        time
        value
      }
    }`;return await f("MediaBoard",l)},D=".text-highlight{color:var(--colorHighlight)}svg{display:inline-flex;align-items:center;overflow:hidden;border-radius:9999px;background:#c81444}svg svg{height:100%;width:100%}li.header{margin-bottom:.5rem;--tw-text-opacity: 1;color:#a3a3a3;color:rgba(163,163,163,var(--tw-text-opacity));border-bottom:1px solid rgba(255,255,255,.12)}";var O=Object.defineProperty,P=Object.getOwnPropertyDescriptor,d=(t,l,r,s)=>{for(var e=s>1?void 0:s?P(l,r):l,a=t.length-1,i;a>=0;a--)(i=t[a])&&(e=(s?i(l,r,e):i(e))||e);return s&&e&&O(l,r,e),e};let n=class extends p(D){constructor(){super(...arguments),this.weekly=!1,this.latestVotes=[],this.albumToVote={id:"",voter:0,time:0,value:0},this.pending=!1,this.init=async()=>{this.pending=!0;try{let t=await V(20);this.latestVotes=t.voteLogs}catch(t){console.error(t)}this.pending=!1},this.timeAgo=async function*(t){for(;;){let l=BigInt(new Date().getTime())/1000n,r=l-t,s=r/86400n,e=(r-s*86400n)/3600n,a=(r-s*86400n-e*3600n)/60n,i="";s>0&&(i+=s.toString()+"d "),e>0&&(i+=+e.toString()+"h "),a>0&&(i+=a.toString()+"m "),i?i+="ago":i="<1m",yield i,await new Promise(m=>setTimeout(m,1e3))}}}connectedCallback(){super.connectedCallback(),this.init()}render(){return o`${c(this.pending&&this.latestVotes.length==0,()=>o`<loading-skeleton num="4"></loading-skeleton>`)} ${c(!this.pending,()=>o`<ul role="list"><li class="flex header p-1 lg_mt-3"><div class="w-16">Bidders</div></li>${y(this.latestVotes,(t,l)=>o`<li class="py-2 justify-start"><div class="flex items-top justify-between space-x-2"><ui-address class="text-2xl" .address="${t.voter.address}" avatar hideAddr></ui-address><div class="flex flex-col justify-center items-end"><p class="opacity-95 text-base">${b(t.value,18)}</p><p class="text-left text-xs text-neutral-400">${x(this.timeAgo(BigInt(t.time)))}</p></div></div></li>`)}</ul>`)}`}};d([_({type:Boolean})],n.prototype,"weekly",2);d([v()],n.prototype,"latestVotes",2);d([v()],n.prototype,"albumToVote",2);d([v()],n.prototype,"pending",2);n=d([h("latest-votes")],n);const j=".text-highlight{color:var(--colorHighlight)}";var C=Object.defineProperty,T=Object.getOwnPropertyDescriptor,A=(t,l,r,s)=>{for(var e=s>1?void 0:s?T(l,r):l,a=t.length-1,i;a>=0;a--)(i=t[a])&&(e=(s?i(l,r,e):i(e))||e);return s&&e&&C(l,r,e),e};let u=class extends p(j){constructor(){super(...arguments),this.bindScreen=new $(this,g)}get isSmall(){return g.screen.lg}connectedCallback(){super.connectedCallback()}async weekRange(){return w().then(t=>{const l=7n*24n*60n*60n;let r=t+l,s=new Date(Number(t*1000n)),e=new Date(Number(r*1000n));return console.log(t,s),s.toLocaleString("en-US",{month:"short"})+s.getDate()+(s.getFullYear()==e.getFullYear()?"":", "+s.getFullYear())+" - "+(s.getMonth()==e.getMonth()?"":e.toLocaleString("en-us",{month:"short"}))+e.getDate()+", "+e.getFullYear()})}render(){return o`<div class="flex flex-col lg_flex-row px-8 lg_space-x-12 place-content-center"><div class="lg_flex-initial w-full lg_w-[30rem]"><div class="flex justify-between h-20 lg_mt-8"><div><div class="text-2xl">Weekly</div><div class="text-neutral-400 mt-2">${S(this.weekRange())}</div></div><div class="flex flex-row-reverse"><claim-rewards></claim-rewards></div></div><div class="mt-3"><top-album weekly></top-album></div></div>${c(!this.isSmall,()=>o`<div class="flex-initial w-full lg_w-[30rem]"><div class="h-20 pt-1 lg_mt-8"><div class="text-xl">All</div></div><div class="mt-3"><top-album></top-album></div></div><div class="flex-initial w-full lg_w-32"><div class="h-20 pt-1 lg_mt-8"><div class="text-xl">Votes</div></div><latest-votes></latest-votes></div>`)}</div>`}};u=A([h("view-home")],u);export{u as ViewHome};
