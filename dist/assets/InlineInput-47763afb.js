import{R as s,r as j,p as F,t as R,az as D,w as W}from"./index-36612c22.js";import{a as A,b}from"./use-form-a2f7cbce.js";function L({children:e,role:t}){const r=A();return r?s.createElement("div",{role:t,"aria-labelledby":r.labelId,"aria-describedby":r.describedBy},e):s.createElement(s.Fragment,null,e)}var B={root:"m-5f75b09e",body:"m-5f6e695e",labelWrapper:"m-d3ea56bb",label:"m-8ee546b8",description:"m-328f68c0",error:"m-8e8a99cc"};const f=B;var C=Object.defineProperty,G=Object.defineProperties,V=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,_=(e,t,r)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,l=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&_(e,r,t[r]);if(o)for(var r of o(t))y.call(t,r)&&_(e,r,t[r]);return e},m=(e,t)=>G(e,V(t)),$=(e,t)=>{var r={};for(var a in e)v.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&o)for(var a of o(e))t.indexOf(a)<0&&y.call(e,a)&&(r[a]=e[a]);return r};const M=f,q=j.forwardRef((e,t)=>{var r=e,{__staticSelector:a,__stylesApiProps:u,className:P,classNames:O,styles:I,unstyled:E,children:g,label:c,description:d,id:S,disabled:h,error:p,size:i,labelPosition:w="left",variant:x,style:z,vars:H}=r,N=$(r,["__staticSelector","__stylesApiProps","className","classNames","styles","unstyled","children","label","description","id","disabled","error","size","labelPosition","variant","style","vars"]);const n=F({name:a,props:u,className:P,style:z,classes:f,classNames:O,styles:I,unstyled:E});return s.createElement(R,l(m(l({},n("root")),{ref:t,__vars:{"--label-fz":D(i),"--label-lh":W(i,"label-lh")},mod:{"label-position":w},variant:x,size:i}),N),s.createElement("div",l({},n("body")),g,s.createElement("div",l({},n("labelWrapper")),c&&s.createElement("label",m(l({},n("label")),{"data-disabled":h||void 0,htmlFor:S}),c),d&&s.createElement(b.Description,l({size:i,__inheritStyles:!1},n("description")),d),p&&p!=="boolean"&&s.createElement(b.Error,l({size:i,__inheritStyles:!1},n("error")),p))))});q.displayName="@mantine/core/InlineInput";export{L as I,q as a,M as b};