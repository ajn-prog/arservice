import{Q as de,x as N,y as j,w as f,M as L,g as pe,R as ve,ax as fe,S as Z,aC as be,z as me,D as ue,E as _e,J as ye,O as Pe}from"./index-3804b4f6.js";function B(e,t){return a=>{if(typeof a!="string"||a.trim().length===0)throw new Error(t);return`${e}-${a}`}}const[Oe,M]=de("Tabs component was not found in the tree");var ge={root:"m-89d60db1","list--default":"m-576c9d4",list:"m-89d33d6d",panel:"m-b0c91715",tab:"m-4ec4dce6",tabSection:"m-fc420b1f","tab--default":"m-539e827b","list--outline":"m-6772fbd5","tab--outline":"m-b59ab47c","tab--pills":"m-c3381914"};const P=ge;var we=Object.defineProperty,he=Object.defineProperties,Te=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,q=(e,t,a)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,F=(e,t)=>{for(var a in t||(t={}))k.call(t,a)&&q(e,a,t[a]);if(h)for(var a of h(t))ee.call(t,a)&&q(e,a,t[a]);return e},$e=(e,t)=>he(e,Te(t)),Se=(e,t)=>{var a={};for(var r in e)k.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&h)for(var r of h(e))t.indexOf(r)<0&&ee.call(e,r)&&(a[r]=e[r]);return a};const Ne={},z=N((e,t)=>{const a=j("TabsList",Ne,e),r=a,{children:d,className:p,grow:c,justify:i,classNames:l,styles:v,style:b}=r,o=Se(r,["children","className","grow","justify","classNames","styles","style"]),s=M();return f.createElement(L,$e(F(F({},o),s.getStyles("list",{className:p,style:b,classNames:l,styles:v,props:a,variant:s.variant})),{ref:t,role:"tablist",variant:s.variant,mod:{grow:c,orientation:s.orientation,placement:s.orientation==="vertical"&&s.placement,inverted:s.inverted},"aria-orientation":s.orientation,__vars:{"--tabs-justify":i}}),d)});z.classes=P;z.displayName="@mantine/core/TabsList";var je=Object.defineProperty,Ee=Object.defineProperties,Ie=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,H=(e,t,a)=>t in e?je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,J=(e,t)=>{for(var a in t||(t={}))te.call(t,a)&&H(e,a,t[a]);if(T)for(var a of T(t))ae.call(t,a)&&H(e,a,t[a]);return e},De=(e,t)=>Ee(e,Ie(t)),xe=(e,t)=>{var a={};for(var r in e)te.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&T)for(var r of T(e))t.indexOf(r)<0&&ae.call(e,r)&&(a[r]=e[r]);return a};const Ce={},W=N((e,t)=>{const a=j("TabsPanel",Ce,e),r=a,{children:d,className:p,value:c,classNames:i,styles:l,style:v}=r,b=xe(r,["children","className","value","classNames","styles","style"]),o=M(),s=o.value===c,m=o.keepMounted||s?d:null;return f.createElement(L,De(J(J({},b),o.getStyles("panel",{className:p,classNames:i,styles:l,style:[v,s?void 0:{display:"none"}],props:a})),{ref:t,mod:{orientation:o.orientation},role:"tabpanel",id:o.getPanelId(c),"aria-labelledby":o.getTabId(c)}),m)});W.classes=P;W.displayName="@mantine/core/TabsPanel";var Re=Object.defineProperty,Ve=Object.defineProperties,Ke=Object.getOwnPropertyDescriptors,$=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,Q=(e,t,a)=>t in e?Re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))re.call(t,a)&&Q(e,a,t[a]);if($)for(var a of $(t))ne.call(t,a)&&Q(e,a,t[a]);return e},K=(e,t)=>Ve(e,Ke(t)),Le=(e,t)=>{var a={};for(var r in e)re.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&$)for(var r of $(e))t.indexOf(r)<0&&ne.call(e,r)&&(a[r]=e[r]);return a};const Me={},U=N((e,t)=>{const a=j("TabsTab",Me,e),r=a,{className:d,children:p,rightSection:c,leftSection:i,value:l,onClick:v,onKeyDown:b,disabled:o,color:s,style:m,classNames:E,styles:I,vars:D}=r,g=Le(r,["className","children","rightSection","leftSection","value","onClick","onKeyDown","disabled","color","style","classNames","styles","vars"]),x=pe(),{dir:C}=ve(),n=M(),u=l===n.value,R=V=>{n.onChange(n.allowTabDeactivation&&l===n.value?null:l),v==null||v(V)},_={classNames:E,styles:I,props:a};return f.createElement(fe,K(y(y({},g),n.getStyles("tab",y({className:d,style:m,variant:n.variant},_))),{disabled:o,unstyled:n.unstyled,variant:n.variant,mod:{active:u,disabled:o,orientation:n.orientation,inverted:n.inverted,placement:n.orientation==="vertical"&&n.placement},ref:t,role:"tab",id:n.getTabId(l),"aria-selected":u,tabIndex:u||n.value===null?0:-1,"aria-controls":n.getPanelId(l),onClick:R,__vars:{"--tabs-color":s?Z(s,x):void 0},onKeyDown:be({siblingSelector:'[role="tab"]',parentSelector:'[role="tablist"]',activateOnFocus:n.activateTabWithKeyboard,loop:n.loop,orientation:n.orientation||"horizontal",dir:C,onKeyDown:b})}),i&&f.createElement("span",K(y({},n.getStyles("tabSection",_)),{"data-position":"left"}),i),p&&f.createElement("span",y({},n.getStyles("tabLabel",_)),p),c&&f.createElement("span",K(y({},n.getStyles("tabSection",_)),{"data-position":"right"}),c))});U.classes=P;U.displayName="@mantine/core/TabsTab";var ze=Object.defineProperty,S=Object.getOwnPropertySymbols,se=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable,G=(e,t,a)=>t in e?ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,X=(e,t)=>{for(var a in t||(t={}))se.call(t,a)&&G(e,a,t[a]);if(S)for(var a of S(t))oe.call(t,a)&&G(e,a,t[a]);return e},We=(e,t)=>{var a={};for(var r in e)se.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&S)for(var r of S(e))t.indexOf(r)<0&&oe.call(e,r)&&(a[r]=e[r]);return a};const Y="Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value",Ue={keepMounted:!0,orientation:"horizontal",loop:!0,activateTabWithKeyboard:!0,allowTabDeactivation:!1,unstyled:!1,inverted:!1,variant:"default",placement:"left"},Ae=ye((e,{radius:t,color:a})=>({root:{"--tabs-radius":Pe(t),"--tabs-color":Z(a,e)}})),O=N((e,t)=>{const a=j("Tabs",Ue,e),r=a,{defaultValue:d,value:p,onChange:c,orientation:i,children:l,loop:v,id:b,activateTabWithKeyboard:o,allowTabDeactivation:s,variant:m,color:E,radius:I,inverted:D,placement:g,keepMounted:x,classNames:C,styles:n,unstyled:u,className:R,style:_,vars:V}=r,le=We(r,["defaultValue","value","onChange","orientation","children","loop","id","activateTabWithKeyboard","allowTabDeactivation","variant","color","radius","inverted","placement","keepMounted","classNames","styles","unstyled","className","style","vars"]),w=me(b),[ie,ce]=ue({value:p,defaultValue:d,finalValue:null,onChange:c}),A=_e({name:"Tabs",props:a,classes:P,className:R,style:_,classNames:C,styles:n,unstyled:u,vars:V,varsResolver:Ae});return f.createElement(Oe,{value:{placement:g,value:ie,orientation:i,id:w,loop:v,activateTabWithKeyboard:o,getTabId:B(`${w}-tab`,Y),getPanelId:B(`${w}-panel`,Y),onChange:ce,allowTabDeactivation:s,variant:m,color:E,radius:I,inverted:D,keepMounted:x,unstyled:u,getStyles:A}},f.createElement(L,X(X({ref:t,id:w,variant:m,mod:{orientation:i,inverted:i==="horizontal"&&D,placement:i==="vertical"&&g}},A("root")),le),l))});O.classes=P;O.displayName="@mantine/core/Tabs";O.Tab=U;O.Panel=W;O.List=z;export{O as T};
