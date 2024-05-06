import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const O="modulepreload",d=function(i,_){return new URL(i,_).href},m={},r=function(_,s,c){if(!s||s.length===0)return _();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=d(e,c),e in m)return;m[e]=!0;const o=e.endsWith(".css"),E=o?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const a=t[l];if(a.href===e&&(!o||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${E}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":O,o||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),o)return new Promise((l,a)=>{n.addEventListener("load",l),n.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>_()).catch(e=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=e,window.dispatchEvent(o),!o.defaultPrevented)throw e})},{createBrowserChannel:p}=__STORYBOOK_MODULE_CHANNELS__,{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,u=p({page:"preview"});f.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const R={"./src/components/InboxScreen.stories.jsx":async()=>r(()=>import("./InboxScreen.stories-7735d495.js"),["./InboxScreen.stories-7735d495.js","./Task.stories-cab72d6e.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./index-8d47fad6.js","./TaskList.stories-39367290.js","./index-e4a98851.js","./index-444a5176.js"],import.meta.url),"./src/components/Task.stories.jsx":async()=>r(()=>import("./Task.stories-cab72d6e.js").then(i=>i.a),["./Task.stories-cab72d6e.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./index-8d47fad6.js"],import.meta.url),"./src/components/TaskList.stories.jsx":async()=>r(()=>import("./TaskList.stories-39367290.js").then(i=>i.b),["./TaskList.stories-39367290.js","./Task.stories-cab72d6e.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./index-8d47fad6.js"],import.meta.url)};async function P(i){return R[i]()}const{composeConfigs:T,PreviewWeb:L,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,v=async()=>{const i=await Promise.all([r(()=>import("./entry-preview-96f6b238.js"),["./entry-preview-96f6b238.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./react-18-236157c6.js"],import.meta.url),r(()=>import("./entry-preview-docs-533ea67d.js"),["./entry-preview-docs-533ea67d.js","./_getPrototype-0dd2ffd8.js","./_commonjsHelpers-de833af9.js","./index-8d47fad6.js","./index-356e4a49.js","./index-76fb7be0.js"],import.meta.url),r(()=>import("./preview-ee71643a.js"),["./preview-ee71643a.js","./index-8c3ac41d.js"],import.meta.url),r(()=>import("./preview-ff77d724.js"),[],import.meta.url),r(()=>import("./preview-76c1789d.js"),[],import.meta.url),r(()=>import("./preview-98b085a7.js"),["./preview-98b085a7.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-73c648b3.js"),[],import.meta.url),r(()=>import("./preview-c56bf6ac.js"),[],import.meta.url),r(()=>import("./preview-da31036b.js"),["./preview-da31036b.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-0ef86afd.js"),[],import.meta.url),r(()=>import("./preview-ae5c16e9.js"),["./preview-ae5c16e9.js","./index-444a5176.js"],import.meta.url),r(()=>import("./preview-dafb4f34.js"),[],import.meta.url),r(()=>import("./preview-6617236c.js"),["./preview-6617236c.js","./index-e4a98851.js","./preview-4f244d89.css"],import.meta.url)]);return T(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L(P,v);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{r as _};