(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function sc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Mt={},Ts=[],Gn=()=>{},Vd=()=>!1,ka=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Va=n=>n.startsWith("onUpdate:"),Yt=Object.assign,rc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Zh=Object.prototype.hasOwnProperty,ft=(n,e)=>Zh.call(n,e),$e=Array.isArray,As=n=>Er(n)==="[object Map]",Fs=n=>Er(n)==="[object Set]",Jc=n=>Er(n)==="[object Date]",je=n=>typeof n=="function",Rt=n=>typeof n=="string",Xn=n=>typeof n=="symbol",xt=n=>n!==null&&typeof n=="object",zd=n=>(xt(n)||je(n))&&je(n.then)&&je(n.catch),Gd=Object.prototype.toString,Er=n=>Gd.call(n),$h=n=>Er(n).slice(8,-1),Wd=n=>Er(n)==="[object Object]",ac=n=>Rt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,rr=sc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),za=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Jh=/-\w/g,An=za(n=>n.replace(Jh,e=>e.slice(1).toUpperCase())),Qh=/\B([A-Z])/g,Oi=za(n=>n.replace(Qh,"-$1").toLowerCase()),Xd=za(n=>n.charAt(0).toUpperCase()+n.slice(1)),so=za(n=>n?`on${Xd(n)}`:""),ri=(n,e)=>!Object.is(n,e),fa=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Yd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Ga=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Qc;const Wa=()=>Qc||(Qc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gt(n){if($e(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Rt(i)?np(i):Gt(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Rt(n)||xt(n))return n}const jh=/;(?![^(]*\))/g,ep=/:([^]+)/,tp=/\/\*[^]*?\*\//g;function np(n){const e={};return n.replace(tp,"").split(jh).forEach(t=>{if(t){const i=t.split(ep);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Dt(n){let e="";if(Rt(n))e=n;else if($e(n))for(let t=0;t<n.length;t++){const i=Dt(n[t]);i&&(e+=i+" ")}else if(xt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ip="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sp=sc(ip);function qd(n){return!!n||n===""}function rp(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Ui(n[i],e[i]);return t}function Ui(n,e){if(n===e)return!0;let t=Jc(n),i=Jc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Xn(n),i=Xn(e),t||i)return n===e;if(t=$e(n),i=$e(e),t||i)return t&&i?rp(n,e):!1;if(t=xt(n),i=xt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!Ui(n[a],e[a]))return!1}}return String(n)===String(e)}function oc(n,e){return n.findIndex(t=>Ui(t,e))}const Kd=n=>!!(n&&n.__v_isRef===!0),xe=n=>Rt(n)?n:n==null?"":$e(n)||xt(n)&&(n.toString===Gd||!je(n.toString))?Kd(n)?xe(n.value):JSON.stringify(n,Zd,2):String(n),Zd=(n,e)=>Kd(e)?Zd(n,e.value):As(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[ro(i,r)+" =>"]=s,t),{})}:Fs(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ro(t))}:Xn(e)?ro(e):xt(e)&&!$e(e)&&!Wd(e)?String(e):e,ro=(n,e="")=>{var t;return Xn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ot;class ap{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Ot&&(Ot.active?(this.parent=Ot,this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Ot;try{return Ot=this,e()}finally{Ot=t}}}on(){++this._on===1&&(this.prevScope=Ot,Ot=this)}off(){if(this._on>0&&--this._on===0){if(Ot===this)Ot=this.prevScope;else{let e=Ot;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function op(){return Ot}let Et;const ao=new WeakSet;class $d{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ot&&(Ot.active?Ot.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ao.has(this)&&(ao.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Qd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,jc(this),jd(this);const e=Et,t=wn;Et=this,wn=!0;try{return this.fn()}finally{ef(this),Et=e,wn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)uc(e);this.deps=this.depsTail=void 0,jc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ao.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){nl(this)&&this.run()}get dirty(){return nl(this)}}let Jd=0,ar,or;function Qd(n,e=!1){if(n.flags|=8,e){n.next=or,or=n;return}n.next=ar,ar=n}function lc(){Jd++}function cc(){if(--Jd>0)return;if(or){let e=or;for(or=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ar;){let e=ar;for(ar=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function jd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ef(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),uc(i),lp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function nl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(tf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function tf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===pr)||(n.globalVersion=pr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!nl(n))))return;n.flags|=2;const e=n.dep,t=Et,i=wn;Et=n,wn=!0;try{jd(n);const s=n.fn(n._value);(e.version===0||ri(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Et=t,wn=i,ef(n),n.flags&=-3}}function uc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)uc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function lp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let wn=!0;const nf=[];function mi(){nf.push(wn),wn=!1}function gi(){const n=nf.pop();wn=n===void 0?!0:n}function jc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Et;Et=void 0;try{e()}finally{Et=t}}}let pr=0;class cp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class sf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Et||!wn||Et===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Et)t=this.activeLink=new cp(Et,this),Et.deps?(t.prevDep=Et.depsTail,Et.depsTail.nextDep=t,Et.depsTail=t):Et.deps=Et.depsTail=t,rf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Et.depsTail,t.nextDep=void 0,Et.depsTail.nextDep=t,Et.depsTail=t,Et.deps===t&&(Et.deps=i)}return t}trigger(e){this.version++,pr++,this.notify(e)}notify(e){lc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{cc()}}}function rf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)rf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const il=new WeakMap,$i=Symbol(""),sl=Symbol(""),mr=Symbol("");function Wt(n,e,t){if(wn&&Et){let i=il.get(n);i||il.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new sf),s.map=i,s.key=t),s.track()}}function ai(n,e,t,i,s,r){const a=il.get(n);if(!a){pr++;return}const o=l=>{l&&l.trigger()};if(lc(),e==="clear")a.forEach(o);else{const l=$e(n),c=l&&ac(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===mr||!Xn(d)&&d>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(mr)),e){case"add":l?c&&o(a.get("length")):(o(a.get($i)),As(n)&&o(a.get(sl)));break;case"delete":l||(o(a.get($i)),As(n)&&o(a.get(sl)));break;case"set":As(n)&&o(a.get($i));break}}cc()}function as(n){const e=vt(n);return e===n?e:(Wt(e,"iterate",mr),Rn(n)?e:e.map(_i))}function Xa(n){return Wt(n=vt(n),"iterate",mr),n}function On(n,e){return Ni(n)?Ds(Ji(n)?_i(e):e):_i(e)}const up={__proto__:null,[Symbol.iterator](){return oo(this,Symbol.iterator,n=>On(this,n))},concat(...n){return as(this).concat(...n.map(e=>$e(e)?as(e):e))},entries(){return oo(this,"entries",n=>(n[1]=On(this,n[1]),n))},every(n,e){return Zn(this,"every",n,e,void 0,arguments)},filter(n,e){return Zn(this,"filter",n,e,t=>t.map(i=>On(this,i)),arguments)},find(n,e){return Zn(this,"find",n,e,t=>On(this,t),arguments)},findIndex(n,e){return Zn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Zn(this,"findLast",n,e,t=>On(this,t),arguments)},findLastIndex(n,e){return Zn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Zn(this,"forEach",n,e,void 0,arguments)},includes(...n){return lo(this,"includes",n)},indexOf(...n){return lo(this,"indexOf",n)},join(n){return as(this).join(n)},lastIndexOf(...n){return lo(this,"lastIndexOf",n)},map(n,e){return Zn(this,"map",n,e,void 0,arguments)},pop(){return ks(this,"pop")},push(...n){return ks(this,"push",n)},reduce(n,...e){return eu(this,"reduce",n,e)},reduceRight(n,...e){return eu(this,"reduceRight",n,e)},shift(){return ks(this,"shift")},some(n,e){return Zn(this,"some",n,e,void 0,arguments)},splice(...n){return ks(this,"splice",n)},toReversed(){return as(this).toReversed()},toSorted(n){return as(this).toSorted(n)},toSpliced(...n){return as(this).toSpliced(...n)},unshift(...n){return ks(this,"unshift",n)},values(){return oo(this,"values",n=>On(this,n))}};function oo(n,e,t){const i=Xa(n),s=i[e]();return i!==n&&!Rn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const dp=Array.prototype;function Zn(n,e,t,i,s,r){const a=Xa(n),o=a!==n&&!Rn(n),l=a[e];if(l!==dp[e]){const f=l.apply(n,r);return o?_i(f):f}let c=t;a!==n&&(o?c=function(f,d){return t.call(this,On(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function eu(n,e,t,i){const s=Xa(n),r=s!==n&&!Rn(n);let a=t,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=On(n,c)),t.call(this,c,On(n,u),f,n)}):t.length>3&&(a=function(c,u,f){return t.call(this,c,u,f,n)}));const l=s[e](a,...i);return o?On(n,l):l}function lo(n,e,t){const i=vt(n);Wt(i,"iterate",mr);const s=i[e](...t);return(s===-1||s===!1)&&pc(t[0])?(t[0]=vt(t[0]),i[e](...t)):s}function ks(n,e,t=[]){mi(),lc();const i=vt(n)[e].apply(n,t);return cc(),gi(),i}const fp=sc("__proto__,__v_isRef,__isVue"),af=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Xn));function hp(n){Xn(n)||(n=String(n));const e=vt(this);return Wt(e,"has",n),e.hasOwnProperty(n)}class of{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?yp:df:r?uf:cf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=$e(e);if(!s){let l;if(a&&(l=up[t]))return l;if(t==="hasOwnProperty")return hp}const o=Reflect.get(e,t,jt(e)?e:i);if((Xn(t)?af.has(t):fp(t))||(s||Wt(e,"get",t),r))return o;if(jt(o)){const l=a&&ac(t)?o:o.value;return s&&xt(l)?al(l):l}return xt(o)?s?al(o):fc(o):o}}class lf extends of{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const a=$e(e)&&ac(t);if(!this._isShallow){const c=Ni(r);if(!Rn(i)&&!Ni(i)&&(r=vt(r),i=vt(i)),!a&&jt(r)&&!jt(i))return c||(r.value=i),!0}const o=a?Number(t)<e.length:ft(e,t),l=Reflect.set(e,t,i,jt(e)?e:s);return e===vt(s)&&l&&(o?ri(i,r)&&ai(e,"set",t,i):ai(e,"add",t,i)),l}deleteProperty(e,t){const i=ft(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ai(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Xn(t)||!af.has(t))&&Wt(e,"has",t),i}ownKeys(e){return Wt(e,"iterate",$e(e)?"length":$i),Reflect.ownKeys(e)}}class pp extends of{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const mp=new lf,gp=new pp,_p=new lf(!0);const rl=n=>n,Ir=n=>Reflect.getPrototypeOf(n);function vp(n,e,t){return function(...i){const s=this.__v_raw,r=vt(s),a=As(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?rl:e?Ds:_i;return!e&&Wt(r,"iterate",l?sl:$i),Yt(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function Ur(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function xp(n,e){const t={get(s){const r=this.__v_raw,a=vt(r),o=vt(s);n||(ri(s,o)&&Wt(a,"get",s),Wt(a,"get",o));const{has:l}=Ir(a),c=e?rl:n?Ds:_i;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Wt(vt(s),"iterate",$i),s.size},has(s){const r=this.__v_raw,a=vt(r),o=vt(s);return n||(ri(s,o)&&Wt(a,"has",s),Wt(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=vt(o),c=e?rl:n?Ds:_i;return!n&&Wt(l,"iterate",$i),o.forEach((u,f)=>s.call(r,c(u),c(f),a))}};return Yt(t,n?{add:Ur("add"),set:Ur("set"),delete:Ur("delete"),clear:Ur("clear")}:{add(s){const r=vt(this),a=Ir(r),o=vt(s),l=!e&&!Rn(s)&&!Ni(s)?o:s;return a.has.call(r,l)||ri(s,l)&&a.has.call(r,s)||ri(o,l)&&a.has.call(r,o)||(r.add(l),ai(r,"add",l,l)),this},set(s,r){!e&&!Rn(r)&&!Ni(r)&&(r=vt(r));const a=vt(this),{has:o,get:l}=Ir(a);let c=o.call(a,s);c||(s=vt(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?ri(r,u)&&ai(a,"set",s,r):ai(a,"add",s,r),this},delete(s){const r=vt(this),{has:a,get:o}=Ir(r);let l=a.call(r,s);l||(s=vt(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&ai(r,"delete",s,void 0),c},clear(){const s=vt(this),r=s.size!==0,a=s.clear();return r&&ai(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=vp(s,n,e)}),t}function dc(n,e){const t=xp(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ft(t,s)&&s in i?t:i,s,r)}const Sp={get:dc(!1,!1)},Mp={get:dc(!1,!0)},bp={get:dc(!0,!1)};const cf=new WeakMap,uf=new WeakMap,df=new WeakMap,yp=new WeakMap;function Ep(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fc(n){return Ni(n)?n:hc(n,!1,mp,Sp,cf)}function Tp(n){return hc(n,!1,_p,Mp,uf)}function al(n){return hc(n,!0,gp,bp,df)}function hc(n,e,t,i,s){if(!xt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const a=Ep($h(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function Ji(n){return Ni(n)?Ji(n.__v_raw):!!(n&&n.__v_isReactive)}function Ni(n){return!!(n&&n.__v_isReadonly)}function Rn(n){return!!(n&&n.__v_isShallow)}function pc(n){return n?!!n.__v_raw:!1}function vt(n){const e=n&&n.__v_raw;return e?vt(e):n}function Ap(n){return!ft(n,"__v_skip")&&Object.isExtensible(n)&&Yd(n,"__v_skip",!0),n}const _i=n=>xt(n)?fc(n):n,Ds=n=>xt(n)?al(n):n;function jt(n){return n?n.__v_isRef===!0:!1}function wp(n){return jt(n)?n.value:n}const Rp={get:(n,e,t)=>e==="__v_raw"?n:wp(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return jt(s)&&!jt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function ff(n){return Ji(n)?n:new Proxy(n,Rp)}class Cp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new sf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=pr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return Qd(this,!0),!0}get value(){const e=this.dep.track();return tf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Pp(n,e,t=!1){let i,s;return je(n)?i=n:(i=n.get,s=n.set),new Cp(i,s,t)}const Nr={},Ma=new WeakMap;let Yi;function Dp(n,e=!1,t=Yi){if(t){let i=Ma.get(t);i||Ma.set(t,i=[]),i.push(n)}}function Lp(n,e,t=Mt){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=S=>s?S:Rn(S)||s===!1||s===0?oi(S,1):oi(S);let u,f,d,h,v=!1,b=!1;if(jt(n)?(f=()=>n.value,v=Rn(n)):Ji(n)?(f=()=>c(n),v=!0):$e(n)?(b=!0,v=n.some(S=>Ji(S)||Rn(S)),f=()=>n.map(S=>{if(jt(S))return S.value;if(Ji(S))return c(S);if(je(S))return l?l(S,2):S()})):je(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){mi();try{d()}finally{gi()}}const S=Yi;Yi=u;try{return l?l(n,3,[h]):n(h)}finally{Yi=S}}:f=Gn,e&&s){const S=f,T=s===!0?1/0:s;f=()=>oi(S(),T)}const m=op(),p=()=>{u.stop(),m&&m.active&&rc(m.effects,u)};if(r&&e){const S=e;e=(...T)=>{const A=S(...T);return p(),A}}let y=b?new Array(n.length).fill(Nr):Nr;const P=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const T=u.run();if(S||s||v||(b?T.some((A,D)=>ri(A,y[D])):ri(T,y))){d&&d();const A=Yi;Yi=u;try{const D=[T,y===Nr?void 0:b&&y[0]===Nr?[]:y,h];y=T,l?l(e,3,D):e(...D)}finally{Yi=A}}}else u.run()};return o&&o(P),u=new $d(f),u.scheduler=a?()=>a(P,!1):P,h=S=>Dp(S,!1,u),d=u.onStop=()=>{const S=Ma.get(u);if(S){if(l)l(S,4);else for(const T of S)T();Ma.delete(u)}},e?i?P(!0):y=u.run():a?a(P.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function oi(n,e=1/0,t){if(e<=0||!xt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,jt(n))oi(n.value,e,t);else if($e(n))for(let i=0;i<n.length;i++)oi(n[i],e,t);else if(Fs(n)||As(n))n.forEach(i=>{oi(i,e,t)});else if(Wd(n)){for(const i in n)oi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&oi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Tr(n,e,t,i){try{return i?n(...i):n()}catch(s){Ya(s,e,t)}}function Pn(n,e,t,i){if(je(n)){const s=Tr(n,e,t,i);return s&&zd(s)&&s.catch(r=>{Ya(r,e,t)}),s}if($e(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Pn(n[r],e,t,i));return s}}function Ya(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Mt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(r){mi(),Tr(r,null,10,[n,l,c]),gi();return}}Ip(n,t,s,i,a)}function Ip(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Jt=[];let Fn=-1;const ws=[];let Pi=null,Ss=0;const hf=Promise.resolve();let ba=null;function pf(n){const e=ba||hf;return n?e.then(this?n.bind(this):n):e}function Up(n){let e=Fn+1,t=Jt.length;for(;e<t;){const i=e+t>>>1,s=Jt[i],r=gr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function mc(n){if(!(n.flags&1)){const e=gr(n),t=Jt[Jt.length-1];!t||!(n.flags&2)&&e>=gr(t)?Jt.push(n):Jt.splice(Up(e),0,n),n.flags|=1,mf()}}function mf(){ba||(ba=hf.then(_f))}function Np(n){if(!$e(n))Pi&&n.id===-1?Pi.splice(Ss+1,0,n):n.flags&1||(ws.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)ws.push(n[e]);mf()}function tu(n,e,t=Fn+1){for(;t<Jt.length;t++){const i=Jt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Jt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function gf(n){if(ws.length){const e=[...new Set(ws)].sort((t,i)=>gr(t)-gr(i));if(ws.length=0,Pi){for(let t=0;t<e.length;t++)Pi.push(e[t]);return}for(Pi=e,Ss=0;Ss<Pi.length;Ss++){const t=Pi[Ss];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Pi=null,Ss=0}}const gr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function _f(n){try{for(Fn=0;Fn<Jt.length;Fn++){const e=Jt[Fn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Tr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Fn<Jt.length;Fn++){const e=Jt[Fn];e&&(e.flags&=-2)}Fn=-1,Jt.length=0,gf(),ba=null,(Jt.length||ws.length)&&_f()}}let vn=null,vf=null;function ya(n){const e=vn;return vn=n,vf=n&&n.type.__scopeId||null,e}function Fp(n,e=vn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&fu(-1);const r=ya(e),a=Qi.length;let o;try{o=n(...s)}finally{for(let l=Qi.length;l>a;l--)zf();ya(r),i._d&&fu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function mt(n,e){if(vn===null)return n;const t=Ja(vn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,a,o,l=Mt]=e[s];r&&(je(r)&&(r={mounted:r,updated:r}),r.deep&&oi(a),i.push({dir:r,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Hi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(mi(),Pn(l,t,8,[n.el,o,n,e]),gi())}}function Op(n,e){if(Qt){let t=Qt.provides;const i=Qt.parent&&Qt.parent.provides;i===t&&(t=Qt.provides=Object.create(i)),t[n]=e}}function ha(n,e,t=!1){const i=Nm();if(i||Rs){let s=Rs?Rs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&je(e)?e.call(i&&i.proxy):e}}const Bp=Symbol.for("v-scx"),Hp=()=>ha(Bp);function co(n,e,t){return xf(n,e,t)}function xf(n,e,t=Mt){const{immediate:i,deep:s,flush:r,once:a}=t,o=Yt({},t),l=e&&i||!e&&r!=="post";let c;if(xr){if(r==="sync"){const h=Hp();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Gn,h.resume=Gn,h.pause=Gn,h}}const u=Qt;o.call=(h,v,b)=>Pn(h,u,v,b);let f=!1;r==="post"?o.scheduler=h=>{rn(h,u&&u.suspense)}:r!=="sync"&&(f=!0,o.scheduler=(h,v)=>{v?h():mc(h)}),o.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=Lp(n,e,o);return xr&&(c?c.push(d):l&&d()),d}function kp(n,e,t){const i=this.proxy,s=Rt(n)?n.includes(".")?Sf(i,n):()=>i[n]:n.bind(i,i);let r;je(e)?r=e:(r=e.handler,t=e);const a=Ar(this),o=xf(s,r.bind(i),t);return a(),o}function Sf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Vp=Symbol("_vte"),qa=n=>n.__isTeleport,uo=Symbol("_leaveCb");function zp(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==vi){e=t;break}}return e}function Mf(n){if(!_c(n))return qa(n.type)&&n.children?zp(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&je(t.default))return t.default()}}function gc(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;gc(qa(t.type)&&Mf(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function bf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function nu(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Ea=new WeakMap;function lr(n,e,t,i,s=!1){if($e(n)){n.forEach((b,m)=>lr(b,e&&($e(e)?e[m]:e),t,i,s));return}if(cr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&lr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Ja(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Mt?o.refs={}:o.refs,f=o.setupState,d=vt(f),h=f===Mt?Vd:b=>nu(u,b)?!1:ft(d,b),v=(b,m)=>!(m&&nu(u,m));if(c!=null&&c!==l){if(iu(e),Rt(c))u[c]=null,h(c)&&(f[c]=null);else if(jt(c)){const b=e;v(c,b.k)&&(c.value=null),b.k&&(u[b.k]=null)}}if(je(l))Tr(l,o,12,[a,u]);else{const b=Rt(l),m=jt(l);if(b||m){const p=()=>{if(n.f){const y=b?h(l)?f[l]:u[l]:v()||!n.k?l.value:u[n.k];if(s)$e(y)&&rc(y,r);else if($e(y))y.includes(r)||y.push(r);else if(b)u[l]=[r],h(l)&&(f[l]=u[l]);else{const P=[r];v(l,n.k)&&(l.value=P),n.k&&(u[n.k]=P)}}else b?(u[l]=a,h(l)&&(f[l]=a)):m&&(v(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const y=()=>{p(),Ea.delete(n)};y.id=-1,Ea.set(n,y),rn(y,t)}else iu(n),p()}}}function iu(n){const e=Ea.get(n);e&&(e.flags|=8,Ea.delete(n))}Wa().requestIdleCallback;Wa().cancelIdleCallback;const cr=n=>!!n.type.__asyncLoader,_c=n=>n.type.__isKeepAlive;function Gp(n,e){yf(n,"a",e)}function Wp(n,e){yf(n,"da",e)}function yf(n,e,t=Qt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ka(e,i,t),t){let s=t.parent;for(;s&&s.parent;)_c(s.parent.vnode)&&Xp(i,e,t,s),s=s.parent}}function Xp(n,e,t,i){const s=Ka(e,n,i,!0);Ef(()=>{rc(i[e],s)},t)}function Ka(n,e,t=Qt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{mi();const o=Ar(t),l=Pn(e,t,n,a);return o(),gi(),l});return i?s.unshift(r):s.push(r),r}}const Si=n=>(e,t=Qt)=>{(!xr||n==="sp")&&Ka(n,(...i)=>e(...i),t)},Yp=Si("bm"),qp=Si("m"),Kp=Si("bu"),Zp=Si("u"),$p=Si("bum"),Ef=Si("um"),Jp=Si("sp"),Qp=Si("rtg"),jp=Si("rtc");function em(n,e=Qt){Ka("ec",n,e)}const tm=Symbol.for("v-ndc");function nn(n,e,t,i){let s;const r=t,a=$e(n);if(a||Rt(n)){const o=a&&Ji(n);let l=!1,c=!1;o&&(l=!Rn(n),c=Ni(n),n=Xa(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?Ds(_i(n[u])):_i(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(xt(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const ol=n=>n?Yf(n)?Ja(n):ol(n.parent):null,ur=Yt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ol(n.parent),$root:n=>ol(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Af(n),$forceUpdate:n=>n.f||(n.f=()=>{mc(n.update)}),$nextTick:n=>n.n||(n.n=pf.bind(n.proxy)),$watch:n=>kp.bind(n)}),fo=(n,e)=>n!==Mt&&!n.__isScriptSetup&&ft(n,e),nm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(fo(i,e))return a[e]=1,i[e];if(s!==Mt&&ft(s,e))return a[e]=2,s[e];if(ft(r,e))return a[e]=3,r[e];if(t!==Mt&&ft(t,e))return a[e]=4,t[e];ll&&(a[e]=0)}}const c=ur[e];let u,f;if(c)return e==="$attrs"&&Wt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==Mt&&ft(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,ft(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return fo(s,e)?(s[e]=t,!0):i!==Mt&&ft(i,e)?(i[e]=t,!0):ft(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(t[o]||n!==Mt&&o[0]!=="$"&&ft(n,o)||fo(e,o)||ft(r,o)||ft(i,o)||ft(ur,o)||ft(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ft(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function su(n){return $e(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ll=!0;function im(n){const e=Af(n),t=n.proxy,i=n.ctx;ll=!1,e.beforeCreate&&ru(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:v,activated:b,deactivated:m,beforeDestroy:p,beforeUnmount:y,destroyed:P,unmounted:S,render:T,renderTracked:A,renderTriggered:D,errorCaptured:x,serverPrefetch:w,expose:L,inheritAttrs:F,components:G,directives:q,filters:B}=e;if(c&&sm(c,i,null),a)for(const V in a){const ie=a[V];je(ie)&&(i[V]=ie.bind(t))}if(s){const V=s.call(t,t);xt(V)&&(n.data=fc(V))}if(ll=!0,r)for(const V in r){const ie=r[V],J=je(ie)?ie.bind(t,t):je(ie.get)?ie.get.bind(t,t):Gn,j=!je(ie)&&je(ie.set)?ie.set.bind(t):Gn,re=Vm({get:J,set:j});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>re.value,set:Me=>re.value=Me})}if(o)for(const V in o)Tf(o[V],i,t,V);if(l){const V=je(l)?l.call(t):l;Reflect.ownKeys(V).forEach(ie=>{Op(ie,V[ie])})}u&&ru(u,n,"c");function ee(V,ie){$e(ie)?ie.forEach(J=>V(J.bind(t))):ie&&V(ie.bind(t))}if(ee(Yp,f),ee(qp,d),ee(Kp,h),ee(Zp,v),ee(Gp,b),ee(Wp,m),ee(em,x),ee(jp,A),ee(Qp,D),ee($p,y),ee(Ef,S),ee(Jp,w),$e(L))if(L.length){const V=n.exposed||(n.exposed={});L.forEach(ie=>{Object.defineProperty(V,ie,{get:()=>t[ie],set:J=>t[ie]=J,enumerable:!0})})}else n.exposed||(n.exposed={});T&&n.render===Gn&&(n.render=T),F!=null&&(n.inheritAttrs=F),G&&(n.components=G),q&&(n.directives=q),w&&bf(n)}function sm(n,e,t=Gn){$e(n)&&(n=cl(n));for(const i in n){const s=n[i];let r;xt(s)?"default"in s?r=ha(s.from||i,s.default,!0):r=ha(s.from||i):r=ha(s),jt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function ru(n,e,t){Pn($e(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Tf(n,e,t,i){let s=i.includes(".")?Sf(t,i):()=>t[i];if(Rt(n)){const r=e[n];je(r)&&co(s,r)}else if(je(n))co(s,n.bind(t));else if(xt(n))if($e(n))n.forEach(r=>Tf(r,e,t,i));else{const r=je(n.handler)?n.handler.bind(t):e[n.handler];je(r)&&co(s,r,n)}}function Af(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Ta(l,c,a,!0)),Ta(l,e,a)),xt(e)&&r.set(e,l),l}function Ta(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Ta(n,r,t,!0),s&&s.forEach(a=>Ta(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=rm[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const rm={data:au,props:ou,emits:ou,methods:js,computed:js,beforeCreate:Zt,created:Zt,beforeMount:Zt,mounted:Zt,beforeUpdate:Zt,updated:Zt,beforeDestroy:Zt,beforeUnmount:Zt,destroyed:Zt,unmounted:Zt,activated:Zt,deactivated:Zt,errorCaptured:Zt,serverPrefetch:Zt,components:js,directives:js,watch:om,provide:au,inject:am};function au(n,e){return e?n?function(){return Yt(je(n)?n.call(this,this):n,je(e)?e.call(this,this):e)}:e:n}function am(n,e){return js(cl(n),cl(e))}function cl(n){if($e(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Zt(n,e){return n?[...new Set([].concat(n,e))]:e}function js(n,e){return n?Yt(Object.create(null),n,e):e}function ou(n,e){return n?$e(n)&&$e(e)?[...new Set([...n,...e])]:Yt(Object.create(null),su(n),su(e??{})):e}function om(n,e){if(!n)return e;if(!e)return n;const t=Yt(Object.create(null),n);for(const i in e)t[i]=Zt(n[i],e[i]);return t}function wf(){return{app:null,config:{isNativeTag:Vd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lm=0;function cm(n,e){return function(i,s=null){je(i)||(i=Yt({},i)),s!=null&&!xt(s)&&(s=null);const r=wf(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:lm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:zm,get config(){return r.config},set config(u){},use(u,...f){return a.has(u)||(u&&je(u.install)?(a.add(u),u.install(c,...f)):je(u)&&(a.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||di(i,s);return h.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(h,u,d),l=!0,c._container=u,u.__vue_app__=c,Ja(h.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Pn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Rs;Rs=c;try{return u()}finally{Rs=f}}};return c}}let Rs=null;const um=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${An(e)}Modifiers`]||n[`${Oi(e)}Modifiers`];function dm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Mt;let s=t;const r=e.startsWith("update:"),a=r&&um(i,e.slice(7));a&&(a.trim&&(s=t.map(u=>Rt(u)?u.trim():u)),a.number&&(s=t.map(Ga)));let o,l=i[o=so(e)]||i[o=so(An(e))];!l&&r&&(l=i[o=so(Oi(e))]),l&&Pn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Pn(c,n,6,s)}}const fm=new WeakMap;function Rf(n,e,t=!1){const i=t?fm:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!je(n)){const l=c=>{const u=Rf(c,e,!0);u&&(o=!0,Yt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(xt(n)&&i.set(n,null),null):($e(r)?r.forEach(l=>a[l]=null):Yt(a,r),xt(n)&&i.set(n,a),a)}function Za(n,e){return!n||!ka(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),ft(n,e[0].toLowerCase()+e.slice(1))||ft(n,Oi(e))||ft(n,e))}function lu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:v,inheritAttrs:b}=n,m=ya(n);let p,y;try{if(t.shapeFlag&4){const S=s||i,T=S;p=Bn(c.call(T,S,u,f,h,d,v)),y=o}else{const S=e;p=Bn(S.length>1?S(f,{attrs:o,slots:a,emit:l}):S(f,null)),y=e.props?o:hm(o)}}catch(S){Qi.length=0,Ya(S,n,1),p=di(vi)}let P=p;if(y&&b!==!1){const S=Object.keys(y),{shapeFlag:T}=P;S.length&&T&7&&(r&&S.some(Va)&&(y=pm(y,r)),P=Ls(P,y,!1,!0))}if(t.dirs&&(P=Ls(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(t.dirs):t.dirs),t.transition){const S=qa(P.type)&&Mf(P)||P;gc(S,t.transition)}return p=P,ya(m),p}const hm=n=>{let e;for(const t in n)(t==="class"||t==="style"||ka(t))&&((e||(e={}))[t]=n[t]);return e},pm=(n,e)=>{const t={};for(const i in n)(!Va(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function mm(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?cu(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(Cf(a,i,d)&&!Za(c,d))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?cu(i,a,c):!0:!!a;return!1}function cu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Cf(e,n,r)&&!Za(t,r))return!0}return!1}function Cf(n,e,t){const i=n[t],s=e[t];return t==="style"&&xt(i)&&xt(s)?!Ui(i,s):i!==s}function gm({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Pf={},Df=()=>Object.create(Pf),Lf=n=>Object.getPrototypeOf(n)===Pf;function _m(n,e,t,i=!1){const s={},r=Df();n.propsDefaults=Object.create(null),If(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:Tp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function vm(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=vt(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Za(n.emitsOptions,d))continue;const h=e[d];if(l)if(ft(r,d))h!==r[d]&&(r[d]=h,c=!0);else{const v=An(d);s[v]=ul(l,o,v,h,n,!1)}else h!==r[d]&&(r[d]=h,c=!0)}}}else{If(n,e,s,r)&&(c=!0);let u;for(const f in o)(!e||!ft(e,f)&&((u=Oi(f))===f||!ft(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=ul(l,o,f,void 0,n,!0)):delete s[f]);if(r!==o)for(const f in r)(!e||!ft(e,f))&&(delete r[f],c=!0)}c&&ai(n.attrs,"set","")}function If(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(rr(l))continue;const c=e[l];let u;s&&ft(s,u=An(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:Za(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=vt(t),c=o||Mt;for(let u=0;u<r.length;u++){const f=r[u];t[f]=ul(s,l,f,c[f],n,!ft(c,f))}}return a}function ul(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=ft(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&je(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Ar(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===Oi(t))&&(i=!0))}return i}const xm=new WeakMap;function Uf(n,e,t=!1){const i=t?xm:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!je(n)){const u=f=>{l=!0;const[d,h]=Uf(f,e,!0);Yt(a,d),h&&o.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return xt(n)&&i.set(n,Ts),Ts;if($e(r))for(let u=0;u<r.length;u++){const f=An(r[u]);uu(f)&&(a[f]=Mt)}else if(r)for(const u in r){const f=An(u);if(uu(f)){const d=r[u],h=a[f]=$e(d)||je(d)?{type:d}:Yt({},d),v=h.type;let b=!1,m=!0;if($e(v))for(let p=0;p<v.length;++p){const y=v[p],P=je(y)&&y.name;if(P==="Boolean"){b=!0;break}else P==="String"&&(m=!1)}else b=je(v)&&v.name==="Boolean";h[0]=b,h[1]=m,(b||ft(h,"default"))&&o.push(f)}}const c=[a,o];return xt(n)&&i.set(n,c),c}function uu(n){return n[0]!=="$"&&!rr(n)}const vc=n=>n==="_"||n==="_ctx"||n==="$stable",xc=n=>$e(n)?n.map(Bn):[Bn(n)],Sm=(n,e,t)=>{if(e._n)return e;const i=Fp((...s)=>xc(e(...s)),t);return i._c=!1,i},Nf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(vc(s))continue;const r=n[s];if(je(r))e[s]=Sm(s,r,i);else if(r!=null){const a=xc(r);e[s]=()=>a}}},Ff=(n,e)=>{const t=xc(e);n.slots.default=()=>t},Of=(n,e,t)=>{for(const i in e)(t||!vc(i))&&(n[i]=e[i])},Mm=(n,e,t)=>{const i=n.slots=Df();if(n.vnode.shapeFlag&32){const s=e._;s?(Of(i,e,t),t&&Yd(i,"_",s,!0)):Nf(e,i)}else e&&Ff(n,e)},bm=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=Mt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:Of(s,e,t):(r=!e.$stable,Nf(e,s)),a=e}else e&&(Ff(n,e),a={default:1});if(r)for(const o in s)!vc(o)&&a[o]==null&&delete s[o]},rn=wm;function ym(n){return Em(n)}function Em(n,e){const t=Wa();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=Gn,insertStaticContent:v}=n,b=(R,I,z,ne=null,ae=null,Q=null,fe=void 0,he=null,pe=!!I.dynamicChildren)=>{if(R===I)return;R&&!Vs(R,I)&&(ne=K(R),Me(R,ae,Q,!0),R=null),I.patchFlag===-2&&(pe=!1,I.dynamicChildren=null);const{type:oe,ref:Re,shapeFlag:C}=I;switch(oe){case $a:m(R,I,z,ne);break;case vi:p(R,I,z,ne);break;case po:R==null&&y(I,z,ne,fe);break;case _t:G(R,I,z,ne,ae,Q,fe,he,pe);break;default:C&1?T(R,I,z,ne,ae,Q,fe,he,pe):C&6?q(R,I,z,ne,ae,Q,fe,he,pe):(C&64||C&128)&&oe.process(R,I,z,ne,ae,Q,fe,he,pe,ze)}Re!=null&&ae?lr(Re,R&&R.ref,Q,I||R,!I):Re==null&&R&&R.ref!=null&&lr(R.ref,null,Q,R,!0)},m=(R,I,z,ne)=>{if(R==null)i(I.el=o(I.children),z,ne);else{const ae=I.el=R.el;I.children!==R.children&&c(ae,I.children)}},p=(R,I,z,ne)=>{R==null?i(I.el=l(I.children||""),z,ne):I.el=R.el},y=(R,I,z,ne)=>{[R.el,R.anchor]=v(R.children,I,z,ne,R.el,R.anchor)},P=({el:R,anchor:I},z,ne)=>{let ae;for(;R&&R!==I;)ae=d(R),i(R,z,ne),R=ae;i(I,z,ne)},S=({el:R,anchor:I})=>{let z;for(;R&&R!==I;)z=d(R),s(R),R=z;s(I)},T=(R,I,z,ne,ae,Q,fe,he,pe)=>{if(I.type==="svg"?fe="svg":I.type==="math"&&(fe="mathml"),R==null)A(I,z,ne,ae,Q,fe,he,pe);else{const oe=R.el&&R.el._isVueCE?R.el:null;try{oe&&oe._beginPatch(),w(R,I,ae,Q,fe,he,pe)}finally{oe&&oe._endPatch()}}},A=(R,I,z,ne,ae,Q,fe,he)=>{let pe,oe;const{props:Re,shapeFlag:C,transition:De,dirs:Te}=R;if(pe=R.el=a(R.type,Q,Re&&Re.is,Re),C&8?u(pe,R.children):C&16&&x(R.children,pe,null,ne,ae,ho(R,Q),fe,he),Te&&Hi(R,null,ne,"created"),D(pe,R,R.scopeId,fe,ne),Re){for(const g in Re)g!=="value"&&!rr(g)&&r(pe,g,null,Re[g],Q,ne);"value"in Re&&r(pe,"value",null,Re.value,Q),(oe=Re.onVnodeBeforeMount)&&In(oe,ne,R)}Te&&Hi(R,null,ne,"beforeMount");const E=Tm(ae,De);E&&De.beforeEnter(pe),i(pe,I,z),((oe=Re&&Re.onVnodeMounted)||E||Te)&&rn(()=>{try{oe&&In(oe,ne,R),E&&De.enter(pe),Te&&Hi(R,null,ne,"mounted")}finally{}},ae)},D=(R,I,z,ne,ae)=>{if(z&&h(R,z),ne)for(let Q=0;Q<ne.length;Q++)h(R,ne[Q]);if(ae){let Q=ae.subTree;if(I===Q||Vf(Q.type)&&(Q.ssContent===I||Q.ssFallback===I)){const fe=ae.vnode;D(R,fe,fe.scopeId,fe.slotScopeIds,ae.parent)}}},x=(R,I,z,ne,ae,Q,fe,he,pe=0)=>{for(let oe=pe;oe<R.length;oe++){const Re=R[oe]=he?si(R[oe]):Bn(R[oe]);b(null,Re,I,z,ne,ae,Q,fe,he)}},w=(R,I,z,ne,ae,Q,fe)=>{const he=I.el=R.el;let{patchFlag:pe,dynamicChildren:oe,dirs:Re}=I;pe|=R.patchFlag&16;const C=R.props||Mt,De=I.props||Mt;let Te;if(z&&ki(z,!1),(Te=De.onVnodeBeforeUpdate)&&In(Te,z,I,R),Re&&Hi(I,R,z,"beforeUpdate"),z&&ki(z,!0),oe&&(!R.dynamicChildren||R.dynamicChildren.length!==oe.length)&&(pe=0,fe=!1,oe=null),(C.innerHTML&&De.innerHTML==null||C.textContent&&De.textContent==null)&&u(he,""),oe?L(R.dynamicChildren,oe,he,z,ne,ho(I,ae),Q):fe||ie(R,I,he,null,z,ne,ho(I,ae),Q,!1),pe>0){if(pe&16)F(he,C,De,z,ae);else if(pe&2&&C.class!==De.class&&r(he,"class",null,De.class,ae),pe&4&&r(he,"style",C.style,De.style,ae),pe&8){const E=I.dynamicProps;for(let g=0;g<E.length;g++){const U=E[g],k=C[U],Z=De[U];(Z!==k||U==="value")&&r(he,U,k,Z,ae,z)}}pe&1&&R.children!==I.children&&u(he,I.children)}else!fe&&oe==null&&F(he,C,De,z,ae);((Te=De.onVnodeUpdated)||Re)&&rn(()=>{Te&&In(Te,z,I,R),Re&&Hi(I,R,z,"updated")},ne)},L=(R,I,z,ne,ae,Q,fe)=>{for(let he=0;he<I.length;he++){const pe=R[he],oe=I[he],Re=pe.el&&(pe.type===_t||!Vs(pe,oe)||pe.shapeFlag&198)?f(pe.el):z;b(pe,oe,Re,null,ne,ae,Q,fe,!0)}},F=(R,I,z,ne,ae)=>{if(I!==z){if(I!==Mt)for(const Q in I)!rr(Q)&&!(Q in z)&&r(R,Q,I[Q],null,ae,ne);for(const Q in z){if(rr(Q))continue;const fe=z[Q],he=I[Q];fe!==he&&Q!=="value"&&r(R,Q,he,fe,ae,ne)}"value"in z&&r(R,"value",I.value,z.value,ae)}},G=(R,I,z,ne,ae,Q,fe,he,pe)=>{const oe=I.el=R?R.el:o(""),Re=I.anchor=R?R.anchor:o("");let{patchFlag:C,dynamicChildren:De,slotScopeIds:Te}=I;Te&&(he=he?he.concat(Te):Te),R==null?(i(oe,z,ne),i(Re,z,ne),x(I.children||[],z,Re,ae,Q,fe,he,pe)):C>0&&C&64&&De&&R.dynamicChildren&&R.dynamicChildren.length===De.length?(L(R.dynamicChildren,De,z,ae,Q,fe,he),(I.key!=null||ae&&I===ae.subTree)&&Bf(R,I,!0)):ie(R,I,z,Re,ae,Q,fe,he,pe)},q=(R,I,z,ne,ae,Q,fe,he,pe)=>{I.slotScopeIds=he,R==null?I.shapeFlag&512?ae.ctx.activate(I,z,ne,fe,pe):B(I,z,ne,ae,Q,fe,pe):W(R,I,pe)},B=(R,I,z,ne,ae,Q,fe)=>{const he=R.component=Um(R,ne,ae);if(_c(R)&&(he.ctx.renderer=ze),Fm(he,!1,fe),he.asyncDep){if(ae&&ae.registerDep(he,ee,fe),!R.el){const pe=he.subTree=di(vi);p(null,pe,I,z),R.placeholder=pe.el}}else ee(he,R,I,z,ae,Q,fe)},W=(R,I,z)=>{const ne=I.component=R.component;if(mm(R,I,z))if(ne.asyncDep&&!ne.asyncResolved){V(ne,I,z);return}else ne.next=I,ne.update();else I.el=R.el,ne.vnode=I},ee=(R,I,z,ne,ae,Q,fe)=>{const he=()=>{if(R.isMounted){let{next:C,bu:De,u:Te,parent:E,vnode:g}=R;{const _e=Hf(R);if(_e){C&&(C.el=g.el,V(R,C,fe)),_e.asyncDep.then(()=>{rn(()=>{R.isUnmounted||oe()},ae)});return}}let U=C,k;ki(R,!1),C?(C.el=g.el,V(R,C,fe)):C=g,De&&fa(De),(k=C.props&&C.props.onVnodeBeforeUpdate)&&In(k,E,C,g),ki(R,!0);const Z=lu(R),me=R.subTree;R.subTree=Z,b(me,Z,f(me.el),K(me),R,ae,Q),C.el=Z.el,U===null&&gm(R,Z.el),Te&&rn(Te,ae),(k=C.props&&C.props.onVnodeUpdated)&&rn(()=>In(k,E,C,g),ae)}else{let C;const{el:De,props:Te}=I,{bm:E,m:g,parent:U,root:k,type:Z}=R,me=cr(I);ki(R,!1),E&&fa(E),!me&&(C=Te&&Te.onVnodeBeforeMount)&&In(C,U,I),ki(R,!0);{k.ce&&k.ce._hasShadowRoot()&&k.ce._injectChildStyle(Z,R.parent?R.parent.type:void 0);const _e=R.subTree=lu(R);b(null,_e,z,ne,R,ae,Q),I.el=_e.el}if(g&&rn(g,ae),!me&&(C=Te&&Te.onVnodeMounted)){const _e=I;rn(()=>In(C,U,_e),ae)}(I.shapeFlag&256||U&&cr(U.vnode)&&U.vnode.shapeFlag&256)&&R.a&&rn(R.a,ae),R.isMounted=!0,I=z=ne=null}};R.scope.on();const pe=R.effect=new $d(he);R.scope.off();const oe=R.update=pe.run.bind(pe),Re=R.job=pe.runIfDirty.bind(pe);Re.i=R,Re.id=R.uid,pe.scheduler=()=>mc(Re),ki(R,!0),oe()},V=(R,I,z)=>{I.component=R;const ne=R.vnode.props;R.vnode=I,R.next=null,vm(R,I.props,ne,z),bm(R,I.children,z),mi(),tu(R),gi()},ie=(R,I,z,ne,ae,Q,fe,he,pe=!1)=>{const oe=R&&R.children,Re=R?R.shapeFlag:0,C=I.children,{patchFlag:De,shapeFlag:Te}=I;if(De>0){if(De&128){j(oe,C,z,ne,ae,Q,fe,he,pe);return}else if(De&256){J(oe,C,z,ne,ae,Q,fe,he,pe);return}}Te&8?(Re&16&&We(oe,ae,Q),C!==oe&&u(z,C)):Re&16?Te&16?j(oe,C,z,ne,ae,Q,fe,he,pe):We(oe,ae,Q,!0):(Re&8&&u(z,""),Te&16&&x(C,z,ne,ae,Q,fe,he,pe))},J=(R,I,z,ne,ae,Q,fe,he,pe)=>{R=R||Ts,I=I||Ts;const oe=R.length,Re=I.length,C=Math.min(oe,Re);let De;for(De=0;De<C;De++){const Te=I[De]=pe?si(I[De]):Bn(I[De]);b(R[De],Te,z,null,ae,Q,fe,he,pe)}oe>Re?We(R,ae,Q,!0,!1,C):x(I,z,ne,ae,Q,fe,he,pe,C)},j=(R,I,z,ne,ae,Q,fe,he,pe)=>{let oe=0;const Re=I.length;let C=R.length-1,De=Re-1;for(;oe<=C&&oe<=De;){const Te=R[oe],E=I[oe]=pe?si(I[oe]):Bn(I[oe]);if(Vs(Te,E))b(Te,E,z,null,ae,Q,fe,he,pe);else break;oe++}for(;oe<=C&&oe<=De;){const Te=R[C],E=I[De]=pe?si(I[De]):Bn(I[De]);if(Vs(Te,E))b(Te,E,z,null,ae,Q,fe,he,pe);else break;C--,De--}if(oe>C){if(oe<=De){const Te=De+1,E=Te<Re?I[Te].el:ne;for(;oe<=De;)b(null,I[oe]=pe?si(I[oe]):Bn(I[oe]),z,E,ae,Q,fe,he,pe),oe++}}else if(oe>De)for(;oe<=C;)Me(R[oe],ae,Q,!0),oe++;else{const Te=oe,E=oe,g=new Map;for(oe=E;oe<=De;oe++){const ge=I[oe]=pe?si(I[oe]):Bn(I[oe]);ge.key!=null&&g.set(ge.key,oe)}let U,k=0;const Z=De-E+1;let me=!1,_e=0;const te=new Array(Z);for(oe=0;oe<Z;oe++)te[oe]=0;for(oe=Te;oe<=C;oe++){const ge=R[oe];if(k>=Z){Me(ge,ae,Q,!0);continue}let Ie;if(ge.key!=null)Ie=g.get(ge.key);else for(U=E;U<=De;U++)if(te[U-E]===0&&Vs(ge,I[U])){Ie=U;break}Ie===void 0?Me(ge,ae,Q,!0):(te[Ie-E]=oe+1,Ie>=_e?_e=Ie:me=!0,b(ge,I[Ie],z,null,ae,Q,fe,he,pe),k++)}const le=me?Am(te):Ts;for(U=le.length-1,oe=Z-1;oe>=0;oe--){const ge=E+oe,Ie=I[ge],be=I[ge+1],Se=ge+1<Re?be.el||kf(be):ne;te[oe]===0?b(null,Ie,z,Se,ae,Q,fe,he,pe):me&&(U<0||oe!==le[U]?re(Ie,z,Se,2):U--)}}},re=(R,I,z,ne,ae=null)=>{const{el:Q,type:fe,transition:he,children:pe,shapeFlag:oe}=R;if(oe&6){re(R.component.subTree,I,z,ne);return}if(oe&128){R.suspense.move(I,z,ne);return}if(oe&64){fe.move(R,I,z,ze);return}if(fe===_t){i(Q,I,z);for(let C=0;C<pe.length;C++)re(pe[C],I,z,ne);i(R.anchor,I,z);return}if(fe===po){P(R,I,z);return}if(ne!==2&&oe&1&&he)if(ne===0)he.persisted&&!Q[uo]?i(Q,I,z):(he.beforeEnter(Q),i(Q,I,z),rn(()=>he.enter(Q),ae));else{const{leave:C,delayLeave:De,afterLeave:Te}=he,E=()=>{R.ctx.isUnmounted?s(Q):i(Q,I,z)},g=()=>{const U=Q._isLeaving||!!Q[uo];Q._isLeaving&&Q[uo](!0),he.persisted&&!U?E():C(Q,()=>{E(),Te&&Te()})};De?De(Q,E,g):g()}else i(Q,I,z)},Me=(R,I,z,ne=!1,ae=!1)=>{const{type:Q,props:fe,ref:he,children:pe,dynamicChildren:oe,shapeFlag:Re,patchFlag:C,dirs:De,cacheIndex:Te,memo:E}=R;if(C===-2&&(ae=!1),he!=null&&(mi(),lr(he,null,z,R,!0),gi()),Te!=null&&(I.renderCache[Te]=void 0),Re&256){I.ctx.deactivate(R);return}const g=Re&1&&De,U=!cr(R);let k;if(U&&(k=fe&&fe.onVnodeBeforeUnmount)&&In(k,I,R),Re&6)Oe(R.component,z,ne);else{if(Re&128){R.suspense.unmount(z,ne);return}g&&Hi(R,null,I,"beforeUnmount"),Re&64?R.type.remove(R,I,z,ze,ne):oe&&!oe.hasOnce&&(Q!==_t||C>0&&C&64)?We(oe,I,z,!1,!0):(Q===_t&&C&384||!ae&&Re&16)&&We(pe,I,z),ne&&Fe(R)}const Z=E!=null&&Te==null;(U&&(k=fe&&fe.onVnodeUnmounted)||g||Z)&&rn(()=>{k&&In(k,I,R),g&&Hi(R,null,I,"unmounted"),Z&&(R.el=null)},z)},Fe=R=>{const{type:I,el:z,anchor:ne,transition:ae}=R;if(I===_t){de(z,ne);return}if(I===po){S(R);return}const Q=()=>{s(z),ae&&!ae.persisted&&ae.afterLeave&&ae.afterLeave()};if(R.shapeFlag&1&&ae&&!ae.persisted){const{leave:fe,delayLeave:he}=ae,pe=()=>fe(z,Q);he?he(R.el,Q,pe):pe()}else Q()},de=(R,I)=>{let z;for(;R!==I;)z=d(R),s(R),R=z;s(I)},Oe=(R,I,z)=>{const{bum:ne,scope:ae,job:Q,subTree:fe,um:he,m:pe,a:oe}=R;du(pe),du(oe),ne&&fa(ne),ae.stop(),Q&&(Q.flags|=8,Me(fe,R,I,z)),he&&rn(he,I),rn(()=>{R.isUnmounted=!0},I)},We=(R,I,z,ne=!1,ae=!1,Q=0)=>{for(let fe=Q;fe<R.length;fe++)Me(R[fe],I,z,ne,ae)},K=R=>{if(R.shapeFlag&6)return K(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const I=d(R.anchor||R.el),z=I&&I[Vp];return z?d(z):I};let se=!1;const ve=(R,I,z)=>{let ne;R==null?I._vnode&&(Me(I._vnode,null,null,!0),ne=I._vnode.component):b(I._vnode||null,R,I,null,null,null,z),I._vnode=R,se||(se=!0,tu(ne),gf(),se=!1)},ze={p:b,um:Me,m:re,r:Fe,mt:B,mc:x,pc:ie,pbc:L,n:K,o:n};return{render:ve,hydrate:void 0,createApp:cm(ve)}}function ho({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ki({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Tm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Bf(n,e,t=!1){const i=n.children,s=e.children;if($e(i)&&$e(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=si(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&Bf(a,o)),o.type===$a&&(o.patchFlag===-1&&(o=s[r]=si(o)),o.el=a.el),o.type===vi&&!o.el&&(o.el=a.el)}}function Am(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function Hf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Hf(e)}function du(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function kf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?kf(e.subTree):null}const Vf=n=>n.__isSuspense;function wm(n,e){e&&e.pendingBranch?$e(n)?e.effects.push(...n):e.effects.push(n):Np(n)}const _t=Symbol.for("v-fgt"),$a=Symbol.for("v-txt"),vi=Symbol.for("v-cmt"),po=Symbol.for("v-stc"),Qi=[];let cn=null;function Ye(n=!1){Qi.push(cn=n?null:[])}function zf(){Qi.pop(),cn=Qi[Qi.length-1]||null}let _r=1;function fu(n,e=!1){_r+=n,n<0&&cn&&e&&(cn.hasOnce=!0)}function Gf(n){return n.dynamicChildren=_r>0?cn||Ts:null,zf(),_r>0&&cn&&cn.push(n),n}function Ke(n,e,t,i,s,r){return Gf(_(n,e,t,i,s,r,!0))}function Rm(n,e,t,i,s){return Gf(di(n,e,t,i,s,!0))}function Wf(n){return n?n.__v_isVNode===!0:!1}function Vs(n,e){return n.type===e.type&&n.key===e.key}const Xf=({key:n})=>n??null,pa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Rt(n)||jt(n)||je(n)?{i:vn,r:n,k:e,f:!!t}:n:null);function _(n,e=null,t=null,i=0,s=null,r=n===_t?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Xf(e),ref:e&&pa(e),scopeId:vf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:vn};return o?(Aa(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Rt(t)?8:16),_r>0&&!a&&cn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&cn.push(l),l}const di=Cm;function Cm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===tm)&&(n=vi),Wf(n)){const o=Ls(n,e,!0);return t&&Aa(o,t),_r>0&&!r&&cn&&(o.shapeFlag&6?cn[cn.indexOf(n)]=o:cn.push(o)),o.patchFlag=-2,o}if(km(n)&&(n=n.__vccOpts),e){e=Pm(e);let{class:o,style:l}=e;o&&!Rt(o)&&(e.class=Dt(o)),xt(l)&&(pc(l)&&!$e(l)&&(l=Yt({},l)),e.style=Gt(l))}const a=Rt(n)?1:Vf(n)?128:qa(n)?64:xt(n)?4:je(n)?2:0;return _(n,e,t,i,s,a,r,!0)}function Pm(n){return n?pc(n)||Lf(n)?Yt({},n):n:null}function Ls(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?Dm(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Xf(c),ref:e&&e.ref?t&&r?$e(r)?r.concat(pa(e)):[r,pa(e)]:pa(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==_t?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ls(n.ssContent),ssFallback:n.ssFallback&&Ls(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&gc(u,l.clone(u)),u}function ot(n=" ",e=0){return di($a,null,n,e)}function Kt(n="",e=!1){return e?(Ye(),Rm(vi,null,n)):di(vi,null,n)}function Bn(n){return n==null||typeof n=="boolean"?di(vi):$e(n)?di(_t,null,n.slice()):Wf(n)?si(n):di($a,null,String(n))}function si(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ls(n)}function Aa(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if($e(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Aa(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Lf(e)?e._ctx=vn:s===3&&vn&&(vn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(je(e)){if(i&65){Aa(n,{default:e});return}e={default:e,_ctx:vn},t=32}else e=String(e),i&64?(t=16,e=[ot(e)]):t=8;n.children=e,n.shapeFlag|=t}function Dm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Dt([e.class,i.class]));else if(s==="style")e.style=Gt([e.style,i.style]);else if(ka(s)){const r=e[s],a=i[s];a&&r!==a&&!($e(r)&&r.includes(a))?e[s]=r?[].concat(r,a):a:a==null&&r==null&&!Va(s)&&(e[s]=a)}else s!==""&&(e[s]=i[s])}return e}function In(n,e,t,i=null){Pn(n,e,7,[t,i])}const Lm=wf();let Im=0;function Um(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Lm,r={uid:Im++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ap(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Uf(i,s),emitsOptions:Rf(i,s),emit:null,emitted:null,propsDefaults:Mt,inheritAttrs:i.inheritAttrs,ctx:Mt,data:Mt,props:Mt,attrs:Mt,slots:Mt,refs:Mt,setupState:Mt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=dm.bind(null,r),n.ce&&n.ce(r),r}let Qt=null;const Nm=()=>Qt||vn;let wa,vr;{const n=Wa(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};wa=e("__VUE_INSTANCE_SETTERS__",t=>Qt=t),vr=e("__VUE_SSR_SETTERS__",t=>xr=t)}const Ar=n=>{const e=Qt;return wa(n),n.scope.on(),()=>{n.scope.off(),wa(e)}},hu=()=>{Qt&&Qt.scope.off(),wa(null)};function Yf(n){return n.vnode.shapeFlag&4}let xr=!1;function Fm(n,e=!1,t=!1){e&&vr(e);const{props:i,children:s}=n.vnode,r=Yf(n);_m(n,i,r,e),Mm(n,s,t||e);const a=r?Om(n,e):void 0;return e&&vr(!1),a}function Om(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,nm);const{setup:i}=t;if(i){mi();const s=n.setupContext=i.length>1?Hm(n):null,r=Ar(n),a=Tr(i,n,0,[n.props,s]),o=zd(a);if(gi(),r(),(o||n.sp)&&!cr(n)&&bf(n),o){if(a.then(hu,hu),e)return a.then(l=>{vr(!0);try{pu(n,l,e)}finally{vr(!1)}}).catch(l=>{Ya(l,n,0)});n.asyncDep=a}else pu(n,a)}else qf(n)}function pu(n,e,t){je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:xt(e)&&(n.setupState=ff(e)),qf(n)}function qf(n,e,t){const i=n.type;n.render||(n.render=i.render||Gn);{const s=Ar(n);mi();try{im(n)}finally{gi(),s()}}}const Bm={get(n,e){return Wt(n,"get",""),n[e]}};function Hm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Bm),slots:n.slots,emit:n.emit,expose:e}}function Ja(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ff(Ap(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ur)return ur[t](n)},has(e,t){return t in e||t in ur}})):n.proxy}function km(n){return je(n)&&"__vccOpts"in n}const Vm=(n,e)=>Pp(n,e,xr),zm="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let dl;const mu=typeof window<"u"&&window.trustedTypes;if(mu)try{dl=mu.createPolicy("vue",{createHTML:n=>n})}catch{}const Kf=dl?n=>dl.createHTML(n):n=>n,Gm="http://www.w3.org/2000/svg",Wm="http://www.w3.org/1998/Math/MathML",ni=typeof document<"u"?document:null,gu=ni&&ni.createElement("template"),Xm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?ni.createElementNS(Gm,n):e==="mathml"?ni.createElementNS(Wm,n):t?ni.createElement(n,{is:t}):ni.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ni.createTextNode(n),createComment:n=>ni.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ni.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{gu.innerHTML=Kf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=gu.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ym=Symbol("_vtc");function qm(n,e,t){const i=n[Ym];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ra=Symbol("_vod"),Zf=Symbol("_vsh"),Km={name:"show",beforeMount(n,{value:e},{transition:t}){n[Ra]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):zs(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),zs(n,!0),i.enter(n)):i.leave(n,()=>{zs(n,!1)}):zs(n,e))},beforeUnmount(n,{value:e}){zs(n,e)}};function zs(n,e){n.style.display=e?n[Ra]:"none",n[Zf]=!e}const Zm=Symbol(""),$m=/(?:^|;)\s*display\s*:/;function Jm(n,e,t){const i=n.style,s=Rt(t);let r=!1;if(t&&!s){if(e)if(Rt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&er(i,o,"")}else for(const a in e)t[a]==null&&er(i,a,"");for(const a in t){a==="display"&&(r=!0);const o=t[a];o!=null?jm(n,a,!Rt(e)&&e?e[a]:void 0,o)||er(i,a,o):er(i,a,"")}}else if(s){if(e!==t){const a=i[Zm];a&&(t+=";"+a),i.cssText=t,r=$m.test(t)}}else e&&n.removeAttribute("style");Ra in n&&(n[Ra]=r?i.display:"",n[Zf]&&(i.display="none"))}const _u=/\s*!important$/;function er(n,e,t){if($e(t))t.forEach(i=>er(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Qm(n,e);_u.test(t)?n.setProperty(Oi(i),t.replace(_u,""),"important"):n[i]=t}}const vu=["Webkit","Moz","ms"],mo={};function Qm(n,e){const t=mo[e];if(t)return t;let i=An(e);if(i!=="filter"&&i in n)return mo[e]=i;i=Xd(i);for(let s=0;s<vu.length;s++){const r=vu[s]+i;if(r in n)return mo[e]=r}return e}function jm(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Rt(i)&&t===i}const xu="http://www.w3.org/1999/xlink";function Su(n,e,t,i,s,r=sp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(xu,e.slice(6,e.length)):n.setAttributeNS(xu,e,t):t==null||r&&!qd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Xn(t)?String(t):t)}function Mu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Kf(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=qd(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function li(n,e,t,i){n.addEventListener(e,t,i)}function eg(n,e,t,i){n.removeEventListener(e,t,i)}const bu=Symbol("_vei");function tg(n,e,t,i,s=null){const r=n[bu]||(n[bu]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=sg(e);if(i){const c=r[e]=og(i,s);li(n,o,c,l)}else a&&(eg(n,o,a,l),r[e]=void 0)}}const ng=/(Once|Passive|Capture)$/,ig=/^on:?(?:Once|Passive|Capture)$/;function sg(n){let e,t;for(;(t=n.match(ng))&&!ig.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Oi(n.slice(2)),e]}let go=0;const rg=Promise.resolve(),ag=()=>go||(rg.then(()=>go=0),go=Date.now());function og(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if($e(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const a=s.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&Pn(c,e,5,o)}}else Pn(s,e,5,[i])};return t.value=n,t.attached=ag(),t}const yu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,lg=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?qm(n,i,a):e==="style"?Jm(n,t,i):ka(e)?Va(e)||tg(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cg(n,e,i,a))?(Mu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Su(n,e,i,a,r,e!=="value")):n._isVueCE&&(ug(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Rt(i)))?Mu(n,An(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Su(n,e,i,a))};function cg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&yu(e)&&je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return yu(e)&&Rt(t)?!1:e in n}function ug(n,e){const t=n._def.props;if(!t)return!1;const i=An(e);return Array.isArray(t)?t.some(s=>An(s)===i):Object.keys(t).some(s=>An(s)===i)}const Fi=n=>{const e=n.props["onUpdate:modelValue"]||!1;return $e(e)?t=>fa(e,t):e};function dg(n){n.target.composing=!0}function Eu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const un=Symbol("_assign"),Fr=Symbol("_initialValue");function _o(n,e,t){return e&&(n=n.trim()),t&&(n=Ga(n)),n}const gt={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n.parentNode&&(n.type==="text"?n[Fr]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Fr]=n.defaultValue.replace(/\r\n?/g,`
`))),n[un]=Fi(s);const r=i||s.props&&s.props.type==="number";li(n,e?"change":"input",a=>{a.target.composing||n[un](_o(n.value,t,r))}),(t||r)&&li(n,"change",()=>{n.value=_o(n.value,t,r)}),e||(li(n,"compositionstart",dg),li(n,"compositionend",Eu),li(n,"change",Eu))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const s=e??"",r=n[Fr];delete n[Fr],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[un](_o(n.value,t,i)):n.value=s},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},a){if(n[un]=Fi(a),n.composing)return;const o=(r||n.type==="number")&&!/^0\d/.test(n.value)?Ga(n.value):n.value,l=e??"";if(o===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},fg={deep:!0,created(n,e,t){n[un]=Fi(t),li(n,"change",()=>{const i=n._modelValue,s=Is(n),r=n.checked,a=n[un];if($e(i)){const o=oc(i,s),l=o!==-1;if(r&&!l)a(i.concat(s));else if(!r&&l){const c=[...i];c.splice(o,1),a(c)}}else if(Fs(i)){const o=new Set(i);r?o.add(s):o.delete(s),a(o)}else a($f(n,r))})},mounted:Tu,beforeUpdate(n,e,t){n[un]=Fi(t),Tu(n,e,t)}};function Tu(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if($e(e))s=oc(e,i.props.value)>-1;else if(Fs(e))s=e.has(i.props.value);else{if(e===t)return;s=Ui(e,$f(n,!0))}n.checked!==s&&(n.checked=s)}const hg={created(n,{value:e},t){n.checked=Ui(e,t.props.value),n[un]=Fi(t),li(n,"change",()=>{n[un](Is(n))})},beforeUpdate(n,{value:e,oldValue:t},i){n[un]=Fi(i),e!==t&&(n.checked=Ui(e,i.props.value))}},pg={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,li(n,"change",()=>{const s=Array.prototype.filter.call(n.options,r=>r.selected).map(r=>t?Ga(Is(r)):Is(r));n[un](n.multiple?Fs(n._modelValue)?new Set(s):s:s[0]),n._assigning=!0,pf(()=>{n._assigning=!1})}),n[un]=Fi(i)},mounted(n,{value:e}){Au(n,e)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[un]=Fi(t)},updated(n,{value:e}){n._assigning||Au(n,e)}};function Au(n,e){const t=n.multiple,i=$e(e);if(!(t&&!i&&!Fs(e))){for(let s=0,r=n.options.length;s<r;s++){const a=n.options[s],o=Is(a);if(t)if(i){const l=typeof o;l==="string"||l==="number"?a.selected=e.some(c=>String(c)===String(o)):a.selected=oc(e,o)>-1}else a.selected=e.has(o);else if(Ui(Is(a),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Is(n){return"_value"in n?n._value:n.value}function $f(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const mg={created(n,e,t){Or(n,e,t,null,"created")},mounted(n,e,t){Or(n,e,t,null,"mounted")},beforeUpdate(n,e,t,i){Or(n,e,t,i,"beforeUpdate")},updated(n,e,t,i){Or(n,e,t,i,"updated")}};function gg(n,e){switch(n){case"SELECT":return pg;case"TEXTAREA":return gt;default:switch(e){case"checkbox":return fg;case"radio":return hg;default:return gt}}}function Or(n,e,t,i,s){const a=gg(n.tagName,t.props&&t.props.type)[s];a&&a(n,e,t,i)}const _g=["ctrl","shift","alt","meta"],vg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>_g.some(t=>n[`${t}Key`]&&!e.includes(t))},Sn=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let a=0;a<e.length;a++){const o=vg[e[a]];if(o&&o(s,e))return}return n(s,...r)})},xg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Br=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=s=>{if(!("key"in s))return;const r=Oi(s.key);if(e.some(a=>a===r||xg[a]===r))return n(s)})},Sg=Yt({patchProp:lg},Xm);let wu;function Mg(){return wu||(wu=ym(Sg))}const bg=(...n)=>{const e=Mg().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Eg(i);if(!s)return;const r=e._component;!je(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,yg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function yg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Eg(n){return Rt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sc="186",Tg=0,Ru=1,Ag=2,ma=1,wg=2,tr=3,ji=0,an=1,ci=2,fi=0,dr=1,ii=2,Cu=3,Pu=4,Rg=5,Ms=100,Cg=101,Pg=102,Dg=103,Lg=104,Ig=200,Ug=201,Ng=202,Fg=203,Jf=204,Qf=205,Og=206,Bg=207,Hg=208,kg=209,Vg=210,zg=211,Gg=212,Wg=213,Xg=214,fl=0,hl=1,pl=2,Sr=3,ml=4,gl=5,_l=6,vl=7,jf=0,Yg=1,qg=2,Wn=0,eh=1,th=2,nh=3,ih=4,sh=5,rh=6,ah=7,oh=300,es=301,Us=302,vo=303,xo=304,Qa=306,xl=1e3,ui=1001,Sl=1002,Bt=1003,Kg=1004,Hr=1005,Xt=1006,So=1007,Ki=1008,_n=1009,lh=1010,ch=1011,Mr=1012,Mc=1013,Yn=1014,Vn=1015,qn=1016,bc=1017,yc=1018,br=1020,uh=35902,dh=35899,fh=1021,hh=1022,Tn=1023,xi=1026,Zi=1027,ph=1028,Ec=1029,ts=1030,Tc=1031,Ac=1033,ga=33776,_a=33777,va=33778,xa=33779,Ml=35840,bl=35841,yl=35842,El=35843,Tl=36196,Al=37492,wl=37496,Rl=37488,Cl=37489,Ca=37490,Pl=37491,Dl=37808,Ll=37809,Il=37810,Ul=37811,Nl=37812,Fl=37813,Ol=37814,Bl=37815,Hl=37816,kl=37817,Vl=37818,zl=37819,Gl=37820,Wl=37821,Xl=36492,Yl=36494,ql=36495,Kl=36283,Zl=36284,Pa=36285,$l=36286,Zg=3200,Du=0,$g=1,Ii="",mn="srgb",Da="srgb-linear",La="linear",ht="srgb",Mo=7680,Jg=519,Qg=512,jg=513,e0=514,wc=515,t0=516,n0=517,Rc=518,i0=519,s0=35044,Lu="300 es",zn=2e3,Ia=2001;function r0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ua(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function a0(){const n=Ua("canvas");return n.style.display="block",n}const Iu={};function Uu(...n){const e="THREE."+n.shift();console.log(e,...n)}function mh(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ze(...n){n=mh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function lt(...n){n=mh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Cs(...n){const e=n.join(" ");e in Iu||(Iu[e]=!0,Ze(...n))}function o0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const l0={[fl]:hl,[pl]:_l,[ml]:vl,[Sr]:gl,[hl]:fl,[_l]:pl,[vl]:ml,[gl]:Sr};class is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bo=Math.PI/180,Jl=180/Math.PI;function wr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function c0(n,e){return(n%e+e)%e}function yo(n,e,t){return(1-t)*n+t*e}function Gs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Fc=class Fc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fc.prototype.isVector2=!0;let rt=Fc;class Os{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],d=r[a+0],h=r[a+1],v=r[a+2],b=r[a+3];if(f!==b||l!==d||c!==h||u!==v){let m=l*d+c*h+u*v+f*b;m<0&&(d=-d,h=-h,v=-v,b=-b,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),P=Math.sin(y);p=Math.sin(p*y)/P,o=Math.sin(o*y)/P,l=l*p+d*o,c=c*p+h*o,u=u*p+v*o,f=f*p+b*o}else{l=l*p+d*o,c=c*p+h*o,u=u*p+v*o,f=f*p+b*o;const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],d=r[a+1],h=r[a+2],v=r[a+3];return e[t]=o*v+u*f+l*h-c*d,e[t+1]=l*v+u*d+c*f-o*h,e[t+2]=c*v+u*h+o*d-l*f,e[t+3]=u*v-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),d=l(i/2),h=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*h*v,this._y=c*h*f-d*u*v,this._z=c*u*v+d*h*f,this._w=c*u*f-d*h*v;break;case"YXZ":this._x=d*u*f+c*h*v,this._y=c*h*f-d*u*v,this._z=c*u*v-d*h*f,this._w=c*u*f+d*h*v;break;case"ZXY":this._x=d*u*f-c*h*v,this._y=c*h*f+d*u*v,this._z=c*u*v+d*h*f,this._w=c*u*f-d*h*v;break;case"ZYX":this._x=d*u*f-c*h*v,this._y=c*h*f+d*u*v,this._z=c*u*v-d*h*f,this._w=c*u*f+d*h*v;break;case"YZX":this._x=d*u*f+c*h*v,this._y=c*h*f+d*u*v,this._z=c*u*v-d*h*f,this._w=c*u*f-d*h*v;break;case"XZY":this._x=d*u*f-c*h*v,this._y=c*h*f-d*u*v,this._z=c*u*v+d*h*f,this._w=c*u*f+d*h*v;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(a-s)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(r-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(a-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Oc=class Oc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eo.copy(this).projectOnVector(e),this.sub(Eo)}reflect(e){return this.sub(Eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Oc.prototype.isVector3=!0;let H=Oc;const Eo=new H,Nu=new Os,Bc=class Bc{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],v=i[8],b=s[0],m=s[3],p=s[6],y=s[1],P=s[4],S=s[7],T=s[2],A=s[5],D=s[8];return r[0]=a*b+o*y+l*T,r[3]=a*m+o*P+l*A,r[6]=a*p+o*S+l*D,r[1]=c*b+u*y+f*T,r[4]=c*m+u*P+f*A,r[7]=c*p+u*S+f*D,r[2]=d*b+h*y+v*T,r[5]=d*m+h*P+v*A,r[8]=d*p+h*S+v*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*r,h=c*r-a*l,v=t*f+i*d+s*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/v;return e[0]=f*b,e[1]=(s*c-u*i)*b,e[2]=(o*i-s*a)*b,e[3]=d*b,e[4]=(u*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=h*b,e[7]=(i*l-c*t)*b,e[8]=(a*t-i*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(To.makeScale(e,t)),this}rotate(e){return Cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(To.makeRotation(-e)),this}translate(e,t){return Cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(To.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Bc.prototype.isMatrix3=!0;let Je=Bc;const To=new Je,Fu=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ou=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function u0(){const n={enabled:!0,workingColorSpace:Da,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ht&&(s.r=hi(s.r),s.g=hi(s.g),s.b=hi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(s.r=Ps(s.r),s.g=Ps(s.g),s.b=Ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?La:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Da]:{primaries:e,whitePoint:i,transfer:La,toXYZ:Fu,fromXYZ:Ou,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:Fu,fromXYZ:Ou,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),n}const st=u0();function hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ps(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let os;class d0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{os===void 0&&(os=Ua("canvas")),os.width=e.width,os.height=e.height;const s=os.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=os}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ua("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hi(t[i]/255)*255):t[i]=hi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let f0=0;class Cc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=wr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ao(s[a].image)):r.push(Ao(s[a]))}else r=Ao(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ao(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?d0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}let h0=0;const wo=new H;class en extends is{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,i=ui,s=ui,r=Xt,a=Ki,o=Tn,l=_n,c=en.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=wr(),this.name="",this.source=new Cc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wo).x}get height(){return this.source.getSize(wo).y}get depth(){return this.source.getSize(wo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xl:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case Sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xl:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case Sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=oh;en.DEFAULT_ANISOTROPY=1;const Hc=class Hc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],v=l[9],b=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-b)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+b)<.1&&Math.abs(v+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(c+1)/2,S=(h+1)/2,T=(p+1)/2,A=(u+d)/4,D=(f+b)/4,x=(v+m)/4;return P>S&&P>T?P<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(P),s=A/i,r=D/i):S>T?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=A/s,r=x/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=D/r,s=x/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-v)*(m-v)+(f-b)*(f-b)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(f-b)/y,this.z=(d-u)/y,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hc.prototype.isVector4=!0;let wt=Hc;class p0 extends is{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new en(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Cc(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends p0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class gh extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class m0 extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ha=class Ha{constructor(e,t,i,s,r,a,o,l,c,u,f,d,h,v,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,f,d,h,v,b,m)}set(e,t,i,s,r,a,o,l,c,u,f,d,h,v,b,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=v,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ha().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ls.setFromMatrixColumn(e,0).length(),r=1/ls.setFromMatrixColumn(e,1).length(),a=1/ls.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*u,h=a*f,v=o*u,b=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+v*c,t[5]=d-b*c,t[9]=-o*l,t[2]=b-d*c,t[6]=v+h*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,v=c*u,b=c*f;t[0]=d+b*o,t[4]=v*o-h,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-v,t[6]=b+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,v=c*u,b=c*f;t[0]=d-b*o,t[4]=-a*f,t[8]=v+h*o,t[1]=h+v*o,t[5]=a*u,t[9]=b-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,h=a*f,v=o*u,b=o*f;t[0]=l*u,t[4]=v*c-h,t[8]=d*c+b,t[1]=l*f,t[5]=b*c+d,t[9]=h*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*c,v=o*l,b=o*c;t[0]=l*u,t[4]=b-d*f,t[8]=v*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*f+v,t[10]=d-b*f}else if(e.order==="XZY"){const d=a*l,h=a*c,v=o*l,b=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+b,t[5]=a*u,t[9]=h*f-v,t[2]=v*f-h,t[6]=o*u,t[10]=b*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(g0,e,_0)}lookAt(e,t,i){const s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),Ei.crossVectors(i,on),Ei.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Ei.crossVectors(i,on)),Ei.normalize(),kr.crossVectors(on,Ei),s[0]=Ei.x,s[4]=kr.x,s[8]=on.x,s[1]=Ei.y,s[5]=kr.y,s[9]=on.y,s[2]=Ei.z,s[6]=kr.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],v=i[2],b=i[6],m=i[10],p=i[14],y=i[3],P=i[7],S=i[11],T=i[15],A=s[0],D=s[4],x=s[8],w=s[12],L=s[1],F=s[5],G=s[9],q=s[13],B=s[2],W=s[6],ee=s[10],V=s[14],ie=s[3],J=s[7],j=s[11],re=s[15];return r[0]=a*A+o*L+l*B+c*ie,r[4]=a*D+o*F+l*W+c*J,r[8]=a*x+o*G+l*ee+c*j,r[12]=a*w+o*q+l*V+c*re,r[1]=u*A+f*L+d*B+h*ie,r[5]=u*D+f*F+d*W+h*J,r[9]=u*x+f*G+d*ee+h*j,r[13]=u*w+f*q+d*V+h*re,r[2]=v*A+b*L+m*B+p*ie,r[6]=v*D+b*F+m*W+p*J,r[10]=v*x+b*G+m*ee+p*j,r[14]=v*w+b*q+m*V+p*re,r[3]=y*A+P*L+S*B+T*ie,r[7]=y*D+P*F+S*W+T*J,r[11]=y*x+P*G+S*ee+T*j,r[15]=y*w+P*q+S*V+T*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],v=e[3],b=e[7],m=e[11],p=e[15],y=l*h-c*d,P=o*h-c*f,S=o*d-l*f,T=a*h-c*u,A=a*d-l*u,D=a*f-o*u;return t*(b*y-m*P+p*S)-i*(v*y-m*T+p*A)+s*(v*P-b*T+p*D)-r*(v*S-b*A+m*D)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],v=e[12],b=e[13],m=e[14],p=e[15],y=t*o-i*a,P=t*l-s*a,S=t*c-r*a,T=i*l-s*o,A=i*c-r*o,D=s*c-r*l,x=u*b-f*v,w=u*m-d*v,L=u*p-h*v,F=f*m-d*b,G=f*p-h*b,q=d*p-h*m,B=y*q-P*G+S*F+T*L-A*w+D*x;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/B;return e[0]=(o*q-l*G+c*F)*W,e[1]=(s*G-i*q-r*F)*W,e[2]=(b*D-m*A+p*T)*W,e[3]=(d*A-f*D-h*T)*W,e[4]=(l*L-a*q-c*w)*W,e[5]=(t*q-s*L+r*w)*W,e[6]=(m*S-v*D-p*P)*W,e[7]=(u*D-d*S+h*P)*W,e[8]=(a*G-o*L+c*x)*W,e[9]=(i*L-t*G-r*x)*W,e[10]=(v*A-b*S+p*y)*W,e[11]=(f*S-u*A-h*y)*W,e[12]=(o*w-a*F-l*x)*W,e[13]=(t*F-i*w+s*x)*W,e[14]=(b*P-v*T-m*y)*W,e[15]=(u*T-f*P+d*y)*W,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,d=r*c,h=r*u,v=r*f,b=a*u,m=a*f,p=o*f,y=l*c,P=l*u,S=l*f,T=i.x,A=i.y,D=i.z;return s[0]=(1-(b+p))*T,s[1]=(h+S)*T,s[2]=(v-P)*T,s[3]=0,s[4]=(h-S)*A,s[5]=(1-(d+p))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(v+P)*D,s[9]=(m-y)*D,s[10]=(1-(d+b))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=ls.set(s[0],s[1],s[2]).length();const o=ls.set(s[4],s[5],s[6]).length(),l=ls.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Mn.copy(this);const c=1/a,u=1/o,f=1/l;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,t.setFromRotationMatrix(Mn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=zn,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s);let v,b;if(l)v=r/(a-r),b=a*r/(a-r);else if(o===zn)v=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Ia)v=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=zn,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-s),d=-(t+e)/(t-e),h=-(i+s)/(i-s);let v,b;if(l)v=1/(a-r),b=a/(a-r);else if(o===zn)v=-2/(a-r),b=-(a+r)/(a-r);else if(o===Ia)v=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ha.prototype.isMatrix4=!0;let At=Ha;const ls=new H,Mn=new At,g0=new H(0,0,0),_0=new H(1,1,1),Ei=new H,kr=new H,on=new H,Bu=new At,Hu=new Os;class ns{constructor(e=0,t=0,i=0,s=ns.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hu.setFromEuler(this),this.setFromQuaternion(Hu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ns.DEFAULT_ORDER="XYZ";class _h{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let v0=0;const ku=new H,cs=new Os,$n=new At,Vr=new H,Ws=new H,x0=new H,S0=new Os,Vu=new H(1,0,0),zu=new H(0,1,0),Gu=new H(0,0,1),Wu={type:"added"},M0={type:"removed"},us={type:"childadded",child:null},Ro={type:"childremoved",child:null};class tn extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new H,t=new ns,i=new Os,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new Je}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(Vu,e)}rotateY(e){return this.rotateOnAxis(zu,e)}rotateZ(e){return this.rotateOnAxis(Gu,e)}translateOnAxis(e,t){return ku.copy(e).applyQuaternion(this.quaternion),this.position.add(ku.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vu,e)}translateY(e){return this.translateOnAxis(zu,e)}translateZ(e){return this.translateOnAxis(Gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Vr.copy(e):Vr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Ws,Vr,this.up):$n.lookAt(Vr,Ws,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),cs.setFromRotationMatrix($n),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wu),us.child=e,this.dispatchEvent(us),us.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(M0),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wu),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,x0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,S0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),v.length>0&&(i.nodes=v)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}tn.DEFAULT_UP=new H(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zr extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const b0={type:"move"};class Co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,i),p=this._getHandJoint(c,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,v=.005;c.inputState.pinching&&d>h+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(b0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function Po(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ct{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=c0(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Po(a,r,e+1/3),this.g=Po(a,r,e),this.b=Po(a,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=mn){function i(r){r!==void 0&&parseFloat(r)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){const i=vh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return st.workingToColorSpace(zt.copy(this),e),Math.round(it(zt.r*255,0,255))*65536+Math.round(it(zt.g*255,0,255))*256+Math.round(it(zt.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(zt.copy(this),t);const i=zt.r,s=zt.g,r=zt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=mn){st.workingToColorSpace(zt.copy(this),e);const t=zt.r,i=zt.g,s=zt.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(Gr);const i=yo(Ti.h,Gr.h,t),s=yo(Ti.s,Gr.s,t),r=yo(Ti.l,Gr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new ct;ct.NAMES=vh;class y0 extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bn=new H,Jn=new H,Do=new H,Qn=new H,ds=new H,fs=new H,Xu=new H,Lo=new H,Io=new H,Uo=new H,No=new wt,Fo=new wt,Oo=new wt;class En{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),bn.subVectors(e,t),s.cross(bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){bn.subVectors(s,t),Jn.subVectors(i,t),Do.subVectors(e,t);const a=bn.dot(bn),o=bn.dot(Jn),l=bn.dot(Do),c=Jn.dot(Jn),u=Jn.dot(Do),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,h=(c*l-o*u)*d,v=(a*u-o*l)*d;return r.set(1-h-v,v,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(o,Qn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return No.setScalar(0),Fo.setScalar(0),Oo.setScalar(0),No.fromBufferAttribute(e,t),Fo.fromBufferAttribute(e,i),Oo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(No,r.x),a.addScaledVector(Fo,r.y),a.addScaledVector(Oo,r.z),a}static isFrontFacing(e,t,i,s){return bn.subVectors(i,t),Jn.subVectors(e,t),bn.cross(Jn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),bn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return En.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;ds.subVectors(s,i),fs.subVectors(r,i),Lo.subVectors(e,i);const l=ds.dot(Lo),c=fs.dot(Lo);if(l<=0&&c<=0)return t.copy(i);Io.subVectors(e,s);const u=ds.dot(Io),f=fs.dot(Io);if(u>=0&&f<=u)return t.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ds,a);Uo.subVectors(e,r);const h=ds.dot(Uo),v=fs.dot(Uo);if(v>=0&&h<=v)return t.copy(r);const b=h*c-l*v;if(b<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(fs,o);const m=u*v-h*f;if(m<=0&&f-u>=0&&h-v>=0)return Xu.subVectors(r,s),o=(f-u)/(f-u+(h-v)),t.copy(s).addScaledVector(Xu,o);const p=1/(m+b+d);return a=b*p,o=d*p,t.copy(i).addScaledVector(ds,a).addScaledVector(fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Rr{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wr.copy(i.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),Xr.subVectors(this.max,Xs),hs.subVectors(e.a,Xs),ps.subVectors(e.b,Xs),ms.subVectors(e.c,Xs),Ai.subVectors(ps,hs),wi.subVectors(ms,ps),Vi.subVectors(hs,ms);let t=[0,-Ai.z,Ai.y,0,-wi.z,wi.y,0,-Vi.z,Vi.y,Ai.z,0,-Ai.x,wi.z,0,-wi.x,Vi.z,0,-Vi.x,-Ai.y,Ai.x,0,-wi.y,wi.x,0,-Vi.y,Vi.x,0];return!Bo(t,hs,ps,ms,Xr)||(t=[1,0,0,0,1,0,0,0,1],!Bo(t,hs,ps,ms,Xr))?!1:(Yr.crossVectors(Ai,wi),t=[Yr.x,Yr.y,Yr.z],Bo(t,hs,ps,ms,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const jn=[new H,new H,new H,new H,new H,new H,new H,new H],yn=new H,Wr=new Rr,hs=new H,ps=new H,ms=new H,Ai=new H,wi=new H,Vi=new H,Xs=new H,Xr=new H,Yr=new H,zi=new H;function Bo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){zi.fromArray(n,r);const o=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),l=e.dot(zi),c=t.dot(zi),u=i.dot(zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const It=new H,qr=new rt;let E0=0;class pi extends is{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:E0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=s0,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)qr.fromBufferAttribute(this,t),qr.applyMatrix3(e),this.setXY(t,qr.x,qr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gs(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gs(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gs(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class xh extends pi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Sh extends pi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ct extends pi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const T0=new Rr,Ys=new H,Ho=new H;class Cr{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):T0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const t=Ys.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ys,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ho.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(Ho)),this.expandByPoint(Ys.copy(e.center).sub(Ho))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let A0=0;const hn=new At,ko=new tn,gs=new H,ln=new Rr,qs=new Rr,Ft=new H;class Ht extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(r0(e)?Sh:xh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,i){return hn.makeTranslation(e,t,i),this.applyMatrix4(hn),this}scale(e,t,i){return hn.makeScale(e,t,i),this.applyMatrix4(hn),this}lookAt(e){return ko.lookAt(e),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ct(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(ln.min,qs.min),ln.expandByPoint(Ft),Ft.addVectors(ln.max,qs.max),ln.expandByPoint(Ft)):(ln.expandByPoint(qs.min),ln.expandByPoint(qs.max))}ln.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ft.fromBufferAttribute(o,c),l&&(gs.fromBufferAttribute(e,c),Ft.add(gs)),s=Math.max(s,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new pi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new H,l[x]=new H;const c=new H,u=new H,f=new H,d=new rt,h=new rt,v=new rt,b=new H,m=new H;function p(x,w,L){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,L),d.fromBufferAttribute(r,x),h.fromBufferAttribute(r,w),v.fromBufferAttribute(r,L),u.sub(c),f.sub(c),h.sub(d),v.sub(d);const F=1/(h.x*v.y-v.x*h.y);isFinite(F)&&(b.copy(u).multiplyScalar(v.y).addScaledVector(f,-h.y).multiplyScalar(F),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-v.x).multiplyScalar(F),o[x].add(b),o[w].add(b),o[L].add(b),l[x].add(m),l[w].add(m),l[L].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,w=y.length;x<w;++x){const L=y[x],F=L.start,G=L.count;for(let q=F,B=F+G;q<B;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const P=new H,S=new H,T=new H,A=new H;function D(x){T.fromBufferAttribute(s,x),A.copy(T);const w=o[x];P.copy(w),P.sub(T.multiplyScalar(T.dot(w))).normalize(),S.crossVectors(A,w);const F=S.dot(l[x])<0?-1:1;a.setXYZW(x,P.x,P.y,P.z,F)}for(let x=0,w=y.length;x<w;++x){const L=y[x],F=L.start,G=L.count;for(let q=F,B=F+G;q<B;q+=3)D(e.getX(q+0)),D(e.getX(q+1)),D(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new pi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let d=0,h=e.count;d<h;d+=3){const v=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,v=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?h=l[b]*o.data.stride+o.offset:h=l[b]*u;for(let p=0;p<u;p++)d[v++]=c[h++]}return new pi(d,u,f)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vo=new H,w0=new H,R0=new Je;class Di{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Vo.subVectors(i,t).cross(w0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Vo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||R0.getNormalMatrix(e),s=this.coplanarPoint(Vo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let C0=0;class Bs extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=wr(),this.name="",this.type="Material",this.blending=dr,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jf,this.blendDst=Qf,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mo,this.stencilZFail=Mo,this.stencilZPass=Mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ct().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Di().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new rt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ei=new H,zo=new H,Kr=new H,Zr=new H;class Pc{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){zo.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),Zr.copy(this.origin).sub(zo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Kr),o=Zr.dot(this.direction),l=-Zr.dot(Kr),c=Zr.lengthSq(),u=Math.abs(1-a*a);let f,d,h,v;if(u>0)if(f=a*l-o,d=a*o-l,v=r*u,f>=0)if(d>=-v)if(d<=v){const b=1/u;f*=b,d*=b,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(zo).addScaledVector(Kr,d),h}intersectSphere(e,t){if(e.radius<0)return null;ei.subVectors(e.center,this.origin);const i=ei.dot(this.direction),s=ei.dot(ei)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,d=e.y-a.y,h=e.z-a.z,v=t.x-a.x,b=t.y-a.y,m=t.z-a.z,p=i.x-a.x,y=i.y-a.y,P=i.z-a.z,S=Math.abs(l),T=Math.abs(c),A=Math.abs(u);let D,x,w,L,F,G,q,B,W,ee,V,ie;if(S>=T&&S>=A?(w=l,G=f,W=v,ie=p,l>=0?(D=c,x=u,L=d,F=h,q=b,B=m,ee=y,V=P):(D=u,x=c,L=h,F=d,q=m,B=b,ee=P,V=y)):T>=A?(w=c,G=d,W=b,ie=y,c>=0?(D=u,x=l,L=h,F=f,q=m,B=v,ee=P,V=p):(D=l,x=u,L=f,F=h,q=v,B=m,ee=p,V=P)):(w=u,G=h,W=m,ie=P,u>=0?(D=l,x=c,L=f,F=d,q=v,B=b,ee=p,V=y):(D=c,x=l,L=d,F=f,q=b,B=v,ee=y,V=p)),w===0)return null;const J=D/w,j=x/w,re=1/w,Me=L-J*G,Fe=F-j*G,de=q-J*W,Oe=B-j*W,We=ee-J*ie,K=V-j*ie,se=We*Oe-K*de,ve=Me*K-Fe*We,ze=de*Fe-Oe*Me;if(s){if(se<0||ve<0||ze<0)return null}else if((se<0||ve<0||ze<0)&&(se>0||ve>0||ze>0))return null;const Pe=se+ve+ze;if(Pe===0)return null;const R=re*(se*G+ve*W+ze*ie);return(Pe>0?R<0:R>0)?null:this.at(R/Pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fr extends Bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=jf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yu=new At,Gi=new Pc,$r=new Cr,qu=new H,Jr=new H,Qr=new H,jr=new H,Go=new H,ea=new H,Ku=new H,ta=new H;class dn extends tn{constructor(e=new Ht,t=new fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Go.fromBufferAttribute(f,e),a?ea.addScaledVector(Go,u):ea.addScaledVector(Go.sub(t),u))}t.add(ea)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!($r.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere($r,qu)===null||Gi.origin.distanceToSquared(qu)>(e.far-e.near)**2))&&(Yu.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(Yu),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,b=d.length;v<b;v++){const m=d[v],p=a[m.materialIndex],y=Math.max(m.start,h.start),P=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let S=y,T=P;S<T;S+=3){const A=o.getX(S),D=o.getX(S+1),x=o.getX(S+2);s=na(this,p,e,i,c,u,f,A,D,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,h.start),b=Math.min(o.count,h.start+h.count);for(let m=v,p=b;m<p;m+=3){const y=o.getX(m),P=o.getX(m+1),S=o.getX(m+2);s=na(this,a,e,i,c,u,f,y,P,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,b=d.length;v<b;v++){const m=d[v],p=a[m.materialIndex],y=Math.max(m.start,h.start),P=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=y,T=P;S<T;S+=3){const A=S,D=S+1,x=S+2;s=na(this,p,e,i,c,u,f,A,D,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,h.start),b=Math.min(l.count,h.start+h.count);for(let m=v,p=b;m<p;m+=3){const y=m,P=m+1,S=m+2;s=na(this,a,e,i,c,u,f,y,P,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function P0(n,e,t,i,s,r,a,o){let l;if(e.side===an?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ji,o),l===null)return null;ta.copy(o),ta.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ta);return c<t.near||c>t.far?null:{distance:c,point:ta.clone(),object:n}}function na(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Jr),n.getVertexPosition(l,Qr),n.getVertexPosition(c,jr);const u=P0(n,e,t,i,Jr,Qr,jr,Ku);if(u){const f=new H;En.getBarycoord(Ku,Jr,Qr,jr,f),s&&(u.uv=En.getInterpolatedAttribute(s,o,l,c,f,new rt)),r&&(u.uv1=En.getInterpolatedAttribute(r,o,l,c,f,new rt)),a&&(u.normal=En.getInterpolatedAttribute(a,o,l,c,f,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new H,materialIndex:0};En.getNormal(Jr,Qr,jr,d.normal),u.face=d,u.barycoord=f}return u}class D0 extends en{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Bt,u=Bt,f,d){super(null,a,o,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wi=new Cr,L0=new rt(.5,.5),ia=new H;class Mh{constructor(e=new Di,t=new Di,i=new Di,s=new Di,r=new Di,a=new Di){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],h=r[7],v=r[8],b=r[9],m=r[10],p=r[11],y=r[12],P=r[13],S=r[14],T=r[15];if(s[0].setComponents(c-a,h-u,p-v,T-y).normalize(),s[1].setComponents(c+a,h+u,p+v,T+y).normalize(),s[2].setComponents(c+o,h+f,p+b,T+P).normalize(),s[3].setComponents(c-o,h-f,p-b,T-P).normalize(),i)s[4].setComponents(l,d,m,S).normalize(),s[5].setComponents(c-l,h-d,p-m,T-S).normalize();else if(s[4].setComponents(c-l,h-d,p-m,T-S).normalize(),t===zn)s[5].setComponents(c+l,h+d,p+m,T+S).normalize();else if(t===Ia)s[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){Wi.center.set(0,0,0);const t=L0.distanceTo(e.center);return Wi.radius=.7071067811865476+t,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ia.x=s.normal.x>0?e.max.x:e.min.x,ia.y=s.normal.y>0?e.max.y:e.min.y,ia.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ia)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ql extends Bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Na=new H,Fa=new H,Zu=new At,Ks=new Pc,sa=new Cr,Wo=new H,$u=new H;class bh extends tn{constructor(e=new Ht,t=new Ql){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Na.fromBufferAttribute(t,s-1),Fa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Na.distanceTo(Fa);e.setAttribute("lineDistance",new Ct(i,1))}else Ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(s),sa.radius+=r,e.ray.intersectsSphere(sa)===!1)return;Zu.copy(s).invert(),Ks.copy(e.ray).applyMatrix4(Zu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let b=h,m=v-1;b<m;b+=c){const p=u.getX(b),y=u.getX(b+1),P=ra(this,e,Ks,l,p,y,b);P&&t.push(P)}if(this.isLineLoop){const b=u.getX(v-1),m=u.getX(h),p=ra(this,e,Ks,l,b,m,v-1);p&&t.push(p)}}else{const h=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let b=h,m=v-1;b<m;b+=c){const p=ra(this,e,Ks,l,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){const b=ra(this,e,Ks,l,v-1,h,v-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ra(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Na.fromBufferAttribute(o,s),Fa.fromBufferAttribute(o,r),t.distanceSqToSegment(Na,Fa,Wo,$u)>i)return;Wo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Wo);if(!(c<e.near||c>e.far))return{distance:c,point:$u.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Ju=new H,Qu=new H;class I0 extends bh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Ju.fromBufferAttribute(t,s),Qu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ju.distanceTo(Qu);e.setAttribute("lineDistance",new Ct(i,1))}else Ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jl extends Bs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ju=new At,ec=new Pc,aa=new Cr,oa=new H;class U0 extends tn{constructor(e=new Ht,t=new jl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(s),aa.radius+=r,e.ray.intersectsSphere(aa)===!1)return;ju.copy(s).invert(),ec.copy(e.ray).applyMatrix4(ju);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let v=d,b=h;v<b;v++){const m=c.getX(v);oa.fromBufferAttribute(f,m),ed(oa,m,l,s,e,t,this)}}else{const d=Math.max(0,a.start),h=Math.min(f.count,a.start+a.count);for(let v=d,b=h;v<b;v++)oa.fromBufferAttribute(f,v),ed(oa,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ed(n,e,t,i,s,r,a){const o=ec.distanceSqToPoint(n);if(o<t){const l=new H;ec.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class yh extends en{constructor(e=[],t=es,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yr extends en{constructor(e,t,i=Yn,s,r,a,o=Bt,l=Bt,c,u=xi,f=1){if(u!==xi&&u!==Zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class N0 extends yr{constructor(e,t=Yn,i=es,s,r,a=Bt,o=Bt,l,c=xi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Eh extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Pr extends Ht{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,h=0;v("z","y","x",-1,-1,i,t,e,a,r,0),v("z","y","x",1,-1,i,t,-e,a,r,1),v("x","z","y",1,1,e,i,t,s,a,2),v("x","z","y",1,-1,e,i,-t,s,a,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(f,2));function v(b,m,p,y,P,S,T,A,D,x,w){const L=S/D,F=T/x,G=S/2,q=T/2,B=A/2,W=D+1,ee=x+1;let V=0,ie=0;const J=new H;for(let j=0;j<ee;j++){const re=j*F-q;for(let Me=0;Me<W;Me++){const Fe=Me*L-G;J[b]=Fe*y,J[m]=re*P,J[p]=B,c.push(J.x,J.y,J.z),J[b]=0,J[m]=0,J[p]=A>0?1:-1,u.push(J.x,J.y,J.z),f.push(Me/D),f.push(1-j/x),V+=1}}for(let j=0;j<x;j++)for(let re=0;re<D;re++){const Me=d+re+W*j,Fe=d+re+W*(j+1),de=d+(re+1)+W*(j+1),Oe=d+(re+1)+W*j;l.push(Me,Fe,Oe),l.push(Fe,de,Oe),ie+=6}o.addGroup(h,ie,w),h+=ie,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Dc extends Ht{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new Ct(r,3)),this.setAttribute("normal",new Ct(r.slice(),3)),this.setAttribute("uv",new Ct(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const P=new H,S=new H,T=new H;for(let A=0;A<t.length;A+=3)h(t[A+0],P),h(t[A+1],S),h(t[A+2],T),l(P,S,T,y)}function l(y,P,S,T){const A=T+1,D=[];for(let x=0;x<=A;x++){D[x]=[];const w=y.clone().lerp(S,x/A),L=P.clone().lerp(S,x/A),F=A-x;for(let G=0;G<=F;G++)G===0&&x===A?D[x][G]=w:D[x][G]=w.clone().lerp(L,G/F)}for(let x=0;x<A;x++)for(let w=0;w<2*(A-x)-1;w++){const L=Math.floor(w/2);w%2===0?(d(D[x][L+1]),d(D[x+1][L]),d(D[x][L])):(d(D[x][L+1]),d(D[x+1][L+1]),d(D[x+1][L]))}}function c(y){const P=new H;for(let S=0;S<r.length;S+=3)P.x=r[S+0],P.y=r[S+1],P.z=r[S+2],P.normalize().multiplyScalar(y),r[S+0]=P.x,r[S+1]=P.y,r[S+2]=P.z}function u(){const y=new H;for(let P=0;P<r.length;P+=3){y.x=r[P+0],y.y=r[P+1],y.z=r[P+2];const S=m(y)/2/Math.PI+.5,T=p(y)/Math.PI+.5;a.push(S,1-T)}v(),f()}function f(){for(let y=0;y<a.length;y+=6){const P=a[y+0],S=a[y+2],T=a[y+4],A=Math.max(P,S,T),D=Math.min(P,S,T);A>.9&&D<.1&&(P<.2&&(a[y+0]+=1),S<.2&&(a[y+2]+=1),T<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function h(y,P){const S=y*3;P.x=e[S+0],P.y=e[S+1],P.z=e[S+2]}function v(){const y=new H,P=new H,S=new H,T=new H,A=new rt,D=new rt,x=new rt;for(let w=0,L=0;w<r.length;w+=9,L+=6){y.set(r[w+0],r[w+1],r[w+2]),P.set(r[w+3],r[w+4],r[w+5]),S.set(r[w+6],r[w+7],r[w+8]),A.set(a[L+0],a[L+1]),D.set(a[L+2],a[L+3]),x.set(a[L+4],a[L+5]),T.copy(y).add(P).add(S).divideScalar(3);const F=m(T);b(A,L+0,y,F),b(D,L+2,P,F),b(x,L+4,S,F)}}function b(y,P,S,T){T<0&&y.x===1&&(a[P]=y.x-1),S.x===0&&S.z===0&&(a[P]=T/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dc(e.vertices,e.indices,e.radius,e.detail)}}class F0{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const u=i[s],d=i[s+1]-u,h=(a-u)/d;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new rt:new H);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new H,s=[],r=[],a=[],o=new H,l=new At;for(let h=0;h<=e;h++){const v=h/e;s[h]=this.getTangentAt(v,new H)}r[0]=new H,a[0]=new H;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(s[h-1],s[h]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(it(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(o,v))}a[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(it(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(h=-h);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],h*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Lc(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,h=(o-a)/u-(l-a)/(u+f)+(l-o)/f;d*=u,h*=u,s(a,o,d,h)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const td=new H,nd=new H,Xo=new Lc,Yo=new Lc,qo=new Lc;class O0 extends F0{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new H){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(nd.subVectors(s[0],s[1]).add(s[0]),c=nd);const f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(td.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=td),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(f),h),b=Math.pow(f.distanceToSquared(d),h),m=Math.pow(d.distanceToSquared(u),h);b<1e-4&&(b=1),v<1e-4&&(v=b),m<1e-4&&(m=b),Xo.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,v,b,m),Yo.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,v,b,m),qo.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,v,b,m)}else this.curveType==="catmullrom"&&(Xo.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),Yo.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),qo.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return i.set(Xo.calc(l),Yo.calc(l),qo.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Ic extends Dc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ic(e.radius,e.detail)}}class ja extends Ht{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=e/o,d=t/l,h=[],v=[],b=[],m=[];for(let p=0;p<u;p++){const y=p*d-a;for(let P=0;P<c;P++){const S=P*f-r;v.push(S,-y,0),b.push(0,0,1),m.push(P/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const P=y+c*p,S=y+c*(p+1),T=y+1+c*(p+1),A=y+1+c*p;h.push(P,S,A),h.push(S,T,A)}this.setIndex(h),this.setAttribute("position",new Ct(v,3)),this.setAttribute("normal",new Ct(b,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.width,e.height,e.widthSegments,e.heightSegments)}}class Oa extends Ht{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new H,d=new H,h=[],v=[],b=[],m=[];for(let p=0;p<=i;p++){const y=[],P=p/i,S=a+P*o,T=e*Math.cos(S),A=Math.sqrt(e*e-T*T);let D=0;p===0&&a===0?D=.5/t:p===i&&l===Math.PI&&(D=-.5/t);for(let x=0;x<=t;x++){const w=x/t,L=s+w*r;f.x=-A*Math.cos(L),f.y=T,f.z=A*Math.sin(L),v.push(f.x,f.y,f.z),d.copy(f).normalize(),b.push(d.x,d.y,d.z),m.push(w+D,1-P),y.push(c++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const P=u[p][y+1],S=u[p][y],T=u[p+1][y],A=u[p+1][y+1];(p!==0||a>0)&&h.push(P,S,A),(p!==i-1||l<Math.PI)&&h.push(S,T,A)}this.setIndex(h),this.setAttribute("position",new Ct(v,3)),this.setAttribute("normal",new Ct(b,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Uc extends Ht{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],f=[],d=new H,h=new H,v=new H;for(let b=0;b<=i;b++){const m=a+b/i*o;for(let p=0;p<=s;p++){const y=p/s*r;h.x=(e+t*Math.cos(m))*Math.cos(y),h.y=(e+t*Math.cos(m))*Math.sin(y),h.z=t*Math.sin(m),c.push(h.x,h.y,h.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),v.subVectors(h,d).normalize(),u.push(v.x,v.y,v.z),f.push(p/s),f.push(b/i)}}for(let b=1;b<=i;b++)for(let m=1;m<=s;m++){const p=(s+1)*b+m-1,y=(s+1)*(b-1)+m-1,P=(s+1)*(b-1)+m,S=(s+1)*b+m;l.push(p,y,S),l.push(y,P,S)}this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ns(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(id(s))s.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(id(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function $t(n){const e={};for(let t=0;t<n.length;t++){const i=Ns(n[t]);for(const s in i)e[s]=i[s]}return e}function id(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function B0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Th(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const H0={clone:Ns,merge:$t};var k0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends Bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k0,this.fragmentShader=V0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=B0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ct().setHex(s.value);break;case"v2":this.uniforms[i].value=new rt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new H().fromArray(s.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Je().fromArray(s.value);break;case"m4":this.uniforms[i].value=new At().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class z0 extends Kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class G0 extends Bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class W0 extends Bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const la=new H,ca=new Os,Un=new H;class Ah extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(la,ca,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(la,ca,Un.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(la,ca,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(la,ca,Un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new H,sd=new rt,rd=new rt;class gn extends Ah{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jl*2*Math.atan(Math.tan(bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,sd,rd),t.subVectors(rd,sd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class wh extends Ah{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _s=-90,vs=1;class X0 extends tn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(_s,vs,e,t);s.layers=this.layers,this.add(s);const r=new gn(_s,vs,e,t);r.layers=this.layers,this.add(r);const a=new gn(_s,vs,e,t);a.layers=this.layers,this.add(a);const o=new gn(_s,vs,e,t);o.layers=this.layers,this.add(o);const l=new gn(_s,vs,e,t);l.layers=this.layers,this.add(l);const c=new gn(_s,vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Y0 extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class q0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ze("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const kc=class kc{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};kc.prototype.isMatrix2=!0;let ad=kc;function od(n,e,t,i){const s=K0(i);switch(t){case fh:return n*e;case ph:return n*e/s.components*s.byteLength;case Ec:return n*e/s.components*s.byteLength;case ts:return n*e*2/s.components*s.byteLength;case Tc:return n*e*2/s.components*s.byteLength;case hh:return n*e*3/s.components*s.byteLength;case Tn:return n*e*4/s.components*s.byteLength;case Ac:return n*e*4/s.components*s.byteLength;case ga:case _a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case va:case xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bl:case El:return Math.max(n,16)*Math.max(e,8)/4;case Ml:case yl:return Math.max(n,8)*Math.max(e,8)/2;case Tl:case Al:case Rl:case Cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wl:case Ca:case Pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Il:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case kl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case zl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Xl:case Yl:case ql:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Kl:case Zl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Pa:case $l:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function K0(n){switch(n){case _n:case lh:return{byteLength:1,components:1};case Mr:case ch:case qn:return{byteLength:2,components:1};case bc:case yc:return{byteLength:2,components:4};case Yn:case Mc:case Vn:return{byteLength:4,components:1};case uh:case dh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rh(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Z0(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((h,v)=>h.start-v.start);let d=0;for(let h=1;h<f.length;h++){const v=f[d],b=f[h];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++d,f[d]=b)}f.length=d+1;for(let h=0,v=f.length;h<v;h++){const b=f[h];n.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var $0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J0=`#ifdef USE_ALPHAHASH
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
#endif`,Q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,t_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n_=`#ifdef USE_AOMAP
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
#endif`,i_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s_=`#ifdef USE_BATCHING
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
#endif`,r_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,a_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,c_=`#ifdef USE_IRIDESCENCE
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
#endif`,u_=`#ifdef USE_BUMPMAP
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
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,g_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,__=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,v_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,x_=`#define PI 3.141592653589793
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
} // validated`,S_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,M_=`vec3 transformedNormal = objectNormal;
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
#endif`,b_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A_="gl_FragColor = linearToOutputTexel( gl_FragColor );",w_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,R_=`#ifdef USE_ENVMAP
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
#endif`,C_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,P_=`#ifdef USE_ENVMAP
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
#endif`,D_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L_=`#ifdef USE_ENVMAP
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
#endif`,I_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,F_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O_=`#ifdef USE_GRADIENTMAP
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
}`,B_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,z_=`#ifdef USE_ENVMAP
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
#endif`,G_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,W_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q_=`PhysicalMaterial material;
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
#endif`,K_=`uniform sampler2D dfgLUT;
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
}`,Z_=`
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
#endif`,$_=`#if defined( RE_IndirectDiffuse )
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
#endif`,J_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,j_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ev=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,av=`#if defined( USE_POINTS_UV )
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
#endif`,ov=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fv=`#ifdef USE_MORPHTARGETS
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
#endif`,hv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_v=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xv=`#ifdef USE_NORMALMAP
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
#endif`,Sv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ev=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Av=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Iv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nv=`float getShadowMask() {
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
}`,Fv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ov=`#ifdef USE_SKINNING
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
#endif`,Bv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hv=`#ifdef USE_SKINNING
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
#endif`,kv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wv=`#ifdef USE_TRANSMISSION
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
#endif`,Xv=`#ifdef USE_TRANSMISSION
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
#endif`,Yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $v=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jv=`uniform sampler2D t2D;
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
}`,Qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`#include <common>
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
}`,ix=`#if DEPTH_PACKING == 3200
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
}`,sx=`#define DISTANCE
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
}`,rx=`#define DISTANCE
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
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ox=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`uniform float scale;
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
}`,cx=`uniform vec3 diffuse;
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
}`,ux=`#include <common>
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
}`,dx=`uniform vec3 diffuse;
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
}`,fx=`#define LAMBERT
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
}`,hx=`#define LAMBERT
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
}`,px=`#define MATCAP
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
}`,mx=`#define MATCAP
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
}`,gx=`#define NORMAL
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
}`,_x=`#define NORMAL
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
}`,vx=`#define PHONG
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
}`,xx=`#define PHONG
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
}`,Sx=`#define STANDARD
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
}`,Mx=`#define STANDARD
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
}`,bx=`#define TOON
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
}`,yx=`#define TOON
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
}`,Ex=`uniform float size;
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
}`,Tx=`uniform vec3 diffuse;
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
}`,Ax=`#include <common>
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
}`,wx=`uniform vec3 color;
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
}`,Rx=`uniform float rotation;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:$0,alphahash_pars_fragment:J0,alphamap_fragment:Q0,alphamap_pars_fragment:j0,alphatest_fragment:e_,alphatest_pars_fragment:t_,aomap_fragment:n_,aomap_pars_fragment:i_,batching_pars_vertex:s_,batching_vertex:r_,begin_vertex:a_,beginnormal_vertex:o_,bsdfs:l_,iridescence_fragment:c_,bumpmap_pars_fragment:u_,clipping_planes_fragment:d_,clipping_planes_pars_fragment:f_,clipping_planes_pars_vertex:h_,clipping_planes_vertex:p_,color_fragment:m_,color_pars_fragment:g_,color_pars_vertex:__,color_vertex:v_,common:x_,cube_uv_reflection_fragment:S_,defaultnormal_vertex:M_,displacementmap_pars_vertex:b_,displacementmap_vertex:y_,emissivemap_fragment:E_,emissivemap_pars_fragment:T_,colorspace_fragment:A_,colorspace_pars_fragment:w_,envmap_fragment:R_,envmap_common_pars_fragment:C_,envmap_pars_fragment:P_,envmap_pars_vertex:D_,envmap_physical_pars_fragment:z_,envmap_vertex:L_,fog_vertex:I_,fog_pars_vertex:U_,fog_fragment:N_,fog_pars_fragment:F_,gradientmap_pars_fragment:O_,lightmap_pars_fragment:B_,lights_lambert_fragment:H_,lights_lambert_pars_fragment:k_,lights_pars_begin:V_,lights_toon_fragment:G_,lights_toon_pars_fragment:W_,lights_phong_fragment:X_,lights_phong_pars_fragment:Y_,lights_physical_fragment:q_,lights_physical_pars_fragment:K_,lights_fragment_begin:Z_,lights_fragment_maps:$_,lights_fragment_end:J_,lightprobes_pars_fragment:Q_,logdepthbuf_fragment:j_,logdepthbuf_pars_fragment:ev,logdepthbuf_pars_vertex:tv,logdepthbuf_vertex:nv,map_fragment:iv,map_pars_fragment:sv,map_particle_fragment:rv,map_particle_pars_fragment:av,metalnessmap_fragment:ov,metalnessmap_pars_fragment:lv,morphinstance_vertex:cv,morphcolor_vertex:uv,morphnormal_vertex:dv,morphtarget_pars_vertex:fv,morphtarget_vertex:hv,normal_fragment_begin:pv,normal_fragment_maps:mv,normal_pars_fragment:gv,normal_pars_vertex:_v,normal_vertex:vv,normalmap_pars_fragment:xv,clearcoat_normal_fragment_begin:Sv,clearcoat_normal_fragment_maps:Mv,clearcoat_pars_fragment:bv,iridescence_pars_fragment:yv,opaque_fragment:Ev,packing:Tv,premultiplied_alpha_fragment:Av,project_vertex:wv,dithering_fragment:Rv,dithering_pars_fragment:Cv,roughnessmap_fragment:Pv,roughnessmap_pars_fragment:Dv,shadowmap_pars_fragment:Lv,shadowmap_pars_vertex:Iv,shadowmap_vertex:Uv,shadowmask_pars_fragment:Nv,skinbase_vertex:Fv,skinning_pars_vertex:Ov,skinning_vertex:Bv,skinnormal_vertex:Hv,specularmap_fragment:kv,specularmap_pars_fragment:Vv,tonemapping_fragment:zv,tonemapping_pars_fragment:Gv,transmission_fragment:Wv,transmission_pars_fragment:Xv,uv_pars_fragment:Yv,uv_pars_vertex:qv,uv_vertex:Kv,worldpos_vertex:Zv,background_vert:$v,background_frag:Jv,backgroundCube_vert:Qv,backgroundCube_frag:jv,cube_vert:ex,cube_frag:tx,depth_vert:nx,depth_frag:ix,distance_vert:sx,distance_frag:rx,equirect_vert:ax,equirect_frag:ox,linedashed_vert:lx,linedashed_frag:cx,meshbasic_vert:ux,meshbasic_frag:dx,meshlambert_vert:fx,meshlambert_frag:hx,meshmatcap_vert:px,meshmatcap_frag:mx,meshnormal_vert:gx,meshnormal_frag:_x,meshphong_vert:vx,meshphong_frag:xx,meshphysical_vert:Sx,meshphysical_frag:Mx,meshtoon_vert:bx,meshtoon_frag:yx,points_vert:Ex,points_frag:Tx,shadow_vert:Ax,shadow_frag:wx,sprite_vert:Rx,sprite_frag:Cx},Ae={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Hn={basic:{uniforms:$t([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:$t([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:$t([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:$t([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:$t([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new ct(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:$t([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:$t([Ae.points,Ae.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:$t([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:$t([Ae.common,Ae.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:$t([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:$t([Ae.sprite,Ae.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:$t([Ae.common,Ae.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:$t([Ae.lights,Ae.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Hn.physical={uniforms:$t([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const ua={r:0,b:0,g:0},Px=new At,Ch=new Je;Ch.set(-1,0,0,0,1,0,0,0,1);function Dx(n,e,t,i,s,r){const a=new ct(0);let o=s===!0?0:1,l,c,u=null,f=0,d=null;function h(y){let P=y.isScene===!0?y.background:null;if(P&&P.isTexture){const S=y.backgroundBlurriness>0;P=e.get(P,S)}return P}function v(y){let P=!1;const S=h(y);S===null?m(a,o):S&&S.isColor&&(m(S,1),P=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(y,P){const S=h(P);S&&(S.isCubeTexture||S.mapping===Qa)?(c===void 0&&(c=new dn(new Pr(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Ns(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Px.makeRotationFromEuler(P.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ch),c.material.toneMapped=st.getTransfer(S.colorSpace)!==ht,(u!==S||f!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new dn(new ja(2,2),new Kn({name:"BackgroundMaterial",uniforms:Ns(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=st.getTransfer(S.colorSpace)!==ht,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,P){y.getRGB(ua,Th(n)),t.buffers.color.setClear(ua.r,ua.g,ua.b,P,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,P=1){a.set(y),o=P,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:v,addToRenderList:b,dispose:p}}function Lx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(F,G,q,B,W){let ee=!1;const V=f(F,B,q,G);r!==V&&(r=V,c(r.object)),ee=h(F,B,q,W),ee&&v(F,B,q,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,S(F,G,q,B),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(F){return n.bindVertexArray(F)}function u(F){return n.deleteVertexArray(F)}function f(F,G,q,B){const W=B.wireframe===!0;let ee=i[G.id];ee===void 0&&(ee={},i[G.id]=ee);const V=F.isInstancedMesh===!0?F.id:0;let ie=ee[V];ie===void 0&&(ie={},ee[V]=ie);let J=ie[q.id];J===void 0&&(J={},ie[q.id]=J);let j=J[W];return j===void 0&&(j=d(l()),J[W]=j),j}function d(F){const G=[],q=[],B=[];for(let W=0;W<t;W++)G[W]=0,q[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:q,attributeDivisors:B,object:F,attributes:{},index:null}}function h(F,G,q,B){const W=r.attributes,ee=G.attributes;let V=0;const ie=q.getAttributes();for(const J in ie)if(ie[J].location>=0){const re=W[J];let Me=ee[J];if(Me===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(Me=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(Me=F.instanceColor)),re===void 0||re.attribute!==Me||Me&&re.data!==Me.data)return!0;V++}return r.attributesNum!==V||r.index!==B}function v(F,G,q,B){const W={},ee=G.attributes;let V=0;const ie=q.getAttributes();for(const J in ie)if(ie[J].location>=0){let re=ee[J];re===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(re=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(re=F.instanceColor));const Me={};Me.attribute=re,re&&re.data&&(Me.data=re.data),W[J]=Me,V++}r.attributes=W,r.attributesNum=V,r.index=B}function b(){const F=r.newAttributes;for(let G=0,q=F.length;G<q;G++)F[G]=0}function m(F){p(F,0)}function p(F,G){const q=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;q[F]=1,B[F]===0&&(n.enableVertexAttribArray(F),B[F]=1),W[F]!==G&&(n.vertexAttribDivisor(F,G),W[F]=G)}function y(){const F=r.newAttributes,G=r.enabledAttributes;for(let q=0,B=G.length;q<B;q++)G[q]!==F[q]&&(n.disableVertexAttribArray(q),G[q]=0)}function P(F,G,q,B,W,ee,V){V===!0?n.vertexAttribIPointer(F,G,q,W,ee):n.vertexAttribPointer(F,G,q,B,W,ee)}function S(F,G,q,B){b();const W=B.attributes,ee=q.getAttributes(),V=G.defaultAttributeValues;for(const ie in ee){const J=ee[ie];if(J.location>=0){let j=W[ie];if(j===void 0&&(ie==="instanceMatrix"&&F.instanceMatrix&&(j=F.instanceMatrix),ie==="instanceColor"&&F.instanceColor&&(j=F.instanceColor)),j!==void 0){const re=j.normalized,Me=j.itemSize,Fe=e.get(j);if(Fe===void 0)continue;const de=Fe.buffer,Oe=Fe.type,We=Fe.bytesPerElement,K=Oe===n.INT||Oe===n.UNSIGNED_INT||j.gpuType===Mc;if(j.isInterleavedBufferAttribute){const se=j.data,ve=se.stride,ze=j.offset;if(se.isInstancedInterleavedBuffer){for(let Pe=0;Pe<J.locationSize;Pe++)p(J.location+Pe,se.meshPerAttribute);F.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Pe=0;Pe<J.locationSize;Pe++)m(J.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,de);for(let Pe=0;Pe<J.locationSize;Pe++)P(J.location+Pe,Me/J.locationSize,Oe,re,ve*We,(ze+Me/J.locationSize*Pe)*We,K)}else{if(j.isInstancedBufferAttribute){for(let se=0;se<J.locationSize;se++)p(J.location+se,j.meshPerAttribute);F.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let se=0;se<J.locationSize;se++)m(J.location+se);n.bindBuffer(n.ARRAY_BUFFER,de);for(let se=0;se<J.locationSize;se++)P(J.location+se,Me/J.locationSize,Oe,re,Me*We,Me/J.locationSize*se*We,K)}}else if(V!==void 0){const re=V[ie];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(J.location,re);break;case 3:n.vertexAttrib3fv(J.location,re);break;case 4:n.vertexAttrib4fv(J.location,re);break;default:n.vertexAttrib1fv(J.location,re)}}}}y()}function T(){w();for(const F in i){const G=i[F];for(const q in G){const B=G[q];for(const W in B){const ee=B[W];for(const V in ee)u(ee[V].object),delete ee[V];delete B[W]}}delete i[F]}}function A(F){if(i[F.id]===void 0)return;const G=i[F.id];for(const q in G){const B=G[q];for(const W in B){const ee=B[W];for(const V in ee)u(ee[V].object),delete ee[V];delete B[W]}}delete i[F.id]}function D(F){for(const G in i){const q=i[G];for(const B in q){const W=q[B];if(W[F.id]===void 0)continue;const ee=W[F.id];for(const V in ee)u(ee[V].object),delete ee[V];delete W[F.id]}}}function x(F){for(const G in i){const q=i[G],B=F.isInstancedMesh===!0?F.id:0,W=q[B];if(W!==void 0){for(const ee in W){const V=W[ee];for(const ie in V)u(V[ie].object),delete V[ie];delete W[ee]}delete q[B],Object.keys(q).length===0&&delete i[G]}}}function w(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:L,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:D,initAttributes:b,enableAttribute:m,disableUnusedAttributes:y}}function Ix(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ux(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==Tn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const x=D===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==_n&&D!==Vn&&!x&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:P,maxFragmentUniforms:S,maxSamples:T,samples:A}}function Nx(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Di,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||s;return s=d,i=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const v=f.clippingPlanes,b=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{const y=r?0:i,P=y*4;let S=p.clippingState||null;l.value=S,S=u(v,d,P,h);for(let T=0;T!==P;++T)S[T]=t[T];p.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,v){const b=f!==null?f.length:0;let m=null;if(b!==0){if(m=l.value,v!==!0||m===null){const p=h+b*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let P=0,S=h;P!==b;++P,S+=4)a.copy(f[P]).applyMatrix4(y,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}const ys=4,Fx=6,Ox=20,Bx=256,Zs=new wh,ld=new ct;let Ko=null,Zo=0,$o=0,Jo=!1;const Hx=new H,Xi=new H;class cd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=Hx}=r;Ko=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ko,Zo,$o),this._renderer.xr.enabled=Jo,e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ko=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:qn,format:Tn,colorSpace:Da,depthBuffer:!1},s=ud(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ud(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=kx(r)),this._blurMaterial=zx(r,e,t),this._ggxMaterial=Vx(r,e,t)}return s}_compileMaterial(e){const t=new dn(new Ht,e);this._renderer.compile(t,Zs)}_sceneToCubeUV(e,t,i,s,r){const l=new gn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(ld),f.toneMapping=Wn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dn(new Pr,new fr({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,m=b.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(ld),p=!0);for(let P=0;P<6;P++){const S=P%3;S===0?(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[P],r.y,r.z)):S===1?(l.up.set(0,0,c[P]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[P],r.z)):(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[P]));const T=this._cubeSize;xs(s,S*T,P>2?T:0,T,T),f.setRenderTarget(s),p&&f.render(b,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===es||e.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dd());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;xs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Zs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=c*1.25,h=f*d,{_lodMax:v}=this,b=this._sizeLods[i],m=3*b*(i>v-ys?i-v+ys:0),p=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=v-t,xs(r,m,p,3*b,2*b),s.setRenderTarget(r),s.render(o,Zs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=v-i,xs(e,m,p,3*b,2*b),s.setRenderTarget(e),s.render(o,Zs)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],f=3*u*(s>this._lodMax-ys?s-this._lodMax+ys:0),d=4*(this._cubeSize-u);xs(t,f,d,3*u,2*u),a.setRenderTarget(t),a.render(l,Zs)}}function kx(n){const e=[],t=[];let i=n;const s=n-ys+1+Fx;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,d=6,h=3,v=new Float32Array(h*d*f),b=new Float32Array(h*d*f);for(let p=0;p<f;p++){const y=p%3*2/3-1,P=p>2?0:-1,S=[y,P,0,y+2/3,P,0,y+2/3,P+1,0,y,P,0,y+2/3,P+1,0,y,P+1,0];v.set(S,h*d*p);for(let T=0;T<d;T++){const A=u[T*2]*2-1,D=u[T*2+1]*2-1;p===0?Xi.set(1,D,A):p===1?Xi.set(-A,1,-D):p===2?Xi.set(-A,D,1):p===3?Xi.set(-1,D,-A):p===4?Xi.set(-A,-1,D):Xi.set(A,D,-1),Xi.toArray(b,(p*d+T)*h)}}const m=new Ht;m.setAttribute("position",new pi(v,h)),m.setAttribute("outputDirection",new pi(b,h)),t.push(new dn(m,null)),i>ys&&i--}return{lodMeshes:t,sizeLods:e}}function ud(n,e,t){const i=new Cn(n,e,t);return i.texture.mapping=Qa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Vx(n,e,t){return new Kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:eo(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function zx(n,e,t){return new Kn({name:"SphericalGaussianBlur",defines:{SAMPLES:Ox,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:eo(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function dd(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eo(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function fd(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function eo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ph extends Cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new yh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pr(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:fi});r.uniforms.tEquirect.value=t;const a=new dn(s,r),o=t.minFilter;return t.minFilter===Ki&&(t.minFilter=Xt),new X0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function Gx(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,h=!1){return d==null?null:h?a(d):r(d)}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===vo||h===xo)if(e.has(d)){const v=e.get(d).texture;return o(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const b=new Ph(v.height);return b.fromEquirectangularTexture(n,d),e.set(d,b),d.addEventListener("dispose",c),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const h=d.mapping,v=h===vo||h===xo,b=h===es||h===Us;if(v||b){let m=t.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new cd(n)),m=v?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const y=d.image;return v&&y&&y.height>0||b&&y&&l(y)?(i===null&&(i=new cd(n)),m=v?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,h){return h===vo?d.mapping=es:h===xo&&(d.mapping=Us),d}function l(d){let h=0;const v=6;for(let b=0;b<v;b++)d[b]!==void 0&&h++;return h===v}function c(d){const h=d.target;h.removeEventListener("dispose",c);const v=e.get(h);v!==void 0&&(e.delete(h),v.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const v=t.get(h);v!==void 0&&(t.delete(h),v.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Wx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Cs("WebGLRenderer: "+i+" extension not supported."),s}}}function Xx(n,e,t,i){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete s[d.id];const h=r.get(d);h&&(e.remove(h),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],n.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,v=f.attributes.position;let b=0;if(v===void 0)return;if(h!==null){const y=h.array;b=h.version;for(let P=0,S=y.length;P<S;P+=3){const T=y[P+0],A=y[P+1],D=y[P+2];d.push(T,A,A,D,D,T)}}else{const y=v.array;b=v.version;for(let P=0,S=y.length/3-1;P<S;P+=3){const T=P+0,A=P+1,D=P+2;d.push(T,A,A,D,D,T)}}const m=new(v.count>=65535?Sh:xh)(d,1);m.version=b;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const d=r.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Yx(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*a),t.update(d,i,1)}function c(f,d,h){h!==0&&(n.drawElementsInstanced(i,d,r,f*a,h),t.update(d,i,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,h);let b=0;for(let m=0;m<h;m++)b+=d[m];t.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function qx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:lt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Kx(n,e,t){const i=new WeakMap,s=new wt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let L=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var h=L;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],P=o.morphAttributes.color||[];let S=0;v===!0&&(S=1),b===!0&&(S=2),m===!0&&(S=3);let T=o.attributes.position.count*S,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const D=new Float32Array(T*A*4*f),x=new gh(D,T,A,f);x.type=Vn,x.needsUpdate=!0;const w=S*4;for(let F=0;F<f;F++){const G=p[F],q=y[F],B=P[F],W=T*A*4*F;for(let ee=0;ee<G.count;ee++){const V=ee*w;v===!0&&(s.fromBufferAttribute(G,ee),D[W+V+0]=s.x,D[W+V+1]=s.y,D[W+V+2]=s.z,D[W+V+3]=0),b===!0&&(s.fromBufferAttribute(q,ee),D[W+V+4]=s.x,D[W+V+5]=s.y,D[W+V+6]=s.z,D[W+V+7]=0),m===!0&&(s.fromBufferAttribute(B,ee),D[W+V+8]=s.x,D[W+V+9]=s.y,D[W+V+10]=s.z,D[W+V+11]=B.itemSize===4?s.w:1)}}d={count:f,texture:x,size:new rt(T,A)},i.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const b=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",b),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Zx(n,e,t,i,s){let r=new WeakMap;function a(c){const u=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const $x={[eh]:"LINEAR_TONE_MAPPING",[th]:"REINHARD_TONE_MAPPING",[nh]:"CINEON_TONE_MAPPING",[ih]:"ACES_FILMIC_TONE_MAPPING",[rh]:"AGX_TONE_MAPPING",[ah]:"NEUTRAL_TONE_MAPPING",[sh]:"CUSTOM_TONE_MAPPING"};function Jx(n,e,t,i,s,r){const a=new Cn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Ht;c.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ct([0,2,0,0,2,0],2));const u=new z0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new dn(c,u),d=new wh(-1,1,1,-1,0,1);let h=null,v=null,b=!1,m,p=null,y=[],P=!1;this.setSize=function(S,T){a.setSize(S,T),o!==null&&o.setSize(S,T),l!==null&&l.setSize(S,T);for(let A=0;A<y.length;A++){const D=y[A];D.setSize&&D.setSize(S,T)}},this.setEffects=function(S){y=S,P=y.length>0&&y[0].isRenderPass===!0;const T=a.width,A=a.height;y.length>0&&o===null&&(o=new Cn(T,A,{type:qn,depthBuffer:!1,stencilBuffer:!1}),l=new Cn(T,A,{type:qn,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<y.length;D++){const x=y[D];x.setSize&&x.setSize(T,A)}},this.begin=function(S,T){if(b||S.toneMapping===Wn&&y.length===0)return!1;if(p=T,T!==null){const A=T.width,D=T.height;(a.width!==A||a.height!==D)&&this.setSize(A,D)}return P===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=Wn,!0},this.hasRenderPass=function(){return P},this.end=function(S,T){S.toneMapping=m,b=!0;let A=a,D=o;for(let x=0;x<y.length;x++){const w=y[x];w.enabled!==!1&&(w.render(S,D,A,T),w.needsSwap!==!1&&(A=D,D=D===o?l:o))}if(h!==S.outputColorSpace||v!==S.toneMapping){h=S.outputColorSpace,v=S.toneMapping,u.defines={},st.getTransfer(h)===ht&&(u.defines.SRGB_TRANSFER="");const x=$x[v];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,S.setRenderTarget(p),S.render(f,d),p=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const Dh=new en,tc=new yr(1,1),Lh=new gh,Ih=new m0,Uh=new yh,hd=[],pd=[],md=new Float32Array(16),gd=new Float32Array(9),_d=new Float32Array(4);function Hs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=hd[s];if(r===void 0&&(r=new Float32Array(s),hd[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Nt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function to(n,e){let t=pd[e];t===void 0&&(t=new Int32Array(e),pd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Qx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2fv(this.addr,e),Nt(t,e)}}function eS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;n.uniform3fv(this.addr,e),Nt(t,e)}}function tS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4fv(this.addr,e),Nt(t,e)}}function nS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;_d.set(i),n.uniformMatrix2fv(this.addr,!1,_d),Nt(t,i)}}function iS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;gd.set(i),n.uniformMatrix3fv(this.addr,!1,gd),Nt(t,i)}}function sS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;md.set(i),n.uniformMatrix4fv(this.addr,!1,md),Nt(t,i)}}function rS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function aS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2iv(this.addr,e),Nt(t,e)}}function oS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3iv(this.addr,e),Nt(t,e)}}function lS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4iv(this.addr,e),Nt(t,e)}}function cS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function uS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2uiv(this.addr,e),Nt(t,e)}}function dS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3uiv(this.addr,e),Nt(t,e)}}function fS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4uiv(this.addr,e),Nt(t,e)}}function hS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(tc.compareFunction=t.isReversedDepthBuffer()?Rc:wc,r=tc):r=Dh,t.setTexture2D(e||r,s)}function pS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ih,s)}function mS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Uh,s)}function gS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Lh,s)}function _S(n){switch(n){case 5126:return Qx;case 35664:return jx;case 35665:return eS;case 35666:return tS;case 35674:return nS;case 35675:return iS;case 35676:return sS;case 5124:case 35670:return rS;case 35667:case 35671:return aS;case 35668:case 35672:return oS;case 35669:case 35673:return lS;case 5125:return cS;case 36294:return uS;case 36295:return dS;case 36296:return fS;case 35678:case 36198:case 36298:case 36306:case 35682:return hS;case 35679:case 36299:case 36307:return pS;case 35680:case 36300:case 36308:case 36293:return mS;case 36289:case 36303:case 36311:case 36292:return gS}}function vS(n,e){n.uniform1fv(this.addr,e)}function xS(n,e){const t=Hs(e,this.size,2);n.uniform2fv(this.addr,t)}function SS(n,e){const t=Hs(e,this.size,3);n.uniform3fv(this.addr,t)}function MS(n,e){const t=Hs(e,this.size,4);n.uniform4fv(this.addr,t)}function bS(n,e){const t=Hs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function yS(n,e){const t=Hs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ES(n,e){const t=Hs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function TS(n,e){n.uniform1iv(this.addr,e)}function AS(n,e){n.uniform2iv(this.addr,e)}function wS(n,e){n.uniform3iv(this.addr,e)}function RS(n,e){n.uniform4iv(this.addr,e)}function CS(n,e){n.uniform1uiv(this.addr,e)}function PS(n,e){n.uniform2uiv(this.addr,e)}function DS(n,e){n.uniform3uiv(this.addr,e)}function LS(n,e){n.uniform4uiv(this.addr,e)}function IS(n,e,t){const i=this.cache,s=e.length,r=to(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=tc:a=Dh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function US(n,e,t){const i=this.cache,s=e.length,r=to(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ih,r[a])}function NS(n,e,t){const i=this.cache,s=e.length,r=to(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Uh,r[a])}function FS(n,e,t){const i=this.cache,s=e.length,r=to(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Lh,r[a])}function OS(n){switch(n){case 5126:return vS;case 35664:return xS;case 35665:return SS;case 35666:return MS;case 35674:return bS;case 35675:return yS;case 35676:return ES;case 5124:case 35670:return TS;case 35667:case 35671:return AS;case 35668:case 35672:return wS;case 35669:case 35673:return RS;case 5125:return CS;case 36294:return PS;case 36295:return DS;case 36296:return LS;case 35678:case 36198:case 36298:case 36306:case 35682:return IS;case 35679:case 36299:case 36307:return US;case 35680:case 36300:case 36308:case 36293:return NS;case 36289:case 36303:case 36311:case 36292:return FS}}class BS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_S(t.type)}}class HS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=OS(t.type)}}class kS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Qo=/(\w+)(\])?(\[|\.)?/g;function vd(n,e){n.seq.push(e),n.map[e.id]=e}function VS(n,e,t){const i=n.name,s=i.length;for(Qo.lastIndex=0;;){const r=Qo.exec(i),a=Qo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){vd(t,c===void 0?new BS(o,n,e):new HS(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new kS(o),vd(t,f)),t=f}}}class Sa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);VS(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function xd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const zS=37297;let GS=0;function WS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Sd=new Je;function XS(n){st._getMatrix(Sd,st.workingColorSpace,n);const e=`mat3( ${Sd.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case La:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Md(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+WS(n.getShaderSource(e),o)}else return r}function YS(n,e){const t=XS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const qS={[eh]:"Linear",[th]:"Reinhard",[nh]:"Cineon",[ih]:"ACESFilmic",[rh]:"AgX",[ah]:"Neutral",[sh]:"Custom"};function KS(n,e){const t=qS[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const da=new H;function ZS(){st.getLuminanceCoefficients(da);const n=da.x.toFixed(4),e=da.y.toFixed(4),t=da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $S(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function JS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function QS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function nr(n){return n!==""}function bd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jS=/^[ \t]*#include +<([\w\d./]+)>/gm;function nc(n){return n.replace(jS,tM)}const eM=new Map;function tM(n,e){let t=tt[e];if(t===void 0){const i=eM.get(e);if(i!==void 0)t=tt[i],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return nc(t)}const nM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ed(n){return n.replace(nM,iM)}function iM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Td(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const sM={[ma]:"SHADOWMAP_TYPE_PCF",[tr]:"SHADOWMAP_TYPE_VSM"};function rM(n){return sM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aM={[es]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE",[Qa]:"ENVMAP_TYPE_CUBE_UV"};function oM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":aM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const lM={[Us]:"ENVMAP_MODE_REFRACTION"};function cM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":lM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uM={[jf]:"ENVMAP_BLENDING_MULTIPLY",[Yg]:"ENVMAP_BLENDING_MIX",[qg]:"ENVMAP_BLENDING_ADD"};function dM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":uM[n.combine]||"ENVMAP_BLENDING_NONE"}function fM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function hM(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=rM(t),c=oM(t),u=cM(t),f=dM(t),d=fM(t),h=$S(t),v=JS(r),b=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(nr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(nr).join(`
`),p.length>0&&(p+=`
`)):(m=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),p=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?tt.tonemapping_pars_fragment:"",t.toneMapping!==Wn?KS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,YS("linearToOutputTexel",t.outputColorSpace),ZS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nr).join(`
`)),a=nc(a),a=bd(a,t),a=yd(a,t),o=nc(o),o=bd(o,t),o=yd(o,t),a=Ed(a),o=Ed(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const P=y+m+a,S=y+p+o,T=xd(s,s.VERTEX_SHADER,P),A=xd(s,s.FRAGMENT_SHADER,S);s.attachShader(b,T),s.attachShader(b,A),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function D(F){if(n.debug.checkShaderErrors){const G=s.getProgramInfoLog(b)||"",q=s.getShaderInfoLog(T)||"",B=s.getShaderInfoLog(A)||"",W=G.trim(),ee=q.trim(),V=B.trim();let ie=!0,J=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,b,T,A);else{const j=Md(s,T,"vertex"),re=Md(s,A,"fragment");lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+W+`
`+j+`
`+re)}else W!==""?Ze("WebGLProgram: Program Info Log:",W):(ee===""||V==="")&&(J=!1);J&&(F.diagnostics={runnable:ie,programLog:W,vertexShader:{log:ee,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(T),s.deleteShader(A),x=new Sa(s,b),w=QS(s,b)}let x;this.getUniforms=function(){return x===void 0&&D(this),x};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(b,zS)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=GS++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=A,this}let pM=0;class mM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new gM(e),t.set(e,i)),i}}class gM{constructor(e){this.id=pM++,this.code=e,this.usedTimes=0}}function _M(n){return n===ts||n===Ca||n===Pa}function vM(n,e,t,i,s,r){const a=new _h,o=new mM,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function b(x,w,L,F,G,q){const B=F.fog,W=G.geometry,ee=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?F.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ie=e.get(x.envMap||ee,V),J=ie&&ie.mapping===Qa?ie.image.height:null,j=h[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&Ze("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const re=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Me=re!==void 0?re.length:0;let Fe=0;W.morphAttributes.position!==void 0&&(Fe=1),W.morphAttributes.normal!==void 0&&(Fe=2),W.morphAttributes.color!==void 0&&(Fe=3);let de,Oe,We,K;if(j){const bt=Hn[j];de=bt.vertexShader,Oe=bt.fragmentShader}else{de=x.vertexShader,Oe=x.fragmentShader;const bt=o.getVertexShaderStage(x),ut=o.getFragmentShaderStage(x);o.update(x,bt,ut),We=bt.id,K=ut.id}const se=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),ze=G.isInstancedMesh===!0,Pe=G.isBatchedMesh===!0,R=!!x.map,I=!!x.matcap,z=!!ie,ne=!!x.aoMap,ae=!!x.lightMap,Q=!!x.bumpMap&&x.wireframe===!1,fe=!!x.normalMap,he=!!x.displacementMap,pe=!!x.emissiveMap,oe=!!x.metalnessMap,Re=!!x.roughnessMap,C=x.anisotropy>0,De=x.clearcoat>0,Te=x.dispersion>0,E=x.retroreflectivity>0,g=x.iridescence>0,U=x.sheen>0,k=x.transmission>0,Z=C&&!!x.anisotropyMap,me=De&&!!x.clearcoatMap,_e=De&&!!x.clearcoatNormalMap,te=De&&!!x.clearcoatRoughnessMap,le=g&&!!x.iridescenceMap,ge=g&&!!x.iridescenceThicknessMap,Ie=U&&!!x.sheenColorMap,be=U&&!!x.sheenRoughnessMap,Se=!!x.specularMap,Ge=!!x.specularColorMap,qe=!!x.specularIntensityMap,Qe=k&&!!x.transmissionMap,O=k&&!!x.thicknessMap,ye=!!x.gradientMap,ce=!!x.alphaMap,Ee=x.alphaTest>0,Le=!!x.alphaHash,ue=!!x.extensions;let Xe=Wn;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Xe=n.toneMapping);const ke={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:de,fragmentShader:Oe,defines:x.defines,customVertexShaderID:We,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Pe,batchingColor:Pe&&G._colorsTexture!==null,instancing:ze,instancingColor:ze&&G.instanceColor!==null,instancingMorph:ze&&G.morphTexture!==null,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:R,matcap:I,envMap:z,envMapMode:z&&ie.mapping,envMapCubeUVHeight:J,aoMap:ne,lightMap:ae,bumpMap:Q,normalMap:fe,displacementMap:he,emissiveMap:pe,normalMapObjectSpace:fe&&x.normalMapType===$g,normalMapTangentSpace:fe&&x.normalMapType===Du,packedNormalMap:fe&&x.normalMapType===Du&&_M(x.normalMap.format),metalnessMap:oe,roughnessMap:Re,anisotropy:C,anisotropyMap:Z,clearcoat:De,clearcoatMap:me,clearcoatNormalMap:_e,clearcoatRoughnessMap:te,dispersion:Te,retroreflection:E,iridescence:g,iridescenceMap:le,iridescenceThicknessMap:ge,sheen:U,sheenColorMap:Ie,sheenRoughnessMap:be,specularMap:Se,specularColorMap:Ge,specularIntensityMap:qe,transmission:k,transmissionMap:Qe,thicknessMap:O,gradientMap:ye,opaque:x.transparent===!1&&x.blending===dr&&x.alphaToCoverage===!1,alphaMap:ce,alphaTest:Ee,alphaHash:Le,combine:x.combine,mapUv:R&&v(x.map.channel),aoMapUv:ne&&v(x.aoMap.channel),lightMapUv:ae&&v(x.lightMap.channel),bumpMapUv:Q&&v(x.bumpMap.channel),normalMapUv:fe&&v(x.normalMap.channel),displacementMapUv:he&&v(x.displacementMap.channel),emissiveMapUv:pe&&v(x.emissiveMap.channel),metalnessMapUv:oe&&v(x.metalnessMap.channel),roughnessMapUv:Re&&v(x.roughnessMap.channel),anisotropyMapUv:Z&&v(x.anisotropyMap.channel),clearcoatMapUv:me&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:_e&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:be&&v(x.sheenRoughnessMap.channel),specularMapUv:Se&&v(x.specularMap.channel),specularColorMapUv:Ge&&v(x.specularColorMap.channel),specularIntensityMapUv:qe&&v(x.specularIntensityMap.channel),transmissionMapUv:Qe&&v(x.transmissionMap.channel),thicknessMapUv:O&&v(x.thicknessMap.channel),alphaMapUv:ce&&v(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(fe||C),vertexNormals:!!W.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!W.attributes.uv&&(R||ce),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||W.attributes.normal===void 0&&fe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ve,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Fe,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xe,decodeVideoTexture:R&&x.map.isVideoTexture===!0&&st.getTransfer(x.map.colorSpace)===ht,decodeVideoTextureEmissive:pe&&x.emissiveMap.isVideoTexture===!0&&st.getTransfer(x.emissiveMap.colorSpace)===ht,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ci,flipSided:x.side===an,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ue&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&x.extensions.multiDraw===!0||Pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function m(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)w.push(L),w.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(p(w,x),y(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function P(x){const w=h[x.type];let L;if(w){const F=Hn[w];L=H0.clone(F.uniforms)}else L=x.uniforms;return L}function S(x,w){let L=u.get(w);return L!==void 0?++L.usedTimes:(L=new hM(n,w,x,s),c.push(L),u.set(w,L)),L}function T(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function D(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:P,acquireProgram:S,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:D}}function xM(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function SM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Ad(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function wd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function o(d,h,v,b,m,p){let y=n[e];return y===void 0?(y={id:d.id,object:d,geometry:h,material:v,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:m,group:p},n[e]=y):(y.id=d.id,y.object=d,y.geometry=h,y.material=v,y.materialVariant=a(d),y.groupOrder=b,y.renderOrder=d.renderOrder,y.z=m,y.group=p),e++,y}function l(d,h,v,b,m,p,y){y.reversedDepth===!0&&(m=-m);const P=o(d,h,v,b,m,p);v.transmission>0?i.push(P):v.transparent===!0?s.push(P):t.push(P)}function c(d,h,v,b,m,p){const y=o(d,h,v,b,m,p);v.transmission>0?i.unshift(y):v.transparent===!0?s.unshift(y):t.unshift(y)}function u(d,h){t.length>1&&t.sort(d||SM),i.length>1&&i.sort(h||Ad),s.length>1&&s.sort(h||Ad)}function f(){for(let d=e,h=n.length;d<h;d++){const v=n[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function MM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new wd,n.set(i,[a])):s>=r.length?(a=new wd,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function bM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new ct};break;case"SpotLight":t={position:new H,direction:new H,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function yM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let EM=0;function TM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function AM(n){const e=new bM,t=yM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const s=new H,r=new At,a=new At;function o(c){let u=0,f=0,d=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let h=0,v=0,b=0,m=0,p=0,y=0,P=0,S=0,T=0,A=0,D=0,x=0,w=0,L=0;c.sort(TM);for(let G=0,q=c.length;G<q;G++){const B=c[G],W=B.color,ee=B.intensity,V=B.distance;let ie=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===ts?ie=B.shadow.map.texture:ie=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)u+=W.r*ee,f+=W.g*ee,d+=W.b*ee;else if(B.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(B.sh.coefficients[J],ee);L++}else if(B.isSunLight){const J=e.get(B);if(J.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const j=B.shadow,re=t.get(B);re.shadowIntensity=j.intensity,re.shadowBias=j.bias,re.shadowNormalBias=j.normalBias,re.shadowRadius=j.radius,re.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[v]=re,i.sunShadowMap[v]=ie;const Me=j.getViewportCount();for(let Fe=0;Fe<Me;Fe++)i.sunShadowMatrix[b+Fe]=j.getMatrix(Fe),i.sunShadowCascade[b+Fe]=j._cascadeData[Fe];b+=Me,v++}i.sun[h]=J,h++}else if(B.isDirectionalLight){const J=e.get(B);if(J.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const j=B.shadow,re=t.get(B);re.shadowIntensity=j.intensity,re.shadowBias=j.bias,re.shadowNormalBias=j.normalBias,re.shadowRadius=j.radius,re.shadowMapSize=j.mapSize,i.directionalShadow[m]=re,i.directionalShadowMap[m]=ie,i.directionalShadowMatrix[m]=B.shadow.matrix,T++}i.directional[m]=J,m++}else if(B.isSpotLight){const J=e.get(B);J.position.setFromMatrixPosition(B.matrixWorld),J.color.copy(W).multiplyScalar(ee),J.distance=V,J.coneCos=Math.cos(B.angle),J.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),J.decay=B.decay,i.spot[y]=J;const j=B.shadow;if(B.map&&(i.spotLightMap[x]=B.map,x++,j.updateMatrices(B),B.castShadow&&w++),i.spotLightMatrix[y]=j.matrix,B.castShadow){const re=t.get(B);re.shadowIntensity=j.intensity,re.shadowBias=j.bias,re.shadowNormalBias=j.normalBias,re.shadowRadius=j.radius,re.shadowMapSize=j.mapSize,i.spotShadow[y]=re,i.spotShadowMap[y]=ie,D++}y++}else if(B.isRectAreaLight){const J=e.get(B);J.color.copy(W).multiplyScalar(ee),J.halfWidth.set(B.width*.5,0,0),J.halfHeight.set(0,B.height*.5,0),i.rectArea[P]=J,P++}else if(B.isPointLight){const J=e.get(B);if(J.color.copy(B.color).multiplyScalar(B.intensity),J.distance=B.distance,J.decay=B.decay,B.castShadow){const j=B.shadow,re=t.get(B);re.shadowIntensity=j.intensity,re.shadowBias=j.bias,re.shadowNormalBias=j.normalBias,re.shadowRadius=j.radius,re.shadowMapSize=j.mapSize,re.shadowCameraNear=j.camera.near,re.shadowCameraFar=j.camera.far,i.pointShadow[p]=re,i.pointShadowMap[p]=ie,i.pointShadowMatrix[p]=B.shadow.matrix,A++}i.point[p]=J,p++}else if(B.isHemisphereLight){const J=e.get(B);J.skyColor.copy(B.color).multiplyScalar(ee),J.groundColor.copy(B.groundColor).multiplyScalar(ee),i.hemi[S]=J,S++}}P>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const F=i.hash;(F.sunLength!==h||F.directionalLength!==m||F.pointLength!==p||F.spotLength!==y||F.rectAreaLength!==P||F.hemiLength!==S||F.numSunShadows!==v||F.numDirectionalShadows!==T||F.numPointShadows!==A||F.numSpotShadows!==D||F.numSpotMaps!==x||F.numLightProbes!==L)&&(i.sun.length=h,i.directional.length=m,i.spot.length=y,i.rectArea.length=P,i.point.length=p,i.hemi.length=S,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=D,i.spotShadowMap.length=D,i.spotLightMatrix.length=D+x-w,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=L,F.sunLength=h,F.directionalLength=m,F.pointLength=p,F.spotLength=y,F.rectAreaLength=P,F.hemiLength=S,F.numSunShadows=v,F.numDirectionalShadows=T,F.numPointShadows=A,F.numSpotShadows=D,F.numSpotMaps=x,F.numLightProbes=L,i.version=EM++)}function l(c,u){let f=0,d=0,h=0,v=0,b=0,m=0;const p=u.matrixWorldInverse;for(let y=0,P=c.length;y<P;y++){const S=c[y];if(S.isSunLight){const T=i.sun[f];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(p),f++}else if(S.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),d++}else if(S.isSpotLight){const T=i.spot[v];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),v++}else if(S.isRectAreaLight){const T=i.rectArea[b];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),b++}else if(S.isPointLight){const T=i.point[h];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),h++}else if(S.isHemisphereLight){const T=i.hemi[m];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Rd(n){const e=new AM(n),t=[],i=[],s=[];function r(d){f.camera=d,t.length=0,i.length=0,s.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function wM(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Rd(n),e.set(s,[o])):r>=a.length?(o=new Rd(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const RM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CM=`uniform sampler2D shadow_pass;
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
}`,PM=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],DM=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Cd=new At,$s=new H,jo=new H;function LM(n,e,t){let i=new Mh;const s=new rt,r=new rt,a=new wt,o=new G0,l=new W0,c={},u=t.maxTextureSize,f={[ji]:an,[an]:ji,[ci]:ci},d=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:RM,fragmentShader:CM}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const v=new Ht;v.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new dn(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ma;let p=this.type;this.render=function(A,D,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===wg&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ma);const w=n.getRenderTarget(),L=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),G=n.state;G.setBlending(fi),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const q=p!==this.type;q&&D.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(W=>W.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,W=A.length;B<W;B++){const ee=A[B],V=ee.shadow;if(V===void 0){Ze("WebGLShadowMap:",ee,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ie=V.getFrameExtents();s.multiply(ie),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,V.mapSize.y=r.y));const J=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=J,V.map===null||q===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===tr){if(ee.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Cn(s.x,s.y,{format:ts,type:qn,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),V.map.texture.name=ee.name+".shadowMap",V.map.depthTexture=new yr(s.x,s.y,Vn),V.map.depthTexture.name=ee.name+".shadowMapDepth",V.map.depthTexture.format=xi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Bt,V.map.depthTexture.magFilter=Bt}else ee.isPointLight?(V.map=new Ph(s.x),V.map.depthTexture=new N0(s.x,Yn)):(V.map=new Cn(s.x,s.y),V.map.depthTexture=new yr(s.x,s.y,Yn)),V.map.depthTexture.name=ee.name+".shadowMap",V.map.depthTexture.format=xi,this.type===ma?(V.map.depthTexture.compareFunction=J?Rc:wc,V.map.depthTexture.minFilter=Xt,V.map.depthTexture.magFilter=Xt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Bt,V.map.depthTexture.magFilter=Bt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);const j=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();ee.isPointLight!==!0&&V.updateMatrices(ee,x);for(let re=0;re<j;re++){const Me=V.getCamera(re);if(ee.isPointLight){const Fe=V.camera,de=V.matrix,Oe=ee.distance||Fe.far;Oe!==Fe.far&&(Fe.far=Oe,Fe.updateProjectionMatrix()),$s.setFromMatrixPosition(ee.matrixWorld),Fe.position.copy($s),jo.copy(Fe.position),jo.add(PM[re]),Fe.up.copy(DM[re]),Fe.lookAt(jo),Fe.updateMatrixWorld(),de.makeTranslation(-$s.x,-$s.y,-$s.z),Cd.multiplyMatrices(Fe.projectionMatrix,Fe.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Cd,Fe.coordinateSystem,Fe.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,re),n.clear();else{re===0&&(n.setRenderTarget(V.map),n.clear());const Fe=V.getViewport(re);a.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),G.viewport(a)}i=V.getFrustum(re),S(D,x,Me,ee,this.type)}V.isPointLightShadow!==!0&&this.type===tr&&y(V,x),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,L,F)};function y(A,D){const x=e.update(b);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null?A.mapPass=new Cn(s.x,s.y,{format:ts,type:qn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(D,null,x,d,b,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(D,null,x,h,b,null)}function P(A,D,x,w){let L=null;const F=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(F!==void 0)L=F;else if(L=x.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const G=L.uuid,q=D.uuid;let B=c[G];B===void 0&&(B={},c[G]=B);let W=B[q];W===void 0&&(W=L.clone(),B[q]=W,D.addEventListener("dispose",T)),L=W}if(L.visible=D.visible,L.wireframe=D.wireframe,w===tr?L.side=D.shadowSide!==null?D.shadowSide:D.side:L.side=D.shadowSide!==null?D.shadowSide:f[D.side],L.alphaMap=D.alphaMap,L.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,L.map=D.map,L.clipShadows=D.clipShadows,L.clippingPlanes=D.clippingPlanes,L.clipIntersection=D.clipIntersection,L.displacementMap=D.displacementMap,L.displacementScale=D.displacementScale,L.displacementBias=D.displacementBias,L.wireframeLinewidth=D.wireframeLinewidth,L.linewidth=D.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const G=n.properties.get(L);G.light=x}return L}function S(A,D,x,w,L){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&L===tr)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);const q=e.update(A),B=A.material;if(Array.isArray(B)){const W=q.groups;for(let ee=0,V=W.length;ee<V;ee++){const ie=W[ee],J=B[ie.materialIndex];if(J&&J.visible){const j=P(A,J,w,L);A.onBeforeShadow(n,A,D,x,q,j,ie),n.renderBufferDirect(x,null,q,j,A,ie),A.onAfterShadow(n,A,D,x,q,j,ie)}}}else if(B.visible){const W=P(A,B,w,L);A.onBeforeShadow(n,A,D,x,q,W,null),n.renderBufferDirect(x,null,q,W,A,null),A.onAfterShadow(n,A,D,x,q,W,null)}}const G=A.children;for(let q=0,B=G.length;q<B;q++)S(G[q],D,x,w,L)}function T(A){A.target.removeEventListener("dispose",T);for(const x in c){const w=c[x],L=A.target.uuid;L in w&&(w[L].dispose(),delete w[L])}}}function IM(n,e){function t(){let O=!1;const ye=new wt;let ce=null;const Ee=new wt(0,0,0,0);return{setMask:function(Le){ce!==Le&&!O&&(n.colorMask(Le,Le,Le,Le),ce=Le)},setLocked:function(Le){O=Le},setClear:function(Le,ue,Xe,ke,bt){bt===!0&&(Le*=ke,ue*=ke,Xe*=ke),ye.set(Le,ue,Xe,ke),Ee.equals(ye)===!1&&(n.clearColor(Le,ue,Xe,ke),Ee.copy(ye))},reset:function(){O=!1,ce=null,Ee.set(-1,0,0,0)}}}function i(){let O=!1,ye=!1,ce=null,Ee=null,Le=null;return{setReversed:function(ue){if(ye!==ue){const Xe=e.get("EXT_clip_control");ue?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),ye=ue;const ke=Le;Le=null,this.setClear(ke)}},getReversed:function(){return ye},setTest:function(ue){ue?se(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(ue){ce!==ue&&!O&&(n.depthMask(ue),ce=ue)},setFunc:function(ue){if(ye&&(ue=l0[ue]),Ee!==ue){switch(ue){case fl:n.depthFunc(n.NEVER);break;case hl:n.depthFunc(n.ALWAYS);break;case pl:n.depthFunc(n.LESS);break;case Sr:n.depthFunc(n.LEQUAL);break;case ml:n.depthFunc(n.EQUAL);break;case gl:n.depthFunc(n.GEQUAL);break;case _l:n.depthFunc(n.GREATER);break;case vl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ee=ue}},setLocked:function(ue){O=ue},setClear:function(ue){Le!==ue&&(Le=ue,ye&&(ue=1-ue),n.clearDepth(ue))},reset:function(){O=!1,ce=null,Ee=null,Le=null,ye=!1}}}function s(){let O=!1,ye=null,ce=null,Ee=null,Le=null,ue=null,Xe=null,ke=null,bt=null;return{setTest:function(ut){O||(ut?se(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(ut){ye!==ut&&!O&&(n.stencilMask(ut),ye=ut)},setFunc:function(ut,xn,Dn){(ce!==ut||Ee!==xn||Le!==Dn)&&(n.stencilFunc(ut,xn,Dn),ce=ut,Ee=xn,Le=Dn)},setOp:function(ut,xn,Dn){(ue!==ut||Xe!==xn||ke!==Dn)&&(n.stencilOp(ut,xn,Dn),ue=ut,Xe=xn,ke=Dn)},setLocked:function(ut){O=ut},setClear:function(ut){bt!==ut&&(n.clearStencil(ut),bt=ut)},reset:function(){O=!1,ye=null,ce=null,Ee=null,Le=null,ue=null,Xe=null,ke=null,bt=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d={},h=new WeakMap,v=[],b=null,m=!1,p=null,y=null,P=null,S=null,T=null,A=null,D=null,x=new ct(0,0,0),w=0,L=!1,F=null,G=null,q=null,B=null,W=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ie=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(J)[1]),V=ie>=1):J.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),V=ie>=2);let j=null,re={};const Me=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),de=new wt().fromArray(Me),Oe=new wt().fromArray(Fe);function We(O,ye,ce,Ee){const Le=new Uint8Array(4),ue=n.createTexture();n.bindTexture(O,ue),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<ce;Xe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,Ee,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(ye+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return ue}const K={};K[n.TEXTURE_2D]=We(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=We(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=We(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=We(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(n.DEPTH_TEST),a.setFunc(Sr),Q(!1),fe(Ru),se(n.CULL_FACE),ne(fi);function se(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function ve(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function ze(O,ye){return d[O]!==ye?(n.bindFramebuffer(O,ye),d[O]=ye,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ye),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function Pe(O,ye){let ce=v,Ee=!1;if(O){ce=h.get(ye),ce===void 0&&(ce=[],h.set(ye,ce));const Le=O.textures;if(ce.length!==Le.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,Xe=Le.length;ue<Xe;ue++)ce[ue]=n.COLOR_ATTACHMENT0+ue;ce.length=Le.length,Ee=!0}}else ce[0]!==n.BACK&&(ce[0]=n.BACK,Ee=!0);Ee&&n.drawBuffers(ce)}function R(O){return b!==O?(n.useProgram(O),b=O,!0):!1}const I={[Ms]:n.FUNC_ADD,[Cg]:n.FUNC_SUBTRACT,[Pg]:n.FUNC_REVERSE_SUBTRACT};I[Dg]=n.MIN,I[Lg]=n.MAX;const z={[Ig]:n.ZERO,[Ug]:n.ONE,[Ng]:n.SRC_COLOR,[Jf]:n.SRC_ALPHA,[Vg]:n.SRC_ALPHA_SATURATE,[Hg]:n.DST_COLOR,[Og]:n.DST_ALPHA,[Fg]:n.ONE_MINUS_SRC_COLOR,[Qf]:n.ONE_MINUS_SRC_ALPHA,[kg]:n.ONE_MINUS_DST_COLOR,[Bg]:n.ONE_MINUS_DST_ALPHA,[zg]:n.CONSTANT_COLOR,[Gg]:n.ONE_MINUS_CONSTANT_COLOR,[Wg]:n.CONSTANT_ALPHA,[Xg]:n.ONE_MINUS_CONSTANT_ALPHA};function ne(O,ye,ce,Ee,Le,ue,Xe,ke,bt,ut){if(O===fi){m===!0&&(ve(n.BLEND),m=!1);return}if(m===!1&&(se(n.BLEND),m=!0),O!==Rg){if(O!==p||ut!==L){if((y!==Ms||T!==Ms)&&(n.blendEquation(n.FUNC_ADD),y=Ms,T=Ms),ut)switch(O){case dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ii:n.blendFunc(n.ONE,n.ONE);break;case Cu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:lt("WebGLState: Invalid blending: ",O);break}else switch(O){case dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ii:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Cu:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pu:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",O);break}P=null,S=null,A=null,D=null,x.set(0,0,0),w=0,p=O,L=ut}return}Le=Le||ye,ue=ue||ce,Xe=Xe||Ee,(ye!==y||Le!==T)&&(n.blendEquationSeparate(I[ye],I[Le]),y=ye,T=Le),(ce!==P||Ee!==S||ue!==A||Xe!==D)&&(n.blendFuncSeparate(z[ce],z[Ee],z[ue],z[Xe]),P=ce,S=Ee,A=ue,D=Xe),(ke.equals(x)===!1||bt!==w)&&(n.blendColor(ke.r,ke.g,ke.b,bt),x.copy(ke),w=bt),p=O,L=!1}function ae(O,ye){O.side===ci?ve(n.CULL_FACE):se(n.CULL_FACE);let ce=O.side===an;ye&&(ce=!ce),Q(ce),O.blending===dr&&O.transparent===!1?ne(fi):ne(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const Ee=O.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),pe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(O){F!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),F=O)}function fe(O){O!==Tg?(se(n.CULL_FACE),O!==G&&(O===Ru?n.cullFace(n.BACK):O===Ag?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),G=O}function he(O){O!==q&&(V&&n.lineWidth(O),q=O)}function pe(O,ye,ce){O?(se(n.POLYGON_OFFSET_FILL),(B!==ye||W!==ce)&&(B=ye,W=ce,a.getReversed()&&(ye=-ye),n.polygonOffset(ye,ce))):ve(n.POLYGON_OFFSET_FILL)}function oe(O){O?se(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function Re(O){O===void 0&&(O=n.TEXTURE0+ee-1),j!==O&&(n.activeTexture(O),j=O)}function C(O,ye,ce){ce===void 0&&(j===null?ce=n.TEXTURE0+ee-1:ce=j);let Ee=re[ce];Ee===void 0&&(Ee={type:void 0,texture:void 0},re[ce]=Ee),(Ee.type!==O||Ee.texture!==ye)&&(j!==ce&&(n.activeTexture(ce),j=ce),n.bindTexture(O,ye||K[O]),Ee.type=O,Ee.texture=ye)}function De(){const O=re[j];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Te(){try{n.compressedTexImage2D(...arguments)}catch(O){lt("WebGLState:",O)}}function E(){try{n.compressedTexImage3D(...arguments)}catch(O){lt("WebGLState:",O)}}function g(){try{n.texSubImage2D(...arguments)}catch(O){lt("WebGLState:",O)}}function U(){try{n.texSubImage3D(...arguments)}catch(O){lt("WebGLState:",O)}}function k(){try{n.compressedTexSubImage2D(...arguments)}catch(O){lt("WebGLState:",O)}}function Z(){try{n.compressedTexSubImage3D(...arguments)}catch(O){lt("WebGLState:",O)}}function me(){try{n.texStorage2D(...arguments)}catch(O){lt("WebGLState:",O)}}function _e(){try{n.texStorage3D(...arguments)}catch(O){lt("WebGLState:",O)}}function te(){try{n.texImage2D(...arguments)}catch(O){lt("WebGLState:",O)}}function le(){try{n.texImage3D(...arguments)}catch(O){lt("WebGLState:",O)}}function ge(O){return f[O]!==void 0?f[O]:n.getParameter(O)}function Ie(O,ye){f[O]!==ye&&(n.pixelStorei(O,ye),f[O]=ye)}function be(O){de.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),de.copy(O))}function Se(O){Oe.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Oe.copy(O))}function Ge(O,ye){let ce=c.get(ye);ce===void 0&&(ce=new WeakMap,c.set(ye,ce));let Ee=ce.get(O);Ee===void 0&&(Ee=n.getUniformBlockIndex(ye,O.name),ce.set(O,Ee))}function qe(O,ye){const Ee=c.get(ye).get(O);l.get(ye)!==Ee&&(n.uniformBlockBinding(ye,Ee,O.__bindingPointIndex),l.set(ye,Ee))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},j=null,re={},d={},h=new WeakMap,v=[],b=null,m=!1,p=null,y=null,P=null,S=null,T=null,A=null,D=null,x=new ct(0,0,0),w=0,L=!1,F=null,G=null,q=null,B=null,W=null,de.set(0,0,n.canvas.width,n.canvas.height),Oe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:ve,bindFramebuffer:ze,drawBuffers:Pe,useProgram:R,setBlending:ne,setMaterial:ae,setFlipSided:Q,setCullFace:fe,setLineWidth:he,setPolygonOffset:pe,setScissorTest:oe,activeTexture:Re,bindTexture:C,unbindTexture:De,compressedTexImage2D:Te,compressedTexImage3D:E,texImage2D:te,texImage3D:le,pixelStorei:Ie,getParameter:ge,updateUBOMapping:Ge,uniformBlockBinding:qe,texStorage2D:me,texStorage3D:_e,texSubImage2D:g,texSubImage3D:U,compressedTexSubImage2D:k,compressedTexSubImage3D:Z,scissor:be,viewport:Se,reset:Qe}}function UM(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,u=new WeakMap,f=new Set;let d;const h=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,g){return v?new OffscreenCanvas(E,g):Ua("canvas")}function m(E,g,U){let k=1;const Z=Te(E);if((Z.width>U||Z.height>U)&&(k=U/Math.max(Z.width,Z.height)),k<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const me=Math.floor(k*Z.width),_e=Math.floor(k*Z.height);d===void 0&&(d=b(me,_e));const te=g?b(me,_e):d;return te.width=me,te.height=_e,te.getContext("2d").drawImage(E,0,0,me,_e),Ze("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+me+"x"+_e+")."),te}else return"data"in E&&Ze("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function p(E){return E.generateMipmaps}function y(E){n.generateMipmap(E)}function P(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(E,g,U,k,Z,me=!1){if(E!==null){if(n[E]!==void 0)return n[E];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let _e;k&&(_e=e.get("EXT_texture_norm16"),_e||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=g;if(g===n.RED&&(U===n.FLOAT&&(te=n.R32F),U===n.HALF_FLOAT&&(te=n.R16F),U===n.UNSIGNED_BYTE&&(te=n.R8),U===n.UNSIGNED_SHORT&&_e&&(te=_e.R16_EXT),U===n.SHORT&&_e&&(te=_e.R16_SNORM_EXT)),g===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(te=n.R8UI),U===n.UNSIGNED_SHORT&&(te=n.R16UI),U===n.UNSIGNED_INT&&(te=n.R32UI),U===n.BYTE&&(te=n.R8I),U===n.SHORT&&(te=n.R16I),U===n.INT&&(te=n.R32I)),g===n.RG&&(U===n.FLOAT&&(te=n.RG32F),U===n.HALF_FLOAT&&(te=n.RG16F),U===n.UNSIGNED_BYTE&&(te=n.RG8),U===n.UNSIGNED_SHORT&&_e&&(te=_e.RG16_EXT),U===n.SHORT&&_e&&(te=_e.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(te=n.RG8UI),U===n.UNSIGNED_SHORT&&(te=n.RG16UI),U===n.UNSIGNED_INT&&(te=n.RG32UI),U===n.BYTE&&(te=n.RG8I),U===n.SHORT&&(te=n.RG16I),U===n.INT&&(te=n.RG32I)),g===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(te=n.RGB8UI),U===n.UNSIGNED_SHORT&&(te=n.RGB16UI),U===n.UNSIGNED_INT&&(te=n.RGB32UI),U===n.BYTE&&(te=n.RGB8I),U===n.SHORT&&(te=n.RGB16I),U===n.INT&&(te=n.RGB32I)),g===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(te=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(te=n.RGBA16UI),U===n.UNSIGNED_INT&&(te=n.RGBA32UI),U===n.BYTE&&(te=n.RGBA8I),U===n.SHORT&&(te=n.RGBA16I),U===n.INT&&(te=n.RGBA32I)),g===n.RGB&&(U===n.UNSIGNED_SHORT&&_e&&(te=_e.RGB16_EXT),U===n.SHORT&&_e&&(te=_e.RGB16_SNORM_EXT),U===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(te=n.R11F_G11F_B10F)),g===n.RGBA){const le=me?La:st.getTransfer(Z);U===n.FLOAT&&(te=n.RGBA32F),U===n.HALF_FLOAT&&(te=n.RGBA16F),U===n.UNSIGNED_BYTE&&(te=le===ht?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT&&_e&&(te=_e.RGBA16_EXT),U===n.SHORT&&_e&&(te=_e.RGBA16_SNORM_EXT),U===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function T(E,g){let U;return E?g===null||g===Yn||g===br?U=n.DEPTH24_STENCIL8:g===Vn?U=n.DEPTH32F_STENCIL8:g===Mr&&(U=n.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Yn||g===br?U=n.DEPTH_COMPONENT24:g===Vn?U=n.DEPTH_COMPONENT32F:g===Mr&&(U=n.DEPTH_COMPONENT16),U}function A(E,g){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Bt&&E.minFilter!==Xt?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function D(E){const g=E.target;g.removeEventListener("dispose",D),w(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function x(E){const g=E.target;g.removeEventListener("dispose",x),F(g)}function w(E){const g=i.get(E);if(g.__webglInit===void 0)return;const U=E.source,k=h.get(U);if(k){const Z=k[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&L(E),Object.keys(k).length===0&&h.delete(U)}i.remove(E)}function L(E){const g=i.get(E);n.deleteTexture(g.__webglTexture);const U=E.source,k=h.get(U);delete k[g.__cacheKey],a.memory.textures--}function F(E){const g=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let Z=0;Z<g.__webglFramebuffer[k].length;Z++)n.deleteFramebuffer(g.__webglFramebuffer[k][Z]);else n.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)n.deleteFramebuffer(g.__webglFramebuffer[k]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const U=E.textures;for(let k=0,Z=U.length;k<Z;k++){const me=i.get(U[k]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),a.memory.textures--),i.remove(U[k])}i.remove(E)}let G=0;function q(){G=0}function B(){return G}function W(E){G=E}function ee(){const E=G;return E>=s.maxTextures&&Ze("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,E}function V(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function ie(E,g){const U=i.get(E);if(E.isVideoTexture&&C(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&U.__version!==E.version){const k=E.image;if(k===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(U,E,g);return}}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+g)}function J(E,g){const U=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){ve(U,E,g);return}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+g)}function j(E,g){const U=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){ve(U,E,g);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+g)}function re(E,g){const U=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&U.__version!==E.version){ze(U,E,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+g)}const Me={[xl]:n.REPEAT,[ui]:n.CLAMP_TO_EDGE,[Sl]:n.MIRRORED_REPEAT},Fe={[Bt]:n.NEAREST,[Kg]:n.NEAREST_MIPMAP_NEAREST,[Hr]:n.NEAREST_MIPMAP_LINEAR,[Xt]:n.LINEAR,[So]:n.LINEAR_MIPMAP_NEAREST,[Ki]:n.LINEAR_MIPMAP_LINEAR},de={[Qg]:n.NEVER,[i0]:n.ALWAYS,[jg]:n.LESS,[wc]:n.LEQUAL,[e0]:n.EQUAL,[Rc]:n.GEQUAL,[t0]:n.GREATER,[n0]:n.NOTEQUAL};function Oe(E,g){if(g.type===Vn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Xt||g.magFilter===So||g.magFilter===Hr||g.magFilter===Ki||g.minFilter===Xt||g.minFilter===So||g.minFilter===Hr||g.minFilter===Ki)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Me[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Me[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Me[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Fe[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Fe[g.minFilter]),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,de[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Bt||g.minFilter!==Hr&&g.minFilter!==Ki||g.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function We(E,g){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",D));const k=g.source;let Z=h.get(k);Z===void 0&&(Z={},h.set(k,Z));const me=V(g);if(me!==E.__cacheKey){Z[me]===void 0&&(Z[me]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Z[me].usedTimes++;const _e=Z[E.__cacheKey];_e!==void 0&&(Z[E.__cacheKey].usedTimes--,_e.usedTimes===0&&L(g)),E.__cacheKey=me,E.__webglTexture=Z[me].texture}return U}function K(E,g,U){return Math.floor(Math.floor(E/U)/g)}function se(E,g,U,k){const me=E.updateRanges;if(me.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,U,k,g.data);else{me.sort((Ie,be)=>Ie.start-be.start);let _e=0;for(let Ie=1;Ie<me.length;Ie++){const be=me[_e],Se=me[Ie],Ge=be.start+be.count,qe=K(Se.start,g.width,4),Qe=K(be.start,g.width,4);Se.start<=Ge+1&&qe===Qe&&K(Se.start+Se.count-1,g.width,4)===qe?be.count=Math.max(be.count,Se.start+Se.count-be.start):(++_e,me[_e]=Se)}me.length=_e+1;const te=t.getParameter(n.UNPACK_ROW_LENGTH),le=t.getParameter(n.UNPACK_SKIP_PIXELS),ge=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Ie=0,be=me.length;Ie<be;Ie++){const Se=me[Ie],Ge=Math.floor(Se.start/4),qe=Math.ceil(Se.count/4),Qe=Ge%g.width,O=Math.floor(Ge/g.width),ye=qe,ce=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,Qe,O,ye,ce,U,k,g.data)}E.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,te),t.pixelStorei(n.UNPACK_SKIP_PIXELS,le),t.pixelStorei(n.UNPACK_SKIP_ROWS,ge)}}function ve(E,g,U){let k=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=n.TEXTURE_3D);const Z=We(E,g),me=g.source;t.bindTexture(k,E.__webglTexture,n.TEXTURE0+U);const _e=i.get(me);if(me.version!==_e.__version||Z===!0){if(t.activeTexture(n.TEXTURE0+U),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const ce=st.getPrimaries(st.workingColorSpace),Ee=g.colorSpace===Ii?null:st.getPrimaries(g.colorSpace),Le=g.colorSpace===Ii||ce===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let le=m(g.image,!1,s.maxTextureSize);le=De(g,le);const ge=r.convert(g.format,g.colorSpace),Ie=r.convert(g.type);let be=S(g.internalFormat,ge,Ie,g.normalized,g.colorSpace,g.isVideoTexture);Oe(k,g);let Se;const Ge=g.mipmaps,qe=g.isVideoTexture!==!0,Qe=_e.__version===void 0||Z===!0,O=me.dataReady,ye=A(g,le);if(g.isDepthTexture)be=T(g.format===Zi,g.type),Qe&&(qe?t.texStorage2D(n.TEXTURE_2D,1,be,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,be,le.width,le.height,0,ge,Ie,null));else if(g.isDataTexture)if(Ge.length>0){qe&&Qe&&t.texStorage2D(n.TEXTURE_2D,ye,be,Ge[0].width,Ge[0].height);for(let ce=0,Ee=Ge.length;ce<Ee;ce++)Se=Ge[ce],qe?O&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Se.width,Se.height,ge,Ie,Se.data):t.texImage2D(n.TEXTURE_2D,ce,be,Se.width,Se.height,0,ge,Ie,Se.data);g.generateMipmaps=!1}else qe?(Qe&&t.texStorage2D(n.TEXTURE_2D,ye,be,le.width,le.height),O&&se(g,le,ge,Ie)):t.texImage2D(n.TEXTURE_2D,0,be,le.width,le.height,0,ge,Ie,le.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){qe&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,be,Ge[0].width,Ge[0].height,le.depth);for(let ce=0,Ee=Ge.length;ce<Ee;ce++)if(Se=Ge[ce],g.format!==Tn)if(ge!==null)if(qe){if(O)if(g.layerUpdates.size>0){const Le=od(Se.width,Se.height,g.format,g.type);for(const ue of g.layerUpdates){const Xe=Se.data.subarray(ue*Le/Se.data.BYTES_PER_ELEMENT,(ue+1)*Le/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,ue,Se.width,Se.height,1,ge,Xe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,Se.width,Se.height,le.depth,ge,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,be,Se.width,Se.height,le.depth,0,Se.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,Se.width,Se.height,le.depth,ge,Ie,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,be,Se.width,Se.height,le.depth,0,ge,Ie,Se.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{qe&&Qe&&t.texStorage2D(n.TEXTURE_2D,ye,be,Ge[0].width,Ge[0].height);for(let ce=0,Ee=Ge.length;ce<Ee;ce++)Se=Ge[ce],g.format!==Tn?ge!==null?qe?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,Se.width,Se.height,ge,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,be,Se.width,Se.height,0,Se.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?O&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Se.width,Se.height,ge,Ie,Se.data):t.texImage2D(n.TEXTURE_2D,ce,be,Se.width,Se.height,0,ge,Ie,Se.data)}else if(g.isDataArrayTexture)if(qe){if(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,be,le.width,le.height,le.depth),O)if(g.layerUpdates.size>0){const ce=od(le.width,le.height,g.format,g.type);for(const Ee of g.layerUpdates){const Le=le.data.subarray(Ee*ce/le.data.BYTES_PER_ELEMENT,(Ee+1)*ce/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ee,le.width,le.height,1,ge,Ie,Le)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ge,Ie,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,le.width,le.height,le.depth,0,ge,Ie,le.data);else if(g.isData3DTexture)qe?(Qe&&t.texStorage3D(n.TEXTURE_3D,ye,be,le.width,le.height,le.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ge,Ie,le.data)):t.texImage3D(n.TEXTURE_3D,0,be,le.width,le.height,le.depth,0,ge,Ie,le.data);else if(g.isFramebufferTexture){if(Qe)if(qe)t.texStorage2D(n.TEXTURE_2D,ye,be,le.width,le.height);else{let ce=le.width,Ee=le.height;for(let Le=0;Le<ye;Le++)t.texImage2D(n.TEXTURE_2D,Le,be,ce,Ee,0,ge,Ie,null),ce>>=1,Ee>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const ce=n.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),le.parentNode!==ce){ce.appendChild(le),f.add(g),ce.onpaint=Ee=>{const Le=Ee.changedElements;for(const ue of f)Le.includes(ue.image)&&(ue.needsUpdate=!0)},ce.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,le);else{const Le=n.RGBA,ue=n.RGBA,Xe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Le,ue,Xe,le)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ge.length>0){if(qe&&Qe){const ce=Te(Ge[0]);t.texStorage2D(n.TEXTURE_2D,ye,be,ce.width,ce.height)}for(let ce=0,Ee=Ge.length;ce<Ee;ce++)Se=Ge[ce],qe?O&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,ge,Ie,Se):t.texImage2D(n.TEXTURE_2D,ce,be,ge,Ie,Se);g.generateMipmaps=!1}else if(qe){if(Qe){const ce=Te(le);t.texStorage2D(n.TEXTURE_2D,ye,be,ce.width,ce.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Ie,le)}else t.texImage2D(n.TEXTURE_2D,0,be,ge,Ie,le);p(g)&&y(k),_e.__version=me.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function ze(E,g,U){if(g.image.length!==6)return;const k=We(E,g),Z=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+U);const me=i.get(Z);if(Z.version!==me.__version||k===!0){t.activeTexture(n.TEXTURE0+U);const _e=st.getPrimaries(st.workingColorSpace),te=g.colorSpace===Ii?null:st.getPrimaries(g.colorSpace),le=g.colorSpace===Ii||_e===te?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const ge=g.isCompressedTexture||g.image[0].isCompressedTexture,Ie=g.image[0]&&g.image[0].isDataTexture,be=[];for(let ue=0;ue<6;ue++)!ge&&!Ie?be[ue]=m(g.image[ue],!0,s.maxCubemapSize):be[ue]=Ie?g.image[ue].image:g.image[ue],be[ue]=De(g,be[ue]);const Se=be[0],Ge=r.convert(g.format,g.colorSpace),qe=r.convert(g.type),Qe=S(g.internalFormat,Ge,qe,g.normalized,g.colorSpace),O=g.isVideoTexture!==!0,ye=me.__version===void 0||k===!0,ce=Z.dataReady;let Ee=A(g,Se);Oe(n.TEXTURE_CUBE_MAP,g);let Le;if(ge){O&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Qe,Se.width,Se.height);for(let ue=0;ue<6;ue++){Le=be[ue].mipmaps;for(let Xe=0;Xe<Le.length;Xe++){const ke=Le[Xe];g.format!==Tn?Ge!==null?O?ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Xe,0,0,ke.width,ke.height,Ge,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Xe,Qe,ke.width,ke.height,0,ke.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Xe,0,0,ke.width,ke.height,Ge,qe,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Xe,Qe,ke.width,ke.height,0,Ge,qe,ke.data)}}}else{if(Le=g.mipmaps,O&&ye){Le.length>0&&Ee++;const ue=Te(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Qe,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(Ie){O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,be[ue].width,be[ue].height,Ge,qe,be[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Qe,be[ue].width,be[ue].height,0,Ge,qe,be[ue].data);for(let Xe=0;Xe<Le.length;Xe++){const bt=Le[Xe].image[ue].image;O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Xe+1,0,0,bt.width,bt.height,Ge,qe,bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Xe+1,Qe,bt.width,bt.height,0,Ge,qe,bt.data)}}else{O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ge,qe,be[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Qe,Ge,qe,be[ue]);for(let Xe=0;Xe<Le.length;Xe++){const ke=Le[Xe];O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Xe+1,0,0,Ge,qe,ke.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Xe+1,Qe,Ge,qe,ke.image[ue])}}}p(g)&&y(n.TEXTURE_CUBE_MAP),me.__version=Z.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Pe(E,g,U,k,Z,me){const _e=r.convert(U.format,U.colorSpace),te=r.convert(U.type),le=S(U.internalFormat,_e,te,U.normalized,U.colorSpace),ge=i.get(g),Ie=i.get(U);if(Ie.__renderTarget=g,!ge.__hasExternalTextures){const be=Math.max(1,g.width>>me),Se=Math.max(1,g.height>>me);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,me,le,be,Se,g.depth,0,_e,te,null):t.texImage2D(Z,me,le,be,Se,0,_e,te,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Re(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,Z,Ie.__webglTexture,0,oe(g)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,Z,Ie.__webglTexture,me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function R(E,g,U){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer){const k=g.depthTexture,Z=k&&k.isDepthTexture?k.type:null,me=T(g.stencilBuffer,Z),_e=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Re(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe(g),me,g.width,g.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe(g),me,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,me,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,E)}else{const k=g.textures;for(let Z=0;Z<k.length;Z++){const me=k[Z],_e=r.convert(me.format,me.colorSpace),te=r.convert(me.type),le=S(me.internalFormat,_e,te,me.normalized,me.colorSpace);Re(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe(g),le,g.width,g.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe(g),le,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,le,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function I(E,g,U){const k=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=i.get(g.depthTexture);if(Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,g.depthTexture.addEventListener("dispose",D)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,g.depthTexture);const ge=r.convert(g.depthTexture.format),Ie=r.convert(g.depthTexture.type);let be;g.depthTexture.format===xi?be=n.DEPTH_COMPONENT24:g.depthTexture.format===Zi&&(be=n.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,be,g.width,g.height,0,ge,Ie,null)}}else ie(g.depthTexture,0);const me=Z.__webglTexture,_e=oe(g),te=k?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,le=g.depthTexture.format===Zi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===xi)Re(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,te,me,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,le,te,me,0);else if(g.depthTexture.format===Zi)Re(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,te,me,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,le,te,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function z(E){const g=i.get(E),U=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const k=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",Z)};k.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=k}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(U)for(let k=0;k<6;k++)I(g.__webglFramebuffer[k],E,k);else{const k=E.texture.mipmaps;k&&k.length>0?I(g.__webglFramebuffer[0],E,0):I(g.__webglFramebuffer,E,0)}else if(U){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=n.createRenderbuffer(),R(g.__webglDepthbuffer[k],E,!1);else{const Z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=g.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,me)}}else{const k=E.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),R(g.__webglDepthbuffer,E,!1);else{const Z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,me)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(E,g,U){const k=i.get(E);g!==void 0&&Pe(k.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&z(E)}function ae(E){const g=E.texture,U=i.get(E),k=i.get(g);E.addEventListener("dispose",x);const Z=E.textures,me=E.isWebGLCubeRenderTarget===!0,_e=Z.length>1;if(_e||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=g.version,a.memory.textures++),me){U.__webglFramebuffer=[];for(let te=0;te<6;te++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[te]=[];for(let le=0;le<g.mipmaps.length;le++)U.__webglFramebuffer[te][le]=n.createFramebuffer()}else U.__webglFramebuffer[te]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let te=0;te<g.mipmaps.length;te++)U.__webglFramebuffer[te]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(_e)for(let te=0,le=Z.length;te<le;te++){const ge=i.get(Z[te]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Re(E)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let te=0;te<Z.length;te++){const le=Z[te];U.__webglColorRenderbuffer[te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[te]);const ge=r.convert(le.format,le.colorSpace),Ie=r.convert(le.type),be=S(le.internalFormat,ge,Ie,le.normalized,le.colorSpace,E.isXRRenderTarget===!0),Se=oe(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,be,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,U.__webglColorRenderbuffer[te])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),R(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(me){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,g);for(let te=0;te<6;te++)if(g.mipmaps&&g.mipmaps.length>0)for(let le=0;le<g.mipmaps.length;le++)Pe(U.__webglFramebuffer[te][le],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,le);else Pe(U.__webglFramebuffer[te],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);p(g)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let te=0,le=Z.length;te<le;te++){const ge=Z[te],Ie=i.get(ge);let be=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(be=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,Ie.__webglTexture),Oe(be,ge),Pe(U.__webglFramebuffer,E,ge,n.COLOR_ATTACHMENT0+te,be,0),p(ge)&&y(be)}t.unbindTexture()}else{let te=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(te=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,k.__webglTexture),Oe(te,g),g.mipmaps&&g.mipmaps.length>0)for(let le=0;le<g.mipmaps.length;le++)Pe(U.__webglFramebuffer[le],E,g,n.COLOR_ATTACHMENT0,te,le);else Pe(U.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,te,0);p(g)&&y(te),t.unbindTexture()}E.depthBuffer&&z(E)}function Q(E){const g=E.textures;for(let U=0,k=g.length;U<k;U++){const Z=g[U];if(p(Z)){const me=P(E),_e=i.get(Z).__webglTexture;t.bindTexture(me,_e),y(me),t.unbindTexture()}}}const fe=[],he=[];function pe(E){if(E.samples>0){if(Re(E)===!1){const g=E.textures,U=E.width,k=E.height;let Z=n.COLOR_BUFFER_BIT;const me=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(E),te=g.length>1;if(te)for(let ge=0;ge<g.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const le=E.texture.mipmaps;le&&le.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ge=0;ge<g.length;ge++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),te){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[ge]);const Ie=i.get(g[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ie,0)}n.blitFramebuffer(0,0,U,k,0,0,U,k,Z,n.NEAREST),l===!0&&(fe.length=0,he.length=0,fe.push(n.COLOR_ATTACHMENT0+ge),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(fe.push(me),he.push(me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,he)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,fe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),te)for(let ge=0;ge<g.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,_e.__webglColorRenderbuffer[ge]);const Ie=i.get(g[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){const g=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function oe(E){return Math.min(s.maxSamples,E.samples)}function Re(E){const g=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function C(E){const g=a.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function De(E,g){const U=E.colorSpace,k=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==Da&&U!==Ii&&(st.getTransfer(U)===ht?(k!==Tn||Z!==_n)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",U)),g}function Te(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=q,this.getTextureUnits=B,this.setTextureUnits=W,this.setTexture2D=ie,this.setTexture2DArray=J,this.setTexture3D=j,this.setTextureCube=re,this.rebindTextures=ne,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=z,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Re,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function NM(n,e){function t(i,s=Ii){let r;const a=st.getTransfer(s);if(i===_n)return n.UNSIGNED_BYTE;if(i===bc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===yc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===uh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===dh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===lh)return n.BYTE;if(i===ch)return n.SHORT;if(i===Mr)return n.UNSIGNED_SHORT;if(i===Mc)return n.INT;if(i===Yn)return n.UNSIGNED_INT;if(i===Vn)return n.FLOAT;if(i===qn)return n.HALF_FLOAT;if(i===fh)return n.ALPHA;if(i===hh)return n.RGB;if(i===Tn)return n.RGBA;if(i===xi)return n.DEPTH_COMPONENT;if(i===Zi)return n.DEPTH_STENCIL;if(i===ph)return n.RED;if(i===Ec)return n.RED_INTEGER;if(i===ts)return n.RG;if(i===Tc)return n.RG_INTEGER;if(i===Ac)return n.RGBA_INTEGER;if(i===ga||i===_a||i===va||i===xa)if(a===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ml||i===bl||i===yl||i===El)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tl||i===Al||i===wl||i===Rl||i===Cl||i===Ca||i===Pl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Tl||i===Al)return a===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===wl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Rl)return r.COMPRESSED_R11_EAC;if(i===Cl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ca)return r.COMPRESSED_RG11_EAC;if(i===Pl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Dl||i===Ll||i===Il||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===Hl||i===kl||i===Vl||i===zl||i===Gl||i===Wl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ll)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Il)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ul)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ol)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xl||i===Yl||i===ql)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Xl)return a===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kl||i===Zl||i===Pa||i===$l)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Kl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===br?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const FM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OM=`
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

}`;class BM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Eh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Kn({vertexShader:FM,fragmentShader:OM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dn(new ja(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HM extends is{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,v=null;const b=typeof XRWebGLBinding<"u",m=new BM,p={},y=t.getContextAttributes();let P=null,S=null;const T=[],A=[],D=new rt;let x=null,w=null;const L=new gn;L.viewport=new wt;const F=new gn;F.viewport=new wt;const G=[L,F],q=new Y0;let B=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let se=T[K];return se===void 0&&(se=new Co,T[K]=se),se.getTargetRaySpace()},this.getControllerGrip=function(K){let se=T[K];return se===void 0&&(se=new Co,T[K]=se),se.getGripSpace()},this.getHand=function(K){let se=T[K];return se===void 0&&(se=new Co,T[K]=se),se.getHandSpace()};function ee(K){const se=A.indexOf(K.inputSource);if(se===-1)return;const ve=T[se];ve!==void 0&&(ve.update(K.inputSource,K.frame,c||a),ve.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",ie);for(let K=0;K<T.length;K++){const se=A[K];se!==null&&(A[K]=null,T[K].disconnect(se))}B=null,W=null,m.reset();for(const K in p)delete p[K];if(e.setRenderTarget(P),h=null,d=null,f=null,s=null,S=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(D.width,D.height,!1),w!==null){const K=w.camera;K.fov=w.fov,K.zoom=w.zoom,K.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(P=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",V),s.addEventListener("inputsourceschange",ie),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(D),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,ze=null,Pe=null;y.depth&&(Pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=y.stencil?Zi:xi,ze=y.stencil?br:Yn);const R={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(R),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Cn(d.textureWidth,d.textureHeight,{format:Tn,type:_n,depthTexture:new yr(d.textureWidth,d.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const ve={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Cn(h.framebufferWidth,h.framebufferHeight,{format:Tn,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),We.setContext(s),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(K){for(let se=0;se<K.removed.length;se++){const ve=K.removed[se],ze=A.indexOf(ve);ze>=0&&(A[ze]=null,T[ze].disconnect(ve))}for(let se=0;se<K.added.length;se++){const ve=K.added[se];let ze=A.indexOf(ve);if(ze===-1){for(let R=0;R<T.length;R++)if(R>=A.length){A.push(ve),ze=R;break}else if(A[R]===null){A[R]=ve,ze=R;break}if(ze===-1)break}const Pe=T[ze];Pe&&Pe.connect(ve)}}const J=new H,j=new H;function re(K,se,ve){J.setFromMatrixPosition(se.matrixWorld),j.setFromMatrixPosition(ve.matrixWorld);const ze=J.distanceTo(j),Pe=se.projectionMatrix.elements,R=ve.projectionMatrix.elements,I=Pe[14]/(Pe[10]-1),z=Pe[14]/(Pe[10]+1),ne=(Pe[9]+1)/Pe[5],ae=(Pe[9]-1)/Pe[5],Q=(Pe[8]-1)/Pe[0],fe=(R[8]+1)/R[0],he=I*Q,pe=I*fe,oe=ze/(-Q+fe),Re=oe*-Q;if(se.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Re),K.translateZ(oe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Pe[10]===-1)K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const C=I+oe,De=z+oe,Te=he-Re,E=pe+(ze-Re),g=ne*z/De*C,U=ae*z/De*C;K.projectionMatrix.makePerspective(Te,E,g,U,C,De),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Me(K,se){se===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(se.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let se=K.near,ve=K.far;m.texture!==null&&(m.depthNear>0&&(se=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),q.near=F.near=L.near=se,q.far=F.far=L.far=ve,(B!==q.near||W!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),B=q.near,W=q.far),q.layers.mask=K.layers.mask|6,L.layers.mask=q.layers.mask&-5,F.layers.mask=q.layers.mask&-3;const ze=K.parent,Pe=q.cameras;Me(q,ze);for(let R=0;R<Pe.length;R++)Me(Pe[R],ze);Pe.length===2?re(q,L,F):q.projectionMatrix.copy(L.projectionMatrix),w===null&&K.isPerspectiveCamera&&(w={camera:K,fov:K.fov,zoom:K.zoom}),Fe(K,q,ze)};function Fe(K,se,ve){ve===null?K.matrix.copy(se.matrixWorld):(K.matrix.copy(ve.matrixWorld),K.matrix.invert(),K.matrix.multiply(se.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Jl*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(q)},this.getCameraTexture=function(K){return p[K]};let de=null;function Oe(K,se){if(u=se.getViewerPose(c||a),v=se,u!==null){const ve=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let ze=!1;ve.length!==q.cameras.length&&(q.cameras.length=0,ze=!0);for(let z=0;z<ve.length;z++){const ne=ve[z];let ae=null;if(h!==null)ae=h.getViewport(ne);else{const fe=f.getViewSubImage(d,ne);ae=fe.viewport,z===0&&(e.setRenderTargetTextures(S,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(S))}let Q=G[z];Q===void 0&&(Q=new gn,Q.layers.enable(z),Q.viewport=new wt,G[z]=Q),Q.matrix.fromArray(ne.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(ne.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ae.x,ae.y,ae.width,ae.height),z===0&&(q.matrix.copy(Q.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),ze===!0&&q.cameras.push(Q)}const Pe=s.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){f=i.getBinding();const z=f.getDepthInformation(ve[0]);z&&z.isValid&&z.texture&&m.init(z,s.renderState)}if(Pe&&Pe.includes("camera-access")&&b){e.state.unbindTexture(),f=i.getBinding();for(let z=0;z<ve.length;z++){const ne=ve[z].camera;if(ne){let ae=p[ne];ae||(ae=new Eh,p[ne]=ae);const Q=f.getCameraImage(ne);ae.sourceTexture=Q}}}}for(let ve=0;ve<T.length;ve++){const ze=A[ve],Pe=T[ve];ze!==null&&Pe!==void 0&&Pe.update(ze,se,c||a)}de&&de(K,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),v=null}const We=new Rh;We.setAnimationLoop(Oe),this.setAnimationLoop=function(K){de=K},this.dispose=function(){}}}const kM=new At,Nh=new Je;Nh.set(-1,0,0,0,1,0,0,0,1);function VM(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Th(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,P,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,P):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),P=y.envMap,S=y.envMapRotation;P&&(m.envMap.value=P,m.envMapRotation.value.setFromMatrix4(kM.makeRotationFromEuler(S)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Nh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,P){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=P*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function zM(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,T){const A=T.program;i.uniformBlockBinding(S,A)}function c(S,T){let A=s[S.id];A===void 0&&(m(S),A=u(S),s[S.id]=A,S.addEventListener("dispose",y));const D=T.program;i.updateUBOMapping(S,D);const x=e.render.frame;r[S.id]!==x&&(d(S),r[S.id]=x)}function u(S){const T=f();S.__bindingPointIndex=T;const A=n.createBuffer(),D=S.__size,x=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,D,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,A),A}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const T=s[S.id],A=S.uniforms,D=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let x=0,w=A.length;x<w;x++){const L=A[x];if(Array.isArray(L))for(let F=0,G=L.length;F<G;F++)h(L[F],x,F,D);else h(L,x,0,D)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(S,T,A,D){if(b(S,T,A,D)===!0){const x=S.__offset,w=S.value;if(Array.isArray(w)){let L=0;for(let F=0;F<w.length;F++){const G=w[F],q=p(G);v(G,S.__data,L),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(w,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,S.__data)}}function v(S,T,A){typeof S=="number"||typeof S=="boolean"?T[0]=S:S.isMatrix3?(T[0]=S.elements[0],T[1]=S.elements[1],T[2]=S.elements[2],T[3]=0,T[4]=S.elements[3],T[5]=S.elements[4],T[6]=S.elements[5],T[7]=0,T[8]=S.elements[6],T[9]=S.elements[7],T[10]=S.elements[8],T[11]=0):ArrayBuffer.isView(S)?T.set(new S.constructor(S.buffer,S.byteOffset,T.length)):S.toArray(T,A)}function b(S,T,A,D){const x=S.value,w=T+"_"+A;if(D[w]===void 0)return typeof x=="number"||typeof x=="boolean"?D[w]=x:ArrayBuffer.isView(x)?D[w]=x.slice():D[w]=x.clone(),!0;{const L=D[w];if(typeof x=="number"||typeof x=="boolean"){if(L!==x)return D[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(L.equals(x)===!1)return L.copy(x),!0}}return!1}function m(S){const T=S.uniforms;let A=0;const D=16;for(let w=0,L=T.length;w<L;w++){const F=Array.isArray(T[w])?T[w]:[T[w]];for(let G=0,q=F.length;G<q;G++){const B=F[G],W=Array.isArray(B.value)?B.value:[B.value];for(let ee=0,V=W.length;ee<V;ee++){const ie=W[ee],J=p(ie),j=A%D,re=j%J.boundary,Me=j+re;A+=re,Me!==0&&D-Me<J.storage&&(A+=D-Me),B.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=A,A+=J.storage}}}const x=A%D;return x>0&&(A+=D-x),S.__size=A,S.__cache={},this}function p(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",S),T}function y(S){const T=S.target;T.removeEventListener("dispose",y);const A=a.indexOf(T.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function P(){for(const S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:P}}const GM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Nn=null;function WM(){return Nn===null&&(Nn=new D0(GM,16,16,ts,qn),Nn.name="DFG_LUT",Nn.minFilter=Xt,Nn.magFilter=Xt,Nn.wrapS=ui,Nn.wrapT=ui,Nn.generateMipmaps=!1,Nn.needsUpdate=!0),Nn}class XM{constructor(e={}){const{canvas:t=a0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=_n}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const b=h,m=new Set([Ac,Tc,Ec]),p=new Set([_n,Yn,Mr,br,bc,yc]),y=new Uint32Array(4),P=new Int32Array(4),S=new H;let T=null,A=null;const D=[],x=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let F=!1,G=null,q=null,B=null,W=null;this._outputColorSpace=mn;let ee=0,V=0,ie=null,J=-1,j=null;const re=new wt,Me=new wt;let Fe=null;const de=new ct(0);let Oe=0,We=t.width,K=t.height,se=1,ve=null,ze=null;const Pe=new wt(0,0,We,K),R=new wt(0,0,We,K);let I=!1;const z=new Mh;let ne=!1,ae=!1;const Q=new At,fe=new H,he=new wt,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Re(){return ie===null?se:1}let C=i;function De(M,N){return t.getContext(M,N)}let Te,E,g,U,k,Z,me,_e,te,le,ge,Ie,be,Se,Ge,qe,Qe,O,ye,ce,Ee,Le,ue;try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sc}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",xn,!1),C===null){const N="webgl2";if(C=De(N,M),C===null)throw De(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xe()}catch(M){throw t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",xn,!1),lt("WebGLRenderer: "+M.message),M}function Xe(){Te=new Wx(C),Te.init(),Ee=new NM(C,Te),E=new Ux(C,Te,e,Ee),g=new IM(C,Te),E.reversedDepthBuffer&&d&&g.buffers.depth.setReversed(!0),q=C.createFramebuffer(),B=C.createFramebuffer(),W=C.createFramebuffer(),U=new qx(C),k=new xM,Z=new UM(C,Te,g,k,E,Ee,U),me=new Gx(L),_e=new Z0(C),Le=new Lx(C,_e),te=new Xx(C,_e,U,Le),le=new Zx(C,te,_e,Le,U),O=new Kx(C,E,Z),Ge=new Nx(k),ge=new vM(L,me,Te,E,Le,Ge),Ie=new VM(L,k),be=new MM,Se=new wM(Te),Qe=new Dx(L,me,g,le,v,l),qe=new LM(L,le,E),ue=new zM(C,U,E,g),ye=new Ix(C,Te,U),ce=new Yx(C,Te,U),U.programs=ge.programs,L.capabilities=E,L.extensions=Te,L.properties=k,L.renderLists=be,L.shadowMap=qe,L.state=g,L.info=U}b!==_n&&(w=new Jx(b,t.width,t.height,o,s,r));const ke=new HM(L,C);this.xr=ke,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=Te.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Te.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(M){M!==void 0&&(se=M,this.setSize(We,K,!1))},this.getSize=function(M){return M.set(We,K)},this.setSize=function(M,N,$=!0){if(ke.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}We=M,K=N,t.width=Math.floor(M*se),t.height=Math.floor(N*se),$===!0&&(t.style.width=M+"px",t.style.height=N+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(We*se,K*se).floor()},this.setDrawingBufferSize=function(M,N,$){We=M,K=N,se=$,t.width=Math.floor(M*$),t.height=Math.floor(N*$),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(b===_n){lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){Ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(re)},this.getViewport=function(M){return M.copy(Pe)},this.setViewport=function(M,N,$,X){M.isVector4?Pe.set(M.x,M.y,M.z,M.w):Pe.set(M,N,$,X),g.viewport(re.copy(Pe).multiplyScalar(se).round())},this.getScissor=function(M){return M.copy(R)},this.setScissor=function(M,N,$,X){M.isVector4?R.set(M.x,M.y,M.z,M.w):R.set(M,N,$,X),g.scissor(Me.copy(R).multiplyScalar(se).round())},this.getScissorTest=function(){return I},this.setScissorTest=function(M){g.setScissorTest(I=M)},this.setOpaqueSort=function(M){ve=M},this.setTransparentSort=function(M){ze=M},this.getClearColor=function(M){return M.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,$=!0){let X=0;if(M){let Y=!1;if(ie!==null){const Ce=ie.texture.format;Y=m.has(Ce)}if(Y){const Ce=ie.texture.type,Ne=p.has(Ce),we=Qe.getClearColor(),Be=Qe.getClearAlpha(),Ve=we.r,et=we.g,nt=we.b;Ne?(y[0]=Ve,y[1]=et,y[2]=nt,y[3]=Be,C.clearBufferuiv(C.COLOR,0,y)):(P[0]=Ve,P[1]=et,P[2]=nt,P[3]=Be,C.clearBufferiv(C.COLOR,0,P))}else X|=C.COLOR_BUFFER_BIT}N&&(X|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(X|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&C.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),G=M},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",xn,!1),Qe.dispose(),be.dispose(),Se.dispose(),k.dispose(),me.dispose(),le.dispose(),Le.dispose(),ue.dispose(),ge.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",zc),ke.removeEventListener("sessionend",Gc),Bi.stop()};function bt(M){M.preventDefault(),Uu("WebGLRenderer: Context Lost."),F=!0}function ut(){Uu("WebGLRenderer: Context Restored."),F=!1;const M=U.autoReset,N=qe.enabled,$=qe.autoUpdate,X=qe.needsUpdate,Y=qe.type;Xe(),U.autoReset=M,qe.enabled=N,qe.autoUpdate=$,qe.needsUpdate=X,qe.type=Y}function xn(M){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Dn(M){const N=M.target;N.removeEventListener("dispose",Dn),zh(N)}function zh(M){Gh(M),k.remove(M)}function Gh(M){const N=k.get(M).programs;N!==void 0&&(N.forEach(function($){ge.releaseProgram($)}),M.isShaderMaterial&&ge.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,$,X,Y,Ce){N===null&&(N=pe);const Ne=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,we=Yh(M,N,$,X,Y);g.setMaterial(X,Ne);let Be=$.index,Ve=1;if(X.wireframe===!0){if(Be=te.getWireframeAttribute($),Be===void 0)return;Ve=2}const et=$.drawRange,nt=$.attributes.position;let He=et.start*Ve,dt=(et.start+et.count)*Ve;Ce!==null&&(He=Math.max(He,Ce.start*Ve),dt=Math.min(dt,(Ce.start+Ce.count)*Ve)),Be!==null?(He=Math.max(He,0),dt=Math.min(dt,Be.count)):nt!=null&&(He=Math.max(He,0),dt=Math.min(dt,nt.count));const Lt=dt-He;if(Lt<0||Lt===1/0)return;Le.setup(Y,X,we,$,Be);let Tt,St=ye;if(Be!==null&&(Tt=_e.get(Be),St=ce,St.setIndex(Tt)),Y.isMesh)X.wireframe===!0?(g.setLineWidth(X.wireframeLinewidth*Re()),St.setMode(C.LINES)):St.setMode(C.TRIANGLES);else if(Y.isLine){let kt=X.linewidth;kt===void 0&&(kt=1),g.setLineWidth(kt*Re()),Y.isLineSegments?St.setMode(C.LINES):Y.isLineLoop?St.setMode(C.LINE_LOOP):St.setMode(C.LINE_STRIP)}else Y.isPoints?St.setMode(C.POINTS):Y.isSprite&&St.setMode(C.TRIANGLES);if(Y.isBatchedMesh)if(Te.get("WEBGL_multi_draw"))St.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const kt=Y._multiDrawStarts,Ue=Y._multiDrawCounts,qt=Y._multiDrawCount,at=Be?_e.get(Be).bytesPerElement:1,fn=k.get(X).currentProgram.getUniforms();for(let Ln=0;Ln<qt;Ln++)fn.setValue(C,"_gl_DrawID",Ln),St.render(kt[Ln]/at,Ue[Ln])}else if(Y.isInstancedMesh)St.renderInstances(He,Lt,Y.count);else if($.isInstancedBufferGeometry){const kt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ue=Math.min($.instanceCount,kt);St.renderInstances(He,Lt,Ue)}else St.render(He,Lt)};function Vc(M,N,$,X){G!==null&&M.isNodeMaterial&&G.setObject(X,M),ne===!0&&Ge.setState(M,$,!1),M.transparent===!0&&M.side===ci&&M.forceSinglePass===!1?(M.side=an,M.needsUpdate=!0,Lr(M,N,X),M.side=ji,M.needsUpdate=!0,Lr(M,N,X),M.side=ci):Lr(M,N,X)}this.compile=function(M,N,$=null){$===null&&($=M),G!==null&&G.renderStart(M,N,$),A=Se.get($),A.init(N),x.push(A),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(N.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),M!==$&&M.traverseVisible(function(Y){Y.isLight&&Y.layers.test(N.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),A.setupLights(),G!==null&&G.updateLights(A.state.lightsArray),ae=this.localClippingEnabled,ne=Ge.init(this.clippingPlanes,ae),ne===!0&&Ge.setGlobalState(this.clippingPlanes,N),G!==null&&qe.render(A.state.shadowsArray,$,N);const X=new Set;return M.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ce=Y.material;if(Ce)if(Array.isArray(Ce))for(let Ne=0;Ne<Ce.length;Ne++){const we=Ce[Ne];Vc(we,$,N,Y),X.add(we)}else Vc(Ce,$,N,Y),X.add(Ce)}),A=x.pop(),G!==null&&G.renderEnd(),X},this.compileAsync=function(M,N,$=null){const X=this.compile(M,N,$);return new Promise(Y=>{function Ce(){if(X.forEach(function(Ne){const Be=k.get(Ne).currentProgram;(Be===void 0||Be.isReady())&&X.delete(Ne)}),X.size===0){Y(M);return}setTimeout(Ce,10)}Te.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let no=null;function Wh(M){no&&no(M)}function zc(){Bi.stop()}function Gc(){Bi.start()}const Bi=new Rh;Bi.setAnimationLoop(Wh),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(M){no=M,ke.setAnimationLoop(M),M===null?Bi.stop():Bi.start()},ke.addEventListener("sessionstart",zc),ke.addEventListener("sessionend",Gc),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;G!==null&&G.renderStart(M,N);const $=ke.enabled===!0&&ke.isPresenting===!0,X=w!==null&&(ie===null||$)&&w.begin(L,ie);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(N),N=ke.getCamera()),M.isScene===!0&&M.onBeforeRender(L,M,N,ie),A=Se.get(M,x.length),A.init(N),A.state.textureUnits=Z.getTextureUnits(),x.push(A),Q.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),z.setFromProjectionMatrix(Q,zn,N.reversedDepth),ae=this.localClippingEnabled,ne=Ge.init(this.clippingPlanes,ae),T=be.get(M,D.length),T.init(),D.push(T),ke.enabled===!0&&ke.isPresenting===!0){const Ne=L.xr.getDepthSensingMesh();Ne!==null&&io(Ne,N,-1/0,L.sortObjects)}io(M,N,0,L.sortObjects),T.finish(),G!==null&&G.updateLights(A.state.lightsArray),L.sortObjects===!0&&T.sort(ve,ze),oe=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,oe&&Qe.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ne===!0&&Ge.beginShadows();const Y=A.state.shadowsArray;if(qe.render(Y,M,N),ne===!0&&Ge.endShadows(),(X&&w.hasRenderPass())===!1){const Ne=T.opaque,we=T.transmissive;if(A.setupLights(),N.isArrayCamera){const Be=N.cameras;if(we.length>0)for(let Ve=0,et=Be.length;Ve<et;Ve++){const nt=Be[Ve];Xc(Ne,we,M,nt)}oe&&Qe.render(M);for(let Ve=0,et=Be.length;Ve<et;Ve++){const nt=Be[Ve];Wc(T,M,nt,nt.viewport)}}else we.length>0&&Xc(Ne,we,M,N),oe&&Qe.render(M),Wc(T,M,N)}ie!==null&&V===0&&(Z.updateMultisampleRenderTarget(ie),Z.updateRenderTargetMipmap(ie)),X&&w.end(L),M.isScene===!0&&M.onAfterRender(L,M,N),Le.resetDefaultState(),J=-1,j=null,x.pop(),x.length>0?(A=x[x.length-1],Z.setTextureUnits(A.state.textureUnits),ne===!0&&Ge.setGlobalState(L.clippingPlanes,A.state.camera)):A=null,D.pop(),D.length>0?T=D[D.length-1]:T=null,G!==null&&G.renderEnd()};function io(M,N,$,X){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLightProbeGrid)A.pushLightProbeGrid(M);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(z)){X&&he.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Q);const Ne=le.update(M),we=M.material;we.visible&&T.push(M,Ne,we,$,he.z,null,N)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(z))){const Ne=le.update(M),we=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),he.copy(M.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),he.copy(Ne.boundingSphere.center)),he.applyMatrix4(M.matrixWorld).applyMatrix4(Q)),Array.isArray(we)){const Be=Ne.groups;for(let Ve=0,et=Be.length;Ve<et;Ve++){const nt=Be[Ve],He=we[nt.materialIndex];He&&He.visible&&T.push(M,Ne,He,$,he.z,nt,N)}}else we.visible&&T.push(M,Ne,we,$,he.z,null,N)}}const Ce=M.children;for(let Ne=0,we=Ce.length;Ne<we;Ne++)io(Ce[Ne],N,$,X)}function Wc(M,N,$,X){const{opaque:Y,transmissive:Ce,transparent:Ne}=M;A.setupLightsView($),ne===!0&&Ge.setGlobalState(L.clippingPlanes,$),X&&g.viewport(re.copy(X)),Y.length>0&&Dr(Y,N,$),Ce.length>0&&Dr(Ce,N,$),Ne.length>0&&Dr(Ne,N,$),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Xc(M,N,$,X){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[X.id]===void 0){const He=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[X.id]=new Cn(1,1,{generateMipmaps:!0,type:He?qn:_n,minFilter:Ki,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}const Ce=A.state.transmissionRenderTarget[X.id],Ne=X.viewport||re;Ce.setSize(Ne.z*L.transmissionResolutionScale,Ne.w*L.transmissionResolutionScale);const we=L.getRenderTarget(),Be=L.getActiveCubeFace(),Ve=L.getActiveMipmapLevel();L.setRenderTarget(Ce),L.getClearColor(de),Oe=L.getClearAlpha(),Oe<1&&L.setClearColor(16777215,.5),L.clear(),oe&&Qe.render($);const et=L.toneMapping;L.toneMapping=Wn;const nt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),A.setupLightsView(X),ne===!0&&Ge.setGlobalState(L.clippingPlanes,X),Dr(M,$,X),Z.updateMultisampleRenderTarget(Ce),Z.updateRenderTargetMipmap(Ce),Te.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let dt=0,Lt=N.length;dt<Lt;dt++){const Tt=N[dt],{object:St,geometry:kt,material:Ue,group:qt}=Tt;if(Ue.side===ci&&St.layers.test(X.layers)){const at=Ue.side;Ue.side=an,Ue.needsUpdate=!0,Yc(St,$,X,kt,Ue,qt),Ue.side=at,Ue.needsUpdate=!0,He=!0}}He===!0&&(Z.updateMultisampleRenderTarget(Ce),Z.updateRenderTargetMipmap(Ce))}L.setRenderTarget(we,Be,Ve),L.setClearColor(de,Oe),nt!==void 0&&(X.viewport=nt),L.toneMapping=et}function Dr(M,N,$){const X=N.isScene===!0?N.overrideMaterial:null;for(let Y=0,Ce=M.length;Y<Ce;Y++){const Ne=M[Y],{object:we,geometry:Be,group:Ve}=Ne;let et=Ne.material;et.allowOverride===!0&&X!==null&&(et=X),we.layers.test($.layers)&&Yc(we,N,$,Be,et,Ve)}}function Yc(M,N,$,X,Y,Ce){G!==null&&Y.isNodeMaterial&&G.setObject(M,Y),M.onBeforeRender(L,N,$,X,Y,Ce),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Y.onBeforeRender(L,N,$,X,M,Ce),Y.transparent===!0&&Y.side===ci&&Y.forceSinglePass===!1?(Y.side=an,Y.needsUpdate=!0,L.renderBufferDirect($,N,X,Y,M,Ce),Y.side=ji,Y.needsUpdate=!0,L.renderBufferDirect($,N,X,Y,M,Ce),Y.side=ci):L.renderBufferDirect($,N,X,Y,M,Ce),M.onAfterRender(L,N,$,X,Y,Ce)}function Lr(M,N,$){N.isScene!==!0&&(N=pe);const X=k.get(M),Y=A.state.lights,Ce=A.state.shadowsArray,Ne=Y.state.version,we=ge.getParameters(M,Y.state,Ce,N,$,A.state.lightProbeGridArray),Be=ge.getProgramCacheKey(we);let Ve=X.programs;X.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,X.fog=N.fog;const et=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;X.envMap=me.get(M.envMap||X.environment,et),X.envMapRotation=X.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Ve===void 0&&(M.addEventListener("dispose",Dn),Ve=new Map,X.programs=Ve);let nt=Ve.get(Be);if(nt!==void 0){if(X.currentProgram===nt&&X.lightsStateVersion===Ne)return Kc(M,we),nt}else we.uniforms=ge.getUniforms(M),G!==null&&M.isNodeMaterial&&G.build(M,$,we),M.onBeforeCompile(we,L),nt=ge.acquireProgram(we,Be),Ve.set(Be,nt),X.uniforms=we.uniforms;const He=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(He.clippingPlanes=Ge.uniform),Kc(M,we),X.needsLights=Kh(M),X.lightsStateVersion=Ne,X.needsLights&&(He.ambientLightColor.value=Y.state.ambient,He.lightProbe.value=Y.state.probe,He.sunLights.value=Y.state.sun,He.sunLightShadows.value=Y.state.sunShadow,He.directionalLights.value=Y.state.directional,He.directionalLightShadows.value=Y.state.directionalShadow,He.spotLights.value=Y.state.spot,He.spotLightShadows.value=Y.state.spotShadow,He.rectAreaLights.value=Y.state.rectArea,He.ltc_1.value=Y.state.rectAreaLTC1,He.ltc_2.value=Y.state.rectAreaLTC2,He.pointLights.value=Y.state.point,He.pointLightShadows.value=Y.state.pointShadow,He.hemisphereLights.value=Y.state.hemi,He.sunShadowMatrix.value=Y.state.sunShadowMatrix,He.sunShadowCascade.value=Y.state.sunShadowCascade,He.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,He.spotLightMatrix.value=Y.state.spotLightMatrix,He.spotLightMap.value=Y.state.spotLightMap,He.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.lightProbeGrid=A.state.lightProbeGridArray.length>0,X.currentProgram=nt,X.uniformsList=null,nt}function qc(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=Sa.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Kc(M,N){const $=k.get(M);$.outputColorSpace=N.outputColorSpace,$.batching=N.batching,$.batchingColor=N.batchingColor,$.instancing=N.instancing,$.instancingColor=N.instancingColor,$.instancingMorph=N.instancingMorph,$.skinning=N.skinning,$.morphTargets=N.morphTargets,$.morphNormals=N.morphNormals,$.morphColors=N.morphColors,$.morphTargetsCount=N.morphTargetsCount,$.numClippingPlanes=N.numClippingPlanes,$.numIntersection=N.numClipIntersection,$.vertexAlphas=N.vertexAlphas,$.vertexTangents=N.vertexTangents,$.toneMapping=N.toneMapping}function Xh(M,N){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(N.matrixWorld);for(let $=0,X=M.length;$<X;$++){const Y=M[$];if(Y.texture!==null&&Y.boundingBox.containsPoint(S))return Y}return null}function Yh(M,N,$,X,Y){N.isScene!==!0&&(N=pe),Z.resetTextureUnits();const Ce=N.fog,Ne=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?N.environment:null,we=ie===null?L.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:st.workingColorSpace,Be=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ve=me.get(X.envMap||Ne,Be),et=X.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,nt=!!$.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),He=!!$.morphAttributes.position,dt=!!$.morphAttributes.normal,Lt=!!$.morphAttributes.color;let Tt=Wn;X.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Tt=L.toneMapping);const St=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,kt=St!==void 0?St.length:0,Ue=k.get(X),qt=A.state.lights;if(ne===!0&&(ae===!0||M!==j)){const yt=M===j&&X.id===J;Ge.setState(X,M,yt)}let at=!1;X.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==qt.state.version||Ue.outputColorSpace!==we||Y.isBatchedMesh&&Ue.batching===!1||!Y.isBatchedMesh&&Ue.batching===!0||Y.isBatchedMesh&&Ue.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ue.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ue.instancing===!1||!Y.isInstancedMesh&&Ue.instancing===!0||Y.isSkinnedMesh&&Ue.skinning===!1||!Y.isSkinnedMesh&&Ue.skinning===!0||Y.isInstancedMesh&&Ue.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ue.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ue.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ue.instancingMorph===!1&&Y.morphTexture!==null||Ue.envMap!==Ve||X.fog===!0&&Ue.fog!==Ce||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==Ge.numPlanes||Ue.numIntersection!==Ge.numIntersection)||Ue.vertexAlphas!==et||Ue.vertexTangents!==nt||Ue.morphTargets!==He||Ue.morphNormals!==dt||Ue.morphColors!==Lt||Ue.toneMapping!==Tt||Ue.morphTargetsCount!==kt||!!Ue.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,Ue.__version=X.version);let fn=Ue.currentProgram;at===!0&&(fn=Lr(X,N,Y),G&&X.isNodeMaterial&&G.onUpdateProgram(X,fn,Ue));let Ln=!1,Mi=!1,ss=!1;const pt=fn.getUniforms(),Pt=Ue.uniforms;if(g.useProgram(fn.program)&&(Ln=!0,Mi=!0,ss=!0),X.id!==J&&(J=X.id,Mi=!0),Ue.needsLights){const yt=Xh(A.state.lightProbeGridArray,Y);Ue.lightProbeGrid!==yt&&(Ue.lightProbeGrid=yt,Mi=!0)}if(Ln||j!==M){g.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),pt.setValue(C,"projectionMatrix",M.projectionMatrix),pt.setValue(C,"viewMatrix",M.matrixWorldInverse);const yi=pt.map.cameraPosition;yi!==void 0&&yi.setValue(C,fe.setFromMatrixPosition(M.matrixWorld)),E.logarithmicDepthBuffer&&pt.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&pt.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),j!==M&&(j=M,Mi=!0,ss=!0)}if(Ue.needsLights&&(qt.state.sunShadowMap.length>0&&pt.setValue(C,"sunShadowMap",qt.state.sunShadowMap,Z),qt.state.directionalShadowMap.length>0&&pt.setValue(C,"directionalShadowMap",qt.state.directionalShadowMap,Z),qt.state.spotShadowMap.length>0&&pt.setValue(C,"spotShadowMap",qt.state.spotShadowMap,Z),qt.state.pointShadowMap.length>0&&pt.setValue(C,"pointShadowMap",qt.state.pointShadowMap,Z)),Y.isSkinnedMesh){pt.setOptional(C,Y,"bindMatrix"),pt.setOptional(C,Y,"bindMatrixInverse");const yt=Y.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),pt.setValue(C,"boneTexture",yt.boneTexture,Z))}Y.isBatchedMesh&&(pt.setOptional(C,Y,"batchingTexture"),pt.setValue(C,"batchingTexture",Y._matricesTexture,Z),pt.setOptional(C,Y,"batchingIdTexture"),pt.setValue(C,"batchingIdTexture",Y._indirectTexture,Z),pt.setOptional(C,Y,"batchingColorTexture"),Y._colorsTexture!==null&&pt.setValue(C,"batchingColorTexture",Y._colorsTexture,Z));const bi=$.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&O.update(Y,$,fn),(Mi||Ue.receiveShadow!==Y.receiveShadow)&&(Ue.receiveShadow=Y.receiveShadow,pt.setValue(C,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&N.environment!==null&&(Pt.envMapIntensity.value=N.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=WM()),Mi){if(pt.setValue(C,"toneMappingExposure",L.toneMappingExposure),Ue.needsLights&&qh(Pt,ss),Ce&&X.fog===!0&&Ie.refreshFogUniforms(Pt,Ce),Ie.refreshMaterialUniforms(Pt,X,se,K,A.state.transmissionRenderTarget[M.id]),Ue.needsLights&&Ue.lightProbeGrid){const yt=Ue.lightProbeGrid;Pt.probesSH.value=yt.texture,Pt.probesMin.value.copy(yt.boundingBox.min),Pt.probesMax.value.copy(yt.boundingBox.max),Pt.probesResolution.value.copy(yt.resolution)}Sa.upload(C,qc(Ue),Pt,Z)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Sa.upload(C,qc(Ue),Pt,Z),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&pt.setValue(C,"center",Y.center),pt.setValue(C,"modelViewMatrix",Y.modelViewMatrix),pt.setValue(C,"normalMatrix",Y.normalMatrix),pt.setValue(C,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){const yt=X.uniformsGroups;for(let yi=0,rs=yt.length;yi<rs;yi++){const $c=yt[yi];ue.update($c,fn),ue.bind($c,fn)}}return fn}function qh(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.sunLights.needsUpdate=N,M.sunLightShadows.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Kh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(M,N,$){const X=k.get(M);X.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),k.get(M.texture).__webglTexture=N,k.get(M.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:$,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const $=k.get(M);$.__webglFramebuffer=N,$.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,$=0){ie=M,ee=N,V=$;let X=null,Y=!1,Ce=!1;if(M){const we=k.get(M);if(we.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(C.FRAMEBUFFER,we.__webglFramebuffer),re.copy(M.viewport),Me.copy(M.scissor),Fe=M.scissorTest,g.viewport(re),g.scissor(Me),g.setScissorTest(Fe),J=-1;return}else if(we.__webglFramebuffer===void 0)Z.setupRenderTarget(M);else if(we.__hasExternalTextures)Z.rebindTextures(M,k.get(M.texture).__webglTexture,k.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const et=M.depthTexture;if(we.__boundDepthTexture!==et){if(et!==null&&k.has(et)&&(M.width!==et.image.width||M.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(M)}}const Be=M.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ce=!0);const Ve=k.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ve[N])?X=Ve[N][$]:X=Ve[N],Y=!0):M.samples>0&&Z.useMultisampledRTT(M)===!1?X=k.get(M).__webglMultisampledFramebuffer:Array.isArray(Ve)?X=Ve[$]:X=Ve,re.copy(M.viewport),Me.copy(M.scissor),Fe=M.scissorTest}else re.copy(Pe).multiplyScalar(se).floor(),Me.copy(R).multiplyScalar(se).floor(),Fe=I;if($!==0&&(X=q),g.bindFramebuffer(C.FRAMEBUFFER,X)&&g.drawBuffers(M,X),g.viewport(re),g.scissor(Me),g.setScissorTest(Fe),Y){const we=k.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,we.__webglTexture,$)}else if(Ce){const we=N;for(let Be=0;Be<M.textures.length;Be++){const Ve=k.get(M.textures[Be]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Be,Ve.__webglTexture,$,we)}}else if(M!==null&&$!==0){const we=k.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,we.__webglTexture,$)}J=-1};function Zc(M){const N=k.get(M);return(N.__readFormat!==M.format||N.__readType!==M.type)&&(N.__readFormat=M.format,N.__readType=M.type,N.__formatReadable=E.textureFormatReadable(M.format),N.__typeReadable=E.textureTypeReadable(M.type)),N}this.readRenderTargetPixels=function(M,N,$,X,Y,Ce,Ne,we=0){if(!(M&&M.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=k.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be){g.bindFramebuffer(C.FRAMEBUFFER,Be);try{const Ve=M.textures[we],et=Ve.format,nt=Ve.type;M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+we);const He=Zc(Ve);if(He.__formatReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-X&&$>=0&&$<=M.height-Y&&C.readPixels(N,$,X,Y,Ee.convert(et),Ee.convert(nt),Ce)}finally{const Ve=ie!==null?k.get(ie).__webglFramebuffer:null;g.bindFramebuffer(C.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(M,N,$,X,Y,Ce,Ne,we=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=k.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be)if(N>=0&&N<=M.width-X&&$>=0&&$<=M.height-Y){g.bindFramebuffer(C.FRAMEBUFFER,Be);const Ve=M.textures[we],et=Ve.format,nt=Ve.type;M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+we);const He=Zc(Ve);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,dt),C.bufferData(C.PIXEL_PACK_BUFFER,Ce.byteLength,C.STREAM_READ),C.readPixels(N,$,X,Y,Ee.convert(et),Ee.convert(nt),0),C.bindBuffer(C.PIXEL_PACK_BUFFER,null);const Lt=ie!==null?k.get(ie).__webglFramebuffer:null;g.bindFramebuffer(C.FRAMEBUFFER,Lt);const Tt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await o0(C,Tt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,dt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Ce),C.bindBuffer(C.PIXEL_PACK_BUFFER,null),C.deleteBuffer(dt),C.deleteSync(Tt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,$=0){const X=Math.pow(2,-$),Y=Math.floor(M.image.width*X),Ce=Math.floor(M.image.height*X),Ne=N!==null?N.x:0,we=N!==null?N.y:0;Z.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,$,0,0,Ne,we,Y,Ce),g.unbindTexture()},this.copyTextureToTexture=function(M,N,$=null,X=null,Y=0,Ce=0){let Ne,we,Be,Ve,et,nt,He,dt,Lt;const Tt=M.isCompressedTexture?M.mipmaps[Ce]:M.image;if($!==null)Ne=$.max.x-$.min.x,we=$.max.y-$.min.y,Be=$.isBox3?$.max.z-$.min.z:1,Ve=$.min.x,et=$.min.y,nt=$.isBox3?$.min.z:0;else{const Pt=Math.pow(2,-Y);Ne=Math.floor(Tt.width*Pt),we=Math.floor(Tt.height*Pt),M.isDataArrayTexture?Be=Tt.depth:M.isData3DTexture?Be=Math.floor(Tt.depth*Pt):Be=1,Ve=0,et=0,nt=0}X!==null?(He=X.x,dt=X.y,Lt=X.z):(He=0,dt=0,Lt=0);const St=Ee.convert(N.format),kt=Ee.convert(N.type);let Ue;N.isData3DTexture?(Z.setTexture3D(N,0),Ue=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Z.setTexture2DArray(N,0),Ue=C.TEXTURE_2D_ARRAY):(Z.setTexture2D(N,0),Ue=C.TEXTURE_2D),g.activeTexture(C.TEXTURE0),g.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),g.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),g.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const qt=g.getParameter(C.UNPACK_ROW_LENGTH),at=g.getParameter(C.UNPACK_IMAGE_HEIGHT),fn=g.getParameter(C.UNPACK_SKIP_PIXELS),Ln=g.getParameter(C.UNPACK_SKIP_ROWS),Mi=g.getParameter(C.UNPACK_SKIP_IMAGES);g.pixelStorei(C.UNPACK_ROW_LENGTH,Tt.width),g.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Tt.height),g.pixelStorei(C.UNPACK_SKIP_PIXELS,Ve),g.pixelStorei(C.UNPACK_SKIP_ROWS,et),g.pixelStorei(C.UNPACK_SKIP_IMAGES,nt);const ss=M.isDataArrayTexture||M.isData3DTexture,pt=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const Pt=k.get(M),bi=k.get(N),yt=k.get(Pt.__renderTarget),yi=k.get(bi.__renderTarget);g.bindFramebuffer(C.READ_FRAMEBUFFER,yt.__webglFramebuffer),g.bindFramebuffer(C.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let rs=0;rs<Be;rs++)ss&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,k.get(M).__webglTexture,Y,nt+rs),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,k.get(N).__webglTexture,Ce,Lt+rs)),C.blitFramebuffer(Ve,et,Ne,we,He,dt,Ne,we,C.DEPTH_BUFFER_BIT,C.NEAREST);g.bindFramebuffer(C.READ_FRAMEBUFFER,null),g.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(Y!==0||M.isRenderTargetTexture||k.has(M)){const Pt=k.get(M),bi=k.get(N);g.bindFramebuffer(C.READ_FRAMEBUFFER,B),g.bindFramebuffer(C.DRAW_FRAMEBUFFER,W);for(let yt=0;yt<Be;yt++)ss?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pt.__webglTexture,Y,nt+yt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Pt.__webglTexture,Y),pt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,bi.__webglTexture,Ce,Lt+yt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,bi.__webglTexture,Ce),Y!==0?C.blitFramebuffer(Ve,et,Ne,we,He,dt,Ne,we,C.COLOR_BUFFER_BIT,C.NEAREST):pt?C.copyTexSubImage3D(Ue,Ce,He,dt,Lt+yt,Ve,et,Ne,we):C.copyTexSubImage2D(Ue,Ce,He,dt,Ve,et,Ne,we);g.bindFramebuffer(C.READ_FRAMEBUFFER,null),g.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else pt?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(Ue,Ce,He,dt,Lt,Ne,we,Be,St,kt,Tt.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(Ue,Ce,He,dt,Lt,Ne,we,Be,St,Tt.data):C.texSubImage3D(Ue,Ce,He,dt,Lt,Ne,we,Be,St,kt,Tt):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Ce,He,dt,Ne,we,St,kt,Tt.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Ce,He,dt,Tt.width,Tt.height,St,Tt.data):C.texSubImage2D(C.TEXTURE_2D,Ce,He,dt,Ne,we,St,kt,Tt);g.pixelStorei(C.UNPACK_ROW_LENGTH,qt),g.pixelStorei(C.UNPACK_IMAGE_HEIGHT,at),g.pixelStorei(C.UNPACK_SKIP_PIXELS,fn),g.pixelStorei(C.UNPACK_SKIP_ROWS,Ln),g.pixelStorei(C.UNPACK_SKIP_IMAGES,Mi),Ce===0&&N.generateMipmaps&&C.generateMipmap(Ue),g.unbindTexture()},this.initRenderTarget=function(M){k.get(M).__webglFramebuffer===void 0&&Z.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Z.setTextureCube(M,0):M.isData3DTexture?Z.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Z.setTexture2DArray(M,0):Z.setTexture2D(M,0),g.unbindTexture()},this.resetState=function(){ee=0,V=0,ie=null,g.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}function Pd(n=globalThis.localStorage){try{const e=n&&n.getItem?n.getItem("sr_aero_fleet_v1"):null;if(!e)return!1;const t=JSON.parse(e);return!!(t&&Array.isArray(t.aircrafts)&&t.aircrafts.length>0)}catch{return!1}}const YM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3ccircle%20cx='12'%20cy='12'%20r='9'/%3e%3cpath%20d='M12%208v8M8%2012h8'/%3e%3c/svg%3e",qM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M3%206%20A2%202%200%200%201%205%204%20H9%20L11%206%20H19%20A2%202%200%200%201%2021%208%20V10'%3e%3c/path%3e%3cpath%20d='M3%2010%20H21%20A1.5%201.5%200%200%201%2022.4%2012%20L19.5%2019%20A2%202%200%200%201%2017.7%2020%20H5%20A2%202%200%200%201%203%2018%20Z'%3e%3c/path%3e%3c/svg%3e",Dd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M12%202%20C11.3%202%2011%203.2%2011%204%20V9%20L3%2013%20V15%20L11%2013%20V18%20L8%2020%20V22%20L12%2021%20L16%2022%20V20%20L13%2018%20V13%20L21%2015%20V13%20L13%209%20V4%20C13%203.2%2012.7%202%2012%202Z'%3e%3c/path%3e%3c/svg%3e",Ld="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M10.3%203.6%201.8%2018a2%202%200%200%200%201.7%203h17a2%202%200%200%200%201.7-3L13.7%203.6a2%202%200%200%200-3.4%200Z'/%3e%3cpath%20d='M12%209v4m0%204h.01'/%3e%3c/svg%3e",Id="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3crect%20x='3'%20y='5'%20width='18'%20height='16'%20rx='2'/%3e%3cpath%20d='M16%203v4M8%203v4M3%2010h18M8%2014h.01M12%2014h.01M16%2014h.01M8%2018h.01M12%2018h.01'/%3e%3c/svg%3e",KM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='m15%2018-6-6%206-6'/%3e%3c/svg%3e",Ud="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M14.7%206.3a4%204%200%200%200-5-5L7%204l3%203-3%203-3-3-2.7%202.7a4%204%200%200%200%205%205L14%2022l3-3-7.7-7.7'/%3e%3c/svg%3e",Nd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3crect%20x='3'%20y='3'%20width='7'%20height='9'%20rx='1'/%3e%3crect%20x='14'%20y='3'%20width='7'%20height='5'%20rx='1'/%3e%3crect%20x='14'%20y='12'%20width='7'%20height='9'%20rx='1'/%3e%3crect%20x='3'%20y='16'%20width='7'%20height='5'%20rx='1'/%3e%3c/svg%3e",Fd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cellipse%20cx='12'%20cy='5'%20rx='9'%20ry='3'/%3e%3cpath%20d='M3%205v7c0%201.7%204%203%209%203s9-1.3%209-3V5M3%2012v7c0%201.7%204%203%209%203s9-1.3%209-3v-7'/%3e%3c/svg%3e",Od="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M3%206h18M8%206V4h8v2m3%200-1%2015H6L5%206M10%2011v6m4-6v6'/%3e%3c/svg%3e",ZM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M12%203v12m-5-5%205%205%205-5M5%2021h14'/%3e%3c/svg%3e",$M="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M12%2020h9M16.5%203.5a2.1%202.1%200%200%201%203%203L8%2018l-4%201%201-4Z'/%3e%3c/svg%3e",JM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='m9%2018%206-6-6-6'/%3e%3c/svg%3e",Bd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M3%2012a9%209%200%201%200%203-6.7L3%208'/%3e%3cpath%20d='M3%203v5h5M12%207v5l3%202'/%3e%3c/svg%3e",QM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M2%2012s3.5-7%2010-7%2010%207%2010%207-3.5%207-10%207-10-7-10-7z'/%3e%3ccircle%20cx='12'%20cy='12'%20r='3'/%3e%3c/svg%3e",jM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M15%203h4a2%202%200%200%201%202%202v14a2%202%200%200%201-2%202h-4M10%2017l5-5-5-5M15%2012H3'/%3e%3c/svg%3e",eb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M4%206h16'/%3e%3cpath%20d='M4%2012h16'/%3e%3cpath%20d='M4%2018h16'/%3e%3c/svg%3e",tb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M12%203%204%206v6c0%205%203%208%208%2010%205-2%208-5%208-10V6z'/%3e%3cpath%20d='m8%2012%203%203%205-6'/%3e%3c/svg%3e",nb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M3%2012a9%209%200%201%200%203-6.7'/%3e%3cpath%20d='M3%204v6h6'/%3e%3cpath%20d='M12%208v5l3%202'/%3e%3c/svg%3e",ib="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M19%2021H5a2%202%200%200%201-2-2V5a2%202%200%200%201%202-2h11l5%205v11a2%202%200%200%201-2%202Z'/%3e%3cpath%20d='M17%2021v-8H7v8M7%203v5h8'/%3e%3c/svg%3e",sb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3ccircle%20cx='12'%20cy='13'%20r='8'/%3e%3cpath%20d='M12%209v4l3%202M9%202h6'/%3e%3c/svg%3e",rb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M9%2021H5a2%202%200%200%201-2-2V5a2%202%200%200%201%202-2h4M16%2017l5-5-5-5M21%2012H9'/%3e%3c/svg%3e",ab="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M17%2018a5%205%200%200%200%200-10%207%207%200%200%200-13%203%204%204%200%200%200%201%208h5'/%3e%3cpath%20d='m8%2016%203%203-3%203m8-12-3-3%203-3'/%3e%3c/svg%3e",ob="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3ccircle%20cx='12'%20cy='8'%20r='4'/%3e%3cpath%20d='M4%2021a8%208%200%200%201%2016%200'/%3e%3c/svg%3e",lb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3crect%20x='3'%20y='5'%20width='18'%20height='16'%20rx='2'/%3e%3cpath%20d='M16%203v4M8%203v4M3%2010h18M12%2014v3m0%201h.01'/%3e%3c/svg%3e",cb=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},ir="sr_aero_fleet_v1",Fh="sr_aero_fleet_meta_v1",ub="dashboards",db="main",Oh=20,fb=30,Bh=fb*864e5,pn=new Date;pn.setHours(0,0,0,0);const Hh="calidad@divmaaer.com",hb=[Hh,"marlonchca3@gmail.com","gato0247@gmail.com","tatianamhl250197@gmail.com"],kh={apiKey:"AIzaSyDRAZZ4VafNNIi3G9_USyARksFqgKYE5Fo",authDomain:"calidadddddd.firebaseapp.com",projectId:"calidadddddd",storageBucket:"calidadddddd.firebasestorage.app",messagingSenderId:"532433890487",appId:"1:532433890487:web:d7011a757f953c03363132",measurementId:"G-60JGPFZ5TL"},Vh=[{component:"Mi-17 MTV-1",series:"96019",workshop:"Helicentro",overhaul:"20/03/2020",assigned:"2,000 h",consumed:"860 h",remaining:"1,140 h",due:"20/03/2028"},{component:"Motor 1 TV3-117BM",series:"7087882200433",workshop:"URAL",overhaul:"12/04/2016",assigned:"1,500 h",consumed:"828.5 h",remaining:"671.5 h",due:"12/04/2026"},{component:"Motor 2 TV3-117BM",series:"7087884000357",workshop:"BORYSFEN",overhaul:"21/04/2016",assigned:"1,500 h",consumed:"828.5 h",remaining:"671.5 h",due:"21/04/2026"},{component:"AI-9B",series:"7080924200355",workshop:"OOO ARP Motor",overhaul:"16/07/2020",assigned:"600 arr",consumed:"694 arr",remaining:"-94 arr",due:"16/07/2028"},{component:"VR-14",series:"L0701003MP2",workshop:"AO REDUCTOR PM",overhaul:"19/09/2017",assigned:"2,000 h",consumed:"828 h",remaining:"1,172 h",due:"19/09/2027"}];function hr(n){return JSON.parse(JSON.stringify(n))}function Hd(){try{return JSON.parse(localStorage.getItem(Fh)||"{}")||{}}catch{return{}}}function Js(n){try{localStorage.setItem(Fh,JSON.stringify({updatedAt:n}))}catch{}}function el(){return{selectedId:"pnp-501",changes:[],trash:[],aircrafts:[{id:"pnp-501",code:"PNP-501",name:"Mi-17 MTV-1",rows:hr(Vh).map(qi)},{id:"pnp-506",code:"PNP-506",name:"Mi-171",rows:[]}]}}function kn(n){const e=parseFloat(String(n).replace(/[^0-9.-]/g,""));return Number.isFinite(e)?e:0}function Ba(n){const e=Number(n);return Number.isFinite(e)?Number.isInteger(e)?String(e):String(Number(e.toFixed(2))):"0"}function sr(){return Li(pn)}function qi(n){const e=String(n.assignedTboHours??n.assigned??""),t=String(n.assignedTboYears??""),i=String(n.consumedTboHours??n.consumed??""),s=sr(),r=String(n.assignedTsnHours??""),a=String(n.assignedTsnYears??""),o=String(n.consumedTsnHours??""),l=Ba(kn(r)-kn(o)),c=Es(n.overhaul,a)||String(n.remainingTsnYears||""),u=Ba(kn(e)-kn(i)),f=Es(n.overhaul,t)||String(n.due||""),d=f;return{component:String(n.component||""),series:String(n.series||""),manufactureDate:String(n.manufactureDate||n.fabricationDate||n.fechaFabricacion||""),workshop:String(n.workshop||""),overhaul:String(n.overhaul||""),assigned:e,consumed:i,remaining:u,assignedTboHours:e,assignedTboYears:t,consumedTboHours:i,consumedTboYears:s,assignedTsnHours:r,assignedTsnYears:a,consumedTsnHours:o,consumedTsnYears:s,remainingTboHours:u,remainingTboYears:d,remainingTsnHours:l,remainingTsnYears:c,notes:String(n.notes||""),due:f}}function bs(n){if(!Array.isArray(n))return[];const e=Date.now();return n.map((t,i)=>{const s=Number(t.deletedAt||0),r=Number(t.expiresAt||(s?s+Bh:0));return{id:String(t.id||`${s||e}-${i}`),type:t.type==="aircraft"?"aircraft":"component",aircraftId:String(t.aircraftId||""),aircraftCode:String(t.aircraftCode||""),aircraftName:String(t.aircraftName||""),name:String(t.name||""),deletedAt:s,expiresAt:r,data:t.data&&typeof t.data=="object"?hr(t.data):null}}).filter(t=>t.deletedAt>0&&t.expiresAt>e&&t.data).sort((t,i)=>i.deletedAt-t.deletedAt)}function ic(n){return Array.isArray(n)?n.map((e,t)=>({id:String(e.id||`${e.timestamp||Date.now()}-${t}`),timestamp:Number(e.timestamp||0),action:String(e.action||"Cambio registrado"),detail:String(e.detail||""),aircraftCode:String(e.aircraftCode||""),user:String(e.user||"")})).filter(e=>e.timestamp>0).sort((e,t)=>t.timestamp-e.timestamp).slice(0,Oh):[]}function pb(){const n=localStorage.getItem(ir);if(!n)return el();try{const e=JSON.parse(n);return!Array.isArray(e.aircrafts)||e.aircrafts.length===0?el():((!e.selectedId||!e.aircrafts.find(t=>t.id===e.selectedId))&&(e.selectedId=e.aircrafts[0].id),e.changes=ic(e.changes),e.trash=bs(e.trash),e.aircrafts=e.aircrafts.map(t=>({...t,rows:Array.isArray(t.rows)?t.rows.map(qi):[]})),e)}catch{return el()}}function Ci(n){const e=String(n).trim().match(/^(\d{2})\/(\d{2})\/(\d{4})$/);if(!e)return null;const t=Number(e[1]),i=Number(e[2]),s=Number(e[3]),r=new Date(s,i-1,t);return r.getFullYear()!==s||r.getMonth()!==i-1||r.getDate()!==t?null:r}function Li(n){const e=String(n.getDate()).padStart(2,"0"),t=String(n.getMonth()+1).padStart(2,"0");return`${e}/${t}/${n.getFullYear()}`}function mb(n,e){const t=kn(e);if(t<=0)return null;const i=new Date(n),s=Math.round(t*12),r=i.getDate();i.setDate(1),i.setMonth(i.getMonth()+s);const a=new Date(i.getFullYear(),i.getMonth()+1,0).getDate();return i.setDate(Math.min(r,a)),i}function Es(n,e){const t=Ci(n),i=t?mb(t,e):null;return i?Li(i):""}function Nc(n){return String(n??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\x20-\x7E]/g," ").replace(/\s+/g," ").trim()}function gb(n){return Nc(n).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")}function Qs(n){return Nc(n).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"aeronave"}function ti(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function kd(n,e){const t=Nc(n).split(" ").filter(Boolean),i=[];let s="";return t.forEach(r=>{const a=s?`${s} ${r}`:r;if(a.length>e&&s){i.push(s),s=r;return}s=a}),s&&i.push(s),i.length?i:["--"]}function _b(){return Object.values(kh).every(n=>n&&!String(n).startsWith("REEMPLAZAR_"))}function vb(n){return hb.includes(String(n||"").toLowerCase())}function tl(n){return new Promise((e,t)=>{if(document.querySelector(`script[src="${n}"]`)){e();return}const i=document.createElement("script");i.src=n,i.onload=e,i.onerror=t,document.head.appendChild(i)})}const xb={name:"App",data(){return{activeView:"dashboard",activeMenuLabel:"Dashboard",authBusy:!1,authHint:"Usa Ingresar si ya tienes cuenta, o Crear cuenta si es tu primera vez.",authHintError:!1,authReady:!1,cloudErrorMessage:"",cloudStatus:"Local",cloudStatusError:!1,currentUser:null,dbReady:!1,fleet:pb(),firestoreUnsubscribe:null,hasLoadedRemoteFleet:!1,isOwner:!1,isApplyingRemoteFleet:!1,isSavingToFirestore:!1,lastLocalWriteAt:0,lastSyncAt:Pd(localStorage)?Number(Hd().updatedAt||0):0,loginEmail:"",loginPassword:"",passwordVisible:!1,loginThreeCleanup:null,syncSource:"local",mobileMenuOpen:!1,sidebarCollapsed:!1,textSizeLarge:!1,icons:{add:YM,open:qM,aircrafts:Dd,alerts:Ld,calendar:Id,collapse:KM,components:Ud,dashboard:Nd,database:Fd,delete:Od,download:ZM,due:lb,edit:$M,expand:JM,eye:QM,history:Bd,login:jM,menu:eb,overhaul:tb,restore:nb,save:ib,serviceTime:sb,signOut:rb,sync:ab,user:ob},newAircraft:{code:"",name:"",notes:""},editingAircraftId:"",editingAircraftDraft:{code:"",name:"",notes:""},draggingAircraftId:"",draggingRowIndex:null,menuItems:[{label:"Dashboard",target:"dashboard",icon:Nd},{label:"Aeronaves",target:"aeronaves",icon:Dd},{label:"Componentes",target:"componentes",icon:Ud},{label:"Base de datos",target:"base-datos",icon:Fd},{label:"Alertas",target:"alertas",icon:Ld},{label:"Calendario",target:"calendario",icon:Id},{label:"Historial",target:"historial",icon:Bd},{label:"Papelera",target:"papelera",icon:Od}]}},computed:{activeUser(){return this.currentUser},isAuthenticated(){return!!(this.currentUser&&!this.currentUser.isAnonymous)},todayLabel(){return Li(pn)},authStatus(){return this.isAuthenticated?this.isOwner?"Editor":"Solo lectura":"No autenticado"},currentAircraft(){return this.fleet.aircrafts.find(n=>n.id===this.fleet.selectedId)||null},currentRows(){return this.currentAircraft?this.currentAircraft.rows:[]},aircraftChip(){return this.currentAircraft?`${this.currentAircraft.code} (${this.currentAircraft.name})`:"--"},cloudStatusText(){return this.cloudStatus.toLowerCase()},syncSourceText(){return this.syncSource==="remote"?"Remoto":"Local"},lastSyncLabel(){return this.lastSyncAt?new Intl.DateTimeFormat("es-PE",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(this.lastSyncAt)):"Sin datos"},metrics(){const n=this.currentRows,e=n.length,t=n.filter(u=>this.getStatus(u)==="CRITICO").length,i=n.filter(u=>this.getStatus(u)==="ALERTA").length,s=n.filter(u=>this.getStatus(u)==="OK").length,r=n.filter(u=>{const f=Ci(u.due);if(!f)return!1;const d=Math.floor((f-pn)/864e5);return d>=0&&d<=90}).length,a=n.filter(u=>{const f=Ci(u.due);if(!f)return!1;const d=Math.floor((f-pn)/864e5);return d>=0&&d<=180}).length,o=n.reduce((u,f)=>u+this.rowConsumedHours(f),0),l=n.reduce((u,f)=>u+this.rowRemainingHours(f),0),c=Math.round((t+i*.5)/Math.max(e,1)*100);return{total:e,critical:t,alert:i,ok:s,dueIn90:r,dueIn180:a,consumedTotal:o,remainingTotal:l,risk:c}},riskRingStyle(){const n=Math.round(this.metrics.risk/100*360);return{background:`conic-gradient(${this.riskLabel.color} 0 ${n}deg, #183458 ${n}deg 360deg)`}},riskLabel(){return this.metrics.risk>=70?{label:"Alto",color:"var(--danger)"}:this.metrics.risk>=40?{label:"Medio",color:"var(--warn)"}:{label:"Bajo",color:"var(--ok)"}},fleetRiskLabel(){return this.fleetAlertMetrics.risk>=70?{label:"Alto",color:"var(--danger)"}:this.fleetAlertMetrics.risk>=40?{label:"Medio",color:"var(--warn)"}:{label:"Bajo",color:"var(--ok)"}},riskAttentionText(){return`${this.metrics.critical+this.metrics.alert} de ${Math.max(this.metrics.total,1)} componentes requieren atención`},panelTotals(){return{assigned:this.currentRows.reduce((n,e)=>n+this.rowAssignedHours(e),0),consumed:this.currentRows.reduce((n,e)=>n+this.rowConsumedHours(e),0),remaining:this.currentRows.reduce((n,e)=>n+this.rowRemainingHours(e),0)}},dueRows(){return this.currentRows.map((n,e)=>({row:n,index:e,dueDate:Ci(n.due)})).filter(n=>n.dueDate).sort((n,e)=>n.dueDate-e.dueDate)},aircraftSeries(){const n=this.currentRows.find(e=>String(e.series||"").trim());return n?String(n.series).trim():"--"},nextDueDate(){return this.dueRows.length>0?this.dueRows[0].row.due:"--"},aircraftState(){return this.currentRows.length===0?"SIN DATOS":this.metrics.critical>0?"CRITICO":this.metrics.alert>0?"ALERTA":"OPERATIVO"},consumedPct(){const n=this.panelTotals.assigned;return n<=0?0:Math.max(0,Math.min(100,this.panelTotals.consumed/n*100))},chartBars(){const n=this.currentRows.slice(0,6);if(n.length===0)return[];const e=Math.max(1,...n.map(t=>Math.max(this.rowConsumedHours(t)+Math.max(this.rowRemainingHours(t),0),1)));return n.map((t,i)=>{const s=this.rowConsumedHours(t),r=Math.max(this.rowRemainingHours(t),0),a=Math.max(s+r,1),o=this.getStatus(t);return{key:`${t.component}-${i}`,label:t.component||"Sin nombre",logo:this.componentLogo(t),categoryClass:this.categoryClass(t),consumed:s,remaining:r,percentage:Math.round(s/a*100),consumedWidth:Math.max(0,Math.min(100,s/e*100)),remainingWidth:Math.max(0,Math.min(100,r/e*100)),statusClass:o==="CRITICO"?"critical":o==="ALERTA"?"warn":"ok"}})},categoryChart(){const n=new Map;this.currentRows.forEach(t=>{const i=this.componentCategory(t),s=n.get(i.key)||{...i,value:0};s.value+=Math.max(this.rowConsumedHours(t),0),n.set(i.key,s)});const e=Math.max(this.metrics.consumedTotal,1);return Array.from(n.values()).sort((t,i)=>i.value-t.value).map(t=>({...t,percentage:Math.round(t.value/e*100)}))},categoryDonutStyle(){let n=0;const e=this.categoryChart.map(t=>{const i=n+t.percentage/100*360,s=`${t.color} ${n}deg ${i}deg`;return n=i,s});return{background:e.length?`conic-gradient(${e.join(", ")})`:"#183458"}},statusChart(){const n=[{key:"ok",label:"Operativos",value:this.metrics.ok,color:"#16b86a"},{key:"alert",label:"Atención",value:this.metrics.alert,color:"#ffb100"},{key:"critical",label:"Overhaul",value:this.metrics.critical,color:"#ff4f4f"}],e=Math.max(this.metrics.total,1);return n.map(t=>({...t,percentage:Math.round(t.value/e*100)}))},statusDonutStyle(){let n=0;const e=this.statusChart.map(t=>{const i=n+t.percentage/100*360,s=`${t.color} ${n}deg ${i}deg`;return n=i,s});return{background:e.length?`conic-gradient(${e.join(", ")})`:"#183458"}},trendChart(){const n=this.currentRows.slice(0,6),e=n.flatMap(s=>[this.rowConsumedHours(s),Math.max(this.rowRemainingHours(s),0)]),t=Math.max(1,...e),i=n.map((s,r)=>{const a=48+r*532/Math.max(n.length-1,1),o=150-this.rowConsumedHours(s)/t*120,l=150-Math.max(this.rowRemainingHours(s),0)/t*120;return{key:`${s.component}-${r}`,x:a,consumedY:o,remainingY:l,label:this.shortComponentLabel(s.component)}});return{max:t,points:i,consumedPoints:i.map(s=>`${s.x},${s.consumedY}`).join(" "),remainingPoints:i.map(s=>`${s.x},${s.remainingY}`).join(" "),gridLines:[30,70,110,150].map(s=>({y:s}))}},dueEvents(){return this.dueRows.length===0?[{key:"empty",component:"Sin vencimientos registrados",due:"--",className:"ok"}]:this.dueRows.slice(0,5).map(n=>{const e=this.getStatus(n.row);return{key:`${n.row.component}-${n.index}`,component:n.row.component,due:n.row.due,className:e==="CRITICO"?"danger":e==="ALERTA"?"warn":"ok"}})},alertRows(){const n=this.currentRows.map((e,t)=>{const i=this.getStatus(e);return{key:`${e.component}-${t}`,component:e.component||"Sin nombre",status:i,className:i==="CRITICO"?"danger":"warn"}}).filter(e=>e.status==="CRITICO"||e.status==="ALERTA");return n.length?n:[{key:"empty",component:"Sin alertas activas",status:"OK",className:"ok"}]},allAlertRows(){const n=this.fleet.aircrafts.flatMap(e=>(Array.isArray(e.rows)?e.rows:[]).map((t,i)=>{const s=this.getStatus(t);return{key:`${e.id}-${t.component}-${t.series}-${i}`,aircraftCode:e.code||"--",component:t.component||"Sin nombre",status:s,className:s==="CRITICO"?"danger":"warn"}}).filter(t=>t.status==="CRITICO"||t.status==="ALERTA"));return n.length?n:[{key:"empty",aircraftCode:"--",component:"Sin alertas activas",status:"OK",className:"ok"}]},fleetAlertMetrics(){const n=this.fleet.aircrafts.flatMap(o=>Array.isArray(o.rows)?o.rows:[]),e=n.length,t=n.filter(o=>this.getStatus(o)==="CRITICO").length,i=n.filter(o=>this.getStatus(o)==="ALERTA").length,s=n.filter(o=>{const l=Ci(o.due);if(!l)return!1;const c=Math.floor((l-pn)/864e5);return c>=0&&c<=90}).length,r=n.filter(o=>{const l=Ci(o.due);if(!l)return!1;const c=Math.floor((l-pn)/864e5);return c>=0&&c<=180}).length,a=Math.round((t+i*.5)/Math.max(e,1)*100);return{total:e,critical:t,alert:i,dueIn90:s,dueIn180:r,risk:a}},recentChanges(){return ic(this.fleet.changes)},historyRows(){return this.currentRows.map((n,e)=>{const t=this.getStatus(n);return{key:`${n.component}-${n.series}-${e}`,component:n.component||"Sin nombre",series:n.series||"--",manufactureDate:n.manufactureDate||"--",workshop:n.workshop||"--",overhaul:n.overhaul||"--",due:n.due||"--",status:t,statusClass:this.statusClass(n)}})},trashRows(){return bs(this.fleet.trash).map(n=>({...n,typeLabel:n.type==="aircraft"?"Aeronave":"Componente"}))}},watch:{isAuthenticated(n){if(n){this.destroyLoginThreeBackground();return}this.$nextTick(()=>this.initLoginThreeBackground())}},mounted(){this.initAuth(),this.$nextTick(()=>this.initLoginThreeBackground()),window.addEventListener("resize",this.handleResize)},beforeUnmount(){this.destroyLoginThreeBackground(),window.removeEventListener("resize",this.handleResize),this.firestoreUnsubscribe&&this.firestoreUnsubscribe()},methods:{showPassword(){this.authBusy||(this.passwordVisible=!0)},hidePassword(){this.passwordVisible=!1},initLoginThreeBackground(){if(this.loginThreeCleanup||this.isAuthenticated||!this.$refs.threeBg)return;const n=this.$refs.threeBg,e=window.innerWidth<768,t=e?90:180,i=1.7,s=new XM({canvas:n,alpha:!0,antialias:!0,powerPreference:"high-performance"});s.setClearColor(0,0),s.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const r=new y0,a=new gn(60,1,.1,100);a.position.z=8;const o=[],l=new Ht;for(let j=0;j<t;j+=1)o.push((Math.random()-.5)*14,(Math.random()-.5)*10,(Math.random()-.5)*8);l.setAttribute("position",new Ct(o,3));const c=new jl({color:3718648,size:e?.035:.045,transparent:!0,opacity:.8,blending:ii,depthWrite:!1}),u=new U0(l,c);r.add(u);const f=new Ht,d=new Ql({color:2450411,transparent:!0,opacity:.18,blending:ii}),h=new I0(f,d);r.add(h),(()=>{const j=l.attributes.position.array,re=[];for(let Me=0;Me<t;Me+=1){const Fe=j[Me*3],de=j[Me*3+1],Oe=j[Me*3+2];for(let We=Me+1;We<t;We+=1){const K=j[We*3],se=j[We*3+1],ve=j[We*3+2],ze=Fe-K,Pe=de-se,R=Oe-ve;Math.sqrt(ze*ze+Pe*Pe+R*R)<i&&re.push(Fe,de,Oe,K,se,ve)}}h.geometry.setAttribute("position",new Ct(re,3))})();const b=new O0([new H(-7,-2.3,-2),new H(-4,-.7,-2.5),new H(-1,.5,-3),new H(2,-.2,-3),new H(4.5,1.2,-2.5),new H(7,.4,-2)]),m=new Ht().setFromPoints(b.getPoints(150)),p=new Ql({color:2282478,transparent:!0,opacity:.35,blending:ii}),y=new bh(m,p);r.add(y);const P=new Oa(.07,16,16),S=new fr({color:6809849,transparent:!0,opacity:1,blending:ii}),T=new dn(P,S);r.add(T);const A=new Oa(.18,16,16),D=new fr({color:3718648,transparent:!0,opacity:.18,blending:ii,depthWrite:!1}),x=new dn(A,D);r.add(x);const w=new fr({color:5217535,wireframe:!0,transparent:!0,opacity:.16,blending:ii}),L=new dn(new Uc(2.25,.012,8,96),w);L.rotation.x=Math.PI/2.6,L.position.set(-2.2,-.4,-1.6),r.add(L);const F=new dn(new Ic(.72,1),new jl({color:6809849,size:.018,transparent:!0,opacity:.34,blending:ii,depthWrite:!1}));F.position.set(2.6,.45,-.9),r.add(F);let G=0,q=0;const B=j=>{G=j.clientX/window.innerWidth-.5,q=j.clientY/window.innerHeight-.5};document.addEventListener("mousemove",B);const W=()=>{const j=window.innerWidth,re=window.innerHeight;s.setSize(j,re,!1),a.aspect=j/Math.max(re,1),a.updateProjectionMatrix()};let ee=0,V=0;const ie=new q0,J=()=>{const j=ie.getElapsedTime();u.rotation.y+=25e-5,u.rotation.x=Math.sin(j*.08)*.03,h.rotation.y=u.rotation.y,h.rotation.x=u.rotation.x,d.opacity=.11+(Math.sin(j*.7)+1)*.05,V+=9e-4,V>1&&(V=0);const re=b.getPoint(V);T.position.copy(re),x.position.copy(re);const Me=1+Math.sin(j*4)*.35;x.scale.set(Me,Me,Me),L.rotation.z=j*.18,F.rotation.x=j*.28,F.rotation.y=j*.42,a.position.x+=(G*.15-a.position.x)*.015,a.position.y+=(-q*.12-a.position.y)*.015,a.position.z=8,s.render(r,a),ee=window.requestAnimationFrame(J)};W(),window.addEventListener("resize",W),J(),this.loginThreeCleanup=()=>{window.cancelAnimationFrame(ee),window.removeEventListener("resize",W),document.removeEventListener("mousemove",B),l.dispose(),f.dispose(),m.dispose(),P.dispose(),A.dispose(),L.geometry.dispose(),F.geometry.dispose(),c.dispose(),d.dispose(),p.dispose(),S.dispose(),D.dispose(),w.dispose(),F.material.dispose(),s.dispose(),this.loginThreeCleanup=null}},destroyLoginThreeBackground(){this.loginThreeCleanup&&this.loginThreeCleanup()},componentCategory(n){const e=`${n.component||""} ${n.series||""}`.toLowerCase();return/motor|tv3|ai-9|apu/.test(e)?{key:"motors",label:"Motores",color:"#176ee8",logo:"M"}:/vr-|reductor|reduct/.test(e)?{key:"reducers",label:"Reductores",color:"#12b96b",logo:"R"}:/bomba|hidraul/.test(e)?{key:"hydraulic",label:"Hidráulicos",color:"#f2a900",logo:"H"}:/generador|electr|ai-/.test(e)?{key:"systems",label:"Sistemas",color:"#8b62d9",logo:"S"}:{key:"other",label:"Otros",color:"#98a9c2",logo:"O"}},componentLogo(n){return this.componentCategory(n).logo},categoryClass(n){return`category-${this.componentCategory(n).key}`},shortComponentLabel(n){const e=String(n||"Sin datos");return e.length>12?`${e.slice(0,11)}…`:e},async persistFleet(){const n=Date.now();return this.fleet.trash=bs(this.fleet.trash),localStorage.setItem(ir,JSON.stringify(this.fleet)),Js(n),this.lastLocalWriteAt=n,this.lastSyncAt=n,this.syncSource="local",this.isApplyingRemoteFleet?!0:this.saveFleetToFirestore()},getRemoteUpdatedAt(n){if(n&&Number.isFinite(Number(n.updatedEpoch))&&Number(n.updatedEpoch)>0)return Number(n.updatedEpoch);if(!n||!n.updatedAt)return 0;if(typeof n.updatedAt.toMillis=="function")return n.updatedAt.toMillis();if(n.updatedAt.seconds)return Number(n.updatedAt.seconds)*1e3;const e=new Date(n.updatedAt).getTime();return Number.isFinite(e)?e:0},recordSystemChange(n,e,t=""){const i=Date.now(),s=t||(this.currentAircraft?this.currentAircraft.code:""),r=this.currentUser&&this.currentUser.email?this.currentUser.email:"local",a=Array.isArray(this.fleet.changes)?this.fleet.changes:[];this.fleet.changes=[{id:`${i}-${Math.random().toString(36).slice(2,8)}`,timestamp:i,action:n,detail:e,aircraftCode:s,user:r},...a].slice(0,Oh)},addToTrash(n,e,t=null,i=""){const s=Date.now(),r=t||this.currentAircraft||{},a=Array.isArray(this.fleet.trash)?this.fleet.trash:[];this.fleet.trash=bs([{id:`${n}-${s}-${Math.random().toString(36).slice(2,8)}`,type:n,aircraftId:r.id||"",aircraftCode:r.code||"",aircraftName:r.name||"",name:i,deletedAt:s,expiresAt:s+Bh,data:hr(e)},...a])},formatChangeDate(n){return n?new Intl.DateTimeFormat("es-PE",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(n)):"--"},rowAssignedHours(n){return kn(n.assignedTboHours??n.assigned)},rowConsumedHours(n){return kn(n.consumedTboHours??n.consumed)},rowRemainingHours(n){return kn(n.remainingTboHours??n.remaining)},updateTboDerived(n){const e=sr(),t=this.rowAssignedHours(n)-this.rowConsumedHours(n),i=Es(n.overhaul,n.assignedTboYears);n.consumedTboYears=e,n.consumedTsnYears=e,n.remainingTboHours=Ba(t),n.remainingTboYears=i||"",n.assigned=String(n.assignedTboHours??""),n.consumed=String(n.consumedTboHours??""),n.remaining=n.remainingTboHours,i&&(n.due=i)},updateTsnDerived(n){const e=sr(),t=kn(n.assignedTsnHours)-kn(n.consumedTsnHours);n.consumedTsnYears=e,n.remainingTsnHours=Ba(t),n.remainingTsnYears=Es(n.overhaul,n.assignedTsnYears)||""},updateAllDerived(n){this.updateTboDerived(n),this.updateTsnDerived(n)},async saveRowFieldChange(n,e,t=""){t==="tbo"&&this.updateTboDerived(n),t==="tsn"&&this.updateTsnDerived(n),t==="all"&&this.updateAllDerived(n),this.recordSystemChange("Componente actualizado",`${e}: ${n.component||"Sin nombre"}`),await this.persistFleet()},updateCloudStatus(n,e=!1,t=""){this.cloudStatus=n,this.cloudStatusError=e,this.cloudErrorMessage=t},getFirebaseErrorMessage(n){const e=n&&n.code?n.code:"firebase-error",t=n&&n.message?n.message:"Error desconocido de Firebase.";return`${e}: ${t}`},getFleetDocRef(){return!window.firebase||!window.firebase.firestore?null:window.firebase.firestore().collection(ub).doc(db)},getValidFleet(n){return!n||!Array.isArray(n.aircrafts)||n.aircrafts.length===0?null:{selectedId:n.selectedId&&n.aircrafts.some(t=>t.id===n.selectedId)?n.selectedId:n.aircrafts[0].id,changes:ic(n.changes),trash:bs(n.trash),aircrafts:n.aircrafts.map(t=>({id:String(t.id||""),code:String(t.code||""),name:String(t.name||""),notes:String(t.notes||""),rows:Array.isArray(t.rows)?t.rows.map(qi):[]})).filter(t=>t.id&&t.code)}},async loadFleetFromFirestore(){const n=this.getFleetDocRef();if(n)try{const e=await n.get({source:"server"});if(!e.exists){this.updateCloudStatus("Inicial"),this.isOwner&&await this.saveFleetToFirestore(!0);return}const t=e.data()||{},i=this.getValidFleet(t.fleet);if(!i){this.updateCloudStatus("Datos invalidos",!0);return}const s=this.getRemoteUpdatedAt(t)||Date.now();this.hasLoadedRemoteFleet=!0,this.isApplyingRemoteFleet=!0,this.fleet=i,localStorage.setItem(ir,JSON.stringify(i)),Js(s),this.lastSyncAt=s,this.syncSource="remote",this.$nextTick(()=>{this.isApplyingRemoteFleet=!1}),this.updateCloudStatus("Sincronizado")}catch(e){const t=this.getFirebaseErrorMessage(e);console.error("Firestore initial read error:",e),this.updateCloudStatus("Error lectura",!0,t),this.updateLoginHint(`No se pudo cargar la flota desde Firestore. ${t}`,!0)}},subscribeFleetFromFirestore(){const n=this.getFleetDocRef();n&&(this.firestoreUnsubscribe&&this.firestoreUnsubscribe(),this.hasLoadedRemoteFleet=!1,this.updateCloudStatus("Conectando"),this.firestoreUnsubscribe=n.onSnapshot(async e=>{if(e.metadata.hasPendingWrites)return;if(!e.exists){this.updateCloudStatus("Inicial"),this.isOwner&&await this.saveFleetToFirestore(!0);return}const t=e.data()||{},i=this.getValidFleet(t.fleet),s=this.getRemoteUpdatedAt(t),r=Number(Hd().updatedAt||0);if(!i){this.updateCloudStatus("Datos invalidos",!0);return}if(!this.hasLoadedRemoteFleet){this.hasLoadedRemoteFleet=!0,this.isApplyingRemoteFleet=!0,this.fleet=i,localStorage.setItem(ir,JSON.stringify(i));const o=s||Date.now();Js(o),this.lastSyncAt=o,this.syncSource="remote",this.$nextTick(()=>{this.isApplyingRemoteFleet=!1}),this.updateCloudStatus("Sincronizado");return}if(s<=r||this.lastLocalWriteAt&&s<this.lastLocalWriteAt){this.updateCloudStatus("Sincronizado local");return}this.isApplyingRemoteFleet=!0,this.fleet=i,localStorage.setItem(ir,JSON.stringify(i));const a=s||Date.now();Js(a),this.lastSyncAt=a,this.syncSource="remote",this.$nextTick(()=>{this.isApplyingRemoteFleet=!1}),this.updateCloudStatus("Sincronizado")},e=>{const t=this.getFirebaseErrorMessage(e);console.error("Firestore read error:",e),this.firestoreUnsubscribe=null,this.updateCloudStatus("Error lectura",!0,t),this.updateLoginHint(`No se pudo leer Firestore. ${t}`,!0)}))},async saveFleetToFirestore(n=!1){if(!this.dbReady)return this.updateCloudStatus("Sin Firebase",!0),this.updateLoginHint("Firestore aun no esta listo.",!0),!1;if(!this.currentUser||this.currentUser.isAnonymous)return this.updateCloudStatus("Requiere login",!0),this.updateLoginHint("Inicia sesion con el correo autorizado para guardar.",!0),!1;if(!this.isOwner&&!n)return this.updateLoginHint("Tu cuenta tiene permisos de solo lectura.",!0),!1;if(this.isApplyingRemoteFleet)return!1;const e=Pd(localStorage);if(!n&&!e&&!this.isOwner)return!1;if(!n&&!e&&this.isOwner)try{const i=await this.getFleetDocRef().get();if(i.exists&&this.getValidFleet(i.data()&&i.data().fleet))return!1}catch(i){const s=this.getFirebaseErrorMessage(i);return this.updateCloudStatus("Error lectura",!0,s),this.updateLoginHint(`No se pudo comprobar Firestore. ${s}`,!0),!1}const t=this.getFleetDocRef();if(!t)return!1;try{this.isSavingToFirestore=!0,this.updateCloudStatus("Guardando");const i=Date.now();return await t.set({fleet:hr(this.fleet),updatedAt:window.firebase.firestore.FieldValue.serverTimestamp(),updatedBy:this.currentUser&&this.currentUser.email?this.currentUser.email:Hh,updatedEpoch:i},{merge:!0}),Js(i),this.lastSyncAt=i,this.syncSource="local",this.updateCloudStatus("Guardado"),!0}catch(i){const s=this.getFirebaseErrorMessage(i);return console.error("Firestore write error:",i),this.updateCloudStatus("Error escritura",!0,s),this.updateLoginHint(`No se pudo guardar en Firestore. ${s}`,!0),!1}finally{this.isSavingToFirestore=!1}},updateLoginHint(n,e=!1){this.authHint=n,this.authHintError=e},formatMetric(n){return new Intl.NumberFormat("es-PE",{minimumFractionDigits:0,maximumFractionDigits:1}).format(n)},downloadAircraftExcel(n){if(!n)return;const e=this.createAircraftExcel(n),t=new Blob([e],{type:"application/vnd.ms-excel;charset=utf-8"}),i=URL.createObjectURL(t),s=document.createElement("a");s.href=i,s.download=`${Qs(n.code)}-${Qs(n.name)}.xls`,document.body.appendChild(s),s.click(),s.remove(),window.setTimeout(()=>URL.revokeObjectURL(i),1e3)},downloadAircraftPdf(n){if(!n)return;const e=this.createAircraftPdf(n),t=new Blob([e],{type:"application/pdf"}),i=URL.createObjectURL(t),s=document.createElement("a");s.href=i,s.download=`${Qs(n.code)}-${Qs(n.name)}.pdf`,document.body.appendChild(s),s.click(),s.remove(),window.setTimeout(()=>URL.revokeObjectURL(i),1e3)},createAircraftExcel(n){const e=Array.isArray(n.rows)?n.rows:[],t=e.filter(d=>this.getStatus(d)==="CRITICO").length,i=e.filter(d=>this.getStatus(d)==="ALERTA").length,s=e.filter(d=>this.getStatus(d)==="OK").length,r=e.reduce((d,h)=>d+this.rowAssignedHours(h),0),a=e.reduce((d,h)=>d+this.rowConsumedHours(h),0),o=e.reduce((d,h)=>d+this.rowRemainingHours(h),0),l=["Orden","Componente","Serie","Fecha fabricacion","Taller","Ultimo Overhaul","Asignado TBO (hrs)","Asignado TBO (anos)","Consumido TBO hrs","Consumido TBO anos","Asignado TSN (hrs)","Asignado TSN (anos)","Consumido TSN hrs","Consumido TSN anos","Remanente TBO (hrs)","Remanente TBO (anos)","Remanente TSN (hrs)","Remanente TSN (anos)","Notas","Vencimiento","Estado"],c=[7,24,16,16,20,18,16,16,16,16,16,16,16,16,17,17,17,17,30,16,14],u=d=>d==="CRITICO"?"background:#ffd7d7;color:#9b1c1c;font-weight:700;":d==="ALERTA"?"background:#fff0c2;color:#7a5200;font-weight:700;":"background:#d9f7e6;color:#136b3a;font-weight:700;",f=e.map((d,h)=>{const v=this.getStatus(d),b=[h+1,d.component||"--",d.series||"--",d.manufactureDate||"--",d.workshop||"--",d.overhaul||"--",d.assignedTboHours||d.assigned||"--",d.assignedTboYears||"--",d.consumedTboHours||d.consumed||"--",d.consumedTboYears||"--",d.assignedTsnHours||"--",d.assignedTsnYears||"--",d.consumedTsnHours||"--",d.consumedTsnYears||"--",d.remainingTboHours||d.remaining||"--",d.remainingTboYears||"--",d.remainingTsnHours||"--",d.remainingTsnYears||"--",d.notes||"--",d.due||"--",v];return`<tr class="${h%2===0?"even-row":"odd-row"}">${b.map((m,p)=>{const y=p===b.length-1?u(v):"";return`<td style="border:1px solid #b8c7da;padding:7px;vertical-align:top;${p===0||p>=6&&p<=17?"text-align:right;":"text-align:left;"}${y}">${ti(m)}</td>`}).join("")}</tr>`}).join("");return`<!doctype html>
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
    <tr><td class="subtitle" colspan="${l.length}">Reporte de Aeronave: ${ti(n.code)} - ${ti(n.name||"--")}</td></tr>
    <tr><td class="summary-label">Fecha reporte</td><td>${ti(Li(new Date))}</td><td class="summary-label">Componentes</td><td>${e.length}</td><td class="summary-label">OK</td><td>${s}</td><td class="summary-label">Alertas</td><td>${i}</td><td class="summary-label">Criticos</td><td>${t}</td></tr>
    <tr><td class="summary-label">TBO asignado</td><td>${ti(this.formatMetric(r))}</td><td class="summary-label">Consumido</td><td>${ti(this.formatMetric(a))}</td><td class="summary-label">Remanente</td><td>${ti(this.formatMetric(o))}</td><td class="summary-label">Notas</td><td colspan="4">${ti(n.notes||"--")}</td></tr>
    <tr></tr>
    <tr>${l.map(d=>`<th>${ti(d)}</th>`).join("")}</tr>
    ${f||`<tr><td colspan="${l.length}" style="border:1px solid #b8c7da;padding:10px;">No hay componentes registrados.</td></tr>`}
  </table>
</body>
</html>`},createAircraftPdf(n){const r=[];let a=[],o=561;const l=()=>{a.length&&r.push(a.join(`
`)),a=[],o=561},c=de=>{o-de<34&&l()},u=(de,Oe,We,K,se)=>{a.push(`${se.join(" ")} rg ${de} ${Oe} ${We} ${K} re f`)},f=(de,Oe,We,K=9,se="F1",ve=[.11,.17,.23])=>{a.push(`${ve.join(" ")} rg BT /${se} ${K} Tf ${Oe} ${We} Td (${gb(de)}) Tj ET`)},d=(de,Oe,We,K)=>{a.push(`0.72 w 0.70 0.77 0.86 RG ${de} ${Oe} m ${We} ${K} l S`)},h=(de,Oe=34,We=9,K="F1",se=13,ve)=>{c(se),f(de,Oe,o,We,K,ve),o-=se},v=(de,Oe,We,K,se=9)=>{kd(`${de}: ${Oe||"--"}`,K).forEach(ze=>h(ze,We,se))},b=Array.isArray(n.rows)?n.rows:[],m=b.filter(de=>this.getStatus(de)==="CRITICO").length,p=b.filter(de=>this.getStatus(de)==="ALERTA").length,y=b.filter(de=>this.getStatus(de)==="OK").length,P=b.reduce((de,Oe)=>de+this.rowAssignedHours(Oe),0),S=b.reduce((de,Oe)=>de+this.rowConsumedHours(Oe),0),T=b.reduce((de,Oe)=>de+this.rowRemainingHours(Oe),0),A=b.map(de=>({row:de,dueDate:Ci(de.due)})).filter(de=>de.dueDate).sort((de,Oe)=>de.dueDate-Oe.dueDate)[0],D=m>0?"CRITICO":p>0?"ALERTA":b.length?"OPERATIVO":"SIN DATOS";u(34,o-7,774,30,[.04,.23,.47]),f("DIVMAAER - Control de Calidad",46,o+3,12,"F2",[1,1,1]),o-=40,u(34,o-8,774,27,[.86,.92,1]),f(`Reporte de Aeronave: ${n.code}`,46,o+2,13,"F2",[.04,.23,.47]),o-=34,h(n.name||"--",34,11,"F1",16,[.25,.31,.38]),d(34,o+3,808,o+3),o-=12,h("Resumen operativo",34,13,"F2",18,[.04,.23,.47]),h(`Fecha de reporte: ${Li(new Date)}`,34,9,"F1",13);const x=D==="CRITICO"?[.61,.11,.11]:D==="ALERTA"?[.48,.32,0]:[.08,.42,.23];h(`Estado general: ${D}`,34,9,"F2",13,x),h(`Componentes registrados: ${b.length} | Operativos: ${y} | Alertas: ${p} | Criticos: ${m}`,34,9,"F1",13),h(`TBO asignado: ${this.formatMetric(P)} h | Consumido: ${this.formatMetric(S)} h | Remanente: ${this.formatMetric(T)} h`,34,9,"F1",13),h(`Proximo vencimiento: ${A?`${A.row.component||"Componente"} (${A.row.due})`:"--"}`,34,9,"F1",16),v("Notas",n.notes,34,110,9),o-=6,h("Componentes",34,13,"F2",18,[.04,.23,.47]),b.length===0&&h("No hay componentes registrados para esta aeronave.",34,9,"F1",13);const w=14.2,L=[{x:46,width:240},{x:300,width:240},{x:554,width:220}],F=12,G=de=>[["Componente",de.component||"--"],["Serie",de.series||"--"],["Fecha fabricacion",de.manufactureDate||"--"],["Taller",de.workshop||"--"],["Ultimo Overhaul",de.overhaul||"--"],["Vencimiento",de.due||"--"],["Asignado TBO hrs",de.assignedTboHours||de.assigned||"--"],["Asignado TBO anos",de.assignedTboYears||"--"],["Consumido TBO hrs",de.consumedTboHours||de.consumed||"--"],["Consumido TBO anos",de.consumedTboYears||"--"],["Remanente TBO hrs",de.remainingTboHours||de.remaining||"--"],["Remanente TBO anos",de.remainingTboYears||"--"],["Asignado TSN hrs",de.assignedTsnHours||"--"],["Asignado TSN anos",de.assignedTsnYears||"--"],["Consumido TSN hrs",de.consumedTsnHours||"--"],["Consumido TSN anos",de.consumedTsnYears||"--"],["Remanente TSN hrs",de.remainingTsnHours||"--"],["Remanente TSN anos",de.remainingTsnYears||"--"],["Estado",this.getStatus(de)],["Notas",de.notes||"--"]];b.forEach((de,Oe)=>{const We=G(de),K=Math.ceil(We.length/L.length),se=41+K*F+w;c(se);const ve=this.getStatus(de),ze=ve==="CRITICO"?[.61,.11,.11]:ve==="ALERTA"?[.8,.53,0]:[.08,.42,.23],Pe=ve==="CRITICO"?[1,.92,.92]:ve==="ALERTA"?[1,.97,.84]:[.95,.98,1],R=o;u(34,R-9,774,22,ze),f(`Componente ${Oe+1}: ${de.component||"Sin nombre"}`,46,R-1,9.2,"F2",[1,1,1]),f(ve,740,R-1,9.2,"F2",[1,1,1]);const I=R-31,z=K*F+10;u(34,I-z+12,774,z,Pe),d(34,R+13,808,R+13),d(34,I-z+12,808,I-z+12),We.forEach(([ne,ae],Q)=>{const fe=L[Q%L.length],he=Math.floor(Q/L.length),pe=I-he*F,oe=fe.x+86,Re=Math.max(8,Math.floor((fe.width-92)/4.2)),C=ne==="Estado",De=C?ve==="CRITICO"?[.61,.11,.11]:ve==="ALERTA"?[.48,.32,0]:[.08,.42,.23]:[.11,.17,.23];f(`${ne}:`,fe.x,pe,7.4,"F2",[.04,.23,.47]),f(kd(ae,Re)[0],oe,pe,7.4,C?"F2":"F1",De)}),o=I-z+12-w-13}),r.push(a.join(`
`));const q=[],B=de=>(q.push(de),q.length),W=B("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>"),ee=B("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>"),V=[],ie=r.map(de=>B(`<< /Length ${de.length} >>
stream
${de}
endstream`)),J=q.length+r.length+1;ie.forEach(de=>{const Oe=B(`<< /Type /Page /Parent ${J} 0 R /MediaBox [0 0 842 595] /Resources << /Font << /F1 ${W} 0 R /F2 ${ee} 0 R >> >> /Contents ${de} 0 R >>`);V.push(Oe)}),B(`<< /Type /Pages /Kids [${V.map(de=>`${de} 0 R`).join(" ")}] /Count ${V.length} >>`);const j=B(`<< /Type /Catalog /Pages ${J} 0 R >>`);let re=`%PDF-1.4
`;const Me=[0];q.forEach((de,Oe)=>{Me.push(re.length),re+=`${Oe+1} 0 obj
${de}
endobj
`});const Fe=re.length;return re+=`xref
0 ${q.length+1}
0000000000 65535 f 
`,Me.slice(1).forEach(de=>{re+=`${String(de).padStart(10,"0")} 00000 n 
`}),re+=`trailer
<< /Size ${q.length+1} /Root ${j} 0 R >>
startxref
${Fe}
%%EOF`,re},pct(n){const e=Math.max(this.metrics.total,1);return`${Math.round(n/e*100)}%`},getStatus(n){const e=this.rowRemainingHours(n),t=Ci(n.due);if(e<0||t&&t<pn)return"CRITICO";const i=this.rowAssignedHours(n),s=t?Math.floor((t-pn)/864e5):null;return s!==null&&s<=180||i>0&&e<=i*.15?"ALERTA":"OK"},statusClass(n){const e=this.getStatus(n);return e==="CRITICO"?"critical":e==="ALERTA"?"warn":"ok"},navigate(n,e=""){var t;this.activeView=n,this.activeMenuLabel=e||((t=this.menuItems.find(i=>i.target===n))==null?void 0:t.label)||"Dashboard",this.setMobileMenuOpen(!1),this.$nextTick(()=>{const i=document.getElementById(n);i&&this.highlightAndScroll(i)})},highlightAndScroll(n){n.scrollIntoView({behavior:"smooth",block:"start"}),n.classList.add("jump-highlight"),window.setTimeout(()=>n.classList.remove("jump-highlight"),1200)},async openAircraft(n){n&&(this.fleet.selectedId=n,await this.persistFleet(),this.navigate("dashboard"))},startAircraftEdit(n){if(!this.isOwner){window.alert("Solo el propietario puede editar aeronaves.");return}this.editingAircraftId=n.id,this.editingAircraftDraft={code:n.code,name:n.name,notes:n.notes||""}},cancelAircraftEdit(){this.editingAircraftId="",this.editingAircraftDraft={code:"",name:"",notes:""}},async saveAircraftEdit(n){if(!this.isOwner){window.alert("Solo el propietario puede editar aeronaves.");return}const e=this.fleet.aircrafts.find(o=>o.id===n),t=this.editingAircraftDraft.code.trim().toUpperCase(),i=this.editingAircraftDraft.name.trim(),s=this.editingAircraftDraft.notes.trim();if(!e||!t||!i){window.alert("Ingresa codigo y nombre para guardar la aeronave.");return}if(this.fleet.aircrafts.some(o=>o.id!==n&&o.code.toUpperCase()===t)){window.alert("Ese codigo ya existe.");return}e.code=t,e.name=i,e.notes=s,this.cancelAircraftEdit(),this.recordSystemChange("Aeronave actualizada",`${t} - ${i}`,t),await this.persistFleet()||window.alert("La aeronave se actualizo localmente, pero Firebase no pudo sincronizar el cambio.")},aircraftIndex(n){return this.fleet.aircrafts.findIndex(e=>e.id===n)},startAircraftDrag(n,e){if(!this.isOwner||this.editingAircraftId===e){n.preventDefault();return}this.draggingAircraftId=e,n.dataTransfer.effectAllowed="move",n.dataTransfer.setData("text/plain",e)},async dropAircraft(n,e){if(!this.isOwner)return;const t=n.dataTransfer.getData("text/plain")||this.draggingAircraftId,i=this.aircraftIndex(t),s=this.aircraftIndex(e);if(i<0||s<0||i===s){this.finishAircraftDrag();return}const r=[...this.fleet.aircrafts],[a]=r.splice(i,1);r.splice(s,0,a),this.fleet.aircrafts=r,this.finishAircraftDrag(),this.recordSystemChange("Aeronaves reordenadas",`${a.code} movida en la lista`,a.code),await this.persistFleet()||window.alert("El orden se actualizo localmente, pero Firebase no pudo sincronizar el cambio.")},finishAircraftDrag(){this.draggingAircraftId=""},async createAircraft(){if(!this.isOwner){window.alert("Solo el propietario puede crear aeronaves.");return}const n=this.newAircraft.code.trim().toUpperCase(),e=this.newAircraft.name.trim(),t=this.newAircraft.notes.trim();if(!n||!e){window.alert("Ingresa codigo y nombre para crear la aeronave.");return}if(this.fleet.aircrafts.some(l=>l.code.toUpperCase()===n)){window.alert("Ese codigo ya existe.");return}const s=`${n.toLowerCase().replace(/[^a-z0-9]+/g,"-")}-${Date.now()}`,r=window.scrollX,a=window.scrollY;this.fleet.aircrafts.push({id:s,code:n,name:e,notes:t,rows:[]}),this.fleet.selectedId=s,this.newAircraft.code="",this.newAircraft.name="",this.newAircraft.notes="",this.recordSystemChange("Aeronave creada",`${n} - ${e}`,n);const o=await this.persistFleet();this.$nextTick(()=>window.scrollTo(r,a)),o||window.alert("La aeronave se creo localmente, pero Firebase no la pudo sincronizar. Revisa reglas y login.")},canDeleteAircraft(n){return this.isOwner&&!!n},async deleteAircraft(n){if(!this.isOwner){window.alert("Solo el propietario puede eliminar aeronaves.");return}const e=this.fleet.aircrafts.find(s=>s.id===n);if(!this.canDeleteAircraft(e)){window.alert("No se puede eliminar esta aeronave.");return}if(!window.confirm(`Deseas eliminar la aeronave ${e.code}?`))return;this.addToTrash("aircraft",e,e,`${e.code} - ${e.name}`),this.fleet.aircrafts=this.fleet.aircrafts.filter(s=>s.id!==n),this.fleet.selectedId===n&&(this.fleet.selectedId=this.fleet.aircrafts[0]?this.fleet.aircrafts[0].id:""),this.recordSystemChange("Aeronave eliminada",`${e.code} - ${e.name}`,e.code),await this.persistFleet()||window.alert("La aeronave se elimino localmente, pero Firebase no pudo sincronizar el cambio.")},async addRow(){if(!this.isOwner){window.alert("Solo el propietario puede editar.");return}this.currentAircraft&&(this.currentAircraft.rows.push(qi({component:"Nuevo componente",series:"",manufactureDate:"",workshop:"",overhaul:Li(pn),assigned:"0",consumed:"0",assignedTboHours:"0",assignedTboYears:"1",consumedTboHours:"0",consumedTboYears:sr(),assignedTsnHours:"0",assignedTsnYears:"1",consumedTsnHours:"0",consumedTsnYears:sr(),remainingTsnYears:Es(Li(pn),"1"),notes:"",due:Es(Li(pn),"1")})),this.recordSystemChange("Componente agregado",`${this.currentAircraft.code}: Nuevo componente`),await this.persistFleet())},startRowDrag(n,e){if(!this.isOwner){n.preventDefault();return}this.draggingRowIndex=e,n.dataTransfer.effectAllowed="move",n.dataTransfer.setData("text/plain",String(e))},async dropRow(n){if(!this.isOwner||!this.currentAircraft||!Array.isArray(this.currentAircraft.rows)){this.finishRowDrag();return}if(this.draggingRowIndex===null)return;const e=Number(this.draggingRowIndex);if(!Number.isInteger(e)||e<0||n<0||n>=this.currentAircraft.rows.length||e===n){this.finishRowDrag();return}const t=[...this.currentAircraft.rows],[i]=t.splice(e,1);t.splice(n,0,i),this.currentAircraft.rows=t,this.finishRowDrag(),this.recordSystemChange("Componentes reordenados",`${i.component||"Sin nombre"} movido en ${this.currentAircraft.code}`),await this.persistFleet()||window.alert("El orden se actualizo localmente, pero Firebase no pudo sincronizar el cambio.")},finishRowDrag(){this.draggingRowIndex=null},async resetDb(){if(!this.isOwner){window.alert("Solo el propietario puede editar.");return}!window.confirm("Deseas restaurar la base de datos original?")||!this.currentAircraft||(this.currentAircraft.rows=this.currentAircraft.id==="pnp-501"?hr(Vh).map(qi):[],this.recordSystemChange("Base de datos restaurada",`${this.currentAircraft.code}: datos restaurados`),await this.persistFleet())},async deleteRow(n){if(!this.isOwner){window.alert("Solo el propietario puede editar.");return}if(!this.currentAircraft||!Array.isArray(this.currentAircraft.rows)||n<0||n>=this.currentAircraft.rows.length)return;const e=this.currentAircraft.rows[n],t=e&&e.component?e.component:"este componente";window.confirm(`Deseas eliminar ${t}?`)&&(this.addToTrash("component",e,this.currentAircraft,t),this.currentAircraft.rows.splice(n,1),this.recordSystemChange("Componente eliminado",`${this.currentAircraft.code}: ${t}`),await this.persistFleet())},async restoreTrashItem(n){if(!this.isOwner){window.alert("Solo el propietario puede restaurar elementos.");return}const e=bs(this.fleet.trash),t=e.find(s=>s.id===n);if(!t){window.alert("Este elemento ya no esta disponible en la papelera."),this.fleet.trash=e,await this.persistFleet();return}if(t.type==="aircraft"){const s={...t.data,id:t.data.id||`${Qs(t.aircraftCode||t.name)}-${Date.now()}`,rows:Array.isArray(t.data.rows)?t.data.rows.map(qi):[]},r=this.fleet.aircrafts.some(a=>a.id===s.id);s.id=r?`${s.id}-${Date.now()}`:s.id,this.fleet.aircrafts.push(s),this.fleet.selectedId=s.id,this.recordSystemChange("Aeronave restaurada",`${s.code} - ${s.name}`,s.code)}else{const s=this.fleet.aircrafts.find(r=>r.id===t.aircraftId)||this.fleet.aircrafts.find(r=>r.code===t.aircraftCode)||this.currentAircraft;if(!s){window.alert("No hay aeronave disponible para restaurar el componente.");return}s.rows.push(qi(t.data)),this.fleet.selectedId=s.id,this.recordSystemChange("Componente restaurado",`${s.code}: ${t.name}`)}this.fleet.trash=e.filter(s=>s.id!==n),await this.persistFleet()||window.alert("El elemento se restauro localmente, pero Firebase no pudo sincronizar el cambio.")},setMobileMenuOpen(n){this.mobileMenuOpen=n},handleResize(){window.innerWidth>760&&this.setMobileMenuOpen(!1)},getAuthErrorMessage(n){const e=n&&n.code?n.code:"";return e==="auth/invalid-credential"||e==="auth/wrong-password"||e==="auth/user-not-found"?"Correo o contrasena incorrectos.":e==="auth/too-many-requests"?"Demasiados intentos. Espera un momento y vuelve a probar.":e==="auth/operation-not-allowed"?"Activa Email/Password en Firebase Authentication.":e==="auth/weak-password"?"La contrasena debe tener al menos 6 caracteres.":e==="auth/email-already-in-use"?"Ese correo ya existe. Usa Ingresar o restablece la contrasena.":e==="auth/invalid-email"?"Ingresa un correo valido.":"No se pudo iniciar sesion con correo."},async createEmailUser(){if(!this.authReady)return this.updateLoginHint("Firebase Auth no esta disponible.",!0),!1;if(!this.loginEmail||!this.loginPassword)return this.updateLoginHint("Ingresa correo y contrasena para crear la cuenta.",!0),!1;try{return this.authBusy=!0,await window.firebase.auth().createUserWithEmailAndPassword(this.loginEmail,this.loginPassword),this.loginPassword="",this.updateLoginHint("Cuenta creada e ingreso correcto."),!0}catch(n){return console.error("Email sign-up error:",n),this.updateLoginHint(this.getAuthErrorMessage(n),!0),!1}finally{this.authBusy=!1}},async sendPasswordReset(){if(!this.authReady){this.updateLoginHint("Firebase Auth no esta disponible.",!0);return}if(!this.loginEmail){this.updateLoginHint("Escribe tu correo para enviar el restablecimiento.",!0);return}try{this.authBusy=!0,await window.firebase.auth().sendPasswordResetEmail(this.loginEmail),this.updateLoginHint("Te enviamos un correo para restablecer la contrasena.")}catch(n){console.error("Password reset error:",n),this.updateLoginHint(this.getAuthErrorMessage(n),!0)}finally{this.authBusy=!1}},async signInWithEmail(){if(!this.authReady){this.updateLoginHint("Firebase Auth no esta disponible.",!0);return}if(!this.loginEmail||!this.loginPassword){this.updateLoginHint("Ingresa correo y contrasena.",!0);return}try{this.authBusy=!0,await window.firebase.auth().signInWithEmailAndPassword(this.loginEmail,this.loginPassword),this.loginPassword="",this.updateLoginHint("Ingreso correcto con correo.")}catch(n){console.error("Email sign-in error:",n),this.updateLoginHint(this.getAuthErrorMessage(n),!0)}finally{this.authBusy=!1}},async signOut(){if(!this.authReady){this.currentUser=null,this.isOwner=!1;return}await window.firebase.auth().signOut()},async initAuth(){if(!_b()){this.updateLoginHint("Configura Firebase Auth para iniciar sesion.",!0);return}try{await tl("https://www.gstatic.com/firebasejs/10.12.3/firebase-app-compat.js"),await tl("https://www.gstatic.com/firebasejs/10.12.3/firebase-auth-compat.js"),await tl("https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore-compat.js")}catch(n){console.error("Firebase SDK load error:",n),this.updateLoginHint("Firebase Auth no esta disponible.",!0),this.updateCloudStatus("Sin conexion",!0,this.getFirebaseErrorMessage(n));return}if(!window.firebase||!window.firebase.firestore){this.updateLoginHint("Firebase Auth no esta disponible.",!0),this.updateCloudStatus("Sin Firebase",!0);return}window.firebase.apps.length||window.firebase.initializeApp(kh),this.authReady=!0,this.dbReady=!0,window.firebase.auth().onAuthStateChanged(async n=>{if(this.currentUser=n,this.isOwner=!1,!n||n.isAnonymous){this.firestoreUnsubscribe&&(this.firestoreUnsubscribe(),this.firestoreUnsubscribe=null),this.updateCloudStatus("Requiere login"),this.updateLoginHint("Usa Ingresar si ya tienes cuenta, o Crear cuenta si es tu primera vez.");return}const e=(n.email||"").toLowerCase();let t="";try{t=(await n.getIdTokenResult()).claims.role||""}catch(i){console.warn("No se pudieron leer los claims de Auth:",i)}this.isOwner=t==="editor"||vb(e),n&&!this.isOwner&&this.updateLoginHint("Ingreso autenticado en modo solo lectura."),n&&this.isOwner&&this.updateLoginHint("Ingreso autenticado en modo editor."),await this.loadFleetFromFirestore(),this.subscribeFleetFromFirestore()})}}},Sb={key:0,class:"login-screen"},Mb={id:"three-bg",ref:"threeBg","aria-hidden":"true"},bb=["disabled"],yb={class:"password-field"},Eb=["type","disabled"],Tb=["disabled"],Ab=["src"],wb={class:"login-actions"},Rb=["disabled"],Cb=["src"],Pb=["disabled"],Db=["src"],Lb=["disabled"],Ib={key:1,class:"layout"},Ub={class:"brand"},Nb={class:"brand-sub"},Fb=["aria-label","title"],Ob=["src"],Bb={id:"sidebar-menu",class:"menu"},Hb=["href","onClick"],kb={class:"menu-icon","aria-hidden":"true"},Vb=["src"],zb={class:"menu-label"},Gb={class:"content"},Wb={class:"topbar"},Xb={class:"topbar-left"},Yb=["src"],qb={class:"title-wrap"},Kb={class:"top-actions"},Zb=["title"],$b={class:"chip aircraft-chip"},Jb={class:"chip date-chip"},Qb=["src"],jb=["title"],ey=["src"],ty=["title"],ny=["title"],iy={class:"auth-status"},sy=["src"],ry=["src"],ay={id:"aeronaves",class:"view"},oy={class:"panel"},ly={class:"aircrafts-layout"},cy={class:"aircraft-list"},uy=["draggable","onDragstart","onDrop"],dy={key:0,class:"aircraft-notes"},fy={class:"aircraft-actions"},hy=["disabled","onClick"],py=["src"],my=["onClick"],gy=["src"],_y=["disabled","onClick"],vy=["src"],xy=["aria-label","title","onClick"],Sy=["src"],My=["onClick"],by=["src"],yy={key:0,class:"empty-note"},Ey=["disabled"],Ty=["disabled"],Ay=["disabled"],wy=["disabled"],Ry=["src"],Cy={key:0,id:"dashboard",ref:"dashboard",class:"grid-kpi view"},Py={class:"kpi kpi-info"},Dy={class:"kpi-head"},Ly={class:"kpi-icon","aria-hidden":"true"},Iy=["src"],Uy={class:"kpi-value"},Ny={class:"kpi kpi-danger"},Fy={class:"kpi-head"},Oy={class:"kpi-icon","aria-hidden":"true"},By=["src"],Hy={class:"kpi-value"},ky={class:"kpi-meta"},Vy={class:"kpi-progress"},zy={class:"kpi kpi-warn"},Gy={class:"kpi-head"},Wy={class:"kpi-icon","aria-hidden":"true"},Xy=["src"],Yy={class:"kpi-value"},qy={class:"kpi-meta"},Ky={class:"kpi-progress"},Zy={class:"kpi kpi-ok"},$y={class:"kpi-head"},Jy={class:"kpi-icon","aria-hidden":"true"},Qy=["src"],jy={class:"kpi-value"},eE={class:"kpi-meta"},tE={class:"kpi-progress"},nE={class:"kpi risk-card"},iE={class:"kpi-risk"},sE={class:"risk-copy"},rE={key:1,id:"main-grid-view",class:"main-grid view"},aE={class:"panel"},oE={class:"panel-sub"},lE={class:"plane-title"},cE={class:"meta-list"},uE={class:"state-pill"},dE={class:"progress-title"},fE={class:"progress"},hE={class:"panel"},pE={class:"resource-chart"},mE={class:"resource-row-head"},gE={class:"resource-name"},_E=["aria-label"],vE={class:"resource-values"},xE={class:"panel"},SE={class:"icon-heading"},ME=["src"],bE={class:"events"},yE={key:2,id:"componentes",class:"analytics-grid view"},EE={class:"panel analytics-panel"},TE={class:"donut-layout"},AE={class:"donut-center"},wE={class:"chart-list"},RE={class:"panel analytics-panel trend-panel"},CE={class:"trend-chart"},PE={class:"trend-axis-label top"},DE={viewBox:"0 0 600 180",role:"img","aria-label":"Tendencia de consumo y remanente"},LE=["y1","y2"],IE=["points"],UE=["points"],NE=["cx","cy"],FE=["cx","cy"],OE=["x"],BE={class:"panel analytics-panel"},HE={class:"donut-layout status-layout"},kE={class:"donut-center"},VE={class:"chart-list"},zE={key:3,id:"base-datos",ref:"baseDatos",class:"panel table-panel view"},GE={class:"table-title"},WE={class:"table-tools"},XE=["disabled"],YE=["src"],qE=["disabled"],KE=["src"],ZE={class:"table-wrap"},$E=["onDrop"],JE={class:"row-drag-cell"},QE=["disabled","onDragstart"],jE={class:"table-component"},eT=["onUpdate:modelValue","disabled","onChange"],tT=["onUpdate:modelValue","disabled","onChange"],nT=["onUpdate:modelValue","disabled","onChange"],iT=["onUpdate:modelValue","disabled","onChange"],sT=["onUpdate:modelValue","disabled","onInput","onChange"],rT=["onUpdate:modelValue","disabled","onInput","onChange"],aT=["onUpdate:modelValue","disabled","onInput","onChange"],oT=["onUpdate:modelValue","disabled","onInput","onChange"],lT=["onUpdate:modelValue"],cT=["onUpdate:modelValue","disabled","onInput","onChange"],uT=["onUpdate:modelValue","disabled","onInput","onChange"],dT=["onUpdate:modelValue","disabled","onInput","onChange"],fT=["onUpdate:modelValue"],hT=["onUpdate:modelValue"],pT=["onUpdate:modelValue"],mT=["onUpdate:modelValue"],gT=["onUpdate:modelValue"],_T=["onUpdate:modelValue","disabled","onChange"],vT=["onUpdate:modelValue"],xT=["disabled","onClick"],ST=["src"],MT={key:4,id:"alertas",class:"view"},bT={class:"stats-row"},yT={class:"mini"},ET={style:{color:"var(--danger)"}},TT={class:"mini"},AT={style:{color:"var(--warn)"}},wT={class:"mini"},RT={style:{color:"var(--warn)"}},CT={class:"mini"},PT={style:{color:"#ffd58f"}},DT={class:"mini"},LT={class:"panel"},IT={class:"events"},UT={class:"event-aircraft"},NT={key:5,id:"calendario",class:"panel view"},FT={class:"icon-heading"},OT=["src"],BT={class:"events"},HT={key:6,id:"historial",class:"panel table-panel view"},kT={class:"change-log"},VT={key:0,class:"change-aircraft"},zT={key:0,class:"empty-note"},GT={class:"table-wrap"},WT={class:"history-table"},XT={key:7,id:"papelera",class:"panel table-panel view"},YT={class:"table-wrap"},qT={class:"trash-table"},KT=["disabled","onClick"],ZT=["src"],$T={key:0};function JT(n,e,t,i,s,r){return Ye(),Ke("div",{class:Dt(["app-shell",{"sidebar-collapsed":s.sidebarCollapsed,"text-large":s.textSizeLarge}])},[r.isAuthenticated?(Ye(),Ke("div",Ib,[_("aside",{class:Dt(["sidebar",{open:s.mobileMenuOpen}])},[_("div",Ub,[e[38]||(e[38]=_("h2",{class:"brand-title"},"DIVMAAER",-1)),_("p",Nb,xe(r.currentAircraft?r.currentAircraft.code:"CONTROL DE CALIDAD"),1)]),_("button",{class:"sidebar-collapse-btn",type:"button","aria-label":s.sidebarCollapsed?"Desplegar menu lateral":"Ocultar menu lateral",title:s.sidebarCollapsed?"Desplegar menu":"Ocultar menu",onClick:e[15]||(e[15]=a=>s.sidebarCollapsed=!s.sidebarCollapsed)},[_("img",{class:"btn-icon",src:s.sidebarCollapsed?s.icons.expand:s.icons.collapse,alt:"","aria-hidden":"true"},null,8,Ob)],8,Fb),_("nav",Bb,[(Ye(!0),Ke(_t,null,nn(s.menuItems,a=>(Ye(),Ke("a",{key:a.label,class:Dt(["menu-item",{active:s.activeMenuLabel===a.label}]),href:`#${a.target}`,onClick:Sn(o=>r.navigate(a.target,a.label),["prevent"])},[_("span",kb,[_("img",{src:a.icon,alt:""},null,8,Vb)]),_("span",zb,xe(a.label),1)],10,Hb))),128))]),e[39]||(e[39]=_("div",{class:"profile"},[_("b",null,"Marlon Chuquino"),ot(" Administrador ")],-1))],2),_("div",{class:Dt(["mobile-menu-backdrop",{open:s.mobileMenuOpen}]),onClick:e[16]||(e[16]=a=>r.setMobileMenuOpen(!1))},null,2),_("main",Gb,[_("header",Wb,[_("div",Xb,[_("button",{class:"mobile-menu-btn",type:"button","aria-label":"Abrir menu",onClick:e[17]||(e[17]=a=>r.setMobileMenuOpen(!s.mobileMenuOpen))},[_("img",{class:"btn-icon",src:s.icons.menu,alt:"","aria-hidden":"true"},null,8,Yb)]),e[40]||(e[40]=_("div",{class:"topbar-brand"},[_("p",{class:"topbar-kicker"},"CONTROL DE CALIDAD"),_("h1",null,"Sistema de Gestión de Recursos Aeronáuticos")],-1))]),_("div",qb,[_("p",null,"Dashboard tecnico · "+xe(r.currentAircraft?r.currentAircraft.code:"--"),1)]),_("div",Kb,[_("button",{class:"chip text-size-btn",type:"button",title:s.textSizeLarge?"Achicar letras":"Agrandar letras",onClick:e[18]||(e[18]=a=>s.textSizeLarge=!s.textSizeLarge)},xe(s.textSizeLarge?"A-":"A+"),9,Zb),_("div",$b,[_("span",null,xe(r.aircraftChip),1),e[41]||(e[41]=ot()),e[42]||(e[42]=_("span",null,"▼",-1))]),_("div",Jb,[_("img",{class:"chip-icon",src:s.icons.calendar,alt:"","aria-hidden":"true"},null,8,Qb),ot(" "+xe(r.todayLabel),1)]),_("div",{class:Dt(["chip firebase-chip",{"sync-error":s.cloudStatusError}]),title:s.cloudErrorMessage||s.cloudStatus},[_("img",{class:"chip-icon",src:s.icons.sync,alt:"","aria-hidden":"true"},null,8,ey),_("span",null,"Firebase "+xe(r.cloudStatusText),1)],10,jb),_("div",{class:"chip sync-info-chip",title:`Fuente: ${r.syncSourceText}`},[_("span",{class:Dt(["sync-source-dot",{remote:s.syncSource==="remote"}])},null,2),_("span",null,"Últ. sync: "+xe(r.lastSyncLabel),1)],8,ty),_("div",{class:"auth-box",title:s.authHint},[_("span",iy,[_("img",{class:"btn-icon",src:s.icons.user,alt:"","aria-hidden":"true"},null,8,sy),ot(xe(r.authStatus),1)]),_("button",{class:"auth-btn",type:"button",onClick:e[19]||(e[19]=(...a)=>r.signOut&&r.signOut(...a))},[_("img",{class:"btn-icon",src:s.icons.signOut,alt:"","aria-hidden":"true"},null,8,ry),e[43]||(e[43]=ot(" Cerrar sesion ",-1))])],8,ny)])]),mt(_("section",ay,[_("section",oy,[e[49]||(e[49]=_("h2",null,"Gestion de Aeronaves",-1)),e[50]||(e[50]=_("p",{class:"panel-sub"},"Selecciona una aeronave operativa o crea una nueva con base de datos vacia.",-1)),_("div",ly,[_("div",null,[_("div",cy,[(Ye(!0),Ke(_t,null,nn(s.fleet.aircrafts,a=>(Ye(),Ke("article",{key:a.id,class:Dt(["aircraft-card",{active:a.id===s.fleet.selectedId,dragging:s.draggingAircraftId===a.id}]),draggable:s.isOwner&&s.editingAircraftId!==a.id,onDragstart:o=>r.startAircraftDrag(o,a.id),onDragover:e[24]||(e[24]=Sn(()=>{},["prevent"])),onDrop:Sn(o=>r.dropAircraft(o,a.id),["prevent"]),onDragend:e[25]||(e[25]=(...o)=>r.finishAircraftDrag&&r.finishAircraftDrag(...o))},[s.editingAircraftId===a.id?(Ye(),Ke(_t,{key:0},[mt(_("input",{"onUpdate:modelValue":e[20]||(e[20]=o=>s.editingAircraftDraft.code=o),class:"aircraft-edit-input",type:"text",maxlength:"30","aria-label":"Codigo de aeronave"},null,512),[[gt,s.editingAircraftDraft.code,void 0,{trim:!0}]]),mt(_("input",{"onUpdate:modelValue":e[21]||(e[21]=o=>s.editingAircraftDraft.name=o),class:"aircraft-edit-input",type:"text",maxlength:"80","aria-label":"Nombre de aeronave"},null,512),[[gt,s.editingAircraftDraft.name,void 0,{trim:!0}]]),mt(_("textarea",{"onUpdate:modelValue":e[22]||(e[22]=o=>s.editingAircraftDraft.notes=o),class:"aircraft-edit-input aircraft-notes-input",maxlength:"240","aria-label":"Notas de aeronave",placeholder:"Notas"},null,512),[[gt,s.editingAircraftDraft.notes,void 0,{trim:!0}]]),_("p",null,"Componentes: "+xe(a.rows.length),1)],64)):(Ye(),Ke(_t,{key:1},[_("h3",null,xe(a.code),1),_("p",null,xe(a.name),1),a.notes?(Ye(),Ke("p",dy,xe(a.notes),1)):Kt("",!0),_("p",null,"Componentes: "+xe(a.rows.length),1)],64)),_("div",fy,[s.editingAircraftId===a.id?(Ye(),Ke(_t,{key:0},[_("button",{class:"table-btn",type:"button",disabled:!s.isOwner,onClick:o=>r.saveAircraftEdit(a.id)},[_("img",{class:"btn-icon",src:s.icons.save,alt:"","aria-hidden":"true"},null,8,py),e[44]||(e[44]=ot("Guardar",-1))],8,hy),_("button",{class:"table-btn",type:"button",onClick:e[23]||(e[23]=(...o)=>r.cancelAircraftEdit&&r.cancelAircraftEdit(...o))},"Cancelar")],64)):(Ye(),Ke(_t,{key:1},[_("button",{class:"table-btn",type:"button",onClick:o=>r.openAircraft(a.id)},[_("img",{class:"btn-icon",src:s.icons.open,alt:"","aria-hidden":"true"},null,8,gy),e[45]||(e[45]=ot("Abrir",-1))],8,my),_("button",{class:"table-btn",type:"button",disabled:!s.isOwner,onClick:o=>r.startAircraftEdit(a)},[_("img",{class:"btn-icon",src:s.icons.edit,alt:"","aria-hidden":"true"},null,8,vy),e[46]||(e[46]=ot("Editar",-1))],8,_y),_("button",{class:"table-btn aircraft-download-btn",type:"button","aria-label":`Descargar PDF de ${a.code}`,title:`Descargar PDF de ${a.code}`,onClick:o=>r.downloadAircraftPdf(a)},[_("img",{class:"btn-icon",src:s.icons.download,alt:"","aria-hidden":"true"},null,8,Sy)],8,xy)],64)),r.canDeleteAircraft(a)?(Ye(),Ke("button",{key:2,class:"table-btn danger-btn",type:"button",onClick:o=>r.deleteAircraft(a.id)},[_("img",{class:"btn-icon",src:s.icons.delete,alt:"","aria-hidden":"true"},null,8,by),e[47]||(e[47]=ot(" Eliminar ",-1))],8,My)):Kt("",!0)])],42,uy))),128))]),s.fleet.aircrafts.length===0?(Ye(),Ke("p",yy,"No hay aeronaves registradas.")):Kt("",!0)]),_("form",{class:"aircraft-form",onSubmit:e[29]||(e[29]=Sn((...a)=>r.createAircraft&&r.createAircraft(...a),["prevent"]))},[mt(_("input",{"onUpdate:modelValue":e[26]||(e[26]=a=>s.newAircraft.code=a),type:"text",maxlength:"30",placeholder:"Codigo (ej. PNP-700)",disabled:!s.isOwner},null,8,Ey),[[gt,s.newAircraft.code,void 0,{trim:!0}]]),mt(_("input",{"onUpdate:modelValue":e[27]||(e[27]=a=>s.newAircraft.name=a),type:"text",maxlength:"80",placeholder:"Nombre (ej. Mi-171Sh)",disabled:!s.isOwner},null,8,Ty),[[gt,s.newAircraft.name,void 0,{trim:!0}]]),mt(_("textarea",{"onUpdate:modelValue":e[28]||(e[28]=a=>s.newAircraft.notes=a),maxlength:"240",placeholder:"Notas de la aeronave",disabled:!s.isOwner},null,8,Ay),[[gt,s.newAircraft.notes,void 0,{trim:!0}]]),_("button",{class:"table-btn",type:"submit",disabled:!s.isOwner},[_("img",{class:"btn-icon",src:s.icons.add,alt:"","aria-hidden":"true"},null,8,Ry),e[48]||(e[48]=ot("Crear aeronave",-1))],8,wy),_("p",{class:Dt(["readonly-note",{visible:!s.isOwner}])},"Solo el propietario puede crear aeronaves.",2)],32)])])],512),[[Km,s.activeView==="aeronaves"]]),s.activeView!=="aeronaves"?(Ye(),Ke(_t,{key:0},[s.activeView==="dashboard"?(Ye(),Ke("section",Cy,[_("article",Py,[_("div",Dy,[e[51]||(e[51]=_("p",{class:"kpi-title"},"Total Componentes",-1)),_("span",Ly,[_("img",{src:s.icons.components,alt:""},null,8,Iy)])]),_("p",Uy,xe(r.metrics.total),1),e[52]||(e[52]=_("p",{class:"kpi-meta"},[_("span",null,"Registrados"),_("strong",null,"100%")],-1)),e[53]||(e[53]=_("div",{class:"kpi-progress"},[_("span",{style:{width:"100%"}})],-1))]),_("article",Ny,[_("div",Fy,[e[54]||(e[54]=_("p",{class:"kpi-title"},"Críticos / Overhaul",-1)),_("span",Oy,[_("img",{src:s.icons.overhaul,alt:""},null,8,By)])]),_("p",Hy,xe(r.metrics.critical),1),_("p",ky,[e[55]||(e[55]=_("span",null,"Requieren atención",-1)),_("strong",null,xe(r.pct(r.metrics.critical)),1)]),_("div",Vy,[_("span",{style:Gt({width:r.pct(r.metrics.critical)})},null,4)])]),_("article",zy,[_("div",Gy,[e[56]||(e[56]=_("p",{class:"kpi-title"},"Alertas Preventivas",-1)),_("span",Wy,[_("img",{src:s.icons.alerts,alt:""},null,8,Xy)])]),_("p",Yy,xe(r.metrics.alert),1),_("p",qy,[e[57]||(e[57]=_("span",null,"Seguimiento cercano",-1)),_("strong",null,xe(r.pct(r.metrics.alert)),1)]),_("div",Ky,[_("span",{style:Gt({width:r.pct(r.metrics.alert)})},null,4)])]),_("article",Zy,[_("div",$y,[e[58]||(e[58]=_("p",{class:"kpi-title"},"En Condiciones",-1)),_("span",Jy,[_("img",{src:s.icons.serviceTime,alt:""},null,8,Qy)])]),_("p",jy,xe(r.metrics.ok),1),_("p",eE,[e[59]||(e[59]=_("span",null,"Operativos",-1)),_("strong",null,xe(r.pct(r.metrics.ok)),1)]),_("div",tE,[_("span",{style:Gt({width:r.pct(r.metrics.ok)})},null,4)])]),_("article",nE,[_("div",iE,[_("div",{class:"ring",style:Gt(r.riskRingStyle)},[_("span",null,xe(r.metrics.risk)+"%",1)],4),_("div",sE,[e[60]||(e[60]=_("p",{class:"kpi-title"},"Riesgo Global",-1)),_("strong",{style:Gt({color:r.riskLabel.color})},xe(r.metrics.risk)+"%",5),_("span",null,"Nivel: "+xe(r.riskLabel.label),1),_("small",null,xe(r.riskAttentionText),1)])])])],512)):Kt("",!0),s.activeView==="dashboard"?(Ye(),Ke("section",rE,[_("article",aE,[e[69]||(e[69]=_("h2",null,"Aeronave Seleccionada",-1)),_("p",oE,"Serie "+xe(r.aircraftSeries),1),_("p",lE,xe(r.currentAircraft?r.currentAircraft.name:"--"),1),_("ul",cE,[_("li",null,[e[61]||(e[61]=_("span",null,"Horas Totales (TSN):",-1)),e[62]||(e[62]=ot()),_("span",null,xe(r.formatMetric(r.panelTotals.consumed))+" h",1)]),_("li",null,[e[63]||(e[63]=_("span",null,"Vida Total Asignada:",-1)),e[64]||(e[64]=ot()),_("span",null,xe(r.formatMetric(r.panelTotals.assigned))+" h",1)]),_("li",null,[e[65]||(e[65]=_("span",null,"Horas Remanentes:",-1)),e[66]||(e[66]=ot()),_("span",null,xe(r.formatMetric(r.panelTotals.remaining))+" h",1)]),_("li",null,[e[67]||(e[67]=_("span",null,"Vencimiento Calendario:",-1)),e[68]||(e[68]=ot()),_("span",null,xe(r.nextDueDate),1)])]),_("div",uE,xe(r.aircraftState),1),_("p",dE,"Vida util consumida: "+xe(r.formatMetric(r.consumedPct))+"%",1),_("div",fE,[_("div",{style:Gt({width:`${r.consumedPct}%`})},null,4)])]),_("article",hE,[e[70]||(e[70]=_("h2",null,"Consumo de Recursos (TSO / Arranques)",-1)),e[71]||(e[71]=_("p",{class:"panel-sub"},"Comparación: consumido vs remanente por componente",-1)),e[72]||(e[72]=_("div",{class:"chart-legend","aria-label":"Leyenda de consumo"},[_("span",null,[_("i",{class:"legend-swatch consumed"}),ot("Consumido")]),_("span",null,[_("i",{class:"legend-swatch remaining"}),ot("Remanente")])],-1)),_("div",pE,[(Ye(!0),Ke(_t,null,nn(r.chartBars,a=>(Ye(),Ke("div",{key:a.key,class:"resource-row"},[_("div",mE,[_("div",gE,[_("span",{class:Dt(["component-logo",a.categoryClass])},xe(a.logo),3),_("span",null,xe(a.label),1)]),_("strong",null,xe(a.percentage)+"%",1)]),_("div",{class:"resource-track","aria-label":`${a.label}: ${a.consumed} consumido, ${a.remaining} remanente`},[_("span",{class:"resource-segment consumed",style:Gt({width:`${a.consumedWidth}%`})},null,4),_("span",{class:"resource-segment remaining",style:Gt({width:`${a.remainingWidth}%`})},null,4)],8,_E),_("div",vE,[_("span",null,xe(r.formatMetric(a.consumed)),1),_("span",null,xe(r.formatMetric(a.remaining)),1)])]))),128))])]),_("article",xE,[_("h2",SE,[_("img",{src:s.icons.due,alt:"","aria-hidden":"true"},null,8,ME),e[73]||(e[73]=ot("Proximos Vencimientos",-1))]),e[74]||(e[74]=_("p",{class:"panel-sub"},"Control calendario",-1)),_("ul",bE,[(Ye(!0),Ke(_t,null,nn(r.dueEvents,a=>(Ye(),Ke("li",{key:a.key},[_("span",null,xe(a.component),1),_("span",{class:Dt(["date",a.className])},xe(a.due),3)]))),128))])])])):Kt("",!0),s.activeView==="componentes"?(Ye(),Ke("section",yE,[_("article",EE,[e[77]||(e[77]=_("h2",null,"Consumo de Recursos por Categoría",-1)),e[78]||(e[78]=_("p",{class:"panel-sub"},"Distribución del consumo registrado",-1)),_("div",TE,[_("div",{class:"donut-chart",style:Gt(r.categoryDonutStyle)},[_("div",AE,[e[75]||(e[75]=_("span",null,"Total",-1)),_("strong",null,xe(r.formatMetric(r.metrics.consumedTotal)),1),e[76]||(e[76]=_("small",null,"HRS / ARR",-1))])],4),_("div",wE,[(Ye(!0),Ke(_t,null,nn(r.categoryChart,a=>(Ye(),Ke("div",{key:a.key,class:"chart-list-row"},[_("span",null,[_("i",{class:"legend-swatch",style:Gt({background:a.color})},null,4),ot(xe(a.label),1)]),_("strong",null,[ot(xe(r.formatMetric(a.value))+" ",1),_("small",null,xe(a.percentage)+"%",1)])]))),128))])])]),_("article",RE,[e[80]||(e[80]=_("h2",null,"Tendencia de Consumo (TSO)",-1)),e[81]||(e[81]=_("p",{class:"panel-sub"},"Comparación de consumo y remanente por componente",-1)),e[82]||(e[82]=_("div",{class:"chart-legend trend-legend"},[_("span",null,[_("i",{class:"legend-swatch consumed"}),ot("Consumido")]),_("span",null,[_("i",{class:"legend-swatch remaining"}),ot("Remanente")])],-1)),_("div",CE,[_("div",PE,xe(r.formatMetric(r.trendChart.max)),1),e[79]||(e[79]=_("div",{class:"trend-axis-label bottom"},"0",-1)),(Ye(),Ke("svg",DE,[(Ye(!0),Ke(_t,null,nn(r.trendChart.gridLines,a=>(Ye(),Ke("line",{key:a.y,x1:"38",y1:a.y,x2:"590",y2:a.y,class:"trend-grid-line"},null,8,LE))),128)),_("polyline",{points:r.trendChart.consumedPoints,class:"trend-line consumed-line"},null,8,IE),_("polyline",{points:r.trendChart.remainingPoints,class:"trend-line remaining-line"},null,8,UE),(Ye(!0),Ke(_t,null,nn(r.trendChart.points,a=>(Ye(),Ke("g",{key:a.key},[_("circle",{cx:a.x,cy:a.consumedY,r:"4",class:"trend-point consumed-point"},null,8,NE),_("circle",{cx:a.x,cy:a.remainingY,r:"4",class:"trend-point remaining-point"},null,8,FE),_("text",{x:a.x,y:"176","text-anchor":"middle",class:"trend-label"},xe(a.label),9,OE)]))),128))]))])]),_("article",BE,[e[84]||(e[84]=_("h2",null,"Estado de Componentes",-1)),e[85]||(e[85]=_("p",{class:"panel-sub"},"Situación operativa actual",-1)),_("div",HE,[_("div",{class:"donut-chart status-donut",style:Gt(r.statusDonutStyle)},[_("div",kE,[_("strong",null,xe(r.metrics.total),1),e[83]||(e[83]=_("span",null,"Total",-1))])],4),_("div",VE,[(Ye(!0),Ke(_t,null,nn(r.statusChart,a=>(Ye(),Ke("div",{key:a.key,class:"chart-list-row"},[_("span",null,[_("i",{class:"legend-swatch",style:Gt({background:a.color})},null,4),ot(xe(a.label),1)]),_("strong",null,[ot(xe(a.value)+" ",1),_("small",null,xe(a.percentage)+"%",1)])]))),128))])])])])):Kt("",!0),s.activeView==="base-datos"?(Ye(),Ke("section",zE,[_("div",GE,[e[88]||(e[88]=_("h2",null,"Base de Datos de Componentes",-1)),_("div",WE,[_("button",{class:"table-btn",type:"button",disabled:!s.isOwner,onClick:e[30]||(e[30]=(...a)=>r.addRow&&r.addRow(...a))},[_("img",{class:"btn-icon",src:s.icons.add,alt:"","aria-hidden":"true"},null,8,YE),e[86]||(e[86]=ot("Agregar componente",-1))],8,XE),_("button",{class:"table-btn",type:"button",disabled:!s.isOwner,onClick:e[31]||(e[31]=(...a)=>r.resetDb&&r.resetDb(...a))},[_("img",{class:"btn-icon",src:s.icons.restore,alt:"","aria-hidden":"true"},null,8,KE),e[87]||(e[87]=ot("Restaurar datos",-1))],8,qE)])]),_("p",{class:Dt(["readonly-note",{visible:!s.isOwner}]),style:{margin:"0 14px 10px"}}," Modo solo lectura: solo el propietario puede editar la base de datos. ",2),_("div",ZE,[_("table",null,[e[90]||(e[90]=_("thead",null,[_("tr",null,[_("th",null,"Orden"),_("th",null,"Componente"),_("th",null,"Serie"),_("th",null,"Fecha fabricacion"),_("th",null,"Taller"),_("th",null,"Ultimo Overhaul"),_("th",null,"Asignado TBO (hrs)"),_("th",null,"Asignado TBO (años)"),_("th",null,"Consumido TBO hrs"),_("th",null,"Consumido TBO años"),_("th",null,"Asignado TSN (hrs)"),_("th",null,"Asignado TSN (años)"),_("th",null,"Consumido TSN hrs"),_("th",null,"Consumido TSN años"),_("th",null,"Remanente TBO (hrs)"),_("th",null,"Remanente TBO (años)"),_("th",null,"Remanente TSN (hrs)"),_("th",null,"Remanente TSN (años)"),_("th",null,"Notas"),_("th",null,"Vencimiento"),_("th",null,"Estado"),_("th",null,"Accion")])],-1)),_("tbody",null,[(Ye(!0),Ke(_t,null,nn(r.currentRows,(a,o)=>(Ye(),Ke("tr",{key:`${r.currentAircraft.id}-${o}`,class:Dt({"dragging-row":s.draggingRowIndex===o}),onDragover:e[33]||(e[33]=Sn(()=>{},["prevent"])),onDrop:Sn(l=>r.dropRow(o),["prevent"])},[_("td",JE,[_("button",{class:"row-drag-handle",type:"button",draggable:"true","aria-label":"Arrastrar componente",disabled:!s.isOwner,onDragstart:l=>r.startRowDrag(l,o),onDragend:e[32]||(e[32]=(...l)=>r.finishRowDrag&&r.finishRowDrag(...l))}," ⋮⋮ ",40,QE)]),_("td",null,[_("div",jE,[_("span",{class:Dt(["component-logo",r.categoryClass(a)])},xe(r.componentLogo(a)),3),mt(_("input",{"onUpdate:modelValue":l=>a.component=l,class:"cell-input",disabled:!s.isOwner,onChange:l=>r.saveRowFieldChange(a,"Componente")},null,40,eT),[[gt,a.component]])])]),_("td",null,[mt(_("input",{"onUpdate:modelValue":l=>a.series=l,class:"cell-input",disabled:!s.isOwner,onChange:l=>r.saveRowFieldChange(a,"Serie")},null,40,tT),[[gt,a.series]])]),_("td",null,[mt(_("input",{"onUpdate:modelValue":l=>a.manufactureDate=l,class:"cell-input",disabled:!s.isOwner,placeholder:"dd/mm/aaaa",onChange:l=>r.saveRowFieldChange(a,"Fecha fabricacion")},null,40,nT),[[gt,a.manufactureDate]])]),_("td",null,[mt(_("input",{"onUpdate:modelValue":l=>a.workshop=l,class:"cell-input",disabled:!s.isOwner,onChange:l=>r.saveRowFieldChange(a,"Taller")},null,40,iT),[[gt,a.workshop]])]),_("td",null,[mt(_("input",{"onUpdate:modelValue":l=>a.overhaul=l,class:"cell-input",disabled:!s.isOwner,onInput:l=>r.updateAllDerived(a),onChange:l=>r.saveRowFieldChange(a,"Ultimo overhaul","all")},null,40,sT),[[gt,a.overhaul]])]),_("td",null,[mt(_("input",{"onUpdate:modelValue":l=>a.assignedTboHours=l,class:"cell-input numeric-input",disabled:!s.isOwner,onInput:l=>r.updateTboDerived(a),onChange:l=>r.saveRowFieldChange(a,"Asignado TBO horas","tbo")},null,40,rT),[[gt,a.assignedTboHours]])]),_("td",null,[mt(_("input",{"onUpdate:modelValue":l=>a.assignedTboYears=l,class:"cell-input numeric-input",disabled:!s.isOwner,onInput:l=>r.updateTboDerived(a),onChange:l=>r.saveRowFieldChange(a,"Asignado TBO años","tbo")},null,40,aT),[[gt,a.assignedTboYears]])]),_("td",null,[mt(_("input",{"onUpdate:modelValue":l=>a.consumedTboHours=l,class:"cell-input numeric-input",disabled:!s.isOwner,onInput:l=>r.updateTboDerived(a),onChange:l=>r.saveRowFieldChange(a,"Consumido TBO horas","tbo")},null,40,oT),[[gt,a.consumedTboHours]])]),_("td",null,[mt(_("input",{"onUpdate:modelValue":l=>a.consumedTboYears=l,class:"cell-input numeric-input calculated-input",disabled:"",readonly:""},null,8,lT),[[gt,a.consumedTboYears]])]),_("td",null,[mt(_("input",{"onUpdate:modelValue":l=>a.assignedTsnHours=l,class:"cell-input numeric-input",disabled:!s.isOwner,onInput:l=>r.updateTsnDerived(a),onChange:l=>r.saveRowFieldChange(a,"Asignado TSN horas","tsn")},null,40,cT),[[gt,a.assignedTsnHours]])]),_("td",null,[mt(_("input",{"onUpdate:modelValue":l=>a.assignedTsnYears=l,class:"cell-input numeric-input",disabled:!s.isOwner,onInput:l=>r.updateTsnDerived(a),onChange:l=>r.saveRowFieldChange(a,"Asignado TSN años","tsn")},null,40,uT),[[gt,a.assignedTsnYears]])]),_("td",null,[mt(_("input",{"onUpdate:modelValue":l=>a.consumedTsnHours=l,class:"cell-input numeric-input",disabled:!s.isOwner,onInput:l=>r.updateTsnDerived(a),onChange:l=>r.saveRowFieldChange(a,"Consumido TSN horas","tsn")},null,40,dT),[[gt,a.consumedTsnHours]])]),_("td",null,[mt(_("input",{"onUpdate:modelValue":l=>a.consumedTsnYears=l,class:"cell-input numeric-input calculated-input",disabled:"",readonly:""},null,8,fT),[[gt,a.consumedTsnYears]])]),_("td",null,[mt(_("input",{"onUpdate:modelValue":l=>a.remainingTboHours=l,class:"cell-input numeric-input calculated-input",disabled:"",readonly:""},null,8,hT),[[gt,a.remainingTboHours]])]),_("td",null,[mt(_("input",{"onUpdate:modelValue":l=>a.remainingTboYears=l,class:"cell-input numeric-input calculated-input",disabled:"",readonly:""},null,8,pT),[[gt,a.remainingTboYears]])]),_("td",null,[mt(_("input",{"onUpdate:modelValue":l=>a.remainingTsnHours=l,class:"cell-input numeric-input calculated-input",disabled:"",readonly:""},null,8,mT),[[gt,a.remainingTsnHours]])]),_("td",null,[mt(_("input",{"onUpdate:modelValue":l=>a.remainingTsnYears=l,class:"cell-input numeric-input calculated-input",disabled:"",readonly:""},null,8,gT),[[gt,a.remainingTsnYears]])]),_("td",null,[mt(_("textarea",{"onUpdate:modelValue":l=>a.notes=l,class:"cell-input notes-input",disabled:!s.isOwner,maxlength:"360",placeholder:"Notas del componente",onChange:l=>r.saveRowFieldChange(a,"Notas")},null,40,_T),[[gt,a.notes]])]),_("td",null,[mt(_("input",{"onUpdate:modelValue":l=>a.due=l,class:"cell-input calculated-input",disabled:"",readonly:""},null,8,vT),[[gt,a.due]])]),_("td",null,[_("span",{class:Dt(["status",r.statusClass(a)])},xe(r.getStatus(a)),3)]),_("td",null,[_("button",{class:"table-btn danger-btn",type:"button",disabled:!s.isOwner,onClick:l=>r.deleteRow(o)},[_("img",{class:"btn-icon",src:s.icons.delete,alt:"","aria-hidden":"true"},null,8,ST),e[89]||(e[89]=ot("Eliminar",-1))],8,xT)])],42,$E))),128))])])])],512)):Kt("",!0),s.activeView==="alertas"?(Ye(),Ke("section",MT,[_("div",bT,[_("article",yT,[e[91]||(e[91]=_("p",null,"Overhaul Requerido",-1)),_("b",ET,xe(r.fleetAlertMetrics.critical),1)]),_("article",TT,[e[92]||(e[92]=_("p",null,"Alertas Preventivas",-1)),_("b",AT,xe(r.fleetAlertMetrics.alert),1)]),_("article",wT,[e[93]||(e[93]=_("p",null,"Proximos 90 dias",-1)),_("b",RT,xe(r.fleetAlertMetrics.dueIn90),1)]),_("article",CT,[e[94]||(e[94]=_("p",null,"Proximos 180 dias",-1)),_("b",PT,xe(r.fleetAlertMetrics.dueIn180),1)]),_("article",DT,[e[95]||(e[95]=_("p",null,"Riesgo Global",-1)),_("b",{style:Gt({color:r.fleetRiskLabel.color})},xe(r.fleetAlertMetrics.risk)+"%",5)])]),_("article",LT,[e[96]||(e[96]=_("h2",null,"Componentes en Alerta",-1)),e[97]||(e[97]=_("p",{class:"panel-sub"},"Alertas consolidadas de todas las aeronaves",-1)),_("ul",IT,[(Ye(!0),Ke(_t,null,nn(r.allAlertRows,a=>(Ye(),Ke("li",{key:a.key},[_("span",null,[_("strong",UT,xe(a.aircraftCode),1),ot(xe(a.component),1)]),_("span",{class:Dt(["date",a.className])},xe(a.status),3)]))),128))])])])):Kt("",!0),s.activeView==="calendario"?(Ye(),Ke("section",NT,[_("h2",FT,[_("img",{src:s.icons.due,alt:"","aria-hidden":"true"},null,8,OT),e[98]||(e[98]=ot("Calendario de Vencimientos",-1))]),e[99]||(e[99]=_("p",{class:"panel-sub"},"Proximos controles por fecha",-1)),_("ul",BT,[(Ye(!0),Ke(_t,null,nn(r.dueEvents,a=>(Ye(),Ke("li",{key:a.key},[_("span",null,xe(a.component),1),_("span",{class:Dt(["date",a.className])},xe(a.due),3)]))),128))])])):Kt("",!0),s.activeView==="historial"?(Ye(),Ke("section",HT,[e[101]||(e[101]=_("div",{class:"table-title"},[_("div",null,[_("h2",null,"Historial"),_("p",{class:"panel-sub"},"Ultimos 20 cambios del sistema y registro de overhaul")])],-1)),_("div",kT,[(Ye(!0),Ke(_t,null,nn(r.recentChanges,a=>(Ye(),Ke("article",{key:a.id,class:"change-item"},[_("div",null,[_("strong",null,[ot(xe(a.action)+" ",1),a.aircraftCode?(Ye(),Ke("span",VT,xe(a.aircraftCode),1)):Kt("",!0)]),_("p",null,xe(a.detail),1)]),_("span",null,xe(r.formatChangeDate(a.timestamp)),1)]))),128)),r.recentChanges.length===0?(Ye(),Ke("p",zT,"Aun no hay cambios registrados.")):Kt("",!0)]),e[102]||(e[102]=_("div",{class:"history-section-title"},"Historial de Overhaul",-1)),_("div",GT,[_("table",WT,[e[100]||(e[100]=_("thead",null,[_("tr",null,[_("th",null,"Componente"),_("th",null,"Serie"),_("th",null,"Fecha fabricacion"),_("th",null,"Taller"),_("th",null,"Ultimo Overhaul"),_("th",null,"Vencimiento"),_("th",null,"Estado")])],-1)),_("tbody",null,[(Ye(!0),Ke(_t,null,nn(r.historyRows,a=>(Ye(),Ke("tr",{key:a.key},[_("td",null,xe(a.component),1),_("td",null,xe(a.series),1),_("td",null,xe(a.manufactureDate),1),_("td",null,xe(a.workshop),1),_("td",null,xe(a.overhaul),1),_("td",null,xe(a.due),1),_("td",null,[_("span",{class:Dt(["status",a.statusClass])},xe(a.status),3)])]))),128))])])])])):Kt("",!0),s.activeView==="papelera"?(Ye(),Ke("section",XT,[e[106]||(e[106]=_("div",{class:"table-title"},[_("div",null,[_("h2",null,"Papelera"),_("p",{class:"panel-sub"},"Elementos eliminados, disponibles por 30 dias")])],-1)),_("div",YT,[_("table",qT,[e[105]||(e[105]=_("thead",null,[_("tr",null,[_("th",null,"Tipo"),_("th",null,"Aeronave"),_("th",null,"Elemento"),_("th",null,"Eliminado"),_("th",null,"Expira"),_("th",null,"Accion")])],-1)),_("tbody",null,[(Ye(!0),Ke(_t,null,nn(r.trashRows,a=>(Ye(),Ke("tr",{key:a.id},[_("td",null,xe(a.typeLabel),1),_("td",null,xe(a.aircraftCode),1),_("td",null,xe(a.name),1),_("td",null,xe(r.formatChangeDate(a.deletedAt)),1),_("td",null,xe(r.formatChangeDate(a.expiresAt)),1),_("td",null,[_("button",{class:"table-btn",type:"button",disabled:!s.isOwner,onClick:o=>r.restoreTrashItem(a.id)},[_("img",{class:"btn-icon",src:s.icons.restore,alt:"","aria-hidden":"true"},null,8,ZT),e[103]||(e[103]=ot("Restaurar",-1))],8,KT)])]))),128)),r.trashRows.length===0?(Ye(),Ke("tr",$T,[...e[104]||(e[104]=[_("td",{colspan:"6",class:"empty-cell"},"La papelera esta vacia.",-1)])])):Kt("",!0)])])])])):Kt("",!0)],64)):Kt("",!0),_("footer",null,xe(new Date().getFullYear())+" Sistema de Gestion de Recursos Aeronauticos · "+xe(r.currentAircraft?r.currentAircraft.code:"PNP-501")+" · Todos los derechos reservados ",1)])])):(Ye(),Ke("section",Sb,[_("canvas",Mb,null,512),_("form",{class:"login-card",onSubmit:e[14]||(e[14]=Sn((...a)=>r.signInWithEmail&&r.signInWithEmail(...a),["prevent"]))},[e[35]||(e[35]=_("div",{class:"login-brand"},[_("p",null,"DIVMAAER"),_("h1",null,"Control de Calidad")],-1)),e[36]||(e[36]=_("label",{for:"login-email"},"Correo",-1)),mt(_("input",{id:"login-email","onUpdate:modelValue":e[0]||(e[0]=a=>s.loginEmail=a),class:"login-input",type:"email",autocomplete:"username",placeholder:"correo@ejemplo.com",disabled:s.authBusy},null,8,bb),[[gt,s.loginEmail,void 0,{trim:!0}]]),e[37]||(e[37]=_("label",{for:"login-password"},"Contrasena",-1)),_("div",yb,[mt(_("input",{id:"login-password","onUpdate:modelValue":e[1]||(e[1]=a=>s.loginPassword=a),class:"login-input",type:s.passwordVisible?"text":"password",autocomplete:"current-password",placeholder:"Contrasena",disabled:s.authBusy},null,8,Eb),[[mg,s.loginPassword]]),_("button",{class:"password-eye-btn",type:"button","aria-label":"Ver contrasena mientras se presiona",title:"Ver contrasena",disabled:s.authBusy,onMousedown:e[2]||(e[2]=Sn((...a)=>r.showPassword&&r.showPassword(...a),["prevent"])),onMouseup:e[3]||(e[3]=(...a)=>r.hidePassword&&r.hidePassword(...a)),onMouseleave:e[4]||(e[4]=(...a)=>r.hidePassword&&r.hidePassword(...a)),onTouchstart:e[5]||(e[5]=Sn((...a)=>r.showPassword&&r.showPassword(...a),["prevent"])),onTouchend:e[6]||(e[6]=(...a)=>r.hidePassword&&r.hidePassword(...a)),onTouchcancel:e[7]||(e[7]=(...a)=>r.hidePassword&&r.hidePassword(...a)),onKeydown:[e[8]||(e[8]=Br(Sn((...a)=>r.showPassword&&r.showPassword(...a),["prevent"]),["space"])),e[10]||(e[10]=Br(Sn((...a)=>r.showPassword&&r.showPassword(...a),["prevent"]),["enter"]))],onKeyup:[e[9]||(e[9]=Br((...a)=>r.hidePassword&&r.hidePassword(...a),["space"])),e[11]||(e[11]=Br((...a)=>r.hidePassword&&r.hidePassword(...a),["enter"]))]},[_("img",{class:"btn-icon",src:s.icons.eye,alt:"","aria-hidden":"true"},null,8,Ab)],40,Tb)]),_("div",wb,[_("button",{class:"login-btn primary",type:"submit",disabled:s.authBusy||!s.authReady},[_("img",{class:"btn-icon",src:s.icons.login,alt:"","aria-hidden":"true"},null,8,Cb),ot(" "+xe(s.authBusy?"Procesando...":"Ingresar"),1)],8,Rb),_("button",{class:"login-btn",type:"button",disabled:s.authBusy||!s.authReady,onClick:e[12]||(e[12]=(...a)=>r.createEmailUser&&r.createEmailUser(...a))},[_("img",{class:"btn-icon",src:s.icons.user,alt:"","aria-hidden":"true"},null,8,Db),e[34]||(e[34]=ot(" Crear cuenta ",-1))],8,Pb)]),_("button",{class:"login-link-btn",type:"button",disabled:s.authBusy||!s.authReady,onClick:e[13]||(e[13]=(...a)=>r.sendPasswordReset&&r.sendPasswordReset(...a))}," Restablecer contrasena ",8,Lb),_("p",{class:Dt(["login-hint",{error:s.authHintError}])},xe(s.authHint),3)],32)]))],2)}const QT=cb(xb,[["render",JT]]);bg(QT).mount("#app");
