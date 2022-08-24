import{ab as _,aX as Q,m as c,p as m,q as o,ac as x,ad as y,s as n,v as r,t as l,x as A,B as f,aC as p,Q as h,ae as T,bt as B,aB as P,V,ai as v}from"./index.5d83bf10.js";import{Q as C}from"./QInput.abc39afa.js";import{Q as u}from"./QCardSection.07abff40.js";import{Q as D}from"./QToggle.987c4f30.js";import{Q as $}from"./QCardActions.e71bcbff.js";import{Q as E}from"./QForm.def18a60.js";import{Q as k}from"./QCard.58209fd9.js";import{Q as I}from"./QTable.a3cc9a20.js";import{Q as N}from"./QPage.947199e3.js";import"./QLinearProgress.5f83f788.js";import"./use-fullscreen.784e373c.js";const z={class:"text-center text-secondary",style:{"font-family":"'ChenYuluoyan-Thin'","font-size":"10vmin"}},F={style:{width:"100%"},class:"bg-accent"},M={class:"text-center q-px-lg q-py-lg",style:{"font-family":"'ChenYuluoyan-Thin'","font-size":"3.5vmin","font-weight":"300"}},O={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},R={class:"q-ma-none"},Y=n("div",{class:"text-subtitle2"},"Answer",-1),X={class:"text-h6"},j={class:"text-subtitle2"},G=n("div",{class:"text-subtitle2"},"Answer",-1),ne={__name:"MessagePage",setup(H){const d=_([]),t=_({_id:"",reply:"",idx:0,sell:!1,dialog:!1,submitting:!1}),q=e=>{const a=d.findIndex(g=>g._id===e);t._id=e,t.reply=d[a].reply,t.sell=d[a].sell,t.dialog=!0,t.submitting=!1},U=[{name:"anonymous",required:!0,label:"Anonymous",align:"left",sortable:!0},{name:"title",align:"center",label:"Title",sortable:!0,required:!0},{name:"description",label:"Description",sortable:!0},{name:"reply",label:"Reply",sortable:!0},{name:"edit",label:"Edit",sortable:!0}],w=async()=>{t.submitting=!0,console.log(t.reply);try{await x.patch("/qa/"+t._id,{reply:t.reply,sell:t.sell}),y.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"}),b(),t.dialog=!1}catch(e){y.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})}t.submitting=!1},b=async()=>{try{const{data:e}=await x.get("/qa/all");d.splice(0,d.length),d.push(...e.result)}catch(e){console.log(e),y.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})}};return b(),(e,a)=>{const g=Q("h7"),S=Q("q-card-action");return c(),m(N,{id:"connectUs"},{default:o(()=>[n("h2",z,r(e.$t("connectUsTitle")),1),n("div",F,[n("h6",M,r(e.$t("connectUsP")),1)]),l(I,{grid:"","card-container-class":e.cardContainerClass,rows:d,columns:U,"row-key":"name",filter:e.filter,"hide-header":"",pagination:e.pagination,"onUpdate:pagination":a[6]||(a[6]=s=>e.pagination=s),"rows-per-page-options":e.rowsPerPageOptions},{"top-right":o(()=>[l(C,{borderless:"",dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":a[0]||(a[0]=s=>e.filter=s),placeholder:"Search"},{append:o(()=>[l(A,{name:"search"})]),_:1},8,["modelValue"])]),item:o(s=>[n("div",O,[(c(),m(k,{key:s.row},{default:o(()=>[l(u,{class:"text-center"},{default:o(()=>[n("h5",R,[n("strong",null,r(s.row.title),1)]),l(g,null,{default:o(()=>[f(r(s.row.anonymous),1)]),_:2},1024)]),_:2},1024),l(p),l(u,{class:""},{default:o(()=>[f(r(s.row.description),1)]),_:2},1024),l(p,{inset:""}),l(u,null,{default:o(()=>[Y,f(" "+r(s.row.reply),1)]),_:2},1024),l(S,null,{default:o(()=>[(c(),m(h,{rounded:"",onClick:i=>q(s.row._id),key:s.row._id,style:{width:"50px",height:"50px"},class:"bg-accent",icon:"mdi-circle-edit-outline"},null,8,["onClick"])),(c(),m(T,{key:s.row._id,modelValue:t.dialog,"onUpdate:modelValue":a[5]||(a[5]=i=>t.dialog=i),persistent:"",style:{width:"100%"}},{default:o(()=>[l(k,{flat:"",bordered:"",style:{width:"100%"},class:"my-card bg-secondary text-white"},{default:o(()=>[l(E,{modelValue:t,"onUpdate:modelValue":a[4]||(a[4]=i=>B(t)?t.value=i:null),onSubmit:P(w,["prevent"])},{default:o(()=>[l(u,null,{default:o(()=>[n("div",X,r(s.row.title),1),n("div",j,r(s.row.anonymous),1)]),_:2},1024),l(u,null,{default:o(()=>[f(r(s.row.description),1)]),_:2},1024),l(p,{inset:""}),l(u,null,{default:o(()=>[G,l(C,{modelValue:t.reply,"onUpdate:modelValue":a[1]||(a[1]=i=>t.reply=i),type:"textarea",color:"white"},null,8,["modelValue"])]),_:1}),l(p,{dark:""}),l($,null,{default:o(()=>[V(l(h,{round:"",flat:"",icon:"fa-solid fa-xmark"},null,512),[[v]]),V(l(h,{flat:"",round:"",type:"submit",icon:"fa-solid fa-check",onClick:a[2]||(a[2]=i=>w())},null,512),[[v]]),l(D,{"false-value":!1,label:`On the Shelf - ${t.sell}`,"true-value":!0,color:"pink",modelValue:t.sell,"onUpdate:modelValue":a[3]||(a[3]=i=>t.sell=i)},null,8,["label","modelValue"])]),_:1})]),_:2},1032,["modelValue","onSubmit"])]),_:2},1024)]),_:2},1032,["modelValue"]))]),_:2},1024)]),_:2},1024))])]),_:1},8,["card-container-class","rows","filter","pagination","rows-per-page-options"])]),_:1})}}};export{ne as default};
