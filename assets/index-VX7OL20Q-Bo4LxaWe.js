import{_ as ge}from"./index-y1ZkuYAd.js";import"./vendor-aecOC4Ab.js";const me=Symbol(),ee=Object.getPrototypeOf,G=new WeakMap,he=e=>e&&(G.has(e)?G.get(e):ee(e)===Object.prototype||ee(e)===Array.prototype),fe=e=>he(e)&&e[me]||null,te=(e,t=!0)=>{G.set(e,t)};var H={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,VITE_APP_VER:"0.6.3",VITE_APP_MDI:'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@7/css/materialdesignicons.min.css"/>'};const q=e=>typeof e=="object"&&e!==null,j=new WeakMap,x=new WeakSet,be=(e=Object.is,t=(r,w)=>new Proxy(r,w),s=r=>q(r)&&!x.has(r)&&(Array.isArray(r)||!(Symbol.iterator in r))&&!(r instanceof WeakMap)&&!(r instanceof WeakSet)&&!(r instanceof Error)&&!(r instanceof Number)&&!(r instanceof Date)&&!(r instanceof String)&&!(r instanceof RegExp)&&!(r instanceof ArrayBuffer),a=r=>{switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:throw r}},l=new WeakMap,c=(r,w,I=a)=>{const b=l.get(r);if((b==null?void 0:b[0])===w)return b[1];const y=Array.isArray(r)?[]:Object.create(Object.getPrototypeOf(r));return te(y,!0),l.set(r,[w,y]),Reflect.ownKeys(r).forEach(k=>{if(Object.getOwnPropertyDescriptor(y,k))return;const C=Reflect.get(r,k),M={value:C,enumerable:!0,configurable:!0};if(x.has(C))te(C,!1);else if(C instanceof Promise)delete M.value,M.get=()=>I(C);else if(j.has(C)){const[f,K]=j.get(C);M.value=c(f,K(),I)}Object.defineProperty(y,k,M)}),Object.preventExtensions(y)},m=new WeakMap,g=[1,1],W=r=>{if(!q(r))throw new Error("object required");const w=m.get(r);if(w)return w;let I=g[0];const b=new Set,y=(i,o=++g[0])=>{I!==o&&(I=o,b.forEach(n=>n(i,o)))};let k=g[1];const C=(i=++g[1])=>(k!==i&&!b.size&&(k=i,f.forEach(([o])=>{const n=o[1](i);n>I&&(I=n)})),I),M=i=>(o,n)=>{const h=[...o];h[1]=[i,...h[1]],y(h,n)},f=new Map,K=(i,o)=>{if((H?"production":void 0)!=="production"&&f.has(i))throw new Error("prop listener already exists");if(b.size){const n=o[3](M(i));f.set(i,[o,n])}else f.set(i,[o])},Z=i=>{var o;const n=f.get(i);n&&(f.delete(i),(o=n[1])==null||o.call(n))},ue=i=>(b.add(i),b.size===1&&f.forEach(([o,n],h)=>{if((H?"production":void 0)!=="production"&&n)throw new Error("remove already exists");const B=o[3](M(h));f.set(h,[o,B])}),()=>{b.delete(i),b.size===0&&f.forEach(([o,n],h)=>{n&&(n(),f.set(h,[o]))})}),z=Array.isArray(r)?[]:Object.create(Object.getPrototypeOf(r)),N=t(z,{deleteProperty(i,o){const n=Reflect.get(i,o);Z(o);const h=Reflect.deleteProperty(i,o);return h&&y(["delete",[o],n]),h},set(i,o,n,h){const B=Reflect.has(i,o),J=Reflect.get(i,o,h);if(B&&(e(J,n)||m.has(n)&&e(J,m.get(n))))return!0;Z(o),q(n)&&(n=fe(n)||n);let R=n;if(n instanceof Promise)n.then(L=>{n.status="fulfilled",n.value=L,y(["resolve",[o],L])}).catch(L=>{n.status="rejected",n.reason=L,y(["reject",[o],L])});else{!j.has(n)&&s(n)&&(R=W(n));const L=!x.has(R)&&j.get(R);L&&K(o,L)}return Reflect.set(i,o,R,h),y(["set",[o],n,J]),!0}});m.set(r,N);const pe=[z,C,c,ue];return j.set(N,pe),Reflect.ownKeys(r).forEach(i=>{const o=Object.getOwnPropertyDescriptor(r,i);"value"in o&&(N[i]=r[i],delete o.value,delete o.writable),Object.defineProperty(z,i,o)}),N})=>[W,j,x,e,t,s,a,l,c,m,g],[ye]=be();function A(e={}){return ye(e)}function U(e,t,s){const a=j.get(e);(H?"production":void 0)!=="production"&&!a&&console.warn("Please use proxy object");let l;const c=[],m=a[3];let g=!1;const W=m(r=>{if(c.push(r),s){t(c.splice(0));return}l||(l=Promise.resolve().then(()=>{l=void 0,g&&t(c.splice(0))}))});return g=!0,()=>{g=!1,W()}}function ve(e,t){const s=j.get(e);(H?"production":void 0)!=="production"&&!s&&console.warn("Please use proxy object");const[a,l,c]=s;return c(a,l(),t)}const d=A({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),de={state:d,subscribe(e){return U(d,()=>e(d))},push(e,t){e!==d.view&&(d.view=e,t&&(d.data=t),d.history.push(e))},reset(e){d.view=e,d.history=[e]},replace(e){d.history.length>1&&(d.history[d.history.length-1]=e,d.view=e)},goBack(){if(d.history.length>1){d.history.pop();const[e]=d.history.slice(-1);d.view=e}},setData(e){d.data=e}},p={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return p.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return p.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(p.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let a=e;a.includes("://")||(a=e.replaceAll("/","").replaceAll(":",""),a=`${a}://`),a.endsWith("/")||(a=`${a}/`),this.setWalletConnectDeepLink(a,s);const l=encodeURIComponent(t);return`${a}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!p.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let a=e;a.endsWith("/")||(a=`${a}/`),this.setWalletConnectDeepLink(a,s);const l=encodeURIComponent(t);return`${a}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(p.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(p.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=de.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},we=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),u=A({enabled:we,userSessionId:"",events:[],connectedWalletId:void 0}),Ie={state:u,subscribe(e){return U(u.events,()=>e(ve(u.events[u.events.length-1])))},initialize(){u.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(u.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){u.connectedWalletId=e},click(e){if(u.enabled){const t={type:"CLICK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},track(e){if(u.enabled){const t={type:"TRACK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},view(e){if(u.enabled){const t={type:"VIEW",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}}},O=A({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),v={state:O,subscribe(e){return U(O,()=>e(O))},setChains(e){O.chains=e},setWalletConnectUri(e){O.walletConnectUri=e},setIsCustomDesktop(e){O.isCustomDesktop=e},setIsCustomMobile(e){O.isCustomMobile=e},setIsDataLoaded(e){O.isDataLoaded=e},setIsUiLoaded(e){O.isUiLoaded=e},setIsAuth(e){O.isAuth=e}},$=A({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),_={state:$,subscribe(e){return U($,()=>e($))},setConfig(e){var t,s;Ie.initialize(),v.setChains(e.chains),v.setIsAuth(!!e.enableAuthMode),v.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),v.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),p.setModalVersionInStorage(),Object.assign($,e)}};var Oe=Object.defineProperty,se=Object.getOwnPropertySymbols,Ee=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,re=(e,t,s)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ce=(e,t)=>{for(var s in t||(t={}))Ee.call(t,s)&&re(e,s,t[s]);if(se)for(var s of se(t))We.call(t,s)&&re(e,s,t[s]);return e};const Q="https://explorer-api.walletconnect.com",X="wcm",Y="js-2.6.2";async function V(e,t){const s=Ce({sdkType:X,sdkVersion:Y},t),a=new URL(e,Q);return a.searchParams.append("projectId",_.state.projectId),Object.entries(s).forEach(([l,c])=>{c&&a.searchParams.append(l,String(c))}),(await fetch(a)).json()}const P={async getDesktopListings(e){return V("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return V("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return V("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return V("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${Q}/w3m/v1/getWalletImage/${e}?projectId=${_.state.projectId}&sdkType=${X}&sdkVersion=${Y}`},getAssetImageUrl(e){return`${Q}/w3m/v1/getAssetImage/${e}?projectId=${_.state.projectId}&sdkType=${X}&sdkVersion=${Y}`}};var Le=Object.defineProperty,oe=Object.getOwnPropertySymbols,je=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable,ne=(e,t,s)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Me=(e,t)=>{for(var s in t||(t={}))je.call(t,s)&&ne(e,s,t[s]);if(oe)for(var s of oe(t))Ae.call(t,s)&&ne(e,s,t[s]);return e};const ae=p.isMobile(),E=A({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),Re={state:E,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=_.state;if(e==="NONE"||t==="ALL"&&!e)return E.recomendedWallets;if(p.isArray(e)){const s={recommendedIds:e.join(",")},{listings:a}=await P.getAllListings(s),l=Object.values(a);l.sort((c,m)=>{const g=e.indexOf(c.id),W=e.indexOf(m.id);return g-W}),E.recomendedWallets=l}else{const{chains:s,isAuth:a}=v.state,l=s==null?void 0:s.join(","),c=p.isArray(t),m={page:1,sdks:a?"auth_v1":void 0,entries:p.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:c?t.join(","):void 0},{listings:g}=ae?await P.getMobileListings(m):await P.getDesktopListings(m);E.recomendedWallets=Object.values(g)}return E.recomendedWallets},async getWallets(e){const t=Me({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:a}=_.state,{recomendedWallets:l}=E;if(a==="ALL")return E.wallets;l.length?t.excludedIds=l.map(I=>I.id).join(","):p.isArray(s)&&(t.excludedIds=s.join(",")),p.isArray(a)&&(t.excludedIds=[t.excludedIds,a].filter(Boolean).join(",")),v.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:m}=e,{listings:g,total:W}=ae?await P.getMobileListings(t):await P.getDesktopListings(t),r=Object.values(g),w=m?"search":"wallets";return E[w]={listings:[...E[w].listings,...r],total:W,page:c??1},{listings:r,total:W}},getWalletImageUrl(e){return P.getWalletImageUrl(e)},getAssetImageUrl(e){return P.getAssetImageUrl(e)},resetSearch(){E.search={listings:[],total:0,page:1}}},S=A({open:!1}),F={state:S,subscribe(e){return U(S,()=>e(S))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:a}=v.state;if(p.removeWalletConnectDeepLink(),v.setWalletConnectUri(e==null?void 0:e.uri),v.setChains(e==null?void 0:e.chains),de.reset("ConnectWallet"),s&&a)S.open=!0,t();else{const l=setInterval(()=>{const c=v.state;c.isUiLoaded&&c.isDataLoaded&&(clearInterval(l),S.open=!0,t())},200)}})},close(){S.open=!1}};var Pe=Object.defineProperty,ie=Object.getOwnPropertySymbols,De=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable,le=(e,t,s)=>t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,ke=(e,t)=>{for(var s in t||(t={}))De.call(t,s)&&le(e,s,t[s]);if(ie)for(var s of ie(t))Ue.call(t,s)&&le(e,s,t[s]);return e};function Se(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const T=A({themeMode:Se()?"dark":"light"}),ce={state:T,subscribe(e){return U(T,()=>e(T))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(T.themeMode=t),s&&(T.themeVariables=ke({},s))}},D=A({open:!1,message:"",variant:"success"}),xe={state:D,subscribe(e){return U(D,()=>e(D))},openToast(e,t){D.open=!0,D.message=e,D.variant=t},closeToast(){D.open=!1}};class _e{constructor(t){this.openModal=F.open,this.closeModal=F.close,this.subscribeModal=F.subscribe,this.setTheme=ce.setThemeConfig,ce.setThemeConfig(t),_.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await ge(()=>import("./index-Pf0epCBj-lBM6aXnX.js"),__vite__mapDeps([0,1,2,3,4]));const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),v.setIsUiLoaded(!0)}}}const $e=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:_e},Symbol.toStringTag,{value:"Module"}));export{Ie as R,de as T,p as a,$e as i,ce as n,xe as o,v as p,F as s,Re as t,_ as y};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Pf0epCBj-lBM6aXnX.js","assets/index-HI-YyQWI.js","assets/index-y1ZkuYAd.js","assets/vendor-aecOC4Ab.js","assets/index-KZQ6x1uu.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}