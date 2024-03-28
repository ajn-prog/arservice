import{x as U,y as H,E as ie,w as u,M as ge,J as We,K as ee,N as la,O as ia,P as oa,r as z,z as ca,G as da,D as Te,F as pa,e as ve,a as R,j as t,u as be,q as C,i as je,f as he,L as E,b as fe,t as xe,n as O,I as ua,B as w,p as oe,v as Qe}from"./index-9ab8ff68.js";import{A as ye}from"./AgencySelect-b9651434.js";import{T as ma}from"./Table-e61fa0cd.js";import{P as ha}from"./index-4f26c220.js";import{I as xa}from"./IconEye-79d19c8e.js";import{I as fa}from"./IconEdit-fdc1f818.js";import{I as ga}from"./IconTrash-68288900.js";import{I as va,u as ba,L as Ue}from"./LoadingScreen-fe191dcc.js";import{c as He,u as ja,a as Je,T}from"./TextInput-f8bbccc4.js";import{I as ya}from"./IconSearch-ad7c84ca.js";import{I as _a}from"./IconCategory-ff20ed08.js";import{F as Xe}from"./FileDropzone-7d982e4b.js";import{i as Pa,g as Sa,a as wa,u as Na,b as M,O as Ia,C as b,S as Oa}from"./Select-12cf90f4.js";import{P as Da}from"./ProductSelect-3c6621ad.js";import{N as Ca}from"./NumberInput-d5568d8f.js";import{I as Ea}from"./IconPlus-602bfc86.js";import{u as Ze}from"./use-form-c87d5f4f.js";import{D as et}from"./DateInput-c639b9f6.js";import{I as tt}from"./IconCalendar-df92fb4d.js";import{T as at}from"./Textarea-92f45661.js";import{I as st}from"./IconArrowLeft-80e867e5.js";import{I as $a}from"./IconPaperclip-483b73bc.js";import{T as f}from"./Table-a1f81947.js";import{I as lr}from"./ItemSelect-cf3680c8.js";import"./LoadingOverlay-36c66f32.js";import"./IconPhoto-78adee0c.js";import"./ScrollArea-da754930.js";import"./clamp-73f6bef2.js";function ka({data:e,value:a}){const s=a.map(n=>n.trim().toLowerCase());return e.reduce((n,l)=>(Pa(l)?n.push({group:l.group,items:l.items.filter(c=>s.indexOf(c.value.toLowerCase().trim())===-1)}):s.indexOf(l.value.toLowerCase().trim())===-1&&n.push(l),n),[])}const[Ba,Fa]=He(),[Ma,_e]=He();var Ta={root:"m-7cda1cd6","root--default":"m-44da308b","root--contrast":"m-e3a01f8",label:"m-1e0e6180",remove:"m-ae386778",group:"m-1dcfd90b"};const ce=Ta;var za=Object.defineProperty,te=Object.getOwnPropertySymbols,rt=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable,ze=(e,a,s)=>a in e?za(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,Re=(e,a)=>{for(var s in a||(a={}))rt.call(a,s)&&ze(e,s,a[s]);if(te)for(var s of te(a))nt.call(a,s)&&ze(e,s,a[s]);return e},Ra=(e,a)=>{var s={};for(var r in e)rt.call(e,r)&&a.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&te)for(var r of te(e))a.indexOf(r)<0&&nt.call(e,r)&&(s[r]=e[r]);return s};const Va={},Aa=We((e,{gap:a},{size:s})=>({group:{"--pg-gap":a!==void 0?ee(a):ee(s,"pg-gap")}})),Pe=U((e,a)=>{const s=H("PillGroup",Va,e),r=s,{classNames:n,className:l,style:c,styles:o,unstyled:i,vars:d,size:m,disabled:_}=r,P=Ra(r,["classNames","className","style","styles","unstyled","vars","size","disabled"]),v=_e(),p=(v==null?void 0:v.size)||m||void 0,h=ie({name:"PillGroup",classes:ce,props:s,className:l,style:c,classNames:n,styles:o,unstyled:i,vars:d,varsResolver:Aa,stylesCtx:{size:p},rootSelector:"group"});return u.createElement(Ba,{value:{size:p,disabled:_}},u.createElement(ge,Re(Re({ref:a,size:p},h("group")),P)))});Pe.classes=ce;Pe.displayName="@mantine/core/PillGroup";var Ya=Object.defineProperty,Ka=Object.defineProperties,La=Object.getOwnPropertyDescriptors,ae=Object.getOwnPropertySymbols,lt=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable,Ve=(e,a,s)=>a in e?Ya(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,G=(e,a)=>{for(var s in a||(a={}))lt.call(a,s)&&Ve(e,s,a[s]);if(ae)for(var s of ae(a))it.call(a,s)&&Ve(e,s,a[s]);return e},Ae=(e,a)=>Ka(e,La(a)),qa=(e,a)=>{var s={};for(var r in e)lt.call(e,r)&&a.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&ae)for(var r of ae(e))a.indexOf(r)<0&&it.call(e,r)&&(s[r]=e[r]);return s};const Ga={variant:"default"},Wa=We((e,{radius:a},{size:s})=>({root:{"--pill-fz":ee(s,"pill-fz"),"--pill-height":ee(s,"pill-height"),"--pill-radius":a===void 0?void 0:ia(a)}})),Q=U((e,a)=>{const s=H("Pill",Ga,e),r=s,{classNames:n,className:l,style:c,styles:o,unstyled:i,vars:d,variant:m,children:_,withRemoveButton:P,onRemove:v,removeButtonProps:p,radius:h,size:N,disabled:V}=r,$=qa(r,["classNames","className","style","styles","unstyled","vars","variant","children","withRemoveButton","onRemove","removeButtonProps","radius","size","disabled"]),k=Fa(),A=_e(),B=N||(k==null?void 0:k.size)||void 0,Y=(A==null?void 0:A.variant)==="filled"?"contrast":m||"default",K=ie({name:"Pill",classes:ce,props:s,className:l,style:c,classNames:n,styles:o,unstyled:i,vars:d,varsResolver:Wa,stylesCtx:{size:B}});return u.createElement(ge,G(Ae(G({component:"span",ref:a,variant:Y,size:B},K("root",{variant:Y})),{mod:{"with-remove":P,disabled:V||(k==null?void 0:k.disabled)}}),$),u.createElement("span",G({},K("label")),_),P&&u.createElement(la,Ae(G(G({variant:"transparent",radius:h,tabIndex:-1,"aria-hidden":!0,unstyled:i},p),K("remove",{className:p==null?void 0:p.className,style:p==null?void 0:p.style})),{onMouseDown:I=>{var D;I.preventDefault(),I.stopPropagation(),(D=p==null?void 0:p.onMouseDown)==null||D.call(p,I)},onClick:I=>{var D;I.stopPropagation(),v==null||v(),(D=p==null?void 0:p.onClick)==null||D.call(p,I)}})))});Q.classes=ce;Q.displayName="@mantine/core/Pill";Q.Group=Pe;var Qa={field:"m-45c4369d"};const ot=Qa;var Ua=Object.defineProperty,Ha=Object.defineProperties,Ja=Object.getOwnPropertyDescriptors,se=Object.getOwnPropertySymbols,ct=Object.prototype.hasOwnProperty,dt=Object.prototype.propertyIsEnumerable,Ye=(e,a,s)=>a in e?Ua(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,Ke=(e,a)=>{for(var s in a||(a={}))ct.call(a,s)&&Ye(e,s,a[s]);if(se)for(var s of se(a))dt.call(a,s)&&Ye(e,s,a[s]);return e},Xa=(e,a)=>Ha(e,Ja(a)),Za=(e,a)=>{var s={};for(var r in e)ct.call(e,r)&&a.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&se)for(var r of se(e))a.indexOf(r)<0&&dt.call(e,r)&&(s[r]=e[r]);return s};const es={type:"visible"},Se=U((e,a)=>{const s=H("PillsInputField",es,e),r=s,{classNames:n,className:l,style:c,styles:o,unstyled:i,vars:d,type:m,disabled:_,id:P,pointer:v}=r,p=Za(r,["classNames","className","style","styles","unstyled","vars","type","disabled","id","pointer"]),h=_e(),N=ja(),V=ie({name:"PillsInputField",classes:ot,props:s,className:l,style:c,classNames:n,styles:o,unstyled:i,rootSelector:"field"}),$=_||(h==null?void 0:h.disabled);return u.createElement(ge,Xa(Ke(Ke({component:"input",ref:oa(a,h==null?void 0:h.fieldRef),"data-type":m,disabled:$,mod:{disabled:$,pointer:v}},V("field")),p),{id:(N==null?void 0:N.inputId)||P,"aria-invalid":h==null?void 0:h.hasError,"aria-describedby":N==null?void 0:N.describedBy}))});Se.classes=ot;Se.displayName="@mantine/core/PillsInputField";var ts=Object.defineProperty,as=Object.defineProperties,ss=Object.getOwnPropertyDescriptors,re=Object.getOwnPropertySymbols,pt=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable,Le=(e,a,s)=>a in e?ts(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,rs=(e,a)=>{for(var s in a||(a={}))pt.call(a,s)&&Le(e,s,a[s]);if(re)for(var s of re(a))ut.call(a,s)&&Le(e,s,a[s]);return e},ns=(e,a)=>as(e,ss(a)),ls=(e,a)=>{var s={};for(var r in e)pt.call(e,r)&&a.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&re)for(var r of re(e))a.indexOf(r)<0&&ut.call(e,r)&&(s[r]=e[r]);return s};const is={},ne=U((e,a)=>{const r=H("PillsInput",is,e),{children:n,onMouseDown:l,onClick:c,size:o,disabled:i,__staticSelector:d,error:m,variant:_}=r,P=ls(r,["children","onMouseDown","onClick","size","disabled","__staticSelector","error","variant"]),v=z.useRef();return u.createElement(Ma,{value:{fieldRef:v,size:o,disabled:i,hasError:!!m,variant:_}},u.createElement(Je,ns(rs({size:o,error:m,variant:_,component:"div",ref:a,onMouseDown:p=>{var h;p.preventDefault(),l==null||l(p),(h=v.current)==null||h.focus()},onClick:p=>{var h;p.preventDefault(),c==null||c(p),(h=v.current)==null||h.focus()}},P),{multiline:!0,disabled:i,__staticSelector:d||"PillsInput",withAria:!1}),n))});ne.displayName="@mantine/core/PillsInput";ne.Field=Se;var os=Object.defineProperty,cs=Object.defineProperties,ds=Object.getOwnPropertyDescriptors,le=Object.getOwnPropertySymbols,mt=Object.prototype.hasOwnProperty,ht=Object.prototype.propertyIsEnumerable,qe=(e,a,s)=>a in e?os(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,y=(e,a)=>{for(var s in a||(a={}))mt.call(a,s)&&qe(e,s,a[s]);if(le)for(var s of le(a))ht.call(a,s)&&qe(e,s,a[s]);return e},W=(e,a)=>cs(e,ds(a)),Ge=(e,a)=>{var s={};for(var r in e)mt.call(e,r)&&a.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&le)for(var r of le(e))a.indexOf(r)<0&&ht.call(e,r)&&(s[r]=e[r]);return s};const ps={maxValues:1/0,withCheckIcon:!0,checkIconPosition:"left"},we=U((e,a)=>{const s=H("MultiSelect",ps,e),r=s,{classNames:n,className:l,style:c,styles:o,unstyled:i,vars:d,size:m,value:_,defaultValue:P,onChange:v,onKeyDown:p,variant:h,data:N,dropdownOpened:V,defaultDropdownOpened:$,onDropdownOpen:k,onDropdownClose:A,selectFirstOptionOnChange:B,onOptionSubmit:Y,comboboxProps:K,filter:I,limit:D,withScrollArea:bt,maxDropdownHeight:jt,searchValue:yt,defaultSearchValue:_t,onSearchChange:Pt,readOnly:L,disabled:F,onFocus:Ne,onBlur:Ie,onPaste:ws,radius:St,rightSection:wt,rightSectionWidth:Nt,rightSectionPointerEvents:It,rightSectionProps:Ot,leftSection:Dt,leftSectionWidth:Ct,leftSectionPointerEvents:Et,leftSectionProps:$t,inputContainer:kt,inputWrapperOrder:Bt,withAsterisk:Ft,labelProps:Mt,descriptionProps:Tt,errorProps:zt,wrapperProps:Rt,description:Vt,label:At,error:Oe,maxValues:Yt,searchable:S,nothingFoundMessage:De,withCheckIcon:Kt,checkIconPosition:Lt,hidePickedOptions:Ce,withErrorStyles:qt,name:Gt,form:Wt,id:Qt,clearable:Ut,clearButtonProps:Ht,hiddenInputProps:Jt,placeholder:Ee}=r,Xt=Ge(r,["classNames","className","style","styles","unstyled","vars","size","value","defaultValue","onChange","onKeyDown","variant","data","dropdownOpened","defaultDropdownOpened","onDropdownOpen","onDropdownClose","selectFirstOptionOnChange","onOptionSubmit","comboboxProps","filter","limit","withScrollArea","maxDropdownHeight","searchValue","defaultSearchValue","onSearchChange","readOnly","disabled","onFocus","onBlur","onPaste","radius","rightSection","rightSectionWidth","rightSectionPointerEvents","rightSectionProps","leftSection","leftSectionWidth","leftSectionPointerEvents","leftSectionProps","inputContainer","inputWrapperOrder","withAsterisk","labelProps","descriptionProps","errorProps","wrapperProps","description","label","error","maxValues","searchable","nothingFoundMessage","withCheckIcon","checkIconPosition","hidePickedOptions","withErrorStyles","name","form","id","clearable","clearButtonProps","hiddenInputProps","placeholder"]),de=ca(Qt),pe=Sa(N),J=wa(pe),j=Na({opened:V,defaultOpened:$,onDropdownOpen:k,onDropdownClose:()=>{A==null||A(),j.resetSelectedOption()}}),{styleProps:Zt,rest:ea}=da(Xt),ta=ea,aa=Ge(ta,["type"]),[g,q]=Te({value:_,defaultValue:P,finalValue:[],onChange:v}),[X,Z]=Te({value:yt,defaultValue:_t,finalValue:"",onChange:Pt}),ue=ie({name:"MultiSelect",classes:{},props:s,classNames:n,styles:o,unstyled:i}),{resolvedClassNames:$e,resolvedStyles:ke}=pa({props:s,styles:o,classNames:n}),sa=x=>{p==null||p(x),x.key==="Backspace"&&X.length===0&&g.length>0&&q(g.slice(0,g.length-1))},ra=g.map((x,me)=>{var Me;return u.createElement(Q,y({key:`${x}-${me}`,withRemoveButton:!L,onRemove:()=>q(g.filter(na=>x!==na)),unstyled:i},ue("pill")),((Me=J[x])==null?void 0:Me.label)||x)});z.useEffect(()=>{B&&j.selectFirstOption()},[B,g]);const Be=Ut&&g.length>0&&!F&&!L&&u.createElement(M.ClearButton,W(y({size:m},Ht),{onClear:()=>{q([]),Z("")}})),Fe=ka({data:pe,value:g});return u.createElement(u.Fragment,null,u.createElement(M,y({store:j,classNames:$e,styles:ke,unstyled:i,size:m,readOnly:L,__staticSelector:"MultiSelect",onOptionSubmit:x=>{Y==null||Y(x),Z(""),j.updateSelectedOptionIndex("selected"),g.includes(J[x].value)?q(g.filter(me=>me!==J[x].value)):g.length<Yt&&q([...g,J[x].value])}},K),u.createElement(M.DropdownTarget,null,u.createElement(ne,W(y({},Zt),{__staticSelector:"MultiSelect",classNames:$e,styles:ke,unstyled:i,size:m,className:l,style:c,variant:h,disabled:F,radius:St,rightSection:wt||Be||u.createElement(M.Chevron,{size:m,error:Oe,unstyled:i}),rightSectionPointerEvents:It||Be?"all":"none",rightSectionWidth:Nt,rightSectionProps:Ot,leftSection:Dt,leftSectionWidth:Ct,leftSectionPointerEvents:Et,leftSectionProps:$t,inputContainer:kt,inputWrapperOrder:Bt,withAsterisk:Ft,labelProps:Mt,descriptionProps:Tt,errorProps:zt,wrapperProps:Rt,description:Vt,label:At,error:Oe,multiline:!0,withErrorStyles:qt,__stylesApiProps:W(y({},s),{multiline:!0}),pointer:!S,onClick:()=>S?j.openDropdown():j.toggleDropdown(),id:de}),u.createElement(Q.Group,y({disabled:F,unstyled:i},ue("pillsList")),ra,u.createElement(M.EventsTarget,null,u.createElement(ne.Field,W(y(W(y({},aa),{ref:a,id:de,placeholder:Ee,type:!S&&!Ee?"hidden":"visible"}),ue("inputField")),{unstyled:i,onFocus:x=>{Ne==null||Ne(x),S&&j.openDropdown()},onBlur:x=>{Ie==null||Ie(x),j.closeDropdown(),S&&j.closeDropdown(),Z("")},onKeyDown:sa,value:X,onChange:x=>{Z(x.currentTarget.value),S&&j.openDropdown(),B&&j.selectFirstOption()},disabled:F,readOnly:L||!S,pointer:!S})))))),u.createElement(Ia,{data:Ce?Fe:pe,hidden:L||F,filter:I,search:X,limit:D,hiddenWhenEmpty:!S||!De||Ce&&Fe.length===0&&X.trim().length===0,withScrollArea:bt,maxDropdownHeight:jt,filterOptions:S,value:g,checkIconPosition:Lt,withCheckIcon:Kt,nothingFoundMessage:De,unstyled:i,labelId:`${de}-label`})),u.createElement("input",y({type:"hidden",name:Gt,value:g.join(","),form:Wt,disabled:F},Jt)))});we.classes=y(y({},Je.classes),M.classes);we.displayName="@mantine/core/MultiSelect";async function us({params:e}){return(await R.get("/ar-service/engineer",{params:e})).data.data}function ms({config:e,params:a}={}){return ve({...e,queryKey:["engineers",a],queryFn:()=>us({params:a}),keepPreviousData:!0})}const xt=({...e})=>{const{data:a}=ms({params:{limit:5e5}}),s=z.useMemo(()=>a?a.data.map(({id:r,name:n})=>({label:n,value:r.toString()})):[],[a]);return t.jsx(we,{...e,data:s,searchable:!0})};async function hs({data:e}){const a=new FormData;for(const[r,n]of Object.entries(e))n&&(Array.isArray(n)?typeof n[0]=="string"?n.forEach((l,c)=>{a.append(`${r}[${c}]`,l.toString())}):n.forEach((l,c)=>{for(const[o,i]of Object.entries(l))a.append(`${o}[${c}]`,i.toString())}):n instanceof Date?a.append(r,n.toJSON()):n instanceof File?a.append(r,n,n.name):a.append(r,n.toString()));return(await R.post("/ar-service/install-base",a)).data}function xs({config:e}={}){return be(hs,{...e,onSuccess:(...a)=>{C.invalidateQueries(["installations"]),C.invalidateQueries(["installbase-items"]),e!=null&&e.onSuccess&&e.onSuccess(...a)}})}async function fs({params:e}){return(await R.get("/ar-service/install-base",{params:e})).data.data}function ft({config:e,params:a}={}){return ve({...e,queryKey:["installations",a],queryFn:()=>fs({params:a}),keepPreviousData:!0})}async function gs({id:e}){return(await R.get(`/ar-service/install-base/${e}`)).data.data}function gt({config:e,id:a}){return ve({...e,queryKey:["installation",a],queryFn:()=>gs({id:a})})}async function vs({id:e,data:a}){const s=new FormData;for(const[n,l]of Object.entries(a))l&&(Array.isArray(l)?typeof l[0]=="string"?l.forEach((c,o)=>{s.append(`${n}[${o}]`,c.toString())}):l.forEach((c,o)=>{for(const[i,d]of Object.entries(c))s.append(`${i}[${o}]`,d.toString())}):l instanceof Date?s.append(n,l.toJSON()):l instanceof File?s.append(n,l,l.name):s.append(n,l.toString()));return(await R.post(`/ar-service/install-base/${e}`,s)).data}function bs({config:e}={}){return be(vs,{...e,onSuccess:(...a)=>{C.invalidateQueries(["installations"]),C.invalidateQueries(["installation"]),C.invalidateQueries(["installbase-items"]),e!=null&&e.onSuccess&&e.onSuccess(...a)}})}async function js({id:e}){return(await R.delete(`/ar-service/install-base/${e}`)).data}function ys({config:e}={}){return be(js,{...e,onSuccess:(...a)=>{C.invalidateQueries(["installations"]),C.invalidateQueries(["installbase-items"]),e!=null&&e.onSuccess&&e.onSuccess(...a)}})}const _s=({toolbar:e,...a})=>{const[s,r]=z.useState({page:1,limit:10,search:""}),{data:n,isLoading:l}=ft({params:{...s,...a}}),c=ys();function o(i){return()=>{xe.openConfirmModal({title:"Hapus Install Base",children:t.jsx("div",{className:"text-sm",children:"Apakah anda yakin untuk menghapus install Base ini?"}),centered:!0,onConfirm:async()=>{await c.mutateAsync({id:i},{onSuccess:()=>{O.show({message:"Install Base berhasil dihapus",color:"green",icon:t.jsx(va,{})}),xe.closeAll()},onError:()=>{O.show({message:"Install Base tidak bisa dihapus",color:"red",icon:t.jsx(ua,{})}),xe.closeAll()}})}})}}return t.jsx(ma,{title:"Tabel Data Install Base",toolbar:e,header:["#","Project Number","Nama Kegiatan","Produk","Rumah Sakit","Diperbaharui",""],items:n==null?void 0:n.data,onPageChange:i=>{r({...s,page:i})},loading:l,metadata:{count:(n==null?void 0:n.data.length)||10,limit:s.limit||10,page:s.page||10,total:(n==null?void 0:n.total)||10},renderItem:(i,d)=>{var m;return t.jsxs("tr",{children:[t.jsx("td",{children:(s.limit??5)*((s.page??0)-1)+d+1}),t.jsx("td",{children:i.project_number}),t.jsx("td",{children:i.title}),t.jsx("td",{children:i.items.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"text-xs text-primary-600",children:ha[i.items[0].product.type]}),t.jsx("div",{className:"text-sm text-gray-900",children:i.items[0].product.name}),i.items.length>1&&t.jsxs("div",{className:"text-xs text-gray-600 mt-1",children:["+ ",i.items.length-1," produk lainnya"]})]})}),t.jsx("td",{children:((m=i.customer)==null?void 0:m.name)??"-"}),t.jsx("td",{children:je(i.updated_at).format("D MMMM YYYY H:mm")}),t.jsx("td",{children:t.jsxs("div",{className:"flex items-center space-x-2",children:[t.jsx(he,{variant:"subtle",component:E,to:`/installation/${i.id}`,title:"Detail Install Base",color:"gray",radius:"lg",children:t.jsx(xa,{size:18})}),t.jsx(fe,{role:["-Customer"],children:t.jsxs(t.Fragment,{children:[t.jsx(he,{variant:"subtle",title:"Update Install Base",color:"primary",radius:"lg",component:E,to:`/installation/${i.id}/update`,children:t.jsx(fa,{size:18})}),t.jsx(he,{variant:"subtle",onClick:o(i.id),title:"Hapus Install Base",color:"red",radius:"lg",children:t.jsx(ga,{size:18})})]})})]})})]},i.id)}})},vt=({value:e,onChange:a})=>{function s(){a([...e,{product_id:"",serial_number:"",warranty_month:""}])}function r(l){return()=>{const c=e.filter((o,i)=>i!==l);a(c)}}function n(l,c){a(e.map((o,i)=>i===l?c:o))}return t.jsxs("div",{children:[t.jsxs("div",{className:"grid grid-cols-12 gap-x-2 mb-1",children:[t.jsx("div",{className:"col-span-4 text-sm",children:"Produk"}),t.jsx("div",{className:"col-span-4 text-sm",children:"Serial Number"}),t.jsx("div",{className:"col-span-4 text-sm",children:"Masa Garansi"}),t.jsx("div",{className:"col-span-1 text-sm"})]}),e.map((l,c)=>t.jsxs("div",{className:"grid grid-cols-12 gap-x-2 gap-y-2 mb-2",children:[t.jsx(Da,{required:!0,placeholder:"Pilih Produk",className:"col-span-4",limit:20,nothingFoundMessage:"Data tidak ditemukan",value:l.product_id,onChange:o=>{o&&n(c,{...l,product_id:o})}}),t.jsx(T,{required:!0,placeholder:"Ex : MU/23/09/001",className:"col-span-4",value:l.serial_number,onChange:o=>n(c,{...l,serial_number:o.target.value})}),t.jsx(Ca,{required:!0,placeholder:"...",className:"col-span-3",hideControls:!0,value:l.warranty_month,onChange:o=>n(c,{...l,warranty_month:o}),rightSection:t.jsx("span",{className:"text-xs text-gray-600 pr-7",children:"/bulan"})}),t.jsx("div",{className:"col-span-1 flex items-center",children:t.jsx(w,{color:"red",size:"xs",variant:"light",onClick:r(c),children:"Hapus"})})]},`psf_${c}`)),t.jsx("div",{className:"col-span-12 flex justify-end",children:t.jsx(w,{leftSection:t.jsx(Ea,{size:16}),variant:"subtle",size:"xs",onClick:s,children:"Tambah Produk"})})]})},Ps=()=>{var l;const e=oe(),{mutateAsync:a,isLoading:s}=xs(),r=Ze({initialValues:{title:"",customer_id:void 0,engineer_ids:[],installation_date:null,note:"",project_number:"",file:void 0,products:[{product_id:"",serial_number:"",warranty_month:""}]}}),n=r.onSubmit(async c=>{await a({data:{...c}},{onSuccess:()=>{O.show({color:"green",message:"Install Base berhasil dibuat"}),e("/installation")},onError:({response:o})=>{r.setErrors((o==null?void 0:o.data).errors),O.show({color:"red",message:"Install Base gagal dibuat"})}})});return t.jsxs(b,{component:"form",onSubmit:n,shadow:"lg",children:[t.jsx(b.Section,{p:"lg",withBorder:!0,children:t.jsx("h2",{className:"font-semibold text-base",children:"Tambah Data Install Base"})}),t.jsxs(b.Section,{p:"lg",pt:"xs",withBorder:!0,children:[t.jsxs("div",{className:"pb-6 grid grid-cols-12 gap-x-6 gap-y-4 border-b border-gray-300",children:[t.jsx(et,{...r.getInputProps("installation_date"),label:"Tanggal Install",placeholder:"Pilih Tanggal",className:"col-span-6 md:col-span-3",popoverProps:{withinPortal:!0},rightSection:t.jsx(tt,{size:16,color:"gray"}),valueFormat:"D MMMM YYYY"}),t.jsx(T,{...r.getInputProps("project_number"),label:"Project Number",placeholder:"Ex : 20392",className:"col-span-6 md:col-span-3"}),t.jsx(T,{...r.getInputProps("title"),label:"Nama Kegiatan",placeholder:"Ex : Perbaikan Alat MINDRAY xxxx",className:"col-span-12 md:col-span-6"}),t.jsx(ye,{...r.getInputProps("customer_id"),label:"Instansi",placeholder:"Pilih Instansi",className:"col-span-12 md:col-span-12",limit:5,nothingFoundMessage:"Data tidak ditemukan"}),t.jsx(xt,{...r.getInputProps("engineer_ids"),label:"Teknisi",placeholder:"Pilih Teknisi",className:"col-span-12 md:col-span-12",limit:20,nothingFoundMessage:"Data tidak ditemukan"})]}),t.jsx("div",{className:"pt-2 pb-4 border-b border-gray-300",children:t.jsx(vt,{value:r.values.products,onChange:c=>r.setFieldValue("products",c)})}),t.jsxs("div",{className:"pt-4 grid grid-cols-12 gap-x-6 gap-y-4",children:[t.jsx("div",{className:"col-span-12",children:t.jsx(Xe,{label:"File Kegiatan",onDrop:c=>r.setFieldValue("file",c[0]||void 0),onReject:()=>O.show({message:"File tidak sesuai",color:"red"}),maxSize:5*1024**2,maxFiles:1,value:r.values.file,error:(l=r.errors.file)==null?void 0:l.toString()})}),t.jsx(at,{...r.getInputProps("note"),label:"Catatan",placeholder:"Tambahkan Catatan. . .",className:"col-span-12 md:col-span-12"})]})]}),t.jsxs(b.Section,{p:"lg",withBorder:!0,className:"flex items-center space-x-4",children:[t.jsx(w,{type:"submit",loading:s,children:"Simpan"}),t.jsx(w,{component:E,to:"/installation",variant:"light",color:"gray.6",bg:"gray.2",children:"Batal"})]})]})},Ss=({installation:e})=>{var c,o,i;const a=oe(),{mutateAsync:s,isLoading:r}=bs(),n=Ze({initialValues:{title:e.title,customer_id:((c=e.customer_id)==null?void 0:c.toString())??void 0,engineer_ids:(o=e.technical_contract)==null?void 0:o.engineers.map(({id:d})=>d.toString()),installation_date:je(e.installation_date,"YYYY-MM-DD").toDate(),note:e.note||"",project_number:e.project_number,file:void 0,products:e.items.map(d=>({product_id:d.product_id.toString(),serial_number:d.serial_number.toString(),warranty_month:d.warranty_month.toString()}))}}),l=n.onSubmit(async d=>{await s({id:e.id,data:{...d}},{onSuccess:()=>{O.show({color:"green",message:"Install Base berhasil diubah"}),a("/installation")},onError:({response:m})=>{n.setErrors((m==null?void 0:m.data).errors),O.show({color:"red",message:"Install Base gagal diubah"})}})});return t.jsxs(b,{component:"form",onSubmit:l,shadow:"lg",children:[t.jsx(b.Section,{p:"lg",withBorder:!0,children:t.jsx("h2",{className:"font-semibold text-base",children:"Edit Data Install Base"})}),t.jsxs(b.Section,{p:"lg",pt:"xs",withBorder:!0,children:[t.jsxs("div",{className:"pb-6 grid grid-cols-12 gap-x-6 gap-y-4 border-b border-gray-300",children:[t.jsx(et,{...n.getInputProps("installation_date"),label:"Tanggal Install",placeholder:"Pilih Tanggal",className:"col-span-6 md:col-span-3",popoverProps:{withinPortal:!0},rightSection:t.jsx(tt,{size:16,color:"gray"}),valueFormat:"D MMMM YYYY"}),t.jsx(T,{...n.getInputProps("project_number"),label:"Project Number",placeholder:"Ex : 20392",className:"col-span-6 md:col-span-3"}),t.jsx(T,{...n.getInputProps("title"),label:"Nama Kegiatan",placeholder:"Ex : Perbaikan Alat MINDRAY xxxx",className:"col-span-12 md:col-span-6"}),t.jsx(ye,{...n.getInputProps("customer_id"),label:"Instansi",placeholder:"Pilih Instansi",className:"col-span-12 md:col-span-12",nothingFoundMessage:"Data tidak ditemukan"}),t.jsx(xt,{...n.getInputProps("engineer_ids"),label:"Teknisi",placeholder:"Pilih Teknisi",className:"col-span-12 md:col-span-12",limit:20,nothingFoundMessage:"Data tidak ditemukan"})]}),t.jsx("div",{className:"pt-2 pb-4 border-b border-gray-300",children:t.jsx(vt,{value:n.values.products,onChange:d=>n.setFieldValue("products",d)})}),t.jsxs("div",{className:"pt-4 grid grid-cols-12 gap-x-6 gap-y-4",children:[t.jsx("div",{className:"col-span-12",children:t.jsx(Xe,{label:"File Kegiatan",onDrop:d=>n.setFieldValue("file",d[0]||void 0),onReject:()=>O.show({message:"File tidak sesuai",color:"red"}),maxSize:5*1024**2,maxFiles:1,value:n.values.file,error:(i=n.errors.file)==null?void 0:i.toString()})}),t.jsx(at,{...n.getInputProps("note"),label:"Catatan",placeholder:"Tambahkan Catatan. . .",className:"col-span-12 md:col-span-12"})]})]}),t.jsxs(b.Section,{p:"lg",withBorder:!0,className:"flex items-center space-x-4",children:[t.jsx(w,{type:"submit",loading:r,children:"Simpan"}),t.jsx(w,{component:E,to:"/installation",variant:"light",color:"gray.6",bg:"gray.2",children:"Batal"})]})]})},Zs=({...e})=>{const{data:a}=ft({params:{limit:5e5}}),s=z.useMemo(()=>a?a.data.map(({id:r,title:n,project_number:l})=>({label:`${n} (${l})`,value:r.toString()})):[],[a]);return t.jsx(Oa,{...e,data:s,searchable:!0})},er=()=>{var r;const[e,a]=z.useState({search:"",limit:10}),[s]=ba(e,200);return t.jsxs("main",{children:[t.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[t.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Data Install Base"}),t.jsx(fe,{role:["-Customer"],children:t.jsx(w,{component:E,to:"/installation/create",children:"Tambah"})})]}),t.jsx("section",{className:"space-y-4 mb-4",children:t.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[t.jsx("div",{className:"col-span-12 md:col-span-6 lg:col-span-3",children:t.jsx(T,{leftSection:t.jsx(ya,{size:16}),placeholder:"Cari berdasarkan judul",value:e.search,onChange:n=>a({...e,search:n.target.value})})}),t.jsx(fe,{role:["-Customer"],children:t.jsx("div",{className:"col-span-6 md:col-span-3 lg:col-span-2",children:t.jsx(ye,{leftSection:t.jsx(_a,{size:16}),placeholder:"Pilih Instansi",value:((r=e.customer_id)==null?void 0:r.toString())??null,onChange:n=>{a({...e,customer_id:n||void 0})}})})})]})}),t.jsx("section",{className:"mb-8",children:t.jsx(_s,{...s})})]})},tr=()=>t.jsxs("main",{children:[t.jsx("div",{className:"mb-4 flex items-center justify-between",children:t.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Data Install Base"})}),t.jsx(Ps,{})]}),ar=()=>{var l,c;const{id:e}=Qe(),{data:a,isLoading:s,isError:r}=gt({id:e}),n=oe();return s?t.jsx("div",{className:"mt-48",children:t.jsx(Ue,{})}):r?t.jsxs("div",{className:"mt-48 text-center",children:[t.jsx("h1",{className:"text-lg font-bold mb-2",children:"Install base tidak ditemukan"}),t.jsx(w,{onClick:()=>n(-1),leftSection:t.jsx(st,{size:14}),children:"Kembali"})]}):t.jsxs("main",{children:[t.jsx("div",{className:"mb-4 flex items-center justify-between",children:t.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Detail Install Base"})}),t.jsxs(b,{shadow:"lg",children:[t.jsx(b.Section,{p:"lg",withBorder:!0,children:t.jsxs("h2",{className:"font-semibold text-base",children:[a.title," (",a.project_number,")"]})}),t.jsxs(b.Section,{p:"lg",withBorder:!0,children:[t.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"",children:[t.jsx("div",{className:"text-xs text-gray-600",children:"Project Number"}),t.jsx("div",{className:"font-bold text-sm text-gray-900",children:a.project_number})]}),t.jsxs("div",{className:"",children:[t.jsx("div",{className:"text-xs text-gray-600",children:"Nama Kegiatan"}),t.jsx("div",{className:"font-bold text-sm text-gray-900",children:a.title})]}),t.jsxs("div",{className:"",children:[t.jsx("div",{className:"text-xs text-gray-600",children:"Instansi"}),t.jsx("div",{className:"font-bold text-sm text-gray-900",children:((l=a.customer)==null?void 0:l.name)??"-"})]}),t.jsxs("div",{className:"",children:[t.jsx("div",{className:"text-xs text-gray-600",children:"Tanggal Install"}),t.jsx("div",{className:"font-bold text-sm text-gray-900",children:a.installation_date})]}),t.jsxs("div",{className:"",children:[t.jsx("div",{className:"text-xs text-gray-600",children:"Teknisi"}),t.jsx("div",{className:"font-bold text-sm text-gray-900",children:(c=a.technical_contract)==null?void 0:c.engineers.map(({name:o})=>o).join(", ")})]}),t.jsxs("div",{className:"",children:[t.jsx("div",{className:"text-xs text-gray-600",children:"File"}),t.jsx("div",{className:"font-bold text-sm text-gray-900",children:a.file?t.jsxs(E,{to:a.file,target:"_blank",className:"flex items-center text-sm text-primary-600 line-clamp-1",children:[t.jsx($a,{size:16,className:"flex-shrink-0"}),t.jsx("span",{className:"ml-2",children:"View/Download"})]}):"-"})]})]}),t.jsxs(f,{withColumnBorders:!0,withRowBorders:!0,withTableBorder:!0,children:[t.jsx(f.Thead,{children:t.jsxs(f.Tr,{children:[t.jsx(f.Th,{children:"#"}),t.jsx(f.Th,{children:"Serial Number"}),t.jsx(f.Th,{children:"Nama Alat"}),t.jsx(f.Th,{children:"Merek"}),t.jsx(f.Th,{children:"Masa Garansi"}),t.jsx(f.Th,{children:"Waktu Preventive"})]})}),t.jsx(f.Tbody,{children:a.items.map((o,i)=>{var d;return t.jsxs(f.Tr,{children:[t.jsx(f.Td,{children:i+1}),t.jsx(f.Td,{children:o.serial_number}),t.jsx(f.Td,{children:o.product.name}),t.jsx(f.Td,{children:((d=o.product.brand)==null?void 0:d.name)??"[Tanpa Merk]"}),t.jsxs(f.Td,{children:[o.warranty_month," Bulan"]}),t.jsx(f.Td,{children:je(a.installation_date).add(o.warranty_month,"M").format("dddd, D MMMM YYYY")})]},o.id)})})]})]}),t.jsx(b.Section,{p:"lg",withBorder:!0,children:t.jsx(w,{component:E,to:"/installation",variant:"light",color:"gray.6",bg:"gray.2",children:"Kembali"})})]})]})},sr=()=>{const{id:e}=Qe(),a=oe(),{data:s,isLoading:r,isError:n}=gt({id:e});return r?t.jsx("div",{className:"mt-48",children:t.jsx(Ue,{})}):n?t.jsxs("div",{className:"mt-48 text-center",children:[t.jsx("h1",{className:"text-lg font-bold mb-2",children:"Instansi tidak ditemukan"}),t.jsx(w,{onClick:()=>a(-1),leftSection:t.jsx(st,{size:14}),children:"Kembali"})]}):t.jsxs("main",{children:[t.jsx("div",{className:"mb-4 flex items-center justify-between",children:t.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Data Install Base"})}),t.jsx(Ss,{installation:s})]})};export{tr as InstallationCreate,Ps as InstallationCreateForm,ar as InstallationDetail,Zs as InstallationSelect,_s as InstallationTable,sr as InstallationUpdate,Ss as InstallationUpdateForm,er as Installations,lr as ItemSelect};
