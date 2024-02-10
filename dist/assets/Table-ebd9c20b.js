import{c as u,j as e,h as y,aS as j,r as f}from"./index-c4448578.js";import{a as v}from"./LoadingScreen-b9f30ff2.js";import{C as x}from"./Select-a8f550af.js";var N=u("chevron-left","IconChevronLeft",[["path",{d:"M15 6l-6 6l6 6",key:"svg-0"}]]);const w=({page:s,active:t,onClick:n})=>{function r(){if(s!="dots")return n(s)}return e.jsx("button",{onClick:r,disabled:t||s=="dots",className:y("relative inline-flex items-center border px-4 py-2 text-sm font-medium",t?"z-10 bg-primary-50 border-primary-500 text-primary-600":"bg-white border-gray-300 text-gray-600 hover:bg-gray-50",s=="dots"&&"!text-gray-700 hover:!bg-white"),children:s=="dots"?"...":s})},k=({metadata:s,onPageChange:t})=>{const{total:n,limit:r,page:a,count:i}=s,d=Math.ceil(n/r),c=a!=1,l=a<d,o=r*(a-1)+1,h=r*a-(r-i),{range:b,active:g}=v({page:s.page,total:d});return e.jsxs("div",{className:"flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6",children:[e.jsxs("div",{className:"flex flex-1 justify-between sm:hidden",children:[e.jsx("button",{onClick:()=>{c&&t(a-1)},className:"relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50",children:"Previous"}),e.jsx("button",{onClick:()=>{l&&t(a+1)},className:"relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50",children:"Next"})]}),e.jsxs("div",{className:"hidden sm:flex sm:flex-1 sm:items-center sm:justify-between",children:[e.jsx("div",{children:e.jsxs("p",{className:"text-sm text-gray-700",children:["Showing ",e.jsx("span",{className:"font-medium",children:o})," to"," ",e.jsx("span",{className:"font-medium",children:h})," of"," ",e.jsx("span",{className:"font-medium",children:n})," results"]})}),e.jsx("div",{children:e.jsxs("nav",{className:"isolate inline-flex -space-x-px rounded-md shadow-sm","aria-label":"Pagination",children:[e.jsxs("button",{onClick:()=>{c&&t(a-1)},className:"relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50",children:[e.jsx("span",{className:"sr-only",children:"Previous"}),e.jsx(N,{className:"h-5 w-5","aria-hidden":"true"})]}),b.map((m,p)=>e.jsx(w,{page:m,active:g==m,onClick:t},`${m}_${p}`)),e.jsxs("button",{onClick:()=>{l&&t(a+1)},className:"relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50",children:[e.jsx("span",{className:"sr-only",children:"Next"}),e.jsx(j,{className:"h-5 w-5","aria-hidden":"true"})]})]})})]})]})},C=({row:s,col:t})=>{const n=[];for(let r=0;r<s;r++){const a=[];for(let i=0;i<t;i++)a.push(e.jsx("td",{children:e.jsx("div",{className:"min-w-[5rem] h-5 bg-gray-200 rounded animate-pulse"})},`${r}${i}`));n.push(e.jsx("tr",{children:a},r))}return n},S=({col:s,row:t})=>e.jsx(e.Fragment,{children:C({col:s,row:t})}),P=s=>{const{items:t,renderItem:n,header:r,loading:a,metadata:i,onPageChange:d}=s,c=f.useId();return e.jsxs(x,{p:0,shadow:"sm",children:[e.jsx(x.Section,{p:"md",pb:0,children:e.jsxs("div",{className:"flex items-center justify-between py-4 px-5",children:[e.jsx("div",{className:"font-semibold text-base",children:e.jsxs("h2",{className:"text-gray-800",children:[s.title??"Table"," "]})}),e.jsx("div",{className:"flex items-center space-x-2",children:s.toolbar})]})}),e.jsxs(x.Section,{px:"md",pb:"md",children:[e.jsx("div",{className:"text-gray-700 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 scrollbar-track-gray-50",children:e.jsxs("table",{className:"table-auto w-full",children:[e.jsx("thead",{className:"border-t border-b-[1.5px] w-full border-gray-300 bg-gray-100 text-gray-600 mx-4",children:e.jsx("tr",{children:r.map((l,o)=>e.jsx("th",{scope:"col",className:"py-3 px-5 text-left w-max text-xs uppercase whitespace-nowrap",children:l},`${c}_head_${o}`))})}),e.jsx("tbody",{className:"text-sm divide-y divide-gray-300 [&_td]:whitespace-nowrap [&_td]:px-5 [&_td]:py-3",children:a||!t?e.jsx(S,{col:r.length,row:5}):t.length>0?t.map((l,o)=>n(l,o)):e.jsx("tr",{children:e.jsx("td",{colSpan:r.length,className:"text-center !py-12",children:"Data tidak ditemukan"})})})]})}),!a&&!!t&&t.length>0&&!!i&&e.jsx(k,{metadata:i,onPageChange:l=>{d&&d(l)}})]})]})};export{P as T};
