import{a as O,U as D,bm as N,r as S,aw as P,d as g,w as Q,g as W,l as j,h as z,a4 as E,k as K,ax as X,bn as Y,bo as G,aW as J,m as h,p as b,q as a,bp as Z,v as e,bq as ee,aY as ae,W as p,as as y,at as r,y as w,C as k,x as V,b8 as te,A as L,br as le,aB as oe,bs as ne,bc as ue,Q as q,B as re,bd as se,be as ie,bt as de,ad as fe,z as ce,t as me,bu as ve,X as C,ah as ge}from"./index.93ce210a.js";import{Q as he}from"./QCardSection.5f4ca36c.js";import{Q as be}from"./QCardActions.4fb028ee.js";import{Q as pe}from"./QCard.10d6c296.js";var _e=O({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(n,{slots:B,emit:$}){const{proxy:{$q:f}}=K(),l=D(N,()=>{console.error("QFooter needs to be child of QLayout")}),d=S(parseInt(n.heightHint,10)),c=S(!0),v=S(P.value===!0||l.isContainer.value===!0?0:window.innerHeight),s=g(()=>n.reveal===!0||l.view.value.indexOf("F")>-1||f.platform.is.ios&&l.isContainer.value===!0),o=g(()=>l.isContainer.value===!0?l.containerHeight.value:v.value),x=g(()=>{if(n.modelValue!==!0)return 0;if(s.value===!0)return c.value===!0?d.value:0;const t=l.scroll.value.position+o.value+d.value-l.height.value;return t>0?t:0}),u=g(()=>n.modelValue!==!0||s.value===!0&&c.value!==!0),A=g(()=>n.modelValue===!0&&u.value===!0&&n.reveal===!0),F=g(()=>"q-footer q-layout__section--marginal "+(s.value===!0?"fixed":"absolute")+"-bottom"+(n.bordered===!0?" q-footer--bordered":"")+(u.value===!0?" q-footer--hidden":"")+(n.modelValue!==!0?" q-layout--prevent-focus"+(s.value!==!0?" hidden":""):"")),I=g(()=>{const t=l.rows.value.bottom,i={};return t[0]==="l"&&l.left.space===!0&&(i[f.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),t[2]==="r"&&l.right.space===!0&&(i[f.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),i});function m(t,i){l.update("footer",t,i)}function _(t,i){t.value!==i&&(t.value=i)}function M({height:t}){_(d,t),m("size",t)}function R(){if(n.reveal!==!0)return;const{direction:t,position:i,inflectionPoint:T}=l.scroll.value;_(c,t==="up"||i-T<100||l.height.value-o.value-i-d.value<300)}function U(t){A.value===!0&&_(c,!0),$("focusin",t)}Q(()=>n.modelValue,t=>{m("space",t),_(c,!0),l.animate()}),Q(x,t=>{m("offset",t)}),Q(()=>n.reveal,t=>{t===!1&&_(c,n.modelValue)}),Q(c,t=>{l.animate(),$("reveal",t)}),Q([d,l.scroll,l.height],R),Q(()=>f.screen.height,t=>{l.isContainer.value!==!0&&_(v,t)});const H={};return l.instances.footer=H,n.modelValue===!0&&m("size",d.value),m("space",n.modelValue),m("offset",x.value),W(()=>{l.instances.footer===H&&(l.instances.footer=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const t=j(B.default,[z(E,{debounce:0,onResize:M})]);return n.elevated===!0&&t.push(z("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),z("footer",{class:F.value,style:I.value,onFocusin:U},t)}}});const Qe=k("Hello ! Hallo"),ye={class:"q-ml-sm text-center q-ml-md"},Se={__name:"AdminLayout",setup(n){const B=X(),{logout:$}=B,f=S(!1),l=S(!0),d=S(!1),c=[{value:"en-US",label:"English"},{value:"zh-TW",label:"\u7E41\u9AD4\u4E2D\u6587"}],{locale:v}=Y({useScope:"global"});return v.value=G().lang.getLocale(),(s,o)=>{const x=J("router-view");return h(),b(Z,{view:"hhh lpR fFf",container:"",style:{height:"100vh"},class:"rounded-borders"},{default:a(()=>[e(ne,{modelValue:f.value,"onUpdate:modelValue":o[1]||(o[1]=u=>f.value=u),"show-if-above":"",mini:l.value,onMouseover:o[2]||(o[2]=u=>l.value=!1),onMouseout:o[3]||(o[3]=u=>l.value=!0),"mini-to-overlay":"",width:250,breakpoint:568,side:"left",id:"AdminLayout"},{default:a(()=>[e(ee,{class:"fit"},{default:a(()=>[e(ae,{padding:""},{default:a(()=>[p((h(),b(y,{to:"/admin/member",clickable:""},{default:a(()=>[e(r,{avatar:""},{default:a(()=>[e(w,{name:"mdi-account-supervisor-circle"})]),_:1}),e(r,null,{default:a(()=>[k(V(s.$t("memberManagement")),1)]),_:1})]),_:1})),[[C]]),p((h(),b(y,{to:"/admin/itinerary",clickable:""},{default:a(()=>[e(r,{avatar:""},{default:a(()=>[e(w,{name:"fa-solid fa-book-atlas"})]),_:1}),e(r,null,{default:a(()=>[k(V(s.$t("itineraryManagement")),1)]),_:1})]),_:1})),[[C]]),p((h(),b(y,{to:"/admin/order",clickable:""},{default:a(()=>[e(r,{avatar:""},{default:a(()=>[e(w,{name:"mdi-clipboard-file"})]),_:1}),e(r,null,{default:a(()=>[k(V(s.$t("orderManagement")),1)]),_:1})]),_:1})),[[C]]),p((h(),b(y,{to:"/admin/message",clickable:""},{default:a(()=>[e(r,{avatar:""},{default:a(()=>[e(w,{name:"mdi-forum"})]),_:1}),e(r,null,{default:a(()=>[k(V(s.$t("messageManagement")),1)]),_:1})]),_:1})),[[C]]),p((h(),b(y,{clickable:""},{default:a(()=>[e(r,{avatar:""},{default:a(()=>[e(w,{name:"fa-solid fa-language "})]),_:1}),e(r,null,{default:a(()=>[e(te,{modelValue:L(v),"onUpdate:modelValue":o[0]||(o[0]=u=>le(v)?v.value=u:null),options:c,label:"Change Language","emit-value":"","map-options":"",style:{"min-width":"150px"}},null,8,["modelValue"])]),_:1})]),_:1})),[[C]]),e(oe),p((h(),b(y,{clickable:"",to:"/"},{default:a(()=>[e(r,{avatar:""},{default:a(()=>[e(w,{name:"fa-solid fa-house-chimney"})]),_:1}),e(r,null,{default:a(()=>[k(V(s.$t("home")),1)]),_:1})]),_:1})),[[C]])]),_:1})]),_:1})]),_:1},8,["modelValue","mini"]),e(_e,null,{default:a(()=>[e(ue,{id:"AdminToolbar",class:"bg-third text-white",style:{height:"60px"}},{default:a(()=>[e(q,{flat:"",onClick:o[4]||(o[4]=u=>f.value=!f.value),dense:""},{default:a(()=>[e(re,{src:se,width:"50px"}),e(ie,null,{default:a(()=>[Qe]),_:1})]),_:1}),e(de),e(q,{flat:"",stretch:"",icon:"mdi-account-arrow-right",onClick:o[5]||(o[5]=u=>d.value=!0)}),e(fe,{modelValue:d.value,"onUpdate:modelValue":o[6]||(o[6]=u=>d.value=u),persistent:""},{default:a(()=>[e(pe,null,{default:a(()=>[e(he,{class:"row items-center"},{default:a(()=>[e(ce,{icon:"mdi-account-arrow-right",color:"primary","text-color":"white"}),me("span",ye,V(s.$t("logOut"))+" ?",1)]),_:1}),e(be,{align:"right"},{default:a(()=>[e(q,{flat:"",color:"primary",icon:"mdi-check-circle",onClick:L($)},null,8,["onClick"]),p(e(q,{flat:"",color:"primary",icon:"mdi-close-circle"},null,512),[[ge]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(ve,null,{default:a(()=>[e(x)]),_:1})]),_:1})}}};export{Se as default};
