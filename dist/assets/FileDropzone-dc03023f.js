import{r as l,a2 as fr,l as He,o as Re,d as zr,p as We,R as O,ak as Sr,t as Ue,av as Lr,aw as Je,v as dr,c as Tr,ax as u,H as Nr,a3 as Mr,ay as Kr,y as Br,G as Hr,a4 as Wr,j as D,n as Ur,au as Vr,J as te,I as Gr}from"./index-8e6e2209.js";import{I as Yr}from"./IconPhoto-53c4c502.js";function qr(e=!1,r){const{onOpen:t,onClose:o}=r||{},[a,p]=l.useState(e),s=l.useCallback(()=>{p(d=>d||(t==null||t(),!0))},[t]),i=l.useCallback(()=>{p(d=>d&&(o==null||o(),!1))},[o]),f=l.useCallback(()=>{a?i():s()},[i,s,a]);return[a,{open:s,close:i,toggle:f}]}function Xe(e){return typeof e!="string"?"":e.charAt(0).toUpperCase()+e.slice(1)}var Jr={root:"m-6e45937b",loader:"m-e8eb006c",overlay:"m-df587f17"};const mr=Jr;var Xr=Object.defineProperty,Zr=Object.defineProperties,Qr=Object.getOwnPropertyDescriptors,we=Object.getOwnPropertySymbols,gr=Object.prototype.hasOwnProperty,vr=Object.prototype.propertyIsEnumerable,Ze=(e,r,t)=>r in e?Xr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,A=(e,r)=>{for(var t in r||(r={}))gr.call(r,t)&&Ze(e,t,r[t]);if(we)for(var t of we(r))vr.call(r,t)&&Ze(e,t,r[t]);return e},pe=(e,r)=>Zr(e,Qr(r)),et=(e,r)=>{var t={};for(var o in e)gr.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&we)for(var o of we(e))r.indexOf(o)<0&&vr.call(e,o)&&(t[o]=e[o]);return t};const Qe={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:fr("overlay")},rt=dr((e,{zIndex:r})=>({root:{"--lo-z-index":r==null?void 0:r.toString()}})),Ve=He((e,r)=>{const t=Re("LoadingOverlay",Qe,e),o=t,{classNames:a,className:p,style:s,styles:i,unstyled:f,vars:d,transitionProps:w,loaderProps:k,overlayProps:y,visible:S,zIndex:K}=o,j=et(o,["classNames","className","style","styles","unstyled","vars","transitionProps","loaderProps","overlayProps","visible","zIndex"]),L=zr(),C=We({name:"LoadingOverlay",classes:mr,props:t,className:p,style:s,classNames:a,styles:i,unstyled:f,vars:d,varsResolver:rt}),R=A(A({},Qe.overlayProps),y);return O.createElement(Sr,pe(A({transition:"fade"},w),{mounted:!!S}),B=>O.createElement(Ue,A(pe(A({},C("root",{style:B})),{ref:r}),j),O.createElement(Lr,A(pe(A({},C("loader")),{unstyled:f}),k)),O.createElement(Je,pe(A(A({},R),C("overlay")),{"data-light":!0,unstyled:f,color:(y==null?void 0:y.color)||L.white})),O.createElement(Je,pe(A(A({},R),C("overlay")),{"data-dark":!0,unstyled:f,color:(y==null?void 0:y.color)||L.colors.dark[5]}))))});Ve.classes=mr;Ve.displayName="@mantine/core/LoadingOverlay";var tt=Tr("upload","IconUpload",[["path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M7 9l5 -5l5 5",key:"svg-1"}],["path",{d:"M12 4l0 12",key:"svg-2"}]]);const ot=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function fe(e,r){const t=nt(e);if(typeof t.path!="string"){const{webkitRelativePath:o}=e;Object.defineProperty(t,"path",{value:typeof r=="string"?r:typeof o=="string"&&o.length>0?o:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function nt(e){const{name:r}=e;if(r&&r.lastIndexOf(".")!==-1&&!e.type){const o=r.split(".").pop().toLowerCase(),a=ot.get(o);a&&Object.defineProperty(e,"type",{value:a,writable:!1,configurable:!1,enumerable:!0})}return e}var oe=(e,r,t)=>new Promise((o,a)=>{var p=f=>{try{i(t.next(f))}catch(d){a(d)}},s=f=>{try{i(t.throw(f))}catch(d){a(d)}},i=f=>f.done?o(f.value):Promise.resolve(f.value).then(p,s);i((t=t.apply(e,r)).next())});const at=[".DS_Store","Thumbs.db"];function st(e){return oe(this,null,function*(){return xe(e)&&it(e.dataTransfer)?ut(e.dataTransfer,e.type):lt(e)?ct(e):Array.isArray(e)&&e.every(r=>"getFile"in r&&typeof r.getFile=="function")?pt(e):[]})}function it(e){return xe(e)}function lt(e){return xe(e)&&xe(e.target)}function xe(e){return typeof e=="object"&&e!==null}function ct(e){return Ke(e.target.files).map(r=>fe(r))}function pt(e){return oe(this,null,function*(){return(yield Promise.all(e.map(t=>t.getFile()))).map(t=>fe(t))})}function ut(e,r){return oe(this,null,function*(){if(e.items){const t=Ke(e.items).filter(a=>a.kind==="file");if(r!=="drop")return t;const o=yield Promise.all(t.map(ft));return er(yr(o))}return er(Ke(e.files).map(t=>fe(t)))})}function er(e){return e.filter(r=>at.indexOf(r.name)===-1)}function Ke(e){if(e===null)return[];const r=[];for(let t=0;t<e.length;t++){const o=e[t];r.push(o)}return r}function ft(e){if(typeof e.webkitGetAsEntry!="function")return rr(e);const r=e.webkitGetAsEntry();return r&&r.isDirectory?br(r):rr(e)}function yr(e){return e.reduce((r,t)=>[...r,...Array.isArray(t)?yr(t):[t]],[])}function rr(e){const r=e.getAsFile();if(!r)return Promise.reject(`${e} is not a File`);const t=fe(r);return Promise.resolve(t)}function dt(e){return oe(this,null,function*(){return e.isDirectory?br(e):mt(e)})}function br(e){const r=e.createReader();return new Promise((t,o)=>{const a=[];function p(){r.readEntries(s=>oe(this,null,function*(){if(s.length){const i=Promise.all(s.map(dt));a.push(i),p()}else try{const i=yield Promise.all(a);t(i)}catch(i){o(i)}}),s=>{o(s)})}p()})}function mt(e){return oe(this,null,function*(){return new Promise((r,t)=>{e.file(o=>{const a=fe(o,e.fullPath);r(a)},o=>{t(o)})})})}function gt(e,r){if(e&&r){const t=Array.isArray(r)?r:r.split(","),o=e.name||"",a=(e.type||"").toLowerCase(),p=a.replace(/\/.*$/,"");return t.some(s=>{const i=s.trim().toLowerCase();return i.charAt(0)==="."?o.toLowerCase().endsWith(i):i.endsWith("/*")?p===i.replace(/\/.*$/,""):a===i})}return!0}var vt=Object.defineProperty,yt=Object.defineProperties,bt=Object.getOwnPropertyDescriptors,tr=Object.getOwnPropertySymbols,Dt=Object.prototype.hasOwnProperty,ht=Object.prototype.propertyIsEnumerable,or=(e,r,t)=>r in e?vt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Ot=(e,r)=>{for(var t in r||(r={}))Dt.call(r,t)&&or(e,t,r[t]);if(tr)for(var t of tr(r))ht.call(r,t)&&or(e,t,r[t]);return e},_t=(e,r)=>yt(e,bt(r));const Pt="file-invalid-type",Et="file-too-large",wt="file-too-small",xt="too-many-files",Ft=e=>{e=Array.isArray(e)&&e.length===1?e[0]:e;const r=Array.isArray(e)?`one of ${e.join(", ")}`:e;return{code:Pt,message:`File type must be ${r}`}},nr=e=>({code:Et,message:`File is larger than ${e} ${e===1?"byte":"bytes"}`}),ar=e=>({code:wt,message:`File is smaller than ${e} ${e===1?"byte":"bytes"}`}),jt={code:xt,message:"Too many files"};function Dr(e,r){const t=e.type==="application/x-moz-file"||gt(e,r);return[t,t?null:Ft(r)]}function hr(e,r,t){if(Z(e.size))if(Z(r)&&Z(t)){if(e.size>t)return[!1,nr(t)];if(e.size<r)return[!1,ar(r)]}else{if(Z(r)&&e.size<r)return[!1,ar(r)];if(Z(t)&&e.size>t)return[!1,nr(t)]}return[!0,null]}function Z(e){return e!=null}function Ct({files:e,accept:r,minSize:t,maxSize:o,multiple:a,maxFiles:p,validator:s}){return!a&&e.length>1||a&&p>=1&&e.length>p?!1:e.every(i=>{const[f]=Dr(i,r),[d]=hr(i,t,o),w=s?s(i):null;return f&&d&&!w})}function Fe(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function _e(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,r=>r==="Files"||r==="application/x-moz-file"):!!e.target&&!!e.target.files}function sr(e){e.preventDefault()}function At(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function kt(e){return e.indexOf("Edge/")!==-1}function Rt(e=window.navigator.userAgent){return At(e)||kt(e)}function z(...e){return(r,...t)=>e.some(o=>(!Fe(r)&&o&&o(r,...t),Fe(r)))}function $t(){return"showOpenFilePicker"in window}function It(e){return Z(e)?[{description:"Files",accept:Object.entries(e).filter(([t,o])=>{let a=!0;return Or(t)||(console.warn(`Skipped "${t}" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.`),a=!1),(!Array.isArray(o)||!o.every(_r))&&(console.warn(`Skipped "${t}" because an invalid file extension was provided.`),a=!1),a}).reduce((t,[o,a])=>_t(Ot({},t),{[o]:a}),{})}]:e}function zt(e){if(Z(e))return Object.entries(e).reduce((r,[t,o])=>[...r,t,...o],[]).filter(r=>Or(r)||_r(r)).join(",")}function St(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function Lt(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function Or(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function _r(e){return/^.*\.[\w]+$/.test(e)}var Tt=Object.defineProperty,Nt=Object.defineProperties,Mt=Object.getOwnPropertyDescriptors,je=Object.getOwnPropertySymbols,Pr=Object.prototype.hasOwnProperty,Er=Object.prototype.propertyIsEnumerable,ir=(e,r,t)=>r in e?Tt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,h=(e,r)=>{for(var t in r||(r={}))Pr.call(r,t)&&ir(e,t,r[t]);if(je)for(var t of je(r))Er.call(r,t)&&ir(e,t,r[t]);return e},U=(e,r)=>Nt(e,Mt(r)),Ce=(e,r)=>{var t={};for(var o in e)Pr.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&je)for(var o of je(e))r.indexOf(o)<0&&Er.call(e,o)&&(t[o]=e[o]);return t};const Ge=l.forwardRef((e,r)=>{var t=e,{children:o}=t,a=Ce(t,["children"]);const p=xr(a),{open:s}=p,i=Ce(p,["open"]);return l.useImperativeHandle(r,()=>({open:s}),[s]),O.createElement(l.Fragment,null,o(U(h({},i),{open:s})))});Ge.displayName="Dropzone";const wr={disabled:!1,getFilesFromEvent:st,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Ge.defaultProps=wr;Ge.propTypes={children:u.func,accept:u.objectOf(u.arrayOf(u.string)),multiple:u.bool,preventDropOnDocument:u.bool,noClick:u.bool,noKeyboard:u.bool,noDrag:u.bool,noDragEventsBubbling:u.bool,minSize:u.number,maxSize:u.number,maxFiles:u.number,disabled:u.bool,getFilesFromEvent:u.func,onFileDialogCancel:u.func,onFileDialogOpen:u.func,useFsAccessApi:u.bool,autoFocus:u.bool,onDragEnter:u.func,onDragLeave:u.func,onDragOver:u.func,onDrop:u.func,onDropAccepted:u.func,onDropRejected:u.func,onError:u.func,validator:u.func};const Be={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function xr(e={}){const{accept:r,disabled:t,getFilesFromEvent:o,maxSize:a,minSize:p,multiple:s,maxFiles:i,onDragEnter:f,onDragLeave:d,onDragOver:w,onDrop:k,onDropAccepted:y,onDropRejected:S,onFileDialogCancel:K,onFileDialogOpen:j,useFsAccessApi:L,autoFocus:C,preventDropOnDocument:R,noClick:B,noKeyboard:H,noDrag:T,noDragEventsBubbling:x,onError:G,validator:F}=h(h({},wr),e),$=l.useMemo(()=>zt(r),[r]),Y=l.useMemo(()=>It(r),[r]),P=l.useMemo(()=>typeof j=="function"?j:lr,[j]),N=l.useMemo(()=>typeof K=="function"?K:lr,[K]),g=l.useRef(null),_=l.useRef(null),[de,b]=l.useReducer(Kt,Be),{isFocused:$e,isFileDialogActive:me}=de,q=l.useRef(typeof window<"u"&&window.isSecureContext&&L&&$t()),ge=()=>{!q.current&&me&&setTimeout(()=>{if(_.current){const{files:n}=_.current;n.length||(b({type:"closeDialog"}),N())}},300)};l.useEffect(()=>(window.addEventListener("focus",ge,!1),()=>{window.removeEventListener("focus",ge,!1)}),[_,me,N,q]);const J=l.useRef([]),Ie=n=>{g.current&&g.current.contains(n.target)||(n.preventDefault(),J.current=[])};l.useEffect(()=>(R&&(document.addEventListener("dragover",sr,!1),document.addEventListener("drop",Ie,!1)),()=>{R&&(document.removeEventListener("dragover",sr),document.removeEventListener("drop",Ie))}),[g,R]),l.useEffect(()=>(!t&&C&&g.current&&g.current.focus(),()=>{}),[g,C,t]);const M=l.useCallback(n=>{G?G(n):console.error(n)},[G]),ve=l.useCallback(n=>{n.preventDefault(),n.persist(),Oe(n),J.current=[...J.current,n.target],_e(n)&&Promise.resolve(o(n)).then(c=>{if(Fe(n)&&!x)return;const m=c.length,v=m>0&&Ct({files:c,accept:$,minSize:p,maxSize:a,multiple:s,maxFiles:i,validator:F}),E=m>0&&!v;b({isDragAccept:v,isDragReject:E,isDragActive:!0,type:"setDraggedFiles"}),f&&f(n)}).catch(c=>M(c))},[o,f,M,x,$,p,a,s,i,F]),ye=l.useCallback(n=>{n.preventDefault(),n.persist(),Oe(n);const c=_e(n);if(c&&n.dataTransfer)try{n.dataTransfer.dropEffect="copy"}catch{}return c&&w&&w(n),!1},[w,x]),ne=l.useCallback(n=>{n.preventDefault(),n.persist(),Oe(n);const c=J.current.filter(v=>g.current&&g.current.contains(v)),m=c.indexOf(n.target);m!==-1&&c.splice(m,1),J.current=c,!(c.length>0)&&(b({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),_e(n)&&d&&d(n))},[g,d,x]),Q=l.useCallback((n,c)=>{const m=[],v=[];n.forEach(E=>{const[se,ie]=Dr(E,$),[Se,Le]=hr(E,p,a),le=F?F(E):null;if(se&&Se&&!le)m.push(E);else{let ce=[ie,Le];le&&(ce=ce.concat(le)),v.push({file:E,errors:ce.filter(Te=>Te)})}}),(!s&&m.length>1||s&&i>=1&&m.length>i)&&(m.forEach(E=>{v.push({file:E,errors:[jt]})}),m.splice(0)),b({acceptedFiles:m,fileRejections:v,type:"setFiles"}),k&&k(m,v,c),v.length>0&&S&&S(v,c),m.length>0&&y&&y(m,c)},[b,s,$,p,a,i,k,y,S,F]),ee=l.useCallback(n=>{n.preventDefault(),n.persist(),Oe(n),J.current=[],_e(n)&&Promise.resolve(o(n)).then(c=>{Fe(n)&&!x||Q(c,n)}).catch(c=>M(c)),b({type:"reset"})},[o,Q,M,x]),I=l.useCallback(()=>{if(q.current){b({type:"openDialog"}),P();const n={multiple:s,types:Y};window.showOpenFilePicker(n).then(c=>o(c)).then(c=>{Q(c,null),b({type:"closeDialog"})}).catch(c=>{St(c)?(N(c),b({type:"closeDialog"})):Lt(c)?(q.current=!1,_.current?(_.current.value=null,_.current.click()):M(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):M(c)});return}_.current&&(b({type:"openDialog"}),P(),_.current.value=null,_.current.click())},[b,P,N,L,Q,M,Y,s]),re=l.useCallback(n=>{!g.current||!g.current.isEqualNode(n.target)||(n.key===" "||n.key==="Enter"||n.keyCode===32||n.keyCode===13)&&(n.preventDefault(),I())},[g,I]),be=l.useCallback(()=>{b({type:"focus"})},[]),ae=l.useCallback(()=>{b({type:"blur"})},[]),De=l.useCallback(()=>{B||(Rt()?setTimeout(I,0):I())},[B,I]),W=n=>t?null:n,ze=n=>H?null:W(n),he=n=>T?null:W(n),Oe=n=>{x&&n.stopPropagation()},kr=l.useMemo(()=>(n={})=>{var c=n,{refKey:m="ref",role:v,onKeyDown:E,onFocus:se,onBlur:ie,onClick:Se,onDragEnter:Le,onDragOver:le,onDragLeave:ce,onDrop:Te}=c,Ir=Ce(c,["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"]);return h(h({onKeyDown:ze(z(E,re)),onFocus:ze(z(se,be)),onBlur:ze(z(ie,ae)),onClick:W(z(Se,De)),onDragEnter:he(z(Le,ve)),onDragOver:he(z(le,ye)),onDragLeave:he(z(ce,ne)),onDrop:he(z(Te,ee)),role:typeof v=="string"&&v!==""?v:"presentation",[m]:g},!t&&!H?{tabIndex:0}:{}),Ir)},[g,re,be,ae,De,ve,ye,ne,ee,H,T,t]),Rr=l.useCallback(n=>{n.stopPropagation()},[]),$r=l.useMemo(()=>(n={})=>{var c=n,{refKey:m="ref",onChange:v,onClick:E}=c,se=Ce(c,["refKey","onChange","onClick"]);const ie={accept:$,multiple:s,type:"file",style:{display:"none"},onChange:W(z(v,ee)),onClick:W(z(E,Rr)),tabIndex:-1,[m]:_};return h(h({},ie),se)},[_,r,s,ee,t]);return U(h({},de),{isFocused:$e&&!t,getRootProps:kr,getInputProps:$r,rootRef:g,inputRef:_,open:W(I)})}function Kt(e,r){switch(r.type){case"focus":return U(h({},e),{isFocused:!0});case"blur":return U(h({},e),{isFocused:!1});case"openDialog":return U(h({},Be),{isFileDialogActive:!0});case"closeDialog":return U(h({},e),{isFileDialogActive:!1});case"setDraggedFiles":return U(h({},e),{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return U(h({},e),{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return h({},Be);default:return e}}function lr(){}const[Bt,Ht]=Nr("Dropzone component was not found in tree");var cr=Object.getOwnPropertySymbols,Wt=Object.prototype.hasOwnProperty,Ut=Object.prototype.propertyIsEnumerable,Vt=(e,r)=>{var t={};for(var o in e)Wt.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&cr)for(var o of cr(e))r.indexOf(o)<0&&Ut.call(e,o)&&(t[o]=e[o]);return t};function Ye(e){const r=t=>{const o=Re(`Dropzone${Xe(e)}`,{},t),{children:a}=o,p=Vt(o,["children"]),s=Ht(),i=Mr(a)?a:O.createElement("span",null,a);return s[e]?l.cloneElement(i,p):null};return r.displayName=`@mantine/dropzone/${Xe(e)}`,r}const Gt=Ye("accept"),Yt=Ye("reject"),qt=Ye("idle");var Jt={root:"m-d46a4834",inner:"m-b85f7144",fullScreen:"m-96f6e9ad",dropzone:"m-7946116d"};const ue=Jt;var Xt=Object.defineProperty,Zt=Object.defineProperties,Qt=Object.getOwnPropertyDescriptors,Ae=Object.getOwnPropertySymbols,Fr=Object.prototype.hasOwnProperty,jr=Object.prototype.propertyIsEnumerable,pr=(e,r,t)=>r in e?Xt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,X=(e,r)=>{for(var t in r||(r={}))Fr.call(r,t)&&pr(e,t,r[t]);if(Ae)for(var t of Ae(r))jr.call(r,t)&&pr(e,t,r[t]);return e},Pe=(e,r)=>Zt(e,Qt(r)),eo=(e,r)=>{var t={};for(var o in e)Fr.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&Ae)for(var o of Ae(e))r.indexOf(o)<0&&jr.call(e,o)&&(t[o]=e[o]);return t};const ro={loading:!1,multiple:!0,maxSize:1/0,autoFocus:!1,activateOnClick:!0,activateOnDrag:!0,dragEventsBubbling:!0,activateOnKeyboard:!0,useFsAccessApi:!0,variant:"light",rejectColor:"red"},to=dr((e,{radius:r,variant:t,acceptColor:o,rejectColor:a})=>{const p=e.variantColorResolver({color:o||e.primaryColor,theme:e,variant:t}),s=e.variantColorResolver({color:a||"red",theme:e,variant:t});return{root:{"--dropzone-radius":Br(r),"--dropzone-accept-color":p.color,"--dropzone-accept-bg":p.background,"--dropzone-reject-color":s.color,"--dropzone-reject-bg":s.background}}}),V=He((e,r)=>{const t=Re("Dropzone",ro,e),o=t,{classNames:a,className:p,style:s,styles:i,unstyled:f,vars:d,radius:w,disabled:k,loading:y,multiple:S,maxSize:K,accept:j,children:L,onDropAny:C,onDrop:R,onReject:B,openRef:H,name:T,maxFiles:x,autoFocus:G,activateOnClick:F,activateOnDrag:$,dragEventsBubbling:Y,activateOnKeyboard:P,onDragEnter:N,onDragLeave:g,onDragOver:_,onFileDialogCancel:de,onFileDialogOpen:b,preventDropOnDocument:$e,useFsAccessApi:me,getFilesFromEvent:q,validator:ge,rejectColor:J,acceptColor:Ie,enablePointerEvents:M,loaderProps:ve}=o,ye=eo(o,["classNames","className","style","styles","unstyled","vars","radius","disabled","loading","multiple","maxSize","accept","children","onDropAny","onDrop","onReject","openRef","name","maxFiles","autoFocus","activateOnClick","activateOnDrag","dragEventsBubbling","activateOnKeyboard","onDragEnter","onDragLeave","onDragOver","onFileDialogCancel","onFileDialogOpen","preventDropOnDocument","useFsAccessApi","getFilesFromEvent","validator","rejectColor","acceptColor","enablePointerEvents","loaderProps"]),ne=We({name:"Dropzone",classes:ue,props:t,className:p,style:s,classNames:a,styles:i,unstyled:f,vars:d,varsResolver:to}),{getRootProps:Q,getInputProps:ee,isDragAccept:I,isDragReject:re,open:be}=xr(X({onDrop:C,onDropAccepted:R,onDropRejected:B,disabled:k||y,accept:Array.isArray(j)?j.reduce((De,W)=>Pe(X({},De),{[W]:[]}),{}):j,multiple:S,maxSize:K,maxFiles:x,autoFocus:G,noClick:!F,noDrag:!$,noDragEventsBubbling:!Y,noKeyboard:!P,onDragEnter:N,onDragLeave:g,onDragOver:_,onFileDialogCancel:de,onFileDialogOpen:b,preventDropOnDocument:$e,useFsAccessApi:me,validator:ge},q?{getFilesFromEvent:q}:null));Kr(H,be);const ae=!I&&!re;return O.createElement(Bt,{value:{accept:I,reject:re,idle:ae}},O.createElement(Ue,Pe(X(X(X({},Q({ref:r})),ne("root",{focusable:!0})),ye),{mod:{accept:I,reject:re,idle:ae,loading:y,"activate-on-click":F}}),O.createElement(Ve,{visible:y,overlayProps:{radius:w},unstyled:f,loaderProps:ve}),O.createElement("input",Pe(X({},ee()),{name:T})),O.createElement("div",Pe(X({},ne("inner")),{"data-enable-pointer-events":M||void 0}),L)))});V.classes=ue;V.displayName="@mantine/dropzone/Dropzone";V.Accept=Gt;V.Idle=qt;V.Reject=Yt;var oo=Object.defineProperty,no=Object.defineProperties,ao=Object.getOwnPropertyDescriptors,ke=Object.getOwnPropertySymbols,Cr=Object.prototype.hasOwnProperty,Ar=Object.prototype.propertyIsEnumerable,ur=(e,r,t)=>r in e?oo(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Ne=(e,r)=>{for(var t in r||(r={}))Cr.call(r,t)&&ur(e,t,r[t]);if(ke)for(var t of ke(r))Ar.call(r,t)&&ur(e,t,r[t]);return e},Me=(e,r)=>no(e,ao(r)),so=(e,r)=>{var t={};for(var o in e)Cr.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&ke)for(var o of ke(e))r.indexOf(o)<0&&Ar.call(e,o)&&(t[o]=e[o]);return t};const io={loading:!1,maxSize:1/0,activateOnClick:!1,activateOnDrag:!0,dragEventsBubbling:!0,activateOnKeyboard:!0,active:!0,zIndex:fr("max"),withinPortal:!0},qe=He((e,r)=>{const t=Re("DropzoneFullScreen",io,e),o=t,{classNames:a,className:p,style:s,styles:i,unstyled:f,vars:d,active:w,onDrop:k,onReject:y,zIndex:S,withinPortal:K,portalProps:j}=o,L=so(o,["classNames","className","style","styles","unstyled","vars","active","onDrop","onReject","zIndex","withinPortal","portalProps"]),C=We({name:"DropzoneFullScreen",classes:ue,props:t,className:p,style:s,classNames:a,styles:i,unstyled:f,rootSelector:"fullScreen"}),{resolvedClassNames:R,resolvedStyles:B}=Hr({classNames:a,styles:i,props:t}),[H,T]=l.useState(0),[x,{open:G,close:F}]=qr(!1),$=P=>{var N;(N=P.dataTransfer)!=null&&N.types.includes("Files")&&(T(g=>g+1),G())},Y=()=>{T(P=>P-1)};return l.useEffect(()=>{H===0&&F()},[H]),l.useEffect(()=>{if(w)return document.addEventListener("dragenter",$,!1),document.addEventListener("dragleave",Y,!1),()=>{document.removeEventListener("dragenter",$,!1),document.removeEventListener("dragleave",Y,!1)}},[w]),O.createElement(Wr,Me(Ne({},j),{withinPortal:K}),O.createElement(Ue,Me(Ne({},C("fullScreen",{style:{opacity:x?1:0,pointerEvents:x?"all":"none",zIndex:S}})),{ref:r}),O.createElement(V,Me(Ne({},L),{classNames:R,styles:B,unstyled:f,className:ue.dropzone,onDrop:P=>{k==null||k(P),F(),T(0)},onReject:P=>{y==null||y(P),F(),T(0)}}))))});qe.classes=ue;qe.displayName="@mantine/dropzone/DropzoneFullScreen";V.FullScreen=qe;const Ee=V,po=({value:e,label:r,error:t,...o})=>D.jsxs(D.Fragment,{children:[r&&D.jsx("div",{className:"text-sm mb-1",children:r}),D.jsx(Ee,{onReject:()=>Ur.show({message:"File tidak sesuai",color:"red"}),style:{border:"2px dashed #cecece"},...o,children:D.jsxs(Vr,{justify:"center",gap:"lg",mih:120,style:{pointerEvents:"none"},children:[D.jsx(Ee.Accept,{children:D.jsx(tt,{style:{width:te(52),height:te(52),color:"var(--mantine-color-blue-6)"},stroke:1})}),D.jsx(Ee.Reject,{children:D.jsx(Gr,{style:{width:te(52),height:te(52),color:"var(--mantine-color-red-6)"},stroke:1})}),D.jsx(Ee.Idle,{children:D.jsx(Yr,{style:{width:te(52),height:te(52),color:"var(--mantine-color-dimmed)"},stroke:1})}),D.jsx("div",{className:"text-gray-600",children:e?D.jsx("span",{children:Array.isArray(e)?e.length>0?`${e.length} Files Attached`:"Klik atau drag file untuk upload":e.name}):D.jsx("span",{children:"Klik atau drag file untuk upload"})})]})}),t&&D.jsx("div",{className:"text-xs text-red-600 mt-1.5",children:t})]});export{po as F,qr as u};
