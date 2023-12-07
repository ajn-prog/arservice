import{w as H,x as U,D as ie,R as p,K as ge,H as We,J as Z,M as la,N as ia,O as oa,r as T,y as ca,F as da,z as Te,E as pa,e as ve,a as z,j as t,u as be,q as ee,i as je,f as he,L as C,b as fe,t as xe,n as O,I as ua,B as w,p as oe,v as He}from"./index-15cc4b60.js";import{A as ye}from"./AgencySelect-a67e4372.js";import{T as ma}from"./Table-bfb7e2c0.js";import{P as ha,T as Ue}from"./index-237556c3.js";import{I as xa}from"./IconEye-b622bbb6.js";import{I as fa}from"./IconEdit-b35c3a80.js";import{I as ga,a as va,u as ba,L as Qe}from"./LoadingScreen-275dc7b0.js";import{c as Je,u as ja,a as Xe,T as M}from"./TextInput-a9e8a48e.js";import{I as ya}from"./IconSearch-c34654f9.js";import{I as _a}from"./IconCategory-849c8102.js";import{F as Ze}from"./FileDropzone-fefc4d8c.js";import{i as Pa,g as Sa,a as wa,u as Na,b as F,O as Ia,C as v,S as Oa}from"./Select-68f44f7f.js";import{P as Da}from"./ProductSelect-965f7976.js";import{N as Ca}from"./NumberInput-b02f7021.js";import{I as Ea}from"./IconPlus-e24e7207.js";import{u as et}from"./use-form-98da07b6.js";import{D as tt,I as at}from"./DateInput-ad5130c5.js";import{I as st}from"./IconArrowLeft-7aac00e2.js";import{I as ka}from"./ItemSelect-a4d2e812.js";import{a as ar}from"./ItemSelect-a4d2e812.js";import{T as h}from"./Table-babb1ed3.js";import"./LoadingOverlay-ffdc4a11.js";import"./IconPhoto-91c3058a.js";import"./ScrollArea-a044258c.js";function $a({data:e,value:a}){const s=a.map(n=>n.trim().toLowerCase());return e.reduce((n,l)=>(Pa(l)?n.push({group:l.group,items:l.items.filter(c=>s.indexOf(c.value.toLowerCase().trim())===-1)}):s.indexOf(l.value.toLowerCase().trim())===-1&&n.push(l),n),[])}const[Ba,Fa]=Je(),[Ma,_e]=Je();var Ta={root:"m-7cda1cd6","root--default":"m-44da308b","root--contrast":"m-e3a01f8",label:"m-1e0e6180",remove:"m-ae386778",group:"m-1dcfd90b"};const ce=Ta;var za=Object.defineProperty,te=Object.getOwnPropertySymbols,rt=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable,ze=(e,a,s)=>a in e?za(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,Re=(e,a)=>{for(var s in a||(a={}))rt.call(a,s)&&ze(e,s,a[s]);if(te)for(var s of te(a))nt.call(a,s)&&ze(e,s,a[s]);return e},Ra=(e,a)=>{var s={};for(var r in e)rt.call(e,r)&&a.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&te)for(var r of te(e))a.indexOf(r)<0&&nt.call(e,r)&&(s[r]=e[r]);return s};const Va={},Aa=We((e,{gap:a},{size:s})=>({group:{"--pg-gap":a!==void 0?Z(a):Z(s,"pg-gap")}})),Pe=H((e,a)=>{const s=U("PillGroup",Va,e),r=s,{classNames:n,className:l,style:c,styles:i,unstyled:o,vars:b,size:f,disabled:_}=r,P=Ra(r,["classNames","className","style","styles","unstyled","vars","size","disabled"]),g=_e(),d=(g==null?void 0:g.size)||f||void 0,u=ie({name:"PillGroup",classes:ce,props:s,className:l,style:c,classNames:n,styles:i,unstyled:o,vars:b,varsResolver:Aa,stylesCtx:{size:d},rootSelector:"group"});return p.createElement(Ba,{value:{size:d,disabled:_}},p.createElement(ge,Re(Re({ref:a,size:d},u("group")),P)))});Pe.classes=ce;Pe.displayName="@mantine/core/PillGroup";var Ya=Object.defineProperty,Ka=Object.defineProperties,La=Object.getOwnPropertyDescriptors,ae=Object.getOwnPropertySymbols,lt=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable,Ve=(e,a,s)=>a in e?Ya(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,q=(e,a)=>{for(var s in a||(a={}))lt.call(a,s)&&Ve(e,s,a[s]);if(ae)for(var s of ae(a))it.call(a,s)&&Ve(e,s,a[s]);return e},Ae=(e,a)=>Ka(e,La(a)),qa=(e,a)=>{var s={};for(var r in e)lt.call(e,r)&&a.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&ae)for(var r of ae(e))a.indexOf(r)<0&&it.call(e,r)&&(s[r]=e[r]);return s};const Ga={variant:"default"},Wa=We((e,{radius:a},{size:s})=>({root:{"--pill-fz":Z(s,"pill-fz"),"--pill-height":Z(s,"pill-height"),"--pill-radius":a===void 0?void 0:ia(a)}})),W=H((e,a)=>{const s=U("Pill",Ga,e),r=s,{classNames:n,className:l,style:c,styles:i,unstyled:o,vars:b,variant:f,children:_,withRemoveButton:P,onRemove:g,removeButtonProps:d,radius:u,size:N,disabled:R}=r,E=qa(r,["classNames","className","style","styles","unstyled","vars","variant","children","withRemoveButton","onRemove","removeButtonProps","radius","size","disabled"]),k=Fa(),V=_e(),$=N||(k==null?void 0:k.size)||void 0,A=(V==null?void 0:V.variant)==="filled"?"contrast":f||"default",Y=ie({name:"Pill",classes:ce,props:s,className:l,style:c,classNames:n,styles:i,unstyled:o,vars:b,varsResolver:Wa,stylesCtx:{size:$}});return p.createElement(ge,q(Ae(q({component:"span",ref:a,variant:A,size:$},Y("root",{variant:A})),{mod:{"with-remove":P,disabled:R||(k==null?void 0:k.disabled)}}),E),p.createElement("span",q({},Y("label")),_),P&&p.createElement(la,Ae(q(q({variant:"transparent",radius:u,tabIndex:-1,"aria-hidden":!0,unstyled:o},d),Y("remove",{className:d==null?void 0:d.className,style:d==null?void 0:d.style})),{onMouseDown:I=>{var D;I.preventDefault(),I.stopPropagation(),(D=d==null?void 0:d.onMouseDown)==null||D.call(d,I)},onClick:I=>{var D;I.stopPropagation(),g==null||g(),(D=d==null?void 0:d.onClick)==null||D.call(d,I)}})))});W.classes=ce;W.displayName="@mantine/core/Pill";W.Group=Pe;var Ha={field:"m-45c4369d"};const ot=Ha;var Ua=Object.defineProperty,Qa=Object.defineProperties,Ja=Object.getOwnPropertyDescriptors,se=Object.getOwnPropertySymbols,ct=Object.prototype.hasOwnProperty,dt=Object.prototype.propertyIsEnumerable,Ye=(e,a,s)=>a in e?Ua(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,Ke=(e,a)=>{for(var s in a||(a={}))ct.call(a,s)&&Ye(e,s,a[s]);if(se)for(var s of se(a))dt.call(a,s)&&Ye(e,s,a[s]);return e},Xa=(e,a)=>Qa(e,Ja(a)),Za=(e,a)=>{var s={};for(var r in e)ct.call(e,r)&&a.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&se)for(var r of se(e))a.indexOf(r)<0&&dt.call(e,r)&&(s[r]=e[r]);return s};const es={type:"visible"},Se=H((e,a)=>{const s=U("PillsInputField",es,e),r=s,{classNames:n,className:l,style:c,styles:i,unstyled:o,vars:b,type:f,disabled:_,id:P,pointer:g}=r,d=Za(r,["classNames","className","style","styles","unstyled","vars","type","disabled","id","pointer"]),u=_e(),N=ja(),R=ie({name:"PillsInputField",classes:ot,props:s,className:l,style:c,classNames:n,styles:i,unstyled:o,rootSelector:"field"}),E=_||(u==null?void 0:u.disabled);return p.createElement(ge,Xa(Ke(Ke({component:"input",ref:oa(a,u==null?void 0:u.fieldRef),"data-type":f,disabled:E,mod:{disabled:E,pointer:g}},R("field")),d),{id:(N==null?void 0:N.inputId)||P,"aria-invalid":u==null?void 0:u.hasError,"aria-describedby":N==null?void 0:N.describedBy}))});Se.classes=ot;Se.displayName="@mantine/core/PillsInputField";var ts=Object.defineProperty,as=Object.defineProperties,ss=Object.getOwnPropertyDescriptors,re=Object.getOwnPropertySymbols,pt=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable,Le=(e,a,s)=>a in e?ts(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,rs=(e,a)=>{for(var s in a||(a={}))pt.call(a,s)&&Le(e,s,a[s]);if(re)for(var s of re(a))ut.call(a,s)&&Le(e,s,a[s]);return e},ns=(e,a)=>as(e,ss(a)),ls=(e,a)=>{var s={};for(var r in e)pt.call(e,r)&&a.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&re)for(var r of re(e))a.indexOf(r)<0&&ut.call(e,r)&&(s[r]=e[r]);return s};const is={},ne=H((e,a)=>{const r=U("PillsInput",is,e),{children:n,onMouseDown:l,onClick:c,size:i,disabled:o,__staticSelector:b,error:f,variant:_}=r,P=ls(r,["children","onMouseDown","onClick","size","disabled","__staticSelector","error","variant"]),g=T.useRef();return p.createElement(Ma,{value:{fieldRef:g,size:i,disabled:o,hasError:!!f,variant:_}},p.createElement(Xe,ns(rs({size:i,error:f,variant:_,component:"div",ref:a,onMouseDown:d=>{var u;d.preventDefault(),l==null||l(d),(u=g.current)==null||u.focus()},onClick:d=>{var u;d.preventDefault(),c==null||c(d),(u=g.current)==null||u.focus()}},P),{multiline:!0,disabled:o,__staticSelector:b||"PillsInput",withAria:!1}),n))});ne.displayName="@mantine/core/PillsInput";ne.Field=Se;var os=Object.defineProperty,cs=Object.defineProperties,ds=Object.getOwnPropertyDescriptors,le=Object.getOwnPropertySymbols,mt=Object.prototype.hasOwnProperty,ht=Object.prototype.propertyIsEnumerable,qe=(e,a,s)=>a in e?os(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,y=(e,a)=>{for(var s in a||(a={}))mt.call(a,s)&&qe(e,s,a[s]);if(le)for(var s of le(a))ht.call(a,s)&&qe(e,s,a[s]);return e},G=(e,a)=>cs(e,ds(a)),Ge=(e,a)=>{var s={};for(var r in e)mt.call(e,r)&&a.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&le)for(var r of le(e))a.indexOf(r)<0&&ht.call(e,r)&&(s[r]=e[r]);return s};const ps={maxValues:1/0,withCheckIcon:!0,checkIconPosition:"left"},we=H((e,a)=>{const s=U("MultiSelect",ps,e),r=s,{classNames:n,className:l,style:c,styles:i,unstyled:o,vars:b,size:f,value:_,defaultValue:P,onChange:g,onKeyDown:d,variant:u,data:N,dropdownOpened:R,defaultDropdownOpened:E,onDropdownOpen:k,onDropdownClose:V,selectFirstOptionOnChange:$,onOptionSubmit:A,comboboxProps:Y,filter:I,limit:D,withScrollArea:bt,maxDropdownHeight:jt,searchValue:yt,defaultSearchValue:_t,onSearchChange:Pt,readOnly:K,disabled:B,onFocus:Ne,onBlur:Ie,onPaste:ws,radius:St,rightSection:wt,rightSectionWidth:Nt,rightSectionPointerEvents:It,rightSectionProps:Ot,leftSection:Dt,leftSectionWidth:Ct,leftSectionPointerEvents:Et,leftSectionProps:kt,inputContainer:$t,inputWrapperOrder:Bt,withAsterisk:Ft,labelProps:Mt,descriptionProps:Tt,errorProps:zt,wrapperProps:Rt,description:Vt,label:At,error:Oe,maxValues:Yt,searchable:S,nothingFoundMessage:De,withCheckIcon:Kt,checkIconPosition:Lt,hidePickedOptions:Ce,withErrorStyles:qt,name:Gt,form:Wt,id:Ht,clearable:Ut,clearButtonProps:Qt,hiddenInputProps:Jt,placeholder:Ee}=r,Xt=Ge(r,["classNames","className","style","styles","unstyled","vars","size","value","defaultValue","onChange","onKeyDown","variant","data","dropdownOpened","defaultDropdownOpened","onDropdownOpen","onDropdownClose","selectFirstOptionOnChange","onOptionSubmit","comboboxProps","filter","limit","withScrollArea","maxDropdownHeight","searchValue","defaultSearchValue","onSearchChange","readOnly","disabled","onFocus","onBlur","onPaste","radius","rightSection","rightSectionWidth","rightSectionPointerEvents","rightSectionProps","leftSection","leftSectionWidth","leftSectionPointerEvents","leftSectionProps","inputContainer","inputWrapperOrder","withAsterisk","labelProps","descriptionProps","errorProps","wrapperProps","description","label","error","maxValues","searchable","nothingFoundMessage","withCheckIcon","checkIconPosition","hidePickedOptions","withErrorStyles","name","form","id","clearable","clearButtonProps","hiddenInputProps","placeholder"]),de=ca(Ht),pe=Sa(N),Q=wa(pe),j=Na({opened:R,defaultOpened:E,onDropdownOpen:k,onDropdownClose:()=>{V==null||V(),j.resetSelectedOption()}}),{styleProps:Zt,rest:ea}=da(Xt),ta=ea,aa=Ge(ta,["type"]),[x,L]=Te({value:_,defaultValue:P,finalValue:[],onChange:g}),[J,X]=Te({value:yt,defaultValue:_t,finalValue:"",onChange:Pt}),ue=ie({name:"MultiSelect",classes:{},props:s,classNames:n,styles:i,unstyled:o}),{resolvedClassNames:ke,resolvedStyles:$e}=pa({props:s,styles:i,classNames:n}),sa=m=>{d==null||d(m),m.key==="Backspace"&&J.length===0&&x.length>0&&L(x.slice(0,x.length-1))},ra=x.map((m,me)=>{var Me;return p.createElement(W,y({key:`${m}-${me}`,withRemoveButton:!K,onRemove:()=>L(x.filter(na=>m!==na)),unstyled:o},ue("pill")),((Me=Q[m])==null?void 0:Me.label)||m)});T.useEffect(()=>{$&&j.selectFirstOption()},[$,x]);const Be=Ut&&x.length>0&&!B&&!K&&p.createElement(F.ClearButton,G(y({size:f},Qt),{onClear:()=>{L([]),X("")}})),Fe=$a({data:pe,value:x});return p.createElement(p.Fragment,null,p.createElement(F,y({store:j,classNames:ke,styles:$e,unstyled:o,size:f,readOnly:K,__staticSelector:"MultiSelect",onOptionSubmit:m=>{A==null||A(m),X(""),j.updateSelectedOptionIndex("selected"),x.includes(Q[m].value)?L(x.filter(me=>me!==Q[m].value)):x.length<Yt&&L([...x,Q[m].value])}},Y),p.createElement(F.DropdownTarget,null,p.createElement(ne,G(y({},Zt),{__staticSelector:"MultiSelect",classNames:ke,styles:$e,unstyled:o,size:f,className:l,style:c,variant:u,disabled:B,radius:St,rightSection:wt||Be||p.createElement(F.Chevron,{size:f,error:Oe,unstyled:o}),rightSectionPointerEvents:It||Be?"all":"none",rightSectionWidth:Nt,rightSectionProps:Ot,leftSection:Dt,leftSectionWidth:Ct,leftSectionPointerEvents:Et,leftSectionProps:kt,inputContainer:$t,inputWrapperOrder:Bt,withAsterisk:Ft,labelProps:Mt,descriptionProps:Tt,errorProps:zt,wrapperProps:Rt,description:Vt,label:At,error:Oe,multiline:!0,withErrorStyles:qt,__stylesApiProps:G(y({},s),{multiline:!0}),pointer:!S,onClick:()=>S?j.openDropdown():j.toggleDropdown(),id:de}),p.createElement(W.Group,y({disabled:B,unstyled:o},ue("pillsList")),ra,p.createElement(F.EventsTarget,null,p.createElement(ne.Field,G(y(G(y({},aa),{ref:a,id:de,placeholder:Ee,type:!S&&!Ee?"hidden":"visible"}),ue("inputField")),{unstyled:o,onFocus:m=>{Ne==null||Ne(m),S&&j.openDropdown()},onBlur:m=>{Ie==null||Ie(m),j.closeDropdown(),S&&j.closeDropdown(),X("")},onKeyDown:sa,value:J,onChange:m=>{X(m.currentTarget.value),S&&j.openDropdown(),$&&j.selectFirstOption()},disabled:B,readOnly:K||!S,pointer:!S})))))),p.createElement(Ia,{data:Ce?Fe:pe,hidden:K||B,filter:I,search:J,limit:D,hiddenWhenEmpty:!S||!De||Ce&&Fe.length===0&&J.trim().length===0,withScrollArea:bt,maxDropdownHeight:jt,filterOptions:S,value:x,checkIconPosition:Lt,withCheckIcon:Kt,nothingFoundMessage:De,unstyled:o,labelId:`${de}-label`})),p.createElement("input",y({type:"hidden",name:Gt,value:x.join(","),form:Wt,disabled:B},Jt)))});we.classes=y(y({},Xe.classes),F.classes);we.displayName="@mantine/core/MultiSelect";async function us({params:e}){return(await z.get("/ar-service/engineer",{params:e})).data.data}function ms({config:e,params:a}={}){return ve({...e,queryKey:["engineers",a],queryFn:()=>us({params:a}),keepPreviousData:!0})}const xt=({...e})=>{const{data:a}=ms({params:{limit:5e5}}),s=T.useMemo(()=>a?a.data.map(({id:r,name:n})=>({label:n,value:r.toString()})):[],[a]);return t.jsx(we,{...e,data:s,searchable:!0})};async function hs({data:e}){const a=new FormData;for(const[r,n]of Object.entries(e))n&&(Array.isArray(n)?typeof n[0]=="string"?n.forEach((l,c)=>{a.append(`${r}[${c}]`,l.toString())}):n.forEach((l,c)=>{for(const[i,o]of Object.entries(l))a.append(`${i}[${c}]`,o.toString())}):n instanceof Date?a.append(r,n.toJSON()):n instanceof File?a.append(r,n,n.name):a.append(r,n.toString()));return(await z.post("/ar-service/install-base",a)).data}function xs({config:e}={}){return be(hs,{...e,onSuccess:(...a)=>{ee.invalidateQueries(["installations"]),e!=null&&e.onSuccess&&e.onSuccess(...a)}})}async function fs({params:e}){return(await z.get("/ar-service/install-base",{params:e})).data.data}function ft({config:e,params:a}={}){return ve({...e,queryKey:["installations",a],queryFn:()=>fs({params:a}),keepPreviousData:!0})}async function gs({id:e}){return(await z.get(`/ar-service/install-base/${e}`)).data.data}function gt({config:e,id:a}){return ve({...e,queryKey:["installation",a],queryFn:()=>gs({id:a})})}async function vs({id:e,data:a}){const s=new FormData;for(const[n,l]of Object.entries(a))l&&(Array.isArray(l)?typeof l[0]=="string"?l.forEach((c,i)=>{s.append(`${n}[${i}]`,c.toString())}):l.forEach((c,i)=>{for(const[o,b]of Object.entries(c))s.append(`${o}[${i}]`,b.toString())}):l instanceof Date?s.append(n,l.toJSON()):l instanceof File?s.append(n,l,l.name):s.append(n,l.toString()));return(await z.post(`/ar-service/install-base/${e}`,s)).data}function bs({config:e}={}){return be(vs,{...e,onSuccess:(...a)=>{ee.invalidateQueries(["installations"]),ee.invalidateQueries(["installation"]),e!=null&&e.onSuccess&&e.onSuccess(...a)}})}async function js({id:e}){return(await z.delete(`/ar-service/install-base/${e}`)).data}function ys({config:e}={}){return be(js,{...e,onSuccess:(...a)=>{ee.invalidateQueries(["installations"]),e!=null&&e.onSuccess&&e.onSuccess(...a)}})}const _s=({toolbar:e,...a})=>{const[s,r]=T.useState({page:1,limit:10,search:""}),{data:n,isLoading:l}=ft({params:{...s,...a}}),c=ys();function i(o){return()=>{xe.openConfirmModal({title:"Hapus Install Base",children:t.jsx("div",{className:"text-sm",children:"Apakah anda yakin untuk menghapus install Base ini?"}),centered:!0,onConfirm:async()=>{await c.mutateAsync({id:o},{onSuccess:()=>{O.show({message:"Install Base berhasil dihapus",color:"green",icon:t.jsx(va,{})}),xe.closeAll()},onError:()=>{O.show({message:"Install Base tidak bisa dihapus",color:"red",icon:t.jsx(ua,{})}),xe.closeAll()}})}})}}return t.jsx(ma,{title:"Tabel Data Install Base",toolbar:e,header:["#","Project Number","Nama Kegiatan","Produk","Rumah Sakit","Diperbaharui",""],items:n==null?void 0:n.data,onPageChange:o=>{r({...s,page:o})},loading:l,metadata:{count:(n==null?void 0:n.data.length)||10,limit:s.limit||10,page:s.page||10,total:(n==null?void 0:n.total)||10},renderItem:(o,b)=>t.jsxs("tr",{children:[t.jsx("td",{children:(s.limit??5)*((s.page??0)-1)+b+1}),t.jsx("td",{children:o.project_number}),t.jsx("td",{children:o.title}),t.jsx("td",{children:o.items.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-xs text-primary-600",children:ha[o.items[0].product.type]}),t.jsx("div",{className:"text-sm text-gray-900",children:o.items[0].product.name}),o.items.length>1&&t.jsxs("div",{className:"text-xs text-gray-600 mt-1",children:["+ ",o.items.length-1," produk lainnya"]})]})}),t.jsx("td",{children:o.customer.name}),t.jsx("td",{children:je(o.updated_at).format("D MMMM YYYY H:mm")}),t.jsx("td",{children:t.jsxs("div",{className:"flex items-center space-x-2",children:[t.jsx(he,{variant:"subtle",component:C,to:`/installation/${o.id}`,title:"Detail Install Base",color:"gray",radius:"lg",children:t.jsx(xa,{size:18})}),t.jsx(fe,{role:["-Customer"],children:t.jsxs(t.Fragment,{children:[t.jsx(he,{variant:"subtle",title:"Update Install Base",color:"primary",radius:"lg",component:C,to:`/installation/${o.id}/update`,children:t.jsx(fa,{size:18})}),t.jsx(he,{variant:"subtle",onClick:i(o.id),title:"Hapus Install Base",color:"red",radius:"lg",children:t.jsx(ga,{size:18})})]})})]})})]},o.id)})},vt=({value:e,onChange:a})=>{function s(){a([...e,{product_id:"",serial_number:"",warranty_month:""}])}function r(l){return()=>{const c=e.filter((i,o)=>o!==l);a(c)}}function n(l,c){a(e.map((i,o)=>o===l?c:i))}return t.jsxs("div",{children:[t.jsxs("div",{className:"grid grid-cols-12 gap-x-2 mb-1",children:[t.jsx("div",{className:"col-span-4 text-sm",children:"Produk"}),t.jsx("div",{className:"col-span-4 text-sm",children:"Serial Number"}),t.jsx("div",{className:"col-span-4 text-sm",children:"Masa Garansi"}),t.jsx("div",{className:"col-span-1 text-sm"})]}),e.map((l,c)=>t.jsxs("div",{className:"grid grid-cols-12 gap-x-2 gap-y-2 mb-2",children:[t.jsx(Da,{required:!0,placeholder:"Pilih Produk",className:"col-span-4",limit:20,nothingFoundMessage:"Data tidak ditemukan",value:l.product_id,onChange:i=>{i&&n(c,{...l,product_id:i})}}),t.jsx(M,{required:!0,placeholder:"Ex : MU/23/09/001",className:"col-span-4",value:l.serial_number,onChange:i=>n(c,{...l,serial_number:i.target.value})}),t.jsx(Ca,{required:!0,placeholder:"...",className:"col-span-3",hideControls:!0,value:l.warranty_month,onChange:i=>n(c,{...l,warranty_month:i}),rightSection:t.jsx("span",{className:"text-xs text-gray-600 pr-7",children:"/bulan"})}),t.jsx("div",{className:"col-span-1 flex items-center",children:t.jsx(w,{color:"red",size:"xs",variant:"light",onClick:r(c),children:"Hapus"})})]},`psf_${c}`)),t.jsx("div",{className:"col-span-12 flex justify-end",children:t.jsx(w,{leftSection:t.jsx(Ea,{size:16}),variant:"subtle",size:"xs",onClick:s,children:"Tambah Produk"})})]})},Ps=()=>{var l;const e=oe(),{mutateAsync:a,isLoading:s}=xs(),r=et({initialValues:{title:"",customer_id:void 0,engineer_ids:[],installation_date:null,note:"",project_number:"",file:void 0,products:[{product_id:"",serial_number:"",warranty_month:""}]}}),n=r.onSubmit(async c=>{await a({data:{...c}},{onSuccess:()=>{O.show({color:"green",message:"Install Base berhasil dibuat"}),e("/installation")},onError:({response:i})=>{r.setErrors((i==null?void 0:i.data).errors),O.show({color:"red",message:"Install Base gagal dibuat"})}})});return t.jsxs(v,{component:"form",onSubmit:n,shadow:"lg",children:[t.jsx(v.Section,{p:"lg",withBorder:!0,children:t.jsx("h2",{className:"font-semibold text-base",children:"Tambah Data Install Base"})}),t.jsxs(v.Section,{p:"lg",pt:"xs",withBorder:!0,children:[t.jsxs("div",{className:"pb-6 grid grid-cols-12 gap-x-6 gap-y-4 border-b border-gray-300",children:[t.jsx(tt,{...r.getInputProps("installation_date"),label:"Tanggal Install",placeholder:"Pilih Tanggal",className:"col-span-6 md:col-span-3",popoverProps:{withinPortal:!0},rightSection:t.jsx(at,{size:16,color:"gray"}),valueFormat:"D MMMM YYYY"}),t.jsx(M,{...r.getInputProps("project_number"),label:"Project Number",placeholder:"Ex : 20392",className:"col-span-6 md:col-span-3"}),t.jsx(M,{...r.getInputProps("title"),label:"Nama Kegiatan",placeholder:"Ex : Perbaikan Alat MINDRAY xxxx",className:"col-span-12 md:col-span-6"}),t.jsx(ye,{...r.getInputProps("customer_id"),label:"Instansi",placeholder:"Pilih Instansi",className:"col-span-12 md:col-span-12",limit:5,nothingFoundMessage:"Data tidak ditemukan"}),t.jsx(xt,{...r.getInputProps("engineer_ids"),label:"Teknisi",placeholder:"Pilih Teknisi",className:"col-span-12 md:col-span-12",limit:20,nothingFoundMessage:"Data tidak ditemukan"})]}),t.jsx("div",{className:"pt-2 pb-4 border-b border-gray-300",children:t.jsx(vt,{value:r.values.products,onChange:c=>r.setFieldValue("products",c)})}),t.jsxs("div",{className:"pt-4 grid grid-cols-12 gap-x-6 gap-y-4",children:[t.jsx("div",{className:"col-span-12",children:t.jsx(Ze,{label:"File Kegiatan",onDrop:c=>r.setFieldValue("file",c[0]||void 0),onReject:()=>O.show({message:"File tidak sesuai",color:"red"}),maxSize:5*1024**2,maxFiles:1,value:r.values.file,error:(l=r.errors.file)==null?void 0:l.toString()})}),t.jsx(Ue,{...r.getInputProps("note"),label:"Catatan",placeholder:"Tambahkan Catatan. . .",className:"col-span-12 md:col-span-12"})]})]}),t.jsxs(v.Section,{p:"lg",withBorder:!0,className:"flex items-center space-x-4",children:[t.jsx(w,{type:"submit",loading:s,children:"Simpan"}),t.jsx(w,{component:C,to:"/installation",variant:"light",color:"gray.6",bg:"gray.2",children:"Batal"})]})]})},Ss=({installation:e})=>{var c;const a=oe(),{mutateAsync:s,isLoading:r}=bs(),n=et({initialValues:{title:e.title,customer_id:e.customer_id.toString(),engineer_ids:e.technical_contract.engineers.map(({id:i})=>i.toString()),installation_date:je(e.installation_date,"YYYY-MM-DD").toDate(),note:e.note||"",project_number:e.project_number,file:void 0,products:e.items.map(i=>({product_id:i.product_id.toString(),serial_number:i.serial_number.toString(),warranty_month:i.warranty_month.toString()}))}}),l=n.onSubmit(async i=>{await s({id:e.id,data:{...i}},{onSuccess:()=>{O.show({color:"green",message:"Install Base berhasil diubah"}),a("/installation")},onError:({response:o})=>{n.setErrors((o==null?void 0:o.data).errors),O.show({color:"red",message:"Install Base gagal diubah"})}})});return t.jsxs(v,{component:"form",onSubmit:l,shadow:"lg",children:[t.jsx(v.Section,{p:"lg",withBorder:!0,children:t.jsx("h2",{className:"font-semibold text-base",children:"Edit Data Install Base"})}),t.jsxs(v.Section,{p:"lg",pt:"xs",withBorder:!0,children:[t.jsxs("div",{className:"pb-6 grid grid-cols-12 gap-x-6 gap-y-4 border-b border-gray-300",children:[t.jsx(tt,{...n.getInputProps("installation_date"),label:"Tanggal Install",placeholder:"Pilih Tanggal",className:"col-span-6 md:col-span-3",popoverProps:{withinPortal:!0},rightSection:t.jsx(at,{size:16,color:"gray"}),valueFormat:"D MMMM YYYY"}),t.jsx(M,{...n.getInputProps("project_number"),label:"Project Number",placeholder:"Ex : 20392",className:"col-span-6 md:col-span-3"}),t.jsx(M,{...n.getInputProps("title"),label:"Nama Kegiatan",placeholder:"Ex : Perbaikan Alat MINDRAY xxxx",className:"col-span-12 md:col-span-6"}),t.jsx(ye,{...n.getInputProps("customer_id"),label:"Instansi",placeholder:"Pilih Instansi",className:"col-span-12 md:col-span-12",nothingFoundMessage:"Data tidak ditemukan"}),t.jsx(xt,{...n.getInputProps("engineer_ids"),label:"Teknisi",placeholder:"Pilih Teknisi",className:"col-span-12 md:col-span-12",limit:20,nothingFoundMessage:"Data tidak ditemukan"})]}),t.jsx("div",{className:"pt-2 pb-4 border-b border-gray-300",children:t.jsx(vt,{value:n.values.products,onChange:i=>n.setFieldValue("products",i)})}),t.jsxs("div",{className:"pt-4 grid grid-cols-12 gap-x-6 gap-y-4",children:[t.jsx("div",{className:"col-span-12",children:t.jsx(Ze,{label:"File Kegiatan",onDrop:i=>n.setFieldValue("file",i[0]||void 0),onReject:()=>O.show({message:"File tidak sesuai",color:"red"}),maxSize:5*1024**2,maxFiles:1,value:n.values.file,error:(c=n.errors.file)==null?void 0:c.toString()})}),t.jsx(Ue,{...n.getInputProps("note"),label:"Catatan",placeholder:"Tambahkan Catatan. . .",className:"col-span-12 md:col-span-12"})]})]}),t.jsxs(v.Section,{p:"lg",withBorder:!0,className:"flex items-center space-x-4",children:[t.jsx(w,{type:"submit",loading:r,children:"Simpan"}),t.jsx(w,{component:C,to:"/installation",variant:"light",color:"gray.6",bg:"gray.2",children:"Batal"})]})]})},Us=({...e})=>{const{data:a}=ft({params:{limit:5e5}}),s=T.useMemo(()=>a?a.data.map(({id:r,title:n,project_number:l})=>({label:`${n} (${l})`,value:r.toString()})):[],[a]);return t.jsx(Oa,{...e,data:s,searchable:!0})},Qs=()=>{var r;const[e,a]=T.useState({search:"",limit:10}),[s]=ba(e,200);return t.jsxs("main",{children:[t.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[t.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Data Install Base"}),t.jsx(fe,{role:["-Customer"],children:t.jsx(w,{component:C,to:"/installation/create",children:"Tambah"})})]}),t.jsx("section",{className:"space-y-4 mb-4",children:t.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[t.jsx("div",{className:"col-span-12 md:col-span-6 lg:col-span-3",children:t.jsx(M,{leftSection:t.jsx(ya,{size:16}),placeholder:"Cari berdasarkan judul",value:e.search,onChange:n=>a({...e,search:n.target.value})})}),t.jsx(fe,{role:["-Customer"],children:t.jsx("div",{className:"col-span-6 md:col-span-3 lg:col-span-2",children:t.jsx(ye,{leftSection:t.jsx(_a,{size:16}),placeholder:"Pilih Instansi",value:((r=e.customer_id)==null?void 0:r.toString())??null,onChange:n=>{a({...e,customer_id:n||void 0})}})})})]})}),t.jsx("section",{className:"mb-8",children:t.jsx(_s,{...s})})]})},Js=()=>t.jsxs("main",{children:[t.jsx("div",{className:"mb-4 flex items-center justify-between",children:t.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Data Install Base"})}),t.jsx(Ps,{})]}),Xs=()=>{const{id:e}=He(),{data:a,isLoading:s,isError:r}=gt({id:e}),n=oe();return s?t.jsx("div",{className:"mt-48",children:t.jsx(Qe,{})}):r?t.jsxs("div",{className:"mt-48 text-center",children:[t.jsx("h1",{className:"text-lg font-bold mb-2",children:"Install base tidak ditemukan"}),t.jsx(w,{onClick:()=>n(-1),leftSection:t.jsx(st,{size:14}),children:"Kembali"})]}):t.jsxs("main",{children:[t.jsx("div",{className:"mb-4 flex items-center justify-between",children:t.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Detail Install Base"})}),t.jsxs(v,{shadow:"lg",children:[t.jsx(v.Section,{p:"lg",withBorder:!0,children:t.jsxs("h2",{className:"font-semibold text-base",children:[a.title," (",a.project_number,")"]})}),t.jsxs(v.Section,{p:"lg",withBorder:!0,children:[t.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"",children:[t.jsx("div",{className:"text-xs text-gray-600",children:"Project Number"}),t.jsx("div",{className:"font-bold text-sm text-gray-900",children:a.project_number})]}),t.jsxs("div",{className:"",children:[t.jsx("div",{className:"text-xs text-gray-600",children:"Nama Kegiatan"}),t.jsx("div",{className:"font-bold text-sm text-gray-900",children:a.title})]}),t.jsxs("div",{className:"",children:[t.jsx("div",{className:"text-xs text-gray-600",children:"Instansi"}),t.jsx("div",{className:"font-bold text-sm text-gray-900",children:a.customer.name})]}),t.jsxs("div",{className:"",children:[t.jsx("div",{className:"text-xs text-gray-600",children:"Tanggal Install"}),t.jsx("div",{className:"font-bold text-sm text-gray-900",children:a.installation_date})]}),t.jsxs("div",{className:"",children:[t.jsx("div",{className:"text-xs text-gray-600",children:"Teknisi"}),t.jsx("div",{className:"font-bold text-sm text-gray-900",children:a.technical_contract.engineers.map(({name:l})=>l).join(", ")})]}),t.jsxs("div",{className:"",children:[t.jsx("div",{className:"text-xs text-gray-600",children:"File"}),t.jsx("div",{className:"font-bold text-sm text-gray-900",children:a.file?t.jsxs(C,{to:a.file,target:"_blank",className:"flex items-center text-sm text-primary-600 line-clamp-1",children:[t.jsx(ka,{size:16,className:"flex-shrink-0"}),t.jsx("span",{className:"ml-2",children:"View/Download"})]}):"-"})]})]}),t.jsxs(h,{withColumnBorders:!0,withRowBorders:!0,withTableBorder:!0,children:[t.jsx(h.Thead,{children:t.jsxs(h.Tr,{children:[t.jsx(h.Th,{children:"#"}),t.jsx(h.Th,{children:"Serial Number"}),t.jsx(h.Th,{children:"Nama Alat"}),t.jsx(h.Th,{children:"Merek"}),t.jsx(h.Th,{children:"Masa Garansi"}),t.jsx(h.Th,{children:"Waktu Preventive"})]})}),t.jsx(h.Tbody,{children:a.items.map((l,c)=>{var i;return t.jsxs(h.Tr,{children:[t.jsx(h.Td,{children:c+1}),t.jsx(h.Td,{children:l.serial_number}),t.jsx(h.Td,{children:l.product.name}),t.jsx(h.Td,{children:((i=l.product.brand)==null?void 0:i.name)??"[Tanpa Merk]"}),t.jsxs(h.Td,{children:[l.warranty_month," Bulan"]}),t.jsx(h.Td,{children:je(a.installation_date).add(l.warranty_month,"M").format("dddd, D MMMM YYYY")})]},l.id)})})]})]}),t.jsx(v.Section,{p:"lg",withBorder:!0,children:t.jsx(w,{component:C,to:"/installation",variant:"light",color:"gray.6",bg:"gray.2",children:"Kembali"})})]})]})},Zs=()=>{const{id:e}=He(),a=oe(),{data:s,isLoading:r,isError:n}=gt({id:e});return r?t.jsx("div",{className:"mt-48",children:t.jsx(Qe,{})}):n?t.jsxs("div",{className:"mt-48 text-center",children:[t.jsx("h1",{className:"text-lg font-bold mb-2",children:"Instansi tidak ditemukan"}),t.jsx(w,{onClick:()=>a(-1),leftSection:t.jsx(st,{size:14}),children:"Kembali"})]}):t.jsxs("main",{children:[t.jsx("div",{className:"mb-4 flex items-center justify-between",children:t.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Data Install Base"})}),t.jsx(Ss,{installation:s})]})};export{Js as InstallationCreate,Ps as InstallationCreateForm,Xs as InstallationDetail,Us as InstallationSelect,_s as InstallationTable,Zs as InstallationUpdate,Ss as InstallationUpdateForm,Qs as Installations,ar as ItemSelect};
