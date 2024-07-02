(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))g(m);new MutationObserver(m=>{for(const w of m)if(w.type==="childList")for(const b of w.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&g(b)}).observe(document,{childList:!0,subtree:!0});function u(m){const w={};return m.integrity&&(w.integrity=m.integrity),m.referrerPolicy&&(w.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?w.credentials="include":m.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function g(m){if(m.ep)return;m.ep=!0;const w=u(m);fetch(m.href,w)}})();/**
* @vue/shared v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Pl(s,c){const u=new Set(s.split(","));return g=>u.has(g)}const kt={},Fr=[],_n=()=>{},uO=()=>!1,Ca=s=>s.charCodeAt(0)===111&&s.charCodeAt(1)===110&&(s.charCodeAt(2)>122||s.charCodeAt(2)<97),gg=s=>s.startsWith("onUpdate:"),Mt=Object.assign,pg=(s,c)=>{const u=s.indexOf(c);u>-1&&s.splice(u,1)},hO=Object.prototype.hasOwnProperty,ut=(s,c)=>hO.call(s,c),Pe=Array.isArray,Vr=s=>os(s)==="[object Map]",nr=s=>os(s)==="[object Set]",FC=s=>os(s)==="[object Date]",gO=s=>os(s)==="[object RegExp]",$e=s=>typeof s=="function",Bt=s=>typeof s=="string",Ao=s=>typeof s=="symbol",Ct=s=>s!==null&&typeof s=="object",mg=s=>(Ct(s)||$e(s))&&$e(s.then)&&$e(s.catch),a1=Object.prototype.toString,os=s=>a1.call(s),pO=s=>os(s).slice(8,-1),c1=s=>os(s)==="[object Object]",fg=s=>Bt(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,Ur=Pl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Nl=s=>{const c=Object.create(null);return u=>c[u]||(c[u]=s(u))},mO=/-(\w)/g,hn=Nl(s=>s.replace(mO,(c,u)=>u?u.toUpperCase():"")),fO=/\B([A-Z])/g,Nn=Nl(s=>s.replace(fO,"-$1").toLowerCase()),va=Nl(s=>s.charAt(0).toUpperCase()+s.slice(1)),oa=Nl(s=>s?`on${va(s)}`:""),co=(s,c)=>!Object.is(s,c),Hr=(s,...c)=>{for(let u=0;u<s.length;u++)s[u](...c)},l1=(s,c,u,g=!1)=>{Object.defineProperty(s,c,{configurable:!0,enumerable:!1,writable:g,value:u})},bl=s=>{const c=parseFloat(s);return isNaN(c)?s:c},_l=s=>{const c=Bt(s)?Number(s):NaN;return isNaN(c)?s:c};let VC;const d1=()=>VC||(VC=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),kO="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",bO=Pl(kO);function Zi(s){if(Pe(s)){const c={};for(let u=0;u<s.length;u++){const g=s[u],m=Bt(g)?CO(g):Zi(g);if(m)for(const w in m)c[w]=m[w]}return c}else if(Bt(s)||Ct(s))return s}const _O=/;(?![^(]*\))/g,wO=/:([^]+)/,AO=/\/\*[^]*?\*\//g;function CO(s){const c={};return s.replace(AO,"").split(_O).forEach(u=>{if(u){const g=u.split(wO);g.length>1&&(c[g[0].trim()]=g[1].trim())}}),c}function Ne(s){let c="";if(Bt(s))c=s;else if(Pe(s))for(let u=0;u<s.length;u++){const g=Ne(s[u]);g&&(c+=g+" ")}else if(Ct(s))for(const u in s)s[u]&&(c+=u+" ");return c.trim()}function vO(s){if(!s)return null;let{class:c,style:u}=s;return c&&!Bt(c)&&(s.class=Ne(c)),u&&(s.style=Zi(u)),s}const yO="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xO=Pl(yO);function u1(s){return!!s||s===""}function EO(s,c){if(s.length!==c.length)return!1;let u=!0;for(let g=0;u&&g<s.length;g++)u=fi(s[g],c[g]);return u}function fi(s,c){if(s===c)return!0;let u=FC(s),g=FC(c);if(u||g)return u&&g?s.getTime()===c.getTime():!1;if(u=Ao(s),g=Ao(c),u||g)return s===c;if(u=Pe(s),g=Pe(c),u||g)return u&&g?EO(s,c):!1;if(u=Ct(s),g=Ct(c),u||g){if(!u||!g)return!1;const m=Object.keys(s).length,w=Object.keys(c).length;if(m!==w)return!1;for(const b in s){const _=s.hasOwnProperty(b),f=c.hasOwnProperty(b);if(_&&!f||!_&&f||!fi(s[b],c[b]))return!1}}return String(s)===String(c)}function Ol(s,c){return s.findIndex(u=>fi(u,c))}const Ze=s=>Bt(s)?s:s==null?"":Pe(s)||Ct(s)&&(s.toString===a1||!$e(s.toString))?JSON.stringify(s,h1,2):String(s),h1=(s,c)=>c&&c.__v_isRef?h1(s,c.value):Vr(c)?{[`Map(${c.size})`]:[...c.entries()].reduce((u,[g,m],w)=>(u[kh(g,w)+" =>"]=m,u),{})}:nr(c)?{[`Set(${c.size})`]:[...c.values()].map(u=>kh(u))}:Ao(c)?kh(c):Ct(c)&&!Pe(c)&&!c1(c)?String(c):c,kh=(s,c="")=>{var u;return Ao(s)?`Symbol(${(u=s.description)!=null?u:c})`:s};/**
* @vue/reactivity v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bn;class kg{constructor(c=!1){this.detached=c,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Bn,!c&&Bn&&(this.index=(Bn.scopes||(Bn.scopes=[])).push(this)-1)}get active(){return this._active}run(c){if(this._active){const u=Bn;try{return Bn=this,c()}finally{Bn=u}}}on(){Bn=this}off(){Bn=this.parent}stop(c){if(this._active){let u,g;for(u=0,g=this.effects.length;u<g;u++)this.effects[u].stop();for(u=0,g=this.cleanups.length;u<g;u++)this.cleanups[u]();if(this.scopes)for(u=0,g=this.scopes.length;u<g;u++)this.scopes[u].stop(!0);if(!this.detached&&this.parent&&!c){const m=this.parent.scopes.pop();m&&m!==this&&(this.parent.scopes[this.index]=m,m.index=this.index)}this.parent=void 0,this._active=!1}}}function bg(s){return new kg(s)}function g1(s,c=Bn){c&&c.active&&c.effects.push(s)}function _g(){return Bn}function p1(s){Bn&&Bn.cleanups.push(s)}let Wi;class Yr{constructor(c,u,g,m){this.fn=c,this.trigger=u,this.scheduler=g,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,g1(this,m)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,wi();for(let c=0;c<this._depsLength;c++){const u=this.deps[c];if(u.computed){if(u.computed.effect._dirtyLevel===2)return Fo(),!0;if(DO(u.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),Fo()}return this._dirtyLevel>=5}set dirty(c){this._dirtyLevel=c?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let c=pi,u=Wi;try{return pi=!0,Wi=this,this._runnings++,UC(this),this.fn()}finally{HC(this),this._runnings--,Wi=u,pi=c}}stop(){this.active&&(UC(this),HC(this),this.onStop&&this.onStop(),this.active=!1)}}function DO(s){return s.value}function UC(s){s._trackId++,s._depsLength=0}function HC(s){if(s.deps.length>s._depsLength){for(let c=s._depsLength;c<s.deps.length;c++)m1(s.deps[c],s);s.deps.length=s._depsLength}}function m1(s,c){const u=s.get(c);u!==void 0&&c._trackId!==u&&(s.delete(c),s.size===0&&s.cleanup())}function SO(s,c){s.effect instanceof Yr&&(s=s.effect.fn);const u=new Yr(s,_n,()=>{u.dirty&&u.run()});c&&(Mt(u,c),c.scope&&g1(u,c.scope)),(!c||!c.lazy)&&u.run();const g=u.run.bind(u);return g.effect=u,g}function TO(s){s.effect.stop()}let pi=!0,Ph=0;const f1=[];function wi(){f1.push(pi),pi=!1}function Fo(){const s=f1.pop();pi=s===void 0?!0:s}function wg(){Ph++}function Ag(){for(Ph--;!Ph&&Nh.length;)Nh.shift()()}function k1(s,c,u){if(c.get(s)!==s._trackId){c.set(s,s._trackId);const g=s.deps[s._depsLength];g!==c?(g&&m1(g,s),s.deps[s._depsLength++]=c):s._depsLength++}}const Nh=[];function b1(s,c,u){wg();for(const g of s.keys()){let m;if(!s.computed&&g.computed&&g._runnings>0&&(m??(m=s.get(g)===g._trackId))){g._dirtyLevel=2;continue}g._dirtyLevel<c&&(m??(m=s.get(g)===g._trackId))&&(g._shouldSchedule||(g._shouldSchedule=g._dirtyLevel===0),g.computed&&g._dirtyLevel===2&&(g._shouldSchedule=!0),g._dirtyLevel=c),g._shouldSchedule&&(m??(m=s.get(g)===g._trackId))&&(g.trigger(),(!g._runnings||g.allowRecurse)&&g._dirtyLevel!==3&&(g._shouldSchedule=!1,g.scheduler&&Nh.push(g.scheduler)))}Ag()}const _1=(s,c)=>{const u=new Map;return u.cleanup=s,u.computed=c,u},wl=new WeakMap,Gi=Symbol(""),Oh=Symbol("");function Cn(s,c,u){if(pi&&Wi){let g=wl.get(s);g||wl.set(s,g=new Map);let m=g.get(u);m||g.set(u,m=_1(()=>g.delete(u))),k1(Wi,m)}}function zo(s,c,u,g,m,w){const b=wl.get(s);if(!b)return;let _=[];if(c==="clear")_=[...b.values()];else if(u==="length"&&Pe(s)){const f=Number(g);b.forEach((v,x)=>{(x==="length"||!Ao(x)&&x>=f)&&_.push(v)})}else switch(u!==void 0&&_.push(b.get(u)),c){case"add":Pe(s)?fg(u)&&_.push(b.get("length")):(_.push(b.get(Gi)),Vr(s)&&_.push(b.get(Oh)));break;case"delete":Pe(s)||(_.push(b.get(Gi)),Vr(s)&&_.push(b.get(Oh)));break;case"set":Vr(s)&&_.push(b.get(Gi));break}wg();for(const f of _)f&&b1(f,5);Ag()}function IO(s,c){const u=wl.get(s);return u&&u.get(c)}const MO=Pl("__proto__,__v_isRef,__isVue"),w1=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter(Ao)),$C=BO();function BO(){const s={};return["includes","indexOf","lastIndexOf"].forEach(c=>{s[c]=function(...u){const g=it(this);for(let w=0,b=this.length;w<b;w++)Cn(g,"get",w+"");const m=g[c](...u);return m===-1||m===!1?g[c](...u.map(it)):m}}),["push","pop","shift","unshift","splice"].forEach(c=>{s[c]=function(...u){wi(),wg();const g=it(this)[c].apply(this,u);return Ag(),Fo(),g}}),s}function PO(s){Ao(s)||(s=String(s));const c=it(this);return Cn(c,"has",s),c.hasOwnProperty(s)}class A1{constructor(c=!1,u=!1){this._isReadonly=c,this._isShallow=u}get(c,u,g){const m=this._isReadonly,w=this._isShallow;if(u==="__v_isReactive")return!m;if(u==="__v_isReadonly")return m;if(u==="__v_isShallow")return w;if(u==="__v_raw")return g===(m?w?D1:E1:w?x1:y1).get(c)||Object.getPrototypeOf(c)===Object.getPrototypeOf(g)?c:void 0;const b=Pe(c);if(!m){if(b&&ut($C,u))return Reflect.get($C,u,g);if(u==="hasOwnProperty")return PO}const _=Reflect.get(c,u,g);return(Ao(u)?w1.has(u):MO(u))||(m||Cn(c,"get",u),w)?_:$t(_)?b&&fg(u)?_:_.value:Ct(_)?m?yg(_):so(_):_}}class C1 extends A1{constructor(c=!1){super(!1,c)}set(c,u,g,m){let w=c[u];if(!this._isShallow){const f=Qr(w);if(!ha(g)&&!Qr(g)&&(w=it(w),g=it(g)),!Pe(c)&&$t(w)&&!$t(g))return f?!1:(w.value=g,!0)}const b=Pe(c)&&fg(u)?Number(u)<c.length:ut(c,u),_=Reflect.set(c,u,g,m);return c===it(m)&&(b?co(g,w)&&zo(c,"set",u,g):zo(c,"add",u,g)),_}deleteProperty(c,u){const g=ut(c,u);c[u];const m=Reflect.deleteProperty(c,u);return m&&g&&zo(c,"delete",u,void 0),m}has(c,u){const g=Reflect.has(c,u);return(!Ao(u)||!w1.has(u))&&Cn(c,"has",u),g}ownKeys(c){return Cn(c,"iterate",Pe(c)?"length":Gi),Reflect.ownKeys(c)}}class v1 extends A1{constructor(c=!1){super(!0,c)}set(c,u){return!0}deleteProperty(c,u){return!0}}const NO=new C1,OO=new v1,LO=new C1(!0),RO=new v1(!0),Cg=s=>s,Ll=s=>Reflect.getPrototypeOf(s);function Xc(s,c,u=!1,g=!1){s=s.__v_raw;const m=it(s),w=it(c);u||(co(c,w)&&Cn(m,"get",c),Cn(m,"get",w));const{has:b}=Ll(m),_=g?Cg:u?Eg:ga;if(b.call(m,c))return _(s.get(c));if(b.call(m,w))return _(s.get(w));s!==m&&s.get(c)}function el(s,c=!1){const u=this.__v_raw,g=it(u),m=it(s);return c||(co(s,m)&&Cn(g,"has",s),Cn(g,"has",m)),s===m?u.has(s):u.has(s)||u.has(m)}function tl(s,c=!1){return s=s.__v_raw,!c&&Cn(it(s),"iterate",Gi),Reflect.get(s,"size",s)}function qC(s){s=it(s);const c=it(this);return Ll(c).has.call(c,s)||(c.add(s),zo(c,"add",s,s)),this}function WC(s,c){c=it(c);const u=it(this),{has:g,get:m}=Ll(u);let w=g.call(u,s);w||(s=it(s),w=g.call(u,s));const b=m.call(u,s);return u.set(s,c),w?co(c,b)&&zo(u,"set",s,c):zo(u,"add",s,c),this}function GC(s){const c=it(this),{has:u,get:g}=Ll(c);let m=u.call(c,s);m||(s=it(s),m=u.call(c,s)),g&&g.call(c,s);const w=c.delete(s);return m&&zo(c,"delete",s,void 0),w}function KC(){const s=it(this),c=s.size!==0,u=s.clear();return c&&zo(s,"clear",void 0,void 0),u}function nl(s,c){return function(g,m){const w=this,b=w.__v_raw,_=it(b),f=c?Cg:s?Eg:ga;return!s&&Cn(_,"iterate",Gi),b.forEach((v,x)=>g.call(m,f(v),f(x),w))}}function ol(s,c,u){return function(...g){const m=this.__v_raw,w=it(m),b=Vr(w),_=s==="entries"||s===Symbol.iterator&&b,f=s==="keys"&&b,v=m[s](...g),x=u?Cg:c?Eg:ga;return!c&&Cn(w,"iterate",f?Oh:Gi),{next(){const{value:y,done:A}=v.next();return A?{value:y,done:A}:{value:_?[x(y[0]),x(y[1])]:x(y),done:A}},[Symbol.iterator](){return this}}}}function ti(s){return function(...c){return s==="delete"?!1:s==="clear"?void 0:this}}function zO(){const s={get(w){return Xc(this,w)},get size(){return tl(this)},has:el,add:qC,set:WC,delete:GC,clear:KC,forEach:nl(!1,!1)},c={get(w){return Xc(this,w,!1,!0)},get size(){return tl(this)},has:el,add:qC,set:WC,delete:GC,clear:KC,forEach:nl(!1,!0)},u={get(w){return Xc(this,w,!0)},get size(){return tl(this,!0)},has(w){return el.call(this,w,!0)},add:ti("add"),set:ti("set"),delete:ti("delete"),clear:ti("clear"),forEach:nl(!0,!1)},g={get(w){return Xc(this,w,!0,!0)},get size(){return tl(this,!0)},has(w){return el.call(this,w,!0)},add:ti("add"),set:ti("set"),delete:ti("delete"),clear:ti("clear"),forEach:nl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(w=>{s[w]=ol(w,!1,!1),u[w]=ol(w,!0,!1),c[w]=ol(w,!1,!0),g[w]=ol(w,!0,!0)}),[s,u,c,g]}const[jO,FO,VO,UO]=zO();function Rl(s,c){const u=c?s?UO:VO:s?FO:jO;return(g,m,w)=>m==="__v_isReactive"?!s:m==="__v_isReadonly"?s:m==="__v_raw"?g:Reflect.get(ut(u,m)&&m in g?u:g,m,w)}const HO={get:Rl(!1,!1)},$O={get:Rl(!1,!0)},qO={get:Rl(!0,!1)},WO={get:Rl(!0,!0)},y1=new WeakMap,x1=new WeakMap,E1=new WeakMap,D1=new WeakMap;function GO(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function KO(s){return s.__v_skip||!Object.isExtensible(s)?0:GO(pO(s))}function so(s){return Qr(s)?s:zl(s,!1,NO,HO,y1)}function vg(s){return zl(s,!1,LO,$O,x1)}function yg(s){return zl(s,!0,OO,qO,E1)}function YO(s){return zl(s,!0,RO,WO,D1)}function zl(s,c,u,g,m){if(!Ct(s)||s.__v_raw&&!(c&&s.__v_isReactive))return s;const w=m.get(s);if(w)return w;const b=KO(s);if(b===0)return s;const _=new Proxy(s,b===2?g:u);return m.set(s,_),_}function mi(s){return Qr(s)?mi(s.__v_raw):!!(s&&s.__v_isReactive)}function Qr(s){return!!(s&&s.__v_isReadonly)}function ha(s){return!!(s&&s.__v_isShallow)}function xg(s){return s?!!s.__v_raw:!1}function it(s){const c=s&&s.__v_raw;return c?it(c):s}function jl(s){return Object.isExtensible(s)&&l1(s,"__v_skip",!0),s}const ga=s=>Ct(s)?so(s):s,Eg=s=>Ct(s)?yg(s):s;class S1{constructor(c,u,g,m){this.getter=c,this._setter=u,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Yr(()=>c(this._value),()=>$r(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!m,this.__v_isReadonly=g}get value(){const c=it(this),u=c.effect._dirtyLevel;return(!c._cacheable||c.effect.dirty)&&co(c._value,c._value=c.effect.run())&&u!==3&&$r(c,5),Dg(c),c.effect._dirtyLevel>=2&&$r(c,3),c._value}set value(c){this._setter(c)}get _dirty(){return this.effect.dirty}set _dirty(c){this.effect.dirty=c}}function QO(s,c,u=!1){let g,m;const w=$e(s);return w?(g=s,m=_n):(g=s.get,m=s.set),new S1(g,m,w||!m,u)}function Dg(s){var c;pi&&Wi&&(s=it(s),k1(Wi,(c=s.dep)!=null?c:s.dep=_1(()=>s.dep=void 0,s instanceof S1?s:void 0)))}function $r(s,c=5,u,g){s=it(s);const m=s.dep;m&&b1(m,c)}function $t(s){return!!(s&&s.__v_isRef===!0)}function fe(s){return I1(s,!1)}function T1(s){return I1(s,!0)}function I1(s,c){return $t(s)?s:new ZO(s,c)}class ZO{constructor(c,u){this.__v_isShallow=u,this.dep=void 0,this.__v_isRef=!0,this._rawValue=u?c:it(c),this._value=u?c:ga(c)}get value(){return Dg(this),this._value}set value(c){const u=this.__v_isShallow||ha(c)||Qr(c);c=u?c:it(c),co(c,this._rawValue)&&(this._rawValue,this._rawValue=c,this._value=u?c:ga(c),$r(this,5))}}function JO(s){$r(s,5)}function Xe(s){return $t(s)?s.value:s}function XO(s){return $e(s)?s():Xe(s)}const eL={get:(s,c,u)=>Xe(Reflect.get(s,c,u)),set:(s,c,u,g)=>{const m=s[c];return $t(m)&&!$t(u)?(m.value=u,!0):Reflect.set(s,c,u,g)}};function Sg(s){return mi(s)?s:new Proxy(s,eL)}class tL{constructor(c){this.dep=void 0,this.__v_isRef=!0;const{get:u,set:g}=c(()=>Dg(this),()=>$r(this));this._get=u,this._set=g}get value(){return this._get()}set value(c){this._set(c)}}function M1(s){return new tL(s)}function B1(s){const c=Pe(s)?new Array(s.length):{};for(const u in s)c[u]=P1(s,u);return c}class nL{constructor(c,u,g){this._object=c,this._key=u,this._defaultValue=g,this.__v_isRef=!0}get value(){const c=this._object[this._key];return c===void 0?this._defaultValue:c}set value(c){this._object[this._key]=c}get dep(){return IO(it(this._object),this._key)}}class oL{constructor(c){this._getter=c,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function iL(s,c,u){return $t(s)?s:$e(s)?new oL(s):Ct(s)&&arguments.length>1?P1(s,c,u):fe(s)}function P1(s,c,u){const g=s[c];return $t(g)?g:new nL(s,c,u)}const rL={GET:"get",HAS:"has",ITERATE:"iterate"},sL={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function aL(s,c){}const cL={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},lL={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function jo(s,c,u,g){try{return g?s(...g):s()}catch(m){or(m,c,u)}}function On(s,c,u,g){if($e(s)){const m=jo(s,c,u,g);return m&&mg(m)&&m.catch(w=>{or(w,c,u)}),m}if(Pe(s)){const m=[];for(let w=0;w<s.length;w++)m.push(On(s[w],c,u,g));return m}}function or(s,c,u,g=!0){const m=c?c.vnode:null;if(c){let w=c.parent;const b=c.proxy,_=`https://vuejs.org/error-reference/#runtime-${u}`;for(;w;){const v=w.ec;if(v){for(let x=0;x<v.length;x++)if(v[x](s,b,_)===!1)return}w=w.parent}const f=c.appContext.config.errorHandler;if(f){wi(),jo(f,null,10,[s,b,_]),Fo();return}}dL(s,u,m,g)}function dL(s,c,u,g=!0){console.error(s)}let pa=!1,Lh=!1;const an=[];let _o=0;const qr=[];let ci=null,qi=0;const N1=Promise.resolve();let Tg=null;function is(s){const c=Tg||N1;return s?c.then(this?s.bind(this):s):c}function uL(s){let c=_o+1,u=an.length;for(;c<u;){const g=c+u>>>1,m=an[g],w=ma(m);w<s||w===s&&m.pre?c=g+1:u=g}return c}function Fl(s){(!an.length||!an.includes(s,pa&&s.allowRecurse?_o+1:_o))&&(s.id==null?an.push(s):an.splice(uL(s.id),0,s),O1())}function O1(){!pa&&!Lh&&(Lh=!0,Tg=N1.then(L1))}function hL(s){const c=an.indexOf(s);c>_o&&an.splice(c,1)}function Al(s){Pe(s)?qr.push(...s):(!ci||!ci.includes(s,s.allowRecurse?qi+1:qi))&&qr.push(s),O1()}function YC(s,c,u=pa?_o+1:0){for(;u<an.length;u++){const g=an[u];if(g&&g.pre){if(s&&g.id!==s.uid)continue;an.splice(u,1),u--,g()}}}function Cl(s){if(qr.length){const c=[...new Set(qr)].sort((u,g)=>ma(u)-ma(g));if(qr.length=0,ci){ci.push(...c);return}for(ci=c,qi=0;qi<ci.length;qi++){const u=ci[qi];u.active!==!1&&u()}ci=null,qi=0}}const ma=s=>s.id==null?1/0:s.id,gL=(s,c)=>{const u=ma(s)-ma(c);if(u===0){if(s.pre&&!c.pre)return-1;if(c.pre&&!s.pre)return 1}return u};function L1(s){Lh=!1,pa=!0,an.sort(gL);try{for(_o=0;_o<an.length;_o++){const c=an[_o];c&&c.active!==!1&&jo(c,null,14)}}finally{_o=0,an.length=0,Cl(),pa=!1,Tg=null,(an.length||qr.length)&&L1()}}let zr,il=[];function R1(s,c){var u,g;zr=s,zr?(zr.enabled=!0,il.forEach(({event:m,args:w})=>zr.emit(m,...w)),il=[]):typeof window<"u"&&window.HTMLElement&&!((g=(u=window.navigator)==null?void 0:u.userAgent)!=null&&g.includes("jsdom"))?((c.__VUE_DEVTOOLS_HOOK_REPLAY__=c.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(w=>{R1(w,c)}),setTimeout(()=>{zr||(c.__VUE_DEVTOOLS_HOOK_REPLAY__=null,il=[])},3e3)):il=[]}function pL(s,c,...u){if(s.isUnmounted)return;const g=s.vnode.props||kt;let m=u;const w=c.startsWith("update:"),b=w&&c.slice(7);if(b&&b in g){const x=`${b==="modelValue"?"model":b}Modifiers`,{number:y,trim:A}=g[x]||kt;A&&(m=u.map(E=>Bt(E)?E.trim():E)),y&&(m=u.map(bl))}let _,f=g[_=oa(c)]||g[_=oa(hn(c))];!f&&w&&(f=g[_=oa(Nn(c))]),f&&On(f,s,6,m);const v=g[_+"Once"];if(v){if(!s.emitted)s.emitted={};else if(s.emitted[_])return;s.emitted[_]=!0,On(v,s,6,m)}}function z1(s,c,u=!1){const g=c.emitsCache,m=g.get(s);if(m!==void 0)return m;const w=s.emits;let b={},_=!1;if(!$e(s)){const f=v=>{const x=z1(v,c,!0);x&&(_=!0,Mt(b,x))};!u&&c.mixins.length&&c.mixins.forEach(f),s.extends&&f(s.extends),s.mixins&&s.mixins.forEach(f)}return!w&&!_?(Ct(s)&&g.set(s,null),null):(Pe(w)?w.forEach(f=>b[f]=null):Mt(b,w),Ct(s)&&g.set(s,b),b)}function Vl(s,c){return!s||!Ca(c)?!1:(c=c.slice(2).replace(/Once$/,""),ut(s,c[0].toLowerCase()+c.slice(1))||ut(s,Nn(c))||ut(s,c))}let Zt=null,Ul=null;function fa(s){const c=Zt;return Zt=s,Ul=s&&s.type.__scopeId||null,c}function mL(s){Ul=s}function fL(){Ul=null}const kL=s=>Lo;function Lo(s,c=Zt,u){if(!c||s._n)return s;const g=(...m)=>{g._d&&qh(-1);const w=fa(c);let b;try{b=s(...m)}finally{fa(w),g._d&&qh(1)}return b};return g._n=!0,g._c=!0,g._d=!0,g}function gl(s){const{type:c,vnode:u,proxy:g,withProxy:m,propsOptions:[w],slots:b,attrs:_,emit:f,render:v,renderCache:x,props:y,data:A,setupState:E,ctx:M,inheritAttrs:P}=s,z=fa(s);let F,j;try{if(u.shapeFlag&4){const H=m||g,q=H;F=Pn(v.call(q,H,x,y,E,A,M)),j=_}else{const H=c;F=Pn(H.length>1?H(y,{attrs:_,slots:b,emit:f}):H(y,null)),j=c.props?_:_L(_)}}catch(H){aa.length=0,or(H,s,1),F=Be(on)}let O=F;if(j&&P!==!1){const H=Object.keys(j),{shapeFlag:q}=O;H.length&&q&7&&(w&&H.some(gg)&&(j=wL(j,w)),O=Co(O,j,!1,!0))}return u.dirs&&(O=Co(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(u.dirs):u.dirs),u.transition&&(O.transition=u.transition),F=O,fa(z),F}function bL(s,c=!0){let u;for(let g=0;g<s.length;g++){const m=s[g];if(bi(m)){if(m.type!==on||m.children==="v-if"){if(u)return;u=m}}else return}return u}const _L=s=>{let c;for(const u in s)(u==="class"||u==="style"||Ca(u))&&((c||(c={}))[u]=s[u]);return c},wL=(s,c)=>{const u={};for(const g in s)(!gg(g)||!(g.slice(9)in c))&&(u[g]=s[g]);return u};function AL(s,c,u){const{props:g,children:m,component:w}=s,{props:b,children:_,patchFlag:f}=c,v=w.emitsOptions;if(c.dirs||c.transition)return!0;if(u&&f>=0){if(f&1024)return!0;if(f&16)return g?QC(g,b,v):!!b;if(f&8){const x=c.dynamicProps;for(let y=0;y<x.length;y++){const A=x[y];if(b[A]!==g[A]&&!Vl(v,A))return!0}}}else return(m||_)&&(!_||!_.$stable)?!0:g===b?!1:g?b?QC(g,b,v):!0:!!b;return!1}function QC(s,c,u){const g=Object.keys(c);if(g.length!==Object.keys(s).length)return!0;for(let m=0;m<g.length;m++){const w=g[m];if(c[w]!==s[w]&&!Vl(u,w))return!0}return!1}function Ig({vnode:s,parent:c},u){for(;c;){const g=c.subTree;if(g.suspense&&g.suspense.activeBranch===s&&(g.el=s.el),g===s)(s=c.vnode).el=u,c=c.parent;else break}}const Mg="components",CL="directives";function Bg(s,c){return Pg(Mg,s,!0,c)||s}const j1=Symbol.for("v-ndc");function vL(s){return Bt(s)?Pg(Mg,s,!1)||s:s||j1}function yL(s){return Pg(CL,s)}function Pg(s,c,u=!0,g=!1){const m=Zt||Qt;if(m){const w=m.type;if(s===Mg){const _=Qh(w,!1);if(_&&(_===c||_===hn(c)||_===va(hn(c))))return w}const b=ZC(m[s]||w[s],c)||ZC(m.appContext[s],c);return!b&&g?w:b}}function ZC(s,c){return s&&(s[c]||s[hn(c)]||s[va(hn(c))])}const Rh=s=>s.__isSuspense;let zh=0;const xL={name:"Suspense",__isSuspense:!0,process(s,c,u,g,m,w,b,_,f,v){if(s==null)DL(c,u,g,m,w,b,_,f,v);else{if(w&&w.deps>0&&!s.suspense.isInFallback){c.suspense=s.suspense,c.suspense.vnode=c,c.el=s.el;return}SL(s,c,u,g,m,b,_,f,v)}},hydrate:TL,normalize:IL},EL=xL;function ka(s,c){const u=s.props&&s.props[c];$e(u)&&u()}function DL(s,c,u,g,m,w,b,_,f){const{p:v,o:{createElement:x}}=f,y=x("div"),A=s.suspense=F1(s,m,g,c,y,u,w,b,_,f);v(null,A.pendingBranch=s.ssContent,y,null,g,A,w,b),A.deps>0?(ka(s,"onPending"),ka(s,"onFallback"),v(null,s.ssFallback,c,u,g,null,w,b),Wr(A,s.ssFallback)):A.resolve(!1,!0)}function SL(s,c,u,g,m,w,b,_,{p:f,um:v,o:{createElement:x}}){const y=c.suspense=s.suspense;y.vnode=c,c.el=s.el;const A=c.ssContent,E=c.ssFallback,{activeBranch:M,pendingBranch:P,isInFallback:z,isHydrating:F}=y;if(P)y.pendingBranch=A,ro(A,P)?(f(P,A,y.hiddenContainer,null,m,y,w,b,_),y.deps<=0?y.resolve():z&&(F||(f(M,E,u,g,m,null,w,b,_),Wr(y,E)))):(y.pendingId=zh++,F?(y.isHydrating=!1,y.activeBranch=P):v(P,m,y),y.deps=0,y.effects.length=0,y.hiddenContainer=x("div"),z?(f(null,A,y.hiddenContainer,null,m,y,w,b,_),y.deps<=0?y.resolve():(f(M,E,u,g,m,null,w,b,_),Wr(y,E))):M&&ro(A,M)?(f(M,A,u,g,m,y,w,b,_),y.resolve(!0)):(f(null,A,y.hiddenContainer,null,m,y,w,b,_),y.deps<=0&&y.resolve()));else if(M&&ro(A,M))f(M,A,u,g,m,y,w,b,_),Wr(y,A);else if(ka(c,"onPending"),y.pendingBranch=A,A.shapeFlag&512?y.pendingId=A.component.suspenseId:y.pendingId=zh++,f(null,A,y.hiddenContainer,null,m,y,w,b,_),y.deps<=0)y.resolve();else{const{timeout:j,pendingId:O}=y;j>0?setTimeout(()=>{y.pendingId===O&&y.fallback(E)},j):j===0&&y.fallback(E)}}function F1(s,c,u,g,m,w,b,_,f,v,x=!1){const{p:y,m:A,um:E,n:M,o:{parentNode:P,remove:z}}=v;let F;const j=ML(s);j&&c&&c.pendingBranch&&(F=c.pendingId,c.deps++);const O=s.props?_l(s.props.timeout):void 0,H=w,q={vnode:s,parent:c,parentComponent:u,namespace:b,container:g,hiddenContainer:m,deps:0,pendingId:zh++,timeout:typeof O=="number"?O:-1,activeBranch:null,pendingBranch:null,isInFallback:!x,isHydrating:x,isUnmounted:!1,effects:[],resolve(G=!1,I=!1){const{vnode:V,activeBranch:W,pendingBranch:K,pendingId:le,effects:J,parentComponent:he,container:Ae}=q;let be=!1;q.isHydrating?q.isHydrating=!1:G||(be=W&&K.transition&&K.transition.mode==="out-in",be&&(W.transition.afterLeave=()=>{le===q.pendingId&&(A(K,Ae,w===H?M(W):w,0),Al(J))}),W&&(P(W.el)!==q.hiddenContainer&&(w=M(W)),E(W,he,q,!0)),be||A(K,Ae,w,0)),Wr(q,K),q.pendingBranch=null,q.isInFallback=!1;let Y=q.parent,ne=!1;for(;Y;){if(Y.pendingBranch){Y.effects.push(...J),ne=!0;break}Y=Y.parent}!ne&&!be&&Al(J),q.effects=[],j&&c&&c.pendingBranch&&F===c.pendingId&&(c.deps--,c.deps===0&&!I&&c.resolve()),ka(V,"onResolve")},fallback(G){if(!q.pendingBranch)return;const{vnode:I,activeBranch:V,parentComponent:W,container:K,namespace:le}=q;ka(I,"onFallback");const J=M(V),he=()=>{q.isInFallback&&(y(null,G,K,J,W,null,le,_,f),Wr(q,G))},Ae=G.transition&&G.transition.mode==="out-in";Ae&&(V.transition.afterLeave=he),q.isInFallback=!0,E(V,W,null,!0),Ae||he()},move(G,I,V){q.activeBranch&&A(q.activeBranch,G,I,V),q.container=G},next(){return q.activeBranch&&M(q.activeBranch)},registerDep(G,I,V){const W=!!q.pendingBranch;W&&q.deps++;const K=G.vnode.el;G.asyncDep.catch(le=>{or(le,G,0)}).then(le=>{if(G.isUnmounted||q.isUnmounted||q.pendingId!==G.suspenseId)return;G.asyncResolved=!0;const{vnode:J}=G;Kh(G,le,!1),K&&(J.el=K);const he=!K&&G.subTree.el;I(G,J,P(K||G.subTree.el),K?null:M(G.subTree),q,b,V),he&&z(he),Ig(G,J.el),W&&--q.deps===0&&q.resolve()})},unmount(G,I){q.isUnmounted=!0,q.activeBranch&&E(q.activeBranch,u,G,I),q.pendingBranch&&E(q.pendingBranch,u,G,I)}};return q}function TL(s,c,u,g,m,w,b,_,f){const v=c.suspense=F1(c,g,u,s.parentNode,document.createElement("div"),null,m,w,b,_,!0),x=f(s,v.pendingBranch=c.ssContent,u,v,w,b);return v.deps===0&&v.resolve(!1,!0),x}function IL(s){const{shapeFlag:c,children:u}=s,g=c&32;s.ssContent=JC(g?u.default:u),s.ssFallback=g?JC(u.fallback):Be(on)}function JC(s){let c;if($e(s)){const u=Xi&&s._c;u&&(s._d=!1,ce()),s=s(),u&&(s._d=!0,c=wn,xy())}return Pe(s)&&(s=bL(s)),s=Pn(s),c&&!s.dynamicChildren&&(s.dynamicChildren=c.filter(u=>u!==s)),s}function V1(s,c){c&&c.pendingBranch?Pe(s)?c.effects.push(...s):c.effects.push(s):Al(s)}function Wr(s,c){s.activeBranch=c;const{vnode:u,parentComponent:g}=s;let m=c.el;for(;!m&&c.component;)c=c.component.subTree,m=c.el;u.el=m,g&&g.subTree===u&&(g.vnode.el=m,Ig(g,m))}function ML(s){const c=s.props&&s.props.suspensible;return c!=null&&c!==!1}function Hl(s,c,u=Qt,g=!1){if(u){const m=u[s]||(u[s]=[]),w=c.__weh||(c.__weh=(...b)=>{wi();const _=er(u),f=On(c,u,s,b);return _(),Fo(),f});return g?m.unshift(w):m.push(w),w}}const Vo=s=>(c,u=Qt)=>{(!Da||s==="sp")&&Hl(s,(...g)=>c(...g),u)},U1=Vo("bm"),vn=Vo("m"),H1=Vo("bu"),$l=Vo("u"),ql=Vo("bum"),Wl=Vo("um"),$1=Vo("sp"),q1=Vo("rtg"),W1=Vo("rtc");function G1(s,c=Qt){Hl("ec",s,c)}function at(s,c){if(Zt===null)return s;const u=Sa(Zt),g=s.dirs||(s.dirs=[]);for(let m=0;m<c.length;m++){let[w,b,_,f=kt]=c[m];w&&($e(w)&&(w={mounted:w,updated:w}),w.deep&&hi(b),g.push({dir:w,instance:u,value:b,oldValue:void 0,arg:_,modifiers:f}))}return s}function bo(s,c,u,g){const m=s.dirs,w=c&&c.dirs;for(let b=0;b<m.length;b++){const _=m[b];w&&(_.oldValue=w[b].value);let f=_.dir[g];f&&(wi(),On(f,u,8,[s.el,_,s,c]),Fo())}}function Rt(s,c,u,g){let m;const w=u&&u[g];if(Pe(s)||Bt(s)){m=new Array(s.length);for(let b=0,_=s.length;b<_;b++)m[b]=c(s[b],b,void 0,w&&w[b])}else if(typeof s=="number"){m=new Array(s);for(let b=0;b<s;b++)m[b]=c(b+1,b,void 0,w&&w[b])}else if(Ct(s))if(s[Symbol.iterator])m=Array.from(s,(b,_)=>c(b,_,void 0,w&&w[_]));else{const b=Object.keys(s);m=new Array(b.length);for(let _=0,f=b.length;_<f;_++){const v=b[_];m[_]=c(s[v],v,_,w&&w[_])}}else m=[];return u&&(u[g]=m),m}function BL(s,c){for(let u=0;u<c.length;u++){const g=c[u];if(Pe(g))for(let m=0;m<g.length;m++)s[g[m].name]=g[m].fn;else g&&(s[g.name]=g.key?(...m)=>{const w=g.fn(...m);return w&&(w.key=g.key),w}:g.fn)}return s}/*! #__NO_SIDE_EFFECTS__ */function ya(s,c){return $e(s)?Mt({name:s.name},c,{setup:s}):s}const Ki=s=>!!s.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function PL(s){$e(s)&&(s={loader:s});const{loader:c,loadingComponent:u,errorComponent:g,delay:m=200,timeout:w,suspensible:b=!0,onError:_}=s;let f=null,v,x=0;const y=()=>(x++,f=null,A()),A=()=>{let E;return f||(E=f=c().catch(M=>{if(M=M instanceof Error?M:new Error(String(M)),_)return new Promise((P,z)=>{_(M,()=>P(y()),()=>z(M),x+1)});throw M}).then(M=>E!==f&&f?f:(M&&(M.__esModule||M[Symbol.toStringTag]==="Module")&&(M=M.default),v=M,M)))};return ya({name:"AsyncComponentWrapper",__asyncLoader:A,get __asyncResolved(){return v},setup(){const E=Qt;if(v)return()=>bh(v,E);const M=j=>{f=null,or(j,E,13,!g)};if(b&&E.suspense||Da)return A().then(j=>()=>bh(j,E)).catch(j=>(M(j),()=>g?Be(g,{error:j}):null));const P=fe(!1),z=fe(),F=fe(!!m);return m&&setTimeout(()=>{F.value=!1},m),w!=null&&setTimeout(()=>{if(!P.value&&!z.value){const j=new Error(`Async component timed out after ${w}ms.`);M(j),z.value=j}},w),A().then(()=>{P.value=!0,E.parent&&Ea(E.parent.vnode)&&(E.parent.effect.dirty=!0,Fl(E.parent.update))}).catch(j=>{M(j),z.value=j}),()=>{if(P.value&&v)return bh(v,E);if(z.value&&g)return Be(g,{error:z.value});if(u&&!F.value)return Be(u)}}})}function bh(s,c){const{ref:u,props:g,children:m,ce:w}=c.vnode,b=Be(s,g,m);return b.ref=u,b.ce=w,delete c.vnode.ce,b}function NL(s,c,u={},g,m){if(Zt.isCE||Zt.parent&&Ki(Zt.parent)&&Zt.parent.isCE)return c!=="default"&&(u.name=c),Be("slot",u,g&&g());let w=s[c];w&&w._c&&(w._d=!1),ce();const b=w&&K1(w(u)),_=Jr(Je,{key:u.key||b&&b.key||`_${c}`},b||(g?g():[]),b&&s._===1?64:-2);return!m&&_.scopeId&&(_.slotScopeIds=[_.scopeId+"-s"]),w&&w._c&&(w._d=!0),_}function K1(s){return s.some(c=>bi(c)?!(c.type===on||c.type===Je&&!K1(c.children)):!0)?s:null}function OL(s,c){const u={};for(const g in s)u[c&&/[A-Z]/.test(g)?`on:${g}`:oa(g)]=s[g];return u}const jh=s=>s?My(s)?Sa(s):jh(s.parent):null,ia=Mt(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>s.props,$attrs:s=>s.attrs,$slots:s=>s.slots,$refs:s=>s.refs,$parent:s=>jh(s.parent),$root:s=>jh(s.root),$emit:s=>s.emit,$options:s=>Ng(s),$forceUpdate:s=>s.f||(s.f=()=>{s.effect.dirty=!0,Fl(s.update)}),$nextTick:s=>s.n||(s.n=is.bind(s.proxy)),$watch:s=>hR.bind(s)}),_h=(s,c)=>s!==kt&&!s.__isScriptSetup&&ut(s,c),Fh={get({_:s},c){if(c==="__v_skip")return!0;const{ctx:u,setupState:g,data:m,props:w,accessCache:b,type:_,appContext:f}=s;let v;if(c[0]!=="$"){const E=b[c];if(E!==void 0)switch(E){case 1:return g[c];case 2:return m[c];case 4:return u[c];case 3:return w[c]}else{if(_h(g,c))return b[c]=1,g[c];if(m!==kt&&ut(m,c))return b[c]=2,m[c];if((v=s.propsOptions[0])&&ut(v,c))return b[c]=3,w[c];if(u!==kt&&ut(u,c))return b[c]=4,u[c];Vh&&(b[c]=0)}}const x=ia[c];let y,A;if(x)return c==="$attrs"&&Cn(s.attrs,"get",""),x(s);if((y=_.__cssModules)&&(y=y[c]))return y;if(u!==kt&&ut(u,c))return b[c]=4,u[c];if(A=f.config.globalProperties,ut(A,c))return A[c]},set({_:s},c,u){const{data:g,setupState:m,ctx:w}=s;return _h(m,c)?(m[c]=u,!0):g!==kt&&ut(g,c)?(g[c]=u,!0):ut(s.props,c)||c[0]==="$"&&c.slice(1)in s?!1:(w[c]=u,!0)},has({_:{data:s,setupState:c,accessCache:u,ctx:g,appContext:m,propsOptions:w}},b){let _;return!!u[b]||s!==kt&&ut(s,b)||_h(c,b)||(_=w[0])&&ut(_,b)||ut(g,b)||ut(ia,b)||ut(m.config.globalProperties,b)},defineProperty(s,c,u){return u.get!=null?s._.accessCache[c]=0:ut(u,"value")&&this.set(s,c,u.value,null),Reflect.defineProperty(s,c,u)}},LL=Mt({},Fh,{get(s,c){if(c!==Symbol.unscopables)return Fh.get(s,c,s)},has(s,c){return c[0]!=="_"&&!bO(c)}});function RL(){return null}function zL(){return null}function jL(s){}function FL(s){}function VL(){return null}function UL(){}function HL(s,c){return null}function $L(){return Y1().slots}function qL(){return Y1().attrs}function Y1(){const s=Uo();return s.setupContext||(s.setupContext=Ny(s))}function ba(s){return Pe(s)?s.reduce((c,u)=>(c[u]=null,c),{}):s}function WL(s,c){const u=ba(s);for(const g in c){if(g.startsWith("__skip"))continue;let m=u[g];m?Pe(m)||$e(m)?m=u[g]={type:m,default:c[g]}:m.default=c[g]:m===null&&(m=u[g]={default:c[g]}),m&&c[`__skip_${g}`]&&(m.skipFactory=!0)}return u}function Q1(s,c){return!s||!c?s||c:Pe(s)&&Pe(c)?s.concat(c):Mt({},ba(s),ba(c))}function GL(s,c){const u={};for(const g in s)c.includes(g)||Object.defineProperty(u,g,{enumerable:!0,get:()=>s[g]});return u}function KL(s){const c=Uo();let u=s();return Gh(),mg(u)&&(u=u.catch(g=>{throw er(c),g})),[u,()=>er(c)]}let Vh=!0;function YL(s){const c=Ng(s),u=s.proxy,g=s.ctx;Vh=!1,c.beforeCreate&&XC(c.beforeCreate,s,"bc");const{data:m,computed:w,methods:b,watch:_,provide:f,inject:v,created:x,beforeMount:y,mounted:A,beforeUpdate:E,updated:M,activated:P,deactivated:z,beforeDestroy:F,beforeUnmount:j,destroyed:O,unmounted:H,render:q,renderTracked:G,renderTriggered:I,errorCaptured:V,serverPrefetch:W,expose:K,inheritAttrs:le,components:J,directives:he,filters:Ae}=c;if(v&&QL(v,g,null),b)for(const ne in b){const me=b[ne];$e(me)&&(g[ne]=me.bind(u))}if(m){const ne=m.call(u,u);Ct(ne)&&(s.data=so(ne))}if(Vh=!0,w)for(const ne in w){const me=w[ne],vt=$e(me)?me.bind(u,u):$e(me.get)?me.get.bind(u,u):_n,ht=!$e(me)&&$e(me.set)?me.set.bind(u):_n,Wt=un({get:vt,set:ht});Object.defineProperty(g,ne,{enumerable:!0,configurable:!0,get:()=>Wt.value,set:Nt=>Wt.value=Nt})}if(_)for(const ne in _)Z1(_[ne],g,u,ne);if(f){const ne=$e(f)?f.call(u):f;Reflect.ownKeys(ne).forEach(me=>{ra(me,ne[me])})}x&&XC(x,s,"c");function Y(ne,me){Pe(me)?me.forEach(vt=>ne(vt.bind(u))):me&&ne(me.bind(u))}if(Y(U1,y),Y(vn,A),Y(H1,E),Y($l,M),Y(by,P),Y(_y,z),Y(G1,V),Y(W1,G),Y(q1,I),Y(ql,j),Y(Wl,H),Y($1,W),Pe(K))if(K.length){const ne=s.exposed||(s.exposed={});K.forEach(me=>{Object.defineProperty(ne,me,{get:()=>u[me],set:vt=>u[me]=vt})})}else s.exposed||(s.exposed={});q&&s.render===_n&&(s.render=q),le!=null&&(s.inheritAttrs=le),J&&(s.components=J),he&&(s.directives=he)}function QL(s,c,u=_n){Pe(s)&&(s=Uh(s));for(const g in s){const m=s[g];let w;Ct(m)?"default"in m?w=qn(m.from||g,m.default,!0):w=qn(m.from||g):w=qn(m),$t(w)?Object.defineProperty(c,g,{enumerable:!0,configurable:!0,get:()=>w.value,set:b=>w.value=b}):c[g]=w}}function XC(s,c,u){On(Pe(s)?s.map(g=>g.bind(c.proxy)):s.bind(c.proxy),c,u)}function Z1(s,c,u,g){const m=g.includes(".")?ky(u,g):()=>u[g];if(Bt(s)){const w=c[s];$e(w)&&zt(m,w)}else if($e(s))zt(m,s.bind(u));else if(Ct(s))if(Pe(s))s.forEach(w=>Z1(w,c,u,g));else{const w=$e(s.handler)?s.handler.bind(u):c[s.handler];$e(w)&&zt(m,w,s)}}function Ng(s){const c=s.type,{mixins:u,extends:g}=c,{mixins:m,optionsCache:w,config:{optionMergeStrategies:b}}=s.appContext,_=w.get(c);let f;return _?f=_:!m.length&&!u&&!g?f=c:(f={},m.length&&m.forEach(v=>vl(f,v,b,!0)),vl(f,c,b)),Ct(c)&&w.set(c,f),f}function vl(s,c,u,g=!1){const{mixins:m,extends:w}=c;w&&vl(s,w,u,!0),m&&m.forEach(b=>vl(s,b,u,!0));for(const b in c)if(!(g&&b==="expose")){const _=ZL[b]||u&&u[b];s[b]=_?_(s[b],c[b]):c[b]}return s}const ZL={data:ev,props:tv,emits:tv,methods:ea,computed:ea,beforeCreate:ln,created:ln,beforeMount:ln,mounted:ln,beforeUpdate:ln,updated:ln,beforeDestroy:ln,beforeUnmount:ln,destroyed:ln,unmounted:ln,activated:ln,deactivated:ln,errorCaptured:ln,serverPrefetch:ln,components:ea,directives:ea,watch:XL,provide:ev,inject:JL};function ev(s,c){return c?s?function(){return Mt($e(s)?s.call(this,this):s,$e(c)?c.call(this,this):c)}:c:s}function JL(s,c){return ea(Uh(s),Uh(c))}function Uh(s){if(Pe(s)){const c={};for(let u=0;u<s.length;u++)c[s[u]]=s[u];return c}return s}function ln(s,c){return s?[...new Set([].concat(s,c))]:c}function ea(s,c){return s?Mt(Object.create(null),s,c):c}function tv(s,c){return s?Pe(s)&&Pe(c)?[...new Set([...s,...c])]:Mt(Object.create(null),ba(s),ba(c??{})):c}function XL(s,c){if(!s)return c;if(!c)return s;const u=Mt(Object.create(null),s);for(const g in c)u[g]=ln(s[g],c[g]);return u}function J1(){return{app:null,config:{isNativeTag:uO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eR=0;function tR(s,c){return function(g,m=null){$e(g)||(g=Mt({},g)),m!=null&&!Ct(m)&&(m=null);const w=J1(),b=new WeakSet;let _=!1;const f=w.app={_uid:eR++,_component:g,_props:m,_container:null,_context:w,_instance:null,version:Ly,get config(){return w.config},set config(v){},use(v,...x){return b.has(v)||(v&&$e(v.install)?(b.add(v),v.install(f,...x)):$e(v)&&(b.add(v),v(f,...x))),f},mixin(v){return w.mixins.includes(v)||w.mixins.push(v),f},component(v,x){return x?(w.components[v]=x,f):w.components[v]},directive(v,x){return x?(w.directives[v]=x,f):w.directives[v]},mount(v,x,y){if(!_){const A=Be(g,m);return A.appContext=w,y===!0?y="svg":y===!1&&(y=void 0),x&&c?c(A,v):s(A,v,y),_=!0,f._container=v,v.__vue_app__=f,Sa(A.component)}},unmount(){_&&(s(null,f._container),delete f._container.__vue_app__)},provide(v,x){return w.provides[v]=x,f},runWithContext(v){const x=Gr;Gr=f;try{return v()}finally{Gr=x}}};return f}}let Gr=null;function ra(s,c){if(Qt){let u=Qt.provides;const g=Qt.parent&&Qt.parent.provides;g===u&&(u=Qt.provides=Object.create(g)),u[s]=c}}function qn(s,c,u=!1){const g=Qt||Zt;if(g||Gr){const m=g?g.parent==null?g.vnode.appContext&&g.vnode.appContext.provides:g.parent.provides:Gr._context.provides;if(m&&s in m)return m[s];if(arguments.length>1)return u&&$e(c)?c.call(g&&g.proxy):c}}function X1(){return!!(Qt||Zt||Gr)}const ey={},ty=()=>Object.create(ey),ny=s=>Object.getPrototypeOf(s)===ey;function nR(s,c,u,g=!1){const m={},w=ty();s.propsDefaults=Object.create(null),oy(s,c,m,w);for(const b in s.propsOptions[0])b in m||(m[b]=void 0);u?s.props=g?m:vg(m):s.type.props?s.props=m:s.props=w,s.attrs=w}function oR(s,c,u,g){const{props:m,attrs:w,vnode:{patchFlag:b}}=s,_=it(m),[f]=s.propsOptions;let v=!1;if((g||b>0)&&!(b&16)){if(b&8){const x=s.vnode.dynamicProps;for(let y=0;y<x.length;y++){let A=x[y];if(Vl(s.emitsOptions,A))continue;const E=c[A];if(f)if(ut(w,A))E!==w[A]&&(w[A]=E,v=!0);else{const M=hn(A);m[M]=Hh(f,_,M,E,s,!1)}else E!==w[A]&&(w[A]=E,v=!0)}}}else{oy(s,c,m,w)&&(v=!0);let x;for(const y in _)(!c||!ut(c,y)&&((x=Nn(y))===y||!ut(c,x)))&&(f?u&&(u[y]!==void 0||u[x]!==void 0)&&(m[y]=Hh(f,_,y,void 0,s,!0)):delete m[y]);if(w!==_)for(const y in w)(!c||!ut(c,y))&&(delete w[y],v=!0)}v&&zo(s.attrs,"set","")}function oy(s,c,u,g){const[m,w]=s.propsOptions;let b=!1,_;if(c)for(let f in c){if(Ur(f))continue;const v=c[f];let x;m&&ut(m,x=hn(f))?!w||!w.includes(x)?u[x]=v:(_||(_={}))[x]=v:Vl(s.emitsOptions,f)||(!(f in g)||v!==g[f])&&(g[f]=v,b=!0)}if(w){const f=it(u),v=_||kt;for(let x=0;x<w.length;x++){const y=w[x];u[y]=Hh(m,f,y,v[y],s,!ut(v,y))}}return b}function Hh(s,c,u,g,m,w){const b=s[u];if(b!=null){const _=ut(b,"default");if(_&&g===void 0){const f=b.default;if(b.type!==Function&&!b.skipFactory&&$e(f)){const{propsDefaults:v}=m;if(u in v)g=v[u];else{const x=er(m);g=v[u]=f.call(null,c),x()}}else g=f}b[0]&&(w&&!_?g=!1:b[1]&&(g===""||g===Nn(u))&&(g=!0))}return g}function iy(s,c,u=!1){const g=c.propsCache,m=g.get(s);if(m)return m;const w=s.props,b={},_=[];let f=!1;if(!$e(s)){const x=y=>{f=!0;const[A,E]=iy(y,c,!0);Mt(b,A),E&&_.push(...E)};!u&&c.mixins.length&&c.mixins.forEach(x),s.extends&&x(s.extends),s.mixins&&s.mixins.forEach(x)}if(!w&&!f)return Ct(s)&&g.set(s,Fr),Fr;if(Pe(w))for(let x=0;x<w.length;x++){const y=hn(w[x]);nv(y)&&(b[y]=kt)}else if(w)for(const x in w){const y=hn(x);if(nv(y)){const A=w[x],E=b[y]=Pe(A)||$e(A)?{type:A}:Mt({},A);if(E){const M=rv(Boolean,E.type),P=rv(String,E.type);E[0]=M>-1,E[1]=P<0||M<P,(M>-1||ut(E,"default"))&&_.push(y)}}}const v=[b,_];return Ct(s)&&g.set(s,v),v}function nv(s){return s[0]!=="$"&&!Ur(s)}function ov(s){return s===null?"null":typeof s=="function"?s.name||"":typeof s=="object"&&s.constructor&&s.constructor.name||""}function iv(s,c){return ov(s)===ov(c)}function rv(s,c){return Pe(c)?c.findIndex(u=>iv(u,s)):$e(c)&&iv(c,s)?0:-1}const ry=s=>s[0]==="_"||s==="$stable",Og=s=>Pe(s)?s.map(Pn):[Pn(s)],iR=(s,c,u)=>{if(c._n)return c;const g=Lo((...m)=>Og(c(...m)),u);return g._c=!1,g},sy=(s,c,u)=>{const g=s._ctx;for(const m in s){if(ry(m))continue;const w=s[m];if($e(w))c[m]=iR(m,w,g);else if(w!=null){const b=Og(w);c[m]=()=>b}}},ay=(s,c)=>{const u=Og(c);s.slots.default=()=>u},rR=(s,c)=>{const u=s.slots=ty();if(s.vnode.shapeFlag&32){const g=c._;g?(Mt(u,c),l1(u,"_",g,!0)):sy(c,u)}else c&&ay(s,c)},sR=(s,c,u)=>{const{vnode:g,slots:m}=s;let w=!0,b=kt;if(g.shapeFlag&32){const _=c._;_?u&&_===1?w=!1:(Mt(m,c),!u&&_===1&&delete m._):(w=!c.$stable,sy(c,m)),b=c}else c&&(ay(s,c),b={default:1});if(w)for(const _ in m)!ry(_)&&b[_]==null&&delete m[_]};function yl(s,c,u,g,m=!1){if(Pe(s)){s.forEach((A,E)=>yl(A,c&&(Pe(c)?c[E]:c),u,g,m));return}if(Ki(g)&&!m)return;const w=g.shapeFlag&4?Sa(g.component):g.el,b=m?null:w,{i:_,r:f}=s,v=c&&c.r,x=_.refs===kt?_.refs={}:_.refs,y=_.setupState;if(v!=null&&v!==f&&(Bt(v)?(x[v]=null,ut(y,v)&&(y[v]=null)):$t(v)&&(v.value=null)),$e(f))jo(f,_,12,[b,x]);else{const A=Bt(f),E=$t(f);if(A||E){const M=()=>{if(s.f){const P=A?ut(y,f)?y[f]:x[f]:f.value;m?Pe(P)&&pg(P,w):Pe(P)?P.includes(w)||P.push(w):A?(x[f]=[w],ut(y,f)&&(y[f]=x[f])):(f.value=[w],s.k&&(x[s.k]=f.value))}else A?(x[f]=b,ut(y,f)&&(y[f]=b)):E&&(f.value=b,s.k&&(x[s.k]=b))};b?(M.id=-1,tn(M,u)):M()}}}let sv=!1;const Lr=()=>{sv||(console.error("Hydration completed but contains mismatches."),sv=!0)},aR=s=>s.namespaceURI.includes("svg")&&s.tagName!=="foreignObject",cR=s=>s.namespaceURI.includes("MathML"),rl=s=>{if(aR(s))return"svg";if(cR(s))return"mathml"},sl=s=>s.nodeType===8;function lR(s){const{mt:c,p:u,o:{patchProp:g,createText:m,nextSibling:w,parentNode:b,remove:_,insert:f,createComment:v}}=s,x=(O,H)=>{if(!H.hasChildNodes()){u(null,O,H),Cl(),H._vnode=O;return}y(H.firstChild,O,null,null,null),Cl(),H._vnode=O},y=(O,H,q,G,I,V=!1)=>{V=V||!!H.dynamicChildren;const W=sl(O)&&O.data==="[",K=()=>P(O,H,q,G,I,W),{type:le,ref:J,shapeFlag:he,patchFlag:Ae}=H;let be=O.nodeType;H.el=O,Ae===-2&&(V=!1,H.dynamicChildren=null);let Y=null;switch(le){case Ji:be!==3?H.children===""?(f(H.el=m(""),b(O),O),Y=O):Y=K():(O.data!==H.children&&(Lr(),O.data=H.children),Y=w(O));break;case on:j(O)?(Y=w(O),F(H.el=O.content.firstChild,O,q)):be!==8||W?Y=K():Y=w(O);break;case Yi:if(W&&(O=w(O),be=O.nodeType),be===1||be===3){Y=O;const ne=!H.children.length;for(let me=0;me<H.staticCount;me++)ne&&(H.children+=Y.nodeType===1?Y.outerHTML:Y.data),me===H.staticCount-1&&(H.anchor=Y),Y=w(Y);return W?w(Y):Y}else K();break;case Je:W?Y=M(O,H,q,G,I,V):Y=K();break;default:if(he&1)(be!==1||H.type.toLowerCase()!==O.tagName.toLowerCase())&&!j(O)?Y=K():Y=A(O,H,q,G,I,V);else if(he&6){H.slotScopeIds=I;const ne=b(O);if(W?Y=z(O):sl(O)&&O.data==="teleport start"?Y=z(O,O.data,"teleport end"):Y=w(O),c(H,ne,null,q,G,rl(ne),V),Ki(H)){let me;W?(me=Be(Je),me.anchor=Y?Y.previousSibling:ne.lastChild):me=O.nodeType===3?tt(""):Be("div"),me.el=O,H.component.subTree=me}}else he&64?be!==8?Y=K():Y=H.type.hydrate(O,H,q,G,I,V,s,E):he&128&&(Y=H.type.hydrate(O,H,q,G,rl(b(O)),I,V,s,y))}return J!=null&&yl(J,null,G,H),Y},A=(O,H,q,G,I,V)=>{V=V||!!H.dynamicChildren;const{type:W,props:K,patchFlag:le,shapeFlag:J,dirs:he,transition:Ae}=H,be=W==="input"||W==="option";if(be||le!==-1){he&&bo(H,null,q,"created");let Y=!1;if(j(O)){Y=uy(G,Ae)&&q&&q.vnode.props&&q.vnode.props.appear;const me=O.content.firstChild;Y&&Ae.beforeEnter(me),F(me,O,q),H.el=O=me}if(J&16&&!(K&&(K.innerHTML||K.textContent))){let me=E(O.firstChild,H,O,q,G,I,V);for(;me;){Lr();const vt=me;me=me.nextSibling,_(vt)}}else J&8&&O.textContent!==H.children&&(Lr(),O.textContent=H.children);if(K)if(be||!V||le&48)for(const me in K)(be&&(me.endsWith("value")||me==="indeterminate")||Ca(me)&&!Ur(me)||me[0]===".")&&g(O,me,null,K[me],void 0,void 0,q);else K.onClick&&g(O,"onClick",null,K.onClick,void 0,void 0,q);let ne;(ne=K&&K.onVnodeBeforeMount)&&bn(ne,q,H),he&&bo(H,null,q,"beforeMount"),((ne=K&&K.onVnodeMounted)||he||Y)&&V1(()=>{ne&&bn(ne,q,H),Y&&Ae.enter(O),he&&bo(H,null,q,"mounted")},G)}return O.nextSibling},E=(O,H,q,G,I,V,W)=>{W=W||!!H.dynamicChildren;const K=H.children,le=K.length;for(let J=0;J<le;J++){const he=W?K[J]:K[J]=Pn(K[J]);O?O=y(O,he,G,I,V,W):he.type===Ji&&!he.children?f(he.el=m(""),q):(Lr(),u(null,he,q,null,G,I,rl(q),V))}return O},M=(O,H,q,G,I,V)=>{const{slotScopeIds:W}=H;W&&(I=I?I.concat(W):W);const K=b(O),le=E(w(O),H,K,q,G,I,V);return le&&sl(le)&&le.data==="]"?w(H.anchor=le):(Lr(),f(H.anchor=v("]"),K,le),le)},P=(O,H,q,G,I,V)=>{if(Lr(),H.el=null,V){const le=z(O);for(;;){const J=w(O);if(J&&J!==le)_(J);else break}}const W=w(O),K=b(O);return _(O),u(null,H,K,W,q,G,rl(K),I),W},z=(O,H="[",q="]")=>{let G=0;for(;O;)if(O=w(O),O&&sl(O)&&(O.data===H&&G++,O.data===q)){if(G===0)return w(O);G--}return O},F=(O,H,q)=>{const G=H.parentNode;G&&G.replaceChild(O,H);let I=q;for(;I;)I.vnode.el===H&&(I.vnode.el=I.subTree.el=O),I=I.parent},j=O=>O.nodeType===1&&O.tagName.toLowerCase()==="template";return[x,y]}const tn=V1;function cy(s){return dy(s)}function ly(s){return dy(s,lR)}function dy(s,c){const u=d1();u.__VUE__=!0;const{insert:g,remove:m,patchProp:w,createElement:b,createText:_,createComment:f,setText:v,setElementText:x,parentNode:y,nextSibling:A,setScopeId:E=_n,insertStaticContent:M}=s,P=(R,U,X,ue=null,ae=null,Ce=null,Se=void 0,we=null,_e=!!U.dynamicChildren)=>{if(R===U)return;R&&!ro(R,U)&&(ue=re(R),Nt(R,ae,Ce,!0),R=null),U.patchFlag===-2&&(_e=!1,U.dynamicChildren=null);const{type:oe,ref:Ie,shapeFlag:ge}=U;switch(oe){case Ji:z(R,U,X,ue);break;case on:F(R,U,X,ue);break;case Yi:R==null&&j(U,X,ue,Se);break;case Je:J(R,U,X,ue,ae,Ce,Se,we,_e);break;default:ge&1?q(R,U,X,ue,ae,Ce,Se,we,_e):ge&6?he(R,U,X,ue,ae,Ce,Se,we,_e):(ge&64||ge&128)&&oe.process(R,U,X,ue,ae,Ce,Se,we,_e,ye)}Ie!=null&&ae&&yl(Ie,R&&R.ref,Ce,U||R,!U)},z=(R,U,X,ue)=>{if(R==null)g(U.el=_(U.children),X,ue);else{const ae=U.el=R.el;U.children!==R.children&&v(ae,U.children)}},F=(R,U,X,ue)=>{R==null?g(U.el=f(U.children||""),X,ue):U.el=R.el},j=(R,U,X,ue)=>{[R.el,R.anchor]=M(R.children,U,X,ue,R.el,R.anchor)},O=({el:R,anchor:U},X,ue)=>{let ae;for(;R&&R!==U;)ae=A(R),g(R,X,ue),R=ae;g(U,X,ue)},H=({el:R,anchor:U})=>{let X;for(;R&&R!==U;)X=A(R),m(R),R=X;m(U)},q=(R,U,X,ue,ae,Ce,Se,we,_e)=>{U.type==="svg"?Se="svg":U.type==="math"&&(Se="mathml"),R==null?G(U,X,ue,ae,Ce,Se,we,_e):W(R,U,ae,Ce,Se,we,_e)},G=(R,U,X,ue,ae,Ce,Se,we)=>{let _e,oe;const{props:Ie,shapeFlag:ge,transition:te,dirs:Z}=R;if(_e=R.el=b(R.type,Ce,Ie&&Ie.is,Ie),ge&8?x(_e,R.children):ge&16&&V(R.children,_e,null,ue,ae,wh(R,Ce),Se,we),Z&&bo(R,null,ue,"created"),I(_e,R,R.scopeId,Se,ue),Ie){for(const Fe in Ie)Fe!=="value"&&!Ur(Fe)&&w(_e,Fe,null,Ie[Fe],Ce,R.children,ue,ae,Le);"value"in Ie&&w(_e,"value",null,Ie.value,Ce),(oe=Ie.onVnodeBeforeMount)&&bn(oe,ue,R)}Z&&bo(R,null,ue,"beforeMount");const Oe=uy(ae,te);Oe&&te.beforeEnter(_e),g(_e,U,X),((oe=Ie&&Ie.onVnodeMounted)||Oe||Z)&&tn(()=>{oe&&bn(oe,ue,R),Oe&&te.enter(_e),Z&&bo(R,null,ue,"mounted")},ae)},I=(R,U,X,ue,ae)=>{if(X&&E(R,X),ue)for(let Ce=0;Ce<ue.length;Ce++)E(R,ue[Ce]);if(ae){let Ce=ae.subTree;if(U===Ce){const Se=ae.vnode;I(R,Se,Se.scopeId,Se.slotScopeIds,ae.parent)}}},V=(R,U,X,ue,ae,Ce,Se,we,_e=0)=>{for(let oe=_e;oe<R.length;oe++){const Ie=R[oe]=we?di(R[oe]):Pn(R[oe]);P(null,Ie,U,X,ue,ae,Ce,Se,we)}},W=(R,U,X,ue,ae,Ce,Se)=>{const we=U.el=R.el;let{patchFlag:_e,dynamicChildren:oe,dirs:Ie}=U;_e|=R.patchFlag&16;const ge=R.props||kt,te=U.props||kt;let Z;if(X&&Hi(X,!1),(Z=te.onVnodeBeforeUpdate)&&bn(Z,X,U,R),Ie&&bo(U,R,X,"beforeUpdate"),X&&Hi(X,!0),oe?K(R.dynamicChildren,oe,we,X,ue,wh(U,ae),Ce):Se||me(R,U,we,null,X,ue,wh(U,ae),Ce,!1),_e>0){if(_e&16)le(we,U,ge,te,X,ue,ae);else if(_e&2&&ge.class!==te.class&&w(we,"class",null,te.class,ae),_e&4&&w(we,"style",ge.style,te.style,ae),_e&8){const Oe=U.dynamicProps;for(let Fe=0;Fe<Oe.length;Fe++){const Ke=Oe[Fe],bt=ge[Ke],yn=te[Ke];(yn!==bt||Ke==="value")&&w(we,Ke,bt,yn,ae,R.children,X,ue,Le)}}_e&1&&R.children!==U.children&&x(we,U.children)}else!Se&&oe==null&&le(we,U,ge,te,X,ue,ae);((Z=te.onVnodeUpdated)||Ie)&&tn(()=>{Z&&bn(Z,X,U,R),Ie&&bo(U,R,X,"updated")},ue)},K=(R,U,X,ue,ae,Ce,Se)=>{for(let we=0;we<U.length;we++){const _e=R[we],oe=U[we],Ie=_e.el&&(_e.type===Je||!ro(_e,oe)||_e.shapeFlag&70)?y(_e.el):X;P(_e,oe,Ie,null,ue,ae,Ce,Se,!0)}},le=(R,U,X,ue,ae,Ce,Se)=>{if(X!==ue){if(X!==kt)for(const we in X)!Ur(we)&&!(we in ue)&&w(R,we,X[we],null,Se,U.children,ae,Ce,Le);for(const we in ue){if(Ur(we))continue;const _e=ue[we],oe=X[we];_e!==oe&&we!=="value"&&w(R,we,oe,_e,Se,U.children,ae,Ce,Le)}"value"in ue&&w(R,"value",X.value,ue.value,Se)}},J=(R,U,X,ue,ae,Ce,Se,we,_e)=>{const oe=U.el=R?R.el:_(""),Ie=U.anchor=R?R.anchor:_("");let{patchFlag:ge,dynamicChildren:te,slotScopeIds:Z}=U;Z&&(we=we?we.concat(Z):Z),R==null?(g(oe,X,ue),g(Ie,X,ue),V(U.children||[],X,Ie,ae,Ce,Se,we,_e)):ge>0&&ge&64&&te&&R.dynamicChildren?(K(R.dynamicChildren,te,X,ae,Ce,Se,we),(U.key!=null||ae&&U===ae.subTree)&&Lg(R,U,!0)):me(R,U,X,Ie,ae,Ce,Se,we,_e)},he=(R,U,X,ue,ae,Ce,Se,we,_e)=>{U.slotScopeIds=we,R==null?U.shapeFlag&512?ae.ctx.activate(U,X,ue,Se,_e):Ae(U,X,ue,ae,Ce,Se,_e):be(R,U,_e)},Ae=(R,U,X,ue,ae,Ce,Se)=>{const we=R.component=Iy(R,ue,ae);if(Ea(R)&&(we.ctx.renderer=ye),By(we),we.asyncDep){if(ae&&ae.registerDep(we,Y,Se),!R.el){const _e=we.subTree=Be(on);F(null,_e,U,X)}}else Y(we,R,U,X,ae,Ce,Se)},be=(R,U,X)=>{const ue=U.component=R.component;if(AL(R,U,X))if(ue.asyncDep&&!ue.asyncResolved){ne(ue,U,X);return}else ue.next=U,hL(ue.update),ue.effect.dirty=!0,ue.update();else U.el=R.el,ue.vnode=U},Y=(R,U,X,ue,ae,Ce,Se)=>{const we=()=>{if(R.isMounted){let{next:Ie,bu:ge,u:te,parent:Z,vnode:Oe}=R;{const qo=hy(R);if(qo){Ie&&(Ie.el=Oe.el,ne(R,Ie,Se)),qo.asyncDep.then(()=>{R.isUnmounted||we()});return}}let Fe=Ie,Ke;Hi(R,!1),Ie?(Ie.el=Oe.el,ne(R,Ie,Se)):Ie=Oe,ge&&Hr(ge),(Ke=Ie.props&&Ie.props.onVnodeBeforeUpdate)&&bn(Ke,Z,Ie,Oe),Hi(R,!0);const bt=gl(R),yn=R.subTree;R.subTree=bt,P(yn,bt,y(yn.el),re(yn),R,ae,Ce),Ie.el=bt.el,Fe===null&&Ig(R,bt.el),te&&tn(te,ae),(Ke=Ie.props&&Ie.props.onVnodeUpdated)&&tn(()=>bn(Ke,Z,Ie,Oe),ae)}else{let Ie;const{el:ge,props:te}=U,{bm:Z,m:Oe,parent:Fe}=R,Ke=Ki(U);if(Hi(R,!1),Z&&Hr(Z),!Ke&&(Ie=te&&te.onVnodeBeforeMount)&&bn(Ie,Fe,U),Hi(R,!0),ge&&nt){const bt=()=>{R.subTree=gl(R),nt(ge,R.subTree,R,ae,null)};Ke?U.type.__asyncLoader().then(()=>!R.isUnmounted&&bt()):bt()}else{const bt=R.subTree=gl(R);P(null,bt,X,ue,R,ae,Ce),U.el=bt.el}if(Oe&&tn(Oe,ae),!Ke&&(Ie=te&&te.onVnodeMounted)){const bt=U;tn(()=>bn(Ie,Fe,bt),ae)}(U.shapeFlag&256||Fe&&Ki(Fe.vnode)&&Fe.vnode.shapeFlag&256)&&R.a&&tn(R.a,ae),R.isMounted=!0,U=X=ue=null}},_e=R.effect=new Yr(we,_n,()=>Fl(oe),R.scope),oe=R.update=()=>{_e.dirty&&_e.run()};oe.id=R.uid,Hi(R,!0),oe()},ne=(R,U,X)=>{U.component=R;const ue=R.vnode.props;R.vnode=U,R.next=null,oR(R,U.props,ue,X),sR(R,U.children,X),wi(),YC(R),Fo()},me=(R,U,X,ue,ae,Ce,Se,we,_e=!1)=>{const oe=R&&R.children,Ie=R?R.shapeFlag:0,ge=U.children,{patchFlag:te,shapeFlag:Z}=U;if(te>0){if(te&128){ht(oe,ge,X,ue,ae,Ce,Se,we,_e);return}else if(te&256){vt(oe,ge,X,ue,ae,Ce,Se,we,_e);return}}Z&8?(Ie&16&&Le(oe,ae,Ce),ge!==oe&&x(X,ge)):Ie&16?Z&16?ht(oe,ge,X,ue,ae,Ce,Se,we,_e):Le(oe,ae,Ce,!0):(Ie&8&&x(X,""),Z&16&&V(ge,X,ue,ae,Ce,Se,we,_e))},vt=(R,U,X,ue,ae,Ce,Se,we,_e)=>{R=R||Fr,U=U||Fr;const oe=R.length,Ie=U.length,ge=Math.min(oe,Ie);let te;for(te=0;te<ge;te++){const Z=U[te]=_e?di(U[te]):Pn(U[te]);P(R[te],Z,X,null,ae,Ce,Se,we,_e)}oe>Ie?Le(R,ae,Ce,!0,!1,ge):V(U,X,ue,ae,Ce,Se,we,_e,ge)},ht=(R,U,X,ue,ae,Ce,Se,we,_e)=>{let oe=0;const Ie=U.length;let ge=R.length-1,te=Ie-1;for(;oe<=ge&&oe<=te;){const Z=R[oe],Oe=U[oe]=_e?di(U[oe]):Pn(U[oe]);if(ro(Z,Oe))P(Z,Oe,X,null,ae,Ce,Se,we,_e);else break;oe++}for(;oe<=ge&&oe<=te;){const Z=R[ge],Oe=U[te]=_e?di(U[te]):Pn(U[te]);if(ro(Z,Oe))P(Z,Oe,X,null,ae,Ce,Se,we,_e);else break;ge--,te--}if(oe>ge){if(oe<=te){const Z=te+1,Oe=Z<Ie?U[Z].el:ue;for(;oe<=te;)P(null,U[oe]=_e?di(U[oe]):Pn(U[oe]),X,Oe,ae,Ce,Se,we,_e),oe++}}else if(oe>te)for(;oe<=ge;)Nt(R[oe],ae,Ce,!0),oe++;else{const Z=oe,Oe=oe,Fe=new Map;for(oe=Oe;oe<=te;oe++){const yt=U[oe]=_e?di(U[oe]):Pn(U[oe]);yt.key!=null&&Fe.set(yt.key,oe)}let Ke,bt=0;const yn=te-Oe+1;let qo=!1,Ma=0;const Wo=new Array(yn);for(oe=0;oe<yn;oe++)Wo[oe]=0;for(oe=Z;oe<=ge;oe++){const yt=R[oe];if(bt>=yn){Nt(yt,ae,Ce,!0);continue}let Pt;if(yt.key!=null)Pt=Fe.get(yt.key);else for(Ke=Oe;Ke<=te;Ke++)if(Wo[Ke-Oe]===0&&ro(yt,U[Ke])){Pt=Ke;break}Pt===void 0?Nt(yt,ae,Ce,!0):(Wo[Pt-Oe]=oe+1,Pt>=Ma?Ma=Pt:qo=!0,P(yt,U[Pt],X,null,ae,Ce,Se,we,_e),bt++)}const Yn=qo?dR(Wo):Fr;for(Ke=Yn.length-1,oe=yn-1;oe>=0;oe--){const yt=Oe+oe,Pt=U[yt],as=yt+1<Ie?U[yt+1].el:ue;Wo[oe]===0?P(null,Pt,X,as,ae,Ce,Se,we,_e):qo&&(Ke<0||oe!==Yn[Ke]?Wt(Pt,X,as,2):Ke--)}}},Wt=(R,U,X,ue,ae=null)=>{const{el:Ce,type:Se,transition:we,children:_e,shapeFlag:oe}=R;if(oe&6){Wt(R.component.subTree,U,X,ue);return}if(oe&128){R.suspense.move(U,X,ue);return}if(oe&64){Se.move(R,U,X,ye);return}if(Se===Je){g(Ce,U,X);for(let ge=0;ge<_e.length;ge++)Wt(_e[ge],U,X,ue);g(R.anchor,U,X);return}if(Se===Yi){O(R,U,X);return}if(ue!==2&&oe&1&&we)if(ue===0)we.beforeEnter(Ce),g(Ce,U,X),tn(()=>we.enter(Ce),ae);else{const{leave:ge,delayLeave:te,afterLeave:Z}=we,Oe=()=>g(Ce,U,X),Fe=()=>{ge(Ce,()=>{Oe(),Z&&Z()})};te?te(Ce,Oe,Fe):Fe()}else g(Ce,U,X)},Nt=(R,U,X,ue=!1,ae=!1)=>{const{type:Ce,props:Se,ref:we,children:_e,dynamicChildren:oe,shapeFlag:Ie,patchFlag:ge,dirs:te,memoIndex:Z}=R;if(ge===-2&&(ae=!1),we!=null&&yl(we,null,X,R,!0),Z!=null&&(U.renderCache[Z]=void 0),Ie&256){U.ctx.deactivate(R);return}const Oe=Ie&1&&te,Fe=!Ki(R);let Ke;if(Fe&&(Ke=Se&&Se.onVnodeBeforeUnmount)&&bn(Ke,U,R),Ie&6)gt(R.component,X,ue);else{if(Ie&128){R.suspense.unmount(X,ue);return}Oe&&bo(R,null,U,"beforeUnmount"),Ie&64?R.type.remove(R,U,X,ye,ue):oe&&(Ce!==Je||ge>0&&ge&64)?Le(oe,U,X,!1,!0):(Ce===Je&&ge&384||!ae&&Ie&16)&&Le(_e,U,X),ue&&ve(R)}(Fe&&(Ke=Se&&Se.onVnodeUnmounted)||Oe)&&tn(()=>{Ke&&bn(Ke,U,R),Oe&&bo(R,null,U,"unmounted")},X)},ve=R=>{const{type:U,el:X,anchor:ue,transition:ae}=R;if(U===Je){We(X,ue);return}if(U===Yi){H(R);return}const Ce=()=>{m(X),ae&&!ae.persisted&&ae.afterLeave&&ae.afterLeave()};if(R.shapeFlag&1&&ae&&!ae.persisted){const{leave:Se,delayLeave:we}=ae,_e=()=>Se(X,Ce);we?we(R.el,Ce,_e):_e()}else Ce()},We=(R,U)=>{let X;for(;R!==U;)X=A(R),m(R),R=X;m(U)},gt=(R,U,X)=>{const{bum:ue,scope:ae,update:Ce,subTree:Se,um:we,m:_e,a:oe}=R;xl(_e),xl(oe),ue&&Hr(ue),ae.stop(),Ce&&(Ce.active=!1,Nt(Se,R,U,X)),we&&tn(we,U),tn(()=>{R.isUnmounted=!0},U),U&&U.pendingBranch&&!U.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===U.pendingId&&(U.deps--,U.deps===0&&U.resolve())},Le=(R,U,X,ue=!1,ae=!1,Ce=0)=>{for(let Se=Ce;Se<R.length;Se++)Nt(R[Se],U,X,ue,ae)},re=R=>R.shapeFlag&6?re(R.component.subTree):R.shapeFlag&128?R.suspense.next():A(R.anchor||R.el);let Me=!1;const Ee=(R,U,X)=>{R==null?U._vnode&&Nt(U._vnode,null,null,!0):P(U._vnode||null,R,U,null,null,null,X),Me||(Me=!0,YC(),Cl(),Me=!1),U._vnode=R},ye={p:P,um:Nt,m:Wt,r:ve,mt:Ae,mc:V,pc:me,pbc:K,n:re,o:s};let je,nt;return c&&([je,nt]=c(ye)),{render:Ee,hydrate:je,createApp:tR(Ee,je)}}function wh({type:s,props:c},u){return u==="svg"&&s==="foreignObject"||u==="mathml"&&s==="annotation-xml"&&c&&c.encoding&&c.encoding.includes("html")?void 0:u}function Hi({effect:s,update:c},u){s.allowRecurse=c.allowRecurse=u}function uy(s,c){return(!s||s&&!s.pendingBranch)&&c&&!c.persisted}function Lg(s,c,u=!1){const g=s.children,m=c.children;if(Pe(g)&&Pe(m))for(let w=0;w<g.length;w++){const b=g[w];let _=m[w];_.shapeFlag&1&&!_.dynamicChildren&&((_.patchFlag<=0||_.patchFlag===32)&&(_=m[w]=di(m[w]),_.el=b.el),!u&&_.patchFlag!==-2&&Lg(b,_)),_.type===Ji&&(_.el=b.el)}}function dR(s){const c=s.slice(),u=[0];let g,m,w,b,_;const f=s.length;for(g=0;g<f;g++){const v=s[g];if(v!==0){if(m=u[u.length-1],s[m]<v){c[g]=m,u.push(g);continue}for(w=0,b=u.length-1;w<b;)_=w+b>>1,s[u[_]]<v?w=_+1:b=_;v<s[u[w]]&&(w>0&&(c[g]=u[w-1]),u[w]=g)}}for(w=u.length,b=u[w-1];w-- >0;)u[w]=b,b=c[b];return u}function hy(s){const c=s.subTree.component;if(c)return c.asyncDep&&!c.asyncResolved?c:hy(c)}function xl(s){if(s)for(let c=0;c<s.length;c++)s[c].active=!1}const gy=Symbol.for("v-scx"),py=()=>qn(gy);function uR(s,c){return xa(s,null,c)}function my(s,c){return xa(s,null,{flush:"post"})}function fy(s,c){return xa(s,null,{flush:"sync"})}const al={};function zt(s,c,u){return xa(s,c,u)}function xa(s,c,{immediate:u,deep:g,flush:m,once:w,onTrack:b,onTrigger:_}=kt){if(c&&w){const G=c;c=(...I)=>{G(...I),q()}}const f=Qt,v=G=>g===!0?G:hi(G,g===!1?1:void 0);let x,y=!1,A=!1;if($t(s)?(x=()=>s.value,y=ha(s)):mi(s)?(x=()=>v(s),y=!0):Pe(s)?(A=!0,y=s.some(G=>mi(G)||ha(G)),x=()=>s.map(G=>{if($t(G))return G.value;if(mi(G))return v(G);if($e(G))return jo(G,f,2)})):$e(s)?c?x=()=>jo(s,f,2):x=()=>(E&&E(),On(s,f,3,[M])):x=_n,c&&g){const G=x;x=()=>hi(G())}let E,M=G=>{E=O.onStop=()=>{jo(G,f,4),E=O.onStop=void 0}},P;if(Da)if(M=_n,c?u&&On(c,f,3,[x(),A?[]:void 0,M]):x(),m==="sync"){const G=py();P=G.__watcherHandles||(G.__watcherHandles=[])}else return _n;let z=A?new Array(s.length).fill(al):al;const F=()=>{if(!(!O.active||!O.dirty))if(c){const G=O.run();(g||y||(A?G.some((I,V)=>co(I,z[V])):co(G,z)))&&(E&&E(),On(c,f,3,[G,z===al?void 0:A&&z[0]===al?[]:z,M]),z=G)}else O.run()};F.allowRecurse=!!c;let j;m==="sync"?j=F:m==="post"?j=()=>tn(F,f&&f.suspense):(F.pre=!0,f&&(F.id=f.uid),j=()=>Fl(F));const O=new Yr(x,_n,j),H=_g(),q=()=>{O.stop(),H&&pg(H.effects,O)};return c?u?F():z=O.run():m==="post"?tn(O.run.bind(O),f&&f.suspense):O.run(),P&&P.push(q),q}function hR(s,c,u){const g=this.proxy,m=Bt(s)?s.includes(".")?ky(g,s):()=>g[s]:s.bind(g,g);let w;$e(c)?w=c:(w=c.handler,u=c);const b=er(this),_=xa(m,w.bind(g),u);return b(),_}function ky(s,c){const u=c.split(".");return()=>{let g=s;for(let m=0;m<u.length&&g;m++)g=g[u[m]];return g}}function hi(s,c=1/0,u){if(c<=0||!Ct(s)||s.__v_skip||(u=u||new Set,u.has(s)))return s;if(u.add(s),c--,$t(s))hi(s.value,c,u);else if(Pe(s))for(let g=0;g<s.length;g++)hi(s[g],c,u);else if(nr(s)||Vr(s))s.forEach(g=>{hi(g,c,u)});else if(c1(s)){for(const g in s)hi(s[g],c,u);for(const g of Object.getOwnPropertySymbols(s))Object.prototype.propertyIsEnumerable.call(s,g)&&hi(s[g],c,u)}return s}const Ea=s=>s.type.__isKeepAlive,gR={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(s,{slots:c}){const u=Uo(),g=u.ctx;if(!g.renderer)return()=>{const j=c.default&&c.default();return j&&j.length===1?j[0]:j};const m=new Map,w=new Set;let b=null;const _=u.suspense,{renderer:{p:f,m:v,um:x,o:{createElement:y}}}=g,A=y("div");g.activate=(j,O,H,q,G)=>{const I=j.component;v(j,O,H,0,_),f(I.vnode,j,O,H,I,_,q,j.slotScopeIds,G),tn(()=>{I.isDeactivated=!1,I.a&&Hr(I.a);const V=j.props&&j.props.onVnodeMounted;V&&bn(V,I.parent,j)},_)},g.deactivate=j=>{const O=j.component;xl(O.m),xl(O.a),v(j,A,null,1,_),tn(()=>{O.da&&Hr(O.da);const H=j.props&&j.props.onVnodeUnmounted;H&&bn(H,O.parent,j),O.isDeactivated=!0},_)};function E(j){Ah(j),x(j,u,_,!0)}function M(j){m.forEach((O,H)=>{const q=Qh(O.type);q&&(!j||!j(q))&&P(H)})}function P(j){const O=m.get(j);!b||!ro(O,b)?E(O):b&&Ah(b),m.delete(j),w.delete(j)}zt(()=>[s.include,s.exclude],([j,O])=>{j&&M(H=>ta(j,H)),O&&M(H=>!ta(O,H))},{flush:"post",deep:!0});let z=null;const F=()=>{z!=null&&(Rh(u.subTree.type)?tn(()=>{m.set(z,cl(u.subTree))},u.subTree.suspense):m.set(z,cl(u.subTree)))};return vn(F),$l(F),ql(()=>{m.forEach(j=>{const{subTree:O,suspense:H}=u,q=cl(O);if(j.type===q.type&&j.key===q.key){Ah(q);const G=q.component.da;G&&tn(G,H);return}E(j)})}),()=>{if(z=null,!c.default)return null;const j=c.default(),O=j[0];if(j.length>1)return b=null,j;if(!bi(O)||!(O.shapeFlag&4)&&!(O.shapeFlag&128))return b=null,O;let H=cl(O);const q=H.type,G=Qh(Ki(H)?H.type.__asyncResolved||{}:q),{include:I,exclude:V,max:W}=s;if(I&&(!G||!ta(I,G))||V&&G&&ta(V,G))return b=H,O;const K=H.key==null?q:H.key,le=m.get(K);return H.el&&(H=Co(H),O.shapeFlag&128&&(O.ssContent=H)),z=K,le?(H.el=le.el,H.component=le.component,H.transition&&ki(H,H.transition),H.shapeFlag|=512,w.delete(K),w.add(K)):(w.add(K),W&&w.size>parseInt(W,10)&&P(w.values().next().value)),H.shapeFlag|=256,b=H,Rh(O.type)?O:H}}},pR=gR;function ta(s,c){return Pe(s)?s.some(u=>ta(u,c)):Bt(s)?s.split(",").includes(c):gO(s)?s.test(c):!1}function by(s,c){wy(s,"a",c)}function _y(s,c){wy(s,"da",c)}function wy(s,c,u=Qt){const g=s.__wdc||(s.__wdc=()=>{let m=u;for(;m;){if(m.isDeactivated)return;m=m.parent}return s()});if(Hl(c,g,u),u){let m=u.parent;for(;m&&m.parent;)Ea(m.parent.vnode)&&mR(g,c,u,m),m=m.parent}}function mR(s,c,u,g){const m=Hl(c,s,g,!0);Wl(()=>{pg(g[c],m)},u)}function Ah(s){s.shapeFlag&=-257,s.shapeFlag&=-513}function cl(s){return s.shapeFlag&128?s.ssContent:s}const li=Symbol("_leaveCb"),ll=Symbol("_enterCb");function Rg(){const s={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vn(()=>{s.isMounted=!0}),ql(()=>{s.isUnmounting=!0}),s}const $n=[Function,Array],zg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$n,onEnter:$n,onAfterEnter:$n,onEnterCancelled:$n,onBeforeLeave:$n,onLeave:$n,onAfterLeave:$n,onLeaveCancelled:$n,onBeforeAppear:$n,onAppear:$n,onAfterAppear:$n,onAppearCancelled:$n},Ay=s=>{const c=s.subTree;return c.component?Ay(c.component):c},fR={name:"BaseTransition",props:zg,setup(s,{slots:c}){const u=Uo(),g=Rg();return()=>{const m=c.default&&Gl(c.default(),!0);if(!m||!m.length)return;let w=m[0];if(m.length>1){for(const A of m)if(A.type!==on){w=A;break}}const b=it(s),{mode:_}=b;if(g.isLeaving)return Ch(w);const f=av(w);if(!f)return Ch(w);let v=Zr(f,b,g,u,A=>v=A);ki(f,v);const x=u.subTree,y=x&&av(x);if(y&&y.type!==on&&!ro(f,y)&&Ay(u).type!==on){const A=Zr(y,b,g,u);if(ki(y,A),_==="out-in"&&f.type!==on)return g.isLeaving=!0,A.afterLeave=()=>{g.isLeaving=!1,u.update.active!==!1&&(u.effect.dirty=!0,u.update())},Ch(w);_==="in-out"&&f.type!==on&&(A.delayLeave=(E,M,P)=>{const z=vy(g,y);z[String(y.key)]=y,E[li]=()=>{M(),E[li]=void 0,delete v.delayedLeave},v.delayedLeave=P})}return w}}},Cy=fR;function vy(s,c){const{leavingVNodes:u}=s;let g=u.get(c.type);return g||(g=Object.create(null),u.set(c.type,g)),g}function Zr(s,c,u,g,m){const{appear:w,mode:b,persisted:_=!1,onBeforeEnter:f,onEnter:v,onAfterEnter:x,onEnterCancelled:y,onBeforeLeave:A,onLeave:E,onAfterLeave:M,onLeaveCancelled:P,onBeforeAppear:z,onAppear:F,onAfterAppear:j,onAppearCancelled:O}=c,H=String(s.key),q=vy(u,s),G=(W,K)=>{W&&On(W,g,9,K)},I=(W,K)=>{const le=K[1];G(W,K),Pe(W)?W.every(J=>J.length<=1)&&le():W.length<=1&&le()},V={mode:b,persisted:_,beforeEnter(W){let K=f;if(!u.isMounted)if(w)K=z||f;else return;W[li]&&W[li](!0);const le=q[H];le&&ro(s,le)&&le.el[li]&&le.el[li](),G(K,[W])},enter(W){let K=v,le=x,J=y;if(!u.isMounted)if(w)K=F||v,le=j||x,J=O||y;else return;let he=!1;const Ae=W[ll]=be=>{he||(he=!0,be?G(J,[W]):G(le,[W]),V.delayedLeave&&V.delayedLeave(),W[ll]=void 0)};K?I(K,[W,Ae]):Ae()},leave(W,K){const le=String(s.key);if(W[ll]&&W[ll](!0),u.isUnmounting)return K();G(A,[W]);let J=!1;const he=W[li]=Ae=>{J||(J=!0,K(),Ae?G(P,[W]):G(M,[W]),W[li]=void 0,q[le]===s&&delete q[le])};q[le]=s,E?I(E,[W,he]):he()},clone(W){const K=Zr(W,c,u,g,m);return m&&m(K),K}};return V}function Ch(s){if(Ea(s))return s=Co(s),s.children=null,s}function av(s){if(!Ea(s))return s;const{shapeFlag:c,children:u}=s;if(u){if(c&16)return u[0];if(c&32&&$e(u.default))return u.default()}}function ki(s,c){s.shapeFlag&6&&s.component?ki(s.component.subTree,c):s.shapeFlag&128?(s.ssContent.transition=c.clone(s.ssContent),s.ssFallback.transition=c.clone(s.ssFallback)):s.transition=c}function Gl(s,c=!1,u){let g=[],m=0;for(let w=0;w<s.length;w++){let b=s[w];const _=u==null?b.key:String(u)+String(b.key!=null?b.key:w);b.type===Je?(b.patchFlag&128&&m++,g=g.concat(Gl(b.children,c,_))):(c||b.type!==on)&&g.push(_!=null?Co(b,{key:_}):b)}if(m>1)for(let w=0;w<g.length;w++)g[w].patchFlag=-2;return g}const kR=s=>s.__isTeleport,sa=s=>s&&(s.disabled||s.disabled===""),cv=s=>typeof SVGElement<"u"&&s instanceof SVGElement,lv=s=>typeof MathMLElement=="function"&&s instanceof MathMLElement,$h=(s,c)=>{const u=s&&s.to;return Bt(u)?c?c(u):null:u},bR={name:"Teleport",__isTeleport:!0,process(s,c,u,g,m,w,b,_,f,v){const{mc:x,pc:y,pbc:A,o:{insert:E,querySelector:M,createText:P,createComment:z}}=v,F=sa(c.props);let{shapeFlag:j,children:O,dynamicChildren:H}=c;if(s==null){const q=c.el=P(""),G=c.anchor=P("");E(q,u,g),E(G,u,g);const I=c.target=$h(c.props,M),V=c.targetAnchor=P("");I&&(E(V,I),b==="svg"||cv(I)?b="svg":(b==="mathml"||lv(I))&&(b="mathml"));const W=(K,le)=>{j&16&&x(O,K,le,m,w,b,_,f)};F?W(u,G):I&&W(I,V)}else{c.el=s.el;const q=c.anchor=s.anchor,G=c.target=s.target,I=c.targetAnchor=s.targetAnchor,V=sa(s.props),W=V?u:G,K=V?q:I;if(b==="svg"||cv(G)?b="svg":(b==="mathml"||lv(G))&&(b="mathml"),H?(A(s.dynamicChildren,H,W,m,w,b,_),Lg(s,c,!0)):f||y(s,c,W,K,m,w,b,_,!1),F)V?c.props&&s.props&&c.props.to!==s.props.to&&(c.props.to=s.props.to):dl(c,u,q,v,1);else if((c.props&&c.props.to)!==(s.props&&s.props.to)){const le=c.target=$h(c.props,M);le&&dl(c,le,null,v,0)}else V&&dl(c,G,I,v,1)}yy(c)},remove(s,c,u,{um:g,o:{remove:m}},w){const{shapeFlag:b,children:_,anchor:f,targetAnchor:v,target:x,props:y}=s;if(x&&m(v),w&&m(f),b&16){const A=w||!sa(y);for(let E=0;E<_.length;E++){const M=_[E];g(M,c,u,A,!!M.dynamicChildren)}}},move:dl,hydrate:_R};function dl(s,c,u,{o:{insert:g},m},w=2){w===0&&g(s.targetAnchor,c,u);const{el:b,anchor:_,shapeFlag:f,children:v,props:x}=s,y=w===2;if(y&&g(b,c,u),(!y||sa(x))&&f&16)for(let A=0;A<v.length;A++)m(v[A],c,u,2);y&&g(_,c,u)}function _R(s,c,u,g,m,w,{o:{nextSibling:b,parentNode:_,querySelector:f}},v){const x=c.target=$h(c.props,f);if(x){const y=x._lpa||x.firstChild;if(c.shapeFlag&16)if(sa(c.props))c.anchor=v(b(s),c,_(s),u,g,m,w),c.targetAnchor=y;else{c.anchor=b(s);let A=y;for(;A;)if(A=b(A),A&&A.nodeType===8&&A.data==="teleport anchor"){c.targetAnchor=A,x._lpa=c.targetAnchor&&b(c.targetAnchor);break}v(y,c,x,u,g,m,w)}yy(c)}return c.anchor&&b(c.anchor)}const wR=bR;function yy(s){const c=s.ctx;if(c&&c.ut){let u=s.children[0].el;for(;u&&u!==s.targetAnchor;)u.nodeType===1&&u.setAttribute("data-v-owner",c.uid),u=u.nextSibling;c.ut()}}const Je=Symbol.for("v-fgt"),Ji=Symbol.for("v-txt"),on=Symbol.for("v-cmt"),Yi=Symbol.for("v-stc"),aa=[];let wn=null;function ce(s=!1){aa.push(wn=s?null:[])}function xy(){aa.pop(),wn=aa[aa.length-1]||null}let Xi=1;function qh(s){Xi+=s}function Ey(s){return s.dynamicChildren=Xi>0?wn||Fr:null,xy(),Xi>0&&wn&&wn.push(s),s}function de(s,c,u,g,m,w){return Ey(N(s,c,u,g,m,w,!0))}function Jr(s,c,u,g,m){return Ey(Be(s,c,u,g,m,!0))}function bi(s){return s?s.__v_isVNode===!0:!1}function ro(s,c){return s.type===c.type&&s.key===c.key}function AR(s){}const Dy=({key:s})=>s??null,pl=({ref:s,ref_key:c,ref_for:u})=>(typeof s=="number"&&(s=""+s),s!=null?Bt(s)||$t(s)||$e(s)?{i:Zt,r:s,k:c,f:!!u}:s:null);function N(s,c=null,u=null,g=0,m=null,w=s===Je?0:1,b=!1,_=!1){const f={__v_isVNode:!0,__v_skip:!0,type:s,props:c,key:c&&Dy(c),ref:c&&pl(c),scopeId:Ul,slotScopeIds:null,children:u,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:w,patchFlag:g,dynamicProps:m,dynamicChildren:null,appContext:null,ctx:Zt};return _?(jg(f,u),w&128&&s.normalize(f)):u&&(f.shapeFlag|=Bt(u)?8:16),Xi>0&&!b&&wn&&(f.patchFlag>0||w&6)&&f.patchFlag!==32&&wn.push(f),f}const Be=CR;function CR(s,c=null,u=null,g=0,m=null,w=!1){if((!s||s===j1)&&(s=on),bi(s)){const _=Co(s,c,!0);return u&&jg(_,u),Xi>0&&!w&&wn&&(_.shapeFlag&6?wn[wn.indexOf(s)]=_:wn.push(_)),_.patchFlag=-2,_}if(IR(s)&&(s=s.__vccOpts),c){c=Sy(c);let{class:_,style:f}=c;_&&!Bt(_)&&(c.class=Ne(_)),Ct(f)&&(xg(f)&&!Pe(f)&&(f=Mt({},f)),c.style=Zi(f))}const b=Bt(s)?1:Rh(s)?128:kR(s)?64:Ct(s)?4:$e(s)?2:0;return N(s,c,u,g,m,b,w,!0)}function Sy(s){return s?xg(s)||ny(s)?Mt({},s):s:null}function Co(s,c,u=!1,g=!1){const{props:m,ref:w,patchFlag:b,children:_,transition:f}=s,v=c?Ty(m||{},c):m,x={__v_isVNode:!0,__v_skip:!0,type:s.type,props:v,key:v&&Dy(v),ref:c&&c.ref?u&&w?Pe(w)?w.concat(pl(c)):[w,pl(c)]:pl(c):w,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:_,target:s.target,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:c&&s.type!==Je?b===-1?16:b|16:b,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:f,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&Co(s.ssContent),ssFallback:s.ssFallback&&Co(s.ssFallback),el:s.el,anchor:s.anchor,ctx:s.ctx,ce:s.ce};return f&&g&&ki(x,f.clone(x)),x}function tt(s=" ",c=0){return Be(Ji,null,s,c)}function vR(s,c){const u=Be(Yi,null,s);return u.staticCount=c,u}function He(s="",c=!1){return c?(ce(),Jr(on,null,s)):Be(on,null,s)}function Pn(s){return s==null||typeof s=="boolean"?Be(on):Pe(s)?Be(Je,null,s.slice()):typeof s=="object"?di(s):Be(Ji,null,String(s))}function di(s){return s.el===null&&s.patchFlag!==-1||s.memo?s:Co(s)}function jg(s,c){let u=0;const{shapeFlag:g}=s;if(c==null)c=null;else if(Pe(c))u=16;else if(typeof c=="object")if(g&65){const m=c.default;m&&(m._c&&(m._d=!1),jg(s,m()),m._c&&(m._d=!0));return}else{u=32;const m=c._;!m&&!ny(c)?c._ctx=Zt:m===3&&Zt&&(Zt.slots._===1?c._=1:(c._=2,s.patchFlag|=1024))}else $e(c)?(c={default:c,_ctx:Zt},u=32):(c=String(c),g&64?(u=16,c=[tt(c)]):u=8);s.children=c,s.shapeFlag|=u}function Ty(...s){const c={};for(let u=0;u<s.length;u++){const g=s[u];for(const m in g)if(m==="class")c.class!==g.class&&(c.class=Ne([c.class,g.class]));else if(m==="style")c.style=Zi([c.style,g.style]);else if(Ca(m)){const w=c[m],b=g[m];b&&w!==b&&!(Pe(w)&&w.includes(b))&&(c[m]=w?[].concat(w,b):b)}else m!==""&&(c[m]=g[m])}return c}function bn(s,c,u,g=null){On(s,c,7,[u,g])}const yR=J1();let xR=0;function Iy(s,c,u){const g=s.type,m=(c?c.appContext:s.appContext)||yR,w={uid:xR++,vnode:s,type:g,parent:c,appContext:m,root:null,next:null,subTree:null,effect:null,update:null,scope:new kg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:c?c.provides:Object.create(m.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:iy(g,m),emitsOptions:z1(g,m),emit:null,emitted:null,propsDefaults:kt,inheritAttrs:g.inheritAttrs,ctx:kt,data:kt,props:kt,attrs:kt,slots:kt,refs:kt,setupState:kt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:u,suspenseId:u?u.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return w.ctx={_:w},w.root=c?c.root:w,w.emit=pL.bind(null,w),s.ce&&s.ce(w),w}let Qt=null;const Uo=()=>Qt||Zt;let El,Wh;{const s=d1(),c=(u,g)=>{let m;return(m=s[u])||(m=s[u]=[]),m.push(g),w=>{m.length>1?m.forEach(b=>b(w)):m[0](w)}};El=c("__VUE_INSTANCE_SETTERS__",u=>Qt=u),Wh=c("__VUE_SSR_SETTERS__",u=>Da=u)}const er=s=>{const c=Qt;return El(s),s.scope.on(),()=>{s.scope.off(),El(c)}},Gh=()=>{Qt&&Qt.scope.off(),El(null)};function My(s){return s.vnode.shapeFlag&4}let Da=!1;function By(s,c=!1){c&&Wh(c);const{props:u,children:g}=s.vnode,m=My(s);nR(s,u,m,c),rR(s,g);const w=m?ER(s,c):void 0;return c&&Wh(!1),w}function ER(s,c){const u=s.type;s.accessCache=Object.create(null),s.proxy=new Proxy(s.ctx,Fh);const{setup:g}=u;if(g){const m=s.setupContext=g.length>1?Ny(s):null,w=er(s);wi();const b=jo(g,s,0,[s.props,m]);if(Fo(),w(),mg(b)){if(b.then(Gh,Gh),c)return b.then(_=>{Kh(s,_,c)}).catch(_=>{or(_,s,0)});s.asyncDep=b}else Kh(s,b,c)}else Py(s,c)}function Kh(s,c,u){$e(c)?s.type.__ssrInlineRender?s.ssrRender=c:s.render=c:Ct(c)&&(s.setupState=Sg(c)),Py(s,u)}let Dl,Yh;function DR(s){Dl=s,Yh=c=>{c.render._rc&&(c.withProxy=new Proxy(c.ctx,LL))}}const SR=()=>!Dl;function Py(s,c,u){const g=s.type;if(!s.render){if(!c&&Dl&&!g.render){const m=g.template||Ng(s).template;if(m){const{isCustomElement:w,compilerOptions:b}=s.appContext.config,{delimiters:_,compilerOptions:f}=g,v=Mt(Mt({isCustomElement:w,delimiters:_},b),f);g.render=Dl(m,v)}}s.render=g.render||_n,Yh&&Yh(s)}{const m=er(s);wi();try{YL(s)}finally{Fo(),m()}}}const TR={get(s,c){return Cn(s,"get",""),s[c]}};function Ny(s){const c=u=>{s.exposed=u||{}};return{attrs:new Proxy(s.attrs,TR),slots:s.slots,emit:s.emit,expose:c}}function Sa(s){return s.exposed?s.exposeProxy||(s.exposeProxy=new Proxy(Sg(jl(s.exposed)),{get(c,u){if(u in c)return c[u];if(u in ia)return ia[u](s)},has(c,u){return u in c||u in ia}})):s.proxy}function Qh(s,c=!0){return $e(s)?s.displayName||s.name:s.name||c&&s.__name}function IR(s){return $e(s)&&"__vccOpts"in s}const un=(s,c)=>QO(s,c,Da);function na(s,c,u=kt){const g=Uo(),m=hn(c),w=Nn(c),b=M1((f,v)=>{let x;return fy(()=>{const y=s[c];co(x,y)&&(x=y,v())}),{get(){return f(),u.get?u.get(x):x},set(y){const A=g.vnode.props;!(A&&(c in A||m in A||w in A)&&(`onUpdate:${c}`in A||`onUpdate:${m}`in A||`onUpdate:${w}`in A))&&co(y,x)&&(x=y,v()),g.emit(`update:${c}`,u.set?u.set(y):y)}}}),_=c==="modelValue"?"modelModifiers":`${c}Modifiers`;return b[Symbol.iterator]=()=>{let f=0;return{next(){return f<2?{value:f++?s[_]||{}:b,done:!1}:{done:!0}}}},b}function Kl(s,c,u){const g=arguments.length;return g===2?Ct(c)&&!Pe(c)?bi(c)?Be(s,null,[c]):Be(s,c):Be(s,null,c):(g>3?u=Array.prototype.slice.call(arguments,2):g===3&&bi(u)&&(u=[u]),Be(s,c,u))}function MR(){}function BR(s,c,u,g){const m=u[g];if(m&&Oy(m,s))return m;const w=c();return w.memo=s.slice(),w.memoIndex=g,u[g]=w}function Oy(s,c){const u=s.memo;if(u.length!=c.length)return!1;for(let g=0;g<u.length;g++)if(co(u[g],c[g]))return!1;return Xi>0&&wn&&wn.push(s),!0}const Ly="3.4.30",PR=_n,NR=lL,OR=zr,LR=R1,RR={createComponentInstance:Iy,setupComponent:By,renderComponentRoot:gl,setCurrentRenderingInstance:fa,isVNode:bi,normalizeVNode:Pn,getComponentPublicInstance:Sa},zR=RR,jR=null,FR=null,VR=null;/**
* @vue/runtime-dom v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const UR="http://www.w3.org/2000/svg",HR="http://www.w3.org/1998/Math/MathML",Oo=typeof document<"u"?document:null,dv=Oo&&Oo.createElement("template"),$R={insert:(s,c,u)=>{c.insertBefore(s,u||null)},remove:s=>{const c=s.parentNode;c&&c.removeChild(s)},createElement:(s,c,u,g)=>{const m=c==="svg"?Oo.createElementNS(UR,s):c==="mathml"?Oo.createElementNS(HR,s):u?Oo.createElement(s,{is:u}):Oo.createElement(s);return s==="select"&&g&&g.multiple!=null&&m.setAttribute("multiple",g.multiple),m},createText:s=>Oo.createTextNode(s),createComment:s=>Oo.createComment(s),setText:(s,c)=>{s.nodeValue=c},setElementText:(s,c)=>{s.textContent=c},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>Oo.querySelector(s),setScopeId(s,c){s.setAttribute(c,"")},insertStaticContent(s,c,u,g,m,w){const b=u?u.previousSibling:c.lastChild;if(m&&(m===w||m.nextSibling))for(;c.insertBefore(m.cloneNode(!0),u),!(m===w||!(m=m.nextSibling)););else{dv.innerHTML=g==="svg"?`<svg>${s}</svg>`:g==="mathml"?`<math>${s}</math>`:s;const _=dv.content;if(g==="svg"||g==="mathml"){const f=_.firstChild;for(;f.firstChild;)_.appendChild(f.firstChild);_.removeChild(f)}c.insertBefore(_,u)}return[b?b.nextSibling:c.firstChild,u?u.previousSibling:c.lastChild]}},ni="transition",Qs="animation",Xr=Symbol("_vtc"),Fg=(s,{slots:c})=>Kl(Cy,zy(s),c);Fg.displayName="Transition";const Ry={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},qR=Fg.props=Mt({},zg,Ry),$i=(s,c=[])=>{Pe(s)?s.forEach(u=>u(...c)):s&&s(...c)},uv=s=>s?Pe(s)?s.some(c=>c.length>1):s.length>1:!1;function zy(s){const c={};for(const J in s)J in Ry||(c[J]=s[J]);if(s.css===!1)return c;const{name:u="v",type:g,duration:m,enterFromClass:w=`${u}-enter-from`,enterActiveClass:b=`${u}-enter-active`,enterToClass:_=`${u}-enter-to`,appearFromClass:f=w,appearActiveClass:v=b,appearToClass:x=_,leaveFromClass:y=`${u}-leave-from`,leaveActiveClass:A=`${u}-leave-active`,leaveToClass:E=`${u}-leave-to`}=s,M=WR(m),P=M&&M[0],z=M&&M[1],{onBeforeEnter:F,onEnter:j,onEnterCancelled:O,onLeave:H,onLeaveCancelled:q,onBeforeAppear:G=F,onAppear:I=j,onAppearCancelled:V=O}=c,W=(J,he,Ae)=>{si(J,he?x:_),si(J,he?v:b),Ae&&Ae()},K=(J,he)=>{J._isLeaving=!1,si(J,y),si(J,E),si(J,A),he&&he()},le=J=>(he,Ae)=>{const be=J?I:j,Y=()=>W(he,J,Ae);$i(be,[he,Y]),hv(()=>{si(he,J?f:w),No(he,J?x:_),uv(be)||gv(he,g,P,Y)})};return Mt(c,{onBeforeEnter(J){$i(F,[J]),No(J,w),No(J,b)},onBeforeAppear(J){$i(G,[J]),No(J,f),No(J,v)},onEnter:le(!1),onAppear:le(!0),onLeave(J,he){J._isLeaving=!0;const Ae=()=>K(J,he);No(J,y),No(J,A),Fy(),hv(()=>{J._isLeaving&&(si(J,y),No(J,E),uv(H)||gv(J,g,z,Ae))}),$i(H,[J,Ae])},onEnterCancelled(J){W(J,!1),$i(O,[J])},onAppearCancelled(J){W(J,!0),$i(V,[J])},onLeaveCancelled(J){K(J),$i(q,[J])}})}function WR(s){if(s==null)return null;if(Ct(s))return[vh(s.enter),vh(s.leave)];{const c=vh(s);return[c,c]}}function vh(s){return _l(s)}function No(s,c){c.split(/\s+/).forEach(u=>u&&s.classList.add(u)),(s[Xr]||(s[Xr]=new Set)).add(c)}function si(s,c){c.split(/\s+/).forEach(g=>g&&s.classList.remove(g));const u=s[Xr];u&&(u.delete(c),u.size||(s[Xr]=void 0))}function hv(s){requestAnimationFrame(()=>{requestAnimationFrame(s)})}let GR=0;function gv(s,c,u,g){const m=s._endId=++GR,w=()=>{m===s._endId&&g()};if(u)return setTimeout(w,u);const{type:b,timeout:_,propCount:f}=jy(s,c);if(!b)return g();const v=b+"end";let x=0;const y=()=>{s.removeEventListener(v,A),w()},A=E=>{E.target===s&&++x>=f&&y()};setTimeout(()=>{x<f&&y()},_+1),s.addEventListener(v,A)}function jy(s,c){const u=window.getComputedStyle(s),g=M=>(u[M]||"").split(", "),m=g(`${ni}Delay`),w=g(`${ni}Duration`),b=pv(m,w),_=g(`${Qs}Delay`),f=g(`${Qs}Duration`),v=pv(_,f);let x=null,y=0,A=0;c===ni?b>0&&(x=ni,y=b,A=w.length):c===Qs?v>0&&(x=Qs,y=v,A=f.length):(y=Math.max(b,v),x=y>0?b>v?ni:Qs:null,A=x?x===ni?w.length:f.length:0);const E=x===ni&&/\b(transform|all)(,|$)/.test(g(`${ni}Property`).toString());return{type:x,timeout:y,propCount:A,hasTransform:E}}function pv(s,c){for(;s.length<c.length;)s=s.concat(s);return Math.max(...c.map((u,g)=>mv(u)+mv(s[g])))}function mv(s){return s==="auto"?0:Number(s.slice(0,-1).replace(",","."))*1e3}function Fy(){return document.body.offsetHeight}function KR(s,c,u){const g=s[Xr];g&&(c=(c?[c,...g]:[...g]).join(" ")),c==null?s.removeAttribute("class"):u?s.setAttribute("class",c):s.className=c}const Sl=Symbol("_vod"),Vy=Symbol("_vsh"),Uy={beforeMount(s,{value:c},{transition:u}){s[Sl]=s.style.display==="none"?"":s.style.display,u&&c?u.beforeEnter(s):Zs(s,c)},mounted(s,{value:c},{transition:u}){u&&c&&u.enter(s)},updated(s,{value:c,oldValue:u},{transition:g}){!c!=!u&&(g?c?(g.beforeEnter(s),Zs(s,!0),g.enter(s)):g.leave(s,()=>{Zs(s,!1)}):Zs(s,c))},beforeUnmount(s,{value:c}){Zs(s,c)}};function Zs(s,c){s.style.display=c?s[Sl]:"none",s[Vy]=!c}function YR(){Uy.getSSRProps=({value:s})=>{if(!s)return{style:{display:"none"}}}}const Hy=Symbol("");function QR(s){const c=Uo();if(!c)return;const u=c.ut=(m=s(c.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${c.uid}"]`)).forEach(w=>Jh(w,m))},g=()=>{const m=s(c.proxy);Zh(c.subTree,m),u(m)};vn(()=>{my(g);const m=new MutationObserver(g);m.observe(c.subTree.el.parentNode,{childList:!0}),Wl(()=>m.disconnect())})}function Zh(s,c){if(s.shapeFlag&128){const u=s.suspense;s=u.activeBranch,u.pendingBranch&&!u.isHydrating&&u.effects.push(()=>{Zh(u.activeBranch,c)})}for(;s.component;)s=s.component.subTree;if(s.shapeFlag&1&&s.el)Jh(s.el,c);else if(s.type===Je)s.children.forEach(u=>Zh(u,c));else if(s.type===Yi){let{el:u,anchor:g}=s;for(;u&&(Jh(u,c),u!==g);)u=u.nextSibling}}function Jh(s,c){if(s.nodeType===1){const u=s.style;let g="";for(const m in c)u.setProperty(`--${m}`,c[m]),g+=`--${m}: ${c[m]};`;u[Hy]=g}}const ZR=/(^|;)\s*display\s*:/;function JR(s,c,u){const g=s.style,m=Bt(u);let w=!1;if(u&&!m){if(c)if(Bt(c))for(const b of c.split(";")){const _=b.slice(0,b.indexOf(":")).trim();u[_]==null&&ml(g,_,"")}else for(const b in c)u[b]==null&&ml(g,b,"");for(const b in u)b==="display"&&(w=!0),ml(g,b,u[b])}else if(m){if(c!==u){const b=g[Hy];b&&(u+=";"+b),g.cssText=u,w=ZR.test(u)}}else c&&s.removeAttribute("style");Sl in s&&(s[Sl]=w?g.display:"",s[Vy]&&(g.display="none"))}const fv=/\s*!important$/;function ml(s,c,u){if(Pe(u))u.forEach(g=>ml(s,c,g));else if(u==null&&(u=""),c.startsWith("--"))s.setProperty(c,u);else{const g=XR(s,c);fv.test(u)?s.setProperty(Nn(g),u.replace(fv,""),"important"):s[g]=u}}const kv=["Webkit","Moz","ms"],yh={};function XR(s,c){const u=yh[c];if(u)return u;let g=hn(c);if(g!=="filter"&&g in s)return yh[c]=g;g=va(g);for(let m=0;m<kv.length;m++){const w=kv[m]+g;if(w in s)return yh[c]=w}return c}const bv="http://www.w3.org/1999/xlink";function _v(s,c,u,g,m,w=xO(c)){g&&c.startsWith("xlink:")?u==null?s.removeAttributeNS(bv,c.slice(6,c.length)):s.setAttributeNS(bv,c,u):u==null||w&&!u1(u)?s.removeAttribute(c):s.setAttribute(c,w?"":Ao(u)?String(u):u)}function e7(s,c,u,g,m,w,b){if(c==="innerHTML"||c==="textContent"){g&&b(g,m,w),s[c]=u??"";return}const _=s.tagName;if(c==="value"&&_!=="PROGRESS"&&!_.includes("-")){const v=_==="OPTION"?s.getAttribute("value")||"":s.value,x=u==null?"":String(u);(v!==x||!("_value"in s))&&(s.value=x),u==null&&s.removeAttribute(c),s._value=u;return}let f=!1;if(u===""||u==null){const v=typeof s[c];v==="boolean"?u=u1(u):u==null&&v==="string"?(u="",f=!0):v==="number"&&(u=0,f=!0)}try{s[c]=u}catch{}f&&s.removeAttribute(c)}function Ro(s,c,u,g){s.addEventListener(c,u,g)}function t7(s,c,u,g){s.removeEventListener(c,u,g)}const wv=Symbol("_vei");function n7(s,c,u,g,m=null){const w=s[wv]||(s[wv]={}),b=w[c];if(g&&b)b.value=g;else{const[_,f]=o7(c);if(g){const v=w[c]=s7(g,m);Ro(s,_,v,f)}else b&&(t7(s,_,b,f),w[c]=void 0)}}const Av=/(?:Once|Passive|Capture)$/;function o7(s){let c;if(Av.test(s)){c={};let g;for(;g=s.match(Av);)s=s.slice(0,s.length-g[0].length),c[g[0].toLowerCase()]=!0}return[s[2]===":"?s.slice(3):Nn(s.slice(2)),c]}let xh=0;const i7=Promise.resolve(),r7=()=>xh||(i7.then(()=>xh=0),xh=Date.now());function s7(s,c){const u=g=>{if(!g._vts)g._vts=Date.now();else if(g._vts<=u.attached)return;On(a7(g,u.value),c,5,[g])};return u.value=s,u.attached=r7(),u}function a7(s,c){if(Pe(c)){const u=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{u.call(s),s._stopped=!0},c.map(g=>m=>!m._stopped&&g&&g(m))}else return c}const Cv=s=>s.charCodeAt(0)===111&&s.charCodeAt(1)===110&&s.charCodeAt(2)>96&&s.charCodeAt(2)<123,c7=(s,c,u,g,m,w,b,_,f)=>{const v=m==="svg";c==="class"?KR(s,g,v):c==="style"?JR(s,u,g):Ca(c)?gg(c)||n7(s,c,u,g,b):(c[0]==="."?(c=c.slice(1),!0):c[0]==="^"?(c=c.slice(1),!1):l7(s,c,g,v))?(e7(s,c,g,w,b,_,f),!s.tagName.includes("-")&&(c==="value"||c==="checked"||c==="selected")&&_v(s,c,g,v,b,c!=="value")):(c==="true-value"?s._trueValue=g:c==="false-value"&&(s._falseValue=g),_v(s,c,g,v))};function l7(s,c,u,g){if(g)return!!(c==="innerHTML"||c==="textContent"||c in s&&Cv(c)&&$e(u));if(c==="spellcheck"||c==="draggable"||c==="translate"||c==="form"||c==="list"&&s.tagName==="INPUT"||c==="type"&&s.tagName==="TEXTAREA")return!1;if(c==="width"||c==="height"){const m=s.tagName;if(m==="IMG"||m==="VIDEO"||m==="CANVAS"||m==="SOURCE")return!1}return Cv(c)&&Bt(u)?!1:c in s}/*! #__NO_SIDE_EFFECTS__ */function $y(s,c,u){const g=ya(s,c);class m extends Yl{constructor(b){super(g,b,u)}}return m.def=g,m}/*! #__NO_SIDE_EFFECTS__ */const d7=(s,c)=>$y(s,c,ex),u7=typeof HTMLElement<"u"?HTMLElement:class{};class Yl extends u7{constructor(c,u={},g){super(),this._def=c,this._props=u,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&g?g(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,is(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),Xh(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let g=0;g<this.attributes.length;g++)this._setAttr(this.attributes[g].name);this._ob=new MutationObserver(g=>{for(const m of g)this._setAttr(m.attributeName)}),this._ob.observe(this,{attributes:!0});const c=(g,m=!1)=>{const{props:w,styles:b}=g;let _;if(w&&!Pe(w))for(const f in w){const v=w[f];(v===Number||v&&v.type===Number)&&(f in this._props&&(this._props[f]=_l(this._props[f])),(_||(_=Object.create(null)))[hn(f)]=!0)}this._numberProps=_,m&&this._resolveProps(g),this._applyStyles(b),this._update()},u=this._def.__asyncLoader;u?u().then(g=>c(g,!0)):c(this._def)}_resolveProps(c){const{props:u}=c,g=Pe(u)?u:Object.keys(u||{});for(const m of Object.keys(this))m[0]!=="_"&&g.includes(m)&&this._setProp(m,this[m],!0,!1);for(const m of g.map(hn))Object.defineProperty(this,m,{get(){return this._getProp(m)},set(w){this._setProp(m,w)}})}_setAttr(c){let u=this.hasAttribute(c)?this.getAttribute(c):void 0;const g=hn(c);this._numberProps&&this._numberProps[g]&&(u=_l(u)),this._setProp(g,u,!1)}_getProp(c){return this._props[c]}_setProp(c,u,g=!0,m=!0){u!==this._props[c]&&(this._props[c]=u,m&&this._instance&&this._update(),g&&(u===!0?this.setAttribute(Nn(c),""):typeof u=="string"||typeof u=="number"?this.setAttribute(Nn(c),u+""):u||this.removeAttribute(Nn(c))))}_update(){Xh(this._createVNode(),this.shadowRoot)}_createVNode(){const c=Be(this._def,Mt({},this._props));return this._instance||(c.ce=u=>{this._instance=u,u.isCE=!0;const g=(w,b)=>{this.dispatchEvent(new CustomEvent(w,{detail:b}))};u.emit=(w,...b)=>{g(w,b),Nn(w)!==w&&g(Nn(w),b)};let m=this;for(;m=m&&(m.parentNode||m.host);)if(m instanceof Yl){u.parent=m._instance,u.provides=m._instance.provides;break}}),c}_applyStyles(c){c&&c.forEach(u=>{const g=document.createElement("style");g.textContent=u,this.shadowRoot.appendChild(g)})}}function h7(s="$style"){{const c=Uo();if(!c)return kt;const u=c.type.__cssModules;if(!u)return kt;const g=u[s];return g||kt}}const qy=new WeakMap,Wy=new WeakMap,Tl=Symbol("_moveCb"),vv=Symbol("_enterCb"),Gy={name:"TransitionGroup",props:Mt({},qR,{tag:String,moveClass:String}),setup(s,{slots:c}){const u=Uo(),g=Rg();let m,w;return $l(()=>{if(!m.length)return;const b=s.moveClass||`${s.name||"v"}-move`;if(!b7(m[0].el,u.vnode.el,b))return;m.forEach(m7),m.forEach(f7);const _=m.filter(k7);Fy(),_.forEach(f=>{const v=f.el,x=v.style;No(v,b),x.transform=x.webkitTransform=x.transitionDuration="";const y=v[Tl]=A=>{A&&A.target!==v||(!A||/transform$/.test(A.propertyName))&&(v.removeEventListener("transitionend",y),v[Tl]=null,si(v,b))};v.addEventListener("transitionend",y)})}),()=>{const b=it(s),_=zy(b);let f=b.tag||Je;if(m=[],w)for(let v=0;v<w.length;v++){const x=w[v];x.el&&x.el instanceof Element&&(m.push(x),ki(x,Zr(x,_,g,u)),qy.set(x,x.el.getBoundingClientRect()))}w=c.default?Gl(c.default()):[];for(let v=0;v<w.length;v++){const x=w[v];x.key!=null&&ki(x,Zr(x,_,g,u))}return Be(f,null,w)}}},g7=s=>delete s.mode;Gy.props;const p7=Gy;function m7(s){const c=s.el;c[Tl]&&c[Tl](),c[vv]&&c[vv]()}function f7(s){Wy.set(s,s.el.getBoundingClientRect())}function k7(s){const c=qy.get(s),u=Wy.get(s),g=c.left-u.left,m=c.top-u.top;if(g||m){const w=s.el.style;return w.transform=w.webkitTransform=`translate(${g}px,${m}px)`,w.transitionDuration="0s",s}}function b7(s,c,u){const g=s.cloneNode(),m=s[Xr];m&&m.forEach(_=>{_.split(/\s+/).forEach(f=>f&&g.classList.remove(f))}),u.split(/\s+/).forEach(_=>_&&g.classList.add(_)),g.style.display="none";const w=c.nodeType===1?c:c.parentNode;w.appendChild(g);const{hasTransform:b}=jy(g);return w.removeChild(g),b}const _i=s=>{const c=s.props["onUpdate:modelValue"]||!1;return Pe(c)?u=>Hr(c,u):c};function _7(s){s.target.composing=!0}function yv(s){const c=s.target;c.composing&&(c.composing=!1,c.dispatchEvent(new Event("input")))}const Wn=Symbol("_assign"),St={created(s,{modifiers:{lazy:c,trim:u,number:g}},m){s[Wn]=_i(m);const w=g||m.props&&m.props.type==="number";Ro(s,c?"change":"input",b=>{if(b.target.composing)return;let _=s.value;u&&(_=_.trim()),w&&(_=bl(_)),s[Wn](_)}),u&&Ro(s,"change",()=>{s.value=s.value.trim()}),c||(Ro(s,"compositionstart",_7),Ro(s,"compositionend",yv),Ro(s,"change",yv))},mounted(s,{value:c}){s.value=c??""},beforeUpdate(s,{value:c,oldValue:u,modifiers:{lazy:g,trim:m,number:w}},b){if(s[Wn]=_i(b),s.composing)return;const _=(w||s.type==="number")&&!/^0\d/.test(s.value)?bl(s.value):s.value,f=c??"";_!==f&&(document.activeElement===s&&s.type!=="range"&&(g&&c===u||m&&s.value.trim()===f)||(s.value=f))}},wo={deep:!0,created(s,c,u){s[Wn]=_i(u),Ro(s,"change",()=>{const g=s._modelValue,m=es(s),w=s.checked,b=s[Wn];if(Pe(g)){const _=Ol(g,m),f=_!==-1;if(w&&!f)b(g.concat(m));else if(!w&&f){const v=[...g];v.splice(_,1),b(v)}}else if(nr(g)){const _=new Set(g);w?_.add(m):_.delete(m),b(_)}else b(Ky(s,w))})},mounted:xv,beforeUpdate(s,c,u){s[Wn]=_i(u),xv(s,c,u)}};function xv(s,{value:c,oldValue:u},g){s._modelValue=c,Pe(c)?s.checked=Ol(c,g.props.value)>-1:nr(c)?s.checked=c.has(g.props.value):c!==u&&(s.checked=fi(c,Ky(s,!0)))}const Vg={created(s,{value:c},u){s.checked=fi(c,u.props.value),s[Wn]=_i(u),Ro(s,"change",()=>{s[Wn](es(s))})},beforeUpdate(s,{value:c,oldValue:u},g){s[Wn]=_i(g),c!==u&&(s.checked=fi(c,g.props.value))}},Kr={deep:!0,created(s,{value:c,modifiers:{number:u}},g){const m=nr(c);Ro(s,"change",()=>{const w=Array.prototype.filter.call(s.options,b=>b.selected).map(b=>u?bl(es(b)):es(b));s[Wn](s.multiple?m?new Set(w):w:w[0]),s._assigning=!0,is(()=>{s._assigning=!1})}),s[Wn]=_i(g)},mounted(s,{value:c,modifiers:{number:u}}){Ev(s,c)},beforeUpdate(s,c,u){s[Wn]=_i(u)},updated(s,{value:c,modifiers:{number:u}}){s._assigning||Ev(s,c)}};function Ev(s,c,u){const g=s.multiple,m=Pe(c);if(!(g&&!m&&!nr(c))){for(let w=0,b=s.options.length;w<b;w++){const _=s.options[w],f=es(_);if(g)if(m){const v=typeof f;v==="string"||v==="number"?_.selected=c.some(x=>String(x)===String(f)):_.selected=Ol(c,f)>-1}else _.selected=c.has(f);else if(fi(es(_),c)){s.selectedIndex!==w&&(s.selectedIndex=w);return}}!g&&s.selectedIndex!==-1&&(s.selectedIndex=-1)}}function es(s){return"_value"in s?s._value:s.value}function Ky(s,c){const u=c?"_trueValue":"_falseValue";return u in s?s[u]:c}const Yy={created(s,c,u){ul(s,c,u,null,"created")},mounted(s,c,u){ul(s,c,u,null,"mounted")},beforeUpdate(s,c,u,g){ul(s,c,u,g,"beforeUpdate")},updated(s,c,u,g){ul(s,c,u,g,"updated")}};function Qy(s,c){switch(s){case"SELECT":return Kr;case"TEXTAREA":return St;default:switch(c){case"checkbox":return wo;case"radio":return Vg;default:return St}}}function ul(s,c,u,g,m){const b=Qy(s.tagName,u.props&&u.props.type)[m];b&&b(s,c,u,g)}function w7(){St.getSSRProps=({value:s})=>({value:s}),Vg.getSSRProps=({value:s},c)=>{if(c.props&&fi(c.props.value,s))return{checked:!0}},wo.getSSRProps=({value:s},c)=>{if(Pe(s)){if(c.props&&Ol(s,c.props.value)>-1)return{checked:!0}}else if(nr(s)){if(c.props&&s.has(c.props.value))return{checked:!0}}else if(s)return{checked:!0}},Yy.getSSRProps=(s,c)=>{if(typeof c.type!="string")return;const u=Qy(c.type.toUpperCase(),c.props&&c.props.type);if(u.getSSRProps)return u.getSSRProps(s,c)}}const A7=["ctrl","shift","alt","meta"],C7={stop:s=>s.stopPropagation(),prevent:s=>s.preventDefault(),self:s=>s.target!==s.currentTarget,ctrl:s=>!s.ctrlKey,shift:s=>!s.shiftKey,alt:s=>!s.altKey,meta:s=>!s.metaKey,left:s=>"button"in s&&s.button!==0,middle:s=>"button"in s&&s.button!==1,right:s=>"button"in s&&s.button!==2,exact:(s,c)=>A7.some(u=>s[`${u}Key`]&&!c.includes(u))},qt=(s,c)=>{const u=s._withMods||(s._withMods={}),g=c.join(".");return u[g]||(u[g]=(m,...w)=>{for(let b=0;b<c.length;b++){const _=C7[c[b]];if(_&&_(m,c))return}return s(m,...w)})},v7={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},y7=(s,c)=>{const u=s._withKeys||(s._withKeys={}),g=c.join(".");return u[g]||(u[g]=m=>{if(!("key"in m))return;const w=Nn(m.key);if(c.some(b=>b===w||v7[b]===w))return s(m)})},Zy=Mt({patchProp:c7},$R);let ca,Dv=!1;function Jy(){return ca||(ca=cy(Zy))}function Xy(){return ca=Dv?ca:ly(Zy),Dv=!0,ca}const Xh=(...s)=>{Jy().render(...s)},ex=(...s)=>{Xy().hydrate(...s)},tx=(...s)=>{const c=Jy().createApp(...s),{mount:u}=c;return c.mount=g=>{const m=ox(g);if(!m)return;const w=c._component;!$e(w)&&!w.render&&!w.template&&(w.template=m.innerHTML),m.innerHTML="";const b=u(m,!1,nx(m));return m instanceof Element&&(m.removeAttribute("v-cloak"),m.setAttribute("data-v-app","")),b},c},x7=(...s)=>{const c=Xy().createApp(...s),{mount:u}=c;return c.mount=g=>{const m=ox(g);if(m)return u(m,!0,nx(m))},c};function nx(s){if(s instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&s instanceof MathMLElement)return"mathml"}function ox(s){return Bt(s)?document.querySelector(s):s}let Sv=!1;const E7=()=>{Sv||(Sv=!0,w7(),YR())};/**
* vue v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const D7=()=>{},S7=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Cy,BaseTransitionPropsValidators:zg,Comment:on,DeprecationTypes:VR,EffectScope:kg,ErrorCodes:cL,ErrorTypeStrings:NR,Fragment:Je,KeepAlive:pR,ReactiveEffect:Yr,Static:Yi,Suspense:EL,Teleport:wR,Text:Ji,TrackOpTypes:rL,Transition:Fg,TransitionGroup:p7,TriggerOpTypes:sL,VueElement:Yl,assertNumber:aL,callWithAsyncErrorHandling:On,callWithErrorHandling:jo,camelize:hn,capitalize:va,cloneVNode:Co,compatUtils:FR,compile:D7,computed:un,createApp:tx,createBlock:Jr,createCommentVNode:He,createElementBlock:de,createElementVNode:N,createHydrationRenderer:ly,createPropsRestProxy:GL,createRenderer:cy,createSSRApp:x7,createSlots:BL,createStaticVNode:vR,createTextVNode:tt,createVNode:Be,customRef:M1,defineAsyncComponent:PL,defineComponent:ya,defineCustomElement:$y,defineEmits:zL,defineExpose:jL,defineModel:UL,defineOptions:FL,defineProps:RL,defineSSRCustomElement:d7,defineSlots:VL,devtools:OR,effect:SO,effectScope:bg,getCurrentInstance:Uo,getCurrentScope:_g,getTransitionRawChildren:Gl,guardReactiveProps:Sy,h:Kl,handleError:or,hasInjectionContext:X1,hydrate:ex,initCustomFormatter:MR,initDirectivesForSSR:E7,inject:qn,isMemoSame:Oy,isProxy:xg,isReactive:mi,isReadonly:Qr,isRef:$t,isRuntimeOnly:SR,isShallow:ha,isVNode:bi,markRaw:jl,mergeDefaults:WL,mergeModels:Q1,mergeProps:Ty,nextTick:is,normalizeClass:Ne,normalizeProps:vO,normalizeStyle:Zi,onActivated:by,onBeforeMount:U1,onBeforeUnmount:ql,onBeforeUpdate:H1,onDeactivated:_y,onErrorCaptured:G1,onMounted:vn,onRenderTracked:W1,onRenderTriggered:q1,onScopeDispose:p1,onServerPrefetch:$1,onUnmounted:Wl,onUpdated:$l,openBlock:ce,popScopeId:fL,provide:ra,proxyRefs:Sg,pushScopeId:mL,queuePostFlushCb:Al,reactive:so,readonly:yg,ref:fe,registerRuntimeCompiler:DR,render:Xh,renderList:Rt,renderSlot:NL,resolveComponent:Bg,resolveDirective:yL,resolveDynamicComponent:vL,resolveFilter:jR,resolveTransitionHooks:Zr,setBlockTracking:qh,setDevtoolsHook:LR,setTransitionHooks:ki,shallowReactive:vg,shallowReadonly:YO,shallowRef:T1,ssrContextKey:gy,ssrUtils:zR,stop:TO,toDisplayString:Ze,toHandlerKey:oa,toHandlers:OL,toRaw:it,toRef:iL,toRefs:B1,toValue:XO,transformVNodeArgs:AR,triggerRef:JO,unref:Xe,useAttrs:qL,useCssModule:h7,useCssVars:QR,useModel:na,useSSRContext:py,useSlots:$L,useTransitionState:Rg,vModelCheckbox:wo,vModelDynamic:Yy,vModelRadio:Vg,vModelSelect:Kr,vModelText:St,vShow:Uy,version:Ly,warn:PR,watch:zt,watchEffect:uR,watchPostEffect:my,watchSyncEffect:fy,withAsyncContext:KL,withCtx:Lo,withDefaults:HL,withDirectives:at,withKeys:y7,withMemo:BR,withModifiers:qt,withScopeId:kL},Symbol.toStringTag,{value:"Module"}));var T7=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let ix;const Ql=s=>ix=s,rx=Symbol();function eg(s){return s&&typeof s=="object"&&Object.prototype.toString.call(s)==="[object Object]"&&typeof s.toJSON!="function"}var la;(function(s){s.direct="direct",s.patchObject="patch object",s.patchFunction="patch function"})(la||(la={}));function I7(){const s=bg(!0),c=s.run(()=>fe({}));let u=[],g=[];const m=jl({install(w){Ql(m),m._a=w,w.provide(rx,m),w.config.globalProperties.$pinia=m,g.forEach(b=>u.push(b)),g=[]},use(w){return!this._a&&!T7?g.push(w):u.push(w),this},_p:u,_a:null,_e:s,_s:new Map,state:c});return m}const sx=()=>{};function Tv(s,c,u,g=sx){s.push(c);const m=()=>{const w=s.indexOf(c);w>-1&&(s.splice(w,1),g())};return!u&&_g()&&p1(m),m}function Rr(s,...c){s.slice().forEach(u=>{u(...c)})}const M7=s=>s();function tg(s,c){s instanceof Map&&c instanceof Map&&c.forEach((u,g)=>s.set(g,u)),s instanceof Set&&c instanceof Set&&c.forEach(s.add,s);for(const u in c){if(!c.hasOwnProperty(u))continue;const g=c[u],m=s[u];eg(m)&&eg(g)&&s.hasOwnProperty(u)&&!$t(g)&&!mi(g)?s[u]=tg(m,g):s[u]=g}return s}const B7=Symbol();function P7(s){return!eg(s)||!s.hasOwnProperty(B7)}const{assign:ai}=Object;function N7(s){return!!($t(s)&&s.effect)}function O7(s,c,u,g){const{state:m,actions:w,getters:b}=c,_=u.state.value[s];let f;function v(){_||(u.state.value[s]=m?m():{});const x=B1(u.state.value[s]);return ai(x,w,Object.keys(b||{}).reduce((y,A)=>(y[A]=jl(un(()=>{Ql(u);const E=u._s.get(s);return b[A].call(E,E)})),y),{}))}return f=ax(s,v,c,u,g,!0),f}function ax(s,c,u={},g,m,w){let b;const _=ai({actions:{}},u),f={deep:!0};let v,x,y=[],A=[],E;const M=g.state.value[s];!w&&!M&&(g.state.value[s]={}),fe({});let P;function z(V){let W;v=x=!1,typeof V=="function"?(V(g.state.value[s]),W={type:la.patchFunction,storeId:s,events:E}):(tg(g.state.value[s],V),W={type:la.patchObject,payload:V,storeId:s,events:E});const K=P=Symbol();is().then(()=>{P===K&&(v=!0)}),x=!0,Rr(y,W,g.state.value[s])}const F=w?function(){const{state:W}=u,K=W?W():{};this.$patch(le=>{ai(le,K)})}:sx;function j(){b.stop(),y=[],A=[],g._s.delete(s)}function O(V,W){return function(){Ql(g);const K=Array.from(arguments),le=[],J=[];function he(Y){le.push(Y)}function Ae(Y){J.push(Y)}Rr(A,{args:K,name:V,store:q,after:he,onError:Ae});let be;try{be=W.apply(this&&this.$id===s?this:q,K)}catch(Y){throw Rr(J,Y),Y}return be instanceof Promise?be.then(Y=>(Rr(le,Y),Y)).catch(Y=>(Rr(J,Y),Promise.reject(Y))):(Rr(le,be),be)}}const H={_p:g,$id:s,$onAction:Tv.bind(null,A),$patch:z,$reset:F,$subscribe(V,W={}){const K=Tv(y,V,W.detached,()=>le()),le=b.run(()=>zt(()=>g.state.value[s],J=>{(W.flush==="sync"?x:v)&&V({storeId:s,type:la.direct,events:E},J)},ai({},f,W)));return K},$dispose:j},q=so(H);g._s.set(s,q);const I=(g._a&&g._a.runWithContext||M7)(()=>g._e.run(()=>(b=bg()).run(c)));for(const V in I){const W=I[V];if($t(W)&&!N7(W)||mi(W))w||(M&&P7(W)&&($t(W)?W.value=M[V]:tg(W,M[V])),g.state.value[s][V]=W);else if(typeof W=="function"){const K=O(V,W);I[V]=K,_.actions[V]=W}}return ai(q,I),ai(it(q),I),Object.defineProperty(q,"$state",{get:()=>g.state.value[s],set:V=>{z(W=>{ai(W,V)})}}),g._p.forEach(V=>{ai(q,b.run(()=>V({store:q,app:g._a,pinia:g,options:_})))}),M&&w&&u.hydrate&&u.hydrate(q.$state,M),v=!0,x=!0,q}function L7(s,c,u){let g,m;const w=typeof c=="function";g=s,m=w?u:c;function b(_,f){const v=X1();return _=_||(v?qn(rx,null):null),_&&Ql(_),_=ix,_._s.has(g)||(w?ax(g,c,m,_):O7(g,m,_)),_._s.get(g)}return b.$id=g,b}const R7=(s,c)=>{const u=s.__vccOpts||s;for(const[g,m]of c)u[g]=m;return u},z7={},j7={class:"modal-backdrop fade show d-block",style:{background:"rgba(0, 0, 0, 0.5)",position:"fixed",top:"0",right:"0",bottom:"0",left:"0"},"aria-modal":"true"},F7=N("div",{class:"modal-dialog modal-dialog-centered",role:"document",style:{"pointer-events":"none"}},[N("div",{class:"modal-content",style:{"pointer-events":"auto"}},[N("div",{class:"modal-header"},[N("h5",{class:"modal-title"},"..")]),N("div",{class:"modal-body"},".")])],-1),V7=[F7];function U7(s,c){return ce(),de("div",j7,V7)}const H7=R7(z7,[["render",U7]]),$7=(s,c)=>{localStorage.setItem(s,JSON.stringify(c))},q7=s=>{const c=localStorage.getItem(s);if(!c)return null;try{return JSON.parse(c)}catch{return c}},W7=()=>{localStorage.clear()},ng={setItem:$7,getItem:q7,clear:W7},G7=async s=>typeof s=="object"&&s!==null?s:{err:[s]},K7=async s=>{let c=[];if(typeof s=="object"&&s!==null){const u=Object.keys(s);for(const g of u){const m=g.split(".")[0];c.includes(m)||c.push(m)}}return c},Y7=s=>{const c={};return s.forEach(u=>{c[u]=""}),c},Q7=(s,c)=>{if(Object.keys(s).length===0)return!1;let u=!0;for(let g of c)if(!s[g]){u=!1;break}return u},Z7=()=>{const s=ng.getItem("config");let c=[],u="",g=[],m=0;s&&(c=s.langs,u=s.default_lang,g=s.page_types,m=s.cache_enable);const w=ng.getItem("auth");let b="";return w&&(b=w.token),{configLangs:c,configDefaultLang:u,pageTypes:g,cacheEnable:m,token:b}},J7=(s,c)=>{const u=new URL(s);return new URLSearchParams(u.search).get(c)},X7=async s=>new Promise(c=>setTimeout(c,s)),ez=(s,c)=>typeof s[c]>"u"?!1:s[c],tz=()=>({action:ng.getItem("config").is_cache_enable?"disable":"enable"}),Tt={getItemFromArrayOrFalse:ez,delay:X7,createEmptyObj:Y7,parseError:G7,getErrorFields:K7,retrieveParamsFromStorage:Z7,retrieveParamsFromUrl:J7,isNotEmptyObj:Q7,getPostToggleCacheEnableFile:tz},nz=s=>{const c={success_page_add:"Page has been added",success_page_edit:"Page has been changed",success_client_edit:"Client has been changed",success_client_add:"Client has been added",success_product_edit:"Product has been changed",success_product_add:"Product has been added",success_image_position:"Position image has been changed",success_image_delete:"Image has been deleted",success_images_delete:"Images has been deleted",success_images_upload:"Images have been uploaded",fail_delete_images_no_items:"fail delete images no items",toggle_cache_enable:"toggle cache",clear_cache:"clear cache",create_sitemap:"create sitemap",cache_was_cleared:"Cache was cleared",sitemap_was_created:"Sitemap was created",success_edit_checkout:"Checkout has been updated",is_demo_true:"We're sorry, but this action is not available in the demo version.",internal_problem:"internal problem, see logs"};return c[s]?c[s]:s},Ht={ttt:nz};function cx(s,c){return function(){return s.apply(c,arguments)}}const{toString:oz}=Object.prototype,{getPrototypeOf:Ug}=Object,Zl=(s=>c=>{const u=oz.call(c);return s[u]||(s[u]=u.slice(8,-1).toLowerCase())})(Object.create(null)),uo=s=>(s=s.toLowerCase(),c=>Zl(c)===s),Jl=s=>c=>typeof c===s,{isArray:rs}=Array,_a=Jl("undefined");function iz(s){return s!==null&&!_a(s)&&s.constructor!==null&&!_a(s.constructor)&&Gn(s.constructor.isBuffer)&&s.constructor.isBuffer(s)}const lx=uo("ArrayBuffer");function rz(s){let c;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?c=ArrayBuffer.isView(s):c=s&&s.buffer&&lx(s.buffer),c}const sz=Jl("string"),Gn=Jl("function"),dx=Jl("number"),Xl=s=>s!==null&&typeof s=="object",az=s=>s===!0||s===!1,fl=s=>{if(Zl(s)!=="object")return!1;const c=Ug(s);return(c===null||c===Object.prototype||Object.getPrototypeOf(c)===null)&&!(Symbol.toStringTag in s)&&!(Symbol.iterator in s)},cz=uo("Date"),lz=uo("File"),dz=uo("Blob"),uz=uo("FileList"),hz=s=>Xl(s)&&Gn(s.pipe),gz=s=>{let c;return s&&(typeof FormData=="function"&&s instanceof FormData||Gn(s.append)&&((c=Zl(s))==="formdata"||c==="object"&&Gn(s.toString)&&s.toString()==="[object FormData]"))},pz=uo("URLSearchParams"),[mz,fz,kz,bz]=["ReadableStream","Request","Response","Headers"].map(uo),_z=s=>s.trim?s.trim():s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ta(s,c,{allOwnKeys:u=!1}={}){if(s===null||typeof s>"u")return;let g,m;if(typeof s!="object"&&(s=[s]),rs(s))for(g=0,m=s.length;g<m;g++)c.call(null,s[g],g,s);else{const w=u?Object.getOwnPropertyNames(s):Object.keys(s),b=w.length;let _;for(g=0;g<b;g++)_=w[g],c.call(null,s[_],_,s)}}function ux(s,c){c=c.toLowerCase();const u=Object.keys(s);let g=u.length,m;for(;g-- >0;)if(m=u[g],c===m.toLowerCase())return m;return null}const hx=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,gx=s=>!_a(s)&&s!==hx;function og(){const{caseless:s}=gx(this)&&this||{},c={},u=(g,m)=>{const w=s&&ux(c,m)||m;fl(c[w])&&fl(g)?c[w]=og(c[w],g):fl(g)?c[w]=og({},g):rs(g)?c[w]=g.slice():c[w]=g};for(let g=0,m=arguments.length;g<m;g++)arguments[g]&&Ta(arguments[g],u);return c}const wz=(s,c,u,{allOwnKeys:g}={})=>(Ta(c,(m,w)=>{u&&Gn(m)?s[w]=cx(m,u):s[w]=m},{allOwnKeys:g}),s),Az=s=>(s.charCodeAt(0)===65279&&(s=s.slice(1)),s),Cz=(s,c,u,g)=>{s.prototype=Object.create(c.prototype,g),s.prototype.constructor=s,Object.defineProperty(s,"super",{value:c.prototype}),u&&Object.assign(s.prototype,u)},vz=(s,c,u,g)=>{let m,w,b;const _={};if(c=c||{},s==null)return c;do{for(m=Object.getOwnPropertyNames(s),w=m.length;w-- >0;)b=m[w],(!g||g(b,s,c))&&!_[b]&&(c[b]=s[b],_[b]=!0);s=u!==!1&&Ug(s)}while(s&&(!u||u(s,c))&&s!==Object.prototype);return c},yz=(s,c,u)=>{s=String(s),(u===void 0||u>s.length)&&(u=s.length),u-=c.length;const g=s.indexOf(c,u);return g!==-1&&g===u},xz=s=>{if(!s)return null;if(rs(s))return s;let c=s.length;if(!dx(c))return null;const u=new Array(c);for(;c-- >0;)u[c]=s[c];return u},Ez=(s=>c=>s&&c instanceof s)(typeof Uint8Array<"u"&&Ug(Uint8Array)),Dz=(s,c)=>{const g=(s&&s[Symbol.iterator]).call(s);let m;for(;(m=g.next())&&!m.done;){const w=m.value;c.call(s,w[0],w[1])}},Sz=(s,c)=>{let u;const g=[];for(;(u=s.exec(c))!==null;)g.push(u);return g},Tz=uo("HTMLFormElement"),Iz=s=>s.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(u,g,m){return g.toUpperCase()+m}),Iv=(({hasOwnProperty:s})=>(c,u)=>s.call(c,u))(Object.prototype),Mz=uo("RegExp"),px=(s,c)=>{const u=Object.getOwnPropertyDescriptors(s),g={};Ta(u,(m,w)=>{let b;(b=c(m,w,s))!==!1&&(g[w]=b||m)}),Object.defineProperties(s,g)},Bz=s=>{px(s,(c,u)=>{if(Gn(s)&&["arguments","caller","callee"].indexOf(u)!==-1)return!1;const g=s[u];if(Gn(g)){if(c.enumerable=!1,"writable"in c){c.writable=!1;return}c.set||(c.set=()=>{throw Error("Can not rewrite read-only method '"+u+"'")})}})},Pz=(s,c)=>{const u={},g=m=>{m.forEach(w=>{u[w]=!0})};return rs(s)?g(s):g(String(s).split(c)),u},Nz=()=>{},Oz=(s,c)=>s!=null&&Number.isFinite(s=+s)?s:c,Eh="abcdefghijklmnopqrstuvwxyz",Mv="0123456789",mx={DIGIT:Mv,ALPHA:Eh,ALPHA_DIGIT:Eh+Eh.toUpperCase()+Mv},Lz=(s=16,c=mx.ALPHA_DIGIT)=>{let u="";const{length:g}=c;for(;s--;)u+=c[Math.random()*g|0];return u};function Rz(s){return!!(s&&Gn(s.append)&&s[Symbol.toStringTag]==="FormData"&&s[Symbol.iterator])}const zz=s=>{const c=new Array(10),u=(g,m)=>{if(Xl(g)){if(c.indexOf(g)>=0)return;if(!("toJSON"in g)){c[m]=g;const w=rs(g)?[]:{};return Ta(g,(b,_)=>{const f=u(b,m+1);!_a(f)&&(w[_]=f)}),c[m]=void 0,w}}return g};return u(s,0)},jz=uo("AsyncFunction"),Fz=s=>s&&(Xl(s)||Gn(s))&&Gn(s.then)&&Gn(s.catch),ie={isArray:rs,isArrayBuffer:lx,isBuffer:iz,isFormData:gz,isArrayBufferView:rz,isString:sz,isNumber:dx,isBoolean:az,isObject:Xl,isPlainObject:fl,isReadableStream:mz,isRequest:fz,isResponse:kz,isHeaders:bz,isUndefined:_a,isDate:cz,isFile:lz,isBlob:dz,isRegExp:Mz,isFunction:Gn,isStream:hz,isURLSearchParams:pz,isTypedArray:Ez,isFileList:uz,forEach:Ta,merge:og,extend:wz,trim:_z,stripBOM:Az,inherits:Cz,toFlatObject:vz,kindOf:Zl,kindOfTest:uo,endsWith:yz,toArray:xz,forEachEntry:Dz,matchAll:Sz,isHTMLForm:Tz,hasOwnProperty:Iv,hasOwnProp:Iv,reduceDescriptors:px,freezeMethods:Bz,toObjectSet:Pz,toCamelCase:Iz,noop:Nz,toFiniteNumber:Oz,findKey:ux,global:hx,isContextDefined:gx,ALPHABET:mx,generateString:Lz,isSpecCompliantForm:Rz,toJSONObject:zz,isAsyncFn:jz,isThenable:Fz};function Ye(s,c,u,g,m){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=s,this.name="AxiosError",c&&(this.code=c),u&&(this.config=u),g&&(this.request=g),m&&(this.response=m)}ie.inherits(Ye,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ie.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const fx=Ye.prototype,kx={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(s=>{kx[s]={value:s}});Object.defineProperties(Ye,kx);Object.defineProperty(fx,"isAxiosError",{value:!0});Ye.from=(s,c,u,g,m,w)=>{const b=Object.create(fx);return ie.toFlatObject(s,b,function(f){return f!==Error.prototype},_=>_!=="isAxiosError"),Ye.call(b,s.message,c,u,g,m),b.cause=s,b.name=s.name,w&&Object.assign(b,w),b};const Vz=null;function ig(s){return ie.isPlainObject(s)||ie.isArray(s)}function bx(s){return ie.endsWith(s,"[]")?s.slice(0,-2):s}function Bv(s,c,u){return s?s.concat(c).map(function(m,w){return m=bx(m),!u&&w?"["+m+"]":m}).join(u?".":""):c}function Uz(s){return ie.isArray(s)&&!s.some(ig)}const Hz=ie.toFlatObject(ie,{},null,function(c){return/^is[A-Z]/.test(c)});function ed(s,c,u){if(!ie.isObject(s))throw new TypeError("target must be an object");c=c||new FormData,u=ie.toFlatObject(u,{metaTokens:!0,dots:!1,indexes:!1},!1,function(P,z){return!ie.isUndefined(z[P])});const g=u.metaTokens,m=u.visitor||x,w=u.dots,b=u.indexes,f=(u.Blob||typeof Blob<"u"&&Blob)&&ie.isSpecCompliantForm(c);if(!ie.isFunction(m))throw new TypeError("visitor must be a function");function v(M){if(M===null)return"";if(ie.isDate(M))return M.toISOString();if(!f&&ie.isBlob(M))throw new Ye("Blob is not supported. Use a Buffer instead.");return ie.isArrayBuffer(M)||ie.isTypedArray(M)?f&&typeof Blob=="function"?new Blob([M]):Buffer.from(M):M}function x(M,P,z){let F=M;if(M&&!z&&typeof M=="object"){if(ie.endsWith(P,"{}"))P=g?P:P.slice(0,-2),M=JSON.stringify(M);else if(ie.isArray(M)&&Uz(M)||(ie.isFileList(M)||ie.endsWith(P,"[]"))&&(F=ie.toArray(M)))return P=bx(P),F.forEach(function(O,H){!(ie.isUndefined(O)||O===null)&&c.append(b===!0?Bv([P],H,w):b===null?P:P+"[]",v(O))}),!1}return ig(M)?!0:(c.append(Bv(z,P,w),v(M)),!1)}const y=[],A=Object.assign(Hz,{defaultVisitor:x,convertValue:v,isVisitable:ig});function E(M,P){if(!ie.isUndefined(M)){if(y.indexOf(M)!==-1)throw Error("Circular reference detected in "+P.join("."));y.push(M),ie.forEach(M,function(F,j){(!(ie.isUndefined(F)||F===null)&&m.call(c,F,ie.isString(j)?j.trim():j,P,A))===!0&&E(F,P?P.concat(j):[j])}),y.pop()}}if(!ie.isObject(s))throw new TypeError("data must be an object");return E(s),c}function Pv(s){const c={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g,function(g){return c[g]})}function Hg(s,c){this._pairs=[],s&&ed(s,this,c)}const _x=Hg.prototype;_x.append=function(c,u){this._pairs.push([c,u])};_x.toString=function(c){const u=c?function(g){return c.call(this,g,Pv)}:Pv;return this._pairs.map(function(m){return u(m[0])+"="+u(m[1])},"").join("&")};function $z(s){return encodeURIComponent(s).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function wx(s,c,u){if(!c)return s;const g=u&&u.encode||$z,m=u&&u.serialize;let w;if(m?w=m(c,u):w=ie.isURLSearchParams(c)?c.toString():new Hg(c,u).toString(g),w){const b=s.indexOf("#");b!==-1&&(s=s.slice(0,b)),s+=(s.indexOf("?")===-1?"?":"&")+w}return s}class Nv{constructor(){this.handlers=[]}use(c,u,g){return this.handlers.push({fulfilled:c,rejected:u,synchronous:g?g.synchronous:!1,runWhen:g?g.runWhen:null}),this.handlers.length-1}eject(c){this.handlers[c]&&(this.handlers[c]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(c){ie.forEach(this.handlers,function(g){g!==null&&c(g)})}}const Ax={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},qz=typeof URLSearchParams<"u"?URLSearchParams:Hg,Wz=typeof FormData<"u"?FormData:null,Gz=typeof Blob<"u"?Blob:null,Kz={isBrowser:!0,classes:{URLSearchParams:qz,FormData:Wz,Blob:Gz},protocols:["http","https","file","blob","url","data"]},$g=typeof window<"u"&&typeof document<"u",Yz=(s=>$g&&["ReactNative","NativeScript","NS"].indexOf(s)<0)(typeof navigator<"u"&&navigator.product),Qz=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Zz=$g&&window.location.href||"http://localhost",Jz=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:$g,hasStandardBrowserEnv:Yz,hasStandardBrowserWebWorkerEnv:Qz,origin:Zz},Symbol.toStringTag,{value:"Module"})),ao={...Jz,...Kz};function Xz(s,c){return ed(s,new ao.classes.URLSearchParams,Object.assign({visitor:function(u,g,m,w){return ao.isNode&&ie.isBuffer(u)?(this.append(g,u.toString("base64")),!1):w.defaultVisitor.apply(this,arguments)}},c))}function e6(s){return ie.matchAll(/\w+|\[(\w*)]/g,s).map(c=>c[0]==="[]"?"":c[1]||c[0])}function t6(s){const c={},u=Object.keys(s);let g;const m=u.length;let w;for(g=0;g<m;g++)w=u[g],c[w]=s[w];return c}function Cx(s){function c(u,g,m,w){let b=u[w++];if(b==="__proto__")return!0;const _=Number.isFinite(+b),f=w>=u.length;return b=!b&&ie.isArray(m)?m.length:b,f?(ie.hasOwnProp(m,b)?m[b]=[m[b],g]:m[b]=g,!_):((!m[b]||!ie.isObject(m[b]))&&(m[b]=[]),c(u,g,m[b],w)&&ie.isArray(m[b])&&(m[b]=t6(m[b])),!_)}if(ie.isFormData(s)&&ie.isFunction(s.entries)){const u={};return ie.forEachEntry(s,(g,m)=>{c(e6(g),m,u,0)}),u}return null}function n6(s,c,u){if(ie.isString(s))try{return(c||JSON.parse)(s),ie.trim(s)}catch(g){if(g.name!=="SyntaxError")throw g}return(u||JSON.stringify)(s)}const Ia={transitional:Ax,adapter:["xhr","http","fetch"],transformRequest:[function(c,u){const g=u.getContentType()||"",m=g.indexOf("application/json")>-1,w=ie.isObject(c);if(w&&ie.isHTMLForm(c)&&(c=new FormData(c)),ie.isFormData(c))return m?JSON.stringify(Cx(c)):c;if(ie.isArrayBuffer(c)||ie.isBuffer(c)||ie.isStream(c)||ie.isFile(c)||ie.isBlob(c)||ie.isReadableStream(c))return c;if(ie.isArrayBufferView(c))return c.buffer;if(ie.isURLSearchParams(c))return u.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),c.toString();let _;if(w){if(g.indexOf("application/x-www-form-urlencoded")>-1)return Xz(c,this.formSerializer).toString();if((_=ie.isFileList(c))||g.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return ed(_?{"files[]":c}:c,f&&new f,this.formSerializer)}}return w||m?(u.setContentType("application/json",!1),n6(c)):c}],transformResponse:[function(c){const u=this.transitional||Ia.transitional,g=u&&u.forcedJSONParsing,m=this.responseType==="json";if(ie.isResponse(c)||ie.isReadableStream(c))return c;if(c&&ie.isString(c)&&(g&&!this.responseType||m)){const b=!(u&&u.silentJSONParsing)&&m;try{return JSON.parse(c)}catch(_){if(b)throw _.name==="SyntaxError"?Ye.from(_,Ye.ERR_BAD_RESPONSE,this,null,this.response):_}}return c}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ao.classes.FormData,Blob:ao.classes.Blob},validateStatus:function(c){return c>=200&&c<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ie.forEach(["delete","get","head","post","put","patch"],s=>{Ia.headers[s]={}});const o6=ie.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),i6=s=>{const c={};let u,g,m;return s&&s.split(`
`).forEach(function(b){m=b.indexOf(":"),u=b.substring(0,m).trim().toLowerCase(),g=b.substring(m+1).trim(),!(!u||c[u]&&o6[u])&&(u==="set-cookie"?c[u]?c[u].push(g):c[u]=[g]:c[u]=c[u]?c[u]+", "+g:g)}),c},Ov=Symbol("internals");function Js(s){return s&&String(s).trim().toLowerCase()}function kl(s){return s===!1||s==null?s:ie.isArray(s)?s.map(kl):String(s)}function r6(s){const c=Object.create(null),u=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let g;for(;g=u.exec(s);)c[g[1]]=g[2];return c}const s6=s=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim());function Dh(s,c,u,g,m){if(ie.isFunction(g))return g.call(this,c,u);if(m&&(c=u),!!ie.isString(c)){if(ie.isString(g))return c.indexOf(g)!==-1;if(ie.isRegExp(g))return g.test(c)}}function a6(s){return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(c,u,g)=>u.toUpperCase()+g)}function c6(s,c){const u=ie.toCamelCase(" "+c);["get","set","has"].forEach(g=>{Object.defineProperty(s,g+u,{value:function(m,w,b){return this[g].call(this,c,m,w,b)},configurable:!0})})}class An{constructor(c){c&&this.set(c)}set(c,u,g){const m=this;function w(_,f,v){const x=Js(f);if(!x)throw new Error("header name must be a non-empty string");const y=ie.findKey(m,x);(!y||m[y]===void 0||v===!0||v===void 0&&m[y]!==!1)&&(m[y||f]=kl(_))}const b=(_,f)=>ie.forEach(_,(v,x)=>w(v,x,f));if(ie.isPlainObject(c)||c instanceof this.constructor)b(c,u);else if(ie.isString(c)&&(c=c.trim())&&!s6(c))b(i6(c),u);else if(ie.isHeaders(c))for(const[_,f]of c.entries())w(f,_,g);else c!=null&&w(u,c,g);return this}get(c,u){if(c=Js(c),c){const g=ie.findKey(this,c);if(g){const m=this[g];if(!u)return m;if(u===!0)return r6(m);if(ie.isFunction(u))return u.call(this,m,g);if(ie.isRegExp(u))return u.exec(m);throw new TypeError("parser must be boolean|regexp|function")}}}has(c,u){if(c=Js(c),c){const g=ie.findKey(this,c);return!!(g&&this[g]!==void 0&&(!u||Dh(this,this[g],g,u)))}return!1}delete(c,u){const g=this;let m=!1;function w(b){if(b=Js(b),b){const _=ie.findKey(g,b);_&&(!u||Dh(g,g[_],_,u))&&(delete g[_],m=!0)}}return ie.isArray(c)?c.forEach(w):w(c),m}clear(c){const u=Object.keys(this);let g=u.length,m=!1;for(;g--;){const w=u[g];(!c||Dh(this,this[w],w,c,!0))&&(delete this[w],m=!0)}return m}normalize(c){const u=this,g={};return ie.forEach(this,(m,w)=>{const b=ie.findKey(g,w);if(b){u[b]=kl(m),delete u[w];return}const _=c?a6(w):String(w).trim();_!==w&&delete u[w],u[_]=kl(m),g[_]=!0}),this}concat(...c){return this.constructor.concat(this,...c)}toJSON(c){const u=Object.create(null);return ie.forEach(this,(g,m)=>{g!=null&&g!==!1&&(u[m]=c&&ie.isArray(g)?g.join(", "):g)}),u}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([c,u])=>c+": "+u).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(c){return c instanceof this?c:new this(c)}static concat(c,...u){const g=new this(c);return u.forEach(m=>g.set(m)),g}static accessor(c){const g=(this[Ov]=this[Ov]={accessors:{}}).accessors,m=this.prototype;function w(b){const _=Js(b);g[_]||(c6(m,b),g[_]=!0)}return ie.isArray(c)?c.forEach(w):w(c),this}}An.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);ie.reduceDescriptors(An.prototype,({value:s},c)=>{let u=c[0].toUpperCase()+c.slice(1);return{get:()=>s,set(g){this[u]=g}}});ie.freezeMethods(An);function Sh(s,c){const u=this||Ia,g=c||u,m=An.from(g.headers);let w=g.data;return ie.forEach(s,function(_){w=_.call(u,w,m.normalize(),c?c.status:void 0)}),m.normalize(),w}function vx(s){return!!(s&&s.__CANCEL__)}function ss(s,c,u){Ye.call(this,s??"canceled",Ye.ERR_CANCELED,c,u),this.name="CanceledError"}ie.inherits(ss,Ye,{__CANCEL__:!0});function yx(s,c,u){const g=u.config.validateStatus;!u.status||!g||g(u.status)?s(u):c(new Ye("Request failed with status code "+u.status,[Ye.ERR_BAD_REQUEST,Ye.ERR_BAD_RESPONSE][Math.floor(u.status/100)-4],u.config,u.request,u))}function l6(s){const c=/^([-+\w]{1,25})(:?\/\/|:)/.exec(s);return c&&c[1]||""}function d6(s,c){s=s||10;const u=new Array(s),g=new Array(s);let m=0,w=0,b;return c=c!==void 0?c:1e3,function(f){const v=Date.now(),x=g[w];b||(b=v),u[m]=f,g[m]=v;let y=w,A=0;for(;y!==m;)A+=u[y++],y=y%s;if(m=(m+1)%s,m===w&&(w=(w+1)%s),v-b<c)return;const E=x&&v-x;return E?Math.round(A*1e3/E):void 0}}function u6(s,c){let u=0;const g=1e3/c;let m=null;return function(){const b=this===!0,_=Date.now();if(b||_-u>g)return m&&(clearTimeout(m),m=null),u=_,s.apply(null,arguments);m||(m=setTimeout(()=>(m=null,u=Date.now(),s.apply(null,arguments)),g-(_-u)))}}const Il=(s,c,u=3)=>{let g=0;const m=d6(50,250);return u6(w=>{const b=w.loaded,_=w.lengthComputable?w.total:void 0,f=b-g,v=m(f),x=b<=_;g=b;const y={loaded:b,total:_,progress:_?b/_:void 0,bytes:f,rate:v||void 0,estimated:v&&_&&x?(_-b)/v:void 0,event:w,lengthComputable:_!=null};y[c?"download":"upload"]=!0,s(y)},u)},h6=ao.hasStandardBrowserEnv?function(){const c=/(msie|trident)/i.test(navigator.userAgent),u=document.createElement("a");let g;function m(w){let b=w;return c&&(u.setAttribute("href",b),b=u.href),u.setAttribute("href",b),{href:u.href,protocol:u.protocol?u.protocol.replace(/:$/,""):"",host:u.host,search:u.search?u.search.replace(/^\?/,""):"",hash:u.hash?u.hash.replace(/^#/,""):"",hostname:u.hostname,port:u.port,pathname:u.pathname.charAt(0)==="/"?u.pathname:"/"+u.pathname}}return g=m(window.location.href),function(b){const _=ie.isString(b)?m(b):b;return _.protocol===g.protocol&&_.host===g.host}}():function(){return function(){return!0}}(),g6=ao.hasStandardBrowserEnv?{write(s,c,u,g,m,w){const b=[s+"="+encodeURIComponent(c)];ie.isNumber(u)&&b.push("expires="+new Date(u).toGMTString()),ie.isString(g)&&b.push("path="+g),ie.isString(m)&&b.push("domain="+m),w===!0&&b.push("secure"),document.cookie=b.join("; ")},read(s){const c=document.cookie.match(new RegExp("(^|;\\s*)("+s+")=([^;]*)"));return c?decodeURIComponent(c[3]):null},remove(s){this.write(s,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function p6(s){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(s)}function m6(s,c){return c?s.replace(/\/?\/$/,"")+"/"+c.replace(/^\/+/,""):s}function xx(s,c){return s&&!p6(c)?m6(s,c):c}const Lv=s=>s instanceof An?{...s}:s;function tr(s,c){c=c||{};const u={};function g(v,x,y){return ie.isPlainObject(v)&&ie.isPlainObject(x)?ie.merge.call({caseless:y},v,x):ie.isPlainObject(x)?ie.merge({},x):ie.isArray(x)?x.slice():x}function m(v,x,y){if(ie.isUndefined(x)){if(!ie.isUndefined(v))return g(void 0,v,y)}else return g(v,x,y)}function w(v,x){if(!ie.isUndefined(x))return g(void 0,x)}function b(v,x){if(ie.isUndefined(x)){if(!ie.isUndefined(v))return g(void 0,v)}else return g(void 0,x)}function _(v,x,y){if(y in c)return g(v,x);if(y in s)return g(void 0,v)}const f={url:w,method:w,data:w,baseURL:b,transformRequest:b,transformResponse:b,paramsSerializer:b,timeout:b,timeoutMessage:b,withCredentials:b,withXSRFToken:b,adapter:b,responseType:b,xsrfCookieName:b,xsrfHeaderName:b,onUploadProgress:b,onDownloadProgress:b,decompress:b,maxContentLength:b,maxBodyLength:b,beforeRedirect:b,transport:b,httpAgent:b,httpsAgent:b,cancelToken:b,socketPath:b,responseEncoding:b,validateStatus:_,headers:(v,x)=>m(Lv(v),Lv(x),!0)};return ie.forEach(Object.keys(Object.assign({},s,c)),function(x){const y=f[x]||m,A=y(s[x],c[x],x);ie.isUndefined(A)&&y!==_||(u[x]=A)}),u}const Ex=s=>{const c=tr({},s);let{data:u,withXSRFToken:g,xsrfHeaderName:m,xsrfCookieName:w,headers:b,auth:_}=c;c.headers=b=An.from(b),c.url=wx(xx(c.baseURL,c.url),s.params,s.paramsSerializer),_&&b.set("Authorization","Basic "+btoa((_.username||"")+":"+(_.password?unescape(encodeURIComponent(_.password)):"")));let f;if(ie.isFormData(u)){if(ao.hasStandardBrowserEnv||ao.hasStandardBrowserWebWorkerEnv)b.setContentType(void 0);else if((f=b.getContentType())!==!1){const[v,...x]=f?f.split(";").map(y=>y.trim()).filter(Boolean):[];b.setContentType([v||"multipart/form-data",...x].join("; "))}}if(ao.hasStandardBrowserEnv&&(g&&ie.isFunction(g)&&(g=g(c)),g||g!==!1&&h6(c.url))){const v=m&&w&&g6.read(w);v&&b.set(m,v)}return c},f6=typeof XMLHttpRequest<"u",k6=f6&&function(s){return new Promise(function(u,g){const m=Ex(s);let w=m.data;const b=An.from(m.headers).normalize();let{responseType:_}=m,f;function v(){m.cancelToken&&m.cancelToken.unsubscribe(f),m.signal&&m.signal.removeEventListener("abort",f)}let x=new XMLHttpRequest;x.open(m.method.toUpperCase(),m.url,!0),x.timeout=m.timeout;function y(){if(!x)return;const E=An.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders()),P={data:!_||_==="text"||_==="json"?x.responseText:x.response,status:x.status,statusText:x.statusText,headers:E,config:s,request:x};yx(function(F){u(F),v()},function(F){g(F),v()},P),x=null}"onloadend"in x?x.onloadend=y:x.onreadystatechange=function(){!x||x.readyState!==4||x.status===0&&!(x.responseURL&&x.responseURL.indexOf("file:")===0)||setTimeout(y)},x.onabort=function(){x&&(g(new Ye("Request aborted",Ye.ECONNABORTED,m,x)),x=null)},x.onerror=function(){g(new Ye("Network Error",Ye.ERR_NETWORK,m,x)),x=null},x.ontimeout=function(){let M=m.timeout?"timeout of "+m.timeout+"ms exceeded":"timeout exceeded";const P=m.transitional||Ax;m.timeoutErrorMessage&&(M=m.timeoutErrorMessage),g(new Ye(M,P.clarifyTimeoutError?Ye.ETIMEDOUT:Ye.ECONNABORTED,m,x)),x=null},w===void 0&&b.setContentType(null),"setRequestHeader"in x&&ie.forEach(b.toJSON(),function(M,P){x.setRequestHeader(P,M)}),ie.isUndefined(m.withCredentials)||(x.withCredentials=!!m.withCredentials),_&&_!=="json"&&(x.responseType=m.responseType),typeof m.onDownloadProgress=="function"&&x.addEventListener("progress",Il(m.onDownloadProgress,!0)),typeof m.onUploadProgress=="function"&&x.upload&&x.upload.addEventListener("progress",Il(m.onUploadProgress)),(m.cancelToken||m.signal)&&(f=E=>{x&&(g(!E||E.type?new ss(null,s,x):E),x.abort(),x=null)},m.cancelToken&&m.cancelToken.subscribe(f),m.signal&&(m.signal.aborted?f():m.signal.addEventListener("abort",f)));const A=l6(m.url);if(A&&ao.protocols.indexOf(A)===-1){g(new Ye("Unsupported protocol "+A+":",Ye.ERR_BAD_REQUEST,s));return}x.send(w||null)})},b6=(s,c)=>{let u=new AbortController,g;const m=function(f){if(!g){g=!0,b();const v=f instanceof Error?f:this.reason;u.abort(v instanceof Ye?v:new ss(v instanceof Error?v.message:v))}};let w=c&&setTimeout(()=>{m(new Ye(`timeout ${c} of ms exceeded`,Ye.ETIMEDOUT))},c);const b=()=>{s&&(w&&clearTimeout(w),w=null,s.forEach(f=>{f&&(f.removeEventListener?f.removeEventListener("abort",m):f.unsubscribe(m))}),s=null)};s.forEach(f=>f&&f.addEventListener&&f.addEventListener("abort",m));const{signal:_}=u;return _.unsubscribe=b,[_,()=>{w&&clearTimeout(w),w=null}]},_6=function*(s,c){let u=s.byteLength;if(!c||u<c){yield s;return}let g=0,m;for(;g<u;)m=g+c,yield s.slice(g,m),g=m},w6=async function*(s,c,u){for await(const g of s)yield*_6(ArrayBuffer.isView(g)?g:await u(String(g)),c)},Rv=(s,c,u,g,m)=>{const w=w6(s,c,m);let b=0;return new ReadableStream({type:"bytes",async pull(_){const{done:f,value:v}=await w.next();if(f){_.close(),g();return}let x=v.byteLength;u&&u(b+=x),_.enqueue(new Uint8Array(v))},cancel(_){return g(_),w.return()}},{highWaterMark:2})},zv=(s,c)=>{const u=s!=null;return g=>setTimeout(()=>c({lengthComputable:u,total:s,loaded:g}))},td=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Dx=td&&typeof ReadableStream=="function",rg=td&&(typeof TextEncoder=="function"?(s=>c=>s.encode(c))(new TextEncoder):async s=>new Uint8Array(await new Response(s).arrayBuffer())),A6=Dx&&(()=>{let s=!1;const c=new Request(ao.origin,{body:new ReadableStream,method:"POST",get duplex(){return s=!0,"half"}}).headers.has("Content-Type");return s&&!c})(),jv=64*1024,sg=Dx&&!!(()=>{try{return ie.isReadableStream(new Response("").body)}catch{}})(),Ml={stream:sg&&(s=>s.body)};td&&(s=>{["text","arrayBuffer","blob","formData","stream"].forEach(c=>{!Ml[c]&&(Ml[c]=ie.isFunction(s[c])?u=>u[c]():(u,g)=>{throw new Ye(`Response type '${c}' is not supported`,Ye.ERR_NOT_SUPPORT,g)})})})(new Response);const C6=async s=>{if(s==null)return 0;if(ie.isBlob(s))return s.size;if(ie.isSpecCompliantForm(s))return(await new Request(s).arrayBuffer()).byteLength;if(ie.isArrayBufferView(s))return s.byteLength;if(ie.isURLSearchParams(s)&&(s=s+""),ie.isString(s))return(await rg(s)).byteLength},v6=async(s,c)=>{const u=ie.toFiniteNumber(s.getContentLength());return u??C6(c)},y6=td&&(async s=>{let{url:c,method:u,data:g,signal:m,cancelToken:w,timeout:b,onDownloadProgress:_,onUploadProgress:f,responseType:v,headers:x,withCredentials:y="same-origin",fetchOptions:A}=Ex(s);v=v?(v+"").toLowerCase():"text";let[E,M]=m||w||b?b6([m,w],b):[],P,z;const F=()=>{!P&&setTimeout(()=>{E&&E.unsubscribe()}),P=!0};let j;try{if(f&&A6&&u!=="get"&&u!=="head"&&(j=await v6(x,g))!==0){let G=new Request(c,{method:"POST",body:g,duplex:"half"}),I;ie.isFormData(g)&&(I=G.headers.get("content-type"))&&x.setContentType(I),G.body&&(g=Rv(G.body,jv,zv(j,Il(f)),null,rg))}ie.isString(y)||(y=y?"cors":"omit"),z=new Request(c,{...A,signal:E,method:u.toUpperCase(),headers:x.normalize().toJSON(),body:g,duplex:"half",withCredentials:y});let O=await fetch(z);const H=sg&&(v==="stream"||v==="response");if(sg&&(_||H)){const G={};["status","statusText","headers"].forEach(V=>{G[V]=O[V]});const I=ie.toFiniteNumber(O.headers.get("content-length"));O=new Response(Rv(O.body,jv,_&&zv(I,Il(_,!0)),H&&F,rg),G)}v=v||"text";let q=await Ml[ie.findKey(Ml,v)||"text"](O,s);return!H&&F(),M&&M(),await new Promise((G,I)=>{yx(G,I,{data:q,headers:An.from(O.headers),status:O.status,statusText:O.statusText,config:s,request:z})})}catch(O){throw F(),O&&O.name==="TypeError"&&/fetch/i.test(O.message)?Object.assign(new Ye("Network Error",Ye.ERR_NETWORK,s,z),{cause:O.cause||O}):Ye.from(O,O&&O.code,s,z)}}),ag={http:Vz,xhr:k6,fetch:y6};ie.forEach(ag,(s,c)=>{if(s){try{Object.defineProperty(s,"name",{value:c})}catch{}Object.defineProperty(s,"adapterName",{value:c})}});const Fv=s=>`- ${s}`,x6=s=>ie.isFunction(s)||s===null||s===!1,Sx={getAdapter:s=>{s=ie.isArray(s)?s:[s];const{length:c}=s;let u,g;const m={};for(let w=0;w<c;w++){u=s[w];let b;if(g=u,!x6(u)&&(g=ag[(b=String(u)).toLowerCase()],g===void 0))throw new Ye(`Unknown adapter '${b}'`);if(g)break;m[b||"#"+w]=g}if(!g){const w=Object.entries(m).map(([_,f])=>`adapter ${_} `+(f===!1?"is not supported by the environment":"is not available in the build"));let b=c?w.length>1?`since :
`+w.map(Fv).join(`
`):" "+Fv(w[0]):"as no adapter specified";throw new Ye("There is no suitable adapter to dispatch the request "+b,"ERR_NOT_SUPPORT")}return g},adapters:ag};function Th(s){if(s.cancelToken&&s.cancelToken.throwIfRequested(),s.signal&&s.signal.aborted)throw new ss(null,s)}function Vv(s){return Th(s),s.headers=An.from(s.headers),s.data=Sh.call(s,s.transformRequest),["post","put","patch"].indexOf(s.method)!==-1&&s.headers.setContentType("application/x-www-form-urlencoded",!1),Sx.getAdapter(s.adapter||Ia.adapter)(s).then(function(g){return Th(s),g.data=Sh.call(s,s.transformResponse,g),g.headers=An.from(g.headers),g},function(g){return vx(g)||(Th(s),g&&g.response&&(g.response.data=Sh.call(s,s.transformResponse,g.response),g.response.headers=An.from(g.response.headers))),Promise.reject(g)})}const Tx="1.7.2",qg={};["object","boolean","number","function","string","symbol"].forEach((s,c)=>{qg[s]=function(g){return typeof g===s||"a"+(c<1?"n ":" ")+s}});const Uv={};qg.transitional=function(c,u,g){function m(w,b){return"[Axios v"+Tx+"] Transitional option '"+w+"'"+b+(g?". "+g:"")}return(w,b,_)=>{if(c===!1)throw new Ye(m(b," has been removed"+(u?" in "+u:"")),Ye.ERR_DEPRECATED);return u&&!Uv[b]&&(Uv[b]=!0,console.warn(m(b," has been deprecated since v"+u+" and will be removed in the near future"))),c?c(w,b,_):!0}};function E6(s,c,u){if(typeof s!="object")throw new Ye("options must be an object",Ye.ERR_BAD_OPTION_VALUE);const g=Object.keys(s);let m=g.length;for(;m-- >0;){const w=g[m],b=c[w];if(b){const _=s[w],f=_===void 0||b(_,w,s);if(f!==!0)throw new Ye("option "+w+" must be "+f,Ye.ERR_BAD_OPTION_VALUE);continue}if(u!==!0)throw new Ye("Unknown option "+w,Ye.ERR_BAD_OPTION)}}const cg={assertOptions:E6,validators:qg},oi=cg.validators;class Qi{constructor(c){this.defaults=c,this.interceptors={request:new Nv,response:new Nv}}async request(c,u){try{return await this._request(c,u)}catch(g){if(g instanceof Error){let m;Error.captureStackTrace?Error.captureStackTrace(m={}):m=new Error;const w=m.stack?m.stack.replace(/^.+\n/,""):"";try{g.stack?w&&!String(g.stack).endsWith(w.replace(/^.+\n.+\n/,""))&&(g.stack+=`
`+w):g.stack=w}catch{}}throw g}}_request(c,u){typeof c=="string"?(u=u||{},u.url=c):u=c||{},u=tr(this.defaults,u);const{transitional:g,paramsSerializer:m,headers:w}=u;g!==void 0&&cg.assertOptions(g,{silentJSONParsing:oi.transitional(oi.boolean),forcedJSONParsing:oi.transitional(oi.boolean),clarifyTimeoutError:oi.transitional(oi.boolean)},!1),m!=null&&(ie.isFunction(m)?u.paramsSerializer={serialize:m}:cg.assertOptions(m,{encode:oi.function,serialize:oi.function},!0)),u.method=(u.method||this.defaults.method||"get").toLowerCase();let b=w&&ie.merge(w.common,w[u.method]);w&&ie.forEach(["delete","get","head","post","put","patch","common"],M=>{delete w[M]}),u.headers=An.concat(b,w);const _=[];let f=!0;this.interceptors.request.forEach(function(P){typeof P.runWhen=="function"&&P.runWhen(u)===!1||(f=f&&P.synchronous,_.unshift(P.fulfilled,P.rejected))});const v=[];this.interceptors.response.forEach(function(P){v.push(P.fulfilled,P.rejected)});let x,y=0,A;if(!f){const M=[Vv.bind(this),void 0];for(M.unshift.apply(M,_),M.push.apply(M,v),A=M.length,x=Promise.resolve(u);y<A;)x=x.then(M[y++],M[y++]);return x}A=_.length;let E=u;for(y=0;y<A;){const M=_[y++],P=_[y++];try{E=M(E)}catch(z){P.call(this,z);break}}try{x=Vv.call(this,E)}catch(M){return Promise.reject(M)}for(y=0,A=v.length;y<A;)x=x.then(v[y++],v[y++]);return x}getUri(c){c=tr(this.defaults,c);const u=xx(c.baseURL,c.url);return wx(u,c.params,c.paramsSerializer)}}ie.forEach(["delete","get","head","options"],function(c){Qi.prototype[c]=function(u,g){return this.request(tr(g||{},{method:c,url:u,data:(g||{}).data}))}});ie.forEach(["post","put","patch"],function(c){function u(g){return function(w,b,_){return this.request(tr(_||{},{method:c,headers:g?{"Content-Type":"multipart/form-data"}:{},url:w,data:b}))}}Qi.prototype[c]=u(),Qi.prototype[c+"Form"]=u(!0)});class Wg{constructor(c){if(typeof c!="function")throw new TypeError("executor must be a function.");let u;this.promise=new Promise(function(w){u=w});const g=this;this.promise.then(m=>{if(!g._listeners)return;let w=g._listeners.length;for(;w-- >0;)g._listeners[w](m);g._listeners=null}),this.promise.then=m=>{let w;const b=new Promise(_=>{g.subscribe(_),w=_}).then(m);return b.cancel=function(){g.unsubscribe(w)},b},c(function(w,b,_){g.reason||(g.reason=new ss(w,b,_),u(g.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(c){if(this.reason){c(this.reason);return}this._listeners?this._listeners.push(c):this._listeners=[c]}unsubscribe(c){if(!this._listeners)return;const u=this._listeners.indexOf(c);u!==-1&&this._listeners.splice(u,1)}static source(){let c;return{token:new Wg(function(m){c=m}),cancel:c}}}function D6(s){return function(u){return s.apply(null,u)}}function S6(s){return ie.isObject(s)&&s.isAxiosError===!0}const lg={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(lg).forEach(([s,c])=>{lg[c]=s});function Ix(s){const c=new Qi(s),u=cx(Qi.prototype.request,c);return ie.extend(u,Qi.prototype,c,{allOwnKeys:!0}),ie.extend(u,c,null,{allOwnKeys:!0}),u.create=function(m){return Ix(tr(s,m))},u}const ze=Ix(Ia);ze.Axios=Qi;ze.CanceledError=ss;ze.CancelToken=Wg;ze.isCancel=vx;ze.VERSION=Tx;ze.toFormData=ed;ze.AxiosError=Ye;ze.Cancel=ze.CanceledError;ze.all=function(c){return Promise.all(c)};ze.spread=D6;ze.isAxiosError=S6;ze.mergeConfig=tr;ze.AxiosHeaders=An;ze.formToJSON=s=>Cx(ie.isHTMLForm(s)?new FormData(s):s);ze.getAdapter=Sx.getAdapter;ze.HttpStatusCode=lg;ze.default=ze;const Mx="http://127.0.0.1:8000",Hv=!1,rt="",T6=s=>ze.post("/api/login",s),I6=s=>ze.get("/api"+rt+"/config?token="+s),M6=s=>ze.get("/api"+rt+"/logout?token="+s),B6=(s,c)=>ze.post("/api"+rt+"/pages?token="+c,s),P6=(s,c,u)=>ze.put("/api"+rt+"/pages/"+c+"?token="+u,s),N6=s=>ze.get("/api"+rt+"/pages?token="+s),O6=(s,c)=>ze.get("/api"+rt+"/pages/type/"+s+"?token="+c),L6=(s,c)=>ze.get("/api"+rt+"/pages/"+s+"?token="+c),R6=(s,c)=>ze.post("/api"+rt+"/menus?token="+c,s),z6=(s,c)=>{const u=s.id;return ze.put("/api"+rt+"/menus/"+u+"?token="+c,s)},j6=s=>ze.get("/api"+rt+"/menus?token="+s),F6=(s,c)=>ze.delete("/api"+rt+"/menus/"+s+"?token="+c),V6=(s,c,u)=>ze.patch("/api"+rt+"/menus/position/"+s+"/"+c+"?token="+u),U6=(s,c,u)=>ze.patch("/api"+rt+"/pages/position/"+s+"/"+c+"?token="+u),H6=(s,c)=>ze.delete("/api"+rt+"/pages/"+s+"?token="+c),$6=(s,c,u,g)=>ze.post("/api"+rt+"/image/"+c+"/"+u+"?token="+g,s),q6=(s,c,u)=>ze.get("/api"+rt+"/images/"+s+"/"+c+"?token="+u),W6=(s,c)=>ze.delete("/api"+rt+"/images/"+s+"?token="+c),G6=(s,c,u)=>ze.patch("/api"+rt+"/images/position/"+s+"/"+c+"?token="+u),K6=(s,c,u,g,m)=>{let w="";m&&(w="&search="+m);const b=g||"1",_="/api"+rt+"/clients/"+s+"/"+c+"?token="+u+"&page="+b+w;return ze.get(_)},Y6=(s,c,u,g,m)=>{let w="";m&&(w="&search="+m);const b=g||"1",_="/api"+rt+"/contacts/pagination/"+s+"/"+c+"?token="+u+"&page="+b+w;return ze.get(_)},Q6=(s,c,u,g,m,w)=>{let b="";w&&(b="&search="+w);const _=m||"1",f="/api"+rt+"/products/pagination/"+s+"/"+c+"/"+u+"?token="+g+"&page="+_+b;return ze.get(f)},Z6=(s,c,u,g,m,w)=>{let b="";w&&(b="&search="+w);const _=m||"1",f="/api"+rt+"/checkouts/pagination/"+s+"/"+c+"/"+u+"?token="+g+"&page="+_+b;return ze.get(f)},J6=(s,c,u)=>ze.patch("/api"+rt+"/checkouts/"+c+"?token="+u,s),X6=(s,c)=>ze.delete("/api"+rt+"/products/"+s+"?token="+c),ej=(s,c)=>ze.delete("/api"+rt+"/clients/"+s+"?token="+c),tj=(s,c)=>ze.delete("/api"+rt+"/contacts/"+s+"?token="+c),nj=(s,c)=>ze.get("/api"+rt+"/clients/"+s+"?token="+c),oj=(s,c)=>ze.post("/api"+rt+"/clients?token="+c,s),ij=(s,c)=>{const u=s.id;return ze.put("/api"+rt+"/clients/"+u+"?token="+c,s)},rj=(s,c)=>ze.get("/api"+rt+"/products/"+s+"?token="+c),sj=(s,c)=>ze.post("/api"+rt+"/products?token="+c,s),aj=(s,c)=>{const u=s.id;return ze.put("/api"+rt+"/products/"+u+"?token="+c,s)},Bx=(s,c)=>ze.post("/api"+rt+"/config/toggle-cache-enable-file?token="+c,s),cj=s=>ze.put("/api"+rt+"/config/clearcache?token="+s),lj=s=>ze.put("/api"+rt+"/config/createsitemap?token="+s);/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const jr=typeof document<"u";function dj(s){return s.__esModule||s[Symbol.toStringTag]==="Module"}const ft=Object.assign;function Ih(s,c){const u={};for(const g in c){const m=c[g];u[g]=lo(m)?m.map(s):s(m)}return u}const da=()=>{},lo=Array.isArray,Px=/#/g,uj=/&/g,hj=/\//g,gj=/=/g,pj=/\?/g,Nx=/\+/g,mj=/%5B/g,fj=/%5D/g,Ox=/%5E/g,kj=/%60/g,Lx=/%7B/g,bj=/%7C/g,Rx=/%7D/g,_j=/%20/g;function Gg(s){return encodeURI(""+s).replace(bj,"|").replace(mj,"[").replace(fj,"]")}function wj(s){return Gg(s).replace(Lx,"{").replace(Rx,"}").replace(Ox,"^")}function dg(s){return Gg(s).replace(Nx,"%2B").replace(_j,"+").replace(Px,"%23").replace(uj,"%26").replace(kj,"`").replace(Lx,"{").replace(Rx,"}").replace(Ox,"^")}function Aj(s){return dg(s).replace(gj,"%3D")}function Cj(s){return Gg(s).replace(Px,"%23").replace(pj,"%3F")}function vj(s){return s==null?"":Cj(s).replace(hj,"%2F")}function wa(s){try{return decodeURIComponent(""+s)}catch{}return""+s}const yj=/\/$/,xj=s=>s.replace(yj,"");function Mh(s,c,u="/"){let g,m={},w="",b="";const _=c.indexOf("#");let f=c.indexOf("?");return _<f&&_>=0&&(f=-1),f>-1&&(g=c.slice(0,f),w=c.slice(f+1,_>-1?_:c.length),m=s(w)),_>-1&&(g=g||c.slice(0,_),b=c.slice(_,c.length)),g=Tj(g??c,u),{fullPath:g+(w&&"?")+w+b,path:g,query:m,hash:wa(b)}}function Ej(s,c){const u=c.query?s(c.query):"";return c.path+(u&&"?")+u+(c.hash||"")}function $v(s,c){return!c||!s.toLowerCase().startsWith(c.toLowerCase())?s:s.slice(c.length)||"/"}function Dj(s,c,u){const g=c.matched.length-1,m=u.matched.length-1;return g>-1&&g===m&&ts(c.matched[g],u.matched[m])&&zx(c.params,u.params)&&s(c.query)===s(u.query)&&c.hash===u.hash}function ts(s,c){return(s.aliasOf||s)===(c.aliasOf||c)}function zx(s,c){if(Object.keys(s).length!==Object.keys(c).length)return!1;for(const u in s)if(!Sj(s[u],c[u]))return!1;return!0}function Sj(s,c){return lo(s)?qv(s,c):lo(c)?qv(c,s):s===c}function qv(s,c){return lo(c)?s.length===c.length&&s.every((u,g)=>u===c[g]):s.length===1&&s[0]===c}function Tj(s,c){if(s.startsWith("/"))return s;if(!s)return c;const u=c.split("/"),g=s.split("/"),m=g[g.length-1];(m===".."||m===".")&&g.push("");let w=u.length-1,b,_;for(b=0;b<g.length;b++)if(_=g[b],_!==".")if(_==="..")w>1&&w--;else break;return u.slice(0,w).join("/")+"/"+g.slice(b).join("/")}const ii={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Aa;(function(s){s.pop="pop",s.push="push"})(Aa||(Aa={}));var ua;(function(s){s.back="back",s.forward="forward",s.unknown=""})(ua||(ua={}));function Ij(s){if(!s)if(jr){const c=document.querySelector("base");s=c&&c.getAttribute("href")||"/",s=s.replace(/^\w+:\/\/[^\/]+/,"")}else s="/";return s[0]!=="/"&&s[0]!=="#"&&(s="/"+s),xj(s)}const Mj=/^[^#]+#/;function Bj(s,c){return s.replace(Mj,"#")+c}function Pj(s,c){const u=document.documentElement.getBoundingClientRect(),g=s.getBoundingClientRect();return{behavior:c.behavior,left:g.left-u.left-(c.left||0),top:g.top-u.top-(c.top||0)}}const nd=()=>({left:window.scrollX,top:window.scrollY});function Nj(s){let c;if("el"in s){const u=s.el,g=typeof u=="string"&&u.startsWith("#"),m=typeof u=="string"?g?document.getElementById(u.slice(1)):document.querySelector(u):u;if(!m)return;c=Pj(m,s)}else c=s;"scrollBehavior"in document.documentElement.style?window.scrollTo(c):window.scrollTo(c.left!=null?c.left:window.scrollX,c.top!=null?c.top:window.scrollY)}function Wv(s,c){return(history.state?history.state.position-c:-1)+s}const ug=new Map;function Oj(s,c){ug.set(s,c)}function Lj(s){const c=ug.get(s);return ug.delete(s),c}let Rj=()=>location.protocol+"//"+location.host;function jx(s,c){const{pathname:u,search:g,hash:m}=c,w=s.indexOf("#");if(w>-1){let _=m.includes(s.slice(w))?s.slice(w).length:1,f=m.slice(_);return f[0]!=="/"&&(f="/"+f),$v(f,"")}return $v(u,s)+g+m}function zj(s,c,u,g){let m=[],w=[],b=null;const _=({state:A})=>{const E=jx(s,location),M=u.value,P=c.value;let z=0;if(A){if(u.value=E,c.value=A,b&&b===M){b=null;return}z=P?A.position-P.position:0}else g(E);m.forEach(F=>{F(u.value,M,{delta:z,type:Aa.pop,direction:z?z>0?ua.forward:ua.back:ua.unknown})})};function f(){b=u.value}function v(A){m.push(A);const E=()=>{const M=m.indexOf(A);M>-1&&m.splice(M,1)};return w.push(E),E}function x(){const{history:A}=window;A.state&&A.replaceState(ft({},A.state,{scroll:nd()}),"")}function y(){for(const A of w)A();w=[],window.removeEventListener("popstate",_),window.removeEventListener("beforeunload",x)}return window.addEventListener("popstate",_),window.addEventListener("beforeunload",x,{passive:!0}),{pauseListeners:f,listen:v,destroy:y}}function Gv(s,c,u,g=!1,m=!1){return{back:s,current:c,forward:u,replaced:g,position:window.history.length,scroll:m?nd():null}}function jj(s){const{history:c,location:u}=window,g={value:jx(s,u)},m={value:c.state};m.value||w(g.value,{back:null,current:g.value,forward:null,position:c.length-1,replaced:!0,scroll:null},!0);function w(f,v,x){const y=s.indexOf("#"),A=y>-1?(u.host&&document.querySelector("base")?s:s.slice(y))+f:Rj()+s+f;try{c[x?"replaceState":"pushState"](v,"",A),m.value=v}catch(E){console.error(E),u[x?"replace":"assign"](A)}}function b(f,v){const x=ft({},c.state,Gv(m.value.back,f,m.value.forward,!0),v,{position:m.value.position});w(f,x,!0),g.value=f}function _(f,v){const x=ft({},m.value,c.state,{forward:f,scroll:nd()});w(x.current,x,!0);const y=ft({},Gv(g.value,f,null),{position:x.position+1},v);w(f,y,!1),g.value=f}return{location:g,state:m,push:_,replace:b}}function Fj(s){s=Ij(s);const c=jj(s),u=zj(s,c.state,c.location,c.replace);function g(w,b=!0){b||u.pauseListeners(),history.go(w)}const m=ft({location:"",base:s,go:g,createHref:Bj.bind(null,s)},c,u);return Object.defineProperty(m,"location",{enumerable:!0,get:()=>c.location.value}),Object.defineProperty(m,"state",{enumerable:!0,get:()=>c.state.value}),m}function Vj(s){return typeof s=="string"||s&&typeof s=="object"}function Fx(s){return typeof s=="string"||typeof s=="symbol"}const Vx=Symbol("");var Kv;(function(s){s[s.aborted=4]="aborted",s[s.cancelled=8]="cancelled",s[s.duplicated=16]="duplicated"})(Kv||(Kv={}));function ns(s,c){return ft(new Error,{type:s,[Vx]:!0},c)}function Po(s,c){return s instanceof Error&&Vx in s&&(c==null||!!(s.type&c))}const Yv="[^/]+?",Uj={sensitive:!1,strict:!1,start:!0,end:!0},Hj=/[.+*?^${}()[\]/\\]/g;function $j(s,c){const u=ft({},Uj,c),g=[];let m=u.start?"^":"";const w=[];for(const v of s){const x=v.length?[]:[90];u.strict&&!v.length&&(m+="/");for(let y=0;y<v.length;y++){const A=v[y];let E=40+(u.sensitive?.25:0);if(A.type===0)y||(m+="/"),m+=A.value.replace(Hj,"\\$&"),E+=40;else if(A.type===1){const{value:M,repeatable:P,optional:z,regexp:F}=A;w.push({name:M,repeatable:P,optional:z});const j=F||Yv;if(j!==Yv){E+=10;try{new RegExp(`(${j})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${M}" (${j}): `+H.message)}}let O=P?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;y||(O=z&&v.length<2?`(?:/${O})`:"/"+O),z&&(O+="?"),m+=O,E+=20,z&&(E+=-8),P&&(E+=-20),j===".*"&&(E+=-50)}x.push(E)}g.push(x)}if(u.strict&&u.end){const v=g.length-1;g[v][g[v].length-1]+=.7000000000000001}u.strict||(m+="/?"),u.end?m+="$":u.strict&&(m+="(?:/|$)");const b=new RegExp(m,u.sensitive?"":"i");function _(v){const x=v.match(b),y={};if(!x)return null;for(let A=1;A<x.length;A++){const E=x[A]||"",M=w[A-1];y[M.name]=E&&M.repeatable?E.split("/"):E}return y}function f(v){let x="",y=!1;for(const A of s){(!y||!x.endsWith("/"))&&(x+="/"),y=!1;for(const E of A)if(E.type===0)x+=E.value;else if(E.type===1){const{value:M,repeatable:P,optional:z}=E,F=M in v?v[M]:"";if(lo(F)&&!P)throw new Error(`Provided param "${M}" is an array but it is not repeatable (* or + modifiers)`);const j=lo(F)?F.join("/"):F;if(!j)if(z)A.length<2&&(x.endsWith("/")?x=x.slice(0,-1):y=!0);else throw new Error(`Missing required param "${M}"`);x+=j}}return x||"/"}return{re:b,score:g,keys:w,parse:_,stringify:f}}function qj(s,c){let u=0;for(;u<s.length&&u<c.length;){const g=c[u]-s[u];if(g)return g;u++}return s.length<c.length?s.length===1&&s[0]===80?-1:1:s.length>c.length?c.length===1&&c[0]===80?1:-1:0}function Ux(s,c){let u=0;const g=s.score,m=c.score;for(;u<g.length&&u<m.length;){const w=qj(g[u],m[u]);if(w)return w;u++}if(Math.abs(m.length-g.length)===1){if(Qv(g))return 1;if(Qv(m))return-1}return m.length-g.length}function Qv(s){const c=s[s.length-1];return s.length>0&&c[c.length-1]<0}const Wj={type:0,value:""},Gj=/[a-zA-Z0-9_]/;function Kj(s){if(!s)return[[]];if(s==="/")return[[Wj]];if(!s.startsWith("/"))throw new Error(`Invalid path "${s}"`);function c(E){throw new Error(`ERR (${u})/"${v}": ${E}`)}let u=0,g=u;const m=[];let w;function b(){w&&m.push(w),w=[]}let _=0,f,v="",x="";function y(){v&&(u===0?w.push({type:0,value:v}):u===1||u===2||u===3?(w.length>1&&(f==="*"||f==="+")&&c(`A repeatable param (${v}) must be alone in its segment. eg: '/:ids+.`),w.push({type:1,value:v,regexp:x,repeatable:f==="*"||f==="+",optional:f==="*"||f==="?"})):c("Invalid state to consume buffer"),v="")}function A(){v+=f}for(;_<s.length;){if(f=s[_++],f==="\\"&&u!==2){g=u,u=4;continue}switch(u){case 0:f==="/"?(v&&y(),b()):f===":"?(y(),u=1):A();break;case 4:A(),u=g;break;case 1:f==="("?u=2:Gj.test(f)?A():(y(),u=0,f!=="*"&&f!=="?"&&f!=="+"&&_--);break;case 2:f===")"?x[x.length-1]=="\\"?x=x.slice(0,-1)+f:u=3:x+=f;break;case 3:y(),u=0,f!=="*"&&f!=="?"&&f!=="+"&&_--,x="";break;default:c("Unknown state");break}}return u===2&&c(`Unfinished custom RegExp for param "${v}"`),y(),b(),m}function Yj(s,c,u){const g=$j(Kj(s.path),u),m=ft(g,{record:s,parent:c,children:[],alias:[]});return c&&!m.record.aliasOf==!c.record.aliasOf&&c.children.push(m),m}function Qj(s,c){const u=[],g=new Map;c=Xv({strict:!1,end:!0,sensitive:!1},c);function m(y){return g.get(y)}function w(y,A,E){const M=!E,P=Zj(y);P.aliasOf=E&&E.record;const z=Xv(c,y),F=[P];if("alias"in y){const H=typeof y.alias=="string"?[y.alias]:y.alias;for(const q of H)F.push(ft({},P,{components:E?E.record.components:P.components,path:q,aliasOf:E?E.record:P}))}let j,O;for(const H of F){const{path:q}=H;if(A&&q[0]!=="/"){const G=A.record.path,I=G[G.length-1]==="/"?"":"/";H.path=A.record.path+(q&&I+q)}if(j=Yj(H,A,z),E?E.alias.push(j):(O=O||j,O!==j&&O.alias.push(j),M&&y.name&&!Jv(j)&&b(y.name)),Hx(j)&&f(j),P.children){const G=P.children;for(let I=0;I<G.length;I++)w(G[I],j,E&&E.children[I])}E=E||j}return O?()=>{b(O)}:da}function b(y){if(Fx(y)){const A=g.get(y);A&&(g.delete(y),u.splice(u.indexOf(A),1),A.children.forEach(b),A.alias.forEach(b))}else{const A=u.indexOf(y);A>-1&&(u.splice(A,1),y.record.name&&g.delete(y.record.name),y.children.forEach(b),y.alias.forEach(b))}}function _(){return u}function f(y){const A=e9(y,u);u.splice(A,0,y),y.record.name&&!Jv(y)&&g.set(y.record.name,y)}function v(y,A){let E,M={},P,z;if("name"in y&&y.name){if(E=g.get(y.name),!E)throw ns(1,{location:y});z=E.record.name,M=ft(Zv(A.params,E.keys.filter(O=>!O.optional).concat(E.parent?E.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),y.params&&Zv(y.params,E.keys.map(O=>O.name))),P=E.stringify(M)}else if(y.path!=null)P=y.path,E=u.find(O=>O.re.test(P)),E&&(M=E.parse(P),z=E.record.name);else{if(E=A.name?g.get(A.name):u.find(O=>O.re.test(A.path)),!E)throw ns(1,{location:y,currentLocation:A});z=E.record.name,M=ft({},A.params,y.params),P=E.stringify(M)}const F=[];let j=E;for(;j;)F.unshift(j.record),j=j.parent;return{name:z,path:P,params:M,matched:F,meta:Xj(F)}}s.forEach(y=>w(y));function x(){u.length=0,g.clear()}return{addRoute:w,resolve:v,removeRoute:b,clearRoutes:x,getRoutes:_,getRecordMatcher:m}}function Zv(s,c){const u={};for(const g of c)g in s&&(u[g]=s[g]);return u}function Zj(s){return{path:s.path,redirect:s.redirect,name:s.name,meta:s.meta||{},aliasOf:void 0,beforeEnter:s.beforeEnter,props:Jj(s),children:s.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in s?s.components||null:s.component&&{default:s.component}}}function Jj(s){const c={},u=s.props||!1;if("component"in s)c.default=u;else for(const g in s.components)c[g]=typeof u=="object"?u[g]:u;return c}function Jv(s){for(;s;){if(s.record.aliasOf)return!0;s=s.parent}return!1}function Xj(s){return s.reduce((c,u)=>ft(c,u.meta),{})}function Xv(s,c){const u={};for(const g in s)u[g]=g in c?c[g]:s[g];return u}function e9(s,c){let u=0,g=c.length;for(;u!==g;){const w=u+g>>1;Ux(s,c[w])<0?g=w:u=w+1}const m=t9(s);return m&&(g=c.lastIndexOf(m,g-1)),g}function t9(s){let c=s;for(;c=c.parent;)if(Hx(c)&&Ux(s,c)===0)return c}function Hx({record:s}){return!!(s.name||s.components&&Object.keys(s.components).length||s.redirect)}function n9(s){const c={};if(s===""||s==="?")return c;const g=(s[0]==="?"?s.slice(1):s).split("&");for(let m=0;m<g.length;++m){const w=g[m].replace(Nx," "),b=w.indexOf("="),_=wa(b<0?w:w.slice(0,b)),f=b<0?null:wa(w.slice(b+1));if(_ in c){let v=c[_];lo(v)||(v=c[_]=[v]),v.push(f)}else c[_]=f}return c}function e1(s){let c="";for(let u in s){const g=s[u];if(u=Aj(u),g==null){g!==void 0&&(c+=(c.length?"&":"")+u);continue}(lo(g)?g.map(w=>w&&dg(w)):[g&&dg(g)]).forEach(w=>{w!==void 0&&(c+=(c.length?"&":"")+u,w!=null&&(c+="="+w))})}return c}function o9(s){const c={};for(const u in s){const g=s[u];g!==void 0&&(c[u]=lo(g)?g.map(m=>m==null?null:""+m):g==null?g:""+g)}return c}const i9=Symbol(""),t1=Symbol(""),od=Symbol(""),$x=Symbol(""),hg=Symbol("");function Xs(){let s=[];function c(g){return s.push(g),()=>{const m=s.indexOf(g);m>-1&&s.splice(m,1)}}function u(){s=[]}return{add:c,list:()=>s.slice(),reset:u}}function ui(s,c,u,g,m,w=b=>b()){const b=g&&(g.enterCallbacks[m]=g.enterCallbacks[m]||[]);return()=>new Promise((_,f)=>{const v=A=>{A===!1?f(ns(4,{from:u,to:c})):A instanceof Error?f(A):Vj(A)?f(ns(2,{from:c,to:A})):(b&&g.enterCallbacks[m]===b&&typeof A=="function"&&b.push(A),_())},x=w(()=>s.call(g&&g.instances[m],c,u,v));let y=Promise.resolve(x);s.length<3&&(y=y.then(v)),y.catch(A=>f(A))})}function Bh(s,c,u,g,m=w=>w()){const w=[];for(const b of s)for(const _ in b.components){let f=b.components[_];if(!(c!=="beforeRouteEnter"&&!b.instances[_]))if(r9(f)){const x=(f.__vccOpts||f)[c];x&&w.push(ui(x,u,g,b,_,m))}else{let v=f();w.push(()=>v.then(x=>{if(!x)return Promise.reject(new Error(`Couldn't resolve component "${_}" at "${b.path}"`));const y=dj(x)?x.default:x;b.components[_]=y;const E=(y.__vccOpts||y)[c];return E&&ui(E,u,g,b,_,m)()}))}}return w}function r9(s){return typeof s=="object"||"displayName"in s||"props"in s||"__vccOpts"in s}function n1(s){const c=qn(od),u=qn($x),g=un(()=>{const f=Xe(s.to);return c.resolve(f)}),m=un(()=>{const{matched:f}=g.value,{length:v}=f,x=f[v-1],y=u.matched;if(!x||!y.length)return-1;const A=y.findIndex(ts.bind(null,x));if(A>-1)return A;const E=o1(f[v-2]);return v>1&&o1(x)===E&&y[y.length-1].path!==E?y.findIndex(ts.bind(null,f[v-2])):A}),w=un(()=>m.value>-1&&l9(u.params,g.value.params)),b=un(()=>m.value>-1&&m.value===u.matched.length-1&&zx(u.params,g.value.params));function _(f={}){return c9(f)?c[Xe(s.replace)?"replace":"push"](Xe(s.to)).catch(da):Promise.resolve()}return{route:g,href:un(()=>g.value.href),isActive:w,isExactActive:b,navigate:_}}const s9=ya({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:n1,setup(s,{slots:c}){const u=so(n1(s)),{options:g}=qn(od),m=un(()=>({[i1(s.activeClass,g.linkActiveClass,"router-link-active")]:u.isActive,[i1(s.exactActiveClass,g.linkExactActiveClass,"router-link-exact-active")]:u.isExactActive}));return()=>{const w=c.default&&c.default(u);return s.custom?w:Kl("a",{"aria-current":u.isExactActive?s.ariaCurrentValue:null,href:u.href,onClick:u.navigate,class:m.value},w)}}}),a9=s9;function c9(s){if(!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)&&!s.defaultPrevented&&!(s.button!==void 0&&s.button!==0)){if(s.currentTarget&&s.currentTarget.getAttribute){const c=s.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(c))return}return s.preventDefault&&s.preventDefault(),!0}}function l9(s,c){for(const u in c){const g=c[u],m=s[u];if(typeof g=="string"){if(g!==m)return!1}else if(!lo(m)||m.length!==g.length||g.some((w,b)=>w!==m[b]))return!1}return!0}function o1(s){return s?s.aliasOf?s.aliasOf.path:s.path:""}const i1=(s,c,u)=>s??c??u,d9=ya({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(s,{attrs:c,slots:u}){const g=qn(hg),m=un(()=>s.route||g.value),w=qn(t1,0),b=un(()=>{let v=Xe(w);const{matched:x}=m.value;let y;for(;(y=x[v])&&!y.components;)v++;return v}),_=un(()=>m.value.matched[b.value]);ra(t1,un(()=>b.value+1)),ra(i9,_),ra(hg,m);const f=fe();return zt(()=>[f.value,_.value,s.name],([v,x,y],[A,E,M])=>{x&&(x.instances[y]=v,E&&E!==x&&v&&v===A&&(x.leaveGuards.size||(x.leaveGuards=E.leaveGuards),x.updateGuards.size||(x.updateGuards=E.updateGuards))),v&&x&&(!E||!ts(x,E)||!A)&&(x.enterCallbacks[y]||[]).forEach(P=>P(v))},{flush:"post"}),()=>{const v=m.value,x=s.name,y=_.value,A=y&&y.components[x];if(!A)return r1(u.default,{Component:A,route:v});const E=y.props[x],M=E?E===!0?v.params:typeof E=="function"?E(v):E:null,z=Kl(A,ft({},M,c,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(y.instances[x]=null)},ref:f}));return r1(u.default,{Component:z,route:v})||z}}});function r1(s,c){if(!s)return null;const u=s(c);return u.length===1?u[0]:u}const u9=d9;function h9(s){const c=Qj(s.routes,s),u=s.parseQuery||n9,g=s.stringifyQuery||e1,m=s.history,w=Xs(),b=Xs(),_=Xs(),f=T1(ii);let v=ii;jr&&s.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const x=Ih.bind(null,re=>""+re),y=Ih.bind(null,vj),A=Ih.bind(null,wa);function E(re,Me){let Ee,ye;return Fx(re)?(Ee=c.getRecordMatcher(re),ye=Me):ye=re,c.addRoute(ye,Ee)}function M(re){const Me=c.getRecordMatcher(re);Me&&c.removeRoute(Me)}function P(){return c.getRoutes().map(re=>re.record)}function z(re){return!!c.getRecordMatcher(re)}function F(re,Me){if(Me=ft({},Me||f.value),typeof re=="string"){const U=Mh(u,re,Me.path),X=c.resolve({path:U.path},Me),ue=m.createHref(U.fullPath);return ft(U,X,{params:A(X.params),hash:wa(U.hash),redirectedFrom:void 0,href:ue})}let Ee;if(re.path!=null)Ee=ft({},re,{path:Mh(u,re.path,Me.path).path});else{const U=ft({},re.params);for(const X in U)U[X]==null&&delete U[X];Ee=ft({},re,{params:y(U)}),Me.params=y(Me.params)}const ye=c.resolve(Ee,Me),je=re.hash||"";ye.params=x(A(ye.params));const nt=Ej(g,ft({},re,{hash:wj(je),path:ye.path})),R=m.createHref(nt);return ft({fullPath:nt,hash:je,query:g===e1?o9(re.query):re.query||{}},ye,{redirectedFrom:void 0,href:R})}function j(re){return typeof re=="string"?Mh(u,re,f.value.path):ft({},re)}function O(re,Me){if(v!==re)return ns(8,{from:Me,to:re})}function H(re){return I(re)}function q(re){return H(ft(j(re),{replace:!0}))}function G(re){const Me=re.matched[re.matched.length-1];if(Me&&Me.redirect){const{redirect:Ee}=Me;let ye=typeof Ee=="function"?Ee(re):Ee;return typeof ye=="string"&&(ye=ye.includes("?")||ye.includes("#")?ye=j(ye):{path:ye},ye.params={}),ft({query:re.query,hash:re.hash,params:ye.path!=null?{}:re.params},ye)}}function I(re,Me){const Ee=v=F(re),ye=f.value,je=re.state,nt=re.force,R=re.replace===!0,U=G(Ee);if(U)return I(ft(j(U),{state:typeof U=="object"?ft({},je,U.state):je,force:nt,replace:R}),Me||Ee);const X=Ee;X.redirectedFrom=Me;let ue;return!nt&&Dj(g,ye,Ee)&&(ue=ns(16,{to:X,from:ye}),Wt(ye,ye,!0,!1)),(ue?Promise.resolve(ue):K(X,ye)).catch(ae=>Po(ae)?Po(ae,2)?ae:ht(ae):me(ae,X,ye)).then(ae=>{if(ae){if(Po(ae,2))return I(ft({replace:R},j(ae.to),{state:typeof ae.to=="object"?ft({},je,ae.to.state):je,force:nt}),Me||X)}else ae=J(X,ye,!0,R,je);return le(X,ye,ae),ae})}function V(re,Me){const Ee=O(re,Me);return Ee?Promise.reject(Ee):Promise.resolve()}function W(re){const Me=We.values().next().value;return Me&&typeof Me.runWithContext=="function"?Me.runWithContext(re):re()}function K(re,Me){let Ee;const[ye,je,nt]=g9(re,Me);Ee=Bh(ye.reverse(),"beforeRouteLeave",re,Me);for(const U of ye)U.leaveGuards.forEach(X=>{Ee.push(ui(X,re,Me))});const R=V.bind(null,re,Me);return Ee.push(R),Le(Ee).then(()=>{Ee=[];for(const U of w.list())Ee.push(ui(U,re,Me));return Ee.push(R),Le(Ee)}).then(()=>{Ee=Bh(je,"beforeRouteUpdate",re,Me);for(const U of je)U.updateGuards.forEach(X=>{Ee.push(ui(X,re,Me))});return Ee.push(R),Le(Ee)}).then(()=>{Ee=[];for(const U of nt)if(U.beforeEnter)if(lo(U.beforeEnter))for(const X of U.beforeEnter)Ee.push(ui(X,re,Me));else Ee.push(ui(U.beforeEnter,re,Me));return Ee.push(R),Le(Ee)}).then(()=>(re.matched.forEach(U=>U.enterCallbacks={}),Ee=Bh(nt,"beforeRouteEnter",re,Me,W),Ee.push(R),Le(Ee))).then(()=>{Ee=[];for(const U of b.list())Ee.push(ui(U,re,Me));return Ee.push(R),Le(Ee)}).catch(U=>Po(U,8)?U:Promise.reject(U))}function le(re,Me,Ee){_.list().forEach(ye=>W(()=>ye(re,Me,Ee)))}function J(re,Me,Ee,ye,je){const nt=O(re,Me);if(nt)return nt;const R=Me===ii,U=jr?history.state:{};Ee&&(ye||R?m.replace(re.fullPath,ft({scroll:R&&U&&U.scroll},je)):m.push(re.fullPath,je)),f.value=re,Wt(re,Me,Ee,R),ht()}let he;function Ae(){he||(he=m.listen((re,Me,Ee)=>{if(!gt.listening)return;const ye=F(re),je=G(ye);if(je){I(ft(je,{replace:!0}),ye).catch(da);return}v=ye;const nt=f.value;jr&&Oj(Wv(nt.fullPath,Ee.delta),nd()),K(ye,nt).catch(R=>Po(R,12)?R:Po(R,2)?(I(R.to,ye).then(U=>{Po(U,20)&&!Ee.delta&&Ee.type===Aa.pop&&m.go(-1,!1)}).catch(da),Promise.reject()):(Ee.delta&&m.go(-Ee.delta,!1),me(R,ye,nt))).then(R=>{R=R||J(ye,nt,!1),R&&(Ee.delta&&!Po(R,8)?m.go(-Ee.delta,!1):Ee.type===Aa.pop&&Po(R,20)&&m.go(-1,!1)),le(ye,nt,R)}).catch(da)}))}let be=Xs(),Y=Xs(),ne;function me(re,Me,Ee){ht(re);const ye=Y.list();return ye.length?ye.forEach(je=>je(re,Me,Ee)):console.error(re),Promise.reject(re)}function vt(){return ne&&f.value!==ii?Promise.resolve():new Promise((re,Me)=>{be.add([re,Me])})}function ht(re){return ne||(ne=!re,Ae(),be.list().forEach(([Me,Ee])=>re?Ee(re):Me()),be.reset()),re}function Wt(re,Me,Ee,ye){const{scrollBehavior:je}=s;if(!jr||!je)return Promise.resolve();const nt=!Ee&&Lj(Wv(re.fullPath,0))||(ye||!Ee)&&history.state&&history.state.scroll||null;return is().then(()=>je(re,Me,nt)).then(R=>R&&Nj(R)).catch(R=>me(R,re,Me))}const Nt=re=>m.go(re);let ve;const We=new Set,gt={currentRoute:f,listening:!0,addRoute:E,removeRoute:M,clearRoutes:c.clearRoutes,hasRoute:z,getRoutes:P,resolve:F,options:s,push:H,replace:q,go:Nt,back:()=>Nt(-1),forward:()=>Nt(1),beforeEach:w.add,beforeResolve:b.add,afterEach:_.add,onError:Y.add,isReady:vt,install(re){const Me=this;re.component("RouterLink",a9),re.component("RouterView",u9),re.config.globalProperties.$router=Me,Object.defineProperty(re.config.globalProperties,"$route",{enumerable:!0,get:()=>Xe(f)}),jr&&!ve&&f.value===ii&&(ve=!0,H(m.location).catch(je=>{}));const Ee={};for(const je in ii)Object.defineProperty(Ee,je,{get:()=>f.value[je],enumerable:!0});re.provide(od,Me),re.provide($x,vg(Ee)),re.provide(hg,f);const ye=re.unmount;We.add(re),re.unmount=function(){We.delete(re),We.size<1&&(v=ii,he&&he(),he=null,f.value=ii,ve=!1,ne=!1),ye()}}};function Le(re){return re.reduce((Me,Ee)=>Me.then(()=>W(Ee)),Promise.resolve())}return gt}function g9(s,c){const u=[],g=[],m=[],w=Math.max(c.matched.length,s.matched.length);for(let b=0;b<w;b++){const _=c.matched[b];_&&(s.matched.find(v=>ts(v,_))?g.push(_):u.push(_));const f=s.matched[b];f&&(c.matched.find(v=>ts(v,f))||m.push(f))}return[u,g,m]}function Ho(){return qn(od)}const Kn=L7("auth",()=>{let s={token:0},c={page_types:[],langs:[],cache_enable:0,is_cache_enable:0,default_lang:"",demo_status:0,is_shop:1},u={visible:!1};const g=localStorage.getItem("auth");if(g!==null)try{s=JSON.parse(g)}catch{}const m=localStorage.getItem("config");if(m!==null)try{c=JSON.parse(m)}catch{}const w=so(s),b=so(c),_=so(u);function f(M){w.token=M.token}function v(M){_.visible=M}function x(M){b.is_cache_enable=M}function y(M){b.page_types=M.page_types,b.langs=M.langs,b.default_lang=M.default_lang,b.cache_enable=M.cache_enable,b.is_cache_enable=M.is_cache_enable,b.demo_status=M.demo_status,b.is_shop=M.is_shop}function A(M){b.default_lang=M}function E(){w.token=0,b.page_types=[],b.langs=[],b.cache_enable=0,b.is_cache_enable=0,b.default_lang="",b.demo_status=0,b.is_shop=1}return zt(w,()=>{localStorage.setItem("auth",JSON.stringify(w))}),zt(b,()=>{localStorage.setItem("config",JSON.stringify(b))}),{auth:w,modal:_,config:b,setIsCacheEnable:x,setDefaultLang:A,setAuth:f,setConfig:y,setModal:v,logout:E}}),p9={key:0,class:"shadow-sm bg-light mb-3"},m9={class:"navbar navbar-expand navbar-light container"},f9={class:"container-fluid p-0 row"},k9={class:"navbar-nav ms-auto col-10"},b9={class:"navbar-nav justify-content-end col-2"},_9=N("p",{class:"text-primary"},"cache enable",-1),w9=[_9],A9=N("p",{class:"text-info"},"cache disable",-1),C9=[A9],v9={__name:"NavBar",setup(s){const{auth:c,config:u,setIsCacheEnable:g,logout:m}=Kn(),w=Ho(),b=fe(!1),_=async()=>{b.value=!0;try{(await M6(c.token)).data.success||console.log("sth wrong with logout in server site"),m(),w.push("/")}catch(v){console.log("_is_error_logout__",v)}finally{b.value=!1}},f=async()=>{if(u.demo_status){const v=Ht.ttt("is_demo_true");return alert(v),!1}b.value=!0;try{const v=await Bx(Tt.getPostToggleCacheEnableFile(),c.token);if(v.data.success)return g(v.data.data.value),b.value=!1,!0;console.log("error changeCacheEnableInNav",v.data)}catch(v){console.log("error changeCacheEnableInNav",v)}return!1};return(v,x)=>{const y=Bg("router-link");return Xe(c).token?(ce(),de("div",p9,[N("nav",m9,[N("div",f9,[N("ul",k9,[Be(y,{class:Ne(["nav-link",{"text-primary":v.$route.path.startsWith("/pages")}]),to:"/pages"},{default:Lo(()=>[tt("Pages")]),_:1},8,["class"]),Be(y,{class:Ne(["nav-link",{"text-primary":v.$route.path.startsWith("/user")}]),to:"/users"},{default:Lo(()=>[tt("Users")]),_:1},8,["class"]),Xe(u).is_shop?(ce(),Jr(y,{key:0,class:Ne(["nav-link",{"text-primary":v.$route.path.startsWith("/product")}]),to:"/products"},{default:Lo(()=>[tt("Products")]),_:1},8,["class"])):He("",!0),Xe(u).is_shop?(ce(),Jr(y,{key:1,class:Ne(["nav-link",{"text-primary":v.$route.path.startsWith("/checkout")}]),to:"/checkouts"},{default:Lo(()=>[tt("Checkouts")]),_:1},8,["class"])):He("",!0),Be(y,{class:Ne(["nav-link",{"text-primary":v.$route.path.startsWith("/contact")}]),to:"/contacts"},{default:Lo(()=>[tt("Contacts")]),_:1},8,["class"]),Be(y,{class:Ne(["nav-link",{"text-primary":v.$route.path.startsWith("/setting")}]),to:"/settings"},{default:Lo(()=>[tt("Settings")]),_:1},8,["class"])]),N("ul",b9,[Xe(u).cache_enable&&Xe(u).is_cache_enable?(ce(),de("li",{key:0,class:"nav-link",onClick:f},w9)):He("",!0),Xe(u).cache_enable&&!Xe(u).is_cache_enable?(ce(),de("li",{key:1,role:"toggle_cache_enable_in_nav_bar",class:"nav-link",onClick:f},C9)):He("",!0),N("li",{role:"link_sign_out",onClick:_,class:"nav-link",style:{cursor:"pointer"}}," Sign Out ")])])])])):He("",!0)}}},y9={class:"container"},x9={__name:"App",setup(s){const{modal:c}=Kn();return(u,g)=>{const m=Bg("router-view");return ce(),de(Je,null,[Xe(c).visible?(ce(),Jr(H7,{key:0})):He("",!0),Be(v9),N("div",y9,[Be(m)])],64)}}},E9=s=>{let c=[];for(let u of s)!u.menu_id&&u.type!=="inner"&&c.push(u);return c},D9=s=>{let c=[];for(let u of s)u.type==="inner"&&c.push(u);return c},S9=s=>{let c=[];for(let u of s)u.menu_id&&!u.page_id&&(typeof c[u.menu_id]>"u"&&(c[u.menu_id]=[]),c[u.menu_id].push(u));return c},T9=s=>{let c=[];for(let u of s)u.page_id&&(typeof c[u.page_id]>"u"&&(c[u.page_id]=[]),c[u.page_id].push(u));return c},I9=(s,c)=>{let u="";return s.length>1&&(u=" for lang = "+c),u},M9=(s,c,u)=>{if(!s)return[];s=parseInt(s);const g=c?parseInt(c):!1;let m=[];for(let b of u)b.menu_id===s&&b.page_id&&m.push(b.page_id);let w=[];if(m.includes(g))return w;for(let b of u)b.menu_id===s&&!b.page_id&&g&&b.id!==g&&w.push(b),b.menu_id===s&&!b.page_id&&!g&&w.push(b);return w},ri={getNotRelatedPages:E9,getInnerPages:D9,getPagesBelongsToMenus:S9,getPagesBelongsToPages:T9,getInfoMsgPrefixByLang:I9,getRootPages:M9};function nn(s,c,u,g){c?(u.value=Ht.ttt("is_demo_true"),g.value=!1):(u.value=Ht.ttt("internal_problem"),console.log("_is_error__",s))}var gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qx(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function B9(s){if(s.__esModule)return s;var c=s.default;if(typeof c=="function"){var u=function g(){return this instanceof g?Reflect.construct(c,arguments,this.constructor):c.apply(this,arguments)};u.prototype=c.prototype}else u={};return Object.defineProperty(u,"__esModule",{value:!0}),Object.keys(s).forEach(function(g){var m=Object.getOwnPropertyDescriptor(s,g);Object.defineProperty(u,g,m.get?m:{enumerable:!0,get:function(){return s[g]}})}),u}var Wx={exports:{}};const P9=B9(S7);/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(s,c){(function(u,g){s.exports=g(P9)})(self,u=>(()=>{var g={976:_=>{_.exports=u}},m={};function w(_){var f=m[_];if(f!==void 0)return f.exports;var v=m[_]={exports:{}};return g[_](v,v.exports,w),v.exports}w.d=(_,f)=>{for(var v in f)w.o(f,v)&&!w.o(_,v)&&Object.defineProperty(_,v,{enumerable:!0,get:f[v]})},w.o=(_,f)=>Object.prototype.hasOwnProperty.call(_,f);var b={};return(()=>{w.d(b,{default:()=>Nt});var _=w(976);const f=function(ve){var We=typeof ve;return ve!=null&&(We=="object"||We=="function")},v=typeof gi=="object"&&gi&&gi.Object===Object&&gi;var x=typeof self=="object"&&self&&self.Object===Object&&self;const y=v||x||Function("return this")(),A=function(){return y.Date.now()};var E=/\s/;const M=function(ve){for(var We=ve.length;We--&&E.test(ve.charAt(We)););return We};var P=/^\s+/;const z=function(ve){return ve&&ve.slice(0,M(ve)+1).replace(P,"")},F=y.Symbol;var j=Object.prototype,O=j.hasOwnProperty,H=j.toString,q=F?F.toStringTag:void 0;const G=function(ve){var We=O.call(ve,q),gt=ve[q];try{ve[q]=void 0;var Le=!0}catch{}var re=H.call(ve);return Le&&(We?ve[q]=gt:delete ve[q]),re};var I=Object.prototype.toString;const V=function(ve){return I.call(ve)};var W=F?F.toStringTag:void 0;const K=function(ve){return ve==null?ve===void 0?"[object Undefined]":"[object Null]":W&&W in Object(ve)?G(ve):V(ve)},le=function(ve){return ve!=null&&typeof ve=="object"},J=function(ve){return typeof ve=="symbol"||le(ve)&&K(ve)=="[object Symbol]"};var he=/^[-+]0x[0-9a-f]+$/i,Ae=/^0b[01]+$/i,be=/^0o[0-7]+$/i,Y=parseInt;const ne=function(ve){if(typeof ve=="number")return ve;if(J(ve))return NaN;if(f(ve)){var We=typeof ve.valueOf=="function"?ve.valueOf():ve;ve=f(We)?We+"":We}if(typeof ve!="string")return ve===0?ve:+ve;ve=z(ve);var gt=Ae.test(ve);return gt||be.test(ve)?Y(ve.slice(2),gt?2:8):he.test(ve)?NaN:+ve};var me=Math.max,vt=Math.min;const ht=function(ve,We,gt){var Le,re,Me,Ee,ye,je,nt=0,R=!1,U=!1,X=!0;if(typeof ve!="function")throw new TypeError("Expected a function");function ue(oe){var Ie=Le,ge=re;return Le=re=void 0,nt=oe,Ee=ve.apply(ge,Ie)}function ae(oe){return nt=oe,ye=setTimeout(Se,We),R?ue(oe):Ee}function Ce(oe){var Ie=oe-je;return je===void 0||Ie>=We||Ie<0||U&&oe-nt>=Me}function Se(){var oe=A();if(Ce(oe))return we(oe);ye=setTimeout(Se,function(Ie){var ge=We-(Ie-je);return U?vt(ge,Me-(Ie-nt)):ge}(oe))}function we(oe){return ye=void 0,X&&Le?ue(oe):(Le=re=void 0,Ee)}function _e(){var oe=A(),Ie=Ce(oe);if(Le=arguments,re=this,je=oe,Ie){if(ye===void 0)return ae(je);if(U)return clearTimeout(ye),ye=setTimeout(Se,We),ue(je)}return ye===void 0&&(ye=setTimeout(Se,We)),Ee}return We=ne(We)||0,f(gt)&&(R=!!gt.leading,Me=(U="maxWait"in gt)?me(ne(gt.maxWait)||0,We):Me,X="trailing"in gt?!!gt.trailing:X),_e.cancel=function(){ye!==void 0&&clearTimeout(ye),nt=0,Le=je=re=ye=void 0},_e.flush=function(){return ye===void 0?Ee:we(A())},_e},Wt=(0,_.defineComponent)({name:"Ckeditor",model:{prop:"modelValue",event:"update:modelValue"},props:{editor:{type:Function,required:!0},config:{type:Object,default:()=>({})},modelValue:{type:String,default:""},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1},disableTwoWayDataBinding:{type:Boolean,default:!1}},emits:["ready","destroy","blur","focus","input","update:modelValue"],data:()=>({instance:null,lastEditorData:null}),watch:{modelValue(ve){this.instance&&ve!==this.lastEditorData&&this.instance.data.set(ve)},disabled(ve){ve?this.instance.enableReadOnlyMode("Integration Sample"):this.instance.disableReadOnlyMode("Integration Sample")}},created(){const{CKEDITOR_VERSION:ve}=window;if(ve){const[We]=ve.split(".").map(Number);We<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')},mounted(){const ve=Object.assign({},this.config);this.modelValue&&(ve.initialData=this.modelValue),this.editor.create(this.$el,ve).then(We=>{this.instance=(0,_.markRaw)(We),this.setUpEditorEvents(),this.modelValue!==ve.initialData&&We.data.set(this.modelValue),this.disabled&&We.enableReadOnlyMode("Integration Sample"),this.$emit("ready",We)}).catch(We=>{console.error(We)})},beforeUnmount(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},methods:{setUpEditorEvents(){const ve=this.instance,We=ht(gt=>{if(this.disableTwoWayDataBinding)return;const Le=this.lastEditorData=ve.data.get();this.$emit("update:modelValue",Le,gt,ve),this.$emit("input",Le,gt,ve)},300,{leading:!0});ve.model.document.on("change:data",We),ve.editing.view.document.on("focus",gt=>{this.$emit("focus",gt,ve)}),ve.editing.view.document.on("blur",gt=>{this.$emit("blur",gt,ve)})}},render(){return(0,_.h)(this.tagName)}});if(!_.version||!_.version.startsWith("3."))throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const Nt={install(ve){ve.component("Ckeditor",Wt)},component:Wt}})(),b=b.default})())})(Wx);var N9=Wx.exports;const O9=qx(N9);var Bl={exports:{}};Bl.exports;(function(s,c){(function(u){const g=u.en=u.en||{};g.dictionary=Object.assign(g.dictionary||{},{"(may require <kbd>Fn</kbd>)":"(may require <kbd>Fn</kbd>)","%0 of %1":"%0 of %1",Accept:"Accept",Accessibility:"Accessibility","Accessibility help":"Accessibility help","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Below, you can find a list of keyboard shortcuts that can be used in the editor.",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Bold text":"Bold text",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Close:"Close","Close contextual balloons, dropdowns, and dialogs":"Close contextual balloons, dropdowns, and dialogs",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Content editing keystrokes":"Content editing keystrokes","Copy selected content":"Copy selected content","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Create link":"Create link",Custom:"Custom","Custom image size":"Custom image size",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Decrease list item indent":"Decrease list item indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit image":"Edit image","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor dialog":"Editor dialog","Editor editing area: %0":"Editor editing area: %0","Editor menu bar":"Editor menu bar","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Entering a to-do list":"Entering a to-do list","Error during image upload":"Error during image upload","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.","Failed to determine category of edited image.":"Failed to determine category of edited image.","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height","Help Contents. To close this dialog press ESC.":"Help Contents. To close this dialog press ESC.",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image from computer":"Image from computer","Image resize list":"Image resize list","Image toolbar":"Image toolbar","Image upload complete":"Image upload complete","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Increase list item indent":"Increase list item indent",Insert:"Insert","Insert a hard break (a new paragraph)":"Insert a hard break (a new paragraph)","Insert a new paragraph directly after a widget":"Insert a new paragraph directly after a widget","Insert a new paragraph directly before a widget":"Insert a new paragraph directly before a widget","Insert a new table row (when in the last cell of a table)":"Insert a new table row (when in the last cell of a table)","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Insert a soft break (a <code>&lt;br&gt;</code> element)","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image via URL":"Insert image via URL","Insert image with file manager":"Insert image with file manager","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Insert with file manager":"Insert with file manager","Inserting image failed":"Inserting image failed",Inset:"Inset","Invalid start index value.":"Invalid start index value.",Italic:"Italic","Italic text":"Italic text","Justify cell text":"Justify cell text","Keystrokes that can be used in a list":"Keystrokes that can be used in a list","Keystrokes that can be used in a table cell":"Keystrokes that can be used in a table cell","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Keystrokes that can be used when a widget is selected (for example: image, table, etc.)","Leaving a to-do list":"Leaving a to-do list","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","Link URL must not be empty.":"Link URL must not be empty.","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget",MENU_BAR_MENU_EDIT:"Edit",MENU_BAR_MENU_FILE:"File",MENU_BAR_MENU_FONT:"Font",MENU_BAR_MENU_FORMAT:"Format",MENU_BAR_MENU_HELP:"Help",MENU_BAR_MENU_INSERT:"Insert",MENU_BAR_MENU_TEXT:"Text",MENU_BAR_MENU_TOOLS:"Tools",MENU_BAR_MENU_VIEW:"View","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells","Move focus between form fields (inputs, buttons, etc.)":"Move focus between form fields (inputs, buttons, etc.)","Move focus in and out of an active dialog window":"Move focus in and out of an active dialog window","Move focus to the menu bar, navigate between menu bars":"Move focus to the menu bar, navigate between menu bars","Move focus to the toolbar, navigate between toolbars":"Move focus to the toolbar, navigate between toolbars","Move out of a link":"Move out of a link","Move out of an inline code style":"Move out of an inline code style","Move the caret to allow typing directly after a widget":"Move the caret to allow typing directly after a widget","Move the caret to allow typing directly before a widget":"Move the caret to allow typing directly before a widget","Move the selection to the next cell":"Move the selection to the next cell","Move the selection to the previous cell":"Move the selection to the previous cell","Navigate through the table":"Navigate through the table","Navigate through the toolbar or menu bar":"Navigate through the toolbar or menu bar",Next:"Next","No results found":"No results found","No searchable items":"No searchable items",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab","Open the accessibility help dialog":"Open the accessibility help dialog",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste content":"Paste content","Paste content as plain text":"Paste content as plain text","Paste the media URL in the input.":"Paste the media URL in the input.",'Please enter a valid color (e.g. "ff0000").':'Please enter a valid color (e.g. "ff0000").',"Press %0 for help.":"Press %0 for help.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous","Processing the edited image.":"Processing the edited image.",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Replace from computer":"Replace from computer","Replace image":"Replace image","Replace image from computer":"Replace image from computer","Replace image with file manager":"Replace image with file manager","Replace with file manager":"Replace with file manager","Resize image":"Resize image","Resize image (in %0)":"Resize image (in %0)","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Revert autoformatting action":"Revert autoformatting action","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Server failed to process the image.":"Server failed to process the image.","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough","Strikethrough text":"Strikethrough text",Style:"Style",Subscript:"Subscript",Superscript:"Superscript",Table:"Table","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"The value must not be empty.":"The value must not be empty.","The value should be a plain number.":"The value should be a plain number.","These keyboard shortcuts allow for quick access to content editing features.":"These keyboard shortcuts allow for quick access to content editing features.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline","Underline text":"Underline text",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload from computer":"Upload from computer","Upload image from computer":"Upload image from computer","Upload in progress":"Upload in progress","Uploading image":"Uploading image","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.","User interface and content navigation keystrokes":"User interface and content navigation keystrokes","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(u,g){s.exports=g()}(self,()=>(()=>{var u={9246:(b,_,f)=>{const v=f(6931),x={};for(const A of Object.keys(v))x[v[A]]=A;const y={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};b.exports=y;for(const A of Object.keys(y)){if(!("channels"in y[A]))throw new Error("missing channels property: "+A);if(!("labels"in y[A]))throw new Error("missing channel labels property: "+A);if(y[A].labels.length!==y[A].channels)throw new Error("channel and label counts mismatch: "+A);const{channels:E,labels:M}=y[A];delete y[A].channels,delete y[A].labels,Object.defineProperty(y[A],"channels",{value:E}),Object.defineProperty(y[A],"labels",{value:M})}y.rgb.hsl=function(A){const E=A[0]/255,M=A[1]/255,P=A[2]/255,z=Math.min(E,M,P),F=Math.max(E,M,P),j=F-z;let O,H;F===z?O=0:E===F?O=(M-P)/j:M===F?O=2+(P-E)/j:P===F&&(O=4+(E-M)/j),O=Math.min(60*O,360),O<0&&(O+=360);const q=(z+F)/2;return H=F===z?0:q<=.5?j/(F+z):j/(2-F-z),[O,100*H,100*q]},y.rgb.hsv=function(A){let E,M,P,z,F;const j=A[0]/255,O=A[1]/255,H=A[2]/255,q=Math.max(j,O,H),G=q-Math.min(j,O,H),I=function(V){return(q-V)/6/G+.5};return G===0?(z=0,F=0):(F=G/q,E=I(j),M=I(O),P=I(H),j===q?z=P-M:O===q?z=.3333333333333333+E-P:H===q&&(z=.6666666666666666+M-E),z<0?z+=1:z>1&&(z-=1)),[360*z,100*F,100*q]},y.rgb.hwb=function(A){const E=A[0],M=A[1];let P=A[2];const z=y.rgb.hsl(A)[0],F=1/255*Math.min(E,Math.min(M,P));return P=1-.00392156862745098*Math.max(E,Math.max(M,P)),[z,100*F,100*P]},y.rgb.cmyk=function(A){const E=A[0]/255,M=A[1]/255,P=A[2]/255,z=Math.min(1-E,1-M,1-P);return[100*((1-E-z)/(1-z)||0),100*((1-M-z)/(1-z)||0),100*((1-P-z)/(1-z)||0),100*z]},y.rgb.keyword=function(A){const E=x[A];if(E)return E;let M,P=1/0;for(const j of Object.keys(v)){const O=v[j],H=(F=O,((z=A)[0]-F[0])**2+(z[1]-F[1])**2+(z[2]-F[2])**2);H<P&&(P=H,M=j)}var z,F;return M},y.keyword.rgb=function(A){return v[A]},y.rgb.xyz=function(A){let E=A[0]/255,M=A[1]/255,P=A[2]/255;return E=E>.04045?((E+.055)/1.055)**2.4:E/12.92,M=M>.04045?((M+.055)/1.055)**2.4:M/12.92,P=P>.04045?((P+.055)/1.055)**2.4:P/12.92,[100*(.4124*E+.3576*M+.1805*P),100*(.2126*E+.7152*M+.0722*P),100*(.0193*E+.1192*M+.9505*P)]},y.rgb.lab=function(A){const E=y.rgb.xyz(A);let M=E[0],P=E[1],z=E[2];return M/=95.047,P/=100,z/=108.883,M=M>.008856?M**.3333333333333333:7.787*M+.13793103448275862,P=P>.008856?P**.3333333333333333:7.787*P+.13793103448275862,z=z>.008856?z**.3333333333333333:7.787*z+.13793103448275862,[116*P-16,500*(M-P),200*(P-z)]},y.hsl.rgb=function(A){const E=A[0]/360,M=A[1]/100,P=A[2]/100;let z,F,j;if(M===0)return j=255*P,[j,j,j];z=P<.5?P*(1+M):P+M-P*M;const O=2*P-z,H=[0,0,0];for(let q=0;q<3;q++)F=E+.3333333333333333*-(q-1),F<0&&F++,F>1&&F--,j=6*F<1?O+6*(z-O)*F:2*F<1?z:3*F<2?O+(z-O)*(.6666666666666666-F)*6:O,H[q]=255*j;return H},y.hsl.hsv=function(A){const E=A[0];let M=A[1]/100,P=A[2]/100,z=M;const F=Math.max(P,.01);return P*=2,M*=P<=1?P:2-P,z*=F<=1?F:2-F,[E,100*(P===0?2*z/(F+z):2*M/(P+M)),100*((P+M)/2)]},y.hsv.rgb=function(A){const E=A[0]/60,M=A[1]/100;let P=A[2]/100;const z=Math.floor(E)%6,F=E-Math.floor(E),j=255*P*(1-M),O=255*P*(1-M*F),H=255*P*(1-M*(1-F));switch(P*=255,z){case 0:return[P,H,j];case 1:return[O,P,j];case 2:return[j,P,H];case 3:return[j,O,P];case 4:return[H,j,P];case 5:return[P,j,O]}},y.hsv.hsl=function(A){const E=A[0],M=A[1]/100,P=A[2]/100,z=Math.max(P,.01);let F,j;j=(2-M)*P;const O=(2-M)*z;return F=M*z,F/=O<=1?O:2-O,F=F||0,j/=2,[E,100*F,100*j]},y.hwb.rgb=function(A){const E=A[0]/360;let M=A[1]/100,P=A[2]/100;const z=M+P;let F;z>1&&(M/=z,P/=z);const j=Math.floor(6*E),O=1-P;F=6*E-j,1&j&&(F=1-F);const H=M+F*(O-M);let q,G,I;switch(j){default:case 6:case 0:q=O,G=H,I=M;break;case 1:q=H,G=O,I=M;break;case 2:q=M,G=O,I=H;break;case 3:q=M,G=H,I=O;break;case 4:q=H,G=M,I=O;break;case 5:q=O,G=M,I=H}return[255*q,255*G,255*I]},y.cmyk.rgb=function(A){const E=A[0]/100,M=A[1]/100,P=A[2]/100,z=A[3]/100;return[255*(1-Math.min(1,E*(1-z)+z)),255*(1-Math.min(1,M*(1-z)+z)),255*(1-Math.min(1,P*(1-z)+z))]},y.xyz.rgb=function(A){const E=A[0]/100,M=A[1]/100,P=A[2]/100;let z,F,j;return z=3.2406*E+-1.5372*M+-.4986*P,F=-.9689*E+1.8758*M+.0415*P,j=.0557*E+-.204*M+1.057*P,z=z>.0031308?1.055*z**.4166666666666667-.055:12.92*z,F=F>.0031308?1.055*F**.4166666666666667-.055:12.92*F,j=j>.0031308?1.055*j**.4166666666666667-.055:12.92*j,z=Math.min(Math.max(0,z),1),F=Math.min(Math.max(0,F),1),j=Math.min(Math.max(0,j),1),[255*z,255*F,255*j]},y.xyz.lab=function(A){let E=A[0],M=A[1],P=A[2];return E/=95.047,M/=100,P/=108.883,E=E>.008856?E**.3333333333333333:7.787*E+.13793103448275862,M=M>.008856?M**.3333333333333333:7.787*M+.13793103448275862,P=P>.008856?P**.3333333333333333:7.787*P+.13793103448275862,[116*M-16,500*(E-M),200*(M-P)]},y.lab.xyz=function(A){let E,M,P;M=(A[0]+16)/116,E=A[1]/500+M,P=M-A[2]/200;const z=M**3,F=E**3,j=P**3;return M=z>.008856?z:(M-.13793103448275862)/7.787,E=F>.008856?F:(E-.13793103448275862)/7.787,P=j>.008856?j:(P-.13793103448275862)/7.787,E*=95.047,M*=100,P*=108.883,[E,M,P]},y.lab.lch=function(A){const E=A[0],M=A[1],P=A[2];let z;return z=360*Math.atan2(P,M)/2/Math.PI,z<0&&(z+=360),[E,Math.sqrt(M*M+P*P),z]},y.lch.lab=function(A){const E=A[0],M=A[1],P=A[2]/360*2*Math.PI;return[E,M*Math.cos(P),M*Math.sin(P)]},y.rgb.ansi16=function(A,E=null){const[M,P,z]=A;let F=E===null?y.rgb.hsv(A)[2]:E;if(F=Math.round(F/50),F===0)return 30;let j=30+(Math.round(z/255)<<2|Math.round(P/255)<<1|Math.round(M/255));return F===2&&(j+=60),j},y.hsv.ansi16=function(A){return y.rgb.ansi16(y.hsv.rgb(A),A[2])},y.rgb.ansi256=function(A){const E=A[0],M=A[1],P=A[2];return E===M&&M===P?E<8?16:E>248?231:Math.round((E-8)/247*24)+232:16+36*Math.round(E/255*5)+6*Math.round(M/255*5)+Math.round(P/255*5)},y.ansi16.rgb=function(A){let E=A%10;if(E===0||E===7)return A>50&&(E+=3.5),E=E/10.5*255,[E,E,E];const M=.5*(1+~~(A>50));return[(1&E)*M*255,(E>>1&1)*M*255,(E>>2&1)*M*255]},y.ansi256.rgb=function(A){if(A>=232){const M=10*(A-232)+8;return[M,M,M]}let E;return A-=16,[Math.floor(A/36)/5*255,Math.floor((E=A%36)/6)/5*255,E%6/5*255]},y.rgb.hex=function(A){const E=(((255&Math.round(A[0]))<<16)+((255&Math.round(A[1]))<<8)+(255&Math.round(A[2]))).toString(16).toUpperCase();return"000000".substring(E.length)+E},y.hex.rgb=function(A){const E=A.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!E)return[0,0,0];let M=E[0];E[0].length===3&&(M=M.split("").map(z=>z+z).join(""));const P=parseInt(M,16);return[P>>16&255,P>>8&255,255&P]},y.rgb.hcg=function(A){const E=A[0]/255,M=A[1]/255,P=A[2]/255,z=Math.max(Math.max(E,M),P),F=Math.min(Math.min(E,M),P),j=z-F;let O,H;return O=j<1?F/(1-j):0,H=j<=0?0:z===E?(M-P)/j%6:z===M?2+(P-E)/j:4+(E-M)/j,H/=6,H%=1,[360*H,100*j,100*O]},y.hsl.hcg=function(A){const E=A[1]/100,M=A[2]/100,P=M<.5?2*E*M:2*E*(1-M);let z=0;return P<1&&(z=(M-.5*P)/(1-P)),[A[0],100*P,100*z]},y.hsv.hcg=function(A){const E=A[1]/100,M=A[2]/100,P=E*M;let z=0;return P<1&&(z=(M-P)/(1-P)),[A[0],100*P,100*z]},y.hcg.rgb=function(A){const E=A[0]/360,M=A[1]/100,P=A[2]/100;if(M===0)return[255*P,255*P,255*P];const z=[0,0,0],F=E%1*6,j=F%1,O=1-j;let H=0;switch(Math.floor(F)){case 0:z[0]=1,z[1]=j,z[2]=0;break;case 1:z[0]=O,z[1]=1,z[2]=0;break;case 2:z[0]=0,z[1]=1,z[2]=j;break;case 3:z[0]=0,z[1]=O,z[2]=1;break;case 4:z[0]=j,z[1]=0,z[2]=1;break;default:z[0]=1,z[1]=0,z[2]=O}return H=(1-M)*P,[255*(M*z[0]+H),255*(M*z[1]+H),255*(M*z[2]+H)]},y.hcg.hsv=function(A){const E=A[1]/100,M=E+A[2]/100*(1-E);let P=0;return M>0&&(P=E/M),[A[0],100*P,100*M]},y.hcg.hsl=function(A){const E=A[1]/100,M=A[2]/100*(1-E)+.5*E;let P=0;return M>0&&M<.5?P=E/(2*M):M>=.5&&M<1&&(P=E/(2*(1-M))),[A[0],100*P,100*M]},y.hcg.hwb=function(A){const E=A[1]/100,M=E+A[2]/100*(1-E);return[A[0],100*(M-E),100*(1-M)]},y.hwb.hcg=function(A){const E=A[1]/100,M=1-A[2]/100,P=M-E;let z=0;return P<1&&(z=(M-P)/(1-P)),[A[0],100*P,100*z]},y.apple.rgb=function(A){return[A[0]/65535*255,A[1]/65535*255,A[2]/65535*255]},y.rgb.apple=function(A){return[A[0]/255*65535,A[1]/255*65535,A[2]/255*65535]},y.gray.rgb=function(A){return[A[0]/100*255,A[0]/100*255,A[0]/100*255]},y.gray.hsl=function(A){return[0,0,A[0]]},y.gray.hsv=y.gray.hsl,y.gray.hwb=function(A){return[0,100,A[0]]},y.gray.cmyk=function(A){return[0,0,0,A[0]]},y.gray.lab=function(A){return[A[0],0,0]},y.gray.hex=function(A){const E=255&Math.round(A[0]/100*255),M=((E<<16)+(E<<8)+E).toString(16).toUpperCase();return"000000".substring(M.length)+M},y.rgb.gray=function(A){return[(A[0]+A[1]+A[2])/3/255*100]}},9047:(b,_,f)=>{const v=f(9246),x=f(802),y={};Object.keys(v).forEach(A=>{y[A]={},Object.defineProperty(y[A],"channels",{value:v[A].channels}),Object.defineProperty(y[A],"labels",{value:v[A].labels});const E=x(A);Object.keys(E).forEach(M=>{const P=E[M];y[A][M]=function(z){const F=function(...j){const O=j[0];if(O==null)return O;O.length>1&&(j=O);const H=z(j);if(typeof H=="object")for(let q=H.length,G=0;G<q;G++)H[G]=Math.round(H[G]);return H};return"conversion"in z&&(F.conversion=z.conversion),F}(P),y[A][M].raw=function(z){const F=function(...j){const O=j[0];return O==null?O:(O.length>1&&(j=O),z(j))};return"conversion"in z&&(F.conversion=z.conversion),F}(P)})}),b.exports=y},802:(b,_,f)=>{const v=f(9246);function x(E){const M=function(){const z={},F=Object.keys(v);for(let j=F.length,O=0;O<j;O++)z[F[O]]={distance:-1,parent:null};return z}(),P=[E];for(M[E].distance=0;P.length;){const z=P.pop(),F=Object.keys(v[z]);for(let j=F.length,O=0;O<j;O++){const H=F[O],q=M[H];q.distance===-1&&(q.distance=M[z].distance+1,q.parent=z,P.unshift(H))}}return M}function y(E,M){return function(P){return M(E(P))}}function A(E,M){const P=[M[E].parent,E];let z=v[M[E].parent][E],F=M[E].parent;for(;M[F].parent;)P.unshift(M[F].parent),z=y(v[M[F].parent][F],z),F=M[F].parent;return z.conversion=P,z}b.exports=function(E){const M=x(E),P={},z=Object.keys(M);for(let F=z.length,j=0;j<F;j++){const O=z[j];M[O].parent!==null&&(P[O]=A(O,M))}return P}},6931:b=>{b.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},4199:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const E=A},8708:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const E=A},1866:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,':root{--ck-image-processing-highlight-color:#f9fafa;--ck-image-processing-background-color:#e3e5e8}.ck.ck-editor__editable .image.image-processing{position:relative}.ck.ck-editor__editable .image.image-processing:before{animation:ck-image-processing-animation 2s linear infinite;background:linear-gradient(90deg,var(--ck-image-processing-background-color),var(--ck-image-processing-highlight-color),var(--ck-image-processing-background-color));background-size:200% 100%;content:"";height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}.ck.ck-editor__editable .image.image-processing img{height:100%}@keyframes ck-image-processing-animation{0%{background-position:200% 0}to{background-position:-200% 0}}',"",{version:3,sources:["webpack://./../ckeditor5-ckbox/theme/ckboximageedit.css"],names:[],mappings:"AAKA,MAEC,6CAAyD,CACzD,8CACD,CAIE,gDACC,iBA2BD,CAzBC,uDAmBC,0DAA2D,CAR3D,oKAKC,CACD,yBAA0B,CAhB1B,UAAW,CAOX,WAAY,CAHZ,MAAO,CAFP,iBAAkB,CAClB,KAAM,CAKN,UAAW,CAHX,SAcD,CAEA,oDACC,WACD,CAKH,yCACC,GACC,0BACD,CACA,GACC,2BACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Based on default CKBox theme colors */
	--ck-image-processing-highlight-color: hsl(220, 10%, 98%);
	--ck-image-processing-background-color: hsl(220, 10%, 90%);
}

.ck.ck-editor__editable {
	& .image {
		&.image-processing {
			position: relative;

			&:before {
				content: '';

				position: absolute;
				top: 0;
				left: 0;
				z-index: 1;

				height: 100%;
				width: 100%;

				background: linear-gradient(
					90deg,
					var(--ck-image-processing-background-color),
					var(--ck-image-processing-highlight-color),
					var(--ck-image-processing-background-color)
				);
				background-size: 200% 100%;

				animation: ck-image-processing-animation 2s linear infinite;
			}

			& img {
				height: 100%;
			}
		}
	}
}

@keyframes ck-image-processing-animation {
	0% {
		background-position: 200% 0;
	}
	100% {
		background-position: -200% 0;
	}
}
`],sourceRoot:""}]);const E=A},7793:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}.ck.ck-clipboard-drop-target-line:before{border-style:solid;content:"";height:0;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-width)*-.5);width:0}[dir=ltr] .ck.ck-clipboard-drop-target-line:before{border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color);border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height);left:-1px}[dir=rtl] .ck.ck-clipboard-drop-target-line:before{border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0;right:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CC9BA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eAwBD,CAtBC,yCAMC,kBAAmB,CALnB,UAAW,CAIX,QAAS,CAHT,iBAAkB,CAClB,uDAA0D,CAC1D,OAiBD,CArBA,mDAYE,sFAAuF,CADvF,+JAAoK,CAFpK,SAYF,CArBA,mDAmBE,sFAAuF,CADvF,+JAAmK,CAFnK,UAKF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border);
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: '';
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;

	&::before {
		content: '';
		position: absolute;
		top: calc(-.5 * var(--ck-clipboard-drop-target-dot-width));
		width: 0;
		height: 0;
		border-style: solid;

		@mixin ck-dir ltr {
			left: -1px;

			border-width: calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height);
			border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
		}

		@mixin ck-dir rtl {
			right: -1px;

			border-width:calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0;
			border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
		}
	}
}
`],sourceRoot:""}]);const E=A},7388:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-panel)}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border:solid var(--ck-color-base-border);border-width:1px 1px 0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-sticky-panel__content_sticky{border-bottom-width:1px}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-menu-bar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-toolbar{border:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,8DCED,eDeC,CAjBA,mKCMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAcF,CAjBA,8DAOC,wCAAsB,CAAtB,sBAUD,CARC,8FACC,uBACD,CAEA,qJAEC,QACD,CAMH,yCAEC,0CAA2C,CCtB3C,eDgCD,CAZA,yHChBE,qCAAsC,CDqBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-panel);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-sticky-panel__content {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border: 1px solid var(--ck-color-base-border);
			border-bottom-width: 0;

			&.ck-sticky-panel__content_sticky {
				border-bottom-width: 1px;
			}

			& .ck-menu-bar,
			& .ck-toolbar {
				border: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=A},4098:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}@media (forced-colors:active){.ck .ck-placeholder,.ck.ck-placeholder{forced-color-adjust:preserve-parent-color}}.ck .ck-placeholder:before,.ck.ck-placeholder:before{cursor:text}@media (forced-colors:none){.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text)}}@media (forced-colors:active){.ck .ck-placeholder:before,.ck.ck-placeholder:before{font-style:italic;margin-left:1px}}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC7BC,8BACC,uCCOA,yCDLA,CACD,CCOA,qDACC,WAmBD,CDvBA,4BACC,qDCMC,6CDJD,CACD,CAZA,8BACC,qDCsBC,iBAAkB,CAMlB,eD1BD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	@mixin ck-media-forced-colors {
		/*
		 * This is needed for Edge on Windows to use the right color for the placeholder content (::before).
		 * See https://github.com/ckeditor/ckeditor5/issues/14907.
		 */
		forced-color-adjust: preserve-parent-color;
	}

	&::before {
		cursor: text;

		@mixin ck-media-default-colors {
			color: var(--ck-color-engine-placeholder-text);
		}

		@mixin ck-media-forced-colors {
			/*
			 * In the high contrast mode there is no telling between regular and placeholder text. Using
			 * italic text to address that issue. See https://github.com/ckeditor/ckeditor5/issues/14907.
			 */
			font-style: italic;

			/*
			 * Without this margin, the caret will not show up and blink when the user puts the selection
			 * in the placeholder (Edge on Windows). See https://github.com/ckeditor/ckeditor5/issues/14907.
			 */
			margin-left: 1px;
		}
	}
}
`],sourceRoot:""}]);const E=A},8264:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const E=A},6269:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const E=A},265:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image{z-index:1}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBA2BD,CAjBC,uBAEC,aAAc,CAad,WAAY,CAVZ,aAAc,CAGd,cAAe,CAGf,cAKD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAKA,+BACC,SASD,CAHC,kDACC,SACD,CAMD,sCACC,SAkBD,CAZC,yDACC,SAUD,CAHC,qEACC,YACD,CAMF,0CACC,WACD,CAMC,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%;

			/* Keep proportions of the block image if the height is set and the image is wider than the editor width.
			See https://github.com/ckeditor/ckeditor5/issues/14542. */
			height: auto;
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image {
		z-index: 1;

		/*
		 * Make sure the selected image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;
		}
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image-inline {
		z-index: 1;

		/*
		 * Make sure the selected inline image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;

			/*
			 * Make sure the native browser selection style is not displayed.
			 * Inline image widgets have their own styles for the selected state and
			 * leaving this up to the browser is asking for a visual collision.
			 */
			& ::selection {
				display: none;
			}
		}
	}

	/* Keep proportions of the inline image if the height is set and the image is wider than the editor width.
	See https://github.com/ckeditor/ckeditor5/issues/14542. */
	& .image-inline img {
		height: auto;
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const E=A},5247:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highlighted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}@media (forced-colors:active){.ck-content .image>figcaption{background-color:unset;color:unset}}@media (forced-colors:none){.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}}@media (prefers-reduced-motion:reduce){.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:none}}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highlighted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAOA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,oDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAYD,CAJC,8BAXD,8BAYE,sBAAuB,CACvB,WAEF,CADC,CCdA,4BACC,qEDmBA,iDCjBA,CACD,CDmBA,uCALD,qEAME,cAEF,CADC,CAGD,sCACC,GACC,qEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;

	/* Improve placeholder rendering in high-constrast mode (https://github.com/ckeditor/ckeditor5/issues/14907). */
	@media (forced-colors: active) {
		background-color: unset;
		color: unset;
	}
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	@mixin ck-media-default-colors {
		animation: ck-image-caption-highlight .6s ease-out;
	}

	@media (prefers-reduced-motion: reduce) {
		animation: none;
	}
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const E=A},4642:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-image-custom-resize-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-image-custom-resize-form .ck-labeled-field-view{display:inline-block}.ck.ck-image-custom-resize-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-image-custom-resize-form{flex-wrap:wrap}.ck.ck-image-custom-resize-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-image-custom-resize-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecustomresizeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,gCAIC,sBAAuB,CAHvB,YAAa,CACb,kBAAmB,CACnB,gBAsBD,CAnBC,uDACC,oBACD,CAEA,0CACC,YACD,CCbA,oCDCD,gCAeE,cAUF,CARE,uDACC,eACD,CAEA,2CACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-image-custom-resize-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: flex-start;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=A},3350:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-image-insert-url .ck-image-insert-url__action-row{display:grid;grid-template-columns:repeat(2,1fr)}:root{--ck-image-insert-insert-by-url-width:250px}.ck.ck-image-insert-url{--ck-input-width:100%}.ck.ck-image-insert-url .ck-image-insert-url__action-row{grid-column-gap:var(--ck-spacing-large);margin-top:var(--ck-spacing-large)}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-cancel,.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-save{justify-content:center;min-width:auto}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}.ck.ck-image-insert-form>.ck.ck-button{display:block;padding:var(--ck-list-button-padding);width:100%}[dir=ltr] .ck.ck-image-insert-form>.ck.ck-button{text-align:left}[dir=rtl] .ck.ck-image-insert-form>.ck.ck-button{text-align:right}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:first-child){border-top:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:last-child){border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible,.ck.ck-image-insert-form>.ck.ck-image-insert-url{min-width:var(--ck-image-insert-insert-by-url-width)}.ck.ck-image-insert-form>.ck.ck-image-insert-url{padding:var(--ck-spacing-large)}.ck.ck-image-insert-form:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageinsert.css"],names:[],mappings:"AAMC,yDACC,YAAa,CACb,mCACD,CCFD,MACC,2CACD,CAEA,wBACC,qBAgBD,CAdC,yDACC,uCAAwC,CACxC,kCAWD,CATC,oJAEC,sBAAuB,CACvB,cACD,CAEA,sFACC,0BACD,CAKD,uCACC,aAAc,CAEd,qCAAsC,CADtC,UAUD,CAZA,iDAME,eAMF,CAZA,iDAUE,gBAEF,CAGC,8DACC,gDACD,CAEA,6DACC,mDACD,CAMD,6FAJC,oDAOD,CAHA,iDAEC,+BACD,CAEA,+BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-url {
	& .ck-image-insert-url__action-row {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-image-insert-insert-by-url-width: 250px;
}

.ck.ck-image-insert-url {
	--ck-input-width: 100%;

	& .ck-image-insert-url__action-row {
		grid-column-gap: var(--ck-spacing-large);
		margin-top: var(--ck-spacing-large);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
			min-width: auto;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}

.ck.ck-image-insert-form {
	& > .ck.ck-button {
		display: block;
		width: 100%;
		padding: var(--ck-list-button-padding);

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& > .ck.ck-collapsible {
		&:not(:first-child) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		&:not(:last-child) {
			border-bottom: 1px solid var(--ck-color-base-border);
		}

		min-width: var(--ck-image-insert-insert-by-url-width);
	}

	/* This is the case when there are no other integrations configured than insert by URL */
	& > .ck.ck-image-insert-url {
		min-width: var(--ck-image-insert-insert-by-url-width);
		padding: var(--ck-spacing-large);
	}

	&:focus {
		outline: none;
	}
}
`],sourceRoot:""}]);const E=A},7378:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-editor__editable img.image_placeholder{background-size:100% 100%}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageplaceholder.css"],names:[],mappings:"AAMC,8CACC,yBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& img.image_placeholder {
		background-size: 100% 100%;
	}
}
`],sourceRoot:""}]);const E=A},3469:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAMA,8BACC,WACD,CAEA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Preserve aspect ratio of the resized image after introducing image height attribute. */
.ck-content img.image_resized {
	height: auto;
}

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const E=A},6386:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const E=A},7693:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@media (prefers-reduced-motion:reduce){.ck-image-upload-complete-icon{animation-duration:0ms}.ck-image-upload-complete-icon:after{animation:none;height:.45em;opacity:1;width:.3em}}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFAqCD,CAjCC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAEA,uCA7CD,+BA8CE,sBASF,CAPE,qCACC,cAAe,CAGf,YAAc,CAFd,SAAU,CACV,UAED,CACD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}

	@media (prefers-reduced-motion: reduce) {
		animation-duration: 0ms;

		&::after {
			animation: none;
			opacity: 1;
			width: 0.3em;
			height: 0.45em;
		}
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const E=A},1559:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const E=A},2267:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}@media (prefers-reduced-motion:reduce){.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:none;opacity:1}}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBAMD,CAJC,uCAHD,yFAKE,cAAe,CADf,SAGF,CADC,CAKF,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;

			@media (prefers-reduced-motion: reduce) {
				opacity: 1;
				animation: none;
			}
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const E=A},4062:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=A},7719:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const E=A},8762:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const E=A},3817:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-link-form{align-items:flex-start;display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBAEC,sBAAuB,CADvB,YAkBD,CAfC,2BACC,YACD,CCPA,oCDCD,iBASE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CChBD,CDwBD,iCACC,aAYD,CALE,wHAEC,mCACD,CEhCF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;
	align-items: flex-start;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const E=A},4808:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzUuNzUgMCAwIDEtLjIxNy4yMDYgNS4yNTEgNS4yNTEgMCAwIDEtOC41MDMtNS45NTUuNy43IDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NHptNS40OTQtNS4zMzVhLjc1Ljc1IDAgMCAxLS4xMi4yNzRsLTEuMTQ3IDEuNjM5YS43NS43NSAwIDEgMS0xLjIyOC0uODZsLjg2LTEuMjNhMy43NSAzLjc1IDAgMCAwLTYuMTQ0LTQuMzAxbC0uODYgMS4yMjlhLjc1Ljc1IDAgMCAxLTEuMjI5LS44NmwxLjE0OC0xLjY0YS43NS43NSAwIDAgMSAuMjE3LS4yMDYgNS4yNTEgNS4yNTEgMCAwIDEgOC41MDMgNS45NTVtLTQuNTYzLTIuNTMyYS43NS43NSAwIDAgMSAuMTg0IDEuMDQ1bC0zLjE1NSA0LjUwNWEuNzUuNzUgMCAxIDEtMS4yMjktLjg2bDMuMTU1LTQuNTA2YS43NS43NSAwIDAgMSAxLjA0NS0uMTg0Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,k2BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const E=A},1232:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const E=A},6903:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const E=A},9968:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const E=A},7141:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const E=A},8991:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.ck-content .todo-list .todo-list__label>input:before{transition:none}}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover:before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{transition:none}}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:after{border-color:#fff}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CA4EA,uBACC,eAwBD,CAtBC,0BAEC,iBAAkB,CADlB,iBAMD,CAHC,qCACC,cACD,CAIA,+CAtFD,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAqFC,CAFA,wDApEA,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAoEA,CAhED,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UASD,CAHC,uCAXD,sDAYE,eAEF,CADC,CAGD,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAwBA,wEACC,qBACD,CAEA,mGACC,iBACD,CAYD,kKAEC,cAKD,CAHC,4LACC,mCACD,CAMD,+FAxHA,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAuHA,CAFA,wGAtGC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAsGD,CAlGA,sGAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UASD,CAHC,uCAXD,sGAYE,eAEF,CADC,CAGD,qGAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+GACC,kBAA8B,CAC9B,oBACD,CAEA,8GACC,iBACD,CA2DA,uHACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

@define-mixin todo-list-checkbox {
	-webkit-appearance: none;
	display: inline-block;
	position: relative;
	width: var(--ck-todo-list-checkmark-size);
	height: var(--ck-todo-list-checkmark-size);
	vertical-align: middle;

	/* Needed on iOS */
	border: 0;

	/* LTR styles */
	left: -25px;
	margin-right: -15px;
	right: 0;
	margin-left: 0;

	/* RTL styles */
	@nest [dir=rtl]& {
		left: 0;
		margin-right: 0;
		right: -25px;
		margin-left: -15px;
	}

	&::before {
		display: block;
		position: absolute;
		box-sizing: border-box;
		content: '';
		width: 100%;
		height: 100%;
		border: 1px solid hsl(0, 0%, 20%);
		border-radius: 2px;
		transition: 250ms ease-in-out box-shadow;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}
	}

	&::after {
		display: block;
		position: absolute;
		box-sizing: content-box;
		pointer-events: none;
		content: '';

		/* Calculate tick position, size and border-width proportional to the checkmark size. */
		left: calc( var(--ck-todo-list-checkmark-size) / 3 );
		top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
		border-style: solid;
		border-color: transparent;
		border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
		transform: rotate(45deg);
	}

	&[checked] {
		&::before {
			background: hsl(126, 64%, 41%);
			border-color: hsl(126, 64%, 41%);
		}

		&::after {
			border-color: hsl(0, 0%, 100%);
		}
	}
}

/*
 * To-do list content styles.
 */
.ck-content .todo-list {
	list-style: none;

	& li {
		position: relative;
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			@mixin todo-list-checkbox;
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}

		&.todo-list__label_without-description input[type=checkbox] {
			position: absolute;
		}
	}
}

/*
 * To-do list editing view styles.
 */
.ck-editor__editable.ck-content .todo-list .todo-list__label {
	/*
	 * To-do list should be interactive only during the editing
	 * (https://github.com/ckeditor/ckeditor5/issues/2090).
	 */
	& > input,
	& > span[contenteditable=false] > input {
		cursor: pointer;

		&:hover::before {
			box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
		}
	}

	/*
	 * Document Lists - editing view has an additional span around checkbox.
	 */
	& > span[contenteditable=false] > input {
		@mixin todo-list-checkbox;
	}

	&.todo-list__label_without-description {
		& input[type=checkbox] {
			position: absolute;
		}
	}
}
`],sourceRoot:""}]);const E=A},70:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const E=A},7048:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSlzY2FsZSguOTgwMTIpIj48cmVjdCB3aWR0aD0iNjAuMDk5IiBoZWlnaHQ9IjYwLjA5OSIgeD0iMTc2LjAzMSIgeT0iMjMxLjM5OSIgZmlsbD0iIzM0YTY2OCIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiIHJ4PSI1LjIzOCIgcnk9IjUuMjM4Ii8+PHBhdGggZmlsbD0iIzVjODhjNSIgZD0ibTIwNi40NzcgMjYwLjktMjguOTg3IDI4Ljk4N2E1LjIyIDUuMjIgMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiLz48cGF0aCBmaWxsPSIjZGQ0YjNlIiBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwN3EuNS43NTMuOTUgMS41MDguNTE1LjcxNS45ODggMS40NGMxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5cS40NzMtLjcyMy45ODgtMS40MzkuNDUtLjc1NS45NS0xLjUwOGMuMzU5LS43Ljc2LTEuNDA0IDEuMTktMi4xMDcgMS40MjYtMi40MDIgMi01LjExNCAyLjAwNC03Ljg3NSAwLTguODQ0LTcuNTExLTE2LjAxNC0xNi43NzYtMTYuMDE0IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIGN4PSIyMjYuNzQyIiBjeT0iMjM5LjAwMiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiIHJ4PSI1LjgyOCIgcnk9IjUuNTY0Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjlxLS4wMDEtLjU0My0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhxLS4wMDEtLjAwMy0uMDA0LS4wMDVjLTEuNTg4LTEuNTI0LTMuNjItMi4yMTUtNS45NTUtMi4yMTVtNC40MyA1LjY2LjAwMy4wMDZ2LS4wMDN6IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGZpbGw9IiNjM2MzYzMiIGQ9Im0yMTUuMTg0IDI1MS45MjktNy45OCA3Ljk3OSAyOC40NzcgMjguNDc1YTUuMiA1LjIgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjl6Ii8+PHBhdGggZmlsbD0iI2ZkZGM0ZiIgZD0ibTIxMi45ODMgMjQ4LjQ5NS0zNi45NTIgMzYuOTUzdi44MTJhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzggNS4yMzhoMS4wMTVsMzUuNjY2LTM1LjY2NmExMzYgMTM2IDAgMCAwLTIuNzY0LTMuOSAzOCAzOCAwIDAgMC0uOTg5LTEuNDQgMzUgMzUgMCAwIDAtLjk1LTEuNTA4Yy0uMDgzLS4xNjItLjE3Ni0uMzI2LS4yNjQtLjQ4OSIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiPjxwYXRoIGZpbGw9IiNGRkZGRkUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTk2Ny40ODQgMEg1Ni41MTdDMjUuMzA0IDAgMCAyNS4zMDQgMCA1Ni41MTd2OTEwLjk2NkMwIDk5OC42OTQgMjUuMjk3IDEwMjQgNTYuNTIyIDEwMjRINTQ3VjYyOEg0MTRWNDczaDEzM1YzNTkuMDI5YzAtMTMyLjI2MiA4MC43NzMtMjA0LjI4MiAxOTguNzU2LTIwNC4yODIgNTYuNTEzIDAgMTA1LjA4NiA0LjIwOCAxMTkuMjQ0IDYuMDg5VjI5OWwtODEuNjE2LjAzN2MtNjMuOTkzIDAtNzYuMzg0IDMwLjQ5Mi03Ni4zODQgNzUuMjM2VjQ3M2gxNTMuNDg3bC0xOS45ODYgMTU1SDcwN3YzOTZoMjYwLjQ4NGMzMS4yMTMgMCA1Ni41MTYtMjUuMzAzIDU2LjUxNi01Ni41MTZWNTYuNTE1QzEwMjQgMjUuMzAzIDk5OC42OTcgMCA5NjcuNDg0IDAiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OW0wIDQ1LjM5MWM2Ny4yNjUgMCA3NS4yMzMuMjU3IDEwMS43OTcgMS40NjkgMjQuNTYyIDEuMTIgMzcuOTAxIDUuMjI0IDQ2Ljc3OCA4LjY3NCAxMS43NTkgNC41NyAyMC4xNTEgMTAuMDI5IDI4Ljk2NiAxOC44NDVzMTQuMjc1IDE3LjIwNyAxOC44NDUgMjguOTY2YzMuNDUgOC44NzcgNy41NTQgMjIuMjE2IDguNjc0IDQ2Ljc3OCAxLjIxMiAyNi41NjQgMS40NjkgMzQuNTMyIDEuNDY5IDEwMS43OTggMCA2Ny4yNjUtLjI1NyA3NS4yMzMtMS40NjkgMTAxLjc5Ny0xLjEyIDI0LjU2Mi01LjIyNCAzNy45MDEtOC42NzQgNDYuNzc4LTQuNTcgMTEuNzU5LTEwLjAyOSAyMC4xNTEtMTguODQ1IDI4Ljk2NnMtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1Yy04Ljg3NyAzLjQ1LTIyLjIxNiA3LjU1NC00Ni43NzggOC42NzQtMjYuNTYgMS4yMTItMzQuNTI3IDEuNDY5LTEwMS43OTcgMS40NjktNjcuMjcxIDAtNzUuMjM3LS4yNTctMTAxLjc5OC0xLjQ2OS0yNC41NjItMS4xMi0zNy45MDEtNS4yMjQtNDYuNzc4LTguNjc0LTExLjc1OS00LjU3LTIwLjE1MS0xMC4wMjktMjguOTY2LTE4Ljg0NXMtMTQuMjc1LTE3LjIwNy0xOC44NDUtMjguOTY2Yy0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NnMxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDVjOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OSIgbWFzaz0idXJsKCNiKSIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0yNTEuOTIxIDMzNi4wNTNjLTQ2LjM3OCAwLTgzLjk3NC0zNy41OTYtODMuOTc0LTgzLjk3M3MzNy41OTYtODMuOTc0IDgzLjk3NC04My45NzRjNDYuMzc3IDAgODMuOTczIDM3LjU5NiA4My45NzMgODMuOTc0IDAgNDYuMzc3LTM3LjU5NiA4My45NzMtODMuOTczIDgzLjk3M20wLTIxMy4zMzhjLTcxLjQ0NyAwLTEyOS4zNjUgNTcuOTE4LTEyOS4zNjUgMTI5LjM2NSAwIDcxLjQ0NiA1Ny45MTggMTI5LjM2NCAxMjkuMzY1IDEyOS4zNjQgNzEuNDQ2IDAgMTI5LjM2NC01Ny45MTggMTI5LjM2NC0xMjkuMzY0IDAtNzEuNDQ3LTU3LjkxOC0xMjkuMzY1LTEyOS4zNjQtMTI5LjM2NU00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjNzMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzFjMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwME0xNjMuNCAzMDUuNWM4OC43IDAgMTM3LjItNzMuNSAxMzcuMi0xMzcuMiAwLTIuMSAwLTQuMi0uMS02LjIgOS40LTYuOCAxNy42LTE1LjMgMjQuMS0yNS04LjYgMy44LTE3LjkgNi40LTI3LjcgNy42IDEwLTYgMTcuNi0xNS40IDIxLjItMjYuNy05LjMgNS41LTE5LjYgOS41LTMwLjYgMTEuNy04LjgtOS40LTIxLjMtMTUuMi0zNS4yLTE1LjItMjYuNiAwLTQ4LjIgMjEuNi00OC4yIDQ4LjIgMCAzLjguNCA3LjUgMS4zIDExLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40LTQuMSA3LjEtNi41IDE1LjQtNi41IDI0LjIgMCAxNi43IDguNSAzMS41IDIxLjUgNDAuMS03LjktLjItMTUuMy0yLjQtMjEuOC02di42YzAgMjMuNCAxNi42IDQyLjggMzguNyA0Ny4zLTQgMS4xLTguMyAxLjctMTIuNyAxLjctMy4xIDAtNi4xLS4zLTkuMS0uOSA2LjEgMTkuMiAyMy45IDMzLjEgNDUgMzMuNS0xNi41IDEyLjktMzcuMyAyMC42LTU5LjkgMjAuNi0zLjkgMC03LjctLjItMTEuNS0uNyAyMS4xIDEzLjggNDYuNSAyMS44IDczLjcgMjEuOCIgc3R5bGU9ImZpbGw6I2ZmZiIvPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,goGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,o+GACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,g/BACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const E=A},5651:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=A},5506:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=A},4043:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const E=A},2655:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const E=A},5032:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}@media (prefers-reduced-motion:reduce){.ck .ck-insert-table-dropdown-grid-box{transition:none}}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAcD,CAZC,uCATD,uCAUE,eAWF,CAVC,CAEA,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const E=A},2329:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const E=A},4143:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}@media (forced-colors:active){.ck-content .table>figcaption{background-color:unset;color:unset}}@media (forced-colors:none){.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAOA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAaD,CCxBC,8BACC,8BDoBA,sBAAuB,CACvB,WCnBA,CACD,CAIA,4BDqBC,qEACC,iDACD,CCnBD,CDsBA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-selector-caption-background: hsl(0, 0%, 97%);
	--ck-color-selector-caption-text: hsl(0, 0%, 20%);
	--ck-color-selector-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-selector-caption-text);
	background-color: var(--ck-color-selector-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;

	/* Improve placeholder rendering in high-constrast mode (https://github.com/ckeditor/ckeditor5/issues/14907). */
	@mixin ck-media-forced-colors {
		background-color: unset;
		color: unset;
	}
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	@mixin ck-media-default-colors {
		&.table__caption_highlighted {
			animation: ck-table-caption-highlight .6s ease-out;
		}
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-selector-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-selector-caption-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const E=A},8986:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const E=A},8795:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const E=A},8137:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAKE,8QAGC,2DAA4D,CAK5D,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-selector-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const E=A},1623:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}@media (prefers-reduced-motion:reduce){.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:none}}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCA6BD,CA3BC,8ECxCD,eD6DC,CArBA,mMCpCA,qCDyDA,CArBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAcD,CAXC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEAKD,CAHC,uCAlBD,8EAmBE,cAEF,CADC,CAID,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;

			@media (prefers-reduced-motion: reduce) {
				animation: none;
			}
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=A},5562:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const E=A},8423:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const E=A},1801:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-aria-live-announcer{left:-10000px;position:absolute;top:-10000px}.ck.ck-aria-live-region-list{list-style-type:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/arialiveannouncer/arialiveannouncer.css"],names:[],mappings:"AAKA,2BAEC,aAAc,CADd,iBAAkB,CAElB,YACD,CAEA,6BACC,oBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-aria-live-announcer {
	position: absolute;
	left: -10000px;
	top: -10000px;
}

.ck.ck-aria-live-region-list {
	list-style-type: none;
}
`],sourceRoot:""}]);const E=A},5727:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-panel)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{bottom:auto;top:100%}.ck.ck-autocomplete>.ck-search__results{border-radius:0}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:200px;min-width:auto;overflow-y:auto}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,oBACC,iBAeD,CAbC,wCACC,iBAAkB,CAClB,yBAUD,CARC,6DACC,WACD,CAEA,6DAEC,WAAY,CADZ,QAED,CCVD,wCCEA,eDuBA,CAzBA,uHCMC,qCDmBD,CAzBA,wCAMC,0CAA2C,CAC3C,sDAAuD,CEPxD,oCAA8B,CFI7B,gBAAiB,CAIjB,cAAe,CAHf,eAoBD,CAfC,6DACC,2BAA4B,CAC5B,4BAA6B,CAG7B,kBACD,CAEA,6DACC,wBAAyB,CACzB,yBAA0B,CAG1B,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-autocomplete {
	position: relative;

	& > .ck-search__results {
		position: absolute;
		z-index: var(--ck-z-panel);

		&.ck-search__results_n {
			bottom: 100%;
		}

		&.ck-search__results_s {
			top: 100%;
			bottom: auto;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css";
@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css";

.ck.ck-autocomplete {
	& > .ck-search__results {
		@mixin ck-rounded-corners;
		@mixin ck-drop-shadow;

		max-height: 200px;
		overflow-y: auto;
		background: var(--ck-color-base-background);
		border: 1px solid var(--ck-color-dropdown-panel-border);
		min-width: auto;

		&.ck-search__results_n {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-bottom: -1px;
		}

		&.ck-search__results_s {
			border-top-left-radius: 0;
			border-top-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-top: -1px;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=A},9715:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}[dir=ltr] .ck.ck-button,[dir=ltr] a.ck.ck-button{justify-content:left}[dir=rtl] .ck.ck-button,[dir=rtl] a.ck.ck-button{justify-content:right}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}@media (prefers-reduced-motion:reduce){.ck.ck-button,a.ck.ck-button{transition:none}}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{opacity:.5}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BAMC,kBAAmB,CADnB,mBAAoB,CADpB,iBAAkB,CCHlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD0BD,CA9BA,iDASE,oBAqBF,CA9BA,iDAaE,qBAiBF,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEzBD,6BCAC,oDD+ID,CC5IE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eFgJD,CA/IA,wIEGE,qCF4IF,CA/IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBA0ID,CAhHC,uCA/BD,6BAgCE,eA+GF,CA9GC,CAEA,oFGpCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHyCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAWD,CAZA,6FAIE,mCAQF,CAZA,6FAQE,oCAIF,CAZA,yEAWC,UACD,CAIC,oIIxFD,oDJ4FC,CAOA,gLKnGD,kCLqGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCClIA,+CDsIA,CCnIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDmHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CClJC,mDDuJD,CCpJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDmID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";
@import "../../mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;

	@mixin ck-dir ltr {
		justify-content: left;
	}

	@mixin ck-dir rtl {
		justify-content: right;
	}

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		opacity: .5;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const E=A},4391:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}@media (prefers-reduced-motion:reduce){.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{transition:none}}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eDgFA,CA5CA,yIChCC,qCD4ED,CA5CA,2DAKE,gBAuCF,CA5CA,2DAUE,iBAkCF,CA5CA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CA2BD,CAxBC,2ECxDD,eDuEC,CAfA,6LCpDA,qCAAsC,CDsDpC,8CAaF,CAfA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAUD,CAHC,uCAZD,2EAaE,eAEF,CADC,CAGD,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEpFA,kCFsFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const E=A},25:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-list-button-padding);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/collapsible/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/collapsible/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,qCAAsC,CAFtC,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,gFACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-list-button-padding);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const E=A},7317:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{transition:box-shadow .2s ease}@media (forced-colors:none){.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}}@media (forced-colors:active){.ck.ck-color-grid__tile{height:unset;min-height:unset;min-width:unset;padding:0 var(--ck-spacing-small);width:unset}.ck.ck-color-grid__tile .ck-button__label{display:inline-block}}@media (prefers-reduced-motion:reduce){.ck.ck-color-grid__tile{transition:none}}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAKA,kBACC,YACD,CCCA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBACC,8BAkED,CC3EC,4BACC,wBDgBA,QAAS,CAJT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CAJV,oCCTA,CDgBA,8HAIC,QACD,CAEA,+DACC,gDACD,CAEA,8BACC,8FACD,CAEA,gGAEC,iGACD,CCjCD,CAZA,8BACC,wBDqDA,YAAa,CAEb,gBAAiB,CADjB,eAAgB,CAEhB,iCAAkC,CAJlC,WClDA,CDwDA,0CACC,oBACD,CCzDD,CD4DA,uCAhDD,wBAiDE,eAkBF,CAjBC,CAEA,oCACC,YAAa,CACb,gBACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAGC,0CACC,aACD,CAIF,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	transition: .2s ease box-shadow;

	@mixin ck-media-default-colors {
		width: var(--ck-color-grid-tile-size);
		height: var(--ck-color-grid-tile-size);
		min-width: var(--ck-color-grid-tile-size);
		min-height: var(--ck-color-grid-tile-size);
		padding: 0;
		border: 0;

		&.ck-on,
		&:focus:not( .ck-disabled ),
		&:hover:not( .ck-disabled ) {
			/* Disable the default .ck-button's border ring. */
			border: 0;
		}

		&.ck-color-selector__color-tile_bordered {
			box-shadow: 0 0 0 1px var(--ck-color-base-border);
		}

		&.ck-on {
			box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);
		}

		&:focus:not( .ck-disabled ),
		&:hover:not( .ck-disabled ) {
			box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
		}
	}

	/*
	 * In high contrast mode, the colors are replaced with text labels.
	 * See https://github.com/ckeditor/ckeditor5/issues/14907.
	 */
	@mixin ck-media-forced-colors {
		width: unset;
		height: unset;
		min-width: unset;
		min-height: unset;
		padding: 0 var(--ck-spacing-small);

		& .ck-button__label {
			display: inline-block;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		& .ck.ck-icon {
			display: block;
		}
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const E=A},1905:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;

	& .ck.ck-labeled-field-view {
		padding-top: unset;
	}

	& .ck.ck-input-text {
		width: unset;
	}

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const E=A},6309:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;

			@mixin ck-dir rtl {
				justify-content: flex-start;
			}
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			& .ck-button-save,
			& .ck-button-cancel {
				flex: 1
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}

		& .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			& .ck.ck-icon {
				@mixin ck-dir ltr {
					margin-right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					margin-left: var(--ck-spacing-standard);
				}
			}
		}

		& label.ck.ck-color-grid__label {
			font-weight: unset;
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-picker {
			padding: 8px;

			& .hex-color-picker {
				height: 100px;
				min-width: 180px;

				&::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}

				&::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}

				&::part(saturation-pointer),
				&::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
			}
		}

		& .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
	}
}
`],sourceRoot:""}]);const E=A},9819:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-dialog-overlay{bottom:0;left:0;overscroll-behavior:none;position:fixed;right:0;top:0;user-select:none}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent{animation:none;background:none;pointer-events:none}.ck.ck-dialog{overscroll-behavior:none;position:absolute;width:fit-content}.ck.ck-dialog .ck.ck-form__header{flex-shrink:0}.ck.ck-dialog .ck.ck-form__header .ck-form__header__label{cursor:grab}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent .ck.ck-dialog{pointer-events:all}:root{--ck-dialog-overlay-background-color:rgba(0,0,0,.5);--ck-dialog-drop-shadow:0px 0px 6px 2px rgba(0,0,0,.15);--ck-dialog-max-width:100vw;--ck-dialog-max-height:90vh;--ck-color-dialog-background:var(--ck-color-base-background);--ck-color-dialog-form-header-border:var(--ck-color-base-border)}.ck.ck-dialog-overlay{animation:ck-dialog-fade-in .3s;background:var(--ck-dialog-overlay-background-color);z-index:var(--ck-z-dialog)}.ck.ck-dialog{border-radius:0}.ck-rounded-corners .ck.ck-dialog,.ck.ck-dialog.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dialog{box-shadow:var(--ck-drop-shadow),0 0;--ck-drop-shadow:var(--ck-dialog-drop-shadow);background:var(--ck-color-dialog-background);border:1px solid var(--ck-color-base-border);max-height:var(--ck-dialog-max-height);max-width:var(--ck-dialog-max-width)}.ck.ck-dialog .ck.ck-form__header{border-bottom:1px solid var(--ck-color-dialog-form-header-border)}@keyframes ck-dialog-fade-in{0%{background:transparent}to{background:var(--ck-dialog-overlay-background-color)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,sBAKC,QAAS,CACT,MAAO,CAJP,wBAAyB,CAEzB,cAAe,CAGf,OAAQ,CACR,KAAM,CAPN,gBAcD,CALC,qDAEC,cAAe,CACf,eAAgB,CAFhB,mBAGD,CAGD,cACC,wBAAyB,CAEzB,iBAAkB,CADlB,iBAcD,CAXC,kCACC,aAKD,CAHC,0DACC,WACD,CAVF,mEAcE,kBAEF,CC7BA,MACC,mDAA2D,CAC3D,uDAA8D,CAC9D,2BAA4B,CAC5B,2BAA4B,CAC5B,4DAA6D,CAC7D,gEACD,CAEA,sBACC,+BAAgC,CAChC,oDAAqD,CACrD,0BACD,CAEA,cCbC,eD2BD,CAdA,mECTE,qCDuBF,CAdA,cEfC,oCAA8B,CFmB9B,6CAA8C,CAE9C,4CAA6C,CAG7C,4CAA6C,CAF7C,sCAAuC,CACvC,oCAMD,CAHC,kCACC,iEACD,CAGD,6BACC,GACC,sBACD,CAEA,GACC,oDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog-overlay {
	user-select: none;
	overscroll-behavior: none;

	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;

	&.ck-dialog-overlay__transparent {
		pointer-events: none;
		animation: none;
		background: none;
	}
}

.ck.ck-dialog {
	overscroll-behavior: none;
	width: fit-content;
	position: absolute;

	& .ck.ck-form__header  {
		flex-shrink: 0;

		& .ck-form__header__label {
			cursor: grab;
		}
	}

	@nest .ck.ck-dialog-overlay.ck-dialog-overlay__transparent & {
		pointer-events: all;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

:root {
	--ck-dialog-overlay-background-color: hsla( 0, 0%, 0%, .5 );
	--ck-dialog-drop-shadow: 0px 0px 6px 2px hsl(0deg 0% 0% / 15%);
	--ck-dialog-max-width: 100vw;
	--ck-dialog-max-height: 90vh;
	--ck-color-dialog-background: var(--ck-color-base-background);
	--ck-color-dialog-form-header-border: var(--ck-color-base-border);
}

.ck.ck-dialog-overlay {
	animation: ck-dialog-fade-in .3s;
	background: var(--ck-dialog-overlay-background-color);
	z-index: var(--ck-z-dialog);
}

.ck.ck-dialog {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	--ck-drop-shadow: var(--ck-dialog-drop-shadow);

	background: var(--ck-color-dialog-background);
	max-height: var(--ck-dialog-max-height);
	max-width: var(--ck-dialog-max-width);
	border: 1px solid var(--ck-color-base-border);

	& .ck.ck-form__header {
		border-bottom: 1px solid var(--ck-color-dialog-form-header-border);
	}
}

@keyframes ck-dialog-fade-in {
	0% {
		background: hsla( 0, 0%, 0%, 0 );
	}

	100% {
		background: var(--ck-dialog-overlay-background-color);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=A},9822:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-dialog .ck.ck-dialog__actions{display:flex;justify-content:flex-end;padding:var(--ck-spacing-large)}.ck.ck-dialog .ck.ck-dialog__actions>*+*{margin-left:var(--ck-spacing-large)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialogactions.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialogactions.css"],names:[],mappings:"AAMC,qCACC,YAAa,CACb,wBAAyB,CCDzB,+BDED,CCAC,yCACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		display: flex;
		justify-content: flex-end;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		padding: var(--ck-spacing-large);

		& > * + * {
			margin-left: var(--ck-spacing-large);
		}
	}
}
`],sourceRoot:""}]);const E=A},8149:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-panel) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-panel);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-panel) + 1 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;

			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=A},3629:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-dropdown>.ck-dropdown__panel>.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown > .ck-dropdown__panel > .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=A},1792:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=A},1666:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const E=A},8527:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,":root{--ck-accessibility-help-dialog-max-width:600px;--ck-accessibility-help-dialog-max-height:400px;--ck-accessibility-help-dialog-border-color:#ccced1;--ck-accessibility-help-dialog-code-background-color:#ededed;--ck-accessibility-help-dialog-kbd-shadow-color:#9c9c9c}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{border:1px solid transparent;max-height:var(--ck-accessibility-help-dialog-max-height);max-width:var(--ck-accessibility-help-dialog-max-width);overflow:auto;padding:var(--ck-spacing-large);user-select:text}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{*{white-space:normal}}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content .ck-label{display:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3{font-size:1.2em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4{font-size:1em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content p,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content table{margin:1em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl{border-bottom:none;border-top:1px solid var(--ck-accessibility-help-dialog-border-color);display:grid;grid-template-columns:2fr 1fr}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{border-bottom:1px solid var(--ck-accessibility-help-dialog-border-color);padding:.4em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{grid-column-start:1}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd{grid-column-start:2;text-align:right}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{background:var(--ck-accessibility-help-dialog-code-background-color);border-radius:2px;display:inline-block;font-size:.9em;line-height:1;padding:.4em;text-align:center;vertical-align:middle}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code{font-family:monospace}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{box-shadow:0 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);margin:0 1px;min-width:1.8em}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd+kbd{margin-left:2px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/accessibilityhelp.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAQA,MACC,8CAA+C,CAC/C,+CAAgD,CAChD,mDAA8D,CAC9D,4DAAyE,CACzE,uDACD,CAEA,wEAOC,4BAA6B,CAJ7B,yDAA0D,CAD1D,uDAAwD,CAExD,aAAc,CAHd,+BAAgC,CAIhC,gBAgFD,CA5EC,8ECdA,2BAA2B,CCF3B,2CAA8B,CDC9B,YDkBA,CAZD,wEAcC,EACC,kBACD,CAqED,CAlEC,kFACC,YACD,CAEA,2EAEC,eAAgB,CADhB,eAED,CAEA,2EAEC,aAAc,CADd,eAED,CAEA,8SAIC,YACD,CAEA,2EAIC,kBAAmB,CADnB,qEAAsE,CAFtE,YAAa,CACb,6BAiBD,CAbC,4JACC,wEAAyE,CACzE,cACD,CAEA,8EACC,mBACD,CAEA,8EACC,mBAAoB,CACpB,gBACD,CAGD,yJAEC,oEAAqE,CAIrE,iBAAkB,CALlB,oBAAqB,CAOrB,cAAe,CAHf,aAAc,CAFd,YAAa,CAIb,iBAAkB,CAHlB,qBAKD,CAEA,6EACC,qBACD,CAEA,4EAEC,yEAA4E,CAC5E,YAAa,CAFb,eAOD,CAHC,gFACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-accessibility-help-dialog-max-width: 600px;
	--ck-accessibility-help-dialog-max-height: 400px;
	--ck-accessibility-help-dialog-border-color: hsl(220, 6%, 81%);
	--ck-accessibility-help-dialog-code-background-color: hsl(0deg 0% 92.94%);
	--ck-accessibility-help-dialog-kbd-shadow-color: hsl(0deg 0% 61%);
}

.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content {
	padding: var(--ck-spacing-large);
	max-width: var(--ck-accessibility-help-dialog-max-width);
	max-height: var(--ck-accessibility-help-dialog-max-height);
	overflow: auto;
	user-select: text;

	border: 1px solid transparent;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	* {
		white-space: normal;
	}

	/* Hide the main label of the content container. */
	& .ck-label {
		display: none;
	}

	& h3 {
		font-weight: bold;
		font-size: 1.2em;
	}

	& h4 {
		font-weight: bold;
		font-size: 1em;
	}

	& p,
	& h3,
	& h4,
	& table {
		margin: 1em 0;
	}

	& dl {
		display: grid;
		grid-template-columns: 2fr 1fr;
		border-top: 1px solid var(--ck-accessibility-help-dialog-border-color);
		border-bottom: none;

		& dt, & dd {
			border-bottom: 1px solid var(--ck-accessibility-help-dialog-border-color);
			padding: .4em 0;
		}

		& dt {
			grid-column-start: 1;
		}

		& dd {
			grid-column-start: 2;
			text-align: right;
		}
	}

	& kbd, & code {
		display: inline-block;
		background: var(--ck-accessibility-help-dialog-code-background-color);
		padding: .4em;
		vertical-align: middle;
		line-height: 1;
		border-radius: 2px;
		text-align: center;
		font-size: .9em;
	}

	& code {
		font-family: monospace;
	}

	& kbd {
		min-width: 1.8em;
		box-shadow: 0px 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);
		margin: 0 1px;

		& + kbd {
			margin-left: 2px;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=A},1185:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-panel-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=A},7913:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}:root{--ck-form-header-height:44px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}[dir=ltr] .ck.ck-form__header>.ck-icon{margin-right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-form__header>.ck-icon{margin-left:var(--ck-spacing-medium)}.ck.ck-form__header .ck-form__header__label{--ck-font-size-base:15px;font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BAKD,CAHC,8CACC,WACD,CCPD,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAmBD,CAdC,uCAEE,qCAMF,CARA,uCAME,oCAEF,CAEA,4CACC,wBAAyB,CACzB,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;

	& h2.ck-form__header__label {
		flex-grow: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-form-header-height: 44px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& > .ck-icon {
		@mixin ck-dir ltr {
			margin-right: var(--ck-spacing-medium);
		}

		@mixin ck-dir rtl {
			margin-left: var(--ck-spacing-medium);
		}
	}

	& .ck-form__header__label {
		--ck-font-size-base: 15px;
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const E=A},9529:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);font-size:inherit;font-weight:inherit;line-height:inherit;vertical-align:initial}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/highlightedtext/highlightedtext.css"],names:[],mappings:"AAKA,6BACC,+CAAgD,CAIhD,iBAAkB,CAFlB,mBAAoB,CACpB,mBAAoB,CAFpB,sBAID",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-highlighted-text mark {
	background: var(--ck-color-highlight-background);
	vertical-align: initial;
	font-weight: inherit;
	line-height: inherit;
	font-size: inherit;
}
`],sourceRoot:""}]);const E=A},7621:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const E=A},253:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}@media (prefers-reduced-motion:reduce){.ck.ck-input{transition:none}}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}@media (prefers-reduced-motion:reduce){.ck.ck-input.ck-error{animation:none}}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eDmDD,CA9CA,iECDE,qCD+CF,CA9CA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DAkCD,CAhCC,uCAdD,aAeE,eA+BF,CA9BC,CAEA,mBEvBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YF2BA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BGnCD,oDHsCC,CAGD,sBAEC,sCAAuC,CADvC,+CAUD,CAPC,uCAJD,sBAKE,cAMF,CALC,CAEA,4BGjDD,iDHmDC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		@media (prefers-reduced-motion: reduce) {
			animation: none;
		}

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=A},7801:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const E=A},4962:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0;transform:translate(calc(var(--ck-spacing-medium)*-1),-6px) scale(.75);transform-origin:100% 0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}@media (prefers-reduced-motion:reduce){.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transition:none}}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eDmHD,CA9GA,2FCDE,qCD+GF,CA3GC,mEACC,UAwCD,CAtCC,gFACC,KAoCD,CArCA,0FAIE,MAAS,CAGT,6DAA+D,CAF/D,oBAgCF,CArCA,0FAWE,OAAU,CAEV,sEAA0E,CAD1E,uBAyBF,CArCA,gFAkBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAH9C,mBAAoB,CAQpB,sBAAuB,CAKvB,+JAQD,CAHC,uCAlCD,gFAmCE,eAEF,CADC,CASD,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,2XAGE,+HAYF,CAfA,2XAOE,wIAQF,CAfA,uWAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
				transform-origin: 0 0;
				/* By default, display the label scaled down above the field. */
				transform: translate(var(--ck-spacing-medium), -6px) scale(.75);
			}

			@mixin ck-dir rtl {
				right: 0px;
				transform-origin: 100% 0;
				transform: translate(calc(-1 * var(--ck-spacing-medium)), -6px) scale(.75);
			}

			pointer-events: none;

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=A},5199:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}:root{--ck-list-button-padding:calc(var(--ck-line-height-base)*0.11*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*0.4*var(--ck-font-size-base))}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item>.ck-button{border-radius:0;min-height:unset;width:100%}[dir=ltr] .ck.ck-list__item>.ck-button{text-align:left}[dir=rtl] .ck.ck-list__item>.ck-button{text-align:right}.ck.ck-list__item>.ck-button{padding:var(--ck-list-button-padding)}.ck.ck-list__item>.ck-button:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item>.ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item>.ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item>.ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item>.ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item>.ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium);:not(.ck-hidden)~&{border-top:1px solid var(--ck-color-base-border)}}.ck-list .ck-list__group>.ck-label{font-size:11px;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium)}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEdD,MACC,qJAGD,CAEA,YCLC,eDUD,CALA,+DCDE,qCDMF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAGC,eAAgB,CAFhB,gBAAiB,CACjB,UAwCD,CA1CA,uCAME,eAoCF,CA1CA,uCAUE,gBAgCF,CA1CA,6BAgBC,qCA0BD,CAxBC,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,yBACC,oCAAqC,CAGrC,mBACC,gDACD,CAOD,CALC,mCACC,cAAe,CACf,eAAiB,CACjB,oFACD,CAGD,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-list-button-padding:
		calc(.11 * var(--ck-line-height-base) * var(--ck-font-size-base))
		calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));
}

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& > .ck-button {
		min-height: unset;
		width: 100%;
		border-radius: 0;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding: var(--ck-list-button-padding);

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& > .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck-list .ck-list__group {
	padding-top: var(--ck-spacing-medium);

	/* The group should have a border when it's not the first item. */
	*:not(.ck-hidden) ~ & {
		border-top: 1px solid var(--ck-color-base-border);
	}

	& > .ck-label {
		font-size: 11px;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium);
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=A},497:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-menu-bar{background:var(--ck-color-base-background);border:1px solid var(--ck-color-toolbar-border);display:flex;flex-wrap:wrap;gap:var(--ck-spacing-small);justify-content:flex-start;padding:var(--ck-spacing-small);width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubar.css"],names:[],mappings:"AAKA,gBAIC,0CAA2C,CAG3C,+CAAgD,CANhD,YAAa,CACb,cAAe,CAIf,2BAA4B,CAH5B,0BAA2B,CAE3B,+BAAgC,CAGhC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	background: var(--ck-color-base-background);
	padding: var(--ck-spacing-small);
	gap: var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);
	width: 100%;
}
`],sourceRoot:""}]);const E=A},4:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-menu-bar__menu{display:block;font-size:inherit;position:relative}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level{max-width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenu.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenu.css"],names:[],mappings:"AAKA,sBACC,aAAc,CCCd,iBAAkB,CDAlB,iBACD,CCCC,kDACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	display: block;
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	&.ck-menu-bar__menu_top-level {
		max-width: 100%;
	}
}
`],sourceRoot:""}]);const E=A},3344:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button{padding:var(--ck-list-button-padding);width:100%}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-button__label{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button.ck-disabled>.ck-button__label{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button{min-height:unset;padding:var(--ck-spacing-small) var(--ck-spacing-medium)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-button__label{line-height:unset;width:unset}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-icon{display:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button{border-radius:0}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(-90deg)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(90deg)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button.ck-disabled>.ck-menu-bar__menu__button__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAMC,mFACC,mBAAoB,CACpB,2BACD,CCIA,iDACC,qCAAsC,CACtC,UAuBD,CArBC,mEACC,WAAY,CACZ,eAAgB,CAChB,sBACD,CAEA,+ECdD,kCDgBC,CAGC,qFACC,oCACD,CAIA,qFACC,qCACD,CAOF,6EAEC,gBAAiB,CADjB,wDAgBD,CAbC,+FAEC,iBAAkB,CADlB,WAED,CAEA,mFACC,2BAA4B,CAC5B,4BACD,CAEA,sFACC,YACD,CAMD,mFACC,eAiDD,CA/CC,yFACC,wBAAyB,CACzB,eAKD,CAHC,qGACC,0DACD,CAID,iIACC,+DACD,CAEA,qHACC,mCASD,CAVA,+HAIE,wBAMF,CAVA,+HAQE,uBAEF,CAEA,iICrFD,kCDuFC,CAGC,+HAIC,sCAAuC,CAHvC,gCAID,CAIA,+HACC,+BAAgC,CAGhC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu  {
	& > .ck-menu-bar__menu__button > .ck-menu-bar__menu__button__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-menu-bar__menu {
	/*
	 * All menu buttons.
	 */
	& > .ck-menu-bar__menu__button {
		padding: var(--ck-list-button-padding);
		width: 100%;

		& > .ck-button__label {
			flex-grow: 1;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		&.ck-disabled > .ck-button__label {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				padding-right: var(--ck-spacing-small);
			}
		}
	}

	/*
	 * Top-level menu buttons only.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__button {
		padding: var(--ck-spacing-small) var(--ck-spacing-medium);
		min-height: unset;

		& .ck-button__label {
			width: unset;
			line-height: unset;
		}

		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		& .ck-icon {
			display: none;
		}
	}

	/*
	 * Sub-menu buttons.
	 */
	&:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button {
		border-radius: 0;

		&:focus {
			border-color: transparent;
			box-shadow: none;

			&:not(.ck-on) {
				background: var(--ck-color-button-default-hover-background);
			}
		}

		/* Spacing in buttons that miss the icon. */
		&:not(:has(.ck-button__icon)) > .ck-button__label {
			margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
		}

		& > .ck-menu-bar__menu__button__arrow {
			width: var(--ck-dropdown-arrow-size);

			@mixin ck-dir ltr {
				transform: rotate(-90deg);
			}

			@mixin ck-dir rtl {
				transform: rotate(90deg);
			}
		}

		&.ck-disabled > .ck-menu-bar__menu__button__arrow {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			& > .ck-menu-bar__menu__button__arrow {
				right: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-left: var(--ck-spacing-standard);
			}
		}

		@mixin ck-dir rtl {
			& > .ck-menu-bar__menu__button__arrow {
				left: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-right: var(--ck-spacing-small);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const E=A},9481:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,":root{--ck-menu-bar-menu-item-min-width:18em}.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item{min-width:var(--ck-menu-bar-menu-item-min-width)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitem.css"],names:[],mappings:"AAKA,MACC,sCACD,CAEA,kDACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-item-min-width: 18em;
}

.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item {
	min-width: var(--ck-menu-bar-menu-item-min-width);
}
`],sourceRoot:""}]);const E=A},977:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button{border-radius:0}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container,.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container .ck-spinner{--ck-toolbar-spinner-size:20px}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__panel>ul>.ck-menu-bar__menu__item>.ck-menu-bar__menu__item__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitembutton.css"],names:[],mappings:"AASC,iEACC,eA0BD,CAxBC,0LAGC,8BACD,CAEA,uFAEC,4CAA+C,CAC/C,oCACD,CAMA,uEACC,wBAAyB,CACzB,eAKD,CAHC,mFACC,0DACD,CASD,uLACC,+DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/*
	 * List item buttons.
	 */
	& .ck-button.ck-menu-bar__menu__item__button {
		border-radius: 0;

		& > .ck-spinner-container,
		& > .ck-spinner-container .ck-spinner {
			/* These styles correspond to .ck-icon so that the spinner seamlessly replaces the icon. */
			--ck-toolbar-spinner-size: 20px;
		}

		& > .ck-spinner-container {
			/* These margins are the same as for .ck-icon. */
			margin-left: calc(-1 * var(--ck-spacing-small));
			margin-right: var(--ck-spacing-small);
		}

		/*
		 * Hovered items automatically get focused. Default focus styles look odd
		 * while moving across a huge list of items so let's get rid of them
		 */
		&:focus {
			border-color: transparent;
			box-shadow: none;

			&:not(.ck-on) {
				background: var(--ck-color-button-default-hover-background);
			}
		}
	}

	/*
	 * First-level sub-menu item buttons.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__panel > ul > .ck-menu-bar__menu__item > .ck-menu-bar__menu__item__button {
		/* Spacing in buttons that miss the icon. */
		&:not(:has(.ck-button__icon)) > .ck-button__label {
			margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
		}
	}
}


`],sourceRoot:""}]);const E=A},9108:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,":root{--ck-menu-bar-menu-max-width:75vw;--ck-menu-bar-nested-menu-horizontal-offset:5px}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{max-width:var(--ck-menu-bar-menu-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw{bottom:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{bottom:auto;top:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{left:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{right:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{left:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en{bottom:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{right:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{bottom:0}:root{--ck-menu-bar-menu-panel-max-width:75vw}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{border-radius:0}.ck-rounded-corners .ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;height:fit-content;max-width:var(--ck-menu-bar-menu-panel-max-width)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{border-top-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{border-top-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne{border-bottom-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{border-bottom-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,iCAAkC,CAClC,+CACD,CAEA,mDAEC,2CAA4C,CAC5C,iBAAkB,CAFlB,yBAkDD,CA9CC,gLAEC,WACD,CAEA,gLAGC,WAAY,CADZ,QAED,CAEA,gLAEC,MACD,CAEA,gLAEC,OACD,CAEA,gLAEC,kEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CAEA,gLAEC,mEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CCpDD,MACC,uCACD,CAEA,mDCDC,eDmCD,CAlCA,6ICGE,qCD+BF,CAlCA,mDAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CETT,oCAA8B,CFU9B,kBAAmB,CACnB,iDA0BD,CAvBC,gLAEC,wBACD,CAEA,gLAEC,yBACD,CAEA,gLAEC,2BACD,CAEA,gLAEC,4BACD,CAEA,yDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-max-width: 75vw;
	--ck-menu-bar-nested-menu-horizontal-offset: 5px;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	z-index: var(--ck-z-panel);
	max-width: var(--ck-menu-bar-menu-max-width);
	position: absolute;

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_nw {
		bottom: 100%;
	}

	&.ck-menu-bar__menu__panel_position_se,
	&.ck-menu-bar__menu__panel_position_sw {
		top: 100%;
		bottom: auto;
	}

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_se {
		left: 0px;
	}

	&.ck-menu-bar__menu__panel_position_nw,
	&.ck-menu-bar__menu__panel_position_sw {
		right: 0px;
	}

	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_en {
		left: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_es {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_en {
		bottom: 0px;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_wn {
		right: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_ws {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_wn {
		bottom: 0px;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-menu-bar-menu-panel-max-width: 75vw;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;
	height: fit-content;
	max-width: var(--ck-menu-bar-menu-panel-max-width);

	/* Corner border radius consistent with the button. */
	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_se {
		border-top-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_sw {
		border-top-right-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_en,
	&.ck-menu-bar__menu__panel_position_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_wn,
	&.ck-menu-bar__menu__panel_position_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=A},3710:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-panel)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-panel);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=A},991:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const E=A},5380:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-panel) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-panel) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=A},8298:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-panel)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-panel); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=A},2722:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-number,.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAoED,CAlEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA+CF,CA7CE,8CACC,wDAYD,CAVC,4HAEC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDrEH",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text,
			& .ck-input-number {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const E=A},8107:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input,[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{background:none;min-height:auto;min-width:auto;opacity:.5;padding:0}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty),[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:700}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/search/search.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/search/search.css"],names:[],mappings:"AASE,oFACC,iBAAkB,CAClB,OAAQ,CACR,0BASD,CAZA,8FAME,6BAMF,CAZA,8FAUE,8BAEF,CAEA,uDACC,iBAAkB,CAClB,OAAQ,CACR,0BACD,CAKC,oEACC,aACD,CAGA,qEACC,YACD,CChCH,MACC,8FACD,CAIE,+CACC,UACD,CAEA,gEACC,0FAoBD,CAlBC,+GACC,UAAW,CACX,mBACD,CAEA,0EACC,UAWD,CAJE,kMACC,2DACD,CAKH,iEACC,sGAwCD,CAtCC,6FACC,6HACD,CAEA,mFAIC,eAAgB,CAFhB,eAAgB,CADhB,cAAe,CAIf,UAAW,CACX,SAaD,CAnBA,6FASE,8BAUF,CAnBA,6FAaE,6BAMF,CAHC,yFACC,SACD,CAGD,2EACC,UAWD,CAZA,oMAUE,4DAEF,CAIF,kCACC,cAkBD,CAhBC,mDAEC,wDAAyD,CADzD,UAcD,CAXC,qDACC,kBACD,CAEA,oEACC,eACD,CAEA,mEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-search {
	& > .ck-labeled-field-view {
		& > .ck-labeled-field-view__input-wrapper > .ck-icon {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			@mixin ck-dir ltr {
				left: var(--ck-spacing-medium);
			}

			@mixin ck-dir rtl {
				right: var(--ck-spacing-medium);
			}
		}

		& .ck-search__reset {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	& > .ck-search__results {
		& > .ck-search__info {
			& > span:first-child {
				display: block;
			}

			/* Hide the filtered view when nothing was found */
			&:not(.ck-hidden) ~ * {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-search-field-view-horizontal-spacing: calc(var(--ck-icon-size) + var(--ck-spacing-medium));
}

.ck.ck-search {
	& > .ck-labeled-field-view {
		& .ck-input {
			width: 100%;
		}

		&.ck-search__query_with-icon {
			--ck-labeled-field-label-default-position-x: var(--ck-search-field-view-horizontal-spacing);

			& > .ck-labeled-field-view__input-wrapper > .ck-icon {
				opacity: .5;
				pointer-events: none;
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					padding-left: var(--ck-search-field-view-horizontal-spacing);
				}

				@mixin ck-dir rtl {
					&:not(.ck-input-text_empty) {
						padding-left: var(--ck-search-field-view-horizontal-spacing);
					}
				}
			}
		}

		&.ck-search__query_with-reset {
			--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-search-field-view-horizontal-spacing);

			&.ck-labeled-field-view_empty {
				--ck-labeled-field-empty-unfocused-max-width: 100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium);
			}

			& .ck-search__reset {
				min-width: auto;
				min-height: auto;

				background: none;
				opacity: .5;
				padding: 0;

				@mixin ck-dir ltr {
					right: var(--ck-spacing-medium);
				}

				@mixin ck-dir rtl {
					left: var(--ck-spacing-medium);
				}

				&:hover {
					opacity: 1;
				}
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					&:not(.ck-input-text_empty) {
						padding-right: var(--ck-search-field-view-horizontal-spacing);
					}
				}

				@mixin ck-dir rtl {
					padding-right: var(--ck-search-field-view-horizontal-spacing);
				}
			}
		}
	}

	& > .ck-search__results {
		min-width: 100%;

		& > .ck-search__info {
			width: 100%;
			padding: var(--ck-spacing-medium) var(--ck-spacing-large);

			& * {
				white-space: normal;
			}

			& > span:first-child {
				font-weight: bold;
			}

			& > span:last-child {
				margin-top: var(--ck-spacing-medium);
			}
		}
	}
}

`],sourceRoot:""}]);const E=A},109:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{left:0;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:1}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{animation:rotate 1.5s linear infinite;height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}@media (prefers-reduced-motion:reduce){.ck.ck-spinner-container{animation-duration:3s}}.ck.ck-spinner{border:2px solid var(--ck-color-text);border-radius:50%;border-top:2px solid transparent;height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}@keyframes rotate{to{transform:rotate(1turn)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/spinner/spinner.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/spinner/spinner.css"],names:[],mappings:"AASA,yBACC,aAAc,CACd,iBACD,CAEA,eAGC,MAAO,CAEP,aAAc,CAJd,iBAAkB,CAGlB,OAAQ,CAFR,OAAQ,CAIR,0BAA2B,CAC3B,SACD,CCjBA,MACC,8BACD,CAEA,yBAGC,qCAAsC,CADtC,qCAAsC,CADtC,oCAOD,CAHC,uCALD,yBAME,qBAEF,CADC,CAGD,eAKC,qCAA6B,CAF7B,iBAAkB,CAElB,gCAA6B,CAH7B,qCAAsC,CADtC,oCAKD,CAEA,kBACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	display: block;
	position: relative;
}

.ck.ck-spinner {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	margin: 0 auto;
	transform: translateY(-50%);
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	animation: 1.5s infinite rotate linear;

	@media (prefers-reduced-motion: reduce) {
		animation-duration: 3s;
	}
}

.ck.ck-spinner {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	border-radius: 50%;
	border: 2px solid var(--ck-color-text);
	border-top-color: transparent;
}

@keyframes rotate {
	to {
		transform: rotate(360deg)
	}
}
`],sourceRoot:""}]);const E=A},1671:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck-textarea{overflow-x:hidden}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/textarea/textarea.css"],names:[],mappings:"AASA,aACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * This fixes a problem in Firefox when the initial height of the complement does not match the number of rows.
 * This bug is especially visible when rows=1.
 */
.ck-textarea {
	overflow-x: hidden
}
`],sourceRoot:""}]);const E=A},2710:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const E=A},9677:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=A},9205:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck.ck-balloon-panel.ck-tooltip{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;z-index:calc(var(--ck-z-dialog) + 100);--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{display:inline-block;max-width:200px;padding:var(--ck-tooltip-text-padding) 0;white-space:break-spaces}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAOA,gCCEC,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBAAgB,CDFhB,sCAAyC,CEFzC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,6BAA8B,CAC9B,8DAA+D,CAE/D,kCFJD,CEMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAEA,wEAEC,oBAAqB,CAErB,eAAgB,CADhB,wCAAyC,CAFzC,wBAID,CArBD,gCAwBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-balloon-panel.ck-tooltip {
	@mixin ck-unselectable;

	z-index: calc( var(--ck-z-dialog) + 100 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-tooltip-text-padding: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	&.ck-tooltip_multi-line .ck-tooltip__text {
		white-space: break-spaces;
		display: inline-block;
		padding: var(--ck-tooltip-text-padding) 0;
		max-width: 200px;
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const E=A},7676:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck-hidden{display:none!important}:root{--ck-z-default:1;--ck-z-panel:calc(var(--ck-z-default) + 999);--ck-z-dialog:9999}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-panel) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-dialog-background:var(--ck-custom-background);--ck-color-dialog-form-header-border:var(--ck-custom-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-color-light-red:#fcc;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{background:transparent;border:0;box-sizing:border-box;height:auto;margin:0;padding:0;position:static;text-decoration:none;transition:none;vertical-align:middle;width:auto;word-wrap:break-word}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,MACC,gBAAiB,CACjB,4CAA+C,CAC/C,kBACD,CCDA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,wDAAiE,CACjE,4DAAmE,CAInE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAyD,CAIzD,yBAAgD,CChHhD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJgHD,CI1GA,2EAYC,sBAAuB,CADvB,QAAS,CART,qBAAsB,CAEtB,WAAY,CAIZ,QAAS,CACT,SAAU,CAJV,eAAgB,CAOhB,oBAAqB,CAErB,eAAgB,CADhB,qBAAsB,CAVtB,UAAW,CAcX,oBACD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCxFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-panel: calc( var(--ck-z-default) + 999 );
	--ck-z-dialog: 9999;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-panel) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Dialog -------------------------------------------------------------------------------- */

	--ck-color-dialog-background: 								var(--ck-custom-background);
	--ck-color-dialog-form-header-border: 						var(--ck-custom-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%);

	/* -- Generic colors ------------------------------------------------------------------------- */

	--ck-color-light-red:										hsl(0, 100%, 90%);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;

	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const E=A},695:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget{transition:none}}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}@media (forced-colors:none){.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background)}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{transition:none}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{transition:none}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CChFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAcD,CAZC,uCAND,eAOE,eAWF,CAVC,CAEA,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAYD,CARC,yGCnCA,2BAA2B,CCF3B,qCAA8B,CDC9B,YD2CA,CGvCA,4BACC,yGHoCC,iEGlCD,CACD,CHuCA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAwCD,CA3BC,uCAzBD,4EA0BE,eA0BF,CAzBC,CAEA,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAeD,CAVC,kHACC,SAAU,CAGV,+DAKD,CAHC,uCAND,kHAOE,eAEF,CADC,CAKF,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
		@mixin ck-media-default-colors {
			background-color: var(--ck-color-widget-editable-focus-background);
		}
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);

				@media (prefers-reduced-motion: reduce) {
					transition: none;
				}
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const E=A},4095:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const E=A},8508:(b,_,f)=>{f.d(_,{A:()=>E});var v=f(9372),x=f.n(v),y=f(935),A=f.n(y)()(x());A.push([b.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button{transition:none}}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button svg{transition:none}}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button:hover,.ck .ck-widget .ck-widget__type-around__button:hover svg line,.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:none}}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAwED,CAhEC,uCATD,+CAUE,eA+DF,CA9DC,CAEA,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAwBD,CAlBC,uCAPD,mDAQE,eAiBF,CAhBC,CAEA,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DA4BD,CAtBE,kEACC,oDACD,CAEA,8DACC,wDACD,CAGD,uCAQE,qLACC,cACD,CAEF,CASD,uKA7FD,SAAU,CACV,mBA8FC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAxKD,SAAU,CACV,mBAyKC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAxNF,SAAU,CACV,mBAyNE,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}

			@media (prefers-reduced-motion: reduce) {
				animation: none;

				& svg {
					& polyline {
						animation: none;
					}

					& line {
						animation: none;
					}
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const E=A},935:b=>{b.exports=function(_){var f=[];return f.toString=function(){return this.map(function(v){var x=_(v);return v[2]?"@media ".concat(v[2]," {").concat(x,"}"):x}).join("")},f.i=function(v,x,y){typeof v=="string"&&(v=[[null,v,""]]);var A={};if(y)for(var E=0;E<this.length;E++){var M=this[E][0];M!=null&&(A[M]=!0)}for(var P=0;P<v.length;P++){var z=[].concat(v[P]);y&&A[z[0]]||(x&&(z[2]?z[2]="".concat(x," and ").concat(z[2]):z[2]=x),f.push(z))}},f}},9372:b=>{function _(v,x){return function(y){if(Array.isArray(y))return y}(v)||function(y,A){var E=y&&(typeof Symbol<"u"&&y[Symbol.iterator]||y["@@iterator"]);if(E!=null){var M,P,z=[],F=!0,j=!1;try{for(E=E.call(y);!(F=(M=E.next()).done)&&(z.push(M.value),!A||z.length!==A);F=!0);}catch(O){j=!0,P=O}finally{try{F||E.return==null||E.return()}finally{if(j)throw P}}return z}}(v,x)||function(y,A){if(y){if(typeof y=="string")return f(y,A);var E=Object.prototype.toString.call(y).slice(8,-1);if(E==="Object"&&y.constructor&&(E=y.constructor.name),E==="Map"||E==="Set")return Array.from(y);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return f(y,A)}}(v,x)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function f(v,x){(x==null||x>v.length)&&(x=v.length);for(var y=0,A=new Array(x);y<x;y++)A[y]=v[y];return A}b.exports=function(v){var x=_(v,4),y=x[1],A=x[3];if(!A)return y;if(typeof btoa=="function"){var E=btoa(unescape(encodeURIComponent(JSON.stringify(A)))),M="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(E),P="/*# ".concat(M," */"),z=A.sources.map(function(F){return"/*# sourceURL=".concat(A.sourceRoot||"").concat(F," */")});return[y].concat(z).concat([P]).join(`
`)}return[y].join(`
`)}},2591:(b,_,f)=>{var v,x=function(){return v===void 0&&(v=!!(window&&document&&document.all&&!window.atob)),v},y=function(){var I={};return function(V){if(I[V]===void 0){var W=document.querySelector(V);if(window.HTMLIFrameElement&&W instanceof window.HTMLIFrameElement)try{W=W.contentDocument.head}catch{W=null}I[V]=W}return I[V]}}(),A=[];function E(I){for(var V=-1,W=0;W<A.length;W++)if(A[W].identifier===I){V=W;break}return V}function M(I,V){for(var W={},K=[],le=0;le<I.length;le++){var J=I[le],he=V.base?J[0]+V.base:J[0],Ae=W[he]||0,be="".concat(he," ").concat(Ae);W[he]=Ae+1;var Y=E(be),ne={css:J[1],media:J[2],sourceMap:J[3]};Y!==-1?(A[Y].references++,A[Y].updater(ne)):A.push({identifier:be,updater:G(ne,V),references:1}),K.push(be)}return K}function P(I){var V=document.createElement("style"),W=I.attributes||{};if(W.nonce===void 0){var K=f.nc;K&&(W.nonce=K)}if(Object.keys(W).forEach(function(J){V.setAttribute(J,W[J])}),typeof I.insert=="function")I.insert(V);else{var le=y(I.insert||"head");if(!le)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");le.appendChild(V)}return V}var z,F=(z=[],function(I,V){return z[I]=V,z.filter(Boolean).join(`
`)});function j(I,V,W,K){var le=W?"":K.media?"@media ".concat(K.media," {").concat(K.css,"}"):K.css;if(I.styleSheet)I.styleSheet.cssText=F(V,le);else{var J=document.createTextNode(le),he=I.childNodes;he[V]&&I.removeChild(he[V]),he.length?I.insertBefore(J,he[V]):I.appendChild(J)}}function O(I,V,W){var K=W.css,le=W.media,J=W.sourceMap;if(le?I.setAttribute("media",le):I.removeAttribute("media"),J&&typeof btoa<"u"&&(K+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(J))))," */")),I.styleSheet)I.styleSheet.cssText=K;else{for(;I.firstChild;)I.removeChild(I.firstChild);I.appendChild(document.createTextNode(K))}}var H=null,q=0;function G(I,V){var W,K,le;if(V.singleton){var J=q++;W=H||(H=P(V)),K=j.bind(null,W,J,!1),le=j.bind(null,W,J,!0)}else W=P(V),K=O.bind(null,W,V),le=function(){(function(he){if(he.parentNode===null)return!1;he.parentNode.removeChild(he)})(W)};return K(I),function(he){if(he){if(he.css===I.css&&he.media===I.media&&he.sourceMap===I.sourceMap)return;K(I=he)}else le()}}b.exports=function(I,V){(V=V||{}).singleton||typeof V.singleton=="boolean"||(V.singleton=x());var W=M(I=I||[],V);return function(K){if(K=K||[],Object.prototype.toString.call(K)==="[object Array]"){for(var le=0;le<W.length;le++){var J=E(W[le]);A[J].references--}for(var he=M(K,V),Ae=0;Ae<W.length;Ae++){var be=E(W[Ae]);A[be].references===0&&(A[be].updater(),A.splice(be,1))}W=he}}}}},g={};function m(b){var _=g[b];if(_!==void 0)return _.exports;var f=g[b]={id:b,exports:{}};return u[b](f,f.exports,m),f.exports}m.n=b=>{var _=b&&b.__esModule?()=>b.default:()=>b;return m.d(_,{a:_}),_},m.d=(b,_)=>{for(var f in _)m.o(_,f)&&!m.o(b,f)&&Object.defineProperty(b,f,{enumerable:!0,get:_[f]})},m.o=(b,_)=>Object.prototype.hasOwnProperty.call(b,_),m.nc=void 0;var w={};return(()=>{let b;m.d(w,{default:()=>fh});try{b={window,document}}catch{b={window:{},document:{}}}const _=b,f=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var v;const x={isMac:y(f),isWindows:(v=f,v.indexOf("windows")>-1),isGecko:function(o){return!!o.match(/gecko\/\d+/)}(f),isSafari:function(o){return o.indexOf(" applewebkit/")>-1&&o.indexOf("chrome")===-1}(f),isiOS:function(o){return!!o.match(/iphone|ipad/i)||y(o)&&navigator.maxTouchPoints>0}(f),isAndroid:function(o){return o.indexOf("android")>-1}(f),isBlink:function(o){return o.indexOf("chrome/")>-1&&o.indexOf("edge/")<0}(f),get isMediaForcedColors(){return!!_.window.matchMedia&&_.window.matchMedia("(forced-colors: active)").matches},get isMotionReduced(){return!!_.window.matchMedia&&_.window.matchMedia("(prefers-reduced-motion)").matches},features:{isRegExpUnicodePropertySupported:function(){let o=!1;try{o="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return o}()}};function y(o){return o.indexOf("macintosh")>-1}function A(o,e,t,n){t=t||function(d,h){return d===h};const i=Array.isArray(o)?o:Array.prototype.slice.call(o),r=Array.isArray(e)?e:Array.prototype.slice.call(e),a=function(d,h,p){const k=E(d,h,p);if(k===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const C=M(d,k),D=M(h,k),S=E(C,D,p),T=d.length-S,B=h.length-S;return{firstIndex:k,lastIndexOld:T,lastIndexNew:B}}(i,r,t);return n?function(d,h){const{firstIndex:p,lastIndexOld:k,lastIndexNew:C}=d;if(p===-1)return Array(h).fill("equal");let D=[];return p>0&&(D=D.concat(Array(p).fill("equal"))),C-p>0&&(D=D.concat(Array(C-p).fill("insert"))),k-p>0&&(D=D.concat(Array(k-p).fill("delete"))),C<h&&(D=D.concat(Array(h-C).fill("equal"))),D}(a,r.length):function(d,h){const p=[],{firstIndex:k,lastIndexOld:C,lastIndexNew:D}=h;return D-k>0&&p.push({index:k,type:"insert",values:d.slice(k,D)}),C-k>0&&p.push({index:k+(D-k),type:"delete",howMany:C-k}),p}(r,a)}function E(o,e,t){for(let n=0;n<Math.max(o.length,e.length);n++)if(o[n]===void 0||e[n]===void 0||!t(o[n],e[n]))return n;return-1}function M(o,e){return o.slice(e).reverse()}function P(o,e,t){t=t||function(T,B){return T===B};const n=o.length,i=e.length;if(n>200||i>200||n+i>300)return P.fastDiff(o,e,t,!0);let r,a;if(i<n){const T=o;o=e,e=T,r="delete",a="insert"}else r="insert",a="delete";const l=o.length,d=e.length,h=d-l,p={},k={};function C(T){const B=(k[T-1]!==void 0?k[T-1]:-1)+1,L=k[T+1]!==void 0?k[T+1]:-1,$=B>L?-1:1;p[T+$]&&(p[T]=p[T+$].slice(0)),p[T]||(p[T]=[]),p[T].push(B>L?r:a);let Q=Math.max(B,L),se=Q-T;for(;se<l&&Q<d&&t(o[se],e[Q]);)se++,Q++,p[T].push("equal");return Q}let D,S=0;do{for(D=-S;D<h;D++)k[D]=C(D);for(D=h+S;D>h;D--)k[D]=C(D);k[h]=C(h),S++}while(k[h]!==d);return p[h].slice(1)}P.fastDiff=A;const z=function(){return function o(){o.called=!0}};class F{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=z(),this.off=z()}}const j=new Array(256).fill("").map((o,e)=>("0"+e.toString(16)).slice(-2));function O(){const o=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+j[255&o]+j[o>>8&255]+j[o>>16&255]+j[o>>24&255]+j[255&e]+j[e>>8&255]+j[e>>16&255]+j[e>>24&255]+j[255&t]+j[t>>8&255]+j[t>>16&255]+j[t>>24&255]+j[255&n]+j[n>>8&255]+j[n>>16&255]+j[n>>24&255]}const H={get(o="normal"){return typeof o!="number"?this[o]||this.normal:o},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function q(o,e){const t=H.get(e.priority);for(let n=0;n<o.length;n++)if(H.get(o[n].priority)<t)return void o.splice(n,0,e);o.push(e)}const G="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class I extends Error{constructor(e,t,n){super(function(i,r){const a=new WeakSet,l=(p,k)=>{if(typeof k=="object"&&k!==null){if(a.has(k))return`[object ${k.constructor.name}]`;a.add(k)}return k},d=r?` ${JSON.stringify(r,l)}`:"",h=K(i);return i+d+h}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new I(e.message,t);throw n.stack=e.stack,n}}function V(o,e){console.warn(...le(o,e))}function W(o,e){console.error(...le(o,e))}function K(o){return`
Read more: ${G}#error-${o}`}function le(o,e){const t=K(o);return e?[o,e,t]:[o,t]}const J="41.4.2",he=new Date(2024,4,17);if(globalThis.CKEDITOR_VERSION)throw new I("ckeditor-duplicated-modules",null);globalThis.CKEDITOR_VERSION=J;const Ae=Symbol("listeningTo"),be=Symbol("emitterId"),Y=Symbol("delegations"),ne=me(Object);function me(o){return o?class extends o{on(e,t,n){this.listenTo(this,e,t,n)}once(e,t,n){let i=!1;this.listenTo(this,e,(r,...a)=>{i||(i=!0,r.off(),t.call(this,r,...a))},n)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,n,i={}){let r,a;this[Ae]||(this[Ae]={});const l=this[Ae];ht(e)||vt(e);const d=ht(e);(r=l[d])||(r=l[d]={emitter:e,callbacks:{}}),(a=r.callbacks[t])||(a=r.callbacks[t]=[]),a.push(n),function(h,p,k,C,D){p._addEventListener?p._addEventListener(k,C,D):h._addEventListener.call(p,k,C,D)}(this,e,t,n,i)}stopListening(e,t,n){const i=this[Ae];let r=e&&ht(e);const a=i&&r?i[r]:void 0,l=a&&t?a.callbacks[t]:void 0;if(!(!i||e&&!a||t&&!l))if(n)gt(this,e,t,n),l.indexOf(n)!==-1&&(l.length===1?delete a.callbacks[t]:gt(this,e,t,n));else if(l){for(;n=l.pop();)gt(this,e,t,n);delete a.callbacks[t]}else if(a){for(t in a.callbacks)this.stopListening(e,t);delete i[r]}else{for(r in i)this.stopListening(i[r].emitter);delete this[Ae]}}fire(e,...t){try{const n=e instanceof F?e:new F(this,e),i=n.name;let r=ve(this,i);if(n.path.push(this),r){const l=[n,...t];r=Array.from(r);for(let d=0;d<r.length&&(r[d].callback.apply(this,l),n.off.called&&(delete n.off.called,this._removeEventListener(i,r[d].callback)),!n.stop.called);d++);}const a=this[Y];if(a){const l=a.get(i),d=a.get("*");l&&We(l,n,t),d&&We(d,n,t)}return n.return}catch(n){I.rethrowUnexpectedError(n,this)}}delegate(...e){return{to:(t,n)=>{this[Y]||(this[Y]=new Map),e.forEach(i=>{const r=this[Y].get(i);r?r.set(t,n):this[Y].set(i,new Map([[t,n]]))})}}}stopDelegating(e,t){if(this[Y])if(e)if(t){const n=this[Y].get(e);n&&n.delete(t)}else this[Y].delete(e);else this[Y].clear()}_addEventListener(e,t,n){(function(a,l){const d=Wt(a);if(d[l])return;let h=l,p=null;const k=[];for(;h!==""&&!d[h];)d[h]={callbacks:[],childEvents:[]},k.push(d[h]),p&&d[h].childEvents.push(p),p=h,h=h.substr(0,h.lastIndexOf(":"));if(h!==""){for(const C of k)C.callbacks=d[h].callbacks.slice();d[h].childEvents.push(p)}})(this,e);const i=Nt(this,e),r={callback:t,priority:H.get(n.priority)};for(const a of i)q(a,r)}_removeEventListener(e,t){const n=Nt(this,e);for(const i of n)for(let r=0;r<i.length;r++)i[r].callback==t&&(i.splice(r,1),r--)}}:ne}function vt(o,e){o[be]||(o[be]=e||O())}function ht(o){return o[be]}function Wt(o){return o._events||Object.defineProperty(o,"_events",{value:{}}),o._events}function Nt(o,e){const t=Wt(o)[e];if(!t)return[];let n=[t.callbacks];for(let i=0;i<t.childEvents.length;i++){const r=Nt(o,t.childEvents[i]);n=n.concat(r)}return n}function ve(o,e){let t;return o._events&&(t=o._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?ve(o,e.substr(0,e.lastIndexOf(":"))):null}function We(o,e,t){for(let[n,i]of o){i?typeof i=="function"&&(i=i(e.name)):i=e.name;const r=new F(e.source,i);r.path=[...e.path],n.fire(r,...t)}}function gt(o,e,t,n){e._removeEventListener?e._removeEventListener(t,n):o._removeEventListener.call(e,t,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{me[o]=ne.prototype[o]});const Le=function(o){var e=typeof o;return o!=null&&(e=="object"||e=="function")},re=Symbol("observableProperties"),Me=Symbol("boundObservables"),Ee=Symbol("boundProperties"),ye=Symbol("decoratedMethods"),je=Symbol("decoratedOriginal"),nt=R(me());function R(o){return o?class extends o{set(e,t){if(Le(e))return void Object.keys(e).forEach(i=>{this.set(i,e[i])},this);U(this);const n=this[re];if(e in this&&!n.has(e))throw new I("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>n.get(e),set(i){const r=n.get(e);let a=this.fire(`set:${e}`,e,i,r);a===void 0&&(a=i),r===a&&n.has(e)||(n.set(e,a),this.fire(`change:${e}`,e,a,r))}}),this[e]=t}bind(...e){if(!e.length||!ae(e))throw new I("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new I("observable-bind-duplicate-properties",this);U(this);const t=this[Ee];e.forEach(i=>{if(t.has(i))throw new I("observable-bind-rebind",this)});const n=new Map;return e.forEach(i=>{const r={property:i,to:[]};t.set(i,r),n.set(i,r)}),{to:X,toMany:ue,_observable:this,_bindProperties:e,_to:[],_bindings:n}}unbind(...e){if(!this[re])return;const t=this[Ee],n=this[Me];if(e.length){if(!ae(e))throw new I("observable-unbind-wrong-properties",this);e.forEach(i=>{const r=t.get(i);r&&(r.to.forEach(([a,l])=>{const d=n.get(a),h=d[l];h.delete(r),h.size||delete d[l],Object.keys(d).length||(n.delete(a),this.stopListening(a,"change"))}),t.delete(i))})}else n.forEach((i,r)=>{this.stopListening(r,"change")}),n.clear(),t.clear()}decorate(e){U(this);const t=this[e];if(!t)throw new I("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(n,i)=>{n.return=t.apply(this,i)}),this[e]=function(...n){return this.fire(e,n)},this[e][je]=t,this[ye]||(this[ye]=[]),this[ye].push(e)}stopListening(e,t,n){if(!e&&this[ye]){for(const i of this[ye])this[i]=this[i][je];delete this[ye]}super.stopListening(e,t,n)}}:nt}function U(o){o[re]||(Object.defineProperty(o,re,{value:new Map}),Object.defineProperty(o,Me,{value:new Map}),Object.defineProperty(o,Ee,{value:new Map}))}function X(...o){const e=function(...r){if(!r.length)throw new I("observable-bind-to-parse-error",null);const a={to:[]};let l;return typeof r[r.length-1]=="function"&&(a.callback=r.pop()),r.forEach(d=>{if(typeof d=="string")l.properties.push(d);else{if(typeof d!="object")throw new I("observable-bind-to-parse-error",null);l={observable:d,properties:[]},a.to.push(l)}}),a}(...o),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new I("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new I("observable-bind-to-extra-callback",this);var i;e.to.forEach(r=>{if(r.properties.length&&r.properties.length!==n)throw new I("observable-bind-to-properties-length",this);r.properties.length||(r.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),i=this._observable,this._to.forEach(r=>{const a=i[Me];let l;a.get(r.observable)||i.listenTo(r.observable,"change",(d,h)=>{l=a.get(r.observable)[h],l&&l.forEach(p=>{Ce(i,p.property)})})}),function(r){let a;r._bindings.forEach((l,d)=>{r._to.forEach(h=>{a=h.properties[l.callback?0:r._bindProperties.indexOf(d)],l.to.push([h.observable,a]),function(p,k,C,D){const S=p[Me],T=S.get(C),B=T||{};B[D]||(B[D]=new Set),B[D].add(k),T||S.set(C,B)}(r._observable,l,h.observable,a)})})}(this),this._bindProperties.forEach(r=>{Ce(this._observable,r)})}function ue(o,e,t){if(this._bindings.size>1)throw new I("observable-bind-to-many-not-one-binding",this);this.to(...function(n,i){const r=n.map(a=>[a,i]);return Array.prototype.concat.apply([],r)}(o,e),t)}function ae(o){return o.every(e=>typeof e=="string")}function Ce(o,e){const t=o[Ee].get(e);let n;t.callback?n=t.callback.apply(o,t.to.map(i=>i[0][i[1]])):(n=t.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(o,e)?o[e]=n:o.set(e,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{R[o]=nt.prototype[o]});class Se{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}function we(o){let e=0;for(const t of o)e++;return e}function _e(o,e){const t=Math.min(o.length,e.length);for(let n=0;n<t;n++)if(o[n]!=e[n])return n;return o.length==e.length?"same":o.length<e.length?"prefix":"extension"}function oe(o){return!(!o||!o[Symbol.iterator])}const Ie=typeof gi=="object"&&gi&&gi.Object===Object&&gi;var ge=typeof self=="object"&&self&&self.Object===Object&&self;const te=Ie||ge||Function("return this")(),Z=te.Symbol;var Oe=Object.prototype,Fe=Oe.hasOwnProperty,Ke=Oe.toString,bt=Z?Z.toStringTag:void 0;const yn=function(o){var e=Fe.call(o,bt),t=o[bt];try{o[bt]=void 0;var n=!0}catch{}var i=Ke.call(o);return n&&(e?o[bt]=t:delete o[bt]),i};var qo=Object.prototype.toString;const Ma=function(o){return qo.call(o)};var Wo=Z?Z.toStringTag:void 0;const Yn=function(o){return o==null?o===void 0?"[object Undefined]":"[object Null]":Wo&&Wo in Object(o)?yn(o):Ma(o)},yt=Array.isArray,Pt=function(o){return o!=null&&typeof o=="object"},as=function(o){return typeof o=="string"||!yt(o)&&Pt(o)&&Yn(o)=="[object String]"};function Ln(o,e,t={},n=[]){const i=t&&t.xmlns,r=i?o.createElementNS(i,e):o.createElement(e);for(const a in t)r.setAttribute(a,t[a]);!as(n)&&oe(n)||(n=[n]);for(let a of n)as(a)&&(a=o.createTextNode(a)),r.appendChild(a);return r}const Yg=function(o,e){return function(t){return o(e(t))}},rd=Yg(Object.getPrototypeOf,Object);var Yx=Function.prototype,Qx=Object.prototype,Qg=Yx.toString,Zx=Qx.hasOwnProperty,Jx=Qg.call(Object);const xn=function(o){if(!Pt(o)||Yn(o)!="[object Object]")return!1;var e=rd(o);if(e===null)return!0;var t=Zx.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Qg.call(t)==Jx},Xx=function(){this.__data__=[],this.size=0},cs=function(o,e){return o===e||o!=o&&e!=e},Ba=function(o,e){for(var t=o.length;t--;)if(cs(o[t][0],e))return t;return-1};var eE=Array.prototype.splice;const tE=function(o){var e=this.__data__,t=Ba(e,o);return!(t<0)&&(t==e.length-1?e.pop():eE.call(e,t,1),--this.size,!0)},nE=function(o){var e=this.__data__,t=Ba(e,o);return t<0?void 0:e[t][1]},oE=function(o){return Ba(this.__data__,o)>-1},iE=function(o,e){var t=this.__data__,n=Ba(t,o);return n<0?(++this.size,t.push([o,e])):t[n][1]=e,this};function ir(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}ir.prototype.clear=Xx,ir.prototype.delete=tE,ir.prototype.get=nE,ir.prototype.has=oE,ir.prototype.set=iE;const Pa=ir,rE=function(){this.__data__=new Pa,this.size=0},sE=function(o){var e=this.__data__,t=e.delete(o);return this.size=e.size,t},aE=function(o){return this.__data__.get(o)},cE=function(o){return this.__data__.has(o)},Ai=function(o){if(!Le(o))return!1;var e=Yn(o);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},sd=te["__core-js_shared__"];var Zg=function(){var o=/[^.]+$/.exec(sd&&sd.keys&&sd.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}();const lE=function(o){return!!Zg&&Zg in o};var dE=Function.prototype.toString;const Ci=function(o){if(o!=null){try{return dE.call(o)}catch{}try{return o+""}catch{}}return""};var uE=/^\[object .+?Constructor\]$/,hE=Function.prototype,gE=Object.prototype,pE=hE.toString,mE=gE.hasOwnProperty,fE=RegExp("^"+pE.call(mE).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const kE=function(o){return!(!Le(o)||lE(o))&&(Ai(o)?fE:uE).test(Ci(o))},bE=function(o,e){return o==null?void 0:o[e]},vi=function(o,e){var t=bE(o,e);return kE(t)?t:void 0},ls=vi(te,"Map"),ds=vi(Object,"create"),_E=function(){this.__data__=ds?ds(null):{},this.size=0},wE=function(o){var e=this.has(o)&&delete this.__data__[o];return this.size-=e?1:0,e};var AE=Object.prototype.hasOwnProperty;const CE=function(o){var e=this.__data__;if(ds){var t=e[o];return t==="__lodash_hash_undefined__"?void 0:t}return AE.call(e,o)?e[o]:void 0};var vE=Object.prototype.hasOwnProperty;const yE=function(o){var e=this.__data__;return ds?e[o]!==void 0:vE.call(e,o)},xE=function(o,e){var t=this.__data__;return this.size+=this.has(o)?0:1,t[o]=ds&&e===void 0?"__lodash_hash_undefined__":e,this};function rr(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}rr.prototype.clear=_E,rr.prototype.delete=wE,rr.prototype.get=CE,rr.prototype.has=yE,rr.prototype.set=xE;const Jg=rr,EE=function(){this.size=0,this.__data__={hash:new Jg,map:new(ls||Pa),string:new Jg}},DE=function(o){var e=typeof o;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?o!=="__proto__":o===null},Na=function(o,e){var t=o.__data__;return DE(e)?t[typeof e=="string"?"string":"hash"]:t.map},SE=function(o){var e=Na(this,o).delete(o);return this.size-=e?1:0,e},TE=function(o){return Na(this,o).get(o)},IE=function(o){return Na(this,o).has(o)},ME=function(o,e){var t=Na(this,o),n=t.size;return t.set(o,e),this.size+=t.size==n?0:1,this};function sr(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}sr.prototype.clear=EE,sr.prototype.delete=SE,sr.prototype.get=TE,sr.prototype.has=IE,sr.prototype.set=ME;const Oa=sr,BE=function(o,e){var t=this.__data__;if(t instanceof Pa){var n=t.__data__;if(!ls||n.length<199)return n.push([o,e]),this.size=++t.size,this;t=this.__data__=new Oa(n)}return t.set(o,e),this.size=t.size,this};function ar(o){var e=this.__data__=new Pa(o);this.size=e.size}ar.prototype.clear=rE,ar.prototype.delete=sE,ar.prototype.get=aE,ar.prototype.has=cE,ar.prototype.set=BE;const cr=ar,PE=function(o,e){for(var t=-1,n=o==null?0:o.length;++t<n&&e(o[t],t,o)!==!1;);return o},La=function(){try{var o=vi(Object,"defineProperty");return o({},"",{}),o}catch{}}(),Ra=function(o,e,t){e=="__proto__"&&La?La(o,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):o[e]=t};var NE=Object.prototype.hasOwnProperty;const ad=function(o,e,t){var n=o[e];NE.call(o,e)&&cs(n,t)&&(t!==void 0||e in o)||Ra(o,e,t)},lr=function(o,e,t,n){var i=!t;t||(t={});for(var r=-1,a=e.length;++r<a;){var l=e[r],d=void 0;d===void 0&&(d=o[l]),i?Ra(t,l,d):ad(t,l,d)}return t},OE=function(o,e){for(var t=-1,n=Array(o);++t<o;)n[t]=e(t);return n},Xg=function(o){return Pt(o)&&Yn(o)=="[object Arguments]"};var ep=Object.prototype,LE=ep.hasOwnProperty,RE=ep.propertyIsEnumerable;const za=Xg(function(){return arguments}())?Xg:function(o){return Pt(o)&&LE.call(o,"callee")&&!RE.call(o,"callee")},zE=function(){return!1};var tp=c&&!c.nodeType&&c,np=tp&&!0&&s&&!s.nodeType&&s,op=np&&np.exports===tp?te.Buffer:void 0;const us=(op?op.isBuffer:void 0)||zE;var jE=/^(?:0|[1-9]\d*)$/;const ja=function(o,e){var t=typeof o;return!!(e=e??9007199254740991)&&(t=="number"||t!="symbol"&&jE.test(o))&&o>-1&&o%1==0&&o<e},cd=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991};var It={};It["[object Float32Array]"]=It["[object Float64Array]"]=It["[object Int8Array]"]=It["[object Int16Array]"]=It["[object Int32Array]"]=It["[object Uint8Array]"]=It["[object Uint8ClampedArray]"]=It["[object Uint16Array]"]=It["[object Uint32Array]"]=!0,It["[object Arguments]"]=It["[object Array]"]=It["[object ArrayBuffer]"]=It["[object Boolean]"]=It["[object DataView]"]=It["[object Date]"]=It["[object Error]"]=It["[object Function]"]=It["[object Map]"]=It["[object Number]"]=It["[object Object]"]=It["[object RegExp]"]=It["[object Set]"]=It["[object String]"]=It["[object WeakMap]"]=!1;const FE=function(o){return Pt(o)&&cd(o.length)&&!!It[Yn(o)]},ld=function(o){return function(e){return o(e)}};var ip=c&&!c.nodeType&&c,hs=ip&&!0&&s&&!s.nodeType&&s,dd=hs&&hs.exports===ip&&Ie.process;const dr=function(){try{var o=hs&&hs.require&&hs.require("util").types;return o||dd&&dd.binding&&dd.binding("util")}catch{}}();var rp=dr&&dr.isTypedArray;const ud=rp?ld(rp):FE;var VE=Object.prototype.hasOwnProperty;const sp=function(o,e){var t=yt(o),n=!t&&za(o),i=!t&&!n&&us(o),r=!t&&!n&&!i&&ud(o),a=t||n||i||r,l=a?OE(o.length,String):[],d=l.length;for(var h in o)!e&&!VE.call(o,h)||a&&(h=="length"||i&&(h=="offset"||h=="parent")||r&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||ja(h,d))||l.push(h);return l};var UE=Object.prototype;const hd=function(o){var e=o&&o.constructor;return o===(typeof e=="function"&&e.prototype||UE)},HE=Yg(Object.keys,Object);var $E=Object.prototype.hasOwnProperty;const qE=function(o){if(!hd(o))return HE(o);var e=[];for(var t in Object(o))$E.call(o,t)&&t!="constructor"&&e.push(t);return e},Fa=function(o){return o!=null&&cd(o.length)&&!Ai(o)},gs=function(o){return Fa(o)?sp(o):qE(o)},WE=function(o,e){return o&&lr(e,gs(e),o)},GE=function(o){var e=[];if(o!=null)for(var t in Object(o))e.push(t);return e};var KE=Object.prototype.hasOwnProperty;const YE=function(o){if(!Le(o))return GE(o);var e=hd(o),t=[];for(var n in o)(n!="constructor"||!e&&KE.call(o,n))&&t.push(n);return t},ur=function(o){return Fa(o)?sp(o,!0):YE(o)},QE=function(o,e){return o&&lr(e,ur(e),o)};var ap=c&&!c.nodeType&&c,cp=ap&&!0&&s&&!s.nodeType&&s,lp=cp&&cp.exports===ap?te.Buffer:void 0,dp=lp?lp.allocUnsafe:void 0;const up=function(o,e){if(e)return o.slice();var t=o.length,n=dp?dp(t):new o.constructor(t);return o.copy(n),n},hp=function(o,e){var t=-1,n=o.length;for(e||(e=Array(n));++t<n;)e[t]=o[t];return e},ZE=function(o,e){for(var t=-1,n=o==null?0:o.length,i=0,r=[];++t<n;){var a=o[t];e(a,t,o)&&(r[i++]=a)}return r},gp=function(){return[]};var JE=Object.prototype.propertyIsEnumerable,pp=Object.getOwnPropertySymbols;const gd=pp?function(o){return o==null?[]:(o=Object(o),ZE(pp(o),function(e){return JE.call(o,e)}))}:gp,XE=function(o,e){return lr(o,gd(o),e)},mp=function(o,e){for(var t=-1,n=e.length,i=o.length;++t<n;)o[i+t]=e[t];return o},fp=Object.getOwnPropertySymbols?function(o){for(var e=[];o;)mp(e,gd(o)),o=rd(o);return e}:gp,e2=function(o,e){return lr(o,fp(o),e)},kp=function(o,e,t){var n=e(o);return yt(o)?n:mp(n,t(o))},pd=function(o){return kp(o,gs,gd)},t2=function(o){return kp(o,ur,fp)},md=vi(te,"DataView"),fd=vi(te,"Promise"),kd=vi(te,"Set"),bd=vi(te,"WeakMap");var bp="[object Map]",_p="[object Promise]",wp="[object Set]",Ap="[object WeakMap]",Cp="[object DataView]",n2=Ci(md),o2=Ci(ls),i2=Ci(fd),r2=Ci(kd),s2=Ci(bd),yi=Yn;(md&&yi(new md(new ArrayBuffer(1)))!=Cp||ls&&yi(new ls)!=bp||fd&&yi(fd.resolve())!=_p||kd&&yi(new kd)!=wp||bd&&yi(new bd)!=Ap)&&(yi=function(o){var e=Yn(o),t=e=="[object Object]"?o.constructor:void 0,n=t?Ci(t):"";if(n)switch(n){case n2:return Cp;case o2:return bp;case i2:return _p;case r2:return wp;case s2:return Ap}return e});const ps=yi;var a2=Object.prototype.hasOwnProperty;const c2=function(o){var e=o.length,t=new o.constructor(e);return e&&typeof o[0]=="string"&&a2.call(o,"index")&&(t.index=o.index,t.input=o.input),t},Va=te.Uint8Array,_d=function(o){var e=new o.constructor(o.byteLength);return new Va(e).set(new Va(o)),e},l2=function(o,e){var t=e?_d(o.buffer):o.buffer;return new o.constructor(t,o.byteOffset,o.byteLength)};var d2=/\w*$/;const u2=function(o){var e=new o.constructor(o.source,d2.exec(o));return e.lastIndex=o.lastIndex,e};var vp=Z?Z.prototype:void 0,yp=vp?vp.valueOf:void 0;const h2=function(o){return yp?Object(yp.call(o)):{}},xp=function(o,e){var t=e?_d(o.buffer):o.buffer;return new o.constructor(t,o.byteOffset,o.length)},g2=function(o,e,t){var n=o.constructor;switch(e){case"[object ArrayBuffer]":return _d(o);case"[object Boolean]":case"[object Date]":return new n(+o);case"[object DataView]":return l2(o,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return xp(o,t);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(o);case"[object RegExp]":return u2(o);case"[object Symbol]":return h2(o)}};var Ep=Object.create;const p2=function(){function o(){}return function(e){if(!Le(e))return{};if(Ep)return Ep(e);o.prototype=e;var t=new o;return o.prototype=void 0,t}}(),Dp=function(o){return typeof o.constructor!="function"||hd(o)?{}:p2(rd(o))},m2=function(o){return Pt(o)&&ps(o)=="[object Map]"};var Sp=dr&&dr.isMap;const f2=Sp?ld(Sp):m2,k2=function(o){return Pt(o)&&ps(o)=="[object Set]"};var Tp=dr&&dr.isSet;const b2=Tp?ld(Tp):k2;var Ip="[object Arguments]",Mp="[object Function]",Bp="[object Object]",Dt={};Dt[Ip]=Dt["[object Array]"]=Dt["[object ArrayBuffer]"]=Dt["[object DataView]"]=Dt["[object Boolean]"]=Dt["[object Date]"]=Dt["[object Float32Array]"]=Dt["[object Float64Array]"]=Dt["[object Int8Array]"]=Dt["[object Int16Array]"]=Dt["[object Int32Array]"]=Dt["[object Map]"]=Dt["[object Number]"]=Dt[Bp]=Dt["[object RegExp]"]=Dt["[object Set]"]=Dt["[object String]"]=Dt["[object Symbol]"]=Dt["[object Uint8Array]"]=Dt["[object Uint8ClampedArray]"]=Dt["[object Uint16Array]"]=Dt["[object Uint32Array]"]=!0,Dt["[object Error]"]=Dt[Mp]=Dt["[object WeakMap]"]=!1;const wd=function o(e,t,n,i,r,a){var l,d=1&t,h=2&t,p=4&t;if(n&&(l=r?n(e,i,r,a):n(e)),l!==void 0)return l;if(!Le(e))return e;var k=yt(e);if(k){if(l=c2(e),!d)return hp(e,l)}else{var C=ps(e),D=C==Mp||C=="[object GeneratorFunction]";if(us(e))return up(e,d);if(C==Bp||C==Ip||D&&!r){if(l=h||D?{}:Dp(e),!d)return h?e2(e,QE(l,e)):XE(e,WE(l,e))}else{if(!Dt[C])return r?e:{};l=g2(e,C,d)}}a||(a=new cr);var S=a.get(e);if(S)return S;a.set(e,l),b2(e)?e.forEach(function(B){l.add(o(B,t,n,B,e,a))}):f2(e)&&e.forEach(function(B,L){l.set(L,o(B,t,n,L,e,a))});var T=k?void 0:(p?h?t2:pd:h?ur:gs)(e);return PE(T||e,function(B,L){T&&(B=e[L=B]),ad(l,L,o(B,t,n,L,e,a))}),l},Ad=function(o,e){return wd(o,5,e=typeof e=="function"?e:void 0)},xi=function(o){return Pt(o)&&o.nodeType===1&&!xn(o)};class Pp{constructor(e,t){this._config={},t&&this.define(Np(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,i=!1){if(xn(t))return void this._setObjectToTarget(e,t,i);const r=t.split(".");t=r.pop();for(const a of r)xn(e[a])||(e[a]={}),e=e[a];if(xn(n))return xn(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,n,i);i&&e[t]!==void 0||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const i of n){if(!xn(e[i])){e=null;break}e=e[i]}return e?Np(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(i=>{this._setToTarget(e,i,t[i],n)})}}function Np(o){return Ad(o,_2)}function _2(o){return xi(o)||typeof o=="function"?o:void 0}function Go(o){if(o){if(o.defaultView)return o instanceof o.defaultView.Document;if(o.ownerDocument&&o.ownerDocument.defaultView)return o instanceof o.ownerDocument.defaultView.Node}return!1}function Ua(o){const e=Object.prototype.toString.apply(o);return e=="[object Window]"||e=="[object global]"}const Op=Rn(me());function Rn(o){return o?class extends o{listenTo(e,t,n,i={}){if(Go(e)||Ua(e)){const r={capture:!!i.useCapture,passive:!!i.usePassive},a=this._getProxyEmitter(e,r)||new w2(e,r);this.listenTo(a,t,n,i)}else super.listenTo(e,t,n,i)}stopListening(e,t,n){if(Go(e)||Ua(e)){const i=this._getAllProxyEmitters(e);for(const r of i)this.stopListening(r,t,n)}else super.stopListening(e,t,n)}_getProxyEmitter(e,t){return function(n,i){const r=n[Ae];return r&&r[i]?r[i].emitter:null}(this,Lp(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(t=>!!t)}}:Op}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{Rn[o]=Op.prototype[o]});class w2 extends me(){constructor(e,t){super(),vt(this,Lp(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),me().prototype._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){me().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function Lp(o,e){let t=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=O())}(o);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}function Rp(o){const e=o.ownerDocument.defaultView.getComputedStyle(o);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}function jt(o){return Object.prototype.toString.call(o)=="[object Text]"}function Ha(o){return Object.prototype.toString.apply(o)=="[object Range]"}function zp(o){return o&&o.parentNode?o.offsetParent===_.document.body?null:o.offsetParent:null}const jp=["top","right","bottom","left","width","height"];class et{constructor(e){const t=Ha(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),Cd(e)||t)if(t){const n=et.getDomRangeRects(e);$a(this,et.getBoundingRect(n))}else $a(this,e.getBoundingClientRect());else if(Ua(e)){const{innerWidth:n,innerHeight:i}=e;$a(this,{top:0,right:n,bottom:i,left:0,width:n,height:i})}else $a(this,e)}clone(){return new et(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};if(t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0)return null;{const n=new et(t);return n._source=this._source,n}}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(Fp(e))return t;let n,i=e,r=e.parentNode||e.commonAncestorContainer;for(;r&&!Fp(r);){const l=((a=r)instanceof HTMLElement?a.ownerDocument.defaultView.getComputedStyle(a).overflow:"visible")==="visible";i instanceof HTMLElement&&Vp(i)==="absolute"&&(n=i);const d=Vp(r);if(l||n&&(d==="relative"&&l||d!=="relative")){i=r,r=r.parentNode;continue}const h=new et(r),p=t.getIntersection(h);if(!p)return null;p.getArea()<t.getArea()&&(t=p),i=r,r=r.parentNode}var a;return t}isEqual(e){for(const t of jp)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}toAbsoluteRect(){const{scrollX:e,scrollY:t}=_.window,n=this.clone().moveBy(e,t);if(Cd(n._source)){const i=zp(n._source);i&&function(r,a){const l=new et(a),d=Rp(a);let h=0,p=0;h-=l.left,p-=l.top,h+=a.scrollLeft,p+=a.scrollTop,h-=d.left,p-=d.top,r.moveBy(h,p)}(n,i)}return n}excludeScrollbarsAndBorders(){const e=this._source;let t,n,i;if(Ua(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,i=e.getComputedStyle(e.document.documentElement).direction;else{const r=Rp(e);t=e.offsetWidth-e.clientWidth-r.left-r.right,n=e.offsetHeight-e.clientHeight-r.top-r.bottom,i=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,i==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const i of n)t.push(new et(i));else{let i=e.startContainer;jt(i)&&(i=i.parentNode);const r=new et(i.getBoundingClientRect());r.right=r.left,r.width=0,t.push(r)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const i of e)n++,t.left=Math.min(t.left,i.left),t.top=Math.min(t.top,i.top),t.right=Math.max(t.right,i.right),t.bottom=Math.max(t.bottom,i.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new et(t))}}function $a(o,e){for(const t of jp)o[t]=e[t]}function Fp(o){return!!Cd(o)&&o===o.ownerDocument.body}function Cd(o){return o!==null&&typeof o=="object"&&o.nodeType===1&&typeof o.getBoundingClientRect=="function"}function Vp(o){return o instanceof HTMLElement?o.ownerDocument.defaultView.getComputedStyle(o).position:"static"}const Ft=class{constructor(o,e){Ft._observerInstance||Ft._createObserver(),this._element=o,this._callback=e,Ft._addElementCallback(o,e),Ft._observerInstance.observe(o)}get element(){return this._element}destroy(){Ft._deleteElementCallback(this._element,this._callback)}static _addElementCallback(o,e){Ft._elementCallbacks||(Ft._elementCallbacks=new Map);let t=Ft._elementCallbacks.get(o);t||(t=new Set,Ft._elementCallbacks.set(o,t)),t.add(e)}static _deleteElementCallback(o,e){const t=Ft._getElementCallbacks(o);t&&(t.delete(e),t.size||(Ft._elementCallbacks.delete(o),Ft._observerInstance.unobserve(o))),Ft._elementCallbacks&&!Ft._elementCallbacks.size&&(Ft._observerInstance=null,Ft._elementCallbacks=null)}static _getElementCallbacks(o){return Ft._elementCallbacks?Ft._elementCallbacks.get(o):null}static _createObserver(){Ft._observerInstance=new _.window.ResizeObserver(o=>{for(const e of o){const t=Ft._getElementCallbacks(e.target);if(t)for(const n of t)n(e)}})}};let ms=Ft;function Up(o,e){o instanceof HTMLTextAreaElement&&(o.value=e),o.innerHTML=e}function hr(o){return e=>e+o}function fs(o){let e=0;for(;o.previousSibling;)o=o.previousSibling,e++;return e}function Hp(o,e,t){o.insertBefore(t,o.childNodes[e]||null)}function ks(o){return o&&o.nodeType===Node.COMMENT_NODE}function Ei(o){return!!(o&&o.getClientRects&&o.getClientRects().length)}ms._observerInstance=null,ms._elementCallbacks=null;var $p=Math.pow;function qa({element:o,target:e,positions:t,limiter:n,fitInViewport:i,viewportOffsetConfig:r}){Ai(e)&&(e=e()),Ai(n)&&(n=n());const a=zp(o),l=function(C){C=Object.assign({top:0,bottom:0,left:0,right:0},C);const D=new et(_.window);return D.top+=C.top,D.height-=C.top,D.bottom-=C.bottom,D.height-=C.bottom,D}(r),d=new et(o),h=qp(e,l);let p;if(!h||!l.getIntersection(h))return null;const k={targetRect:h,elementRect:d,positionedElementAncestor:a,viewportRect:l};if(n||i){if(n){const C=qp(n,l);C&&(k.limiterRect=C)}p=function(C,D){const{elementRect:S}=D,T=S.getArea(),B=C.map(Q=>new Wp(Q,D)).filter(Q=>!!Q.name);let L=0,$=null;for(const Q of B){const{limiterIntersectionArea:se,viewportIntersectionArea:Te}=Q;if(se===T)return Q;const Ve=$p(Te,2)+$p(se,2);Ve>L&&(L=Ve,$=Q)}return $}(t,k)}else p=new Wp(t[0],k);return p}function qp(o,e){const t=new et(o).getVisible();return t?t.getIntersection(e):null}class Wp{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect,t.limiterRect);if(!n)return;const{left:i,top:r,name:a,config:l}=n;this.name=a,this.config=l,this._positioningFunctionCoordinates={left:i,top:r},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;return e?e.getIntersectionArea(this._rect):0}get viewportIntersectionArea(){return this._options.viewportRect.getIntersectionArea(this._rect)}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCoordinates.left,this._positioningFunctionCoordinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=this._rect.toAbsoluteRect()),this._cachedAbsoluteRect}}function Gp(o){const e=o.parentNode;e&&e.removeChild(o)}function A2({window:o,rect:e,alignToTop:t,forceScroll:n,viewportOffset:i}){const r=e.clone().moveBy(0,i.bottom),a=e.clone().moveBy(0,-i.top),l=new et(o).excludeScrollbarsAndBorders(),d=t&&n,h=[a,r].every(S=>l.contains(S));let{scrollX:p,scrollY:k}=o;const C=p,D=k;d?k-=l.top-e.top+i.top:h||(Yp(a,l)?k-=l.top-e.top+i.top:Kp(r,l)&&(k+=t?e.top-l.top-i.top:e.bottom-l.bottom+i.bottom)),h||(Qp(e,l)?p-=l.left-e.left+i.left:Zp(e,l)&&(p+=e.right-l.right+i.right)),p==C&&k===D||o.scrollTo(p,k)}function C2({parent:o,getRect:e,alignToTop:t,forceScroll:n,ancestorOffset:i=0,limiterElement:r}){const a=vd(o),l=t&&n;let d,h,p;const k=r||a.document.body;for(;o!=k;)h=e(),d=new et(o).excludeScrollbarsAndBorders(),p=d.contains(h),l?o.scrollTop-=d.top-h.top+i:p||(Yp(h,d)?o.scrollTop-=d.top-h.top+i:Kp(h,d)&&(o.scrollTop+=t?h.top-d.top-i:h.bottom-d.bottom+i)),p||(Qp(h,d)?o.scrollLeft-=d.left-h.left+i:Zp(h,d)&&(o.scrollLeft+=h.right-d.right+i)),o=o.parentNode}function Kp(o,e){return o.bottom>e.bottom}function Yp(o,e){return o.top<e.top}function Qp(o,e){return o.left<e.left}function Zp(o,e){return o.right>e.right}function vd(o){return Ha(o)?o.startContainer.ownerDocument.defaultView:o.ownerDocument.defaultView}function v2(o){if(Ha(o)){let e=o.commonAncestorContainer;return jt(e)&&(e=e.parentNode),e}return o.parentNode}function Jp(o,e){const t=vd(o),n=new et(o);if(t===e)return n;{let i=t;for(;i!=e;){const r=i.frameElement,a=new et(r).excludeScrollbarsAndBorders();n.moveBy(a.left,a.top),i=i.parent}}return n}const y2={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},x2={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},Xp={37:"←",38:"↑",39:"→",40:"↓",9:"⇥",33:"Page Up",34:"Page Down"},ot=function(){const o={pageup:33,pagedown:34,arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++)o[String.fromCharCode(e).toLowerCase()]=e;for(let e=48;e<=57;e++)o[e-48]=e;for(let e=112;e<=123;e++)o["f"+(e-111)]=e;return Object.assign(o,{"'":222,",":108,"-":109,".":110,"/":111,";":186,"=":187,"[":219,"\\":220,"]":221,"`":223}),o}(),E2=Object.fromEntries(Object.entries(ot).map(([o,e])=>{let t;return t=e in Xp?Xp[e]:o.charAt(0).toUpperCase()+o.slice(1),[e,t]}));function gr(o){let e;if(typeof o=="string"){if(e=ot[o.toLowerCase()],!e)throw new I("keyboard-unknown-key",null,{key:o})}else e=o.keyCode+(o.altKey?ot.alt:0)+(o.ctrlKey?ot.ctrl:0)+(o.shiftKey?ot.shift:0)+(o.metaKey?ot.cmd:0);return e}function bs(o){return typeof o=="string"&&(o=function(e){return e.split("+").map(t=>t.trim())}(o)),o.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return gr(t.slice(0,-1));const n=gr(t);return(x.isMac||x.isiOS)&&n==ot.ctrl?ot.cmd:n}(e):e).reduce((e,t)=>t+e,0)}function Wa(o){let e=bs(o);return Object.entries(x.isMac||x.isiOS?y2:x2).reduce((t,[n,i])=>(e&ot[n]&&(e&=~ot[n],t+=i),t),"")+(e?E2[e]:"")}function yd(o,e){const t=e==="ltr";switch(o){case ot.arrowleft:return t?"left":"right";case ot.arrowright:return t?"right":"left";case ot.arrowup:return"up";case ot.arrowdown:return"down"}}function xt(o){return Array.isArray(o)?o:[o]}const xd=function(o,e,t){(t!==void 0&&!cs(o[e],t)||t===void 0&&!(e in o))&&Ra(o,e,t)},em=function(o){return function(e,t,n){for(var i=-1,r=Object(e),a=n(e),l=a.length;l--;){var d=a[++i];if(t(r[d],d,r)===!1)break}return e}}(),D2=function(o){return Pt(o)&&Fa(o)},tm=function(o,e){if((e!=="constructor"||typeof o[e]!="function")&&e!="__proto__")return o[e]},S2=function(o){return lr(o,ur(o))},T2=function(o,e,t,n,i,r,a){var l=tm(o,t),d=tm(e,t),h=a.get(d);if(h)xd(o,t,h);else{var p=void 0,k=p===void 0;if(k){var C=yt(d),D=!C&&us(d),S=!C&&!D&&ud(d);p=d,C||D||S?yt(l)?p=l:D2(l)?p=hp(l):D?(k=!1,p=up(d,!0)):S?(k=!1,p=xp(d,!0)):p=[]:xn(d)||za(d)?(p=l,za(l)?p=S2(l):Le(l)&&!Ai(l)||(p=Dp(d))):k=!1}k&&(a.set(d,p),i(p,d,n,r,a),a.delete(d)),xd(o,t,p)}},I2=function o(e,t,n,i,r){e!==t&&em(t,function(a,l){if(r||(r=new cr),Le(a))T2(e,t,l,n,o,i,r);else{var d=void 0;d===void 0&&(d=a),xd(e,l,d)}},ur)},Ko=function(o){return o},M2=function(o,e,t){switch(t.length){case 0:return o.call(e);case 1:return o.call(e,t[0]);case 2:return o.call(e,t[0],t[1]);case 3:return o.call(e,t[0],t[1],t[2])}return o.apply(e,t)};var nm=Math.max;const B2=function(o,e,t){return e=nm(e===void 0?o.length-1:e,0),function(){for(var n=arguments,i=-1,r=nm(n.length-e,0),a=Array(r);++i<r;)a[i]=n[e+i];i=-1;for(var l=Array(e+1);++i<e;)l[i]=n[i];return l[e]=t(a),M2(o,this,l)}},P2=function(o){return function(){return o}},N2=La?function(o,e){return La(o,"toString",{configurable:!0,enumerable:!1,value:P2(e),writable:!0})}:Ko;var O2=Date.now;const L2=function(o){var e=0,t=0;return function(){var n=O2(),i=16-(n-t);if(t=n,i>0){if(++e>=800)return arguments[0]}else e=0;return o.apply(void 0,arguments)}}(N2),R2=function(o,e){return L2(B2(o,e,Ko),o+"")},z2=function(o,e,t){if(!Le(t))return!1;var n=typeof e;return!!(n=="number"?Fa(t)&&ja(e,t.length):n=="string"&&e in t)&&cs(t[e],o)},om=function(o){return R2(function(e,t){var n=-1,i=t.length,r=i>1?t[i-1]:void 0,a=i>2?t[2]:void 0;for(r=o.length>3&&typeof r=="function"?(i--,r):void 0,a&&z2(t[0],t[1],a)&&(r=i<3?void 0:r,i=1),e=Object(e);++n<i;){var l=t[n];l&&o(e,l,n,r)}return e})},Ed=om(function(o,e,t){I2(o,e,t)});function j2(o,e,t=1,n){if(typeof t!="number")throw new I("translation-service-quantity-not-a-number",null,{quantity:t});const i=n||_.window.CKEDITOR_TRANSLATIONS,r=function(p){return Object.keys(p).length}(i);r===1&&(o=Object.keys(i)[0]);const a=e.id||e.string;if(r===0||!function(p,k,C){return!!C[p]&&!!C[p].dictionary[k]}(o,a,i))return t!==1?e.plural:e.string;const l=i[o].dictionary,d=i[o].getPluralForm||(p=>p===1?0:1),h=l[a];return typeof h=="string"?h:h[Number(d(t))]}_.window.CKEDITOR_TRANSLATIONS||(_.window.CKEDITOR_TRANSLATIONS={});const F2=["ar","ara","dv","div","fa","per","fas","he","heb","ku","kur","ug","uig"];function im(o){return F2.includes(o)?"rtl":"ltr"}class V2{constructor({uiLanguage:e="en",contentLanguage:t,translations:n}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=im(this.uiLanguage),this.contentLanguageDirection=im(this.contentLanguage),this.translations=function(i){return Array.isArray(i)?i.reduce((r,a)=>Ed(r,a)):i}(n),this.t=(i,r)=>this._t(i,r)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=xt(t),typeof e=="string"&&(e={string:e});const n=e.plural?t[0]:1;return function(i,r){return i.replace(/%(\d+)/g,(a,l)=>l<r.length?r[l]:a)}(j2(this.uiLanguage,e,n,this.translations),t)}}class Qn extends me(){constructor(e={},t={}){super();const n=oe(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const i of e)this._items.push(i),this._itemMap.set(this._getItemIdBeforeAdding(i),i)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new I("collection-add-item-invalid-index",this);let n=0;for(const i of e){const r=this._getItemIdBeforeAdding(i),a=t+n;this._items.splice(a,0,i),this._itemMap.set(r,i),this.fire("add",i,a),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new I("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}forEach(e,t){this._items.forEach(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new I("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(i,r,a)=>{const l=t._bindToCollection==this,d=t._bindToInternalToExternalMap.get(r);if(l&&d)this._bindToExternalToInternalMap.set(r,d),this._bindToInternalToExternalMap.set(d,r);else{const h=e(r);if(!h)return void this._skippedIndexesFromExternal.push(a);let p=a;for(const k of this._skippedIndexesFromExternal)a>k&&p--;for(const k of t._skippedIndexesFromExternal)p>=k&&p++;this._bindToExternalToInternalMap.set(r,h),this._bindToInternalToExternalMap.set(h,r),this.add(h,p);for(let k=0;k<t._skippedIndexesFromExternal.length;k++)p<=t._skippedIndexesFromExternal[k]&&t._skippedIndexesFromExternal[k]++}};for(const i of t)n(0,i,t.getIndex(i));this.listenTo(t,"add",n),this.listenTo(t,"remove",(i,r,a)=>{const l=this._bindToExternalToInternalMap.get(r);l&&this.remove(l),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((d,h)=>(a<h&&d.push(h-1),a>h&&d.push(h),d),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new I("collection-add-invalid-id",this);if(this.get(n))throw new I("collection-add-item-already-exists",this)}else e[t]=n=O();return n}_remove(e){let t,n,i,r=!1;const a=this._idProperty;if(typeof e=="string"?(n=e,i=this._itemMap.get(n),r=!i,i&&(t=this._items.indexOf(i))):typeof e=="number"?(t=e,i=this._items[t],r=!i,i&&(n=i[a])):(i=e,n=i[a],t=this._items.indexOf(i),r=t==-1||!this._itemMap.get(n)),r)throw new I("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const l=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(l),this.fire("remove",i,t),[i,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function Jt(o){const e=o.next();return e.done?null:e.value}class Xt extends Rn(R()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(e){if(this._elements.has(e))throw new I("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class cn{constructor(){this._listener=new(Rn())}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+gr(n),n)})}set(e,t,n={}){const i=bs(e),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+i,(a,l)=>{t(l,()=>{l.preventDefault(),l.stopPropagation(),a.stop()}),a.return=!0},{priority:r})}press(e){return!!this._listener.fire("_keydown:"+gr(e),e)}stopListening(e){this._listener.stopListening(e)}destroy(){this.stopListening()}}function ho(o){return oe(o)?new Map(o):function(e){const t=new Map;for(const n in e)t.set(n,e[n]);return t}(o)}function Dd(o,e){let t;function n(...i){n.cancel(),t=setTimeout(()=>o(...i),e)}return n.cancel=()=>{clearTimeout(t)},n}function Sd(o,e){return!!(t=o.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(o.charAt(e));var t}function Td(o,e){return!!(t=o.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const U2=function(){const o=[new RegExp("\\p{Emoji}[\\u{E0020}-\\u{E007E}]+\\u{E007F}","u"),new RegExp("\\p{Emoji}\\u{FE0F}?\\u{20E3}","u"),new RegExp("\\p{Emoji}\\u{FE0F}","u"),new RegExp("(?=\\p{General_Category=Other_Symbol})\\p{Emoji}\\p{Emoji_Modifier}*","u")],e=new RegExp("\\p{Regional_Indicator}{2}","u").source,t="(?:"+o.map(n=>n.source).join("|")+")";return new RegExp(`${e}|${t}(?:‍${t})*`,"ug")}();function rm(o,e){const t=String(o).matchAll(U2);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}class zn extends Qn{constructor(e=[]){super(e,{idProperty:"viewUid"}),this.on("add",(t,n,i)=>{this._renderViewIntoCollectionParent(n,i)}),this.on("remove",(t,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(e=>e.destroy())}setParent(e){this._parentElement=e;for(const t of this)this._renderViewIntoCollectionParent(t)}delegate(...e){if(!e.length||!e.every(t=>typeof t=="string"))throw new I("ui-viewcollection-delegate-wrong-events",this);return{to:t=>{for(const n of this)for(const i of e)n.delegate(i).to(t);this.on("add",(n,i)=>{for(const r of e)i.delegate(r).to(t)}),this.on("remove",(n,i)=>{for(const r of e)i.stopDelegating(r,t)})}}}_renderViewIntoCollectionParent(e,t){e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[t])}remove(e){return super.remove(e)}}class Zn extends me(){constructor(e){super(),Object.assign(this,lm(cm(e))),this._isRendered=!1,this._revertData=null}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:e,intoFragment:!1,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new I("ui-template-revert-not-applied",[this,e]);this._revertTemplateFromNode(e,this._revertData)}*getViews(){yield*function*e(t){if(t.children)for(const n of t.children)Ka(n)?yield n:Id(n)&&(yield*e(n))}(this)}static bind(e,t){return{to:(n,i)=>new H2({eventNameOrFunction:n,attribute:n,observable:e,emitter:t,callback:i}),if:(n,i,r)=>new sm({observable:e,emitter:t,attribute:n,valueIfTrue:i,callback:r})}}static extend(e,t){if(e._isRendered)throw new I("template-extend-render",[this,e]);gm(e,lm(cm(t)))}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new I("ui-template-wrong-syntax",this);return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(""),Ga(this.text)?this._bindToObservable({schema:this.text,updater:$2(t),data:e}):t.textContent=this.text.join(""),t}_renderAttributes(e){if(!this.attributes)return;const t=e.node,n=e.revertData;for(const i in this.attributes){const r=t.getAttribute(i),a=this.attributes[i];n&&(n.attributes[i]=r);const l=pm(a)?a[0].ns:null;if(Ga(a)){const d=pm(a)?a[0].value:a;n&&mm(i)&&d.unshift(r),this._bindToObservable({schema:d,updater:q2(t,i,l),data:e})}else if(i=="style"&&typeof a[0]!="string")this._renderStyleAttribute(a[0],e);else{n&&r&&mm(i)&&a.unshift(r);const d=a.map(h=>h&&h.value||h).reduce((h,p)=>h.concat(p),[]).reduce(um,"");pr(d)||t.setAttributeNS(l,i,d)}}}_renderStyleAttribute(e,t){const n=t.node;for(const i in e){const r=e[i];Ga(r)?this._bindToObservable({schema:[r],updater:W2(n,i),data:t}):n.style[i]=r}}_renderElementChildren(e){const t=e.node,n=e.intoFragment?document.createDocumentFragment():t,i=e.isApplying;let r=0;for(const a of this.children)if(Md(a)){if(!i){a.setParent(t);for(const l of a)n.appendChild(l.element)}}else if(Ka(a))i||(a.isRendered||a.render(),n.appendChild(a.element));else if(Go(a))n.appendChild(a);else if(i){const l={children:[],bindings:[],attributes:{}};e.revertData.children.push(l),a._renderNode({intoFragment:!1,node:n.childNodes[r++],isApplying:!0,revertData:l})}else n.appendChild(a.render());e.intoFragment&&t.appendChild(n)}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const n=this.eventListeners[t].map(i=>{const[r,a]=t.split("@");return i.activateDomEventListener(r,a,e)});e.revertData&&e.revertData.bindings.push(n)}}_bindToObservable({schema:e,updater:t,data:n}){const i=n.revertData;am(e,t,n);const r=e.filter(a=>!pr(a)).filter(a=>a.observable).map(a=>a.activateAttributeListener(e,t,n));i&&i.bindings.push(r)}_revertTemplateFromNode(e,t){for(const i of t.bindings)for(const r of i)r();if(t.text)return void(e.textContent=t.text);const n=e;for(const i in t.attributes){const r=t.attributes[i];r===null?n.removeAttribute(i):n.setAttribute(i,r)}for(let i=0;i<t.children.length;++i)this._revertTemplateFromNode(n.childNodes[i],t.children[i])}}class _s{constructor(e){this.attribute=e.attribute,this.observable=e.observable,this.emitter=e.emitter,this.callback=e.callback}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,n){const i=()=>am(e,t,n);return this.emitter.listenTo(this.observable,`change:${this.attribute}`,i),()=>{this.emitter.stopListening(this.observable,`change:${this.attribute}`,i)}}}class H2 extends _s{constructor(e){super(e),this.eventNameOrFunction=e.eventNameOrFunction}activateDomEventListener(e,t,n){const i=(r,a)=>{t&&!a.target.matches(t)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(a):this.observable.fire(this.eventNameOrFunction,a))};return this.emitter.listenTo(n.node,e,i),()=>{this.emitter.stopListening(n.node,e,i)}}}class sm extends _s{constructor(e){super(e),this.valueIfTrue=e.valueIfTrue}getValue(e){return!pr(super.getValue(e))&&(this.valueIfTrue||!0)}}function Ga(o){return!!o&&(o.value&&(o=o.value),Array.isArray(o)?o.some(Ga):o instanceof _s)}function am(o,e,{node:t}){const n=function(r,a){return r.map(l=>l instanceof _s?l.getValue(a):l)}(o,t);let i;i=o.length==1&&o[0]instanceof sm?n[0]:n.reduce(um,""),pr(i)?e.remove():e.set(i)}function $2(o){return{set(e){o.textContent=e},remove(){o.textContent=""}}}function q2(o,e,t){return{set(n){o.setAttributeNS(t,e,n)},remove(){o.removeAttributeNS(t,e)}}}function W2(o,e){return{set(t){o.style[e]=t},remove(){o.style[e]=null}}}function cm(o){return Ad(o,e=>{if(e&&(e instanceof _s||Id(e)||Ka(e)||Md(e)))return e})}function lm(o){if(typeof o=="string"?o=function(e){return{text:[e]}}(o):o.text&&function(e){e.text=xt(e.text)}(o),o.on&&(o.eventListeners=function(e){for(const t in e)dm(e,t);return e}(o.on),delete o.on),!o.text){o.attributes&&function(t){for(const n in t)t[n].value&&(t[n].value=xt(t[n].value)),dm(t,n)}(o.attributes);const e=[];if(o.children)if(Md(o.children))e.push(o.children);else for(const t of o.children)Id(t)||Ka(t)||Go(t)?e.push(t):e.push(new Zn(t));o.children=e}return o}function dm(o,e){o[e]=xt(o[e])}function um(o,e){return pr(e)?o:pr(o)?e:`${o} ${e}`}function hm(o,e){for(const t in e)o[t]?o[t].push(...e[t]):o[t]=e[t]}function gm(o,e){if(e.attributes&&(o.attributes||(o.attributes={}),hm(o.attributes,e.attributes)),e.eventListeners&&(o.eventListeners||(o.eventListeners={}),hm(o.eventListeners,e.eventListeners)),e.text&&o.text.push(...e.text),e.children&&e.children.length){if(o.children.length!=e.children.length)throw new I("ui-template-extend-children-mismatch",o);let t=0;for(const n of e.children)gm(o.children[t++],n)}}function pr(o){return!o&&o!==0}function Ka(o){return o instanceof Re}function Id(o){return o instanceof Zn}function Md(o){return o instanceof zn}function pm(o){return Le(o[0])&&o[0].ns}function mm(o){return o=="class"||o=="style"}var G2=m(2591),xe=m.n(G2),fm=m(7676),K2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};xe()(fm.A,K2),fm.A.locals;class Re extends Rn(R()){constructor(e){super(),this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new Qn,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(t,n)=>{n.locale=e,n.t=e&&e.t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Zn.bind(this,this)}createCollection(e){const t=new zn(e);return this._viewCollections.add(t),t}registerChild(e){oe(e)||(e=[e]);for(const t of e)this._unboundChildren.add(t)}deregisterChild(e){oe(e)||(e=[e]);for(const t of e)this._unboundChildren.remove(t)}setTemplate(e){this.template=new Zn(e)}extendTemplate(e){Zn.extend(this.template,e)}render(){if(this.isRendered)throw new I("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(e=>e.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}function Ya({emitter:o,activator:e,callback:t,contextElements:n}){o.listenTo(document,"mousedown",(i,r)=>{if(!e())return;const a=typeof r.composedPath=="function"?r.composedPath():[],l=typeof n=="function"?n():n;for(const d of l)if(d.contains(r.target)||a.includes(d))return;t()})}function Bd(o){return class extends o{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...e){super(...e),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function Qa({view:o}){o.listenTo(o.element,"submit",(e,t)=>{t.preventDefault(),o.fire("submit")},{useCapture:!0})}function Y2({keystrokeHandler:o,focusTracker:e,gridItems:t,numberOfColumns:n,uiLanguageDirection:i}){const r=typeof n=="number"?()=>n:n;function a(h){return p=>{const k=t.find(S=>S.element===e.focusedElement),C=t.getIndex(k),D=h(C,t);t.get(D).focus(),p.stopPropagation(),p.preventDefault()}}function l(h,p){return h===p-1?0:h+1}function d(h,p){return h===0?p-1:h-1}o.set("arrowright",a((h,p)=>i==="rtl"?d(h,p.length):l(h,p.length))),o.set("arrowleft",a((h,p)=>i==="rtl"?l(h,p.length):d(h,p.length))),o.set("arrowup",a((h,p)=>{let k=h-r();return k<0&&(k=h+r()*Math.floor(p.length/r()),k>p.length-1&&(k-=r())),k})),o.set("arrowdown",a((h,p)=>{let k=h+r();return k>p.length-1&&(k=h%r()),k}))}class ke extends R(){constructor(e){super(),this._disableStack=new Set,this.editor=e,this.set("isEnabled",!0)}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",km,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",km),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function km(o){o.return=!1,o.stop()}class Qe extends R(){constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(e,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",t=>{if(!this.affectsData)return;const n=e.model.document.selection,i=n.getFirstPosition().root.rootName!="$graveyard"&&e.model.canEditAt(n);(e.isReadOnly||this._isEnabledBasedOnSelection&&!i)&&(t.return=!1,t.stop())},{priority:"highest"}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",bm,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",bm),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function bm(o){o.return=!1,o.stop()}class _m extends Qe{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){q(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}class wm extends me(){constructor(e,t=[],n=[]){super(),this._plugins=new Map,this._context=e,this._availablePlugins=new Map;for(const i of t)i.pluginName&&this._availablePlugins.set(i.pluginName,i);this._contextPlugins=new Map;for(const[i,r]of n)this._contextPlugins.set(i,r),this._contextPlugins.set(r,i),i.pluginName&&this._availablePlugins.set(i.pluginName,i)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new I("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const i=this,r=this._context;(function S(T,B=new Set){T.forEach(L=>{d(L)&&(B.has(L)||(B.add(L),L.pluginName&&!i._availablePlugins.has(L.pluginName)&&i._availablePlugins.set(L.pluginName,L),L.requires&&S(L.requires,B)))})})(e),C(e);const a=[...function S(T,B=new Set){return T.map(L=>d(L)?L:i._availablePlugins.get(L)).reduce((L,$)=>B.has($)?L:(B.add($),$.requires&&(C($.requires,$),S($.requires,B).forEach(Q=>L.add(Q))),L.add($)),new Set)}(e.filter(S=>!p(S,t)))];(function(S,T){for(const B of T){if(typeof B!="function")throw new I("plugincollection-replace-plugin-invalid-type",null,{pluginItem:B});const L=B.pluginName;if(!L)throw new I("plugincollection-replace-plugin-missing-name",null,{pluginItem:B});if(B.requires&&B.requires.length)throw new I("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:L});const $=i._availablePlugins.get(L);if(!$)throw new I("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:L});const Q=S.indexOf($);if(Q===-1){if(i._contextPlugins.has($))return;throw new I("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:L})}if($.requires&&$.requires.length)throw new I("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:L});S.splice(Q,1,B),i._availablePlugins.set(L,B)}})(a,n);const l=a.map(S=>{let T=i._contextPlugins.get(S);return T=T||new S(r),i._add(S,T),T});return D(l,"init").then(()=>D(l,"afterInit")).then(()=>l);function d(S){return typeof S=="function"}function h(S){return d(S)&&!!S.isContextPlugin}function p(S,T){return T.some(B=>B===S||k(S)===B||k(B)===S)}function k(S){return d(S)?S.pluginName||S.name:S}function C(S,T=null){S.map(B=>d(B)?B:i._availablePlugins.get(B)||B).forEach(B=>{(function(L,$){if(!d(L))throw $?new I("plugincollection-soft-required",r,{missingPlugin:L,requiredBy:k($)}):new I("plugincollection-plugin-not-found",r,{plugin:L})})(B,T),function(L,$){if(h($)&&!h(L))throw new I("plugincollection-context-required",r,{plugin:k(L),requiredBy:k($)})}(B,T),function(L,$){if($&&p(L,t))throw new I("plugincollection-required",r,{plugin:k(L),requiredBy:k($)})}(B,T)})}function D(S,T){return S.reduce((B,L)=>L[T]?i._contextPlugins.has(L)?B:B.then(L[T].bind(L)):B,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new I("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}var Am=Object.getOwnPropertySymbols,Q2=Object.prototype.hasOwnProperty,Z2=Object.prototype.propertyIsEnumerable;class Cm{constructor(e){this._contextOwner=null;const t=e||{},{translations:n}=t,i=((l,d)=>{var h={};for(var p in l)Q2.call(l,p)&&d.indexOf(p)<0&&(h[p]=l[p]);if(l!=null&&Am)for(var p of Am(l))d.indexOf(p)<0&&Z2.call(l,p)&&(h[p]=l[p]);return h})(t,["translations"]);this.config=new Pp(i,this.constructor.defaultConfig);const r=this.constructor.builtinPlugins;this.config.define("plugins",r),this.plugins=new wm(this,r);const a=this.config.get("language")||{};this.locale=new V2({uiLanguage:typeof a=="string"?a:a.ui,contentLanguage:this.config.get("language.content"),translations:n}),this.t=this.locale.t,this.editors=new Qn}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new I("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new I("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new I("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class Za extends R(){constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}class J2 extends cn{constructor(e){super(),this.editor=e}set(e,t,n={}){if(typeof t=="string"){const i=t;t=(r,a)=>{this.editor.execute(i),a()}}super.set(e,t,n)}}var vm=m(4098),X2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};xe()(vm.A,X2),vm.A.locals;const Ja=new WeakMap;let ym=!1;function xm({view:o,element:e,text:t,isDirectHost:n=!0,keepOnFocus:i=!1}){const r=o.document;function a(l){Ja.get(r).set(e,{text:l,isDirectHost:n,keepOnFocus:i,hostElement:n?e:null}),o.change(d=>Pd(r,d))}Ja.has(r)||(Ja.set(r,new Map),r.registerPostFixer(l=>Pd(r,l)),r.on("change:isComposing",()=>{o.change(l=>Pd(r,l))},{priority:"high"})),e.is("editableElement")&&e.on("change:placeholder",(l,d,h)=>{a(h)}),e.placeholder?a(e.placeholder):t&&a(t),t&&function(){ym||V("enableplaceholder-deprecated-text-option"),ym=!0}()}function eD(o,e){return!e.hasClass("ck-placeholder")&&(o.addClass("ck-placeholder",e),!0)}function tD(o,e){return!!e.hasClass("ck-placeholder")&&(o.removeClass("ck-placeholder",e),!0)}function nD(o,e){if(!o.isAttached()||Array.from(o.getChildren()).some(i=>!i.is("uiElement")))return!1;const t=o.document,n=t.selection.anchor;return(!t.isComposing||!n||n.parent!==o)&&(!!e||!t.isFocused||!!n&&n.parent!==o)}function Pd(o,e){const t=Ja.get(o),n=[];let i=!1;for(const[r,a]of t)a.isDirectHost&&(n.push(r),Em(e,r,a)&&(i=!0));for(const[r,a]of t){if(a.isDirectHost)continue;const l=oD(r);l&&(n.includes(l)||(a.hostElement=l,Em(e,r,a)&&(i=!0)))}return i}function Em(o,e,t){const{text:n,isDirectHost:i,hostElement:r}=t;let a=!1;return r.getAttribute("data-placeholder")!==n&&(o.setAttribute("data-placeholder",n,r),a=!0),(i||e.childCount==1)&&nD(r,t.keepOnFocus)?eD(o,r)&&(a=!0):tD(o,r)&&(a=!0),a}function oD(o){if(o.childCount){const e=o.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}class Di{is(){throw new Error("is() method is abstract")}}const Dm=function(o){return wd(o,4)};class Si extends me(Di){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new I("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),i=e.getAncestors(t);let r=0;for(;n[r]==i[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),i=_e(t,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return t[i]<n[i]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=Dm(this);return delete e.parent,e}}Si.prototype.is=function(o){return o==="node"||o==="view:node"};class _t extends Si{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof _t&&(this===e||this.data===e.data)}_clone(){return new _t(this.document,this.data)}}_t.prototype.is=function(o){return o==="$text"||o==="view:$text"||o==="text"||o==="view:text"||o==="node"||o==="view:node"};class go extends Di{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.data.length)throw new I("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new I("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}go.prototype.is=function(o){return o==="$textProxy"||o==="view:$textProxy"||o==="textProxy"||o==="view:textProxy"};class po{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const i=Sm(t,n);if(i)return{element:t,pattern:n,match:i}}return null}matchAll(...e){const t=[];for(const n of e)for(const i of this._patterns){const r=Sm(n,i);r&&t.push({element:n,pattern:i,match:r})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function Sm(o,e){if(typeof e=="function")return e(o);const t={};return e.name&&(t.name=function(n,i){return n instanceof RegExp?!!i.match(n):n===i}(e.name,o.name),!t.name)||e.attributes&&(t.attributes=function(n,i){const r=new Set(i.getAttributeKeys());return xn(n)?(n.style!==void 0&&V("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&V("matcher-pattern-deprecated-attributes-class-key",n)):(r.delete("style"),r.delete("class")),Nd(n,r,a=>i.getAttribute(a))}(e.attributes,o),!t.attributes)||e.classes&&(t.classes=function(n,i){return Nd(n,i.getClassNames(),()=>{})}(e.classes,o),!t.classes)||e.styles&&(t.styles=function(n,i){return Nd(n,i.getStyleNames(!0),r=>i.getStyle(r))}(e.styles,o),!t.styles)?null:t}function Nd(o,e,t){const n=function(a){return Array.isArray(a)?a.map(l=>xn(l)?(l.key!==void 0&&l.value!==void 0||V("matcher-pattern-missing-key-or-value",l),[l.key,l.value]):[l,!0]):xn(a)?Object.entries(a):[[a,!0]]}(o),i=Array.from(e),r=[];if(n.forEach(([a,l])=>{i.forEach(d=>{(function(h,p){return h===!0||h===p||h instanceof RegExp&&p.match(h)})(a,d)&&function(h,p,k){if(h===!0)return!0;const C=k(p);return h===C||h instanceof RegExp&&!!String(C).match(h)}(l,d,t)&&r.push(d)})}),n.length&&!(r.length<n.length))return r}const Xa=function(o){return typeof o=="symbol"||Pt(o)&&Yn(o)=="[object Symbol]"};var iD=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,rD=/^\w*$/;const Od=function(o,e){if(yt(o))return!1;var t=typeof o;return!(t!="number"&&t!="symbol"&&t!="boolean"&&o!=null&&!Xa(o))||rD.test(o)||!iD.test(o)||e!=null&&o in Object(e)};function Ld(o,e){if(typeof o!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var n=arguments,i=e?e.apply(this,n):n[0],r=t.cache;if(r.has(i))return r.get(i);var a=o.apply(this,n);return t.cache=r.set(i,a)||r,a};return t.cache=new(Ld.Cache||Oa),t}Ld.Cache=Oa;const sD=Ld,aD=function(o){var e=sD(o,function(n){return t.size===500&&t.clear(),n}),t=e.cache;return e};var cD=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,lD=/\\(\\)?/g,dD=aD(function(o){var e=[];return o.charCodeAt(0)===46&&e.push(""),o.replace(cD,function(t,n,i,r){e.push(i?r.replace(lD,"$1"):n||t)}),e});const uD=dD,hD=function(o,e){for(var t=-1,n=o==null?0:o.length,i=Array(n);++t<n;)i[t]=e(o[t],t,o);return i};var Tm=Z?Z.prototype:void 0,Im=Tm?Tm.toString:void 0;const gD=function o(e){if(typeof e=="string")return e;if(yt(e))return hD(e,o)+"";if(Xa(e))return Im?Im.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},Rd=function(o){return o==null?"":gD(o)},ec=function(o,e){return yt(o)?o:Od(o,e)?[o]:uD(Rd(o))},pD=function(o){var e=o==null?0:o.length;return e?o[e-1]:void 0},mr=function(o){if(typeof o=="string"||Xa(o))return o;var e=o+"";return e=="0"&&1/o==-1/0?"-0":e},zd=function(o,e){for(var t=0,n=(e=ec(e,o)).length;o!=null&&t<n;)o=o[mr(e[t++])];return t&&t==n?o:void 0},Mm=function(o,e,t){var n=-1,i=o.length;e<0&&(e=-e>i?0:i+e),(t=t>i?i:t)<0&&(t+=i),i=e>t?0:t-e>>>0,e>>>=0;for(var r=Array(i);++n<i;)r[n]=o[n+e];return r},mD=function(o,e){return e.length<2?o:zd(o,Mm(e,0,-1))},fD=function(o,e){return e=ec(e,o),(o=mD(o,e))==null||delete o[mr(pD(e))]},kD=function(o,e){return o==null||fD(o,e)},ws=function(o,e,t){var n=o==null?void 0:zd(o,e);return n===void 0?t:n},bD=function(o,e,t,n){if(!Le(o))return o;for(var i=-1,r=(e=ec(e,o)).length,a=r-1,l=o;l!=null&&++i<r;){var d=mr(e[i]),h=t;if(d==="__proto__"||d==="constructor"||d==="prototype")return o;if(i!=a){var p=l[d];(h=void 0)==void 0&&(h=Le(p)?p:ja(e[i+1])?[]:{})}ad(l,d,h),l=l[d]}return o},_D=function(o,e,t){return o==null?o:bD(o,e,t)};class jd{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){return!Object.entries(this._styles).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=function(n){let i=null,r=0,a=0,l=null;const d=new Map;if(n==="")return d;n.charAt(n.length-1)!=";"&&(n+=";");for(let h=0;h<n.length;h++){const p=n.charAt(h);if(i===null)switch(p){case":":l||(l=n.substr(r,h-r),a=h+1);break;case'"':case"'":i=p;break;case";":{const k=n.substr(a,h-a);l&&d.set(l.trim(),k.trim()),l=null,r=h+1;break}}else p===i&&(i=null)}return d}(e);for(const[n,i]of t)this._styleProcessor.toNormalizedForm(n,i,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)}set(e,t){if(Le(e))for(const[n,i]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,i,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=Fd(e);kD(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this.getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!Le(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this.getStylesEntries().map(([t])=>t)}clear(){this._styles={}}getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const n=t.splice(0,t.length-1).join("."),i=ws(this._styles,n);i&&!Object.keys(i).length&&this.remove(n)}}class wD{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(Le(t))Vd(n,Fd(e),t);else if(this._normalizers.has(e)){const i=this._normalizers.get(e),{path:r,value:a}=i(t);Vd(n,r,a)}else Vd(n,e,t)}getNormalized(e,t){if(!e)return Ed({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return ws(t,n);const i=n(e,t);if(i)return i}return ws(t,Fd(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(i=>{const r=this.getNormalized(i,e);return r&&typeof r=="object"?Object.keys(r).length:r}),n=new Set([...t,...Object.keys(e)]);return Array.from(n)}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function Fd(o){return o.replace("-",".")}function Vd(o,e,t){let n=t;Le(t)&&(n=Ed({},ws(o,e),t)),_D(o,e,n)}class En extends Si{constructor(e,t,n,i){if(super(e),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=t,this._attrs=function(r){const a=ho(r);for(const[l,d]of a)d===null?a.delete(l):typeof d!="string"&&a.set(l,String(d));return a}(n),this._children=[],i&&this._insertChild(0,i),this._classes=new Set,this._attrs.has("class")){const r=this._attrs.get("class");Bm(this._classes,r),this._attrs.delete("class")}this._styles=new jd(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof En))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new po(...e);let n=this.parent;for(;n&&!n.is("documentFragment");){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(i=>`${i[0]}="${i[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const i of this.getChildren())t.push(i._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const i=function(r,a){return typeof a=="string"?[new _t(r,a)]:(oe(a)||(a=[a]),Array.from(a).map(l=>typeof l=="string"?new _t(r,l):l instanceof go?new _t(r,l.data):l))}(this.document,t);for(const r of i)r.parent!==null&&r._remove(),r.parent=this,r.document=this.document,this._children.splice(e,0,r),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){const n=String(t);this._fireChange("attributes",this),e=="class"?Bm(this._classes,n):e=="style"?this._styles.setTo(n):this._attrs.set(e,n)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of xt(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of xt(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),typeof e!="string"?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of xt(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function Bm(o,e){const t=e.split(/\s+/);o.clear(),t.forEach(n=>o.add(n))}En.prototype.is=function(o,e){return e?e===this.name&&(o==="element"||o==="view:element"):o==="element"||o==="view:element"||o==="node"||o==="view:node"};class As extends En{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=AD}}function AD(){const o=[...this.getChildren()],e=o[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of o)if(!t.is("uiElement"))return null;return this.childCount}As.prototype.is=function(o,e){return e?e===this.name&&(o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class tc extends R(As){constructor(e,t,n,i){super(e,t,n,i),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("placeholder",void 0),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",r=>r&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}destroy(){this.stopListening()}}tc.prototype.is=function(o,e){return e?e===this.name&&(o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};const Pm=Symbol("rootName");class Nm extends tc{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(Pm)}set rootName(e){this._setCustomProperty(Pm,e)}set _name(e){this.name=e}}Nm.prototype.is=function(o,e){return e?e===this.name&&(o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Ti{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new I("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new I("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this._position=De._createAt(e.startPosition):this._position=De._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(e){let t,n;do n=this.position,t=this.next();while(!t.done&&e(t.value));t.done||(this._position=n)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let i;if(n instanceof _t){if(e.isAtEnd)return this._position=De._createAfter(n),this._next();i=n.data[e.offset]}else i=n.getChild(e.offset);if(i instanceof En){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(e))return{done:!0,value:void 0};e.offset++}else e=new De(i,0);return this._position=e,this._formatReturnValue("elementStart",i,t,e,1)}if(i instanceof _t){if(this.singleCharacters)return e=new De(i,0),this._position=e,this._next();let r,a=i.data.length;return i==this._boundaryEndParent?(a=this.boundaries.end.offset,r=new go(i,0,a),e=De._createAfter(r)):(r=new go(i,0,i.data.length),e.offset++),this._position=e,this._formatReturnValue("text",r,t,e,a)}if(typeof i=="string"){let r;this.singleCharacters?r=1:r=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const a=new go(n,e.offset,r);return e.offset+=r,this._position=e,this._formatReturnValue("text",a,t,e,r)}return e=De._createAfter(n),this._position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let i;if(n instanceof _t){if(e.isAtStart)return this._position=De._createBefore(n),this._previous();i=n.data[e.offset-1]}else i=n.getChild(e.offset-1);if(i instanceof En)return this.shallow?(e.offset--,this._position=e,this._formatReturnValue("elementStart",i,t,e,1)):(e=new De(i,i.childCount),this._position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",i,t,e));if(i instanceof _t){if(this.singleCharacters)return e=new De(i,i.data.length),this._position=e,this._previous();let r,a=i.data.length;if(i==this._boundaryStartParent){const l=this.boundaries.start.offset;r=new go(i,l,i.data.length-l),a=r.data.length,e=De._createBefore(r)}else r=new go(i,0,i.data.length),e.offset--;return this._position=e,this._formatReturnValue("text",r,t,e,a)}if(typeof i=="string"){let r;if(this.singleCharacters)r=1;else{const l=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=e.offset-l}e.offset-=r;const a=new go(n,e.offset,r);return this._position=e,this._formatReturnValue("text",a,t,e,r)}return e=De._createBefore(n),this._position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,i,r){return t instanceof go&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=De._createAfter(t.textNode):(i=De._createAfter(t.textNode),this._position=i)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=De._createBefore(t.textNode):(i=De._createBefore(t.textNode),this._position=i))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:i,length:r}}}}class De extends Di{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof tc);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=De._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new Ti(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let i=0;for(;t[i]==n[i]&&t[i];)i++;return i===0?null:t[i-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const i=_e(t,n);switch(i){case"prefix":return"before";case"extension":return"after";default:return t[i]<n[i]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new Ti(e)}clone(){return new De(this.parent,this.offset)}static _createAt(e,t){if(e instanceof De)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new I("view-createpositionat-offset-required",n)}return new De(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new De(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new I("view-position-after-root",e,{root:e});return new De(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new De(e.textNode,e.offsetInText);if(!e.parent)throw new I("view-position-before-root",e,{root:e});return new De(e.parent,e.index)}}De.prototype.is=function(o){return o==="position"||o==="view:position"};class Ue extends Di{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new Ti({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(nc,{direction:"backward"}),t=this.end.getLastMatchingPosition(nc);return e.parent.is("$text")&&e.isAtStart&&(e=De._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=De._createAfter(t.parent)),new Ue(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(nc);if(e.isAfter(this.end)||e.isEqual(this.end))return new Ue(e,e);let t=this.end.getLastMatchingPosition(nc,{direction:"backward"});const n=e.nodeAfter,i=t.nodeBefore;return n&&n.is("$text")&&(e=new De(n,0)),i&&i.is("$text")&&(t=new De(i,i.data.length)),new Ue(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),i=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&i}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new Ue(this.start,e.start)),this.containsPosition(e.end)&&t.push(new Ue(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new Ue(t,n)}return null}getWalker(e={}){return e.boundaries=this,new Ti(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new Ue(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new Ti(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new Ti(e);yield t.position;for(const n of t)yield n.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,i){return new this(new De(e,t),new De(n,i))}static _createFromPositionAndShift(e,t){const n=e,i=e.getShiftedBy(t);return t>0?new this(n,i):new this(i,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(De._createBefore(e),t)}}function nc(o){return!(!o.item.is("attributeElement")&&!o.item.is("uiElement"))}Ue.prototype.is=function(o){return o==="range"||o==="view:range"};class Jn extends me(Di){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const i of e._ranges)if(t.isEqual(i)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=we(this.getRanges());if(t!=we(e.getRanges()))return!1;if(t==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let i=!1;for(let r of e.getRanges())if(r=r.getTrimmed(),n.start.isEqual(r.start)&&n.end.isEqual(r.end)){i=!0;break}if(!i)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,n,i]=e;if(typeof n=="object"&&(i=n,n=void 0),t===null)this._setRanges([]),this._setFakeOptions(i);else if(t instanceof Jn||t instanceof Ud)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof Ue)this._setRanges([t],i&&i.backward),this._setFakeOptions(i);else if(t instanceof De)this._setRanges([new Ue(t)]),this._setFakeOptions(i);else if(t instanceof Si){const r=!!i&&!!i.backward;let a;if(n===void 0)throw new I("view-selection-setto-required-second-parameter",this);a=n=="in"?Ue._createIn(t):n=="on"?Ue._createOn(t):new Ue(De._createAt(t,n)),this._setRanges([a],r),this._setFakeOptions(i)}else{if(!oe(t))throw new I("view-selection-setto-not-selectable",this);this._setRanges(t,i&&i.backward),this._setFakeOptions(i)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new I("view-selection-setfocus-no-ranges",this);const n=De._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.pop(),n.compareWith(i)=="before"?this._addRange(new Ue(n,i),!0):this._addRange(new Ue(i,n)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof Ue))throw new I("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new I("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new Ue(e.start,e.end))}}Jn.prototype.is=function(o){return o==="selection"||o==="view:selection"};class Ud extends me(Di){constructor(...e){super(),this._selection=new Jn,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}Ud.prototype.is=function(o){return o==="selection"||o=="documentSelection"||o=="view:selection"||o=="view:documentSelection"};class fr extends F{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const Hd=Symbol("bubbling contexts");function $d(o){return class extends o{fire(e,...t){try{const n=e instanceof F?e:new F(this,e),i=qd(this);if(!i.size)return;if(Cs(n,"capturing",this),kr(i,"$capture",n,...t))return n.return;const r=n.startRange||this.selection.getFirstRange(),a=r?r.getContainedElement():null,l=!!a&&!!Om(i,a);let d=a||function(h){if(!h)return null;const p=h.start.parent,k=h.end.parent,C=p.getPath(),D=k.getPath();return C.length>D.length?p:k}(r);if(Cs(n,"atTarget",d),!l){if(kr(i,"$text",n,...t))return n.return;Cs(n,"bubbling",d)}for(;d;){if(d.is("rootElement")){if(kr(i,"$root",n,...t))return n.return}else if(d.is("element")&&kr(i,d.name,n,...t))return n.return;if(kr(i,d,n,...t))return n.return;d=d.parent,Cs(n,"bubbling",d)}return Cs(n,"bubbling",this),kr(i,"$document",n,...t),n.return}catch(n){I.rethrowUnexpectedError(n,this)}}_addEventListener(e,t,n){const i=xt(n.context||"$document"),r=qd(this);for(const a of i){let l=r.get(a);l||(l=new(me()),r.set(a,l)),this.listenTo(l,e,t,n)}}_removeEventListener(e,t){const n=qd(this);for(const i of n.values())this.stopListening(i,e,t)}}}{const o=$d(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{$d[e]=o.prototype[e]})}function Cs(o,e,t){o instanceof fr&&(o._eventPhase=e,o._currentTarget=t)}function kr(o,e,t,...n){const i=typeof e=="string"?o.get(e):Om(o,e);return!!i&&(i.fire(t,...n),t.stop.called)}function Om(o,e){for(const[t,n]of o)if(typeof t=="function"&&t(e))return n;return null}function qd(o){return o[Hd]||(o[Hd]=new Map),o[Hd]}class oc extends $d(R()){constructor(e){super(),this._postFixers=new Set,this.selection=new Ud,this.roots=new Qn({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.forEach(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}class Ii extends En{constructor(e,t,n,i){super(e,t,n,i),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=CD}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new I("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function CD(){if(Wd(this))return null;let o=this.parent;for(;o&&o.is("attributeElement");){if(Wd(o)>1)return null;o=o.parent}return!o||Wd(o)>1?null:this.childCount}function Wd(o){return Array.from(o.getChildren()).filter(e=>!e.is("uiElement")).length}Ii.DEFAULT_PRIORITY=10,Ii.prototype.is=function(o,e){return e?e===this.name&&(o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"):o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Gd extends En{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=vD}_insertChild(e,t){if(t&&(t instanceof Si||Array.from(t).length>0))throw new I("view-emptyelement-cannot-add",[this,t]);return 0}}function vD(){return null}Gd.prototype.is=function(o,e){return e?e===this.name&&(o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"):o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class ic extends En{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=xD}_insertChild(e,t){if(t&&(t instanceof Si||Array.from(t).length>0))throw new I("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}function yD(o){o.document.on("arrowKey",(e,t)=>function(n,i,r){if(i.keyCode==ot.arrowright){const a=i.domTarget.ownerDocument.defaultView.getSelection(),l=a.rangeCount==1&&a.getRangeAt(0).collapsed;if(l||i.shiftKey){const d=a.focusNode,h=a.focusOffset,p=r.domPositionToView(d,h);if(p===null)return;let k=!1;const C=p.getLastMatchingPosition(D=>(D.item.is("uiElement")&&(k=!0),!(!D.item.is("uiElement")&&!D.item.is("attributeElement"))));if(k){const D=r.viewPositionToDom(C);l?a.collapse(D.parent,D.offset):a.extend(D.parent,D.offset)}}}}(0,t,o.domConverter),{priority:"low"})}function xD(){return null}ic.prototype.is=function(o,e){return e?e===this.name&&(o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"):o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Kd extends En{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=ED}_insertChild(e,t){if(t&&(t instanceof Si||Array.from(t).length>0))throw new I("view-rawelement-cannot-add",[this,t]);return 0}render(e,t){}}function ED(){return null}Kd.prototype.is=function(o,e){return e?e===this.name&&(o==="rawElement"||o==="view:rawElement"||o==="element"||o==="view:element"):o==="rawElement"||o==="view:rawElement"||o===this.name||o==="view:"+this.name||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Mi extends me(Di){constructor(e,t){super(),this._children=[],this._customProperties=new Map,this.document=e,t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}get getFillerOffset(){}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const i=function(r,a){return typeof a=="string"?[new _t(r,a)]:(oe(a)||(a=[a]),Array.from(a).map(l=>typeof l=="string"?new _t(r,l):l instanceof go?new _t(r,l.data):l))}(this.document,t);for(const r of i)r.parent!==null&&r._remove(),r.parent=this,this._children.splice(e,0,r),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}Mi.prototype.is=function(o){return o==="documentFragment"||o==="view:documentFragment"};class Lm{constructor(e){this._cloneGroups=new Map,this._slotFactory=null,this.document=e}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(e,t){this.document.selection._setFocus(e,t)}createDocumentFragment(e){return new Mi(this.document,e)}createText(e){return new _t(this.document,e)}createAttributeElement(e,t,n={}){const i=new Ii(this.document,e,t);return typeof n.priority=="number"&&(i._priority=n.priority),n.id&&(i._id=n.id),n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createContainerElement(e,t,n={},i={}){let r=null;xn(n)?i=n:r=n;const a=new As(this.document,e,t,r);return i.renderUnsafeAttributes&&a._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),a}createEditableElement(e,t,n={}){const i=new tc(this.document,e,t);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createEmptyElement(e,t,n={}){const i=new Gd(this.document,e,t);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createUIElement(e,t,n){const i=new ic(this.document,e,t);return n&&(i.render=n),i}createRawElement(e,t,n,i={}){const r=new Kd(this.document,e,t);return n&&(r.render=n),i.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),r}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){xn(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof De?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new I("view-writer-break-non-container-element",this.document);if(!t.parent)throw new I("view-writer-break-root",this.document);if(e.isAtStart)return De._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert(De._createAfter(t),n);const i=new Ue(e,De._createAt(t,"end")),r=new De(n,0);this.move(i,r)}return De._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const a=n.parent,l=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new De(a,l))}const i=n.getChild(t-1),r=n.getChild(t);if(!i||!r)return e;if(i.is("$text")&&r.is("$text"))return zm(i,r);if(i.is("attributeElement")&&r.is("attributeElement")&&i.isSimilar(r)){const a=i.childCount;return i._appendChild(r.getChildren()),r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new De(i,a))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!(t&&n&&t.is("containerElement")&&n.is("containerElement")))throw new I("view-writer-merge-containers-invalid-position",this.document);const i=t.getChild(t.childCount-1),r=i instanceof _t?De._createAt(i,"end"):De._createAt(t,"end");return this.move(Ue._createIn(n),De._createAt(t,"end")),this.remove(Ue._createOn(n)),r}insert(e,t){jm(t=oe(t)?[...t]:[t],this.document);const n=t.reduce((a,l)=>{const d=a[a.length-1],h=!l.is("uiElement");return d&&d.breakAttributes==h?d.nodes.push(l):a.push({breakAttributes:h,nodes:[l]}),a},[]);let i=null,r=e;for(const{nodes:a,breakAttributes:l}of n){const d=this._insertNodes(r,a,l);i||(i=d.start),r=d.end}return i?new Ue(i,r):new Ue(e)}remove(e){const t=e instanceof Ue?e:Ue._createOn(e);if(vs(t,this.document),t.isCollapsed)return new Mi(this.document);const{start:n,end:i}=this._breakAttributesRange(t,!0),r=n.parent,a=i.offset-n.offset,l=r._removeChildren(n.offset,a);for(const h of l)this._removeFromClonedElementsGroup(h);const d=this.mergeAttributes(n);return t.start=d,t.end=d.clone(),new Mi(this.document,l)}clear(e,t){vs(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const i of n){const r=i.item;let a;if(r.is("element")&&t.isSimilar(r))a=Ue._createOn(r);else if(!i.nextPosition.isAfter(e.start)&&r.is("$textProxy")){const l=r.getAncestors().find(d=>d.is("element")&&t.isSimilar(d));l&&(a=Ue._createIn(l))}a&&(a.end.isAfter(e.end)&&(a.end=e.end),a.start.isBefore(e.start)&&(a.start=e.start),this.remove(a))}}move(e,t){let n;if(t.isAfter(e.end)){const i=(t=this._breakAttributes(t,!0)).parent,r=i.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=i.childCount-r}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof Ii))throw new I("view-writer-wrap-invalid-attribute",this.document);if(vs(e,this.document),e.isCollapsed){let i=e.start;i.parent.is("element")&&(n=i.parent,!Array.from(n.getChildren()).some(a=>!a.is("uiElement")))&&(i=i.getLastMatchingPosition(a=>a.item.is("uiElement"))),i=this._wrapPosition(i,t);const r=this.document.selection;return r.isCollapsed&&r.getFirstPosition().isEqual(e.start)&&this.setSelection(i),new Ue(i)}return this._wrapRange(e,t);var n}unwrap(e,t){if(!(t instanceof Ii))throw new I("view-writer-unwrap-invalid-attribute",this.document);if(vs(e,this.document),e.isCollapsed)return e;const{start:n,end:i}=this._breakAttributesRange(e,!0),r=n.parent,a=this._unwrapChildren(r,n.offset,i.offset,t),l=this.mergeAttributes(a.start);l.isEqual(a.start)||a.end.offset--;const d=this.mergeAttributes(a.end);return new Ue(l,d)}rename(e,t){const n=new As(this.document,e,t.getAttributes());return this.insert(De._createAfter(t),n),this.move(Ue._createIn(t),De._createAt(n,0)),this.remove(Ue._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return De._createAt(e,t)}createPositionAfter(e){return De._createAfter(e)}createPositionBefore(e){return De._createBefore(e)}createRange(e,t){return new Ue(e,t)}createRangeOn(e){return Ue._createOn(e)}createRangeIn(e){return Ue._createIn(e)}createSelection(...e){return new Jn(...e)}createSlot(e="children"){if(!this._slotFactory)throw new I("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let i,r;if(i=n?Yd(e):e.parent.is("$text")?e.parent.parent:e.parent,!i)throw new I("view-writer-invalid-position-container",this.document);r=n?this._breakAttributes(e,!0):e.parent.is("$text")?Qd(e):e;const a=i._insertChild(r.offset,t);for(const p of t)this._addToClonedElementsGroup(p);const l=r.getShiftedBy(a),d=this.mergeAttributes(r);d.isEqual(r)||l.offset--;const h=this.mergeAttributes(l);return new Ue(d,h)}_wrapChildren(e,t,n,i){let r=t;const a=[];for(;r<n;){const d=e.getChild(r),h=d.is("$text"),p=d.is("attributeElement");if(p&&this._wrapAttributeElement(i,d))a.push(new De(e,r));else if(h||!p||DD(i,d)){const k=i._clone();d._remove(),k._appendChild(d),e._insertChild(r,k),this._addToClonedElementsGroup(k),a.push(new De(e,r))}else this._wrapChildren(d,0,d.childCount,i);r++}let l=0;for(const d of a)d.offset-=l,d.offset!=t&&(this.mergeAttributes(d).isEqual(d)||(l++,n--));return Ue._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,i){let r=t;const a=[];for(;r<n;){const d=e.getChild(r);if(d.is("attributeElement"))if(d.isSimilar(i)){const h=d.getChildren(),p=d.childCount;d._remove(),e._insertChild(r,h),this._removeFromClonedElementsGroup(d),a.push(new De(e,r),new De(e,r+p)),r+=p,n+=p-1}else this._unwrapAttributeElement(i,d)?(a.push(new De(e,r),new De(e,r+1)),r++):(this._unwrapChildren(d,0,d.childCount,i),r++);else r++}let l=0;for(const d of a)d.offset-=l,!(d.offset==t||d.offset==n)&&(this.mergeAttributes(d).isEqual(d)||(l++,n--));return Ue._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:i}=this._breakAttributesRange(e,!0),r=n.parent,a=this._wrapChildren(r,n.offset,i.offset,t),l=this.mergeAttributes(a.start);l.isEqual(a.start)||a.end.offset--;const d=this.mergeAttributes(a.end);return new Ue(l,d)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return Rm(e.clone());e.parent.is("$text")&&(e=Qd(e));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const i=new Ue(e,e.getShiftedBy(1));this.wrap(i,t);const r=new De(n.parent,n.index);n._remove();const a=r.nodeBefore,l=r.nodeAfter;return a instanceof _t&&l instanceof _t?zm(a,l):Rm(r)}_wrapAttributeElement(e,t){if(!Fm(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&(t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t));for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!Fm(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,i=e.end;if(vs(e,this.document),e.isCollapsed){const d=this._breakAttributes(e.start,t);return new Ue(d,d)}const r=this._breakAttributes(i,t),a=r.parent.childCount,l=this._breakAttributes(n,t);return r.offset+=r.parent.childCount-a,new Ue(l,r)}_breakAttributes(e,t=!1){const n=e.offset,i=e.parent;if(e.parent.is("emptyElement"))throw new I("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new I("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new I("view-writer-cannot-break-raw-element",this.document);if(!t&&i.is("$text")&&Zd(i.parent)||Zd(i))return e.clone();if(i.is("$text"))return this._breakAttributes(Qd(e),t);if(n==i.childCount){const r=new De(i.parent,i.index+1);return this._breakAttributes(r,t)}if(n===0){const r=new De(i.parent,i.index);return this._breakAttributes(r,t)}{const r=i.index+1,a=i._clone();i.parent._insertChild(r,a),this._addToClonedElementsGroup(a);const l=i.childCount-n,d=i._removeChildren(n,l);a._appendChild(d);const h=new De(i.parent,r);return this._breakAttributes(h,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const i of e.getChildren())this._addToClonedElementsGroup(i);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const i of e.getChildren())this._removeFromClonedElementsGroup(i);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function Yd(o){let e=o.parent;for(;!Zd(e);){if(!e)return;e=e.parent}return e}function DD(o,e){return o.priority<e.priority||!(o.priority>e.priority)&&o.getIdentity()<e.getIdentity()}function Rm(o){const e=o.nodeBefore;if(e&&e.is("$text"))return new De(e,e.data.length);const t=o.nodeAfter;return t&&t.is("$text")?new De(t,0):o}function Qd(o){if(o.offset==o.parent.data.length)return new De(o.parent.parent,o.parent.index+1);if(o.offset===0)return new De(o.parent.parent,o.parent.index);const e=o.parent.data.slice(o.offset);return o.parent._data=o.parent.data.slice(0,o.offset),o.parent.parent._insertChild(o.parent.index+1,new _t(o.root.document,e)),new De(o.parent.parent,o.parent.index+1)}function zm(o,e){const t=o.data.length;return o._data+=e.data,e._remove(),new De(o,t)}const SD=[_t,Ii,As,Gd,Kd,ic];function jm(o,e){for(const t of o){if(!SD.some(n=>t instanceof n))throw new I("view-writer-insert-invalid-node-type",e);t.is("$text")||jm(t.getChildren(),e)}}function Zd(o){return o&&(o.is("containerElement")||o.is("documentFragment"))}function vs(o,e){const t=Yd(o.start),n=Yd(o.end);if(!t||!n||t!==n)throw new I("view-writer-invalid-range-container",e)}function Fm(o,e){return o.id===null&&e.id===null}const Vm=o=>o.createTextNode(" "),Um=o=>{const e=o.createElement("span");return e.dataset.ckeFiller="true",e.innerText=" ",e},Hm=o=>{const e=o.createElement("br");return e.dataset.ckeFiller="true",e},Xn=7,ys="⁠".repeat(Xn);function Dn(o){return typeof o=="string"?o.substr(0,Xn)===ys:jt(o)&&o.data.substr(0,Xn)===ys}function br(o){return o.data.length==Xn&&Dn(o)}function $m(o){const e=typeof o=="string"?o:o.data;return Dn(o)?e.slice(Xn):e}function TD(o,e){if(e.keyCode==ot.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,i=t.getRangeAt(0).startOffset;Dn(n)&&i<=Xn&&t.collapse(n,0)}}}var qm=m(8264),ID={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};xe()(qm.A,ID),qm.A.locals;class MD extends R(){constructor(e,t){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=e,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),x.isBlink&&!x.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()})}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new I("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){if(this.isComposing&&!x.isAndroid)return;let e=null;const t=!(x.isBlink&&!x.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=De._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),i=n.parent.ownerDocument;Dn(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=Wm(i,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.domConverter._clearTemporaryCustomProperties(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.childNodes),i=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),r=this._diffNodeLists(n,i),a=this._findUpdateActions(r,n,i,BD);if(a.indexOf("update")!==-1){const l={equal:0,insert:0,delete:0};for(const d of a)if(d==="update"){const h=l.equal+l.insert,p=l.equal+l.delete,k=e.getChild(h);!k||k.is("uiElement")||k.is("rawElement")||this._updateElementMappings(k,n[p]),Gp(i[h]),l.equal++}else l[d]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?De._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&jt(t.parent)&&Dn(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!Dn(e))throw new I("view-renderer-filler-was-lost",this);br(e)?e.remove():e.data=e.data.substr(Xn),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(a){if(a.getAttribute("contenteditable")=="false")return!1;const l=a.findAncestor(d=>d.hasAttribute("contenteditable"));return!l||l.getAttribute("contenteditable")=="true"}(t))return!1;const i=e.nodeBefore,r=e.nodeAfter;return!(i instanceof _t||r instanceof _t)&&!!(n!==t.getFillerOffset()||i&&i.is("element","br"))&&(!x.isAndroid||!i&&!r)}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e);let i=this.domConverter.viewToDom(e).data;const r=t.inlineFillerPosition;r&&r.parent==e.parent&&r.offset==e.index&&(i=ys+i),Gm(n,i)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(r=>r.name),i=e.getAttributeKeys();for(const r of i)this.domConverter.setDomElementAttribute(t,r,e.getAttribute(r),e);for(const r of n)e.hasAttribute(r)||this.domConverter.removeDomElementAttribute(t,r)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;if(x.isAndroid){let k=null;for(const C of Array.from(n.childNodes)){if(k&&jt(k)&&jt(C)){n.normalize();break}k=C}}const i=t.inlineFillerPosition,r=n.childNodes,a=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));i&&i.parent===e&&Wm(n.ownerDocument,a,i.offset);const l=this._diffNodeLists(r,a),d=this._findUpdateActions(l,r,a,PD);let h=0;const p=new Set;for(const k of d)k==="delete"?(p.add(r[h]),Gp(r[h])):k!=="equal"&&k!=="update"||h++;h=0;for(const k of d)k==="insert"?(Hp(n,h,a[h]),h++):k==="update"?(Gm(r[h],a[h].data),h++):k==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(a[h])),h++);for(const k of p)k.parentNode||this.domConverter.unbindDomElement(k)}_diffNodeLists(e,t){return e=function(n,i){const r=Array.from(n);return r.length==0||!i||r[r.length-1]==i&&r.pop(),r}(e,this._fakeSelectionContainer),P(e,t,ND.bind(null,this.domConverter))}_findUpdateActions(e,t,n,i){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let r=[],a=[],l=[];const d={equal:0,insert:0,delete:0};for(const h of e)h==="insert"?l.push(n[d.equal+d.insert]):h==="delete"?a.push(t[d.equal+d.delete]):(r=r.concat(P(a,l,i).map(p=>p==="equal"?"update":p)),r.push("equal"),a=[],l=[]),d[h]++;return r.concat(P(a,l,i).map(h=>h==="equal"?"update":h))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(x.isBlink&&!x.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&x.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(a){const l=a.createElement("div");return l.className="ck-fake-selection-container",Object.assign(l.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),l.textContent=" ",l}(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;n.parentElement&&n.parentElement==e||e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const i=t.getSelection(),r=t.createRange();i.removeAllRanges(),r.selectNodeContents(n),i.addRange(r)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),i=this.domConverter.viewPositionToDom(this.selection.focus);t.setBaseAndExtent(n.parent,n.offset,i.parent,i.offset),x.isGecko&&function(r,a){let l=r.parent,d=r.offset;if(jt(l)&&br(l)&&(d=fs(l)+1,l=l.parentNode),l.nodeType!=Node.ELEMENT_NODE||d!=l.childNodes.length-1)return;const h=l.childNodes[d];h&&h.tagName=="BR"&&a.addRange(a.getRangeAt(0))}(i,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const n=e.activeElement,i=this.domConverter.mapDomToView(n);n&&i&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function Wm(o,e,t){const n=e instanceof Array?e:e.childNodes,i=n[t];if(jt(i))return i.data=ys+i.data,i;{const r=o.createTextNode(ys);return Array.isArray(e)?n.splice(t,0,r):Hp(e,t,r),r}}function BD(o,e){return Go(o)&&Go(e)&&!jt(o)&&!jt(e)&&!ks(o)&&!ks(e)&&o.tagName.toLowerCase()===e.tagName.toLowerCase()}function PD(o,e){return Go(o)&&Go(e)&&jt(o)&&jt(e)}function ND(o,e,t){return e===t||(jt(e)&&jt(t)?e.data===t.data:!(!o.isBlockFiller(e)||!o.isBlockFiller(t)))}function Gm(o,e){const t=o.data;if(t==e)return;const n=A(t,e);for(const i of n)i.type==="insert"?o.insertData(i.index,i.values.join("")):o.deleteData(i.index,i.howMany)}const OD=Hm(_.document),LD=Vm(_.document),RD=Um(_.document),rc="data-ck-unsafe-attribute-",Km="data-ck-unsafe-element";class sc{constructor(e,{blockFillerMode:t,renderingMode:n="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new po,this._inlineObjectElementMatcher=new po,this._elementsWithTemporaryCustomProperties=new Set,this.document=e,this.renderingMode=n,this.blockFillerMode=t||(n==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?_.document:_.document.implementation.createHTMLDocument("")}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new Jn(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of Array.from(e.children))this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const n=new DOMParser().parseFromString(t,"text/html"),i=n.createDocumentFragment(),r=n.body.childNodes;for(;r.length>0;)i.appendChild(r[0]);const a=n.createTreeWalker(i,NodeFilter.SHOW_ELEMENT),l=[];let d;for(;d=a.nextNode();)l.push(d);for(const h of l){for(const k of h.getAttributeNames())this.setDomElementAttribute(h,k,h.getAttribute(k));const p=h.tagName.toLowerCase();this._shouldRenameElement(p)&&(Zm(p),h.replaceWith(this._createReplacementDomElement(p,h)))}for(;e.firstChild;)e.firstChild.remove();e.append(i)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}{const n=e;if(this.mapViewToDom(n)){if(!n.getCustomProperty("editingPipeline:doNotReuseOnce"))return this.mapViewToDom(n);this._elementsWithTemporaryCustomProperties.add(n)}let i;if(n.is("documentFragment"))i=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(i,n);else{if(n.is("uiElement"))return i=n.name==="$comment"?this._domDocument.createComment(n.getCustomProperty("$rawContent")):n.render(this._domDocument,this),t.bind&&this.bindElements(i,n),i;this._shouldRenameElement(n.name)?(Zm(n.name),i=this._createReplacementDomElement(n.name)):i=n.hasAttribute("xmlns")?this._domDocument.createElementNS(n.getAttribute("xmlns"),n.name):this._domDocument.createElement(n.name),n.is("rawElement")&&n.render(i,this),t.bind&&this.bindElements(i,n);for(const r of n.getAttributeKeys())this.setDomElementAttribute(i,r,n.getAttribute(r),n)}if(t.withChildren!==!1)for(const r of this.viewChildrenToDom(n,t))i instanceof HTMLTemplateElement?i.content.appendChild(r):i.appendChild(r);return i}}setDomElementAttribute(e,t,n,i){const r=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||i&&i.shouldRenderUnsafeAttribute(t);r||V("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),function(a){try{_.document.createAttribute(a)}catch{return!1}return!0}(t)?(e.hasAttribute(t)&&!r?e.removeAttribute(t):e.hasAttribute(rc+t)&&r&&e.removeAttribute(rc+t),e.setAttribute(r?t:rc+t,n)):V("domconverter-invalid-attribute-detected",{domElement:e,key:t,value:n})}removeDomElementAttribute(e,t){t!=Km&&(e.removeAttribute(t),e.removeAttribute(rc+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let i=0;for(const r of e.getChildren()){n===i&&(yield this._getBlockFiller());const a=r.is("element")&&!!r.getCustomProperty("dataPipeline:transparentRendering")&&!Jt(r.getAttributes());a&&this.renderingMode=="data"?yield*this.viewChildrenToDom(r,t):(a&&V("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:r}),yield this.viewToDom(r,t)),i++}n===i&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),i=this._domDocument.createRange();return i.setStart(t.parent,t.offset),i.setEnd(n.parent,n.offset),i}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let i=e.offset;return Dn(n)&&(i+=Xn),{parent:n,offset:i}}{let n,i,r;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;r=n.childNodes[0]}else{const a=e.nodeBefore;if(i=a.is("$text")?this.findCorrespondingDomText(a):this.mapViewToDom(a),!i)return null;n=i.parentNode,r=i.nextSibling}return jt(r)&&Dn(r)?{parent:r,offset:Xn}:{parent:n,offset:i?fs(i)+1:0}}}domToView(e,t={}){const n=[],i=this._domToView(e,t,n),r=i.next().value;return r?(i.next(),this._processDomInlineNodes(null,n,t),r.is("$text")&&r.data.length==0?null:r):null}*domChildrenToView(e,t={},n=[]){let i=[];i=e instanceof HTMLTemplateElement?[...e.content.childNodes]:[...e.childNodes];for(let r=0;r<i.length;r++){const a=i[r],l=this._domToView(a,t,n),d=l.next().value;d!==null&&(this._isBlockViewElement(d)&&this._processDomInlineNodes(e,n,t),yield d,l.next())}this._processDomInlineNodes(e,n,t)}domSelectionToView(e){if(function(i){if(!x.isGecko||!i.rangeCount)return!1;const r=i.getRangeAt(0).startContainer;try{Object.prototype.toString.call(r)}catch{return!0}return!1}(e))return new Jn([]);if(e.rangeCount===1){let i=e.getRangeAt(0).startContainer;jt(i)&&(i=i.parentNode);const r=this.fakeSelectionToView(i);if(r)return r}const t=this.isDomSelectionBackward(e),n=[];for(let i=0;i<e.rangeCount;i++){const r=e.getRangeAt(i),a=this.domRangeToView(r);a&&n.push(a)}return new Jn(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new Ue(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,fs(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return De._createBefore(n);if(jt(e)){if(br(e))return this.domPositionToView(e.parentNode,fs(e));const i=this.findCorrespondingViewText(e);let r=t;return i?(Dn(e)&&(r-=Xn,r=r<0?0:r),new De(i,r)):null}if(t===0){const i=this.mapDomToView(e);if(i)return new De(i,0)}else{const i=e.childNodes[t-1];if(jt(i)&&br(i)||i&&this.isBlockFiller(i))return this.domPositionToView(i.parentNode,fs(i));const r=jt(i)?this.findCorrespondingViewText(i):this.mapDomToView(i);if(r&&r.parent)return new De(r.parent,r.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(br(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const i=this.mapDomToView(n);if(i){const r=i.nextSibling;return r instanceof _t?r:null}}else{const i=this.mapDomToView(e.parentNode);if(i){const r=i.getChild(0);return r instanceof _t?r:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:i}=_.window,r=[];Ym(t,a=>{const{scrollLeft:l,scrollTop:d}=a;r.push([l,d])}),t.focus(),Ym(t,a=>{const[l,d]=r.shift();a.scrollLeft=l,a.scrollTop=d}),_.window.scrollTo(n,i)}}_clearDomSelection(){const e=this.mapViewToDom(this.document.selection.editableElement);if(!e)return;const t=e.ownerDocument.defaultView.getSelection(),n=this.domSelectionToView(t);n&&n.rangeCount>0&&t.removeAllRanges()}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(OD):!(e.tagName!=="BR"||!Qm(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(RD)||function(t,n){return t.isEqualNode(LD)&&Qm(t,n)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=function(n){const i=[];let r=n;for(;r&&r.nodeType!=Node.DOCUMENT_NODE;)i.unshift(r),r=r.parentNode;return i}(e);for(t.pop();t.length;){const n=t.pop(),i=this._domToViewMapping.get(n);if(i&&(i.is("uiElement")||i.is("rawElement")))return i}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}registerInlineObjectMatcher(e){this._inlineObjectElementMatcher.add(e)}_clearTemporaryCustomProperties(){for(const e of this._elementsWithTemporaryCustomProperties)e._removeCustomProperty("editingPipeline:doNotReuseOnce");this._elementsWithTemporaryCustomProperties.clear()}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return Vm(this._domDocument);case"markedNbsp":return Um(this._domDocument);case"br":return Hm(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(jt(e)&&Dn(e)&&t<Xn||this.isElement(e)&&Dn(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!n||!n.is("uiElement")&&!n.is("rawElement")}*_domToView(e,t,n){if(this.isBlockFiller(e))return null;const i=this.getHostViewElement(e);if(i)return i;if(ks(e)&&t.skipComments)return null;if(jt(e)){if(br(e))return null;{const r=e.data;if(r==="")return null;const a=new _t(this.document,r);return n.push(a),a}}{let r=this.mapDomToView(e);if(r)return this._isInlineObjectElement(r)&&n.push(r),r;if(this.isDocumentFragment(e))r=new Mi(this.document),t.bind&&this.bindDocumentFragments(e,r);else{r=this._createViewElement(e,t),t.bind&&this.bindElements(e,r);const l=e.attributes;if(l)for(let d=l.length,h=0;h<d;h++)r._setAttribute(l[h].name,l[h].value);if(this._isViewElementWithRawContent(r,t))return r._setCustomProperty("$rawContent",e.innerHTML),this._isBlockViewElement(r)||n.push(r),r;if(ks(e))return r._setCustomProperty("$rawContent",e.data),r}yield r;const a=[];if(t.withChildren!==!1)for(const l of this.domChildrenToView(e,t,a))r._appendChild(l);if(this._isInlineObjectElement(r))n.push(r);else for(const l of a)n.push(l)}}_processDomInlineNodes(e,t,n){if(!t.length||e&&!this.isDocumentFragment(e)&&!this._isBlockDomElement(e))return;let i=!1;for(let r=0;r<t.length;r++){const a=t[r];if(!a.is("$text")){i=!1;continue}let l,d=!1;if(zD(a,this.preElements))l=$m(a.data);else{l=a.data.replace(/[ \n\t\r]{1,}/g," "),d=/[^\S\u00A0]/.test(l.charAt(l.length-1));const h=r>0?t[r-1]:null,p=r+1<t.length?t[r+1]:null,k=!h||h.is("element")&&h.name=="br"||i,C=!p&&!Dn(a.data);n.withChildren!==!1&&(k&&(l=l.replace(/^ /,"")),C&&(l=l.replace(/ $/,""))),l=$m(l),l=l.replace(/ \u00A0/g,"  ");const D=p&&p.is("element")&&p.name!="br",S=p&&p.is("$text")&&p.data.charAt(0)==" ";(/[ \u00A0]\u00A0$/.test(l)||!p||D||S)&&(l=l.replace(/\u00A0$/," ")),(k||h&&h.is("element")&&h.name!="br")&&(l=l.replace(/^\u00A0/," "))}l.length==0&&a.parent?(a._remove(),t.splice(r,1),r--):(a._data=l,i=d)}t.length=0}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(t=" "+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),i=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&n&&!i||(t=t.substr(0,t.length-1)+" ")}return t.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_getTouchingInlineViewNode(e,t){const n=new Ti({startPosition:t?De._createAfter(e):De._createBefore(e),direction:t?"forward":"backward"});for(const i of n){if(i.item.is("element","br"))return null;if(this._isInlineObjectElement(i.item))return i.item;if(i.item.is("containerElement"))return null;if(i.item.is("$textProxy"))return i.item}return null}_isBlockDomElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isBlockViewElement(e){return e.is("element")&&this.blockElements.includes(e.name)}_isInlineObjectElement(e){return!!e.is("element")&&(e.name=="br"||this.inlineObjectElements.includes(e.name)||!!this._inlineObjectElementMatcher.match(e))}_createViewElement(e,t){if(ks(e))return new ic(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new En(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&e.is("element")&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const n=this._domDocument.createElement("span");if(n.setAttribute(Km,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const i of t.getAttributeNames())n.setAttribute(i,t.getAttribute(i))}return n}}function zD(o,e){return o.getAncestors().some(t=>t.is("element")&&e.includes(t.name))}function Ym(o,e){let t=o;for(;t;)e(t),t=t.parentElement}function Qm(o,e){const t=o.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function Zm(o){o==="script"&&V("domconverter-unsafe-script-element-detected"),o==="style"&&V("domconverter-unsafe-style-element-detected")}class mo extends Rn(){constructor(e){super(),this._isEnabled=!1,this.view=e,this.document=e.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const Jm=om(function(o,e){lr(e,ur(e),o)});class _r{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,Jm(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Yo extends mo{constructor(){super(...arguments),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(n,i)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(i.target)&&this.onDomEvent(i)},{useCapture:this.useCapture})})}stopObserving(e){this.stopListening(e)}fire(e,t,n){this.isEnabled&&this.document.fire(e,new _r(this.view,t,n))}}class jD extends Yo{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return gr(this)}};this.fire(e.type,e,t)}}const Jd=function(){return te.Date.now()};var FD=/\s/;const VD=function(o){for(var e=o.length;e--&&FD.test(o.charAt(e)););return e};var UD=/^\s+/;const HD=function(o){return o&&o.slice(0,VD(o)+1).replace(UD,"")};var $D=/^[-+]0x[0-9a-f]+$/i,qD=/^0b[01]+$/i,WD=/^0o[0-7]+$/i,GD=parseInt;const Xm=function(o){if(typeof o=="number")return o;if(Xa(o))return NaN;if(Le(o)){var e=typeof o.valueOf=="function"?o.valueOf():o;o=Le(e)?e+"":e}if(typeof o!="string")return o===0?o:+o;o=HD(o);var t=qD.test(o);return t||WD.test(o)?GD(o.slice(2),t?2:8):$D.test(o)?NaN:+o};var KD=Math.max,YD=Math.min;const wr=function(o,e,t){var n,i,r,a,l,d,h=0,p=!1,k=!1,C=!0;if(typeof o!="function")throw new TypeError("Expected a function");function D($){var Q=n,se=i;return n=i=void 0,h=$,a=o.apply(se,Q)}function S($){var Q=$-d;return d===void 0||Q>=e||Q<0||k&&$-h>=r}function T(){var $=Jd();if(S($))return B($);l=setTimeout(T,function(Q){var se=e-(Q-d);return k?YD(se,r-(Q-h)):se}($))}function B($){return l=void 0,C&&n?D($):(n=i=void 0,a)}function L(){var $=Jd(),Q=S($);if(n=arguments,i=this,d=$,Q){if(l===void 0)return function(se){return h=se,l=setTimeout(T,e),p?D(se):a}(d);if(k)return clearTimeout(l),l=setTimeout(T,e),D(d)}return l===void 0&&(l=setTimeout(T,e)),a}return e=Xm(e)||0,Le(t)&&(p=!!t.leading,r=(k="maxWait"in t)?KD(Xm(t.maxWait)||0,e):r,C="trailing"in t?!!t.trailing:C),L.cancel=function(){l!==void 0&&clearTimeout(l),h=0,n=d=i=l=void 0},L.flush=function(){return l===void 0?a:B(Jd())},L};class QD extends mo{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=wr(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new Jn(t.getRanges(),{backward:t.isBackward,fake:!1});e!=ot.arrowleft&&e!=ot.arrowup||n.setTo(n.getFirstPosition()),e!=ot.arrowright&&e!=ot.arrowdown||n.setTo(n.getLastPosition());const i={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",i),this._fireSelectionChangeDoneDebounced(i)}}const ZD=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this},JD=function(o){return this.__data__.has(o)};function ac(o){var e=-1,t=o==null?0:o.length;for(this.__data__=new Oa;++e<t;)this.add(o[e])}ac.prototype.add=ac.prototype.push=ZD,ac.prototype.has=JD;const XD=ac,e5=function(o,e){for(var t=-1,n=o==null?0:o.length;++t<n;)if(e(o[t],t,o))return!0;return!1},t5=function(o,e){return o.has(e)},ef=function(o,e,t,n,i,r){var a=1&t,l=o.length,d=e.length;if(l!=d&&!(a&&d>l))return!1;var h=r.get(o),p=r.get(e);if(h&&p)return h==e&&p==o;var k=-1,C=!0,D=2&t?new XD:void 0;for(r.set(o,e),r.set(e,o);++k<l;){var S=o[k],T=e[k];if(n)var B=a?n(T,S,k,e,o,r):n(S,T,k,o,e,r);if(B!==void 0){if(B)continue;C=!1;break}if(D){if(!e5(e,function(L,$){if(!t5(D,$)&&(S===L||i(S,L,t,n,r)))return D.push($)})){C=!1;break}}else if(S!==T&&!i(S,T,t,n,r)){C=!1;break}}return r.delete(o),r.delete(e),C},n5=function(o){var e=-1,t=Array(o.size);return o.forEach(function(n,i){t[++e]=[i,n]}),t},o5=function(o){var e=-1,t=Array(o.size);return o.forEach(function(n){t[++e]=n}),t};var tf=Z?Z.prototype:void 0,Xd=tf?tf.valueOf:void 0;const i5=function(o,e,t,n,i,r,a){switch(t){case"[object DataView]":if(o.byteLength!=e.byteLength||o.byteOffset!=e.byteOffset)return!1;o=o.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(o.byteLength!=e.byteLength||!r(new Va(o),new Va(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return cs(+o,+e);case"[object Error]":return o.name==e.name&&o.message==e.message;case"[object RegExp]":case"[object String]":return o==e+"";case"[object Map]":var l=n5;case"[object Set]":var d=1&n;if(l||(l=o5),o.size!=e.size&&!d)return!1;var h=a.get(o);if(h)return h==e;n|=2,a.set(o,e);var p=ef(l(o),l(e),n,i,r,a);return a.delete(o),p;case"[object Symbol]":if(Xd)return Xd.call(o)==Xd.call(e)}return!1};var r5=Object.prototype.hasOwnProperty;const s5=function(o,e,t,n,i,r){var a=1&t,l=pd(o),d=l.length;if(d!=pd(e).length&&!a)return!1;for(var h=d;h--;){var p=l[h];if(!(a?p in e:r5.call(e,p)))return!1}var k=r.get(o),C=r.get(e);if(k&&C)return k==e&&C==o;var D=!0;r.set(o,e),r.set(e,o);for(var S=a;++h<d;){var T=o[p=l[h]],B=e[p];if(n)var L=a?n(B,T,p,e,o,r):n(T,B,p,o,e,r);if(!(L===void 0?T===B||i(T,B,t,n,r):L)){D=!1;break}S||(S=p=="constructor")}if(D&&!S){var $=o.constructor,Q=e.constructor;$==Q||!("constructor"in o)||!("constructor"in e)||typeof $=="function"&&$ instanceof $&&typeof Q=="function"&&Q instanceof Q||(D=!1)}return r.delete(o),r.delete(e),D};var nf="[object Arguments]",of="[object Array]",cc="[object Object]",rf=Object.prototype.hasOwnProperty;const a5=function(o,e,t,n,i,r){var a=yt(o),l=yt(e),d=a?of:ps(o),h=l?of:ps(e),p=(d=d==nf?cc:d)==cc,k=(h=h==nf?cc:h)==cc,C=d==h;if(C&&us(o)){if(!us(e))return!1;a=!0,p=!1}if(C&&!p)return r||(r=new cr),a||ud(o)?ef(o,e,t,n,i,r):i5(o,e,d,t,n,i,r);if(!(1&t)){var D=p&&rf.call(o,"__wrapped__"),S=k&&rf.call(e,"__wrapped__");if(D||S){var T=D?o.value():o,B=S?e.value():e;return r||(r=new cr),i(T,B,t,n,r)}}return!!C&&(r||(r=new cr),s5(o,e,t,n,i,r))},lc=function o(e,t,n,i,r){return e===t||(e==null||t==null||!Pt(e)&&!Pt(t)?e!=e&&t!=t:a5(e,t,n,i,o,r))},c5=function(o,e,t){var n=(t=typeof t=="function"?t:void 0)?t(o,e):void 0;return n===void 0?lc(o,e,void 0,t):!!n};class sf extends mo{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.add(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}stopObserving(e){if(this._domElements.delete(e),this.isEnabled){this._mutationObserver.disconnect();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Set,i=new Set;for(const a of e){const l=t.mapDomToView(a.target);l&&(l.is("uiElement")||l.is("rawElement")||a.type!=="childList"||this._isBogusBrMutation(a)||i.add(l))}for(const a of e){const l=t.mapDomToView(a.target);if((!l||!l.is("uiElement")&&!l.is("rawElement"))&&a.type==="characterData"){const d=t.findCorrespondingViewText(a.target);d&&!i.has(d.parent)?n.add(d):!d&&Dn(a.target)&&i.add(t.mapDomToView(a.target.parentNode))}}let r=!1;for(const a of n)r=!0,this.renderer.markToSync("text",a);for(const a of i){const l=t.mapViewToDom(a),d=Array.from(a.getChildren()),h=Array.from(t.domChildrenToView(l,{withChildren:!1}));c5(d,h,l5)||(r=!0,this.renderer.markToSync("children",a))}r&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function l5(o,e){if(!Array.isArray(o))return o===e||!(!o.is("$text")||!e.is("$text"))&&o.data===e.data}class dc extends Yo{constructor(e){super(e),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),e.change(()=>{})},50)}),t.on("blur",(n,i)=>{const r=t.selection.editableElement;r!==null&&r!==i.target||(t.isFocused=!1,this._isFocusChanging=!1,e.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class d5 extends mo{constructor(e){super(e),this.mutationObserver=e.getObserver(sf),this.focusObserver=e.getObserver(dc),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=wr(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=wr(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(t)||(this.listenTo(t,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(i,r)=>{this.document.isComposing&&!x.isAndroid||(this._handleSelectionChange(r,t),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(t))}stopObserving(e){this.stopListening(e)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const i=this.domConverter.domSelectionToView(n);if(i.rangeCount!=0){if(this.view.hasDomSelection=!0,this.focusObserver.flush(),!this.selection.isEqual(i)||!this.domConverter.isDomSelectionCorrect(n))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.selection.isSimilar(i))this.view.forceRender();else{const r={oldSelection:this.selection,newSelection:i,domSelection:n};this.document.fire("selectionChange",r),this._fireSelectionChangeDoneDebounced(r)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class u5 extends Yo{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class af{constructor(e,t={}){this._files=t.cacheFiles?cf(e):null,this._native=e}get files(){return this._files||(this._files=cf(this._native)),this._files}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}setDragImage(e,t,n){this._native.setDragImage(e,t,n)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function cf(o){const e=Array.from(o.files||[]),t=Array.from(o.items||[]);return e.length?e:t.filter(n=>n.kind==="file").map(n=>n.getAsFile())}class h5 extends Yo{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(e){const t=e.getTargetRanges(),n=this.view,i=n.document;let r=null,a=null,l=[];if(e.dataTransfer&&(r=new af(e.dataTransfer)),e.data!==null?a=e.data:r&&(a=r.getData("text/plain")),i.selection.isFake)l=Array.from(i.selection.getRanges());else if(t.length)l=t.map(d=>{const h=n.domConverter.domPositionToView(d.startContainer,d.startOffset),p=n.domConverter.domPositionToView(d.endContainer,d.endOffset);return h?n.createRange(h,p):p?n.createRange(p):void 0}).filter(d=>!!d);else if(x.isAndroid){const d=e.target.ownerDocument.defaultView.getSelection();l=Array.from(n.domConverter.domSelectionToView(d).getRanges())}if(x.isAndroid&&e.inputType=="insertCompositionText"&&a&&a.endsWith(`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[n.createRange(l[0].end)]});else if(e.inputType=="insertText"&&a&&a.includes(`
`,isColorInherited:!1}),n.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...t?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[t]}]:[],n],on:{dragstart:i.to(r=>r.preventDefault())}}]})}}function _b(o,e,t){return(n,i)=>{const r=new et(o);if(r.width<gI||r.height<hI)return null;let a;a=e.position==="inside"?r.bottom-i.height:r.bottom-i.height/2,a-=e.verticalOffset;const l=t(r,i),d=n.clone().moveTo(l,a).getIntersection(i.clone().moveTo(l,a)).getVisible();return!d||d.getArea()<i.getArea()?null:{top:a,left:l,name:`position_${e.position}-side_${e.side}`,config:{withArrow:!1}}}}function wb(o){const e=o.config.get("ui.poweredBy"),t=e&&e.position||"border";return uI({position:t,label:pI,verticalOffset:t==="inside"?5:0,horizontalOffset:5,side:o.locale.contentLanguageDirection==="ltr"?"right":"left"},e)}var Ab=m(1801),kI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};xe()(Ab.A,kI),Ab.A.locals;const Cb={POLITE:"polite",ASSERTIVE:"assertive"};class bI{constructor(e){this.editor=e,e.once("ready",()=>{for(const t of Object.values(Cb))this.announce("",t)})}announce(e,t=Cb.POLITE){const n=this.editor;if(!n.ui.view)return;this.view||(this.view=new _I(n.locale),n.ui.view.body.add(this.view));const{politeness:i,isUnsafeHTML:r}=typeof t=="string"?{politeness:t}:t;let a=this.view.regionViews.find(l=>l.politeness===i);a||(a=new wI(n,i),this.view.regionViews.add(a)),a.announce({announcement:e,isUnsafeHTML:r})}}class _I extends Re{constructor(e){super(e),this.regionViews=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-aria-live-announcer"]},children:this.regionViews})}}class wI extends Re{constructor(e,t){super(e.locale),this.setTemplate({tag:"div",attributes:{role:"region","aria-live":t,"aria-relevant":"additions"},children:[{tag:"ul",attributes:{class:["ck","ck-aria-live-region-list"]}}]}),e.on("destroy",()=>{this._pruneAnnouncementsInterval!==null&&(clearInterval(this._pruneAnnouncementsInterval),this._pruneAnnouncementsInterval=null)}),this.politeness=t,this._domConverter=e.data.htmlProcessor.domConverter,this._pruneAnnouncementsInterval=setInterval(()=>{this.element&&this._listElement.firstChild&&this._listElement.firstChild.remove()},5e3)}announce({announcement:e,isUnsafeHTML:t}){if(!e.trim().length)return;const n=document.createElement("li");t?this._domConverter.setContentOf(n,e):n.innerText=e,this._listElement.appendChild(n)}get _listElement(){return this.element.querySelector("ul")}}var AI=Object.defineProperty,vb=Object.getOwnPropertySymbols,CI=Object.prototype.hasOwnProperty,vI=Object.prototype.propertyIsEnumerable,yb=(o,e,t)=>e in o?AI(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;class yI extends R(){constructor(e){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const t=e.editing.view;this.editor=e,this.componentFactory=new $T(e),this.focusTracker=new Xt,this.tooltipManager=new yc(e),this.poweredBy=new mI(e),this.ariaLiveAnnouncer=new bI(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(t.document,"layoutChanged",this.update.bind(this)),this.listenTo(t,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null,this.editor.keystrokes.stopListening(e);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const n=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?n():this.once("ready",n)}removeEditableElement(e){const t=this._editableElementsMap.get(e);t&&(this._editableElementsMap.delete(e),this.editor.keystrokes.stopListening(t),this.focusTracker.remove(t),t.ckeditorInstance=null)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const n=e.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let n,i;e.keystrokes.set("Alt+F10",(r,a)=>{const l=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(l)&&!Array.from(t.domRoots.values()).includes(l)&&(n=l);const d=this._getCurrentFocusedToolbarDefinition();d&&i||(i=this._getFocusableCandidateToolbarDefinitions());for(let h=0;h<i.length;h++){const p=i.shift();if(i.push(p),p!==d&&this._focusFocusableCandidateToolbar(p)){d&&d.options.afterBlur&&d.options.afterBlur();break}}a()}),e.keystrokes.set("Esc",(r,a)=>{const l=this._getCurrentFocusedToolbarDefinition();l&&(n?(n.focus(),n=null):e.editing.view.focus(),l.options.afterBlur&&l.options.afterBlur(),a())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:n,options:i}=t;(Ei(n.element)||i.beforeFocus)&&e.push(t)}return e.sort((t,n)=>xb(t)-xb(n)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:n}}=e;return n&&n(),!!Ei(t.element)&&(t.focus(),!0)}_handleScrollToTheSelection(e,t){const n=((i,r)=>{for(var a in r||(r={}))CI.call(r,a)&&yb(i,a,r[a]);if(vb)for(var a of vb(r))vI.call(r,a)&&yb(i,a,r[a]);return i})({top:0,bottom:0,left:0,right:0},this.viewportOffset);t.viewportOffset.top+=n.top,t.viewportOffset.bottom+=n.bottom,t.viewportOffset.left+=n.left,t.viewportOffset.right+=n.right}}function xb(o){const{toolbarView:e,options:t}=o;let n=10;return Ei(e.element)&&n--,t.isContextual&&n--,n}var Eb=m(1185),xI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};xe()(Eb.A,xI),Eb.A.locals;class EI extends Re{constructor(e){super(e),this.body=new uT(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class DI extends EI{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new mc;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class SI extends Re{constructor(e,t,n){super(e),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const e=this._editingView;function t(n){e.change(i=>{const r=e.document.getRoot(n.name);i.addClass(n.isFocused?"ck-focused":"ck-blurred",r),i.removeClass(n.isFocused?"ck-blurred":"ck-focused",r)})}e.isRenderingInProgress?function n(i){e.once("change:isRenderingInProgress",(r,a,l)=>{l?n(i):t(i)})}(this):t(this)}}class TI extends SI{constructor(e,t,n,i={}){super(e,t,n);const r=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=i.label||(()=>r("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const n=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),n)})}}class xu extends Za{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class Db extends R(){constructor(e,t){super(),t&&Jm(this,t),e&&this.set(e)}}var Sb=m(991),II={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};xe()(Sb.A,II),Sb.A.locals;var Tb=m(5380),MI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};xe()(Tb.A,MI),Tb.A.locals;const Ec=hr("px");class Dc extends ke{constructor(e){super(e),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const t=this.editor.editing.view,n=t.document.selection.editableElement;return n?t.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}static get pluginName(){return"ContextualBalloon"}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this._view||this._createPanelView(),this.hasView(e.view))throw new I("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const n=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),n.set(e.view,e),this._viewToStack.set(e.view,n),n===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new I("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new I("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}_createPanelView(){this._view=new mn(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new BI(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,i)=>!i&&n>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,i)=>{if(i<2)return"";const r=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[r,i])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new PI(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,n)=>!n&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:n=!0,singleViewMode:i=!1}){this.view.class=t,this.view.withArrow=n,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),i&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class BI extends Re{constructor(e){super(e);const t=e.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new Xt,this.buttonPrevView=this._createButtonView(t("Previous"),qe.previousArrow),this.buttonNextView=this._createButtonView(t("Next"),qe.nextArrow),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",i=>i?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const n=new lt(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n}}class PI extends Re{constructor(e,t){super(e);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",i=>i?"":"ck-hidden")],style:{top:n.to("top",Ec),left:n.to("left",Ec),width:n.to("width",Ec),height:n.to("height",Ec)}},children:this.content}),this.on("change:numberOfPanels",(i,r,a,l)=>{a>l?this._addPanels(a-l):this._removePanels(l-a),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new Re;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:n,height:i}=new et(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:n,height:i})}}}var Ib=m(8298),NI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};xe()(Ib.A,NI),Ib.A.locals;const xr=hr("px");class OI extends Re{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheBottomOfLimiter",!1),this.set("_stickyTopOffset",null),this.set("_stickyBottomOffset",null),this.content=this.createCollection(),this._contentPanelPlaceholder=new Zn({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",n=>n?"block":"none"),height:t.to("isSticky",n=>n?xr(this._contentPanelRect.height):null)}}}).render(),this.contentPanelElement=new Zn({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheBottomOfLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",n=>n?xr(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_stickyTopOffset",n=>n&&xr(n)),bottom:t.to("_stickyBottomOffset",n=>n&&xr(n)),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this.contentPanelElement]})}render(){super.render(),this.checkIfShouldBeSticky(),this.listenTo(_.document,"scroll",()=>{this.checkIfShouldBeSticky()},{useCapture:!0}),this.listenTo(this,"change:isActive",()=>{this.checkIfShouldBeSticky()})}checkIfShouldBeSticky(){if(!this.limiterElement||!this.isActive)return void this._unstick();const e=new et(this.limiterElement);let t=e.getVisible();if(t){const n=new et(_.window);n.top+=this.viewportTopOffset,n.height-=this.viewportTopOffset,t=t.getIntersection(n)}if(t&&e.top<t.top){const n=t.top;if(n+this._contentPanelRect.height+this.limiterBottomOffset>t.bottom){const i=Math.max(e.bottom-t.bottom,0)+this.limiterBottomOffset;e.bottom-i>e.top+this._contentPanelRect.height?this._stickToBottomOfLimiter(i):this._unstick()}else this._contentPanelRect.height+this.limiterBottomOffset<e.height?this._stickToTopOfAncestors(n):this._unstick()}else this._unstick()}_stickToTopOfAncestors(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=e,this._stickyBottomOffset=null,this._marginLeft=xr(-_.window.scrollX)}_stickToBottomOfLimiter(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!0,this._stickyTopOffset=null,this._stickyBottomOffset=e,this._marginLeft=xr(-_.window.scrollX)}_unstick(){this.isSticky=!1,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=null,this._stickyBottomOffset=null,this._marginLeft=null}get _contentPanelRect(){return new et(this.contentPanelElement)}}class LI extends bc{constructor(e,t){const n=e.t,i=Object.assign({},{showResetButton:!0,showIcon:!0,creator:Ac},t);super(e,i.creator),this.label=t.label,this._viewConfig=i,this._viewConfig.showIcon&&(this.iconView=new Do,this.iconView.content=qe.loupe,this.fieldWrapperChildren.add(this.iconView,0),this.extendTemplate({attributes:{class:"ck-search__query_with-icon"}})),this._viewConfig.showResetButton&&(this.resetButtonView=new lt(e),this.resetButtonView.set({label:n("Clear"),icon:qe.cancel,class:"ck-search__reset",isVisible:!1,tooltip:!0}),this.resetButtonView.on("execute",()=>{this.reset(),this.focus(),this.fire("reset")}),this.resetButtonView.bind("isVisible").to(this.fieldView,"isEmpty",r=>!r),this.fieldWrapperChildren.add(this.resetButtonView),this.extendTemplate({attributes:{class:"ck-search__query_with-reset"}}))}reset(){this.fieldView.reset(),this._viewConfig.showResetButton&&(this.resetButtonView.isVisible=!1)}}class RI extends Re{constructor(){super();const e=this.bindTemplate;this.set({isVisible:!1,primaryText:"",secondaryText:""}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__info",e.if("isVisible","ck-hidden",t=>!t)],tabindex:-1},children:[{tag:"span",children:[{text:[e.to("primaryText")]}]},{tag:"span",children:[{text:[e.to("secondaryText")]}]}]})}focus(){this.element.focus()}}class zI extends Re{constructor(e){super(e),this.children=this.createCollection(),this.focusTracker=new Xt,this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__results"],tabindex:-1},children:this.children}),this._focusCycler=new Fn({focusables:this.children,focusTracker:this.focusTracker})}render(){super.render();for(const e of this.children)this.focusTracker.add(e.element)}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}var Mb=/[\\^$.*+?()[\]{}|]/g,jI=RegExp(Mb.source);const Bb=function(o){return(o=Rd(o))&&jI.test(o)?o.replace(Mb,"\\$&"):o};var Pb=m(8107),FI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};xe()(Pb.A,FI),Pb.A.locals;var VI=Object.defineProperty,Nb=Object.getOwnPropertySymbols,UI=Object.prototype.hasOwnProperty,HI=Object.prototype.propertyIsEnumerable,Ob=(o,e,t)=>e in o?VI(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;class $I extends Re{constructor(e,t){super(e),this._config=t,this.filteredView=t.filteredView,this.queryView=this._createSearchTextQueryView(),this.focusTracker=new Xt,this.keystrokes=new cn,this.resultsView=new zI(e),this.children=this.createCollection(),this.focusableChildren=this.createCollection([this.queryView,this.resultsView]),this.set("isEnabled",!0),this.set("resultsCount",0),this.set("totalItemsCount",0),t.infoView&&t.infoView.instance?this.infoView=t.infoView.instance:(this.infoView=new RI,this._enableDefaultInfoViewBehavior(),this.on("render",()=>{this.search("")})),this.resultsView.children.addMany([this.infoView,this.filteredView]),this.focusCycler=new Fn({focusables:this.focusableChildren,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.on("search",(n,{resultsCount:i,totalItemsCount:r})=>{this.resultsCount=i,this.totalItemsCount=r}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search",t.class||null],tabindex:"-1"},children:this.children})}render(){super.render(),this.children.addMany([this.queryView,this.resultsView]);const e=t=>t.stopPropagation();for(const t of this.focusableChildren)this.focusTracker.add(t.element);this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",e),this.keystrokes.set("arrowleft",e),this.keystrokes.set("arrowup",e),this.keystrokes.set("arrowdown",e)}focus(){this.queryView.focus()}reset(){this.queryView.reset(),this.search("")}search(e){const t=e?new RegExp(Bb(e),"ig"):null,n=this.filteredView.filter(t);this.fire("search",((i,r)=>{for(var a in r||(r={}))UI.call(r,a)&&Ob(i,a,r[a]);if(Nb)for(var a of Nb(r))HI.call(r,a)&&Ob(i,a,r[a]);return i})({query:e},n))}_createSearchTextQueryView(){const e=new LI(this.locale,this._config.queryView);return this.listenTo(e.fieldView,"input",()=>{this.search(e.fieldView.element.value)}),e.on("reset",()=>this.reset()),e.bind("isEnabled").to(this),e}_enableDefaultInfoViewBehavior(){const e=this.locale.t,t=this.infoView;function n(i,{query:r,resultsCount:a,totalItemsCount:l}){return typeof i=="function"?i(r,a,l):i}this.on("search",(i,r)=>{if(r.resultsCount)t.set({isVisible:!1});else{const a=this._config.infoView&&this._config.infoView.text;let l,d;r.totalItemsCount?a&&a.notFound?(l=a.notFound.primary,d=a.notFound.secondary):(l=e("No results found"),d=""):a&&a.noSearchableItems?(l=a.noSearchableItems.primary,d=a.noSearchableItems.secondary):(l=e("No searchable items"),d=""),t.set({primaryText:n(l,r),secondaryText:n(d,r),isVisible:!0})}})}}var Lb=m(5727),qI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};xe()(Lb.A,qI),Lb.A.locals;const Eu=class extends $I{constructor(o,e){super(o,e),this._config=e;const t=hr("px");this.extendTemplate({attributes:{class:["ck-autocomplete"]}});const n=this.resultsView.bindTemplate;this.resultsView.set("isVisible",!1),this.resultsView.set("_position","s"),this.resultsView.set("_width",0),this.resultsView.extendTemplate({attributes:{class:[n.if("isVisible","ck-hidden",i=>!i),n.to("_position",i=>`ck-search__results_${i}`)],style:{width:n.to("_width",t)}}}),this.focusTracker.on("change:isFocused",(i,r,a)=>{this._updateResultsVisibility(),a?this.resultsView.element.scrollTop=0:e.resetOnBlur&&this.queryView.reset()}),this.on("search",()=>{this._updateResultsVisibility(),this._updateResultsViewWidthAndPosition()}),this.keystrokes.set("esc",(i,r)=>{this.resultsView.isVisible&&(this.queryView.focus(),this.resultsView.isVisible=!1,r())}),this.listenTo(_.document,"scroll",()=>{this._updateResultsViewWidthAndPosition()}),this.on("change:isEnabled",()=>{this._updateResultsVisibility()}),this.filteredView.on("execute",(i,{value:r})=>{this.focus(),this.reset(),this.queryView.fieldView.value=this.queryView.fieldView.element.value=r,this.resultsView.isVisible=!1}),this.resultsView.on("change:isVisible",()=>{this._updateResultsViewWidthAndPosition()})}_updateResultsViewWidthAndPosition(){if(!this.resultsView.isVisible)return;this.resultsView._width=new et(this.queryView.fieldView.element).width;const o=Eu._getOptimalPosition({element:this.resultsView.element,target:this.queryView.element,fitInViewport:!0,positions:Eu.defaultResultsPositions});this.resultsView._position=o?o.name:"s"}_updateResultsVisibility(){const o=this._config.queryMinChars===void 0?0:this._config.queryMinChars,e=this.queryView.fieldView.element.value.length;this.resultsView.isVisible=this.focusTracker.isFocused&&this.isEnabled&&e>=o}};let Rb=Eu;Rb.defaultResultsPositions=[o=>({top:o.bottom,left:o.left,name:"s"}),(o,e)=>({top:o.top-e.height,left:o.left,name:"n"})],Rb._getOptimalPosition=qa;var zb=m(9529),WI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};xe()(zb.A,WI),zb.A.locals;var jb=m(109),GI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};xe()(jb.A,GI),jb.A.locals;var Fb=m(2710),KI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};xe()(Fb.A,KI),Fb.A.locals;var Vb=m(3344),YI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};xe()(Vb.A,YI),Vb.A.locals;class QI extends lt{constructor(e){super(e);const t=this.bindTemplate;this.set({withText:!0,role:"menuitem"}),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__button"],"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",n=>String(n)),"data-cke-tooltip-disabled":t.to("isOn")},on:{mouseenter:t.to("mouseenter")}})}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new Do;return e.content=kc,e.extendTemplate({attributes:{class:"ck-menu-bar__menu__button__arrow"}}),e}}var Ub=m(9481),ZI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};xe()(Ub.A,ZI),Ub.A.locals;class Du extends yr{constructor(e,t){super(e);const n=this.bindTemplate;this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item"]},on:{mouseenter:n.to("mouseenter")}}),this.delegate("mouseenter").to(t)}}var JI=Object.defineProperty,Hb=Object.getOwnPropertySymbols,XI=Object.prototype.hasOwnProperty,eM=Object.prototype.propertyIsEnumerable,$b=(o,e,t)=>e in o?JI(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,qb=(o,e)=>{for(var t in e||(e={}))XI.call(e,t)&&$b(o,t,e[t]);if(Hb)for(var t of Hb(e))eM.call(e,t)&&$b(o,t,e[t]);return o};const Os={toggleMenusAndFocusItemsOnHover(o){o.on("menu:mouseenter",e=>{if(o.isOpen){for(const t of o.menus){const n=e.path[0],i=n instanceof Du&&n.children.first===t;t.isOpen=(e.path.includes(t)||i)&&t.isEnabled}e.source.focus()}})},focusCycleMenusOnArrows(o){const e=o.locale.uiLanguageDirection==="rtl";function t(n,i){const r=o.children.getIndex(n),a=n.isOpen,l=o.children.length,d=o.children.get((r+l+i)%l);n.isOpen=!1,a&&(d.isOpen=!0),d.buttonView.focus()}o.on("menu:arrowright",n=>{t(n.source,e?-1:1)}),o.on("menu:arrowleft",n=>{t(n.source,e?1:-1)})},closeMenusWhenTheBarCloses(o){o.on("change:isOpen",()=>{o.isOpen||o.menus.forEach(e=>{e.isOpen=!1})})},closeMenuWhenAnotherOnTheSameLevelOpens(o){o.on("menu:change:isOpen",(e,t,n)=>{n&&o.menus.filter(i=>e.source.parentMenuView===i.parentMenuView&&e.source!==i&&i.isOpen).forEach(i=>{i.isOpen=!1})})},closeOnClickOutside(o){Ya({emitter:o,activator:()=>o.isOpen,callback:()=>o.close(),contextElements:()=>o.children.map(e=>e.element)})}},Li={openAndFocusPanelOnArrowDownKey(o){o.keystrokes.set("arrowdown",(e,t)=>{o.focusTracker.focusedElement===o.buttonView.element&&(o.isOpen||(o.isOpen=!0),o.panelView.focus(),t())})},openOnArrowRightKey(o){const e=o.locale.uiLanguageDirection==="rtl"?"arrowleft":"arrowright";o.keystrokes.set(e,(t,n)=>{o.focusTracker.focusedElement===o.buttonView.element&&o.isEnabled&&(o.isOpen||(o.isOpen=!0),o.panelView.focus(),n())})},openOnButtonClick(o){o.buttonView.on("execute",()=>{o.isOpen=!0,o.panelView.focus()})},toggleOnButtonClick(o){o.buttonView.on("execute",()=>{o.isOpen=!o.isOpen,o.isOpen&&o.panelView.focus()})},closeOnArrowLeftKey(o){const e=o.locale.uiLanguageDirection==="rtl"?"arrowright":"arrowleft";o.keystrokes.set(e,(t,n)=>{o.isOpen&&(o.isOpen=!1,o.focus(),n())})},closeOnEscKey(o){o.keystrokes.set("esc",(e,t)=>{o.isOpen&&(o.isOpen=!1,o.focus(),t())})},closeOnParentClose(o){o.parentMenuView.on("change:isOpen",(e,t,n)=>{n||e.source!==o.parentMenuView||(o.isOpen=!1)})}},tM={southEast:o=>({top:o.bottom,left:o.left,name:"se"}),southWest:(o,e)=>({top:o.bottom,left:o.left-e.width+o.width,name:"sw"}),northEast:(o,e)=>({top:o.top-e.height,left:o.left,name:"ne"}),northWest:(o,e)=>({top:o.top-e.height,left:o.left-e.width+o.width,name:"nw"}),eastSouth:o=>({top:o.top,left:o.right-5,name:"es"}),eastNorth:(o,e)=>({top:o.top-e.height,left:o.right-5,name:"en"}),westSouth:(o,e)=>({top:o.top,left:o.left-e.width+5,name:"ws"}),westNorth:(o,e)=>({top:o.top-e.height,left:o.left-e.width+5,name:"wn"})},nM=[{menuId:"file",label:"File",groups:[{groupId:"export",items:["menuBar:exportPdf","menuBar:exportWord"]},{groupId:"import",items:["menuBar:importWord"]},{groupId:"revisionHistory",items:["menuBar:revisionHistory"]}]},{menuId:"edit",label:"Edit",groups:[{groupId:"undo",items:["menuBar:undo","menuBar:redo"]},{groupId:"selectAll",items:["menuBar:selectAll"]},{groupId:"findAndReplace",items:["menuBar:findAndReplace"]}]},{menuId:"view",label:"View",groups:[{groupId:"sourceEditing",items:["menuBar:sourceEditing"]},{groupId:"showBlocks",items:["menuBar:showBlocks"]},{groupId:"restrictedEditingException",items:["menuBar:restrictedEditingException"]}]},{menuId:"insert",label:"Insert",groups:[{groupId:"insertMainWidgets",items:["menuBar:uploadImage","menuBar:ckbox","menuBar:ckfinder","menuBar:insertTable"]},{groupId:"insertInline",items:["menuBar:link","menuBar:comment"]},{groupId:"insertMinorWidgets",items:["menuBar:insertTemplate","menuBar:blockQuote","menuBar:codeBlock","menuBar:htmlEmbed"]},{groupId:"insertStructureWidgets",items:["menuBar:horizontalLine","menuBar:pageBreak","menuBar:tableOfContents"]},{groupId:"restrictedEditing",items:["menuBar:restrictedEditing"]}]},{menuId:"format",label:"Format",groups:[{groupId:"textAndFont",items:[{menuId:"text",label:"Text",groups:[{groupId:"basicStyles",items:["menuBar:bold","menuBar:italic","menuBar:underline","menuBar:strikethrough","menuBar:superscript","menuBar:subscript","menuBar:code"]},{groupId:"textPartLanguage",items:["menuBar:textPartLanguage"]}]},{menuId:"font",label:"Font",groups:[{groupId:"fontProperties",items:["menuBar:fontSize","menuBar:fontFamily"]},{groupId:"fontColors",items:["menuBar:fontColor","menuBar:fontBackgroundColor"]},{groupId:"highlight",items:["menuBar:highlight"]}]},"menuBar:heading"]},{groupId:"list",items:["menuBar:bulletedList","menuBar:numberedList","menuBar:todoList"]},{groupId:"indent",items:["menuBar:alignment","menuBar:indent","menuBar:outdent"]},{groupId:"caseChange",items:["menuBar:caseChange"]},{groupId:"removeFormat",items:["menuBar:removeFormat"]}]},{menuId:"tools",label:"Tools",groups:[{groupId:"aiTools",items:["menuBar:aiAssistant","menuBar:aiCommands"]},{groupId:"tools",items:["menuBar:trackChanges","menuBar:commentsArchive"]}]},{menuId:"help",label:"Help",groups:[{groupId:"help",items:["menuBar:accessibilityHelp"]}]}];function oM({normalizedConfig:o,locale:e,componentFactory:t}){const n=eo(o);return function(i,r){const a=r.removeItems,l=[];r.items=r.items.filter(({menuId:d})=>!a.includes(d)||(l.push(d),!1)),Er(r.items,d=>{d.groups=d.groups.filter(({groupId:h})=>!a.includes(h)||(l.push(h),!1));for(const h of d.groups)h.items=h.items.filter(p=>{const k=Kb(p);return!a.includes(k)||(l.push(k),!1)})});for(const d of a)l.includes(d)||V("menu-bar-item-could-not-be-removed",{menuBarConfig:i,itemName:d})}(o,n),function(i,r){const a=r.addItems,l=[];for(const d of a){const h=sM(d.position),p=aM(d.position);if(iM(d))if(p){const k=r.items.findIndex(C=>C.menuId===p);k!=-1?h==="before"?(r.items.splice(k,0,d.menu),l.push(d)):h==="after"&&(r.items.splice(k+1,0,d.menu),l.push(d)):Wb(r,d.menu,p,h)&&l.push(d)}else h==="start"?(r.items.unshift(d.menu),l.push(d)):h==="end"&&(r.items.push(d.menu),l.push(d));else rM(d)?Er(r.items,k=>{if(k.menuId===p)h==="start"?(k.groups.unshift(d.group),l.push(d)):h==="end"&&(k.groups.push(d.group),l.push(d));else{const C=k.groups.findIndex(D=>D.groupId===p);C!==-1&&(h==="before"?(k.groups.splice(C,0,d.group),l.push(d)):h==="after"&&(k.groups.splice(C+1,0,d.group),l.push(d)))}}):Wb(r,d.item,p,h)&&l.push(d)}for(const d of a)l.includes(d)||V("menu-bar-item-could-not-be-added",{menuBarConfig:i,addedItemConfig:d})}(o,n),function(i,r,a){Er(r.items,l=>{for(const d of l.groups)d.items=d.items.filter(h=>{const p=typeof h=="string"&&!a.has(h);return p&&!r.isUsingDefaultConfig&&V("menu-bar-item-unavailable",{menuBarConfig:i,parentMenuConfig:eo(l),componentName:h}),!p})})}(o,n,t),Gb(o,n),function(i,r){const a=r.t,l={File:a({string:"File",id:"MENU_BAR_MENU_FILE"}),Edit:a({string:"Edit",id:"MENU_BAR_MENU_EDIT"}),View:a({string:"View",id:"MENU_BAR_MENU_VIEW"}),Insert:a({string:"Insert",id:"MENU_BAR_MENU_INSERT"}),Format:a({string:"Format",id:"MENU_BAR_MENU_FORMAT"}),Tools:a({string:"Tools",id:"MENU_BAR_MENU_TOOLS"}),Help:a({string:"Help",id:"MENU_BAR_MENU_HELP"}),Text:a({string:"Text",id:"MENU_BAR_MENU_TEXT"}),Font:a({string:"Font",id:"MENU_BAR_MENU_FONT"})};Er(i.items,d=>{d.label in l&&(d.label=l[d.label])})}(n,e),n}function Wb(o,e,t,n){let i=!1;return Er(o.items,r=>{for(const{groupId:a,items:l}of r.groups){if(i)return;if(a===t)n==="start"?(l.unshift(e),i=!0):n==="end"&&(l.push(e),i=!0);else{const d=l.findIndex(h=>Kb(h)===t);d!==-1&&(n==="before"?(l.splice(d,0,e),i=!0):n==="after"&&(l.splice(d+1,0,e),i=!0))}}}),i}function Gb(o,e){const t=e.isUsingDefaultConfig;let n=!1;e.items=e.items.filter(i=>!!i.groups.length||(Su(o,i,t),!1)),e.items.length?(Er(e.items,i=>{i.groups=i.groups.filter(r=>!!r.items.length||(n=!0,!1));for(const r of i.groups)r.items=r.items.filter(a=>!(Yb(a)&&!a.groups.length)||(Su(o,a,t),n=!0,!1))}),n&&Gb(o,e)):Su(o,o,t)}function Su(o,e,t){t||V("menu-bar-menu-empty",{menuBarConfig:o,emptyMenuConfig:e})}function Er(o,e){if(Array.isArray(o))for(const n of o)t(n);function t(n){e(n);for(const i of n.groups)for(const r of i.items)Yb(r)&&t(r)}}function iM(o){return typeof o=="object"&&"menu"in o}function rM(o){return typeof o=="object"&&"group"in o}function sM(o){return o.startsWith("start")?"start":o.startsWith("end")?"end":o.startsWith("after")?"after":"before"}function aM(o){const e=o.match(/^[^:]+:(.+)/);return e?e[1]:null}function Kb(o){return typeof o=="string"?o:o.menuId}function Yb(o){return typeof o=="object"&&"menuId"in o}function cM(o,e){const t=e.element;o.ui.focusTracker.add(t),o.keystrokes.listenTo(t);const n=function(i){let r;return r="items"in i&&i.items?qb({items:i.items,removeItems:[],addItems:[],isVisible:!0,isUsingDefaultConfig:!1},i):qb({items:eo(nM),addItems:[],removeItems:[],isVisible:!0,isUsingDefaultConfig:!0},i),r}(o.config.get("menuBar")||{});e.fillFromConfig(n,o.ui.componentFactory),o.keystrokes.set("Esc",(i,r)=>{t.contains(o.ui.focusTracker.focusedElement)&&(o.editing.view.focus(),r())}),o.keystrokes.set("Alt+F9",(i,r)=>{t.contains(o.ui.focusTracker.focusedElement)||(e.focus(),r())})}var Qb=m(9108),lM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};xe()(Qb.A,lM),Qb.A.locals;class dM extends Re{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-menu-bar__menu__panel",t.to("position",n=>`ck-menu-bar__menu__panel_position_${n}`),t.if("isVisible","ck-hidden",n=>!n)],tabindex:"-1"},children:this.children,on:{selectstart:t.to(n=>{n.target.tagName.toLocaleLowerCase()!=="input"&&n.preventDefault()})}})}focus(e=1){this.children.length&&(e===1?this.children.first.focus():this.children.last.focus())}}var Zb=m(4),uM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};xe()(Zb.A,uM),Zb.A.locals;const Jb=class extends Re{constructor(o){super(o);const e=this.bindTemplate;this.buttonView=new QI(o),this.buttonView.delegate("mouseenter").to(this),this.buttonView.bind("isOn","isEnabled").to(this,"isOpen","isEnabled"),this.panelView=new dM(o),this.panelView.bind("isVisible").to(this,"isOpen"),this.keystrokes=new cn,this.focusTracker=new Xt,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("panelPosition","w"),this.set("class",void 0),this.set("parentMenuView",null),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar__menu",e.to("class"),e.if("isEnabled","ck-disabled",t=>!t),e.if("parentMenuView","ck-menu-bar__menu_top-level",t=>!t)]},children:[this.buttonView,this.panelView]})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.keystrokes.listenTo(this.element),Li.closeOnEscKey(this),this._repositionPanelOnOpen()}_attachBehaviors(){this.parentMenuView?(Li.openOnButtonClick(this),Li.openOnArrowRightKey(this),Li.closeOnArrowLeftKey(this),Li.closeOnParentClose(this)):(this._propagateArrowKeystrokeEvents(),Li.openAndFocusPanelOnArrowDownKey(this),Li.toggleOnButtonClick(this))}_propagateArrowKeystrokeEvents(){this.keystrokes.set("arrowright",(o,e)=>{this.fire("arrowright"),e()}),this.keystrokes.set("arrowleft",(o,e)=>{this.fire("arrowleft"),e()})}_repositionPanelOnOpen(){this.on("change:isOpen",(o,e,t)=>{if(!t)return;const n=Jb._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions});this.panelView.position=n?n.name:this._panelPositions[0].name})}focus(){this.buttonView.focus()}get _panelPositions(){const{southEast:o,southWest:e,northEast:t,northWest:n,westSouth:i,eastSouth:r,westNorth:a,eastNorth:l}=tM;return this.locale.uiLanguageDirection==="ltr"?this.parentMenuView?[r,l,i,a]:[o,e,t,n]:this.parentMenuView?[i,a,r,l]:[e,o,n,t]}};let Dr=Jb;Dr._getOptimalPosition=qa;class Tu extends _u{constructor(e){super(e),this.role="menu"}}var Xb=m(977),hM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};xe()(Xb.A,hM),Xb.A.locals;class Mn extends lt{constructor(e){super(e),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}class e_ extends Bk{constructor(e){super(e),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}var t_=m(497),gM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};xe()(t_.A,gM),t_.A.locals;const n_=["mouseenter","arrowleft","arrowright","change:isOpen"];class pM extends Re{constructor(e){super(e),this.menus=[];const t=e.t;this.set("isOpen",!1),this._setupIsOpenUpdater(),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar"],"aria-label":t("Editor menu bar"),role:"menubar"},children:this.children})}fillFromConfig(e,t){const n=oM({normalizedConfig:e,locale:this.locale,componentFactory:t}).items.map(i=>this._createMenu({componentFactory:t,menuDefinition:i}));this.children.addMany(n)}render(){super.render(),Os.toggleMenusAndFocusItemsOnHover(this),Os.closeMenusWhenTheBarCloses(this),Os.closeMenuWhenAnotherOnTheSameLevelOpens(this),Os.focusCycleMenusOnArrows(this),Os.closeOnClickOutside(this)}focus(){this.children.first&&this.children.first.focus()}close(){for(const e of this.children)e.isOpen=!1}registerMenu(e,t=null){t?(e.delegate(...n_).to(t),e.parentMenuView=t):e.delegate(...n_).to(this,n=>"menu:"+n),e._attachBehaviors(),this.menus.push(e)}_createMenu({componentFactory:e,menuDefinition:t,parentMenuView:n}){const i=this.locale,r=new Dr(i);return this.registerMenu(r,n),r.buttonView.set({label:t.label}),r.once("change:isOpen",()=>{const a=new Tu(i);a.ariaLabel=t.label,r.panelView.children.add(a),a.items.addMany(this._createMenuItems({menuDefinition:t,parentMenuView:r,componentFactory:e}))}),r}_createMenuItems({menuDefinition:e,parentMenuView:t,componentFactory:n}){const i=this.locale,r=[];for(const a of e.groups){for(const l of a.items){const d=new Du(i,t);if(Le(l))d.children.add(this._createMenu({componentFactory:n,menuDefinition:l,parentMenuView:t}));else{const h=this._createMenuItemContentFromFactory({componentName:l,componentFactory:n,parentMenuView:t});if(!h)continue;d.children.add(h)}r.push(d)}a!==e.groups[e.groups.length-1]&&r.push(new bu(i))}return r}_createMenuItemContentFromFactory({componentName:e,parentMenuView:t,componentFactory:n}){const i=n.create(e);return i instanceof Dr||i instanceof Mn||i instanceof e_?(this._registerMenuTree(i,t),i.on("execute",()=>{this.close()}),i):(V("menu-bar-component-unsupported",{componentName:e,componentView:i}),null)}_registerMenuTree(e,t){if(!(e instanceof Dr))return void e.delegate("mouseenter").to(t);this.registerMenu(e,t);const n=e.panelView.children.filter(r=>r instanceof Tu)[0];if(!n)return void e.delegate("mouseenter").to(t);const i=n.items.filter(r=>r instanceof yr);for(const r of i)this._registerMenuTree(r.children.get(0),e)}_setupIsOpenUpdater(){let e;this.on("menu:change:isOpen",(t,n,i)=>{clearTimeout(e),i?this.isOpen=!0:e=setTimeout(()=>{this.isOpen=Array.from(this.children).some(r=>r.isOpen)},0)})}}class mM extends yI{constructor(e,t){super(e),this.view=t,this._toolbarConfig=Hk(e.config.get("toolbar")),this._elementReplacer=new Se,this.listenTo(e.editing.view,"scrollToTheSelection",this._handleScrollToTheSelectionWithStickyPanel.bind(this))}get element(){return this.view.element}init(e){const t=this.editor,n=this.view,i=t.editing.view,r=n.editable,a=i.document.getRoot();r.name=a.rootName,n.render();const l=r.element;this.setEditableElement(r.name,l),n.editable.bind("isFocused").to(this.focusTracker),i.attachDomRoot(l),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),n.menuBarView&&cM(t,n.menuBarView),this._initDialogPluginIntegration(),this.fire("ready")}destroy(){super.destroy();const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:t})=>t||0),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(){const e=this.editor,t=e.editing.view,n=t.document.getRoot(),i=e.sourceElement;let r;const a=e.config.get("placeholder");a&&(r=typeof a=="string"?a:a[this.view.editable.name]),!r&&i&&i.tagName.toLowerCase()==="textarea"&&(r=i.getAttribute("placeholder")),r&&(n.placeholder=r),xm({view:t,element:n,isDirectHost:!1,keepOnFocus:!0})}_handleScrollToTheSelectionWithStickyPanel(e,t,n){const i=this.view.stickyPanel;if(i.isSticky){const r=new et(i.element).height;t.viewportOffset.top+=r}else{const r=()=>{this.editor.editing.view.scrollToTheSelection(n)};this.listenTo(i,"change:isSticky",r),setTimeout(()=>{this.stopListening(i,"change:isSticky",r)},20)}}_initDialogPluginIntegration(){if(!this.editor.plugins.has("Dialog"))return;const e=this.view.stickyPanel,t=this.editor.plugins.get("Dialog");t.on("show",()=>{const n=t.view;n.on("moveTo",(i,r)=>{if(!e.isSticky||n.wasMoved)return;const a=new et(e.contentPanelElement);r[1]<a.bottom+vc.defaultOffset&&(r[1]=a.bottom+vc.defaultOffset)},{priority:"high"})},{priority:"low"})}}var o_=m(7388),fM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};xe()(o_.A,fM),o_.A.locals;class kM extends DI{constructor(e,t,n={}){super(e),this.stickyPanel=new OI(e),this.toolbar=new ku(e,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),n.useMenuBar&&(this.menuBarView=new pM(e)),this.editable=new TI(e,t)}render(){super.render(),this.menuBarView?this.stickyPanel.content.addMany([this.menuBarView,this.toolbar]):this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class i_{constructor(e){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=t=>{const n="error"in t?t.error:t.reason;n instanceof Error&&this._handleError(n,t)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,t){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)}off(e,t){this._listeners[e]=this._listeners[e].filter(n=>n!==t)}_fire(e,...t){const n=this._listeners[e]||[];for(const i of n)i.apply(this,[null,...t])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,t){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:t instanceof ErrorEvent?t.filename:void 0,lineno:t instanceof ErrorEvent?t.lineno:void 0,colno:t instanceof ErrorEvent?t.colno:void 0,date:this._now()});const n=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:n}),n?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function Iu(o,e=new Set){const t=[o],n=new Set;let i=0;for(;t.length>i;){const r=t[i++];if(!n.has(r)&&bM(r)&&!e.has(r))if(n.add(r),Symbol.iterator in r)try{for(const a of r)t.push(a)}catch{}else for(const a in r)a!=="defaultValue"&&t.push(r[a])}return n}function bM(o){const e=Object.prototype.toString.call(o),t=typeof o;return!(t==="number"||t==="boolean"||t==="string"||t==="symbol"||t==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||o==null||o._watchdogExcluded||o instanceof EventTarget||o instanceof Event)}function r_(o,e,t=new Set){if(o===e&&typeof(n=o)=="object"&&n!==null)return!0;var n;const i=Iu(o,t),r=Iu(e,t);for(const a of i)if(r.has(a))return!0;return!1}var _M=Object.defineProperty,wM=Object.defineProperties,AM=Object.getOwnPropertyDescriptors,Sc=Object.getOwnPropertySymbols,s_=Object.prototype.hasOwnProperty,a_=Object.prototype.propertyIsEnumerable,c_=(o,e,t)=>e in o?_M(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,Mu=(o,e)=>{for(var t in e||(e={}))s_.call(e,t)&&c_(o,t,e[t]);if(Sc)for(var t of Sc(e))a_.call(e,t)&&c_(o,t,e[t]);return o};class l_ extends i_{constructor(e,t={}){super(t),this._editor=null,this._lifecyclePromise=null,this._initUsingData=!0,this._editables={},this._throttledSave=xc(this._save.bind(this),typeof t.saveInterval=="number"?t.saveInterval:5e3),e&&(this._creator=(n,i)=>e.create(n,i)),this._destructor=n=>n.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{console.error("An error happened during the editor destroying.",e)}).then(()=>{const e={},t=[],n=this._config.rootsAttributes||{},i={};for(const[d,h]of Object.entries(this._data.roots))h.isLoaded?(e[d]="",i[d]=n[d]||{}):t.push(d);const r=(a=Mu({},this._config),l={extraPlugins:this._config.extraPlugins||[],lazyRoots:t,rootsAttributes:i,_watchdogInitialData:this._data},wM(a,AM(l)));var a,l;return delete r.initialData,r.extraPlugins.push(CM),this._initUsingData?this.create(e,r,r.context):xi(this._elementOrData)?this.create(this._elementOrData,r,r.context):this.create(this._editables,r,r.context)}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,t=this._config,n){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(super._startErrorHandling(),this._elementOrData=e,this._initUsingData=typeof e=="string"||Object.keys(e).length>0&&typeof Object.values(e)[0]=="string",this._config=this._cloneEditorConfiguration(t)||{},this._config.context=n,this._creator(e,this._config))).then(i=>{this._editor=i,i.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=i.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")}).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}destroy(){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=e}catch(t){console.error(t,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e=this._editor,t=e.model.document.roots.filter(l=>l.isAttached()&&l.rootName!="$graveyard"),{plugins:n}=e,i=n.has("CommentsRepository")&&n.get("CommentsRepository"),r=n.has("TrackChanges")&&n.get("TrackChanges"),a={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};t.forEach(l=>{a.roots[l.rootName]={content:JSON.stringify(Array.from(l.getChildren())),attributes:JSON.stringify(Array.from(l.getAttributes())),isLoaded:l._isLoaded}});for(const l of e.model.markers)l._affectsData&&(a.markers[l.name]={rangeJSON:l.getRange().toJSON(),usingOperation:l._managedUsingOperations,affectsData:l._affectsData});return i&&(a.commentThreads=JSON.stringify(i.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),r&&(a.suggestions=JSON.stringify(r.getSuggestions({toJSON:!0,skipNotAttached:!0}))),a}_getEditables(){const e={};for(const t of this.editor.model.document.getRootNames()){const n=this.editor.ui.getEditableElement(t);n&&(e[t]=n)}return e}_isErrorComingFromThisItem(e){return r_(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return Ad(e,(t,n)=>xi(t)||n==="context"?t:void 0)}}class CM{constructor(e){this.editor=e,this._data=e.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",e=>{e.stop(),this.editor.model.enqueueChange({isUndoable:!1},t=>{this._restoreCollaborationData(),this._restoreEditorData(t)}),this.editor.data.fire("ready")},{priority:999})}_createNode(e,t){if("name"in t){const n=e.createElement(t.name,t.attributes);if(t.children)for(const i of t.children)n._appendChild(this._createNode(e,i));return n}return e.createText(t.data,t.attributes)}_restoreEditorData(e){const t=this.editor;Object.entries(this._data.roots).forEach(([n,{content:i,attributes:r}])=>{const a=JSON.parse(i),l=JSON.parse(r),d=t.model.document.getRoot(n);for(const[h,p]of l)e.setAttribute(h,p,d);for(const h of a){const p=this._createNode(e,h);e.insert(p,d,"end")}}),Object.entries(this._data.markers).forEach(([n,i])=>{const{document:r}=t.model,a=i,{rangeJSON:{start:l,end:d}}=a,h=((S,T)=>{var B={};for(var L in S)s_.call(S,L)&&T.indexOf(L)<0&&(B[L]=S[L]);if(S!=null&&Sc)for(var L of Sc(S))T.indexOf(L)<0&&a_.call(S,L)&&(B[L]=S[L]);return B})(a,["rangeJSON"]),p=r.getRoot(l.root),k=e.createPositionFromPath(p,l.path,l.stickiness),C=e.createPositionFromPath(p,d.path,d.stickiness),D=e.createRange(k,C);e.addMarker(n,Mu({range:D},h))})}_restoreCollaborationData(){const e=JSON.parse(this._data.commentThreads),t=JSON.parse(this._data.suggestions);e.forEach(n=>{const i=this.editor.config.get("collaboration.channelId"),r=this.editor.plugins.get("CommentsRepository");r.hasCommentThread(n.threadId)&&r.getCommentThread(n.threadId).remove(),r.addCommentThread(Mu({channelId:i},n))}),t.forEach(n=>{const i=this.editor.plugins.get("TrackChangesEditing");i.hasSuggestion(n.id)?i.getSuggestion(n.id).attributes=n.attributes:i.addSuggestionData(n)})}}const Ls=Symbol("MainQueueId");class vM{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,t){const n=e===Ls;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const i=(n?Promise.all(this._queues.values()):Promise.all([this._queues.get(Ls),this._queues.get(e)])).then(t),r=i.catch(()=>{});return this._queues.set(e,r),i.finally(()=>{this._activeActions--,this._queues.get(e)===r&&this._activeActions===0&&this._onEmptyCallbacks.forEach(a=>a())})}}function d_(o){return Array.isArray(o)?o:[o]}class Tc extends gu(rT){constructor(e,t={}){if(!Ic(e)&&t.initialData!==void 0)throw new I("editor-create-initial-data",null);super(t),this.config.define("menuBar.isVisible",!1),this.config.get("initialData")===void 0&&this.config.set("initialData",function(a){return Ic(a)?(l=a,l instanceof HTMLTextAreaElement?l.value:l.innerHTML):a;var l}(e)),Ic(e)&&(this.sourceElement=e),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),i=this.config.get("menuBar"),r=new kM(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n,useMenuBar:i.isVisible});this.ui=new mM(this,r),function(a){if(!Ai(a.updateSourceElement))throw new I("attachtoform-missing-elementapi-interface",a);const l=a.sourceElement;if(function(d){return!!d&&d.tagName.toLowerCase()==="textarea"}(l)&&l.form){let d;const h=l.form,p=()=>a.updateSourceElement();Ai(h.submit)&&(d=h.submit,h.submit=()=>{p(),d.apply(h)}),h.addEventListener("submit",p),a.on("destroy",()=>{h.removeEventListener("submit",p),d&&(h.submit=d)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(n=>{const i=new this(e,t);n(i.initPlugins().then(()=>i.ui.init(Ic(e)?e:null)).then(()=>i.data.init(i.config.get("initialData"))).then(()=>i.fire("ready")).then(()=>i))})}}function Ic(o){return xi(o)}Tc.Context=Cm,Tc.EditorWatchdog=l_,Tc.ContextWatchdog=class extends i_{constructor(o,e={}){super(e),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new vM,this._watchdogConfig=e,this._creator=t=>o.create(t),this._destructor=t=>t.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(o){this._creator=o}setDestructor(o){this._destructor=o}get context(){return this._context}create(o={}){return this._actionQueues.enqueue(Ls,()=>(this._contextConfig=o,this._create()))}getItem(o){return this._getWatchdog(o)._item}getItemState(o){return this._getWatchdog(o).state}add(o){const e=d_(o);return Promise.all(e.map(t=>this._actionQueues.enqueue(t.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let n;if(this._watchdogs.has(t.id))throw new Error(`Item with the given id is already added: '${t.id}'.`);if(t.type==="editor")return n=new l_(null,this._watchdogConfig),n.setCreator(t.creator),n._setExcludedProperties(this._contextProps),t.destructor&&n.setDestructor(t.destructor),this._watchdogs.set(t.id,n),n.on("error",(i,{error:r,causesRestart:a})=>{this._fire("itemError",{itemId:t.id,error:r}),a&&this._actionQueues.enqueue(t.id,()=>new Promise(l=>{const d=()=>{n.off("restart",d),this._fire("itemRestart",{itemId:t.id}),l()};n.on("restart",d)}))}),n.create(t.sourceElementOrData,t.config,this._context);throw new Error(`Not supported item type: '${t.type}'.`)})))}remove(o){const e=d_(o);return Promise.all(e.map(t=>this._actionQueues.enqueue(t,()=>{const n=this._getWatchdog(t);return this._watchdogs.delete(t),n.destroy()})))}destroy(){return this._actionQueues.enqueue(Ls,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Ls,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(o=>{console.error("An error happened during destroying the context or items.",o)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(o=>(this._context=o,this._contextProps=Iu(this._context),Promise.all(Array.from(this._watchdogs.values()).map(e=>(e._setExcludedProperties(this._contextProps),e.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const o=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(e=>e.destroy())).then(()=>this._destructor(o))})}_getWatchdog(o){const e=this._watchdogs.get(o);if(!e)throw new Error(`Item with the given id was not registered: ${o}.`);return e}_isErrorComingFromThisItem(o){for(const e of this._watchdogs.values())if(e._isErrorComingFromThisItem(o))return!1;return r_(this._context,o.context)}};class Rs extends Yo{constructor(e){super(e),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const t=this.document;function n(i){return(r,a)=>{a.preventDefault();const l=a.dropRange?[a.dropRange]:null,d=new F(t,i);t.fire(d,{dataTransfer:a.dataTransfer,method:r.name,targetRanges:l,target:a.target,domEvent:a.domEvent}),d.stop.called&&a.stopPropagation()}}this.listenTo(t,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",n("dragging"),{priority:"low"})}onDomEvent(e){const t="clipboardData"in e?e.clipboardData:e.dataTransfer,n=e.type=="drop"||e.type=="paste",i={dataTransfer:new af(t,{cacheFiles:n})};e.type!="drop"&&e.type!="dragover"||(i.dropRange=function(r,a){const l=a.target.ownerDocument,d=a.clientX,h=a.clientY;let p;return l.caretRangeFromPoint&&l.caretRangeFromPoint(d,h)?p=l.caretRangeFromPoint(d,h):a.rangeParent&&(p=l.createRange(),p.setStart(a.rangeParent,a.rangeOffset),p.collapse(!0)),p?r.domConverter.domRangeToView(p):null}(this.view,e)),this.fire(e.type,e,i)}}const u_=["figcaption","li"],h_=["ol","ul"];function g_(o){if(o.is("$text")||o.is("$textProxy"))return o.data;if(o.is("element","img")&&o.hasAttribute("alt"))return o.getAttribute("alt");if(o.is("element","br"))return`
`;let e="",t=null;for(const n of o.getChildren())e+=yM(n,t)+g_(n),t=n;return e}function yM(o,e){return e?o.is("element","li")&&!o.isEmpty&&o.getChild(0).is("containerElement")||h_.includes(o.name)&&h_.includes(e.name)?`

`:o.is("containerElement")||e.is("containerElement")?u_.includes(o.name)||u_.includes(e.name)?`
`:`

return I.value=Z.content[x.value]?Z.content:Tt.createEmptyObj(b),W.value=Z.published,K.value=Z.commented,le.value=Z.after_login,J.value=Z.menu_id,he.value=Z.page_id,Ae.value=Z.images,await w.value.resetSelectedItems(),!0}}catch(te){return console.log("_is_error_get_page_",te),y.value="Get page problem = "+te,!1}},U=async ge=>{if(!je())return!1;await R(ge)?(c.push("/pages/"+ge),E.value=!1):y.value="Get page problem = "+error},X=async ge=>{if(ye(),window.confirm("Are you sure you wish to delete this item?")){if(!je())return!1;try{(await H6(ge,v)).data.success&&await we()&&(A.value="Page has been deleted",E.value=!1)}catch(te){nn(te,g.demo_status,y,E)}}},ue=async ge=>{Ce("up",ge)},ae=async ge=>{Ce("down",ge)},Ce=async(ge,te)=>{if(!je())return!1;try{const Z=await U6(ge,te,v);Z.data.success?await we()&&(A.value="Position page has been changed",E.value=!1):Z.data.success===!1&&(E.value=!1)}catch(Z){nn(Z,g.demo_status,y,E)}},Se=async()=>{try{const ge=await j6(v);return me.value=ge.data.data,!0}catch(ge){console.log("error get menu=",ge)}return!1},we=async()=>{try{const ge=await N6(v);return P.value=ge.data.data,j.value=ri.getPagesBelongsToMenus(ge.data.data),O.value=ri.getPagesBelongsToPages(ge.data.data),z.value=ri.getNotRelatedPages(ge.data.data),F.value=ri.getInnerPages(ge.data.data),!0}catch(ge){console.log("error get pages=",ge)}return!1},_e=()=>{be.value=ri.getRootPages(J.value,ht.value,P.value)};function oe(ge){return Tt.getItemFromArrayOrFalse(j.value,ge)}function Ie(ge){return Tt.getItemFromArrayOrFalse(O.value,ge)}return vn(async()=>{if(!u.token)return c.push("/"),!1;E.value=!0;const ge=await Se(),te=await we(),Z=c.currentRoute.value.params.id;if(Z){ht.value=parseInt(Z),await w.value.resetSelectedItems();const Oe=await R(Z);ge&&te&&Oe&&(E.value=!1)}else ge&&te&&(E.value=!1)}),zt(ne,()=>{ye()},{deep:!0}),zt(me,()=>{ye()},{deep:!0}),zt(x,()=>{ye()}),(ge,te)=>(ce(),de("div",BF,[N("div",PF,[N("div",NF,[OF,Be(id,{lang:x.value,onExecChangeLang:Le},null,8,["lang"])])]),Be($o,{msgGood:A.value,msgWrong:y.value},null,8,["msgGood","msgWrong"]),N("div",LF,[N("div",RF,[N("div",zF,[N("button",{role:"button_add_menu",onClick:qt(re,["prevent"]),class:"btn btn-primary mt-2 mb-2",disabled:E.value},[E.value?He("",!0):(ce(),de("i",FF)),E.value?(ce(),de("span",VF)):He("",!0),tt(" Add menu ")],8,jF),N("div",UF,[(ce(!0),de(Je,null,Rt(me.value,(Z,Oe)=>(ce(),de("div",{class:"row",key:Z.id},[N("div",HF,[N("div",$F,[N("div",qF,[at(N("input",{role:"menu",class:"form-control","onUpdate:modelValue":Fe=>me.value[Oe].name[x.value]=Fe},null,8,WF),[[St,me.value[Oe].name[x.value]]])]),N("div",{role:"save_menu",class:Ne(["ms-2 col-1",{"disabled-if-loader":E.value}]),onClick:Fe=>Me(Oe)},YF,10,GF),N("div",{role:"del_menu",class:Ne(["ms-2 trash col-1",{"disabled-if-loader":E.value}]),onClick:Fe=>Ee(Oe)},JF,10,QF),me.value.length>1?(ce(),de("div",{key:0,role:"down_menu",class:Ne([{"disabled-if-loader":E.value},"ms-2 col-1"]),onClick:Fe=>nt("down",Z.id)},t8,10,XF)):He("",!0),me.value.length>1?(ce(),de("div",{key:1,role:"up_menu",class:Ne([{"disabled-if-loader":E.value},"ms-2 col-1"]),onClick:Fe=>nt("up",Z.id)},i8,10,n8)):He("",!0)])]),oe(Z.id)?(ce(),de("div",{key:0,class:"container",role:"menu_pages","data-menu-id":Z.id},[(ce(!0),de(Je,null,Rt(oe(Z.id),Fe=>(ce(),de("div",{class:"row test-parent-page",key:Fe.id},[Be(hl,{onExecEditPage:Ke=>U(Fe.id),onExecDelPage:Ke=>X(Fe.id),onExecPositionPageUp:Ke=>ue(Fe.id),onExecPositionPageDown:Ke=>ae(Fe.id),pre_loader:E.value,p:Fe,lang:x.value,allPages:P.value,currentPageId:ht.value},null,8,["onExecEditPage","onExecDelPage","onExecPositionPageUp","onExecPositionPageDown","pre_loader","p","lang","allPages","currentPageId"]),Ie(Fe.id)?(ce(),de("div",{key:0,class:"container ms-2",role:"page_pages","data-page-id":Fe.id},[(ce(!0),de(Je,null,Rt(Ie(Fe.id),Ke=>(ce(),de("div",{class:"row",key:Ke.id},[Be(hl,{onExecEditPage:bt=>U(Ke.id),onExecDelPage:bt=>X(Ke.id),onExecPositionPageUp:bt=>ue(Ke.id),onExecPositionPageDown:bt=>ae(Ke.id),pre_loader:E.value,p:Ke,lang:x.value,allPages:P.value,currentPageId:ht.value},null,8,["onExecEditPage","onExecDelPage","onExecPositionPageUp","onExecPositionPageDown","pre_loader","p","lang","allPages","currentPageId"])]))),128))],8,s8)):He("",!0)]))),128))],8,r8)):He("",!0)]))),128))]),N("div",a8,[Y.value?(ce(),de("div",c8,[N("div",l8,[at(N("input",{role:"new_menu",class:Ne(["form-control",{"is-invalid":vt.value}]),"onUpdate:modelValue":te[0]||(te[0]=Z=>ne.value[x.value]=Z),placeholder:`Menu name ${x.value}`},null,10,d8),[[St,ne.value[x.value]]])]),N("div",{role:"save_menu_0",class:"ms-2 col-1",onClick:te[1]||(te[1]=Z=>Me("new"))},h8),N("div",{role:"del_menu_0",class:"ms-2 trash col-1",onClick:te[2]||(te[2]=Z=>Ee("new"))},p8)])):He("",!0)]),N("div",m8,[z.value?(ce(),de("div",f8,[k8,(ce(!0),de(Je,null,Rt(z.value,(Z,Oe)=>(ce(),de("div",{class:"row",key:Oe},[Be(hl,{onExecEditPage:Fe=>U(Z.id),onExecDelPage:Fe=>X(Z.id),onExecPositionPageUp:Fe=>ue(Z.id),onExecPositionPageDown:Fe=>ae(Z.id),pre_loader:E.value,p:Z,lang:x.value,allPages:P.value,currentPageId:ht.value},null,8,["onExecEditPage","onExecDelPage","onExecPositionPageUp","onExecPositionPageDown","pre_loader","p","lang","allPages","currentPageId"])]))),128))])):He("",!0),F.value?(ce(),de("div",b8,[_8,(ce(!0),de(Je,null,Rt(F.value,(Z,Oe)=>(ce(),de("div",{class:"row",key:Oe},[Be(hl,{onExecEditPage:Fe=>U(Z.id),onExecDelPage:Fe=>X(Z.id),onExecPositionPageUp:Fe=>ue(Z.id),onExecPositionPageDown:Fe=>ae(Z.id),pre_loader:E.value,p:Z,lang:x.value,allPages:P.value,showPageId:!0,currentPageId:ht.value},null,8,["onExecEditPage","onExecDelPage","onExecPositionPageUp","onExecPositionPageDown","pre_loader","p","lang","allPages","currentPageId"])]))),128))])):He("",!0)])]),N("div",w8,[N("button",{role:"button_save_edit_page",onClick:qt(We,["prevent"]),type:"submit",class:"add-page-btn btn btn-primary mt-2 mb-2 me-2",disabled:E.value},[E.value?He("",!0):(ce(),de("i",C8)),E.value?(ce(),de("span",v8)):He("",!0),ht.value?He("",!0):(ce(),de("span",y8,"Add page")),ht.value?(ce(),de("span",x8,"Edit page")):He("",!0)],8,A8),N("button",{role:"button_clear_page_data",onClick:qt(gt,["prevent"]),class:"add-page-btn btn btn-info ms-2 mt-2 mb-2",disabled:E.value}," Clear data ",8,E8),N("form",null,[N("div",D8,[at(N("input",{class:Ne(["form-control",{"is-invalid":M.value.includes("title")}]),"onUpdate:modelValue":te[3]||(te[3]=Z=>H.value[x.value]=Z),placeholder:`title ${x.value}`},null,10,S8),[[St,H.value[x.value]]])]),N("div",T8,[at(N("input",{class:Ne(["form-control",{"is-invalid":M.value.includes("short_title")}]),"onUpdate:modelValue":te[4]||(te[4]=Z=>q.value[x.value]=Z),placeholder:`short title ${x.value}`},null,10,I8),[[St,q.value[x.value]]])]),N("div",M8,[at(N("textarea",{class:"form-control",rows:"4",cols:"50","onUpdate:modelValue":te[5]||(te[5]=Z=>G.value[x.value]=Z),placeholder:`description ${x.value}`},null,8,B8),[[St,G.value[x.value]]])]),N("div",P8,[N("label",{class:Ne({"disabled-if-loader":E.value}),disabled:E.value},[at(N("input",{class:"col-1",name:"published",type:"checkbox","onUpdate:modelValue":te[6]||(te[6]=Z=>W.value=Z),"true-value":1},null,512),[[wo,W.value]]),tt(" Published ")],10,N8)]),N("div",O8,[N("label",{class:Ne({"disabled-if-loader":E.value}),disabled:E.value},[at(N("input",{class:"col-1",name:"commented",type:"checkbox","onUpdate:modelValue":te[7]||(te[7]=Z=>K.value=Z),"true-value":1},null,512),[[wo,K.value]]),tt(" Commented ")],10,L8)]),N("div",R8,[N("label",{class:Ne({"disabled-if-loader":E.value}),disabled:E.value},[at(N("input",{class:"col-1",name:"after_login",type:"checkbox","onUpdate:modelValue":te[8]||(te[8]=Z=>le.value=Z),"true-value":1},null,512),[[wo,le.value]]),tt(" Available after log in ")],10,z8)]),N("div",j8,[F8,at(N("select",{class:Ne([{"disabled-if-loader":E.value},"rs-select form-control"]),disabled:E.value,id:"pageType","onUpdate:modelValue":te[9]||(te[9]=Z=>V.value=Z)},[(ce(!0),de(Je,null,Rt(Xe(f),Z=>(ce(),de("option",{key:Z,value:Z},Ze(Z),9,U8))),128))],10,V8),[[Kr,V.value]])]),V.value!=="main_page"?(ce(),de("div",H8,[N("div",$8,[q8,at(N("select",{class:Ne([{"disabled-if-loader":E.value},"rs-select form-control"]),disabled:E.value,role:"menu_items","onUpdate:modelValue":te[10]||(te[10]=Z=>J.value=Z),onChange:_e},[G8,(ce(!0),de(Je,null,Rt(me.value,Z=>(ce(),de("option",{key:Z.id,value:Z.id},Ze(Z.name[x.value]),9,K8))),128))],42,W8),[[Kr,J.value]])]),N("div",Y8,[Q8,at(N("select",{class:Ne([{"disabled-if-loader":E.value},"rs-select form-control"]),disabled:E.value,role:"page_items","onUpdate:modelValue":te[11]||(te[11]=Z=>he.value=Z)},[J8,(ce(!0),de(Je,null,Rt(be.value,Z=>(ce(),de("option",{key:Z.id,value:Z.id},Ze(Z.short_title[x.value]),9,X8))),128))],10,Z8),[[Kr,he.value]])])])):He("",!0),N("div",eV,[V.value==="cms"||V.value==="inner"||V.value==="privacy_policy"?(ce(),de("div",tV,[nV,Be(Xe(ve),{editor:Wt.value,modelValue:I.value[x.value],"onUpdate:modelValue":te[12]||(te[12]=Z=>I.value[x.value]=Z),config:Nt.value},null,8,["editor","modelValue","config"])])):(ce(),de("div",oV,[at(N("textarea",{class:"form-control textarea-rs",rows:"20",cols:"50","onUpdate:modelValue":te[13]||(te[13]=Z=>I.value[x.value]=Z),placeholder:`content ${x.value}`},null,8,iV),[[St,I.value[x.value]]])]))]),Be(Kx,{ref_key:"childImageComponentRef",ref:w,"internal-images":Ae.value,"onUpdate:internalImages":te[14]||(te[14]=Z=>Ae.value=Z),"internal-msg-wrong":y.value,"onUpdate:internalMsgWrong":te[15]||(te[15]=Z=>y.value=Z),"internal-msg-good":A.value,"onUpdate:internalMsgGood":te[16]||(te[16]=Z=>A.value=Z),"internal-pre-loader":E.value,"onUpdate:internalPreLoader":te[17]||(te[17]=Z=>E.value=Z),lang:x.value,startLoading:je,clearMsg:ye,currentId:ht.value,type:"page"},null,8,["internal-images","internal-msg-wrong","internal-msg-good","internal-pre-loader","lang","currentId"])])])])])]))}},sV="adm@cmsrs.pl",aV="cmsrs123",cV={class:"mt-3 col-lg-6 offset-lg-3 col-sm-8 offset-sm-2","data-testid":"login-page"},lV=N("h3",null,"Login",-1),dV={class:"card"},uV={class:"m-4"},hV=N("label",{for:"e-mail",class:"form-label"},"E-mail",-1),gV={class:"m-4"},pV=N("label",{for:"password",class:"form-label"},"Password",-1),mV={class:"text-center m-4"},fV=["disabled"],kV={key:0,class:"fas fa-plus"},bV={key:1,role:"pre_loader_login",class:"spinner-grow spinner-grow-sm"},_V=N("div",{class:"container mt-4"},[N("a",{href:"/"},"Return to the front page")],-1),wV={__name:"LoginPage",setup(s){const{auth:c,setAuth:u,setConfig:g}=Kn(),m=Ho(),w=fe(""),b=fe(""),_=fe(!1),f=so({email:"",password:""}),v=async()=>{w.value="",_.value=!1;try{const y=await T6(f);if(y.data.success){const A=y.data.data.token;if(A){const E=await I6(A);E.data.success&&(u(y.data.data),g(E.data.data),m.push("/pages"))}}else w.value=y.data.error}catch(y){w.value="Invalid login credentials",console.log("_is_error__",y)}finally{_.value=!1}};vn(async()=>{if(c.token)return m.push("/pages"),!1;const y=m.currentRoute.value.params.demo;f.email=y=="demo"||Hv?sV:"",f.password=y=="demo"||Hv?aV:""}),zt(()=>f.email,()=>{w.value=""}),zt(()=>f.password,()=>{w.value=""});const x=un(()=>!(f.password&&f.email));return(y,A)=>(ce(),de("div",cV,[lV,Be($o,{msgGood:b.value,msgWrong:w.value},null,8,["msgGood","msgWrong"]),N("form",{onSubmit:qt(v,["prevent"]),class:"container"},[N("div",dV,[N("div",uV,[hV,at(N("input",{id:"e-mail",class:"form-control pb-2","onUpdate:modelValue":A[0]||(A[0]=E=>f.email=E),type:"text"},null,512),[[St,f.email]])]),N("div",gV,[pV,at(N("input",{id:"password",class:"form-control","onUpdate:modelValue":A[1]||(A[1]=E=>f.password=E),type:"password"},null,512),[[St,f.password]])]),N("div",mV,[N("button",{type:"submit",role:"button_login",class:"btn btn-primary mt-2 mb-2",disabled:_.value||x.value},[_.value?He("",!0):(ce(),de("i",kV)),_.value?(ce(),de("span",bV)):He("",!0),tt(" Login ")],8,fV)])])],32),_V]))}},AV=["role"],CV=["role"],dn={__name:"TableSort",props:{pre_loader:Boolean,sortColumn:String,column:String,direction:String},emits:["sortAsc","sortDesc"],setup(s){return(c,u)=>(ce(),de("span",null,[N("span",{role:"sorting_"+s.sortColumn+"_asc",class:Ne([{"disabled-if-loader":s.pre_loader},"ml-2 col-1"]),onClick:u[0]||(u[0]=qt(g=>c.$emit("sortAsc"),["prevent"]))},[N("i",{class:Ne(["fas fa-arrow-down cursor-pointer",{"text-primary":s.sortColumn==s.column&&s.direction=="asc"}]),"aria-hidden":"true"},null,2)],10,AV),N("span",{role:"sorting_"+s.sortColumn+"_desc",class:Ne([{"disabled-if-loader":s.pre_loader},"ml-2 col-1"]),onClick:u[1]||(u[1]=qt(g=>c.$emit("sortDesc"),["prevent"]))},[N("i",{class:Ne(["fas fa-arrow-up cursor-pointer",{"text-primary":s.sortColumn==s.column&&s.direction=="desc"}]),"aria-hidden":"true"},null,2)],10,CV)]))}},vV={"data-testid":"users-page"},yV=N("h3",null,"Users",-1),xV={class:"container"},EV={class:"row mb-4"},DV={class:"col-5"},SV=["disabled"],TV={key:0,class:"fas fa-plus"},IV={key:1,role:"pre_loader_add_client",class:"spinner-grow spinner-grow-sm"},MV={class:"col-7 d-flex align-items-baseline"},BV=["disabled"],PV={key:0,class:"fas fa-search"},NV={key:1,role:"pre_loader_search_client",class:"spinner-grow spinner-grow-sm"},OV=N("span",null,"Search client",-1),LV={class:"table mt-2 mb-4"},RV=N("th",{scope:"col"},"#",-1),zV={scope:"col"},jV={scope:"col"},FV={scope:"col"},VV=N("th",{scope:"col"},"Action",-1),UV={scope:"row"},HV=["onClick"],$V=["onClick"],qV=N("i",{class:"far fa-edit cursor-pointer"},null,-1),WV=[qV],GV=["onClick"],KV=N("i",{class:"fas fa-trash cursor-pointer"},null,-1),YV=[KV],QV={"aria-label":"Page navigation example"},ZV={class:"pagination justify-content-end"},JV=["onClick","innerHTML"],XV={__name:"UsersPage",setup(s){const c=Ho(),{token:u}=Tt.retrieveParamsFromStorage(),{auth:g,config:m}=Kn(),w=fe(""),b=fe(""),_=fe(!1),f=fe([]),v=fe(""),x=fe(""),y=fe(""),A=fe(""),E=fe(""),M=()=>{c.push({name:"user",params:{mode:"add"}})},P=V=>{c.push({name:"user",params:{mode:"edit",id:V}})},z=async()=>{_.value=!0,y.value="1",A.value=E.value,await I()&&(_.value=!1)},F=async V=>{if(G(),window.confirm("Are you sure you wish to delete this item?")){_.value=!0;try{(await ej(V,u)).data.success&&await I()&&(b.value="Client has been deleted",_.value=!1)}catch(W){nn(W,m.demo_status,w,_)}}},j=async V=>{_.value=!0,y.value=Tt.retrieveParamsFromUrl(V,"page"),await I()&&(_.value=!1)},O=async V=>{q(V,"asc")},H=async V=>{q(V,"desc")},q=async(V,W)=>{_.value=!0,v.value=V,x.value=W,y.value="1",await I()&&(_.value=!1)},G=()=>{w.value="",b.value=""},I=async()=>{G();try{const V=await K6(v.value,x.value,u,y.value,A.value);return f.value=V.data.data,!0}catch(V){console.log("error get clients=",V)}return!1};return vn(async()=>{if(!g.token)return c.push("/"),!1;_.value=!0,v.value="created_at",x.value="desc",y.value="1",A.value="",await I()&&(_.value=!1)}),(V,W)=>(ce(),de("div",vV,[yV,Be($o,{msgGood:b.value,msgWrong:w.value},null,8,["msgGood","msgWrong"]),N("div",xV,[N("div",EV,[N("div",DV,[N("button",{role:"button_add_client",onClick:qt(M,["prevent"]),class:"add-page-btn btn btn-primary mt-2 mb-2 mr-2",disabled:_.value},[_.value?He("",!0):(ce(),de("i",TV)),_.value?(ce(),de("span",IV)):He("",!0),tt(" Add Client ")],8,SV)]),N("div",MV,[at(N("input",{type:"input",placeholder:"search: name or email",class:"form-control col",name:"search","onUpdate:modelValue":W[0]||(W[0]=K=>E.value=K)},null,512),[[St,E.value]]),N("button",{role:"button_search_client",onClick:qt(z,["prevent"]),class:"add-page-btn btn btn-primary mt-2 mb-2 mr-2",disabled:_.value},[_.value?He("",!0):(ce(),de("i",PV)),_.value?(ce(),de("span",NV)):He("",!0),OV],8,BV)])]),N("table",LV,[N("thead",null,[N("tr",null,[RV,N("th",zV,[tt(" Name "),Be(dn,{sortColumn:"name",onSortAsc:W[1]||(W[1]=K=>O("name")),onSortDesc:W[2]||(W[2]=K=>H("name")),pre_loader:_.value,column:v.value,direction:x.value},null,8,["pre_loader","column","direction"])]),N("th",jV,[tt(" Email "),Be(dn,{sortColumn:"email",onSortAsc:W[3]||(W[3]=K=>O("email")),onSortDesc:W[4]||(W[4]=K=>H("email")),pre_loader:_.value,column:v.value,direction:x.value},null,8,["pre_loader","column","direction"])]),N("th",FV,[tt(" Created "),Be(dn,{sortColumn:"created_at",onSortAsc:W[5]||(W[5]=K=>O("created_at")),onSortDesc:W[6]||(W[6]=K=>H("created_at")),pre_loader:_.value,column:v.value,direction:x.value},null,8,["pre_loader","column","direction"])]),VV])]),N("tbody",null,[(ce(!0),de(Je,null,Rt(f.value.data,(K,le)=>(ce(),de("tr",{key:le},[N("th",UV,Ze(le+1),1),N("td",null,[N("span",{onClick:J=>P(K.id),class:"cursor-pointer text-primary"},Ze(K.name),9,HV)]),N("td",null,Ze(K.email),1),N("td",null,Ze(K.created_at?K.created_at.split("T")[0]:""),1),N("td",null,[N("span",{role:"edit_client",class:Ne(["me-1",{"disabled-if-loader":_.value}]),onClick:J=>P(K.id)},WV,10,$V),N("span",{role:"del_client",class:Ne(["ms-1",{"disabled-if-loader":_.value}]),onClick:J=>F(K.id)},YV,10,GV)])]))),128))])]),N("nav",QV,[N("ul",ZV,[(ce(!0),de(Je,null,Rt(f.value.links,(K,le)=>(ce(),de("li",{key:le,class:Ne(["page-item",{disabled:!K.url||_.value,active:K.active}])},[N("a",{role:"pagination_links",class:"page-link",onClick:J=>K.url&&j(K.url),innerHTML:K.label},null,8,JV)],2))),128))])])])]))}},eU={"data-testid":"user-edit-page"},tU={key:0},nU={key:1},oU={class:"container"},iU={class:"row"},rU={class:"col"},sU=["disabled"],aU={class:"row pb-4 pt-4"},cU={class:"mb-3"},lU=N("label",{for:"email",class:"form-label"},"Email address",-1),dU=["disabled"],uU={class:"mb-3"},hU=N("label",{for:"name",class:"form-label"},"Name",-1),gU={class:"mb-3"},pU=N("label",{for:"password",class:"form-label"},"Password",-1),mU={class:"mb-3"},fU=N("label",{for:"password_confirmation",class:"form-label"},"Password confirmation",-1),kU=["disabled"],bU={key:0,class:"fas fa-plus"},_U={key:1,role:"pre_loader_add_edit_client",class:"spinner-grow spinner-grow-sm"},wU={key:2},AU={key:3},CU={__name:"UserEditPage",setup(s){const c=Ho(),{token:u}=Tt.retrieveParamsFromStorage(),g=c.currentRoute.value.params.mode,{auth:m,config:w}=Kn(),b=fe(""),_=fe(""),f=fe([]),v=fe(!1);let x=so({});const y=()=>{c.push({name:"users"})},A=()=>{b.value="",_.value=""},E=()=>({id:"",name:"",email:"",password:"",password_confirmation:""}),M=async()=>{A(),v.value=!0;try{const z=x.id?await ij(x,u):await oj(x,u);z.data.success?_.value=x.id?Ht.ttt("success_client_edit"):Ht.ttt("success_client_add"):z.data.success===!1?(b.value=await Tt.parseError(z.data.error),f.value=await Tt.getErrorFields(z.data.error)):b.value="Something wrong with add or edit client - check response status"}catch(z){nn(z,w.demo_status,b,v)}v.value=!1},P=async z=>{try{const F=await nj(z,u);if(F.data.success){const j=F.data.data;return x.id=j.id,x.name=j.name,x.email=j.email,!0}else b.value="Sth wrong with get client",console.log("error get client=",F.data)}catch(F){b.value="Sth wrong with get client (error)",console.log("error get client=",F)}return!1};return vn(async()=>{if(!m.token)return c.push("/"),!1;if(g!=="edit"&&g!=="add"&&c.push("/"),A(),x=E(),g==="edit"){const z=c.currentRoute.value.params.id;v.value=!0,await P(z)&&(v.value=!1)}}),(z,F)=>(ce(),de("div",eU,[Xe(g)==="edit"?(ce(),de("h3",tU,"Edit client")):(ce(),de("h3",nU,"Add client")),Be($o,{msgGood:_.value,msgWrong:b.value},null,8,["msgGood","msgWrong"]),N("div",oU,[N("div",iU,[N("div",rU,[N("button",{onClick:qt(y,["prevent"]),class:"add-page-btn btn btn-info ml-3 mt-2 mb-2",disabled:v.value}," Back ",8,sU)])]),N("div",aU,[N("form",null,[N("div",cU,[lU,at(N("input",{type:"email","onUpdate:modelValue":F[0]||(F[0]=j=>Xe(x).email=j),class:Ne(["form-control",{"is-invalid":f.value.includes("email")}]),id:"email","aria-describedby":"emailHelp",placeholder:"email",disabled:Xe(g)==="edit"},null,10,dU),[[St,Xe(x).email]])]),N("div",uU,[hU,at(N("input",{type:"text","onUpdate:modelValue":F[1]||(F[1]=j=>Xe(x).name=j),class:Ne(["form-control",{"is-invalid":f.value.includes("name")}]),id:"name",placeholder:"name"},null,2),[[St,Xe(x).name]])]),N("div",gU,[pU,at(N("input",{type:"password","onUpdate:modelValue":F[2]||(F[2]=j=>Xe(x).password=j),class:Ne(["form-control",{"is-invalid":f.value.includes("password")}]),id:"password",placeholder:"password"},null,2),[[St,Xe(x).password]])]),N("div",mU,[fU,at(N("input",{type:"password","onUpdate:modelValue":F[3]||(F[3]=j=>Xe(x).password_confirmation=j),class:Ne(["form-control",{"is-invalid":f.value.includes("password")}]),id:"password_confirmation",placeholder:"password confirmation"},null,2),[[St,Xe(x).password_confirmation]])]),N("button",{role:"button_save_edit_client",onClick:qt(M,["prevent"]),class:"add-page-btn btn btn-primary mt-2 mb-2 mr-2",disabled:v.value},[v.value?He("",!0):(ce(),de("i",bU)),v.value?(ce(),de("span",_U)):He("",!0),Xe(g)==="edit"?(ce(),de("span",wU,"Edit client")):(ce(),de("span",AU,"Add client"))],8,kU)])])])]))}},vU={"data-testid":"products-page"},yU={class:"container"},xU={class:"row mt-3 mb-3"},EU=N("h3",{class:"col-10"},"Products",-1),DU={class:"container"},SU={class:"row mb-4"},TU={class:"col-5"},IU=["disabled"],MU={key:0,class:"fas fa-plus"},BU={key:1,role:"pre_loader_add_product",class:"spinner-grow spinner-grow-sm"},PU={class:"col-7 d-flex align-items-baseline"},NU=["disabled"],OU={key:0,class:"fas fa-search"},LU={key:1,role:"pre_loader_search_product",class:"spinner-grow spinner-grow-sm"},RU=N("span",null,"Search product",-1),zU={class:"table mt-2 mb-4"},jU=N("th",{scope:"col"},"#",-1),FU=N("th",{scope:"col"},"Image",-1),VU={scope:"col"},UU={scope:"col"},HU={scope:"col"},$U={scope:"col"},qU={scope:"col"},WU={scope:"col"},GU=N("th",{scope:"col"},"Action",-1),KU={scope:"row"},YU=["onClick"],QU={key:0},ZU=["src","alt"],JU={key:1},XU=["onClick","role"],eH=["onClick"],tH={key:0,class:"fa fa-check","aria-hidden":"true"},nH={key:1,class:"fa fa-times","aria-hidden":"true"},oH=["onClick"],iH=N("i",{class:"far fa-edit cursor-pointer"},null,-1),rH=[iH],sH=["onClick"],aH=N("i",{class:"fas fa-trash cursor-pointer"},null,-1),cH=[aH],lH={"aria-label":"Page navigation example"},dH={class:"pagination justify-content-end"},uH=["onClick","innerHTML"],hH={__name:"ProductsPage",setup(s){const{auth:c,config:u,setDefaultLang:g}=Kn(),m=Ho(),{configDefaultLang:w}=Tt.retrieveParamsFromStorage(),b=fe(w),_=fe(""),f=fe(""),v=fe(!1),x=fe([]),y=fe(""),A=fe(""),E=fe(""),M=fe(""),P=fe(""),z=fe(window.innerWidth),F=()=>{z.value=window.innerWidth},j=un(()=>z.value<990?"fa fa-camera-retro fa-lg":"fa fa-camera-retro fa-3x"),O=()=>{m.push({name:"product",params:{mode:"add"}})},H=be=>{m.push({name:"product",params:{mode:"edit",id:be}})};async function q(be){v.value=!0,b.value=be,g(be),await Ae()&&(v.value=!1)}const G=async()=>{v.value=!0,E.value="1",M.value=P.value,await Ae()&&(v.value=!1)},I=be=>{m.push("/pages/"+be)},V=async be=>{if(he(),window.confirm("Are you sure you wish to delete this item?")){v.value=!0;try{(await X6(be,c.token)).data.success&&await Ae()&&(f.value="Product has been deleted",v.value=!1)}catch(Y){nn(Y,u.demo_status,_,v)}}},W=async be=>{v.value=!0,E.value=Tt.retrieveParamsFromUrl(be,"page"),await Ae()&&(v.value=!1)},K=async be=>{J(be,"asc")},le=async be=>{J(be,"desc")},J=async(be,Y)=>{v.value=!0,y.value=be,A.value=Y,E.value="1",await Ae()&&(v.value=!1)},he=()=>{_.value="",f.value=""},Ae=async()=>{he();try{const be=await Q6(b.value,y.value,A.value,c.token,E.value,M.value);return x.value=be.data.data,!0}catch(be){console.log("error get products=",be)}return!1};return vn(async()=>{if(!c.token||!u.is_shop)return m.push("/"),!1;v.value=!0,window.addEventListener("resize",F),y.value="created_at",A.value="desc",E.value="1",M.value="",await Ae()&&(v.value=!1)}),(be,Y)=>(ce(),de("div",vU,[N("div",yU,[N("div",xU,[EU,Be(id,{lang:b.value,onExecChangeLang:q},null,8,["lang"])])]),Be($o,{msgGood:f.value,msgWrong:_.value},null,8,["msgGood","msgWrong"]),N("div",DU,[N("div",SU,[N("div",TU,[N("button",{role:"button_add_product",onClick:qt(O,["prevent"]),class:"add-page-btn btn btn-primary mt-2 mb-2 mr-2",disabled:v.value},[v.value?He("",!0):(ce(),de("i",MU)),v.value?(ce(),de("span",BU)):He("",!0),tt(" Add Product ")],8,IU)]),N("div",PU,[at(N("input",{type:"input",placeholder:"search: name or sku",class:"form-control col",name:"search","onUpdate:modelValue":Y[0]||(Y[0]=ne=>P.value=ne)},null,512),[[St,P.value]]),N("button",{role:"button_search_product",onClick:qt(G,["prevent"]),class:"add-page-btn btn btn-primary mt-2 mb-2 mr-2",disabled:v.value},[v.value?He("",!0):(ce(),de("i",OU)),v.value?(ce(),de("span",LU)):He("",!0),RU],8,NU)])]),N("table",zU,[N("thead",null,[N("tr",null,[jU,FU,N("th",VU,[tt(" Product name "),Be(dn,{sortColumn:"product_name",onSortAsc:Y[1]||(Y[1]=ne=>K("product_name")),onSortDesc:Y[2]||(Y[2]=ne=>le("product_name")),pre_loader:v.value,column:y.value,direction:A.value},null,8,["pre_loader","column","direction"])]),N("th",UU,[tt(" Page "),Be(dn,{sortColumn:"page_short_title",onSortAsc:Y[3]||(Y[3]=ne=>K("page_short_title")),onSortDesc:Y[4]||(Y[4]=ne=>le("page_short_title")),pre_loader:v.value,column:y.value,direction:A.value},null,8,["pre_loader","column","direction"])]),N("th",HU,[tt(" Sku "),Be(dn,{sortColumn:"sku",onSortAsc:Y[5]||(Y[5]=ne=>K("sku")),onSortDesc:Y[6]||(Y[6]=ne=>le("sku")),pre_loader:v.value,column:y.value,direction:A.value},null,8,["pre_loader","column","direction"])]),N("th",$U,[tt(" Price "),Be(dn,{sortColumn:"price",onSortAsc:Y[7]||(Y[7]=ne=>K("price")),onSortDesc:Y[8]||(Y[8]=ne=>le("price")),pre_loader:v.value,column:y.value,direction:A.value},null,8,["pre_loader","column","direction"])]),N("th",qU,[tt(" Pub "),Be(dn,{sortColumn:"published",onSortAsc:Y[9]||(Y[9]=ne=>K("published")),onSortDesc:Y[10]||(Y[10]=ne=>le("published")),pre_loader:v.value,column:y.value,direction:A.value},null,8,["pre_loader","column","direction"])]),N("th",WU,[tt(" Created "),Be(dn,{sortColumn:"created_at",onSortAsc:Y[11]||(Y[11]=ne=>K("created_at")),onSortDesc:Y[12]||(Y[12]=ne=>le("created_at")),pre_loader:v.value,column:y.value,direction:A.value},null,8,["pre_loader","column","direction"])]),GU])]),N("tbody",null,[(ce(!0),de(Je,null,Rt(x.value.data,(ne,me)=>(ce(),de("tr",{key:me},[N("th",KU,Ze(me+1),1),N("td",{onClick:vt=>H(ne.id)},[ne.images!==null&&typeof ne.images=="object"&&typeof ne.images[0]=="object"?(ce(),de("span",QU,[N("img",{style:{width:"40%"},src:Xe(Mx)+ne.images[0].fs.small,alt:ne.images[0].alt[b.value]},null,8,ZU)])):(ce(),de("span",JU,[N("i",{class:Ne(j.value)},null,2)]))],8,YU),N("td",{onClick:vt=>H(ne.id),role:"product_name_"+b.value,class:"cursor-pointer text-primary"},Ze(ne.product_name),9,XU),N("td",null,[N("span",{onClick:vt=>I(ne.page_id),class:"cursor-pointer text-primary"},Ze(ne.page_short_title),9,eH)]),N("td",null,Ze(ne.sku),1),N("td",null,Ze(ne.price),1),N("td",null,[ne.published?(ce(),de("i",tH)):He("",!0),ne.published?He("",!0):(ce(),de("i",nH))]),N("td",null,Ze(ne.created_at?ne.created_at.split("T")[0]:""),1),N("td",null,[N("span",{role:"edit_product",class:Ne(["me-1",{"disabled-if-loader":v.value}]),onClick:vt=>H(ne.id)},rH,10,oH),N("span",{role:"del_product",class:Ne(["ms-1",{"disabled-if-loader":v.value}]),onClick:vt=>V(ne.id)},cH,10,sH)])]))),128))])]),N("nav",lH,[N("ul",dH,[(ce(!0),de(Je,null,Rt(x.value.links,(ne,me)=>(ce(),de("li",{key:me,class:Ne(["page-item",{disabled:!ne.url||v.value,active:ne.active}])},[N("a",{role:"pagination_links",class:"page-link",onClick:vt=>ne.url&&W(ne.url),innerHTML:ne.label},null,8,uH)],2))),128))])])])]))}},gH={"data-testid":"contacts-page"},pH=N("h3",null,"Contacts",-1),mH={class:"container"},fH={class:"row mb-4"},kH=N("div",{class:"col-5"}," ",-1),bH={class:"col-7 d-flex align-items-baseline"},_H=["disabled"],wH={key:0,class:"fas fa-search"},AH={key:1,role:"pre_loader_search_contact",class:"spinner-grow spinner-grow-sm"},CH=N("span",null,"Search contacts",-1),vH={class:"table mt-2 mb-4"},yH=N("th",{scope:"col"},"#",-1),xH={scope:"col"},EH={scope:"col"},DH={scope:"col"},SH=N("th",{scope:"col"},"Action",-1),TH={scope:"row"},IH=["onClick"],MH=N("i",{class:"fas fa-trash cursor-pointer"},null,-1),BH=[MH],PH={"aria-label":"Page navigation example"},NH={class:"pagination justify-content-end"},OH=["onClick","innerHTML"],LH={__name:"ContactsPage",setup(s){const{auth:c,config:u}=Kn(),g=Ho(),{token:m}=Tt.retrieveParamsFromStorage(),w=fe(""),b=fe(""),_=fe(!1),f=fe([]),v=fe(""),x=fe(""),y=fe(""),A=fe(""),E=fe(""),M=async()=>{_.value=!0,y.value="1",A.value=E.value,await q()&&(_.value=!1)},P=async G=>{if(H(),window.confirm("Are you sure you wish to delete this item?")){_.value=!0;try{(await tj(G,m)).data.success&&await q()&&(b.value="Contact has been deleted",_.value=!1)}catch(I){nn(I,u.demo_status,w,_)}}},z=async G=>{_.value=!0,y.value=Tt.retrieveParamsFromUrl(G,"page"),await q()&&(_.value=!1)},F=async G=>{O(G,"asc")},j=async G=>{O(G,"desc")},O=async(G,I)=>{_.value=!0,v.value=G,x.value=I,y.value="1",await q()&&(_.value=!1)},H=()=>{w.value="",b.value=""},q=async()=>{H();try{const G=await Y6(v.value,x.value,m,y.value,A.value);return f.value=G.data.data,!0}catch(G){console.log("error get contacts=",G)}return!1};return vn(async()=>{if(!c.token)return g.push("/"),!1;_.value=!0,v.value="created_at",x.value="desc",y.value="1",A.value="",await q()&&(_.value=!1)}),(G,I)=>(ce(),de("div",gH,[pH,Be($o,{msgGood:b.value,msgWrong:w.value},null,8,["msgGood","msgWrong"]),N("div",mH,[N("div",fH,[kH,N("div",bH,[at(N("input",{type:"input",placeholder:"search: email or message",class:"form-control col",name:"search","onUpdate:modelValue":I[0]||(I[0]=V=>E.value=V)},null,512),[[St,E.value]]),N("button",{role:"button_search_contact",onClick:qt(M,["prevent"]),class:"add-page-btn btn btn-primary mt-2 mb-2 mr-2",disabled:_.value},[_.value?He("",!0):(ce(),de("i",wH)),_.value?(ce(),de("span",AH)):He("",!0),CH],8,_H)])]),N("table",vH,[N("thead",null,[N("tr",null,[yH,N("th",xH,[tt(" Email "),Be(dn,{sortColumn:"email",onSortAsc:I[1]||(I[1]=V=>F("email")),onSortDesc:I[2]||(I[2]=V=>j("email")),pre_loader:_.value,column:v.value,direction:x.value},null,8,["pre_loader","column","direction"])]),N("th",EH,[tt(" Message "),Be(dn,{sortColumn:"message",onSortAsc:I[3]||(I[3]=V=>F("message")),onSortDesc:I[4]||(I[4]=V=>j("message")),pre_loader:_.value,column:v.value,direction:x.value},null,8,["pre_loader","column","direction"])]),N("th",DH,[tt(" Created "),Be(dn,{sortColumn:"created_at",onSortAsc:I[5]||(I[5]=V=>F("created_at")),onSortDesc:I[6]||(I[6]=V=>j("created_at")),pre_loader:_.value,column:v.value,direction:x.value},null,8,["pre_loader","column","direction"])]),SH])]),N("tbody",null,[(ce(!0),de(Je,null,Rt(f.value.data,(V,W)=>(ce(),de("tr",{key:W},[N("th",TH,Ze(W+1),1),N("td",null,Ze(V.email),1),N("td",null,Ze(V.message),1),N("td",null,Ze(V.created_at?V.created_at.split("T")[0]:""),1),N("td",null,[N("span",{role:"del_contact",class:Ne(["ms-1",{"disabled-if-loader":_.value}]),onClick:K=>P(V.id)},BH,10,IH)])]))),128))])]),N("nav",PH,[N("ul",NH,[(ce(!0),de(Je,null,Rt(f.value.links,(V,W)=>(ce(),de("li",{key:W,class:Ne(["page-item",{disabled:!V.url||_.value,active:V.active}])},[N("a",{role:"pagination_links",class:"page-link",onClick:K=>V.url&&z(V.url),innerHTML:V.label},null,8,OH)],2))),128))])])])]))}},RH={"data-testid":"settings-page"},zH=N("h3",null,"Settings",-1),jH={class:"container"},FH={key:0,class:"form-check mt-4 row"},VH=["disabled"],UH={key:1,class:"form-check mt-4 row"},HH=["disabled"],$H=N("i",{class:"fa fa-cog","aria-hidden":"true"},null,-1),qH={class:"form-check mt-4 row"},WH=["disabled"],GH=N("i",{class:"fa fa-cog","aria-hidden":"true"},null,-1),KH={__name:"SettingsPage",setup(s){const{auth:c,config:u,setIsCacheEnable:g}=Kn(),m=fe(""),w=fe(""),b=fe(u.is_cache_enable),_=fe(!1),f=()=>{m.value="",w.value=""},v=async()=>(f(),_.value?!1:(_.value=!0,!0)),x=async()=>{if(!v())return!1;try{const E=await Bx(Tt.getPostToggleCacheEnableFile(),c.token);if(E.data.success)return b.value=E.data.data.value,g(E.data.data.value),w.value=E.data.data.message,_.value=!1,!0;m.value="Sth wrong with changeCacheEnable",console.log("error changeCacheEnable",E.data)}catch(E){nn(E,u.demo_status,m,_)}return!1},y=async()=>{if(!v())return!1;try{const E=await cj(c.token);if(E.data.success)return w.value=Ht.ttt("cache_was_cleared"),_.value=!1,!0;m.value="Sth wrong with actionClearCache",console.log("error actionClearCache",E.data)}catch(E){nn(E,u.demo_status,m,_)}return!1},A=async()=>{if(!v())return!1;try{const E=await lj(c.token);if(E.data.success)return w.value=Ht.ttt("sitemap_was_created"),_.value=!1,!0;m.value="Sth wrong with actionCreateSitemap",console.log("error actionCreateSitemap",E.data)}catch(E){nn(E,u.demo_status,m,_)}return!1};return vn(async()=>{if(!c.token)return router.push("/"),!1;f()}),zt(()=>u.is_cache_enable,E=>{b.value=E}),(E,M)=>(ce(),de("div",RH,[zH,Be($o,{msgGood:w.value,msgWrong:m.value},null,8,["msgGood","msgWrong"]),N("div",jH,[N("form",null,[Xe(u).cache_enable?(ce(),de("div",FH,[N("label",{class:Ne({"disabled-if-loader":_.value}),disabled:_.value},[at(N("input",{role:"toggle_cache_enable",type:"checkbox","onUpdate:modelValue":M[0]||(M[0]=P=>b.value=P),onClick:qt(x,["prevent"]),"true-value":!0},null,512),[[wo,b.value]]),tt(" "+Ze(Xe(Ht).ttt("toggle_cache_enable")),1)],10,VH)])):He("",!0),Xe(u).cache_enable?(ce(),de("div",UH,[N("label",{role:"clear_cache",onClick:qt(y,["prevent"]),class:Ne({"disabled-if-loader":_.value}),disabled:_.value},[$H,tt(" "+Ze(Xe(Ht).ttt("clear_cache")),1)],10,HH)])):He("",!0),N("div",qH,[N("label",{role:"create_sitemap",onClick:qt(A,["prevent"]),class:Ne({"disabled-if-loader":_.value}),disabled:_.value},[GH,tt(" "+Ze(Xe(Ht).ttt("create_sitemap")),1)],10,WH)])])])]))}},YH={"data-testid":"product-edit-page"},QH={class:"container"},ZH={class:"row mt-3 mb-3"},JH={key:0,class:"col-10"},XH={key:1,class:"col-10"},e$={class:"container"},t$={class:"row"},n$={class:"col"},o$=["disabled"],i$={class:"row pb-4 pt-4"},r$={class:"mb-3"},s$=N("label",{for:"product_name",class:"form-label"},"Product Name",-1),a$=["role"],c$={class:"mb-3"},l$=N("label",{for:"sku",class:"form-label"},"Sku",-1),d$={class:"mb-3"},u$=N("label",{for:"price",class:"form-label"},"Price",-1),h$={class:"form-check mt-2 row"},g$={class:"form-group"},p$={class:"form-group mt-3"},m$=N("label",{for:"page",class:"text-secondary"},"Page:",-1),f$=N("option",{value:""},null,-1),k$=["value"],b$=["disabled"],_$={key:0,class:"fas fa-plus"},w$={key:1,role:"pre_loader_add_edit_product",class:"spinner-grow spinner-grow-sm"},A$={key:2},C$={key:3},v$={__name:"ProductEditPage",setup(s){const{auth:c,config:u,setDefaultLang:g}=Kn(),m=fe(null),{configLangs:w,configDefaultLang:b}=Tt.retrieveParamsFromStorage(),_=fe(b),f=Ho(),v=f.currentRoute.value.params.mode,x=fe(""),y=fe(""),A=fe([]),E=fe(!1),M=fe([]),P=fe(!1),z=fe(Tt.createEmptyObj(w)),F=fe(""),j=fe(""),O=fe(!1),H=fe(Tt.createEmptyObj(w)),q=fe(""),G=fe([]);async function I(be){_.value=be,g(be),K()}const V=()=>{f.push({name:"products"})},W=async()=>(le(),E.value?!1:(E.value=!0,!0)),K=()=>{x.value="",y.value=""},le=()=>{x.value="",y.value="",A.value=[]},J=async()=>{if(!W())return!1;try{const be={id:P.value,product_name:z.value,sku:F.value,price:j.value,published:O.value,product_description:H.value,page_id:q.value,images:G.value},Y=be.id?await aj(be,c.token):await sj(be,c.token);Y.data.success?be.id?y.value=Ht.ttt("success_product_edit"):(y.value=Ht.ttt("success_product_add"),f.push("/product/edit/"+Y.data.data.productId),P.value=Y.data.data.productId):Y.data.success===!1?(x.value=await Tt.parseError(Y.data.error),A.value=await Tt.getErrorFields(Y.data.error)):x.value="Something wrong with add or edit product - check response status"}catch(be){nn(be,u.demo_status,x,E)}E.value=!1},he=async be=>{try{const Y=await rj(be,c.token);if(Y.data.success){const ne=Y.data.data;return P.value=ne.id,z.value=ne.product_name,F.value=ne.sku,j.value=ne.price,O.value=ne.published,H.value=ne.product_description,q.value=ne.page_id,G.value=ne.images,!0}else x.value="Sth wrong with get product",console.log("error get product=",Y.data)}catch(Y){x.value="Sth wrong with get product (error)",console.log("error get product=",Y)}return!1},Ae=async()=>{try{const be=await O6("shop",c.token);if(be.data.success)return M.value=be.data.data,!0;x.value="Sth wrong with get pages by type",console.log("error get pages by type=",be.data)}catch(be){x.value="Sth wrong with get pages by type (error)",console.log("error get pages by type=",be)}return!1};return vn(async()=>{if(!c.token||!u.is_shop)return f.push("/"),!1;if(v!=="edit"&&v!=="add"&&f.push("/"),!W())return!1;if(await m.value.resetSelectedItems(),await Ae(),v==="edit"){const be=f.currentRoute.value.params.id;P.value=parseInt(be),await he(be)&&(E.value=!1)}else E.value=!1}),zt(z,()=>{K()},{deep:!0}),zt(H,()=>{K()},{deep:!0}),zt(F,()=>{K()}),zt(j,()=>{K()}),zt(O,()=>{K()}),zt(q,()=>{K()}),(be,Y)=>(ce(),de("div",YH,[N("div",QH,[N("div",ZH,[P.value?(ce(),de("h3",JH,"Edit product")):(ce(),de("h3",XH,"Add product")),Be(id,{lang:_.value,onExecChangeLang:I},null,8,["lang"])])]),Be($o,{msgGood:y.value,msgWrong:x.value},null,8,["msgGood","msgWrong"]),N("div",e$,[N("div",t$,[N("div",n$,[N("button",{onClick:qt(V,["prevent"]),class:"add-page-btn btn btn-info ml-3 mt-2 mb-2",disabled:E.value}," Back ",8,o$)])]),N("div",i$,[N("form",null,[N("div",r$,[s$,at(N("input",{role:"product_name_"+_.value,type:"text","onUpdate:modelValue":Y[0]||(Y[0]=ne=>z.value[_.value]=ne),class:Ne([{"is-invalid":A.value.includes("product_name")},"form-control"]),id:"product_name",placeholder:"product name"},null,10,a$),[[St,z.value[_.value]]])]),N("div",c$,[l$,at(N("input",{type:"sku","onUpdate:modelValue":Y[1]||(Y[1]=ne=>F.value=ne),class:Ne(["form-control",{"is-invalid":A.value.includes("sku")}]),id:"sku",placeholder:"sku"},null,2),[[St,F.value]])]),N("div",d$,[u$,at(N("input",{type:"price","onUpdate:modelValue":Y[2]||(Y[2]=ne=>j.value=ne),class:Ne(["form-control",{"is-invalid":A.value.includes("price")}]),id:"price",placeholder:"price"},null,2),[[St,j.value]])]),N("div",h$,[N("label",null,[at(N("input",{class:"col-1",name:"published",type:"checkbox","onUpdate:modelValue":Y[3]||(Y[3]=ne=>O.value=ne),"true-value":1},null,512),[[wo,O.value]]),tt(" Published ")])]),N("div",g$,[at(N("textarea",{class:"form-control textarea-rs",rows:"20",cols:"50","onUpdate:modelValue":Y[4]||(Y[4]=ne=>H.value[_.value]=ne),placeholder:"product description"},null,512),[[St,H.value[_.value]]])]),N("div",p$,[m$,at(N("select",{role:"page_items",class:"rs-select form-control","onUpdate:modelValue":Y[5]||(Y[5]=ne=>q.value=ne)},[f$,(ce(!0),de(Je,null,Rt(M.value,ne=>(ce(),de("option",{key:ne.id,value:ne.id},Ze(ne.short_title[_.value]),9,k$))),128))],512),[[Kr,q.value]])]),Be(Kx,{ref_key:"childImageComponentRef",ref:m,"internal-images":G.value,"onUpdate:internalImages":Y[6]||(Y[6]=ne=>G.value=ne),"internal-msg-wrong":x.value,"onUpdate:internalMsgWrong":Y[7]||(Y[7]=ne=>x.value=ne),"internal-msg-good":y.value,"onUpdate:internalMsgGood":Y[8]||(Y[8]=ne=>y.value=ne),"internal-pre-loader":E.value,"onUpdate:internalPreLoader":Y[9]||(Y[9]=ne=>E.value=ne),lang:_.value,startLoading:W,clearMsg:le,currentId:P.value,type:"product"},null,8,["internal-images","internal-msg-wrong","internal-msg-good","internal-pre-loader","lang","currentId"]),N("button",{role:"button_save_edit_product",onClick:qt(J,["prevent"]),class:"add-page-btn btn btn-primary mt-4 mb-2 mr-2",disabled:E.value},[E.value?He("",!0):(ce(),de("i",_$)),E.value?(ce(),de("span",w$)):He("",!0),Xe(v)==="edit"?(ce(),de("span",A$,"Edit product")):(ce(),de("span",C$,"Add product"))],8,b$)])])])]))}},y$={"data-testid":"checkouts-page"},x$={class:"container"},E$={class:"row mt-3 mb-3"},D$=N("h3",{class:"col-10"},"Checkouts",-1),S$={class:"container"},T$={class:"row mb-4"},I$=N("div",{class:"col-5"}," ",-1),M$={class:"col-7 d-flex align-items-baseline"},B$=["disabled"],P$={key:0,class:"fas fa-search"},N$={key:1,role:"pre_loader_search_checkout",class:"spinner-grow spinner-grow-sm"},O$=N("span",null,"Search checkout",-1),L$={class:"table mt-2 mb-4"},R$=N("th",{scope:"col"},"#",-1),z$=N("th",{scope:"col"},"Email",-1),j$=N("th",{scope:"col"},"Telephone",-1),F$={scope:"col"},V$={scope:"col"},U$=N("th",{scope:"col"},"Basket price",-1),H$=N("th",{scope:"col"},"Deliver price",-1),$$=N("th",{scope:"col"},"Basket",-1),q$={scope:"col"},W$=N("th",{scope:"col"},"Action",-1),G$={scope:"row"},K$=["onClick"],Y$=["role"],Q$=["onClick"],Z$=["onClick"],J$=N("i",{class:"far fa-money-bill-alt cursor-pointer","aria-hidden":"true"},null,-1),X$=[J$],eq={key:1},tq={"aria-label":"Page navigation example"},nq={class:"pagination justify-content-end"},oq=["onClick","innerHTML"],iq={__name:"CheckoutsPage",setup(s){const{auth:c,config:u,setDefaultLang:g}=Kn(),m=Ho(),{configDefaultLang:w}=Tt.retrieveParamsFromStorage(),b=fe(w),_=fe(""),f=fe(""),v=fe(!1),x=fe([]),y=fe(""),A=fe(""),E=fe(""),M=fe(""),P=fe(""),z=J=>{m.push({name:"user",params:{mode:"edit",id:J}})},F=J=>{m.push({name:"product",params:{mode:"edit",id:J}})},j=async J=>{if(!W())return!1;try{const he=await J6({is_pay:1},J,c.token);if(he.data.success){if(await le())return f.value=Ht.ttt("success_edit_checkout"),v.value=!1,!0}else _.value="Sth wrong with edit checkout",console.log("error putCheckout",he.data)}catch(he){nn(he,u.demo_status,_,v)}return!1};async function O(J){v.value=!0,b.value=J,g(J),await le()&&(v.value=!1)}const H=async()=>{v.value=!0,E.value="1",M.value=P.value,await le()&&(v.value=!1)},q=async J=>{v.value=!0,E.value=Tt.retrieveParamsFromUrl(J,"page"),await le()&&(v.value=!1)},G=async J=>{V(J,"asc")},I=async J=>{V(J,"desc")},V=async(J,he)=>{v.value=!0,y.value=J,A.value=he,E.value="1",await le()&&(v.value=!1)},W=async()=>(K(),v.value?!1:(v.value=!0,!0)),K=()=>{_.value="",f.value=""},le=async()=>{K();try{const J=await Z6(b.value,y.value,A.value,c.token,E.value,M.value);return x.value=J.data.data,!0}catch(J){console.log("error get checkouts=",J)}return!1};return vn(async()=>{if(!c.token||!u.is_shop)return m.push("/"),!1;v.value=!0,y.value="created_at",A.value="desc",E.value="1",M.value="",await le()&&(v.value=!1)}),zt(P,()=>{K()}),(J,he)=>(ce(),de("div",y$,[N("div",x$,[N("div",E$,[D$,Be(id,{lang:b.value,onExecChangeLang:O},null,8,["lang"])])]),Be($o,{msgGood:f.value,msgWrong:_.value},null,8,["msgGood","msgWrong"]),N("div",S$,[N("div",T$,[I$,N("div",M$,[at(N("input",{type:"input",placeholder:"search: email",class:"form-control col",name:"search","onUpdate:modelValue":he[0]||(he[0]=Ae=>P.value=Ae)},null,512),[[St,P.value]]),N("button",{role:"button_search_checkout",onClick:qt(H,["prevent"]),class:"add-page-btn btn btn-primary mt-2 mb-2 mr-2",disabled:v.value},[v.value?He("",!0):(ce(),de("i",P$)),v.value?(ce(),de("span",N$)):He("",!0),O$],8,B$)])]),N("table",L$,[N("thead",null,[N("tr",null,[R$,z$,j$,N("th",F$,[tt(" Id "),Be(dn,{sortColumn:"id",onSortAsc:he[1]||(he[1]=Ae=>G("id")),onSortDesc:he[2]||(he[2]=Ae=>I("id")),pre_loader:v.value,column:y.value,direction:A.value},null,8,["pre_loader","column","direction"])]),N("th",V$,[tt(" Total price "),Be(dn,{sortColumn:"price_total_add_deliver",onSortAsc:he[3]||(he[3]=Ae=>G("price_total_add_deliver")),onSortDesc:he[4]||(he[4]=Ae=>I("price_total_add_deliver")),pre_loader:v.value,column:y.value,direction:A.value},null,8,["pre_loader","column","direction"])]),U$,H$,$$,N("th",q$,[tt(" Created "),Be(dn,{sortColumn:"created_at",onSortAsc:he[5]||(he[5]=Ae=>G("created_at")),onSortDesc:he[6]||(he[6]=Ae=>I("created_at")),pre_loader:v.value,column:y.value,direction:A.value},null,8,["pre_loader","column","direction"])]),W$])]),N("tbody",null,[(ce(!0),de(Je,null,Rt(x.value.data,(Ae,be)=>(ce(),de("tr",{key:be},[N("th",G$,Ze(be+1),1),N("td",null,[N("a",{class:"cursor-pointer text-primary",onClick:Y=>z(Ae.user_id)},Ze(Ae.email),9,K$)]),N("td",null,Ze(Ae.telephone),1),N("td",null,Ze(Ae.id),1),N("td",{role:"price_total_add_deliver_"+b.value},[N("b",null,Ze(Ae.price_total_add_deliver),1)],8,Y$),N("td",null,Ze(Ae.price_total),1),N("td",null,Ze(Ae.price_deliver),1),N("td",null,[N("div",null,[(ce(!0),de(Je,null,Rt(Ae.baskets,Y=>(ce(),de("div",{key:Y.product_id,class:"text-nowrap"},[N("a",{class:"cursor-pointer text-primary",onClick:ne=>F(Y.product_id)},Ze(Y.product_name),9,Q$),tt(" "+Ze(Y.qty)+" x "+Ze(Y.price),1)]))),128))])]),N("td",null,Ze(Ae.created_at?Ae.created_at.split("T")[0]:""),1),N("td",null,[Ae.is_pay?(ce(),de("span",eq," Paid ")):(ce(),de("span",{key:0,role:"edit_checkout",class:Ne(["me-1",{"disabled-if-loader":v.value}]),onClick:Y=>j(Ae.id)},X$,10,Z$))])]))),128))])]),N("nav",tq,[N("ul",nq,[(ce(!0),de(Je,null,Rt(x.value.links,(Ae,be)=>(ce(),de("li",{key:be,class:Ne(["page-item",{disabled:!Ae.url||v.value,active:Ae.active}])},[N("a",{role:"pagination_links",class:"page-link",onClick:Y=>Ae.url&&q(Ae.url),innerHTML:Ae.label},null,8,oq)],2))),128))])])])]))}},rq=[{path:"/:demo?",component:wV,props:!0},{path:"/pages/:id?",component:rV},{path:"/users",name:"users",component:XV},{path:"/user/:mode/:id?",component:CU,name:"user",props:!0},{path:"/products",name:"products",component:hH},{path:"/product/:mode/:id?",component:v$,name:"product",props:!0},{path:"/contacts",component:LH},{path:"/settings",component:KH},{path:"/checkouts",component:iq}],sq=h9({history:Fj("/admin"),routes:rq}),Kg=tx(x9);Kg.use(I7());Kg.use(sq);Kg.mount("#app");