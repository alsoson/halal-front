import{r as x,a9 as y,m as c,p as g,q as i,s as w,aa as b,ab as k,t,v as s,y as D,x as a,ac as n,ad as u,aH as p,ae as m,Q as v,V as Q,af as q}from"./index.a1db0f0f.js";import{Q as r}from"./QCardSection.96c3a010.js";import{Q as f}from"./QCard.8469dab0.js";import{Q as P}from"./QDialog.a6a751c8.js";import{_ as S}from"./101.1780e70b.js";const V={class:"text-center"},B={class:"q-my-md text-secondary"},C={class:"q-pa-md"},$={class:"card q-mx-auto box"},L={class:"row"},N={class:"flex justify-between"},j={class:"confirm-id text-dark",style:{overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},z={class:"text-h6 text-dark"},H={class:"text-subtitle2 text-dark"},I={class:"flex justify-between"},A={class:"text-subtitle2 text-secondary",style:{}},E={class:"text-subtitle2 text-secondary"},F={class:"text-subtitle2 text-secondary"},O={class:"flex column flex-center text-dark q-py-md"},U={class:"text-subtitle1"},G={class:"text-center"},J={class:"text-subtitle2"},K={class:"text-subtitle2"},M={class:"box q-pb-xl"},R={class:"row"},T={class:"col col-12 col-sm-6 col-lg-8",style:{height:"calc(50vh - 60px)"}},W=t("div",{class:"taiwan q-pr-sm",style:{width:"100%",height:"100%",padding:"0"}},null,-1),X={class:"div"},Y=t("div",null,[t("iframe",{src:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28921.25444131725!2d121.5548065072683!3d25.028752110073523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1staipei%20101!5e0!3m2!1sen!2stw!4v1661482695124!5m2!1sen!2stw",width:"500",height:"350",style:{border:"0"},loading:"lazy"})],-1),Z=t("div",{class:"col col-0 col-sm-6 col-lg-4"},[t("div",{class:"div q-pl-sm",style:{width:"100%",height:"calc(50vh - 60px)"}},[t("video",{autoplay:"",loop:"",src:S,style:{width:"100%",height:"calc(50vh - 60px)","object-fit":"cover"}})])],-1),ct={__name:"OrderProgressPage",setup(tt){const _=x(!1),h=y([]);return(async()=>{try{const{data:d}=await b.get("/orders");h.push(...d.result.map(l=>(l.totalPrice=l.products.reduce((o,e)=>o+e.product.price*e.quantity,0),l)))}catch(d){console.log(d),k.fire({icon:"error",title:"\u5931\u6557",text:"\u7121\u6CD5\u53D6\u5F97\u8A02\u55AE"})}})(),(d,l)=>(c(),g(w,{id:"orderPage"},{default:i(()=>[t("h5",V,[s(D,{name:"fa-solid fa-clock-rotate-left",size:"md",color:"secondary"}),t("h5",B,a(d.$t("orderHistory")),1)]),t("div",C,[t("div",$,[t("div",L,[(c(!0),n(m,null,u(h,o=>(c(),n("div",{class:"col col-12 col-sm-6 col-md-4 col-lg-3",key:o._id},[s(f,{class:"my-card text-white q-ma-md"},{default:i(()=>[s(r,null,{default:i(()=>[t("div",N,[t("div",j,[t("strong",null,a(o._id),1)]),t("div",z,"$"+a(o.totalPrice),1)]),t("div",H,a(new Date(o.date).toLocaleDateString()),1)]),_:2},1024),s(p,{inset:""}),s(r,null,{default:i(()=>[(c(!0),n(m,null,u(o.products,e=>(c(),n("div",{key:e},[t("div",I,[t("div",A,a(e.product.name),1),t("div",E," $"+a(e.product.price),1)]),t("div",F,a(new Date(e.product.startDay).toLocaleDateString())+" ~ "+a(new Date(e.product.endDay).toLocaleDateString()),1)]))),128))]),_:2},1024),s(r),s(p,{inset:""}),(c(!0),n(m,null,u(o.orderInfo,e=>(c(),n("div",{key:e},[t("div",O,[t("div",U,a(d.$t("contactPeople")),1),t("div",G,[t("div",J,a(e.lastName)+a(e.firstName),1),t("div",K,"0"+a(e.phone),1)])])]))),128))]),_:2},1024)]))),128))])])]),t("div",M,[t("div",R,[t("div",T,[s(v,{flat:"",style:{width:"100%",height:"100%",padding:"0"},onClick:l[0]||(l[0]=o=>_.value=!0)},{default:i(()=>[W]),_:1}),s(P,{modelValue:_.value,"onUpdate:modelValue":l[1]||(l[1]=o=>_.value=o),seamless:"",position:"bottom"},{default:i(()=>[s(f,{class:"dialog-map bg-accent",flat:""},{default:i(()=>[t("div",X,[Q(s(v,{flat:"",round:"",icon:"fa-solid fa-close"},null,512),[[q]])]),s(r,null,{default:i(()=>[Y]),_:1})]),_:1})]),_:1},8,["modelValue"])]),Z])])]),_:1}))}};export{ct as default};
