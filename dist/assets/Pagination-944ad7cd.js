import{J as jt,o as j,p as y,t as St,R as n,v as Q,aJ as b,w as Rt,z as zt,x as Ft,aA as Vt,N as Mt,au as Dt,r as Zt,aK as Bt,V as Jt}from"./index-83f02462.js";import{u as At}from"./LoadingScreen-1d872a53.js";const[Gt,S]=jt("Pagination.Root component was not found in tree");var Ht={root:"m-4addd315",control:"m-326d024a",dots:"m-4ad7767d"};const O=Ht;var Kt=Object.defineProperty,C=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,D=(t,e,a)=>e in t?Kt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,Z=(t,e)=>{for(var a in e||(e={}))W.call(e,a)&&D(t,a,e[a]);if(C)for(var a of C(e))X.call(e,a)&&D(t,a,e[a]);return t},Tt=(t,e)=>{var a={};for(var r in t)W.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&C)for(var r of C(t))e.indexOf(r)<0&&X.call(t,r)&&(a[r]=t[r]);return a};const Ut={siblings:1,boundaries:1},qt=Rt((t,{size:e,radius:a,color:r})=>({root:{"--pagination-control-radius":a===void 0?void 0:zt(a),"--pagination-control-size":Ft(e,"pagination-control-size"),"--pagination-control-fz":Vt(e),"--pagination-active-bg":r?Mt(r,t):void 0}})),R=j((t,e)=>{const a=y("PaginationRoot",Ut,t),r=a,{classNames:s,className:o,style:i,styles:f,unstyled:P,vars:v,total:c,value:d,defaultValue:l,onChange:g,disabled:m,siblings:vt,boundaries:dt,color:Oe,radius:he,onNextPage:Pt,onPreviousPage:gt,onFirstPage:mt,onLastPage:_t,getItemProps:ut}=r,yt=Tt(r,["classNames","className","style","styles","unstyled","vars","total","value","defaultValue","onChange","disabled","siblings","boundaries","color","radius","onNextPage","onPreviousPage","onFirstPage","onLastPage","getItemProps"]),M=St({name:"Pagination",classes:O,props:a,className:o,style:i,classNames:s,styles:f,unstyled:P,vars:v,varsResolver:qt}),{range:Ot,setPage:ht,next:wt,previous:$t,active:bt,first:Ct,last:Et}=At({page:d,initialPage:l,onChange:g,total:c,siblings:vt,boundaries:dt}),It=b(Pt,wt),Nt=b(gt,$t),xt=b(mt,Ct),Lt=b(_t,Et);return n.createElement(Gt,{value:{total:c,range:Ot,active:bt,disabled:m,getItemProps:ut,onChange:ht,onNext:It,onPrevious:Nt,onFirst:xt,onLast:Lt,getStyles:M}},n.createElement(Q,Z(Z({ref:e},M("root")),yt)))});R.classes=O;R.displayName="@mantine/core/PaginationRoot";var Qt=Object.defineProperty,E=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,B=(t,e,a)=>e in t?Qt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,J=(t,e)=>{for(var a in e||(e={}))Y.call(e,a)&&B(t,a,e[a]);if(E)for(var a of E(e))k.call(e,a)&&B(t,a,e[a]);return t},Wt=(t,e)=>{var a={};for(var r in t)Y.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&E)for(var r of E(t))e.indexOf(r)<0&&k.call(t,r)&&(a[r]=t[r]);return a};const Xt={withPadding:!0},h=j((t,e)=>{const r=y("PaginationControl",Xt,t),{classNames:s,className:o,style:i,styles:f,vars:P,active:v,disabled:c,withPadding:d}=r,l=Wt(r,["classNames","className","style","styles","vars","active","disabled","withPadding"]),g=S(),m=c||g.disabled;return n.createElement(Dt,J(J({ref:e,disabled:m,mod:{active:v,disabled:m,"with-padding":d}},g.getStyles("control",{className:o,style:i,classNames:s,styles:f,active:!m})),l))});h.classes=O;h.displayName="@mantine/core/PaginationControl";var Yt=Object.defineProperty,kt=Object.defineProperties,te=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,tt=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable,A=(t,e,a)=>e in t?Yt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,_=(t,e)=>{for(var a in e||(e={}))tt.call(e,a)&&A(t,a,e[a]);if(I)for(var a of I(e))et.call(e,a)&&A(t,a,e[a]);return t},w=(t,e)=>kt(t,te(e)),ee=(t,e)=>{var a={};for(var r in t)tt.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&I)for(var r of I(t))e.indexOf(r)<0&&et.call(t,r)&&(a[r]=t[r]);return a};function $(t){var e=t,{style:a,children:r,path:s}=e,o=ee(e,["style","children","path"]);return n.createElement("svg",_({viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",style:_({width:"calc(var(--pagination-control-size) / 1.8)",height:"calc(var(--pagination-control-size) / 1.8)"},a)},o),n.createElement("path",{d:s,fill:"currentColor"}))}const ae=t=>n.createElement($,w(_({},t),{path:"M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z"})),re=t=>n.createElement($,w(_({},t),{path:"M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z"})),ne=t=>n.createElement($,w(_({},t),{path:"M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"})),oe=t=>n.createElement($,w(_({},t),{path:"M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"})),ie=t=>n.createElement($,w(_({},t),{path:"M2 8c0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333C2.6 9.333 2 8.733 2 8zm9.333 0c0-.733.6-1.333 1.334-1.333C13.4 6.667 14 7.267 14 8s-.6 1.333-1.333 1.333c-.734 0-1.334-.6-1.334-1.333zM6.667 8c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333S8.733 9.333 8 9.333 6.667 8.733 6.667 8z"}));var se=Object.defineProperty,N=Object.getOwnPropertySymbols,at=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable,G=(t,e,a)=>e in t?se(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,H=(t,e)=>{for(var a in e||(e={}))at.call(e,a)&&G(t,a,e[a]);if(N)for(var a of N(e))rt.call(e,a)&&G(t,a,e[a]);return t},le=(t,e)=>{var a={};for(var r in t)at.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&N)for(var r of N(t))e.indexOf(r)<0&&rt.call(t,r)&&(a[r]=t[r]);return a};const ce={icon:ie},z=j((t,e)=>{const r=y("PaginationDots",ce,t),{classNames:s,className:o,style:i,styles:f,vars:P,icon:v}=r,c=le(r,["classNames","className","style","styles","vars","icon"]),d=S(),l=v;return n.createElement(Q,H(H({ref:e},d.getStyles("dots",{className:o,style:i,styles:f,classNames:s})),c),n.createElement(l,{style:{width:"calc(var(--pagination-control-size) / 1.8)",height:"calc(var(--pagination-control-size) / 1.8)"}}))});z.classes=O;z.displayName="@mantine/core/PaginationDots";var pe=Object.defineProperty,x=Object.getOwnPropertySymbols,nt=Object.prototype.hasOwnProperty,ot=Object.prototype.propertyIsEnumerable,K=(t,e,a)=>e in t?pe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,fe=(t,e)=>{for(var a in e||(e={}))nt.call(e,a)&&K(t,a,e[a]);if(x)for(var a of x(e))ot.call(e,a)&&K(t,a,e[a]);return t},ve=(t,e)=>{var a={};for(var r in t)nt.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&x)for(var r of x(t))e.indexOf(r)<0&&ot.call(t,r)&&(a[r]=t[r]);return a};function F({icon:t,name:e,action:a,type:r}){const s={icon:t},o=Zt.forwardRef((i,f)=>{const P=y(e,s,i),{icon:v}=P,c=ve(P,["icon"]),d=v,l=S(),g=r==="next"?l.active===l.total:l.active===1;return n.createElement(h,fe({disabled:l.disabled||g,ref:f,onClick:l[a],withPadding:!1},c),n.createElement(d,{style:{width:"calc(var(--pagination-control-size) / 1.8)",height:"calc(var(--pagination-control-size) / 1.8)"}}))});return o.displayName=`@mantine/core/${e}`,Bt(o)}const it=F({icon:ae,name:"PaginationNext",action:"onNext",type:"next"}),st=F({icon:re,name:"PaginationPrevious",action:"onPrevious",type:"previous"}),lt=F({icon:ne,name:"PaginationFirst",action:"onFirst",type:"previous"}),ct=F({icon:oe,name:"PaginationLast",action:"onLast",type:"next"});var de=Object.defineProperty,T=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable,U=(t,e,a)=>e in t?de(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,me=(t,e)=>{for(var a in e||(e={}))Pe.call(e,a)&&U(t,a,e[a]);if(T)for(var a of T(e))ge.call(e,a)&&U(t,a,e[a]);return t};function V({dotsIcon:t}){const e=S(),a=e.range.map((r,s)=>{var o;return r==="dots"?n.createElement(z,{icon:t,key:s}):n.createElement(h,me({key:s,active:r===e.active,"aria-current":r===e.active?"page":void 0,onClick:()=>e.onChange(r),disabled:e.disabled},(o=e.getItemProps)==null?void 0:o.call(e,r)),r)});return n.createElement(n.Fragment,null,a)}V.displayName="@mantine/core/PaginationItems";var _e=Object.defineProperty,L=Object.getOwnPropertySymbols,pt=Object.prototype.hasOwnProperty,ft=Object.prototype.propertyIsEnumerable,q=(t,e,a)=>e in t?_e(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,u=(t,e)=>{for(var a in e||(e={}))pt.call(e,a)&&q(t,a,e[a]);if(L)for(var a of L(e))ft.call(e,a)&&q(t,a,e[a]);return t},ue=(t,e)=>{var a={};for(var r in t)pt.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&L)for(var r of L(t))e.indexOf(r)<0&&ft.call(t,r)&&(a[r]=t[r]);return a};const ye={withControls:!0,siblings:1,boundaries:1,gap:8},p=j((t,e)=>{const r=y("Pagination",ye,t),{withEdges:s,withControls:o,getControlProps:i,nextIcon:f,previousIcon:P,lastIcon:v,firstIcon:c,dotsIcon:d,total:l,gap:g}=r,m=ue(r,["withEdges","withControls","getControlProps","nextIcon","previousIcon","lastIcon","firstIcon","dotsIcon","total","gap"]);return l<=0?null:n.createElement(R,u({ref:e,total:l},m),n.createElement(Jt,{gap:g},s&&n.createElement(lt,u({icon:c},i==null?void 0:i("first"))),o&&n.createElement(st,u({icon:P},i==null?void 0:i("previous"))),n.createElement(V,{dotsIcon:d}),o&&n.createElement(it,u({icon:f},i==null?void 0:i("next"))),s&&n.createElement(ct,u({icon:v},i==null?void 0:i("last")))))});p.classes=O;p.displayName="@mantine/core/Pagination";p.Root=R;p.Control=h;p.Dots=z;p.First=lt;p.Last=ct;p.Next=it;p.Previous=st;p.Items=V;export{p as P};
