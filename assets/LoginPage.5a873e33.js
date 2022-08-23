import{ay as C,az as U,r as g,ab as y,aA as P,m as S,p as A,q as o,t as a,s as c,v as b,aB as v,x as t,Q as f,aC as B,B as R,aD as T,ad as w}from"./index.872c6a74.js";import{Q as i}from"./QInput.5bf61c9d.js";import{Q as x}from"./QForm.eb82bef6.js";import{e as W,f as V,Q as Z,d as $}from"./QTabPanels.eb7fa7c2.js";import{Q as N}from"./QCard.a12eaa3b.js";import{Q as D}from"./QPage.835cef60.js";const E={class:"text-h4 text-center q-py-lg"},I={class:"text-h4 text-center q-py-lg"},L=R("Please use maximum 55555characters."),O={__name:"LoginPage",setup(j){const Q=C(),q=U(),p=g("login"),u=g(!1),r=g(!0),d=y({account:"",password:""}),n=y({account:"",password:"",name:"",email:""}),m=y({account:[e=>!!e||"Required",e=>e.length>=4&&e.length<=20||"Wrong",e=>/^[a-zA-Z0-9]+$/.test(e)||"Wrong"],password:[e=>!!e||"Required",e=>e.length>=4&&e.length<=20||"Wrong",e=>/^[a-zA-Z0-9]+$/.test(e)||"Wrong"],email:[e=>!!e||"Required",e=>/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(e)||"Wrong"]}),k=()=>{Q.login(d)},z=async()=>{try{await T.post("/users",n),await w.fire({icon:"success",title:"\u6210\u529F",text:"\u8A3B\u518A\u6210\u529F"}),q.push("/")}catch(e){w.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError&&e.response.data?e.response.data.message:"\u767C\u751F\u932F\u8AA4"}),console.log(e)}};return P({name:"LoginPage"}),(e,l)=>(S(),A(D,{id:"loginPage",class:"text-center flex-center flex",style:{"min-height":"0px",height:"calc( 100vh - 60px )"}},{default:o(()=>[a(N,{style:{width:"50%"},class:"q-ma-auto border-radius-50px"},{default:o(()=>[a(W,{modelValue:p.value,"onUpdate:modelValue":l[14]||(l[14]=s=>p.value=s),animated:""},{default:o(()=>[a(V,{name:"login"},{default:o(()=>[c("div",E,b(e.$t("loginV")),1),a(x,{onSubmit:v(k,["prevent"]),class:"q-gutter-md q-px-lg q-px-sm-none"},{default:o(()=>[a(i,{rounded:"",outlined:"",modelValue:d.account,"onUpdate:modelValue":l[1]||(l[1]=s=>d.account=s),label:e.$t("account"),"lazy-rules":"",rules:m.account,dense:u.value,"bottom-slots":"",class:"text-secondary"},{prepend:o(()=>[a(t,{name:"mdi-account",class:"text-secondary"})]),append:o(()=>[a(t,{name:"mdi-close-circle-outline",onClick:l[0]||(l[0]=s=>d.account=""),class:"cursor-pointer text-secondary"})]),_:1},8,["modelValue","label","rules","dense"]),a(i,{rounded:"",outlined:"",modelValue:d.password,"onUpdate:modelValue":l[4]||(l[4]=s=>d.password=s),type:r.value?"password":"text",label:e.$t("password"),"lazy-rules":"",rules:m.password,dense:u.value,"bottom-slots":""},{prepend:o(()=>[a(t,{name:"mdi-lock",class:"text-secondary"})]),append:o(()=>[a(t,{name:r.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:l[2]||(l[2]=s=>r.value=!r.value)},null,8,["name"]),a(t,{name:"mdi-close-circle-outline",onClick:l[3]||(l[3]=s=>d.password=""),class:"cursor-pointer text-secondary"})]),_:1},8,["modelValue","type","label","rules","dense"]),c("div",null,[a(f,{label:e.$t("login"),type:"submit",color:"primary"},null,8,["label"])])]),_:1},8,["onSubmit"])]),_:1}),a(V,{name:"register"},{default:o(()=>[c("div",I,b(e.$t("register")),1),a(x,{onSubmit:v(z,["prevent"]),class:"q-gutter-md q-px-lg q-px-sm-none"},{default:o(()=>[a(i,{rounded:"",outlined:"",modelValue:n.account,"onUpdate:modelValue":l[6]||(l[6]=s=>n.account=s),label:e.$t("account"),"lazy-rules":"",rules:m.account,dense:u.value,"bottom-slots":"",class:"text-secondary"},{prepend:o(()=>[a(t,{name:"mdi-account",class:"text-secondary"})]),append:o(()=>[a(t,{name:"mdi-close-circle-outline",onClick:l[5]||(l[5]=s=>n.account=""),class:"cursor-pointer text-secondary"})]),_:1},8,["modelValue","label","rules","dense"]),a(i,{rounded:"",outlined:"",modelValue:n.password,"onUpdate:modelValue":l[9]||(l[9]=s=>n.password=s),type:r.value?"password":"text",label:e.$t("password"),"lazy-rules":"",rules:m.password,dense:u.value,"bottom-slots":""},{prepend:o(()=>[a(t,{name:"mdi-lock",class:"text-secondary"})]),append:o(()=>[a(t,{name:r.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:l[7]||(l[7]=s=>r.value=!r.value)},null,8,["name"]),a(t,{name:"mdi-close-circle-outline",onClick:l[8]||(l[8]=s=>n.password=""),class:"cursor-pointer text-secondary"})]),_:1},8,["modelValue","type","label","rules","dense"]),a(i,{rounded:"",outlined:"",modelValue:n.name,"onUpdate:modelValue":l[11]||(l[11]=s=>n.name=s),label:e.$t("yourName"),"lazy-rules":"",rules:[s=>s&&s.length>0||"Required"],dense:u.value,"bottom-slots":""},{prepend:o(()=>[a(t,{name:"fa-solid fa-signature",class:"text-secondary"})]),append:o(()=>[a(t,{name:"mdi-close-circle-outline",onClick:l[10]||(l[10]=s=>n.name=""),class:"cursor-pointer text-secondary"})]),_:1},8,["modelValue","label","rules","dense"]),a(i,{rounded:"",outlined:"",modelValue:n.email,"onUpdate:modelValue":l[13]||(l[13]=s=>n.email=s),label:"Email","lazy-rules":"",rules:m.email,dense:u.value,"bottom-slots":"",type:"email"},{error:o(()=>[L]),prepend:o(()=>[a(t,{name:"mdi-email",class:"text-secondary"})]),append:o(()=>[a(t,{name:"mdi-close-circle-outline",onClick:l[12]||(l[12]=s=>n.email=""),class:"cursor-pointer text-secondary"})]),_:1},8,["modelValue","rules","dense"]),c("div",null,[a(f,{label:e.$t("register"),type:"submit",color:"primary"},null,8,["label"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"]),a(B),a(Z,{modelValue:p.value,"onUpdate:modelValue":l[15]||(l[15]=s=>p.value=s),dense:"",class:"bg-secondary",align:"justify","narrow-indicator":""},{default:o(()=>[a($,{name:"login",style:{color:"white"},label:e.$t("login")},null,8,["label"]),a($,{name:"register",style:{color:"white"},label:e.$t("register")},null,8,["label"])]),_:1},8,["modelValue"])]),_:1})]),_:1}))}};export{O as default};
