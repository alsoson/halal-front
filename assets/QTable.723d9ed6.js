import{a as K,h as a,e as re,ak as dt,y as we,k as ie,u as qe,f as Ce,d as s,aZ as vt,r as A,a_ as ft,w as Q,aq as bt,al as Fe,a9 as gt,o as mt,a3 as St,a2 as ht,g as yt,aY as _t,l as Ae,a$ as wt,b0 as N,b1 as qt,aE as Ct,b2 as Pt,M as Le,i as _e,b3 as Me,b4 as kt,n as Ee,b5 as $e,b6 as xt,b7 as U,b8 as Rt,Q as ne,aB as Tt}from"./index.2cc57376.js";import{Q as Vt}from"./QLinearProgress.4ca3314a.js";import{u as Bt,a as Ot,b as pt}from"./use-fullscreen.28f684fd.js";var Ft=K({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:n,emit:l}){const f=ie(),{proxy:{$q:i}}=f,b=u=>{l("click",u)};return()=>{if(e.props===void 0)return a("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:b},re(n.default));let u,v;const c=f.vnode.key;if(c){if(u=e.props.colsMap[c],u===void 0)return}else u=e.props.col;if(u.sortable===!0){const o=u.align==="right"?"unshift":"push";v=dt(n.default,[]),v[o](a(we,{class:u.__iconClass,name:i.iconSet.table.arrowUp}))}else v=re(n.default);const S={class:u.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:u.headerStyle,onClick:o=>{u.sortable===!0&&e.props.sort(u),b(o)}};return a("th",S,v)}}});const Lt=["horizontal","vertical","cell","none"];var Mt=K({name:"QMarkupTable",props:{...qe,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Lt.includes(e)}},setup(e,{slots:n}){const l=ie(),f=Ce(e,l.proxy.$q),i=s(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(f.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>a("div",{class:i.value},[a("table",{class:"q-table"},re(n.default))])}});function Ie(e,n){return a("div",e,[a("table",{class:"q-table"},n)])}const Dt={list:_t,table:Mt},jt=["list","table","__qtable"];var At=K({name:"QVirtualScroll",props:{...vt,type:{type:String,default:"list",validator:e=>jt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:n,attrs:l}){let f;const i=A(null),b=s(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:u,localResetVirtualScroll:v,padVirtualScroll:c,onVirtualScrollEvt:S}=ft({virtualScrollLength:b,getVirtualScrollTarget:C,getVirtualScrollEl:P}),o=s(()=>{if(b.value===0)return[];const B=(p,x)=>({index:u.value.from+x,item:p});return e.itemsFn===void 0?e.items.slice(u.value.from,u.value.to).map(B):e.itemsFn(u.value.from,u.value.to-u.value.from).map(B)}),h=s(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),w=s(()=>e.scrollTarget!==void 0?{}:{tabindex:0});Q(b,()=>{v()}),Q(()=>e.scrollTarget,()=>{y(),_()});function P(){return i.value.$el||i.value}function C(){return f}function _(){f=bt(P(),e.scrollTarget),f.addEventListener("scroll",S,Fe.passive)}function y(){f!==void 0&&(f.removeEventListener("scroll",S,Fe.passive),f=void 0)}function V(){let B=c(e.type==="list"?"div":"tbody",o.value.map(n.default));return n.before!==void 0&&(B=n.before().concat(B)),Ae(n.after,B)}return gt(()=>{v()}),mt(()=>{_()}),St(()=>{_()}),ht(()=>{y()}),yt(()=>{y()}),()=>{if(n.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?Ie({ref:i,class:"q-table__middle "+h.value},V()):a(Dt[e.type],{...l,ref:i,class:[l.class,h.value],...w.value},V)}}});function Et(e,n){const l=A(null),f=s(()=>e.disable===!0?null:a("span",{ref:l,class:"no-outline",tabindex:-1}));function i(b){const u=n.value;b!==void 0&&b.type.indexOf("key")===0?u!==null&&document.activeElement!==u&&u.contains(document.activeElement)===!0&&u.focus():l.value!==null&&(b===void 0||u!==null&&u.contains(b.target)===!0)&&l.value.focus()}return{refocusTargetEl:f,refocusTarget:i}}var $t={xs:30,sm:35,md:40,lg:50,xl:60};const It={...qe,...qt,...Ct,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Nt=["update:modelValue"];function Qt(e,n){const{props:l,slots:f,emit:i,proxy:b}=ie(),{$q:u}=b,v=Ce(l,u),c=A(null),{refocusTargetEl:S,refocusTarget:o}=Et(l,c),h=wt(l,$t),w=s(()=>l.val!==void 0&&Array.isArray(l.modelValue)),P=s(()=>{const q=N(l.val);return w.value===!0?l.modelValue.findIndex(L=>N(L)===q):-1}),C=s(()=>w.value===!0?P.value>-1:N(l.modelValue)===N(l.trueValue)),_=s(()=>w.value===!0?P.value===-1:N(l.modelValue)===N(l.falseValue)),y=s(()=>C.value===!1&&_.value===!1),V=s(()=>l.disable===!0?-1:l.tabindex||0),B=s(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(l.disable===!0?" disabled":"")+(v.value===!0?` q-${e}--dark`:"")+(l.dense===!0?` q-${e}--dense`:"")+(l.leftLabel===!0?" reverse":"")),p=s(()=>{const q=C.value===!0?"truthy":_.value===!0?"falsy":"indet",L=l.color!==void 0&&(l.keepColor===!0||(e==="toggle"?C.value===!0:_.value!==!0))?` text-${l.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${q}${L}`}),x=s(()=>{const q={type:"checkbox"};return l.name!==void 0&&Object.assign(q,{"^checked":C.value===!0?"checked":void 0,name:l.name,value:w.value===!0?l.val:l.trueValue}),q}),T=Pt(x),E=s(()=>{const q={tabindex:V.value,role:"checkbox","aria-label":l.label,"aria-checked":y.value===!0?"mixed":C.value===!0?"true":"false"};return l.disable===!0&&(q["aria-disabled"]="true"),q});function H(q){q!==void 0&&(Le(q),o(q)),l.disable!==!0&&i("update:modelValue",z(),q)}function z(){if(w.value===!0){if(C.value===!0){const q=l.modelValue.slice();return q.splice(P.value,1),q}return l.modelValue.concat([l.val])}if(C.value===!0){if(l.toggleOrder!=="ft"||l.toggleIndeterminate===!1)return l.falseValue}else if(_.value===!0){if(l.toggleOrder==="ft"||l.toggleIndeterminate===!1)return l.trueValue}else return l.toggleOrder!=="ft"?l.trueValue:l.falseValue;return l.indeterminateValue}function W(q){(q.keyCode===13||q.keyCode===32)&&Le(q)}function F(q){(q.keyCode===13||q.keyCode===32)&&H(q)}const j=n(C,y);return Object.assign(b,{toggle:H}),()=>{const q=j();l.disable!==!0&&T(q,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const L=[a("div",{class:p.value,style:h.value},q)];S.value!==null&&L.push(S.value);const G=l.label!==void 0?Ae(f.default,[l.label]):re(f.default);return G!==void 0&&L.push(a("div",{class:`q-${e}__label q-anchor--skip`},G)),a("div",{ref:c,class:B.value,...E.value,onClick:H,onKeydown:W,onKeyup:F},L)}}const Ht=a("div",{key:"svg",class:"q-checkbox__bg absolute"},[a("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24","aria-hidden":"true"},[a("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),a("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var ye=K({name:"QCheckbox",props:It,emits:Nt,setup(e){function n(l,f){const i=s(()=>(l.value===!0?e.checkedIcon:f.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>i.value!==null?[a("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[a(we,{class:"q-checkbox__icon",name:i.value})])]:[Ht]}return Qt("checkbox",n)}});function zt(e,n){return new Date(e)-new Date(n)}const Ut={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Kt(e,n,l,f){const i=s(()=>{const{sortBy:v}=n.value;return v&&l.value.find(c=>c.name===v)||null}),b=s(()=>e.sortMethod!==void 0?e.sortMethod:(v,c,S)=>{const o=l.value.find(P=>P.name===c);if(o===void 0||o.field===void 0)return v;const h=S===!0?-1:1,w=typeof o.field=="function"?P=>o.field(P):P=>P[o.field];return v.sort((P,C)=>{let _=w(P),y=w(C);return _==null?-1*h:y==null?1*h:o.sort!==void 0?o.sort(_,y,P,C)*h:_e(_)===!0&&_e(y)===!0?(_-y)*h:Me(_)===!0&&Me(y)===!0?zt(_,y)*h:typeof _=="boolean"&&typeof y=="boolean"?(_-y)*h:([_,y]=[_,y].map(V=>(V+"").toLocaleString().toLowerCase()),_<y?-1*h:_===y?0:h)})});function u(v){let c=e.columnSortOrder;if(kt(v)===!0)v.sortOrder&&(c=v.sortOrder),v=v.name;else{const h=l.value.find(w=>w.name===v);h!==void 0&&h.sortOrder&&(c=h.sortOrder)}let{sortBy:S,descending:o}=n.value;S!==v?(S=v,o=c==="da"):e.binaryStateSort===!0?o=!o:o===!0?c==="ad"?S=null:o=!1:c==="ad"?o=!0:S=null,f({sortBy:S,descending:o,page:1})}return{columnToSort:i,computedSortMethod:b,sort:u}}const Wt={filter:[String,Object],filterMethod:Function};function Gt(e,n){const l=s(()=>e.filterMethod!==void 0?e.filterMethod:(f,i,b,u)=>{const v=i?i.toLowerCase():"";return f.filter(c=>b.some(S=>{const o=u(S,c)+"";return(o==="undefined"||o==="null"?"":o.toLowerCase()).indexOf(v)!==-1}))});return Q(()=>e.filter,()=>{Ee(()=>{n({page:1},!0)})},{deep:!0}),{computedFilterMethod:l}}function Yt(e,n){for(const l in n)if(n[l]!==e[l])return!1;return!0}function De(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Zt={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function Jt(e,n){const{props:l,emit:f}=e,i=A(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:l.rowsPerPageOptions.length>0?l.rowsPerPageOptions[0]:5},l.pagination)),b=s(()=>{const o=l["onUpdate:pagination"]!==void 0?{...i.value,...l.pagination}:i.value;return De(o)}),u=s(()=>b.value.rowsNumber!==void 0);function v(o){c({pagination:o,filter:l.filter})}function c(o={}){Ee(()=>{f("request",{pagination:o.pagination||b.value,filter:o.filter||l.filter,getCellValue:n})})}function S(o,h){const w=De({...b.value,...o});if(Yt(b.value,w)===!0){u.value===!0&&h===!0&&v(w);return}if(u.value===!0){v(w);return}l.pagination!==void 0&&l["onUpdate:pagination"]!==void 0?f("update:pagination",w):i.value=w}return{innerPagination:i,computedPagination:b,isServerSide:u,requestServerInteraction:c,setPagination:S}}function Xt(e,n,l,f,i,b){const{props:u,emit:v,proxy:{$q:c}}=e,S=s(()=>f.value===!0?l.value.rowsNumber||0:b.value),o=s(()=>{const{page:x,rowsPerPage:T}=l.value;return(x-1)*T}),h=s(()=>{const{page:x,rowsPerPage:T}=l.value;return x*T}),w=s(()=>l.value.page===1),P=s(()=>l.value.rowsPerPage===0?1:Math.max(1,Math.ceil(S.value/l.value.rowsPerPage))),C=s(()=>h.value===0?!0:l.value.page>=P.value),_=s(()=>(u.rowsPerPageOptions.includes(n.value.rowsPerPage)?u.rowsPerPageOptions:[n.value.rowsPerPage].concat(u.rowsPerPageOptions)).map(T=>({label:T===0?c.lang.table.allRows:""+T,value:T})));Q(P,(x,T)=>{if(x===T)return;const E=l.value.page;x&&!E?i({page:1}):x<E&&i({page:x})});function y(){i({page:1})}function V(){const{page:x}=l.value;x>1&&i({page:x-1})}function B(){const{page:x,rowsPerPage:T}=l.value;h.value>0&&x*T<S.value&&i({page:x+1})}function p(){i({page:P.value})}return u["onUpdate:pagination"]!==void 0&&v("update:pagination",{...l.value}),{firstRowIndex:o,lastRowIndex:h,isFirstPage:w,isLastPage:C,pagesNumber:P,computedRowsPerPageOptions:_,computedRowsNumber:S,firstPage:y,prevPage:V,nextPage:B,lastPage:p}}const el={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},tl=["update:selected","selection"];function ll(e,n,l,f){const i=s(()=>{const C={};return e.selected.map(f.value).forEach(_=>{C[_]=!0}),C}),b=s(()=>e.selection!=="none"),u=s(()=>e.selection==="single"),v=s(()=>e.selection==="multiple"),c=s(()=>l.value.length>0&&l.value.every(C=>i.value[f.value(C)]===!0)),S=s(()=>c.value!==!0&&l.value.some(C=>i.value[f.value(C)]===!0)),o=s(()=>e.selected.length);function h(C){return i.value[C]===!0}function w(){n("update:selected",[])}function P(C,_,y,V){n("selection",{rows:_,added:y,keys:C,evt:V});const B=u.value===!0?y===!0?_:[]:y===!0?e.selected.concat(_):e.selected.filter(p=>C.includes(f.value(p))===!1);n("update:selected",B)}return{hasSelectionMode:b,singleSelection:u,multipleSelection:v,allRowsSelected:c,someRowsSelected:S,rowsSelectedNumber:o,isRowSelected:h,clearSelection:w,updateSelection:P}}function je(e){return Array.isArray(e)?e.slice():[]}const al={expanded:Array},nl=["update:expanded"];function ol(e,n){const l=A(je(e.expanded));Q(()=>e.expanded,u=>{l.value=je(u)});function f(u){return l.value.includes(u)}function i(u){e.expanded!==void 0?n("update:expanded",u):l.value=u}function b(u,v){const c=l.value.slice(),S=c.indexOf(u);v===!0?S===-1&&(c.push(u),i(c)):S!==-1&&(c.splice(S,1),i(c))}return{isRowExpanded:f,setExpanded:i,updateExpanded:b}}const rl={visibleColumns:Array};function il(e,n,l){const f=s(()=>{if(e.columns!==void 0)return e.columns;const v=e.rows[0];return v!==void 0?Object.keys(v).map(c=>({name:c,label:c.toUpperCase(),field:c,align:_e(v[c])?"right":"left",sortable:!0})):[]}),i=s(()=>{const{sortBy:v,descending:c}=n.value;return(e.visibleColumns!==void 0?f.value.filter(o=>o.required===!0||e.visibleColumns.includes(o.name)===!0):f.value).map(o=>{const h=o.align||"right",w=`text-${h}`;return{...o,align:h,__iconClass:`q-table__sort-icon q-table__sort-icon--${h}`,__thClass:w+(o.headerClasses!==void 0?" "+o.headerClasses:"")+(o.sortable===!0?" sortable":"")+(o.name===v?` sorted ${c===!0?"sort-desc":""}`:""),__tdStyle:o.style!==void 0?typeof o.style!="function"?()=>o.style:o.style:()=>null,__tdClass:o.classes!==void 0?typeof o.classes!="function"?()=>w+" "+o.classes:P=>w+" "+o.classes(P):()=>w}})}),b=s(()=>{const v={};return i.value.forEach(c=>{v[c.name]=c}),v}),u=s(()=>e.tableColspan!==void 0?e.tableColspan:i.value.length+(l.value===!0?1:0));return{colList:f,computedCols:i,computedColsMap:b,computedColspan:u}}const oe="q-table__bottom row items-center",Ne={};$e.forEach(e=>{Ne[e]={}});var dl=K({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...Ne,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...qe,...Bt,...rl,...Wt,...Zt,...al,...el,...Ut},emits:["request","virtual-scroll",...Ot,...nl,...tl],setup(e,{slots:n,emit:l}){const f=ie(),{proxy:{$q:i}}=f,b=Ce(e,i),{inFullscreen:u,toggleFullscreen:v}=pt(),c=s(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),S=A(null),o=A(null),h=s(()=>e.grid!==!0&&e.virtualScroll===!0),w=s(()=>" q-table__card"+(b.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),P=s(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":w.value)+(b.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(u.value===!0?" fullscreen scroll":"")),C=s(()=>P.value+(e.loading===!0?" q-table--loading":""));Q(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+P.value,()=>{h.value===!0&&o.value!==null&&o.value.reset()});const{innerPagination:_,computedPagination:y,isServerSide:V,requestServerInteraction:B,setPagination:p}=Jt(f,$),{computedFilterMethod:x}=Gt(e,p),{isRowExpanded:T,setExpanded:E,updateExpanded:H}=ol(e,l),z=s(()=>{let t=e.rows;if(V.value===!0||t.length===0)return t;const{sortBy:r,descending:d}=y.value;return e.filter&&(t=x.value(t,e.filter,M.value,$)),ze.value!==null&&(t=Ue.value(e.rows===t?t.slice():t,r,d)),t}),W=s(()=>z.value.length),F=s(()=>{let t=z.value;if(V.value===!0)return t;const{rowsPerPage:r}=y.value;return r!==0&&(Z.value===0&&e.rows!==t?t.length>J.value&&(t=t.slice(0,J.value)):t=t.slice(Z.value,J.value)),t}),{hasSelectionMode:j,singleSelection:q,multipleSelection:L,allRowsSelected:G,someRowsSelected:Pe,rowsSelectedNumber:ue,isRowSelected:se,clearSelection:Qe,updateSelection:Y}=ll(e,l,F,c),{colList:He,computedCols:M,computedColsMap:ke,computedColspan:xe}=il(e,y,j),{columnToSort:ze,computedSortMethod:Ue,sort:ce}=Kt(e,y,He,p),{firstRowIndex:Z,lastRowIndex:J,isFirstPage:de,isLastPage:ve,pagesNumber:X,computedRowsPerPageOptions:Ke,computedRowsNumber:ee,firstPage:fe,prevPage:be,nextPage:ge,lastPage:me}=Xt(f,_,y,V,p,W),We=s(()=>F.value.length===0),Ge=s(()=>{const t={};return $e.forEach(r=>{t[r]=e[r]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function Ye(){h.value===!0&&o.value.reset()}function Ze(){if(e.grid===!0)return st();const t=e.hideHeader!==!0?Oe:null;if(h.value===!0){const d=n["top-row"],g=n["bottom-row"],m={default:R=>Te(R.item,n.body,R.index)};if(d!==void 0){const R=a("tbody",d({cols:M.value}));m.before=t===null?()=>R:()=>[t()].concat(R)}else t!==null&&(m.before=t);return g!==void 0&&(m.after=()=>a("tbody",g({cols:M.value}))),a(At,{ref:o,class:e.tableClass,style:e.tableStyle,...Ge.value,scrollTarget:e.virtualScrollTarget,items:F.value,type:"__qtable",tableColspan:xe.value,onVirtualScroll:Xe},m)}const r=[et()];return t!==null&&r.unshift(t()),Ie({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},r)}function Je(t,r){if(o.value!==null){o.value.scrollTo(t,r);return}t=parseInt(t,10);const d=S.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(d!==null){const g=S.value.querySelector(".q-table__middle.scroll"),{offsetTop:m}=d,R=m<g.scrollTop?"decrease":"increase";g.scrollTop=m,l("virtual-scroll",{index:t,from:0,to:_.value.rowsPerPage-1,direction:R})}}function Xe(t){l("virtual-scroll",t)}function Re(){return[a(Vt,{class:"q-table__linear-progress",color:e.color,dark:b.value,indeterminate:!0,trackColor:"transparent"})]}function Te(t,r,d){const g=c.value(t),m=se(g);if(r!==void 0)return r(Ve({key:g,row:t,pageIndex:d,__trClass:m?"selected":""}));const R=n["body-cell"],k=M.value.map(O=>{const le=n[`body-cell-${O.name}`],ae=le!==void 0?le:R;return ae!==void 0?ae(tt({key:g,row:t,pageIndex:d,col:O})):a("td",{class:O.__tdClass(t),style:O.__tdStyle(t)},$(O,t))});if(j.value===!0){const O=n["body-selection"],le=O!==void 0?O(lt({key:g,row:t,pageIndex:d})):[a(ye,{modelValue:m,color:e.color,dark:b.value,dense:e.dense,"onUpdate:modelValue":(ae,ct)=>{Y([g],[t],ae,ct)}})];k.unshift(a("td",{class:"q-table--col-auto-width"},le))}const D={key:g,class:{selected:m}};return e.onRowClick!==void 0&&(D.class["cursor-pointer"]=!0,D.onClick=O=>{l("RowClick",O,t,d)}),e.onRowDblclick!==void 0&&(D.class["cursor-pointer"]=!0,D.onDblclick=O=>{l("RowDblclick",O,t,d)}),e.onRowContextmenu!==void 0&&(D.class["cursor-pointer"]=!0,D.onContextmenu=O=>{l("RowContextmenu",O,t,d)}),a("tr",D,k)}function et(){const t=n.body,r=n["top-row"],d=n["bottom-row"];let g=F.value.map((m,R)=>Te(m,t,R));return r!==void 0&&(g=r({cols:M.value}).concat(g)),d!==void 0&&(g=g.concat(d({cols:M.value}))),a("tbody",g)}function Ve(t){return Se(t),t.cols=t.cols.map(r=>{const d={...r};return U(d,"value",()=>$(r,t.row)),d}),t}function tt(t){return Se(t),U(t,"value",()=>$(t.col,t.row)),t}function lt(t){return Se(t),t}function Se(t){Object.assign(t,{cols:M.value,colsMap:ke.value,sort:ce,rowIndex:Z.value+t.pageIndex,color:e.color,dark:b.value,dense:e.dense}),j.value===!0&&U(t,"selected",()=>se(t.key),(r,d)=>{Y([t.key],[t.row],r,d)}),U(t,"expand",()=>T(t.key),r=>{H(t.key,r)})}function $(t,r){const d=typeof t.field=="function"?t.field(r):r[t.field];return t.format!==void 0?t.format(d,r):d}const I=s(()=>({pagination:y.value,pagesNumber:X.value,isFirstPage:de.value,isLastPage:ve.value,firstPage:fe,prevPage:be,nextPage:ge,lastPage:me,inFullscreen:u.value,toggleFullscreen:v}));function at(){const t=n.top,r=n["top-left"],d=n["top-right"],g=n["top-selection"],m=j.value===!0&&g!==void 0&&ue.value>0,R="q-table__top relative-position row items-center";if(t!==void 0)return a("div",{class:R},[t(I.value)]);let k;if(m===!0?k=g(I.value).slice():(k=[],r!==void 0?k.push(a("div",{class:"q-table-control"},[r(I.value)])):e.title&&k.push(a("div",{class:"q-table__control"},[a("div",{class:["q-table__title",e.titleClass]},e.title)]))),d!==void 0&&(k.push(a("div",{class:"q-table__separator col"})),k.push(a("div",{class:"q-table__control"},[d(I.value)]))),k.length!==0)return a("div",{class:R},k)}const Be=s(()=>Pe.value===!0?null:G.value);function Oe(){const t=nt();return e.loading===!0&&n.loading===void 0&&t.push(a("tr",{class:"q-table__progress"},[a("th",{class:"relative-position",colspan:xe.value},Re())])),a("thead",t)}function nt(){const t=n.header,r=n["header-cell"];if(t!==void 0)return t(he({header:!0})).slice();const d=M.value.map(g=>{const m=n[`header-cell-${g.name}`],R=m!==void 0?m:r,k=he({col:g});return R!==void 0?R(k):a(Ft,{key:g.name,props:k},()=>g.label)});if(q.value===!0&&e.grid!==!0)d.unshift(a("th",{class:"q-table--col-auto-width"}," "));else if(L.value===!0){const g=n["header-selection"],m=g!==void 0?g(he({})):[a(ye,{color:e.color,modelValue:Be.value,dark:b.value,dense:e.dense,"onUpdate:modelValue":pe})];d.unshift(a("th",{class:"q-table--col-auto-width"},m))}return[a("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},d)]}function he(t){return Object.assign(t,{cols:M.value,sort:ce,colsMap:ke.value,color:e.color,dark:b.value,dense:e.dense}),L.value===!0&&U(t,"selected",()=>Be.value,pe),t}function pe(t){Pe.value===!0&&(t=!1),Y(F.value.map(c.value),F.value,t)}const te=s(()=>{const t=[e.iconFirstPage||i.iconSet.table.firstPage,e.iconPrevPage||i.iconSet.table.prevPage,e.iconNextPage||i.iconSet.table.nextPage,e.iconLastPage||i.iconSet.table.lastPage];return i.lang.rtl===!0?t.reverse():t});function ot(){if(e.hideBottom===!0)return;if(We.value===!0){if(e.hideNoData===!0)return;const d=e.loading===!0?e.loadingLabel||i.lang.table.loading:e.filter?e.noResultsLabel||i.lang.table.noResults:e.noDataLabel||i.lang.table.noData,g=n["no-data"],m=g!==void 0?[g({message:d,icon:i.iconSet.table.warning,filter:e.filter})]:[a(we,{class:"q-table__bottom-nodata-icon",name:i.iconSet.table.warning}),d];return a("div",{class:oe+" q-table__bottom--nodata"},m)}const t=n.bottom;if(t!==void 0)return a("div",{class:oe},[t(I.value)]);const r=e.hideSelectedBanner!==!0&&j.value===!0&&ue.value>0?[a("div",{class:"q-table__control"},[a("div",[(e.selectedRowsLabel||i.lang.table.selectedRecords)(ue.value)])])]:[];if(e.hidePagination!==!0)return a("div",{class:oe+" justify-end"},it(r));if(r.length>0)return a("div",{class:oe},r)}function rt(t){p({page:1,rowsPerPage:t.value})}function it(t){let r;const{rowsPerPage:d}=y.value,g=e.paginationLabel||i.lang.table.pagination,m=n.pagination,R=e.rowsPerPageOptions.length>1;if(t.push(a("div",{class:"q-table__separator col"})),R===!0&&t.push(a("div",{class:"q-table__control"},[a("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||i.lang.table.recordsPerPage]),a(Rt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:d,options:Ke.value,displayValue:d===0?i.lang.table.allRows:d,dark:b.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":rt})])),m!==void 0)r=m(I.value);else if(r=[a("span",d!==0?{class:"q-table__bottom-item"}:{},[d?g(Z.value+1,Math.min(J.value,ee.value),ee.value):g(1,W.value,ee.value)])],d!==0&&X.value>1){const k={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(k.size="sm"),X.value>2&&r.push(a(ne,{key:"pgFirst",...k,icon:te.value[0],disable:de.value,onClick:fe})),r.push(a(ne,{key:"pgPrev",...k,icon:te.value[1],disable:de.value,onClick:be}),a(ne,{key:"pgNext",...k,icon:te.value[2],disable:ve.value,onClick:ge})),X.value>2&&r.push(a(ne,{key:"pgLast",...k,icon:te.value[3],disable:ve.value,onClick:me}))}return t.push(a("div",{class:"q-table__control"},r)),t}function ut(){const t=e.gridHeader===!0?[a("table",{class:"q-table"},[Oe()])]:e.loading===!0&&n.loading===void 0?Re():void 0;return a("div",{class:"q-table__middle"},t)}function st(){const t=n.item!==void 0?n.item:r=>{const d=r.cols.map(m=>a("div",{class:"q-table__grid-item-row"},[a("div",{class:"q-table__grid-item-title"},[m.label]),a("div",{class:"q-table__grid-item-value"},[m.value])]));if(j.value===!0){const m=n["body-selection"],R=m!==void 0?m(r):[a(ye,{modelValue:r.selected,color:e.color,dark:b.value,dense:e.dense,"onUpdate:modelValue":(k,D)=>{Y([r.key],[r.row],k,D)}})];d.unshift(a("div",{class:"q-table__grid-item-row"},R),a(Tt,{dark:b.value}))}const g={class:["q-table__grid-item-card"+w.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(g.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(g.onClick=m=>{l("RowClick",m,r.row,r.pageIndex)}),e.onRowDblclick!==void 0&&(g.onDblclick=m=>{l("RowDblclick",m,r.row,r.pageIndex)})),a("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(r.selected===!0?" q-table__grid-item--selected":"")},[a("div",g,d)])};return a("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},F.value.map((r,d)=>t(Ve({key:c.value(r),row:r,pageIndex:d}))))}return Object.assign(f.proxy,{requestServerInteraction:B,setPagination:p,firstPage:fe,prevPage:be,nextPage:ge,lastPage:me,isRowSelected:se,clearSelection:Qe,isRowExpanded:T,setExpanded:E,sort:ce,resetVirtualScroll:Ye,scrollTo:Je,getCellValue:$}),xt(f.proxy,{filteredSortedRows:()=>z.value,computedRows:()=>F.value,computedRowsNumber:()=>ee.value}),()=>{const t=[at()],r={ref:S,class:C.value};return e.grid===!0?t.push(ut()):Object.assign(r,{class:[r.class,e.cardClass],style:e.cardStyle}),t.push(Ze(),ot()),e.loading===!0&&n.loading!==void 0&&t.push(n.loading()),a("div",r,t)}}});export{dl as Q,ye as a,Nt as b,Qt as c,It as u};