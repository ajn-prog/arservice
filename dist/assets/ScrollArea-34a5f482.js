import{v as f,e as Ae,aR as hr,R as d,O as x,k as Pr,g as ie,h as N,f as ze,p as wr,r as Or,a4 as Sr}from"./index-74fbf4f3.js";function C(e){const r=f.useRef(e);return f.useEffect(()=>{r.current=e}),f.useMemo(()=>(...t)=>{var o;return(o=r.current)==null?void 0:o.call(r,...t)},[])}function ee(e,r){const t=C(e),o=f.useRef(0);return f.useEffect(()=>()=>window.clearTimeout(o.current),[]),f.useCallback(()=>{window.clearTimeout(o.current),o.current=window.setTimeout(t,r)},[t,r])}const[gr,O]=Ae("ScrollArea.Root component was not found in tree");function j(e,r){const t=C(r);hr(()=>{let o=0;if(e){const p=new ResizeObserver(()=>{cancelAnimationFrame(o),o=window.requestAnimationFrame(t)});return p.observe(e),()=>{window.cancelAnimationFrame(o),p.unobserve(e)}}},[e,t])}const[yr,Ie]=Ae("ScrollAreaScrollbar was not found in tree");function D(e,r,{checkForDefaultPrevented:t=!0}={}){return o=>{e==null||e(o),(t===!1||!o.defaultPrevented)&&(r==null||r(o))}}var $r=Object.defineProperty,Er=Object.defineProperties,Rr=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,He=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,de=(e,r,t)=>r in e?$r(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,ue=(e,r)=>{for(var t in r||(r={}))He.call(r,t)&&de(e,t,r[t]);if(M)for(var t of M(r))We.call(r,t)&&de(e,t,r[t]);return e},Cr=(e,r)=>Er(e,Rr(r)),Dr=(e,r)=>{var t={};for(var o in e)He.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&M)for(var o of M(e))r.indexOf(o)<0&&We.call(e,o)&&(t[o]=e[o]);return t};const Le=f.forwardRef((e,r)=>{const t=e,{sizes:o,hasThumb:p,onThumbChange:a,onThumbPointerUp:n,onThumbPointerDown:l,onThumbPositionChange:s,onDragScroll:v,onWheelScroll:i,onResize:c}=t,_=Dr(t,["sizes","hasThumb","onThumbChange","onThumbPointerUp","onThumbPointerDown","onThumbPositionChange","onDragScroll","onWheelScroll","onResize"]),m=O(),[u,h]=d.useState(null),R=x(r,b=>h(b)),P=d.useRef(null),$=d.useRef(""),{viewport:T}=m,y=o.content-o.viewport,w=C(i),E=C(s),z=ee(c,10),I=b=>{if(P.current){const S=b.clientX-P.current.left,H=b.clientY-P.current.top;v({x:S,y:H})}};return f.useEffect(()=>{const b=S=>{const H=S.target;(u==null?void 0:u.contains(H))&&w(S,y)};return document.addEventListener("wheel",b,{passive:!1}),()=>document.removeEventListener("wheel",b,{passive:!1})},[T,u,y,w]),f.useEffect(E,[o,E]),j(u,z),j(m.content,z),d.createElement(yr,{value:{scrollbar:u,hasThumb:p,onThumbChange:C(a),onThumbPointerUp:C(n),onThumbPositionChange:E,onThumbPointerDown:C(l)}},d.createElement("div",Cr(ue({},_),{ref:R,style:ue({position:"absolute"},_.style),onPointerDown:D(e.onPointerDown,b=>{b.button===0&&(b.target.setPointerCapture(b.pointerId),P.current=u.getBoundingClientRect(),$.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",I(b))}),onPointerMove:D(e.onPointerMove,I),onPointerUp:D(e.onPointerUp,b=>{const S=b.target;S.hasPointerCapture(b.pointerId)&&S.releasePointerCapture(b.pointerId),document.body.style.webkitUserSelect=$.current,P.current=null})})))});function Ne(e,r){const t=e/r;return Number.isNaN(t)?0:t}function re(e){const r=Ne(e.viewport,e.content),t=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,o=(e.scrollbar.size-t)*r;return Math.max(o,18)}function Me(e,r){return e>0&&e<r}function V(e){return e?parseInt(e,10):0}var jr=Object.defineProperty,xr=Object.defineProperties,Tr=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,Ve=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable,ve=(e,r,t)=>r in e?jr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,_e=(e,r)=>{for(var t in r||(r={}))Ve.call(r,t)&&ve(e,t,r[t]);if(X)for(var t of X(r))Xe.call(r,t)&&ve(e,t,r[t]);return e},me=(e,r)=>xr(e,Tr(r)),Ar=(e,r)=>{var t={};for(var o in e)Ve.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&X)for(var o of X(e))r.indexOf(o)<0&&Xe.call(e,o)&&(t[o]=e[o]);return t};const zr=f.forwardRef((e,r)=>{const t=e,{sizes:o,onSizesChange:p,style:a}=t,n=Ar(t,["sizes","onSizesChange","style"]),l=O(),[s,v]=f.useState(),i=f.useRef(null),c=x(r,i,l.onScrollbarXChange);return f.useEffect(()=>{i.current&&v(getComputedStyle(i.current))},[i]),d.createElement(Le,me(_e({"data-orientation":"horizontal"},n),{ref:c,sizes:o,style:me(_e({},a),{"--sa-thumb-width":`${re(o)}px`}),onThumbPointerDown:_=>e.onThumbPointerDown(_.x),onDragScroll:_=>e.onDragScroll(_.x),onWheelScroll:(_,m)=>{if(l.viewport){const u=l.viewport.scrollLeft+_.deltaX;e.onWheelScroll(u),Me(u,m)&&_.preventDefault()}},onResize:()=>{i.current&&l.viewport&&s&&p({content:l.viewport.scrollWidth,viewport:l.viewport.offsetWidth,scrollbar:{size:i.current.clientWidth,paddingStart:V(s.paddingLeft),paddingEnd:V(s.paddingRight)}})}}))});var Ir=Object.defineProperty,Hr=Object.defineProperties,Wr=Object.getOwnPropertyDescriptors,Y=Object.getOwnPropertySymbols,Ye=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable,be=(e,r,t)=>r in e?Ir(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,he=(e,r)=>{for(var t in r||(r={}))Ye.call(r,t)&&be(e,t,r[t]);if(Y)for(var t of Y(r))Ue.call(r,t)&&be(e,t,r[t]);return e},Lr=(e,r)=>Hr(e,Wr(r)),Nr=(e,r)=>{var t={};for(var o in e)Ye.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&Y)for(var o of Y(e))r.indexOf(o)<0&&Ue.call(e,o)&&(t[o]=e[o]);return t};const Mr=f.forwardRef((e,r)=>{const t=e,{sizes:o,onSizesChange:p,style:a}=t,n=Nr(t,["sizes","onSizesChange","style"]),l=O(),[s,v]=d.useState(),i=f.useRef(null),c=x(r,i,l.onScrollbarYChange);return f.useEffect(()=>{i.current&&v(getComputedStyle(i.current))},[i]),d.createElement(Le,Lr(he({},n),{"data-orientation":"vertical",ref:c,sizes:o,style:he({"--sa-thumb-height":`${re(o)}px`},a),onThumbPointerDown:_=>e.onThumbPointerDown(_.y),onDragScroll:_=>e.onDragScroll(_.y),onWheelScroll:(_,m)=>{if(l.viewport){const u=l.viewport.scrollTop+_.deltaY;e.onWheelScroll(u),Me(u,m)&&_.preventDefault()}},onResize:()=>{i.current&&l.viewport&&s&&p({content:l.viewport.scrollHeight,viewport:l.viewport.offsetHeight,scrollbar:{size:i.current.clientHeight,paddingStart:V(s.paddingTop),paddingEnd:V(s.paddingBottom)}})}}))});function Fe(e,r){return t=>{if(e[0]===e[1]||r[0]===r[1])return r[0];const o=(r[1]-r[0])/(e[1]-e[0]);return r[0]+o*(t-e[0])}}function Vr(e,[r,t]){return Math.min(t,Math.max(r,e))}function Pe(e,r,t="ltr"){const o=re(r),p=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,a=r.scrollbar.size-p,n=r.content-r.viewport,l=a-o,s=t==="ltr"?[0,n]:[n*-1,0],v=Vr(e,s);return Fe([0,n],[0,l])(v)}function Xr(e,r,t,o="ltr"){const p=re(t),a=p/2,n=r||a,l=p-n,s=t.scrollbar.paddingStart+n,v=t.scrollbar.size-t.scrollbar.paddingEnd-l,i=t.content-t.viewport,c=o==="ltr"?[0,i]:[i*-1,0];return Fe([s,v],c)(e)}var Yr=Object.defineProperty,Ur=Object.defineProperties,Fr=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,Be=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable,we=(e,r,t)=>r in e?Yr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,oe=(e,r)=>{for(var t in r||(r={}))Be.call(r,t)&&we(e,t,r[t]);if(U)for(var t of U(r))qe.call(r,t)&&we(e,t,r[t]);return e},ne=(e,r)=>Ur(e,Fr(r)),Br=(e,r)=>{var t={};for(var o in e)Be.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&U)for(var o of U(e))r.indexOf(o)<0&&qe.call(e,o)&&(t[o]=e[o]);return t};const ce=f.forwardRef((e,r)=>{const t=e,{orientation:o="vertical"}=t,p=Br(t,["orientation"]),{dir:a}=Pr(),n=O(),l=f.useRef(null),s=f.useRef(0),[v,i]=f.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),c=Ne(v.viewport,v.content),_=ne(oe({},p),{sizes:v,onSizesChange:i,hasThumb:c>0&&c<1,onThumbChange:u=>{l.current=u},onThumbPointerUp:()=>{s.current=0},onThumbPointerDown:u=>{s.current=u}}),m=(u,h)=>Xr(u,s.current,v,h);return o==="horizontal"?d.createElement(zr,ne(oe({},_),{ref:r,onThumbPositionChange:()=>{if(n.viewport&&l.current){const u=n.viewport.scrollLeft,h=Pe(u,v,a);l.current.style.transform=`translate3d(${h}px, 0, 0)`}},onWheelScroll:u=>{n.viewport&&(n.viewport.scrollLeft=u)},onDragScroll:u=>{n.viewport&&(n.viewport.scrollLeft=m(u,a))}})):o==="vertical"?d.createElement(Mr,ne(oe({},_),{ref:r,onThumbPositionChange:()=>{if(n.viewport&&l.current){const u=n.viewport.scrollTop,h=Pe(u,v);l.current.style.transform=`translate3d(0, ${h}px, 0)`}},onWheelScroll:u=>{n.viewport&&(n.viewport.scrollTop=u)},onDragScroll:u=>{n.viewport&&(n.viewport.scrollTop=m(u))}})):null});var qr=Object.defineProperty,Gr=Object.defineProperties,Jr=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertySymbols,Ge=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable,Oe=(e,r,t)=>r in e?qr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Kr=(e,r)=>{for(var t in r||(r={}))Ge.call(r,t)&&Oe(e,t,r[t]);if(F)for(var t of F(r))Je.call(r,t)&&Oe(e,t,r[t]);return e},Qr=(e,r)=>Gr(e,Jr(r)),Zr=(e,r)=>{var t={};for(var o in e)Ge.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&F)for(var o of F(e))r.indexOf(o)<0&&Je.call(e,o)&&(t[o]=e[o]);return t};const Ke=f.forwardRef((e,r)=>{const t=O(),o=e,{forceMount:p}=o,a=Zr(o,["forceMount"]),[n,l]=f.useState(!1),s=e.orientation==="horizontal",v=ee(()=>{if(t.viewport){const i=t.viewport.offsetWidth<t.viewport.scrollWidth,c=t.viewport.offsetHeight<t.viewport.scrollHeight;l(s?i:c)}},10);return j(t.viewport,v),j(t.content,v),p||n?d.createElement(ce,Qr(Kr({"data-state":n?"visible":"hidden"},a),{ref:r})):null});var kr=Object.defineProperty,et=Object.defineProperties,rt=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,Qe=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable,Se=(e,r,t)=>r in e?kr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,tt=(e,r)=>{for(var t in r||(r={}))Qe.call(r,t)&&Se(e,t,r[t]);if(B)for(var t of B(r))Ze.call(r,t)&&Se(e,t,r[t]);return e},ot=(e,r)=>et(e,rt(r)),nt=(e,r)=>{var t={};for(var o in e)Qe.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&B)for(var o of B(e))r.indexOf(o)<0&&Ze.call(e,o)&&(t[o]=e[o]);return t};const lt=f.forwardRef((e,r)=>{const t=e,{forceMount:o}=t,p=nt(t,["forceMount"]),a=O(),[n,l]=f.useState(!1);return f.useEffect(()=>{const{scrollArea:s}=a;let v=0;if(s){const i=()=>{window.clearTimeout(v),l(!0)},c=()=>{v=window.setTimeout(()=>l(!1),a.scrollHideDelay)};return s.addEventListener("pointerenter",i),s.addEventListener("pointerleave",c),()=>{window.clearTimeout(v),s.removeEventListener("pointerenter",i),s.removeEventListener("pointerleave",c)}}},[a.scrollArea,a.scrollHideDelay]),o||n?d.createElement(Ke,ot(tt({"data-state":n?"visible":"hidden"},p),{ref:r})):null});var at=Object.defineProperty,st=Object.defineProperties,it=Object.getOwnPropertyDescriptors,q=Object.getOwnPropertySymbols,ke=Object.prototype.hasOwnProperty,er=Object.prototype.propertyIsEnumerable,ge=(e,r,t)=>r in e?at(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,ct=(e,r)=>{for(var t in r||(r={}))ke.call(r,t)&&ge(e,t,r[t]);if(q)for(var t of q(r))er.call(r,t)&&ge(e,t,r[t]);return e},ft=(e,r)=>st(e,it(r)),pt=(e,r)=>{var t={};for(var o in e)ke.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&q)for(var o of q(e))r.indexOf(o)<0&&er.call(e,o)&&(t[o]=e[o]);return t};const dt=f.forwardRef((e,r)=>{const t=e,{forceMount:o}=t,p=pt(t,["forceMount"]),a=O(),n=e.orientation==="horizontal",[l,s]=f.useState("hidden"),v=ee(()=>s("idle"),100);return f.useEffect(()=>{if(l==="idle"){const i=window.setTimeout(()=>s("hidden"),a.scrollHideDelay);return()=>window.clearTimeout(i)}},[l,a.scrollHideDelay]),f.useEffect(()=>{const{viewport:i}=a,c=n?"scrollLeft":"scrollTop";if(i){let _=i[c];const m=()=>{const u=i[c];_!==u&&(s("scrolling"),v()),_=u};return i.addEventListener("scroll",m),()=>i.removeEventListener("scroll",m)}},[a.viewport,n,v]),o||l!=="hidden"?d.createElement(ce,ft(ct({"data-state":l==="hidden"?"hidden":"visible"},p),{ref:r,onPointerEnter:D(e.onPointerEnter,()=>s("interacting")),onPointerLeave:D(e.onPointerLeave,()=>s("idle"))})):null});var ut=Object.defineProperty,vt=Object.defineProperties,_t=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,rr=Object.prototype.hasOwnProperty,tr=Object.prototype.propertyIsEnumerable,ye=(e,r,t)=>r in e?ut(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,W=(e,r)=>{for(var t in r||(r={}))rr.call(r,t)&&ye(e,t,r[t]);if(G)for(var t of G(r))tr.call(r,t)&&ye(e,t,r[t]);return e},L=(e,r)=>vt(e,_t(r)),mt=(e,r)=>{var t={};for(var o in e)rr.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&G)for(var o of G(e))r.indexOf(o)<0&&tr.call(e,o)&&(t[o]=e[o]);return t};const $e=d.forwardRef((e,r)=>{const t=e,{forceMount:o}=t,p=mt(t,["forceMount"]),a=O(),{onScrollbarXEnabledChange:n,onScrollbarYEnabledChange:l}=a,s=e.orientation==="horizontal";return d.useEffect(()=>(s?n(!0):l(!0),()=>{s?n(!1):l(!1)}),[s,n,l]),a.type==="hover"?d.createElement(lt,L(W({},p),{ref:r,forceMount:o})):a.type==="scroll"?d.createElement(dt,L(W({},p),{ref:r,forceMount:o})):a.type==="auto"?d.createElement(Ke,L(W({},p),{ref:r,forceMount:o})):a.type==="always"?d.createElement(ce,L(W({},p),{ref:r})):null});var bt=Object.defineProperty,ht=Object.defineProperties,Pt=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertySymbols,or=Object.prototype.hasOwnProperty,nr=Object.prototype.propertyIsEnumerable,Ee=(e,r,t)=>r in e?bt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,le=(e,r)=>{for(var t in r||(r={}))or.call(r,t)&&Ee(e,t,r[t]);if(J)for(var t of J(r))nr.call(r,t)&&Ee(e,t,r[t]);return e},ae=(e,r)=>ht(e,Pt(r)),wt=(e,r)=>{var t={};for(var o in e)or.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&J)for(var o of J(e))r.indexOf(o)<0&&nr.call(e,o)&&(t[o]=e[o]);return t};const Ot=d.forwardRef((e,r)=>{const t=e,{style:o}=t,p=wt(t,["style"]),a=O(),[n,l]=d.useState(0),[s,v]=d.useState(0),i=!!(n&&s);return j(a.scrollbarX,()=>{var c;const _=((c=a.scrollbarX)==null?void 0:c.offsetHeight)||0;a.onCornerHeightChange(_),v(_)}),j(a.scrollbarY,()=>{var c;const _=((c=a.scrollbarY)==null?void 0:c.offsetWidth)||0;a.onCornerWidthChange(_),l(_)}),i?d.createElement("div",ae(le({},p),{ref:r,style:ae(le({},o),{width:n,height:s})})):null}),St=d.forwardRef((e,r)=>{const t=O(),o=!!(t.scrollbarX&&t.scrollbarY);return t.type!=="scroll"&&o?d.createElement(Ot,ae(le({},e),{ref:r})):null});var gt=Object.defineProperty,yt=Object.defineProperties,$t=Object.getOwnPropertyDescriptors,K=Object.getOwnPropertySymbols,lr=Object.prototype.hasOwnProperty,ar=Object.prototype.propertyIsEnumerable,Re=(e,r,t)=>r in e?gt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Et=(e,r)=>{for(var t in r||(r={}))lr.call(r,t)&&Re(e,t,r[t]);if(K)for(var t of K(r))ar.call(r,t)&&Re(e,t,r[t]);return e},Rt=(e,r)=>yt(e,$t(r)),Ct=(e,r)=>{var t={};for(var o in e)lr.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&K)for(var o of K(e))r.indexOf(o)<0&&ar.call(e,o)&&(t[o]=e[o]);return t};const Dt={scrollHideDelay:1e3,type:"hover"},sr=f.forwardRef((e,r)=>{const o=ie("ScrollAreaRoot",Dt,e),{type:p,scrollHideDelay:a}=o,n=Ct(o,["type","scrollHideDelay"]),[l,s]=f.useState(null),[v,i]=f.useState(null),[c,_]=f.useState(null),[m,u]=f.useState(null),[h,R]=f.useState(null),[P,$]=f.useState(0),[T,y]=f.useState(0),[w,E]=f.useState(!1),[z,I]=f.useState(!1),b=x(r,S=>s(S));return d.createElement(gr,{value:{type:p,scrollHideDelay:a,scrollArea:l,viewport:v,onViewportChange:i,content:c,onContentChange:_,scrollbarX:m,onScrollbarXChange:u,scrollbarXEnabled:w,onScrollbarXEnabledChange:E,scrollbarY:h,onScrollbarYChange:R,scrollbarYEnabled:z,onScrollbarYEnabledChange:I,onCornerWidthChange:$,onCornerHeightChange:y}},d.createElement(N,Rt(Et({},n),{ref:b,__vars:{"--sa-corner-width":`${P}px`,"--sa-corner-height":`${T}px`}})))});sr.displayName="@mantine/core/ScrollAreaRoot";var jt=Object.defineProperty,xt=Object.defineProperties,Tt=Object.getOwnPropertyDescriptors,Q=Object.getOwnPropertySymbols,ir=Object.prototype.hasOwnProperty,cr=Object.prototype.propertyIsEnumerable,Ce=(e,r,t)=>r in e?jt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,De=(e,r)=>{for(var t in r||(r={}))ir.call(r,t)&&Ce(e,t,r[t]);if(Q)for(var t of Q(r))cr.call(r,t)&&Ce(e,t,r[t]);return e},At=(e,r)=>xt(e,Tt(r)),zt=(e,r)=>{var t={};for(var o in e)ir.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&Q)for(var o of Q(e))r.indexOf(o)<0&&cr.call(e,o)&&(t[o]=e[o]);return t};const fr=f.forwardRef((e,r)=>{var t=e,{children:o,style:p}=t,a=zt(t,["children","style"]);const n=O(),l=x(r,n.onViewportChange);return d.createElement(N,At(De({},a),{ref:l,style:De({overflowX:n.scrollbarXEnabled?"scroll":"hidden",overflowY:n.scrollbarYEnabled?"scroll":"hidden"},p)}),d.createElement("div",{style:{minWidth:"100%",display:"table"},ref:n.onContentChange},o))});fr.displayName="@mantine/core/ScrollAreaViewport";var It={root:"m-d57069b5",viewport:"m-c0783ff9",viewportInner:"m-f8f631dd",scrollbar:"m-c44ba933",thumb:"m-d8b5e363",corner:"m-21657268"};const fe=It;function Ht(e,r=()=>{}){let t={left:e.scrollLeft,top:e.scrollTop},o=0;return function p(){const a={left:e.scrollLeft,top:e.scrollTop},n=t.left!==a.left,l=t.top!==a.top;(n||l)&&r(),t=a,o=window.requestAnimationFrame(p)}(),()=>window.cancelAnimationFrame(o)}var Wt=Object.defineProperty,Lt=Object.defineProperties,Nt=Object.getOwnPropertyDescriptors,Z=Object.getOwnPropertySymbols,pr=Object.prototype.hasOwnProperty,dr=Object.prototype.propertyIsEnumerable,je=(e,r,t)=>r in e?Wt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,se=(e,r)=>{for(var t in r||(r={}))pr.call(r,t)&&je(e,t,r[t]);if(Z)for(var t of Z(r))dr.call(r,t)&&je(e,t,r[t]);return e},Mt=(e,r)=>Lt(e,Nt(r)),ur=(e,r)=>{var t={};for(var o in e)pr.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&Z)for(var o of Z(e))r.indexOf(o)<0&&dr.call(e,o)&&(t[o]=e[o]);return t};const Vt=f.forwardRef((e,r)=>{const t=e,{style:o}=t,p=ur(t,["style"]),a=O(),n=Ie(),{onThumbPositionChange:l}=n,s=x(r,c=>n.onThumbChange(c)),v=f.useRef(),i=ee(()=>{v.current&&(v.current(),v.current=void 0)},100);return f.useEffect(()=>{const{viewport:c}=a;if(c){const _=()=>{if(i(),!v.current){const m=Ht(c,l);v.current=m,l()}};return l(),c.addEventListener("scroll",_),()=>c.removeEventListener("scroll",_)}},[a.viewport,i,l]),d.createElement("div",Mt(se({"data-state":n.hasThumb?"visible":"hidden"},p),{ref:s,style:se({width:"var(--sa-thumb-width)",height:"var(--sa-thumb-height)"},o),onPointerDownCapture:D(e.onPointerDownCapture,c=>{const m=c.target.getBoundingClientRect(),u=c.clientX-m.left,h=c.clientY-m.top;n.onThumbPointerDown({x:u,y:h})}),onPointerUp:D(e.onPointerUp,n.onThumbPointerUp)}))}),xe=d.forwardRef((e,r)=>{const t=e,{forceMount:o}=t,p=ur(t,["forceMount"]),a=Ie();return o||a.hasThumb?d.createElement(Vt,se({ref:r},p)):null});var Xt=Object.defineProperty,Yt=Object.defineProperties,Ut=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,vr=Object.prototype.hasOwnProperty,_r=Object.prototype.propertyIsEnumerable,Te=(e,r,t)=>r in e?Xt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,g=(e,r)=>{for(var t in r||(r={}))vr.call(r,t)&&Te(e,t,r[t]);if(k)for(var t of k(r))_r.call(r,t)&&Te(e,t,r[t]);return e},A=(e,r)=>Yt(e,Ut(r)),mr=(e,r)=>{var t={};for(var o in e)vr.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&k)for(var o of k(e))r.indexOf(o)<0&&_r.call(e,o)&&(t[o]=e[o]);return t};const br={scrollHideDelay:1e3,type:"hover"},Ft=Or((e,{scrollbarSize:r})=>({root:{"--scrollarea-scrollbar-size":Sr(r)}})),te=ze((e,r)=>{const t=ie("ScrollArea",br,e),o=t,{classNames:p,className:a,style:n,styles:l,unstyled:s,scrollbarSize:v,vars:i,type:c,scrollHideDelay:_,viewportProps:m,viewportRef:u,onScrollPositionChange:h,children:R,offsetScrollbars:P}=o,$=mr(o,["classNames","className","style","styles","unstyled","scrollbarSize","vars","type","scrollHideDelay","viewportProps","viewportRef","onScrollPositionChange","children","offsetScrollbars"]),[T,y]=f.useState(!1),w=wr({name:"ScrollArea",props:t,classes:fe,className:a,style:n,classNames:p,styles:l,unstyled:s,vars:i,varsResolver:Ft});return d.createElement(sr,g(g({type:c==="never"?"always":c,scrollHideDelay:_,ref:r},w("root")),$),d.createElement(fr,A(g(g({},m),w("viewport")),{ref:u,"data-offset-scrollbars":P===!0?"xy":P||void 0,onScroll:typeof h=="function"?({currentTarget:E})=>h({x:E.scrollLeft,y:E.scrollTop}):void 0}),R),d.createElement($e,A(g({},w("scrollbar")),{orientation:"horizontal","data-hidden":c==="never"||void 0,forceMount:!0,onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1)}),d.createElement(xe,g({},w("thumb")))),d.createElement($e,A(g({},w("scrollbar")),{orientation:"vertical","data-hidden":c==="never"||void 0,forceMount:!0,onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1)}),d.createElement(xe,g({},w("thumb")))),d.createElement(St,A(g({},w("corner")),{"data-hovered":T||void 0,"data-hidden":c==="never"||void 0})))});te.displayName="@mantine/core/ScrollArea";const pe=ze((e,r)=>{const t=ie("ScrollAreaAutosize",br,e),{children:o,classNames:p,styles:a,scrollbarSize:n,scrollHideDelay:l,type:s,dir:v,offsetScrollbars:i,viewportRef:c,onScrollPositionChange:_,unstyled:m,variant:u,viewportProps:h,style:R,vars:P}=t,$=mr(t,["children","classNames","styles","scrollbarSize","scrollHideDelay","type","dir","offsetScrollbars","viewportRef","onScrollPositionChange","unstyled","variant","viewportProps","style","vars"]);return d.createElement(N,A(g({},$),{ref:r,style:[{display:"flex"},R]}),d.createElement(N,{style:{display:"flex",flexDirection:"column",flex:1}},d.createElement(te,{classNames:p,styles:a,scrollHideDelay:l,scrollbarSize:n,type:s,dir:v,offsetScrollbars:i,viewportRef:c,onScrollPositionChange:_,unstyled:m,variant:u,viewportProps:h,vars:P},o)))});te.classes=fe;pe.displayName="@mantine/core/ScrollAreaAutosize";pe.classes=fe;te.Autosize=pe;export{te as S};
