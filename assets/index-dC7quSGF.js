import{_ as pe,T as j}from"./index-wMfoYGC8.js";import{_ as m,e as fe,x as R,O as he,l as V,ae as oe,af as we,J as Q,j as me,K as ue,q as Ee,n as Fe}from"./vendor-wjEH0k6O.js";const ee=["doc-button","doc-link","doc-address","doc-dialog","doc-progress","doc-switch","doc-text","doc-form","doc-toast","doc-tip","doc-image","doc-menu","doc-loading","doc-pagination"],k=ee.map(g=>g.split("-")[1]),$e=async()=>{await Promise.all(ee.map(async g=>await pe(Object.assign({"./components/doc-address.ts":()=>m(()=>import("./doc-address-k4DhM5p5.js"),__vite__mapDeps([0,1,2,3])),"./components/doc-button.ts":()=>m(()=>import("./doc-button-eOM84GuG.js"),__vite__mapDeps([4,1,2,3])),"./components/doc-dialog.ts":()=>m(()=>import("./doc-dialog-E1wzytFv.js"),__vite__mapDeps([5,1,2,3])),"./components/doc-form.ts":()=>m(()=>import("./doc-form-EiyMQdmf.js"),__vite__mapDeps([6,1,2,3])),"./components/doc-image.ts":()=>m(()=>import("./doc-image-hVljKi-Q.js"),__vite__mapDeps([7,1,2,3])),"./components/doc-link.ts":()=>m(()=>import("./doc-link-ciV4EnOk.js"),__vite__mapDeps([8,1,2,3])),"./components/doc-loading.ts":()=>m(()=>import("./doc-loading-aBMeXNNm.js"),__vite__mapDeps([9,1,2,3])),"./components/doc-menu.ts":()=>m(()=>import("./doc-menu-5EEYZrMq.js"),__vite__mapDeps([10,1,2,3])),"./components/doc-pagination.ts":()=>m(()=>import("./doc-pagination-beWLtsoQ.js"),__vite__mapDeps([11,1,2,3])),"./components/doc-progress.ts":()=>m(()=>import("./doc-progress-GIucYie3.js"),__vite__mapDeps([12,1,2,3,13])),"./components/doc-switch.ts":()=>m(()=>import("./doc-switch-uJrfC-hB.js"),__vite__mapDeps([14,1,2,3])),"./components/doc-text.ts":()=>m(()=>import("./doc-text-nmbS8t7U.js"),__vite__mapDeps([15,1,2,3])),"./components/doc-tip.ts":()=>m(()=>import("./doc-tip-4MyVK7ET.js"),__vite__mapDeps([16,1,2,3])),"./components/doc-toast.ts":()=>m(()=>import("./doc-toast-F4WsYnet.js"),__vite__mapDeps([17,1,2,3,13])),"./components/index.ts":()=>m(()=>Promise.resolve().then(()=>Ve),void 0)}),`./components/${g}.ts`))),fe.emit("docs-loaded")},te=".doc-nav>li:not(:first-of-type){border-top-width:1px;border-style:dashed;--tw-border-opacity: 1;border-color:#374151;border-color:rgba(55,65,81,var(--tw-border-opacity))}";var Pe=Object.defineProperty,Oe=Object.getOwnPropertyDescriptor,De=(g,d,r,u)=>{for(var s=u>1?void 0:u?Oe(d,r):d,f=g.length-1,p;f>=0;f--)(p=g[f])&&(s=(u?p(d,r,s):p(s))||s);return u&&s&&Pe(d,r,s),s};let le=class extends j(te){render(){return R`<div class="border px-2 rounded-md sticky top-4 border-gray-600"><ul class="doc-nav">${he(k,d=>R`<li><ui-link href="/docs/${d}" nav exact class="capitalize">${d}</ui-link></li>`)}</ul></div>`}};le=De([V("ui-docs-nav")],le);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=Symbol.for(""),Se=g=>{if((g==null?void 0:g.r)===ve)return g==null?void 0:g._$litStatic$},N=g=>({_$litStatic$:g,r:ve}),ce=new Map,Te=g=>(d,...r)=>{const u=r.length;let s,f;const p=[],o=[];let b,E=0,S=!1;for(;E<u;){for(b=d[E];E<u&&(f=r[E],(s=Se(f))!==void 0);)b+=s+d[++E],S=!0;E!==u&&o.push(f),p.push(b),E++}if(E===u&&p.push(d[u]),S){const P=p.join("$$lit$$");(d=ce.get(P))===void 0&&(p.raw=p,ce.set(P,d=p)),r=o}return g(d,...r)},q=Te(R);var _e={exports:{}};(function(g){var d=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var r=function(u){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,f=0,p={},o={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof b?new b(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++f}),t.__id},clone:function t(e,n){n=n||{};var a,i;switch(o.util.type(e)){case"Object":if(i=o.util.objId(e),n[i])return n[i];a={},n[i]=a;for(var c in e)e.hasOwnProperty(c)&&(a[c]=t(e[c],n));return a;case"Array":return i=o.util.objId(e),n[i]?n[i]:(a=[],n[i]=a,e.forEach(function(h,l){a[l]=t(h,n)}),a);default:return e}},getLanguage:function(t){for(;t;){var e=s.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(s,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(a){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var n in e)if(e[n].src==t)return e[n]}return null}},isActive:function(t,e,n){for(var a="no-"+e;t;){var i=t.classList;if(i.contains(e))return!0;if(i.contains(a))return!1;t=t.parentElement}return!!n}},languages:{plain:p,plaintext:p,text:p,txt:p,extend:function(t,e){var n=o.util.clone(o.languages[t]);for(var a in e)n[a]=e[a];return n},insertBefore:function(t,e,n,a){a=a||o.languages;var i=a[t],c={};for(var h in i)if(i.hasOwnProperty(h)){if(h==e)for(var l in n)n.hasOwnProperty(l)&&(c[l]=n[l]);n.hasOwnProperty(h)||(c[h]=i[h])}var _=a[t];return a[t]=c,o.languages.DFS(o.languages,function(A,O){O===_&&A!=t&&(this[A]=c)}),c},DFS:function t(e,n,a,i){i=i||{};var c=o.util.objId;for(var h in e)if(e.hasOwnProperty(h)){n.call(e,h,e[h],a||h);var l=e[h],_=o.util.type(l);_==="Object"&&!i[c(l)]?(i[c(l)]=!0,t(l,n,null,i)):_==="Array"&&!i[c(l)]&&(i[c(l)]=!0,t(l,n,h,i))}}},plugins:{},highlightAll:function(t,e){o.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,n){var a={callback:n,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),o.hooks.run("before-all-elements-highlight",a);for(var i=0,c;c=a.elements[i++];)o.highlightElement(c,e===!0,a.callback)},highlightElement:function(t,e,n){var a=o.util.getLanguage(t),i=o.languages[a];o.util.setLanguage(t,a);var c=t.parentElement;c&&c.nodeName.toLowerCase()==="pre"&&o.util.setLanguage(c,a);var h=t.textContent,l={element:t,language:a,grammar:i,code:h};function _(O){l.highlightedCode=O,o.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,o.hooks.run("after-highlight",l),o.hooks.run("complete",l),n&&n.call(l.element)}if(o.hooks.run("before-sanity-check",l),c=l.element.parentElement,c&&c.nodeName.toLowerCase()==="pre"&&!c.hasAttribute("tabindex")&&c.setAttribute("tabindex","0"),!l.code){o.hooks.run("complete",l),n&&n.call(l.element);return}if(o.hooks.run("before-highlight",l),!l.grammar){_(o.util.encode(l.code));return}if(e&&u.Worker){var A=new Worker(o.filename);A.onmessage=function(O){_(O.data)},A.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else _(o.highlight(l.code,l.grammar,l.language))},highlight:function(t,e,n){var a={code:t,grammar:e,language:n};if(o.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=o.tokenize(a.code,a.grammar),o.hooks.run("after-tokenize",a),b.stringify(o.util.encode(a.tokens),a.language)},tokenize:function(t,e){var n=e.rest;if(n){for(var a in n)e[a]=n[a];delete e.rest}var i=new P;return T(i,i.head,t),S(t,i,e,i.head,0),z(i)},hooks:{all:{},add:function(t,e){var n=o.hooks.all;n[t]=n[t]||[],n[t].push(e)},run:function(t,e){var n=o.hooks.all[t];if(!(!n||!n.length))for(var a=0,i;i=n[a++];)i(e)}},Token:b};u.Prism=o;function b(t,e,n,a){this.type=t,this.content=e,this.alias=n,this.length=(a||"").length|0}b.stringify=function t(e,n){if(typeof e=="string")return e;if(Array.isArray(e)){var a="";return e.forEach(function(_){a+=t(_,n)}),a}var i={type:e.type,content:t(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n},c=e.alias;c&&(Array.isArray(c)?Array.prototype.push.apply(i.classes,c):i.classes.push(c)),o.hooks.run("wrap",i);var h="";for(var l in i.attributes)h+=" "+l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+h+">"+i.content+"</"+i.tag+">"};function E(t,e,n,a){t.lastIndex=e;var i=t.exec(n);if(i&&a&&i[1]){var c=i[1].length;i.index+=c,i[0]=i[0].slice(c)}return i}function S(t,e,n,a,i,c){for(var h in n)if(!(!n.hasOwnProperty(h)||!n[h])){var l=n[h];l=Array.isArray(l)?l:[l];for(var _=0;_<l.length;++_){if(c&&c.cause==h+","+_)return;var A=l[_],O=A.inside,ne=!!A.lookbehind,ae=!!A.greedy,be=A.alias;if(ae&&!A.pattern.global){var ye=A.pattern.toString().match(/[imsuy]*$/)[0];A.pattern=RegExp(A.pattern.source,ye+"g")}for(var ie=A.pattern||A,w=a.next,$=i;w!==e.tail&&!(c&&$>=c.reach);$+=w.value.length,w=w.next){var I=w.value;if(e.length>t.length)return;if(!(I instanceof b)){var M=1,F;if(ae){if(F=E(ie,$,t,ne),!F||F.index>=t.length)break;var U=F.index,xe=F.index+F[0].length,D=$;for(D+=w.value.length;U>=D;)w=w.next,D+=w.value.length;if(D-=w.value.length,$=D,w.value instanceof b)continue;for(var C=w;C!==e.tail&&(D<xe||typeof C.value=="string");C=C.next)M++,D+=C.value.length;M--,I=t.slice($,D),F.index-=$}else if(F=E(ie,0,I,ne),!F)continue;var U=F.index,H=F[0],J=I.slice(0,U),se=I.slice(U+H.length),X=$+I.length;c&&X>c.reach&&(c.reach=X);var G=w.prev;J&&(G=T(e,G,J),$+=J.length),W(e,G,M);var Ae=new b(h,O?o.tokenize(H,O):H,be,H);if(w=T(e,G,Ae),se&&T(e,w,se),M>1){var Y={cause:h+","+_,reach:X};S(t,e,n,w.prev,$,Y),c&&Y.reach>c.reach&&(c.reach=Y.reach)}}}}}}function P(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function T(t,e,n){var a=e.next,i={value:n,prev:e,next:a};return e.next=i,a.prev=i,t.length++,i}function W(t,e,n){for(var a=e.next,i=0;i<n&&a!==t.tail;i++)a=a.next;e.next=a,a.prev=e,t.length-=i}function z(t){for(var e=[],n=t.head.next;n!==t.tail;)e.push(n.value),n=n.next;return e}if(!u.document)return u.addEventListener&&(o.disableWorkerMessageHandler||u.addEventListener("message",function(t){var e=JSON.parse(t.data),n=e.language,a=e.code,i=e.immediateClose;u.postMessage(o.highlight(a,o.languages[n],n)),i&&u.close()},!1)),o;var y=o.util.currentScript();y&&(o.filename=y.src,y.hasAttribute("data-manual")&&(o.manual=!0));function v(){o.manual||o.highlightAll()}if(!o.manual){var x=document.readyState;x==="loading"||x==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",v):window.requestAnimationFrame?window.requestAnimationFrame(v):window.setTimeout(v,16)}return o}(d);g.exports&&(g.exports=r),typeof oe<"u"&&(oe.Prism=r),r.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},r.languages.markup.tag.inside["attr-value"].inside.entity=r.languages.markup.entity,r.languages.markup.doctype.inside["internal-subset"].inside=r.languages.markup,r.hooks.add("wrap",function(u){u.type==="entity"&&(u.attributes.title=u.content.replace(/&amp;/,"&"))}),Object.defineProperty(r.languages.markup.tag,"addInlined",{value:function(s,f){var p={};p["language-"+f]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:r.languages[f]},p.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:p}};o["language-"+f]={pattern:/[\s\S]+/,inside:r.languages[f]};var b={};b[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:o},r.languages.insertBefore("markup","cdata",b)}}),Object.defineProperty(r.languages.markup.tag,"addAttribute",{value:function(u,s){r.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+u+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:r.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,r.languages.xml=r.languages.extend("markup",{}),r.languages.ssml=r.languages.xml,r.languages.atom=r.languages.xml,r.languages.rss=r.languages.xml,function(u){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;u.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+s.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},u.languages.css.atrule.inside.rest=u.languages.css;var f=u.languages.markup;f&&(f.tag.addInlined("style","css"),f.tag.addAttribute("style","css"))}(r),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{"class-name":[r.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),r.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,r.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:r.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:r.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:r.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:r.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:r.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),r.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:r.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),r.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),r.languages.markup&&(r.languages.markup.tag.addInlined("script","javascript"),r.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),r.languages.js=r.languages.javascript,function(){if(typeof r>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var u="Loading…",s=function(y,v){return"✖ Error "+y+" while fetching file: "+v},f="✖ Error: File does not exist or is empty",p={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},o="data-src-status",b="loading",E="loaded",S="failed",P="pre[data-src]:not(["+o+'="'+E+'"]):not(['+o+'="'+b+'"])';function T(y,v,x){var t=new XMLHttpRequest;t.open("GET",y,!0),t.onreadystatechange=function(){t.readyState==4&&(t.status<400&&t.responseText?v(t.responseText):t.status>=400?x(s(t.status,t.statusText)):x(f))},t.send(null)}function W(y){var v=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(v){var x=Number(v[1]),t=v[2],e=v[3];return t?e?[x,Number(e)]:[x,void 0]:[x,x]}}r.hooks.add("before-highlightall",function(y){y.selector+=", "+P}),r.hooks.add("before-sanity-check",function(y){var v=y.element;if(v.matches(P)){y.code="",v.setAttribute(o,b);var x=v.appendChild(document.createElement("CODE"));x.textContent=u;var t=v.getAttribute("data-src"),e=y.language;if(e==="none"){var n=(/\.(\w+)$/.exec(t)||[,"none"])[1];e=p[n]||n}r.util.setLanguage(x,e),r.util.setLanguage(v,e);var a=r.plugins.autoloader;a&&a.loadLanguages(e),T(t,function(i){v.setAttribute(o,E);var c=W(v.getAttribute("data-range"));if(c){var h=i.split(/\r\n?|\n/g),l=c[0],_=c[1]==null?h.length:c[1];l<0&&(l+=h.length),l=Math.max(0,Math.min(l-1,h.length)),_<0&&(_+=h.length),_=Math.max(0,Math.min(_,h.length)),i=h.slice(l,_).join(`
`),v.hasAttribute("data-start")||v.setAttribute("data-start",String(l+1))}x.textContent=i,r.highlightElement(x)},function(i){v.setAttribute(o,S),x.textContent=i})}}),r.plugins.fileHighlight={highlight:function(v){for(var x=(v||document).querySelectorAll(P),t=0,e;e=x[t++];)r.highlightElement(e)}};var z=!1;r.fileHighlight=function(){z||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),z=!0),r.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(_e);var Ie=_e.exports;const de=we(Ie);var ke=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,re=(g,d,r,u)=>{for(var s=u>1?void 0:u?Le(d,r):d,f=g.length-1,p;f>=0;f--)(p=g[f])&&(s=(u?p(d,r,s):p(s))||s);return u&&s&&ke(d,r,s),s};let Z=class extends j(te){constructor(){super(...arguments),this.cmp="",this.html="",this.getCode=async()=>{const{default:g}=await pe(Object.assign({"./components/doc-address.ts":()=>m(()=>import("./doc-address-Cj4LMumt.js"),__vite__mapDeps([])),"./components/doc-button.ts":()=>m(()=>import("./doc-button-3PdByMLc.js"),__vite__mapDeps([])),"./components/doc-dialog.ts":()=>m(()=>import("./doc-dialog-DaiU6fgI.js"),__vite__mapDeps([])),"./components/doc-form.ts":()=>m(()=>import("./doc-form-79Fp9yfX.js"),__vite__mapDeps([])),"./components/doc-image.ts":()=>m(()=>import("./doc-image-1Ccx9W3J.js"),__vite__mapDeps([])),"./components/doc-link.ts":()=>m(()=>import("./doc-link-gKWFdzPO.js"),__vite__mapDeps([])),"./components/doc-loading.ts":()=>m(()=>import("./doc-loading-3NCxAMk-.js"),__vite__mapDeps([])),"./components/doc-menu.ts":()=>m(()=>import("./doc-menu-POHKhjZe.js"),__vite__mapDeps([])),"./components/doc-pagination.ts":()=>m(()=>import("./doc-pagination-ul3HlS2O.js"),__vite__mapDeps([])),"./components/doc-progress.ts":()=>m(()=>import("./doc-progress-xK9BWQwl.js"),__vite__mapDeps([])),"./components/doc-switch.ts":()=>m(()=>import("./doc-switch-nPLT1XOB.js"),__vite__mapDeps([])),"./components/doc-text.ts":()=>m(()=>import("./doc-text-9zatxZSX.js"),__vite__mapDeps([])),"./components/doc-tip.ts":()=>m(()=>import("./doc-tip-XWSkzoIi.js"),__vite__mapDeps([])),"./components/doc-toast.ts":()=>m(()=>import("./doc-toast-_TXQgKq3.js"),__vite__mapDeps([]))}),`./components/doc-${this.cmp}.ts`);this.html=de.highlight(g,de.languages.javascript,"javascript")}}connectedCallback(){super.connectedCallback(),this.getCode()}render(){return this.html?q`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs/themes/prism.min.css"><pre class="doc-code language-ts w-full h-96 !text-xs">${N(this.html)}</pre>`:""}};re([me()],Z.prototype,"cmp",2);re([Q()],Z.prototype,"html",2);Z=re([V("doc-code")],Z);const Ce=".doc-intro:not(:first-of-type){margin-bottom:0;margin-top:0;border-top-width:1px;border-style:dashed;--tw-border-opacity: 1;border-color:#374151;border-color:rgba(55,65,81,var(--tw-border-opacity));padding-top:.5rem}.doc-intro.active h6:before{font-size:1.25rem;line-height:1.75rem}.doc-intro h6{margin-bottom:.5rem;display:flex;height:2rem;width:100%;align-items:center;line-height:2rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.doc-intro h6:before{content:attr(name);margin-right:1rem;font-weight:700;text-transform:capitalize;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}";var Re=Object.defineProperty,je=Object.getOwnPropertyDescriptor,B=(g,d,r,u)=>{for(var s=u>1?void 0:u?je(d,r):d,f=g.length-1,p;f>=0;f--)(p=g[f])&&(s=(u?p(d,r,s):p(s))||s);return u&&s&&Re(d,r,s),s};let L=class extends j(Ce){constructor(){super(...arguments),this.class="",this.pathname=ue(),this.currentCode="",this.updatePathName=()=>{this.pathname=ue()}}get anchor(){return this.pathname.replace(/^\/docs\//,"")}render(){return q`<div class="border p-4 rounded-md border-gray-600 ${this.class}">${he(ee,(g,d)=>q`<div class="doc-intro ${Ee({active:this.anchor===k[d]})}"><h6 name="${k[d]}"><ui-tip @close="${()=>this.currentCode=""}" @click="${()=>this.currentCode=k[d]}"><i slot="icon" class="text-gray-500 text-base mdi mdi-xml cursor-pointer"></i>${Fe(this.currentCode===k[d],()=>q`<doc-code .cmp="${k[d]}"></doc-code>`)}</ui-tip></h6><${N(g)}></${N(g)}></div>`)}</div>`}connectedCallback(){super.connectedCallback(),$e(),fe.on("router-change",this.updatePathName)}};B([me({type:String})],L.prototype,"class",2);B([Q()],L.prototype,"pathname",2);B([Q()],L.prototype,"currentCode",2);L=B([V("ui-components")],L);const Ve=Object.freeze(Object.defineProperty({__proto__:null,get UIComponents(){return L}},Symbol.toStringTag,{value:"Module"}));var ze=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,Ue=(g,d,r,u)=>{for(var s=u>1?void 0:u?Me(d,r):d,f=g.length-1,p;f>=0;f--)(p=g[f])&&(s=(u?p(d,r,s):p(s))||s);return u&&s&&ze(d,r,s),s};let ge=class extends j(te){render(){return R`<div class="flex gap-4"><ui-docs-nav class="w-48"></ui-docs-nav><ui-components class="flex-grow"></ui-components></div>`}};ge=Ue([V("ui-docs")],ge);var He=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,qe=(g,d,r,u)=>{for(var s=u>1?void 0:u?Ge(d,r):d,f=g.length-1,p;f>=0;f--)(p=g[f])&&(s=(u?p(d,r,s):p(s))||s);return u&&s&&He(d,r,s),s};let K=class extends j(""){render(){return R`<div class="ui-container"><ui-docs></ui-docs></div>`}};K=qe([V("view-docs")],K);const Je=Object.freeze(Object.defineProperty({__proto__:null,get ViewDocs(){return K}},Symbol.toStringTag,{value:"Module"}));export{Je as a,N as i,q as n};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/doc-address-k4DhM5p5.js","assets/index-wMfoYGC8.js","assets/vendor-wjEH0k6O.js","assets/index-_LzCdNP7.css","assets/doc-button-eOM84GuG.js","assets/doc-dialog-E1wzytFv.js","assets/doc-form-EiyMQdmf.js","assets/doc-image-hVljKi-Q.js","assets/doc-link-ciV4EnOk.js","assets/doc-loading-aBMeXNNm.js","assets/doc-menu-5EEYZrMq.js","assets/doc-pagination-beWLtsoQ.js","assets/doc-progress-GIucYie3.js","assets/bar-AmVEEvSc.js","assets/doc-switch-uJrfC-hB.js","assets/doc-text-nmbS8t7U.js","assets/doc-tip-4MyVK7ET.js","assets/doc-toast-F4WsYnet.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}