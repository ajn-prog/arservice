import{aO as o}from"./index-90fd468a.js";function s(t,r){return t in r.breakpoints?o(r.breakpoints[t]):o(t)}function p(t,r){const e=t.map(n=>({value:n,px:s(n,r)}));return e.sort((n,i)=>n.px-i.px),e}function u(t){return typeof t=="object"&&t!==null?"base"in t?t.base:void 0:t}export{p as a,u as g};
