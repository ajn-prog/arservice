import{u as P,q as j,a as v,G as R,v as N,j as e,y as T,z as w,L as S,H as I,w as x,J as B,F as k,B as b,K as F}from"./index-74fbf4f3.js";import{T as L}from"./Table-73f7b03e.js";import{u as H}from"./AgencySelect-ae772898.js";import{A as Ie}from"./AgencySelect-ae772898.js";import{I as U}from"./IconEdit-f3447f8b.js";import{I as Q}from"./IconTrash-910c6241.js";import{I as q,L as z}from"./LoadingScreen-1614969f.js";import{S as f,C as A,O as K,P as E,R as C,D}from"./index-c719652a.js";import{u as M}from"./use-form-5f862e9a.js";import{C as d}from"./Card-6343f5af.js";import{T as o}from"./TextInput-6024f0ad.js";import{S as g,I as O}from"./IconArrowLeft-68fa6359.js";import{P as _}from"./PasswordInput-dfa5c3b5.js";import"./ScrollArea-34a5f482.js";async function Y({data:a}){return(await v.post("/ar-service/customer",a)).data}function $({config:a}={}){return P(Y,{...a,onSuccess:(...t)=>{j.invalidateQueries(["agencies"]),a!=null&&a.onSuccess&&a.onSuccess(...t)}})}async function J({id:a}){return(await v.get(`/ar-service/customer/${a}`)).data.data}function V({config:a,id:t}){return R({...a,queryKey:["agency",t],queryFn:()=>J({id:t})})}async function G({id:a,data:t}){return(await v.put(`/ar-service/customer/${a}`,t)).data}function W({config:a}={}){return P(G,{...a,onSuccess:(...t)=>{j.invalidateQueries(["agencies"]),j.invalidateQueries(["agency",t[1].id]),a!=null&&a.onSuccess&&a.onSuccess(...t)}})}async function X({id:a}){return(await v.delete(`/ar-service/customer/${a}`)).data}function Z({config:a}={}){return P(X,{...a,onSuccess:(...t)=>{j.invalidateQueries(["agencies"]),a!=null&&a.onSuccess&&a.onSuccess(...t)}})}const ee={page:1,limit:10,search:""},ae=({toolbar:a})=>{const[t,l]=N.useState(ee),{data:s,isLoading:n}=H({params:t}),m=Z();function u(i){return()=>{I.openConfirmModal({title:"Hapus Instansi",children:e.jsx("div",{className:"text-sm",children:"Apakah anda yakin untuk menghapus instansi ini?"}),centered:!0,closeOnConfirm:!1,onConfirm:async()=>{await m.mutateAsync({id:i},{onSuccess:()=>{x.show({message:"Instansi berhasil dihapus",color:"green",icon:e.jsx(q,{})}),I.closeAll()},onError:()=>{x.show({message:"Instansi tidak bisa dihapus",color:"red",icon:e.jsx(B,{})}),I.closeAll()}})}})}}return e.jsx(L,{title:"Tabel Data Instansi",toolbar:a,header:["Instansi","Kelas","Alamat","Provinsi/Area","Created At",""],items:s==null?void 0:s.data,onPageChange:i=>{l({...t,page:i})},loading:n,metadata:{count:(s==null?void 0:s.data.length)||10,limit:t.limit||10,page:t.page||10,total:(s==null?void 0:s.total)||10},renderItem:i=>{var c,r;return e.jsxs("tr",{children:[e.jsx("td",{children:i.name}),e.jsx("td",{children:i.classes}),e.jsx("td",{children:i.address}),e.jsx("td",{children:((r=(c=i.kecamatan.kabupaten)==null?void 0:c.province)==null?void 0:r.name)??"-"}),e.jsx("td",{children:T(i.createdAt).format("D MMMM YYYY H:mm")}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(w,{variant:"subtle",component:S,to:`/agency/${i.id}`,title:"Update Instansi",color:"primary",radius:"lg",children:e.jsx(U,{size:18})}),e.jsx(w,{variant:"subtle",onClick:u(i.id),title:"Hapus Instansi",color:"red",radius:"lg",children:e.jsx(Q,{size:18})})]})})]},i.id)}})},se=()=>{var u,i,c;const a=k(),{mutateAsync:t}=$(),l=M({initialValues:{name:"",address:"",email:"",classes:void 0,hospital_code:void 0,kecamatan_id:void 0,latitude:0,longitude:0,owner:"",password:"",phone_number:"",sector:void 0}}),[s,n]=N.useState({province:null,district:null,regency:null}),m=l.onSubmit(async r=>{await t({data:{...r,kecamatan_id:s.district||void 0}},{onSuccess:()=>{x.show({color:"green",message:"Instansi berhasil dibuat"}),a("/agency")},onError:({response:h})=>{l.setErrors((h==null?void 0:h.data).errors),x.show({color:"red",message:"Instansi gagal dibuat"})}})});return e.jsxs(d,{component:"form",onSubmit:m,shadow:"lg",children:[e.jsx(d.Section,{p:"lg",withBorder:!0,children:e.jsx("h2",{className:"font-semibold text-base",children:"Tambah Data Instansi"})}),e.jsxs(d.Section,{p:"lg",pt:"xs",withBorder:!0,children:[e.jsxs("div",{className:"pb-6 grid grid-cols-12 gap-x-6 gap-y-4 border-b border-gray-300",children:[e.jsx(o,{...l.getInputProps("hospital_code"),label:"Kode RS",placeholder:"Ex : 20392",className:"col-span-12 md:col-span-4"}),e.jsx(o,{...l.getInputProps("name"),label:"Nama Instansi",placeholder:"Ex : RS Umum Daerah H. Sahudin Kutacane. . .",className:"col-span-12 md:col-span-8"}),e.jsx(g,{...l.getInputProps("sector"),label:"Sektor",placeholder:"Pilih Sektor",data:f,className:"col-span-12 md:col-span-4"}),e.jsx(g,{...l.getInputProps("classes"),label:"Kelas",placeholder:"Pilih Kelas",data:A,className:"col-span-12 md:col-span-4"}),e.jsx(g,{...l.getInputProps("owner"),label:"Kepemilikan",placeholder:"Pilih Kepemilikan",data:K,className:"col-span-12 md:col-span-4"}),e.jsx(E,{label:"Provinsi",placeholder:"Pilih Provinsi",className:"col-span-12 md:col-span-4",nothingFoundMessage:"Data tidak ditemukan",value:(u=s.province)==null?void 0:u.toString(),onChange:r=>{n({province:r,district:null,regency:null})}}),e.jsx(C,{provinceId:s.province,label:"Kabupaten/Kota",placeholder:"Pilih Kabupaten/Kota",className:"col-span-12 md:col-span-4",nothingFoundMessage:s.province?"Data tidak ditemukan":"Pilih provinsi terlebih dahulu",value:(i=s.regency)==null?void 0:i.toString(),onChange:r=>{n({...s,regency:r,district:null})}}),e.jsx(D,{regencyId:s.regency,label:"Kecamatan",placeholder:"Pilih Kecamatan",className:"col-span-12 md:col-span-4",nothingFoundMessage:s.province&&s.regency?"Data tidak ditemukan":"Pilih kabupaten terlebih dahulu",value:(c=s.district)==null?void 0:c.toString(),onChange:r=>{n({...s,district:r})}})]}),e.jsxs("div",{className:"pt-4 grid grid-cols-12 gap-x-6 gap-y-4",children:[e.jsx(o,{...l.getInputProps("address"),label:"Alamat",placeholder:"Ex : Jl. Sultan Adam No. 24",className:"col-span-12 md:col-span-8"}),e.jsx(o,{...l.getInputProps("phone_number"),label:"Telepon",placeholder:"Ex : 085752140605. . .",className:"col-span-12 md:col-span-4"}),e.jsx(o,{...l.getInputProps("email"),label:"Email",placeholder:"Masukan Email",className:"col-span-12 md:col-span-6"}),e.jsx(_,{...l.getInputProps("password"),label:"Password",placeholder:"Masukan Password",className:"col-span-12 md:col-span-6"})]})]}),e.jsxs(d.Section,{p:"lg",withBorder:!0,className:"flex items-center space-x-4",children:[e.jsx(b,{type:"submit",children:"Simpan"}),e.jsx(b,{component:S,to:"/agency",variant:"light",color:"gray.6",bg:"gray.2",children:"Batal"})]})]})},te=({agency:a})=>{var i,c,r,h;const t=k(),{mutateAsync:l}=W(),s=M({initialValues:{name:a.name,address:a.address,classes:a.classes,email:a.email,hospital_code:a.hospital_code,latitude:a.latitude,longitude:a.latitude,owner:a.owner,password:"",phone_number:a.phone_number,sector:a.sector}}),[n,m]=N.useState({province:((i=a.kecamatan.kabupaten)==null?void 0:i.province_id)||null,regency:a.kecamatan.kabupaten_id,district:a.kecamatan.id}),u=s.onSubmit(async p=>{await l({id:a.id,data:{...p,kecamatan_id:n.district||void 0}},{onSuccess:()=>{x.show({color:"green",message:"Instansi berhasil diubah"}),t("/agency")},onError:({response:y})=>{s.setErrors((y==null?void 0:y.data).errors),x.show({color:"red",message:"Instansi gagal diubah"})}})});return e.jsxs(d,{component:"form",onSubmit:u,shadow:"lg",children:[e.jsx(d.Section,{p:"lg",withBorder:!0,children:e.jsx("h2",{className:"font-semibold text-base",children:"Edit Data Instansi"})}),e.jsxs(d.Section,{p:"lg",pt:"xs",withBorder:!0,children:[e.jsxs("div",{className:"pb-6 grid grid-cols-12 gap-x-6 gap-y-4 border-b border-gray-300",children:[e.jsx(o,{...s.getInputProps("hospital_code"),label:"Kode RS",placeholder:"Ex : 20392",className:"col-span-12 md:col-span-4"}),e.jsx(o,{...s.getInputProps("name"),label:"Nama Instansi",placeholder:"Ex : RS Umum Daerah H. Sahudin Kutacane. . .",className:"col-span-12 md:col-span-8"}),e.jsx(g,{...s.getInputProps("sector"),label:"Sektor",placeholder:"Pilih Sektor",data:f,className:"col-span-12 md:col-span-4"}),e.jsx(g,{...s.getInputProps("classes"),label:"Kelas",placeholder:"Pilih Kelas",data:A,className:"col-span-12 md:col-span-4"}),e.jsx(g,{...s.getInputProps("owner"),label:"Kepemilikan",placeholder:"Pilih Kepemilikan",data:K,className:"col-span-12 md:col-span-4"}),e.jsx(E,{label:"Provinsi",placeholder:"Pilih Provinsi",className:"col-span-12 md:col-span-4",nothingFoundMessage:"Data tidak ditemukan",value:(c=n.province)==null?void 0:c.toString(),onChange:p=>{m({province:p,district:null,regency:null})}}),e.jsx(C,{provinceId:n.province,label:"Kabupaten/Kota",placeholder:"Pilih Kabupaten/Kota",className:"col-span-12 md:col-span-4",nothingFoundMessage:n.province?"Data tidak ditemukan":"Pilih provinsi terlebih dahulu",value:(r=n.regency)==null?void 0:r.toString(),onChange:p=>{m({...n,regency:p,district:null})}}),e.jsx(D,{regencyId:n.regency,label:"Kecamatan",placeholder:"Pilih Kecamatan",className:"col-span-12 md:col-span-4",nothingFoundMessage:n.province&&n.regency?"Data tidak ditemukan":"Pilih kabupaten terlebih dahulu",value:(h=n.district)==null?void 0:h.toString(),onChange:p=>{m({...n,district:p})}})]}),e.jsxs("div",{className:"pt-4 grid grid-cols-12 gap-x-6 gap-y-4",children:[e.jsx(o,{...s.getInputProps("address"),label:"Alamat",placeholder:"Ex : Jl. Sultan Adam No. 24",className:"col-span-12 md:col-span-8"}),e.jsx(o,{...s.getInputProps("phone_number"),label:"Telepon",placeholder:"Ex : 085752140605. . .",className:"col-span-12 md:col-span-4"}),e.jsx(o,{...s.getInputProps("email"),label:"Email",placeholder:"Masukan Email",className:"col-span-12 md:col-span-6"}),e.jsx(_,{...s.getInputProps("password"),label:"Password",placeholder:"Biarkan kosong jika tidak berubah",className:"col-span-12 md:col-span-6"})]})]}),e.jsxs(d.Section,{p:"lg",withBorder:!0,className:"flex items-center space-x-4",children:[e.jsx(b,{type:"submit",children:"Simpan"}),e.jsx(b,{component:S,to:"/agency",variant:"light",color:"gray.6",bg:"gray.2",children:"Batal"})]})]})},be=()=>e.jsxs("main",{children:[e.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[e.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Data Instansi"}),e.jsx(b,{component:S,to:"/agency/create",children:"Tambah"})]}),e.jsx("section",{className:"mb-8",children:e.jsx(ae,{})})]}),je=()=>e.jsxs("main",{children:[e.jsx("div",{className:"mb-4 flex items-center justify-between",children:e.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Data Instansi"})}),e.jsx(se,{})]}),ve=()=>{const{id:a}=F(),{data:t,isLoading:l,isError:s}=V({id:a}),n=k();return l?e.jsx("div",{className:"mt-48",children:e.jsx(z,{})}):s?e.jsxs("div",{className:"mt-48 text-center",children:[e.jsx("h1",{className:"text-lg font-bold mb-2",children:"Instansi tidak ditemukan"}),e.jsx(b,{onClick:()=>n(-1),leftSection:e.jsx(O,{size:14}),children:"Kembali"})]}):e.jsxs("main",{children:[e.jsx("div",{className:"mb-4 flex items-center justify-between",children:e.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Data Instansi"})}),e.jsx(te,{agency:t})]})};export{be as Agencies,je as AgencyCreate,se as AgencyCreateForm,Ie as AgencySelect,ae as AgencyTable,ve as AgencyUpdate,te as AgencyUpdateForm,A as CLASSES,K as OWNERSHIP,f as SECTORS};
