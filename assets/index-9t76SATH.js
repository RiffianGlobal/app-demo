import{_ as pe}from"./index-i1eC79s0.js";const me=Symbol(),ee=Object.getPrototypeOf,q=new WeakMap,he=e=>e&&(q.has(e)?q.get(e):ee(e)===Object.prototype||ee(e)===Array.prototype),ge=e=>he(e)&&e[me]||null,te=(e,t=!0)=>{q.set(e,t)};var z={VITE_APP_NAME:"Riffian",VITE_APP_TITLE:"Riffian",VITE_APP_GA:"",VITE_DISABLE_MAINNET:"true",VITE_DEF_TESTNET:"0xfa2",VITE_KEY_INFURA:"50e9845f779f4770a64fa6f47e238d10",VITE_KEY_ALCHEMY:"",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,VITE_APP_VER:"0.12.0",VITE_APP_MDI:'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@7/css/materialdesignicons.min.css"/>'};const Y=e=>typeof e=="object"&&e!==null,C=new WeakMap,x=new WeakSet,be=(e=Object.is,t=(n,g)=>new Proxy(n,g),s=n=>Y(n)&&!x.has(n)&&(Array.isArray(n)||!(Symbol.iterator in n))&&!(n instanceof WeakMap)&&!(n instanceof WeakSet)&&!(n instanceof Error)&&!(n instanceof Number)&&!(n instanceof Date)&&!(n instanceof String)&&!(n instanceof RegExp)&&!(n instanceof ArrayBuffer),r=n=>{switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:throw n}},l=new WeakMap,c=(n,g,E=r)=>{const y=l.get(n);if((y==null?void 0:y[0])===g)return y[1];const I=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n));return te(I,!0),l.set(n,[g,I]),Reflect.ownKeys(n).forEach(U=>{if(Object.getOwnPropertyDescriptor(I,U))return;const O=Reflect.get(n,U),j={value:O,enumerable:!0,configurable:!0};if(x.has(O))te(O,!1);else if(O instanceof Promise)delete j.value,j.get=()=>E(O);else if(C.has(O)){const[b,H]=C.get(O);j.value=c(b,H(),E)}Object.defineProperty(I,U,j)}),Object.preventExtensions(I)},m=new WeakMap,p=[1,1],A=n=>{if(!Y(n))throw new Error("object required");const g=m.get(n);if(g)return g;let E=p[0];const y=new Set,I=(a,i=++p[0])=>{E!==i&&(E=i,y.forEach(o=>o(a,i)))};let U=p[1];const O=(a=++p[1])=>(U!==a&&!y.size&&(U=a,b.forEach(([i])=>{const o=i[1](a);o>E&&(E=o)})),E),j=a=>(i,o)=>{const h=[...i];h[1]=[a,...h[1]],I(h,o)},b=new Map,H=(a,i)=>{if((z?"production":void 0)!=="production"&&b.has(a))throw new Error("prop listener already exists");if(y.size){const o=i[3](j(a));b.set(a,[i,o])}else b.set(a,[i])},Z=a=>{var i;const o=b.get(a);o&&(b.delete(a),(i=o[1])==null||i.call(o))},ue=a=>(y.add(a),y.size===1&&b.forEach(([o,h],S)=>{if((z?"production":void 0)!=="production"&&h)throw new Error("remove already exists");const N=o[3](j(S));b.set(S,[o,N])}),()=>{y.delete(a),y.size===0&&b.forEach(([o,h],S)=>{h&&(h(),b.set(S,[o]))})}),F=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),V=t(F,{deleteProperty(a,i){const o=Reflect.get(a,i);Z(i);const h=Reflect.deleteProperty(a,i);return h&&I(["delete",[i],o]),h},set(a,i,o,h){const S=Reflect.has(a,i),N=Reflect.get(a,i,h);if(S&&(e(N,o)||m.has(o)&&e(N,m.get(o))))return!0;Z(i),Y(o)&&(o=ge(o)||o);let $=o;if(o instanceof Promise)o.then(W=>{o.status="fulfilled",o.value=W,I(["resolve",[i],W])}).catch(W=>{o.status="rejected",o.reason=W,I(["reject",[i],W])});else{!C.has(o)&&s(o)&&($=A(o));const W=!x.has($)&&C.get($);W&&H(i,W)}return Reflect.set(a,i,$,h),I(["set",[i],o,N]),!0}});m.set(n,V);const fe=[F,O,c,ue];return C.set(V,fe),Reflect.ownKeys(n).forEach(a=>{const i=Object.getOwnPropertyDescriptor(n,a);"value"in i&&(V[a]=n[a],delete i.value,delete i.writable),Object.defineProperty(F,a,i)}),V})=>[A,C,x,e,t,s,r,l,c,m,p],[ye]=be();function _(e={}){return ye(e)}function D(e,t,s){const r=C.get(e);(z?"production":void 0)!=="production"&&!r&&console.warn("Please use proxy object");let l;const c=[],m=r[3];let p=!1;const n=m(g=>{if(c.push(g),s){t(c.splice(0));return}l||(l=Promise.resolve().then(()=>{l=void 0,p&&t(c.splice(0))}))});return p=!0,()=>{p=!1,n()}}function Ie(e,t){const s=C.get(e);(z?"production":void 0)!=="production"&&!s&&console.warn("Please use proxy object");const[r,l,c]=s;return c(r,l(),t)}const d=_({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),de={state:d,subscribe(e){return D(d,()=>e(d))},push(e,t){e!==d.view&&(d.view=e,t&&(d.data=t),d.history.push(e))},reset(e){d.view=e,d.history=[e]},replace(e){d.history.length>1&&(d.history[d.history.length-1]=e,d.view=e)},goBack(){if(d.history.length>1){d.history.pop();const[e]=d.history.slice(-1);d.view=e}},setData(e){d.data=e}},f={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return f.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return f.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(f.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!f.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let r=e;r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(f.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(f.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(f.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(f.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=de.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},ve=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),u=_({enabled:ve,userSessionId:"",events:[],connectedWalletId:void 0}),Ee={state:u,subscribe(e){return D(u.events,()=>e(Ie(u.events[u.events.length-1])))},initialize(){u.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(u.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){u.connectedWalletId=e},click(e){if(u.enabled){const t={type:"CLICK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},track(e){if(u.enabled){const t={type:"TRACK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},view(e){if(u.enabled){const t={type:"VIEW",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}}},w=_({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),v={state:w,subscribe(e){return D(w,()=>e(w))},setChains(e){w.chains=e},setWalletConnectUri(e){w.walletConnectUri=e},setIsCustomDesktop(e){w.isCustomDesktop=e},setIsCustomMobile(e){w.isCustomMobile=e},setIsDataLoaded(e){w.isDataLoaded=e},setIsUiLoaded(e){w.isUiLoaded=e},setIsAuth(e){w.isAuth=e}},B=_({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),k={state:B,subscribe(e){return D(B,()=>e(B))},setConfig(e){var t,s;Ee.initialize(),v.setChains(e.chains),v.setIsAuth(!!e.enableAuthMode),v.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),v.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),f.setModalVersionInStorage(),Object.assign(B,e)}};var we=Object.defineProperty,se=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable,ne=(e,t,s)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ae=(e,t)=>{for(var s in t||(t={}))Le.call(t,s)&&ne(e,s,t[s]);if(se)for(var s of se(t))Oe.call(t,s)&&ne(e,s,t[s]);return e};const G="https://explorer-api.walletconnect.com",Q="wcm",X="js-2.6.2";async function K(e,t){const s=Ae({sdkType:Q,sdkVersion:X},t),r=new URL(e,G);return r.searchParams.append("projectId",k.state.projectId),Object.entries(s).forEach(([l,c])=>{c&&r.searchParams.append(l,String(c))}),(await fetch(r)).json()}const M={async getDesktopListings(e){return K("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return K("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return K("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return K("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${G}/w3m/v1/getWalletImage/${e}?projectId=${k.state.projectId}&sdkType=${Q}&sdkVersion=${X}`},getAssetImageUrl(e){return`${G}/w3m/v1/getAssetImage/${e}?projectId=${k.state.projectId}&sdkType=${Q}&sdkVersion=${X}`}};var We=Object.defineProperty,oe=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,re=(e,t,s)=>t in e?We(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,je=(e,t)=>{for(var s in t||(t={}))Ce.call(t,s)&&re(e,s,t[s]);if(oe)for(var s of oe(t))_e.call(t,s)&&re(e,s,t[s]);return e};const ie=f.isMobile(),L=_({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),Re={state:L,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=k.state;if(e==="NONE"||t==="ALL"&&!e)return L.recomendedWallets;if(f.isArray(e)){const s={recommendedIds:e.join(",")},{listings:r}=await M.getAllListings(s),l=Object.values(r);l.sort((c,m)=>{const p=e.indexOf(c.id),A=e.indexOf(m.id);return p-A}),L.recomendedWallets=l}else{const{chains:s,isAuth:r}=v.state,l=s==null?void 0:s.join(","),c=f.isArray(t),m={page:1,sdks:r?"auth_v1":void 0,entries:f.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:c?t.join(","):void 0},{listings:p}=ie?await M.getMobileListings(m):await M.getDesktopListings(m);L.recomendedWallets=Object.values(p)}return L.recomendedWallets},async getWallets(e){const t=je({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:r}=k.state,{recomendedWallets:l}=L;if(r==="ALL")return L.wallets;l.length?t.excludedIds=l.map(E=>E.id).join(","):f.isArray(s)&&(t.excludedIds=s.join(",")),f.isArray(r)&&(t.excludedIds=[t.excludedIds,r].filter(Boolean).join(",")),v.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:m}=e,{listings:p,total:A}=ie?await M.getMobileListings(t):await M.getDesktopListings(t),n=Object.values(p),g=m?"search":"wallets";return L[g]={listings:[...L[g].listings,...n],total:A,page:c??1},{listings:n,total:A}},getWalletImageUrl(e){return M.getWalletImageUrl(e)},getAssetImageUrl(e){return M.getAssetImageUrl(e)},resetSearch(){L.search={listings:[],total:0,page:1}}},T=_({open:!1}),J={state:T,subscribe(e){return D(T,()=>e(T))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:r}=v.state;if(f.removeWalletConnectDeepLink(),v.setWalletConnectUri(e==null?void 0:e.uri),v.setChains(e==null?void 0:e.chains),de.reset("ConnectWallet"),s&&r)T.open=!0,t();else{const l=setInterval(()=>{const c=v.state;c.isUiLoaded&&c.isDataLoaded&&(clearInterval(l),T.open=!0,t())},200)}})},close(){T.open=!1}};var Me=Object.defineProperty,ae=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable,le=(e,t,s)=>t in e?Me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ue=(e,t)=>{for(var s in t||(t={}))Pe.call(t,s)&&le(e,s,t[s]);if(ae)for(var s of ae(t))De.call(t,s)&&le(e,s,t[s]);return e};function Se(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const R=_({themeMode:Se()?"dark":"light"}),ce={state:R,subscribe(e){return D(R,()=>e(R))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(R.themeMode=t),s&&(R.themeVariables=Ue({},s))}},P=_({open:!1,message:"",variant:"success"}),Ve={state:P,subscribe(e){return D(P,()=>e(P))},openToast(e,t){P.open=!0,P.message=e,P.variant=t},closeToast(){P.open=!1}};class Te{constructor(t){this.openModal=J.open,this.closeModal=J.close,this.subscribeModal=J.subscribe,this.setTheme=ce.setThemeConfig,ce.setThemeConfig(t),k.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await pe(()=>import("./index-gZU6jQiL.js"),__vite__mapDeps([0,1,2,3]));const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),v.setIsUiLoaded(!0)}}}const $e=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:Te},Symbol.toStringTag,{value:"Module"}));export{Ee as R,de as T,f as a,$e as i,ce as n,Ve as o,v as p,J as s,Re as t,k as y};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-gZU6jQiL.js","assets/index-i1eC79s0.js","assets/vendor-_aDU801h.js","assets/index-DOadFpXY.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}