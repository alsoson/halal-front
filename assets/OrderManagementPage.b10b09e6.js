import{r as b,a9 as q,m as n,p as Q,q as s,s as S,aa as T,ab as N,b1 as L,t,v as a,y as D,A as m,x as o,Q as f,aY as B,aH as g,ac as c,ad as v,ae as h,V as I,af as j}from"./index.666c0e82.js";import{Q as O}from"./QInput.16cac50a.js";import{Q as V}from"./QTd.6f82b61c.js";import{Q as k}from"./QCard.e99b36e6.js";import{Q as U}from"./QTable.f1ef5419.js";import{Q as z}from"./QCardSection.7f004652.js";import{Q as A,d as P,e as H,f as $}from"./QTabPanels.c5fd9d7a.js";import{Q as M}from"./QCardActions.88151ac8.js";import{Q as E}from"./QDialog.bcff6732.js";import"./rtl.4b414a6d.js";import"./QChip.c43db65c.js";import"./use-fullscreen.51146727.js";import"./use-cache.b0833c75.js";const F={class:"q-pa-md"},K={class:"box"},Y={class:"row text-center"},G={class:"text-center q-mx-auto q-my-md q-mt-lg text-secondary",style:{padding:"0"}},J={class:"box"},R={class:"full-width row flex-center text-secondary q-gutter-sm"},W={class:"text-center q-my-md"},X={class:"flex row justify-between q-mx-md"},Z={class:"text-subtitle2"},ee={class:"text-subtitle2"},te={class:"q-my-sm text-center"},ae={class:"q-my-sm text-center"},se={class:"text-center"},le={class:"flex row justify-between"},oe={class:"text-h6"},re={class:"flex row justify-between"},ne={class:"text-subtitle2"},de={class:"text-subtitle2"},ie={class:"flex row justify-between"},ce={class:"q-my-sm"},me={class:"q-my-sm"},ue={class:"q-my-sm text-center"},fe={class:"q-my-sm text-center"},$e={__name:"OrderManagementPage",setup(_e){const _=b(""),w=q([]),u=b("one"),d=b(""),p=q({dialog:!1}),x=l=>{d.value=l,p.dialog=!0},C=[{name:"name",required:!0,label:"ID",align:"left",field:l=>l._id,format:l=>`${l}`,sortable:!0},{name:"orderDay",align:"left",label:"Order Day",field:l=>new Date(l.date).toLocaleString(),sortable:!0},{name:"totalPrice",align:"left",label:"Total Price",field:l=>l.totalPrice,sortable:!0},{name:"btn"}];return(async()=>{try{const{data:l}=await T.get("/orders/all");w.push(...l.result.map(r=>(r.totalPrice=r.products.reduce((y,e)=>y+e.product.price*e.quantity,0),r)))}catch(l){console.log(l),N.fire({icon:"question",title:"Please try it again"})}})(),(l,r)=>{const y=L("q-card-action");return n(),Q(S,{id:"orderManagement"},{default:s(()=>[t("div",F,[t("div",K,[t("div",Y,[t("h5",G,[a(D,{name:"mdi-clipboard-file",size:"100px",color:"secondary",class:"q-mx-auto"}),m(" "+o(l.$t("orderHistory")),1)])])]),t("div",J,[a(U,{grid:l.$q.screen.lt.md,rows:w,columns:C,"row-key":"name",filter:_.value,flat:""},{"no-data":s(({})=>[t("div",R,[a(f,{color:"primary",class:"q-my-md",style:{"font-size":"30px"},to:"/cart"},{default:s(()=>[m(o(l.$t("noOrder")),1)]),_:1})])]),"top-right":s(()=>[a(O,{borderless:"",dense:"",debounce:"300",modelValue:_.value,"onUpdate:modelValue":r[0]||(r[0]=e=>_.value=e),placeholder:"Search"},{append:s(()=>[a(D,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-totalPrice":s(e=>[a(V,null,{default:s(()=>[m(" $"+o(e.row.totalPrice),1)]),_:2},1024)]),"body-cell-btn":s(e=>[(n(),Q(V,{style:{"text-align":"right"},key:e},{default:s(()=>[a(f,{class:"bg-accent",onClick:i=>x(e)},{default:s(()=>[m(o(l.$t("detail")),1)]),_:2},1032,["onClick"])]),_:2},1024))]),item:s(e=>[t("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:B(e.selected?"transform: scale(0.95);":"")},[a(k,{class:"text-dark q-ma-sm"},{default:s(()=>[a(g),t("div",null,[t("h6",W,o(e.row._id),1)]),t("div",X,[t("div",Z,o(new Date(e.row.date).toLocaleString()),1),t("div",ee,"$"+o(e.row.totalPrice),1)]),a(g,{class:"q-my-md"}),(n(!0),c(h,null,v(e.row.orderInfo,i=>(n(),c("div",{key:i,class:"q-my-md"},[t("h6",te,o(i.lastName)+o(i.firstName),1),t("h6",ae,o(i.email),1)]))),128)),a(y,{class:"q-mx-auto text-center"},{default:s(()=>[t("div",se,[a(f,{class:"bg-accent q-mb-md",style:{},onClick:i=>x(e)},{default:s(()=>[m(o(l.$t("detail")),1)]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024)],4)]),_:1},8,["grid","rows","filter"]),a(E,{persistent:"",modelValue:p.dialog,"onUpdate:modelValue":r[3]||(r[3]=e=>p.dialog=e)},{default:s(()=>[a(k,{class:"my-card bg-accent"},{default:s(()=>[a(z,{class:"text-dark"},{default:s(()=>[t("div",le,[t("div",oe,o(d.value.row._id),1)]),t("div",re,[t("div",ne,o(new Date(d.value.row.date).toLocaleString()),1),t("div",de,"$"+o(d.value.row.totalPrice),1)])]),_:1}),a(A,{modelValue:u.value,"onUpdate:modelValue":r[1]||(r[1]=e=>u.value=e),class:"text-teal"},{default:s(()=>[a(P,{label:l.$t("intineraryDetail"),name:"one",class:"text-secondary"},null,8,["label"]),a(P,{label:l.$t("orderDetail"),name:"two"},null,8,["label"])]),_:1},8,["modelValue"]),a(g),a(H,{modelValue:u.value,"onUpdate:modelValue":r[2]||(r[2]=e=>u.value=e),animated:"",class:"bg-accent"},{default:s(()=>[a($,{name:"one"},{default:s(()=>[(n(!0),c(h,null,v(d.value.row.products,e=>(n(),c("div",{key:e,class:"q-my-md"},[t("div",ie,[t("h6",ce,o(e.product.name),1),t("h6",me,"$"+o(e.product.price),1)]),t("div",null,o(new Date(e.product.startDay).toLocaleDateString())+" ~ "+o(new Date(e.product.endDay).toLocaleDateString()),1)]))),128))]),_:1}),a($,{name:"two",class:"bg-accent"},{default:s(()=>[(n(!0),c(h,null,v(d.value.row.orderInfo,e=>(n(),c("div",{key:e,class:"q-my-md"},[t("h6",ue,o(e.lastName)+o(e.firstName),1),t("h6",fe,o(e.email),1)]))),128))]),_:1})]),_:1},8,["modelValue"]),a(M,{align:"right",class:"text-teal bg-accent"},{default:s(()=>[I(a(f,{flat:"",label:"OK"},null,512),[[j]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])])]),_:1})}}};export{$e as default};
