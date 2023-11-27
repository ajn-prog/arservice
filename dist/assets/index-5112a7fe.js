import{c as y,j as e,L as x,u as j,q as p,a as h,m as v,O as f,r as F,g as C,B as c,n as d,o as m,p as K,l as N,P as _,Q as z,t as B,d as $,f as E}from"./index-662ce6ca.js";import{T as L}from"./Table-f670e137.js";import{I as T}from"./IconEye-74f95f14.js";import{I as R,S as H}from"./IconTrash-089e5d84.js";import{I as O,C as u,L as Q}from"./LoadingScreen-db2b141f.js";import{T as k}from"./TextEditor-d0174837.js";import{I as V,a as Y}from"./ItemSelect-9fdfa634.js";import{F as S}from"./FileDropzone-eab4d25d.js";import{u as w}from"./use-form-50b05580.js";import{I as q}from"./IconArrowLeft-8709cd4f.js";import{T as b}from"./TextInput-b29f1a6d.js";import"./ScrollArea-1c9a1fda.js";import"./clamp-73f6bef2.js";import"./IconPhoto-f4d5784f.js";var J=y("brand-whatsapp","IconBrandWhatsapp",[["path",{d:"M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9",key:"svg-0"}],["path",{d:"M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1",key:"svg-1"}]]),U=y("message","IconMessage",[["path",{d:"M8 9h8",key:"svg-0"}],["path",{d:"M8 13h6",key:"svg-1"}],["path",{d:"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z",key:"svg-2"}]]),W=y("phone-call","IconPhoneCall",[["path",{d:"M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2",key:"svg-0"}],["path",{d:"M15 7a2 2 0 0 1 2 2",key:"svg-1"}],["path",{d:"M15 3a6 6 0 0 1 6 6",key:"svg-2"}]]);const M=({files:a})=>{function s(r){try{const t=new URL(r).pathname.split("/"),i=t[t.length-1];return i!==""?i:null}catch{return"unknown file"}}return e.jsx("div",{className:"space-y-1",children:a.map((r,n)=>e.jsxs(x,{to:r,target:"_blank",className:"flex items-center text-sm text-primary-600 line-clamp-1",children:[e.jsx(V,{size:16,className:"flex-shrink-0"}),e.jsx("span",{className:"ml-2",children:s(r)})]},`${r}_${n}`))})};async function X({data:a}){const s=new FormData;for(const[n,l]of Object.entries(a))l&&(Array.isArray(l)?l.forEach((t,i)=>{l instanceof File?s.append(`${n}[${i}]`,t,t.name):s.append(`${n}[${i}]`,t)}):s.append(n,l.toString()));return(await h.post("/ar-service/complain",s)).data}function G({config:a}={}){return j(X,{...a,onSuccess:(...s)=>{p.invalidateQueries(["complains"]),a!=null&&a.onSuccess&&a.onSuccess(...s)}})}async function Z({params:a}){return(await h.get("/ar-service/complain",{params:a})).data.data}function ee({config:a,params:s}={}){return v({...a,queryKey:["complains",s],queryFn:()=>Z({params:s}),keepPreviousData:!0})}async function ae({id:a}){return(await h.get(`/ar-service/complain/${a}`)).data.data}function se({config:a,id:s}){return v({...a,queryKey:["complain",s],queryFn:()=>ae({id:s})})}async function te({id:a}){return(await h.delete(`/ar-service/complain/${a}`)).data}function ne({config:a}={}){return j(te,{...a,onSuccess:(...s)=>{p.invalidateQueries(["complains"]),a!=null&&a.onSuccess&&a.onSuccess(...s)}})}async function le({data:a}){const s=new FormData;for(const[n,l]of Object.entries(a))l&&(Array.isArray(l)?l.forEach((t,i)=>{l instanceof File?s.append(`${n}[${i}]`,t,t.name):s.append(`${n}[${i}]`,t)}):s.append(n,l.toString()));return(await h.post("/ar-service/complain/reply",s)).data}function ie({config:a}={}){return j(le,{...a,onSuccess:(...s)=>{p.invalidateQueries(["complain"]),a!=null&&a.onSuccess&&a.onSuccess(...s)}})}async function re({id:a,data:s}){return(await h.post(`/ar-service/close-complain/${a}`,s)).data}function oe({config:a}={}){return j(re,{...a,onSuccess:(...s)=>{p.invalidateQueries(["complains"]),p.invalidateQueries(["complain"]),a!=null&&a.onSuccess&&a.onSuccess(...s)}})}async function ce({data:a}){return(await h.post("/ar-service/open-call",a)).data}function de({config:a}={}){return j(ce,{...a,onSuccess:(...s)=>{p.invalidateQueries(["complains"]),p.invalidateQueries(["complain"]),a!=null&&a.onSuccess&&a.onSuccess(...s)}})}const I=({status:a,...s})=>{switch(a){case"progress":return e.jsx(f,{variant:"light",color:"gray",...s,children:"Diproses"});case"close":return e.jsx(f,{variant:"light",color:"green",...s,children:"Selesai"});case"waiting":return e.jsx(f,{variant:"light",color:"red",...s,children:"Menunggu"});default:return null}},me={page:1,limit:10,search:""},ue=({toolbar:a})=>{const[s,r]=F.useState(me),{data:n,isLoading:l}=ee({params:s}),t=ne();function i(o){return()=>{d.openConfirmModal({title:"Hapus Komplain",children:e.jsx("div",{className:"text-sm",children:"Apakah anda yakin untuk menghapus komplain ini?"}),centered:!0,closeOnConfirm:!1,onConfirm:async()=>{await t.mutateAsync({id:o},{onSuccess:()=>{m.show({message:"Komplain berhasil dihapus",color:"green",icon:e.jsx(O,{})}),d.closeAll()},onError:()=>{m.show({message:"Komplain tidak bisa dihapus",color:"red",icon:e.jsx(K,{})}),d.closeAll()}})}})}}return e.jsx(L,{title:"Tabel Data Komplain",toolbar:a,header:["#","Judul","Prioritas","Produk","Instansi","Status","Diperbaharui",""],items:n==null?void 0:n.data,onPageChange:o=>{r({...s,page:o})},loading:l,metadata:{count:(n==null?void 0:n.data.length)||10,limit:s.limit||10,page:s.page||10,total:(n==null?void 0:n.total)||10},renderItem:(o,g)=>e.jsxs("tr",{children:[e.jsx("td",{children:(s.limit??5)*((s.page??0)-1)+g+1}),e.jsx("td",{children:o.title}),e.jsx("td",{className:"capitalize",children:o.priority}),e.jsx("td",{children:o.title}),e.jsx("td",{children:o.title}),e.jsx("td",{children:e.jsx(I,{status:o.status})}),e.jsx("td",{children:C(o.updatedAt).format("D MMMM YYYY H:mm")}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{component:x,leftSection:e.jsx(T,{size:16}),to:`/complain/${o.id}`,title:"Update Komplain",color:"primary",size:"xs",children:"Detail"}),e.jsx(c,{leftSection:e.jsx(R,{size:16}),onClick:i(o.id),title:"Hapus Komplain",color:"red",size:"xs",children:"Hapus"})]})})]},o.id)})},pe=()=>{const a=N(),{mutateAsync:s,isLoading:r}=G(),n=w({initialValues:{title:"",detail:"",filename:[],installbase_id:void 0,placement_space:"",priority:void 0,status:"waiting"}}),l=n.onSubmit(async t=>{console.log(t),await s({data:{...t}},{onSuccess:()=>{m.show({color:"green",message:"Komplain berhasil dibuat"}),a("/complain")},onError:({response:i})=>{n.setErrors((i==null?void 0:i.data).errors),m.show({color:"red",message:"Komplain gagal dibuat"})}})});return e.jsxs(u,{component:"form",onSubmit:l,shadow:"lg",children:[e.jsx(u.Section,{p:"lg",withBorder:!0,children:e.jsx("h2",{className:"font-semibold text-base",children:"Tambah Data Komplain"})}),e.jsx(u.Section,{p:"lg",pt:"xs",withBorder:!0,children:e.jsxs("div",{className:"grid grid-cols-12 gap-x-6 gap-y-4",children:[e.jsx(b,{...n.getInputProps("title"),label:"Judul",placeholder:"Masukan Judul",className:"col-span-12 md:col-span-8"}),e.jsx(H,{...n.getInputProps("priority"),label:"Proritas",placeholder:"Pilih Prioritas",data:[{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"}],className:"col-span-12 md:col-span-2"}),e.jsx(b,{...n.getInputProps("placement_space"),label:"Ruang Penempatan",placeholder:"Ex: Radiologi",className:"col-span-12 md:col-span-2"}),e.jsx(Y,{...n.getInputProps("installbase_id"),label:"Produk",placeholder:"Pilih Produk",className:"col-span-12 md:col-span-12",nothingFoundMessage:"Data tidak ditemukan"}),e.jsx("div",{className:"col-span-12",children:e.jsx(k,{label:"Detail",value:n.values.detail,onChange:t=>n.setFieldValue("detail",t)})}),e.jsx("div",{className:"col-span-12",children:e.jsx(S,{value:n.values.filename,onDrop:t=>n.setFieldValue("filename",t),label:"Foto/Video Pendukung",maxFiles:5,maxSize:5*1024**2})})]})}),e.jsxs(u.Section,{p:"lg",withBorder:!0,className:"flex items-center space-x-4",children:[e.jsx(c,{type:"submit",loading:r,children:"Simpan"}),e.jsx(c,{component:x,to:"/complain",variant:"light",color:"gray.6",bg:"gray.2",children:"Batal"})]})]})},he=({replies:a})=>a.length==0?e.jsx("div",{className:"text-gray-600",children:"Belum ada balasan"}):e.jsx("div",{className:"space-y-4",children:a.map(s=>e.jsxs("div",{className:"border border-gray-300 rounded-md",children:[e.jsx("div",{className:"p-4 border-b border-gray-300 flex items-center justify-between",children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"p-2 bg-gray-200 text-gray-600 rounded-full",children:e.jsx(_,{size:24})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-sm",children:s.user.profile.name}),e.jsx("div",{className:"text-xs text-gray-600",children:z(s.createdAt).format("D MMMM YYYY HH:mm")})]})]})}),e.jsxs("div",{className:"p-4",children:[e.jsx("div",{className:"prose prose-sm mb-4",dangerouslySetInnerHTML:{__html:s.detail}}),e.jsx(M,{files:s.complain_files.map(({filename:r})=>r)})]})]},s.id))}),xe=({complain:a,onCancel:s,onSuccess:r})=>{const n=ie(),l=w({initialValues:{complain_id:a,detail:"",filename:[]}}),t=l.onSubmit(async i=>{await n.mutateAsync({data:i},{onSuccess:()=>{m.show({color:"green",message:"Balasan berhasil dibuat"}),r&&r()},onError:({response:o})=>{l.setErrors((o==null?void 0:o.data).errors),m.show({color:"red",message:"Balasan gagal dibuat"})}})});return e.jsxs("form",{onSubmit:t,children:[e.jsxs("div",{className:"grid grid-cols-12 gap-x-6 gap-y-4",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(k,{label:"Pesan",value:l.values.detail,onChange:i=>l.setFieldValue("detail",i)})}),e.jsx("div",{className:"col-span-12",children:e.jsx(S,{value:l.values.filename,onDrop:i=>l.setFieldValue("filename",i),label:"Foto/Video Pendukung",maxFiles:5,maxSize:5*1024**2})})]}),e.jsxs("div",{className:"flex items-center space-x-2 mt-4",children:[e.jsx(c,{type:"submit",loading:n.isLoading,children:"Simpan"}),e.jsx(c,{variant:"light",color:"gray.6",bg:"gray.2",onClick:s,loading:n.isLoading,children:"Batal"})]})]})},Ae=()=>e.jsxs("main",{children:[e.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[e.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Data Komplain"}),e.jsx(c,{component:x,to:"/complain/create",children:"Tambah"})]}),e.jsx("section",{className:"mb-8",children:e.jsx(ue,{})})]}),De=()=>{const{id:a}=B(),s=N(),r=oe(),n=de(),{creds:l}=$(),{data:t,isLoading:i,isError:o}=se({id:a});function g(){t&&d.open({modalId:"complain-reply",title:"Balas Komplain",size:"xl",children:e.jsx(xe,{complain:t.id,onCancel:()=>d.close("complain-reply"),onSuccess:()=>d.close("complain-reply")})})}function P(){d.openConfirmModal({title:"Open Call",children:e.jsx("div",{className:"text-sm",children:"Apakah anda yakin untuk 'open call' untuk komplain ini?"}),centered:!0,closeOnConfirm:!1,onConfirm:async()=>{await n.mutateAsync({data:{id:(t==null?void 0:t.id)||"",is_open_call:"true"}},{onSuccess:()=>{m.show({message:"Call berhasil dibuka",color:"green"}),d.closeAll()},onError:()=>{m.show({message:"Call gagal dibuka",color:"red"}),d.closeAll()}})}})}function A(){d.openConfirmModal({title:"Tutup Komplain",children:e.jsx("div",{className:"text-sm",children:"Apakah anda yakin untuk menutup komplain ini?"}),centered:!0,closeOnConfirm:!1,onConfirm:async()=>{await r.mutateAsync({id:t.id,data:{status:"close"}},{onSuccess:()=>{m.show({message:"Komplain berhasil ditutup",color:"green"}),d.closeAll()},onError:()=>{m.show({message:"Komplain gagal dihapus",color:"red"}),d.closeAll()}})}})}return i?e.jsx("div",{className:"mt-48",children:e.jsx(Q,{})}):o?e.jsxs("div",{className:"mt-48 text-center",children:[e.jsx("h1",{className:"text-lg font-bold mb-2",children:"Data komplain tidak ditemukan"}),e.jsx(c,{onClick:()=>s(-1),leftSection:e.jsx(q,{size:14}),children:"Kembali"})]}):e.jsxs("main",{children:[e.jsx("div",{className:"mb-4 flex items-center justify-between",children:e.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Detail Komplain"})}),e.jsxs(u,{children:[e.jsxs(u.Section,{px:"lg",py:"md",withBorder:!0,children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between space-y-3 border-b border-gray-300 pb-4",children:[e.jsxs("div",{className:"flex-grow",children:[e.jsx(I,{status:t.status,radius:"sm"}),e.jsxs("h1",{className:"font-bold text-xl text-gray-800 mt-1 mb-1",children:[t.title," #",t.id]}),e.jsxs("p",{className:"text-xs text-gray-600",children:["Dibuka oleh ",e.jsx("span",{className:"font-bold",children:t.customer.name})," pada"," ",C(t.createdAt).fromNow(),"."]})]}),e.jsxs("div",{className:"text-sm md:text-base",children:["Priority:"," ",e.jsx("span",{className:E("capitalize",t.priority=="high"?"text-red-600":t.priority=="medium"?"text-primary-600":"text-green-600"),children:t.priority})]})]}),e.jsxs("div",{className:"pt-4",children:[e.jsx("div",{className:"prose prose-sm mb-4",dangerouslySetInnerHTML:{__html:t.detail}}),e.jsx(M,{files:t.complain_files.map(({filename:D})=>D)})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("div",{className:"mb-2",children:e.jsx("h3",{className:"text-base font-bold",children:"Balasan"})}),e.jsx(he,{replies:t.complain_reply}),e.jsx("div",{className:"flex justify-end mt-4"})]})]}),e.jsx(u.Section,{p:"lg",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{onClick:g,leftSection:e.jsx(U,{size:16}),children:"Reply"}),!t.user_engineer&&(l==null?void 0:l.role)!="Customer"&&e.jsx(c,{onClick:P,color:"teal",leftSection:e.jsx(W,{size:16}),children:"Open Call"}),t.user_engineer&&(l==null?void 0:l.role)=="Customer"&&e.jsx(c,{component:x,to:`https://wa.me/${t.user_engineer.profile.phone}`,target:"_blank",color:"green",leftSection:e.jsx(J,{size:16}),children:"Hubungi Teknisi"}),t.status!="close"&&e.jsx(c,{color:"red",onClick:A,children:"Close"}),e.jsx(c,{component:x,to:"/complain",variant:"light",color:"gray.6",bg:"gray.2",children:"Kembali"})]})})]})]})},Fe=()=>e.jsxs("main",{children:[e.jsx("div",{className:"mb-4 flex items-center justify-between",children:e.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Data Komplain"})}),e.jsx(pe,{})]});export{Fe as ComplainCreate,De as ComplainDetail,Ae as Complains};
