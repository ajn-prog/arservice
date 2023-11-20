import{u as I,q as S,a as x,i as P,r as u,j as e,f as _,g as w,L as y,m as N,n as j,I as B,h as f,B as v,k as F}from"./index-36612c22.js";import{T as L,C as h}from"./Table-d19d24ae.js";import{u as O}from"./AgencySelect-799fb5bb.js";import{A as Ne}from"./AgencySelect-799fb5bb.js";import{I as q}from"./IconEdit-7b57d515.js";import{I as U,a as H,S as m}from"./IconTrash-ab565fc3.js";import{u as A,T as d}from"./use-form-a2f7cbce.js";import{P as K}from"./PasswordInput-d5d0df9f.js";import{L as $}from"./LoadingScreen-3146461c.js";import{I as Q}from"./IconArrowLeft-ace68926.js";async function V({data:a}){return(await x.post("/ar-service/customer",a)).data}function Y({config:a}={}){return I(V,{...a,onSuccess:(...t)=>{S.invalidateQueries(["agencies"]),a!=null&&a.onSuccess&&a.onSuccess(...t)}})}async function z({id:a}){return(await x.get(`/ar-service/customer/${a}`)).data.data}function J({config:a,id:t}){return P({...a,queryKey:["agency",t],queryFn:()=>z({id:t})})}async function W({id:a,data:t}){return(await x.put(`/ar-service/customer/${a}`,t)).data}function X({config:a}={}){return I(W,{...a,onSuccess:(...t)=>{S.invalidateQueries(["agencies"]),S.invalidateQueries(["agency",t[1].id]),a!=null&&a.onSuccess&&a.onSuccess(...t)}})}async function G({id:a}){return(await x.delete(`/ar-service/customer/${a}`)).data}function Z({config:a}={}){return I(G,{...a,onSuccess:(...t)=>{S.invalidateQueries(["agencies"]),a!=null&&a.onSuccess&&a.onSuccess(...t)}})}const ee={page:1,limit:10,search:""},ae=({toolbar:a})=>{const[t,r]=u.useState(ee),{data:s,isLoading:n}=O({params:t}),o=Z();function c(i){return()=>{N.openConfirmModal({title:"Hapus Instansi",children:e.jsx("div",{className:"text-sm",children:"Apakah anda yakin untuk menghapus instansi ini?"}),centered:!0,closeOnConfirm:!1,onConfirm:async()=>{await o.mutateAsync({id:i},{onSuccess:()=>{j.show({message:"Instansi berhasil dihapus",color:"green",icon:e.jsx(H,{})}),N.closeAll()},onError:()=>{j.show({message:"Instansi tidak bisa dihapus",color:"red",icon:e.jsx(B,{})}),N.closeAll()}})}})}}return e.jsx(L,{title:"Tabel Data Instansi",toolbar:a,header:["Instansi","Kelas","Alamat","Provinsi/Area","Created At",""],items:s==null?void 0:s.data,onPageChange:i=>{r({...t,page:i})},loading:n,metadata:{count:(s==null?void 0:s.data.length)||10,limit:t.limit||10,page:t.page||10,total:(s==null?void 0:s.total)||10},renderItem:i=>{var p,l;return e.jsxs("tr",{children:[e.jsx("td",{children:i.name}),e.jsx("td",{children:i.classes}),e.jsx("td",{children:i.address}),e.jsx("td",{children:((l=(p=i.kecamatan.kabupaten)==null?void 0:p.province)==null?void 0:l.name)??"-"}),e.jsx("td",{children:_(i.createdAt).format("D MMMM YYYY H:mm")}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(w,{variant:"subtle",component:y,to:`/agency/${i.id}`,title:"Update Instansi",color:"primary",radius:"lg",children:e.jsx(q,{size:18})}),e.jsx(w,{variant:"subtle",onClick:c(i.id),title:"Hapus Instansi",color:"red",radius:"lg",children:e.jsx(U,{size:18})})]})})]},i.id)}})};async function se(){return(await x.get("/ar-service/region/province")).data.data}function te({config:a}={}){return P({...a,queryKey:["provinces"],queryFn:()=>se(),keepPreviousData:!0})}async function ne(a){return(await x.get(`/ar-service/region/kecamatan/${a}`)).data.data}function re({regencyId:a,config:t}){return P({...t,queryKey:["districts",a],queryFn:()=>ne(a),keepPreviousData:!0})}async function ie(a){return(await x.get(`/ar-service/region/kabupaten/${a}`)).data.data}function le({provinceId:a,config:t}){return P({...t,queryKey:["regencies",a],queryFn:()=>ie(a),keepPreviousData:!0})}const E=({...a})=>{const{data:t}=te(),r=u.useMemo(()=>t?t.map(({id:s,name:n})=>({label:n,value:s.toString()})):[],[t]);return e.jsx(m,{...a,data:r,searchable:!0})},C=({provinceId:a,...t})=>{const[r,s]=u.useState(""),{data:n}=le({provinceId:a||0,config:{enabled:!!a}}),o=u.useMemo(()=>!n||!a?[]:n.map(({id:c,name:i})=>({label:i,value:c.toString()})),[n,a]);return u.useEffect(()=>{s("")},[a]),e.jsx(m,{...t,data:o,searchable:!0,searchValue:r,onSearchChange:s})},D=({regencyId:a,...t})=>{const[r,s]=u.useState(""),{data:n}=re({regencyId:a||0,config:{enabled:!!a}}),o=u.useMemo(()=>!n||!a?[]:n.map(({id:c,name:i})=>({label:i,value:c.toString()})),[n,a]);return u.useEffect(()=>{s("")},[a]),e.jsx(m,{...t,data:o,searchable:!0,searchValue:r,onSearchChange:s})},M=["BUMN","KEMENKES","Kementerian Lain","Organisasi Budha","Organisasi Hindu","Organisasi Islam","Organisasi Katholik","Organisasi Protestan","Organiasi Sosial","PEMKAB","PEMKOT","PEMPROP","Perorangan","Perusahaan","POLRI","TNI AD","TNI AL","TNI AU","Swasta","Lainnya"],T=["A","B","C","D","D Pratama","Non Kelas"],R=["Public","Private"],oe=()=>{var c,i,p;const a=f(),{mutateAsync:t}=Y(),r=A({initialValues:{name:"",address:"",email:"",classes:void 0,hospital_code:void 0,kecamatan_id:void 0,latitude:0,longitude:0,owner:"",password:"",phone_number:"",sector:void 0}}),[s,n]=u.useState({province:null,district:null,regency:null}),o=r.onSubmit(async l=>{await t({data:{...l,kecamatan_id:s.district||void 0}},{onSuccess:()=>{j.show({color:"green",message:"Instansi berhasil dibuat"}),a("/agency")},onError:({response:b})=>{r.setErrors((b==null?void 0:b.data).errors),j.show({color:"red",message:"Instansi gagal dibuat"})}})});return e.jsxs(h,{component:"form",onSubmit:o,shadow:"lg",children:[e.jsx(h.Section,{p:"lg",withBorder:!0,children:e.jsx("h2",{className:"font-semibold text-base",children:"Tambah Data Instansi"})}),e.jsxs(h.Section,{p:"lg",pt:"xs",children:[e.jsxs("div",{className:"pb-6 grid grid-cols-12 gap-x-6 gap-y-4 border-b border-gray-300",children:[e.jsx(d,{...r.getInputProps("hospital_code"),label:"Kode RS",placeholder:"Ex : 20392",className:"col-span-12 md:col-span-4"}),e.jsx(d,{...r.getInputProps("name"),label:"Nama Instansi",placeholder:"Ex : RS Umum Daerah H. Sahudin Kutacane. . .",className:"col-span-12 md:col-span-8"}),e.jsx(m,{...r.getInputProps("sector"),label:"Sektor",placeholder:"Pilih Sektor",data:R,className:"col-span-12 md:col-span-4"}),e.jsx(m,{...r.getInputProps("classes"),label:"Kelas",placeholder:"Pilih Kelas",data:T,className:"col-span-12 md:col-span-4"}),e.jsx(m,{...r.getInputProps("owner"),label:"Kepemilikan",placeholder:"Pilih Kepemilikan",data:M,className:"col-span-12 md:col-span-4"}),e.jsx(E,{label:"Provinsi",placeholder:"Pilih Provinsi",className:"col-span-12 md:col-span-4",nothingFoundMessage:"Data tidak ditemukan",value:(c=s.province)==null?void 0:c.toString(),onChange:l=>{n({province:l,district:null,regency:null})}}),e.jsx(C,{provinceId:s.province,label:"Kabupaten/Kota",placeholder:"Pilih Kabupaten/Kota",className:"col-span-12 md:col-span-4",nothingFoundMessage:s.province?"Data tidak ditemukan":"Pilih provinsi terlebih dahulu",value:(i=s.regency)==null?void 0:i.toString(),onChange:l=>{n({...s,regency:l,district:null})}}),e.jsx(D,{regencyId:s.regency,label:"Kecamatan",placeholder:"Pilih Kecamatan",className:"col-span-12 md:col-span-4",nothingFoundMessage:s.province&&s.regency?"Data tidak ditemukan":"Pilih kabupaten terlebih dahulu",value:(p=s.district)==null?void 0:p.toString(),onChange:l=>{n({...s,district:l})}})]}),e.jsxs("div",{className:"pt-4 grid grid-cols-12 gap-x-6 gap-y-4",children:[e.jsx(d,{...r.getInputProps("address"),label:"Alamat",placeholder:"Ex : Jl. Sultan Adam No. 24",className:"col-span-12 md:col-span-8"}),e.jsx(d,{...r.getInputProps("phone_number"),label:"Telepon",placeholder:"Ex : 085752140605. . .",className:"col-span-12 md:col-span-4"}),e.jsx(d,{...r.getInputProps("email"),label:"Email",placeholder:"Masukan Email",className:"col-span-12 md:col-span-6"}),e.jsx(K,{...r.getInputProps("password"),label:"Password",placeholder:"Masukan Password",className:"col-span-12 md:col-span-6"})]})]}),e.jsxs(h.Section,{p:"lg",withBorder:!0,className:"flex justify-end items-center space-x-4",children:[e.jsx(v,{component:y,to:"/agency",variant:"light",color:"gray.6",bg:"gray.2",children:"Batal"}),e.jsx(v,{type:"submit",children:"Simpan"})]})]})},ce=({agency:a})=>{var i,p,l,b;const t=f(),{mutateAsync:r}=X(),s=A({initialValues:{name:a.name,address:a.address,classes:a.classes,email:a.email,hospital_code:a.hospital_code,latitude:a.latitude,longitude:a.latitude,owner:a.owner,password:"",phone_number:a.phone_number,sector:a.sector}}),[n,o]=u.useState({province:((i=a.kecamatan.kabupaten)==null?void 0:i.province_id)||null,regency:a.kecamatan.kabupaten_id,district:a.kecamatan.id}),c=s.onSubmit(async g=>{await r({id:a.id,data:{...g,kecamatan_id:n.district||void 0}},{onSuccess:()=>{j.show({color:"green",message:"Instansi berhasil diubah"}),t("/agency")},onError:({response:k})=>{s.setErrors((k==null?void 0:k.data).errors),j.show({color:"red",message:"Instansi gagal diubah"})}})});return e.jsxs(h,{component:"form",onSubmit:c,shadow:"lg",children:[e.jsx(h.Section,{p:"lg",withBorder:!0,children:e.jsx("h2",{className:"font-semibold text-base",children:"Edit Data Instansi"})}),e.jsxs(h.Section,{p:"lg",pt:"xs",children:[e.jsxs("div",{className:"pb-6 grid grid-cols-12 gap-x-6 gap-y-4 border-b border-gray-300",children:[e.jsx(d,{...s.getInputProps("hospital_code"),label:"Kode RS",placeholder:"Ex : 20392",className:"col-span-12 md:col-span-4"}),e.jsx(d,{...s.getInputProps("name"),label:"Nama Instansi",placeholder:"Ex : RS Umum Daerah H. Sahudin Kutacane. . .",className:"col-span-12 md:col-span-8"}),e.jsx(m,{...s.getInputProps("sector"),label:"Sektor",placeholder:"Pilih Sektor",data:R,className:"col-span-12 md:col-span-4"}),e.jsx(m,{...s.getInputProps("classes"),label:"Kelas",placeholder:"Pilih Kelas",data:T,className:"col-span-12 md:col-span-4"}),e.jsx(m,{...s.getInputProps("owner"),label:"Kepemilikan",placeholder:"Pilih Kepemilikan",data:M,className:"col-span-12 md:col-span-4"}),e.jsx(E,{label:"Provinsi",placeholder:"Pilih Provinsi",className:"col-span-12 md:col-span-4",nothingFoundMessage:"Data tidak ditemukan",value:(p=n.province)==null?void 0:p.toString(),onChange:g=>{o({province:g,district:null,regency:null})}}),e.jsx(C,{provinceId:n.province,label:"Kabupaten/Kota",placeholder:"Pilih Kabupaten/Kota",className:"col-span-12 md:col-span-4",nothingFoundMessage:n.province?"Data tidak ditemukan":"Pilih provinsi terlebih dahulu",value:(l=n.regency)==null?void 0:l.toString(),onChange:g=>{o({...n,regency:g,district:null})}}),e.jsx(D,{regencyId:n.regency,label:"Kecamatan",placeholder:"Pilih Kecamatan",className:"col-span-12 md:col-span-4",nothingFoundMessage:n.province&&n.regency?"Data tidak ditemukan":"Pilih kabupaten terlebih dahulu",value:(b=n.district)==null?void 0:b.toString(),onChange:g=>{o({...n,district:g})}})]}),e.jsxs("div",{className:"pt-4 grid grid-cols-12 gap-x-6 gap-y-4",children:[e.jsx(d,{...s.getInputProps("address"),label:"Alamat",placeholder:"Ex : Jl. Sultan Adam No. 24",className:"col-span-12 md:col-span-8"}),e.jsx(d,{...s.getInputProps("phone_number"),label:"Telepon",placeholder:"Ex : 085752140605. . .",className:"col-span-12 md:col-span-4"}),e.jsx(d,{...s.getInputProps("email"),label:"Email",placeholder:"Masukan Email",className:"col-span-12 md:col-span-6"}),e.jsx(K,{...s.getInputProps("password"),label:"Password",placeholder:"Biarkan kosong jika tidak berubah",className:"col-span-12 md:col-span-6"})]})]}),e.jsxs(h.Section,{p:"lg",withBorder:!0,className:"flex justify-end items-center space-x-4",children:[e.jsx(v,{component:y,to:"/agency",variant:"light",color:"gray.6",bg:"gray.2",children:"Batal"}),e.jsx(v,{type:"submit",children:"Simpan"})]})]})},ve=()=>e.jsxs("main",{children:[e.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[e.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Data Instansi"}),e.jsx(v,{component:y,to:"/agency/create",children:"Tambah"})]}),e.jsx("section",{className:"mb-8",children:e.jsx(ae,{})})]}),Se=()=>e.jsxs("main",{children:[e.jsx("div",{className:"mb-4 flex items-center justify-between",children:e.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Data Instansi"})}),e.jsx(oe,{})]}),Pe=()=>{const{id:a}=F(),{data:t,isLoading:r,isError:s}=J({id:a}),n=f();return r?e.jsx("div",{className:"mt-48",children:e.jsx($,{})}):s?e.jsxs("div",{className:"mt-48 text-center",children:[e.jsx("h1",{className:"text-lg font-bold mb-2",children:"Instansi tidak ditemukan"}),e.jsx(v,{onClick:()=>n(-1),leftSection:e.jsx(Q,{size:14}),children:"Kembali"})]}):e.jsxs("main",{children:[e.jsx("div",{className:"mb-4 flex items-center justify-between",children:e.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Data Instansi"})}),e.jsx(ce,{agency:t})]})};export{ve as Agencies,Se as AgencyCreate,oe as AgencyCreateForm,Ne as AgencySelect,ae as AgencyTable,Pe as AgencyUpdate,ce as AgencyUpdateForm};