import{ba as v,az as f,ay as g,r as n,ab as d,m as x,af as V,s,v as a,t as r,Q as b,q as u,y as w,B as Q,aB as q,aD as B,ad as S}from"./index.59b4aced.js";import{Q as D}from"./QInput.0bec3f65.js";import{Q as C}from"./QForm.69148534.js";const N={id:"Product"},P={class:"flex flex-center column"},R={class:"text-primary q-my-sm",style:{"font-family":"ChenYuluoyan-Thin, sans-serif"}},U={class:"row"},k=s("div",{class:"col"},null,-1),z={class:"col"},T={class:"col col-12 text-center"},A=["src"],E={class:"col col-12"},F={style:{"white-space":"pre"}},I={class:"col col-12"},H={__name:"ProductPage",setup(M){const m=v(),p=f(),_=g(),i=n(0),y=d([t=>t>=1||"\u6578\u91CF\u932F\u8AA4"]),c=n(!1),e=d({_id:"",name:"",price:0,category:"",sell:!1,image:"",description:""}),h=()=>{_.addCart({product:e._id,quantity:i.value})};return(async()=>{try{const{data:t}=await B.get("/products/"+m.params.id);e._id=t.result._id,e.name=t.result.name,e.price=t.result.price,e.category=t.result.category,e.sell=t.result.sell,e.image=t.result.image,e.description=t.result.description}catch{S.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u5546\u54C1\u8CC7\u6599\u5931\u6557"}),p.go(-1)}})(),(t,o)=>(x(),V("div",N,[s("div",P,[s("h1",R,a(e.name),1),r(b,{rounded:"",style:{width:"55px",height:"55px"},color:"primary",class:"q-pa-none",icon:"mdi-cart-variant",type:"submit"})]),s("div",U,[k,s("div",z,[s("div",T,[r(w,{size:"300px",class:""},{default:u(()=>[s("img",{src:e.image},null,8,A)]),_:1})]),s("h3",null," $"+a(e.price),1),s("div",E,[s("p",F,a(e.description),1),Q(" "+a(e.startDay)+" "+a(e.endDay),1)]),s("div",I,[r(C,{modelValue:c.value,"onUpdate:modelValue":o[1]||(o[1]=l=>c.value=l),onSubmit:q(h,["prevent"])},{default:u(()=>[r(D,{type:"number",label:"\u6578\u91CF",modelValue:i.value,"onUpdate:modelValue":o[0]||(o[0]=l=>i.value=l),rules:y},null,8,["modelValue","rules"])]),_:1},8,["modelValue","onSubmit"])])])])]))}};export{H as default};
