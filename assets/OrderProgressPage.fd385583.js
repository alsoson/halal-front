import{r as f,d as h,aa as v,aW as g,m as i,ae as c,ag as x,af as w,v as e,q as r,ab as y,ac as Q,t as o,x as d,C as b,Q as S,y as n,bn as k,A as B,W as q,aV as C,aB as P}from"./index.6a66a36b.js";import{Q as D}from"./QLinearProgress.a938e5da.js";import{Q as p}from"./QCardSection.89ca47a4.js";import{Q as L}from"./QSlideTransition.1ae4960e.js";const V={class:"q-pa-md"},N={class:"flex"},A={class:"absolute-full flex flex-center"},O={__name:"OrderProgressPage",setup(F){const u=f(.9),_=h(()=>(u.value*100).toFixed(2)+"%"),m=v([]);return(async()=>{try{const{data:a}=await y.get("/orders");m.push(...a.result.map(s=>(s.totalPrice=s.products.reduce((l,t)=>l+t.product.price*t.quantity,0),s)))}catch(a){console.log(a),Q.fire({icon:"error",title:"\u5931\u6557",text:"\u7121\u6CD5\u53D6\u5F97\u8A02\u55AE"})}})(),(a,s)=>{const l=g("h7");return i(),c("div",V,[(i(!0),c(x,null,w(m,t=>(i(),c("div",{key:t._id,class:"card bg-accent q-mx-auto",style:{width:"90%"}},[e(p,null,{default:r(()=>[o("h5",null,d(t._id),1),o("h6",null,d(new Date(t.date).toLocaleDateString()),1),e(l,null,{default:r(()=>[b("$"+d(t.totalPrice),1)]),_:2},1024),e(S,{color:"grey",round:"",flat:"",dense:"",icon:a.expanded?"keyboard_arrow_up":"keyboard_arrow_down",onClick:s[0]||(s[0]=W=>a.expanded=!a.expanded)},null,8,["icon"]),o("div",N,[e(n,{name:"mdi-home"}),e(n,{name:"mdi-home"}),e(n,{name:"mdi-home"}),e(n,{name:"mdi-home"})]),e(D,{size:"50px",value:u.value,color:"primary",class:"q-mt-sm"},{default:r(()=>[o("div",A,[e(k,{color:"white","text-color":"white",label:B(_)},null,8,["label"])])]),_:1},8,["value"])]),_:2},1024)]))),128)),e(L,null,{default:r(()=>[q(o("div",null,[e(P),e(p,{class:"text-subitle2"})],512),[[C,a.expanded]])]),_:1})])}}};export{O as default};
