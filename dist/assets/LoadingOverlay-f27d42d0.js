import{aa as R,f as S,g as D,i as z,p as T,R as l,ar as V,h as k,aC as B,aD as y,r as C}from"./index-a6533a44.js";var M={root:"m-6e45937b",loader:"m-e8eb006c",overlay:"m-df587f17"};const P=M;var Z=Object.defineProperty,$=Object.defineProperties,q=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,f=(r,e,a)=>e in r?Z(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,s=(r,e)=>{for(var a in e||(e={}))_.call(e,a)&&f(r,a,e[a]);if(v)for(var a of v(e))O.call(e,a)&&f(r,a,e[a]);return r},n=(r,e)=>$(r,q(e)),A=(r,e)=>{var a={};for(var o in r)_.call(r,o)&&e.indexOf(o)<0&&(a[o]=r[o]);if(r!=null&&v)for(var o of v(r))e.indexOf(o)<0&&O.call(r,o)&&(a[o]=r[o]);return a};const m={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:R("overlay")},F=C((r,{zIndex:e})=>({root:{"--lo-z-index":e==null?void 0:e.toString()}})),u=S((r,e)=>{const a=D("LoadingOverlay",m,r),o=a,{classNames:g,className:b,style:h,styles:w,unstyled:i,vars:x,transitionProps:E,loaderProps:L,overlayProps:t,visible:N,zIndex:G}=o,j=A(o,["classNames","className","style","styles","unstyled","vars","transitionProps","loaderProps","overlayProps","visible","zIndex"]),d=z(),c=T({name:"LoadingOverlay",classes:P,props:a,className:b,style:h,classNames:g,styles:w,unstyled:i,vars:x,varsResolver:F}),p=s(s({},m.overlayProps),t);return l.createElement(V,n(s({transition:"fade"},E),{mounted:!!N}),I=>l.createElement(k,s(n(s({},c("root",{style:I})),{ref:e}),j),l.createElement(B,s(n(s({},c("loader")),{unstyled:i}),L)),l.createElement(y,n(s(s({},p),c("overlay")),{"data-light":!0,unstyled:i,color:(t==null?void 0:t.color)||d.white})),l.createElement(y,n(s(s({},p),c("overlay")),{"data-dark":!0,unstyled:i,color:(t==null?void 0:t.color)||d.colors.dark[5]}))))});u.classes=P;u.displayName="@mantine/core/LoadingOverlay";export{u as L};