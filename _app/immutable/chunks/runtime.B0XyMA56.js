var bn=Array.isArray,Pn=Array.from,Fn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,Zt=Object.getOwnPropertyDescriptors,qn=Object.prototype,Ln=Array.prototype,zt=Object.getPrototypeOf;const Mn=()=>{};function Yn(t){return t()}function Wt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,Et=4,B=8,lt=16,g=32,W=64,tt=128,O=256,$=512,h=1024,x=2048,P=4096,b=8192,F=16384,Xt=32768,yt=65536,Hn=1<<17,Jt=1<<19,wt=1<<20,vt=Symbol("$state"),jn=Symbol("legacy props"),Bn=Symbol("");function Tt(t){return t===this.v}function Qt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function mt(t){return!Qt(t,this.v)}function tn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function nn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function rn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function en(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Un(){throw new Error("https://svelte.dev/e/hydration_failed")}function Vn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Gn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function $n(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function sn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function ln(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let X=!1;function Kn(){X=!0}const Zn=1,zn=2,Wn=16,Xn=1,Jn=2,Qn=4,tr=8,nr=16,rr=1,er=2,an="[",un="[!",on="]",gt={},sr=Symbol();function at(t,n){var r={f:0,v:t,reactions:null,equals:Tt,version:0};return r}function lr(t){return At(at(t))}function fn(t,n=!1){var e;const r=at(t);return n||(r.equals=mt),X&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function ar(t,n=!1){return At(fn(t,n))}function At(t){return o!==null&&o.f&y&&(m===null?An([t]):m.push(t)),t}function _n(t,n){return o!==null&&ft()&&o.f&(y|lt)&&(m===null||!m.includes(t))&&ln(),cn(t,n)}function cn(t,n){return t.equals(n)||(t.v=n,t.version=Bt(),xt(t,x),ft()&&u!==null&&u.f&h&&!(u.f&g)&&(v!==null&&v.includes(t)?(T(u,x),Q(u)):A===null?xn([t]):A.push(t))),n}function xt(t,n){var r=t.reactions;if(r!==null)for(var e=ft(),s=r.length,l=0;l<s;l++){var a=r[l],f=a.f;f&x||!e&&a===u||(T(a,n),f&(h|O)&&(f&y?xt(a,P):Q(a)))}}function Rt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let D=!1;function ur(t){D=t}let w;function M(t){if(t===null)throw Rt(),gt;return w=t}function or(){return M(k(w))}function ir(t){if(D){if(k(w)!==null)throw Rt(),gt;w=t}}function fr(t=1){if(D){for(var n=t,r=w;n--;)r=k(r);w=r}}function _r(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===on){if(t===0)return n;t-=1}else(r===an||r===un)&&(t+=1)}var e=k(n);n.remove(),n=e}}var pt,vn,St,Dt;function cr(){if(pt===void 0){pt=window,vn=document;var t=Element.prototype,n=Node.prototype;St=ct(n,"firstChild").get,Dt=ct(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return St.call(t)}function k(t){return Dt.call(t)}function vr(t,n){if(!D)return rt(t);var r=rt(w);if(r===null)r=w.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),M(e),e}return M(r),r}function pr(t,n){if(!D){var r=rt(t);return r instanceof Comment&&r.data===""?k(r):r}return w}function hr(t,n=1,r=!1){let e=D?w:t;for(var s;n--;)s=e,e=k(e);if(!D)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=nt();return e===null?s==null||s.after(a):e.before(a),M(a),a}return M(e),e}function dr(t){t.textContent=""}function pn(t){var n=y|x;u===null?n|=O:u.f|=wt;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:i,deps:null,equals:Tt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function Er(t){const n=pn(t);return n.equals=mt,n}function It(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ut(e):I(e)}}}function hn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Ot(t){var n,r=u;z(hn(t));try{It(t),n=Ut(t)}finally{z(r)}return n}function kt(t){var n=Ot(t),r=(S||t.f&O)&&t.deps!==null?P:h;T(t,r),t.equals(n)||(t.v=n,t.version=Bt())}function ut(t){It(t),j(t,0),T(t,F),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Nt(t){u===null&&o===null&&rn(),o!==null&&o.f&O&&nn(),it&&tn()}function dn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var s=(t&W)!==0,l=u,a={ctx:i,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var f=N;try{ht(!0),U(a),a.f|=Xt}catch(_){throw I(a),_}finally{ht(f)}}else n!==null&&Q(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&wt)===0;if(!p&&!s&&e&&(l!==null&&dn(a,l),o!==null&&o.f&y)){var d=o;(d.children??(d.children=[])).push(a)}return a}function yr(t){const n=q(B,null,!1);return T(n,h),n.teardown=t,n}function wr(t){Nt();var n=u!==null&&(u.f&g)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Ct(t);return e}}function Tr(t){return Nt(),ot(t)}function mr(t){const n=q(W,t,!0);return(r={})=>new Promise(e=>{r.outro?wn(n,()=>{I(n),e(void 0)}):(I(n),e(void 0))})}function Ct(t){return q(Et,t,!1)}function gr(t,n){var r=i,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ot(()=>{t(),!e.ran&&(e.ran=!0,_n(r.l.r2,!0),Nn(n))})}function Ar(){var t=i;ot(()=>{if(kn(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&h&&T(r,P),L(r)&&U(r),n.ran=!1}t.l.r2.v=!1}})}function ot(t){return q(B,t,!0)}function xr(t){return En(t)}function En(t,n=0){return q(B|lt|n,t,!0)}function Rr(t,n=!0){return q(B|g,t,!0,n)}function bt(t){var n=t.teardown;if(n!==null){const r=it,e=o;dt(!0),Z(null);try{n.call(null)}finally{dt(r),Z(e)}}}function Pt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ut(n[r])}}function Ft(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;I(r,n),r=e}}function yn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&g||I(n),n=r}}function I(t,n=!0){var r=!1;if((n||t.f&Jt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:k(e);e.remove(),e=l}r=!0}Ft(t,n&&!r),Pt(t),j(t,0),T(t,F);var a=t.transitions;if(a!==null)for(const p of a)p.stop();bt(t);var f=t.parent;f!==null&&f.first!==null&&qt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function qt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function wn(t,n){var r=[];Lt(t,r,!0),Tn(r,()=>{I(t),n&&n()})}function Tn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Lt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&yt)!==0||(e.f&g)!==0;Lt(e,n,l?r:!1),e=s}}}function Sr(t){Mt(t,!0)}function Mt(t,n){if(t.f&b){L(t)&&U(t),t.f^=b;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&yt)!==0||(r.f&g)!==0;Mt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let K=!1,et=[];function Yt(){K=!1;const t=et.slice();et=[],Wt(t)}function Dr(t){K||(K=!0,queueMicrotask(Yt)),et.push(t)}function mn(){K&&Yt()}const Ht=0,gn=1;let V=!1,G=Ht,Y=!1,H=null,N=!1,it=!1;function ht(t){N=t}function dt(t){it=t}let R=[],C=0;let o=null;function Z(t){o=t}let u=null;function z(t){u=t}let m=null;function An(t){m=t}let v=null,E=0,A=null;function xn(t){A=t}let jt=1,S=!1,i=null;function Bt(){return++jt}function ft(){return!X||i!==null&&i.l===null}function L(t){var a,f;var n=t.f;if(n&x)return!0;if(n&P){var r=t.deps,e=(n&O)!==0;if(r!==null){var s;if(n&$){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=$}for(s=0;s<r.length;s++){var l=r[s];if(L(l)&&kt(l),e&&u!==null&&!S&&!((f=l==null?void 0:l.reactions)!=null&&f.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}(!e||u!==null&&!S)&&T(t,h)}return!1}function Rn(t,n){for(var r=n;r!==null;){if(r.f&tt)try{r.fn(t);return}catch{r.f^=tt}r=r.parent}throw V=!1,t}function Sn(t){return(t.f&F)===0&&(t.parent===null||(t.parent.f&tt)===0)}function J(t,n,r,e){if(V){if(r===null&&(V=!1),Sn(n))throw t;return}r!==null&&(V=!0);{Rn(t,n);return}}function Ut(t){var _t;var n=v,r=E,e=A,s=o,l=S,a=m,f=i,p=t.f;v=null,E=0,A=null,o=p&(g|W)?null:t,S=!N&&(p&O)!==0,m=null,i=t.ctx;try{var d=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(j(t,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else t.deps=_=v;if(!S)for(c=E;c<_.length;c++)((_t=_[c]).reactions??(_t.reactions=[])).push(t)}else _!==null&&E<_.length&&(j(t,E),_.length=E);return d}finally{v=n,E=r,A=e,o=s,S=l,m=a,i=f}}function Dn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(v===null||!v.includes(n))&&(T(n,P),n.f&(O|$)||(n.f^=$),j(n,0))}function j(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Dn(t,r[e])}function U(t){var n=t.f;if(!(n&F)){T(t,h);var r=u,e=i;u=t;try{n&lt?yn(t):Ft(t),Pt(t),bt(t);var s=Ut(t);t.teardown=typeof s=="function"?s:null,t.version=jt}catch(l){J(l,t,r,e||t.ctx)}finally{u=r}}}function Vt(){if(C>1e3){C=0;try{en()}catch(t){if(H!==null)J(t,H,null);else throw t}}C++}function Gt(t){var n=t.length;if(n!==0){Vt();var r=N;N=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&h||(s.f^=h);var l=[];$t(s,l),In(l)}}finally{N=r}}}function In(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(F|b)))try{L(e)&&(U(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qt(e):e.fn=null))}catch(s){J(s,e,null,e.ctx)}}}function On(){if(Y=!1,C>1001)return;const t=R;R=[],Gt(t),Y||(C=0,H=null)}function Q(t){G===Ht&&(Y||(Y=!0,queueMicrotask(On))),H=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(W|g)){if(!(r&h))return;n.f^=h}}R.push(n)}function $t(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&g)!==0,a=l&&(s&h)!==0,f=r.next;if(!a&&!(s&b))if(s&B){if(l)r.f^=h;else try{L(r)&&U(r)}catch(c){J(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&Et&&e.push(r);if(f===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var d=c.next;if(d!==null){r=d;continue t}c=c.parent}}r=f}for(var _=0;_<e.length;_++)p=e[_],n.push(p),$t(p,n)}function Kt(t){var n=G,r=R;try{Vt();const s=[];G=gn,R=s,Y=!1,Gt(r);var e=t==null?void 0:t();return mn(),(R.length>0||s.length>0)&&Kt(),C=0,H=null,e}finally{G=n,R=r}}async function Ir(){await Promise.resolve(),Kt()}function kn(t){var _;var n=t.f,r=(n&y)!==0;if(r&&n&F){var e=Ot(t);return ut(t),e}if(o!==null){m!==null&&m.includes(t)&&sn();var s=o.deps;v===null&&s!==null&&s[E]===t?E++:v===null?v=[t]:v.push(t),A!==null&&u!==null&&u.f&h&&!(u.f&g)&&A.includes(t)&&(T(u,x),Q(u))}else if(r&&t.deps===null)for(var l=t,a=l.parent,f=l;a!==null;)if(a.f&y){var p=a;f=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(f)||(d.deriveds??(d.deriveds=[])).push(f);break}return r&&(l=t,L(l)&&kt(l)),t.v}function Nn(t){const n=o;try{return o=null,t()}finally{o=n}}const Cn=~(x|P|h);function T(t,n){t.f=t.f&Cn|n}function Or(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},X&&!n&&(i.l={s:null,u:null,r1:[],r2:at(!1)})}function kr(t){const n=i;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];z(l.effect),Z(l.reaction),Ct(l.fn)}}finally{z(r),Z(e)}}i=n.p,n.m=!0}return{}}function Nr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)st(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&vt in r&&st(r)}}}function st(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{st(t[e],n)}catch{}const r=zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Zt(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{at as $,Nn as A,Yn as B,kn as C,Nr as D,pn as E,Kn as F,En as G,an as H,yt as I,I as J,pr as K,xr as L,vr as M,ir as N,hr as O,Z as P,z as Q,o as R,yr as S,Dr as T,Fn as U,bn as V,Jt as W,X,vt as Y,qn as Z,Ln as _,k as a,Gn as a0,_n as a1,ct as a2,sr as a3,$n as a4,zt as a5,un as a6,_r as a7,Sr as a8,wn as a9,Wn as aA,Bn as aB,Zt as aC,gr as aD,Ar as aE,ar as aF,vn as aG,fr as aH,pt as aI,fn as aa,Vn as ab,Hn as ac,Qn as ad,mt as ae,g as af,W as ag,Xn as ah,Jn as ai,tr as aj,jn as ak,Er as al,nr as am,rr as an,er as ao,Ct as ap,ot as aq,Kt as ar,Ir as as,lr as at,b as au,cn as av,Lt as aw,Tn as ax,zn as ay,Zn as az,gt as b,ur as c,M as d,w as e,on as f,rt as g,or as h,cr as i,Rt as j,Un as k,dr as l,Pn as m,Mn as n,mr as o,nt as p,Rr as q,Wt as r,Qt as s,Or as t,D as u,u as v,kr as w,i as x,Tr as y,wr as z};