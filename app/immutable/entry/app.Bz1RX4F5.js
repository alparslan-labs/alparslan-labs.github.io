const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.D-mbmQae.js","../chunks/disclose-version.Bg9kRutz.js","../chunks/runtime.DxYSeDj_.js","../chunks/index.BFqC5wTN.js","../chunks/template.Bt2SUrO2.js","../chunks/attributes.DrFL_0gW.js","../chunks/legacy.CtaTdtmd.js","../chunks/entry.B0l7-rJu.js","../chunks/paths.DuEvEFoe.js","../chunks/index-client.-S7f-HZl.js","../assets/0.f4kO-vmO.css","../nodes/1.C0Q2X1Ff.js","../chunks/render.DqKnQWcm.js","../chunks/svelte-head.DQ_PoM8M.js","../nodes/2.Dbqdd0MK.js","../chunks/hyperplane.BHphYtDW.js","../assets/2.kZcNiX_N.css","../nodes/3.zPd6g9Ky.js","../chunks/index.B7it46T_.js","../nodes/4.COQ7ZJl8.js","../chunks/graphnetwork.PkMY6-Xw.js","../nodes/5.DVyZCRuW.js","../nodes/6.BRcZ1oia.js","../nodes/7.Dfwgx7bN.js","../nodes/8.COSNhA2W.js","../assets/8.Do-RDGcJ.css","../nodes/9.C7V5KDzk.js","../nodes/10.B6pKJcDr.js","../assets/10.BoDWe5Zb.css","../nodes/11.DZ0dlqx2.js","../nodes/12.Aa19J_i5.js","../assets/12.D7Y70j6R.css","../nodes/13.BINFpYO1.js","../assets/13.tn0RQdqM.css","../nodes/14.CBJTftJX.js","../nodes/15.CxZMlvSv.js","../nodes/16.BkRNxWVr.js"])))=>i.map(i=>d[i]);
var re=t=>{throw TypeError(t)};var ae=(t,e,s)=>e.has(t)||re("Cannot "+s);var b=(t,e,s)=>(ae(t,e,"read from private field"),s?s.call(t):e.get(t)),K=(t,e,s)=>e.has(t)?re("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),M=(t,e,s,c)=>(ae(t,e,"write to private field"),c?c.call(t,s):e.set(t,s),s);import{_ as j,a0 as Ee,a1 as ye,a2 as V,a3 as Pe,a4 as I,a5 as H,a6 as O,N as E,m as X,a7 as Re,g as be,v as Oe,h as B,p as _e,b as ce,X as de,a8 as Ie,a9 as Ae,f as Te,s as ne,aa as se,G as $,ab as ee,i as ve,ac as we,ad as Le,l as te,ae as De,af as Se,ag as Ve,ah as xe,ai as Ne,aj as Ce,ak as ke,t as ie,al as qe,am as je,an as Be,ao as me,Q as U,ap as Ue,aq as he,ar as Fe,as as Ye,q as Ge,I as He,K as Ke,u as Me,at as Qe,R as Y,U as We,J as Ze,au as Q,V as pe,W as ze,S as Je}from"../chunks/runtime.DxYSeDj_.js";import{h as Xe,m as $e,u as et,s as tt}from"../chunks/render.DqKnQWcm.js";import"../chunks/disclose-version.Bg9kRutz.js";import{a as C,t as ge,d as W,b as rt}from"../chunks/template.Bt2SUrO2.js";import{l as at}from"../chunks/index.BFqC5wTN.js";import{o as nt}from"../chunks/index-client.-S7f-HZl.js";function x(t,e=null,s){if(typeof t!="object"||t===null||j in t)return t;const c=be(t);if(c!==Ee&&c!==ye)return t;var a=new Map,l=Oe(t),f=V(0);l&&a.set("length",V(t.length));var i;return new Proxy(t,{defineProperty(o,r,n){(!("value"in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&Pe();var _=a.get(r);return _===void 0?(_=V(n.value),a.set(r,_)):I(_,x(n.value,i)),!0},deleteProperty(o,r){var n=a.get(r);if(n===void 0)r in o&&a.set(r,V(O));else{if(l&&typeof r=="string"){var _=a.get("length"),u=Number(r);Number.isInteger(u)&&u<_.v&&I(_,u)}I(n,O),fe(f)}return!0},get(o,r,n){var m;if(r===j)return t;var _=a.get(r),u=r in o;if(_===void 0&&(!u||(m=H(o,r))!=null&&m.writable)&&(_=V(x(u?o[r]:O,i)),a.set(r,_)),_!==void 0){var d=E(_);return d===O?void 0:d}return Reflect.get(o,r,n)},getOwnPropertyDescriptor(o,r){var n=Reflect.getOwnPropertyDescriptor(o,r);if(n&&"value"in n){var _=a.get(r);_&&(n.value=E(_))}else if(n===void 0){var u=a.get(r),d=u==null?void 0:u.v;if(u!==void 0&&d!==O)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return n},has(o,r){var d;if(r===j)return!0;var n=a.get(r),_=n!==void 0&&n.v!==O||Reflect.has(o,r);if(n!==void 0||X!==null&&(!_||(d=H(o,r))!=null&&d.writable)){n===void 0&&(n=V(_?x(o[r],i):O),a.set(r,n));var u=E(n);if(u===O)return!1}return _},set(o,r,n,_){var R;var u=a.get(r),d=r in o;if(l&&r==="length")for(var m=n;m<u.v;m+=1){var v=a.get(m+"");v!==void 0?I(v,O):m in o&&(v=V(O),a.set(m+"",v))}u===void 0?(!d||(R=H(o,r))!=null&&R.writable)&&(u=V(void 0),I(u,x(n,i)),a.set(r,u)):(d=u.v!==O,I(u,x(n,i)));var h=Reflect.getOwnPropertyDescriptor(o,r);if(h!=null&&h.set&&h.set.call(_,n),!d){if(l&&typeof r=="string"){var T=a.get("length"),w=Number(r);Number.isInteger(w)&&w>=T.v&&I(T,w+1)}fe(f)}return!0},ownKeys(o){E(f);var r=Reflect.ownKeys(o).filter(u=>{var d=a.get(u);return d===void 0||d.v!==O});for(var[n,_]of a)_.v!==O&&!(n in o)&&r.push(n);return r},setPrototypeOf(){Re()}})}function fe(t,e=1){I(t,t.v+e)}function Z(t,e,s=!1){B&&_e();var c=t,a=null,l=null,f=O,i=s?de:0,o=!1;const r=(_,u=!0)=>{o=!0,n(u,_)},n=(_,u)=>{if(f===(f=_))return;let d=!1;if(B){const m=c.data===Ie;!!f===m&&(c=Ae(),Te(c),ne(!1),d=!0)}f?(a?se(a):u&&(a=$(()=>u(c))),l&&ee(l,()=>{l=null})):(l?se(l):u&&(l=$(()=>u(c))),a&&ee(a,()=>{a=null})),d&&ne(!0)};ce(()=>{o=!1,e(r),o||n(null,null)},i),B&&(c=ve)}function p(t,e,s){B&&_e();var c=t,a,l;ce(()=>{a!==(a=e())&&(l&&(ee(l),l=null),a&&(l=$(()=>s(c,a))))},de),B&&(c=ve)}function ue(t,e){return t===e||(t==null?void 0:t[j])===e}function z(t={},e,s,c){return we(()=>{var a,l;return Le(()=>{a=l,l=[],te(()=>{t!==s(...l)&&(e(t,...l),a&&ue(s(...a),t)&&e(null,...a))})}),()=>{De(()=>{l&&ue(s(...l),t)&&e(null,...l)})}}),t}let G=!1;function st(t){var e=G;try{return G=!1,[t(),G]}finally{G=e}}function oe(t){for(var e=X,s=X;e!==null&&!(e.f&(Ce|ke));)e=e.parent;try{return ie(e),t()}finally{ie(s)}}function J(t,e,s,c){var k;var a=(s&qe)!==0,l=!at||(s&je)!==0,f=(s&Be)!==0,i=(s&Fe)!==0,o=!1,r;f?[r,o]=st(()=>t[e]):r=t[e];var n=j in t||me in t,_=((k=H(t,e))==null?void 0:k.set)??(n&&f&&e in t?g=>t[e]=g:void 0),u=c,d=!0,m=!1,v=()=>(m=!0,d&&(d=!1,i?u=te(c):u=c),u);r===void 0&&c!==void 0&&(_&&l&&Se(),r=v(),_&&_(r));var h;if(l)h=()=>{var g=t[e];return g===void 0?v():(d=!0,m=!1,g)};else{var T=oe(()=>(a?U:Ue)(()=>t[e]));T.f|=Ve,h=()=>{var g=E(T);return g!==void 0&&(u=void 0),g===void 0?u:g}}if(!(s&xe))return h;if(_){var w=t.$$legacy;return function(g,S){return arguments.length>0?((!l||!S||w||o)&&_(S?h():g),g):h()}}var R=!1,L=!1,P=he(r),N=oe(()=>U(()=>{var g=h(),S=E(P);return R?(R=!1,L=!0,S):(L=!1,P.v=g)}));return a||(N.equals=Ne),function(g,S){if(arguments.length>0){const q=S?E(N):l&&f?x(g):g;return N.equals(q)||(R=!0,I(P,q),m&&u!==void 0&&(u=q),te(()=>E(N))),g}return E(N)}}function it(t){return class extends ft{constructor(e){super({component:t,...e})}}}var D,A;class ft{constructor(e){K(this,D);K(this,A);var l;var s=new Map,c=(f,i)=>{var o=he(i);return s.set(f,o),o};const a=new Proxy({...e.props||{},$$events:{}},{get(f,i){return E(s.get(i)??c(i,Reflect.get(f,i)))},has(f,i){return i===me?!0:(E(s.get(i)??c(i,Reflect.get(f,i))),Reflect.has(f,i))},set(f,i,o){return I(s.get(i)??c(i,o),o),Reflect.set(f,i,o)}});M(this,A,(e.hydrate?Xe:$e)(e.component,{target:e.target,anchor:e.anchor,props:a,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((l=e==null?void 0:e.props)!=null&&l.$$host)||e.sync===!1)&&Ye(),M(this,D,a.$$events);for(const f of Object.keys(b(this,A)))f==="$set"||f==="$destroy"||f==="$on"||Ge(this,f,{get(){return b(this,A)[f]},set(i){b(this,A)[f]=i},enumerable:!0});b(this,A).$set=f=>{Object.assign(a,f)},b(this,A).$destroy=()=>{et(b(this,A))}}$set(e){b(this,A).$set(e)}$on(e,s){b(this,D)[e]=b(this,D)[e]||[];const c=(...a)=>s.call(this,...a);return b(this,D)[e].push(c),()=>{b(this,D)[e]=b(this,D)[e].filter(a=>a!==c)}}$destroy(){b(this,A).$destroy()}}D=new WeakMap,A=new WeakMap;const ut="modulepreload",ot=function(t,e){return new URL(t,e).href},le={},y=function(e,s,c){let a=Promise.resolve();if(s&&s.length>0){const f=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));a=Promise.allSettled(s.map(r=>{if(r=ot(r,c),r in le)return;le[r]=!0;const n=r.endsWith(".css"),_=n?'[rel="stylesheet"]':"";if(!!c)for(let m=f.length-1;m>=0;m--){const v=f[m];if(v.href===r&&(!n||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${_}`))return;const d=document.createElement("link");if(d.rel=n?"stylesheet":ut,n||(d.as="script"),d.crossOrigin="",d.href=r,o&&d.setAttribute("nonce",o),document.head.appendChild(d),n)return new Promise((m,v)=>{d.addEventListener("load",m),d.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${r}`)))})}))}function l(f){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=f,window.dispatchEvent(i),!i.defaultPrevented)throw f}return a.then(f=>{for(const i of f||[])i.status==="rejected"&&l(i.reason);return e().catch(l)})},bt={};var lt=ge('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),_t=ge("<!> <!>",1);function ct(t,e){He(e,!0);let s=J(e,"components",23,()=>[]),c=J(e,"data_0",3,null),a=J(e,"data_1",3,null);Ke(()=>e.stores.page.set(e.page)),Me(()=>{e.stores,e.page,e.constructors,s(),e.form,c(),a(),e.stores.page.notify()});let l=Q(!1),f=Q(!1),i=Q(null);nt(()=>{const v=e.stores.page.subscribe(()=>{E(l)&&(I(f,!0),Qe().then(()=>{I(i,x(document.title||"untitled page"))}))});return I(l,!0),v});const o=U(()=>e.constructors[1]);var r=_t(),n=Y(r);{var _=v=>{var h=W();const T=U(()=>e.constructors[0]);var w=Y(h);p(w,()=>E(T),(R,L)=>{z(L(R,{get data(){return c()},get form(){return e.form},children:(P,N)=>{var k=W(),g=Y(k);p(g,()=>E(o),(S,q)=>{z(q(S,{get data(){return a()},get form(){return e.form}}),F=>s()[1]=F,()=>{var F;return(F=s())==null?void 0:F[1]})}),C(P,k)},$$slots:{default:!0}}),P=>s()[0]=P,()=>{var P;return(P=s())==null?void 0:P[0]})}),C(v,h)},u=v=>{var h=W();const T=U(()=>e.constructors[0]);var w=Y(h);p(w,()=>E(T),(R,L)=>{z(L(R,{get data(){return c()},get form(){return e.form}}),P=>s()[0]=P,()=>{var P;return(P=s())==null?void 0:P[0]})}),C(v,h)};Z(n,v=>{e.constructors[1]?v(_):v(u,!1)})}var d=We(n,2);{var m=v=>{var h=lt(),T=pe(h);{var w=R=>{var L=rt();Je(()=>tt(L,E(i))),C(R,L)};Z(T,R=>{E(f)&&R(w)})}ze(h),C(v,h)};Z(d,v=>{E(l)&&v(m)})}C(t,r),Ze()}const Ot=it(ct),It=[()=>y(()=>import("../nodes/0.D-mbmQae.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url),()=>y(()=>import("../nodes/1.C0Q2X1Ff.js"),__vite__mapDeps([11,1,6,3,2,12,13,4,7,8,9]),import.meta.url),()=>y(()=>import("../nodes/2.Dbqdd0MK.js"),__vite__mapDeps([14,1,6,3,2,13,4,5,8,15,16]),import.meta.url),()=>y(()=>import("../nodes/3.zPd6g9Ky.js"),__vite__mapDeps([17,18,2,3,1,6,13,4]),import.meta.url),()=>y(()=>import("../nodes/4.COQ7ZJl8.js"),__vite__mapDeps([19,1,6,3,2,13,4,5,8,20]),import.meta.url),()=>y(()=>import("../nodes/5.DVyZCRuW.js"),__vite__mapDeps([21,1,6,3,2,13,4]),import.meta.url),()=>y(()=>import("../nodes/6.BRcZ1oia.js"),__vite__mapDeps([22,18,2,3,1,6,13,4]),import.meta.url),()=>y(()=>import("../nodes/7.Dfwgx7bN.js"),__vite__mapDeps([23,18,2,3,1,6,13,4]),import.meta.url),()=>y(()=>import("../nodes/8.COSNhA2W.js"),__vite__mapDeps([24,18,2,3,1,6,13,4,25]),import.meta.url),()=>y(()=>import("../nodes/9.C7V5KDzk.js"),__vite__mapDeps([26,18,2,3,1,6,13,4,5,8]),import.meta.url),()=>y(()=>import("../nodes/10.B6pKJcDr.js"),__vite__mapDeps([27,1,6,3,2,13,4,28]),import.meta.url),()=>y(()=>import("../nodes/11.DZ0dlqx2.js"),__vite__mapDeps([29,18,2,3,1,6,4]),import.meta.url),()=>y(()=>import("../nodes/12.Aa19J_i5.js"),__vite__mapDeps([30,18,2,3,1,6,13,4,31]),import.meta.url),()=>y(()=>import("../nodes/13.BINFpYO1.js"),__vite__mapDeps([32,18,2,3,1,6,13,4,5,8,15,20,33]),import.meta.url),()=>y(()=>import("../nodes/14.CBJTftJX.js"),__vite__mapDeps([34,18,2,3,1,6,13,4]),import.meta.url),()=>y(()=>import("../nodes/15.CxZMlvSv.js"),__vite__mapDeps([35,18,2,3,1,6,4]),import.meta.url),()=>y(()=>import("../nodes/16.BkRNxWVr.js"),__vite__mapDeps([36,1,6,3]),import.meta.url)],At=[],Tt={"/":[2],"/HARP":[9],"/QADR":[13],"/about":[3],"/algopilot":[4],"/blog":[5],"/codex":[6],"/company":[7],"/contact":[8],"/helpcenter":[10],"/impressum":[11],"/products":[12],"/research":[14],"/risk-disclaimer":[15],"/roadmap":[16]},dt={handleError:({error:t})=>{console.error(t)},reroute:()=>{},transport:{}},vt=Object.fromEntries(Object.entries(dt.transport).map(([t,e])=>[t,e.decode])),wt=!1,Lt=(t,e)=>vt[t](e);export{Lt as decode,vt as decoders,Tt as dictionary,wt as hash,dt as hooks,bt as matchers,It as nodes,Ot as root,At as server_loads};
