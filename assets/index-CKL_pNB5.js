(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const bt={},As=[],Wn=()=>{},zd=()=>!1,Va=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),za=n=>n.startsWith("onUpdate:"),Jt=Object.assign,ac=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},$h=Object.prototype.hasOwnProperty,mt=(n,e)=>$h.call(n,e),Je=Array.isArray,ws=n=>Ar(n)==="[object Map]",Os=n=>Ar(n)==="[object Set]",Qc=n=>Ar(n)==="[object Date]",je=n=>typeof n=="function",Pt=n=>typeof n=="string",Yn=n=>typeof n=="symbol",St=n=>n!==null&&typeof n=="object",Gd=n=>(St(n)||je(n))&&je(n.then)&&je(n.catch),Wd=Object.prototype.toString,Ar=n=>Wd.call(n),Qh=n=>Ar(n).slice(8,-1),Xd=n=>Ar(n)==="[object Object]",oc=n=>Pt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ar=rc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ga=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},jh=/-\w/g,wn=Ga(n=>n.replace(jh,e=>e.slice(1).toUpperCase())),ep=/\B([A-Z])/g,Bi=Ga(n=>n.replace(ep,"-$1").toLowerCase()),Yd=Ga(n=>n.charAt(0).toUpperCase()+n.slice(1)),ro=Ga(n=>n?`on${Yd(n)}`:""),oi=(n,e)=>!Object.is(n,e),ha=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},qd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Wa=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let jc;const Xa=()=>jc||(jc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qt(n){if(Je(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Pt(i)?sp(i):qt(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Pt(n)||St(n))return n}const tp=/;(?![^(]*\))/g,np=/:([^]+)/,ip=/\/\*[^]*?\*\//g;function sp(n){const e={};return n.replace(ip,"").split(tp).forEach(t=>{if(t){const i=t.split(np);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function wt(n){let e="";if(Pt(n))e=n;else if(Je(n))for(let t=0;t<n.length;t++){const i=wt(n[t]);i&&(e+=i+" ")}else if(St(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const rp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ap=rc(rp);function Kd(n){return!!n||n===""}function op(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Ni(n[i],e[i]);return t}function Ni(n,e){if(n===e)return!0;let t=Qc(n),i=Qc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Yn(n),i=Yn(e),t||i)return n===e;if(t=Je(n),i=Je(e),t||i)return t&&i?op(n,e):!1;if(t=St(n),i=St(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!Ni(n[a],e[a]))return!1}}return String(n)===String(e)}function lc(n,e){return n.findIndex(t=>Ni(t,e))}const Zd=n=>!!(n&&n.__v_isRef===!0),me=n=>Pt(n)?n:n==null?"":Je(n)||St(n)&&(n.toString===Wd||!je(n.toString))?Zd(n)?me(n.value):JSON.stringify(n,Jd,2):String(n),Jd=(n,e)=>Zd(e)?Jd(n,e.value):ws(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[ao(i,r)+" =>"]=s,t),{})}:Os(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ao(t))}:Yn(e)?ao(e):St(e)&&!Je(e)&&!Xd(e)?String(e):e,ao=(n,e="")=>{var t;return Yn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ht;class lp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Ht&&(Ht.active?(this.parent=Ht,this.index=(Ht.scopes||(Ht.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Ht;try{return Ht=this,e()}finally{Ht=t}}}on(){++this._on===1&&(this.prevScope=Ht,Ht=this)}off(){if(this._on>0&&--this._on===0){if(Ht===this)Ht=this.prevScope;else{let e=Ht;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function cp(){return Ht}let Et;const oo=new WeakSet;class $d{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ht&&(Ht.active?Ht.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,oo.has(this)&&(oo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||jd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,eu(this),ef(this);const e=Et,t=Cn;Et=this,Cn=!0;try{return this.fn()}finally{tf(this),Et=e,Cn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)dc(e);this.deps=this.depsTail=void 0,eu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?oo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){il(this)&&this.run()}get dirty(){return il(this)}}let Qd=0,or,lr;function jd(n,e=!1){if(n.flags|=8,e){n.next=lr,lr=n;return}n.next=or,or=n}function cc(){Qd++}function uc(){if(--Qd>0)return;if(lr){let e=lr;for(lr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;or;){let e=or;for(or=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function ef(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function tf(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),dc(i),up(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function il(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(nf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function nf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===gr)||(n.globalVersion=gr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!il(n))))return;n.flags|=2;const e=n.dep,t=Et,i=Cn;Et=n,Cn=!0;try{ef(n);const s=n.fn(n._value);(e.version===0||oi(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Et=t,Cn=i,tf(n),n.flags&=-3}}function dc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)dc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function up(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Cn=!0;const sf=[];function _i(){sf.push(Cn),Cn=!1}function vi(){const n=sf.pop();Cn=n===void 0?!0:n}function eu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Et;Et=void 0;try{e()}finally{Et=t}}}let gr=0;class dp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class rf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Et||!Cn||Et===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Et)t=this.activeLink=new dp(Et,this),Et.deps?(t.prevDep=Et.depsTail,Et.depsTail.nextDep=t,Et.depsTail=t):Et.deps=Et.depsTail=t,af(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Et.depsTail,t.nextDep=void 0,Et.depsTail.nextDep=t,Et.depsTail=t,Et.deps===t&&(Et.deps=i)}return t}trigger(e){this.version++,gr++,this.notify(e)}notify(e){cc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{uc()}}}function af(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)af(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const sl=new WeakMap,$i=Symbol(""),rl=Symbol(""),_r=Symbol("");function Kt(n,e,t){if(Cn&&Et){let i=sl.get(n);i||sl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new rf),s.map=i,s.key=t),s.track()}}function li(n,e,t,i,s,r){const a=sl.get(n);if(!a){gr++;return}const o=l=>{l&&l.trigger()};if(cc(),e==="clear")a.forEach(o);else{const l=Je(n),c=l&&oc(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===_r||!Yn(d)&&d>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(_r)),e){case"add":l?c&&o(a.get("length")):(o(a.get($i)),ws(n)&&o(a.get(rl)));break;case"delete":l||(o(a.get($i)),ws(n)&&o(a.get(rl)));break;case"set":ws(n)&&o(a.get($i));break}}uc()}function os(n){const e=xt(n);return e===n?e:(Kt(e,"iterate",_r),Rn(n)?e:e.map(xi))}function Ya(n){return Kt(n=xt(n),"iterate",_r),n}function Bn(n,e){return Fi(n)?Ls(Qi(n)?xi(e):e):xi(e)}const fp={__proto__:null,[Symbol.iterator](){return lo(this,Symbol.iterator,n=>Bn(this,n))},concat(...n){return os(this).concat(...n.map(e=>Je(e)?os(e):e))},entries(){return lo(this,"entries",n=>(n[1]=Bn(this,n[1]),n))},every(n,e){return Jn(this,"every",n,e,void 0,arguments)},filter(n,e){return Jn(this,"filter",n,e,t=>t.map(i=>Bn(this,i)),arguments)},find(n,e){return Jn(this,"find",n,e,t=>Bn(this,t),arguments)},findIndex(n,e){return Jn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Jn(this,"findLast",n,e,t=>Bn(this,t),arguments)},findLastIndex(n,e){return Jn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Jn(this,"forEach",n,e,void 0,arguments)},includes(...n){return co(this,"includes",n)},indexOf(...n){return co(this,"indexOf",n)},join(n){return os(this).join(n)},lastIndexOf(...n){return co(this,"lastIndexOf",n)},map(n,e){return Jn(this,"map",n,e,void 0,arguments)},pop(){return Vs(this,"pop")},push(...n){return Vs(this,"push",n)},reduce(n,...e){return tu(this,"reduce",n,e)},reduceRight(n,...e){return tu(this,"reduceRight",n,e)},shift(){return Vs(this,"shift")},some(n,e){return Jn(this,"some",n,e,void 0,arguments)},splice(...n){return Vs(this,"splice",n)},toReversed(){return os(this).toReversed()},toSorted(n){return os(this).toSorted(n)},toSpliced(...n){return os(this).toSpliced(...n)},unshift(...n){return Vs(this,"unshift",n)},values(){return lo(this,"values",n=>Bn(this,n))}};function lo(n,e,t){const i=Ya(n),s=i[e]();return i!==n&&!Rn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const hp=Array.prototype;function Jn(n,e,t,i,s,r){const a=Ya(n),o=a!==n&&!Rn(n),l=a[e];if(l!==hp[e]){const f=l.apply(n,r);return o?xi(f):f}let c=t;a!==n&&(o?c=function(f,d){return t.call(this,Bn(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function tu(n,e,t,i){const s=Ya(n),r=s!==n&&!Rn(n);let a=t,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=Bn(n,c)),t.call(this,c,Bn(n,u),f,n)}):t.length>3&&(a=function(c,u,f){return t.call(this,c,u,f,n)}));const l=s[e](a,...i);return o?Bn(n,l):l}function co(n,e,t){const i=xt(n);Kt(i,"iterate",_r);const s=i[e](...t);return(s===-1||s===!1)&&mc(t[0])?(t[0]=xt(t[0]),i[e](...t)):s}function Vs(n,e,t=[]){_i(),cc();const i=xt(n)[e].apply(n,t);return uc(),vi(),i}const pp=rc("__proto__,__v_isRef,__isVue"),of=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Yn));function mp(n){Yn(n)||(n=String(n));const e=xt(this);return Kt(e,"has",n),e.hasOwnProperty(n)}class lf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Ep:ff:r?df:uf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Je(e);if(!s){let l;if(a&&(l=fp[t]))return l;if(t==="hasOwnProperty")return mp}const o=Reflect.get(e,t,nn(e)?e:i);if((Yn(t)?of.has(t):pp(t))||(s||Kt(e,"get",t),r))return o;if(nn(o)){const l=a&&oc(t)?o:o.value;return s&&St(l)?ol(l):l}return St(o)?s?ol(o):hc(o):o}}class cf extends lf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const a=Je(e)&&oc(t);if(!this._isShallow){const c=Fi(r);if(!Rn(i)&&!Fi(i)&&(r=xt(r),i=xt(i)),!a&&nn(r)&&!nn(i))return c||(r.value=i),!0}const o=a?Number(t)<e.length:mt(e,t),l=Reflect.set(e,t,i,nn(e)?e:s);return e===xt(s)&&l&&(o?oi(i,r)&&li(e,"set",t,i):li(e,"add",t,i)),l}deleteProperty(e,t){const i=mt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&li(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Yn(t)||!of.has(t))&&Kt(e,"has",t),i}ownKeys(e){return Kt(e,"iterate",Je(e)?"length":$i),Reflect.ownKeys(e)}}class gp extends lf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const _p=new cf,vp=new gp,xp=new cf(!0);const al=n=>n,Nr=n=>Reflect.getPrototypeOf(n);function Sp(n,e,t){return function(...i){const s=this.__v_raw,r=xt(s),a=ws(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?al:e?Ls:xi;return!e&&Kt(r,"iterate",l?rl:$i),Jt(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function Fr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Mp(n,e){const t={get(s){const r=this.__v_raw,a=xt(r),o=xt(s);n||(oi(s,o)&&Kt(a,"get",s),Kt(a,"get",o));const{has:l}=Nr(a),c=e?al:n?Ls:xi;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Kt(xt(s),"iterate",$i),s.size},has(s){const r=this.__v_raw,a=xt(r),o=xt(s);return n||(oi(s,o)&&Kt(a,"has",s),Kt(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=xt(o),c=e?al:n?Ls:xi;return!n&&Kt(l,"iterate",$i),o.forEach((u,f)=>s.call(r,c(u),c(f),a))}};return Jt(t,n?{add:Fr("add"),set:Fr("set"),delete:Fr("delete"),clear:Fr("clear")}:{add(s){const r=xt(this),a=Nr(r),o=xt(s),l=!e&&!Rn(s)&&!Fi(s)?o:s;return a.has.call(r,l)||oi(s,l)&&a.has.call(r,s)||oi(o,l)&&a.has.call(r,o)||(r.add(l),li(r,"add",l,l)),this},set(s,r){!e&&!Rn(r)&&!Fi(r)&&(r=xt(r));const a=xt(this),{has:o,get:l}=Nr(a);let c=o.call(a,s);c||(s=xt(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?oi(r,u)&&li(a,"set",s,r):li(a,"add",s,r),this},delete(s){const r=xt(this),{has:a,get:o}=Nr(r);let l=a.call(r,s);l||(s=xt(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&li(r,"delete",s,void 0),c},clear(){const s=xt(this),r=s.size!==0,a=s.clear();return r&&li(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Sp(s,n,e)}),t}function fc(n,e){const t=Mp(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(mt(t,s)&&s in i?t:i,s,r)}const bp={get:fc(!1,!1)},yp={get:fc(!1,!0)},Tp={get:fc(!0,!1)};const uf=new WeakMap,df=new WeakMap,ff=new WeakMap,Ep=new WeakMap;function Ap(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hc(n){return Fi(n)?n:pc(n,!1,_p,bp,uf)}function wp(n){return pc(n,!1,xp,yp,df)}function ol(n){return pc(n,!0,vp,Tp,ff)}function pc(n,e,t,i,s){if(!St(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const a=Ap(Qh(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function Qi(n){return Fi(n)?Qi(n.__v_raw):!!(n&&n.__v_isReactive)}function Fi(n){return!!(n&&n.__v_isReadonly)}function Rn(n){return!!(n&&n.__v_isShallow)}function mc(n){return n?!!n.__v_raw:!1}function xt(n){const e=n&&n.__v_raw;return e?xt(e):n}function Cp(n){return!mt(n,"__v_skip")&&Object.isExtensible(n)&&qd(n,"__v_skip",!0),n}const xi=n=>St(n)?hc(n):n,Ls=n=>St(n)?ol(n):n;function nn(n){return n?n.__v_isRef===!0:!1}function Rp(n){return nn(n)?n.value:n}const Pp={get:(n,e,t)=>e==="__v_raw"?n:Rp(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return nn(s)&&!nn(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function hf(n){return Qi(n)?n:new Proxy(n,Pp)}class Dp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new rf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=gr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return jd(this,!0),!0}get value(){const e=this.dep.track();return nf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Lp(n,e,t=!1){let i,s;return je(n)?i=n:(i=n.get,s=n.set),new Dp(i,s,t)}const Or={},ba=new WeakMap;let qi;function Ip(n,e=!1,t=qi){if(t){let i=ba.get(t);i||ba.set(t,i=[]),i.push(n)}}function Up(n,e,t=bt){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=S=>s?S:Rn(S)||s===!1||s===0?ci(S,1):ci(S);let u,f,d,h,v=!1,b=!1;if(nn(n)?(f=()=>n.value,v=Rn(n)):Qi(n)?(f=()=>c(n),v=!0):Je(n)?(b=!0,v=n.some(S=>Qi(S)||Rn(S)),f=()=>n.map(S=>{if(nn(S))return S.value;if(Qi(S))return c(S);if(je(S))return l?l(S,2):S()})):je(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){_i();try{d()}finally{vi()}}const S=qi;qi=u;try{return l?l(n,3,[h]):n(h)}finally{qi=S}}:f=Wn,e&&s){const S=f,E=s===!0?1/0:s;f=()=>ci(S(),E)}const g=cp(),p=()=>{u.stop(),g&&g.active&&ac(g.effects,u)};if(r&&e){const S=e;e=(...E)=>{const A=S(...E);return p(),A}}let y=b?new Array(n.length).fill(Or):Or;const P=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const E=u.run();if(S||s||v||(b?E.some((A,D)=>oi(A,y[D])):oi(E,y))){d&&d();const A=qi;qi=u;try{const D=[E,y===Or?void 0:b&&y[0]===Or?[]:y,h];y=E,l?l(e,3,D):e(...D)}finally{qi=A}}}else u.run()};return o&&o(P),u=new $d(f),u.scheduler=a?()=>a(P,!1):P,h=S=>Ip(S,!1,u),d=u.onStop=()=>{const S=ba.get(u);if(S){if(l)l(S,4);else for(const E of S)E();ba.delete(u)}},e?i?P(!0):y=u.run():a?a(P.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ci(n,e=1/0,t){if(e<=0||!St(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,nn(n))ci(n.value,e,t);else if(Je(n))for(let i=0;i<n.length;i++)ci(n[i],e,t);else if(Os(n)||ws(n))n.forEach(i=>{ci(i,e,t)});else if(Xd(n)){for(const i in n)ci(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ci(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wr(n,e,t,i){try{return i?n(...i):n()}catch(s){qa(s,e,t)}}function Dn(n,e,t,i){if(je(n)){const s=wr(n,e,t,i);return s&&Gd(s)&&s.catch(r=>{qa(r,e,t)}),s}if(Je(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Dn(n[r],e,t,i));return s}}function qa(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||bt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(r){_i(),wr(r,null,10,[n,l,c]),vi();return}}Np(n,t,s,i,a)}function Np(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const en=[];let On=-1;const Cs=[];let Di=null,Ms=0;const pf=Promise.resolve();let ya=null;function mf(n){const e=ya||pf;return n?e.then(this?n.bind(this):n):e}function Fp(n){let e=On+1,t=en.length;for(;e<t;){const i=e+t>>>1,s=en[i],r=vr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function gc(n){if(!(n.flags&1)){const e=vr(n),t=en[en.length-1];!t||!(n.flags&2)&&e>=vr(t)?en.push(n):en.splice(Fp(e),0,n),n.flags|=1,gf()}}function gf(){ya||(ya=pf.then(vf))}function Op(n){if(!Je(n))Di&&n.id===-1?Di.splice(Ms+1,0,n):n.flags&1||(Cs.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)Cs.push(n[e]);gf()}function nu(n,e,t=On+1){for(;t<en.length;t++){const i=en[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;en.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function _f(n){if(Cs.length){const e=[...new Set(Cs)].sort((t,i)=>vr(t)-vr(i));if(Cs.length=0,Di){for(let t=0;t<e.length;t++)Di.push(e[t]);return}for(Di=e,Ms=0;Ms<Di.length;Ms++){const t=Di[Ms];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Di=null,Ms=0}}const vr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function vf(n){try{for(On=0;On<en.length;On++){const e=en[On];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),wr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;On<en.length;On++){const e=en[On];e&&(e.flags&=-2)}On=-1,en.length=0,_f(),ya=null,(en.length||Cs.length)&&vf()}}let Sn=null,xf=null;function Ta(n){const e=Sn;return Sn=n,xf=n&&n.type.__scopeId||null,e}function Bp(n,e=Sn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&hu(-1);const r=Ta(e),a=ji.length;let o;try{o=n(...s)}finally{for(let l=ji.length;l>a;l--)Gf();Ta(r),i._d&&hu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function rt(n,e){if(Sn===null)return n;const t=Qa(Sn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,a,o,l=bt]=e[s];r&&(je(r)&&(r={mounted:r,updated:r}),r.deep&&ci(a),i.push({dir:r,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Hi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(_i(),Dn(l,t,8,[n.el,o,n,e]),vi())}}function kp(n,e){if(tn){let t=tn.provides;const i=tn.parent&&tn.parent.provides;i===t&&(t=tn.provides=Object.create(i)),t[n]=e}}function pa(n,e,t=!1){const i=Om();if(i||Rs){let s=Rs?Rs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&je(e)?e.call(i&&i.proxy):e}}const Hp=Symbol.for("v-scx"),Vp=()=>pa(Hp);function uo(n,e,t){return Sf(n,e,t)}function Sf(n,e,t=bt){const{immediate:i,deep:s,flush:r,once:a}=t,o=Jt({},t),l=e&&i||!e&&r!=="post";let c;if(Mr){if(r==="sync"){const h=Vp();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Wn,h.resume=Wn,h.pause=Wn,h}}const u=tn;o.call=(h,v,b)=>Dn(h,u,v,b);let f=!1;r==="post"?o.scheduler=h=>{on(h,u&&u.suspense)}:r!=="sync"&&(f=!0,o.scheduler=(h,v)=>{v?h():gc(h)}),o.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=Up(n,e,o);return Mr&&(c?c.push(d):l&&d()),d}function zp(n,e,t){const i=this.proxy,s=Pt(n)?n.includes(".")?Mf(i,n):()=>i[n]:n.bind(i,i);let r;je(e)?r=e:(r=e.handler,t=e);const a=Cr(this),o=Sf(s,r.bind(i),t);return a(),o}function Mf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Gp=Symbol("_vte"),Ka=n=>n.__isTeleport,fo=Symbol("_leaveCb");function Wp(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Si){e=t;break}}return e}function bf(n){if(!vc(n))return Ka(n.type)&&n.children?Wp(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&je(t.default))return t.default()}}function _c(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;_c(Ka(t.type)&&bf(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function yf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function iu(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Ea=new WeakMap;function cr(n,e,t,i,s=!1){if(Je(n)){n.forEach((b,g)=>cr(b,e&&(Je(e)?e[g]:e),t,i,s));return}if(ur(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&cr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Qa(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===bt?o.refs={}:o.refs,f=o.setupState,d=xt(f),h=f===bt?zd:b=>iu(u,b)?!1:mt(d,b),v=(b,g)=>!(g&&iu(u,g));if(c!=null&&c!==l){if(su(e),Pt(c))u[c]=null,h(c)&&(f[c]=null);else if(nn(c)){const b=e;v(c,b.k)&&(c.value=null),b.k&&(u[b.k]=null)}}if(je(l))wr(l,o,12,[a,u]);else{const b=Pt(l),g=nn(l);if(b||g){const p=()=>{if(n.f){const y=b?h(l)?f[l]:u[l]:v()||!n.k?l.value:u[n.k];if(s)Je(y)&&ac(y,r);else if(Je(y))y.includes(r)||y.push(r);else if(b)u[l]=[r],h(l)&&(f[l]=u[l]);else{const P=[r];v(l,n.k)&&(l.value=P),n.k&&(u[n.k]=P)}}else b?(u[l]=a,h(l)&&(f[l]=a)):g&&(v(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const y=()=>{p(),Ea.delete(n)};y.id=-1,Ea.set(n,y),on(y,t)}else su(n),p()}}}function su(n){const e=Ea.get(n);e&&(e.flags|=8,Ea.delete(n))}Xa().requestIdleCallback;Xa().cancelIdleCallback;const ur=n=>!!n.type.__asyncLoader,vc=n=>n.type.__isKeepAlive;function Xp(n,e){Tf(n,"a",e)}function Yp(n,e){Tf(n,"da",e)}function Tf(n,e,t=tn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Za(e,i,t),t){let s=t.parent;for(;s&&s.parent;)vc(s.parent.vnode)&&qp(i,e,t,s),s=s.parent}}function qp(n,e,t,i){const s=Za(e,n,i,!0);Ef(()=>{ac(i[e],s)},t)}function Za(n,e,t=tn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{_i();const o=Cr(t),l=Dn(e,t,n,a);return o(),vi(),l});return i?s.unshift(r):s.push(r),r}}const bi=n=>(e,t=tn)=>{(!Mr||n==="sp")&&Za(n,(...i)=>e(...i),t)},Kp=bi("bm"),Zp=bi("m"),Jp=bi("bu"),$p=bi("u"),Qp=bi("bum"),Ef=bi("um"),jp=bi("sp"),em=bi("rtg"),tm=bi("rtc");function nm(n,e=tn){Za("ec",n,e)}const im=Symbol.for("v-ndc");function Wt(n,e,t,i){let s;const r=t,a=Je(n);if(a||Pt(n)){const o=a&&Qi(n);let l=!1,c=!1;o&&(l=!Rn(n),c=Fi(n),n=Ya(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?Ls(xi(n[u])):xi(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(St(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const ll=n=>n?qf(n)?Qa(n):ll(n.parent):null,dr=Jt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ll(n.parent),$root:n=>ll(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>wf(n),$forceUpdate:n=>n.f||(n.f=()=>{gc(n.update)}),$nextTick:n=>n.n||(n.n=mf.bind(n.proxy)),$watch:n=>zp.bind(n)}),ho=(n,e)=>n!==bt&&!n.__isScriptSetup&&mt(n,e),sm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ho(i,e))return a[e]=1,i[e];if(s!==bt&&mt(s,e))return a[e]=2,s[e];if(mt(r,e))return a[e]=3,r[e];if(t!==bt&&mt(t,e))return a[e]=4,t[e];cl&&(a[e]=0)}}const c=dr[e];let u,f;if(c)return e==="$attrs"&&Kt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==bt&&mt(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,mt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return ho(s,e)?(s[e]=t,!0):i!==bt&&mt(i,e)?(i[e]=t,!0):mt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(t[o]||n!==bt&&o[0]!=="$"&&mt(n,o)||ho(e,o)||mt(r,o)||mt(i,o)||mt(dr,o)||mt(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:mt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function ru(n){return Je(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let cl=!0;function rm(n){const e=wf(n),t=n.proxy,i=n.ctx;cl=!1,e.beforeCreate&&au(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:v,activated:b,deactivated:g,beforeDestroy:p,beforeUnmount:y,destroyed:P,unmounted:S,render:E,renderTracked:A,renderTriggered:D,errorCaptured:x,serverPrefetch:w,expose:L,inheritAttrs:F,components:z,directives:q,filters:B}=e;if(c&&am(c,i,null),a)for(const V in a){const se=a[V];je(se)&&(i[V]=se.bind(t))}if(s){const V=s.call(t,t);St(V)&&(n.data=hc(V))}if(cl=!0,r)for(const V in r){const se=r[V],Q=je(se)?se.bind(t,t):je(se.get)?se.get.bind(t,t):Wn,j=!je(se)&&je(se.set)?se.set.bind(t):Wn,oe=Gm({get:Q,set:j});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>oe.value,set:ye=>oe.value=ye})}if(o)for(const V in o)Af(o[V],i,t,V);if(l){const V=je(l)?l.call(t):l;Reflect.ownKeys(V).forEach(se=>{kp(se,V[se])})}u&&au(u,n,"c");function te(V,se){Je(se)?se.forEach(Q=>V(Q.bind(t))):se&&V(se.bind(t))}if(te(Kp,f),te(Zp,d),te(Jp,h),te($p,v),te(Xp,b),te(Yp,g),te(nm,x),te(tm,A),te(em,D),te(Qp,y),te(Ef,S),te(jp,w),Je(L))if(L.length){const V=n.exposed||(n.exposed={});L.forEach(se=>{Object.defineProperty(V,se,{get:()=>t[se],set:Q=>t[se]=Q,enumerable:!0})})}else n.exposed||(n.exposed={});E&&n.render===Wn&&(n.render=E),F!=null&&(n.inheritAttrs=F),z&&(n.components=z),q&&(n.directives=q),w&&yf(n)}function am(n,e,t=Wn){Je(n)&&(n=ul(n));for(const i in n){const s=n[i];let r;St(s)?"default"in s?r=pa(s.from||i,s.default,!0):r=pa(s.from||i):r=pa(s),nn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function au(n,e,t){Dn(Je(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Af(n,e,t,i){let s=i.includes(".")?Mf(t,i):()=>t[i];if(Pt(n)){const r=e[n];je(r)&&uo(s,r)}else if(je(n))uo(s,n.bind(t));else if(St(n))if(Je(n))n.forEach(r=>Af(r,e,t,i));else{const r=je(n.handler)?n.handler.bind(t):e[n.handler];je(r)&&uo(s,r,n)}}function wf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Aa(l,c,a,!0)),Aa(l,e,a)),St(e)&&r.set(e,l),l}function Aa(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Aa(n,r,t,!0),s&&s.forEach(a=>Aa(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=om[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const om={data:ou,props:lu,emits:lu,methods:er,computed:er,beforeCreate:Qt,created:Qt,beforeMount:Qt,mounted:Qt,beforeUpdate:Qt,updated:Qt,beforeDestroy:Qt,beforeUnmount:Qt,destroyed:Qt,unmounted:Qt,activated:Qt,deactivated:Qt,errorCaptured:Qt,serverPrefetch:Qt,components:er,directives:er,watch:cm,provide:ou,inject:lm};function ou(n,e){return e?n?function(){return Jt(je(n)?n.call(this,this):n,je(e)?e.call(this,this):e)}:e:n}function lm(n,e){return er(ul(n),ul(e))}function ul(n){if(Je(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Qt(n,e){return n?[...new Set([].concat(n,e))]:e}function er(n,e){return n?Jt(Object.create(null),n,e):e}function lu(n,e){return n?Je(n)&&Je(e)?[...new Set([...n,...e])]:Jt(Object.create(null),ru(n),ru(e??{})):e}function cm(n,e){if(!n)return e;if(!e)return n;const t=Jt(Object.create(null),n);for(const i in e)t[i]=Qt(n[i],e[i]);return t}function Cf(){return{app:null,config:{isNativeTag:zd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let um=0;function dm(n,e){return function(i,s=null){je(i)||(i=Jt({},i)),s!=null&&!St(s)&&(s=null);const r=Cf(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:um++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Wm,get config(){return r.config},set config(u){},use(u,...f){return a.has(u)||(u&&je(u.install)?(a.add(u),u.install(c,...f)):je(u)&&(a.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||hi(i,s);return h.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(h,u,d),l=!0,c._container=u,u.__vue_app__=c,Qa(h.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Dn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Rs;Rs=c;try{return u()}finally{Rs=f}}};return c}}let Rs=null;const fm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${wn(e)}Modifiers`]||n[`${Bi(e)}Modifiers`];function hm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||bt;let s=t;const r=e.startsWith("update:"),a=r&&fm(i,e.slice(7));a&&(a.trim&&(s=t.map(u=>Pt(u)?u.trim():u)),a.number&&(s=t.map(Wa)));let o,l=i[o=ro(e)]||i[o=ro(wn(e))];!l&&r&&(l=i[o=ro(Bi(e))]),l&&Dn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Dn(c,n,6,s)}}const pm=new WeakMap;function Rf(n,e,t=!1){const i=t?pm:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!je(n)){const l=c=>{const u=Rf(c,e,!0);u&&(o=!0,Jt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(St(n)&&i.set(n,null),null):(Je(r)?r.forEach(l=>a[l]=null):Jt(a,r),St(n)&&i.set(n,a),a)}function Ja(n,e){return!n||!Va(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),mt(n,e[0].toLowerCase()+e.slice(1))||mt(n,Bi(e))||mt(n,e))}function cu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:v,inheritAttrs:b}=n,g=Ta(n);let p,y;try{if(t.shapeFlag&4){const S=s||i,E=S;p=kn(c.call(E,S,u,f,h,d,v)),y=o}else{const S=e;p=kn(S.length>1?S(f,{attrs:o,slots:a,emit:l}):S(f,null)),y=e.props?o:mm(o)}}catch(S){ji.length=0,qa(S,n,1),p=hi(Si)}let P=p;if(y&&b!==!1){const S=Object.keys(y),{shapeFlag:E}=P;S.length&&E&7&&(r&&S.some(za)&&(y=gm(y,r)),P=Is(P,y,!1,!0))}if(t.dirs&&(P=Is(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(t.dirs):t.dirs),t.transition){const S=Ka(P.type)&&bf(P)||P;_c(S,t.transition)}return p=P,Ta(g),p}const mm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Va(t))&&((e||(e={}))[t]=n[t]);return e},gm=(n,e)=>{const t={};for(const i in n)(!za(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function _m(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?uu(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(Pf(a,i,d)&&!Ja(c,d))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?uu(i,a,c):!0:!!a;return!1}function uu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Pf(e,n,r)&&!Ja(t,r))return!0}return!1}function Pf(n,e,t){const i=n[t],s=e[t];return t==="style"&&St(i)&&St(s)?!Ni(i,s):i!==s}function vm({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Df={},Lf=()=>Object.create(Df),If=n=>Object.getPrototypeOf(n)===Df;function xm(n,e,t,i=!1){const s={},r=Lf();n.propsDefaults=Object.create(null),Uf(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:wp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Sm(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=xt(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Ja(n.emitsOptions,d))continue;const h=e[d];if(l)if(mt(r,d))h!==r[d]&&(r[d]=h,c=!0);else{const v=wn(d);s[v]=dl(l,o,v,h,n,!1)}else h!==r[d]&&(r[d]=h,c=!0)}}}else{Uf(n,e,s,r)&&(c=!0);let u;for(const f in o)(!e||!mt(e,f)&&((u=Bi(f))===f||!mt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=dl(l,o,f,void 0,n,!0)):delete s[f]);if(r!==o)for(const f in r)(!e||!mt(e,f))&&(delete r[f],c=!0)}c&&li(n.attrs,"set","")}function Uf(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(ar(l))continue;const c=e[l];let u;s&&mt(s,u=wn(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:Ja(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=xt(t),c=o||bt;for(let u=0;u<r.length;u++){const f=r[u];t[f]=dl(s,l,f,c[f],n,!mt(c,f))}}return a}function dl(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=mt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&je(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Cr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===Bi(t))&&(i=!0))}return i}const Mm=new WeakMap;function Nf(n,e,t=!1){const i=t?Mm:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!je(n)){const u=f=>{l=!0;const[d,h]=Nf(f,e,!0);Jt(a,d),h&&o.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return St(n)&&i.set(n,As),As;if(Je(r))for(let u=0;u<r.length;u++){const f=wn(r[u]);du(f)&&(a[f]=bt)}else if(r)for(const u in r){const f=wn(u);if(du(f)){const d=r[u],h=a[f]=Je(d)||je(d)?{type:d}:Jt({},d),v=h.type;let b=!1,g=!0;if(Je(v))for(let p=0;p<v.length;++p){const y=v[p],P=je(y)&&y.name;if(P==="Boolean"){b=!0;break}else P==="String"&&(g=!1)}else b=je(v)&&v.name==="Boolean";h[0]=b,h[1]=g,(b||mt(h,"default"))&&o.push(f)}}const c=[a,o];return St(n)&&i.set(n,c),c}function du(n){return n[0]!=="$"&&!ar(n)}const xc=n=>n==="_"||n==="_ctx"||n==="$stable",Sc=n=>Je(n)?n.map(kn):[kn(n)],bm=(n,e,t)=>{if(e._n)return e;const i=Bp((...s)=>Sc(e(...s)),t);return i._c=!1,i},Ff=(n,e,t)=>{const i=n._ctx;for(const s in n){if(xc(s))continue;const r=n[s];if(je(r))e[s]=bm(s,r,i);else if(r!=null){const a=Sc(r);e[s]=()=>a}}},Of=(n,e)=>{const t=Sc(e);n.slots.default=()=>t},Bf=(n,e,t)=>{for(const i in e)(t||!xc(i))&&(n[i]=e[i])},ym=(n,e,t)=>{const i=n.slots=Lf();if(n.vnode.shapeFlag&32){const s=e._;s?(Bf(i,e,t),t&&qd(i,"_",s,!0)):Ff(e,i)}else e&&Of(n,e)},Tm=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=bt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:Bf(s,e,t):(r=!e.$stable,Ff(e,s)),a=e}else e&&(Of(n,e),a={default:1});if(r)for(const o in s)!xc(o)&&a[o]==null&&delete s[o]},on=Rm;function Em(n){return Am(n)}function Am(n,e){const t=Xa();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=Wn,insertStaticContent:v}=n,b=(C,I,G,ae=null,ne=null,J=null,he=void 0,ue=null,de=!!I.dynamicChildren)=>{if(C===I)return;C&&!zs(C,I)&&(ae=K(C),ye(C,ne,J,!0),C=null),I.patchFlag===-2&&(de=!1,I.dynamicChildren=null);const{type:ee,ref:xe,shapeFlag:R}=I;switch(ee){case $a:g(C,I,G,ae);break;case Si:p(C,I,G,ae);break;case mo:C==null&&y(I,G,ae,he);break;case ut:z(C,I,G,ae,ne,J,he,ue,de);break;default:R&1?E(C,I,G,ae,ne,J,he,ue,de):R&6?q(C,I,G,ae,ne,J,he,ue,de):(R&64||R&128)&&ee.process(C,I,G,ae,ne,J,he,ue,de,Xe)}xe!=null&&ne?cr(xe,C&&C.ref,J,I||C,!I):xe==null&&C&&C.ref!=null&&cr(C.ref,null,J,C,!0)},g=(C,I,G,ae)=>{if(C==null)i(I.el=o(I.children),G,ae);else{const ne=I.el=C.el;I.children!==C.children&&c(ne,I.children)}},p=(C,I,G,ae)=>{C==null?i(I.el=l(I.children||""),G,ae):I.el=C.el},y=(C,I,G,ae)=>{[C.el,C.anchor]=v(C.children,I,G,ae,C.el,C.anchor)},P=({el:C,anchor:I},G,ae)=>{let ne;for(;C&&C!==I;)ne=d(C),i(C,G,ae),C=ne;i(I,G,ae)},S=({el:C,anchor:I})=>{let G;for(;C&&C!==I;)G=d(C),s(C),C=G;s(I)},E=(C,I,G,ae,ne,J,he,ue,de)=>{if(I.type==="svg"?he="svg":I.type==="math"&&(he="mathml"),C==null)A(I,G,ae,ne,J,he,ue,de);else{const ee=C.el&&C.el._isVueCE?C.el:null;try{ee&&ee._beginPatch(),w(C,I,ne,J,he,ue,de)}finally{ee&&ee._endPatch()}}},A=(C,I,G,ae,ne,J,he,ue)=>{let de,ee;const{props:xe,shapeFlag:R,transition:we,dirs:Se}=C;if(de=C.el=a(C.type,J,xe&&xe.is,xe),R&8?u(de,C.children):R&16&&x(C.children,de,null,ae,ne,po(C,J),he,ue),Se&&Hi(C,null,ae,"created"),D(de,C,C.scopeId,he,ae),xe){for(const _ in xe)_!=="value"&&!ar(_)&&r(de,_,null,xe[_],J,ae);"value"in xe&&r(de,"value",null,xe.value,J),(ee=xe.onVnodeBeforeMount)&&Un(ee,ae,C)}Se&&Hi(C,null,ae,"beforeMount");const T=wm(ne,we);T&&we.beforeEnter(de),i(de,I,G),((ee=xe&&xe.onVnodeMounted)||T||Se)&&on(()=>{try{ee&&Un(ee,ae,C),T&&we.enter(de),Se&&Hi(C,null,ae,"mounted")}finally{}},ne)},D=(C,I,G,ae,ne)=>{if(G&&h(C,G),ae)for(let J=0;J<ae.length;J++)h(C,ae[J]);if(ne){let J=ne.subTree;if(I===J||zf(J.type)&&(J.ssContent===I||J.ssFallback===I)){const he=ne.vnode;D(C,he,he.scopeId,he.slotScopeIds,ne.parent)}}},x=(C,I,G,ae,ne,J,he,ue,de=0)=>{for(let ee=de;ee<C.length;ee++){const xe=C[ee]=ue?ai(C[ee]):kn(C[ee]);b(null,xe,I,G,ae,ne,J,he,ue)}},w=(C,I,G,ae,ne,J,he)=>{const ue=I.el=C.el;let{patchFlag:de,dynamicChildren:ee,dirs:xe}=I;de|=C.patchFlag&16;const R=C.props||bt,we=I.props||bt;let Se;if(G&&Vi(G,!1),(Se=we.onVnodeBeforeUpdate)&&Un(Se,G,I,C),xe&&Hi(I,C,G,"beforeUpdate"),G&&Vi(G,!0),ee&&(!C.dynamicChildren||C.dynamicChildren.length!==ee.length)&&(de=0,he=!1,ee=null),(R.innerHTML&&we.innerHTML==null||R.textContent&&we.textContent==null)&&u(ue,""),ee?L(C.dynamicChildren,ee,ue,G,ae,po(I,ne),J):he||se(C,I,ue,null,G,ae,po(I,ne),J,!1),de>0){if(de&16)F(ue,R,we,G,ne);else if(de&2&&R.class!==we.class&&r(ue,"class",null,we.class,ne),de&4&&r(ue,"style",R.style,we.style,ne),de&8){const T=I.dynamicProps;for(let _=0;_<T.length;_++){const U=T[_],H=R[U],Z=we[U];(Z!==H||U==="value")&&r(ue,U,H,Z,ne,G)}}de&1&&C.children!==I.children&&u(ue,I.children)}else!he&&ee==null&&F(ue,R,we,G,ne);((Se=we.onVnodeUpdated)||xe)&&on(()=>{Se&&Un(Se,G,I,C),xe&&Hi(I,C,G,"updated")},ae)},L=(C,I,G,ae,ne,J,he)=>{for(let ue=0;ue<I.length;ue++){const de=C[ue],ee=I[ue],xe=de.el&&(de.type===ut||!zs(de,ee)||de.shapeFlag&198)?f(de.el):G;b(de,ee,xe,null,ae,ne,J,he,!0)}},F=(C,I,G,ae,ne)=>{if(I!==G){if(I!==bt)for(const J in I)!ar(J)&&!(J in G)&&r(C,J,I[J],null,ne,ae);for(const J in G){if(ar(J))continue;const he=G[J],ue=I[J];he!==ue&&J!=="value"&&r(C,J,ue,he,ne,ae)}"value"in G&&r(C,"value",I.value,G.value,ne)}},z=(C,I,G,ae,ne,J,he,ue,de)=>{const ee=I.el=C?C.el:o(""),xe=I.anchor=C?C.anchor:o("");let{patchFlag:R,dynamicChildren:we,slotScopeIds:Se}=I;Se&&(ue=ue?ue.concat(Se):Se),C==null?(i(ee,G,ae),i(xe,G,ae),x(I.children||[],G,xe,ne,J,he,ue,de)):R>0&&R&64&&we&&C.dynamicChildren&&C.dynamicChildren.length===we.length?(L(C.dynamicChildren,we,G,ne,J,he,ue),(I.key!=null||ne&&I===ne.subTree)&&kf(C,I,!0)):se(C,I,G,xe,ne,J,he,ue,de)},q=(C,I,G,ae,ne,J,he,ue,de)=>{I.slotScopeIds=ue,C==null?I.shapeFlag&512?ne.ctx.activate(I,G,ae,he,de):B(I,G,ae,ne,J,he,de):W(C,I,de)},B=(C,I,G,ae,ne,J,he)=>{const ue=C.component=Fm(C,ae,ne);if(vc(C)&&(ue.ctx.renderer=Xe),Bm(ue,!1,he),ue.asyncDep){if(ne&&ne.registerDep(ue,te,he),!C.el){const de=ue.subTree=hi(Si);p(null,de,I,G),C.placeholder=de.el}}else te(ue,C,I,G,ne,J,he)},W=(C,I,G)=>{const ae=I.component=C.component;if(_m(C,I,G))if(ae.asyncDep&&!ae.asyncResolved){V(ae,I,G);return}else ae.next=I,ae.update();else I.el=C.el,ae.vnode=I},te=(C,I,G,ae,ne,J,he)=>{const ue=()=>{if(C.isMounted){let{next:R,bu:we,u:Se,parent:T,vnode:_}=C;{const ve=Hf(C);if(ve){R&&(R.el=_.el,V(C,R,he)),ve.asyncDep.then(()=>{on(()=>{C.isUnmounted||ee()},ne)});return}}let U=R,H;Vi(C,!1),R?(R.el=_.el,V(C,R,he)):R=_,we&&ha(we),(H=R.props&&R.props.onVnodeBeforeUpdate)&&Un(H,T,R,_),Vi(C,!0);const Z=cu(C),ge=C.subTree;C.subTree=Z,b(ge,Z,f(ge.el),K(ge),C,ne,J),R.el=Z.el,U===null&&vm(C,Z.el),Se&&on(Se,ne),(H=R.props&&R.props.onVnodeUpdated)&&on(()=>Un(H,T,R,_),ne)}else{let R;const{el:we,props:Se}=I,{bm:T,m:_,parent:U,root:H,type:Z}=C,ge=ur(I);Vi(C,!1),T&&ha(T),!ge&&(R=Se&&Se.onVnodeBeforeMount)&&Un(R,U,I),Vi(C,!0);{H.ce&&H.ce._hasShadowRoot()&&H.ce._injectChildStyle(Z,C.parent?C.parent.type:void 0);const ve=C.subTree=cu(C);b(null,ve,G,ae,C,ne,J),I.el=ve.el}if(_&&on(_,ne),!ge&&(R=Se&&Se.onVnodeMounted)){const ve=I;on(()=>Un(R,U,ve),ne)}(I.shapeFlag&256||U&&ur(U.vnode)&&U.vnode.shapeFlag&256)&&C.a&&on(C.a,ne),C.isMounted=!0,I=G=ae=null}};C.scope.on();const de=C.effect=new $d(ue);C.scope.off();const ee=C.update=de.run.bind(de),xe=C.job=de.runIfDirty.bind(de);xe.i=C,xe.id=C.uid,de.scheduler=()=>gc(xe),Vi(C,!0),ee()},V=(C,I,G)=>{I.component=C;const ae=C.vnode.props;C.vnode=I,C.next=null,Sm(C,I.props,ae,G),Tm(C,I.children,G),_i(),nu(C),vi()},se=(C,I,G,ae,ne,J,he,ue,de=!1)=>{const ee=C&&C.children,xe=C?C.shapeFlag:0,R=I.children,{patchFlag:we,shapeFlag:Se}=I;if(we>0){if(we&128){j(ee,R,G,ae,ne,J,he,ue,de);return}else if(we&256){Q(ee,R,G,ae,ne,J,he,ue,de);return}}Se&8?(xe&16&&ze(ee,ne,J),R!==ee&&u(G,R)):xe&16?Se&16?j(ee,R,G,ae,ne,J,he,ue,de):ze(ee,ne,J,!0):(xe&8&&u(G,""),Se&16&&x(R,G,ae,ne,J,he,ue,de))},Q=(C,I,G,ae,ne,J,he,ue,de)=>{C=C||As,I=I||As;const ee=C.length,xe=I.length,R=Math.min(ee,xe);let we;for(we=0;we<R;we++){const Se=I[we]=de?ai(I[we]):kn(I[we]);b(C[we],Se,G,null,ne,J,he,ue,de)}ee>xe?ze(C,ne,J,!0,!1,R):x(I,G,ae,ne,J,he,ue,de,R)},j=(C,I,G,ae,ne,J,he,ue,de)=>{let ee=0;const xe=I.length;let R=C.length-1,we=xe-1;for(;ee<=R&&ee<=we;){const Se=C[ee],T=I[ee]=de?ai(I[ee]):kn(I[ee]);if(zs(Se,T))b(Se,T,G,null,ne,J,he,ue,de);else break;ee++}for(;ee<=R&&ee<=we;){const Se=C[R],T=I[we]=de?ai(I[we]):kn(I[we]);if(zs(Se,T))b(Se,T,G,null,ne,J,he,ue,de);else break;R--,we--}if(ee>R){if(ee<=we){const Se=we+1,T=Se<xe?I[Se].el:ae;for(;ee<=we;)b(null,I[ee]=de?ai(I[ee]):kn(I[ee]),G,T,ne,J,he,ue,de),ee++}}else if(ee>we)for(;ee<=R;)ye(C[ee],ne,J,!0),ee++;else{const Se=ee,T=ee,_=new Map;for(ee=T;ee<=we;ee++){const _e=I[ee]=de?ai(I[ee]):kn(I[ee]);_e.key!=null&&_.set(_e.key,ee)}let U,H=0;const Z=we-T+1;let ge=!1,ve=0;const ie=new Array(Z);for(ee=0;ee<Z;ee++)ie[ee]=0;for(ee=Se;ee<=R;ee++){const _e=C[ee];if(H>=Z){ye(_e,ne,J,!0);continue}let Ue;if(_e.key!=null)Ue=_.get(_e.key);else for(U=T;U<=we;U++)if(ie[U-T]===0&&zs(_e,I[U])){Ue=U;break}Ue===void 0?ye(_e,ne,J,!0):(ie[Ue-T]=ee+1,Ue>=ve?ve=Ue:ge=!0,b(_e,I[Ue],G,null,ne,J,he,ue,de),H++)}const le=ge?Cm(ie):As;for(U=le.length-1,ee=Z-1;ee>=0;ee--){const _e=T+ee,Ue=I[_e],Te=I[_e+1],Me=_e+1<xe?Te.el||Vf(Te):ae;ie[ee]===0?b(null,Ue,G,Me,ne,J,he,ue,de):ge&&(U<0||ee!==le[U]?oe(Ue,G,Me,2):U--)}}},oe=(C,I,G,ae,ne=null)=>{const{el:J,type:he,transition:ue,children:de,shapeFlag:ee}=C;if(ee&6){oe(C.component.subTree,I,G,ae);return}if(ee&128){C.suspense.move(I,G,ae);return}if(ee&64){he.move(C,I,G,Xe);return}if(he===ut){i(J,I,G);for(let R=0;R<de.length;R++)oe(de[R],I,G,ae);i(C.anchor,I,G);return}if(he===mo){P(C,I,G);return}if(ae!==2&&ee&1&&ue)if(ae===0)ue.persisted&&!J[fo]?i(J,I,G):(ue.beforeEnter(J),i(J,I,G),on(()=>ue.enter(J),ne));else{const{leave:R,delayLeave:we,afterLeave:Se}=ue,T=()=>{C.ctx.isUnmounted?s(J):i(J,I,G)},_=()=>{const U=J._isLeaving||!!J[fo];J._isLeaving&&J[fo](!0),ue.persisted&&!U?T():R(J,()=>{T(),Se&&Se()})};we?we(J,T,_):_()}else i(J,I,G)},ye=(C,I,G,ae=!1,ne=!1)=>{const{type:J,props:he,ref:ue,children:de,dynamicChildren:ee,shapeFlag:xe,patchFlag:R,dirs:we,cacheIndex:Se,memo:T}=C;if(R===-2&&(ne=!1),ue!=null&&(_i(),cr(ue,null,G,C,!0),vi()),Se!=null&&(I.renderCache[Se]=void 0),xe&256){I.ctx.deactivate(C);return}const _=xe&1&&we,U=!ur(C);let H;if(U&&(H=he&&he.onVnodeBeforeUnmount)&&Un(H,I,C),xe&6)Ie(C.component,G,ae);else{if(xe&128){C.suspense.unmount(G,ae);return}_&&Hi(C,null,I,"beforeUnmount"),xe&64?C.type.remove(C,I,G,Xe,ae):ee&&!ee.hasOnce&&(J!==ut||R>0&&R&64)?ze(ee,I,G,!1,!0):(J===ut&&R&384||!ne&&xe&16)&&ze(de,I,G),ae&&Oe(C)}const Z=T!=null&&Se==null;(U&&(H=he&&he.onVnodeUnmounted)||_||Z)&&on(()=>{H&&Un(H,I,C),_&&Hi(C,null,I,"unmounted"),Z&&(C.el=null)},G)},Oe=C=>{const{type:I,el:G,anchor:ae,transition:ne}=C;if(I===ut){fe(G,ae);return}if(I===mo){S(C);return}const J=()=>{s(G),ne&&!ne.persisted&&ne.afterLeave&&ne.afterLeave()};if(C.shapeFlag&1&&ne&&!ne.persisted){const{leave:he,delayLeave:ue}=ne,de=()=>he(G,J);ue?ue(C.el,J,de):de()}else J()},fe=(C,I)=>{let G;for(;C!==I;)G=d(C),s(C),C=G;s(I)},Ie=(C,I,G)=>{const{bum:ae,scope:ne,job:J,subTree:he,um:ue,m:de,a:ee}=C;fu(de),fu(ee),ae&&ha(ae),ne.stop(),J&&(J.flags|=8,ye(he,C,I,G)),ue&&on(ue,I),on(()=>{C.isUnmounted=!0},I)},ze=(C,I,G,ae=!1,ne=!1,J=0)=>{for(let he=J;he<C.length;he++)ye(C[he],I,G,ae,ne)},K=C=>{if(C.shapeFlag&6)return K(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const I=d(C.anchor||C.el),G=I&&I[Gp];return G?d(G):I};let re=!1;const be=(C,I,G)=>{let ae;C==null?I._vnode&&(ye(I._vnode,null,null,!0),ae=I._vnode.component):b(I._vnode||null,C,I,null,null,null,G),I._vnode=C,re||(re=!0,nu(ae),_f(),re=!1)},Xe={p:b,um:ye,m:oe,r:Oe,mt:B,mc:x,pc:se,pbc:L,n:K,o:n};return{render:be,hydrate:void 0,createApp:dm(be)}}function po({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Vi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function wm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function kf(n,e,t=!1){const i=n.children,s=e.children;if(Je(i)&&Je(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=ai(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&kf(a,o)),o.type===$a&&(o.patchFlag===-1&&(o=s[r]=ai(o)),o.el=a.el),o.type===Si&&!o.el&&(o.el=a.el)}}function Cm(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function Hf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Hf(e)}function fu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Vf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Vf(e.subTree):null}const zf=n=>n.__isSuspense;function Rm(n,e){e&&e.pendingBranch?Je(n)?e.effects.push(...n):e.effects.push(n):Op(n)}const ut=Symbol.for("v-fgt"),$a=Symbol.for("v-txt"),Si=Symbol.for("v-cmt"),mo=Symbol.for("v-stc"),ji=[];let dn=null;function Be(n=!1){ji.push(dn=n?null:[])}function Gf(){ji.pop(),dn=ji[ji.length-1]||null}let xr=1;function hu(n,e=!1){xr+=n,n<0&&dn&&e&&(dn.hasOnce=!0)}function Wf(n){return n.dynamicChildren=xr>0?dn||As:null,Gf(),xr>0&&dn&&dn.push(n),n}function ke(n,e,t,i,s,r){return Wf(m(n,e,t,i,s,r,!0))}function Pm(n,e,t,i,s){return Wf(hi(n,e,t,i,s,!0))}function Xf(n){return n?n.__v_isVNode===!0:!1}function zs(n,e){return n.type===e.type&&n.key===e.key}const Yf=({key:n})=>n??null,ma=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Pt(n)||nn(n)||je(n)?{i:Sn,r:n,k:e,f:!!t}:n:null);function m(n,e=null,t=null,i=0,s=null,r=n===ut?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Yf(e),ref:e&&ma(e),scopeId:xf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Sn};return o?(wa(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Pt(t)?8:16),xr>0&&!a&&dn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&dn.push(l),l}const hi=Dm;function Dm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===im)&&(n=Si),Xf(n)){const o=Is(n,e,!0);return t&&wa(o,t),xr>0&&!r&&dn&&(o.shapeFlag&6?dn[dn.indexOf(n)]=o:dn.push(o)),o.patchFlag=-2,o}if(zm(n)&&(n=n.__vccOpts),e){e=Lm(e);let{class:o,style:l}=e;o&&!Pt(o)&&(e.class=wt(o)),St(l)&&(mc(l)&&!Je(l)&&(l=Jt({},l)),e.style=qt(l))}const a=Pt(n)?1:zf(n)?128:Ka(n)?64:St(n)?4:je(n)?2:0;return m(n,e,t,i,s,a,r,!0)}function Lm(n){return n?mc(n)||If(n)?Jt({},n):n:null}function Is(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?Im(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Yf(c),ref:e&&e.ref?t&&r?Je(r)?r.concat(ma(e)):[r,ma(e)]:ma(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ut?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Is(n.ssContent),ssFallback:n.ssFallback&&Is(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&_c(u,l.clone(u)),u}function it(n=" ",e=0){return hi($a,null,n,e)}function Ft(n="",e=!1){return e?(Be(),Pm(Si,null,n)):hi(Si,null,n)}function kn(n){return n==null||typeof n=="boolean"?hi(Si):Je(n)?hi(ut,null,n.slice()):Xf(n)?ai(n):hi($a,null,String(n))}function ai(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Is(n)}function wa(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Je(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),wa(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!If(e)?e._ctx=Sn:s===3&&Sn&&(Sn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(je(e)){if(i&65){wa(n,{default:e});return}e={default:e,_ctx:Sn},t=32}else e=String(e),i&64?(t=16,e=[it(e)]):t=8;n.children=e,n.shapeFlag|=t}function Im(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=wt([e.class,i.class]));else if(s==="style")e.style=qt([e.style,i.style]);else if(Va(s)){const r=e[s],a=i[s];a&&r!==a&&!(Je(r)&&r.includes(a))?e[s]=r?[].concat(r,a):a:a==null&&r==null&&!za(s)&&(e[s]=a)}else s!==""&&(e[s]=i[s])}return e}function Un(n,e,t,i=null){Dn(n,e,7,[t,i])}const Um=Cf();let Nm=0;function Fm(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Um,r={uid:Nm++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new lp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nf(i,s),emitsOptions:Rf(i,s),emit:null,emitted:null,propsDefaults:bt,inheritAttrs:i.inheritAttrs,ctx:bt,data:bt,props:bt,attrs:bt,slots:bt,refs:bt,setupState:bt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=hm.bind(null,r),n.ce&&n.ce(r),r}let tn=null;const Om=()=>tn||Sn;let Ca,Sr;{const n=Xa(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};Ca=e("__VUE_INSTANCE_SETTERS__",t=>tn=t),Sr=e("__VUE_SSR_SETTERS__",t=>Mr=t)}const Cr=n=>{const e=tn;return Ca(n),n.scope.on(),()=>{n.scope.off(),Ca(e)}},pu=()=>{tn&&tn.scope.off(),Ca(null)};function qf(n){return n.vnode.shapeFlag&4}let Mr=!1;function Bm(n,e=!1,t=!1){e&&Sr(e);const{props:i,children:s}=n.vnode,r=qf(n);xm(n,i,r,e),ym(n,s,t||e);const a=r?km(n,e):void 0;return e&&Sr(!1),a}function km(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,sm);const{setup:i}=t;if(i){_i();const s=n.setupContext=i.length>1?Vm(n):null,r=Cr(n),a=wr(i,n,0,[n.props,s]),o=Gd(a);if(vi(),r(),(o||n.sp)&&!ur(n)&&yf(n),o){if(a.then(pu,pu),e)return a.then(l=>{Sr(!0);try{mu(n,l,e)}finally{Sr(!1)}}).catch(l=>{qa(l,n,0)});n.asyncDep=a}else mu(n,a)}else Kf(n)}function mu(n,e,t){je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:St(e)&&(n.setupState=hf(e)),Kf(n)}function Kf(n,e,t){const i=n.type;n.render||(n.render=i.render||Wn);{const s=Cr(n);_i();try{rm(n)}finally{vi(),s()}}}const Hm={get(n,e){return Kt(n,"get",""),n[e]}};function Vm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Hm),slots:n.slots,emit:n.emit,expose:e}}function Qa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(hf(Cp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in dr)return dr[t](n)},has(e,t){return t in e||t in dr}})):n.proxy}function zm(n){return je(n)&&"__vccOpts"in n}const Gm=(n,e)=>Lp(n,e,Mr),Wm="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fl;const gu=typeof window<"u"&&window.trustedTypes;if(gu)try{fl=gu.createPolicy("vue",{createHTML:n=>n})}catch{}const Zf=fl?n=>fl.createHTML(n):n=>n,Xm="http://www.w3.org/2000/svg",Ym="http://www.w3.org/1998/Math/MathML",si=typeof document<"u"?document:null,_u=si&&si.createElement("template"),qm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?si.createElementNS(Xm,n):e==="mathml"?si.createElementNS(Ym,n):t?si.createElement(n,{is:t}):si.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>si.createTextNode(n),createComment:n=>si.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>si.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{_u.innerHTML=Zf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=_u.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Km=Symbol("_vtc");function Zm(n,e,t){const i=n[Km];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ra=Symbol("_vod"),Jf=Symbol("_vsh"),Jm={name:"show",beforeMount(n,{value:e},{transition:t}){n[Ra]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Gs(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Gs(n,!0),i.enter(n)):i.leave(n,()=>{Gs(n,!1)}):Gs(n,e))},beforeUnmount(n,{value:e}){Gs(n,e)}};function Gs(n,e){n.style.display=e?n[Ra]:"none",n[Jf]=!e}const $m=Symbol(""),Qm=/(?:^|;)\s*display\s*:/;function jm(n,e,t){const i=n.style,s=Pt(t);let r=!1;if(t&&!s){if(e)if(Pt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&tr(i,o,"")}else for(const a in e)t[a]==null&&tr(i,a,"");for(const a in t){a==="display"&&(r=!0);const o=t[a];o!=null?tg(n,a,!Pt(e)&&e?e[a]:void 0,o)||tr(i,a,o):tr(i,a,"")}}else if(s){if(e!==t){const a=i[$m];a&&(t+=";"+a),i.cssText=t,r=Qm.test(t)}}else e&&n.removeAttribute("style");Ra in n&&(n[Ra]=r?i.display:"",n[Jf]&&(i.display="none"))}const vu=/\s*!important$/;function tr(n,e,t){if(Je(t))t.forEach(i=>tr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=eg(n,e);vu.test(t)?n.setProperty(Bi(i),t.replace(vu,""),"important"):n[i]=t}}const xu=["Webkit","Moz","ms"],go={};function eg(n,e){const t=go[e];if(t)return t;let i=wn(e);if(i!=="filter"&&i in n)return go[e]=i;i=Yd(i);for(let s=0;s<xu.length;s++){const r=xu[s]+i;if(r in n)return go[e]=r}return e}function tg(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Pt(i)&&t===i}const Su="http://www.w3.org/1999/xlink";function Mu(n,e,t,i,s,r=ap(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Su,e.slice(6,e.length)):n.setAttributeNS(Su,e,t):t==null||r&&!Kd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Yn(t)?String(t):t)}function bu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Zf(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Kd(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function ui(n,e,t,i){n.addEventListener(e,t,i)}function ng(n,e,t,i){n.removeEventListener(e,t,i)}const yu=Symbol("_vei");function ig(n,e,t,i,s=null){const r=n[yu]||(n[yu]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=ag(e);if(i){const c=r[e]=cg(i,s);ui(n,o,c,l)}else a&&(ng(n,o,a,l),r[e]=void 0)}}const sg=/(Once|Passive|Capture)$/,rg=/^on:?(?:Once|Passive|Capture)$/;function ag(n){let e,t;for(;(t=n.match(sg))&&!rg.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Bi(n.slice(2)),e]}let _o=0;const og=Promise.resolve(),lg=()=>_o||(og.then(()=>_o=0),_o=Date.now());function cg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(Je(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const a=s.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&Dn(c,e,5,o)}}else Dn(s,e,5,[i])};return t.value=n,t.attached=lg(),t}const Tu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ug=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?Zm(n,i,a):e==="style"?jm(n,t,i):Va(e)?za(e)||ig(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dg(n,e,i,a))?(bu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Mu(n,e,i,a,r,e!=="value")):n._isVueCE&&(fg(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Pt(i)))?bu(n,wn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Mu(n,e,i,a))};function dg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Tu(e)&&je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Tu(e)&&Pt(t)?!1:e in n}function fg(n,e){const t=n._def.props;if(!t)return!1;const i=wn(e);return Array.isArray(t)?t.some(s=>wn(s)===i):Object.keys(t).some(s=>wn(s)===i)}const Oi=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Je(e)?t=>ha(e,t):e};function hg(n){n.target.composing=!0}function Eu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fn=Symbol("_assign"),Br=Symbol("_initialValue");function vo(n,e,t){return e&&(n=n.trim()),t&&(n=Wa(n)),n}const at={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n.parentNode&&(n.type==="text"?n[Br]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Br]=n.defaultValue.replace(/\r\n?/g,`
`))),n[fn]=Oi(s);const r=i||s.props&&s.props.type==="number";ui(n,e?"change":"input",a=>{a.target.composing||n[fn](vo(n.value,t,r))}),(t||r)&&ui(n,"change",()=>{n.value=vo(n.value,t,r)}),e||(ui(n,"compositionstart",hg),ui(n,"compositionend",Eu),ui(n,"change",Eu))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const s=e??"",r=n[Br];delete n[Br],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[fn](vo(n.value,t,i)):n.value=s},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},a){if(n[fn]=Oi(a),n.composing)return;const o=(r||n.type==="number")&&!/^0\d/.test(n.value)?Wa(n.value):n.value,l=e??"";if(o===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},pg={deep:!0,created(n,e,t){n[fn]=Oi(t),ui(n,"change",()=>{const i=n._modelValue,s=Us(n),r=n.checked,a=n[fn];if(Je(i)){const o=lc(i,s),l=o!==-1;if(r&&!l)a(i.concat(s));else if(!r&&l){const c=[...i];c.splice(o,1),a(c)}}else if(Os(i)){const o=new Set(i);r?o.add(s):o.delete(s),a(o)}else a($f(n,r))})},mounted:Au,beforeUpdate(n,e,t){n[fn]=Oi(t),Au(n,e,t)}};function Au(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(Je(e))s=lc(e,i.props.value)>-1;else if(Os(e))s=e.has(i.props.value);else{if(e===t)return;s=Ni(e,$f(n,!0))}n.checked!==s&&(n.checked=s)}const mg={created(n,{value:e},t){n.checked=Ni(e,t.props.value),n[fn]=Oi(t),ui(n,"change",()=>{n[fn](Us(n))})},beforeUpdate(n,{value:e,oldValue:t},i){n[fn]=Oi(i),e!==t&&(n.checked=Ni(e,i.props.value))}},gg={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,ui(n,"change",()=>{const s=Array.prototype.filter.call(n.options,r=>r.selected).map(r=>t?Wa(Us(r)):Us(r));n[fn](n.multiple?Os(n._modelValue)?new Set(s):s:s[0]),n._assigning=!0,mf(()=>{n._assigning=!1})}),n[fn]=Oi(i)},mounted(n,{value:e}){wu(n,e)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[fn]=Oi(t)},updated(n,{value:e}){n._assigning||wu(n,e)}};function wu(n,e){const t=n.multiple,i=Je(e);if(!(t&&!i&&!Os(e))){for(let s=0,r=n.options.length;s<r;s++){const a=n.options[s],o=Us(a);if(t)if(i){const l=typeof o;l==="string"||l==="number"?a.selected=e.some(c=>String(c)===String(o)):a.selected=lc(e,o)>-1}else a.selected=e.has(o);else if(Ni(Us(a),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Us(n){return"_value"in n?n._value:n.value}function $f(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const _g={created(n,e,t){kr(n,e,t,null,"created")},mounted(n,e,t){kr(n,e,t,null,"mounted")},beforeUpdate(n,e,t,i){kr(n,e,t,i,"beforeUpdate")},updated(n,e,t,i){kr(n,e,t,i,"updated")}};function vg(n,e){switch(n){case"SELECT":return gg;case"TEXTAREA":return at;default:switch(e){case"checkbox":return pg;case"radio":return mg;default:return at}}}function kr(n,e,t,i,s){const a=vg(n.tagName,t.props&&t.props.type)[s];a&&a(n,e,t,i)}const xg=["ctrl","shift","alt","meta"],Sg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>xg.some(t=>n[`${t}Key`]&&!e.includes(t))},vt=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let a=0;a<e.length;a++){const o=Sg[e[a]];if(o&&o(s,e))return}return n(s,...r)})},Mg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ut=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=s=>{if(!("key"in s))return;const r=Bi(s.key);if(e.some(a=>a===r||Mg[a]===r))return n(s)})},bg=Jt({patchProp:ug},qm);let Cu;function yg(){return Cu||(Cu=Em(bg))}const Tg=(...n)=>{const e=yg().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Ag(i);if(!s)return;const r=e._component;!je(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Eg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Eg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Ag(n){return Pt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mc="186",wg=0,Ru=1,Cg=2,ga=1,Rg=2,nr=3,es=0,ln=1,di=2,pi=0,fr=1,ri=2,Pu=3,Du=4,Pg=5,bs=100,Dg=101,Lg=102,Ig=103,Ug=104,Ng=200,Fg=201,Og=202,Bg=203,Qf=204,jf=205,kg=206,Hg=207,Vg=208,zg=209,Gg=210,Wg=211,Xg=212,Yg=213,qg=214,hl=0,pl=1,ml=2,br=3,gl=4,_l=5,vl=6,xl=7,eh=0,Kg=1,Zg=2,Xn=0,th=1,nh=2,ih=3,sh=4,rh=5,ah=6,oh=7,lh=300,ts=301,Ns=302,xo=303,So=304,ja=306,Sl=1e3,fi=1001,Ml=1002,Vt=1003,Jg=1004,Hr=1005,Zt=1006,Mo=1007,Zi=1008,xn=1009,ch=1010,uh=1011,yr=1012,bc=1013,qn=1014,zn=1015,Kn=1016,yc=1017,Tc=1018,Tr=1020,dh=35902,fh=35899,hh=1021,ph=1022,An=1023,Mi=1026,Ji=1027,mh=1028,Ec=1029,ns=1030,Ac=1031,wc=1033,_a=33776,va=33777,xa=33778,Sa=33779,bl=35840,yl=35841,Tl=35842,El=35843,Al=36196,wl=37492,Cl=37496,Rl=37488,Pl=37489,Pa=37490,Dl=37491,Ll=37808,Il=37809,Ul=37810,Nl=37811,Fl=37812,Ol=37813,Bl=37814,kl=37815,Hl=37816,Vl=37817,zl=37818,Gl=37819,Wl=37820,Xl=37821,Yl=36492,ql=36494,Kl=36495,Zl=36283,Jl=36284,Da=36285,$l=36286,$g=3200,Lu=0,Qg=1,Ui="",_n="srgb",La="srgb-linear",Ia="linear",gt="srgb",bo=7680,jg=519,e0=512,t0=513,n0=514,Cc=515,i0=516,s0=517,Rc=518,r0=519,a0=35044,Iu="300 es",Gn=2e3,Ua=2001;function o0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Na(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function l0(){const n=Na("canvas");return n.style.display="block",n}const Uu={};function Nu(...n){const e="THREE."+n.shift();console.log(e,...n)}function gh(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ze(...n){n=gh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function dt(...n){n=gh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ps(...n){const e=n.join(" ");e in Uu||(Uu[e]=!0,Ze(...n))}function c0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const u0={[hl]:pl,[ml]:vl,[gl]:xl,[br]:_l,[pl]:hl,[vl]:ml,[xl]:gl,[_l]:br};class ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yo=Math.PI/180,Ql=180/Math.PI;function Rr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function st(n,e,t){return Math.max(e,Math.min(t,n))}function d0(n,e){return(n%e+e)%e}function To(n,e,t){return(1-t)*n+t*e}function Ws(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function an(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Oc=class Oc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Oc.prototype.isVector2=!0;let lt=Oc;class Bs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],d=r[a+0],h=r[a+1],v=r[a+2],b=r[a+3];if(f!==b||l!==d||c!==h||u!==v){let g=l*d+c*h+u*v+f*b;g<0&&(d=-d,h=-h,v=-v,b=-b,g=-g);let p=1-o;if(g<.9995){const y=Math.acos(g),P=Math.sin(y);p=Math.sin(p*y)/P,o=Math.sin(o*y)/P,l=l*p+d*o,c=c*p+h*o,u=u*p+v*o,f=f*p+b*o}else{l=l*p+d*o,c=c*p+h*o,u=u*p+v*o,f=f*p+b*o;const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],d=r[a+1],h=r[a+2],v=r[a+3];return e[t]=o*v+u*f+l*h-c*d,e[t+1]=l*v+u*d+c*f-o*h,e[t+2]=c*v+u*h+o*d-l*f,e[t+3]=u*v-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),d=l(i/2),h=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*h*v,this._y=c*h*f-d*u*v,this._z=c*u*v+d*h*f,this._w=c*u*f-d*h*v;break;case"YXZ":this._x=d*u*f+c*h*v,this._y=c*h*f-d*u*v,this._z=c*u*v-d*h*f,this._w=c*u*f+d*h*v;break;case"ZXY":this._x=d*u*f-c*h*v,this._y=c*h*f+d*u*v,this._z=c*u*v+d*h*f,this._w=c*u*f-d*h*v;break;case"ZYX":this._x=d*u*f-c*h*v,this._y=c*h*f+d*u*v,this._z=c*u*v-d*h*f,this._w=c*u*f+d*h*v;break;case"YZX":this._x=d*u*f+c*h*v,this._y=c*h*f+d*u*v,this._z=c*u*v-d*h*f,this._w=c*u*f-d*h*v;break;case"XZY":this._x=d*u*f-c*h*v,this._y=c*h*f-d*u*v,this._z=c*u*v+d*h*f,this._w=c*u*f+d*h*v;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(a-s)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(r-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(a-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bc=class Bc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eo.copy(this).projectOnVector(e),this.sub(Eo)}reflect(e){return this.sub(Eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bc.prototype.isVector3=!0;let k=Bc;const Eo=new k,Fu=new Bs,kc=class kc{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],v=i[8],b=s[0],g=s[3],p=s[6],y=s[1],P=s[4],S=s[7],E=s[2],A=s[5],D=s[8];return r[0]=a*b+o*y+l*E,r[3]=a*g+o*P+l*A,r[6]=a*p+o*S+l*D,r[1]=c*b+u*y+f*E,r[4]=c*g+u*P+f*A,r[7]=c*p+u*S+f*D,r[2]=d*b+h*y+v*E,r[5]=d*g+h*P+v*A,r[8]=d*p+h*S+v*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*r,h=c*r-a*l,v=t*f+i*d+s*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/v;return e[0]=f*b,e[1]=(s*c-u*i)*b,e[2]=(o*i-s*a)*b,e[3]=d*b,e[4]=(u*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=h*b,e[7]=(i*l-c*t)*b,e[8]=(a*t-i*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ao.makeScale(e,t)),this}rotate(e){return Ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ao.makeRotation(-e)),this}translate(e,t){return Ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};kc.prototype.isMatrix3=!0;let $e=kc;const Ao=new $e,Ou=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bu=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function f0(){const n={enabled:!0,workingColorSpace:La,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===gt&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(s.r=Ds(s.r),s.g=Ds(s.g),s.b=Ds(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ui?Ia:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[La]:{primaries:e,whitePoint:i,transfer:Ia,toXYZ:Ou,fromXYZ:Bu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:Ou,fromXYZ:Bu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),n}const ot=f0();function mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ds(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ls;class h0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ls===void 0&&(ls=Na("canvas")),ls.width=e.width,ls.height=e.height;const s=ls.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ls}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Na("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=mi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mi(t[i]/255)*255):t[i]=mi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let p0=0;class Pc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Rr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wo(s[a].image)):r.push(wo(s[a]))}else r=wo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function wo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?h0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}let m0=0;const Co=new k;class sn extends ss{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,i=fi,s=fi,r=Zt,a=Zi,o=An,l=xn,c=sn.DEFAULT_ANISOTROPY,u=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=Rr(),this.name="",this.source=new Pc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Co).x}get height(){return this.source.getSize(Co).y}get depth(){return this.source.getSize(Co).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sl:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case Ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sl:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case Ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=lh;sn.DEFAULT_ANISOTROPY=1;const Hc=class Hc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],v=l[9],b=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-b)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+b)<.1&&Math.abs(v+g)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(c+1)/2,S=(h+1)/2,E=(p+1)/2,A=(u+d)/4,D=(f+b)/4,x=(v+g)/4;return P>S&&P>E?P<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(P),s=A/i,r=D/i):S>E?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=A/s,r=x/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=D/r,s=x/r),this.set(i,s,r,t),this}let y=Math.sqrt((g-v)*(g-v)+(f-b)*(f-b)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(g-v)/y,this.y=(f-b)/y,this.z=(d-u)/y,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hc.prototype.isVector4=!0;let Rt=Hc;class g0 extends ss{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new sn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Pc(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends g0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class _h extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _0 extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ha=class Ha{constructor(e,t,i,s,r,a,o,l,c,u,f,d,h,v,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,f,d,h,v,b,g)}set(e,t,i,s,r,a,o,l,c,u,f,d,h,v,b,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=v,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ha().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/cs.setFromMatrixColumn(e,0).length(),r=1/cs.setFromMatrixColumn(e,1).length(),a=1/cs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*u,h=a*f,v=o*u,b=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+v*c,t[5]=d-b*c,t[9]=-o*l,t[2]=b-d*c,t[6]=v+h*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,v=c*u,b=c*f;t[0]=d+b*o,t[4]=v*o-h,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-v,t[6]=b+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,v=c*u,b=c*f;t[0]=d-b*o,t[4]=-a*f,t[8]=v+h*o,t[1]=h+v*o,t[5]=a*u,t[9]=b-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,h=a*f,v=o*u,b=o*f;t[0]=l*u,t[4]=v*c-h,t[8]=d*c+b,t[1]=l*f,t[5]=b*c+d,t[9]=h*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*c,v=o*l,b=o*c;t[0]=l*u,t[4]=b-d*f,t[8]=v*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*f+v,t[10]=d-b*f}else if(e.order==="XZY"){const d=a*l,h=a*c,v=o*l,b=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+b,t[5]=a*u,t[9]=h*f-v,t[2]=v*f-h,t[6]=o*u,t[10]=b*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v0,e,x0)}lookAt(e,t,i){const s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Ai.crossVectors(i,cn),Ai.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Ai.crossVectors(i,cn)),Ai.normalize(),Vr.crossVectors(cn,Ai),s[0]=Ai.x,s[4]=Vr.x,s[8]=cn.x,s[1]=Ai.y,s[5]=Vr.y,s[9]=cn.y,s[2]=Ai.z,s[6]=Vr.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],v=i[2],b=i[6],g=i[10],p=i[14],y=i[3],P=i[7],S=i[11],E=i[15],A=s[0],D=s[4],x=s[8],w=s[12],L=s[1],F=s[5],z=s[9],q=s[13],B=s[2],W=s[6],te=s[10],V=s[14],se=s[3],Q=s[7],j=s[11],oe=s[15];return r[0]=a*A+o*L+l*B+c*se,r[4]=a*D+o*F+l*W+c*Q,r[8]=a*x+o*z+l*te+c*j,r[12]=a*w+o*q+l*V+c*oe,r[1]=u*A+f*L+d*B+h*se,r[5]=u*D+f*F+d*W+h*Q,r[9]=u*x+f*z+d*te+h*j,r[13]=u*w+f*q+d*V+h*oe,r[2]=v*A+b*L+g*B+p*se,r[6]=v*D+b*F+g*W+p*Q,r[10]=v*x+b*z+g*te+p*j,r[14]=v*w+b*q+g*V+p*oe,r[3]=y*A+P*L+S*B+E*se,r[7]=y*D+P*F+S*W+E*Q,r[11]=y*x+P*z+S*te+E*j,r[15]=y*w+P*q+S*V+E*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],v=e[3],b=e[7],g=e[11],p=e[15],y=l*h-c*d,P=o*h-c*f,S=o*d-l*f,E=a*h-c*u,A=a*d-l*u,D=a*f-o*u;return t*(b*y-g*P+p*S)-i*(v*y-g*E+p*A)+s*(v*P-b*E+p*D)-r*(v*S-b*A+g*D)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],v=e[12],b=e[13],g=e[14],p=e[15],y=t*o-i*a,P=t*l-s*a,S=t*c-r*a,E=i*l-s*o,A=i*c-r*o,D=s*c-r*l,x=u*b-f*v,w=u*g-d*v,L=u*p-h*v,F=f*g-d*b,z=f*p-h*b,q=d*p-h*g,B=y*q-P*z+S*F+E*L-A*w+D*x;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/B;return e[0]=(o*q-l*z+c*F)*W,e[1]=(s*z-i*q-r*F)*W,e[2]=(b*D-g*A+p*E)*W,e[3]=(d*A-f*D-h*E)*W,e[4]=(l*L-a*q-c*w)*W,e[5]=(t*q-s*L+r*w)*W,e[6]=(g*S-v*D-p*P)*W,e[7]=(u*D-d*S+h*P)*W,e[8]=(a*z-o*L+c*x)*W,e[9]=(i*L-t*z-r*x)*W,e[10]=(v*A-b*S+p*y)*W,e[11]=(f*S-u*A-h*y)*W,e[12]=(o*w-a*F-l*x)*W,e[13]=(t*F-i*w+s*x)*W,e[14]=(b*P-v*E-g*y)*W,e[15]=(u*E-f*P+d*y)*W,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,d=r*c,h=r*u,v=r*f,b=a*u,g=a*f,p=o*f,y=l*c,P=l*u,S=l*f,E=i.x,A=i.y,D=i.z;return s[0]=(1-(b+p))*E,s[1]=(h+S)*E,s[2]=(v-P)*E,s[3]=0,s[4]=(h-S)*A,s[5]=(1-(d+p))*A,s[6]=(g+y)*A,s[7]=0,s[8]=(v+P)*D,s[9]=(g-y)*D,s[10]=(1-(d+b))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=cs.set(s[0],s[1],s[2]).length();const o=cs.set(s[4],s[5],s[6]).length(),l=cs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),bn.copy(this);const c=1/a,u=1/o,f=1/l;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,t.setFromRotationMatrix(bn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Gn,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s);let v,b;if(l)v=r/(a-r),b=a*r/(a-r);else if(o===Gn)v=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Ua)v=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Gn,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-s),d=-(t+e)/(t-e),h=-(i+s)/(i-s);let v,b;if(l)v=1/(a-r),b=a/(a-r);else if(o===Gn)v=-2/(a-r),b=-(a+r)/(a-r);else if(o===Ua)v=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ha.prototype.isMatrix4=!0;let Ct=Ha;const cs=new k,bn=new Ct,v0=new k(0,0,0),x0=new k(1,1,1),Ai=new k,Vr=new k,cn=new k,ku=new Ct,Hu=new Bs;class is{constructor(e=0,t=0,i=0,s=is.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-st(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ku.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ku,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hu.setFromEuler(this),this.setFromQuaternion(Hu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}is.DEFAULT_ORDER="XYZ";class vh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let S0=0;const Vu=new k,us=new Bs,$n=new Ct,zr=new k,Xs=new k,M0=new k,b0=new Bs,zu=new k(1,0,0),Gu=new k(0,1,0),Wu=new k(0,0,1),Xu={type:"added"},y0={type:"removed"},ds={type:"childadded",child:null},Ro={type:"childremoved",child:null};class rn extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new k,t=new is,i=new Bs,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new $e}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(zu,e)}rotateY(e){return this.rotateOnAxis(Gu,e)}rotateZ(e){return this.rotateOnAxis(Wu,e)}translateOnAxis(e,t){return Vu.copy(e).applyQuaternion(this.quaternion),this.position.add(Vu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zu,e)}translateY(e){return this.translateOnAxis(Gu,e)}translateZ(e){return this.translateOnAxis(Wu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zr.copy(e):zr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Xs,zr,this.up):$n.lookAt(zr,Xs,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),us.setFromRotationMatrix($n),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xu),ds.child=e,this.dispatchEvent(ds),ds.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(y0),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xu),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,M0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,b0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),v.length>0&&(i.nodes=v)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}rn.DEFAULT_UP=new k(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gr extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T0={type:"move"};class Po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const b of e.hand.values()){const g=t.getJointPose(b,i),p=this._getHandJoint(c,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,v=.005;c.inputState.pinching&&d>h+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(T0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Gr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function Do(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ft{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ot.workingColorSpace){if(e=d0(e,1),t=st(t,0,1),i=st(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Do(a,r,e+1/3),this.g=Do(a,r,e),this.b=Do(a,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=_n){function i(r){r!==void 0&&parseFloat(r)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_n){const i=xh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return ot.workingToColorSpace(Yt.copy(this),e),Math.round(st(Yt.r*255,0,255))*65536+Math.round(st(Yt.g*255,0,255))*256+Math.round(st(Yt.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(Yt.copy(this),t);const i=Yt.r,s=Yt.g,r=Yt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=_n){ot.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,i=Yt.g,s=Yt.b;return e!==_n?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(Wr);const i=To(wi.h,Wr.h,t),s=To(wi.s,Wr.s,t),r=To(wi.l,Wr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new ft;ft.NAMES=xh;class E0 extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new is,this.environmentIntensity=1,this.environmentRotation=new is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const yn=new k,Qn=new k,Lo=new k,jn=new k,fs=new k,hs=new k,Yu=new k,Io=new k,Uo=new k,No=new k,Fo=new Rt,Oo=new Rt,Bo=new Rt;class En{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),yn.subVectors(e,t),s.cross(yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){yn.subVectors(s,t),Qn.subVectors(i,t),Lo.subVectors(e,t);const a=yn.dot(yn),o=yn.dot(Qn),l=yn.dot(Lo),c=Qn.dot(Qn),u=Qn.dot(Lo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,h=(c*l-o*u)*d,v=(a*u-o*l)*d;return r.set(1-h-v,v,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(a,jn.y),l.addScaledVector(o,jn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Fo.setScalar(0),Oo.setScalar(0),Bo.setScalar(0),Fo.fromBufferAttribute(e,t),Oo.fromBufferAttribute(e,i),Bo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Fo,r.x),a.addScaledVector(Oo,r.y),a.addScaledVector(Bo,r.z),a}static isFrontFacing(e,t,i,s){return yn.subVectors(i,t),Qn.subVectors(e,t),yn.cross(Qn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),yn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return En.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;fs.subVectors(s,i),hs.subVectors(r,i),Io.subVectors(e,i);const l=fs.dot(Io),c=hs.dot(Io);if(l<=0&&c<=0)return t.copy(i);Uo.subVectors(e,s);const u=fs.dot(Uo),f=hs.dot(Uo);if(u>=0&&f<=u)return t.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(fs,a);No.subVectors(e,r);const h=fs.dot(No),v=hs.dot(No);if(v>=0&&h<=v)return t.copy(r);const b=h*c-l*v;if(b<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(hs,o);const g=u*v-h*f;if(g<=0&&f-u>=0&&h-v>=0)return Yu.subVectors(r,s),o=(f-u)/(f-u+(h-v)),t.copy(s).addScaledVector(Yu,o);const p=1/(g+b+d);return a=b*p,o=d*p,t.copy(i).addScaledVector(fs,a).addScaledVector(hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Pr{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xr.copy(i.boundingBox)),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),Yr.subVectors(this.max,Ys),ps.subVectors(e.a,Ys),ms.subVectors(e.b,Ys),gs.subVectors(e.c,Ys),Ci.subVectors(ms,ps),Ri.subVectors(gs,ms),zi.subVectors(ps,gs);let t=[0,-Ci.z,Ci.y,0,-Ri.z,Ri.y,0,-zi.z,zi.y,Ci.z,0,-Ci.x,Ri.z,0,-Ri.x,zi.z,0,-zi.x,-Ci.y,Ci.x,0,-Ri.y,Ri.x,0,-zi.y,zi.x,0];return!ko(t,ps,ms,gs,Yr)||(t=[1,0,0,0,1,0,0,0,1],!ko(t,ps,ms,gs,Yr))?!1:(qr.crossVectors(Ci,Ri),t=[qr.x,qr.y,qr.z],ko(t,ps,ms,gs,Yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ei=[new k,new k,new k,new k,new k,new k,new k,new k],Tn=new k,Xr=new Pr,ps=new k,ms=new k,gs=new k,Ci=new k,Ri=new k,zi=new k,Ys=new k,Yr=new k,qr=new k,Gi=new k;function ko(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Gi.fromArray(n,r);const o=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),l=e.dot(Gi),c=t.dot(Gi),u=i.dot(Gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Nt=new k,Kr=new lt;let A0=0;class gi extends ss{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:A0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=a0,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ws(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),s=an(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Sh extends gi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Mh extends gi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Dt extends gi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const w0=new Pr,qs=new k,Ho=new k;class Dr{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):w0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);const t=qs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(qs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ho.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(Ho)),this.expandByPoint(qs.copy(e.center).sub(Ho))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let C0=0;const mn=new Ct,Vo=new rn,_s=new k,un=new Pr,Ks=new Pr,kt=new k;class zt extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(o0(e)?Mh:Sh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new $e().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,i){return mn.makeTranslation(e,t,i),this.applyMatrix4(mn),this}scale(e,t,i){return mn.makeScale(e,t,i),this.applyMatrix4(mn),this}lookAt(e){return Vo.lookAt(e),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Dt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];un.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ks.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(un.min,Ks.min),un.expandByPoint(kt),kt.addVectors(un.max,Ks.max),un.expandByPoint(kt)):(un.expandByPoint(Ks.min),un.expandByPoint(Ks.max))}un.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(kt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)kt.fromBufferAttribute(o,c),l&&(_s.fromBufferAttribute(e,c),kt.add(_s)),s=Math.max(s,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new gi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new k,l[x]=new k;const c=new k,u=new k,f=new k,d=new lt,h=new lt,v=new lt,b=new k,g=new k;function p(x,w,L){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,L),d.fromBufferAttribute(r,x),h.fromBufferAttribute(r,w),v.fromBufferAttribute(r,L),u.sub(c),f.sub(c),h.sub(d),v.sub(d);const F=1/(h.x*v.y-v.x*h.y);isFinite(F)&&(b.copy(u).multiplyScalar(v.y).addScaledVector(f,-h.y).multiplyScalar(F),g.copy(f).multiplyScalar(h.x).addScaledVector(u,-v.x).multiplyScalar(F),o[x].add(b),o[w].add(b),o[L].add(b),l[x].add(g),l[w].add(g),l[L].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,w=y.length;x<w;++x){const L=y[x],F=L.start,z=L.count;for(let q=F,B=F+z;q<B;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const P=new k,S=new k,E=new k,A=new k;function D(x){E.fromBufferAttribute(s,x),A.copy(E);const w=o[x];P.copy(w),P.sub(E.multiplyScalar(E.dot(w))).normalize(),S.crossVectors(A,w);const F=S.dot(l[x])<0?-1:1;a.setXYZW(x,P.x,P.y,P.z,F)}for(let x=0,w=y.length;x<w;++x){const L=y[x],F=L.start,z=L.count;for(let q=F,B=F+z;q<B;q+=3)D(e.getX(q+0)),D(e.getX(q+1)),D(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new gi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let d=0,h=e.count;d<h;d+=3){const v=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,v=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?h=l[b]*o.data.stride+o.offset:h=l[b]*u;for(let p=0;p<u;p++)d[v++]=c[h++]}return new gi(d,u,f)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zo=new k,R0=new k,P0=new $e;class Li{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=zo.subVectors(i,t).cross(R0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(zo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||P0.getNormalMatrix(e),s=this.coplanarPoint(zo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let D0=0;class ks extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Rr(),this.name="",this.type="Material",this.blending=fr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qf,this.blendDst=jf,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bo,this.stencilZFail=bo,this.stencilZPass=bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ft().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Li().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new lt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ti=new k,Go=new k,Zr=new k,Jr=new k;class Dc{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Go.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),Jr.copy(this.origin).sub(Go);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Zr),o=Jr.dot(this.direction),l=-Jr.dot(Zr),c=Jr.lengthSq(),u=Math.abs(1-a*a);let f,d,h,v;if(u>0)if(f=a*l-o,d=a*o-l,v=r*u,f>=0)if(d>=-v)if(d<=v){const b=1/u;f*=b,d*=b,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Go).addScaledVector(Zr,d),h}intersectSphere(e,t){if(e.radius<0)return null;ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),s=ti.dot(ti)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,d=e.y-a.y,h=e.z-a.z,v=t.x-a.x,b=t.y-a.y,g=t.z-a.z,p=i.x-a.x,y=i.y-a.y,P=i.z-a.z,S=Math.abs(l),E=Math.abs(c),A=Math.abs(u);let D,x,w,L,F,z,q,B,W,te,V,se;if(S>=E&&S>=A?(w=l,z=f,W=v,se=p,l>=0?(D=c,x=u,L=d,F=h,q=b,B=g,te=y,V=P):(D=u,x=c,L=h,F=d,q=g,B=b,te=P,V=y)):E>=A?(w=c,z=d,W=b,se=y,c>=0?(D=u,x=l,L=h,F=f,q=g,B=v,te=P,V=p):(D=l,x=u,L=f,F=h,q=v,B=g,te=p,V=P)):(w=u,z=h,W=g,se=P,u>=0?(D=l,x=c,L=f,F=d,q=v,B=b,te=p,V=y):(D=c,x=l,L=d,F=f,q=b,B=v,te=y,V=p)),w===0)return null;const Q=D/w,j=x/w,oe=1/w,ye=L-Q*z,Oe=F-j*z,fe=q-Q*W,Ie=B-j*W,ze=te-Q*se,K=V-j*se,re=ze*Ie-K*fe,be=ye*K-Oe*ze,Xe=fe*Oe-Ie*ye;if(s){if(re<0||be<0||Xe<0)return null}else if((re<0||be<0||Xe<0)&&(re>0||be>0||Xe>0))return null;const Pe=re+be+Xe;if(Pe===0)return null;const C=oe*(re*z+be*W+Xe*se);return(Pe>0?C<0:C>0)?null:this.at(C/Pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hr extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.combine=eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qu=new Ct,Wi=new Dc,$r=new Dr,Ku=new k,Qr=new k,jr=new k,ea=new k,Wo=new k,ta=new k,Zu=new k,na=new k;class hn extends rn{constructor(e=new zt,t=new hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Wo.fromBufferAttribute(f,e),a?ta.addScaledVector(Wo,u):ta.addScaledVector(Wo.sub(t),u))}t.add(ta)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(r),Wi.copy(e.ray).recast(e.near),!($r.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere($r,Ku)===null||Wi.origin.distanceToSquared(Ku)>(e.far-e.near)**2))&&(qu.copy(r).invert(),Wi.copy(e.ray).applyMatrix4(qu),!(i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,b=d.length;v<b;v++){const g=d[v],p=a[g.materialIndex],y=Math.max(g.start,h.start),P=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let S=y,E=P;S<E;S+=3){const A=o.getX(S),D=o.getX(S+1),x=o.getX(S+2);s=ia(this,p,e,i,c,u,f,A,D,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,h.start),b=Math.min(o.count,h.start+h.count);for(let g=v,p=b;g<p;g+=3){const y=o.getX(g),P=o.getX(g+1),S=o.getX(g+2);s=ia(this,a,e,i,c,u,f,y,P,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,b=d.length;v<b;v++){const g=d[v],p=a[g.materialIndex],y=Math.max(g.start,h.start),P=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let S=y,E=P;S<E;S+=3){const A=S,D=S+1,x=S+2;s=ia(this,p,e,i,c,u,f,A,D,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,h.start),b=Math.min(l.count,h.start+h.count);for(let g=v,p=b;g<p;g+=3){const y=g,P=g+1,S=g+2;s=ia(this,a,e,i,c,u,f,y,P,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function L0(n,e,t,i,s,r,a,o){let l;if(e.side===ln?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===es,o),l===null)return null;na.copy(o),na.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(na);return c<t.near||c>t.far?null:{distance:c,point:na.clone(),object:n}}function ia(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Qr),n.getVertexPosition(l,jr),n.getVertexPosition(c,ea);const u=L0(n,e,t,i,Qr,jr,ea,Zu);if(u){const f=new k;En.getBarycoord(Zu,Qr,jr,ea,f),s&&(u.uv=En.getInterpolatedAttribute(s,o,l,c,f,new lt)),r&&(u.uv1=En.getInterpolatedAttribute(r,o,l,c,f,new lt)),a&&(u.normal=En.getInterpolatedAttribute(a,o,l,c,f,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new k,materialIndex:0};En.getNormal(Qr,jr,ea,d.normal),u.face=d,u.barycoord=f}return u}class I0 extends sn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Vt,u=Vt,f,d){super(null,a,o,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xi=new Dr,U0=new lt(.5,.5),sa=new k;class bh{constructor(e=new Li,t=new Li,i=new Li,s=new Li,r=new Li,a=new Li){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],h=r[7],v=r[8],b=r[9],g=r[10],p=r[11],y=r[12],P=r[13],S=r[14],E=r[15];if(s[0].setComponents(c-a,h-u,p-v,E-y).normalize(),s[1].setComponents(c+a,h+u,p+v,E+y).normalize(),s[2].setComponents(c+o,h+f,p+b,E+P).normalize(),s[3].setComponents(c-o,h-f,p-b,E-P).normalize(),i)s[4].setComponents(l,d,g,S).normalize(),s[5].setComponents(c-l,h-d,p-g,E-S).normalize();else if(s[4].setComponents(c-l,h-d,p-g,E-S).normalize(),t===Gn)s[5].setComponents(c+l,h+d,p+g,E+S).normalize();else if(t===Ua)s[5].setComponents(l,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){Xi.center.set(0,0,0);const t=U0.distanceTo(e.center);return Xi.radius=.7071067811865476+t,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(sa.x=s.normal.x>0?e.max.x:e.min.x,sa.y=s.normal.y>0?e.max.y:e.min.y,sa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(sa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jl extends ks{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fa=new k,Oa=new k,Ju=new Ct,Zs=new Dc,ra=new Dr,Xo=new k,$u=new k;class yh extends rn{constructor(e=new zt,t=new jl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Fa.fromBufferAttribute(t,s-1),Oa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Fa.distanceTo(Oa);e.setAttribute("lineDistance",new Dt(i,1))}else Ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(s),ra.radius+=r,e.ray.intersectsSphere(ra)===!1)return;Ju.copy(s).invert(),Zs.copy(e.ray).applyMatrix4(Ju);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let b=h,g=v-1;b<g;b+=c){const p=u.getX(b),y=u.getX(b+1),P=aa(this,e,Zs,l,p,y,b);P&&t.push(P)}if(this.isLineLoop){const b=u.getX(v-1),g=u.getX(h),p=aa(this,e,Zs,l,b,g,v-1);p&&t.push(p)}}else{const h=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let b=h,g=v-1;b<g;b+=c){const p=aa(this,e,Zs,l,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){const b=aa(this,e,Zs,l,v-1,h,v-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function aa(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Fa.fromBufferAttribute(o,s),Oa.fromBufferAttribute(o,r),t.distanceSqToSegment(Fa,Oa,Xo,$u)>i)return;Xo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Xo);if(!(c<e.near||c>e.far))return{distance:c,point:$u.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Qu=new k,ju=new k;class N0 extends yh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Qu.fromBufferAttribute(t,s),ju.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Qu.distanceTo(ju);e.setAttribute("lineDistance",new Dt(i,1))}else Ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ec extends ks{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ed=new Ct,tc=new Dc,oa=new Dr,la=new k;class F0 extends rn{constructor(e=new zt,t=new ec){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(s),oa.radius+=r,e.ray.intersectsSphere(oa)===!1)return;ed.copy(s).invert(),tc.copy(e.ray).applyMatrix4(ed);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let v=d,b=h;v<b;v++){const g=c.getX(v);la.fromBufferAttribute(f,g),td(la,g,l,s,e,t,this)}}else{const d=Math.max(0,a.start),h=Math.min(f.count,a.start+a.count);for(let v=d,b=h;v<b;v++)la.fromBufferAttribute(f,v),td(la,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function td(n,e,t,i,s,r,a){const o=tc.distanceSqToPoint(n);if(o<t){const l=new k;tc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Th extends sn{constructor(e=[],t=ts,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Er extends sn{constructor(e,t,i=qn,s,r,a,o=Vt,l=Vt,c,u=Mi,f=1){if(u!==Mi&&u!==Ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class O0 extends Er{constructor(e,t=qn,i=ts,s,r,a=Vt,o=Vt,l,c=Mi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Eh extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Lr extends zt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,h=0;v("z","y","x",-1,-1,i,t,e,a,r,0),v("z","y","x",1,-1,i,t,-e,a,r,1),v("x","z","y",1,1,e,i,t,s,a,2),v("x","z","y",1,-1,e,i,-t,s,a,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(f,2));function v(b,g,p,y,P,S,E,A,D,x,w){const L=S/D,F=E/x,z=S/2,q=E/2,B=A/2,W=D+1,te=x+1;let V=0,se=0;const Q=new k;for(let j=0;j<te;j++){const oe=j*F-q;for(let ye=0;ye<W;ye++){const Oe=ye*L-z;Q[b]=Oe*y,Q[g]=oe*P,Q[p]=B,c.push(Q.x,Q.y,Q.z),Q[b]=0,Q[g]=0,Q[p]=A>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(ye/D),f.push(1-j/x),V+=1}}for(let j=0;j<x;j++)for(let oe=0;oe<D;oe++){const ye=d+oe+W*j,Oe=d+oe+W*(j+1),fe=d+(oe+1)+W*(j+1),Ie=d+(oe+1)+W*j;l.push(ye,Oe,Ie),l.push(Oe,fe,Ie),se+=6}o.addGroup(h,se,w),h+=se,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Lc extends zt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new Dt(r,3)),this.setAttribute("normal",new Dt(r.slice(),3)),this.setAttribute("uv",new Dt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const P=new k,S=new k,E=new k;for(let A=0;A<t.length;A+=3)h(t[A+0],P),h(t[A+1],S),h(t[A+2],E),l(P,S,E,y)}function l(y,P,S,E){const A=E+1,D=[];for(let x=0;x<=A;x++){D[x]=[];const w=y.clone().lerp(S,x/A),L=P.clone().lerp(S,x/A),F=A-x;for(let z=0;z<=F;z++)z===0&&x===A?D[x][z]=w:D[x][z]=w.clone().lerp(L,z/F)}for(let x=0;x<A;x++)for(let w=0;w<2*(A-x)-1;w++){const L=Math.floor(w/2);w%2===0?(d(D[x][L+1]),d(D[x+1][L]),d(D[x][L])):(d(D[x][L+1]),d(D[x+1][L+1]),d(D[x+1][L]))}}function c(y){const P=new k;for(let S=0;S<r.length;S+=3)P.x=r[S+0],P.y=r[S+1],P.z=r[S+2],P.normalize().multiplyScalar(y),r[S+0]=P.x,r[S+1]=P.y,r[S+2]=P.z}function u(){const y=new k;for(let P=0;P<r.length;P+=3){y.x=r[P+0],y.y=r[P+1],y.z=r[P+2];const S=g(y)/2/Math.PI+.5,E=p(y)/Math.PI+.5;a.push(S,1-E)}v(),f()}function f(){for(let y=0;y<a.length;y+=6){const P=a[y+0],S=a[y+2],E=a[y+4],A=Math.max(P,S,E),D=Math.min(P,S,E);A>.9&&D<.1&&(P<.2&&(a[y+0]+=1),S<.2&&(a[y+2]+=1),E<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function h(y,P){const S=y*3;P.x=e[S+0],P.y=e[S+1],P.z=e[S+2]}function v(){const y=new k,P=new k,S=new k,E=new k,A=new lt,D=new lt,x=new lt;for(let w=0,L=0;w<r.length;w+=9,L+=6){y.set(r[w+0],r[w+1],r[w+2]),P.set(r[w+3],r[w+4],r[w+5]),S.set(r[w+6],r[w+7],r[w+8]),A.set(a[L+0],a[L+1]),D.set(a[L+2],a[L+3]),x.set(a[L+4],a[L+5]),E.copy(y).add(P).add(S).divideScalar(3);const F=g(E);b(A,L+0,y,F),b(D,L+2,P,F),b(x,L+4,S,F)}}function b(y,P,S,E){E<0&&y.x===1&&(a[P]=y.x-1),S.x===0&&S.z===0&&(a[P]=E/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.vertices,e.indices,e.radius,e.detail)}}class B0{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const u=i[s],d=i[s+1]-u,h=(a-u)/d;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new lt:new k);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new k,s=[],r=[],a=[],o=new k,l=new Ct;for(let h=0;h<=e;h++){const v=h/e;s[h]=this.getTangentAt(v,new k)}r[0]=new k,a[0]=new k;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(s[h-1],s[h]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(st(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(o,v))}a[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(st(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(h=-h);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],h*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Ic(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,h=(o-a)/u-(l-a)/(u+f)+(l-o)/f;d*=u,h*=u,s(a,o,d,h)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const nd=new k,id=new k,Yo=new Ic,qo=new Ic,Ko=new Ic;class k0 extends B0{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new k){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(id.subVectors(s[0],s[1]).add(s[0]),c=id);const f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(nd.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=nd),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(f),h),b=Math.pow(f.distanceToSquared(d),h),g=Math.pow(d.distanceToSquared(u),h);b<1e-4&&(b=1),v<1e-4&&(v=b),g<1e-4&&(g=b),Yo.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,v,b,g),qo.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,v,b,g),Ko.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,v,b,g)}else this.curveType==="catmullrom"&&(Yo.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),qo.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),Ko.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return i.set(Yo.calc(l),qo.calc(l),Ko.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Uc extends Lc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Uc(e.radius,e.detail)}}class eo extends zt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=e/o,d=t/l,h=[],v=[],b=[],g=[];for(let p=0;p<u;p++){const y=p*d-a;for(let P=0;P<c;P++){const S=P*f-r;v.push(S,-y,0),b.push(0,0,1),g.push(P/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const P=y+c*p,S=y+c*(p+1),E=y+1+c*(p+1),A=y+1+c*p;h.push(P,S,A),h.push(S,E,A)}this.setIndex(h),this.setAttribute("position",new Dt(v,3)),this.setAttribute("normal",new Dt(b,3)),this.setAttribute("uv",new Dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ba extends zt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new k,d=new k,h=[],v=[],b=[],g=[];for(let p=0;p<=i;p++){const y=[],P=p/i,S=a+P*o,E=e*Math.cos(S),A=Math.sqrt(e*e-E*E);let D=0;p===0&&a===0?D=.5/t:p===i&&l===Math.PI&&(D=-.5/t);for(let x=0;x<=t;x++){const w=x/t,L=s+w*r;f.x=-A*Math.cos(L),f.y=E,f.z=A*Math.sin(L),v.push(f.x,f.y,f.z),d.copy(f).normalize(),b.push(d.x,d.y,d.z),g.push(w+D,1-P),y.push(c++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const P=u[p][y+1],S=u[p][y],E=u[p+1][y],A=u[p+1][y+1];(p!==0||a>0)&&h.push(P,S,A),(p!==i-1||l<Math.PI)&&h.push(S,E,A)}this.setIndex(h),this.setAttribute("position",new Dt(v,3)),this.setAttribute("normal",new Dt(b,3)),this.setAttribute("uv",new Dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Nc extends zt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],f=[],d=new k,h=new k,v=new k;for(let b=0;b<=i;b++){const g=a+b/i*o;for(let p=0;p<=s;p++){const y=p/s*r;h.x=(e+t*Math.cos(g))*Math.cos(y),h.y=(e+t*Math.cos(g))*Math.sin(y),h.z=t*Math.sin(g),c.push(h.x,h.y,h.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),v.subVectors(h,d).normalize(),u.push(v.x,v.y,v.z),f.push(p/s),f.push(b/i)}}for(let b=1;b<=i;b++)for(let g=1;g<=s;g++){const p=(s+1)*b+g-1,y=(s+1)*(b-1)+g-1,P=(s+1)*(b-1)+g,S=(s+1)*b+g;l.push(p,y,S),l.push(y,P,S)}this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Fs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(sd(s))s.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(sd(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function jt(n){const e={};for(let t=0;t<n.length;t++){const i=Fs(n[t]);for(const s in i)e[s]=i[s]}return e}function sd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function H0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ah(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const V0={clone:Fs,merge:jt};var z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z0,this.fragmentShader=G0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=H0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ft().setHex(s.value);break;case"v2":this.uniforms[i].value=new lt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new k().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Rt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new $e().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ct().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class W0 extends Zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class X0 extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$g,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Y0 extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ca=new k,ua=new Bs,Nn=new k;class wh extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ca,ua,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,ua,Nn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ca,ua,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,ua,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new k,rd=new lt,ad=new lt;class vn extends wh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ql*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ql*2*Math.atan(Math.tan(yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,rd,ad),t.subVectors(ad,rd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ch extends wh{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vs=-90,xs=1;class q0 extends rn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(vs,xs,e,t);s.layers=this.layers,this.add(s);const r=new vn(vs,xs,e,t);r.layers=this.layers,this.add(r);const a=new vn(vs,xs,e,t);a.layers=this.layers,this.add(a);const o=new vn(vs,xs,e,t);o.layers=this.layers,this.add(o);const l=new vn(vs,xs,e,t);l.layers=this.layers,this.add(l);const c=new vn(vs,xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class K0 extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Z0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ze("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Vc=class Vc{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Vc.prototype.isMatrix2=!0;let od=Vc;function ld(n,e,t,i){const s=J0(i);switch(t){case hh:return n*e;case mh:return n*e/s.components*s.byteLength;case Ec:return n*e/s.components*s.byteLength;case ns:return n*e*2/s.components*s.byteLength;case Ac:return n*e*2/s.components*s.byteLength;case ph:return n*e*3/s.components*s.byteLength;case An:return n*e*4/s.components*s.byteLength;case wc:return n*e*4/s.components*s.byteLength;case _a:case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case xa:case Sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yl:case El:return Math.max(n,16)*Math.max(e,8)/4;case bl:case Tl:return Math.max(n,8)*Math.max(e,8)/2;case Al:case wl:case Rl:case Pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cl:case Pa:case Dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Il:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case kl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case zl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Xl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Yl:case ql:case Kl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Zl:case Jl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Da:case $l:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function J0(n){switch(n){case xn:case ch:return{byteLength:1,components:1};case yr:case uh:case Kn:return{byteLength:2,components:1};case yc:case Tc:return{byteLength:2,components:4};case qn:case bc:case zn:return{byteLength:4,components:1};case dh:case fh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mc}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rh(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function $0(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((h,v)=>h.start-v.start);let d=0;for(let h=1;h<f.length;h++){const v=f[d],b=f[h];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++d,f[d]=b)}f.length=d+1;for(let h=0,v=f.length;h<v;h++){const b=f[h];n.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Q0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,e_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,s_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,r_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,o_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,d_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,f_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,p_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,__=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,v_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,x_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,S_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,M_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,b_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,y_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,T_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C_="gl_FragColor = linearToOutputTexel( gl_FragColor );",R_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,D_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,L_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,I_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,N_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,H_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,W_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,X_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,J_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,j_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ev=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,tv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,av=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ov=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_v=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Mv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ev=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Av=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Cv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Nv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ov=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$v=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ax=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ox=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,px=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_x=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ex=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ax=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Px=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:Q0,alphahash_pars_fragment:j0,alphamap_fragment:e_,alphamap_pars_fragment:t_,alphatest_fragment:n_,alphatest_pars_fragment:i_,aomap_fragment:s_,aomap_pars_fragment:r_,batching_pars_vertex:a_,batching_vertex:o_,begin_vertex:l_,beginnormal_vertex:c_,bsdfs:u_,iridescence_fragment:d_,bumpmap_pars_fragment:f_,clipping_planes_fragment:h_,clipping_planes_pars_fragment:p_,clipping_planes_pars_vertex:m_,clipping_planes_vertex:g_,color_fragment:__,color_pars_fragment:v_,color_pars_vertex:x_,color_vertex:S_,common:M_,cube_uv_reflection_fragment:b_,defaultnormal_vertex:y_,displacementmap_pars_vertex:T_,displacementmap_vertex:E_,emissivemap_fragment:A_,emissivemap_pars_fragment:w_,colorspace_fragment:C_,colorspace_pars_fragment:R_,envmap_fragment:P_,envmap_common_pars_fragment:D_,envmap_pars_fragment:L_,envmap_pars_vertex:I_,envmap_physical_pars_fragment:W_,envmap_vertex:U_,fog_vertex:N_,fog_pars_vertex:F_,fog_fragment:O_,fog_pars_fragment:B_,gradientmap_pars_fragment:k_,lightmap_pars_fragment:H_,lights_lambert_fragment:V_,lights_lambert_pars_fragment:z_,lights_pars_begin:G_,lights_toon_fragment:X_,lights_toon_pars_fragment:Y_,lights_phong_fragment:q_,lights_phong_pars_fragment:K_,lights_physical_fragment:Z_,lights_physical_pars_fragment:J_,lights_fragment_begin:$_,lights_fragment_maps:Q_,lights_fragment_end:j_,lightprobes_pars_fragment:ev,logdepthbuf_fragment:tv,logdepthbuf_pars_fragment:nv,logdepthbuf_pars_vertex:iv,logdepthbuf_vertex:sv,map_fragment:rv,map_pars_fragment:av,map_particle_fragment:ov,map_particle_pars_fragment:lv,metalnessmap_fragment:cv,metalnessmap_pars_fragment:uv,morphinstance_vertex:dv,morphcolor_vertex:fv,morphnormal_vertex:hv,morphtarget_pars_vertex:pv,morphtarget_vertex:mv,normal_fragment_begin:gv,normal_fragment_maps:_v,normal_pars_fragment:vv,normal_pars_vertex:xv,normal_vertex:Sv,normalmap_pars_fragment:Mv,clearcoat_normal_fragment_begin:bv,clearcoat_normal_fragment_maps:yv,clearcoat_pars_fragment:Tv,iridescence_pars_fragment:Ev,opaque_fragment:Av,packing:wv,premultiplied_alpha_fragment:Cv,project_vertex:Rv,dithering_fragment:Pv,dithering_pars_fragment:Dv,roughnessmap_fragment:Lv,roughnessmap_pars_fragment:Iv,shadowmap_pars_fragment:Uv,shadowmap_pars_vertex:Nv,shadowmap_vertex:Fv,shadowmask_pars_fragment:Ov,skinbase_vertex:Bv,skinning_pars_vertex:kv,skinning_vertex:Hv,skinnormal_vertex:Vv,specularmap_fragment:zv,specularmap_pars_fragment:Gv,tonemapping_fragment:Wv,tonemapping_pars_fragment:Xv,transmission_fragment:Yv,transmission_pars_fragment:qv,uv_pars_fragment:Kv,uv_pars_vertex:Zv,uv_vertex:Jv,worldpos_vertex:$v,background_vert:Qv,background_frag:jv,backgroundCube_vert:ex,backgroundCube_frag:tx,cube_vert:nx,cube_frag:ix,depth_vert:sx,depth_frag:rx,distance_vert:ax,distance_frag:ox,equirect_vert:lx,equirect_frag:cx,linedashed_vert:ux,linedashed_frag:dx,meshbasic_vert:fx,meshbasic_frag:hx,meshlambert_vert:px,meshlambert_frag:mx,meshmatcap_vert:gx,meshmatcap_frag:_x,meshnormal_vert:vx,meshnormal_frag:xx,meshphong_vert:Sx,meshphong_frag:Mx,meshphysical_vert:bx,meshphysical_frag:yx,meshtoon_vert:Tx,meshtoon_frag:Ex,points_vert:Ax,points_frag:wx,shadow_vert:Cx,shadow_frag:Rx,sprite_vert:Px,sprite_frag:Dx},Ce={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Hn={basic:{uniforms:jt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:jt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ft(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:jt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:jt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:jt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new ft(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:jt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:jt([Ce.points,Ce.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:jt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:jt([Ce.common,Ce.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:jt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:jt([Ce.sprite,Ce.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:jt([Ce.common,Ce.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:jt([Ce.lights,Ce.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Hn.physical={uniforms:jt([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const da={r:0,b:0,g:0},Lx=new Ct,Ph=new $e;Ph.set(-1,0,0,0,1,0,0,0,1);function Ix(n,e,t,i,s,r){const a=new ft(0);let o=s===!0?0:1,l,c,u=null,f=0,d=null;function h(y){let P=y.isScene===!0?y.background:null;if(P&&P.isTexture){const S=y.backgroundBlurriness>0;P=e.get(P,S)}return P}function v(y){let P=!1;const S=h(y);S===null?g(a,o):S&&S.isColor&&(g(S,1),P=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(y,P){const S=h(P);S&&(S.isCubeTexture||S.mapping===ja)?(c===void 0&&(c=new hn(new Lr(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Fs(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Lx.makeRotationFromEuler(P.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ph),c.material.toneMapped=ot.getTransfer(S.colorSpace)!==gt,(u!==S||f!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new hn(new eo(2,2),new Zn({name:"BackgroundMaterial",uniforms:Fs(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=ot.getTransfer(S.colorSpace)!==gt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,P){y.getRGB(da,Ah(n)),t.buffers.color.setClear(da.r,da.g,da.b,P,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,P=1){a.set(y),o=P,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:v,addToRenderList:b,dispose:p}}function Ux(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(F,z,q,B,W){let te=!1;const V=f(F,B,q,z);r!==V&&(r=V,c(r.object)),te=h(F,B,q,W),te&&v(F,B,q,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,S(F,z,q,B),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(F){return n.bindVertexArray(F)}function u(F){return n.deleteVertexArray(F)}function f(F,z,q,B){const W=B.wireframe===!0;let te=i[z.id];te===void 0&&(te={},i[z.id]=te);const V=F.isInstancedMesh===!0?F.id:0;let se=te[V];se===void 0&&(se={},te[V]=se);let Q=se[q.id];Q===void 0&&(Q={},se[q.id]=Q);let j=Q[W];return j===void 0&&(j=d(l()),Q[W]=j),j}function d(F){const z=[],q=[],B=[];for(let W=0;W<t;W++)z[W]=0,q[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:B,object:F,attributes:{},index:null}}function h(F,z,q,B){const W=r.attributes,te=z.attributes;let V=0;const se=q.getAttributes();for(const Q in se)if(se[Q].location>=0){const oe=W[Q];let ye=te[Q];if(ye===void 0&&(Q==="instanceMatrix"&&F.instanceMatrix&&(ye=F.instanceMatrix),Q==="instanceColor"&&F.instanceColor&&(ye=F.instanceColor)),oe===void 0||oe.attribute!==ye||ye&&oe.data!==ye.data)return!0;V++}return r.attributesNum!==V||r.index!==B}function v(F,z,q,B){const W={},te=z.attributes;let V=0;const se=q.getAttributes();for(const Q in se)if(se[Q].location>=0){let oe=te[Q];oe===void 0&&(Q==="instanceMatrix"&&F.instanceMatrix&&(oe=F.instanceMatrix),Q==="instanceColor"&&F.instanceColor&&(oe=F.instanceColor));const ye={};ye.attribute=oe,oe&&oe.data&&(ye.data=oe.data),W[Q]=ye,V++}r.attributes=W,r.attributesNum=V,r.index=B}function b(){const F=r.newAttributes;for(let z=0,q=F.length;z<q;z++)F[z]=0}function g(F){p(F,0)}function p(F,z){const q=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;q[F]=1,B[F]===0&&(n.enableVertexAttribArray(F),B[F]=1),W[F]!==z&&(n.vertexAttribDivisor(F,z),W[F]=z)}function y(){const F=r.newAttributes,z=r.enabledAttributes;for(let q=0,B=z.length;q<B;q++)z[q]!==F[q]&&(n.disableVertexAttribArray(q),z[q]=0)}function P(F,z,q,B,W,te,V){V===!0?n.vertexAttribIPointer(F,z,q,W,te):n.vertexAttribPointer(F,z,q,B,W,te)}function S(F,z,q,B){b();const W=B.attributes,te=q.getAttributes(),V=z.defaultAttributeValues;for(const se in te){const Q=te[se];if(Q.location>=0){let j=W[se];if(j===void 0&&(se==="instanceMatrix"&&F.instanceMatrix&&(j=F.instanceMatrix),se==="instanceColor"&&F.instanceColor&&(j=F.instanceColor)),j!==void 0){const oe=j.normalized,ye=j.itemSize,Oe=e.get(j);if(Oe===void 0)continue;const fe=Oe.buffer,Ie=Oe.type,ze=Oe.bytesPerElement,K=Ie===n.INT||Ie===n.UNSIGNED_INT||j.gpuType===bc;if(j.isInterleavedBufferAttribute){const re=j.data,be=re.stride,Xe=j.offset;if(re.isInstancedInterleavedBuffer){for(let Pe=0;Pe<Q.locationSize;Pe++)p(Q.location+Pe,re.meshPerAttribute);F.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Pe=0;Pe<Q.locationSize;Pe++)g(Q.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let Pe=0;Pe<Q.locationSize;Pe++)P(Q.location+Pe,ye/Q.locationSize,Ie,oe,be*ze,(Xe+ye/Q.locationSize*Pe)*ze,K)}else{if(j.isInstancedBufferAttribute){for(let re=0;re<Q.locationSize;re++)p(Q.location+re,j.meshPerAttribute);F.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let re=0;re<Q.locationSize;re++)g(Q.location+re);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let re=0;re<Q.locationSize;re++)P(Q.location+re,ye/Q.locationSize,Ie,oe,ye*ze,ye/Q.locationSize*re*ze,K)}}else if(V!==void 0){const oe=V[se];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(Q.location,oe);break;case 3:n.vertexAttrib3fv(Q.location,oe);break;case 4:n.vertexAttrib4fv(Q.location,oe);break;default:n.vertexAttrib1fv(Q.location,oe)}}}}y()}function E(){w();for(const F in i){const z=i[F];for(const q in z){const B=z[q];for(const W in B){const te=B[W];for(const V in te)u(te[V].object),delete te[V];delete B[W]}}delete i[F]}}function A(F){if(i[F.id]===void 0)return;const z=i[F.id];for(const q in z){const B=z[q];for(const W in B){const te=B[W];for(const V in te)u(te[V].object),delete te[V];delete B[W]}}delete i[F.id]}function D(F){for(const z in i){const q=i[z];for(const B in q){const W=q[B];if(W[F.id]===void 0)continue;const te=W[F.id];for(const V in te)u(te[V].object),delete te[V];delete W[F.id]}}}function x(F){for(const z in i){const q=i[z],B=F.isInstancedMesh===!0?F.id:0,W=q[B];if(W!==void 0){for(const te in W){const V=W[te];for(const se in V)u(V[se].object),delete V[se];delete W[te]}delete q[B],Object.keys(q).length===0&&delete i[z]}}}function w(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:D,initAttributes:b,enableAttribute:g,disableUnusedAttributes:y}}function Nx(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Fx(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==An&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const x=D===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==xn&&D!==zn&&!x&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:P,maxFragmentUniforms:S,maxSamples:E,samples:A}}function Ox(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Li,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||s;return s=d,i=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const v=f.clippingPlanes,b=f.clipIntersection,g=f.clipShadows,p=n.get(f);if(!s||v===null||v.length===0||r&&!g)r?u(null):c();else{const y=r?0:i,P=y*4;let S=p.clippingState||null;l.value=S,S=u(v,d,P,h);for(let E=0;E!==P;++E)S[E]=t[E];p.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,v){const b=f!==null?f.length:0;let g=null;if(b!==0){if(g=l.value,v!==!0||g===null){const p=h+b*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let P=0,S=h;P!==b;++P,S+=4)a.copy(f[P]).applyMatrix4(y,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}const Ts=4,Bx=6,kx=20,Hx=256,Js=new Ch,cd=new ft;let Zo=null,Jo=0,$o=0,Qo=!1;const Vx=new k,Yi=new k;class ud{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=Vx}=r;Zo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zo,Jo,$o),this._renderer.xr.enabled=Qo,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ts||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Kn,format:An,colorSpace:La,depthBuffer:!1},s=dd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dd(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=zx(r)),this._blurMaterial=Wx(r,e,t),this._ggxMaterial=Gx(r,e,t)}return s}_compileMaterial(e){const t=new hn(new zt,e);this._renderer.compile(t,Js)}_sceneToCubeUV(e,t,i,s,r){const l=new vn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(cd),f.toneMapping=Xn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new hn(new Lr,new hr({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,g=b.material;let p=!1;const y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,p=!0):(g.color.copy(cd),p=!0);for(let P=0;P<6;P++){const S=P%3;S===0?(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[P],r.y,r.z)):S===1?(l.up.set(0,0,c[P]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[P],r.z)):(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[P]));const E=this._cubeSize;Ss(s,S*E,P>2?E:0,E,E),f.setRenderTarget(s),p&&f.render(b,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ts||e.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fd());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ss(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Js)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=c*1.25,h=f*d,{_lodMax:v}=this,b=this._sizeLods[i],g=3*b*(i>v-Ts?i-v+Ts:0),p=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=v-t,Ss(r,g,p,3*b,2*b),s.setRenderTarget(r),s.render(o,Js),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=v-i,Ss(e,g,p,3*b,2*b),s.setRenderTarget(e),s.render(o,Js)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],f=3*u*(s>this._lodMax-Ts?s-this._lodMax+Ts:0),d=4*(this._cubeSize-u);Ss(t,f,d,3*u,2*u),a.setRenderTarget(t),a.render(l,Js)}}function zx(n){const e=[],t=[];let i=n;const s=n-Ts+1+Bx;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,d=6,h=3,v=new Float32Array(h*d*f),b=new Float32Array(h*d*f);for(let p=0;p<f;p++){const y=p%3*2/3-1,P=p>2?0:-1,S=[y,P,0,y+2/3,P,0,y+2/3,P+1,0,y,P,0,y+2/3,P+1,0,y,P+1,0];v.set(S,h*d*p);for(let E=0;E<d;E++){const A=u[E*2]*2-1,D=u[E*2+1]*2-1;p===0?Yi.set(1,D,A):p===1?Yi.set(-A,1,-D):p===2?Yi.set(-A,D,1):p===3?Yi.set(-1,D,-A):p===4?Yi.set(-A,-1,D):Yi.set(A,D,-1),Yi.toArray(b,(p*d+E)*h)}}const g=new zt;g.setAttribute("position",new gi(v,h)),g.setAttribute("outputDirection",new gi(b,h)),t.push(new hn(g,null)),i>Ts&&i--}return{lodMeshes:t,sizeLods:e}}function dd(n,e,t){const i=new Pn(n,e,t);return i.texture.mapping=ja,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ss(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Gx(n,e,t){return new Zn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Hx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:to(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Wx(n,e,t){return new Zn({name:"SphericalGaussianBlur",defines:{SAMPLES:kx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:to(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function fd(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function hd(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function to(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Dh extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Th(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Lr(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:pi});r.uniforms.tEquirect.value=t;const a=new hn(s,r),o=t.minFilter;return t.minFilter===Zi&&(t.minFilter=Zt),new q0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function Xx(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,h=!1){return d==null?null:h?a(d):r(d)}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===xo||h===So)if(e.has(d)){const v=e.get(d).texture;return o(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const b=new Dh(v.height);return b.fromEquirectangularTexture(n,d),e.set(d,b),d.addEventListener("dispose",c),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const h=d.mapping,v=h===xo||h===So,b=h===ts||h===Ns;if(v||b){let g=t.get(d);const p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new ud(n)),g=v?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const y=d.image;return v&&y&&y.height>0||b&&y&&l(y)?(i===null&&(i=new ud(n)),g=v?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,h){return h===xo?d.mapping=ts:h===So&&(d.mapping=Ns),d}function l(d){let h=0;const v=6;for(let b=0;b<v;b++)d[b]!==void 0&&h++;return h===v}function c(d){const h=d.target;h.removeEventListener("dispose",c);const v=e.get(h);v!==void 0&&(e.delete(h),v.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const v=t.get(h);v!==void 0&&(t.delete(h),v.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Yx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ps("WebGLRenderer: "+i+" extension not supported."),s}}}function qx(n,e,t,i){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete s[d.id];const h=r.get(d);h&&(e.remove(h),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],n.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,v=f.attributes.position;let b=0;if(v===void 0)return;if(h!==null){const y=h.array;b=h.version;for(let P=0,S=y.length;P<S;P+=3){const E=y[P+0],A=y[P+1],D=y[P+2];d.push(E,A,A,D,D,E)}}else{const y=v.array;b=v.version;for(let P=0,S=y.length/3-1;P<S;P+=3){const E=P+0,A=P+1,D=P+2;d.push(E,A,A,D,D,E)}}const g=new(v.count>=65535?Mh:Sh)(d,1);g.version=b;const p=r.get(f);p&&e.remove(p),r.set(f,g)}function u(f){const d=r.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Kx(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*a),t.update(d,i,1)}function c(f,d,h){h!==0&&(n.drawElementsInstanced(i,d,r,f*a,h),t.update(d,i,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,h);let b=0;for(let g=0;g<h;g++)b+=d[g];t.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Zx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:dt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Jx(n,e,t){const i=new WeakMap,s=new Rt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let L=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var h=L;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],P=o.morphAttributes.color||[];let S=0;v===!0&&(S=1),b===!0&&(S=2),g===!0&&(S=3);let E=o.attributes.position.count*S,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const D=new Float32Array(E*A*4*f),x=new _h(D,E,A,f);x.type=zn,x.needsUpdate=!0;const w=S*4;for(let F=0;F<f;F++){const z=p[F],q=y[F],B=P[F],W=E*A*4*F;for(let te=0;te<z.count;te++){const V=te*w;v===!0&&(s.fromBufferAttribute(z,te),D[W+V+0]=s.x,D[W+V+1]=s.y,D[W+V+2]=s.z,D[W+V+3]=0),b===!0&&(s.fromBufferAttribute(q,te),D[W+V+4]=s.x,D[W+V+5]=s.y,D[W+V+6]=s.z,D[W+V+7]=0),g===!0&&(s.fromBufferAttribute(B,te),D[W+V+8]=s.x,D[W+V+9]=s.y,D[W+V+10]=s.z,D[W+V+11]=B.itemSize===4?s.w:1)}}d={count:f,texture:x,size:new lt(E,A)},i.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const b=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",b),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function $x(n,e,t,i,s){let r=new WeakMap;function a(c){const u=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Qx={[th]:"LINEAR_TONE_MAPPING",[nh]:"REINHARD_TONE_MAPPING",[ih]:"CINEON_TONE_MAPPING",[sh]:"ACES_FILMIC_TONE_MAPPING",[ah]:"AGX_TONE_MAPPING",[oh]:"NEUTRAL_TONE_MAPPING",[rh]:"CUSTOM_TONE_MAPPING"};function jx(n,e,t,i,s,r){const a=new Pn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new zt;c.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Dt([0,2,0,0,2,0],2));const u=new W0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new hn(c,u),d=new Ch(-1,1,1,-1,0,1);let h=null,v=null,b=!1,g,p=null,y=[],P=!1;this.setSize=function(S,E){a.setSize(S,E),o!==null&&o.setSize(S,E),l!==null&&l.setSize(S,E);for(let A=0;A<y.length;A++){const D=y[A];D.setSize&&D.setSize(S,E)}},this.setEffects=function(S){y=S,P=y.length>0&&y[0].isRenderPass===!0;const E=a.width,A=a.height;y.length>0&&o===null&&(o=new Pn(E,A,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),l=new Pn(E,A,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<y.length;D++){const x=y[D];x.setSize&&x.setSize(E,A)}},this.begin=function(S,E){if(b||S.toneMapping===Xn&&y.length===0)return!1;if(p=E,E!==null){const A=E.width,D=E.height;(a.width!==A||a.height!==D)&&this.setSize(A,D)}return P===!1&&S.setRenderTarget(a),g=S.toneMapping,S.toneMapping=Xn,!0},this.hasRenderPass=function(){return P},this.end=function(S,E){S.toneMapping=g,b=!0;let A=a,D=o;for(let x=0;x<y.length;x++){const w=y[x];w.enabled!==!1&&(w.render(S,D,A,E),w.needsSwap!==!1&&(A=D,D=D===o?l:o))}if(h!==S.outputColorSpace||v!==S.toneMapping){h=S.outputColorSpace,v=S.toneMapping,u.defines={},ot.getTransfer(h)===gt&&(u.defines.SRGB_TRANSFER="");const x=Qx[v];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,S.setRenderTarget(p),S.render(f,d),p=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const Lh=new sn,nc=new Er(1,1),Ih=new _h,Uh=new _0,Nh=new Th,pd=[],md=[],gd=new Float32Array(16),_d=new Float32Array(9),vd=new Float32Array(4);function Hs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=pd[s];if(r===void 0&&(r=new Float32Array(s),pd[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function no(n,e){let t=md[e];t===void 0&&(t=new Int32Array(e),md[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function eS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function tS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function nS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function iS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function sS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;vd.set(i),n.uniformMatrix2fv(this.addr,!1,vd),Bt(t,i)}}function rS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;_d.set(i),n.uniformMatrix3fv(this.addr,!1,_d),Bt(t,i)}}function aS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;gd.set(i),n.uniformMatrix4fv(this.addr,!1,gd),Bt(t,i)}}function oS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function lS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function cS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function uS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function dS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function fS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function hS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function pS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function mS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(nc.compareFunction=t.isReversedDepthBuffer()?Rc:Cc,r=nc):r=Lh,t.setTexture2D(e||r,s)}function gS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Uh,s)}function _S(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Nh,s)}function vS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ih,s)}function xS(n){switch(n){case 5126:return eS;case 35664:return tS;case 35665:return nS;case 35666:return iS;case 35674:return sS;case 35675:return rS;case 35676:return aS;case 5124:case 35670:return oS;case 35667:case 35671:return lS;case 35668:case 35672:return cS;case 35669:case 35673:return uS;case 5125:return dS;case 36294:return fS;case 36295:return hS;case 36296:return pS;case 35678:case 36198:case 36298:case 36306:case 35682:return mS;case 35679:case 36299:case 36307:return gS;case 35680:case 36300:case 36308:case 36293:return _S;case 36289:case 36303:case 36311:case 36292:return vS}}function SS(n,e){n.uniform1fv(this.addr,e)}function MS(n,e){const t=Hs(e,this.size,2);n.uniform2fv(this.addr,t)}function bS(n,e){const t=Hs(e,this.size,3);n.uniform3fv(this.addr,t)}function yS(n,e){const t=Hs(e,this.size,4);n.uniform4fv(this.addr,t)}function TS(n,e){const t=Hs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ES(n,e){const t=Hs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function AS(n,e){const t=Hs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function wS(n,e){n.uniform1iv(this.addr,e)}function CS(n,e){n.uniform2iv(this.addr,e)}function RS(n,e){n.uniform3iv(this.addr,e)}function PS(n,e){n.uniform4iv(this.addr,e)}function DS(n,e){n.uniform1uiv(this.addr,e)}function LS(n,e){n.uniform2uiv(this.addr,e)}function IS(n,e){n.uniform3uiv(this.addr,e)}function US(n,e){n.uniform4uiv(this.addr,e)}function NS(n,e,t){const i=this.cache,s=e.length,r=no(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=nc:a=Lh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function FS(n,e,t){const i=this.cache,s=e.length,r=no(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Uh,r[a])}function OS(n,e,t){const i=this.cache,s=e.length,r=no(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Nh,r[a])}function BS(n,e,t){const i=this.cache,s=e.length,r=no(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ih,r[a])}function kS(n){switch(n){case 5126:return SS;case 35664:return MS;case 35665:return bS;case 35666:return yS;case 35674:return TS;case 35675:return ES;case 35676:return AS;case 5124:case 35670:return wS;case 35667:case 35671:return CS;case 35668:case 35672:return RS;case 35669:case 35673:return PS;case 5125:return DS;case 36294:return LS;case 36295:return IS;case 36296:return US;case 35678:case 36198:case 36298:case 36306:case 35682:return NS;case 35679:case 36299:case 36307:return FS;case 35680:case 36300:case 36308:case 36293:return OS;case 36289:case 36303:case 36311:case 36292:return BS}}class HS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=xS(t.type)}}class VS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kS(t.type)}}class zS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const jo=/(\w+)(\])?(\[|\.)?/g;function xd(n,e){n.seq.push(e),n.map[e.id]=e}function GS(n,e,t){const i=n.name,s=i.length;for(jo.lastIndex=0;;){const r=jo.exec(i),a=jo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){xd(t,c===void 0?new HS(o,n,e):new VS(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new zS(o),xd(t,f)),t=f}}}class Ma{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);GS(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Sd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const WS=37297;let XS=0;function YS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Md=new $e;function qS(n){ot._getMatrix(Md,ot.workingColorSpace,n);const e=`mat3( ${Md.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(n)){case Ia:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function bd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+YS(n.getShaderSource(e),o)}else return r}function KS(n,e){const t=qS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ZS={[th]:"Linear",[nh]:"Reinhard",[ih]:"Cineon",[sh]:"ACESFilmic",[ah]:"AgX",[oh]:"Neutral",[rh]:"Custom"};function JS(n,e){const t=ZS[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fa=new k;function $S(){ot.getLuminanceCoefficients(fa);const n=fa.x.toFixed(4),e=fa.y.toFixed(4),t=fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function jS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function eM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ir(n){return n!==""}function yd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Td(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(n){return n.replace(tM,iM)}const nM=new Map;function iM(n,e){let t=tt[e];if(t===void 0){const i=nM.get(e);if(i!==void 0)t=tt[i],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ic(t)}const sM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ed(n){return n.replace(sM,rM)}function rM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ad(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const aM={[ga]:"SHADOWMAP_TYPE_PCF",[nr]:"SHADOWMAP_TYPE_VSM"};function oM(n){return aM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lM={[ts]:"ENVMAP_TYPE_CUBE",[Ns]:"ENVMAP_TYPE_CUBE",[ja]:"ENVMAP_TYPE_CUBE_UV"};function cM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":lM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const uM={[Ns]:"ENVMAP_MODE_REFRACTION"};function dM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":uM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fM={[eh]:"ENVMAP_BLENDING_MULTIPLY",[Kg]:"ENVMAP_BLENDING_MIX",[Zg]:"ENVMAP_BLENDING_ADD"};function hM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":fM[n.combine]||"ENVMAP_BLENDING_NONE"}function pM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function mM(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=oM(t),c=cM(t),u=dM(t),f=hM(t),d=pM(t),h=QS(t),v=jS(r),b=s.createProgram();let g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ir).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ir).join(`
`),p.length>0&&(p+=`
`)):(g=[Ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),p=[Ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?tt.tonemapping_pars_fragment:"",t.toneMapping!==Xn?JS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,KS("linearToOutputTexel",t.outputColorSpace),$S(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ir).join(`
`)),a=ic(a),a=yd(a,t),a=Td(a,t),o=ic(o),o=yd(o,t),o=Td(o,t),a=Ed(a),o=Ed(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const P=y+g+a,S=y+p+o,E=Sd(s,s.VERTEX_SHADER,P),A=Sd(s,s.FRAGMENT_SHADER,S);s.attachShader(b,E),s.attachShader(b,A),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function D(F){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(b)||"",q=s.getShaderInfoLog(E)||"",B=s.getShaderInfoLog(A)||"",W=z.trim(),te=q.trim(),V=B.trim();let se=!0,Q=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(se=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,b,E,A);else{const j=bd(s,E,"vertex"),oe=bd(s,A,"fragment");dt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+W+`
`+j+`
`+oe)}else W!==""?Ze("WebGLProgram: Program Info Log:",W):(te===""||V==="")&&(Q=!1);Q&&(F.diagnostics={runnable:se,programLog:W,vertexShader:{log:te,prefix:g},fragmentShader:{log:V,prefix:p}})}s.deleteShader(E),s.deleteShader(A),x=new Ma(s,b),w=eM(s,b)}let x;this.getUniforms=function(){return x===void 0&&D(this),x};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(b,WS)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=XS++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=E,this.fragmentShader=A,this}let gM=0;class _M{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new vM(e),t.set(e,i)),i}}class vM{constructor(e){this.id=gM++,this.code=e,this.usedTimes=0}}function xM(n){return n===ns||n===Pa||n===Da}function SM(n,e,t,i,s,r){const a=new vh,o=new _M,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function b(x,w,L,F,z,q){const B=F.fog,W=z.geometry,te=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?F.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,se=e.get(x.envMap||te,V),Q=se&&se.mapping===ja?se.image.height:null,j=h[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&Ze("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const oe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ye=oe!==void 0?oe.length:0;let Oe=0;W.morphAttributes.position!==void 0&&(Oe=1),W.morphAttributes.normal!==void 0&&(Oe=2),W.morphAttributes.color!==void 0&&(Oe=3);let fe,Ie,ze,K;if(j){const yt=Hn[j];fe=yt.vertexShader,Ie=yt.fragmentShader}else{fe=x.vertexShader,Ie=x.fragmentShader;const yt=o.getVertexShaderStage(x),ht=o.getFragmentShaderStage(x);o.update(x,yt,ht),ze=yt.id,K=ht.id}const re=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),Xe=z.isInstancedMesh===!0,Pe=z.isBatchedMesh===!0,C=!!x.map,I=!!x.matcap,G=!!se,ae=!!x.aoMap,ne=!!x.lightMap,J=!!x.bumpMap&&x.wireframe===!1,he=!!x.normalMap,ue=!!x.displacementMap,de=!!x.emissiveMap,ee=!!x.metalnessMap,xe=!!x.roughnessMap,R=x.anisotropy>0,we=x.clearcoat>0,Se=x.dispersion>0,T=x.retroreflectivity>0,_=x.iridescence>0,U=x.sheen>0,H=x.transmission>0,Z=R&&!!x.anisotropyMap,ge=we&&!!x.clearcoatMap,ve=we&&!!x.clearcoatNormalMap,ie=we&&!!x.clearcoatRoughnessMap,le=_&&!!x.iridescenceMap,_e=_&&!!x.iridescenceThicknessMap,Ue=U&&!!x.sheenColorMap,Te=U&&!!x.sheenRoughnessMap,Me=!!x.specularMap,Ye=!!x.specularColorMap,Ke=!!x.specularIntensityMap,Qe=H&&!!x.transmissionMap,O=H&&!!x.thicknessMap,Ee=!!x.gradientMap,ce=!!x.alphaMap,Ae=x.alphaTest>0,Le=!!x.alphaHash,pe=!!x.extensions;let qe=Xn;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(qe=n.toneMapping);const Ge={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:fe,fragmentShader:Ie,defines:x.defines,customVertexShaderID:ze,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Pe,batchingColor:Pe&&z._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&z.instanceColor!==null,instancingMorph:Xe&&z.morphTexture!==null,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:C,matcap:I,envMap:G,envMapMode:G&&se.mapping,envMapCubeUVHeight:Q,aoMap:ae,lightMap:ne,bumpMap:J,normalMap:he,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:he&&x.normalMapType===Qg,normalMapTangentSpace:he&&x.normalMapType===Lu,packedNormalMap:he&&x.normalMapType===Lu&&xM(x.normalMap.format),metalnessMap:ee,roughnessMap:xe,anisotropy:R,anisotropyMap:Z,clearcoat:we,clearcoatMap:ge,clearcoatNormalMap:ve,clearcoatRoughnessMap:ie,dispersion:Se,retroreflection:T,iridescence:_,iridescenceMap:le,iridescenceThicknessMap:_e,sheen:U,sheenColorMap:Ue,sheenRoughnessMap:Te,specularMap:Me,specularColorMap:Ye,specularIntensityMap:Ke,transmission:H,transmissionMap:Qe,thicknessMap:O,gradientMap:Ee,opaque:x.transparent===!1&&x.blending===fr&&x.alphaToCoverage===!1,alphaMap:ce,alphaTest:Ae,alphaHash:Le,combine:x.combine,mapUv:C&&v(x.map.channel),aoMapUv:ae&&v(x.aoMap.channel),lightMapUv:ne&&v(x.lightMap.channel),bumpMapUv:J&&v(x.bumpMap.channel),normalMapUv:he&&v(x.normalMap.channel),displacementMapUv:ue&&v(x.displacementMap.channel),emissiveMapUv:de&&v(x.emissiveMap.channel),metalnessMapUv:ee&&v(x.metalnessMap.channel),roughnessMapUv:xe&&v(x.roughnessMap.channel),anisotropyMapUv:Z&&v(x.anisotropyMap.channel),clearcoatMapUv:ge&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ve&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Te&&v(x.sheenRoughnessMap.channel),specularMapUv:Me&&v(x.specularMap.channel),specularColorMapUv:Ye&&v(x.specularColorMap.channel),specularIntensityMapUv:Ke&&v(x.specularIntensityMap.channel),transmissionMapUv:Qe&&v(x.transmissionMap.channel),thicknessMapUv:O&&v(x.thicknessMap.channel),alphaMapUv:ce&&v(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(he||R),vertexNormals:!!W.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&(C||ce),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||W.attributes.normal===void 0&&he===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:be,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Oe,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:qe,decodeVideoTexture:C&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===gt,decodeVideoTextureEmissive:de&&x.emissiveMap.isVideoTexture===!0&&ot.getTransfer(x.emissiveMap.colorSpace)===gt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===di,flipSided:x.side===ln,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:pe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&x.extensions.multiDraw===!0||Pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function g(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)w.push(L),w.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(p(w,x),y(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function P(x){const w=h[x.type];let L;if(w){const F=Hn[w];L=V0.clone(F.uniforms)}else L=x.uniforms;return L}function S(x,w){let L=u.get(w);return L!==void 0?++L.usedTimes:(L=new mM(n,w,x,s),c.push(L),u.set(w,L)),L}function E(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function D(){o.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:P,acquireProgram:S,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:D}}function MM(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function bM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function wd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function o(d,h,v,b,g,p){let y=n[e];return y===void 0?(y={id:d.id,object:d,geometry:h,material:v,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:g,group:p},n[e]=y):(y.id=d.id,y.object=d,y.geometry=h,y.material=v,y.materialVariant=a(d),y.groupOrder=b,y.renderOrder=d.renderOrder,y.z=g,y.group=p),e++,y}function l(d,h,v,b,g,p,y){y.reversedDepth===!0&&(g=-g);const P=o(d,h,v,b,g,p);v.transmission>0?i.push(P):v.transparent===!0?s.push(P):t.push(P)}function c(d,h,v,b,g,p){const y=o(d,h,v,b,g,p);v.transmission>0?i.unshift(y):v.transparent===!0?s.unshift(y):t.unshift(y)}function u(d,h){t.length>1&&t.sort(d||bM),i.length>1&&i.sort(h||wd),s.length>1&&s.sort(h||wd)}function f(){for(let d=e,h=n.length;d<h;d++){const v=n[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function yM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Cd,n.set(i,[a])):s>=r.length?(a=new Cd,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function TM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new ft};break;case"SpotLight":t={position:new k,direction:new k,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function EM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let AM=0;function wM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function CM(n){const e=new TM,t=EM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const s=new k,r=new Ct,a=new Ct;function o(c){let u=0,f=0,d=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let h=0,v=0,b=0,g=0,p=0,y=0,P=0,S=0,E=0,A=0,D=0,x=0,w=0,L=0;c.sort(wM);for(let z=0,q=c.length;z<q;z++){const B=c[z],W=B.color,te=B.intensity,V=B.distance;let se=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===ns?se=B.shadow.map.texture:se=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)u+=W.r*te,f+=W.g*te,d+=W.b*te;else if(B.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(B.sh.coefficients[Q],te);L++}else if(B.isSunLight){const Q=e.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const j=B.shadow,oe=t.get(B);oe.shadowIntensity=j.intensity,oe.shadowBias=j.bias,oe.shadowNormalBias=j.normalBias,oe.shadowRadius=j.radius,oe.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[v]=oe,i.sunShadowMap[v]=se;const ye=j.getViewportCount();for(let Oe=0;Oe<ye;Oe++)i.sunShadowMatrix[b+Oe]=j.getMatrix(Oe),i.sunShadowCascade[b+Oe]=j._cascadeData[Oe];b+=ye,v++}i.sun[h]=Q,h++}else if(B.isDirectionalLight){const Q=e.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const j=B.shadow,oe=t.get(B);oe.shadowIntensity=j.intensity,oe.shadowBias=j.bias,oe.shadowNormalBias=j.normalBias,oe.shadowRadius=j.radius,oe.shadowMapSize=j.mapSize,i.directionalShadow[g]=oe,i.directionalShadowMap[g]=se,i.directionalShadowMatrix[g]=B.shadow.matrix,E++}i.directional[g]=Q,g++}else if(B.isSpotLight){const Q=e.get(B);Q.position.setFromMatrixPosition(B.matrixWorld),Q.color.copy(W).multiplyScalar(te),Q.distance=V,Q.coneCos=Math.cos(B.angle),Q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Q.decay=B.decay,i.spot[y]=Q;const j=B.shadow;if(B.map&&(i.spotLightMap[x]=B.map,x++,j.updateMatrices(B),B.castShadow&&w++),i.spotLightMatrix[y]=j.matrix,B.castShadow){const oe=t.get(B);oe.shadowIntensity=j.intensity,oe.shadowBias=j.bias,oe.shadowNormalBias=j.normalBias,oe.shadowRadius=j.radius,oe.shadowMapSize=j.mapSize,i.spotShadow[y]=oe,i.spotShadowMap[y]=se,D++}y++}else if(B.isRectAreaLight){const Q=e.get(B);Q.color.copy(W).multiplyScalar(te),Q.halfWidth.set(B.width*.5,0,0),Q.halfHeight.set(0,B.height*.5,0),i.rectArea[P]=Q,P++}else if(B.isPointLight){const Q=e.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity),Q.distance=B.distance,Q.decay=B.decay,B.castShadow){const j=B.shadow,oe=t.get(B);oe.shadowIntensity=j.intensity,oe.shadowBias=j.bias,oe.shadowNormalBias=j.normalBias,oe.shadowRadius=j.radius,oe.shadowMapSize=j.mapSize,oe.shadowCameraNear=j.camera.near,oe.shadowCameraFar=j.camera.far,i.pointShadow[p]=oe,i.pointShadowMap[p]=se,i.pointShadowMatrix[p]=B.shadow.matrix,A++}i.point[p]=Q,p++}else if(B.isHemisphereLight){const Q=e.get(B);Q.skyColor.copy(B.color).multiplyScalar(te),Q.groundColor.copy(B.groundColor).multiplyScalar(te),i.hemi[S]=Q,S++}}P>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const F=i.hash;(F.sunLength!==h||F.directionalLength!==g||F.pointLength!==p||F.spotLength!==y||F.rectAreaLength!==P||F.hemiLength!==S||F.numSunShadows!==v||F.numDirectionalShadows!==E||F.numPointShadows!==A||F.numSpotShadows!==D||F.numSpotMaps!==x||F.numLightProbes!==L)&&(i.sun.length=h,i.directional.length=g,i.spot.length=y,i.rectArea.length=P,i.point.length=p,i.hemi.length=S,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=D,i.spotShadowMap.length=D,i.spotLightMatrix.length=D+x-w,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=L,F.sunLength=h,F.directionalLength=g,F.pointLength=p,F.spotLength=y,F.rectAreaLength=P,F.hemiLength=S,F.numSunShadows=v,F.numDirectionalShadows=E,F.numPointShadows=A,F.numSpotShadows=D,F.numSpotMaps=x,F.numLightProbes=L,i.version=AM++)}function l(c,u){let f=0,d=0,h=0,v=0,b=0,g=0;const p=u.matrixWorldInverse;for(let y=0,P=c.length;y<P;y++){const S=c[y];if(S.isSunLight){const E=i.sun[f];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(p),f++}else if(S.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),d++}else if(S.isSpotLight){const E=i.spot[v];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),v++}else if(S.isRectAreaLight){const E=i.rectArea[b];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),b++}else if(S.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),h++}else if(S.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:i}}function Rd(n){const e=new CM(n),t=[],i=[],s=[];function r(d){f.camera=d,t.length=0,i.length=0,s.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function RM(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Rd(n),e.set(s,[o])):r>=a.length?(o=new Rd(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const PM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,LM=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],IM=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Pd=new Ct,$s=new k,el=new k;function UM(n,e,t){let i=new bh;const s=new lt,r=new lt,a=new Rt,o=new X0,l=new Y0,c={},u=t.maxTextureSize,f={[es]:ln,[ln]:es,[di]:di},d=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:PM,fragmentShader:DM}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const v=new zt;v.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new hn(v,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ga;let p=this.type;this.render=function(A,D,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===Rg&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ga);const w=n.getRenderTarget(),L=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),z=n.state;z.setBlending(pi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const q=p!==this.type;q&&D.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(W=>W.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,W=A.length;B<W;B++){const te=A[B],V=te.shadow;if(V===void 0){Ze("WebGLShadowMap:",te,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const se=V.getFrameExtents();s.multiply(se),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,V.mapSize.y=r.y));const Q=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=Q,V.map===null||q===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===nr){if(te.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Pn(s.x,s.y,{format:ns,type:Kn,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),V.map.texture.name=te.name+".shadowMap",V.map.depthTexture=new Er(s.x,s.y,zn),V.map.depthTexture.name=te.name+".shadowMapDepth",V.map.depthTexture.format=Mi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Vt,V.map.depthTexture.magFilter=Vt}else te.isPointLight?(V.map=new Dh(s.x),V.map.depthTexture=new O0(s.x,qn)):(V.map=new Pn(s.x,s.y),V.map.depthTexture=new Er(s.x,s.y,qn)),V.map.depthTexture.name=te.name+".shadowMap",V.map.depthTexture.format=Mi,this.type===ga?(V.map.depthTexture.compareFunction=Q?Rc:Cc,V.map.depthTexture.minFilter=Zt,V.map.depthTexture.magFilter=Zt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Vt,V.map.depthTexture.magFilter=Vt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);const j=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();te.isPointLight!==!0&&V.updateMatrices(te,x);for(let oe=0;oe<j;oe++){const ye=V.getCamera(oe);if(te.isPointLight){const Oe=V.camera,fe=V.matrix,Ie=te.distance||Oe.far;Ie!==Oe.far&&(Oe.far=Ie,Oe.updateProjectionMatrix()),$s.setFromMatrixPosition(te.matrixWorld),Oe.position.copy($s),el.copy(Oe.position),el.add(LM[oe]),Oe.up.copy(IM[oe]),Oe.lookAt(el),Oe.updateMatrixWorld(),fe.makeTranslation(-$s.x,-$s.y,-$s.z),Pd.multiplyMatrices(Oe.projectionMatrix,Oe.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Pd,Oe.coordinateSystem,Oe.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,oe),n.clear();else{oe===0&&(n.setRenderTarget(V.map),n.clear());const Oe=V.getViewport(oe);a.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),z.viewport(a)}i=V.getFrustum(oe),S(D,x,ye,te,this.type)}V.isPointLightShadow!==!0&&this.type===nr&&y(V,x),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(w,L,F)};function y(A,D){const x=e.update(b);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null?A.mapPass=new Pn(s.x,s.y,{format:ns,type:Kn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(D,null,x,d,b,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(D,null,x,h,b,null)}function P(A,D,x,w){let L=null;const F=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(F!==void 0)L=F;else if(L=x.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const z=L.uuid,q=D.uuid;let B=c[z];B===void 0&&(B={},c[z]=B);let W=B[q];W===void 0&&(W=L.clone(),B[q]=W,D.addEventListener("dispose",E)),L=W}if(L.visible=D.visible,L.wireframe=D.wireframe,w===nr?L.side=D.shadowSide!==null?D.shadowSide:D.side:L.side=D.shadowSide!==null?D.shadowSide:f[D.side],L.alphaMap=D.alphaMap,L.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,L.map=D.map,L.clipShadows=D.clipShadows,L.clippingPlanes=D.clippingPlanes,L.clipIntersection=D.clipIntersection,L.displacementMap=D.displacementMap,L.displacementScale=D.displacementScale,L.displacementBias=D.displacementBias,L.wireframeLinewidth=D.wireframeLinewidth,L.linewidth=D.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const z=n.properties.get(L);z.light=x}return L}function S(A,D,x,w,L){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&L===nr)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);const q=e.update(A),B=A.material;if(Array.isArray(B)){const W=q.groups;for(let te=0,V=W.length;te<V;te++){const se=W[te],Q=B[se.materialIndex];if(Q&&Q.visible){const j=P(A,Q,w,L);A.onBeforeShadow(n,A,D,x,q,j,se),n.renderBufferDirect(x,null,q,j,A,se),A.onAfterShadow(n,A,D,x,q,j,se)}}}else if(B.visible){const W=P(A,B,w,L);A.onBeforeShadow(n,A,D,x,q,W,null),n.renderBufferDirect(x,null,q,W,A,null),A.onAfterShadow(n,A,D,x,q,W,null)}}const z=A.children;for(let q=0,B=z.length;q<B;q++)S(z[q],D,x,w,L)}function E(A){A.target.removeEventListener("dispose",E);for(const x in c){const w=c[x],L=A.target.uuid;L in w&&(w[L].dispose(),delete w[L])}}}function NM(n,e){function t(){let O=!1;const Ee=new Rt;let ce=null;const Ae=new Rt(0,0,0,0);return{setMask:function(Le){ce!==Le&&!O&&(n.colorMask(Le,Le,Le,Le),ce=Le)},setLocked:function(Le){O=Le},setClear:function(Le,pe,qe,Ge,yt){yt===!0&&(Le*=Ge,pe*=Ge,qe*=Ge),Ee.set(Le,pe,qe,Ge),Ae.equals(Ee)===!1&&(n.clearColor(Le,pe,qe,Ge),Ae.copy(Ee))},reset:function(){O=!1,ce=null,Ae.set(-1,0,0,0)}}}function i(){let O=!1,Ee=!1,ce=null,Ae=null,Le=null;return{setReversed:function(pe){if(Ee!==pe){const qe=e.get("EXT_clip_control");pe?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Ee=pe;const Ge=Le;Le=null,this.setClear(Ge)}},getReversed:function(){return Ee},setTest:function(pe){pe?re(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(pe){ce!==pe&&!O&&(n.depthMask(pe),ce=pe)},setFunc:function(pe){if(Ee&&(pe=u0[pe]),Ae!==pe){switch(pe){case hl:n.depthFunc(n.NEVER);break;case pl:n.depthFunc(n.ALWAYS);break;case ml:n.depthFunc(n.LESS);break;case br:n.depthFunc(n.LEQUAL);break;case gl:n.depthFunc(n.EQUAL);break;case _l:n.depthFunc(n.GEQUAL);break;case vl:n.depthFunc(n.GREATER);break;case xl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ae=pe}},setLocked:function(pe){O=pe},setClear:function(pe){Le!==pe&&(Le=pe,Ee&&(pe=1-pe),n.clearDepth(pe))},reset:function(){O=!1,ce=null,Ae=null,Le=null,Ee=!1}}}function s(){let O=!1,Ee=null,ce=null,Ae=null,Le=null,pe=null,qe=null,Ge=null,yt=null;return{setTest:function(ht){O||(ht?re(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(ht){Ee!==ht&&!O&&(n.stencilMask(ht),Ee=ht)},setFunc:function(ht,Mn,Ln){(ce!==ht||Ae!==Mn||Le!==Ln)&&(n.stencilFunc(ht,Mn,Ln),ce=ht,Ae=Mn,Le=Ln)},setOp:function(ht,Mn,Ln){(pe!==ht||qe!==Mn||Ge!==Ln)&&(n.stencilOp(ht,Mn,Ln),pe=ht,qe=Mn,Ge=Ln)},setLocked:function(ht){O=ht},setClear:function(ht){yt!==ht&&(n.clearStencil(ht),yt=ht)},reset:function(){O=!1,Ee=null,ce=null,Ae=null,Le=null,pe=null,qe=null,Ge=null,yt=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d={},h=new WeakMap,v=[],b=null,g=!1,p=null,y=null,P=null,S=null,E=null,A=null,D=null,x=new ft(0,0,0),w=0,L=!1,F=null,z=null,q=null,B=null,W=null;const te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,se=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(Q)[1]),V=se>=1):Q.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),V=se>=2);let j=null,oe={};const ye=n.getParameter(n.SCISSOR_BOX),Oe=n.getParameter(n.VIEWPORT),fe=new Rt().fromArray(ye),Ie=new Rt().fromArray(Oe);function ze(O,Ee,ce,Ae){const Le=new Uint8Array(4),pe=n.createTexture();n.bindTexture(O,pe),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<ce;qe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,Ae,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(Ee+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return pe}const K={};K[n.TEXTURE_2D]=ze(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(n.DEPTH_TEST),a.setFunc(br),J(!1),he(Ru),re(n.CULL_FACE),ae(pi);function re(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function be(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function Xe(O,Ee){return d[O]!==Ee?(n.bindFramebuffer(O,Ee),d[O]=Ee,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ee),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function Pe(O,Ee){let ce=v,Ae=!1;if(O){ce=h.get(Ee),ce===void 0&&(ce=[],h.set(Ee,ce));const Le=O.textures;if(ce.length!==Le.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,qe=Le.length;pe<qe;pe++)ce[pe]=n.COLOR_ATTACHMENT0+pe;ce.length=Le.length,Ae=!0}}else ce[0]!==n.BACK&&(ce[0]=n.BACK,Ae=!0);Ae&&n.drawBuffers(ce)}function C(O){return b!==O?(n.useProgram(O),b=O,!0):!1}const I={[bs]:n.FUNC_ADD,[Dg]:n.FUNC_SUBTRACT,[Lg]:n.FUNC_REVERSE_SUBTRACT};I[Ig]=n.MIN,I[Ug]=n.MAX;const G={[Ng]:n.ZERO,[Fg]:n.ONE,[Og]:n.SRC_COLOR,[Qf]:n.SRC_ALPHA,[Gg]:n.SRC_ALPHA_SATURATE,[Vg]:n.DST_COLOR,[kg]:n.DST_ALPHA,[Bg]:n.ONE_MINUS_SRC_COLOR,[jf]:n.ONE_MINUS_SRC_ALPHA,[zg]:n.ONE_MINUS_DST_COLOR,[Hg]:n.ONE_MINUS_DST_ALPHA,[Wg]:n.CONSTANT_COLOR,[Xg]:n.ONE_MINUS_CONSTANT_COLOR,[Yg]:n.CONSTANT_ALPHA,[qg]:n.ONE_MINUS_CONSTANT_ALPHA};function ae(O,Ee,ce,Ae,Le,pe,qe,Ge,yt,ht){if(O===pi){g===!0&&(be(n.BLEND),g=!1);return}if(g===!1&&(re(n.BLEND),g=!0),O!==Pg){if(O!==p||ht!==L){if((y!==bs||E!==bs)&&(n.blendEquation(n.FUNC_ADD),y=bs,E=bs),ht)switch(O){case fr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ri:n.blendFunc(n.ONE,n.ONE);break;case Pu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Du:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:dt("WebGLState: Invalid blending: ",O);break}else switch(O){case fr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ri:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Pu:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Du:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",O);break}P=null,S=null,A=null,D=null,x.set(0,0,0),w=0,p=O,L=ht}return}Le=Le||Ee,pe=pe||ce,qe=qe||Ae,(Ee!==y||Le!==E)&&(n.blendEquationSeparate(I[Ee],I[Le]),y=Ee,E=Le),(ce!==P||Ae!==S||pe!==A||qe!==D)&&(n.blendFuncSeparate(G[ce],G[Ae],G[pe],G[qe]),P=ce,S=Ae,A=pe,D=qe),(Ge.equals(x)===!1||yt!==w)&&(n.blendColor(Ge.r,Ge.g,Ge.b,yt),x.copy(Ge),w=yt),p=O,L=!1}function ne(O,Ee){O.side===di?be(n.CULL_FACE):re(n.CULL_FACE);let ce=O.side===ln;Ee&&(ce=!ce),J(ce),O.blending===fr&&O.transparent===!1?ae(pi):ae(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const Ae=O.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),de(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(O){F!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),F=O)}function he(O){O!==wg?(re(n.CULL_FACE),O!==z&&(O===Ru?n.cullFace(n.BACK):O===Cg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),z=O}function ue(O){O!==q&&(V&&n.lineWidth(O),q=O)}function de(O,Ee,ce){O?(re(n.POLYGON_OFFSET_FILL),(B!==Ee||W!==ce)&&(B=Ee,W=ce,a.getReversed()&&(Ee=-Ee),n.polygonOffset(Ee,ce))):be(n.POLYGON_OFFSET_FILL)}function ee(O){O?re(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function xe(O){O===void 0&&(O=n.TEXTURE0+te-1),j!==O&&(n.activeTexture(O),j=O)}function R(O,Ee,ce){ce===void 0&&(j===null?ce=n.TEXTURE0+te-1:ce=j);let Ae=oe[ce];Ae===void 0&&(Ae={type:void 0,texture:void 0},oe[ce]=Ae),(Ae.type!==O||Ae.texture!==Ee)&&(j!==ce&&(n.activeTexture(ce),j=ce),n.bindTexture(O,Ee||K[O]),Ae.type=O,Ae.texture=Ee)}function we(){const O=oe[j];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Se(){try{n.compressedTexImage2D(...arguments)}catch(O){dt("WebGLState:",O)}}function T(){try{n.compressedTexImage3D(...arguments)}catch(O){dt("WebGLState:",O)}}function _(){try{n.texSubImage2D(...arguments)}catch(O){dt("WebGLState:",O)}}function U(){try{n.texSubImage3D(...arguments)}catch(O){dt("WebGLState:",O)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(O){dt("WebGLState:",O)}}function Z(){try{n.compressedTexSubImage3D(...arguments)}catch(O){dt("WebGLState:",O)}}function ge(){try{n.texStorage2D(...arguments)}catch(O){dt("WebGLState:",O)}}function ve(){try{n.texStorage3D(...arguments)}catch(O){dt("WebGLState:",O)}}function ie(){try{n.texImage2D(...arguments)}catch(O){dt("WebGLState:",O)}}function le(){try{n.texImage3D(...arguments)}catch(O){dt("WebGLState:",O)}}function _e(O){return f[O]!==void 0?f[O]:n.getParameter(O)}function Ue(O,Ee){f[O]!==Ee&&(n.pixelStorei(O,Ee),f[O]=Ee)}function Te(O){fe.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),fe.copy(O))}function Me(O){Ie.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Ie.copy(O))}function Ye(O,Ee){let ce=c.get(Ee);ce===void 0&&(ce=new WeakMap,c.set(Ee,ce));let Ae=ce.get(O);Ae===void 0&&(Ae=n.getUniformBlockIndex(Ee,O.name),ce.set(O,Ae))}function Ke(O,Ee){const Ae=c.get(Ee).get(O);l.get(Ee)!==Ae&&(n.uniformBlockBinding(Ee,Ae,O.__bindingPointIndex),l.set(Ee,Ae))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},j=null,oe={},d={},h=new WeakMap,v=[],b=null,g=!1,p=null,y=null,P=null,S=null,E=null,A=null,D=null,x=new ft(0,0,0),w=0,L=!1,F=null,z=null,q=null,B=null,W=null,fe.set(0,0,n.canvas.width,n.canvas.height),Ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:re,disable:be,bindFramebuffer:Xe,drawBuffers:Pe,useProgram:C,setBlending:ae,setMaterial:ne,setFlipSided:J,setCullFace:he,setLineWidth:ue,setPolygonOffset:de,setScissorTest:ee,activeTexture:xe,bindTexture:R,unbindTexture:we,compressedTexImage2D:Se,compressedTexImage3D:T,texImage2D:ie,texImage3D:le,pixelStorei:Ue,getParameter:_e,updateUBOMapping:Ye,uniformBlockBinding:Ke,texStorage2D:ge,texStorage3D:ve,texSubImage2D:_,texSubImage3D:U,compressedTexSubImage2D:H,compressedTexSubImage3D:Z,scissor:Te,viewport:Me,reset:Qe}}function FM(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,u=new WeakMap,f=new Set;let d;const h=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(T,_){return v?new OffscreenCanvas(T,_):Na("canvas")}function g(T,_,U){let H=1;const Z=Se(T);if((Z.width>U||Z.height>U)&&(H=U/Math.max(Z.width,Z.height)),H<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ge=Math.floor(H*Z.width),ve=Math.floor(H*Z.height);d===void 0&&(d=b(ge,ve));const ie=_?b(ge,ve):d;return ie.width=ge,ie.height=ve,ie.getContext("2d").drawImage(T,0,0,ge,ve),Ze("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ge+"x"+ve+")."),ie}else return"data"in T&&Ze("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function p(T){return T.generateMipmaps}function y(T){n.generateMipmap(T)}function P(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(T,_,U,H,Z,ge=!1){if(T!==null){if(n[T]!==void 0)return n[T];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ve;H&&(ve=e.get("EXT_texture_norm16"),ve||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=_;if(_===n.RED&&(U===n.FLOAT&&(ie=n.R32F),U===n.HALF_FLOAT&&(ie=n.R16F),U===n.UNSIGNED_BYTE&&(ie=n.R8),U===n.UNSIGNED_SHORT&&ve&&(ie=ve.R16_EXT),U===n.SHORT&&ve&&(ie=ve.R16_SNORM_EXT)),_===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(ie=n.R8UI),U===n.UNSIGNED_SHORT&&(ie=n.R16UI),U===n.UNSIGNED_INT&&(ie=n.R32UI),U===n.BYTE&&(ie=n.R8I),U===n.SHORT&&(ie=n.R16I),U===n.INT&&(ie=n.R32I)),_===n.RG&&(U===n.FLOAT&&(ie=n.RG32F),U===n.HALF_FLOAT&&(ie=n.RG16F),U===n.UNSIGNED_BYTE&&(ie=n.RG8),U===n.UNSIGNED_SHORT&&ve&&(ie=ve.RG16_EXT),U===n.SHORT&&ve&&(ie=ve.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(ie=n.RG8UI),U===n.UNSIGNED_SHORT&&(ie=n.RG16UI),U===n.UNSIGNED_INT&&(ie=n.RG32UI),U===n.BYTE&&(ie=n.RG8I),U===n.SHORT&&(ie=n.RG16I),U===n.INT&&(ie=n.RG32I)),_===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(ie=n.RGB8UI),U===n.UNSIGNED_SHORT&&(ie=n.RGB16UI),U===n.UNSIGNED_INT&&(ie=n.RGB32UI),U===n.BYTE&&(ie=n.RGB8I),U===n.SHORT&&(ie=n.RGB16I),U===n.INT&&(ie=n.RGB32I)),_===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(ie=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(ie=n.RGBA16UI),U===n.UNSIGNED_INT&&(ie=n.RGBA32UI),U===n.BYTE&&(ie=n.RGBA8I),U===n.SHORT&&(ie=n.RGBA16I),U===n.INT&&(ie=n.RGBA32I)),_===n.RGB&&(U===n.UNSIGNED_SHORT&&ve&&(ie=ve.RGB16_EXT),U===n.SHORT&&ve&&(ie=ve.RGB16_SNORM_EXT),U===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(ie=n.R11F_G11F_B10F)),_===n.RGBA){const le=ge?Ia:ot.getTransfer(Z);U===n.FLOAT&&(ie=n.RGBA32F),U===n.HALF_FLOAT&&(ie=n.RGBA16F),U===n.UNSIGNED_BYTE&&(ie=le===gt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT&&ve&&(ie=ve.RGBA16_EXT),U===n.SHORT&&ve&&(ie=ve.RGBA16_SNORM_EXT),U===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function E(T,_){let U;return T?_===null||_===qn||_===Tr?U=n.DEPTH24_STENCIL8:_===zn?U=n.DEPTH32F_STENCIL8:_===yr&&(U=n.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===qn||_===Tr?U=n.DEPTH_COMPONENT24:_===zn?U=n.DEPTH_COMPONENT32F:_===yr&&(U=n.DEPTH_COMPONENT16),U}function A(T,_){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Vt&&T.minFilter!==Zt?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function D(T){const _=T.target;_.removeEventListener("dispose",D),w(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&f.delete(_)}function x(T){const _=T.target;_.removeEventListener("dispose",x),F(_)}function w(T){const _=i.get(T);if(_.__webglInit===void 0)return;const U=T.source,H=h.get(U);if(H){const Z=H[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&L(T),Object.keys(H).length===0&&h.delete(U)}i.remove(T)}function L(T){const _=i.get(T);n.deleteTexture(_.__webglTexture);const U=T.source,H=h.get(U);delete H[_.__cacheKey],a.memory.textures--}function F(T){const _=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let Z=0;Z<_.__webglFramebuffer[H].length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[H][Z]);else n.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)n.deleteFramebuffer(_.__webglFramebuffer[H]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const U=T.textures;for(let H=0,Z=U.length;H<Z;H++){const ge=i.get(U[H]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),a.memory.textures--),i.remove(U[H])}i.remove(T)}let z=0;function q(){z=0}function B(){return z}function W(T){z=T}function te(){const T=z;return T>=s.maxTextures&&Ze("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,T}function V(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function se(T,_){const U=i.get(T);if(T.isVideoTexture&&R(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&U.__version!==T.version){const H=T.image;if(H===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{be(U,T,_);return}}else T.isExternalTexture&&(U.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+_)}function Q(T,_){const U=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){be(U,T,_);return}else T.isExternalTexture&&(U.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+_)}function j(T,_){const U=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){be(U,T,_);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+_)}function oe(T,_){const U=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&U.__version!==T.version){Xe(U,T,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+_)}const ye={[Sl]:n.REPEAT,[fi]:n.CLAMP_TO_EDGE,[Ml]:n.MIRRORED_REPEAT},Oe={[Vt]:n.NEAREST,[Jg]:n.NEAREST_MIPMAP_NEAREST,[Hr]:n.NEAREST_MIPMAP_LINEAR,[Zt]:n.LINEAR,[Mo]:n.LINEAR_MIPMAP_NEAREST,[Zi]:n.LINEAR_MIPMAP_LINEAR},fe={[e0]:n.NEVER,[r0]:n.ALWAYS,[t0]:n.LESS,[Cc]:n.LEQUAL,[n0]:n.EQUAL,[Rc]:n.GEQUAL,[i0]:n.GREATER,[s0]:n.NOTEQUAL};function Ie(T,_){if(_.type===zn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Zt||_.magFilter===Mo||_.magFilter===Hr||_.magFilter===Zi||_.minFilter===Zt||_.minFilter===Mo||_.minFilter===Hr||_.minFilter===Zi)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ye[_.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ye[_.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ye[_.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Oe[_.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Oe[_.minFilter]),_.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,fe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Vt||_.minFilter!==Hr&&_.minFilter!==Zi||_.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ze(T,_){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",D));const H=_.source;let Z=h.get(H);Z===void 0&&(Z={},h.set(H,Z));const ge=V(_);if(ge!==T.__cacheKey){Z[ge]===void 0&&(Z[ge]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Z[ge].usedTimes++;const ve=Z[T.__cacheKey];ve!==void 0&&(Z[T.__cacheKey].usedTimes--,ve.usedTimes===0&&L(_)),T.__cacheKey=ge,T.__webglTexture=Z[ge].texture}return U}function K(T,_,U){return Math.floor(Math.floor(T/U)/_)}function re(T,_,U,H){const ge=T.updateRanges;if(ge.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,U,H,_.data);else{ge.sort((Ue,Te)=>Ue.start-Te.start);let ve=0;for(let Ue=1;Ue<ge.length;Ue++){const Te=ge[ve],Me=ge[Ue],Ye=Te.start+Te.count,Ke=K(Me.start,_.width,4),Qe=K(Te.start,_.width,4);Me.start<=Ye+1&&Ke===Qe&&K(Me.start+Me.count-1,_.width,4)===Ke?Te.count=Math.max(Te.count,Me.start+Me.count-Te.start):(++ve,ge[ve]=Me)}ge.length=ve+1;const ie=t.getParameter(n.UNPACK_ROW_LENGTH),le=t.getParameter(n.UNPACK_SKIP_PIXELS),_e=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Ue=0,Te=ge.length;Ue<Te;Ue++){const Me=ge[Ue],Ye=Math.floor(Me.start/4),Ke=Math.ceil(Me.count/4),Qe=Ye%_.width,O=Math.floor(Ye/_.width),Ee=Ke,ce=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,Qe,O,Ee,ce,U,H,_.data)}T.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ie),t.pixelStorei(n.UNPACK_SKIP_PIXELS,le),t.pixelStorei(n.UNPACK_SKIP_ROWS,_e)}}function be(T,_,U){let H=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=n.TEXTURE_3D);const Z=ze(T,_),ge=_.source;t.bindTexture(H,T.__webglTexture,n.TEXTURE0+U);const ve=i.get(ge);if(ge.version!==ve.__version||Z===!0){if(t.activeTexture(n.TEXTURE0+U),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const ce=ot.getPrimaries(ot.workingColorSpace),Ae=_.colorSpace===Ui?null:ot.getPrimaries(_.colorSpace),Le=_.colorSpace===Ui||ce===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let le=g(_.image,!1,s.maxTextureSize);le=we(_,le);const _e=r.convert(_.format,_.colorSpace),Ue=r.convert(_.type);let Te=S(_.internalFormat,_e,Ue,_.normalized,_.colorSpace,_.isVideoTexture);Ie(H,_);let Me;const Ye=_.mipmaps,Ke=_.isVideoTexture!==!0,Qe=ve.__version===void 0||Z===!0,O=ge.dataReady,Ee=A(_,le);if(_.isDepthTexture)Te=E(_.format===Ji,_.type),Qe&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,Te,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Te,le.width,le.height,0,_e,Ue,null));else if(_.isDataTexture)if(Ye.length>0){Ke&&Qe&&t.texStorage2D(n.TEXTURE_2D,Ee,Te,Ye[0].width,Ye[0].height);for(let ce=0,Ae=Ye.length;ce<Ae;ce++)Me=Ye[ce],Ke?O&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Me.width,Me.height,_e,Ue,Me.data):t.texImage2D(n.TEXTURE_2D,ce,Te,Me.width,Me.height,0,_e,Ue,Me.data);_.generateMipmaps=!1}else Ke?(Qe&&t.texStorage2D(n.TEXTURE_2D,Ee,Te,le.width,le.height),O&&re(_,le,_e,Ue)):t.texImage2D(n.TEXTURE_2D,0,Te,le.width,le.height,0,_e,Ue,le.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ke&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Te,Ye[0].width,Ye[0].height,le.depth);for(let ce=0,Ae=Ye.length;ce<Ae;ce++)if(Me=Ye[ce],_.format!==An)if(_e!==null)if(Ke){if(O)if(_.layerUpdates.size>0){const Le=ld(Me.width,Me.height,_.format,_.type);for(const pe of _.layerUpdates){const qe=Me.data.subarray(pe*Le/Me.data.BYTES_PER_ELEMENT,(pe+1)*Le/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,pe,Me.width,Me.height,1,_e,qe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,Me.width,Me.height,le.depth,_e,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,Te,Me.width,Me.height,le.depth,0,Me.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,Me.width,Me.height,le.depth,_e,Ue,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,Te,Me.width,Me.height,le.depth,0,_e,Ue,Me.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ke&&Qe&&t.texStorage2D(n.TEXTURE_2D,Ee,Te,Ye[0].width,Ye[0].height);for(let ce=0,Ae=Ye.length;ce<Ae;ce++)Me=Ye[ce],_.format!==An?_e!==null?Ke?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,Me.width,Me.height,_e,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,Te,Me.width,Me.height,0,Me.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?O&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Me.width,Me.height,_e,Ue,Me.data):t.texImage2D(n.TEXTURE_2D,ce,Te,Me.width,Me.height,0,_e,Ue,Me.data)}else if(_.isDataArrayTexture)if(Ke){if(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Te,le.width,le.height,le.depth),O)if(_.layerUpdates.size>0){const ce=ld(le.width,le.height,_.format,_.type);for(const Ae of _.layerUpdates){const Le=le.data.subarray(Ae*ce/le.data.BYTES_PER_ELEMENT,(Ae+1)*ce/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ae,le.width,le.height,1,_e,Ue,Le)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,_e,Ue,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,le.width,le.height,le.depth,0,_e,Ue,le.data);else if(_.isData3DTexture)Ke?(Qe&&t.texStorage3D(n.TEXTURE_3D,Ee,Te,le.width,le.height,le.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,_e,Ue,le.data)):t.texImage3D(n.TEXTURE_3D,0,Te,le.width,le.height,le.depth,0,_e,Ue,le.data);else if(_.isFramebufferTexture){if(Qe)if(Ke)t.texStorage2D(n.TEXTURE_2D,Ee,Te,le.width,le.height);else{let ce=le.width,Ae=le.height;for(let Le=0;Le<Ee;Le++)t.texImage2D(n.TEXTURE_2D,Le,Te,ce,Ae,0,_e,Ue,null),ce>>=1,Ae>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){const ce=n.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),le.parentNode!==ce){ce.appendChild(le),f.add(_),ce.onpaint=Ae=>{const Le=Ae.changedElements;for(const pe of f)Le.includes(pe.image)&&(pe.needsUpdate=!0)},ce.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,le);else{const Le=n.RGBA,pe=n.RGBA,qe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Le,pe,qe,le)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ye.length>0){if(Ke&&Qe){const ce=Se(Ye[0]);t.texStorage2D(n.TEXTURE_2D,Ee,Te,ce.width,ce.height)}for(let ce=0,Ae=Ye.length;ce<Ae;ce++)Me=Ye[ce],Ke?O&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,_e,Ue,Me):t.texImage2D(n.TEXTURE_2D,ce,Te,_e,Ue,Me);_.generateMipmaps=!1}else if(Ke){if(Qe){const ce=Se(le);t.texStorage2D(n.TEXTURE_2D,Ee,Te,ce.width,ce.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Ue,le)}else t.texImage2D(n.TEXTURE_2D,0,Te,_e,Ue,le);p(_)&&y(H),ve.__version=ge.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Xe(T,_,U){if(_.image.length!==6)return;const H=ze(T,_),Z=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+U);const ge=i.get(Z);if(Z.version!==ge.__version||H===!0){t.activeTexture(n.TEXTURE0+U);const ve=ot.getPrimaries(ot.workingColorSpace),ie=_.colorSpace===Ui?null:ot.getPrimaries(_.colorSpace),le=_.colorSpace===Ui||ve===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const _e=_.isCompressedTexture||_.image[0].isCompressedTexture,Ue=_.image[0]&&_.image[0].isDataTexture,Te=[];for(let pe=0;pe<6;pe++)!_e&&!Ue?Te[pe]=g(_.image[pe],!0,s.maxCubemapSize):Te[pe]=Ue?_.image[pe].image:_.image[pe],Te[pe]=we(_,Te[pe]);const Me=Te[0],Ye=r.convert(_.format,_.colorSpace),Ke=r.convert(_.type),Qe=S(_.internalFormat,Ye,Ke,_.normalized,_.colorSpace),O=_.isVideoTexture!==!0,Ee=ge.__version===void 0||H===!0,ce=Z.dataReady;let Ae=A(_,Me);Ie(n.TEXTURE_CUBE_MAP,_);let Le;if(_e){O&&Ee&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Qe,Me.width,Me.height);for(let pe=0;pe<6;pe++){Le=Te[pe].mipmaps;for(let qe=0;qe<Le.length;qe++){const Ge=Le[qe];_.format!==An?Ye!==null?O?ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe,0,0,Ge.width,Ge.height,Ye,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe,Qe,Ge.width,Ge.height,0,Ge.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe,0,0,Ge.width,Ge.height,Ye,Ke,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe,Qe,Ge.width,Ge.height,0,Ye,Ke,Ge.data)}}}else{if(Le=_.mipmaps,O&&Ee){Le.length>0&&Ae++;const pe=Se(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Qe,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Ue){O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Te[pe].width,Te[pe].height,Ye,Ke,Te[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Qe,Te[pe].width,Te[pe].height,0,Ye,Ke,Te[pe].data);for(let qe=0;qe<Le.length;qe++){const yt=Le[qe].image[pe].image;O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe+1,0,0,yt.width,yt.height,Ye,Ke,yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe+1,Qe,yt.width,yt.height,0,Ye,Ke,yt.data)}}else{O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ye,Ke,Te[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Qe,Ye,Ke,Te[pe]);for(let qe=0;qe<Le.length;qe++){const Ge=Le[qe];O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe+1,0,0,Ye,Ke,Ge.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe+1,Qe,Ye,Ke,Ge.image[pe])}}}p(_)&&y(n.TEXTURE_CUBE_MAP),ge.__version=Z.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Pe(T,_,U,H,Z,ge){const ve=r.convert(U.format,U.colorSpace),ie=r.convert(U.type),le=S(U.internalFormat,ve,ie,U.normalized,U.colorSpace),_e=i.get(_),Ue=i.get(U);if(Ue.__renderTarget=_,!_e.__hasExternalTextures){const Te=Math.max(1,_.width>>ge),Me=Math.max(1,_.height>>ge);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,ge,le,Te,Me,_.depth,0,ve,ie,null):t.texImage2D(Z,ge,le,Te,Me,0,ve,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),xe(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,Z,Ue.__webglTexture,0,ee(_)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,Z,Ue.__webglTexture,ge),t.bindFramebuffer(n.FRAMEBUFFER,null)}function C(T,_,U){if(n.bindRenderbuffer(n.RENDERBUFFER,T),_.depthBuffer){const H=_.depthTexture,Z=H&&H.isDepthTexture?H.type:null,ge=E(_.stencilBuffer,Z),ve=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;xe(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee(_),ge,_.width,_.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee(_),ge,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ge,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,T)}else{const H=_.textures;for(let Z=0;Z<H.length;Z++){const ge=H[Z],ve=r.convert(ge.format,ge.colorSpace),ie=r.convert(ge.type),le=S(ge.internalFormat,ve,ie,ge.normalized,ge.colorSpace);xe(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee(_),le,_.width,_.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee(_),le,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,le,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function I(T,_,U){const H=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=i.get(_.depthTexture);if(Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,_.depthTexture.addEventListener("dispose",D)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,_.depthTexture);const _e=r.convert(_.depthTexture.format),Ue=r.convert(_.depthTexture.type);let Te;_.depthTexture.format===Mi?Te=n.DEPTH_COMPONENT24:_.depthTexture.format===Ji&&(Te=n.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Te,_.width,_.height,0,_e,Ue,null)}}else se(_.depthTexture,0);const ge=Z.__webglTexture,ve=ee(_),ie=H?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,le=_.depthTexture.format===Ji?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Mi)xe(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,ie,ge,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,le,ie,ge,0);else if(_.depthTexture.format===Ji)xe(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,ie,ge,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,le,ie,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function G(T){const _=i.get(T),U=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const H=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",Z)};H.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=H}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(U)for(let H=0;H<6;H++)I(_.__webglFramebuffer[H],T,H);else{const H=T.texture.mipmaps;H&&H.length>0?I(_.__webglFramebuffer[0],T,0):I(_.__webglFramebuffer,T,0)}else if(U){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=n.createRenderbuffer(),C(_.__webglDepthbuffer[H],T,!1);else{const Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=_.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,ge),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,ge)}}else{const H=T.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),C(_.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ge),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,ge)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(T,_,U){const H=i.get(T);_!==void 0&&Pe(H.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&G(T)}function ne(T){const _=T.texture,U=i.get(T),H=i.get(_);T.addEventListener("dispose",x);const Z=T.textures,ge=T.isWebGLCubeRenderTarget===!0,ve=Z.length>1;if(ve||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=_.version,a.memory.textures++),ge){U.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[ie]=[];for(let le=0;le<_.mipmaps.length;le++)U.__webglFramebuffer[ie][le]=n.createFramebuffer()}else U.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let ie=0;ie<_.mipmaps.length;ie++)U.__webglFramebuffer[ie]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(ve)for(let ie=0,le=Z.length;ie<le;ie++){const _e=i.get(Z[ie]);_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&xe(T)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ie=0;ie<Z.length;ie++){const le=Z[ie];U.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ie]);const _e=r.convert(le.format,le.colorSpace),Ue=r.convert(le.type),Te=S(le.internalFormat,_e,Ue,le.normalized,le.colorSpace,T.isXRRenderTarget===!0),Me=ee(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,Te,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,U.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),C(U.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ge){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,_);for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0)for(let le=0;le<_.mipmaps.length;le++)Pe(U.__webglFramebuffer[ie][le],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,le);else Pe(U.__webglFramebuffer[ie],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(_)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ie=0,le=Z.length;ie<le;ie++){const _e=Z[ie],Ue=i.get(_e);let Te=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Te=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Te,Ue.__webglTexture),Ie(Te,_e),Pe(U.__webglFramebuffer,T,_e,n.COLOR_ATTACHMENT0+ie,Te,0),p(_e)&&y(Te)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,H.__webglTexture),Ie(ie,_),_.mipmaps&&_.mipmaps.length>0)for(let le=0;le<_.mipmaps.length;le++)Pe(U.__webglFramebuffer[le],T,_,n.COLOR_ATTACHMENT0,ie,le);else Pe(U.__webglFramebuffer,T,_,n.COLOR_ATTACHMENT0,ie,0);p(_)&&y(ie),t.unbindTexture()}T.depthBuffer&&G(T)}function J(T){const _=T.textures;for(let U=0,H=_.length;U<H;U++){const Z=_[U];if(p(Z)){const ge=P(T),ve=i.get(Z).__webglTexture;t.bindTexture(ge,ve),y(ge),t.unbindTexture()}}}const he=[],ue=[];function de(T){if(T.samples>0){if(xe(T)===!1){const _=T.textures,U=T.width,H=T.height;let Z=n.COLOR_BUFFER_BIT;const ge=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(T),ie=_.length>1;if(ie)for(let _e=0;_e<_.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const le=T.texture.mipmaps;le&&le.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let _e=0;_e<_.length;_e++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[_e]);const Ue=i.get(_[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,U,H,0,0,U,H,Z,n.NEAREST),l===!0&&(he.length=0,ue.length=0,he.push(n.COLOR_ATTACHMENT0+_e),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(he.push(ge),ue.push(ge),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ue)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let _e=0;_e<_.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,ve.__webglColorRenderbuffer[_e]);const Ue=i.get(_[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){const _=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ee(T){return Math.min(s.maxSamples,T.samples)}function xe(T){const _=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function R(T){const _=a.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function we(T,_){const U=T.colorSpace,H=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==La&&U!==Ui&&(ot.getTransfer(U)===gt?(H!==An||Z!==xn)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",U)),_}function Se(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=te,this.resetTextureUnits=q,this.getTextureUnits=B,this.setTextureUnits=W,this.setTexture2D=se,this.setTexture2DArray=Q,this.setTexture3D=j,this.setTextureCube=oe,this.rebindTextures=ae,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=G,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=xe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function OM(n,e){function t(i,s=Ui){let r;const a=ot.getTransfer(s);if(i===xn)return n.UNSIGNED_BYTE;if(i===yc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===dh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===fh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ch)return n.BYTE;if(i===uh)return n.SHORT;if(i===yr)return n.UNSIGNED_SHORT;if(i===bc)return n.INT;if(i===qn)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===Kn)return n.HALF_FLOAT;if(i===hh)return n.ALPHA;if(i===ph)return n.RGB;if(i===An)return n.RGBA;if(i===Mi)return n.DEPTH_COMPONENT;if(i===Ji)return n.DEPTH_STENCIL;if(i===mh)return n.RED;if(i===Ec)return n.RED_INTEGER;if(i===ns)return n.RG;if(i===Ac)return n.RG_INTEGER;if(i===wc)return n.RGBA_INTEGER;if(i===_a||i===va||i===xa||i===Sa)if(a===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===_a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===_a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bl||i===yl||i===Tl||i===El)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Al||i===wl||i===Cl||i===Rl||i===Pl||i===Pa||i===Dl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Al||i===wl)return a===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Cl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Rl)return r.COMPRESSED_R11_EAC;if(i===Pl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Pa)return r.COMPRESSED_RG11_EAC;if(i===Dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ll||i===Il||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===kl||i===Hl||i===Vl||i===zl||i===Gl||i===Wl||i===Xl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ll)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Il)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ul)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ol)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yl||i===ql||i===Kl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Yl)return a===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zl||i===Jl||i===Da||i===$l)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Zl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Tr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const BM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Eh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Zn({vertexShader:BM,fragmentShader:kM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hn(new eo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VM extends ss{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,v=null;const b=typeof XRWebGLBinding<"u",g=new HM,p={},y=t.getContextAttributes();let P=null,S=null;const E=[],A=[],D=new lt;let x=null,w=null;const L=new vn;L.viewport=new Rt;const F=new vn;F.viewport=new Rt;const z=[L,F],q=new K0;let B=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let re=E[K];return re===void 0&&(re=new Po,E[K]=re),re.getTargetRaySpace()},this.getControllerGrip=function(K){let re=E[K];return re===void 0&&(re=new Po,E[K]=re),re.getGripSpace()},this.getHand=function(K){let re=E[K];return re===void 0&&(re=new Po,E[K]=re),re.getHandSpace()};function te(K){const re=A.indexOf(K.inputSource);if(re===-1)return;const be=E[re];be!==void 0&&(be.update(K.inputSource,K.frame,c||a),be.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",se);for(let K=0;K<E.length;K++){const re=A[K];re!==null&&(A[K]=null,E[K].disconnect(re))}B=null,W=null,g.reset();for(const K in p)delete p[K];if(e.setRenderTarget(P),h=null,d=null,f=null,s=null,S=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(D.width,D.height,!1),w!==null){const K=w.camera;K.fov=w.fov,K.zoom=w.zoom,K.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(P=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",V),s.addEventListener("inputsourceschange",se),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(D),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Xe=null,Pe=null;y.depth&&(Pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=y.stencil?Ji:Mi,Xe=y.stencil?Tr:qn);const C={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(C),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Pn(d.textureWidth,d.textureHeight,{format:An,type:xn,depthTexture:new Er(d.textureWidth,d.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const be={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Pn(h.framebufferWidth,h.framebufferHeight,{format:An,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ze.setContext(s),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function se(K){for(let re=0;re<K.removed.length;re++){const be=K.removed[re],Xe=A.indexOf(be);Xe>=0&&(A[Xe]=null,E[Xe].disconnect(be))}for(let re=0;re<K.added.length;re++){const be=K.added[re];let Xe=A.indexOf(be);if(Xe===-1){for(let C=0;C<E.length;C++)if(C>=A.length){A.push(be),Xe=C;break}else if(A[C]===null){A[C]=be,Xe=C;break}if(Xe===-1)break}const Pe=E[Xe];Pe&&Pe.connect(be)}}const Q=new k,j=new k;function oe(K,re,be){Q.setFromMatrixPosition(re.matrixWorld),j.setFromMatrixPosition(be.matrixWorld);const Xe=Q.distanceTo(j),Pe=re.projectionMatrix.elements,C=be.projectionMatrix.elements,I=Pe[14]/(Pe[10]-1),G=Pe[14]/(Pe[10]+1),ae=(Pe[9]+1)/Pe[5],ne=(Pe[9]-1)/Pe[5],J=(Pe[8]-1)/Pe[0],he=(C[8]+1)/C[0],ue=I*J,de=I*he,ee=Xe/(-J+he),xe=ee*-J;if(re.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(xe),K.translateZ(ee),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Pe[10]===-1)K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const R=I+ee,we=G+ee,Se=ue-xe,T=de+(Xe-xe),_=ae*G/we*R,U=ne*G/we*R;K.projectionMatrix.makePerspective(Se,T,_,U,R,we),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ye(K,re){re===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(re.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let re=K.near,be=K.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(be=g.depthFar)),q.near=F.near=L.near=re,q.far=F.far=L.far=be,(B!==q.near||W!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),B=q.near,W=q.far),q.layers.mask=K.layers.mask|6,L.layers.mask=q.layers.mask&-5,F.layers.mask=q.layers.mask&-3;const Xe=K.parent,Pe=q.cameras;ye(q,Xe);for(let C=0;C<Pe.length;C++)ye(Pe[C],Xe);Pe.length===2?oe(q,L,F):q.projectionMatrix.copy(L.projectionMatrix),w===null&&K.isPerspectiveCamera&&(w={camera:K,fov:K.fov,zoom:K.zoom}),Oe(K,q,Xe)};function Oe(K,re,be){be===null?K.matrix.copy(re.matrixWorld):(K.matrix.copy(be.matrixWorld),K.matrix.invert(),K.matrix.multiply(re.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ql*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(q)},this.getCameraTexture=function(K){return p[K]};let fe=null;function Ie(K,re){if(u=re.getViewerPose(c||a),v=re,u!==null){const be=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let Xe=!1;be.length!==q.cameras.length&&(q.cameras.length=0,Xe=!0);for(let G=0;G<be.length;G++){const ae=be[G];let ne=null;if(h!==null)ne=h.getViewport(ae);else{const he=f.getViewSubImage(d,ae);ne=he.viewport,G===0&&(e.setRenderTargetTextures(S,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(S))}let J=z[G];J===void 0&&(J=new vn,J.layers.enable(G),J.viewport=new Rt,z[G]=J),J.matrix.fromArray(ae.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(ae.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(ne.x,ne.y,ne.width,ne.height),G===0&&(q.matrix.copy(J.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Xe===!0&&q.cameras.push(J)}const Pe=s.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){f=i.getBinding();const G=f.getDepthInformation(be[0]);G&&G.isValid&&G.texture&&g.init(G,s.renderState)}if(Pe&&Pe.includes("camera-access")&&b){e.state.unbindTexture(),f=i.getBinding();for(let G=0;G<be.length;G++){const ae=be[G].camera;if(ae){let ne=p[ae];ne||(ne=new Eh,p[ae]=ne);const J=f.getCameraImage(ae);ne.sourceTexture=J}}}}for(let be=0;be<E.length;be++){const Xe=A[be],Pe=E[be];Xe!==null&&Pe!==void 0&&Pe.update(Xe,re,c||a)}fe&&fe(K,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),v=null}const ze=new Rh;ze.setAnimationLoop(Ie),this.setAnimationLoop=function(K){fe=K},this.dispose=function(){}}}const zM=new Ct,Fh=new $e;Fh.set(-1,0,0,0,1,0,0,0,1);function GM(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Ah(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,P,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&h(g,p,S)):p.isMeshMatcapMaterial?(r(g,p),v(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),b(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,y,P):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===ln&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===ln&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=e.get(p),P=y.envMap,S=y.envMapRotation;P&&(g.envMap.value=P,g.envMapRotation.value.setFromMatrix4(zM.makeRotationFromEuler(S)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Fh),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,P){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=P*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){const y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function WM(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const A=E.program;i.uniformBlockBinding(S,A)}function c(S,E){let A=s[S.id];A===void 0&&(g(S),A=u(S),s[S.id]=A,S.addEventListener("dispose",y));const D=E.program;i.updateUBOMapping(S,D);const x=e.render.frame;r[S.id]!==x&&(d(S),r[S.id]=x)}function u(S){const E=f();S.__bindingPointIndex=E;const A=n.createBuffer(),D=S.__size,x=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,D,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,A),A}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const E=s[S.id],A=S.uniforms,D=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let x=0,w=A.length;x<w;x++){const L=A[x];if(Array.isArray(L))for(let F=0,z=L.length;F<z;F++)h(L[F],x,F,D);else h(L,x,0,D)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(S,E,A,D){if(b(S,E,A,D)===!0){const x=S.__offset,w=S.value;if(Array.isArray(w)){let L=0;for(let F=0;F<w.length;F++){const z=w[F],q=p(z);v(z,S.__data,L),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(w,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,S.__data)}}function v(S,E,A){typeof S=="number"||typeof S=="boolean"?E[0]=S:S.isMatrix3?(E[0]=S.elements[0],E[1]=S.elements[1],E[2]=S.elements[2],E[3]=0,E[4]=S.elements[3],E[5]=S.elements[4],E[6]=S.elements[5],E[7]=0,E[8]=S.elements[6],E[9]=S.elements[7],E[10]=S.elements[8],E[11]=0):ArrayBuffer.isView(S)?E.set(new S.constructor(S.buffer,S.byteOffset,E.length)):S.toArray(E,A)}function b(S,E,A,D){const x=S.value,w=E+"_"+A;if(D[w]===void 0)return typeof x=="number"||typeof x=="boolean"?D[w]=x:ArrayBuffer.isView(x)?D[w]=x.slice():D[w]=x.clone(),!0;{const L=D[w];if(typeof x=="number"||typeof x=="boolean"){if(L!==x)return D[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(L.equals(x)===!1)return L.copy(x),!0}}return!1}function g(S){const E=S.uniforms;let A=0;const D=16;for(let w=0,L=E.length;w<L;w++){const F=Array.isArray(E[w])?E[w]:[E[w]];for(let z=0,q=F.length;z<q;z++){const B=F[z],W=Array.isArray(B.value)?B.value:[B.value];for(let te=0,V=W.length;te<V;te++){const se=W[te],Q=p(se),j=A%D,oe=j%Q.boundary,ye=j+oe;A+=oe,ye!==0&&D-ye<Q.storage&&(A+=D-ye),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=A,A+=Q.storage}}}const x=A%D;return x>0&&(A+=D-x),S.__size=A,S.__cache={},this}function p(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",S),E}function y(S){const E=S.target;E.removeEventListener("dispose",y);const A=a.indexOf(E.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function P(){for(const S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:P}}const XM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fn=null;function YM(){return Fn===null&&(Fn=new I0(XM,16,16,ns,Kn),Fn.name="DFG_LUT",Fn.minFilter=Zt,Fn.magFilter=Zt,Fn.wrapS=fi,Fn.wrapT=fi,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}class qM{constructor(e={}){const{canvas:t=l0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=xn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const b=h,g=new Set([wc,Ac,Ec]),p=new Set([xn,qn,yr,Tr,yc,Tc]),y=new Uint32Array(4),P=new Int32Array(4),S=new k;let E=null,A=null;const D=[],x=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let F=!1,z=null,q=null,B=null,W=null;this._outputColorSpace=_n;let te=0,V=0,se=null,Q=-1,j=null;const oe=new Rt,ye=new Rt;let Oe=null;const fe=new ft(0);let Ie=0,ze=t.width,K=t.height,re=1,be=null,Xe=null;const Pe=new Rt(0,0,ze,K),C=new Rt(0,0,ze,K);let I=!1;const G=new bh;let ae=!1,ne=!1;const J=new Ct,he=new k,ue=new Rt,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function xe(){return se===null?re:1}let R=i;function we(M,N){return t.getContext(M,N)}let Se,T,_,U,H,Z,ge,ve,ie,le,_e,Ue,Te,Me,Ye,Ke,Qe,O,Ee,ce,Ae,Le,pe;try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mc}`),t.addEventListener("webglcontextlost",yt,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",Mn,!1),R===null){const N="webgl2";if(R=we(N,M),R===null)throw we(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qe()}catch(M){throw t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Mn,!1),dt("WebGLRenderer: "+M.message),M}function qe(){Se=new Yx(R),Se.init(),Ae=new OM(R,Se),T=new Fx(R,Se,e,Ae),_=new NM(R,Se),T.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),q=R.createFramebuffer(),B=R.createFramebuffer(),W=R.createFramebuffer(),U=new Zx(R),H=new MM,Z=new FM(R,Se,_,H,T,Ae,U),ge=new Xx(L),ve=new $0(R),Le=new Ux(R,ve),ie=new qx(R,ve,U,Le),le=new $x(R,ie,ve,Le,U),O=new Jx(R,T,Z),Ye=new Ox(H),_e=new SM(L,ge,Se,T,Le,Ye),Ue=new GM(L,H),Te=new yM,Me=new RM(Se),Qe=new Ix(L,ge,_,le,v,l),Ke=new UM(L,le,T),pe=new WM(R,U,T,_),Ee=new Nx(R,Se,U),ce=new Kx(R,Se,U),U.programs=_e.programs,L.capabilities=T,L.extensions=Se,L.properties=H,L.renderLists=Te,L.shadowMap=Ke,L.state=_,L.info=U}b!==xn&&(w=new jx(b,t.width,t.height,o,s,r));const Ge=new VM(L,R);this.xr=Ge,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const M=Se.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Se.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(M){M!==void 0&&(re=M,this.setSize(ze,K,!1))},this.getSize=function(M){return M.set(ze,K)},this.setSize=function(M,N,$=!0){if(Ge.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}ze=M,K=N,t.width=Math.floor(M*re),t.height=Math.floor(N*re),$===!0&&(t.style.width=M+"px",t.style.height=N+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(ze*re,K*re).floor()},this.setDrawingBufferSize=function(M,N,$){ze=M,K=N,re=$,t.width=Math.floor(M*$),t.height=Math.floor(N*$),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(b===xn){dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){Ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(oe)},this.getViewport=function(M){return M.copy(Pe)},this.setViewport=function(M,N,$,X){M.isVector4?Pe.set(M.x,M.y,M.z,M.w):Pe.set(M,N,$,X),_.viewport(oe.copy(Pe).multiplyScalar(re).round())},this.getScissor=function(M){return M.copy(C)},this.setScissor=function(M,N,$,X){M.isVector4?C.set(M.x,M.y,M.z,M.w):C.set(M,N,$,X),_.scissor(ye.copy(C).multiplyScalar(re).round())},this.getScissorTest=function(){return I},this.setScissorTest=function(M){_.setScissorTest(I=M)},this.setOpaqueSort=function(M){be=M},this.setTransparentSort=function(M){Xe=M},this.getClearColor=function(M){return M.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,$=!0){let X=0;if(M){let Y=!1;if(se!==null){const De=se.texture.format;Y=g.has(De)}if(Y){const De=se.texture.type,Fe=p.has(De),Re=Qe.getClearColor(),He=Qe.getClearAlpha(),We=Re.r,et=Re.g,nt=Re.b;Fe?(y[0]=We,y[1]=et,y[2]=nt,y[3]=He,R.clearBufferuiv(R.COLOR,0,y)):(P[0]=We,P[1]=et,P[2]=nt,P[3]=He,R.clearBufferiv(R.COLOR,0,P))}else X|=R.COLOR_BUFFER_BIT}N&&(X|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(X|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&R.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),z=M},this.dispose=function(){t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Mn,!1),Qe.dispose(),Te.dispose(),Me.dispose(),H.dispose(),ge.dispose(),le.dispose(),Le.dispose(),pe.dispose(),_e.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",Gc),Ge.removeEventListener("sessionend",Wc),ki.stop()};function yt(M){M.preventDefault(),Nu("WebGLRenderer: Context Lost."),F=!0}function ht(){Nu("WebGLRenderer: Context Restored."),F=!1;const M=U.autoReset,N=Ke.enabled,$=Ke.autoUpdate,X=Ke.needsUpdate,Y=Ke.type;qe(),U.autoReset=M,Ke.enabled=N,Ke.autoUpdate=$,Ke.needsUpdate=X,Ke.type=Y}function Mn(M){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ln(M){const N=M.target;N.removeEventListener("dispose",Ln),Wh(N)}function Wh(M){Xh(M),H.remove(M)}function Xh(M){const N=H.get(M).programs;N!==void 0&&(N.forEach(function($){_e.releaseProgram($)}),M.isShaderMaterial&&_e.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,$,X,Y,De){N===null&&(N=de);const Fe=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Re=Kh(M,N,$,X,Y);_.setMaterial(X,Fe);let He=$.index,We=1;if(X.wireframe===!0){if(He=ie.getWireframeAttribute($),He===void 0)return;We=2}const et=$.drawRange,nt=$.attributes.position;let Ve=et.start*We,pt=(et.start+et.count)*We;De!==null&&(Ve=Math.max(Ve,De.start*We),pt=Math.min(pt,(De.start+De.count)*We)),He!==null?(Ve=Math.max(Ve,0),pt=Math.min(pt,He.count)):nt!=null&&(Ve=Math.max(Ve,0),pt=Math.min(pt,nt.count));const It=pt-Ve;if(It<0||It===1/0)return;Le.setup(Y,X,Re,$,He);let At,Mt=Ee;if(He!==null&&(At=ve.get(He),Mt=ce,Mt.setIndex(At)),Y.isMesh)X.wireframe===!0?(_.setLineWidth(X.wireframeLinewidth*xe()),Mt.setMode(R.LINES)):Mt.setMode(R.TRIANGLES);else if(Y.isLine){let Gt=X.linewidth;Gt===void 0&&(Gt=1),_.setLineWidth(Gt*xe()),Y.isLineSegments?Mt.setMode(R.LINES):Y.isLineLoop?Mt.setMode(R.LINE_LOOP):Mt.setMode(R.LINE_STRIP)}else Y.isPoints?Mt.setMode(R.POINTS):Y.isSprite&&Mt.setMode(R.TRIANGLES);if(Y.isBatchedMesh)if(Se.get("WEBGL_multi_draw"))Mt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Gt=Y._multiDrawStarts,Ne=Y._multiDrawCounts,$t=Y._multiDrawCount,ct=He?ve.get(He).bytesPerElement:1,pn=H.get(X).currentProgram.getUniforms();for(let In=0;In<$t;In++)pn.setValue(R,"_gl_DrawID",In),Mt.render(Gt[In]/ct,Ne[In])}else if(Y.isInstancedMesh)Mt.renderInstances(Ve,It,Y.count);else if($.isInstancedBufferGeometry){const Gt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ne=Math.min($.instanceCount,Gt);Mt.renderInstances(Ve,It,Ne)}else Mt.render(Ve,It)};function zc(M,N,$,X){z!==null&&M.isNodeMaterial&&z.setObject(X,M),ae===!0&&Ye.setState(M,$,!1),M.transparent===!0&&M.side===di&&M.forceSinglePass===!1?(M.side=ln,M.needsUpdate=!0,Ur(M,N,X),M.side=es,M.needsUpdate=!0,Ur(M,N,X),M.side=di):Ur(M,N,X)}this.compile=function(M,N,$=null){$===null&&($=M),z!==null&&z.renderStart(M,N,$),A=Me.get($),A.init(N),x.push(A),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(N.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),M!==$&&M.traverseVisible(function(Y){Y.isLight&&Y.layers.test(N.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),A.setupLights(),z!==null&&z.updateLights(A.state.lightsArray),ne=this.localClippingEnabled,ae=Ye.init(this.clippingPlanes,ne),ae===!0&&Ye.setGlobalState(this.clippingPlanes,N),z!==null&&Ke.render(A.state.shadowsArray,$,N);const X=new Set;return M.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const De=Y.material;if(De)if(Array.isArray(De))for(let Fe=0;Fe<De.length;Fe++){const Re=De[Fe];zc(Re,$,N,Y),X.add(Re)}else zc(De,$,N,Y),X.add(De)}),A=x.pop(),z!==null&&z.renderEnd(),X},this.compileAsync=function(M,N,$=null){const X=this.compile(M,N,$);return new Promise(Y=>{function De(){if(X.forEach(function(Fe){const He=H.get(Fe).currentProgram;(He===void 0||He.isReady())&&X.delete(Fe)}),X.size===0){Y(M);return}setTimeout(De,10)}Se.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let io=null;function Yh(M){io&&io(M)}function Gc(){ki.stop()}function Wc(){ki.start()}const ki=new Rh;ki.setAnimationLoop(Yh),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(M){io=M,Ge.setAnimationLoop(M),M===null?ki.stop():ki.start()},Ge.addEventListener("sessionstart",Gc),Ge.addEventListener("sessionend",Wc),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;z!==null&&z.renderStart(M,N);const $=Ge.enabled===!0&&Ge.isPresenting===!0,X=w!==null&&(se===null||$)&&w.begin(L,se);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(N),N=Ge.getCamera()),M.isScene===!0&&M.onBeforeRender(L,M,N,se),A=Me.get(M,x.length),A.init(N),A.state.textureUnits=Z.getTextureUnits(),x.push(A),J.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),G.setFromProjectionMatrix(J,Gn,N.reversedDepth),ne=this.localClippingEnabled,ae=Ye.init(this.clippingPlanes,ne),E=Te.get(M,D.length),E.init(),D.push(E),Ge.enabled===!0&&Ge.isPresenting===!0){const Fe=L.xr.getDepthSensingMesh();Fe!==null&&so(Fe,N,-1/0,L.sortObjects)}so(M,N,0,L.sortObjects),E.finish(),z!==null&&z.updateLights(A.state.lightsArray),L.sortObjects===!0&&E.sort(be,Xe),ee=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,ee&&Qe.addToRenderList(E,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&Ye.beginShadows();const Y=A.state.shadowsArray;if(Ke.render(Y,M,N),ae===!0&&Ye.endShadows(),(X&&w.hasRenderPass())===!1){const Fe=E.opaque,Re=E.transmissive;if(A.setupLights(),N.isArrayCamera){const He=N.cameras;if(Re.length>0)for(let We=0,et=He.length;We<et;We++){const nt=He[We];Yc(Fe,Re,M,nt)}ee&&Qe.render(M);for(let We=0,et=He.length;We<et;We++){const nt=He[We];Xc(E,M,nt,nt.viewport)}}else Re.length>0&&Yc(Fe,Re,M,N),ee&&Qe.render(M),Xc(E,M,N)}se!==null&&V===0&&(Z.updateMultisampleRenderTarget(se),Z.updateRenderTargetMipmap(se)),X&&w.end(L),M.isScene===!0&&M.onAfterRender(L,M,N),Le.resetDefaultState(),Q=-1,j=null,x.pop(),x.length>0?(A=x[x.length-1],Z.setTextureUnits(A.state.textureUnits),ae===!0&&Ye.setGlobalState(L.clippingPlanes,A.state.camera)):A=null,D.pop(),D.length>0?E=D[D.length-1]:E=null,z!==null&&z.renderEnd()};function so(M,N,$,X){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLightProbeGrid)A.pushLightProbeGrid(M);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(G)){X&&ue.setFromMatrixPosition(M.matrixWorld).applyMatrix4(J);const Fe=le.update(M),Re=M.material;Re.visible&&E.push(M,Fe,Re,$,ue.z,null,N)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(G))){const Fe=le.update(M),Re=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ue.copy(M.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),ue.copy(Fe.boundingSphere.center)),ue.applyMatrix4(M.matrixWorld).applyMatrix4(J)),Array.isArray(Re)){const He=Fe.groups;for(let We=0,et=He.length;We<et;We++){const nt=He[We],Ve=Re[nt.materialIndex];Ve&&Ve.visible&&E.push(M,Fe,Ve,$,ue.z,nt,N)}}else Re.visible&&E.push(M,Fe,Re,$,ue.z,null,N)}}const De=M.children;for(let Fe=0,Re=De.length;Fe<Re;Fe++)so(De[Fe],N,$,X)}function Xc(M,N,$,X){const{opaque:Y,transmissive:De,transparent:Fe}=M;A.setupLightsView($),ae===!0&&Ye.setGlobalState(L.clippingPlanes,$),X&&_.viewport(oe.copy(X)),Y.length>0&&Ir(Y,N,$),De.length>0&&Ir(De,N,$),Fe.length>0&&Ir(Fe,N,$),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Yc(M,N,$,X){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[X.id]===void 0){const Ve=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[X.id]=new Pn(1,1,{generateMipmaps:!0,type:Ve?Kn:xn,minFilter:Zi,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const De=A.state.transmissionRenderTarget[X.id],Fe=X.viewport||oe;De.setSize(Fe.z*L.transmissionResolutionScale,Fe.w*L.transmissionResolutionScale);const Re=L.getRenderTarget(),He=L.getActiveCubeFace(),We=L.getActiveMipmapLevel();L.setRenderTarget(De),L.getClearColor(fe),Ie=L.getClearAlpha(),Ie<1&&L.setClearColor(16777215,.5),L.clear(),ee&&Qe.render($);const et=L.toneMapping;L.toneMapping=Xn;const nt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),A.setupLightsView(X),ae===!0&&Ye.setGlobalState(L.clippingPlanes,X),Ir(M,$,X),Z.updateMultisampleRenderTarget(De),Z.updateRenderTargetMipmap(De),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let pt=0,It=N.length;pt<It;pt++){const At=N[pt],{object:Mt,geometry:Gt,material:Ne,group:$t}=At;if(Ne.side===di&&Mt.layers.test(X.layers)){const ct=Ne.side;Ne.side=ln,Ne.needsUpdate=!0,qc(Mt,$,X,Gt,Ne,$t),Ne.side=ct,Ne.needsUpdate=!0,Ve=!0}}Ve===!0&&(Z.updateMultisampleRenderTarget(De),Z.updateRenderTargetMipmap(De))}L.setRenderTarget(Re,He,We),L.setClearColor(fe,Ie),nt!==void 0&&(X.viewport=nt),L.toneMapping=et}function Ir(M,N,$){const X=N.isScene===!0?N.overrideMaterial:null;for(let Y=0,De=M.length;Y<De;Y++){const Fe=M[Y],{object:Re,geometry:He,group:We}=Fe;let et=Fe.material;et.allowOverride===!0&&X!==null&&(et=X),Re.layers.test($.layers)&&qc(Re,N,$,He,et,We)}}function qc(M,N,$,X,Y,De){z!==null&&Y.isNodeMaterial&&z.setObject(M,Y),M.onBeforeRender(L,N,$,X,Y,De),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Y.onBeforeRender(L,N,$,X,M,De),Y.transparent===!0&&Y.side===di&&Y.forceSinglePass===!1?(Y.side=ln,Y.needsUpdate=!0,L.renderBufferDirect($,N,X,Y,M,De),Y.side=es,Y.needsUpdate=!0,L.renderBufferDirect($,N,X,Y,M,De),Y.side=di):L.renderBufferDirect($,N,X,Y,M,De),M.onAfterRender(L,N,$,X,Y,De)}function Ur(M,N,$){N.isScene!==!0&&(N=de);const X=H.get(M),Y=A.state.lights,De=A.state.shadowsArray,Fe=Y.state.version,Re=_e.getParameters(M,Y.state,De,N,$,A.state.lightProbeGridArray),He=_e.getProgramCacheKey(Re);let We=X.programs;X.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,X.fog=N.fog;const et=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;X.envMap=ge.get(M.envMap||X.environment,et),X.envMapRotation=X.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,We===void 0&&(M.addEventListener("dispose",Ln),We=new Map,X.programs=We);let nt=We.get(He);if(nt!==void 0){if(X.currentProgram===nt&&X.lightsStateVersion===Fe)return Zc(M,Re),nt}else Re.uniforms=_e.getUniforms(M),z!==null&&M.isNodeMaterial&&z.build(M,$,Re),M.onBeforeCompile(Re,L),nt=_e.acquireProgram(Re,He),We.set(He,nt),X.uniforms=Re.uniforms;const Ve=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ve.clippingPlanes=Ye.uniform),Zc(M,Re),X.needsLights=Jh(M),X.lightsStateVersion=Fe,X.needsLights&&(Ve.ambientLightColor.value=Y.state.ambient,Ve.lightProbe.value=Y.state.probe,Ve.sunLights.value=Y.state.sun,Ve.sunLightShadows.value=Y.state.sunShadow,Ve.directionalLights.value=Y.state.directional,Ve.directionalLightShadows.value=Y.state.directionalShadow,Ve.spotLights.value=Y.state.spot,Ve.spotLightShadows.value=Y.state.spotShadow,Ve.rectAreaLights.value=Y.state.rectArea,Ve.ltc_1.value=Y.state.rectAreaLTC1,Ve.ltc_2.value=Y.state.rectAreaLTC2,Ve.pointLights.value=Y.state.point,Ve.pointLightShadows.value=Y.state.pointShadow,Ve.hemisphereLights.value=Y.state.hemi,Ve.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ve.sunShadowCascade.value=Y.state.sunShadowCascade,Ve.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ve.spotLightMatrix.value=Y.state.spotLightMatrix,Ve.spotLightMap.value=Y.state.spotLightMap,Ve.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.lightProbeGrid=A.state.lightProbeGridArray.length>0,X.currentProgram=nt,X.uniformsList=null,nt}function Kc(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=Ma.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Zc(M,N){const $=H.get(M);$.outputColorSpace=N.outputColorSpace,$.batching=N.batching,$.batchingColor=N.batchingColor,$.instancing=N.instancing,$.instancingColor=N.instancingColor,$.instancingMorph=N.instancingMorph,$.skinning=N.skinning,$.morphTargets=N.morphTargets,$.morphNormals=N.morphNormals,$.morphColors=N.morphColors,$.morphTargetsCount=N.morphTargetsCount,$.numClippingPlanes=N.numClippingPlanes,$.numIntersection=N.numClipIntersection,$.vertexAlphas=N.vertexAlphas,$.vertexTangents=N.vertexTangents,$.toneMapping=N.toneMapping}function qh(M,N){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(N.matrixWorld);for(let $=0,X=M.length;$<X;$++){const Y=M[$];if(Y.texture!==null&&Y.boundingBox.containsPoint(S))return Y}return null}function Kh(M,N,$,X,Y){N.isScene!==!0&&(N=de),Z.resetTextureUnits();const De=N.fog,Fe=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?N.environment:null,Re=se===null?L.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ot.workingColorSpace,He=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,We=ge.get(X.envMap||Fe,He),et=X.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,nt=!!$.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ve=!!$.morphAttributes.position,pt=!!$.morphAttributes.normal,It=!!$.morphAttributes.color;let At=Xn;X.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(At=L.toneMapping);const Mt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Gt=Mt!==void 0?Mt.length:0,Ne=H.get(X),$t=A.state.lights;if(ae===!0&&(ne===!0||M!==j)){const Tt=M===j&&X.id===Q;Ye.setState(X,M,Tt)}let ct=!1;X.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==$t.state.version||Ne.outputColorSpace!==Re||Y.isBatchedMesh&&Ne.batching===!1||!Y.isBatchedMesh&&Ne.batching===!0||Y.isBatchedMesh&&Ne.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ne.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ne.instancing===!1||!Y.isInstancedMesh&&Ne.instancing===!0||Y.isSkinnedMesh&&Ne.skinning===!1||!Y.isSkinnedMesh&&Ne.skinning===!0||Y.isInstancedMesh&&Ne.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ne.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ne.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ne.instancingMorph===!1&&Y.morphTexture!==null||Ne.envMap!==We||X.fog===!0&&Ne.fog!==De||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Ye.numPlanes||Ne.numIntersection!==Ye.numIntersection)||Ne.vertexAlphas!==et||Ne.vertexTangents!==nt||Ne.morphTargets!==Ve||Ne.morphNormals!==pt||Ne.morphColors!==It||Ne.toneMapping!==At||Ne.morphTargetsCount!==Gt||!!Ne.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,Ne.__version=X.version);let pn=Ne.currentProgram;ct===!0&&(pn=Ur(X,N,Y),z&&X.isNodeMaterial&&z.onUpdateProgram(X,pn,Ne));let In=!1,yi=!1,rs=!1;const _t=pn.getUniforms(),Lt=Ne.uniforms;if(_.useProgram(pn.program)&&(In=!0,yi=!0,rs=!0),X.id!==Q&&(Q=X.id,yi=!0),Ne.needsLights){const Tt=qh(A.state.lightProbeGridArray,Y);Ne.lightProbeGrid!==Tt&&(Ne.lightProbeGrid=Tt,yi=!0)}if(In||j!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),_t.setValue(R,"projectionMatrix",M.projectionMatrix),_t.setValue(R,"viewMatrix",M.matrixWorldInverse);const Ei=_t.map.cameraPosition;Ei!==void 0&&Ei.setValue(R,he.setFromMatrixPosition(M.matrixWorld)),T.logarithmicDepthBuffer&&_t.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&_t.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),j!==M&&(j=M,yi=!0,rs=!0)}if(Ne.needsLights&&($t.state.sunShadowMap.length>0&&_t.setValue(R,"sunShadowMap",$t.state.sunShadowMap,Z),$t.state.directionalShadowMap.length>0&&_t.setValue(R,"directionalShadowMap",$t.state.directionalShadowMap,Z),$t.state.spotShadowMap.length>0&&_t.setValue(R,"spotShadowMap",$t.state.spotShadowMap,Z),$t.state.pointShadowMap.length>0&&_t.setValue(R,"pointShadowMap",$t.state.pointShadowMap,Z)),Y.isSkinnedMesh){_t.setOptional(R,Y,"bindMatrix"),_t.setOptional(R,Y,"bindMatrixInverse");const Tt=Y.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),_t.setValue(R,"boneTexture",Tt.boneTexture,Z))}Y.isBatchedMesh&&(_t.setOptional(R,Y,"batchingTexture"),_t.setValue(R,"batchingTexture",Y._matricesTexture,Z),_t.setOptional(R,Y,"batchingIdTexture"),_t.setValue(R,"batchingIdTexture",Y._indirectTexture,Z),_t.setOptional(R,Y,"batchingColorTexture"),Y._colorsTexture!==null&&_t.setValue(R,"batchingColorTexture",Y._colorsTexture,Z));const Ti=$.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&O.update(Y,$,pn),(yi||Ne.receiveShadow!==Y.receiveShadow)&&(Ne.receiveShadow=Y.receiveShadow,_t.setValue(R,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&N.environment!==null&&(Lt.envMapIntensity.value=N.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=YM()),yi){if(_t.setValue(R,"toneMappingExposure",L.toneMappingExposure),Ne.needsLights&&Zh(Lt,rs),De&&X.fog===!0&&Ue.refreshFogUniforms(Lt,De),Ue.refreshMaterialUniforms(Lt,X,re,K,A.state.transmissionRenderTarget[M.id]),Ne.needsLights&&Ne.lightProbeGrid){const Tt=Ne.lightProbeGrid;Lt.probesSH.value=Tt.texture,Lt.probesMin.value.copy(Tt.boundingBox.min),Lt.probesMax.value.copy(Tt.boundingBox.max),Lt.probesResolution.value.copy(Tt.resolution)}Ma.upload(R,Kc(Ne),Lt,Z)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ma.upload(R,Kc(Ne),Lt,Z),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&_t.setValue(R,"center",Y.center),_t.setValue(R,"modelViewMatrix",Y.modelViewMatrix),_t.setValue(R,"normalMatrix",Y.normalMatrix),_t.setValue(R,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){const Tt=X.uniformsGroups;for(let Ei=0,as=Tt.length;Ei<as;Ei++){const $c=Tt[Ei];pe.update($c,pn),pe.bind($c,pn)}}return pn}function Zh(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.sunLights.needsUpdate=N,M.sunLightShadows.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Jh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(M,N,$){const X=H.get(M);X.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),H.get(M.texture).__webglTexture=N,H.get(M.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:$,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const $=H.get(M);$.__webglFramebuffer=N,$.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,$=0){se=M,te=N,V=$;let X=null,Y=!1,De=!1;if(M){const Re=H.get(M);if(Re.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(R.FRAMEBUFFER,Re.__webglFramebuffer),oe.copy(M.viewport),ye.copy(M.scissor),Oe=M.scissorTest,_.viewport(oe),_.scissor(ye),_.setScissorTest(Oe),Q=-1;return}else if(Re.__webglFramebuffer===void 0)Z.setupRenderTarget(M);else if(Re.__hasExternalTextures)Z.rebindTextures(M,H.get(M.texture).__webglTexture,H.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const et=M.depthTexture;if(Re.__boundDepthTexture!==et){if(et!==null&&H.has(et)&&(M.width!==et.image.width||M.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(M)}}const He=M.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(De=!0);const We=H.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(We[N])?X=We[N][$]:X=We[N],Y=!0):M.samples>0&&Z.useMultisampledRTT(M)===!1?X=H.get(M).__webglMultisampledFramebuffer:Array.isArray(We)?X=We[$]:X=We,oe.copy(M.viewport),ye.copy(M.scissor),Oe=M.scissorTest}else oe.copy(Pe).multiplyScalar(re).floor(),ye.copy(C).multiplyScalar(re).floor(),Oe=I;if($!==0&&(X=q),_.bindFramebuffer(R.FRAMEBUFFER,X)&&_.drawBuffers(M,X),_.viewport(oe),_.scissor(ye),_.setScissorTest(Oe),Y){const Re=H.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,Re.__webglTexture,$)}else if(De){const Re=N;for(let He=0;He<M.textures.length;He++){const We=H.get(M.textures[He]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+He,We.__webglTexture,$,Re)}}else if(M!==null&&$!==0){const Re=H.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Re.__webglTexture,$)}Q=-1};function Jc(M){const N=H.get(M);return(N.__readFormat!==M.format||N.__readType!==M.type)&&(N.__readFormat=M.format,N.__readType=M.type,N.__formatReadable=T.textureFormatReadable(M.format),N.__typeReadable=T.textureTypeReadable(M.type)),N}this.readRenderTargetPixels=function(M,N,$,X,Y,De,Fe,Re=0){if(!(M&&M.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He){_.bindFramebuffer(R.FRAMEBUFFER,He);try{const We=M.textures[Re],et=We.format,nt=We.type;M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Re);const Ve=Jc(We);if(Ve.__formatReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-X&&$>=0&&$<=M.height-Y&&R.readPixels(N,$,X,Y,Ae.convert(et),Ae.convert(nt),De)}finally{const We=se!==null?H.get(se).__webglFramebuffer:null;_.bindFramebuffer(R.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(M,N,$,X,Y,De,Fe,Re=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He)if(N>=0&&N<=M.width-X&&$>=0&&$<=M.height-Y){_.bindFramebuffer(R.FRAMEBUFFER,He);const We=M.textures[Re],et=We.format,nt=We.type;M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Re);const Ve=Jc(We);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,pt),R.bufferData(R.PIXEL_PACK_BUFFER,De.byteLength,R.STREAM_READ),R.readPixels(N,$,X,Y,Ae.convert(et),Ae.convert(nt),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);const It=se!==null?H.get(se).__webglFramebuffer:null;_.bindFramebuffer(R.FRAMEBUFFER,It);const At=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await c0(R,At,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,pt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,De),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(pt),R.deleteSync(At),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,$=0){const X=Math.pow(2,-$),Y=Math.floor(M.image.width*X),De=Math.floor(M.image.height*X),Fe=N!==null?N.x:0,Re=N!==null?N.y:0;Z.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,$,0,0,Fe,Re,Y,De),_.unbindTexture()},this.copyTextureToTexture=function(M,N,$=null,X=null,Y=0,De=0){let Fe,Re,He,We,et,nt,Ve,pt,It;const At=M.isCompressedTexture?M.mipmaps[De]:M.image;if($!==null)Fe=$.max.x-$.min.x,Re=$.max.y-$.min.y,He=$.isBox3?$.max.z-$.min.z:1,We=$.min.x,et=$.min.y,nt=$.isBox3?$.min.z:0;else{const Lt=Math.pow(2,-Y);Fe=Math.floor(At.width*Lt),Re=Math.floor(At.height*Lt),M.isDataArrayTexture?He=At.depth:M.isData3DTexture?He=Math.floor(At.depth*Lt):He=1,We=0,et=0,nt=0}X!==null?(Ve=X.x,pt=X.y,It=X.z):(Ve=0,pt=0,It=0);const Mt=Ae.convert(N.format),Gt=Ae.convert(N.type);let Ne;N.isData3DTexture?(Z.setTexture3D(N,0),Ne=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Z.setTexture2DArray(N,0),Ne=R.TEXTURE_2D_ARRAY):(Z.setTexture2D(N,0),Ne=R.TEXTURE_2D),_.activeTexture(R.TEXTURE0),_.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),_.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const $t=_.getParameter(R.UNPACK_ROW_LENGTH),ct=_.getParameter(R.UNPACK_IMAGE_HEIGHT),pn=_.getParameter(R.UNPACK_SKIP_PIXELS),In=_.getParameter(R.UNPACK_SKIP_ROWS),yi=_.getParameter(R.UNPACK_SKIP_IMAGES);_.pixelStorei(R.UNPACK_ROW_LENGTH,At.width),_.pixelStorei(R.UNPACK_IMAGE_HEIGHT,At.height),_.pixelStorei(R.UNPACK_SKIP_PIXELS,We),_.pixelStorei(R.UNPACK_SKIP_ROWS,et),_.pixelStorei(R.UNPACK_SKIP_IMAGES,nt);const rs=M.isDataArrayTexture||M.isData3DTexture,_t=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const Lt=H.get(M),Ti=H.get(N),Tt=H.get(Lt.__renderTarget),Ei=H.get(Ti.__renderTarget);_.bindFramebuffer(R.READ_FRAMEBUFFER,Tt.__webglFramebuffer),_.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let as=0;as<He;as++)rs&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,H.get(M).__webglTexture,Y,nt+as),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,H.get(N).__webglTexture,De,It+as)),R.blitFramebuffer(We,et,Fe,Re,Ve,pt,Fe,Re,R.DEPTH_BUFFER_BIT,R.NEAREST);_.bindFramebuffer(R.READ_FRAMEBUFFER,null),_.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(Y!==0||M.isRenderTargetTexture||H.has(M)){const Lt=H.get(M),Ti=H.get(N);_.bindFramebuffer(R.READ_FRAMEBUFFER,B),_.bindFramebuffer(R.DRAW_FRAMEBUFFER,W);for(let Tt=0;Tt<He;Tt++)rs?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Lt.__webglTexture,Y,nt+Tt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Lt.__webglTexture,Y),_t?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ti.__webglTexture,De,It+Tt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ti.__webglTexture,De),Y!==0?R.blitFramebuffer(We,et,Fe,Re,Ve,pt,Fe,Re,R.COLOR_BUFFER_BIT,R.NEAREST):_t?R.copyTexSubImage3D(Ne,De,Ve,pt,It+Tt,We,et,Fe,Re):R.copyTexSubImage2D(Ne,De,Ve,pt,We,et,Fe,Re);_.bindFramebuffer(R.READ_FRAMEBUFFER,null),_.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else _t?M.isDataTexture||M.isData3DTexture?R.texSubImage3D(Ne,De,Ve,pt,It,Fe,Re,He,Mt,Gt,At.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(Ne,De,Ve,pt,It,Fe,Re,He,Mt,At.data):R.texSubImage3D(Ne,De,Ve,pt,It,Fe,Re,He,Mt,Gt,At):M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,De,Ve,pt,Fe,Re,Mt,Gt,At.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,De,Ve,pt,At.width,At.height,Mt,At.data):R.texSubImage2D(R.TEXTURE_2D,De,Ve,pt,Fe,Re,Mt,Gt,At);_.pixelStorei(R.UNPACK_ROW_LENGTH,$t),_.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ct),_.pixelStorei(R.UNPACK_SKIP_PIXELS,pn),_.pixelStorei(R.UNPACK_SKIP_ROWS,In),_.pixelStorei(R.UNPACK_SKIP_IMAGES,yi),De===0&&N.generateMipmaps&&R.generateMipmap(Ne),_.unbindTexture()},this.initRenderTarget=function(M){H.get(M).__webglFramebuffer===void 0&&Z.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Z.setTextureCube(M,0):M.isData3DTexture?Z.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Z.setTexture2DArray(M,0):Z.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){te=0,V=0,se=null,_.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}function Dd(n=globalThis.localStorage){try{const e=n&&n.getItem?n.getItem("sr_aero_fleet_v1"):null;if(!e)return!1;const t=JSON.parse(e);return!!(t&&Array.isArray(t.aircrafts)&&t.aircrafts.length>0)}catch{return!1}}const KM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3ccircle%20cx='12'%20cy='12'%20r='9'/%3e%3cpath%20d='M12%208v8M8%2012h8'/%3e%3c/svg%3e",ZM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M3%206%20A2%202%200%200%201%205%204%20H9%20L11%206%20H19%20A2%202%200%200%201%2021%208%20V10'%3e%3c/path%3e%3cpath%20d='M3%2010%20H21%20A1.5%201.5%200%200%201%2022.4%2012%20L19.5%2019%20A2%202%200%200%201%2017.7%2020%20H5%20A2%202%200%200%201%203%2018%20Z'%3e%3c/path%3e%3c/svg%3e",Ld="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M12%202%20C11.3%202%2011%203.2%2011%204%20V9%20L3%2013%20V15%20L11%2013%20V18%20L8%2020%20V22%20L12%2021%20L16%2022%20V20%20L13%2018%20V13%20L21%2015%20V13%20L13%209%20V4%20C13%203.2%2012.7%202%2012%202Z'%3e%3c/path%3e%3c/svg%3e",Id="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M10.3%203.6%201.8%2018a2%202%200%200%200%201.7%203h17a2%202%200%200%200%201.7-3L13.7%203.6a2%202%200%200%200-3.4%200Z'/%3e%3cpath%20d='M12%209v4m0%204h.01'/%3e%3c/svg%3e",Ud="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3crect%20x='3'%20y='5'%20width='18'%20height='16'%20rx='2'/%3e%3cpath%20d='M16%203v4M8%203v4M3%2010h18M8%2014h.01M12%2014h.01M16%2014h.01M8%2018h.01M12%2018h.01'/%3e%3c/svg%3e",JM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='m15%2018-6-6%206-6'/%3e%3c/svg%3e",Nd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M14.7%206.3a4%204%200%200%200-5-5L7%204l3%203-3%203-3-3-2.7%202.7a4%204%200%200%200%205%205L14%2022l3-3-7.7-7.7'/%3e%3c/svg%3e",Fd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3crect%20x='3'%20y='3'%20width='7'%20height='9'%20rx='1'/%3e%3crect%20x='14'%20y='3'%20width='7'%20height='5'%20rx='1'/%3e%3crect%20x='14'%20y='12'%20width='7'%20height='9'%20rx='1'/%3e%3crect%20x='3'%20y='16'%20width='7'%20height='5'%20rx='1'/%3e%3c/svg%3e",Od="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cellipse%20cx='12'%20cy='5'%20rx='9'%20ry='3'/%3e%3cpath%20d='M3%205v7c0%201.7%204%203%209%203s9-1.3%209-3V5M3%2012v7c0%201.7%204%203%209%203s9-1.3%209-3v-7'/%3e%3c/svg%3e",Bd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M3%206h18M8%206V4h8v2m3%200-1%2015H6L5%206M10%2011v6m4-6v6'/%3e%3c/svg%3e",$M="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M12%203v12m-5-5%205%205%205-5M5%2021h14'/%3e%3c/svg%3e",QM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M12%2020h9M16.5%203.5a2.1%202.1%200%200%201%203%203L8%2018l-4%201%201-4Z'/%3e%3c/svg%3e",jM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='m9%2018%206-6-6-6'/%3e%3c/svg%3e",kd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M3%2012a9%209%200%201%200%203-6.7L3%208'/%3e%3cpath%20d='M3%203v5h5M12%207v5l3%202'/%3e%3c/svg%3e",eb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M2%2012s3.5-7%2010-7%2010%207%2010%207-3.5%207-10%207-10-7-10-7z'/%3e%3ccircle%20cx='12'%20cy='12'%20r='3'/%3e%3c/svg%3e",tb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M15%203h4a2%202%200%200%201%202%202v14a2%202%200%200%201-2%202h-4M10%2017l5-5-5-5M15%2012H3'/%3e%3c/svg%3e",nb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M4%206h16'/%3e%3cpath%20d='M4%2012h16'/%3e%3cpath%20d='M4%2018h16'/%3e%3c/svg%3e",ib="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M12%203%204%206v6c0%205%203%208%208%2010%205-2%208-5%208-10V6z'/%3e%3cpath%20d='m8%2012%203%203%205-6'/%3e%3c/svg%3e",sb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M3%2012a9%209%200%201%200%203-6.7'/%3e%3cpath%20d='M3%204v6h6'/%3e%3cpath%20d='M12%208v5l3%202'/%3e%3c/svg%3e",rb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M19%2021H5a2%202%200%200%201-2-2V5a2%202%200%200%201%202-2h11l5%205v11a2%202%200%200%201-2%202Z'/%3e%3cpath%20d='M17%2021v-8H7v8M7%203v5h8'/%3e%3c/svg%3e",ab="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3ccircle%20cx='12'%20cy='13'%20r='8'/%3e%3cpath%20d='M12%209v4l3%202M9%202h6'/%3e%3c/svg%3e",ob="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M9%2021H5a2%202%200%200%201-2-2V5a2%202%200%200%201%202-2h4M16%2017l5-5-5-5M21%2012H9'/%3e%3c/svg%3e",lb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M17%2018a5%205%200%200%200%200-10%207%207%200%200%200-13%203%204%204%200%200%200%201%208h5'/%3e%3cpath%20d='m8%2016%203%203-3%203m8-12-3-3%203-3'/%3e%3c/svg%3e",cb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3ccircle%20cx='12'%20cy='8'%20r='4'/%3e%3cpath%20d='M4%2021a8%208%200%200%201%2016%200'/%3e%3c/svg%3e",ub="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3crect%20x='3'%20y='5'%20width='18'%20height='16'%20rx='2'/%3e%3cpath%20d='M16%203v4M8%203v4M3%2010h18M12%2014v3m0%201h.01'/%3e%3c/svg%3e",db=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},sr="sr_aero_fleet_v1",Oh="sr_aero_fleet_meta_v1",fb="dashboards",hb="main",Bh=20,pb=30,kh=pb*864e5,gn=new Date;gn.setHours(0,0,0,0);const Hh="calidad@divmaaer.com",mb=[Hh,"marlonchca3@gmail.com","gato0247@gmail.com","tatianamhl250197@gmail.com"],Vh={apiKey:"AIzaSyDRAZZ4VafNNIi3G9_USyARksFqgKYE5Fo",authDomain:"calidadddddd.firebaseapp.com",projectId:"calidadddddd",storageBucket:"calidadddddd.firebasestorage.app",messagingSenderId:"532433890487",appId:"1:532433890487:web:d7011a757f953c03363132",measurementId:"G-60JGPFZ5TL"},zh=[{component:"Mi-17 MTV-1",series:"96019",workshop:"Helicentro",overhaul:"20/03/2020",assigned:"2,000 h",consumed:"860 h",remaining:"1,140 h",due:"20/03/2028"},{component:"Motor 1 TV3-117BM",series:"7087882200433",workshop:"URAL",overhaul:"12/04/2016",assigned:"1,500 h",consumed:"828.5 h",remaining:"671.5 h",due:"12/04/2026"},{component:"Motor 2 TV3-117BM",series:"7087884000357",workshop:"BORYSFEN",overhaul:"21/04/2016",assigned:"1,500 h",consumed:"828.5 h",remaining:"671.5 h",due:"21/04/2026"},{component:"AI-9B",series:"7080924200355",workshop:"OOO ARP Motor",overhaul:"16/07/2020",assigned:"600 arr",consumed:"694 arr",remaining:"-94 arr",due:"16/07/2028"},{component:"VR-14",series:"L0701003MP2",workshop:"AO REDUCTOR PM",overhaul:"19/09/2017",assigned:"2,000 h",consumed:"828 h",remaining:"1,172 h",due:"19/09/2027"}];function pr(n){return JSON.parse(JSON.stringify(n))}function Hd(){try{return JSON.parse(localStorage.getItem(Oh)||"{}")||{}}catch{return{}}}function Qs(n){try{localStorage.setItem(Oh,JSON.stringify({updatedAt:n}))}catch{}}function tl(){return{selectedId:"pnp-501",changes:[],trash:[],aircrafts:[{id:"pnp-501",code:"PNP-501",name:"Mi-17 MTV-1",rows:pr(zh).map(Ki)},{id:"pnp-506",code:"PNP-506",name:"Mi-171",rows:[]}]}}function Vn(n){const e=parseFloat(String(n).replace(/[^0-9.-]/g,""));return Number.isFinite(e)?e:0}function ka(n){const e=Number(n);return Number.isFinite(e)?Number.isInteger(e)?String(e):String(Number(e.toFixed(2))):"0"}function mr(n){return String(n||"").trim().toUpperCase()==="NO OVERHAUL"}function Gh(n){return String(n||"").trim().toUpperCase()==="ON CONDITION"}function rr(){return Ii(gn)}function Ki(n){const e=mr(n.overhaul),t=String(n.assignedTboHours??n.assigned??""),i=String(n.assignedTboYears??""),s=String(n.consumedTboHours??n.consumed??""),r=rr(),a=String(n.assignedTsnHours??""),o=String(n.assignedTsnYears??""),l=String(n.consumedTsnHours??""),c=ka(Vn(a)-Vn(l)),u=Gh(o)?"ON CONDITION":e?"":Es(n.overhaul,o)||String(n.remainingTsnYears||""),f=ka(Vn(t)-Vn(s)),d=e?"":Es(n.overhaul,i)||String(n.due||""),h=d;return{component:String(n.component||""),series:String(n.series||""),manufactureDate:String(n.manufactureDate||n.fabricationDate||n.fechaFabricacion||""),workshop:String(n.workshop||""),overhaul:String(n.overhaul||""),assigned:t,consumed:s,remaining:f,assignedTboHours:t,assignedTboYears:i,consumedTboHours:s,consumedTboYears:r,assignedTsnHours:a,assignedTsnYears:o,consumedTsnHours:l,consumedTsnYears:r,remainingTboHours:f,remainingTboYears:h,remainingTsnHours:c,remainingTsnYears:u,motorStartsTsn:String(n.motorStartsTsn||""),gasHoursTsn:String(n.gasHoursTsn||""),motorStartsTbo:String(n.motorStartsTbo||""),gasHoursTbo:String(n.gasHoursTbo||""),apuStartsTsn:String(n.apuStartsTsn||""),apuGasHoursTsn:String(n.apuGasHoursTsn||""),apuStartsTbo:String(n.apuStartsTbo||""),apuGasHoursTbo:String(n.apuGasHoursTbo||""),notes:String(n.notes||""),due:d}}function ys(n){if(!Array.isArray(n))return[];const e=Date.now();return n.map((t,i)=>{const s=Number(t.deletedAt||0),r=Number(t.expiresAt||(s?s+kh:0));return{id:String(t.id||`${s||e}-${i}`),type:t.type==="aircraft"?"aircraft":"component",aircraftId:String(t.aircraftId||""),aircraftCode:String(t.aircraftCode||""),aircraftName:String(t.aircraftName||""),name:String(t.name||""),deletedAt:s,expiresAt:r,data:t.data&&typeof t.data=="object"?pr(t.data):null}}).filter(t=>t.deletedAt>0&&t.expiresAt>e&&t.data).sort((t,i)=>i.deletedAt-t.deletedAt)}function sc(n){return Array.isArray(n)?n.map((e,t)=>({id:String(e.id||`${e.timestamp||Date.now()}-${t}`),timestamp:Number(e.timestamp||0),action:String(e.action||"Cambio registrado"),detail:String(e.detail||""),aircraftCode:String(e.aircraftCode||""),user:String(e.user||"")})).filter(e=>e.timestamp>0).sort((e,t)=>t.timestamp-e.timestamp).slice(0,Bh):[]}function gb(){const n=localStorage.getItem(sr);if(!n)return tl();try{const e=JSON.parse(n);return!Array.isArray(e.aircrafts)||e.aircrafts.length===0?tl():((!e.selectedId||!e.aircrafts.find(t=>t.id===e.selectedId))&&(e.selectedId=e.aircrafts[0].id),e.changes=sc(e.changes),e.trash=ys(e.trash),e.aircrafts=e.aircrafts.map(t=>({...t,rows:Array.isArray(t.rows)?t.rows.map(Ki):[]})),e)}catch{return tl()}}function ii(n){const e=String(n).trim().match(/^(\d{2})\/(\d{2})\/(\d{4})$/);if(!e)return null;const t=Number(e[1]),i=Number(e[2]),s=Number(e[3]),r=new Date(s,i-1,t);return r.getFullYear()!==s||r.getMonth()!==i-1||r.getDate()!==t?null:r}function Ii(n){const e=String(n.getDate()).padStart(2,"0"),t=String(n.getMonth()+1).padStart(2,"0");return`${e}/${t}/${n.getFullYear()}`}function _b(n,e){const t=Vn(e);if(t<=0)return null;const i=new Date(n),s=Math.round(t*12),r=i.getDate();i.setDate(1),i.setMonth(i.getMonth()+s);const a=new Date(i.getFullYear(),i.getMonth()+1,0).getDate();return i.setDate(Math.min(r,a)),i}function Es(n,e){if(mr(n))return"";const t=ii(n),i=t?_b(t,e):null;return i?Ii(i):""}function Fc(n){return String(n??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\x20-\x7E]/g," ").replace(/\s+/g," ").trim()}function vb(n){return Fc(n).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")}function js(n){return Fc(n).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"aeronave"}function ni(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Vd(n,e){const t=Fc(n).split(" ").filter(Boolean),i=[];let s="";return t.forEach(r=>{const a=s?`${s} ${r}`:r;if(a.length>e&&s){i.push(s),s=r;return}s=a}),s&&i.push(s),i.length?i:["--"]}function xb(){return Object.values(Vh).every(n=>n&&!String(n).startsWith("REEMPLAZAR_"))}function Sb(n){return mb.includes(String(n||"").toLowerCase())}function nl(n){return new Promise((e,t)=>{if(document.querySelector(`script[src="${n}"]`)){e();return}const i=document.createElement("script");i.src=n,i.onload=e,i.onerror=t,document.head.appendChild(i)})}const Mb={name:"App",data(){return{activeView:"dashboard",activeMenuLabel:"Dashboard",authBusy:!1,authHint:"Usa Ingresar si ya tienes cuenta, o Crear cuenta si es tu primera vez.",authHintError:!1,authReady:!1,cloudErrorMessage:"",cloudStatus:"Local",cloudStatusError:!1,currentUser:null,dbReady:!1,fleet:gb(),firestoreUnsubscribe:null,hasLoadedRemoteFleet:!1,isOwner:!1,isApplyingRemoteFleet:!1,isSavingToFirestore:!1,lastLocalWriteAt:0,lastSyncAt:Dd(localStorage)?Number(Hd().updatedAt||0):0,loginEmail:"",loginPassword:"",componentAddMenuOpen:!1,dashboardDetailOpen:!1,dashboardDetailType:"total",openOverhaulMenuIndex:null,passwordVisible:!1,loginThreeCleanup:null,syncSource:"local",mobileMenuOpen:!1,sidebarCollapsed:!1,textSizeLarge:!1,icons:{add:KM,open:ZM,aircrafts:Ld,alerts:Id,calendar:Ud,collapse:JM,components:Nd,dashboard:Fd,database:Od,delete:Bd,download:$M,due:ub,edit:QM,expand:jM,eye:eb,history:kd,login:tb,menu:nb,overhaul:ib,restore:sb,save:rb,serviceTime:ab,signOut:ob,sync:lb,user:cb},newAircraft:{code:"",name:"",notes:""},editingAircraftId:"",editingAircraftDraft:{code:"",name:"",notes:""},draggingAircraftId:"",draggingRowIndex:null,menuItems:[{label:"Dashboard",target:"dashboard",icon:Fd},{label:"Aeronaves",target:"aeronaves",icon:Ld},{label:"Componentes",target:"componentes",icon:Nd},{label:"Base de datos",target:"base-datos",icon:Od},{label:"Alertas",target:"alertas",icon:Id},{label:"Calendario",target:"calendario",icon:Ud},{label:"Historial",target:"historial",icon:kd},{label:"Papelera",target:"papelera",icon:Bd}]}},computed:{activeUser(){return this.currentUser},isAuthenticated(){return!!(this.currentUser&&!this.currentUser.isAnonymous)},todayLabel(){return Ii(gn)},authStatus(){return this.isAuthenticated?this.isOwner?"Editor":"Solo lectura":"No autenticado"},currentAircraft(){return this.fleet.aircrafts.find(n=>n.id===this.fleet.selectedId)||null},currentRows(){return this.currentAircraft?this.currentAircraft.rows:[]},aircraftChip(){return this.currentAircraft?`${this.currentAircraft.code} (${this.currentAircraft.name})`:"--"},cloudStatusText(){return this.cloudStatus.toLowerCase()},syncSourceText(){return this.syncSource==="remote"?"Remoto":"Local"},lastSyncLabel(){return this.lastSyncAt?new Intl.DateTimeFormat("es-PE",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(this.lastSyncAt)):"Sin datos"},metrics(){const n=this.currentRows,e=n.length,t=n.filter(u=>this.getStatus(u)==="CRITICO").length,i=n.filter(u=>this.getStatus(u)==="ALERTA").length,s=n.filter(u=>this.getStatus(u)==="OK").length,r=n.filter(u=>{const f=ii(u.due);if(!f)return!1;const d=Math.floor((f-gn)/864e5);return d>=0&&d<=90}).length,a=n.filter(u=>{const f=ii(u.due);if(!f)return!1;const d=Math.floor((f-gn)/864e5);return d>=0&&d<=180}).length,o=n.reduce((u,f)=>u+this.rowConsumedHours(f),0),l=n.reduce((u,f)=>u+this.rowRemainingHours(f),0),c=Math.round((t+i*.5)/Math.max(e,1)*100);return{total:e,critical:t,alert:i,ok:s,dueIn90:r,dueIn180:a,consumedTotal:o,remainingTotal:l,risk:c}},riskRingStyle(){const n=Math.round(this.metrics.risk/100*360);return{background:`conic-gradient(${this.riskLabel.color} 0 ${n}deg, #183458 ${n}deg 360deg)`}},riskLabel(){return this.metrics.risk>=70?{label:"Alto",color:"var(--danger)"}:this.metrics.risk>=40?{label:"Medio",color:"var(--warn)"}:{label:"Bajo",color:"var(--ok)"}},fleetRiskLabel(){return this.fleetAlertMetrics.risk>=70?{label:"Alto",color:"var(--danger)"}:this.fleetAlertMetrics.risk>=40?{label:"Medio",color:"var(--warn)"}:{label:"Bajo",color:"var(--ok)"}},riskAttentionText(){return`${this.metrics.critical+this.metrics.alert} de ${Math.max(this.metrics.total,1)} componentes requieren atención`},panelTotals(){return{assigned:this.currentRows.reduce((n,e)=>n+this.rowAssignedHours(e),0),consumed:this.currentRows.reduce((n,e)=>n+this.rowConsumedHours(e),0),remaining:this.currentRows.reduce((n,e)=>n+this.rowRemainingHours(e),0)}},dueRows(){return this.currentRows.map((n,e)=>({row:n,index:e,dueDate:ii(n.due)})).filter(n=>n.dueDate).sort((n,e)=>n.dueDate-e.dueDate)},aircraftSeries(){const n=this.currentRows.find(e=>String(e.series||"").trim());return n?String(n.series).trim():"--"},nextDueDate(){return this.dueRows.length>0?this.dueRows[0].row.due:"--"},aircraftState(){return this.currentRows.length===0?"SIN DATOS":this.metrics.critical>0?"CRITICO":this.metrics.alert>0?"ALERTA":"OPERATIVO"},consumedPct(){const n=this.panelTotals.assigned;return n<=0?0:Math.max(0,Math.min(100,this.panelTotals.consumed/n*100))},chartBars(){const n=this.currentRows.slice(0,6);if(n.length===0)return[];const e=Math.max(1,...n.map(t=>Math.max(this.rowConsumedHours(t)+Math.max(this.rowRemainingHours(t),0),1)));return n.map((t,i)=>{const s=this.rowConsumedHours(t),r=Math.max(this.rowRemainingHours(t),0),a=Math.max(s+r,1),o=this.getStatus(t);return{key:`${t.component}-${i}`,label:t.component||"Sin nombre",logo:this.componentLogo(t),categoryClass:this.categoryClass(t),consumed:s,remaining:r,percentage:Math.round(s/a*100),consumedWidth:Math.max(0,Math.min(100,s/e*100)),remainingWidth:Math.max(0,Math.min(100,r/e*100)),statusClass:o==="CRITICO"?"critical":o==="ALERTA"?"warn":"ok"}})},categoryChart(){const n=new Map;this.currentRows.forEach(t=>{const i=this.componentCategory(t),s=n.get(i.key)||{...i,value:0};s.value+=Math.max(this.rowConsumedHours(t),0),n.set(i.key,s)});const e=Math.max(this.metrics.consumedTotal,1);return Array.from(n.values()).sort((t,i)=>i.value-t.value).map(t=>({...t,percentage:Math.round(t.value/e*100)}))},categoryDonutStyle(){let n=0;const e=this.categoryChart.map(t=>{const i=n+t.percentage/100*360,s=`${t.color} ${n}deg ${i}deg`;return n=i,s});return{background:e.length?`conic-gradient(${e.join(", ")})`:"#183458"}},statusChart(){const n=[{key:"ok",label:"Operativos",value:this.metrics.ok,color:"#16b86a"},{key:"alert",label:"Atención",value:this.metrics.alert,color:"#ffb100"},{key:"critical",label:"Overhaul",value:this.metrics.critical,color:"#ff4f4f"}],e=Math.max(this.metrics.total,1);return n.map(t=>({...t,percentage:Math.round(t.value/e*100)}))},statusDonutStyle(){let n=0;const e=this.statusChart.map(t=>{const i=n+t.percentage/100*360,s=`${t.color} ${n}deg ${i}deg`;return n=i,s});return{background:e.length?`conic-gradient(${e.join(", ")})`:"#183458"}},trendChart(){const n=this.currentRows.slice(0,6),e=n.flatMap(s=>[this.rowConsumedHours(s),Math.max(this.rowRemainingHours(s),0)]),t=Math.max(1,...e),i=n.map((s,r)=>{const a=48+r*532/Math.max(n.length-1,1),o=150-this.rowConsumedHours(s)/t*120,l=150-Math.max(this.rowRemainingHours(s),0)/t*120;return{key:`${s.component}-${r}`,x:a,consumedY:o,remainingY:l,label:this.shortComponentLabel(s.component)}});return{max:t,points:i,consumedPoints:i.map(s=>`${s.x},${s.consumedY}`).join(" "),remainingPoints:i.map(s=>`${s.x},${s.remainingY}`).join(" "),gridLines:[30,70,110,150].map(s=>({y:s}))}},dueEvents(){return this.dueRows.length===0?[{key:"empty",component:"Sin vencimientos registrados",due:"--",className:"ok"}]:this.dueRows.slice(0,5).map(n=>{const e=this.getStatus(n.row);return{key:`${n.row.component}-${n.index}`,component:n.row.component,due:n.row.due,className:e==="CRITICO"?"danger":e==="ALERTA"?"warn":"ok"}})},alertRows(){const n=this.currentRows.map((e,t)=>{const i=this.getStatus(e);return{key:`${e.component}-${t}`,component:e.component||"Sin nombre",status:i,className:i==="CRITICO"?"danger":"warn"}}).filter(e=>e.status==="CRITICO"||e.status==="ALERTA");return n.length?n:[{key:"empty",component:"Sin alertas activas",status:"OK",className:"ok"}]},allAlertRows(){const n=this.fleet.aircrafts.flatMap(e=>(Array.isArray(e.rows)?e.rows:[]).map((t,i)=>{const s=this.getStatus(t);return{key:`${e.id}-${t.component}-${t.series}-${i}`,aircraftCode:e.code||"--",component:t.component||"Sin nombre",status:s,className:s==="CRITICO"?"danger":"warn"}}).filter(t=>t.status==="CRITICO"||t.status==="ALERTA"));return n.length?n:[{key:"empty",aircraftCode:"--",component:"Sin alertas activas",status:"OK",className:"ok"}]},fleetAlertMetrics(){const n=this.fleet.aircrafts.flatMap(o=>Array.isArray(o.rows)?o.rows:[]),e=n.length,t=n.filter(o=>this.getStatus(o)==="CRITICO").length,i=n.filter(o=>this.getStatus(o)==="ALERTA").length,s=n.filter(o=>{const l=ii(o.due);if(!l)return!1;const c=Math.floor((l-gn)/864e5);return c>=0&&c<=90}).length,r=n.filter(o=>{const l=ii(o.due);if(!l)return!1;const c=Math.floor((l-gn)/864e5);return c>=0&&c<=180}).length,a=Math.round((t+i*.5)/Math.max(e,1)*100);return{total:e,critical:t,alert:i,dueIn90:s,dueIn180:r,risk:a}},recentChanges(){return sc(this.fleet.changes)},historyRows(){return this.currentRows.map((n,e)=>{const t=this.getStatus(n);return{key:`${n.component}-${n.series}-${e}`,component:n.component||"Sin nombre",series:n.series||"--",manufactureDate:n.manufactureDate||"--",workshop:n.workshop||"--",overhaul:n.overhaul||"--",due:n.due||"--",status:t,statusClass:this.statusClass(n)}})},trashRows(){return ys(this.fleet.trash).map(n=>({...n,typeLabel:n.type==="aircraft"?"Aeronave":"Componente"}))},dashboardDetailTitle(){const n={total:"Total de Componentes",critical:"Críticos / Overhaul",alert:"Alertas Preventivas",ok:"En Condiciones",risk:"Riesgo Global",due:"Próximos Vencimientos"};return n[this.dashboardDetailType]||n.total},dashboardDetailRows(){const n=this.dashboardDetailType;return this.currentRows.map((e,t)=>{const i=this.getStatus(e),s=ii(e.due);return{key:`${e.component}-${e.series}-${t}`,row:e,dueDate:s,status:i,component:e.component||"Sin nombre",series:e.series||"--",workshop:e.workshop||"--",overhaul:e.overhaul||"--",due:e.due||"--",assigned:`${this.formatMetric(this.rowAssignedHours(e))} h`,consumed:`${this.formatMetric(this.rowConsumedHours(e))} h`,remaining:`${this.formatMetric(this.rowRemainingHours(e))} h`,statusClass:this.statusClass(e)}}).filter(e=>n==="critical"?e.status==="CRITICO":n==="alert"?e.status==="ALERTA":n==="ok"?e.status==="OK":n==="risk"?e.status==="CRITICO"||e.status==="ALERTA":n==="due"?!!e.dueDate:!0).sort((e,t)=>n!=="due"?0:e.dueDate-t.dueDate)}},watch:{isAuthenticated(n){if(n){this.destroyLoginThreeBackground();return}this.$nextTick(()=>this.initLoginThreeBackground())}},mounted(){this.initAuth(),this.$nextTick(()=>this.initLoginThreeBackground()),window.addEventListener("resize",this.handleResize)},beforeUnmount(){this.destroyLoginThreeBackground(),window.removeEventListener("resize",this.handleResize),this.firestoreUnsubscribe&&this.firestoreUnsubscribe()},methods:{showPassword(){this.authBusy||(this.passwordVisible=!0)},hidePassword(){this.passwordVisible=!1},openDashboardDetail(n){this.dashboardDetailType=n,this.dashboardDetailOpen=!0},closeDashboardDetail(){this.dashboardDetailOpen=!1},initLoginThreeBackground(){if(this.loginThreeCleanup||this.isAuthenticated||!this.$refs.threeBg)return;const n=this.$refs.threeBg,e=window.innerWidth<768,t=e?90:180,i=1.7,s=new qM({canvas:n,alpha:!0,antialias:!0,powerPreference:"high-performance"});s.setClearColor(0,0),s.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const r=new E0,a=new vn(60,1,.1,100);a.position.z=8;const o=[],l=new zt;for(let j=0;j<t;j+=1)o.push((Math.random()-.5)*14,(Math.random()-.5)*10,(Math.random()-.5)*8);l.setAttribute("position",new Dt(o,3));const c=new ec({color:3718648,size:e?.035:.045,transparent:!0,opacity:.8,blending:ri,depthWrite:!1}),u=new F0(l,c);r.add(u);const f=new zt,d=new jl({color:2450411,transparent:!0,opacity:.18,blending:ri}),h=new N0(f,d);r.add(h),(()=>{const j=l.attributes.position.array,oe=[];for(let ye=0;ye<t;ye+=1){const Oe=j[ye*3],fe=j[ye*3+1],Ie=j[ye*3+2];for(let ze=ye+1;ze<t;ze+=1){const K=j[ze*3],re=j[ze*3+1],be=j[ze*3+2],Xe=Oe-K,Pe=fe-re,C=Ie-be;Math.sqrt(Xe*Xe+Pe*Pe+C*C)<i&&oe.push(Oe,fe,Ie,K,re,be)}}h.geometry.setAttribute("position",new Dt(oe,3))})();const b=new k0([new k(-7,-2.3,-2),new k(-4,-.7,-2.5),new k(-1,.5,-3),new k(2,-.2,-3),new k(4.5,1.2,-2.5),new k(7,.4,-2)]),g=new zt().setFromPoints(b.getPoints(150)),p=new jl({color:2282478,transparent:!0,opacity:.35,blending:ri}),y=new yh(g,p);r.add(y);const P=new Ba(.07,16,16),S=new hr({color:6809849,transparent:!0,opacity:1,blending:ri}),E=new hn(P,S);r.add(E);const A=new Ba(.18,16,16),D=new hr({color:3718648,transparent:!0,opacity:.18,blending:ri,depthWrite:!1}),x=new hn(A,D);r.add(x);const w=new hr({color:5217535,wireframe:!0,transparent:!0,opacity:.16,blending:ri}),L=new hn(new Nc(2.25,.012,8,96),w);L.rotation.x=Math.PI/2.6,L.position.set(-2.2,-.4,-1.6),r.add(L);const F=new hn(new Uc(.72,1),new ec({color:6809849,size:.018,transparent:!0,opacity:.34,blending:ri,depthWrite:!1}));F.position.set(2.6,.45,-.9),r.add(F);let z=0,q=0;const B=j=>{z=j.clientX/window.innerWidth-.5,q=j.clientY/window.innerHeight-.5};document.addEventListener("mousemove",B);const W=()=>{const j=window.innerWidth,oe=window.innerHeight;s.setSize(j,oe,!1),a.aspect=j/Math.max(oe,1),a.updateProjectionMatrix()};let te=0,V=0;const se=new Z0,Q=()=>{const j=se.getElapsedTime();u.rotation.y+=25e-5,u.rotation.x=Math.sin(j*.08)*.03,h.rotation.y=u.rotation.y,h.rotation.x=u.rotation.x,d.opacity=.11+(Math.sin(j*.7)+1)*.05,V+=9e-4,V>1&&(V=0);const oe=b.getPoint(V);E.position.copy(oe),x.position.copy(oe);const ye=1+Math.sin(j*4)*.35;x.scale.set(ye,ye,ye),L.rotation.z=j*.18,F.rotation.x=j*.28,F.rotation.y=j*.42,a.position.x+=(z*.15-a.position.x)*.015,a.position.y+=(-q*.12-a.position.y)*.015,a.position.z=8,s.render(r,a),te=window.requestAnimationFrame(Q)};W(),window.addEventListener("resize",W),Q(),this.loginThreeCleanup=()=>{window.cancelAnimationFrame(te),window.removeEventListener("resize",W),document.removeEventListener("mousemove",B),l.dispose(),f.dispose(),g.dispose(),P.dispose(),A.dispose(),L.geometry.dispose(),F.geometry.dispose(),c.dispose(),d.dispose(),p.dispose(),S.dispose(),D.dispose(),w.dispose(),F.material.dispose(),s.dispose(),this.loginThreeCleanup=null}},destroyLoginThreeBackground(){this.loginThreeCleanup&&this.loginThreeCleanup()},componentCategory(n){const e=`${n.component||""} ${n.series||""}`.toLowerCase();return/motor|tv3|ai-9|apu/.test(e)?{key:"motors",label:"Motores",color:"#176ee8",logo:"M"}:/vr-|reductor|reduct/.test(e)?{key:"reducers",label:"Reductores",color:"#12b96b",logo:"R"}:/bomba|hidraul/.test(e)?{key:"hydraulic",label:"Hidráulicos",color:"#f2a900",logo:"H"}:/generador|electr|ai-/.test(e)?{key:"systems",label:"Sistemas",color:"#8b62d9",logo:"S"}:{key:"other",label:"Otros",color:"#98a9c2",logo:"O"}},isApuRow(n){return/\bapu\b|tg-?16m|ai-9/i.test(`${n.component||""} ${n.series||""}`)},usageFieldLabels(n){return this.isApuRow(n)?{startsTsn:"Arranques TSN APU",gasTsn:"Gaso-horas TSN APU",startsTbo:"Arranques TBO APU",gasTbo:"Gaso-horas TBO APU"}:{startsTsn:"Arranques TSN de motores",gasTsn:"Gaso-horas TSN",startsTbo:"Arranque TBO de motores",gasTbo:"Gaso-horas TBO"}},usageFieldValues(n){return this.isApuRow(n)?{startsTsn:n.apuStartsTsn||"--",gasTsn:n.apuGasHoursTsn||"--",startsTbo:n.apuStartsTbo||"--",gasTbo:n.apuGasHoursTbo||"--"}:{startsTsn:n.motorStartsTsn||"--",gasTsn:n.gasHoursTsn||"--",startsTbo:n.motorStartsTbo||"--",gasTbo:n.gasHoursTbo||"--"}},componentLogo(n){return this.componentCategory(n).logo},categoryClass(n){return`category-${this.componentCategory(n).key}`},shortComponentLabel(n){const e=String(n||"Sin datos");return e.length>12?`${e.slice(0,11)}…`:e},async persistFleet(){const n=Date.now();return this.fleet.trash=ys(this.fleet.trash),localStorage.setItem(sr,JSON.stringify(this.fleet)),Qs(n),this.lastLocalWriteAt=n,this.lastSyncAt=n,this.syncSource="local",this.isApplyingRemoteFleet?!0:this.saveFleetToFirestore()},getRemoteUpdatedAt(n){if(n&&Number.isFinite(Number(n.updatedEpoch))&&Number(n.updatedEpoch)>0)return Number(n.updatedEpoch);if(!n||!n.updatedAt)return 0;if(typeof n.updatedAt.toMillis=="function")return n.updatedAt.toMillis();if(n.updatedAt.seconds)return Number(n.updatedAt.seconds)*1e3;const e=new Date(n.updatedAt).getTime();return Number.isFinite(e)?e:0},recordSystemChange(n,e,t=""){const i=Date.now(),s=t||(this.currentAircraft?this.currentAircraft.code:""),r=this.currentUser&&this.currentUser.email?this.currentUser.email:"local",a=Array.isArray(this.fleet.changes)?this.fleet.changes:[];this.fleet.changes=[{id:`${i}-${Math.random().toString(36).slice(2,8)}`,timestamp:i,action:n,detail:e,aircraftCode:s,user:r},...a].slice(0,Bh)},addToTrash(n,e,t=null,i=""){const s=Date.now(),r=t||this.currentAircraft||{},a=Array.isArray(this.fleet.trash)?this.fleet.trash:[];this.fleet.trash=ys([{id:`${n}-${s}-${Math.random().toString(36).slice(2,8)}`,type:n,aircraftId:r.id||"",aircraftCode:r.code||"",aircraftName:r.name||"",name:i,deletedAt:s,expiresAt:s+kh,data:pr(e)},...a])},formatChangeDate(n){return n?new Intl.DateTimeFormat("es-PE",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(n)):"--"},rowAssignedHours(n){return Vn(n.assignedTboHours??n.assigned)},rowConsumedHours(n){return Vn(n.consumedTboHours??n.consumed)},rowRemainingHours(n){return Vn(n.remainingTboHours??n.remaining)},toggleOverhaulMenu(n){this.openOverhaulMenuIndex=this.openOverhaulMenuIndex===n?null:n},async applyNoOverhaul(n){n.overhaul="NO OVERHAUL",this.openOverhaulMenuIndex=null,await this.saveRowFieldChange(n,"Ultimo overhaul","all")},updateTboDerived(n){const e=rr(),t=this.rowAssignedHours(n)-this.rowConsumedHours(n),i=Es(n.overhaul,n.assignedTboYears);n.consumedTboYears=e,n.consumedTsnYears=e,n.remainingTboHours=ka(t),n.remainingTboYears=i||"",n.assigned=String(n.assignedTboHours??""),n.consumed=String(n.consumedTboHours??""),n.remaining=n.remainingTboHours,mr(n.overhaul)?n.due="":i&&(n.due=i)},updateTsnDerived(n){const e=rr(),t=Vn(n.assignedTsnHours)-Vn(n.consumedTsnHours);if(n.consumedTsnYears=e,n.remainingTsnHours=ka(t),Gh(n.assignedTsnYears)){n.assignedTsnYears="ON CONDITION",n.remainingTsnYears="ON CONDITION";return}n.remainingTsnYears=mr(n.overhaul)?"":Es(n.overhaul,n.assignedTsnYears)||""},updateAllDerived(n){this.updateTboDerived(n),this.updateTsnDerived(n)},async saveRowFieldChange(n,e,t=""){t==="tbo"&&this.updateTboDerived(n),t==="tsn"&&this.updateTsnDerived(n),t==="all"&&this.updateAllDerived(n),this.recordSystemChange("Componente actualizado",`${e}: ${n.component||"Sin nombre"}`),await this.persistFleet()},updateCloudStatus(n,e=!1,t=""){this.cloudStatus=n,this.cloudStatusError=e,this.cloudErrorMessage=t},getFirebaseErrorMessage(n){const e=n&&n.code?n.code:"firebase-error",t=n&&n.message?n.message:"Error desconocido de Firebase.";return`${e}: ${t}`},getFleetDocRef(){return!window.firebase||!window.firebase.firestore?null:window.firebase.firestore().collection(fb).doc(hb)},getValidFleet(n){return!n||!Array.isArray(n.aircrafts)||n.aircrafts.length===0?null:{selectedId:n.selectedId&&n.aircrafts.some(t=>t.id===n.selectedId)?n.selectedId:n.aircrafts[0].id,changes:sc(n.changes),trash:ys(n.trash),aircrafts:n.aircrafts.map(t=>({id:String(t.id||""),code:String(t.code||""),name:String(t.name||""),notes:String(t.notes||""),rows:Array.isArray(t.rows)?t.rows.map(Ki):[]})).filter(t=>t.id&&t.code)}},async loadFleetFromFirestore(){const n=this.getFleetDocRef();if(n)try{const e=await n.get({source:"server"});if(!e.exists){this.updateCloudStatus("Inicial"),this.isOwner&&await this.saveFleetToFirestore(!0);return}const t=e.data()||{},i=this.getValidFleet(t.fleet);if(!i){this.updateCloudStatus("Datos invalidos",!0);return}const s=this.getRemoteUpdatedAt(t)||Date.now();this.hasLoadedRemoteFleet=!0,this.isApplyingRemoteFleet=!0,this.fleet=i,localStorage.setItem(sr,JSON.stringify(i)),Qs(s),this.lastSyncAt=s,this.syncSource="remote",this.$nextTick(()=>{this.isApplyingRemoteFleet=!1}),this.updateCloudStatus("Sincronizado")}catch(e){const t=this.getFirebaseErrorMessage(e);console.error("Firestore initial read error:",e),this.updateCloudStatus("Error lectura",!0,t),this.updateLoginHint(`No se pudo cargar la flota desde Firestore. ${t}`,!0)}},subscribeFleetFromFirestore(){const n=this.getFleetDocRef();n&&(this.firestoreUnsubscribe&&this.firestoreUnsubscribe(),this.hasLoadedRemoteFleet=!1,this.updateCloudStatus("Conectando"),this.firestoreUnsubscribe=n.onSnapshot(async e=>{if(e.metadata.hasPendingWrites)return;if(!e.exists){this.updateCloudStatus("Inicial"),this.isOwner&&await this.saveFleetToFirestore(!0);return}const t=e.data()||{},i=this.getValidFleet(t.fleet),s=this.getRemoteUpdatedAt(t),r=Number(Hd().updatedAt||0);if(!i){this.updateCloudStatus("Datos invalidos",!0);return}if(!this.hasLoadedRemoteFleet){this.hasLoadedRemoteFleet=!0,this.isApplyingRemoteFleet=!0,this.fleet=i,localStorage.setItem(sr,JSON.stringify(i));const o=s||Date.now();Qs(o),this.lastSyncAt=o,this.syncSource="remote",this.$nextTick(()=>{this.isApplyingRemoteFleet=!1}),this.updateCloudStatus("Sincronizado");return}if(s<=r||this.lastLocalWriteAt&&s<this.lastLocalWriteAt){this.updateCloudStatus("Sincronizado local");return}this.isApplyingRemoteFleet=!0,this.fleet=i,localStorage.setItem(sr,JSON.stringify(i));const a=s||Date.now();Qs(a),this.lastSyncAt=a,this.syncSource="remote",this.$nextTick(()=>{this.isApplyingRemoteFleet=!1}),this.updateCloudStatus("Sincronizado")},e=>{const t=this.getFirebaseErrorMessage(e);console.error("Firestore read error:",e),this.firestoreUnsubscribe=null,this.updateCloudStatus("Error lectura",!0,t),this.updateLoginHint(`No se pudo leer Firestore. ${t}`,!0)}))},async saveFleetToFirestore(n=!1){if(!this.dbReady)return this.updateCloudStatus("Sin Firebase",!0),this.updateLoginHint("Firestore aun no esta listo.",!0),!1;if(!this.currentUser||this.currentUser.isAnonymous)return this.updateCloudStatus("Requiere login",!0),this.updateLoginHint("Inicia sesion con el correo autorizado para guardar.",!0),!1;if(!this.isOwner&&!n)return this.updateLoginHint("Tu cuenta tiene permisos de solo lectura.",!0),!1;if(this.isApplyingRemoteFleet)return!1;const e=Dd(localStorage);if(!n&&!e&&!this.isOwner)return!1;if(!n&&!e&&this.isOwner)try{const i=await this.getFleetDocRef().get();if(i.exists&&this.getValidFleet(i.data()&&i.data().fleet))return!1}catch(i){const s=this.getFirebaseErrorMessage(i);return this.updateCloudStatus("Error lectura",!0,s),this.updateLoginHint(`No se pudo comprobar Firestore. ${s}`,!0),!1}const t=this.getFleetDocRef();if(!t)return!1;try{this.isSavingToFirestore=!0,this.updateCloudStatus("Guardando");const i=Date.now();return await t.set({fleet:pr(this.fleet),updatedAt:window.firebase.firestore.FieldValue.serverTimestamp(),updatedBy:this.currentUser&&this.currentUser.email?this.currentUser.email:Hh,updatedEpoch:i},{merge:!0}),Qs(i),this.lastSyncAt=i,this.syncSource="local",this.updateCloudStatus("Guardado"),!0}catch(i){const s=this.getFirebaseErrorMessage(i);return console.error("Firestore write error:",i),this.updateCloudStatus("Error escritura",!0,s),this.updateLoginHint(`No se pudo guardar en Firestore. ${s}`,!0),!1}finally{this.isSavingToFirestore=!1}},updateLoginHint(n,e=!1){this.authHint=n,this.authHintError=e},formatMetric(n){return new Intl.NumberFormat("es-PE",{minimumFractionDigits:0,maximumFractionDigits:1}).format(n)},downloadAircraftExcel(n){if(!n)return;const e=this.createAircraftExcel(n),t=new Blob([e],{type:"application/vnd.ms-excel;charset=utf-8"}),i=URL.createObjectURL(t),s=document.createElement("a");s.href=i,s.download=`${js(n.code)}-${js(n.name)}.xls`,document.body.appendChild(s),s.click(),s.remove(),window.setTimeout(()=>URL.revokeObjectURL(i),1e3)},downloadAircraftPdf(n){if(!n)return;const e=this.createAircraftPdf(n),t=new Blob([e],{type:"application/pdf"}),i=URL.createObjectURL(t),s=document.createElement("a");s.href=i,s.download=`${js(n.code)}-${js(n.name)}.pdf`,document.body.appendChild(s),s.click(),s.remove(),window.setTimeout(()=>URL.revokeObjectURL(i),1e3)},createAircraftExcel(n){const e=Array.isArray(n.rows)?n.rows:[],t=e.filter(d=>this.getStatus(d)==="CRITICO").length,i=e.filter(d=>this.getStatus(d)==="ALERTA").length,s=e.filter(d=>this.getStatus(d)==="OK").length,r=e.reduce((d,h)=>d+this.rowAssignedHours(h),0),a=e.reduce((d,h)=>d+this.rowConsumedHours(h),0),o=e.reduce((d,h)=>d+this.rowRemainingHours(h),0),l=["Orden","Componente","Serie","Fecha fabricacion","Taller","Ultimo Overhaul","Asignado TBO (hrs)","Asignado TBO (anos)","Consumido TBO hrs","Consumido TBO anos","Asignado TSN (hrs)","Asignado TSN (anos)","Consumido TSN hrs","Consumido TSN anos","Remanente TBO (hrs)","Remanente TBO (anos)","Remanente TSN (hrs)","Remanente TSN (anos)","Arranques TSN","Gaso-horas TSN","Arranques TBO","Gaso-horas TBO","Notas","Vencimiento","Estado"],c=[7,24,16,16,20,18,16,16,16,16,16,16,16,16,17,17,17,17,22,16,22,16,30,16,14],u=d=>d==="CRITICO"?"background:#ffd7d7;color:#9b1c1c;font-weight:700;":d==="ALERTA"?"background:#fff0c2;color:#7a5200;font-weight:700;":"background:#d9f7e6;color:#136b3a;font-weight:700;",f=e.map((d,h)=>{const v=this.getStatus(d),b=this.usageFieldValues(d),g=[h+1,d.component||"--",d.series||"--",d.manufactureDate||"--",d.workshop||"--",d.overhaul||"--",d.assignedTboHours||d.assigned||"--",d.assignedTboYears||"--",d.consumedTboHours||d.consumed||"--",d.consumedTboYears||"--",d.assignedTsnHours||"--",d.assignedTsnYears||"--",d.consumedTsnHours||"--",d.consumedTsnYears||"--",d.remainingTboHours||d.remaining||"--",d.remainingTboYears||"--",d.remainingTsnHours||"--",d.remainingTsnYears||"--",b.startsTsn,b.gasTsn,b.startsTbo,b.gasTbo,d.notes||"--",d.due||"--",v];return`<tr class="${h%2===0?"even-row":"odd-row"}">${g.map((p,y)=>{const P=y===g.length-1?u(v):"";return`<td style="border:1px solid #b8c7da;padding:7px;vertical-align:top;${y===0||y>=6&&y<=21?"text-align:right;":"text-align:left;"}${P}">${ni(p)}</td>`}).join("")}</tr>`}).join("");return`<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; color: #1d2b3a; }
    table { border-collapse: collapse; table-layout: fixed; width: 100%; }
    td, th { mso-number-format: "\\@"; }
    .even-row td { background: #ffffff; }
    .odd-row td { background: #f3f7fc; }
    .title { background: #0a3a78; color: #ffffff; font-size: 22px; font-weight: 700; }
    .subtitle { background: #dceaff; color: #0a3a78; font-weight: 700; }
    .summary-label { background: #edf4ff; font-weight: 700; }
    th { background: #176ee8; color: #ffffff; border: 1px solid #0a3a78; padding: 8px; font-weight: 700; text-align: center; white-space: normal; }
  </style>
</head>
<body>
  <table>
    <colgroup>${c.map(d=>`<col style="width:${d}ch">`).join("")}</colgroup>
    <tr><td class="title" colspan="${l.length}">DIVMAAER - Control de Calidad</td></tr>
    <tr><td class="subtitle" colspan="${l.length}">Reporte de Aeronave: ${ni(n.code)} - ${ni(n.name||"--")}</td></tr>
    <tr><td class="summary-label">Fecha reporte</td><td>${ni(Ii(new Date))}</td><td class="summary-label">Componentes</td><td>${e.length}</td><td class="summary-label">OK</td><td>${s}</td><td class="summary-label">Alertas</td><td>${i}</td><td class="summary-label">Criticos</td><td>${t}</td></tr>
    <tr><td class="summary-label">TBO asignado</td><td>${ni(this.formatMetric(r))}</td><td class="summary-label">Consumido</td><td>${ni(this.formatMetric(a))}</td><td class="summary-label">Remanente</td><td>${ni(this.formatMetric(o))}</td><td class="summary-label">Notas</td><td colspan="4">${ni(n.notes||"--")}</td></tr>
    <tr></tr>
    <tr>${l.map(d=>`<th>${ni(d)}</th>`).join("")}</tr>
    ${f||`<tr><td colspan="${l.length}" style="border:1px solid #b8c7da;padding:10px;">No hay componentes registrados.</td></tr>`}
  </table>
</body>
</html>`},createAircraftPdf(n){const r=[];let a=[],o=561;const l=()=>{a.length&&r.push(a.join(`
`)),a=[],o=561},c=fe=>{o-fe<34&&l()},u=(fe,Ie,ze,K,re)=>{a.push(`${re.join(" ")} rg ${fe} ${Ie} ${ze} ${K} re f`)},f=(fe,Ie,ze,K=9,re="F1",be=[.11,.17,.23])=>{a.push(`${be.join(" ")} rg BT /${re} ${K} Tf ${Ie} ${ze} Td (${vb(fe)}) Tj ET`)},d=(fe,Ie,ze,K)=>{a.push(`0.72 w 0.70 0.77 0.86 RG ${fe} ${Ie} m ${ze} ${K} l S`)},h=(fe,Ie=34,ze=9,K="F1",re=13,be)=>{c(re),f(fe,Ie,o,ze,K,be),o-=re},v=(fe,Ie,ze,K,re=9)=>{Vd(`${fe}: ${Ie||"--"}`,K).forEach(Xe=>h(Xe,ze,re))},b=Array.isArray(n.rows)?n.rows:[],g=b.filter(fe=>this.getStatus(fe)==="CRITICO").length,p=b.filter(fe=>this.getStatus(fe)==="ALERTA").length,y=b.filter(fe=>this.getStatus(fe)==="OK").length,P=b.reduce((fe,Ie)=>fe+this.rowAssignedHours(Ie),0),S=b.reduce((fe,Ie)=>fe+this.rowConsumedHours(Ie),0),E=b.reduce((fe,Ie)=>fe+this.rowRemainingHours(Ie),0),A=b.map(fe=>({row:fe,dueDate:ii(fe.due)})).filter(fe=>fe.dueDate).sort((fe,Ie)=>fe.dueDate-Ie.dueDate)[0],D=g>0?"CRITICO":p>0?"ALERTA":b.length?"OPERATIVO":"SIN DATOS";u(34,o-7,774,30,[.04,.23,.47]),f("DIVMAAER - Control de Calidad",46,o+3,12,"F2",[1,1,1]),o-=40,u(34,o-8,774,27,[.86,.92,1]),f(`Reporte de Aeronave: ${n.code}`,46,o+2,13,"F2",[.04,.23,.47]),o-=34,h(n.name||"--",34,11,"F1",16,[.25,.31,.38]),d(34,o+3,808,o+3),o-=12,h("Resumen operativo",34,13,"F2",18,[.04,.23,.47]),h(`Fecha de reporte: ${Ii(new Date)}`,34,9,"F1",13);const x=D==="CRITICO"?[.61,.11,.11]:D==="ALERTA"?[.48,.32,0]:[.08,.42,.23];h(`Estado general: ${D}`,34,9,"F2",13,x),h(`Componentes registrados: ${b.length} | Operativos: ${y} | Alertas: ${p} | Criticos: ${g}`,34,9,"F1",13),h(`TBO asignado: ${this.formatMetric(P)} h | Consumido: ${this.formatMetric(S)} h | Remanente: ${this.formatMetric(E)} h`,34,9,"F1",13),h(`Proximo vencimiento: ${A?`${A.row.component||"Componente"} (${A.row.due})`:"--"}`,34,9,"F1",16),v("Notas",n.notes,34,110,9),o-=6,h("Componentes",34,13,"F2",18,[.04,.23,.47]),b.length===0&&h("No hay componentes registrados para esta aeronave.",34,9,"F1",13);const w=14.2,L=[{x:46,width:240},{x:300,width:240},{x:554,width:220}],F=12,z=fe=>{const Ie=this.usageFieldLabels(fe),ze=this.usageFieldValues(fe);return[["Componente",fe.component||"--"],["Serie",fe.series||"--"],["Fecha fabricacion",fe.manufactureDate||"--"],["Taller",fe.workshop||"--"],["Ultimo Overhaul",fe.overhaul||"--"],["Vencimiento",fe.due||"--"],["Asignado TBO hrs",fe.assignedTboHours||fe.assigned||"--"],["Asignado TBO anos",fe.assignedTboYears||"--"],["Consumido TBO hrs",fe.consumedTboHours||fe.consumed||"--"],["Consumido TBO anos",fe.consumedTboYears||"--"],["Remanente TBO hrs",fe.remainingTboHours||fe.remaining||"--"],["Remanente TBO anos",fe.remainingTboYears||"--"],["Asignado TSN hrs",fe.assignedTsnHours||"--"],["Asignado TSN anos",fe.assignedTsnYears||"--"],["Consumido TSN hrs",fe.consumedTsnHours||"--"],["Consumido TSN anos",fe.consumedTsnYears||"--"],["Remanente TSN hrs",fe.remainingTsnHours||"--"],["Remanente TSN anos",fe.remainingTsnYears||"--"],[Ie.startsTsn,ze.startsTsn],[Ie.gasTsn,ze.gasTsn],[Ie.startsTbo,ze.startsTbo],[Ie.gasTbo,ze.gasTbo],["Estado",this.getStatus(fe)],["Notas",fe.notes||"--"]]};b.forEach((fe,Ie)=>{const ze=z(fe),K=ze.map(([ue,de],ee)=>{const xe=L[ee%L.length],R=Math.floor(ee/L.length),we=xe.x+86,Se=Math.max(8,Math.floor((xe.width-92)/4.2)),T=Vd(de,Se);return{label:ue,value:de,fieldIndex:ee,column:xe,rowNumber:R,valueX:we,lines:T}}),re=Math.ceil(ze.length/L.length),be=Array.from({length:re},(ue,de)=>{const ee=Math.max(1,...K.filter(xe=>xe.rowNumber===de).map(xe=>xe.lines.length));return Math.max(F,ee*8.4+3.6)}),Xe=be.reduce((ue,de,ee)=>(ue[ee]=ee===0?0:ue[ee-1]+be[ee-1],ue),[]),Pe=be.reduce((ue,de)=>ue+de,0),C=41+Pe+w;c(C);const I=this.getStatus(fe),G=I==="CRITICO"?[.61,.11,.11]:I==="ALERTA"?[.8,.53,0]:[.08,.42,.23],ae=I==="CRITICO"?[1,.92,.92]:I==="ALERTA"?[1,.97,.84]:[.95,.98,1],ne=o;u(34,ne-9,774,22,G),f(`Componente ${Ie+1}: ${fe.component||"Sin nombre"}`,46,ne-1,9.2,"F2",[1,1,1]),f(I,740,ne-1,9.2,"F2",[1,1,1]);const J=ne-31,he=Pe+10;u(34,J-he+12,774,he,ae),d(34,ne+13,808,ne+13),d(34,J-he+12,808,J-he+12),K.forEach(({label:ue,valueX:de,column:ee,rowNumber:xe,lines:R})=>{const we=J-Xe[xe],Se=ue==="Estado",T=Se?I==="CRITICO"?[.61,.11,.11]:I==="ALERTA"?[.48,.32,0]:[.08,.42,.23]:[.11,.17,.23];f(`${ue}:`,ee.x,we,7.4,"F2",[.04,.23,.47]),R.forEach((_,U)=>{f(_,de,we-U*8.4,7.4,Se?"F2":"F1",T)})}),o=J-he+12-w-13}),r.push(a.join(`
`));const q=[],B=fe=>(q.push(fe),q.length),W=B("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>"),te=B("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>"),V=[],se=r.map(fe=>B(`<< /Length ${fe.length} >>
stream
${fe}
endstream`)),Q=q.length+r.length+1;se.forEach(fe=>{const Ie=B(`<< /Type /Page /Parent ${Q} 0 R /MediaBox [0 0 842 595] /Resources << /Font << /F1 ${W} 0 R /F2 ${te} 0 R >> >> /Contents ${fe} 0 R >>`);V.push(Ie)}),B(`<< /Type /Pages /Kids [${V.map(fe=>`${fe} 0 R`).join(" ")}] /Count ${V.length} >>`);const j=B(`<< /Type /Catalog /Pages ${Q} 0 R >>`);let oe=`%PDF-1.4
`;const ye=[0];q.forEach((fe,Ie)=>{ye.push(oe.length),oe+=`${Ie+1} 0 obj
${fe}
endobj
`});const Oe=oe.length;return oe+=`xref
0 ${q.length+1}
0000000000 65535 f 
`,ye.slice(1).forEach(fe=>{oe+=`${String(fe).padStart(10,"0")} 00000 n 
`}),oe+=`trailer
<< /Size ${q.length+1} /Root ${j} 0 R >>
startxref
${Oe}
%%EOF`,oe},pct(n){const e=Math.max(this.metrics.total,1);return`${Math.round(n/e*100)}%`},getStatus(n){if(mr(n.overhaul))return"CRITICO";const e=this.rowRemainingHours(n),t=ii(n.due);if(e<0||t&&t<gn)return"CRITICO";const i=this.rowAssignedHours(n),s=t?Math.floor((t-gn)/864e5):null;return s!==null&&s<=180||i>0&&e<=i*.15?"ALERTA":"OK"},statusClass(n){const e=this.getStatus(n);return e==="CRITICO"?"critical":e==="ALERTA"?"warn":"ok"},navigate(n,e=""){var t;this.activeView=n,this.activeMenuLabel=e||((t=this.menuItems.find(i=>i.target===n))==null?void 0:t.label)||"Dashboard",this.setMobileMenuOpen(!1),this.$nextTick(()=>{const i=document.getElementById(n);i&&this.highlightAndScroll(i)})},highlightAndScroll(n){n.scrollIntoView({behavior:"smooth",block:"start"}),n.classList.add("jump-highlight"),window.setTimeout(()=>n.classList.remove("jump-highlight"),1200)},async openAircraft(n){n&&(this.fleet.selectedId=n,await this.persistFleet(),this.navigate("dashboard"))},startAircraftEdit(n){if(!this.isOwner){window.alert("Solo el propietario puede editar aeronaves.");return}this.editingAircraftId=n.id,this.editingAircraftDraft={code:n.code,name:n.name,notes:n.notes||""}},cancelAircraftEdit(){this.editingAircraftId="",this.editingAircraftDraft={code:"",name:"",notes:""}},async saveAircraftEdit(n){if(!this.isOwner){window.alert("Solo el propietario puede editar aeronaves.");return}const e=this.fleet.aircrafts.find(o=>o.id===n),t=this.editingAircraftDraft.code.trim().toUpperCase(),i=this.editingAircraftDraft.name.trim(),s=this.editingAircraftDraft.notes.trim();if(!e||!t||!i){window.alert("Ingresa n° cola y modelo para guardar la aeronave.");return}if(this.fleet.aircrafts.some(o=>o.id!==n&&o.code.toUpperCase()===t)){window.alert("Ese n° de cola ya existe.");return}e.code=t,e.name=i,e.notes=s,this.cancelAircraftEdit(),this.recordSystemChange("Aeronave actualizada",`${t} - ${i}`,t),await this.persistFleet()||window.alert("La aeronave se actualizo localmente, pero Firebase no pudo sincronizar el cambio.")},aircraftIndex(n){return this.fleet.aircrafts.findIndex(e=>e.id===n)},startAircraftDrag(n,e){if(!this.isOwner||this.editingAircraftId===e){n.preventDefault();return}this.draggingAircraftId=e,n.dataTransfer.effectAllowed="move",n.dataTransfer.setData("text/plain",e)},async dropAircraft(n,e){if(!this.isOwner)return;const t=n.dataTransfer.getData("text/plain")||this.draggingAircraftId,i=this.aircraftIndex(t),s=this.aircraftIndex(e);if(i<0||s<0||i===s){this.finishAircraftDrag();return}const r=[...this.fleet.aircrafts],[a]=r.splice(i,1);r.splice(s,0,a),this.fleet.aircrafts=r,this.finishAircraftDrag(),this.recordSystemChange("Aeronaves reordenadas",`${a.code} movida en la lista`,a.code),await this.persistFleet()||window.alert("El orden se actualizo localmente, pero Firebase no pudo sincronizar el cambio.")},finishAircraftDrag(){this.draggingAircraftId=""},async createAircraft(){if(!this.isOwner){window.alert("Solo el propietario puede crear aeronaves.");return}const n=this.newAircraft.code.trim().toUpperCase(),e=this.newAircraft.name.trim(),t=this.newAircraft.notes.trim();if(!n||!e){window.alert("Ingresa n° cola y modelo para crear la aeronave.");return}if(this.fleet.aircrafts.some(l=>l.code.toUpperCase()===n)){window.alert("Ese codigo ya existe.");return}const s=`${n.toLowerCase().replace(/[^a-z0-9]+/g,"-")}-${Date.now()}`,r=window.scrollX,a=window.scrollY;this.fleet.aircrafts.push({id:s,code:n,name:e,notes:t,rows:[]}),this.fleet.selectedId=s,this.newAircraft.code="",this.newAircraft.name="",this.newAircraft.notes="",this.recordSystemChange("Aeronave creada",`${n} - ${e}`,n);const o=await this.persistFleet();this.$nextTick(()=>window.scrollTo(r,a)),o||window.alert("La aeronave se creo localmente, pero Firebase no la pudo sincronizar. Revisa reglas y login.")},canDeleteAircraft(n){return this.isOwner&&!!n},async deleteAircraft(n){if(!this.isOwner){window.alert("Solo el propietario puede eliminar aeronaves.");return}const e=this.fleet.aircrafts.find(s=>s.id===n);if(!this.canDeleteAircraft(e)){window.alert("No se puede eliminar esta aeronave.");return}if(!window.confirm(`Deseas eliminar la aeronave ${e.code}?`))return;this.addToTrash("aircraft",e,e,`${e.code} - ${e.name}`),this.fleet.aircrafts=this.fleet.aircrafts.filter(s=>s.id!==n),this.fleet.selectedId===n&&(this.fleet.selectedId=this.fleet.aircrafts[0]?this.fleet.aircrafts[0].id:""),this.recordSystemChange("Aeronave eliminada",`${e.code} - ${e.name}`,e.code),await this.persistFleet()||window.alert("La aeronave se elimino localmente, pero Firebase no pudo sincronizar el cambio.")},getComponentTemplate(n="generic"){const e={component:"Nuevo componente",series:"",manufactureDate:"",workshop:"",overhaul:Ii(gn),assigned:"0",consumed:"0",remaining:"0",assignedTboHours:"0",assignedTboYears:"1",consumedTboHours:"0",consumedTboYears:rr(),assignedTsnHours:"0",assignedTsnYears:"1",consumedTsnHours:"0",consumedTsnYears:rr(),remainingTboHours:"0",remainingTboYears:"0",remainingTsnHours:"0",remainingTsnYears:Es(Ii(gn),"1"),motorStartsTsn:"",gasHoursTsn:"",motorStartsTbo:"",gasHoursTbo:"",apuStartsTsn:"",apuGasHoursTsn:"",apuStartsTbo:"",apuGasHoursTbo:"",notes:"",due:Es(Ii(gn),"1")};return n==="apu-tg-16m"?{...e,component:"APU TG-16M",assignedTboYears:"",assignedTsnYears:"",remainingTsnYears:"",due:""}:e},async addRow(n="generic"){if(!this.isOwner){window.alert("Solo el propietario puede editar.");return}if(!this.currentAircraft)return;this.componentAddMenuOpen=!1;const e=Ki(this.getComponentTemplate(n));this.currentAircraft.rows.push(e),this.recordSystemChange("Componente agregado",`${this.currentAircraft.code}: ${e.component||"Nuevo componente"}`),await this.persistFleet()},startRowDrag(n,e){if(!this.isOwner){n.preventDefault();return}this.draggingRowIndex=e,n.dataTransfer.effectAllowed="move",n.dataTransfer.setData("text/plain",String(e))},async dropRow(n){if(!this.isOwner||!this.currentAircraft||!Array.isArray(this.currentAircraft.rows)){this.finishRowDrag();return}if(this.draggingRowIndex===null)return;const e=Number(this.draggingRowIndex);if(!Number.isInteger(e)||e<0||n<0||n>=this.currentAircraft.rows.length||e===n){this.finishRowDrag();return}const t=[...this.currentAircraft.rows],[i]=t.splice(e,1);t.splice(n,0,i),this.currentAircraft.rows=t,this.finishRowDrag(),this.recordSystemChange("Componentes reordenados",`${i.component||"Sin nombre"} movido en ${this.currentAircraft.code}`),await this.persistFleet()||window.alert("El orden se actualizo localmente, pero Firebase no pudo sincronizar el cambio.")},finishRowDrag(){this.draggingRowIndex=null},async resetDb(){if(!this.isOwner){window.alert("Solo el propietario puede editar.");return}!window.confirm("Deseas restaurar la base de datos original?")||!this.currentAircraft||(this.currentAircraft.rows=this.currentAircraft.id==="pnp-501"?pr(zh).map(Ki):[],this.recordSystemChange("Base de datos restaurada",`${this.currentAircraft.code}: datos restaurados`),await this.persistFleet())},async deleteRow(n){if(!this.isOwner){window.alert("Solo el propietario puede editar.");return}if(!this.currentAircraft||!Array.isArray(this.currentAircraft.rows)||n<0||n>=this.currentAircraft.rows.length)return;const e=this.currentAircraft.rows[n],t=e&&e.component?e.component:"este componente";window.confirm(`Deseas eliminar ${t}?`)&&(this.addToTrash("component",e,this.currentAircraft,t),this.currentAircraft.rows.splice(n,1),this.recordSystemChange("Componente eliminado",`${this.currentAircraft.code}: ${t}`),await this.persistFleet())},async restoreTrashItem(n){if(!this.isOwner){window.alert("Solo el propietario puede restaurar elementos.");return}const e=ys(this.fleet.trash),t=e.find(s=>s.id===n);if(!t){window.alert("Este elemento ya no esta disponible en la papelera."),this.fleet.trash=e,await this.persistFleet();return}if(t.type==="aircraft"){const s={...t.data,id:t.data.id||`${js(t.aircraftCode||t.name)}-${Date.now()}`,rows:Array.isArray(t.data.rows)?t.data.rows.map(Ki):[]},r=this.fleet.aircrafts.some(a=>a.id===s.id);s.id=r?`${s.id}-${Date.now()}`:s.id,this.fleet.aircrafts.push(s),this.fleet.selectedId=s.id,this.recordSystemChange("Aeronave restaurada",`${s.code} - ${s.name}`,s.code)}else{const s=this.fleet.aircrafts.find(r=>r.id===t.aircraftId)||this.fleet.aircrafts.find(r=>r.code===t.aircraftCode)||this.currentAircraft;if(!s){window.alert("No hay aeronave disponible para restaurar el componente.");return}s.rows.push(Ki(t.data)),this.fleet.selectedId=s.id,this.recordSystemChange("Componente restaurado",`${s.code}: ${t.name}`)}this.fleet.trash=e.filter(s=>s.id!==n),await this.persistFleet()||window.alert("El elemento se restauro localmente, pero Firebase no pudo sincronizar el cambio.")},setMobileMenuOpen(n){this.mobileMenuOpen=n},handleResize(){window.innerWidth>760&&this.setMobileMenuOpen(!1)},getAuthErrorMessage(n){const e=n&&n.code?n.code:"";return e==="auth/invalid-credential"||e==="auth/wrong-password"||e==="auth/user-not-found"?"Correo o contrasena incorrectos.":e==="auth/too-many-requests"?"Demasiados intentos. Espera un momento y vuelve a probar.":e==="auth/operation-not-allowed"?"Activa Email/Password en Firebase Authentication.":e==="auth/weak-password"?"La contrasena debe tener al menos 6 caracteres.":e==="auth/email-already-in-use"?"Ese correo ya existe. Usa Ingresar o restablece la contrasena.":e==="auth/invalid-email"?"Ingresa un correo valido.":"No se pudo iniciar sesion con correo."},async createEmailUser(){if(!this.authReady)return this.updateLoginHint("Firebase Auth no esta disponible.",!0),!1;if(!this.loginEmail||!this.loginPassword)return this.updateLoginHint("Ingresa correo y contrasena para crear la cuenta.",!0),!1;try{return this.authBusy=!0,await window.firebase.auth().createUserWithEmailAndPassword(this.loginEmail,this.loginPassword),this.loginPassword="",this.updateLoginHint("Cuenta creada e ingreso correcto."),!0}catch(n){return console.error("Email sign-up error:",n),this.updateLoginHint(this.getAuthErrorMessage(n),!0),!1}finally{this.authBusy=!1}},async sendPasswordReset(){if(!this.authReady){this.updateLoginHint("Firebase Auth no esta disponible.",!0);return}if(!this.loginEmail){this.updateLoginHint("Escribe tu correo para enviar el restablecimiento.",!0);return}try{this.authBusy=!0,await window.firebase.auth().sendPasswordResetEmail(this.loginEmail),this.updateLoginHint("Te enviamos un correo para restablecer la contrasena.")}catch(n){console.error("Password reset error:",n),this.updateLoginHint(this.getAuthErrorMessage(n),!0)}finally{this.authBusy=!1}},async signInWithEmail(){if(!this.authReady){this.updateLoginHint("Firebase Auth no esta disponible.",!0);return}if(!this.loginEmail||!this.loginPassword){this.updateLoginHint("Ingresa correo y contrasena.",!0);return}try{this.authBusy=!0,await window.firebase.auth().signInWithEmailAndPassword(this.loginEmail,this.loginPassword),this.loginPassword="",this.updateLoginHint("Ingreso correcto con correo.")}catch(n){console.error("Email sign-in error:",n),this.updateLoginHint(this.getAuthErrorMessage(n),!0)}finally{this.authBusy=!1}},async signOut(){if(!this.authReady){this.currentUser=null,this.isOwner=!1;return}await window.firebase.auth().signOut()},async initAuth(){if(!xb()){this.updateLoginHint("Configura Firebase Auth para iniciar sesion.",!0);return}try{await nl("https://www.gstatic.com/firebasejs/10.12.3/firebase-app-compat.js"),await nl("https://www.gstatic.com/firebasejs/10.12.3/firebase-auth-compat.js"),await nl("https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore-compat.js")}catch(n){console.error("Firebase SDK load error:",n),this.updateLoginHint("Firebase Auth no esta disponible.",!0),this.updateCloudStatus("Sin conexion",!0,this.getFirebaseErrorMessage(n));return}if(!window.firebase||!window.firebase.firestore){this.updateLoginHint("Firebase Auth no esta disponible.",!0),this.updateCloudStatus("Sin Firebase",!0);return}window.firebase.apps.length||window.firebase.initializeApp(Vh),this.authReady=!0,this.dbReady=!0,window.firebase.auth().onAuthStateChanged(async n=>{if(this.currentUser=n,this.isOwner=!1,!n||n.isAnonymous){this.firestoreUnsubscribe&&(this.firestoreUnsubscribe(),this.firestoreUnsubscribe=null),this.updateCloudStatus("Requiere login"),this.updateLoginHint("Usa Ingresar si ya tienes cuenta, o Crear cuenta si es tu primera vez.");return}const e=(n.email||"").toLowerCase();let t="";try{t=(await n.getIdTokenResult()).claims.role||""}catch(i){console.warn("No se pudieron leer los claims de Auth:",i)}this.isOwner=t==="editor"||Sb(e),n&&!this.isOwner&&this.updateLoginHint("Ingreso autenticado en modo solo lectura."),n&&this.isOwner&&this.updateLoginHint("Ingreso autenticado en modo editor."),await this.loadFleetFromFirestore(),this.subscribeFleetFromFirestore()})}}},bb={key:0,class:"login-screen"},yb={id:"three-bg",ref:"threeBg","aria-hidden":"true"},Tb=["disabled"],Eb={class:"password-field"},Ab=["type","disabled"],wb=["disabled"],Cb=["src"],Rb={class:"login-actions"},Pb=["disabled"],Db=["src"],Lb=["disabled"],Ib=["src"],Ub=["disabled"],Nb={key:1,class:"layout"},Fb={class:"brand"},Ob={class:"brand-sub"},Bb=["aria-label","title"],kb=["src"],Hb={id:"sidebar-menu",class:"menu"},Vb=["href","onClick"],zb={class:"menu-icon","aria-hidden":"true"},Gb=["src"],Wb={class:"menu-label"},Xb={class:"content"},Yb={class:"topbar"},qb={class:"topbar-left"},Kb=["src"],Zb={class:"title-wrap"},Jb={class:"top-actions"},$b=["title"],Qb={class:"chip aircraft-chip"},jb={class:"chip date-chip"},ey=["src"],ty=["title"],ny=["src"],iy=["title"],sy=["title"],ry={class:"auth-status"},ay=["src"],oy=["src"],ly={id:"aeronaves",class:"view"},cy={class:"panel"},uy={class:"aircrafts-layout"},dy={class:"aircraft-list"},fy=["draggable","onDragstart","onDrop"],hy={key:0,class:"aircraft-notes"},py={class:"aircraft-actions"},my=["disabled","onClick"],gy=["src"],_y=["onClick"],vy=["src"],xy=["disabled","onClick"],Sy=["src"],My=["aria-label","title","onClick"],by=["src"],yy=["onClick"],Ty=["src"],Ey={key:0,class:"empty-note"},Ay=["disabled"],wy=["disabled"],Cy=["disabled"],Ry=["disabled"],Py=["src"],Dy={key:0,id:"dashboard",ref:"dashboard",class:"grid-kpi view"},Ly={class:"kpi-head"},Iy={class:"kpi-icon","aria-hidden":"true"},Uy=["src"],Ny={class:"kpi-value"},Fy={class:"kpi-head"},Oy={class:"kpi-icon","aria-hidden":"true"},By=["src"],ky={class:"kpi-value"},Hy={class:"kpi-meta"},Vy={class:"kpi-progress"},zy={class:"kpi-head"},Gy={class:"kpi-icon","aria-hidden":"true"},Wy=["src"],Xy={class:"kpi-value"},Yy={class:"kpi-meta"},qy={class:"kpi-progress"},Ky={class:"kpi-head"},Zy={class:"kpi-icon","aria-hidden":"true"},Jy=["src"],$y={class:"kpi-value"},Qy={class:"kpi-meta"},jy={class:"kpi-progress"},eT={class:"kpi-risk"},tT={class:"risk-copy"},nT={key:1,id:"main-grid-view",class:"main-grid view"},iT={class:"panel-sub"},sT={class:"plane-title"},rT={class:"meta-list"},aT={class:"state-pill"},oT={class:"progress-title"},lT={class:"progress"},cT={class:"resource-chart"},uT={class:"resource-row-head"},dT={class:"resource-name"},fT=["aria-label"],hT={class:"resource-values"},pT={class:"icon-heading"},mT=["src"],gT={class:"events"},_T={key:2,id:"componentes",class:"analytics-grid view"},vT={class:"panel analytics-panel"},xT={class:"donut-layout"},ST={class:"donut-center"},MT={class:"chart-list"},bT={class:"panel analytics-panel trend-panel"},yT={class:"trend-chart"},TT={class:"trend-axis-label top"},ET={viewBox:"0 0 600 180",role:"img","aria-label":"Tendencia de consumo y remanente"},AT=["y1","y2"],wT=["points"],CT=["points"],RT=["cx","cy"],PT=["cx","cy"],DT=["x"],LT={class:"panel analytics-panel"},IT={class:"donut-layout status-layout"},UT={class:"donut-center"},NT={class:"chart-list"},FT={key:3,id:"base-datos",ref:"baseDatos",class:"panel table-panel view"},OT={class:"table-title"},BT={class:"table-tools"},kT={class:"component-add-menu"},HT=["disabled"],VT=["src"],zT={key:0,class:"component-add-options"},GT=["disabled"],WT=["src"],XT={class:"table-wrap"},YT={class:"components-table"},qT=["onDrop"],KT={class:"row-drag-cell sticky-order-col"},ZT=["disabled","onDragstart"],JT={class:"sticky-component-col"},$T={class:"table-component"},QT=["onUpdate:modelValue","disabled","onChange"],jT=["onUpdate:modelValue","disabled","onChange"],eE=["onUpdate:modelValue","disabled","onChange"],tE=["onUpdate:modelValue","disabled","onChange"],nE=["onUpdate:modelValue","disabled","onInput","onChange"],iE=["disabled","onClick"],sE={key:0,class:"overhaul-menu"},rE=["onClick"],aE=["onUpdate:modelValue","disabled","onInput","onChange"],oE=["onUpdate:modelValue","disabled","onInput","onChange"],lE=["onUpdate:modelValue","disabled","onInput","onChange"],cE=["onUpdate:modelValue"],uE=["onUpdate:modelValue","disabled","onInput","onChange"],dE=["onUpdate:modelValue","disabled","onInput","onChange"],fE=["onUpdate:modelValue","disabled","onInput","onChange"],hE=["onUpdate:modelValue"],pE=["onUpdate:modelValue"],mE=["onUpdate:modelValue"],gE=["onUpdate:modelValue"],_E=["onUpdate:modelValue"],vE=["onUpdate:modelValue","disabled","onChange"],xE=["onUpdate:modelValue","disabled","onChange"],SE=["onUpdate:modelValue","disabled","onChange"],ME=["onUpdate:modelValue","disabled","onChange"],bE=["onUpdate:modelValue","disabled","onChange"],yE=["onUpdate:modelValue","disabled","onChange"],TE=["onUpdate:modelValue","disabled","onChange"],EE=["onUpdate:modelValue","disabled","onChange"],AE=["onUpdate:modelValue","disabled","onChange"],wE=["onUpdate:modelValue"],CE=["disabled","onClick"],RE=["src"],PE={key:4,id:"alertas",class:"view"},DE={class:"stats-row"},LE={class:"mini"},IE={style:{color:"var(--danger)"}},UE={class:"mini"},NE={style:{color:"var(--warn)"}},FE={class:"mini"},OE={style:{color:"var(--warn)"}},BE={class:"mini"},kE={style:{color:"#ffd58f"}},HE={class:"mini"},VE={class:"panel"},zE={class:"events"},GE={class:"event-aircraft"},WE={key:5,id:"calendario",class:"panel view"},XE={class:"icon-heading"},YE=["src"],qE={class:"events"},KE={key:6,id:"historial",class:"panel table-panel view"},ZE={class:"change-log"},JE={key:0,class:"change-aircraft"},$E={key:0,class:"empty-note"},QE={class:"table-wrap"},jE={class:"history-table"},eA={key:7,id:"papelera",class:"panel table-panel view"},tA={class:"table-wrap"},nA={class:"trash-table"},iA=["disabled","onClick"],sA=["src"],rA={key:0},aA={class:"dashboard-detail-modal",role:"dialog","aria-modal":"true","aria-labelledby":"dashboard-detail-title"},oA={class:"dashboard-detail-head"},lA={class:"panel-sub"},cA={id:"dashboard-detail-title"},uA={class:"dashboard-detail-summary"},dA={class:"dashboard-component-list"},fA={key:0,class:"dashboard-component-tags"},hA={key:1,class:"empty-note"},pA={class:"table-wrap detail-table-wrap"},mA={class:"dashboard-detail-table"},gA={key:0};function _A(n,e,t,i,s,r){return Be(),ke("div",{class:wt(["app-shell",{"sidebar-collapsed":s.sidebarCollapsed,"text-large":s.textSizeLarge}])},[r.isAuthenticated?(Be(),ke("div",Nb,[m("aside",{class:wt(["sidebar",{open:s.mobileMenuOpen}])},[m("div",Fb,[e[66]||(e[66]=m("h2",{class:"brand-title"},"DIVMAAER",-1)),m("p",Ob,me(r.currentAircraft?r.currentAircraft.code:"CONTROL DE CALIDAD"),1)]),m("button",{class:"sidebar-collapse-btn",type:"button","aria-label":s.sidebarCollapsed?"Desplegar menu lateral":"Ocultar menu lateral",title:s.sidebarCollapsed?"Desplegar menu":"Ocultar menu",onClick:e[15]||(e[15]=a=>s.sidebarCollapsed=!s.sidebarCollapsed)},[m("img",{class:"btn-icon",src:s.sidebarCollapsed?s.icons.expand:s.icons.collapse,alt:"","aria-hidden":"true"},null,8,kb)],8,Bb),m("nav",Hb,[(Be(!0),ke(ut,null,Wt(s.menuItems,a=>(Be(),ke("a",{key:a.label,class:wt(["menu-item",{active:s.activeMenuLabel===a.label}]),href:`#${a.target}`,onClick:vt(o=>r.navigate(a.target,a.label),["prevent"])},[m("span",zb,[m("img",{src:a.icon,alt:""},null,8,Gb)]),m("span",Wb,me(a.label),1)],10,Vb))),128))]),e[67]||(e[67]=m("div",{class:"profile"},[m("b",null,"Marlon Chuquino"),it(" Administrador ")],-1))],2),m("div",{class:wt(["mobile-menu-backdrop",{open:s.mobileMenuOpen}]),onClick:e[16]||(e[16]=a=>r.setMobileMenuOpen(!1))},null,2),m("main",Xb,[m("header",Yb,[m("div",qb,[m("button",{class:"mobile-menu-btn",type:"button","aria-label":"Abrir menu",onClick:e[17]||(e[17]=a=>r.setMobileMenuOpen(!s.mobileMenuOpen))},[m("img",{class:"btn-icon",src:s.icons.menu,alt:"","aria-hidden":"true"},null,8,Kb)]),e[68]||(e[68]=m("div",{class:"topbar-brand"},[m("p",{class:"topbar-kicker"},"CONTROL DE CALIDAD"),m("h1",null,"Sistema de Gestión de Recursos Aeronáuticos")],-1))]),m("div",Zb,[m("p",null,"Dashboard tecnico · "+me(r.currentAircraft?r.currentAircraft.code:"--"),1)]),m("div",Jb,[m("button",{class:"chip text-size-btn",type:"button",title:s.textSizeLarge?"Achicar letras":"Agrandar letras",onClick:e[18]||(e[18]=a=>s.textSizeLarge=!s.textSizeLarge)},me(s.textSizeLarge?"A-":"A+"),9,$b),m("div",Qb,[m("span",null,me(r.aircraftChip),1),e[69]||(e[69]=it()),e[70]||(e[70]=m("span",null,"▼",-1))]),m("div",jb,[m("img",{class:"chip-icon",src:s.icons.calendar,alt:"","aria-hidden":"true"},null,8,ey),it(" "+me(r.todayLabel),1)]),m("div",{class:wt(["chip firebase-chip",{"sync-error":s.cloudStatusError}]),title:s.cloudErrorMessage||s.cloudStatus},[m("img",{class:"chip-icon",src:s.icons.sync,alt:"","aria-hidden":"true"},null,8,ny),m("span",null,"Firebase "+me(r.cloudStatusText),1)],10,ty),m("div",{class:"chip sync-info-chip",title:`Fuente: ${r.syncSourceText}`},[m("span",{class:wt(["sync-source-dot",{remote:s.syncSource==="remote"}])},null,2),m("span",null,"Últ. sync: "+me(r.lastSyncLabel),1)],8,iy),m("div",{class:"auth-box",title:s.authHint},[m("span",ry,[m("img",{class:"btn-icon",src:s.icons.user,alt:"","aria-hidden":"true"},null,8,ay),it(me(r.authStatus),1)]),m("button",{class:"auth-btn",type:"button",onClick:e[19]||(e[19]=(...a)=>r.signOut&&r.signOut(...a))},[m("img",{class:"btn-icon",src:s.icons.signOut,alt:"","aria-hidden":"true"},null,8,oy),e[71]||(e[71]=it(" Cerrar sesion ",-1))])],8,sy)])]),rt(m("section",ly,[m("section",cy,[e[77]||(e[77]=m("h2",null,"Gestion de Aeronaves",-1)),e[78]||(e[78]=m("p",{class:"panel-sub"},"Selecciona una aeronave operativa o crea una nueva con base de datos vacia.",-1)),m("div",uy,[m("div",null,[m("div",dy,[(Be(!0),ke(ut,null,Wt(s.fleet.aircrafts,a=>(Be(),ke("article",{key:a.id,class:wt(["aircraft-card",{active:a.id===s.fleet.selectedId,dragging:s.draggingAircraftId===a.id}]),draggable:s.isOwner&&s.editingAircraftId!==a.id,onDragstart:o=>r.startAircraftDrag(o,a.id),onDragover:e[24]||(e[24]=vt(()=>{},["prevent"])),onDrop:vt(o=>r.dropAircraft(o,a.id),["prevent"]),onDragend:e[25]||(e[25]=(...o)=>r.finishAircraftDrag&&r.finishAircraftDrag(...o))},[s.editingAircraftId===a.id?(Be(),ke(ut,{key:0},[rt(m("input",{"onUpdate:modelValue":e[20]||(e[20]=o=>s.editingAircraftDraft.code=o),class:"aircraft-edit-input",type:"text",maxlength:"30","aria-label":"N° de cola de aeronave"},null,512),[[at,s.editingAircraftDraft.code,void 0,{trim:!0}]]),rt(m("input",{"onUpdate:modelValue":e[21]||(e[21]=o=>s.editingAircraftDraft.name=o),class:"aircraft-edit-input",type:"text",maxlength:"80","aria-label":"Modelo de aeronave"},null,512),[[at,s.editingAircraftDraft.name,void 0,{trim:!0}]]),rt(m("textarea",{"onUpdate:modelValue":e[22]||(e[22]=o=>s.editingAircraftDraft.notes=o),class:"aircraft-edit-input aircraft-notes-input",maxlength:"240","aria-label":"Notas de aeronave",placeholder:"Notas"},null,512),[[at,s.editingAircraftDraft.notes,void 0,{trim:!0}]]),m("p",null,"Componentes: "+me(a.rows.length),1)],64)):(Be(),ke(ut,{key:1},[m("h3",null,me(a.code),1),m("p",null,me(a.name),1),a.notes?(Be(),ke("p",hy,me(a.notes),1)):Ft("",!0),m("p",null,"Componentes: "+me(a.rows.length),1)],64)),m("div",py,[s.editingAircraftId===a.id?(Be(),ke(ut,{key:0},[m("button",{class:"table-btn",type:"button",disabled:!s.isOwner,onClick:o=>r.saveAircraftEdit(a.id)},[m("img",{class:"btn-icon",src:s.icons.save,alt:"","aria-hidden":"true"},null,8,gy),e[72]||(e[72]=it("Guardar",-1))],8,my),m("button",{class:"table-btn",type:"button",onClick:e[23]||(e[23]=(...o)=>r.cancelAircraftEdit&&r.cancelAircraftEdit(...o))},"Cancelar")],64)):(Be(),ke(ut,{key:1},[m("button",{class:"table-btn",type:"button",onClick:o=>r.openAircraft(a.id)},[m("img",{class:"btn-icon",src:s.icons.open,alt:"","aria-hidden":"true"},null,8,vy),e[73]||(e[73]=it("Abrir",-1))],8,_y),m("button",{class:"table-btn",type:"button",disabled:!s.isOwner,onClick:o=>r.startAircraftEdit(a)},[m("img",{class:"btn-icon",src:s.icons.edit,alt:"","aria-hidden":"true"},null,8,Sy),e[74]||(e[74]=it("Editar",-1))],8,xy),m("button",{class:"table-btn aircraft-download-btn",type:"button","aria-label":`Descargar PDF de ${a.code}`,title:`Descargar PDF de ${a.code}`,onClick:o=>r.downloadAircraftPdf(a)},[m("img",{class:"btn-icon",src:s.icons.download,alt:"","aria-hidden":"true"},null,8,by)],8,My)],64)),r.canDeleteAircraft(a)?(Be(),ke("button",{key:2,class:"table-btn danger-btn",type:"button",onClick:o=>r.deleteAircraft(a.id)},[m("img",{class:"btn-icon",src:s.icons.delete,alt:"","aria-hidden":"true"},null,8,Ty),e[75]||(e[75]=it(" Eliminar ",-1))],8,yy)):Ft("",!0)])],42,fy))),128))]),s.fleet.aircrafts.length===0?(Be(),ke("p",Ey,"No hay aeronaves registradas.")):Ft("",!0)]),m("form",{class:"aircraft-form",onSubmit:e[29]||(e[29]=vt((...a)=>r.createAircraft&&r.createAircraft(...a),["prevent"]))},[rt(m("input",{"onUpdate:modelValue":e[26]||(e[26]=a=>s.newAircraft.code=a),type:"text",maxlength:"30",placeholder:"Codigo (ej. PNP-700)",disabled:!s.isOwner},null,8,Ay),[[at,s.newAircraft.code,void 0,{trim:!0}]]),rt(m("input",{"onUpdate:modelValue":e[27]||(e[27]=a=>s.newAircraft.name=a),type:"text",maxlength:"80",placeholder:"Nombre (ej. Mi-171Sh)",disabled:!s.isOwner},null,8,wy),[[at,s.newAircraft.name,void 0,{trim:!0}]]),rt(m("textarea",{"onUpdate:modelValue":e[28]||(e[28]=a=>s.newAircraft.notes=a),maxlength:"240",placeholder:"Notas de la aeronave",disabled:!s.isOwner},null,8,Cy),[[at,s.newAircraft.notes,void 0,{trim:!0}]]),m("button",{class:"table-btn",type:"submit",disabled:!s.isOwner},[m("img",{class:"btn-icon",src:s.icons.add,alt:"","aria-hidden":"true"},null,8,Py),e[76]||(e[76]=it("Crear aeronave",-1))],8,Ry),m("p",{class:wt(["readonly-note",{visible:!s.isOwner}])},"Solo el propietario puede crear aeronaves.",2)],32)])])],512),[[Jm,s.activeView==="aeronaves"]]),s.activeView!=="aeronaves"?(Be(),ke(ut,{key:0},[s.activeView==="dashboard"?(Be(),ke("section",Dy,[m("article",{class:"kpi kpi-info kpi-clickable",role:"button",tabindex:"0",onClick:e[30]||(e[30]=a=>r.openDashboardDetail("total")),onKeydown:[e[31]||(e[31]=Ut(vt(a=>r.openDashboardDetail("total"),["prevent"]),["enter"])),e[32]||(e[32]=Ut(vt(a=>r.openDashboardDetail("total"),["prevent"]),["space"]))]},[m("div",Ly,[e[79]||(e[79]=m("p",{class:"kpi-title"},"Total Componentes",-1)),m("span",Iy,[m("img",{src:s.icons.components,alt:""},null,8,Uy)])]),m("p",Ny,me(r.metrics.total),1),e[80]||(e[80]=m("p",{class:"kpi-meta"},[m("span",null,"Registrados"),m("strong",null,"100%")],-1)),e[81]||(e[81]=m("div",{class:"kpi-progress"},[m("span",{style:{width:"100%"}})],-1))],32),m("article",{class:"kpi kpi-danger kpi-clickable",role:"button",tabindex:"0",onClick:e[33]||(e[33]=a=>r.openDashboardDetail("critical")),onKeydown:[e[34]||(e[34]=Ut(vt(a=>r.openDashboardDetail("critical"),["prevent"]),["enter"])),e[35]||(e[35]=Ut(vt(a=>r.openDashboardDetail("critical"),["prevent"]),["space"]))]},[m("div",Fy,[e[82]||(e[82]=m("p",{class:"kpi-title"},"Críticos / Overhaul",-1)),m("span",Oy,[m("img",{src:s.icons.overhaul,alt:""},null,8,By)])]),m("p",ky,me(r.metrics.critical),1),m("p",Hy,[e[83]||(e[83]=m("span",null,"Requieren atención",-1)),m("strong",null,me(r.pct(r.metrics.critical)),1)]),m("div",Vy,[m("span",{style:qt({width:r.pct(r.metrics.critical)})},null,4)])],32),m("article",{class:"kpi kpi-warn kpi-clickable",role:"button",tabindex:"0",onClick:e[36]||(e[36]=a=>r.openDashboardDetail("alert")),onKeydown:[e[37]||(e[37]=Ut(vt(a=>r.openDashboardDetail("alert"),["prevent"]),["enter"])),e[38]||(e[38]=Ut(vt(a=>r.openDashboardDetail("alert"),["prevent"]),["space"]))]},[m("div",zy,[e[84]||(e[84]=m("p",{class:"kpi-title"},"Alertas Preventivas",-1)),m("span",Gy,[m("img",{src:s.icons.alerts,alt:""},null,8,Wy)])]),m("p",Xy,me(r.metrics.alert),1),m("p",Yy,[e[85]||(e[85]=m("span",null,"Seguimiento cercano",-1)),m("strong",null,me(r.pct(r.metrics.alert)),1)]),m("div",qy,[m("span",{style:qt({width:r.pct(r.metrics.alert)})},null,4)])],32),m("article",{class:"kpi kpi-ok kpi-clickable",role:"button",tabindex:"0",onClick:e[39]||(e[39]=a=>r.openDashboardDetail("ok")),onKeydown:[e[40]||(e[40]=Ut(vt(a=>r.openDashboardDetail("ok"),["prevent"]),["enter"])),e[41]||(e[41]=Ut(vt(a=>r.openDashboardDetail("ok"),["prevent"]),["space"]))]},[m("div",Ky,[e[86]||(e[86]=m("p",{class:"kpi-title"},"En Condiciones",-1)),m("span",Zy,[m("img",{src:s.icons.serviceTime,alt:""},null,8,Jy)])]),m("p",$y,me(r.metrics.ok),1),m("p",Qy,[e[87]||(e[87]=m("span",null,"Operativos",-1)),m("strong",null,me(r.pct(r.metrics.ok)),1)]),m("div",jy,[m("span",{style:qt({width:r.pct(r.metrics.ok)})},null,4)])],32),m("article",{class:"kpi risk-card kpi-clickable",role:"button",tabindex:"0",onClick:e[42]||(e[42]=a=>r.openDashboardDetail("risk")),onKeydown:[e[43]||(e[43]=Ut(vt(a=>r.openDashboardDetail("risk"),["prevent"]),["enter"])),e[44]||(e[44]=Ut(vt(a=>r.openDashboardDetail("risk"),["prevent"]),["space"]))]},[m("div",eT,[m("div",{class:"ring",style:qt(r.riskRingStyle)},[m("span",null,me(r.metrics.risk)+"%",1)],4),m("div",tT,[e[88]||(e[88]=m("p",{class:"kpi-title"},"Riesgo Global",-1)),m("strong",{style:qt({color:r.riskLabel.color})},me(r.metrics.risk)+"%",5),m("span",null,"Nivel: "+me(r.riskLabel.label),1),m("small",null,me(r.riskAttentionText),1)])])],32)],512)):Ft("",!0),s.activeView==="dashboard"?(Be(),ke("section",nT,[m("article",{class:"panel panel-clickable",role:"button",tabindex:"0",onClick:e[45]||(e[45]=a=>r.openDashboardDetail("total")),onKeydown:[e[46]||(e[46]=Ut(vt(a=>r.openDashboardDetail("total"),["prevent"]),["enter"])),e[47]||(e[47]=Ut(vt(a=>r.openDashboardDetail("total"),["prevent"]),["space"]))]},[e[97]||(e[97]=m("h2",null,"Aeronave Seleccionada",-1)),m("p",iT,"Serie "+me(r.aircraftSeries),1),m("p",sT,me(r.currentAircraft?r.currentAircraft.name:"--"),1),m("ul",rT,[m("li",null,[e[89]||(e[89]=m("span",null,"Horas Totales (TSN):",-1)),e[90]||(e[90]=it()),m("span",null,me(r.formatMetric(r.panelTotals.consumed))+" h",1)]),m("li",null,[e[91]||(e[91]=m("span",null,"Vida Total Asignada:",-1)),e[92]||(e[92]=it()),m("span",null,me(r.formatMetric(r.panelTotals.assigned))+" h",1)]),m("li",null,[e[93]||(e[93]=m("span",null,"Horas Remanentes:",-1)),e[94]||(e[94]=it()),m("span",null,me(r.formatMetric(r.panelTotals.remaining))+" h",1)]),m("li",null,[e[95]||(e[95]=m("span",null,"Vencimiento Calendario:",-1)),e[96]||(e[96]=it()),m("span",null,me(r.nextDueDate),1)])]),m("div",aT,me(r.aircraftState),1),m("p",oT,"Vida util consumida: "+me(r.formatMetric(r.consumedPct))+"%",1),m("div",lT,[m("div",{style:qt({width:`${r.consumedPct}%`})},null,4)])],32),m("article",{class:"panel panel-clickable",role:"button",tabindex:"0",onClick:e[48]||(e[48]=a=>r.openDashboardDetail("total")),onKeydown:[e[49]||(e[49]=Ut(vt(a=>r.openDashboardDetail("total"),["prevent"]),["enter"])),e[50]||(e[50]=Ut(vt(a=>r.openDashboardDetail("total"),["prevent"]),["space"]))]},[e[98]||(e[98]=m("h2",null,"Consumo de Recursos (TSO / Arranques)",-1)),e[99]||(e[99]=m("p",{class:"panel-sub"},"Comparación: consumido vs remanente por componente",-1)),e[100]||(e[100]=m("div",{class:"chart-legend","aria-label":"Leyenda de consumo"},[m("span",null,[m("i",{class:"legend-swatch consumed"}),it("Consumido")]),m("span",null,[m("i",{class:"legend-swatch remaining"}),it("Remanente")])],-1)),m("div",cT,[(Be(!0),ke(ut,null,Wt(r.chartBars,a=>(Be(),ke("div",{key:a.key,class:"resource-row"},[m("div",uT,[m("div",dT,[m("span",{class:wt(["component-logo",a.categoryClass])},me(a.logo),3),m("span",null,me(a.label),1)]),m("strong",null,me(a.percentage)+"%",1)]),m("div",{class:"resource-track","aria-label":`${a.label}: ${a.consumed} consumido, ${a.remaining} remanente`},[m("span",{class:"resource-segment consumed",style:qt({width:`${a.consumedWidth}%`})},null,4),m("span",{class:"resource-segment remaining",style:qt({width:`${a.remainingWidth}%`})},null,4)],8,fT),m("div",hT,[m("span",null,me(r.formatMetric(a.consumed)),1),m("span",null,me(r.formatMetric(a.remaining)),1)])]))),128))])],32),m("article",{class:"panel panel-clickable",role:"button",tabindex:"0",onClick:e[51]||(e[51]=a=>r.openDashboardDetail("due")),onKeydown:[e[52]||(e[52]=Ut(vt(a=>r.openDashboardDetail("due"),["prevent"]),["enter"])),e[53]||(e[53]=Ut(vt(a=>r.openDashboardDetail("due"),["prevent"]),["space"]))]},[m("h2",pT,[m("img",{src:s.icons.due,alt:"","aria-hidden":"true"},null,8,mT),e[101]||(e[101]=it("Proximos Vencimientos",-1))]),e[102]||(e[102]=m("p",{class:"panel-sub"},"Control calendario",-1)),m("ul",gT,[(Be(!0),ke(ut,null,Wt(r.dueEvents,a=>(Be(),ke("li",{key:a.key},[m("span",null,me(a.component),1),m("span",{class:wt(["date",a.className])},me(a.due),3)]))),128))])],32)])):Ft("",!0),s.activeView==="componentes"?(Be(),ke("section",_T,[m("article",vT,[e[105]||(e[105]=m("h2",null,"Consumo de Recursos por Categoría",-1)),e[106]||(e[106]=m("p",{class:"panel-sub"},"Distribución del consumo registrado",-1)),m("div",xT,[m("div",{class:"donut-chart",style:qt(r.categoryDonutStyle)},[m("div",ST,[e[103]||(e[103]=m("span",null,"Total",-1)),m("strong",null,me(r.formatMetric(r.metrics.consumedTotal)),1),e[104]||(e[104]=m("small",null,"HRS / ARR",-1))])],4),m("div",MT,[(Be(!0),ke(ut,null,Wt(r.categoryChart,a=>(Be(),ke("div",{key:a.key,class:"chart-list-row"},[m("span",null,[m("i",{class:"legend-swatch",style:qt({background:a.color})},null,4),it(me(a.label),1)]),m("strong",null,[it(me(r.formatMetric(a.value))+" ",1),m("small",null,me(a.percentage)+"%",1)])]))),128))])])]),m("article",bT,[e[108]||(e[108]=m("h2",null,"Tendencia de Consumo (TSO)",-1)),e[109]||(e[109]=m("p",{class:"panel-sub"},"Comparación de consumo y remanente por componente",-1)),e[110]||(e[110]=m("div",{class:"chart-legend trend-legend"},[m("span",null,[m("i",{class:"legend-swatch consumed"}),it("Consumido")]),m("span",null,[m("i",{class:"legend-swatch remaining"}),it("Remanente")])],-1)),m("div",yT,[m("div",TT,me(r.formatMetric(r.trendChart.max)),1),e[107]||(e[107]=m("div",{class:"trend-axis-label bottom"},"0",-1)),(Be(),ke("svg",ET,[(Be(!0),ke(ut,null,Wt(r.trendChart.gridLines,a=>(Be(),ke("line",{key:a.y,x1:"38",y1:a.y,x2:"590",y2:a.y,class:"trend-grid-line"},null,8,AT))),128)),m("polyline",{points:r.trendChart.consumedPoints,class:"trend-line consumed-line"},null,8,wT),m("polyline",{points:r.trendChart.remainingPoints,class:"trend-line remaining-line"},null,8,CT),(Be(!0),ke(ut,null,Wt(r.trendChart.points,a=>(Be(),ke("g",{key:a.key},[m("circle",{cx:a.x,cy:a.consumedY,r:"4",class:"trend-point consumed-point"},null,8,RT),m("circle",{cx:a.x,cy:a.remainingY,r:"4",class:"trend-point remaining-point"},null,8,PT),m("text",{x:a.x,y:"176","text-anchor":"middle",class:"trend-label"},me(a.label),9,DT)]))),128))]))])]),m("article",LT,[e[112]||(e[112]=m("h2",null,"Estado de Componentes",-1)),e[113]||(e[113]=m("p",{class:"panel-sub"},"Situación operativa actual",-1)),m("div",IT,[m("div",{class:"donut-chart status-donut",style:qt(r.statusDonutStyle)},[m("div",UT,[m("strong",null,me(r.metrics.total),1),e[111]||(e[111]=m("span",null,"Total",-1))])],4),m("div",NT,[(Be(!0),ke(ut,null,Wt(r.statusChart,a=>(Be(),ke("div",{key:a.key,class:"chart-list-row"},[m("span",null,[m("i",{class:"legend-swatch",style:qt({background:a.color})},null,4),it(me(a.label),1)]),m("strong",null,[it(me(a.value)+" ",1),m("small",null,me(a.percentage)+"%",1)])]))),128))])])])])):Ft("",!0),s.activeView==="base-datos"?(Be(),ke("section",FT,[m("div",OT,[e[116]||(e[116]=m("h2",null,"Base de Datos de Componentes",-1)),m("div",BT,[m("div",kT,[m("button",{class:"table-btn",type:"button",disabled:!s.isOwner,onClick:e[54]||(e[54]=a=>s.componentAddMenuOpen=!s.componentAddMenuOpen)},[m("img",{class:"btn-icon",src:s.icons.add,alt:"","aria-hidden":"true"},null,8,VT),e[114]||(e[114]=it("Agregar componente",-1))],8,HT),s.componentAddMenuOpen&&s.isOwner?(Be(),ke("div",zT,[m("button",{type:"button",onClick:e[55]||(e[55]=a=>r.addRow("generic"))},"Nuevo componente"),m("button",{type:"button",onClick:e[56]||(e[56]=a=>r.addRow("apu-tg-16m"))},"APU TG-16M")])):Ft("",!0)]),m("button",{class:"table-btn",type:"button",disabled:!s.isOwner,onClick:e[57]||(e[57]=(...a)=>r.resetDb&&r.resetDb(...a))},[m("img",{class:"btn-icon",src:s.icons.restore,alt:"","aria-hidden":"true"},null,8,WT),e[115]||(e[115]=it("Restaurar datos",-1))],8,GT)])]),m("p",{class:wt(["readonly-note",{visible:!s.isOwner}]),style:{margin:"0 14px 10px"}}," Modo solo lectura: solo el propietario puede editar la base de datos. ",2),m("div",XT,[m("table",YT,[e[118]||(e[118]=m("thead",null,[m("tr",null,[m("th",{class:"sticky-order-col"},"Orden"),m("th",{class:"sticky-component-col"},"Componente"),m("th",null,"Serie"),m("th",null,"Fecha fabricacion"),m("th",null,"Taller"),m("th",null,"Ultimo Overhaul"),m("th",null,"Asignado TBO (hrs)"),m("th",null,"Asignado TBO (años)"),m("th",null,"Consumido TBO hrs"),m("th",null,"Consumido TBO años"),m("th",null,"Asignado TSN (hrs)"),m("th",null,"Asignado TSN (años)"),m("th",null,"Consumido TSN hrs"),m("th",null,"Consumido TSN años"),m("th",null,"Remanente TBO (hrs)"),m("th",null,"Remanente TBO (años)"),m("th",null,"Remanente TSN (hrs)"),m("th",null,"Remanente TSN (años)"),m("th",null,"Arranques TSN"),m("th",null,"Gaso-horas TSN"),m("th",null,"Arranques TBO"),m("th",null,"Gaso-horas TBO"),m("th",null,"Notas"),m("th",null,"Vencimiento"),m("th",null,"Estado"),m("th",null,"Accion")])],-1)),m("tbody",null,[(Be(!0),ke(ut,null,Wt(r.currentRows,(a,o)=>(Be(),ke("tr",{key:`${r.currentAircraft.id}-${o}`,class:wt({"dragging-row":s.draggingRowIndex===o}),onDragover:e[59]||(e[59]=vt(()=>{},["prevent"])),onDrop:vt(l=>r.dropRow(o),["prevent"])},[m("td",KT,[m("button",{class:"row-drag-handle",type:"button",draggable:"true","aria-label":"Arrastrar componente",disabled:!s.isOwner,onDragstart:l=>r.startRowDrag(l,o),onDragend:e[58]||(e[58]=(...l)=>r.finishRowDrag&&r.finishRowDrag(...l))}," ⋮⋮ ",40,ZT)]),m("td",JT,[m("div",$T,[m("span",{class:wt(["component-logo",r.categoryClass(a)])},me(r.componentLogo(a)),3),rt(m("input",{"onUpdate:modelValue":l=>a.component=l,class:"cell-input",disabled:!s.isOwner,onChange:l=>r.saveRowFieldChange(a,"Componente")},null,40,QT),[[at,a.component]])])]),m("td",null,[rt(m("input",{"onUpdate:modelValue":l=>a.series=l,class:"cell-input",disabled:!s.isOwner,onChange:l=>r.saveRowFieldChange(a,"Serie")},null,40,jT),[[at,a.series]])]),m("td",null,[rt(m("input",{"onUpdate:modelValue":l=>a.manufactureDate=l,class:"cell-input",disabled:!s.isOwner,placeholder:"dd/mm/aaaa",onChange:l=>r.saveRowFieldChange(a,"Fecha fabricacion")},null,40,eE),[[at,a.manufactureDate]])]),m("td",null,[rt(m("input",{"onUpdate:modelValue":l=>a.workshop=l,class:"cell-input",disabled:!s.isOwner,onChange:l=>r.saveRowFieldChange(a,"Taller")},null,40,tE),[[at,a.workshop]])]),m("td",null,[m("div",{class:wt(["overhaul-combo",{open:s.openOverhaulMenuIndex===o}])},[rt(m("input",{"onUpdate:modelValue":l=>a.overhaul=l,class:"cell-input overhaul-input",disabled:!s.isOwner,placeholder:"dd/mm/aaaa",onInput:l=>r.updateAllDerived(a),onChange:l=>r.saveRowFieldChange(a,"Ultimo overhaul","all")},null,40,nE),[[at,a.overhaul]]),m("button",{class:"overhaul-menu-btn",type:"button",disabled:!s.isOwner,title:"Opciones de overhaul",onClick:l=>r.toggleOverhaulMenu(o)}," ▼ ",8,iE),s.openOverhaulMenuIndex===o?(Be(),ke("div",sE,[m("button",{type:"button",onClick:l=>r.applyNoOverhaul(a)},"NO OVERHAUL",8,rE)])):Ft("",!0)],2)]),m("td",null,[rt(m("input",{"onUpdate:modelValue":l=>a.assignedTboHours=l,class:"cell-input numeric-input",disabled:!s.isOwner,onInput:l=>r.updateTboDerived(a),onChange:l=>r.saveRowFieldChange(a,"Asignado TBO horas","tbo")},null,40,aE),[[at,a.assignedTboHours]])]),m("td",null,[rt(m("input",{"onUpdate:modelValue":l=>a.assignedTboYears=l,class:"cell-input numeric-input",disabled:!s.isOwner,onInput:l=>r.updateTboDerived(a),onChange:l=>r.saveRowFieldChange(a,"Asignado TBO años","tbo")},null,40,oE),[[at,a.assignedTboYears]])]),m("td",null,[rt(m("input",{"onUpdate:modelValue":l=>a.consumedTboHours=l,class:"cell-input numeric-input",disabled:!s.isOwner,onInput:l=>r.updateTboDerived(a),onChange:l=>r.saveRowFieldChange(a,"Consumido TBO horas","tbo")},null,40,lE),[[at,a.consumedTboHours]])]),m("td",null,[rt(m("input",{"onUpdate:modelValue":l=>a.consumedTboYears=l,class:"cell-input numeric-input calculated-input",disabled:"",readonly:""},null,8,cE),[[at,a.consumedTboYears]])]),m("td",null,[rt(m("input",{"onUpdate:modelValue":l=>a.assignedTsnHours=l,class:"cell-input numeric-input",disabled:!s.isOwner,onInput:l=>r.updateTsnDerived(a),onChange:l=>r.saveRowFieldChange(a,"Asignado TSN horas","tsn")},null,40,uE),[[at,a.assignedTsnHours]])]),m("td",null,[rt(m("input",{"onUpdate:modelValue":l=>a.assignedTsnYears=l,class:"cell-input numeric-input",list:"tsn-years-options",disabled:!s.isOwner,onInput:l=>r.updateTsnDerived(a),onChange:l=>r.saveRowFieldChange(a,"Asignado TSN años","tsn")},null,40,dE),[[at,a.assignedTsnYears]])]),m("td",null,[rt(m("input",{"onUpdate:modelValue":l=>a.consumedTsnHours=l,class:"cell-input numeric-input",disabled:!s.isOwner,onInput:l=>r.updateTsnDerived(a),onChange:l=>r.saveRowFieldChange(a,"Consumido TSN horas","tsn")},null,40,fE),[[at,a.consumedTsnHours]])]),m("td",null,[rt(m("input",{"onUpdate:modelValue":l=>a.consumedTsnYears=l,class:"cell-input numeric-input calculated-input",disabled:"",readonly:""},null,8,hE),[[at,a.consumedTsnYears]])]),m("td",null,[rt(m("input",{"onUpdate:modelValue":l=>a.remainingTboHours=l,class:"cell-input numeric-input calculated-input",disabled:"",readonly:""},null,8,pE),[[at,a.remainingTboHours]])]),m("td",null,[rt(m("input",{"onUpdate:modelValue":l=>a.remainingTboYears=l,class:"cell-input numeric-input calculated-input",disabled:"",readonly:""},null,8,mE),[[at,a.remainingTboYears]])]),m("td",null,[rt(m("input",{"onUpdate:modelValue":l=>a.remainingTsnHours=l,class:"cell-input numeric-input calculated-input",disabled:"",readonly:""},null,8,gE),[[at,a.remainingTsnHours]])]),m("td",null,[rt(m("input",{"onUpdate:modelValue":l=>a.remainingTsnYears=l,class:"cell-input numeric-input calculated-input",disabled:"",readonly:""},null,8,_E),[[at,a.remainingTsnYears]])]),r.isApuRow(a)?(Be(),ke(ut,{key:0},[m("td",null,[rt(m("input",{"onUpdate:modelValue":l=>a.apuStartsTsn=l,class:"cell-input numeric-input",disabled:!s.isOwner,placeholder:"Arr. APU TSN",onChange:l=>r.saveRowFieldChange(a,"Arranques TSN APU")},null,40,vE),[[at,a.apuStartsTsn]])]),m("td",null,[rt(m("input",{"onUpdate:modelValue":l=>a.apuGasHoursTsn=l,class:"cell-input numeric-input",disabled:!s.isOwner,placeholder:"Gaso-horas APU TSN",onChange:l=>r.saveRowFieldChange(a,"Gaso-horas TSN APU")},null,40,xE),[[at,a.apuGasHoursTsn]])]),m("td",null,[rt(m("input",{"onUpdate:modelValue":l=>a.apuStartsTbo=l,class:"cell-input numeric-input",disabled:!s.isOwner,placeholder:"Arr. APU TBO",onChange:l=>r.saveRowFieldChange(a,"Arranques TBO APU")},null,40,SE),[[at,a.apuStartsTbo]])]),m("td",null,[rt(m("input",{"onUpdate:modelValue":l=>a.apuGasHoursTbo=l,class:"cell-input numeric-input",disabled:!s.isOwner,placeholder:"Gaso-horas APU TBO",onChange:l=>r.saveRowFieldChange(a,"Gaso-horas TBO APU")},null,40,ME),[[at,a.apuGasHoursTbo]])])],64)):(Be(),ke(ut,{key:1},[m("td",null,[rt(m("input",{"onUpdate:modelValue":l=>a.motorStartsTsn=l,class:"cell-input numeric-input",disabled:!s.isOwner,placeholder:"Arr. motor TSN",onChange:l=>r.saveRowFieldChange(a,"Arranques TSN de motores")},null,40,bE),[[at,a.motorStartsTsn]])]),m("td",null,[rt(m("input",{"onUpdate:modelValue":l=>a.gasHoursTsn=l,class:"cell-input numeric-input",disabled:!s.isOwner,onChange:l=>r.saveRowFieldChange(a,"Gaso-horas TSN")},null,40,yE),[[at,a.gasHoursTsn]])]),m("td",null,[rt(m("input",{"onUpdate:modelValue":l=>a.motorStartsTbo=l,class:"cell-input numeric-input",disabled:!s.isOwner,placeholder:"Arr. motor TBO",onChange:l=>r.saveRowFieldChange(a,"Arranque TBO de motores")},null,40,TE),[[at,a.motorStartsTbo]])]),m("td",null,[rt(m("input",{"onUpdate:modelValue":l=>a.gasHoursTbo=l,class:"cell-input numeric-input",disabled:!s.isOwner,onChange:l=>r.saveRowFieldChange(a,"Gaso-horas TBO")},null,40,EE),[[at,a.gasHoursTbo]])])],64)),m("td",null,[rt(m("textarea",{"onUpdate:modelValue":l=>a.notes=l,class:"cell-input notes-input",disabled:!s.isOwner,maxlength:"360",placeholder:"Notas del componente",onChange:l=>r.saveRowFieldChange(a,"Notas")},null,40,AE),[[at,a.notes]])]),m("td",null,[rt(m("input",{"onUpdate:modelValue":l=>a.due=l,class:"cell-input calculated-input",disabled:"",readonly:""},null,8,wE),[[at,a.due]])]),m("td",null,[m("span",{class:wt(["status",r.statusClass(a)])},me(r.getStatus(a)),3)]),m("td",null,[m("button",{class:"table-btn danger-btn",type:"button",disabled:!s.isOwner,onClick:l=>r.deleteRow(o)},[m("img",{class:"btn-icon",src:s.icons.delete,alt:"","aria-hidden":"true"},null,8,RE),e[117]||(e[117]=it("Eliminar",-1))],8,CE)])],42,qT))),128))])])])],512)):Ft("",!0),s.activeView==="alertas"?(Be(),ke("section",PE,[m("div",DE,[m("article",LE,[e[119]||(e[119]=m("p",null,"Overhaul Requerido",-1)),m("b",IE,me(r.fleetAlertMetrics.critical),1)]),m("article",UE,[e[120]||(e[120]=m("p",null,"Alertas Preventivas",-1)),m("b",NE,me(r.fleetAlertMetrics.alert),1)]),m("article",FE,[e[121]||(e[121]=m("p",null,"Proximos 90 dias",-1)),m("b",OE,me(r.fleetAlertMetrics.dueIn90),1)]),m("article",BE,[e[122]||(e[122]=m("p",null,"Proximos 180 dias",-1)),m("b",kE,me(r.fleetAlertMetrics.dueIn180),1)]),m("article",HE,[e[123]||(e[123]=m("p",null,"Riesgo Global",-1)),m("b",{style:qt({color:r.fleetRiskLabel.color})},me(r.fleetAlertMetrics.risk)+"%",5)])]),m("article",VE,[e[124]||(e[124]=m("h2",null,"Componentes en Alerta",-1)),e[125]||(e[125]=m("p",{class:"panel-sub"},"Alertas consolidadas de todas las aeronaves",-1)),m("ul",zE,[(Be(!0),ke(ut,null,Wt(r.allAlertRows,a=>(Be(),ke("li",{key:a.key},[m("span",null,[m("strong",GE,me(a.aircraftCode),1),it(me(a.component),1)]),m("span",{class:wt(["date",a.className])},me(a.status),3)]))),128))])])])):Ft("",!0),s.activeView==="calendario"?(Be(),ke("section",WE,[m("h2",XE,[m("img",{src:s.icons.due,alt:"","aria-hidden":"true"},null,8,YE),e[126]||(e[126]=it("Calendario de Vencimientos",-1))]),e[127]||(e[127]=m("p",{class:"panel-sub"},"Proximos controles por fecha",-1)),m("ul",qE,[(Be(!0),ke(ut,null,Wt(r.dueEvents,a=>(Be(),ke("li",{key:a.key},[m("span",null,me(a.component),1),m("span",{class:wt(["date",a.className])},me(a.due),3)]))),128))])])):Ft("",!0),s.activeView==="historial"?(Be(),ke("section",KE,[e[129]||(e[129]=m("div",{class:"table-title"},[m("div",null,[m("h2",null,"Historial"),m("p",{class:"panel-sub"},"Ultimos 20 cambios del sistema y registro de overhaul")])],-1)),m("div",ZE,[(Be(!0),ke(ut,null,Wt(r.recentChanges,a=>(Be(),ke("article",{key:a.id,class:"change-item"},[m("div",null,[m("strong",null,[it(me(a.action)+" ",1),a.aircraftCode?(Be(),ke("span",JE,me(a.aircraftCode),1)):Ft("",!0)]),m("p",null,me(a.detail),1)]),m("span",null,me(r.formatChangeDate(a.timestamp)),1)]))),128)),r.recentChanges.length===0?(Be(),ke("p",$E,"Aun no hay cambios registrados.")):Ft("",!0)]),e[130]||(e[130]=m("div",{class:"history-section-title"},"Historial de Overhaul",-1)),m("div",QE,[m("table",jE,[e[128]||(e[128]=m("thead",null,[m("tr",null,[m("th",null,"Componente"),m("th",null,"Serie"),m("th",null,"Fecha fabricacion"),m("th",null,"Taller"),m("th",null,"Ultimo Overhaul"),m("th",null,"Vencimiento"),m("th",null,"Estado")])],-1)),m("tbody",null,[(Be(!0),ke(ut,null,Wt(r.historyRows,a=>(Be(),ke("tr",{key:a.key},[m("td",null,me(a.component),1),m("td",null,me(a.series),1),m("td",null,me(a.manufactureDate),1),m("td",null,me(a.workshop),1),m("td",null,me(a.overhaul),1),m("td",null,me(a.due),1),m("td",null,[m("span",{class:wt(["status",a.statusClass])},me(a.status),3)])]))),128))])])])])):Ft("",!0),s.activeView==="papelera"?(Be(),ke("section",eA,[e[134]||(e[134]=m("div",{class:"table-title"},[m("div",null,[m("h2",null,"Papelera"),m("p",{class:"panel-sub"},"Elementos eliminados, disponibles por 30 dias")])],-1)),m("div",tA,[m("table",nA,[e[133]||(e[133]=m("thead",null,[m("tr",null,[m("th",null,"Tipo"),m("th",null,"Aeronave"),m("th",null,"Elemento"),m("th",null,"Eliminado"),m("th",null,"Expira"),m("th",null,"Accion")])],-1)),m("tbody",null,[(Be(!0),ke(ut,null,Wt(r.trashRows,a=>(Be(),ke("tr",{key:a.id},[m("td",null,me(a.typeLabel),1),m("td",null,me(a.aircraftCode),1),m("td",null,me(a.name),1),m("td",null,me(r.formatChangeDate(a.deletedAt)),1),m("td",null,me(r.formatChangeDate(a.expiresAt)),1),m("td",null,[m("button",{class:"table-btn",type:"button",disabled:!s.isOwner,onClick:o=>r.restoreTrashItem(a.id)},[m("img",{class:"btn-icon",src:s.icons.restore,alt:"","aria-hidden":"true"},null,8,sA),e[131]||(e[131]=it("Restaurar",-1))],8,iA)])]))),128)),r.trashRows.length===0?(Be(),ke("tr",rA,[...e[132]||(e[132]=[m("td",{colspan:"6",class:"empty-cell"},"La papelera esta vacia.",-1)])])):Ft("",!0)])])])])):Ft("",!0)],64)):Ft("",!0),e[142]||(e[142]=m("datalist",{id:"tsn-years-options"},[m("option",{value:"ON CONDITION"})],-1)),s.dashboardDetailOpen?(Be(),ke("div",{key:1,class:"dashboard-detail-overlay",onClick:e[61]||(e[61]=vt((...a)=>r.closeDashboardDetail&&r.closeDashboardDetail(...a),["self"]))},[m("section",aA,[m("div",oA,[m("div",null,[m("p",lA,me(r.currentAircraft?r.currentAircraft.code:"--"),1),m("h2",cA,me(r.dashboardDetailTitle),1)]),m("button",{class:"detail-close-btn",type:"button","aria-label":"Cerrar detalle",onClick:e[60]||(e[60]=(...a)=>r.closeDashboardDetail&&r.closeDashboardDetail(...a))},"×")]),m("div",uA,[m("span",null,[e[135]||(e[135]=it("Componentes: ",-1)),m("strong",null,me(r.dashboardDetailRows.length),1)]),m("span",null,[e[136]||(e[136]=it("Críticos: ",-1)),m("strong",null,me(r.metrics.critical),1)]),m("span",null,[e[137]||(e[137]=it("Alertas: ",-1)),m("strong",null,me(r.metrics.alert),1)]),m("span",null,[e[138]||(e[138]=it("Operativos: ",-1)),m("strong",null,me(r.metrics.ok),1)])]),m("div",dA,[e[139]||(e[139]=m("h3",null,"Componentes",-1)),r.dashboardDetailRows.length>0?(Be(),ke("div",fA,[(Be(!0),ke(ut,null,Wt(r.dashboardDetailRows,a=>(Be(),ke("span",{key:`name-${a.key}`,class:wt(["dashboard-component-tag",a.statusClass])},me(a.component),3))),128))])):(Be(),ke("p",hA,"No hay componentes en esta caja."))]),m("div",pA,[m("table",mA,[e[141]||(e[141]=m("thead",null,[m("tr",null,[m("th",null,"Componente"),m("th",null,"Serie"),m("th",null,"Taller"),m("th",null,"Overhaul"),m("th",null,"Vencimiento"),m("th",null,"Asignado"),m("th",null,"Consumido"),m("th",null,"Remanente"),m("th",null,"Estado")])],-1)),m("tbody",null,[(Be(!0),ke(ut,null,Wt(r.dashboardDetailRows,a=>(Be(),ke("tr",{key:a.key},[m("td",null,me(a.component),1),m("td",null,me(a.series),1),m("td",null,me(a.workshop),1),m("td",null,me(a.overhaul),1),m("td",null,me(a.due),1),m("td",null,me(a.assigned),1),m("td",null,me(a.consumed),1),m("td",null,me(a.remaining),1),m("td",null,[m("span",{class:wt(["status",a.statusClass])},me(a.status),3)])]))),128)),r.dashboardDetailRows.length===0?(Be(),ke("tr",gA,[...e[140]||(e[140]=[m("td",{colspan:"9",class:"empty-cell"},"No hay datos para mostrar.",-1)])])):Ft("",!0)])])])])])):Ft("",!0),m("footer",null,me(new Date().getFullYear())+" Sistema de Gestion de Recursos Aeronauticos · "+me(r.currentAircraft?r.currentAircraft.code:"PNP-501")+" · Todos los derechos reservados ",1)])])):(Be(),ke("section",bb,[m("canvas",yb,null,512),m("form",{class:"login-card",onSubmit:e[14]||(e[14]=vt((...a)=>r.signInWithEmail&&r.signInWithEmail(...a),["prevent"]))},[e[63]||(e[63]=m("div",{class:"login-brand"},[m("p",null,"DIVMAAER"),m("h1",null,"Control de Calidad")],-1)),e[64]||(e[64]=m("label",{for:"login-email"},"Correo",-1)),rt(m("input",{id:"login-email","onUpdate:modelValue":e[0]||(e[0]=a=>s.loginEmail=a),class:"login-input",type:"email",autocomplete:"username",placeholder:"correo@ejemplo.com",disabled:s.authBusy},null,8,Tb),[[at,s.loginEmail,void 0,{trim:!0}]]),e[65]||(e[65]=m("label",{for:"login-password"},"Contrasena",-1)),m("div",Eb,[rt(m("input",{id:"login-password","onUpdate:modelValue":e[1]||(e[1]=a=>s.loginPassword=a),class:"login-input",type:s.passwordVisible?"text":"password",autocomplete:"current-password",placeholder:"Contrasena",disabled:s.authBusy},null,8,Ab),[[_g,s.loginPassword]]),m("button",{class:"password-eye-btn",type:"button","aria-label":"Ver contrasena mientras se presiona",title:"Ver contrasena",disabled:s.authBusy,onMousedown:e[2]||(e[2]=vt((...a)=>r.showPassword&&r.showPassword(...a),["prevent"])),onMouseup:e[3]||(e[3]=(...a)=>r.hidePassword&&r.hidePassword(...a)),onMouseleave:e[4]||(e[4]=(...a)=>r.hidePassword&&r.hidePassword(...a)),onTouchstart:e[5]||(e[5]=vt((...a)=>r.showPassword&&r.showPassword(...a),["prevent"])),onTouchend:e[6]||(e[6]=(...a)=>r.hidePassword&&r.hidePassword(...a)),onTouchcancel:e[7]||(e[7]=(...a)=>r.hidePassword&&r.hidePassword(...a)),onKeydown:[e[8]||(e[8]=Ut(vt((...a)=>r.showPassword&&r.showPassword(...a),["prevent"]),["space"])),e[10]||(e[10]=Ut(vt((...a)=>r.showPassword&&r.showPassword(...a),["prevent"]),["enter"]))],onKeyup:[e[9]||(e[9]=Ut((...a)=>r.hidePassword&&r.hidePassword(...a),["space"])),e[11]||(e[11]=Ut((...a)=>r.hidePassword&&r.hidePassword(...a),["enter"]))]},[m("img",{class:"btn-icon",src:s.icons.eye,alt:"","aria-hidden":"true"},null,8,Cb)],40,wb)]),m("div",Rb,[m("button",{class:"login-btn primary",type:"submit",disabled:s.authBusy||!s.authReady},[m("img",{class:"btn-icon",src:s.icons.login,alt:"","aria-hidden":"true"},null,8,Db),it(" "+me(s.authBusy?"Procesando...":"Ingresar"),1)],8,Pb),m("button",{class:"login-btn",type:"button",disabled:s.authBusy||!s.authReady,onClick:e[12]||(e[12]=(...a)=>r.createEmailUser&&r.createEmailUser(...a))},[m("img",{class:"btn-icon",src:s.icons.user,alt:"","aria-hidden":"true"},null,8,Ib),e[62]||(e[62]=it(" Crear cuenta ",-1))],8,Lb)]),m("button",{class:"login-link-btn",type:"button",disabled:s.authBusy||!s.authReady,onClick:e[13]||(e[13]=(...a)=>r.sendPasswordReset&&r.sendPasswordReset(...a))}," Restablecer contrasena ",8,Ub),m("p",{class:wt(["login-hint",{error:s.authHintError}])},me(s.authHint),3)],32)]))],2)}const vA=db(Mb,[["render",_A]]);Tg(vA).mount("#app");
