import{r as e,c as l}from"./index-90fd468a.js";function i(t,n,s={leading:!1}){const[f,u]=e.useState(t),a=e.useRef(!1),o=e.useRef(null),r=e.useRef(!1),c=()=>window.clearTimeout(o.current);return e.useEffect(()=>{a.current&&(!r.current&&s.leading?(r.current=!0,u(t)):(c(),o.current=window.setTimeout(()=>{r.current=!1,u(t)},n)))},[t,s.leading,n]),e.useEffect(()=>(a.current=!0,c),[]),[f,c]}var m=l("search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]]);export{m as I,i as u};
