import{r as p,S as L,l as Q,o as X,F as be,R as N,p as je,E as ye,D as Ne,t as G,v as we,w as ke,y as Ce,M as J,c as Z,u as Pe,q as _e,a as T,i as ee,T as B,j as e,g as K,m as C,O as _,f as Se,B as w,h as ae,L as Oe,U as Ie,n as W}from"./index-8e6e2209.js";import{W as Ta,V as Ba}from"./index-8e6e2209.js";import{a as se,T as S}from"./TextInput-3c2d3b4d.js";import{I as Ee,a as Me,b as Ae}from"./InlineInput-db63b6e6.js";import{a as Te,T as Be,L as ze,C as $e}from"./Table-ddeb8020.js";import{N as qe,T as De}from"./NumberInput-a6091735.js";import{I as Fe}from"./IconPlus-8ae31b2d.js";import{u as te}from"./use-form-94467de7.js";import"./clamp-73f6bef2.js";function Ve(a,s){try{return JSON.stringify(a)}catch{throw new Error(`@mantine/hooks ${s}: Failed to serialize the value`)}}function Re(a){try{return a&&JSON.parse(a)}catch{return a}}function Le(a){return{getItem:o=>{try{return window[a].getItem(o)}catch{return console.warn("use-local-storage: Failed to get value from storage, localStorage is blocked"),null}},setItem:(o,i)=>{try{window[a].setItem(o,i)}catch{console.warn("use-local-storage: Failed to set value to storage, localStorage is blocked")}},removeItem:o=>{try{window[a].removeItem(o)}catch{console.warn("use-local-storage: Failed to remove value from storage, localStorage is blocked")}}}}function Ge(a,s){const t=a==="localStorage"?"mantine-local-storage":"mantine-session-storage",{getItem:r,setItem:o,removeItem:i}=Le(a);return function({key:n,defaultValue:c,getInitialValueInEffect:f=!0,deserialize:h=Re,serialize:b=d=>Ve(d,s)}){const d=p.useCallback(u=>{let m;try{m=typeof window>"u"||!(a in window)||window[a]===null||!!u}catch{m=!0}if(m)return c;const y=r(n);return y!==null?h(y):c},[n,c]),[x,g]=p.useState(d(f)),j=p.useCallback(u=>{u instanceof Function?g(m=>{const y=u(m);return o(n,b(y)),window.dispatchEvent(new CustomEvent(t,{detail:{key:n,value:u(m)}})),y}):(o(n,b(u)),window.dispatchEvent(new CustomEvent(t,{detail:{key:n,value:u}})),g(u))},[n]),$=p.useCallback(()=>{i(n),window.dispatchEvent(new CustomEvent(t,{detail:{key:n,value:c}}))},[]);return L("storage",u=>{var m;u.storageArea===window[a]&&u.key===n&&g(h((m=u.newValue)!=null?m:void 0))}),L(t,u=>{u.detail.key===n&&g(u.detail.value)}),p.useEffect(()=>{c!==void 0&&x===void 0&&j(c)},[c,x,j]),p.useEffect(()=>{f&&g(d())},[]),[x===void 0?c:x,j,$]}}function re(a){return Ge("localStorage","use-local-storage")(a)}const ne=p.createContext(null),Je=ne.Provider,Ke=()=>p.useContext(ne);var We=Object.defineProperty,Ue=Object.defineProperties,He=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,U=(a,s,t)=>s in a?We(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t,H=(a,s)=>{for(var t in s||(s={}))oe.call(s,t)&&U(a,t,s[t]);if(O)for(var t of O(s))ie.call(s,t)&&U(a,t,s[t]);return a},Ye=(a,s)=>Ue(a,He(s)),Qe=(a,s)=>{var t={};for(var r in a)oe.call(a,r)&&s.indexOf(r)<0&&(t[r]=a[r]);if(a!=null&&O)for(var r of O(a))s.indexOf(r)<0&&ie.call(a,r)&&(t[r]=a[r]);return t};const Xe={},z=Q((a,s)=>{const t=X("CheckboxGroup",Xe,a),{value:r,defaultValue:o,onChange:i,size:l,wrapperProps:n,children:c}=t,f=Qe(t,["value","defaultValue","onChange","size","wrapperProps","children"]),[h,b]=be({value:r,defaultValue:o,finalValue:[],onChange:i}),d=x=>{const g=x.currentTarget.value;b(h.includes(g)?h.filter(j=>j!==g):[...h,g])};return N.createElement(Je,{value:{value:h,onChange:d,size:l}},N.createElement(se.Wrapper,Ye(H(H({size:l,ref:s},n),f),{labelElement:"div",__staticSelector:"CheckboxGroup"}),N.createElement(Ee,{role:"group"},c)))});z.classes=se.Wrapper.classes;z.displayName="@mantine/core/CheckboxGroup";var Ze={root:"m-bf2d988c",inner:"m-26062bec",input:"m-26063560",icon:"m-bf295423"};const le=Ze;var ea=Object.defineProperty,aa=Object.defineProperties,sa=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,Y=(a,s,t)=>s in a?ea(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t,v=(a,s)=>{for(var t in s||(s={}))ce.call(s,t)&&Y(a,t,s[t]);if(I)for(var t of I(s))de.call(s,t)&&Y(a,t,s[t]);return a},A=(a,s)=>aa(a,sa(s)),ta=(a,s)=>{var t={};for(var r in a)ce.call(a,r)&&s.indexOf(r)<0&&(t[r]=a[r]);if(a!=null&&I)for(var r of I(a))s.indexOf(r)<0&&de.call(a,r)&&(t[r]=a[r]);return t};const ra={labelPosition:"right",icon:Te},na=we((a,{radius:s,color:t,size:r,iconColor:o})=>({root:{"--checkbox-size":ke(r,"checkbox-size"),"--checkbox-radius":s===void 0?void 0:Ce(s),"--checkbox-color":t?J(t,a):void 0,"--checkbox-icon-color":o?J(o,a):void 0}})),E=Q((a,s)=>{const t=X("Checkbox",ra,a),r=t,{classNames:o,className:i,style:l,styles:n,unstyled:c,vars:f,color:h,label:b,id:d,size:x,radius:g,wrapperProps:j,children:$,checked:u,labelPosition:m,description:y,error:M,disabled:q,variant:me,indeterminate:D,icon:pe,rootRef:he,iconColor:ja}=r,xe=ta(r,["classNames","className","style","styles","unstyled","vars","color","label","id","size","radius","wrapperProps","children","checked","labelPosition","description","error","disabled","variant","indeterminate","icon","rootRef","iconColor"]),k=Ke(),ge=x||(k==null?void 0:k.size),ve=pe,P=je({name:"Checkbox",props:t,classes:le,className:i,style:l,classNames:o,styles:n,unstyled:c,vars:f,varsResolver:na}),{styleProps:fe,rest:F}=ye(xe),V=Ne(d),R=k?{checked:k.value.includes(F.value),onChange:k.onChange}:{};return N.createElement(Me,v(v(A(v({},P("root")),{__staticSelector:"Checkbox",__stylesApiProps:t,id:V,size:ge,labelPosition:m,label:b,description:y,error:M,disabled:q,classNames:o,styles:n,unstyled:c,"data-checked":R.checked||u||void 0,variant:me,ref:he}),fe),j),N.createElement(G,A(v({},P("inner")),{mod:{"data-label-position":m}}),N.createElement(G,A(v(v(v({component:"input",id:V,ref:s,checked:u,disabled:q,mod:{error:!!M,indeterminate:D}},P("input",{focusable:!0})),F),R),{type:"checkbox"})),N.createElement(ve,v({indeterminate:D},P("icon")))))});E.classes=v(v({},le),Ae);E.displayName="@mantine/core/Checkbox";E.Group=z;var oa=Z("basket-off","IconBasketOff",[["path",{d:"M17 10l-2 -6",key:"svg-0"}],["path",{d:"M7 10l.75 -2.252m1.001 -3.002l.249 -.746",key:"svg-1"}],["path",{d:"M12 8h7a2 2 0 0 1 1.977 2.304c-.442 2.516 -.756 4.438 -.977 5.696m-1.01 3.003a2.997 2.997 0 0 1 -2.234 .997h-9.512a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h2.999",key:"svg-2"}],["path",{d:"M12 12a2 2 0 1 0 2 2",key:"svg-3"}],["path",{d:"M3 3l18 18",key:"svg-4"}]]),ia=Z("minus","IconMinus",[["path",{d:"M5 12l14 0",key:"svg-0"}]]);async function la({data:a}){const s=new FormData;for(const[r,o]of Object.entries(a))o&&(Array.isArray(o)?o.forEach((i,l)=>{s.append(`${r}[${l}]`,i.toString())}):s.append(r,o.toString()));return(await T.post("/ar-service/order",s)).data}function ca({config:a}={}){return Pe(la,{...a,onSuccess:(...s)=>{_e.invalidateQueries(["carts"]),a!=null&&a.onSuccess&&a.onSuccess(...s)}})}async function da({params:a}){return(await T.get("/ar-service/tender",{params:a})).data.data}function ua({config:a,params:s}={}){return ee({...a,queryKey:["tenders",s],queryFn:()=>da({params:s}),keepPreviousData:!0})}const ma={main:"Unit",accessories:"Accessories",preventive:"Service/Sparepart"},ue=({carts:a,selected:s,onChange:t,readOnly:r=!1})=>{const{updateCart:o}=B();async function i(n,c){if(c==0)return C.openConfirmModal({title:"Hapus Keranjang",children:e.jsx("div",{className:"text-sm",children:"Apakah Anda yakin untuk menghapus keranjang?"}),onConfirm:async()=>{await o(n,c)}});await o(n,c)}function l(n){return()=>s.includes(n)?t(s.filter(c=>c!==n)):t([...s,n])}return e.jsx("div",{className:"divide-y divide-gray-300",children:a.map(n=>e.jsxs("div",{className:"bg-white w-full px-4 py-4 flex items-center",children:[e.jsxs("div",{className:"flex-grow flex items-center space-x-4",children:[!r&&e.jsx("div",{children:e.jsx(E,{checked:s.includes(n.product_id),onChange:l(n.product_id)})}),e.jsx("div",{className:"w-20 h-20 bg-gray-200 rounded-md flex-shrink-0"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"text-primary-600 text-sm",children:ma[n.product.type]}),e.jsx("div",{className:"text-gray-900 font-semibold",children:n.product.name}),e.jsxs("div",{className:"text-primary-600 text-sm",children:[n.product.brand.name,", ",n.product.category.name]})]})]}),e.jsx("div",{className:"flex-shrink-0",children:r?e.jsxs("div",{className:"text-sm text-primary-600",children:["Jumlah (",e.jsx("strong",{children:n.quantity}),")"]}):e.jsxs("div",{className:"flex items-center justify-center flex-shrink-0",children:[e.jsx(K,{onClick:()=>i(n.id,n.quantity-1),size:20,variant:"outline",color:"primary",radius:"100%",children:e.jsx(ia,{className:"p-px"})}),e.jsx(qe,{hideControls:!0,min:0,step:1,variant:"unstyled",readOnly:!0,value:n.quantity,className:"[&_input]:w-8 [&_input]:text-center border-b border-gray-200 px-2"}),e.jsx(K,{onClick:()=>i(n.id,n.quantity+1),size:20,variant:"outline",color:"primary",radius:"100%",children:e.jsx(Fe,{className:"p-px"})})]})})]},n.id))})},pa=({status:a})=>{switch(a){case"pending":return e.jsx(_,{variant:"light",color:"gray",children:"Menunggu"});case"approved":return e.jsx(_,{variant:"light",color:"green",children:"Diterima"});case"rejected":return e.jsx(_,{variant:"light",color:"red",children:"Ditolak"});default:return e.jsx(_,{variant:"light",color:"gray",children:"Pending"})}},ha={page:1,limit:10,search:""},xa={main:"Unit",accessories:"Accessories",preventive:"Service/Sparepart"},ga=({toolbar:a})=>{const[s,t]=p.useState(ha),{data:r,isLoading:o}=ua({params:s});return e.jsx(Be,{title:"Tabel Data Penawaran",toolbar:a,header:["Produk","PIC","Status","Diperbaharui",""],items:r==null?void 0:r.data,onPageChange:i=>{t({...s,page:i})},loading:o,metadata:{count:(r==null?void 0:r.data.length)||10,limit:s.limit||10,page:s.page||10,total:(r==null?void 0:r.total)||10},renderItem:i=>e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("div",{className:"text-xs text-primary-600",children:xa[i.details[0].product.type]}),e.jsx("div",{className:"text-sm text-gray-900",children:i.details[0].product.name}),e.jsx("div",{className:"text-xs text-gray-600 mt-1",children:"+ 3 produk lainnya"})]}),e.jsxs("td",{children:[e.jsxs("div",{className:"text-gray-900",children:[i.recipient_name," / ",i.recipient_phone]}),e.jsx("div",{className:"text-xs text-gray-600",children:i.recipient_position})]}),e.jsx("td",{children:e.jsx(pa,{status:i.status})}),e.jsx("td",{children:Se(i.updatedAt).format("D MMMM YYYY H:mm")}),e.jsx("td",{})]},i.id)})},va=({onSubmit:a,onCancel:s})=>{const t=te({initialValues:{phone:"",address:""}}),r=t.onSubmit(async()=>{a(t.values),t.reset()});return e.jsxs("form",{onSubmit:r,children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(S,{...t.getInputProps("phone"),required:!0,label:"No Telepon",placeholder:"Masukan No Telepon"}),e.jsx(De,{...t.getInputProps("address"),required:!0,label:"Alamat",placeholder:"Masukan Alamat"})]}),e.jsxs("div",{className:"flex items-center gap-4 mt-4",children:[e.jsx(w,{type:"submit",children:"Simpan"}),e.jsx(w,{type:"button",variant:"default",onClick:s,children:"Batal"})]})]})},Oa=()=>{const{carts:a}=B(),s=ae(),[t,r]=re({key:"selected-cart",defaultValue:[]}),o=p.useMemo(()=>a.filter(({product_id:l})=>t.includes(l)).reduce((l,n)=>l+n.quantity,0),[a,t]);function i(){r(a.filter(({product_id:l})=>t.includes(l)).map(({product_id:l})=>l)),s("/cart/checkout")}return e.jsxs("main",{children:[e.jsx("div",{className:"mb-4 flex items-center justify-between",children:e.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Keranjang"})}),e.jsxs("div",{className:"grid grid-cols-12 gap-6",children:[e.jsxs("div",{className:"col-span-12 lg:col-span-8 rounded-md overflow-hidden",children:[e.jsx(ue,{carts:a,selected:t,onChange:l=>r(l)}),a.length==0&&e.jsxs("div",{className:"bg-white rounded-md w-full p-12 flex flex-col items-center justify-center text-center",children:[e.jsx(oa,{size:42,stroke:1.2,className:"text-gray-600 mb-2"}),e.jsx("h3",{className:"text-lg font-bold",children:"Keranjang Kosong"}),e.jsx("p",{className:"mb-4 text-gray-600",children:"Anda belum pernah menambahkan produk kedalam keranjang"}),e.jsx(w,{component:Oe,to:"/product",leftSection:e.jsx(Ie,{size:17}),children:"Lihat Katalog"})]})]}),e.jsx("div",{className:"col-span-12 lg:col-span-4",children:e.jsxs("div",{className:"bg-white w-full p-4 rounded-md",children:[e.jsxs("div",{className:"border-b border-gray-200 pb-4",children:[e.jsx("h3",{className:"text-base text-gray-800 font-medium mb-2",children:"Ringkasan Belanja"}),e.jsxs("p",{className:"text-primary-600 text-sm",children:["Jumlah Barang (",o,")"]})]}),e.jsx("div",{className:"pt-4",children:e.jsx(w,{onClick:i,fullWidth:!0,disabled:o==0,children:"Beli"})})]})})]})]})};async function fa(){return(await T.get("/ar-service/profile/biodata")).data.data}function ba({config:a}={}){return ee({...a,queryKey:["biodata"],queryFn:()=>fa()})}const Ia=()=>{const{carts:a}=B(),s=ae(),{data:t,isLoading:r,isError:o}=ba(),i=ca(),l=te({initialValues:{name:"",carts:[],address:"",kecamatan_id:void 0,phone:"",position:""}}),[n,c]=re({key:"selected-cart",defaultValue:[]}),f=l.onSubmit(async d=>{C.openConfirmModal({title:"Checkout",children:e.jsx("div",{className:"text-sm",children:"Apakah data yang Anda masukan sudah benar?"}),onConfirm:async()=>{await i.mutateAsync({data:{...d,carts:n}},{onSuccess:()=>{W.show({message:"Penawaran berhasil dibuat",color:"green"}),c([]),s("/tender")},onError:()=>{W.show({message:"Penawaran gagal dibuat",color:"green"})}})}})});p.useEffect(()=>{t&&l.setValues({...l.values,address:t.address,kecamatan_id:t.kecamatan_id,phone:t.phone_number})},[t]);const h=p.useMemo(()=>a.filter(({product_id:d})=>n.includes(d)).reduce((d,x)=>d+x.quantity,0),[a,n]);function b(){C.open({modalId:"address-modal",title:"Ubah Alamat",centered:!0,children:e.jsx(va,{onCancel:()=>C.close("address-modal"),onSubmit:d=>{l.setFieldValue("address",d.address),l.setFieldValue("phone",d.phone),C.close("address-modal")}})})}return r||o?e.jsx("div",{className:"my-24",children:e.jsx(ze,{})}):e.jsxs("main",{children:[e.jsx("div",{className:"mb-4 flex items-center justify-between",children:e.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Checkout"})}),e.jsxs("form",{onSubmit:f,className:"grid grid-cols-12 gap-6",children:[e.jsxs("div",{className:"col-span-12 md:col-span-8 lg:col-span-9 space-y-6",children:[e.jsx("div",{className:"space-y-2",children:e.jsxs($e,{p:"lg",children:[e.jsx("div",{className:"border-b border-gray-200 pb-2",children:e.jsx("h2",{className:"text-base text-gray-900 font-medium",children:"Penanggung Jawab"})}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6 py-2",children:[e.jsx(S,{...l.getInputProps("name"),required:!0,label:"Nama PIC",placeholder:"Ex :  Sarimin"}),e.jsx(S,{...l.getInputProps("position"),required:!0,label:"Jabatan",placeholder:"Ex : Direktur"}),e.jsx(S,{label:"Nomor HP",required:!0,placeholder:"Ex : 085752140606"})]}),e.jsx("div",{className:"border-b border-gray-200 pb-2 mt-4",children:e.jsx("h2",{className:"text-base text-gray-900 font-medium",children:"Alamat Pengiriman"})}),e.jsxs("div",{className:"pt-2",children:[e.jsx("div",{className:"text-primary-600 font-bold mb-1",children:t.name}),e.jsx("div",{className:"font-bold",children:l.values.phone}),e.jsx("div",{className:"text-sm text-gray-600",children:l.values.address}),e.jsx(w,{onClick:b,variant:"outline",className:"mt-4",size:"xs",children:"Ganti Alamat Lain"})]})]})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:"Pesanan"}),e.jsx("div",{className:"rounded-md overflow-hidden",children:e.jsx(ue,{carts:a.filter(({product_id:d})=>n.includes(d)),selected:n,onChange:d=>c(d),readOnly:!0})})]})]}),e.jsx("div",{className:"col-span-12 md:col-span-4 lg:col-span-3",children:e.jsxs("div",{className:"bg-white w-full p-4 rounded-md",children:[e.jsxs("div",{className:"border-b border-gray-200 pb-4",children:[e.jsx("h3",{className:"text-base text-gray-800 font-medium mb-2",children:"Ringkasan Belanja"}),e.jsxs("p",{className:"text-primary-600 text-sm",children:["Jumlah Barang (",h,")"]})]}),e.jsx("div",{className:"pt-4",children:e.jsx(w,{type:"submit",fullWidth:!0,disabled:n.length==0,loading:i.isLoading,children:"Penawaran"})})]})})]})]})},Ea=()=>e.jsxs("main",{children:[e.jsx("div",{className:"mb-4 flex items-center justify-between",children:e.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Data Penawaran"})}),e.jsx("section",{className:"mb-8",children:e.jsx(ga,{})})]});export{va as AddressForm,ue as CartList,Ta as CartMenu,Ba as CartProvider,Oa as Carts,Ia as Checkout,ga as TenderTable,Ea as Tenders,B as useCart};
