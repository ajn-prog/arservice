import{j as e,L as x,u as j,q as g,a as p,k as y,P as h,r as D,g as I,B as c,m,n as u,I as P,i as b,Q as F,S as M,l as K,f as B}from"./index-74cdd8a8.js";import{T as L,I as z,C as d,L as A}from"./Table-2b317a99.js";import{I as _}from"./IconEye-8bede141.js";import{I as $,S as E}from"./IconTrash-fcd6c897.js";import{T as v}from"./TextEditor-40ac08f9.js";import{I as T,a as R}from"./ItemSelect-8c2b343b.js";import{F as N}from"./FileDropzone-c21111b8.js";import{u as S}from"./use-form-b4366f35.js";import{I as H}from"./IconArrowLeft-6673068f.js";import{T as f}from"./TextInput-fb061973.js";import"./clamp-73f6bef2.js";import"./IconPhoto-3bf5c069.js";const w=({files:s})=>{function a(i){try{const n=new URL(i).pathname.split("/"),r=n[n.length-1];return r!==""?r:null}catch{return"unknown file"}}return e.jsx("div",{className:"space-y-1",children:s.map((i,t)=>e.jsxs(x,{to:i,target:"_blank",className:"flex items-center text-sm text-primary-600 line-clamp-1",children:[e.jsx(T,{size:16,className:"flex-shrink-0"}),e.jsx("span",{className:"ml-2",children:a(i)})]},`${i}_${t}`))})};async function V({data:s}){const a=new FormData;for(const[t,l]of Object.entries(s))l&&(Array.isArray(l)?l.forEach((n,r)=>{l instanceof File?a.append(`${t}[${r}]`,n,n.name):a.append(`${t}[${r}]`,n)}):a.append(t,l.toString()));return(await p.post("/ar-service/complain",a)).data}function Y({config:s}={}){return j(V,{...s,onSuccess:(...a)=>{g.invalidateQueries(["complains"]),s!=null&&s.onSuccess&&s.onSuccess(...a)}})}async function q({params:s}){return(await p.get("/ar-service/complain",{params:s})).data.data}function Q({config:s,params:a}={}){return y({...s,queryKey:["complains",a],queryFn:()=>q({params:a}),keepPreviousData:!0})}async function J({id:s}){return(await p.get(`/ar-service/complain/${s}`)).data.data}function O({config:s,id:a}){return y({...s,queryKey:["complain",a],queryFn:()=>J({id:a})})}async function U({id:s}){return(await p.delete(`/ar-service/complain/${s}`)).data}function X({config:s}={}){return j(U,{...s,onSuccess:(...a)=>{g.invalidateQueries(["complains"]),s!=null&&s.onSuccess&&s.onSuccess(...a)}})}async function G({data:s}){const a=new FormData;for(const[t,l]of Object.entries(s))l&&(Array.isArray(l)?l.forEach((n,r)=>{l instanceof File?a.append(`${t}[${r}]`,n,n.name):a.append(`${t}[${r}]`,n)}):a.append(t,l.toString()));return(await p.post("/ar-service/complain/reply",a)).data}function W({config:s}={}){return j(G,{...s,onSuccess:(...a)=>{g.invalidateQueries(["complain"]),s!=null&&s.onSuccess&&s.onSuccess(...a)}})}const C=({status:s,...a})=>{switch(s){case"progress":return e.jsx(h,{variant:"light",color:"gray",...a,children:"Diproses"});case"close":return e.jsx(h,{variant:"light",color:"green",...a,children:"Selesai"});case"waiting":return e.jsx(h,{variant:"light",color:"red",...a,children:"Menunggu"});default:return null}},Z={page:1,limit:10,search:""},ee=({toolbar:s})=>{const[a,i]=D.useState(Z),{data:t,isLoading:l}=Q({params:a}),n=X();function r(o){return()=>{m.openConfirmModal({title:"Hapus Komplain",children:e.jsx("div",{className:"text-sm",children:"Apakah anda yakin untuk menghapus komplain ini?"}),centered:!0,closeOnConfirm:!1,onConfirm:async()=>{await n.mutateAsync({id:o},{onSuccess:()=>{u.show({message:"Komplain berhasil dihapus",color:"green",icon:e.jsx(z,{})}),m.closeAll()},onError:()=>{u.show({message:"Komplain tidak bisa dihapus",color:"red",icon:e.jsx(P,{})}),m.closeAll()}})}})}}return e.jsx(L,{title:"Tabel Data Komplain",toolbar:s,header:["#","Judul","Prioritas","Produk","Instansi","Status","Diperbaharui",""],items:t==null?void 0:t.data,onPageChange:o=>{i({...a,page:o})},loading:l,metadata:{count:(t==null?void 0:t.data.length)||10,limit:a.limit||10,page:a.page||10,total:(t==null?void 0:t.total)||10},renderItem:(o,k)=>e.jsxs("tr",{children:[e.jsx("td",{children:(a.limit??5)*((a.page??0)-1)+k+1}),e.jsx("td",{children:o.title}),e.jsx("td",{className:"capitalize",children:o.priority}),e.jsx("td",{children:o.title}),e.jsx("td",{children:o.title}),e.jsx("td",{children:e.jsx(C,{status:o.status})}),e.jsx("td",{children:I(o.updatedAt).format("D MMMM YYYY H:mm")}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{component:x,leftSection:e.jsx(_,{size:16}),to:`/complain/${o.id}`,title:"Update Komplain",color:"primary",size:"xs",children:"Detail"}),e.jsx(c,{leftSection:e.jsx($,{size:16}),onClick:r(o.id),title:"Hapus Komplain",color:"red",size:"xs",children:"Hapus"})]})})]},o.id)})},ae=()=>{const s=b(),{mutateAsync:a,isLoading:i}=Y(),t=S({initialValues:{title:"",detail:"",filename:[],installbase_id:void 0,placement_space:"",priority:void 0,status:"waiting"}}),l=t.onSubmit(async n=>{console.log(n),await a({data:{...n}},{onSuccess:()=>{u.show({color:"green",message:"Komplain berhasil dibuat"}),s("/complain")},onError:({response:r})=>{t.setErrors((r==null?void 0:r.data).errors),u.show({color:"red",message:"Komplain gagal dibuat"})}})});return e.jsxs(d,{component:"form",onSubmit:l,shadow:"lg",children:[e.jsx(d.Section,{p:"lg",withBorder:!0,children:e.jsx("h2",{className:"font-semibold text-base",children:"Tambah Data Komplain"})}),e.jsx(d.Section,{p:"lg",pt:"xs",withBorder:!0,children:e.jsxs("div",{className:"grid grid-cols-12 gap-x-6 gap-y-4",children:[e.jsx(f,{...t.getInputProps("title"),label:"Judul",placeholder:"Masukan Judul",className:"col-span-12 md:col-span-8"}),e.jsx(E,{...t.getInputProps("priority"),label:"Proritas",placeholder:"Pilih Prioritas",data:[{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"}],className:"col-span-12 md:col-span-2"}),e.jsx(f,{...t.getInputProps("placement_space"),label:"Ruang Penempatan",placeholder:"Ex: Radiologi",className:"col-span-12 md:col-span-2"}),e.jsx(R,{...t.getInputProps("installbase_id"),label:"Produk",placeholder:"Pilih Produk",className:"col-span-12 md:col-span-12",nothingFoundMessage:"Data tidak ditemukan"}),e.jsx("div",{className:"col-span-12",children:e.jsx(v,{label:"Detail",value:t.values.detail,onChange:n=>t.setFieldValue("detail",n)})}),e.jsx("div",{className:"col-span-12",children:e.jsx(N,{value:t.values.filename,onDrop:n=>t.setFieldValue("filename",n),label:"Foto/Video Pendukung",maxFiles:5,maxSize:5*1024**2})})]})}),e.jsxs(d.Section,{p:"lg",withBorder:!0,className:"flex items-center space-x-4",children:[e.jsx(c,{type:"submit",loading:i,children:"Simpan"}),e.jsx(c,{component:x,to:"/complain",variant:"light",color:"gray.6",bg:"gray.2",children:"Batal"})]})]})},se=({replies:s})=>s.length==0?e.jsx("div",{className:"text-gray-600",children:"Belum ada balasan"}):e.jsx("div",{className:"space-y-4",children:s.map(a=>e.jsxs("div",{className:"border border-gray-300 rounded-md",children:[e.jsx("div",{className:"p-4 border-b border-gray-300 flex items-center justify-between",children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"p-2 bg-gray-200 text-gray-600 rounded-full",children:e.jsx(F,{size:24})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-sm",children:a.user.profile.name}),e.jsx("div",{className:"text-xs text-gray-600",children:M(a.createdAt).format("D MMMM YYYY HH:mm")})]})]})}),e.jsxs("div",{className:"p-4",children:[e.jsx("div",{className:"prose prose-sm mb-4",dangerouslySetInnerHTML:{__html:a.detail}}),e.jsx(w,{files:a.complain_files.map(({filename:i})=>i)})]})]},a.id))}),te=({complain:s,onCancel:a,onSuccess:i})=>{const t=W(),l=S({initialValues:{complain_id:s,detail:"",filename:[]}}),n=l.onSubmit(async r=>{await t.mutateAsync({data:r},{onSuccess:()=>{u.show({color:"green",message:"Balasan berhasil dibuat"}),i&&i()},onError:({response:o})=>{l.setErrors((o==null?void 0:o.data).errors),u.show({color:"red",message:"Balasan gagal dibuat"})}})});return e.jsxs("form",{onSubmit:n,children:[e.jsxs("div",{className:"grid grid-cols-12 gap-x-6 gap-y-4",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(v,{label:"Pesan",value:l.values.detail,onChange:r=>l.setFieldValue("detail",r)})}),e.jsx("div",{className:"col-span-12",children:e.jsx(N,{value:l.values.filename,onDrop:r=>l.setFieldValue("filename",r),label:"Foto/Video Pendukung",maxFiles:5,maxSize:5*1024**2})})]}),e.jsxs("div",{className:"flex items-center space-x-2 mt-4",children:[e.jsx(c,{type:"submit",loading:t.isLoading,children:"Simpan"}),e.jsx(c,{variant:"light",color:"gray.6",bg:"gray.2",onClick:a,loading:t.isLoading,children:"Batal"})]})]})},je=()=>e.jsxs("main",{children:[e.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[e.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Data Komplain"}),e.jsx(c,{component:x,to:"/complain/create",children:"Tambah"})]}),e.jsx("section",{className:"mb-8",children:e.jsx(ee,{})})]}),ge=()=>{const{id:s}=K(),a=b(),{data:i,isLoading:t,isError:l}=O({id:s});function n(){i&&m.open({modalId:"complain-reply",title:"Balas Komplain",size:"xl",children:e.jsx(te,{complain:i.id,onCancel:()=>m.close("complain-reply"),onSuccess:()=>m.close("complain-reply")})})}return t?e.jsx("div",{className:"mt-48",children:e.jsx(A,{})}):l?e.jsxs("div",{className:"mt-48 text-center",children:[e.jsx("h1",{className:"text-lg font-bold mb-2",children:"Data komplain tidak ditemukan"}),e.jsx(c,{onClick:()=>a(-1),leftSection:e.jsx(H,{size:14}),children:"Kembali"})]}):e.jsxs("main",{children:[e.jsx("div",{className:"mb-4 flex items-center justify-between",children:e.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Detail Komplain"})}),e.jsxs(d,{children:[e.jsxs(d.Section,{px:"lg",py:"md",withBorder:!0,children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between space-y-3 border-b border-gray-300 pb-4",children:[e.jsxs("div",{className:"flex-grow",children:[e.jsx(C,{status:i.status,radius:"sm"}),e.jsxs("h1",{className:"font-bold text-xl text-gray-800 mt-1 mb-1",children:[i.title," #",i.id]}),e.jsxs("p",{className:"text-xs text-gray-600",children:["Dibuka oleh ",e.jsx("span",{className:"font-bold",children:"Dwa Meizadewa"})," pada 4 minggu yang lalu."]})]}),e.jsxs("div",{className:"text-sm md:text-base",children:["Priority:"," ",e.jsx("span",{className:B("capitalize",i.priority=="high"?"text-red-600":i.priority=="medium"?"text-primary-600":"text-green-600"),children:i.priority})]})]}),e.jsxs("div",{className:"pt-4",children:[e.jsx("div",{className:"prose prose-sm mb-4",dangerouslySetInnerHTML:{__html:i.detail}}),e.jsx(w,{files:i.complain_files.map(({filename:r})=>r)})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("div",{className:"mb-2",children:e.jsx("h3",{className:"text-base font-bold",children:"Balasan"})}),e.jsx(se,{replies:i.complain_reply})]})]}),e.jsx(d.Section,{p:"lg",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{onClick:n,children:"Reply"}),e.jsx(c,{color:"red",children:"Close"})]})})]})]})},fe=()=>e.jsxs("main",{children:[e.jsx("div",{className:"mb-4 flex items-center justify-between",children:e.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Data Komplain"})}),e.jsx(ae,{})]});export{fe as ComplainCreate,ge as ComplainDetail,je as Complains};
