const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.55f5Xioi.js","../chunks/disclose-version.Bg9kRutz.js","../chunks/runtime.CkZ10TKx.js","../chunks/index.BFqC5wTN.js","../chunks/template.BsQ56n95.js","../chunks/attributes.COvB-EjU.js","../chunks/legacy.CtaTdtmd.js","../chunks/entry.AS1_nQLG.js","../chunks/paths.DDShqHkg.js","../chunks/index-client.DTbjmbw2.js","../assets/0.Bs90br9P.css","../nodes/1.CVm4eczo.js","../chunks/render.DSSPWdWO.js","../chunks/svelte-head.DdHCPlh0.js","../nodes/2.vITOLUpy.js","../chunks/hyperplane.BHphYtDW.js","../chunks/quantum-chip.CbPi-Wm6.js","../assets/2.CVJrg9eV.css","../nodes/3.vE55p10f.js","../chunks/index.DZxWhJFb.js","../nodes/4.hP5jyJGV.js","../chunks/graphnetwork.PkMY6-Xw.js","../nodes/5.DGaoGkzw.js","../nodes/6.DddYYAAS.js","../nodes/7.BwE4HLu5.js","../nodes/8.B15KFNS1.js","../nodes/9.Co1kz-sX.js","../assets/9.CHCkF1dl.css","../nodes/10.BOLubzt1.js","../nodes/11.p6YdkPYU.js","../nodes/12.bU2fnh_I.js","../nodes/13.B7D0PLqI.js","../nodes/14.m6utWqrK.js","../assets/14.Cs9X4M7E.css","../nodes/15.ByUJ1Fx0.js","../assets/15.tn0RQdqM.css","../nodes/16.IIgKw2I4.js","../nodes/17.DQGzRxXE.js","../assets/17.BoDWe5Zb.css","../nodes/18.BraLLjWR.js","../nodes/19.Byc-4wM0.js","../assets/19.D7Y70j6R.css","../nodes/20.BJjIg8fh.js","../nodes/21.BJlM97ts.js","../nodes/22.CX8kSvOv.js","../nodes/23.BkRNxWVr.js"])))=>i.map(i=>d[i]);
var re=t=>{throw TypeError(t)};var ae=(t,e,n)=>e.has(t)||re("Cannot "+n);var y=(t,e,n)=>(ae(t,e,"read from private field"),n?n.call(t):e.get(t)),G=(t,e,n)=>e.has(t)?re("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),H=(t,e,n,c)=>(ae(t,e,"write to private field"),c?c.call(t,n):e.set(t,n),n);import{_ as k,a0 as ge,a1 as Pe,a2 as S,a3 as be,a4 as I,a5 as M,a6 as O,R as P,m as X,a7 as Re,g as ye,v as Oe,h as j,p as _e,b as ce,X as de,a8 as Ie,a9 as Ae,f as Te,s as ie,aa as ne,G as $,ab as ee,i as me,ac as Le,ad as De,l as te,ae as we,af as Ve,ag as Se,ah as xe,ai as pe,aj as Ne,ak as qe,t as se,al as Ce,am as ke,an as je,ao as ve,V as B,ap as Be,aq as he,ar as Fe,as as Ue,q as Ye,I as Me,P as Ge,u as He,at as Ke,K as U,M as We,J as Ze,au as K,N as ze,O as Je,W as Qe}from"../chunks/runtime.CkZ10TKx.js";import{h as Xe,m as $e,u as et,s as tt}from"../chunks/render.DSSPWdWO.js";import"../chunks/disclose-version.Bg9kRutz.js";import{a as N,t as Ee,d as W,b as rt}from"../chunks/template.BsQ56n95.js";import{l as at}from"../chunks/index.BFqC5wTN.js";import{o as it}from"../chunks/index-client.DTbjmbw2.js";function x(t,e=null,n){if(typeof t!="object"||t===null||k in t)return t;const c=ye(t);if(c!==ge&&c!==Pe)return t;var a=new Map,l=Oe(t),o=S(0);l&&a.set("length",S(t.length));var s;return new Proxy(t,{defineProperty(f,r,i){(!("value"in i)||i.configurable===!1||i.enumerable===!1||i.writable===!1)&&be();var _=a.get(r);return _===void 0?(_=S(i.value),a.set(r,_)):I(_,x(i.value,s)),!0},deleteProperty(f,r){var i=a.get(r);if(i===void 0)r in f&&a.set(r,S(O));else{if(l&&typeof r=="string"){var _=a.get("length"),u=Number(r);Number.isInteger(u)&&u<_.v&&I(_,u)}I(i,O),oe(o)}return!0},get(f,r,i){var h;if(r===k)return t;var _=a.get(r),u=r in f;if(_===void 0&&(!u||(h=M(f,r))!=null&&h.writable)&&(_=S(x(u?f[r]:O,s)),a.set(r,_)),_!==void 0){var d=P(_);return d===O?void 0:d}return Reflect.get(f,r,i)},getOwnPropertyDescriptor(f,r){var i=Reflect.getOwnPropertyDescriptor(f,r);if(i&&"value"in i){var _=a.get(r);_&&(i.value=P(_))}else if(i===void 0){var u=a.get(r),d=u==null?void 0:u.v;if(u!==void 0&&d!==O)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return i},has(f,r){var d;if(r===k)return!0;var i=a.get(r),_=i!==void 0&&i.v!==O||Reflect.has(f,r);if(i!==void 0||X!==null&&(!_||(d=M(f,r))!=null&&d.writable)){i===void 0&&(i=S(_?x(f[r],s):O),a.set(r,i));var u=P(i);if(u===O)return!1}return _},set(f,r,i,_){var R;var u=a.get(r),d=r in f;if(l&&r==="length")for(var h=i;h<u.v;h+=1){var m=a.get(h+"");m!==void 0?I(m,O):h in f&&(m=S(O),a.set(h+"",m))}u===void 0?(!d||(R=M(f,r))!=null&&R.writable)&&(u=S(void 0),I(u,x(i,s)),a.set(r,u)):(d=u.v!==O,I(u,x(i,s)));var E=Reflect.getOwnPropertyDescriptor(f,r);if(E!=null&&E.set&&E.set.call(_,i),!d){if(l&&typeof r=="string"){var T=a.get("length"),L=Number(r);Number.isInteger(L)&&L>=T.v&&I(T,L+1)}oe(o)}return!0},ownKeys(f){P(o);var r=Reflect.ownKeys(f).filter(u=>{var d=a.get(u);return d===void 0||d.v!==O});for(var[i,_]of a)_.v!==O&&!(i in f)&&r.push(i);return r},setPrototypeOf(){Re()}})}function oe(t,e=1){I(t,t.v+e)}function Z(t,e,n=!1){j&&_e();var c=t,a=null,l=null,o=O,s=n?de:0,f=!1;const r=(_,u=!0)=>{f=!0,i(u,_)},i=(_,u)=>{if(o===(o=_))return;let d=!1;if(j){const h=c.data===Ie;!!o===h&&(c=Ae(),Te(c),ie(!1),d=!0)}o?(a?ne(a):u&&(a=$(()=>u(c))),l&&ee(l,()=>{l=null})):(l?ne(l):u&&(l=$(()=>u(c))),a&&ee(a,()=>{a=null})),d&&ie(!0)};ce(()=>{f=!1,e(r),f||i(null,null)},s),j&&(c=me)}function z(t,e,n){j&&_e();var c=t,a,l;ce(()=>{a!==(a=e())&&(l&&(ee(l),l=null),a&&(l=$(()=>n(c,a))))},de),j&&(c=me)}function ue(t,e){return t===e||(t==null?void 0:t[k])===e}function J(t={},e,n,c){return Le(()=>{var a,l;return De(()=>{a=l,l=[],te(()=>{t!==n(...l)&&(e(t,...l),a&&ue(n(...a),t)&&e(null,...a))})}),()=>{we(()=>{l&&ue(n(...l),t)&&e(null,...l)})}}),t}let Y=!1;function nt(t){var e=Y;try{return Y=!1,[t(),Y]}finally{Y=e}}function fe(t){for(var e=X,n=X;e!==null&&!(e.f&(Ne|qe));)e=e.parent;try{return se(e),t()}finally{se(n)}}function Q(t,e,n,c){var q;var a=(n&Ce)!==0,l=!at||(n&ke)!==0,o=(n&je)!==0,s=(n&Fe)!==0,f=!1,r;o?[r,f]=nt(()=>t[e]):r=t[e];var i=k in t||ve in t,_=((q=M(t,e))==null?void 0:q.set)??(i&&o&&e in t?g=>t[e]=g:void 0),u=c,d=!0,h=!1,m=()=>(h=!0,d&&(d=!1,s?u=te(c):u=c),u);r===void 0&&c!==void 0&&(_&&l&&Ve(),r=m(),_&&_(r));var E;if(l)E=()=>{var g=t[e];return g===void 0?m():(d=!0,h=!1,g)};else{var T=fe(()=>(a?B:Be)(()=>t[e]));T.f|=Se,E=()=>{var g=P(T);return g!==void 0&&(u=void 0),g===void 0?u:g}}if(!(n&xe))return E;if(_){var L=t.$$legacy;return function(g,V){return arguments.length>0?((!l||!V||L||f)&&_(V?E():g),g):E()}}var R=!1,D=!1,b=he(r),p=fe(()=>B(()=>{var g=E(),V=P(b);return R?(R=!1,D=!0,V):(D=!1,b.v=g)}));return a||(p.equals=pe),function(g,V){if(arguments.length>0){const C=V?P(p):l&&o?x(g):g;return p.equals(C)||(R=!0,I(b,C),h&&u!==void 0&&(u=C),te(()=>P(p))),g}return P(p)}}function st(t){return class extends ot{constructor(e){super({component:t,...e})}}}var w,A;class ot{constructor(e){G(this,w);G(this,A);var l;var n=new Map,c=(o,s)=>{var f=he(s);return n.set(o,f),f};const a=new Proxy({...e.props||{},$$events:{}},{get(o,s){return P(n.get(s)??c(s,Reflect.get(o,s)))},has(o,s){return s===ve?!0:(P(n.get(s)??c(s,Reflect.get(o,s))),Reflect.has(o,s))},set(o,s,f){return I(n.get(s)??c(s,f),f),Reflect.set(o,s,f)}});H(this,A,(e.hydrate?Xe:$e)(e.component,{target:e.target,anchor:e.anchor,props:a,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((l=e==null?void 0:e.props)!=null&&l.$$host)||e.sync===!1)&&Ue(),H(this,w,a.$$events);for(const o of Object.keys(y(this,A)))o==="$set"||o==="$destroy"||o==="$on"||Ye(this,o,{get(){return y(this,A)[o]},set(s){y(this,A)[o]=s},enumerable:!0});y(this,A).$set=o=>{Object.assign(a,o)},y(this,A).$destroy=()=>{et(y(this,A))}}$set(e){y(this,A).$set(e)}$on(e,n){y(this,w)[e]=y(this,w)[e]||[];const c=(...a)=>n.call(this,...a);return y(this,w)[e].push(c),()=>{y(this,w)[e]=y(this,w)[e].filter(a=>a!==c)}}$destroy(){y(this,A).$destroy()}}w=new WeakMap,A=new WeakMap;const ut="modulepreload",ft=function(t,e){return new URL(t,e).href},le={},v=function(e,n,c){let a=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),f=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=Promise.allSettled(n.map(r=>{if(r=ft(r,c),r in le)return;le[r]=!0;const i=r.endsWith(".css"),_=i?'[rel="stylesheet"]':"";if(!!c)for(let h=o.length-1;h>=0;h--){const m=o[h];if(m.href===r&&(!i||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${_}`))return;const d=document.createElement("link");if(d.rel=i?"stylesheet":ut,i||(d.as="script"),d.crossOrigin="",d.href=r,f&&d.setAttribute("nonce",f),document.head.appendChild(d),i)return new Promise((h,m)=>{d.addEventListener("load",h),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${r}`)))})}))}function l(o){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o}return a.then(o=>{for(const s of o||[])s.status==="rejected"&&l(s.reason);return e().catch(l)})},yt={};var lt=Ee('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),_t=Ee("<!> <!>",1);function ct(t,e){Me(e,!0);let n=Q(e,"components",23,()=>[]),c=Q(e,"data_0",3,null),a=Q(e,"data_1",3,null);Ge(()=>e.stores.page.set(e.page)),He(()=>{e.stores,e.page,e.constructors,n(),e.form,c(),a(),e.stores.page.notify()});let l=K(!1),o=K(!1),s=K(null);it(()=>{const m=e.stores.page.subscribe(()=>{P(l)&&(I(o,!0),Ke().then(()=>{I(s,x(document.title||"untitled page"))}))});return I(l,!0),m});const f=B(()=>e.constructors[1]);var r=_t(),i=U(r);{var _=m=>{var E=W();const T=B(()=>e.constructors[0]);var L=U(E);z(L,()=>P(T),(R,D)=>{J(D(R,{get data(){return c()},get form(){return e.form},children:(b,p)=>{var q=W(),g=U(q);z(g,()=>P(f),(V,C)=>{J(C(V,{get data(){return a()},get form(){return e.form}}),F=>n()[1]=F,()=>{var F;return(F=n())==null?void 0:F[1]})}),N(b,q)},$$slots:{default:!0}}),b=>n()[0]=b,()=>{var b;return(b=n())==null?void 0:b[0]})}),N(m,E)},u=m=>{var E=W();const T=B(()=>e.constructors[0]);var L=U(E);z(L,()=>P(T),(R,D)=>{J(D(R,{get data(){return c()},get form(){return e.form}}),b=>n()[0]=b,()=>{var b;return(b=n())==null?void 0:b[0]})}),N(m,E)};Z(i,m=>{e.constructors[1]?m(_):m(u,!1)})}var d=We(i,2);{var h=m=>{var E=lt(),T=ze(E);{var L=R=>{var D=rt();Qe(()=>tt(D,P(s))),N(R,D)};Z(T,R=>{P(o)&&R(L)})}Je(E),N(m,E)};Z(d,m=>{P(l)&&m(h)})}N(t,r),Ze()}const Ot=st(ct),It=[()=>v(()=>import("../nodes/0.55f5Xioi.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url),()=>v(()=>import("../nodes/1.CVm4eczo.js"),__vite__mapDeps([11,1,6,3,2,12,13,4,7,8,9]),import.meta.url),()=>v(()=>import("../nodes/2.vITOLUpy.js"),__vite__mapDeps([14,1,6,3,2,13,4,5,8,15,16,17]),import.meta.url),()=>v(()=>import("../nodes/3.vE55p10f.js"),__vite__mapDeps([18,19,2,3,1,6,13,4]),import.meta.url),()=>v(()=>import("../nodes/4.hP5jyJGV.js"),__vite__mapDeps([20,1,6,3,2,13,4,5,8,21]),import.meta.url),()=>v(()=>import("../nodes/5.DGaoGkzw.js"),__vite__mapDeps([22,1,6,3,2,13,4]),import.meta.url),()=>v(()=>import("../nodes/6.DddYYAAS.js"),__vite__mapDeps([23,1,6,3,2,13,4]),import.meta.url),()=>v(()=>import("../nodes/7.BwE4HLu5.js"),__vite__mapDeps([24,1,6,3,2,13,4,8]),import.meta.url),()=>v(()=>import("../nodes/8.B15KFNS1.js"),__vite__mapDeps([25,1,6,3,2,13,4,8]),import.meta.url),()=>v(()=>import("../nodes/9.Co1kz-sX.js"),__vite__mapDeps([26,1,6,3,2,13,4,8,27]),import.meta.url),()=>v(()=>import("../nodes/10.BOLubzt1.js"),__vite__mapDeps([28,1,6,3,2,13,4]),import.meta.url),()=>v(()=>import("../nodes/11.p6YdkPYU.js"),__vite__mapDeps([29,1,6,3,2,13,4]),import.meta.url),()=>v(()=>import("../nodes/12.bU2fnh_I.js"),__vite__mapDeps([30,19,2,3,1,6,13,4]),import.meta.url),()=>v(()=>import("../nodes/13.B7D0PLqI.js"),__vite__mapDeps([31,19,2,3,1,6,13,4]),import.meta.url),()=>v(()=>import("../nodes/14.m6utWqrK.js"),__vite__mapDeps([32,19,2,3,1,6,13,4,5,33]),import.meta.url),()=>v(()=>import("../nodes/15.ByUJ1Fx0.js"),__vite__mapDeps([34,1,6,3,8,35]),import.meta.url),()=>v(()=>import("../nodes/16.IIgKw2I4.js"),__vite__mapDeps([36,19,2,3,1,6,13,4,5,8,16]),import.meta.url),()=>v(()=>import("../nodes/17.DQGzRxXE.js"),__vite__mapDeps([37,1,6,3,2,13,4,5,38]),import.meta.url),()=>v(()=>import("../nodes/18.BraLLjWR.js"),__vite__mapDeps([39,19,2,3,1,6,4]),import.meta.url),()=>v(()=>import("../nodes/19.Byc-4wM0.js"),__vite__mapDeps([40,19,2,3,1,6,13,4,41]),import.meta.url),()=>v(()=>import("../nodes/20.BJjIg8fh.js"),__vite__mapDeps([42,19,2,3,1,6,13,4,5,8,15,21,35]),import.meta.url),()=>v(()=>import("../nodes/21.BJlM97ts.js"),__vite__mapDeps([43,19,2,3,1,6,13,4,5]),import.meta.url),()=>v(()=>import("../nodes/22.CX8kSvOv.js"),__vite__mapDeps([44,19,2,3,1,6,4]),import.meta.url),()=>v(()=>import("../nodes/23.BkRNxWVr.js"),__vite__mapDeps([45,1,6,3]),import.meta.url)],At=[],Tt={"/":[2],"/HARP":[16],"/QADR":[20],"/about":[3],"/algopilot":[4],"/blog":[5],"/blog/articles/ai-finance":[6],"/blog/articles/ai-islamic-finance":[7],"/blog/articles/quantum-islamic-finance":[8],"/blog/articles/quantum-ml-finance":[9],"/blog/articles/web3-general":[10],"/blog/articles/web3-islamic-finance":[11],"/codex":[12],"/company":[13],"/contact":[14],"/demo":[15],"/helpcenter":[17],"/impressum":[18],"/products":[19],"/research":[21],"/risk-disclaimer":[22],"/roadmap":[23]},dt={handleError:({error:t})=>{console.error(t)},reroute:()=>{},transport:{}},mt=Object.fromEntries(Object.entries(dt.transport).map(([t,e])=>[t,e.decode])),Lt=!1,Dt=(t,e)=>mt[t](e);export{Dt as decode,mt as decoders,Tt as dictionary,Lt as hash,dt as hooks,yt as matchers,It as nodes,Ot as root,At as server_loads};
