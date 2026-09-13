(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const St={},xs=[],zn=()=>{},Dd=()=>!1,Pa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Da=n=>n.startsWith("onUpdate:"),qt=Object.assign,Jl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Oh=Object.prototype.hasOwnProperty,ft=(n,e)=>Oh.call(n,e),Ke=Array.isArray,Ss=n=>mr(n)==="[object Map]",Ld=n=>mr(n)==="[object Set]",Gc=n=>mr(n)==="[object Date]",Qe=n=>typeof n=="function",Rt=n=>typeof n=="string",Gn=n=>typeof n=="symbol",gt=n=>n!==null&&typeof n=="object",Id=n=>(gt(n)||Qe(n))&&Qe(n.then)&&Qe(n.catch),Ud=Object.prototype.toString,mr=n=>Ud.call(n),Bh=n=>mr(n).slice(8,-1),Nd=n=>mr(n)==="[object Object]",$l=n=>Rt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Js=Zl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),La=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Hh=/-\w/g,yn=La(n=>n.replace(Hh,e=>e.slice(1).toUpperCase())),Vh=/\B([A-Z])/g,Zi=La(n=>n.replace(Vh,"-$1").toLowerCase()),Fd=La(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ya=La(n=>n?`on${Fd(n)}`:""),ni=(n,e)=>!Object.is(n,e),na=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Od=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Ql=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Wc;const Ia=()=>Wc||(Wc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gt(n){if(Ke(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Rt(i)?Wh(i):Gt(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Rt(n)||gt(n))return n}const zh=/;(?![^(]*\))/g,kh=/:([^]+)/,Gh=/\/\*[^]*?\*\//g;function Wh(n){const e={};return n.replace(Gh,"").split(zh).forEach(t=>{if(t){const i=t.split(kh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Dt(n){let e="";if(Rt(n))e=n;else if(Ke(n))for(let t=0;t<n.length;t++){const i=Dt(n[t]);i&&(e+=i+" ")}else if(gt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Xh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qh=Zl(Xh);function Bd(n){return!!n||n===""}function Yh(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=jl(n[i],e[i]);return t}function jl(n,e){if(n===e)return!0;let t=Gc(n),i=Gc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Gn(n),i=Gn(e),t||i)return n===e;if(t=Ke(n),i=Ke(e),t||i)return t&&i?Yh(n,e):!1;if(t=gt(n),i=gt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!jl(n[a],e[a]))return!1}}return String(n)===String(e)}const Hd=n=>!!(n&&n.__v_isRef===!0),ye=n=>Rt(n)?n:n==null?"":Ke(n)||gt(n)&&(n.toString===Ud||!Qe(n.toString))?Hd(n)?ye(n.value):JSON.stringify(n,Vd,2):String(n),Vd=(n,e)=>Hd(e)?Vd(n,e.value):Ss(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Ka(i,r)+" =>"]=s,t),{})}:Ld(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ka(t))}:Gn(e)?Ka(e):gt(e)&&!Ke(e)&&!Nd(e)?String(e):e,Ka=(n,e="")=>{var t;return Gn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ot;class Kh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Ot&&(Ot.active?(this.parent=Ot,this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Ot;try{return Ot=this,e()}finally{Ot=t}}}on(){++this._on===1&&(this.prevScope=Ot,Ot=this)}off(){if(this._on>0&&--this._on===0){if(Ot===this)Ot=this.prevScope;else{let e=Ot;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Zh(){return Ot}let Et;const Za=new WeakSet;class zd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ot&&(Ot.active?Ot.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Za.has(this)&&(Za.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xc(this),Wd(this);const e=Et,t=En;Et=this,En=!0;try{return this.fn()}finally{Xd(this),Et=e,En=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)nc(e);this.deps=this.depsTail=void 0,Xc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Za.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qo(this)&&this.run()}get dirty(){return qo(this)}}let kd=0,$s,Qs;function Gd(n,e=!1){if(n.flags|=8,e){n.next=Qs,Qs=n;return}n.next=$s,$s=n}function ec(){kd++}function tc(){if(--kd>0)return;if(Qs){let e=Qs;for(Qs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;$s;){let e=$s;for($s=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Wd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Xd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),nc(i),Jh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function qo(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(qd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function qd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===rr)||(n.globalVersion=rr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!qo(n))))return;n.flags|=2;const e=n.dep,t=Et,i=En;Et=n,En=!0;try{Wd(n);const s=n.fn(n._value);(e.version===0||ni(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Et=t,En=i,Xd(n),n.flags&=-3}}function nc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)nc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Jh(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let En=!0;const Yd=[];function di(){Yd.push(En),En=!1}function fi(){const n=Yd.pop();En=n===void 0?!0:n}function Xc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Et;Et=void 0;try{e()}finally{Et=t}}}let rr=0;class $h{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Kd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Et||!En||Et===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Et)t=this.activeLink=new $h(Et,this),Et.deps?(t.prevDep=Et.depsTail,Et.depsTail.nextDep=t,Et.depsTail=t):Et.deps=Et.depsTail=t,Zd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Et.depsTail,t.nextDep=void 0,Et.depsTail.nextDep=t,Et.depsTail=t,Et.deps===t&&(Et.deps=i)}return t}trigger(e){this.version++,rr++,this.notify(e)}notify(e){ec();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{tc()}}}function Zd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Zd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Yo=new WeakMap,ki=Symbol(""),Ko=Symbol(""),ar=Symbol("");function Wt(n,e,t){if(En&&Et){let i=Yo.get(n);i||Yo.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Kd),s.map=i,s.key=t),s.track()}}function ii(n,e,t,i,s,r){const a=Yo.get(n);if(!a){rr++;return}const o=l=>{l&&l.trigger()};if(ec(),e==="clear")a.forEach(o);else{const l=Ke(n),c=l&&$l(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===ar||!Gn(d)&&d>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(ar)),e){case"add":l?c&&o(a.get("length")):(o(a.get(ki)),Ss(n)&&o(a.get(Ko)));break;case"delete":l||(o(a.get(ki)),Ss(n)&&o(a.get(Ko)));break;case"set":Ss(n)&&o(a.get(ki));break}}tc()}function ji(n){const e=mt(n);return e===n?e:(Wt(e,"iterate",ar),Tn(n)?e:e.map(hi))}function Ua(n){return Wt(n=mt(n),"iterate",ar),n}function Nn(n,e){return Ri(n)?Ts(Gi(n)?hi(e):e):hi(e)}const Qh={__proto__:null,[Symbol.iterator](){return Ja(this,Symbol.iterator,n=>Nn(this,n))},concat(...n){return ji(this).concat(...n.map(e=>Ke(e)?ji(e):e))},entries(){return Ja(this,"entries",n=>(n[1]=Nn(this,n[1]),n))},every(n,e){return Yn(this,"every",n,e,void 0,arguments)},filter(n,e){return Yn(this,"filter",n,e,t=>t.map(i=>Nn(this,i)),arguments)},find(n,e){return Yn(this,"find",n,e,t=>Nn(this,t),arguments)},findIndex(n,e){return Yn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Yn(this,"findLast",n,e,t=>Nn(this,t),arguments)},findLastIndex(n,e){return Yn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Yn(this,"forEach",n,e,void 0,arguments)},includes(...n){return $a(this,"includes",n)},indexOf(...n){return $a(this,"indexOf",n)},join(n){return ji(this).join(n)},lastIndexOf(...n){return $a(this,"lastIndexOf",n)},map(n,e){return Yn(this,"map",n,e,void 0,arguments)},pop(){return Ls(this,"pop")},push(...n){return Ls(this,"push",n)},reduce(n,...e){return qc(this,"reduce",n,e)},reduceRight(n,...e){return qc(this,"reduceRight",n,e)},shift(){return Ls(this,"shift")},some(n,e){return Yn(this,"some",n,e,void 0,arguments)},splice(...n){return Ls(this,"splice",n)},toReversed(){return ji(this).toReversed()},toSorted(n){return ji(this).toSorted(n)},toSpliced(...n){return ji(this).toSpliced(...n)},unshift(...n){return Ls(this,"unshift",n)},values(){return Ja(this,"values",n=>Nn(this,n))}};function Ja(n,e,t){const i=Ua(n),s=i[e]();return i!==n&&!Tn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const jh=Array.prototype;function Yn(n,e,t,i,s,r){const a=Ua(n),o=a!==n&&!Tn(n),l=a[e];if(l!==jh[e]){const f=l.apply(n,r);return o?hi(f):f}let c=t;a!==n&&(o?c=function(f,d){return t.call(this,Nn(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function qc(n,e,t,i){const s=Ua(n),r=s!==n&&!Tn(n);let a=t,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=Nn(n,c)),t.call(this,c,Nn(n,u),f,n)}):t.length>3&&(a=function(c,u,f){return t.call(this,c,u,f,n)}));const l=s[e](a,...i);return o?Nn(n,l):l}function $a(n,e,t){const i=mt(n);Wt(i,"iterate",ar);const s=i[e](...t);return(s===-1||s===!1)&&ac(t[0])?(t[0]=mt(t[0]),i[e](...t)):s}function Ls(n,e,t=[]){di(),ec();const i=mt(n)[e].apply(n,t);return tc(),fi(),i}const ep=Zl("__proto__,__v_isRef,__isVue"),Jd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Gn));function tp(n){Gn(n)||(n=String(n));const e=mt(this);return Wt(e,"has",n),e.hasOwnProperty(n)}class $d{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?dp:tf:r?ef:jd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Ke(e);if(!s){let l;if(a&&(l=Qh[t]))return l;if(t==="hasOwnProperty")return tp}const o=Reflect.get(e,t,Qt(e)?e:i);if((Gn(t)?Jd.has(t):ep(t))||(s||Wt(e,"get",t),r))return o;if(Qt(o)){const l=a&&$l(t)?o:o.value;return s&&gt(l)?Jo(l):l}return gt(o)?s?Jo(o):sc(o):o}}class Qd extends $d{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const a=Ke(e)&&$l(t);if(!this._isShallow){const c=Ri(r);if(!Tn(i)&&!Ri(i)&&(r=mt(r),i=mt(i)),!a&&Qt(r)&&!Qt(i))return c||(r.value=i),!0}const o=a?Number(t)<e.length:ft(e,t),l=Reflect.set(e,t,i,Qt(e)?e:s);return e===mt(s)&&l&&(o?ni(i,r)&&ii(e,"set",t,i):ii(e,"add",t,i)),l}deleteProperty(e,t){const i=ft(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ii(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Gn(t)||!Jd.has(t))&&Wt(e,"has",t),i}ownKeys(e){return Wt(e,"iterate",Ke(e)?"length":ki),Reflect.ownKeys(e)}}class np extends $d{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const ip=new Qd,sp=new np,rp=new Qd(!0);const Zo=n=>n,Er=n=>Reflect.getPrototypeOf(n);function ap(n,e,t){return function(...i){const s=this.__v_raw,r=mt(s),a=Ss(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?Zo:e?Ts:hi;return!e&&Wt(r,"iterate",l?Ko:ki),qt(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function Tr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function op(n,e){const t={get(s){const r=this.__v_raw,a=mt(r),o=mt(s);n||(ni(s,o)&&Wt(a,"get",s),Wt(a,"get",o));const{has:l}=Er(a),c=e?Zo:n?Ts:hi;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Wt(mt(s),"iterate",ki),s.size},has(s){const r=this.__v_raw,a=mt(r),o=mt(s);return n||(ni(s,o)&&Wt(a,"has",s),Wt(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=mt(o),c=e?Zo:n?Ts:hi;return!n&&Wt(l,"iterate",ki),o.forEach((u,f)=>s.call(r,c(u),c(f),a))}};return qt(t,n?{add:Tr("add"),set:Tr("set"),delete:Tr("delete"),clear:Tr("clear")}:{add(s){const r=mt(this),a=Er(r),o=mt(s),l=!e&&!Tn(s)&&!Ri(s)?o:s;return a.has.call(r,l)||ni(s,l)&&a.has.call(r,s)||ni(o,l)&&a.has.call(r,o)||(r.add(l),ii(r,"add",l,l)),this},set(s,r){!e&&!Tn(r)&&!Ri(r)&&(r=mt(r));const a=mt(this),{has:o,get:l}=Er(a);let c=o.call(a,s);c||(s=mt(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?ni(r,u)&&ii(a,"set",s,r):ii(a,"add",s,r),this},delete(s){const r=mt(this),{has:a,get:o}=Er(r);let l=a.call(r,s);l||(s=mt(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&ii(r,"delete",s,void 0),c},clear(){const s=mt(this),r=s.size!==0,a=s.clear();return r&&ii(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ap(s,n,e)}),t}function ic(n,e){const t=op(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ft(t,s)&&s in i?t:i,s,r)}const lp={get:ic(!1,!1)},cp={get:ic(!1,!0)},up={get:ic(!0,!1)};const jd=new WeakMap,ef=new WeakMap,tf=new WeakMap,dp=new WeakMap;function fp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sc(n){return Ri(n)?n:rc(n,!1,ip,lp,jd)}function hp(n){return rc(n,!1,rp,cp,ef)}function Jo(n){return rc(n,!0,sp,up,tf)}function rc(n,e,t,i,s){if(!gt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const a=fp(Bh(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function Gi(n){return Ri(n)?Gi(n.__v_raw):!!(n&&n.__v_isReactive)}function Ri(n){return!!(n&&n.__v_isReadonly)}function Tn(n){return!!(n&&n.__v_isShallow)}function ac(n){return n?!!n.__v_raw:!1}function mt(n){const e=n&&n.__v_raw;return e?mt(e):n}function pp(n){return!ft(n,"__v_skip")&&Object.isExtensible(n)&&Od(n,"__v_skip",!0),n}const hi=n=>gt(n)?sc(n):n,Ts=n=>gt(n)?Jo(n):n;function Qt(n){return n?n.__v_isRef===!0:!1}function mp(n){return Qt(n)?n.value:n}const gp={get:(n,e,t)=>e==="__v_raw"?n:mp(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Qt(s)&&!Qt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function nf(n){return Gi(n)?n:new Proxy(n,gp)}class _p{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Kd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=rr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return Gd(this,!0),!0}get value(){const e=this.dep.track();return qd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function vp(n,e,t=!1){let i,s;return Qe(n)?i=n:(i=n.get,s=n.set),new _p(i,s,t)}const Ar={},da=new WeakMap;let Bi;function xp(n,e=!1,t=Bi){if(t){let i=da.get(t);i||da.set(t,i=[]),i.push(n)}}function Sp(n,e,t=St){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=x=>s?x:Tn(x)||s===!1||s===0?si(x,1):si(x);let u,f,d,h,_=!1,b=!1;if(Qt(n)?(f=()=>n.value,_=Tn(n)):Gi(n)?(f=()=>c(n),_=!0):Ke(n)?(b=!0,_=n.some(x=>Gi(x)||Tn(x)),f=()=>n.map(x=>{if(Qt(x))return x.value;if(Gi(x))return c(x);if(Qe(x))return l?l(x,2):x()})):Qe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){di();try{d()}finally{fi()}}const x=Bi;Bi=u;try{return l?l(n,3,[h]):n(h)}finally{Bi=x}}:f=zn,e&&s){const x=f,T=s===!0?1/0:s;f=()=>si(x(),T)}const m=Zh(),p=()=>{u.stop(),m&&m.active&&Jl(m.effects,u)};if(r&&e){const x=e;e=(...T)=>{const A=x(...T);return p(),A}}let y=b?new Array(n.length).fill(Ar):Ar;const P=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const T=u.run();if(x||s||_||(b?T.some((A,D)=>ni(A,y[D])):ni(T,y))){d&&d();const A=Bi;Bi=u;try{const D=[T,y===Ar?void 0:b&&y[0]===Ar?[]:y,h];y=T,l?l(e,3,D):e(...D)}finally{Bi=A}}}else u.run()};return o&&o(P),u=new zd(f),u.scheduler=a?()=>a(P,!1):P,h=x=>xp(x,!1,u),d=u.onStop=()=>{const x=da.get(u);if(x){if(l)l(x,4);else for(const T of x)T();da.delete(u)}},e?i?P(!0):y=u.run():a?a(P.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function si(n,e=1/0,t){if(e<=0||!gt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Qt(n))si(n.value,e,t);else if(Ke(n))for(let i=0;i<n.length;i++)si(n[i],e,t);else if(Ld(n)||Ss(n))n.forEach(i=>{si(i,e,t)});else if(Nd(n)){for(const i in n)si(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&si(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gr(n,e,t,i){try{return i?n(...i):n()}catch(s){Na(s,e,t)}}function wn(n,e,t,i){if(Qe(n)){const s=gr(n,e,t,i);return s&&Id(s)&&s.catch(r=>{Na(r,e,t)}),s}if(Ke(n)){const s=[];for(let r=0;r<n.length;r++)s.push(wn(n[r],e,t,i));return s}}function Na(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||St;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(r){di(),gr(r,null,10,[n,l,c]),fi();return}}Mp(n,t,s,i,a)}function Mp(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Jt=[];let In=-1;const Ms=[];let Ti=null,hs=0;const sf=Promise.resolve();let fa=null;function bp(n){const e=fa||sf;return n?e.then(this?n.bind(this):n):e}function yp(n){let e=In+1,t=Jt.length;for(;e<t;){const i=e+t>>>1,s=Jt[i],r=or(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function oc(n){if(!(n.flags&1)){const e=or(n),t=Jt[Jt.length-1];!t||!(n.flags&2)&&e>=or(t)?Jt.push(n):Jt.splice(yp(e),0,n),n.flags|=1,rf()}}function rf(){fa||(fa=sf.then(of))}function Ep(n){if(!Ke(n))Ti&&n.id===-1?Ti.splice(hs+1,0,n):n.flags&1||(Ms.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)Ms.push(n[e]);rf()}function Yc(n,e,t=In+1){for(;t<Jt.length;t++){const i=Jt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Jt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function af(n){if(Ms.length){const e=[...new Set(Ms)].sort((t,i)=>or(t)-or(i));if(Ms.length=0,Ti){for(let t=0;t<e.length;t++)Ti.push(e[t]);return}for(Ti=e,hs=0;hs<Ti.length;hs++){const t=Ti[hs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ti=null,hs=0}}const or=n=>n.id==null?n.flags&2?-1:1/0:n.id;function of(n){try{for(In=0;In<Jt.length;In++){const e=Jt[In];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),gr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;In<Jt.length;In++){const e=Jt[In];e&&(e.flags&=-2)}In=-1,Jt.length=0,af(),fa=null,(Jt.length||Ms.length)&&of()}}let gn=null,lf=null;function ha(n){const e=gn;return gn=n,lf=n&&n.type.__scopeId||null,e}function Tp(n,e=gn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&su(-1);const r=ha(e),a=Wi.length;let o;try{o=n(...s)}finally{for(let l=Wi.length;l>a;l--)Lf();ha(r),i._d&&su(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function vt(n,e){if(gn===null)return n;const t=Va(gn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,a,o,l=St]=e[s];r&&(Qe(r)&&(r={mounted:r,updated:r}),r.deep&&si(a),i.push({dir:r,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Pi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(di(),wn(l,t,8,[n.el,o,n,e]),fi())}}function Ap(n,e){if($t){let t=$t.provides;const i=$t.parent&&$t.parent.provides;i===t&&(t=$t.provides=Object.create(i)),t[n]=e}}function ia(n,e,t=!1){const i=Em();if(i||bs){let s=bs?bs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Qe(e)?e.call(i&&i.proxy):e}}const wp=Symbol.for("v-scx"),Rp=()=>ia(wp);function Qa(n,e,t){return cf(n,e,t)}function cf(n,e,t=St){const{immediate:i,deep:s,flush:r,once:a}=t,o=qt({},t),l=e&&i||!e&&r!=="post";let c;if(ur){if(r==="sync"){const h=Rp();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=zn,h.resume=zn,h.pause=zn,h}}const u=$t;o.call=(h,_,b)=>wn(h,u,_,b);let f=!1;r==="post"?o.scheduler=h=>{nn(h,u&&u.suspense)}:r!=="sync"&&(f=!0,o.scheduler=(h,_)=>{_?h():oc(h)}),o.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=Sp(n,e,o);return ur&&(c?c.push(d):l&&d()),d}function Cp(n,e,t){const i=this.proxy,s=Rt(n)?n.includes(".")?uf(i,n):()=>i[n]:n.bind(i,i);let r;Qe(e)?r=e:(r=e.handler,t=e);const a=_r(this),o=cf(s,r.bind(i),t);return a(),o}function uf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Pp=Symbol("_vte"),Fa=n=>n.__isTeleport,ja=Symbol("_leaveCb");function Dp(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==pi){e=t;break}}return e}function df(n){if(!cc(n))return Fa(n.type)&&n.children?Dp(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Qe(t.default))return t.default()}}function lc(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;lc(Fa(t.type)&&df(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function ff(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Kc(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const pa=new WeakMap;function js(n,e,t,i,s=!1){if(Ke(n)){n.forEach((b,m)=>js(b,e&&(Ke(e)?e[m]:e),t,i,s));return}if(er(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&js(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Va(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===St?o.refs={}:o.refs,f=o.setupState,d=mt(f),h=f===St?Dd:b=>Kc(u,b)?!1:ft(d,b),_=(b,m)=>!(m&&Kc(u,m));if(c!=null&&c!==l){if(Zc(e),Rt(c))u[c]=null,h(c)&&(f[c]=null);else if(Qt(c)){const b=e;_(c,b.k)&&(c.value=null),b.k&&(u[b.k]=null)}}if(Qe(l))gr(l,o,12,[a,u]);else{const b=Rt(l),m=Qt(l);if(b||m){const p=()=>{if(n.f){const y=b?h(l)?f[l]:u[l]:_()||!n.k?l.value:u[n.k];if(s)Ke(y)&&Jl(y,r);else if(Ke(y))y.includes(r)||y.push(r);else if(b)u[l]=[r],h(l)&&(f[l]=u[l]);else{const P=[r];_(l,n.k)&&(l.value=P),n.k&&(u[n.k]=P)}}else b?(u[l]=a,h(l)&&(f[l]=a)):m&&(_(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const y=()=>{p(),pa.delete(n)};y.id=-1,pa.set(n,y),nn(y,t)}else Zc(n),p()}}}function Zc(n){const e=pa.get(n);e&&(e.flags|=8,pa.delete(n))}Ia().requestIdleCallback;Ia().cancelIdleCallback;const er=n=>!!n.type.__asyncLoader,cc=n=>n.type.__isKeepAlive;function Lp(n,e){hf(n,"a",e)}function Ip(n,e){hf(n,"da",e)}function hf(n,e,t=$t){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Oa(e,i,t),t){let s=t.parent;for(;s&&s.parent;)cc(s.parent.vnode)&&Up(i,e,t,s),s=s.parent}}function Up(n,e,t,i){const s=Oa(e,n,i,!0);pf(()=>{Jl(i[e],s)},t)}function Oa(n,e,t=$t,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{di();const o=_r(t),l=wn(e,t,n,a);return o(),fi(),l});return i?s.unshift(r):s.push(r),r}}const gi=n=>(e,t=$t)=>{(!ur||n==="sp")&&Oa(n,(...i)=>e(...i),t)},Np=gi("bm"),Fp=gi("m"),Op=gi("bu"),Bp=gi("u"),Hp=gi("bum"),pf=gi("um"),Vp=gi("sp"),zp=gi("rtg"),kp=gi("rtc");function Gp(n,e=$t){Oa("ec",n,e)}const Wp=Symbol.for("v-ndc");function rn(n,e,t,i){let s;const r=t,a=Ke(n);if(a||Rt(n)){const o=a&&Gi(n);let l=!1,c=!1;o&&(l=!Tn(n),c=Ri(n),n=Ua(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?Ts(hi(n[u])):hi(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(gt(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const $o=n=>n?Ff(n)?Va(n):$o(n.parent):null,tr=qt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>$o(n.parent),$root:n=>$o(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>gf(n),$forceUpdate:n=>n.f||(n.f=()=>{oc(n.update)}),$nextTick:n=>n.n||(n.n=bp.bind(n.proxy)),$watch:n=>Cp.bind(n)}),eo=(n,e)=>n!==St&&!n.__isScriptSetup&&ft(n,e),Xp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(eo(i,e))return a[e]=1,i[e];if(s!==St&&ft(s,e))return a[e]=2,s[e];if(ft(r,e))return a[e]=3,r[e];if(t!==St&&ft(t,e))return a[e]=4,t[e];Qo&&(a[e]=0)}}const c=tr[e];let u,f;if(c)return e==="$attrs"&&Wt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==St&&ft(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,ft(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return eo(s,e)?(s[e]=t,!0):i!==St&&ft(i,e)?(i[e]=t,!0):ft(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(t[o]||n!==St&&o[0]!=="$"&&ft(n,o)||eo(e,o)||ft(r,o)||ft(i,o)||ft(tr,o)||ft(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ft(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Jc(n){return Ke(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Qo=!0;function qp(n){const e=gf(n),t=n.proxy,i=n.ctx;Qo=!1,e.beforeCreate&&$c(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:_,activated:b,deactivated:m,beforeDestroy:p,beforeUnmount:y,destroyed:P,unmounted:x,render:T,renderTracked:A,renderTriggered:D,errorCaptured:v,serverPrefetch:w,expose:L,inheritAttrs:O,components:G,directives:K,filters:V}=e;if(c&&Yp(c,i,null),a)for(const z in a){const ie=a[z];Qe(ie)&&(i[z]=ie.bind(t))}if(s){const z=s.call(t,t);gt(z)&&(n.data=sc(z))}if(Qo=!0,r)for(const z in r){const ie=r[z],Q=Qe(ie)?ie.bind(t,t):Qe(ie.get)?ie.get.bind(t,t):zn,N=!Qe(ie)&&Qe(ie.set)?ie.set.bind(t):zn,$=Pm({get:Q,set:N});Object.defineProperty(i,z,{enumerable:!0,configurable:!0,get:()=>$.value,set:_e=>$.value=_e})}if(o)for(const z in o)mf(o[z],i,t,z);if(l){const z=Qe(l)?l.call(t):l;Reflect.ownKeys(z).forEach(ie=>{Ap(ie,z[ie])})}u&&$c(u,n,"c");function ee(z,ie){Ke(ie)?ie.forEach(Q=>z(Q.bind(t))):ie&&z(ie.bind(t))}if(ee(Np,f),ee(Fp,d),ee(Op,h),ee(Bp,_),ee(Lp,b),ee(Ip,m),ee(Gp,v),ee(kp,A),ee(zp,D),ee(Hp,y),ee(pf,x),ee(Vp,w),Ke(L))if(L.length){const z=n.exposed||(n.exposed={});L.forEach(ie=>{Object.defineProperty(z,ie,{get:()=>t[ie],set:Q=>t[ie]=Q,enumerable:!0})})}else n.exposed||(n.exposed={});T&&n.render===zn&&(n.render=T),O!=null&&(n.inheritAttrs=O),G&&(n.components=G),K&&(n.directives=K),w&&ff(n)}function Yp(n,e,t=zn){Ke(n)&&(n=jo(n));for(const i in n){const s=n[i];let r;gt(s)?"default"in s?r=ia(s.from||i,s.default,!0):r=ia(s.from||i):r=ia(s),Qt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function $c(n,e,t){wn(Ke(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function mf(n,e,t,i){let s=i.includes(".")?uf(t,i):()=>t[i];if(Rt(n)){const r=e[n];Qe(r)&&Qa(s,r)}else if(Qe(n))Qa(s,n.bind(t));else if(gt(n))if(Ke(n))n.forEach(r=>mf(r,e,t,i));else{const r=Qe(n.handler)?n.handler.bind(t):e[n.handler];Qe(r)&&Qa(s,r,n)}}function gf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>ma(l,c,a,!0)),ma(l,e,a)),gt(e)&&r.set(e,l),l}function ma(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&ma(n,r,t,!0),s&&s.forEach(a=>ma(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Kp[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Kp={data:Qc,props:jc,emits:jc,methods:Ws,computed:Ws,beforeCreate:Kt,created:Kt,beforeMount:Kt,mounted:Kt,beforeUpdate:Kt,updated:Kt,beforeDestroy:Kt,beforeUnmount:Kt,destroyed:Kt,unmounted:Kt,activated:Kt,deactivated:Kt,errorCaptured:Kt,serverPrefetch:Kt,components:Ws,directives:Ws,watch:Jp,provide:Qc,inject:Zp};function Qc(n,e){return e?n?function(){return qt(Qe(n)?n.call(this,this):n,Qe(e)?e.call(this,this):e)}:e:n}function Zp(n,e){return Ws(jo(n),jo(e))}function jo(n){if(Ke(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Kt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ws(n,e){return n?qt(Object.create(null),n,e):e}function jc(n,e){return n?Ke(n)&&Ke(e)?[...new Set([...n,...e])]:qt(Object.create(null),Jc(n),Jc(e??{})):e}function Jp(n,e){if(!n)return e;if(!e)return n;const t=qt(Object.create(null),n);for(const i in e)t[i]=Kt(n[i],e[i]);return t}function _f(){return{app:null,config:{isNativeTag:Dd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $p=0;function Qp(n,e){return function(i,s=null){Qe(i)||(i=qt({},i)),s!=null&&!gt(s)&&(s=null);const r=_f(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:$p++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Dm,get config(){return r.config},set config(u){},use(u,...f){return a.has(u)||(u&&Qe(u.install)?(a.add(u),u.install(c,...f)):Qe(u)&&(a.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||oi(i,s);return h.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(h,u,d),l=!0,c._container=u,u.__vue_app__=c,Va(h.component)}},onUnmount(u){o.push(u)},unmount(){l&&(wn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=bs;bs=c;try{return u()}finally{bs=f}}};return c}}let bs=null;const jp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${yn(e)}Modifiers`]||n[`${Zi(e)}Modifiers`];function em(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||St;let s=t;const r=e.startsWith("update:"),a=r&&jp(i,e.slice(7));a&&(a.trim&&(s=t.map(u=>Rt(u)?u.trim():u)),a.number&&(s=t.map(Ql)));let o,l=i[o=Ya(e)]||i[o=Ya(yn(e))];!l&&r&&(l=i[o=Ya(Zi(e))]),l&&wn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,wn(c,n,6,s)}}const tm=new WeakMap;function vf(n,e,t=!1){const i=t?tm:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Qe(n)){const l=c=>{const u=vf(c,e,!0);u&&(o=!0,qt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(gt(n)&&i.set(n,null),null):(Ke(r)?r.forEach(l=>a[l]=null):qt(a,r),gt(n)&&i.set(n,a),a)}function Ba(n,e){return!n||!Pa(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),ft(n,e[0].toLowerCase()+e.slice(1))||ft(n,Zi(e))||ft(n,e))}function eu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:_,inheritAttrs:b}=n,m=ha(n);let p,y;try{if(t.shapeFlag&4){const x=s||i,T=x;p=Fn(c.call(T,x,u,f,h,d,_)),y=o}else{const x=e;p=Fn(x.length>1?x(f,{attrs:o,slots:a,emit:l}):x(f,null)),y=e.props?o:nm(o)}}catch(x){Wi.length=0,Na(x,n,1),p=oi(pi)}let P=p;if(y&&b!==!1){const x=Object.keys(y),{shapeFlag:T}=P;x.length&&T&7&&(r&&x.some(Da)&&(y=im(y,r)),P=As(P,y,!1,!0))}if(t.dirs&&(P=As(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(t.dirs):t.dirs),t.transition){const x=Fa(P.type)&&df(P)||P;lc(x,t.transition)}return p=P,ha(m),p}const nm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Pa(t))&&((e||(e={}))[t]=n[t]);return e},im=(n,e)=>{const t={};for(const i in n)(!Da(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function sm(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?tu(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(xf(a,i,d)&&!Ba(c,d))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?tu(i,a,c):!0:!!a;return!1}function tu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(xf(e,n,r)&&!Ba(t,r))return!0}return!1}function xf(n,e,t){const i=n[t],s=e[t];return t==="style"&&gt(i)&&gt(s)?!jl(i,s):i!==s}function rm({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Sf={},Mf=()=>Object.create(Sf),bf=n=>Object.getPrototypeOf(n)===Sf;function am(n,e,t,i=!1){const s={},r=Mf();n.propsDefaults=Object.create(null),yf(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:hp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function om(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=mt(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Ba(n.emitsOptions,d))continue;const h=e[d];if(l)if(ft(r,d))h!==r[d]&&(r[d]=h,c=!0);else{const _=yn(d);s[_]=el(l,o,_,h,n,!1)}else h!==r[d]&&(r[d]=h,c=!0)}}}else{yf(n,e,s,r)&&(c=!0);let u;for(const f in o)(!e||!ft(e,f)&&((u=Zi(f))===f||!ft(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=el(l,o,f,void 0,n,!0)):delete s[f]);if(r!==o)for(const f in r)(!e||!ft(e,f))&&(delete r[f],c=!0)}c&&ii(n.attrs,"set","")}function yf(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Js(l))continue;const c=e[l];let u;s&&ft(s,u=yn(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:Ba(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=mt(t),c=o||St;for(let u=0;u<r.length;u++){const f=r[u];t[f]=el(s,l,f,c[f],n,!ft(c,f))}}return a}function el(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=ft(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Qe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=_r(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===Zi(t))&&(i=!0))}return i}const lm=new WeakMap;function Ef(n,e,t=!1){const i=t?lm:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Qe(n)){const u=f=>{l=!0;const[d,h]=Ef(f,e,!0);qt(a,d),h&&o.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return gt(n)&&i.set(n,xs),xs;if(Ke(r))for(let u=0;u<r.length;u++){const f=yn(r[u]);nu(f)&&(a[f]=St)}else if(r)for(const u in r){const f=yn(u);if(nu(f)){const d=r[u],h=a[f]=Ke(d)||Qe(d)?{type:d}:qt({},d),_=h.type;let b=!1,m=!0;if(Ke(_))for(let p=0;p<_.length;++p){const y=_[p],P=Qe(y)&&y.name;if(P==="Boolean"){b=!0;break}else P==="String"&&(m=!1)}else b=Qe(_)&&_.name==="Boolean";h[0]=b,h[1]=m,(b||ft(h,"default"))&&o.push(f)}}const c=[a,o];return gt(n)&&i.set(n,c),c}function nu(n){return n[0]!=="$"&&!Js(n)}const uc=n=>n==="_"||n==="_ctx"||n==="$stable",dc=n=>Ke(n)?n.map(Fn):[Fn(n)],cm=(n,e,t)=>{if(e._n)return e;const i=Tp((...s)=>dc(e(...s)),t);return i._c=!1,i},Tf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(uc(s))continue;const r=n[s];if(Qe(r))e[s]=cm(s,r,i);else if(r!=null){const a=dc(r);e[s]=()=>a}}},Af=(n,e)=>{const t=dc(e);n.slots.default=()=>t},wf=(n,e,t)=>{for(const i in e)(t||!uc(i))&&(n[i]=e[i])},um=(n,e,t)=>{const i=n.slots=Mf();if(n.vnode.shapeFlag&32){const s=e._;s?(wf(i,e,t),t&&Od(i,"_",s,!0)):Tf(e,i)}else e&&Af(n,e)},dm=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=St;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:wf(s,e,t):(r=!e.$stable,Tf(e,s)),a=e}else e&&(Af(n,e),a={default:1});if(r)for(const o in s)!uc(o)&&a[o]==null&&delete s[o]},nn=gm;function fm(n){return hm(n)}function hm(n,e){const t=Ia();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=zn,insertStaticContent:_}=n,b=(R,I,W,se=null,re=null,j=null,de=void 0,fe=null,he=!!I.dynamicChildren)=>{if(R===I)return;R&&!Is(R,I)&&(se=te(R),_e(R,re,j,!0),R=null),I.patchFlag===-2&&(he=!1,I.dynamicChildren=null);const{type:ae,ref:Re,shapeFlag:C}=I;switch(ae){case Ha:m(R,I,W,se);break;case pi:p(R,I,W,se);break;case no:R==null&&y(I,W,se,de);break;case xt:G(R,I,W,se,re,j,de,fe,he);break;default:C&1?T(R,I,W,se,re,j,de,fe,he):C&6?K(R,I,W,se,re,j,de,fe,he):(C&64||C&128)&&ae.process(R,I,W,se,re,j,de,fe,he,ke)}Re!=null&&re?js(Re,R&&R.ref,j,I||R,!I):Re==null&&R&&R.ref!=null&&js(R.ref,null,j,R,!0)},m=(R,I,W,se)=>{if(R==null)i(I.el=o(I.children),W,se);else{const re=I.el=R.el;I.children!==R.children&&c(re,I.children)}},p=(R,I,W,se)=>{R==null?i(I.el=l(I.children||""),W,se):I.el=R.el},y=(R,I,W,se)=>{[R.el,R.anchor]=_(R.children,I,W,se,R.el,R.anchor)},P=({el:R,anchor:I},W,se)=>{let re;for(;R&&R!==I;)re=d(R),i(R,W,se),R=re;i(I,W,se)},x=({el:R,anchor:I})=>{let W;for(;R&&R!==I;)W=d(R),s(R),R=W;s(I)},T=(R,I,W,se,re,j,de,fe,he)=>{if(I.type==="svg"?de="svg":I.type==="math"&&(de="mathml"),R==null)A(I,W,se,re,j,de,fe,he);else{const ae=R.el&&R.el._isVueCE?R.el:null;try{ae&&ae._beginPatch(),w(R,I,re,j,de,fe,he)}finally{ae&&ae._endPatch()}}},A=(R,I,W,se,re,j,de,fe)=>{let he,ae;const{props:Re,shapeFlag:C,transition:Le,dirs:be}=R;if(he=R.el=a(R.type,j,Re&&Re.is,Re),C&8?u(he,R.children):C&16&&v(R.children,he,null,se,re,to(R,j),de,fe),be&&Pi(R,null,se,"created"),D(he,R,R.scopeId,de,se),Re){for(const g in Re)g!=="value"&&!Js(g)&&r(he,g,null,Re[g],j,se);"value"in Re&&r(he,"value",null,Re.value,j),(ae=Re.onVnodeBeforeMount)&&Pn(ae,se,R)}be&&Pi(R,null,se,"beforeMount");const E=pm(re,Le);E&&Le.beforeEnter(he),i(he,I,W),((ae=Re&&Re.onVnodeMounted)||E||be)&&nn(()=>{try{ae&&Pn(ae,se,R),E&&Le.enter(he),be&&Pi(R,null,se,"mounted")}finally{}},re)},D=(R,I,W,se,re)=>{if(W&&h(R,W),se)for(let j=0;j<se.length;j++)h(R,se[j]);if(re){let j=re.subTree;if(I===j||Df(j.type)&&(j.ssContent===I||j.ssFallback===I)){const de=re.vnode;D(R,de,de.scopeId,de.slotScopeIds,re.parent)}}},v=(R,I,W,se,re,j,de,fe,he=0)=>{for(let ae=he;ae<R.length;ae++){const Re=R[ae]=fe?ti(R[ae]):Fn(R[ae]);b(null,Re,I,W,se,re,j,de,fe)}},w=(R,I,W,se,re,j,de)=>{const fe=I.el=R.el;let{patchFlag:he,dynamicChildren:ae,dirs:Re}=I;he|=R.patchFlag&16;const C=R.props||St,Le=I.props||St;let be;if(W&&Di(W,!1),(be=Le.onVnodeBeforeUpdate)&&Pn(be,W,I,R),Re&&Pi(I,R,W,"beforeUpdate"),W&&Di(W,!0),ae&&(!R.dynamicChildren||R.dynamicChildren.length!==ae.length)&&(he=0,de=!1,ae=null),(C.innerHTML&&Le.innerHTML==null||C.textContent&&Le.textContent==null)&&u(fe,""),ae?L(R.dynamicChildren,ae,fe,W,se,to(I,re),j):de||ie(R,I,fe,null,W,se,to(I,re),j,!1),he>0){if(he&16)O(fe,C,Le,W,re);else if(he&2&&C.class!==Le.class&&r(fe,"class",null,Le.class,re),he&4&&r(fe,"style",C.style,Le.style,re),he&8){const E=I.dynamicProps;for(let g=0;g<E.length;g++){const U=E[g],k=C[U],Z=Le[U];(Z!==k||U==="value")&&r(fe,U,k,Z,re,W)}}he&1&&R.children!==I.children&&u(fe,I.children)}else!de&&ae==null&&O(fe,C,Le,W,re);((be=Le.onVnodeUpdated)||Re)&&nn(()=>{be&&Pn(be,W,I,R),Re&&Pi(I,R,W,"updated")},se)},L=(R,I,W,se,re,j,de)=>{for(let fe=0;fe<I.length;fe++){const he=R[fe],ae=I[fe],Re=he.el&&(he.type===xt||!Is(he,ae)||he.shapeFlag&198)?f(he.el):W;b(he,ae,Re,null,se,re,j,de,!0)}},O=(R,I,W,se,re)=>{if(I!==W){if(I!==St)for(const j in I)!Js(j)&&!(j in W)&&r(R,j,I[j],null,re,se);for(const j in W){if(Js(j))continue;const de=W[j],fe=I[j];de!==fe&&j!=="value"&&r(R,j,fe,de,re,se)}"value"in W&&r(R,"value",I.value,W.value,re)}},G=(R,I,W,se,re,j,de,fe,he)=>{const ae=I.el=R?R.el:o(""),Re=I.anchor=R?R.anchor:o("");let{patchFlag:C,dynamicChildren:Le,slotScopeIds:be}=I;be&&(fe=fe?fe.concat(be):be),R==null?(i(ae,W,se),i(Re,W,se),v(I.children||[],W,Re,re,j,de,fe,he)):C>0&&C&64&&Le&&R.dynamicChildren&&R.dynamicChildren.length===Le.length?(L(R.dynamicChildren,Le,W,re,j,de,fe),(I.key!=null||re&&I===re.subTree)&&Rf(R,I,!0)):ie(R,I,W,Re,re,j,de,fe,he)},K=(R,I,W,se,re,j,de,fe,he)=>{I.slotScopeIds=fe,R==null?I.shapeFlag&512?re.ctx.activate(I,W,se,de,he):V(I,W,se,re,j,de,he):X(R,I,he)},V=(R,I,W,se,re,j,de)=>{const fe=R.component=ym(R,se,re);if(cc(R)&&(fe.ctx.renderer=ke),Tm(fe,!1,de),fe.asyncDep){if(re&&re.registerDep(fe,ee,de),!R.el){const he=fe.subTree=oi(pi);p(null,he,I,W),R.placeholder=he.el}}else ee(fe,R,I,W,re,j,de)},X=(R,I,W)=>{const se=I.component=R.component;if(sm(R,I,W))if(se.asyncDep&&!se.asyncResolved){z(se,I,W);return}else se.next=I,se.update();else I.el=R.el,se.vnode=I},ee=(R,I,W,se,re,j,de)=>{const fe=()=>{if(R.isMounted){let{next:C,bu:Le,u:be,parent:E,vnode:g}=R;{const ge=Cf(R);if(ge){C&&(C.el=g.el,z(R,C,de)),ge.asyncDep.then(()=>{nn(()=>{R.isUnmounted||ae()},re)});return}}let U=C,k;Di(R,!1),C?(C.el=g.el,z(R,C,de)):C=g,Le&&na(Le),(k=C.props&&C.props.onVnodeBeforeUpdate)&&Pn(k,E,C,g),Di(R,!0);const Z=eu(R),pe=R.subTree;R.subTree=Z,b(pe,Z,f(pe.el),te(pe),R,re,j),C.el=Z.el,U===null&&rm(R,Z.el),be&&nn(be,re),(k=C.props&&C.props.onVnodeUpdated)&&nn(()=>Pn(k,E,C,g),re)}else{let C;const{el:Le,props:be}=I,{bm:E,m:g,parent:U,root:k,type:Z}=R,pe=er(I);Di(R,!1),E&&na(E),!pe&&(C=be&&be.onVnodeBeforeMount)&&Pn(C,U,I),Di(R,!0);{k.ce&&k.ce._hasShadowRoot()&&k.ce._injectChildStyle(Z,R.parent?R.parent.type:void 0);const ge=R.subTree=eu(R);b(null,ge,W,se,R,re,j),I.el=ge.el}if(g&&nn(g,re),!pe&&(C=be&&be.onVnodeMounted)){const ge=I;nn(()=>Pn(C,U,ge),re)}(I.shapeFlag&256||U&&er(U.vnode)&&U.vnode.shapeFlag&256)&&R.a&&nn(R.a,re),R.isMounted=!0,I=W=se=null}};R.scope.on();const he=R.effect=new zd(fe);R.scope.off();const ae=R.update=he.run.bind(he),Re=R.job=he.runIfDirty.bind(he);Re.i=R,Re.id=R.uid,he.scheduler=()=>oc(Re),Di(R,!0),ae()},z=(R,I,W)=>{I.component=R;const se=R.vnode.props;R.vnode=I,R.next=null,om(R,I.props,se,W),dm(R,I.children,W),di(),Yc(R),fi()},ie=(R,I,W,se,re,j,de,fe,he=!1)=>{const ae=R&&R.children,Re=R?R.shapeFlag:0,C=I.children,{patchFlag:Le,shapeFlag:be}=I;if(Le>0){if(Le&128){N(ae,C,W,se,re,j,de,fe,he);return}else if(Le&256){Q(ae,C,W,se,re,j,de,fe,he);return}}be&8?(Re&16&&Ye(ae,re,j),C!==ae&&u(W,C)):Re&16?be&16?N(ae,C,W,se,re,j,de,fe,he):Ye(ae,re,j,!0):(Re&8&&u(W,""),be&16&&v(C,W,se,re,j,de,fe,he))},Q=(R,I,W,se,re,j,de,fe,he)=>{R=R||xs,I=I||xs;const ae=R.length,Re=I.length,C=Math.min(ae,Re);let Le;for(Le=0;Le<C;Le++){const be=I[Le]=he?ti(I[Le]):Fn(I[Le]);b(R[Le],be,W,null,re,j,de,fe,he)}ae>Re?Ye(R,re,j,!0,!1,C):v(I,W,se,re,j,de,fe,he,C)},N=(R,I,W,se,re,j,de,fe,he)=>{let ae=0;const Re=I.length;let C=R.length-1,Le=Re-1;for(;ae<=C&&ae<=Le;){const be=R[ae],E=I[ae]=he?ti(I[ae]):Fn(I[ae]);if(Is(be,E))b(be,E,W,null,re,j,de,fe,he);else break;ae++}for(;ae<=C&&ae<=Le;){const be=R[C],E=I[Le]=he?ti(I[Le]):Fn(I[Le]);if(Is(be,E))b(be,E,W,null,re,j,de,fe,he);else break;C--,Le--}if(ae>C){if(ae<=Le){const be=Le+1,E=be<Re?I[be].el:se;for(;ae<=Le;)b(null,I[ae]=he?ti(I[ae]):Fn(I[ae]),W,E,re,j,de,fe,he),ae++}}else if(ae>Le)for(;ae<=C;)_e(R[ae],re,j,!0),ae++;else{const be=ae,E=ae,g=new Map;for(ae=E;ae<=Le;ae++){const me=I[ae]=he?ti(I[ae]):Fn(I[ae]);me.key!=null&&g.set(me.key,ae)}let U,k=0;const Z=Le-E+1;let pe=!1,ge=0;const ne=new Array(Z);for(ae=0;ae<Z;ae++)ne[ae]=0;for(ae=be;ae<=C;ae++){const me=R[ae];if(k>=Z){_e(me,re,j,!0);continue}let Ie;if(me.key!=null)Ie=g.get(me.key);else for(U=E;U<=Le;U++)if(ne[U-E]===0&&Is(me,I[U])){Ie=U;break}Ie===void 0?_e(me,re,j,!0):(ne[Ie-E]=ae+1,Ie>=ge?ge=Ie:pe=!0,b(me,I[Ie],W,null,re,j,de,fe,he),k++)}const oe=pe?mm(ne):xs;for(U=oe.length-1,ae=Z-1;ae>=0;ae--){const me=E+ae,Ie=I[me],xe=I[me+1],ve=me+1<Re?xe.el||Pf(xe):se;ne[ae]===0?b(null,Ie,W,ve,re,j,de,fe,he):pe&&(U<0||ae!==oe[U]?$(Ie,W,ve,2):U--)}}},$=(R,I,W,se,re=null)=>{const{el:j,type:de,transition:fe,children:he,shapeFlag:ae}=R;if(ae&6){$(R.component.subTree,I,W,se);return}if(ae&128){R.suspense.move(I,W,se);return}if(ae&64){de.move(R,I,W,ke);return}if(de===xt){i(j,I,W);for(let C=0;C<he.length;C++)$(he[C],I,W,se);i(R.anchor,I,W);return}if(de===no){P(R,I,W);return}if(se!==2&&ae&1&&fe)if(se===0)fe.persisted&&!j[ja]?i(j,I,W):(fe.beforeEnter(j),i(j,I,W),nn(()=>fe.enter(j),re));else{const{leave:C,delayLeave:Le,afterLeave:be}=fe,E=()=>{R.ctx.isUnmounted?s(j):i(j,I,W)},g=()=>{const U=j._isLeaving||!!j[ja];j._isLeaving&&j[ja](!0),fe.persisted&&!U?E():C(j,()=>{E(),be&&be()})};Le?Le(j,E,g):g()}else i(j,I,W)},_e=(R,I,W,se=!1,re=!1)=>{const{type:j,props:de,ref:fe,children:he,dynamicChildren:ae,shapeFlag:Re,patchFlag:C,dirs:Le,cacheIndex:be,memo:E}=R;if(C===-2&&(re=!1),fe!=null&&(di(),js(fe,null,W,R,!0),fi()),be!=null&&(I.renderCache[be]=void 0),Re&256){I.ctx.deactivate(R);return}const g=Re&1&&Le,U=!er(R);let k;if(U&&(k=de&&de.onVnodeBeforeUnmount)&&Pn(k,I,R),Re&6)Je(R.component,W,se);else{if(Re&128){R.suspense.unmount(W,se);return}g&&Pi(R,null,I,"beforeUnmount"),Re&64?R.type.remove(R,I,W,ke,se):ae&&!ae.hasOnce&&(j!==xt||C>0&&C&64)?Ye(ae,I,W,!1,!0):(j===xt&&C&384||!re&&Re&16)&&Ye(he,I,W),se&&Ee(R)}const Z=E!=null&&be==null;(U&&(k=de&&de.onVnodeUnmounted)||g||Z)&&nn(()=>{k&&Pn(k,I,R),g&&Pi(R,null,I,"unmounted"),Z&&(R.el=null)},W)},Ee=R=>{const{type:I,el:W,anchor:se,transition:re}=R;if(I===xt){je(W,se);return}if(I===no){x(R);return}const j=()=>{s(W),re&&!re.persisted&&re.afterLeave&&re.afterLeave()};if(R.shapeFlag&1&&re&&!re.persisted){const{leave:de,delayLeave:fe}=re,he=()=>de(W,j);fe?fe(R.el,j,he):he()}else j()},je=(R,I)=>{let W;for(;R!==I;)W=d(R),s(R),R=W;s(I)},Je=(R,I,W)=>{const{bum:se,scope:re,job:j,subTree:de,um:fe,m:he,a:ae}=R;iu(he),iu(ae),se&&na(se),re.stop(),j&&(j.flags|=8,_e(de,R,I,W)),fe&&nn(fe,I),nn(()=>{R.isUnmounted=!0},I)},Ye=(R,I,W,se=!1,re=!1,j=0)=>{for(let de=j;de<R.length;de++)_e(R[de],I,W,se,re)},te=R=>{if(R.shapeFlag&6)return te(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const I=d(R.anchor||R.el),W=I&&I[Pp];return W?d(W):I};let ce=!1;const Pe=(R,I,W)=>{let se;R==null?I._vnode&&(_e(I._vnode,null,null,!0),se=I._vnode.component):b(I._vnode||null,R,I,null,null,null,W),I._vnode=R,ce||(ce=!0,Yc(se),af(),ce=!1)},ke={p:b,um:_e,m:$,r:Ee,mt:V,mc:v,pc:ie,pbc:L,n:te,o:n};return{render:Pe,hydrate:void 0,createApp:Qp(Pe)}}function to({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Di({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function pm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Rf(n,e,t=!1){const i=n.children,s=e.children;if(Ke(i)&&Ke(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=ti(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&Rf(a,o)),o.type===Ha&&(o.patchFlag===-1&&(o=s[r]=ti(o)),o.el=a.el),o.type===pi&&!o.el&&(o.el=a.el)}}function mm(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function Cf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Cf(e)}function iu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Pf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Pf(e.subTree):null}const Df=n=>n.__isSuspense;function gm(n,e){e&&e.pendingBranch?Ke(n)?e.effects.push(...n):e.effects.push(n):Ep(n)}const xt=Symbol.for("v-fgt"),Ha=Symbol.for("v-txt"),pi=Symbol.for("v-cmt"),no=Symbol.for("v-stc"),Wi=[];let ln=null;function Xe(n=!1){Wi.push(ln=n?null:[])}function Lf(){Wi.pop(),ln=Wi[Wi.length-1]||null}let lr=1;function su(n,e=!1){lr+=n,n<0&&ln&&e&&(ln.hasOnce=!0)}function If(n){return n.dynamicChildren=lr>0?ln||xs:null,Lf(),lr>0&&ln&&ln.push(n),n}function qe(n,e,t,i,s,r){return If(S(n,e,t,i,s,r,!0))}function _m(n,e,t,i,s){return If(oi(n,e,t,i,s,!0))}function Uf(n){return n?n.__v_isVNode===!0:!1}function Is(n,e){return n.type===e.type&&n.key===e.key}const Nf=({key:n})=>n??null,sa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Rt(n)||Qt(n)||Qe(n)?{i:gn,r:n,k:e,f:!!t}:n:null);function S(n,e=null,t=null,i=0,s=null,r=n===xt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Nf(e),ref:e&&sa(e),scopeId:lf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:gn};return o?(ga(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Rt(t)?8:16),lr>0&&!a&&ln&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ln.push(l),l}const oi=vm;function vm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Wp)&&(n=pi),Uf(n)){const o=As(n,e,!0);return t&&ga(o,t),lr>0&&!r&&ln&&(o.shapeFlag&6?ln[ln.indexOf(n)]=o:ln.push(o)),o.patchFlag=-2,o}if(Cm(n)&&(n=n.__vccOpts),e){e=xm(e);let{class:o,style:l}=e;o&&!Rt(o)&&(e.class=Dt(o)),gt(l)&&(ac(l)&&!Ke(l)&&(l=qt({},l)),e.style=Gt(l))}const a=Rt(n)?1:Df(n)?128:Fa(n)?64:gt(n)?4:Qe(n)?2:0;return S(n,e,t,i,s,a,r,!0)}function xm(n){return n?ac(n)||bf(n)?qt({},n):n:null}function As(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?Sm(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Nf(c),ref:e&&e.ref?t&&r?Ke(r)?r.concat(sa(e)):[r,sa(e)]:sa(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==xt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&As(n.ssContent),ssFallback:n.ssFallback&&As(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&lc(u,l.clone(u)),u}function dt(n=" ",e=0){return oi(Ha,null,n,e)}function dn(n="",e=!1){return e?(Xe(),_m(pi,null,n)):oi(pi,null,n)}function Fn(n){return n==null||typeof n=="boolean"?oi(pi):Ke(n)?oi(xt,null,n.slice()):Uf(n)?ti(n):oi(Ha,null,String(n))}function ti(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:As(n)}function ga(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ke(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ga(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!bf(e)?e._ctx=gn:s===3&&gn&&(gn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(Qe(e)){if(i&65){ga(n,{default:e});return}e={default:e,_ctx:gn},t=32}else e=String(e),i&64?(t=16,e=[dt(e)]):t=8;n.children=e,n.shapeFlag|=t}function Sm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Dt([e.class,i.class]));else if(s==="style")e.style=Gt([e.style,i.style]);else if(Pa(s)){const r=e[s],a=i[s];a&&r!==a&&!(Ke(r)&&r.includes(a))?e[s]=r?[].concat(r,a):a:a==null&&r==null&&!Da(s)&&(e[s]=a)}else s!==""&&(e[s]=i[s])}return e}function Pn(n,e,t,i=null){wn(n,e,7,[t,i])}const Mm=_f();let bm=0;function ym(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Mm,r={uid:bm++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Kh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ef(i,s),emitsOptions:vf(i,s),emit:null,emitted:null,propsDefaults:St,inheritAttrs:i.inheritAttrs,ctx:St,data:St,props:St,attrs:St,slots:St,refs:St,setupState:St,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=em.bind(null,r),n.ce&&n.ce(r),r}let $t=null;const Em=()=>$t||gn;let _a,cr;{const n=Ia(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};_a=e("__VUE_INSTANCE_SETTERS__",t=>$t=t),cr=e("__VUE_SSR_SETTERS__",t=>ur=t)}const _r=n=>{const e=$t;return _a(n),n.scope.on(),()=>{n.scope.off(),_a(e)}},ru=()=>{$t&&$t.scope.off(),_a(null)};function Ff(n){return n.vnode.shapeFlag&4}let ur=!1;function Tm(n,e=!1,t=!1){e&&cr(e);const{props:i,children:s}=n.vnode,r=Ff(n);am(n,i,r,e),um(n,s,t||e);const a=r?Am(n,e):void 0;return e&&cr(!1),a}function Am(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Xp);const{setup:i}=t;if(i){di();const s=n.setupContext=i.length>1?Rm(n):null,r=_r(n),a=gr(i,n,0,[n.props,s]),o=Id(a);if(fi(),r(),(o||n.sp)&&!er(n)&&ff(n),o){if(a.then(ru,ru),e)return a.then(l=>{cr(!0);try{au(n,l,e)}finally{cr(!1)}}).catch(l=>{Na(l,n,0)});n.asyncDep=a}else au(n,a)}else Of(n)}function au(n,e,t){Qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:gt(e)&&(n.setupState=nf(e)),Of(n)}function Of(n,e,t){const i=n.type;n.render||(n.render=i.render||zn);{const s=_r(n);di();try{qp(n)}finally{fi(),s()}}}const wm={get(n,e){return Wt(n,"get",""),n[e]}};function Rm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,wm),slots:n.slots,emit:n.emit,expose:e}}function Va(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(nf(pp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in tr)return tr[t](n)},has(e,t){return t in e||t in tr}})):n.proxy}function Cm(n){return Qe(n)&&"__vccOpts"in n}const Pm=(n,e)=>vp(n,e,ur),Dm="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tl;const ou=typeof window<"u"&&window.trustedTypes;if(ou)try{tl=ou.createPolicy("vue",{createHTML:n=>n})}catch{}const Bf=tl?n=>tl.createHTML(n):n=>n,Lm="http://www.w3.org/2000/svg",Im="http://www.w3.org/1998/Math/MathML",jn=typeof document<"u"?document:null,lu=jn&&jn.createElement("template"),Um={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?jn.createElementNS(Lm,n):e==="mathml"?jn.createElementNS(Im,n):t?jn.createElement(n,{is:t}):jn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>jn.createTextNode(n),createComment:n=>jn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>jn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{lu.innerHTML=Bf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=lu.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Nm=Symbol("_vtc");function Fm(n,e,t){const i=n[Nm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const va=Symbol("_vod"),Hf=Symbol("_vsh"),Om={name:"show",beforeMount(n,{value:e},{transition:t}){n[va]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Us(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Us(n,!0),i.enter(n)):i.leave(n,()=>{Us(n,!1)}):Us(n,e))},beforeUnmount(n,{value:e}){Us(n,e)}};function Us(n,e){n.style.display=e?n[va]:"none",n[Hf]=!e}const Bm=Symbol(""),Hm=/(?:^|;)\s*display\s*:/;function Vm(n,e,t){const i=n.style,s=Rt(t);let r=!1;if(t&&!s){if(e)if(Rt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Xs(i,o,"")}else for(const a in e)t[a]==null&&Xs(i,a,"");for(const a in t){a==="display"&&(r=!0);const o=t[a];o!=null?km(n,a,!Rt(e)&&e?e[a]:void 0,o)||Xs(i,a,o):Xs(i,a,"")}}else if(s){if(e!==t){const a=i[Bm];a&&(t+=";"+a),i.cssText=t,r=Hm.test(t)}}else e&&n.removeAttribute("style");va in n&&(n[va]=r?i.display:"",n[Hf]&&(i.display="none"))}const cu=/\s*!important$/;function Xs(n,e,t){if(Ke(t))t.forEach(i=>Xs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=zm(n,e);cu.test(t)?n.setProperty(Zi(i),t.replace(cu,""),"important"):n[i]=t}}const uu=["Webkit","Moz","ms"],io={};function zm(n,e){const t=io[e];if(t)return t;let i=yn(e);if(i!=="filter"&&i in n)return io[e]=i;i=Fd(i);for(let s=0;s<uu.length;s++){const r=uu[s]+i;if(r in n)return io[e]=r}return e}function km(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Rt(i)&&t===i}const du="http://www.w3.org/1999/xlink";function fu(n,e,t,i,s,r=qh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(du,e.slice(6,e.length)):n.setAttributeNS(du,e,t):t==null||r&&!Bd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Gn(t)?String(t):t)}function hu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Bf(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Bd(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function ps(n,e,t,i){n.addEventListener(e,t,i)}function Gm(n,e,t,i){n.removeEventListener(e,t,i)}const pu=Symbol("_vei");function Wm(n,e,t,i,s=null){const r=n[pu]||(n[pu]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=Ym(e);if(i){const c=r[e]=Jm(i,s);ps(n,o,c,l)}else a&&(Gm(n,o,a,l),r[e]=void 0)}}const Xm=/(Once|Passive|Capture)$/,qm=/^on:?(?:Once|Passive|Capture)$/;function Ym(n){let e,t;for(;(t=n.match(Xm))&&!qm.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Zi(n.slice(2)),e]}let so=0;const Km=Promise.resolve(),Zm=()=>so||(Km.then(()=>so=0),so=Date.now());function Jm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(Ke(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const a=s.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&wn(c,e,5,o)}}else wn(s,e,5,[i])};return t.value=n,t.attached=Zm(),t}const mu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,$m=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?Fm(n,i,a):e==="style"?Vm(n,t,i):Pa(e)?Da(e)||Wm(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qm(n,e,i,a))?(hu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&fu(n,e,i,a,r,e!=="value")):n._isVueCE&&(jm(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Rt(i)))?hu(n,yn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),fu(n,e,i,a))};function Qm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&mu(e)&&Qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return mu(e)&&Rt(t)?!1:e in n}function jm(n,e){const t=n._def.props;if(!t)return!1;const i=yn(e);return Array.isArray(t)?t.some(s=>yn(s)===i):Object.keys(t).some(s=>yn(s)===i)}const gu=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ke(e)?t=>na(e,t):e};function eg(n){n.target.composing=!0}function _u(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const wr=Symbol("_assign"),Rr=Symbol("_initialValue");function ro(n,e,t){return e&&(n=n.trim()),t&&(n=Ql(n)),n}const yt={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n.parentNode&&(n.type==="text"?n[Rr]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Rr]=n.defaultValue.replace(/\r\n?/g,`
`))),n[wr]=gu(s);const r=i||s.props&&s.props.type==="number";ps(n,e?"change":"input",a=>{a.target.composing||n[wr](ro(n.value,t,r))}),(t||r)&&ps(n,"change",()=>{n.value=ro(n.value,t,r)}),e||(ps(n,"compositionstart",eg),ps(n,"compositionend",_u),ps(n,"change",_u))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const s=e??"",r=n[Rr];delete n[Rr],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[wr](ro(n.value,t,i)):n.value=s},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},a){if(n[wr]=gu(a),n.composing)return;const o=(r||n.type==="number")&&!/^0\d/.test(n.value)?Ql(n.value):n.value,l=e??"";if(o===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},tg=["ctrl","shift","alt","meta"],ng={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>tg.some(t=>n[`${t}Key`]&&!e.includes(t))},Li=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let a=0;a<e.length;a++){const o=ng[e[a]];if(o&&o(s,e))return}return n(s,...r)})},ig=qt({patchProp:$m},Um);let vu;function sg(){return vu||(vu=fm(ig))}const rg=(...n)=>{const e=sg().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=og(i);if(!s)return;const r=e._component;!Qe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,ag(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function ag(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function og(n){return Rt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fc="186",lg=0,xu=1,cg=2,ra=1,ug=2,qs=3,Xi=0,sn=1,ri=2,li=0,nr=1,ei=2,Su=3,Mu=4,dg=5,ms=100,fg=101,hg=102,pg=103,mg=104,gg=200,_g=201,vg=202,xg=203,Vf=204,zf=205,Sg=206,Mg=207,bg=208,yg=209,Eg=210,Tg=211,Ag=212,wg=213,Rg=214,nl=0,il=1,sl=2,dr=3,rl=4,al=5,ol=6,ll=7,kf=0,Cg=1,Pg=2,kn=0,Gf=1,Wf=2,Xf=3,qf=4,Yf=5,Kf=6,Zf=7,Jf=300,qi=301,ws=302,ao=303,oo=304,za=306,cl=1e3,ai=1001,ul=1002,Bt=1003,Dg=1004,Cr=1005,Xt=1006,lo=1007,Vi=1008,mn=1009,$f=1010,Qf=1011,fr=1012,hc=1013,Wn=1014,Hn=1015,Xn=1016,pc=1017,mc=1018,hr=1020,jf=35902,eh=35899,th=1021,nh=1022,bn=1023,mi=1026,zi=1027,ih=1028,gc=1029,Yi=1030,_c=1031,vc=1033,aa=33776,oa=33777,la=33778,ca=33779,dl=35840,fl=35841,hl=35842,pl=35843,ml=36196,gl=37492,_l=37496,vl=37488,xl=37489,xa=37490,Sl=37491,Ml=37808,bl=37809,yl=37810,El=37811,Tl=37812,Al=37813,wl=37814,Rl=37815,Cl=37816,Pl=37817,Dl=37818,Ll=37819,Il=37820,Ul=37821,Nl=36492,Fl=36494,Ol=36495,Bl=36283,Hl=36284,Sa=36285,Vl=36286,Lg=3200,bu=0,Ig=1,wi="",hn="srgb",Ma="srgb-linear",ba="linear",ht="srgb",co=7680,Ug=519,Ng=512,Fg=513,Og=514,xc=515,Bg=516,Hg=517,Sc=518,Vg=519,zg=35044,yu="300 es",Vn=2e3,ya=2001;function kg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gg(){const n=Ea("canvas");return n.style.display="block",n}const Eu={};function Tu(...n){const e="THREE."+n.shift();console.log(e,...n)}function sh(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function We(...n){n=sh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ot(...n){n=sh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ys(...n){const e=n.join(" ");e in Eu||(Eu[e]=!0,We(...n))}function Wg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Xg={[nl]:il,[sl]:ol,[rl]:ll,[dr]:al,[il]:nl,[ol]:sl,[ll]:rl,[al]:dr};class Ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uo=Math.PI/180,zl=180/Math.PI;function vr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function qg(n,e){return(n%e+e)%e}function fo(n,e,t){return(1-t)*n+t*e}function Ns(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function tn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Rc=class Rc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rc.prototype.isVector2=!0;let rt=Rc;class Cs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],d=r[a+0],h=r[a+1],_=r[a+2],b=r[a+3];if(f!==b||l!==d||c!==h||u!==_){let m=l*d+c*h+u*_+f*b;m<0&&(d=-d,h=-h,_=-_,b=-b,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),P=Math.sin(y);p=Math.sin(p*y)/P,o=Math.sin(o*y)/P,l=l*p+d*o,c=c*p+h*o,u=u*p+_*o,f=f*p+b*o}else{l=l*p+d*o,c=c*p+h*o,u=u*p+_*o,f=f*p+b*o;const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],d=r[a+1],h=r[a+2],_=r[a+3];return e[t]=o*_+u*f+l*h-c*d,e[t+1]=l*_+u*d+c*f-o*h,e[t+2]=c*_+u*h+o*d-l*f,e[t+3]=u*_-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),d=l(i/2),h=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"YXZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"ZXY":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"ZYX":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"YZX":this._x=d*u*f+c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f-d*h*_;break;case"XZY":this._x=d*u*f-c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f+d*h*_;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(a-s)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(r-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(a-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Cc=class Cc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Au.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Au.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ho.copy(this).projectOnVector(e),this.sub(ho)}reflect(e){return this.sub(ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Cc.prototype.isVector3=!0;let H=Cc;const ho=new H,Au=new Cs,Pc=class Pc{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],_=i[8],b=s[0],m=s[3],p=s[6],y=s[1],P=s[4],x=s[7],T=s[2],A=s[5],D=s[8];return r[0]=a*b+o*y+l*T,r[3]=a*m+o*P+l*A,r[6]=a*p+o*x+l*D,r[1]=c*b+u*y+f*T,r[4]=c*m+u*P+f*A,r[7]=c*p+u*x+f*D,r[2]=d*b+h*y+_*T,r[5]=d*m+h*P+_*A,r[8]=d*p+h*x+_*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*r,h=c*r-a*l,_=t*f+i*d+s*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/_;return e[0]=f*b,e[1]=(s*c-u*i)*b,e[2]=(o*i-s*a)*b,e[3]=d*b,e[4]=(u*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=h*b,e[7]=(i*l-c*t)*b,e[8]=(a*t-i*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(po.makeScale(e,t)),this}rotate(e){return ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(po.makeRotation(-e)),this}translate(e,t){return ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Pc.prototype.isMatrix3=!0;let Ze=Pc;const po=new Ze,wu=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ru=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yg(){const n={enabled:!0,workingColorSpace:Ma,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ht&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(s.r=Es(s.r),s.g=Es(s.g),s.b=Es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wi?ba:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ma]:{primaries:e,whitePoint:i,transfer:ba,toXYZ:wu,fromXYZ:Ru,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:wu,fromXYZ:Ru,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),n}const st=Yg();function ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Es(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let es;class Kg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{es===void 0&&(es=Ea("canvas")),es.width=e.width,es.height=e.height;const s=es.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=es}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ea("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ci(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ci(t[i]/255)*255):t[i]=ci(t[i]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zg=0;class Mc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=vr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(mo(s[a].image)):r.push(mo(s[a]))}else r=mo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function mo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Kg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}let Jg=0;const go=new H;class jt extends Ji{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,i=ai,s=ai,r=Xt,a=Vi,o=bn,l=mn,c=jt.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=vr(),this.name="",this.source=new Mc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(go).x}get height(){return this.source.getSize(go).y}get depth(){return this.source.getSize(go).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cl:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case ul:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cl:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case ul:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Jf;jt.DEFAULT_ANISOTROPY=1;const Dc=class Dc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],_=l[9],b=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-b)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+b)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(c+1)/2,x=(h+1)/2,T=(p+1)/2,A=(u+d)/4,D=(f+b)/4,v=(_+m)/4;return P>x&&P>T?P<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(P),s=A/i,r=D/i):x>T?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=A/s,r=v/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=D/r,s=v/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-_)*(m-_)+(f-b)*(f-b)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(f-b)/y,this.z=(d-u)/y,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Dc.prototype.isVector4=!0;let wt=Dc;class $g extends Ji{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new jt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Mc(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends $g{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class rh extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qg extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ca=class Ca{constructor(e,t,i,s,r,a,o,l,c,u,f,d,h,_,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,f,d,h,_,b,m)}set(e,t,i,s,r,a,o,l,c,u,f,d,h,_,b,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=_,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ca().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ts.setFromMatrixColumn(e,0).length(),r=1/ts.setFromMatrixColumn(e,1).length(),a=1/ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*u,h=a*f,_=o*u,b=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+_*c,t[5]=d-b*c,t[9]=-o*l,t[2]=b-d*c,t[6]=_+h*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,_=c*u,b=c*f;t[0]=d+b*o,t[4]=_*o-h,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-_,t[6]=b+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,_=c*u,b=c*f;t[0]=d-b*o,t[4]=-a*f,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*u,t[9]=b-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,h=a*f,_=o*u,b=o*f;t[0]=l*u,t[4]=_*c-h,t[8]=d*c+b,t[1]=l*f,t[5]=b*c+d,t[9]=h*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*c,_=o*l,b=o*c;t[0]=l*u,t[4]=b-d*f,t[8]=_*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*f+_,t[10]=d-b*f}else if(e.order==="XZY"){const d=a*l,h=a*c,_=o*l,b=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+b,t[5]=a*u,t[9]=h*f-_,t[2]=_*f-h,t[6]=o*u,t[10]=b*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jg,e,e0)}lookAt(e,t,i){const s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),Si.crossVectors(i,an),Si.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Si.crossVectors(i,an)),Si.normalize(),Pr.crossVectors(an,Si),s[0]=Si.x,s[4]=Pr.x,s[8]=an.x,s[1]=Si.y,s[5]=Pr.y,s[9]=an.y,s[2]=Si.z,s[6]=Pr.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],_=i[2],b=i[6],m=i[10],p=i[14],y=i[3],P=i[7],x=i[11],T=i[15],A=s[0],D=s[4],v=s[8],w=s[12],L=s[1],O=s[5],G=s[9],K=s[13],V=s[2],X=s[6],ee=s[10],z=s[14],ie=s[3],Q=s[7],N=s[11],$=s[15];return r[0]=a*A+o*L+l*V+c*ie,r[4]=a*D+o*O+l*X+c*Q,r[8]=a*v+o*G+l*ee+c*N,r[12]=a*w+o*K+l*z+c*$,r[1]=u*A+f*L+d*V+h*ie,r[5]=u*D+f*O+d*X+h*Q,r[9]=u*v+f*G+d*ee+h*N,r[13]=u*w+f*K+d*z+h*$,r[2]=_*A+b*L+m*V+p*ie,r[6]=_*D+b*O+m*X+p*Q,r[10]=_*v+b*G+m*ee+p*N,r[14]=_*w+b*K+m*z+p*$,r[3]=y*A+P*L+x*V+T*ie,r[7]=y*D+P*O+x*X+T*Q,r[11]=y*v+P*G+x*ee+T*N,r[15]=y*w+P*K+x*z+T*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],_=e[3],b=e[7],m=e[11],p=e[15],y=l*h-c*d,P=o*h-c*f,x=o*d-l*f,T=a*h-c*u,A=a*d-l*u,D=a*f-o*u;return t*(b*y-m*P+p*x)-i*(_*y-m*T+p*A)+s*(_*P-b*T+p*D)-r*(_*x-b*A+m*D)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],_=e[12],b=e[13],m=e[14],p=e[15],y=t*o-i*a,P=t*l-s*a,x=t*c-r*a,T=i*l-s*o,A=i*c-r*o,D=s*c-r*l,v=u*b-f*_,w=u*m-d*_,L=u*p-h*_,O=f*m-d*b,G=f*p-h*b,K=d*p-h*m,V=y*K-P*G+x*O+T*L-A*w+D*v;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/V;return e[0]=(o*K-l*G+c*O)*X,e[1]=(s*G-i*K-r*O)*X,e[2]=(b*D-m*A+p*T)*X,e[3]=(d*A-f*D-h*T)*X,e[4]=(l*L-a*K-c*w)*X,e[5]=(t*K-s*L+r*w)*X,e[6]=(m*x-_*D-p*P)*X,e[7]=(u*D-d*x+h*P)*X,e[8]=(a*G-o*L+c*v)*X,e[9]=(i*L-t*G-r*v)*X,e[10]=(_*A-b*x+p*y)*X,e[11]=(f*x-u*A-h*y)*X,e[12]=(o*w-a*O-l*v)*X,e[13]=(t*O-i*w+s*v)*X,e[14]=(b*P-_*T-m*y)*X,e[15]=(u*T-f*P+d*y)*X,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,d=r*c,h=r*u,_=r*f,b=a*u,m=a*f,p=o*f,y=l*c,P=l*u,x=l*f,T=i.x,A=i.y,D=i.z;return s[0]=(1-(b+p))*T,s[1]=(h+x)*T,s[2]=(_-P)*T,s[3]=0,s[4]=(h-x)*A,s[5]=(1-(d+p))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(_+P)*D,s[9]=(m-y)*D,s[10]=(1-(d+b))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=ts.set(s[0],s[1],s[2]).length();const o=ts.set(s[4],s[5],s[6]).length(),l=ts.set(s[8],s[9],s[10]).length();r<0&&(a=-a),vn.copy(this);const c=1/a,u=1/o,f=1/l;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=f,vn.elements[9]*=f,vn.elements[10]*=f,t.setFromRotationMatrix(vn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Vn,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s);let _,b;if(l)_=r/(a-r),b=a*r/(a-r);else if(o===Vn)_=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===ya)_=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Vn,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-s),d=-(t+e)/(t-e),h=-(i+s)/(i-s);let _,b;if(l)_=1/(a-r),b=a/(a-r);else if(o===Vn)_=-2/(a-r),b=-(a+r)/(a-r);else if(o===ya)_=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ca.prototype.isMatrix4=!0;let At=Ca;const ts=new H,vn=new At,jg=new H(0,0,0),e0=new H(1,1,1),Si=new H,Pr=new H,an=new H,Cu=new At,Pu=new Cs;class Ki{constructor(e=0,t=0,i=0,s=Ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Cu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pu.setFromEuler(this),this.setFromQuaternion(Pu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ki.DEFAULT_ORDER="XYZ";class ah{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let t0=0;const Du=new H,ns=new Cs,Kn=new At,Dr=new H,Fs=new H,n0=new H,i0=new Cs,Lu=new H(1,0,0),Iu=new H(0,1,0),Uu=new H(0,0,1),Nu={type:"added"},s0={type:"removed"},is={type:"childadded",child:null},_o={type:"childremoved",child:null};class en extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new H,t=new Ki,i=new Cs,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new Ze}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(Lu,e)}rotateY(e){return this.rotateOnAxis(Iu,e)}rotateZ(e){return this.rotateOnAxis(Uu,e)}translateOnAxis(e,t){return Du.copy(e).applyQuaternion(this.quaternion),this.position.add(Du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lu,e)}translateY(e){return this.translateOnAxis(Iu,e)}translateZ(e){return this.translateOnAxis(Uu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Dr.copy(e):Dr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Fs,Dr,this.up):Kn.lookAt(Dr,Fs,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(Kn),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nu),is.child=e,this.dispatchEvent(is),is.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(s0),_o.child=e,this.dispatchEvent(_o),_o.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nu),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,n0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,i0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}en.DEFAULT_UP=new H(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Lr extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r0={type:"move"};class vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,i),p=this._getHandJoint(c,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,_=.005;c.inputState.pinching&&d>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(r0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Lr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function xo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class lt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=qg(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=xo(a,r,e+1/3),this.g=xo(a,r,e),this.b=xo(a,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=hn){function i(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const i=oh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return st.workingToColorSpace(kt.copy(this),e),Math.round(it(kt.r*255,0,255))*65536+Math.round(it(kt.g*255,0,255))*256+Math.round(it(kt.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(kt.copy(this),t);const i=kt.r,s=kt.g,r=kt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=hn){st.workingToColorSpace(kt.copy(this),e);const t=kt.r,i=kt.g,s=kt.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(Ir);const i=fo(Mi.h,Ir.h,t),s=fo(Mi.s,Ir.s,t),r=fo(Mi.l,Ir.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new lt;lt.NAMES=oh;class a0 extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const xn=new H,Zn=new H,So=new H,Jn=new H,ss=new H,rs=new H,Fu=new H,Mo=new H,bo=new H,yo=new H,Eo=new wt,To=new wt,Ao=new wt;class Mn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),xn.subVectors(e,t),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){xn.subVectors(s,t),Zn.subVectors(i,t),So.subVectors(e,t);const a=xn.dot(xn),o=xn.dot(Zn),l=xn.dot(So),c=Zn.dot(Zn),u=Zn.dot(So),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,h=(c*l-o*u)*d,_=(a*u-o*l)*d;return r.set(1-h-_,_,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(a,Jn.y),l.addScaledVector(o,Jn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Eo.setScalar(0),To.setScalar(0),Ao.setScalar(0),Eo.fromBufferAttribute(e,t),To.fromBufferAttribute(e,i),Ao.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Eo,r.x),a.addScaledVector(To,r.y),a.addScaledVector(Ao,r.z),a}static isFrontFacing(e,t,i,s){return xn.subVectors(i,t),Zn.subVectors(e,t),xn.cross(Zn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),xn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;ss.subVectors(s,i),rs.subVectors(r,i),Mo.subVectors(e,i);const l=ss.dot(Mo),c=rs.dot(Mo);if(l<=0&&c<=0)return t.copy(i);bo.subVectors(e,s);const u=ss.dot(bo),f=rs.dot(bo);if(u>=0&&f<=u)return t.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ss,a);yo.subVectors(e,r);const h=ss.dot(yo),_=rs.dot(yo);if(_>=0&&h<=_)return t.copy(r);const b=h*c-l*_;if(b<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(rs,o);const m=u*_-h*f;if(m<=0&&f-u>=0&&h-_>=0)return Fu.subVectors(r,s),o=(f-u)/(f-u+(h-_)),t.copy(s).addScaledVector(Fu,o);const p=1/(m+b+d);return a=b*p,o=d*p,t.copy(i).addScaledVector(ss,a).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xr{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ur.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ur.copy(i.boundingBox)),Ur.applyMatrix4(e.matrixWorld),this.union(Ur)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),Nr.subVectors(this.max,Os),as.subVectors(e.a,Os),os.subVectors(e.b,Os),ls.subVectors(e.c,Os),bi.subVectors(os,as),yi.subVectors(ls,os),Ii.subVectors(as,ls);let t=[0,-bi.z,bi.y,0,-yi.z,yi.y,0,-Ii.z,Ii.y,bi.z,0,-bi.x,yi.z,0,-yi.x,Ii.z,0,-Ii.x,-bi.y,bi.x,0,-yi.y,yi.x,0,-Ii.y,Ii.x,0];return!wo(t,as,os,ls,Nr)||(t=[1,0,0,0,1,0,0,0,1],!wo(t,as,os,ls,Nr))?!1:(Fr.crossVectors(bi,yi),t=[Fr.x,Fr.y,Fr.z],wo(t,as,os,ls,Nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $n=[new H,new H,new H,new H,new H,new H,new H,new H],Sn=new H,Ur=new xr,as=new H,os=new H,ls=new H,bi=new H,yi=new H,Ii=new H,Os=new H,Nr=new H,Fr=new H,Ui=new H;function wo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ui.fromArray(n,r);const o=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),l=e.dot(Ui),c=t.dot(Ui),u=i.dot(Ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const It=new H,Or=new rt;let o0=0;class ui extends Ji{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:o0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=zg,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ns(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ns(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ns(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ns(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ns(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),s=tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class lh extends ui{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ch extends ui{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ct extends ui{constructor(e,t,i){super(new Float32Array(e),t,i)}}const l0=new xr,Bs=new H,Ro=new H;class Sr{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):l0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bs.subVectors(e,this.center);const t=Bs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Bs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bs.copy(e.center).add(Ro)),this.expandByPoint(Bs.copy(e.center).sub(Ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let c0=0;const fn=new At,Co=new en,cs=new H,on=new xr,Hs=new xr,Ft=new H;class Ht extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kg(e)?ch:lh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,i){return fn.makeTranslation(e,t,i),this.applyMatrix4(fn),this}scale(e,t,i){return fn.makeScale(e,t,i),this.applyMatrix4(fn),this}lookAt(e){return Co.lookAt(e),Co.updateMatrix(),this.applyMatrix4(Co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ct(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(on.min,Hs.min),on.expandByPoint(Ft),Ft.addVectors(on.max,Hs.max),on.expandByPoint(Ft)):(on.expandByPoint(Hs.min),on.expandByPoint(Hs.max))}on.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ft.fromBufferAttribute(o,c),l&&(cs.fromBufferAttribute(e,c),Ft.add(cs)),s=Math.max(s,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ui(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new H,l[v]=new H;const c=new H,u=new H,f=new H,d=new rt,h=new rt,_=new rt,b=new H,m=new H;function p(v,w,L){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,L),d.fromBufferAttribute(r,v),h.fromBufferAttribute(r,w),_.fromBufferAttribute(r,L),u.sub(c),f.sub(c),h.sub(d),_.sub(d);const O=1/(h.x*_.y-_.x*h.y);isFinite(O)&&(b.copy(u).multiplyScalar(_.y).addScaledVector(f,-h.y).multiplyScalar(O),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(O),o[v].add(b),o[w].add(b),o[L].add(b),l[v].add(m),l[w].add(m),l[L].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,w=y.length;v<w;++v){const L=y[v],O=L.start,G=L.count;for(let K=O,V=O+G;K<V;K+=3)p(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const P=new H,x=new H,T=new H,A=new H;function D(v){T.fromBufferAttribute(s,v),A.copy(T);const w=o[v];P.copy(w),P.sub(T.multiplyScalar(T.dot(w))).normalize(),x.crossVectors(A,w);const O=x.dot(l[v])<0?-1:1;a.setXYZW(v,P.x,P.y,P.z,O)}for(let v=0,w=y.length;v<w;++v){const L=y[v],O=L.start,G=L.count;for(let K=O,V=O+G;K<V;K+=3)D(e.getX(K+0)),D(e.getX(K+1)),D(e.getX(K+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ui(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let d=0,h=e.count;d<h;d+=3){const _=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,_=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?h=l[b]*o.data.stride+o.offset:h=l[b]*u;for(let p=0;p<u;p++)d[_++]=c[h++]}return new ui(d,u,f)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Po=new H,u0=new H,d0=new Ze;class Ai{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Po.subVectors(i,t).cross(u0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Po),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||d0.getNormalMatrix(e),s=this.coplanarPoint(Po).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let f0=0;class Ps extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=vr(),this.name="",this.type="Material",this.blending=nr,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vf,this.blendDst=zf,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=co,this.stencilZFail=co,this.stencilZPass=co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ai().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new rt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Qn=new H,Do=new H,Br=new H,Hr=new H;class bc{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Do.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),Hr.copy(this.origin).sub(Do);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Br),o=Hr.dot(this.direction),l=-Hr.dot(Br),c=Hr.lengthSq(),u=Math.abs(1-a*a);let f,d,h,_;if(u>0)if(f=a*l-o,d=a*o-l,_=r*u,f>=0)if(d>=-_)if(d<=_){const b=1/u;f*=b,d*=b,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Do).addScaledVector(Br,d),h}intersectSphere(e,t){if(e.radius<0)return null;Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),s=Qn.dot(Qn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,d=e.y-a.y,h=e.z-a.z,_=t.x-a.x,b=t.y-a.y,m=t.z-a.z,p=i.x-a.x,y=i.y-a.y,P=i.z-a.z,x=Math.abs(l),T=Math.abs(c),A=Math.abs(u);let D,v,w,L,O,G,K,V,X,ee,z,ie;if(x>=T&&x>=A?(w=l,G=f,X=_,ie=p,l>=0?(D=c,v=u,L=d,O=h,K=b,V=m,ee=y,z=P):(D=u,v=c,L=h,O=d,K=m,V=b,ee=P,z=y)):T>=A?(w=c,G=d,X=b,ie=y,c>=0?(D=u,v=l,L=h,O=f,K=m,V=_,ee=P,z=p):(D=l,v=u,L=f,O=h,K=_,V=m,ee=p,z=P)):(w=u,G=h,X=m,ie=P,u>=0?(D=l,v=c,L=f,O=d,K=_,V=b,ee=p,z=y):(D=c,v=l,L=d,O=f,K=b,V=_,ee=y,z=p)),w===0)return null;const Q=D/w,N=v/w,$=1/w,_e=L-Q*G,Ee=O-N*G,je=K-Q*X,Je=V-N*X,Ye=ee-Q*ie,te=z-N*ie,ce=Ye*Je-te*je,Pe=_e*te-Ee*Ye,ke=je*Ee-Je*_e;if(s){if(ce<0||Pe<0||ke<0)return null}else if((ce<0||Pe<0||ke<0)&&(ce>0||Pe>0||ke>0))return null;const De=ce+Pe+ke;if(De===0)return null;const R=$*(ce*G+Pe*X+ke*ie);return(De>0?R<0:R>0)?null:this.at(R/De,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ir extends Ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=kf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ou=new At,Ni=new bc,Vr=new Sr,Bu=new H,zr=new H,kr=new H,Gr=new H,Lo=new H,Wr=new H,Hu=new H,Xr=new H;class cn extends en{constructor(e=new Ht,t=new ir){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Lo.fromBufferAttribute(f,e),a?Wr.addScaledVector(Lo,u):Wr.addScaledVector(Lo.sub(t),u))}t.add(Wr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere),Vr.applyMatrix4(r),Ni.copy(e.ray).recast(e.near),!(Vr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Vr,Bu)===null||Ni.origin.distanceToSquared(Bu)>(e.far-e.near)**2))&&(Ou.copy(r).invert(),Ni.copy(e.ray).applyMatrix4(Ou),!(i.boundingBox!==null&&Ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,b=d.length;_<b;_++){const m=d[_],p=a[m.materialIndex],y=Math.max(m.start,h.start),P=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let x=y,T=P;x<T;x+=3){const A=o.getX(x),D=o.getX(x+1),v=o.getX(x+2);s=qr(this,p,e,i,c,u,f,A,D,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,h.start),b=Math.min(o.count,h.start+h.count);for(let m=_,p=b;m<p;m+=3){const y=o.getX(m),P=o.getX(m+1),x=o.getX(m+2);s=qr(this,a,e,i,c,u,f,y,P,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,b=d.length;_<b;_++){const m=d[_],p=a[m.materialIndex],y=Math.max(m.start,h.start),P=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let x=y,T=P;x<T;x+=3){const A=x,D=x+1,v=x+2;s=qr(this,p,e,i,c,u,f,A,D,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,h.start),b=Math.min(l.count,h.start+h.count);for(let m=_,p=b;m<p;m+=3){const y=m,P=m+1,x=m+2;s=qr(this,a,e,i,c,u,f,y,P,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function h0(n,e,t,i,s,r,a,o){let l;if(e.side===sn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Xi,o),l===null)return null;Xr.copy(o),Xr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Xr);return c<t.near||c>t.far?null:{distance:c,point:Xr.clone(),object:n}}function qr(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,zr),n.getVertexPosition(l,kr),n.getVertexPosition(c,Gr);const u=h0(n,e,t,i,zr,kr,Gr,Hu);if(u){const f=new H;Mn.getBarycoord(Hu,zr,kr,Gr,f),s&&(u.uv=Mn.getInterpolatedAttribute(s,o,l,c,f,new rt)),r&&(u.uv1=Mn.getInterpolatedAttribute(r,o,l,c,f,new rt)),a&&(u.normal=Mn.getInterpolatedAttribute(a,o,l,c,f,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new H,materialIndex:0};Mn.getNormal(zr,kr,Gr,d.normal),u.face=d,u.barycoord=f}return u}class p0 extends jt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Bt,u=Bt,f,d){super(null,a,o,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fi=new Sr,m0=new rt(.5,.5),Yr=new H;class uh{constructor(e=new Ai,t=new Ai,i=new Ai,s=new Ai,r=new Ai,a=new Ai){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],h=r[7],_=r[8],b=r[9],m=r[10],p=r[11],y=r[12],P=r[13],x=r[14],T=r[15];if(s[0].setComponents(c-a,h-u,p-_,T-y).normalize(),s[1].setComponents(c+a,h+u,p+_,T+y).normalize(),s[2].setComponents(c+o,h+f,p+b,T+P).normalize(),s[3].setComponents(c-o,h-f,p-b,T-P).normalize(),i)s[4].setComponents(l,d,m,x).normalize(),s[5].setComponents(c-l,h-d,p-m,T-x).normalize();else if(s[4].setComponents(c-l,h-d,p-m,T-x).normalize(),t===Vn)s[5].setComponents(c+l,h+d,p+m,T+x).normalize();else if(t===ya)s[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){Fi.center.set(0,0,0);const t=m0.distanceTo(e.center);return Fi.radius=.7071067811865476+t,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Yr.x=s.normal.x>0?e.max.x:e.min.x,Yr.y=s.normal.y>0?e.max.y:e.min.y,Yr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kl extends Ps{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ta=new H,Aa=new H,Vu=new At,Vs=new bc,Kr=new Sr,Io=new H,zu=new H;class dh extends en{constructor(e=new Ht,t=new kl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ta.fromBufferAttribute(t,s-1),Aa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ta.distanceTo(Aa);e.setAttribute("lineDistance",new Ct(i,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(s),Kr.radius+=r,e.ray.intersectsSphere(Kr)===!1)return;Vu.copy(s).invert(),Vs.copy(e.ray).applyMatrix4(Vu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let b=h,m=_-1;b<m;b+=c){const p=u.getX(b),y=u.getX(b+1),P=Zr(this,e,Vs,l,p,y,b);P&&t.push(P)}if(this.isLineLoop){const b=u.getX(_-1),m=u.getX(h),p=Zr(this,e,Vs,l,b,m,_-1);p&&t.push(p)}}else{const h=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let b=h,m=_-1;b<m;b+=c){const p=Zr(this,e,Vs,l,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){const b=Zr(this,e,Vs,l,_-1,h,_-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Zr(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Ta.fromBufferAttribute(o,s),Aa.fromBufferAttribute(o,r),t.distanceSqToSegment(Ta,Aa,Io,zu)>i)return;Io.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Io);if(!(c<e.near||c>e.far))return{distance:c,point:zu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const ku=new H,Gu=new H;class g0 extends dh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)ku.fromBufferAttribute(t,s),Gu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ku.distanceTo(Gu);e.setAttribute("lineDistance",new Ct(i,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gl extends Ps{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wu=new At,Wl=new bc,Jr=new Sr,$r=new H;class _0 extends en{constructor(e=new Ht,t=new Gl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jr.copy(i.boundingSphere),Jr.applyMatrix4(s),Jr.radius+=r,e.ray.intersectsSphere(Jr)===!1)return;Wu.copy(s).invert(),Wl.copy(e.ray).applyMatrix4(Wu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let _=d,b=h;_<b;_++){const m=c.getX(_);$r.fromBufferAttribute(f,m),Xu($r,m,l,s,e,t,this)}}else{const d=Math.max(0,a.start),h=Math.min(f.count,a.start+a.count);for(let _=d,b=h;_<b;_++)$r.fromBufferAttribute(f,_),Xu($r,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Xu(n,e,t,i,s,r,a){const o=Wl.distanceSqToPoint(n);if(o<t){const l=new H;Wl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class fh extends jt{constructor(e=[],t=qi,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pr extends jt{constructor(e,t,i=Wn,s,r,a,o=Bt,l=Bt,c,u=mi,f=1){if(u!==mi&&u!==zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class v0 extends pr{constructor(e,t=Wn,i=qi,s,r,a=Bt,o=Bt,l,c=mi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class hh extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Mr extends Ht{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,h=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(f,2));function _(b,m,p,y,P,x,T,A,D,v,w){const L=x/D,O=T/v,G=x/2,K=T/2,V=A/2,X=D+1,ee=v+1;let z=0,ie=0;const Q=new H;for(let N=0;N<ee;N++){const $=N*O-K;for(let _e=0;_e<X;_e++){const Ee=_e*L-G;Q[b]=Ee*y,Q[m]=$*P,Q[p]=V,c.push(Q.x,Q.y,Q.z),Q[b]=0,Q[m]=0,Q[p]=A>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(_e/D),f.push(1-N/v),z+=1}}for(let N=0;N<v;N++)for(let $=0;$<D;$++){const _e=d+$+X*N,Ee=d+$+X*(N+1),je=d+($+1)+X*(N+1),Je=d+($+1)+X*N;l.push(_e,Ee,Je),l.push(Ee,je,Je),ie+=6}o.addGroup(h,ie,w),h+=ie,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class yc extends Ht{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new Ct(r,3)),this.setAttribute("normal",new Ct(r.slice(),3)),this.setAttribute("uv",new Ct(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const P=new H,x=new H,T=new H;for(let A=0;A<t.length;A+=3)h(t[A+0],P),h(t[A+1],x),h(t[A+2],T),l(P,x,T,y)}function l(y,P,x,T){const A=T+1,D=[];for(let v=0;v<=A;v++){D[v]=[];const w=y.clone().lerp(x,v/A),L=P.clone().lerp(x,v/A),O=A-v;for(let G=0;G<=O;G++)G===0&&v===A?D[v][G]=w:D[v][G]=w.clone().lerp(L,G/O)}for(let v=0;v<A;v++)for(let w=0;w<2*(A-v)-1;w++){const L=Math.floor(w/2);w%2===0?(d(D[v][L+1]),d(D[v+1][L]),d(D[v][L])):(d(D[v][L+1]),d(D[v+1][L+1]),d(D[v+1][L]))}}function c(y){const P=new H;for(let x=0;x<r.length;x+=3)P.x=r[x+0],P.y=r[x+1],P.z=r[x+2],P.normalize().multiplyScalar(y),r[x+0]=P.x,r[x+1]=P.y,r[x+2]=P.z}function u(){const y=new H;for(let P=0;P<r.length;P+=3){y.x=r[P+0],y.y=r[P+1],y.z=r[P+2];const x=m(y)/2/Math.PI+.5,T=p(y)/Math.PI+.5;a.push(x,1-T)}_(),f()}function f(){for(let y=0;y<a.length;y+=6){const P=a[y+0],x=a[y+2],T=a[y+4],A=Math.max(P,x,T),D=Math.min(P,x,T);A>.9&&D<.1&&(P<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),T<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function h(y,P){const x=y*3;P.x=e[x+0],P.y=e[x+1],P.z=e[x+2]}function _(){const y=new H,P=new H,x=new H,T=new H,A=new rt,D=new rt,v=new rt;for(let w=0,L=0;w<r.length;w+=9,L+=6){y.set(r[w+0],r[w+1],r[w+2]),P.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),A.set(a[L+0],a[L+1]),D.set(a[L+2],a[L+3]),v.set(a[L+4],a[L+5]),T.copy(y).add(P).add(x).divideScalar(3);const O=m(T);b(A,L+0,y,O),b(D,L+2,P,O),b(v,L+4,x,O)}}function b(y,P,x,T){T<0&&y.x===1&&(a[P]=y.x-1),x.x===0&&x.z===0&&(a[P]=T/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.vertices,e.indices,e.radius,e.detail)}}class x0{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const u=i[s],d=i[s+1]-u,h=(a-u)/d;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new rt:new H);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new H,s=[],r=[],a=[],o=new H,l=new At;for(let h=0;h<=e;h++){const _=h/e;s[h]=this.getTangentAt(_,new H)}r[0]=new H,a[0]=new H;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(s[h-1],s[h]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(it(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(o,_))}a[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(it(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(h=-h);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],h*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Ec(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,h=(o-a)/u-(l-a)/(u+f)+(l-o)/f;d*=u,h*=u,s(a,o,d,h)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const qu=new H,Yu=new H,Uo=new Ec,No=new Ec,Fo=new Ec;class S0 extends x0{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new H){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Yu.subVectors(s[0],s[1]).add(s[0]),c=Yu);const f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(qu.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=qu),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),h),b=Math.pow(f.distanceToSquared(d),h),m=Math.pow(d.distanceToSquared(u),h);b<1e-4&&(b=1),_<1e-4&&(_=b),m<1e-4&&(m=b),Uo.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,_,b,m),No.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,_,b,m),Fo.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,_,b,m)}else this.curveType==="catmullrom"&&(Uo.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),No.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),Fo.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return i.set(Uo.calc(l),No.calc(l),Fo.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Tc extends yc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Tc(e.radius,e.detail)}}class ka extends Ht{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=e/o,d=t/l,h=[],_=[],b=[],m=[];for(let p=0;p<u;p++){const y=p*d-a;for(let P=0;P<c;P++){const x=P*f-r;_.push(x,-y,0),b.push(0,0,1),m.push(P/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const P=y+c*p,x=y+c*(p+1),T=y+1+c*(p+1),A=y+1+c*p;h.push(P,x,A),h.push(x,T,A)}this.setIndex(h),this.setAttribute("position",new Ct(_,3)),this.setAttribute("normal",new Ct(b,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.widthSegments,e.heightSegments)}}class wa extends Ht{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new H,d=new H,h=[],_=[],b=[],m=[];for(let p=0;p<=i;p++){const y=[],P=p/i,x=a+P*o,T=e*Math.cos(x),A=Math.sqrt(e*e-T*T);let D=0;p===0&&a===0?D=.5/t:p===i&&l===Math.PI&&(D=-.5/t);for(let v=0;v<=t;v++){const w=v/t,L=s+w*r;f.x=-A*Math.cos(L),f.y=T,f.z=A*Math.sin(L),_.push(f.x,f.y,f.z),d.copy(f).normalize(),b.push(d.x,d.y,d.z),m.push(w+D,1-P),y.push(c++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const P=u[p][y+1],x=u[p][y],T=u[p+1][y],A=u[p+1][y+1];(p!==0||a>0)&&h.push(P,x,A),(p!==i-1||l<Math.PI)&&h.push(x,T,A)}this.setIndex(h),this.setAttribute("position",new Ct(_,3)),this.setAttribute("normal",new Ct(b,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ac extends Ht{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],f=[],d=new H,h=new H,_=new H;for(let b=0;b<=i;b++){const m=a+b/i*o;for(let p=0;p<=s;p++){const y=p/s*r;h.x=(e+t*Math.cos(m))*Math.cos(y),h.y=(e+t*Math.cos(m))*Math.sin(y),h.z=t*Math.sin(m),c.push(h.x,h.y,h.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),_.subVectors(h,d).normalize(),u.push(_.x,_.y,_.z),f.push(p/s),f.push(b/i)}}for(let b=1;b<=i;b++)for(let m=1;m<=s;m++){const p=(s+1)*b+m-1,y=(s+1)*(b-1)+m-1,P=(s+1)*(b-1)+m,x=(s+1)*b+m;l.push(p,y,x),l.push(y,P,x)}this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Rs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Ku(s))s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Ku(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const i=Rs(n[t]);for(const s in i)e[s]=i[s]}return e}function Ku(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function M0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ph(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const b0={clone:Rs,merge:Zt};var y0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends Ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=y0,this.fragmentShader=E0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=M0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new lt().setHex(s.value);break;case"v2":this.uniforms[i].value=new rt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new H().fromArray(s.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ze().fromArray(s.value);break;case"m4":this.uniforms[i].value=new At().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class T0 extends qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class A0 extends Ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class w0 extends Ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qr=new H,jr=new Cs,Dn=new H;class mh extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qr,jr,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qr,jr,Dn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Qr,jr,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qr,jr,Dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new H,Zu=new rt,Ju=new rt;class pn extends mh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zl*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,Zu,Ju),t.subVectors(Ju,Zu)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(uo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class gh extends mh{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const us=-90,ds=1;class R0 extends en{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(us,ds,e,t);s.layers=this.layers,this.add(s);const r=new pn(us,ds,e,t);r.layers=this.layers,this.add(r);const a=new pn(us,ds,e,t);a.layers=this.layers,this.add(a);const o=new pn(us,ds,e,t);o.layers=this.layers,this.add(o);const l=new pn(us,ds,e,t);l.layers=this.layers,this.add(l);const c=new pn(us,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ya)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class C0 extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class P0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,We("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Lc=class Lc{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Lc.prototype.isMatrix2=!0;let $u=Lc;function Qu(n,e,t,i){const s=D0(i);switch(t){case th:return n*e;case ih:return n*e/s.components*s.byteLength;case gc:return n*e/s.components*s.byteLength;case Yi:return n*e*2/s.components*s.byteLength;case _c:return n*e*2/s.components*s.byteLength;case nh:return n*e*3/s.components*s.byteLength;case bn:return n*e*4/s.components*s.byteLength;case vc:return n*e*4/s.components*s.byteLength;case aa:case oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case la:case ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fl:case pl:return Math.max(n,16)*Math.max(e,8)/4;case dl:case hl:return Math.max(n,8)*Math.max(e,8)/2;case ml:case gl:case vl:case xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _l:case xa:case Sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case yl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case El:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Al:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case wl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Il:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ul:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Nl:case Fl:case Ol:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Bl:case Hl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Sa:case Vl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function D0(n){switch(n){case mn:case $f:return{byteLength:1,components:1};case fr:case Qf:case Xn:return{byteLength:2,components:1};case pc:case mc:return{byteLength:2,components:4};case Wn:case hc:case Hn:return{byteLength:4,components:1};case jf:case eh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fc}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _h(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function L0(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((h,_)=>h.start-_.start);let d=0;for(let h=1;h<f.length;h++){const _=f[d],b=f[h];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++d,f[d]=b)}f.length=d+1;for(let h=0,_=f.length;h<_;h++){const b=f[h];n.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var I0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U0=`#ifdef USE_ALPHAHASH
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
#endif`,N0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H0=`#ifdef USE_AOMAP
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
#endif`,V0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z0=`#ifdef USE_BATCHING
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
#endif`,k0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,G0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,X0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,q0=`#ifdef USE_IRIDESCENCE
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
#endif`,Y0=`#ifdef USE_BUMPMAP
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
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,j0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,e_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,t_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,n_=`#define PI 3.141592653589793
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
} // validated`,i_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,s_=`vec3 transformedNormal = objectNormal;
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
#endif`,r_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,o_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,c_="gl_FragColor = linearToOutputTexel( gl_FragColor );",u_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d_=`#ifdef USE_ENVMAP
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
#endif`,f_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,h_=`#ifdef USE_ENVMAP
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
#endif`,p_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,m_=`#ifdef USE_ENVMAP
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
#endif`,g_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,__=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S_=`#ifdef USE_GRADIENTMAP
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
}`,M_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,T_=`#ifdef USE_ENVMAP
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
#endif`,A_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,C_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P_=`PhysicalMaterial material;
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
#endif`,D_=`uniform sampler2D dfgLUT;
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
}`,L_=`
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
#endif`,I_=`#if defined( RE_IndirectDiffuse )
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
#endif`,U_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,F_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,z_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,G_=`#if defined( USE_POINTS_UV )
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
#endif`,W_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z_=`#ifdef USE_MORPHTARGETS
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
#endif`,J_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Q_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,j_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,nv=`#ifdef USE_NORMALMAP
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
#endif`,iv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,av=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ov=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_v=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vv=`float getShadowMask() {
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
}`,xv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sv=`#ifdef USE_SKINNING
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
#endif`,Mv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bv=`#ifdef USE_SKINNING
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
#endif`,yv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ev=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Av=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wv=`#ifdef USE_TRANSMISSION
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
#endif`,Rv=`#ifdef USE_TRANSMISSION
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
#endif`,Cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Iv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uv=`uniform sampler2D t2D;
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
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`#include <common>
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
}`,Vv=`#if DEPTH_PACKING == 3200
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
}`,zv=`#define DISTANCE
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
}`,kv=`#define DISTANCE
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
}`,Gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xv=`uniform float scale;
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
}`,qv=`uniform vec3 diffuse;
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
}`,Yv=`#include <common>
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
}`,Kv=`uniform vec3 diffuse;
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
}`,Zv=`#define LAMBERT
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
}`,Jv=`#define LAMBERT
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
}`,$v=`#define MATCAP
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
}`,Qv=`#define MATCAP
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
}`,jv=`#define NORMAL
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
}`,ex=`#define NORMAL
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
}`,tx=`#define PHONG
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
}`,nx=`#define PHONG
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
}`,ix=`#define STANDARD
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
}`,sx=`#define STANDARD
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
}`,rx=`#define TOON
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
}`,ax=`#define TOON
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
}`,ox=`uniform float size;
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
}`,lx=`uniform vec3 diffuse;
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
}`,cx=`#include <common>
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
}`,ux=`uniform vec3 color;
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
}`,dx=`uniform float rotation;
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
}`,fx=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:I0,alphahash_pars_fragment:U0,alphamap_fragment:N0,alphamap_pars_fragment:F0,alphatest_fragment:O0,alphatest_pars_fragment:B0,aomap_fragment:H0,aomap_pars_fragment:V0,batching_pars_vertex:z0,batching_vertex:k0,begin_vertex:G0,beginnormal_vertex:W0,bsdfs:X0,iridescence_fragment:q0,bumpmap_pars_fragment:Y0,clipping_planes_fragment:K0,clipping_planes_pars_fragment:Z0,clipping_planes_pars_vertex:J0,clipping_planes_vertex:$0,color_fragment:Q0,color_pars_fragment:j0,color_pars_vertex:e_,color_vertex:t_,common:n_,cube_uv_reflection_fragment:i_,defaultnormal_vertex:s_,displacementmap_pars_vertex:r_,displacementmap_vertex:a_,emissivemap_fragment:o_,emissivemap_pars_fragment:l_,colorspace_fragment:c_,colorspace_pars_fragment:u_,envmap_fragment:d_,envmap_common_pars_fragment:f_,envmap_pars_fragment:h_,envmap_pars_vertex:p_,envmap_physical_pars_fragment:T_,envmap_vertex:m_,fog_vertex:g_,fog_pars_vertex:__,fog_fragment:v_,fog_pars_fragment:x_,gradientmap_pars_fragment:S_,lightmap_pars_fragment:M_,lights_lambert_fragment:b_,lights_lambert_pars_fragment:y_,lights_pars_begin:E_,lights_toon_fragment:A_,lights_toon_pars_fragment:w_,lights_phong_fragment:R_,lights_phong_pars_fragment:C_,lights_physical_fragment:P_,lights_physical_pars_fragment:D_,lights_fragment_begin:L_,lights_fragment_maps:I_,lights_fragment_end:U_,lightprobes_pars_fragment:N_,logdepthbuf_fragment:F_,logdepthbuf_pars_fragment:O_,logdepthbuf_pars_vertex:B_,logdepthbuf_vertex:H_,map_fragment:V_,map_pars_fragment:z_,map_particle_fragment:k_,map_particle_pars_fragment:G_,metalnessmap_fragment:W_,metalnessmap_pars_fragment:X_,morphinstance_vertex:q_,morphcolor_vertex:Y_,morphnormal_vertex:K_,morphtarget_pars_vertex:Z_,morphtarget_vertex:J_,normal_fragment_begin:$_,normal_fragment_maps:Q_,normal_pars_fragment:j_,normal_pars_vertex:ev,normal_vertex:tv,normalmap_pars_fragment:nv,clearcoat_normal_fragment_begin:iv,clearcoat_normal_fragment_maps:sv,clearcoat_pars_fragment:rv,iridescence_pars_fragment:av,opaque_fragment:ov,packing:lv,premultiplied_alpha_fragment:cv,project_vertex:uv,dithering_fragment:dv,dithering_pars_fragment:fv,roughnessmap_fragment:hv,roughnessmap_pars_fragment:pv,shadowmap_pars_fragment:mv,shadowmap_pars_vertex:gv,shadowmap_vertex:_v,shadowmask_pars_fragment:vv,skinbase_vertex:xv,skinning_pars_vertex:Sv,skinning_vertex:Mv,skinnormal_vertex:bv,specularmap_fragment:yv,specularmap_pars_fragment:Ev,tonemapping_fragment:Tv,tonemapping_pars_fragment:Av,transmission_fragment:wv,transmission_pars_fragment:Rv,uv_pars_fragment:Cv,uv_pars_vertex:Pv,uv_vertex:Dv,worldpos_vertex:Lv,background_vert:Iv,background_frag:Uv,backgroundCube_vert:Nv,backgroundCube_frag:Fv,cube_vert:Ov,cube_frag:Bv,depth_vert:Hv,depth_frag:Vv,distance_vert:zv,distance_frag:kv,equirect_vert:Gv,equirect_frag:Wv,linedashed_vert:Xv,linedashed_frag:qv,meshbasic_vert:Yv,meshbasic_frag:Kv,meshlambert_vert:Zv,meshlambert_frag:Jv,meshmatcap_vert:$v,meshmatcap_frag:Qv,meshnormal_vert:jv,meshnormal_frag:ex,meshphong_vert:tx,meshphong_frag:nx,meshphysical_vert:ix,meshphysical_frag:sx,meshtoon_vert:rx,meshtoon_frag:ax,points_vert:ox,points_frag:lx,shadow_vert:cx,shadow_frag:ux,sprite_vert:dx,sprite_frag:fx},Te={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},On={basic:{uniforms:Zt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Zt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Zt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Zt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Zt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new lt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Zt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Zt([Te.points,Te.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Zt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Zt([Te.common,Te.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Zt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Zt([Te.sprite,Te.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:Zt([Te.common,Te.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:Zt([Te.lights,Te.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};On.physical={uniforms:Zt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const ea={r:0,b:0,g:0},hx=new At,vh=new Ze;vh.set(-1,0,0,0,1,0,0,0,1);function px(n,e,t,i,s,r){const a=new lt(0);let o=s===!0?0:1,l,c,u=null,f=0,d=null;function h(y){let P=y.isScene===!0?y.background:null;if(P&&P.isTexture){const x=y.backgroundBlurriness>0;P=e.get(P,x)}return P}function _(y){let P=!1;const x=h(y);x===null?m(a,o):x&&x.isColor&&(m(x,1),P=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(y,P){const x=h(P);x&&(x.isCubeTexture||x.mapping===za)?(c===void 0&&(c=new cn(new Mr(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Rs(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hx.makeRotationFromEuler(P.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(vh),c.material.toneMapped=st.getTransfer(x.colorSpace)!==ht,(u!==x||f!==x.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new cn(new ka(2,2),new qn({name:"BackgroundMaterial",uniforms:Rs(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=st.getTransfer(x.colorSpace)!==ht,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,d=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,P){y.getRGB(ea,ph(n)),t.buffers.color.setClear(ea.r,ea.g,ea.b,P,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,P=1){a.set(y),o=P,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:_,addToRenderList:b,dispose:p}}function mx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(O,G,K,V,X){let ee=!1;const z=f(O,V,K,G);r!==z&&(r=z,c(r.object)),ee=h(O,V,K,X),ee&&_(O,V,K,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,x(O,G,K,V),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(O){return n.bindVertexArray(O)}function u(O){return n.deleteVertexArray(O)}function f(O,G,K,V){const X=V.wireframe===!0;let ee=i[G.id];ee===void 0&&(ee={},i[G.id]=ee);const z=O.isInstancedMesh===!0?O.id:0;let ie=ee[z];ie===void 0&&(ie={},ee[z]=ie);let Q=ie[K.id];Q===void 0&&(Q={},ie[K.id]=Q);let N=Q[X];return N===void 0&&(N=d(l()),Q[X]=N),N}function d(O){const G=[],K=[],V=[];for(let X=0;X<t;X++)G[X]=0,K[X]=0,V[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:K,attributeDivisors:V,object:O,attributes:{},index:null}}function h(O,G,K,V){const X=r.attributes,ee=G.attributes;let z=0;const ie=K.getAttributes();for(const Q in ie)if(ie[Q].location>=0){const $=X[Q];let _e=ee[Q];if(_e===void 0&&(Q==="instanceMatrix"&&O.instanceMatrix&&(_e=O.instanceMatrix),Q==="instanceColor"&&O.instanceColor&&(_e=O.instanceColor)),$===void 0||$.attribute!==_e||_e&&$.data!==_e.data)return!0;z++}return r.attributesNum!==z||r.index!==V}function _(O,G,K,V){const X={},ee=G.attributes;let z=0;const ie=K.getAttributes();for(const Q in ie)if(ie[Q].location>=0){let $=ee[Q];$===void 0&&(Q==="instanceMatrix"&&O.instanceMatrix&&($=O.instanceMatrix),Q==="instanceColor"&&O.instanceColor&&($=O.instanceColor));const _e={};_e.attribute=$,$&&$.data&&(_e.data=$.data),X[Q]=_e,z++}r.attributes=X,r.attributesNum=z,r.index=V}function b(){const O=r.newAttributes;for(let G=0,K=O.length;G<K;G++)O[G]=0}function m(O){p(O,0)}function p(O,G){const K=r.newAttributes,V=r.enabledAttributes,X=r.attributeDivisors;K[O]=1,V[O]===0&&(n.enableVertexAttribArray(O),V[O]=1),X[O]!==G&&(n.vertexAttribDivisor(O,G),X[O]=G)}function y(){const O=r.newAttributes,G=r.enabledAttributes;for(let K=0,V=G.length;K<V;K++)G[K]!==O[K]&&(n.disableVertexAttribArray(K),G[K]=0)}function P(O,G,K,V,X,ee,z){z===!0?n.vertexAttribIPointer(O,G,K,X,ee):n.vertexAttribPointer(O,G,K,V,X,ee)}function x(O,G,K,V){b();const X=V.attributes,ee=K.getAttributes(),z=G.defaultAttributeValues;for(const ie in ee){const Q=ee[ie];if(Q.location>=0){let N=X[ie];if(N===void 0&&(ie==="instanceMatrix"&&O.instanceMatrix&&(N=O.instanceMatrix),ie==="instanceColor"&&O.instanceColor&&(N=O.instanceColor)),N!==void 0){const $=N.normalized,_e=N.itemSize,Ee=e.get(N);if(Ee===void 0)continue;const je=Ee.buffer,Je=Ee.type,Ye=Ee.bytesPerElement,te=Je===n.INT||Je===n.UNSIGNED_INT||N.gpuType===hc;if(N.isInterleavedBufferAttribute){const ce=N.data,Pe=ce.stride,ke=N.offset;if(ce.isInstancedInterleavedBuffer){for(let De=0;De<Q.locationSize;De++)p(Q.location+De,ce.meshPerAttribute);O.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let De=0;De<Q.locationSize;De++)m(Q.location+De);n.bindBuffer(n.ARRAY_BUFFER,je);for(let De=0;De<Q.locationSize;De++)P(Q.location+De,_e/Q.locationSize,Je,$,Pe*Ye,(ke+_e/Q.locationSize*De)*Ye,te)}else{if(N.isInstancedBufferAttribute){for(let ce=0;ce<Q.locationSize;ce++)p(Q.location+ce,N.meshPerAttribute);O.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let ce=0;ce<Q.locationSize;ce++)m(Q.location+ce);n.bindBuffer(n.ARRAY_BUFFER,je);for(let ce=0;ce<Q.locationSize;ce++)P(Q.location+ce,_e/Q.locationSize,Je,$,_e*Ye,_e/Q.locationSize*ce*Ye,te)}}else if(z!==void 0){const $=z[ie];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(Q.location,$);break;case 3:n.vertexAttrib3fv(Q.location,$);break;case 4:n.vertexAttrib4fv(Q.location,$);break;default:n.vertexAttrib1fv(Q.location,$)}}}}y()}function T(){w();for(const O in i){const G=i[O];for(const K in G){const V=G[K];for(const X in V){const ee=V[X];for(const z in ee)u(ee[z].object),delete ee[z];delete V[X]}}delete i[O]}}function A(O){if(i[O.id]===void 0)return;const G=i[O.id];for(const K in G){const V=G[K];for(const X in V){const ee=V[X];for(const z in ee)u(ee[z].object),delete ee[z];delete V[X]}}delete i[O.id]}function D(O){for(const G in i){const K=i[G];for(const V in K){const X=K[V];if(X[O.id]===void 0)continue;const ee=X[O.id];for(const z in ee)u(ee[z].object),delete ee[z];delete X[O.id]}}}function v(O){for(const G in i){const K=i[G],V=O.isInstancedMesh===!0?O.id:0,X=K[V];if(X!==void 0){for(const ee in X){const z=X[ee];for(const ie in z)u(z[ie].object),delete z[ie];delete X[ee]}delete K[V],Object.keys(K).length===0&&delete i[G]}}}function w(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:L,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:D,initAttributes:b,enableAttribute:m,disableUnusedAttributes:y}}function gx(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function _x(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==bn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const v=D===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==mn&&D!==Hn&&!v&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(We("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:P,maxFragmentUniforms:x,maxSamples:T,samples:A}}function vx(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Ai,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||s;return s=d,i=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const _=f.clippingPlanes,b=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const y=r?0:i,P=y*4;let x=p.clippingState||null;l.value=x,x=u(_,d,P,h);for(let T=0;T!==P;++T)x[T]=t[T];p.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,_){const b=f!==null?f.length:0;let m=null;if(b!==0){if(m=l.value,_!==!0||m===null){const p=h+b*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let P=0,x=h;P!==b;++P,x+=4)a.copy(f[P]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}const _s=4,xx=6,Sx=20,Mx=256,zs=new gh,ju=new lt;let Oo=null,Bo=0,Ho=0,Vo=!1;const bx=new H,Oi=new H;class ed{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=bx}=r;Oo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Oo,Bo,Ho),this._renderer.xr.enabled=Vo,e.scissorTest=!1,fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Xn,format:bn,colorSpace:Ma,depthBuffer:!1},s=td(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=td(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=yx(r)),this._blurMaterial=Tx(r,e,t),this._ggxMaterial=Ex(r,e,t)}return s}_compileMaterial(e){const t=new cn(new Ht,e);this._renderer.compile(t,zs)}_sceneToCubeUV(e,t,i,s,r){const l=new pn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(ju),f.toneMapping=kn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new cn(new Mr,new ir({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,m=b.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(ju),p=!0);for(let P=0;P<6;P++){const x=P%3;x===0?(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[P],r.y,r.z)):x===1?(l.up.set(0,0,c[P]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[P],r.z)):(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[P]));const T=this._cubeSize;fs(s,x*T,P>2?T:0,T,T),f.setRenderTarget(s),p&&f.render(b,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===qi||e.mapping===ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=id()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nd());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;fs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,zs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=c*1.25,h=f*d,{_lodMax:_}=this,b=this._sizeLods[i],m=3*b*(i>_-_s?i-_+_s:0),p=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=_-t,fs(r,m,p,3*b,2*b),s.setRenderTarget(r),s.render(o,zs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,fs(e,m,p,3*b,2*b),s.setRenderTarget(e),s.render(o,zs)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],f=3*u*(s>this._lodMax-_s?s-this._lodMax+_s:0),d=4*(this._cubeSize-u);fs(t,f,d,3*u,2*u),a.setRenderTarget(t),a.render(l,zs)}}function yx(n){const e=[],t=[];let i=n;const s=n-_s+1+xx;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,d=6,h=3,_=new Float32Array(h*d*f),b=new Float32Array(h*d*f);for(let p=0;p<f;p++){const y=p%3*2/3-1,P=p>2?0:-1,x=[y,P,0,y+2/3,P,0,y+2/3,P+1,0,y,P,0,y+2/3,P+1,0,y,P+1,0];_.set(x,h*d*p);for(let T=0;T<d;T++){const A=u[T*2]*2-1,D=u[T*2+1]*2-1;p===0?Oi.set(1,D,A):p===1?Oi.set(-A,1,-D):p===2?Oi.set(-A,D,1):p===3?Oi.set(-1,D,-A):p===4?Oi.set(-A,-1,D):Oi.set(A,D,-1),Oi.toArray(b,(p*d+T)*h)}}const m=new Ht;m.setAttribute("position",new ui(_,h)),m.setAttribute("outputDirection",new ui(b,h)),t.push(new cn(m,null)),i>_s&&i--}return{lodMeshes:t,sizeLods:e}}function td(n,e,t){const i=new An(n,e,t);return i.texture.mapping=za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Ex(n,e,t){return new qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Mx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ga(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Tx(n,e,t){return new qn({name:"SphericalGaussianBlur",defines:{SAMPLES:Sx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ga(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function nd(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ga(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function id(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Ga(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class xh extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new fh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mr(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:li});r.uniforms.tEquirect.value=t;const a=new cn(s,r),o=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Xt),new R0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function Ax(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,h=!1){return d==null?null:h?a(d):r(d)}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===ao||h===oo)if(e.has(d)){const _=e.get(d).texture;return o(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const b=new xh(_.height);return b.fromEquirectangularTexture(n,d),e.set(d,b),d.addEventListener("dispose",c),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const h=d.mapping,_=h===ao||h===oo,b=h===qi||h===ws;if(_||b){let m=t.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new ed(n)),m=_?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const y=d.image;return _&&y&&y.height>0||b&&y&&l(y)?(i===null&&(i=new ed(n)),m=_?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,h){return h===ao?d.mapping=qi:h===oo&&(d.mapping=ws),d}function l(d){let h=0;const _=6;for(let b=0;b<_;b++)d[b]!==void 0&&h++;return h===_}function c(d){const h=d.target;h.removeEventListener("dispose",c);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function wx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ys("WebGLRenderer: "+i+" extension not supported."),s}}}function Rx(n,e,t,i){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete s[d.id];const h=r.get(d);h&&(e.remove(h),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],n.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,_=f.attributes.position;let b=0;if(_===void 0)return;if(h!==null){const y=h.array;b=h.version;for(let P=0,x=y.length;P<x;P+=3){const T=y[P+0],A=y[P+1],D=y[P+2];d.push(T,A,A,D,D,T)}}else{const y=_.array;b=_.version;for(let P=0,x=y.length/3-1;P<x;P+=3){const T=P+0,A=P+1,D=P+2;d.push(T,A,A,D,D,T)}}const m=new(_.count>=65535?ch:lh)(d,1);m.version=b;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const d=r.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Cx(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*a),t.update(d,i,1)}function c(f,d,h){h!==0&&(n.drawElementsInstanced(i,d,r,f*a,h),t.update(d,i,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,h);let b=0;for(let m=0;m<h;m++)b+=d[m];t.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Px(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Dx(n,e,t){const i=new WeakMap,s=new wt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let L=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var h=L;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],P=o.morphAttributes.color||[];let x=0;_===!0&&(x=1),b===!0&&(x=2),m===!0&&(x=3);let T=o.attributes.position.count*x,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const D=new Float32Array(T*A*4*f),v=new rh(D,T,A,f);v.type=Hn,v.needsUpdate=!0;const w=x*4;for(let O=0;O<f;O++){const G=p[O],K=y[O],V=P[O],X=T*A*4*O;for(let ee=0;ee<G.count;ee++){const z=ee*w;_===!0&&(s.fromBufferAttribute(G,ee),D[X+z+0]=s.x,D[X+z+1]=s.y,D[X+z+2]=s.z,D[X+z+3]=0),b===!0&&(s.fromBufferAttribute(K,ee),D[X+z+4]=s.x,D[X+z+5]=s.y,D[X+z+6]=s.z,D[X+z+7]=0),m===!0&&(s.fromBufferAttribute(V,ee),D[X+z+8]=s.x,D[X+z+9]=s.y,D[X+z+10]=s.z,D[X+z+11]=V.itemSize===4?s.w:1)}}d={count:f,texture:v,size:new rt(T,A)},i.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const b=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",b),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Lx(n,e,t,i,s){let r=new WeakMap;function a(c){const u=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Ix={[Gf]:"LINEAR_TONE_MAPPING",[Wf]:"REINHARD_TONE_MAPPING",[Xf]:"CINEON_TONE_MAPPING",[qf]:"ACES_FILMIC_TONE_MAPPING",[Kf]:"AGX_TONE_MAPPING",[Zf]:"NEUTRAL_TONE_MAPPING",[Yf]:"CUSTOM_TONE_MAPPING"};function Ux(n,e,t,i,s,r){const a=new An(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Ht;c.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ct([0,2,0,0,2,0],2));const u=new T0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new cn(c,u),d=new gh(-1,1,1,-1,0,1);let h=null,_=null,b=!1,m,p=null,y=[],P=!1;this.setSize=function(x,T){a.setSize(x,T),o!==null&&o.setSize(x,T),l!==null&&l.setSize(x,T);for(let A=0;A<y.length;A++){const D=y[A];D.setSize&&D.setSize(x,T)}},this.setEffects=function(x){y=x,P=y.length>0&&y[0].isRenderPass===!0;const T=a.width,A=a.height;y.length>0&&o===null&&(o=new An(T,A,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),l=new An(T,A,{type:Xn,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<y.length;D++){const v=y[D];v.setSize&&v.setSize(T,A)}},this.begin=function(x,T){if(b||x.toneMapping===kn&&y.length===0)return!1;if(p=T,T!==null){const A=T.width,D=T.height;(a.width!==A||a.height!==D)&&this.setSize(A,D)}return P===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=kn,!0},this.hasRenderPass=function(){return P},this.end=function(x,T){x.toneMapping=m,b=!0;let A=a,D=o;for(let v=0;v<y.length;v++){const w=y[v];w.enabled!==!1&&(w.render(x,D,A,T),w.needsSwap!==!1&&(A=D,D=D===o?l:o))}if(h!==x.outputColorSpace||_!==x.toneMapping){h=x.outputColorSpace,_=x.toneMapping,u.defines={},st.getTransfer(h)===ht&&(u.defines.SRGB_TRANSFER="");const v=Ix[_];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,x.setRenderTarget(p),x.render(f,d),p=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const Sh=new jt,Xl=new pr(1,1),Mh=new rh,bh=new Qg,yh=new fh,sd=[],rd=[],ad=new Float32Array(16),od=new Float32Array(9),ld=new Float32Array(4);function Ds(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=sd[s];if(r===void 0&&(r=new Float32Array(s),sd[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Nt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Wa(n,e){let t=rd[e];t===void 0&&(t=new Int32Array(e),rd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Nx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Fx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2fv(this.addr,e),Nt(t,e)}}function Ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;n.uniform3fv(this.addr,e),Nt(t,e)}}function Bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4fv(this.addr,e),Nt(t,e)}}function Hx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;ld.set(i),n.uniformMatrix2fv(this.addr,!1,ld),Nt(t,i)}}function Vx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;od.set(i),n.uniformMatrix3fv(this.addr,!1,od),Nt(t,i)}}function zx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;ad.set(i),n.uniformMatrix4fv(this.addr,!1,ad),Nt(t,i)}}function kx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Gx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2iv(this.addr,e),Nt(t,e)}}function Wx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3iv(this.addr,e),Nt(t,e)}}function Xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4iv(this.addr,e),Nt(t,e)}}function qx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Yx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2uiv(this.addr,e),Nt(t,e)}}function Kx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3uiv(this.addr,e),Nt(t,e)}}function Zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4uiv(this.addr,e),Nt(t,e)}}function Jx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Xl.compareFunction=t.isReversedDepthBuffer()?Sc:xc,r=Xl):r=Sh,t.setTexture2D(e||r,s)}function $x(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||bh,s)}function Qx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||yh,s)}function jx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Mh,s)}function eS(n){switch(n){case 5126:return Nx;case 35664:return Fx;case 35665:return Ox;case 35666:return Bx;case 35674:return Hx;case 35675:return Vx;case 35676:return zx;case 5124:case 35670:return kx;case 35667:case 35671:return Gx;case 35668:case 35672:return Wx;case 35669:case 35673:return Xx;case 5125:return qx;case 36294:return Yx;case 36295:return Kx;case 36296:return Zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Jx;case 35679:case 36299:case 36307:return $x;case 35680:case 36300:case 36308:case 36293:return Qx;case 36289:case 36303:case 36311:case 36292:return jx}}function tS(n,e){n.uniform1fv(this.addr,e)}function nS(n,e){const t=Ds(e,this.size,2);n.uniform2fv(this.addr,t)}function iS(n,e){const t=Ds(e,this.size,3);n.uniform3fv(this.addr,t)}function sS(n,e){const t=Ds(e,this.size,4);n.uniform4fv(this.addr,t)}function rS(n,e){const t=Ds(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function aS(n,e){const t=Ds(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function oS(n,e){const t=Ds(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function lS(n,e){n.uniform1iv(this.addr,e)}function cS(n,e){n.uniform2iv(this.addr,e)}function uS(n,e){n.uniform3iv(this.addr,e)}function dS(n,e){n.uniform4iv(this.addr,e)}function fS(n,e){n.uniform1uiv(this.addr,e)}function hS(n,e){n.uniform2uiv(this.addr,e)}function pS(n,e){n.uniform3uiv(this.addr,e)}function mS(n,e){n.uniform4uiv(this.addr,e)}function gS(n,e,t){const i=this.cache,s=e.length,r=Wa(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Xl:a=Sh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function _S(n,e,t){const i=this.cache,s=e.length,r=Wa(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||bh,r[a])}function vS(n,e,t){const i=this.cache,s=e.length,r=Wa(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||yh,r[a])}function xS(n,e,t){const i=this.cache,s=e.length,r=Wa(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Mh,r[a])}function SS(n){switch(n){case 5126:return tS;case 35664:return nS;case 35665:return iS;case 35666:return sS;case 35674:return rS;case 35675:return aS;case 35676:return oS;case 5124:case 35670:return lS;case 35667:case 35671:return cS;case 35668:case 35672:return uS;case 35669:case 35673:return dS;case 5125:return fS;case 36294:return hS;case 36295:return pS;case 36296:return mS;case 35678:case 36198:case 36298:case 36306:case 35682:return gS;case 35679:case 36299:case 36307:return _S;case 35680:case 36300:case 36308:case 36293:return vS;case 36289:case 36303:case 36311:case 36292:return xS}}class MS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=eS(t.type)}}class bS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=SS(t.type)}}class yS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const zo=/(\w+)(\])?(\[|\.)?/g;function cd(n,e){n.seq.push(e),n.map[e.id]=e}function ES(n,e,t){const i=n.name,s=i.length;for(zo.lastIndex=0;;){const r=zo.exec(i),a=zo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){cd(t,c===void 0?new MS(o,n,e):new bS(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new yS(o),cd(t,f)),t=f}}}class ua{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);ES(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function ud(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const TS=37297;let AS=0;function wS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const dd=new Ze;function RS(n){st._getMatrix(dd,st.workingColorSpace,n);const e=`mat3( ${dd.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case ba:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function fd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+wS(n.getShaderSource(e),o)}else return r}function CS(n,e){const t=RS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const PS={[Gf]:"Linear",[Wf]:"Reinhard",[Xf]:"Cineon",[qf]:"ACESFilmic",[Kf]:"AgX",[Zf]:"Neutral",[Yf]:"Custom"};function DS(n,e){const t=PS[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ta=new H;function LS(){st.getLuminanceCoefficients(ta);const n=ta.x.toFixed(4),e=ta.y.toFixed(4),t=ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function US(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function NS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ys(n){return n!==""}function hd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const FS=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(n){return n.replace(FS,BS)}const OS=new Map;function BS(n,e){let t=tt[e];if(t===void 0){const i=OS.get(e);if(i!==void 0)t=tt[i],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ql(t)}const HS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function md(n){return n.replace(HS,VS)}function VS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const zS={[ra]:"SHADOWMAP_TYPE_PCF",[qs]:"SHADOWMAP_TYPE_VSM"};function kS(n){return zS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const GS={[qi]:"ENVMAP_TYPE_CUBE",[ws]:"ENVMAP_TYPE_CUBE",[za]:"ENVMAP_TYPE_CUBE_UV"};function WS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":GS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const XS={[ws]:"ENVMAP_MODE_REFRACTION"};function qS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":XS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const YS={[kf]:"ENVMAP_BLENDING_MULTIPLY",[Cg]:"ENVMAP_BLENDING_MIX",[Pg]:"ENVMAP_BLENDING_ADD"};function KS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":YS[n.combine]||"ENVMAP_BLENDING_NONE"}function ZS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function JS(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=kS(t),c=WS(t),u=qS(t),f=KS(t),d=ZS(t),h=IS(t),_=US(r),b=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ys).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ys).join(`
`),p.length>0&&(p+=`
`)):(m=[gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),p=[gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?tt.tonemapping_pars_fragment:"",t.toneMapping!==kn?DS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,CS("linearToOutputTexel",t.outputColorSpace),LS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ys).join(`
`)),a=ql(a),a=hd(a,t),a=pd(a,t),o=ql(o),o=hd(o,t),o=pd(o,t),a=md(a),o=md(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const P=y+m+a,x=y+p+o,T=ud(s,s.VERTEX_SHADER,P),A=ud(s,s.FRAGMENT_SHADER,x);s.attachShader(b,T),s.attachShader(b,A),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function D(O){if(n.debug.checkShaderErrors){const G=s.getProgramInfoLog(b)||"",K=s.getShaderInfoLog(T)||"",V=s.getShaderInfoLog(A)||"",X=G.trim(),ee=K.trim(),z=V.trim();let ie=!0,Q=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,b,T,A);else{const N=fd(s,T,"vertex"),$=fd(s,A,"fragment");ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+X+`
`+N+`
`+$)}else X!==""?We("WebGLProgram: Program Info Log:",X):(ee===""||z==="")&&(Q=!1);Q&&(O.diagnostics={runnable:ie,programLog:X,vertexShader:{log:ee,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(T),s.deleteShader(A),v=new ua(s,b),w=NS(s,b)}let v;this.getUniforms=function(){return v===void 0&&D(this),v};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(b,TS)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=AS++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=A,this}let $S=0;class QS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new jS(e),t.set(e,i)),i}}class jS{constructor(e){this.id=$S++,this.code=e,this.usedTimes=0}}function eM(n){return n===Yi||n===xa||n===Sa}function tM(n,e,t,i,s,r){const a=new ah,o=new QS,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function b(v,w,L,O,G,K){const V=O.fog,X=G.geometry,ee=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?O.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ie=e.get(v.envMap||ee,z),Q=ie&&ie.mapping===za?ie.image.height:null,N=h[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&We("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const $=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,_e=$!==void 0?$.length:0;let Ee=0;X.morphAttributes.position!==void 0&&(Ee=1),X.morphAttributes.normal!==void 0&&(Ee=2),X.morphAttributes.color!==void 0&&(Ee=3);let je,Je,Ye,te;if(N){const Mt=On[N];je=Mt.vertexShader,Je=Mt.fragmentShader}else{je=v.vertexShader,Je=v.fragmentShader;const Mt=o.getVertexShaderStage(v),ct=o.getFragmentShaderStage(v);o.update(v,Mt,ct),Ye=Mt.id,te=ct.id}const ce=n.getRenderTarget(),Pe=n.state.buffers.depth.getReversed(),ke=G.isInstancedMesh===!0,De=G.isBatchedMesh===!0,R=!!v.map,I=!!v.matcap,W=!!ie,se=!!v.aoMap,re=!!v.lightMap,j=!!v.bumpMap&&v.wireframe===!1,de=!!v.normalMap,fe=!!v.displacementMap,he=!!v.emissiveMap,ae=!!v.metalnessMap,Re=!!v.roughnessMap,C=v.anisotropy>0,Le=v.clearcoat>0,be=v.dispersion>0,E=v.retroreflectivity>0,g=v.iridescence>0,U=v.sheen>0,k=v.transmission>0,Z=C&&!!v.anisotropyMap,pe=Le&&!!v.clearcoatMap,ge=Le&&!!v.clearcoatNormalMap,ne=Le&&!!v.clearcoatRoughnessMap,oe=g&&!!v.iridescenceMap,me=g&&!!v.iridescenceThicknessMap,Ie=U&&!!v.sheenColorMap,xe=U&&!!v.sheenRoughnessMap,ve=!!v.specularMap,Ve=!!v.specularColorMap,Ge=!!v.specularIntensityMap,$e=k&&!!v.transmissionMap,B=k&&!!v.thicknessMap,Se=!!v.gradientMap,le=!!v.alphaMap,Me=v.alphaTest>0,Ce=!!v.alphaHash,ue=!!v.extensions;let ze=kn;v.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(ze=n.toneMapping);const Be={shaderID:N,shaderType:v.type,shaderName:v.name,vertexShader:je,fragmentShader:Je,defines:v.defines,customVertexShaderID:Ye,customFragmentShaderID:te,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:De,batchingColor:De&&G._colorsTexture!==null,instancing:ke,instancingColor:ke&&G.instanceColor!==null,instancingMorph:ke&&G.morphTexture!==null,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:R,matcap:I,envMap:W,envMapMode:W&&ie.mapping,envMapCubeUVHeight:Q,aoMap:se,lightMap:re,bumpMap:j,normalMap:de,displacementMap:fe,emissiveMap:he,normalMapObjectSpace:de&&v.normalMapType===Ig,normalMapTangentSpace:de&&v.normalMapType===bu,packedNormalMap:de&&v.normalMapType===bu&&eM(v.normalMap.format),metalnessMap:ae,roughnessMap:Re,anisotropy:C,anisotropyMap:Z,clearcoat:Le,clearcoatMap:pe,clearcoatNormalMap:ge,clearcoatRoughnessMap:ne,dispersion:be,retroreflection:E,iridescence:g,iridescenceMap:oe,iridescenceThicknessMap:me,sheen:U,sheenColorMap:Ie,sheenRoughnessMap:xe,specularMap:ve,specularColorMap:Ve,specularIntensityMap:Ge,transmission:k,transmissionMap:$e,thicknessMap:B,gradientMap:Se,opaque:v.transparent===!1&&v.blending===nr&&v.alphaToCoverage===!1,alphaMap:le,alphaTest:Me,alphaHash:Ce,combine:v.combine,mapUv:R&&_(v.map.channel),aoMapUv:se&&_(v.aoMap.channel),lightMapUv:re&&_(v.lightMap.channel),bumpMapUv:j&&_(v.bumpMap.channel),normalMapUv:de&&_(v.normalMap.channel),displacementMapUv:fe&&_(v.displacementMap.channel),emissiveMapUv:he&&_(v.emissiveMap.channel),metalnessMapUv:ae&&_(v.metalnessMap.channel),roughnessMapUv:Re&&_(v.roughnessMap.channel),anisotropyMapUv:Z&&_(v.anisotropyMap.channel),clearcoatMapUv:pe&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ge&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:me&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(v.sheenRoughnessMap.channel),specularMapUv:ve&&_(v.specularMap.channel),specularColorMapUv:Ve&&_(v.specularColorMap.channel),specularIntensityMapUv:Ge&&_(v.specularIntensityMap.channel),transmissionMapUv:$e&&_(v.transmissionMap.channel),thicknessMapUv:B&&_(v.thicknessMap.channel),alphaMapUv:le&&_(v.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(de||C),vertexNormals:!!X.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!X.attributes.uv&&(R||le),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||X.attributes.normal===void 0&&de===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Pe,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Ee,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:R&&v.map.isVideoTexture===!0&&st.getTransfer(v.map.colorSpace)===ht,decodeVideoTextureEmissive:he&&v.emissiveMap.isVideoTexture===!0&&st.getTransfer(v.emissiveMap.colorSpace)===ht,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ri,flipSided:v.side===sn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ue&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&v.extensions.multiDraw===!0||De)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function m(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)w.push(L),w.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(p(w,v),y(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function p(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function y(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function P(v){const w=h[v.type];let L;if(w){const O=On[w];L=b0.clone(O.uniforms)}else L=v.uniforms;return L}function x(v,w){let L=u.get(w);return L!==void 0?++L.usedTimes:(L=new JS(n,w,v,s),c.push(L),u.set(w,L)),L}function T(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function D(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:P,acquireProgram:x,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:D}}function nM(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function iM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function _d(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function vd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function o(d,h,_,b,m,p){let y=n[e];return y===void 0?(y={id:d.id,object:d,geometry:h,material:_,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:m,group:p},n[e]=y):(y.id=d.id,y.object=d,y.geometry=h,y.material=_,y.materialVariant=a(d),y.groupOrder=b,y.renderOrder=d.renderOrder,y.z=m,y.group=p),e++,y}function l(d,h,_,b,m,p,y){y.reversedDepth===!0&&(m=-m);const P=o(d,h,_,b,m,p);_.transmission>0?i.push(P):_.transparent===!0?s.push(P):t.push(P)}function c(d,h,_,b,m,p){const y=o(d,h,_,b,m,p);_.transmission>0?i.unshift(y):_.transparent===!0?s.unshift(y):t.unshift(y)}function u(d,h){t.length>1&&t.sort(d||iM),i.length>1&&i.sort(h||_d),s.length>1&&s.sort(h||_d)}function f(){for(let d=e,h=n.length;d<h;d++){const _=n[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function sM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new vd,n.set(i,[a])):s>=r.length?(a=new vd,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function rM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new lt};break;case"SpotLight":t={position:new H,direction:new H,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function aM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let oM=0;function lM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function cM(n){const e=new rM,t=aM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const s=new H,r=new At,a=new At;function o(c){let u=0,f=0,d=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let h=0,_=0,b=0,m=0,p=0,y=0,P=0,x=0,T=0,A=0,D=0,v=0,w=0,L=0;c.sort(lM);for(let G=0,K=c.length;G<K;G++){const V=c[G],X=V.color,ee=V.intensity,z=V.distance;let ie=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Yi?ie=V.shadow.map.texture:ie=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)u+=X.r*ee,f+=X.g*ee,d+=X.b*ee;else if(V.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(V.sh.coefficients[Q],ee);L++}else if(V.isSunLight){const Q=e.get(V);if(Q.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const N=V.shadow,$=t.get(V);$.shadowIntensity=N.intensity,$.shadowBias=N.bias,$.shadowNormalBias=N.normalBias,$.shadowRadius=N.radius,$.shadowMapSize.copy(N.mapSize).multiply(N.getFrameExtents()),i.sunShadow[_]=$,i.sunShadowMap[_]=ie;const _e=N.getViewportCount();for(let Ee=0;Ee<_e;Ee++)i.sunShadowMatrix[b+Ee]=N.getMatrix(Ee),i.sunShadowCascade[b+Ee]=N._cascadeData[Ee];b+=_e,_++}i.sun[h]=Q,h++}else if(V.isDirectionalLight){const Q=e.get(V);if(Q.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const N=V.shadow,$=t.get(V);$.shadowIntensity=N.intensity,$.shadowBias=N.bias,$.shadowNormalBias=N.normalBias,$.shadowRadius=N.radius,$.shadowMapSize=N.mapSize,i.directionalShadow[m]=$,i.directionalShadowMap[m]=ie,i.directionalShadowMatrix[m]=V.shadow.matrix,T++}i.directional[m]=Q,m++}else if(V.isSpotLight){const Q=e.get(V);Q.position.setFromMatrixPosition(V.matrixWorld),Q.color.copy(X).multiplyScalar(ee),Q.distance=z,Q.coneCos=Math.cos(V.angle),Q.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),Q.decay=V.decay,i.spot[y]=Q;const N=V.shadow;if(V.map&&(i.spotLightMap[v]=V.map,v++,N.updateMatrices(V),V.castShadow&&w++),i.spotLightMatrix[y]=N.matrix,V.castShadow){const $=t.get(V);$.shadowIntensity=N.intensity,$.shadowBias=N.bias,$.shadowNormalBias=N.normalBias,$.shadowRadius=N.radius,$.shadowMapSize=N.mapSize,i.spotShadow[y]=$,i.spotShadowMap[y]=ie,D++}y++}else if(V.isRectAreaLight){const Q=e.get(V);Q.color.copy(X).multiplyScalar(ee),Q.halfWidth.set(V.width*.5,0,0),Q.halfHeight.set(0,V.height*.5,0),i.rectArea[P]=Q,P++}else if(V.isPointLight){const Q=e.get(V);if(Q.color.copy(V.color).multiplyScalar(V.intensity),Q.distance=V.distance,Q.decay=V.decay,V.castShadow){const N=V.shadow,$=t.get(V);$.shadowIntensity=N.intensity,$.shadowBias=N.bias,$.shadowNormalBias=N.normalBias,$.shadowRadius=N.radius,$.shadowMapSize=N.mapSize,$.shadowCameraNear=N.camera.near,$.shadowCameraFar=N.camera.far,i.pointShadow[p]=$,i.pointShadowMap[p]=ie,i.pointShadowMatrix[p]=V.shadow.matrix,A++}i.point[p]=Q,p++}else if(V.isHemisphereLight){const Q=e.get(V);Q.skyColor.copy(V.color).multiplyScalar(ee),Q.groundColor.copy(V.groundColor).multiplyScalar(ee),i.hemi[x]=Q,x++}}P>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const O=i.hash;(O.sunLength!==h||O.directionalLength!==m||O.pointLength!==p||O.spotLength!==y||O.rectAreaLength!==P||O.hemiLength!==x||O.numSunShadows!==_||O.numDirectionalShadows!==T||O.numPointShadows!==A||O.numSpotShadows!==D||O.numSpotMaps!==v||O.numLightProbes!==L)&&(i.sun.length=h,i.directional.length=m,i.spot.length=y,i.rectArea.length=P,i.point.length=p,i.hemi.length=x,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=D,i.spotShadowMap.length=D,i.spotLightMatrix.length=D+v-w,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=L,O.sunLength=h,O.directionalLength=m,O.pointLength=p,O.spotLength=y,O.rectAreaLength=P,O.hemiLength=x,O.numSunShadows=_,O.numDirectionalShadows=T,O.numPointShadows=A,O.numSpotShadows=D,O.numSpotMaps=v,O.numLightProbes=L,i.version=oM++)}function l(c,u){let f=0,d=0,h=0,_=0,b=0,m=0;const p=u.matrixWorldInverse;for(let y=0,P=c.length;y<P;y++){const x=c[y];if(x.isSunLight){const T=i.sun[f];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(p),f++}else if(x.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),d++}else if(x.isSpotLight){const T=i.spot[_];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),_++}else if(x.isRectAreaLight){const T=i.rectArea[b];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),b++}else if(x.isPointLight){const T=i.point[h];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),h++}else if(x.isHemisphereLight){const T=i.hemi[m];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function xd(n){const e=new cM(n),t=[],i=[],s=[];function r(d){f.camera=d,t.length=0,i.length=0,s.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function uM(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new xd(n),e.set(s,[o])):r>=a.length?(o=new xd(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const dM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fM=`uniform sampler2D shadow_pass;
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
}`,hM=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],pM=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Sd=new At,ks=new H,ko=new H;function mM(n,e,t){let i=new uh;const s=new rt,r=new rt,a=new wt,o=new A0,l=new w0,c={},u=t.maxTextureSize,f={[Xi]:sn,[sn]:Xi,[ri]:ri},d=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:dM,fragmentShader:fM}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const _=new Ht;_.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new cn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ra;let p=this.type;this.render=function(A,D,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===ug&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ra);const w=n.getRenderTarget(),L=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),G=n.state;G.setBlending(li),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const K=p!==this.type;K&&D.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(X=>X.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,X=A.length;V<X;V++){const ee=A[V],z=ee.shadow;if(z===void 0){We("WebGLShadowMap:",ee,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ie=z.getFrameExtents();s.multiply(ie),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,z.mapSize.y=r.y));const Q=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=Q,z.map===null||K===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===qs){if(ee.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new An(s.x,s.y,{format:Yi,type:Xn,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),z.map.texture.name=ee.name+".shadowMap",z.map.depthTexture=new pr(s.x,s.y,Hn),z.map.depthTexture.name=ee.name+".shadowMapDepth",z.map.depthTexture.format=mi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Bt,z.map.depthTexture.magFilter=Bt}else ee.isPointLight?(z.map=new xh(s.x),z.map.depthTexture=new v0(s.x,Wn)):(z.map=new An(s.x,s.y),z.map.depthTexture=new pr(s.x,s.y,Wn)),z.map.depthTexture.name=ee.name+".shadowMap",z.map.depthTexture.format=mi,this.type===ra?(z.map.depthTexture.compareFunction=Q?Sc:xc,z.map.depthTexture.minFilter=Xt,z.map.depthTexture.magFilter=Xt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Bt,z.map.depthTexture.magFilter=Bt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);const N=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();ee.isPointLight!==!0&&z.updateMatrices(ee,v);for(let $=0;$<N;$++){const _e=z.getCamera($);if(ee.isPointLight){const Ee=z.camera,je=z.matrix,Je=ee.distance||Ee.far;Je!==Ee.far&&(Ee.far=Je,Ee.updateProjectionMatrix()),ks.setFromMatrixPosition(ee.matrixWorld),Ee.position.copy(ks),ko.copy(Ee.position),ko.add(hM[$]),Ee.up.copy(pM[$]),Ee.lookAt(ko),Ee.updateMatrixWorld(),je.makeTranslation(-ks.x,-ks.y,-ks.z),Sd.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Sd,Ee.coordinateSystem,Ee.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,$),n.clear();else{$===0&&(n.setRenderTarget(z.map),n.clear());const Ee=z.getViewport($);a.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),G.viewport(a)}i=z.getFrustum($),x(D,v,_e,ee,this.type)}z.isPointLightShadow!==!0&&this.type===qs&&y(z,v),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,L,O)};function y(A,D){const v=e.update(b);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null?A.mapPass=new An(s.x,s.y,{format:Yi,type:Xn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(D,null,v,d,b,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(D,null,v,h,b,null)}function P(A,D,v,w){let L=null;const O=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)L=O;else if(L=v.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const G=L.uuid,K=D.uuid;let V=c[G];V===void 0&&(V={},c[G]=V);let X=V[K];X===void 0&&(X=L.clone(),V[K]=X,D.addEventListener("dispose",T)),L=X}if(L.visible=D.visible,L.wireframe=D.wireframe,w===qs?L.side=D.shadowSide!==null?D.shadowSide:D.side:L.side=D.shadowSide!==null?D.shadowSide:f[D.side],L.alphaMap=D.alphaMap,L.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,L.map=D.map,L.clipShadows=D.clipShadows,L.clippingPlanes=D.clippingPlanes,L.clipIntersection=D.clipIntersection,L.displacementMap=D.displacementMap,L.displacementScale=D.displacementScale,L.displacementBias=D.displacementBias,L.wireframeLinewidth=D.wireframeLinewidth,L.linewidth=D.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const G=n.properties.get(L);G.light=v}return L}function x(A,D,v,w,L){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&L===qs)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);const K=e.update(A),V=A.material;if(Array.isArray(V)){const X=K.groups;for(let ee=0,z=X.length;ee<z;ee++){const ie=X[ee],Q=V[ie.materialIndex];if(Q&&Q.visible){const N=P(A,Q,w,L);A.onBeforeShadow(n,A,D,v,K,N,ie),n.renderBufferDirect(v,null,K,N,A,ie),A.onAfterShadow(n,A,D,v,K,N,ie)}}}else if(V.visible){const X=P(A,V,w,L);A.onBeforeShadow(n,A,D,v,K,X,null),n.renderBufferDirect(v,null,K,X,A,null),A.onAfterShadow(n,A,D,v,K,X,null)}}const G=A.children;for(let K=0,V=G.length;K<V;K++)x(G[K],D,v,w,L)}function T(A){A.target.removeEventListener("dispose",T);for(const v in c){const w=c[v],L=A.target.uuid;L in w&&(w[L].dispose(),delete w[L])}}}function gM(n,e){function t(){let B=!1;const Se=new wt;let le=null;const Me=new wt(0,0,0,0);return{setMask:function(Ce){le!==Ce&&!B&&(n.colorMask(Ce,Ce,Ce,Ce),le=Ce)},setLocked:function(Ce){B=Ce},setClear:function(Ce,ue,ze,Be,Mt){Mt===!0&&(Ce*=Be,ue*=Be,ze*=Be),Se.set(Ce,ue,ze,Be),Me.equals(Se)===!1&&(n.clearColor(Ce,ue,ze,Be),Me.copy(Se))},reset:function(){B=!1,le=null,Me.set(-1,0,0,0)}}}function i(){let B=!1,Se=!1,le=null,Me=null,Ce=null;return{setReversed:function(ue){if(Se!==ue){const ze=e.get("EXT_clip_control");ue?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),Se=ue;const Be=Ce;Ce=null,this.setClear(Be)}},getReversed:function(){return Se},setTest:function(ue){ue?ce(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(ue){le!==ue&&!B&&(n.depthMask(ue),le=ue)},setFunc:function(ue){if(Se&&(ue=Xg[ue]),Me!==ue){switch(ue){case nl:n.depthFunc(n.NEVER);break;case il:n.depthFunc(n.ALWAYS);break;case sl:n.depthFunc(n.LESS);break;case dr:n.depthFunc(n.LEQUAL);break;case rl:n.depthFunc(n.EQUAL);break;case al:n.depthFunc(n.GEQUAL);break;case ol:n.depthFunc(n.GREATER);break;case ll:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=ue}},setLocked:function(ue){B=ue},setClear:function(ue){Ce!==ue&&(Ce=ue,Se&&(ue=1-ue),n.clearDepth(ue))},reset:function(){B=!1,le=null,Me=null,Ce=null,Se=!1}}}function s(){let B=!1,Se=null,le=null,Me=null,Ce=null,ue=null,ze=null,Be=null,Mt=null;return{setTest:function(ct){B||(ct?ce(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(ct){Se!==ct&&!B&&(n.stencilMask(ct),Se=ct)},setFunc:function(ct,_n,Rn){(le!==ct||Me!==_n||Ce!==Rn)&&(n.stencilFunc(ct,_n,Rn),le=ct,Me=_n,Ce=Rn)},setOp:function(ct,_n,Rn){(ue!==ct||ze!==_n||Be!==Rn)&&(n.stencilOp(ct,_n,Rn),ue=ct,ze=_n,Be=Rn)},setLocked:function(ct){B=ct},setClear:function(ct){Mt!==ct&&(n.clearStencil(ct),Mt=ct)},reset:function(){B=!1,Se=null,le=null,Me=null,Ce=null,ue=null,ze=null,Be=null,Mt=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d={},h=new WeakMap,_=[],b=null,m=!1,p=null,y=null,P=null,x=null,T=null,A=null,D=null,v=new lt(0,0,0),w=0,L=!1,O=null,G=null,K=null,V=null,X=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ie=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(Q)[1]),z=ie>=1):Q.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),z=ie>=2);let N=null,$={};const _e=n.getParameter(n.SCISSOR_BOX),Ee=n.getParameter(n.VIEWPORT),je=new wt().fromArray(_e),Je=new wt().fromArray(Ee);function Ye(B,Se,le,Me){const Ce=new Uint8Array(4),ue=n.createTexture();n.bindTexture(B,ue),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<le;ze++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(Se+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return ue}const te={};te[n.TEXTURE_2D]=Ye(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=Ye(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=Ye(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=Ye(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(n.DEPTH_TEST),a.setFunc(dr),j(!1),de(xu),ce(n.CULL_FACE),se(li);function ce(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function Pe(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function ke(B,Se){return d[B]!==Se?(n.bindFramebuffer(B,Se),d[B]=Se,B===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Se),B===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function De(B,Se){let le=_,Me=!1;if(B){le=h.get(Se),le===void 0&&(le=[],h.set(Se,le));const Ce=B.textures;if(le.length!==Ce.length||le[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,ze=Ce.length;ue<ze;ue++)le[ue]=n.COLOR_ATTACHMENT0+ue;le.length=Ce.length,Me=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,Me=!0);Me&&n.drawBuffers(le)}function R(B){return b!==B?(n.useProgram(B),b=B,!0):!1}const I={[ms]:n.FUNC_ADD,[fg]:n.FUNC_SUBTRACT,[hg]:n.FUNC_REVERSE_SUBTRACT};I[pg]=n.MIN,I[mg]=n.MAX;const W={[gg]:n.ZERO,[_g]:n.ONE,[vg]:n.SRC_COLOR,[Vf]:n.SRC_ALPHA,[Eg]:n.SRC_ALPHA_SATURATE,[bg]:n.DST_COLOR,[Sg]:n.DST_ALPHA,[xg]:n.ONE_MINUS_SRC_COLOR,[zf]:n.ONE_MINUS_SRC_ALPHA,[yg]:n.ONE_MINUS_DST_COLOR,[Mg]:n.ONE_MINUS_DST_ALPHA,[Tg]:n.CONSTANT_COLOR,[Ag]:n.ONE_MINUS_CONSTANT_COLOR,[wg]:n.CONSTANT_ALPHA,[Rg]:n.ONE_MINUS_CONSTANT_ALPHA};function se(B,Se,le,Me,Ce,ue,ze,Be,Mt,ct){if(B===li){m===!0&&(Pe(n.BLEND),m=!1);return}if(m===!1&&(ce(n.BLEND),m=!0),B!==dg){if(B!==p||ct!==L){if((y!==ms||T!==ms)&&(n.blendEquation(n.FUNC_ADD),y=ms,T=ms),ct)switch(B){case nr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ei:n.blendFunc(n.ONE,n.ONE);break;case Su:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ot("WebGLState: Invalid blending: ",B);break}else switch(B){case nr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ei:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Su:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mu:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",B);break}P=null,x=null,A=null,D=null,v.set(0,0,0),w=0,p=B,L=ct}return}Ce=Ce||Se,ue=ue||le,ze=ze||Me,(Se!==y||Ce!==T)&&(n.blendEquationSeparate(I[Se],I[Ce]),y=Se,T=Ce),(le!==P||Me!==x||ue!==A||ze!==D)&&(n.blendFuncSeparate(W[le],W[Me],W[ue],W[ze]),P=le,x=Me,A=ue,D=ze),(Be.equals(v)===!1||Mt!==w)&&(n.blendColor(Be.r,Be.g,Be.b,Mt),v.copy(Be),w=Mt),p=B,L=!1}function re(B,Se){B.side===ri?Pe(n.CULL_FACE):ce(n.CULL_FACE);let le=B.side===sn;Se&&(le=!le),j(le),B.blending===nr&&B.transparent===!1?se(li):se(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const Me=B.stencilWrite;o.setTest(Me),Me&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),he(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(B){O!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),O=B)}function de(B){B!==lg?(ce(n.CULL_FACE),B!==G&&(B===xu?n.cullFace(n.BACK):B===cg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),G=B}function fe(B){B!==K&&(z&&n.lineWidth(B),K=B)}function he(B,Se,le){B?(ce(n.POLYGON_OFFSET_FILL),(V!==Se||X!==le)&&(V=Se,X=le,a.getReversed()&&(Se=-Se),n.polygonOffset(Se,le))):Pe(n.POLYGON_OFFSET_FILL)}function ae(B){B?ce(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function Re(B){B===void 0&&(B=n.TEXTURE0+ee-1),N!==B&&(n.activeTexture(B),N=B)}function C(B,Se,le){le===void 0&&(N===null?le=n.TEXTURE0+ee-1:le=N);let Me=$[le];Me===void 0&&(Me={type:void 0,texture:void 0},$[le]=Me),(Me.type!==B||Me.texture!==Se)&&(N!==le&&(n.activeTexture(le),N=le),n.bindTexture(B,Se||te[B]),Me.type=B,Me.texture=Se)}function Le(){const B=$[N];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function be(){try{n.compressedTexImage2D(...arguments)}catch(B){ot("WebGLState:",B)}}function E(){try{n.compressedTexImage3D(...arguments)}catch(B){ot("WebGLState:",B)}}function g(){try{n.texSubImage2D(...arguments)}catch(B){ot("WebGLState:",B)}}function U(){try{n.texSubImage3D(...arguments)}catch(B){ot("WebGLState:",B)}}function k(){try{n.compressedTexSubImage2D(...arguments)}catch(B){ot("WebGLState:",B)}}function Z(){try{n.compressedTexSubImage3D(...arguments)}catch(B){ot("WebGLState:",B)}}function pe(){try{n.texStorage2D(...arguments)}catch(B){ot("WebGLState:",B)}}function ge(){try{n.texStorage3D(...arguments)}catch(B){ot("WebGLState:",B)}}function ne(){try{n.texImage2D(...arguments)}catch(B){ot("WebGLState:",B)}}function oe(){try{n.texImage3D(...arguments)}catch(B){ot("WebGLState:",B)}}function me(B){return f[B]!==void 0?f[B]:n.getParameter(B)}function Ie(B,Se){f[B]!==Se&&(n.pixelStorei(B,Se),f[B]=Se)}function xe(B){je.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),je.copy(B))}function ve(B){Je.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Je.copy(B))}function Ve(B,Se){let le=c.get(Se);le===void 0&&(le=new WeakMap,c.set(Se,le));let Me=le.get(B);Me===void 0&&(Me=n.getUniformBlockIndex(Se,B.name),le.set(B,Me))}function Ge(B,Se){const Me=c.get(Se).get(B);l.get(Se)!==Me&&(n.uniformBlockBinding(Se,Me,B.__bindingPointIndex),l.set(Se,Me))}function $e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},N=null,$={},d={},h=new WeakMap,_=[],b=null,m=!1,p=null,y=null,P=null,x=null,T=null,A=null,D=null,v=new lt(0,0,0),w=0,L=!1,O=null,G=null,K=null,V=null,X=null,je.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ce,disable:Pe,bindFramebuffer:ke,drawBuffers:De,useProgram:R,setBlending:se,setMaterial:re,setFlipSided:j,setCullFace:de,setLineWidth:fe,setPolygonOffset:he,setScissorTest:ae,activeTexture:Re,bindTexture:C,unbindTexture:Le,compressedTexImage2D:be,compressedTexImage3D:E,texImage2D:ne,texImage3D:oe,pixelStorei:Ie,getParameter:me,updateUBOMapping:Ve,uniformBlockBinding:Ge,texStorage2D:pe,texStorage3D:ge,texSubImage2D:g,texSubImage3D:U,compressedTexSubImage2D:k,compressedTexSubImage3D:Z,scissor:xe,viewport:ve,reset:$e}}function _M(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,u=new WeakMap,f=new Set;let d;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,g){return _?new OffscreenCanvas(E,g):Ea("canvas")}function m(E,g,U){let k=1;const Z=be(E);if((Z.width>U||Z.height>U)&&(k=U/Math.max(Z.width,Z.height)),k<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const pe=Math.floor(k*Z.width),ge=Math.floor(k*Z.height);d===void 0&&(d=b(pe,ge));const ne=g?b(pe,ge):d;return ne.width=pe,ne.height=ge,ne.getContext("2d").drawImage(E,0,0,pe,ge),We("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+pe+"x"+ge+")."),ne}else return"data"in E&&We("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function p(E){return E.generateMipmaps}function y(E){n.generateMipmap(E)}function P(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(E,g,U,k,Z,pe=!1){if(E!==null){if(n[E]!==void 0)return n[E];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ge;k&&(ge=e.get("EXT_texture_norm16"),ge||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=g;if(g===n.RED&&(U===n.FLOAT&&(ne=n.R32F),U===n.HALF_FLOAT&&(ne=n.R16F),U===n.UNSIGNED_BYTE&&(ne=n.R8),U===n.UNSIGNED_SHORT&&ge&&(ne=ge.R16_EXT),U===n.SHORT&&ge&&(ne=ge.R16_SNORM_EXT)),g===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(ne=n.R8UI),U===n.UNSIGNED_SHORT&&(ne=n.R16UI),U===n.UNSIGNED_INT&&(ne=n.R32UI),U===n.BYTE&&(ne=n.R8I),U===n.SHORT&&(ne=n.R16I),U===n.INT&&(ne=n.R32I)),g===n.RG&&(U===n.FLOAT&&(ne=n.RG32F),U===n.HALF_FLOAT&&(ne=n.RG16F),U===n.UNSIGNED_BYTE&&(ne=n.RG8),U===n.UNSIGNED_SHORT&&ge&&(ne=ge.RG16_EXT),U===n.SHORT&&ge&&(ne=ge.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(ne=n.RG8UI),U===n.UNSIGNED_SHORT&&(ne=n.RG16UI),U===n.UNSIGNED_INT&&(ne=n.RG32UI),U===n.BYTE&&(ne=n.RG8I),U===n.SHORT&&(ne=n.RG16I),U===n.INT&&(ne=n.RG32I)),g===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),U===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),U===n.UNSIGNED_INT&&(ne=n.RGB32UI),U===n.BYTE&&(ne=n.RGB8I),U===n.SHORT&&(ne=n.RGB16I),U===n.INT&&(ne=n.RGB32I)),g===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),U===n.UNSIGNED_INT&&(ne=n.RGBA32UI),U===n.BYTE&&(ne=n.RGBA8I),U===n.SHORT&&(ne=n.RGBA16I),U===n.INT&&(ne=n.RGBA32I)),g===n.RGB&&(U===n.UNSIGNED_SHORT&&ge&&(ne=ge.RGB16_EXT),U===n.SHORT&&ge&&(ne=ge.RGB16_SNORM_EXT),U===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(ne=n.R11F_G11F_B10F)),g===n.RGBA){const oe=pe?ba:st.getTransfer(Z);U===n.FLOAT&&(ne=n.RGBA32F),U===n.HALF_FLOAT&&(ne=n.RGBA16F),U===n.UNSIGNED_BYTE&&(ne=oe===ht?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT&&ge&&(ne=ge.RGBA16_EXT),U===n.SHORT&&ge&&(ne=ge.RGBA16_SNORM_EXT),U===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function T(E,g){let U;return E?g===null||g===Wn||g===hr?U=n.DEPTH24_STENCIL8:g===Hn?U=n.DEPTH32F_STENCIL8:g===fr&&(U=n.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Wn||g===hr?U=n.DEPTH_COMPONENT24:g===Hn?U=n.DEPTH_COMPONENT32F:g===fr&&(U=n.DEPTH_COMPONENT16),U}function A(E,g){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Bt&&E.minFilter!==Xt?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function D(E){const g=E.target;g.removeEventListener("dispose",D),w(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function v(E){const g=E.target;g.removeEventListener("dispose",v),O(g)}function w(E){const g=i.get(E);if(g.__webglInit===void 0)return;const U=E.source,k=h.get(U);if(k){const Z=k[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&L(E),Object.keys(k).length===0&&h.delete(U)}i.remove(E)}function L(E){const g=i.get(E);n.deleteTexture(g.__webglTexture);const U=E.source,k=h.get(U);delete k[g.__cacheKey],a.memory.textures--}function O(E){const g=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let Z=0;Z<g.__webglFramebuffer[k].length;Z++)n.deleteFramebuffer(g.__webglFramebuffer[k][Z]);else n.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)n.deleteFramebuffer(g.__webglFramebuffer[k]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const U=E.textures;for(let k=0,Z=U.length;k<Z;k++){const pe=i.get(U[k]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),a.memory.textures--),i.remove(U[k])}i.remove(E)}let G=0;function K(){G=0}function V(){return G}function X(E){G=E}function ee(){const E=G;return E>=s.maxTextures&&We("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,E}function z(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function ie(E,g){const U=i.get(E);if(E.isVideoTexture&&C(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&U.__version!==E.version){const k=E.image;if(k===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(U,E,g);return}}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+g)}function Q(E,g){const U=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){Pe(U,E,g);return}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+g)}function N(E,g){const U=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){Pe(U,E,g);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+g)}function $(E,g){const U=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&U.__version!==E.version){ke(U,E,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+g)}const _e={[cl]:n.REPEAT,[ai]:n.CLAMP_TO_EDGE,[ul]:n.MIRRORED_REPEAT},Ee={[Bt]:n.NEAREST,[Dg]:n.NEAREST_MIPMAP_NEAREST,[Cr]:n.NEAREST_MIPMAP_LINEAR,[Xt]:n.LINEAR,[lo]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},je={[Ng]:n.NEVER,[Vg]:n.ALWAYS,[Fg]:n.LESS,[xc]:n.LEQUAL,[Og]:n.EQUAL,[Sc]:n.GEQUAL,[Bg]:n.GREATER,[Hg]:n.NOTEQUAL};function Je(E,g){if(g.type===Hn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Xt||g.magFilter===lo||g.magFilter===Cr||g.magFilter===Vi||g.minFilter===Xt||g.minFilter===lo||g.minFilter===Cr||g.minFilter===Vi)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,_e[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,_e[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,_e[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Ee[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Ee[g.minFilter]),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,je[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Bt||g.minFilter!==Cr&&g.minFilter!==Vi||g.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ye(E,g){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",D));const k=g.source;let Z=h.get(k);Z===void 0&&(Z={},h.set(k,Z));const pe=z(g);if(pe!==E.__cacheKey){Z[pe]===void 0&&(Z[pe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Z[pe].usedTimes++;const ge=Z[E.__cacheKey];ge!==void 0&&(Z[E.__cacheKey].usedTimes--,ge.usedTimes===0&&L(g)),E.__cacheKey=pe,E.__webglTexture=Z[pe].texture}return U}function te(E,g,U){return Math.floor(Math.floor(E/U)/g)}function ce(E,g,U,k){const pe=E.updateRanges;if(pe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,U,k,g.data);else{pe.sort((Ie,xe)=>Ie.start-xe.start);let ge=0;for(let Ie=1;Ie<pe.length;Ie++){const xe=pe[ge],ve=pe[Ie],Ve=xe.start+xe.count,Ge=te(ve.start,g.width,4),$e=te(xe.start,g.width,4);ve.start<=Ve+1&&Ge===$e&&te(ve.start+ve.count-1,g.width,4)===Ge?xe.count=Math.max(xe.count,ve.start+ve.count-xe.start):(++ge,pe[ge]=ve)}pe.length=ge+1;const ne=t.getParameter(n.UNPACK_ROW_LENGTH),oe=t.getParameter(n.UNPACK_SKIP_PIXELS),me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Ie=0,xe=pe.length;Ie<xe;Ie++){const ve=pe[Ie],Ve=Math.floor(ve.start/4),Ge=Math.ceil(ve.count/4),$e=Ve%g.width,B=Math.floor(Ve/g.width),Se=Ge,le=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(n.UNPACK_SKIP_ROWS,B),t.texSubImage2D(n.TEXTURE_2D,0,$e,B,Se,le,U,k,g.data)}E.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ne),t.pixelStorei(n.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(n.UNPACK_SKIP_ROWS,me)}}function Pe(E,g,U){let k=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=n.TEXTURE_3D);const Z=Ye(E,g),pe=g.source;t.bindTexture(k,E.__webglTexture,n.TEXTURE0+U);const ge=i.get(pe);if(pe.version!==ge.__version||Z===!0){if(t.activeTexture(n.TEXTURE0+U),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const le=st.getPrimaries(st.workingColorSpace),Me=g.colorSpace===wi?null:st.getPrimaries(g.colorSpace),Ce=g.colorSpace===wi||le===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let oe=m(g.image,!1,s.maxTextureSize);oe=Le(g,oe);const me=r.convert(g.format,g.colorSpace),Ie=r.convert(g.type);let xe=x(g.internalFormat,me,Ie,g.normalized,g.colorSpace,g.isVideoTexture);Je(k,g);let ve;const Ve=g.mipmaps,Ge=g.isVideoTexture!==!0,$e=ge.__version===void 0||Z===!0,B=pe.dataReady,Se=A(g,oe);if(g.isDepthTexture)xe=T(g.format===zi,g.type),$e&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,xe,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,xe,oe.width,oe.height,0,me,Ie,null));else if(g.isDataTexture)if(Ve.length>0){Ge&&$e&&t.texStorage2D(n.TEXTURE_2D,Se,xe,Ve[0].width,Ve[0].height);for(let le=0,Me=Ve.length;le<Me;le++)ve=Ve[le],Ge?B&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,ve.width,ve.height,me,Ie,ve.data):t.texImage2D(n.TEXTURE_2D,le,xe,ve.width,ve.height,0,me,Ie,ve.data);g.generateMipmaps=!1}else Ge?($e&&t.texStorage2D(n.TEXTURE_2D,Se,xe,oe.width,oe.height),B&&ce(g,oe,me,Ie)):t.texImage2D(n.TEXTURE_2D,0,xe,oe.width,oe.height,0,me,Ie,oe.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ge&&$e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,xe,Ve[0].width,Ve[0].height,oe.depth);for(let le=0,Me=Ve.length;le<Me;le++)if(ve=Ve[le],g.format!==bn)if(me!==null)if(Ge){if(B)if(g.layerUpdates.size>0){const Ce=Qu(ve.width,ve.height,g.format,g.type);for(const ue of g.layerUpdates){const ze=ve.data.subarray(ue*Ce/ve.data.BYTES_PER_ELEMENT,(ue+1)*Ce/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,ue,ve.width,ve.height,1,me,ze)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,ve.width,ve.height,oe.depth,me,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,xe,ve.width,ve.height,oe.depth,0,ve.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,ve.width,ve.height,oe.depth,me,Ie,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,xe,ve.width,ve.height,oe.depth,0,me,Ie,ve.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Ge&&$e&&t.texStorage2D(n.TEXTURE_2D,Se,xe,Ve[0].width,Ve[0].height);for(let le=0,Me=Ve.length;le<Me;le++)ve=Ve[le],g.format!==bn?me!==null?Ge?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,ve.width,ve.height,me,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,le,xe,ve.width,ve.height,0,ve.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?B&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,ve.width,ve.height,me,Ie,ve.data):t.texImage2D(n.TEXTURE_2D,le,xe,ve.width,ve.height,0,me,Ie,ve.data)}else if(g.isDataArrayTexture)if(Ge){if($e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,xe,oe.width,oe.height,oe.depth),B)if(g.layerUpdates.size>0){const le=Qu(oe.width,oe.height,g.format,g.type);for(const Me of g.layerUpdates){const Ce=oe.data.subarray(Me*le/oe.data.BYTES_PER_ELEMENT,(Me+1)*le/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Me,oe.width,oe.height,1,me,Ie,Ce)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,me,Ie,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,oe.width,oe.height,oe.depth,0,me,Ie,oe.data);else if(g.isData3DTexture)Ge?($e&&t.texStorage3D(n.TEXTURE_3D,Se,xe,oe.width,oe.height,oe.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,me,Ie,oe.data)):t.texImage3D(n.TEXTURE_3D,0,xe,oe.width,oe.height,oe.depth,0,me,Ie,oe.data);else if(g.isFramebufferTexture){if($e)if(Ge)t.texStorage2D(n.TEXTURE_2D,Se,xe,oe.width,oe.height);else{let le=oe.width,Me=oe.height;for(let Ce=0;Ce<Se;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,xe,le,Me,0,me,Ie,null),le>>=1,Me>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const le=n.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),oe.parentNode!==le){le.appendChild(oe),f.add(g),le.onpaint=Me=>{const Ce=Me.changedElements;for(const ue of f)Ce.includes(ue.image)&&(ue.needsUpdate=!0)},le.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,oe);else{const Ce=n.RGBA,ue=n.RGBA,ze=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ce,ue,ze,oe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ve.length>0){if(Ge&&$e){const le=be(Ve[0]);t.texStorage2D(n.TEXTURE_2D,Se,xe,le.width,le.height)}for(let le=0,Me=Ve.length;le<Me;le++)ve=Ve[le],Ge?B&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,me,Ie,ve):t.texImage2D(n.TEXTURE_2D,le,xe,me,Ie,ve);g.generateMipmaps=!1}else if(Ge){if($e){const le=be(oe);t.texStorage2D(n.TEXTURE_2D,Se,xe,le.width,le.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Ie,oe)}else t.texImage2D(n.TEXTURE_2D,0,xe,me,Ie,oe);p(g)&&y(k),ge.__version=pe.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function ke(E,g,U){if(g.image.length!==6)return;const k=Ye(E,g),Z=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+U);const pe=i.get(Z);if(Z.version!==pe.__version||k===!0){t.activeTexture(n.TEXTURE0+U);const ge=st.getPrimaries(st.workingColorSpace),ne=g.colorSpace===wi?null:st.getPrimaries(g.colorSpace),oe=g.colorSpace===wi||ge===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const me=g.isCompressedTexture||g.image[0].isCompressedTexture,Ie=g.image[0]&&g.image[0].isDataTexture,xe=[];for(let ue=0;ue<6;ue++)!me&&!Ie?xe[ue]=m(g.image[ue],!0,s.maxCubemapSize):xe[ue]=Ie?g.image[ue].image:g.image[ue],xe[ue]=Le(g,xe[ue]);const ve=xe[0],Ve=r.convert(g.format,g.colorSpace),Ge=r.convert(g.type),$e=x(g.internalFormat,Ve,Ge,g.normalized,g.colorSpace),B=g.isVideoTexture!==!0,Se=pe.__version===void 0||k===!0,le=Z.dataReady;let Me=A(g,ve);Je(n.TEXTURE_CUBE_MAP,g);let Ce;if(me){B&&Se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,$e,ve.width,ve.height);for(let ue=0;ue<6;ue++){Ce=xe[ue].mipmaps;for(let ze=0;ze<Ce.length;ze++){const Be=Ce[ze];g.format!==bn?Ve!==null?B?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze,0,0,Be.width,Be.height,Ve,Be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze,$e,Be.width,Be.height,0,Be.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze,0,0,Be.width,Be.height,Ve,Ge,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze,$e,Be.width,Be.height,0,Ve,Ge,Be.data)}}}else{if(Ce=g.mipmaps,B&&Se){Ce.length>0&&Me++;const ue=be(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,$e,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(Ie){B?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,xe[ue].width,xe[ue].height,Ve,Ge,xe[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,$e,xe[ue].width,xe[ue].height,0,Ve,Ge,xe[ue].data);for(let ze=0;ze<Ce.length;ze++){const Mt=Ce[ze].image[ue].image;B?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze+1,0,0,Mt.width,Mt.height,Ve,Ge,Mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze+1,$e,Mt.width,Mt.height,0,Ve,Ge,Mt.data)}}else{B?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ve,Ge,xe[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,$e,Ve,Ge,xe[ue]);for(let ze=0;ze<Ce.length;ze++){const Be=Ce[ze];B?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze+1,0,0,Ve,Ge,Be.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze+1,$e,Ve,Ge,Be.image[ue])}}}p(g)&&y(n.TEXTURE_CUBE_MAP),pe.__version=Z.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function De(E,g,U,k,Z,pe){const ge=r.convert(U.format,U.colorSpace),ne=r.convert(U.type),oe=x(U.internalFormat,ge,ne,U.normalized,U.colorSpace),me=i.get(g),Ie=i.get(U);if(Ie.__renderTarget=g,!me.__hasExternalTextures){const xe=Math.max(1,g.width>>pe),ve=Math.max(1,g.height>>pe);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,pe,oe,xe,ve,g.depth,0,ge,ne,null):t.texImage2D(Z,pe,oe,xe,ve,0,ge,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Re(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,Z,Ie.__webglTexture,0,ae(g)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,Z,Ie.__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function R(E,g,U){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer){const k=g.depthTexture,Z=k&&k.isDepthTexture?k.type:null,pe=T(g.stencilBuffer,Z),ge=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Re(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae(g),pe,g.width,g.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae(g),pe,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,pe,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,E)}else{const k=g.textures;for(let Z=0;Z<k.length;Z++){const pe=k[Z],ge=r.convert(pe.format,pe.colorSpace),ne=r.convert(pe.type),oe=x(pe.internalFormat,ge,ne,pe.normalized,pe.colorSpace);Re(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae(g),oe,g.width,g.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae(g),oe,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,oe,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function I(E,g,U){const k=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=i.get(g.depthTexture);if(Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,g.depthTexture.addEventListener("dispose",D)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Je(n.TEXTURE_CUBE_MAP,g.depthTexture);const me=r.convert(g.depthTexture.format),Ie=r.convert(g.depthTexture.type);let xe;g.depthTexture.format===mi?xe=n.DEPTH_COMPONENT24:g.depthTexture.format===zi&&(xe=n.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,xe,g.width,g.height,0,me,Ie,null)}}else ie(g.depthTexture,0);const pe=Z.__webglTexture,ge=ae(g),ne=k?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,oe=g.depthTexture.format===zi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===mi)Re(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ne,pe,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,oe,ne,pe,0);else if(g.depthTexture.format===zi)Re(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ne,pe,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,oe,ne,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function W(E){const g=i.get(E),U=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const k=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",Z)};k.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=k}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(U)for(let k=0;k<6;k++)I(g.__webglFramebuffer[k],E,k);else{const k=E.texture.mipmaps;k&&k.length>0?I(g.__webglFramebuffer[0],E,0):I(g.__webglFramebuffer,E,0)}else if(U){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=n.createRenderbuffer(),R(g.__webglDepthbuffer[k],E,!1);else{const Z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=g.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,pe)}}else{const k=E.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),R(g.__webglDepthbuffer,E,!1);else{const Z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,pe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(E,g,U){const k=i.get(E);g!==void 0&&De(k.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&W(E)}function re(E){const g=E.texture,U=i.get(E),k=i.get(g);E.addEventListener("dispose",v);const Z=E.textures,pe=E.isWebGLCubeRenderTarget===!0,ge=Z.length>1;if(ge||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=g.version,a.memory.textures++),pe){U.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[ne]=[];for(let oe=0;oe<g.mipmaps.length;oe++)U.__webglFramebuffer[ne][oe]=n.createFramebuffer()}else U.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let ne=0;ne<g.mipmaps.length;ne++)U.__webglFramebuffer[ne]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(ge)for(let ne=0,oe=Z.length;ne<oe;ne++){const me=i.get(Z[ne]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Re(E)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ne=0;ne<Z.length;ne++){const oe=Z[ne];U.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ne]);const me=r.convert(oe.format,oe.colorSpace),Ie=r.convert(oe.type),xe=x(oe.internalFormat,me,Ie,oe.normalized,oe.colorSpace,E.isXRRenderTarget===!0),ve=ae(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,xe,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,U.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),R(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),Je(n.TEXTURE_CUBE_MAP,g);for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0)for(let oe=0;oe<g.mipmaps.length;oe++)De(U.__webglFramebuffer[ne][oe],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe);else De(U.__webglFramebuffer[ne],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(g)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ne=0,oe=Z.length;ne<oe;ne++){const me=Z[ne],Ie=i.get(me);let xe=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(xe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,Ie.__webglTexture),Je(xe,me),De(U.__webglFramebuffer,E,me,n.COLOR_ATTACHMENT0+ne,xe,0),p(me)&&y(xe)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ne=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,k.__webglTexture),Je(ne,g),g.mipmaps&&g.mipmaps.length>0)for(let oe=0;oe<g.mipmaps.length;oe++)De(U.__webglFramebuffer[oe],E,g,n.COLOR_ATTACHMENT0,ne,oe);else De(U.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,ne,0);p(g)&&y(ne),t.unbindTexture()}E.depthBuffer&&W(E)}function j(E){const g=E.textures;for(let U=0,k=g.length;U<k;U++){const Z=g[U];if(p(Z)){const pe=P(E),ge=i.get(Z).__webglTexture;t.bindTexture(pe,ge),y(pe),t.unbindTexture()}}}const de=[],fe=[];function he(E){if(E.samples>0){if(Re(E)===!1){const g=E.textures,U=E.width,k=E.height;let Z=n.COLOR_BUFFER_BIT;const pe=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(E),ne=g.length>1;if(ne)for(let me=0;me<g.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const oe=E.texture.mipmaps;oe&&oe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let me=0;me<g.length;me++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[me]);const Ie=i.get(g[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ie,0)}n.blitFramebuffer(0,0,U,k,0,0,U,k,Z,n.NEAREST),l===!0&&(de.length=0,fe.length=0,de.push(n.COLOR_ATTACHMENT0+me),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(de.push(pe),fe.push(pe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,fe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let me=0;me<g.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,ge.__webglColorRenderbuffer[me]);const Ie=i.get(g[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){const g=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function ae(E){return Math.min(s.maxSamples,E.samples)}function Re(E){const g=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function C(E){const g=a.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function Le(E,g){const U=E.colorSpace,k=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==Ma&&U!==wi&&(st.getTransfer(U)===ht?(k!==bn||Z!==mn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",U)),g}function be(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=K,this.getTextureUnits=V,this.setTextureUnits=X,this.setTexture2D=ie,this.setTexture2DArray=Q,this.setTexture3D=N,this.setTextureCube=$,this.rebindTextures=se,this.setupRenderTarget=re,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Re,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function vM(n,e){function t(i,s=wi){let r;const a=st.getTransfer(s);if(i===mn)return n.UNSIGNED_BYTE;if(i===pc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===mc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===eh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===$f)return n.BYTE;if(i===Qf)return n.SHORT;if(i===fr)return n.UNSIGNED_SHORT;if(i===hc)return n.INT;if(i===Wn)return n.UNSIGNED_INT;if(i===Hn)return n.FLOAT;if(i===Xn)return n.HALF_FLOAT;if(i===th)return n.ALPHA;if(i===nh)return n.RGB;if(i===bn)return n.RGBA;if(i===mi)return n.DEPTH_COMPONENT;if(i===zi)return n.DEPTH_STENCIL;if(i===ih)return n.RED;if(i===gc)return n.RED_INTEGER;if(i===Yi)return n.RG;if(i===_c)return n.RG_INTEGER;if(i===vc)return n.RGBA_INTEGER;if(i===aa||i===oa||i===la||i===ca)if(a===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dl||i===fl||i===hl||i===pl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ml||i===gl||i===_l||i===vl||i===xl||i===xa||i===Sl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ml||i===gl)return a===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===_l)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===vl)return r.COMPRESSED_R11_EAC;if(i===xl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===xa)return r.COMPRESSED_RG11_EAC;if(i===Sl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ml||i===bl||i===yl||i===El||i===Tl||i===Al||i===wl||i===Rl||i===Cl||i===Pl||i===Dl||i===Ll||i===Il||i===Ul)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ml)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===El)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Al)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ll)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Il)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ul)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nl||i===Fl||i===Ol)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Nl)return a===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bl||i===Hl||i===Sa||i===Vl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Bl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const xM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SM=`
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

}`;class MM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new hh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new qn({vertexShader:xM,fragmentShader:SM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new cn(new ka(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bM extends Ji{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,_=null;const b=typeof XRWebGLBinding<"u",m=new MM,p={},y=t.getContextAttributes();let P=null,x=null;const T=[],A=[],D=new rt;let v=null,w=null;const L=new pn;L.viewport=new wt;const O=new pn;O.viewport=new wt;const G=[L,O],K=new C0;let V=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ce=T[te];return ce===void 0&&(ce=new vo,T[te]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(te){let ce=T[te];return ce===void 0&&(ce=new vo,T[te]=ce),ce.getGripSpace()},this.getHand=function(te){let ce=T[te];return ce===void 0&&(ce=new vo,T[te]=ce),ce.getHandSpace()};function ee(te){const ce=A.indexOf(te.inputSource);if(ce===-1)return;const Pe=T[ce];Pe!==void 0&&(Pe.update(te.inputSource,te.frame,c||a),Pe.dispatchEvent({type:te.type,data:te.inputSource}))}function z(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",ie);for(let te=0;te<T.length;te++){const ce=A[te];ce!==null&&(A[te]=null,T[te].disconnect(ce))}V=null,X=null,m.reset();for(const te in p)delete p[te];if(e.setRenderTarget(P),h=null,d=null,f=null,s=null,x=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(D.width,D.height,!1),w!==null){const te=w.camera;te.fov=w.fov,te.zoom=w.zoom,te.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(P=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",z),s.addEventListener("inputsourceschange",ie),y.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(D),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pe=null,ke=null,De=null;y.depth&&(De=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Pe=y.stencil?zi:mi,ke=y.stencil?hr:Wn);const R={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(R),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new An(d.textureWidth,d.textureHeight,{format:bn,type:mn,depthTexture:new pr(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Pe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Pe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,Pe),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new An(h.framebufferWidth,h.framebufferHeight,{format:bn,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(te){for(let ce=0;ce<te.removed.length;ce++){const Pe=te.removed[ce],ke=A.indexOf(Pe);ke>=0&&(A[ke]=null,T[ke].disconnect(Pe))}for(let ce=0;ce<te.added.length;ce++){const Pe=te.added[ce];let ke=A.indexOf(Pe);if(ke===-1){for(let R=0;R<T.length;R++)if(R>=A.length){A.push(Pe),ke=R;break}else if(A[R]===null){A[R]=Pe,ke=R;break}if(ke===-1)break}const De=T[ke];De&&De.connect(Pe)}}const Q=new H,N=new H;function $(te,ce,Pe){Q.setFromMatrixPosition(ce.matrixWorld),N.setFromMatrixPosition(Pe.matrixWorld);const ke=Q.distanceTo(N),De=ce.projectionMatrix.elements,R=Pe.projectionMatrix.elements,I=De[14]/(De[10]-1),W=De[14]/(De[10]+1),se=(De[9]+1)/De[5],re=(De[9]-1)/De[5],j=(De[8]-1)/De[0],de=(R[8]+1)/R[0],fe=I*j,he=I*de,ae=ke/(-j+de),Re=ae*-j;if(ce.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Re),te.translateZ(ae),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),De[10]===-1)te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const C=I+ae,Le=W+ae,be=fe-Re,E=he+(ke-Re),g=se*W/Le*C,U=re*W/Le*C;te.projectionMatrix.makePerspective(be,E,g,U,C,Le),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function _e(te,ce){ce===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ce.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let ce=te.near,Pe=te.far;m.texture!==null&&(m.depthNear>0&&(ce=m.depthNear),m.depthFar>0&&(Pe=m.depthFar)),K.near=O.near=L.near=ce,K.far=O.far=L.far=Pe,(V!==K.near||X!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),V=K.near,X=K.far),K.layers.mask=te.layers.mask|6,L.layers.mask=K.layers.mask&-5,O.layers.mask=K.layers.mask&-3;const ke=te.parent,De=K.cameras;_e(K,ke);for(let R=0;R<De.length;R++)_e(De[R],ke);De.length===2?$(K,L,O):K.projectionMatrix.copy(L.projectionMatrix),w===null&&te.isPerspectiveCamera&&(w={camera:te,fov:te.fov,zoom:te.zoom}),Ee(te,K,ke)};function Ee(te,ce,Pe){Pe===null?te.matrix.copy(ce.matrixWorld):(te.matrix.copy(Pe.matrixWorld),te.matrix.invert(),te.matrix.multiply(ce.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=zl*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=te)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(K)},this.getCameraTexture=function(te){return p[te]};let je=null;function Je(te,ce){if(u=ce.getViewerPose(c||a),_=ce,u!==null){const Pe=u.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let ke=!1;Pe.length!==K.cameras.length&&(K.cameras.length=0,ke=!0);for(let W=0;W<Pe.length;W++){const se=Pe[W];let re=null;if(h!==null)re=h.getViewport(se);else{const de=f.getViewSubImage(d,se);re=de.viewport,W===0&&(e.setRenderTargetTextures(x,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(x))}let j=G[W];j===void 0&&(j=new pn,j.layers.enable(W),j.viewport=new wt,G[W]=j),j.matrix.fromArray(se.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(se.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(re.x,re.y,re.width,re.height),W===0&&(K.matrix.copy(j.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),ke===!0&&K.cameras.push(j)}const De=s.enabledFeatures;if(De&&De.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){f=i.getBinding();const W=f.getDepthInformation(Pe[0]);W&&W.isValid&&W.texture&&m.init(W,s.renderState)}if(De&&De.includes("camera-access")&&b){e.state.unbindTexture(),f=i.getBinding();for(let W=0;W<Pe.length;W++){const se=Pe[W].camera;if(se){let re=p[se];re||(re=new hh,p[se]=re);const j=f.getCameraImage(se);re.sourceTexture=j}}}}for(let Pe=0;Pe<T.length;Pe++){const ke=A[Pe],De=T[Pe];ke!==null&&De!==void 0&&De.update(ke,ce,c||a)}je&&je(te,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),_=null}const Ye=new _h;Ye.setAnimationLoop(Je),this.setAnimationLoop=function(te){je=te},this.dispose=function(){}}}const yM=new At,Eh=new Ze;Eh.set(-1,0,0,0,1,0,0,0,1);function EM(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ph(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,P,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,P):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),P=y.envMap,x=y.envMapRotation;P&&(m.envMap.value=P,m.envMapRotation.value.setFromMatrix4(yM.makeRotationFromEuler(x)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Eh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,P){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=P*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function TM(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,T){const A=T.program;i.uniformBlockBinding(x,A)}function c(x,T){let A=s[x.id];A===void 0&&(m(x),A=u(x),s[x.id]=A,x.addEventListener("dispose",y));const D=T.program;i.updateUBOMapping(x,D);const v=e.render.frame;r[x.id]!==v&&(d(x),r[x.id]=v)}function u(x){const T=f();x.__bindingPointIndex=T;const A=n.createBuffer(),D=x.__size,v=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,D,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,A),A}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const T=s[x.id],A=x.uniforms,D=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let v=0,w=A.length;v<w;v++){const L=A[v];if(Array.isArray(L))for(let O=0,G=L.length;O<G;O++)h(L[O],v,O,D);else h(L,v,0,D)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(x,T,A,D){if(b(x,T,A,D)===!0){const v=x.__offset,w=x.value;if(Array.isArray(w)){let L=0;for(let O=0;O<w.length;O++){const G=w[O],K=p(G);_(G,x.__data,L),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(w,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,x.__data)}}function _(x,T,A){typeof x=="number"||typeof x=="boolean"?T[0]=x:x.isMatrix3?(T[0]=x.elements[0],T[1]=x.elements[1],T[2]=x.elements[2],T[3]=0,T[4]=x.elements[3],T[5]=x.elements[4],T[6]=x.elements[5],T[7]=0,T[8]=x.elements[6],T[9]=x.elements[7],T[10]=x.elements[8],T[11]=0):ArrayBuffer.isView(x)?T.set(new x.constructor(x.buffer,x.byteOffset,T.length)):x.toArray(T,A)}function b(x,T,A,D){const v=x.value,w=T+"_"+A;if(D[w]===void 0)return typeof v=="number"||typeof v=="boolean"?D[w]=v:ArrayBuffer.isView(v)?D[w]=v.slice():D[w]=v.clone(),!0;{const L=D[w];if(typeof v=="number"||typeof v=="boolean"){if(L!==v)return D[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(L.equals(v)===!1)return L.copy(v),!0}}return!1}function m(x){const T=x.uniforms;let A=0;const D=16;for(let w=0,L=T.length;w<L;w++){const O=Array.isArray(T[w])?T[w]:[T[w]];for(let G=0,K=O.length;G<K;G++){const V=O[G],X=Array.isArray(V.value)?V.value:[V.value];for(let ee=0,z=X.length;ee<z;ee++){const ie=X[ee],Q=p(ie),N=A%D,$=N%Q.boundary,_e=N+$;A+=$,_e!==0&&D-_e<Q.storage&&(A+=D-_e),V.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=A,A+=Q.storage}}}const v=A%D;return v>0&&(A+=D-v),x.__size=A,x.__cache={},this}function p(x){const T={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(T.boundary=4,T.storage=4):x.isVector2?(T.boundary=8,T.storage=8):x.isVector3||x.isColor?(T.boundary=16,T.storage=12):x.isVector4?(T.boundary=16,T.storage=16):x.isMatrix3?(T.boundary=48,T.storage=48):x.isMatrix4?(T.boundary=64,T.storage=64):x.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(T.boundary=16,T.storage=x.byteLength):We("WebGLRenderer: Unsupported uniform value type.",x),T}function y(x){const T=x.target;T.removeEventListener("dispose",y);const A=a.indexOf(T.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function P(){for(const x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:P}}const AM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ln=null;function wM(){return Ln===null&&(Ln=new p0(AM,16,16,Yi,Xn),Ln.name="DFG_LUT",Ln.minFilter=Xt,Ln.magFilter=Xt,Ln.wrapS=ai,Ln.wrapT=ai,Ln.generateMipmaps=!1,Ln.needsUpdate=!0),Ln}class RM{constructor(e={}){const{canvas:t=Gg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=mn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const b=h,m=new Set([vc,_c,gc]),p=new Set([mn,Wn,fr,hr,pc,mc]),y=new Uint32Array(4),P=new Int32Array(4),x=new H;let T=null,A=null;const D=[],v=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let O=!1,G=null,K=null,V=null,X=null;this._outputColorSpace=hn;let ee=0,z=0,ie=null,Q=-1,N=null;const $=new wt,_e=new wt;let Ee=null;const je=new lt(0);let Je=0,Ye=t.width,te=t.height,ce=1,Pe=null,ke=null;const De=new wt(0,0,Ye,te),R=new wt(0,0,Ye,te);let I=!1;const W=new uh;let se=!1,re=!1;const j=new At,de=new H,fe=new wt,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function Re(){return ie===null?ce:1}let C=i;function Le(M,F){return t.getContext(M,F)}let be,E,g,U,k,Z,pe,ge,ne,oe,me,Ie,xe,ve,Ve,Ge,$e,B,Se,le,Me,Ce,ue;try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fc}`),t.addEventListener("webglcontextlost",Mt,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",_n,!1),C===null){const F="webgl2";if(C=Le(F,M),C===null)throw Le(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(M){throw t.removeEventListener("webglcontextlost",Mt,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",_n,!1),ot("WebGLRenderer: "+M.message),M}function ze(){be=new wx(C),be.init(),Me=new vM(C,be),E=new _x(C,be,e,Me),g=new gM(C,be),E.reversedDepthBuffer&&d&&g.buffers.depth.setReversed(!0),K=C.createFramebuffer(),V=C.createFramebuffer(),X=C.createFramebuffer(),U=new Px(C),k=new nM,Z=new _M(C,be,g,k,E,Me,U),pe=new Ax(L),ge=new L0(C),Ce=new mx(C,ge),ne=new Rx(C,ge,U,Ce),oe=new Lx(C,ne,ge,Ce,U),B=new Dx(C,E,Z),Ve=new vx(k),me=new tM(L,pe,be,E,Ce,Ve),Ie=new EM(L,k),xe=new sM,ve=new uM(be),$e=new px(L,pe,g,oe,_,l),Ge=new mM(L,oe,E),ue=new TM(C,U,E,g),Se=new gx(C,be,U),le=new Cx(C,be,U),U.programs=me.programs,L.capabilities=E,L.extensions=be,L.properties=k,L.renderLists=xe,L.shadowMap=Ge,L.state=g,L.info=U}b!==mn&&(w=new Ux(b,t.width,t.height,o,s,r));const Be=new bM(L,C);this.xr=Be,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=be.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=be.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(M){M!==void 0&&(ce=M,this.setSize(Ye,te,!1))},this.getSize=function(M){return M.set(Ye,te)},this.setSize=function(M,F,J=!0){if(Be.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}Ye=M,te=F,t.width=Math.floor(M*ce),t.height=Math.floor(F*ce),J===!0&&(t.style.width=M+"px",t.style.height=F+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(Ye*ce,te*ce).floor()},this.setDrawingBufferSize=function(M,F,J){Ye=M,te=F,ce=J,t.width=Math.floor(M*J),t.height=Math.floor(F*J),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(b===mn){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy($)},this.getViewport=function(M){return M.copy(De)},this.setViewport=function(M,F,J,q){M.isVector4?De.set(M.x,M.y,M.z,M.w):De.set(M,F,J,q),g.viewport($.copy(De).multiplyScalar(ce).round())},this.getScissor=function(M){return M.copy(R)},this.setScissor=function(M,F,J,q){M.isVector4?R.set(M.x,M.y,M.z,M.w):R.set(M,F,J,q),g.scissor(_e.copy(R).multiplyScalar(ce).round())},this.getScissorTest=function(){return I},this.setScissorTest=function(M){g.setScissorTest(I=M)},this.setOpaqueSort=function(M){Pe=M},this.setTransparentSort=function(M){ke=M},this.getClearColor=function(M){return M.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,J=!0){let q=0;if(M){let Y=!1;if(ie!==null){const we=ie.texture.format;Y=m.has(we)}if(Y){const we=ie.texture.type,Ne=p.has(we),Ae=$e.getClearColor(),Fe=$e.getClearAlpha(),He=Ae.r,et=Ae.g,nt=Ae.b;Ne?(y[0]=He,y[1]=et,y[2]=nt,y[3]=Fe,C.clearBufferuiv(C.COLOR,0,y)):(P[0]=He,P[1]=et,P[2]=nt,P[3]=Fe,C.clearBufferiv(C.COLOR,0,P))}else q|=C.COLOR_BUFFER_BIT}F&&(q|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&C.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),G=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Mt,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",_n,!1),$e.dispose(),xe.dispose(),ve.dispose(),k.dispose(),pe.dispose(),oe.dispose(),Ce.dispose(),ue.dispose(),me.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",Uc),Be.removeEventListener("sessionend",Nc),Ci.stop()};function Mt(M){M.preventDefault(),Tu("WebGLRenderer: Context Lost."),O=!0}function ct(){Tu("WebGLRenderer: Context Restored."),O=!1;const M=U.autoReset,F=Ge.enabled,J=Ge.autoUpdate,q=Ge.needsUpdate,Y=Ge.type;ze(),U.autoReset=M,Ge.enabled=F,Ge.autoUpdate=J,Ge.needsUpdate=q,Ge.type=Y}function _n(M){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Rn(M){const F=M.target;F.removeEventListener("dispose",Rn),Ph(F)}function Ph(M){Dh(M),k.remove(M)}function Dh(M){const F=k.get(M).programs;F!==void 0&&(F.forEach(function(J){me.releaseProgram(J)}),M.isShaderMaterial&&me.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,J,q,Y,we){F===null&&(F=he);const Ne=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Ae=Uh(M,F,J,q,Y);g.setMaterial(q,Ne);let Fe=J.index,He=1;if(q.wireframe===!0){if(Fe=ne.getWireframeAttribute(J),Fe===void 0)return;He=2}const et=J.drawRange,nt=J.attributes.position;let Oe=et.start*He,ut=(et.start+et.count)*He;we!==null&&(Oe=Math.max(Oe,we.start*He),ut=Math.min(ut,(we.start+we.count)*He)),Fe!==null?(Oe=Math.max(Oe,0),ut=Math.min(ut,Fe.count)):nt!=null&&(Oe=Math.max(Oe,0),ut=Math.min(ut,nt.count));const Lt=ut-Oe;if(Lt<0||Lt===1/0)return;Ce.setup(Y,q,Ae,J,Fe);let Tt,_t=Se;if(Fe!==null&&(Tt=ge.get(Fe),_t=le,_t.setIndex(Tt)),Y.isMesh)q.wireframe===!0?(g.setLineWidth(q.wireframeLinewidth*Re()),_t.setMode(C.LINES)):_t.setMode(C.TRIANGLES);else if(Y.isLine){let Vt=q.linewidth;Vt===void 0&&(Vt=1),g.setLineWidth(Vt*Re()),Y.isLineSegments?_t.setMode(C.LINES):Y.isLineLoop?_t.setMode(C.LINE_LOOP):_t.setMode(C.LINE_STRIP)}else Y.isPoints?_t.setMode(C.POINTS):Y.isSprite&&_t.setMode(C.TRIANGLES);if(Y.isBatchedMesh)if(be.get("WEBGL_multi_draw"))_t.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Vt=Y._multiDrawStarts,Ue=Y._multiDrawCounts,Yt=Y._multiDrawCount,at=Fe?ge.get(Fe).bytesPerElement:1,un=k.get(q).currentProgram.getUniforms();for(let Cn=0;Cn<Yt;Cn++)un.setValue(C,"_gl_DrawID",Cn),_t.render(Vt[Cn]/at,Ue[Cn])}else if(Y.isInstancedMesh)_t.renderInstances(Oe,Lt,Y.count);else if(J.isInstancedBufferGeometry){const Vt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ue=Math.min(J.instanceCount,Vt);_t.renderInstances(Oe,Lt,Ue)}else _t.render(Oe,Lt)};function Ic(M,F,J,q){G!==null&&M.isNodeMaterial&&G.setObject(q,M),se===!0&&Ve.setState(M,J,!1),M.transparent===!0&&M.side===ri&&M.forceSinglePass===!1?(M.side=sn,M.needsUpdate=!0,yr(M,F,q),M.side=Xi,M.needsUpdate=!0,yr(M,F,q),M.side=ri):yr(M,F,q)}this.compile=function(M,F,J=null){J===null&&(J=M),G!==null&&G.renderStart(M,F,J),A=ve.get(J),A.init(F),v.push(A),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),M!==J&&M.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),A.setupLights(),G!==null&&G.updateLights(A.state.lightsArray),re=this.localClippingEnabled,se=Ve.init(this.clippingPlanes,re),se===!0&&Ve.setGlobalState(this.clippingPlanes,F),G!==null&&Ge.render(A.state.shadowsArray,J,F);const q=new Set;return M.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const we=Y.material;if(we)if(Array.isArray(we))for(let Ne=0;Ne<we.length;Ne++){const Ae=we[Ne];Ic(Ae,J,F,Y),q.add(Ae)}else Ic(we,J,F,Y),q.add(we)}),A=v.pop(),G!==null&&G.renderEnd(),q},this.compileAsync=function(M,F,J=null){const q=this.compile(M,F,J);return new Promise(Y=>{function we(){if(q.forEach(function(Ne){const Fe=k.get(Ne).currentProgram;(Fe===void 0||Fe.isReady())&&q.delete(Ne)}),q.size===0){Y(M);return}setTimeout(we,10)}be.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Xa=null;function Lh(M){Xa&&Xa(M)}function Uc(){Ci.stop()}function Nc(){Ci.start()}const Ci=new _h;Ci.setAnimationLoop(Lh),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(M){Xa=M,Be.setAnimationLoop(M),M===null?Ci.stop():Ci.start()},Be.addEventListener("sessionstart",Uc),Be.addEventListener("sessionend",Nc),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;G!==null&&G.renderStart(M,F);const J=Be.enabled===!0&&Be.isPresenting===!0,q=w!==null&&(ie===null||J)&&w.begin(L,ie);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(F),F=Be.getCamera()),M.isScene===!0&&M.onBeforeRender(L,M,F,ie),A=ve.get(M,v.length),A.init(F),A.state.textureUnits=Z.getTextureUnits(),v.push(A),j.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),W.setFromProjectionMatrix(j,Vn,F.reversedDepth),re=this.localClippingEnabled,se=Ve.init(this.clippingPlanes,re),T=xe.get(M,D.length),T.init(),D.push(T),Be.enabled===!0&&Be.isPresenting===!0){const Ne=L.xr.getDepthSensingMesh();Ne!==null&&qa(Ne,F,-1/0,L.sortObjects)}qa(M,F,0,L.sortObjects),T.finish(),G!==null&&G.updateLights(A.state.lightsArray),L.sortObjects===!0&&T.sort(Pe,ke),ae=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,ae&&$e.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Ve.beginShadows();const Y=A.state.shadowsArray;if(Ge.render(Y,M,F),se===!0&&Ve.endShadows(),(q&&w.hasRenderPass())===!1){const Ne=T.opaque,Ae=T.transmissive;if(A.setupLights(),F.isArrayCamera){const Fe=F.cameras;if(Ae.length>0)for(let He=0,et=Fe.length;He<et;He++){const nt=Fe[He];Oc(Ne,Ae,M,nt)}ae&&$e.render(M);for(let He=0,et=Fe.length;He<et;He++){const nt=Fe[He];Fc(T,M,nt,nt.viewport)}}else Ae.length>0&&Oc(Ne,Ae,M,F),ae&&$e.render(M),Fc(T,M,F)}ie!==null&&z===0&&(Z.updateMultisampleRenderTarget(ie),Z.updateRenderTargetMipmap(ie)),q&&w.end(L),M.isScene===!0&&M.onAfterRender(L,M,F),Ce.resetDefaultState(),Q=-1,N=null,v.pop(),v.length>0?(A=v[v.length-1],Z.setTextureUnits(A.state.textureUnits),se===!0&&Ve.setGlobalState(L.clippingPlanes,A.state.camera)):A=null,D.pop(),D.length>0?T=D[D.length-1]:T=null,G!==null&&G.renderEnd()};function qa(M,F,J,q){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)J=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLightProbeGrid)A.pushLightProbeGrid(M);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(W)){q&&fe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(j);const Ne=oe.update(M),Ae=M.material;Ae.visible&&T.push(M,Ne,Ae,J,fe.z,null,F)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(W))){const Ne=oe.update(M),Ae=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),fe.copy(M.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),fe.copy(Ne.boundingSphere.center)),fe.applyMatrix4(M.matrixWorld).applyMatrix4(j)),Array.isArray(Ae)){const Fe=Ne.groups;for(let He=0,et=Fe.length;He<et;He++){const nt=Fe[He],Oe=Ae[nt.materialIndex];Oe&&Oe.visible&&T.push(M,Ne,Oe,J,fe.z,nt,F)}}else Ae.visible&&T.push(M,Ne,Ae,J,fe.z,null,F)}}const we=M.children;for(let Ne=0,Ae=we.length;Ne<Ae;Ne++)qa(we[Ne],F,J,q)}function Fc(M,F,J,q){const{opaque:Y,transmissive:we,transparent:Ne}=M;A.setupLightsView(J),se===!0&&Ve.setGlobalState(L.clippingPlanes,J),q&&g.viewport($.copy(q)),Y.length>0&&br(Y,F,J),we.length>0&&br(we,F,J),Ne.length>0&&br(Ne,F,J),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Oc(M,F,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[q.id]===void 0){const Oe=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[q.id]=new An(1,1,{generateMipmaps:!0,type:Oe?Xn:mn,minFilter:Vi,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}const we=A.state.transmissionRenderTarget[q.id],Ne=q.viewport||$;we.setSize(Ne.z*L.transmissionResolutionScale,Ne.w*L.transmissionResolutionScale);const Ae=L.getRenderTarget(),Fe=L.getActiveCubeFace(),He=L.getActiveMipmapLevel();L.setRenderTarget(we),L.getClearColor(je),Je=L.getClearAlpha(),Je<1&&L.setClearColor(16777215,.5),L.clear(),ae&&$e.render(J);const et=L.toneMapping;L.toneMapping=kn;const nt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),A.setupLightsView(q),se===!0&&Ve.setGlobalState(L.clippingPlanes,q),br(M,J,q),Z.updateMultisampleRenderTarget(we),Z.updateRenderTargetMipmap(we),be.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let ut=0,Lt=F.length;ut<Lt;ut++){const Tt=F[ut],{object:_t,geometry:Vt,material:Ue,group:Yt}=Tt;if(Ue.side===ri&&_t.layers.test(q.layers)){const at=Ue.side;Ue.side=sn,Ue.needsUpdate=!0,Bc(_t,J,q,Vt,Ue,Yt),Ue.side=at,Ue.needsUpdate=!0,Oe=!0}}Oe===!0&&(Z.updateMultisampleRenderTarget(we),Z.updateRenderTargetMipmap(we))}L.setRenderTarget(Ae,Fe,He),L.setClearColor(je,Je),nt!==void 0&&(q.viewport=nt),L.toneMapping=et}function br(M,F,J){const q=F.isScene===!0?F.overrideMaterial:null;for(let Y=0,we=M.length;Y<we;Y++){const Ne=M[Y],{object:Ae,geometry:Fe,group:He}=Ne;let et=Ne.material;et.allowOverride===!0&&q!==null&&(et=q),Ae.layers.test(J.layers)&&Bc(Ae,F,J,Fe,et,He)}}function Bc(M,F,J,q,Y,we){G!==null&&Y.isNodeMaterial&&G.setObject(M,Y),M.onBeforeRender(L,F,J,q,Y,we),M.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Y.onBeforeRender(L,F,J,q,M,we),Y.transparent===!0&&Y.side===ri&&Y.forceSinglePass===!1?(Y.side=sn,Y.needsUpdate=!0,L.renderBufferDirect(J,F,q,Y,M,we),Y.side=Xi,Y.needsUpdate=!0,L.renderBufferDirect(J,F,q,Y,M,we),Y.side=ri):L.renderBufferDirect(J,F,q,Y,M,we),M.onAfterRender(L,F,J,q,Y,we)}function yr(M,F,J){F.isScene!==!0&&(F=he);const q=k.get(M),Y=A.state.lights,we=A.state.shadowsArray,Ne=Y.state.version,Ae=me.getParameters(M,Y.state,we,F,J,A.state.lightProbeGridArray),Fe=me.getProgramCacheKey(Ae);let He=q.programs;q.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,q.fog=F.fog;const et=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;q.envMap=pe.get(M.envMap||q.environment,et),q.envMapRotation=q.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,He===void 0&&(M.addEventListener("dispose",Rn),He=new Map,q.programs=He);let nt=He.get(Fe);if(nt!==void 0){if(q.currentProgram===nt&&q.lightsStateVersion===Ne)return Vc(M,Ae),nt}else Ae.uniforms=me.getUniforms(M),G!==null&&M.isNodeMaterial&&G.build(M,J,Ae),M.onBeforeCompile(Ae,L),nt=me.acquireProgram(Ae,Fe),He.set(Fe,nt),q.uniforms=Ae.uniforms;const Oe=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Oe.clippingPlanes=Ve.uniform),Vc(M,Ae),q.needsLights=Fh(M),q.lightsStateVersion=Ne,q.needsLights&&(Oe.ambientLightColor.value=Y.state.ambient,Oe.lightProbe.value=Y.state.probe,Oe.sunLights.value=Y.state.sun,Oe.sunLightShadows.value=Y.state.sunShadow,Oe.directionalLights.value=Y.state.directional,Oe.directionalLightShadows.value=Y.state.directionalShadow,Oe.spotLights.value=Y.state.spot,Oe.spotLightShadows.value=Y.state.spotShadow,Oe.rectAreaLights.value=Y.state.rectArea,Oe.ltc_1.value=Y.state.rectAreaLTC1,Oe.ltc_2.value=Y.state.rectAreaLTC2,Oe.pointLights.value=Y.state.point,Oe.pointLightShadows.value=Y.state.pointShadow,Oe.hemisphereLights.value=Y.state.hemi,Oe.sunShadowMatrix.value=Y.state.sunShadowMatrix,Oe.sunShadowCascade.value=Y.state.sunShadowCascade,Oe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Oe.spotLightMatrix.value=Y.state.spotLightMatrix,Oe.spotLightMap.value=Y.state.spotLightMap,Oe.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=A.state.lightProbeGridArray.length>0,q.currentProgram=nt,q.uniformsList=null,nt}function Hc(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=ua.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Vc(M,F){const J=k.get(M);J.outputColorSpace=F.outputColorSpace,J.batching=F.batching,J.batchingColor=F.batchingColor,J.instancing=F.instancing,J.instancingColor=F.instancingColor,J.instancingMorph=F.instancingMorph,J.skinning=F.skinning,J.morphTargets=F.morphTargets,J.morphNormals=F.morphNormals,J.morphColors=F.morphColors,J.morphTargetsCount=F.morphTargetsCount,J.numClippingPlanes=F.numClippingPlanes,J.numIntersection=F.numClipIntersection,J.vertexAlphas=F.vertexAlphas,J.vertexTangents=F.vertexTangents,J.toneMapping=F.toneMapping}function Ih(M,F){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;x.setFromMatrixPosition(F.matrixWorld);for(let J=0,q=M.length;J<q;J++){const Y=M[J];if(Y.texture!==null&&Y.boundingBox.containsPoint(x))return Y}return null}function Uh(M,F,J,q,Y){F.isScene!==!0&&(F=he),Z.resetTextureUnits();const we=F.fog,Ne=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?F.environment:null,Ae=ie===null?L.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:st.workingColorSpace,Fe=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,He=pe.get(q.envMap||Ne,Fe),et=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,nt=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Oe=!!J.morphAttributes.position,ut=!!J.morphAttributes.normal,Lt=!!J.morphAttributes.color;let Tt=kn;q.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Tt=L.toneMapping);const _t=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Vt=_t!==void 0?_t.length:0,Ue=k.get(q),Yt=A.state.lights;if(se===!0&&(re===!0||M!==N)){const bt=M===N&&q.id===Q;Ve.setState(q,M,bt)}let at=!1;q.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Yt.state.version||Ue.outputColorSpace!==Ae||Y.isBatchedMesh&&Ue.batching===!1||!Y.isBatchedMesh&&Ue.batching===!0||Y.isBatchedMesh&&Ue.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ue.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ue.instancing===!1||!Y.isInstancedMesh&&Ue.instancing===!0||Y.isSkinnedMesh&&Ue.skinning===!1||!Y.isSkinnedMesh&&Ue.skinning===!0||Y.isInstancedMesh&&Ue.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ue.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ue.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ue.instancingMorph===!1&&Y.morphTexture!==null||Ue.envMap!==He||q.fog===!0&&Ue.fog!==we||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==Ve.numPlanes||Ue.numIntersection!==Ve.numIntersection)||Ue.vertexAlphas!==et||Ue.vertexTangents!==nt||Ue.morphTargets!==Oe||Ue.morphNormals!==ut||Ue.morphColors!==Lt||Ue.toneMapping!==Tt||Ue.morphTargetsCount!==Vt||!!Ue.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,Ue.__version=q.version);let un=Ue.currentProgram;at===!0&&(un=yr(q,F,Y),G&&q.isNodeMaterial&&G.onUpdateProgram(q,un,Ue));let Cn=!1,_i=!1,$i=!1;const pt=un.getUniforms(),Pt=Ue.uniforms;if(g.useProgram(un.program)&&(Cn=!0,_i=!0,$i=!0),q.id!==Q&&(Q=q.id,_i=!0),Ue.needsLights){const bt=Ih(A.state.lightProbeGridArray,Y);Ue.lightProbeGrid!==bt&&(Ue.lightProbeGrid=bt,_i=!0)}if(Cn||N!==M){g.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),pt.setValue(C,"projectionMatrix",M.projectionMatrix),pt.setValue(C,"viewMatrix",M.matrixWorldInverse);const xi=pt.map.cameraPosition;xi!==void 0&&xi.setValue(C,de.setFromMatrixPosition(M.matrixWorld)),E.logarithmicDepthBuffer&&pt.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&pt.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),N!==M&&(N=M,_i=!0,$i=!0)}if(Ue.needsLights&&(Yt.state.sunShadowMap.length>0&&pt.setValue(C,"sunShadowMap",Yt.state.sunShadowMap,Z),Yt.state.directionalShadowMap.length>0&&pt.setValue(C,"directionalShadowMap",Yt.state.directionalShadowMap,Z),Yt.state.spotShadowMap.length>0&&pt.setValue(C,"spotShadowMap",Yt.state.spotShadowMap,Z),Yt.state.pointShadowMap.length>0&&pt.setValue(C,"pointShadowMap",Yt.state.pointShadowMap,Z)),Y.isSkinnedMesh){pt.setOptional(C,Y,"bindMatrix"),pt.setOptional(C,Y,"bindMatrixInverse");const bt=Y.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),pt.setValue(C,"boneTexture",bt.boneTexture,Z))}Y.isBatchedMesh&&(pt.setOptional(C,Y,"batchingTexture"),pt.setValue(C,"batchingTexture",Y._matricesTexture,Z),pt.setOptional(C,Y,"batchingIdTexture"),pt.setValue(C,"batchingIdTexture",Y._indirectTexture,Z),pt.setOptional(C,Y,"batchingColorTexture"),Y._colorsTexture!==null&&pt.setValue(C,"batchingColorTexture",Y._colorsTexture,Z));const vi=J.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&B.update(Y,J,un),(_i||Ue.receiveShadow!==Y.receiveShadow)&&(Ue.receiveShadow=Y.receiveShadow,pt.setValue(C,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&F.environment!==null&&(Pt.envMapIntensity.value=F.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=wM()),_i){if(pt.setValue(C,"toneMappingExposure",L.toneMappingExposure),Ue.needsLights&&Nh(Pt,$i),we&&q.fog===!0&&Ie.refreshFogUniforms(Pt,we),Ie.refreshMaterialUniforms(Pt,q,ce,te,A.state.transmissionRenderTarget[M.id]),Ue.needsLights&&Ue.lightProbeGrid){const bt=Ue.lightProbeGrid;Pt.probesSH.value=bt.texture,Pt.probesMin.value.copy(bt.boundingBox.min),Pt.probesMax.value.copy(bt.boundingBox.max),Pt.probesResolution.value.copy(bt.resolution)}ua.upload(C,Hc(Ue),Pt,Z)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ua.upload(C,Hc(Ue),Pt,Z),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&pt.setValue(C,"center",Y.center),pt.setValue(C,"modelViewMatrix",Y.modelViewMatrix),pt.setValue(C,"normalMatrix",Y.normalMatrix),pt.setValue(C,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){const bt=q.uniformsGroups;for(let xi=0,Qi=bt.length;xi<Qi;xi++){const kc=bt[xi];ue.update(kc,un),ue.bind(kc,un)}}return un}function Nh(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.sunLights.needsUpdate=F,M.sunLightShadows.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Fh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(M,F,J){const q=k.get(M);q.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),k.get(M.texture).__webglTexture=F,k.get(M.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:J,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const J=k.get(M);J.__webglFramebuffer=F,J.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,J=0){ie=M,ee=F,z=J;let q=null,Y=!1,we=!1;if(M){const Ae=k.get(M);if(Ae.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(C.FRAMEBUFFER,Ae.__webglFramebuffer),$.copy(M.viewport),_e.copy(M.scissor),Ee=M.scissorTest,g.viewport($),g.scissor(_e),g.setScissorTest(Ee),Q=-1;return}else if(Ae.__webglFramebuffer===void 0)Z.setupRenderTarget(M);else if(Ae.__hasExternalTextures)Z.rebindTextures(M,k.get(M.texture).__webglTexture,k.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const et=M.depthTexture;if(Ae.__boundDepthTexture!==et){if(et!==null&&k.has(et)&&(M.width!==et.image.width||M.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(M)}}const Fe=M.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(we=!0);const He=k.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(He[F])?q=He[F][J]:q=He[F],Y=!0):M.samples>0&&Z.useMultisampledRTT(M)===!1?q=k.get(M).__webglMultisampledFramebuffer:Array.isArray(He)?q=He[J]:q=He,$.copy(M.viewport),_e.copy(M.scissor),Ee=M.scissorTest}else $.copy(De).multiplyScalar(ce).floor(),_e.copy(R).multiplyScalar(ce).floor(),Ee=I;if(J!==0&&(q=K),g.bindFramebuffer(C.FRAMEBUFFER,q)&&g.drawBuffers(M,q),g.viewport($),g.scissor(_e),g.setScissorTest(Ee),Y){const Ae=k.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ae.__webglTexture,J)}else if(we){const Ae=F;for(let Fe=0;Fe<M.textures.length;Fe++){const He=k.get(M.textures[Fe]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Fe,He.__webglTexture,J,Ae)}}else if(M!==null&&J!==0){const Ae=k.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ae.__webglTexture,J)}Q=-1};function zc(M){const F=k.get(M);return(F.__readFormat!==M.format||F.__readType!==M.type)&&(F.__readFormat=M.format,F.__readType=M.type,F.__formatReadable=E.textureFormatReadable(M.format),F.__typeReadable=E.textureTypeReadable(M.type)),F}this.readRenderTargetPixels=function(M,F,J,q,Y,we,Ne,Ae=0){if(!(M&&M.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=k.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe){g.bindFramebuffer(C.FRAMEBUFFER,Fe);try{const He=M.textures[Ae],et=He.format,nt=He.type;M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ae);const Oe=zc(He);if(Oe.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Oe.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-q&&J>=0&&J<=M.height-Y&&C.readPixels(F,J,q,Y,Me.convert(et),Me.convert(nt),we)}finally{const He=ie!==null?k.get(ie).__webglFramebuffer:null;g.bindFramebuffer(C.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(M,F,J,q,Y,we,Ne,Ae=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=k.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe)if(F>=0&&F<=M.width-q&&J>=0&&J<=M.height-Y){g.bindFramebuffer(C.FRAMEBUFFER,Fe);const He=M.textures[Ae],et=He.format,nt=He.type;M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ae);const Oe=zc(He);if(Oe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Oe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ut),C.bufferData(C.PIXEL_PACK_BUFFER,we.byteLength,C.STREAM_READ),C.readPixels(F,J,q,Y,Me.convert(et),Me.convert(nt),0),C.bindBuffer(C.PIXEL_PACK_BUFFER,null);const Lt=ie!==null?k.get(ie).__webglFramebuffer:null;g.bindFramebuffer(C.FRAMEBUFFER,Lt);const Tt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Wg(C,Tt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ut),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,we),C.bindBuffer(C.PIXEL_PACK_BUFFER,null),C.deleteBuffer(ut),C.deleteSync(Tt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,J=0){const q=Math.pow(2,-J),Y=Math.floor(M.image.width*q),we=Math.floor(M.image.height*q),Ne=F!==null?F.x:0,Ae=F!==null?F.y:0;Z.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,J,0,0,Ne,Ae,Y,we),g.unbindTexture()},this.copyTextureToTexture=function(M,F,J=null,q=null,Y=0,we=0){let Ne,Ae,Fe,He,et,nt,Oe,ut,Lt;const Tt=M.isCompressedTexture?M.mipmaps[we]:M.image;if(J!==null)Ne=J.max.x-J.min.x,Ae=J.max.y-J.min.y,Fe=J.isBox3?J.max.z-J.min.z:1,He=J.min.x,et=J.min.y,nt=J.isBox3?J.min.z:0;else{const Pt=Math.pow(2,-Y);Ne=Math.floor(Tt.width*Pt),Ae=Math.floor(Tt.height*Pt),M.isDataArrayTexture?Fe=Tt.depth:M.isData3DTexture?Fe=Math.floor(Tt.depth*Pt):Fe=1,He=0,et=0,nt=0}q!==null?(Oe=q.x,ut=q.y,Lt=q.z):(Oe=0,ut=0,Lt=0);const _t=Me.convert(F.format),Vt=Me.convert(F.type);let Ue;F.isData3DTexture?(Z.setTexture3D(F,0),Ue=C.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Z.setTexture2DArray(F,0),Ue=C.TEXTURE_2D_ARRAY):(Z.setTexture2D(F,0),Ue=C.TEXTURE_2D),g.activeTexture(C.TEXTURE0),g.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),g.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),g.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);const Yt=g.getParameter(C.UNPACK_ROW_LENGTH),at=g.getParameter(C.UNPACK_IMAGE_HEIGHT),un=g.getParameter(C.UNPACK_SKIP_PIXELS),Cn=g.getParameter(C.UNPACK_SKIP_ROWS),_i=g.getParameter(C.UNPACK_SKIP_IMAGES);g.pixelStorei(C.UNPACK_ROW_LENGTH,Tt.width),g.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Tt.height),g.pixelStorei(C.UNPACK_SKIP_PIXELS,He),g.pixelStorei(C.UNPACK_SKIP_ROWS,et),g.pixelStorei(C.UNPACK_SKIP_IMAGES,nt);const $i=M.isDataArrayTexture||M.isData3DTexture,pt=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const Pt=k.get(M),vi=k.get(F),bt=k.get(Pt.__renderTarget),xi=k.get(vi.__renderTarget);g.bindFramebuffer(C.READ_FRAMEBUFFER,bt.__webglFramebuffer),g.bindFramebuffer(C.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Qi=0;Qi<Fe;Qi++)$i&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,k.get(M).__webglTexture,Y,nt+Qi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,k.get(F).__webglTexture,we,Lt+Qi)),C.blitFramebuffer(He,et,Ne,Ae,Oe,ut,Ne,Ae,C.DEPTH_BUFFER_BIT,C.NEAREST);g.bindFramebuffer(C.READ_FRAMEBUFFER,null),g.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(Y!==0||M.isRenderTargetTexture||k.has(M)){const Pt=k.get(M),vi=k.get(F);g.bindFramebuffer(C.READ_FRAMEBUFFER,V),g.bindFramebuffer(C.DRAW_FRAMEBUFFER,X);for(let bt=0;bt<Fe;bt++)$i?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pt.__webglTexture,Y,nt+bt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Pt.__webglTexture,Y),pt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,vi.__webglTexture,we,Lt+bt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,vi.__webglTexture,we),Y!==0?C.blitFramebuffer(He,et,Ne,Ae,Oe,ut,Ne,Ae,C.COLOR_BUFFER_BIT,C.NEAREST):pt?C.copyTexSubImage3D(Ue,we,Oe,ut,Lt+bt,He,et,Ne,Ae):C.copyTexSubImage2D(Ue,we,Oe,ut,He,et,Ne,Ae);g.bindFramebuffer(C.READ_FRAMEBUFFER,null),g.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else pt?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(Ue,we,Oe,ut,Lt,Ne,Ae,Fe,_t,Vt,Tt.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(Ue,we,Oe,ut,Lt,Ne,Ae,Fe,_t,Tt.data):C.texSubImage3D(Ue,we,Oe,ut,Lt,Ne,Ae,Fe,_t,Vt,Tt):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,we,Oe,ut,Ne,Ae,_t,Vt,Tt.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,we,Oe,ut,Tt.width,Tt.height,_t,Tt.data):C.texSubImage2D(C.TEXTURE_2D,we,Oe,ut,Ne,Ae,_t,Vt,Tt);g.pixelStorei(C.UNPACK_ROW_LENGTH,Yt),g.pixelStorei(C.UNPACK_IMAGE_HEIGHT,at),g.pixelStorei(C.UNPACK_SKIP_PIXELS,un),g.pixelStorei(C.UNPACK_SKIP_ROWS,Cn),g.pixelStorei(C.UNPACK_SKIP_IMAGES,_i),we===0&&F.generateMipmaps&&C.generateMipmap(Ue),g.unbindTexture()},this.initRenderTarget=function(M){k.get(M).__webglFramebuffer===void 0&&Z.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Z.setTextureCube(M,0):M.isData3DTexture?Z.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Z.setTexture2DArray(M,0):Z.setTexture2D(M,0),g.unbindTexture()},this.resetState=function(){ee=0,z=0,ie=null,g.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}function Md(n=globalThis.localStorage){try{const e=n&&n.getItem?n.getItem("sr_aero_fleet_v1"):null;if(!e)return!1;const t=JSON.parse(e);return!!(t&&Array.isArray(t.aircrafts)&&t.aircrafts.length>0)}catch{return!1}}const CM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3ccircle%20cx='12'%20cy='12'%20r='9'/%3e%3cpath%20d='M12%208v8M8%2012h8'/%3e%3c/svg%3e",bd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M22%202%209%209%203%207l-2%202%207%205%204%208%202-1-1-7%207-5c2-1%203-3%202-7Z'/%3e%3c/svg%3e",yd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M10.3%203.6%201.8%2018a2%202%200%200%200%201.7%203h17a2%202%200%200%200%201.7-3L13.7%203.6a2%202%200%200%200-3.4%200Z'/%3e%3cpath%20d='M12%209v4m0%204h.01'/%3e%3c/svg%3e",Ed="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3crect%20x='3'%20y='5'%20width='18'%20height='16'%20rx='2'/%3e%3cpath%20d='M16%203v4M8%203v4M3%2010h18M8%2014h.01M12%2014h.01M16%2014h.01M8%2018h.01M12%2018h.01'/%3e%3c/svg%3e",Td="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M14.7%206.3a4%204%200%200%200-5-5L7%204l3%203-3%203-3-3-2.7%202.7a4%204%200%200%200%205%205L14%2022l3-3-7.7-7.7'/%3e%3c/svg%3e",Ad="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3crect%20x='3'%20y='3'%20width='7'%20height='9'%20rx='1'/%3e%3crect%20x='14'%20y='3'%20width='7'%20height='5'%20rx='1'/%3e%3crect%20x='14'%20y='12'%20width='7'%20height='9'%20rx='1'/%3e%3crect%20x='3'%20y='16'%20width='7'%20height='5'%20rx='1'/%3e%3c/svg%3e",wd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cellipse%20cx='12'%20cy='5'%20rx='9'%20ry='3'/%3e%3cpath%20d='M3%205v7c0%201.7%204%203%209%203s9-1.3%209-3V5M3%2012v7c0%201.7%204%203%209%203s9-1.3%209-3v-7'/%3e%3c/svg%3e",PM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M3%206h18M8%206V4h8v2m3%200-1%2015H6L5%206M10%2011v6m4-6v6'/%3e%3c/svg%3e",DM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M12%203v12m-5-5%205%205%205-5M5%2021h14'/%3e%3c/svg%3e",LM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M12%2020h9M16.5%203.5a2.1%202.1%200%200%201%203%203L8%2018l-4%201%201-4Z'/%3e%3c/svg%3e",Rd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M3%2012a9%209%200%201%200%203-6.7L3%208'/%3e%3cpath%20d='M3%203v5h5M12%207v5l3%202'/%3e%3c/svg%3e",IM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M15%203h4a2%202%200%200%201%202%202v14a2%202%200%200%201-2%202h-4M10%2017l5-5-5-5M15%2012H3'/%3e%3c/svg%3e",UM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M12%203%204%206v6c0%205%203%208%208%2010%205-2%208-5%208-10V6z'/%3e%3cpath%20d='m8%2012%203%203%205-6'/%3e%3c/svg%3e",NM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M19%2021H5a2%202%200%200%201-2-2V5a2%202%200%200%201%202-2h11l5%205v11a2%202%200%200%201-2%202Z'/%3e%3cpath%20d='M17%2021v-8H7v8M7%203v5h8'/%3e%3c/svg%3e",FM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3ccircle%20cx='12'%20cy='13'%20r='8'/%3e%3cpath%20d='M12%209v4l3%202M9%202h6'/%3e%3c/svg%3e",OM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M9%2021H5a2%202%200%200%201-2-2V5a2%202%200%200%201%202-2h4M16%2017l5-5-5-5M21%2012H9'/%3e%3c/svg%3e",BM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M17%2018a5%205%200%200%200%200-10%207%207%200%200%200-13%203%204%204%200%200%200%201%208h5'/%3e%3cpath%20d='m8%2016%203%203-3%203m8-12-3-3%203-3'/%3e%3c/svg%3e",HM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3ccircle%20cx='12'%20cy='8'%20r='4'/%3e%3cpath%20d='M4%2021a8%208%200%200%201%2016%200'/%3e%3c/svg%3e",VM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3crect%20x='3'%20y='5'%20width='18'%20height='16'%20rx='2'/%3e%3cpath%20d='M16%203v4M8%203v4M3%2010h18M12%2014v3m0%201h.01'/%3e%3c/svg%3e",zM=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Ks="sr_aero_fleet_v1",Th="sr_aero_fleet_meta_v1",kM="dashboards",GM="main",Ah=20,Un=new Date;Un.setHours(0,0,0,0);const wh="calidad@divmaaer.com",WM=[wh,"marlonchca3@gmail.com","gato0247@gmail.com","tatianamhl250197@gmail.com"],Rh={apiKey:"AIzaSyDRAZZ4VafNNIi3G9_USyARksFqgKYE5Fo",authDomain:"calidadddddd.firebaseapp.com",projectId:"calidadddddd",storageBucket:"calidadddddd.firebasestorage.app",messagingSenderId:"532433890487",appId:"1:532433890487:web:d7011a757f953c03363132",measurementId:"G-60JGPFZ5TL"},Ch=[{component:"Mi-17 MTV-1",series:"96019",workshop:"Helicentro",overhaul:"20/03/2020",assigned:"2,000 h",consumed:"860 h",remaining:"1,140 h",due:"20/03/2028"},{component:"Motor 1 TV3-117BM",series:"7087882200433",workshop:"URAL",overhaul:"12/04/2016",assigned:"1,500 h",consumed:"828.5 h",remaining:"671.5 h",due:"12/04/2026"},{component:"Motor 2 TV3-117BM",series:"7087884000357",workshop:"BORYSFEN",overhaul:"21/04/2016",assigned:"1,500 h",consumed:"828.5 h",remaining:"671.5 h",due:"21/04/2026"},{component:"AI-9B",series:"7080924200355",workshop:"OOO ARP Motor",overhaul:"16/07/2020",assigned:"600 arr",consumed:"694 arr",remaining:"-94 arr",due:"16/07/2028"},{component:"VR-14",series:"L0701003MP2",workshop:"AO REDUCTOR PM",overhaul:"19/09/2017",assigned:"2,000 h",consumed:"828 h",remaining:"1,172 h",due:"19/09/2027"}];function Yl(n){return JSON.parse(JSON.stringify(n))}function Cd(){try{return JSON.parse(localStorage.getItem(Th)||"{}")||{}}catch{return{}}}function Gs(n){try{localStorage.setItem(Th,JSON.stringify({updatedAt:n}))}catch{}}function Go(){return{selectedId:"pnp-501",changes:[],aircrafts:[{id:"pnp-501",code:"PNP-501",name:"Mi-17 MTV-1",rows:Yl(Ch).map(sr)},{id:"pnp-506",code:"PNP-506",name:"Mi-171",rows:[]}]}}function Bn(n){const e=parseFloat(String(n).replace(/[^0-9.-]/g,""));return Number.isFinite(e)?e:0}function Ra(n){const e=Number(n);return Number.isFinite(e)?Number.isInteger(e)?String(e):String(Number(e.toFixed(2))):"0"}function Zs(){return Hi(Un)}function sr(n){const e=String(n.assignedTboHours??n.assigned??""),t=String(n.assignedTboYears??""),i=String(n.consumedTboHours??n.consumed??""),s=Zs(),r=String(n.assignedTsnHours??""),a=String(n.assignedTsnYears??""),o=String(n.consumedTsnHours??""),l=Ra(Bn(r)-Bn(o)),c=vs(n.overhaul,a)||String(n.remainingTsnYears||""),u=Ra(Bn(e)-Bn(i)),f=vs(n.overhaul,t)||String(n.due||""),d=f;return{component:String(n.component||""),series:String(n.series||""),workshop:String(n.workshop||""),overhaul:String(n.overhaul||""),assigned:e,consumed:i,remaining:u,assignedTboHours:e,assignedTboYears:t,consumedTboHours:i,consumedTboYears:s,assignedTsnHours:r,assignedTsnYears:a,consumedTsnHours:o,consumedTsnYears:s,remainingTboHours:u,remainingTboYears:d,remainingTsnHours:l,remainingTsnYears:c,notes:String(n.notes||""),due:f}}function Kl(n){return Array.isArray(n)?n.map((e,t)=>({id:String(e.id||`${e.timestamp||Date.now()}-${t}`),timestamp:Number(e.timestamp||0),action:String(e.action||"Cambio registrado"),detail:String(e.detail||""),aircraftCode:String(e.aircraftCode||""),user:String(e.user||"")})).filter(e=>e.timestamp>0).sort((e,t)=>t.timestamp-e.timestamp).slice(0,Ah):[]}function XM(){const n=localStorage.getItem(Ks);if(!n)return Go();try{const e=JSON.parse(n);return!Array.isArray(e.aircrafts)||e.aircrafts.length===0?Go():((!e.selectedId||!e.aircrafts.find(t=>t.id===e.selectedId))&&(e.selectedId=e.aircrafts[0].id),e.changes=Kl(e.changes),e.aircrafts=e.aircrafts.map(t=>({...t,rows:Array.isArray(t.rows)?t.rows.map(sr):[]})),e)}catch{return Go()}}function gs(n){const e=String(n).trim().match(/^(\d{2})\/(\d{2})\/(\d{4})$/);if(!e)return null;const t=Number(e[1]),i=Number(e[2]),s=Number(e[3]),r=new Date(s,i-1,t);return r.getFullYear()!==s||r.getMonth()!==i-1||r.getDate()!==t?null:r}function Hi(n){const e=String(n.getDate()).padStart(2,"0"),t=String(n.getMonth()+1).padStart(2,"0");return`${e}/${t}/${n.getFullYear()}`}function qM(n,e){const t=Bn(e);if(t<=0)return null;const i=new Date(n),s=Math.round(t*12),r=i.getDate();i.setDate(1),i.setMonth(i.getMonth()+s);const a=new Date(i.getFullYear(),i.getMonth()+1,0).getDate();return i.setDate(Math.min(r,a)),i}function vs(n,e){const t=gs(n),i=t?qM(t,e):null;return i?Hi(i):""}function wc(n){return String(n??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\x20-\x7E]/g," ").replace(/\s+/g," ").trim()}function YM(n){return wc(n).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")}function Pd(n){return wc(n).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"aeronave"}function Wo(n,e){const t=wc(n).split(" ").filter(Boolean),i=[];let s="";return t.forEach(r=>{const a=s?`${s} ${r}`:r;if(a.length>e&&s){i.push(s),s=r;return}s=a}),s&&i.push(s),i.length?i:["--"]}function KM(){return Object.values(Rh).every(n=>n&&!String(n).startsWith("REEMPLAZAR_"))}function ZM(n){return WM.includes(String(n||"").toLowerCase())}function Xo(n){return new Promise((e,t)=>{if(document.querySelector(`script[src="${n}"]`)){e();return}const i=document.createElement("script");i.src=n,i.onload=e,i.onerror=t,document.head.appendChild(i)})}const JM={name:"App",data(){return{activeView:"dashboard",activeMenuLabel:"Dashboard",authBusy:!1,authHint:"Usa Ingresar si ya tienes cuenta, o Crear cuenta si es tu primera vez.",authHintError:!1,authReady:!1,cloudErrorMessage:"",cloudStatus:"Local",cloudStatusError:!1,currentUser:null,dbReady:!1,fleet:XM(),firestoreUnsubscribe:null,hasLoadedRemoteFleet:!1,isOwner:!1,isApplyingRemoteFleet:!1,isSavingToFirestore:!1,lastLocalWriteAt:0,lastSyncAt:Md(localStorage)?Number(Cd().updatedAt||0):0,loginEmail:"",loginPassword:"",loginThreeCleanup:null,syncSource:"local",mobileMenuOpen:!1,sidebarCollapsed:!1,textSizeLarge:!1,icons:{add:CM,aircrafts:bd,alerts:yd,calendar:Ed,components:Td,dashboard:Ad,database:wd,delete:PM,download:DM,due:VM,edit:LM,history:Rd,login:IM,overhaul:UM,save:NM,serviceTime:FM,signOut:OM,sync:BM,user:HM},newAircraft:{code:"",name:"",notes:""},editingAircraftId:"",editingAircraftDraft:{code:"",name:"",notes:""},draggingAircraftId:"",draggingRowIndex:null,menuItems:[{label:"Dashboard",target:"dashboard",icon:Ad},{label:"Aeronaves",target:"aeronaves",icon:bd},{label:"Componentes",target:"componentes",icon:Td},{label:"Base de datos",target:"base-datos",icon:wd},{label:"Alertas",target:"alertas",icon:yd},{label:"Calendario",target:"calendario",icon:Ed},{label:"Historial",target:"historial",icon:Rd}]}},computed:{activeUser(){return this.currentUser},isAuthenticated(){return!!(this.currentUser&&!this.currentUser.isAnonymous)},todayLabel(){return Hi(Un)},authStatus(){return this.isAuthenticated?this.isOwner?"Editor":"Solo lectura":"No autenticado"},currentAircraft(){return this.fleet.aircrafts.find(n=>n.id===this.fleet.selectedId)||null},currentRows(){return this.currentAircraft?this.currentAircraft.rows:[]},aircraftChip(){return this.currentAircraft?`${this.currentAircraft.code} (${this.currentAircraft.name})`:"--"},cloudStatusText(){return this.cloudStatus.toLowerCase()},syncSourceText(){return this.syncSource==="remote"?"Remoto":"Local"},lastSyncLabel(){return this.lastSyncAt?new Intl.DateTimeFormat("es-PE",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(this.lastSyncAt)):"Sin datos"},metrics(){const n=this.currentRows,e=n.length,t=n.filter(u=>this.getStatus(u)==="CRITICO").length,i=n.filter(u=>this.getStatus(u)==="ALERTA").length,s=n.filter(u=>this.getStatus(u)==="OK").length,r=n.filter(u=>{const f=gs(u.due);if(!f)return!1;const d=Math.floor((f-Un)/864e5);return d>=0&&d<=90}).length,a=n.filter(u=>{const f=gs(u.due);if(!f)return!1;const d=Math.floor((f-Un)/864e5);return d>=0&&d<=180}).length,o=n.reduce((u,f)=>u+this.rowConsumedHours(f),0),l=n.reduce((u,f)=>u+this.rowRemainingHours(f),0),c=Math.round((t+i*.5)/Math.max(e,1)*100);return{total:e,critical:t,alert:i,ok:s,dueIn90:r,dueIn180:a,consumedTotal:o,remainingTotal:l,risk:c}},riskRingStyle(){const n=Math.round(this.metrics.risk/100*360);return{background:`conic-gradient(${this.riskLabel.color} 0 ${n}deg, #183458 ${n}deg 360deg)`}},riskLabel(){return this.metrics.risk>=70?{label:"Alto",color:"var(--danger)"}:this.metrics.risk>=40?{label:"Medio",color:"var(--warn)"}:{label:"Bajo",color:"var(--ok)"}},riskAttentionText(){return`${this.metrics.critical+this.metrics.alert} de ${Math.max(this.metrics.total,1)} componentes requieren atención`},panelTotals(){return{assigned:this.currentRows.reduce((n,e)=>n+this.rowAssignedHours(e),0),consumed:this.currentRows.reduce((n,e)=>n+this.rowConsumedHours(e),0),remaining:this.currentRows.reduce((n,e)=>n+this.rowRemainingHours(e),0)}},dueRows(){return this.currentRows.map((n,e)=>({row:n,index:e,dueDate:gs(n.due)})).filter(n=>n.dueDate).sort((n,e)=>n.dueDate-e.dueDate)},aircraftSeries(){const n=this.currentRows.find(e=>String(e.series||"").trim());return n?String(n.series).trim():"--"},nextDueDate(){return this.dueRows.length>0?this.dueRows[0].row.due:"--"},aircraftState(){return this.currentRows.length===0?"SIN DATOS":this.metrics.critical>0?"CRITICO":this.metrics.alert>0?"ALERTA":"OPERATIVO"},consumedPct(){const n=this.panelTotals.assigned;return n<=0?0:Math.max(0,Math.min(100,this.panelTotals.consumed/n*100))},chartBars(){const n=this.currentRows.slice(0,6);if(n.length===0)return[];const e=Math.max(1,...n.map(t=>Math.max(this.rowConsumedHours(t)+Math.max(this.rowRemainingHours(t),0),1)));return n.map((t,i)=>{const s=this.rowConsumedHours(t),r=Math.max(this.rowRemainingHours(t),0),a=Math.max(s+r,1),o=this.getStatus(t);return{key:`${t.component}-${i}`,label:t.component||"Sin nombre",logo:this.componentLogo(t),categoryClass:this.categoryClass(t),consumed:s,remaining:r,percentage:Math.round(s/a*100),consumedWidth:Math.max(0,Math.min(100,s/e*100)),remainingWidth:Math.max(0,Math.min(100,r/e*100)),statusClass:o==="CRITICO"?"critical":o==="ALERTA"?"warn":"ok"}})},categoryChart(){const n=new Map;this.currentRows.forEach(t=>{const i=this.componentCategory(t),s=n.get(i.key)||{...i,value:0};s.value+=Math.max(this.rowConsumedHours(t),0),n.set(i.key,s)});const e=Math.max(this.metrics.consumedTotal,1);return Array.from(n.values()).sort((t,i)=>i.value-t.value).map(t=>({...t,percentage:Math.round(t.value/e*100)}))},categoryDonutStyle(){let n=0;const e=this.categoryChart.map(t=>{const i=n+t.percentage/100*360,s=`${t.color} ${n}deg ${i}deg`;return n=i,s});return{background:e.length?`conic-gradient(${e.join(", ")})`:"#183458"}},statusChart(){const n=[{key:"ok",label:"Operativos",value:this.metrics.ok,color:"#16b86a"},{key:"alert",label:"Atención",value:this.metrics.alert,color:"#ffb100"},{key:"critical",label:"Overhaul",value:this.metrics.critical,color:"#ff4f4f"}],e=Math.max(this.metrics.total,1);return n.map(t=>({...t,percentage:Math.round(t.value/e*100)}))},statusDonutStyle(){let n=0;const e=this.statusChart.map(t=>{const i=n+t.percentage/100*360,s=`${t.color} ${n}deg ${i}deg`;return n=i,s});return{background:e.length?`conic-gradient(${e.join(", ")})`:"#183458"}},trendChart(){const n=this.currentRows.slice(0,6),e=n.flatMap(s=>[this.rowConsumedHours(s),Math.max(this.rowRemainingHours(s),0)]),t=Math.max(1,...e),i=n.map((s,r)=>{const a=48+r*532/Math.max(n.length-1,1),o=150-this.rowConsumedHours(s)/t*120,l=150-Math.max(this.rowRemainingHours(s),0)/t*120;return{key:`${s.component}-${r}`,x:a,consumedY:o,remainingY:l,label:this.shortComponentLabel(s.component)}});return{max:t,points:i,consumedPoints:i.map(s=>`${s.x},${s.consumedY}`).join(" "),remainingPoints:i.map(s=>`${s.x},${s.remainingY}`).join(" "),gridLines:[30,70,110,150].map(s=>({y:s}))}},dueEvents(){return this.dueRows.length===0?[{key:"empty",component:"Sin vencimientos registrados",due:"--",className:"ok"}]:this.dueRows.slice(0,5).map(n=>{const e=this.getStatus(n.row);return{key:`${n.row.component}-${n.index}`,component:n.row.component,due:n.row.due,className:e==="CRITICO"?"danger":e==="ALERTA"?"warn":"ok"}})},alertRows(){const n=this.currentRows.map((e,t)=>{const i=this.getStatus(e);return{key:`${e.component}-${t}`,component:e.component||"Sin nombre",status:i,className:i==="CRITICO"?"danger":"warn"}}).filter(e=>e.status==="CRITICO"||e.status==="ALERTA");return n.length?n:[{key:"empty",component:"Sin alertas activas",status:"OK",className:"ok"}]},recentChanges(){return Kl(this.fleet.changes)},historyRows(){return this.currentRows.map((n,e)=>{const t=this.getStatus(n);return{key:`${n.component}-${n.series}-${e}`,component:n.component||"Sin nombre",series:n.series||"--",workshop:n.workshop||"--",overhaul:n.overhaul||"--",due:n.due||"--",status:t,statusClass:this.statusClass(n)}})}},watch:{isAuthenticated(n){if(n){this.destroyLoginThreeBackground();return}this.$nextTick(()=>this.initLoginThreeBackground())}},mounted(){this.initAuth(),this.$nextTick(()=>this.initLoginThreeBackground()),window.addEventListener("resize",this.handleResize)},beforeUnmount(){this.destroyLoginThreeBackground(),window.removeEventListener("resize",this.handleResize),this.firestoreUnsubscribe&&this.firestoreUnsubscribe()},methods:{initLoginThreeBackground(){if(this.loginThreeCleanup||this.isAuthenticated||!this.$refs.threeBg)return;const n=this.$refs.threeBg,e=window.innerWidth<768,t=e?90:180,i=1.7,s=new RM({canvas:n,alpha:!0,antialias:!0,powerPreference:"high-performance"});s.setClearColor(0,0),s.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const r=new a0,a=new pn(60,1,.1,100);a.position.z=8;const o=[],l=new Ht;for(let N=0;N<t;N+=1)o.push((Math.random()-.5)*14,(Math.random()-.5)*10,(Math.random()-.5)*8);l.setAttribute("position",new Ct(o,3));const c=new Gl({color:3718648,size:e?.035:.045,transparent:!0,opacity:.8,blending:ei,depthWrite:!1}),u=new _0(l,c);r.add(u);const f=new Ht,d=new kl({color:2450411,transparent:!0,opacity:.18,blending:ei}),h=new g0(f,d);r.add(h),(()=>{const N=l.attributes.position.array,$=[];for(let _e=0;_e<t;_e+=1){const Ee=N[_e*3],je=N[_e*3+1],Je=N[_e*3+2];for(let Ye=_e+1;Ye<t;Ye+=1){const te=N[Ye*3],ce=N[Ye*3+1],Pe=N[Ye*3+2],ke=Ee-te,De=je-ce,R=Je-Pe;Math.sqrt(ke*ke+De*De+R*R)<i&&$.push(Ee,je,Je,te,ce,Pe)}}h.geometry.setAttribute("position",new Ct($,3))})();const b=new S0([new H(-7,-2.3,-2),new H(-4,-.7,-2.5),new H(-1,.5,-3),new H(2,-.2,-3),new H(4.5,1.2,-2.5),new H(7,.4,-2)]),m=new Ht().setFromPoints(b.getPoints(150)),p=new kl({color:2282478,transparent:!0,opacity:.35,blending:ei}),y=new dh(m,p);r.add(y);const P=new wa(.07,16,16),x=new ir({color:6809849,transparent:!0,opacity:1,blending:ei}),T=new cn(P,x);r.add(T);const A=new wa(.18,16,16),D=new ir({color:3718648,transparent:!0,opacity:.18,blending:ei,depthWrite:!1}),v=new cn(A,D);r.add(v);const w=new ir({color:5217535,wireframe:!0,transparent:!0,opacity:.16,blending:ei}),L=new cn(new Ac(2.25,.012,8,96),w);L.rotation.x=Math.PI/2.6,L.position.set(-2.2,-.4,-1.6),r.add(L);const O=new cn(new Tc(.72,1),new Gl({color:6809849,size:.018,transparent:!0,opacity:.34,blending:ei,depthWrite:!1}));O.position.set(2.6,.45,-.9),r.add(O);let G=0,K=0;const V=N=>{G=N.clientX/window.innerWidth-.5,K=N.clientY/window.innerHeight-.5};document.addEventListener("mousemove",V);const X=()=>{const N=window.innerWidth,$=window.innerHeight;s.setSize(N,$,!1),a.aspect=N/Math.max($,1),a.updateProjectionMatrix()};let ee=0,z=0;const ie=new P0,Q=()=>{const N=ie.getElapsedTime();u.rotation.y+=25e-5,u.rotation.x=Math.sin(N*.08)*.03,h.rotation.y=u.rotation.y,h.rotation.x=u.rotation.x,d.opacity=.11+(Math.sin(N*.7)+1)*.05,z+=9e-4,z>1&&(z=0);const $=b.getPoint(z);T.position.copy($),v.position.copy($);const _e=1+Math.sin(N*4)*.35;v.scale.set(_e,_e,_e),L.rotation.z=N*.18,O.rotation.x=N*.28,O.rotation.y=N*.42,a.position.x+=(G*.15-a.position.x)*.015,a.position.y+=(-K*.12-a.position.y)*.015,a.position.z=8,s.render(r,a),ee=window.requestAnimationFrame(Q)};X(),window.addEventListener("resize",X),Q(),this.loginThreeCleanup=()=>{window.cancelAnimationFrame(ee),window.removeEventListener("resize",X),document.removeEventListener("mousemove",V),l.dispose(),f.dispose(),m.dispose(),P.dispose(),A.dispose(),L.geometry.dispose(),O.geometry.dispose(),c.dispose(),d.dispose(),p.dispose(),x.dispose(),D.dispose(),w.dispose(),O.material.dispose(),s.dispose(),this.loginThreeCleanup=null}},destroyLoginThreeBackground(){this.loginThreeCleanup&&this.loginThreeCleanup()},componentCategory(n){const e=`${n.component||""} ${n.series||""}`.toLowerCase();return/motor|tv3|ai-9|apu/.test(e)?{key:"motors",label:"Motores",color:"#176ee8",logo:"M"}:/vr-|reductor|reduct/.test(e)?{key:"reducers",label:"Reductores",color:"#12b96b",logo:"R"}:/bomba|hidraul/.test(e)?{key:"hydraulic",label:"Hidráulicos",color:"#f2a900",logo:"H"}:/generador|electr|ai-/.test(e)?{key:"systems",label:"Sistemas",color:"#8b62d9",logo:"S"}:{key:"other",label:"Otros",color:"#98a9c2",logo:"O"}},componentLogo(n){return this.componentCategory(n).logo},categoryClass(n){return`category-${this.componentCategory(n).key}`},shortComponentLabel(n){const e=String(n||"Sin datos");return e.length>12?`${e.slice(0,11)}…`:e},async persistFleet(){const n=Date.now();return localStorage.setItem(Ks,JSON.stringify(this.fleet)),Gs(n),this.lastLocalWriteAt=n,this.lastSyncAt=n,this.syncSource="local",this.isApplyingRemoteFleet?!0:this.saveFleetToFirestore()},getRemoteUpdatedAt(n){if(n&&Number.isFinite(Number(n.updatedEpoch))&&Number(n.updatedEpoch)>0)return Number(n.updatedEpoch);if(!n||!n.updatedAt)return 0;if(typeof n.updatedAt.toMillis=="function")return n.updatedAt.toMillis();if(n.updatedAt.seconds)return Number(n.updatedAt.seconds)*1e3;const e=new Date(n.updatedAt).getTime();return Number.isFinite(e)?e:0},recordSystemChange(n,e){const t=Date.now(),i=this.currentAircraft?this.currentAircraft.code:"",s=this.currentUser&&this.currentUser.email?this.currentUser.email:"local",r=Array.isArray(this.fleet.changes)?this.fleet.changes:[];this.fleet.changes=[{id:`${t}-${Math.random().toString(36).slice(2,8)}`,timestamp:t,action:n,detail:e,aircraftCode:i,user:s},...r].slice(0,Ah)},formatChangeDate(n){return n?new Intl.DateTimeFormat("es-PE",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(n)):"--"},rowAssignedHours(n){return Bn(n.assignedTboHours??n.assigned)},rowConsumedHours(n){return Bn(n.consumedTboHours??n.consumed)},rowRemainingHours(n){return Bn(n.remainingTboHours??n.remaining)},updateTboDerived(n){const e=Zs(),t=this.rowAssignedHours(n)-this.rowConsumedHours(n),i=vs(n.overhaul,n.assignedTboYears);n.consumedTboYears=e,n.consumedTsnYears=e,n.remainingTboHours=Ra(t),n.remainingTboYears=i||"",n.assigned=String(n.assignedTboHours??""),n.consumed=String(n.consumedTboHours??""),n.remaining=n.remainingTboHours,i&&(n.due=i)},updateTsnDerived(n){const e=Zs(),t=Bn(n.assignedTsnHours)-Bn(n.consumedTsnHours);n.consumedTsnYears=e,n.remainingTsnHours=Ra(t),n.remainingTsnYears=vs(n.overhaul,n.assignedTsnYears)||""},updateAllDerived(n){this.updateTboDerived(n),this.updateTsnDerived(n)},async saveRowFieldChange(n,e,t=""){t==="tbo"&&this.updateTboDerived(n),t==="tsn"&&this.updateTsnDerived(n),t==="all"&&this.updateAllDerived(n),this.recordSystemChange("Componente actualizado",`${e}: ${n.component||"Sin nombre"}`),await this.persistFleet()},updateCloudStatus(n,e=!1,t=""){this.cloudStatus=n,this.cloudStatusError=e,this.cloudErrorMessage=t},getFirebaseErrorMessage(n){const e=n&&n.code?n.code:"firebase-error",t=n&&n.message?n.message:"Error desconocido de Firebase.";return`${e}: ${t}`},getFleetDocRef(){return!window.firebase||!window.firebase.firestore?null:window.firebase.firestore().collection(kM).doc(GM)},getValidFleet(n){return!n||!Array.isArray(n.aircrafts)||n.aircrafts.length===0?null:{selectedId:n.selectedId&&n.aircrafts.some(t=>t.id===n.selectedId)?n.selectedId:n.aircrafts[0].id,changes:Kl(n.changes),aircrafts:n.aircrafts.map(t=>({id:String(t.id||""),code:String(t.code||""),name:String(t.name||""),notes:String(t.notes||""),rows:Array.isArray(t.rows)?t.rows.map(sr):[]})).filter(t=>t.id&&t.code)}},async loadFleetFromFirestore(){const n=this.getFleetDocRef();if(n)try{const e=await n.get({source:"server"});if(!e.exists){this.updateCloudStatus("Inicial"),this.isOwner&&await this.saveFleetToFirestore(!0);return}const t=e.data()||{},i=this.getValidFleet(t.fleet);if(!i){this.updateCloudStatus("Datos invalidos",!0);return}const s=this.getRemoteUpdatedAt(t)||Date.now();this.hasLoadedRemoteFleet=!0,this.isApplyingRemoteFleet=!0,this.fleet=i,localStorage.setItem(Ks,JSON.stringify(i)),Gs(s),this.lastSyncAt=s,this.syncSource="remote",this.$nextTick(()=>{this.isApplyingRemoteFleet=!1}),this.updateCloudStatus("Sincronizado")}catch(e){const t=this.getFirebaseErrorMessage(e);console.error("Firestore initial read error:",e),this.updateCloudStatus("Error lectura",!0,t),this.updateLoginHint(`No se pudo cargar la flota desde Firestore. ${t}`,!0)}},subscribeFleetFromFirestore(){const n=this.getFleetDocRef();n&&(this.firestoreUnsubscribe&&this.firestoreUnsubscribe(),this.hasLoadedRemoteFleet=!1,this.updateCloudStatus("Conectando"),this.firestoreUnsubscribe=n.onSnapshot(async e=>{if(e.metadata.hasPendingWrites)return;if(!e.exists){this.updateCloudStatus("Inicial"),this.isOwner&&await this.saveFleetToFirestore(!0);return}const t=e.data()||{},i=this.getValidFleet(t.fleet),s=this.getRemoteUpdatedAt(t),r=Number(Cd().updatedAt||0);if(!i){this.updateCloudStatus("Datos invalidos",!0);return}if(!this.hasLoadedRemoteFleet){this.hasLoadedRemoteFleet=!0,this.isApplyingRemoteFleet=!0,this.fleet=i,localStorage.setItem(Ks,JSON.stringify(i));const o=s||Date.now();Gs(o),this.lastSyncAt=o,this.syncSource="remote",this.$nextTick(()=>{this.isApplyingRemoteFleet=!1}),this.updateCloudStatus("Sincronizado");return}if(s<=r||this.lastLocalWriteAt&&s<this.lastLocalWriteAt){this.updateCloudStatus("Sincronizado local");return}this.isApplyingRemoteFleet=!0,this.fleet=i,localStorage.setItem(Ks,JSON.stringify(i));const a=s||Date.now();Gs(a),this.lastSyncAt=a,this.syncSource="remote",this.$nextTick(()=>{this.isApplyingRemoteFleet=!1}),this.updateCloudStatus("Sincronizado")},e=>{const t=this.getFirebaseErrorMessage(e);console.error("Firestore read error:",e),this.firestoreUnsubscribe=null,this.updateCloudStatus("Error lectura",!0,t),this.updateLoginHint(`No se pudo leer Firestore. ${t}`,!0)}))},async saveFleetToFirestore(n=!1){if(!this.dbReady)return this.updateCloudStatus("Sin Firebase",!0),this.updateLoginHint("Firestore aun no esta listo.",!0),!1;if(!this.currentUser||this.currentUser.isAnonymous)return this.updateCloudStatus("Requiere login",!0),this.updateLoginHint("Inicia sesion con el correo autorizado para guardar.",!0),!1;if(!this.isOwner&&!n)return this.updateLoginHint("Tu cuenta tiene permisos de solo lectura.",!0),!1;if(this.isApplyingRemoteFleet)return!1;const e=Md(localStorage);if(!n&&!e&&!this.isOwner)return!1;if(!n&&!e&&this.isOwner)try{const i=await this.getFleetDocRef().get();if(i.exists&&this.getValidFleet(i.data()&&i.data().fleet))return!1}catch(i){const s=this.getFirebaseErrorMessage(i);return this.updateCloudStatus("Error lectura",!0,s),this.updateLoginHint(`No se pudo comprobar Firestore. ${s}`,!0),!1}const t=this.getFleetDocRef();if(!t)return!1;try{this.isSavingToFirestore=!0,this.updateCloudStatus("Guardando");const i=Date.now();return await t.set({fleet:Yl(this.fleet),updatedAt:window.firebase.firestore.FieldValue.serverTimestamp(),updatedBy:this.currentUser&&this.currentUser.email?this.currentUser.email:wh,updatedEpoch:i},{merge:!0}),Gs(i),this.lastSyncAt=i,this.syncSource="local",this.updateCloudStatus("Guardado"),!0}catch(i){const s=this.getFirebaseErrorMessage(i);return console.error("Firestore write error:",i),this.updateCloudStatus("Error escritura",!0,s),this.updateLoginHint(`No se pudo guardar en Firestore. ${s}`,!0),!1}finally{this.isSavingToFirestore=!1}},updateLoginHint(n,e=!1){this.authHint=n,this.authHintError=e},formatMetric(n){return new Intl.NumberFormat("es-PE",{minimumFractionDigits:0,maximumFractionDigits:1}).format(n)},downloadAircraftPdf(n){if(!n)return;const e=this.createAircraftPdf(n),t=new Blob([e],{type:"application/pdf"}),i=URL.createObjectURL(t),s=document.createElement("a");s.href=i,s.download=`${Pd(n.code)}-${Pd(n.name)}.pdf`,document.body.appendChild(s),s.click(),s.remove(),window.setTimeout(()=>URL.revokeObjectURL(i),1e3)},createAircraftPdf(n){const r=[];let a=[],o=561;const l=()=>{a.length&&r.push(a.join(`
`)),a=[],o=561},c=N=>{o-N<34&&l()},u=(N,$,_e,Ee=9,je="F1")=>{a.push(`BT /${je} ${Ee} Tf ${$} ${_e} Td (${YM(N)}) Tj ET`)},f=(N,$,_e,Ee)=>{a.push(`0.72 w ${N} ${$} m ${_e} ${Ee} l S`)},d=(N,$=34,_e=9,Ee="F1",je=13)=>{c(je),u(N,$,o,_e,Ee),o-=je},h=(N,$,_e,Ee,je=9)=>{Wo(`${N}: ${$||"--"}`,Ee).forEach(Ye=>d(Ye,_e,je))},_=Array.isArray(n.rows)?n.rows:[],b=_.filter(N=>this.getStatus(N)==="CRITICO").length,m=_.filter(N=>this.getStatus(N)==="ALERTA").length,p=_.filter(N=>this.getStatus(N)==="OK").length,y=_.reduce((N,$)=>N+this.rowAssignedHours($),0),P=_.reduce((N,$)=>N+this.rowConsumedHours($),0),x=_.reduce((N,$)=>N+this.rowRemainingHours($),0),T=_.map(N=>({row:N,dueDate:gs(N.due)})).filter(N=>N.dueDate).sort((N,$)=>N.dueDate-$.dueDate)[0],A=b>0?"CRITICO":m>0?"ALERTA":_.length?"OPERATIVO":"SIN DATOS";d("DIVMAAER - Control de Calidad",34,10,"F2",16),d(`Reporte de Aeronave: ${n.code}`,34,20,"F2",24),d(n.name||"--",34,13,"F1",18),f(34,o+3,808,o+3),o-=12,d("Resumen operativo",34,13,"F2",18),d(`Fecha de reporte: ${Hi(new Date)}`,34,9,"F1",13),d(`Estado general: ${A}`,34,9,"F2",13),d(`Componentes registrados: ${_.length} | Operativos: ${p} | Alertas: ${m} | Criticos: ${b}`,34,9,"F1",13),d(`TBO asignado: ${this.formatMetric(y)} h | Consumido: ${this.formatMetric(P)} h | Remanente: ${this.formatMetric(x)} h`,34,9,"F1",13),d(`Proximo vencimiento: ${T?`${T.row.component||"Componente"} (${T.row.due})`:"--"}`,34,9,"F1",16),h("Notas",n.notes,34,110,9),o-=6,d("Componentes",34,13,"F2",18);const D=[{label:"#",x:34,width:20},{label:"Componente",x:56,width:132},{label:"Serie",x:192,width:108},{label:"Taller",x:304,width:96},{label:"Overhaul",x:404,width:68},{label:"TBO Asig.",x:476,width:58},{label:"TBO Cons.",x:538,width:58},{label:"Rem.",x:600,width:54},{label:"Vence",x:658,width:66},{label:"Estado",x:728,width:80}],v=()=>{c(28),f(34,o+7,808,o+7),D.forEach(N=>u(N.label,N.x,o,8,"F2")),o-=12,f(34,o+5,808,o+5)};v(),_.length===0&&d("No hay componentes registrados para esta aeronave.",34,9,"F1",13),_.forEach((N,$)=>{c(26),o>551&&v();const _e=[String($+1),N.component||"--",N.series||"--",N.workshop||"--",N.overhaul||"--",N.assignedTboHours||N.assigned||"--",N.consumedTboHours||N.consumed||"--",N.remainingTboHours||N.remaining||"--",N.due||"--",this.getStatus(N)];D.forEach((Ee,je)=>{const Je=Math.max(4,Math.floor(Ee.width/5));u(Wo(_e[je],Je)[0],Ee.x,o,7.6,je===9?"F2":"F1")}),o-=12,N.notes&&Wo(`Nota: ${N.notes}`,125).slice(0,2).forEach(Ee=>{c(12),u(Ee,56,o,7.2,"F1"),o-=10}),f(34,o+5,808,o+5)}),r.push(a.join(`
`));const w=[],L=N=>(w.push(N),w.length),O=L("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>"),G=L("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>"),K=[],V=r.map(N=>L(`<< /Length ${N.length} >>
stream
${N}
endstream`)),X=w.length+r.length+1;V.forEach(N=>{const $=L(`<< /Type /Page /Parent ${X} 0 R /MediaBox [0 0 842 595] /Resources << /Font << /F1 ${O} 0 R /F2 ${G} 0 R >> >> /Contents ${N} 0 R >>`);K.push($)}),L(`<< /Type /Pages /Kids [${K.map(N=>`${N} 0 R`).join(" ")}] /Count ${K.length} >>`);const ee=L(`<< /Type /Catalog /Pages ${X} 0 R >>`);let z=`%PDF-1.4
`;const ie=[0];w.forEach((N,$)=>{ie.push(z.length),z+=`${$+1} 0 obj
${N}
endobj
`});const Q=z.length;return z+=`xref
0 ${w.length+1}
0000000000 65535 f 
`,ie.slice(1).forEach(N=>{z+=`${String(N).padStart(10,"0")} 00000 n 
`}),z+=`trailer
<< /Size ${w.length+1} /Root ${ee} 0 R >>
startxref
${Q}
%%EOF`,z},pct(n){const e=Math.max(this.metrics.total,1);return`${Math.round(n/e*100)}%`},getStatus(n){const e=this.rowRemainingHours(n),t=gs(n.due);if(e<0||t&&t<Un)return"CRITICO";const i=this.rowAssignedHours(n),s=t?Math.floor((t-Un)/864e5):null;return s!==null&&s<=180||i>0&&e<=i*.15?"ALERTA":"OK"},statusClass(n){const e=this.getStatus(n);return e==="CRITICO"?"critical":e==="ALERTA"?"warn":"ok"},navigate(n,e=""){var t;this.activeView=n,this.activeMenuLabel=e||((t=this.menuItems.find(i=>i.target===n))==null?void 0:t.label)||"Dashboard",this.setMobileMenuOpen(!1),this.$nextTick(()=>{const i=document.getElementById(n);i&&this.highlightAndScroll(i)})},highlightAndScroll(n){n.scrollIntoView({behavior:"smooth",block:"start"}),n.classList.add("jump-highlight"),window.setTimeout(()=>n.classList.remove("jump-highlight"),1200)},async openAircraft(n){n&&(this.fleet.selectedId=n,await this.persistFleet(),this.navigate("dashboard"))},startAircraftEdit(n){if(!this.isOwner){window.alert("Solo el propietario puede editar aeronaves.");return}this.editingAircraftId=n.id,this.editingAircraftDraft={code:n.code,name:n.name,notes:n.notes||""}},cancelAircraftEdit(){this.editingAircraftId="",this.editingAircraftDraft={code:"",name:"",notes:""}},async saveAircraftEdit(n){if(!this.isOwner){window.alert("Solo el propietario puede editar aeronaves.");return}const e=this.fleet.aircrafts.find(o=>o.id===n),t=this.editingAircraftDraft.code.trim().toUpperCase(),i=this.editingAircraftDraft.name.trim(),s=this.editingAircraftDraft.notes.trim();if(!e||!t||!i){window.alert("Ingresa codigo y nombre para guardar la aeronave.");return}if(this.fleet.aircrafts.some(o=>o.id!==n&&o.code.toUpperCase()===t)){window.alert("Ese codigo ya existe.");return}e.code=t,e.name=i,e.notes=s,this.cancelAircraftEdit(),this.recordSystemChange("Aeronave actualizada",`${t} - ${i}`),await this.persistFleet()||window.alert("La aeronave se actualizo localmente, pero Firebase no pudo sincronizar el cambio.")},aircraftIndex(n){return this.fleet.aircrafts.findIndex(e=>e.id===n)},startAircraftDrag(n,e){if(!this.isOwner||this.editingAircraftId===e){n.preventDefault();return}this.draggingAircraftId=e,n.dataTransfer.effectAllowed="move",n.dataTransfer.setData("text/plain",e)},async dropAircraft(n,e){if(!this.isOwner)return;const t=n.dataTransfer.getData("text/plain")||this.draggingAircraftId,i=this.aircraftIndex(t),s=this.aircraftIndex(e);if(i<0||s<0||i===s){this.finishAircraftDrag();return}const r=[...this.fleet.aircrafts],[a]=r.splice(i,1);r.splice(s,0,a),this.fleet.aircrafts=r,this.finishAircraftDrag(),this.recordSystemChange("Aeronaves reordenadas",`${a.code} movida en la lista`),await this.persistFleet()||window.alert("El orden se actualizo localmente, pero Firebase no pudo sincronizar el cambio.")},finishAircraftDrag(){this.draggingAircraftId=""},async createAircraft(){if(!this.isOwner){window.alert("Solo el propietario puede crear aeronaves.");return}const n=this.newAircraft.code.trim().toUpperCase(),e=this.newAircraft.name.trim(),t=this.newAircraft.notes.trim();if(!n||!e){window.alert("Ingresa codigo y nombre para crear la aeronave.");return}if(this.fleet.aircrafts.some(l=>l.code.toUpperCase()===n)){window.alert("Ese codigo ya existe.");return}const s=`${n.toLowerCase().replace(/[^a-z0-9]+/g,"-")}-${Date.now()}`,r=window.scrollX,a=window.scrollY;this.fleet.aircrafts.push({id:s,code:n,name:e,notes:t,rows:[]}),this.fleet.selectedId=s,this.newAircraft.code="",this.newAircraft.name="",this.newAircraft.notes="",this.recordSystemChange("Aeronave creada",`${n} - ${e}`);const o=await this.persistFleet();this.$nextTick(()=>window.scrollTo(r,a)),o||window.alert("La aeronave se creo localmente, pero Firebase no la pudo sincronizar. Revisa reglas y login.")},canDeleteAircraft(n){return this.isOwner&&!!n},async deleteAircraft(n){if(!this.isOwner){window.alert("Solo el propietario puede eliminar aeronaves.");return}const e=this.fleet.aircrafts.find(s=>s.id===n);if(!this.canDeleteAircraft(e)){window.alert("No se puede eliminar esta aeronave.");return}if(!window.confirm(`Deseas eliminar la aeronave ${e.code}?`))return;this.fleet.aircrafts=this.fleet.aircrafts.filter(s=>s.id!==n),this.fleet.selectedId===n&&(this.fleet.selectedId=this.fleet.aircrafts[0]?this.fleet.aircrafts[0].id:""),this.recordSystemChange("Aeronave eliminada",`${e.code} - ${e.name}`),await this.persistFleet()||window.alert("La aeronave se elimino localmente, pero Firebase no pudo sincronizar el cambio.")},async addRow(){if(!this.isOwner){window.alert("Solo el propietario puede editar.");return}this.currentAircraft&&(this.currentAircraft.rows.push(sr({component:"Nuevo componente",series:"",workshop:"",overhaul:Hi(Un),assigned:"0",consumed:"0",assignedTboHours:"0",assignedTboYears:"1",consumedTboHours:"0",consumedTboYears:Zs(),assignedTsnHours:"0",assignedTsnYears:"1",consumedTsnHours:"0",consumedTsnYears:Zs(),remainingTsnYears:vs(Hi(Un),"1"),notes:"",due:vs(Hi(Un),"1")})),this.recordSystemChange("Componente agregado",`${this.currentAircraft.code}: Nuevo componente`),await this.persistFleet())},startRowDrag(n,e){if(!this.isOwner){n.preventDefault();return}this.draggingRowIndex=e,n.dataTransfer.effectAllowed="move",n.dataTransfer.setData("text/plain",String(e))},async dropRow(n){if(!this.isOwner||!this.currentAircraft||!Array.isArray(this.currentAircraft.rows)){this.finishRowDrag();return}if(this.draggingRowIndex===null)return;const e=Number(this.draggingRowIndex);if(!Number.isInteger(e)||e<0||n<0||n>=this.currentAircraft.rows.length||e===n){this.finishRowDrag();return}const t=[...this.currentAircraft.rows],[i]=t.splice(e,1);t.splice(n,0,i),this.currentAircraft.rows=t,this.finishRowDrag(),this.recordSystemChange("Componentes reordenados",`${i.component||"Sin nombre"} movido en ${this.currentAircraft.code}`),await this.persistFleet()||window.alert("El orden se actualizo localmente, pero Firebase no pudo sincronizar el cambio.")},finishRowDrag(){this.draggingRowIndex=null},async resetDb(){if(!this.isOwner){window.alert("Solo el propietario puede editar.");return}!window.confirm("Deseas restaurar la base de datos original?")||!this.currentAircraft||(this.currentAircraft.rows=this.currentAircraft.id==="pnp-501"?Yl(Ch).map(sr):[],this.recordSystemChange("Base de datos restaurada",`${this.currentAircraft.code}: datos restaurados`),await this.persistFleet())},async deleteRow(n){if(!this.isOwner){window.alert("Solo el propietario puede editar.");return}if(!this.currentAircraft||!Array.isArray(this.currentAircraft.rows)||n<0||n>=this.currentAircraft.rows.length)return;const e=this.currentAircraft.rows[n],t=e&&e.component?e.component:"este componente";window.confirm(`Deseas eliminar ${t}?`)&&(this.currentAircraft.rows.splice(n,1),this.recordSystemChange("Componente eliminado",`${this.currentAircraft.code}: ${t}`),await this.persistFleet())},setMobileMenuOpen(n){this.mobileMenuOpen=n},handleResize(){window.innerWidth>760&&this.setMobileMenuOpen(!1)},getAuthErrorMessage(n){const e=n&&n.code?n.code:"";return e==="auth/invalid-credential"||e==="auth/wrong-password"||e==="auth/user-not-found"?"Correo o contrasena incorrectos.":e==="auth/too-many-requests"?"Demasiados intentos. Espera un momento y vuelve a probar.":e==="auth/operation-not-allowed"?"Activa Email/Password en Firebase Authentication.":e==="auth/weak-password"?"La contrasena debe tener al menos 6 caracteres.":e==="auth/email-already-in-use"?"Ese correo ya existe. Usa Ingresar o restablece la contrasena.":e==="auth/invalid-email"?"Ingresa un correo valido.":"No se pudo iniciar sesion con correo."},async createEmailUser(){if(!this.authReady)return this.updateLoginHint("Firebase Auth no esta disponible.",!0),!1;if(!this.loginEmail||!this.loginPassword)return this.updateLoginHint("Ingresa correo y contrasena para crear la cuenta.",!0),!1;try{return this.authBusy=!0,await window.firebase.auth().createUserWithEmailAndPassword(this.loginEmail,this.loginPassword),this.loginPassword="",this.updateLoginHint("Cuenta creada e ingreso correcto."),!0}catch(n){return console.error("Email sign-up error:",n),this.updateLoginHint(this.getAuthErrorMessage(n),!0),!1}finally{this.authBusy=!1}},async sendPasswordReset(){if(!this.authReady){this.updateLoginHint("Firebase Auth no esta disponible.",!0);return}if(!this.loginEmail){this.updateLoginHint("Escribe tu correo para enviar el restablecimiento.",!0);return}try{this.authBusy=!0,await window.firebase.auth().sendPasswordResetEmail(this.loginEmail),this.updateLoginHint("Te enviamos un correo para restablecer la contrasena.")}catch(n){console.error("Password reset error:",n),this.updateLoginHint(this.getAuthErrorMessage(n),!0)}finally{this.authBusy=!1}},async signInWithEmail(){if(!this.authReady){this.updateLoginHint("Firebase Auth no esta disponible.",!0);return}if(!this.loginEmail||!this.loginPassword){this.updateLoginHint("Ingresa correo y contrasena.",!0);return}try{this.authBusy=!0,await window.firebase.auth().signInWithEmailAndPassword(this.loginEmail,this.loginPassword),this.loginPassword="",this.updateLoginHint("Ingreso correcto con correo.")}catch(n){console.error("Email sign-in error:",n),this.updateLoginHint(this.getAuthErrorMessage(n),!0)}finally{this.authBusy=!1}},async signOut(){if(!this.authReady){this.currentUser=null,this.isOwner=!1;return}await window.firebase.auth().signOut()},async initAuth(){if(!KM()){this.updateLoginHint("Configura Firebase Auth para iniciar sesion.",!0);return}try{await Xo("https://www.gstatic.com/firebasejs/10.12.3/firebase-app-compat.js"),await Xo("https://www.gstatic.com/firebasejs/10.12.3/firebase-auth-compat.js"),await Xo("https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore-compat.js")}catch(n){console.error("Firebase SDK load error:",n),this.updateLoginHint("Firebase Auth no esta disponible.",!0),this.updateCloudStatus("Sin conexion",!0,this.getFirebaseErrorMessage(n));return}if(!window.firebase||!window.firebase.firestore){this.updateLoginHint("Firebase Auth no esta disponible.",!0),this.updateCloudStatus("Sin Firebase",!0);return}window.firebase.apps.length||window.firebase.initializeApp(Rh),this.authReady=!0,this.dbReady=!0,window.firebase.auth().onAuthStateChanged(async n=>{if(this.currentUser=n,this.isOwner=!1,!n||n.isAnonymous){this.firestoreUnsubscribe&&(this.firestoreUnsubscribe(),this.firestoreUnsubscribe=null),this.updateCloudStatus("Requiere login"),this.updateLoginHint("Usa Ingresar si ya tienes cuenta, o Crear cuenta si es tu primera vez.");return}const e=(n.email||"").toLowerCase();let t="";try{t=(await n.getIdTokenResult()).claims.role||""}catch(i){console.warn("No se pudieron leer los claims de Auth:",i)}this.isOwner=t==="editor"||ZM(e),n&&!this.isOwner&&this.updateLoginHint("Ingreso autenticado en modo solo lectura."),n&&this.isOwner&&this.updateLoginHint("Ingreso autenticado en modo editor."),await this.loadFleetFromFirestore(),this.subscribeFleetFromFirestore()})}}},$M={key:0,class:"login-screen"},QM={id:"three-bg",ref:"threeBg","aria-hidden":"true"},jM=["disabled"],eb=["disabled"],tb={class:"login-actions"},nb=["disabled"],ib=["src"],sb=["disabled"],rb=["src"],ab=["disabled"],ob={key:1,class:"layout"},lb={class:"brand"},cb={class:"brand-sub"},ub=["aria-label","title"],db={id:"sidebar-menu",class:"menu"},fb=["href","onClick"],hb={class:"menu-icon","aria-hidden":"true"},pb=["src"],mb={class:"menu-label"},gb={class:"content"},_b={class:"topbar"},vb={class:"topbar-left"},xb={class:"title-wrap"},Sb={class:"top-actions"},Mb=["title"],bb={class:"chip aircraft-chip"},yb={class:"chip date-chip"},Eb=["src"],Tb=["title"],Ab=["src"],wb=["title"],Rb=["title"],Cb={class:"auth-status"},Pb=["src"],Db=["src"],Lb={id:"aeronaves",class:"view"},Ib={class:"panel"},Ub={class:"aircrafts-layout"},Nb={class:"aircraft-list"},Fb=["draggable","onDragstart","onDrop"],Ob={key:0,class:"aircraft-notes"},Bb={class:"aircraft-actions"},Hb=["disabled","onClick"],Vb=["src"],zb=["onClick"],kb=["src"],Gb=["disabled","onClick"],Wb=["src"],Xb=["aria-label","title","onClick"],qb=["src"],Yb=["onClick"],Kb=["src"],Zb={key:0,class:"empty-note"},Jb=["disabled"],$b=["disabled"],Qb=["disabled"],jb=["disabled"],ey=["src"],ty={key:0,id:"dashboard",ref:"dashboard",class:"grid-kpi view"},ny={class:"kpi kpi-info"},iy={class:"kpi-head"},sy={class:"kpi-icon","aria-hidden":"true"},ry=["src"],ay={class:"kpi-value"},oy={class:"kpi kpi-danger"},ly={class:"kpi-head"},cy={class:"kpi-icon","aria-hidden":"true"},uy=["src"],dy={class:"kpi-value"},fy={class:"kpi-meta"},hy={class:"kpi-progress"},py={class:"kpi kpi-warn"},my={class:"kpi-head"},gy={class:"kpi-icon","aria-hidden":"true"},_y=["src"],vy={class:"kpi-value"},xy={class:"kpi-meta"},Sy={class:"kpi-progress"},My={class:"kpi kpi-ok"},by={class:"kpi-head"},yy={class:"kpi-icon","aria-hidden":"true"},Ey=["src"],Ty={class:"kpi-value"},Ay={class:"kpi-meta"},wy={class:"kpi-progress"},Ry={class:"kpi risk-card"},Cy={class:"kpi-risk"},Py={class:"risk-copy"},Dy={key:1,id:"main-grid-view",class:"main-grid view"},Ly={class:"panel"},Iy={class:"panel-sub"},Uy={class:"plane-title"},Ny={class:"meta-list"},Fy={class:"state-pill"},Oy={class:"progress-title"},By={class:"progress"},Hy={class:"panel"},Vy={class:"resource-chart"},zy={class:"resource-row-head"},ky={class:"resource-name"},Gy=["aria-label"],Wy={class:"resource-values"},Xy={class:"panel"},qy={class:"icon-heading"},Yy=["src"],Ky={class:"events"},Zy={key:2,id:"componentes",class:"analytics-grid view"},Jy={class:"panel analytics-panel"},$y={class:"donut-layout"},Qy={class:"donut-center"},jy={class:"chart-list"},eE={class:"panel analytics-panel trend-panel"},tE={class:"trend-chart"},nE={class:"trend-axis-label top"},iE={viewBox:"0 0 600 180",role:"img","aria-label":"Tendencia de consumo y remanente"},sE=["y1","y2"],rE=["points"],aE=["points"],oE=["cx","cy"],lE=["cx","cy"],cE=["x"],uE={class:"panel analytics-panel"},dE={class:"donut-layout status-layout"},fE={class:"donut-center"},hE={class:"chart-list"},pE={key:3,id:"base-datos",ref:"baseDatos",class:"panel table-panel view"},mE={class:"table-title"},gE={class:"table-tools"},_E=["disabled"],vE=["src"],xE=["disabled"],SE=["src"],ME={class:"table-wrap"},bE=["onDrop"],yE={class:"row-drag-cell"},EE=["disabled","onDragstart"],TE={class:"table-component"},AE=["onUpdate:modelValue","disabled","onChange"],wE=["onUpdate:modelValue","disabled","onChange"],RE=["onUpdate:modelValue","disabled","onChange"],CE=["onUpdate:modelValue","disabled","onInput","onChange"],PE=["onUpdate:modelValue","disabled","onInput","onChange"],DE=["onUpdate:modelValue","disabled","onInput","onChange"],LE=["onUpdate:modelValue","disabled","onInput","onChange"],IE=["onUpdate:modelValue"],UE=["onUpdate:modelValue","disabled","onInput","onChange"],NE=["onUpdate:modelValue","disabled","onInput","onChange"],FE=["onUpdate:modelValue","disabled","onInput","onChange"],OE=["onUpdate:modelValue"],BE=["onUpdate:modelValue"],HE=["onUpdate:modelValue"],VE=["onUpdate:modelValue"],zE=["onUpdate:modelValue"],kE=["onUpdate:modelValue","disabled","onChange"],GE=["onUpdate:modelValue"],WE=["disabled","onClick"],XE=["src"],qE={key:4,id:"alertas",class:"view"},YE={class:"stats-row"},KE={class:"mini"},ZE={style:{color:"var(--danger)"}},JE={class:"mini"},$E={style:{color:"var(--warn)"}},QE={class:"mini"},jE={style:{color:"var(--warn)"}},eT={class:"mini"},tT={style:{color:"#ffd58f"}},nT={class:"mini"},iT={class:"panel"},sT={class:"events"},rT={key:5,id:"calendario",class:"panel view"},aT={class:"icon-heading"},oT=["src"],lT={class:"events"},cT={key:6,id:"historial",class:"panel table-panel view"},uT={class:"change-log"},dT={key:0,class:"empty-note"},fT={class:"table-wrap"},hT={class:"history-table"};function pT(n,e,t,i,s,r){return Xe(),qe("div",{class:Dt(["app-shell",{"sidebar-collapsed":s.sidebarCollapsed,"text-large":s.textSizeLarge}])},[r.isAuthenticated?(Xe(),qe("div",ob,[S("aside",{class:Dt(["sidebar",{open:s.mobileMenuOpen}])},[S("div",lb,[e[28]||(e[28]=S("h2",{class:"brand-title"},"DIVMAAER",-1)),S("p",cb,ye(r.currentAircraft?r.currentAircraft.code:"CONTROL DE CALIDAD"),1)]),S("button",{class:"sidebar-collapse-btn",type:"button","aria-label":s.sidebarCollapsed?"Desplegar menu lateral":"Ocultar menu lateral",title:s.sidebarCollapsed?"Desplegar menu":"Ocultar menu",onClick:e[5]||(e[5]=a=>s.sidebarCollapsed=!s.sidebarCollapsed)},ye(s.sidebarCollapsed?"›":"‹"),9,ub),S("nav",db,[(Xe(!0),qe(xt,null,rn(s.menuItems,a=>(Xe(),qe("a",{key:a.label,class:Dt(["menu-item",{active:s.activeMenuLabel===a.label}]),href:`#${a.target}`,onClick:Li(o=>r.navigate(a.target,a.label),["prevent"])},[S("span",hb,[S("img",{src:a.icon,alt:""},null,8,pb)]),S("span",mb,ye(a.label),1)],10,fb))),128))]),e[29]||(e[29]=S("div",{class:"profile"},[S("b",null,"Marlon Chuquino"),dt(" Administrador ")],-1))],2),S("div",{class:Dt(["mobile-menu-backdrop",{open:s.mobileMenuOpen}]),onClick:e[6]||(e[6]=a=>r.setMobileMenuOpen(!1))},null,2),S("main",gb,[S("header",_b,[S("div",vb,[S("button",{class:"mobile-menu-btn",type:"button","aria-label":"Abrir menu",onClick:e[7]||(e[7]=a=>r.setMobileMenuOpen(!s.mobileMenuOpen))}," ☰ "),e[30]||(e[30]=S("div",{class:"topbar-brand"},[S("p",{class:"topbar-kicker"},"CONTROL DE CALIDAD"),S("h1",null,"Sistema de Gestión de Recursos Aeronáuticos")],-1))]),S("div",xb,[S("p",null,"Dashboard tecnico · "+ye(r.currentAircraft?r.currentAircraft.code:"--"),1)]),S("div",Sb,[S("button",{class:"chip text-size-btn",type:"button",title:s.textSizeLarge?"Achicar letras":"Agrandar letras",onClick:e[8]||(e[8]=a=>s.textSizeLarge=!s.textSizeLarge)},ye(s.textSizeLarge?"A-":"A+"),9,Mb),S("div",bb,[S("span",null,ye(r.aircraftChip),1),e[31]||(e[31]=dt()),e[32]||(e[32]=S("span",null,"▼",-1))]),S("div",yb,[S("img",{class:"chip-icon",src:s.icons.calendar,alt:"","aria-hidden":"true"},null,8,Eb),dt(" "+ye(r.todayLabel),1)]),S("div",{class:Dt(["chip firebase-chip",{"sync-error":s.cloudStatusError}]),title:s.cloudErrorMessage||s.cloudStatus},[S("img",{class:"chip-icon",src:s.icons.sync,alt:"","aria-hidden":"true"},null,8,Ab),S("span",null,"Firebase "+ye(r.cloudStatusText),1)],10,Tb),S("div",{class:"chip sync-info-chip",title:`Fuente: ${r.syncSourceText}`},[S("span",{class:Dt(["sync-source-dot",{remote:s.syncSource==="remote"}])},null,2),S("span",null,"Últ. sync: "+ye(r.lastSyncLabel),1)],8,wb),S("div",{class:"auth-box",title:s.authHint},[S("span",Cb,[S("img",{class:"btn-icon",src:s.icons.user,alt:"","aria-hidden":"true"},null,8,Pb),dt(ye(r.authStatus),1)]),S("button",{class:"auth-btn",type:"button",onClick:e[9]||(e[9]=(...a)=>r.signOut&&r.signOut(...a))},[S("img",{class:"btn-icon",src:s.icons.signOut,alt:"","aria-hidden":"true"},null,8,Db),e[33]||(e[33]=dt(" Cerrar sesion ",-1))])],8,Rb)])]),vt(S("section",Lb,[S("section",Ib,[e[39]||(e[39]=S("h2",null,"Gestion de Aeronaves",-1)),e[40]||(e[40]=S("p",{class:"panel-sub"},"Selecciona una aeronave operativa o crea una nueva con base de datos vacia.",-1)),S("div",Ub,[S("div",null,[S("div",Nb,[(Xe(!0),qe(xt,null,rn(s.fleet.aircrafts,a=>(Xe(),qe("article",{key:a.id,class:Dt(["aircraft-card",{active:a.id===s.fleet.selectedId,dragging:s.draggingAircraftId===a.id}]),draggable:s.isOwner&&s.editingAircraftId!==a.id,onDragstart:o=>r.startAircraftDrag(o,a.id),onDragover:e[14]||(e[14]=Li(()=>{},["prevent"])),onDrop:Li(o=>r.dropAircraft(o,a.id),["prevent"]),onDragend:e[15]||(e[15]=(...o)=>r.finishAircraftDrag&&r.finishAircraftDrag(...o))},[s.editingAircraftId===a.id?(Xe(),qe(xt,{key:0},[vt(S("input",{"onUpdate:modelValue":e[10]||(e[10]=o=>s.editingAircraftDraft.code=o),class:"aircraft-edit-input",type:"text",maxlength:"30","aria-label":"Codigo de aeronave"},null,512),[[yt,s.editingAircraftDraft.code,void 0,{trim:!0}]]),vt(S("input",{"onUpdate:modelValue":e[11]||(e[11]=o=>s.editingAircraftDraft.name=o),class:"aircraft-edit-input",type:"text",maxlength:"80","aria-label":"Nombre de aeronave"},null,512),[[yt,s.editingAircraftDraft.name,void 0,{trim:!0}]]),vt(S("textarea",{"onUpdate:modelValue":e[12]||(e[12]=o=>s.editingAircraftDraft.notes=o),class:"aircraft-edit-input aircraft-notes-input",maxlength:"240","aria-label":"Notas de aeronave",placeholder:"Notas"},null,512),[[yt,s.editingAircraftDraft.notes,void 0,{trim:!0}]]),S("p",null,"Componentes: "+ye(a.rows.length),1)],64)):(Xe(),qe(xt,{key:1},[S("h3",null,ye(a.code),1),S("p",null,ye(a.name),1),a.notes?(Xe(),qe("p",Ob,ye(a.notes),1)):dn("",!0),S("p",null,"Componentes: "+ye(a.rows.length),1)],64)),S("div",Bb,[s.editingAircraftId===a.id?(Xe(),qe(xt,{key:0},[S("button",{class:"table-btn",type:"button",disabled:!s.isOwner,onClick:o=>r.saveAircraftEdit(a.id)},[S("img",{class:"btn-icon",src:s.icons.save,alt:"","aria-hidden":"true"},null,8,Vb),e[34]||(e[34]=dt("Guardar",-1))],8,Hb),S("button",{class:"table-btn",type:"button",onClick:e[13]||(e[13]=(...o)=>r.cancelAircraftEdit&&r.cancelAircraftEdit(...o))},"Cancelar")],64)):(Xe(),qe(xt,{key:1},[S("button",{class:"table-btn",type:"button",onClick:o=>r.openAircraft(a.id)},[S("img",{class:"btn-icon",src:s.icons.aircrafts,alt:"","aria-hidden":"true"},null,8,kb),e[35]||(e[35]=dt("Abrir",-1))],8,zb),S("button",{class:"table-btn",type:"button",disabled:!s.isOwner,onClick:o=>r.startAircraftEdit(a)},[S("img",{class:"btn-icon",src:s.icons.edit,alt:"","aria-hidden":"true"},null,8,Wb),e[36]||(e[36]=dt("Editar",-1))],8,Gb),S("button",{class:"table-btn aircraft-download-btn",type:"button","aria-label":`Descargar PDF de ${a.code}`,title:`Descargar PDF de ${a.code}`,onClick:o=>r.downloadAircraftPdf(a)},[S("img",{class:"btn-icon",src:s.icons.download,alt:"","aria-hidden":"true"},null,8,qb)],8,Xb)],64)),r.canDeleteAircraft(a)?(Xe(),qe("button",{key:2,class:"table-btn danger-btn",type:"button",onClick:o=>r.deleteAircraft(a.id)},[S("img",{class:"btn-icon",src:s.icons.delete,alt:"","aria-hidden":"true"},null,8,Kb),e[37]||(e[37]=dt(" Eliminar ",-1))],8,Yb)):dn("",!0)])],42,Fb))),128))]),s.fleet.aircrafts.length===0?(Xe(),qe("p",Zb,"No hay aeronaves registradas.")):dn("",!0)]),S("form",{class:"aircraft-form",onSubmit:e[19]||(e[19]=Li((...a)=>r.createAircraft&&r.createAircraft(...a),["prevent"]))},[vt(S("input",{"onUpdate:modelValue":e[16]||(e[16]=a=>s.newAircraft.code=a),type:"text",maxlength:"30",placeholder:"Codigo (ej. PNP-700)",disabled:!s.isOwner},null,8,Jb),[[yt,s.newAircraft.code,void 0,{trim:!0}]]),vt(S("input",{"onUpdate:modelValue":e[17]||(e[17]=a=>s.newAircraft.name=a),type:"text",maxlength:"80",placeholder:"Nombre (ej. Mi-171Sh)",disabled:!s.isOwner},null,8,$b),[[yt,s.newAircraft.name,void 0,{trim:!0}]]),vt(S("textarea",{"onUpdate:modelValue":e[18]||(e[18]=a=>s.newAircraft.notes=a),maxlength:"240",placeholder:"Notas de la aeronave",disabled:!s.isOwner},null,8,Qb),[[yt,s.newAircraft.notes,void 0,{trim:!0}]]),S("button",{class:"table-btn",type:"submit",disabled:!s.isOwner},[S("img",{class:"btn-icon",src:s.icons.add,alt:"","aria-hidden":"true"},null,8,ey),e[38]||(e[38]=dt("Crear aeronave",-1))],8,jb),S("p",{class:Dt(["readonly-note",{visible:!s.isOwner}])},"Solo el propietario puede crear aeronaves.",2)],32)])])],512),[[Om,s.activeView==="aeronaves"]]),s.activeView!=="aeronaves"?(Xe(),qe(xt,{key:0},[s.activeView==="dashboard"?(Xe(),qe("section",ty,[S("article",ny,[S("div",iy,[e[41]||(e[41]=S("p",{class:"kpi-title"},"Total Componentes",-1)),S("span",sy,[S("img",{src:s.icons.components,alt:""},null,8,ry)])]),S("p",ay,ye(r.metrics.total),1),e[42]||(e[42]=S("p",{class:"kpi-meta"},[S("span",null,"Registrados"),S("strong",null,"100%")],-1)),e[43]||(e[43]=S("div",{class:"kpi-progress"},[S("span",{style:{width:"100%"}})],-1))]),S("article",oy,[S("div",ly,[e[44]||(e[44]=S("p",{class:"kpi-title"},"Críticos / Overhaul",-1)),S("span",cy,[S("img",{src:s.icons.overhaul,alt:""},null,8,uy)])]),S("p",dy,ye(r.metrics.critical),1),S("p",fy,[e[45]||(e[45]=S("span",null,"Requieren atención",-1)),S("strong",null,ye(r.pct(r.metrics.critical)),1)]),S("div",hy,[S("span",{style:Gt({width:r.pct(r.metrics.critical)})},null,4)])]),S("article",py,[S("div",my,[e[46]||(e[46]=S("p",{class:"kpi-title"},"Alertas Preventivas",-1)),S("span",gy,[S("img",{src:s.icons.alerts,alt:""},null,8,_y)])]),S("p",vy,ye(r.metrics.alert),1),S("p",xy,[e[47]||(e[47]=S("span",null,"Seguimiento cercano",-1)),S("strong",null,ye(r.pct(r.metrics.alert)),1)]),S("div",Sy,[S("span",{style:Gt({width:r.pct(r.metrics.alert)})},null,4)])]),S("article",My,[S("div",by,[e[48]||(e[48]=S("p",{class:"kpi-title"},"En Condiciones",-1)),S("span",yy,[S("img",{src:s.icons.serviceTime,alt:""},null,8,Ey)])]),S("p",Ty,ye(r.metrics.ok),1),S("p",Ay,[e[49]||(e[49]=S("span",null,"Operativos",-1)),S("strong",null,ye(r.pct(r.metrics.ok)),1)]),S("div",wy,[S("span",{style:Gt({width:r.pct(r.metrics.ok)})},null,4)])]),S("article",Ry,[S("div",Cy,[S("div",{class:"ring",style:Gt(r.riskRingStyle)},[S("span",null,ye(r.metrics.risk)+"%",1)],4),S("div",Py,[e[50]||(e[50]=S("p",{class:"kpi-title"},"Riesgo Global",-1)),S("strong",{style:Gt({color:r.riskLabel.color})},ye(r.metrics.risk)+"%",5),S("span",null,"Nivel: "+ye(r.riskLabel.label),1),S("small",null,ye(r.riskAttentionText),1)])])])],512)):dn("",!0),s.activeView==="dashboard"?(Xe(),qe("section",Dy,[S("article",Ly,[e[59]||(e[59]=S("h2",null,"Aeronave Seleccionada",-1)),S("p",Iy,"Serie "+ye(r.aircraftSeries),1),S("p",Uy,ye(r.currentAircraft?r.currentAircraft.name:"--"),1),S("ul",Ny,[S("li",null,[e[51]||(e[51]=S("span",null,"Horas Totales (TSN):",-1)),e[52]||(e[52]=dt()),S("span",null,ye(r.formatMetric(r.panelTotals.consumed))+" h",1)]),S("li",null,[e[53]||(e[53]=S("span",null,"Vida Total Asignada:",-1)),e[54]||(e[54]=dt()),S("span",null,ye(r.formatMetric(r.panelTotals.assigned))+" h",1)]),S("li",null,[e[55]||(e[55]=S("span",null,"Horas Remanentes:",-1)),e[56]||(e[56]=dt()),S("span",null,ye(r.formatMetric(r.panelTotals.remaining))+" h",1)]),S("li",null,[e[57]||(e[57]=S("span",null,"Vencimiento Calendario:",-1)),e[58]||(e[58]=dt()),S("span",null,ye(r.nextDueDate),1)])]),S("div",Fy,ye(r.aircraftState),1),S("p",Oy,"Vida util consumida: "+ye(r.formatMetric(r.consumedPct))+"%",1),S("div",By,[S("div",{style:Gt({width:`${r.consumedPct}%`})},null,4)])]),S("article",Hy,[e[60]||(e[60]=S("h2",null,"Consumo de Recursos (TSO / Arranques)",-1)),e[61]||(e[61]=S("p",{class:"panel-sub"},"Comparación: consumido vs remanente por componente",-1)),e[62]||(e[62]=S("div",{class:"chart-legend","aria-label":"Leyenda de consumo"},[S("span",null,[S("i",{class:"legend-swatch consumed"}),dt("Consumido")]),S("span",null,[S("i",{class:"legend-swatch remaining"}),dt("Remanente")])],-1)),S("div",Vy,[(Xe(!0),qe(xt,null,rn(r.chartBars,a=>(Xe(),qe("div",{key:a.key,class:"resource-row"},[S("div",zy,[S("div",ky,[S("span",{class:Dt(["component-logo",a.categoryClass])},ye(a.logo),3),S("span",null,ye(a.label),1)]),S("strong",null,ye(a.percentage)+"%",1)]),S("div",{class:"resource-track","aria-label":`${a.label}: ${a.consumed} consumido, ${a.remaining} remanente`},[S("span",{class:"resource-segment consumed",style:Gt({width:`${a.consumedWidth}%`})},null,4),S("span",{class:"resource-segment remaining",style:Gt({width:`${a.remainingWidth}%`})},null,4)],8,Gy),S("div",Wy,[S("span",null,ye(r.formatMetric(a.consumed)),1),S("span",null,ye(r.formatMetric(a.remaining)),1)])]))),128))])]),S("article",Xy,[S("h2",qy,[S("img",{src:s.icons.due,alt:"","aria-hidden":"true"},null,8,Yy),e[63]||(e[63]=dt("Proximos Vencimientos",-1))]),e[64]||(e[64]=S("p",{class:"panel-sub"},"Control calendario",-1)),S("ul",Ky,[(Xe(!0),qe(xt,null,rn(r.dueEvents,a=>(Xe(),qe("li",{key:a.key},[S("span",null,ye(a.component),1),S("span",{class:Dt(["date",a.className])},ye(a.due),3)]))),128))])])])):dn("",!0),s.activeView==="componentes"?(Xe(),qe("section",Zy,[S("article",Jy,[e[67]||(e[67]=S("h2",null,"Consumo de Recursos por Categoría",-1)),e[68]||(e[68]=S("p",{class:"panel-sub"},"Distribución del consumo registrado",-1)),S("div",$y,[S("div",{class:"donut-chart",style:Gt(r.categoryDonutStyle)},[S("div",Qy,[e[65]||(e[65]=S("span",null,"Total",-1)),S("strong",null,ye(r.formatMetric(r.metrics.consumedTotal)),1),e[66]||(e[66]=S("small",null,"HRS / ARR",-1))])],4),S("div",jy,[(Xe(!0),qe(xt,null,rn(r.categoryChart,a=>(Xe(),qe("div",{key:a.key,class:"chart-list-row"},[S("span",null,[S("i",{class:"legend-swatch",style:Gt({background:a.color})},null,4),dt(ye(a.label),1)]),S("strong",null,[dt(ye(r.formatMetric(a.value))+" ",1),S("small",null,ye(a.percentage)+"%",1)])]))),128))])])]),S("article",eE,[e[70]||(e[70]=S("h2",null,"Tendencia de Consumo (TSO)",-1)),e[71]||(e[71]=S("p",{class:"panel-sub"},"Comparación de consumo y remanente por componente",-1)),e[72]||(e[72]=S("div",{class:"chart-legend trend-legend"},[S("span",null,[S("i",{class:"legend-swatch consumed"}),dt("Consumido")]),S("span",null,[S("i",{class:"legend-swatch remaining"}),dt("Remanente")])],-1)),S("div",tE,[S("div",nE,ye(r.formatMetric(r.trendChart.max)),1),e[69]||(e[69]=S("div",{class:"trend-axis-label bottom"},"0",-1)),(Xe(),qe("svg",iE,[(Xe(!0),qe(xt,null,rn(r.trendChart.gridLines,a=>(Xe(),qe("line",{key:a.y,x1:"38",y1:a.y,x2:"590",y2:a.y,class:"trend-grid-line"},null,8,sE))),128)),S("polyline",{points:r.trendChart.consumedPoints,class:"trend-line consumed-line"},null,8,rE),S("polyline",{points:r.trendChart.remainingPoints,class:"trend-line remaining-line"},null,8,aE),(Xe(!0),qe(xt,null,rn(r.trendChart.points,a=>(Xe(),qe("g",{key:a.key},[S("circle",{cx:a.x,cy:a.consumedY,r:"4",class:"trend-point consumed-point"},null,8,oE),S("circle",{cx:a.x,cy:a.remainingY,r:"4",class:"trend-point remaining-point"},null,8,lE),S("text",{x:a.x,y:"176","text-anchor":"middle",class:"trend-label"},ye(a.label),9,cE)]))),128))]))])]),S("article",uE,[e[74]||(e[74]=S("h2",null,"Estado de Componentes",-1)),e[75]||(e[75]=S("p",{class:"panel-sub"},"Situación operativa actual",-1)),S("div",dE,[S("div",{class:"donut-chart status-donut",style:Gt(r.statusDonutStyle)},[S("div",fE,[S("strong",null,ye(r.metrics.total),1),e[73]||(e[73]=S("span",null,"Total",-1))])],4),S("div",hE,[(Xe(!0),qe(xt,null,rn(r.statusChart,a=>(Xe(),qe("div",{key:a.key,class:"chart-list-row"},[S("span",null,[S("i",{class:"legend-swatch",style:Gt({background:a.color})},null,4),dt(ye(a.label),1)]),S("strong",null,[dt(ye(a.value)+" ",1),S("small",null,ye(a.percentage)+"%",1)])]))),128))])])])])):dn("",!0),s.activeView==="base-datos"?(Xe(),qe("section",pE,[S("div",mE,[e[78]||(e[78]=S("h2",null,"Base de Datos de Componentes",-1)),S("div",gE,[S("button",{class:"table-btn",type:"button",disabled:!s.isOwner,onClick:e[20]||(e[20]=(...a)=>r.addRow&&r.addRow(...a))},[S("img",{class:"btn-icon",src:s.icons.add,alt:"","aria-hidden":"true"},null,8,vE),e[76]||(e[76]=dt("Agregar componente",-1))],8,_E),S("button",{class:"table-btn",type:"button",disabled:!s.isOwner,onClick:e[21]||(e[21]=(...a)=>r.resetDb&&r.resetDb(...a))},[S("img",{class:"btn-icon",src:s.icons.database,alt:"","aria-hidden":"true"},null,8,SE),e[77]||(e[77]=dt("Restaurar datos",-1))],8,xE)])]),S("p",{class:Dt(["readonly-note",{visible:!s.isOwner}]),style:{margin:"0 14px 10px"}}," Modo solo lectura: solo el propietario puede editar la base de datos. ",2),S("div",ME,[S("table",null,[e[80]||(e[80]=S("thead",null,[S("tr",null,[S("th",null,"Orden"),S("th",null,"Componente"),S("th",null,"Serie"),S("th",null,"Taller"),S("th",null,"Ultimo Overhaul"),S("th",null,"Asignado TBO (hrs)"),S("th",null,"Asignado TBO (años)"),S("th",null,"Consumido TBO hrs"),S("th",null,"Consumido TBO años"),S("th",null,"Asignado TSN (hrs)"),S("th",null,"Asignado TSN (años)"),S("th",null,"Consumido TSN hrs"),S("th",null,"Consumido TSN años"),S("th",null,"Remanente TBO (hrs)"),S("th",null,"Remanente TBO (años)"),S("th",null,"Remanente TSN (hrs)"),S("th",null,"Remanente TSN (años)"),S("th",null,"Notas"),S("th",null,"Vencimiento"),S("th",null,"Estado"),S("th",null,"Accion")])],-1)),S("tbody",null,[(Xe(!0),qe(xt,null,rn(r.currentRows,(a,o)=>(Xe(),qe("tr",{key:`${r.currentAircraft.id}-${o}`,class:Dt({"dragging-row":s.draggingRowIndex===o}),onDragover:e[23]||(e[23]=Li(()=>{},["prevent"])),onDrop:Li(l=>r.dropRow(o),["prevent"])},[S("td",yE,[S("button",{class:"row-drag-handle",type:"button",draggable:"true","aria-label":"Arrastrar componente",disabled:!s.isOwner,onDragstart:l=>r.startRowDrag(l,o),onDragend:e[22]||(e[22]=(...l)=>r.finishRowDrag&&r.finishRowDrag(...l))}," ⋮⋮ ",40,EE)]),S("td",null,[S("div",TE,[S("span",{class:Dt(["component-logo",r.categoryClass(a)])},ye(r.componentLogo(a)),3),vt(S("input",{"onUpdate:modelValue":l=>a.component=l,class:"cell-input",disabled:!s.isOwner,onChange:l=>r.saveRowFieldChange(a,"Componente")},null,40,AE),[[yt,a.component]])])]),S("td",null,[vt(S("input",{"onUpdate:modelValue":l=>a.series=l,class:"cell-input",disabled:!s.isOwner,onChange:l=>r.saveRowFieldChange(a,"Serie")},null,40,wE),[[yt,a.series]])]),S("td",null,[vt(S("input",{"onUpdate:modelValue":l=>a.workshop=l,class:"cell-input",disabled:!s.isOwner,onChange:l=>r.saveRowFieldChange(a,"Taller")},null,40,RE),[[yt,a.workshop]])]),S("td",null,[vt(S("input",{"onUpdate:modelValue":l=>a.overhaul=l,class:"cell-input",disabled:!s.isOwner,onInput:l=>r.updateAllDerived(a),onChange:l=>r.saveRowFieldChange(a,"Ultimo overhaul","all")},null,40,CE),[[yt,a.overhaul]])]),S("td",null,[vt(S("input",{"onUpdate:modelValue":l=>a.assignedTboHours=l,class:"cell-input numeric-input",disabled:!s.isOwner,onInput:l=>r.updateTboDerived(a),onChange:l=>r.saveRowFieldChange(a,"Asignado TBO horas","tbo")},null,40,PE),[[yt,a.assignedTboHours]])]),S("td",null,[vt(S("input",{"onUpdate:modelValue":l=>a.assignedTboYears=l,class:"cell-input numeric-input",disabled:!s.isOwner,onInput:l=>r.updateTboDerived(a),onChange:l=>r.saveRowFieldChange(a,"Asignado TBO años","tbo")},null,40,DE),[[yt,a.assignedTboYears]])]),S("td",null,[vt(S("input",{"onUpdate:modelValue":l=>a.consumedTboHours=l,class:"cell-input numeric-input",disabled:!s.isOwner,onInput:l=>r.updateTboDerived(a),onChange:l=>r.saveRowFieldChange(a,"Consumido TBO horas","tbo")},null,40,LE),[[yt,a.consumedTboHours]])]),S("td",null,[vt(S("input",{"onUpdate:modelValue":l=>a.consumedTboYears=l,class:"cell-input numeric-input calculated-input",disabled:"",readonly:""},null,8,IE),[[yt,a.consumedTboYears]])]),S("td",null,[vt(S("input",{"onUpdate:modelValue":l=>a.assignedTsnHours=l,class:"cell-input numeric-input",disabled:!s.isOwner,onInput:l=>r.updateTsnDerived(a),onChange:l=>r.saveRowFieldChange(a,"Asignado TSN horas","tsn")},null,40,UE),[[yt,a.assignedTsnHours]])]),S("td",null,[vt(S("input",{"onUpdate:modelValue":l=>a.assignedTsnYears=l,class:"cell-input numeric-input",disabled:!s.isOwner,onInput:l=>r.updateTsnDerived(a),onChange:l=>r.saveRowFieldChange(a,"Asignado TSN años","tsn")},null,40,NE),[[yt,a.assignedTsnYears]])]),S("td",null,[vt(S("input",{"onUpdate:modelValue":l=>a.consumedTsnHours=l,class:"cell-input numeric-input",disabled:!s.isOwner,onInput:l=>r.updateTsnDerived(a),onChange:l=>r.saveRowFieldChange(a,"Consumido TSN horas","tsn")},null,40,FE),[[yt,a.consumedTsnHours]])]),S("td",null,[vt(S("input",{"onUpdate:modelValue":l=>a.consumedTsnYears=l,class:"cell-input numeric-input calculated-input",disabled:"",readonly:""},null,8,OE),[[yt,a.consumedTsnYears]])]),S("td",null,[vt(S("input",{"onUpdate:modelValue":l=>a.remainingTboHours=l,class:"cell-input numeric-input calculated-input",disabled:"",readonly:""},null,8,BE),[[yt,a.remainingTboHours]])]),S("td",null,[vt(S("input",{"onUpdate:modelValue":l=>a.remainingTboYears=l,class:"cell-input numeric-input calculated-input",disabled:"",readonly:""},null,8,HE),[[yt,a.remainingTboYears]])]),S("td",null,[vt(S("input",{"onUpdate:modelValue":l=>a.remainingTsnHours=l,class:"cell-input numeric-input calculated-input",disabled:"",readonly:""},null,8,VE),[[yt,a.remainingTsnHours]])]),S("td",null,[vt(S("input",{"onUpdate:modelValue":l=>a.remainingTsnYears=l,class:"cell-input numeric-input calculated-input",disabled:"",readonly:""},null,8,zE),[[yt,a.remainingTsnYears]])]),S("td",null,[vt(S("textarea",{"onUpdate:modelValue":l=>a.notes=l,class:"cell-input notes-input",disabled:!s.isOwner,maxlength:"360",placeholder:"Notas del componente",onChange:l=>r.saveRowFieldChange(a,"Notas")},null,40,kE),[[yt,a.notes]])]),S("td",null,[vt(S("input",{"onUpdate:modelValue":l=>a.due=l,class:"cell-input calculated-input",disabled:"",readonly:""},null,8,GE),[[yt,a.due]])]),S("td",null,[S("span",{class:Dt(["status",r.statusClass(a)])},ye(r.getStatus(a)),3)]),S("td",null,[S("button",{class:"table-btn danger-btn",type:"button",disabled:!s.isOwner,onClick:l=>r.deleteRow(o)},[S("img",{class:"btn-icon",src:s.icons.delete,alt:"","aria-hidden":"true"},null,8,XE),e[79]||(e[79]=dt("Eliminar",-1))],8,WE)])],42,bE))),128))])])])],512)):dn("",!0),s.activeView==="alertas"?(Xe(),qe("section",qE,[S("div",YE,[S("article",KE,[e[81]||(e[81]=S("p",null,"Overhaul Requerido",-1)),S("b",ZE,ye(r.metrics.critical),1)]),S("article",JE,[e[82]||(e[82]=S("p",null,"Alertas Preventivas",-1)),S("b",$E,ye(r.metrics.alert),1)]),S("article",QE,[e[83]||(e[83]=S("p",null,"Proximos 90 dias",-1)),S("b",jE,ye(r.metrics.dueIn90),1)]),S("article",eT,[e[84]||(e[84]=S("p",null,"Proximos 180 dias",-1)),S("b",tT,ye(r.metrics.dueIn180),1)]),S("article",nT,[e[85]||(e[85]=S("p",null,"Riesgo Global",-1)),S("b",{style:Gt({color:r.riskLabel.color})},ye(r.metrics.risk)+"%",5)])]),S("article",iT,[e[86]||(e[86]=S("h2",null,"Componentes en Alerta",-1)),e[87]||(e[87]=S("p",{class:"panel-sub"},"Elementos con vencimiento cercano o recursos consumidos",-1)),S("ul",sT,[(Xe(!0),qe(xt,null,rn(r.alertRows,a=>(Xe(),qe("li",{key:a.key},[S("span",null,ye(a.component),1),S("span",{class:Dt(["date",a.className])},ye(a.status),3)]))),128))])])])):dn("",!0),s.activeView==="calendario"?(Xe(),qe("section",rT,[S("h2",aT,[S("img",{src:s.icons.due,alt:"","aria-hidden":"true"},null,8,oT),e[88]||(e[88]=dt("Calendario de Vencimientos",-1))]),e[89]||(e[89]=S("p",{class:"panel-sub"},"Proximos controles por fecha",-1)),S("ul",lT,[(Xe(!0),qe(xt,null,rn(r.dueEvents,a=>(Xe(),qe("li",{key:a.key},[S("span",null,ye(a.component),1),S("span",{class:Dt(["date",a.className])},ye(a.due),3)]))),128))])])):dn("",!0),s.activeView==="historial"?(Xe(),qe("section",cT,[e[91]||(e[91]=S("div",{class:"table-title"},[S("div",null,[S("h2",null,"Historial"),S("p",{class:"panel-sub"},"Ultimos 20 cambios del sistema y registro de overhaul")])],-1)),S("div",uT,[(Xe(!0),qe(xt,null,rn(r.recentChanges,a=>(Xe(),qe("article",{key:a.id,class:"change-item"},[S("div",null,[S("strong",null,ye(a.action),1),S("p",null,ye(a.detail),1)]),S("span",null,ye(r.formatChangeDate(a.timestamp)),1)]))),128)),r.recentChanges.length===0?(Xe(),qe("p",dT,"Aun no hay cambios registrados.")):dn("",!0)]),e[92]||(e[92]=S("div",{class:"history-section-title"},"Historial de Overhaul",-1)),S("div",fT,[S("table",hT,[e[90]||(e[90]=S("thead",null,[S("tr",null,[S("th",null,"Componente"),S("th",null,"Serie"),S("th",null,"Taller"),S("th",null,"Ultimo Overhaul"),S("th",null,"Vencimiento"),S("th",null,"Estado")])],-1)),S("tbody",null,[(Xe(!0),qe(xt,null,rn(r.historyRows,a=>(Xe(),qe("tr",{key:a.key},[S("td",null,ye(a.component),1),S("td",null,ye(a.series),1),S("td",null,ye(a.workshop),1),S("td",null,ye(a.overhaul),1),S("td",null,ye(a.due),1),S("td",null,[S("span",{class:Dt(["status",a.statusClass])},ye(a.status),3)])]))),128))])])])])):dn("",!0)],64)):dn("",!0),S("footer",null,ye(new Date().getFullYear())+" Sistema de Gestion de Recursos Aeronauticos · "+ye(r.currentAircraft?r.currentAircraft.code:"PNP-501")+" · Todos los derechos reservados ",1)])])):(Xe(),qe("section",$M,[S("canvas",QM,null,512),S("form",{class:"login-card",onSubmit:e[4]||(e[4]=Li((...a)=>r.signInWithEmail&&r.signInWithEmail(...a),["prevent"]))},[e[25]||(e[25]=S("div",{class:"login-brand"},[S("p",null,"DIVMAAER"),S("h1",null,"Control de Calidad")],-1)),e[26]||(e[26]=S("label",{for:"login-email"},"Correo",-1)),vt(S("input",{id:"login-email","onUpdate:modelValue":e[0]||(e[0]=a=>s.loginEmail=a),class:"login-input",type:"email",autocomplete:"username",placeholder:"correo@ejemplo.com",disabled:s.authBusy},null,8,jM),[[yt,s.loginEmail,void 0,{trim:!0}]]),e[27]||(e[27]=S("label",{for:"login-password"},"Contrasena",-1)),vt(S("input",{id:"login-password","onUpdate:modelValue":e[1]||(e[1]=a=>s.loginPassword=a),class:"login-input",type:"password",autocomplete:"current-password",placeholder:"Contrasena",disabled:s.authBusy},null,8,eb),[[yt,s.loginPassword]]),S("div",tb,[S("button",{class:"login-btn primary",type:"submit",disabled:s.authBusy||!s.authReady},[S("img",{class:"btn-icon",src:s.icons.login,alt:"","aria-hidden":"true"},null,8,ib),dt(" "+ye(s.authBusy?"Procesando...":"Ingresar"),1)],8,nb),S("button",{class:"login-btn",type:"button",disabled:s.authBusy||!s.authReady,onClick:e[2]||(e[2]=(...a)=>r.createEmailUser&&r.createEmailUser(...a))},[S("img",{class:"btn-icon",src:s.icons.user,alt:"","aria-hidden":"true"},null,8,rb),e[24]||(e[24]=dt(" Crear cuenta ",-1))],8,sb)]),S("button",{class:"login-link-btn",type:"button",disabled:s.authBusy||!s.authReady,onClick:e[3]||(e[3]=(...a)=>r.sendPasswordReset&&r.sendPasswordReset(...a))}," Restablecer contrasena ",8,ab),S("p",{class:Dt(["login-hint",{error:s.authHintError}])},ye(s.authHint),3)],32)]))],2)}const mT=zM(JM,[["render",pT]]);rg(mT).mount("#app");
