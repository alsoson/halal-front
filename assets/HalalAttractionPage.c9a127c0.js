import{a9 as n,m as e,p as _,q as l,s as m,aa as h,ab as u,t,v as c,y,A as r,x as a,ac as d,ad as v,z as p,ae as q}from"./index.46507802.js";import{Q as f,a as w}from"./QInfiniteScroll.6c4329db.js";const g={class:"text-center q-mx-auto q-my-md q-mt-lg text-secondary",style:{padding:"0"}},x={class:"box halalData"},Q={class:"row q-my-md hover"},A={class:"col col-1 q-my-auto text-center"},k={class:"col col-11"},z={class:"row"},B={class:"col col-9 col-sm-6 q-my-auto"},L={class:"title-wrap"},S={class:"q-ma-none"},D={class:"col col-3 col-sm-6"},N={class:"row"},V={class:"col col-12 col-sm-4 q-my-auto"},b={class:"word-small q-my-auto",style:{"text-align":"right"}},I={class:"col col-12 col-sm-3 q-my-auto"},P={class:"word-small q-my-auto"},j={class:"col col-12 col-sm-4 text-right q-my-auto"},C={class:"word-small q-my-auto"},E=t("div",{class:"col col-0 col-sm-1 text-right q-my-auto"},null,-1),F={class:"row justify-center q-my-md"},K={__name:"HalalAttractionPage",setup(H){const i=n([]);return(async()=>{try{const{data:s}=await h.get("/data/attraction");i.push(...s.result)}catch(s){u.fire({icon:"error",title:"\u5931\u6557",text:s})}})(),(s,$)=>(e(),_(m,null,{default:l(()=>[t("h5",g,[c(y,{name:"fa-solid fa-street-view",color:"secondary",size:"lg",class:"q-mx-auto"}),r(" "+a(s.$t("halalAttraction")),1)]),t("div",x,[c(w,{onLoad:s.onLoad,offset:250},{loading:l(()=>[t("div",F,[c(f,{color:"primary",size:"40px"})])]),default:l(()=>[(e(!0),d(q,null,v(i,o=>(e(),d("div",{key:o.name,class:"caption"},[t("div",Q,[t("div",A,[c(p,{icon:"fa-solid fa-street-view",size:"md",color:"primary","text-color":"white"})]),t("div",k,[t("div",z,[t("div",B,[t("div",L,[r(a(o.name)+" ",1),t("p",S,a(o.address),1)])]),t("div",D,[t("div",N,[t("div",V,[t("div",b,a(o.type),1)]),t("div",I,[t("div",P,a(o.district),1)]),t("div",j,[t("div",C,a(o.phone),1)]),E])])])])])]))),128))]),_:1},8,["onLoad"])])]),_:1}))}};export{K as default};
