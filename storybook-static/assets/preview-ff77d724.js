import{_ as a}from"./iframe-f3ce3dab.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-2f19ad98.js").then(r=>r.D),["./DocsRenderer-K4EAMTCU-2f19ad98.js","./iframe-f3ce3dab.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./react-18-236157c6.js","./index-8c3ac41d.js","./_getPrototype-0dd2ffd8.js","./index-356e4a49.js"],import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};