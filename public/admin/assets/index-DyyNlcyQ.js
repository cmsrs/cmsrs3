(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))g(m);new MutationObserver(m=>{for(const _ of m)if(_.type==="childList")for(const b of _.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&g(b)}).observe(document,{childList:!0,subtree:!0});function u(m){const _={};return m.integrity&&(_.integrity=m.integrity),m.referrerPolicy&&(_.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?_.credentials="include":m.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function g(m){if(m.ep)return;m.ep=!0;const _=u(m);fetch(m.href,_)}})();/**
* @vue/shared v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Il(s,l){const u=new Set(s.split(","));return l?g=>u.has(g.toLowerCase()):g=>u.has(g)}const kt={},jr=[],An=()=>{},YN=()=>!1,wa=s=>s.charCodeAt(0)===111&&s.charCodeAt(1)===110&&(s.charCodeAt(2)>122||s.charCodeAt(2)<97),lg=s=>s.startsWith("onUpdate:"),Mt=Object.assign,dg=(s,l)=>{const u=s.indexOf(l);u>-1&&s.splice(u,1)},QN=Object.prototype.hasOwnProperty,gt=(s,l)=>QN.call(s,l),Ne=Array.isArray,Fr=s=>os(s)==="[object Map]",or=s=>os(s)==="[object Set]",jC=s=>os(s)==="[object Date]",ZN=s=>os(s)==="[object RegExp]",We=s=>typeof s=="function",Bt=s=>typeof s=="string",Vo=s=>typeof s=="symbol",Ct=s=>s!==null&&typeof s=="object",ug=s=>(Ct(s)||We(s))&&We(s.then)&&We(s.catch),n1=Object.prototype.toString,os=s=>n1.call(s),JN=s=>os(s).slice(8,-1),o1=s=>os(s)==="[object Object]",hg=s=>Bt(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,Vr=Il(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sl=s=>{const l=Object.create(null);return u=>l[u]||(l[u]=s(u))},XN=/-(\w)/g,pn=Sl(s=>s.replace(XN,(l,u)=>u?u.toUpperCase():"")),eO=/\B([A-Z])/g,On=Sl(s=>s.replace(eO,"-$1").toLowerCase()),Aa=Sl(s=>s.charAt(0).toUpperCase()+s.slice(1)),ta=Sl(s=>s?`on${Aa(s)}`:""),lo=(s,l)=>!Object.is(s,l),Ur=(s,l)=>{for(let u=0;u<s.length;u++)s[u](l)},i1=(s,l,u)=>{Object.defineProperty(s,l,{configurable:!0,enumerable:!1,value:u})},ml=s=>{const l=parseFloat(s);return isNaN(l)?s:l},fl=s=>{const l=Bt(s)?Number(s):NaN;return isNaN(l)?s:l};let FC;const r1=()=>FC||(FC=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),tO="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",nO=Il(tO);function Ji(s){if(Ne(s)){const l={};for(let u=0;u<s.length;u++){const g=s[u],m=Bt(g)?sO(g):Ji(g);if(m)for(const _ in m)l[_]=m[_]}return l}else if(Bt(s)||Ct(s))return s}const oO=/;(?![^(]*\))/g,iO=/:([^]+)/,rO=/\/\*[^]*?\*\//g;function sO(s){const l={};return s.replace(rO,"").split(oO).forEach(u=>{if(u){const g=u.split(iO);g.length>1&&(l[g[0].trim()]=g[1].trim())}}),l}function Le(s){let l="";if(Bt(s))l=s;else if(Ne(s))for(let u=0;u<s.length;u++){const g=Le(s[u]);g&&(l+=g+" ")}else if(Ct(s))for(const u in s)s[u]&&(l+=u+" ");return l.trim()}function aO(s){if(!s)return null;let{class:l,style:u}=s;return l&&!Bt(l)&&(s.class=Le(l)),u&&(s.style=Ji(u)),s}const cO="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lO=Il(cO);function s1(s){return!!s||s===""}function dO(s,l){if(s.length!==l.length)return!1;let u=!0;for(let g=0;u&&g<s.length;g++)u=fi(s[g],l[g]);return u}function fi(s,l){if(s===l)return!0;let u=jC(s),g=jC(l);if(u||g)return u&&g?s.getTime()===l.getTime():!1;if(u=Vo(s),g=Vo(l),u||g)return s===l;if(u=Ne(s),g=Ne(l),u||g)return u&&g?dO(s,l):!1;if(u=Ct(s),g=Ct(l),u||g){if(!u||!g)return!1;const m=Object.keys(s).length,_=Object.keys(l).length;if(m!==_)return!1;for(const b in s){const C=s.hasOwnProperty(b),f=l.hasOwnProperty(b);if(C&&!f||!C&&f||!fi(s[b],l[b]))return!1}}return String(s)===String(l)}function Tl(s,l){return s.findIndex(u=>fi(u,l))}const Ze=s=>Bt(s)?s:s==null?"":Ne(s)||Ct(s)&&(s.toString===n1||!We(s.toString))?JSON.stringify(s,a1,2):String(s),a1=(s,l)=>l&&l.__v_isRef?a1(s,l.value):Fr(l)?{[`Map(${l.size})`]:[...l.entries()].reduce((u,[g,m],_)=>(u[ph(g,_)+" =>"]=m,u),{})}:or(l)?{[`Set(${l.size})`]:[...l.values()].map(u=>ph(u))}:Vo(l)?ph(l):Ct(l)&&!Ne(l)&&!o1(l)?String(l):l,ph=(s,l="")=>{var u;return Vo(s)?`Symbol(${(u=s.description)!=null?u:l})`:s};/**
* @vue/reactivity v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pn;class gg{constructor(l=!1){this.detached=l,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pn,!l&&Pn&&(this.index=(Pn.scopes||(Pn.scopes=[])).push(this)-1)}get active(){return this._active}run(l){if(this._active){const u=Pn;try{return Pn=this,l()}finally{Pn=u}}}on(){Pn=this}off(){Pn=this.parent}stop(l){if(this._active){let u,g;for(u=0,g=this.effects.length;u<g;u++)this.effects[u].stop();for(u=0,g=this.cleanups.length;u<g;u++)this.cleanups[u]();if(this.scopes)for(u=0,g=this.scopes.length;u<g;u++)this.scopes[u].stop(!0);if(!this.detached&&this.parent&&!l){const m=this.parent.scopes.pop();m&&m!==this&&(this.parent.scopes[this.index]=m,m.index=this.index)}this.parent=void 0,this._active=!1}}}function pg(s){return new gg(s)}function c1(s,l=Pn){l&&l.active&&l.effects.push(s)}function mg(){return Pn}function l1(s){Pn&&Pn.cleanups.push(s)}let Ki;class Kr{constructor(l,u,g,m){this.fn=l,this.trigger=u,this.scheduler=g,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,c1(this,m)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,_i();for(let l=0;l<this._depsLength;l++){const u=this.deps[l];if(u.computed&&(uO(u.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),wi()}return this._dirtyLevel>=4}set dirty(l){this._dirtyLevel=l?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let l=pi,u=Ki;try{return pi=!0,Ki=this,this._runnings++,VC(this),this.fn()}finally{UC(this),this._runnings--,Ki=u,pi=l}}stop(){var l;this.active&&(VC(this),UC(this),(l=this.onStop)==null||l.call(this),this.active=!1)}}function uO(s){return s.value}function VC(s){s._trackId++,s._depsLength=0}function UC(s){if(s.deps.length>s._depsLength){for(let l=s._depsLength;l<s.deps.length;l++)d1(s.deps[l],s);s.deps.length=s._depsLength}}function d1(s,l){const u=s.get(l);u!==void 0&&l._trackId!==u&&(s.delete(l),s.size===0&&s.cleanup())}function hO(s,l){s.effect instanceof Kr&&(s=s.effect.fn);const u=new Kr(s,An,()=>{u.dirty&&u.run()});l&&(Mt(u,l),l.scope&&c1(u,l.scope)),(!l||!l.lazy)&&u.run();const g=u.run.bind(u);return g.effect=u,g}function gO(s){s.effect.stop()}let pi=!0,Mh=0;const u1=[];function _i(){u1.push(pi),pi=!1}function wi(){const s=u1.pop();pi=s===void 0?!0:s}function fg(){Mh++}function kg(){for(Mh--;!Mh&&Bh.length;)Bh.shift()()}function h1(s,l,u){if(l.get(s)!==s._trackId){l.set(s,s._trackId);const g=s.deps[s._depsLength];g!==l?(g&&d1(g,s),s.deps[s._depsLength++]=l):s._depsLength++}}const Bh=[];function g1(s,l,u){fg();for(const g of s.keys()){let m;g._dirtyLevel<l&&(m??(m=s.get(g)===g._trackId))&&(g._shouldSchedule||(g._shouldSchedule=g._dirtyLevel===0),g._dirtyLevel=l),g._shouldSchedule&&(m??(m=s.get(g)===g._trackId))&&(g.trigger(),(!g._runnings||g.allowRecurse)&&g._dirtyLevel!==2&&(g._shouldSchedule=!1,g.scheduler&&Bh.push(g.scheduler)))}kg()}const p1=(s,l)=>{const u=new Map;return u.cleanup=s,u.computed=l,u},kl=new WeakMap,Yi=Symbol(""),Ph=Symbol("");function vn(s,l,u){if(pi&&Ki){let g=kl.get(s);g||kl.set(s,g=new Map);let m=g.get(u);m||g.set(u,m=p1(()=>g.delete(u))),h1(Ki,m)}}function zo(s,l,u,g,m,_){const b=kl.get(s);if(!b)return;let C=[];if(l==="clear")C=[...b.values()];else if(u==="length"&&Ne(s)){const f=Number(g);b.forEach((y,x)=>{(x==="length"||!Vo(x)&&x>=f)&&C.push(y)})}else switch(u!==void 0&&C.push(b.get(u)),l){case"add":Ne(s)?hg(u)&&C.push(b.get("length")):(C.push(b.get(Yi)),Fr(s)&&C.push(b.get(Ph)));break;case"delete":Ne(s)||(C.push(b.get(Yi)),Fr(s)&&C.push(b.get(Ph)));break;case"set":Fr(s)&&C.push(b.get(Yi));break}fg();for(const f of C)f&&g1(f,4);kg()}function pO(s,l){var u;return(u=kl.get(s))==null?void 0:u.get(l)}const mO=Il("__proto__,__v_isRef,__isVue"),m1=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter(Vo)),HC=fO();function fO(){const s={};return["includes","indexOf","lastIndexOf"].forEach(l=>{s[l]=function(...u){const g=ot(this);for(let _=0,b=this.length;_<b;_++)vn(g,"get",_+"");const m=g[l](...u);return m===-1||m===!1?g[l](...u.map(ot)):m}}),["push","pop","shift","unshift","splice"].forEach(l=>{s[l]=function(...u){_i(),fg();const g=ot(this)[l].apply(this,u);return kg(),wi(),g}}),s}function kO(s){Vo(s)||(s=String(s));const l=ot(this);return vn(l,"has",s),l.hasOwnProperty(s)}class f1{constructor(l=!1,u=!1){this._isReadonly=l,this._isShallow=u}get(l,u,g){const m=this._isReadonly,_=this._isShallow;if(u==="__v_isReactive")return!m;if(u==="__v_isReadonly")return m;if(u==="__v_isShallow")return _;if(u==="__v_raw")return g===(m?_?C1:A1:_?w1:_1).get(l)||Object.getPrototypeOf(l)===Object.getPrototypeOf(g)?l:void 0;const b=Ne(l);if(!m){if(b&&gt(HC,u))return Reflect.get(HC,u,g);if(u==="hasOwnProperty")return kO}const C=Reflect.get(l,u,g);return(Vo(u)?m1.has(u):mO(u))||(m||vn(l,"get",u),_)?C:Ut(C)?b&&hg(u)?C:C.value:Ct(C)?m?wg(C):co(C):C}}class k1 extends f1{constructor(l=!1){super(!1,l)}set(l,u,g,m){let _=l[u];if(!this._isShallow){const f=Yr(_);if(!da(g)&&!Yr(g)&&(_=ot(_),g=ot(g)),!Ne(l)&&Ut(_)&&!Ut(g))return f?!1:(_.value=g,!0)}const b=Ne(l)&&hg(u)?Number(u)<l.length:gt(l,u),C=Reflect.set(l,u,g,m);return l===ot(m)&&(b?lo(g,_)&&zo(l,"set",u,g):zo(l,"add",u,g)),C}deleteProperty(l,u){const g=gt(l,u);l[u];const m=Reflect.deleteProperty(l,u);return m&&g&&zo(l,"delete",u,void 0),m}has(l,u){const g=Reflect.has(l,u);return(!Vo(u)||!m1.has(u))&&vn(l,"has",u),g}ownKeys(l){return vn(l,"iterate",Ne(l)?"length":Yi),Reflect.ownKeys(l)}}class b1 extends f1{constructor(l=!1){super(!0,l)}set(l,u){return!0}deleteProperty(l,u){return!0}}const bO=new k1,_O=new b1,wO=new k1(!0),AO=new b1(!0),bg=s=>s,Ml=s=>Reflect.getPrototypeOf(s);function Qc(s,l,u=!1,g=!1){s=s.__v_raw;const m=ot(s),_=ot(l);u||(lo(l,_)&&vn(m,"get",l),vn(m,"get",_));const{has:b}=Ml(m),C=g?bg:u?Cg:ua;if(b.call(m,l))return C(s.get(l));if(b.call(m,_))return C(s.get(_));s!==m&&s.get(l)}function Zc(s,l=!1){const u=this.__v_raw,g=ot(u),m=ot(s);return l||(lo(s,m)&&vn(g,"has",s),vn(g,"has",m)),s===m?u.has(s):u.has(s)||u.has(m)}function Jc(s,l=!1){return s=s.__v_raw,!l&&vn(ot(s),"iterate",Yi),Reflect.get(s,"size",s)}function $C(s){s=ot(s);const l=ot(this);return Ml(l).has.call(l,s)||(l.add(s),zo(l,"add",s,s)),this}function WC(s,l){l=ot(l);const u=ot(this),{has:g,get:m}=Ml(u);let _=g.call(u,s);_||(s=ot(s),_=g.call(u,s));const b=m.call(u,s);return u.set(s,l),_?lo(l,b)&&zo(u,"set",s,l):zo(u,"add",s,l),this}function qC(s){const l=ot(this),{has:u,get:g}=Ml(l);let m=u.call(l,s);m||(s=ot(s),m=u.call(l,s)),g&&g.call(l,s);const _=l.delete(s);return m&&zo(l,"delete",s,void 0),_}function GC(){const s=ot(this),l=s.size!==0,u=s.clear();return l&&zo(s,"clear",void 0,void 0),u}function Xc(s,l){return function(g,m){const _=this,b=_.__v_raw,C=ot(b),f=l?bg:s?Cg:ua;return!s&&vn(C,"iterate",Yi),b.forEach((y,x)=>g.call(m,f(y),f(x),_))}}function el(s,l,u){return function(...g){const m=this.__v_raw,_=ot(m),b=Fr(_),C=s==="entries"||s===Symbol.iterator&&b,f=s==="keys"&&b,y=m[s](...g),x=u?bg:l?Cg:ua;return!l&&vn(_,"iterate",f?Ph:Yi),{next(){const{value:v,done:w}=y.next();return w?{value:v,done:w}:{value:C?[x(v[0]),x(v[1])]:x(v),done:w}},[Symbol.iterator](){return this}}}}function ei(s){return function(...l){return s==="delete"?!1:s==="clear"?void 0:this}}function CO(){const s={get(_){return Qc(this,_)},get size(){return Jc(this)},has:Zc,add:$C,set:WC,delete:qC,clear:GC,forEach:Xc(!1,!1)},l={get(_){return Qc(this,_,!1,!0)},get size(){return Jc(this)},has:Zc,add:$C,set:WC,delete:qC,clear:GC,forEach:Xc(!1,!0)},u={get(_){return Qc(this,_,!0)},get size(){return Jc(this,!0)},has(_){return Zc.call(this,_,!0)},add:ei("add"),set:ei("set"),delete:ei("delete"),clear:ei("clear"),forEach:Xc(!0,!1)},g={get(_){return Qc(this,_,!0,!0)},get size(){return Jc(this,!0)},has(_){return Zc.call(this,_,!0)},add:ei("add"),set:ei("set"),delete:ei("delete"),clear:ei("clear"),forEach:Xc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(_=>{s[_]=el(_,!1,!1),u[_]=el(_,!0,!1),l[_]=el(_,!1,!0),g[_]=el(_,!0,!0)}),[s,u,l,g]}const[vO,yO,xO,EO]=CO();function Bl(s,l){const u=l?s?EO:xO:s?yO:vO;return(g,m,_)=>m==="__v_isReactive"?!s:m==="__v_isReadonly"?s:m==="__v_raw"?g:Reflect.get(gt(u,m)&&m in g?u:g,m,_)}const DO={get:Bl(!1,!1)},IO={get:Bl(!1,!0)},SO={get:Bl(!0,!1)},TO={get:Bl(!0,!0)},_1=new WeakMap,w1=new WeakMap,A1=new WeakMap,C1=new WeakMap;function MO(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function BO(s){return s.__v_skip||!Object.isExtensible(s)?0:MO(JN(s))}function co(s){return Yr(s)?s:Pl(s,!1,bO,DO,_1)}function _g(s){return Pl(s,!1,wO,IO,w1)}function wg(s){return Pl(s,!0,_O,SO,A1)}function PO(s){return Pl(s,!0,AO,TO,C1)}function Pl(s,l,u,g,m){if(!Ct(s)||s.__v_raw&&!(l&&s.__v_isReactive))return s;const _=m.get(s);if(_)return _;const b=BO(s);if(b===0)return s;const C=new Proxy(s,b===2?g:u);return m.set(s,C),C}function mi(s){return Yr(s)?mi(s.__v_raw):!!(s&&s.__v_isReactive)}function Yr(s){return!!(s&&s.__v_isReadonly)}function da(s){return!!(s&&s.__v_isShallow)}function Ag(s){return s?!!s.__v_raw:!1}function ot(s){const l=s&&s.__v_raw;return l?ot(l):s}function Nl(s){return Object.isExtensible(s)&&i1(s,"__v_skip",!0),s}const ua=s=>Ct(s)?co(s):s,Cg=s=>Ct(s)?wg(s):s;class v1{constructor(l,u,g,m){this.getter=l,this._setter=u,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Kr(()=>l(this._value),()=>Hr(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!m,this.__v_isReadonly=g}get value(){const l=ot(this);return(!l._cacheable||l.effect.dirty)&&lo(l._value,l._value=l.effect.run())&&Hr(l,4),vg(l),l.effect._dirtyLevel>=2&&Hr(l,2),l._value}set value(l){this._setter(l)}get _dirty(){return this.effect.dirty}set _dirty(l){this.effect.dirty=l}}function NO(s,l,u=!1){let g,m;const _=We(s);return _?(g=s,m=An):(g=s.get,m=s.set),new v1(g,m,_||!m,u)}function vg(s){var l;pi&&Ki&&(s=ot(s),h1(Ki,(l=s.dep)!=null?l:s.dep=p1(()=>s.dep=void 0,s instanceof v1?s:void 0)))}function Hr(s,l=4,u){s=ot(s);const g=s.dep;g&&g1(g,l)}function Ut(s){return!!(s&&s.__v_isRef===!0)}function me(s){return x1(s,!1)}function y1(s){return x1(s,!0)}function x1(s,l){return Ut(s)?s:new OO(s,l)}class OO{constructor(l,u){this.__v_isShallow=u,this.dep=void 0,this.__v_isRef=!0,this._rawValue=u?l:ot(l),this._value=u?l:ua(l)}get value(){return vg(this),this._value}set value(l){const u=this.__v_isShallow||da(l)||Yr(l);l=u?l:ot(l),lo(l,this._rawValue)&&(this._rawValue=l,this._value=u?l:ua(l),Hr(this,4))}}function LO(s){Hr(s,4)}function Xe(s){return Ut(s)?s.value:s}function RO(s){return We(s)?s():Xe(s)}const zO={get:(s,l,u)=>Xe(Reflect.get(s,l,u)),set:(s,l,u,g)=>{const m=s[l];return Ut(m)&&!Ut(u)?(m.value=u,!0):Reflect.set(s,l,u,g)}};function yg(s){return mi(s)?s:new Proxy(s,zO)}class jO{constructor(l){this.dep=void 0,this.__v_isRef=!0;const{get:u,set:g}=l(()=>vg(this),()=>Hr(this));this._get=u,this._set=g}get value(){return this._get()}set value(l){this._set(l)}}function E1(s){return new jO(s)}function D1(s){const l=Ne(s)?new Array(s.length):{};for(const u in s)l[u]=I1(s,u);return l}class FO{constructor(l,u,g){this._object=l,this._key=u,this._defaultValue=g,this.__v_isRef=!0}get value(){const l=this._object[this._key];return l===void 0?this._defaultValue:l}set value(l){this._object[this._key]=l}get dep(){return pO(ot(this._object),this._key)}}class VO{constructor(l){this._getter=l,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function UO(s,l,u){return Ut(s)?s:We(s)?new VO(s):Ct(s)&&arguments.length>1?I1(s,l,u):me(s)}function I1(s,l,u){const g=s[l];return Ut(g)?g:new FO(s,l,u)}const HO={GET:"get",HAS:"has",ITERATE:"iterate"},$O={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function WO(s,l){}const qO={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},GO={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function jo(s,l,u,g){try{return g?s(...g):s()}catch(m){ir(m,l,u)}}function Ln(s,l,u,g){if(We(s)){const m=jo(s,l,u,g);return m&&ug(m)&&m.catch(_=>{ir(_,l,u)}),m}if(Ne(s)){const m=[];for(let _=0;_<s.length;_++)m.push(Ln(s[_],l,u,g));return m}}function ir(s,l,u,g=!0){const m=l?l.vnode:null;if(l){let _=l.parent;const b=l.proxy,C=`https://vuejs.org/error-reference/#runtime-${u}`;for(;_;){const y=_.ec;if(y){for(let x=0;x<y.length;x++)if(y[x](s,b,C)===!1)return}_=_.parent}const f=l.appContext.config.errorHandler;if(f){_i(),jo(f,null,10,[s,b,C]),wi();return}}KO(s,u,m,g)}function KO(s,l,u,g=!0){console.error(s)}let ha=!1,Nh=!1;const cn=[];let _o=0;const $r=[];let ci=null,qi=0;const S1=Promise.resolve();let xg=null;function is(s){const l=xg||S1;return s?l.then(this?s.bind(this):s):l}function YO(s){let l=_o+1,u=cn.length;for(;l<u;){const g=l+u>>>1,m=cn[g],_=ga(m);_<s||_===s&&m.pre?l=g+1:u=g}return l}function Ol(s){(!cn.length||!cn.includes(s,ha&&s.allowRecurse?_o+1:_o))&&(s.id==null?cn.push(s):cn.splice(YO(s.id),0,s),T1())}function T1(){!ha&&!Nh&&(Nh=!0,xg=S1.then(M1))}function QO(s){const l=cn.indexOf(s);l>_o&&cn.splice(l,1)}function bl(s){Ne(s)?$r.push(...s):(!ci||!ci.includes(s,s.allowRecurse?qi+1:qi))&&$r.push(s),T1()}function KC(s,l,u=ha?_o+1:0){for(;u<cn.length;u++){const g=cn[u];if(g&&g.pre){if(s&&g.id!==s.uid)continue;cn.splice(u,1),u--,g()}}}function _l(s){if($r.length){const l=[...new Set($r)].sort((u,g)=>ga(u)-ga(g));if($r.length=0,ci){ci.push(...l);return}for(ci=l,qi=0;qi<ci.length;qi++)ci[qi]();ci=null,qi=0}}const ga=s=>s.id==null?1/0:s.id,ZO=(s,l)=>{const u=ga(s)-ga(l);if(u===0){if(s.pre&&!l.pre)return-1;if(l.pre&&!s.pre)return 1}return u};function M1(s){Nh=!1,ha=!0,cn.sort(ZO);try{for(_o=0;_o<cn.length;_o++){const l=cn[_o];l&&l.active!==!1&&jo(l,null,14)}}finally{_o=0,cn.length=0,_l(),ha=!1,xg=null,(cn.length||$r.length)&&M1()}}let Rr,tl=[];function B1(s,l){var u,g;Rr=s,Rr?(Rr.enabled=!0,tl.forEach(({event:m,args:_})=>Rr.emit(m,..._)),tl=[]):typeof window<"u"&&window.HTMLElement&&!((g=(u=window.navigator)==null?void 0:u.userAgent)!=null&&g.includes("jsdom"))?((l.__VUE_DEVTOOLS_HOOK_REPLAY__=l.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(_=>{B1(_,l)}),setTimeout(()=>{Rr||(l.__VUE_DEVTOOLS_HOOK_REPLAY__=null,tl=[])},3e3)):tl=[]}function JO(s,l,...u){if(s.isUnmounted)return;const g=s.vnode.props||kt;let m=u;const _=l.startsWith("update:"),b=_&&l.slice(7);if(b&&b in g){const x=`${b==="modelValue"?"model":b}Modifiers`,{number:v,trim:w}=g[x]||kt;w&&(m=u.map(D=>Bt(D)?D.trim():D)),v&&(m=u.map(ml))}let C,f=g[C=ta(l)]||g[C=ta(pn(l))];!f&&_&&(f=g[C=ta(On(l))]),f&&Ln(f,s,6,m);const y=g[C+"Once"];if(y){if(!s.emitted)s.emitted={};else if(s.emitted[C])return;s.emitted[C]=!0,Ln(y,s,6,m)}}function P1(s,l,u=!1){const g=l.emitsCache,m=g.get(s);if(m!==void 0)return m;const _=s.emits;let b={},C=!1;if(!We(s)){const f=y=>{const x=P1(y,l,!0);x&&(C=!0,Mt(b,x))};!u&&l.mixins.length&&l.mixins.forEach(f),s.extends&&f(s.extends),s.mixins&&s.mixins.forEach(f)}return!_&&!C?(Ct(s)&&g.set(s,null),null):(Ne(_)?_.forEach(f=>b[f]=null):Mt(b,_),Ct(s)&&g.set(s,b),b)}function Ll(s,l){return!s||!wa(l)?!1:(l=l.slice(2).replace(/Once$/,""),gt(s,l[0].toLowerCase()+l.slice(1))||gt(s,On(l))||gt(s,l))}let Wt=null,Rl=null;function pa(s){const l=Wt;return Wt=s,Rl=s&&s.type.__scopeId||null,l}function XO(s){Rl=s}function eL(){Rl=null}const tL=s=>Lo;function Lo(s,l=Wt,u){if(!l||s._n)return s;const g=(...m)=>{g._d&&Hh(-1);const _=pa(l);let b;try{b=s(...m)}finally{pa(_),g._d&&Hh(1)}return b};return g._n=!0,g._c=!0,g._d=!0,g}function ll(s){const{type:l,vnode:u,proxy:g,withProxy:m,props:_,propsOptions:[b],slots:C,attrs:f,emit:y,render:x,renderCache:v,data:w,setupState:D,ctx:M,inheritAttrs:P}=s;let L,F;const j=pa(s);try{if(u.shapeFlag&4){const V=m||g,$=V;L=Nn(x.call($,V,v,_,D,w,M)),F=f}else{const V=l;L=Nn(V.length>1?V(_,{attrs:f,slots:C,emit:y}):V(_,null)),F=l.props?f:oL(f)}}catch(V){ra.length=0,ir(V,s,1),L=Pe(ln)}let R=L;if(F&&P!==!1){const V=Object.keys(F),{shapeFlag:$}=R;V.length&&$&7&&(b&&V.some(lg)&&(F=iL(F,b)),R=Co(R,F))}return u.dirs&&(R=Co(R),R.dirs=R.dirs?R.dirs.concat(u.dirs):u.dirs),u.transition&&(R.transition=u.transition),L=R,pa(j),L}function nL(s,l=!0){let u;for(let g=0;g<s.length;g++){const m=s[g];if(ki(m)){if(m.type!==ln||m.children==="v-if"){if(u)return;u=m}}else return}return u}const oL=s=>{let l;for(const u in s)(u==="class"||u==="style"||wa(u))&&((l||(l={}))[u]=s[u]);return l},iL=(s,l)=>{const u={};for(const g in s)(!lg(g)||!(g.slice(9)in l))&&(u[g]=s[g]);return u};function rL(s,l,u){const{props:g,children:m,component:_}=s,{props:b,children:C,patchFlag:f}=l,y=_.emitsOptions;if(l.dirs||l.transition)return!0;if(u&&f>=0){if(f&1024)return!0;if(f&16)return g?YC(g,b,y):!!b;if(f&8){const x=l.dynamicProps;for(let v=0;v<x.length;v++){const w=x[v];if(b[w]!==g[w]&&!Ll(y,w))return!0}}}else return(m||C)&&(!C||!C.$stable)?!0:g===b?!1:g?b?YC(g,b,y):!0:!!b;return!1}function YC(s,l,u){const g=Object.keys(l);if(g.length!==Object.keys(s).length)return!0;for(let m=0;m<g.length;m++){const _=g[m];if(l[_]!==s[_]&&!Ll(u,_))return!0}return!1}function Eg({vnode:s,parent:l},u){for(;l;){const g=l.subTree;if(g.suspense&&g.suspense.activeBranch===s&&(g.el=s.el),g===s)(s=l.vnode).el=u,l=l.parent;else break}}const Dg="components",sL="directives";function Ig(s,l){return Sg(Dg,s,!0,l)||s}const N1=Symbol.for("v-ndc");function aL(s){return Bt(s)?Sg(Dg,s,!1)||s:s||N1}function cL(s){return Sg(sL,s)}function Sg(s,l,u=!0,g=!1){const m=Wt||Zt;if(m){const _=m.type;if(s===Dg){const C=Kh(_,!1);if(C&&(C===l||C===pn(l)||C===Aa(pn(l))))return _}const b=QC(m[s]||_[s],l)||QC(m.appContext[s],l);return!b&&g?_:b}}function QC(s,l){return s&&(s[l]||s[pn(l)]||s[Aa(pn(l))])}const O1=s=>s.__isSuspense;let Oh=0;const lL={name:"Suspense",__isSuspense:!0,process(s,l,u,g,m,_,b,C,f,y){if(s==null)uL(l,u,g,m,_,b,C,f,y);else{if(_&&_.deps>0&&!s.suspense.isInFallback){l.suspense=s.suspense,l.suspense.vnode=l,l.el=s.el;return}hL(s,l,u,g,m,b,C,f,y)}},hydrate:gL,create:Tg,normalize:pL},dL=lL;function ma(s,l){const u=s.props&&s.props[l];We(u)&&u()}function uL(s,l,u,g,m,_,b,C,f){const{p:y,o:{createElement:x}}=f,v=x("div"),w=s.suspense=Tg(s,m,g,l,v,u,_,b,C,f);y(null,w.pendingBranch=s.ssContent,v,null,g,w,_,b),w.deps>0?(ma(s,"onPending"),ma(s,"onFallback"),y(null,s.ssFallback,l,u,g,null,_,b),Wr(w,s.ssFallback)):w.resolve(!1,!0)}function hL(s,l,u,g,m,_,b,C,{p:f,um:y,o:{createElement:x}}){const v=l.suspense=s.suspense;v.vnode=l,l.el=s.el;const w=l.ssContent,D=l.ssFallback,{activeBranch:M,pendingBranch:P,isInFallback:L,isHydrating:F}=v;if(P)v.pendingBranch=w,ao(w,P)?(f(P,w,v.hiddenContainer,null,m,v,_,b,C),v.deps<=0?v.resolve():L&&(F||(f(M,D,u,g,m,null,_,b,C),Wr(v,D)))):(v.pendingId=Oh++,F?(v.isHydrating=!1,v.activeBranch=P):y(P,m,v),v.deps=0,v.effects.length=0,v.hiddenContainer=x("div"),L?(f(null,w,v.hiddenContainer,null,m,v,_,b,C),v.deps<=0?v.resolve():(f(M,D,u,g,m,null,_,b,C),Wr(v,D))):M&&ao(w,M)?(f(M,w,u,g,m,v,_,b,C),v.resolve(!0)):(f(null,w,v.hiddenContainer,null,m,v,_,b,C),v.deps<=0&&v.resolve()));else if(M&&ao(w,M))f(M,w,u,g,m,v,_,b,C),Wr(v,w);else if(ma(l,"onPending"),v.pendingBranch=w,w.shapeFlag&512?v.pendingId=w.component.suspenseId:v.pendingId=Oh++,f(null,w,v.hiddenContainer,null,m,v,_,b,C),v.deps<=0)v.resolve();else{const{timeout:j,pendingId:R}=v;j>0?setTimeout(()=>{v.pendingId===R&&v.fallback(D)},j):j===0&&v.fallback(D)}}function Tg(s,l,u,g,m,_,b,C,f,y,x=!1){const{p:v,m:w,um:D,n:M,o:{parentNode:P,remove:L}}=y;let F;const j=mL(s);j&&l!=null&&l.pendingBranch&&(F=l.pendingId,l.deps++);const R=s.props?fl(s.props.timeout):void 0,V=_,$={vnode:s,parent:l,parentComponent:u,namespace:b,container:g,hiddenContainer:m,deps:0,pendingId:Oh++,timeout:typeof R=="number"?R:-1,activeBranch:null,pendingBranch:null,isInFallback:!x,isHydrating:x,isUnmounted:!1,effects:[],resolve(K=!1,G=!1){const{vnode:H,activeBranch:T,pendingBranch:W,pendingId:de,effects:J,parentComponent:ge,container:Te}=$;let be=!1;$.isHydrating?$.isHydrating=!1:K||(be=T&&W.transition&&W.transition.mode==="out-in",be&&(T.transition.afterLeave=()=>{de===$.pendingId&&(w(W,Te,_===V?M(T):_,0),bl(J))}),T&&(P(T.el)!==$.hiddenContainer&&(_=M(T)),D(T,ge,$,!0)),be||w(W,Te,_,0)),Wr($,W),$.pendingBranch=null,$.isInFallback=!1;let Q=$.parent,te=!1;for(;Q;){if(Q.pendingBranch){Q.effects.push(...J),te=!0;break}Q=Q.parent}!te&&!be&&bl(J),$.effects=[],j&&l&&l.pendingBranch&&F===l.pendingId&&(l.deps--,l.deps===0&&!G&&l.resolve()),ma(H,"onResolve")},fallback(K){if(!$.pendingBranch)return;const{vnode:G,activeBranch:H,parentComponent:T,container:W,namespace:de}=$;ma(G,"onFallback");const J=M(H),ge=()=>{$.isInFallback&&(v(null,K,W,J,T,null,de,C,f),Wr($,K))},Te=K.transition&&K.transition.mode==="out-in";Te&&(H.transition.afterLeave=ge),$.isInFallback=!0,D(H,T,null,!0),Te||ge()},move(K,G,H){$.activeBranch&&w($.activeBranch,K,G,H),$.container=K},next(){return $.activeBranch&&M($.activeBranch)},registerDep(K,G){const H=!!$.pendingBranch;H&&$.deps++;const T=K.vnode.el;K.asyncDep.catch(W=>{ir(W,K,0)}).then(W=>{if(K.isUnmounted||$.isUnmounted||$.pendingId!==K.suspenseId)return;K.asyncResolved=!0;const{vnode:de}=K;qh(K,W,!1),T&&(de.el=T);const J=!T&&K.subTree.el;G(K,de,P(T||K.subTree.el),T?null:M(K.subTree),$,b,f),J&&L(J),Eg(K,de.el),H&&--$.deps===0&&$.resolve()})},unmount(K,G){$.isUnmounted=!0,$.activeBranch&&D($.activeBranch,u,K,G),$.pendingBranch&&D($.pendingBranch,u,K,G)}};return $}function gL(s,l,u,g,m,_,b,C,f){const y=l.suspense=Tg(l,g,u,s.parentNode,document.createElement("div"),null,m,_,b,C,!0),x=f(s,y.pendingBranch=l.ssContent,u,y,_,b);return y.deps===0&&y.resolve(!1,!0),x}function pL(s){const{shapeFlag:l,children:u}=s,g=l&32;s.ssContent=ZC(g?u.default:u),s.ssFallback=g?ZC(u.fallback):Pe(ln)}function ZC(s){let l;if(We(s)){const u=tr&&s._c;u&&(s._d=!1,re()),s=s(),u&&(s._d=!0,l=Cn,by())}return Ne(s)&&(s=nL(s)),s=Nn(s),l&&!s.dynamicChildren&&(s.dynamicChildren=l.filter(u=>u!==s)),s}function L1(s,l){l&&l.pendingBranch?Ne(s)?l.effects.push(...s):l.effects.push(s):bl(s)}function Wr(s,l){s.activeBranch=l;const{vnode:u,parentComponent:g}=s;let m=l.el;for(;!m&&l.component;)l=l.component.subTree,m=l.el;u.el=m,g&&g.subTree===u&&(g.vnode.el=m,Eg(g,m))}function mL(s){var l;return((l=s.props)==null?void 0:l.suspensible)!=null&&s.props.suspensible!==!1}const R1=Symbol.for("v-scx"),z1=()=>Kn(R1);function fL(s,l){return Ca(s,null,l)}function j1(s,l){return Ca(s,null,{flush:"post"})}function F1(s,l){return Ca(s,null,{flush:"sync"})}const nl={};function Rt(s,l,u){return Ca(s,l,u)}function Ca(s,l,{immediate:u,deep:g,flush:m,once:_,onTrack:b,onTrigger:C}=kt){if(l&&_){const K=l;l=(...G)=>{K(...G),$()}}const f=Zt,y=K=>g===!0?K:Gi(K,g===!1?1:void 0);let x,v=!1,w=!1;if(Ut(s)?(x=()=>s.value,v=da(s)):mi(s)?(x=()=>y(s),v=!0):Ne(s)?(w=!0,v=s.some(K=>mi(K)||da(K)),x=()=>s.map(K=>{if(Ut(K))return K.value;if(mi(K))return y(K);if(We(K))return jo(K,f,2)})):We(s)?l?x=()=>jo(s,f,2):x=()=>(D&&D(),Ln(s,f,3,[M])):x=An,l&&g){const K=x;x=()=>Gi(K())}let D,M=K=>{D=R.onStop=()=>{jo(K,f,4),D=R.onStop=void 0}},P;if(xa)if(M=An,l?u&&Ln(l,f,3,[x(),w?[]:void 0,M]):x(),m==="sync"){const K=z1();P=K.__watcherHandles||(K.__watcherHandles=[])}else return An;let L=w?new Array(s.length).fill(nl):nl;const F=()=>{if(!(!R.active||!R.dirty))if(l){const K=R.run();(g||v||(w?K.some((G,H)=>lo(G,L[H])):lo(K,L)))&&(D&&D(),Ln(l,f,3,[K,L===nl?void 0:w&&L[0]===nl?[]:L,M]),L=K)}else R.run()};F.allowRecurse=!!l;let j;m==="sync"?j=F:m==="post"?j=()=>rn(F,f&&f.suspense):(F.pre=!0,f&&(F.id=f.uid),j=()=>Ol(F));const R=new Kr(x,An,j),V=mg(),$=()=>{R.stop(),V&&dg(V.effects,R)};return l?u?F():L=R.run():m==="post"?rn(R.run.bind(R),f&&f.suspense):R.run(),P&&P.push($),$}function kL(s,l,u){const g=this.proxy,m=Bt(s)?s.includes(".")?V1(g,s):()=>g[s]:s.bind(g,g);let _;We(l)?_=l:(_=l.handler,u=l);const b=nr(this),C=Ca(m,_.bind(g),u);return b(),C}function V1(s,l){const u=l.split(".");return()=>{let g=s;for(let m=0;m<u.length&&g;m++)g=g[u[m]];return g}}function Gi(s,l,u=0,g){if(!Ct(s)||s.__v_skip)return s;if(l&&l>0){if(u>=l)return s;u++}if(g=g||new Set,g.has(s))return s;if(g.add(s),Ut(s))Gi(s.value,l,u,g);else if(Ne(s))for(let m=0;m<s.length;m++)Gi(s[m],l,u,g);else if(or(s)||Fr(s))s.forEach(m=>{Gi(m,l,u,g)});else if(o1(s))for(const m in s)Gi(s[m],l,u,g);return s}function at(s,l){if(Wt===null)return s;const u=Hl(Wt)||Wt.proxy,g=s.dirs||(s.dirs=[]);for(let m=0;m<l.length;m++){let[_,b,C,f=kt]=l[m];_&&(We(_)&&(_={mounted:_,updated:_}),_.deep&&Gi(b),g.push({dir:_,instance:u,value:b,oldValue:void 0,arg:C,modifiers:f}))}return s}function bo(s,l,u,g){const m=s.dirs,_=l&&l.dirs;for(let b=0;b<m.length;b++){const C=m[b];_&&(C.oldValue=_[b].value);let f=C.dir[g];f&&(_i(),Ln(f,u,8,[s.el,C,s,l]),wi())}}const li=Symbol("_leaveCb"),ol=Symbol("_enterCb");function Mg(){const s={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return yn(()=>{s.isMounted=!0}),Vl(()=>{s.isUnmounting=!0}),s}const Gn=[Function,Array],Bg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Gn,onEnter:Gn,onAfterEnter:Gn,onEnterCancelled:Gn,onBeforeLeave:Gn,onLeave:Gn,onAfterLeave:Gn,onLeaveCancelled:Gn,onBeforeAppear:Gn,onAppear:Gn,onAfterAppear:Gn,onAppearCancelled:Gn},bL={name:"BaseTransition",props:Bg,setup(s,{slots:l}){const u=Ho(),g=Mg();return()=>{const m=l.default&&zl(l.default(),!0);if(!m||!m.length)return;let _=m[0];if(m.length>1){for(const w of m)if(w.type!==ln){_=w;break}}const b=ot(s),{mode:C}=b;if(g.isLeaving)return mh(_);const f=JC(_);if(!f)return mh(_);const y=Qr(f,b,g,u);Xi(f,y);const x=u.subTree,v=x&&JC(x);if(v&&v.type!==ln&&!ao(f,v)){const w=Qr(v,b,g,u);if(Xi(v,w),C==="out-in")return g.isLeaving=!0,w.afterLeave=()=>{g.isLeaving=!1,u.update.active!==!1&&(u.effect.dirty=!0,u.update())},mh(_);C==="in-out"&&f.type!==ln&&(w.delayLeave=(D,M,P)=>{const L=H1(g,v);L[String(v.key)]=v,D[li]=()=>{M(),D[li]=void 0,delete y.delayedLeave},y.delayedLeave=P})}return _}}},U1=bL;function H1(s,l){const{leavingVNodes:u}=s;let g=u.get(l.type);return g||(g=Object.create(null),u.set(l.type,g)),g}function Qr(s,l,u,g){const{appear:m,mode:_,persisted:b=!1,onBeforeEnter:C,onEnter:f,onAfterEnter:y,onEnterCancelled:x,onBeforeLeave:v,onLeave:w,onAfterLeave:D,onLeaveCancelled:M,onBeforeAppear:P,onAppear:L,onAfterAppear:F,onAppearCancelled:j}=l,R=String(s.key),V=H1(u,s),$=(H,T)=>{H&&Ln(H,g,9,T)},K=(H,T)=>{const W=T[1];$(H,T),Ne(H)?H.every(de=>de.length<=1)&&W():H.length<=1&&W()},G={mode:_,persisted:b,beforeEnter(H){let T=C;if(!u.isMounted)if(m)T=P||C;else return;H[li]&&H[li](!0);const W=V[R];W&&ao(s,W)&&W.el[li]&&W.el[li](),$(T,[H])},enter(H){let T=f,W=y,de=x;if(!u.isMounted)if(m)T=L||f,W=F||y,de=j||x;else return;let J=!1;const ge=H[ol]=Te=>{J||(J=!0,Te?$(de,[H]):$(W,[H]),G.delayedLeave&&G.delayedLeave(),H[ol]=void 0)};T?K(T,[H,ge]):ge()},leave(H,T){const W=String(s.key);if(H[ol]&&H[ol](!0),u.isUnmounting)return T();$(v,[H]);let de=!1;const J=H[li]=ge=>{de||(de=!0,T(),ge?$(M,[H]):$(D,[H]),H[li]=void 0,V[W]===s&&delete V[W])};V[W]=s,w?K(w,[H,J]):J()},clone(H){return Qr(H,l,u,g)}};return G}function mh(s){if(ya(s))return s=Co(s),s.children=null,s}function JC(s){return ya(s)?s.children?s.children[0]:void 0:s}function Xi(s,l){s.shapeFlag&6&&s.component?Xi(s.component.subTree,l):s.shapeFlag&128?(s.ssContent.transition=l.clone(s.ssContent),s.ssFallback.transition=l.clone(s.ssFallback)):s.transition=l}function zl(s,l=!1,u){let g=[],m=0;for(let _=0;_<s.length;_++){let b=s[_];const C=u==null?b.key:String(u)+String(b.key!=null?b.key:_);b.type===Je?(b.patchFlag&128&&m++,g=g.concat(zl(b.children,l,C))):(l||b.type!==ln)&&g.push(C!=null?Co(b,{key:C}):b)}if(m>1)for(let _=0;_<g.length;_++)g[_].patchFlag=-2;return g}/*! #__NO_SIDE_EFFECTS__ */function va(s,l){return We(s)?Mt({name:s.name},l,{setup:s}):s}const Qi=s=>!!s.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function _L(s){We(s)&&(s={loader:s});const{loader:l,loadingComponent:u,errorComponent:g,delay:m=200,timeout:_,suspensible:b=!0,onError:C}=s;let f=null,y,x=0;const v=()=>(x++,f=null,w()),w=()=>{let D;return f||(D=f=l().catch(M=>{if(M=M instanceof Error?M:new Error(String(M)),C)return new Promise((P,L)=>{C(M,()=>P(v()),()=>L(M),x+1)});throw M}).then(M=>D!==f&&f?f:(M&&(M.__esModule||M[Symbol.toStringTag]==="Module")&&(M=M.default),y=M,M)))};return va({name:"AsyncComponentWrapper",__asyncLoader:w,get __asyncResolved(){return y},setup(){const D=Zt;if(y)return()=>fh(y,D);const M=j=>{f=null,ir(j,D,13,!g)};if(b&&D.suspense||xa)return w().then(j=>()=>fh(j,D)).catch(j=>(M(j),()=>g?Pe(g,{error:j}):null));const P=me(!1),L=me(),F=me(!!m);return m&&setTimeout(()=>{F.value=!1},m),_!=null&&setTimeout(()=>{if(!P.value&&!L.value){const j=new Error(`Async component timed out after ${_}ms.`);M(j),L.value=j}},_),w().then(()=>{P.value=!0,D.parent&&ya(D.parent.vnode)&&(D.parent.effect.dirty=!0,Ol(D.parent.update))}).catch(j=>{M(j),L.value=j}),()=>{if(P.value&&y)return fh(y,D);if(L.value&&g)return Pe(g,{error:L.value});if(u&&!F.value)return Pe(u)}}})}function fh(s,l){const{ref:u,props:g,children:m,ce:_}=l.vnode,b=Pe(s,g,m);return b.ref=u,b.ce=_,delete l.vnode.ce,b}const ya=s=>s.type.__isKeepAlive,wL={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(s,{slots:l}){const u=Ho(),g=u.ctx;if(!g.renderer)return()=>{const j=l.default&&l.default();return j&&j.length===1?j[0]:j};const m=new Map,_=new Set;let b=null;const C=u.suspense,{renderer:{p:f,m:y,um:x,o:{createElement:v}}}=g,w=v("div");g.activate=(j,R,V,$,K)=>{const G=j.component;y(j,R,V,0,C),f(G.vnode,j,R,V,G,C,$,j.slotScopeIds,K),rn(()=>{G.isDeactivated=!1,G.a&&Ur(G.a);const H=j.props&&j.props.onVnodeMounted;H&&wn(H,G.parent,j)},C)},g.deactivate=j=>{const R=j.component;y(j,w,null,1,C),rn(()=>{R.da&&Ur(R.da);const V=j.props&&j.props.onVnodeUnmounted;V&&wn(V,R.parent,j),R.isDeactivated=!0},C)};function D(j){kh(j),x(j,u,C,!0)}function M(j){m.forEach((R,V)=>{const $=Kh(R.type);$&&(!j||!j($))&&P(V)})}function P(j){const R=m.get(j);!b||!ao(R,b)?D(R):b&&kh(b),m.delete(j),_.delete(j)}Rt(()=>[s.include,s.exclude],([j,R])=>{j&&M(V=>Js(j,V)),R&&M(V=>!Js(R,V))},{flush:"post",deep:!0});let L=null;const F=()=>{L!=null&&m.set(L,bh(u.subTree))};return yn(F),Fl(F),Vl(()=>{m.forEach(j=>{const{subTree:R,suspense:V}=u,$=bh(R);if(j.type===$.type&&j.key===$.key){kh($);const K=$.component.da;K&&rn(K,V);return}D(j)})}),()=>{if(L=null,!l.default)return b=null;const j=l.default(),R=j[0];if(j.length>1)return b=null,j;if(!ki(R)||!(R.shapeFlag&4)&&!(R.shapeFlag&128))return b=null,R;let V=bh(R);const $=V.type,K=Kh(Qi(V)?V.type.__asyncResolved||{}:$),{include:G,exclude:H,max:T}=s;if(G&&(!K||!Js(G,K))||H&&K&&Js(H,K))return b=V,R;const W=V.key==null?$:V.key,de=m.get(W);return V.el&&(V=Co(V),R.shapeFlag&128&&(R.ssContent=V)),L=W,de?(V.el=de.el,V.component=de.component,V.transition&&Xi(V,V.transition),V.shapeFlag|=512,_.delete(W),_.add(W)):(_.add(W),T&&_.size>parseInt(T,10)&&P(_.values().next().value)),V.shapeFlag|=256,b=V,O1(R.type)?R:V}}},AL=wL;function Js(s,l){return Ne(s)?s.some(u=>Js(u,l)):Bt(s)?s.split(",").includes(l):ZN(s)?s.test(l):!1}function $1(s,l){q1(s,"a",l)}function W1(s,l){q1(s,"da",l)}function q1(s,l,u=Zt){const g=s.__wdc||(s.__wdc=()=>{let m=u;for(;m;){if(m.isDeactivated)return;m=m.parent}return s()});if(jl(l,g,u),u){let m=u.parent;for(;m&&m.parent;)ya(m.parent.vnode)&&CL(g,l,u,m),m=m.parent}}function CL(s,l,u,g){const m=jl(l,s,g,!0);Ul(()=>{dg(g[l],m)},u)}function kh(s){s.shapeFlag&=-257,s.shapeFlag&=-513}function bh(s){return s.shapeFlag&128?s.ssContent:s}function jl(s,l,u=Zt,g=!1){if(u){const m=u[s]||(u[s]=[]),_=l.__weh||(l.__weh=(...b)=>{if(u.isUnmounted)return;_i();const C=nr(u),f=Ln(l,u,s,b);return C(),wi(),f});return g?m.unshift(_):m.push(_),_}}const Uo=s=>(l,u=Zt)=>(!xa||s==="sp")&&jl(s,(...g)=>l(...g),u),G1=Uo("bm"),yn=Uo("m"),K1=Uo("bu"),Fl=Uo("u"),Vl=Uo("bum"),Ul=Uo("um"),Y1=Uo("sp"),Q1=Uo("rtg"),Z1=Uo("rtc");function J1(s,l=Zt){jl("ec",s,l)}function Lt(s,l,u,g){let m;const _=u&&u[g];if(Ne(s)||Bt(s)){m=new Array(s.length);for(let b=0,C=s.length;b<C;b++)m[b]=l(s[b],b,void 0,_&&_[b])}else if(typeof s=="number"){m=new Array(s);for(let b=0;b<s;b++)m[b]=l(b+1,b,void 0,_&&_[b])}else if(Ct(s))if(s[Symbol.iterator])m=Array.from(s,(b,C)=>l(b,C,void 0,_&&_[C]));else{const b=Object.keys(s);m=new Array(b.length);for(let C=0,f=b.length;C<f;C++){const y=b[C];m[C]=l(s[y],y,C,_&&_[C])}}else m=[];return u&&(u[g]=m),m}function vL(s,l){for(let u=0;u<l.length;u++){const g=l[u];if(Ne(g))for(let m=0;m<g.length;m++)s[g[m].name]=g[m].fn;else g&&(s[g.name]=g.key?(...m)=>{const _=g.fn(...m);return _&&(_.key=g.key),_}:g.fn)}return s}function yL(s,l,u={},g,m){if(Wt.isCE||Wt.parent&&Qi(Wt.parent)&&Wt.parent.isCE)return l!=="default"&&(u.name=l),Pe("slot",u,g&&g());let _=s[l];_&&_._c&&(_._d=!1),re();const b=_&&X1(_(u)),C=Zr(Je,{key:u.key||b&&b.key||`_${l}`},b||(g?g():[]),b&&s._===1?64:-2);return!m&&C.scopeId&&(C.slotScopeIds=[C.scopeId+"-s"]),_&&_._c&&(_._d=!0),C}function X1(s){return s.some(l=>ki(l)?!(l.type===ln||l.type===Je&&!X1(l.children)):!0)?s:null}function xL(s,l){const u={};for(const g in s)u[l&&/[A-Z]/.test(g)?`on:${g}`:ta(g)]=s[g];return u}const Lh=s=>s?yy(s)?Hl(s)||s.proxy:Lh(s.parent):null,na=Mt(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>s.props,$attrs:s=>s.attrs,$slots:s=>s.slots,$refs:s=>s.refs,$parent:s=>Lh(s.parent),$root:s=>Lh(s.root),$emit:s=>s.emit,$options:s=>Pg(s),$forceUpdate:s=>s.f||(s.f=()=>{s.effect.dirty=!0,Ol(s.update)}),$nextTick:s=>s.n||(s.n=is.bind(s.proxy)),$watch:s=>kL.bind(s)}),_h=(s,l)=>s!==kt&&!s.__isScriptSetup&&gt(s,l),Rh={get({_:s},l){if(l==="__v_skip")return!0;const{ctx:u,setupState:g,data:m,props:_,accessCache:b,type:C,appContext:f}=s;let y;if(l[0]!=="$"){const D=b[l];if(D!==void 0)switch(D){case 1:return g[l];case 2:return m[l];case 4:return u[l];case 3:return _[l]}else{if(_h(g,l))return b[l]=1,g[l];if(m!==kt&&gt(m,l))return b[l]=2,m[l];if((y=s.propsOptions[0])&&gt(y,l))return b[l]=3,_[l];if(u!==kt&&gt(u,l))return b[l]=4,u[l];zh&&(b[l]=0)}}const x=na[l];let v,w;if(x)return l==="$attrs"&&vn(s.attrs,"get",""),x(s);if((v=C.__cssModules)&&(v=v[l]))return v;if(u!==kt&&gt(u,l))return b[l]=4,u[l];if(w=f.config.globalProperties,gt(w,l))return w[l]},set({_:s},l,u){const{data:g,setupState:m,ctx:_}=s;return _h(m,l)?(m[l]=u,!0):g!==kt&&gt(g,l)?(g[l]=u,!0):gt(s.props,l)||l[0]==="$"&&l.slice(1)in s?!1:(_[l]=u,!0)},has({_:{data:s,setupState:l,accessCache:u,ctx:g,appContext:m,propsOptions:_}},b){let C;return!!u[b]||s!==kt&&gt(s,b)||_h(l,b)||(C=_[0])&&gt(C,b)||gt(g,b)||gt(na,b)||gt(m.config.globalProperties,b)},defineProperty(s,l,u){return u.get!=null?s._.accessCache[l]=0:gt(u,"value")&&this.set(s,l,u.value,null),Reflect.defineProperty(s,l,u)}},EL=Mt({},Rh,{get(s,l){if(l!==Symbol.unscopables)return Rh.get(s,l,s)},has(s,l){return l[0]!=="_"&&!nO(l)}});function DL(){return null}function IL(){return null}function SL(s){}function TL(s){}function ML(){return null}function BL(){}function PL(s,l){return null}function NL(){return ey().slots}function OL(){return ey().attrs}function ey(){const s=Ho();return s.setupContext||(s.setupContext=Dy(s))}function fa(s){return Ne(s)?s.reduce((l,u)=>(l[u]=null,l),{}):s}function LL(s,l){const u=fa(s);for(const g in l){if(g.startsWith("__skip"))continue;let m=u[g];m?Ne(m)||We(m)?m=u[g]={type:m,default:l[g]}:m.default=l[g]:m===null&&(m=u[g]={default:l[g]}),m&&l[`__skip_${g}`]&&(m.skipFactory=!0)}return u}function ty(s,l){return!s||!l?s||l:Ne(s)&&Ne(l)?s.concat(l):Mt({},fa(s),fa(l))}function RL(s,l){const u={};for(const g in s)l.includes(g)||Object.defineProperty(u,g,{enumerable:!0,get:()=>s[g]});return u}function zL(s){const l=Ho();let u=s();return Wh(),ug(u)&&(u=u.catch(g=>{throw nr(l),g})),[u,()=>nr(l)]}let zh=!0;function jL(s){const l=Pg(s),u=s.proxy,g=s.ctx;zh=!1,l.beforeCreate&&XC(l.beforeCreate,s,"bc");const{data:m,computed:_,methods:b,watch:C,provide:f,inject:y,created:x,beforeMount:v,mounted:w,beforeUpdate:D,updated:M,activated:P,deactivated:L,beforeDestroy:F,beforeUnmount:j,destroyed:R,unmounted:V,render:$,renderTracked:K,renderTriggered:G,errorCaptured:H,serverPrefetch:T,expose:W,inheritAttrs:de,components:J,directives:ge,filters:Te}=l;if(y&&FL(y,g,null),b)for(const te in b){const ve=b[te];We(ve)&&(g[te]=ve.bind(u))}if(m){const te=m.call(u,u);Ct(te)&&(s.data=co(te))}if(zh=!0,_)for(const te in _){const ve=_[te],vt=We(ve)?ve.bind(u,u):We(ve.get)?ve.get.bind(u,u):An,ze=!We(ve)&&We(ve.set)?ve.set.bind(u):An,Gt=gn({get:vt,set:ze});Object.defineProperty(g,te,{enumerable:!0,configurable:!0,get:()=>Gt.value,set:Pt=>Gt.value=Pt})}if(C)for(const te in C)ny(C[te],g,u,te);if(f){const te=We(f)?f.call(u):f;Reflect.ownKeys(te).forEach(ve=>{oa(ve,te[ve])})}x&&XC(x,s,"c");function Q(te,ve){Ne(ve)?ve.forEach(vt=>te(vt.bind(u))):ve&&te(ve.bind(u))}if(Q(G1,v),Q(yn,w),Q(K1,D),Q(Fl,M),Q($1,P),Q(W1,L),Q(J1,H),Q(Z1,K),Q(Q1,G),Q(Vl,j),Q(Ul,V),Q(Y1,T),Ne(W))if(W.length){const te=s.exposed||(s.exposed={});W.forEach(ve=>{Object.defineProperty(te,ve,{get:()=>u[ve],set:vt=>u[ve]=vt})})}else s.exposed||(s.exposed={});$&&s.render===An&&(s.render=$),de!=null&&(s.inheritAttrs=de),J&&(s.components=J),ge&&(s.directives=ge)}function FL(s,l,u=An){Ne(s)&&(s=jh(s));for(const g in s){const m=s[g];let _;Ct(m)?"default"in m?_=Kn(m.from||g,m.default,!0):_=Kn(m.from||g):_=Kn(m),Ut(_)?Object.defineProperty(l,g,{enumerable:!0,configurable:!0,get:()=>_.value,set:b=>_.value=b}):l[g]=_}}function XC(s,l,u){Ln(Ne(s)?s.map(g=>g.bind(l.proxy)):s.bind(l.proxy),l,u)}function ny(s,l,u,g){const m=g.includes(".")?V1(u,g):()=>u[g];if(Bt(s)){const _=l[s];We(_)&&Rt(m,_)}else if(We(s))Rt(m,s.bind(u));else if(Ct(s))if(Ne(s))s.forEach(_=>ny(_,l,u,g));else{const _=We(s.handler)?s.handler.bind(u):l[s.handler];We(_)&&Rt(m,_,s)}}function Pg(s){const l=s.type,{mixins:u,extends:g}=l,{mixins:m,optionsCache:_,config:{optionMergeStrategies:b}}=s.appContext,C=_.get(l);let f;return C?f=C:!m.length&&!u&&!g?f=l:(f={},m.length&&m.forEach(y=>wl(f,y,b,!0)),wl(f,l,b)),Ct(l)&&_.set(l,f),f}function wl(s,l,u,g=!1){const{mixins:m,extends:_}=l;_&&wl(s,_,u,!0),m&&m.forEach(b=>wl(s,b,u,!0));for(const b in l)if(!(g&&b==="expose")){const C=VL[b]||u&&u[b];s[b]=C?C(s[b],l[b]):l[b]}return s}const VL={data:ev,props:tv,emits:tv,methods:Xs,computed:Xs,beforeCreate:un,created:un,beforeMount:un,mounted:un,beforeUpdate:un,updated:un,beforeDestroy:un,beforeUnmount:un,destroyed:un,unmounted:un,activated:un,deactivated:un,errorCaptured:un,serverPrefetch:un,components:Xs,directives:Xs,watch:HL,provide:ev,inject:UL};function ev(s,l){return l?s?function(){return Mt(We(s)?s.call(this,this):s,We(l)?l.call(this,this):l)}:l:s}function UL(s,l){return Xs(jh(s),jh(l))}function jh(s){if(Ne(s)){const l={};for(let u=0;u<s.length;u++)l[s[u]]=s[u];return l}return s}function un(s,l){return s?[...new Set([].concat(s,l))]:l}function Xs(s,l){return s?Mt(Object.create(null),s,l):l}function tv(s,l){return s?Ne(s)&&Ne(l)?[...new Set([...s,...l])]:Mt(Object.create(null),fa(s),fa(l??{})):l}function HL(s,l){if(!s)return l;if(!l)return s;const u=Mt(Object.create(null),s);for(const g in l)u[g]=un(s[g],l[g]);return u}function oy(){return{app:null,config:{isNativeTag:YN,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $L=0;function WL(s,l){return function(g,m=null){We(g)||(g=Mt({},g)),m!=null&&!Ct(m)&&(m=null);const _=oy(),b=new WeakSet;let C=!1;const f=_.app={_uid:$L++,_component:g,_props:m,_container:null,_context:_,_instance:null,version:Sy,get config(){return _.config},set config(y){},use(y,...x){return b.has(y)||(y&&We(y.install)?(b.add(y),y.install(f,...x)):We(y)&&(b.add(y),y(f,...x))),f},mixin(y){return _.mixins.includes(y)||_.mixins.push(y),f},component(y,x){return x?(_.components[y]=x,f):_.components[y]},directive(y,x){return x?(_.directives[y]=x,f):_.directives[y]},mount(y,x,v){if(!C){const w=Pe(g,m);return w.appContext=_,v===!0?v="svg":v===!1&&(v=void 0),x&&l?l(w,y):s(w,y,v),C=!0,f._container=y,y.__vue_app__=f,Hl(w.component)||w.component.proxy}},unmount(){C&&(s(null,f._container),delete f._container.__vue_app__)},provide(y,x){return _.provides[y]=x,f},runWithContext(y){const x=qr;qr=f;try{return y()}finally{qr=x}}};return f}}let qr=null;function oa(s,l){if(Zt){let u=Zt.provides;const g=Zt.parent&&Zt.parent.provides;g===u&&(u=Zt.provides=Object.create(g)),u[s]=l}}function Kn(s,l,u=!1){const g=Zt||Wt;if(g||qr){const m=g?g.parent==null?g.vnode.appContext&&g.vnode.appContext.provides:g.parent.provides:qr._context.provides;if(m&&s in m)return m[s];if(arguments.length>1)return u&&We(l)?l.call(g&&g.proxy):l}}function iy(){return!!(Zt||Wt||qr)}const ry=Object.create(null),Fh=()=>Object.create(ry),sy=s=>Object.getPrototypeOf(s)===ry;function qL(s,l,u,g=!1){const m={},_=Fh();s.propsDefaults=Object.create(null),ay(s,l,m,_);for(const b in s.propsOptions[0])b in m||(m[b]=void 0);u?s.props=g?m:_g(m):s.type.props?s.props=m:s.props=_,s.attrs=_}function GL(s,l,u,g){const{props:m,attrs:_,vnode:{patchFlag:b}}=s,C=ot(m),[f]=s.propsOptions;let y=!1;if((g||b>0)&&!(b&16)){if(b&8){const x=s.vnode.dynamicProps;for(let v=0;v<x.length;v++){let w=x[v];if(Ll(s.emitsOptions,w))continue;const D=l[w];if(f)if(gt(_,w))D!==_[w]&&(_[w]=D,y=!0);else{const M=pn(w);m[M]=Vh(f,C,M,D,s,!1)}else D!==_[w]&&(_[w]=D,y=!0)}}}else{ay(s,l,m,_)&&(y=!0);let x;for(const v in C)(!l||!gt(l,v)&&((x=On(v))===v||!gt(l,x)))&&(f?u&&(u[v]!==void 0||u[x]!==void 0)&&(m[v]=Vh(f,C,v,void 0,s,!0)):delete m[v]);if(_!==C)for(const v in _)(!l||!gt(l,v))&&(delete _[v],y=!0)}y&&zo(s.attrs,"set","")}function ay(s,l,u,g){const[m,_]=s.propsOptions;let b=!1,C;if(l)for(let f in l){if(Vr(f))continue;const y=l[f];let x;m&&gt(m,x=pn(f))?!_||!_.includes(x)?u[x]=y:(C||(C={}))[x]=y:Ll(s.emitsOptions,f)||(!(f in g)||y!==g[f])&&(g[f]=y,b=!0)}if(_){const f=ot(u),y=C||kt;for(let x=0;x<_.length;x++){const v=_[x];u[v]=Vh(m,f,v,y[v],s,!gt(y,v))}}return b}function Vh(s,l,u,g,m,_){const b=s[u];if(b!=null){const C=gt(b,"default");if(C&&g===void 0){const f=b.default;if(b.type!==Function&&!b.skipFactory&&We(f)){const{propsDefaults:y}=m;if(u in y)g=y[u];else{const x=nr(m);g=y[u]=f.call(null,l),x()}}else g=f}b[0]&&(_&&!C?g=!1:b[1]&&(g===""||g===On(u))&&(g=!0))}return g}function cy(s,l,u=!1){const g=l.propsCache,m=g.get(s);if(m)return m;const _=s.props,b={},C=[];let f=!1;if(!We(s)){const x=v=>{f=!0;const[w,D]=cy(v,l,!0);Mt(b,w),D&&C.push(...D)};!u&&l.mixins.length&&l.mixins.forEach(x),s.extends&&x(s.extends),s.mixins&&s.mixins.forEach(x)}if(!_&&!f)return Ct(s)&&g.set(s,jr),jr;if(Ne(_))for(let x=0;x<_.length;x++){const v=pn(_[x]);nv(v)&&(b[v]=kt)}else if(_)for(const x in _){const v=pn(x);if(nv(v)){const w=_[x],D=b[v]=Ne(w)||We(w)?{type:w}:Mt({},w);if(D){const M=rv(Boolean,D.type),P=rv(String,D.type);D[0]=M>-1,D[1]=P<0||M<P,(M>-1||gt(D,"default"))&&C.push(v)}}}const y=[b,C];return Ct(s)&&g.set(s,y),y}function nv(s){return s[0]!=="$"&&!Vr(s)}function ov(s){return s===null?"null":typeof s=="function"?s.name||"":typeof s=="object"&&s.constructor&&s.constructor.name||""}function iv(s,l){return ov(s)===ov(l)}function rv(s,l){return Ne(l)?l.findIndex(u=>iv(u,s)):We(l)&&iv(l,s)?0:-1}const ly=s=>s[0]==="_"||s==="$stable",Ng=s=>Ne(s)?s.map(Nn):[Nn(s)],KL=(s,l,u)=>{if(l._n)return l;const g=Lo((...m)=>Ng(l(...m)),u);return g._c=!1,g},dy=(s,l,u)=>{const g=s._ctx;for(const m in s){if(ly(m))continue;const _=s[m];if(We(_))l[m]=KL(m,_,g);else if(_!=null){const b=Ng(_);l[m]=()=>b}}},uy=(s,l)=>{const u=Ng(l);s.slots.default=()=>u},YL=(s,l)=>{if(s.vnode.shapeFlag&32){const u=l._;u?(s.slots=ot(l),i1(s.slots,"_",u)):dy(l,s.slots=Fh())}else s.slots=Fh(),l&&uy(s,l)},QL=(s,l,u)=>{const{vnode:g,slots:m}=s;let _=!0,b=kt;if(g.shapeFlag&32){const C=l._;C?u&&C===1?_=!1:(Mt(m,l),!u&&C===1&&delete m._):(_=!l.$stable,dy(l,m)),b=l}else l&&(uy(s,l),b={default:1});if(_)for(const C in m)!ly(C)&&b[C]==null&&delete m[C]};function Al(s,l,u,g,m=!1){if(Ne(s)){s.forEach((w,D)=>Al(w,l&&(Ne(l)?l[D]:l),u,g,m));return}if(Qi(g)&&!m)return;const _=g.shapeFlag&4?Hl(g.component)||g.component.proxy:g.el,b=m?null:_,{i:C,r:f}=s,y=l&&l.r,x=C.refs===kt?C.refs={}:C.refs,v=C.setupState;if(y!=null&&y!==f&&(Bt(y)?(x[y]=null,gt(v,y)&&(v[y]=null)):Ut(y)&&(y.value=null)),We(f))jo(f,C,12,[b,x]);else{const w=Bt(f),D=Ut(f);if(w||D){const M=()=>{if(s.f){const P=w?gt(v,f)?v[f]:x[f]:f.value;m?Ne(P)&&dg(P,_):Ne(P)?P.includes(_)||P.push(_):w?(x[f]=[_],gt(v,f)&&(v[f]=x[f])):(f.value=[_],s.k&&(x[s.k]=f.value))}else w?(x[f]=b,gt(v,f)&&(v[f]=b)):D&&(f.value=b,s.k&&(x[s.k]=b))};b?(M.id=-1,rn(M,u)):M()}}}let ti=!1;const ZL=s=>s.namespaceURI.includes("svg")&&s.tagName!=="foreignObject",JL=s=>s.namespaceURI.includes("MathML"),il=s=>{if(ZL(s))return"svg";if(JL(s))return"mathml"},rl=s=>s.nodeType===8;function XL(s){const{mt:l,p:u,o:{patchProp:g,createText:m,nextSibling:_,parentNode:b,remove:C,insert:f,createComment:y}}=s,x=(R,V)=>{if(!V.hasChildNodes()){u(null,R,V),_l(),V._vnode=R;return}ti=!1,v(V.firstChild,R,null,null,null),_l(),V._vnode=R,ti&&console.error("Hydration completed but contains mismatches.")},v=(R,V,$,K,G,H=!1)=>{H=H||!!V.dynamicChildren;const T=rl(R)&&R.data==="[",W=()=>P(R,V,$,K,G,T),{type:de,ref:J,shapeFlag:ge,patchFlag:Te}=V;let be=R.nodeType;V.el=R,Te===-2&&(H=!1,V.dynamicChildren=null);let Q=null;switch(de){case er:be!==3?V.children===""?(f(V.el=m(""),b(R),R),Q=R):Q=W():(R.data!==V.children&&(ti=!0,R.data=V.children),Q=_(R));break;case ln:j(R)?(Q=_(R),F(V.el=R.content.firstChild,R,$)):be!==8||T?Q=W():Q=_(R);break;case Zi:if(T&&(R=_(R),be=R.nodeType),be===1||be===3){Q=R;const te=!V.children.length;for(let ve=0;ve<V.staticCount;ve++)te&&(V.children+=Q.nodeType===1?Q.outerHTML:Q.data),ve===V.staticCount-1&&(V.anchor=Q),Q=_(Q);return T?_(Q):Q}else W();break;case Je:T?Q=M(R,V,$,K,G,H):Q=W();break;default:if(ge&1)(be!==1||V.type.toLowerCase()!==R.tagName.toLowerCase())&&!j(R)?Q=W():Q=w(R,V,$,K,G,H);else if(ge&6){V.slotScopeIds=G;const te=b(R);if(T?Q=L(R):rl(R)&&R.data==="teleport start"?Q=L(R,R.data,"teleport end"):Q=_(R),l(V,te,null,$,K,il(te),H),Qi(V)){let ve;T?(ve=Pe(Je),ve.anchor=Q?Q.previousSibling:te.lastChild):ve=R.nodeType===3?nt(""):Pe("div"),ve.el=R,V.component.subTree=ve}}else ge&64?be!==8?Q=W():Q=V.type.hydrate(R,V,$,K,G,H,s,D):ge&128&&(Q=V.type.hydrate(R,V,$,K,il(b(R)),G,H,s,v))}return J!=null&&Al(J,null,K,V),Q},w=(R,V,$,K,G,H)=>{H=H||!!V.dynamicChildren;const{type:T,props:W,patchFlag:de,shapeFlag:J,dirs:ge,transition:Te}=V,be=T==="input"||T==="option";if(be||de!==-1){ge&&bo(V,null,$,"created");let Q=!1;if(j(R)){Q=my(K,Te)&&$&&$.vnode.props&&$.vnode.props.appear;const ve=R.content.firstChild;Q&&Te.beforeEnter(ve),F(ve,R,$),V.el=R=ve}if(J&16&&!(W&&(W.innerHTML||W.textContent))){let ve=D(R.firstChild,V,R,$,K,G,H);for(;ve;){ti=!0;const vt=ve;ve=ve.nextSibling,C(vt)}}else J&8&&R.textContent!==V.children&&(ti=!0,R.textContent=V.children);if(W)if(be||!H||de&48)for(const ve in W)(be&&(ve.endsWith("value")||ve==="indeterminate")||wa(ve)&&!Vr(ve)||ve[0]===".")&&g(R,ve,null,W[ve],void 0,void 0,$);else W.onClick&&g(R,"onClick",null,W.onClick,void 0,void 0,$);let te;(te=W&&W.onVnodeBeforeMount)&&wn(te,$,V),ge&&bo(V,null,$,"beforeMount"),((te=W&&W.onVnodeMounted)||ge||Q)&&L1(()=>{te&&wn(te,$,V),Q&&Te.enter(R),ge&&bo(V,null,$,"mounted")},K)}return R.nextSibling},D=(R,V,$,K,G,H,T)=>{T=T||!!V.dynamicChildren;const W=V.children,de=W.length;for(let J=0;J<de;J++){const ge=T?W[J]:W[J]=Nn(W[J]);if(R)R=v(R,ge,K,G,H,T);else{if(ge.type===er&&!ge.children)continue;ti=!0,u(null,ge,$,null,K,G,il($),H)}}return R},M=(R,V,$,K,G,H)=>{const{slotScopeIds:T}=V;T&&(G=G?G.concat(T):T);const W=b(R),de=D(_(R),V,W,$,K,G,H);return de&&rl(de)&&de.data==="]"?_(V.anchor=de):(ti=!0,f(V.anchor=y("]"),W,de),de)},P=(R,V,$,K,G,H)=>{if(ti=!0,V.el=null,H){const de=L(R);for(;;){const J=_(R);if(J&&J!==de)C(J);else break}}const T=_(R),W=b(R);return C(R),u(null,V,W,T,$,K,il(W),G),T},L=(R,V="[",$="]")=>{let K=0;for(;R;)if(R=_(R),R&&rl(R)&&(R.data===V&&K++,R.data===$)){if(K===0)return _(R);K--}return R},F=(R,V,$)=>{const K=V.parentNode;K&&K.replaceChild(R,V);let G=$;for(;G;)G.vnode.el===V&&(G.vnode.el=G.subTree.el=R),G=G.parent},j=R=>R.nodeType===1&&R.tagName.toLowerCase()==="template";return[x,v]}const rn=L1;function hy(s){return py(s)}function gy(s){return py(s,XL)}function py(s,l){const u=r1();u.__VUE__=!0;const{insert:g,remove:m,patchProp:_,createElement:b,createText:C,createComment:f,setText:y,setElementText:x,parentNode:v,nextSibling:w,setScopeId:D=An,insertStaticContent:M}=s,P=(z,U,Y,ce=null,se=null,Ae=null,Se=void 0,_e=null,Ee=!!U.dynamicChildren)=>{if(z===U)return;z&&!ao(z,U)&&(ce=ie(z),Pt(z,se,Ae,!0),z=null),U.patchFlag===-2&&(Ee=!1,U.dynamicChildren=null);const{type:ue,ref:we,shapeFlag:ae}=U;switch(ue){case er:L(z,U,Y,ce);break;case ln:F(z,U,Y,ce);break;case Zi:z==null&&j(U,Y,ce,Se);break;case Je:J(z,U,Y,ce,se,Ae,Se,_e,Ee);break;default:ae&1?$(z,U,Y,ce,se,Ae,Se,_e,Ee):ae&6?ge(z,U,Y,ce,se,Ae,Se,_e,Ee):(ae&64||ae&128)&&ue.process(z,U,Y,ce,se,Ae,Se,_e,Ee,xe)}we!=null&&se&&Al(we,z&&z.ref,Ae,U||z,!U)},L=(z,U,Y,ce)=>{if(z==null)g(U.el=C(U.children),Y,ce);else{const se=U.el=z.el;U.children!==z.children&&y(se,U.children)}},F=(z,U,Y,ce)=>{z==null?g(U.el=f(U.children||""),Y,ce):U.el=z.el},j=(z,U,Y,ce)=>{[z.el,z.anchor]=M(z.children,U,Y,ce,z.el,z.anchor)},R=({el:z,anchor:U},Y,ce)=>{let se;for(;z&&z!==U;)se=w(z),g(z,Y,ce),z=se;g(U,Y,ce)},V=({el:z,anchor:U})=>{let Y;for(;z&&z!==U;)Y=w(z),m(z),z=Y;m(U)},$=(z,U,Y,ce,se,Ae,Se,_e,Ee)=>{U.type==="svg"?Se="svg":U.type==="math"&&(Se="mathml"),z==null?K(U,Y,ce,se,Ae,Se,_e,Ee):T(z,U,se,Ae,Se,_e,Ee)},K=(z,U,Y,ce,se,Ae,Se,_e)=>{let Ee,ue;const{props:we,shapeFlag:ae,transition:ne,dirs:ee}=z;if(Ee=z.el=b(z.type,Ae,we&&we.is,we),ae&8?x(Ee,z.children):ae&16&&H(z.children,Ee,null,ce,se,wh(z,Ae),Se,_e),ee&&bo(z,null,ce,"created"),G(Ee,z,z.scopeId,Se,ce),we){for(const Oe in we)Oe!=="value"&&!Vr(Oe)&&_(Ee,Oe,null,we[Oe],Ae,z.children,ce,se,lt);"value"in we&&_(Ee,"value",null,we.value,Ae),(ue=we.onVnodeBeforeMount)&&wn(ue,ce,z)}ee&&bo(z,null,ce,"beforeMount");const Be=my(se,ne);Be&&ne.beforeEnter(Ee),g(Ee,U,Y),((ue=we&&we.onVnodeMounted)||Be||ee)&&rn(()=>{ue&&wn(ue,ce,z),Be&&ne.enter(Ee),ee&&bo(z,null,ce,"mounted")},se)},G=(z,U,Y,ce,se)=>{if(Y&&D(z,Y),ce)for(let Ae=0;Ae<ce.length;Ae++)D(z,ce[Ae]);if(se){let Ae=se.subTree;if(U===Ae){const Se=se.vnode;G(z,Se,Se.scopeId,Se.slotScopeIds,se.parent)}}},H=(z,U,Y,ce,se,Ae,Se,_e,Ee=0)=>{for(let ue=Ee;ue<z.length;ue++){const we=z[ue]=_e?di(z[ue]):Nn(z[ue]);P(null,we,U,Y,ce,se,Ae,Se,_e)}},T=(z,U,Y,ce,se,Ae,Se)=>{const _e=U.el=z.el;let{patchFlag:Ee,dynamicChildren:ue,dirs:we}=U;Ee|=z.patchFlag&16;const ae=z.props||kt,ne=U.props||kt;let ee;if(Y&&$i(Y,!1),(ee=ne.onVnodeBeforeUpdate)&&wn(ee,Y,U,z),we&&bo(U,z,Y,"beforeUpdate"),Y&&$i(Y,!0),ue?W(z.dynamicChildren,ue,_e,Y,ce,wh(U,se),Ae):Se||ve(z,U,_e,null,Y,ce,wh(U,se),Ae,!1),Ee>0){if(Ee&16)de(_e,U,ae,ne,Y,ce,se);else if(Ee&2&&ae.class!==ne.class&&_(_e,"class",null,ne.class,se),Ee&4&&_(_e,"style",ae.style,ne.style,se),Ee&8){const Be=U.dynamicProps;for(let Oe=0;Oe<Be.length;Oe++){const et=Be[Oe],Tt=ae[et],xn=ne[et];(xn!==Tt||et==="value")&&_(_e,et,Tt,xn,se,z.children,Y,ce,lt)}}Ee&1&&z.children!==U.children&&x(_e,U.children)}else!Se&&ue==null&&de(_e,U,ae,ne,Y,ce,se);((ee=ne.onVnodeUpdated)||we)&&rn(()=>{ee&&wn(ee,Y,U,z),we&&bo(U,z,Y,"updated")},ce)},W=(z,U,Y,ce,se,Ae,Se)=>{for(let _e=0;_e<U.length;_e++){const Ee=z[_e],ue=U[_e],we=Ee.el&&(Ee.type===Je||!ao(Ee,ue)||Ee.shapeFlag&70)?v(Ee.el):Y;P(Ee,ue,we,null,ce,se,Ae,Se,!0)}},de=(z,U,Y,ce,se,Ae,Se)=>{if(Y!==ce){if(Y!==kt)for(const _e in Y)!Vr(_e)&&!(_e in ce)&&_(z,_e,Y[_e],null,Se,U.children,se,Ae,lt);for(const _e in ce){if(Vr(_e))continue;const Ee=ce[_e],ue=Y[_e];Ee!==ue&&_e!=="value"&&_(z,_e,ue,Ee,Se,U.children,se,Ae,lt)}"value"in ce&&_(z,"value",Y.value,ce.value,Se)}},J=(z,U,Y,ce,se,Ae,Se,_e,Ee)=>{const ue=U.el=z?z.el:C(""),we=U.anchor=z?z.anchor:C("");let{patchFlag:ae,dynamicChildren:ne,slotScopeIds:ee}=U;ee&&(_e=_e?_e.concat(ee):ee),z==null?(g(ue,Y,ce),g(we,Y,ce),H(U.children||[],Y,we,se,Ae,Se,_e,Ee)):ae>0&&ae&64&&ne&&z.dynamicChildren?(W(z.dynamicChildren,ne,Y,se,Ae,Se,_e),(U.key!=null||se&&U===se.subTree)&&Og(z,U,!0)):ve(z,U,Y,we,se,Ae,Se,_e,Ee)},ge=(z,U,Y,ce,se,Ae,Se,_e,Ee)=>{U.slotScopeIds=_e,z==null?U.shapeFlag&512?se.ctx.activate(U,Y,ce,Se,Ee):Te(U,Y,ce,se,Ae,Se,Ee):be(z,U,Ee)},Te=(z,U,Y,ce,se,Ae,Se)=>{const _e=z.component=vy(z,ce,se);if(ya(z)&&(_e.ctx.renderer=xe),xy(_e),_e.asyncDep){if(se&&se.registerDep(_e,Q),!z.el){const Ee=_e.subTree=Pe(ln);F(null,Ee,U,Y)}}else Q(_e,z,U,Y,se,Ae,Se)},be=(z,U,Y)=>{const ce=U.component=z.component;if(rL(z,U,Y))if(ce.asyncDep&&!ce.asyncResolved){te(ce,U,Y);return}else ce.next=U,QO(ce.update),ce.effect.dirty=!0,ce.update();else U.el=z.el,ce.vnode=U},Q=(z,U,Y,ce,se,Ae,Se)=>{const _e=()=>{if(z.isMounted){let{next:we,bu:ae,u:ne,parent:ee,vnode:Be}=z;{const Rn=fy(z);if(Rn){we&&(we.el=Be.el,te(z,we,Se)),Rn.asyncDep.then(()=>{z.isUnmounted||_e()});return}}let Oe=we,et;$i(z,!1),we?(we.el=Be.el,te(z,we,Se)):we=Be,ae&&Ur(ae),(et=we.props&&we.props.onVnodeBeforeUpdate)&&wn(et,ee,we,Be),$i(z,!0);const Tt=ll(z),xn=z.subTree;z.subTree=Tt,P(xn,Tt,v(xn.el),ie(xn),z,se,Ae),we.el=Tt.el,Oe===null&&Eg(z,Tt.el),ne&&rn(ne,se),(et=we.props&&we.props.onVnodeUpdated)&&rn(()=>wn(et,ee,we,Be),se)}else{let we;const{el:ae,props:ne}=U,{bm:ee,m:Be,parent:Oe}=z,et=Qi(U);if($i(z,!1),ee&&Ur(ee),!et&&(we=ne&&ne.onVnodeBeforeMount)&&wn(we,Oe,U),$i(z,!0),ae&&Ye){const Tt=()=>{z.subTree=ll(z),Ye(ae,z.subTree,z,se,null)};et?U.type.__asyncLoader().then(()=>!z.isUnmounted&&Tt()):Tt()}else{const Tt=z.subTree=ll(z);P(null,Tt,Y,ce,z,se,Ae),U.el=Tt.el}if(Be&&rn(Be,se),!et&&(we=ne&&ne.onVnodeMounted)){const Tt=U;rn(()=>wn(we,Oe,Tt),se)}(U.shapeFlag&256||Oe&&Qi(Oe.vnode)&&Oe.vnode.shapeFlag&256)&&z.a&&rn(z.a,se),z.isMounted=!0,U=Y=ce=null}},Ee=z.effect=new Kr(_e,An,()=>Ol(ue),z.scope),ue=z.update=()=>{Ee.dirty&&Ee.run()};ue.id=z.uid,$i(z,!0),ue()},te=(z,U,Y)=>{U.component=z;const ce=z.vnode.props;z.vnode=U,z.next=null,GL(z,U.props,ce,Y),QL(z,U.children,Y),_i(),KC(z),wi()},ve=(z,U,Y,ce,se,Ae,Se,_e,Ee=!1)=>{const ue=z&&z.children,we=z?z.shapeFlag:0,ae=U.children,{patchFlag:ne,shapeFlag:ee}=U;if(ne>0){if(ne&128){ze(ue,ae,Y,ce,se,Ae,Se,_e,Ee);return}else if(ne&256){vt(ue,ae,Y,ce,se,Ae,Se,_e,Ee);return}}ee&8?(we&16&&lt(ue,se,Ae),ae!==ue&&x(Y,ae)):we&16?ee&16?ze(ue,ae,Y,ce,se,Ae,Se,_e,Ee):lt(ue,se,Ae,!0):(we&8&&x(Y,""),ee&16&&H(ae,Y,ce,se,Ae,Se,_e,Ee))},vt=(z,U,Y,ce,se,Ae,Se,_e,Ee)=>{z=z||jr,U=U||jr;const ue=z.length,we=U.length,ae=Math.min(ue,we);let ne;for(ne=0;ne<ae;ne++){const ee=U[ne]=Ee?di(U[ne]):Nn(U[ne]);P(z[ne],ee,Y,null,se,Ae,Se,_e,Ee)}ue>we?lt(z,se,Ae,!0,!1,ae):H(U,Y,ce,se,Ae,Se,_e,Ee,ae)},ze=(z,U,Y,ce,se,Ae,Se,_e,Ee)=>{let ue=0;const we=U.length;let ae=z.length-1,ne=we-1;for(;ue<=ae&&ue<=ne;){const ee=z[ue],Be=U[ue]=Ee?di(U[ue]):Nn(U[ue]);if(ao(ee,Be))P(ee,Be,Y,null,se,Ae,Se,_e,Ee);else break;ue++}for(;ue<=ae&&ue<=ne;){const ee=z[ae],Be=U[ne]=Ee?di(U[ne]):Nn(U[ne]);if(ao(ee,Be))P(ee,Be,Y,null,se,Ae,Se,_e,Ee);else break;ae--,ne--}if(ue>ae){if(ue<=ne){const ee=ne+1,Be=ee<we?U[ee].el:ce;for(;ue<=ne;)P(null,U[ue]=Ee?di(U[ue]):Nn(U[ue]),Y,Be,se,Ae,Se,_e,Ee),ue++}}else if(ue>ne)for(;ue<=ae;)Pt(z[ue],se,Ae,!0),ue++;else{const ee=ue,Be=ue,Oe=new Map;for(ue=Be;ue<=ne;ue++){const sn=U[ue]=Ee?di(U[ue]):Nn(U[ue]);sn.key!=null&&Oe.set(sn.key,ue)}let et,Tt=0;const xn=ne-Be+1;let Rn=!1,Ia=0;const Ai=new Array(xn);for(ue=0;ue<xn;ue++)Ai[ue]=0;for(ue=ee;ue<=ae;ue++){const sn=z[ue];if(Tt>=xn){Pt(sn,se,Ae,!0);continue}let Kt;if(sn.key!=null)Kt=Oe.get(sn.key);else for(et=Be;et<=ne;et++)if(Ai[et-Be]===0&&ao(sn,U[et])){Kt=et;break}Kt===void 0?Pt(sn,se,Ae,!0):(Ai[Kt-Be]=ue+1,Kt>=Ia?Ia=Kt:Rn=!0,P(sn,U[Kt],Y,null,se,Ae,Se,_e,Ee),Tt++)}const Sa=Rn?eR(Ai):jr;for(et=Sa.length-1,ue=xn-1;ue>=0;ue--){const sn=Be+ue,Kt=U[sn],an=sn+1<we?U[sn+1].el:ce;Ai[ue]===0?P(null,Kt,Y,an,se,Ae,Se,_e,Ee):Rn&&(et<0||ue!==Sa[et]?Gt(Kt,Y,an,2):et--)}}},Gt=(z,U,Y,ce,se=null)=>{const{el:Ae,type:Se,transition:_e,children:Ee,shapeFlag:ue}=z;if(ue&6){Gt(z.component.subTree,U,Y,ce);return}if(ue&128){z.suspense.move(U,Y,ce);return}if(ue&64){Se.move(z,U,Y,xe);return}if(Se===Je){g(Ae,U,Y);for(let ae=0;ae<Ee.length;ae++)Gt(Ee[ae],U,Y,ce);g(z.anchor,U,Y);return}if(Se===Zi){R(z,U,Y);return}if(ce!==2&&ue&1&&_e)if(ce===0)_e.beforeEnter(Ae),g(Ae,U,Y),rn(()=>_e.enter(Ae),se);else{const{leave:ae,delayLeave:ne,afterLeave:ee}=_e,Be=()=>g(Ae,U,Y),Oe=()=>{ae(Ae,()=>{Be(),ee&&ee()})};ne?ne(Ae,Be,Oe):Oe()}else g(Ae,U,Y)},Pt=(z,U,Y,ce=!1,se=!1)=>{const{type:Ae,props:Se,ref:_e,children:Ee,dynamicChildren:ue,shapeFlag:we,patchFlag:ae,dirs:ne}=z;if(_e!=null&&Al(_e,null,Y,z,!0),we&256){U.ctx.deactivate(z);return}const ee=we&1&&ne,Be=!Qi(z);let Oe;if(Be&&(Oe=Se&&Se.onVnodeBeforeUnmount)&&wn(Oe,U,z),we&6)bt(z.component,Y,ce);else{if(we&128){z.suspense.unmount(Y,ce);return}ee&&bo(z,null,U,"beforeUnmount"),we&64?z.type.remove(z,U,Y,se,xe,ce):ue&&(Ae!==Je||ae>0&&ae&64)?lt(ue,U,Y,!1,!0):(Ae===Je&&ae&384||!se&&we&16)&&lt(Ee,U,Y),ce&&Ce(z)}(Be&&(Oe=Se&&Se.onVnodeUnmounted)||ee)&&rn(()=>{Oe&&wn(Oe,U,z),ee&&bo(z,null,U,"unmounted")},Y)},Ce=z=>{const{type:U,el:Y,anchor:ce,transition:se}=z;if(U===Je){Ge(Y,ce);return}if(U===Zi){V(z);return}const Ae=()=>{m(Y),se&&!se.persisted&&se.afterLeave&&se.afterLeave()};if(z.shapeFlag&1&&se&&!se.persisted){const{leave:Se,delayLeave:_e}=se,Ee=()=>Se(Y,Ae);_e?_e(z.el,Ae,Ee):Ee()}else Ae()},Ge=(z,U)=>{let Y;for(;z!==U;)Y=w(z),m(z),z=Y;m(U)},bt=(z,U,Y)=>{const{bum:ce,scope:se,update:Ae,subTree:Se,um:_e}=z;ce&&Ur(ce),se.stop(),Ae&&(Ae.active=!1,Pt(Se,z,U,Y)),_e&&rn(_e,U),rn(()=>{z.isUnmounted=!0},U),U&&U.pendingBranch&&!U.isUnmounted&&z.asyncDep&&!z.asyncResolved&&z.suspenseId===U.pendingId&&(U.deps--,U.deps===0&&U.resolve())},lt=(z,U,Y,ce=!1,se=!1,Ae=0)=>{for(let Se=Ae;Se<z.length;Se++)Pt(z[Se],U,Y,ce,se)},ie=z=>z.shapeFlag&6?ie(z.component.subTree):z.shapeFlag&128?z.suspense.next():w(z.anchor||z.el);let ke=!1;const ye=(z,U,Y)=>{z==null?U._vnode&&Pt(U._vnode,null,null,!0):P(U._vnode||null,z,U,null,null,null,Y),ke||(ke=!0,KC(),_l(),ke=!1),U._vnode=z},xe={p:P,um:Pt,m:Gt,r:Ce,mt:Te,mc:H,pc:ve,pbc:W,n:ie,o:s};let Ve,Ye;return l&&([Ve,Ye]=l(xe)),{render:ye,hydrate:Ve,createApp:WL(ye,Ve)}}function wh({type:s,props:l},u){return u==="svg"&&s==="foreignObject"||u==="mathml"&&s==="annotation-xml"&&l&&l.encoding&&l.encoding.includes("html")?void 0:u}function $i({effect:s,update:l},u){s.allowRecurse=l.allowRecurse=u}function my(s,l){return(!s||s&&!s.pendingBranch)&&l&&!l.persisted}function Og(s,l,u=!1){const g=s.children,m=l.children;if(Ne(g)&&Ne(m))for(let _=0;_<g.length;_++){const b=g[_];let C=m[_];C.shapeFlag&1&&!C.dynamicChildren&&((C.patchFlag<=0||C.patchFlag===32)&&(C=m[_]=di(m[_]),C.el=b.el),u||Og(b,C)),C.type===er&&(C.el=b.el)}}function eR(s){const l=s.slice(),u=[0];let g,m,_,b,C;const f=s.length;for(g=0;g<f;g++){const y=s[g];if(y!==0){if(m=u[u.length-1],s[m]<y){l[g]=m,u.push(g);continue}for(_=0,b=u.length-1;_<b;)C=_+b>>1,s[u[C]]<y?_=C+1:b=C;y<s[u[_]]&&(_>0&&(l[g]=u[_-1]),u[_]=g)}}for(_=u.length,b=u[_-1];_-- >0;)u[_]=b,b=l[b];return u}function fy(s){const l=s.subTree.component;if(l)return l.asyncDep&&!l.asyncResolved?l:fy(l)}const tR=s=>s.__isTeleport,ia=s=>s&&(s.disabled||s.disabled===""),sv=s=>typeof SVGElement<"u"&&s instanceof SVGElement,av=s=>typeof MathMLElement=="function"&&s instanceof MathMLElement,Uh=(s,l)=>{const u=s&&s.to;return Bt(u)?l?l(u):null:u},nR={name:"Teleport",__isTeleport:!0,process(s,l,u,g,m,_,b,C,f,y){const{mc:x,pc:v,pbc:w,o:{insert:D,querySelector:M,createText:P,createComment:L}}=y,F=ia(l.props);let{shapeFlag:j,children:R,dynamicChildren:V}=l;if(s==null){const $=l.el=P(""),K=l.anchor=P("");D($,u,g),D(K,u,g);const G=l.target=Uh(l.props,M),H=l.targetAnchor=P("");G&&(D(H,G),b==="svg"||sv(G)?b="svg":(b==="mathml"||av(G))&&(b="mathml"));const T=(W,de)=>{j&16&&x(R,W,de,m,_,b,C,f)};F?T(u,K):G&&T(G,H)}else{l.el=s.el;const $=l.anchor=s.anchor,K=l.target=s.target,G=l.targetAnchor=s.targetAnchor,H=ia(s.props),T=H?u:K,W=H?$:G;if(b==="svg"||sv(K)?b="svg":(b==="mathml"||av(K))&&(b="mathml"),V?(w(s.dynamicChildren,V,T,m,_,b,C),Og(s,l,!0)):f||v(s,l,T,W,m,_,b,C,!1),F)H?l.props&&s.props&&l.props.to!==s.props.to&&(l.props.to=s.props.to):sl(l,u,$,y,1);else if((l.props&&l.props.to)!==(s.props&&s.props.to)){const de=l.target=Uh(l.props,M);de&&sl(l,de,null,y,0)}else H&&sl(l,K,G,y,1)}ky(l)},remove(s,l,u,g,{um:m,o:{remove:_}},b){const{shapeFlag:C,children:f,anchor:y,targetAnchor:x,target:v,props:w}=s;if(v&&_(x),b&&_(y),C&16){const D=b||!ia(w);for(let M=0;M<f.length;M++){const P=f[M];m(P,l,u,D,!!P.dynamicChildren)}}},move:sl,hydrate:oR};function sl(s,l,u,{o:{insert:g},m},_=2){_===0&&g(s.targetAnchor,l,u);const{el:b,anchor:C,shapeFlag:f,children:y,props:x}=s,v=_===2;if(v&&g(b,l,u),(!v||ia(x))&&f&16)for(let w=0;w<y.length;w++)m(y[w],l,u,2);v&&g(C,l,u)}function oR(s,l,u,g,m,_,{o:{nextSibling:b,parentNode:C,querySelector:f}},y){const x=l.target=Uh(l.props,f);if(x){const v=x._lpa||x.firstChild;if(l.shapeFlag&16)if(ia(l.props))l.anchor=y(b(s),l,C(s),u,g,m,_),l.targetAnchor=v;else{l.anchor=b(s);let w=v;for(;w;)if(w=b(w),w&&w.nodeType===8&&w.data==="teleport anchor"){l.targetAnchor=w,x._lpa=l.targetAnchor&&b(l.targetAnchor);break}y(v,l,x,u,g,m,_)}ky(l)}return l.anchor&&b(l.anchor)}const iR=nR;function ky(s){const l=s.ctx;if(l&&l.ut){let u=s.children[0].el;for(;u&&u!==s.targetAnchor;)u.nodeType===1&&u.setAttribute("data-v-owner",l.uid),u=u.nextSibling;l.ut()}}const Je=Symbol.for("v-fgt"),er=Symbol.for("v-txt"),ln=Symbol.for("v-cmt"),Zi=Symbol.for("v-stc"),ra=[];let Cn=null;function re(s=!1){ra.push(Cn=s?null:[])}function by(){ra.pop(),Cn=ra[ra.length-1]||null}let tr=1;function Hh(s){tr+=s}function _y(s){return s.dynamicChildren=tr>0?Cn||jr:null,by(),tr>0&&Cn&&Cn.push(s),s}function le(s,l,u,g,m,_){return _y(N(s,l,u,g,m,_,!0))}function Zr(s,l,u,g,m){return _y(Pe(s,l,u,g,m,!0))}function ki(s){return s?s.__v_isVNode===!0:!1}function ao(s,l){return s.type===l.type&&s.key===l.key}function rR(s){}const wy=({key:s})=>s??null,dl=({ref:s,ref_key:l,ref_for:u})=>(typeof s=="number"&&(s=""+s),s!=null?Bt(s)||Ut(s)||We(s)?{i:Wt,r:s,k:l,f:!!u}:s:null);function N(s,l=null,u=null,g=0,m=null,_=s===Je?0:1,b=!1,C=!1){const f={__v_isVNode:!0,__v_skip:!0,type:s,props:l,key:l&&wy(l),ref:l&&dl(l),scopeId:Rl,slotScopeIds:null,children:u,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:_,patchFlag:g,dynamicProps:m,dynamicChildren:null,appContext:null,ctx:Wt};return C?(Lg(f,u),_&128&&s.normalize(f)):u&&(f.shapeFlag|=Bt(u)?8:16),tr>0&&!b&&Cn&&(f.patchFlag>0||_&6)&&f.patchFlag!==32&&Cn.push(f),f}const Pe=sR;function sR(s,l=null,u=null,g=0,m=null,_=!1){if((!s||s===N1)&&(s=ln),ki(s)){const C=Co(s,l,!0);return u&&Lg(C,u),tr>0&&!_&&Cn&&(C.shapeFlag&6?Cn[Cn.indexOf(s)]=C:Cn.push(C)),C.patchFlag|=-2,C}if(pR(s)&&(s=s.__vccOpts),l){l=Ay(l);let{class:C,style:f}=l;C&&!Bt(C)&&(l.class=Le(C)),Ct(f)&&(Ag(f)&&!Ne(f)&&(f=Mt({},f)),l.style=Ji(f))}const b=Bt(s)?1:O1(s)?128:tR(s)?64:Ct(s)?4:We(s)?2:0;return N(s,l,u,g,m,b,_,!0)}function Ay(s){return s?Ag(s)||sy(s)?Mt({},s):s:null}function Co(s,l,u=!1){const{props:g,ref:m,patchFlag:_,children:b}=s,C=l?Cy(g||{},l):g;return{__v_isVNode:!0,__v_skip:!0,type:s.type,props:C,key:C&&wy(C),ref:l&&l.ref?u&&m?Ne(m)?m.concat(dl(l)):[m,dl(l)]:dl(l):m,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:b,target:s.target,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:l&&s.type!==Je?_===-1?16:_|16:_,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:s.transition,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&Co(s.ssContent),ssFallback:s.ssFallback&&Co(s.ssFallback),el:s.el,anchor:s.anchor,ctx:s.ctx,ce:s.ce}}function nt(s=" ",l=0){return Pe(er,null,s,l)}function aR(s,l){const u=Pe(Zi,null,s);return u.staticCount=l,u}function $e(s="",l=!1){return l?(re(),Zr(ln,null,s)):Pe(ln,null,s)}function Nn(s){return s==null||typeof s=="boolean"?Pe(ln):Ne(s)?Pe(Je,null,s.slice()):typeof s=="object"?di(s):Pe(er,null,String(s))}function di(s){return s.el===null&&s.patchFlag!==-1||s.memo?s:Co(s)}function Lg(s,l){let u=0;const{shapeFlag:g}=s;if(l==null)l=null;else if(Ne(l))u=16;else if(typeof l=="object")if(g&65){const m=l.default;m&&(m._c&&(m._d=!1),Lg(s,m()),m._c&&(m._d=!0));return}else{u=32;const m=l._;!m&&!sy(l)?l._ctx=Wt:m===3&&Wt&&(Wt.slots._===1?l._=1:(l._=2,s.patchFlag|=1024))}else We(l)?(l={default:l,_ctx:Wt},u=32):(l=String(l),g&64?(u=16,l=[nt(l)]):u=8);s.children=l,s.shapeFlag|=u}function Cy(...s){const l={};for(let u=0;u<s.length;u++){const g=s[u];for(const m in g)if(m==="class")l.class!==g.class&&(l.class=Le([l.class,g.class]));else if(m==="style")l.style=Ji([l.style,g.style]);else if(wa(m)){const _=l[m],b=g[m];b&&_!==b&&!(Ne(_)&&_.includes(b))&&(l[m]=_?[].concat(_,b):b)}else m!==""&&(l[m]=g[m])}return l}function wn(s,l,u,g=null){Ln(s,l,7,[u,g])}const cR=oy();let lR=0;function vy(s,l,u){const g=s.type,m=(l?l.appContext:s.appContext)||cR,_={uid:lR++,vnode:s,type:g,parent:l,appContext:m,root:null,next:null,subTree:null,effect:null,update:null,scope:new gg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:l?l.provides:Object.create(m.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cy(g,m),emitsOptions:P1(g,m),emit:null,emitted:null,propsDefaults:kt,inheritAttrs:g.inheritAttrs,ctx:kt,data:kt,props:kt,attrs:kt,slots:kt,refs:kt,setupState:kt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:u,suspenseId:u?u.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return _.ctx={_},_.root=l?l.root:_,_.emit=JO.bind(null,_),s.ce&&s.ce(_),_}let Zt=null;const Ho=()=>Zt||Wt;let Cl,$h;{const s=r1(),l=(u,g)=>{let m;return(m=s[u])||(m=s[u]=[]),m.push(g),_=>{m.length>1?m.forEach(b=>b(_)):m[0](_)}};Cl=l("__VUE_INSTANCE_SETTERS__",u=>Zt=u),$h=l("__VUE_SSR_SETTERS__",u=>xa=u)}const nr=s=>{const l=Zt;return Cl(s),s.scope.on(),()=>{s.scope.off(),Cl(l)}},Wh=()=>{Zt&&Zt.scope.off(),Cl(null)};function yy(s){return s.vnode.shapeFlag&4}let xa=!1;function xy(s,l=!1){l&&$h(l);const{props:u,children:g}=s.vnode,m=yy(s);qL(s,u,m,l),YL(s,g);const _=m?dR(s,l):void 0;return l&&$h(!1),_}function dR(s,l){const u=s.type;s.accessCache=Object.create(null),s.proxy=new Proxy(s.ctx,Rh);const{setup:g}=u;if(g){const m=s.setupContext=g.length>1?Dy(s):null,_=nr(s);_i();const b=jo(g,s,0,[s.props,m]);if(wi(),_(),ug(b)){if(b.then(Wh,Wh),l)return b.then(C=>{qh(s,C,l)}).catch(C=>{ir(C,s,0)});s.asyncDep=b}else qh(s,b,l)}else Ey(s,l)}function qh(s,l,u){We(l)?s.type.__ssrInlineRender?s.ssrRender=l:s.render=l:Ct(l)&&(s.setupState=yg(l)),Ey(s,u)}let vl,Gh;function uR(s){vl=s,Gh=l=>{l.render._rc&&(l.withProxy=new Proxy(l.ctx,EL))}}const hR=()=>!vl;function Ey(s,l,u){const g=s.type;if(!s.render){if(!l&&vl&&!g.render){const m=g.template||Pg(s).template;if(m){const{isCustomElement:_,compilerOptions:b}=s.appContext.config,{delimiters:C,compilerOptions:f}=g,y=Mt(Mt({isCustomElement:_,delimiters:C},b),f);g.render=vl(m,y)}}s.render=g.render||An,Gh&&Gh(s)}{const m=nr(s);_i();try{jL(s)}finally{wi(),m()}}}const gR={get(s,l){return vn(s,"get",""),s[l]}};function Dy(s){const l=u=>{s.exposed=u||{}};return{attrs:new Proxy(s.attrs,gR),slots:s.slots,emit:s.emit,expose:l}}function Hl(s){if(s.exposed)return s.exposeProxy||(s.exposeProxy=new Proxy(yg(Nl(s.exposed)),{get(l,u){if(u in l)return l[u];if(u in na)return na[u](s)},has(l,u){return u in l||u in na}}))}function Kh(s,l=!0){return We(s)?s.displayName||s.name:s.name||l&&s.__name}function pR(s){return We(s)&&"__vccOpts"in s}const gn=(s,l)=>NO(s,l,xa);function ea(s,l,u=kt){const g=Ho(),m=pn(l),_=On(l),b=E1((f,y)=>{let x;return F1(()=>{const v=s[l];lo(x,v)&&(x=v,y())}),{get(){return f(),u.get?u.get(x):x},set(v){const w=g.vnode.props;!(w&&(l in w||m in w||_ in w)&&(`onUpdate:${l}`in w||`onUpdate:${m}`in w||`onUpdate:${_}`in w))&&lo(v,x)&&(x=v,y()),g.emit(`update:${l}`,u.set?u.set(v):v)}}}),C=l==="modelValue"?"modelModifiers":`${l}Modifiers`;return b[Symbol.iterator]=()=>{let f=0;return{next(){return f<2?{value:f++?s[C]||{}:b,done:!1}:{done:!0}}}},b}function $l(s,l,u){const g=arguments.length;return g===2?Ct(l)&&!Ne(l)?ki(l)?Pe(s,null,[l]):Pe(s,l):Pe(s,null,l):(g>3?u=Array.prototype.slice.call(arguments,2):g===3&&ki(u)&&(u=[u]),Pe(s,l,u))}function mR(){}function fR(s,l,u,g){const m=u[g];if(m&&Iy(m,s))return m;const _=l();return _.memo=s.slice(),u[g]=_}function Iy(s,l){const u=s.memo;if(u.length!=l.length)return!1;for(let g=0;g<u.length;g++)if(lo(u[g],l[g]))return!1;return tr>0&&Cn&&Cn.push(s),!0}const Sy="3.4.23",kR=An,bR=GO,_R=Rr,wR=B1,AR={createComponentInstance:vy,setupComponent:xy,renderComponentRoot:ll,setCurrentRenderingInstance:pa,isVNode:ki,normalizeVNode:Nn},CR=AR,vR=null,yR=null,xR=null;/**
* @vue/runtime-dom v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ER="http://www.w3.org/2000/svg",DR="http://www.w3.org/1998/Math/MathML",ui=typeof document<"u"?document:null,cv=ui&&ui.createElement("template"),IR={insert:(s,l,u)=>{l.insertBefore(s,u||null)},remove:s=>{const l=s.parentNode;l&&l.removeChild(s)},createElement:(s,l,u,g)=>{const m=l==="svg"?ui.createElementNS(ER,s):l==="mathml"?ui.createElementNS(DR,s):ui.createElement(s,u?{is:u}:void 0);return s==="select"&&g&&g.multiple!=null&&m.setAttribute("multiple",g.multiple),m},createText:s=>ui.createTextNode(s),createComment:s=>ui.createComment(s),setText:(s,l)=>{s.nodeValue=l},setElementText:(s,l)=>{s.textContent=l},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>ui.querySelector(s),setScopeId(s,l){s.setAttribute(l,"")},insertStaticContent(s,l,u,g,m,_){const b=u?u.previousSibling:l.lastChild;if(m&&(m===_||m.nextSibling))for(;l.insertBefore(m.cloneNode(!0),u),!(m===_||!(m=m.nextSibling)););else{cv.innerHTML=g==="svg"?`<svg>${s}</svg>`:g==="mathml"?`<math>${s}</math>`:s;const C=cv.content;if(g==="svg"||g==="mathml"){const f=C.firstChild;for(;f.firstChild;)C.appendChild(f.firstChild);C.removeChild(f)}l.insertBefore(C,u)}return[b?b.nextSibling:l.firstChild,u?u.previousSibling:l.lastChild]}},ni="transition",Ks="animation",Jr=Symbol("_vtc"),Rg=(s,{slots:l})=>$l(U1,My(s),l);Rg.displayName="Transition";const Ty={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},SR=Rg.props=Mt({},Bg,Ty),Wi=(s,l=[])=>{Ne(s)?s.forEach(u=>u(...l)):s&&s(...l)},lv=s=>s?Ne(s)?s.some(l=>l.length>1):s.length>1:!1;function My(s){const l={};for(const J in s)J in Ty||(l[J]=s[J]);if(s.css===!1)return l;const{name:u="v",type:g,duration:m,enterFromClass:_=`${u}-enter-from`,enterActiveClass:b=`${u}-enter-active`,enterToClass:C=`${u}-enter-to`,appearFromClass:f=_,appearActiveClass:y=b,appearToClass:x=C,leaveFromClass:v=`${u}-leave-from`,leaveActiveClass:w=`${u}-leave-active`,leaveToClass:D=`${u}-leave-to`}=s,M=TR(m),P=M&&M[0],L=M&&M[1],{onBeforeEnter:F,onEnter:j,onEnterCancelled:R,onLeave:V,onLeaveCancelled:$,onBeforeAppear:K=F,onAppear:G=j,onAppearCancelled:H=R}=l,T=(J,ge,Te)=>{si(J,ge?x:C),si(J,ge?y:b),Te&&Te()},W=(J,ge)=>{J._isLeaving=!1,si(J,v),si(J,D),si(J,w),ge&&ge()},de=J=>(ge,Te)=>{const be=J?G:j,Q=()=>T(ge,J,Te);Wi(be,[ge,Q]),dv(()=>{si(ge,J?f:_),Oo(ge,J?x:C),lv(be)||uv(ge,g,P,Q)})};return Mt(l,{onBeforeEnter(J){Wi(F,[J]),Oo(J,_),Oo(J,b)},onBeforeAppear(J){Wi(K,[J]),Oo(J,f),Oo(J,y)},onEnter:de(!1),onAppear:de(!0),onLeave(J,ge){J._isLeaving=!0;const Te=()=>W(J,ge);Oo(J,v),Py(),Oo(J,w),dv(()=>{J._isLeaving&&(si(J,v),Oo(J,D),lv(V)||uv(J,g,L,Te))}),Wi(V,[J,Te])},onEnterCancelled(J){T(J,!1),Wi(R,[J])},onAppearCancelled(J){T(J,!0),Wi(H,[J])},onLeaveCancelled(J){W(J),Wi($,[J])}})}function TR(s){if(s==null)return null;if(Ct(s))return[Ah(s.enter),Ah(s.leave)];{const l=Ah(s);return[l,l]}}function Ah(s){return fl(s)}function Oo(s,l){l.split(/\s+/).forEach(u=>u&&s.classList.add(u)),(s[Jr]||(s[Jr]=new Set)).add(l)}function si(s,l){l.split(/\s+/).forEach(g=>g&&s.classList.remove(g));const u=s[Jr];u&&(u.delete(l),u.size||(s[Jr]=void 0))}function dv(s){requestAnimationFrame(()=>{requestAnimationFrame(s)})}let MR=0;function uv(s,l,u,g){const m=s._endId=++MR,_=()=>{m===s._endId&&g()};if(u)return setTimeout(_,u);const{type:b,timeout:C,propCount:f}=By(s,l);if(!b)return g();const y=b+"end";let x=0;const v=()=>{s.removeEventListener(y,w),_()},w=D=>{D.target===s&&++x>=f&&v()};setTimeout(()=>{x<f&&v()},C+1),s.addEventListener(y,w)}function By(s,l){const u=window.getComputedStyle(s),g=M=>(u[M]||"").split(", "),m=g(`${ni}Delay`),_=g(`${ni}Duration`),b=hv(m,_),C=g(`${Ks}Delay`),f=g(`${Ks}Duration`),y=hv(C,f);let x=null,v=0,w=0;l===ni?b>0&&(x=ni,v=b,w=_.length):l===Ks?y>0&&(x=Ks,v=y,w=f.length):(v=Math.max(b,y),x=v>0?b>y?ni:Ks:null,w=x?x===ni?_.length:f.length:0);const D=x===ni&&/\b(transform|all)(,|$)/.test(g(`${ni}Property`).toString());return{type:x,timeout:v,propCount:w,hasTransform:D}}function hv(s,l){for(;s.length<l.length;)s=s.concat(s);return Math.max(...l.map((u,g)=>gv(u)+gv(s[g])))}function gv(s){return s==="auto"?0:Number(s.slice(0,-1).replace(",","."))*1e3}function Py(){return document.body.offsetHeight}function BR(s,l,u){const g=s[Jr];g&&(l=(l?[l,...g]:[...g]).join(" ")),l==null?s.removeAttribute("class"):u?s.setAttribute("class",l):s.className=l}const yl=Symbol("_vod"),Ny=Symbol("_vsh"),Oy={beforeMount(s,{value:l},{transition:u}){s[yl]=s.style.display==="none"?"":s.style.display,u&&l?u.beforeEnter(s):Ys(s,l)},mounted(s,{value:l},{transition:u}){u&&l&&u.enter(s)},updated(s,{value:l,oldValue:u},{transition:g}){!l!=!u&&(g?l?(g.beforeEnter(s),Ys(s,!0),g.enter(s)):g.leave(s,()=>{Ys(s,!1)}):Ys(s,l))},beforeUnmount(s,{value:l}){Ys(s,l)}};function Ys(s,l){s.style.display=l?s[yl]:"none",s[Ny]=!l}function PR(){Oy.getSSRProps=({value:s})=>{if(!s)return{style:{display:"none"}}}}const Ly=Symbol("");function NR(s){const l=Ho();if(!l)return;const u=l.ut=(m=s(l.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${l.uid}"]`)).forEach(_=>Qh(_,m))},g=()=>{const m=s(l.proxy);Yh(l.subTree,m),u(m)};yn(()=>{j1(g);const m=new MutationObserver(g);m.observe(l.subTree.el.parentNode,{childList:!0}),Ul(()=>m.disconnect())})}function Yh(s,l){if(s.shapeFlag&128){const u=s.suspense;s=u.activeBranch,u.pendingBranch&&!u.isHydrating&&u.effects.push(()=>{Yh(u.activeBranch,l)})}for(;s.component;)s=s.component.subTree;if(s.shapeFlag&1&&s.el)Qh(s.el,l);else if(s.type===Je)s.children.forEach(u=>Yh(u,l));else if(s.type===Zi){let{el:u,anchor:g}=s;for(;u&&(Qh(u,l),u!==g);)u=u.nextSibling}}function Qh(s,l){if(s.nodeType===1){const u=s.style;let g="";for(const m in l)u.setProperty(`--${m}`,l[m]),g+=`--${m}: ${l[m]};`;u[Ly]=g}}const OR=/(^|;)\s*display\s*:/;function LR(s,l,u){const g=s.style,m=Bt(u);let _=!1;if(u&&!m){if(l)if(Bt(l))for(const b of l.split(";")){const C=b.slice(0,b.indexOf(":")).trim();u[C]==null&&ul(g,C,"")}else for(const b in l)u[b]==null&&ul(g,b,"");for(const b in u)b==="display"&&(_=!0),ul(g,b,u[b])}else if(m){if(l!==u){const b=g[Ly];b&&(u+=";"+b),g.cssText=u,_=OR.test(u)}}else l&&s.removeAttribute("style");yl in s&&(s[yl]=_?g.display:"",s[Ny]&&(g.display="none"))}const pv=/\s*!important$/;function ul(s,l,u){if(Ne(u))u.forEach(g=>ul(s,l,g));else if(u==null&&(u=""),l.startsWith("--"))s.setProperty(l,u);else{const g=RR(s,l);pv.test(u)?s.setProperty(On(g),u.replace(pv,""),"important"):s[g]=u}}const mv=["Webkit","Moz","ms"],Ch={};function RR(s,l){const u=Ch[l];if(u)return u;let g=pn(l);if(g!=="filter"&&g in s)return Ch[l]=g;g=Aa(g);for(let m=0;m<mv.length;m++){const _=mv[m]+g;if(_ in s)return Ch[l]=_}return l}const fv="http://www.w3.org/1999/xlink";function zR(s,l,u,g,m){if(g&&l.startsWith("xlink:"))u==null?s.removeAttributeNS(fv,l.slice(6,l.length)):s.setAttributeNS(fv,l,u);else{const _=lO(l);u==null||_&&!s1(u)?s.removeAttribute(l):s.setAttribute(l,_?"":u)}}function jR(s,l,u,g,m,_,b){if(l==="innerHTML"||l==="textContent"){g&&b(g,m,_),s[l]=u??"";return}const C=s.tagName;if(l==="value"&&C!=="PROGRESS"&&!C.includes("-")){const y=C==="OPTION"?s.getAttribute("value")||"":s.value,x=u??"";(y!==x||!("_value"in s))&&(s.value=x),u==null&&s.removeAttribute(l),s._value=u;return}let f=!1;if(u===""||u==null){const y=typeof s[l];y==="boolean"?u=s1(u):u==null&&y==="string"?(u="",f=!0):y==="number"&&(u=0,f=!0)}try{s[l]=u}catch{}f&&s.removeAttribute(l)}function Ro(s,l,u,g){s.addEventListener(l,u,g)}function FR(s,l,u,g){s.removeEventListener(l,u,g)}const kv=Symbol("_vei");function VR(s,l,u,g,m=null){const _=s[kv]||(s[kv]={}),b=_[l];if(g&&b)b.value=g;else{const[C,f]=UR(l);if(g){const y=_[l]=WR(g,m);Ro(s,C,y,f)}else b&&(FR(s,C,b,f),_[l]=void 0)}}const bv=/(?:Once|Passive|Capture)$/;function UR(s){let l;if(bv.test(s)){l={};let g;for(;g=s.match(bv);)s=s.slice(0,s.length-g[0].length),l[g[0].toLowerCase()]=!0}return[s[2]===":"?s.slice(3):On(s.slice(2)),l]}let vh=0;const HR=Promise.resolve(),$R=()=>vh||(HR.then(()=>vh=0),vh=Date.now());function WR(s,l){const u=g=>{if(!g._vts)g._vts=Date.now();else if(g._vts<=u.attached)return;Ln(qR(g,u.value),l,5,[g])};return u.value=s,u.attached=$R(),u}function qR(s,l){if(Ne(l)){const u=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{u.call(s),s._stopped=!0},l.map(g=>m=>!m._stopped&&g&&g(m))}else return l}const _v=s=>s.charCodeAt(0)===111&&s.charCodeAt(1)===110&&s.charCodeAt(2)>96&&s.charCodeAt(2)<123,GR=(s,l,u,g,m,_,b,C,f)=>{const y=m==="svg";l==="class"?BR(s,g,y):l==="style"?LR(s,u,g):wa(l)?lg(l)||VR(s,l,u,g,b):(l[0]==="."?(l=l.slice(1),!0):l[0]==="^"?(l=l.slice(1),!1):KR(s,l,g,y))?jR(s,l,g,_,b,C,f):(l==="true-value"?s._trueValue=g:l==="false-value"&&(s._falseValue=g),zR(s,l,g,y))};function KR(s,l,u,g){if(g)return!!(l==="innerHTML"||l==="textContent"||l in s&&_v(l)&&We(u));if(l==="spellcheck"||l==="draggable"||l==="translate"||l==="form"||l==="list"&&s.tagName==="INPUT"||l==="type"&&s.tagName==="TEXTAREA")return!1;if(l==="width"||l==="height"){const m=s.tagName;if(m==="IMG"||m==="VIDEO"||m==="CANVAS"||m==="SOURCE")return!1}return _v(l)&&Bt(u)?!1:l in s}/*! #__NO_SIDE_EFFECTS__ */function Ry(s,l){const u=va(s);class g extends Wl{constructor(_){super(u,_,l)}}return g.def=u,g}/*! #__NO_SIDE_EFFECTS__ */const YR=s=>Ry(s,Gy),QR=typeof HTMLElement<"u"?HTMLElement:class{};class Wl extends QR{constructor(l,u={},g){super(),this._def=l,this._props=u,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&g?g(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),is(()=>{this._connected||(Zh(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let g=0;g<this.attributes.length;g++)this._setAttr(this.attributes[g].name);this._ob=new MutationObserver(g=>{for(const m of g)this._setAttr(m.attributeName)}),this._ob.observe(this,{attributes:!0});const l=(g,m=!1)=>{const{props:_,styles:b}=g;let C;if(_&&!Ne(_))for(const f in _){const y=_[f];(y===Number||y&&y.type===Number)&&(f in this._props&&(this._props[f]=fl(this._props[f])),(C||(C=Object.create(null)))[pn(f)]=!0)}this._numberProps=C,m&&this._resolveProps(g),this._applyStyles(b),this._update()},u=this._def.__asyncLoader;u?u().then(g=>l(g,!0)):l(this._def)}_resolveProps(l){const{props:u}=l,g=Ne(u)?u:Object.keys(u||{});for(const m of Object.keys(this))m[0]!=="_"&&g.includes(m)&&this._setProp(m,this[m],!0,!1);for(const m of g.map(pn))Object.defineProperty(this,m,{get(){return this._getProp(m)},set(_){this._setProp(m,_)}})}_setAttr(l){let u=this.hasAttribute(l)?this.getAttribute(l):void 0;const g=pn(l);this._numberProps&&this._numberProps[g]&&(u=fl(u)),this._setProp(g,u,!1)}_getProp(l){return this._props[l]}_setProp(l,u,g=!0,m=!0){u!==this._props[l]&&(this._props[l]=u,m&&this._instance&&this._update(),g&&(u===!0?this.setAttribute(On(l),""):typeof u=="string"||typeof u=="number"?this.setAttribute(On(l),u+""):u||this.removeAttribute(On(l))))}_update(){Zh(this._createVNode(),this.shadowRoot)}_createVNode(){const l=Pe(this._def,Mt({},this._props));return this._instance||(l.ce=u=>{this._instance=u,u.isCE=!0;const g=(_,b)=>{this.dispatchEvent(new CustomEvent(_,{detail:b}))};u.emit=(_,...b)=>{g(_,b),On(_)!==_&&g(On(_),b)};let m=this;for(;m=m&&(m.parentNode||m.host);)if(m instanceof Wl){u.parent=m._instance,u.provides=m._instance.provides;break}}),l}_applyStyles(l){l&&l.forEach(u=>{const g=document.createElement("style");g.textContent=u,this.shadowRoot.appendChild(g)})}}function ZR(s="$style"){{const l=Ho();if(!l)return kt;const u=l.type.__cssModules;if(!u)return kt;const g=u[s];return g||kt}}const zy=new WeakMap,jy=new WeakMap,xl=Symbol("_moveCb"),wv=Symbol("_enterCb"),Fy={name:"TransitionGroup",props:Mt({},SR,{tag:String,moveClass:String}),setup(s,{slots:l}){const u=Ho(),g=Mg();let m,_;return Fl(()=>{if(!m.length)return;const b=s.moveClass||`${s.name||"v"}-move`;if(!o7(m[0].el,u.vnode.el,b))return;m.forEach(e7),m.forEach(t7);const C=m.filter(n7);Py(),C.forEach(f=>{const y=f.el,x=y.style;Oo(y,b),x.transform=x.webkitTransform=x.transitionDuration="";const v=y[xl]=w=>{w&&w.target!==y||(!w||/transform$/.test(w.propertyName))&&(y.removeEventListener("transitionend",v),y[xl]=null,si(y,b))};y.addEventListener("transitionend",v)})}),()=>{const b=ot(s),C=My(b);let f=b.tag||Je;if(m=[],_)for(let y=0;y<_.length;y++){const x=_[y];x.el&&x.el instanceof Element&&(m.push(x),Xi(x,Qr(x,C,g,u)),zy.set(x,x.el.getBoundingClientRect()))}_=l.default?zl(l.default()):[];for(let y=0;y<_.length;y++){const x=_[y];x.key!=null&&Xi(x,Qr(x,C,g,u))}return Pe(f,null,_)}}},JR=s=>delete s.mode;Fy.props;const XR=Fy;function e7(s){const l=s.el;l[xl]&&l[xl](),l[wv]&&l[wv]()}function t7(s){jy.set(s,s.el.getBoundingClientRect())}function n7(s){const l=zy.get(s),u=jy.get(s),g=l.left-u.left,m=l.top-u.top;if(g||m){const _=s.el.style;return _.transform=_.webkitTransform=`translate(${g}px,${m}px)`,_.transitionDuration="0s",s}}function o7(s,l,u){const g=s.cloneNode(),m=s[Jr];m&&m.forEach(C=>{C.split(/\s+/).forEach(f=>f&&g.classList.remove(f))}),u.split(/\s+/).forEach(C=>C&&g.classList.add(C)),g.style.display="none";const _=l.nodeType===1?l:l.parentNode;_.appendChild(g);const{hasTransform:b}=By(g);return _.removeChild(g),b}const bi=s=>{const l=s.props["onUpdate:modelValue"]||!1;return Ne(l)?u=>Ur(l,u):l};function i7(s){s.target.composing=!0}function Av(s){const l=s.target;l.composing&&(l.composing=!1,l.dispatchEvent(new Event("input")))}const Yn=Symbol("_assign"),Dt={created(s,{modifiers:{lazy:l,trim:u,number:g}},m){s[Yn]=bi(m);const _=g||m.props&&m.props.type==="number";Ro(s,l?"change":"input",b=>{if(b.target.composing)return;let C=s.value;u&&(C=C.trim()),_&&(C=ml(C)),s[Yn](C)}),u&&Ro(s,"change",()=>{s.value=s.value.trim()}),l||(Ro(s,"compositionstart",i7),Ro(s,"compositionend",Av),Ro(s,"change",Av))},mounted(s,{value:l}){s.value=l??""},beforeUpdate(s,{value:l,modifiers:{lazy:u,trim:g,number:m}},_){if(s[Yn]=bi(_),s.composing)return;const b=(m||s.type==="number")&&!/^0\d/.test(s.value)?ml(s.value):s.value,C=l??"";b!==C&&(document.activeElement===s&&s.type!=="range"&&(u||g&&s.value.trim()===C)||(s.value=C))}},Ao={deep:!0,created(s,l,u){s[Yn]=bi(u),Ro(s,"change",()=>{const g=s._modelValue,m=Xr(s),_=s.checked,b=s[Yn];if(Ne(g)){const C=Tl(g,m),f=C!==-1;if(_&&!f)b(g.concat(m));else if(!_&&f){const y=[...g];y.splice(C,1),b(y)}}else if(or(g)){const C=new Set(g);_?C.add(m):C.delete(m),b(C)}else b(Vy(s,_))})},mounted:Cv,beforeUpdate(s,l,u){s[Yn]=bi(u),Cv(s,l,u)}};function Cv(s,{value:l,oldValue:u},g){s._modelValue=l,Ne(l)?s.checked=Tl(l,g.props.value)>-1:or(l)?s.checked=l.has(g.props.value):l!==u&&(s.checked=fi(l,Vy(s,!0)))}const zg={created(s,{value:l},u){s.checked=fi(l,u.props.value),s[Yn]=bi(u),Ro(s,"change",()=>{s[Yn](Xr(s))})},beforeUpdate(s,{value:l,oldValue:u},g){s[Yn]=bi(g),l!==u&&(s.checked=fi(l,g.props.value))}},Gr={deep:!0,created(s,{value:l,modifiers:{number:u}},g){const m=or(l);Ro(s,"change",()=>{const _=Array.prototype.filter.call(s.options,b=>b.selected).map(b=>u?ml(Xr(b)):Xr(b));s[Yn](s.multiple?m?new Set(_):_:_[0]),s._assigning=!0,is(()=>{s._assigning=!1})}),s[Yn]=bi(g)},mounted(s,{value:l,modifiers:{number:u}}){vv(s,l)},beforeUpdate(s,l,u){s[Yn]=bi(u)},updated(s,{value:l,modifiers:{number:u}}){s._assigning||vv(s,l)}};function vv(s,l,u){const g=s.multiple,m=Ne(l);if(!(g&&!m&&!or(l))){for(let _=0,b=s.options.length;_<b;_++){const C=s.options[_],f=Xr(C);if(g)if(m){const y=typeof f;y==="string"||y==="number"?C.selected=l.some(x=>String(x)===String(f)):C.selected=Tl(l,f)>-1}else C.selected=l.has(f);else if(fi(Xr(C),l)){s.selectedIndex!==_&&(s.selectedIndex=_);return}}!g&&s.selectedIndex!==-1&&(s.selectedIndex=-1)}}function Xr(s){return"_value"in s?s._value:s.value}function Vy(s,l){const u=l?"_trueValue":"_falseValue";return u in s?s[u]:l}const Uy={created(s,l,u){al(s,l,u,null,"created")},mounted(s,l,u){al(s,l,u,null,"mounted")},beforeUpdate(s,l,u,g){al(s,l,u,g,"beforeUpdate")},updated(s,l,u,g){al(s,l,u,g,"updated")}};function Hy(s,l){switch(s){case"SELECT":return Gr;case"TEXTAREA":return Dt;default:switch(l){case"checkbox":return Ao;case"radio":return zg;default:return Dt}}}function al(s,l,u,g,m){const b=Hy(s.tagName,u.props&&u.props.type)[m];b&&b(s,l,u,g)}function r7(){Dt.getSSRProps=({value:s})=>({value:s}),zg.getSSRProps=({value:s},l)=>{if(l.props&&fi(l.props.value,s))return{checked:!0}},Ao.getSSRProps=({value:s},l)=>{if(Ne(s)){if(l.props&&Tl(s,l.props.value)>-1)return{checked:!0}}else if(or(s)){if(l.props&&s.has(l.props.value))return{checked:!0}}else if(s)return{checked:!0}},Uy.getSSRProps=(s,l)=>{if(typeof l.type!="string")return;const u=Hy(l.type.toUpperCase(),l.props&&l.props.type);if(u.getSSRProps)return u.getSSRProps(s,l)}}const s7=["ctrl","shift","alt","meta"],a7={stop:s=>s.stopPropagation(),prevent:s=>s.preventDefault(),self:s=>s.target!==s.currentTarget,ctrl:s=>!s.ctrlKey,shift:s=>!s.shiftKey,alt:s=>!s.altKey,meta:s=>!s.metaKey,left:s=>"button"in s&&s.button!==0,middle:s=>"button"in s&&s.button!==1,right:s=>"button"in s&&s.button!==2,exact:(s,l)=>s7.some(u=>s[`${u}Key`]&&!l.includes(u))},qt=(s,l)=>{const u=s._withMods||(s._withMods={}),g=l.join(".");return u[g]||(u[g]=(m,..._)=>{for(let b=0;b<l.length;b++){const C=a7[l[b]];if(C&&C(m,l))return}return s(m,..._)})},c7={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},l7=(s,l)=>{const u=s._withKeys||(s._withKeys={}),g=l.join(".");return u[g]||(u[g]=m=>{if(!("key"in m))return;const _=On(m.key);if(l.some(b=>b===_||c7[b]===_))return s(m)})},$y=Mt({patchProp:GR},IR);let sa,yv=!1;function Wy(){return sa||(sa=hy($y))}function qy(){return sa=yv?sa:gy($y),yv=!0,sa}const Zh=(...s)=>{Wy().render(...s)},Gy=(...s)=>{qy().hydrate(...s)},Ky=(...s)=>{const l=Wy().createApp(...s),{mount:u}=l;return l.mount=g=>{const m=Qy(g);if(!m)return;const _=l._component;!We(_)&&!_.render&&!_.template&&(_.template=m.innerHTML),m.innerHTML="";const b=u(m,!1,Yy(m));return m instanceof Element&&(m.removeAttribute("v-cloak"),m.setAttribute("data-v-app","")),b},l},d7=(...s)=>{const l=qy().createApp(...s),{mount:u}=l;return l.mount=g=>{const m=Qy(g);if(m)return u(m,!0,Yy(m))},l};function Yy(s){if(s instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&s instanceof MathMLElement)return"mathml"}function Qy(s){return Bt(s)?document.querySelector(s):s}let xv=!1;const u7=()=>{xv||(xv=!0,r7(),PR())};/**
* vue v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const h7=()=>{},g7=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:U1,BaseTransitionPropsValidators:Bg,Comment:ln,DeprecationTypes:xR,EffectScope:gg,ErrorCodes:qO,ErrorTypeStrings:bR,Fragment:Je,KeepAlive:AL,ReactiveEffect:Kr,Static:Zi,Suspense:dL,Teleport:iR,Text:er,TrackOpTypes:HO,Transition:Rg,TransitionGroup:XR,TriggerOpTypes:$O,VueElement:Wl,assertNumber:WO,callWithAsyncErrorHandling:Ln,callWithErrorHandling:jo,camelize:pn,capitalize:Aa,cloneVNode:Co,compatUtils:yR,compile:h7,computed:gn,createApp:Ky,createBlock:Zr,createCommentVNode:$e,createElementBlock:le,createElementVNode:N,createHydrationRenderer:gy,createPropsRestProxy:RL,createRenderer:hy,createSSRApp:d7,createSlots:vL,createStaticVNode:aR,createTextVNode:nt,createVNode:Pe,customRef:E1,defineAsyncComponent:_L,defineComponent:va,defineCustomElement:Ry,defineEmits:IL,defineExpose:SL,defineModel:BL,defineOptions:TL,defineProps:DL,defineSSRCustomElement:YR,defineSlots:ML,devtools:_R,effect:hO,effectScope:pg,getCurrentInstance:Ho,getCurrentScope:mg,getTransitionRawChildren:zl,guardReactiveProps:Ay,h:$l,handleError:ir,hasInjectionContext:iy,hydrate:Gy,initCustomFormatter:mR,initDirectivesForSSR:u7,inject:Kn,isMemoSame:Iy,isProxy:Ag,isReactive:mi,isReadonly:Yr,isRef:Ut,isRuntimeOnly:hR,isShallow:da,isVNode:ki,markRaw:Nl,mergeDefaults:LL,mergeModels:ty,mergeProps:Cy,nextTick:is,normalizeClass:Le,normalizeProps:aO,normalizeStyle:Ji,onActivated:$1,onBeforeMount:G1,onBeforeUnmount:Vl,onBeforeUpdate:K1,onDeactivated:W1,onErrorCaptured:J1,onMounted:yn,onRenderTracked:Z1,onRenderTriggered:Q1,onScopeDispose:l1,onServerPrefetch:Y1,onUnmounted:Ul,onUpdated:Fl,openBlock:re,popScopeId:eL,provide:oa,proxyRefs:yg,pushScopeId:XO,queuePostFlushCb:bl,reactive:co,readonly:wg,ref:me,registerRuntimeCompiler:uR,render:Zh,renderList:Lt,renderSlot:yL,resolveComponent:Ig,resolveDirective:cL,resolveDynamicComponent:aL,resolveFilter:vR,resolveTransitionHooks:Qr,setBlockTracking:Hh,setDevtoolsHook:wR,setTransitionHooks:Xi,shallowReactive:_g,shallowReadonly:PO,shallowRef:y1,ssrContextKey:R1,ssrUtils:CR,stop:gO,toDisplayString:Ze,toHandlerKey:ta,toHandlers:xL,toRaw:ot,toRef:UO,toRefs:D1,toValue:RO,transformVNodeArgs:rR,triggerRef:LO,unref:Xe,useAttrs:OL,useCssModule:ZR,useCssVars:NR,useModel:ea,useSSRContext:z1,useSlots:NL,useTransitionState:Mg,vModelCheckbox:Ao,vModelDynamic:Uy,vModelRadio:zg,vModelSelect:Gr,vModelText:Dt,vShow:Oy,version:Sy,warn:kR,watch:Rt,watchEffect:fL,watchPostEffect:j1,watchSyncEffect:F1,withAsyncContext:zL,withCtx:Lo,withDefaults:PL,withDirectives:at,withKeys:l7,withMemo:fR,withModifiers:qt,withScopeId:tL},Symbol.toStringTag,{value:"Module"}));var p7=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Zy;const ql=s=>Zy=s,Jy=Symbol();function Jh(s){return s&&typeof s=="object"&&Object.prototype.toString.call(s)==="[object Object]"&&typeof s.toJSON!="function"}var aa;(function(s){s.direct="direct",s.patchObject="patch object",s.patchFunction="patch function"})(aa||(aa={}));function m7(){const s=pg(!0),l=s.run(()=>me({}));let u=[],g=[];const m=Nl({install(_){ql(m),m._a=_,_.provide(Jy,m),_.config.globalProperties.$pinia=m,g.forEach(b=>u.push(b)),g=[]},use(_){return!this._a&&!p7?g.push(_):u.push(_),this},_p:u,_a:null,_e:s,_s:new Map,state:l});return m}const Xy=()=>{};function Ev(s,l,u,g=Xy){s.push(l);const m=()=>{const _=s.indexOf(l);_>-1&&(s.splice(_,1),g())};return!u&&mg()&&l1(m),m}function Lr(s,...l){s.slice().forEach(u=>{u(...l)})}const f7=s=>s();function Xh(s,l){s instanceof Map&&l instanceof Map&&l.forEach((u,g)=>s.set(g,u)),s instanceof Set&&l instanceof Set&&l.forEach(s.add,s);for(const u in l){if(!l.hasOwnProperty(u))continue;const g=l[u],m=s[u];Jh(m)&&Jh(g)&&s.hasOwnProperty(u)&&!Ut(g)&&!mi(g)?s[u]=Xh(m,g):s[u]=g}return s}const k7=Symbol();function b7(s){return!Jh(s)||!s.hasOwnProperty(k7)}const{assign:ai}=Object;function _7(s){return!!(Ut(s)&&s.effect)}function w7(s,l,u,g){const{state:m,actions:_,getters:b}=l,C=u.state.value[s];let f;function y(){C||(u.state.value[s]=m?m():{});const x=D1(u.state.value[s]);return ai(x,_,Object.keys(b||{}).reduce((v,w)=>(v[w]=Nl(gn(()=>{ql(u);const D=u._s.get(s);return b[w].call(D,D)})),v),{}))}return f=ex(s,y,l,u,g,!0),f}function ex(s,l,u={},g,m,_){let b;const C=ai({actions:{}},u),f={deep:!0};let y,x,v=[],w=[],D;const M=g.state.value[s];!_&&!M&&(g.state.value[s]={}),me({});let P;function L(H){let T;y=x=!1,typeof H=="function"?(H(g.state.value[s]),T={type:aa.patchFunction,storeId:s,events:D}):(Xh(g.state.value[s],H),T={type:aa.patchObject,payload:H,storeId:s,events:D});const W=P=Symbol();is().then(()=>{P===W&&(y=!0)}),x=!0,Lr(v,T,g.state.value[s])}const F=_?function(){const{state:T}=u,W=T?T():{};this.$patch(de=>{ai(de,W)})}:Xy;function j(){b.stop(),v=[],w=[],g._s.delete(s)}function R(H,T){return function(){ql(g);const W=Array.from(arguments),de=[],J=[];function ge(Q){de.push(Q)}function Te(Q){J.push(Q)}Lr(w,{args:W,name:H,store:$,after:ge,onError:Te});let be;try{be=T.apply(this&&this.$id===s?this:$,W)}catch(Q){throw Lr(J,Q),Q}return be instanceof Promise?be.then(Q=>(Lr(de,Q),Q)).catch(Q=>(Lr(J,Q),Promise.reject(Q))):(Lr(de,be),be)}}const V={_p:g,$id:s,$onAction:Ev.bind(null,w),$patch:L,$reset:F,$subscribe(H,T={}){const W=Ev(v,H,T.detached,()=>de()),de=b.run(()=>Rt(()=>g.state.value[s],J=>{(T.flush==="sync"?x:y)&&H({storeId:s,type:aa.direct,events:D},J)},ai({},f,T)));return W},$dispose:j},$=co(V);g._s.set(s,$);const G=(g._a&&g._a.runWithContext||f7)(()=>g._e.run(()=>(b=pg()).run(l)));for(const H in G){const T=G[H];if(Ut(T)&&!_7(T)||mi(T))_||(M&&b7(T)&&(Ut(T)?T.value=M[H]:Xh(T,M[H])),g.state.value[s][H]=T);else if(typeof T=="function"){const W=R(H,T);G[H]=W,C.actions[H]=T}}return ai($,G),ai(ot($),G),Object.defineProperty($,"$state",{get:()=>g.state.value[s],set:H=>{L(T=>{ai(T,H)})}}),g._p.forEach(H=>{ai($,b.run(()=>H({store:$,app:g._a,pinia:g,options:C})))}),M&&_&&u.hydrate&&u.hydrate($.$state,M),y=!0,x=!0,$}function A7(s,l,u){let g,m;const _=typeof l=="function";typeof s=="string"?(g=s,m=_?u:l):(m=s,g=s.id);function b(C,f){const y=iy();return C=C||(y?Kn(Jy,null):null),C&&ql(C),C=Zy,C._s.has(g)||(_?ex(g,l,m,C):w7(g,m,C)),C._s.get(g)}return b.$id=g,b}const C7=(s,l)=>{const u=s.__vccOpts||s;for(const[g,m]of l)u[g]=m;return u},v7={},y7={class:"modal-backdrop fade show d-block",style:{background:"rgba(0, 0, 0, 0.5)",position:"fixed",top:"0",right:"0",bottom:"0",left:"0"},"aria-modal":"true"},x7=N("div",{class:"modal-dialog modal-dialog-centered",role:"document",style:{"pointer-events":"none"}},[N("div",{class:"modal-content",style:{"pointer-events":"auto"}},[N("div",{class:"modal-header"},[N("h5",{class:"modal-title"},"..")]),N("div",{class:"modal-body"},".")])],-1),E7=[x7];function D7(s,l){return re(),le("div",y7,E7)}const I7=C7(v7,[["render",D7]]),S7=(s,l)=>{localStorage.setItem(s,JSON.stringify(l))},T7=s=>{const l=localStorage.getItem(s);if(!l)return null;try{return JSON.parse(l)}catch{return l}},M7=()=>{localStorage.clear()},eg={setItem:S7,getItem:T7,clear:M7},B7=async s=>typeof s=="object"&&s!==null?s:{err:[s]},P7=async s=>{let l=[];if(typeof s=="object"&&s!==null){const u=Object.keys(s);for(const g of u){const m=g.split(".")[0];l.includes(m)||l.push(m)}}return l},N7=s=>{const l={};return s.forEach(u=>{l[u]=""}),l},O7=(s,l)=>{if(Object.keys(s).length===0)return!1;let u=!0;for(let g of l)if(!s[g]){u=!1;break}return u},L7=()=>{const s=eg.getItem("config");let l=[],u="",g=[],m=0;s&&(l=s.langs,u=s.default_lang,g=s.page_types,m=s.cache_enable);const _=eg.getItem("auth");let b="";return _&&(b=_.token),{configLangs:l,configDefaultLang:u,pageTypes:g,cacheEnable:m,token:b}},R7=(s,l)=>{const u=new URL(s);return new URLSearchParams(u.search).get(l)},z7=async s=>new Promise(l=>setTimeout(l,s)),j7=(s,l)=>typeof s[l]>"u"?!1:s[l],F7=()=>({action:eg.getItem("config").is_cache_enable?"disable":"enable"}),It={getItemFromArrayOrFalse:j7,delay:z7,createEmptyObj:N7,parseError:B7,getErrorFields:P7,retrieveParamsFromStorage:L7,retrieveParamsFromUrl:R7,isNotEmptyObj:O7,getPostToggleCacheEnableFile:F7},V7=s=>{const l={success_page_add:"Page has been added",success_page_edit:"Page has been changed",success_client_edit:"Client has been changed",success_client_add:"Client has been added",success_product_edit:"Product has been changed",success_product_add:"Product has been added",success_image_position:"Position image has been changed",success_image_delete:"Image has been deleted",success_images_delete:"Images has been deleted",success_images_upload:"Images have been uploaded",fail_delete_images_no_items:"fail delete images no items",toggle_cache_enable:"toggle cache",clear_cache:"clear cache",create_sitemap:"create sitemap",cache_was_cleared:"Cache was cleared",sitemap_was_created:"Sitemap was created",success_edit_checkout:"Checkout has been updated",is_demo_true:"We're sorry, but this action is not available in the demo version.",internal_problem:"internal problem, see logs"};return l[s]?l[s]:s},Vt={ttt:V7};function tx(s,l){return function(){return s.apply(l,arguments)}}const{toString:U7}=Object.prototype,{getPrototypeOf:jg}=Object,Gl=(s=>l=>{const u=U7.call(l);return s[u]||(s[u]=u.slice(8,-1).toLowerCase())})(Object.create(null)),vo=s=>(s=s.toLowerCase(),l=>Gl(l)===s),Kl=s=>l=>typeof l===s,{isArray:rs}=Array,ka=Kl("undefined");function H7(s){return s!==null&&!ka(s)&&s.constructor!==null&&!ka(s.constructor)&&Qn(s.constructor.isBuffer)&&s.constructor.isBuffer(s)}const nx=vo("ArrayBuffer");function $7(s){let l;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?l=ArrayBuffer.isView(s):l=s&&s.buffer&&nx(s.buffer),l}const W7=Kl("string"),Qn=Kl("function"),ox=Kl("number"),Yl=s=>s!==null&&typeof s=="object",q7=s=>s===!0||s===!1,hl=s=>{if(Gl(s)!=="object")return!1;const l=jg(s);return(l===null||l===Object.prototype||Object.getPrototypeOf(l)===null)&&!(Symbol.toStringTag in s)&&!(Symbol.iterator in s)},G7=vo("Date"),K7=vo("File"),Y7=vo("Blob"),Q7=vo("FileList"),Z7=s=>Yl(s)&&Qn(s.pipe),J7=s=>{let l;return s&&(typeof FormData=="function"&&s instanceof FormData||Qn(s.append)&&((l=Gl(s))==="formdata"||l==="object"&&Qn(s.toString)&&s.toString()==="[object FormData]"))},X7=vo("URLSearchParams"),ez=s=>s.trim?s.trim():s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ea(s,l,{allOwnKeys:u=!1}={}){if(s===null||typeof s>"u")return;let g,m;if(typeof s!="object"&&(s=[s]),rs(s))for(g=0,m=s.length;g<m;g++)l.call(null,s[g],g,s);else{const _=u?Object.getOwnPropertyNames(s):Object.keys(s),b=_.length;let C;for(g=0;g<b;g++)C=_[g],l.call(null,s[C],C,s)}}function ix(s,l){l=l.toLowerCase();const u=Object.keys(s);let g=u.length,m;for(;g-- >0;)if(m=u[g],l===m.toLowerCase())return m;return null}const rx=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,sx=s=>!ka(s)&&s!==rx;function tg(){const{caseless:s}=sx(this)&&this||{},l={},u=(g,m)=>{const _=s&&ix(l,m)||m;hl(l[_])&&hl(g)?l[_]=tg(l[_],g):hl(g)?l[_]=tg({},g):rs(g)?l[_]=g.slice():l[_]=g};for(let g=0,m=arguments.length;g<m;g++)arguments[g]&&Ea(arguments[g],u);return l}const tz=(s,l,u,{allOwnKeys:g}={})=>(Ea(l,(m,_)=>{u&&Qn(m)?s[_]=tx(m,u):s[_]=m},{allOwnKeys:g}),s),nz=s=>(s.charCodeAt(0)===65279&&(s=s.slice(1)),s),oz=(s,l,u,g)=>{s.prototype=Object.create(l.prototype,g),s.prototype.constructor=s,Object.defineProperty(s,"super",{value:l.prototype}),u&&Object.assign(s.prototype,u)},iz=(s,l,u,g)=>{let m,_,b;const C={};if(l=l||{},s==null)return l;do{for(m=Object.getOwnPropertyNames(s),_=m.length;_-- >0;)b=m[_],(!g||g(b,s,l))&&!C[b]&&(l[b]=s[b],C[b]=!0);s=u!==!1&&jg(s)}while(s&&(!u||u(s,l))&&s!==Object.prototype);return l},rz=(s,l,u)=>{s=String(s),(u===void 0||u>s.length)&&(u=s.length),u-=l.length;const g=s.indexOf(l,u);return g!==-1&&g===u},sz=s=>{if(!s)return null;if(rs(s))return s;let l=s.length;if(!ox(l))return null;const u=new Array(l);for(;l-- >0;)u[l]=s[l];return u},az=(s=>l=>s&&l instanceof s)(typeof Uint8Array<"u"&&jg(Uint8Array)),cz=(s,l)=>{const g=(s&&s[Symbol.iterator]).call(s);let m;for(;(m=g.next())&&!m.done;){const _=m.value;l.call(s,_[0],_[1])}},lz=(s,l)=>{let u;const g=[];for(;(u=s.exec(l))!==null;)g.push(u);return g},dz=vo("HTMLFormElement"),uz=s=>s.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(u,g,m){return g.toUpperCase()+m}),Dv=(({hasOwnProperty:s})=>(l,u)=>s.call(l,u))(Object.prototype),hz=vo("RegExp"),ax=(s,l)=>{const u=Object.getOwnPropertyDescriptors(s),g={};Ea(u,(m,_)=>{let b;(b=l(m,_,s))!==!1&&(g[_]=b||m)}),Object.defineProperties(s,g)},gz=s=>{ax(s,(l,u)=>{if(Qn(s)&&["arguments","caller","callee"].indexOf(u)!==-1)return!1;const g=s[u];if(Qn(g)){if(l.enumerable=!1,"writable"in l){l.writable=!1;return}l.set||(l.set=()=>{throw Error("Can not rewrite read-only method '"+u+"'")})}})},pz=(s,l)=>{const u={},g=m=>{m.forEach(_=>{u[_]=!0})};return rs(s)?g(s):g(String(s).split(l)),u},mz=()=>{},fz=(s,l)=>(s=+s,Number.isFinite(s)?s:l),yh="abcdefghijklmnopqrstuvwxyz",Iv="0123456789",cx={DIGIT:Iv,ALPHA:yh,ALPHA_DIGIT:yh+yh.toUpperCase()+Iv},kz=(s=16,l=cx.ALPHA_DIGIT)=>{let u="";const{length:g}=l;for(;s--;)u+=l[Math.random()*g|0];return u};function bz(s){return!!(s&&Qn(s.append)&&s[Symbol.toStringTag]==="FormData"&&s[Symbol.iterator])}const _z=s=>{const l=new Array(10),u=(g,m)=>{if(Yl(g)){if(l.indexOf(g)>=0)return;if(!("toJSON"in g)){l[m]=g;const _=rs(g)?[]:{};return Ea(g,(b,C)=>{const f=u(b,m+1);!ka(f)&&(_[C]=f)}),l[m]=void 0,_}}return g};return u(s,0)},wz=vo("AsyncFunction"),Az=s=>s&&(Yl(s)||Qn(s))&&Qn(s.then)&&Qn(s.catch),he={isArray:rs,isArrayBuffer:nx,isBuffer:H7,isFormData:J7,isArrayBufferView:$7,isString:W7,isNumber:ox,isBoolean:q7,isObject:Yl,isPlainObject:hl,isUndefined:ka,isDate:G7,isFile:K7,isBlob:Y7,isRegExp:hz,isFunction:Qn,isStream:Z7,isURLSearchParams:X7,isTypedArray:az,isFileList:Q7,forEach:Ea,merge:tg,extend:tz,trim:ez,stripBOM:nz,inherits:oz,toFlatObject:iz,kindOf:Gl,kindOfTest:vo,endsWith:rz,toArray:sz,forEachEntry:cz,matchAll:lz,isHTMLForm:dz,hasOwnProperty:Dv,hasOwnProp:Dv,reduceDescriptors:ax,freezeMethods:gz,toObjectSet:pz,toCamelCase:uz,noop:mz,toFiniteNumber:fz,findKey:ix,global:rx,isContextDefined:sx,ALPHABET:cx,generateString:kz,isSpecCompliantForm:bz,toJSONObject:_z,isAsyncFn:wz,isThenable:Az};function ct(s,l,u,g,m){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=s,this.name="AxiosError",l&&(this.code=l),u&&(this.config=u),g&&(this.request=g),m&&(this.response=m)}he.inherits(ct,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:he.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const lx=ct.prototype,dx={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(s=>{dx[s]={value:s}});Object.defineProperties(ct,dx);Object.defineProperty(lx,"isAxiosError",{value:!0});ct.from=(s,l,u,g,m,_)=>{const b=Object.create(lx);return he.toFlatObject(s,b,function(f){return f!==Error.prototype},C=>C!=="isAxiosError"),ct.call(b,s.message,l,u,g,m),b.cause=s,b.name=s.name,_&&Object.assign(b,_),b};const Cz=null;function ng(s){return he.isPlainObject(s)||he.isArray(s)}function ux(s){return he.endsWith(s,"[]")?s.slice(0,-2):s}function Sv(s,l,u){return s?s.concat(l).map(function(m,_){return m=ux(m),!u&&_?"["+m+"]":m}).join(u?".":""):l}function vz(s){return he.isArray(s)&&!s.some(ng)}const yz=he.toFlatObject(he,{},null,function(l){return/^is[A-Z]/.test(l)});function Ql(s,l,u){if(!he.isObject(s))throw new TypeError("target must be an object");l=l||new FormData,u=he.toFlatObject(u,{metaTokens:!0,dots:!1,indexes:!1},!1,function(P,L){return!he.isUndefined(L[P])});const g=u.metaTokens,m=u.visitor||x,_=u.dots,b=u.indexes,f=(u.Blob||typeof Blob<"u"&&Blob)&&he.isSpecCompliantForm(l);if(!he.isFunction(m))throw new TypeError("visitor must be a function");function y(M){if(M===null)return"";if(he.isDate(M))return M.toISOString();if(!f&&he.isBlob(M))throw new ct("Blob is not supported. Use a Buffer instead.");return he.isArrayBuffer(M)||he.isTypedArray(M)?f&&typeof Blob=="function"?new Blob([M]):Buffer.from(M):M}function x(M,P,L){let F=M;if(M&&!L&&typeof M=="object"){if(he.endsWith(P,"{}"))P=g?P:P.slice(0,-2),M=JSON.stringify(M);else if(he.isArray(M)&&vz(M)||(he.isFileList(M)||he.endsWith(P,"[]"))&&(F=he.toArray(M)))return P=ux(P),F.forEach(function(R,V){!(he.isUndefined(R)||R===null)&&l.append(b===!0?Sv([P],V,_):b===null?P:P+"[]",y(R))}),!1}return ng(M)?!0:(l.append(Sv(L,P,_),y(M)),!1)}const v=[],w=Object.assign(yz,{defaultVisitor:x,convertValue:y,isVisitable:ng});function D(M,P){if(!he.isUndefined(M)){if(v.indexOf(M)!==-1)throw Error("Circular reference detected in "+P.join("."));v.push(M),he.forEach(M,function(F,j){(!(he.isUndefined(F)||F===null)&&m.call(l,F,he.isString(j)?j.trim():j,P,w))===!0&&D(F,P?P.concat(j):[j])}),v.pop()}}if(!he.isObject(s))throw new TypeError("data must be an object");return D(s),l}function Tv(s){const l={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g,function(g){return l[g]})}function Fg(s,l){this._pairs=[],s&&Ql(s,this,l)}const hx=Fg.prototype;hx.append=function(l,u){this._pairs.push([l,u])};hx.toString=function(l){const u=l?function(g){return l.call(this,g,Tv)}:Tv;return this._pairs.map(function(m){return u(m[0])+"="+u(m[1])},"").join("&")};function xz(s){return encodeURIComponent(s).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function gx(s,l,u){if(!l)return s;const g=u&&u.encode||xz,m=u&&u.serialize;let _;if(m?_=m(l,u):_=he.isURLSearchParams(l)?l.toString():new Fg(l,u).toString(g),_){const b=s.indexOf("#");b!==-1&&(s=s.slice(0,b)),s+=(s.indexOf("?")===-1?"?":"&")+_}return s}class Mv{constructor(){this.handlers=[]}use(l,u,g){return this.handlers.push({fulfilled:l,rejected:u,synchronous:g?g.synchronous:!1,runWhen:g?g.runWhen:null}),this.handlers.length-1}eject(l){this.handlers[l]&&(this.handlers[l]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(l){he.forEach(this.handlers,function(g){g!==null&&l(g)})}}const px={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ez=typeof URLSearchParams<"u"?URLSearchParams:Fg,Dz=typeof FormData<"u"?FormData:null,Iz=typeof Blob<"u"?Blob:null,Sz={isBrowser:!0,classes:{URLSearchParams:Ez,FormData:Dz,Blob:Iz},protocols:["http","https","file","blob","url","data"]},mx=typeof window<"u"&&typeof document<"u",Tz=(s=>mx&&["ReactNative","NativeScript","NS"].indexOf(s)<0)(typeof navigator<"u"&&navigator.product),Mz=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Bz=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:mx,hasStandardBrowserEnv:Tz,hasStandardBrowserWebWorkerEnv:Mz},Symbol.toStringTag,{value:"Module"})),wo={...Bz,...Sz};function Pz(s,l){return Ql(s,new wo.classes.URLSearchParams,Object.assign({visitor:function(u,g,m,_){return wo.isNode&&he.isBuffer(u)?(this.append(g,u.toString("base64")),!1):_.defaultVisitor.apply(this,arguments)}},l))}function Nz(s){return he.matchAll(/\w+|\[(\w*)]/g,s).map(l=>l[0]==="[]"?"":l[1]||l[0])}function Oz(s){const l={},u=Object.keys(s);let g;const m=u.length;let _;for(g=0;g<m;g++)_=u[g],l[_]=s[_];return l}function fx(s){function l(u,g,m,_){let b=u[_++];if(b==="__proto__")return!0;const C=Number.isFinite(+b),f=_>=u.length;return b=!b&&he.isArray(m)?m.length:b,f?(he.hasOwnProp(m,b)?m[b]=[m[b],g]:m[b]=g,!C):((!m[b]||!he.isObject(m[b]))&&(m[b]=[]),l(u,g,m[b],_)&&he.isArray(m[b])&&(m[b]=Oz(m[b])),!C)}if(he.isFormData(s)&&he.isFunction(s.entries)){const u={};return he.forEachEntry(s,(g,m)=>{l(Nz(g),m,u,0)}),u}return null}function Lz(s,l,u){if(he.isString(s))try{return(l||JSON.parse)(s),he.trim(s)}catch(g){if(g.name!=="SyntaxError")throw g}return(u||JSON.stringify)(s)}const Vg={transitional:px,adapter:["xhr","http"],transformRequest:[function(l,u){const g=u.getContentType()||"",m=g.indexOf("application/json")>-1,_=he.isObject(l);if(_&&he.isHTMLForm(l)&&(l=new FormData(l)),he.isFormData(l))return m?JSON.stringify(fx(l)):l;if(he.isArrayBuffer(l)||he.isBuffer(l)||he.isStream(l)||he.isFile(l)||he.isBlob(l))return l;if(he.isArrayBufferView(l))return l.buffer;if(he.isURLSearchParams(l))return u.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),l.toString();let C;if(_){if(g.indexOf("application/x-www-form-urlencoded")>-1)return Pz(l,this.formSerializer).toString();if((C=he.isFileList(l))||g.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return Ql(C?{"files[]":l}:l,f&&new f,this.formSerializer)}}return _||m?(u.setContentType("application/json",!1),Lz(l)):l}],transformResponse:[function(l){const u=this.transitional||Vg.transitional,g=u&&u.forcedJSONParsing,m=this.responseType==="json";if(l&&he.isString(l)&&(g&&!this.responseType||m)){const b=!(u&&u.silentJSONParsing)&&m;try{return JSON.parse(l)}catch(C){if(b)throw C.name==="SyntaxError"?ct.from(C,ct.ERR_BAD_RESPONSE,this,null,this.response):C}}return l}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:wo.classes.FormData,Blob:wo.classes.Blob},validateStatus:function(l){return l>=200&&l<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};he.forEach(["delete","get","head","post","put","patch"],s=>{Vg.headers[s]={}});const Ug=Vg,Rz=he.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),zz=s=>{const l={};let u,g,m;return s&&s.split(`
`).forEach(function(b){m=b.indexOf(":"),u=b.substring(0,m).trim().toLowerCase(),g=b.substring(m+1).trim(),!(!u||l[u]&&Rz[u])&&(u==="set-cookie"?l[u]?l[u].push(g):l[u]=[g]:l[u]=l[u]?l[u]+", "+g:g)}),l},Bv=Symbol("internals");function Qs(s){return s&&String(s).trim().toLowerCase()}function gl(s){return s===!1||s==null?s:he.isArray(s)?s.map(gl):String(s)}function jz(s){const l=Object.create(null),u=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let g;for(;g=u.exec(s);)l[g[1]]=g[2];return l}const Fz=s=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim());function xh(s,l,u,g,m){if(he.isFunction(g))return g.call(this,l,u);if(m&&(l=u),!!he.isString(l)){if(he.isString(g))return l.indexOf(g)!==-1;if(he.isRegExp(g))return g.test(l)}}function Vz(s){return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(l,u,g)=>u.toUpperCase()+g)}function Uz(s,l){const u=he.toCamelCase(" "+l);["get","set","has"].forEach(g=>{Object.defineProperty(s,g+u,{value:function(m,_,b){return this[g].call(this,l,m,_,b)},configurable:!0})})}class Zl{constructor(l){l&&this.set(l)}set(l,u,g){const m=this;function _(C,f,y){const x=Qs(f);if(!x)throw new Error("header name must be a non-empty string");const v=he.findKey(m,x);(!v||m[v]===void 0||y===!0||y===void 0&&m[v]!==!1)&&(m[v||f]=gl(C))}const b=(C,f)=>he.forEach(C,(y,x)=>_(y,x,f));return he.isPlainObject(l)||l instanceof this.constructor?b(l,u):he.isString(l)&&(l=l.trim())&&!Fz(l)?b(zz(l),u):l!=null&&_(u,l,g),this}get(l,u){if(l=Qs(l),l){const g=he.findKey(this,l);if(g){const m=this[g];if(!u)return m;if(u===!0)return jz(m);if(he.isFunction(u))return u.call(this,m,g);if(he.isRegExp(u))return u.exec(m);throw new TypeError("parser must be boolean|regexp|function")}}}has(l,u){if(l=Qs(l),l){const g=he.findKey(this,l);return!!(g&&this[g]!==void 0&&(!u||xh(this,this[g],g,u)))}return!1}delete(l,u){const g=this;let m=!1;function _(b){if(b=Qs(b),b){const C=he.findKey(g,b);C&&(!u||xh(g,g[C],C,u))&&(delete g[C],m=!0)}}return he.isArray(l)?l.forEach(_):_(l),m}clear(l){const u=Object.keys(this);let g=u.length,m=!1;for(;g--;){const _=u[g];(!l||xh(this,this[_],_,l,!0))&&(delete this[_],m=!0)}return m}normalize(l){const u=this,g={};return he.forEach(this,(m,_)=>{const b=he.findKey(g,_);if(b){u[b]=gl(m),delete u[_];return}const C=l?Vz(_):String(_).trim();C!==_&&delete u[_],u[C]=gl(m),g[C]=!0}),this}concat(...l){return this.constructor.concat(this,...l)}toJSON(l){const u=Object.create(null);return he.forEach(this,(g,m)=>{g!=null&&g!==!1&&(u[m]=l&&he.isArray(g)?g.join(", "):g)}),u}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([l,u])=>l+": "+u).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(l){return l instanceof this?l:new this(l)}static concat(l,...u){const g=new this(l);return u.forEach(m=>g.set(m)),g}static accessor(l){const g=(this[Bv]=this[Bv]={accessors:{}}).accessors,m=this.prototype;function _(b){const C=Qs(b);g[C]||(Uz(m,b),g[C]=!0)}return he.isArray(l)?l.forEach(_):_(l),this}}Zl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);he.reduceDescriptors(Zl.prototype,({value:s},l)=>{let u=l[0].toUpperCase()+l.slice(1);return{get:()=>s,set(g){this[u]=g}}});he.freezeMethods(Zl);const Fo=Zl;function Eh(s,l){const u=this||Ug,g=l||u,m=Fo.from(g.headers);let _=g.data;return he.forEach(s,function(C){_=C.call(u,_,m.normalize(),l?l.status:void 0)}),m.normalize(),_}function kx(s){return!!(s&&s.__CANCEL__)}function Da(s,l,u){ct.call(this,s??"canceled",ct.ERR_CANCELED,l,u),this.name="CanceledError"}he.inherits(Da,ct,{__CANCEL__:!0});function Hz(s,l,u){const g=u.config.validateStatus;!u.status||!g||g(u.status)?s(u):l(new ct("Request failed with status code "+u.status,[ct.ERR_BAD_REQUEST,ct.ERR_BAD_RESPONSE][Math.floor(u.status/100)-4],u.config,u.request,u))}const $z=wo.hasStandardBrowserEnv?{write(s,l,u,g,m,_){const b=[s+"="+encodeURIComponent(l)];he.isNumber(u)&&b.push("expires="+new Date(u).toGMTString()),he.isString(g)&&b.push("path="+g),he.isString(m)&&b.push("domain="+m),_===!0&&b.push("secure"),document.cookie=b.join("; ")},read(s){const l=document.cookie.match(new RegExp("(^|;\\s*)("+s+")=([^;]*)"));return l?decodeURIComponent(l[3]):null},remove(s){this.write(s,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Wz(s){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(s)}function qz(s,l){return l?s.replace(/\/?\/$/,"")+"/"+l.replace(/^\/+/,""):s}function bx(s,l){return s&&!Wz(l)?qz(s,l):l}const Gz=wo.hasStandardBrowserEnv?function(){const l=/(msie|trident)/i.test(navigator.userAgent),u=document.createElement("a");let g;function m(_){let b=_;return l&&(u.setAttribute("href",b),b=u.href),u.setAttribute("href",b),{href:u.href,protocol:u.protocol?u.protocol.replace(/:$/,""):"",host:u.host,search:u.search?u.search.replace(/^\?/,""):"",hash:u.hash?u.hash.replace(/^#/,""):"",hostname:u.hostname,port:u.port,pathname:u.pathname.charAt(0)==="/"?u.pathname:"/"+u.pathname}}return g=m(window.location.href),function(b){const C=he.isString(b)?m(b):b;return C.protocol===g.protocol&&C.host===g.host}}():function(){return function(){return!0}}();function Kz(s){const l=/^([-+\w]{1,25})(:?\/\/|:)/.exec(s);return l&&l[1]||""}function Yz(s,l){s=s||10;const u=new Array(s),g=new Array(s);let m=0,_=0,b;return l=l!==void 0?l:1e3,function(f){const y=Date.now(),x=g[_];b||(b=y),u[m]=f,g[m]=y;let v=_,w=0;for(;v!==m;)w+=u[v++],v=v%s;if(m=(m+1)%s,m===_&&(_=(_+1)%s),y-b<l)return;const D=x&&y-x;return D?Math.round(w*1e3/D):void 0}}function Pv(s,l){let u=0;const g=Yz(50,250);return m=>{const _=m.loaded,b=m.lengthComputable?m.total:void 0,C=_-u,f=g(C),y=_<=b;u=_;const x={loaded:_,total:b,progress:b?_/b:void 0,bytes:C,rate:f||void 0,estimated:f&&b&&y?(b-_)/f:void 0,event:m};x[l?"download":"upload"]=!0,s(x)}}const Qz=typeof XMLHttpRequest<"u",Zz=Qz&&function(s){return new Promise(function(u,g){let m=s.data;const _=Fo.from(s.headers).normalize();let{responseType:b,withXSRFToken:C}=s,f;function y(){s.cancelToken&&s.cancelToken.unsubscribe(f),s.signal&&s.signal.removeEventListener("abort",f)}let x;if(he.isFormData(m)){if(wo.hasStandardBrowserEnv||wo.hasStandardBrowserWebWorkerEnv)_.setContentType(!1);else if((x=_.getContentType())!==!1){const[P,...L]=x?x.split(";").map(F=>F.trim()).filter(Boolean):[];_.setContentType([P||"multipart/form-data",...L].join("; "))}}let v=new XMLHttpRequest;if(s.auth){const P=s.auth.username||"",L=s.auth.password?unescape(encodeURIComponent(s.auth.password)):"";_.set("Authorization","Basic "+btoa(P+":"+L))}const w=bx(s.baseURL,s.url);v.open(s.method.toUpperCase(),gx(w,s.params,s.paramsSerializer),!0),v.timeout=s.timeout;function D(){if(!v)return;const P=Fo.from("getAllResponseHeaders"in v&&v.getAllResponseHeaders()),F={data:!b||b==="text"||b==="json"?v.responseText:v.response,status:v.status,statusText:v.statusText,headers:P,config:s,request:v};Hz(function(R){u(R),y()},function(R){g(R),y()},F),v=null}if("onloadend"in v?v.onloadend=D:v.onreadystatechange=function(){!v||v.readyState!==4||v.status===0&&!(v.responseURL&&v.responseURL.indexOf("file:")===0)||setTimeout(D)},v.onabort=function(){v&&(g(new ct("Request aborted",ct.ECONNABORTED,s,v)),v=null)},v.onerror=function(){g(new ct("Network Error",ct.ERR_NETWORK,s,v)),v=null},v.ontimeout=function(){let L=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const F=s.transitional||px;s.timeoutErrorMessage&&(L=s.timeoutErrorMessage),g(new ct(L,F.clarifyTimeoutError?ct.ETIMEDOUT:ct.ECONNABORTED,s,v)),v=null},wo.hasStandardBrowserEnv&&(C&&he.isFunction(C)&&(C=C(s)),C||C!==!1&&Gz(w))){const P=s.xsrfHeaderName&&s.xsrfCookieName&&$z.read(s.xsrfCookieName);P&&_.set(s.xsrfHeaderName,P)}m===void 0&&_.setContentType(null),"setRequestHeader"in v&&he.forEach(_.toJSON(),function(L,F){v.setRequestHeader(F,L)}),he.isUndefined(s.withCredentials)||(v.withCredentials=!!s.withCredentials),b&&b!=="json"&&(v.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&v.addEventListener("progress",Pv(s.onDownloadProgress,!0)),typeof s.onUploadProgress=="function"&&v.upload&&v.upload.addEventListener("progress",Pv(s.onUploadProgress)),(s.cancelToken||s.signal)&&(f=P=>{v&&(g(!P||P.type?new Da(null,s,v):P),v.abort(),v=null)},s.cancelToken&&s.cancelToken.subscribe(f),s.signal&&(s.signal.aborted?f():s.signal.addEventListener("abort",f)));const M=Kz(w);if(M&&wo.protocols.indexOf(M)===-1){g(new ct("Unsupported protocol "+M+":",ct.ERR_BAD_REQUEST,s));return}v.send(m||null)})},og={http:Cz,xhr:Zz};he.forEach(og,(s,l)=>{if(s){try{Object.defineProperty(s,"name",{value:l})}catch{}Object.defineProperty(s,"adapterName",{value:l})}});const Nv=s=>`- ${s}`,Jz=s=>he.isFunction(s)||s===null||s===!1,_x={getAdapter:s=>{s=he.isArray(s)?s:[s];const{length:l}=s;let u,g;const m={};for(let _=0;_<l;_++){u=s[_];let b;if(g=u,!Jz(u)&&(g=og[(b=String(u)).toLowerCase()],g===void 0))throw new ct(`Unknown adapter '${b}'`);if(g)break;m[b||"#"+_]=g}if(!g){const _=Object.entries(m).map(([C,f])=>`adapter ${C} `+(f===!1?"is not supported by the environment":"is not available in the build"));let b=l?_.length>1?`since :
`+_.map(Nv).join(`
`):" "+Nv(_[0]):"as no adapter specified";throw new ct("There is no suitable adapter to dispatch the request "+b,"ERR_NOT_SUPPORT")}return g},adapters:og};function Dh(s){if(s.cancelToken&&s.cancelToken.throwIfRequested(),s.signal&&s.signal.aborted)throw new Da(null,s)}function Ov(s){return Dh(s),s.headers=Fo.from(s.headers),s.data=Eh.call(s,s.transformRequest),["post","put","patch"].indexOf(s.method)!==-1&&s.headers.setContentType("application/x-www-form-urlencoded",!1),_x.getAdapter(s.adapter||Ug.adapter)(s).then(function(g){return Dh(s),g.data=Eh.call(s,s.transformResponse,g),g.headers=Fo.from(g.headers),g},function(g){return kx(g)||(Dh(s),g&&g.response&&(g.response.data=Eh.call(s,s.transformResponse,g.response),g.response.headers=Fo.from(g.response.headers))),Promise.reject(g)})}const Lv=s=>s instanceof Fo?{...s}:s;function es(s,l){l=l||{};const u={};function g(y,x,v){return he.isPlainObject(y)&&he.isPlainObject(x)?he.merge.call({caseless:v},y,x):he.isPlainObject(x)?he.merge({},x):he.isArray(x)?x.slice():x}function m(y,x,v){if(he.isUndefined(x)){if(!he.isUndefined(y))return g(void 0,y,v)}else return g(y,x,v)}function _(y,x){if(!he.isUndefined(x))return g(void 0,x)}function b(y,x){if(he.isUndefined(x)){if(!he.isUndefined(y))return g(void 0,y)}else return g(void 0,x)}function C(y,x,v){if(v in l)return g(y,x);if(v in s)return g(void 0,y)}const f={url:_,method:_,data:_,baseURL:b,transformRequest:b,transformResponse:b,paramsSerializer:b,timeout:b,timeoutMessage:b,withCredentials:b,withXSRFToken:b,adapter:b,responseType:b,xsrfCookieName:b,xsrfHeaderName:b,onUploadProgress:b,onDownloadProgress:b,decompress:b,maxContentLength:b,maxBodyLength:b,beforeRedirect:b,transport:b,httpAgent:b,httpsAgent:b,cancelToken:b,socketPath:b,responseEncoding:b,validateStatus:C,headers:(y,x)=>m(Lv(y),Lv(x),!0)};return he.forEach(Object.keys(Object.assign({},s,l)),function(x){const v=f[x]||m,w=v(s[x],l[x],x);he.isUndefined(w)&&v!==C||(u[x]=w)}),u}const wx="1.6.8",Hg={};["object","boolean","number","function","string","symbol"].forEach((s,l)=>{Hg[s]=function(g){return typeof g===s||"a"+(l<1?"n ":" ")+s}});const Rv={};Hg.transitional=function(l,u,g){function m(_,b){return"[Axios v"+wx+"] Transitional option '"+_+"'"+b+(g?". "+g:"")}return(_,b,C)=>{if(l===!1)throw new ct(m(b," has been removed"+(u?" in "+u:"")),ct.ERR_DEPRECATED);return u&&!Rv[b]&&(Rv[b]=!0,console.warn(m(b," has been deprecated since v"+u+" and will be removed in the near future"))),l?l(_,b,C):!0}};function Xz(s,l,u){if(typeof s!="object")throw new ct("options must be an object",ct.ERR_BAD_OPTION_VALUE);const g=Object.keys(s);let m=g.length;for(;m-- >0;){const _=g[m],b=l[_];if(b){const C=s[_],f=C===void 0||b(C,_,s);if(f!==!0)throw new ct("option "+_+" must be "+f,ct.ERR_BAD_OPTION_VALUE);continue}if(u!==!0)throw new ct("Unknown option "+_,ct.ERR_BAD_OPTION)}}const ig={assertOptions:Xz,validators:Hg},oi=ig.validators;class El{constructor(l){this.defaults=l,this.interceptors={request:new Mv,response:new Mv}}async request(l,u){try{return await this._request(l,u)}catch(g){if(g instanceof Error){let m;Error.captureStackTrace?Error.captureStackTrace(m={}):m=new Error;const _=m.stack?m.stack.replace(/^.+\n/,""):"";g.stack?_&&!String(g.stack).endsWith(_.replace(/^.+\n.+\n/,""))&&(g.stack+=`
`+_):g.stack=_}throw g}}_request(l,u){typeof l=="string"?(u=u||{},u.url=l):u=l||{},u=es(this.defaults,u);const{transitional:g,paramsSerializer:m,headers:_}=u;g!==void 0&&ig.assertOptions(g,{silentJSONParsing:oi.transitional(oi.boolean),forcedJSONParsing:oi.transitional(oi.boolean),clarifyTimeoutError:oi.transitional(oi.boolean)},!1),m!=null&&(he.isFunction(m)?u.paramsSerializer={serialize:m}:ig.assertOptions(m,{encode:oi.function,serialize:oi.function},!0)),u.method=(u.method||this.defaults.method||"get").toLowerCase();let b=_&&he.merge(_.common,_[u.method]);_&&he.forEach(["delete","get","head","post","put","patch","common"],M=>{delete _[M]}),u.headers=Fo.concat(b,_);const C=[];let f=!0;this.interceptors.request.forEach(function(P){typeof P.runWhen=="function"&&P.runWhen(u)===!1||(f=f&&P.synchronous,C.unshift(P.fulfilled,P.rejected))});const y=[];this.interceptors.response.forEach(function(P){y.push(P.fulfilled,P.rejected)});let x,v=0,w;if(!f){const M=[Ov.bind(this),void 0];for(M.unshift.apply(M,C),M.push.apply(M,y),w=M.length,x=Promise.resolve(u);v<w;)x=x.then(M[v++],M[v++]);return x}w=C.length;let D=u;for(v=0;v<w;){const M=C[v++],P=C[v++];try{D=M(D)}catch(L){P.call(this,L);break}}try{x=Ov.call(this,D)}catch(M){return Promise.reject(M)}for(v=0,w=y.length;v<w;)x=x.then(y[v++],y[v++]);return x}getUri(l){l=es(this.defaults,l);const u=bx(l.baseURL,l.url);return gx(u,l.params,l.paramsSerializer)}}he.forEach(["delete","get","head","options"],function(l){El.prototype[l]=function(u,g){return this.request(es(g||{},{method:l,url:u,data:(g||{}).data}))}});he.forEach(["post","put","patch"],function(l){function u(g){return function(_,b,C){return this.request(es(C||{},{method:l,headers:g?{"Content-Type":"multipart/form-data"}:{},url:_,data:b}))}}El.prototype[l]=u(),El.prototype[l+"Form"]=u(!0)});const pl=El;class $g{constructor(l){if(typeof l!="function")throw new TypeError("executor must be a function.");let u;this.promise=new Promise(function(_){u=_});const g=this;this.promise.then(m=>{if(!g._listeners)return;let _=g._listeners.length;for(;_-- >0;)g._listeners[_](m);g._listeners=null}),this.promise.then=m=>{let _;const b=new Promise(C=>{g.subscribe(C),_=C}).then(m);return b.cancel=function(){g.unsubscribe(_)},b},l(function(_,b,C){g.reason||(g.reason=new Da(_,b,C),u(g.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(l){if(this.reason){l(this.reason);return}this._listeners?this._listeners.push(l):this._listeners=[l]}unsubscribe(l){if(!this._listeners)return;const u=this._listeners.indexOf(l);u!==-1&&this._listeners.splice(u,1)}static source(){let l;return{token:new $g(function(m){l=m}),cancel:l}}}const e6=$g;function t6(s){return function(u){return s.apply(null,u)}}function n6(s){return he.isObject(s)&&s.isAxiosError===!0}const rg={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(rg).forEach(([s,l])=>{rg[l]=s});const o6=rg;function Ax(s){const l=new pl(s),u=tx(pl.prototype.request,l);return he.extend(u,pl.prototype,l,{allOwnKeys:!0}),he.extend(u,l,null,{allOwnKeys:!0}),u.create=function(m){return Ax(es(s,m))},u}const Fe=Ax(Ug);Fe.Axios=pl;Fe.CanceledError=Da;Fe.CancelToken=e6;Fe.isCancel=kx;Fe.VERSION=wx;Fe.toFormData=Ql;Fe.AxiosError=ct;Fe.Cancel=Fe.CanceledError;Fe.all=function(l){return Promise.all(l)};Fe.spread=t6;Fe.isAxiosError=n6;Fe.mergeConfig=es;Fe.AxiosHeaders=Fo;Fe.formToJSON=s=>fx(he.isHTMLForm(s)?new FormData(s):s);Fe.getAdapter=_x.getAdapter;Fe.HttpStatusCode=o6;Fe.default=Fe;const Cx="http://127.0.0.1:8000",zv=!1,rt="",i6=s=>Fe.post("/api/login",s),r6=s=>Fe.get("/api"+rt+"/config?token="+s),s6=s=>Fe.get("/api"+rt+"/logout?token="+s),a6=(s,l)=>Fe.post("/api"+rt+"/pages?token="+l,s),c6=(s,l,u)=>Fe.put("/api"+rt+"/pages/"+l+"?token="+u,s),l6=s=>Fe.get("/api"+rt+"/pages?token="+s),d6=(s,l)=>Fe.get("/api"+rt+"/pages/type/"+s+"?token="+l),u6=(s,l)=>Fe.get("/api"+rt+"/pages/"+s+"?token="+l),h6=(s,l)=>Fe.post("/api"+rt+"/menus?token="+l,s),g6=(s,l)=>{const u=s.id;return Fe.put("/api"+rt+"/menus/"+u+"?token="+l,s)},p6=s=>Fe.get("/api"+rt+"/menus?token="+s),m6=(s,l)=>Fe.delete("/api"+rt+"/menus/"+s+"?token="+l),f6=(s,l,u)=>Fe.patch("/api"+rt+"/menus/position/"+s+"/"+l+"?token="+u),k6=(s,l,u)=>Fe.patch("/api"+rt+"/pages/position/"+s+"/"+l+"?token="+u),b6=(s,l)=>Fe.delete("/api"+rt+"/pages/"+s+"?token="+l),_6=(s,l,u,g)=>Fe.post("/api"+rt+"/image/"+l+"/"+u+"?token="+g,s),w6=(s,l,u)=>Fe.get("/api"+rt+"/images/"+s+"/"+l+"?token="+u),A6=(s,l)=>Fe.delete("/api"+rt+"/images/"+s+"?token="+l),C6=(s,l,u)=>Fe.patch("/api"+rt+"/images/position/"+s+"/"+l+"?token="+u),v6=(s,l,u,g,m)=>{let _="";m&&(_="&search="+m);const b=g||"1",C="/api"+rt+"/clients/"+s+"/"+l+"?token="+u+"&page="+b+_;return Fe.get(C)},y6=(s,l,u,g,m)=>{let _="";m&&(_="&search="+m);const b=g||"1",C="/api"+rt+"/contacts/pagination/"+s+"/"+l+"?token="+u+"&page="+b+_;return Fe.get(C)},x6=(s,l,u,g,m,_)=>{let b="";_&&(b="&search="+_);const C=m||"1",f="/api"+rt+"/products/pagination/"+s+"/"+l+"/"+u+"?token="+g+"&page="+C+b;return Fe.get(f)},E6=(s,l,u,g,m,_)=>{let b="";_&&(b="&search="+_);const C=m||"1",f="/api"+rt+"/checkouts/pagination/"+s+"/"+l+"/"+u+"?token="+g+"&page="+C+b;return Fe.get(f)},D6=(s,l,u)=>Fe.patch("/api"+rt+"/checkouts/"+l+"?token="+u,s),I6=(s,l)=>Fe.delete("/api"+rt+"/products/"+s+"?token="+l),S6=(s,l)=>Fe.delete("/api"+rt+"/clients/"+s+"?token="+l),T6=(s,l)=>Fe.delete("/api"+rt+"/contacts/"+s+"?token="+l),M6=(s,l)=>Fe.get("/api"+rt+"/clients/"+s+"?token="+l),B6=(s,l)=>Fe.post("/api"+rt+"/clients?token="+l,s),P6=(s,l)=>{const u=s.id;return Fe.put("/api"+rt+"/clients/"+u+"?token="+l,s)},N6=(s,l)=>Fe.get("/api"+rt+"/products/"+s+"?token="+l),O6=(s,l)=>Fe.post("/api"+rt+"/products?token="+l,s),L6=(s,l)=>{const u=s.id;return Fe.put("/api"+rt+"/products/"+u+"?token="+l,s)},vx=(s,l)=>Fe.post("/api"+rt+"/config/toggle-cache-enable-file?token="+l,s),R6=s=>Fe.put("/api"+rt+"/config/clearcache?token="+s),z6=s=>Fe.put("/api"+rt+"/config/createsitemap?token="+s);/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const zr=typeof document<"u";function j6(s){return s.__esModule||s[Symbol.toStringTag]==="Module"}const ft=Object.assign;function Ih(s,l){const u={};for(const g in l){const m=l[g];u[g]=uo(m)?m.map(s):s(m)}return u}const ca=()=>{},uo=Array.isArray,yx=/#/g,F6=/&/g,V6=/\//g,U6=/=/g,H6=/\?/g,xx=/\+/g,$6=/%5B/g,W6=/%5D/g,Ex=/%5E/g,q6=/%60/g,Dx=/%7B/g,G6=/%7C/g,Ix=/%7D/g,K6=/%20/g;function Wg(s){return encodeURI(""+s).replace(G6,"|").replace($6,"[").replace(W6,"]")}function Y6(s){return Wg(s).replace(Dx,"{").replace(Ix,"}").replace(Ex,"^")}function sg(s){return Wg(s).replace(xx,"%2B").replace(K6,"+").replace(yx,"%23").replace(F6,"%26").replace(q6,"`").replace(Dx,"{").replace(Ix,"}").replace(Ex,"^")}function Q6(s){return sg(s).replace(U6,"%3D")}function Z6(s){return Wg(s).replace(yx,"%23").replace(H6,"%3F")}function J6(s){return s==null?"":Z6(s).replace(V6,"%2F")}function ba(s){try{return decodeURIComponent(""+s)}catch{}return""+s}const X6=/\/$/,ej=s=>s.replace(X6,"");function Sh(s,l,u="/"){let g,m={},_="",b="";const C=l.indexOf("#");let f=l.indexOf("?");return C<f&&C>=0&&(f=-1),f>-1&&(g=l.slice(0,f),_=l.slice(f+1,C>-1?C:l.length),m=s(_)),C>-1&&(g=g||l.slice(0,C),b=l.slice(C,l.length)),g=ij(g??l,u),{fullPath:g+(_&&"?")+_+b,path:g,query:m,hash:ba(b)}}function tj(s,l){const u=l.query?s(l.query):"";return l.path+(u&&"?")+u+(l.hash||"")}function jv(s,l){return!l||!s.toLowerCase().startsWith(l.toLowerCase())?s:s.slice(l.length)||"/"}function nj(s,l,u){const g=l.matched.length-1,m=u.matched.length-1;return g>-1&&g===m&&ts(l.matched[g],u.matched[m])&&Sx(l.params,u.params)&&s(l.query)===s(u.query)&&l.hash===u.hash}function ts(s,l){return(s.aliasOf||s)===(l.aliasOf||l)}function Sx(s,l){if(Object.keys(s).length!==Object.keys(l).length)return!1;for(const u in s)if(!oj(s[u],l[u]))return!1;return!0}function oj(s,l){return uo(s)?Fv(s,l):uo(l)?Fv(l,s):s===l}function Fv(s,l){return uo(l)?s.length===l.length&&s.every((u,g)=>u===l[g]):s.length===1&&s[0]===l}function ij(s,l){if(s.startsWith("/"))return s;if(!s)return l;const u=l.split("/"),g=s.split("/"),m=g[g.length-1];(m===".."||m===".")&&g.push("");let _=u.length-1,b,C;for(b=0;b<g.length;b++)if(C=g[b],C!==".")if(C==="..")_>1&&_--;else break;return u.slice(0,_).join("/")+"/"+g.slice(b).join("/")}var _a;(function(s){s.pop="pop",s.push="push"})(_a||(_a={}));var la;(function(s){s.back="back",s.forward="forward",s.unknown=""})(la||(la={}));function rj(s){if(!s)if(zr){const l=document.querySelector("base");s=l&&l.getAttribute("href")||"/",s=s.replace(/^\w+:\/\/[^\/]+/,"")}else s="/";return s[0]!=="/"&&s[0]!=="#"&&(s="/"+s),ej(s)}const sj=/^[^#]+#/;function aj(s,l){return s.replace(sj,"#")+l}function cj(s,l){const u=document.documentElement.getBoundingClientRect(),g=s.getBoundingClientRect();return{behavior:l.behavior,left:g.left-u.left-(l.left||0),top:g.top-u.top-(l.top||0)}}const Jl=()=>({left:window.scrollX,top:window.scrollY});function lj(s){let l;if("el"in s){const u=s.el,g=typeof u=="string"&&u.startsWith("#"),m=typeof u=="string"?g?document.getElementById(u.slice(1)):document.querySelector(u):u;if(!m)return;l=cj(m,s)}else l=s;"scrollBehavior"in document.documentElement.style?window.scrollTo(l):window.scrollTo(l.left!=null?l.left:window.scrollX,l.top!=null?l.top:window.scrollY)}function Vv(s,l){return(history.state?history.state.position-l:-1)+s}const ag=new Map;function dj(s,l){ag.set(s,l)}function uj(s){const l=ag.get(s);return ag.delete(s),l}let hj=()=>location.protocol+"//"+location.host;function Tx(s,l){const{pathname:u,search:g,hash:m}=l,_=s.indexOf("#");if(_>-1){let C=m.includes(s.slice(_))?s.slice(_).length:1,f=m.slice(C);return f[0]!=="/"&&(f="/"+f),jv(f,"")}return jv(u,s)+g+m}function gj(s,l,u,g){let m=[],_=[],b=null;const C=({state:w})=>{const D=Tx(s,location),M=u.value,P=l.value;let L=0;if(w){if(u.value=D,l.value=w,b&&b===M){b=null;return}L=P?w.position-P.position:0}else g(D);m.forEach(F=>{F(u.value,M,{delta:L,type:_a.pop,direction:L?L>0?la.forward:la.back:la.unknown})})};function f(){b=u.value}function y(w){m.push(w);const D=()=>{const M=m.indexOf(w);M>-1&&m.splice(M,1)};return _.push(D),D}function x(){const{history:w}=window;w.state&&w.replaceState(ft({},w.state,{scroll:Jl()}),"")}function v(){for(const w of _)w();_=[],window.removeEventListener("popstate",C),window.removeEventListener("beforeunload",x)}return window.addEventListener("popstate",C),window.addEventListener("beforeunload",x,{passive:!0}),{pauseListeners:f,listen:y,destroy:v}}function Uv(s,l,u,g=!1,m=!1){return{back:s,current:l,forward:u,replaced:g,position:window.history.length,scroll:m?Jl():null}}function pj(s){const{history:l,location:u}=window,g={value:Tx(s,u)},m={value:l.state};m.value||_(g.value,{back:null,current:g.value,forward:null,position:l.length-1,replaced:!0,scroll:null},!0);function _(f,y,x){const v=s.indexOf("#"),w=v>-1?(u.host&&document.querySelector("base")?s:s.slice(v))+f:hj()+s+f;try{l[x?"replaceState":"pushState"](y,"",w),m.value=y}catch(D){console.error(D),u[x?"replace":"assign"](w)}}function b(f,y){const x=ft({},l.state,Uv(m.value.back,f,m.value.forward,!0),y,{position:m.value.position});_(f,x,!0),g.value=f}function C(f,y){const x=ft({},m.value,l.state,{forward:f,scroll:Jl()});_(x.current,x,!0);const v=ft({},Uv(g.value,f,null),{position:x.position+1},y);_(f,v,!1),g.value=f}return{location:g,state:m,push:C,replace:b}}function mj(s){s=rj(s);const l=pj(s),u=gj(s,l.state,l.location,l.replace);function g(_,b=!0){b||u.pauseListeners(),history.go(_)}const m=ft({location:"",base:s,go:g,createHref:aj.bind(null,s)},l,u);return Object.defineProperty(m,"location",{enumerable:!0,get:()=>l.location.value}),Object.defineProperty(m,"state",{enumerable:!0,get:()=>l.state.value}),m}function fj(s){return typeof s=="string"||s&&typeof s=="object"}function Mx(s){return typeof s=="string"||typeof s=="symbol"}const ii={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Bx=Symbol("");var Hv;(function(s){s[s.aborted=4]="aborted",s[s.cancelled=8]="cancelled",s[s.duplicated=16]="duplicated"})(Hv||(Hv={}));function ns(s,l){return ft(new Error,{type:s,[Bx]:!0},l)}function No(s,l){return s instanceof Error&&Bx in s&&(l==null||!!(s.type&l))}const $v="[^/]+?",kj={sensitive:!1,strict:!1,start:!0,end:!0},bj=/[.+*?^${}()[\]/\\]/g;function _j(s,l){const u=ft({},kj,l),g=[];let m=u.start?"^":"";const _=[];for(const y of s){const x=y.length?[]:[90];u.strict&&!y.length&&(m+="/");for(let v=0;v<y.length;v++){const w=y[v];let D=40+(u.sensitive?.25:0);if(w.type===0)v||(m+="/"),m+=w.value.replace(bj,"\\$&"),D+=40;else if(w.type===1){const{value:M,repeatable:P,optional:L,regexp:F}=w;_.push({name:M,repeatable:P,optional:L});const j=F||$v;if(j!==$v){D+=10;try{new RegExp(`(${j})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${M}" (${j}): `+V.message)}}let R=P?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;v||(R=L&&y.length<2?`(?:/${R})`:"/"+R),L&&(R+="?"),m+=R,D+=20,L&&(D+=-8),P&&(D+=-20),j===".*"&&(D+=-50)}x.push(D)}g.push(x)}if(u.strict&&u.end){const y=g.length-1;g[y][g[y].length-1]+=.7000000000000001}u.strict||(m+="/?"),u.end?m+="$":u.strict&&(m+="(?:/|$)");const b=new RegExp(m,u.sensitive?"":"i");function C(y){const x=y.match(b),v={};if(!x)return null;for(let w=1;w<x.length;w++){const D=x[w]||"",M=_[w-1];v[M.name]=D&&M.repeatable?D.split("/"):D}return v}function f(y){let x="",v=!1;for(const w of s){(!v||!x.endsWith("/"))&&(x+="/"),v=!1;for(const D of w)if(D.type===0)x+=D.value;else if(D.type===1){const{value:M,repeatable:P,optional:L}=D,F=M in y?y[M]:"";if(uo(F)&&!P)throw new Error(`Provided param "${M}" is an array but it is not repeatable (* or + modifiers)`);const j=uo(F)?F.join("/"):F;if(!j)if(L)w.length<2&&(x.endsWith("/")?x=x.slice(0,-1):v=!0);else throw new Error(`Missing required param "${M}"`);x+=j}}return x||"/"}return{re:b,score:g,keys:_,parse:C,stringify:f}}function wj(s,l){let u=0;for(;u<s.length&&u<l.length;){const g=l[u]-s[u];if(g)return g;u++}return s.length<l.length?s.length===1&&s[0]===80?-1:1:s.length>l.length?l.length===1&&l[0]===80?1:-1:0}function Aj(s,l){let u=0;const g=s.score,m=l.score;for(;u<g.length&&u<m.length;){const _=wj(g[u],m[u]);if(_)return _;u++}if(Math.abs(m.length-g.length)===1){if(Wv(g))return 1;if(Wv(m))return-1}return m.length-g.length}function Wv(s){const l=s[s.length-1];return s.length>0&&l[l.length-1]<0}const Cj={type:0,value:""},vj=/[a-zA-Z0-9_]/;function yj(s){if(!s)return[[]];if(s==="/")return[[Cj]];if(!s.startsWith("/"))throw new Error(`Invalid path "${s}"`);function l(D){throw new Error(`ERR (${u})/"${y}": ${D}`)}let u=0,g=u;const m=[];let _;function b(){_&&m.push(_),_=[]}let C=0,f,y="",x="";function v(){y&&(u===0?_.push({type:0,value:y}):u===1||u===2||u===3?(_.length>1&&(f==="*"||f==="+")&&l(`A repeatable param (${y}) must be alone in its segment. eg: '/:ids+.`),_.push({type:1,value:y,regexp:x,repeatable:f==="*"||f==="+",optional:f==="*"||f==="?"})):l("Invalid state to consume buffer"),y="")}function w(){y+=f}for(;C<s.length;){if(f=s[C++],f==="\\"&&u!==2){g=u,u=4;continue}switch(u){case 0:f==="/"?(y&&v(),b()):f===":"?(v(),u=1):w();break;case 4:w(),u=g;break;case 1:f==="("?u=2:vj.test(f)?w():(v(),u=0,f!=="*"&&f!=="?"&&f!=="+"&&C--);break;case 2:f===")"?x[x.length-1]=="\\"?x=x.slice(0,-1)+f:u=3:x+=f;break;case 3:v(),u=0,f!=="*"&&f!=="?"&&f!=="+"&&C--,x="";break;default:l("Unknown state");break}}return u===2&&l(`Unfinished custom RegExp for param "${y}"`),v(),b(),m}function xj(s,l,u){const g=_j(yj(s.path),u),m=ft(g,{record:s,parent:l,children:[],alias:[]});return l&&!m.record.aliasOf==!l.record.aliasOf&&l.children.push(m),m}function Ej(s,l){const u=[],g=new Map;l=Kv({strict:!1,end:!0,sensitive:!1},l);function m(x){return g.get(x)}function _(x,v,w){const D=!w,M=Dj(x);M.aliasOf=w&&w.record;const P=Kv(l,x),L=[M];if("alias"in x){const R=typeof x.alias=="string"?[x.alias]:x.alias;for(const V of R)L.push(ft({},M,{components:w?w.record.components:M.components,path:V,aliasOf:w?w.record:M}))}let F,j;for(const R of L){const{path:V}=R;if(v&&V[0]!=="/"){const $=v.record.path,K=$[$.length-1]==="/"?"":"/";R.path=v.record.path+(V&&K+V)}if(F=xj(R,v,P),w?w.alias.push(F):(j=j||F,j!==F&&j.alias.push(F),D&&x.name&&!Gv(F)&&b(x.name)),M.children){const $=M.children;for(let K=0;K<$.length;K++)_($[K],F,w&&w.children[K])}w=w||F,(F.record.components&&Object.keys(F.record.components).length||F.record.name||F.record.redirect)&&f(F)}return j?()=>{b(j)}:ca}function b(x){if(Mx(x)){const v=g.get(x);v&&(g.delete(x),u.splice(u.indexOf(v),1),v.children.forEach(b),v.alias.forEach(b))}else{const v=u.indexOf(x);v>-1&&(u.splice(v,1),x.record.name&&g.delete(x.record.name),x.children.forEach(b),x.alias.forEach(b))}}function C(){return u}function f(x){let v=0;for(;v<u.length&&Aj(x,u[v])>=0&&(x.record.path!==u[v].record.path||!Px(x,u[v]));)v++;u.splice(v,0,x),x.record.name&&!Gv(x)&&g.set(x.record.name,x)}function y(x,v){let w,D={},M,P;if("name"in x&&x.name){if(w=g.get(x.name),!w)throw ns(1,{location:x});P=w.record.name,D=ft(qv(v.params,w.keys.filter(j=>!j.optional).concat(w.parent?w.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),x.params&&qv(x.params,w.keys.map(j=>j.name))),M=w.stringify(D)}else if(x.path!=null)M=x.path,w=u.find(j=>j.re.test(M)),w&&(D=w.parse(M),P=w.record.name);else{if(w=v.name?g.get(v.name):u.find(j=>j.re.test(v.path)),!w)throw ns(1,{location:x,currentLocation:v});P=w.record.name,D=ft({},v.params,x.params),M=w.stringify(D)}const L=[];let F=w;for(;F;)L.unshift(F.record),F=F.parent;return{name:P,path:M,params:D,matched:L,meta:Sj(L)}}return s.forEach(x=>_(x)),{addRoute:_,resolve:y,removeRoute:b,getRoutes:C,getRecordMatcher:m}}function qv(s,l){const u={};for(const g of l)g in s&&(u[g]=s[g]);return u}function Dj(s){return{path:s.path,redirect:s.redirect,name:s.name,meta:s.meta||{},aliasOf:void 0,beforeEnter:s.beforeEnter,props:Ij(s),children:s.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in s?s.components||null:s.component&&{default:s.component}}}function Ij(s){const l={},u=s.props||!1;if("component"in s)l.default=u;else for(const g in s.components)l[g]=typeof u=="object"?u[g]:u;return l}function Gv(s){for(;s;){if(s.record.aliasOf)return!0;s=s.parent}return!1}function Sj(s){return s.reduce((l,u)=>ft(l,u.meta),{})}function Kv(s,l){const u={};for(const g in s)u[g]=g in l?l[g]:s[g];return u}function Px(s,l){return l.children.some(u=>u===s||Px(s,u))}function Tj(s){const l={};if(s===""||s==="?")return l;const g=(s[0]==="?"?s.slice(1):s).split("&");for(let m=0;m<g.length;++m){const _=g[m].replace(xx," "),b=_.indexOf("="),C=ba(b<0?_:_.slice(0,b)),f=b<0?null:ba(_.slice(b+1));if(C in l){let y=l[C];uo(y)||(y=l[C]=[y]),y.push(f)}else l[C]=f}return l}function Yv(s){let l="";for(let u in s){const g=s[u];if(u=Q6(u),g==null){g!==void 0&&(l+=(l.length?"&":"")+u);continue}(uo(g)?g.map(_=>_&&sg(_)):[g&&sg(g)]).forEach(_=>{_!==void 0&&(l+=(l.length?"&":"")+u,_!=null&&(l+="="+_))})}return l}function Mj(s){const l={};for(const u in s){const g=s[u];g!==void 0&&(l[u]=uo(g)?g.map(m=>m==null?null:""+m):g==null?g:""+g)}return l}const Bj=Symbol(""),Qv=Symbol(""),Xl=Symbol(""),Nx=Symbol(""),cg=Symbol("");function Zs(){let s=[];function l(g){return s.push(g),()=>{const m=s.indexOf(g);m>-1&&s.splice(m,1)}}function u(){s=[]}return{add:l,list:()=>s.slice(),reset:u}}function hi(s,l,u,g,m,_=b=>b()){const b=g&&(g.enterCallbacks[m]=g.enterCallbacks[m]||[]);return()=>new Promise((C,f)=>{const y=w=>{w===!1?f(ns(4,{from:u,to:l})):w instanceof Error?f(w):fj(w)?f(ns(2,{from:l,to:w})):(b&&g.enterCallbacks[m]===b&&typeof w=="function"&&b.push(w),C())},x=_(()=>s.call(g&&g.instances[m],l,u,y));let v=Promise.resolve(x);s.length<3&&(v=v.then(y)),v.catch(w=>f(w))})}function Th(s,l,u,g,m=_=>_()){const _=[];for(const b of s)for(const C in b.components){let f=b.components[C];if(!(l!=="beforeRouteEnter"&&!b.instances[C]))if(Pj(f)){const x=(f.__vccOpts||f)[l];x&&_.push(hi(x,u,g,b,C,m))}else{let y=f();_.push(()=>y.then(x=>{if(!x)return Promise.reject(new Error(`Couldn't resolve component "${C}" at "${b.path}"`));const v=j6(x)?x.default:x;b.components[C]=v;const D=(v.__vccOpts||v)[l];return D&&hi(D,u,g,b,C,m)()}))}}return _}function Pj(s){return typeof s=="object"||"displayName"in s||"props"in s||"__vccOpts"in s}function Zv(s){const l=Kn(Xl),u=Kn(Nx),g=gn(()=>{const f=Xe(s.to);return l.resolve(f)}),m=gn(()=>{const{matched:f}=g.value,{length:y}=f,x=f[y-1],v=u.matched;if(!x||!v.length)return-1;const w=v.findIndex(ts.bind(null,x));if(w>-1)return w;const D=Jv(f[y-2]);return y>1&&Jv(x)===D&&v[v.length-1].path!==D?v.findIndex(ts.bind(null,f[y-2])):w}),_=gn(()=>m.value>-1&&Rj(u.params,g.value.params)),b=gn(()=>m.value>-1&&m.value===u.matched.length-1&&Sx(u.params,g.value.params));function C(f={}){return Lj(f)?l[Xe(s.replace)?"replace":"push"](Xe(s.to)).catch(ca):Promise.resolve()}return{route:g,href:gn(()=>g.value.href),isActive:_,isExactActive:b,navigate:C}}const Nj=va({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Zv,setup(s,{slots:l}){const u=co(Zv(s)),{options:g}=Kn(Xl),m=gn(()=>({[Xv(s.activeClass,g.linkActiveClass,"router-link-active")]:u.isActive,[Xv(s.exactActiveClass,g.linkExactActiveClass,"router-link-exact-active")]:u.isExactActive}));return()=>{const _=l.default&&l.default(u);return s.custom?_:$l("a",{"aria-current":u.isExactActive?s.ariaCurrentValue:null,href:u.href,onClick:u.navigate,class:m.value},_)}}}),Oj=Nj;function Lj(s){if(!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)&&!s.defaultPrevented&&!(s.button!==void 0&&s.button!==0)){if(s.currentTarget&&s.currentTarget.getAttribute){const l=s.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(l))return}return s.preventDefault&&s.preventDefault(),!0}}function Rj(s,l){for(const u in l){const g=l[u],m=s[u];if(typeof g=="string"){if(g!==m)return!1}else if(!uo(m)||m.length!==g.length||g.some((_,b)=>_!==m[b]))return!1}return!0}function Jv(s){return s?s.aliasOf?s.aliasOf.path:s.path:""}const Xv=(s,l,u)=>s??l??u,zj=va({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(s,{attrs:l,slots:u}){const g=Kn(cg),m=gn(()=>s.route||g.value),_=Kn(Qv,0),b=gn(()=>{let y=Xe(_);const{matched:x}=m.value;let v;for(;(v=x[y])&&!v.components;)y++;return y}),C=gn(()=>m.value.matched[b.value]);oa(Qv,gn(()=>b.value+1)),oa(Bj,C),oa(cg,m);const f=me();return Rt(()=>[f.value,C.value,s.name],([y,x,v],[w,D,M])=>{x&&(x.instances[v]=y,D&&D!==x&&y&&y===w&&(x.leaveGuards.size||(x.leaveGuards=D.leaveGuards),x.updateGuards.size||(x.updateGuards=D.updateGuards))),y&&x&&(!D||!ts(x,D)||!w)&&(x.enterCallbacks[v]||[]).forEach(P=>P(y))},{flush:"post"}),()=>{const y=m.value,x=s.name,v=C.value,w=v&&v.components[x];if(!w)return e1(u.default,{Component:w,route:y});const D=v.props[x],M=D?D===!0?y.params:typeof D=="function"?D(y):D:null,L=$l(w,ft({},M,l,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(v.instances[x]=null)},ref:f}));return e1(u.default,{Component:L,route:y})||L}}});function e1(s,l){if(!s)return null;const u=s(l);return u.length===1?u[0]:u}const jj=zj;function Fj(s){const l=Ej(s.routes,s),u=s.parseQuery||Tj,g=s.stringifyQuery||Yv,m=s.history,_=Zs(),b=Zs(),C=Zs(),f=y1(ii);let y=ii;zr&&s.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const x=Ih.bind(null,ie=>""+ie),v=Ih.bind(null,J6),w=Ih.bind(null,ba);function D(ie,ke){let ye,xe;return Mx(ie)?(ye=l.getRecordMatcher(ie),xe=ke):xe=ie,l.addRoute(xe,ye)}function M(ie){const ke=l.getRecordMatcher(ie);ke&&l.removeRoute(ke)}function P(){return l.getRoutes().map(ie=>ie.record)}function L(ie){return!!l.getRecordMatcher(ie)}function F(ie,ke){if(ke=ft({},ke||f.value),typeof ie=="string"){const U=Sh(u,ie,ke.path),Y=l.resolve({path:U.path},ke),ce=m.createHref(U.fullPath);return ft(U,Y,{params:w(Y.params),hash:ba(U.hash),redirectedFrom:void 0,href:ce})}let ye;if(ie.path!=null)ye=ft({},ie,{path:Sh(u,ie.path,ke.path).path});else{const U=ft({},ie.params);for(const Y in U)U[Y]==null&&delete U[Y];ye=ft({},ie,{params:v(U)}),ke.params=v(ke.params)}const xe=l.resolve(ye,ke),Ve=ie.hash||"";xe.params=x(w(xe.params));const Ye=tj(g,ft({},ie,{hash:Y6(Ve),path:xe.path})),z=m.createHref(Ye);return ft({fullPath:Ye,hash:Ve,query:g===Yv?Mj(ie.query):ie.query||{}},xe,{redirectedFrom:void 0,href:z})}function j(ie){return typeof ie=="string"?Sh(u,ie,f.value.path):ft({},ie)}function R(ie,ke){if(y!==ie)return ns(8,{from:ke,to:ie})}function V(ie){return G(ie)}function $(ie){return V(ft(j(ie),{replace:!0}))}function K(ie){const ke=ie.matched[ie.matched.length-1];if(ke&&ke.redirect){const{redirect:ye}=ke;let xe=typeof ye=="function"?ye(ie):ye;return typeof xe=="string"&&(xe=xe.includes("?")||xe.includes("#")?xe=j(xe):{path:xe},xe.params={}),ft({query:ie.query,hash:ie.hash,params:xe.path!=null?{}:ie.params},xe)}}function G(ie,ke){const ye=y=F(ie),xe=f.value,Ve=ie.state,Ye=ie.force,z=ie.replace===!0,U=K(ye);if(U)return G(ft(j(U),{state:typeof U=="object"?ft({},Ve,U.state):Ve,force:Ye,replace:z}),ke||ye);const Y=ye;Y.redirectedFrom=ke;let ce;return!Ye&&nj(g,xe,ye)&&(ce=ns(16,{to:Y,from:xe}),Gt(xe,xe,!0,!1)),(ce?Promise.resolve(ce):W(Y,xe)).catch(se=>No(se)?No(se,2)?se:ze(se):ve(se,Y,xe)).then(se=>{if(se){if(No(se,2))return G(ft({replace:z},j(se.to),{state:typeof se.to=="object"?ft({},Ve,se.to.state):Ve,force:Ye}),ke||Y)}else se=J(Y,xe,!0,z,Ve);return de(Y,xe,se),se})}function H(ie,ke){const ye=R(ie,ke);return ye?Promise.reject(ye):Promise.resolve()}function T(ie){const ke=Ge.values().next().value;return ke&&typeof ke.runWithContext=="function"?ke.runWithContext(ie):ie()}function W(ie,ke){let ye;const[xe,Ve,Ye]=Vj(ie,ke);ye=Th(xe.reverse(),"beforeRouteLeave",ie,ke);for(const U of xe)U.leaveGuards.forEach(Y=>{ye.push(hi(Y,ie,ke))});const z=H.bind(null,ie,ke);return ye.push(z),lt(ye).then(()=>{ye=[];for(const U of _.list())ye.push(hi(U,ie,ke));return ye.push(z),lt(ye)}).then(()=>{ye=Th(Ve,"beforeRouteUpdate",ie,ke);for(const U of Ve)U.updateGuards.forEach(Y=>{ye.push(hi(Y,ie,ke))});return ye.push(z),lt(ye)}).then(()=>{ye=[];for(const U of Ye)if(U.beforeEnter)if(uo(U.beforeEnter))for(const Y of U.beforeEnter)ye.push(hi(Y,ie,ke));else ye.push(hi(U.beforeEnter,ie,ke));return ye.push(z),lt(ye)}).then(()=>(ie.matched.forEach(U=>U.enterCallbacks={}),ye=Th(Ye,"beforeRouteEnter",ie,ke,T),ye.push(z),lt(ye))).then(()=>{ye=[];for(const U of b.list())ye.push(hi(U,ie,ke));return ye.push(z),lt(ye)}).catch(U=>No(U,8)?U:Promise.reject(U))}function de(ie,ke,ye){C.list().forEach(xe=>T(()=>xe(ie,ke,ye)))}function J(ie,ke,ye,xe,Ve){const Ye=R(ie,ke);if(Ye)return Ye;const z=ke===ii,U=zr?history.state:{};ye&&(xe||z?m.replace(ie.fullPath,ft({scroll:z&&U&&U.scroll},Ve)):m.push(ie.fullPath,Ve)),f.value=ie,Gt(ie,ke,ye,z),ze()}let ge;function Te(){ge||(ge=m.listen((ie,ke,ye)=>{if(!bt.listening)return;const xe=F(ie),Ve=K(xe);if(Ve){G(ft(Ve,{replace:!0}),xe).catch(ca);return}y=xe;const Ye=f.value;zr&&dj(Vv(Ye.fullPath,ye.delta),Jl()),W(xe,Ye).catch(z=>No(z,12)?z:No(z,2)?(G(z.to,xe).then(U=>{No(U,20)&&!ye.delta&&ye.type===_a.pop&&m.go(-1,!1)}).catch(ca),Promise.reject()):(ye.delta&&m.go(-ye.delta,!1),ve(z,xe,Ye))).then(z=>{z=z||J(xe,Ye,!1),z&&(ye.delta&&!No(z,8)?m.go(-ye.delta,!1):ye.type===_a.pop&&No(z,20)&&m.go(-1,!1)),de(xe,Ye,z)}).catch(ca)}))}let be=Zs(),Q=Zs(),te;function ve(ie,ke,ye){ze(ie);const xe=Q.list();return xe.length?xe.forEach(Ve=>Ve(ie,ke,ye)):console.error(ie),Promise.reject(ie)}function vt(){return te&&f.value!==ii?Promise.resolve():new Promise((ie,ke)=>{be.add([ie,ke])})}function ze(ie){return te||(te=!ie,Te(),be.list().forEach(([ke,ye])=>ie?ye(ie):ke()),be.reset()),ie}function Gt(ie,ke,ye,xe){const{scrollBehavior:Ve}=s;if(!zr||!Ve)return Promise.resolve();const Ye=!ye&&uj(Vv(ie.fullPath,0))||(xe||!ye)&&history.state&&history.state.scroll||null;return is().then(()=>Ve(ie,ke,Ye)).then(z=>z&&lj(z)).catch(z=>ve(z,ie,ke))}const Pt=ie=>m.go(ie);let Ce;const Ge=new Set,bt={currentRoute:f,listening:!0,addRoute:D,removeRoute:M,hasRoute:L,getRoutes:P,resolve:F,options:s,push:V,replace:$,go:Pt,back:()=>Pt(-1),forward:()=>Pt(1),beforeEach:_.add,beforeResolve:b.add,afterEach:C.add,onError:Q.add,isReady:vt,install(ie){const ke=this;ie.component("RouterLink",Oj),ie.component("RouterView",jj),ie.config.globalProperties.$router=ke,Object.defineProperty(ie.config.globalProperties,"$route",{enumerable:!0,get:()=>Xe(f)}),zr&&!Ce&&f.value===ii&&(Ce=!0,V(m.location).catch(Ve=>{}));const ye={};for(const Ve in ii)Object.defineProperty(ye,Ve,{get:()=>f.value[Ve],enumerable:!0});ie.provide(Xl,ke),ie.provide(Nx,_g(ye)),ie.provide(cg,f);const xe=ie.unmount;Ge.add(ie),ie.unmount=function(){Ge.delete(ie),Ge.size<1&&(y=ii,ge&&ge(),ge=null,f.value=ii,Ce=!1,te=!1),xe()}}};function lt(ie){return ie.reduce((ke,ye)=>ke.then(()=>T(ye)),Promise.resolve())}return bt}function Vj(s,l){const u=[],g=[],m=[],_=Math.max(l.matched.length,s.matched.length);for(let b=0;b<_;b++){const C=l.matched[b];C&&(s.matched.find(y=>ts(y,C))?g.push(C):u.push(C));const f=s.matched[b];f&&(l.matched.find(y=>ts(y,f))||m.push(f))}return[u,g,m]}function $o(){return Kn(Xl)}const Zn=A7("auth",()=>{let s={token:0},l={page_types:[],langs:[],cache_enable:0,is_cache_enable:0,default_lang:"",demo_status:0,is_shop:1},u={visible:!1};const g=localStorage.getItem("auth");if(g!==null)try{s=JSON.parse(g)}catch{}const m=localStorage.getItem("config");if(m!==null)try{l=JSON.parse(m)}catch{}const _=co(s),b=co(l),C=co(u);function f(M){_.token=M.token}function y(M){C.visible=M}function x(M){b.is_cache_enable=M}function v(M){b.page_types=M.page_types,b.langs=M.langs,b.default_lang=M.default_lang,b.cache_enable=M.cache_enable,b.is_cache_enable=M.is_cache_enable,b.demo_status=M.demo_status,b.is_shop=M.is_shop}function w(M){b.default_lang=M}function D(){_.token=0,b.page_types=[],b.langs=[],b.cache_enable=0,b.is_cache_enable=0,b.default_lang="",b.demo_status=0,b.is_shop=1}return Rt(_,()=>{localStorage.setItem("auth",JSON.stringify(_))}),Rt(b,()=>{localStorage.setItem("config",JSON.stringify(b))}),{auth:_,modal:C,config:b,setIsCacheEnable:x,setDefaultLang:w,setAuth:f,setConfig:v,setModal:y,logout:D}}),Uj={key:0,class:"shadow-sm bg-light mb-3"},Hj={class:"navbar navbar-expand navbar-light container"},$j={class:"container-fluid p-0 row"},Wj={class:"navbar-nav ms-auto col-10"},qj={class:"navbar-nav justify-content-end col-2"},Gj=N("p",{class:"text-danger"},"cache enable",-1),Kj=[Gj],Yj=N("p",{class:"text-primary"},"cache disable",-1),Qj=[Yj],Zj={__name:"NavBar",setup(s){const{auth:l,config:u,setIsCacheEnable:g,logout:m}=Zn(),_=$o(),b=me(!1),C=async()=>{b.value=!0;try{(await s6(l.token)).data.success||console.log("sth wrong with logout in server site"),m(),_.push("/")}catch(y){m(),_.push("/"),console.log("_is_error_logout__",y)}finally{b.value=!1}},f=async()=>{if(u.demo_status){const y=Vt.ttt("is_demo_true");return alert(y),!1}b.value=!0;try{const y=await vx(It.getPostToggleCacheEnableFile(),l.token);if(y.data.success)return g(y.data.data.value),b.value=!1,!0;console.log("error changeCacheEnableInNav",y.data)}catch(y){console.log("error changeCacheEnableInNav",y)}return!1};return(y,x)=>{const v=Ig("router-link");return Xe(l).token?(re(),le("div",Uj,[N("nav",Hj,[N("div",$j,[N("ul",Wj,[Pe(v,{class:Le(["nav-link",{"text-primary":y.$route.path.startsWith("/pages")}]),to:"/pages"},{default:Lo(()=>[nt("Pages")]),_:1},8,["class"]),Pe(v,{class:Le(["nav-link",{"text-primary":y.$route.path.startsWith("/user")}]),to:"/users"},{default:Lo(()=>[nt("Users")]),_:1},8,["class"]),Xe(u).is_shop?(re(),Zr(v,{key:0,class:Le(["nav-link",{"text-primary":y.$route.path.startsWith("/product")}]),to:"/products"},{default:Lo(()=>[nt("Products")]),_:1},8,["class"])):$e("",!0),Xe(u).is_shop?(re(),Zr(v,{key:1,class:Le(["nav-link",{"text-primary":y.$route.path.startsWith("/checkout")}]),to:"/checkouts"},{default:Lo(()=>[nt("Checkouts")]),_:1},8,["class"])):$e("",!0),Pe(v,{class:Le(["nav-link",{"text-primary":y.$route.path.startsWith("/contact")}]),to:"/contacts"},{default:Lo(()=>[nt("Contacts")]),_:1},8,["class"]),Pe(v,{class:Le(["nav-link",{"text-primary":y.$route.path.startsWith("/setting")}]),to:"/settings"},{default:Lo(()=>[nt("Settings")]),_:1},8,["class"])]),N("ul",qj,[Xe(u).cache_enable&&Xe(u).is_cache_enable?(re(),le("li",{key:0,class:"nav-link",onClick:f},Kj)):$e("",!0),Xe(u).cache_enable&&!Xe(u).is_cache_enable?(re(),le("li",{key:1,role:"toggle_cache_enable_in_nav_bar",class:"nav-link",onClick:f},Qj)):$e("",!0),N("li",{role:"link_sign_out",onClick:C,class:"nav-link",style:{cursor:"pointer"}}," Sign Out ")])])])])):$e("",!0)}}},Jj={class:"container"},Xj={__name:"App",setup(s){const{modal:l}=Zn();return(u,g)=>{const m=Ig("router-view");return re(),le(Je,null,[Xe(l).visible?(re(),Zr(I7,{key:0})):$e("",!0),Pe(Zj),N("div",Jj,[Pe(m)])],64)}}},e8=s=>{let l=[];for(let u of s)!u.menu_id&&u.type!=="inner"&&l.push(u);return l},t8=s=>{let l=[];for(let u of s)u.type==="inner"&&l.push(u);return l},n8=s=>{let l=[];for(let u of s)u.menu_id&&!u.page_id&&(typeof l[u.menu_id]>"u"&&(l[u.menu_id]=[]),l[u.menu_id].push(u));return l},o8=s=>{let l=[];for(let u of s)u.page_id&&(typeof l[u.page_id]>"u"&&(l[u.page_id]=[]),l[u.page_id].push(u));return l},i8=(s,l)=>{let u="";return s.length>1&&(u=" for lang = "+l),u},r8=(s,l,u)=>{if(!s)return[];s=parseInt(s);const g=l?parseInt(l):!1;let m=[];for(let b of u)b.menu_id===s&&b.page_id&&m.push(b.page_id);let _=[];if(m.includes(g))return _;for(let b of u)b.menu_id===s&&!b.page_id&&g&&b.id!==g&&_.push(b),b.menu_id===s&&!b.page_id&&!g&&_.push(b);return _},ri={getNotRelatedPages:e8,getInnerPages:t8,getPagesBelongsToMenus:n8,getPagesBelongsToPages:o8,getInfoMsgPrefixByLang:i8,getRootPages:r8};function tn(s,l,u,g){l?(u.value=Vt.ttt("is_demo_true"),g.value=!1):(u.value=Vt.ttt("internal_problem"),console.log("_is_error__",s))}var gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ox(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function s8(s){if(s.__esModule)return s;var l=s.default;if(typeof l=="function"){var u=function g(){return this instanceof g?Reflect.construct(l,arguments,this.constructor):l.apply(this,arguments)};u.prototype=l.prototype}else u={};return Object.defineProperty(u,"__esModule",{value:!0}),Object.keys(s).forEach(function(g){var m=Object.getOwnPropertyDescriptor(s,g);Object.defineProperty(u,g,m.get?m:{enumerable:!0,get:function(){return s[g]}})}),u}var Lx={exports:{}};const a8=s8(g7);/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(s,l){(function(u,g){s.exports=g(a8)})(self,u=>(()=>{var g={976:C=>{C.exports=u}},m={};function _(C){var f=m[C];if(f!==void 0)return f.exports;var y=m[C]={exports:{}};return g[C](y,y.exports,_),y.exports}_.d=(C,f)=>{for(var y in f)_.o(f,y)&&!_.o(C,y)&&Object.defineProperty(C,y,{enumerable:!0,get:f[y]})},_.o=(C,f)=>Object.prototype.hasOwnProperty.call(C,f);var b={};return(()=>{_.d(b,{default:()=>Pt});var C=_(976);const f=function(Ce){var Ge=typeof Ce;return Ce!=null&&(Ge=="object"||Ge=="function")},y=typeof gi=="object"&&gi&&gi.Object===Object&&gi;var x=typeof self=="object"&&self&&self.Object===Object&&self;const v=y||x||Function("return this")(),w=function(){return v.Date.now()};var D=/\s/;const M=function(Ce){for(var Ge=Ce.length;Ge--&&D.test(Ce.charAt(Ge)););return Ge};var P=/^\s+/;const L=function(Ce){return Ce&&Ce.slice(0,M(Ce)+1).replace(P,"")},F=v.Symbol;var j=Object.prototype,R=j.hasOwnProperty,V=j.toString,$=F?F.toStringTag:void 0;const K=function(Ce){var Ge=R.call(Ce,$),bt=Ce[$];try{Ce[$]=void 0;var lt=!0}catch{}var ie=V.call(Ce);return lt&&(Ge?Ce[$]=bt:delete Ce[$]),ie};var G=Object.prototype.toString;const H=function(Ce){return G.call(Ce)};var T=F?F.toStringTag:void 0;const W=function(Ce){return Ce==null?Ce===void 0?"[object Undefined]":"[object Null]":T&&T in Object(Ce)?K(Ce):H(Ce)},de=function(Ce){return Ce!=null&&typeof Ce=="object"},J=function(Ce){return typeof Ce=="symbol"||de(Ce)&&W(Ce)=="[object Symbol]"};var ge=/^[-+]0x[0-9a-f]+$/i,Te=/^0b[01]+$/i,be=/^0o[0-7]+$/i,Q=parseInt;const te=function(Ce){if(typeof Ce=="number")return Ce;if(J(Ce))return NaN;if(f(Ce)){var Ge=typeof Ce.valueOf=="function"?Ce.valueOf():Ce;Ce=f(Ge)?Ge+"":Ge}if(typeof Ce!="string")return Ce===0?Ce:+Ce;Ce=L(Ce);var bt=Te.test(Ce);return bt||be.test(Ce)?Q(Ce.slice(2),bt?2:8):ge.test(Ce)?NaN:+Ce};var ve=Math.max,vt=Math.min;const ze=function(Ce,Ge,bt){var lt,ie,ke,ye,xe,Ve,Ye=0,z=!1,U=!1,Y=!0;if(typeof Ce!="function")throw new TypeError("Expected a function");function ce(ue){var we=lt,ae=ie;return lt=ie=void 0,Ye=ue,ye=Ce.apply(ae,we)}function se(ue){return Ye=ue,xe=setTimeout(Se,Ge),z?ce(ue):ye}function Ae(ue){var we=ue-Ve;return Ve===void 0||we>=Ge||we<0||U&&ue-Ye>=ke}function Se(){var ue=w();if(Ae(ue))return _e(ue);xe=setTimeout(Se,function(we){var ae=Ge-(we-Ve);return U?vt(ae,ke-(we-Ye)):ae}(ue))}function _e(ue){return xe=void 0,Y&&lt?ce(ue):(lt=ie=void 0,ye)}function Ee(){var ue=w(),we=Ae(ue);if(lt=arguments,ie=this,Ve=ue,we){if(xe===void 0)return se(Ve);if(U)return clearTimeout(xe),xe=setTimeout(Se,Ge),ce(Ve)}return xe===void 0&&(xe=setTimeout(Se,Ge)),ye}return Ge=te(Ge)||0,f(bt)&&(z=!!bt.leading,ke=(U="maxWait"in bt)?ve(te(bt.maxWait)||0,Ge):ke,Y="trailing"in bt?!!bt.trailing:Y),Ee.cancel=function(){xe!==void 0&&clearTimeout(xe),Ye=0,lt=Ve=ie=xe=void 0},Ee.flush=function(){return xe===void 0?ye:_e(w())},Ee},Gt=(0,C.defineComponent)({name:"Ckeditor",model:{prop:"modelValue",event:"update:modelValue"},props:{editor:{type:Function,required:!0},config:{type:Object,default:()=>({})},modelValue:{type:String,default:""},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1},disableTwoWayDataBinding:{type:Boolean,default:!1}},emits:["ready","destroy","blur","focus","input","update:modelValue"],data:()=>({instance:null,lastEditorData:null}),watch:{modelValue(Ce){this.instance&&Ce!==this.lastEditorData&&this.instance.data.set(Ce)},disabled(Ce){Ce?this.instance.enableReadOnlyMode("Integration Sample"):this.instance.disableReadOnlyMode("Integration Sample")}},created(){const{CKEDITOR_VERSION:Ce}=window;if(Ce){const[Ge]=Ce.split(".").map(Number);Ge<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')},mounted(){const Ce=Object.assign({},this.config);this.modelValue&&(Ce.initialData=this.modelValue),this.editor.create(this.$el,Ce).then(Ge=>{this.instance=(0,C.markRaw)(Ge),this.setUpEditorEvents(),this.modelValue!==Ce.initialData&&Ge.data.set(this.modelValue),this.disabled&&Ge.enableReadOnlyMode("Integration Sample"),this.$emit("ready",Ge)}).catch(Ge=>{console.error(Ge)})},beforeUnmount(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},methods:{setUpEditorEvents(){const Ce=this.instance,Ge=ze(bt=>{if(this.disableTwoWayDataBinding)return;const lt=this.lastEditorData=Ce.data.get();this.$emit("update:modelValue",lt,bt,Ce),this.$emit("input",lt,bt,Ce)},300,{leading:!0});Ce.model.document.on("change:data",Ge),Ce.editing.view.document.on("focus",bt=>{this.$emit("focus",bt,Ce)}),Ce.editing.view.document.on("blur",bt=>{this.$emit("blur",bt,Ce)})}},render(){return(0,C.h)(this.tagName)}});if(!C.version||!C.version.startsWith("3."))throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const Pt={install(Ce){Ce.component("Ckeditor",Gt)},component:Gt}})(),b=b.default})())})(Lx);var c8=Lx.exports;const l8=Ox(c8);var Dl={exports:{}};Dl.exports;(function(s,l){(function(u){const g=u.en=u.en||{};g.dictionary=Object.assign(g.dictionary||{},{"(may require <kbd>Fn</kbd>)":"(may require <kbd>Fn</kbd>)","%0 of %1":"%0 of %1",Accept:"Accept",Accessibility:"Accessibility","Accessibility help":"Accessibility help","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Below, you can find a list of keyboard shortcuts that can be used in the editor.",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Bold text":"Bold text",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Close:"Close","Close contextual balloons, dropdowns, and dialogs":"Close contextual balloons, dropdowns, and dialogs",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Content editing keystrokes":"Content editing keystrokes","Copy selected content":"Copy selected content","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Create link":"Create link",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Decrease list item indent":"Decrease list item indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit image":"Edit image","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor dialog":"Editor dialog","Editor editing area: %0":"Editor editing area: %0","Editor menu bar":"Editor menu bar","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.","Failed to determine category of edited image.":"Failed to determine category of edited image.","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height","Help Contents. To close this dialog press ESC.":"Help Contents. To close this dialog press ESC.",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image from computer":"Image from computer","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Increase list item indent":"Increase list item indent",Insert:"Insert","Insert a hard break (a new paragraph)":"Insert a hard break (a new paragraph)","Insert a new paragraph directly after a widget":"Insert a new paragraph directly after a widget","Insert a new paragraph directly before a widget":"Insert a new paragraph directly before a widget","Insert a new table row (when in the last cell of a table)":"Insert a new table row (when in the last cell of a table)","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Insert a soft break (a <code>&lt;br&gt;</code> element)","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image via URL":"Insert image via URL","Insert image with file manager":"Insert image with file manager","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Insert with file manager":"Insert with file manager","Inserting image failed":"Inserting image failed",Inset:"Inset","Invalid start index value.":"Invalid start index value.",Italic:"Italic","Italic text":"Italic text","Justify cell text":"Justify cell text","Keystrokes that can be used in a list":"Keystrokes that can be used in a list","Keystrokes that can be used in a table cell":"Keystrokes that can be used in a table cell","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Keystrokes that can be used when a widget is selected (for example: image, table, etc.)","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget",MENU_BAR_MENU_EDIT:"Edit",MENU_BAR_MENU_FILE:"File",MENU_BAR_MENU_FONT:"Font",MENU_BAR_MENU_FORMAT:"Format",MENU_BAR_MENU_HELP:"Help",MENU_BAR_MENU_INSERT:"Insert",MENU_BAR_MENU_TEXT:"Text",MENU_BAR_MENU_TOOLS:"Tools",MENU_BAR_MENU_VIEW:"View","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells","Move focus between form fields (inputs, buttons, etc.)":"Move focus between form fields (inputs, buttons, etc.)","Move focus in and out of an active dialog window":"Move focus in and out of an active dialog window","Move focus to the menu bar, navigate between menu bars":"Move focus to the menu bar, navigate between menu bars","Move focus to the toolbar, navigate between toolbars":"Move focus to the toolbar, navigate between toolbars","Move out of a link":"Move out of a link","Move out of an inline code style":"Move out of an inline code style","Move the caret to allow typing directly after a widget":"Move the caret to allow typing directly after a widget","Move the caret to allow typing directly before a widget":"Move the caret to allow typing directly before a widget","Move the selection to the next cell":"Move the selection to the next cell","Move the selection to the previous cell":"Move the selection to the previous cell","Navigate through the table":"Navigate through the table","Navigate through the toolbar or menu bar":"Navigate through the toolbar or menu bar",Next:"Next","No results found":"No results found","No searchable items":"No searchable items",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab","Open the accessibility help dialog":"Open the accessibility help dialog",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste content":"Paste content","Paste content as plain text":"Paste content as plain text","Paste the media URL in the input.":"Paste the media URL in the input.","Press %0 for help.":"Press %0 for help.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous","Processing the edited image.":"Processing the edited image.",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Replace from computer":"Replace from computer","Replace image":"Replace image","Replace image from computer":"Replace image from computer","Replace image with file manager":"Replace image with file manager","Replace with file manager":"Replace with file manager","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Revert autoformatting action":"Revert autoformatting action","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Server failed to process the image.":"Server failed to process the image.","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough","Strikethrough text":"Strikethrough text",Style:"Style",Subscript:"Subscript",Superscript:"Superscript",Table:"Table","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"These keyboard shortcuts allow for quick access to content editing features.":"These keyboard shortcuts allow for quick access to content editing features.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline","Underline text":"Underline text",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload from computer":"Upload from computer","Upload image from computer":"Upload image from computer","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.","User interface and content navigation keystrokes":"User interface and content navigation keystrokes","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(u,g){s.exports=g()}(self,()=>(()=>{var u={9246:(b,C,f)=>{const y=f(6931),x={};for(const w of Object.keys(y))x[y[w]]=w;const v={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};b.exports=v;for(const w of Object.keys(v)){if(!("channels"in v[w]))throw new Error("missing channels property: "+w);if(!("labels"in v[w]))throw new Error("missing channel labels property: "+w);if(v[w].labels.length!==v[w].channels)throw new Error("channel and label counts mismatch: "+w);const{channels:D,labels:M}=v[w];delete v[w].channels,delete v[w].labels,Object.defineProperty(v[w],"channels",{value:D}),Object.defineProperty(v[w],"labels",{value:M})}v.rgb.hsl=function(w){const D=w[0]/255,M=w[1]/255,P=w[2]/255,L=Math.min(D,M,P),F=Math.max(D,M,P),j=F-L;let R,V;F===L?R=0:D===F?R=(M-P)/j:M===F?R=2+(P-D)/j:P===F&&(R=4+(D-M)/j),R=Math.min(60*R,360),R<0&&(R+=360);const $=(L+F)/2;return V=F===L?0:$<=.5?j/(F+L):j/(2-F-L),[R,100*V,100*$]},v.rgb.hsv=function(w){let D,M,P,L,F;const j=w[0]/255,R=w[1]/255,V=w[2]/255,$=Math.max(j,R,V),K=$-Math.min(j,R,V),G=function(H){return($-H)/6/K+.5};return K===0?(L=0,F=0):(F=K/$,D=G(j),M=G(R),P=G(V),j===$?L=P-M:R===$?L=.3333333333333333+D-P:V===$&&(L=.6666666666666666+M-D),L<0?L+=1:L>1&&(L-=1)),[360*L,100*F,100*$]},v.rgb.hwb=function(w){const D=w[0],M=w[1];let P=w[2];const L=v.rgb.hsl(w)[0],F=1/255*Math.min(D,Math.min(M,P));return P=1-.00392156862745098*Math.max(D,Math.max(M,P)),[L,100*F,100*P]},v.rgb.cmyk=function(w){const D=w[0]/255,M=w[1]/255,P=w[2]/255,L=Math.min(1-D,1-M,1-P);return[100*((1-D-L)/(1-L)||0),100*((1-M-L)/(1-L)||0),100*((1-P-L)/(1-L)||0),100*L]},v.rgb.keyword=function(w){const D=x[w];if(D)return D;let M,P=1/0;for(const j of Object.keys(y)){const R=y[j],V=(F=R,((L=w)[0]-F[0])**2+(L[1]-F[1])**2+(L[2]-F[2])**2);V<P&&(P=V,M=j)}var L,F;return M},v.keyword.rgb=function(w){return y[w]},v.rgb.xyz=function(w){let D=w[0]/255,M=w[1]/255,P=w[2]/255;return D=D>.04045?((D+.055)/1.055)**2.4:D/12.92,M=M>.04045?((M+.055)/1.055)**2.4:M/12.92,P=P>.04045?((P+.055)/1.055)**2.4:P/12.92,[100*(.4124*D+.3576*M+.1805*P),100*(.2126*D+.7152*M+.0722*P),100*(.0193*D+.1192*M+.9505*P)]},v.rgb.lab=function(w){const D=v.rgb.xyz(w);let M=D[0],P=D[1],L=D[2];return M/=95.047,P/=100,L/=108.883,M=M>.008856?M**.3333333333333333:7.787*M+.13793103448275862,P=P>.008856?P**.3333333333333333:7.787*P+.13793103448275862,L=L>.008856?L**.3333333333333333:7.787*L+.13793103448275862,[116*P-16,500*(M-P),200*(P-L)]},v.hsl.rgb=function(w){const D=w[0]/360,M=w[1]/100,P=w[2]/100;let L,F,j;if(M===0)return j=255*P,[j,j,j];L=P<.5?P*(1+M):P+M-P*M;const R=2*P-L,V=[0,0,0];for(let $=0;$<3;$++)F=D+.3333333333333333*-($-1),F<0&&F++,F>1&&F--,j=6*F<1?R+6*(L-R)*F:2*F<1?L:3*F<2?R+(L-R)*(.6666666666666666-F)*6:R,V[$]=255*j;return V},v.hsl.hsv=function(w){const D=w[0];let M=w[1]/100,P=w[2]/100,L=M;const F=Math.max(P,.01);return P*=2,M*=P<=1?P:2-P,L*=F<=1?F:2-F,[D,100*(P===0?2*L/(F+L):2*M/(P+M)),100*((P+M)/2)]},v.hsv.rgb=function(w){const D=w[0]/60,M=w[1]/100;let P=w[2]/100;const L=Math.floor(D)%6,F=D-Math.floor(D),j=255*P*(1-M),R=255*P*(1-M*F),V=255*P*(1-M*(1-F));switch(P*=255,L){case 0:return[P,V,j];case 1:return[R,P,j];case 2:return[j,P,V];case 3:return[j,R,P];case 4:return[V,j,P];case 5:return[P,j,R]}},v.hsv.hsl=function(w){const D=w[0],M=w[1]/100,P=w[2]/100,L=Math.max(P,.01);let F,j;j=(2-M)*P;const R=(2-M)*L;return F=M*L,F/=R<=1?R:2-R,F=F||0,j/=2,[D,100*F,100*j]},v.hwb.rgb=function(w){const D=w[0]/360;let M=w[1]/100,P=w[2]/100;const L=M+P;let F;L>1&&(M/=L,P/=L);const j=Math.floor(6*D),R=1-P;F=6*D-j,1&j&&(F=1-F);const V=M+F*(R-M);let $,K,G;switch(j){default:case 6:case 0:$=R,K=V,G=M;break;case 1:$=V,K=R,G=M;break;case 2:$=M,K=R,G=V;break;case 3:$=M,K=V,G=R;break;case 4:$=V,K=M,G=R;break;case 5:$=R,K=M,G=V}return[255*$,255*K,255*G]},v.cmyk.rgb=function(w){const D=w[0]/100,M=w[1]/100,P=w[2]/100,L=w[3]/100;return[255*(1-Math.min(1,D*(1-L)+L)),255*(1-Math.min(1,M*(1-L)+L)),255*(1-Math.min(1,P*(1-L)+L))]},v.xyz.rgb=function(w){const D=w[0]/100,M=w[1]/100,P=w[2]/100;let L,F,j;return L=3.2406*D+-1.5372*M+-.4986*P,F=-.9689*D+1.8758*M+.0415*P,j=.0557*D+-.204*M+1.057*P,L=L>.0031308?1.055*L**.4166666666666667-.055:12.92*L,F=F>.0031308?1.055*F**.4166666666666667-.055:12.92*F,j=j>.0031308?1.055*j**.4166666666666667-.055:12.92*j,L=Math.min(Math.max(0,L),1),F=Math.min(Math.max(0,F),1),j=Math.min(Math.max(0,j),1),[255*L,255*F,255*j]},v.xyz.lab=function(w){let D=w[0],M=w[1],P=w[2];return D/=95.047,M/=100,P/=108.883,D=D>.008856?D**.3333333333333333:7.787*D+.13793103448275862,M=M>.008856?M**.3333333333333333:7.787*M+.13793103448275862,P=P>.008856?P**.3333333333333333:7.787*P+.13793103448275862,[116*M-16,500*(D-M),200*(M-P)]},v.lab.xyz=function(w){let D,M,P;M=(w[0]+16)/116,D=w[1]/500+M,P=M-w[2]/200;const L=M**3,F=D**3,j=P**3;return M=L>.008856?L:(M-.13793103448275862)/7.787,D=F>.008856?F:(D-.13793103448275862)/7.787,P=j>.008856?j:(P-.13793103448275862)/7.787,D*=95.047,M*=100,P*=108.883,[D,M,P]},v.lab.lch=function(w){const D=w[0],M=w[1],P=w[2];let L;return L=360*Math.atan2(P,M)/2/Math.PI,L<0&&(L+=360),[D,Math.sqrt(M*M+P*P),L]},v.lch.lab=function(w){const D=w[0],M=w[1],P=w[2]/360*2*Math.PI;return[D,M*Math.cos(P),M*Math.sin(P)]},v.rgb.ansi16=function(w,D=null){const[M,P,L]=w;let F=D===null?v.rgb.hsv(w)[2]:D;if(F=Math.round(F/50),F===0)return 30;let j=30+(Math.round(L/255)<<2|Math.round(P/255)<<1|Math.round(M/255));return F===2&&(j+=60),j},v.hsv.ansi16=function(w){return v.rgb.ansi16(v.hsv.rgb(w),w[2])},v.rgb.ansi256=function(w){const D=w[0],M=w[1],P=w[2];return D===M&&M===P?D<8?16:D>248?231:Math.round((D-8)/247*24)+232:16+36*Math.round(D/255*5)+6*Math.round(M/255*5)+Math.round(P/255*5)},v.ansi16.rgb=function(w){let D=w%10;if(D===0||D===7)return w>50&&(D+=3.5),D=D/10.5*255,[D,D,D];const M=.5*(1+~~(w>50));return[(1&D)*M*255,(D>>1&1)*M*255,(D>>2&1)*M*255]},v.ansi256.rgb=function(w){if(w>=232){const M=10*(w-232)+8;return[M,M,M]}let D;return w-=16,[Math.floor(w/36)/5*255,Math.floor((D=w%36)/6)/5*255,D%6/5*255]},v.rgb.hex=function(w){const D=(((255&Math.round(w[0]))<<16)+((255&Math.round(w[1]))<<8)+(255&Math.round(w[2]))).toString(16).toUpperCase();return"000000".substring(D.length)+D},v.hex.rgb=function(w){const D=w.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!D)return[0,0,0];let M=D[0];D[0].length===3&&(M=M.split("").map(L=>L+L).join(""));const P=parseInt(M,16);return[P>>16&255,P>>8&255,255&P]},v.rgb.hcg=function(w){const D=w[0]/255,M=w[1]/255,P=w[2]/255,L=Math.max(Math.max(D,M),P),F=Math.min(Math.min(D,M),P),j=L-F;let R,V;return R=j<1?F/(1-j):0,V=j<=0?0:L===D?(M-P)/j%6:L===M?2+(P-D)/j:4+(D-M)/j,V/=6,V%=1,[360*V,100*j,100*R]},v.hsl.hcg=function(w){const D=w[1]/100,M=w[2]/100,P=M<.5?2*D*M:2*D*(1-M);let L=0;return P<1&&(L=(M-.5*P)/(1-P)),[w[0],100*P,100*L]},v.hsv.hcg=function(w){const D=w[1]/100,M=w[2]/100,P=D*M;let L=0;return P<1&&(L=(M-P)/(1-P)),[w[0],100*P,100*L]},v.hcg.rgb=function(w){const D=w[0]/360,M=w[1]/100,P=w[2]/100;if(M===0)return[255*P,255*P,255*P];const L=[0,0,0],F=D%1*6,j=F%1,R=1-j;let V=0;switch(Math.floor(F)){case 0:L[0]=1,L[1]=j,L[2]=0;break;case 1:L[0]=R,L[1]=1,L[2]=0;break;case 2:L[0]=0,L[1]=1,L[2]=j;break;case 3:L[0]=0,L[1]=R,L[2]=1;break;case 4:L[0]=j,L[1]=0,L[2]=1;break;default:L[0]=1,L[1]=0,L[2]=R}return V=(1-M)*P,[255*(M*L[0]+V),255*(M*L[1]+V),255*(M*L[2]+V)]},v.hcg.hsv=function(w){const D=w[1]/100,M=D+w[2]/100*(1-D);let P=0;return M>0&&(P=D/M),[w[0],100*P,100*M]},v.hcg.hsl=function(w){const D=w[1]/100,M=w[2]/100*(1-D)+.5*D;let P=0;return M>0&&M<.5?P=D/(2*M):M>=.5&&M<1&&(P=D/(2*(1-M))),[w[0],100*P,100*M]},v.hcg.hwb=function(w){const D=w[1]/100,M=D+w[2]/100*(1-D);return[w[0],100*(M-D),100*(1-M)]},v.hwb.hcg=function(w){const D=w[1]/100,M=1-w[2]/100,P=M-D;let L=0;return P<1&&(L=(M-P)/(1-P)),[w[0],100*P,100*L]},v.apple.rgb=function(w){return[w[0]/65535*255,w[1]/65535*255,w[2]/65535*255]},v.rgb.apple=function(w){return[w[0]/255*65535,w[1]/255*65535,w[2]/255*65535]},v.gray.rgb=function(w){return[w[0]/100*255,w[0]/100*255,w[0]/100*255]},v.gray.hsl=function(w){return[0,0,w[0]]},v.gray.hsv=v.gray.hsl,v.gray.hwb=function(w){return[0,100,w[0]]},v.gray.cmyk=function(w){return[0,0,0,w[0]]},v.gray.lab=function(w){return[w[0],0,0]},v.gray.hex=function(w){const D=255&Math.round(w[0]/100*255),M=((D<<16)+(D<<8)+D).toString(16).toUpperCase();return"000000".substring(M.length)+M},v.rgb.gray=function(w){return[(w[0]+w[1]+w[2])/3/255*100]}},9047:(b,C,f)=>{const y=f(9246),x=f(802),v={};Object.keys(y).forEach(w=>{v[w]={},Object.defineProperty(v[w],"channels",{value:y[w].channels}),Object.defineProperty(v[w],"labels",{value:y[w].labels});const D=x(w);Object.keys(D).forEach(M=>{const P=D[M];v[w][M]=function(L){const F=function(...j){const R=j[0];if(R==null)return R;R.length>1&&(j=R);const V=L(j);if(typeof V=="object")for(let $=V.length,K=0;K<$;K++)V[K]=Math.round(V[K]);return V};return"conversion"in L&&(F.conversion=L.conversion),F}(P),v[w][M].raw=function(L){const F=function(...j){const R=j[0];return R==null?R:(R.length>1&&(j=R),L(j))};return"conversion"in L&&(F.conversion=L.conversion),F}(P)})}),b.exports=v},802:(b,C,f)=>{const y=f(9246);function x(D){const M=function(){const L={},F=Object.keys(y);for(let j=F.length,R=0;R<j;R++)L[F[R]]={distance:-1,parent:null};return L}(),P=[D];for(M[D].distance=0;P.length;){const L=P.pop(),F=Object.keys(y[L]);for(let j=F.length,R=0;R<j;R++){const V=F[R],$=M[V];$.distance===-1&&($.distance=M[L].distance+1,$.parent=L,P.unshift(V))}}return M}function v(D,M){return function(P){return M(D(P))}}function w(D,M){const P=[M[D].parent,D];let L=y[M[D].parent][D],F=M[D].parent;for(;M[F].parent;)P.unshift(M[F].parent),L=v(y[M[F].parent][F],L),F=M[F].parent;return L.conversion=P,L}b.exports=function(D){const M=x(D),P={},L=Object.keys(M);for(let F=L.length,j=0;j<F;j++){const R=L[j];M[R].parent!==null&&(P[R]=w(R,M))}return P}},6931:b=>{b.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},4199:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},8708:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},1866:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,':root{--ck-image-processing-highlight-color:#f9fafa;--ck-image-processing-background-color:#e3e5e8}.ck.ck-editor__editable .image.image-processing{position:relative}.ck.ck-editor__editable .image.image-processing:before{animation:ck-image-processing-animation 2s linear infinite;background:linear-gradient(90deg,var(--ck-image-processing-background-color),var(--ck-image-processing-highlight-color),var(--ck-image-processing-background-color));background-size:200% 100%;content:"";height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}.ck.ck-editor__editable .image.image-processing img{height:100%}@keyframes ck-image-processing-animation{0%{background-position:200% 0}to{background-position:-200% 0}}',"",{version:3,sources:["webpack://./../ckeditor5-ckbox/theme/ckboximageedit.css"],names:[],mappings:"AAKA,MAEC,6CAAyD,CACzD,8CACD,CAIE,gDACC,iBA2BD,CAzBC,uDAmBC,0DAA2D,CAR3D,oKAKC,CACD,yBAA0B,CAhB1B,UAAW,CAOX,WAAY,CAHZ,MAAO,CAFP,iBAAkB,CAClB,KAAM,CAKN,UAAW,CAHX,SAcD,CAEA,oDACC,WACD,CAKH,yCACC,GACC,0BACD,CACA,GACC,2BACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},7793:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}.ck.ck-clipboard-drop-target-line:before{border-style:solid;content:"";height:0;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-width)*-.5);width:0}[dir=ltr] .ck.ck-clipboard-drop-target-line:before{border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color);border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height);left:-1px}[dir=rtl] .ck.ck-clipboard-drop-target-line:before{border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0;right:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CC9BA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eAwBD,CAtBC,yCAMC,kBAAmB,CALnB,UAAW,CAIX,QAAS,CAHT,iBAAkB,CAClB,uDAA0D,CAC1D,OAiBD,CArBA,mDAYE,sFAAuF,CADvF,+JAAoK,CAFpK,SAYF,CArBA,mDAmBE,sFAAuF,CADvF,+JAAmK,CAFnK,UAKF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},7388:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-panel)}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border:solid var(--ck-color-base-border);border-width:1px 1px 0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-sticky-panel__content_sticky{border-bottom-width:1px}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-menu-bar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-toolbar{border:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,8DCED,eDeC,CAjBA,mKCMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAcF,CAjBA,8DAOC,wCAAsB,CAAtB,sBAUD,CARC,8FACC,uBACD,CAEA,qJAEC,QACD,CAMH,yCAEC,0CAA2C,CCtB3C,eDgCD,CAZA,yHChBE,qCAAsC,CDqBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},4098:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
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

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const D=w},8264:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const D=w},6269:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},265:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image{z-index:1}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBA2BD,CAjBC,uBAEC,aAAc,CAad,WAAY,CAVZ,aAAc,CAGd,cAAe,CAGf,cAKD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAKA,+BACC,SASD,CAHC,kDACC,SACD,CAMD,sCACC,SAkBD,CAZC,yDACC,SAUD,CAHC,qEACC,YACD,CAMF,0CACC,WACD,CAMC,0FACC,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},5247:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highlighted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highlighted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,oDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,qEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

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
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const D=w},3350:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-image-insert-url .ck-image-insert-url__action-row{display:grid;grid-template-columns:repeat(2,1fr)}:root{--ck-image-insert-insert-by-url-width:250px}.ck.ck-image-insert-url{--ck-input-width:100%}.ck.ck-image-insert-url .ck-image-insert-url__action-row{grid-column-gap:var(--ck-spacing-large);margin-top:var(--ck-spacing-large)}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-cancel,.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-save{justify-content:center;min-width:auto}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}.ck.ck-image-insert-form>.ck.ck-button{display:block;padding:var(--ck-list-button-padding);width:100%}[dir=ltr] .ck.ck-image-insert-form>.ck.ck-button{text-align:left}[dir=rtl] .ck.ck-image-insert-form>.ck.ck-button{text-align:right}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:first-child){border-top:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:last-child){border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible,.ck.ck-image-insert-form>.ck.ck-image-insert-url{min-width:var(--ck-image-insert-insert-by-url-width)}.ck.ck-image-insert-form>.ck.ck-image-insert-url{padding:var(--ck-spacing-large)}.ck.ck-image-insert-form:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageinsert.css"],names:[],mappings:"AAMC,yDACC,YAAa,CACb,mCACD,CCFD,MACC,2CACD,CAEA,wBACC,qBAgBD,CAdC,yDACC,uCAAwC,CACxC,kCAWD,CATC,oJAEC,sBAAuB,CACvB,cACD,CAEA,sFACC,0BACD,CAKD,uCACC,aAAc,CAEd,qCAAsC,CADtC,UAUD,CAZA,iDAME,eAMF,CAZA,iDAUE,gBAEF,CAGC,8DACC,gDACD,CAEA,6DACC,mDACD,CAMD,6FAJC,oDAOD,CAHA,iDAEC,+BACD,CAEA,+BACC,YACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},7378:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-editor__editable img.image_placeholder{background-size:100% 100%}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageplaceholder.css"],names:[],mappings:"AAMC,8CACC,yBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& img.image_placeholder {
		background-size: 100% 100%;
	}
}
`],sourceRoot:""}]);const D=w},3469:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAMA,8BACC,WACD,CAEA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},6386:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},7693:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},1559:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},2267:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},4062:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},7719:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},8762:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},3817:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

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
`],sourceRoot:""}]);const D=w},4808:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
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

`],sourceRoot:""}]);const D=w},1232:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const D=w},6903:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},9968:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},7141:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},8991:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover:before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:after{border-color:#fff}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAwEA,uBACC,eAwBD,CAtBC,0BAEC,iBAAkB,CADlB,iBAMD,CAHC,qCACC,cACD,CAIA,+CAlFD,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAiFC,CAFA,wDAhEA,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAgEA,CA5DD,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAwBA,wEACC,qBACD,CAEA,mGACC,iBACD,CAYD,kKAEC,cAKD,CAHC,4LACC,mCACD,CAMD,+FApHA,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAmHA,CAFA,wGAlGC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAkGD,CA9FA,sGAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qGAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+GACC,kBAA8B,CAC9B,oBACD,CAEA,8GACC,iBACD,CA2DA,uHACC,iBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},70:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},7048:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},5651:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},5506:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},4043:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},2655:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},5032:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
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

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const D=w},2329:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},4143:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css"],names:[],mappings:"AAKA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAOD,CAIC,qEACC,iDACD,CAEA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

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
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	&.table__caption_highlighted {
		animation: ck-table-caption-highlight .6s ease-out;
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
`],sourceRoot:""}]);const D=w},8986:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},8795:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},8137:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAKE,8QAGC,2DAA4D,CAK5D,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},1623:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCAyBD,CAvBC,8ECxCD,eDyDC,CAjBA,mMCpCA,qCDqDA,CAjBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAUD,CAPC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEACD,CAGA,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},5562:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},8423:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},1801:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-aria-live-announcer{left:-10000px;position:absolute;top:-10000px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/arialiveannouncer/arialiveannouncer.css"],names:[],mappings:"AAKA,2BAEC,aAAc,CADd,iBAAkB,CAElB,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-aria-live-announcer {
	position: absolute;
	left: -10000px;
	top: -10000px;
}
`],sourceRoot:""}]);const D=w},5727:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-panel)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{bottom:auto;top:100%}.ck.ck-autocomplete>.ck-search__results{border-radius:0}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:200px;min-width:auto;overflow-y:auto}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,oBACC,iBAeD,CAbC,wCACC,iBAAkB,CAClB,yBAUD,CARC,6DACC,WACD,CAEA,6DAEC,WAAY,CADZ,QAED,CCVD,wCCEA,eDuBA,CAzBA,uHCMC,qCDmBD,CAzBA,wCAMC,0CAA2C,CAC3C,sDAAuD,CEPxD,oCAA8B,CFI7B,gBAAiB,CAIjB,cAAe,CAHf,eAoBD,CAfC,6DACC,2BAA4B,CAC5B,4BAA6B,CAG7B,kBACD,CAEA,6DACC,wBAAyB,CACzB,yBAA0B,CAG1B,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},9715:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}[dir=ltr] .ck.ck-button,[dir=ltr] a.ck.ck-button{justify-content:left}[dir=rtl] .ck.ck-button,[dir=rtl] a.ck.ck-button{justify-content:right}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{opacity:.5}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BAMC,kBAAmB,CADnB,mBAAoB,CADpB,iBAAkB,CCHlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD0BD,CA9BA,iDASE,oBAqBF,CA9BA,iDAaE,qBAiBF,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEzBD,6BCAC,oDD2ID,CCxIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF4ID,CA3IA,wIEGE,qCFwIF,CA3IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAsID,CA5GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAWD,CAZA,6FAIE,mCAQF,CAZA,6FAQE,oCAIF,CAZA,yEAWC,UACD,CAIC,oIIpFD,oDJwFC,CAOA,gLK/FD,kCLiGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC9HA,+CDkIA,CC/HC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CD+GA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC9IC,mDDmJD,CChJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CD+HD,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},4391:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},25:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-list-button-padding);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/collapsible/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/collapsible/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,qCAAsC,CAFtC,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,gFACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},7317:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,+DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
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
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-selector__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const D=w},1905:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},6309:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},9819:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-dialog-overlay{bottom:0;left:0;overscroll-behavior:none;position:fixed;right:0;top:0;user-select:none}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent{animation:none;background:none;pointer-events:none}.ck.ck-dialog{overscroll-behavior:none;position:absolute;width:fit-content}.ck.ck-dialog .ck.ck-form__header{flex-shrink:0}.ck.ck-dialog .ck.ck-form__header .ck-form__header__label{cursor:grab}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent .ck.ck-dialog{pointer-events:all}:root{--ck-dialog-overlay-background-color:rgba(0,0,0,.5);--ck-dialog-drop-shadow:0px 0px 6px 2px rgba(0,0,0,.15);--ck-dialog-max-width:100vw;--ck-dialog-max-height:90vh;--ck-color-dialog-background:var(--ck-color-base-background);--ck-color-dialog-form-header-border:var(--ck-color-base-border)}.ck.ck-dialog-overlay{animation:ck-dialog-fade-in .3s;background:var(--ck-dialog-overlay-background-color);z-index:var(--ck-z-dialog)}.ck.ck-dialog{border-radius:0}.ck-rounded-corners .ck.ck-dialog,.ck.ck-dialog.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dialog{--ck-drop-shadow:var(--ck-dialog-drop-shadow);background:var(--ck-color-dialog-background);border:1px solid var(--ck-color-base-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:var(--ck-dialog-max-height);max-width:var(--ck-dialog-max-width)}.ck.ck-dialog .ck.ck-form__header{border-bottom:1px solid var(--ck-color-dialog-form-header-border)}@keyframes ck-dialog-fade-in{0%{background:transparent}to{background:var(--ck-dialog-overlay-background-color)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,sBAKC,QAAS,CACT,MAAO,CAJP,wBAAyB,CAEzB,cAAe,CAGf,OAAQ,CACR,KAAM,CAPN,gBAcD,CALC,qDAEC,cAAe,CACf,eAAgB,CAFhB,mBAGD,CAGD,cACC,wBAAyB,CAEzB,iBAAkB,CADlB,iBAcD,CAXC,kCACC,aAKD,CAHC,0DACC,WACD,CAVF,mEAcE,kBAEF,CC7BA,MACC,mDAA2D,CAC3D,uDAA8D,CAC9D,2BAA4B,CAC5B,2BAA4B,CAC5B,4DAA6D,CAC7D,gEACD,CAEA,sBACC,+BAAgC,CAChC,oDAAqD,CACrD,0BACD,CAEA,cCbC,eD2BD,CAdA,mECTE,qCDuBF,CAdA,cAIC,6CAA8C,CAE9C,4CAA6C,CAG7C,4CAA6C,CExB7C,oCAA8B,CFsB9B,sCAAuC,CACvC,oCAMD,CAHC,kCACC,iEACD,CAGD,6BACC,GACC,sBACD,CAEA,GACC,oDACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},9822:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-dialog .ck.ck-dialog__actions{display:flex;justify-content:flex-end;padding:var(--ck-spacing-large)}.ck.ck-dialog .ck.ck-dialog__actions>*+*{margin-left:var(--ck-spacing-large)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialogactions.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialogactions.css"],names:[],mappings:"AAMC,qCACC,YAAa,CACb,wBAAyB,CCDzB,+BDED,CCAC,yCACC,mCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},8149:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-panel) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},3629:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-dropdown>.ck-dropdown__panel>.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},1792:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},1666:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},8527:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,":root{--ck-accessibility-help-dialog-max-width:600px;--ck-accessibility-help-dialog-max-height:400px;--ck-accessibility-help-dialog-border-color:#ccced1;--ck-accessibility-help-dialog-code-background-color:#ededed;--ck-accessibility-help-dialog-kbd-shadow-color:#9c9c9c}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{border:1px solid transparent;max-height:var(--ck-accessibility-help-dialog-max-height);max-width:var(--ck-accessibility-help-dialog-max-width);overflow:auto;padding:var(--ck-spacing-large);user-select:text}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{*{white-space:normal}}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content .ck-label{display:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3{font-size:1.2em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4{font-size:1em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content p,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content table{margin:1em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl{border-bottom:none;border-top:1px solid var(--ck-accessibility-help-dialog-border-color);display:grid;grid-template-columns:2fr 1fr}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{border-bottom:1px solid var(--ck-accessibility-help-dialog-border-color);padding:.4em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{grid-column-start:1}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd{grid-column-start:2;text-align:right}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{background:var(--ck-accessibility-help-dialog-code-background-color);border-radius:2px;display:inline-block;font-size:.9em;line-height:1;padding:.4em;text-align:center;vertical-align:middle}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code{font-family:monospace}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{box-shadow:0 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);margin:0 1px;min-width:1.8em}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd+kbd{margin-left:2px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/accessibilityhelp.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAQA,MACC,8CAA+C,CAC/C,+CAAgD,CAChD,mDAA8D,CAC9D,4DAAyE,CACzE,uDACD,CAEA,wEAOC,4BAA6B,CAJ7B,yDAA0D,CAD1D,uDAAwD,CAExD,aAAc,CAHd,+BAAgC,CAIhC,gBAgFD,CA5EC,8ECdA,2BAA2B,CCF3B,2CAA8B,CDC9B,YDkBA,CAZD,wEAcC,EACC,kBACD,CAqED,CAlEC,kFACC,YACD,CAEA,2EAEC,eAAgB,CADhB,eAED,CAEA,2EAEC,aAAc,CADd,eAED,CAEA,8SAIC,YACD,CAEA,2EAIC,kBAAmB,CADnB,qEAAsE,CAFtE,YAAa,CACb,6BAiBD,CAbC,4JACC,wEAAyE,CACzE,cACD,CAEA,8EACC,mBACD,CAEA,8EACC,mBAAoB,CACpB,gBACD,CAGD,yJAEC,oEAAqE,CAIrE,iBAAkB,CALlB,oBAAqB,CAOrB,cAAe,CAHf,aAAc,CAFd,YAAa,CAIb,iBAAkB,CAHlB,qBAKD,CAEA,6EACC,qBACD,CAEA,4EAEC,yEAA4E,CAC5E,YAAa,CAFb,eAOD,CAHC,gFACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},1185:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},7913:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}:root{--ck-form-header-height:44px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}[dir=ltr] .ck.ck-form__header>.ck-icon{margin-right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-form__header>.ck-icon{margin-left:var(--ck-spacing-medium)}.ck.ck-form__header .ck-form__header__label{--ck-font-size-base:15px;font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BAKD,CAHC,8CACC,WACD,CCPD,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAmBD,CAdC,uCAEE,qCAMF,CARA,uCAME,oCAEF,CAEA,4CACC,wBAAyB,CACzB,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},9529:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);font-size:inherit;font-weight:inherit;line-height:inherit;vertical-align:initial}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/highlightedtext/highlightedtext.css"],names:[],mappings:"AAKA,6BACC,+CAAgD,CAIhD,iBAAkB,CAFlB,mBAAoB,CACpB,mBAAoB,CAFpB,sBAID",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},7621:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},253:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},7801:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},4962:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0;transform:translate(calc(var(--ck-spacing-medium)*-1),-6px) scale(.75);transform-origin:100% 0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD+GD,CA1GA,2FCDE,qCD2GF,CAvGC,mEACC,UAoCD,CAlCC,gFACC,KAgCD,CAjCA,0FAIE,MAAS,CAGT,6DAA+D,CAF/D,oBA4BF,CAjCA,0FAWE,OAAU,CAEV,sEAA0E,CAD1E,uBAqBF,CAjCA,gFAkBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAH9C,mBAAoB,CAQpB,sBAAuB,CAKvB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,2XAGE,+HAYF,CAfA,2XAOE,wIAQF,CAfA,uWAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},5199:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}:root{--ck-list-button-padding:calc(var(--ck-line-height-base)*0.11*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*0.4*var(--ck-font-size-base))}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item>.ck-button{border-radius:0;min-height:unset;width:100%}[dir=ltr] .ck.ck-list__item>.ck-button{text-align:left}[dir=rtl] .ck.ck-list__item>.ck-button{text-align:right}.ck.ck-list__item>.ck-button{padding:var(--ck-list-button-padding)}.ck.ck-list__item>.ck-button:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item>.ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item>.ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item>.ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item>.ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item>.ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium);:not(.ck-hidden)~&{border-top:1px solid var(--ck-color-base-border)}}.ck-list .ck-list__group>.ck-label{font-size:11px;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium)}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEdD,MACC,qJAGD,CAEA,YCLC,eDUD,CALA,+DCDE,qCDMF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAGC,eAAgB,CAFhB,gBAAiB,CACjB,UAwCD,CA1CA,uCAME,eAoCF,CA1CA,uCAUE,gBAgCF,CA1CA,6BAgBC,qCA0BD,CAxBC,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,yBACC,oCAAqC,CAGrC,mBACC,gDACD,CAOD,CALC,mCACC,cAAe,CACf,eAAiB,CACjB,oFACD,CAGD,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},497:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-menu-bar{background:var(--ck-color-base-background);border:1px solid var(--ck-color-toolbar-border);display:flex;flex-wrap:wrap;gap:var(--ck-spacing-small);justify-content:flex-start;padding:var(--ck-spacing-small);width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubar.css"],names:[],mappings:"AAKA,gBAIC,0CAA2C,CAG3C,+CAAgD,CANhD,YAAa,CACb,cAAe,CAIf,2BAA4B,CAH5B,0BAA2B,CAE3B,+BAAgC,CAGhC,UACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},4:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-menu-bar__menu{display:block;font-size:inherit;position:relative}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level{max-width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenu.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenu.css"],names:[],mappings:"AAKA,sBACC,aAAc,CCCd,iBAAkB,CDAlB,iBACD,CCCC,kDACC,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},3344:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button{padding:var(--ck-list-button-padding);width:100%}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-button__label{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button.ck-disabled>.ck-button__label{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button{min-height:unset;padding:var(--ck-spacing-small) var(--ck-spacing-medium)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-button__label{line-height:unset;width:unset}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-icon{display:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button{border-radius:0}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(-90deg)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(90deg)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button.ck-disabled>.ck-menu-bar__menu__button__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAMC,mFACC,mBAAoB,CACpB,2BACD,CCIA,iDACC,qCAAsC,CACtC,UAuBD,CArBC,mEACC,WAAY,CACZ,eAAgB,CAChB,sBACD,CAEA,+ECdD,kCDgBC,CAGC,qFACC,oCACD,CAIA,qFACC,qCACD,CAOF,6EAEC,gBAAiB,CADjB,wDAgBD,CAbC,+FAEC,iBAAkB,CADlB,WAED,CAEA,mFACC,2BAA4B,CAC5B,4BACD,CAEA,sFACC,YACD,CAMD,mFACC,eAiDD,CA/CC,yFACC,wBAAyB,CACzB,eAKD,CAHC,qGACC,0DACD,CAID,iIACC,+DACD,CAEA,qHACC,mCASD,CAVA,+HAIE,wBAMF,CAVA,+HAQE,uBAEF,CAEA,iICrFD,kCDuFC,CAGC,+HAIC,sCAAuC,CAHvC,gCAID,CAIA,+HACC,+BAAgC,CAGhC,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},9481:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,":root{--ck-menu-bar-menu-item-min-width:18em}.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item{min-width:var(--ck-menu-bar-menu-item-min-width)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitem.css"],names:[],mappings:"AAKA,MACC,sCACD,CAEA,kDACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-item-min-width: 18em;
}

.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item {
	min-width: var(--ck-menu-bar-menu-item-min-width);
}
`],sourceRoot:""}]);const D=w},977:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button{border-radius:0}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container,.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container .ck-spinner{--ck-toolbar-spinner-size:20px}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__panel>ul>.ck-menu-bar__menu__item>.ck-menu-bar__menu__item__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitembutton.css"],names:[],mappings:"AASC,iEACC,eA0BD,CAxBC,0LAGC,8BACD,CAEA,uFAEC,4CAA+C,CAC/C,oCACD,CAMA,uEACC,wBAAyB,CACzB,eAKD,CAHC,mFACC,0DACD,CASD,uLACC,+DACD",sourcesContent:[`/*
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


`],sourceRoot:""}]);const D=w},9108:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,":root{--ck-menu-bar-menu-max-width:75vw;--ck-menu-bar-nested-menu-horizontal-offset:5px}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{max-width:var(--ck-menu-bar-menu-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw{bottom:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{bottom:auto;top:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{left:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{right:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{left:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en{bottom:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{right:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{bottom:0}:root{--ck-menu-bar-menu-panel-max-width:75vw}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{border-radius:0}.ck-rounded-corners .ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;height:fit-content;max-width:var(--ck-menu-bar-menu-panel-max-width)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{border-top-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{border-top-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne{border-bottom-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{border-bottom-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,iCAAkC,CAClC,+CACD,CAEA,mDAEC,2CAA4C,CAC5C,iBAAkB,CAFlB,yBAkDD,CA9CC,gLAEC,WACD,CAEA,gLAGC,WAAY,CADZ,QAED,CAEA,gLAEC,MACD,CAEA,gLAEC,OACD,CAEA,gLAEC,kEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CAEA,gLAEC,mEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CCpDD,MACC,uCACD,CAEA,mDCDC,eDmCD,CAlCA,6ICGE,qCD+BF,CAlCA,mDAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CETT,oCAA8B,CFU9B,kBAAmB,CACnB,iDA0BD,CAvBC,gLAEC,wBACD,CAEA,gLAEC,yBACD,CAEA,gLAEC,2BACD,CAEA,gLAEC,4BACD,CAEA,yDACC,YACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},3710:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-panel)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},991:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},5380:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-panel) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},8298:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-panel)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},2722:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
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

			& .ck-input-text {
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
`],sourceRoot:""}]);const D=w},8107:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input,[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{background:none;min-height:auto;min-width:auto;opacity:.5;padding:0}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty),[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:700}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/search/search.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/search/search.css"],names:[],mappings:"AASE,oFACC,iBAAkB,CAClB,OAAQ,CACR,0BASD,CAZA,8FAME,6BAMF,CAZA,8FAUE,8BAEF,CAEA,uDACC,iBAAkB,CAClB,OAAQ,CACR,0BACD,CAKC,oEACC,aACD,CAGA,qEACC,YACD,CChCH,MACC,8FACD,CAIE,+CACC,UACD,CAEA,gEACC,0FAoBD,CAlBC,+GACC,UAAW,CACX,mBACD,CAEA,0EACC,UAWD,CAJE,kMACC,2DACD,CAKH,iEACC,sGAwCD,CAtCC,6FACC,6HACD,CAEA,mFAIC,eAAgB,CAFhB,eAAgB,CADhB,cAAe,CAIf,UAAW,CACX,SAaD,CAnBA,6FASE,8BAUF,CAnBA,6FAaE,6BAMF,CAHC,yFACC,SACD,CAGD,2EACC,UAWD,CAZA,oMAUE,4DAEF,CAIF,kCACC,cAkBD,CAhBC,mDAEC,wDAAyD,CADzD,UAcD,CAXC,qDACC,kBACD,CAEA,oEACC,eACD,CAEA,mEACC,mCACD",sourcesContent:[`/*
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

`],sourceRoot:""}]);const D=w},109:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{left:0;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:1}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{animation:rotate 1.5s linear infinite}.ck.ck-spinner,.ck.ck-spinner-container{height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}.ck.ck-spinner{border:2px solid var(--ck-color-text);border-radius:50%;border-top:2px solid transparent}@keyframes rotate{to{transform:rotate(1turn)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/spinner/spinner.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/spinner/spinner.css"],names:[],mappings:"AASA,yBACC,aAAc,CACd,iBACD,CAEA,eAGC,MAAO,CAEP,aAAc,CAJd,iBAAkB,CAGlB,OAAQ,CAFR,OAAQ,CAIR,0BAA2B,CAC3B,SACD,CCjBA,MACC,8BACD,CAEA,yBAGC,qCACD,CAEA,wCAJC,qCAAsC,CADtC,oCAWD,CANA,eAKC,qCAA6B,CAF7B,iBAAkB,CAElB,gCACD,CAEA,kBACC,GACC,uBACD,CACD",sourcesContent:[`/*
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

`],sourceRoot:""}]);const D=w},1671:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck-textarea{overflow-x:hidden}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/textarea/textarea.css"],names:[],mappings:"AASA,aACC,iBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},2710:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},9677:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},9205:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);z-index:calc(var(--ck-z-dialog) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{display:inline-block;max-width:200px;padding:var(--ck-tooltip-text-padding) 0;white-space:break-spaces}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDTnC,sCACD,CCUC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAEA,wEAEC,oBAAqB,CAErB,eAAgB,CADhB,wCAAyC,CAFzC,wBAID,CArBD,gCAwBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	z-index: calc( var(--ck-z-dialog) + 100 );
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
`],sourceRoot:""}]);const D=w},7676:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-panel:calc(var(--ck-z-default) + 999);--ck-z-dialog:9999}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-panel) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-dialog-background:var(--ck-custom-background);--ck-color-dialog-form-header-border:var(--ck-custom-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-color-light-red:#fcc;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CAA+C,CAC/C,kBACD,CCDA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,wDAAiE,CACjE,4DAAmE,CAInE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAyD,CAIzD,yBAAgD,CChHhD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJgHD,CI1GA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
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

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
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
`],sourceRoot:""}]);const D=w},695:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
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

		background-color: var(--ck-color-widget-editable-focus-background);
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
`],sourceRoot:""}]);const D=w},4095:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const D=w},8508:(b,C,f)=>{f.d(C,{A:()=>D});var y=f(9372),x=f.n(y),v=f(935),w=f.n(v)()(x());w.push([b.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
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

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

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
`],sourceRoot:""}]);const D=w},935:b=>{b.exports=function(C){var f=[];return f.toString=function(){return this.map(function(y){var x=C(y);return y[2]?"@media ".concat(y[2]," {").concat(x,"}"):x}).join("")},f.i=function(y,x,v){typeof y=="string"&&(y=[[null,y,""]]);var w={};if(v)for(var D=0;D<this.length;D++){var M=this[D][0];M!=null&&(w[M]=!0)}for(var P=0;P<y.length;P++){var L=[].concat(y[P]);v&&w[L[0]]||(x&&(L[2]?L[2]="".concat(x," and ").concat(L[2]):L[2]=x),f.push(L))}},f}},9372:b=>{function C(y,x){return function(v){if(Array.isArray(v))return v}(y)||function(v,w){var D=v&&(typeof Symbol<"u"&&v[Symbol.iterator]||v["@@iterator"]);if(D!=null){var M,P,L=[],F=!0,j=!1;try{for(D=D.call(v);!(F=(M=D.next()).done)&&(L.push(M.value),!w||L.length!==w);F=!0);}catch(R){j=!0,P=R}finally{try{F||D.return==null||D.return()}finally{if(j)throw P}}return L}}(y,x)||function(v,w){if(v){if(typeof v=="string")return f(v,w);var D=Object.prototype.toString.call(v).slice(8,-1);if(D==="Object"&&v.constructor&&(D=v.constructor.name),D==="Map"||D==="Set")return Array.from(v);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return f(v,w)}}(y,x)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function f(y,x){(x==null||x>y.length)&&(x=y.length);for(var v=0,w=new Array(x);v<x;v++)w[v]=y[v];return w}b.exports=function(y){var x=C(y,4),v=x[1],w=x[3];if(!w)return v;if(typeof btoa=="function"){var D=btoa(unescape(encodeURIComponent(JSON.stringify(w)))),M="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(D),P="/*# ".concat(M," */"),L=w.sources.map(function(F){return"/*# sourceURL=".concat(w.sourceRoot||"").concat(F," */")});return[v].concat(L).concat([P]).join(`
`)}return[v].join(`
`)}},2591:(b,C,f)=>{var y,x=function(){return y===void 0&&(y=!!(window&&document&&document.all&&!window.atob)),y},v=function(){var G={};return function(H){if(G[H]===void 0){var T=document.querySelector(H);if(window.HTMLIFrameElement&&T instanceof window.HTMLIFrameElement)try{T=T.contentDocument.head}catch{T=null}G[H]=T}return G[H]}}(),w=[];function D(G){for(var H=-1,T=0;T<w.length;T++)if(w[T].identifier===G){H=T;break}return H}function M(G,H){for(var T={},W=[],de=0;de<G.length;de++){var J=G[de],ge=H.base?J[0]+H.base:J[0],Te=T[ge]||0,be="".concat(ge," ").concat(Te);T[ge]=Te+1;var Q=D(be),te={css:J[1],media:J[2],sourceMap:J[3]};Q!==-1?(w[Q].references++,w[Q].updater(te)):w.push({identifier:be,updater:K(te,H),references:1}),W.push(be)}return W}function P(G){var H=document.createElement("style"),T=G.attributes||{};if(T.nonce===void 0){var W=f.nc;W&&(T.nonce=W)}if(Object.keys(T).forEach(function(J){H.setAttribute(J,T[J])}),typeof G.insert=="function")G.insert(H);else{var de=v(G.insert||"head");if(!de)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");de.appendChild(H)}return H}var L,F=(L=[],function(G,H){return L[G]=H,L.filter(Boolean).join(`
`)});function j(G,H,T,W){var de=T?"":W.media?"@media ".concat(W.media," {").concat(W.css,"}"):W.css;if(G.styleSheet)G.styleSheet.cssText=F(H,de);else{var J=document.createTextNode(de),ge=G.childNodes;ge[H]&&G.removeChild(ge[H]),ge.length?G.insertBefore(J,ge[H]):G.appendChild(J)}}function R(G,H,T){var W=T.css,de=T.media,J=T.sourceMap;if(de?G.setAttribute("media",de):G.removeAttribute("media"),J&&typeof btoa<"u"&&(W+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(J))))," */")),G.styleSheet)G.styleSheet.cssText=W;else{for(;G.firstChild;)G.removeChild(G.firstChild);G.appendChild(document.createTextNode(W))}}var V=null,$=0;function K(G,H){var T,W,de;if(H.singleton){var J=$++;T=V||(V=P(H)),W=j.bind(null,T,J,!1),de=j.bind(null,T,J,!0)}else T=P(H),W=R.bind(null,T,H),de=function(){(function(ge){if(ge.parentNode===null)return!1;ge.parentNode.removeChild(ge)})(T)};return W(G),function(ge){if(ge){if(ge.css===G.css&&ge.media===G.media&&ge.sourceMap===G.sourceMap)return;W(G=ge)}else de()}}b.exports=function(G,H){(H=H||{}).singleton||typeof H.singleton=="boolean"||(H.singleton=x());var T=M(G=G||[],H);return function(W){if(W=W||[],Object.prototype.toString.call(W)==="[object Array]"){for(var de=0;de<T.length;de++){var J=D(T[de]);w[J].references--}for(var ge=M(W,H),Te=0;Te<T.length;Te++){var be=D(T[Te]);w[be].references===0&&(w[be].updater(),w.splice(be,1))}T=ge}}}}},g={};function m(b){var C=g[b];if(C!==void 0)return C.exports;var f=g[b]={id:b,exports:{}};return u[b](f,f.exports,m),f.exports}m.n=b=>{var C=b&&b.__esModule?()=>b.default:()=>b;return m.d(C,{a:C}),C},m.d=(b,C)=>{for(var f in C)m.o(C,f)&&!m.o(b,f)&&Object.defineProperty(b,f,{enumerable:!0,get:C[f]})},m.o=(b,C)=>Object.prototype.hasOwnProperty.call(b,C),m.nc=void 0;var _={};return(()=>{function b({emitter:o,activator:e,callback:t,contextElements:n}){o.listenTo(document,"mousedown",(i,r)=>{if(!e())return;const a=typeof r.composedPath=="function"?r.composedPath():[],c=typeof n=="function"?n():n;for(const d of c)if(d.contains(r.target)||a.includes(d))return;t()})}function C(o){return class extends o{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...e){super(...e),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function f({view:o}){o.listenTo(o.element,"submit",(e,t)=>{t.preventDefault(),o.fire("submit")},{useCapture:!0})}function y({keystrokeHandler:o,focusTracker:e,gridItems:t,numberOfColumns:n,uiLanguageDirection:i}){const r=typeof n=="number"?()=>n:n;function a(h){return p=>{const k=t.find(I=>I.element===e.focusedElement),A=t.getIndex(k),E=h(A,t);t.get(E).focus(),p.stopPropagation(),p.preventDefault()}}function c(h,p){return h===p-1?0:h+1}function d(h,p){return h===0?p-1:h-1}o.set("arrowright",a((h,p)=>i==="rtl"?d(h,p.length):c(h,p.length))),o.set("arrowleft",a((h,p)=>i==="rtl"?c(h,p.length):d(h,p.length))),o.set("arrowup",a((h,p)=>{let k=h-r();return k<0&&(k=h+r()*Math.floor(p.length/r()),k>p.length-1&&(k-=r())),k})),o.set("arrowdown",a((h,p)=>{let k=h+r();return k>p.length-1&&(k=h%r()),k}))}m.d(_,{default:()=>gh});const x=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var v;const w={isMac:D(x),isWindows:(v=x,v.indexOf("windows")>-1),isGecko:function(o){return!!o.match(/gecko\/\d+/)}(x),isSafari:function(o){return o.indexOf(" applewebkit/")>-1&&o.indexOf("chrome")===-1}(x),isiOS:function(o){return!!o.match(/iphone|ipad/i)||D(o)&&navigator.maxTouchPoints>0}(x),isAndroid:function(o){return o.indexOf("android")>-1}(x),isBlink:function(o){return o.indexOf("chrome/")>-1&&o.indexOf("edge/")<0}(x),features:{isRegExpUnicodePropertySupported:function(){let o=!1;try{o="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return o}()}};function D(o){return o.indexOf("macintosh")>-1}function M(o,e,t,n){t=t||function(d,h){return d===h};const i=Array.isArray(o)?o:Array.prototype.slice.call(o),r=Array.isArray(e)?e:Array.prototype.slice.call(e),a=function(d,h,p){const k=P(d,h,p);if(k===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const A=L(d,k),E=L(h,k),I=P(A,E,p),S=d.length-I,B=h.length-I;return{firstIndex:k,lastIndexOld:S,lastIndexNew:B}}(i,r,t);return n?function(d,h){const{firstIndex:p,lastIndexOld:k,lastIndexNew:A}=d;if(p===-1)return Array(h).fill("equal");let E=[];return p>0&&(E=E.concat(Array(p).fill("equal"))),A-p>0&&(E=E.concat(Array(A-p).fill("insert"))),k-p>0&&(E=E.concat(Array(k-p).fill("delete"))),A<h&&(E=E.concat(Array(h-A).fill("equal"))),E}(a,r.length):function(d,h){const p=[],{firstIndex:k,lastIndexOld:A,lastIndexNew:E}=h;return E-k>0&&p.push({index:k,type:"insert",values:d.slice(k,E)}),A-k>0&&p.push({index:k+(E-k),type:"delete",howMany:A-k}),p}(r,a)}function P(o,e,t){for(let n=0;n<Math.max(o.length,e.length);n++)if(o[n]===void 0||e[n]===void 0||!t(o[n],e[n]))return n;return-1}function L(o,e){return o.slice(e).reverse()}function F(o,e,t){t=t||function(S,B){return S===B};const n=o.length,i=e.length;if(n>200||i>200||n+i>300)return F.fastDiff(o,e,t,!0);let r,a;if(i<n){const S=o;o=e,e=S,r="delete",a="insert"}else r="insert",a="delete";const c=o.length,d=e.length,h=d-c,p={},k={};function A(S){const B=(k[S-1]!==void 0?k[S-1]:-1)+1,O=k[S+1]!==void 0?k[S+1]:-1,q=B>O?-1:1;p[S+q]&&(p[S]=p[S+q].slice(0)),p[S]||(p[S]=[]),p[S].push(B>O?r:a);let Z=Math.max(B,O),oe=Z-S;for(;oe<c&&Z<d&&t(o[oe],e[Z]);)oe++,Z++,p[S].push("equal");return Z}let E,I=0;do{for(E=-I;E<h;E++)k[E]=A(E);for(E=h+I;E>h;E--)k[E]=A(E);k[h]=A(h),I++}while(k[h]!==d);return p[h].slice(1)}F.fastDiff=M;const j=function(){return function o(){o.called=!0}};class R{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=j(),this.off=j()}}const V=new Array(256).fill("").map((o,e)=>("0"+e.toString(16)).slice(-2));function $(){const o=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+V[255&o]+V[o>>8&255]+V[o>>16&255]+V[o>>24&255]+V[255&e]+V[e>>8&255]+V[e>>16&255]+V[e>>24&255]+V[255&t]+V[t>>8&255]+V[t>>16&255]+V[t>>24&255]+V[255&n]+V[n>>8&255]+V[n>>16&255]+V[n>>24&255]}const K={get(o="normal"){return typeof o!="number"?this[o]||this.normal:o},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function G(o,e){const t=K.get(e.priority);for(let n=0;n<o.length;n++)if(K.get(o[n].priority)<t)return void o.splice(n,0,e);o.push(e)}const H="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class T extends Error{constructor(e,t,n){super(function(i,r){const a=new WeakSet,c=(p,k)=>{if(typeof k=="object"&&k!==null){if(a.has(k))return`[object ${k.constructor.name}]`;a.add(k)}return k},d=r?` ${JSON.stringify(r,c)}`:"",h=J(i);return i+d+h}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new T(e.message,t);throw n.stack=e.stack,n}}function W(o,e){console.warn(...ge(o,e))}function de(o,e){console.error(...ge(o,e))}function J(o){return`
Read more: ${H}#error-${o}`}function ge(o,e){const t=J(o);return e?[o,e,t]:[o,t]}const Te="41.3.1",be=new Date(2024,3,16);if(globalThis.CKEDITOR_VERSION)throw new T("ckeditor-duplicated-modules",null);globalThis.CKEDITOR_VERSION=Te;const Q=Symbol("listeningTo"),te=Symbol("emitterId"),ve=Symbol("delegations"),vt=ze(Object);function ze(o){return o?class extends o{on(e,t,n){this.listenTo(this,e,t,n)}once(e,t,n){let i=!1;this.listenTo(this,e,(r,...a)=>{i||(i=!0,r.off(),t.call(this,r,...a))},n)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,n,i={}){let r,a;this[Q]||(this[Q]={});const c=this[Q];Pt(e)||Gt(e);const d=Pt(e);(r=c[d])||(r=c[d]={emitter:e,callbacks:{}}),(a=r.callbacks[t])||(a=r.callbacks[t]=[]),a.push(n),function(h,p,k,A,E){p._addEventListener?p._addEventListener(k,A,E):h._addEventListener.call(p,k,A,E)}(this,e,t,n,i)}stopListening(e,t,n){const i=this[Q];let r=e&&Pt(e);const a=i&&r?i[r]:void 0,c=a&&t?a.callbacks[t]:void 0;if(!(!i||e&&!a||t&&!c))if(n)ie(this,e,t,n),c.indexOf(n)!==-1&&(c.length===1?delete a.callbacks[t]:ie(this,e,t,n));else if(c){for(;n=c.pop();)ie(this,e,t,n);delete a.callbacks[t]}else if(a){for(t in a.callbacks)this.stopListening(e,t);delete i[r]}else{for(r in i)this.stopListening(i[r].emitter);delete this[Q]}}fire(e,...t){try{const n=e instanceof R?e:new R(this,e),i=n.name;let r=bt(this,i);if(n.path.push(this),r){const c=[n,...t];r=Array.from(r);for(let d=0;d<r.length&&(r[d].callback.apply(this,c),n.off.called&&(delete n.off.called,this._removeEventListener(i,r[d].callback)),!n.stop.called);d++);}const a=this[ve];if(a){const c=a.get(i),d=a.get("*");c&&lt(c,n,t),d&&lt(d,n,t)}return n.return}catch(n){T.rethrowUnexpectedError(n,this)}}delegate(...e){return{to:(t,n)=>{this[ve]||(this[ve]=new Map),e.forEach(i=>{const r=this[ve].get(i);r?r.set(t,n):this[ve].set(i,new Map([[t,n]]))})}}}stopDelegating(e,t){if(this[ve])if(e)if(t){const n=this[ve].get(e);n&&n.delete(t)}else this[ve].delete(e);else this[ve].clear()}_addEventListener(e,t,n){(function(a,c){const d=Ce(a);if(d[c])return;let h=c,p=null;const k=[];for(;h!==""&&!d[h];)d[h]={callbacks:[],childEvents:[]},k.push(d[h]),p&&d[h].childEvents.push(p),p=h,h=h.substr(0,h.lastIndexOf(":"));if(h!==""){for(const A of k)A.callbacks=d[h].callbacks.slice();d[h].childEvents.push(p)}})(this,e);const i=Ge(this,e),r={callback:t,priority:K.get(n.priority)};for(const a of i)G(a,r)}_removeEventListener(e,t){const n=Ge(this,e);for(const i of n)for(let r=0;r<i.length;r++)i[r].callback==t&&(i.splice(r,1),r--)}}:vt}function Gt(o,e){o[te]||(o[te]=e||$())}function Pt(o){return o[te]}function Ce(o){return o._events||Object.defineProperty(o,"_events",{value:{}}),o._events}function Ge(o,e){const t=Ce(o)[e];if(!t)return[];let n=[t.callbacks];for(let i=0;i<t.childEvents.length;i++){const r=Ge(o,t.childEvents[i]);n=n.concat(r)}return n}function bt(o,e){let t;return o._events&&(t=o._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?bt(o,e.substr(0,e.lastIndexOf(":"))):null}function lt(o,e,t){for(let[n,i]of o){i?typeof i=="function"&&(i=i(e.name)):i=e.name;const r=new R(e.source,i);r.path=[...e.path],n.fire(r,...t)}}function ie(o,e,t,n){e._removeEventListener?e._removeEventListener(t,n):o._removeEventListener.call(e,t,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{ze[o]=vt.prototype[o]});const ke=function(o){var e=typeof o;return o!=null&&(e=="object"||e=="function")},ye=Symbol("observableProperties"),xe=Symbol("boundObservables"),Ve=Symbol("boundProperties"),Ye=Symbol("decoratedMethods"),z=Symbol("decoratedOriginal"),U=Y(ze());function Y(o){return o?class extends o{set(e,t){if(ke(e))return void Object.keys(e).forEach(i=>{this.set(i,e[i])},this);ce(this);const n=this[ye];if(e in this&&!n.has(e))throw new T("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>n.get(e),set(i){const r=n.get(e);let a=this.fire(`set:${e}`,e,i,r);a===void 0&&(a=i),r===a&&n.has(e)||(n.set(e,a),this.fire(`change:${e}`,e,a,r))}}),this[e]=t}bind(...e){if(!e.length||!Se(e))throw new T("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new T("observable-bind-duplicate-properties",this);ce(this);const t=this[Ve];e.forEach(i=>{if(t.has(i))throw new T("observable-bind-rebind",this)});const n=new Map;return e.forEach(i=>{const r={property:i,to:[]};t.set(i,r),n.set(i,r)}),{to:se,toMany:Ae,_observable:this,_bindProperties:e,_to:[],_bindings:n}}unbind(...e){if(!this[ye])return;const t=this[Ve],n=this[xe];if(e.length){if(!Se(e))throw new T("observable-unbind-wrong-properties",this);e.forEach(i=>{const r=t.get(i);r&&(r.to.forEach(([a,c])=>{const d=n.get(a),h=d[c];h.delete(r),h.size||delete d[c],Object.keys(d).length||(n.delete(a),this.stopListening(a,"change"))}),t.delete(i))})}else n.forEach((i,r)=>{this.stopListening(r,"change")}),n.clear(),t.clear()}decorate(e){ce(this);const t=this[e];if(!t)throw new T("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(n,i)=>{n.return=t.apply(this,i)}),this[e]=function(...n){return this.fire(e,n)},this[e][z]=t,this[Ye]||(this[Ye]=[]),this[Ye].push(e)}stopListening(e,t,n){if(!e&&this[Ye]){for(const i of this[Ye])this[i]=this[i][z];delete this[Ye]}super.stopListening(e,t,n)}}:U}function ce(o){o[ye]||(Object.defineProperty(o,ye,{value:new Map}),Object.defineProperty(o,xe,{value:new Map}),Object.defineProperty(o,Ve,{value:new Map}))}function se(...o){const e=function(...r){if(!r.length)throw new T("observable-bind-to-parse-error",null);const a={to:[]};let c;return typeof r[r.length-1]=="function"&&(a.callback=r.pop()),r.forEach(d=>{if(typeof d=="string")c.properties.push(d);else{if(typeof d!="object")throw new T("observable-bind-to-parse-error",null);c={observable:d,properties:[]},a.to.push(c)}}),a}(...o),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new T("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new T("observable-bind-to-extra-callback",this);var i;e.to.forEach(r=>{if(r.properties.length&&r.properties.length!==n)throw new T("observable-bind-to-properties-length",this);r.properties.length||(r.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),i=this._observable,this._to.forEach(r=>{const a=i[xe];let c;a.get(r.observable)||i.listenTo(r.observable,"change",(d,h)=>{c=a.get(r.observable)[h],c&&c.forEach(p=>{_e(i,p.property)})})}),function(r){let a;r._bindings.forEach((c,d)=>{r._to.forEach(h=>{a=h.properties[c.callback?0:r._bindProperties.indexOf(d)],c.to.push([h.observable,a]),function(p,k,A,E){const I=p[xe],S=I.get(A),B=S||{};B[E]||(B[E]=new Set),B[E].add(k),S||I.set(A,B)}(r._observable,c,h.observable,a)})})}(this),this._bindProperties.forEach(r=>{_e(this._observable,r)})}function Ae(o,e,t){if(this._bindings.size>1)throw new T("observable-bind-to-many-not-one-binding",this);this.to(...function(n,i){const r=n.map(a=>[a,i]);return Array.prototype.concat.apply([],r)}(o,e),t)}function Se(o){return o.every(e=>typeof e=="string")}function _e(o,e){const t=o[Ve].get(e);let n;t.callback?n=t.callback.apply(o,t.to.map(i=>i[0][i[1]])):(n=t.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(o,e)?o[e]=n:o.set(e,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{Y[o]=U.prototype[o]});class Ee{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}function ue(o){let e=0;for(const t of o)e++;return e}function we(o,e){const t=Math.min(o.length,e.length);for(let n=0;n<t;n++)if(o[n]!=e[n])return n;return o.length==e.length?"same":o.length<e.length?"prefix":"extension"}function ae(o){return!(!o||!o[Symbol.iterator])}const ne=typeof gi=="object"&&gi&&gi.Object===Object&&gi;var ee=typeof self=="object"&&self&&self.Object===Object&&self;const Be=ne||ee||Function("return this")(),Oe=Be.Symbol;var et=Object.prototype,Tt=et.hasOwnProperty,xn=et.toString,Rn=Oe?Oe.toStringTag:void 0;const Ia=function(o){var e=Tt.call(o,Rn),t=o[Rn];try{o[Rn]=void 0;var n=!0}catch{}var i=xn.call(o);return n&&(e?o[Rn]=t:delete o[Rn]),i};var Ai=Object.prototype.toString;const Sa=function(o){return Ai.call(o)};var sn=Oe?Oe.toStringTag:void 0;const Kt=function(o){return o==null?o===void 0?"[object Undefined]":"[object Null]":sn&&sn in Object(o)?Ia(o):Sa(o)},an=Array.isArray,zn=function(o){return o!=null&&typeof o=="object"},Gg=function(o){return typeof o=="string"||!an(o)&&zn(o)&&Kt(o)=="[object String]"};function jn(o,e,t={},n=[]){const i=t&&t.xmlns,r=i?o.createElementNS(i,e):o.createElement(e);for(const a in t)r.setAttribute(a,t[a]);!Gg(n)&&ae(n)||(n=[n]);for(let a of n)Gg(a)&&(a=o.createTextNode(a)),r.appendChild(a);return r}const Kg=function(o,e){return function(t){return o(e(t))}},td=Kg(Object.getPrototypeOf,Object);var jx=Function.prototype,Fx=Object.prototype,Yg=jx.toString,Vx=Fx.hasOwnProperty,Ux=Yg.call(Object);const En=function(o){if(!zn(o)||Kt(o)!="[object Object]")return!1;var e=td(o);if(e===null)return!0;var t=Vx.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Yg.call(t)==Ux},Hx=function(){this.__data__=[],this.size=0},ss=function(o,e){return o===e||o!=o&&e!=e},Ta=function(o,e){for(var t=o.length;t--;)if(ss(o[t][0],e))return t;return-1};var $x=Array.prototype.splice;const Wx=function(o){var e=this.__data__,t=Ta(e,o);return!(t<0)&&(t==e.length-1?e.pop():$x.call(e,t,1),--this.size,!0)},qx=function(o){var e=this.__data__,t=Ta(e,o);return t<0?void 0:e[t][1]},Gx=function(o){return Ta(this.__data__,o)>-1},Kx=function(o,e){var t=this.__data__,n=Ta(t,o);return n<0?(++this.size,t.push([o,e])):t[n][1]=e,this};function rr(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}rr.prototype.clear=Hx,rr.prototype.delete=Wx,rr.prototype.get=qx,rr.prototype.has=Gx,rr.prototype.set=Kx;const Ma=rr,Yx=function(){this.__data__=new Ma,this.size=0},Qx=function(o){var e=this.__data__,t=e.delete(o);return this.size=e.size,t},Zx=function(o){return this.__data__.get(o)},Jx=function(o){return this.__data__.has(o)},Ci=function(o){if(!ke(o))return!1;var e=Kt(o);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},nd=Be["__core-js_shared__"];var Qg=function(){var o=/[^.]+$/.exec(nd&&nd.keys&&nd.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}();const Xx=function(o){return!!Qg&&Qg in o};var eE=Function.prototype.toString;const vi=function(o){if(o!=null){try{return eE.call(o)}catch{}try{return o+""}catch{}}return""};var tE=/^\[object .+?Constructor\]$/,nE=Function.prototype,oE=Object.prototype,iE=nE.toString,rE=oE.hasOwnProperty,sE=RegExp("^"+iE.call(rE).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const aE=function(o){return!(!ke(o)||Xx(o))&&(Ci(o)?sE:tE).test(vi(o))},cE=function(o,e){return o==null?void 0:o[e]},yi=function(o,e){var t=cE(o,e);return aE(t)?t:void 0},as=yi(Be,"Map"),cs=yi(Object,"create"),lE=function(){this.__data__=cs?cs(null):{},this.size=0},dE=function(o){var e=this.has(o)&&delete this.__data__[o];return this.size-=e?1:0,e};var uE=Object.prototype.hasOwnProperty;const hE=function(o){var e=this.__data__;if(cs){var t=e[o];return t==="__lodash_hash_undefined__"?void 0:t}return uE.call(e,o)?e[o]:void 0};var gE=Object.prototype.hasOwnProperty;const pE=function(o){var e=this.__data__;return cs?e[o]!==void 0:gE.call(e,o)},mE=function(o,e){var t=this.__data__;return this.size+=this.has(o)?0:1,t[o]=cs&&e===void 0?"__lodash_hash_undefined__":e,this};function sr(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}sr.prototype.clear=lE,sr.prototype.delete=dE,sr.prototype.get=hE,sr.prototype.has=pE,sr.prototype.set=mE;const Zg=sr,fE=function(){this.size=0,this.__data__={hash:new Zg,map:new(as||Ma),string:new Zg}},kE=function(o){var e=typeof o;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?o!=="__proto__":o===null},Ba=function(o,e){var t=o.__data__;return kE(e)?t[typeof e=="string"?"string":"hash"]:t.map},bE=function(o){var e=Ba(this,o).delete(o);return this.size-=e?1:0,e},_E=function(o){return Ba(this,o).get(o)},wE=function(o){return Ba(this,o).has(o)},AE=function(o,e){var t=Ba(this,o),n=t.size;return t.set(o,e),this.size+=t.size==n?0:1,this};function ar(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}ar.prototype.clear=fE,ar.prototype.delete=bE,ar.prototype.get=_E,ar.prototype.has=wE,ar.prototype.set=AE;const Pa=ar,CE=function(o,e){var t=this.__data__;if(t instanceof Ma){var n=t.__data__;if(!as||n.length<199)return n.push([o,e]),this.size=++t.size,this;t=this.__data__=new Pa(n)}return t.set(o,e),this.size=t.size,this};function cr(o){var e=this.__data__=new Ma(o);this.size=e.size}cr.prototype.clear=Yx,cr.prototype.delete=Qx,cr.prototype.get=Zx,cr.prototype.has=Jx,cr.prototype.set=CE;const lr=cr,vE=function(o,e){for(var t=-1,n=o==null?0:o.length;++t<n&&e(o[t],t,o)!==!1;);return o},Na=function(){try{var o=yi(Object,"defineProperty");return o({},"",{}),o}catch{}}(),Oa=function(o,e,t){e=="__proto__"&&Na?Na(o,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):o[e]=t};var yE=Object.prototype.hasOwnProperty;const od=function(o,e,t){var n=o[e];yE.call(o,e)&&ss(n,t)&&(t!==void 0||e in o)||Oa(o,e,t)},dr=function(o,e,t,n){var i=!t;t||(t={});for(var r=-1,a=e.length;++r<a;){var c=e[r],d=n?n(t[c],o[c],c,t,o):void 0;d===void 0&&(d=o[c]),i?Oa(t,c,d):od(t,c,d)}return t},xE=function(o,e){for(var t=-1,n=Array(o);++t<o;)n[t]=e(t);return n},Jg=function(o){return zn(o)&&Kt(o)=="[object Arguments]"};var Xg=Object.prototype,EE=Xg.hasOwnProperty,DE=Xg.propertyIsEnumerable;const La=Jg(function(){return arguments}())?Jg:function(o){return zn(o)&&EE.call(o,"callee")&&!DE.call(o,"callee")},IE=function(){return!1};var ep=l&&!l.nodeType&&l,tp=ep&&!0&&s&&!s.nodeType&&s,np=tp&&tp.exports===ep?Be.Buffer:void 0;const ls=(np?np.isBuffer:void 0)||IE;var SE=/^(?:0|[1-9]\d*)$/;const Ra=function(o,e){var t=typeof o;return!!(e=e??9007199254740991)&&(t=="number"||t!="symbol"&&SE.test(o))&&o>-1&&o%1==0&&o<e},id=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991};var St={};St["[object Float32Array]"]=St["[object Float64Array]"]=St["[object Int8Array]"]=St["[object Int16Array]"]=St["[object Int32Array]"]=St["[object Uint8Array]"]=St["[object Uint8ClampedArray]"]=St["[object Uint16Array]"]=St["[object Uint32Array]"]=!0,St["[object Arguments]"]=St["[object Array]"]=St["[object ArrayBuffer]"]=St["[object Boolean]"]=St["[object DataView]"]=St["[object Date]"]=St["[object Error]"]=St["[object Function]"]=St["[object Map]"]=St["[object Number]"]=St["[object Object]"]=St["[object RegExp]"]=St["[object Set]"]=St["[object String]"]=St["[object WeakMap]"]=!1;const TE=function(o){return zn(o)&&id(o.length)&&!!St[Kt(o)]},rd=function(o){return function(e){return o(e)}};var op=l&&!l.nodeType&&l,ds=op&&!0&&s&&!s.nodeType&&s,sd=ds&&ds.exports===op&&ne.process;const ur=function(){try{var o=ds&&ds.require&&ds.require("util").types;return o||sd&&sd.binding&&sd.binding("util")}catch{}}();var ip=ur&&ur.isTypedArray;const ad=ip?rd(ip):TE;var ME=Object.prototype.hasOwnProperty;const rp=function(o,e){var t=an(o),n=!t&&La(o),i=!t&&!n&&ls(o),r=!t&&!n&&!i&&ad(o),a=t||n||i||r,c=a?xE(o.length,String):[],d=c.length;for(var h in o)!e&&!ME.call(o,h)||a&&(h=="length"||i&&(h=="offset"||h=="parent")||r&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||Ra(h,d))||c.push(h);return c};var BE=Object.prototype;const cd=function(o){var e=o&&o.constructor;return o===(typeof e=="function"&&e.prototype||BE)},PE=Kg(Object.keys,Object);var NE=Object.prototype.hasOwnProperty;const OE=function(o){if(!cd(o))return PE(o);var e=[];for(var t in Object(o))NE.call(o,t)&&t!="constructor"&&e.push(t);return e},za=function(o){return o!=null&&id(o.length)&&!Ci(o)},us=function(o){return za(o)?rp(o):OE(o)},LE=function(o,e){return o&&dr(e,us(e),o)},RE=function(o){var e=[];if(o!=null)for(var t in Object(o))e.push(t);return e};var zE=Object.prototype.hasOwnProperty;const jE=function(o){if(!ke(o))return RE(o);var e=cd(o),t=[];for(var n in o)(n!="constructor"||!e&&zE.call(o,n))&&t.push(n);return t},hr=function(o){return za(o)?rp(o,!0):jE(o)},FE=function(o,e){return o&&dr(e,hr(e),o)};var sp=l&&!l.nodeType&&l,ap=sp&&!0&&s&&!s.nodeType&&s,cp=ap&&ap.exports===sp?Be.Buffer:void 0,lp=cp?cp.allocUnsafe:void 0;const dp=function(o,e){if(e)return o.slice();var t=o.length,n=lp?lp(t):new o.constructor(t);return o.copy(n),n},up=function(o,e){var t=-1,n=o.length;for(e||(e=Array(n));++t<n;)e[t]=o[t];return e},VE=function(o,e){for(var t=-1,n=o==null?0:o.length,i=0,r=[];++t<n;){var a=o[t];e(a,t,o)&&(r[i++]=a)}return r},hp=function(){return[]};var UE=Object.prototype.propertyIsEnumerable,gp=Object.getOwnPropertySymbols;const ld=gp?function(o){return o==null?[]:(o=Object(o),VE(gp(o),function(e){return UE.call(o,e)}))}:hp,HE=function(o,e){return dr(o,ld(o),e)},pp=function(o,e){for(var t=-1,n=e.length,i=o.length;++t<n;)o[i+t]=e[t];return o},mp=Object.getOwnPropertySymbols?function(o){for(var e=[];o;)pp(e,ld(o)),o=td(o);return e}:hp,$E=function(o,e){return dr(o,mp(o),e)},fp=function(o,e,t){var n=e(o);return an(o)?n:pp(n,t(o))},dd=function(o){return fp(o,us,ld)},WE=function(o){return fp(o,hr,mp)},ud=yi(Be,"DataView"),hd=yi(Be,"Promise"),gd=yi(Be,"Set"),pd=yi(Be,"WeakMap");var kp="[object Map]",bp="[object Promise]",_p="[object Set]",wp="[object WeakMap]",Ap="[object DataView]",qE=vi(ud),GE=vi(as),KE=vi(hd),YE=vi(gd),QE=vi(pd),xi=Kt;(ud&&xi(new ud(new ArrayBuffer(1)))!=Ap||as&&xi(new as)!=kp||hd&&xi(hd.resolve())!=bp||gd&&xi(new gd)!=_p||pd&&xi(new pd)!=wp)&&(xi=function(o){var e=Kt(o),t=e=="[object Object]"?o.constructor:void 0,n=t?vi(t):"";if(n)switch(n){case qE:return Ap;case GE:return kp;case KE:return bp;case YE:return _p;case QE:return wp}return e});const hs=xi;var ZE=Object.prototype.hasOwnProperty;const JE=function(o){var e=o.length,t=new o.constructor(e);return e&&typeof o[0]=="string"&&ZE.call(o,"index")&&(t.index=o.index,t.input=o.input),t},ja=Be.Uint8Array,md=function(o){var e=new o.constructor(o.byteLength);return new ja(e).set(new ja(o)),e},XE=function(o,e){var t=e?md(o.buffer):o.buffer;return new o.constructor(t,o.byteOffset,o.byteLength)};var e2=/\w*$/;const t2=function(o){var e=new o.constructor(o.source,e2.exec(o));return e.lastIndex=o.lastIndex,e};var Cp=Oe?Oe.prototype:void 0,vp=Cp?Cp.valueOf:void 0;const n2=function(o){return vp?Object(vp.call(o)):{}},yp=function(o,e){var t=e?md(o.buffer):o.buffer;return new o.constructor(t,o.byteOffset,o.length)},o2=function(o,e,t){var n=o.constructor;switch(e){case"[object ArrayBuffer]":return md(o);case"[object Boolean]":case"[object Date]":return new n(+o);case"[object DataView]":return XE(o,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return yp(o,t);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(o);case"[object RegExp]":return t2(o);case"[object Symbol]":return n2(o)}};var xp=Object.create;const i2=function(){function o(){}return function(e){if(!ke(e))return{};if(xp)return xp(e);o.prototype=e;var t=new o;return o.prototype=void 0,t}}(),Ep=function(o){return typeof o.constructor!="function"||cd(o)?{}:i2(td(o))},r2=function(o){return zn(o)&&hs(o)=="[object Map]"};var Dp=ur&&ur.isMap;const s2=Dp?rd(Dp):r2,a2=function(o){return zn(o)&&hs(o)=="[object Set]"};var Ip=ur&&ur.isSet;const c2=Ip?rd(Ip):a2;var Sp="[object Arguments]",Tp="[object Function]",Mp="[object Object]",Et={};Et[Sp]=Et["[object Array]"]=Et["[object ArrayBuffer]"]=Et["[object DataView]"]=Et["[object Boolean]"]=Et["[object Date]"]=Et["[object Float32Array]"]=Et["[object Float64Array]"]=Et["[object Int8Array]"]=Et["[object Int16Array]"]=Et["[object Int32Array]"]=Et["[object Map]"]=Et["[object Number]"]=Et[Mp]=Et["[object RegExp]"]=Et["[object Set]"]=Et["[object String]"]=Et["[object Symbol]"]=Et["[object Uint8Array]"]=Et["[object Uint8ClampedArray]"]=Et["[object Uint16Array]"]=Et["[object Uint32Array]"]=!0,Et["[object Error]"]=Et[Tp]=Et["[object WeakMap]"]=!1;const fd=function o(e,t,n,i,r,a){var c,d=1&t,h=2&t,p=4&t;if(n&&(c=r?n(e,i,r,a):n(e)),c!==void 0)return c;if(!ke(e))return e;var k=an(e);if(k){if(c=JE(e),!d)return up(e,c)}else{var A=hs(e),E=A==Tp||A=="[object GeneratorFunction]";if(ls(e))return dp(e,d);if(A==Mp||A==Sp||E&&!r){if(c=h||E?{}:Ep(e),!d)return h?$E(e,FE(c,e)):HE(e,LE(c,e))}else{if(!Et[A])return r?e:{};c=o2(e,A,d)}}a||(a=new lr);var I=a.get(e);if(I)return I;a.set(e,c),c2(e)?e.forEach(function(B){c.add(o(B,t,n,B,e,a))}):s2(e)&&e.forEach(function(B,O){c.set(O,o(B,t,n,O,e,a))});var S=k?void 0:(p?h?WE:dd:h?hr:us)(e);return vE(S||e,function(B,O){S&&(B=e[O=B]),od(c,O,o(B,t,n,O,e,a))}),c},kd=function(o,e){return fd(o,5,e=typeof e=="function"?e:void 0)},Ei=function(o){return zn(o)&&o.nodeType===1&&!En(o)};class Bp{constructor(e,t){this._config={},t&&this.define(Pp(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,i=!1){if(En(t))return void this._setObjectToTarget(e,t,i);const r=t.split(".");t=r.pop();for(const a of r)En(e[a])||(e[a]={}),e=e[a];if(En(n))return En(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,n,i);i&&e[t]!==void 0||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const i of n){if(!En(e[i])){e=null;break}e=e[i]}return e?Pp(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(i=>{this._setToTarget(e,i,t[i],n)})}}function Pp(o){return kd(o,l2)}function l2(o){return Ei(o)||typeof o=="function"?o:void 0}function qo(o){if(o){if(o.defaultView)return o instanceof o.defaultView.Document;if(o.ownerDocument&&o.ownerDocument.defaultView)return o instanceof o.ownerDocument.defaultView.Node}return!1}function Fa(o){const e=Object.prototype.toString.apply(o);return e=="[object Window]"||e=="[object global]"}const Np=Fn(ze());function Fn(o){return o?class extends o{listenTo(e,t,n,i={}){if(qo(e)||Fa(e)){const r={capture:!!i.useCapture,passive:!!i.usePassive},a=this._getProxyEmitter(e,r)||new d2(e,r);this.listenTo(a,t,n,i)}else super.listenTo(e,t,n,i)}stopListening(e,t,n){if(qo(e)||Fa(e)){const i=this._getAllProxyEmitters(e);for(const r of i)this.stopListening(r,t,n)}else super.stopListening(e,t,n)}_getProxyEmitter(e,t){return function(n,i){const r=n[Q];return r&&r[i]?r[i].emitter:null}(this,Op(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(t=>!!t)}}:Np}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{Fn[o]=Np.prototype[o]});class d2 extends ze(){constructor(e,t){super(),Gt(this,Op(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),ze().prototype._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){ze().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function Op(o,e){let t=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=$())}(o);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}let bd;try{bd={window,document}}catch{bd={window:{},document:{}}}const Re=bd;function Lp(o){const e=o.ownerDocument.defaultView.getComputedStyle(o);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}function Ht(o){return Object.prototype.toString.call(o)=="[object Text]"}function Va(o){return Object.prototype.toString.apply(o)=="[object Range]"}function Rp(o){return o&&o.parentNode?o.offsetParent===Re.document.body?null:o.offsetParent:null}const zp=["top","right","bottom","left","width","height"];class tt{constructor(e){const t=Va(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),_d(e)||t)if(t){const n=tt.getDomRangeRects(e);Ua(this,tt.getBoundingRect(n))}else Ua(this,e.getBoundingClientRect());else if(Fa(e)){const{innerWidth:n,innerHeight:i}=e;Ua(this,{top:0,right:n,bottom:i,left:0,width:n,height:i})}else Ua(this,e)}clone(){return new tt(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};if(t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0)return null;{const n=new tt(t);return n._source=this._source,n}}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(jp(e))return t;let n,i=e,r=e.parentNode||e.commonAncestorContainer;for(;r&&!jp(r);){const c=((a=r)instanceof HTMLElement?a.ownerDocument.defaultView.getComputedStyle(a).overflow:"visible")==="visible";i instanceof HTMLElement&&Fp(i)==="absolute"&&(n=i);const d=Fp(r);if(c||n&&(d==="relative"&&c||d!=="relative")){i=r,r=r.parentNode;continue}const h=new tt(r),p=t.getIntersection(h);if(!p)return null;p.getArea()<t.getArea()&&(t=p),i=r,r=r.parentNode}var a;return t}isEqual(e){for(const t of zp)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}toAbsoluteRect(){const{scrollX:e,scrollY:t}=Re.window,n=this.clone().moveBy(e,t);if(_d(n._source)){const i=Rp(n._source);i&&function(r,a){const c=new tt(a),d=Lp(a);let h=0,p=0;h-=c.left,p-=c.top,h+=a.scrollLeft,p+=a.scrollTop,h-=d.left,p-=d.top,r.moveBy(h,p)}(n,i)}return n}excludeScrollbarsAndBorders(){const e=this._source;let t,n,i;if(Fa(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,i=e.getComputedStyle(e.document.documentElement).direction;else{const r=Lp(e);t=e.offsetWidth-e.clientWidth-r.left-r.right,n=e.offsetHeight-e.clientHeight-r.top-r.bottom,i=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,i==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const i of n)t.push(new tt(i));else{let i=e.startContainer;Ht(i)&&(i=i.parentNode);const r=new tt(i.getBoundingClientRect());r.right=r.left,r.width=0,t.push(r)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const i of e)n++,t.left=Math.min(t.left,i.left),t.top=Math.min(t.top,i.top),t.right=Math.max(t.right,i.right),t.bottom=Math.max(t.bottom,i.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new tt(t))}}function Ua(o,e){for(const t of zp)o[t]=e[t]}function jp(o){return!!_d(o)&&o===o.ownerDocument.body}function _d(o){return o!==null&&typeof o=="object"&&o.nodeType===1&&typeof o.getBoundingClientRect=="function"}function Fp(o){return o instanceof HTMLElement?o.ownerDocument.defaultView.getComputedStyle(o).position:"static"}const zt=class{constructor(o,e){zt._observerInstance||zt._createObserver(),this._element=o,this._callback=e,zt._addElementCallback(o,e),zt._observerInstance.observe(o)}get element(){return this._element}destroy(){zt._deleteElementCallback(this._element,this._callback)}static _addElementCallback(o,e){zt._elementCallbacks||(zt._elementCallbacks=new Map);let t=zt._elementCallbacks.get(o);t||(t=new Set,zt._elementCallbacks.set(o,t)),t.add(e)}static _deleteElementCallback(o,e){const t=zt._getElementCallbacks(o);t&&(t.delete(e),t.size||(zt._elementCallbacks.delete(o),zt._observerInstance.unobserve(o))),zt._elementCallbacks&&!zt._elementCallbacks.size&&(zt._observerInstance=null,zt._elementCallbacks=null)}static _getElementCallbacks(o){return zt._elementCallbacks?zt._elementCallbacks.get(o):null}static _createObserver(){zt._observerInstance=new Re.window.ResizeObserver(o=>{for(const e of o){const t=zt._getElementCallbacks(e.target);if(t)for(const n of t)n(e)}})}};let gs=zt;function Vp(o,e){o instanceof HTMLTextAreaElement&&(o.value=e),o.innerHTML=e}function gr(o){return e=>e+o}function Ha(o){let e=0;for(;o.previousSibling;)o=o.previousSibling,e++;return e}function Up(o,e,t){o.insertBefore(t,o.childNodes[e]||null)}function ps(o){return o&&o.nodeType===Node.COMMENT_NODE}function Di(o){return!!(o&&o.getClientRects&&o.getClientRects().length)}gs._observerInstance=null,gs._elementCallbacks=null;var Hp=Math.pow;function $a({element:o,target:e,positions:t,limiter:n,fitInViewport:i,viewportOffsetConfig:r}){Ci(e)&&(e=e()),Ci(n)&&(n=n());const a=Rp(o),c=function(A){A=Object.assign({top:0,bottom:0,left:0,right:0},A);const E=new tt(Re.window);return E.top+=A.top,E.height-=A.top,E.bottom-=A.bottom,E.height-=A.bottom,E}(r),d=new tt(o),h=$p(e,c);let p;if(!h||!c.getIntersection(h))return null;const k={targetRect:h,elementRect:d,positionedElementAncestor:a,viewportRect:c};if(n||i){if(n){const A=$p(n,c);A&&(k.limiterRect=A)}p=function(A,E){const{elementRect:I}=E,S=I.getArea(),B=A.map(Z=>new Wp(Z,E)).filter(Z=>!!Z.name);let O=0,q=null;for(const Z of B){const{limiterIntersectionArea:oe,viewportIntersectionArea:Me}=Z;if(oe===S)return Z;const Ue=Hp(Me,2)+Hp(oe,2);Ue>O&&(O=Ue,q=Z)}return q}(t,k)}else p=new Wp(t[0],k);return p}function $p(o,e){const t=new tt(o).getVisible();return t?t.getIntersection(e):null}class Wp{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect,t.limiterRect);if(!n)return;const{left:i,top:r,name:a,config:c}=n;this.name=a,this.config=c,this._positioningFunctionCoordinates={left:i,top:r},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;return e?e.getIntersectionArea(this._rect):0}get viewportIntersectionArea(){return this._options.viewportRect.getIntersectionArea(this._rect)}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCoordinates.left,this._positioningFunctionCoordinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=this._rect.toAbsoluteRect()),this._cachedAbsoluteRect}}function qp(o){const e=o.parentNode;e&&e.removeChild(o)}function u2({window:o,rect:e,alignToTop:t,forceScroll:n,viewportOffset:i}){const r=e.clone().moveBy(0,i.bottom),a=e.clone().moveBy(0,-i.top),c=new tt(o).excludeScrollbarsAndBorders(),d=t&&n,h=[a,r].every(I=>c.contains(I));let{scrollX:p,scrollY:k}=o;const A=p,E=k;d?k-=c.top-e.top+i.top:h||(Kp(a,c)?k-=c.top-e.top+i.top:Gp(r,c)&&(k+=t?e.top-c.top-i.top:e.bottom-c.bottom+i.bottom)),h||(Yp(e,c)?p-=c.left-e.left+i.left:Qp(e,c)&&(p+=e.right-c.right+i.right)),p==A&&k===E||o.scrollTo(p,k)}function h2({parent:o,getRect:e,alignToTop:t,forceScroll:n,ancestorOffset:i=0,limiterElement:r}){const a=wd(o),c=t&&n;let d,h,p;const k=r||a.document.body;for(;o!=k;)h=e(),d=new tt(o).excludeScrollbarsAndBorders(),p=d.contains(h),c?o.scrollTop-=d.top-h.top+i:p||(Kp(h,d)?o.scrollTop-=d.top-h.top+i:Gp(h,d)&&(o.scrollTop+=t?h.top-d.top-i:h.bottom-d.bottom+i)),p||(Yp(h,d)?o.scrollLeft-=d.left-h.left+i:Qp(h,d)&&(o.scrollLeft+=h.right-d.right+i)),o=o.parentNode}function Gp(o,e){return o.bottom>e.bottom}function Kp(o,e){return o.top<e.top}function Yp(o,e){return o.left<e.left}function Qp(o,e){return o.right>e.right}function wd(o){return Va(o)?o.startContainer.ownerDocument.defaultView:o.ownerDocument.defaultView}function g2(o){if(Va(o)){let e=o.commonAncestorContainer;return Ht(e)&&(e=e.parentNode),e}return o.parentNode}function Zp(o,e){const t=wd(o),n=new tt(o);if(t===e)return n;{let i=t;for(;i!=e;){const r=i.frameElement,a=new tt(r).excludeScrollbarsAndBorders();n.moveBy(a.left,a.top),i=i.parent}}return n}const p2={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},m2={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},Jp={37:"←",38:"↑",39:"→",40:"↓",9:"⇥",33:"Page Up",34:"Page Down"},it=function(){const o={pageup:33,pagedown:34,arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++)o[String.fromCharCode(e).toLowerCase()]=e;for(let e=48;e<=57;e++)o[e-48]=e;for(let e=112;e<=123;e++)o["f"+(e-111)]=e;return Object.assign(o,{"'":222,",":108,"-":109,".":110,"/":111,";":186,"=":187,"[":219,"\\":220,"]":221,"`":223}),o}(),f2=Object.fromEntries(Object.entries(it).map(([o,e])=>{let t;return t=e in Jp?Jp[e]:o.charAt(0).toUpperCase()+o.slice(1),[e,t]}));function pr(o){let e;if(typeof o=="string"){if(e=it[o.toLowerCase()],!e)throw new T("keyboard-unknown-key",null,{key:o})}else e=o.keyCode+(o.altKey?it.alt:0)+(o.ctrlKey?it.ctrl:0)+(o.shiftKey?it.shift:0)+(o.metaKey?it.cmd:0);return e}function ms(o){return typeof o=="string"&&(o=function(e){return e.split("+").map(t=>t.trim())}(o)),o.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return pr(t.slice(0,-1));const n=pr(t);return(w.isMac||w.isiOS)&&n==it.ctrl?it.cmd:n}(e):e).reduce((e,t)=>t+e,0)}function Wa(o){let e=ms(o);return Object.entries(w.isMac||w.isiOS?p2:m2).reduce((t,[n,i])=>(e&it[n]&&(e&=~it[n],t+=i),t),"")+(e?f2[e]:"")}function Ad(o,e){const t=e==="ltr";switch(o){case it.arrowleft:return t?"left":"right";case it.arrowright:return t?"right":"left";case it.arrowup:return"up";case it.arrowdown:return"down"}}function yt(o){return Array.isArray(o)?o:[o]}const Cd=function(o,e,t){(t!==void 0&&!ss(o[e],t)||t===void 0&&!(e in o))&&Oa(o,e,t)},Xp=function(o){return function(e,t,n){for(var i=-1,r=Object(e),a=n(e),c=a.length;c--;){var d=a[o?c:++i];if(t(r[d],d,r)===!1)break}return e}}(),k2=function(o){return zn(o)&&za(o)},vd=function(o,e){if((e!=="constructor"||typeof o[e]!="function")&&e!="__proto__")return o[e]},b2=function(o){return dr(o,hr(o))},_2=function(o,e,t,n,i,r,a){var c=vd(o,t),d=vd(e,t),h=a.get(d);if(h)Cd(o,t,h);else{var p=r?r(c,d,t+"",o,e,a):void 0,k=p===void 0;if(k){var A=an(d),E=!A&&ls(d),I=!A&&!E&&ad(d);p=d,A||E||I?an(c)?p=c:k2(c)?p=up(c):E?(k=!1,p=dp(d,!0)):I?(k=!1,p=yp(d,!0)):p=[]:En(d)||La(d)?(p=c,La(c)?p=b2(c):ke(c)&&!Ci(c)||(p=Ep(d))):k=!1}k&&(a.set(d,p),i(p,d,n,r,a),a.delete(d)),Cd(o,t,p)}},w2=function o(e,t,n,i,r){e!==t&&Xp(t,function(a,c){if(r||(r=new lr),ke(a))_2(e,t,c,n,o,i,r);else{var d=i?i(vd(e,c),a,c+"",e,t,r):void 0;d===void 0&&(d=a),Cd(e,c,d)}},hr)},Go=function(o){return o},A2=function(o,e,t){switch(t.length){case 0:return o.call(e);case 1:return o.call(e,t[0]);case 2:return o.call(e,t[0],t[1]);case 3:return o.call(e,t[0],t[1],t[2])}return o.apply(e,t)};var em=Math.max;const C2=function(o,e,t){return e=em(e===void 0?o.length-1:e,0),function(){for(var n=arguments,i=-1,r=em(n.length-e,0),a=Array(r);++i<r;)a[i]=n[e+i];i=-1;for(var c=Array(e+1);++i<e;)c[i]=n[i];return c[e]=t(a),A2(o,this,c)}},v2=function(o){return function(){return o}},y2=Na?function(o,e){return Na(o,"toString",{configurable:!0,enumerable:!1,value:v2(e),writable:!0})}:Go;var x2=Date.now;const E2=function(o){var e=0,t=0;return function(){var n=x2(),i=16-(n-t);if(t=n,i>0){if(++e>=800)return arguments[0]}else e=0;return o.apply(void 0,arguments)}}(y2),D2=function(o,e){return E2(C2(o,e,Go),o+"")},I2=function(o,e,t){if(!ke(t))return!1;var n=typeof e;return!!(n=="number"?za(t)&&Ra(e,t.length):n=="string"&&e in t)&&ss(t[e],o)},tm=function(o){return D2(function(e,t){var n=-1,i=t.length,r=i>1?t[i-1]:void 0,a=i>2?t[2]:void 0;for(r=o.length>3&&typeof r=="function"?(i--,r):void 0,a&&I2(t[0],t[1],a)&&(r=i<3?void 0:r,i=1),e=Object(e);++n<i;){var c=t[n];c&&o(e,c,n,r)}return e})},yd=tm(function(o,e,t){w2(o,e,t)});function S2(o,e,t=1,n){if(typeof t!="number")throw new T("translation-service-quantity-not-a-number",null,{quantity:t});const i=n||Re.window.CKEDITOR_TRANSLATIONS,r=function(p){return Object.keys(p).length}(i);r===1&&(o=Object.keys(i)[0]);const a=e.id||e.string;if(r===0||!function(p,k,A){return!!A[p]&&!!A[p].dictionary[k]}(o,a,i))return t!==1?e.plural:e.string;const c=i[o].dictionary,d=i[o].getPluralForm||(p=>p===1?0:1),h=c[a];return typeof h=="string"?h:h[Number(d(t))]}Re.window.CKEDITOR_TRANSLATIONS||(Re.window.CKEDITOR_TRANSLATIONS={});const T2=["ar","ara","dv","div","fa","per","fas","he","heb","ku","kur","ug","uig"];function nm(o){return T2.includes(o)?"rtl":"ltr"}class M2{constructor({uiLanguage:e="en",contentLanguage:t,translations:n}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=nm(this.uiLanguage),this.contentLanguageDirection=nm(this.contentLanguage),this.translations=function(i){return Array.isArray(i)?i.reduce((r,a)=>yd(r,a)):i}(n),this.t=(i,r)=>this._t(i,r)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=yt(t),typeof e=="string"&&(e={string:e});const n=e.plural?t[0]:1;return function(i,r){return i.replace(/%(\d+)/g,(a,c)=>c<r.length?r[c]:a)}(S2(this.uiLanguage,e,n,this.translations),t)}}class Jn extends ze(){constructor(e={},t={}){super();const n=ae(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const i of e)this._items.push(i),this._itemMap.set(this._getItemIdBeforeAdding(i),i)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new T("collection-add-item-invalid-index",this);let n=0;for(const i of e){const r=this._getItemIdBeforeAdding(i),a=t+n;this._items.splice(a,0,i),this._itemMap.set(r,i),this.fire("add",i,a),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new T("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}forEach(e,t){this._items.forEach(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new T("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(i,r,a)=>{const c=t._bindToCollection==this,d=t._bindToInternalToExternalMap.get(r);if(c&&d)this._bindToExternalToInternalMap.set(r,d),this._bindToInternalToExternalMap.set(d,r);else{const h=e(r);if(!h)return void this._skippedIndexesFromExternal.push(a);let p=a;for(const k of this._skippedIndexesFromExternal)a>k&&p--;for(const k of t._skippedIndexesFromExternal)p>=k&&p++;this._bindToExternalToInternalMap.set(r,h),this._bindToInternalToExternalMap.set(h,r),this.add(h,p);for(let k=0;k<t._skippedIndexesFromExternal.length;k++)p<=t._skippedIndexesFromExternal[k]&&t._skippedIndexesFromExternal[k]++}};for(const i of t)n(0,i,t.getIndex(i));this.listenTo(t,"add",n),this.listenTo(t,"remove",(i,r,a)=>{const c=this._bindToExternalToInternalMap.get(r);c&&this.remove(c),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((d,h)=>(a<h&&d.push(h-1),a>h&&d.push(h),d),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new T("collection-add-invalid-id",this);if(this.get(n))throw new T("collection-add-item-already-exists",this)}else e[t]=n=$();return n}_remove(e){let t,n,i,r=!1;const a=this._idProperty;if(typeof e=="string"?(n=e,i=this._itemMap.get(n),r=!i,i&&(t=this._items.indexOf(i))):typeof e=="number"?(t=e,i=this._items[t],r=!i,i&&(n=i[a])):(i=e,n=i[a],t=this._items.indexOf(i),r=t==-1||!this._itemMap.get(n)),r)throw new T("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const c=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(c),this.fire("remove",i,t),[i,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function Jt(o){const e=o.next();return e.done?null:e.value}class Xt extends Fn(Y()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(e){if(this._elements.has(e))throw new T("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class dn{constructor(){this._listener=new(Fn())}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+pr(n),n)})}set(e,t,n={}){const i=ms(e),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+i,(a,c)=>{t(c,()=>{c.preventDefault(),c.stopPropagation(),a.stop()}),a.return=!0},{priority:r})}press(e){return!!this._listener.fire("_keydown:"+pr(e),e)}stopListening(e){this._listener.stopListening(e)}destroy(){this.stopListening()}}function ho(o){return ae(o)?new Map(o):function(e){const t=new Map;for(const n in e)t.set(n,e[n]);return t}(o)}function xd(o,e){let t;function n(...i){n.cancel(),t=setTimeout(()=>o(...i),e)}return n.cancel=()=>{clearTimeout(t)},n}function Ed(o,e){return!!(t=o.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(o.charAt(e));var t}function Dd(o,e){return!!(t=o.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const B2=function(){const o=[new RegExp("\\p{Emoji}[\\u{E0020}-\\u{E007E}]+\\u{E007F}","u"),new RegExp("\\p{Emoji}\\u{FE0F}?\\u{20E3}","u"),new RegExp("\\p{Emoji}\\u{FE0F}","u"),new RegExp("(?=\\p{General_Category=Other_Symbol})\\p{Emoji}\\p{Emoji_Modifier}*","u")],e=new RegExp("\\p{Regional_Indicator}{2}","u").source,t="(?:"+o.map(n=>n.source).join("|")+")";return new RegExp(`${e}|${t}(?:‍${t})*`,"ug")}();function om(o,e){const t=String(o).matchAll(B2);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}class fe extends Y(){constructor(e){super(),this._disableStack=new Set,this.editor=e,this.set("isEnabled",!0)}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",im,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",im),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function im(o){o.return=!1,o.stop()}class Qe extends Y(){constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(e,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",t=>{if(!this.affectsData)return;const n=e.model.document.selection,i=n.getFirstPosition().root.rootName!="$graveyard"&&e.model.canEditAt(n);(e.isReadOnly||this._isEnabledBasedOnSelection&&!i)&&(t.return=!1,t.stop())},{priority:"highest"}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",rm,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",rm),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function rm(o){o.return=!1,o.stop()}class sm extends Qe{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){G(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}class am extends ze(){constructor(e,t=[],n=[]){super(),this._plugins=new Map,this._context=e,this._availablePlugins=new Map;for(const i of t)i.pluginName&&this._availablePlugins.set(i.pluginName,i);this._contextPlugins=new Map;for(const[i,r]of n)this._contextPlugins.set(i,r),this._contextPlugins.set(r,i),i.pluginName&&this._availablePlugins.set(i.pluginName,i)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new T("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const i=this,r=this._context;(function I(S,B=new Set){S.forEach(O=>{d(O)&&(B.has(O)||(B.add(O),O.pluginName&&!i._availablePlugins.has(O.pluginName)&&i._availablePlugins.set(O.pluginName,O),O.requires&&I(O.requires,B)))})})(e),A(e);const a=[...function I(S,B=new Set){return S.map(O=>d(O)?O:i._availablePlugins.get(O)).reduce((O,q)=>B.has(q)?O:(B.add(q),q.requires&&(A(q.requires,q),I(q.requires,B).forEach(Z=>O.add(Z))),O.add(q)),new Set)}(e.filter(I=>!p(I,t)))];(function(I,S){for(const B of S){if(typeof B!="function")throw new T("plugincollection-replace-plugin-invalid-type",null,{pluginItem:B});const O=B.pluginName;if(!O)throw new T("plugincollection-replace-plugin-missing-name",null,{pluginItem:B});if(B.requires&&B.requires.length)throw new T("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:O});const q=i._availablePlugins.get(O);if(!q)throw new T("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:O});const Z=I.indexOf(q);if(Z===-1){if(i._contextPlugins.has(q))return;throw new T("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:O})}if(q.requires&&q.requires.length)throw new T("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:O});I.splice(Z,1,B),i._availablePlugins.set(O,B)}})(a,n);const c=a.map(I=>{let S=i._contextPlugins.get(I);return S=S||new I(r),i._add(I,S),S});return E(c,"init").then(()=>E(c,"afterInit")).then(()=>c);function d(I){return typeof I=="function"}function h(I){return d(I)&&!!I.isContextPlugin}function p(I,S){return S.some(B=>B===I||k(I)===B||k(B)===I)}function k(I){return d(I)?I.pluginName||I.name:I}function A(I,S=null){I.map(B=>d(B)?B:i._availablePlugins.get(B)||B).forEach(B=>{(function(O,q){if(!d(O))throw q?new T("plugincollection-soft-required",r,{missingPlugin:O,requiredBy:k(q)}):new T("plugincollection-plugin-not-found",r,{plugin:O})})(B,S),function(O,q){if(h(q)&&!h(O))throw new T("plugincollection-context-required",r,{plugin:k(O),requiredBy:k(q)})}(B,S),function(O,q){if(q&&p(O,t))throw new T("plugincollection-required",r,{plugin:k(O),requiredBy:k(q)})}(B,S)})}function E(I,S){return I.reduce((B,O)=>O[S]?i._contextPlugins.has(O)?B:B.then(O[S].bind(O)):B,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new T("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}var cm=Object.getOwnPropertySymbols,P2=Object.prototype.hasOwnProperty,N2=Object.prototype.propertyIsEnumerable;class lm{constructor(e){this._contextOwner=null;const t=e||{},{translations:n}=t,i=((c,d)=>{var h={};for(var p in c)P2.call(c,p)&&d.indexOf(p)<0&&(h[p]=c[p]);if(c!=null&&cm)for(var p of cm(c))d.indexOf(p)<0&&N2.call(c,p)&&(h[p]=c[p]);return h})(t,["translations"]);this.config=new Bp(i,this.constructor.defaultConfig);const r=this.constructor.builtinPlugins;this.config.define("plugins",r),this.plugins=new am(this,r);const a=this.config.get("language")||{};this.locale=new M2({uiLanguage:typeof a=="string"?a:a.ui,contentLanguage:this.config.get("language.content"),translations:n}),this.t=this.locale.t,this.editors=new Jn}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new T("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new T("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new T("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class qa extends Y(){constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}class O2 extends dn{constructor(e){super(),this.editor=e}set(e,t,n={}){if(typeof t=="string"){const i=t;t=(r,a)=>{this.editor.execute(i),a()}}super.set(e,t,n)}}var L2=m(2591),De=m.n(L2),dm=m(4098),R2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(dm.A,R2),dm.A.locals;const Ga=new WeakMap;let um=!1;function hm({view:o,element:e,text:t,isDirectHost:n=!0,keepOnFocus:i=!1}){const r=o.document;function a(c){Ga.get(r).set(e,{text:c,isDirectHost:n,keepOnFocus:i,hostElement:n?e:null}),o.change(d=>Id(r,d))}Ga.has(r)||(Ga.set(r,new Map),r.registerPostFixer(c=>Id(r,c)),r.on("change:isComposing",()=>{o.change(c=>Id(r,c))},{priority:"high"})),e.is("editableElement")&&e.on("change:placeholder",(c,d,h)=>{a(h)}),e.placeholder?a(e.placeholder):t&&a(t),t&&function(){um||W("enableplaceholder-deprecated-text-option"),um=!0}()}function z2(o,e){return!e.hasClass("ck-placeholder")&&(o.addClass("ck-placeholder",e),!0)}function j2(o,e){return!!e.hasClass("ck-placeholder")&&(o.removeClass("ck-placeholder",e),!0)}function F2(o,e){if(!o.isAttached()||Array.from(o.getChildren()).some(i=>!i.is("uiElement")))return!1;const t=o.document,n=t.selection.anchor;return(!t.isComposing||!n||n.parent!==o)&&(!!e||!t.isFocused||!!n&&n.parent!==o)}function Id(o,e){const t=Ga.get(o),n=[];let i=!1;for(const[r,a]of t)a.isDirectHost&&(n.push(r),gm(e,r,a)&&(i=!0));for(const[r,a]of t){if(a.isDirectHost)continue;const c=V2(r);c&&(n.includes(c)||(a.hostElement=c,gm(e,r,a)&&(i=!0)))}return i}function gm(o,e,t){const{text:n,isDirectHost:i,hostElement:r}=t;let a=!1;return r.getAttribute("data-placeholder")!==n&&(o.setAttribute("data-placeholder",n,r),a=!0),(i||e.childCount==1)&&F2(r,t.keepOnFocus)?z2(o,r)&&(a=!0):j2(o,r)&&(a=!0),a}function V2(o){if(o.childCount){const e=o.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}class Ii{is(){throw new Error("is() method is abstract")}}const pm=function(o){return fd(o,4)};class Si extends ze(Ii){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new T("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),i=e.getAncestors(t);let r=0;for(;n[r]==i[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),i=we(t,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return t[i]<n[i]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=pm(this);return delete e.parent,e}}Si.prototype.is=function(o){return o==="node"||o==="view:node"};class _t extends Si{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof _t&&(this===e||this.data===e.data)}_clone(){return new _t(this.document,this.data)}}_t.prototype.is=function(o){return o==="$text"||o==="view:$text"||o==="text"||o==="view:text"||o==="node"||o==="view:node"};class go extends Ii{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.data.length)throw new T("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new T("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}go.prototype.is=function(o){return o==="$textProxy"||o==="view:$textProxy"||o==="textProxy"||o==="view:textProxy"};class po{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const i=mm(t,n);if(i)return{element:t,pattern:n,match:i}}return null}matchAll(...e){const t=[];for(const n of e)for(const i of this._patterns){const r=mm(n,i);r&&t.push({element:n,pattern:i,match:r})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function mm(o,e){if(typeof e=="function")return e(o);const t={};return e.name&&(t.name=function(n,i){return n instanceof RegExp?!!i.match(n):n===i}(e.name,o.name),!t.name)||e.attributes&&(t.attributes=function(n,i){const r=new Set(i.getAttributeKeys());return En(n)?(n.style!==void 0&&W("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&W("matcher-pattern-deprecated-attributes-class-key",n)):(r.delete("style"),r.delete("class")),Sd(n,r,a=>i.getAttribute(a))}(e.attributes,o),!t.attributes)||e.classes&&(t.classes=function(n,i){return Sd(n,i.getClassNames(),()=>{})}(e.classes,o),!t.classes)||e.styles&&(t.styles=function(n,i){return Sd(n,i.getStyleNames(!0),r=>i.getStyle(r))}(e.styles,o),!t.styles)?null:t}function Sd(o,e,t){const n=function(a){return Array.isArray(a)?a.map(c=>En(c)?(c.key!==void 0&&c.value!==void 0||W("matcher-pattern-missing-key-or-value",c),[c.key,c.value]):[c,!0]):En(a)?Object.entries(a):[[a,!0]]}(o),i=Array.from(e),r=[];if(n.forEach(([a,c])=>{i.forEach(d=>{(function(h,p){return h===!0||h===p||h instanceof RegExp&&p.match(h)})(a,d)&&function(h,p,k){if(h===!0)return!0;const A=k(p);return h===A||h instanceof RegExp&&!!String(A).match(h)}(c,d,t)&&r.push(d)})}),n.length&&!(r.length<n.length))return r}const Ka=function(o){return typeof o=="symbol"||zn(o)&&Kt(o)=="[object Symbol]"};var U2=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,H2=/^\w*$/;const Td=function(o,e){if(an(o))return!1;var t=typeof o;return!(t!="number"&&t!="symbol"&&t!="boolean"&&o!=null&&!Ka(o))||H2.test(o)||!U2.test(o)||e!=null&&o in Object(e)};function Md(o,e){if(typeof o!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var n=arguments,i=e?e.apply(this,n):n[0],r=t.cache;if(r.has(i))return r.get(i);var a=o.apply(this,n);return t.cache=r.set(i,a)||r,a};return t.cache=new(Md.Cache||Pa),t}Md.Cache=Pa;const $2=Md,W2=function(o){var e=$2(o,function(n){return t.size===500&&t.clear(),n}),t=e.cache;return e};var q2=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,G2=/\\(\\)?/g,K2=W2(function(o){var e=[];return o.charCodeAt(0)===46&&e.push(""),o.replace(q2,function(t,n,i,r){e.push(i?r.replace(G2,"$1"):n||t)}),e});const Y2=K2,Q2=function(o,e){for(var t=-1,n=o==null?0:o.length,i=Array(n);++t<n;)i[t]=e(o[t],t,o);return i};var fm=Oe?Oe.prototype:void 0,km=fm?fm.toString:void 0;const Z2=function o(e){if(typeof e=="string")return e;if(an(e))return Q2(e,o)+"";if(Ka(e))return km?km.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},Bd=function(o){return o==null?"":Z2(o)},Ya=function(o,e){return an(o)?o:Td(o,e)?[o]:Y2(Bd(o))},J2=function(o){var e=o==null?0:o.length;return e?o[e-1]:void 0},mr=function(o){if(typeof o=="string"||Ka(o))return o;var e=o+"";return e=="0"&&1/o==-1/0?"-0":e},Pd=function(o,e){for(var t=0,n=(e=Ya(e,o)).length;o!=null&&t<n;)o=o[mr(e[t++])];return t&&t==n?o:void 0},bm=function(o,e,t){var n=-1,i=o.length;e<0&&(e=-e>i?0:i+e),(t=t>i?i:t)<0&&(t+=i),i=e>t?0:t-e>>>0,e>>>=0;for(var r=Array(i);++n<i;)r[n]=o[n+e];return r},X2=function(o,e){return e.length<2?o:Pd(o,bm(e,0,-1))},eD=function(o,e){return e=Ya(e,o),(o=X2(o,e))==null||delete o[mr(J2(e))]},tD=function(o,e){return o==null||eD(o,e)},fs=function(o,e,t){var n=o==null?void 0:Pd(o,e);return n===void 0?t:n},nD=function(o,e,t,n){if(!ke(o))return o;for(var i=-1,r=(e=Ya(e,o)).length,a=r-1,c=o;c!=null&&++i<r;){var d=mr(e[i]),h=t;if(d==="__proto__"||d==="constructor"||d==="prototype")return o;if(i!=a){var p=c[d];(h=n?n(p,d,c):void 0)===void 0&&(h=ke(p)?p:Ra(e[i+1])?[]:{})}od(c,d,h),c=c[d]}return o},oD=function(o,e,t){return o==null?o:nD(o,e,t)};class Nd{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){return!Object.entries(this._styles).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=function(n){let i=null,r=0,a=0,c=null;const d=new Map;if(n==="")return d;n.charAt(n.length-1)!=";"&&(n+=";");for(let h=0;h<n.length;h++){const p=n.charAt(h);if(i===null)switch(p){case":":c||(c=n.substr(r,h-r),a=h+1);break;case'"':case"'":i=p;break;case";":{const k=n.substr(a,h-a);c&&d.set(c.trim(),k.trim()),c=null,r=h+1;break}}else p===i&&(i=null)}return d}(e);for(const[n,i]of t)this._styleProcessor.toNormalizedForm(n,i,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)}set(e,t){if(ke(e))for(const[n,i]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,i,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=Od(e);tD(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this.getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!ke(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this.getStylesEntries().map(([t])=>t)}clear(){this._styles={}}getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const n=t.splice(0,t.length-1).join("."),i=fs(this._styles,n);i&&!Object.keys(i).length&&this.remove(n)}}class iD{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(ke(t))Ld(n,Od(e),t);else if(this._normalizers.has(e)){const i=this._normalizers.get(e),{path:r,value:a}=i(t);Ld(n,r,a)}else Ld(n,e,t)}getNormalized(e,t){if(!e)return yd({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return fs(t,n);const i=n(e,t);if(i)return i}return fs(t,Od(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(i=>{const r=this.getNormalized(i,e);return r&&typeof r=="object"?Object.keys(r).length:r}),n=new Set([...t,...Object.keys(e)]);return Array.from(n)}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function Od(o){return o.replace("-",".")}function Ld(o,e,t){let n=t;ke(t)&&(n=yd({},fs(o,e),t)),oD(o,e,n)}class Dn extends Si{constructor(e,t,n,i){if(super(e),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=t,this._attrs=function(r){const a=ho(r);for(const[c,d]of a)d===null?a.delete(c):typeof d!="string"&&a.set(c,String(d));return a}(n),this._children=[],i&&this._insertChild(0,i),this._classes=new Set,this._attrs.has("class")){const r=this._attrs.get("class");_m(this._classes,r),this._attrs.delete("class")}this._styles=new Nd(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof Dn))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new po(...e);let n=this.parent;for(;n&&!n.is("documentFragment");){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(i=>`${i[0]}="${i[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const i of this.getChildren())t.push(i._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const i=function(r,a){return typeof a=="string"?[new _t(r,a)]:(ae(a)||(a=[a]),Array.from(a).map(c=>typeof c=="string"?new _t(r,c):c instanceof go?new _t(r,c.data):c))}(this.document,t);for(const r of i)r.parent!==null&&r._remove(),r.parent=this,r.document=this.document,this._children.splice(e,0,r),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){const n=String(t);this._fireChange("attributes",this),e=="class"?_m(this._classes,n):e=="style"?this._styles.setTo(n):this._attrs.set(e,n)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of yt(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of yt(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),typeof e!="string"?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of yt(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function _m(o,e){const t=e.split(/\s+/);o.clear(),t.forEach(n=>o.add(n))}Dn.prototype.is=function(o,e){return e?e===this.name&&(o==="element"||o==="view:element"):o==="element"||o==="view:element"||o==="node"||o==="view:node"};class ks extends Dn{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=rD}}function rD(){const o=[...this.getChildren()],e=o[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of o)if(!t.is("uiElement"))return null;return this.childCount}ks.prototype.is=function(o,e){return e?e===this.name&&(o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Qa extends Y(ks){constructor(e,t,n,i){super(e,t,n,i),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("placeholder",void 0),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",r=>r&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}destroy(){this.stopListening()}}Qa.prototype.is=function(o,e){return e?e===this.name&&(o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};const wm=Symbol("rootName");class Am extends Qa{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(wm)}set rootName(e){this._setCustomProperty(wm,e)}set _name(e){this.name=e}}Am.prototype.is=function(o,e){return e?e===this.name&&(o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Ti{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new T("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new T("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this._position=Ie._createAt(e.startPosition):this._position=Ie._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(e){let t,n;do n=this.position,t=this.next();while(!t.done&&e(t.value));t.done||(this._position=n)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let i;if(n instanceof _t){if(e.isAtEnd)return this._position=Ie._createAfter(n),this._next();i=n.data[e.offset]}else i=n.getChild(e.offset);if(i instanceof Dn){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(e))return{done:!0,value:void 0};e.offset++}else e=new Ie(i,0);return this._position=e,this._formatReturnValue("elementStart",i,t,e,1)}if(i instanceof _t){if(this.singleCharacters)return e=new Ie(i,0),this._position=e,this._next();let r,a=i.data.length;return i==this._boundaryEndParent?(a=this.boundaries.end.offset,r=new go(i,0,a),e=Ie._createAfter(r)):(r=new go(i,0,i.data.length),e.offset++),this._position=e,this._formatReturnValue("text",r,t,e,a)}if(typeof i=="string"){let r;this.singleCharacters?r=1:r=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const a=new go(n,e.offset,r);return e.offset+=r,this._position=e,this._formatReturnValue("text",a,t,e,r)}return e=Ie._createAfter(n),this._position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let i;if(n instanceof _t){if(e.isAtStart)return this._position=Ie._createBefore(n),this._previous();i=n.data[e.offset-1]}else i=n.getChild(e.offset-1);if(i instanceof Dn)return this.shallow?(e.offset--,this._position=e,this._formatReturnValue("elementStart",i,t,e,1)):(e=new Ie(i,i.childCount),this._position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",i,t,e));if(i instanceof _t){if(this.singleCharacters)return e=new Ie(i,i.data.length),this._position=e,this._previous();let r,a=i.data.length;if(i==this._boundaryStartParent){const c=this.boundaries.start.offset;r=new go(i,c,i.data.length-c),a=r.data.length,e=Ie._createBefore(r)}else r=new go(i,0,i.data.length),e.offset--;return this._position=e,this._formatReturnValue("text",r,t,e,a)}if(typeof i=="string"){let r;if(this.singleCharacters)r=1;else{const c=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=e.offset-c}e.offset-=r;const a=new go(n,e.offset,r);return this._position=e,this._formatReturnValue("text",a,t,e,r)}return e=Ie._createBefore(n),this._position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,i,r){return t instanceof go&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=Ie._createAfter(t.textNode):(i=Ie._createAfter(t.textNode),this._position=i)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=Ie._createBefore(t.textNode):(i=Ie._createBefore(t.textNode),this._position=i))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:i,length:r}}}}class Ie extends Ii{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof Qa);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=Ie._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new Ti(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let i=0;for(;t[i]==n[i]&&t[i];)i++;return i===0?null:t[i-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const i=we(t,n);switch(i){case"prefix":return"before";case"extension":return"after";default:return t[i]<n[i]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new Ti(e)}clone(){return new Ie(this.parent,this.offset)}static _createAt(e,t){if(e instanceof Ie)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new T("view-createpositionat-offset-required",n)}return new Ie(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new Ie(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new T("view-position-after-root",e,{root:e});return new Ie(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new Ie(e.textNode,e.offsetInText);if(!e.parent)throw new T("view-position-before-root",e,{root:e});return new Ie(e.parent,e.index)}}Ie.prototype.is=function(o){return o==="position"||o==="view:position"};class He extends Ii{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new Ti({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(Za,{direction:"backward"}),t=this.end.getLastMatchingPosition(Za);return e.parent.is("$text")&&e.isAtStart&&(e=Ie._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=Ie._createAfter(t.parent)),new He(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(Za);if(e.isAfter(this.end)||e.isEqual(this.end))return new He(e,e);let t=this.end.getLastMatchingPosition(Za,{direction:"backward"});const n=e.nodeAfter,i=t.nodeBefore;return n&&n.is("$text")&&(e=new Ie(n,0)),i&&i.is("$text")&&(t=new Ie(i,i.data.length)),new He(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),i=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&i}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new He(this.start,e.start)),this.containsPosition(e.end)&&t.push(new He(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new He(t,n)}return null}getWalker(e={}){return e.boundaries=this,new Ti(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new He(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new Ti(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new Ti(e);yield t.position;for(const n of t)yield n.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,i){return new this(new Ie(e,t),new Ie(n,i))}static _createFromPositionAndShift(e,t){const n=e,i=e.getShiftedBy(t);return t>0?new this(n,i):new this(i,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(Ie._createBefore(e),t)}}function Za(o){return!(!o.item.is("attributeElement")&&!o.item.is("uiElement"))}He.prototype.is=function(o){return o==="range"||o==="view:range"};class Xn extends ze(Ii){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const i of e._ranges)if(t.isEqual(i)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=ue(this.getRanges());if(t!=ue(e.getRanges()))return!1;if(t==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let i=!1;for(let r of e.getRanges())if(r=r.getTrimmed(),n.start.isEqual(r.start)&&n.end.isEqual(r.end)){i=!0;break}if(!i)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,n,i]=e;if(typeof n=="object"&&(i=n,n=void 0),t===null)this._setRanges([]),this._setFakeOptions(i);else if(t instanceof Xn||t instanceof Rd)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof He)this._setRanges([t],i&&i.backward),this._setFakeOptions(i);else if(t instanceof Ie)this._setRanges([new He(t)]),this._setFakeOptions(i);else if(t instanceof Si){const r=!!i&&!!i.backward;let a;if(n===void 0)throw new T("view-selection-setto-required-second-parameter",this);a=n=="in"?He._createIn(t):n=="on"?He._createOn(t):new He(Ie._createAt(t,n)),this._setRanges([a],r),this._setFakeOptions(i)}else{if(!ae(t))throw new T("view-selection-setto-not-selectable",this);this._setRanges(t,i&&i.backward),this._setFakeOptions(i)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new T("view-selection-setfocus-no-ranges",this);const n=Ie._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.pop(),n.compareWith(i)=="before"?this._addRange(new He(n,i),!0):this._addRange(new He(i,n)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof He))throw new T("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new T("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new He(e.start,e.end))}}Xn.prototype.is=function(o){return o==="selection"||o==="view:selection"};class Rd extends ze(Ii){constructor(...e){super(),this._selection=new Xn,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}Rd.prototype.is=function(o){return o==="selection"||o=="documentSelection"||o=="view:selection"||o=="view:documentSelection"};class fr extends R{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const zd=Symbol("bubbling contexts");function jd(o){return class extends o{fire(e,...t){try{const n=e instanceof R?e:new R(this,e),i=Fd(this);if(!i.size)return;if(bs(n,"capturing",this),kr(i,"$capture",n,...t))return n.return;const r=n.startRange||this.selection.getFirstRange(),a=r?r.getContainedElement():null,c=!!a&&!!Cm(i,a);let d=a||function(h){if(!h)return null;const p=h.start.parent,k=h.end.parent,A=p.getPath(),E=k.getPath();return A.length>E.length?p:k}(r);if(bs(n,"atTarget",d),!c){if(kr(i,"$text",n,...t))return n.return;bs(n,"bubbling",d)}for(;d;){if(d.is("rootElement")){if(kr(i,"$root",n,...t))return n.return}else if(d.is("element")&&kr(i,d.name,n,...t))return n.return;if(kr(i,d,n,...t))return n.return;d=d.parent,bs(n,"bubbling",d)}return bs(n,"bubbling",this),kr(i,"$document",n,...t),n.return}catch(n){T.rethrowUnexpectedError(n,this)}}_addEventListener(e,t,n){const i=yt(n.context||"$document"),r=Fd(this);for(const a of i){let c=r.get(a);c||(c=new(ze()),r.set(a,c)),this.listenTo(c,e,t,n)}}_removeEventListener(e,t){const n=Fd(this);for(const i of n.values())this.stopListening(i,e,t)}}}{const o=jd(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{jd[e]=o.prototype[e]})}function bs(o,e,t){o instanceof fr&&(o._eventPhase=e,o._currentTarget=t)}function kr(o,e,t,...n){const i=typeof e=="string"?o.get(e):Cm(o,e);return!!i&&(i.fire(t,...n),t.stop.called)}function Cm(o,e){for(const[t,n]of o)if(typeof t=="function"&&t(e))return n;return null}function Fd(o){return o[zd]||(o[zd]=new Map),o[zd]}class Ja extends jd(Y()){constructor(e){super(),this._postFixers=new Set,this.selection=new Rd,this.roots=new Jn({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.forEach(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}class Mi extends Dn{constructor(e,t,n,i){super(e,t,n,i),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=sD}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new T("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function sD(){if(Vd(this))return null;let o=this.parent;for(;o&&o.is("attributeElement");){if(Vd(o)>1)return null;o=o.parent}return!o||Vd(o)>1?null:this.childCount}function Vd(o){return Array.from(o.getChildren()).filter(e=>!e.is("uiElement")).length}Mi.DEFAULT_PRIORITY=10,Mi.prototype.is=function(o,e){return e?e===this.name&&(o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"):o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Ud extends Dn{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=aD}_insertChild(e,t){if(t&&(t instanceof Si||Array.from(t).length>0))throw new T("view-emptyelement-cannot-add",[this,t]);return 0}}function aD(){return null}Ud.prototype.is=function(o,e){return e?e===this.name&&(o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"):o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Xa extends Dn{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=lD}_insertChild(e,t){if(t&&(t instanceof Si||Array.from(t).length>0))throw new T("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}function cD(o){o.document.on("arrowKey",(e,t)=>function(n,i,r){if(i.keyCode==it.arrowright){const a=i.domTarget.ownerDocument.defaultView.getSelection(),c=a.rangeCount==1&&a.getRangeAt(0).collapsed;if(c||i.shiftKey){const d=a.focusNode,h=a.focusOffset,p=r.domPositionToView(d,h);if(p===null)return;let k=!1;const A=p.getLastMatchingPosition(E=>(E.item.is("uiElement")&&(k=!0),!(!E.item.is("uiElement")&&!E.item.is("attributeElement"))));if(k){const E=r.viewPositionToDom(A);c?a.collapse(E.parent,E.offset):a.extend(E.parent,E.offset)}}}}(0,t,o.domConverter),{priority:"low"})}function lD(){return null}Xa.prototype.is=function(o,e){return e?e===this.name&&(o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"):o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Hd extends Dn{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=dD}_insertChild(e,t){if(t&&(t instanceof Si||Array.from(t).length>0))throw new T("view-rawelement-cannot-add",[this,t]);return 0}render(e,t){}}function dD(){return null}Hd.prototype.is=function(o,e){return e?e===this.name&&(o==="rawElement"||o==="view:rawElement"||o==="element"||o==="view:element"):o==="rawElement"||o==="view:rawElement"||o===this.name||o==="view:"+this.name||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Bi extends ze(Ii){constructor(e,t){super(),this._children=[],this._customProperties=new Map,this.document=e,t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}get getFillerOffset(){}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const i=function(r,a){return typeof a=="string"?[new _t(r,a)]:(ae(a)||(a=[a]),Array.from(a).map(c=>typeof c=="string"?new _t(r,c):c instanceof go?new _t(r,c.data):c))}(this.document,t);for(const r of i)r.parent!==null&&r._remove(),r.parent=this,this._children.splice(e,0,r),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}Bi.prototype.is=function(o){return o==="documentFragment"||o==="view:documentFragment"};class vm{constructor(e){this._cloneGroups=new Map,this._slotFactory=null,this.document=e}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(e,t){this.document.selection._setFocus(e,t)}createDocumentFragment(e){return new Bi(this.document,e)}createText(e){return new _t(this.document,e)}createAttributeElement(e,t,n={}){const i=new Mi(this.document,e,t);return typeof n.priority=="number"&&(i._priority=n.priority),n.id&&(i._id=n.id),n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createContainerElement(e,t,n={},i={}){let r=null;En(n)?i=n:r=n;const a=new ks(this.document,e,t,r);return i.renderUnsafeAttributes&&a._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),a}createEditableElement(e,t,n={}){const i=new Qa(this.document,e,t);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createEmptyElement(e,t,n={}){const i=new Ud(this.document,e,t);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createUIElement(e,t,n){const i=new Xa(this.document,e,t);return n&&(i.render=n),i}createRawElement(e,t,n,i={}){const r=new Hd(this.document,e,t);return n&&(r.render=n),i.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),r}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){En(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof Ie?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new T("view-writer-break-non-container-element",this.document);if(!t.parent)throw new T("view-writer-break-root",this.document);if(e.isAtStart)return Ie._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert(Ie._createAfter(t),n);const i=new He(e,Ie._createAt(t,"end")),r=new Ie(n,0);this.move(i,r)}return Ie._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const a=n.parent,c=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new Ie(a,c))}const i=n.getChild(t-1),r=n.getChild(t);if(!i||!r)return e;if(i.is("$text")&&r.is("$text"))return xm(i,r);if(i.is("attributeElement")&&r.is("attributeElement")&&i.isSimilar(r)){const a=i.childCount;return i._appendChild(r.getChildren()),r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new Ie(i,a))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!(t&&n&&t.is("containerElement")&&n.is("containerElement")))throw new T("view-writer-merge-containers-invalid-position",this.document);const i=t.getChild(t.childCount-1),r=i instanceof _t?Ie._createAt(i,"end"):Ie._createAt(t,"end");return this.move(He._createIn(n),Ie._createAt(t,"end")),this.remove(He._createOn(n)),r}insert(e,t){Em(t=ae(t)?[...t]:[t],this.document);const n=t.reduce((a,c)=>{const d=a[a.length-1],h=!c.is("uiElement");return d&&d.breakAttributes==h?d.nodes.push(c):a.push({breakAttributes:h,nodes:[c]}),a},[]);let i=null,r=e;for(const{nodes:a,breakAttributes:c}of n){const d=this._insertNodes(r,a,c);i||(i=d.start),r=d.end}return i?new He(i,r):new He(e)}remove(e){const t=e instanceof He?e:He._createOn(e);if(_s(t,this.document),t.isCollapsed)return new Bi(this.document);const{start:n,end:i}=this._breakAttributesRange(t,!0),r=n.parent,a=i.offset-n.offset,c=r._removeChildren(n.offset,a);for(const h of c)this._removeFromClonedElementsGroup(h);const d=this.mergeAttributes(n);return t.start=d,t.end=d.clone(),new Bi(this.document,c)}clear(e,t){_s(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const i of n){const r=i.item;let a;if(r.is("element")&&t.isSimilar(r))a=He._createOn(r);else if(!i.nextPosition.isAfter(e.start)&&r.is("$textProxy")){const c=r.getAncestors().find(d=>d.is("element")&&t.isSimilar(d));c&&(a=He._createIn(c))}a&&(a.end.isAfter(e.end)&&(a.end=e.end),a.start.isBefore(e.start)&&(a.start=e.start),this.remove(a))}}move(e,t){let n;if(t.isAfter(e.end)){const i=(t=this._breakAttributes(t,!0)).parent,r=i.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=i.childCount-r}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof Mi))throw new T("view-writer-wrap-invalid-attribute",this.document);if(_s(e,this.document),e.isCollapsed){let i=e.start;i.parent.is("element")&&(n=i.parent,!Array.from(n.getChildren()).some(a=>!a.is("uiElement")))&&(i=i.getLastMatchingPosition(a=>a.item.is("uiElement"))),i=this._wrapPosition(i,t);const r=this.document.selection;return r.isCollapsed&&r.getFirstPosition().isEqual(e.start)&&this.setSelection(i),new He(i)}return this._wrapRange(e,t);var n}unwrap(e,t){if(!(t instanceof Mi))throw new T("view-writer-unwrap-invalid-attribute",this.document);if(_s(e,this.document),e.isCollapsed)return e;const{start:n,end:i}=this._breakAttributesRange(e,!0),r=n.parent,a=this._unwrapChildren(r,n.offset,i.offset,t),c=this.mergeAttributes(a.start);c.isEqual(a.start)||a.end.offset--;const d=this.mergeAttributes(a.end);return new He(c,d)}rename(e,t){const n=new ks(this.document,e,t.getAttributes());return this.insert(Ie._createAfter(t),n),this.move(He._createIn(t),Ie._createAt(n,0)),this.remove(He._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return Ie._createAt(e,t)}createPositionAfter(e){return Ie._createAfter(e)}createPositionBefore(e){return Ie._createBefore(e)}createRange(e,t){return new He(e,t)}createRangeOn(e){return He._createOn(e)}createRangeIn(e){return He._createIn(e)}createSelection(...e){return new Xn(...e)}createSlot(e="children"){if(!this._slotFactory)throw new T("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let i,r;if(i=n?$d(e):e.parent.is("$text")?e.parent.parent:e.parent,!i)throw new T("view-writer-invalid-position-container",this.document);r=n?this._breakAttributes(e,!0):e.parent.is("$text")?Wd(e):e;const a=i._insertChild(r.offset,t);for(const p of t)this._addToClonedElementsGroup(p);const c=r.getShiftedBy(a),d=this.mergeAttributes(r);d.isEqual(r)||c.offset--;const h=this.mergeAttributes(c);return new He(d,h)}_wrapChildren(e,t,n,i){let r=t;const a=[];for(;r<n;){const d=e.getChild(r),h=d.is("$text"),p=d.is("attributeElement");if(p&&this._wrapAttributeElement(i,d))a.push(new Ie(e,r));else if(h||!p||uD(i,d)){const k=i._clone();d._remove(),k._appendChild(d),e._insertChild(r,k),this._addToClonedElementsGroup(k),a.push(new Ie(e,r))}else this._wrapChildren(d,0,d.childCount,i);r++}let c=0;for(const d of a)d.offset-=c,d.offset!=t&&(this.mergeAttributes(d).isEqual(d)||(c++,n--));return He._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,i){let r=t;const a=[];for(;r<n;){const d=e.getChild(r);if(d.is("attributeElement"))if(d.isSimilar(i)){const h=d.getChildren(),p=d.childCount;d._remove(),e._insertChild(r,h),this._removeFromClonedElementsGroup(d),a.push(new Ie(e,r),new Ie(e,r+p)),r+=p,n+=p-1}else this._unwrapAttributeElement(i,d)?(a.push(new Ie(e,r),new Ie(e,r+1)),r++):(this._unwrapChildren(d,0,d.childCount,i),r++);else r++}let c=0;for(const d of a)d.offset-=c,!(d.offset==t||d.offset==n)&&(this.mergeAttributes(d).isEqual(d)||(c++,n--));return He._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:i}=this._breakAttributesRange(e,!0),r=n.parent,a=this._wrapChildren(r,n.offset,i.offset,t),c=this.mergeAttributes(a.start);c.isEqual(a.start)||a.end.offset--;const d=this.mergeAttributes(a.end);return new He(c,d)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return ym(e.clone());e.parent.is("$text")&&(e=Wd(e));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const i=new He(e,e.getShiftedBy(1));this.wrap(i,t);const r=new Ie(n.parent,n.index);n._remove();const a=r.nodeBefore,c=r.nodeAfter;return a instanceof _t&&c instanceof _t?xm(a,c):ym(r)}_wrapAttributeElement(e,t){if(!Dm(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&(t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t));for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!Dm(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,i=e.end;if(_s(e,this.document),e.isCollapsed){const d=this._breakAttributes(e.start,t);return new He(d,d)}const r=this._breakAttributes(i,t),a=r.parent.childCount,c=this._breakAttributes(n,t);return r.offset+=r.parent.childCount-a,new He(c,r)}_breakAttributes(e,t=!1){const n=e.offset,i=e.parent;if(e.parent.is("emptyElement"))throw new T("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new T("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new T("view-writer-cannot-break-raw-element",this.document);if(!t&&i.is("$text")&&qd(i.parent)||qd(i))return e.clone();if(i.is("$text"))return this._breakAttributes(Wd(e),t);if(n==i.childCount){const r=new Ie(i.parent,i.index+1);return this._breakAttributes(r,t)}if(n===0){const r=new Ie(i.parent,i.index);return this._breakAttributes(r,t)}{const r=i.index+1,a=i._clone();i.parent._insertChild(r,a),this._addToClonedElementsGroup(a);const c=i.childCount-n,d=i._removeChildren(n,c);a._appendChild(d);const h=new Ie(i.parent,r);return this._breakAttributes(h,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const i of e.getChildren())this._addToClonedElementsGroup(i);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const i of e.getChildren())this._removeFromClonedElementsGroup(i);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function $d(o){let e=o.parent;for(;!qd(e);){if(!e)return;e=e.parent}return e}function uD(o,e){return o.priority<e.priority||!(o.priority>e.priority)&&o.getIdentity()<e.getIdentity()}function ym(o){const e=o.nodeBefore;if(e&&e.is("$text"))return new Ie(e,e.data.length);const t=o.nodeAfter;return t&&t.is("$text")?new Ie(t,0):o}function Wd(o){if(o.offset==o.parent.data.length)return new Ie(o.parent.parent,o.parent.index+1);if(o.offset===0)return new Ie(o.parent.parent,o.parent.index);const e=o.parent.data.slice(o.offset);return o.parent._data=o.parent.data.slice(0,o.offset),o.parent.parent._insertChild(o.parent.index+1,new _t(o.root.document,e)),new Ie(o.parent.parent,o.parent.index+1)}function xm(o,e){const t=o.data.length;return o._data+=e.data,e._remove(),new Ie(o,t)}const hD=[_t,Mi,ks,Ud,Hd,Xa];function Em(o,e){for(const t of o){if(!hD.some(n=>t instanceof n))throw new T("view-writer-insert-invalid-node-type",e);t.is("$text")||Em(t.getChildren(),e)}}function qd(o){return o&&(o.is("containerElement")||o.is("documentFragment"))}function _s(o,e){const t=$d(o.start),n=$d(o.end);if(!t||!n||t!==n)throw new T("view-writer-invalid-range-container",e)}function Dm(o,e){return o.id===null&&e.id===null}const Im=o=>o.createTextNode(" "),Sm=o=>{const e=o.createElement("span");return e.dataset.ckeFiller="true",e.innerText=" ",e},Tm=o=>{const e=o.createElement("br");return e.dataset.ckeFiller="true",e},eo=7,ws="⁠".repeat(eo);function In(o){return typeof o=="string"?o.substr(0,eo)===ws:Ht(o)&&o.data.substr(0,eo)===ws}function As(o){return o.data.length==eo&&In(o)}function Mm(o){const e=typeof o=="string"?o:o.data;return In(o)?e.slice(eo):e}function gD(o,e){if(e.keyCode==it.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,i=t.getRangeAt(0).startOffset;In(n)&&i<=eo&&t.collapse(n,0)}}}var Bm=m(8264),pD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(Bm.A,pD),Bm.A.locals;class mD extends Y(){constructor(e,t){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=e,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),w.isBlink&&!w.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()})}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new T("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){if(this.isComposing&&!w.isAndroid)return;let e=null;const t=!(w.isBlink&&!w.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=Ie._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),i=n.parent.ownerDocument;In(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=Pm(i,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.domConverter._clearTemporaryCustomProperties(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.childNodes),i=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),r=this._diffNodeLists(n,i),a=this._findUpdateActions(r,n,i,fD);if(a.indexOf("update")!==-1){const c={equal:0,insert:0,delete:0};for(const d of a)if(d==="update"){const h=c.equal+c.insert,p=c.equal+c.delete,k=e.getChild(h);!k||k.is("uiElement")||k.is("rawElement")||this._updateElementMappings(k,n[p]),qp(i[h]),c.equal++}else c[d]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?Ie._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&Ht(t.parent)&&In(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!In(e))throw new T("view-renderer-filler-was-lost",this);As(e)?e.remove():e.data=e.data.substr(eo),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(a){if(a.getAttribute("contenteditable")=="false")return!1;const c=a.findAncestor(d=>d.hasAttribute("contenteditable"));return!c||c.getAttribute("contenteditable")=="true"}(t)||n===t.getFillerOffset())return!1;const i=e.nodeBefore,r=e.nodeAfter;return!(i instanceof _t||r instanceof _t)&&(!w.isAndroid||!i&&!r)}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e);let i=this.domConverter.viewToDom(e).data;const r=t.inlineFillerPosition;r&&r.parent==e.parent&&r.offset==e.index&&(i=ws+i),Nm(n,i)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(r=>r.name),i=e.getAttributeKeys();for(const r of i)this.domConverter.setDomElementAttribute(t,r,e.getAttribute(r),e);for(const r of n)e.hasAttribute(r)||this.domConverter.removeDomElementAttribute(t,r)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;if(w.isAndroid){let k=null;for(const A of Array.from(n.childNodes)){if(k&&Ht(k)&&Ht(A)){n.normalize();break}k=A}}const i=t.inlineFillerPosition,r=n.childNodes,a=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));i&&i.parent===e&&Pm(n.ownerDocument,a,i.offset);const c=this._diffNodeLists(r,a),d=this._findUpdateActions(c,r,a,kD);let h=0;const p=new Set;for(const k of d)k==="delete"?(p.add(r[h]),qp(r[h])):k!=="equal"&&k!=="update"||h++;h=0;for(const k of d)k==="insert"?(Up(n,h,a[h]),h++):k==="update"?(Nm(r[h],a[h].data),h++):k==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(a[h])),h++);for(const k of p)k.parentNode||this.domConverter.unbindDomElement(k)}_diffNodeLists(e,t){return e=function(n,i){const r=Array.from(n);return r.length==0||!i||r[r.length-1]==i&&r.pop(),r}(e,this._fakeSelectionContainer),F(e,t,bD.bind(null,this.domConverter))}_findUpdateActions(e,t,n,i){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let r=[],a=[],c=[];const d={equal:0,insert:0,delete:0};for(const h of e)h==="insert"?c.push(n[d.equal+d.insert]):h==="delete"?a.push(t[d.equal+d.delete]):(r=r.concat(F(a,c,i).map(p=>p==="equal"?"update":p)),r.push("equal"),a=[],c=[]),d[h]++;return r.concat(F(a,c,i).map(h=>h==="equal"?"update":h))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(w.isBlink&&!w.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&w.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(a){const c=a.createElement("div");return c.className="ck-fake-selection-container",Object.assign(c.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),c.textContent=" ",c}(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;n.parentElement&&n.parentElement==e||e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const i=t.getSelection(),r=t.createRange();i.removeAllRanges(),r.selectNodeContents(n),i.addRange(r)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),i=this.domConverter.viewPositionToDom(this.selection.focus);t.setBaseAndExtent(n.parent,n.offset,i.parent,i.offset),w.isGecko&&function(r,a){const c=r.parent;if(c.nodeType!=Node.ELEMENT_NODE||r.offset!=c.childNodes.length-1)return;const d=c.childNodes[r.offset];d&&d.tagName=="BR"&&a.addRange(a.getRangeAt(0))}(i,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const n=e.activeElement,i=this.domConverter.mapDomToView(n);n&&i&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function Pm(o,e,t){const n=e instanceof Array?e:e.childNodes,i=n[t];if(Ht(i))return i.data=ws+i.data,i;{const r=o.createTextNode(ws);return Array.isArray(e)?n.splice(t,0,r):Up(e,t,r),r}}function fD(o,e){return qo(o)&&qo(e)&&!Ht(o)&&!Ht(e)&&!ps(o)&&!ps(e)&&o.tagName.toLowerCase()===e.tagName.toLowerCase()}function kD(o,e){return qo(o)&&qo(e)&&Ht(o)&&Ht(e)}function bD(o,e,t){return e===t||(Ht(e)&&Ht(t)?e.data===t.data:!(!o.isBlockFiller(e)||!o.isBlockFiller(t)))}function Nm(o,e){const t=o.data;if(t==e)return;const n=M(t,e);for(const i of n)i.type==="insert"?o.insertData(i.index,i.values.join("")):o.deleteData(i.index,i.howMany)}const _D=Tm(Re.document),wD=Im(Re.document),AD=Sm(Re.document),ec="data-ck-unsafe-attribute-",Om="data-ck-unsafe-element";class tc{constructor(e,{blockFillerMode:t,renderingMode:n="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new po,this._inlineObjectElementMatcher=new po,this._elementsWithTemporaryCustomProperties=new Set,this.document=e,this.renderingMode=n,this.blockFillerMode=t||(n==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?Re.document:Re.document.implementation.createHTMLDocument("")}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new Xn(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of Array.from(e.children))this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const n=new DOMParser().parseFromString(t,"text/html"),i=n.createDocumentFragment(),r=n.body.childNodes;for(;r.length>0;)i.appendChild(r[0]);const a=n.createTreeWalker(i,NodeFilter.SHOW_ELEMENT),c=[];let d;for(;d=a.nextNode();)c.push(d);for(const h of c){for(const k of h.getAttributeNames())this.setDomElementAttribute(h,k,h.getAttribute(k));const p=h.tagName.toLowerCase();this._shouldRenameElement(p)&&(zm(p),h.replaceWith(this._createReplacementDomElement(p,h)))}for(;e.firstChild;)e.firstChild.remove();e.append(i)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}{const n=e;if(this.mapViewToDom(n)){if(!n.getCustomProperty("editingPipeline:doNotReuseOnce"))return this.mapViewToDom(n);this._elementsWithTemporaryCustomProperties.add(n)}let i;if(n.is("documentFragment"))i=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(i,n);else{if(n.is("uiElement"))return i=n.name==="$comment"?this._domDocument.createComment(n.getCustomProperty("$rawContent")):n.render(this._domDocument,this),t.bind&&this.bindElements(i,n),i;this._shouldRenameElement(n.name)?(zm(n.name),i=this._createReplacementDomElement(n.name)):i=n.hasAttribute("xmlns")?this._domDocument.createElementNS(n.getAttribute("xmlns"),n.name):this._domDocument.createElement(n.name),n.is("rawElement")&&n.render(i,this),t.bind&&this.bindElements(i,n);for(const r of n.getAttributeKeys())this.setDomElementAttribute(i,r,n.getAttribute(r),n)}if(t.withChildren!==!1)for(const r of this.viewChildrenToDom(n,t))i.appendChild(r);return i}}setDomElementAttribute(e,t,n,i){const r=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||i&&i.shouldRenderUnsafeAttribute(t);r||W("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),function(a){try{Re.document.createAttribute(a)}catch{return!1}return!0}(t)?(e.hasAttribute(t)&&!r?e.removeAttribute(t):e.hasAttribute(ec+t)&&r&&e.removeAttribute(ec+t),e.setAttribute(r?t:ec+t,n)):W("domconverter-invalid-attribute-detected",{domElement:e,key:t,value:n})}removeDomElementAttribute(e,t){t!=Om&&(e.removeAttribute(t),e.removeAttribute(ec+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let i=0;for(const r of e.getChildren()){n===i&&(yield this._getBlockFiller());const a=r.is("element")&&!!r.getCustomProperty("dataPipeline:transparentRendering")&&!Jt(r.getAttributes());a&&this.renderingMode=="data"?yield*this.viewChildrenToDom(r,t):(a&&W("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:r}),yield this.viewToDom(r,t)),i++}n===i&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),i=this._domDocument.createRange();return i.setStart(t.parent,t.offset),i.setEnd(n.parent,n.offset),i}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let i=e.offset;return In(n)&&(i+=eo),{parent:n,offset:i}}{let n,i,r;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;r=n.childNodes[0]}else{const a=e.nodeBefore;if(i=a.is("$text")?this.findCorrespondingDomText(a):this.mapViewToDom(a),!i)return null;n=i.parentNode,r=i.nextSibling}return Ht(r)&&In(r)?{parent:r,offset:eo}:{parent:n,offset:i?Ha(i)+1:0}}}domToView(e,t={}){const n=[],i=this._domToView(e,t,n),r=i.next().value;return r?(i.next(),this._processDomInlineNodes(null,n,t),r.is("$text")&&r.data.length==0?null:r):null}*domChildrenToView(e,t={},n=[]){for(let i=0;i<e.childNodes.length;i++){const r=e.childNodes[i],a=this._domToView(r,t,n),c=a.next().value;c!==null&&(this._isBlockViewElement(c)&&this._processDomInlineNodes(e,n,t),yield c,a.next())}this._processDomInlineNodes(e,n,t)}domSelectionToView(e){if(function(i){if(!w.isGecko||!i.rangeCount)return!1;const r=i.getRangeAt(0).startContainer;try{Object.prototype.toString.call(r)}catch{return!0}return!1}(e))return new Xn([]);if(e.rangeCount===1){let i=e.getRangeAt(0).startContainer;Ht(i)&&(i=i.parentNode);const r=this.fakeSelectionToView(i);if(r)return r}const t=this.isDomSelectionBackward(e),n=[];for(let i=0;i<e.rangeCount;i++){const r=e.getRangeAt(i),a=this.domRangeToView(r);a&&n.push(a)}return new Xn(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new He(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,Ha(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return Ie._createBefore(n);if(Ht(e)){if(As(e))return this.domPositionToView(e.parentNode,Ha(e));const i=this.findCorrespondingViewText(e);let r=t;return i?(In(e)&&(r-=eo,r=r<0?0:r),new Ie(i,r)):null}if(t===0){const i=this.mapDomToView(e);if(i)return new Ie(i,0)}else{const i=e.childNodes[t-1];if(Ht(i)&&As(i)||i&&this.isBlockFiller(i))return this.domPositionToView(i.parentNode,Ha(i));const r=Ht(i)?this.findCorrespondingViewText(i):this.mapDomToView(i);if(r&&r.parent)return new Ie(r.parent,r.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(As(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const i=this.mapDomToView(n);if(i){const r=i.nextSibling;return r instanceof _t?r:null}}else{const i=this.mapDomToView(e.parentNode);if(i){const r=i.getChild(0);return r instanceof _t?r:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:i}=Re.window,r=[];Lm(t,a=>{const{scrollLeft:c,scrollTop:d}=a;r.push([c,d])}),t.focus(),Lm(t,a=>{const[c,d]=r.shift();a.scrollLeft=c,a.scrollTop=d}),Re.window.scrollTo(n,i)}}_clearDomSelection(){const e=this.mapViewToDom(this.document.selection.editableElement);if(!e)return;const t=e.ownerDocument.defaultView.getSelection(),n=this.domSelectionToView(t);n&&n.rangeCount>0&&t.removeAllRanges()}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(_D):!(e.tagName!=="BR"||!Rm(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(AD)||function(t,n){return t.isEqualNode(wD)&&Rm(t,n)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=function(n){const i=[];let r=n;for(;r&&r.nodeType!=Node.DOCUMENT_NODE;)i.unshift(r),r=r.parentNode;return i}(e);for(t.pop();t.length;){const n=t.pop(),i=this._domToViewMapping.get(n);if(i&&(i.is("uiElement")||i.is("rawElement")))return i}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}registerInlineObjectMatcher(e){this._inlineObjectElementMatcher.add(e)}_clearTemporaryCustomProperties(){for(const e of this._elementsWithTemporaryCustomProperties)e._removeCustomProperty("editingPipeline:doNotReuseOnce");this._elementsWithTemporaryCustomProperties.clear()}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return Im(this._domDocument);case"markedNbsp":return Sm(this._domDocument);case"br":return Tm(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(Ht(e)&&In(e)&&t<eo||this.isElement(e)&&In(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!n||!n.is("uiElement")&&!n.is("rawElement")}*_domToView(e,t,n){if(this.isBlockFiller(e))return null;const i=this.getHostViewElement(e);if(i)return i;if(ps(e)&&t.skipComments)return null;if(Ht(e)){if(As(e))return null;{const r=e.data;if(r==="")return null;const a=new _t(this.document,r);return n.push(a),a}}{let r=this.mapDomToView(e);if(r)return this._isInlineObjectElement(r)&&n.push(r),r;if(this.isDocumentFragment(e))r=new Bi(this.document),t.bind&&this.bindDocumentFragments(e,r);else{r=this._createViewElement(e,t),t.bind&&this.bindElements(e,r);const c=e.attributes;if(c)for(let d=c.length,h=0;h<d;h++)r._setAttribute(c[h].name,c[h].value);if(this._isViewElementWithRawContent(r,t))return r._setCustomProperty("$rawContent",e.innerHTML),this._isBlockViewElement(r)||n.push(r),r;if(ps(e))return r._setCustomProperty("$rawContent",e.data),r}yield r;const a=[];if(t.withChildren!==!1)for(const c of this.domChildrenToView(e,t,a))r._appendChild(c);if(this._isInlineObjectElement(r))n.push(r);else for(const c of a)n.push(c)}}_processDomInlineNodes(e,t,n){if(!t.length||e&&!this.isDocumentFragment(e)&&!this._isBlockDomElement(e))return;let i=!1;for(let r=0;r<t.length;r++){const a=t[r];if(!a.is("$text")){i=!1;continue}let c,d=!1;if(CD(a,this.preElements))c=Mm(a.data);else{c=a.data.replace(/[ \n\t\r]{1,}/g," "),d=/[^\S\u00A0]/.test(c.charAt(c.length-1));const h=r>0?t[r-1]:null,p=r+1<t.length?t[r+1]:null,k=!h||h.is("element")&&h.name=="br"||i,A=!p&&!In(a.data);n.withChildren!==!1&&(k&&(c=c.replace(/^ /,"")),A&&(c=c.replace(/ $/,""))),c=Mm(c),c=c.replace(/ \u00A0/g,"  ");const E=p&&p.is("element")&&p.name!="br",I=p&&p.is("$text")&&p.data.charAt(0)==" ";(/[ \u00A0]\u00A0$/.test(c)||!p||E||I)&&(c=c.replace(/\u00A0$/," ")),(k||h&&h.is("element")&&h.name!="br")&&(c=c.replace(/^\u00A0/," "))}c.length==0&&a.parent?(a._remove(),t.splice(r,1),r--):(a._data=c,i=d)}t.length=0}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(t=" "+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),i=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&n&&!i||(t=t.substr(0,t.length-1)+" ")}return t.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_getTouchingInlineViewNode(e,t){const n=new Ti({startPosition:t?Ie._createAfter(e):Ie._createBefore(e),direction:t?"forward":"backward"});for(const i of n){if(i.item.is("element","br"))return null;if(this._isInlineObjectElement(i.item))return i.item;if(i.item.is("containerElement"))return null;if(i.item.is("$textProxy"))return i.item}return null}_isBlockDomElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isBlockViewElement(e){return e.is("element")&&this.blockElements.includes(e.name)}_isInlineObjectElement(e){return!!e.is("element")&&(e.name=="br"||this.inlineObjectElements.includes(e.name)||!!this._inlineObjectElementMatcher.match(e))}_createViewElement(e,t){if(ps(e))return new Xa(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new Dn(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&e.is("element")&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const n=this._domDocument.createElement("span");if(n.setAttribute(Om,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const i of t.getAttributeNames())n.setAttribute(i,t.getAttribute(i))}return n}}function CD(o,e){return o.getAncestors().some(t=>t.is("element")&&e.includes(t.name))}function Lm(o,e){let t=o;for(;t;)e(t),t=t.parentElement}function Rm(o,e){const t=o.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function zm(o){o==="script"&&W("domconverter-unsafe-script-element-detected"),o==="style"&&W("domconverter-unsafe-style-element-detected")}class mo extends Fn(){constructor(e){super(),this._isEnabled=!1,this.view=e,this.document=e.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const jm=tm(function(o,e){dr(e,hr(e),o)});class br{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,jm(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Ko extends mo{constructor(){super(...arguments),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(n,i)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(i.target)&&this.onDomEvent(i)},{useCapture:this.useCapture})})}stopObserving(e){this.stopListening(e)}fire(e,t,n){this.isEnabled&&this.document.fire(e,new br(this.view,t,n))}}class vD extends Ko{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return pr(this)}};this.fire(e.type,e,t)}}const Gd=function(){return Be.Date.now()};var yD=/\s/;const xD=function(o){for(var e=o.length;e--&&yD.test(o.charAt(e)););return e};var ED=/^\s+/;const DD=function(o){return o&&o.slice(0,xD(o)+1).replace(ED,"")};var ID=/^[-+]0x[0-9a-f]+$/i,SD=/^0b[01]+$/i,TD=/^0o[0-7]+$/i,MD=parseInt;const Fm=function(o){if(typeof o=="number")return o;if(Ka(o))return NaN;if(ke(o)){var e=typeof o.valueOf=="function"?o.valueOf():o;o=ke(e)?e+"":e}if(typeof o!="string")return o===0?o:+o;o=DD(o);var t=SD.test(o);return t||TD.test(o)?MD(o.slice(2),t?2:8):ID.test(o)?NaN:+o};var BD=Math.max,PD=Math.min;const _r=function(o,e,t){var n,i,r,a,c,d,h=0,p=!1,k=!1,A=!0;if(typeof o!="function")throw new TypeError("Expected a function");function E(q){var Z=n,oe=i;return n=i=void 0,h=q,a=o.apply(oe,Z)}function I(q){var Z=q-d;return d===void 0||Z>=e||Z<0||k&&q-h>=r}function S(){var q=Gd();if(I(q))return B(q);c=setTimeout(S,function(Z){var oe=e-(Z-d);return k?PD(oe,r-(Z-h)):oe}(q))}function B(q){return c=void 0,A&&n?E(q):(n=i=void 0,a)}function O(){var q=Gd(),Z=I(q);if(n=arguments,i=this,d=q,Z){if(c===void 0)return function(oe){return h=oe,c=setTimeout(S,e),p?E(oe):a}(d);if(k)return clearTimeout(c),c=setTimeout(S,e),E(d)}return c===void 0&&(c=setTimeout(S,e)),a}return e=Fm(e)||0,ke(t)&&(p=!!t.leading,r=(k="maxWait"in t)?BD(Fm(t.maxWait)||0,e):r,A="trailing"in t?!!t.trailing:A),O.cancel=function(){c!==void 0&&clearTimeout(c),h=0,n=d=i=c=void 0},O.flush=function(){return c===void 0?a:B(Gd())},O};class ND extends mo{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=_r(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new Xn(t.getRanges(),{backward:t.isBackward,fake:!1});e!=it.arrowleft&&e!=it.arrowup||n.setTo(n.getFirstPosition()),e!=it.arrowright&&e!=it.arrowdown||n.setTo(n.getLastPosition());const i={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",i),this._fireSelectionChangeDoneDebounced(i)}}const OD=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this},LD=function(o){return this.__data__.has(o)};function nc(o){var e=-1,t=o==null?0:o.length;for(this.__data__=new Pa;++e<t;)this.add(o[e])}nc.prototype.add=nc.prototype.push=OD,nc.prototype.has=LD;const RD=nc,zD=function(o,e){for(var t=-1,n=o==null?0:o.length;++t<n;)if(e(o[t],t,o))return!0;return!1},jD=function(o,e){return o.has(e)},Vm=function(o,e,t,n,i,r){var a=1&t,c=o.length,d=e.length;if(c!=d&&!(a&&d>c))return!1;var h=r.get(o),p=r.get(e);if(h&&p)return h==e&&p==o;var k=-1,A=!0,E=2&t?new RD:void 0;for(r.set(o,e),r.set(e,o);++k<c;){var I=o[k],S=e[k];if(n)var B=a?n(S,I,k,e,o,r):n(I,S,k,o,e,r);if(B!==void 0){if(B)continue;A=!1;break}if(E){if(!zD(e,function(O,q){if(!jD(E,q)&&(I===O||i(I,O,t,n,r)))return E.push(q)})){A=!1;break}}else if(I!==S&&!i(I,S,t,n,r)){A=!1;break}}return r.delete(o),r.delete(e),A},FD=function(o){var e=-1,t=Array(o.size);return o.forEach(function(n,i){t[++e]=[i,n]}),t},VD=function(o){var e=-1,t=Array(o.size);return o.forEach(function(n){t[++e]=n}),t};var Um=Oe?Oe.prototype:void 0,Kd=Um?Um.valueOf:void 0;const UD=function(o,e,t,n,i,r,a){switch(t){case"[object DataView]":if(o.byteLength!=e.byteLength||o.byteOffset!=e.byteOffset)return!1;o=o.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(o.byteLength!=e.byteLength||!r(new ja(o),new ja(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return ss(+o,+e);case"[object Error]":return o.name==e.name&&o.message==e.message;case"[object RegExp]":case"[object String]":return o==e+"";case"[object Map]":var c=FD;case"[object Set]":var d=1&n;if(c||(c=VD),o.size!=e.size&&!d)return!1;var h=a.get(o);if(h)return h==e;n|=2,a.set(o,e);var p=Vm(c(o),c(e),n,i,r,a);return a.delete(o),p;case"[object Symbol]":if(Kd)return Kd.call(o)==Kd.call(e)}return!1};var HD=Object.prototype.hasOwnProperty;const $D=function(o,e,t,n,i,r){var a=1&t,c=dd(o),d=c.length;if(d!=dd(e).length&&!a)return!1;for(var h=d;h--;){var p=c[h];if(!(a?p in e:HD.call(e,p)))return!1}var k=r.get(o),A=r.get(e);if(k&&A)return k==e&&A==o;var E=!0;r.set(o,e),r.set(e,o);for(var I=a;++h<d;){var S=o[p=c[h]],B=e[p];if(n)var O=a?n(B,S,p,e,o,r):n(S,B,p,o,e,r);if(!(O===void 0?S===B||i(S,B,t,n,r):O)){E=!1;break}I||(I=p=="constructor")}if(E&&!I){var q=o.constructor,Z=e.constructor;q==Z||!("constructor"in o)||!("constructor"in e)||typeof q=="function"&&q instanceof q&&typeof Z=="function"&&Z instanceof Z||(E=!1)}return r.delete(o),r.delete(e),E};var Hm="[object Arguments]",$m="[object Array]",oc="[object Object]",Wm=Object.prototype.hasOwnProperty;const WD=function(o,e,t,n,i,r){var a=an(o),c=an(e),d=a?$m:hs(o),h=c?$m:hs(e),p=(d=d==Hm?oc:d)==oc,k=(h=h==Hm?oc:h)==oc,A=d==h;if(A&&ls(o)){if(!ls(e))return!1;a=!0,p=!1}if(A&&!p)return r||(r=new lr),a||ad(o)?Vm(o,e,t,n,i,r):UD(o,e,d,t,n,i,r);if(!(1&t)){var E=p&&Wm.call(o,"__wrapped__"),I=k&&Wm.call(e,"__wrapped__");if(E||I){var S=E?o.value():o,B=I?e.value():e;return r||(r=new lr),i(S,B,t,n,r)}}return!!A&&(r||(r=new lr),$D(o,e,t,n,i,r))},ic=function o(e,t,n,i,r){return e===t||(e==null||t==null||!zn(e)&&!zn(t)?e!=e&&t!=t:WD(e,t,n,i,o,r))},qD=function(o,e,t){var n=(t=typeof t=="function"?t:void 0)?t(o,e):void 0;return n===void 0?ic(o,e,void 0,t):!!n};class qm extends mo{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.add(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}stopObserving(e){if(this._domElements.delete(e),this.isEnabled){this._mutationObserver.disconnect();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Set,i=new Set;for(const a of e){const c=t.mapDomToView(a.target);c&&(c.is("uiElement")||c.is("rawElement")||a.type!=="childList"||this._isBogusBrMutation(a)||i.add(c))}for(const a of e){const c=t.mapDomToView(a.target);if((!c||!c.is("uiElement")&&!c.is("rawElement"))&&a.type==="characterData"){const d=t.findCorrespondingViewText(a.target);d&&!i.has(d.parent)?n.add(d):!d&&In(a.target)&&i.add(t.mapDomToView(a.target.parentNode))}}let r=!1;for(const a of n)r=!0,this.renderer.markToSync("text",a);for(const a of i){const c=t.mapViewToDom(a),d=Array.from(a.getChildren()),h=Array.from(t.domChildrenToView(c,{withChildren:!1}));qD(d,h,GD)||(r=!0,this.renderer.markToSync("children",a))}r&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function GD(o,e){if(!Array.isArray(o))return o===e||!(!o.is("$text")||!e.is("$text"))&&o.data===e.data}class rc extends Ko{constructor(e){super(e),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),e.change(()=>{})},50)}),t.on("blur",(n,i)=>{const r=t.selection.editableElement;r!==null&&r!==i.target||(t.isFocused=!1,this._isFocusChanging=!1,e.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class KD extends mo{constructor(e){super(e),this.mutationObserver=e.getObserver(qm),this.focusObserver=e.getObserver(rc),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=_r(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=_r(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(t)||(this.listenTo(t,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(i,r)=>{this.document.isComposing&&!w.isAndroid||(this._handleSelectionChange(r,t),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(t))}stopObserving(e){this.stopListening(e)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const i=this.domConverter.domSelectionToView(n);if(i.rangeCount!=0){if(this.view.hasDomSelection=!0,this.focusObserver.flush(),!this.selection.isEqual(i)||!this.domConverter.isDomSelectionCorrect(n))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.selection.isSimilar(i))this.view.forceRender();else{const r={oldSelection:this.selection,newSelection:i,domSelection:n};this.document.fire("selectionChange",r),this._fireSelectionChangeDoneDebounced(r)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class YD extends Ko{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class Gm{constructor(e,t={}){this._files=t.cacheFiles?Km(e):null,this._native=e}get files(){return this._files||(this._files=Km(this._native)),this._files}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}setDragImage(e,t,n){this._native.setDragImage(e,t,n)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function Km(o){const e=Array.from(o.files||[]),t=Array.from(o.items||[]);return e.length?e:t.filter(n=>n.kind==="file").map(n=>n.getAsFile())}class QD extends Ko{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(e){const t=e.getTargetRanges(),n=this.view,i=n.document;let r=null,a=null,c=[];if(e.dataTransfer&&(r=new Gm(e.dataTransfer)),e.data!==null?a=e.data:r&&(a=r.getData("text/plain")),i.selection.isFake)c=Array.from(i.selection.getRanges());else if(t.length)c=t.map(d=>{const h=n.domConverter.domPositionToView(d.startContainer,d.startOffset),p=n.domConverter.domPositionToView(d.endContainer,d.endOffset);return h?n.createRange(h,p):p?n.createRange(p):void 0}).filter(d=>!!d);else if(w.isAndroid){const d=e.target.ownerDocument.defaultView.getSelection();c=Array.from(n.domConverter.domSelectionToView(d).getRanges())}if(w.isAndroid&&e.inputType=="insertCompositionText"&&a&&a.endsWith(`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[n.createRange(c[0].end)]});else if(e.inputType=="insertText"&&a&&a.includes(`
`,isColorInherited:!1}),n.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...t?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[t]}]:[],n],on:{dragstart:i.to(r=>r.preventDefault())}}]})}}function _b(o,e,t){return(n,i)=>{const r=new tt(o);if(r.width<XS||r.height<JS)return null;let a;a=e.position==="inside"?r.bottom-i.height:r.bottom-i.height/2,a-=e.verticalOffset;const c=t(r,i),d=n.clone().moveTo(c,a).getIntersection(i.clone().moveTo(c,a)).getVisible();return!d||d.getArea()<i.getArea()?null:{top:a,left:c,name:`position_${e.position}-side_${e.side}`,config:{withArrow:!1}}}}function wb(o){const e=o.config.get("ui.poweredBy"),t=e&&e.position||"border";return ZS({position:t,label:eT,verticalOffset:t==="inside"?5:0,horizontalOffset:5,side:o.locale.contentLanguageDirection==="ltr"?"right":"left"},e)}var Ab=m(1801),oT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(Ab.A,oT),Ab.A.locals;const Cb="polite";class iT{constructor(e){this.editor=e}announce(e,t,n=Cb){const i=this.editor;this.view||(this.view=new rT(i.locale),i.ui.view.body.add(this.view));let r=this.view.regionViews.find(a=>a.regionName===e);r||(r=new sT(this.view.locale),this.view.regionViews.add(r)),r.set({regionName:e,text:t,politeness:n})}}class rT extends je{constructor(e){super(e),this.regionViews=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-aria-live-announcer"]},children:this.regionViews})}}class sT extends je{constructor(e){super(e);const t=this.bindTemplate;this.set("regionName",""),this.set("text",""),this.set("politeness",Cb),this.setTemplate({tag:"div",attributes:{role:"region","data-region":t.to("regionName"),"aria-live":t.to("politeness")},children:[{text:t.to("text")}]})}}var aT=Object.defineProperty,vb=Object.getOwnPropertySymbols,cT=Object.prototype.hasOwnProperty,lT=Object.prototype.propertyIsEnumerable,yb=(o,e,t)=>e in o?aT(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;class dT extends Y(){constructor(e){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const t=e.editing.view;this.editor=e,this.componentFactory=new TS(e),this.focusTracker=new Xt,this.tooltipManager=new Ac(e),this.poweredBy=new tT(e),this.ariaLiveAnnouncer=new iT(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(t.document,"layoutChanged",this.update.bind(this)),this.listenTo(t,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null,this.editor.keystrokes.stopListening(e);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const n=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?n():this.once("ready",n)}removeEditableElement(e){const t=this._editableElementsMap.get(e);t&&(this._editableElementsMap.delete(e),this.editor.keystrokes.stopListening(t),this.focusTracker.remove(t),t.ckeditorInstance=null)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const n=e.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let n,i;e.keystrokes.set("Alt+F10",(r,a)=>{const c=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(c)&&!Array.from(t.domRoots.values()).includes(c)&&(n=c);const d=this._getCurrentFocusedToolbarDefinition();d&&i||(i=this._getFocusableCandidateToolbarDefinitions());for(let h=0;h<i.length;h++){const p=i.shift();if(i.push(p),p!==d&&this._focusFocusableCandidateToolbar(p)){d&&d.options.afterBlur&&d.options.afterBlur();break}}a()}),e.keystrokes.set("Esc",(r,a)=>{const c=this._getCurrentFocusedToolbarDefinition();c&&(n?(n.focus(),n=null):e.editing.view.focus(),c.options.afterBlur&&c.options.afterBlur(),a())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:n,options:i}=t;(Di(n.element)||i.beforeFocus)&&e.push(t)}return e.sort((t,n)=>xb(t)-xb(n)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:n}}=e;return n&&n(),!!Di(t.element)&&(t.focus(),!0)}_handleScrollToTheSelection(e,t){const n=((i,r)=>{for(var a in r||(r={}))cT.call(r,a)&&yb(i,a,r[a]);if(vb)for(var a of vb(r))lT.call(r,a)&&yb(i,a,r[a]);return i})({top:0,bottom:0,left:0,right:0},this.viewportOffset);t.viewportOffset.top+=n.top,t.viewportOffset.bottom+=n.bottom,t.viewportOffset.left+=n.left,t.viewportOffset.right+=n.right}}function xb(o){const{toolbarView:e,options:t}=o;let n=10;return Di(e.element)&&n--,t.isContextual&&n--,n}var Eb=m(1185),uT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(Eb.A,uT),Eb.A.locals;class hT extends je{constructor(e){super(e),this.body=new ZI(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class gT extends hT{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new hc;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class pT extends je{constructor(e,t,n){super(e),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const e=this._editingView;function t(n){e.change(i=>{const r=e.document.getRoot(n.name);i.addClass(n.isFocused?"ck-focused":"ck-blurred",r),i.removeClass(n.isFocused?"ck-blurred":"ck-focused",r)})}e.isRenderingInProgress?function n(i){e.once("change:isRenderingInProgress",(r,a,c)=>{c?n(i):t(i)})}(this):t(this)}}class mT extends pT{constructor(e,t,n,i={}){super(e,t,n);const r=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=i.label||(()=>r("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const n=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),n)})}}class Cu extends qa{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class Db extends Y(){constructor(e,t){super(),t&&jm(this,t),e&&this.set(e)}}var Ib=m(991),fT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(Ib.A,fT),Ib.A.locals;var Sb=m(5380),kT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(Sb.A,kT),Sb.A.locals;const vc=gr("px");class yc extends fe{constructor(e){super(e),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const t=this.editor.editing.view,n=t.document.selection.editableElement;return n?t.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}static get pluginName(){return"ContextualBalloon"}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this._view||this._createPanelView(),this.hasView(e.view))throw new T("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const n=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),n.set(e.view,e),this._viewToStack.set(e.view,n),n===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new T("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new T("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}_createPanelView(){this._view=new kn(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new bT(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,i)=>!i&&n>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,i)=>{if(i<2)return"";const r=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[r,i])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new _T(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,n)=>!n&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:n=!0,singleViewMode:i=!1}){this.view.class=t,this.view.withArrow=n,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),i&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class bT extends je{constructor(e){super(e);const t=e.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new Xt,this.buttonPrevView=this._createButtonView(t("Previous"),qe.previousArrow),this.buttonNextView=this._createButtonView(t("Next"),qe.nextArrow),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",i=>i?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const n=new ut(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n}}class _T extends je{constructor(e,t){super(e);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",i=>i?"":"ck-hidden")],style:{top:n.to("top",vc),left:n.to("left",vc),width:n.to("width",vc),height:n.to("height",vc)}},children:this.content}),this.on("change:numberOfPanels",(i,r,a,c)=>{a>c?this._addPanels(a-c):this._removePanels(c-a),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new je;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:n,height:i}=new tt(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:n,height:i})}}}var Tb=m(8298),wT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(Tb.A,wT),Tb.A.locals;const xr=gr("px");class AT extends je{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheBottomOfLimiter",!1),this.set("_stickyTopOffset",null),this.set("_stickyBottomOffset",null),this.content=this.createCollection(),this._contentPanelPlaceholder=new io({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",n=>n?"block":"none"),height:t.to("isSticky",n=>n?xr(this._contentPanelRect.height):null)}}}).render(),this.contentPanelElement=new io({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheBottomOfLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",n=>n?xr(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_stickyTopOffset",n=>n&&xr(n)),bottom:t.to("_stickyBottomOffset",n=>n&&xr(n)),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this.contentPanelElement]})}render(){super.render(),this.checkIfShouldBeSticky(),this.listenTo(Re.document,"scroll",()=>{this.checkIfShouldBeSticky()},{useCapture:!0}),this.listenTo(this,"change:isActive",()=>{this.checkIfShouldBeSticky()})}checkIfShouldBeSticky(){if(!this.limiterElement||!this.isActive)return void this._unstick();const e=new tt(this.limiterElement);let t=e.getVisible();if(t){const n=new tt(Re.window);n.top+=this.viewportTopOffset,n.height-=this.viewportTopOffset,t=t.getIntersection(n)}if(t&&e.top<t.top){const n=t.top;if(n+this._contentPanelRect.height+this.limiterBottomOffset>t.bottom){const i=Math.max(e.bottom-t.bottom,0)+this.limiterBottomOffset;e.bottom-i>e.top+this._contentPanelRect.height?this._stickToBottomOfLimiter(i):this._unstick()}else this._contentPanelRect.height+this.limiterBottomOffset<e.height?this._stickToTopOfAncestors(n):this._unstick()}else this._unstick()}_stickToTopOfAncestors(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=e,this._stickyBottomOffset=null,this._marginLeft=xr(-Re.window.scrollX)}_stickToBottomOfLimiter(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!0,this._stickyTopOffset=null,this._stickyBottomOffset=e,this._marginLeft=xr(-Re.window.scrollX)}_unstick(){this.isSticky=!1,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=null,this._stickyBottomOffset=null,this._marginLeft=null}get _contentPanelRect(){return new tt(this.contentPanelElement)}}class CT extends mc{constructor(e,t){const n=e.t,i=Object.assign({},{showResetButton:!0,showIcon:!0,creator:bc},t);super(e,i.creator),this.label=t.label,this._viewConfig=i,this._viewConfig.showIcon&&(this.iconView=new Io,this.iconView.content=qe.loupe,this.fieldWrapperChildren.add(this.iconView,0),this.extendTemplate({attributes:{class:"ck-search__query_with-icon"}})),this._viewConfig.showResetButton&&(this.resetButtonView=new ut(e),this.resetButtonView.set({label:n("Clear"),icon:qe.cancel,class:"ck-search__reset",isVisible:!1,tooltip:!0}),this.resetButtonView.on("execute",()=>{this.reset(),this.focus(),this.fire("reset")}),this.resetButtonView.bind("isVisible").to(this.fieldView,"isEmpty",r=>!r),this.fieldWrapperChildren.add(this.resetButtonView),this.extendTemplate({attributes:{class:"ck-search__query_with-reset"}}))}reset(){this.fieldView.reset(),this._viewConfig.showResetButton&&(this.resetButtonView.isVisible=!1)}}class vT extends je{constructor(){super();const e=this.bindTemplate;this.set({isVisible:!1,primaryText:"",secondaryText:""}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__info",e.if("isVisible","ck-hidden",t=>!t)],tabindex:-1},children:[{tag:"span",children:[{text:[e.to("primaryText")]}]},{tag:"span",children:[{text:[e.to("secondaryText")]}]}]})}focus(){this.element.focus()}}class yT extends je{constructor(e){super(e),this.children=this.createCollection(),this.focusTracker=new Xt,this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__results"],tabindex:-1},children:this.children}),this._focusCycler=new Hn({focusables:this.children,focusTracker:this.focusTracker})}render(){super.render();for(const e of this.children)this.focusTracker.add(e.element)}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}var Mb=/[\\^$.*+?()[\]{}|]/g,xT=RegExp(Mb.source);const Bb=function(o){return(o=Bd(o))&&xT.test(o)?o.replace(Mb,"\\$&"):o};var Pb=m(8107),ET={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(Pb.A,ET),Pb.A.locals;var DT=Object.defineProperty,Nb=Object.getOwnPropertySymbols,IT=Object.prototype.hasOwnProperty,ST=Object.prototype.propertyIsEnumerable,Ob=(o,e,t)=>e in o?DT(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;class TT extends je{constructor(e,t){super(e),this._config=t,this.filteredView=t.filteredView,this.queryView=this._createSearchTextQueryView(),this.focusTracker=new Xt,this.keystrokes=new dn,this.resultsView=new yT(e),this.children=this.createCollection(),this.focusableChildren=this.createCollection([this.queryView,this.resultsView]),this.set("isEnabled",!0),this.set("resultsCount",0),this.set("totalItemsCount",0),t.infoView&&t.infoView.instance?this.infoView=t.infoView.instance:(this.infoView=new vT,this._enableDefaultInfoViewBehavior(),this.on("render",()=>{this.search("")})),this.resultsView.children.addMany([this.infoView,this.filteredView]),this.focusCycler=new Hn({focusables:this.focusableChildren,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.on("search",(n,{resultsCount:i,totalItemsCount:r})=>{this.resultsCount=i,this.totalItemsCount=r}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search",t.class||null],tabindex:"-1"},children:this.children})}render(){super.render(),this.children.addMany([this.queryView,this.resultsView]);const e=t=>t.stopPropagation();for(const t of this.focusableChildren)this.focusTracker.add(t.element);this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",e),this.keystrokes.set("arrowleft",e),this.keystrokes.set("arrowup",e),this.keystrokes.set("arrowdown",e)}focus(){this.queryView.focus()}reset(){this.queryView.reset(),this.search("")}search(e){const t=e?new RegExp(Bb(e),"ig"):null,n=this.filteredView.filter(t);this.fire("search",((i,r)=>{for(var a in r||(r={}))IT.call(r,a)&&Ob(i,a,r[a]);if(Nb)for(var a of Nb(r))ST.call(r,a)&&Ob(i,a,r[a]);return i})({query:e},n))}_createSearchTextQueryView(){const e=new CT(this.locale,this._config.queryView);return this.listenTo(e.fieldView,"input",()=>{this.search(e.fieldView.element.value)}),e.on("reset",()=>this.reset()),e.bind("isEnabled").to(this),e}_enableDefaultInfoViewBehavior(){const e=this.locale.t,t=this.infoView;function n(i,{query:r,resultsCount:a,totalItemsCount:c}){return typeof i=="function"?i(r,a,c):i}this.on("search",(i,r)=>{if(r.resultsCount)t.set({isVisible:!1});else{const a=this._config.infoView&&this._config.infoView.text;let c,d;r.totalItemsCount?a&&a.notFound?(c=a.notFound.primary,d=a.notFound.secondary):(c=e("No results found"),d=""):a&&a.noSearchableItems?(c=a.noSearchableItems.primary,d=a.noSearchableItems.secondary):(c=e("No searchable items"),d=""),t.set({primaryText:n(c,r),secondaryText:n(d,r),isVisible:!0})}})}}var Lb=m(5727),MT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(Lb.A,MT),Lb.A.locals;const vu=class extends TT{constructor(o,e){super(o,e),this._config=e;const t=gr("px");this.extendTemplate({attributes:{class:["ck-autocomplete"]}});const n=this.resultsView.bindTemplate;this.resultsView.set("isVisible",!1),this.resultsView.set("_position","s"),this.resultsView.set("_width",0),this.resultsView.extendTemplate({attributes:{class:[n.if("isVisible","ck-hidden",i=>!i),n.to("_position",i=>`ck-search__results_${i}`)],style:{width:n.to("_width",t)}}}),this.focusTracker.on("change:isFocused",(i,r,a)=>{this._updateResultsVisibility(),a?this.resultsView.element.scrollTop=0:e.resetOnBlur&&this.queryView.reset()}),this.on("search",()=>{this._updateResultsVisibility(),this._updateResultsViewWidthAndPosition()}),this.keystrokes.set("esc",(i,r)=>{this.resultsView.isVisible&&(this.queryView.focus(),this.resultsView.isVisible=!1,r())}),this.listenTo(Re.document,"scroll",()=>{this._updateResultsViewWidthAndPosition()}),this.on("change:isEnabled",()=>{this._updateResultsVisibility()}),this.filteredView.on("execute",(i,{value:r})=>{this.focus(),this.reset(),this.queryView.fieldView.value=this.queryView.fieldView.element.value=r,this.resultsView.isVisible=!1}),this.resultsView.on("change:isVisible",()=>{this._updateResultsViewWidthAndPosition()})}_updateResultsViewWidthAndPosition(){if(!this.resultsView.isVisible)return;this.resultsView._width=new tt(this.queryView.fieldView.element).width;const o=vu._getOptimalPosition({element:this.resultsView.element,target:this.queryView.element,fitInViewport:!0,positions:vu.defaultResultsPositions});this.resultsView._position=o?o.name:"s"}_updateResultsVisibility(){const o=this._config.queryMinChars===void 0?0:this._config.queryMinChars,e=this.queryView.fieldView.element.value.length;this.resultsView.isVisible=this.focusTracker.isFocused&&this.isEnabled&&e>=o}};let Rb=vu;Rb.defaultResultsPositions=[o=>({top:o.bottom,left:o.left,name:"s"}),(o,e)=>({top:o.top-e.height,left:o.left,name:"n"})],Rb._getOptimalPosition=$a;var zb=m(9529),BT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(zb.A,BT),zb.A.locals;var jb=m(109),PT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(jb.A,PT),jb.A.locals;var Fb=m(2710),NT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(Fb.A,NT),Fb.A.locals;var Vb=m(3344),OT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(Vb.A,OT),Vb.A.locals;class LT extends ut{constructor(e){super(e);const t=this.bindTemplate;this.set({withText:!0,role:"menuitem"}),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__button"],"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",n=>String(n)),"data-cke-tooltip-disabled":t.to("isOn")},on:{mouseenter:t.to("mouseenter")}})}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new Io;return e.content=pc,e.extendTemplate({attributes:{class:"ck-menu-bar__menu__button__arrow"}}),e}}var Ub=m(9481),RT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(Ub.A,RT),Ub.A.locals;class yu extends yr{constructor(e,t){super(e);const n=this.bindTemplate;this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item"]},on:{mouseenter:n.to("mouseenter")}}),this.delegate("mouseenter").to(t)}}var zT=Object.defineProperty,Hb=Object.getOwnPropertySymbols,jT=Object.prototype.hasOwnProperty,FT=Object.prototype.propertyIsEnumerable,$b=(o,e,t)=>e in o?zT(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,Wb=(o,e)=>{for(var t in e||(e={}))jT.call(e,t)&&$b(o,t,e[t]);if(Hb)for(var t of Hb(e))FT.call(e,t)&&$b(o,t,e[t]);return o};const Ps={toggleMenusAndFocusItemsOnHover(o){o.on("menu:mouseenter",e=>{if(o.isOpen){for(const t of o.menus){const n=e.path[0],i=n instanceof yu&&n.children.first===t;t.isOpen=(e.path.includes(t)||i)&&t.isEnabled}e.source.focus()}})},focusCycleMenusOnArrows(o){const e=o.locale.uiLanguageDirection==="rtl";function t(n,i){const r=o.children.getIndex(n),a=n.isOpen,c=o.children.length,d=o.children.get((r+c+i)%c);n.isOpen=!1,a&&(d.isOpen=!0),d.buttonView.focus()}o.on("menu:arrowright",n=>{t(n.source,e?-1:1)}),o.on("menu:arrowleft",n=>{t(n.source,e?1:-1)})},closeMenusWhenTheBarCloses(o){o.on("change:isOpen",()=>{o.isOpen||o.menus.forEach(e=>{e.isOpen=!1})})},closeMenuWhenAnotherOnTheSameLevelOpens(o){o.on("menu:change:isOpen",(e,t,n)=>{n&&o.menus.filter(i=>e.source.parentMenuView===i.parentMenuView&&e.source!==i&&i.isOpen).forEach(i=>{i.isOpen=!1})})},closeOnClickOutside(o){b({emitter:o,activator:()=>o.isOpen,callback:()=>o.close(),contextElements:()=>o.children.map(e=>e.element)})}},Ri={openAndFocusPanelOnArrowDownKey(o){o.keystrokes.set("arrowdown",(e,t)=>{o.focusTracker.focusedElement===o.buttonView.element&&(o.isOpen||(o.isOpen=!0),o.panelView.focus(),t())})},openOnArrowRightKey(o){const e=o.locale.uiLanguageDirection==="rtl"?"arrowleft":"arrowright";o.keystrokes.set(e,(t,n)=>{o.focusTracker.focusedElement===o.buttonView.element&&o.isEnabled&&(o.isOpen||(o.isOpen=!0),o.panelView.focus(),n())})},openOnButtonClick(o){o.buttonView.on("execute",()=>{o.isOpen=!0,o.panelView.focus()})},toggleOnButtonClick(o){o.buttonView.on("execute",()=>{o.isOpen=!o.isOpen,o.isOpen&&o.panelView.focus()})},closeOnArrowLeftKey(o){const e=o.locale.uiLanguageDirection==="rtl"?"arrowright":"arrowleft";o.keystrokes.set(e,(t,n)=>{o.isOpen&&(o.isOpen=!1,o.focus(),n())})},closeOnEscKey(o){o.keystrokes.set("esc",(e,t)=>{o.isOpen&&(o.isOpen=!1,o.focus(),t())})},closeOnParentClose(o){o.parentMenuView.on("change:isOpen",(e,t,n)=>{n||e.source!==o.parentMenuView||(o.isOpen=!1)})}},VT={southEast:o=>({top:o.bottom,left:o.left,name:"se"}),southWest:(o,e)=>({top:o.bottom,left:o.left-e.width+o.width,name:"sw"}),northEast:(o,e)=>({top:o.top-e.height,left:o.left,name:"ne"}),northWest:(o,e)=>({top:o.top-e.height,left:o.left-e.width+o.width,name:"nw"}),eastSouth:o=>({top:o.top,left:o.right-5,name:"es"}),eastNorth:(o,e)=>({top:o.top-e.height,left:o.right-5,name:"en"}),westSouth:(o,e)=>({top:o.top,left:o.left-e.width+5,name:"ws"}),westNorth:(o,e)=>({top:o.top-e.height,left:o.left-e.width+5,name:"wn"})},UT=[{menuId:"file",label:"File",groups:[{groupId:"export",items:["menuBar:exportPdf","menuBar:exportWord"]},{groupId:"import",items:["menuBar:importWord"]},{groupId:"revisionHistory",items:["menuBar:revisionHistory"]}]},{menuId:"edit",label:"Edit",groups:[{groupId:"undo",items:["menuBar:undo","menuBar:redo"]},{groupId:"selectAll",items:["menuBar:selectAll"]},{groupId:"findAndReplace",items:["menuBar:findAndReplace"]}]},{menuId:"view",label:"View",groups:[{groupId:"sourceEditing",items:["menuBar:sourceEditing"]},{groupId:"showBlocks",items:["menuBar:showBlocks"]},{groupId:"restrictedEditingException",items:["menuBar:restrictedEditingException"]}]},{menuId:"insert",label:"Insert",groups:[{groupId:"insertMainWidgets",items:["menuBar:uploadImage","menuBar:ckbox","menuBar:ckfinder","menuBar:insertTable"]},{groupId:"insertInline",items:["menuBar:link","menuBar:comment"]},{groupId:"insertMinorWidgets",items:["menuBar:insertTemplate","menuBar:blockQuote","menuBar:codeBlock","menuBar:htmlEmbed"]},{groupId:"insertStructureWidgets",items:["menuBar:horizontalLine","menuBar:pageBreak","menuBar:tableOfContents"]},{groupId:"restrictedEditing",items:["menuBar:restrictedEditing"]}]},{menuId:"format",label:"Format",groups:[{groupId:"textAndFont",items:[{menuId:"text",label:"Text",groups:[{groupId:"basicStyles",items:["menuBar:bold","menuBar:italic","menuBar:underline","menuBar:strikethrough","menuBar:superscript","menuBar:subscript","menuBar:code"]},{groupId:"textPartLanguage",items:["menuBar:textPartLanguage"]}]},{menuId:"font",label:"Font",groups:[{groupId:"fontProperties",items:["menuBar:fontSize","menuBar:fontFamily"]},{groupId:"fontColors",items:["menuBar:fontColor","menuBar:fontBackgroundColor"]},{groupId:"highlight",items:["menuBar:highlight"]}]},"menuBar:heading"]},{groupId:"list",items:["menuBar:bulletedList","menuBar:numberedList","menuBar:todoList"]},{groupId:"indent",items:["menuBar:alignment","menuBar:indent","menuBar:outdent"]},{groupId:"caseChange",items:["menuBar:caseChange"]},{groupId:"removeFormat",items:["menuBar:removeFormat"]}]},{menuId:"tools",label:"Tools",groups:[{groupId:"aiTools",items:["menuBar:aiAssistant","menuBar:aiCommands"]},{groupId:"tools",items:["menuBar:trackChanges","menuBar:commentsArchive"]}]},{menuId:"help",label:"Help",groups:[{groupId:"help",items:["menuBar:accessibilityHelp"]}]}];function HT({normalizedConfig:o,locale:e,componentFactory:t}){const n=to(o);return function(i,r){const a=r.removeItems,c=[];r.items=r.items.filter(({menuId:d})=>!a.includes(d)||(c.push(d),!1)),Er(r.items,d=>{d.groups=d.groups.filter(({groupId:h})=>!a.includes(h)||(c.push(h),!1));for(const h of d.groups)h.items=h.items.filter(p=>{const k=Kb(p);return!a.includes(k)||(c.push(k),!1)})});for(const d of a)c.includes(d)||W("menu-bar-item-could-not-be-removed",{menuBarConfig:i,itemName:d})}(o,n),function(i,r){const a=r.addItems,c=[];for(const d of a){const h=qT(d.position),p=GT(d.position);if($T(d))if(p){const k=r.items.findIndex(A=>A.menuId===p);k!=-1?h==="before"?(r.items.splice(k,0,d.menu),c.push(d)):h==="after"&&(r.items.splice(k+1,0,d.menu),c.push(d)):qb(r,d.menu,p,h)&&c.push(d)}else h==="start"?(r.items.unshift(d.menu),c.push(d)):h==="end"&&(r.items.push(d.menu),c.push(d));else WT(d)?Er(r.items,k=>{if(k.menuId===p)h==="start"?(k.groups.unshift(d.group),c.push(d)):h==="end"&&(k.groups.push(d.group),c.push(d));else{const A=k.groups.findIndex(E=>E.groupId===p);A!==-1&&(h==="before"?(k.groups.splice(A,0,d.group),c.push(d)):h==="after"&&(k.groups.splice(A+1,0,d.group),c.push(d)))}}):qb(r,d.item,p,h)&&c.push(d)}for(const d of a)c.includes(d)||W("menu-bar-item-could-not-be-added",{menuBarConfig:i,addedItemConfig:d})}(o,n),function(i,r,a){Er(r.items,c=>{for(const d of c.groups)d.items=d.items.filter(h=>{const p=typeof h=="string"&&!a.has(h);return p&&!r.isUsingDefaultConfig&&W("menu-bar-item-unavailable",{menuBarConfig:i,parentMenuConfig:to(c),componentName:h}),!p})})}(o,n,t),Gb(o,n),function(i,r){const a=r.t,c={File:a({string:"File",id:"MENU_BAR_MENU_FILE"}),Edit:a({string:"Edit",id:"MENU_BAR_MENU_EDIT"}),View:a({string:"View",id:"MENU_BAR_MENU_VIEW"}),Insert:a({string:"Insert",id:"MENU_BAR_MENU_INSERT"}),Format:a({string:"Format",id:"MENU_BAR_MENU_FORMAT"}),Tools:a({string:"Tools",id:"MENU_BAR_MENU_TOOLS"}),Help:a({string:"Help",id:"MENU_BAR_MENU_HELP"}),Text:a({string:"Text",id:"MENU_BAR_MENU_TEXT"}),Font:a({string:"Font",id:"MENU_BAR_MENU_FONT"})};Er(i.items,d=>{d.label in c&&(d.label=c[d.label])})}(n,e),n}function qb(o,e,t,n){let i=!1;return Er(o.items,r=>{for(const{groupId:a,items:c}of r.groups){if(i)return;if(a===t)n==="start"?(c.unshift(e),i=!0):n==="end"&&(c.push(e),i=!0);else{const d=c.findIndex(h=>Kb(h)===t);d!==-1&&(n==="before"?(c.splice(d,0,e),i=!0):n==="after"&&(c.splice(d+1,0,e),i=!0))}}}),i}function Gb(o,e){const t=e.isUsingDefaultConfig;let n=!1;e.items=e.items.filter(i=>!!i.groups.length||(xu(o,i,t),!1)),e.items.length?(Er(e.items,i=>{i.groups=i.groups.filter(r=>!!r.items.length||(n=!0,!1));for(const r of i.groups)r.items=r.items.filter(a=>!(Yb(a)&&!a.groups.length)||(xu(o,a,t),n=!0,!1))}),n&&Gb(o,e)):xu(o,o,t)}function xu(o,e,t){t||W("menu-bar-menu-empty",{menuBarConfig:o,emptyMenuConfig:e})}function Er(o,e){if(Array.isArray(o))for(const n of o)t(n);function t(n){e(n);for(const i of n.groups)for(const r of i.items)Yb(r)&&t(r)}}function $T(o){return typeof o=="object"&&"menu"in o}function WT(o){return typeof o=="object"&&"group"in o}function qT(o){return o.startsWith("start")?"start":o.startsWith("end")?"end":o.startsWith("after")?"after":"before"}function GT(o){const e=o.match(/^[^:]+:(.+)/);return e?e[1]:null}function Kb(o){return typeof o=="string"?o:o.menuId}function Yb(o){return typeof o=="object"&&"menuId"in o}var Qb=m(9108),KT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(Qb.A,KT),Qb.A.locals;class YT extends je{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-menu-bar__menu__panel",t.to("position",n=>`ck-menu-bar__menu__panel_position_${n}`),t.if("isVisible","ck-hidden",n=>!n)],tabindex:"-1"},children:this.children,on:{selectstart:t.to(n=>{n.target.tagName.toLocaleLowerCase()!=="input"&&n.preventDefault()})}})}focus(e=1){this.children.length&&(e===1?this.children.first.focus():this.children.last.focus())}}var Zb=m(4),QT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(Zb.A,QT),Zb.A.locals;const Jb=class extends je{constructor(o){super(o);const e=this.bindTemplate;this.buttonView=new LT(o),this.buttonView.delegate("mouseenter").to(this),this.buttonView.bind("isOn","isEnabled").to(this,"isOpen","isEnabled"),this.panelView=new YT(o),this.panelView.bind("isVisible").to(this,"isOpen"),this.keystrokes=new dn,this.focusTracker=new Xt,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("panelPosition","w"),this.set("class",void 0),this.set("parentMenuView",null),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar__menu",e.to("class"),e.if("isEnabled","ck-disabled",t=>!t),e.if("parentMenuView","ck-menu-bar__menu_top-level",t=>!t)]},children:[this.buttonView,this.panelView]})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.keystrokes.listenTo(this.element),Ri.closeOnEscKey(this),this._repositionPanelOnOpen()}_attachBehaviors(){this.parentMenuView?(Ri.openOnButtonClick(this),Ri.openOnArrowRightKey(this),Ri.closeOnArrowLeftKey(this),Ri.closeOnParentClose(this)):(this._propagateArrowKeystrokeEvents(),Ri.openAndFocusPanelOnArrowDownKey(this),Ri.toggleOnButtonClick(this))}_propagateArrowKeystrokeEvents(){this.keystrokes.set("arrowright",(o,e)=>{this.fire("arrowright"),e()}),this.keystrokes.set("arrowleft",(o,e)=>{this.fire("arrowleft"),e()})}_repositionPanelOnOpen(){this.on("change:isOpen",(o,e,t)=>{if(!t)return;const n=Jb._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions});this.panelView.position=n?n.name:this._panelPositions[0].name})}focus(){this.buttonView.focus()}get _panelPositions(){const{southEast:o,southWest:e,northEast:t,northWest:n,westSouth:i,eastSouth:r,westNorth:a,eastNorth:c}=VT;return this.locale.uiLanguageDirection==="ltr"?this.parentMenuView?[r,c,i,a]:[o,e,t,n]:this.parentMenuView?[i,a,r,c]:[e,o,n,t]}};let Dr=Jb;Dr._getOptimalPosition=$a;class Eu extends fu{constructor(e){super(e),this.role="menu"}}var Xb=m(977),ZT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(Xb.A,ZT),Xb.A.locals;class Bn extends ut{constructor(e){super(e),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}class e_ extends Mk{constructor(e){super(e),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}var t_=m(497),JT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(t_.A,JT),t_.A.locals;const n_=["mouseenter","arrowleft","arrowright","change:isOpen"];class XT extends je{constructor(e){super(e),this.menus=[];const t=e.t;this.set("isOpen",!1),this._setupIsOpenUpdater(),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar"],"aria-label":t("Editor menu bar"),role:"menubar"},children:this.children})}fillFromConfig(e,t){const n=HT({normalizedConfig:e,locale:this.locale,componentFactory:t}).items.map(i=>this._createMenu({componentFactory:t,menuDefinition:i}));this.children.addMany(n)}render(){super.render(),Ps.toggleMenusAndFocusItemsOnHover(this),Ps.closeMenusWhenTheBarCloses(this),Ps.closeMenuWhenAnotherOnTheSameLevelOpens(this),Ps.focusCycleMenusOnArrows(this),Ps.closeOnClickOutside(this)}focus(){this.children.first&&this.children.first.focus()}close(){for(const e of this.children)e.isOpen=!1}registerMenu(e,t=null){t?(e.delegate(...n_).to(t),e.parentMenuView=t):e.delegate(...n_).to(this,n=>"menu:"+n),e._attachBehaviors(),this.menus.push(e)}_createMenu({componentFactory:e,menuDefinition:t,parentMenuView:n}){const i=this.locale,r=new Dr(i);return this.registerMenu(r,n),r.buttonView.set({label:t.label}),r.once("change:isOpen",()=>{const a=new Eu(i);a.ariaLabel=t.label,r.panelView.children.add(a),a.items.addMany(this._createMenuItems({menuDefinition:t,parentMenuView:r,componentFactory:e}))}),r}_createMenuItems({menuDefinition:e,parentMenuView:t,componentFactory:n}){const i=this.locale,r=[];for(const a of e.groups){for(const c of a.items){const d=new yu(i,t);if(ke(c))d.children.add(this._createMenu({componentFactory:n,menuDefinition:c,parentMenuView:t}));else{const h=this._createMenuItemContentFromFactory({componentName:c,componentFactory:n,parentMenuView:t});if(!h)continue;d.children.add(h)}r.push(d)}a!==e.groups[e.groups.length-1]&&r.push(new mu(i))}return r}_createMenuItemContentFromFactory({componentName:e,parentMenuView:t,componentFactory:n}){const i=n.create(e);return i instanceof Dr||i instanceof Bn||i instanceof e_?(this._registerMenuTree(i,t),i.on("execute",()=>{this.close()}),i):(W("menu-bar-component-unsupported",{componentName:e,componentView:i}),null)}_registerMenuTree(e,t){if(!(e instanceof Dr))return void e.delegate("mouseenter").to(t);this.registerMenu(e,t);const n=e.panelView.children.filter(r=>r instanceof Eu)[0];if(!n)return void e.delegate("mouseenter").to(t);const i=n.items.filter(r=>r instanceof yr);for(const r of i)this._registerMenuTree(r.children.get(0),e)}_setupIsOpenUpdater(){let e;this.on("menu:change:isOpen",(t,n,i)=>{clearTimeout(e),i?this.isOpen=!0:e=setTimeout(()=>{this.isOpen=Array.from(this.children).some(r=>r.isOpen)},0)})}}class eM extends dT{constructor(e,t){super(e),this.view=t,this._toolbarConfig=Uk(e.config.get("toolbar")),this._menuBarConfig=function(n){let i;return i="items"in n&&n.items?Wb({items:n.items,removeItems:[],addItems:[],isVisible:!0,isUsingDefaultConfig:!1},n):Wb({items:to(UT),addItems:[],removeItems:[],isVisible:!0,isUsingDefaultConfig:!0},n),i}(e.config.get("menuBar")||{}),this._elementReplacer=new Ee,this.listenTo(e.editing.view,"scrollToTheSelection",this._handleScrollToTheSelectionWithStickyPanel.bind(this))}get element(){return this.view.element}init(e){const t=this.editor,n=this.view,i=t.editing.view,r=n.editable,a=i.document.getRoot();r.name=a.rootName,n.render();const c=r.element;this.setEditableElement(r.name,c),n.editable.bind("isFocused").to(this.focusTracker),i.attachDomRoot(c),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this._initMenuBar(),this._initDialogPluginIntegration(),this.fire("ready")}destroy(){super.destroy();const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:t})=>t||0),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initMenuBar(){const e=this.view;e.menuBarView&&(this._setupMenuBarBehaviors(e.menuBarView.element),e.menuBarView.fillFromConfig(this._menuBarConfig,this.componentFactory))}_initPlaceholder(){const e=this.editor,t=e.editing.view,n=t.document.getRoot(),i=e.sourceElement;let r;const a=e.config.get("placeholder");a&&(r=typeof a=="string"?a:a[this.view.editable.name]),!r&&i&&i.tagName.toLowerCase()==="textarea"&&(r=i.getAttribute("placeholder")),r&&(n.placeholder=r),hm({view:t,element:n,isDirectHost:!1,keepOnFocus:!0})}_handleScrollToTheSelectionWithStickyPanel(e,t,n){const i=this.view.stickyPanel;if(i.isSticky){const r=new tt(i.element).height;t.viewportOffset.top+=r}else{const r=()=>{this.editor.editing.view.scrollToTheSelection(n)};this.listenTo(i,"change:isSticky",r),setTimeout(()=>{this.stopListening(i,"change:isSticky",r)},20)}}_initDialogPluginIntegration(){if(!this.editor.plugins.has("Dialog"))return;const e=this.view.stickyPanel,t=this.editor.plugins.get("Dialog");t.on("show",()=>{const n=t.view;n.on("moveTo",(i,r)=>{if(!e.isSticky||n.wasMoved)return;const a=new tt(e.contentPanelElement);r[1]<a.bottom+wc.defaultOffset&&(r[1]=a.bottom+wc.defaultOffset)},{priority:"high"})},{priority:"low"})}_setupMenuBarBehaviors(e){const t=this.editor;this.focusTracker.add(e),t.keystrokes.listenTo(e),t.keystrokes.set("Esc",(n,i)=>{e.contains(this.focusTracker.focusedElement)&&(t.editing.view.focus(),i())}),t.keystrokes.set("Alt+F9",(n,i)=>{e.contains(this.focusTracker.focusedElement)||(this.view.menuBarView.focus(),i())})}}var o_=m(7388),tM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(o_.A,tM),o_.A.locals;class nM extends gT{constructor(e,t,n={}){super(e),this.stickyPanel=new AT(e),this.toolbar=new pu(e,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),n.useMenuBar&&(this.menuBarView=new XT(e)),this.editable=new mT(e,t)}render(){super.render(),this.menuBarView?this.stickyPanel.content.addMany([this.menuBarView,this.toolbar]):this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class i_{constructor(e){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=t=>{const n="error"in t?t.error:t.reason;n instanceof Error&&this._handleError(n,t)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,t){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)}off(e,t){this._listeners[e]=this._listeners[e].filter(n=>n!==t)}_fire(e,...t){const n=this._listeners[e]||[];for(const i of n)i.apply(this,[null,...t])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,t){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:t instanceof ErrorEvent?t.filename:void 0,lineno:t instanceof ErrorEvent?t.lineno:void 0,colno:t instanceof ErrorEvent?t.colno:void 0,date:this._now()});const n=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:n}),n?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function Du(o,e=new Set){const t=[o],n=new Set;let i=0;for(;t.length>i;){const r=t[i++];if(!n.has(r)&&oM(r)&&!e.has(r))if(n.add(r),Symbol.iterator in r)try{for(const a of r)t.push(a)}catch{}else for(const a in r)a!=="defaultValue"&&t.push(r[a])}return n}function oM(o){const e=Object.prototype.toString.call(o),t=typeof o;return!(t==="number"||t==="boolean"||t==="string"||t==="symbol"||t==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||o==null||o._watchdogExcluded||o instanceof EventTarget||o instanceof Event)}function r_(o,e,t=new Set){if(o===e&&typeof(n=o)=="object"&&n!==null)return!0;var n;const i=Du(o,t),r=Du(e,t);for(const a of i)if(r.has(a))return!0;return!1}var iM=Object.defineProperty,rM=Object.defineProperties,sM=Object.getOwnPropertyDescriptors,xc=Object.getOwnPropertySymbols,s_=Object.prototype.hasOwnProperty,a_=Object.prototype.propertyIsEnumerable,c_=(o,e,t)=>e in o?iM(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,Iu=(o,e)=>{for(var t in e||(e={}))s_.call(e,t)&&c_(o,t,e[t]);if(xc)for(var t of xc(e))a_.call(e,t)&&c_(o,t,e[t]);return o};class l_ extends i_{constructor(e,t={}){super(t),this._editor=null,this._lifecyclePromise=null,this._initUsingData=!0,this._editables={},this._throttledSave=Cc(this._save.bind(this),typeof t.saveInterval=="number"?t.saveInterval:5e3),e&&(this._creator=(n,i)=>e.create(n,i)),this._destructor=n=>n.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{console.error("An error happened during the editor destroying.",e)}).then(()=>{const e={},t=[],n=this._config.rootsAttributes||{},i={};for(const[d,h]of Object.entries(this._data.roots))h.isLoaded?(e[d]="",i[d]=n[d]||{}):t.push(d);const r=(a=Iu({},this._config),c={extraPlugins:this._config.extraPlugins||[],lazyRoots:t,rootsAttributes:i,_watchdogInitialData:this._data},rM(a,sM(c)));var a,c;return delete r.initialData,r.extraPlugins.push(aM),this._initUsingData?this.create(e,r,r.context):Ei(this._elementOrData)?this.create(this._elementOrData,r,r.context):this.create(this._editables,r,r.context)}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,t=this._config,n){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(super._startErrorHandling(),this._elementOrData=e,this._initUsingData=typeof e=="string"||Object.keys(e).length>0&&typeof Object.values(e)[0]=="string",this._config=this._cloneEditorConfiguration(t)||{},this._config.context=n,this._creator(e,this._config))).then(i=>{this._editor=i,i.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=i.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")}).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}destroy(){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=e}catch(t){console.error(t,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e=this._editor,t=e.model.document.roots.filter(c=>c.isAttached()&&c.rootName!="$graveyard"),{plugins:n}=e,i=n.has("CommentsRepository")&&n.get("CommentsRepository"),r=n.has("TrackChanges")&&n.get("TrackChanges"),a={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};t.forEach(c=>{a.roots[c.rootName]={content:JSON.stringify(Array.from(c.getChildren())),attributes:JSON.stringify(Array.from(c.getAttributes())),isLoaded:c._isLoaded}});for(const c of e.model.markers)c._affectsData&&(a.markers[c.name]={rangeJSON:c.getRange().toJSON(),usingOperation:c._managedUsingOperations,affectsData:c._affectsData});return i&&(a.commentThreads=JSON.stringify(i.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),r&&(a.suggestions=JSON.stringify(r.getSuggestions({toJSON:!0,skipNotAttached:!0}))),a}_getEditables(){const e={};for(const t of this.editor.model.document.getRootNames()){const n=this.editor.ui.getEditableElement(t);n&&(e[t]=n)}return e}_isErrorComingFromThisItem(e){return r_(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return kd(e,(t,n)=>Ei(t)||n==="context"?t:void 0)}}class aM{constructor(e){this.editor=e,this._data=e.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",e=>{e.stop(),this.editor.model.enqueueChange({isUndoable:!1},t=>{this._restoreCollaborationData(),this._restoreEditorData(t)}),this.editor.data.fire("ready")},{priority:999})}_createNode(e,t){if("name"in t){const n=e.createElement(t.name,t.attributes);if(t.children)for(const i of t.children)n._appendChild(this._createNode(e,i));return n}return e.createText(t.data,t.attributes)}_restoreEditorData(e){const t=this.editor;Object.entries(this._data.roots).forEach(([n,{content:i,attributes:r}])=>{const a=JSON.parse(i),c=JSON.parse(r),d=t.model.document.getRoot(n);for(const[h,p]of c)e.setAttribute(h,p,d);for(const h of a){const p=this._createNode(e,h);e.insert(p,d,"end")}}),Object.entries(this._data.markers).forEach(([n,i])=>{const{document:r}=t.model,a=i,{rangeJSON:{start:c,end:d}}=a,h=((I,S)=>{var B={};for(var O in I)s_.call(I,O)&&S.indexOf(O)<0&&(B[O]=I[O]);if(I!=null&&xc)for(var O of xc(I))S.indexOf(O)<0&&a_.call(I,O)&&(B[O]=I[O]);return B})(a,["rangeJSON"]),p=r.getRoot(c.root),k=e.createPositionFromPath(p,c.path,c.stickiness),A=e.createPositionFromPath(p,d.path,d.stickiness),E=e.createRange(k,A);e.addMarker(n,Iu({range:E},h))})}_restoreCollaborationData(){const e=JSON.parse(this._data.commentThreads),t=JSON.parse(this._data.suggestions);e.forEach(n=>{const i=this.editor.config.get("collaboration.channelId"),r=this.editor.plugins.get("CommentsRepository");r.hasCommentThread(n.threadId)&&r.getCommentThread(n.threadId).remove(),r.addCommentThread(Iu({channelId:i},n))}),t.forEach(n=>{const i=this.editor.plugins.get("TrackChangesEditing");i.hasSuggestion(n.id)?i.getSuggestion(n.id).attributes=n.attributes:i.addSuggestionData(n)})}}const Ns=Symbol("MainQueueId");class cM{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,t){const n=e===Ns;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const i=(n?Promise.all(this._queues.values()):Promise.all([this._queues.get(Ns),this._queues.get(e)])).then(t),r=i.catch(()=>{});return this._queues.set(e,r),i.finally(()=>{this._activeActions--,this._queues.get(e)===r&&this._activeActions===0&&this._onEmptyCallbacks.forEach(a=>a())})}}function d_(o){return Array.isArray(o)?o:[o]}class Ec extends cu(FI){constructor(e,t={}){if(!Dc(e)&&t.initialData!==void 0)throw new T("editor-create-initial-data",null);super(t),this.config.define("menuBar.isVisible",!1),this.config.get("initialData")===void 0&&this.config.set("initialData",function(a){return Dc(a)?(c=a,c instanceof HTMLTextAreaElement?c.value:c.innerHTML):a;var c}(e)),Dc(e)&&(this.sourceElement=e),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),i=this.config.get("menuBar"),r=new nM(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n,useMenuBar:i.isVisible});this.ui=new eM(this,r),function(a){if(!Ci(a.updateSourceElement))throw new T("attachtoform-missing-elementapi-interface",a);const c=a.sourceElement;if(function(d){return!!d&&d.tagName.toLowerCase()==="textarea"}(c)&&c.form){let d;const h=c.form,p=()=>a.updateSourceElement();Ci(h.submit)&&(d=h.submit,h.submit=()=>{p(),d.apply(h)}),h.addEventListener("submit",p),a.on("destroy",()=>{h.removeEventListener("submit",p),d&&(h.submit=d)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(n=>{const i=new this(e,t);n(i.initPlugins().then(()=>i.ui.init(Dc(e)?e:null)).then(()=>i.data.init(i.config.get("initialData"))).then(()=>i.fire("ready")).then(()=>i))})}}function Dc(o){return Ei(o)}Ec.Context=lm,Ec.EditorWatchdog=l_,Ec.ContextWatchdog=class extends i_{constructor(o,e={}){super(e),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new cM,this._watchdogConfig=e,this._creator=t=>o.create(t),this._destructor=t=>t.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(o){this._creator=o}setDestructor(o){this._destructor=o}get context(){return this._context}create(o={}){return this._actionQueues.enqueue(Ns,()=>(this._contextConfig=o,this._create()))}getItem(o){return this._getWatchdog(o)._item}getItemState(o){return this._getWatchdog(o).state}add(o){const e=d_(o);return Promise.all(e.map(t=>this._actionQueues.enqueue(t.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let n;if(this._watchdogs.has(t.id))throw new Error(`Item with the given id is already added: '${t.id}'.`);if(t.type==="editor")return n=new l_(null,this._watchdogConfig),n.setCreator(t.creator),n._setExcludedProperties(this._contextProps),t.destructor&&n.setDestructor(t.destructor),this._watchdogs.set(t.id,n),n.on("error",(i,{error:r,causesRestart:a})=>{this._fire("itemError",{itemId:t.id,error:r}),a&&this._actionQueues.enqueue(t.id,()=>new Promise(c=>{const d=()=>{n.off("restart",d),this._fire("itemRestart",{itemId:t.id}),c()};n.on("restart",d)}))}),n.create(t.sourceElementOrData,t.config,this._context);throw new Error(`Not supported item type: '${t.type}'.`)})))}remove(o){const e=d_(o);return Promise.all(e.map(t=>this._actionQueues.enqueue(t,()=>{const n=this._getWatchdog(t);return this._watchdogs.delete(t),n.destroy()})))}destroy(){return this._actionQueues.enqueue(Ns,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Ns,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(o=>{console.error("An error happened during destroying the context or items.",o)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(o=>(this._context=o,this._contextProps=Du(this._context),Promise.all(Array.from(this._watchdogs.values()).map(e=>(e._setExcludedProperties(this._contextProps),e.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const o=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(e=>e.destroy())).then(()=>this._destructor(o))})}_getWatchdog(o){const e=this._watchdogs.get(o);if(!e)throw new Error(`Item with the given id was not registered: ${o}.`);return e}_isErrorComingFromThisItem(o){for(const e of this._watchdogs.values())if(e._isErrorComingFromThisItem(o))return!1;return r_(this._context,o.context)}};class Os extends Ko{constructor(e){super(e),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const t=this.document;function n(i){return(r,a)=>{a.preventDefault();const c=a.dropRange?[a.dropRange]:null,d=new R(t,i);t.fire(d,{dataTransfer:a.dataTransfer,method:r.name,targetRanges:c,target:a.target,domEvent:a.domEvent}),d.stop.called&&a.stopPropagation()}}this.listenTo(t,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",n("dragging"),{priority:"low"})}onDomEvent(e){const t="clipboardData"in e?e.clipboardData:e.dataTransfer,n=e.type=="drop"||e.type=="paste",i={dataTransfer:new Gm(t,{cacheFiles:n})};e.type!="drop"&&e.type!="dragover"||(i.dropRange=function(r,a){const c=a.target.ownerDocument,d=a.clientX,h=a.clientY;let p;return c.caretRangeFromPoint&&c.caretRangeFromPoint(d,h)?p=c.caretRangeFromPoint(d,h):a.rangeParent&&(p=c.createRange(),p.setStart(a.rangeParent,a.rangeOffset),p.collapse(!0)),p?r.domConverter.domRangeToView(p):null}(this.view,e)),this.fire(e.type,e,i)}}const u_=["figcaption","li"],h_=["ol","ul"];function g_(o){if(o.is("$text")||o.is("$textProxy"))return o.data;if(o.is("element","img")&&o.hasAttribute("alt"))return o.getAttribute("alt");if(o.is("element","br"))return`
`;let e="",t=null;for(const n of o.getChildren())e+=lM(n,t)+g_(n),t=n;return e}function lM(o,e){return e?o.is("element","li")&&!o.isEmpty&&o.getChild(0).is("containerElement")||h_.includes(o.name)&&h_.includes(e.name)?`

`:o.is("containerElement")||e.is("containerElement")?u_.includes(o.name)||u_.includes(e.name)?`
`:`

return G.value=ee.content[x.value]?ee.content:It.createEmptyObj(b),T.value=ee.published,W.value=ee.commented,de.value=ee.after_login,J.value=ee.menu_id,ge.value=ee.page_id,Te.value=ee.images,await _.value.resetSelectedItems(),!0}}catch(ne){return console.log("_is_error_get_page_",ne),v.value="Get page problem = "+ne,!1}},U=async ae=>{if(!Ve())return!1;await z(ae)?(l.push("/pages/"+ae),D.value=!1):v.value="Get page problem = "+error},Y=async ae=>{if(xe(),window.confirm("Are you sure you wish to delete this item?")){if(!Ve())return!1;try{(await b6(ae,y)).data.success&&await _e()&&(w.value="Page has been deleted",D.value=!1)}catch(ne){tn(ne,g.demo_status,v,D)}}},ce=async ae=>{Ae("up",ae)},se=async ae=>{Ae("down",ae)},Ae=async(ae,ne)=>{if(!Ve())return!1;try{const ee=await k6(ae,ne,y);ee.data.success?await _e()&&(w.value="Position page has been changed",D.value=!1):ee.data.success===!1&&(D.value=!1)}catch(ee){tn(ee,g.demo_status,v,D)}},Se=async()=>{try{const ae=await p6(y);return ve.value=ae.data.data,!0}catch(ae){console.log("error get menu=",ae)}return!1},_e=async()=>{try{const ae=await l6(y);return P.value=ae.data.data,j.value=ri.getPagesBelongsToMenus(ae.data.data),R.value=ri.getPagesBelongsToPages(ae.data.data),L.value=ri.getNotRelatedPages(ae.data.data),F.value=ri.getInnerPages(ae.data.data),!0}catch(ae){console.log("error get pages=",ae)}return!1},Ee=()=>{be.value=ri.getRootPages(J.value,ze.value,P.value)};function ue(ae){return It.getItemFromArrayOrFalse(j.value,ae)}function we(ae){return It.getItemFromArrayOrFalse(R.value,ae)}return yn(async()=>{if(!u.token)return l.push("/"),!1;D.value=!0;const ae=await Se(),ne=await _e(),ee=l.currentRoute.value.params.id;if(ee){ze.value=parseInt(ee),await _.value.resetSelectedItems();const Be=await z(ee);ae&&ne&&Be&&(D.value=!1)}else ae&&ne&&(D.value=!1)}),Rt(te,()=>{xe()},{deep:!0}),Rt(ve,()=>{xe()},{deep:!0}),Rt(x,()=>{xe()}),(ae,ne)=>(re(),le("div",sF,[N("div",aF,[N("div",cF,[lF,Pe(ed,{lang:x.value,onExecChangeLang:lt},null,8,["lang"])])]),Pe(Wo,{msgGood:w.value,msgWrong:v.value},null,8,["msgGood","msgWrong"]),N("div",dF,[N("div",uF,[N("div",hF,[N("button",{role:"button_add_menu",onClick:qt(ie,["prevent"]),class:"btn btn-primary mt-2 mb-2",disabled:D.value},[D.value?$e("",!0):(re(),le("i",pF)),D.value?(re(),le("span",mF)):$e("",!0),nt(" Add menu ")],8,gF),N("div",fF,[(re(!0),le(Je,null,Lt(ve.value,(ee,Be)=>(re(),le("div",{class:"row",key:ee.id},[N("div",kF,[N("div",bF,[N("div",_F,[at(N("input",{role:"menu",class:"form-control","onUpdate:modelValue":Oe=>ve.value[Be].name[x.value]=Oe},null,8,wF),[[Dt,ve.value[Be].name[x.value]]])]),N("div",{role:"save_menu",class:Le(["ms-2 col-1",{"disabled-if-loader":D.value}]),onClick:Oe=>ke(Be)},vF,10,AF),N("div",{role:"del_menu",class:Le(["ms-2 trash col-1",{"disabled-if-loader":D.value}]),onClick:Oe=>ye(Be)},EF,10,yF),ve.value.length>1?(re(),le("div",{key:0,role:"down_menu",class:Le([{"disabled-if-loader":D.value},"ms-2 col-1"]),onClick:Oe=>Ye("down",ee.id)},SF,10,DF)):$e("",!0),ve.value.length>1?(re(),le("div",{key:1,role:"up_menu",class:Le([{"disabled-if-loader":D.value},"ms-2 col-1"]),onClick:Oe=>Ye("up",ee.id)},BF,10,TF)):$e("",!0)])]),ue(ee.id)?(re(),le("div",{key:0,class:"container",role:"menu_pages","data-menu-id":ee.id},[(re(!0),le(Je,null,Lt(ue(ee.id),Oe=>(re(),le("div",{class:"row test-parent-page",key:Oe.id},[Pe(cl,{onExecEditPage:et=>U(Oe.id),onExecDelPage:et=>Y(Oe.id),onExecPositionPageUp:et=>ce(Oe.id),onExecPositionPageDown:et=>se(Oe.id),pre_loader:D.value,p:Oe,lang:x.value,allPages:P.value,currentPageId:ze.value},null,8,["onExecEditPage","onExecDelPage","onExecPositionPageUp","onExecPositionPageDown","pre_loader","p","lang","allPages","currentPageId"]),we(Oe.id)?(re(),le("div",{key:0,class:"container ms-2",role:"page_pages","data-page-id":Oe.id},[(re(!0),le(Je,null,Lt(we(Oe.id),et=>(re(),le("div",{class:"row",key:et.id},[Pe(cl,{onExecEditPage:Tt=>U(et.id),onExecDelPage:Tt=>Y(et.id),onExecPositionPageUp:Tt=>ce(et.id),onExecPositionPageDown:Tt=>se(et.id),pre_loader:D.value,p:et,lang:x.value,allPages:P.value,currentPageId:ze.value},null,8,["onExecEditPage","onExecDelPage","onExecPositionPageUp","onExecPositionPageDown","pre_loader","p","lang","allPages","currentPageId"])]))),128))],8,NF)):$e("",!0)]))),128))],8,PF)):$e("",!0)]))),128))]),N("div",OF,[Q.value?(re(),le("div",LF,[N("div",RF,[at(N("input",{role:"new_menu",class:Le(["form-control",{"is-invalid":vt.value}]),"onUpdate:modelValue":ne[0]||(ne[0]=ee=>te.value[x.value]=ee),placeholder:`Menu name ${x.value}`},null,10,zF),[[Dt,te.value[x.value]]])]),N("div",{role:"save_menu_0",class:"ms-2 col-1",onClick:ne[1]||(ne[1]=ee=>ke("new"))},FF),N("div",{role:"del_menu_0",class:"ms-2 trash col-1",onClick:ne[2]||(ne[2]=ee=>ye("new"))},UF)])):$e("",!0)]),N("div",HF,[L.value?(re(),le("div",$F,[WF,(re(!0),le(Je,null,Lt(L.value,(ee,Be)=>(re(),le("div",{class:"row",key:Be},[Pe(cl,{onExecEditPage:Oe=>U(ee.id),onExecDelPage:Oe=>Y(ee.id),onExecPositionPageUp:Oe=>ce(ee.id),onExecPositionPageDown:Oe=>se(ee.id),pre_loader:D.value,p:ee,lang:x.value,allPages:P.value,currentPageId:ze.value},null,8,["onExecEditPage","onExecDelPage","onExecPositionPageUp","onExecPositionPageDown","pre_loader","p","lang","allPages","currentPageId"])]))),128))])):$e("",!0),F.value?(re(),le("div",qF,[GF,(re(!0),le(Je,null,Lt(F.value,(ee,Be)=>(re(),le("div",{class:"row",key:Be},[Pe(cl,{onExecEditPage:Oe=>U(ee.id),onExecDelPage:Oe=>Y(ee.id),onExecPositionPageUp:Oe=>ce(ee.id),onExecPositionPageDown:Oe=>se(ee.id),pre_loader:D.value,p:ee,lang:x.value,allPages:P.value,showPageId:!0,currentPageId:ze.value},null,8,["onExecEditPage","onExecDelPage","onExecPositionPageUp","onExecPositionPageDown","pre_loader","p","lang","allPages","currentPageId"])]))),128))])):$e("",!0)])]),N("div",KF,[N("button",{role:"button_save_edit_page",onClick:qt(Ge,["prevent"]),type:"submit",class:"add-page-btn btn btn-primary mt-2 mb-2 me-2",disabled:D.value},[D.value?$e("",!0):(re(),le("i",QF)),D.value?(re(),le("span",ZF)):$e("",!0),ze.value?$e("",!0):(re(),le("span",JF,"Add page")),ze.value?(re(),le("span",XF,"Edit page")):$e("",!0)],8,YF),N("button",{role:"button_clear_page_data",onClick:qt(bt,["prevent"]),class:"add-page-btn btn btn-info ms-2 mt-2 mb-2",disabled:D.value}," Clear data ",8,e9),N("form",null,[N("div",t9,[at(N("input",{class:Le(["form-control",{"is-invalid":M.value.includes("title")}]),"onUpdate:modelValue":ne[3]||(ne[3]=ee=>V.value[x.value]=ee),placeholder:`title ${x.value}`},null,10,n9),[[Dt,V.value[x.value]]])]),N("div",o9,[at(N("input",{class:Le(["form-control",{"is-invalid":M.value.includes("short_title")}]),"onUpdate:modelValue":ne[4]||(ne[4]=ee=>$.value[x.value]=ee),placeholder:`short title ${x.value}`},null,10,i9),[[Dt,$.value[x.value]]])]),N("div",r9,[at(N("textarea",{class:"form-control",rows:"4",cols:"50","onUpdate:modelValue":ne[5]||(ne[5]=ee=>K.value[x.value]=ee),placeholder:`description ${x.value}`},null,8,s9),[[Dt,K.value[x.value]]])]),N("div",a9,[N("label",{class:Le({"disabled-if-loader":D.value}),disabled:D.value},[at(N("input",{class:"col-1",name:"published",type:"checkbox","onUpdate:modelValue":ne[6]||(ne[6]=ee=>T.value=ee),"true-value":1},null,512),[[Ao,T.value]]),nt(" Published ")],10,c9)]),N("div",l9,[N("label",{class:Le({"disabled-if-loader":D.value}),disabled:D.value},[at(N("input",{class:"col-1",name:"commented",type:"checkbox","onUpdate:modelValue":ne[7]||(ne[7]=ee=>W.value=ee),"true-value":1},null,512),[[Ao,W.value]]),nt(" Commented ")],10,d9)]),N("div",u9,[N("label",{class:Le({"disabled-if-loader":D.value}),disabled:D.value},[at(N("input",{class:"col-1",name:"after_login",type:"checkbox","onUpdate:modelValue":ne[8]||(ne[8]=ee=>de.value=ee),"true-value":1},null,512),[[Ao,de.value]]),nt(" Available after log in ")],10,h9)]),N("div",g9,[p9,at(N("select",{class:Le([{"disabled-if-loader":D.value},"rs-select form-control"]),disabled:D.value,id:"pageType","onUpdate:modelValue":ne[9]||(ne[9]=ee=>H.value=ee)},[(re(!0),le(Je,null,Lt(Xe(f),ee=>(re(),le("option",{key:ee,value:ee},Ze(ee),9,f9))),128))],10,m9),[[Gr,H.value]])]),H.value!=="main_page"?(re(),le("div",k9,[N("div",b9,[_9,at(N("select",{class:Le([{"disabled-if-loader":D.value},"rs-select form-control"]),disabled:D.value,role:"menu_items","onUpdate:modelValue":ne[10]||(ne[10]=ee=>J.value=ee),onChange:Ee},[A9,(re(!0),le(Je,null,Lt(ve.value,ee=>(re(),le("option",{key:ee.id,value:ee.id},Ze(ee.name[x.value]),9,C9))),128))],42,w9),[[Gr,J.value]])]),N("div",v9,[y9,at(N("select",{class:Le([{"disabled-if-loader":D.value},"rs-select form-control"]),disabled:D.value,role:"page_items","onUpdate:modelValue":ne[11]||(ne[11]=ee=>ge.value=ee)},[E9,(re(!0),le(Je,null,Lt(be.value,ee=>(re(),le("option",{key:ee.id,value:ee.id},Ze(ee.short_title[x.value]),9,D9))),128))],10,x9),[[Gr,ge.value]])])])):$e("",!0),N("div",I9,[H.value==="cms"||H.value==="inner"||H.value==="privacy_policy"?(re(),le("div",S9,[T9,Pe(Xe(Ce),{editor:Gt.value,modelValue:G.value[x.value],"onUpdate:modelValue":ne[12]||(ne[12]=ee=>G.value[x.value]=ee),config:Pt.value},null,8,["editor","modelValue","config"])])):(re(),le("div",M9,[at(N("textarea",{class:"form-control textarea-rs",rows:"20",cols:"50","onUpdate:modelValue":ne[13]||(ne[13]=ee=>G.value[x.value]=ee),placeholder:`content ${x.value}`},null,8,B9),[[Dt,G.value[x.value]]])]))]),Pe(zx,{ref_key:"childImageComponentRef",ref:_,"internal-images":Te.value,"onUpdate:internalImages":ne[14]||(ne[14]=ee=>Te.value=ee),"internal-msg-wrong":v.value,"onUpdate:internalMsgWrong":ne[15]||(ne[15]=ee=>v.value=ee),"internal-msg-good":w.value,"onUpdate:internalMsgGood":ne[16]||(ne[16]=ee=>w.value=ee),"internal-pre-loader":D.value,"onUpdate:internalPreLoader":ne[17]||(ne[17]=ee=>D.value=ee),lang:x.value,startLoading:Ve,clearMsg:xe,currentId:ze.value,type:"page"},null,8,["internal-images","internal-msg-wrong","internal-msg-good","internal-pre-loader","lang","currentId"])])])])])]))}},N9="adm@cmsrs.pl",O9="cmsrs123",L9={class:"mt-3 col-lg-6 offset-lg-3 col-sm-8 offset-sm-2","data-testid":"login-page"},R9=N("h3",null,"Login",-1),z9={class:"card"},j9={class:"m-4"},F9=N("label",{for:"e-mail",class:"form-label"},"E-mail",-1),V9={class:"m-4"},U9=N("label",{for:"password",class:"form-label"},"Password",-1),H9={class:"text-center m-4"},$9=["disabled"],W9={key:0,class:"fas fa-plus"},q9={key:1,role:"pre_loader_login",class:"spinner-grow spinner-grow-sm"},G9=N("div",{class:"container mt-4"},[N("a",{href:"/"},"Return to the front page")],-1),K9={__name:"LoginPage",setup(s){const{auth:l,setAuth:u,setConfig:g}=Zn(),m=$o(),_=me(""),b=me(""),C=me(!1),f=co({email:"",password:""}),y=async()=>{_.value="",C.value=!1;try{const v=await i6(f);if(v.data.success){const w=v.data.data.token;if(w){const D=await r6(w);D.data.success&&(u(v.data.data),g(D.data.data),m.push("/pages"))}}else _.value=v.data.error}catch(v){_.value="Invalid login credentials",console.log("_is_error__",v)}finally{C.value=!1}};yn(async()=>{if(l.token)return m.push("/pages"),!1;const v=m.currentRoute.value.params.demo;f.email=v=="demo"||zv?N9:"",f.password=v=="demo"||zv?O9:""}),Rt(()=>f.email,()=>{_.value=""}),Rt(()=>f.password,()=>{_.value=""});const x=gn(()=>!(f.password&&f.email));return(v,w)=>(re(),le("div",L9,[R9,Pe(Wo,{msgGood:b.value,msgWrong:_.value},null,8,["msgGood","msgWrong"]),N("form",{onSubmit:qt(y,["prevent"]),class:"container"},[N("div",z9,[N("div",j9,[F9,at(N("input",{id:"e-mail",class:"form-control pb-2","onUpdate:modelValue":w[0]||(w[0]=D=>f.email=D),type:"text"},null,512),[[Dt,f.email]])]),N("div",V9,[U9,at(N("input",{id:"password",class:"form-control","onUpdate:modelValue":w[1]||(w[1]=D=>f.password=D),type:"password"},null,512),[[Dt,f.password]])]),N("div",H9,[N("button",{type:"submit",role:"button_login",class:"btn btn-primary mt-2 mb-2",disabled:C.value||x.value},[C.value?$e("",!0):(re(),le("i",W9)),C.value?(re(),le("span",q9)):$e("",!0),nt(" Login ")],8,$9)])])],32),G9]))}},Y9=["role"],Q9=["role"],hn={__name:"TableSort",props:{pre_loader:Boolean,sortColumn:String,column:String,direction:String},emits:["sortAsc","sortDesc"],setup(s){return(l,u)=>(re(),le("span",null,[N("span",{role:"sorting_"+s.sortColumn+"_asc",class:Le([{"disabled-if-loader":s.pre_loader},"ml-2 col-1"]),onClick:u[0]||(u[0]=qt(g=>l.$emit("sortAsc"),["prevent"]))},[N("i",{class:Le(["fas fa-arrow-down cursor-pointer",{"text-primary":s.sortColumn==s.column&&s.direction=="asc"}]),"aria-hidden":"true"},null,2)],10,Y9),N("span",{role:"sorting_"+s.sortColumn+"_desc",class:Le([{"disabled-if-loader":s.pre_loader},"ml-2 col-1"]),onClick:u[1]||(u[1]=qt(g=>l.$emit("sortDesc"),["prevent"]))},[N("i",{class:Le(["fas fa-arrow-up cursor-pointer",{"text-primary":s.sortColumn==s.column&&s.direction=="desc"}]),"aria-hidden":"true"},null,2)],10,Q9)]))}},Z9={"data-testid":"users-page"},J9=N("h3",null,"Users",-1),X9={class:"container"},eV={class:"row mb-4"},tV={class:"col-5"},nV=["disabled"],oV={key:0,class:"fas fa-plus"},iV={key:1,role:"pre_loader_add_client",class:"spinner-grow spinner-grow-sm"},rV={class:"col-7 d-flex align-items-baseline"},sV=["disabled"],aV={key:0,class:"fas fa-search"},cV={key:1,role:"pre_loader_search_client",class:"spinner-grow spinner-grow-sm"},lV=N("span",null,"Search client",-1),dV={class:"table mt-2 mb-4"},uV=N("th",{scope:"col"},"#",-1),hV={scope:"col"},gV={scope:"col"},pV={scope:"col"},mV=N("th",{scope:"col"},"Action",-1),fV={scope:"row"},kV=["onClick"],bV=["onClick"],_V=N("i",{class:"far fa-edit cursor-pointer"},null,-1),wV=[_V],AV=["onClick"],CV=N("i",{class:"fas fa-trash cursor-pointer"},null,-1),vV=[CV],yV={"aria-label":"Page navigation example"},xV={class:"pagination justify-content-end"},EV=["onClick","innerHTML"],DV={__name:"UsersPage",setup(s){const l=$o(),{token:u}=It.retrieveParamsFromStorage(),{auth:g,config:m}=Zn(),_=me(""),b=me(""),C=me(!1),f=me([]),y=me(""),x=me(""),v=me(""),w=me(""),D=me(""),M=()=>{l.push({name:"user",params:{mode:"add"}})},P=H=>{l.push({name:"user",params:{mode:"edit",id:H}})},L=async()=>{C.value=!0,v.value="1",w.value=D.value,await G()&&(C.value=!1)},F=async H=>{if(K(),window.confirm("Are you sure you wish to delete this item?")){C.value=!0;try{(await S6(H,u)).data.success&&await G()&&(b.value="Client has been deleted",C.value=!1)}catch(T){tn(T,m.demo_status,_,C)}}},j=async H=>{C.value=!0,v.value=It.retrieveParamsFromUrl(H,"page"),await G()&&(C.value=!1)},R=async H=>{$(H,"asc")},V=async H=>{$(H,"desc")},$=async(H,T)=>{C.value=!0,y.value=H,x.value=T,v.value="1",await G()&&(C.value=!1)},K=()=>{_.value="",b.value=""},G=async()=>{K();try{const H=await v6(y.value,x.value,u,v.value,w.value);return f.value=H.data.data,!0}catch(H){console.log("error get clients=",H)}return!1};return yn(async()=>{if(!g.token)return l.push("/"),!1;C.value=!0,y.value="created_at",x.value="desc",v.value="1",w.value="",await G()&&(C.value=!1)}),(H,T)=>(re(),le("div",Z9,[J9,Pe(Wo,{msgGood:b.value,msgWrong:_.value},null,8,["msgGood","msgWrong"]),N("div",X9,[N("div",eV,[N("div",tV,[N("button",{role:"button_add_client",onClick:qt(M,["prevent"]),class:"add-page-btn btn btn-primary mt-2 mb-2 mr-2",disabled:C.value},[C.value?$e("",!0):(re(),le("i",oV)),C.value?(re(),le("span",iV)):$e("",!0),nt(" Add Client ")],8,nV)]),N("div",rV,[at(N("input",{type:"input",placeholder:"search: name or email",class:"form-control col",name:"search","onUpdate:modelValue":T[0]||(T[0]=W=>D.value=W)},null,512),[[Dt,D.value]]),N("button",{role:"button_search_client",onClick:qt(L,["prevent"]),class:"add-page-btn btn btn-primary mt-2 mb-2 mr-2",disabled:C.value},[C.value?$e("",!0):(re(),le("i",aV)),C.value?(re(),le("span",cV)):$e("",!0),lV],8,sV)])]),N("table",dV,[N("thead",null,[N("tr",null,[uV,N("th",hV,[nt(" Name "),Pe(hn,{sortColumn:"name",onSortAsc:T[1]||(T[1]=W=>R("name")),onSortDesc:T[2]||(T[2]=W=>V("name")),pre_loader:C.value,column:y.value,direction:x.value},null,8,["pre_loader","column","direction"])]),N("th",gV,[nt(" Email "),Pe(hn,{sortColumn:"email",onSortAsc:T[3]||(T[3]=W=>R("email")),onSortDesc:T[4]||(T[4]=W=>V("email")),pre_loader:C.value,column:y.value,direction:x.value},null,8,["pre_loader","column","direction"])]),N("th",pV,[nt(" Created "),Pe(hn,{sortColumn:"created_at",onSortAsc:T[5]||(T[5]=W=>R("created_at")),onSortDesc:T[6]||(T[6]=W=>V("created_at")),pre_loader:C.value,column:y.value,direction:x.value},null,8,["pre_loader","column","direction"])]),mV])]),N("tbody",null,[(re(!0),le(Je,null,Lt(f.value.data,(W,de)=>(re(),le("tr",{key:de},[N("th",fV,Ze(de+1),1),N("td",null,[N("span",{onClick:J=>P(W.id),class:"cursor-pointer text-primary"},Ze(W.name),9,kV)]),N("td",null,Ze(W.email),1),N("td",null,Ze(W.created_at?W.created_at.split("T")[0]:""),1),N("td",null,[N("span",{role:"edit_client",class:Le(["me-1",{"disabled-if-loader":C.value}]),onClick:J=>P(W.id)},wV,10,bV),N("span",{role:"del_client",class:Le(["ms-1",{"disabled-if-loader":C.value}]),onClick:J=>F(W.id)},vV,10,AV)])]))),128))])]),N("nav",yV,[N("ul",xV,[(re(!0),le(Je,null,Lt(f.value.links,(W,de)=>(re(),le("li",{key:de,class:Le(["page-item",{disabled:!W.url||C.value,active:W.active}])},[N("a",{role:"pagination_links",class:"page-link",onClick:J=>W.url&&j(W.url),innerHTML:W.label},null,8,EV)],2))),128))])])])]))}},IV={"data-testid":"user-edit-page"},SV={key:0},TV={key:1},MV={class:"container"},BV={class:"row"},PV={class:"col"},NV=["disabled"],OV={class:"row pb-4 pt-4"},LV={class:"mb-3"},RV=N("label",{for:"email",class:"form-label"},"Email address",-1),zV=["disabled"],jV={class:"mb-3"},FV=N("label",{for:"name",class:"form-label"},"Name",-1),VV={class:"mb-3"},UV=N("label",{for:"password",class:"form-label"},"Password",-1),HV={class:"mb-3"},$V=N("label",{for:"password_confirmation",class:"form-label"},"Password confirmation",-1),WV=["disabled"],qV={key:0,class:"fas fa-plus"},GV={key:1,role:"pre_loader_add_edit_client",class:"spinner-grow spinner-grow-sm"},KV={key:2},YV={key:3},QV={__name:"UserEditPage",setup(s){const l=$o(),{token:u}=It.retrieveParamsFromStorage(),g=l.currentRoute.value.params.mode,{auth:m,config:_}=Zn(),b=me(""),C=me(""),f=me([]),y=me(!1);let x=co({});const v=()=>{l.push({name:"users"})},w=()=>{b.value="",C.value=""},D=()=>({id:"",name:"",email:"",password:"",password_confirmation:""}),M=async()=>{w(),y.value=!0;try{const L=x.id?await P6(x,u):await B6(x,u);L.data.success?C.value=x.id?Vt.ttt("success_client_edit"):Vt.ttt("success_client_add"):L.data.success===!1?(b.value=await It.parseError(L.data.error),f.value=await It.getErrorFields(L.data.error)):b.value="Something wrong with add or edit client - check response status"}catch(L){tn(L,_.demo_status,b,y)}y.value=!1},P=async L=>{try{const F=await M6(L,u);if(F.data.success){const j=F.data.data;return x.id=j.id,x.name=j.name,x.email=j.email,!0}else b.value="Sth wrong with get client",console.log("error get client=",F.data)}catch(F){b.value="Sth wrong with get client (error)",console.log("error get client=",F)}return!1};return yn(async()=>{if(!m.token)return l.push("/"),!1;if(g!=="edit"&&g!=="add"&&l.push("/"),w(),x=D(),g==="edit"){const L=l.currentRoute.value.params.id;y.value=!0,await P(L)&&(y.value=!1)}}),(L,F)=>(re(),le("div",IV,[Xe(g)==="edit"?(re(),le("h3",SV,"Edit client")):(re(),le("h3",TV,"Add client")),Pe(Wo,{msgGood:C.value,msgWrong:b.value},null,8,["msgGood","msgWrong"]),N("div",MV,[N("div",BV,[N("div",PV,[N("button",{onClick:qt(v,["prevent"]),class:"add-page-btn btn btn-info ml-3 mt-2 mb-2",disabled:y.value}," Back ",8,NV)])]),N("div",OV,[N("form",null,[N("div",LV,[RV,at(N("input",{type:"email","onUpdate:modelValue":F[0]||(F[0]=j=>Xe(x).email=j),class:Le(["form-control",{"is-invalid":f.value.includes("email")}]),id:"email","aria-describedby":"emailHelp",placeholder:"email",disabled:Xe(g)==="edit"},null,10,zV),[[Dt,Xe(x).email]])]),N("div",jV,[FV,at(N("input",{type:"text","onUpdate:modelValue":F[1]||(F[1]=j=>Xe(x).name=j),class:Le(["form-control",{"is-invalid":f.value.includes("name")}]),id:"name",placeholder:"name"},null,2),[[Dt,Xe(x).name]])]),N("div",VV,[UV,at(N("input",{type:"password","onUpdate:modelValue":F[2]||(F[2]=j=>Xe(x).password=j),class:Le(["form-control",{"is-invalid":f.value.includes("password")}]),id:"password",placeholder:"password"},null,2),[[Dt,Xe(x).password]])]),N("div",HV,[$V,at(N("input",{type:"password","onUpdate:modelValue":F[3]||(F[3]=j=>Xe(x).password_confirmation=j),class:Le(["form-control",{"is-invalid":f.value.includes("password")}]),id:"password_confirmation",placeholder:"password confirmation"},null,2),[[Dt,Xe(x).password_confirmation]])]),N("button",{role:"button_save_edit_client",onClick:qt(M,["prevent"]),class:"add-page-btn btn btn-primary mt-2 mb-2 mr-2",disabled:y.value},[y.value?$e("",!0):(re(),le("i",qV)),y.value?(re(),le("span",GV)):$e("",!0),Xe(g)==="edit"?(re(),le("span",KV,"Edit client")):(re(),le("span",YV,"Add client"))],8,WV)])])])]))}},ZV={"data-testid":"products-page"},JV={class:"container"},XV={class:"row mt-3 mb-3"},eU=N("h3",{class:"col-10"},"Products",-1),tU={class:"container"},nU={class:"row mb-4"},oU={class:"col-5"},iU=["disabled"],rU={key:0,class:"fas fa-plus"},sU={key:1,role:"pre_loader_add_product",class:"spinner-grow spinner-grow-sm"},aU={class:"col-7 d-flex align-items-baseline"},cU=["disabled"],lU={key:0,class:"fas fa-search"},dU={key:1,role:"pre_loader_search_product",class:"spinner-grow spinner-grow-sm"},uU=N("span",null,"Search product",-1),hU={class:"table mt-2 mb-4"},gU=N("th",{scope:"col"},"#",-1),pU=N("th",{scope:"col"},"Image",-1),mU={scope:"col"},fU={scope:"col"},kU={scope:"col"},bU={scope:"col"},_U={scope:"col"},wU={scope:"col"},AU=N("th",{scope:"col"},"Action",-1),CU={scope:"row"},vU=["onClick"],yU={key:0},xU=["src","alt"],EU={key:1},DU=["onClick","role"],IU=["onClick"],SU={key:0,class:"fa fa-check","aria-hidden":"true"},TU={key:1,class:"fa fa-times","aria-hidden":"true"},MU=["onClick"],BU=N("i",{class:"far fa-edit cursor-pointer"},null,-1),PU=[BU],NU=["onClick"],OU=N("i",{class:"fas fa-trash cursor-pointer"},null,-1),LU=[OU],RU={"aria-label":"Page navigation example"},zU={class:"pagination justify-content-end"},jU=["onClick","innerHTML"],FU={__name:"ProductsPage",setup(s){const{auth:l,config:u,setDefaultLang:g}=Zn(),m=$o(),{configDefaultLang:_}=It.retrieveParamsFromStorage(),b=me(_),C=me(""),f=me(""),y=me(!1),x=me([]),v=me(""),w=me(""),D=me(""),M=me(""),P=me(""),L=me(window.innerWidth),F=()=>{L.value=window.innerWidth},j=gn(()=>L.value<990?"fa fa-camera-retro fa-lg":"fa fa-camera-retro fa-3x"),R=()=>{m.push({name:"product",params:{mode:"add"}})},V=be=>{m.push({name:"product",params:{mode:"edit",id:be}})};async function $(be){y.value=!0,b.value=be,g(be),await Te()&&(y.value=!1)}const K=async()=>{y.value=!0,D.value="1",M.value=P.value,await Te()&&(y.value=!1)},G=be=>{m.push("/pages/"+be)},H=async be=>{if(ge(),window.confirm("Are you sure you wish to delete this item?")){y.value=!0;try{(await I6(be,l.token)).data.success&&await Te()&&(f.value="Product has been deleted",y.value=!1)}catch(Q){tn(Q,u.demo_status,C,y)}}},T=async be=>{y.value=!0,D.value=It.retrieveParamsFromUrl(be,"page"),await Te()&&(y.value=!1)},W=async be=>{J(be,"asc")},de=async be=>{J(be,"desc")},J=async(be,Q)=>{y.value=!0,v.value=be,w.value=Q,D.value="1",await Te()&&(y.value=!1)},ge=()=>{C.value="",f.value=""},Te=async()=>{ge();try{const be=await x6(b.value,v.value,w.value,l.token,D.value,M.value);return x.value=be.data.data,!0}catch(be){console.log("error get products=",be)}return!1};return yn(async()=>{if(!l.token||!u.is_shop)return m.push("/"),!1;y.value=!0,window.addEventListener("resize",F),v.value="created_at",w.value="desc",D.value="1",M.value="",await Te()&&(y.value=!1)}),(be,Q)=>(re(),le("div",ZV,[N("div",JV,[N("div",XV,[eU,Pe(ed,{lang:b.value,onExecChangeLang:$},null,8,["lang"])])]),Pe(Wo,{msgGood:f.value,msgWrong:C.value},null,8,["msgGood","msgWrong"]),N("div",tU,[N("div",nU,[N("div",oU,[N("button",{role:"button_add_product",onClick:qt(R,["prevent"]),class:"add-page-btn btn btn-primary mt-2 mb-2 mr-2",disabled:y.value},[y.value?$e("",!0):(re(),le("i",rU)),y.value?(re(),le("span",sU)):$e("",!0),nt(" Add Product ")],8,iU)]),N("div",aU,[at(N("input",{type:"input",placeholder:"search: name or sku",class:"form-control col",name:"search","onUpdate:modelValue":Q[0]||(Q[0]=te=>P.value=te)},null,512),[[Dt,P.value]]),N("button",{role:"button_search_product",onClick:qt(K,["prevent"]),class:"add-page-btn btn btn-primary mt-2 mb-2 mr-2",disabled:y.value},[y.value?$e("",!0):(re(),le("i",lU)),y.value?(re(),le("span",dU)):$e("",!0),uU],8,cU)])]),N("table",hU,[N("thead",null,[N("tr",null,[gU,pU,N("th",mU,[nt(" Product name "),Pe(hn,{sortColumn:"product_name",onSortAsc:Q[1]||(Q[1]=te=>W("product_name")),onSortDesc:Q[2]||(Q[2]=te=>de("product_name")),pre_loader:y.value,column:v.value,direction:w.value},null,8,["pre_loader","column","direction"])]),N("th",fU,[nt(" Page "),Pe(hn,{sortColumn:"page_short_title",onSortAsc:Q[3]||(Q[3]=te=>W("page_short_title")),onSortDesc:Q[4]||(Q[4]=te=>de("page_short_title")),pre_loader:y.value,column:v.value,direction:w.value},null,8,["pre_loader","column","direction"])]),N("th",kU,[nt(" Sku "),Pe(hn,{sortColumn:"sku",onSortAsc:Q[5]||(Q[5]=te=>W("sku")),onSortDesc:Q[6]||(Q[6]=te=>de("sku")),pre_loader:y.value,column:v.value,direction:w.value},null,8,["pre_loader","column","direction"])]),N("th",bU,[nt(" Price "),Pe(hn,{sortColumn:"price",onSortAsc:Q[7]||(Q[7]=te=>W("price")),onSortDesc:Q[8]||(Q[8]=te=>de("price")),pre_loader:y.value,column:v.value,direction:w.value},null,8,["pre_loader","column","direction"])]),N("th",_U,[nt(" Pub "),Pe(hn,{sortColumn:"published",onSortAsc:Q[9]||(Q[9]=te=>W("published")),onSortDesc:Q[10]||(Q[10]=te=>de("published")),pre_loader:y.value,column:v.value,direction:w.value},null,8,["pre_loader","column","direction"])]),N("th",wU,[nt(" Created "),Pe(hn,{sortColumn:"created_at",onSortAsc:Q[11]||(Q[11]=te=>W("created_at")),onSortDesc:Q[12]||(Q[12]=te=>de("created_at")),pre_loader:y.value,column:v.value,direction:w.value},null,8,["pre_loader","column","direction"])]),AU])]),N("tbody",null,[(re(!0),le(Je,null,Lt(x.value.data,(te,ve)=>(re(),le("tr",{key:ve},[N("th",CU,Ze(ve+1),1),N("td",{onClick:vt=>V(te.id)},[te.images!==null&&typeof te.images=="object"&&typeof te.images[0]=="object"?(re(),le("span",yU,[N("img",{style:{width:"40%"},src:Xe(Cx)+te.images[0].fs.small,alt:te.images[0].alt[b.value]},null,8,xU)])):(re(),le("span",EU,[N("i",{class:Le(j.value)},null,2)]))],8,vU),N("td",{onClick:vt=>V(te.id),role:"product_name_"+b.value,class:"cursor-pointer text-primary"},Ze(te.product_name),9,DU),N("td",null,[N("span",{onClick:vt=>G(te.page_id),class:"cursor-pointer text-primary"},Ze(te.page_short_title),9,IU)]),N("td",null,Ze(te.sku),1),N("td",null,Ze(te.price),1),N("td",null,[te.published?(re(),le("i",SU)):$e("",!0),te.published?$e("",!0):(re(),le("i",TU))]),N("td",null,Ze(te.created_at?te.created_at.split("T")[0]:""),1),N("td",null,[N("span",{role:"edit_product",class:Le(["me-1",{"disabled-if-loader":y.value}]),onClick:vt=>V(te.id)},PU,10,MU),N("span",{role:"del_product",class:Le(["ms-1",{"disabled-if-loader":y.value}]),onClick:vt=>H(te.id)},LU,10,NU)])]))),128))])]),N("nav",RU,[N("ul",zU,[(re(!0),le(Je,null,Lt(x.value.links,(te,ve)=>(re(),le("li",{key:ve,class:Le(["page-item",{disabled:!te.url||y.value,active:te.active}])},[N("a",{role:"pagination_links",class:"page-link",onClick:vt=>te.url&&T(te.url),innerHTML:te.label},null,8,jU)],2))),128))])])])]))}},VU={"data-testid":"contacts-page"},UU=N("h3",null,"Contacts",-1),HU={class:"container"},$U={class:"row mb-4"},WU=N("div",{class:"col-5"}," ",-1),qU={class:"col-7 d-flex align-items-baseline"},GU=["disabled"],KU={key:0,class:"fas fa-search"},YU={key:1,role:"pre_loader_search_contact",class:"spinner-grow spinner-grow-sm"},QU=N("span",null,"Search contacts",-1),ZU={class:"table mt-2 mb-4"},JU=N("th",{scope:"col"},"#",-1),XU={scope:"col"},eH={scope:"col"},tH={scope:"col"},nH=N("th",{scope:"col"},"Action",-1),oH={scope:"row"},iH=["onClick"],rH=N("i",{class:"fas fa-trash cursor-pointer"},null,-1),sH=[rH],aH={"aria-label":"Page navigation example"},cH={class:"pagination justify-content-end"},lH=["onClick","innerHTML"],dH={__name:"ContactsPage",setup(s){const{auth:l,config:u}=Zn(),g=$o(),{token:m}=It.retrieveParamsFromStorage(),_=me(""),b=me(""),C=me(!1),f=me([]),y=me(""),x=me(""),v=me(""),w=me(""),D=me(""),M=async()=>{C.value=!0,v.value="1",w.value=D.value,await $()&&(C.value=!1)},P=async K=>{if(V(),window.confirm("Are you sure you wish to delete this item?")){C.value=!0;try{(await T6(K,m)).data.success&&await $()&&(b.value="Contact has been deleted",C.value=!1)}catch(G){tn(G,u.demo_status,_,C)}}},L=async K=>{C.value=!0,v.value=It.retrieveParamsFromUrl(K,"page"),await $()&&(C.value=!1)},F=async K=>{R(K,"asc")},j=async K=>{R(K,"desc")},R=async(K,G)=>{C.value=!0,y.value=K,x.value=G,v.value="1",await $()&&(C.value=!1)},V=()=>{_.value="",b.value=""},$=async()=>{V();try{const K=await y6(y.value,x.value,m,v.value,w.value);return f.value=K.data.data,!0}catch(K){console.log("error get contacts=",K)}return!1};return yn(async()=>{if(!l.token)return g.push("/"),!1;C.value=!0,y.value="created_at",x.value="desc",v.value="1",w.value="",await $()&&(C.value=!1)}),(K,G)=>(re(),le("div",VU,[UU,Pe(Wo,{msgGood:b.value,msgWrong:_.value},null,8,["msgGood","msgWrong"]),N("div",HU,[N("div",$U,[WU,N("div",qU,[at(N("input",{type:"input",placeholder:"search: email or message",class:"form-control col",name:"search","onUpdate:modelValue":G[0]||(G[0]=H=>D.value=H)},null,512),[[Dt,D.value]]),N("button",{role:"button_search_contact",onClick:qt(M,["prevent"]),class:"add-page-btn btn btn-primary mt-2 mb-2 mr-2",disabled:C.value},[C.value?$e("",!0):(re(),le("i",KU)),C.value?(re(),le("span",YU)):$e("",!0),QU],8,GU)])]),N("table",ZU,[N("thead",null,[N("tr",null,[JU,N("th",XU,[nt(" Email "),Pe(hn,{sortColumn:"email",onSortAsc:G[1]||(G[1]=H=>F("email")),onSortDesc:G[2]||(G[2]=H=>j("email")),pre_loader:C.value,column:y.value,direction:x.value},null,8,["pre_loader","column","direction"])]),N("th",eH,[nt(" Message "),Pe(hn,{sortColumn:"message",onSortAsc:G[3]||(G[3]=H=>F("message")),onSortDesc:G[4]||(G[4]=H=>j("message")),pre_loader:C.value,column:y.value,direction:x.value},null,8,["pre_loader","column","direction"])]),N("th",tH,[nt(" Created "),Pe(hn,{sortColumn:"created_at",onSortAsc:G[5]||(G[5]=H=>F("created_at")),onSortDesc:G[6]||(G[6]=H=>j("created_at")),pre_loader:C.value,column:y.value,direction:x.value},null,8,["pre_loader","column","direction"])]),nH])]),N("tbody",null,[(re(!0),le(Je,null,Lt(f.value.data,(H,T)=>(re(),le("tr",{key:T},[N("th",oH,Ze(T+1),1),N("td",null,Ze(H.email),1),N("td",null,Ze(H.message),1),N("td",null,Ze(H.created_at?H.created_at.split("T")[0]:""),1),N("td",null,[N("span",{role:"del_contact",class:Le(["ms-1",{"disabled-if-loader":C.value}]),onClick:W=>P(H.id)},sH,10,iH)])]))),128))])]),N("nav",aH,[N("ul",cH,[(re(!0),le(Je,null,Lt(f.value.links,(H,T)=>(re(),le("li",{key:T,class:Le(["page-item",{disabled:!H.url||C.value,active:H.active}])},[N("a",{role:"pagination_links",class:"page-link",onClick:W=>H.url&&L(H.url),innerHTML:H.label},null,8,lH)],2))),128))])])])]))}},uH={"data-testid":"settings-page"},hH=N("h3",null,"Settings",-1),gH={class:"container"},pH={key:0,class:"form-check mt-4 row"},mH=["disabled"],fH={key:1,class:"form-check mt-4 row"},kH=["disabled"],bH=N("i",{class:"fa fa-cog","aria-hidden":"true"},null,-1),_H={class:"form-check mt-4 row"},wH=["disabled"],AH=N("i",{class:"fa fa-cog","aria-hidden":"true"},null,-1),CH={__name:"SettingsPage",setup(s){const{auth:l,config:u,setIsCacheEnable:g}=Zn(),m=me(""),_=me(""),b=me(u.is_cache_enable),C=me(!1),f=()=>{m.value="",_.value=""},y=async()=>(f(),C.value?!1:(C.value=!0,!0)),x=async()=>{if(!y())return!1;try{const D=await vx(It.getPostToggleCacheEnableFile(),l.token);if(D.data.success)return b.value=D.data.data.value,g(D.data.data.value),_.value=D.data.data.message,C.value=!1,!0;m.value="Sth wrong with changeCacheEnable",console.log("error changeCacheEnable",D.data)}catch(D){tn(D,u.demo_status,m,C)}return!1},v=async()=>{if(!y())return!1;try{const D=await R6(l.token);if(D.data.success)return _.value=Vt.ttt("cache_was_cleared"),C.value=!1,!0;m.value="Sth wrong with actionClearCache",console.log("error actionClearCache",D.data)}catch(D){tn(D,u.demo_status,m,C)}return!1},w=async()=>{if(!y())return!1;try{const D=await z6(l.token);if(D.data.success)return _.value=Vt.ttt("sitemap_was_created"),C.value=!1,!0;m.value="Sth wrong with actionCreateSitemap",console.log("error actionCreateSitemap",D.data)}catch(D){tn(D,u.demo_status,m,C)}return!1};return yn(async()=>{if(!l.token)return router.push("/"),!1;f()}),Rt(()=>u.is_cache_enable,D=>{b.value=D}),(D,M)=>(re(),le("div",uH,[hH,Pe(Wo,{msgGood:_.value,msgWrong:m.value},null,8,["msgGood","msgWrong"]),N("div",gH,[N("form",null,[Xe(u).cache_enable?(re(),le("div",pH,[N("label",{class:Le({"disabled-if-loader":C.value}),disabled:C.value},[at(N("input",{role:"toggle_cache_enable",type:"checkbox","onUpdate:modelValue":M[0]||(M[0]=P=>b.value=P),onClick:qt(x,["prevent"]),"true-value":!0},null,512),[[Ao,b.value]]),nt(" "+Ze(Xe(Vt).ttt("toggle_cache_enable")),1)],10,mH)])):$e("",!0),Xe(u).cache_enable?(re(),le("div",fH,[N("label",{role:"clear_cache",onClick:qt(v,["prevent"]),class:Le({"disabled-if-loader":C.value}),disabled:C.value},[bH,nt(" "+Ze(Xe(Vt).ttt("clear_cache")),1)],10,kH)])):$e("",!0),N("div",_H,[N("label",{role:"create_sitemap",onClick:qt(w,["prevent"]),class:Le({"disabled-if-loader":C.value}),disabled:C.value},[AH,nt(" "+Ze(Xe(Vt).ttt("create_sitemap")),1)],10,wH)])])])]))}},vH={"data-testid":"product-edit-page"},yH={class:"container"},xH={class:"row mt-3 mb-3"},EH={key:0,class:"col-10"},DH={key:1,class:"col-10"},IH={class:"container"},SH={class:"row"},TH={class:"col"},MH=["disabled"],BH={class:"row pb-4 pt-4"},PH={class:"mb-3"},NH=N("label",{for:"product_name",class:"form-label"},"Product Name",-1),OH=["role"],LH={class:"mb-3"},RH=N("label",{for:"sku",class:"form-label"},"Sku",-1),zH={class:"mb-3"},jH=N("label",{for:"price",class:"form-label"},"Price",-1),FH={class:"form-check mt-2 row"},VH={class:"form-group"},UH={class:"form-group mt-3"},HH=N("label",{for:"page",class:"text-secondary"},"Page:",-1),$H=N("option",{value:""},null,-1),WH=["value"],qH=["disabled"],GH={key:0,class:"fas fa-plus"},KH={key:1,role:"pre_loader_add_edit_product",class:"spinner-grow spinner-grow-sm"},YH={key:2},QH={key:3},ZH={__name:"ProductEditPage",setup(s){const{auth:l,config:u,setDefaultLang:g}=Zn(),m=me(null),{configLangs:_,configDefaultLang:b}=It.retrieveParamsFromStorage(),C=me(b),f=$o(),y=f.currentRoute.value.params.mode,x=me(""),v=me(""),w=me([]),D=me(!1),M=me([]),P=me(!1),L=me(It.createEmptyObj(_)),F=me(""),j=me(""),R=me(!1),V=me(It.createEmptyObj(_)),$=me(""),K=me([]);async function G(be){C.value=be,g(be),W()}const H=()=>{f.push({name:"products"})},T=async()=>(de(),D.value?!1:(D.value=!0,!0)),W=()=>{x.value="",v.value=""},de=()=>{x.value="",v.value="",w.value=[]},J=async()=>{if(!T())return!1;try{const be={id:P.value,product_name:L.value,sku:F.value,price:j.value,published:R.value,product_description:V.value,page_id:$.value,images:K.value},Q=be.id?await L6(be,l.token):await O6(be,l.token);Q.data.success?be.id?v.value=Vt.ttt("success_product_edit"):(v.value=Vt.ttt("success_product_add"),f.push("/product/edit/"+Q.data.data.productId),P.value=Q.data.data.productId):Q.data.success===!1?(x.value=await It.parseError(Q.data.error),w.value=await It.getErrorFields(Q.data.error)):x.value="Something wrong with add or edit product - check response status"}catch(be){tn(be,u.demo_status,x,D)}D.value=!1},ge=async be=>{try{const Q=await N6(be,l.token);if(Q.data.success){const te=Q.data.data;return P.value=te.id,L.value=te.product_name,F.value=te.sku,j.value=te.price,R.value=te.published,V.value=te.product_description,$.value=te.page_id,K.value=te.images,!0}else x.value="Sth wrong with get product",console.log("error get product=",Q.data)}catch(Q){x.value="Sth wrong with get product (error)",console.log("error get product=",Q)}return!1},Te=async()=>{try{const be=await d6("shop",l.token);if(be.data.success)return M.value=be.data.data,!0;x.value="Sth wrong with get pages by type",console.log("error get pages by type=",be.data)}catch(be){x.value="Sth wrong with get pages by type (error)",console.log("error get pages by type=",be)}return!1};return yn(async()=>{if(!l.token||!u.is_shop)return f.push("/"),!1;if(y!=="edit"&&y!=="add"&&f.push("/"),!T())return!1;if(await m.value.resetSelectedItems(),await Te(),y==="edit"){const be=f.currentRoute.value.params.id;P.value=parseInt(be),await ge(be)&&(D.value=!1)}else D.value=!1}),Rt(L,()=>{W()},{deep:!0}),Rt(V,()=>{W()},{deep:!0}),Rt(F,()=>{W()}),Rt(j,()=>{W()}),Rt(R,()=>{W()}),Rt($,()=>{W()}),(be,Q)=>(re(),le("div",vH,[N("div",yH,[N("div",xH,[P.value?(re(),le("h3",EH,"Edit product")):(re(),le("h3",DH,"Add product")),Pe(ed,{lang:C.value,onExecChangeLang:G},null,8,["lang"])])]),Pe(Wo,{msgGood:v.value,msgWrong:x.value},null,8,["msgGood","msgWrong"]),N("div",IH,[N("div",SH,[N("div",TH,[N("button",{onClick:qt(H,["prevent"]),class:"add-page-btn btn btn-info ml-3 mt-2 mb-2",disabled:D.value}," Back ",8,MH)])]),N("div",BH,[N("form",null,[N("div",PH,[NH,at(N("input",{role:"product_name_"+C.value,type:"text","onUpdate:modelValue":Q[0]||(Q[0]=te=>L.value[C.value]=te),class:Le([{"is-invalid":w.value.includes("product_name")},"form-control"]),id:"product_name",placeholder:"product name"},null,10,OH),[[Dt,L.value[C.value]]])]),N("div",LH,[RH,at(N("input",{type:"sku","onUpdate:modelValue":Q[1]||(Q[1]=te=>F.value=te),class:Le(["form-control",{"is-invalid":w.value.includes("sku")}]),id:"sku",placeholder:"sku"},null,2),[[Dt,F.value]])]),N("div",zH,[jH,at(N("input",{type:"price","onUpdate:modelValue":Q[2]||(Q[2]=te=>j.value=te),class:Le(["form-control",{"is-invalid":w.value.includes("price")}]),id:"price",placeholder:"price"},null,2),[[Dt,j.value]])]),N("div",FH,[N("label",null,[at(N("input",{class:"col-1",name:"published",type:"checkbox","onUpdate:modelValue":Q[3]||(Q[3]=te=>R.value=te),"true-value":1},null,512),[[Ao,R.value]]),nt(" Published ")])]),N("div",VH,[at(N("textarea",{class:"form-control textarea-rs",rows:"20",cols:"50","onUpdate:modelValue":Q[4]||(Q[4]=te=>V.value[C.value]=te),placeholder:"product description"},null,512),[[Dt,V.value[C.value]]])]),N("div",UH,[HH,at(N("select",{role:"page_items",class:"rs-select form-control","onUpdate:modelValue":Q[5]||(Q[5]=te=>$.value=te)},[$H,(re(!0),le(Je,null,Lt(M.value,te=>(re(),le("option",{key:te.id,value:te.id},Ze(te.short_title[C.value]),9,WH))),128))],512),[[Gr,$.value]])]),Pe(zx,{ref_key:"childImageComponentRef",ref:m,"internal-images":K.value,"onUpdate:internalImages":Q[6]||(Q[6]=te=>K.value=te),"internal-msg-wrong":x.value,"onUpdate:internalMsgWrong":Q[7]||(Q[7]=te=>x.value=te),"internal-msg-good":v.value,"onUpdate:internalMsgGood":Q[8]||(Q[8]=te=>v.value=te),"internal-pre-loader":D.value,"onUpdate:internalPreLoader":Q[9]||(Q[9]=te=>D.value=te),lang:C.value,startLoading:T,clearMsg:de,currentId:P.value,type:"product"},null,8,["internal-images","internal-msg-wrong","internal-msg-good","internal-pre-loader","lang","currentId"]),N("button",{role:"button_save_edit_product",onClick:qt(J,["prevent"]),class:"add-page-btn btn btn-primary mt-4 mb-2 mr-2",disabled:D.value},[D.value?$e("",!0):(re(),le("i",GH)),D.value?(re(),le("span",KH)):$e("",!0),Xe(y)==="edit"?(re(),le("span",YH,"Edit product")):(re(),le("span",QH,"Add product"))],8,qH)])])])]))}},JH={"data-testid":"checkouts-page"},XH={class:"container"},e$={class:"row mt-3 mb-3"},t$=N("h3",{class:"col-10"},"Checkouts",-1),n$={class:"container"},o$={class:"row mb-4"},i$=N("div",{class:"col-5"}," ",-1),r$={class:"col-7 d-flex align-items-baseline"},s$=["disabled"],a$={key:0,class:"fas fa-search"},c$={key:1,role:"pre_loader_search_checkout",class:"spinner-grow spinner-grow-sm"},l$=N("span",null,"Search checkout",-1),d$={class:"table mt-2 mb-4"},u$=N("th",{scope:"col"},"#",-1),h$=N("th",{scope:"col"},"Email",-1),g$=N("th",{scope:"col"},"Telephone",-1),p$={scope:"col"},m$={scope:"col"},f$=N("th",{scope:"col"},"Basket price",-1),k$=N("th",{scope:"col"},"Deliver price",-1),b$=N("th",{scope:"col"},"Basket",-1),_$={scope:"col"},w$=N("th",{scope:"col"},"Action",-1),A$={scope:"row"},C$=["onClick"],v$=["role"],y$=["onClick"],x$=["onClick"],E$=N("i",{class:"far fa-money-bill-alt cursor-pointer","aria-hidden":"true"},null,-1),D$=[E$],I$={key:1},S$={"aria-label":"Page navigation example"},T$={class:"pagination justify-content-end"},M$=["onClick","innerHTML"],B$={__name:"CheckoutsPage",setup(s){const{auth:l,config:u,setDefaultLang:g}=Zn(),m=$o(),{configDefaultLang:_}=It.retrieveParamsFromStorage(),b=me(_),C=me(""),f=me(""),y=me(!1),x=me([]),v=me(""),w=me(""),D=me(""),M=me(""),P=me(""),L=J=>{m.push({name:"user",params:{mode:"edit",id:J}})},F=J=>{m.push({name:"product",params:{mode:"edit",id:J}})},j=async J=>{if(!T())return!1;try{const ge=await D6({is_pay:1},J,l.token);if(ge.data.success){if(await de())return f.value=Vt.ttt("success_edit_checkout"),y.value=!1,!0}else C.value="Sth wrong with edit checkout",console.log("error putCheckout",ge.data)}catch(ge){tn(ge,u.demo_status,C,y)}return!1};async function R(J){y.value=!0,b.value=J,g(J),await de()&&(y.value=!1)}const V=async()=>{y.value=!0,D.value="1",M.value=P.value,await de()&&(y.value=!1)},$=async J=>{y.value=!0,D.value=It.retrieveParamsFromUrl(J,"page"),await de()&&(y.value=!1)},K=async J=>{H(J,"asc")},G=async J=>{H(J,"desc")},H=async(J,ge)=>{y.value=!0,v.value=J,w.value=ge,D.value="1",await de()&&(y.value=!1)},T=async()=>(W(),y.value?!1:(y.value=!0,!0)),W=()=>{C.value="",f.value=""},de=async()=>{W();try{const J=await E6(b.value,v.value,w.value,l.token,D.value,M.value);return x.value=J.data.data,!0}catch(J){console.log("error get checkouts=",J)}return!1};return yn(async()=>{if(!l.token||!u.is_shop)return m.push("/"),!1;y.value=!0,v.value="created_at",w.value="desc",D.value="1",M.value="",await de()&&(y.value=!1)}),Rt(P,()=>{W()}),(J,ge)=>(re(),le("div",JH,[N("div",XH,[N("div",e$,[t$,Pe(ed,{lang:b.value,onExecChangeLang:R},null,8,["lang"])])]),Pe(Wo,{msgGood:f.value,msgWrong:C.value},null,8,["msgGood","msgWrong"]),N("div",n$,[N("div",o$,[i$,N("div",r$,[at(N("input",{type:"input",placeholder:"search: email",class:"form-control col",name:"search","onUpdate:modelValue":ge[0]||(ge[0]=Te=>P.value=Te)},null,512),[[Dt,P.value]]),N("button",{role:"button_search_checkout",onClick:qt(V,["prevent"]),class:"add-page-btn btn btn-primary mt-2 mb-2 mr-2",disabled:y.value},[y.value?$e("",!0):(re(),le("i",a$)),y.value?(re(),le("span",c$)):$e("",!0),l$],8,s$)])]),N("table",d$,[N("thead",null,[N("tr",null,[u$,h$,g$,N("th",p$,[nt(" Id "),Pe(hn,{sortColumn:"id",onSortAsc:ge[1]||(ge[1]=Te=>K("id")),onSortDesc:ge[2]||(ge[2]=Te=>G("id")),pre_loader:y.value,column:v.value,direction:w.value},null,8,["pre_loader","column","direction"])]),N("th",m$,[nt(" Total price "),Pe(hn,{sortColumn:"price_total_add_deliver",onSortAsc:ge[3]||(ge[3]=Te=>K("price_total_add_deliver")),onSortDesc:ge[4]||(ge[4]=Te=>G("price_total_add_deliver")),pre_loader:y.value,column:v.value,direction:w.value},null,8,["pre_loader","column","direction"])]),f$,k$,b$,N("th",_$,[nt(" Created "),Pe(hn,{sortColumn:"created_at",onSortAsc:ge[5]||(ge[5]=Te=>K("created_at")),onSortDesc:ge[6]||(ge[6]=Te=>G("created_at")),pre_loader:y.value,column:v.value,direction:w.value},null,8,["pre_loader","column","direction"])]),w$])]),N("tbody",null,[(re(!0),le(Je,null,Lt(x.value.data,(Te,be)=>(re(),le("tr",{key:be},[N("th",A$,Ze(be+1),1),N("td",null,[N("a",{class:"cursor-pointer text-primary",onClick:Q=>L(Te.user_id)},Ze(Te.email),9,C$)]),N("td",null,Ze(Te.telephone),1),N("td",null,Ze(Te.id),1),N("td",{role:"price_total_add_deliver_"+b.value},[N("b",null,Ze(Te.price_total_add_deliver),1)],8,v$),N("td",null,Ze(Te.price_total),1),N("td",null,Ze(Te.price_deliver),1),N("td",null,[N("div",null,[(re(!0),le(Je,null,Lt(Te.baskets,Q=>(re(),le("div",{key:Q.product_id,class:"text-nowrap"},[N("a",{class:"cursor-pointer text-primary",onClick:te=>F(Q.product_id)},Ze(Q.product_name),9,y$),nt(" "+Ze(Q.qty)+" x "+Ze(Q.price),1)]))),128))])]),N("td",null,Ze(Te.created_at?Te.created_at.split("T")[0]:""),1),N("td",null,[Te.is_pay?(re(),le("span",I$," Paid ")):(re(),le("span",{key:0,role:"edit_checkout",class:Le(["me-1",{"disabled-if-loader":y.value}]),onClick:Q=>j(Te.id)},D$,10,x$))])]))),128))])]),N("nav",S$,[N("ul",T$,[(re(!0),le(Je,null,Lt(x.value.links,(Te,be)=>(re(),le("li",{key:be,class:Le(["page-item",{disabled:!Te.url||y.value,active:Te.active}])},[N("a",{role:"pagination_links",class:"page-link",onClick:Q=>Te.url&&$(Te.url),innerHTML:Te.label},null,8,M$)],2))),128))])])])]))}},P$=[{path:"/:demo?",component:K9,props:!0},{path:"/pages/:id?",component:P9},{path:"/users",name:"users",component:DV},{path:"/user/:mode/:id?",component:QV,name:"user",props:!0},{path:"/products",name:"products",component:FU},{path:"/product/:mode/:id?",component:ZH,name:"product",props:!0},{path:"/contacts",component:dH},{path:"/settings",component:CH},{path:"/checkouts",component:B$}],N$=Fj({history:mj("/admin"),routes:P$}),qg=Ky(Xj);qg.use(m7());qg.use(N$);qg.mount("#app");