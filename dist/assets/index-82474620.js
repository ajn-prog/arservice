import{c as D,j as e,L as x,u as h,q as j,a as u,i as b,J as g,r as I,f as P,B as c,m,n as p,I as F,h as y,K as M,M as K,k as B,e as L}from"./index-36612c22.js";import{T as z,C as d}from"./Table-d19d24ae.js";import{I as A}from"./IconEye-d1378de9.js";import{I as _,a as $,S as E}from"./IconTrash-ab565fc3.js";import{T as v}from"./TextEditor-887f2f57.js";import{L as T}from"./LoadingScreen-3146461c.js";import{F as N}from"./FileDropzone-36203138.js";import{u as S,T as f}from"./use-form-a2f7cbce.js";import{I as R}from"./IconArrowLeft-ace68926.js";import{I as H}from"./InstallationSelect-8a564acd.js";import"./clamp-73f6bef2.js";var V=D("paperclip","IconPaperclip",[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]]);const C=({files:s})=>{function a(l){try{const n=new URL(l).pathname.split("/"),r=n[n.length-1];return r!==""?r:null}catch{return"unknown file"}}return e.jsx("div",{className:"space-y-1",children:s.map((l,t)=>e.jsxs(x,{to:l,target:"_blank",className:"flex items-center text-sm text-primary-600 line-clamp-1",children:[e.jsx(V,{size:16,className:"flex-shrink-0"}),e.jsx("span",{className:"ml-2",children:a(l)})]},`${l}_${t}`))})};async function Y({data:s}){const a=new FormData;for(const[t,i]of Object.entries(s))i&&(Array.isArray(i)?i.forEach((n,r)=>{i instanceof File?a.append(`${t}[${r}]`,n,n.name):a.append(`${t}[${r}]`,n)}):a.append(t,i.toString()));return(await u.post("/ar-service/complain",a)).data}function q({config:s}={}){return h(Y,{...s,onSuccess:(...a)=>{j.invalidateQueries(["complains"]),s!=null&&s.onSuccess&&s.onSuccess(...a)}})}async function J({params:s}){return(await u.get("/ar-service/complain",{params:s})).data.data}function O({config:s,params:a}={}){return b({...s,queryKey:["complains",a],queryFn:()=>J({params:a}),keepPreviousData:!0})}async function Q({id:s}){return(await u.get(`/ar-service/complain/${s}`)).data.data}function U({config:s,id:a}){return b({...s,queryKey:["complain",a],queryFn:()=>Q({id:a})})}async function X({id:s}){return(await u.delete(`/ar-service/complain/${s}`)).data}function G({config:s}={}){return h(X,{...s,onSuccess:(...a)=>{j.invalidateQueries(["complains"]),s!=null&&s.onSuccess&&s.onSuccess(...a)}})}async function W({data:s}){const a=new FormData;for(const[t,i]of Object.entries(s))i&&(Array.isArray(i)?i.forEach((n,r)=>{i instanceof File?a.append(`${t}[${r}]`,n,n.name):a.append(`${t}[${r}]`,n)}):a.append(t,i.toString()));return(await u.post("/ar-service/complain/reply",a)).data}function Z({config:s}={}){return h(W,{...s,onSuccess:(...a)=>{j.invalidateQueries(["complain"]),s!=null&&s.onSuccess&&s.onSuccess(...a)}})}const w=({status:s,...a})=>{switch(s){case"open":return e.jsx(g,{variant:"light",color:"red",...a,children:"Open"});case"closed":return e.jsx(g,{variant:"light",color:"gray",...a,children:"Closed"});default:return null}},ee={page:1,limit:10,search:""},ae=({toolbar:s})=>{const[a,l]=I.useState(ee),{data:t,isLoading:i}=O({params:a}),n=G();function r(o){return()=>{m.openConfirmModal({title:"Hapus Komplain",children:e.jsx("div",{className:"text-sm",children:"Apakah anda yakin untuk menghapus komplain ini?"}),centered:!0,closeOnConfirm:!1,onConfirm:async()=>{await n.mutateAsync({id:o},{onSuccess:()=>{p.show({message:"Komplain berhasil dihapus",color:"green",icon:e.jsx($,{})}),m.closeAll()},onError:()=>{p.show({message:"Komplain tidak bisa dihapus",color:"red",icon:e.jsx(F,{})}),m.closeAll()}})}})}}return e.jsx(z,{title:"Tabel Data Komplain",toolbar:s,header:["#","Judul","Prioritas","Produk","Instansi","Status","Diperbaharui",""],items:t==null?void 0:t.data,onPageChange:o=>{l({...a,page:o})},loading:i,metadata:{count:(t==null?void 0:t.data.length)||10,limit:a.limit||10,page:a.page||10,total:(t==null?void 0:t.total)||10},renderItem:(o,k)=>e.jsxs("tr",{children:[e.jsx("td",{children:(a.limit??5)*((a.page??0)-1)+k+1}),e.jsx("td",{children:o.title}),e.jsx("td",{className:"capitalize",children:o.priority}),e.jsx("td",{children:o.installbase.product.name}),e.jsx("td",{children:o.installbase.customer.name}),e.jsx("td",{children:e.jsx(w,{status:o.status})}),e.jsx("td",{children:P(o.updatedAt).format("D MMMM YYYY H:mm")}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{component:x,leftSection:e.jsx(A,{size:16}),to:`/complain/${o.id}`,title:"Update Komplain",color:"primary",size:"xs",children:"Detail"}),e.jsx(c,{leftSection:e.jsx(_,{size:16}),onClick:r(o.id),title:"Hapus Komplain",color:"red",size:"xs",children:"Hapus"})]})})]},o.id)})},se=()=>{const s=y(),{mutateAsync:a,isLoading:l}=q(),t=S({initialValues:{title:"",detail:"",filename:[],installbase_id:void 0,placement_space:"",priority:void 0,status:"open"}}),i=t.onSubmit(async n=>{await a({data:{...n}},{onSuccess:()=>{p.show({color:"green",message:"Komplain berhasil dibuat"}),s("/complain")},onError:({response:r})=>{t.setErrors((r==null?void 0:r.data).errors),p.show({color:"red",message:"Komplain gagal dibuat"})}})});return e.jsxs(d,{component:"form",onSubmit:i,shadow:"lg",children:[e.jsx(d.Section,{p:"lg",withBorder:!0,children:e.jsx("h2",{className:"font-semibold text-base",children:"Tambah Data Komplain"})}),e.jsx(d.Section,{p:"lg",pt:"xs",withBorder:!0,children:e.jsxs("div",{className:"grid grid-cols-12 gap-x-6 gap-y-4",children:[e.jsx(f,{...t.getInputProps("title"),label:"Judul",placeholder:"Masukan Judul",className:"col-span-12 md:col-span-8"}),e.jsx(E,{...t.getInputProps("priority"),label:"Proritas",placeholder:"Pilih Prioritas",data:[{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"}],className:"col-span-12 md:col-span-2"}),e.jsx(f,{...t.getInputProps("placement_space"),label:"Ruang Penempatan",placeholder:"Ex: Radiologi",className:"col-span-12 md:col-span-2"}),e.jsx(H,{...t.getInputProps("installbase_id"),label:"Produk",placeholder:"Pilih Produk",className:"col-span-12 md:col-span-12",nothingFoundMessage:"Data tidak ditemukan"}),e.jsx("div",{className:"col-span-12",children:e.jsx(v,{label:"Detail",value:t.values.detail,onChange:n=>t.setFieldValue("detail",n)})}),e.jsx("div",{className:"col-span-12",children:e.jsx(N,{value:t.values.filename,onDrop:n=>t.setFieldValue("filename",n),label:"Foto/Video Pendukung",maxFiles:5,maxSize:5*1024**2})})]})}),e.jsxs(d.Section,{p:"lg",withBorder:!0,className:"flex items-center space-x-4",children:[e.jsx(c,{type:"submit",loading:l,children:"Simpan"}),e.jsx(c,{component:x,to:"/complain",variant:"light",color:"gray.6",bg:"gray.2",children:"Batal"})]})]})},te=({replies:s})=>s.length==0?e.jsx("div",{className:"text-gray-600",children:"Belum ada balasan"}):e.jsx("div",{className:"space-y-4",children:s.map(a=>e.jsxs("div",{className:"border border-gray-300 rounded-md",children:[e.jsx("div",{className:"p-4 border-b border-gray-300 flex items-center justify-between",children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"p-2 bg-gray-200 text-gray-600 rounded-full",children:e.jsx(M,{size:24})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-sm",children:a.user.profile.name}),e.jsx("div",{className:"text-xs text-gray-600",children:K(a.createdAt).format("D MMMM YYYY HH:mm")})]})]})}),e.jsxs("div",{className:"p-4",children:[e.jsx("div",{className:"prose prose-sm mb-4",dangerouslySetInnerHTML:{__html:a.detail}}),e.jsx(C,{files:a.complain_files.map(({filename:l})=>l)})]})]},a.id))}),le=({complain:s,onCancel:a,onSuccess:l})=>{const t=Z(),i=S({initialValues:{complain_id:s,detail:"",filename:[]}}),n=i.onSubmit(async r=>{await t.mutateAsync({data:r},{onSuccess:()=>{p.show({color:"green",message:"Balasan berhasil dibuat"}),l&&l()},onError:({response:o})=>{i.setErrors((o==null?void 0:o.data).errors),p.show({color:"red",message:"Balasan gagal dibuat"})}})});return e.jsxs("form",{onSubmit:n,children:[e.jsxs("div",{className:"grid grid-cols-12 gap-x-6 gap-y-4",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(v,{label:"Pesan",value:i.values.detail,onChange:r=>i.setFieldValue("detail",r)})}),e.jsx("div",{className:"col-span-12",children:e.jsx(N,{value:i.values.filename,onDrop:r=>i.setFieldValue("filename",r),label:"Foto/Video Pendukung",maxFiles:5,maxSize:5*1024**2})})]}),e.jsxs("div",{className:"flex items-center space-x-2 mt-4",children:[e.jsx(c,{type:"submit",loading:t.isLoading,children:"Simpan"}),e.jsx(c,{variant:"light",color:"gray.6",bg:"gray.2",onClick:a,loading:t.isLoading,children:"Batal"})]})]})},je=()=>e.jsxs("main",{children:[e.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[e.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Data Komplain"}),e.jsx(c,{component:x,to:"/complain/create",children:"Tambah"})]}),e.jsx("section",{className:"mb-8",children:e.jsx(ae,{})})]}),ge=()=>{const{id:s}=B(),a=y(),{data:l,isLoading:t,isError:i}=U({id:s});function n(){l&&m.open({modalId:"complain-reply",title:"Balas Komplain",size:"xl",children:e.jsx(le,{complain:l.id,onCancel:()=>m.close("complain-reply"),onSuccess:()=>m.close("complain-reply")})})}return t?e.jsx("div",{className:"mt-48",children:e.jsx(T,{})}):i?e.jsxs("div",{className:"mt-48 text-center",children:[e.jsx("h1",{className:"text-lg font-bold mb-2",children:"Data komplain tidak ditemukan"}),e.jsx(c,{onClick:()=>a(-1),leftSection:e.jsx(R,{size:14}),children:"Kembali"})]}):e.jsxs("main",{children:[e.jsx("div",{className:"mb-4 flex items-center justify-between",children:e.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Detail Komplain"})}),e.jsxs(d,{children:[e.jsxs(d.Section,{px:"lg",py:"md",withBorder:!0,children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between space-y-3 border-b border-gray-300 pb-4",children:[e.jsxs("div",{className:"flex-grow",children:[e.jsx(w,{status:l.status,radius:"sm"}),e.jsxs("h1",{className:"font-bold text-xl text-gray-800 mt-1 mb-1",children:[l.title," #",l.id]}),e.jsxs("p",{className:"text-xs text-gray-600",children:["Dibuka oleh ",e.jsx("span",{className:"font-bold",children:"Dwa Meizadewa"})," pada 4 minggu yang lalu."]})]}),e.jsxs("div",{className:"text-sm md:text-base",children:["Priority:"," ",e.jsx("span",{className:L("capitalize",l.priority=="high"?"text-red-600":l.priority=="medium"?"text-primary-600":"text-green-600"),children:l.priority})]})]}),e.jsxs("div",{className:"pt-4",children:[e.jsx("div",{className:"prose prose-sm mb-4",dangerouslySetInnerHTML:{__html:l.detail}}),e.jsx(C,{files:l.complain_files.map(({filename:r})=>r)})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("div",{className:"mb-2",children:e.jsx("h3",{className:"text-base font-bold",children:"Balasan"})}),e.jsx(te,{replies:l.complain_reply})]})]}),e.jsx(d.Section,{p:"lg",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{onClick:n,children:"Reply"}),e.jsx(c,{color:"red",children:"Close"})]})})]})]})},fe=()=>e.jsxs("main",{children:[e.jsx("div",{className:"mb-4 flex items-center justify-between",children:e.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Data Komplain"})}),e.jsx(se,{})]});export{fe as ComplainCreate,ge as ComplainDetail,je as Complains};