import{e as c,a as m,r as l,j as p}from"./index-12f53e8e.js";import{S as x}from"./Select-71aebe02.js";async function d({params:e}){return(await m.get("/ar-service/install-base/items",{params:e})).data}function f({params:e,config:t}){return c({...t,queryKey:["installbase-items",e],queryFn:()=>d({params:e}),keepPreviousData:!0})}const I=({brand:e,product:t,customer:s,...r})=>{const{data:a}=f({params:{brand:e,product:t,customer:s}}),n=l.useMemo(()=>a?a.data.map(({id:o,product:u,serial_number:i})=>({label:`${u.name} (${i})`,value:o.toString()})):[],[a]);return p.jsx(x,{...r,data:n,searchable:!0})};export{I};