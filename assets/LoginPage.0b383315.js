import{aD as C,r as g,a9 as y,aE as P,m as U,p as S,q as o,s as R,aF as A,v as l,t as c,x as b,aG as v,y as t,Q as f,aH as T,A as W,aI as Z,ab as V}from"./index.a1356615.js";import{Q as d}from"./QInput.25897666.js";import{Q as w}from"./QForm.66df6ef4.js";import{e as B,f as x,Q as N,d as $}from"./QTabPanels.13b8c485.js";import{Q as I}from"./QCard.7a4cbe67.js";import"./rtl.4b414a6d.js";import"./use-cache.b0833c75.js";const D={class:"text-h4 text-center q-py-lg"},E={class:"text-h4 text-center q-py-lg"},F=W("Please use maximum 55555characters."),X={__name:"LoginPage",setup(L){const Q=C(),q=A(),p=g("login"),u=g(!1),r=g(!0),i=y({account:"",password:""}),n=y({account:"",password:"",name:"",email:""}),m=y({account:[a=>!!a||"Required",a=>a.length>=4&&a.length<=20||"Wrong",a=>/^[a-zA-Z0-9]+$/.test(a)||"Wrong"],password:[a=>!!a||"Required",a=>a.length>=4&&a.length<=20||"Wrong",a=>/^[a-zA-Z0-9]+$/.test(a)||"Wrong"],email:[a=>!!a||"Required",a=>/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(a)||"Wrong"]}),k=()=>{Q.login(i)},z=async()=>{try{await Z.post("/users",n),await V.fire({icon:"success",title:"Register success"}),q.push("/")}catch(a){V.fire({icon:"question",title:"Please try it again"}),console.log(a)}};return P({name:"LoginPage"}),(a,e)=>(U(),S(R,{id:"loginPage",class:"text-center flex-center flex",style:{"min-height":"0px",height:"calc( 100vh - 60px )"}},{default:o(()=>[l(I,{class:"q-ma-auto login"},{default:o(()=>[l(B,{modelValue:p.value,"onUpdate:modelValue":e[14]||(e[14]=s=>p.value=s),animated:""},{default:o(()=>[l(x,{name:"login"},{default:o(()=>[c("div",D,b(a.$t("loginV")),1),l(w,{onSubmit:v(k,["prevent"]),class:"q-gutter-md q-px-lg q-px-sm-none"},{default:o(()=>[l(d,{rounded:"",outlined:"",modelValue:i.account,"onUpdate:modelValue":e[1]||(e[1]=s=>i.account=s),label:a.$t("account"),"lazy-rules":"",rules:m.account,dense:u.value,"bottom-slots":"",class:"text-secondary"},{prepend:o(()=>[l(t,{name:"mdi-account",class:"text-secondary"})]),append:o(()=>[l(t,{name:"mdi-close-circle-outline",onClick:e[0]||(e[0]=s=>i.account=""),class:"cursor-pointer text-secondary"})]),_:1},8,["modelValue","label","rules","dense"]),l(d,{rounded:"",outlined:"",modelValue:i.password,"onUpdate:modelValue":e[4]||(e[4]=s=>i.password=s),type:r.value?"password":"text",label:a.$t("password"),"lazy-rules":"",rules:m.password,dense:u.value,"bottom-slots":""},{prepend:o(()=>[l(t,{name:"mdi-lock",class:"text-secondary"})]),append:o(()=>[l(t,{name:r.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:e[2]||(e[2]=s=>r.value=!r.value)},null,8,["name"]),l(t,{name:"mdi-close-circle-outline",onClick:e[3]||(e[3]=s=>i.password=""),class:"cursor-pointer text-secondary"})]),_:1},8,["modelValue","type","label","rules","dense"]),c("div",null,[l(f,{label:a.$t("login"),type:"submit",color:"primary"},null,8,["label"])])]),_:1},8,["onSubmit"])]),_:1}),l(x,{name:"register"},{default:o(()=>[c("div",E,b(a.$t("register")),1),l(w,{onSubmit:v(z,["prevent"]),class:"q-gutter-md q-px-lg q-px-sm-none"},{default:o(()=>[l(d,{rounded:"",outlined:"",modelValue:n.account,"onUpdate:modelValue":e[6]||(e[6]=s=>n.account=s),label:a.$t("account"),"lazy-rules":"",rules:m.account,dense:u.value,"bottom-slots":"",class:"text-secondary"},{prepend:o(()=>[l(t,{name:"mdi-account",class:"text-secondary"})]),append:o(()=>[l(t,{name:"mdi-close-circle-outline",onClick:e[5]||(e[5]=s=>n.account=""),class:"cursor-pointer text-secondary"})]),_:1},8,["modelValue","label","rules","dense"]),l(d,{rounded:"",outlined:"",modelValue:n.password,"onUpdate:modelValue":e[9]||(e[9]=s=>n.password=s),type:r.value?"password":"text",label:a.$t("password"),"lazy-rules":"",rules:m.password,dense:u.value,"bottom-slots":""},{prepend:o(()=>[l(t,{name:"mdi-lock",class:"text-secondary"})]),append:o(()=>[l(t,{name:r.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:e[7]||(e[7]=s=>r.value=!r.value)},null,8,["name"]),l(t,{name:"mdi-close-circle-outline",onClick:e[8]||(e[8]=s=>n.password=""),class:"cursor-pointer text-secondary"})]),_:1},8,["modelValue","type","label","rules","dense"]),l(d,{rounded:"",outlined:"",modelValue:n.name,"onUpdate:modelValue":e[11]||(e[11]=s=>n.name=s),label:a.$t("yourName"),"lazy-rules":"",rules:[s=>s&&s.length>0||"Required"],dense:u.value,"bottom-slots":""},{prepend:o(()=>[l(t,{name:"fa-solid fa-signature",class:"text-secondary"})]),append:o(()=>[l(t,{name:"mdi-close-circle-outline",onClick:e[10]||(e[10]=s=>n.name=""),class:"cursor-pointer text-secondary"})]),_:1},8,["modelValue","label","rules","dense"]),l(d,{rounded:"",outlined:"",modelValue:n.email,"onUpdate:modelValue":e[13]||(e[13]=s=>n.email=s),label:"Email","lazy-rules":"",rules:m.email,dense:u.value,"bottom-slots":"",type:"email"},{error:o(()=>[F]),prepend:o(()=>[l(t,{name:"mdi-email",class:"text-secondary"})]),append:o(()=>[l(t,{name:"mdi-close-circle-outline",onClick:e[12]||(e[12]=s=>n.email=""),class:"cursor-pointer text-secondary"})]),_:1},8,["modelValue","rules","dense"]),c("div",null,[l(f,{label:a.$t("register"),type:"submit",color:"primary"},null,8,["label"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"]),l(T),l(N,{modelValue:p.value,"onUpdate:modelValue":e[15]||(e[15]=s=>p.value=s),dense:"",class:"bg-secondary",align:"justify","narrow-indicator":""},{default:o(()=>[l($,{name:"login",style:{color:"white"},label:a.$t("login")},null,8,["label"]),l($,{name:"register",style:{color:"white"},label:a.$t("register")},null,8,["label"])]),_:1},8,["modelValue"])]),_:1})]),_:1}))}};export{X as default};
