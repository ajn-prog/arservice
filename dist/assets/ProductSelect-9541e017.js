import{a as u,e as o,r as c,j as n}from"./index-b68a47ac.js";import{S as i}from"./Select-8153356c.js";async function d({params:e}){return(await u.get("/ar-service/product",{params:e})).data.data}function p({config:e,params:t}={}){return o({...e,queryKey:["products",t],queryFn:()=>d({params:t}),keepPreviousData:!0})}const x=({...e})=>{const{data:t}=p({params:{limit:5e5}}),r=c.useMemo(()=>t?t.data.map(({id:a,name:s})=>({label:s,value:a.toString()})):[],[t]);return n.jsx(i,{...e,data:r,searchable:!0})};export{x as P,d as g,p as u};