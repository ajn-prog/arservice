import{u as c,q as d,a as o,j as s,P as m,i as x,r as u,B as h,t as j,n as g}from"./index-90fd468a.js";import{T as r}from"./Table-11dfe53b.js";import{T as f}from"./TextInput-f7911e7d.js";import"./ScrollArea-034ad08d.js";async function y({data:e}){return(await o.post("/ar-service/tracking-check",e)).data}function N({config:e}={}){return c(y,{...e,onSuccess:(...a)=>{d.invalidateQueries(["tracking"]),e!=null&&e.onSuccess&&e.onSuccess(...a)}})}const p=({tracking:e})=>s.jsxs("div",{children:[s.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-6",children:[s.jsxs("div",{className:"",children:[s.jsx("div",{className:"text-xs text-gray-600",children:"Nomor Resi"}),s.jsx("div",{className:"font-bold text-sm text-gray-900",children:e.summary.waybill_number})]}),s.jsxs("div",{className:"",children:[s.jsx("div",{className:"text-xs text-gray-600",children:"Kurir"}),s.jsx("div",{className:"font-bold text-sm text-gray-900",children:e.summary.courier_name})]}),s.jsxs("div",{className:"",children:[s.jsx("div",{className:"text-xs text-gray-600",children:"Status"}),s.jsx("div",{className:"font-bold text-sm text-gray-900",children:s.jsx(m,{size:"xs",children:e.summary.status})})]})]}),s.jsx(r,{striped:!0,withRowBorders:!1,children:s.jsx(r.Tbody,{children:e.manifest.map(({manifest_code:a,manifest_date:i,manifest_time:n,city_name:t,manifest_description:l})=>s.jsxs(r.Tr,{children:[s.jsx(r.Td,{children:x(`${i} ${n}`,"YYYY-MM-DD HH:mm:ss").format("DD MMM. HH:mm")}),s.jsxs(r.Td,{children:[l,": ",t]})]},a))})})]}),T=()=>{const[e,a]=u.useState(""),i=N();async function n(){await i.mutateAsync({data:{waybill:e}},{onSuccess:({data:t})=>{j.open({title:"Informasi Tracking",children:s.jsx(p,{tracking:t}),size:"lg"})},onError:()=>{g.show({message:"No Resi tidak ditemukan",color:"red"})}})}return s.jsx("main",{children:s.jsx("div",{className:"w-full h-[38rem] flex flex-col items-center justify-center",children:s.jsxs("div",{className:"max-w-lg w-full p-8 h-56 flex flex-col items-center justify-center rounded-lg bg-white shadow-lg shadow-gray-300",children:[s.jsx("h1",{className:"mb-4 text-lg font-bold text-center",children:"Tracking produk pesanan anda disini!"}),s.jsxs("div",{className:"flex items-end space-x-4 max-w-sm w-full",children:[s.jsx(f,{label:"Nomor Resi",placeholder:"Masukan Nomor Resi",className:"flex-grow",value:e,onChange:t=>a(t.target.value)}),s.jsx(h,{size:"sm",onClick:n,loading:i.isLoading,children:"Cek"})]})]})})})};export{T as Tracking};
