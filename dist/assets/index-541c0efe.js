import{e as o,a as l,r,j as g}from"./index-15cc4b60.js";import{S}from"./Select-68f44f7f.js";async function P(){return(await l.get("/ar-service/region/province")).data.data}function h({config:e}={}){return o({...e,queryKey:["provinces"],queryFn:()=>P(),keepPreviousData:!0})}async function f(e){return(await l.get(`/ar-service/region/kecamatan/${e}`)).data.data}function m({regencyId:e,config:a}){return o({...a,queryKey:["districts",e],queryFn:()=>f(e),keepPreviousData:!0})}async function E(e){return(await l.get(`/ar-service/region/kabupaten/${e}`)).data.data}function v({provinceId:e,config:a}){return o({...a,queryKey:["regencies",e],queryFn:()=>E(e),keepPreviousData:!0})}const y=({...e})=>{const{data:a}=h(),n=r.useMemo(()=>a?a.map(({id:s,name:t})=>({label:t,value:s.toString()})):[],[a]);return g.jsx(S,{...e,data:n,searchable:!0})},b=({provinceId:e,...a})=>{const[n,s]=r.useState(""),{data:t}=v({provinceId:e||0,config:{enabled:!!e,cacheTime:0}}),i=r.useMemo(()=>!t||!e?[]:t.map(({id:c,name:u})=>({label:u,value:c.toString()})),[t,e]);return r.useEffect(()=>{s("")},[e]),g.jsx(S,{...a,data:i,searchable:!0,searchValue:n,onSearchChange:s})},d=({regencyId:e,...a})=>{const[n,s]=r.useState(""),{data:t}=m({regencyId:e||0,config:{enabled:!!e,cacheTime:0}}),i=r.useMemo(()=>!t||!e?[]:t.map(({id:c,name:u})=>({label:u,value:c.toString()})),[t,e]);return r.useEffect(()=>{s("")},[e]),g.jsx(S,{...a,data:i,searchable:!0,searchValue:n,onSearchChange:s})},D=["BUMN","KEMENKES","Kementerian Lain","Organisasi Budha","Organisasi Hindu","Organisasi Islam","Organisasi Katholik","Organisasi Protestan","Organiasi Sosial","PEMKAB","PEMKOT","PEMPROP","Perorangan","Perusahaan","POLRI","TNI AD","TNI AL","TNI AU","Swasta","Lainnya"],K=["A","B","C","D","D Pratama","Non Kelas"],R=["Public","Private"];export{K as C,d as D,D as O,y as P,b as R,R as S};
