import{e,a as t}from"./index-15cc4b60.js";async function r(){return(await t.get("/ar-service/profile/biodata")).data.data}function i({config:a}={}){return e({...a,queryKey:["biodata"],queryFn:()=>r()})}export{i as u};