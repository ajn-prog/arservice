import{c as v,d as p,r as w,j as e,e as N,f as o,g as b,h as k,B as z,L as M}from"./index-1a1c1bd9.js";import{I as S}from"./IconArrowLeft-734b444e.js";var D=v("bulldozer","IconBulldozer",[["path",{d:"M2 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M12 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-1"}],["path",{d:"M19 13v4a2 2 0 0 0 2 2h1",key:"svg-2"}],["path",{d:"M14 19h-10",key:"svg-3"}],["path",{d:"M4 15h10",key:"svg-4"}],["path",{d:"M9 11v-5h2a3 3 0 0 1 3 3v6",key:"svg-5"}],["path",{d:"M5 15v-3a1 1 0 0 1 1 -1h8",key:"svg-6"}],["path",{d:"M19 17h-3",key:"svg-7"}]]),H=v("school","IconSchool",[["path",{d:"M22 9l-10 -4l-10 4l10 4l10 -4v6",key:"svg-0"}],["path",{d:"M6 10.6v5.4a6 3 0 0 0 12 0v-5.4",key:"svg-1"}]]);const g=["red","orange","yellow","teal","blue","cyan","grape"];function I(){const{colors:s}=p();return a=>s[g[a%g.length]]}function j(s,a,m="minute"){const[i,n,x]=s.split(":").map(Number),[c,t,d]=a.split(":").map(Number),l=i*60+n,r=c*60+t,h=l*60+x,f=r*60+d,u=i+(n<30?0:30)/60+x/3600,y=c+(t<30?0:30)/60+d/3600;switch(m){case"hour":return Math.abs(i-c);case"hour-decimal":return Math.abs(u-y);case"minute":return Math.abs(l-r);case"second":return Math.abs(h-f);default:return 0}}const R=({schedules:s})=>{const[a,m]=w.useState(new Date),i=I();function n(t){const d={senin:1,selasa:2,rabu:3,kamis:4,jumat:5,sabtu:6,minggu:7},l=t.toLowerCase();return d[l]||0}function x(t){switch(n(t)){case 1:return"sm:col-start-1";case 2:return"sm:col-start-2";case 3:return"sm:col-start-3";case 4:return"sm:col-start-4";case 5:return"sm:col-start-5";case 6:return"sm:col-start-6";case 7:return"sm:col-start-7";default:return""}}const c=()=>{const t=o(a).startOf("weeks");return e.jsx(e.Fragment,{children:Array(7).fill(0).map((d,l)=>{const r=t.add(l,"day");return e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsx(b,{onClick:()=>m(r.toDate()),radius:"lg",color:r.isSame(a,"day")?"primary":"dark",variant:r.isSame(a,"day")?"light":"transparent",children:r.format("dd")})},l)})})};return e.jsx("div",{className:"isolate flex h-[720px] max-h-[720px] overflow-y-auto flex-auto flex-col bg-white rounded-md shadow-md",children:e.jsxs("div",{className:"flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full",style:{width:"165%"},children:[e.jsxs("div",{className:"sticky top-0 z-30 flex-none bg-white shadow-sm ring-1 ring-black ring-opacity-5 sm:pr-8",children:[e.jsx("div",{className:"grid grid-cols-7 py-2 text-sm leading-6 text-gray-600 sm:hidden",children:e.jsx(c,{})}),e.jsxs("div",{className:"-mr-px hidden grid-cols-7 border-r border-gray-200 text-sm leading-6 text-gray-700 sm:grid divide-x divide-gray-200",children:[e.jsx("div",{className:"col-end-1 w-14"}),e.jsx("div",{className:"flex items-center justify-center py-3 font-bold",children:"Senin"}),e.jsx("div",{className:"flex items-center justify-center py-3 font-bold",children:"Selasa"}),e.jsx("div",{className:"flex items-center justify-center py-3 font-bold",children:"Rabu"}),e.jsx("div",{className:"flex items-center justify-center py-3 font-bold",children:"Kamis"}),e.jsx("div",{className:"flex items-center justify-center py-3 font-bold",children:"Jumat"}),e.jsx("div",{className:"flex items-center justify-center py-3 font-bold",children:"Sabtu"}),e.jsx("div",{className:"flex items-center justify-center py-3 font-bold",children:"Minggu"})]})]}),e.jsxs("div",{className:"flex flex-auto",children:[e.jsx("div",{className:"sticky left-0 z-10 w-14 flex-none bg-white ring-1 ring-gray-200"}),e.jsxs("div",{className:"grid flex-auto grid-cols-1 grid-rows-1",children:[e.jsxs("div",{className:"col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-200",style:{gridTemplateRows:"repeat(38, minmax(3.5rem, 1fr))"},children:[e.jsx("div",{className:"row-end-1 h-7"}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600",children:"04:00"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600",children:"05:00"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600",children:"06:00"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600",children:"07:00"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600",children:"08:00"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600",children:"09:00"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600",children:"10:00"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600",children:"11:00"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600",children:"12:00"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600",children:"13:00"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600",children:"14:00"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600",children:"15:00"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600",children:"16:00"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600",children:"17:00"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600",children:"18:00"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600",children:"19:00"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600",children:"20:00"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600",children:"21:00"})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx("div",{className:"sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600",children:"22:00"})}),e.jsx("div",{})]}),e.jsxs("div",{className:"col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 sm:grid sm:grid-cols-7 divide-x divide-gray-200",children:[e.jsx("div",{className:"col-start-1 row-span-full"}),e.jsx("div",{className:"col-start-2 row-span-full"}),e.jsx("div",{className:"col-start-3 row-span-full"}),e.jsx("div",{className:"col-start-4 row-span-full"}),e.jsx("div",{className:"col-start-5 row-span-full"}),e.jsx("div",{className:"col-start-6 row-span-full"}),e.jsx("div",{className:"col-start-7 row-span-full"}),e.jsx("div",{className:"col-start-8 row-span-full w-8"})]}),e.jsx("div",{className:"col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8",style:{gridTemplateRows:"1.75rem repeat(228, minmax(0px, 1fr)) auto"},children:s.map((t,d)=>{const l=j(t.startTime,"04:00:00","hour-decimal"),r=j(t.startTime,t.endTime,"hour-decimal"),h=r<.5?.5:r;return e.jsx("div",{className:N("relative mt-px",x(t.day),t.day==o(a).format("dddd").toLowerCase()?"flex":"hidden md:flex"),style:{gridRow:`${2+6*(l*2)} / span ${6*h*2}`},children:e.jsxs("div",{className:"absolute opacity-80 inset-1 flex flex-col overflow-y-auto rounded-lg p-2 text-xs leading-5 cursor-pointer",style:{background:i(t.colorId??3)[1]},children:[e.jsxs("p",{style:{color:i(t.colorId??3)[6]},children:[e.jsx("span",{children:o(t.startTime,"HH:mm:ss").format("HH:mm")}),e.jsx("span",{children:" - "}),e.jsx("span",{children:o(t.endTime,"HH:mm:ss").format("HH:mm")})]}),e.jsx("p",{className:"font-bold text-sm mb-1.5",style:{color:i(t.colorId??3)[6]},children:t.title}),t.description]})},d)})})]})]})]})})},B=()=>e.jsx("main",{children:e.jsx("h1",{className:"text-4xl font-bold",children:"Selamat Datang"})}),L=()=>{const s=k();return e.jsx("main",{children:e.jsxs("div",{className:"flex flex-col items-center justify-center py-24 mx-auto max-w-xs",children:[e.jsx(D,{size:72,stroke:1.2,className:"text-gray-800"}),e.jsx("h1",{className:"text-lg font-bold mb-4 text-center",children:"Halaman tidak ditemukan atau fitur Dalam Pengembangan"}),e.jsx(z,{leftSection:e.jsx(S,{size:16}),onClick:()=>s(-1),children:"Kembali"})]})})},C=[{title:"Program",href:"/program"},{title:"Mata Pelajaran",href:"/subject"},{title:"Kelas",href:"/classroom"},{title:"Jadwal Pelajaran",href:"/schedule"},{title:"Predikat Penilaian",href:"/predicate"}],K=()=>e.jsx("main",{children:e.jsxs("section",{className:"max-w-3xl",children:[e.jsx("div",{className:"mb-6",children:e.jsx("h2",{className:"text-2xl text-center font-bold",children:"Kurikulum"})}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 w-full",children:C.map(({title:s,href:a})=>e.jsx(M,{to:a,children:e.jsxs("button",{className:"aspect-square border border-blue-400 text-blue-500 hover:bg-blue-100 hover:bg-opacity-90 transition bg-blue-50 w-full rounded-lg shadow-lg shadow-gray-200 flex flex-col items-center justify-center space-y-1",children:[e.jsx(H,{size:36}),e.jsx("div",{className:"font-bold h-9 px-2 flex items-center justify-center",children:s})]})},s))})]})});export{K as Curriculum,B as Dashboard,L as UnderDevelopment,R as WeeklyCalendar};
