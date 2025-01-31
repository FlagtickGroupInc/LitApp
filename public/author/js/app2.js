var mt=Object.defineProperty;var $t=(n,t,e)=>t in n?mt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var b=(n,t,e)=>($t(n,typeof t!="symbol"?t+"":t,e),e);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=globalThis,q=O.ShadowRoot&&(O.ShadyCSS===void 0||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),K=new WeakMap;let rt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(q&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=K.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&K.set(e,t))}return t}toString(){return this.cssText}};const ot=n=>new rt(typeof n=="string"?n:n+"",void 0,Z),M=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new rt(e,n,Z)},ft=(n,t)=>{if(q)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=O.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)}},J=q?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ot(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:bt,defineProperty:yt,getOwnPropertyDescriptor:_t,getOwnPropertyNames:vt,getOwnPropertySymbols:xt,getPrototypeOf:At}=Object,$=globalThis,Q=$.trustedTypes,wt=Q?Q.emptyScript:"",j=$.reactiveElementPolyfillSupport,E=(n,t)=>n,D={toAttribute(n,t){switch(t){case Boolean:n=n?wt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},at=(n,t)=>!bt(n,t),G={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:at};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=G){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&yt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=_t(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const h=s==null?void 0:s.call(this);r.call(this,o),this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??G}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const t=At(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const e=this.properties,i=[...vt(e),...xt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(J(s))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ft(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var r;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const o=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:D).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){var r;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),h=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:D;this._$Em=s,this[s]=h.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??at)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,o]of s)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[E("elementProperties")]=new Map,A[E("finalized")]=new Map,j==null||j({ReactiveElement:A}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=globalThis,R=S.trustedTypes,Y=R?R.createPolicy("lit-html",{createHTML:n=>n}):void 0,lt="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,ht="?"+m,kt=`<${ht}>`,v=document,C=()=>v.createComment(""),P=n=>n===null||typeof n!="object"&&typeof n!="function",F=Array.isArray,Et=n=>F(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",z=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,tt=/>/g,y=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),et=/'/g,it=/"/g,dt=/^(?:script|style|textarea|title)$/i,St=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),N=St(1),x=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),st=new WeakMap,_=v.createTreeWalker(v,129);function ct(n,t){if(!F(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Y!==void 0?Y.createHTML(t):t}const Ct=(n,t)=>{const e=n.length-1,i=[];let s,r=t===2?"<svg>":t===3?"<math>":"",o=k;for(let h=0;h<e;h++){const a=n[h];let d,p,l=-1,u=0;for(;u<a.length&&(o.lastIndex=u,p=o.exec(a),p!==null);)u=o.lastIndex,o===k?p[1]==="!--"?o=X:p[1]!==void 0?o=tt:p[2]!==void 0?(dt.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=y):p[3]!==void 0&&(o=y):o===y?p[0]===">"?(o=s??k,l=-1):p[1]===void 0?l=-2:(l=o.lastIndex-p[2].length,d=p[1],o=p[3]===void 0?y:p[3]==='"'?it:et):o===it||o===et?o=y:o===X||o===tt?o=k:(o=y,s=void 0);const g=o===y&&n[h+1].startsWith("/>")?" ":"";r+=o===k?a+kt:l>=0?(i.push(d),a.slice(0,l)+lt+a.slice(l)+m+g):a+m+(l===-2?h:g)}return[ct(n,r+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class T{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const h=t.length-1,a=this.parts,[d,p]=Ct(t,e);if(this.el=T.createElement(d,i),_.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=_.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(lt)){const u=p[o++],g=s.getAttribute(l).split(m),H=/([.?@])?(.*)/.exec(u);a.push({type:1,index:r,name:H[2],strings:g,ctor:H[1]==="."?Tt:H[1]==="?"?Ut:H[1]==="@"?Ht:B}),s.removeAttribute(l)}else l.startsWith(m)&&(a.push({type:6,index:r}),s.removeAttribute(l));if(dt.test(s.tagName)){const l=s.textContent.split(m),u=l.length-1;if(u>0){s.textContent=R?R.emptyScript:"";for(let g=0;g<u;g++)s.append(l[g],C()),_.nextNode(),a.push({type:2,index:++r});s.append(l[u],C())}}}else if(s.nodeType===8)if(s.data===ht)a.push({type:2,index:r});else{let l=-1;for(;(l=s.data.indexOf(m,l+1))!==-1;)a.push({type:7,index:r}),l+=m.length-1}r++}}static createElement(t,e){const i=v.createElement("template");return i.innerHTML=t,i}}function w(n,t,e=n,i){var o,h;if(t===x)return t;let s=i!==void 0?(o=e._$Co)==null?void 0:o[i]:e._$Cl;const r=P(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((h=s==null?void 0:s._$AO)==null||h.call(s,!1),r===void 0?s=void 0:(s=new r(n),s._$AT(n,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=w(n,s._$AS(n,t.values),s,i)),t}class Pt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??v).importNode(e,!0);_.currentNode=s;let r=_.nextNode(),o=0,h=0,a=i[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new U(r,r.nextSibling,this,t):a.type===1?d=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(d=new Ot(r,this,t)),this._$AV.push(d),a=i[++h]}o!==(a==null?void 0:a.index)&&(r=_.nextNode(),o++)}return _.currentNode=v,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class U{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),P(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Et(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==c&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(v.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=T.createElement(ct(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(e);else{const o=new Pt(s,this),h=o.u(this.options);o.p(e),this.T(h),this._$AH=o}}_$AC(t){let e=st.get(t.strings);return e===void 0&&st.set(t.strings,e=new T(t)),e}k(t){F(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new U(this.O(C()),this.O(C()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class B{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=c}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(r===void 0)t=w(this,t,e,0),o=!P(t)||t!==this._$AH&&t!==x,o&&(this._$AH=t);else{const h=t;let a,d;for(t=r[0],a=0;a<r.length-1;a++)d=w(this,h[i+a],e,a),d===x&&(d=this._$AH[a]),o||(o=!P(d)||d!==this._$AH[a]),d===c?t=c:t!==c&&(t+=(d??"")+r[a+1]),this._$AH[a]=d}o&&!s&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Tt extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}}class Ut extends B{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}}class Ht extends B{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=w(this,t,e,0)??c)===x)return;const i=this._$AH,s=t===c&&i!==c||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==c&&(i===c||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const L=S.litHtmlPolyfillSupport;L==null||L(T,U),(S.litHtmlVersions??(S.litHtmlVersions=[])).push("3.2.1");const Rt=(n,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const r=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new U(t.insertBefore(C(),r),r,void 0,e??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class f extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Rt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return x}}var nt;f._$litElement$=!0,f.finalized=!0,(nt=globalThis.litElementHydrateSupport)==null||nt.call(globalThis,{LitElement:f});const I=globalThis.litElementPolyfillSupport;I==null||I({LitElement:f});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");class V extends f{constructor(){super(),this.title="",this.description=""}createRenderRoot(){return this}render(){return N`
            <h1>${this.title}</h1>
            <p>${this.description}</p>
            <container-component>
              <content-component></content-component>
            </container-component>
        `}}b(V,"styles",M`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }
  `),b(V,"properties",{title:{type:String},description:{type:String}});customElements.define("page-component",V);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Nt=n=>(...t)=>({_$litDirective$:n,values:t});let Bt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt="important",jt=" !"+pt,zt=Nt(class extends Bt{constructor(n){var t;if(super(n),n.type!==Mt.ATTRIBUTE||n.name!=="style"||((t=n.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(n){return Object.keys(n).reduce((t,e)=>{const i=n[e];return i==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(n,[t]){const{style:e}=n.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?e.removeProperty(i):e[i]=null);for(const i in t){const s=t[i];if(s!=null){this.ft.add(i);const r=typeof s=="string"&&s.endsWith(jt);i.includes("-")||r?e.setProperty(i,r?s.slice(0,-11):s,r?pt:""):e[i]=s}}return x}}),Lt={padding:"30px",margin:"10px auto",maxWidth:"800px",backgroundColor:"#e0e0e0",borderRadius:"15px",border:"1px solid #ccc",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.2)"},It={container:Lt};class ut extends f{constructor(){super(),this.containerStyle=this.transformStyles(It.container)}transformStyles(t){const e={};for(const[i,s]of Object.entries(t)){const r=i.replace(/([A-Z])/g,"-$1").toLowerCase();e[r]=s}return e}render(){return N`
            <div class="container" style="${zt(this.containerStyle)}">
                <slot></slot>
            </div>
        `}}b(ut,"styles",M`
        :host {
            display: block;
        }
    `);customElements.define("container-component",ut);class gt extends f{render(){return N`
      <div class="content">
        <p>This is the content area inside the container.</p>
      </div>
    `}}b(gt,"styles",M`
    :host {
      display: block;
      background-color: #f4f4f4;
      padding: 20px;
      border-radius: 8px;
    }
  `);customElements.define("content-component",gt);const Dt=`.sidebar{width:260px;background-color:#222e3c;color:#fff;display:flex;height:100%;flex-direction:column;transition:width .3s ease;position:relative}.sidebar.collapsed{width:80px}.sidebar.collapsed .sidebar-brand span,.sidebar.collapsed h2{display:none;opacity:0}.sidebar.collapsed .sidebar-brand img{display:block;width:80px;height:auto}.sidebar.collapsed .menu-item span{opacity:0}.sidebar.collapsed .sidebar-brand{padding:.15rem}.sidebar.collapsed+.content .toggle-btn,.sidebar.collapsed .toggle-btn{left:-15px}.sidebar.collapsed .sidebar-header{padding:0;margin:0 auto 16px;text-align:center}.sidebar.collapsed .sidebar-header:not(:first-of-type){padding:0;margin:8px auto;text-align:center}.sidebar.collapsed .sidebar-link span{display:none}.sidebar.collapsed .icon{stroke-width:2;height:24px;width:24px}.sidebar.collapsed .sidebar-link{padding:.625rem;text-align:center}.sidebar.collapsed a.sidebar-link svg{margin-right:5px}.sidebar h2{text-align:center;margin-bottom:30px;transition:opacity .3s ease}.sidebar-nav{flex-grow:1;list-style:none;margin-bottom:0;padding-left:0}.sidebar-header{background:transparent;color:#ced4da;font-size:.75rem;padding:1.5rem 1.5rem .375rem}.sidebar-brand{color:#f8f9fa;display:block;font-size:1.15rem;font-weight:600;padding:1.15rem 1.5rem}.sidebar-brand img{display:none}.sidebar-brand:hover{color:#f8f9fa;text-decoration:none}.sidebar-item.active .sidebar-link:hover,.sidebar-item.active>.sidebar-link{background:linear-gradient(90deg,rgba(59,125,221,.1),rgba(59,125,221,.088) 50%,transparent);border-left-color:#3b7ddd;color:#e9ecef}.sidebar-link,a.sidebar-link{background:#222e3c;border-left:3px solid transparent;color:#e9ecef80;cursor:pointer;display:block;font-weight:400;padding:.625rem 1.625rem;position:relative;text-decoration:none;transition:background .1s ease-in-out}.sidebar-link i,.sidebar-link svg,a.sidebar-link i,a.sidebar-link svg{color:#e9ecef80;margin-right:.75rem}.sidebar-wrapper{height:inherit;max-height:inherit;max-width:inherit;overflow:hidden;width:inherit}.sidebar-content-wrapper{-ms-overflow-style:none;box-sizing:border-box!important;direction:inherit;display:block;height:100%;max-height:100%;max-width:100%;position:relative;scrollbar-width:none;width:auto}.sidebar-mask,.sidebar-offset{bottom:0;left:0;margin:0;padding:0;position:absolute;right:0;top:0}.sidebar-mask{direction:inherit;height:auto!important;overflow:hidden;width:auto!important;z-index:0}.sidebar-content{display:flex;flex-direction:column;height:100vh;padding-bottom:0!important}.text-middle{vertical-align:middle!important}.icon{stroke-width:2;height:18px;width:18px}
`;class W extends f{constructor(){super(),this.page="",this.content="",this.components={},this.searchQuery=""}createRenderRoot(){return this}render(){return N`
            <div class="sidebar">
                <div class="sidebar-wrapper" style="margin: 0;">
                    <div class="sidebar-mask">
                        <div class="sidebar-offset" style="right: 0; bottom: 0;">
                            <div class="sidebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content"
                                 style="height: 100%; overflow: hidden scroll;">
                                <div class="sidebar-content" style="padding: 0;">
                                    <a class="sidebar-brand" href="javascript:void(0);">
                                        <span class="text-middle">Flagtick Group</span>
                                        <img src="/logo/logo-short.png" alt="logo-short" />
                                    </a>

                                    <ul class="sidebar-nav">
                                        <li class="sidebar-header">
                                            Pages
                                        </li>

                                        <li class="sidebar-item active">
                                            <a class="sidebar-link" href="index.html">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                     stroke-linejoin="round" class="icon icon-sliders text-middle">
                                                    <line x1="4" y1="21" x2="4" y2="14"></line>
                                                    <line x1="4" y1="10" x2="4" y2="3"></line>
                                                    <line x1="12" y1="21" x2="12" y2="12"></line>
                                                    <line x1="12" y1="8" x2="12" y2="3"></line>
                                                    <line x1="20" y1="21" x2="20" y2="16"></line>
                                                    <line x1="20" y1="12" x2="20" y2="3"></line>
                                                    <line x1="1" y1="14" x2="7" y2="14"></line>
                                                    <line x1="9" y1="8" x2="15" y2="8"></line>
                                                    <line x1="17" y1="16" x2="23" y2="16"></line>
                                                </svg>
                                                <span class="text-middle">Dashboard</span>
                                            </a>
                                        </li>

                                        <li class="sidebar-item">
                                            <a class="sidebar-link" href="pages-profile.html">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                     stroke-linejoin="round" class="icon icon-user text-middle">
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                                <span class="text-middle">Profile</span>
                                            </a>
                                        </li>

                                        <li class="sidebar-item">
                                            <a class="sidebar-link" href="pages-sign-in.html">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                     stroke-linejoin="round" class="icon icon-log-in text-middle">
                                                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                                                    <polyline points="10 17 15 12 10 7"></polyline>
                                                    <line x1="15" y1="12" x2="3" y2="12"></line>
                                                </svg>
                                                <span class="text-middle">Sign In</span>
                                            </a>
                                        </li>

                                        <li class="sidebar-item">
                                            <a class="sidebar-link" href="pages-sign-up.html">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                     stroke-linejoin="round" class="icon icon-user-plus text-middle">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="8.5" cy="7" r="4"></circle>
                                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                                </svg>
                                                <span class="text-middle">Sign Up</span>
                                            </a>
                                        </li>

                                        <li class="sidebar-item">
                                            <a class="sidebar-link" href="pages-blank.html">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                     stroke-linejoin="round" class="icon icon-book text-middle">
                                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                                </svg>
                                                <span class="text-middle">Blank</span>
                                            </a>
                                        </li>

                                        <li class="sidebar-header">
                                            Tools &amp; Components
                                        </li>

                                        <li class="sidebar-item">
                                            <a class="sidebar-link" href="ui-buttons.html">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                     stroke-linejoin="round" class="icon icon-square text-middle">
                                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                                </svg>
                                                <span class="text-middle">Buttons</span>
                                            </a>
                                        </li>

                                        <li class="sidebar-item">
                                            <a class="sidebar-link" href="ui-forms.html">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                     stroke-linejoin="round" class="icon icon-check-square text-middle">
                                                    <polyline points="9 11 12 14 22 4"></polyline>
                                                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                                                </svg>
                                                <span class="text-middle">Forms</span>
                                            </a>
                                        </li>

                                        <li class="sidebar-item">
                                            <a class="sidebar-link" href="ui-cards.html">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                     stroke-linejoin="round" class="icon icon-grid text-middle">
                                                    <rect x="3" y="3" width="7" height="7"></rect>
                                                    <rect x="14" y="3" width="7" height="7"></rect>
                                                    <rect x="14" y="14" width="7" height="7"></rect>
                                                    <rect x="3" y="14" width="7" height="7"></rect>
                                                </svg>
                                                <span class="text-middle">Cards</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `}}b(W,"properties",{page:{type:String},content:{type:String},components:{type:Object},searchQuery:{type:String}}),b(W,"styles",M`
        ${ot(Dt)}
    `);customElements.define("flagtickgroup-core-admin-sidebar",W);
