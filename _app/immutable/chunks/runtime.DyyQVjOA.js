var Dn=Array.isArray,Sn=Array.from,On=Object.defineProperty,it=Object.getOwnPropertyDescriptor,Wt=Object.getOwnPropertyDescriptors,Cn=Object.prototype,Nn=Array.prototype,Xt=Object.getPrototypeOf;const bn=()=>{};function qn(t){return t()}function pt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,ht=4,j=8,rt=16,w=32,z=64,g=128,V=256,p=512,x=1024,b=2048,N=4096,H=8192,Jt=16384,dt=32768,Fn=65536,Qt=1<<18,Et=1<<19,ft=Symbol("$state"),Pn=Symbol("");function yt(t){return t===this.v}function tn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function wt(t){return!tn(t,this.v)}function nn(t){throw new Error("effect_in_teardown")}function rn(){throw new Error("effect_in_unowned_derived")}function en(t){throw new Error("effect_orphan")}function sn(){throw new Error("effect_update_depth_exceeded")}function Mn(){throw new Error("hydration_failed")}function Ln(t){throw new Error("props_invalid_value")}function Yn(){throw new Error("state_descriptors_fixed")}function jn(){throw new Error("state_prototype_fixed")}function an(){throw new Error("state_unsafe_local_read")}function ln(){throw new Error("state_unsafe_mutation")}function et(t){return{f:0,v:t,reactions:null,equals:yt,version:0}}function Hn(t){return Tt(et(t))}function un(t,n=!1){var e;const r=et(t);return n||(r.equals=wt),f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Bn(t,n=!1){return Tt(un(t,n))}function Tt(t){return o!==null&&o.f&m&&(y===null?mn([t]):y.push(t)),t}function Un(t,n){return mt(t,zt(()=>Zt(t))),n}function mt(t,n){return o!==null&&ut()&&o.f&(m|rt)&&(y===null||!y.includes(t))&&ln(),on(t,n)}function on(t,n){return t.equals(n)||(t.v=n,t.version=Bt(),At(t,x),ut()&&u!==null&&u.f&p&&!(u.f&w)&&(_!==null&&_.includes(t)?(E(u,x),W(u)):k===null?An([t]):k.push(t))),n}function At(t,n){var r=t.reactions;if(r!==null)for(var e=ut(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&x||!e&&l===u||(E(l,n),i&(p|g)&&(i&m?At(l,b):W(l)))}}const Vn=1,Gn=2,Kn=16,$n=1,Zn=2,zn=4,Wn=8,Xn=16,Jn=1,Qn=2,fn="[",_n="[!",cn="]",kt={},tr=Symbol();function xt(t){console.warn("hydration_mismatch")}let R=!1;function nr(t){R=t}let d;function M(t){if(t===null)throw xt(),kt;return d=t}function rr(){return M(D(d))}function er(t){if(R){if(D(d)!==null)throw xt(),kt;d=t}}function sr(t=1){if(R){for(var n=t,r=d;n--;)r=D(r);d=r}}function ar(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===cn){if(t===0)return n;t-=1}else(r===fn||r===_n)&&(t+=1)}var e=D(n);n.remove(),n=e}}var _t,It,Rt;function lr(){if(_t===void 0){_t=window;var t=Element.prototype,n=Node.prototype;It=it(n,"firstChild").get,Rt=it(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function X(t=""){return document.createTextNode(t)}function J(t){return It.call(t)}function D(t){return Rt.call(t)}function ur(t,n){if(!R)return J(t);var r=J(d);if(r===null)r=d.appendChild(X());else if(n&&r.nodeType!==3){var e=X();return r==null||r.before(e),M(e),e}return M(r),r}function or(t,n){if(!R){var r=J(t);return r instanceof Comment&&r.data===""?D(r):r}return d}function ir(t,n=1,r=!1){let e=R?d:t;for(;n--;)e=D(e);if(!R)return e;var s=e.nodeType;if(r&&s!==3){var a=X();return e==null||e.before(a),M(a),a}return M(e),e}function fr(t){t.textContent=""}function vn(t){var n=m|x;u===null?n|=g:u.f|=Et;const r={children:null,ctx:f,deps:null,equals:yt,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(o!==null&&o.f&m){var e=o;(e.children??(e.children=[])).push(r)}return r}function _r(t){const n=vn(t);return n.equals=wt,n}function gt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?st(e):F(e)}}}function Dt(t){var n,r=u;Z(t.parent);try{gt(t),n=Ut(t)}finally{Z(r)}return n}function St(t){var n=Dt(t),r=(S||t.f&g)&&t.deps!==null?b:p;E(t,r),t.equals(n)||(t.v=n,t.version=Bt())}function st(t){gt(t),Y(t,0),E(t,H),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ot(t){u===null&&o===null&&en(),o!==null&&o.f&g&&rn(),lt&&nn()}function pn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var s=(t&z)!==0,a=u,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=O;try{ct(!0),B(l),l.f|=Jt}catch(c){throw F(l),c}finally{ct(i)}}else n!==null&&W(l);var T=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&Et)===0;if(!T&&!s&&e&&(a!==null&&pn(l,a),o!==null&&o.f&m)){var A=o;(A.children??(A.children=[])).push(l)}return l}function cr(t){const n=q(j,null,!1);return E(n,p),n.teardown=t,n}function vr(t){Ot();var n=u!==null&&(u.f&w)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Ct(t);return e}}function pr(t){return Ot(),at(t)}function hr(t){const n=q(z,t,!0);return()=>{F(n)}}function Ct(t){return q(ht,t,!1)}function dr(t,n){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=at(()=>{t(),!e.ran&&(e.ran=!0,mt(r.l.r2,!0),zt(n))})}function Er(){var t=f;at(()=>{if(Zt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&E(r,b),P(r)&&B(r),n.ran=!1}t.l.r2.v=!1}})}function at(t){return q(j,t,!0)}function yr(t){return hn(t)}function hn(t,n=0){return q(j|rt|n,t,!0)}function wr(t,n=!0){return q(j|w,t,!0,n)}function Nt(t){var n=t.teardown;if(n!==null){const r=lt,e=o;vt(!0),$(null);try{n.call(null)}finally{vt(r),$(e)}}}function bt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)st(n[r])}}function qt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;F(r,n),r=e}}function dn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&w||F(n),n=r}}function F(t,n=!0){var r=!1;if((n||t.f&Qt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:D(e);e.remove(),e=a}r=!0}bt(t),qt(t,n&&!r),Y(t,0),E(t,H);var l=t.transitions;if(l!==null)for(const T of l)T.stop();Nt(t);var i=t.parent;i!==null&&i.first!==null&&Ft(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Ft(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Tr(t,n){var r=[];Pt(t,r,!0),En(r,()=>{F(t),n&&n()})}function En(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Pt(t,n,r){if(!(t.f&N)){if(t.f^=N,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&dt)!==0||(e.f&w)!==0;Pt(e,n,a?r:!1),e=s}}}function mr(t){Mt(t,!0)}function Mt(t,n){if(t.f&N){t.f^=N,P(t)&&B(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&dt)!==0||(r.f&w)!==0;Mt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const yn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let G=!1,K=!1,Q=[],tt=[];function Lt(){G=!1;const t=Q.slice();Q=[],pt(t)}function Yt(){K=!1;const t=tt.slice();tt=[],pt(t)}function Ar(t){G||(G=!0,queueMicrotask(Lt)),Q.push(t)}function kr(t){K||(K=!0,yn(Yt)),tt.push(t)}function wn(){G&&Lt(),K&&Yt()}const jt=0,Tn=1;let U=jt,L=!1,O=!1,lt=!1;function ct(t){O=t}function vt(t){lt=t}let I=[],C=0;let o=null;function $(t){o=t}let u=null;function Z(t){u=t}let y=null;function mn(t){y=t}let _=null,h=0,k=null;function An(t){k=t}let Ht=0,S=!1,f=null;function Bt(){return++Ht}function ut(){return f!==null&&f.l===null}function P(t){var l,i;var n=t.f;if(n&x)return!0;if(n&b){var r=t.deps,e=(n&g)!==0;if(r!==null){var s;if(n&V){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=V}for(s=0;s<r.length;s++){var a=r[s];if(P(a)&&St(a),e&&u!==null&&!S&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||E(t,p)}return!1}function kn(t,n,r){throw t}function Ut(t){var ot;var n=_,r=h,e=k,s=o,a=S,l=y,i=f,T=t.f;_=null,h=0,k=null,o=T&(w|z)?null:t,S=!O&&(T&g)!==0,y=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(Y(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!S)for(v=h;v<c.length;v++)((ot=c[v]).reactions??(ot.reactions=[])).push(t)}else c!==null&&h<c.length&&(Y(t,h),c.length=h);return A}finally{_=n,h=r,k=e,o=s,S=a,y=l,f=i}}function xn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(E(n,b),n.f&(g|V)||(n.f^=V),Y(n,0))}function Y(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)xn(t,r[e])}function B(t){var n=t.f;if(!(n&H)){E(t,p);var r=u;u=t;try{bt(t),n&rt?dn(t):qt(t),Nt(t);var e=Ut(t);t.teardown=typeof e=="function"?e:null,t.version=Ht}catch(s){kn(s)}finally{u=r}}}function Vt(){C>1e3&&(C=0,sn()),C++}function Gt(t){var n=t.length;if(n!==0){Vt();var r=O;O=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];Kt(s,a),In(a)}}finally{O=r}}}function In(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(H|N))&&P(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ft(e):e.fn=null))}}function Rn(){if(L=!1,C>1001)return;const t=I;I=[],Gt(t),L||(C=0)}function W(t){U===jt&&(L||(L=!0,queueMicrotask(Rn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(z|w)){if(!(r&p))return;n.f^=p}}I.push(n)}function Kt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&w)!==0,l=a&&(s&p)!==0;if(!l&&!(s&N))if(s&j){a?r.f^=p:P(r)&&B(r);var i=r.first;if(i!==null){r=i;continue}}else s&ht&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Kt(i,n)}function $t(t){var n=U,r=I;try{Vt();const s=[];U=Tn,I=s,L=!1,Gt(r);var e=t==null?void 0:t();return wn(),(I.length>0||s.length>0)&&$t(),C=0,e}finally{U=n,I=r}}async function xr(){await Promise.resolve(),$t()}function Zt(t){var i;var n=t.f,r=(n&m)!==0;if(r&&n&H){var e=Dt(t);return st(t),e}if(o!==null){y!==null&&y.includes(t)&&an();var s=o.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),k!==null&&u!==null&&u.f&p&&!(u.f&w)&&k.includes(t)&&(E(u,x),W(u))}else if(r&&t.deps===null){var a=t,l=a.parent;l!==null&&!((i=l.deriveds)!=null&&i.includes(a))&&(l.deriveds??(l.deriveds=[])).push(a)}return r&&(a=t,P(a)&&St(a)),t.v}function zt(t){const n=o;try{return o=null,t()}finally{o=n}}const gn=~(x|b|p);function E(t,n){t.f=t.f&gn|n}function Ir(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:et(!1)})}function Rr(t){const n=f;if(n!==null){const l=n.e;if(l!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];Z(a.effect),$(a.reaction),Ct(a.fn)}}finally{Z(r),$(e)}}f=n.p,n.m=!0}return{}}function gr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ft in t)nt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ft in r&&nt(r)}}}function nt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{nt(t[e],n)}catch{}const r=Xt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Wt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{_r as $,Xt as A,Dn as B,hn as C,mr as D,wr as E,Tr as F,dt as G,_n as H,ar as I,M as J,nr as K,d as L,Ct as M,at as N,Ar as O,Ln as P,Fn as Q,zn as R,ft as S,wt as T,tr as U,w as V,z as W,Z as X,$n as Y,Zn as Z,Wn as _,vr as a,o as a0,H as a1,Xn as a2,un as a3,X as a4,J as a5,Jn as a6,Qn as a7,cr as a8,$ as a9,ut as aA,dr as aB,Er as aC,Bn as aD,sr as aE,Un as aF,tn as aG,On as aa,lr as ab,fn as ac,D as ad,kt as ae,cn as af,xt as ag,Mn as ah,fr as ai,Sn as aj,hr as ak,bn as al,$t as am,xr as an,Hn as ao,N as ap,on as aq,Vn as ar,Kn as as,Gn as at,Pt as au,En as av,F as aw,kr as ax,Pn as ay,Wt as az,zt as b,f as c,pt as d,gr as e,vn as f,Zt as g,or as h,Rr as i,ur as j,er as k,R as l,rr as m,Nn as n,Cn as o,Ir as p,et as q,qn as r,ir as s,yr as t,pr as u,Yn as v,mt as w,it as x,u as y,jn as z};
