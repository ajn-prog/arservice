import{a1 as E,R as n,$ as K,a2 as I,x as B,K as Q,D as q,r as b,aQ as G,H as J,a3 as T}from"./index-90fd468a.js";function le(r,e,t){return e===void 0&&t===void 0?r:e!==void 0&&t===void 0?Math.max(r,e):Math.min(e===void 0&&t!==void 0?r:Math.max(r,e),t)}var U=Object.defineProperty,i=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,S=(r,e,t)=>e in r?U(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,c=(r,e)=>{for(var t in e||(e={}))M.call(e,t)&&S(r,t,e[t]);if(i)for(var t of i(e))V.call(e,t)&&S(r,t,e[t]);return r},z=(r,e)=>{var t={};for(var a in r)M.call(r,a)&&e.indexOf(a)<0&&(t[a]=r[a]);if(r!=null&&i)for(var a of i(r))e.indexOf(a)<0&&V.call(r,a)&&(t[a]=r[a]);return t};function W(r){var e=r,{size:t,style:a}=e,o=z(e,["size","style"]);const l=t!==void 0?c({width:E(t),height:E(t)},a):a;return n.createElement("svg",c({viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:l,"aria-hidden":!0},o),n.createElement("path",{d:"M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}function ie(r){var e=r,{indeterminate:t}=e,a=z(e,["indeterminate"]);return t?n.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 6","aria-hidden":!0},a),n.createElement("rect",{width:"32",height:"6",fill:"currentColor",rx:"3"})):n.createElement(W,c({},a))}const[X,Y]=K("Card component was not found in tree");var Z={root:"m-e615b15f",section:"m-599a2148"};const g=Z;var k=Object.defineProperty,f=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,x=(r,e,t)=>e in r?k(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,N=(r,e)=>{for(var t in e||(e={}))A.call(e,t)&&x(r,t,e[t]);if(f)for(var t of f(e))L.call(e,t)&&x(r,t,e[t]);return r},ee=(r,e)=>{var t={};for(var a in r)A.call(r,a)&&e.indexOf(a)<0&&(t[a]=r[a]);if(r!=null&&f)for(var a of f(r))e.indexOf(a)<0&&L.call(r,a)&&(t[a]=r[a]);return t};const re={},p=I((r,e)=>{const a=B("CardSection",re,r),{classNames:o,className:l,style:v,styles:m,vars:_,withBorder:y,inheritPadding:u}=a,O=ee(a,["classNames","className","style","styles","vars","withBorder","inheritPadding"]),h=Y();return n.createElement(Q,N(N({ref:e,mod:{"with-border":y,"inherit-padding":u}},h.getStyles("section",{className:l,style:v,styles:m,classNames:o})),O))});p.classes=g;p.displayName="@mantine/core/CardSection";var te=Object.defineProperty,d=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,j=(r,e,t)=>e in r?te(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,R=(r,e)=>{for(var t in e||(e={}))D.call(e,t)&&j(r,t,e[t]);if(d)for(var t of d(e))F.call(e,t)&&j(r,t,e[t]);return r},ae=(r,e)=>{var t={};for(var a in r)D.call(r,a)&&e.indexOf(a)<0&&(t[a]=r[a]);if(r!=null&&d)for(var a of d(r))e.indexOf(a)<0&&F.call(r,a)&&(t[a]=r[a]);return t};const ne={},se=J((r,{padding:e})=>({root:{"--card-padding":T(e)}})),w=I((r,e)=>{const t=B("Card",ne,r),a=t,{classNames:o,className:l,style:v,styles:m,unstyled:_,vars:y,children:u,padding:O}=a,h=ae(a,["classNames","className","style","styles","unstyled","vars","children","padding"]),P=q({name:"Card",props:t,classes:g,className:l,style:v,classNames:o,styles:m,unstyled:_,vars:y,varsResolver:se}),C=b.Children.toArray(u),H=C.map((s,$)=>typeof s=="object"&&s&&"type"in s&&s.type===p?b.cloneElement(s,{"data-first-section":$===0||void 0,"data-last-section":$===C.length-1||void 0}):s);return n.createElement(X,{value:{getStyles:P}},n.createElement(G,R(R({ref:e,unstyled:_},P("root")),h),H))});w.classes=g;w.displayName="@mantine/core/Card";w.Section=p;export{w as C,ie as a,W as b,le as c};
