import{c as S,k,a as h,u as w,q as j,r as P,j as e,L as p,b as g,B as d,m as y,n as m,i as f,Z as G,l as M,g as L}from"./index-83f02462.js";import{P as N}from"./ProductSelect-4adf9d70.js";import{I as B}from"./IconEdit-75466a24.js";import{I as T}from"./IconTrash-d719bdb8.js";import{I as $}from"./IconPlus-559040c7.js";import{P as V}from"./Pagination-944ad7cd.js";import{T as C,u as O}from"./TextEditor-e3f705c2.js";import{T as x}from"./TextInput-8700b334.js";import{F}from"./FileDropzone-8ffb74a6.js";import{u as I}from"./use-form-b88078fc.js";import{C as c,L as D}from"./LoadingScreen-1d872a53.js";import{I as E}from"./IconArrowLeft-46dd83f0.js";import"./clamp-73f6bef2.js";import"./IconPhoto-830bd5a8.js";var Y=S("category","IconCategory",[["path",{d:"M4 4h6v6h-6z",key:"svg-0"}],["path",{d:"M14 4h6v6h-6z",key:"svg-1"}],["path",{d:"M4 14h6v6h-6z",key:"svg-2"}],["path",{d:"M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-3"}]]),q=S("search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]]);const u={png:"image/png",gif:"image/gif",jpeg:"image/jpeg",svg:"image/svg+xml",webp:"image/webp",avif:"image/avif",mp4:"video/mp4",zip:"application/zip",csv:"text/csv",pdf:"application/pdf",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",exe:"application/vnd.microsoft.portable-executable"},_=[u.png,u.gif,u.jpeg,u.svg,u.webp,u.avif];async function J({params:a}){return(await h.get("/ar-service/guide-product",{params:a})).data.data}function K({config:a,params:s}={}){return k({...a,queryKey:["guides",s],queryFn:()=>J({params:s}),keepPreviousData:!0})}async function Q({data:a}){const s=new FormData;for(const[t,i]of Object.entries(a))i&&(Array.isArray(i)?i.forEach((n,o)=>{s.append(`${t}[${o}]`,n.toString())}):i instanceof Date?s.append(t,i.toJSON()):i instanceof File?s.append(t,i,i.name):s.append(t,i.toString()));return(await h.post("/ar-service/guide-product",s)).data}function H({config:a}={}){return w(Q,{...a,onSuccess:(...s)=>{j.invalidateQueries(["guides"]),a!=null&&a.onSuccess&&a.onSuccess(...s)}})}async function U({id:a}){return(await h.get(`/ar-service/guide-product/${a}`)).data.data}function z({config:a,id:s}){return k({...a,queryKey:["guide",s],queryFn:()=>U({id:s})})}async function R({id:a}){return(await h.delete(`/ar-service/guide-product/${a}`)).data}function W({config:a}={}){return w(R,{...a,onSuccess:(...s)=>{j.invalidateQueries(["guides"]),a!=null&&a.onSuccess&&a.onSuccess(...s)}})}async function Z({id:a,data:s}){const r=new FormData;for(const[i,n]of Object.entries(s))n&&(Array.isArray(n)?n.forEach((o,v)=>{r.append(`${i}[${v}]`,o.toString())}):n instanceof Date?r.append(i,n.toJSON()):n instanceof File?r.append(i,n,n.name):r.append(i,n.toString()));return(await h.post(`/ar-service/guide-product/${a}`,r)).data}function X({config:a}={}){return w(Z,{...a,onSuccess:(...s)=>{j.invalidateQueries(["guides"]),j.invalidateQueries(["guide"]),a!=null&&a.onSuccess&&a.onSuccess(...s)}})}const ee=a=>{const[s,r]=P.useState({page:1,limit:8,search:"",sort:"desc",sort_by:"created_at"}),{data:t,isLoading:i,isError:n}=K({params:{...s,...a}}),o=W();function v(l,b){return(new DOMParser().parseFromString(l,"text/html").body.textContent||"").split(/\s+/).slice(0,b).join(" ")}function A(l){return()=>{y.openConfirmModal({modalId:"guide-delete",title:"Hapus Panduan",children:e.jsx("div",{className:"text-sm",children:"Apakah Anda yakin untuk menghapus panduan ini?"}),closeOnConfirm:!1,centered:!0,onConfirm:async()=>{await o.mutateAsync({id:l.id},{onSuccess:()=>{m.show({color:"green",message:"Panduan berhasil dihapus"}),y.close("guide-delete")},onError:()=>{m.show({color:"red",message:"Panduan gagal dihapus"}),y.close("guide-delete")}})}})}}return i||n?e.jsx("div",{className:"grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:Array(4).fill(0).map((l,b)=>e.jsxs("div",{className:"w-full bg-white rounded-lg overflow-hidden",children:[e.jsx("div",{className:"w-full aspect-video bg-gray-200 animate-pulse"}),e.jsxs("div",{className:"p-4",children:[e.jsx("div",{className:"h-5 w-20 bg-gray-200 animate-pulse rounded-lg mt-1 mb-2"}),e.jsx("div",{className:"bg-gray-200 animate-pulse h-5 w-full rounded-md mb-2"}),e.jsx("div",{className:"bg-gray-200 animate-pulse h-5 w-1/2 rounded-md mb-2"}),e.jsx("div",{className:"h-4 w-12 bg-gray-200 rounded-md animate-pulse"}),e.jsx("div",{className:"space-y-2 mt-2",children:e.jsx("div",{className:"bg-gray-200 w-full h-7 rounded-md"})})]})]},`skp_${b}`))}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:t.data.map(l=>e.jsxs("div",{className:"w-full bg-white rounded-lg overflow-hidden",children:[e.jsx(p,{to:`/guide/${l.id}`,children:e.jsx("div",{className:"w-full aspect-video bg-gray-200 relative",children:l.image&&e.jsx("img",{src:l.image,alt:"",className:"absolute inset-0 w-full h-full object-cover object-center"})})}),e.jsxs("div",{className:"p-4",children:[e.jsxs(p,{to:`/guide/${l.id}`,children:[e.jsx("h2",{className:"line-clamp-2 text-base font-bold mb-1 hover:underline",children:l.title}),e.jsx("p",{className:"text-sm line-clamp-2 text-gray-600",children:v(l.description,15)})]}),e.jsx(g,{role:["Admin","Superadmin"],children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-4",children:[e.jsx(d,{component:p,to:`/guide/${l.id}/update`,variant:"light",leftSection:e.jsx(B,{size:16}),fullWidth:!0,size:"xs",children:"Edit"}),e.jsx(d,{color:"red",variant:"light",leftSection:e.jsx(T,{size:16}),fullWidth:!0,size:"xs",onClick:A(l),children:"Hapus"})]})})]})]},l.id))}),t.data.length==0&&e.jsxs("div",{className:"col-span-12 flex flex-col items-center justify-center py-24 mx-auto max-w-md",children:[e.jsxs("p",{className:"text-lg font-bold mb-4 text-center",children:["Belum ada panduan untuk produk ini",e.jsx(g,{role:["Admin","Superadmin"],children:", tekan tombol dibawah untuk menambahkan"})]}),e.jsx(g,{role:["Admin","Superadmin"],children:e.jsx(d,{component:p,to:"/guide/create",leftSection:e.jsx($,{size:16}),children:"Tambah Panduan"})})]}),e.jsx("div",{className:"my-6",children:e.jsx(V,{total:t.last_page,value:t.current_page,onChange:l=>r({...s,page:l}),withEdges:!0})})]})},ae=({product:a})=>{const s=H(),r=f(),t=I({initialValues:{product_id:a,title:"",image:void 0,description:"",video:""}}),i=t.onSubmit(async n=>{await s.mutateAsync({data:n},{onSuccess:()=>{m.show({color:"green",message:"Panduan berhasil dibuat"}),r("/guide")},onError:({response:o})=>{t.setErrors((o==null?void 0:o.data).errors),m.show({color:"red",message:"Panduan gagal dibuat"})}})});return e.jsxs(c,{component:"form",onSubmit:i,shadow:"lg",children:[e.jsx(c.Section,{p:"lg",withBorder:!0,children:e.jsx("h2",{className:"font-semibold text-base",children:"Tambah Data Panduan"})}),e.jsx(c.Section,{p:"lg",pt:"xs",withBorder:!0,children:e.jsxs("div",{className:"grid grid-cols-12 gap-x-6 gap-y-4 border-b border-gray-300",children:[e.jsx(N,{...t.getInputProps("product_id"),label:"Produk",placeholder:"Pilih Produk",className:"col-span-12 md:col-span-12",limit:20,nothingFoundMessage:"Data tidak ditemukan"}),e.jsx(x,{...t.getInputProps("title"),label:"Judul",placeholder:"Masukan Judul",className:"col-span-12"}),e.jsx(x,{...t.getInputProps("video"),label:"Link Video Youtube (Opsional)",placeholder:"https://",className:"col-span-12"}),e.jsx("div",{className:"col-span-12",children:e.jsx(F,{label:"Foto Sampul",value:t.values.image,onDrop:n=>{t.setFieldValue("image",n[0])},accept:_,maxSize:5*1024**2,maxFiles:1,multiple:!1})}),e.jsx("div",{className:"col-span-12",children:e.jsx(C,{value:t.values.description,onChange:n=>t.setFieldValue("description",n)})})]})}),e.jsxs(c.Section,{p:"lg",withBorder:!0,className:"flex justify-start items-center space-x-4",children:[e.jsx(d,{type:"submit",loading:s.isLoading,children:"Simpan"}),e.jsx(d,{onClick:()=>r(-1),variant:"light",color:"gray.6",bg:"gray.2",children:"Batal"})]})]})},se=({guide:a})=>{const s=X(),r=f(),t=I({initialValues:{product_id:a.product_id,title:a.title,image:void 0,description:a.description,video:a.video||void 0}}),i=t.onSubmit(async n=>{await s.mutateAsync({id:a.id,data:n},{onSuccess:()=>{m.show({color:"green",message:"Panduan berhasil dirubah"}),r("/guide")},onError:({response:o})=>{t.setErrors((o==null?void 0:o.data).errors),m.show({color:"red",message:"Panduan gagal dirubah"})}})});return e.jsxs(c,{component:"form",onSubmit:i,shadow:"lg",children:[e.jsx(c.Section,{p:"lg",withBorder:!0,children:e.jsx("h2",{className:"font-semibold text-base",children:"Edit Data Panduan"})}),e.jsx(c.Section,{p:"lg",pt:"xs",withBorder:!0,children:e.jsxs("div",{className:"grid grid-cols-12 gap-x-6 gap-y-4 border-b border-gray-300",children:[e.jsx(N,{...t.getInputProps("product_id"),label:"Produk",placeholder:"Pilih Produk",className:"col-span-12 md:col-span-12",limit:20,nothingFoundMessage:"Data tidak ditemukan"}),e.jsx(x,{...t.getInputProps("title"),label:"Judul",placeholder:"Masukan Judul",className:"col-span-12"}),e.jsx(x,{...t.getInputProps("video"),label:"Link Video Youtube (Opsional)",placeholder:"https://",className:"col-span-12"}),e.jsx("div",{className:"col-span-12",children:e.jsx(F,{label:"Foto Sampul",value:t.values.image,onDrop:n=>{t.setFieldValue("image",n[0])},accept:_,maxSize:5*1024**2,maxFiles:1,multiple:!1})}),e.jsx("div",{className:"col-span-12",children:e.jsx(C,{value:t.values.description,onChange:n=>t.setFieldValue("description",n)})})]})}),e.jsxs(c.Section,{p:"lg",withBorder:!0,className:"flex justify-start items-center space-x-4",children:[e.jsx(d,{type:"submit",loading:s.isLoading,children:"Simpan"}),e.jsx(d,{onClick:()=>r(-1),variant:"light",color:"gray.6",bg:"gray.2",children:"Batal"})]})]})},ye=()=>{var t;const[a,s]=P.useState({search:"",product_id:void 0,limit:10}),[r]=O(a,200);return e.jsxs("main",{children:[e.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[e.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Data Panduan"}),e.jsx(g,{role:["Admin","Superadmin"],children:e.jsx(d,{component:p,to:"/guide/create",children:"Tambah"})})]}),e.jsx("section",{className:"space-y-4 mb-4",children:e.jsxs("div",{className:"space-x-4 flex items-center",children:[e.jsx("div",{className:"max-w-xs w-full",children:e.jsx(x,{leftSection:e.jsx(q,{size:16}),placeholder:"Cari",value:a.search,onChange:i=>s({...a,search:i.target.value})})}),e.jsx("div",{className:"max-w-xs",children:e.jsx(N,{leftSection:e.jsx(Y,{size:16}),placeholder:"Pilih Produk",value:(t=a.product_id)==null?void 0:t.toString(),onChange:i=>s({...a,product_id:i||void 0}),clearable:!0})})]})}),e.jsxs("section",{className:"mb-8",children:[e.jsx("div",{className:""}),e.jsx(ee,{...r})]})]})},we=()=>{const[a]=G();return e.jsxs("main",{children:[e.jsx("div",{className:"mb-4 flex items-center justify-between",children:e.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Data Panduan"})}),e.jsx(ae,{product:a.get("product")||void 0})]})},Ne=()=>{const{id:a}=M(),{data:s,isLoading:r,isError:t}=z({id:a}),i=f();return r?e.jsx("div",{className:"mt-48",children:e.jsx(D,{})}):t?e.jsxs("div",{className:"mt-48 text-center",children:[e.jsx("h1",{className:"text-lg font-bold mb-2",children:"Produk tidak ditemukan"}),e.jsx(d,{onClick:()=>i(-1),leftSection:e.jsx(E,{size:14}),children:"Kembali"})]}):e.jsxs("main",{children:[e.jsx("div",{className:"mb-4 flex items-center justify-between",children:e.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Data Panduan"})}),e.jsx(se,{guide:s})]})},Se=()=>{const a=f(),{id:s}=M(),{data:r,isLoading:t,isError:i}=z({id:s});return t?e.jsx("div",{className:"mt-48",children:e.jsx(D,{})}):i?e.jsxs("div",{className:"mt-48 text-center",children:[e.jsx("h1",{className:"text-lg font-bold mb-2",children:"Produk tidak ditemukan"}),e.jsx(d,{onClick:()=>a(-1),leftSection:e.jsx(E,{size:14}),children:"Kembali"})]}):e.jsx("main",{children:e.jsx(c,{p:"lg",children:e.jsxs("article",{className:"max-w-2xl w-full mx-auto",children:[e.jsxs("header",{children:[e.jsx("h1",{className:"text-xl font-bold",children:r.title}),e.jsx("div",{className:"text-base text-primary-600",children:L(r.createdAt).format("D MMMM YYYY")})]}),e.jsx("section",{className:"w-full aspect-video bg-gray-200 rounded-md overflow-hidden relative my-4",children:r.video?e.jsx("iframe",{src:r.video,title:"Kenapa Kita Susah Menabung?",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,className:"w-full h-full inset-0 absolute object-cover object-center"}):e.jsx("img",{src:r.image,alt:"",className:"absolute inset-0 w-full h-full object-cover object-center"})}),e.jsx("section",{className:"prose",dangerouslySetInnerHTML:{__html:r.description}})]})})})};export{we as GuideCreate,Se as GuideDetail,Ne as GuideUpdate,ye as Guides};
