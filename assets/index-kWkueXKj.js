import{_ as fe,j as m,T as R}from"./index-cmBhvwLn.js";import{e as he,x as T,q as me,b as j,n as ve,h as B,a1 as le,a2 as $e,a as _e,j as ue,d as Pe}from"./vendor-0vo4Ah28.js";const te=["doc-button","doc-link","doc-address","doc-dialog","doc-progress","doc-switch","doc-text","doc-form","doc-tip","doc-image","doc-menu","doc-loading","doc-pagination"],C=te.map(p=>p.split("-")[1]),Oe=async()=>{await Promise.all(te.map(async p=>await fe(Object.assign({"./components/doc-address.ts":()=>m(()=>import("./doc-address-xWrgEOKu.js"),__vite__mapDeps([0,1,2,3])),"./components/doc-button.ts":()=>m(()=>import("./doc-button-kLpCA9aB.js"),__vite__mapDeps([4,1,2,3])),"./components/doc-dialog.ts":()=>m(()=>import("./doc-dialog-QGhoHYK-.js"),__vite__mapDeps([5,1,2,3])),"./components/doc-form.ts":()=>m(()=>import("./doc-form-9dgdI0S-.js"),__vite__mapDeps([6,1,2,3])),"./components/doc-image.ts":()=>m(()=>import("./doc-image-rA6vvZW-.js"),__vite__mapDeps([7,1,2,3])),"./components/doc-link.ts":()=>m(()=>import("./doc-link-qc61efA8.js"),__vite__mapDeps([8,1,2,3])),"./components/doc-loading.ts":()=>m(()=>import("./doc-loading-purXvxxZ.js"),__vite__mapDeps([9,1,2,3,10])),"./components/doc-menu.ts":()=>m(()=>import("./doc-menu-ESsR-0kj.js"),__vite__mapDeps([11,1,2,3])),"./components/doc-pagination.ts":()=>m(()=>import("./doc-pagination-TokAFS4V.js"),__vite__mapDeps([12,1,2,3,10])),"./components/doc-progress.ts":()=>m(()=>import("./doc-progress-kU_8324V.js"),__vite__mapDeps([13,1,2,3])),"./components/doc-switch.ts":()=>m(()=>import("./doc-switch-yRWpzpCC.js"),__vite__mapDeps([14,1,2,3])),"./components/doc-text.ts":()=>m(()=>import("./doc-text-72HRlM26.js"),__vite__mapDeps([15,1,2,3])),"./components/doc-tip.ts":()=>m(()=>import("./doc-tip-tIyTfYBP.js"),__vite__mapDeps([16,1,2,3])),"./components/index.ts":()=>m(()=>Promise.resolve().then(()=>He),void 0)}),`./components/${p}.ts`))),he.emit("docs-loaded")},re=".doc-nav>li:not(:first-of-type){border-top-width:1px;border-style:dashed;--tw-border-opacity: 1;border-color:#374151;border-color:rgba(55,65,81,var(--tw-border-opacity))}";var De=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,Te=(p,d,r,o)=>{for(var i=o>1?void 0:o?Se(d,r):d,f=p.length-1,g;f>=0;f--)(g=p[f])&&(i=(o?g(d,r,i):g(i))||i);return o&&i&&De(d,r,i),i};let ce=class extends R(re){render(){return T`<div class="border px-2 rounded-md sticky top-4 border-gray-600"><ul class="doc-nav">${me(C,d=>T`<li><ui-link href="/docs/${d}" nav exact class="capitalize">${d}</ui-link></li>`)}</ul></div>`}};ce=Te([j("ui-docs-nav")],ce);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=Symbol.for(""),Ie=p=>{if((p==null?void 0:p.r)===be)return p==null?void 0:p._$litStatic$},K=p=>({_$litStatic$:p,r:be}),de=new Map,ke=p=>(d,...r)=>{const o=r.length;let i,f;const g=[],l=[];let b,E=0,S=!1;for(;E<o;){for(b=d[E];E<o&&(f=r[E],(i=Ie(f))!==void 0);)b+=i+d[++E],S=!0;E!==o&&l.push(f),g.push(b),E++}if(E===o&&g.push(d[o]),S){const P=g.join("$$lit$$");(d=de.get(P))===void 0&&(g.raw=g,de.set(P,d=g)),r=l}return p(d,...r)},q=ke(T);var Ce=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,ye=(p,d,r,o)=>{for(var i=o>1?void 0:o?Le(d,r):d,f=p.length-1,g;f>=0;f--)(g=p[f])&&(i=(o?g(d,r,i):g(i))||i);return o&&i&&Ce(d,r,i),i};let Q=class extends R(""){constructor(){super(...arguments),this.model=!1}show(){this.model=!0}onClose(){this.model=!1,this.emit("close")}render(){return T`<slot name="button" @click="${this.show}"><ui-button icon><slot name="icon"><i class="mdi mdi-help-circle-outline cursor-pointer"></i></slot></ui-button></slot>${ve(this.model,()=>T`<ui-prompt @close="${this.onClose}"><slot></slot></ui-prompt>`)}`}};ye([B()],Q.prototype,"model",2);Q=ye([j("ui-tip")],Q);var xe={exports:{}};(function(p){var d=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var r=function(o){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,f=0,g={},l={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof b?new b(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++f}),t.__id},clone:function t(e,n){n=n||{};var a,s;switch(l.util.type(e)){case"Object":if(s=l.util.objId(e),n[s])return n[s];a={},n[s]=a;for(var c in e)e.hasOwnProperty(c)&&(a[c]=t(e[c],n));return a;case"Array":return s=l.util.objId(e),n[s]?n[s]:(a=[],n[s]=a,e.forEach(function(h,u){a[u]=t(h,n)}),a);default:return e}},getLanguage:function(t){for(;t;){var e=i.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(i,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(a){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var n in e)if(e[n].src==t)return e[n]}return null}},isActive:function(t,e,n){for(var a="no-"+e;t;){var s=t.classList;if(s.contains(e))return!0;if(s.contains(a))return!1;t=t.parentElement}return!!n}},languages:{plain:g,plaintext:g,text:g,txt:g,extend:function(t,e){var n=l.util.clone(l.languages[t]);for(var a in e)n[a]=e[a];return n},insertBefore:function(t,e,n,a){a=a||l.languages;var s=a[t],c={};for(var h in s)if(s.hasOwnProperty(h)){if(h==e)for(var u in n)n.hasOwnProperty(u)&&(c[u]=n[u]);n.hasOwnProperty(h)||(c[h]=s[h])}var _=a[t];return a[t]=c,l.languages.DFS(l.languages,function(A,O){O===_&&A!=t&&(this[A]=c)}),c},DFS:function t(e,n,a,s){s=s||{};var c=l.util.objId;for(var h in e)if(e.hasOwnProperty(h)){n.call(e,h,e[h],a||h);var u=e[h],_=l.util.type(u);_==="Object"&&!s[c(u)]?(s[c(u)]=!0,t(u,n,null,s)):_==="Array"&&!s[c(u)]&&(s[c(u)]=!0,t(u,n,h,s))}}},plugins:{},highlightAll:function(t,e){l.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,n){var a={callback:n,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),l.hooks.run("before-all-elements-highlight",a);for(var s=0,c;c=a.elements[s++];)l.highlightElement(c,e===!0,a.callback)},highlightElement:function(t,e,n){var a=l.util.getLanguage(t),s=l.languages[a];l.util.setLanguage(t,a);var c=t.parentElement;c&&c.nodeName.toLowerCase()==="pre"&&l.util.setLanguage(c,a);var h=t.textContent,u={element:t,language:a,grammar:s,code:h};function _(O){u.highlightedCode=O,l.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,l.hooks.run("after-highlight",u),l.hooks.run("complete",u),n&&n.call(u.element)}if(l.hooks.run("before-sanity-check",u),c=u.element.parentElement,c&&c.nodeName.toLowerCase()==="pre"&&!c.hasAttribute("tabindex")&&c.setAttribute("tabindex","0"),!u.code){l.hooks.run("complete",u),n&&n.call(u.element);return}if(l.hooks.run("before-highlight",u),!u.grammar){_(l.util.encode(u.code));return}if(e&&o.Worker){var A=new Worker(l.filename);A.onmessage=function(O){_(O.data)},A.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else _(l.highlight(u.code,u.grammar,u.language))},highlight:function(t,e,n){var a={code:t,grammar:e,language:n};if(l.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=l.tokenize(a.code,a.grammar),l.hooks.run("after-tokenize",a),b.stringify(l.util.encode(a.tokens),a.language)},tokenize:function(t,e){var n=e.rest;if(n){for(var a in n)e[a]=n[a];delete e.rest}var s=new P;return I(s,s.head,t),S(t,s,e,s.head,0),z(s)},hooks:{all:{},add:function(t,e){var n=l.hooks.all;n[t]=n[t]||[],n[t].push(e)},run:function(t,e){var n=l.hooks.all[t];if(!(!n||!n.length))for(var a=0,s;s=n[a++];)s(e)}},Token:b};o.Prism=l;function b(t,e,n,a){this.type=t,this.content=e,this.alias=n,this.length=(a||"").length|0}b.stringify=function t(e,n){if(typeof e=="string")return e;if(Array.isArray(e)){var a="";return e.forEach(function(_){a+=t(_,n)}),a}var s={type:e.type,content:t(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n},c=e.alias;c&&(Array.isArray(c)?Array.prototype.push.apply(s.classes,c):s.classes.push(c)),l.hooks.run("wrap",s);var h="";for(var u in s.attributes)h+=" "+u+'="'+(s.attributes[u]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+h+">"+s.content+"</"+s.tag+">"};function E(t,e,n,a){t.lastIndex=e;var s=t.exec(n);if(s&&a&&s[1]){var c=s[1].length;s.index+=c,s[0]=s[0].slice(c)}return s}function S(t,e,n,a,s,c){for(var h in n)if(!(!n.hasOwnProperty(h)||!n[h])){var u=n[h];u=Array.isArray(u)?u:[u];for(var _=0;_<u.length;++_){if(c&&c.cause==h+","+_)return;var A=u[_],O=A.inside,ae=!!A.lookbehind,se=!!A.greedy,Ae=A.alias;if(se&&!A.pattern.global){var we=A.pattern.toString().match(/[imsuy]*$/)[0];A.pattern=RegExp(A.pattern.source,we+"g")}for(var ie=A.pattern||A,w=a.next,$=s;w!==e.tail&&!(c&&$>=c.reach);$+=w.value.length,w=w.next){var k=w.value;if(e.length>t.length)return;if(!(k instanceof b)){var M=1,F;if(se){if(F=E(ie,$,t,ae),!F||F.index>=t.length)break;var U=F.index,Ee=F.index+F[0].length,D=$;for(D+=w.value.length;U>=D;)w=w.next,D+=w.value.length;if(D-=w.value.length,$=D,w.value instanceof b)continue;for(var V=w;V!==e.tail&&(D<Ee||typeof V.value=="string");V=V.next)M++,D+=V.value.length;M--,k=t.slice($,D),F.index-=$}else if(F=E(ie,0,k,ae),!F)continue;var U=F.index,H=F[0],Y=k.slice(0,U),oe=k.slice(U+H.length),J=$+k.length;c&&J>c.reach&&(c.reach=J);var G=w.prev;Y&&(G=I(e,G,Y),$+=Y.length),X(e,G,M);var Fe=new b(h,O?l.tokenize(H,O):H,Ae,H);if(w=I(e,G,Fe),oe&&I(e,w,oe),M>1){var N={cause:h+","+_,reach:J};S(t,e,n,w.prev,$,N),c&&N.reach>c.reach&&(c.reach=N.reach)}}}}}}function P(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function I(t,e,n){var a=e.next,s={value:n,prev:e,next:a};return e.next=s,a.prev=s,t.length++,s}function X(t,e,n){for(var a=e.next,s=0;s<n&&a!==t.tail;s++)a=a.next;e.next=a,a.prev=e,t.length-=s}function z(t){for(var e=[],n=t.head.next;n!==t.tail;)e.push(n.value),n=n.next;return e}if(!o.document)return o.addEventListener&&(l.disableWorkerMessageHandler||o.addEventListener("message",function(t){var e=JSON.parse(t.data),n=e.language,a=e.code,s=e.immediateClose;o.postMessage(l.highlight(a,l.languages[n],n)),s&&o.close()},!1)),l;var y=l.util.currentScript();y&&(l.filename=y.src,y.hasAttribute("data-manual")&&(l.manual=!0));function v(){l.manual||l.highlightAll()}if(!l.manual){var x=document.readyState;x==="loading"||x==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",v):window.requestAnimationFrame?window.requestAnimationFrame(v):window.setTimeout(v,16)}return l}(d);p.exports&&(p.exports=r),typeof le<"u"&&(le.Prism=r),r.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},r.languages.markup.tag.inside["attr-value"].inside.entity=r.languages.markup.entity,r.languages.markup.doctype.inside["internal-subset"].inside=r.languages.markup,r.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(r.languages.markup.tag,"addInlined",{value:function(i,f){var g={};g["language-"+f]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:r.languages[f]},g.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:g}};l["language-"+f]={pattern:/[\s\S]+/,inside:r.languages[f]};var b={};b[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:l},r.languages.insertBefore("markup","cdata",b)}}),Object.defineProperty(r.languages.markup.tag,"addAttribute",{value:function(o,i){r.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:r.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,r.languages.xml=r.languages.extend("markup",{}),r.languages.ssml=r.languages.xml,r.languages.atom=r.languages.xml,r.languages.rss=r.languages.xml,function(o){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var f=o.languages.markup;f&&(f.tag.addInlined("style","css"),f.tag.addAttribute("style","css"))}(r),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{"class-name":[r.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),r.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,r.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:r.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:r.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:r.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:r.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:r.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),r.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:r.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),r.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),r.languages.markup&&(r.languages.markup.tag.addInlined("script","javascript"),r.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),r.languages.js=r.languages.javascript,function(){if(typeof r>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading…",i=function(y,v){return"✖ Error "+y+" while fetching file: "+v},f="✖ Error: File does not exist or is empty",g={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},l="data-src-status",b="loading",E="loaded",S="failed",P="pre[data-src]:not(["+l+'="'+E+'"]):not(['+l+'="'+b+'"])';function I(y,v,x){var t=new XMLHttpRequest;t.open("GET",y,!0),t.onreadystatechange=function(){t.readyState==4&&(t.status<400&&t.responseText?v(t.responseText):t.status>=400?x(i(t.status,t.statusText)):x(f))},t.send(null)}function X(y){var v=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(v){var x=Number(v[1]),t=v[2],e=v[3];return t?e?[x,Number(e)]:[x,void 0]:[x,x]}}r.hooks.add("before-highlightall",function(y){y.selector+=", "+P}),r.hooks.add("before-sanity-check",function(y){var v=y.element;if(v.matches(P)){y.code="",v.setAttribute(l,b);var x=v.appendChild(document.createElement("CODE"));x.textContent=o;var t=v.getAttribute("data-src"),e=y.language;if(e==="none"){var n=(/\.(\w+)$/.exec(t)||[,"none"])[1];e=g[n]||n}r.util.setLanguage(x,e),r.util.setLanguage(v,e);var a=r.plugins.autoloader;a&&a.loadLanguages(e),I(t,function(s){v.setAttribute(l,E);var c=X(v.getAttribute("data-range"));if(c){var h=s.split(/\r\n?|\n/g),u=c[0],_=c[1]==null?h.length:c[1];u<0&&(u+=h.length),u=Math.max(0,Math.min(u-1,h.length)),_<0&&(_+=h.length),_=Math.max(0,Math.min(_,h.length)),s=h.slice(u,_).join(`
`),v.hasAttribute("data-start")||v.setAttribute("data-start",String(u+1))}x.textContent=s,r.highlightElement(x)},function(s){v.setAttribute(l,S),x.textContent=s})}}),r.plugins.fileHighlight={highlight:function(v){for(var x=(v||document).querySelectorAll(P),t=0,e;e=x[t++];)r.highlightElement(e)}};var z=!1;r.fileHighlight=function(){z||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),z=!0),r.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(xe);var Re=xe.exports;const pe=$e(Re);var je=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,ne=(p,d,r,o)=>{for(var i=o>1?void 0:o?Ve(d,r):d,f=p.length-1,g;f>=0;f--)(g=p[f])&&(i=(o?g(d,r,i):g(i))||i);return o&&i&&je(d,r,i),i};let Z=class extends R(re){constructor(){super(...arguments),this.cmp="",this.html="",this.getCode=async()=>{const{default:p}=await fe(Object.assign({"./components/doc-address.ts":()=>m(()=>import("./doc-address-F8FyTFy4.js"),__vite__mapDeps([])),"./components/doc-button.ts":()=>m(()=>import("./doc-button-mEkuyRH7.js"),__vite__mapDeps([])),"./components/doc-dialog.ts":()=>m(()=>import("./doc-dialog-irX8rddH.js"),__vite__mapDeps([])),"./components/doc-form.ts":()=>m(()=>import("./doc-form-6K5eur9S.js"),__vite__mapDeps([])),"./components/doc-image.ts":()=>m(()=>import("./doc-image-z4aWydhT.js"),__vite__mapDeps([])),"./components/doc-link.ts":()=>m(()=>import("./doc-link-2wxnSigi.js"),__vite__mapDeps([])),"./components/doc-loading.ts":()=>m(()=>import("./doc-loading-bqbdSMPk.js"),__vite__mapDeps([])),"./components/doc-menu.ts":()=>m(()=>import("./doc-menu-2sQjL1Kf.js"),__vite__mapDeps([])),"./components/doc-pagination.ts":()=>m(()=>import("./doc-pagination-sF3bcxOo.js"),__vite__mapDeps([])),"./components/doc-progress.ts":()=>m(()=>import("./doc-progress-GuiJ0Ktb.js"),__vite__mapDeps([])),"./components/doc-switch.ts":()=>m(()=>import("./doc-switch-NdwJFXFb.js"),__vite__mapDeps([])),"./components/doc-text.ts":()=>m(()=>import("./doc-text-YZFXrxBl.js"),__vite__mapDeps([])),"./components/doc-tip.ts":()=>m(()=>import("./doc-tip-jeFsLryG.js"),__vite__mapDeps([]))}),`./components/doc-${this.cmp}.ts`);this.html=pe.highlight(p,pe.languages.javascript,"javascript")}}connectedCallback(){super.connectedCallback(),this.getCode()}render(){return this.html?q`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs/themes/prism.min.css"><pre class="doc-code language-ts w-full h-96 !text-xs">${K(this.html)}</pre>`:""}};ne([_e()],Z.prototype,"cmp",2);ne([B()],Z.prototype,"html",2);Z=ne([j("doc-code")],Z);const ze=".doc-intro:not(:first-of-type){margin-top:.5rem;margin-bottom:.5rem;border-top-width:1px;border-style:dashed;--tw-border-opacity: 1;border-color:#374151;border-color:rgba(55,65,81,var(--tw-border-opacity));padding-top:.25rem}.doc-intro.active h6:before{font-size:1.25rem;line-height:1.75rem}.doc-intro h6{margin-bottom:.5rem;display:flex;height:1.5rem;width:100%;align-items:center;line-height:1.5rem}.doc-intro h6:before{content:attr(name);margin-right:1rem;font-weight:700;text-transform:capitalize;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}";var Me=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,W=(p,d,r,o)=>{for(var i=o>1?void 0:o?Ue(d,r):d,f=p.length-1,g;f>=0;f--)(g=p[f])&&(i=(o?g(d,r,i):g(i))||i);return o&&i&&Me(d,r,i),i};let L=class extends R(ze){constructor(){super(...arguments),this.class="",this.pathname=ue(),this.currentCode="",this.updatePathName=()=>{this.pathname=ue()}}get anchor(){return this.pathname.replace(/^\/docs\//,"")}render(){return q`<div class="border p-4 rounded-md border-gray-600 ${this.class}">${me(te,(p,d)=>q`<div class="doc-intro ${Pe({active:this.anchor===C[d]})}"><h6 name="${C[d]}"><ui-tip @close="${()=>this.currentCode=""}" @click="${()=>this.currentCode=C[d]}"><i slot="icon" class="text-gray-500 text-base mdi mdi-xml cursor-pointer"></i>${ve(this.currentCode===C[d],()=>q`<doc-code .cmp="${C[d]}"></doc-code>`)}</ui-tip></h6><${K(p)}></${K(p)}></div>`)}</div>`}connectedCallback(){super.connectedCallback(),Oe(),he.on("router-change",this.updatePathName)}};W([_e({type:String})],L.prototype,"class",2);W([B()],L.prototype,"pathname",2);W([B()],L.prototype,"currentCode",2);L=W([j("ui-components")],L);const He=Object.freeze(Object.defineProperty({__proto__:null,get UIComponents(){return L}},Symbol.toStringTag,{value:"Module"}));var Ge=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,Ze=(p,d,r,o)=>{for(var i=o>1?void 0:o?qe(d,r):d,f=p.length-1,g;f>=0;f--)(g=p[f])&&(i=(o?g(d,r,i):g(i))||i);return o&&i&&Ge(d,r,i),i};let ge=class extends R(re){render(){return T`<div class="flex gap-4"><ui-docs-nav class="w-48"></ui-docs-nav><ui-components class="flex-grow"></ui-components></div>`}};ge=Ze([j("ui-docs")],ge);var Be=Object.defineProperty,We=Object.getOwnPropertyDescriptor,Xe=(p,d,r,o)=>{for(var i=o>1?void 0:o?We(d,r):d,f=p.length-1,g;f>=0;f--)(g=p[f])&&(i=(o?g(d,r,i):g(i))||i);return o&&i&&Be(d,r,i),i};let ee=class extends R(""){render(){return T`<div class="ui-container"><ui-docs></ui-docs></div>`}};ee=Xe([j("view-docs")],ee);const Ke=Object.freeze(Object.defineProperty({__proto__:null,get ViewDocs(){return ee}},Symbol.toStringTag,{value:"Module"}));export{Ke as a,K as i,q as n};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/doc-address-xWrgEOKu.js","assets/index-cmBhvwLn.js","assets/vendor-0vo4Ah28.js","assets/index-KZQ6x1uu.css","assets/doc-button-kLpCA9aB.js","assets/doc-dialog-QGhoHYK-.js","assets/doc-form-9dgdI0S-.js","assets/doc-image-rA6vvZW-.js","assets/doc-link-qc61efA8.js","assets/doc-loading-purXvxxZ.js","assets/icon-mIDwM8EI.js","assets/doc-menu-ESsR-0kj.js","assets/doc-pagination-TokAFS4V.js","assets/doc-progress-kU_8324V.js","assets/doc-switch-yRWpzpCC.js","assets/doc-text-72HRlM26.js","assets/doc-tip-tIyTfYBP.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}