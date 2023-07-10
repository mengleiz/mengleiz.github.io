"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9247],{9247:function(t,e,r){r.d(e,{a:function(){return w},b:function(){return te},c:function(){return m},d:function(){return tn},e:function(){return K},f:function(){return tl},g:function(){return tp},h:function(){return td},i:function(){return T},l:function(){return k},p:function(){return tr},s:function(){return tt},u:function(){return L}});var a=r(7956),i=r(6990),n=r(7584),l=r(666);let s=(t,e,r,a)=>{e.forEach(e=>{x[e](t,r,a)})},d=(t,e,r)=>{a.l.trace("Making markers for ",r),t.append("defs").append("marker").attr("id",e+"-extensionStart").attr("class","marker extension "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),t.append("defs").append("marker").attr("id",e+"-extensionEnd").attr("class","marker extension "+e).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},o=(t,e)=>{t.append("defs").append("marker").attr("id",e+"-compositionStart").attr("class","marker composition "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",e+"-compositionEnd").attr("class","marker composition "+e).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},h=(t,e)=>{t.append("defs").append("marker").attr("id",e+"-aggregationStart").attr("class","marker aggregation "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",e+"-aggregationEnd").attr("class","marker aggregation "+e).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},c=(t,e)=>{t.append("defs").append("marker").attr("id",e+"-dependencyStart").attr("class","marker dependency "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",e+"-dependencyEnd").attr("class","marker dependency "+e).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},p=(t,e)=>{t.append("defs").append("marker").attr("id",e+"-lollipopStart").attr("class","marker lollipop "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","white").attr("cx",6).attr("cy",7).attr("r",6)},g=(t,e)=>{t.append("marker").attr("id",e+"-pointEnd").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",10).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",e+"-pointStart").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",0).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},y=(t,e)=>{t.append("marker").attr("id",e+"-circleEnd").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",e+"-circleStart").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},f=(t,e)=>{t.append("marker").attr("id",e+"-crossEnd").attr("class","marker cross "+e).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),t.append("marker").attr("id",e+"-crossStart").attr("class","marker cross "+e).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},u=(t,e)=>{t.append("defs").append("marker").attr("id",e+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},x={extension:d,composition:o,aggregation:h,dependency:c,lollipop:p,point:g,circle:y,cross:f,barb:u},w=s,b=(t,e,r,n)=>{let l=t||"";if("object"==typeof l&&(l=l[0]),(0,a.n)((0,a.c)().flowchart.htmlLabels)){l=l.replace(/\\n|\n/g,"<br />"),a.l.info("vertexText"+l);let s={isNode:n,label:(0,a.H)(l).replace(/fa[blrs]?:fa-[\w-]+/g,t=>`<i class='${t.replace(":"," ")}'></i>`),labelStyle:e.replace("fill:","color:")};return function(t){var e;let r=(0,i.Ys)(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),a=r.append("xhtml:div"),n=t.label,l=t.isNode?"nodeLabel":"edgeLabel";return a.html('<span class="'+l+'" '+(t.labelStyle?'style="'+t.labelStyle+'"':"")+">"+n+"</span>"),(e=t.labelStyle)&&a.attr("style",e),a.style("display","inline-block"),a.style("white-space","nowrap"),a.attr("xmlns","http://www.w3.org/1999/xhtml"),r.node()}(s)}{let d=document.createElementNS("http://www.w3.org/2000/svg","text");d.setAttribute("style",e.replace("color:","fill:"));for(let o of"string"==typeof l?l.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(l)?l:[]){let h=document.createElementNS("http://www.w3.org/2000/svg","tspan");h.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),h.setAttribute("dy","1em"),h.setAttribute("x","0"),r?h.setAttribute("class","title-row"):h.setAttribute("class","row"),h.textContent=o.trim(),d.appendChild(h)}return d}},m=b,k=async(t,e,r,l)=>{let s,d;let o=e.useHtmlLabels||(0,a.n)((0,a.c)().flowchart.htmlLabels),h=t.insert("g").attr("class",r||"node default").attr("id",e.domId||e.id),c=h.insert("g").attr("class","label").attr("style",e.labelStyle);s=void 0===e.labelText?"":"string"==typeof e.labelText?e.labelText:e.labelText[0];let p=c.node(),g=(d="markdown"===e.labelType?(0,n.c)(c,(0,a.d)((0,a.H)(s),(0,a.c)()),{useHtmlLabels:o,width:e.width||(0,a.c)().flowchart.wrappingWidth,classes:"markdown-node-label"}):p.appendChild(m((0,a.d)((0,a.H)(s),(0,a.c)()),e.labelStyle,!1,l))).getBBox(),y=e.padding/2;if((0,a.n)((0,a.c)().flowchart.htmlLabels)){let f=d.children[0],u=(0,i.Ys)(d),x=f.getElementsByTagName("img");if(x){let w=""===s.replace(/<img[^>]*>/g,"").trim();await Promise.all([...x].map(t=>new Promise(e=>t.addEventListener("load",function(){if(t.style.display="flex",t.style.flexDirection="column",w){let r=(0,a.c)().fontSize?(0,a.c)().fontSize:window.getComputedStyle(document.body).fontSize;t.style.width=5*parseInt(r,10)+"px"}else t.style.width="100%";e(t)}))))}g=f.getBoundingClientRect(),u.attr("width",g.width),u.attr("height",g.height)}return o?c.attr("transform","translate("+-g.width/2+", "+-g.height/2+")"):c.attr("transform","translate(0, "+-g.height/2+")"),e.centerLabel&&c.attr("transform","translate("+-g.width/2+", "+-g.height/2+")"),c.insert("rect",":first-child"),{shapeSvg:h,bbox:g,halfPadding:y,label:c}},L=(t,e)=>{let r=e.node().getBBox();t.width=r.width,t.height=r.height};function S(t,e,r,a){return t.insert("polygon",":first-child").attr("points",a.map(function(t){return t.x+","+t.y}).join(" ")).attr("class","label-container").attr("transform","translate("+-e/2+","+r/2+")")}function v(t,e,r,a){var i=t.x,n=t.y,l=i-a.x,s=n-a.y,d=Math.sqrt(e*e*s*s+r*r*l*l),o=Math.abs(e*r*l/d);a.x<i&&(o=-o);var h=Math.abs(e*r*s/d);return a.y<n&&(h=-h),{x:i+o,y:n+h}}let M=(t,e)=>{var r,a,i=t.x,n=t.y,l=e.x-i,s=e.y-n,d=t.width/2,o=t.height/2;return Math.abs(s)*d>Math.abs(l)*o?(s<0&&(o=-o),r=0===s?0:o*l/s,a=o):(l<0&&(d=-d),r=d,a=0===l?0:d*s/l),{x:i+r,y:n+a}},T=M,B={node:function(t,e){return t.intersect(e)},circle:function(t,e,r){return v(t,e,e,r)},ellipse:v,polygon:function(t,e,r){var a=t.x,i=t.y,n=[],l=Number.POSITIVE_INFINITY,s=Number.POSITIVE_INFINITY;"function"==typeof e.forEach?e.forEach(function(t){l=Math.min(l,t.x),s=Math.min(s,t.y)}):(l=Math.min(l,e.x),s=Math.min(s,e.y));for(var d=a-t.width/2-l,o=i-t.height/2-s,h=0;h<e.length;h++){var c=e[h],p=e[h<e.length-1?h+1:0],g=function(t,e,r,a){var i,n,l,s,d,o,h,c,p,g,y,f,u,x,w;if(i=e.y-t.y,l=t.x-e.x,d=e.x*t.y-t.x*e.y,p=i*r.x+l*r.y+d,g=i*a.x+l*a.y+d,(0===p||0===g||!(p*g>0))&&(n=a.y-r.y,s=r.x-a.x,o=a.x*r.y-r.x*a.y,h=n*t.x+s*t.y+o,c=n*e.x+s*e.y+o,!(0!==h&&0!==c&&h*c>0)&&0!=(y=i*s-n*l)))return f=Math.abs(y/2),x=(u=l*o-s*d)<0?(u-f)/y:(u+f)/y,w=(u=n*d-i*o)<0?(u-f)/y:(u+f)/y,{x,y:w}}(t,r,{x:d+c.x,y:o+c.y},{x:d+p.x,y:o+p.y});g&&n.push(g)}return n.length?(n.length>1&&n.sort(function(t,e){var a=t.x-r.x,i=t.y-r.y,n=Math.sqrt(a*a+i*i),l=e.x-r.x,s=e.y-r.y,d=Math.sqrt(l*l+s*s);return n<d?-1:n===d?0:1}),n[0]):t},rect:T},E=async(t,e)=>{let r=e.useHtmlLabels||(0,a.c)().flowchart.htmlLabels;r||(e.centerLabel=!0);let{shapeSvg:i,bbox:n,halfPadding:l}=await k(t,e,"node "+e.classes,!0);a.l.info("Classes = ",e.classes);let s=i.insert("rect",":first-child");return s.attr("rx",e.rx).attr("ry",e.ry).attr("x",-n.width/2-l).attr("y",-n.height/2-l).attr("width",n.width+e.padding).attr("height",n.height+e.padding),L(e,s),e.intersect=function(t){return B.rect(e,t)},i},C=async(t,e)=>{let{shapeSvg:r,bbox:i}=await k(t,e,void 0,!0),n=i.width+e.padding,l=i.height+e.padding,s=n+l,d=[{x:s/2,y:0},{x:s,y:-s/2},{x:s/2,y:-s},{x:0,y:-s/2}];a.l.info("Question main (Circle)");let o=S(r,s,s,d);return o.attr("style",e.style),L(e,o),e.intersect=function(t){return a.l.warn("Intersect called"),B.polygon(e,d,t)},r},N=(t,e)=>{let r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),a=r.insert("polygon",":first-child").attr("points",[{x:0,y:14},{x:14,y:0},{x:0,y:-14},{x:-14,y:0}].map(function(t){return t.x+","+t.y}).join(" "));return a.attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),e.width=28,e.height=28,e.intersect=function(t){return B.circle(e,14,t)},r},Y=async(t,e)=>{let{shapeSvg:r,bbox:a}=await k(t,e,void 0,!0),i=a.height+e.padding,n=i/4,l=a.width+2*n+e.padding,s=[{x:n,y:0},{x:l-n,y:0},{x:l,y:-i/2},{x:l-n,y:-i},{x:n,y:-i},{x:0,y:-i/2}],d=S(r,l,i,s);return d.attr("style",e.style),L(e,d),e.intersect=function(t){return B.polygon(e,s,t)},r},H=async(t,e)=>{let{shapeSvg:r,bbox:a}=await k(t,e,void 0,!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:-n/2,y:0},{x:i,y:0},{x:i,y:-n},{x:-n/2,y:-n},{x:0,y:-n/2}],s=S(r,i,n,l);return s.attr("style",e.style),e.width=i+n,e.height=n,e.intersect=function(t){return B.polygon(e,l,t)},r},P=async(t,e)=>{let{shapeSvg:r,bbox:a}=await k(t,e,void 0,!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:-2*n/6,y:0},{x:i-n/6,y:0},{x:i+2*n/6,y:-n},{x:n/6,y:-n}],s=S(r,i,n,l);return s.attr("style",e.style),L(e,s),e.intersect=function(t){return B.polygon(e,l,t)},r},I=async(t,e)=>{let{shapeSvg:r,bbox:a}=await k(t,e,void 0,!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:2*n/6,y:0},{x:i+n/6,y:0},{x:i-2*n/6,y:-n},{x:-n/6,y:-n}],s=S(r,i,n,l);return s.attr("style",e.style),L(e,s),e.intersect=function(t){return B.polygon(e,l,t)},r},R=async(t,e)=>{let{shapeSvg:r,bbox:a}=await k(t,e,void 0,!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:-2*n/6,y:0},{x:i+2*n/6,y:0},{x:i-n/6,y:-n},{x:n/6,y:-n}],s=S(r,i,n,l);return s.attr("style",e.style),L(e,s),e.intersect=function(t){return B.polygon(e,l,t)},r},O=async(t,e)=>{let{shapeSvg:r,bbox:a}=await k(t,e,void 0,!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:n/6,y:0},{x:i-n/6,y:0},{x:i+2*n/6,y:-n},{x:-2*n/6,y:-n}],s=S(r,i,n,l);return s.attr("style",e.style),L(e,s),e.intersect=function(t){return B.polygon(e,l,t)},r},_=async(t,e)=>{let{shapeSvg:r,bbox:a}=await k(t,e,void 0,!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:0,y:0},{x:i+n/2,y:0},{x:i,y:-n/2},{x:i+n/2,y:-n},{x:0,y:-n}],s=S(r,i,n,l);return s.attr("style",e.style),L(e,s),e.intersect=function(t){return B.polygon(e,l,t)},r},$=async(t,e)=>{let{shapeSvg:r,bbox:a}=await k(t,e,void 0,!0),i=a.width+e.padding,n=i/2,l=n/(2.5+i/50),s=a.height+l+e.padding,d=r.attr("label-offset-y",l).insert("path",":first-child").attr("style",e.style).attr("d","M 0,"+l+" a "+n+","+l+" 0,0,0 "+i+" 0 a "+n+","+l+" 0,0,0 "+-i+" 0 l 0,"+s+" a "+n+","+l+" 0,0,0 "+i+" 0 l 0,"+-s).attr("transform","translate("+-i/2+","+-(s/2+l)+")");return L(e,d),e.intersect=function(t){let r=B.rect(e,t),a=r.x-e.x;if(0!=n&&(Math.abs(a)<e.width/2||Math.abs(a)==e.width/2&&Math.abs(r.y-e.y)>e.height/2-l)){let i=l*l*(1-a*a/(n*n));0!=i&&(i=Math.sqrt(i)),i=l-i,t.y-e.y>0&&(i=-i),r.y+=i}return r},r},A=async(t,e)=>{let{shapeSvg:r,bbox:i,halfPadding:n}=await k(t,e,"node "+e.classes,!0),l=r.insert("rect",":first-child"),s=i.width+e.padding,d=i.height+e.padding;if(l.attr("class","basic label-container").attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("x",-i.width/2-n).attr("y",-i.height/2-n).attr("width",s).attr("height",d),e.props){let o=new Set(Object.keys(e.props));e.props.borders&&(W(l,e.props.borders,s,d),o.delete("borders")),o.forEach(t=>{a.l.warn(`Unknown node property ${t}`)})}return L(e,l),e.intersect=function(t){return B.rect(e,t)},r},D=async(t,e)=>{let{shapeSvg:r}=await k(t,e,"label",!0);a.l.trace("Classes = ",e.classes);let i=r.insert("rect",":first-child");if(i.attr("width",0).attr("height",0),r.attr("class","label edgeLabel"),e.props){let n=new Set(Object.keys(e.props));e.props.borders&&(W(i,e.props.borders,0,0),n.delete("borders")),n.forEach(t=>{a.l.warn(`Unknown node property ${t}`)})}return L(e,i),e.intersect=function(t){return B.rect(e,t)},r};function W(t,e,r,i){let n=[],l=t=>{n.push(t,0)},s=t=>{n.push(0,t)};e.includes("t")?(a.l.debug("add top border"),l(r)):s(r),e.includes("r")?(a.l.debug("add right border"),l(i)):s(i),e.includes("b")?(a.l.debug("add bottom border"),l(r)):s(r),e.includes("l")?(a.l.debug("add left border"),l(i)):s(i),t.attr("stroke-dasharray",n.join(" "))}let X=(t,e)=>{let r;r=e.classes?"node "+e.classes:"node default";let n=t.insert("g").attr("class",r).attr("id",e.domId||e.id),l=n.insert("rect",":first-child"),s=n.insert("line"),d=n.insert("g").attr("class","label"),o=e.labelText.flat?e.labelText.flat():e.labelText,h="";h="object"==typeof o?o[0]:o,a.l.info("Label text abc79",h,o,"object"==typeof o);let c=d.node().appendChild(m(h,e.labelStyle,!0,!0)),p={width:0,height:0};if((0,a.n)((0,a.c)().flowchart.htmlLabels)){let g=c.children[0],y=(0,i.Ys)(c);p=g.getBoundingClientRect(),y.attr("width",p.width),y.attr("height",p.height)}a.l.info("Text 2",o);let f=o.slice(1,o.length),u=c.getBBox(),x=d.node().appendChild(m(f.join?f.join("<br/>"):f,e.labelStyle,!0,!0));if((0,a.n)((0,a.c)().flowchart.htmlLabels)){let w=x.children[0],b=(0,i.Ys)(x);p=w.getBoundingClientRect(),b.attr("width",p.width),b.attr("height",p.height)}let k=e.padding/2;return(0,i.Ys)(x).attr("transform","translate( "+(p.width>u.width?0:(u.width-p.width)/2)+", "+(u.height+k+5)+")"),(0,i.Ys)(c).attr("transform","translate( "+(p.width<u.width?0:-(u.width-p.width)/2)+", 0)"),p=d.node().getBBox(),d.attr("transform","translate("+-p.width/2+", "+(-p.height/2-k+3)+")"),l.attr("class","outer title-state").attr("x",-p.width/2-k).attr("y",-p.height/2-k).attr("width",p.width+e.padding).attr("height",p.height+e.padding),s.attr("class","divider").attr("x1",-p.width/2-k).attr("x2",p.width/2+k).attr("y1",-p.height/2-k+u.height+k).attr("y2",-p.height/2-k+u.height+k),L(e,l),e.intersect=function(t){return B.rect(e,t)},n},j=async(t,e)=>{let{shapeSvg:r,bbox:a}=await k(t,e,void 0,!0),i=a.height+e.padding,n=a.width+i/4+e.padding,l=r.insert("rect",":first-child").attr("style",e.style).attr("rx",i/2).attr("ry",i/2).attr("x",-n/2).attr("y",-i/2).attr("width",n).attr("height",i);return L(e,l),e.intersect=function(t){return B.rect(e,t)},r},U=async(t,e)=>{let{shapeSvg:r,bbox:i,halfPadding:n}=await k(t,e,void 0,!0),l=r.insert("circle",":first-child");return l.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",i.width/2+n).attr("width",i.width+e.padding).attr("height",i.height+e.padding),a.l.info("Circle main"),L(e,l),e.intersect=function(t){return a.l.info("Circle intersect",e,i.width/2+n,t),B.circle(e,i.width/2+n,t)},r},Z=async(t,e)=>{let{shapeSvg:r,bbox:i,halfPadding:n}=await k(t,e,void 0,!0),l=r.insert("g",":first-child"),s=l.insert("circle"),d=l.insert("circle");return l.attr("class",e.class),s.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",i.width/2+n+5).attr("width",i.width+e.padding+10).attr("height",i.height+e.padding+10),d.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",i.width/2+n).attr("width",i.width+e.padding).attr("height",i.height+e.padding),a.l.info("DoubleCircle main"),L(e,s),e.intersect=function(t){return a.l.info("DoubleCircle intersect",e,i.width/2+n+5,t),B.circle(e,i.width/2+n+5,t)},r},z=async(t,e)=>{let{shapeSvg:r,bbox:a}=await k(t,e,void 0,!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:0,y:0},{x:i,y:0},{x:i,y:-n},{x:0,y:-n},{x:0,y:0},{x:-8,y:0},{x:i+8,y:0},{x:i+8,y:-n},{x:-8,y:-n},{x:-8,y:0}],s=S(r,i,n,l);return s.attr("style",e.style),L(e,s),e.intersect=function(t){return B.polygon(e,l,t)},r},q=(t,e)=>{let r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),a=r.insert("circle",":first-child");return a.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),L(e,a),e.intersect=function(t){return B.circle(e,7,t)},r},J=(t,e,r)=>{let a=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),i=70,n=10;"LR"===r&&(i=10,n=70);let l=a.append("rect").attr("x",-1*i/2).attr("y",-1*n/2).attr("width",i).attr("height",n).attr("class","fork-join");return L(e,l),e.height=e.height+e.padding/2,e.width=e.width+e.padding/2,e.intersect=function(t){return B.rect(e,t)},a},G=(t,e)=>{let r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),a=r.insert("circle",":first-child"),i=r.insert("circle",":first-child");return i.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),a.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),L(e,i),e.intersect=function(t){return B.circle(e,7,t)},r},V=(t,e)=>{let r;let n=e.padding/2;r=e.classes?"node "+e.classes:"node default";let s=t.insert("g").attr("class",r).attr("id",e.domId||e.id),d=s.insert("rect",":first-child"),o=s.insert("line"),h=s.insert("line"),c=0,p=4,g=s.insert("g").attr("class","label"),y=0,f=e.classData.annotations&&e.classData.annotations[0],u=e.classData.annotations[0]?"\xab"+e.classData.annotations[0]+"\xbb":"",x=g.node().appendChild(m(u,e.labelStyle,!0,!0)),w=x.getBBox();if((0,a.n)((0,a.c)().flowchart.htmlLabels)){let b=x.children[0],k=(0,i.Ys)(x);w=b.getBoundingClientRect(),k.attr("width",w.width),k.attr("height",w.height)}e.classData.annotations[0]&&(p+=w.height+4,c+=w.width);let S=e.classData.label;void 0!==e.classData.type&&""!==e.classData.type&&((0,a.c)().flowchart.htmlLabels?S+="&lt;"+e.classData.type+"&gt;":S+="<"+e.classData.type+">");let v=g.node().appendChild(m(S,e.labelStyle,!0,!0));(0,i.Ys)(v).attr("class","classTitle");let M=v.getBBox();if((0,a.n)((0,a.c)().flowchart.htmlLabels)){let T=v.children[0],E=(0,i.Ys)(v);M=T.getBoundingClientRect(),E.attr("width",M.width),E.attr("height",M.height)}p+=M.height+4,M.width>c&&(c=M.width);let C=[];e.classData.members.forEach(t=>{let r=(0,l.p)(t),n=r.displayText;(0,a.c)().flowchart.htmlLabels&&(n=n.replace(/</g,"&lt;").replace(/>/g,"&gt;"));let s=g.node().appendChild(m(n,r.cssStyle?r.cssStyle:e.labelStyle,!0,!0)),d=s.getBBox();if((0,a.n)((0,a.c)().flowchart.htmlLabels)){let o=s.children[0],h=(0,i.Ys)(s);d=o.getBoundingClientRect(),h.attr("width",d.width),h.attr("height",d.height)}d.width>c&&(c=d.width),p+=d.height+4,C.push(s)}),p+=8;let N=[];if(e.classData.methods.forEach(t=>{let r=(0,l.p)(t),n=r.displayText;(0,a.c)().flowchart.htmlLabels&&(n=n.replace(/</g,"&lt;").replace(/>/g,"&gt;"));let s=g.node().appendChild(m(n,r.cssStyle?r.cssStyle:e.labelStyle,!0,!0)),d=s.getBBox();if((0,a.n)((0,a.c)().flowchart.htmlLabels)){let o=s.children[0],h=(0,i.Ys)(s);d=o.getBoundingClientRect(),h.attr("width",d.width),h.attr("height",d.height)}d.width>c&&(c=d.width),p+=d.height+4,N.push(s)}),p+=8,f){let Y=(c-w.width)/2;(0,i.Ys)(x).attr("transform","translate( "+(-1*c/2+Y)+", "+-1*p/2+")"),y=w.height+4}let H=(c-M.width)/2;return(0,i.Ys)(v).attr("transform","translate( "+(-1*c/2+H)+", "+(-1*p/2+y)+")"),y+=M.height+4,o.attr("class","divider").attr("x1",-c/2-n).attr("x2",c/2+n).attr("y1",-p/2-n+8+y).attr("y2",-p/2-n+8+y),y+=8,C.forEach(t=>{(0,i.Ys)(t).attr("transform","translate( "+-c/2+", "+(-1*p/2+y+4)+")"),y+=M.height+4}),y+=8,h.attr("class","divider").attr("x1",-c/2-n).attr("x2",c/2+n).attr("y1",-p/2-n+8+y).attr("y2",-p/2-n+8+y),y+=8,N.forEach(t=>{(0,i.Ys)(t).attr("transform","translate( "+-c/2+", "+(-1*p/2+y)+")"),y+=M.height+4}),d.attr("class","outer title-state").attr("x",-c/2-n).attr("y",-(p/2)-n).attr("width",c+e.padding).attr("height",p+e.padding),L(e,d),e.intersect=function(t){return B.rect(e,t)},s},Q={rhombus:C,question:C,rect:A,labelRect:D,rectWithTitle:X,choice:N,circle:U,doublecircle:Z,stadium:j,hexagon:Y,rect_left_inv_arrow:H,lean_right:P,lean_left:I,trapezoid:R,inv_trapezoid:O,rect_right_inv_arrow:_,cylinder:$,start:q,end:G,note:E,subroutine:z,fork:J,join:J,class_box:V},F={},K=async(t,e,r)=>{let i,n;if(e.link){let l;"sandbox"===(0,a.c)().securityLevel?l="_top":e.linkTarget&&(l=e.linkTarget||"_blank"),n=await Q[e.shape](i=t.insert("svg:a").attr("xlink:href",e.link).attr("target",l),e,r)}else i=n=await Q[e.shape](t,e,r);return e.tooltip&&n.attr("title",e.tooltip),e.class&&n.attr("class","node default "+e.class),F[e.id]=i,e.haveCallback&&F[e.id].attr("class",F[e.id].attr("class")+" clickable"),i},tt=(t,e)=>{F[e.id]=t},te=()=>{F={}},tr=t=>{let e=F[t.id];a.l.trace("Transforming node",t.diff,t,"translate("+(t.x-t.width/2-5)+", "+t.width/2+")");let r=t.diff||0;return t.clusterNode?e.attr("transform","translate("+(t.x+r-t.width/2)+", "+(t.y-t.height/2-8)+")"):e.attr("transform","translate("+t.x+", "+t.y+")"),r},ta={},ti={},tn=()=>{ta={},ti={}},tl=(t,e)=>{let r;let l=(0,a.n)((0,a.c)().flowchart.htmlLabels),s="markdown"===e.labelType?(0,n.c)(t,e.label,{style:e.labelStyle,useHtmlLabels:l,addSvgBackground:!0}):m(e.label,e.labelStyle);a.l.info("abc82",e,e.labelType);let d=t.insert("g").attr("class","edgeLabel"),o=d.insert("g").attr("class","label");o.node().appendChild(s);let h=s.getBBox();if(l){let c=s.children[0],p=(0,i.Ys)(s);h=c.getBoundingClientRect(),p.attr("width",h.width),p.attr("height",h.height)}if(o.attr("transform","translate("+-h.width/2+", "+-h.height/2+")"),ta[e.id]=d,e.width=h.width,e.height=h.height,e.startLabelLeft){let g=m(e.startLabelLeft,e.labelStyle),y=t.insert("g").attr("class","edgeTerminals"),f=y.insert("g").attr("class","inner");r=f.node().appendChild(g);let u=g.getBBox();f.attr("transform","translate("+-u.width/2+", "+-u.height/2+")"),ti[e.id]||(ti[e.id]={}),ti[e.id].startLeft=y,ts(r,e.startLabelLeft)}if(e.startLabelRight){let x=m(e.startLabelRight,e.labelStyle),w=t.insert("g").attr("class","edgeTerminals"),b=w.insert("g").attr("class","inner");r=w.node().appendChild(x),b.node().appendChild(x);let k=x.getBBox();b.attr("transform","translate("+-k.width/2+", "+-k.height/2+")"),ti[e.id]||(ti[e.id]={}),ti[e.id].startRight=w,ts(r,e.startLabelRight)}if(e.endLabelLeft){let L=m(e.endLabelLeft,e.labelStyle),S=t.insert("g").attr("class","edgeTerminals"),v=S.insert("g").attr("class","inner");r=v.node().appendChild(L);let M=L.getBBox();v.attr("transform","translate("+-M.width/2+", "+-M.height/2+")"),S.node().appendChild(L),ti[e.id]||(ti[e.id]={}),ti[e.id].endLeft=S,ts(r,e.endLabelLeft)}if(e.endLabelRight){let T=m(e.endLabelRight,e.labelStyle),B=t.insert("g").attr("class","edgeTerminals"),E=B.insert("g").attr("class","inner");r=E.node().appendChild(T);let C=T.getBBox();E.attr("transform","translate("+-C.width/2+", "+-C.height/2+")"),B.node().appendChild(T),ti[e.id]||(ti[e.id]={}),ti[e.id].endRight=B,ts(r,e.endLabelRight)}return s};function ts(t,e){(0,a.c)().flowchart.htmlLabels&&t&&(t.style.width=9*e.length+"px",t.style.height="12px")}let td=(t,e)=>{a.l.info("Moving label abc78 ",t.id,t.label,ta[t.id]);let r=e.updatedPath?e.updatedPath:e.originalPath;if(t.label){let i=ta[t.id],n=t.x,l=t.y;if(r){let s=a.u.calcLabelPosition(r);a.l.info("Moving label "+t.label+" from (",n,",",l,") to (",s.x,",",s.y,") abc78"),e.updatedPath&&(n=s.x,l=s.y)}i.attr("transform","translate("+n+", "+l+")")}if(t.startLabelLeft){let d=ti[t.id].startLeft,o=t.x,h=t.y;if(r){let c=a.u.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_left",r);o=c.x,h=c.y}d.attr("transform","translate("+o+", "+h+")")}if(t.startLabelRight){let p=ti[t.id].startRight,g=t.x,y=t.y;if(r){let f=a.u.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_right",r);g=f.x,y=f.y}p.attr("transform","translate("+g+", "+y+")")}if(t.endLabelLeft){let u=ti[t.id].endLeft,x=t.x,w=t.y;if(r){let b=a.u.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_left",r);x=b.x,w=b.y}u.attr("transform","translate("+x+", "+w+")")}if(t.endLabelRight){let m=ti[t.id].endRight,k=t.x,L=t.y;if(r){let S=a.u.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_right",r);k=S.x,L=S.y}m.attr("transform","translate("+k+", "+L+")")}},to=(t,e)=>{let r=t.x,a=t.y,i=Math.abs(e.x-r),n=Math.abs(e.y-a),l=t.width/2,s=t.height/2;return i>=l||n>=s},th=(t,e,r)=>{a.l.warn(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(e)}
  insidePoint : ${JSON.stringify(r)}
  node        : x:${t.x} y:${t.y} w:${t.width} h:${t.height}`);let i=t.x,n=t.y,l=Math.abs(i-r.x),s=t.width/2,d=r.x<e.x?s-l:s+l,o=t.height/2,h=Math.abs(e.y-r.y),c=Math.abs(e.x-r.x);if(Math.abs(n-e.y)*s>Math.abs(i-e.x)*o){let p=r.y<e.y?e.y-o-n:n-o-e.y;d=c*p/h;let g={x:r.x<e.x?r.x+d:r.x-c+d,y:r.y<e.y?r.y+h-p:r.y-h+p};return 0===d&&(g.x=e.x,g.y=e.y),0===c&&(g.x=e.x),0===h&&(g.y=e.y),a.l.warn(`abc89 topp/bott calc, Q ${h}, q ${p}, R ${c}, r ${d}`,g),g}{let y=h*(d=r.x<e.x?e.x-s-i:i-s-e.x)/c,f=r.x<e.x?r.x+c-d:r.x-c+d,u=r.y<e.y?r.y+y:r.y-y;return a.l.warn(`sides calc abc89, Q ${h}, q ${y}, R ${c}, r ${d}`,{_x:f,_y:u}),0===d&&(f=e.x,u=e.y),0===c&&(f=e.x),0===h&&(u=e.y),{x:f,y:u}}},tc=(t,e)=>{a.l.warn("abc88 cutPathAtIntersect",t,e);let r=[],i=t[0],n=!1;return t.forEach(t=>{if(a.l.info("abc88 checking point",t,e),to(e,t)||n)a.l.warn("abc88 outside",t,i),i=t,n||r.push(t);else{let l=th(e,i,t);a.l.warn("abc88 inside",t,i,l),a.l.warn("abc88 intersection",l);let s=!1;r.forEach(t=>{s=s||t.x===l.x&&t.y===l.y}),r.some(t=>t.x===l.x&&t.y===l.y)?a.l.warn("abc88 no intersect",l,r):r.push(l),n=!0}}),a.l.warn("abc88 returning points",r),r},tp=function(t,e,r,n,l,s){let d,o,h=r.points,c=!1,p=s.node(e.v);var g=s.node(e.w);a.l.info("abc88 InsertEdge: ",r),g.intersect&&p.intersect&&((h=h.slice(1,r.points.length-1)).unshift(p.intersect(h[0])),a.l.info("Last point",h[h.length-1],g,g.intersect(h[h.length-1])),h.push(g.intersect(h[h.length-1]))),r.toCluster&&(a.l.info("to cluster abc88",n[r.toCluster]),h=tc(r.points,n[r.toCluster].node),c=!0),r.fromCluster&&(a.l.info("from cluster abc88",n[r.fromCluster]),h=tc(h.reverse(),n[r.fromCluster].node).reverse(),c=!0);let y=h.filter(t=>!Number.isNaN(t.y));d=("graph"===l||"flowchart"===l)&&r.curve||i.$0Z;let f=(0,i.jvg)().x(function(t){return t.x}).y(function(t){return t.y}).curve(d);switch(r.thickness){case"normal":o="edge-thickness-normal";break;case"thick":case"invisible":o="edge-thickness-thick";break;default:o=""}switch(r.pattern){case"solid":o+=" edge-pattern-solid";break;case"dotted":o+=" edge-pattern-dotted";break;case"dashed":o+=" edge-pattern-dashed"}let u=t.append("path").attr("d",f(y)).attr("id",r.id).attr("class"," "+o+(r.classes?" "+r.classes:"")).attr("style",r.style),x="";switch(((0,a.c)().flowchart.arrowMarkerAbsolute||(0,a.c)().state.arrowMarkerAbsolute)&&(x=(x=(x=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),a.l.info("arrowTypeStart",r.arrowTypeStart),a.l.info("arrowTypeEnd",r.arrowTypeEnd),r.arrowTypeStart){case"arrow_cross":u.attr("marker-start","url("+x+"#"+l+"-crossStart)");break;case"arrow_point":u.attr("marker-start","url("+x+"#"+l+"-pointStart)");break;case"arrow_barb":u.attr("marker-start","url("+x+"#"+l+"-barbStart)");break;case"arrow_circle":u.attr("marker-start","url("+x+"#"+l+"-circleStart)");break;case"aggregation":u.attr("marker-start","url("+x+"#"+l+"-aggregationStart)");break;case"extension":u.attr("marker-start","url("+x+"#"+l+"-extensionStart)");break;case"composition":u.attr("marker-start","url("+x+"#"+l+"-compositionStart)");break;case"dependency":u.attr("marker-start","url("+x+"#"+l+"-dependencyStart)");break;case"lollipop":u.attr("marker-start","url("+x+"#"+l+"-lollipopStart)")}switch(r.arrowTypeEnd){case"arrow_cross":u.attr("marker-end","url("+x+"#"+l+"-crossEnd)");break;case"arrow_point":u.attr("marker-end","url("+x+"#"+l+"-pointEnd)");break;case"arrow_barb":u.attr("marker-end","url("+x+"#"+l+"-barbEnd)");break;case"arrow_circle":u.attr("marker-end","url("+x+"#"+l+"-circleEnd)");break;case"aggregation":u.attr("marker-end","url("+x+"#"+l+"-aggregationEnd)");break;case"extension":u.attr("marker-end","url("+x+"#"+l+"-extensionEnd)");break;case"composition":u.attr("marker-end","url("+x+"#"+l+"-compositionEnd)");break;case"dependency":u.attr("marker-end","url("+x+"#"+l+"-dependencyEnd)");break;case"lollipop":u.attr("marker-end","url("+x+"#"+l+"-lollipopEnd)")}let w={};return c&&(w.updatedPath=h),w.originalPath=r.points,w}},666:function(t,e,r){r.d(e,{p:function(){return s},s:function(){return h}});var a=r(6990),i=r(7956);let n=0,l=function(t){let e=t.id;return t.type&&(e+="<"+t.type+">"),e},s=function(t){let e="",r="",a="",n="",l=t.substring(0,1),s=t.substring(t.length-1,t.length);l.match(/[#+~-]/)&&(n=l);let d=/[\s\w)~]/;s.match(d)||(r=o(s));let h=""===n?0:1,c=""===r?t.length:t.length-1;t=t.substring(h,c);let p=t.indexOf("("),g=t.indexOf(")"),y=p>1&&g>p&&g<=t.length;if(y){let f=t.substring(0,p).trim(),u=t.substring(p+1,g);if(e=n+f+"("+(0,i.x)(u.trim())+")",g<t.length){let x=t.substring(g+1,g+2);""!==r||x.match(d)?a=t.substring(g+1).trim():(r=o(x),a=t.substring(g+2).trim()),""!==a&&(":"===a.charAt(0)&&(a=a.substring(1).trim()),e+=a=" : "+(0,i.x)(a))}}else e=n+(0,i.x)(t);return{displayText:e,cssStyle:r}},d=function(t,e,r,a){let i=s(e),n=t.append("tspan").attr("x",a.padding).text(i.displayText);""!==i.cssStyle&&n.attr("style",i.cssStyle),r||n.attr("dy",a.textHeight)},o=function(t){switch(t){case"*":return"font-style:italic;";case"$":return"text-decoration:underline;";default:return""}},h={getClassTitleString:l,drawClass:function(t,e,r,a){let n;i.l.debug("Rendering class ",e,r);let s=e.id,o={id:s,label:e.id,width:0,height:0},h=t.append("g").attr("id",a.db.lookUpDomId(s)).attr("class","classGroup");n=e.link?h.append("svg:a").attr("xlink:href",e.link).attr("target",e.linkTarget).append("text").attr("y",r.textHeight+r.padding).attr("x",0):h.append("text").attr("y",r.textHeight+r.padding).attr("x",0);let c=!0;e.annotations.forEach(function(t){let e=n.append("tspan").text("\xab"+t+"\xbb");c||e.attr("dy",r.textHeight),c=!1});let p=l(e),g=n.append("tspan").text(p).attr("class","title");c||g.attr("dy",r.textHeight);let y=n.node().getBBox().height,f=h.append("line").attr("x1",0).attr("y1",r.padding+y+r.dividerMargin/2).attr("y2",r.padding+y+r.dividerMargin/2),u=h.append("text").attr("x",r.padding).attr("y",y+r.dividerMargin+r.textHeight).attr("fill","white").attr("class","classText");c=!0,e.members.forEach(function(t){d(u,t,c,r),c=!1});let x=u.node().getBBox(),w=h.append("line").attr("x1",0).attr("y1",r.padding+y+r.dividerMargin+x.height).attr("y2",r.padding+y+r.dividerMargin+x.height),b=h.append("text").attr("x",r.padding).attr("y",y+2*r.dividerMargin+x.height+r.textHeight).attr("fill","white").attr("class","classText");c=!0,e.methods.forEach(function(t){d(b,t,c,r),c=!1});let m=h.node().getBBox();var k=" ";e.cssClasses.length>0&&(k+=e.cssClasses.join(" "));let L=h.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",m.width+2*r.padding).attr("height",m.height+r.padding+.5*r.dividerMargin).attr("class",k),S=L.node().getBBox().width;return n.node().childNodes.forEach(function(t){t.setAttribute("x",(S-t.getBBox().width)/2)}),e.tooltip&&n.insert("title").text(e.tooltip),f.attr("x2",S),w.attr("x2",S),o.width=S,o.height=m.height+r.padding+.5*r.dividerMargin,o},drawEdge:function(t,e,r,l,s){let d,o,h,c,p,g;let y=function(t){switch(t){case s.db.relationType.AGGREGATION:return"aggregation";case s.db.relationType.EXTENSION:return"extension";case s.db.relationType.COMPOSITION:return"composition";case s.db.relationType.DEPENDENCY:return"dependency";case s.db.relationType.LOLLIPOP:return"lollipop"}};e.points=e.points.filter(t=>!Number.isNaN(t.y));let f=e.points,u=(0,a.jvg)().x(function(t){return t.x}).y(function(t){return t.y}).curve(a.$0Z),x=t.append("path").attr("d",u(f)).attr("id","edge"+n).attr("class","relation"),w="";l.arrowMarkerAbsolute&&(w=(w=(w=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),1==r.relation.lineType&&x.attr("class","relation dashed-line"),10==r.relation.lineType&&x.attr("class","relation dotted-line"),"none"!==r.relation.type1&&x.attr("marker-start","url("+w+"#"+y(r.relation.type1)+"Start)"),"none"!==r.relation.type2&&x.attr("marker-end","url("+w+"#"+y(r.relation.type2)+"End)");let b=e.points.length,m=i.u.calcLabelPosition(e.points);if(d=m.x,o=m.y,b%2!=0&&b>1){let k=i.u.calcCardinalityPosition("none"!==r.relation.type1,e.points,e.points[0]),L=i.u.calcCardinalityPosition("none"!==r.relation.type2,e.points,e.points[b-1]);i.l.debug("cardinality_1_point "+JSON.stringify(k)),i.l.debug("cardinality_2_point "+JSON.stringify(L)),h=k.x,c=k.y,p=L.x,g=L.y}if(void 0!==r.title){let S=t.append("g").attr("class","classLabel"),v=S.append("text").attr("class","label").attr("x",d).attr("y",o).attr("fill","red").attr("text-anchor","middle").text(r.title);window.label=v;let M=v.node().getBBox();S.insert("rect",":first-child").attr("class","box").attr("x",M.x-l.padding/2).attr("y",M.y-l.padding/2).attr("width",M.width+l.padding).attr("height",M.height+l.padding)}if(i.l.info("Rendering relation "+JSON.stringify(r)),void 0!==r.relationTitle1&&"none"!==r.relationTitle1){let T=t.append("g").attr("class","cardinality");T.append("text").attr("class","type1").attr("x",h).attr("y",c).attr("fill","black").attr("font-size","6").text(r.relationTitle1)}if(void 0!==r.relationTitle2&&"none"!==r.relationTitle2){let B=t.append("g").attr("class","cardinality");B.append("text").attr("class","type2").attr("x",p).attr("y",g).attr("fill","black").attr("font-size","6").text(r.relationTitle2)}n++},drawNote:function(t,e,r,a){i.l.debug("Rendering note ",e,r);let n=e.id,l={id:n,text:e.text,width:0,height:0},s=t.append("g").attr("id",n).attr("class","classGroup"),d=s.append("text").attr("y",r.textHeight+r.padding).attr("x",0),o=JSON.parse(`"${e.text}"`).split("\n");o.forEach(function(t){i.l.debug(`Adding line: ${t}`),d.append("tspan").text(t).attr("class","title").attr("dy",r.textHeight)});let h=s.node().getBBox(),c=s.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",h.width+2*r.padding).attr("height",h.height+o.length*r.textHeight+r.padding+.5*r.dividerMargin),p=c.node().getBBox().width;return d.node().childNodes.forEach(function(t){t.setAttribute("x",(p-t.getBBox().width)/2)}),l.width=p,l.height=h.height+o.length*r.textHeight+r.padding+.5*r.dividerMargin,l},parseMember:s}}}]);