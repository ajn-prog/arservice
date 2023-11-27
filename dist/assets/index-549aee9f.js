import{o as D,p as k,t as L,R as c,v as Y,w as ge,x as oe,y as Sa,z as Oa,D as Na,r as Q,E as Ia,F as Ca,G as qe,H as Ea,J as $a,K as dt,M as Ue,N as we,k as Ie,a as X,j as s,u as pt,q as mt,g as ut,h as Je,L as K,b as Ta,m as Se,n as F,I as Da,B as I,i as Ce,l as ka}from"./index-83f02462.js";import{T as Ba}from"./Table-7bf1ad96.js";import{P as Ra,D as Ma,I as Fa}from"./index-95860653.js";import{I as za}from"./IconEye-533ad2da.js";import{i as Aa,g as Va,a as Ha,u as Ka,C as H,O as La,b as Ya,I as Ga,S as le}from"./IconTrash-d719bdb8.js";import{I as Wa,C as _,L as qa}from"./LoadingScreen-1d872a53.js";import{A as Ua}from"./AgencySelect-d6643fca.js";import{F as Ja}from"./FileDropzone-8ffb74a6.js";import{c as ht,u as Qa,I as ft,T}from"./TextInput-8700b334.js";import{P as Xa}from"./ProductSelect-4adf9d70.js";import{N as Za,T as er}from"./NumberInput-c1d48a02.js";import{I as tr}from"./IconPlus-559040c7.js";import{u as vt}from"./use-form-b88078fc.js";import{I as ar}from"./IconArrowLeft-46dd83f0.js";import{I as rr}from"./ItemSelect-69bcaaa9.js";import{a as As}from"./ItemSelect-69bcaaa9.js";import{P as sr}from"./PasswordInput-c6186c70.js";import"./clamp-73f6bef2.js";import"./IconPhoto-830bd5a8.js";function lr({data:t,value:e}){const a=e.map(o=>o.trim().toLowerCase());return t.reduce((o,l)=>(Aa(l)?o.push({group:l.group,items:l.items.filter(i=>a.indexOf(i.value.toLowerCase().trim())===-1)}):a.indexOf(l.value.toLowerCase().trim())===-1&&o.push(l),o),[])}const[nr,or]=ht(),[ir,Ee]=ht();var cr={root:"m-7cda1cd6","root--default":"m-44da308b","root--contrast":"m-e3a01f8",label:"m-1e0e6180",remove:"m-ae386778",group:"m-1dcfd90b"};const xe=cr;var dr=Object.defineProperty,ie=Object.getOwnPropertySymbols,gt=Object.prototype.hasOwnProperty,xt=Object.prototype.propertyIsEnumerable,Qe=(t,e,a)=>e in t?dr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,Xe=(t,e)=>{for(var a in e||(e={}))gt.call(e,a)&&Qe(t,a,e[a]);if(ie)for(var a of ie(e))xt.call(e,a)&&Qe(t,a,e[a]);return t},pr=(t,e)=>{var a={};for(var r in t)gt.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&ie)for(var r of ie(t))e.indexOf(r)<0&&xt.call(t,r)&&(a[r]=t[r]);return a};const mr={},ur=ge((t,{gap:e},{size:a})=>({group:{"--pg-gap":e!==void 0?oe(e):oe(a,"pg-gap")}})),$e=D((t,e)=>{const a=k("PillGroup",mr,t),r=a,{classNames:o,className:l,style:i,styles:n,unstyled:d,vars:b,size:h,disabled:x}=r,g=pr(r,["classNames","className","style","styles","unstyled","vars","size","disabled"]),f=Ee(),p=(f==null?void 0:f.size)||h||void 0,u=L({name:"PillGroup",classes:xe,props:a,className:l,style:i,classNames:o,styles:n,unstyled:d,vars:b,varsResolver:ur,stylesCtx:{size:p},rootSelector:"group"});return c.createElement(nr,{value:{size:p,disabled:x}},c.createElement(Y,Xe(Xe({ref:e,size:p},u("group")),g)))});$e.classes=xe;$e.displayName="@mantine/core/PillGroup";var hr=Object.defineProperty,fr=Object.defineProperties,vr=Object.getOwnPropertyDescriptors,ce=Object.getOwnPropertySymbols,bt=Object.prototype.hasOwnProperty,yt=Object.prototype.propertyIsEnumerable,Ze=(t,e,a)=>e in t?hr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,q=(t,e)=>{for(var a in e||(e={}))bt.call(e,a)&&Ze(t,a,e[a]);if(ce)for(var a of ce(e))yt.call(e,a)&&Ze(t,a,e[a]);return t},et=(t,e)=>fr(t,vr(e)),gr=(t,e)=>{var a={};for(var r in t)bt.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&ce)for(var r of ce(t))e.indexOf(r)<0&&yt.call(t,r)&&(a[r]=t[r]);return a};const xr={variant:"default"},br=ge((t,{radius:e},{size:a})=>({root:{"--pill-fz":oe(a,"pill-fz"),"--pill-height":oe(a,"pill-height"),"--pill-radius":e===void 0?void 0:Oa(e)}})),J=D((t,e)=>{const a=k("Pill",xr,t),r=a,{classNames:o,className:l,style:i,styles:n,unstyled:d,vars:b,variant:h,children:x,withRemoveButton:g,onRemove:f,removeButtonProps:p,radius:u,size:w,disabled:B}=r,C=gr(r,["classNames","className","style","styles","unstyled","vars","variant","children","withRemoveButton","onRemove","removeButtonProps","radius","size","disabled"]),E=or(),A=Ee(),R=w||(E==null?void 0:E.size)||void 0,M=(A==null?void 0:A.variant)==="filled"?"contrast":h||"default",$=L({name:"Pill",classes:xe,props:a,className:l,style:i,classNames:o,styles:n,unstyled:d,vars:b,varsResolver:br,stylesCtx:{size:R}});return c.createElement(Y,q(et(q({component:"span",ref:e,variant:M,size:R},$("root",{variant:M})),{mod:{"with-remove":g,disabled:B||(E==null?void 0:E.disabled)}}),C),c.createElement("span",q({},$("label")),x),g&&c.createElement(Sa,et(q(q({variant:"transparent",radius:u,tabIndex:-1,"aria-hidden":!0,unstyled:d},p),$("remove",{className:p==null?void 0:p.className,style:p==null?void 0:p.style})),{onMouseDown:S=>{var N;S.preventDefault(),S.stopPropagation(),(N=p==null?void 0:p.onMouseDown)==null||N.call(p,S)},onClick:S=>{var N;S.stopPropagation(),f==null||f(),(N=p==null?void 0:p.onClick)==null||N.call(p,S)}})))});J.classes=xe;J.displayName="@mantine/core/Pill";J.Group=$e;var yr={field:"m-45c4369d"};const _t=yr;var _r=Object.defineProperty,Pr=Object.defineProperties,jr=Object.getOwnPropertyDescriptors,de=Object.getOwnPropertySymbols,Pt=Object.prototype.hasOwnProperty,jt=Object.prototype.propertyIsEnumerable,tt=(t,e,a)=>e in t?_r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,at=(t,e)=>{for(var a in e||(e={}))Pt.call(e,a)&&tt(t,a,e[a]);if(de)for(var a of de(e))jt.call(e,a)&&tt(t,a,e[a]);return t},wr=(t,e)=>Pr(t,jr(e)),Sr=(t,e)=>{var a={};for(var r in t)Pt.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&de)for(var r of de(t))e.indexOf(r)<0&&jt.call(t,r)&&(a[r]=t[r]);return a};const Or={type:"visible"},Te=D((t,e)=>{const a=k("PillsInputField",Or,t),r=a,{classNames:o,className:l,style:i,styles:n,unstyled:d,vars:b,type:h,disabled:x,id:g,pointer:f}=r,p=Sr(r,["classNames","className","style","styles","unstyled","vars","type","disabled","id","pointer"]),u=Ee(),w=Qa(),B=L({name:"PillsInputField",classes:_t,props:a,className:l,style:i,classNames:o,styles:n,unstyled:d,rootSelector:"field"}),C=x||(u==null?void 0:u.disabled);return c.createElement(Y,wr(at(at({component:"input",ref:Na(e,u==null?void 0:u.fieldRef),"data-type":h,disabled:C,mod:{disabled:C,pointer:f}},B("field")),p),{id:(w==null?void 0:w.inputId)||g,"aria-invalid":u==null?void 0:u.hasError,"aria-describedby":w==null?void 0:w.describedBy}))});Te.classes=_t;Te.displayName="@mantine/core/PillsInputField";var Nr=Object.defineProperty,Ir=Object.defineProperties,Cr=Object.getOwnPropertyDescriptors,pe=Object.getOwnPropertySymbols,wt=Object.prototype.hasOwnProperty,St=Object.prototype.propertyIsEnumerable,rt=(t,e,a)=>e in t?Nr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,Er=(t,e)=>{for(var a in e||(e={}))wt.call(e,a)&&rt(t,a,e[a]);if(pe)for(var a of pe(e))St.call(e,a)&&rt(t,a,e[a]);return t},$r=(t,e)=>Ir(t,Cr(e)),Tr=(t,e)=>{var a={};for(var r in t)wt.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&pe)for(var r of pe(t))e.indexOf(r)<0&&St.call(t,r)&&(a[r]=t[r]);return a};const Dr={},me=D((t,e)=>{const r=k("PillsInput",Dr,t),{children:o,onMouseDown:l,onClick:i,size:n,disabled:d,__staticSelector:b,error:h,variant:x}=r,g=Tr(r,["children","onMouseDown","onClick","size","disabled","__staticSelector","error","variant"]),f=Q.useRef();return c.createElement(ir,{value:{fieldRef:f,size:n,disabled:d,hasError:!!h,variant:x}},c.createElement(ft,$r(Er({size:n,error:h,variant:x,component:"div",ref:e,onMouseDown:p=>{var u;p.preventDefault(),l==null||l(p),(u=f.current)==null||u.focus()},onClick:p=>{var u;p.preventDefault(),i==null||i(p),(u=f.current)==null||u.focus()}},g),{multiline:!0,disabled:d,__staticSelector:b||"PillsInput",withAria:!1}),o))});me.displayName="@mantine/core/PillsInput";me.Field=Te;var kr=Object.defineProperty,Br=Object.defineProperties,Rr=Object.getOwnPropertyDescriptors,ue=Object.getOwnPropertySymbols,Ot=Object.prototype.hasOwnProperty,Nt=Object.prototype.propertyIsEnumerable,st=(t,e,a)=>e in t?kr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,j=(t,e)=>{for(var a in e||(e={}))Ot.call(e,a)&&st(t,a,e[a]);if(ue)for(var a of ue(e))Nt.call(e,a)&&st(t,a,e[a]);return t},U=(t,e)=>Br(t,Rr(e)),lt=(t,e)=>{var a={};for(var r in t)Ot.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&ue)for(var r of ue(t))e.indexOf(r)<0&&Nt.call(t,r)&&(a[r]=t[r]);return a};const Mr={maxValues:1/0,withCheckIcon:!0,checkIconPosition:"left"},De=D((t,e)=>{const a=k("MultiSelect",Mr,t),r=a,{classNames:o,className:l,style:i,styles:n,unstyled:d,vars:b,size:h,value:x,defaultValue:g,onChange:f,onKeyDown:p,variant:u,data:w,dropdownOpened:B,defaultDropdownOpened:C,onDropdownOpen:E,onDropdownClose:A,selectFirstOptionOnChange:R,onOptionSubmit:M,comboboxProps:$,filter:S,limit:N,withScrollArea:Re,maxDropdownHeight:be,searchValue:ee,defaultSearchValue:Vt,onSearchChange:Ht,readOnly:G,disabled:V,onFocus:Me,onBlur:Fe,onPaste:hs,radius:Kt,rightSection:Lt,rightSectionWidth:Yt,rightSectionPointerEvents:Gt,rightSectionProps:Wt,leftSection:qt,leftSectionWidth:Ut,leftSectionPointerEvents:Jt,leftSectionProps:Qt,inputContainer:Xt,inputWrapperOrder:Zt,withAsterisk:ea,labelProps:ta,descriptionProps:aa,errorProps:ra,wrapperProps:sa,description:la,label:na,error:ze,maxValues:oa,searchable:O,nothingFoundMessage:Ae,withCheckIcon:ia,checkIconPosition:ca,hidePickedOptions:Ve,withErrorStyles:da,name:pa,form:ma,id:ua,clearable:ha,clearButtonProps:fa,hiddenInputProps:va,placeholder:He}=r,ga=lt(r,["classNames","className","style","styles","unstyled","vars","size","value","defaultValue","onChange","onKeyDown","variant","data","dropdownOpened","defaultDropdownOpened","onDropdownOpen","onDropdownClose","selectFirstOptionOnChange","onOptionSubmit","comboboxProps","filter","limit","withScrollArea","maxDropdownHeight","searchValue","defaultSearchValue","onSearchChange","readOnly","disabled","onFocus","onBlur","onPaste","radius","rightSection","rightSectionWidth","rightSectionPointerEvents","rightSectionProps","leftSection","leftSectionWidth","leftSectionPointerEvents","leftSectionProps","inputContainer","inputWrapperOrder","withAsterisk","labelProps","descriptionProps","errorProps","wrapperProps","description","label","error","maxValues","searchable","nothingFoundMessage","withCheckIcon","checkIconPosition","hidePickedOptions","withErrorStyles","name","form","id","clearable","clearButtonProps","hiddenInputProps","placeholder"]),ye=Ia(ua),_e=Va(w),te=Ha(_e),P=Ka({opened:B,defaultOpened:C,onDropdownOpen:E,onDropdownClose:()=>{A==null||A(),P.resetSelectedOption()}}),{styleProps:xa,rest:ba}=Ca(ga),ya=ba,_a=lt(ya,["type"]),[y,W]=qe({value:x,defaultValue:g,finalValue:[],onChange:f}),[ae,re]=qe({value:ee,defaultValue:Vt,finalValue:"",onChange:Ht}),Pe=L({name:"MultiSelect",classes:{},props:a,classNames:o,styles:n,unstyled:d}),{resolvedClassNames:Ke,resolvedStyles:Le}=Ea({props:a,styles:n,classNames:o}),Pa=v=>{p==null||p(v),v.key==="Backspace"&&ae.length===0&&y.length>0&&W(y.slice(0,y.length-1))},ja=y.map((v,je)=>{var We;return c.createElement(J,j({key:`${v}-${je}`,withRemoveButton:!G,onRemove:()=>W(y.filter(wa=>v!==wa)),unstyled:d},Pe("pill")),((We=te[v])==null?void 0:We.label)||v)});Q.useEffect(()=>{R&&P.selectFirstOption()},[R,y]);const Ye=ha&&y.length>0&&!V&&!G&&c.createElement(H.ClearButton,U(j({size:h},fa),{onClear:()=>{W([]),re("")}})),Ge=lr({data:_e,value:y});return c.createElement(c.Fragment,null,c.createElement(H,j({store:P,classNames:Ke,styles:Le,unstyled:d,size:h,readOnly:G,__staticSelector:"MultiSelect",onOptionSubmit:v=>{M==null||M(v),re(""),P.updateSelectedOptionIndex("selected"),y.includes(te[v].value)?W(y.filter(je=>je!==te[v].value)):y.length<oa&&W([...y,te[v].value])}},$),c.createElement(H.DropdownTarget,null,c.createElement(me,U(j({},xa),{__staticSelector:"MultiSelect",classNames:Ke,styles:Le,unstyled:d,size:h,className:l,style:i,variant:u,disabled:V,radius:Kt,rightSection:Lt||Ye||c.createElement(H.Chevron,{size:h,error:ze,unstyled:d}),rightSectionPointerEvents:Gt||Ye?"all":"none",rightSectionWidth:Yt,rightSectionProps:Wt,leftSection:qt,leftSectionWidth:Ut,leftSectionPointerEvents:Jt,leftSectionProps:Qt,inputContainer:Xt,inputWrapperOrder:Zt,withAsterisk:ea,labelProps:ta,descriptionProps:aa,errorProps:ra,wrapperProps:sa,description:la,label:na,error:ze,multiline:!0,withErrorStyles:da,__stylesApiProps:U(j({},a),{multiline:!0}),pointer:!O,onClick:()=>O?P.openDropdown():P.toggleDropdown(),id:ye}),c.createElement(J.Group,j({disabled:V,unstyled:d},Pe("pillsList")),ja,c.createElement(H.EventsTarget,null,c.createElement(me.Field,U(j(U(j({},_a),{ref:e,id:ye,placeholder:He,type:!O&&!He?"hidden":"visible"}),Pe("inputField")),{unstyled:d,onFocus:v=>{Me==null||Me(v),O&&P.openDropdown()},onBlur:v=>{Fe==null||Fe(v),P.closeDropdown(),O&&P.closeDropdown(),re("")},onKeyDown:Pa,value:ae,onChange:v=>{re(v.currentTarget.value),O&&P.openDropdown(),R&&P.selectFirstOption()},disabled:V,readOnly:G||!O,pointer:!O})))))),c.createElement(La,{data:Ve?Ge:_e,hidden:G||V,filter:S,search:ae,limit:N,hiddenWhenEmpty:!O||!Ae||Ve&&Ge.length===0&&ae.trim().length===0,withScrollArea:Re,maxDropdownHeight:be,filterOptions:O,value:y,checkIconPosition:ca,withCheckIcon:ia,nothingFoundMessage:Ae,unstyled:d,labelId:`${ye}-label`})),c.createElement("input",j({type:"hidden",name:pa,value:y.join(","),form:ma,disabled:V},va)))});De.classes=j(j({},ft.classes),H.classes);De.displayName="@mantine/core/MultiSelect";const[Fr,zr]=$a("Table component was not found in the tree");var Ar={table:"m-b23fa0ef",th:"m-4e7aa4f3",tr:"m-4e7aa4fd",td:"m-4e7aa4ef",tbody:"m-b2404537",thead:"m-b242d975",caption:"m-9e5a3ac7",scrollContainer:"m-a100c15",scrollContainerInner:"m-62259741"};const Z=Ar;var Vr=Object.defineProperty,he=Object.getOwnPropertySymbols,It=Object.prototype.hasOwnProperty,Ct=Object.prototype.propertyIsEnumerable,nt=(t,e,a)=>e in t?Vr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,Oe=(t,e)=>{for(var a in e||(e={}))It.call(e,a)&&nt(t,a,e[a]);if(he)for(var a of he(e))Ct.call(e,a)&&nt(t,a,e[a]);return t},Hr=(t,e)=>{var a={};for(var r in t)It.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&he)for(var r of he(t))e.indexOf(r)<0&&Ct.call(t,r)&&(a[r]=t[r]);return a};function Kr(t,e){if(!e)return;const a={};return e.columnBorder&&t.withColumnBorders&&(a["data-with-column-border"]=!0),e.rowBorder&&t.withRowBorders&&(a["data-with-row-border"]=!0),e.striped&&t.striped&&(a["data-striped"]=t.striped),e.highlightOnHover&&t.highlightOnHover&&(a["data-hover"]=!0),e.captionSide&&t.captionSide&&(a["data-side"]=t.captionSide),e.stickyHeader&&t.stickyHeader&&(a["data-sticky"]=!0),a}function z(t,e){const a=`Table${t.charAt(0).toUpperCase()}${t.slice(1)}`,r=D((o,l)=>{const i=k(a,{},o),n=i,{classNames:d,className:b,style:h,styles:x}=n,g=Hr(n,["classNames","className","style","styles"]),f=zr();return c.createElement(Y,Oe(Oe(Oe({component:t,ref:l},Kr(f,e)),f.getStyles(t,{className:b,classNames:d,style:h,styles:x,props:i})),g))});return r.displayName=`@mantine/core/${a}`,r.classes=Z,r}const Ne=z("th",{columnBorder:!0}),Et=z("td",{columnBorder:!0}),ne=z("tr",{rowBorder:!0,striped:!0,highlightOnHover:!0}),$t=z("thead",{stickyHeader:!0}),Tt=z("tbody"),Dt=z("tfoot"),kt=z("caption",{captionSide:!0});function ke({data:t}){return c.createElement(c.Fragment,null,t.caption&&c.createElement(kt,null,t.caption),t.head&&c.createElement($t,null,c.createElement(ne,null,t.head.map((e,a)=>c.createElement(Ne,{key:a},e)))),t.body&&c.createElement(Tt,null,t.body.map((e,a)=>c.createElement(ne,{key:a},e.map((r,o)=>c.createElement(Et,{key:o},r))))),t.foot&&c.createElement(Dt,null,c.createElement(ne,null,t.foot.map((e,a)=>c.createElement(Ne,{key:a},e)))))}ke.displayName="@mantine/core/TableDataRenderer";var Lr=Object.defineProperty,Yr=Object.defineProperties,Gr=Object.getOwnPropertyDescriptors,fe=Object.getOwnPropertySymbols,Bt=Object.prototype.hasOwnProperty,Rt=Object.prototype.propertyIsEnumerable,ot=(t,e,a)=>e in t?Lr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,se=(t,e)=>{for(var a in e||(e={}))Bt.call(e,a)&&ot(t,a,e[a]);if(fe)for(var a of fe(e))Rt.call(e,a)&&ot(t,a,e[a]);return t},Wr=(t,e)=>Yr(t,Gr(e)),qr=(t,e)=>{var a={};for(var r in t)Bt.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&fe)for(var r of fe(t))e.indexOf(r)<0&&Rt.call(t,r)&&(a[r]=t[r]);return a};const Ur={type:"scrollarea"},Jr=ge((t,{minWidth:e,type:a})=>({scrollContainer:{"--table-min-width":dt(e),"--table-overflow":a==="native"?"auto":void 0}})),Be=D((t,e)=>{const a=k("TableScrollContainer",Ur,t),r=a,{classNames:o,className:l,style:i,styles:n,unstyled:d,vars:b,children:h,minWidth:x,type:g}=r,f=qr(r,["classNames","className","style","styles","unstyled","vars","children","minWidth","type"]),p=L({name:"TableScrollContainer",classes:Z,props:a,className:l,style:i,classNames:o,styles:n,unstyled:d,vars:b,varsResolver:Jr,rootSelector:"scrollContainer"});return c.createElement(Y,se(se(Wr(se({component:g==="scrollarea"?Ya:"div"},g==="scrollarea"?{offsetScrollbars:"x"}:{}),{ref:e}),p("scrollContainer")),f),c.createElement("div",se({},p("scrollContainerInner")),h))});Be.classes=Z;Be.displayName="@mantine/core/TableScrollContainer";var Qr=Object.defineProperty,ve=Object.getOwnPropertySymbols,Mt=Object.prototype.hasOwnProperty,Ft=Object.prototype.propertyIsEnumerable,it=(t,e,a)=>e in t?Qr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,ct=(t,e)=>{for(var a in e||(e={}))Mt.call(e,a)&&it(t,a,e[a]);if(ve)for(var a of ve(e))Ft.call(e,a)&&it(t,a,e[a]);return t},Xr=(t,e)=>{var a={};for(var r in t)Mt.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&ve)for(var r of ve(t))e.indexOf(r)<0&&Ft.call(t,r)&&(a[r]=t[r]);return a};const Zr={withRowBorders:!0,verticalSpacing:7},es=ge((t,{layout:e,captionSide:a,horizontalSpacing:r,verticalSpacing:o,borderColor:l,stripedColor:i,highlightOnHoverColor:n,striped:d,highlightOnHover:b,stickyHeaderOffset:h,stickyHeader:x})=>({table:{"--table-layout":e,"--table-caption-side":a,"--table-horizontal-spacing":Ue(r),"--table-vertical-spacing":Ue(o),"--table-border-color":l?we(l,t):void 0,"--table-striped-color":d&&i?we(i,t):void 0,"--table-highlight-on-hover-color":b&&n?we(n,t):void 0,"--table-sticky-header-offset":x?dt(h):void 0}})),m=D((t,e)=>{const a=k("Table",Zr,t),r=a,{classNames:o,className:l,style:i,styles:n,unstyled:d,vars:b,horizontalSpacing:h,verticalSpacing:x,captionSide:g,stripedColor:f,highlightOnHoverColor:p,striped:u,highlightOnHover:w,withColumnBorders:B,withRowBorders:C,withTableBorder:E,borderColor:A,layout:R,variant:M,data:$,children:S,stickyHeader:N,stickyHeaderOffset:Re}=r,be=Xr(r,["classNames","className","style","styles","unstyled","vars","horizontalSpacing","verticalSpacing","captionSide","stripedColor","highlightOnHoverColor","striped","highlightOnHover","withColumnBorders","withRowBorders","withTableBorder","borderColor","layout","variant","data","children","stickyHeader","stickyHeaderOffset"]),ee=L({name:"Table",props:a,className:l,style:i,classes:Z,classNames:o,styles:n,unstyled:d,rootSelector:"table",vars:b,varsResolver:es});return c.createElement(Fr,{value:{getStyles:ee,stickyHeader:N,striped:u===!0?"odd":u||void 0,highlightOnHover:w,withColumnBorders:B,withRowBorders:C,captionSide:g||"bottom"}},c.createElement(Y,ct(ct({component:"table",variant:M,ref:e,mod:{"data-with-table-border":E}},ee("table")),be),S||!!$&&c.createElement(ke,{data:$})))});m.classes=Z;m.displayName="@mantine/core/Table";m.Td=Et;m.Th=Ne;m.Tr=ne;m.Thead=$t;m.Tbody=Tt;m.Tfoot=Dt;m.Caption=kt;m.ScrollContainer=Be;m.DataRenderer=ke;async function ts({params:t}){return(await X.get("/ar-service/engineer",{params:t})).data.data}function as({config:t,params:e}={}){return Ie({...t,queryKey:["engineers",e],queryFn:()=>ts({params:e}),keepPreviousData:!0})}const rs=({...t})=>{const{data:e}=as({params:{limit:5e5}}),a=Q.useMemo(()=>e?e.data.map(({id:r,name:o})=>({label:o,value:r.toString()})):[],[e]);return s.jsx(De,{...t,data:a,searchable:!0})};async function ss({data:t}){const e=new FormData;for(const[r,o]of Object.entries(t))o&&(Array.isArray(o)?typeof o[0]=="string"?o.forEach((l,i)=>{e.append(`${r}[${i}]`,l.toString())}):o.forEach((l,i)=>{for(const[n,d]of Object.entries(l))e.append(`${n}[${i}]`,d.toString())}):o instanceof Date?e.append(r,o.toJSON()):o instanceof File?e.append(r,o,o.name):e.append(r,o.toString()));return(await X.post("/ar-service/install-base",e)).data}function zt({config:t}={}){return pt(ss,{...t,onSuccess:(...e)=>{mt.invalidateQueries(["installations"]),t!=null&&t.onSuccess&&t.onSuccess(...e)}})}async function ls({params:t}){return(await X.get("/ar-service/install-base",{params:t})).data.data}function At({config:t,params:e}={}){return Ie({...t,queryKey:["installations",e],queryFn:()=>ls({params:e}),keepPreviousData:!0})}async function ns({id:t}){return(await X.get(`/ar-service/install-base/${t}`)).data.data}function os({config:t,id:e}){return Ie({...t,queryKey:["installation",e],queryFn:()=>ns({id:e})})}async function is({id:t}){return(await X.delete(`/ar-service/install-base/${t}`)).data}function cs({config:t}={}){return pt(is,{...t,onSuccess:(...e)=>{mt.invalidateQueries(["installations"]),t!=null&&t.onSuccess&&t.onSuccess(...e)}})}const ds={page:1,limit:10,search:""},ps=({toolbar:t})=>{const[e,a]=Q.useState(ds),{data:r,isLoading:o}=At({params:e}),l=cs();function i(n){return()=>{Se.openConfirmModal({title:"Hapus Install Base",children:s.jsx("div",{className:"text-sm",children:"Apakah anda yakin untuk menghapus install Base ini?"}),centered:!0,closeOnConfirm:!1,onConfirm:async()=>{await l.mutateAsync({id:n},{onSuccess:()=>{F.show({message:"Install Base berhasil dihapus",color:"green",icon:s.jsx(Wa,{})}),Se.closeAll()},onError:()=>{F.show({message:"Install Base tidak bisa dihapus",color:"red",icon:s.jsx(Da,{})}),Se.closeAll()}})}})}}return s.jsx(Ba,{title:"Tabel Data Install Base",toolbar:t,header:["#","Project Number","Nama Kegiatan","Produk","Rumah Sakit","Diperbaharui",""],items:r==null?void 0:r.data,onPageChange:n=>{a({...e,page:n})},loading:o,metadata:{count:(r==null?void 0:r.data.length)||10,limit:e.limit||10,page:e.page||10,total:(r==null?void 0:r.total)||10},renderItem:(n,d)=>s.jsxs("tr",{children:[s.jsx("td",{children:(e.limit??5)*((e.page??0)-1)+d+1}),s.jsx("td",{children:n.project_number}),s.jsx("td",{children:n.title}),s.jsx("td",{children:n.items.length>0&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"text-xs text-primary-600",children:Ra[n.items[0].product.type]}),s.jsx("div",{className:"text-sm text-gray-900",children:n.items[0].product.name}),n.items.length>1&&s.jsxs("div",{className:"text-xs text-gray-600 mt-1",children:["+ ",n.items.length-1," produk lainnya"]})]})}),s.jsx("td",{children:n.customer.name}),s.jsx("td",{children:ut(n.updatedAt).format("D MMMM YYYY H:mm")}),s.jsx("td",{children:s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx(Je,{variant:"subtle",component:K,to:`/installation/${n.id}`,title:"Detail Install Base",color:"primary",radius:"lg",children:s.jsx(za,{size:18})}),s.jsx(Ta,{role:["Superadmin","Admin"],children:s.jsx(Je,{variant:"subtle",onClick:i(n.id),title:"Hapus Install Base",color:"red",radius:"lg",children:s.jsx(Ga,{size:18})})})]})})]},n.id)})},ms=({value:t,onChange:e})=>{function a(){e([...t,{product_id:"",serial_number:"",warranty_month:""}])}function r(l){return()=>{const i=t.filter((n,d)=>d!==l);e(i)}}function o(l,i){e(t.map((n,d)=>d===l?i:n))}return s.jsxs("div",{children:[s.jsxs("div",{className:"grid grid-cols-12 gap-x-2 mb-1",children:[s.jsx("div",{className:"col-span-4 text-sm",children:"Produk"}),s.jsx("div",{className:"col-span-4 text-sm",children:"Serial Number"}),s.jsx("div",{className:"col-span-4 text-sm",children:"Masa Garansi"}),s.jsx("div",{className:"col-span-1 text-sm"})]}),t.map((l,i)=>s.jsxs("div",{className:"grid grid-cols-12 gap-x-2 gap-y-2 mb-2",children:[s.jsx(Xa,{required:!0,placeholder:"Pilih Produk",className:"col-span-4",limit:20,nothingFoundMessage:"Data tidak ditemukan",value:l.product_id,onChange:n=>{n&&o(i,{...l,product_id:n})}}),s.jsx(T,{required:!0,placeholder:"Ex : MU/23/09/001",className:"col-span-4",value:l.serial_number,onChange:n=>o(i,{...l,serial_number:n.target.value})}),s.jsx(Za,{required:!0,placeholder:"...",className:"col-span-3",hideControls:!0,value:l.warranty_month,onChange:n=>o(i,{...l,warranty_month:n}),rightSection:s.jsx("span",{className:"text-xs text-gray-600 pr-7",children:"/bulan"})}),s.jsx("div",{className:"col-span-1 flex items-center",children:s.jsx(I,{color:"red",size:"xs",variant:"light",onClick:r(i),children:"Hapus"})})]},`psf_${i}`)),s.jsx("div",{className:"col-span-12 flex justify-end",children:s.jsx(I,{leftSection:s.jsx(tr,{size:16}),variant:"subtle",size:"xs",onClick:a,children:"Tambah Produk"})})]})},us=()=>{var l;const t=Ce(),{mutateAsync:e,isLoading:a}=zt(),r=vt({initialValues:{title:"",customer_id:void 0,engineer_ids:[],installation_date:null,note:"",project_number:"",serial_number:"",warranty_month:0,file:void 0,products:[{product_id:"",serial_number:"",warranty_month:""}]}}),o=r.onSubmit(async i=>{await e({data:{...i}},{onSuccess:()=>{F.show({color:"green",message:"Install Base berhasil dibuat"}),t("/installation")},onError:({response:n})=>{r.setErrors((n==null?void 0:n.data).errors),F.show({color:"red",message:"Install Base gagal dibuat"})}})});return s.jsxs(_,{component:"form",onSubmit:o,shadow:"lg",children:[s.jsx(_.Section,{p:"lg",withBorder:!0,children:s.jsx("h2",{className:"font-semibold text-base",children:"Tambah Data Install Base"})}),s.jsxs(_.Section,{p:"lg",pt:"xs",withBorder:!0,children:[s.jsxs("div",{className:"pb-6 grid grid-cols-12 gap-x-6 gap-y-4 border-b border-gray-300",children:[s.jsx(Ma,{...r.getInputProps("installation_date"),label:"Tanggal Install",placeholder:"Pilih Tanggal",className:"col-span-6 md:col-span-3",popoverProps:{withinPortal:!0},rightSection:s.jsx(Fa,{size:16,color:"gray"}),valueFormat:"D MMMM YYYY"}),s.jsx(T,{...r.getInputProps("project_number"),label:"Project Number",placeholder:"Ex : 20392",className:"col-span-6 md:col-span-3"}),s.jsx(T,{...r.getInputProps("title"),label:"Nama Kegiatan",placeholder:"Ex : Perbaikan Alat MINDRAY xxxx",className:"col-span-12 md:col-span-6"}),s.jsx(Ua,{...r.getInputProps("customer_id"),label:"Instansi",placeholder:"Pilih Instansi",className:"col-span-12 md:col-span-12",limit:5,nothingFoundMessage:"Data tidak ditemukan"}),s.jsx(rs,{...r.getInputProps("engineer_ids"),label:"Teknisi",placeholder:"Pilih Teknisi",className:"col-span-12 md:col-span-12",limit:20,nothingFoundMessage:"Data tidak ditemukan"})]}),s.jsx("div",{className:"pt-2 pb-4 border-b border-gray-300",children:s.jsx(ms,{value:r.values.products,onChange:i=>r.setFieldValue("products",i)})}),s.jsxs("div",{className:"pt-4 grid grid-cols-12 gap-x-6 gap-y-4",children:[s.jsx("div",{className:"col-span-12",children:s.jsx(Ja,{label:"File Kegiatan",onDrop:i=>r.setFieldValue("file",i[0]||void 0),onReject:()=>F.show({message:"File tidak sesuai",color:"red"}),maxSize:5*1024**2,maxFiles:1,value:r.values.file,error:(l=r.errors.file)==null?void 0:l.toString()})}),s.jsx(er,{...r.getInputProps("note"),label:"Catatan",placeholder:"Tambahkan Catatan. . .",className:"col-span-12 md:col-span-12"})]})]}),s.jsxs(_.Section,{p:"lg",withBorder:!0,className:"flex items-center space-x-4",children:[s.jsx(I,{type:"submit",loading:a,children:"Simpan"}),s.jsx(I,{component:K,to:"/installation",variant:"light",color:"gray.6",bg:"gray.2",children:"Batal"})]})]})},Ds=()=>{const t=Ce(),{mutateAsync:e}=zt(),a=vt({initialValues:{title:"",products:[]}}),r=a.onSubmit(async o=>{await e({data:{...o}},{onSuccess:()=>{F.show({color:"green",message:"Instansi berhasil diubah"}),t("/installation")},onError:({response:l})=>{a.setErrors((l==null?void 0:l.data).errors),F.show({color:"red",message:"Instansi gagal diubah"})}})});return s.jsxs(_,{component:"form",onSubmit:r,shadow:"lg",children:[s.jsx(_.Section,{p:"lg",withBorder:!0,children:s.jsx("h2",{className:"font-semibold text-base",children:"Edit Data Instansi"})}),s.jsxs(_.Section,{p:"lg",pt:"xs",children:[s.jsxs("div",{className:"pb-6 grid grid-cols-12 gap-x-6 gap-y-4 border-b border-gray-300",children:[s.jsx(T,{...a.getInputProps("hospital_code"),label:"Kode RS",placeholder:"Ex : 20392",className:"col-span-12 md:col-span-4"}),s.jsx(T,{...a.getInputProps("name"),label:"Nama Instansi",placeholder:"Ex : RS Umum Daerah H. Sahudin Kutacane. . .",className:"col-span-12 md:col-span-8"}),s.jsx(le,{...a.getInputProps("sector"),label:"Sektor",placeholder:"Pilih Sektor",data:["Private","Public"],className:"col-span-12 md:col-span-4"}),s.jsx(le,{...a.getInputProps("classes"),label:"Kelas",placeholder:"Pilih Kelas",data:["A","B","C","D","D Pratama"],className:"col-span-12 md:col-span-4"}),s.jsx(le,{...a.getInputProps("owner"),label:"Kepemilikan",placeholder:"Pilih Kepemilikan",data:["Perorangan","Korporasi","Negara"],className:"col-span-12 md:col-span-4"})]}),s.jsxs("div",{className:"pt-4 grid grid-cols-12 gap-x-6 gap-y-4",children:[s.jsx(T,{...a.getInputProps("address"),label:"Alamat",placeholder:"Ex : Jl. Sultan Adam No. 24",className:"col-span-12 md:col-span-8"}),s.jsx(T,{...a.getInputProps("phone_number"),label:"Telepon",placeholder:"Ex : 085752140605. . .",className:"col-span-12 md:col-span-4"}),s.jsx(T,{...a.getInputProps("email"),label:"Email",placeholder:"Masukan Email",className:"col-span-12 md:col-span-6"}),s.jsx(sr,{...a.getInputProps("password"),label:"Password",placeholder:"Biarkan kosong jika tidak berubah",className:"col-span-12 md:col-span-6"})]})]}),s.jsxs(_.Section,{p:"lg",withBorder:!0,className:"flex justify-end items-center space-x-4",children:[s.jsx(I,{component:K,to:"/installation",variant:"light",color:"gray.6",bg:"gray.2",children:"Batal"}),s.jsx(I,{type:"submit",children:"Simpan"})]})]})},ks=({...t})=>{const{data:e}=At({params:{limit:5e5}}),a=Q.useMemo(()=>e?e.data.map(({id:r,title:o,project_number:l})=>({label:`${o} (${l})`,value:r.toString()})):[],[e]);return s.jsx(le,{...t,data:a,searchable:!0})},Bs=()=>s.jsxs("main",{children:[s.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[s.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Data Install Base"}),s.jsx(I,{component:K,to:"/installation/create",children:"Tambah"})]}),s.jsx("section",{className:"mb-8",children:s.jsx(ps,{})})]}),Rs=()=>s.jsxs("main",{children:[s.jsx("div",{className:"mb-4 flex items-center justify-between",children:s.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Data Install Base"})}),s.jsx(us,{})]}),Ms=()=>{const{id:t}=ka(),{data:e,isLoading:a,isError:r}=os({id:t}),o=Ce();return a?s.jsx("div",{className:"mt-48",children:s.jsx(qa,{})}):r?s.jsxs("div",{className:"mt-48 text-center",children:[s.jsx("h1",{className:"text-lg font-bold mb-2",children:"Install base tidak ditemukan"}),s.jsx(I,{onClick:()=>o(-1),leftSection:s.jsx(ar,{size:14}),children:"Kembali"})]}):s.jsxs("main",{children:[s.jsx("div",{className:"mb-4 flex items-center justify-between",children:s.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Detail Install Base"})}),s.jsxs(_,{shadow:"lg",children:[s.jsx(_.Section,{p:"lg",withBorder:!0,children:s.jsxs("h2",{className:"font-semibold text-base",children:["Instalasi Alat Rumah Sakit (",e.project_number,")"]})}),s.jsxs(_.Section,{p:"lg",withBorder:!0,children:[s.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[s.jsxs("div",{className:"",children:[s.jsx("div",{className:"text-xs text-gray-600",children:"Project Number"}),s.jsx("div",{className:"font-bold text-sm text-gray-900",children:e.project_number})]}),s.jsxs("div",{className:"",children:[s.jsx("div",{className:"text-xs text-gray-600",children:"Nama Kegiatan"}),s.jsx("div",{className:"font-bold text-sm text-gray-900",children:e.title})]}),s.jsxs("div",{className:"",children:[s.jsx("div",{className:"text-xs text-gray-600",children:"Instansi"}),s.jsx("div",{className:"font-bold text-sm text-gray-900",children:e.customer.name})]}),s.jsxs("div",{className:"",children:[s.jsx("div",{className:"text-xs text-gray-600",children:"Tanggal Install"}),s.jsx("div",{className:"font-bold text-sm text-gray-900",children:e.installation_date})]}),s.jsxs("div",{className:"",children:[s.jsx("div",{className:"text-xs text-gray-600",children:"Teknisi"}),s.jsx("div",{className:"font-bold text-sm text-gray-900",children:e.technical_contract.engineers.map(({name:l})=>l).join(", ")})]}),s.jsxs("div",{className:"",children:[s.jsx("div",{className:"text-xs text-gray-600",children:"File"}),s.jsx("div",{className:"font-bold text-sm text-gray-900",children:e.file?s.jsxs(K,{to:e.file,target:"_blank",className:"flex items-center text-sm text-primary-600 line-clamp-1",children:[s.jsx(rr,{size:16,className:"flex-shrink-0"}),s.jsx("span",{className:"ml-2",children:"View/Download"})]}):"-"})]})]}),s.jsxs(m,{withColumnBorders:!0,withRowBorders:!0,withTableBorder:!0,children:[s.jsx(m.Thead,{children:s.jsxs(m.Tr,{children:[s.jsx(m.Th,{children:"#"}),s.jsx(m.Th,{children:"Serial Number"}),s.jsx(m.Th,{children:"Nama Alat"}),s.jsx(m.Th,{children:"Merek"}),s.jsx(m.Th,{children:"Masa Garansi"}),s.jsx(m.Th,{children:"Waktu Preventive"})]})}),s.jsx(m.Tbody,{children:e.items.map((l,i)=>{var n;return s.jsxs(m.Tr,{children:[s.jsx(m.Td,{children:i+1}),s.jsx(m.Td,{children:l.serial_number}),s.jsx(m.Td,{children:l.product.name}),s.jsx(m.Td,{children:((n=l.product.brand)==null?void 0:n.name)??"[Tanpa Merk]"}),s.jsxs(m.Td,{children:[l.warranty_month," Bulan"]}),s.jsx(m.Td,{children:ut(e.installation_date).add(l.warranty_month,"M").format("dddd, D MMMM YYYY")})]},l.id)})})]})]}),s.jsx(_.Section,{p:"lg",withBorder:!0,children:s.jsx(I,{component:K,to:"/installation",variant:"light",color:"gray.6",bg:"gray.2",children:"Kembali"})})]})]})};export{Rs as InstallationCreate,us as InstallationCreateForm,Ms as InstallationDetail,ks as InstallationSelect,ps as InstallationTable,Ds as InstallationUpdateForm,Bs as Installations,As as ItemSelect};
