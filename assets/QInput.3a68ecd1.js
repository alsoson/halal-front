import{w as I,g as ae,U as Me,j as H,aJ as Fe,aK as qe,a as ye,aL as Re,d as p,aM as _e,h as k,aN as Ve,r as P,aO as ne,M as se,aC as Ae,aP as Be,a5 as Ee,am as ke,n as K,a0 as $e,a1 as ze,o as xe,aQ as Oe,aR as W,u as Te,f as Pe,aS as Ie,y as ce,aT as Ne,e as J,P as je,Z as De,E as Ue,aU as Ze,aV as Le}from"./index.ebd2d62e.js";function Ke({validate:e,resetValidation:t,requiresQForm:u}){const i=Me(Fe,!1);if(i!==!1){const{props:c,proxy:g}=H();Object.assign(g,{validate:e,resetValidation:t}),I(()=>c.disable,m=>{m===!0?(typeof t=="function"&&t(),i.unbindComponent(g)):i.bindComponent(g)}),c.disable!==!0&&i.bindComponent(g),ae(()=>{c.disable!==!0&&i.unbindComponent(g)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const fe=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,de=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ve=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,X=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,Y=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,me={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>fe.test(e),hexaColor:e=>de.test(e),hexOrHexaColor:e=>ve.test(e),rgbColor:e=>X.test(e),rgbaColor:e=>Y.test(e),rgbOrRgbaColor:e=>X.test(e)||Y.test(e),hexOrRgbColor:e=>fe.test(e)||X.test(e),hexaOrRgbaColor:e=>de.test(e)||Y.test(e),anyColor:e=>ve.test(e)||X.test(e)||Y.test(e)};"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(e=>{e.toLowerCase()});const He={...qe,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},oe=50,Ce=2*oe,we=Ce*Math.PI,Qe=Math.round(we*1e3)/1e3;ye({name:"QCircularProgress",props:{...He,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:t}){const{proxy:{$q:u}}=H(),i=Re(e),c=p(()=>{const F=(u.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(u.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-F}deg)`:`rotate3d(0, 0, 1, ${F-90}deg)`}}),g=p(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),m=p(()=>Ce/(1-e.thickness/2)),w=p(()=>`${m.value/2} ${m.value/2} ${m.value} ${m.value}`),x=p(()=>_e(e.value,e.min,e.max)),y=p(()=>we*(1-(x.value-e.min)/(e.max-e.min))),A=p(()=>e.thickness/2*m.value);function _({thickness:F,offset:E,color:$,cls:D}){return k("circle",{class:"q-circular-progress__"+D+($!==void 0?` text-${$}`:""),style:g.value,fill:"transparent",stroke:"currentColor","stroke-width":F,"stroke-dasharray":Qe,"stroke-dashoffset":E,cx:m.value,cy:m.value,r:oe})}return()=>{const F=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&F.push(k("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:oe-A.value/2,cx:m.value,cy:m.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&F.push(_({cls:"track",thickness:A.value,offset:0,color:e.trackColor})),F.push(_({cls:"circle",thickness:A.value,offset:y.value,color:e.color}));const E=[k("svg",{class:"q-circular-progress__svg",style:c.value,viewBox:w.value,"aria-hidden":"true"},F)];return e.showValue===!0&&E.push(k("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},t.default!==void 0?t.default():[k("div",x.value)])),k("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:i.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:x.value},Ve(t.internal,E))}}});function Q(e,t,u,i){const c=[];return e.forEach(g=>{i(g)===!0?c.push(g):t.push({failedPropValidation:u,file:g})}),c}function G(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),se(e)}const yt={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},We=["rejected"];function kt({editable:e,dnd:t,getFileInput:u,addFilesToQueue:i}){const{props:c,emit:g,proxy:m}=H(),w=P(null),x=p(()=>c.accept!==void 0?c.accept.split(",").map(v=>(v=v.trim(),v==="*"?"*/":(v.endsWith("/*")&&(v=v.slice(0,v.length-1)),v.toUpperCase()))):null),y=p(()=>parseInt(c.maxFiles,10)),A=p(()=>parseInt(c.maxTotalSize,10));function _(v){if(e.value)if(v!==Object(v)&&(v={target:null}),v.target!==null&&v.target.matches('input[type="file"]')===!0)v.clientX===0&&v.clientY===0&&ne(v);else{const S=u();S&&S!==v.target&&S.click(v)}}function F(v){e.value&&v&&i(null,v)}function E(v,S,B,q){let a=Array.from(S||v.target.files);const l=[],f=()=>{l.length>0&&g("rejected",l)};if(c.accept!==void 0&&x.value.indexOf("*/")===-1&&(a=Q(a,l,"accept",n=>x.value.some(s=>n.type.toUpperCase().startsWith(s)||n.name.toUpperCase().endsWith(s))),a.length===0))return f();if(c.maxFileSize!==void 0){const n=parseInt(c.maxFileSize,10);if(a=Q(a,l,"max-file-size",s=>s.size<=n),a.length===0)return f()}c.multiple!==!0&&a.length>0&&(a=[a[0]]),a.forEach(n=>{n.__key=n.webkitRelativePath+n.lastModified+n.name+n.size});const d=B.map(n=>n.__key);if(a=Q(a,l,"duplicate",n=>d.includes(n.__key)===!1),a.length===0)return f();if(c.maxTotalSize!==void 0){let n=q===!0?B.reduce((s,C)=>s+C.size,0):0;if(a=Q(a,l,"max-total-size",s=>(n+=s.size,n<=A.value)),a.length===0)return f()}if(typeof c.filter=="function"){const n=c.filter(a);a=Q(a,l,"filter",s=>n.includes(s))}if(c.maxFiles!==void 0){let n=q===!0?B.length:0;if(a=Q(a,l,"max-files",()=>(n++,n<=y.value)),a.length===0)return f()}if(f(),a.length>0)return a}function $(v){G(v),t.value!==!0&&(t.value=!0)}function D(v){se(v),v.relatedTarget!==w.value&&(t.value=!1)}function V(v){G(v);const S=v.dataTransfer.files;S.length>0&&i(null,S),t.value=!1}function O(v){if(t.value===!0)return k("div",{ref:w,class:`q-${v}__dnd absolute-full`,onDragenter:G,onDragover:G,onDragleave:D,onDrop:V})}return Object.assign(m,{pickFiles:_,addFiles:F}),{pickFiles:_,addFiles:F,onDragover:$,processFiles:E,getDndNode:O,maxFilesNumber:y,maxTotalSizeNumber:A}}const Je=[...We,"start","finish","added","removed"],Xe=()=>!0;function Ye(e){const t={};return e.forEach(u=>{t[u]=Xe}),t}Ye(Je);let le,ee=0;const T=new Array(256);for(let e=0;e<256;e++)T[e]=(e+256).toString(16).substring(1);const Ge=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const u=new Uint8Array(t);return e.getRandomValues(u),u}}return t=>{const u=[];for(let i=t;i>0;i--)u.push(Math.floor(Math.random()*256));return u}})(),ge=4096;function et(){(le===void 0||ee+16>ge)&&(ee=0,le=Ge(ge));const e=Array.prototype.slice.call(le,ee,ee+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,T[e[0]]+T[e[1]]+T[e[2]]+T[e[3]]+"-"+T[e[4]]+T[e[5]]+"-"+T[e[6]]+T[e[7]]+"-"+T[e[8]]+T[e[9]]+"-"+T[e[10]]+T[e[11]]+T[e[12]]+T[e[13]]+T[e[14]]+T[e[15]]}const tt=[!0,!1,"ondemand"],at={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>tt.includes(e)}};function rt(e,t){const{props:u,proxy:i}=H(),c=P(!1),g=P(null),m=P(null);Ke({validate:$,resetValidation:E});let w=0,x;const y=p(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length>0),A=p(()=>u.disable!==!0&&y.value===!0),_=p(()=>u.error===!0||c.value===!0),F=p(()=>typeof u.errorMessage=="string"&&u.errorMessage.length>0?u.errorMessage:g.value);I(()=>u.modelValue,()=>{D()}),I(()=>u.reactiveRules,O=>{O===!0?x===void 0&&(x=I(()=>u.rules,()=>{D(!0)})):x!==void 0&&(x(),x=void 0)},{immediate:!0}),I(e,O=>{O===!0?m.value===null&&(m.value=!1):m.value===!1&&(m.value=!0,A.value===!0&&u.lazyRules!=="ondemand"&&t.value===!1&&V())});function E(){w++,t.value=!1,m.value=null,c.value=!1,g.value=null,V.cancel()}function $(O=u.modelValue){if(A.value!==!0)return!0;const v=++w;t.value!==!0&&u.lazyRules!==!0&&(m.value=!0);const S=(q,a)=>{c.value!==q&&(c.value=q);const l=a||void 0;g.value!==l&&(g.value=l),t.value=!1},B=[];for(let q=0;q<u.rules.length;q++){const a=u.rules[q];let l;if(typeof a=="function"?l=a(O):typeof a=="string"&&me[a]!==void 0&&(l=me[a](O)),l===!1||typeof l=="string")return S(!0,l),!1;l!==!0&&l!==void 0&&B.push(l)}return B.length===0?(S(!1),!0):(t.value=!0,Promise.all(B).then(q=>{if(q===void 0||Array.isArray(q)===!1||q.length===0)return v===w&&S(!1),!0;const a=q.find(l=>l===!1||typeof l=="string");return v===w&&S(a!==void 0,a),a===void 0},q=>(v===w&&(console.error(q),S(!0)),!1)))}function D(O){A.value===!0&&u.lazyRules!=="ondemand"&&(m.value===!0||u.lazyRules!==!0&&O!==!0)&&V()}const V=Ae($,0);return ae(()=>{x!==void 0&&x(),V.cancel()}),Object.assign(i,{resetValidation:E,validate:$}),Be(i,"hasError",()=>_.value),{isDirtyModel:m,hasRules:y,hasError:_,errorMessage:F,validate:$,resetValidation:E}}const he=/^on[A-Z]/;function lt(e,t){const u={listeners:P({}),attributes:P({})};function i(){const c={},g={};for(const m in e)m!=="class"&&m!=="style"&&he.test(m)===!1&&(c[m]=e[m]);for(const m in t.props)he.test(m)===!0&&(g[m]=t.props[m]);u.attributes.value=c,u.listeners.value=g}return Ee(i),i(),u}function ue(e){return e===void 0?`f_${et()}`:e}function ie(e){return e!=null&&(""+e).length>0}const nt={...Te,...at,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},ot=["update:modelValue","clear","focus","blur","popup-show","popup-hide"];function ut(){const{props:e,attrs:t,proxy:u,vnode:i}=H();return{isDark:Pe(e,u.$q),editable:p(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:P(!1),focused:P(!1),hasPopupOpen:!1,splitAttrs:lt(t,i),targetUid:P(ue(e.for)),rootRef:P(null),targetRef:P(null),controlRef:P(null)}}function it(e){const{props:t,emit:u,slots:i,attrs:c,proxy:g}=H(),{$q:m}=g;let w;e.hasValue===void 0&&(e.hasValue=p(()=>ie(t.modelValue))),e.emitValue===void 0&&(e.emitValue=r=>{u("update:modelValue",r)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:d,onFocusout:n}),Object.assign(e,{clearValue:s,onControlFocusin:d,onControlFocusout:n,focus:l}),e.computedCounter===void 0&&(e.computedCounter=p(()=>{if(t.counter!==!1){const r=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,h=t.maxlength!==void 0?t.maxlength:t.maxValues;return r+(h!==void 0?" / "+h:"")}}));const{isDirtyModel:x,hasRules:y,hasError:A,errorMessage:_,resetValidation:F}=rt(e.focused,e.innerLoading),E=e.floatingLabel!==void 0?p(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):p(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),$=p(()=>t.bottomSlots===!0||t.hint!==void 0||y.value===!0||t.counter===!0||t.error!==null),D=p(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),V=p(()=>`q-field row no-wrap items-start q-field--${D.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(E.value===!0?" q-field--float":"")+(v.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(A.value===!0?" q-field--error":"")+(A.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&$.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),O=p(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(A.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),v=p(()=>t.labelSlot===!0||t.label!==void 0),S=p(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&A.value!==!0?` text-${t.labelColor}`:"")),B=p(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:E.value,modelValue:t.modelValue,emitValue:e.emitValue})),q=p(()=>{const r={for:e.targetUid.value};return t.disable===!0?r["aria-disabled"]="true":t.readonly===!0&&(r["aria-readonly"]="true"),r});I(()=>t.for,r=>{e.targetUid.value=ue(r)});function a(){const r=document.activeElement;let h=e.targetRef!==void 0&&e.targetRef.value;h&&(r===null||r.id!==e.targetUid.value)&&(h.hasAttribute("tabindex")===!0||(h=h.querySelector("[tabindex]")),h&&h!==r&&h.focus({preventScroll:!0}))}function l(){ke(a)}function f(){Ie(a);const r=document.activeElement;r!==null&&e.rootRef.value.contains(r)&&r.blur()}function d(r){clearTimeout(w),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",r))}function n(r,h){clearTimeout(w),w=setTimeout(()=>{document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1)||(e.focused.value===!0&&(e.focused.value=!1,u("blur",r)),h!==void 0&&h())})}function s(r){se(r),m.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),K(()=>{F(),m.platform.is.mobile!==!0&&(x.value=!1)})}function C(){const r=[];return i.prepend!==void 0&&r.push(k("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:W},i.prepend())),r.push(k("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},b())),A.value===!0&&t.noErrorIcon===!1&&r.push(N("error",[k(ce,{name:m.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?r.push(N("inner-loading-append",i.loading!==void 0?i.loading():[k(Ne,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&r.push(N("inner-clearable-append",[k(ce,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||m.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),i.append!==void 0&&r.push(k("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:W},i.append())),e.getInnerAppend!==void 0&&r.push(N("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&r.push(e.getControlChild()),r}function b(){const r=[];return t.prefix!==void 0&&t.prefix!==null&&r.push(k("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&r.push(e.getShadowControl()),e.getControl!==void 0?r.push(e.getControl()):i.rawControl!==void 0?r.push(i.rawControl()):i.control!==void 0&&r.push(k("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(B.value))),v.value===!0&&r.push(k("div",{class:S.value},J(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&r.push(k("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),r.concat(J(i.default))}function R(){let r,h;A.value===!0?_.value!==null?(r=[k("div",{role:"alert"},_.value)],h=`q--slot-error-${_.value}`):(r=J(i.error),h="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(r=[k("div",t.hint)],h=`q--slot-hint-${t.hint}`):(r=J(i.hint),h="q--slot-hint"));const o=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&o===!1&&r===void 0)return;const M=k("div",{key:h,class:"q-field__messages col"},r);return k("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale")},[t.hideBottomSpace===!0?M:k(je,{name:"q-transition--field-message"},()=>M),o===!0?k("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function N(r,h){return h===null?null:k("div",{key:r,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},h)}Object.assign(g,{focus:l,blur:f});let U=!1;return $e(()=>{U=!0}),ze(()=>{U===!0&&t.autofocus===!0&&g.focus()}),xe(()=>{Oe.value===!0&&t.for===void 0&&(e.targetUid.value=ue()),t.autofocus===!0&&g.focus()}),ae(()=>{clearTimeout(w)}),function(){const h=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...q.value}:q.value;return k("label",{ref:e.rootRef,class:[V.value,c.class],style:c.style,...h},[i.before!==void 0?k("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:W},i.before()):null,k("div",{class:"q-field__inner relative-position col self-stretch"},[k("div",{ref:e.controlRef,class:O.value,tabindex:-1,...e.controlEvents},C()),$.value===!0?R():null]),i.after!==void 0?k("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:W},i.after()):null])}}const be={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},te={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Se=Object.keys(te);Se.forEach(e=>{te[e].regex=new RegExp(te[e].pattern)});const st=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Se.join("")+"])|(.)","g"),pe=/[.*+?^${}()|[\]\\]/g,z=String.fromCharCode(1),ct={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function ft(e,t,u,i){let c,g,m,w;const x=P(null),y=P(_());function A(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}I(()=>e.type+e.autogrow,E),I(()=>e.mask,a=>{if(a!==void 0)$(y.value,!0);else{const l=B(y.value);E(),e.modelValue!==l&&t("update:modelValue",l)}}),I(()=>e.fillMask+e.reverseFillMask,()=>{x.value===!0&&$(y.value,!0)}),I(()=>e.unmaskedValue,()=>{x.value===!0&&$(y.value)});function _(){if(E(),x.value===!0){const a=v(B(e.modelValue));return e.fillMask!==!1?q(a):a}return e.modelValue}function F(a){if(a<c.length)return c.slice(-a);let l="",f=c;const d=f.indexOf(z);if(d>-1){for(let n=a-f.length;n>0;n--)l+=z;f=f.slice(0,d)+l+f.slice(d)}return f}function E(){if(x.value=e.mask!==void 0&&e.mask.length>0&&A(),x.value===!1){w=void 0,c="",g="";return}const a=be[e.mask]===void 0?e.mask:be[e.mask],l=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",f=l.replace(pe,"\\$&"),d=[],n=[],s=[];let C=e.reverseFillMask===!0,b="",R="";a.replace(st,(h,o,M,Z,L)=>{if(Z!==void 0){const j=te[Z];s.push(j),R=j.negate,C===!0&&(n.push("(?:"+R+"+)?("+j.pattern+"+)?(?:"+R+"+)?("+j.pattern+"+)?"),C=!1),n.push("(?:"+R+"+)?("+j.pattern+")?")}else if(M!==void 0)b="\\"+(M==="\\"?"":M),s.push(M),d.push("([^"+b+"]+)?"+b+"?");else{const j=o!==void 0?o:L;b=j==="\\"?"\\\\\\\\":j.replace(pe,"\\\\$&"),s.push(j),d.push("([^"+b+"]+)?"+b+"?")}});const N=new RegExp("^"+d.join("")+"("+(b===""?".":"[^"+b+"]")+"+)?$"),U=n.length-1,r=n.map((h,o)=>o===0&&e.reverseFillMask===!0?new RegExp("^"+f+"*"+h):o===U?new RegExp("^"+h+"("+(R===""?".":R)+"+)?"+(e.reverseFillMask===!0?"$":f+"*")):new RegExp("^"+h));m=s,w=h=>{const o=N.exec(h);o!==null&&(h=o.slice(1).join(""));const M=[],Z=r.length;for(let L=0,j=h;L<Z;L++){const re=r[L].exec(j);if(re===null)break;j=j.slice(re.shift().length),M.push(...re)}return M.length>0?M.join(""):h},c=s.map(h=>typeof h=="string"?h:z).join(""),g=c.split(z).join(l)}function $(a,l,f){const d=i.value,n=d.selectionEnd,s=d.value.length-n,C=B(a);l===!0&&E();const b=v(C),R=e.fillMask!==!1?q(b):b,N=y.value!==R;d.value!==R&&(d.value=R),N===!0&&(y.value=R),document.activeElement===d&&K(()=>{if(R===g){const r=e.reverseFillMask===!0?g.length:0;d.setSelectionRange(r,r,"forward");return}if(f==="insertFromPaste"&&e.reverseFillMask!==!0){const r=n-1;V.right(d,r,r);return}if(["deleteContentBackward","deleteContentForward"].indexOf(f)>-1){const r=e.reverseFillMask===!0?n===0?R.length>b.length?1:0:Math.max(0,R.length-(R===g?0:Math.min(b.length,s)+1))+1:n;d.setSelectionRange(r,r,"forward");return}if(e.reverseFillMask===!0)if(N===!0){const r=Math.max(0,R.length-(R===g?0:Math.min(b.length,s+1)));r===1&&n===1?d.setSelectionRange(r,r,"forward"):V.rightReverse(d,r,r)}else{const r=R.length-s;d.setSelectionRange(r,r,"backward")}else if(N===!0){const r=Math.max(0,c.indexOf(z),Math.min(b.length,n)-1);V.right(d,r,r)}else{const r=n-1;V.right(d,r,r)}});const U=e.unmaskedValue===!0?B(R):R;String(e.modelValue)!==U&&u(U,!0)}function D(a,l,f){const d=v(B(a.value));l=Math.max(0,c.indexOf(z),Math.min(d.length,l)),a.setSelectionRange(l,f,"forward")}const V={left(a,l,f,d){const n=c.slice(l-1).indexOf(z)===-1;let s=Math.max(0,l-1);for(;s>=0;s--)if(c[s]===z){l=s,n===!0&&l++;break}if(s<0&&c[l]!==void 0&&c[l]!==z)return V.right(a,0,0);l>=0&&a.setSelectionRange(l,d===!0?f:l,"backward")},right(a,l,f,d){const n=a.value.length;let s=Math.min(n,f+1);for(;s<=n;s++)if(c[s]===z){f=s;break}else c[s-1]===z&&(f=s);if(s>n&&c[f-1]!==void 0&&c[f-1]!==z)return V.left(a,n,n);a.setSelectionRange(d?l:f,f,"forward")},leftReverse(a,l,f,d){const n=F(a.value.length);let s=Math.max(0,l-1);for(;s>=0;s--)if(n[s-1]===z){l=s;break}else if(n[s]===z&&(l=s,s===0))break;if(s<0&&n[l]!==void 0&&n[l]!==z)return V.rightReverse(a,0,0);l>=0&&a.setSelectionRange(l,d===!0?f:l,"backward")},rightReverse(a,l,f,d){const n=a.value.length,s=F(n),C=s.slice(0,f+1).indexOf(z)===-1;let b=Math.min(n,f+1);for(;b<=n;b++)if(s[b-1]===z){f=b,f>0&&C===!0&&f--;break}if(b>n&&s[f-1]!==void 0&&s[f-1]!==z)return V.leftReverse(a,n,n);a.setSelectionRange(d===!0?l:f,f,"forward")}};function O(a){if(De(a)===!0)return;const l=i.value,f=l.selectionStart,d=l.selectionEnd;if(a.keyCode===37||a.keyCode===39){const n=V[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];a.preventDefault(),n(l,f,d,a.shiftKey)}else a.keyCode===8&&e.reverseFillMask!==!0&&f===d?V.left(l,f,d,!0):a.keyCode===46&&e.reverseFillMask===!0&&f===d&&V.rightReverse(l,f,d,!0)}function v(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return S(a);const l=m;let f=0,d="";for(let n=0;n<l.length;n++){const s=a[f],C=l[n];if(typeof C=="string")d+=C,s===C&&f++;else if(s!==void 0&&C.regex.test(s))d+=C.transform!==void 0?C.transform(s):s,f++;else return d}return d}function S(a){const l=m,f=c.indexOf(z);let d=a.length-1,n="";for(let s=l.length-1;s>=0&&d>-1;s--){const C=l[s];let b=a[d];if(typeof C=="string")n=C+n,b===C&&d--;else if(b!==void 0&&C.regex.test(b))do n=(C.transform!==void 0?C.transform(b):b)+n,d--,b=a[d];while(f===s&&b!==void 0&&C.regex.test(b));else return n}return n}function B(a){return typeof a!="string"||w===void 0?typeof a=="number"?w(""+a):a:w(a)}function q(a){return g.length-a.length<=0?a:e.reverseFillMask===!0&&a.length>0?g.slice(0,-a.length)+a:a+g.slice(a.length)}return{innerValue:y,hasMask:x,moveCursorForPaste:D,updateMaskValue:$,onMaskedKeydown:O}}function dt(e,t){function u(){const i=e.modelValue;try{const c="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(g=>{c.items.add(g)}),{files:c.files}}catch{return{files:void 0}}}return t===!0?p(()=>{if(e.type==="file")return u()}):p(u)}const vt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,mt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,gt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,ht=/[a-z0-9_ -]$/i;function bt(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(Ue.is.firefox===!0?ht.test(u.data)===!1:vt.test(u.data)===!0||mt.test(u.data)===!0||gt.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}var xt=ye({name:"QInput",inheritAttrs:!1,props:{...nt,...ct,...Ze,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ot,"paste","change"],setup(e,{emit:t,attrs:u}){const i={};let c=NaN,g,m,w,x;const y=P(null),A=Le(e),{innerValue:_,hasMask:F,moveCursorForPaste:E,updateMaskValue:$,onMaskedKeydown:D}=ft(e,t,C,y),V=dt(e,!0),O=p(()=>ie(_.value)),v=bt(s),S=ut(),B=p(()=>e.type==="textarea"||e.autogrow===!0),q=p(()=>B.value===!0||["text","search","url","tel","password"].includes(e.type)),a=p(()=>{const o={...S.splitAttrs.listeners.value,onInput:s,onPaste:n,onChange:R,onBlur:N,onFocus:ne};return o.onCompositionstart=o.onCompositionupdate=o.onCompositionend=v,F.value===!0&&(o.onKeydown=D),e.autogrow===!0&&(o.onAnimationend=b),o}),l=p(()=>{const o={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:A.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return B.value===!1&&(o.type=e.type),e.autogrow===!0&&(o.rows=1),o});I(()=>e.type,()=>{y.value&&(y.value.value=e.modelValue)}),I(()=>e.modelValue,o=>{if(F.value===!0){if(m===!0&&(m=!1,String(o)===c))return;$(o)}else _.value!==o&&(_.value=o,e.type==="number"&&i.hasOwnProperty("value")===!0&&(g===!0?g=!1:delete i.value));e.autogrow===!0&&K(b)}),I(()=>e.autogrow,o=>{o===!0?K(b):y.value!==null&&u.rows>0&&(y.value.style.height="auto")}),I(()=>e.dense,()=>{e.autogrow===!0&&K(b)});function f(){ke(()=>{const o=document.activeElement;y.value!==null&&y.value!==o&&(o===null||o.id!==S.targetUid.value)&&y.value.focus({preventScroll:!0})})}function d(){y.value!==null&&y.value.select()}function n(o){if(F.value===!0&&e.reverseFillMask!==!0){const M=o.target;E(M,M.selectionStart,M.selectionEnd)}t("paste",o)}function s(o){if(!o||!o.target)return;if(e.type==="file"){t("update:modelValue",o.target.files);return}const M=o.target.value;if(o.target.qComposing===!0){i.value=M;return}if(F.value===!0)$(M,!1,o.inputType);else if(C(M),q.value===!0&&o.target===document.activeElement){const{selectionStart:Z,selectionEnd:L}=o.target;Z!==void 0&&L!==void 0&&K(()=>{o.target===document.activeElement&&M.indexOf(o.target.value)===0&&o.target.setSelectionRange(Z,L)})}e.autogrow===!0&&b()}function C(o,M){x=()=>{e.type!=="number"&&i.hasOwnProperty("value")===!0&&delete i.value,e.modelValue!==o&&c!==o&&(c=o,M===!0&&(m=!0),t("update:modelValue",o),K(()=>{c===o&&(c=NaN)})),x=void 0},e.type==="number"&&(g=!0,i.value=o),e.debounce!==void 0?(clearTimeout(w),i.value=o,w=setTimeout(x,e.debounce)):x()}function b(){const o=y.value;if(o!==null){const M=o.parentNode.style,{overflow:Z}=o.style;M.marginBottom=o.scrollHeight-1+"px",o.style.height="1px",o.style.overflow="hidden",o.style.height=o.scrollHeight+"px",o.style.overflow=Z,M.marginBottom=""}}function R(o){v(o),clearTimeout(w),x!==void 0&&x(),t("change",o.target.value)}function N(o){o!==void 0&&ne(o),clearTimeout(w),x!==void 0&&x(),g=!1,m=!1,delete i.value,e.type!=="file"&&setTimeout(()=>{y.value!==null&&(y.value.value=_.value!==void 0?_.value:"")})}function U(){return i.hasOwnProperty("value")===!0?i.value:_.value!==void 0?_.value:""}ae(()=>{N()}),xe(()=>{e.autogrow===!0&&b()}),Object.assign(S,{innerValue:_,fieldClass:p(()=>`q-${B.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:p(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:y,emitValue:C,hasValue:O,floatingLabel:p(()=>O.value===!0||ie(e.displayValue)),getControl:()=>k(B.value===!0?"textarea":"input",{ref:y,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...l.value,...a.value,...e.type!=="file"?{value:U()}:V.value}),getShadowControl:()=>k("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(B.value===!0?"":" text-no-wrap")},[k("span",{class:"invisible"},U()),k("span",e.shadowText)])});const r=it(S),h=H();return Object.assign(h.proxy,{focus:f,select:d,getNativeElement:()=>y.value}),r}});export{xt as Q,yt as a,ot as b,We as c,ut as d,kt as e,dt as f,ie as g,it as h,bt as i,nt as u};