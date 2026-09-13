(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ol(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const St={},vs=[],kn=()=>{},dd=()=>!1,ya=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ea=n=>n.startsWith("onUpdate:"),Wt=Object.assign,Bl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},vh=Object.prototype.hasOwnProperty,ft=(n,e)=>vh.call(n,e),qe=Array.isArray,xs=n=>fr(n)==="[object Map]",fd=n=>fr(n)==="[object Set]",Rc=n=>fr(n)==="[object Date]",Je=n=>typeof n=="function",wt=n=>typeof n=="string",Wn=n=>typeof n=="symbol",gt=n=>n!==null&&typeof n=="object",hd=n=>(gt(n)||Je(n))&&Je(n.then)&&Je(n.catch),pd=Object.prototype.toString,fr=n=>pd.call(n),xh=n=>fr(n).slice(8,-1),md=n=>fr(n)==="[object Object]",Hl=n=>wt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ks=Ol(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ta=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Sh=/-\w/g,yn=Ta(n=>n.replace(Sh,e=>e.slice(1).toUpperCase())),Mh=/\B([A-Z])/g,Ki=Ta(n=>n.replace(Mh,"-$1").toLowerCase()),gd=Ta(n=>n.charAt(0).toUpperCase()+n.slice(1)),za=Ta(n=>n?`on${gd(n)}`:""),ni=(n,e)=>!Object.is(n,e),Jr=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},_d=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Vl=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Cc;const Aa=()=>Cc||(Cc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zt(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=wt(i)?Th(i):zt(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(wt(n)||gt(n))return n}const bh=/;(?![^(]*\))/g,yh=/:([^]+)/,Eh=/\/\*[^]*?\*\//g;function Th(n){const e={};return n.replace(Eh,"").split(bh).forEach(t=>{if(t){const i=t.split(yh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ct(n){let e="";if(wt(n))e=n;else if(qe(n))for(let t=0;t<n.length;t++){const i=Ct(n[t]);i&&(e+=i+" ")}else if(gt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ah="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wh=Ol(Ah);function vd(n){return!!n||n===""}function Rh(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=zl(n[i],e[i]);return t}function zl(n,e){if(n===e)return!0;let t=Rc(n),i=Rc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Wn(n),i=Wn(e),t||i)return n===e;if(t=qe(n),i=qe(e),t||i)return t&&i?Rh(n,e):!1;if(t=gt(n),i=gt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!zl(n[a],e[a]))return!1}}return String(n)===String(e)}const xd=n=>!!(n&&n.__v_isRef===!0),be=n=>wt(n)?n:n==null?"":qe(n)||gt(n)&&(n.toString===pd||!Je(n.toString))?xd(n)?be(n.value):JSON.stringify(n,Sd,2):String(n),Sd=(n,e)=>xd(e)?Sd(n,e.value):xs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[ka(i,r)+" =>"]=s,t),{})}:fd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ka(t))}:Wn(e)?ka(e):gt(e)&&!qe(e)&&!md(e)?String(e):e,ka=(n,e="")=>{var t;return Wn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ft;class Ch{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Ft&&(Ft.active?(this.parent=Ft,this.index=(Ft.scopes||(Ft.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Ft;try{return Ft=this,e()}finally{Ft=t}}}on(){++this._on===1&&(this.prevScope=Ft,Ft=this)}off(){if(this._on>0&&--this._on===0){if(Ft===this)Ft=this.prevScope;else{let e=Ft;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ph(){return Ft}let Et;const Ga=new WeakSet;class Md{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ft&&(Ft.active?Ft.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ga.has(this)&&(Ga.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||yd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Pc(this),Ed(this);const e=Et,t=En;Et=this,En=!0;try{return this.fn()}finally{Td(this),Et=e,En=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Wl(e);this.deps=this.depsTail=void 0,Pc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ga.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fo(this)&&this.run()}get dirty(){return Fo(this)}}let bd=0,Zs,Js;function yd(n,e=!1){if(n.flags|=8,e){n.next=Js,Js=n;return}n.next=Zs,Zs=n}function kl(){bd++}function Gl(){if(--bd>0)return;if(Js){let e=Js;for(Js=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Zs;){let e=Zs;for(Zs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Ed(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Td(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Wl(i),Dh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Fo(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ad(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Ad(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===nr)||(n.globalVersion=nr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Fo(n))))return;n.flags|=2;const e=n.dep,t=Et,i=En;Et=n,En=!0;try{Ed(n);const s=n.fn(n._value);(e.version===0||ni(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Et=t,En=i,Td(n),n.flags&=-3}}function Wl(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Wl(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Dh(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let En=!0;const wd=[];function ui(){wd.push(En),En=!1}function di(){const n=wd.pop();En=n===void 0?!0:n}function Pc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Et;Et=void 0;try{e()}finally{Et=t}}}let nr=0;class Lh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Rd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Et||!En||Et===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Et)t=this.activeLink=new Lh(Et,this),Et.deps?(t.prevDep=Et.depsTail,Et.depsTail.nextDep=t,Et.depsTail=t):Et.deps=Et.depsTail=t,Cd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Et.depsTail,t.nextDep=void 0,Et.depsTail.nextDep=t,Et.depsTail=t,Et.deps===t&&(Et.deps=i)}return t}trigger(e){this.version++,nr++,this.notify(e)}notify(e){kl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Gl()}}}function Cd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Cd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Oo=new WeakMap,zi=Symbol(""),Bo=Symbol(""),ir=Symbol("");function kt(n,e,t){if(En&&Et){let i=Oo.get(n);i||Oo.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Rd),s.map=i,s.key=t),s.track()}}function ii(n,e,t,i,s,r){const a=Oo.get(n);if(!a){nr++;return}const o=l=>{l&&l.trigger()};if(kl(),e==="clear")a.forEach(o);else{const l=qe(n),c=l&&Hl(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===ir||!Wn(d)&&d>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(ir)),e){case"add":l?c&&o(a.get("length")):(o(a.get(zi)),xs(n)&&o(a.get(Bo)));break;case"delete":l||(o(a.get(zi)),xs(n)&&o(a.get(Bo)));break;case"set":xs(n)&&o(a.get(zi));break}}Gl()}function Qi(n){const e=mt(n);return e===n?e:(kt(e,"iterate",ir),Tn(n)?e:e.map(fi))}function wa(n){return kt(n=mt(n),"iterate",ir),n}function Fn(n,e){return wi(n)?Es(ki(n)?fi(e):e):fi(e)}const Ih={__proto__:null,[Symbol.iterator](){return Wa(this,Symbol.iterator,n=>Fn(this,n))},concat(...n){return Qi(this).concat(...n.map(e=>qe(e)?Qi(e):e))},entries(){return Wa(this,"entries",n=>(n[1]=Fn(this,n[1]),n))},every(n,e){return Kn(this,"every",n,e,void 0,arguments)},filter(n,e){return Kn(this,"filter",n,e,t=>t.map(i=>Fn(this,i)),arguments)},find(n,e){return Kn(this,"find",n,e,t=>Fn(this,t),arguments)},findIndex(n,e){return Kn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Kn(this,"findLast",n,e,t=>Fn(this,t),arguments)},findLastIndex(n,e){return Kn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Kn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Xa(this,"includes",n)},indexOf(...n){return Xa(this,"indexOf",n)},join(n){return Qi(this).join(n)},lastIndexOf(...n){return Xa(this,"lastIndexOf",n)},map(n,e){return Kn(this,"map",n,e,void 0,arguments)},pop(){return Ps(this,"pop")},push(...n){return Ps(this,"push",n)},reduce(n,...e){return Dc(this,"reduce",n,e)},reduceRight(n,...e){return Dc(this,"reduceRight",n,e)},shift(){return Ps(this,"shift")},some(n,e){return Kn(this,"some",n,e,void 0,arguments)},splice(...n){return Ps(this,"splice",n)},toReversed(){return Qi(this).toReversed()},toSorted(n){return Qi(this).toSorted(n)},toSpliced(...n){return Qi(this).toSpliced(...n)},unshift(...n){return Ps(this,"unshift",n)},values(){return Wa(this,"values",n=>Fn(this,n))}};function Wa(n,e,t){const i=wa(n),s=i[e]();return i!==n&&!Tn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Uh=Array.prototype;function Kn(n,e,t,i,s,r){const a=wa(n),o=a!==n&&!Tn(n),l=a[e];if(l!==Uh[e]){const f=l.apply(n,r);return o?fi(f):f}let c=t;a!==n&&(o?c=function(f,d){return t.call(this,Fn(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function Dc(n,e,t,i){const s=wa(n),r=s!==n&&!Tn(n);let a=t,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=Fn(n,c)),t.call(this,c,Fn(n,u),f,n)}):t.length>3&&(a=function(c,u,f){return t.call(this,c,u,f,n)}));const l=s[e](a,...i);return o?Fn(n,l):l}function Xa(n,e,t){const i=mt(n);kt(i,"iterate",ir);const s=i[e](...t);return(s===-1||s===!1)&&Kl(t[0])?(t[0]=mt(t[0]),i[e](...t)):s}function Ps(n,e,t=[]){ui(),kl();const i=mt(n)[e].apply(n,t);return Gl(),di(),i}const Nh=Ol("__proto__,__v_isRef,__isVue"),Pd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Wn));function Fh(n){Wn(n)||(n=String(n));const e=mt(this);return kt(e,"has",n),e.hasOwnProperty(n)}class Dd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Yh:Nd:r?Ud:Id).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=qe(e);if(!s){let l;if(a&&(l=Ih[t]))return l;if(t==="hasOwnProperty")return Fh}const o=Reflect.get(e,t,Jt(e)?e:i);if((Wn(t)?Pd.has(t):Nh(t))||(s||kt(e,"get",t),r))return o;if(Jt(o)){const l=a&&Hl(t)?o:o.value;return s&&gt(l)?Vo(l):l}return gt(o)?s?Vo(o):Yl(o):o}}class Ld extends Dd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const a=qe(e)&&Hl(t);if(!this._isShallow){const c=wi(r);if(!Tn(i)&&!wi(i)&&(r=mt(r),i=mt(i)),!a&&Jt(r)&&!Jt(i))return c||(r.value=i),!0}const o=a?Number(t)<e.length:ft(e,t),l=Reflect.set(e,t,i,Jt(e)?e:s);return e===mt(s)&&l&&(o?ni(i,r)&&ii(e,"set",t,i):ii(e,"add",t,i)),l}deleteProperty(e,t){const i=ft(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ii(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Wn(t)||!Pd.has(t))&&kt(e,"has",t),i}ownKeys(e){return kt(e,"iterate",qe(e)?"length":zi),Reflect.ownKeys(e)}}class Oh extends Dd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Bh=new Ld,Hh=new Oh,Vh=new Ld(!0);const Ho=n=>n,Mr=n=>Reflect.getPrototypeOf(n);function zh(n,e,t){return function(...i){const s=this.__v_raw,r=mt(s),a=xs(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?Ho:e?Es:fi;return!e&&kt(r,"iterate",l?Bo:zi),Wt(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function br(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function kh(n,e){const t={get(s){const r=this.__v_raw,a=mt(r),o=mt(s);n||(ni(s,o)&&kt(a,"get",s),kt(a,"get",o));const{has:l}=Mr(a),c=e?Ho:n?Es:fi;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&kt(mt(s),"iterate",zi),s.size},has(s){const r=this.__v_raw,a=mt(r),o=mt(s);return n||(ni(s,o)&&kt(a,"has",s),kt(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=mt(o),c=e?Ho:n?Es:fi;return!n&&kt(l,"iterate",zi),o.forEach((u,f)=>s.call(r,c(u),c(f),a))}};return Wt(t,n?{add:br("add"),set:br("set"),delete:br("delete"),clear:br("clear")}:{add(s){const r=mt(this),a=Mr(r),o=mt(s),l=!e&&!Tn(s)&&!wi(s)?o:s;return a.has.call(r,l)||ni(s,l)&&a.has.call(r,s)||ni(o,l)&&a.has.call(r,o)||(r.add(l),ii(r,"add",l,l)),this},set(s,r){!e&&!Tn(r)&&!wi(r)&&(r=mt(r));const a=mt(this),{has:o,get:l}=Mr(a);let c=o.call(a,s);c||(s=mt(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?ni(r,u)&&ii(a,"set",s,r):ii(a,"add",s,r),this},delete(s){const r=mt(this),{has:a,get:o}=Mr(r);let l=a.call(r,s);l||(s=mt(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&ii(r,"delete",s,void 0),c},clear(){const s=mt(this),r=s.size!==0,a=s.clear();return r&&ii(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=zh(s,n,e)}),t}function Xl(n,e){const t=kh(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ft(t,s)&&s in i?t:i,s,r)}const Gh={get:Xl(!1,!1)},Wh={get:Xl(!1,!0)},Xh={get:Xl(!0,!1)};const Id=new WeakMap,Ud=new WeakMap,Nd=new WeakMap,Yh=new WeakMap;function qh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yl(n){return wi(n)?n:ql(n,!1,Bh,Gh,Id)}function Kh(n){return ql(n,!1,Vh,Wh,Ud)}function Vo(n){return ql(n,!0,Hh,Xh,Nd)}function ql(n,e,t,i,s){if(!gt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const a=qh(xh(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function ki(n){return wi(n)?ki(n.__v_raw):!!(n&&n.__v_isReactive)}function wi(n){return!!(n&&n.__v_isReadonly)}function Tn(n){return!!(n&&n.__v_isShallow)}function Kl(n){return n?!!n.__v_raw:!1}function mt(n){const e=n&&n.__v_raw;return e?mt(e):n}function Zh(n){return!ft(n,"__v_skip")&&Object.isExtensible(n)&&_d(n,"__v_skip",!0),n}const fi=n=>gt(n)?Yl(n):n,Es=n=>gt(n)?Vo(n):n;function Jt(n){return n?n.__v_isRef===!0:!1}function Jh(n){return Jt(n)?n.value:n}const $h={get:(n,e,t)=>e==="__v_raw"?n:Jh(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Jt(s)&&!Jt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Fd(n){return ki(n)?n:new Proxy(n,$h)}class Qh{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Rd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=nr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return yd(this,!0),!0}get value(){const e=this.dep.track();return Ad(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function jh(n,e,t=!1){let i,s;return Je(n)?i=n:(i=n.get,s=n.set),new Qh(i,s,t)}const yr={},ra=new WeakMap;let Oi;function ep(n,e=!1,t=Oi){if(t){let i=ra.get(t);i||ra.set(t,i=[]),i.push(n)}}function tp(n,e,t=St){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=S=>s?S:Tn(S)||s===!1||s===0?si(S,1):si(S);let u,f,d,m,v=!1,b=!1;if(Jt(n)?(f=()=>n.value,v=Tn(n)):ki(n)?(f=()=>c(n),v=!0):qe(n)?(b=!0,v=n.some(S=>ki(S)||Tn(S)),f=()=>n.map(S=>{if(Jt(S))return S.value;if(ki(S))return c(S);if(Je(S))return l?l(S,2):S()})):Je(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){ui();try{d()}finally{di()}}const S=Oi;Oi=u;try{return l?l(n,3,[m]):n(m)}finally{Oi=S}}:f=kn,e&&s){const S=f,E=s===!0?1/0:s;f=()=>si(S(),E)}const g=Ph(),h=()=>{u.stop(),g&&g.active&&Bl(g.effects,u)};if(r&&e){const S=e;e=(...E)=>{const A=S(...E);return h(),A}}let y=b?new Array(n.length).fill(yr):yr;const P=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const E=u.run();if(S||s||v||(b?E.some((A,D)=>ni(A,y[D])):ni(E,y))){d&&d();const A=Oi;Oi=u;try{const D=[E,y===yr?void 0:b&&y[0]===yr?[]:y,m];y=E,l?l(e,3,D):e(...D)}finally{Oi=A}}}else u.run()};return o&&o(P),u=new Md(f),u.scheduler=a?()=>a(P,!1):P,m=S=>ep(S,!1,u),d=u.onStop=()=>{const S=ra.get(u);if(S){if(l)l(S,4);else for(const E of S)E();ra.delete(u)}},e?i?P(!0):y=u.run():a?a(P.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function si(n,e=1/0,t){if(e<=0||!gt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Jt(n))si(n.value,e,t);else if(qe(n))for(let i=0;i<n.length;i++)si(n[i],e,t);else if(fd(n)||xs(n))n.forEach(i=>{si(i,e,t)});else if(md(n)){for(const i in n)si(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&si(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hr(n,e,t,i){try{return i?n(...i):n()}catch(s){Ra(s,e,t)}}function Rn(n,e,t,i){if(Je(n)){const s=hr(n,e,t,i);return s&&hd(s)&&s.catch(r=>{Ra(r,e,t)}),s}if(qe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Rn(n[r],e,t,i));return s}}function Ra(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||St;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(r){ui(),hr(r,null,10,[n,l,c]),di();return}}np(n,t,s,i,a)}function np(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Kt=[];let Un=-1;const Ss=[];let Ei=null,fs=0;const Od=Promise.resolve();let aa=null;function ip(n){const e=aa||Od;return n?e.then(this?n.bind(this):n):e}function sp(n){let e=Un+1,t=Kt.length;for(;e<t;){const i=e+t>>>1,s=Kt[i],r=sr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Zl(n){if(!(n.flags&1)){const e=sr(n),t=Kt[Kt.length-1];!t||!(n.flags&2)&&e>=sr(t)?Kt.push(n):Kt.splice(sp(e),0,n),n.flags|=1,Bd()}}function Bd(){aa||(aa=Od.then(Vd))}function rp(n){if(!qe(n))Ei&&n.id===-1?Ei.splice(fs+1,0,n):n.flags&1||(Ss.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)Ss.push(n[e]);Bd()}function Lc(n,e,t=Un+1){for(;t<Kt.length;t++){const i=Kt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Kt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Hd(n){if(Ss.length){const e=[...new Set(Ss)].sort((t,i)=>sr(t)-sr(i));if(Ss.length=0,Ei){for(let t=0;t<e.length;t++)Ei.push(e[t]);return}for(Ei=e,fs=0;fs<Ei.length;fs++){const t=Ei[fs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ei=null,fs=0}}const sr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Vd(n){try{for(Un=0;Un<Kt.length;Un++){const e=Kt[Un];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),hr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Un<Kt.length;Un++){const e=Kt[Un];e&&(e.flags&=-2)}Un=-1,Kt.length=0,Hd(),aa=null,(Kt.length||Ss.length)&&Vd()}}let mn=null,zd=null;function oa(n){const e=mn;return mn=n,zd=n&&n.type.__scopeId||null,e}function ap(n,e=mn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Gc(-1);const r=oa(e),a=Gi.length;let o;try{o=n(...s)}finally{for(let l=Gi.length;l>a;l--)ff();oa(r),i._d&&Gc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function vt(n,e){if(mn===null)return n;const t=Ia(mn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,a,o,l=St]=e[s];r&&(Je(r)&&(r={mounted:r,updated:r}),r.deep&&si(a),i.push({dir:r,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Ci(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(ui(),Rn(l,t,8,[n.el,o,n,e]),di())}}function op(n,e){if(Zt){let t=Zt.provides;const i=Zt.parent&&Zt.parent.provides;i===t&&(t=Zt.provides=Object.create(i)),t[n]=e}}function $r(n,e,t=!1){const i=rm();if(i||Ms){let s=Ms?Ms._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Je(e)?e.call(i&&i.proxy):e}}const lp=Symbol.for("v-scx"),cp=()=>$r(lp);function Ya(n,e,t){return kd(n,e,t)}function kd(n,e,t=St){const{immediate:i,deep:s,flush:r,once:a}=t,o=Wt({},t),l=e&&i||!e&&r!=="post";let c;if(or){if(r==="sync"){const m=cp();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=kn,m.resume=kn,m.pause=kn,m}}const u=Zt;o.call=(m,v,b)=>Rn(m,u,v,b);let f=!1;r==="post"?o.scheduler=m=>{en(m,u&&u.suspense)}:r!=="sync"&&(f=!0,o.scheduler=(m,v)=>{v?m():Zl(m)}),o.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=tp(n,e,o);return or&&(c?c.push(d):l&&d()),d}function up(n,e,t){const i=this.proxy,s=wt(n)?n.includes(".")?Gd(i,n):()=>i[n]:n.bind(i,i);let r;Je(e)?r=e:(r=e.handler,t=e);const a=pr(this),o=kd(s,r.bind(i),t);return a(),o}function Gd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const dp=Symbol("_vte"),Ca=n=>n.__isTeleport,qa=Symbol("_leaveCb");function fp(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==hi){e=t;break}}return e}function Wd(n){if(!$l(n))return Ca(n.type)&&n.children?fp(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Je(t.default))return t.default()}}function Jl(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Jl(Ca(t.type)&&Wd(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Xd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ic(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const la=new WeakMap;function $s(n,e,t,i,s=!1){if(qe(n)){n.forEach((b,g)=>$s(b,e&&(qe(e)?e[g]:e),t,i,s));return}if(Qs(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&$s(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Ia(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===St?o.refs={}:o.refs,f=o.setupState,d=mt(f),m=f===St?dd:b=>Ic(u,b)?!1:ft(d,b),v=(b,g)=>!(g&&Ic(u,g));if(c!=null&&c!==l){if(Uc(e),wt(c))u[c]=null,m(c)&&(f[c]=null);else if(Jt(c)){const b=e;v(c,b.k)&&(c.value=null),b.k&&(u[b.k]=null)}}if(Je(l))hr(l,o,12,[a,u]);else{const b=wt(l),g=Jt(l);if(b||g){const h=()=>{if(n.f){const y=b?m(l)?f[l]:u[l]:v()||!n.k?l.value:u[n.k];if(s)qe(y)&&Bl(y,r);else if(qe(y))y.includes(r)||y.push(r);else if(b)u[l]=[r],m(l)&&(f[l]=u[l]);else{const P=[r];v(l,n.k)&&(l.value=P),n.k&&(u[n.k]=P)}}else b?(u[l]=a,m(l)&&(f[l]=a)):g&&(v(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const y=()=>{h(),la.delete(n)};y.id=-1,la.set(n,y),en(y,t)}else Uc(n),h()}}}function Uc(n){const e=la.get(n);e&&(e.flags|=8,la.delete(n))}Aa().requestIdleCallback;Aa().cancelIdleCallback;const Qs=n=>!!n.type.__asyncLoader,$l=n=>n.type.__isKeepAlive;function hp(n,e){Yd(n,"a",e)}function pp(n,e){Yd(n,"da",e)}function Yd(n,e,t=Zt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Pa(e,i,t),t){let s=t.parent;for(;s&&s.parent;)$l(s.parent.vnode)&&mp(i,e,t,s),s=s.parent}}function mp(n,e,t,i){const s=Pa(e,n,i,!0);qd(()=>{Bl(i[e],s)},t)}function Pa(n,e,t=Zt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{ui();const o=pr(t),l=Rn(e,t,n,a);return o(),di(),l});return i?s.unshift(r):s.push(r),r}}const mi=n=>(e,t=Zt)=>{(!or||n==="sp")&&Pa(n,(...i)=>e(...i),t)},gp=mi("bm"),_p=mi("m"),vp=mi("bu"),xp=mi("u"),Sp=mi("bum"),qd=mi("um"),Mp=mi("sp"),bp=mi("rtg"),yp=mi("rtc");function Ep(n,e=Zt){Pa("ec",n,e)}const Tp=Symbol.for("v-ndc");function sn(n,e,t,i){let s;const r=t,a=qe(n);if(a||wt(n)){const o=a&&ki(n);let l=!1,c=!1;o&&(l=!Tn(n),c=wi(n),n=wa(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?Es(fi(n[u])):fi(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(gt(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const zo=n=>n?gf(n)?Ia(n):zo(n.parent):null,js=Wt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>zo(n.parent),$root:n=>zo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Zd(n),$forceUpdate:n=>n.f||(n.f=()=>{Zl(n.update)}),$nextTick:n=>n.n||(n.n=ip.bind(n.proxy)),$watch:n=>up.bind(n)}),Ka=(n,e)=>n!==St&&!n.__isScriptSetup&&ft(n,e),Ap={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Ka(i,e))return a[e]=1,i[e];if(s!==St&&ft(s,e))return a[e]=2,s[e];if(ft(r,e))return a[e]=3,r[e];if(t!==St&&ft(t,e))return a[e]=4,t[e];ko&&(a[e]=0)}}const c=js[e];let u,f;if(c)return e==="$attrs"&&kt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==St&&ft(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,ft(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Ka(s,e)?(s[e]=t,!0):i!==St&&ft(i,e)?(i[e]=t,!0):ft(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(t[o]||n!==St&&o[0]!=="$"&&ft(n,o)||Ka(e,o)||ft(r,o)||ft(i,o)||ft(js,o)||ft(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ft(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Nc(n){return qe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ko=!0;function wp(n){const e=Zd(n),t=n.proxy,i=n.ctx;ko=!1,e.beforeCreate&&Fc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:v,activated:b,deactivated:g,beforeDestroy:h,beforeUnmount:y,destroyed:P,unmounted:S,render:E,renderTracked:A,renderTriggered:D,errorCaptured:_,serverPrefetch:w,expose:L,inheritAttrs:O,components:k,directives:K,filters:B}=e;if(c&&Rp(c,i,null),a)for(const z in a){const ie=a[z];Je(ie)&&(i[z]=ie.bind(t))}if(s){const z=s.call(t,t);gt(z)&&(n.data=Yl(z))}if(ko=!0,r)for(const z in r){const ie=r[z],Q=Je(ie)?ie.bind(t,t):Je(ie.get)?ie.get.bind(t,t):kn,H=!Je(ie)&&Je(ie.set)?ie.set.bind(t):kn,j=dm({get:Q,set:H});Object.defineProperty(i,z,{enumerable:!0,configurable:!0,get:()=>j.value,set:Ee=>j.value=Ee})}if(o)for(const z in o)Kd(o[z],i,t,z);if(l){const z=Je(l)?l.call(t):l;Reflect.ownKeys(z).forEach(ie=>{op(ie,z[ie])})}u&&Fc(u,n,"c");function te(z,ie){qe(ie)?ie.forEach(Q=>z(Q.bind(t))):ie&&z(ie.bind(t))}if(te(gp,f),te(_p,d),te(vp,m),te(xp,v),te(hp,b),te(pp,g),te(Ep,_),te(yp,A),te(bp,D),te(Sp,y),te(qd,S),te(Mp,w),qe(L))if(L.length){const z=n.exposed||(n.exposed={});L.forEach(ie=>{Object.defineProperty(z,ie,{get:()=>t[ie],set:Q=>t[ie]=Q,enumerable:!0})})}else n.exposed||(n.exposed={});E&&n.render===kn&&(n.render=E),O!=null&&(n.inheritAttrs=O),k&&(n.components=k),K&&(n.directives=K),w&&Xd(n)}function Rp(n,e,t=kn){qe(n)&&(n=Go(n));for(const i in n){const s=n[i];let r;gt(s)?"default"in s?r=$r(s.from||i,s.default,!0):r=$r(s.from||i):r=$r(s),Jt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function Fc(n,e,t){Rn(qe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Kd(n,e,t,i){let s=i.includes(".")?Gd(t,i):()=>t[i];if(wt(n)){const r=e[n];Je(r)&&Ya(s,r)}else if(Je(n))Ya(s,n.bind(t));else if(gt(n))if(qe(n))n.forEach(r=>Kd(r,e,t,i));else{const r=Je(n.handler)?n.handler.bind(t):e[n.handler];Je(r)&&Ya(s,r,n)}}function Zd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>ca(l,c,a,!0)),ca(l,e,a)),gt(e)&&r.set(e,l),l}function ca(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&ca(n,r,t,!0),s&&s.forEach(a=>ca(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Cp[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Cp={data:Oc,props:Bc,emits:Bc,methods:zs,computed:zs,beforeCreate:Yt,created:Yt,beforeMount:Yt,mounted:Yt,beforeUpdate:Yt,updated:Yt,beforeDestroy:Yt,beforeUnmount:Yt,destroyed:Yt,unmounted:Yt,activated:Yt,deactivated:Yt,errorCaptured:Yt,serverPrefetch:Yt,components:zs,directives:zs,watch:Dp,provide:Oc,inject:Pp};function Oc(n,e){return e?n?function(){return Wt(Je(n)?n.call(this,this):n,Je(e)?e.call(this,this):e)}:e:n}function Pp(n,e){return zs(Go(n),Go(e))}function Go(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Yt(n,e){return n?[...new Set([].concat(n,e))]:e}function zs(n,e){return n?Wt(Object.create(null),n,e):e}function Bc(n,e){return n?qe(n)&&qe(e)?[...new Set([...n,...e])]:Wt(Object.create(null),Nc(n),Nc(e??{})):e}function Dp(n,e){if(!n)return e;if(!e)return n;const t=Wt(Object.create(null),n);for(const i in e)t[i]=Yt(n[i],e[i]);return t}function Jd(){return{app:null,config:{isNativeTag:dd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lp=0;function Ip(n,e){return function(i,s=null){Je(i)||(i=Wt({},i)),s!=null&&!gt(s)&&(s=null);const r=Jd(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:Lp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:fm,get config(){return r.config},set config(u){},use(u,...f){return a.has(u)||(u&&Je(u.install)?(a.add(u),u.install(c,...f)):Je(u)&&(a.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const m=c._ceVNode||oi(i,s);return m.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(m,u,d),l=!0,c._container=u,u.__vue_app__=c,Ia(m.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Rn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Ms;Ms=c;try{return u()}finally{Ms=f}}};return c}}let Ms=null;const Up=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${yn(e)}Modifiers`]||n[`${Ki(e)}Modifiers`];function Np(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||St;let s=t;const r=e.startsWith("update:"),a=r&&Up(i,e.slice(7));a&&(a.trim&&(s=t.map(u=>wt(u)?u.trim():u)),a.number&&(s=t.map(Vl)));let o,l=i[o=za(e)]||i[o=za(yn(e))];!l&&r&&(l=i[o=za(Ki(e))]),l&&Rn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Rn(c,n,6,s)}}const Fp=new WeakMap;function $d(n,e,t=!1){const i=t?Fp:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Je(n)){const l=c=>{const u=$d(c,e,!0);u&&(o=!0,Wt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(gt(n)&&i.set(n,null),null):(qe(r)?r.forEach(l=>a[l]=null):Wt(a,r),gt(n)&&i.set(n,a),a)}function Da(n,e){return!n||!ya(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),ft(n,e[0].toLowerCase()+e.slice(1))||ft(n,Ki(e))||ft(n,e))}function Hc(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:m,ctx:v,inheritAttrs:b}=n,g=oa(n);let h,y;try{if(t.shapeFlag&4){const S=s||i,E=S;h=On(c.call(E,S,u,f,m,d,v)),y=o}else{const S=e;h=On(S.length>1?S(f,{attrs:o,slots:a,emit:l}):S(f,null)),y=e.props?o:Op(o)}}catch(S){Gi.length=0,Ra(S,n,1),h=oi(hi)}let P=h;if(y&&b!==!1){const S=Object.keys(y),{shapeFlag:E}=P;S.length&&E&7&&(r&&S.some(Ea)&&(y=Bp(y,r)),P=Ts(P,y,!1,!0))}if(t.dirs&&(P=Ts(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(t.dirs):t.dirs),t.transition){const S=Ca(P.type)&&Wd(P)||P;Jl(S,t.transition)}return h=P,oa(g),h}const Op=n=>{let e;for(const t in n)(t==="class"||t==="style"||ya(t))&&((e||(e={}))[t]=n[t]);return e},Bp=(n,e)=>{const t={};for(const i in n)(!Ea(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Hp(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Vc(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(Qd(a,i,d)&&!Da(c,d))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Vc(i,a,c):!0:!!a;return!1}function Vc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Qd(e,n,r)&&!Da(t,r))return!0}return!1}function Qd(n,e,t){const i=n[t],s=e[t];return t==="style"&&gt(i)&&gt(s)?!zl(i,s):i!==s}function Vp({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const jd={},ef=()=>Object.create(jd),tf=n=>Object.getPrototypeOf(n)===jd;function zp(n,e,t,i=!1){const s={},r=ef();n.propsDefaults=Object.create(null),nf(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:Kh(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function kp(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=mt(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Da(n.emitsOptions,d))continue;const m=e[d];if(l)if(ft(r,d))m!==r[d]&&(r[d]=m,c=!0);else{const v=yn(d);s[v]=Wo(l,o,v,m,n,!1)}else m!==r[d]&&(r[d]=m,c=!0)}}}else{nf(n,e,s,r)&&(c=!0);let u;for(const f in o)(!e||!ft(e,f)&&((u=Ki(f))===f||!ft(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=Wo(l,o,f,void 0,n,!0)):delete s[f]);if(r!==o)for(const f in r)(!e||!ft(e,f))&&(delete r[f],c=!0)}c&&ii(n.attrs,"set","")}function nf(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Ks(l))continue;const c=e[l];let u;s&&ft(s,u=yn(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:Da(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=mt(t),c=o||St;for(let u=0;u<r.length;u++){const f=r[u];t[f]=Wo(s,l,f,c[f],n,!ft(c,f))}}return a}function Wo(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=ft(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Je(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=pr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===Ki(t))&&(i=!0))}return i}const Gp=new WeakMap;function sf(n,e,t=!1){const i=t?Gp:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Je(n)){const u=f=>{l=!0;const[d,m]=sf(f,e,!0);Wt(a,d),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return gt(n)&&i.set(n,vs),vs;if(qe(r))for(let u=0;u<r.length;u++){const f=yn(r[u]);zc(f)&&(a[f]=St)}else if(r)for(const u in r){const f=yn(u);if(zc(f)){const d=r[u],m=a[f]=qe(d)||Je(d)?{type:d}:Wt({},d),v=m.type;let b=!1,g=!0;if(qe(v))for(let h=0;h<v.length;++h){const y=v[h],P=Je(y)&&y.name;if(P==="Boolean"){b=!0;break}else P==="String"&&(g=!1)}else b=Je(v)&&v.name==="Boolean";m[0]=b,m[1]=g,(b||ft(m,"default"))&&o.push(f)}}const c=[a,o];return gt(n)&&i.set(n,c),c}function zc(n){return n[0]!=="$"&&!Ks(n)}const Ql=n=>n==="_"||n==="_ctx"||n==="$stable",jl=n=>qe(n)?n.map(On):[On(n)],Wp=(n,e,t)=>{if(e._n)return e;const i=ap((...s)=>jl(e(...s)),t);return i._c=!1,i},rf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Ql(s))continue;const r=n[s];if(Je(r))e[s]=Wp(s,r,i);else if(r!=null){const a=jl(r);e[s]=()=>a}}},af=(n,e)=>{const t=jl(e);n.slots.default=()=>t},of=(n,e,t)=>{for(const i in e)(t||!Ql(i))&&(n[i]=e[i])},Xp=(n,e,t)=>{const i=n.slots=ef();if(n.vnode.shapeFlag&32){const s=e._;s?(of(i,e,t),t&&_d(i,"_",s,!0)):rf(e,i)}else e&&af(n,e)},Yp=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=St;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:of(s,e,t):(r=!e.$stable,rf(e,s)),a=e}else e&&(af(n,e),a={default:1});if(r)for(const o in s)!Ql(o)&&a[o]==null&&delete s[o]},en=$p;function qp(n){return Kp(n)}function Kp(n,e){const t=Aa();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=kn,insertStaticContent:v}=n,b=(R,I,G,se=null,re=null,$=null,de=void 0,fe=null,he=!!I.dynamicChildren)=>{if(R===I)return;R&&!Ds(R,I)&&(se=ne(R),Ee(R,re,$,!0),R=null),I.patchFlag===-2&&(he=!1,I.dynamicChildren=null);const{type:ae,ref:Re,shapeFlag:C}=I;switch(ae){case La:g(R,I,G,se);break;case hi:h(R,I,G,se);break;case Ja:R==null&&y(I,G,se,de);break;case xt:k(R,I,G,se,re,$,de,fe,he);break;default:C&1?E(R,I,G,se,re,$,de,fe,he):C&6?K(R,I,G,se,re,$,de,fe,he):(C&64||C&128)&&ae.process(R,I,G,se,re,$,de,fe,he,Ge)}Re!=null&&re?$s(Re,R&&R.ref,$,I||R,!I):Re==null&&R&&R.ref!=null&&$s(R.ref,null,$,R,!0)},g=(R,I,G,se)=>{if(R==null)i(I.el=o(I.children),G,se);else{const re=I.el=R.el;I.children!==R.children&&c(re,I.children)}},h=(R,I,G,se)=>{R==null?i(I.el=l(I.children||""),G,se):I.el=R.el},y=(R,I,G,se)=>{[R.el,R.anchor]=v(R.children,I,G,se,R.el,R.anchor)},P=({el:R,anchor:I},G,se)=>{let re;for(;R&&R!==I;)re=d(R),i(R,G,se),R=re;i(I,G,se)},S=({el:R,anchor:I})=>{let G;for(;R&&R!==I;)G=d(R),s(R),R=G;s(I)},E=(R,I,G,se,re,$,de,fe,he)=>{if(I.type==="svg"?de="svg":I.type==="math"&&(de="mathml"),R==null)A(I,G,se,re,$,de,fe,he);else{const ae=R.el&&R.el._isVueCE?R.el:null;try{ae&&ae._beginPatch(),w(R,I,re,$,de,fe,he)}finally{ae&&ae._endPatch()}}},A=(R,I,G,se,re,$,de,fe)=>{let he,ae;const{props:Re,shapeFlag:C,transition:Pe,dirs:Me}=R;if(he=R.el=a(R.type,$,Re&&Re.is,Re),C&8?u(he,R.children):C&16&&_(R.children,he,null,se,re,Za(R,$),de,fe),Me&&Ci(R,null,se,"created"),D(he,R,R.scopeId,de,se),Re){for(const p in Re)p!=="value"&&!Ks(p)&&r(he,p,null,Re[p],$,se);"value"in Re&&r(he,"value",null,Re.value,$),(ae=Re.onVnodeBeforeMount)&&Dn(ae,se,R)}Me&&Ci(R,null,se,"beforeMount");const T=Zp(re,Pe);T&&Pe.beforeEnter(he),i(he,I,G),((ae=Re&&Re.onVnodeMounted)||T||Me)&&en(()=>{try{ae&&Dn(ae,se,R),T&&Pe.enter(he),Me&&Ci(R,null,se,"mounted")}finally{}},re)},D=(R,I,G,se,re)=>{if(G&&m(R,G),se)for(let $=0;$<se.length;$++)m(R,se[$]);if(re){let $=re.subTree;if(I===$||df($.type)&&($.ssContent===I||$.ssFallback===I)){const de=re.vnode;D(R,de,de.scopeId,de.slotScopeIds,re.parent)}}},_=(R,I,G,se,re,$,de,fe,he=0)=>{for(let ae=he;ae<R.length;ae++){const Re=R[ae]=fe?ti(R[ae]):On(R[ae]);b(null,Re,I,G,se,re,$,de,fe)}},w=(R,I,G,se,re,$,de)=>{const fe=I.el=R.el;let{patchFlag:he,dynamicChildren:ae,dirs:Re}=I;he|=R.patchFlag&16;const C=R.props||St,Pe=I.props||St;let Me;if(G&&Pi(G,!1),(Me=Pe.onVnodeBeforeUpdate)&&Dn(Me,G,I,R),Re&&Ci(I,R,G,"beforeUpdate"),G&&Pi(G,!0),ae&&(!R.dynamicChildren||R.dynamicChildren.length!==ae.length)&&(he=0,de=!1,ae=null),(C.innerHTML&&Pe.innerHTML==null||C.textContent&&Pe.textContent==null)&&u(fe,""),ae?L(R.dynamicChildren,ae,fe,G,se,Za(I,re),$):de||ie(R,I,fe,null,G,se,Za(I,re),$,!1),he>0){if(he&16)O(fe,C,Pe,G,re);else if(he&2&&C.class!==Pe.class&&r(fe,"class",null,Pe.class,re),he&4&&r(fe,"style",C.style,Pe.style,re),he&8){const T=I.dynamicProps;for(let p=0;p<T.length;p++){const U=T[p],V=C[U],Z=Pe[U];(Z!==V||U==="value")&&r(fe,U,V,Z,re,G)}}he&1&&R.children!==I.children&&u(fe,I.children)}else!de&&ae==null&&O(fe,C,Pe,G,re);((Me=Pe.onVnodeUpdated)||Re)&&en(()=>{Me&&Dn(Me,G,I,R),Re&&Ci(I,R,G,"updated")},se)},L=(R,I,G,se,re,$,de)=>{for(let fe=0;fe<I.length;fe++){const he=R[fe],ae=I[fe],Re=he.el&&(he.type===xt||!Ds(he,ae)||he.shapeFlag&198)?f(he.el):G;b(he,ae,Re,null,se,re,$,de,!0)}},O=(R,I,G,se,re)=>{if(I!==G){if(I!==St)for(const $ in I)!Ks($)&&!($ in G)&&r(R,$,I[$],null,re,se);for(const $ in G){if(Ks($))continue;const de=G[$],fe=I[$];de!==fe&&$!=="value"&&r(R,$,fe,de,re,se)}"value"in G&&r(R,"value",I.value,G.value,re)}},k=(R,I,G,se,re,$,de,fe,he)=>{const ae=I.el=R?R.el:o(""),Re=I.anchor=R?R.anchor:o("");let{patchFlag:C,dynamicChildren:Pe,slotScopeIds:Me}=I;Me&&(fe=fe?fe.concat(Me):Me),R==null?(i(ae,G,se),i(Re,G,se),_(I.children||[],G,Re,re,$,de,fe,he)):C>0&&C&64&&Pe&&R.dynamicChildren&&R.dynamicChildren.length===Pe.length?(L(R.dynamicChildren,Pe,G,re,$,de,fe),(I.key!=null||re&&I===re.subTree)&&lf(R,I,!0)):ie(R,I,G,Re,re,$,de,fe,he)},K=(R,I,G,se,re,$,de,fe,he)=>{I.slotScopeIds=fe,R==null?I.shapeFlag&512?re.ctx.activate(I,G,se,de,he):B(I,G,se,re,$,de,he):q(R,I,he)},B=(R,I,G,se,re,$,de)=>{const fe=R.component=sm(R,se,re);if($l(R)&&(fe.ctx.renderer=Ge),am(fe,!1,de),fe.asyncDep){if(re&&re.registerDep(fe,te,de),!R.el){const he=fe.subTree=oi(hi);h(null,he,I,G),R.placeholder=he.el}}else te(fe,R,I,G,re,$,de)},q=(R,I,G)=>{const se=I.component=R.component;if(Hp(R,I,G))if(se.asyncDep&&!se.asyncResolved){z(se,I,G);return}else se.next=I,se.update();else I.el=R.el,se.vnode=I},te=(R,I,G,se,re,$,de)=>{const fe=()=>{if(R.isMounted){let{next:C,bu:Pe,u:Me,parent:T,vnode:p}=R;{const ge=cf(R);if(ge){C&&(C.el=p.el,z(R,C,de)),ge.asyncDep.then(()=>{en(()=>{R.isUnmounted||ae()},re)});return}}let U=C,V;Pi(R,!1),C?(C.el=p.el,z(R,C,de)):C=p,Pe&&Jr(Pe),(V=C.props&&C.props.onVnodeBeforeUpdate)&&Dn(V,T,C,p),Pi(R,!0);const Z=Hc(R),pe=R.subTree;R.subTree=Z,b(pe,Z,f(pe.el),ne(pe),R,re,$),C.el=Z.el,U===null&&Vp(R,Z.el),Me&&en(Me,re),(V=C.props&&C.props.onVnodeUpdated)&&en(()=>Dn(V,T,C,p),re)}else{let C;const{el:Pe,props:Me}=I,{bm:T,m:p,parent:U,root:V,type:Z}=R,pe=Qs(I);Pi(R,!1),T&&Jr(T),!pe&&(C=Me&&Me.onVnodeBeforeMount)&&Dn(C,U,I),Pi(R,!0);{V.ce&&V.ce._hasShadowRoot()&&V.ce._injectChildStyle(Z,R.parent?R.parent.type:void 0);const ge=R.subTree=Hc(R);b(null,ge,G,se,R,re,$),I.el=ge.el}if(p&&en(p,re),!pe&&(C=Me&&Me.onVnodeMounted)){const ge=I;en(()=>Dn(C,U,ge),re)}(I.shapeFlag&256||U&&Qs(U.vnode)&&U.vnode.shapeFlag&256)&&R.a&&en(R.a,re),R.isMounted=!0,I=G=se=null}};R.scope.on();const he=R.effect=new Md(fe);R.scope.off();const ae=R.update=he.run.bind(he),Re=R.job=he.runIfDirty.bind(he);Re.i=R,Re.id=R.uid,he.scheduler=()=>Zl(Re),Pi(R,!0),ae()},z=(R,I,G)=>{I.component=R;const se=R.vnode.props;R.vnode=I,R.next=null,kp(R,I.props,se,G),Yp(R,I.children,G),ui(),Lc(R),di()},ie=(R,I,G,se,re,$,de,fe,he=!1)=>{const ae=R&&R.children,Re=R?R.shapeFlag:0,C=I.children,{patchFlag:Pe,shapeFlag:Me}=I;if(Pe>0){if(Pe&128){H(ae,C,G,se,re,$,de,fe,he);return}else if(Pe&256){Q(ae,C,G,se,re,$,de,fe,he);return}}Me&8?(Re&16&&et(ae,re,$),C!==ae&&u(G,C)):Re&16?Me&16?H(ae,C,G,se,re,$,de,fe,he):et(ae,re,$,!0):(Re&8&&u(G,""),Me&16&&_(C,G,se,re,$,de,fe,he))},Q=(R,I,G,se,re,$,de,fe,he)=>{R=R||vs,I=I||vs;const ae=R.length,Re=I.length,C=Math.min(ae,Re);let Pe;for(Pe=0;Pe<C;Pe++){const Me=I[Pe]=he?ti(I[Pe]):On(I[Pe]);b(R[Pe],Me,G,null,re,$,de,fe,he)}ae>Re?et(R,re,$,!0,!1,C):_(I,G,se,re,$,de,fe,he,C)},H=(R,I,G,se,re,$,de,fe,he)=>{let ae=0;const Re=I.length;let C=R.length-1,Pe=Re-1;for(;ae<=C&&ae<=Pe;){const Me=R[ae],T=I[ae]=he?ti(I[ae]):On(I[ae]);if(Ds(Me,T))b(Me,T,G,null,re,$,de,fe,he);else break;ae++}for(;ae<=C&&ae<=Pe;){const Me=R[C],T=I[Pe]=he?ti(I[Pe]):On(I[Pe]);if(Ds(Me,T))b(Me,T,G,null,re,$,de,fe,he);else break;C--,Pe--}if(ae>C){if(ae<=Pe){const Me=Pe+1,T=Me<Re?I[Me].el:se;for(;ae<=Pe;)b(null,I[ae]=he?ti(I[ae]):On(I[ae]),G,T,re,$,de,fe,he),ae++}}else if(ae>Pe)for(;ae<=C;)Ee(R[ae],re,$,!0),ae++;else{const Me=ae,T=ae,p=new Map;for(ae=T;ae<=Pe;ae++){const me=I[ae]=he?ti(I[ae]):On(I[ae]);me.key!=null&&p.set(me.key,ae)}let U,V=0;const Z=Pe-T+1;let pe=!1,ge=0;const ee=new Array(Z);for(ae=0;ae<Z;ae++)ee[ae]=0;for(ae=Me;ae<=C;ae++){const me=R[ae];if(V>=Z){Ee(me,re,$,!0);continue}let De;if(me.key!=null)De=p.get(me.key);else for(U=T;U<=Pe;U++)if(ee[U-T]===0&&Ds(me,I[U])){De=U;break}De===void 0?Ee(me,re,$,!0):(ee[De-T]=ae+1,De>=ge?ge=De:pe=!0,b(me,I[De],G,null,re,$,de,fe,he),V++)}const oe=pe?Jp(ee):vs;for(U=oe.length-1,ae=Z-1;ae>=0;ae--){const me=T+ae,De=I[me],ve=I[me+1],_e=me+1<Re?ve.el||uf(ve):se;ee[ae]===0?b(null,De,G,_e,re,$,de,fe,he):pe&&(U<0||ae!==oe[U]?j(De,G,_e,2):U--)}}},j=(R,I,G,se,re=null)=>{const{el:$,type:de,transition:fe,children:he,shapeFlag:ae}=R;if(ae&6){j(R.component.subTree,I,G,se);return}if(ae&128){R.suspense.move(I,G,se);return}if(ae&64){de.move(R,I,G,Ge);return}if(de===xt){i($,I,G);for(let C=0;C<he.length;C++)j(he[C],I,G,se);i(R.anchor,I,G);return}if(de===Ja){P(R,I,G);return}if(se!==2&&ae&1&&fe)if(se===0)fe.persisted&&!$[qa]?i($,I,G):(fe.beforeEnter($),i($,I,G),en(()=>fe.enter($),re));else{const{leave:C,delayLeave:Pe,afterLeave:Me}=fe,T=()=>{R.ctx.isUnmounted?s($):i($,I,G)},p=()=>{const U=$._isLeaving||!!$[qa];$._isLeaving&&$[qa](!0),fe.persisted&&!U?T():C($,()=>{T(),Me&&Me()})};Pe?Pe($,T,p):p()}else i($,I,G)},Ee=(R,I,G,se=!1,re=!1)=>{const{type:$,props:de,ref:fe,children:he,dynamicChildren:ae,shapeFlag:Re,patchFlag:C,dirs:Pe,cacheIndex:Me,memo:T}=R;if(C===-2&&(re=!1),fe!=null&&(ui(),$s(fe,null,G,R,!0),di()),Me!=null&&(I.renderCache[Me]=void 0),Re&256){I.ctx.deactivate(R);return}const p=Re&1&&Pe,U=!Qs(R);let V;if(U&&(V=de&&de.onVnodeBeforeUnmount)&&Dn(V,I,R),Re&6)je(R.component,G,se);else{if(Re&128){R.suspense.unmount(G,se);return}p&&Ci(R,null,I,"beforeUnmount"),Re&64?R.type.remove(R,I,G,Ge,se):ae&&!ae.hasOnce&&($!==xt||C>0&&C&64)?et(ae,I,G,!1,!0):($===xt&&C&384||!re&&Re&16)&&et(he,I,G),se&&we(R)}const Z=T!=null&&Me==null;(U&&(V=de&&de.onVnodeUnmounted)||p||Z)&&en(()=>{V&&Dn(V,I,R),p&&Ci(R,null,I,"unmounted"),Z&&(R.el=null)},G)},we=R=>{const{type:I,el:G,anchor:se,transition:re}=R;if(I===xt){tt(G,se);return}if(I===Ja){S(R);return}const $=()=>{s(G),re&&!re.persisted&&re.afterLeave&&re.afterLeave()};if(R.shapeFlag&1&&re&&!re.persisted){const{leave:de,delayLeave:fe}=re,he=()=>de(G,$);fe?fe(R.el,$,he):he()}else $()},tt=(R,I)=>{let G;for(;R!==I;)G=d(R),s(R),R=G;s(I)},je=(R,I,G)=>{const{bum:se,scope:re,job:$,subTree:de,um:fe,m:he,a:ae}=R;kc(he),kc(ae),se&&Jr(se),re.stop(),$&&($.flags|=8,Ee(de,R,I,G)),fe&&en(fe,I),en(()=>{R.isUnmounted=!0},I)},et=(R,I,G,se=!1,re=!1,$=0)=>{for(let de=$;de<R.length;de++)Ee(R[de],I,G,se,re)},ne=R=>{if(R.shapeFlag&6)return ne(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const I=d(R.anchor||R.el),G=I&&I[dp];return G?d(G):I};let ce=!1;const Le=(R,I,G)=>{let se;R==null?I._vnode&&(Ee(I._vnode,null,null,!0),se=I._vnode.component):b(I._vnode||null,R,I,null,null,null,G),I._vnode=R,ce||(ce=!0,Lc(se),Hd(),ce=!1)},Ge={p:b,um:Ee,m:j,r:we,mt:B,mc:_,pc:ie,pbc:L,n:ne,o:n};return{render:Le,hydrate:void 0,createApp:Ip(Le)}}function Za({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Pi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Zp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function lf(n,e,t=!1){const i=n.children,s=e.children;if(qe(i)&&qe(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=ti(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&lf(a,o)),o.type===La&&(o.patchFlag===-1&&(o=s[r]=ti(o)),o.el=a.el),o.type===hi&&!o.el&&(o.el=a.el)}}function Jp(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function cf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:cf(e)}function kc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function uf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?uf(e.subTree):null}const df=n=>n.__isSuspense;function $p(n,e){e&&e.pendingBranch?qe(n)?e.effects.push(...n):e.effects.push(n):rp(n)}const xt=Symbol.for("v-fgt"),La=Symbol.for("v-txt"),hi=Symbol.for("v-cmt"),Ja=Symbol.for("v-stc"),Gi=[];let on=null;function We(n=!1){Gi.push(on=n?null:[])}function ff(){Gi.pop(),on=Gi[Gi.length-1]||null}let rr=1;function Gc(n,e=!1){rr+=n,n<0&&on&&e&&(on.hasOnce=!0)}function hf(n){return n.dynamicChildren=rr>0?on||vs:null,ff(),rr>0&&on&&on.push(n),n}function Ye(n,e,t,i,s,r){return hf(x(n,e,t,i,s,r,!0))}function Qp(n,e,t,i,s){return hf(oi(n,e,t,i,s,!0))}function pf(n){return n?n.__v_isVNode===!0:!1}function Ds(n,e){return n.type===e.type&&n.key===e.key}const mf=({key:n})=>n??null,Qr=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?wt(n)||Jt(n)||Je(n)?{i:mn,r:n,k:e,f:!!t}:n:null);function x(n,e=null,t=null,i=0,s=null,r=n===xt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&mf(e),ref:e&&Qr(e),scopeId:zd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:mn};return o?(ua(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=wt(t)?8:16),rr>0&&!a&&on&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&on.push(l),l}const oi=jp;function jp(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Tp)&&(n=hi),pf(n)){const o=Ts(n,e,!0);return t&&ua(o,t),rr>0&&!r&&on&&(o.shapeFlag&6?on[on.indexOf(n)]=o:on.push(o)),o.patchFlag=-2,o}if(um(n)&&(n=n.__vccOpts),e){e=em(e);let{class:o,style:l}=e;o&&!wt(o)&&(e.class=Ct(o)),gt(l)&&(Kl(l)&&!qe(l)&&(l=Wt({},l)),e.style=zt(l))}const a=wt(n)?1:df(n)?128:Ca(n)?64:gt(n)?4:Je(n)?2:0;return x(n,e,t,i,s,a,r,!0)}function em(n){return n?Kl(n)||tf(n)?Wt({},n):n:null}function Ts(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?tm(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&mf(c),ref:e&&e.ref?t&&r?qe(r)?r.concat(Qr(e)):[r,Qr(e)]:Qr(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==xt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ts(n.ssContent),ssFallback:n.ssFallback&&Ts(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Jl(u,l.clone(u)),u}function dt(n=" ",e=0){return oi(La,null,n,e)}function un(n="",e=!1){return e?(We(),Qp(hi,null,n)):oi(hi,null,n)}function On(n){return n==null||typeof n=="boolean"?oi(hi):qe(n)?oi(xt,null,n.slice()):pf(n)?ti(n):oi(La,null,String(n))}function ti(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ts(n)}function ua(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(qe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ua(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!tf(e)?e._ctx=mn:s===3&&mn&&(mn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(Je(e)){if(i&65){ua(n,{default:e});return}e={default:e,_ctx:mn},t=32}else e=String(e),i&64?(t=16,e=[dt(e)]):t=8;n.children=e,n.shapeFlag|=t}function tm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ct([e.class,i.class]));else if(s==="style")e.style=zt([e.style,i.style]);else if(ya(s)){const r=e[s],a=i[s];a&&r!==a&&!(qe(r)&&r.includes(a))?e[s]=r?[].concat(r,a):a:a==null&&r==null&&!Ea(s)&&(e[s]=a)}else s!==""&&(e[s]=i[s])}return e}function Dn(n,e,t,i=null){Rn(n,e,7,[t,i])}const nm=Jd();let im=0;function sm(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||nm,r={uid:im++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ch(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sf(i,s),emitsOptions:$d(i,s),emit:null,emitted:null,propsDefaults:St,inheritAttrs:i.inheritAttrs,ctx:St,data:St,props:St,attrs:St,slots:St,refs:St,setupState:St,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Np.bind(null,r),n.ce&&n.ce(r),r}let Zt=null;const rm=()=>Zt||mn;let da,ar;{const n=Aa(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};da=e("__VUE_INSTANCE_SETTERS__",t=>Zt=t),ar=e("__VUE_SSR_SETTERS__",t=>or=t)}const pr=n=>{const e=Zt;return da(n),n.scope.on(),()=>{n.scope.off(),da(e)}},Wc=()=>{Zt&&Zt.scope.off(),da(null)};function gf(n){return n.vnode.shapeFlag&4}let or=!1;function am(n,e=!1,t=!1){e&&ar(e);const{props:i,children:s}=n.vnode,r=gf(n);zp(n,i,r,e),Xp(n,s,t||e);const a=r?om(n,e):void 0;return e&&ar(!1),a}function om(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Ap);const{setup:i}=t;if(i){ui();const s=n.setupContext=i.length>1?cm(n):null,r=pr(n),a=hr(i,n,0,[n.props,s]),o=hd(a);if(di(),r(),(o||n.sp)&&!Qs(n)&&Xd(n),o){if(a.then(Wc,Wc),e)return a.then(l=>{ar(!0);try{Xc(n,l,e)}finally{ar(!1)}}).catch(l=>{Ra(l,n,0)});n.asyncDep=a}else Xc(n,a)}else _f(n)}function Xc(n,e,t){Je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:gt(e)&&(n.setupState=Fd(e)),_f(n)}function _f(n,e,t){const i=n.type;n.render||(n.render=i.render||kn);{const s=pr(n);ui();try{wp(n)}finally{di(),s()}}}const lm={get(n,e){return kt(n,"get",""),n[e]}};function cm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,lm),slots:n.slots,emit:n.emit,expose:e}}function Ia(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Fd(Zh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in js)return js[t](n)},has(e,t){return t in e||t in js}})):n.proxy}function um(n){return Je(n)&&"__vccOpts"in n}const dm=(n,e)=>jh(n,e,or),fm="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xo;const Yc=typeof window<"u"&&window.trustedTypes;if(Yc)try{Xo=Yc.createPolicy("vue",{createHTML:n=>n})}catch{}const vf=Xo?n=>Xo.createHTML(n):n=>n,hm="http://www.w3.org/2000/svg",pm="http://www.w3.org/1998/Math/MathML",ei=typeof document<"u"?document:null,qc=ei&&ei.createElement("template"),mm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?ei.createElementNS(hm,n):e==="mathml"?ei.createElementNS(pm,n):t?ei.createElement(n,{is:t}):ei.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ei.createTextNode(n),createComment:n=>ei.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ei.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{qc.innerHTML=vf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=qc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},gm=Symbol("_vtc");function _m(n,e,t){const i=n[gm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const fa=Symbol("_vod"),xf=Symbol("_vsh"),vm={name:"show",beforeMount(n,{value:e},{transition:t}){n[fa]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Ls(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Ls(n,!0),i.enter(n)):i.leave(n,()=>{Ls(n,!1)}):Ls(n,e))},beforeUnmount(n,{value:e}){Ls(n,e)}};function Ls(n,e){n.style.display=e?n[fa]:"none",n[xf]=!e}const xm=Symbol(""),Sm=/(?:^|;)\s*display\s*:/;function Mm(n,e,t){const i=n.style,s=wt(t);let r=!1;if(t&&!s){if(e)if(wt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&ks(i,o,"")}else for(const a in e)t[a]==null&&ks(i,a,"");for(const a in t){a==="display"&&(r=!0);const o=t[a];o!=null?ym(n,a,!wt(e)&&e?e[a]:void 0,o)||ks(i,a,o):ks(i,a,"")}}else if(s){if(e!==t){const a=i[xm];a&&(t+=";"+a),i.cssText=t,r=Sm.test(t)}}else e&&n.removeAttribute("style");fa in n&&(n[fa]=r?i.display:"",n[xf]&&(i.display="none"))}const Kc=/\s*!important$/;function ks(n,e,t){if(qe(t))t.forEach(i=>ks(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=bm(n,e);Kc.test(t)?n.setProperty(Ki(i),t.replace(Kc,""),"important"):n[i]=t}}const Zc=["Webkit","Moz","ms"],$a={};function bm(n,e){const t=$a[e];if(t)return t;let i=yn(e);if(i!=="filter"&&i in n)return $a[e]=i;i=gd(i);for(let s=0;s<Zc.length;s++){const r=Zc[s]+i;if(r in n)return $a[e]=r}return e}function ym(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&wt(i)&&t===i}const Jc="http://www.w3.org/1999/xlink";function $c(n,e,t,i,s,r=wh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Jc,e.slice(6,e.length)):n.setAttributeNS(Jc,e,t):t==null||r&&!vd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Wn(t)?String(t):t)}function Qc(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?vf(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=vd(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function hs(n,e,t,i){n.addEventListener(e,t,i)}function Em(n,e,t,i){n.removeEventListener(e,t,i)}const jc=Symbol("_vei");function Tm(n,e,t,i,s=null){const r=n[jc]||(n[jc]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=Rm(e);if(i){const c=r[e]=Dm(i,s);hs(n,o,c,l)}else a&&(Em(n,o,a,l),r[e]=void 0)}}const Am=/(Once|Passive|Capture)$/,wm=/^on:?(?:Once|Passive|Capture)$/;function Rm(n){let e,t;for(;(t=n.match(Am))&&!wm.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Ki(n.slice(2)),e]}let Qa=0;const Cm=Promise.resolve(),Pm=()=>Qa||(Cm.then(()=>Qa=0),Qa=Date.now());function Dm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(qe(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const a=s.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&Rn(c,e,5,o)}}else Rn(s,e,5,[i])};return t.value=n,t.attached=Pm(),t}const eu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Lm=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?_m(n,i,a):e==="style"?Mm(n,t,i):ya(e)?Ea(e)||Tm(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Im(n,e,i,a))?(Qc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$c(n,e,i,a,r,e!=="value")):n._isVueCE&&(Um(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!wt(i)))?Qc(n,yn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),$c(n,e,i,a))};function Im(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&eu(e)&&Je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return eu(e)&&wt(t)?!1:e in n}function Um(n,e){const t=n._def.props;if(!t)return!1;const i=yn(e);return Array.isArray(t)?t.some(s=>yn(s)===i):Object.keys(t).some(s=>yn(s)===i)}const tu=n=>{const e=n.props["onUpdate:modelValue"]||!1;return qe(e)?t=>Jr(e,t):e};function Nm(n){n.target.composing=!0}function nu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Er=Symbol("_assign"),Tr=Symbol("_initialValue");function ja(n,e,t){return e&&(n=n.trim()),t&&(n=Vl(n)),n}const yt={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n.parentNode&&(n.type==="text"?n[Tr]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Tr]=n.defaultValue.replace(/\r\n?/g,`
`))),n[Er]=tu(s);const r=i||s.props&&s.props.type==="number";hs(n,e?"change":"input",a=>{a.target.composing||n[Er](ja(n.value,t,r))}),(t||r)&&hs(n,"change",()=>{n.value=ja(n.value,t,r)}),e||(hs(n,"compositionstart",Nm),hs(n,"compositionend",nu),hs(n,"change",nu))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const s=e??"",r=n[Tr];delete n[Tr],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[Er](ja(n.value,t,i)):n.value=s},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},a){if(n[Er]=tu(a),n.composing)return;const o=(r||n.type==="number")&&!/^0\d/.test(n.value)?Vl(n.value):n.value,l=e??"";if(o===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},Fm=["ctrl","shift","alt","meta"],Om={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Fm.some(t=>n[`${t}Key`]&&!e.includes(t))},Di=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let a=0;a<e.length;a++){const o=Om[e[a]];if(o&&o(s,e))return}return n(s,...r)})},Bm=Wt({patchProp:Lm},mm);let iu;function Hm(){return iu||(iu=qp(Bm))}const Vm=(...n)=>{const e=Hm().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=km(i);if(!s)return;const r=e._component;!Je(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,zm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function zm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function km(n){return wt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ec="186",Gm=0,su=1,Wm=2,jr=1,Xm=2,Gs=3,Wi=0,tn=1,ri=2,li=0,er=1,ru=2,au=3,ou=4,Ym=5,ps=100,qm=101,Km=102,Zm=103,Jm=104,$m=200,Qm=201,jm=202,eg=203,Sf=204,Mf=205,tg=206,ng=207,ig=208,sg=209,rg=210,ag=211,og=212,lg=213,cg=214,Yo=0,qo=1,Ko=2,lr=3,Zo=4,Jo=5,$o=6,Qo=7,bf=0,ug=1,dg=2,Gn=0,yf=1,Ef=2,Tf=3,Af=4,wf=5,Rf=6,Cf=7,Pf=300,Xi=301,As=302,eo=303,to=304,Ua=306,jo=1e3,ai=1001,el=1002,Ot=1003,fg=1004,Ar=1005,Gt=1006,no=1007,Hi=1008,pn=1009,Df=1010,Lf=1011,cr=1012,tc=1013,Xn=1014,Vn=1015,Yn=1016,nc=1017,ic=1018,ur=1020,If=35902,Uf=35899,Nf=1021,Ff=1022,bn=1023,pi=1026,Vi=1027,Of=1028,sc=1029,Yi=1030,rc=1031,ac=1033,ea=33776,ta=33777,na=33778,ia=33779,tl=35840,nl=35841,il=35842,sl=35843,rl=36196,al=37492,ol=37496,ll=37488,cl=37489,ha=37490,ul=37491,dl=37808,fl=37809,hl=37810,pl=37811,ml=37812,gl=37813,_l=37814,vl=37815,xl=37816,Sl=37817,Ml=37818,bl=37819,yl=37820,El=37821,Tl=36492,Al=36494,wl=36495,Rl=36283,Cl=36284,pa=36285,Pl=36286,hg=3200,lu=0,pg=1,Ai="",fn="srgb",ma="srgb-linear",ga="linear",ht="srgb",io=7680,mg=519,gg=512,_g=513,vg=514,oc=515,xg=516,Sg=517,lc=518,Mg=519,bg=35044,cu="300 es",zn=2e3,_a=2001;function yg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function va(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Eg(){const n=va("canvas");return n.style.display="block",n}const uu={};function du(...n){const e="THREE."+n.shift();console.log(e,...n)}function Bf(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Xe(...n){n=Bf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function lt(...n){n=Bf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function bs(...n){const e=n.join(" ");e in uu||(uu[e]=!0,Xe(...n))}function Tg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Ag={[Yo]:qo,[Ko]:$o,[Zo]:Qo,[lr]:Jo,[qo]:Yo,[$o]:Ko,[Qo]:Zo,[Jo]:lr};class Zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],so=Math.PI/180,Dl=180/Math.PI;function mr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function st(n,e,t){return Math.max(e,Math.min(t,n))}function wg(n,e){return(n%e+e)%e}function ro(n,e,t){return(1-t)*n+t*e}function Is(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const hc=class hc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hc.prototype.isVector2=!0;let rt=hc;class Rs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],d=r[a+0],m=r[a+1],v=r[a+2],b=r[a+3];if(f!==b||l!==d||c!==m||u!==v){let g=l*d+c*m+u*v+f*b;g<0&&(d=-d,m=-m,v=-v,b=-b,g=-g);let h=1-o;if(g<.9995){const y=Math.acos(g),P=Math.sin(y);h=Math.sin(h*y)/P,o=Math.sin(o*y)/P,l=l*h+d*o,c=c*h+m*o,u=u*h+v*o,f=f*h+b*o}else{l=l*h+d*o,c=c*h+m*o,u=u*h+v*o,f=f*h+b*o;const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],d=r[a+1],m=r[a+2],v=r[a+3];return e[t]=o*v+u*f+l*m-c*d,e[t+1]=l*v+u*d+c*f-o*m,e[t+2]=c*v+u*m+o*d-l*f,e[t+3]=u*v-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),d=l(i/2),m=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f-d*m*v;break;case"YXZ":this._x=d*u*f+c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f+d*m*v;break;case"ZXY":this._x=d*u*f-c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f-d*m*v;break;case"ZYX":this._x=d*u*f-c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f+d*m*v;break;case"YZX":this._x=d*u*f+c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f-d*m*v;break;case"XZY":this._x=d*u*f-c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f+d*m*v;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const pc=class pc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ao.copy(this).projectOnVector(e),this.sub(ao)}reflect(e){return this.sub(ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pc.prototype.isVector3=!0;let W=pc;const ao=new W,fu=new Rs,mc=class mc{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],v=i[8],b=s[0],g=s[3],h=s[6],y=s[1],P=s[4],S=s[7],E=s[2],A=s[5],D=s[8];return r[0]=a*b+o*y+l*E,r[3]=a*g+o*P+l*A,r[6]=a*h+o*S+l*D,r[1]=c*b+u*y+f*E,r[4]=c*g+u*P+f*A,r[7]=c*h+u*S+f*D,r[2]=d*b+m*y+v*E,r[5]=d*g+m*P+v*A,r[8]=d*h+m*S+v*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*r,m=c*r-a*l,v=t*f+i*d+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/v;return e[0]=f*b,e[1]=(s*c-u*i)*b,e[2]=(o*i-s*a)*b,e[3]=d*b,e[4]=(u*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=m*b,e[7]=(i*l-c*t)*b,e[8]=(a*t-i*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(oo.makeScale(e,t)),this}rotate(e){return bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(oo.makeRotation(-e)),this}translate(e,t){return bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(oo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};mc.prototype.isMatrix3=!0;let Ke=mc;const oo=new Ke,hu=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pu=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rg(){const n={enabled:!0,workingColorSpace:ma,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ht&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ai?ga:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ma]:{primaries:e,whitePoint:i,transfer:ga,toXYZ:hu,fromXYZ:pu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:hu,fromXYZ:pu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),n}const it=Rg();function ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ys(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ji;class Cg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ji===void 0&&(ji=va("canvas")),ji.width=e.width,ji.height=e.height;const s=ji.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ji}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=va("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ci(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ci(t[i]/255)*255):t[i]=ci(t[i]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pg=0;class cc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=mr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(lo(s[a].image)):r.push(lo(s[a]))}else r=lo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function lo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Cg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}let Dg=0;const co=new W;class $t extends Zi{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=ai,s=ai,r=Gt,a=Hi,o=bn,l=pn,c=$t.DEFAULT_ANISOTROPY,u=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=mr(),this.name="",this.source=new cc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(co).x}get height(){return this.source.getSize(co).y}get depth(){return this.source.getSize(co).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jo:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case el:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jo:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case el:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Pf;$t.DEFAULT_ANISOTROPY=1;const gc=class gc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],v=l[9],b=l[2],g=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-b)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+b)<.1&&Math.abs(v+g)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(c+1)/2,S=(m+1)/2,E=(h+1)/2,A=(u+d)/4,D=(f+b)/4,_=(v+g)/4;return P>S&&P>E?P<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(P),s=A/i,r=D/i):S>E?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=A/s,r=_/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=D/r,s=_/r),this.set(i,s,r,t),this}let y=Math.sqrt((g-v)*(g-v)+(f-b)*(f-b)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(g-v)/y,this.y=(f-b)/y,this.z=(d-u)/y,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gc.prototype.isVector4=!0;let At=gc;class Lg extends Zi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new $t(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new cc(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends Lg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Hf extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ig extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ba=class ba{constructor(e,t,i,s,r,a,o,l,c,u,f,d,m,v,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,f,d,m,v,b,g)}set(e,t,i,s,r,a,o,l,c,u,f,d,m,v,b,g){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=v,h[11]=b,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ba().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/es.setFromMatrixColumn(e,0).length(),r=1/es.setFromMatrixColumn(e,1).length(),a=1/es.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*u,m=a*f,v=o*u,b=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+v*c,t[5]=d-b*c,t[9]=-o*l,t[2]=b-d*c,t[6]=v+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,v=c*u,b=c*f;t[0]=d+b*o,t[4]=v*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-v,t[6]=b+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,v=c*u,b=c*f;t[0]=d-b*o,t[4]=-a*f,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*u,t[9]=b-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*f,v=o*u,b=o*f;t[0]=l*u,t[4]=v*c-m,t[8]=d*c+b,t[1]=l*f,t[5]=b*c+d,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,v=o*l,b=o*c;t[0]=l*u,t[4]=b-d*f,t[8]=v*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+v,t[10]=d-b*f}else if(e.order==="XZY"){const d=a*l,m=a*c,v=o*l,b=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+b,t[5]=a*u,t[9]=m*f-v,t[2]=v*f-m,t[6]=o*u,t[10]=b*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ug,e,Ng)}lookAt(e,t,i){const s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),xi.crossVectors(i,rn),xi.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),xi.crossVectors(i,rn)),xi.normalize(),wr.crossVectors(rn,xi),s[0]=xi.x,s[4]=wr.x,s[8]=rn.x,s[1]=xi.y,s[5]=wr.y,s[9]=rn.y,s[2]=xi.z,s[6]=wr.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],v=i[2],b=i[6],g=i[10],h=i[14],y=i[3],P=i[7],S=i[11],E=i[15],A=s[0],D=s[4],_=s[8],w=s[12],L=s[1],O=s[5],k=s[9],K=s[13],B=s[2],q=s[6],te=s[10],z=s[14],ie=s[3],Q=s[7],H=s[11],j=s[15];return r[0]=a*A+o*L+l*B+c*ie,r[4]=a*D+o*O+l*q+c*Q,r[8]=a*_+o*k+l*te+c*H,r[12]=a*w+o*K+l*z+c*j,r[1]=u*A+f*L+d*B+m*ie,r[5]=u*D+f*O+d*q+m*Q,r[9]=u*_+f*k+d*te+m*H,r[13]=u*w+f*K+d*z+m*j,r[2]=v*A+b*L+g*B+h*ie,r[6]=v*D+b*O+g*q+h*Q,r[10]=v*_+b*k+g*te+h*H,r[14]=v*w+b*K+g*z+h*j,r[3]=y*A+P*L+S*B+E*ie,r[7]=y*D+P*O+S*q+E*Q,r[11]=y*_+P*k+S*te+E*H,r[15]=y*w+P*K+S*z+E*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],v=e[3],b=e[7],g=e[11],h=e[15],y=l*m-c*d,P=o*m-c*f,S=o*d-l*f,E=a*m-c*u,A=a*d-l*u,D=a*f-o*u;return t*(b*y-g*P+h*S)-i*(v*y-g*E+h*A)+s*(v*P-b*E+h*D)-r*(v*S-b*A+g*D)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],v=e[12],b=e[13],g=e[14],h=e[15],y=t*o-i*a,P=t*l-s*a,S=t*c-r*a,E=i*l-s*o,A=i*c-r*o,D=s*c-r*l,_=u*b-f*v,w=u*g-d*v,L=u*h-m*v,O=f*g-d*b,k=f*h-m*b,K=d*h-m*g,B=y*K-P*k+S*O+E*L-A*w+D*_;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/B;return e[0]=(o*K-l*k+c*O)*q,e[1]=(s*k-i*K-r*O)*q,e[2]=(b*D-g*A+h*E)*q,e[3]=(d*A-f*D-m*E)*q,e[4]=(l*L-a*K-c*w)*q,e[5]=(t*K-s*L+r*w)*q,e[6]=(g*S-v*D-h*P)*q,e[7]=(u*D-d*S+m*P)*q,e[8]=(a*k-o*L+c*_)*q,e[9]=(i*L-t*k-r*_)*q,e[10]=(v*A-b*S+h*y)*q,e[11]=(f*S-u*A-m*y)*q,e[12]=(o*w-a*O-l*_)*q,e[13]=(t*O-i*w+s*_)*q,e[14]=(b*P-v*E-g*y)*q,e[15]=(u*E-f*P+d*y)*q,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,d=r*c,m=r*u,v=r*f,b=a*u,g=a*f,h=o*f,y=l*c,P=l*u,S=l*f,E=i.x,A=i.y,D=i.z;return s[0]=(1-(b+h))*E,s[1]=(m+S)*E,s[2]=(v-P)*E,s[3]=0,s[4]=(m-S)*A,s[5]=(1-(d+h))*A,s[6]=(g+y)*A,s[7]=0,s[8]=(v+P)*D,s[9]=(g-y)*D,s[10]=(1-(d+b))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=es.set(s[0],s[1],s[2]).length();const o=es.set(s[4],s[5],s[6]).length(),l=es.set(s[8],s[9],s[10]).length();r<0&&(a=-a),vn.copy(this);const c=1/a,u=1/o,f=1/l;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=f,vn.elements[9]*=f,vn.elements[10]*=f,t.setFromRotationMatrix(vn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=zn,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(i-s),d=(t+e)/(t-e),m=(i+s)/(i-s);let v,b;if(l)v=r/(a-r),b=a*r/(a-r);else if(o===zn)v=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===_a)v=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=zn,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-s),d=-(t+e)/(t-e),m=-(i+s)/(i-s);let v,b;if(l)v=1/(a-r),b=a/(a-r);else if(o===zn)v=-2/(a-r),b=-(a+r)/(a-r);else if(o===_a)v=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ba.prototype.isMatrix4=!0;let Pt=ba;const es=new W,vn=new Pt,Ug=new W(0,0,0),Ng=new W(1,1,1),xi=new W,wr=new W,rn=new W,mu=new Pt,gu=new Rs;class qi{constructor(e=0,t=0,i=0,s=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-st(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gu.setFromEuler(this),this.setFromQuaternion(gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class Vf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fg=0;const _u=new W,ts=new Rs,Zn=new Pt,Rr=new W,Us=new W,Og=new W,Bg=new Rs,vu=new W(1,0,0),xu=new W(0,1,0),Su=new W(0,0,1),Mu={type:"added"},Hg={type:"removed"},ns={type:"childadded",child:null},uo={type:"childremoved",child:null};class nn extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new W,t=new qi,i=new Rs,s=new W(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Ke}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(vu,e)}rotateY(e){return this.rotateOnAxis(xu,e)}rotateZ(e){return this.rotateOnAxis(Su,e)}translateOnAxis(e,t){return _u.copy(e).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vu,e)}translateY(e){return this.translateOnAxis(xu,e)}translateZ(e){return this.translateOnAxis(Su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Rr.copy(e):Rr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Us,Rr,this.up):Zn.lookAt(Rr,Us,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(Zn),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mu),ns.child=e,this.dispatchEvent(ns),ns.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hg),uo.child=e,this.dispatchEvent(uo),uo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mu),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,Og),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Bg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}nn.DEFAULT_UP=new W(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ws extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vg={type:"move"};class fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const b of e.hand.values()){const g=t.getJointPose(b,i),h=this._getHandJoint(c,b);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ws;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function ho(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=it.workingColorSpace){if(e=wg(e,1),t=st(t,0,1),i=st(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=ho(a,r,e+1/3),this.g=ho(a,r,e),this.b=ho(a,r,e-1/3)}return it.colorSpaceToWorking(this,s),this}setStyle(e,t=fn){function i(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const i=zf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return it.workingToColorSpace(Vt.copy(this),e),Math.round(st(Vt.r*255,0,255))*65536+Math.round(st(Vt.g*255,0,255))*256+Math.round(st(Vt.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Vt.copy(this),t);const i=Vt.r,s=Vt.g,r=Vt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=fn){it.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,i=Vt.g,s=Vt.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(Cr);const i=ro(Si.h,Cr.h,t),s=ro(Si.s,Cr.s,t),r=ro(Si.l,Cr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new ot;ot.NAMES=zf;class zg extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const xn=new W,Jn=new W,po=new W,$n=new W,is=new W,ss=new W,bu=new W,mo=new W,go=new W,_o=new W,vo=new At,xo=new At,So=new At;class Mn{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),xn.subVectors(e,t),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){xn.subVectors(s,t),Jn.subVectors(i,t),po.subVectors(e,t);const a=xn.dot(xn),o=xn.dot(Jn),l=xn.dot(po),c=Jn.dot(Jn),u=Jn.dot(po),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,m=(c*l-o*u)*d,v=(a*u-o*l)*d;return r.set(1-m-v,v,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(a,$n.y),l.addScaledVector(o,$n.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return vo.setScalar(0),xo.setScalar(0),So.setScalar(0),vo.fromBufferAttribute(e,t),xo.fromBufferAttribute(e,i),So.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(vo,r.x),a.addScaledVector(xo,r.y),a.addScaledVector(So,r.z),a}static isFrontFacing(e,t,i,s){return xn.subVectors(i,t),Jn.subVectors(e,t),xn.cross(Jn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),xn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;is.subVectors(s,i),ss.subVectors(r,i),mo.subVectors(e,i);const l=is.dot(mo),c=ss.dot(mo);if(l<=0&&c<=0)return t.copy(i);go.subVectors(e,s);const u=is.dot(go),f=ss.dot(go);if(u>=0&&f<=u)return t.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(is,a);_o.subVectors(e,r);const m=is.dot(_o),v=ss.dot(_o);if(v>=0&&m<=v)return t.copy(r);const b=m*c-l*v;if(b<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(ss,o);const g=u*v-m*f;if(g<=0&&f-u>=0&&m-v>=0)return bu.subVectors(r,s),o=(f-u)/(f-u+(m-v)),t.copy(s).addScaledVector(bu,o);const h=1/(g+b+d);return a=b*h,o=d*h,t.copy(i).addScaledVector(is,a).addScaledVector(ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class gr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pr.copy(i.boundingBox)),Pr.applyMatrix4(e.matrixWorld),this.union(Pr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),Dr.subVectors(this.max,Ns),rs.subVectors(e.a,Ns),as.subVectors(e.b,Ns),os.subVectors(e.c,Ns),Mi.subVectors(as,rs),bi.subVectors(os,as),Li.subVectors(rs,os);let t=[0,-Mi.z,Mi.y,0,-bi.z,bi.y,0,-Li.z,Li.y,Mi.z,0,-Mi.x,bi.z,0,-bi.x,Li.z,0,-Li.x,-Mi.y,Mi.x,0,-bi.y,bi.x,0,-Li.y,Li.x,0];return!Mo(t,rs,as,os,Dr)||(t=[1,0,0,0,1,0,0,0,1],!Mo(t,rs,as,os,Dr))?!1:(Lr.crossVectors(Mi,bi),t=[Lr.x,Lr.y,Lr.z],Mo(t,rs,as,os,Dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qn=[new W,new W,new W,new W,new W,new W,new W,new W],Sn=new W,Pr=new gr,rs=new W,as=new W,os=new W,Mi=new W,bi=new W,Li=new W,Ns=new W,Dr=new W,Lr=new W,Ii=new W;function Mo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ii.fromArray(n,r);const o=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=e.dot(Ii),c=t.dot(Ii),u=i.dot(Ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Lt=new W,Ir=new rt;let kg=0;class wn extends Zi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bg,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ir.fromBufferAttribute(this,t),Ir.applyMatrix3(e),this.setXY(t,Ir.x,Ir.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Is(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Is(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Is(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Is(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Is(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class kf extends wn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gf extends wn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qt extends wn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Gg=new gr,Fs=new W,bo=new W;class Na{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Gg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fs.subVectors(e,this.center);const t=Fs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Fs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fs.copy(e.center).add(bo)),this.expandByPoint(Fs.copy(e.center).sub(bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Wg=0;const dn=new Pt,yo=new nn,ls=new W,an=new gr,Os=new gr,Nt=new W;class ln extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yg(e)?Gf:kf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,i){return dn.makeTranslation(e,t,i),this.applyMatrix4(dn),this}scale(e,t,i){return dn.makeScale(e,t,i),this.applyMatrix4(dn),this}lookAt(e){return yo.lookAt(e),yo.updateMatrix(),this.applyMatrix4(yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Na);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Os.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(an.min,Os.min),an.expandByPoint(Nt),Nt.addVectors(an.max,Os.max),an.expandByPoint(Nt)):(an.expandByPoint(Os.min),an.expandByPoint(Os.max))}an.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Nt.fromBufferAttribute(o,c),l&&(ls.fromBufferAttribute(e,c),Nt.add(ls)),s=Math.max(s,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new wn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new W,l[_]=new W;const c=new W,u=new W,f=new W,d=new rt,m=new rt,v=new rt,b=new W,g=new W;function h(_,w,L){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,L),d.fromBufferAttribute(r,_),m.fromBufferAttribute(r,w),v.fromBufferAttribute(r,L),u.sub(c),f.sub(c),m.sub(d),v.sub(d);const O=1/(m.x*v.y-v.x*m.y);isFinite(O)&&(b.copy(u).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(O),g.copy(f).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(O),o[_].add(b),o[w].add(b),o[L].add(b),l[_].add(g),l[w].add(g),l[L].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,w=y.length;_<w;++_){const L=y[_],O=L.start,k=L.count;for(let K=O,B=O+k;K<B;K+=3)h(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const P=new W,S=new W,E=new W,A=new W;function D(_){E.fromBufferAttribute(s,_),A.copy(E);const w=o[_];P.copy(w),P.sub(E.multiplyScalar(E.dot(w))).normalize(),S.crossVectors(A,w);const O=S.dot(l[_])<0?-1:1;a.setXYZW(_,P.x,P.y,P.z,O)}for(let _=0,w=y.length;_<w;++_){const L=y[_],O=L.start,k=L.count;for(let K=O,B=O+k;K<B;K+=3)D(e.getX(K+0)),D(e.getX(K+1)),D(e.getX(K+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const s=new W,r=new W,a=new W,o=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,v=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?m=l[b]*o.data.stride+o.offset:m=l[b]*u;for(let h=0;h<u;h++)d[v++]=c[m++]}return new wn(d,u,f)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eo=new W,Xg=new W,Yg=new Ke;class Ti{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Eo.subVectors(i,t).cross(Xg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Eo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Yg.getNormalMatrix(e),s=this.coplanarPoint(Eo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let qg=0;class _r extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=mr(),this.name="",this.type="Material",this.blending=er,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sf,this.blendDst=Mf,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=io,this.stencilZFail=io,this.stencilZPass=io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ti().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new rt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const jn=new W,To=new W,Ur=new W,Nr=new W;class Wf{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){To.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),Nr.copy(this.origin).sub(To);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ur),o=Nr.dot(this.direction),l=-Nr.dot(Ur),c=Nr.lengthSq(),u=Math.abs(1-a*a);let f,d,m,v;if(u>0)if(f=a*l-o,d=a*o-l,v=r*u,f>=0)if(d>=-v)if(d<=v){const b=1/u;f*=b,d*=b,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(To).addScaledVector(Ur,d),m}intersectSphere(e,t){if(e.radius<0)return null;jn.subVectors(e.center,this.origin);const i=jn.dot(this.direction),s=jn.dot(jn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,d=e.y-a.y,m=e.z-a.z,v=t.x-a.x,b=t.y-a.y,g=t.z-a.z,h=i.x-a.x,y=i.y-a.y,P=i.z-a.z,S=Math.abs(l),E=Math.abs(c),A=Math.abs(u);let D,_,w,L,O,k,K,B,q,te,z,ie;if(S>=E&&S>=A?(w=l,k=f,q=v,ie=h,l>=0?(D=c,_=u,L=d,O=m,K=b,B=g,te=y,z=P):(D=u,_=c,L=m,O=d,K=g,B=b,te=P,z=y)):E>=A?(w=c,k=d,q=b,ie=y,c>=0?(D=u,_=l,L=m,O=f,K=g,B=v,te=P,z=h):(D=l,_=u,L=f,O=m,K=v,B=g,te=h,z=P)):(w=u,k=m,q=g,ie=P,u>=0?(D=l,_=c,L=f,O=d,K=v,B=b,te=h,z=y):(D=c,_=l,L=d,O=f,K=b,B=v,te=y,z=h)),w===0)return null;const Q=D/w,H=_/w,j=1/w,Ee=L-Q*k,we=O-H*k,tt=K-Q*q,je=B-H*q,et=te-Q*ie,ne=z-H*ie,ce=et*je-ne*tt,Le=Ee*ne-we*et,Ge=tt*we-je*Ee;if(s){if(ce<0||Le<0||Ge<0)return null}else if((ce<0||Le<0||Ge<0)&&(ce>0||Le>0||Ge>0))return null;const Ie=ce+Le+Ge;if(Ie===0)return null;const R=j*(ce*k+Le*q+Ge*ie);return(Ie>0?R<0:R>0)?null:this.at(R/Ie,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xa extends _r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=bf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yu=new Pt,Ui=new Wf,Fr=new Na,Eu=new W,Or=new W,Br=new W,Hr=new W,Ao=new W,Vr=new W,Tu=new W,zr=new W;class gn extends nn{constructor(e=new ln,t=new xa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Ao.fromBufferAttribute(f,e),a?Vr.addScaledVector(Ao,u):Vr.addScaledVector(Ao.sub(t),u))}t.add(Vr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(r),Ui.copy(e.ray).recast(e.near),!(Fr.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Fr,Eu)===null||Ui.origin.distanceToSquared(Eu)>(e.far-e.near)**2))&&(yu.copy(r).invert(),Ui.copy(e.ray).applyMatrix4(yu),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,b=d.length;v<b;v++){const g=d[v],h=a[g.materialIndex],y=Math.max(g.start,m.start),P=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let S=y,E=P;S<E;S+=3){const A=o.getX(S),D=o.getX(S+1),_=o.getX(S+2);s=kr(this,h,e,i,c,u,f,A,D,_),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),b=Math.min(o.count,m.start+m.count);for(let g=v,h=b;g<h;g+=3){const y=o.getX(g),P=o.getX(g+1),S=o.getX(g+2);s=kr(this,a,e,i,c,u,f,y,P,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,b=d.length;v<b;v++){const g=d[v],h=a[g.materialIndex],y=Math.max(g.start,m.start),P=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let S=y,E=P;S<E;S+=3){const A=S,D=S+1,_=S+2;s=kr(this,h,e,i,c,u,f,A,D,_),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let g=v,h=b;g<h;g+=3){const y=g,P=g+1,S=g+2;s=kr(this,a,e,i,c,u,f,y,P,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Kg(n,e,t,i,s,r,a,o){let l;if(e.side===tn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Wi,o),l===null)return null;zr.copy(o),zr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(zr);return c<t.near||c>t.far?null:{distance:c,point:zr.clone(),object:n}}function kr(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Or),n.getVertexPosition(l,Br),n.getVertexPosition(c,Hr);const u=Kg(n,e,t,i,Or,Br,Hr,Tu);if(u){const f=new W;Mn.getBarycoord(Tu,Or,Br,Hr,f),s&&(u.uv=Mn.getInterpolatedAttribute(s,o,l,c,f,new rt)),r&&(u.uv1=Mn.getInterpolatedAttribute(r,o,l,c,f,new rt)),a&&(u.normal=Mn.getInterpolatedAttribute(a,o,l,c,f,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new W,materialIndex:0};Mn.getNormal(Or,Br,Hr,d.normal),u.face=d,u.barycoord=f}return u}class Zg extends $t{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Ot,u=Ot,f,d){super(null,a,o,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ni=new Na,Jg=new rt(.5,.5),Gr=new W;class Xf{constructor(e=new Ti,t=new Ti,i=new Ti,s=new Ti,r=new Ti,a=new Ti){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],m=r[7],v=r[8],b=r[9],g=r[10],h=r[11],y=r[12],P=r[13],S=r[14],E=r[15];if(s[0].setComponents(c-a,m-u,h-v,E-y).normalize(),s[1].setComponents(c+a,m+u,h+v,E+y).normalize(),s[2].setComponents(c+o,m+f,h+b,E+P).normalize(),s[3].setComponents(c-o,m-f,h-b,E-P).normalize(),i)s[4].setComponents(l,d,g,S).normalize(),s[5].setComponents(c-l,m-d,h-g,E-S).normalize();else if(s[4].setComponents(c-l,m-d,h-g,E-S).normalize(),t===zn)s[5].setComponents(c+l,m+d,h+g,E+S).normalize();else if(t===_a)s[5].setComponents(l,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){Ni.center.set(0,0,0);const t=Jg.distanceTo(e.center);return Ni.radius=.7071067811865476+t,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Gr.x=s.normal.x>0?e.max.x:e.min.x,Gr.y=s.normal.y>0?e.max.y:e.min.y,Gr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yf extends _r{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Au=new Pt,Ll=new Wf,Wr=new Na,Xr=new W;class $g extends nn{constructor(e=new ln,t=new Yf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wr.copy(i.boundingSphere),Wr.applyMatrix4(s),Wr.radius+=r,e.ray.intersectsSphere(Wr)===!1)return;Au.copy(s).invert(),Ll.copy(e.ray).applyMatrix4(Au);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let v=d,b=m;v<b;v++){const g=c.getX(v);Xr.fromBufferAttribute(f,g),wu(Xr,g,l,s,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let v=d,b=m;v<b;v++)Xr.fromBufferAttribute(f,v),wu(Xr,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function wu(n,e,t,i,s,r,a){const o=Ll.distanceSqToPoint(n);if(o<t){const l=new W;Ll.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class qf extends $t{constructor(e=[],t=Xi,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dr extends $t{constructor(e,t,i=Xn,s,r,a,o=Ot,l=Ot,c,u=pi,f=1){if(u!==pi&&u!==Vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Qg extends dr{constructor(e,t=Xn,i=Xi,s,r,a=Ot,o=Ot,l,c=pi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Kf extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vr extends ln{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;v("z","y","x",-1,-1,i,t,e,a,r,0),v("z","y","x",1,-1,i,t,-e,a,r,1),v("x","z","y",1,1,e,i,t,s,a,2),v("x","z","y",1,-1,e,i,-t,s,a,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(f,2));function v(b,g,h,y,P,S,E,A,D,_,w){const L=S/D,O=E/_,k=S/2,K=E/2,B=A/2,q=D+1,te=_+1;let z=0,ie=0;const Q=new W;for(let H=0;H<te;H++){const j=H*O-K;for(let Ee=0;Ee<q;Ee++){const we=Ee*L-k;Q[b]=we*y,Q[g]=j*P,Q[h]=B,c.push(Q.x,Q.y,Q.z),Q[b]=0,Q[g]=0,Q[h]=A>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(Ee/D),f.push(1-H/_),z+=1}}for(let H=0;H<_;H++)for(let j=0;j<D;j++){const Ee=d+j+q*H,we=d+j+q*(H+1),tt=d+(j+1)+q*(H+1),je=d+(j+1)+q*H;l.push(Ee,we,je),l.push(we,tt,je),ie+=6}o.addGroup(m,ie,w),m+=ie,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class uc extends ln{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const P=new W,S=new W,E=new W;for(let A=0;A<t.length;A+=3)m(t[A+0],P),m(t[A+1],S),m(t[A+2],E),l(P,S,E,y)}function l(y,P,S,E){const A=E+1,D=[];for(let _=0;_<=A;_++){D[_]=[];const w=y.clone().lerp(S,_/A),L=P.clone().lerp(S,_/A),O=A-_;for(let k=0;k<=O;k++)k===0&&_===A?D[_][k]=w:D[_][k]=w.clone().lerp(L,k/O)}for(let _=0;_<A;_++)for(let w=0;w<2*(A-_)-1;w++){const L=Math.floor(w/2);w%2===0?(d(D[_][L+1]),d(D[_+1][L]),d(D[_][L])):(d(D[_][L+1]),d(D[_+1][L+1]),d(D[_+1][L]))}}function c(y){const P=new W;for(let S=0;S<r.length;S+=3)P.x=r[S+0],P.y=r[S+1],P.z=r[S+2],P.normalize().multiplyScalar(y),r[S+0]=P.x,r[S+1]=P.y,r[S+2]=P.z}function u(){const y=new W;for(let P=0;P<r.length;P+=3){y.x=r[P+0],y.y=r[P+1],y.z=r[P+2];const S=g(y)/2/Math.PI+.5,E=h(y)/Math.PI+.5;a.push(S,1-E)}v(),f()}function f(){for(let y=0;y<a.length;y+=6){const P=a[y+0],S=a[y+2],E=a[y+4],A=Math.max(P,S,E),D=Math.min(P,S,E);A>.9&&D<.1&&(P<.2&&(a[y+0]+=1),S<.2&&(a[y+2]+=1),E<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function m(y,P){const S=y*3;P.x=e[S+0],P.y=e[S+1],P.z=e[S+2]}function v(){const y=new W,P=new W,S=new W,E=new W,A=new rt,D=new rt,_=new rt;for(let w=0,L=0;w<r.length;w+=9,L+=6){y.set(r[w+0],r[w+1],r[w+2]),P.set(r[w+3],r[w+4],r[w+5]),S.set(r[w+6],r[w+7],r[w+8]),A.set(a[L+0],a[L+1]),D.set(a[L+2],a[L+3]),_.set(a[L+4],a[L+5]),E.copy(y).add(P).add(S).divideScalar(3);const O=g(E);b(A,L+0,y,O),b(D,L+2,P,O),b(_,L+4,S,O)}}function b(y,P,S,E){E<0&&y.x===1&&(a[P]=y.x-1),S.x===0&&S.z===0&&(a[P]=E/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function h(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uc(e.vertices,e.indices,e.radius,e.detail)}}class dc extends uc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new dc(e.radius,e.detail)}}class Fa extends ln{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=e/o,d=t/l,m=[],v=[],b=[],g=[];for(let h=0;h<u;h++){const y=h*d-a;for(let P=0;P<c;P++){const S=P*f-r;v.push(S,-y,0),b.push(0,0,1),g.push(P/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<o;y++){const P=y+c*h,S=y+c*(h+1),E=y+1+c*(h+1),A=y+1+c*h;m.push(P,S,A),m.push(S,E,A)}this.setIndex(m),this.setAttribute("position",new Qt(v,3)),this.setAttribute("normal",new Qt(b,3)),this.setAttribute("uv",new Qt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sa extends ln{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],f=[],d=new W,m=new W,v=new W;for(let b=0;b<=i;b++){const g=a+b/i*o;for(let h=0;h<=s;h++){const y=h/s*r;m.x=(e+t*Math.cos(g))*Math.cos(y),m.y=(e+t*Math.cos(g))*Math.sin(y),m.z=t*Math.sin(g),c.push(m.x,m.y,m.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),v.subVectors(m,d).normalize(),u.push(v.x,v.y,v.z),f.push(h/s),f.push(b/i)}}for(let b=1;b<=i;b++)for(let g=1;g<=s;g++){const h=(s+1)*b+g-1,y=(s+1)*(b-1)+g-1,P=(s+1)*(b-1)+g,S=(s+1)*b+g;l.push(h,y,S),l.push(y,P,S)}this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ws(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Ru(s))s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Ru(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=ws(n[t]);for(const s in i)e[s]=i[s]}return e}function Ru(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function jg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const e0={clone:ws,merge:qt};var t0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends _r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t0,this.fragmentShader=n0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=jg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ot().setHex(s.value);break;case"v2":this.uniforms[i].value=new rt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new W().fromArray(s.value);break;case"v4":this.uniforms[i].value=new At().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ke().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Pt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class i0 extends qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class s0 extends _r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class r0 extends _r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yr=new W,qr=new Rs,Ln=new W;class Jf extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yr,qr,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,qr,Ln.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Yr,qr,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,qr,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const yi=new W,Cu=new rt,Pu=new rt;class hn extends Jf{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Dl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(so*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dl*2*Math.atan(Math.tan(so*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,Cu,Pu),t.subVectors(Pu,Cu)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(so*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class $f extends Jf{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const cs=-90,us=1;class a0 extends nn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(cs,us,e,t);s.layers=this.layers,this.add(s);const r=new hn(cs,us,e,t);r.layers=this.layers,this.add(r);const a=new hn(cs,us,e,t);a.layers=this.layers,this.add(a);const o=new hn(cs,us,e,t);o.layers=this.layers,this.add(o);const l=new hn(cs,us,e,t);l.layers=this.layers,this.add(l);const c=new hn(cs,us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_a)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class o0 extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class l0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Xe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const _c=class _c{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};_c.prototype.isMatrix2=!0;let Du=_c;function Lu(n,e,t,i){const s=c0(i);switch(t){case Nf:return n*e;case Of:return n*e/s.components*s.byteLength;case sc:return n*e/s.components*s.byteLength;case Yi:return n*e*2/s.components*s.byteLength;case rc:return n*e*2/s.components*s.byteLength;case Ff:return n*e*3/s.components*s.byteLength;case bn:return n*e*4/s.components*s.byteLength;case ac:return n*e*4/s.components*s.byteLength;case ea:case ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case na:case ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nl:case sl:return Math.max(n,16)*Math.max(e,8)/4;case tl:case il:return Math.max(n,8)*Math.max(e,8)/2;case rl:case al:case ll:case cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ol:case ha:case ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case hl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case pl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ml:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case _l:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case vl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case yl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case El:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Tl:case Al:case wl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Rl:case Cl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case pa:case Pl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function c0(n){switch(n){case pn:case Df:return{byteLength:1,components:1};case cr:case Lf:case Yn:return{byteLength:2,components:1};case nc:case ic:return{byteLength:2,components:4};case Xn:case tc:case Vn:return{byteLength:4,components:1};case If:case Uf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ec}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ec);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qf(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function u0(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<f.length;m++){const v=f[d],b=f[m];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++d,f[d]=b)}f.length=d+1;for(let m=0,v=f.length;m<v;m++){const b=f[m];n.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var d0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f0=`#ifdef USE_ALPHAHASH
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
#endif`,h0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_0=`#ifdef USE_AOMAP
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
#endif`,v0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x0=`#ifdef USE_BATCHING
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
#endif`,S0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,E0=`#ifdef USE_IRIDESCENCE
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
#endif`,T0=`#ifdef USE_BUMPMAP
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
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,I0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,U0=`#define PI 3.141592653589793
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
} // validated`,N0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,F0=`vec3 transformedNormal = objectNormal;
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
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z0="gl_FragColor = linearToOutputTexel( gl_FragColor );",k0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q0=`#ifdef USE_ENVMAP
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
#endif`,K0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q0=`#ifdef USE_GRADIENTMAP
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
}`,j0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,i_=`#ifdef USE_ENVMAP
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
#endif`,s_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l_=`PhysicalMaterial material;
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
#endif`,c_=`uniform sampler2D dfgLUT;
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
}`,u_=`
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
#endif`,d_=`#if defined( RE_IndirectDiffuse )
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
#endif`,f_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,p_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,__=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,M_=`#if defined( USE_POINTS_UV )
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
#endif`,b_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w_=`#ifdef USE_MORPHTARGETS
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
#endif`,R_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,P_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,D_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,U_=`#ifdef USE_NORMALMAP
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
#endif`,N_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,z_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,J_=`float getShadowMask() {
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
}`,$_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q_=`#ifdef USE_SKINNING
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
#endif`,j_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ev=`#ifdef USE_SKINNING
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
#endif`,tv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rv=`#ifdef USE_TRANSMISSION
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
#endif`,av=`#ifdef USE_TRANSMISSION
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
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fv=`uniform sampler2D t2D;
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
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_v=`#include <common>
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
}`,vv=`#if DEPTH_PACKING == 3200
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
}`,xv=`#define DISTANCE
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
}`,Sv=`#define DISTANCE
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
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yv=`uniform float scale;
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
}`,Ev=`uniform vec3 diffuse;
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
}`,Tv=`#include <common>
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
}`,Av=`uniform vec3 diffuse;
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
}`,wv=`#define LAMBERT
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
}`,Rv=`#define LAMBERT
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
}`,Cv=`#define MATCAP
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
}`,Pv=`#define MATCAP
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
}`,Dv=`#define NORMAL
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
}`,Lv=`#define NORMAL
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
}`,Iv=`#define PHONG
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
}`,Uv=`#define PHONG
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
}`,Nv=`#define STANDARD
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
}`,Fv=`#define STANDARD
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
}`,Ov=`#define TOON
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
}`,Bv=`#define TOON
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
}`,Hv=`uniform float size;
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
}`,Vv=`uniform vec3 diffuse;
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
}`,zv=`#include <common>
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
}`,kv=`uniform vec3 color;
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
}`,Gv=`uniform float rotation;
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
}`,Wv=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:d0,alphahash_pars_fragment:f0,alphamap_fragment:h0,alphamap_pars_fragment:p0,alphatest_fragment:m0,alphatest_pars_fragment:g0,aomap_fragment:_0,aomap_pars_fragment:v0,batching_pars_vertex:x0,batching_vertex:S0,begin_vertex:M0,beginnormal_vertex:b0,bsdfs:y0,iridescence_fragment:E0,bumpmap_pars_fragment:T0,clipping_planes_fragment:A0,clipping_planes_pars_fragment:w0,clipping_planes_pars_vertex:R0,clipping_planes_vertex:C0,color_fragment:P0,color_pars_fragment:D0,color_pars_vertex:L0,color_vertex:I0,common:U0,cube_uv_reflection_fragment:N0,defaultnormal_vertex:F0,displacementmap_pars_vertex:O0,displacementmap_vertex:B0,emissivemap_fragment:H0,emissivemap_pars_fragment:V0,colorspace_fragment:z0,colorspace_pars_fragment:k0,envmap_fragment:G0,envmap_common_pars_fragment:W0,envmap_pars_fragment:X0,envmap_pars_vertex:Y0,envmap_physical_pars_fragment:i_,envmap_vertex:q0,fog_vertex:K0,fog_pars_vertex:Z0,fog_fragment:J0,fog_pars_fragment:$0,gradientmap_pars_fragment:Q0,lightmap_pars_fragment:j0,lights_lambert_fragment:e_,lights_lambert_pars_fragment:t_,lights_pars_begin:n_,lights_toon_fragment:s_,lights_toon_pars_fragment:r_,lights_phong_fragment:a_,lights_phong_pars_fragment:o_,lights_physical_fragment:l_,lights_physical_pars_fragment:c_,lights_fragment_begin:u_,lights_fragment_maps:d_,lights_fragment_end:f_,lightprobes_pars_fragment:h_,logdepthbuf_fragment:p_,logdepthbuf_pars_fragment:m_,logdepthbuf_pars_vertex:g_,logdepthbuf_vertex:__,map_fragment:v_,map_pars_fragment:x_,map_particle_fragment:S_,map_particle_pars_fragment:M_,metalnessmap_fragment:b_,metalnessmap_pars_fragment:y_,morphinstance_vertex:E_,morphcolor_vertex:T_,morphnormal_vertex:A_,morphtarget_pars_vertex:w_,morphtarget_vertex:R_,normal_fragment_begin:C_,normal_fragment_maps:P_,normal_pars_fragment:D_,normal_pars_vertex:L_,normal_vertex:I_,normalmap_pars_fragment:U_,clearcoat_normal_fragment_begin:N_,clearcoat_normal_fragment_maps:F_,clearcoat_pars_fragment:O_,iridescence_pars_fragment:B_,opaque_fragment:H_,packing:V_,premultiplied_alpha_fragment:z_,project_vertex:k_,dithering_fragment:G_,dithering_pars_fragment:W_,roughnessmap_fragment:X_,roughnessmap_pars_fragment:Y_,shadowmap_pars_fragment:q_,shadowmap_pars_vertex:K_,shadowmap_vertex:Z_,shadowmask_pars_fragment:J_,skinbase_vertex:$_,skinning_pars_vertex:Q_,skinning_vertex:j_,skinnormal_vertex:ev,specularmap_fragment:tv,specularmap_pars_fragment:nv,tonemapping_fragment:iv,tonemapping_pars_fragment:sv,transmission_fragment:rv,transmission_pars_fragment:av,uv_pars_fragment:ov,uv_pars_vertex:lv,uv_vertex:cv,worldpos_vertex:uv,background_vert:dv,background_frag:fv,backgroundCube_vert:hv,backgroundCube_frag:pv,cube_vert:mv,cube_frag:gv,depth_vert:_v,depth_frag:vv,distance_vert:xv,distance_frag:Sv,equirect_vert:Mv,equirect_frag:bv,linedashed_vert:yv,linedashed_frag:Ev,meshbasic_vert:Tv,meshbasic_frag:Av,meshlambert_vert:wv,meshlambert_frag:Rv,meshmatcap_vert:Cv,meshmatcap_frag:Pv,meshnormal_vert:Dv,meshnormal_frag:Lv,meshphong_vert:Iv,meshphong_frag:Uv,meshphysical_vert:Nv,meshphysical_frag:Fv,meshtoon_vert:Ov,meshtoon_frag:Bv,points_vert:Hv,points_frag:Vv,shadow_vert:zv,shadow_frag:kv,sprite_vert:Gv,sprite_frag:Wv},ye={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Bn={basic:{uniforms:qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:qt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:qt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ot(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:qt([ye.points,ye.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:qt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:qt([ye.common,ye.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:qt([ye.sprite,ye.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:qt([ye.common,ye.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:qt([ye.lights,ye.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Bn.physical={uniforms:qt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Kr={r:0,b:0,g:0},Xv=new Pt,jf=new Ke;jf.set(-1,0,0,0,1,0,0,0,1);function Yv(n,e,t,i,s,r){const a=new ot(0);let o=s===!0?0:1,l,c,u=null,f=0,d=null;function m(y){let P=y.isScene===!0?y.background:null;if(P&&P.isTexture){const S=y.backgroundBlurriness>0;P=e.get(P,S)}return P}function v(y){let P=!1;const S=m(y);S===null?g(a,o):S&&S.isColor&&(g(S,1),P=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(y,P){const S=m(P);S&&(S.isCubeTexture||S.mapping===Ua)?(c===void 0&&(c=new gn(new vr(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:ws(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Xv.makeRotationFromEuler(P.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(jf),c.material.toneMapped=it.getTransfer(S.colorSpace)!==ht,(u!==S||f!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new gn(new Fa(2,2),new qn({name:"BackgroundMaterial",uniforms:ws(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=it.getTransfer(S.colorSpace)!==ht,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,P){y.getRGB(Kr,Zf(n)),t.buffers.color.setClear(Kr.r,Kr.g,Kr.b,P,r)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,P=1){a.set(y),o=P,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:v,addToRenderList:b,dispose:h}}function qv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(O,k,K,B,q){let te=!1;const z=f(O,B,K,k);r!==z&&(r=z,c(r.object)),te=m(O,B,K,q),te&&v(O,B,K,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,S(O,k,K,B),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return n.createVertexArray()}function c(O){return n.bindVertexArray(O)}function u(O){return n.deleteVertexArray(O)}function f(O,k,K,B){const q=B.wireframe===!0;let te=i[k.id];te===void 0&&(te={},i[k.id]=te);const z=O.isInstancedMesh===!0?O.id:0;let ie=te[z];ie===void 0&&(ie={},te[z]=ie);let Q=ie[K.id];Q===void 0&&(Q={},ie[K.id]=Q);let H=Q[q];return H===void 0&&(H=d(l()),Q[q]=H),H}function d(O){const k=[],K=[],B=[];for(let q=0;q<t;q++)k[q]=0,K[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:K,attributeDivisors:B,object:O,attributes:{},index:null}}function m(O,k,K,B){const q=r.attributes,te=k.attributes;let z=0;const ie=K.getAttributes();for(const Q in ie)if(ie[Q].location>=0){const j=q[Q];let Ee=te[Q];if(Ee===void 0&&(Q==="instanceMatrix"&&O.instanceMatrix&&(Ee=O.instanceMatrix),Q==="instanceColor"&&O.instanceColor&&(Ee=O.instanceColor)),j===void 0||j.attribute!==Ee||Ee&&j.data!==Ee.data)return!0;z++}return r.attributesNum!==z||r.index!==B}function v(O,k,K,B){const q={},te=k.attributes;let z=0;const ie=K.getAttributes();for(const Q in ie)if(ie[Q].location>=0){let j=te[Q];j===void 0&&(Q==="instanceMatrix"&&O.instanceMatrix&&(j=O.instanceMatrix),Q==="instanceColor"&&O.instanceColor&&(j=O.instanceColor));const Ee={};Ee.attribute=j,j&&j.data&&(Ee.data=j.data),q[Q]=Ee,z++}r.attributes=q,r.attributesNum=z,r.index=B}function b(){const O=r.newAttributes;for(let k=0,K=O.length;k<K;k++)O[k]=0}function g(O){h(O,0)}function h(O,k){const K=r.newAttributes,B=r.enabledAttributes,q=r.attributeDivisors;K[O]=1,B[O]===0&&(n.enableVertexAttribArray(O),B[O]=1),q[O]!==k&&(n.vertexAttribDivisor(O,k),q[O]=k)}function y(){const O=r.newAttributes,k=r.enabledAttributes;for(let K=0,B=k.length;K<B;K++)k[K]!==O[K]&&(n.disableVertexAttribArray(K),k[K]=0)}function P(O,k,K,B,q,te,z){z===!0?n.vertexAttribIPointer(O,k,K,q,te):n.vertexAttribPointer(O,k,K,B,q,te)}function S(O,k,K,B){b();const q=B.attributes,te=K.getAttributes(),z=k.defaultAttributeValues;for(const ie in te){const Q=te[ie];if(Q.location>=0){let H=q[ie];if(H===void 0&&(ie==="instanceMatrix"&&O.instanceMatrix&&(H=O.instanceMatrix),ie==="instanceColor"&&O.instanceColor&&(H=O.instanceColor)),H!==void 0){const j=H.normalized,Ee=H.itemSize,we=e.get(H);if(we===void 0)continue;const tt=we.buffer,je=we.type,et=we.bytesPerElement,ne=je===n.INT||je===n.UNSIGNED_INT||H.gpuType===tc;if(H.isInterleavedBufferAttribute){const ce=H.data,Le=ce.stride,Ge=H.offset;if(ce.isInstancedInterleavedBuffer){for(let Ie=0;Ie<Q.locationSize;Ie++)h(Q.location+Ie,ce.meshPerAttribute);O.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ie=0;Ie<Q.locationSize;Ie++)g(Q.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let Ie=0;Ie<Q.locationSize;Ie++)P(Q.location+Ie,Ee/Q.locationSize,je,j,Le*et,(Ge+Ee/Q.locationSize*Ie)*et,ne)}else{if(H.isInstancedBufferAttribute){for(let ce=0;ce<Q.locationSize;ce++)h(Q.location+ce,H.meshPerAttribute);O.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ce=0;ce<Q.locationSize;ce++)g(Q.location+ce);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let ce=0;ce<Q.locationSize;ce++)P(Q.location+ce,Ee/Q.locationSize,je,j,Ee*et,Ee/Q.locationSize*ce*et,ne)}}else if(z!==void 0){const j=z[ie];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(Q.location,j);break;case 3:n.vertexAttrib3fv(Q.location,j);break;case 4:n.vertexAttrib4fv(Q.location,j);break;default:n.vertexAttrib1fv(Q.location,j)}}}}y()}function E(){w();for(const O in i){const k=i[O];for(const K in k){const B=k[K];for(const q in B){const te=B[q];for(const z in te)u(te[z].object),delete te[z];delete B[q]}}delete i[O]}}function A(O){if(i[O.id]===void 0)return;const k=i[O.id];for(const K in k){const B=k[K];for(const q in B){const te=B[q];for(const z in te)u(te[z].object),delete te[z];delete B[q]}}delete i[O.id]}function D(O){for(const k in i){const K=i[k];for(const B in K){const q=K[B];if(q[O.id]===void 0)continue;const te=q[O.id];for(const z in te)u(te[z].object),delete te[z];delete q[O.id]}}}function _(O){for(const k in i){const K=i[k],B=O.isInstancedMesh===!0?O.id:0,q=K[B];if(q!==void 0){for(const te in q){const z=q[te];for(const ie in z)u(z[ie].object),delete z[ie];delete q[te]}delete K[B],Object.keys(K).length===0&&delete i[k]}}}function w(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:D,initAttributes:b,enableAttribute:g,disableUnusedAttributes:y}}function Kv(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let m=0;m<u;m++)d+=c[m];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Zv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==bn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const _=D===Yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==pn&&D!==Vn&&!_&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Xe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:y,maxVaryings:P,maxFragmentUniforms:S,maxSamples:E,samples:A}}function Jv(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Ti,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||s;return s=d,i=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const v=f.clippingPlanes,b=f.clipIntersection,g=f.clipShadows,h=n.get(f);if(!s||v===null||v.length===0||r&&!g)r?u(null):c();else{const y=r?0:i,P=y*4;let S=h.clippingState||null;l.value=S,S=u(v,d,P,m);for(let E=0;E!==P;++E)S[E]=t[E];h.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,v){const b=f!==null?f.length:0;let g=null;if(b!==0){if(g=l.value,v!==!0||g===null){const h=m+b*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<h)&&(g=new Float32Array(h));for(let P=0,S=m;P!==b;++P,S+=4)a.copy(f[P]).applyMatrix4(y,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}const gs=4,$v=6,Qv=20,jv=256,Bs=new $f,Iu=new ot;let wo=null,Ro=0,Co=0,Po=!1;const ex=new W,Fi=new W;class Uu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=ex}=r;wo=this._renderer.getRenderTarget(),Ro=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wo,Ro,Co),this._renderer.xr.enabled=Po,e.scissorTest=!1,ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xi||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wo=this._renderer.getRenderTarget(),Ro=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Yn,format:bn,colorSpace:ma,depthBuffer:!1},s=Nu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nu(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=tx(r)),this._blurMaterial=ix(r,e,t),this._ggxMaterial=nx(r,e,t)}return s}_compileMaterial(e){const t=new gn(new ln,e);this._renderer.compile(t,Bs)}_sceneToCubeUV(e,t,i,s,r){const l=new hn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(Iu),f.toneMapping=Gn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gn(new vr,new xa({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,g=b.material;let h=!1;const y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,h=!0):(g.color.copy(Iu),h=!0);for(let P=0;P<6;P++){const S=P%3;S===0?(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[P],r.y,r.z)):S===1?(l.up.set(0,0,c[P]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[P],r.z)):(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[P]));const E=this._cubeSize;ds(s,S*E,P>2?E:0,E,E),f.setRenderTarget(s),h&&f.render(b,l),f.render(e,l)}f.toneMapping=m,f.autoClear=d,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Xi||e.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ds(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Bs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=c*1.25,m=f*d,{_lodMax:v}=this,b=this._sizeLods[i],g=3*b*(i>v-gs?i-v+gs:0),h=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=v-t,ds(r,g,h,3*b,2*b),s.setRenderTarget(r),s.render(o,Bs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=v-i,ds(e,g,h,3*b,2*b),s.setRenderTarget(e),s.render(o,Bs)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],f=3*u*(s>this._lodMax-gs?s-this._lodMax+gs:0),d=4*(this._cubeSize-u);ds(t,f,d,3*u,2*u),a.setRenderTarget(t),a.render(l,Bs)}}function tx(n){const e=[],t=[];let i=n;const s=n-gs+1+$v;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,d=6,m=3,v=new Float32Array(m*d*f),b=new Float32Array(m*d*f);for(let h=0;h<f;h++){const y=h%3*2/3-1,P=h>2?0:-1,S=[y,P,0,y+2/3,P,0,y+2/3,P+1,0,y,P,0,y+2/3,P+1,0,y,P+1,0];v.set(S,m*d*h);for(let E=0;E<d;E++){const A=u[E*2]*2-1,D=u[E*2+1]*2-1;h===0?Fi.set(1,D,A):h===1?Fi.set(-A,1,-D):h===2?Fi.set(-A,D,1):h===3?Fi.set(-1,D,-A):h===4?Fi.set(-A,-1,D):Fi.set(A,D,-1),Fi.toArray(b,(h*d+E)*m)}}const g=new ln;g.setAttribute("position",new wn(v,m)),g.setAttribute("outputDirection",new wn(b,m)),t.push(new gn(g,null)),i>gs&&i--}return{lodMeshes:t,sizeLods:e}}function Nu(n,e,t){const i=new An(n,e,t);return i.texture.mapping=Ua,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ds(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function nx(n,e,t){return new qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function ix(n,e,t){return new qn({name:"SphericalGaussianBlur",defines:{SAMPLES:Qv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Fu(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Ou(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Oa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class eh extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new qf(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vr(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:li});r.uniforms.tEquirect.value=t;const a=new gn(s,r),o=t.minFilter;return t.minFilter===Hi&&(t.minFilter=Gt),new a0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function sx(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,m=!1){return d==null?null:m?a(d):r(d)}function r(d){if(d&&d.isTexture){const m=d.mapping;if(m===eo||m===to)if(e.has(d)){const v=e.get(d).texture;return o(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const b=new eh(v.height);return b.fromEquirectangularTexture(n,d),e.set(d,b),d.addEventListener("dispose",c),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const m=d.mapping,v=m===eo||m===to,b=m===Xi||m===As;if(v||b){let g=t.get(d);const h=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h)return i===null&&(i=new Uu(n)),g=v?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const y=d.image;return v&&y&&y.height>0||b&&y&&l(y)?(i===null&&(i=new Uu(n)),g=v?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,m){return m===eo?d.mapping=Xi:m===to&&(d.mapping=As),d}function l(d){let m=0;const v=6;for(let b=0;b<v;b++)d[b]!==void 0&&m++;return m===v}function c(d){const m=d.target;m.removeEventListener("dispose",c);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function u(d){const m=d.target;m.removeEventListener("dispose",u);const v=t.get(m);v!==void 0&&(t.delete(m),v.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function rx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&bs("WebGLRenderer: "+i+" extension not supported."),s}}}function ax(n,e,t,i){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const m in d)e.update(d[m],n.ARRAY_BUFFER)}function c(f){const d=[],m=f.index,v=f.attributes.position;let b=0;if(v===void 0)return;if(m!==null){const y=m.array;b=m.version;for(let P=0,S=y.length;P<S;P+=3){const E=y[P+0],A=y[P+1],D=y[P+2];d.push(E,A,A,D,D,E)}}else{const y=v.array;b=v.version;for(let P=0,S=y.length/3-1;P<S;P+=3){const E=P+0,A=P+1,D=P+2;d.push(E,A,A,D,D,E)}}const g=new(v.count>=65535?Gf:kf)(d,1);g.version=b;const h=r.get(f);h&&e.remove(h),r.set(f,g)}function u(f){const d=r.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function ox(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*a),t.update(d,i,1)}function c(f,d,m){m!==0&&(n.drawElementsInstanced(i,d,r,f*a,m),t.update(d,i,m))}function u(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,m);let b=0;for(let g=0;g<m;g++)b+=d[g];t.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function lx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:lt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function cx(n,e,t){const i=new WeakMap,s=new At;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let L=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var m=L;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],P=o.morphAttributes.color||[];let S=0;v===!0&&(S=1),b===!0&&(S=2),g===!0&&(S=3);let E=o.attributes.position.count*S,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const D=new Float32Array(E*A*4*f),_=new Hf(D,E,A,f);_.type=Vn,_.needsUpdate=!0;const w=S*4;for(let O=0;O<f;O++){const k=h[O],K=y[O],B=P[O],q=E*A*4*O;for(let te=0;te<k.count;te++){const z=te*w;v===!0&&(s.fromBufferAttribute(k,te),D[q+z+0]=s.x,D[q+z+1]=s.y,D[q+z+2]=s.z,D[q+z+3]=0),b===!0&&(s.fromBufferAttribute(K,te),D[q+z+4]=s.x,D[q+z+5]=s.y,D[q+z+6]=s.z,D[q+z+7]=0),g===!0&&(s.fromBufferAttribute(B,te),D[q+z+8]=s.x,D[q+z+9]=s.y,D[q+z+10]=s.z,D[q+z+11]=B.itemSize===4?s.w:1)}}d={count:f,texture:_,size:new rt(E,A)},i.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const b=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",b),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function ux(n,e,t,i,s){let r=new WeakMap;function a(c){const u=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return d}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const dx={[yf]:"LINEAR_TONE_MAPPING",[Ef]:"REINHARD_TONE_MAPPING",[Tf]:"CINEON_TONE_MAPPING",[Af]:"ACES_FILMIC_TONE_MAPPING",[Rf]:"AGX_TONE_MAPPING",[Cf]:"NEUTRAL_TONE_MAPPING",[wf]:"CUSTOM_TONE_MAPPING"};function fx(n,e,t,i,s,r){const a=new An(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new ln;c.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Qt([0,2,0,0,2,0],2));const u=new i0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new gn(c,u),d=new $f(-1,1,1,-1,0,1);let m=null,v=null,b=!1,g,h=null,y=[],P=!1;this.setSize=function(S,E){a.setSize(S,E),o!==null&&o.setSize(S,E),l!==null&&l.setSize(S,E);for(let A=0;A<y.length;A++){const D=y[A];D.setSize&&D.setSize(S,E)}},this.setEffects=function(S){y=S,P=y.length>0&&y[0].isRenderPass===!0;const E=a.width,A=a.height;y.length>0&&o===null&&(o=new An(E,A,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),l=new An(E,A,{type:Yn,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<y.length;D++){const _=y[D];_.setSize&&_.setSize(E,A)}},this.begin=function(S,E){if(b||S.toneMapping===Gn&&y.length===0)return!1;if(h=E,E!==null){const A=E.width,D=E.height;(a.width!==A||a.height!==D)&&this.setSize(A,D)}return P===!1&&S.setRenderTarget(a),g=S.toneMapping,S.toneMapping=Gn,!0},this.hasRenderPass=function(){return P},this.end=function(S,E){S.toneMapping=g,b=!0;let A=a,D=o;for(let _=0;_<y.length;_++){const w=y[_];w.enabled!==!1&&(w.render(S,D,A,E),w.needsSwap!==!1&&(A=D,D=D===o?l:o))}if(m!==S.outputColorSpace||v!==S.toneMapping){m=S.outputColorSpace,v=S.toneMapping,u.defines={},it.getTransfer(m)===ht&&(u.defines.SRGB_TRANSFER="");const _=dx[v];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,S.setRenderTarget(h),S.render(f,d),h=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const th=new $t,Il=new dr(1,1),nh=new Hf,ih=new Ig,sh=new qf,Bu=[],Hu=[],Vu=new Float32Array(16),zu=new Float32Array(9),ku=new Float32Array(4);function Cs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Bu[s];if(r===void 0&&(r=new Float32Array(s),Bu[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ba(n,e){let t=Hu[e];t===void 0&&(t=new Int32Array(e),Hu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function hx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function mx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function gx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function _x(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;ku.set(i),n.uniformMatrix2fv(this.addr,!1,ku),Ut(t,i)}}function vx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;zu.set(i),n.uniformMatrix3fv(this.addr,!1,zu),Ut(t,i)}}function xx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;Vu.set(i),n.uniformMatrix4fv(this.addr,!1,Vu),Ut(t,i)}}function Sx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Mx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function yx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function Ex(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function Ax(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function wx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function Rx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Il.compareFunction=t.isReversedDepthBuffer()?lc:oc,r=Il):r=th,t.setTexture2D(e||r,s)}function Cx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ih,s)}function Px(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||sh,s)}function Dx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||nh,s)}function Lx(n){switch(n){case 5126:return hx;case 35664:return px;case 35665:return mx;case 35666:return gx;case 35674:return _x;case 35675:return vx;case 35676:return xx;case 5124:case 35670:return Sx;case 35667:case 35671:return Mx;case 35668:case 35672:return bx;case 35669:case 35673:return yx;case 5125:return Ex;case 36294:return Tx;case 36295:return Ax;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return Dx}}function Ix(n,e){n.uniform1fv(this.addr,e)}function Ux(n,e){const t=Cs(e,this.size,2);n.uniform2fv(this.addr,t)}function Nx(n,e){const t=Cs(e,this.size,3);n.uniform3fv(this.addr,t)}function Fx(n,e){const t=Cs(e,this.size,4);n.uniform4fv(this.addr,t)}function Ox(n,e){const t=Cs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Bx(n,e){const t=Cs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Hx(n,e){const t=Cs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Vx(n,e){n.uniform1iv(this.addr,e)}function zx(n,e){n.uniform2iv(this.addr,e)}function kx(n,e){n.uniform3iv(this.addr,e)}function Gx(n,e){n.uniform4iv(this.addr,e)}function Wx(n,e){n.uniform1uiv(this.addr,e)}function Xx(n,e){n.uniform2uiv(this.addr,e)}function Yx(n,e){n.uniform3uiv(this.addr,e)}function qx(n,e){n.uniform4uiv(this.addr,e)}function Kx(n,e,t){const i=this.cache,s=e.length,r=Ba(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Il:a=th;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Zx(n,e,t){const i=this.cache,s=e.length,r=Ba(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ih,r[a])}function Jx(n,e,t){const i=this.cache,s=e.length,r=Ba(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||sh,r[a])}function $x(n,e,t){const i=this.cache,s=e.length,r=Ba(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||nh,r[a])}function Qx(n){switch(n){case 5126:return Ix;case 35664:return Ux;case 35665:return Nx;case 35666:return Fx;case 35674:return Ox;case 35675:return Bx;case 35676:return Hx;case 5124:case 35670:return Vx;case 35667:case 35671:return zx;case 35668:case 35672:return kx;case 35669:case 35673:return Gx;case 5125:return Wx;case 36294:return Xx;case 36295:return Yx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return Kx;case 35679:case 36299:case 36307:return Zx;case 35680:case 36300:case 36308:case 36293:return Jx;case 36289:case 36303:case 36311:case 36292:return $x}}class jx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Lx(t.type)}}class eS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qx(t.type)}}class tS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Do=/(\w+)(\])?(\[|\.)?/g;function Gu(n,e){n.seq.push(e),n.map[e.id]=e}function nS(n,e,t){const i=n.name,s=i.length;for(Do.lastIndex=0;;){const r=Do.exec(i),a=Do.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Gu(t,c===void 0?new jx(o,n,e):new eS(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new tS(o),Gu(t,f)),t=f}}}class sa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);nS(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Wu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const iS=37297;let sS=0;function rS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Xu=new Ke;function aS(n){it._getMatrix(Xu,it.workingColorSpace,n);const e=`mat3( ${Xu.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case ga:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Yu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+rS(n.getShaderSource(e),o)}else return r}function oS(n,e){const t=aS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const lS={[yf]:"Linear",[Ef]:"Reinhard",[Tf]:"Cineon",[Af]:"ACESFilmic",[Rf]:"AgX",[Cf]:"Neutral",[wf]:"Custom"};function cS(n,e){const t=lS[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zr=new W;function uS(){it.getLuminanceCoefficients(Zr);const n=Zr.x.toFixed(4),e=Zr.y.toFixed(4),t=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function fS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Xs(n){return n!==""}function qu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ku(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ul(n){return n.replace(pS,gS)}const mS=new Map;function gS(n,e){let t=Qe[e];if(t===void 0){const i=mS.get(e);if(i!==void 0)t=Qe[i],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ul(t)}const _S=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zu(n){return n.replace(_S,vS)}function vS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ju(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const xS={[jr]:"SHADOWMAP_TYPE_PCF",[Gs]:"SHADOWMAP_TYPE_VSM"};function SS(n){return xS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const MS={[Xi]:"ENVMAP_TYPE_CUBE",[As]:"ENVMAP_TYPE_CUBE",[Ua]:"ENVMAP_TYPE_CUBE_UV"};function bS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":MS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const yS={[As]:"ENVMAP_MODE_REFRACTION"};function ES(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":yS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const TS={[bf]:"ENVMAP_BLENDING_MULTIPLY",[ug]:"ENVMAP_BLENDING_MIX",[dg]:"ENVMAP_BLENDING_ADD"};function AS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":TS[n.combine]||"ENVMAP_BLENDING_NONE"}function wS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function RS(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=SS(t),c=bS(t),u=ES(t),f=AS(t),d=wS(t),m=dS(t),v=fS(r),b=s.createProgram();let g,h,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Xs).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Xs).join(`
`),h.length>0&&(h+=`
`)):(g=[Ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),h=[Ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Gn?cS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,oS("linearToOutputTexel",t.outputColorSpace),uS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),a=Ul(a),a=qu(a,t),a=Ku(a,t),o=Ul(o),o=qu(o,t),o=Ku(o,t),a=Zu(a),o=Zu(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",t.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const P=y+g+a,S=y+h+o,E=Wu(s,s.VERTEX_SHADER,P),A=Wu(s,s.FRAGMENT_SHADER,S);s.attachShader(b,E),s.attachShader(b,A),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function D(O){if(n.debug.checkShaderErrors){const k=s.getProgramInfoLog(b)||"",K=s.getShaderInfoLog(E)||"",B=s.getShaderInfoLog(A)||"",q=k.trim(),te=K.trim(),z=B.trim();let ie=!0,Q=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,b,E,A);else{const H=Yu(s,E,"vertex"),j=Yu(s,A,"fragment");lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+q+`
`+H+`
`+j)}else q!==""?Xe("WebGLProgram: Program Info Log:",q):(te===""||z==="")&&(Q=!1);Q&&(O.diagnostics={runnable:ie,programLog:q,vertexShader:{log:te,prefix:g},fragmentShader:{log:z,prefix:h}})}s.deleteShader(E),s.deleteShader(A),_=new sa(s,b),w=hS(s,b)}let _;this.getUniforms=function(){return _===void 0&&D(this),_};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(b,iS)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sS++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=E,this.fragmentShader=A,this}let CS=0;class PS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new DS(e),t.set(e,i)),i}}class DS{constructor(e){this.id=CS++,this.code=e,this.usedTimes=0}}function LS(n){return n===Yi||n===ha||n===pa}function IS(n,e,t,i,s,r){const a=new Vf,o=new PS,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function b(_,w,L,O,k,K){const B=O.fog,q=k.geometry,te=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?O.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ie=e.get(_.envMap||te,z),Q=ie&&ie.mapping===Ua?ie.image.height:null,H=m[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&Xe("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const j=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ee=j!==void 0?j.length:0;let we=0;q.morphAttributes.position!==void 0&&(we=1),q.morphAttributes.normal!==void 0&&(we=2),q.morphAttributes.color!==void 0&&(we=3);let tt,je,et,ne;if(H){const Mt=Bn[H];tt=Mt.vertexShader,je=Mt.fragmentShader}else{tt=_.vertexShader,je=_.fragmentShader;const Mt=o.getVertexShaderStage(_),ct=o.getFragmentShaderStage(_);o.update(_,Mt,ct),et=Mt.id,ne=ct.id}const ce=n.getRenderTarget(),Le=n.state.buffers.depth.getReversed(),Ge=k.isInstancedMesh===!0,Ie=k.isBatchedMesh===!0,R=!!_.map,I=!!_.matcap,G=!!ie,se=!!_.aoMap,re=!!_.lightMap,$=!!_.bumpMap&&_.wireframe===!1,de=!!_.normalMap,fe=!!_.displacementMap,he=!!_.emissiveMap,ae=!!_.metalnessMap,Re=!!_.roughnessMap,C=_.anisotropy>0,Pe=_.clearcoat>0,Me=_.dispersion>0,T=_.retroreflectivity>0,p=_.iridescence>0,U=_.sheen>0,V=_.transmission>0,Z=C&&!!_.anisotropyMap,pe=Pe&&!!_.clearcoatMap,ge=Pe&&!!_.clearcoatNormalMap,ee=Pe&&!!_.clearcoatRoughnessMap,oe=p&&!!_.iridescenceMap,me=p&&!!_.iridescenceThicknessMap,De=U&&!!_.sheenColorMap,ve=U&&!!_.sheenRoughnessMap,_e=!!_.specularMap,Ve=!!_.specularColorMap,ke=!!_.specularIntensityMap,Ze=V&&!!_.transmissionMap,F=V&&!!_.thicknessMap,xe=!!_.gradientMap,le=!!_.alphaMap,Se=_.alphaTest>0,Ce=!!_.alphaHash,ue=!!_.extensions;let ze=Gn;_.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(ze=n.toneMapping);const Be={shaderID:H,shaderType:_.type,shaderName:_.name,vertexShader:tt,fragmentShader:je,defines:_.defines,customVertexShaderID:et,customFragmentShaderID:ne,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Ie,batchingColor:Ie&&k._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&k.instanceColor!==null,instancingMorph:Ge&&k.morphTexture!==null,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:R,matcap:I,envMap:G,envMapMode:G&&ie.mapping,envMapCubeUVHeight:Q,aoMap:se,lightMap:re,bumpMap:$,normalMap:de,displacementMap:fe,emissiveMap:he,normalMapObjectSpace:de&&_.normalMapType===pg,normalMapTangentSpace:de&&_.normalMapType===lu,packedNormalMap:de&&_.normalMapType===lu&&LS(_.normalMap.format),metalnessMap:ae,roughnessMap:Re,anisotropy:C,anisotropyMap:Z,clearcoat:Pe,clearcoatMap:pe,clearcoatNormalMap:ge,clearcoatRoughnessMap:ee,dispersion:Me,retroreflection:T,iridescence:p,iridescenceMap:oe,iridescenceThicknessMap:me,sheen:U,sheenColorMap:De,sheenRoughnessMap:ve,specularMap:_e,specularColorMap:Ve,specularIntensityMap:ke,transmission:V,transmissionMap:Ze,thicknessMap:F,gradientMap:xe,opaque:_.transparent===!1&&_.blending===er&&_.alphaToCoverage===!1,alphaMap:le,alphaTest:Se,alphaHash:Ce,combine:_.combine,mapUv:R&&v(_.map.channel),aoMapUv:se&&v(_.aoMap.channel),lightMapUv:re&&v(_.lightMap.channel),bumpMapUv:$&&v(_.bumpMap.channel),normalMapUv:de&&v(_.normalMap.channel),displacementMapUv:fe&&v(_.displacementMap.channel),emissiveMapUv:he&&v(_.emissiveMap.channel),metalnessMapUv:ae&&v(_.metalnessMap.channel),roughnessMapUv:Re&&v(_.roughnessMap.channel),anisotropyMapUv:Z&&v(_.anisotropyMap.channel),clearcoatMapUv:pe&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:ge&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:me&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:De&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(_.sheenRoughnessMap.channel),specularMapUv:_e&&v(_.specularMap.channel),specularColorMapUv:Ve&&v(_.specularColorMap.channel),specularIntensityMapUv:ke&&v(_.specularIntensityMap.channel),transmissionMapUv:Ze&&v(_.transmissionMap.channel),thicknessMapUv:F&&v(_.thicknessMap.channel),alphaMapUv:le&&v(_.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(de||C),vertexNormals:!!q.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(R||le),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||q.attributes.normal===void 0&&de===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Le,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:we,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:R&&_.map.isVideoTexture===!0&&it.getTransfer(_.map.colorSpace)===ht,decodeVideoTextureEmissive:he&&_.emissiveMap.isVideoTexture===!0&&it.getTransfer(_.emissiveMap.colorSpace)===ht,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ri,flipSided:_.side===tn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ue&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&_.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function g(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)w.push(L),w.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(h(w,_),y(w,_),w.push(n.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function h(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function y(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function P(_){const w=m[_.type];let L;if(w){const O=Bn[w];L=e0.clone(O.uniforms)}else L=_.uniforms;return L}function S(_,w){let L=u.get(w);return L!==void 0?++L.usedTimes:(L=new RS(n,w,_,s),c.push(L),u.set(w,L)),L}function E(_){if(--_.usedTimes===0){const w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function D(){o.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:P,acquireProgram:S,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:D}}function US(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function NS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function $u(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,v,b,g,h){let y=n[e];return y===void 0?(y={id:d.id,object:d,geometry:m,material:v,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:g,group:h},n[e]=y):(y.id=d.id,y.object=d,y.geometry=m,y.material=v,y.materialVariant=a(d),y.groupOrder=b,y.renderOrder=d.renderOrder,y.z=g,y.group=h),e++,y}function l(d,m,v,b,g,h,y){y.reversedDepth===!0&&(g=-g);const P=o(d,m,v,b,g,h);v.transmission>0?i.push(P):v.transparent===!0?s.push(P):t.push(P)}function c(d,m,v,b,g,h){const y=o(d,m,v,b,g,h);v.transmission>0?i.unshift(y):v.transparent===!0?s.unshift(y):t.unshift(y)}function u(d,m){t.length>1&&t.sort(d||NS),i.length>1&&i.sort(m||$u),s.length>1&&s.sort(m||$u)}function f(){for(let d=e,m=n.length;d<m;d++){const v=n[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function FS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Qu,n.set(i,[a])):s>=r.length?(a=new Qu,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function OS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new ot};break;case"SpotLight":t={position:new W,direction:new W,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function BS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let HS=0;function VS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function zS(n){const e=new OS,t=BS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const s=new W,r=new Pt,a=new Pt;function o(c){let u=0,f=0,d=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let m=0,v=0,b=0,g=0,h=0,y=0,P=0,S=0,E=0,A=0,D=0,_=0,w=0,L=0;c.sort(VS);for(let k=0,K=c.length;k<K;k++){const B=c[k],q=B.color,te=B.intensity,z=B.distance;let ie=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Yi?ie=B.shadow.map.texture:ie=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)u+=q.r*te,f+=q.g*te,d+=q.b*te;else if(B.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(B.sh.coefficients[Q],te);L++}else if(B.isSunLight){const Q=e.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const H=B.shadow,j=t.get(B);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),i.sunShadow[v]=j,i.sunShadowMap[v]=ie;const Ee=H.getViewportCount();for(let we=0;we<Ee;we++)i.sunShadowMatrix[b+we]=H.getMatrix(we),i.sunShadowCascade[b+we]=H._cascadeData[we];b+=Ee,v++}i.sun[m]=Q,m++}else if(B.isDirectionalLight){const Q=e.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const H=B.shadow,j=t.get(B);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,i.directionalShadow[g]=j,i.directionalShadowMap[g]=ie,i.directionalShadowMatrix[g]=B.shadow.matrix,E++}i.directional[g]=Q,g++}else if(B.isSpotLight){const Q=e.get(B);Q.position.setFromMatrixPosition(B.matrixWorld),Q.color.copy(q).multiplyScalar(te),Q.distance=z,Q.coneCos=Math.cos(B.angle),Q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Q.decay=B.decay,i.spot[y]=Q;const H=B.shadow;if(B.map&&(i.spotLightMap[_]=B.map,_++,H.updateMatrices(B),B.castShadow&&w++),i.spotLightMatrix[y]=H.matrix,B.castShadow){const j=t.get(B);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,i.spotShadow[y]=j,i.spotShadowMap[y]=ie,D++}y++}else if(B.isRectAreaLight){const Q=e.get(B);Q.color.copy(q).multiplyScalar(te),Q.halfWidth.set(B.width*.5,0,0),Q.halfHeight.set(0,B.height*.5,0),i.rectArea[P]=Q,P++}else if(B.isPointLight){const Q=e.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity),Q.distance=B.distance,Q.decay=B.decay,B.castShadow){const H=B.shadow,j=t.get(B);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,j.shadowCameraNear=H.camera.near,j.shadowCameraFar=H.camera.far,i.pointShadow[h]=j,i.pointShadowMap[h]=ie,i.pointShadowMatrix[h]=B.shadow.matrix,A++}i.point[h]=Q,h++}else if(B.isHemisphereLight){const Q=e.get(B);Q.skyColor.copy(B.color).multiplyScalar(te),Q.groundColor.copy(B.groundColor).multiplyScalar(te),i.hemi[S]=Q,S++}}P>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const O=i.hash;(O.sunLength!==m||O.directionalLength!==g||O.pointLength!==h||O.spotLength!==y||O.rectAreaLength!==P||O.hemiLength!==S||O.numSunShadows!==v||O.numDirectionalShadows!==E||O.numPointShadows!==A||O.numSpotShadows!==D||O.numSpotMaps!==_||O.numLightProbes!==L)&&(i.sun.length=m,i.directional.length=g,i.spot.length=y,i.rectArea.length=P,i.point.length=h,i.hemi.length=S,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=D,i.spotShadowMap.length=D,i.spotLightMatrix.length=D+_-w,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=L,O.sunLength=m,O.directionalLength=g,O.pointLength=h,O.spotLength=y,O.rectAreaLength=P,O.hemiLength=S,O.numSunShadows=v,O.numDirectionalShadows=E,O.numPointShadows=A,O.numSpotShadows=D,O.numSpotMaps=_,O.numLightProbes=L,i.version=HS++)}function l(c,u){let f=0,d=0,m=0,v=0,b=0,g=0;const h=u.matrixWorldInverse;for(let y=0,P=c.length;y<P;y++){const S=c[y];if(S.isSunLight){const E=i.sun[f];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(h),f++}else if(S.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),d++}else if(S.isSpotLight){const E=i.spot[v];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),v++}else if(S.isRectAreaLight){const E=i.rectArea[b];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(h),a.identity(),r.copy(S.matrixWorld),r.premultiply(h),a.extractRotation(r),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),b++}else if(S.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(h),m++}else if(S.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(h),g++}}}return{setup:o,setupView:l,state:i}}function ju(n){const e=new zS(n),t=[],i=[],s=[];function r(d){f.camera=d,t.length=0,i.length=0,s.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function kS(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new ju(n),e.set(s,[o])):r>=a.length?(o=new ju(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const GS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WS=`uniform sampler2D shadow_pass;
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
}`,XS=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],YS=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],ed=new Pt,Hs=new W,Lo=new W;function qS(n,e,t){let i=new Xf;const s=new rt,r=new rt,a=new At,o=new s0,l=new r0,c={},u=t.maxTextureSize,f={[Wi]:tn,[tn]:Wi,[ri]:ri},d=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:GS,fragmentShader:WS}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new ln;v.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new gn(v,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jr;let h=this.type;this.render=function(A,D,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===Xm&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=jr);const w=n.getRenderTarget(),L=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),k=n.state;k.setBlending(li),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const K=h!==this.type;K&&D.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(q=>q.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,q=A.length;B<q;B++){const te=A[B],z=te.shadow;if(z===void 0){Xe("WebGLShadowMap:",te,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ie=z.getFrameExtents();s.multiply(ie),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,z.mapSize.y=r.y));const Q=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=Q,z.map===null||K===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Gs){if(te.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new An(s.x,s.y,{format:Yi,type:Yn,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),z.map.texture.name=te.name+".shadowMap",z.map.depthTexture=new dr(s.x,s.y,Vn),z.map.depthTexture.name=te.name+".shadowMapDepth",z.map.depthTexture.format=pi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ot,z.map.depthTexture.magFilter=Ot}else te.isPointLight?(z.map=new eh(s.x),z.map.depthTexture=new Qg(s.x,Xn)):(z.map=new An(s.x,s.y),z.map.depthTexture=new dr(s.x,s.y,Xn)),z.map.depthTexture.name=te.name+".shadowMap",z.map.depthTexture.format=pi,this.type===jr?(z.map.depthTexture.compareFunction=Q?lc:oc,z.map.depthTexture.minFilter=Gt,z.map.depthTexture.magFilter=Gt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ot,z.map.depthTexture.magFilter=Ot);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);const H=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();te.isPointLight!==!0&&z.updateMatrices(te,_);for(let j=0;j<H;j++){const Ee=z.getCamera(j);if(te.isPointLight){const we=z.camera,tt=z.matrix,je=te.distance||we.far;je!==we.far&&(we.far=je,we.updateProjectionMatrix()),Hs.setFromMatrixPosition(te.matrixWorld),we.position.copy(Hs),Lo.copy(we.position),Lo.add(XS[j]),we.up.copy(YS[j]),we.lookAt(Lo),we.updateMatrixWorld(),tt.makeTranslation(-Hs.x,-Hs.y,-Hs.z),ed.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),z._frustum.setFromProjectionMatrix(ed,we.coordinateSystem,we.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,j),n.clear();else{j===0&&(n.setRenderTarget(z.map),n.clear());const we=z.getViewport(j);a.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),k.viewport(a)}i=z.getFrustum(j),S(D,_,Ee,te,this.type)}z.isPointLightShadow!==!0&&this.type===Gs&&y(z,_),z.needsUpdate=!1}h=this.type,g.needsUpdate=!1,n.setRenderTarget(w,L,O)};function y(A,D){const _=e.update(b);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null?A.mapPass=new An(s.x,s.y,{format:Yi,type:Yn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(D,null,_,d,b,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value.set(A.map.width,A.map.height),m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(D,null,_,m,b,null)}function P(A,D,_,w){let L=null;const O=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)L=O;else if(L=_.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const k=L.uuid,K=D.uuid;let B=c[k];B===void 0&&(B={},c[k]=B);let q=B[K];q===void 0&&(q=L.clone(),B[K]=q,D.addEventListener("dispose",E)),L=q}if(L.visible=D.visible,L.wireframe=D.wireframe,w===Gs?L.side=D.shadowSide!==null?D.shadowSide:D.side:L.side=D.shadowSide!==null?D.shadowSide:f[D.side],L.alphaMap=D.alphaMap,L.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,L.map=D.map,L.clipShadows=D.clipShadows,L.clippingPlanes=D.clippingPlanes,L.clipIntersection=D.clipIntersection,L.displacementMap=D.displacementMap,L.displacementScale=D.displacementScale,L.displacementBias=D.displacementBias,L.wireframeLinewidth=D.wireframeLinewidth,L.linewidth=D.linewidth,_.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const k=n.properties.get(L);k.light=_}return L}function S(A,D,_,w,L){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&L===Gs)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);const K=e.update(A),B=A.material;if(Array.isArray(B)){const q=K.groups;for(let te=0,z=q.length;te<z;te++){const ie=q[te],Q=B[ie.materialIndex];if(Q&&Q.visible){const H=P(A,Q,w,L);A.onBeforeShadow(n,A,D,_,K,H,ie),n.renderBufferDirect(_,null,K,H,A,ie),A.onAfterShadow(n,A,D,_,K,H,ie)}}}else if(B.visible){const q=P(A,B,w,L);A.onBeforeShadow(n,A,D,_,K,q,null),n.renderBufferDirect(_,null,K,q,A,null),A.onAfterShadow(n,A,D,_,K,q,null)}}const k=A.children;for(let K=0,B=k.length;K<B;K++)S(k[K],D,_,w,L)}function E(A){A.target.removeEventListener("dispose",E);for(const _ in c){const w=c[_],L=A.target.uuid;L in w&&(w[L].dispose(),delete w[L])}}}function KS(n,e){function t(){let F=!1;const xe=new At;let le=null;const Se=new At(0,0,0,0);return{setMask:function(Ce){le!==Ce&&!F&&(n.colorMask(Ce,Ce,Ce,Ce),le=Ce)},setLocked:function(Ce){F=Ce},setClear:function(Ce,ue,ze,Be,Mt){Mt===!0&&(Ce*=Be,ue*=Be,ze*=Be),xe.set(Ce,ue,ze,Be),Se.equals(xe)===!1&&(n.clearColor(Ce,ue,ze,Be),Se.copy(xe))},reset:function(){F=!1,le=null,Se.set(-1,0,0,0)}}}function i(){let F=!1,xe=!1,le=null,Se=null,Ce=null;return{setReversed:function(ue){if(xe!==ue){const ze=e.get("EXT_clip_control");ue?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),xe=ue;const Be=Ce;Ce=null,this.setClear(Be)}},getReversed:function(){return xe},setTest:function(ue){ue?ce(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(ue){le!==ue&&!F&&(n.depthMask(ue),le=ue)},setFunc:function(ue){if(xe&&(ue=Ag[ue]),Se!==ue){switch(ue){case Yo:n.depthFunc(n.NEVER);break;case qo:n.depthFunc(n.ALWAYS);break;case Ko:n.depthFunc(n.LESS);break;case lr:n.depthFunc(n.LEQUAL);break;case Zo:n.depthFunc(n.EQUAL);break;case Jo:n.depthFunc(n.GEQUAL);break;case $o:n.depthFunc(n.GREATER);break;case Qo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=ue}},setLocked:function(ue){F=ue},setClear:function(ue){Ce!==ue&&(Ce=ue,xe&&(ue=1-ue),n.clearDepth(ue))},reset:function(){F=!1,le=null,Se=null,Ce=null,xe=!1}}}function s(){let F=!1,xe=null,le=null,Se=null,Ce=null,ue=null,ze=null,Be=null,Mt=null;return{setTest:function(ct){F||(ct?ce(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(ct){xe!==ct&&!F&&(n.stencilMask(ct),xe=ct)},setFunc:function(ct,_n,Cn){(le!==ct||Se!==_n||Ce!==Cn)&&(n.stencilFunc(ct,_n,Cn),le=ct,Se=_n,Ce=Cn)},setOp:function(ct,_n,Cn){(ue!==ct||ze!==_n||Be!==Cn)&&(n.stencilOp(ct,_n,Cn),ue=ct,ze=_n,Be=Cn)},setLocked:function(ct){F=ct},setClear:function(ct){Mt!==ct&&(n.clearStencil(ct),Mt=ct)},reset:function(){F=!1,xe=null,le=null,Se=null,Ce=null,ue=null,ze=null,Be=null,Mt=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d={},m=new WeakMap,v=[],b=null,g=!1,h=null,y=null,P=null,S=null,E=null,A=null,D=null,_=new ot(0,0,0),w=0,L=!1,O=null,k=null,K=null,B=null,q=null;const te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ie=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(Q)[1]),z=ie>=1):Q.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),z=ie>=2);let H=null,j={};const Ee=n.getParameter(n.SCISSOR_BOX),we=n.getParameter(n.VIEWPORT),tt=new At().fromArray(Ee),je=new At().fromArray(we);function et(F,xe,le,Se){const Ce=new Uint8Array(4),ue=n.createTexture();n.bindTexture(F,ue),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<le;ze++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(xe+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return ue}const ne={};ne[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(n.DEPTH_TEST),a.setFunc(lr),$(!1),de(su),ce(n.CULL_FACE),se(li);function ce(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Le(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Ge(F,xe){return d[F]!==xe?(n.bindFramebuffer(F,xe),d[F]=xe,F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=xe),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=xe),!0):!1}function Ie(F,xe){let le=v,Se=!1;if(F){le=m.get(xe),le===void 0&&(le=[],m.set(xe,le));const Ce=F.textures;if(le.length!==Ce.length||le[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,ze=Ce.length;ue<ze;ue++)le[ue]=n.COLOR_ATTACHMENT0+ue;le.length=Ce.length,Se=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,Se=!0);Se&&n.drawBuffers(le)}function R(F){return b!==F?(n.useProgram(F),b=F,!0):!1}const I={[ps]:n.FUNC_ADD,[qm]:n.FUNC_SUBTRACT,[Km]:n.FUNC_REVERSE_SUBTRACT};I[Zm]=n.MIN,I[Jm]=n.MAX;const G={[$m]:n.ZERO,[Qm]:n.ONE,[jm]:n.SRC_COLOR,[Sf]:n.SRC_ALPHA,[rg]:n.SRC_ALPHA_SATURATE,[ig]:n.DST_COLOR,[tg]:n.DST_ALPHA,[eg]:n.ONE_MINUS_SRC_COLOR,[Mf]:n.ONE_MINUS_SRC_ALPHA,[sg]:n.ONE_MINUS_DST_COLOR,[ng]:n.ONE_MINUS_DST_ALPHA,[ag]:n.CONSTANT_COLOR,[og]:n.ONE_MINUS_CONSTANT_COLOR,[lg]:n.CONSTANT_ALPHA,[cg]:n.ONE_MINUS_CONSTANT_ALPHA};function se(F,xe,le,Se,Ce,ue,ze,Be,Mt,ct){if(F===li){g===!0&&(Le(n.BLEND),g=!1);return}if(g===!1&&(ce(n.BLEND),g=!0),F!==Ym){if(F!==h||ct!==L){if((y!==ps||E!==ps)&&(n.blendEquation(n.FUNC_ADD),y=ps,E=ps),ct)switch(F){case er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ru:n.blendFunc(n.ONE,n.ONE);break;case au:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ou:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:lt("WebGLState: Invalid blending: ",F);break}else switch(F){case er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ru:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case au:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ou:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",F);break}P=null,S=null,A=null,D=null,_.set(0,0,0),w=0,h=F,L=ct}return}Ce=Ce||xe,ue=ue||le,ze=ze||Se,(xe!==y||Ce!==E)&&(n.blendEquationSeparate(I[xe],I[Ce]),y=xe,E=Ce),(le!==P||Se!==S||ue!==A||ze!==D)&&(n.blendFuncSeparate(G[le],G[Se],G[ue],G[ze]),P=le,S=Se,A=ue,D=ze),(Be.equals(_)===!1||Mt!==w)&&(n.blendColor(Be.r,Be.g,Be.b,Mt),_.copy(Be),w=Mt),h=F,L=!1}function re(F,xe){F.side===ri?Le(n.CULL_FACE):ce(n.CULL_FACE);let le=F.side===tn;xe&&(le=!le),$(le),F.blending===er&&F.transparent===!1?se(li):se(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const Se=F.stencilWrite;o.setTest(Se),Se&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),he(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(F){O!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),O=F)}function de(F){F!==Gm?(ce(n.CULL_FACE),F!==k&&(F===su?n.cullFace(n.BACK):F===Wm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),k=F}function fe(F){F!==K&&(z&&n.lineWidth(F),K=F)}function he(F,xe,le){F?(ce(n.POLYGON_OFFSET_FILL),(B!==xe||q!==le)&&(B=xe,q=le,a.getReversed()&&(xe=-xe),n.polygonOffset(xe,le))):Le(n.POLYGON_OFFSET_FILL)}function ae(F){F?ce(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function Re(F){F===void 0&&(F=n.TEXTURE0+te-1),H!==F&&(n.activeTexture(F),H=F)}function C(F,xe,le){le===void 0&&(H===null?le=n.TEXTURE0+te-1:le=H);let Se=j[le];Se===void 0&&(Se={type:void 0,texture:void 0},j[le]=Se),(Se.type!==F||Se.texture!==xe)&&(H!==le&&(n.activeTexture(le),H=le),n.bindTexture(F,xe||ne[F]),Se.type=F,Se.texture=xe)}function Pe(){const F=j[H];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Me(){try{n.compressedTexImage2D(...arguments)}catch(F){lt("WebGLState:",F)}}function T(){try{n.compressedTexImage3D(...arguments)}catch(F){lt("WebGLState:",F)}}function p(){try{n.texSubImage2D(...arguments)}catch(F){lt("WebGLState:",F)}}function U(){try{n.texSubImage3D(...arguments)}catch(F){lt("WebGLState:",F)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(F){lt("WebGLState:",F)}}function Z(){try{n.compressedTexSubImage3D(...arguments)}catch(F){lt("WebGLState:",F)}}function pe(){try{n.texStorage2D(...arguments)}catch(F){lt("WebGLState:",F)}}function ge(){try{n.texStorage3D(...arguments)}catch(F){lt("WebGLState:",F)}}function ee(){try{n.texImage2D(...arguments)}catch(F){lt("WebGLState:",F)}}function oe(){try{n.texImage3D(...arguments)}catch(F){lt("WebGLState:",F)}}function me(F){return f[F]!==void 0?f[F]:n.getParameter(F)}function De(F,xe){f[F]!==xe&&(n.pixelStorei(F,xe),f[F]=xe)}function ve(F){tt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),tt.copy(F))}function _e(F){je.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),je.copy(F))}function Ve(F,xe){let le=c.get(xe);le===void 0&&(le=new WeakMap,c.set(xe,le));let Se=le.get(F);Se===void 0&&(Se=n.getUniformBlockIndex(xe,F.name),le.set(F,Se))}function ke(F,xe){const Se=c.get(xe).get(F);l.get(xe)!==Se&&(n.uniformBlockBinding(xe,Se,F.__bindingPointIndex),l.set(xe,Se))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},H=null,j={},d={},m=new WeakMap,v=[],b=null,g=!1,h=null,y=null,P=null,S=null,E=null,A=null,D=null,_=new ot(0,0,0),w=0,L=!1,O=null,k=null,K=null,B=null,q=null,tt.set(0,0,n.canvas.width,n.canvas.height),je.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ce,disable:Le,bindFramebuffer:Ge,drawBuffers:Ie,useProgram:R,setBlending:se,setMaterial:re,setFlipSided:$,setCullFace:de,setLineWidth:fe,setPolygonOffset:he,setScissorTest:ae,activeTexture:Re,bindTexture:C,unbindTexture:Pe,compressedTexImage2D:Me,compressedTexImage3D:T,texImage2D:ee,texImage3D:oe,pixelStorei:De,getParameter:me,updateUBOMapping:Ve,uniformBlockBinding:ke,texStorage2D:pe,texStorage3D:ge,texSubImage2D:p,texSubImage3D:U,compressedTexSubImage2D:V,compressedTexSubImage3D:Z,scissor:ve,viewport:_e,reset:Ze}}function ZS(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,u=new WeakMap,f=new Set;let d;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(T,p){return v?new OffscreenCanvas(T,p):va("canvas")}function g(T,p,U){let V=1;const Z=Me(T);if((Z.width>U||Z.height>U)&&(V=U/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const pe=Math.floor(V*Z.width),ge=Math.floor(V*Z.height);d===void 0&&(d=b(pe,ge));const ee=p?b(pe,ge):d;return ee.width=pe,ee.height=ge,ee.getContext("2d").drawImage(T,0,0,pe,ge),Xe("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+pe+"x"+ge+")."),ee}else return"data"in T&&Xe("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function h(T){return T.generateMipmaps}function y(T){n.generateMipmap(T)}function P(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(T,p,U,V,Z,pe=!1){if(T!==null){if(n[T]!==void 0)return n[T];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ge;V&&(ge=e.get("EXT_texture_norm16"),ge||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=p;if(p===n.RED&&(U===n.FLOAT&&(ee=n.R32F),U===n.HALF_FLOAT&&(ee=n.R16F),U===n.UNSIGNED_BYTE&&(ee=n.R8),U===n.UNSIGNED_SHORT&&ge&&(ee=ge.R16_EXT),U===n.SHORT&&ge&&(ee=ge.R16_SNORM_EXT)),p===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(ee=n.R8UI),U===n.UNSIGNED_SHORT&&(ee=n.R16UI),U===n.UNSIGNED_INT&&(ee=n.R32UI),U===n.BYTE&&(ee=n.R8I),U===n.SHORT&&(ee=n.R16I),U===n.INT&&(ee=n.R32I)),p===n.RG&&(U===n.FLOAT&&(ee=n.RG32F),U===n.HALF_FLOAT&&(ee=n.RG16F),U===n.UNSIGNED_BYTE&&(ee=n.RG8),U===n.UNSIGNED_SHORT&&ge&&(ee=ge.RG16_EXT),U===n.SHORT&&ge&&(ee=ge.RG16_SNORM_EXT)),p===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(ee=n.RG8UI),U===n.UNSIGNED_SHORT&&(ee=n.RG16UI),U===n.UNSIGNED_INT&&(ee=n.RG32UI),U===n.BYTE&&(ee=n.RG8I),U===n.SHORT&&(ee=n.RG16I),U===n.INT&&(ee=n.RG32I)),p===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),U===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),U===n.UNSIGNED_INT&&(ee=n.RGB32UI),U===n.BYTE&&(ee=n.RGB8I),U===n.SHORT&&(ee=n.RGB16I),U===n.INT&&(ee=n.RGB32I)),p===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),U===n.UNSIGNED_INT&&(ee=n.RGBA32UI),U===n.BYTE&&(ee=n.RGBA8I),U===n.SHORT&&(ee=n.RGBA16I),U===n.INT&&(ee=n.RGBA32I)),p===n.RGB&&(U===n.UNSIGNED_SHORT&&ge&&(ee=ge.RGB16_EXT),U===n.SHORT&&ge&&(ee=ge.RGB16_SNORM_EXT),U===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),p===n.RGBA){const oe=pe?ga:it.getTransfer(Z);U===n.FLOAT&&(ee=n.RGBA32F),U===n.HALF_FLOAT&&(ee=n.RGBA16F),U===n.UNSIGNED_BYTE&&(ee=oe===ht?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT&&ge&&(ee=ge.RGBA16_EXT),U===n.SHORT&&ge&&(ee=ge.RGBA16_SNORM_EXT),U===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function E(T,p){let U;return T?p===null||p===Xn||p===ur?U=n.DEPTH24_STENCIL8:p===Vn?U=n.DEPTH32F_STENCIL8:p===cr&&(U=n.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===Xn||p===ur?U=n.DEPTH_COMPONENT24:p===Vn?U=n.DEPTH_COMPONENT32F:p===cr&&(U=n.DEPTH_COMPONENT16),U}function A(T,p){return h(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ot&&T.minFilter!==Gt?Math.log2(Math.max(p.width,p.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?p.mipmaps.length:1}function D(T){const p=T.target;p.removeEventListener("dispose",D),w(p),p.isVideoTexture&&u.delete(p),p.isHTMLTexture&&f.delete(p)}function _(T){const p=T.target;p.removeEventListener("dispose",_),O(p)}function w(T){const p=i.get(T);if(p.__webglInit===void 0)return;const U=T.source,V=m.get(U);if(V){const Z=V[p.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&L(T),Object.keys(V).length===0&&m.delete(U)}i.remove(T)}function L(T){const p=i.get(T);n.deleteTexture(p.__webglTexture);const U=T.source,V=m.get(U);delete V[p.__cacheKey],a.memory.textures--}function O(T){const p=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(p.__webglFramebuffer[V]))for(let Z=0;Z<p.__webglFramebuffer[V].length;Z++)n.deleteFramebuffer(p.__webglFramebuffer[V][Z]);else n.deleteFramebuffer(p.__webglFramebuffer[V]);p.__webglDepthbuffer&&n.deleteRenderbuffer(p.__webglDepthbuffer[V])}else{if(Array.isArray(p.__webglFramebuffer))for(let V=0;V<p.__webglFramebuffer.length;V++)n.deleteFramebuffer(p.__webglFramebuffer[V]);else n.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&n.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&n.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let V=0;V<p.__webglColorRenderbuffer.length;V++)p.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(p.__webglColorRenderbuffer[V]);p.__webglDepthRenderbuffer&&n.deleteRenderbuffer(p.__webglDepthRenderbuffer)}const U=T.textures;for(let V=0,Z=U.length;V<Z;V++){const pe=i.get(U[V]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),a.memory.textures--),i.remove(U[V])}i.remove(T)}let k=0;function K(){k=0}function B(){return k}function q(T){k=T}function te(){const T=k;return T>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,T}function z(T){const p=[];return p.push(T.wrapS),p.push(T.wrapT),p.push(T.wrapR||0),p.push(T.magFilter),p.push(T.minFilter),p.push(T.anisotropy),p.push(T.internalFormat),p.push(T.format),p.push(T.type),p.push(T.generateMipmaps),p.push(T.premultiplyAlpha),p.push(T.flipY),p.push(T.unpackAlignment),p.push(T.colorSpace),p.join()}function ie(T,p){const U=i.get(T);if(T.isVideoTexture&&C(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&U.__version!==T.version){const V=T.image;if(V===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(U,T,p);return}}else T.isExternalTexture&&(U.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+p)}function Q(T,p){const U=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){Le(U,T,p);return}else T.isExternalTexture&&(U.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+p)}function H(T,p){const U=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){Le(U,T,p);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+p)}function j(T,p){const U=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&U.__version!==T.version){Ge(U,T,p);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+p)}const Ee={[jo]:n.REPEAT,[ai]:n.CLAMP_TO_EDGE,[el]:n.MIRRORED_REPEAT},we={[Ot]:n.NEAREST,[fg]:n.NEAREST_MIPMAP_NEAREST,[Ar]:n.NEAREST_MIPMAP_LINEAR,[Gt]:n.LINEAR,[no]:n.LINEAR_MIPMAP_NEAREST,[Hi]:n.LINEAR_MIPMAP_LINEAR},tt={[gg]:n.NEVER,[Mg]:n.ALWAYS,[_g]:n.LESS,[oc]:n.LEQUAL,[vg]:n.EQUAL,[lc]:n.GEQUAL,[xg]:n.GREATER,[Sg]:n.NOTEQUAL};function je(T,p){if(p.type===Vn&&e.has("OES_texture_float_linear")===!1&&(p.magFilter===Gt||p.magFilter===no||p.magFilter===Ar||p.magFilter===Hi||p.minFilter===Gt||p.minFilter===no||p.minFilter===Ar||p.minFilter===Hi)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Ee[p.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Ee[p.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Ee[p.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,we[p.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,we[p.minFilter]),p.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,tt[p.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===Ot||p.minFilter!==Ar&&p.minFilter!==Hi||p.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||i.get(p).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,s.getMaxAnisotropy())),i.get(p).__currentAnisotropy=p.anisotropy}}}function et(T,p){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,p.addEventListener("dispose",D));const V=p.source;let Z=m.get(V);Z===void 0&&(Z={},m.set(V,Z));const pe=z(p);if(pe!==T.__cacheKey){Z[pe]===void 0&&(Z[pe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Z[pe].usedTimes++;const ge=Z[T.__cacheKey];ge!==void 0&&(Z[T.__cacheKey].usedTimes--,ge.usedTimes===0&&L(p)),T.__cacheKey=pe,T.__webglTexture=Z[pe].texture}return U}function ne(T,p,U){return Math.floor(Math.floor(T/U)/p)}function ce(T,p,U,V){const pe=T.updateRanges;if(pe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,p.width,p.height,U,V,p.data);else{pe.sort((De,ve)=>De.start-ve.start);let ge=0;for(let De=1;De<pe.length;De++){const ve=pe[ge],_e=pe[De],Ve=ve.start+ve.count,ke=ne(_e.start,p.width,4),Ze=ne(ve.start,p.width,4);_e.start<=Ve+1&&ke===Ze&&ne(_e.start+_e.count-1,p.width,4)===ke?ve.count=Math.max(ve.count,_e.start+_e.count-ve.start):(++ge,pe[ge]=_e)}pe.length=ge+1;const ee=t.getParameter(n.UNPACK_ROW_LENGTH),oe=t.getParameter(n.UNPACK_SKIP_PIXELS),me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,p.width);for(let De=0,ve=pe.length;De<ve;De++){const _e=pe[De],Ve=Math.floor(_e.start/4),ke=Math.ceil(_e.count/4),Ze=Ve%p.width,F=Math.floor(Ve/p.width),xe=ke,le=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Ze,F,xe,le,U,V,p.data)}T.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ee),t.pixelStorei(n.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(n.UNPACK_SKIP_ROWS,me)}}function Le(T,p,U){let V=n.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),p.isData3DTexture&&(V=n.TEXTURE_3D);const Z=et(T,p),pe=p.source;t.bindTexture(V,T.__webglTexture,n.TEXTURE0+U);const ge=i.get(pe);if(pe.version!==ge.__version||Z===!0){if(t.activeTexture(n.TEXTURE0+U),(typeof ImageBitmap<"u"&&p.image instanceof ImageBitmap)===!1){const le=it.getPrimaries(it.workingColorSpace),Se=p.colorSpace===Ai?null:it.getPrimaries(p.colorSpace),Ce=p.colorSpace===Ai||le===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}t.pixelStorei(n.UNPACK_ALIGNMENT,p.unpackAlignment);let oe=g(p.image,!1,s.maxTextureSize);oe=Pe(p,oe);const me=r.convert(p.format,p.colorSpace),De=r.convert(p.type);let ve=S(p.internalFormat,me,De,p.normalized,p.colorSpace,p.isVideoTexture);je(V,p);let _e;const Ve=p.mipmaps,ke=p.isVideoTexture!==!0,Ze=ge.__version===void 0||Z===!0,F=pe.dataReady,xe=A(p,oe);if(p.isDepthTexture)ve=E(p.format===Vi,p.type),Ze&&(ke?t.texStorage2D(n.TEXTURE_2D,1,ve,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,ve,oe.width,oe.height,0,me,De,null));else if(p.isDataTexture)if(Ve.length>0){ke&&Ze&&t.texStorage2D(n.TEXTURE_2D,xe,ve,Ve[0].width,Ve[0].height);for(let le=0,Se=Ve.length;le<Se;le++)_e=Ve[le],ke?F&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,_e.width,_e.height,me,De,_e.data):t.texImage2D(n.TEXTURE_2D,le,ve,_e.width,_e.height,0,me,De,_e.data);p.generateMipmaps=!1}else ke?(Ze&&t.texStorage2D(n.TEXTURE_2D,xe,ve,oe.width,oe.height),F&&ce(p,oe,me,De)):t.texImage2D(n.TEXTURE_2D,0,ve,oe.width,oe.height,0,me,De,oe.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){ke&&Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,ve,Ve[0].width,Ve[0].height,oe.depth);for(let le=0,Se=Ve.length;le<Se;le++)if(_e=Ve[le],p.format!==bn)if(me!==null)if(ke){if(F)if(p.layerUpdates.size>0){const Ce=Lu(_e.width,_e.height,p.format,p.type);for(const ue of p.layerUpdates){const ze=_e.data.subarray(ue*Ce/_e.data.BYTES_PER_ELEMENT,(ue+1)*Ce/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,ue,_e.width,_e.height,1,me,ze)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,_e.width,_e.height,oe.depth,me,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,ve,_e.width,_e.height,oe.depth,0,_e.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,_e.width,_e.height,oe.depth,me,De,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,ve,_e.width,_e.height,oe.depth,0,me,De,_e.data);p.layerUpdates.size>0&&p.clearLayerUpdates()}else{ke&&Ze&&t.texStorage2D(n.TEXTURE_2D,xe,ve,Ve[0].width,Ve[0].height);for(let le=0,Se=Ve.length;le<Se;le++)_e=Ve[le],p.format!==bn?me!==null?ke?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,_e.width,_e.height,me,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,le,ve,_e.width,_e.height,0,_e.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?F&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,_e.width,_e.height,me,De,_e.data):t.texImage2D(n.TEXTURE_2D,le,ve,_e.width,_e.height,0,me,De,_e.data)}else if(p.isDataArrayTexture)if(ke){if(Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,ve,oe.width,oe.height,oe.depth),F)if(p.layerUpdates.size>0){const le=Lu(oe.width,oe.height,p.format,p.type);for(const Se of p.layerUpdates){const Ce=oe.data.subarray(Se*le/oe.data.BYTES_PER_ELEMENT,(Se+1)*le/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Se,oe.width,oe.height,1,me,De,Ce)}p.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,me,De,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,oe.width,oe.height,oe.depth,0,me,De,oe.data);else if(p.isData3DTexture)ke?(Ze&&t.texStorage3D(n.TEXTURE_3D,xe,ve,oe.width,oe.height,oe.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,me,De,oe.data)):t.texImage3D(n.TEXTURE_3D,0,ve,oe.width,oe.height,oe.depth,0,me,De,oe.data);else if(p.isFramebufferTexture){if(Ze)if(ke)t.texStorage2D(n.TEXTURE_2D,xe,ve,oe.width,oe.height);else{let le=oe.width,Se=oe.height;for(let Ce=0;Ce<xe;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,ve,le,Se,0,me,De,null),le>>=1,Se>>=1}}else if(p.isHTMLTexture){if("texElementImage2D"in n){const le=n.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),oe.parentNode!==le){le.appendChild(oe),f.add(p),le.onpaint=Se=>{const Ce=Se.changedElements;for(const ue of f)Ce.includes(ue.image)&&(ue.needsUpdate=!0)},le.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,oe);else{const Ce=n.RGBA,ue=n.RGBA,ze=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ce,ue,ze,oe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ve.length>0){if(ke&&Ze){const le=Me(Ve[0]);t.texStorage2D(n.TEXTURE_2D,xe,ve,le.width,le.height)}for(let le=0,Se=Ve.length;le<Se;le++)_e=Ve[le],ke?F&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,me,De,_e):t.texImage2D(n.TEXTURE_2D,le,ve,me,De,_e);p.generateMipmaps=!1}else if(ke){if(Ze){const le=Me(oe);t.texStorage2D(n.TEXTURE_2D,xe,ve,le.width,le.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,De,oe)}else t.texImage2D(n.TEXTURE_2D,0,ve,me,De,oe);h(p)&&y(V),ge.__version=pe.version,p.onUpdate&&p.onUpdate(p)}T.__version=p.version}function Ge(T,p,U){if(p.image.length!==6)return;const V=et(T,p),Z=p.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+U);const pe=i.get(Z);if(Z.version!==pe.__version||V===!0){t.activeTexture(n.TEXTURE0+U);const ge=it.getPrimaries(it.workingColorSpace),ee=p.colorSpace===Ai?null:it.getPrimaries(p.colorSpace),oe=p.colorSpace===Ai||ge===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,p.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const me=p.isCompressedTexture||p.image[0].isCompressedTexture,De=p.image[0]&&p.image[0].isDataTexture,ve=[];for(let ue=0;ue<6;ue++)!me&&!De?ve[ue]=g(p.image[ue],!0,s.maxCubemapSize):ve[ue]=De?p.image[ue].image:p.image[ue],ve[ue]=Pe(p,ve[ue]);const _e=ve[0],Ve=r.convert(p.format,p.colorSpace),ke=r.convert(p.type),Ze=S(p.internalFormat,Ve,ke,p.normalized,p.colorSpace),F=p.isVideoTexture!==!0,xe=pe.__version===void 0||V===!0,le=Z.dataReady;let Se=A(p,_e);je(n.TEXTURE_CUBE_MAP,p);let Ce;if(me){F&&xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Ze,_e.width,_e.height);for(let ue=0;ue<6;ue++){Ce=ve[ue].mipmaps;for(let ze=0;ze<Ce.length;ze++){const Be=Ce[ze];p.format!==bn?Ve!==null?F?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze,0,0,Be.width,Be.height,Ve,Be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze,Ze,Be.width,Be.height,0,Be.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze,0,0,Be.width,Be.height,Ve,ke,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze,Ze,Be.width,Be.height,0,Ve,ke,Be.data)}}}else{if(Ce=p.mipmaps,F&&xe){Ce.length>0&&Se++;const ue=Me(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Ze,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(De){F?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ve[ue].width,ve[ue].height,Ve,ke,ve[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ze,ve[ue].width,ve[ue].height,0,Ve,ke,ve[ue].data);for(let ze=0;ze<Ce.length;ze++){const Mt=Ce[ze].image[ue].image;F?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze+1,0,0,Mt.width,Mt.height,Ve,ke,Mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze+1,Ze,Mt.width,Mt.height,0,Ve,ke,Mt.data)}}else{F?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ve,ke,ve[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ze,Ve,ke,ve[ue]);for(let ze=0;ze<Ce.length;ze++){const Be=Ce[ze];F?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze+1,0,0,Ve,ke,Be.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze+1,Ze,Ve,ke,Be.image[ue])}}}h(p)&&y(n.TEXTURE_CUBE_MAP),pe.__version=Z.version,p.onUpdate&&p.onUpdate(p)}T.__version=p.version}function Ie(T,p,U,V,Z,pe){const ge=r.convert(U.format,U.colorSpace),ee=r.convert(U.type),oe=S(U.internalFormat,ge,ee,U.normalized,U.colorSpace),me=i.get(p),De=i.get(U);if(De.__renderTarget=p,!me.__hasExternalTextures){const ve=Math.max(1,p.width>>pe),_e=Math.max(1,p.height>>pe);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,pe,oe,ve,_e,p.depth,0,ge,ee,null):t.texImage2D(Z,pe,oe,ve,_e,0,ge,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Re(p)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,Z,De.__webglTexture,0,ae(p)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,Z,De.__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function R(T,p,U){if(n.bindRenderbuffer(n.RENDERBUFFER,T),p.depthBuffer){const V=p.depthTexture,Z=V&&V.isDepthTexture?V.type:null,pe=E(p.stencilBuffer,Z),ge=p.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Re(p)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae(p),pe,p.width,p.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae(p),pe,p.width,p.height):n.renderbufferStorage(n.RENDERBUFFER,pe,p.width,p.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,T)}else{const V=p.textures;for(let Z=0;Z<V.length;Z++){const pe=V[Z],ge=r.convert(pe.format,pe.colorSpace),ee=r.convert(pe.type),oe=S(pe.internalFormat,ge,ee,pe.normalized,pe.colorSpace);Re(p)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae(p),oe,p.width,p.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae(p),oe,p.width,p.height):n.renderbufferStorage(n.RENDERBUFFER,oe,p.width,p.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function I(T,p,U){const V=p.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=i.get(p.depthTexture);if(Z.__renderTarget=p,(!Z.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),V){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,p.depthTexture.addEventListener("dispose",D)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),je(n.TEXTURE_CUBE_MAP,p.depthTexture);const me=r.convert(p.depthTexture.format),De=r.convert(p.depthTexture.type);let ve;p.depthTexture.format===pi?ve=n.DEPTH_COMPONENT24:p.depthTexture.format===Vi&&(ve=n.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ve,p.width,p.height,0,me,De,null)}}else ie(p.depthTexture,0);const pe=Z.__webglTexture,ge=ae(p),ee=V?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,oe=p.depthTexture.format===Vi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(p.depthTexture.format===pi)Re(p)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ee,pe,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,oe,ee,pe,0);else if(p.depthTexture.format===Vi)Re(p)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ee,pe,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,oe,ee,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function G(T){const p=i.get(T),U=T.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==T.depthTexture){const V=T.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),V){const Z=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),p.__depthDisposeCallback=Z}p.__boundDepthTexture=V}if(T.depthTexture&&!p.__autoAllocateDepthBuffer)if(U)for(let V=0;V<6;V++)I(p.__webglFramebuffer[V],T,V);else{const V=T.texture.mipmaps;V&&V.length>0?I(p.__webglFramebuffer[0],T,0):I(p.__webglFramebuffer,T,0)}else if(U){p.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer[V]),p.__webglDepthbuffer[V]===void 0)p.__webglDepthbuffer[V]=n.createRenderbuffer(),R(p.__webglDepthbuffer[V],T,!1);else{const Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=p.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,pe)}}else{const V=T.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=n.createRenderbuffer(),R(p.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=p.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,pe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(T,p,U){const V=i.get(T);p!==void 0&&Ie(V.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&G(T)}function re(T){const p=T.texture,U=i.get(T),V=i.get(p);T.addEventListener("dispose",_);const Z=T.textures,pe=T.isWebGLCubeRenderTarget===!0,ge=Z.length>1;if(ge||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=p.version,a.memory.textures++),pe){U.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(p.mipmaps&&p.mipmaps.length>0){U.__webglFramebuffer[ee]=[];for(let oe=0;oe<p.mipmaps.length;oe++)U.__webglFramebuffer[ee][oe]=n.createFramebuffer()}else U.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){U.__webglFramebuffer=[];for(let ee=0;ee<p.mipmaps.length;ee++)U.__webglFramebuffer[ee]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(ge)for(let ee=0,oe=Z.length;ee<oe;ee++){const me=i.get(Z[ee]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&Re(T)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ee=0;ee<Z.length;ee++){const oe=Z[ee];U.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ee]);const me=r.convert(oe.format,oe.colorSpace),De=r.convert(oe.type),ve=S(oe.internalFormat,me,De,oe.normalized,oe.colorSpace,T.isXRRenderTarget===!0),_e=ae(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,ve,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,U.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),R(U.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),je(n.TEXTURE_CUBE_MAP,p);for(let ee=0;ee<6;ee++)if(p.mipmaps&&p.mipmaps.length>0)for(let oe=0;oe<p.mipmaps.length;oe++)Ie(U.__webglFramebuffer[ee][oe],T,p,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,oe);else Ie(U.__webglFramebuffer[ee],T,p,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);h(p)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ee=0,oe=Z.length;ee<oe;ee++){const me=Z[ee],De=i.get(me);let ve=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ve=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,De.__webglTexture),je(ve,me),Ie(U.__webglFramebuffer,T,me,n.COLOR_ATTACHMENT0+ee,ve,0),h(me)&&y(ve)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ee=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,V.__webglTexture),je(ee,p),p.mipmaps&&p.mipmaps.length>0)for(let oe=0;oe<p.mipmaps.length;oe++)Ie(U.__webglFramebuffer[oe],T,p,n.COLOR_ATTACHMENT0,ee,oe);else Ie(U.__webglFramebuffer,T,p,n.COLOR_ATTACHMENT0,ee,0);h(p)&&y(ee),t.unbindTexture()}T.depthBuffer&&G(T)}function $(T){const p=T.textures;for(let U=0,V=p.length;U<V;U++){const Z=p[U];if(h(Z)){const pe=P(T),ge=i.get(Z).__webglTexture;t.bindTexture(pe,ge),y(pe),t.unbindTexture()}}}const de=[],fe=[];function he(T){if(T.samples>0){if(Re(T)===!1){const p=T.textures,U=T.width,V=T.height;let Z=n.COLOR_BUFFER_BIT;const pe=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(T),ee=p.length>1;if(ee)for(let me=0;me<p.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const oe=T.texture.mipmaps;oe&&oe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let me=0;me<p.length;me++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[me]);const De=i.get(p[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,De,0)}n.blitFramebuffer(0,0,U,V,0,0,U,V,Z,n.NEAREST),l===!0&&(de.length=0,fe.length=0,de.push(n.COLOR_ATTACHMENT0+me),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(de.push(pe),fe.push(pe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,fe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let me=0;me<p.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,ge.__webglColorRenderbuffer[me]);const De=i.get(p[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,De,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){const p=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[p])}}}function ae(T){return Math.min(s.maxSamples,T.samples)}function Re(T){const p=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function C(T){const p=a.render.frame;u.get(T)!==p&&(u.set(T,p),T.update())}function Pe(T,p){const U=T.colorSpace,V=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==ma&&U!==Ai&&(it.getTransfer(U)===ht?(V!==bn||Z!==pn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",U)),p}function Me(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=te,this.resetTextureUnits=K,this.getTextureUnits=B,this.setTextureUnits=q,this.setTexture2D=ie,this.setTexture2DArray=Q,this.setTexture3D=H,this.setTextureCube=j,this.rebindTextures=se,this.setupRenderTarget=re,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=G,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Re,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function JS(n,e){function t(i,s=Ai){let r;const a=it.getTransfer(s);if(i===pn)return n.UNSIGNED_BYTE;if(i===nc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ic)return n.UNSIGNED_SHORT_5_5_5_1;if(i===If)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Uf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Df)return n.BYTE;if(i===Lf)return n.SHORT;if(i===cr)return n.UNSIGNED_SHORT;if(i===tc)return n.INT;if(i===Xn)return n.UNSIGNED_INT;if(i===Vn)return n.FLOAT;if(i===Yn)return n.HALF_FLOAT;if(i===Nf)return n.ALPHA;if(i===Ff)return n.RGB;if(i===bn)return n.RGBA;if(i===pi)return n.DEPTH_COMPONENT;if(i===Vi)return n.DEPTH_STENCIL;if(i===Of)return n.RED;if(i===sc)return n.RED_INTEGER;if(i===Yi)return n.RG;if(i===rc)return n.RG_INTEGER;if(i===ac)return n.RGBA_INTEGER;if(i===ea||i===ta||i===na||i===ia)if(a===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tl||i===nl||i===il||i===sl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rl||i===al||i===ol||i===ll||i===cl||i===ha||i===ul)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===rl||i===al)return a===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ol)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ll)return r.COMPRESSED_R11_EAC;if(i===cl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ha)return r.COMPRESSED_RG11_EAC;if(i===ul)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===dl||i===fl||i===hl||i===pl||i===ml||i===gl||i===_l||i===vl||i===xl||i===Sl||i===Ml||i===bl||i===yl||i===El)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===dl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ml)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_l)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ml)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===El)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tl||i===Al||i===wl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Tl)return a===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rl||i===Cl||i===pa||i===Pl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Rl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ur?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const $S=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QS=`
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

}`;class jS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Kf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new qn({vertexShader:$S,fragmentShader:QS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gn(new Fa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eM extends Zi{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,v=null;const b=typeof XRWebGLBinding<"u",g=new jS,h={},y=t.getContextAttributes();let P=null,S=null;const E=[],A=[],D=new rt;let _=null,w=null;const L=new hn;L.viewport=new At;const O=new hn;O.viewport=new At;const k=[L,O],K=new o0;let B=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ce=E[ne];return ce===void 0&&(ce=new fo,E[ne]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ne){let ce=E[ne];return ce===void 0&&(ce=new fo,E[ne]=ce),ce.getGripSpace()},this.getHand=function(ne){let ce=E[ne];return ce===void 0&&(ce=new fo,E[ne]=ce),ce.getHandSpace()};function te(ne){const ce=A.indexOf(ne.inputSource);if(ce===-1)return;const Le=E[ce];Le!==void 0&&(Le.update(ne.inputSource,ne.frame,c||a),Le.dispatchEvent({type:ne.type,data:ne.inputSource}))}function z(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",ie);for(let ne=0;ne<E.length;ne++){const ce=A[ne];ce!==null&&(A[ne]=null,E[ne].disconnect(ce))}B=null,q=null,g.reset();for(const ne in h)delete h[ne];if(e.setRenderTarget(P),m=null,d=null,f=null,s=null,S=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(D.width,D.height,!1),w!==null){const ne=w.camera;ne.fov=w.fov,ne.zoom=w.zoom,ne.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,i.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(P=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",z),s.addEventListener("inputsourceschange",ie),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(D),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Le=null,Ge=null,Ie=null;y.depth&&(Ie=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Le=y.stencil?Vi:pi,Ge=y.stencil?ur:Xn);const R={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(R),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new An(d.textureWidth,d.textureHeight,{format:bn,type:pn,depthTexture:new dr(d.textureWidth,d.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Le),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Le={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Le),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new An(m.framebufferWidth,m.framebufferHeight,{format:bn,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),et.setContext(s),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ie(ne){for(let ce=0;ce<ne.removed.length;ce++){const Le=ne.removed[ce],Ge=A.indexOf(Le);Ge>=0&&(A[Ge]=null,E[Ge].disconnect(Le))}for(let ce=0;ce<ne.added.length;ce++){const Le=ne.added[ce];let Ge=A.indexOf(Le);if(Ge===-1){for(let R=0;R<E.length;R++)if(R>=A.length){A.push(Le),Ge=R;break}else if(A[R]===null){A[R]=Le,Ge=R;break}if(Ge===-1)break}const Ie=E[Ge];Ie&&Ie.connect(Le)}}const Q=new W,H=new W;function j(ne,ce,Le){Q.setFromMatrixPosition(ce.matrixWorld),H.setFromMatrixPosition(Le.matrixWorld);const Ge=Q.distanceTo(H),Ie=ce.projectionMatrix.elements,R=Le.projectionMatrix.elements,I=Ie[14]/(Ie[10]-1),G=Ie[14]/(Ie[10]+1),se=(Ie[9]+1)/Ie[5],re=(Ie[9]-1)/Ie[5],$=(Ie[8]-1)/Ie[0],de=(R[8]+1)/R[0],fe=I*$,he=I*de,ae=Ge/(-$+de),Re=ae*-$;if(ce.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Re),ne.translateZ(ae),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ie[10]===-1)ne.projectionMatrix.copy(ce.projectionMatrix),ne.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const C=I+ae,Pe=G+ae,Me=fe-Re,T=he+(Ge-Re),p=se*G/Pe*C,U=re*G/Pe*C;ne.projectionMatrix.makePerspective(Me,T,p,U,C,Pe),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function Ee(ne,ce){ce===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ce.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let ce=ne.near,Le=ne.far;g.texture!==null&&(g.depthNear>0&&(ce=g.depthNear),g.depthFar>0&&(Le=g.depthFar)),K.near=O.near=L.near=ce,K.far=O.far=L.far=Le,(B!==K.near||q!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),B=K.near,q=K.far),K.layers.mask=ne.layers.mask|6,L.layers.mask=K.layers.mask&-5,O.layers.mask=K.layers.mask&-3;const Ge=ne.parent,Ie=K.cameras;Ee(K,Ge);for(let R=0;R<Ie.length;R++)Ee(Ie[R],Ge);Ie.length===2?j(K,L,O):K.projectionMatrix.copy(L.projectionMatrix),w===null&&ne.isPerspectiveCamera&&(w={camera:ne,fov:ne.fov,zoom:ne.zoom}),we(ne,K,Ge)};function we(ne,ce,Le){Le===null?ne.matrix.copy(ce.matrixWorld):(ne.matrix.copy(Le.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ce.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ce.projectionMatrix),ne.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Dl*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ne)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(K)},this.getCameraTexture=function(ne){return h[ne]};let tt=null;function je(ne,ce){if(u=ce.getViewerPose(c||a),v=ce,u!==null){const Le=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Ge=!1;Le.length!==K.cameras.length&&(K.cameras.length=0,Ge=!0);for(let G=0;G<Le.length;G++){const se=Le[G];let re=null;if(m!==null)re=m.getViewport(se);else{const de=f.getViewSubImage(d,se);re=de.viewport,G===0&&(e.setRenderTargetTextures(S,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(S))}let $=k[G];$===void 0&&($=new hn,$.layers.enable(G),$.viewport=new At,k[G]=$),$.matrix.fromArray(se.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(se.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(re.x,re.y,re.width,re.height),G===0&&(K.matrix.copy($.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ge===!0&&K.cameras.push($)}const Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){f=i.getBinding();const G=f.getDepthInformation(Le[0]);G&&G.isValid&&G.texture&&g.init(G,s.renderState)}if(Ie&&Ie.includes("camera-access")&&b){e.state.unbindTexture(),f=i.getBinding();for(let G=0;G<Le.length;G++){const se=Le[G].camera;if(se){let re=h[se];re||(re=new Kf,h[se]=re);const $=f.getCameraImage(se);re.sourceTexture=$}}}}for(let Le=0;Le<E.length;Le++){const Ge=A[Le],Ie=E[Le];Ge!==null&&Ie!==void 0&&Ie.update(Ge,ce,c||a)}tt&&tt(ne,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),v=null}const et=new Qf;et.setAnimationLoop(je),this.setAnimationLoop=function(ne){tt=ne},this.dispose=function(){}}}const tM=new Pt,rh=new Ke;rh.set(-1,0,0,0,1,0,0,0,1);function nM(n,e){function t(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,Zf(n)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function s(g,h,y,P,S){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(g,h):h.isMeshLambertMaterial?(r(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(g,h),f(g,h)):h.isMeshPhongMaterial?(r(g,h),u(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(g,h),d(g,h),h.isMeshPhysicalMaterial&&m(g,h,S)):h.isMeshMatcapMaterial?(r(g,h),v(g,h)):h.isMeshDepthMaterial?r(g,h):h.isMeshDistanceMaterial?(r(g,h),b(g,h)):h.isMeshNormalMaterial?r(g,h):h.isLineBasicMaterial?(a(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,y,P):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,t(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===tn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,t(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===tn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,t(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,t(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const y=e.get(h),P=y.envMap,S=y.envMapRotation;P&&(g.envMap.value=P,g.envMapRotation.value.setFromMatrix4(tM.makeRotationFromEuler(S)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(rh),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,g.aoMapTransform))}function a(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,y,P){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*y,g.scale.value=P*.5,h.map&&(g.map.value=h.map,t(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function f(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function d(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function m(g,h,y){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===tn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.retroreflectivity>0&&(g.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,h){h.matcap&&(g.matcap.value=h.matcap)}function b(g,h){const y=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function iM(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const A=E.program;i.uniformBlockBinding(S,A)}function c(S,E){let A=s[S.id];A===void 0&&(g(S),A=u(S),s[S.id]=A,S.addEventListener("dispose",y));const D=E.program;i.updateUBOMapping(S,D);const _=e.render.frame;r[S.id]!==_&&(d(S),r[S.id]=_)}function u(S){const E=f();S.__bindingPointIndex=E;const A=n.createBuffer(),D=S.__size,_=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,D,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,A),A}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const E=s[S.id],A=S.uniforms,D=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let _=0,w=A.length;_<w;_++){const L=A[_];if(Array.isArray(L))for(let O=0,k=L.length;O<k;O++)m(L[O],_,O,D);else m(L,_,0,D)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(S,E,A,D){if(b(S,E,A,D)===!0){const _=S.__offset,w=S.value;if(Array.isArray(w)){let L=0;for(let O=0;O<w.length;O++){const k=w[O],K=h(k);v(k,S.__data,L),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(w,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,S.__data)}}function v(S,E,A){typeof S=="number"||typeof S=="boolean"?E[0]=S:S.isMatrix3?(E[0]=S.elements[0],E[1]=S.elements[1],E[2]=S.elements[2],E[3]=0,E[4]=S.elements[3],E[5]=S.elements[4],E[6]=S.elements[5],E[7]=0,E[8]=S.elements[6],E[9]=S.elements[7],E[10]=S.elements[8],E[11]=0):ArrayBuffer.isView(S)?E.set(new S.constructor(S.buffer,S.byteOffset,E.length)):S.toArray(E,A)}function b(S,E,A,D){const _=S.value,w=E+"_"+A;if(D[w]===void 0)return typeof _=="number"||typeof _=="boolean"?D[w]=_:ArrayBuffer.isView(_)?D[w]=_.slice():D[w]=_.clone(),!0;{const L=D[w];if(typeof _=="number"||typeof _=="boolean"){if(L!==_)return D[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(L.equals(_)===!1)return L.copy(_),!0}}return!1}function g(S){const E=S.uniforms;let A=0;const D=16;for(let w=0,L=E.length;w<L;w++){const O=Array.isArray(E[w])?E[w]:[E[w]];for(let k=0,K=O.length;k<K;k++){const B=O[k],q=Array.isArray(B.value)?B.value:[B.value];for(let te=0,z=q.length;te<z;te++){const ie=q[te],Q=h(ie),H=A%D,j=H%Q.boundary,Ee=H+j;A+=j,Ee!==0&&D-Ee<Q.storage&&(A+=D-Ee),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=A,A+=Q.storage}}}const _=A%D;return _>0&&(A+=D-_),S.__size=A,S.__cache={},this}function h(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",S),E}function y(S){const E=S.target;E.removeEventListener("dispose",y);const A=a.indexOf(E.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function P(){for(const S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:P}}const sM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let In=null;function rM(){return In===null&&(In=new Zg(sM,16,16,Yi,Yn),In.name="DFG_LUT",In.minFilter=Gt,In.magFilter=Gt,In.wrapS=ai,In.wrapT=ai,In.generateMipmaps=!1,In.needsUpdate=!0),In}class aM{constructor(e={}){const{canvas:t=Eg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:m=pn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const b=m,g=new Set([ac,rc,sc]),h=new Set([pn,Xn,cr,ur,nc,ic]),y=new Uint32Array(4),P=new Int32Array(4),S=new W;let E=null,A=null;const D=[],_=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let O=!1,k=null,K=null,B=null,q=null;this._outputColorSpace=fn;let te=0,z=0,ie=null,Q=-1,H=null;const j=new At,Ee=new At;let we=null;const tt=new ot(0);let je=0,et=t.width,ne=t.height,ce=1,Le=null,Ge=null;const Ie=new At(0,0,et,ne),R=new At(0,0,et,ne);let I=!1;const G=new Xf;let se=!1,re=!1;const $=new Pt,de=new W,fe=new At,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function Re(){return ie===null?ce:1}let C=i;function Pe(M,N){return t.getContext(M,N)}let Me,T,p,U,V,Z,pe,ge,ee,oe,me,De,ve,_e,Ve,ke,Ze,F,xe,le,Se,Ce,ue;try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ec}`),t.addEventListener("webglcontextlost",Mt,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",_n,!1),C===null){const N="webgl2";if(C=Pe(N,M),C===null)throw Pe(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(M){throw t.removeEventListener("webglcontextlost",Mt,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",_n,!1),lt("WebGLRenderer: "+M.message),M}function ze(){Me=new rx(C),Me.init(),Se=new JS(C,Me),T=new Zv(C,Me,e,Se),p=new KS(C,Me),T.reversedDepthBuffer&&d&&p.buffers.depth.setReversed(!0),K=C.createFramebuffer(),B=C.createFramebuffer(),q=C.createFramebuffer(),U=new lx(C),V=new US,Z=new ZS(C,Me,p,V,T,Se,U),pe=new sx(L),ge=new u0(C),Ce=new qv(C,ge),ee=new ax(C,ge,U,Ce),oe=new ux(C,ee,ge,Ce,U),F=new cx(C,T,Z),Ve=new Jv(V),me=new IS(L,pe,Me,T,Ce,Ve),De=new nM(L,V),ve=new FS,_e=new kS(Me),Ze=new Yv(L,pe,p,oe,v,l),ke=new qS(L,oe,T),ue=new iM(C,U,T,p),xe=new Kv(C,Me,U),le=new ox(C,Me,U),U.programs=me.programs,L.capabilities=T,L.extensions=Me,L.properties=V,L.renderLists=ve,L.shadowMap=ke,L.state=p,L.info=U}b!==pn&&(w=new fx(b,t.width,t.height,o,s,r));const Be=new eM(L,C);this.xr=Be,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=Me.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Me.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(M){M!==void 0&&(ce=M,this.setSize(et,ne,!1))},this.getSize=function(M){return M.set(et,ne)},this.setSize=function(M,N,J=!0){if(Be.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}et=M,ne=N,t.width=Math.floor(M*ce),t.height=Math.floor(N*ce),J===!0&&(t.style.width=M+"px",t.style.height=N+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(et*ce,ne*ce).floor()},this.setDrawingBufferSize=function(M,N,J){et=M,ne=N,ce=J,t.width=Math.floor(M*J),t.height=Math.floor(N*J),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(b===pn){lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(j)},this.getViewport=function(M){return M.copy(Ie)},this.setViewport=function(M,N,J,X){M.isVector4?Ie.set(M.x,M.y,M.z,M.w):Ie.set(M,N,J,X),p.viewport(j.copy(Ie).multiplyScalar(ce).round())},this.getScissor=function(M){return M.copy(R)},this.setScissor=function(M,N,J,X){M.isVector4?R.set(M.x,M.y,M.z,M.w):R.set(M,N,J,X),p.scissor(Ee.copy(R).multiplyScalar(ce).round())},this.getScissorTest=function(){return I},this.setScissorTest=function(M){p.setScissorTest(I=M)},this.setOpaqueSort=function(M){Le=M},this.setTransparentSort=function(M){Ge=M},this.getClearColor=function(M){return M.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,J=!0){let X=0;if(M){let Y=!1;if(ie!==null){const Ae=ie.texture.format;Y=g.has(Ae)}if(Y){const Ae=ie.texture.type,Ne=h.has(Ae),Te=Ze.getClearColor(),Fe=Ze.getClearAlpha(),He=Te.r,$e=Te.g,nt=Te.b;Ne?(y[0]=He,y[1]=$e,y[2]=nt,y[3]=Fe,C.clearBufferuiv(C.COLOR,0,y)):(P[0]=He,P[1]=$e,P[2]=nt,P[3]=Fe,C.clearBufferiv(C.COLOR,0,P))}else X|=C.COLOR_BUFFER_BIT}N&&(X|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(X|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&C.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),k=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Mt,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",_n,!1),Ze.dispose(),ve.dispose(),_e.dispose(),V.dispose(),pe.dispose(),oe.dispose(),Ce.dispose(),ue.dispose(),me.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",xc),Be.removeEventListener("sessionend",Sc),Ri.stop()};function Mt(M){M.preventDefault(),du("WebGLRenderer: Context Lost."),O=!0}function ct(){du("WebGLRenderer: Context Restored."),O=!1;const M=U.autoReset,N=ke.enabled,J=ke.autoUpdate,X=ke.needsUpdate,Y=ke.type;ze(),U.autoReset=M,ke.enabled=N,ke.autoUpdate=J,ke.needsUpdate=X,ke.type=Y}function _n(M){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Cn(M){const N=M.target;N.removeEventListener("dispose",Cn),dh(N)}function dh(M){fh(M),V.remove(M)}function fh(M){const N=V.get(M).programs;N!==void 0&&(N.forEach(function(J){me.releaseProgram(J)}),M.isShaderMaterial&&me.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,J,X,Y,Ae){N===null&&(N=he);const Ne=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Te=mh(M,N,J,X,Y);p.setMaterial(X,Ne);let Fe=J.index,He=1;if(X.wireframe===!0){if(Fe=ee.getWireframeAttribute(J),Fe===void 0)return;He=2}const $e=J.drawRange,nt=J.attributes.position;let Oe=$e.start*He,ut=($e.start+$e.count)*He;Ae!==null&&(Oe=Math.max(Oe,Ae.start*He),ut=Math.min(ut,(Ae.start+Ae.count)*He)),Fe!==null?(Oe=Math.max(Oe,0),ut=Math.min(ut,Fe.count)):nt!=null&&(Oe=Math.max(Oe,0),ut=Math.min(ut,nt.count));const Dt=ut-Oe;if(Dt<0||Dt===1/0)return;Ce.setup(Y,X,Te,J,Fe);let Tt,_t=xe;if(Fe!==null&&(Tt=ge.get(Fe),_t=le,_t.setIndex(Tt)),Y.isMesh)X.wireframe===!0?(p.setLineWidth(X.wireframeLinewidth*Re()),_t.setMode(C.LINES)):_t.setMode(C.TRIANGLES);else if(Y.isLine){let Bt=X.linewidth;Bt===void 0&&(Bt=1),p.setLineWidth(Bt*Re()),Y.isLineSegments?_t.setMode(C.LINES):Y.isLineLoop?_t.setMode(C.LINE_LOOP):_t.setMode(C.LINE_STRIP)}else Y.isPoints?_t.setMode(C.POINTS):Y.isSprite&&_t.setMode(C.TRIANGLES);if(Y.isBatchedMesh)if(Me.get("WEBGL_multi_draw"))_t.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Bt=Y._multiDrawStarts,Ue=Y._multiDrawCounts,Xt=Y._multiDrawCount,at=Fe?ge.get(Fe).bytesPerElement:1,cn=V.get(X).currentProgram.getUniforms();for(let Pn=0;Pn<Xt;Pn++)cn.setValue(C,"_gl_DrawID",Pn),_t.render(Bt[Pn]/at,Ue[Pn])}else if(Y.isInstancedMesh)_t.renderInstances(Oe,Dt,Y.count);else if(J.isInstancedBufferGeometry){const Bt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ue=Math.min(J.instanceCount,Bt);_t.renderInstances(Oe,Dt,Ue)}else _t.render(Oe,Dt)};function vc(M,N,J,X){k!==null&&M.isNodeMaterial&&k.setObject(X,M),se===!0&&Ve.setState(M,J,!1),M.transparent===!0&&M.side===ri&&M.forceSinglePass===!1?(M.side=tn,M.needsUpdate=!0,Sr(M,N,X),M.side=Wi,M.needsUpdate=!0,Sr(M,N,X),M.side=ri):Sr(M,N,X)}this.compile=function(M,N,J=null){J===null&&(J=M),k!==null&&k.renderStart(M,N,J),A=_e.get(J),A.init(N),_.push(A),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(N.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),M!==J&&M.traverseVisible(function(Y){Y.isLight&&Y.layers.test(N.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),A.setupLights(),k!==null&&k.updateLights(A.state.lightsArray),re=this.localClippingEnabled,se=Ve.init(this.clippingPlanes,re),se===!0&&Ve.setGlobalState(this.clippingPlanes,N),k!==null&&ke.render(A.state.shadowsArray,J,N);const X=new Set;return M.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ae=Y.material;if(Ae)if(Array.isArray(Ae))for(let Ne=0;Ne<Ae.length;Ne++){const Te=Ae[Ne];vc(Te,J,N,Y),X.add(Te)}else vc(Ae,J,N,Y),X.add(Ae)}),A=_.pop(),k!==null&&k.renderEnd(),X},this.compileAsync=function(M,N,J=null){const X=this.compile(M,N,J);return new Promise(Y=>{function Ae(){if(X.forEach(function(Ne){const Fe=V.get(Ne).currentProgram;(Fe===void 0||Fe.isReady())&&X.delete(Ne)}),X.size===0){Y(M);return}setTimeout(Ae,10)}Me.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Ha=null;function hh(M){Ha&&Ha(M)}function xc(){Ri.stop()}function Sc(){Ri.start()}const Ri=new Qf;Ri.setAnimationLoop(hh),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(M){Ha=M,Be.setAnimationLoop(M),M===null?Ri.stop():Ri.start()},Be.addEventListener("sessionstart",xc),Be.addEventListener("sessionend",Sc),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;k!==null&&k.renderStart(M,N);const J=Be.enabled===!0&&Be.isPresenting===!0,X=w!==null&&(ie===null||J)&&w.begin(L,ie);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(N),N=Be.getCamera()),M.isScene===!0&&M.onBeforeRender(L,M,N,ie),A=_e.get(M,_.length),A.init(N),A.state.textureUnits=Z.getTextureUnits(),_.push(A),$.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),G.setFromProjectionMatrix($,zn,N.reversedDepth),re=this.localClippingEnabled,se=Ve.init(this.clippingPlanes,re),E=ve.get(M,D.length),E.init(),D.push(E),Be.enabled===!0&&Be.isPresenting===!0){const Ne=L.xr.getDepthSensingMesh();Ne!==null&&Va(Ne,N,-1/0,L.sortObjects)}Va(M,N,0,L.sortObjects),E.finish(),k!==null&&k.updateLights(A.state.lightsArray),L.sortObjects===!0&&E.sort(Le,Ge),ae=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,ae&&Ze.addToRenderList(E,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Ve.beginShadows();const Y=A.state.shadowsArray;if(ke.render(Y,M,N),se===!0&&Ve.endShadows(),(X&&w.hasRenderPass())===!1){const Ne=E.opaque,Te=E.transmissive;if(A.setupLights(),N.isArrayCamera){const Fe=N.cameras;if(Te.length>0)for(let He=0,$e=Fe.length;He<$e;He++){const nt=Fe[He];bc(Ne,Te,M,nt)}ae&&Ze.render(M);for(let He=0,$e=Fe.length;He<$e;He++){const nt=Fe[He];Mc(E,M,nt,nt.viewport)}}else Te.length>0&&bc(Ne,Te,M,N),ae&&Ze.render(M),Mc(E,M,N)}ie!==null&&z===0&&(Z.updateMultisampleRenderTarget(ie),Z.updateRenderTargetMipmap(ie)),X&&w.end(L),M.isScene===!0&&M.onAfterRender(L,M,N),Ce.resetDefaultState(),Q=-1,H=null,_.pop(),_.length>0?(A=_[_.length-1],Z.setTextureUnits(A.state.textureUnits),se===!0&&Ve.setGlobalState(L.clippingPlanes,A.state.camera)):A=null,D.pop(),D.length>0?E=D[D.length-1]:E=null,k!==null&&k.renderEnd()};function Va(M,N,J,X){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)J=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLightProbeGrid)A.pushLightProbeGrid(M);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(G)){X&&fe.setFromMatrixPosition(M.matrixWorld).applyMatrix4($);const Ne=oe.update(M),Te=M.material;Te.visible&&E.push(M,Ne,Te,J,fe.z,null,N)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(G))){const Ne=oe.update(M),Te=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),fe.copy(M.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),fe.copy(Ne.boundingSphere.center)),fe.applyMatrix4(M.matrixWorld).applyMatrix4($)),Array.isArray(Te)){const Fe=Ne.groups;for(let He=0,$e=Fe.length;He<$e;He++){const nt=Fe[He],Oe=Te[nt.materialIndex];Oe&&Oe.visible&&E.push(M,Ne,Oe,J,fe.z,nt,N)}}else Te.visible&&E.push(M,Ne,Te,J,fe.z,null,N)}}const Ae=M.children;for(let Ne=0,Te=Ae.length;Ne<Te;Ne++)Va(Ae[Ne],N,J,X)}function Mc(M,N,J,X){const{opaque:Y,transmissive:Ae,transparent:Ne}=M;A.setupLightsView(J),se===!0&&Ve.setGlobalState(L.clippingPlanes,J),X&&p.viewport(j.copy(X)),Y.length>0&&xr(Y,N,J),Ae.length>0&&xr(Ae,N,J),Ne.length>0&&xr(Ne,N,J),p.buffers.depth.setTest(!0),p.buffers.depth.setMask(!0),p.buffers.color.setMask(!0),p.setPolygonOffset(!1)}function bc(M,N,J,X){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[X.id]===void 0){const Oe=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[X.id]=new An(1,1,{generateMipmaps:!0,type:Oe?Yn:pn,minFilter:Hi,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}const Ae=A.state.transmissionRenderTarget[X.id],Ne=X.viewport||j;Ae.setSize(Ne.z*L.transmissionResolutionScale,Ne.w*L.transmissionResolutionScale);const Te=L.getRenderTarget(),Fe=L.getActiveCubeFace(),He=L.getActiveMipmapLevel();L.setRenderTarget(Ae),L.getClearColor(tt),je=L.getClearAlpha(),je<1&&L.setClearColor(16777215,.5),L.clear(),ae&&Ze.render(J);const $e=L.toneMapping;L.toneMapping=Gn;const nt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),A.setupLightsView(X),se===!0&&Ve.setGlobalState(L.clippingPlanes,X),xr(M,J,X),Z.updateMultisampleRenderTarget(Ae),Z.updateRenderTargetMipmap(Ae),Me.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let ut=0,Dt=N.length;ut<Dt;ut++){const Tt=N[ut],{object:_t,geometry:Bt,material:Ue,group:Xt}=Tt;if(Ue.side===ri&&_t.layers.test(X.layers)){const at=Ue.side;Ue.side=tn,Ue.needsUpdate=!0,yc(_t,J,X,Bt,Ue,Xt),Ue.side=at,Ue.needsUpdate=!0,Oe=!0}}Oe===!0&&(Z.updateMultisampleRenderTarget(Ae),Z.updateRenderTargetMipmap(Ae))}L.setRenderTarget(Te,Fe,He),L.setClearColor(tt,je),nt!==void 0&&(X.viewport=nt),L.toneMapping=$e}function xr(M,N,J){const X=N.isScene===!0?N.overrideMaterial:null;for(let Y=0,Ae=M.length;Y<Ae;Y++){const Ne=M[Y],{object:Te,geometry:Fe,group:He}=Ne;let $e=Ne.material;$e.allowOverride===!0&&X!==null&&($e=X),Te.layers.test(J.layers)&&yc(Te,N,J,Fe,$e,He)}}function yc(M,N,J,X,Y,Ae){k!==null&&Y.isNodeMaterial&&k.setObject(M,Y),M.onBeforeRender(L,N,J,X,Y,Ae),M.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Y.onBeforeRender(L,N,J,X,M,Ae),Y.transparent===!0&&Y.side===ri&&Y.forceSinglePass===!1?(Y.side=tn,Y.needsUpdate=!0,L.renderBufferDirect(J,N,X,Y,M,Ae),Y.side=Wi,Y.needsUpdate=!0,L.renderBufferDirect(J,N,X,Y,M,Ae),Y.side=ri):L.renderBufferDirect(J,N,X,Y,M,Ae),M.onAfterRender(L,N,J,X,Y,Ae)}function Sr(M,N,J){N.isScene!==!0&&(N=he);const X=V.get(M),Y=A.state.lights,Ae=A.state.shadowsArray,Ne=Y.state.version,Te=me.getParameters(M,Y.state,Ae,N,J,A.state.lightProbeGridArray),Fe=me.getProgramCacheKey(Te);let He=X.programs;X.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,X.fog=N.fog;const $e=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;X.envMap=pe.get(M.envMap||X.environment,$e),X.envMapRotation=X.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,He===void 0&&(M.addEventListener("dispose",Cn),He=new Map,X.programs=He);let nt=He.get(Fe);if(nt!==void 0){if(X.currentProgram===nt&&X.lightsStateVersion===Ne)return Tc(M,Te),nt}else Te.uniforms=me.getUniforms(M),k!==null&&M.isNodeMaterial&&k.build(M,J,Te),M.onBeforeCompile(Te,L),nt=me.acquireProgram(Te,Fe),He.set(Fe,nt),X.uniforms=Te.uniforms;const Oe=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Oe.clippingPlanes=Ve.uniform),Tc(M,Te),X.needsLights=_h(M),X.lightsStateVersion=Ne,X.needsLights&&(Oe.ambientLightColor.value=Y.state.ambient,Oe.lightProbe.value=Y.state.probe,Oe.sunLights.value=Y.state.sun,Oe.sunLightShadows.value=Y.state.sunShadow,Oe.directionalLights.value=Y.state.directional,Oe.directionalLightShadows.value=Y.state.directionalShadow,Oe.spotLights.value=Y.state.spot,Oe.spotLightShadows.value=Y.state.spotShadow,Oe.rectAreaLights.value=Y.state.rectArea,Oe.ltc_1.value=Y.state.rectAreaLTC1,Oe.ltc_2.value=Y.state.rectAreaLTC2,Oe.pointLights.value=Y.state.point,Oe.pointLightShadows.value=Y.state.pointShadow,Oe.hemisphereLights.value=Y.state.hemi,Oe.sunShadowMatrix.value=Y.state.sunShadowMatrix,Oe.sunShadowCascade.value=Y.state.sunShadowCascade,Oe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Oe.spotLightMatrix.value=Y.state.spotLightMatrix,Oe.spotLightMap.value=Y.state.spotLightMap,Oe.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.lightProbeGrid=A.state.lightProbeGridArray.length>0,X.currentProgram=nt,X.uniformsList=null,nt}function Ec(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=sa.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Tc(M,N){const J=V.get(M);J.outputColorSpace=N.outputColorSpace,J.batching=N.batching,J.batchingColor=N.batchingColor,J.instancing=N.instancing,J.instancingColor=N.instancingColor,J.instancingMorph=N.instancingMorph,J.skinning=N.skinning,J.morphTargets=N.morphTargets,J.morphNormals=N.morphNormals,J.morphColors=N.morphColors,J.morphTargetsCount=N.morphTargetsCount,J.numClippingPlanes=N.numClippingPlanes,J.numIntersection=N.numClipIntersection,J.vertexAlphas=N.vertexAlphas,J.vertexTangents=N.vertexTangents,J.toneMapping=N.toneMapping}function ph(M,N){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(N.matrixWorld);for(let J=0,X=M.length;J<X;J++){const Y=M[J];if(Y.texture!==null&&Y.boundingBox.containsPoint(S))return Y}return null}function mh(M,N,J,X,Y){N.isScene!==!0&&(N=he),Z.resetTextureUnits();const Ae=N.fog,Ne=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?N.environment:null,Te=ie===null?L.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:it.workingColorSpace,Fe=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,He=pe.get(X.envMap||Ne,Fe),$e=X.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,nt=!!J.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Oe=!!J.morphAttributes.position,ut=!!J.morphAttributes.normal,Dt=!!J.morphAttributes.color;let Tt=Gn;X.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Tt=L.toneMapping);const _t=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Bt=_t!==void 0?_t.length:0,Ue=V.get(X),Xt=A.state.lights;if(se===!0&&(re===!0||M!==H)){const bt=M===H&&X.id===Q;Ve.setState(X,M,bt)}let at=!1;X.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Xt.state.version||Ue.outputColorSpace!==Te||Y.isBatchedMesh&&Ue.batching===!1||!Y.isBatchedMesh&&Ue.batching===!0||Y.isBatchedMesh&&Ue.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ue.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ue.instancing===!1||!Y.isInstancedMesh&&Ue.instancing===!0||Y.isSkinnedMesh&&Ue.skinning===!1||!Y.isSkinnedMesh&&Ue.skinning===!0||Y.isInstancedMesh&&Ue.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ue.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ue.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ue.instancingMorph===!1&&Y.morphTexture!==null||Ue.envMap!==He||X.fog===!0&&Ue.fog!==Ae||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==Ve.numPlanes||Ue.numIntersection!==Ve.numIntersection)||Ue.vertexAlphas!==$e||Ue.vertexTangents!==nt||Ue.morphTargets!==Oe||Ue.morphNormals!==ut||Ue.morphColors!==Dt||Ue.toneMapping!==Tt||Ue.morphTargetsCount!==Bt||!!Ue.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,Ue.__version=X.version);let cn=Ue.currentProgram;at===!0&&(cn=Sr(X,N,Y),k&&X.isNodeMaterial&&k.onUpdateProgram(X,cn,Ue));let Pn=!1,gi=!1,Ji=!1;const pt=cn.getUniforms(),Rt=Ue.uniforms;if(p.useProgram(cn.program)&&(Pn=!0,gi=!0,Ji=!0),X.id!==Q&&(Q=X.id,gi=!0),Ue.needsLights){const bt=ph(A.state.lightProbeGridArray,Y);Ue.lightProbeGrid!==bt&&(Ue.lightProbeGrid=bt,gi=!0)}if(Pn||H!==M){p.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),pt.setValue(C,"projectionMatrix",M.projectionMatrix),pt.setValue(C,"viewMatrix",M.matrixWorldInverse);const vi=pt.map.cameraPosition;vi!==void 0&&vi.setValue(C,de.setFromMatrixPosition(M.matrixWorld)),T.logarithmicDepthBuffer&&pt.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&pt.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),H!==M&&(H=M,gi=!0,Ji=!0)}if(Ue.needsLights&&(Xt.state.sunShadowMap.length>0&&pt.setValue(C,"sunShadowMap",Xt.state.sunShadowMap,Z),Xt.state.directionalShadowMap.length>0&&pt.setValue(C,"directionalShadowMap",Xt.state.directionalShadowMap,Z),Xt.state.spotShadowMap.length>0&&pt.setValue(C,"spotShadowMap",Xt.state.spotShadowMap,Z),Xt.state.pointShadowMap.length>0&&pt.setValue(C,"pointShadowMap",Xt.state.pointShadowMap,Z)),Y.isSkinnedMesh){pt.setOptional(C,Y,"bindMatrix"),pt.setOptional(C,Y,"bindMatrixInverse");const bt=Y.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),pt.setValue(C,"boneTexture",bt.boneTexture,Z))}Y.isBatchedMesh&&(pt.setOptional(C,Y,"batchingTexture"),pt.setValue(C,"batchingTexture",Y._matricesTexture,Z),pt.setOptional(C,Y,"batchingIdTexture"),pt.setValue(C,"batchingIdTexture",Y._indirectTexture,Z),pt.setOptional(C,Y,"batchingColorTexture"),Y._colorsTexture!==null&&pt.setValue(C,"batchingColorTexture",Y._colorsTexture,Z));const _i=J.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&F.update(Y,J,cn),(gi||Ue.receiveShadow!==Y.receiveShadow)&&(Ue.receiveShadow=Y.receiveShadow,pt.setValue(C,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&N.environment!==null&&(Rt.envMapIntensity.value=N.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=rM()),gi){if(pt.setValue(C,"toneMappingExposure",L.toneMappingExposure),Ue.needsLights&&gh(Rt,Ji),Ae&&X.fog===!0&&De.refreshFogUniforms(Rt,Ae),De.refreshMaterialUniforms(Rt,X,ce,ne,A.state.transmissionRenderTarget[M.id]),Ue.needsLights&&Ue.lightProbeGrid){const bt=Ue.lightProbeGrid;Rt.probesSH.value=bt.texture,Rt.probesMin.value.copy(bt.boundingBox.min),Rt.probesMax.value.copy(bt.boundingBox.max),Rt.probesResolution.value.copy(bt.resolution)}sa.upload(C,Ec(Ue),Rt,Z)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(sa.upload(C,Ec(Ue),Rt,Z),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&pt.setValue(C,"center",Y.center),pt.setValue(C,"modelViewMatrix",Y.modelViewMatrix),pt.setValue(C,"normalMatrix",Y.normalMatrix),pt.setValue(C,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){const bt=X.uniformsGroups;for(let vi=0,$i=bt.length;vi<$i;vi++){const wc=bt[vi];ue.update(wc,cn),ue.bind(wc,cn)}}return cn}function gh(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.sunLights.needsUpdate=N,M.sunLightShadows.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function _h(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(M,N,J){const X=V.get(M);X.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),V.get(M.texture).__webglTexture=N,V.get(M.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:J,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const J=V.get(M);J.__webglFramebuffer=N,J.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,J=0){ie=M,te=N,z=J;let X=null,Y=!1,Ae=!1;if(M){const Te=V.get(M);if(Te.__useDefaultFramebuffer!==void 0){p.bindFramebuffer(C.FRAMEBUFFER,Te.__webglFramebuffer),j.copy(M.viewport),Ee.copy(M.scissor),we=M.scissorTest,p.viewport(j),p.scissor(Ee),p.setScissorTest(we),Q=-1;return}else if(Te.__webglFramebuffer===void 0)Z.setupRenderTarget(M);else if(Te.__hasExternalTextures)Z.rebindTextures(M,V.get(M.texture).__webglTexture,V.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const $e=M.depthTexture;if(Te.__boundDepthTexture!==$e){if($e!==null&&V.has($e)&&(M.width!==$e.image.width||M.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(M)}}const Fe=M.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Ae=!0);const He=V.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(He[N])?X=He[N][J]:X=He[N],Y=!0):M.samples>0&&Z.useMultisampledRTT(M)===!1?X=V.get(M).__webglMultisampledFramebuffer:Array.isArray(He)?X=He[J]:X=He,j.copy(M.viewport),Ee.copy(M.scissor),we=M.scissorTest}else j.copy(Ie).multiplyScalar(ce).floor(),Ee.copy(R).multiplyScalar(ce).floor(),we=I;if(J!==0&&(X=K),p.bindFramebuffer(C.FRAMEBUFFER,X)&&p.drawBuffers(M,X),p.viewport(j),p.scissor(Ee),p.setScissorTest(we),Y){const Te=V.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,Te.__webglTexture,J)}else if(Ae){const Te=N;for(let Fe=0;Fe<M.textures.length;Fe++){const He=V.get(M.textures[Fe]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Fe,He.__webglTexture,J,Te)}}else if(M!==null&&J!==0){const Te=V.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Te.__webglTexture,J)}Q=-1};function Ac(M){const N=V.get(M);return(N.__readFormat!==M.format||N.__readType!==M.type)&&(N.__readFormat=M.format,N.__readType=M.type,N.__formatReadable=T.textureFormatReadable(M.format),N.__typeReadable=T.textureTypeReadable(M.type)),N}this.readRenderTargetPixels=function(M,N,J,X,Y,Ae,Ne,Te=0){if(!(M&&M.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe){p.bindFramebuffer(C.FRAMEBUFFER,Fe);try{const He=M.textures[Te],$e=He.format,nt=He.type;M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Te);const Oe=Ac(He);if(Oe.__formatReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Oe.__typeReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-X&&J>=0&&J<=M.height-Y&&C.readPixels(N,J,X,Y,Se.convert($e),Se.convert(nt),Ae)}finally{const He=ie!==null?V.get(ie).__webglFramebuffer:null;p.bindFramebuffer(C.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(M,N,J,X,Y,Ae,Ne,Te=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe)if(N>=0&&N<=M.width-X&&J>=0&&J<=M.height-Y){p.bindFramebuffer(C.FRAMEBUFFER,Fe);const He=M.textures[Te],$e=He.format,nt=He.type;M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Te);const Oe=Ac(He);if(Oe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Oe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ut),C.bufferData(C.PIXEL_PACK_BUFFER,Ae.byteLength,C.STREAM_READ),C.readPixels(N,J,X,Y,Se.convert($e),Se.convert(nt),0),C.bindBuffer(C.PIXEL_PACK_BUFFER,null);const Dt=ie!==null?V.get(ie).__webglFramebuffer:null;p.bindFramebuffer(C.FRAMEBUFFER,Dt);const Tt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Tg(C,Tt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ut),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Ae),C.bindBuffer(C.PIXEL_PACK_BUFFER,null),C.deleteBuffer(ut),C.deleteSync(Tt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,J=0){const X=Math.pow(2,-J),Y=Math.floor(M.image.width*X),Ae=Math.floor(M.image.height*X),Ne=N!==null?N.x:0,Te=N!==null?N.y:0;Z.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,J,0,0,Ne,Te,Y,Ae),p.unbindTexture()},this.copyTextureToTexture=function(M,N,J=null,X=null,Y=0,Ae=0){let Ne,Te,Fe,He,$e,nt,Oe,ut,Dt;const Tt=M.isCompressedTexture?M.mipmaps[Ae]:M.image;if(J!==null)Ne=J.max.x-J.min.x,Te=J.max.y-J.min.y,Fe=J.isBox3?J.max.z-J.min.z:1,He=J.min.x,$e=J.min.y,nt=J.isBox3?J.min.z:0;else{const Rt=Math.pow(2,-Y);Ne=Math.floor(Tt.width*Rt),Te=Math.floor(Tt.height*Rt),M.isDataArrayTexture?Fe=Tt.depth:M.isData3DTexture?Fe=Math.floor(Tt.depth*Rt):Fe=1,He=0,$e=0,nt=0}X!==null?(Oe=X.x,ut=X.y,Dt=X.z):(Oe=0,ut=0,Dt=0);const _t=Se.convert(N.format),Bt=Se.convert(N.type);let Ue;N.isData3DTexture?(Z.setTexture3D(N,0),Ue=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Z.setTexture2DArray(N,0),Ue=C.TEXTURE_2D_ARRAY):(Z.setTexture2D(N,0),Ue=C.TEXTURE_2D),p.activeTexture(C.TEXTURE0),p.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),p.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),p.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const Xt=p.getParameter(C.UNPACK_ROW_LENGTH),at=p.getParameter(C.UNPACK_IMAGE_HEIGHT),cn=p.getParameter(C.UNPACK_SKIP_PIXELS),Pn=p.getParameter(C.UNPACK_SKIP_ROWS),gi=p.getParameter(C.UNPACK_SKIP_IMAGES);p.pixelStorei(C.UNPACK_ROW_LENGTH,Tt.width),p.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Tt.height),p.pixelStorei(C.UNPACK_SKIP_PIXELS,He),p.pixelStorei(C.UNPACK_SKIP_ROWS,$e),p.pixelStorei(C.UNPACK_SKIP_IMAGES,nt);const Ji=M.isDataArrayTexture||M.isData3DTexture,pt=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const Rt=V.get(M),_i=V.get(N),bt=V.get(Rt.__renderTarget),vi=V.get(_i.__renderTarget);p.bindFramebuffer(C.READ_FRAMEBUFFER,bt.__webglFramebuffer),p.bindFramebuffer(C.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let $i=0;$i<Fe;$i++)Ji&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,V.get(M).__webglTexture,Y,nt+$i),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,V.get(N).__webglTexture,Ae,Dt+$i)),C.blitFramebuffer(He,$e,Ne,Te,Oe,ut,Ne,Te,C.DEPTH_BUFFER_BIT,C.NEAREST);p.bindFramebuffer(C.READ_FRAMEBUFFER,null),p.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(Y!==0||M.isRenderTargetTexture||V.has(M)){const Rt=V.get(M),_i=V.get(N);p.bindFramebuffer(C.READ_FRAMEBUFFER,B),p.bindFramebuffer(C.DRAW_FRAMEBUFFER,q);for(let bt=0;bt<Fe;bt++)Ji?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Rt.__webglTexture,Y,nt+bt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Rt.__webglTexture,Y),pt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_i.__webglTexture,Ae,Dt+bt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,_i.__webglTexture,Ae),Y!==0?C.blitFramebuffer(He,$e,Ne,Te,Oe,ut,Ne,Te,C.COLOR_BUFFER_BIT,C.NEAREST):pt?C.copyTexSubImage3D(Ue,Ae,Oe,ut,Dt+bt,He,$e,Ne,Te):C.copyTexSubImage2D(Ue,Ae,Oe,ut,He,$e,Ne,Te);p.bindFramebuffer(C.READ_FRAMEBUFFER,null),p.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else pt?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(Ue,Ae,Oe,ut,Dt,Ne,Te,Fe,_t,Bt,Tt.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(Ue,Ae,Oe,ut,Dt,Ne,Te,Fe,_t,Tt.data):C.texSubImage3D(Ue,Ae,Oe,ut,Dt,Ne,Te,Fe,_t,Bt,Tt):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Ae,Oe,ut,Ne,Te,_t,Bt,Tt.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Ae,Oe,ut,Tt.width,Tt.height,_t,Tt.data):C.texSubImage2D(C.TEXTURE_2D,Ae,Oe,ut,Ne,Te,_t,Bt,Tt);p.pixelStorei(C.UNPACK_ROW_LENGTH,Xt),p.pixelStorei(C.UNPACK_IMAGE_HEIGHT,at),p.pixelStorei(C.UNPACK_SKIP_PIXELS,cn),p.pixelStorei(C.UNPACK_SKIP_ROWS,Pn),p.pixelStorei(C.UNPACK_SKIP_IMAGES,gi),Ae===0&&N.generateMipmaps&&C.generateMipmap(Ue),p.unbindTexture()},this.initRenderTarget=function(M){V.get(M).__webglFramebuffer===void 0&&Z.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Z.setTextureCube(M,0):M.isData3DTexture?Z.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Z.setTexture2DArray(M,0):Z.setTexture2D(M,0),p.unbindTexture()},this.resetState=function(){te=0,z=0,ie=null,p.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}function td(n=globalThis.localStorage){try{const e=n&&n.getItem?n.getItem("sr_aero_fleet_v1"):null;if(!e)return!1;const t=JSON.parse(e);return!!(t&&Array.isArray(t.aircrafts)&&t.aircrafts.length>0)}catch{return!1}}const oM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3ccircle%20cx='12'%20cy='12'%20r='9'/%3e%3cpath%20d='M12%208v8M8%2012h8'/%3e%3c/svg%3e",nd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M22%202%209%209%203%207l-2%202%207%205%204%208%202-1-1-7%207-5c2-1%203-3%202-7Z'/%3e%3c/svg%3e",id="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M10.3%203.6%201.8%2018a2%202%200%200%200%201.7%203h17a2%202%200%200%200%201.7-3L13.7%203.6a2%202%200%200%200-3.4%200Z'/%3e%3cpath%20d='M12%209v4m0%204h.01'/%3e%3c/svg%3e",sd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3crect%20x='3'%20y='5'%20width='18'%20height='16'%20rx='2'/%3e%3cpath%20d='M16%203v4M8%203v4M3%2010h18M8%2014h.01M12%2014h.01M16%2014h.01M8%2018h.01M12%2018h.01'/%3e%3c/svg%3e",rd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M14.7%206.3a4%204%200%200%200-5-5L7%204l3%203-3%203-3-3-2.7%202.7a4%204%200%200%200%205%205L14%2022l3-3-7.7-7.7'/%3e%3c/svg%3e",ad="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3crect%20x='3'%20y='3'%20width='7'%20height='9'%20rx='1'/%3e%3crect%20x='14'%20y='3'%20width='7'%20height='5'%20rx='1'/%3e%3crect%20x='14'%20y='12'%20width='7'%20height='9'%20rx='1'/%3e%3crect%20x='3'%20y='16'%20width='7'%20height='5'%20rx='1'/%3e%3c/svg%3e",od="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cellipse%20cx='12'%20cy='5'%20rx='9'%20ry='3'/%3e%3cpath%20d='M3%205v7c0%201.7%204%203%209%203s9-1.3%209-3V5M3%2012v7c0%201.7%204%203%209%203s9-1.3%209-3v-7'/%3e%3c/svg%3e",lM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M3%206h18M8%206V4h8v2m3%200-1%2015H6L5%206M10%2011v6m4-6v6'/%3e%3c/svg%3e",cM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M12%203v12m-5-5%205%205%205-5M5%2021h14'/%3e%3c/svg%3e",uM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M12%2020h9M16.5%203.5a2.1%202.1%200%200%201%203%203L8%2018l-4%201%201-4Z'/%3e%3c/svg%3e",ld="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M3%2012a9%209%200%201%200%203-6.7L3%208'/%3e%3cpath%20d='M3%203v5h5M12%207v5l3%202'/%3e%3c/svg%3e",dM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M15%203h4a2%202%200%200%201%202%202v14a2%202%200%200%201-2%202h-4M10%2017l5-5-5-5M15%2012H3'/%3e%3c/svg%3e",fM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M12%203%204%206v6c0%205%203%208%208%2010%205-2%208-5%208-10V6z'/%3e%3cpath%20d='m8%2012%203%203%205-6'/%3e%3c/svg%3e",hM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M19%2021H5a2%202%200%200%201-2-2V5a2%202%200%200%201%202-2h11l5%205v11a2%202%200%200%201-2%202Z'/%3e%3cpath%20d='M17%2021v-8H7v8M7%203v5h8'/%3e%3c/svg%3e",pM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3ccircle%20cx='12'%20cy='13'%20r='8'/%3e%3cpath%20d='M12%209v4l3%202M9%202h6'/%3e%3c/svg%3e",mM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M9%2021H5a2%202%200%200%201-2-2V5a2%202%200%200%201%202-2h4M16%2017l5-5-5-5M21%2012H9'/%3e%3c/svg%3e",gM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M17%2018a5%205%200%200%200%200-10%207%207%200%200%200-13%203%204%204%200%200%200%201%208h5'/%3e%3cpath%20d='m8%2016%203%203-3%203m8-12-3-3%203-3'/%3e%3c/svg%3e",_M="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3ccircle%20cx='12'%20cy='8'%20r='4'/%3e%3cpath%20d='M4%2021a8%208%200%200%201%2016%200'/%3e%3c/svg%3e",vM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%230b5f8a'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3crect%20x='3'%20y='5'%20width='18'%20height='16'%20rx='2'/%3e%3cpath%20d='M16%203v4M8%203v4M3%2010h18M12%2014v3m0%201h.01'/%3e%3c/svg%3e",xM=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Ys="sr_aero_fleet_v1",ah="sr_aero_fleet_meta_v1",SM="dashboards",MM="main",oh=20,Nn=new Date;Nn.setHours(0,0,0,0);const lh="calidad@divmaaer.com",bM=[lh,"marlonchca3@gmail.com","gato0247@gmail.com","tatianamhl250197@gmail.com"],ch={apiKey:"AIzaSyDRAZZ4VafNNIi3G9_USyARksFqgKYE5Fo",authDomain:"calidadddddd.firebaseapp.com",projectId:"calidadddddd",storageBucket:"calidadddddd.firebasestorage.app",messagingSenderId:"532433890487",appId:"1:532433890487:web:d7011a757f953c03363132",measurementId:"G-60JGPFZ5TL"},uh=[{component:"Mi-17 MTV-1",series:"96019",workshop:"Helicentro",overhaul:"20/03/2020",assigned:"2,000 h",consumed:"860 h",remaining:"1,140 h",due:"20/03/2028"},{component:"Motor 1 TV3-117BM",series:"7087882200433",workshop:"URAL",overhaul:"12/04/2016",assigned:"1,500 h",consumed:"828.5 h",remaining:"671.5 h",due:"12/04/2026"},{component:"Motor 2 TV3-117BM",series:"7087884000357",workshop:"BORYSFEN",overhaul:"21/04/2016",assigned:"1,500 h",consumed:"828.5 h",remaining:"671.5 h",due:"21/04/2026"},{component:"AI-9B",series:"7080924200355",workshop:"OOO ARP Motor",overhaul:"16/07/2020",assigned:"600 arr",consumed:"694 arr",remaining:"-94 arr",due:"16/07/2028"},{component:"VR-14",series:"L0701003MP2",workshop:"AO REDUCTOR PM",overhaul:"19/09/2017",assigned:"2,000 h",consumed:"828 h",remaining:"1,172 h",due:"19/09/2027"}];function Nl(n){return JSON.parse(JSON.stringify(n))}function cd(){try{return JSON.parse(localStorage.getItem(ah)||"{}")||{}}catch{return{}}}function Vs(n){try{localStorage.setItem(ah,JSON.stringify({updatedAt:n}))}catch{}}function Io(){return{selectedId:"pnp-501",changes:[],aircrafts:[{id:"pnp-501",code:"PNP-501",name:"Mi-17 MTV-1",rows:Nl(uh).map(tr)},{id:"pnp-506",code:"PNP-506",name:"Mi-171",rows:[]}]}}function Hn(n){const e=parseFloat(String(n).replace(/[^0-9.-]/g,""));return Number.isFinite(e)?e:0}function Ma(n){const e=Number(n);return Number.isFinite(e)?Number.isInteger(e)?String(e):String(Number(e.toFixed(2))):"0"}function qs(){return Bi(Nn)}function tr(n){const e=String(n.assignedTboHours??n.assigned??""),t=String(n.assignedTboYears??""),i=String(n.consumedTboHours??n.consumed??""),s=qs(),r=String(n.assignedTsnHours??""),a=String(n.assignedTsnYears??""),o=String(n.consumedTsnHours??""),l=Ma(Hn(r)-Hn(o)),c=_s(n.overhaul,a)||String(n.remainingTsnYears||""),u=Ma(Hn(e)-Hn(i)),f=_s(n.overhaul,t)||String(n.due||""),d=f;return{component:String(n.component||""),series:String(n.series||""),workshop:String(n.workshop||""),overhaul:String(n.overhaul||""),assigned:e,consumed:i,remaining:u,assignedTboHours:e,assignedTboYears:t,consumedTboHours:i,consumedTboYears:s,assignedTsnHours:r,assignedTsnYears:a,consumedTsnHours:o,consumedTsnYears:s,remainingTboHours:u,remainingTboYears:d,remainingTsnHours:l,remainingTsnYears:c,notes:String(n.notes||""),due:f}}function Fl(n){return Array.isArray(n)?n.map((e,t)=>({id:String(e.id||`${e.timestamp||Date.now()}-${t}`),timestamp:Number(e.timestamp||0),action:String(e.action||"Cambio registrado"),detail:String(e.detail||""),aircraftCode:String(e.aircraftCode||""),user:String(e.user||"")})).filter(e=>e.timestamp>0).sort((e,t)=>t.timestamp-e.timestamp).slice(0,oh):[]}function yM(){const n=localStorage.getItem(Ys);if(!n)return Io();try{const e=JSON.parse(n);return!Array.isArray(e.aircrafts)||e.aircrafts.length===0?Io():((!e.selectedId||!e.aircrafts.find(t=>t.id===e.selectedId))&&(e.selectedId=e.aircrafts[0].id),e.changes=Fl(e.changes),e.aircrafts=e.aircrafts.map(t=>({...t,rows:Array.isArray(t.rows)?t.rows.map(tr):[]})),e)}catch{return Io()}}function ms(n){const e=String(n).trim().match(/^(\d{2})\/(\d{2})\/(\d{4})$/);if(!e)return null;const t=Number(e[1]),i=Number(e[2]),s=Number(e[3]),r=new Date(s,i-1,t);return r.getFullYear()!==s||r.getMonth()!==i-1||r.getDate()!==t?null:r}function Bi(n){const e=String(n.getDate()).padStart(2,"0"),t=String(n.getMonth()+1).padStart(2,"0");return`${e}/${t}/${n.getFullYear()}`}function EM(n,e){const t=Hn(e);if(t<=0)return null;const i=new Date(n),s=Math.round(t*12),r=i.getDate();i.setDate(1),i.setMonth(i.getMonth()+s);const a=new Date(i.getFullYear(),i.getMonth()+1,0).getDate();return i.setDate(Math.min(r,a)),i}function _s(n,e){const t=ms(n),i=t?EM(t,e):null;return i?Bi(i):""}function fc(n){return String(n??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\x20-\x7E]/g," ").replace(/\s+/g," ").trim()}function TM(n){return fc(n).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")}function ud(n){return fc(n).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"aeronave"}function Uo(n,e){const t=fc(n).split(" ").filter(Boolean),i=[];let s="";return t.forEach(r=>{const a=s?`${s} ${r}`:r;if(a.length>e&&s){i.push(s),s=r;return}s=a}),s&&i.push(s),i.length?i:["--"]}function AM(){return Object.values(ch).every(n=>n&&!String(n).startsWith("REEMPLAZAR_"))}function wM(n){return bM.includes(String(n||"").toLowerCase())}function No(n){return new Promise((e,t)=>{if(document.querySelector(`script[src="${n}"]`)){e();return}const i=document.createElement("script");i.src=n,i.onload=e,i.onerror=t,document.head.appendChild(i)})}const RM={name:"App",data(){return{activeView:"dashboard",activeMenuLabel:"Dashboard",authBusy:!1,authHint:"Usa Ingresar si ya tienes cuenta, o Crear cuenta si es tu primera vez.",authHintError:!1,authReady:!1,cloudErrorMessage:"",cloudStatus:"Local",cloudStatusError:!1,currentUser:null,dbReady:!1,fleet:yM(),firestoreUnsubscribe:null,hasLoadedRemoteFleet:!1,isOwner:!1,isApplyingRemoteFleet:!1,isSavingToFirestore:!1,lastLocalWriteAt:0,lastSyncAt:td(localStorage)?Number(cd().updatedAt||0):0,loginEmail:"",loginPassword:"",loginThreeCleanup:null,syncSource:"local",mobileMenuOpen:!1,sidebarCollapsed:!1,textSizeLarge:!1,icons:{add:oM,aircrafts:nd,alerts:id,calendar:sd,components:rd,dashboard:ad,database:od,delete:lM,download:cM,due:vM,edit:uM,history:ld,login:dM,overhaul:fM,save:hM,serviceTime:pM,signOut:mM,sync:gM,user:_M},newAircraft:{code:"",name:"",notes:""},editingAircraftId:"",editingAircraftDraft:{code:"",name:"",notes:""},draggingAircraftId:"",draggingRowIndex:null,menuItems:[{label:"Dashboard",target:"dashboard",icon:ad},{label:"Aeronaves",target:"aeronaves",icon:nd},{label:"Componentes",target:"componentes",icon:rd},{label:"Base de datos",target:"base-datos",icon:od},{label:"Alertas",target:"alertas",icon:id},{label:"Calendario",target:"calendario",icon:sd},{label:"Historial",target:"historial",icon:ld}]}},computed:{activeUser(){return this.currentUser},isAuthenticated(){return!!(this.currentUser&&!this.currentUser.isAnonymous)},todayLabel(){return Bi(Nn)},authStatus(){return this.isAuthenticated?this.isOwner?"Editor":"Solo lectura":"No autenticado"},currentAircraft(){return this.fleet.aircrafts.find(n=>n.id===this.fleet.selectedId)||null},currentRows(){return this.currentAircraft?this.currentAircraft.rows:[]},aircraftChip(){return this.currentAircraft?`${this.currentAircraft.code} (${this.currentAircraft.name})`:"--"},cloudStatusText(){return this.cloudStatus.toLowerCase()},syncSourceText(){return this.syncSource==="remote"?"Remoto":"Local"},lastSyncLabel(){return this.lastSyncAt?new Intl.DateTimeFormat("es-PE",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(this.lastSyncAt)):"Sin datos"},metrics(){const n=this.currentRows,e=n.length,t=n.filter(u=>this.getStatus(u)==="CRITICO").length,i=n.filter(u=>this.getStatus(u)==="ALERTA").length,s=n.filter(u=>this.getStatus(u)==="OK").length,r=n.filter(u=>{const f=ms(u.due);if(!f)return!1;const d=Math.floor((f-Nn)/864e5);return d>=0&&d<=90}).length,a=n.filter(u=>{const f=ms(u.due);if(!f)return!1;const d=Math.floor((f-Nn)/864e5);return d>=0&&d<=180}).length,o=n.reduce((u,f)=>u+this.rowConsumedHours(f),0),l=n.reduce((u,f)=>u+this.rowRemainingHours(f),0),c=Math.round((t+i*.5)/Math.max(e,1)*100);return{total:e,critical:t,alert:i,ok:s,dueIn90:r,dueIn180:a,consumedTotal:o,remainingTotal:l,risk:c}},riskRingStyle(){const n=Math.round(this.metrics.risk/100*360);return{background:`conic-gradient(${this.riskLabel.color} 0 ${n}deg, #183458 ${n}deg 360deg)`}},riskLabel(){return this.metrics.risk>=70?{label:"Alto",color:"var(--danger)"}:this.metrics.risk>=40?{label:"Medio",color:"var(--warn)"}:{label:"Bajo",color:"var(--ok)"}},riskAttentionText(){return`${this.metrics.critical+this.metrics.alert} de ${Math.max(this.metrics.total,1)} componentes requieren atención`},panelTotals(){return{assigned:this.currentRows.reduce((n,e)=>n+this.rowAssignedHours(e),0),consumed:this.currentRows.reduce((n,e)=>n+this.rowConsumedHours(e),0),remaining:this.currentRows.reduce((n,e)=>n+this.rowRemainingHours(e),0)}},dueRows(){return this.currentRows.map((n,e)=>({row:n,index:e,dueDate:ms(n.due)})).filter(n=>n.dueDate).sort((n,e)=>n.dueDate-e.dueDate)},aircraftSeries(){const n=this.currentRows.find(e=>String(e.series||"").trim());return n?String(n.series).trim():"--"},nextDueDate(){return this.dueRows.length>0?this.dueRows[0].row.due:"--"},aircraftState(){return this.currentRows.length===0?"SIN DATOS":this.metrics.critical>0?"CRITICO":this.metrics.alert>0?"ALERTA":"OPERATIVO"},consumedPct(){const n=this.panelTotals.assigned;return n<=0?0:Math.max(0,Math.min(100,this.panelTotals.consumed/n*100))},chartBars(){const n=this.currentRows.slice(0,6);if(n.length===0)return[];const e=Math.max(1,...n.map(t=>Math.max(this.rowConsumedHours(t)+Math.max(this.rowRemainingHours(t),0),1)));return n.map((t,i)=>{const s=this.rowConsumedHours(t),r=Math.max(this.rowRemainingHours(t),0),a=Math.max(s+r,1),o=this.getStatus(t);return{key:`${t.component}-${i}`,label:t.component||"Sin nombre",logo:this.componentLogo(t),categoryClass:this.categoryClass(t),consumed:s,remaining:r,percentage:Math.round(s/a*100),consumedWidth:Math.max(0,Math.min(100,s/e*100)),remainingWidth:Math.max(0,Math.min(100,r/e*100)),statusClass:o==="CRITICO"?"critical":o==="ALERTA"?"warn":"ok"}})},categoryChart(){const n=new Map;this.currentRows.forEach(t=>{const i=this.componentCategory(t),s=n.get(i.key)||{...i,value:0};s.value+=Math.max(this.rowConsumedHours(t),0),n.set(i.key,s)});const e=Math.max(this.metrics.consumedTotal,1);return Array.from(n.values()).sort((t,i)=>i.value-t.value).map(t=>({...t,percentage:Math.round(t.value/e*100)}))},categoryDonutStyle(){let n=0;const e=this.categoryChart.map(t=>{const i=n+t.percentage/100*360,s=`${t.color} ${n}deg ${i}deg`;return n=i,s});return{background:e.length?`conic-gradient(${e.join(", ")})`:"#183458"}},statusChart(){const n=[{key:"ok",label:"Operativos",value:this.metrics.ok,color:"#16b86a"},{key:"alert",label:"Atención",value:this.metrics.alert,color:"#ffb100"},{key:"critical",label:"Overhaul",value:this.metrics.critical,color:"#ff4f4f"}],e=Math.max(this.metrics.total,1);return n.map(t=>({...t,percentage:Math.round(t.value/e*100)}))},statusDonutStyle(){let n=0;const e=this.statusChart.map(t=>{const i=n+t.percentage/100*360,s=`${t.color} ${n}deg ${i}deg`;return n=i,s});return{background:e.length?`conic-gradient(${e.join(", ")})`:"#183458"}},trendChart(){const n=this.currentRows.slice(0,6),e=n.flatMap(s=>[this.rowConsumedHours(s),Math.max(this.rowRemainingHours(s),0)]),t=Math.max(1,...e),i=n.map((s,r)=>{const a=48+r*532/Math.max(n.length-1,1),o=150-this.rowConsumedHours(s)/t*120,l=150-Math.max(this.rowRemainingHours(s),0)/t*120;return{key:`${s.component}-${r}`,x:a,consumedY:o,remainingY:l,label:this.shortComponentLabel(s.component)}});return{max:t,points:i,consumedPoints:i.map(s=>`${s.x},${s.consumedY}`).join(" "),remainingPoints:i.map(s=>`${s.x},${s.remainingY}`).join(" "),gridLines:[30,70,110,150].map(s=>({y:s}))}},dueEvents(){return this.dueRows.length===0?[{key:"empty",component:"Sin vencimientos registrados",due:"--",className:"ok"}]:this.dueRows.slice(0,5).map(n=>{const e=this.getStatus(n.row);return{key:`${n.row.component}-${n.index}`,component:n.row.component,due:n.row.due,className:e==="CRITICO"?"danger":e==="ALERTA"?"warn":"ok"}})},alertRows(){const n=this.currentRows.map((e,t)=>{const i=this.getStatus(e);return{key:`${e.component}-${t}`,component:e.component||"Sin nombre",status:i,className:i==="CRITICO"?"danger":"warn"}}).filter(e=>e.status==="CRITICO"||e.status==="ALERTA");return n.length?n:[{key:"empty",component:"Sin alertas activas",status:"OK",className:"ok"}]},recentChanges(){return Fl(this.fleet.changes)},historyRows(){return this.currentRows.map((n,e)=>{const t=this.getStatus(n);return{key:`${n.component}-${n.series}-${e}`,component:n.component||"Sin nombre",series:n.series||"--",workshop:n.workshop||"--",overhaul:n.overhaul||"--",due:n.due||"--",status:t,statusClass:this.statusClass(n)}})}},watch:{isAuthenticated(n){if(n){this.destroyLoginThreeBackground();return}this.$nextTick(()=>this.initLoginThreeBackground())}},mounted(){this.initAuth(),this.$nextTick(()=>this.initLoginThreeBackground()),window.addEventListener("resize",this.handleResize)},beforeUnmount(){this.destroyLoginThreeBackground(),window.removeEventListener("resize",this.handleResize),this.firestoreUnsubscribe&&this.firestoreUnsubscribe()},methods:{initLoginThreeBackground(){if(this.loginThreeCleanup||this.isAuthenticated||!this.$refs.threeBg)return;const n=this.$refs.threeBg,e=new aM({canvas:n,alpha:!0,antialias:!0,powerPreference:"high-performance"});e.setClearColor(0,0),e.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const t=new zg,i=new hn(55,1,.1,100);i.position.set(0,.4,8);const s=new Ws;t.add(s);const r=window.innerWidth<768?120:220,a=new Float32Array(r*3),o=new Float32Array(r*3),l=new ot("#6fb4ff"),c=new ot("#22d3ee");for(let E=0;E<r;E+=1){const A=E*3;a[A]=(Math.random()-.5)*15,a[A+1]=(Math.random()-.5)*9,a[A+2]=(Math.random()-.5)*10;const D=l.clone().lerp(c,Math.random());o[A]=D.r,o[A+1]=D.g,o[A+2]=D.b}const u=new ln;u.setAttribute("position",new wn(a,3)),u.setAttribute("color",new wn(o,3));const f=new $g(u,new Yf({size:.035,vertexColors:!0,transparent:!0,opacity:.72,depthWrite:!1}));s.add(f);const d=new xa({color:5217535,wireframe:!0,transparent:!0,opacity:.24}),m=new xa({color:2282478,wireframe:!0,transparent:!0,opacity:.18}),v=new gn(new Sa(2.25,.012,8,96),d);v.rotation.x=Math.PI/2.6,v.position.set(-2.2,-.4,-1.6),s.add(v);const b=new gn(new Sa(1.2,.01,8,80),m);b.rotation.x=Math.PI/2,b.rotation.y=Math.PI/5,b.position.set(2.6,.45,-.9),s.add(b);const g=new gn(new dc(.72,1),d);g.position.set(2.6,.45,-.9),s.add(g);const h=()=>{const E=window.innerWidth,A=window.innerHeight;e.setSize(E,A,!1),i.aspect=E/Math.max(A,1),i.updateProjectionMatrix()};let y=0;const P=new l0,S=()=>{const E=P.getElapsedTime();f.rotation.y=E*.035,f.rotation.x=Math.sin(E*.28)*.06,v.rotation.z=E*.18,b.rotation.z=-E*.34,g.rotation.x=E*.28,g.rotation.y=E*.42,s.position.y=Math.sin(E*.7)*.08,e.render(t,i),y=window.requestAnimationFrame(S)};h(),window.addEventListener("resize",h),S(),this.loginThreeCleanup=()=>{window.cancelAnimationFrame(y),window.removeEventListener("resize",h),u.dispose(),v.geometry.dispose(),b.geometry.dispose(),g.geometry.dispose(),f.material.dispose(),d.dispose(),m.dispose(),e.dispose(),this.loginThreeCleanup=null}},destroyLoginThreeBackground(){this.loginThreeCleanup&&this.loginThreeCleanup()},componentCategory(n){const e=`${n.component||""} ${n.series||""}`.toLowerCase();return/motor|tv3|ai-9|apu/.test(e)?{key:"motors",label:"Motores",color:"#176ee8",logo:"M"}:/vr-|reductor|reduct/.test(e)?{key:"reducers",label:"Reductores",color:"#12b96b",logo:"R"}:/bomba|hidraul/.test(e)?{key:"hydraulic",label:"Hidráulicos",color:"#f2a900",logo:"H"}:/generador|electr|ai-/.test(e)?{key:"systems",label:"Sistemas",color:"#8b62d9",logo:"S"}:{key:"other",label:"Otros",color:"#98a9c2",logo:"O"}},componentLogo(n){return this.componentCategory(n).logo},categoryClass(n){return`category-${this.componentCategory(n).key}`},shortComponentLabel(n){const e=String(n||"Sin datos");return e.length>12?`${e.slice(0,11)}…`:e},async persistFleet(){const n=Date.now();return localStorage.setItem(Ys,JSON.stringify(this.fleet)),Vs(n),this.lastLocalWriteAt=n,this.lastSyncAt=n,this.syncSource="local",this.isApplyingRemoteFleet?!0:this.saveFleetToFirestore()},getRemoteUpdatedAt(n){if(n&&Number.isFinite(Number(n.updatedEpoch))&&Number(n.updatedEpoch)>0)return Number(n.updatedEpoch);if(!n||!n.updatedAt)return 0;if(typeof n.updatedAt.toMillis=="function")return n.updatedAt.toMillis();if(n.updatedAt.seconds)return Number(n.updatedAt.seconds)*1e3;const e=new Date(n.updatedAt).getTime();return Number.isFinite(e)?e:0},recordSystemChange(n,e){const t=Date.now(),i=this.currentAircraft?this.currentAircraft.code:"",s=this.currentUser&&this.currentUser.email?this.currentUser.email:"local",r=Array.isArray(this.fleet.changes)?this.fleet.changes:[];this.fleet.changes=[{id:`${t}-${Math.random().toString(36).slice(2,8)}`,timestamp:t,action:n,detail:e,aircraftCode:i,user:s},...r].slice(0,oh)},formatChangeDate(n){return n?new Intl.DateTimeFormat("es-PE",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(n)):"--"},rowAssignedHours(n){return Hn(n.assignedTboHours??n.assigned)},rowConsumedHours(n){return Hn(n.consumedTboHours??n.consumed)},rowRemainingHours(n){return Hn(n.remainingTboHours??n.remaining)},updateTboDerived(n){const e=qs(),t=this.rowAssignedHours(n)-this.rowConsumedHours(n),i=_s(n.overhaul,n.assignedTboYears);n.consumedTboYears=e,n.consumedTsnYears=e,n.remainingTboHours=Ma(t),n.remainingTboYears=i||"",n.assigned=String(n.assignedTboHours??""),n.consumed=String(n.consumedTboHours??""),n.remaining=n.remainingTboHours,i&&(n.due=i)},updateTsnDerived(n){const e=qs(),t=Hn(n.assignedTsnHours)-Hn(n.consumedTsnHours);n.consumedTsnYears=e,n.remainingTsnHours=Ma(t),n.remainingTsnYears=_s(n.overhaul,n.assignedTsnYears)||""},updateAllDerived(n){this.updateTboDerived(n),this.updateTsnDerived(n)},async saveRowFieldChange(n,e,t=""){t==="tbo"&&this.updateTboDerived(n),t==="tsn"&&this.updateTsnDerived(n),t==="all"&&this.updateAllDerived(n),this.recordSystemChange("Componente actualizado",`${e}: ${n.component||"Sin nombre"}`),await this.persistFleet()},updateCloudStatus(n,e=!1,t=""){this.cloudStatus=n,this.cloudStatusError=e,this.cloudErrorMessage=t},getFirebaseErrorMessage(n){const e=n&&n.code?n.code:"firebase-error",t=n&&n.message?n.message:"Error desconocido de Firebase.";return`${e}: ${t}`},getFleetDocRef(){return!window.firebase||!window.firebase.firestore?null:window.firebase.firestore().collection(SM).doc(MM)},getValidFleet(n){return!n||!Array.isArray(n.aircrafts)||n.aircrafts.length===0?null:{selectedId:n.selectedId&&n.aircrafts.some(t=>t.id===n.selectedId)?n.selectedId:n.aircrafts[0].id,changes:Fl(n.changes),aircrafts:n.aircrafts.map(t=>({id:String(t.id||""),code:String(t.code||""),name:String(t.name||""),notes:String(t.notes||""),rows:Array.isArray(t.rows)?t.rows.map(tr):[]})).filter(t=>t.id&&t.code)}},async loadFleetFromFirestore(){const n=this.getFleetDocRef();if(n)try{const e=await n.get({source:"server"});if(!e.exists){this.updateCloudStatus("Inicial"),this.isOwner&&await this.saveFleetToFirestore(!0);return}const t=e.data()||{},i=this.getValidFleet(t.fleet);if(!i){this.updateCloudStatus("Datos invalidos",!0);return}const s=this.getRemoteUpdatedAt(t)||Date.now();this.hasLoadedRemoteFleet=!0,this.isApplyingRemoteFleet=!0,this.fleet=i,localStorage.setItem(Ys,JSON.stringify(i)),Vs(s),this.lastSyncAt=s,this.syncSource="remote",this.$nextTick(()=>{this.isApplyingRemoteFleet=!1}),this.updateCloudStatus("Sincronizado")}catch(e){const t=this.getFirebaseErrorMessage(e);console.error("Firestore initial read error:",e),this.updateCloudStatus("Error lectura",!0,t),this.updateLoginHint(`No se pudo cargar la flota desde Firestore. ${t}`,!0)}},subscribeFleetFromFirestore(){const n=this.getFleetDocRef();n&&(this.firestoreUnsubscribe&&this.firestoreUnsubscribe(),this.hasLoadedRemoteFleet=!1,this.updateCloudStatus("Conectando"),this.firestoreUnsubscribe=n.onSnapshot(async e=>{if(e.metadata.hasPendingWrites)return;if(!e.exists){this.updateCloudStatus("Inicial"),this.isOwner&&await this.saveFleetToFirestore(!0);return}const t=e.data()||{},i=this.getValidFleet(t.fleet),s=this.getRemoteUpdatedAt(t),r=Number(cd().updatedAt||0);if(!i){this.updateCloudStatus("Datos invalidos",!0);return}if(!this.hasLoadedRemoteFleet){this.hasLoadedRemoteFleet=!0,this.isApplyingRemoteFleet=!0,this.fleet=i,localStorage.setItem(Ys,JSON.stringify(i));const o=s||Date.now();Vs(o),this.lastSyncAt=o,this.syncSource="remote",this.$nextTick(()=>{this.isApplyingRemoteFleet=!1}),this.updateCloudStatus("Sincronizado");return}if(s<=r||this.lastLocalWriteAt&&s<this.lastLocalWriteAt){this.updateCloudStatus("Sincronizado local");return}this.isApplyingRemoteFleet=!0,this.fleet=i,localStorage.setItem(Ys,JSON.stringify(i));const a=s||Date.now();Vs(a),this.lastSyncAt=a,this.syncSource="remote",this.$nextTick(()=>{this.isApplyingRemoteFleet=!1}),this.updateCloudStatus("Sincronizado")},e=>{const t=this.getFirebaseErrorMessage(e);console.error("Firestore read error:",e),this.firestoreUnsubscribe=null,this.updateCloudStatus("Error lectura",!0,t),this.updateLoginHint(`No se pudo leer Firestore. ${t}`,!0)}))},async saveFleetToFirestore(n=!1){if(!this.dbReady)return this.updateCloudStatus("Sin Firebase",!0),this.updateLoginHint("Firestore aun no esta listo.",!0),!1;if(!this.currentUser||this.currentUser.isAnonymous)return this.updateCloudStatus("Requiere login",!0),this.updateLoginHint("Inicia sesion con el correo autorizado para guardar.",!0),!1;if(!this.isOwner&&!n)return this.updateLoginHint("Tu cuenta tiene permisos de solo lectura.",!0),!1;if(this.isApplyingRemoteFleet)return!1;const e=td(localStorage);if(!n&&!e&&!this.isOwner)return!1;if(!n&&!e&&this.isOwner)try{const i=await this.getFleetDocRef().get();if(i.exists&&this.getValidFleet(i.data()&&i.data().fleet))return!1}catch(i){const s=this.getFirebaseErrorMessage(i);return this.updateCloudStatus("Error lectura",!0,s),this.updateLoginHint(`No se pudo comprobar Firestore. ${s}`,!0),!1}const t=this.getFleetDocRef();if(!t)return!1;try{this.isSavingToFirestore=!0,this.updateCloudStatus("Guardando");const i=Date.now();return await t.set({fleet:Nl(this.fleet),updatedAt:window.firebase.firestore.FieldValue.serverTimestamp(),updatedBy:this.currentUser&&this.currentUser.email?this.currentUser.email:lh,updatedEpoch:i},{merge:!0}),Vs(i),this.lastSyncAt=i,this.syncSource="local",this.updateCloudStatus("Guardado"),!0}catch(i){const s=this.getFirebaseErrorMessage(i);return console.error("Firestore write error:",i),this.updateCloudStatus("Error escritura",!0,s),this.updateLoginHint(`No se pudo guardar en Firestore. ${s}`,!0),!1}finally{this.isSavingToFirestore=!1}},updateLoginHint(n,e=!1){this.authHint=n,this.authHintError=e},formatMetric(n){return new Intl.NumberFormat("es-PE",{minimumFractionDigits:0,maximumFractionDigits:1}).format(n)},downloadAircraftPdf(n){if(!n)return;const e=this.createAircraftPdf(n),t=new Blob([e],{type:"application/pdf"}),i=URL.createObjectURL(t),s=document.createElement("a");s.href=i,s.download=`${ud(n.code)}-${ud(n.name)}.pdf`,document.body.appendChild(s),s.click(),s.remove(),window.setTimeout(()=>URL.revokeObjectURL(i),1e3)},createAircraftPdf(n){const r=[];let a=[],o=561;const l=()=>{a.length&&r.push(a.join(`
`)),a=[],o=561},c=H=>{o-H<34&&l()},u=(H,j,Ee,we=9,tt="F1")=>{a.push(`BT /${tt} ${we} Tf ${j} ${Ee} Td (${TM(H)}) Tj ET`)},f=(H,j,Ee,we)=>{a.push(`0.72 w ${H} ${j} m ${Ee} ${we} l S`)},d=(H,j=34,Ee=9,we="F1",tt=13)=>{c(tt),u(H,j,o,Ee,we),o-=tt},m=(H,j,Ee,we,tt=9)=>{Uo(`${H}: ${j||"--"}`,we).forEach(et=>d(et,Ee,tt))},v=Array.isArray(n.rows)?n.rows:[],b=v.filter(H=>this.getStatus(H)==="CRITICO").length,g=v.filter(H=>this.getStatus(H)==="ALERTA").length,h=v.filter(H=>this.getStatus(H)==="OK").length,y=v.reduce((H,j)=>H+this.rowAssignedHours(j),0),P=v.reduce((H,j)=>H+this.rowConsumedHours(j),0),S=v.reduce((H,j)=>H+this.rowRemainingHours(j),0),E=v.map(H=>({row:H,dueDate:ms(H.due)})).filter(H=>H.dueDate).sort((H,j)=>H.dueDate-j.dueDate)[0],A=b>0?"CRITICO":g>0?"ALERTA":v.length?"OPERATIVO":"SIN DATOS";d("DIVMAAER - Control de Calidad",34,10,"F2",16),d(`Reporte de Aeronave: ${n.code}`,34,20,"F2",24),d(n.name||"--",34,13,"F1",18),f(34,o+3,808,o+3),o-=12,d("Resumen operativo",34,13,"F2",18),d(`Fecha de reporte: ${Bi(new Date)}`,34,9,"F1",13),d(`Estado general: ${A}`,34,9,"F2",13),d(`Componentes registrados: ${v.length} | Operativos: ${h} | Alertas: ${g} | Criticos: ${b}`,34,9,"F1",13),d(`TBO asignado: ${this.formatMetric(y)} h | Consumido: ${this.formatMetric(P)} h | Remanente: ${this.formatMetric(S)} h`,34,9,"F1",13),d(`Proximo vencimiento: ${E?`${E.row.component||"Componente"} (${E.row.due})`:"--"}`,34,9,"F1",16),m("Notas",n.notes,34,110,9),o-=6,d("Componentes",34,13,"F2",18);const D=[{label:"#",x:34,width:20},{label:"Componente",x:56,width:132},{label:"Serie",x:192,width:108},{label:"Taller",x:304,width:96},{label:"Overhaul",x:404,width:68},{label:"TBO Asig.",x:476,width:58},{label:"TBO Cons.",x:538,width:58},{label:"Rem.",x:600,width:54},{label:"Vence",x:658,width:66},{label:"Estado",x:728,width:80}],_=()=>{c(28),f(34,o+7,808,o+7),D.forEach(H=>u(H.label,H.x,o,8,"F2")),o-=12,f(34,o+5,808,o+5)};_(),v.length===0&&d("No hay componentes registrados para esta aeronave.",34,9,"F1",13),v.forEach((H,j)=>{c(26),o>551&&_();const Ee=[String(j+1),H.component||"--",H.series||"--",H.workshop||"--",H.overhaul||"--",H.assignedTboHours||H.assigned||"--",H.consumedTboHours||H.consumed||"--",H.remainingTboHours||H.remaining||"--",H.due||"--",this.getStatus(H)];D.forEach((we,tt)=>{const je=Math.max(4,Math.floor(we.width/5));u(Uo(Ee[tt],je)[0],we.x,o,7.6,tt===9?"F2":"F1")}),o-=12,H.notes&&Uo(`Nota: ${H.notes}`,125).slice(0,2).forEach(we=>{c(12),u(we,56,o,7.2,"F1"),o-=10}),f(34,o+5,808,o+5)}),r.push(a.join(`
`));const w=[],L=H=>(w.push(H),w.length),O=L("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>"),k=L("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>"),K=[],B=r.map(H=>L(`<< /Length ${H.length} >>
stream
${H}
endstream`)),q=w.length+r.length+1;B.forEach(H=>{const j=L(`<< /Type /Page /Parent ${q} 0 R /MediaBox [0 0 842 595] /Resources << /Font << /F1 ${O} 0 R /F2 ${k} 0 R >> >> /Contents ${H} 0 R >>`);K.push(j)}),L(`<< /Type /Pages /Kids [${K.map(H=>`${H} 0 R`).join(" ")}] /Count ${K.length} >>`);const te=L(`<< /Type /Catalog /Pages ${q} 0 R >>`);let z=`%PDF-1.4
`;const ie=[0];w.forEach((H,j)=>{ie.push(z.length),z+=`${j+1} 0 obj
${H}
endobj
`});const Q=z.length;return z+=`xref
0 ${w.length+1}
0000000000 65535 f 
`,ie.slice(1).forEach(H=>{z+=`${String(H).padStart(10,"0")} 00000 n 
`}),z+=`trailer
<< /Size ${w.length+1} /Root ${te} 0 R >>
startxref
${Q}
%%EOF`,z},pct(n){const e=Math.max(this.metrics.total,1);return`${Math.round(n/e*100)}%`},getStatus(n){const e=this.rowRemainingHours(n),t=ms(n.due);if(e<0||t&&t<Nn)return"CRITICO";const i=this.rowAssignedHours(n),s=t?Math.floor((t-Nn)/864e5):null;return s!==null&&s<=180||i>0&&e<=i*.15?"ALERTA":"OK"},statusClass(n){const e=this.getStatus(n);return e==="CRITICO"?"critical":e==="ALERTA"?"warn":"ok"},navigate(n,e=""){var t;this.activeView=n,this.activeMenuLabel=e||((t=this.menuItems.find(i=>i.target===n))==null?void 0:t.label)||"Dashboard",this.setMobileMenuOpen(!1),this.$nextTick(()=>{const i=document.getElementById(n);i&&this.highlightAndScroll(i)})},highlightAndScroll(n){n.scrollIntoView({behavior:"smooth",block:"start"}),n.classList.add("jump-highlight"),window.setTimeout(()=>n.classList.remove("jump-highlight"),1200)},async openAircraft(n){n&&(this.fleet.selectedId=n,await this.persistFleet(),this.navigate("dashboard"))},startAircraftEdit(n){if(!this.isOwner){window.alert("Solo el propietario puede editar aeronaves.");return}this.editingAircraftId=n.id,this.editingAircraftDraft={code:n.code,name:n.name,notes:n.notes||""}},cancelAircraftEdit(){this.editingAircraftId="",this.editingAircraftDraft={code:"",name:"",notes:""}},async saveAircraftEdit(n){if(!this.isOwner){window.alert("Solo el propietario puede editar aeronaves.");return}const e=this.fleet.aircrafts.find(o=>o.id===n),t=this.editingAircraftDraft.code.trim().toUpperCase(),i=this.editingAircraftDraft.name.trim(),s=this.editingAircraftDraft.notes.trim();if(!e||!t||!i){window.alert("Ingresa codigo y nombre para guardar la aeronave.");return}if(this.fleet.aircrafts.some(o=>o.id!==n&&o.code.toUpperCase()===t)){window.alert("Ese codigo ya existe.");return}e.code=t,e.name=i,e.notes=s,this.cancelAircraftEdit(),this.recordSystemChange("Aeronave actualizada",`${t} - ${i}`),await this.persistFleet()||window.alert("La aeronave se actualizo localmente, pero Firebase no pudo sincronizar el cambio.")},aircraftIndex(n){return this.fleet.aircrafts.findIndex(e=>e.id===n)},startAircraftDrag(n,e){if(!this.isOwner||this.editingAircraftId===e){n.preventDefault();return}this.draggingAircraftId=e,n.dataTransfer.effectAllowed="move",n.dataTransfer.setData("text/plain",e)},async dropAircraft(n,e){if(!this.isOwner)return;const t=n.dataTransfer.getData("text/plain")||this.draggingAircraftId,i=this.aircraftIndex(t),s=this.aircraftIndex(e);if(i<0||s<0||i===s){this.finishAircraftDrag();return}const r=[...this.fleet.aircrafts],[a]=r.splice(i,1);r.splice(s,0,a),this.fleet.aircrafts=r,this.finishAircraftDrag(),this.recordSystemChange("Aeronaves reordenadas",`${a.code} movida en la lista`),await this.persistFleet()||window.alert("El orden se actualizo localmente, pero Firebase no pudo sincronizar el cambio.")},finishAircraftDrag(){this.draggingAircraftId=""},async createAircraft(){if(!this.isOwner){window.alert("Solo el propietario puede crear aeronaves.");return}const n=this.newAircraft.code.trim().toUpperCase(),e=this.newAircraft.name.trim(),t=this.newAircraft.notes.trim();if(!n||!e){window.alert("Ingresa codigo y nombre para crear la aeronave.");return}if(this.fleet.aircrafts.some(l=>l.code.toUpperCase()===n)){window.alert("Ese codigo ya existe.");return}const s=`${n.toLowerCase().replace(/[^a-z0-9]+/g,"-")}-${Date.now()}`,r=window.scrollX,a=window.scrollY;this.fleet.aircrafts.push({id:s,code:n,name:e,notes:t,rows:[]}),this.fleet.selectedId=s,this.newAircraft.code="",this.newAircraft.name="",this.newAircraft.notes="",this.recordSystemChange("Aeronave creada",`${n} - ${e}`);const o=await this.persistFleet();this.$nextTick(()=>window.scrollTo(r,a)),o||window.alert("La aeronave se creo localmente, pero Firebase no la pudo sincronizar. Revisa reglas y login.")},canDeleteAircraft(n){return this.isOwner&&!!n},async deleteAircraft(n){if(!this.isOwner){window.alert("Solo el propietario puede eliminar aeronaves.");return}const e=this.fleet.aircrafts.find(s=>s.id===n);if(!this.canDeleteAircraft(e)){window.alert("No se puede eliminar esta aeronave.");return}if(!window.confirm(`Deseas eliminar la aeronave ${e.code}?`))return;this.fleet.aircrafts=this.fleet.aircrafts.filter(s=>s.id!==n),this.fleet.selectedId===n&&(this.fleet.selectedId=this.fleet.aircrafts[0]?this.fleet.aircrafts[0].id:""),this.recordSystemChange("Aeronave eliminada",`${e.code} - ${e.name}`),await this.persistFleet()||window.alert("La aeronave se elimino localmente, pero Firebase no pudo sincronizar el cambio.")},async addRow(){if(!this.isOwner){window.alert("Solo el propietario puede editar.");return}this.currentAircraft&&(this.currentAircraft.rows.push(tr({component:"Nuevo componente",series:"",workshop:"",overhaul:Bi(Nn),assigned:"0",consumed:"0",assignedTboHours:"0",assignedTboYears:"1",consumedTboHours:"0",consumedTboYears:qs(),assignedTsnHours:"0",assignedTsnYears:"1",consumedTsnHours:"0",consumedTsnYears:qs(),remainingTsnYears:_s(Bi(Nn),"1"),notes:"",due:_s(Bi(Nn),"1")})),this.recordSystemChange("Componente agregado",`${this.currentAircraft.code}: Nuevo componente`),await this.persistFleet())},startRowDrag(n,e){if(!this.isOwner){n.preventDefault();return}this.draggingRowIndex=e,n.dataTransfer.effectAllowed="move",n.dataTransfer.setData("text/plain",String(e))},async dropRow(n){if(!this.isOwner||!this.currentAircraft||!Array.isArray(this.currentAircraft.rows)){this.finishRowDrag();return}if(this.draggingRowIndex===null)return;const e=Number(this.draggingRowIndex);if(!Number.isInteger(e)||e<0||n<0||n>=this.currentAircraft.rows.length||e===n){this.finishRowDrag();return}const t=[...this.currentAircraft.rows],[i]=t.splice(e,1);t.splice(n,0,i),this.currentAircraft.rows=t,this.finishRowDrag(),this.recordSystemChange("Componentes reordenados",`${i.component||"Sin nombre"} movido en ${this.currentAircraft.code}`),await this.persistFleet()||window.alert("El orden se actualizo localmente, pero Firebase no pudo sincronizar el cambio.")},finishRowDrag(){this.draggingRowIndex=null},async resetDb(){if(!this.isOwner){window.alert("Solo el propietario puede editar.");return}!window.confirm("Deseas restaurar la base de datos original?")||!this.currentAircraft||(this.currentAircraft.rows=this.currentAircraft.id==="pnp-501"?Nl(uh).map(tr):[],this.recordSystemChange("Base de datos restaurada",`${this.currentAircraft.code}: datos restaurados`),await this.persistFleet())},async deleteRow(n){if(!this.isOwner){window.alert("Solo el propietario puede editar.");return}if(!this.currentAircraft||!Array.isArray(this.currentAircraft.rows)||n<0||n>=this.currentAircraft.rows.length)return;const e=this.currentAircraft.rows[n],t=e&&e.component?e.component:"este componente";window.confirm(`Deseas eliminar ${t}?`)&&(this.currentAircraft.rows.splice(n,1),this.recordSystemChange("Componente eliminado",`${this.currentAircraft.code}: ${t}`),await this.persistFleet())},setMobileMenuOpen(n){this.mobileMenuOpen=n},handleResize(){window.innerWidth>760&&this.setMobileMenuOpen(!1)},getAuthErrorMessage(n){const e=n&&n.code?n.code:"";return e==="auth/invalid-credential"||e==="auth/wrong-password"||e==="auth/user-not-found"?"Correo o contrasena incorrectos.":e==="auth/too-many-requests"?"Demasiados intentos. Espera un momento y vuelve a probar.":e==="auth/operation-not-allowed"?"Activa Email/Password en Firebase Authentication.":e==="auth/weak-password"?"La contrasena debe tener al menos 6 caracteres.":e==="auth/email-already-in-use"?"Ese correo ya existe. Usa Ingresar o restablece la contrasena.":e==="auth/invalid-email"?"Ingresa un correo valido.":"No se pudo iniciar sesion con correo."},async createEmailUser(){if(!this.authReady)return this.updateLoginHint("Firebase Auth no esta disponible.",!0),!1;if(!this.loginEmail||!this.loginPassword)return this.updateLoginHint("Ingresa correo y contrasena para crear la cuenta.",!0),!1;try{return this.authBusy=!0,await window.firebase.auth().createUserWithEmailAndPassword(this.loginEmail,this.loginPassword),this.loginPassword="",this.updateLoginHint("Cuenta creada e ingreso correcto."),!0}catch(n){return console.error("Email sign-up error:",n),this.updateLoginHint(this.getAuthErrorMessage(n),!0),!1}finally{this.authBusy=!1}},async sendPasswordReset(){if(!this.authReady){this.updateLoginHint("Firebase Auth no esta disponible.",!0);return}if(!this.loginEmail){this.updateLoginHint("Escribe tu correo para enviar el restablecimiento.",!0);return}try{this.authBusy=!0,await window.firebase.auth().sendPasswordResetEmail(this.loginEmail),this.updateLoginHint("Te enviamos un correo para restablecer la contrasena.")}catch(n){console.error("Password reset error:",n),this.updateLoginHint(this.getAuthErrorMessage(n),!0)}finally{this.authBusy=!1}},async signInWithEmail(){if(!this.authReady){this.updateLoginHint("Firebase Auth no esta disponible.",!0);return}if(!this.loginEmail||!this.loginPassword){this.updateLoginHint("Ingresa correo y contrasena.",!0);return}try{this.authBusy=!0,await window.firebase.auth().signInWithEmailAndPassword(this.loginEmail,this.loginPassword),this.loginPassword="",this.updateLoginHint("Ingreso correcto con correo.")}catch(n){console.error("Email sign-in error:",n),this.updateLoginHint(this.getAuthErrorMessage(n),!0)}finally{this.authBusy=!1}},async signOut(){if(!this.authReady){this.currentUser=null,this.isOwner=!1;return}await window.firebase.auth().signOut()},async initAuth(){if(!AM()){this.updateLoginHint("Configura Firebase Auth para iniciar sesion.",!0);return}try{await No("https://www.gstatic.com/firebasejs/10.12.3/firebase-app-compat.js"),await No("https://www.gstatic.com/firebasejs/10.12.3/firebase-auth-compat.js"),await No("https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore-compat.js")}catch(n){console.error("Firebase SDK load error:",n),this.updateLoginHint("Firebase Auth no esta disponible.",!0),this.updateCloudStatus("Sin conexion",!0,this.getFirebaseErrorMessage(n));return}if(!window.firebase||!window.firebase.firestore){this.updateLoginHint("Firebase Auth no esta disponible.",!0),this.updateCloudStatus("Sin Firebase",!0);return}window.firebase.apps.length||window.firebase.initializeApp(ch),this.authReady=!0,this.dbReady=!0,window.firebase.auth().onAuthStateChanged(async n=>{if(this.currentUser=n,this.isOwner=!1,!n||n.isAnonymous){this.firestoreUnsubscribe&&(this.firestoreUnsubscribe(),this.firestoreUnsubscribe=null),this.updateCloudStatus("Requiere login"),this.updateLoginHint("Usa Ingresar si ya tienes cuenta, o Crear cuenta si es tu primera vez.");return}const e=(n.email||"").toLowerCase();let t="";try{t=(await n.getIdTokenResult()).claims.role||""}catch(i){console.warn("No se pudieron leer los claims de Auth:",i)}this.isOwner=t==="editor"||wM(e),n&&!this.isOwner&&this.updateLoginHint("Ingreso autenticado en modo solo lectura."),n&&this.isOwner&&this.updateLoginHint("Ingreso autenticado en modo editor."),await this.loadFleetFromFirestore(),this.subscribeFleetFromFirestore()})}}},CM={key:0,class:"login-screen"},PM={id:"three-bg",ref:"threeBg","aria-hidden":"true"},DM=["disabled"],LM=["disabled"],IM={class:"login-actions"},UM=["disabled"],NM=["src"],FM=["disabled"],OM=["src"],BM=["disabled"],HM={key:1,class:"layout"},VM={class:"brand"},zM={class:"brand-sub"},kM=["aria-label","title"],GM={id:"sidebar-menu",class:"menu"},WM=["href","onClick"],XM={class:"menu-icon","aria-hidden":"true"},YM=["src"],qM={class:"menu-label"},KM={class:"content"},ZM={class:"topbar"},JM={class:"topbar-left"},$M={class:"title-wrap"},QM={class:"top-actions"},jM=["title"],eb={class:"chip aircraft-chip"},tb={class:"chip date-chip"},nb=["src"],ib=["title"],sb=["src"],rb=["title"],ab=["title"],ob={class:"auth-status"},lb=["src"],cb=["src"],ub={id:"aeronaves",class:"view"},db={class:"panel"},fb={class:"aircrafts-layout"},hb={class:"aircraft-list"},pb=["draggable","onDragstart","onDrop"],mb={key:0,class:"aircraft-notes"},gb={class:"aircraft-actions"},_b=["disabled","onClick"],vb=["src"],xb=["onClick"],Sb=["src"],Mb=["disabled","onClick"],bb=["src"],yb=["aria-label","title","onClick"],Eb=["src"],Tb=["onClick"],Ab=["src"],wb={key:0,class:"empty-note"},Rb=["disabled"],Cb=["disabled"],Pb=["disabled"],Db=["disabled"],Lb=["src"],Ib={key:0,id:"dashboard",ref:"dashboard",class:"grid-kpi view"},Ub={class:"kpi kpi-info"},Nb={class:"kpi-head"},Fb={class:"kpi-icon","aria-hidden":"true"},Ob=["src"],Bb={class:"kpi-value"},Hb={class:"kpi kpi-danger"},Vb={class:"kpi-head"},zb={class:"kpi-icon","aria-hidden":"true"},kb=["src"],Gb={class:"kpi-value"},Wb={class:"kpi-meta"},Xb={class:"kpi-progress"},Yb={class:"kpi kpi-warn"},qb={class:"kpi-head"},Kb={class:"kpi-icon","aria-hidden":"true"},Zb=["src"],Jb={class:"kpi-value"},$b={class:"kpi-meta"},Qb={class:"kpi-progress"},jb={class:"kpi kpi-ok"},ey={class:"kpi-head"},ty={class:"kpi-icon","aria-hidden":"true"},ny=["src"],iy={class:"kpi-value"},sy={class:"kpi-meta"},ry={class:"kpi-progress"},ay={class:"kpi risk-card"},oy={class:"kpi-risk"},ly={class:"risk-copy"},cy={key:1,id:"main-grid-view",class:"main-grid view"},uy={class:"panel"},dy={class:"panel-sub"},fy={class:"plane-title"},hy={class:"meta-list"},py={class:"state-pill"},my={class:"progress-title"},gy={class:"progress"},_y={class:"panel"},vy={class:"resource-chart"},xy={class:"resource-row-head"},Sy={class:"resource-name"},My=["aria-label"],by={class:"resource-values"},yy={class:"panel"},Ey={class:"icon-heading"},Ty=["src"],Ay={class:"events"},wy={key:2,id:"componentes",class:"analytics-grid view"},Ry={class:"panel analytics-panel"},Cy={class:"donut-layout"},Py={class:"donut-center"},Dy={class:"chart-list"},Ly={class:"panel analytics-panel trend-panel"},Iy={class:"trend-chart"},Uy={class:"trend-axis-label top"},Ny={viewBox:"0 0 600 180",role:"img","aria-label":"Tendencia de consumo y remanente"},Fy=["y1","y2"],Oy=["points"],By=["points"],Hy=["cx","cy"],Vy=["cx","cy"],zy=["x"],ky={class:"panel analytics-panel"},Gy={class:"donut-layout status-layout"},Wy={class:"donut-center"},Xy={class:"chart-list"},Yy={key:3,id:"base-datos",ref:"baseDatos",class:"panel table-panel view"},qy={class:"table-title"},Ky={class:"table-tools"},Zy=["disabled"],Jy=["src"],$y=["disabled"],Qy=["src"],jy={class:"table-wrap"},eE=["onDrop"],tE={class:"row-drag-cell"},nE=["disabled","onDragstart"],iE={class:"table-component"},sE=["onUpdate:modelValue","disabled","onChange"],rE=["onUpdate:modelValue","disabled","onChange"],aE=["onUpdate:modelValue","disabled","onChange"],oE=["onUpdate:modelValue","disabled","onInput","onChange"],lE=["onUpdate:modelValue","disabled","onInput","onChange"],cE=["onUpdate:modelValue","disabled","onInput","onChange"],uE=["onUpdate:modelValue","disabled","onInput","onChange"],dE=["onUpdate:modelValue"],fE=["onUpdate:modelValue","disabled","onInput","onChange"],hE=["onUpdate:modelValue","disabled","onInput","onChange"],pE=["onUpdate:modelValue","disabled","onInput","onChange"],mE=["onUpdate:modelValue"],gE=["onUpdate:modelValue"],_E=["onUpdate:modelValue"],vE=["onUpdate:modelValue"],xE=["onUpdate:modelValue"],SE=["onUpdate:modelValue","disabled","onChange"],ME=["onUpdate:modelValue"],bE=["disabled","onClick"],yE=["src"],EE={key:4,id:"alertas",class:"view"},TE={class:"stats-row"},AE={class:"mini"},wE={style:{color:"var(--danger)"}},RE={class:"mini"},CE={style:{color:"var(--warn)"}},PE={class:"mini"},DE={style:{color:"var(--warn)"}},LE={class:"mini"},IE={style:{color:"#ffd58f"}},UE={class:"mini"},NE={class:"panel"},FE={class:"events"},OE={key:5,id:"calendario",class:"panel view"},BE={class:"icon-heading"},HE=["src"],VE={class:"events"},zE={key:6,id:"historial",class:"panel table-panel view"},kE={class:"change-log"},GE={key:0,class:"empty-note"},WE={class:"table-wrap"},XE={class:"history-table"};function YE(n,e,t,i,s,r){return We(),Ye("div",{class:Ct(["app-shell",{"sidebar-collapsed":s.sidebarCollapsed,"text-large":s.textSizeLarge}])},[r.isAuthenticated?(We(),Ye("div",HM,[x("aside",{class:Ct(["sidebar",{open:s.mobileMenuOpen}])},[x("div",VM,[e[28]||(e[28]=x("h2",{class:"brand-title"},"DIVMAAER",-1)),x("p",zM,be(r.currentAircraft?r.currentAircraft.code:"CONTROL DE CALIDAD"),1)]),x("button",{class:"sidebar-collapse-btn",type:"button","aria-label":s.sidebarCollapsed?"Desplegar menu lateral":"Ocultar menu lateral",title:s.sidebarCollapsed?"Desplegar menu":"Ocultar menu",onClick:e[5]||(e[5]=a=>s.sidebarCollapsed=!s.sidebarCollapsed)},be(s.sidebarCollapsed?"›":"‹"),9,kM),x("nav",GM,[(We(!0),Ye(xt,null,sn(s.menuItems,a=>(We(),Ye("a",{key:a.label,class:Ct(["menu-item",{active:s.activeMenuLabel===a.label}]),href:`#${a.target}`,onClick:Di(o=>r.navigate(a.target,a.label),["prevent"])},[x("span",XM,[x("img",{src:a.icon,alt:""},null,8,YM)]),x("span",qM,be(a.label),1)],10,WM))),128))]),e[29]||(e[29]=x("div",{class:"profile"},[x("b",null,"Marlon Chuquino"),dt(" Administrador ")],-1))],2),x("div",{class:Ct(["mobile-menu-backdrop",{open:s.mobileMenuOpen}]),onClick:e[6]||(e[6]=a=>r.setMobileMenuOpen(!1))},null,2),x("main",KM,[x("header",ZM,[x("div",JM,[x("button",{class:"mobile-menu-btn",type:"button","aria-label":"Abrir menu",onClick:e[7]||(e[7]=a=>r.setMobileMenuOpen(!s.mobileMenuOpen))}," ☰ "),e[30]||(e[30]=x("div",{class:"topbar-brand"},[x("p",{class:"topbar-kicker"},"CONTROL DE CALIDAD"),x("h1",null,"Sistema de Gestión de Recursos Aeronáuticos")],-1))]),x("div",$M,[x("p",null,"Dashboard tecnico · "+be(r.currentAircraft?r.currentAircraft.code:"--"),1)]),x("div",QM,[x("button",{class:"chip text-size-btn",type:"button",title:s.textSizeLarge?"Achicar letras":"Agrandar letras",onClick:e[8]||(e[8]=a=>s.textSizeLarge=!s.textSizeLarge)},be(s.textSizeLarge?"A-":"A+"),9,jM),x("div",eb,[x("span",null,be(r.aircraftChip),1),e[31]||(e[31]=dt()),e[32]||(e[32]=x("span",null,"▼",-1))]),x("div",tb,[x("img",{class:"chip-icon",src:s.icons.calendar,alt:"","aria-hidden":"true"},null,8,nb),dt(" "+be(r.todayLabel),1)]),x("div",{class:Ct(["chip firebase-chip",{"sync-error":s.cloudStatusError}]),title:s.cloudErrorMessage||s.cloudStatus},[x("img",{class:"chip-icon",src:s.icons.sync,alt:"","aria-hidden":"true"},null,8,sb),x("span",null,"Firebase "+be(r.cloudStatusText),1)],10,ib),x("div",{class:"chip sync-info-chip",title:`Fuente: ${r.syncSourceText}`},[x("span",{class:Ct(["sync-source-dot",{remote:s.syncSource==="remote"}])},null,2),x("span",null,"Últ. sync: "+be(r.lastSyncLabel),1)],8,rb),x("div",{class:"auth-box",title:s.authHint},[x("span",ob,[x("img",{class:"btn-icon",src:s.icons.user,alt:"","aria-hidden":"true"},null,8,lb),dt(be(r.authStatus),1)]),x("button",{class:"auth-btn",type:"button",onClick:e[9]||(e[9]=(...a)=>r.signOut&&r.signOut(...a))},[x("img",{class:"btn-icon",src:s.icons.signOut,alt:"","aria-hidden":"true"},null,8,cb),e[33]||(e[33]=dt(" Cerrar sesion ",-1))])],8,ab)])]),vt(x("section",ub,[x("section",db,[e[39]||(e[39]=x("h2",null,"Gestion de Aeronaves",-1)),e[40]||(e[40]=x("p",{class:"panel-sub"},"Selecciona una aeronave operativa o crea una nueva con base de datos vacia.",-1)),x("div",fb,[x("div",null,[x("div",hb,[(We(!0),Ye(xt,null,sn(s.fleet.aircrafts,a=>(We(),Ye("article",{key:a.id,class:Ct(["aircraft-card",{active:a.id===s.fleet.selectedId,dragging:s.draggingAircraftId===a.id}]),draggable:s.isOwner&&s.editingAircraftId!==a.id,onDragstart:o=>r.startAircraftDrag(o,a.id),onDragover:e[14]||(e[14]=Di(()=>{},["prevent"])),onDrop:Di(o=>r.dropAircraft(o,a.id),["prevent"]),onDragend:e[15]||(e[15]=(...o)=>r.finishAircraftDrag&&r.finishAircraftDrag(...o))},[s.editingAircraftId===a.id?(We(),Ye(xt,{key:0},[vt(x("input",{"onUpdate:modelValue":e[10]||(e[10]=o=>s.editingAircraftDraft.code=o),class:"aircraft-edit-input",type:"text",maxlength:"30","aria-label":"Codigo de aeronave"},null,512),[[yt,s.editingAircraftDraft.code,void 0,{trim:!0}]]),vt(x("input",{"onUpdate:modelValue":e[11]||(e[11]=o=>s.editingAircraftDraft.name=o),class:"aircraft-edit-input",type:"text",maxlength:"80","aria-label":"Nombre de aeronave"},null,512),[[yt,s.editingAircraftDraft.name,void 0,{trim:!0}]]),vt(x("textarea",{"onUpdate:modelValue":e[12]||(e[12]=o=>s.editingAircraftDraft.notes=o),class:"aircraft-edit-input aircraft-notes-input",maxlength:"240","aria-label":"Notas de aeronave",placeholder:"Notas"},null,512),[[yt,s.editingAircraftDraft.notes,void 0,{trim:!0}]]),x("p",null,"Componentes: "+be(a.rows.length),1)],64)):(We(),Ye(xt,{key:1},[x("h3",null,be(a.code),1),x("p",null,be(a.name),1),a.notes?(We(),Ye("p",mb,be(a.notes),1)):un("",!0),x("p",null,"Componentes: "+be(a.rows.length),1)],64)),x("div",gb,[s.editingAircraftId===a.id?(We(),Ye(xt,{key:0},[x("button",{class:"table-btn",type:"button",disabled:!s.isOwner,onClick:o=>r.saveAircraftEdit(a.id)},[x("img",{class:"btn-icon",src:s.icons.save,alt:"","aria-hidden":"true"},null,8,vb),e[34]||(e[34]=dt("Guardar",-1))],8,_b),x("button",{class:"table-btn",type:"button",onClick:e[13]||(e[13]=(...o)=>r.cancelAircraftEdit&&r.cancelAircraftEdit(...o))},"Cancelar")],64)):(We(),Ye(xt,{key:1},[x("button",{class:"table-btn",type:"button",onClick:o=>r.openAircraft(a.id)},[x("img",{class:"btn-icon",src:s.icons.aircrafts,alt:"","aria-hidden":"true"},null,8,Sb),e[35]||(e[35]=dt("Abrir",-1))],8,xb),x("button",{class:"table-btn",type:"button",disabled:!s.isOwner,onClick:o=>r.startAircraftEdit(a)},[x("img",{class:"btn-icon",src:s.icons.edit,alt:"","aria-hidden":"true"},null,8,bb),e[36]||(e[36]=dt("Editar",-1))],8,Mb),x("button",{class:"table-btn aircraft-download-btn",type:"button","aria-label":`Descargar PDF de ${a.code}`,title:`Descargar PDF de ${a.code}`,onClick:o=>r.downloadAircraftPdf(a)},[x("img",{class:"btn-icon",src:s.icons.download,alt:"","aria-hidden":"true"},null,8,Eb)],8,yb)],64)),r.canDeleteAircraft(a)?(We(),Ye("button",{key:2,class:"table-btn danger-btn",type:"button",onClick:o=>r.deleteAircraft(a.id)},[x("img",{class:"btn-icon",src:s.icons.delete,alt:"","aria-hidden":"true"},null,8,Ab),e[37]||(e[37]=dt(" Eliminar ",-1))],8,Tb)):un("",!0)])],42,pb))),128))]),s.fleet.aircrafts.length===0?(We(),Ye("p",wb,"No hay aeronaves registradas.")):un("",!0)]),x("form",{class:"aircraft-form",onSubmit:e[19]||(e[19]=Di((...a)=>r.createAircraft&&r.createAircraft(...a),["prevent"]))},[vt(x("input",{"onUpdate:modelValue":e[16]||(e[16]=a=>s.newAircraft.code=a),type:"text",maxlength:"30",placeholder:"Codigo (ej. PNP-700)",disabled:!s.isOwner},null,8,Rb),[[yt,s.newAircraft.code,void 0,{trim:!0}]]),vt(x("input",{"onUpdate:modelValue":e[17]||(e[17]=a=>s.newAircraft.name=a),type:"text",maxlength:"80",placeholder:"Nombre (ej. Mi-171Sh)",disabled:!s.isOwner},null,8,Cb),[[yt,s.newAircraft.name,void 0,{trim:!0}]]),vt(x("textarea",{"onUpdate:modelValue":e[18]||(e[18]=a=>s.newAircraft.notes=a),maxlength:"240",placeholder:"Notas de la aeronave",disabled:!s.isOwner},null,8,Pb),[[yt,s.newAircraft.notes,void 0,{trim:!0}]]),x("button",{class:"table-btn",type:"submit",disabled:!s.isOwner},[x("img",{class:"btn-icon",src:s.icons.add,alt:"","aria-hidden":"true"},null,8,Lb),e[38]||(e[38]=dt("Crear aeronave",-1))],8,Db),x("p",{class:Ct(["readonly-note",{visible:!s.isOwner}])},"Solo el propietario puede crear aeronaves.",2)],32)])])],512),[[vm,s.activeView==="aeronaves"]]),s.activeView!=="aeronaves"?(We(),Ye(xt,{key:0},[s.activeView==="dashboard"?(We(),Ye("section",Ib,[x("article",Ub,[x("div",Nb,[e[41]||(e[41]=x("p",{class:"kpi-title"},"Total Componentes",-1)),x("span",Fb,[x("img",{src:s.icons.components,alt:""},null,8,Ob)])]),x("p",Bb,be(r.metrics.total),1),e[42]||(e[42]=x("p",{class:"kpi-meta"},[x("span",null,"Registrados"),x("strong",null,"100%")],-1)),e[43]||(e[43]=x("div",{class:"kpi-progress"},[x("span",{style:{width:"100%"}})],-1))]),x("article",Hb,[x("div",Vb,[e[44]||(e[44]=x("p",{class:"kpi-title"},"Críticos / Overhaul",-1)),x("span",zb,[x("img",{src:s.icons.overhaul,alt:""},null,8,kb)])]),x("p",Gb,be(r.metrics.critical),1),x("p",Wb,[e[45]||(e[45]=x("span",null,"Requieren atención",-1)),x("strong",null,be(r.pct(r.metrics.critical)),1)]),x("div",Xb,[x("span",{style:zt({width:r.pct(r.metrics.critical)})},null,4)])]),x("article",Yb,[x("div",qb,[e[46]||(e[46]=x("p",{class:"kpi-title"},"Alertas Preventivas",-1)),x("span",Kb,[x("img",{src:s.icons.alerts,alt:""},null,8,Zb)])]),x("p",Jb,be(r.metrics.alert),1),x("p",$b,[e[47]||(e[47]=x("span",null,"Seguimiento cercano",-1)),x("strong",null,be(r.pct(r.metrics.alert)),1)]),x("div",Qb,[x("span",{style:zt({width:r.pct(r.metrics.alert)})},null,4)])]),x("article",jb,[x("div",ey,[e[48]||(e[48]=x("p",{class:"kpi-title"},"En Condiciones",-1)),x("span",ty,[x("img",{src:s.icons.serviceTime,alt:""},null,8,ny)])]),x("p",iy,be(r.metrics.ok),1),x("p",sy,[e[49]||(e[49]=x("span",null,"Operativos",-1)),x("strong",null,be(r.pct(r.metrics.ok)),1)]),x("div",ry,[x("span",{style:zt({width:r.pct(r.metrics.ok)})},null,4)])]),x("article",ay,[x("div",oy,[x("div",{class:"ring",style:zt(r.riskRingStyle)},[x("span",null,be(r.metrics.risk)+"%",1)],4),x("div",ly,[e[50]||(e[50]=x("p",{class:"kpi-title"},"Riesgo Global",-1)),x("strong",{style:zt({color:r.riskLabel.color})},be(r.metrics.risk)+"%",5),x("span",null,"Nivel: "+be(r.riskLabel.label),1),x("small",null,be(r.riskAttentionText),1)])])])],512)):un("",!0),s.activeView==="dashboard"?(We(),Ye("section",cy,[x("article",uy,[e[59]||(e[59]=x("h2",null,"Aeronave Seleccionada",-1)),x("p",dy,"Serie "+be(r.aircraftSeries),1),x("p",fy,be(r.currentAircraft?r.currentAircraft.name:"--"),1),x("ul",hy,[x("li",null,[e[51]||(e[51]=x("span",null,"Horas Totales (TSN):",-1)),e[52]||(e[52]=dt()),x("span",null,be(r.formatMetric(r.panelTotals.consumed))+" h",1)]),x("li",null,[e[53]||(e[53]=x("span",null,"Vida Total Asignada:",-1)),e[54]||(e[54]=dt()),x("span",null,be(r.formatMetric(r.panelTotals.assigned))+" h",1)]),x("li",null,[e[55]||(e[55]=x("span",null,"Horas Remanentes:",-1)),e[56]||(e[56]=dt()),x("span",null,be(r.formatMetric(r.panelTotals.remaining))+" h",1)]),x("li",null,[e[57]||(e[57]=x("span",null,"Vencimiento Calendario:",-1)),e[58]||(e[58]=dt()),x("span",null,be(r.nextDueDate),1)])]),x("div",py,be(r.aircraftState),1),x("p",my,"Vida util consumida: "+be(r.formatMetric(r.consumedPct))+"%",1),x("div",gy,[x("div",{style:zt({width:`${r.consumedPct}%`})},null,4)])]),x("article",_y,[e[60]||(e[60]=x("h2",null,"Consumo de Recursos (TSO / Arranques)",-1)),e[61]||(e[61]=x("p",{class:"panel-sub"},"Comparación: consumido vs remanente por componente",-1)),e[62]||(e[62]=x("div",{class:"chart-legend","aria-label":"Leyenda de consumo"},[x("span",null,[x("i",{class:"legend-swatch consumed"}),dt("Consumido")]),x("span",null,[x("i",{class:"legend-swatch remaining"}),dt("Remanente")])],-1)),x("div",vy,[(We(!0),Ye(xt,null,sn(r.chartBars,a=>(We(),Ye("div",{key:a.key,class:"resource-row"},[x("div",xy,[x("div",Sy,[x("span",{class:Ct(["component-logo",a.categoryClass])},be(a.logo),3),x("span",null,be(a.label),1)]),x("strong",null,be(a.percentage)+"%",1)]),x("div",{class:"resource-track","aria-label":`${a.label}: ${a.consumed} consumido, ${a.remaining} remanente`},[x("span",{class:"resource-segment consumed",style:zt({width:`${a.consumedWidth}%`})},null,4),x("span",{class:"resource-segment remaining",style:zt({width:`${a.remainingWidth}%`})},null,4)],8,My),x("div",by,[x("span",null,be(r.formatMetric(a.consumed)),1),x("span",null,be(r.formatMetric(a.remaining)),1)])]))),128))])]),x("article",yy,[x("h2",Ey,[x("img",{src:s.icons.due,alt:"","aria-hidden":"true"},null,8,Ty),e[63]||(e[63]=dt("Proximos Vencimientos",-1))]),e[64]||(e[64]=x("p",{class:"panel-sub"},"Control calendario",-1)),x("ul",Ay,[(We(!0),Ye(xt,null,sn(r.dueEvents,a=>(We(),Ye("li",{key:a.key},[x("span",null,be(a.component),1),x("span",{class:Ct(["date",a.className])},be(a.due),3)]))),128))])])])):un("",!0),s.activeView==="componentes"?(We(),Ye("section",wy,[x("article",Ry,[e[67]||(e[67]=x("h2",null,"Consumo de Recursos por Categoría",-1)),e[68]||(e[68]=x("p",{class:"panel-sub"},"Distribución del consumo registrado",-1)),x("div",Cy,[x("div",{class:"donut-chart",style:zt(r.categoryDonutStyle)},[x("div",Py,[e[65]||(e[65]=x("span",null,"Total",-1)),x("strong",null,be(r.formatMetric(r.metrics.consumedTotal)),1),e[66]||(e[66]=x("small",null,"HRS / ARR",-1))])],4),x("div",Dy,[(We(!0),Ye(xt,null,sn(r.categoryChart,a=>(We(),Ye("div",{key:a.key,class:"chart-list-row"},[x("span",null,[x("i",{class:"legend-swatch",style:zt({background:a.color})},null,4),dt(be(a.label),1)]),x("strong",null,[dt(be(r.formatMetric(a.value))+" ",1),x("small",null,be(a.percentage)+"%",1)])]))),128))])])]),x("article",Ly,[e[70]||(e[70]=x("h2",null,"Tendencia de Consumo (TSO)",-1)),e[71]||(e[71]=x("p",{class:"panel-sub"},"Comparación de consumo y remanente por componente",-1)),e[72]||(e[72]=x("div",{class:"chart-legend trend-legend"},[x("span",null,[x("i",{class:"legend-swatch consumed"}),dt("Consumido")]),x("span",null,[x("i",{class:"legend-swatch remaining"}),dt("Remanente")])],-1)),x("div",Iy,[x("div",Uy,be(r.formatMetric(r.trendChart.max)),1),e[69]||(e[69]=x("div",{class:"trend-axis-label bottom"},"0",-1)),(We(),Ye("svg",Ny,[(We(!0),Ye(xt,null,sn(r.trendChart.gridLines,a=>(We(),Ye("line",{key:a.y,x1:"38",y1:a.y,x2:"590",y2:a.y,class:"trend-grid-line"},null,8,Fy))),128)),x("polyline",{points:r.trendChart.consumedPoints,class:"trend-line consumed-line"},null,8,Oy),x("polyline",{points:r.trendChart.remainingPoints,class:"trend-line remaining-line"},null,8,By),(We(!0),Ye(xt,null,sn(r.trendChart.points,a=>(We(),Ye("g",{key:a.key},[x("circle",{cx:a.x,cy:a.consumedY,r:"4",class:"trend-point consumed-point"},null,8,Hy),x("circle",{cx:a.x,cy:a.remainingY,r:"4",class:"trend-point remaining-point"},null,8,Vy),x("text",{x:a.x,y:"176","text-anchor":"middle",class:"trend-label"},be(a.label),9,zy)]))),128))]))])]),x("article",ky,[e[74]||(e[74]=x("h2",null,"Estado de Componentes",-1)),e[75]||(e[75]=x("p",{class:"panel-sub"},"Situación operativa actual",-1)),x("div",Gy,[x("div",{class:"donut-chart status-donut",style:zt(r.statusDonutStyle)},[x("div",Wy,[x("strong",null,be(r.metrics.total),1),e[73]||(e[73]=x("span",null,"Total",-1))])],4),x("div",Xy,[(We(!0),Ye(xt,null,sn(r.statusChart,a=>(We(),Ye("div",{key:a.key,class:"chart-list-row"},[x("span",null,[x("i",{class:"legend-swatch",style:zt({background:a.color})},null,4),dt(be(a.label),1)]),x("strong",null,[dt(be(a.value)+" ",1),x("small",null,be(a.percentage)+"%",1)])]))),128))])])])])):un("",!0),s.activeView==="base-datos"?(We(),Ye("section",Yy,[x("div",qy,[e[78]||(e[78]=x("h2",null,"Base de Datos de Componentes",-1)),x("div",Ky,[x("button",{class:"table-btn",type:"button",disabled:!s.isOwner,onClick:e[20]||(e[20]=(...a)=>r.addRow&&r.addRow(...a))},[x("img",{class:"btn-icon",src:s.icons.add,alt:"","aria-hidden":"true"},null,8,Jy),e[76]||(e[76]=dt("Agregar componente",-1))],8,Zy),x("button",{class:"table-btn",type:"button",disabled:!s.isOwner,onClick:e[21]||(e[21]=(...a)=>r.resetDb&&r.resetDb(...a))},[x("img",{class:"btn-icon",src:s.icons.database,alt:"","aria-hidden":"true"},null,8,Qy),e[77]||(e[77]=dt("Restaurar datos",-1))],8,$y)])]),x("p",{class:Ct(["readonly-note",{visible:!s.isOwner}]),style:{margin:"0 14px 10px"}}," Modo solo lectura: solo el propietario puede editar la base de datos. ",2),x("div",jy,[x("table",null,[e[80]||(e[80]=x("thead",null,[x("tr",null,[x("th",null,"Orden"),x("th",null,"Componente"),x("th",null,"Serie"),x("th",null,"Taller"),x("th",null,"Ultimo Overhaul"),x("th",null,"Asignado TBO (hrs)"),x("th",null,"Asignado TBO (años)"),x("th",null,"Consumido TBO hrs"),x("th",null,"Consumido TBO años"),x("th",null,"Asignado TSN (hrs)"),x("th",null,"Asignado TSN (años)"),x("th",null,"Consumido TSN hrs"),x("th",null,"Consumido TSN años"),x("th",null,"Remanente TBO (hrs)"),x("th",null,"Remanente TBO (años)"),x("th",null,"Remanente TSN (hrs)"),x("th",null,"Remanente TSN (años)"),x("th",null,"Notas"),x("th",null,"Vencimiento"),x("th",null,"Estado"),x("th",null,"Accion")])],-1)),x("tbody",null,[(We(!0),Ye(xt,null,sn(r.currentRows,(a,o)=>(We(),Ye("tr",{key:`${r.currentAircraft.id}-${o}`,class:Ct({"dragging-row":s.draggingRowIndex===o}),onDragover:e[23]||(e[23]=Di(()=>{},["prevent"])),onDrop:Di(l=>r.dropRow(o),["prevent"])},[x("td",tE,[x("button",{class:"row-drag-handle",type:"button",draggable:"true","aria-label":"Arrastrar componente",disabled:!s.isOwner,onDragstart:l=>r.startRowDrag(l,o),onDragend:e[22]||(e[22]=(...l)=>r.finishRowDrag&&r.finishRowDrag(...l))}," ⋮⋮ ",40,nE)]),x("td",null,[x("div",iE,[x("span",{class:Ct(["component-logo",r.categoryClass(a)])},be(r.componentLogo(a)),3),vt(x("input",{"onUpdate:modelValue":l=>a.component=l,class:"cell-input",disabled:!s.isOwner,onChange:l=>r.saveRowFieldChange(a,"Componente")},null,40,sE),[[yt,a.component]])])]),x("td",null,[vt(x("input",{"onUpdate:modelValue":l=>a.series=l,class:"cell-input",disabled:!s.isOwner,onChange:l=>r.saveRowFieldChange(a,"Serie")},null,40,rE),[[yt,a.series]])]),x("td",null,[vt(x("input",{"onUpdate:modelValue":l=>a.workshop=l,class:"cell-input",disabled:!s.isOwner,onChange:l=>r.saveRowFieldChange(a,"Taller")},null,40,aE),[[yt,a.workshop]])]),x("td",null,[vt(x("input",{"onUpdate:modelValue":l=>a.overhaul=l,class:"cell-input",disabled:!s.isOwner,onInput:l=>r.updateAllDerived(a),onChange:l=>r.saveRowFieldChange(a,"Ultimo overhaul","all")},null,40,oE),[[yt,a.overhaul]])]),x("td",null,[vt(x("input",{"onUpdate:modelValue":l=>a.assignedTboHours=l,class:"cell-input numeric-input",disabled:!s.isOwner,onInput:l=>r.updateTboDerived(a),onChange:l=>r.saveRowFieldChange(a,"Asignado TBO horas","tbo")},null,40,lE),[[yt,a.assignedTboHours]])]),x("td",null,[vt(x("input",{"onUpdate:modelValue":l=>a.assignedTboYears=l,class:"cell-input numeric-input",disabled:!s.isOwner,onInput:l=>r.updateTboDerived(a),onChange:l=>r.saveRowFieldChange(a,"Asignado TBO años","tbo")},null,40,cE),[[yt,a.assignedTboYears]])]),x("td",null,[vt(x("input",{"onUpdate:modelValue":l=>a.consumedTboHours=l,class:"cell-input numeric-input",disabled:!s.isOwner,onInput:l=>r.updateTboDerived(a),onChange:l=>r.saveRowFieldChange(a,"Consumido TBO horas","tbo")},null,40,uE),[[yt,a.consumedTboHours]])]),x("td",null,[vt(x("input",{"onUpdate:modelValue":l=>a.consumedTboYears=l,class:"cell-input numeric-input calculated-input",disabled:"",readonly:""},null,8,dE),[[yt,a.consumedTboYears]])]),x("td",null,[vt(x("input",{"onUpdate:modelValue":l=>a.assignedTsnHours=l,class:"cell-input numeric-input",disabled:!s.isOwner,onInput:l=>r.updateTsnDerived(a),onChange:l=>r.saveRowFieldChange(a,"Asignado TSN horas","tsn")},null,40,fE),[[yt,a.assignedTsnHours]])]),x("td",null,[vt(x("input",{"onUpdate:modelValue":l=>a.assignedTsnYears=l,class:"cell-input numeric-input",disabled:!s.isOwner,onInput:l=>r.updateTsnDerived(a),onChange:l=>r.saveRowFieldChange(a,"Asignado TSN años","tsn")},null,40,hE),[[yt,a.assignedTsnYears]])]),x("td",null,[vt(x("input",{"onUpdate:modelValue":l=>a.consumedTsnHours=l,class:"cell-input numeric-input",disabled:!s.isOwner,onInput:l=>r.updateTsnDerived(a),onChange:l=>r.saveRowFieldChange(a,"Consumido TSN horas","tsn")},null,40,pE),[[yt,a.consumedTsnHours]])]),x("td",null,[vt(x("input",{"onUpdate:modelValue":l=>a.consumedTsnYears=l,class:"cell-input numeric-input calculated-input",disabled:"",readonly:""},null,8,mE),[[yt,a.consumedTsnYears]])]),x("td",null,[vt(x("input",{"onUpdate:modelValue":l=>a.remainingTboHours=l,class:"cell-input numeric-input calculated-input",disabled:"",readonly:""},null,8,gE),[[yt,a.remainingTboHours]])]),x("td",null,[vt(x("input",{"onUpdate:modelValue":l=>a.remainingTboYears=l,class:"cell-input numeric-input calculated-input",disabled:"",readonly:""},null,8,_E),[[yt,a.remainingTboYears]])]),x("td",null,[vt(x("input",{"onUpdate:modelValue":l=>a.remainingTsnHours=l,class:"cell-input numeric-input calculated-input",disabled:"",readonly:""},null,8,vE),[[yt,a.remainingTsnHours]])]),x("td",null,[vt(x("input",{"onUpdate:modelValue":l=>a.remainingTsnYears=l,class:"cell-input numeric-input calculated-input",disabled:"",readonly:""},null,8,xE),[[yt,a.remainingTsnYears]])]),x("td",null,[vt(x("textarea",{"onUpdate:modelValue":l=>a.notes=l,class:"cell-input notes-input",disabled:!s.isOwner,maxlength:"360",placeholder:"Notas del componente",onChange:l=>r.saveRowFieldChange(a,"Notas")},null,40,SE),[[yt,a.notes]])]),x("td",null,[vt(x("input",{"onUpdate:modelValue":l=>a.due=l,class:"cell-input calculated-input",disabled:"",readonly:""},null,8,ME),[[yt,a.due]])]),x("td",null,[x("span",{class:Ct(["status",r.statusClass(a)])},be(r.getStatus(a)),3)]),x("td",null,[x("button",{class:"table-btn danger-btn",type:"button",disabled:!s.isOwner,onClick:l=>r.deleteRow(o)},[x("img",{class:"btn-icon",src:s.icons.delete,alt:"","aria-hidden":"true"},null,8,yE),e[79]||(e[79]=dt("Eliminar",-1))],8,bE)])],42,eE))),128))])])])],512)):un("",!0),s.activeView==="alertas"?(We(),Ye("section",EE,[x("div",TE,[x("article",AE,[e[81]||(e[81]=x("p",null,"Overhaul Requerido",-1)),x("b",wE,be(r.metrics.critical),1)]),x("article",RE,[e[82]||(e[82]=x("p",null,"Alertas Preventivas",-1)),x("b",CE,be(r.metrics.alert),1)]),x("article",PE,[e[83]||(e[83]=x("p",null,"Proximos 90 dias",-1)),x("b",DE,be(r.metrics.dueIn90),1)]),x("article",LE,[e[84]||(e[84]=x("p",null,"Proximos 180 dias",-1)),x("b",IE,be(r.metrics.dueIn180),1)]),x("article",UE,[e[85]||(e[85]=x("p",null,"Riesgo Global",-1)),x("b",{style:zt({color:r.riskLabel.color})},be(r.metrics.risk)+"%",5)])]),x("article",NE,[e[86]||(e[86]=x("h2",null,"Componentes en Alerta",-1)),e[87]||(e[87]=x("p",{class:"panel-sub"},"Elementos con vencimiento cercano o recursos consumidos",-1)),x("ul",FE,[(We(!0),Ye(xt,null,sn(r.alertRows,a=>(We(),Ye("li",{key:a.key},[x("span",null,be(a.component),1),x("span",{class:Ct(["date",a.className])},be(a.status),3)]))),128))])])])):un("",!0),s.activeView==="calendario"?(We(),Ye("section",OE,[x("h2",BE,[x("img",{src:s.icons.due,alt:"","aria-hidden":"true"},null,8,HE),e[88]||(e[88]=dt("Calendario de Vencimientos",-1))]),e[89]||(e[89]=x("p",{class:"panel-sub"},"Proximos controles por fecha",-1)),x("ul",VE,[(We(!0),Ye(xt,null,sn(r.dueEvents,a=>(We(),Ye("li",{key:a.key},[x("span",null,be(a.component),1),x("span",{class:Ct(["date",a.className])},be(a.due),3)]))),128))])])):un("",!0),s.activeView==="historial"?(We(),Ye("section",zE,[e[91]||(e[91]=x("div",{class:"table-title"},[x("div",null,[x("h2",null,"Historial"),x("p",{class:"panel-sub"},"Ultimos 20 cambios del sistema y registro de overhaul")])],-1)),x("div",kE,[(We(!0),Ye(xt,null,sn(r.recentChanges,a=>(We(),Ye("article",{key:a.id,class:"change-item"},[x("div",null,[x("strong",null,be(a.action),1),x("p",null,be(a.detail),1)]),x("span",null,be(r.formatChangeDate(a.timestamp)),1)]))),128)),r.recentChanges.length===0?(We(),Ye("p",GE,"Aun no hay cambios registrados.")):un("",!0)]),e[92]||(e[92]=x("div",{class:"history-section-title"},"Historial de Overhaul",-1)),x("div",WE,[x("table",XE,[e[90]||(e[90]=x("thead",null,[x("tr",null,[x("th",null,"Componente"),x("th",null,"Serie"),x("th",null,"Taller"),x("th",null,"Ultimo Overhaul"),x("th",null,"Vencimiento"),x("th",null,"Estado")])],-1)),x("tbody",null,[(We(!0),Ye(xt,null,sn(r.historyRows,a=>(We(),Ye("tr",{key:a.key},[x("td",null,be(a.component),1),x("td",null,be(a.series),1),x("td",null,be(a.workshop),1),x("td",null,be(a.overhaul),1),x("td",null,be(a.due),1),x("td",null,[x("span",{class:Ct(["status",a.statusClass])},be(a.status),3)])]))),128))])])])])):un("",!0)],64)):un("",!0),x("footer",null,be(new Date().getFullYear())+" Sistema de Gestion de Recursos Aeronauticos · "+be(r.currentAircraft?r.currentAircraft.code:"PNP-501")+" · Todos los derechos reservados ",1)])])):(We(),Ye("section",CM,[x("canvas",PM,null,512),x("form",{class:"login-card",onSubmit:e[4]||(e[4]=Di((...a)=>r.signInWithEmail&&r.signInWithEmail(...a),["prevent"]))},[e[25]||(e[25]=x("div",{class:"login-brand"},[x("p",null,"DIVMAAER"),x("h1",null,"Control de Calidad")],-1)),e[26]||(e[26]=x("label",{for:"login-email"},"Correo",-1)),vt(x("input",{id:"login-email","onUpdate:modelValue":e[0]||(e[0]=a=>s.loginEmail=a),class:"login-input",type:"email",autocomplete:"username",placeholder:"correo@ejemplo.com",disabled:s.authBusy},null,8,DM),[[yt,s.loginEmail,void 0,{trim:!0}]]),e[27]||(e[27]=x("label",{for:"login-password"},"Contrasena",-1)),vt(x("input",{id:"login-password","onUpdate:modelValue":e[1]||(e[1]=a=>s.loginPassword=a),class:"login-input",type:"password",autocomplete:"current-password",placeholder:"Contrasena",disabled:s.authBusy},null,8,LM),[[yt,s.loginPassword]]),x("div",IM,[x("button",{class:"login-btn primary",type:"submit",disabled:s.authBusy||!s.authReady},[x("img",{class:"btn-icon",src:s.icons.login,alt:"","aria-hidden":"true"},null,8,NM),dt(" "+be(s.authBusy?"Procesando...":"Ingresar"),1)],8,UM),x("button",{class:"login-btn",type:"button",disabled:s.authBusy||!s.authReady,onClick:e[2]||(e[2]=(...a)=>r.createEmailUser&&r.createEmailUser(...a))},[x("img",{class:"btn-icon",src:s.icons.user,alt:"","aria-hidden":"true"},null,8,OM),e[24]||(e[24]=dt(" Crear cuenta ",-1))],8,FM)]),x("button",{class:"login-link-btn",type:"button",disabled:s.authBusy||!s.authReady,onClick:e[3]||(e[3]=(...a)=>r.sendPasswordReset&&r.sendPasswordReset(...a))}," Restablecer contrasena ",8,BM),x("p",{class:Ct(["login-hint",{error:s.authHintError}])},be(s.authHint),3)],32)]))],2)}const qE=xM(RM,[["render",YE]]);Vm(qE).mount("#app");
