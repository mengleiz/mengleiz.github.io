(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{2350:function(){},3454:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(7663)},2061:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return r(7613)}])},9578:function(e,t,r){var n=r(3454);r(2350);var i=r(7294),s=i&&"object"==typeof i&&"default"in i?i:{default:i};function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=void 0!==n&&n.env&&!0,l=function(e){return"[object String]"===Object.prototype.toString.call(e)},c=function(){function e(e){var t=void 0===e?{}:e,r=t.name,n=void 0===r?"stylesheet":r,i=t.optimizeForSpeed,s=void 0===i?o:i;u(l(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",u("boolean"==typeof s,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=s,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var a=document.querySelector('meta[property="csp-nonce"]');this._nonce=a?a.getAttribute("content"):null}var t,r=e.prototype;return r.setOptimizeForSpeed=function(e){u("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},r.isOptimizeForSpeed=function(){return this._optimizeForSpeed},r.inject=function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(o||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"==typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},r.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},r.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},r.insertRule=function(e,t){if(u(l(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var r=this.getSheet();"number"!=typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(t){return o||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++},r.replaceRule=function(e,t){if(this._optimizeForSpeed){var r=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(n){o||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];u(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},r.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},r.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},r.cssRules=function(){var e=this;return this._tags.reduce(function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},r.makeStyleTag=function(e,t,r){t&&u(l(t),"makeStyleTag accepts only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return r?i.insertBefore(n,r):i.appendChild(n),n},a(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),t&&a(e,t),e}();function u(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var d=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0},h={};function f(e,t){if(!t)return"jsx-"+e;var r=String(t),n=e+r;return h[n]||(h[n]="jsx-"+d(e+"-"+r)),h[n]}function p(e,t){var r=e+t;return h[r]||(h[r]=t.replace(/__jsx-style-dynamic-selector/g,e)),h[r]}var m=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,i=t.optimizeForSpeed,s=void 0!==i&&i;this._sheet=n||new c({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"==typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),n=r.styleId,i=r.rules;if(n in this._instancesCounts){this._instancesCounts[n]+=1;return}var s=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[n]=s,this._instancesCounts[n]=1},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,r;return t=this.cssRules(),void 0===(r=e)&&(r={}),t.map(function(e){var t=e[0],n=e[1];return s.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:r.nonce?r.nonce:void 0,dangerouslySetInnerHTML:{__html:n}})})},t.getIdAndRules=function(e){var t=e.children,r=e.dynamic,n=e.id;if(r){var i=f(n,r);return{styleId:i,rules:Array.isArray(t)?t.map(function(e){return p(i,e)}):[p(i,t)]}}return{styleId:f(n),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),_=i.createContext(null);_.displayName="StyleSheetContext";var g=s.default.useInsertionEffect||s.default.useLayoutEffect,y=new m;function v(e){var t=y||i.useContext(_);return t&&g(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}v.dynamic=function(e){return e.map(function(e){return f(e[0],e[1])}).join(" ")},t.style=v},6465:function(e,t,r){"use strict";e.exports=r(9578).style},9369:function(e,t,r){"use strict";var n=r(5893);r(7294);let i={logo:(0,n.jsx)("span",{children:"NetAIGym"}),project:{link:"https://github.com/pinyaras/GMAClient"},chat:{link:"https://intellabs-mai.slack.com"},docsRepositoryBase:"https://github.com/intel-sandbox/netai-gym-website/tree/main/webpage/",footer:{text:"NetAIGym"},useNextSeoProps:()=>({titleTemplate:"%s | NetAIGym"})};t.Z=i},7613:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return A.ZP}});var n,i=r(5893),s=r(6465),a=r.n(s),o=r(2720),l=r(9369);r(9966);var c=r(1151),u=r(5675),d=r.n(u),h={src:"/next/static/media/netaigym_github.c0ea1908.png",height:758,width:1462,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAMFBMVEX9/v7v8vSaoaZFK172fZD29/ZKGEvk8OlgLW+4THuXmaCPm6buYZFWR2ikPXNOTXBQ7AXlAAAACXBIWXMAABJ0AAASdAHeZh94AAAAKUlEQVR4nA3GyQEAIAgEsWFBvLX/bjWvkPt6c0+OpjTUWUAtBGFm9vMADckAm3FnsgUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4},f={src:"/next/static/media/netaigym_card.ceeee26f.png",height:1243,width:1989,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAMFBMVEX+/v52Xtrx7/LW1d7l3en09PS0h8HjtNF0bI9XObV8Zc6mkcqcg7b6/vZaQ9OMgKzTHOgxAAAACXBIWXMAABJ0AAASdAHeZh94AAAAKklEQVR4nBXItxEAIAwAsceRzP7bclYpbitzEDjAYh8TF5KH1CRdVc0kPg79AKOfAFGhAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},p=r(6010),m=r(1664),_=r.n(m),g=r(2422),y=r.n(g);function v(e){let{children:t,title:r,icon:n,image:s,arrow:a,href:o,...l}=e,c=a?(0,i.jsx)("span",{className:(0,p.Z)("transition-transform duration-75","group-hover:translate-x-[2px]"),children:"→"}):null;return s?(0,i.jsxs)(_(),{href:o,className:(0,p.Z)(y().card,"group flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200 bg-gray-100 text-current no-underline shadow shadow-gray-100 transition-all duration-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-50 dark:shadow-none","hover:border-gray-300 hover:shadow-lg hover:shadow-gray-100 dark:hover:border-neutral-500 dark:hover:bg-neutral-700 dark:hover:shadow-none","active:shadow-sm active:shadow-gray-200"),...l,children:[t,(0,i.jsxs)("span",{className:(0,p.Z)(y().title,"gap-2 p-4 text-gray-700 dark:text-gray-300","hover:text-gray-900 dark:hover:text-gray-100"),children:[n,(0,i.jsxs)("span",{className:"flex gap-1",children:[r,c]})]})]}):(0,i.jsx)(_(),{href:o,className:(0,p.Z)(y().card,"group flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200 bg-transparent text-current no-underline shadow-sm shadow-gray-100 transition-all duration-200 dark:border-neutral-800 dark:shadow-none","hover:border-gray-300 hover:bg-slate-50 hover:shadow-md hover:shadow-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-900 dark:hover:shadow-none","active:shadow-sm active:shadow-gray-200"),...l,children:(0,i.jsxs)("span",{className:(0,p.Z)(y().title,"gap-2 p-4 text-gray-700 dark:text-neutral-200","hover:text-gray-900 dark:hover:text-neutral-50"),children:[n,r,c]})})}function x(e){let{children:t,num:r,...n}=e;return(0,i.jsx)("div",{className:(0,p.Z)(y().cards,"mt-4 gap-4"),...n,style:{"--rows":r||3,...n.style},children:t})}var A=r(9246);let b={filePath:"pages/news.mdx",route:"/news",frontMatter:{},pageMap:[{kind:"Meta",data:{index:{title:"Home",type:"page"},news:{title:"News",type:"page",theme:{typesetting:"article",layout:"full"}},why:{title:"Why",type:"page"},docs:{title:"Documentation",type:"page"},references:{title:"References",type:"page"},contact:{title:"Contact ↗",type:"page",href:"mailto:menglei.zhang@intel.com",newWindow:!0}}},{kind:"Folder",name:"docs",route:"/docs",children:[{kind:"Meta",data:{index:"Get Access",netaigym_open_api:"NetAIGym Open API",network_ai_use_cases:"Examples",another:"Another"}},{kind:"MdxPage",name:"another",route:"/docs/another"},{kind:"MdxPage",name:"index",route:"/docs"},{kind:"MdxPage",name:"netaigym_open_api",route:"/docs/netaigym_open_api"},{kind:"Folder",name:"network_ai_use_cases",route:"/docs/network_ai_use_cases",children:[{kind:"Meta",data:{mx_traffic_splitting:"Multi-Access(MX) Traffic Splitting",qos_aware_mx_traffic_steering:"QoS-aware MX Traffic Steering",cellular_ran_slicing:"Cellular RAN Slicing"}},{kind:"MdxPage",name:"cellular_ran_slicing",route:"/docs/network_ai_use_cases/cellular_ran_slicing"},{kind:"MdxPage",name:"mx_traffic_splitting",route:"/docs/network_ai_use_cases/mx_traffic_splitting"},{kind:"MdxPage",name:"qos_aware_mx_traffic_steering",route:"/docs/network_ai_use_cases/qos_aware_mx_traffic_steering"}]}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"news",route:"/news"},{kind:"Folder",name:"references",route:"/references",children:[{kind:"Meta",data:{ns3:"ns-3",gymnasium:"Gymnasium",stable_baselines_3:"Stable-Baselines3",zeromq:"ZeroMQ"}},{kind:"MdxPage",name:"gymnasium",route:"/references/gymnasium"},{kind:"MdxPage",name:"ns3",route:"/references/ns3"},{kind:"MdxPage",name:"stable_baselines_3",route:"/references/stable_baselines_3"},{kind:"MdxPage",name:"zeromq",route:"/references/zeromq"}]},{kind:"Folder",name:"why",route:"/why",children:[{kind:"MdxPage",name:"where_is_data",route:"/why/where_is_data"},{kind:"Meta",data:{where_is_data:"Where Is Data"}}]}],headings:[],timestamp:1688000495e3,flexsearch:{codeblocks:!0}};function S(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"text-center mt-10 mb-4 text-[2.5rem] font-bold tracking-tight",children:"News"}),"\n",(0,i.jsx)("p",{className:"text-center mb-16 text-lg text-gray-500 dark:text-gray-400",children:"Stay tuned for NetAIGym's news update."}),"\n","\n",(0,i.jsxs)("div",{className:"jsx-306958380e9213a8",children:[(0,i.jsxs)(x,{num:3,children:[(0,i.jsx)(v,{image:!0,arrow:!0,title:"NetAIClient released on Github",target:"_blank",href:"https://github.com/pinyaras/GMAClient",children:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(d(),{placeholder:"blur",src:h,className:"jsx-306958380e9213a8"})})}),(0,i.jsx)(v,{image:!0,arrow:!0,title:"Invited talk at WNS3 2023",target:"_blank",href:"https://www.nsnam.org/research/wns3/wns3-2023/program/",children:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(d(),{placeholder:"blur",src:f,className:"jsx-306958380e9213a8"})})})]}),(0,i.jsx)(a(),{id:"306958380e9213a8",children:"div.jsx-306958380e9213a8 img.jsx-306958380e9213a8{aspect-ratio:12/6.3;-o-object-fit:cover;object-fit:cover}"})]})]})}function w(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,c.ah)(),e.components);return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(S,{...e})}):S(e)}globalThis.__nextra_internal__={pageMap:b.pageMap,route:b.route},b.title="string"==typeof __nextra_title__&&__nextra_title__||"News",(n=globalThis).__nextra_pageContext__||(n.__nextra_pageContext__=Object.create(null)),globalThis.__nextra_pageContext__["/news"]={Content:e=>(0,i.jsx)(o.mK.Provider,{value:e,children:(0,i.jsx)(w,{})}),pageOpts:b,themeConfig:l.Z}},2422:function(e){e.exports={cards:"style_cards__8_saI",card:"style_card__ybhTU",title:"style_title__DheUr"}},7663:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l=[],c=!1,u=-1;function d(){c&&n&&(c=!1,n.length?l=n.concat(l):u=-1,l.length&&h())}function h(){if(!c){var e=o(d);c=!0;for(var t=l.length;t;){for(n=l,l=[];++u<t;)n&&n[u].run();u=-1,t=l.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new f(e,t)),1!==l.length||c||o(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var s=r[e]={exports:{}},a=!0;try{t[e](s,s.exports,n),a=!1}finally{a&&delete r[e]}return s.exports}n.ab="//";var i=n(229);e.exports=i}()}},function(e){e.O(0,[300,774,888,179],function(){return e(e.s=2061)}),_N_E=e.O()}]);