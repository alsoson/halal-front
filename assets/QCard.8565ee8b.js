import{a as s,u as o,f as u,d as n,h as c,e as l,j as q}from"./index.905caf83.js";var m=s({name:"QCard",props:{...o,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:e}){const r=q(),t=u(a,r.proxy.$q),d=n(()=>"q-card"+(t.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>c(a.tag,{class:d.value},l(e.default))}});export{m as Q};