(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"/LQ+":function(r,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/react-markers",function(){return n("P7Je")}])},"/vpQ":function(r,t,n){"use strict";function e(r,t){if(null==r)return{};var n,e,o={},i=Object.keys(r);for(e=0;e<i.length;e++)n=i[e],t.indexOf(n)>=0||(o[n]=r[n]);return o}n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return x}));var o=n("wx14"),i=n("q1tI"),a=n("qKvR"),c=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.literal,e=t.overlap,o=n?r:["&"].concat(r);function i(r){if("object"!==typeof r||null==r)return[];if(Array.isArray(r))return r.map(i);var t={},a={},c={};return Object.keys(r).forEach((function(u){var s=r[u];if(!Array.isArray(s)&&n&&(s=[s]),(n||Array.isArray(s))&&38!==u.charCodeAt(0)){var p=void 0;s.forEach((function(r,i){if((!e||p!==r)&&null!=r)if(p=r,0!==i||n)if(void 0===t[o[i]]){var a;t[o[i]]=((a={})[u]=r,a)}else t[o[i]][u]=r;else c[u]=r}))}else"object"===typeof s?a[u]=i(s):c[u]=s})),o.forEach((function(r){t[r]&&(c[r]=t[r])})),Object.assign(c,a),c}return function(){for(var r=arguments.length,t=Array(r),n=0;n<r;n++)t[n]=arguments[n];return t.map(i)}},u=Object(i.createContext)({breakpoints:[768,1280,1920],spaces:[0,4,8,16,32,64,128,256]}),s=function(r){return"screen and (min-width: "+("number"===typeof r?Math.ceil(r/16)+"em":r)+")"},p=(u.Provider,function(r){var t=r.breakpoints.map((function(r){return"@media "+s(r)})),n=c(t),e=function(r){return function(t){var n=Object(o.a)({},t[0]);return t.slice(1).forEach((function(t,e){n[r[e]]=t})),n}}(t);return function(r){return Array.isArray(r)?e(r):n(r)}}),f=function(){var r=Object(i.useContext)(u),t=Object(i.useMemo)((function(){return p(r)}),[r]),n=function(t){return Array.isArray(t)?t.map((function(t){return m(t,r)})):m(t,r)},e=function(r){return t({paddingTop:n(r)})},o=function(r){return t({paddingRight:n(r)})},a=function(r){return t({paddingBottom:n(r)})},c=function(r){return t({paddingLeft:n(r)})},s=function(r){return t({marginTop:n(r)})},f=function(r){return t({marginRight:n(r)})},l=function(r){return t({marginBottom:n(r)})},d=function(r){return t({marginLeft:n(r)})};return{media:t,pt:e,pr:o,pb:a,pl:c,px:function(r){return[c(r),o(r)]},py:function(r){return[e(r),a(r)]},p:function(r){return[e(r),o(r),a(r),c(r)]},mt:s,mr:f,mb:l,ml:d,mx:function(r){return[d(r),f(r)]},my:function(r){return[s(r),l(r)]},m:function(r){return[s(r),f(r),l(r),d(r)]}}},l=function(r,t){return r},d=function(r){return"number"===typeof r?function(r){return 0===r?0:100*r+"%"}(Math.max(0,Math.min(r,1))):r},m=function(r,t){var n,e=t.spaces;if("number"===typeof r){var o=e.length-1,i=Math.max(-o,Math.min(r,o));return n=i,(Number(n>0)-Number(n<0)||+n)*e[Math.abs(i)]}return r},g=[{prop:"width",transform:d},{prop:"height",transform:d}],v=[{prop:"p",cssProp:"paddingTop",transform:m},{prop:"p",cssProp:"paddingRight",transform:m},{prop:"p",cssProp:"paddingBottom",transform:m},{prop:"p",cssProp:"paddingLeft",transform:m},{prop:"ph",cssProp:"paddingLeft",transform:m},{prop:"ph",cssProp:"paddingRight",transform:m},{prop:"px",cssProp:"paddingLeft",transform:m},{prop:"px",cssProp:"paddingRight",transform:m},{prop:"pv",cssProp:"paddingTop",transform:m},{prop:"pv",cssProp:"paddingBottom",transform:m},{prop:"py",cssProp:"paddingTop",transform:m},{prop:"py",cssProp:"paddingBottom",transform:m},{prop:"pt",cssProp:"paddingTop",transform:m},{prop:"pr",cssProp:"paddingRight",transform:m},{prop:"pb",cssProp:"paddingBottom",transform:m},{prop:"pl",cssProp:"paddingLeft",transform:m},{prop:"m",cssProp:"marginTop",transform:m},{prop:"m",cssProp:"marginRight",transform:m},{prop:"m",cssProp:"marginBottom",transform:m},{prop:"m",cssProp:"marginLeft",transform:m},{prop:"mh",cssProp:"marginLeft",transform:m},{prop:"mh",cssProp:"marginRight",transform:m},{prop:"mx",cssProp:"marginLeft",transform:m},{prop:"mx",cssProp:"marginRight",transform:m},{prop:"mv",cssProp:"marginTop",transform:m},{prop:"mv",cssProp:"marginBottom",transform:m},{prop:"my",cssProp:"marginTop",transform:m},{prop:"my",cssProp:"marginBottom",transform:m},{prop:"mt",cssProp:"marginTop",transform:m},{prop:"mr",cssProp:"marginRight",transform:m},{prop:"mb",cssProp:"marginBottom",transform:m},{prop:"ml",cssProp:"marginLeft",transform:m}],h=[{prop:"flexGrow"},{prop:"flexShrink"},{prop:"flexBasis"},{prop:"justifySelf"},{prop:"alignSelf"},{prop:"order"}],b=[{prop:"alignItems"},{prop:"alignContent"},{prop:"justifyItems"},{prop:"justifyContent"},{prop:"flexWrap"},{prop:"flexDirection"}],y=function(r,t){var n={};for(var e in r)-1===t.indexOf(e)&&(n[e]=r[e]);return n},j=function(r){return r.prop},O=function(r,t,n){for(var e={},o=function(o){var i=n[o],a=i.prop,c=i.cssProp,u=void 0===c?a:c,s=i.transform,p=void 0===s?l:s,f=r[a];null!=f&&(e[u]=Array.isArray(f)?f.map((function(r){return p(r,t)})):p(f,t))},i=0;i<n.length;i+=1)o(i);return e},w=Object(i.forwardRef)((function(r,t){var n=r.as,c=void 0===n?"div":n,s=r.css,p=r.children,l=e(r,["as","css","children"]),d=Object(i.useContext)(u),m=f().media,b=[].concat(g,v,h),w=O(l,d,b),x=y(l,b.map(j));return Object(a.c)(c,Object(o.a)({ref:t,css:[{boxSizing:"border-box",minWidth:0,minHeight:0},s,m(w)]},x),null==p?null:p)}));w.displayName="Box";var x=Object(i.forwardRef)((function(r,t){var n=r.as,c=void 0===n?"div":n,s=r.css,p=r.children,l=e(r,["as","css","children"]),d=Object(i.useContext)(u),m=f().media,w=[].concat(g,v,h,b),x=O(l,d,w),P=y(l,w.map(j));return Object(a.c)(c,Object(o.a)({ref:t,css:[{display:"flex",boxSizing:"border-box",minWidth:0,minHeight:0},s,m(x)]},P),null==p?null:p)}));x.displayName="Flex"},BsWD:function(r,t,n){"use strict";n.d(t,"a",(function(){return o}));var e=n("a3WO");function o(r,t){if(r){if("string"===typeof r)return Object(e.a)(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(e.a)(r,t):void 0}}},CZrd:function(r,t,n){"use strict";n.d(t,"a",(function(){return p}));var e=n("ODXe");var o=n("q1tI"),i=new Map,a=new Map,c={emitter:{events:{},emit(r,...t){for(let n of this.events[r]||[])n(...t)},on(r,t){return(this.events[r]=this.events[r]||[]).push(t),()=>this.events[r]=this.events[r].filter(r=>r!==t)}},api:null,error:null},u=document.getElementsByTagName("head")[0],s=u.insertBefore;u.insertBefore=function(r,t){r.href&&r.href.indexOf("//fonts.googleapis.com/css?family=Roboto")>-1||s.call(u,r,t)},window.gm_authFailure=function(){c.error=new Error("Gmap encountered auth error. See console for more details."),c.api=null,c.emitter.emit("change")},window.rgm_mapLoaded=function(){null==c.error&&(c.api=window.google.maps),c.emitter.emit("change")};var p=function(){var r=o.useState(c.api),t=Object(e.a)(r,2),n=t[0],u=t[1],s="AIzaSyBC4njLnT0Gr9Lo_necn1pHL5OdzSMHXHY";var p=function(r){var t=o.useState("loading"),n=Object(e.a)(t,2),c=n[0],u=n[1];return o.useEffect((function(){var t=!0,n=function(){i.set(r,"done"),t&&u("done")},e=function(){i.set(r,"failed"),t&&u("failed")},o=i.get(r);if(null==o){var c=document.createElement("script");c.async=!0,c.defer=!0,c.importance="low",c.src=r,c.addEventListener("load",n),c.addEventListener("error",e),i.set(r,"loading"),a.set(r,c),document.body&&document.body.appendChild(c)}if("loading"===o){var s=a.get(r);if(s)return s.addEventListener("load",n),s.addEventListener("error",e),function(){s.removeEventListener("load",n),s.removeEventListener("error",e)}}return"done"===o&&u("done"),"failed"===o&&u("failed"),function(){t=!1}}),[r]),c}("https://maps.googleapis.com/maps/api/js?key=".concat(s,"&libraries=places&callback=rgm_mapLoaded"));return o.useEffect((function(){return null==n&&null!=c.api&&u(c.api),c.emitter.on("change",(function(){u(c.api)}))}),[n,p]),n}},ODXe:function(r,t,n){"use strict";n.d(t,"a",(function(){return o}));var e=n("BsWD");function o(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(r)){var n=[],e=!0,o=!1,i=void 0;try{for(var a,c=r[Symbol.iterator]();!(e=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);e=!0);}catch(u){o=!0,i=u}finally{try{e||null==c.return||c.return()}finally{if(o)throw i}}return n}}(r,t)||Object(e.a)(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},P7Je:function(r,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return f})),n.d(t,"default",(function(){return l}));var e=n("ODXe"),o=n("q1tI"),i=n("sqll"),a=n("/vpQ"),c=n("CZrd"),u=n("TOXp"),s=n("qKvR"),p=(o.createElement,{zoom:9,center:{lat:59.936,lng:30.314},gestureHandling:"greedy",clickableIcons:!1}),f=!0;function l(){var r=Object(c.a)(),t=o.useState(!0),n=Object(e.a)(t,2),f=n[0],l=n[1],v=o.useState("end"),h=Object(e.a)(v,2),b=h[0],y=h[1],j=o.useState("center"),O=Object(e.a)(j,2),w=O[0],x=O[1];return Object(s.c)("div",null,Object(s.c)(a.b,{p:3,alignItems:"baseline"},Object(s.c)(u.a,{id:"debug",value:f,onChange:l},"Debug"),Object(s.c)(a.a,{width:"8px"}),Object(s.c)(u.h,{value:b,onChange:y,options:["start","center","end"]}),Object(s.c)(a.a,{width:"8px"}),Object(s.c)(u.h,{value:w,onChange:x,options:["start","center","end"]})),Object(s.c)(u.g,{value:.75},r&&Object(s.c)(i.a,{api:r,options:p},Object(s.c)(i.c,{debug:f},Object(s.c)(i.b,{lat:p.center.lat,lng:p.center.lng},Object(s.c)(d,{style:{alignSelf:b,justifySelf:w},size:48,color:"red"})),Object(s.c)(i.b,{lat:p.center.lat+.1,lng:p.center.lng+.3},Object(s.c)(m,{style:{alignSelf:b,justifySelf:w},size:48,color:"Fuchsia"})),Object(s.c)(i.b,{lat:p.center.lat-.1,lng:p.center.lng-.3},Object(s.c)(g,{style:{alignSelf:b,justifySelf:w},size:48,color:"OrangeRed"}))))))}var d=function(r){var t=r.size,n=r.color,e=r.style;return Object(s.c)("svg",{style:e,xmlns:"http://www.w3.org/2000/svg",height:t,width:t,viewBox:"2 2 20 20",fill:n},Object(s.c)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),Object(s.c)("path",{d:"M0 0h24v24H0z",fill:"none"}))},m=function(r){var t=r.size,n=r.color,e=r.style;return Object(s.c)("svg",{style:e,xmlns:"http://www.w3.org/2000/svg",height:t,viewBox:"0 0 24 24",width:t,fill:n},Object(s.c)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(s.c)("path",{d:"M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"}))},g=function(r){var t=r.size,n=r.color,e=r.style;return Object(s.c)("svg",{style:e,xmlns:"http://www.w3.org/2000/svg",height:t,viewBox:"3 3 18 18",width:t,fill:n},Object(s.c)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(s.c)("path",{d:"M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"}))}},a3WO:function(r,t,n){"use strict";function e(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}n.d(t,"a",(function(){return e}))},sqll:function(r,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return l}));var e=n("ODXe"),o=n("q1tI"),i=n("qKvR"),a=(o.createElement,o.createContext(null)),c=(function(){var r={}}(),{width:"100%",height:"100%"}),u=o.forwardRef((function(r,t){var n=r.api,u=r.options,s=r.children,p=o.useRef(null),f=o.useRef(!1),l=o.useState(null),d=Object(e.a)(l,2),m=d[0],g=d[1];return o.useImperativeHandle(t,(function(){return m?m.map:null}),[m]),o.useEffect((function(){if(!f.current&&p.current){var r=new n.Map(p.current,"function"===typeof u?u(p.current):u);return f.current=!0,g({map:r,api:n}),function(){}}}),[n,u]),Object(i.c)(o.Fragment,null,Object(i.c)("div",{style:c,ref:p}),m&&Object(i.c)(a.Provider,{value:m},s))})),s=function(){return o.useContext(a)},p=n("i8i4"),f=(o.createElement,function(r){return r.children}),l=function(r){var t=s(),n=t.api,a=t.map,c=o.useRef(2),u=o.Children.toArray(r.children||[]),f=o.useState(null),l=Object(e.a)(f,2),d=l[0],m=l[1],g=o.useRef([]),v=o.useRef([]),h=function(r){return Math.round(r*c.current)/c.current};if(o.useLayoutEffect((function(){g.current=u})),o.useEffect((function(){if(n){c.current=window.devicePixelRatio;var r=new n.OverlayView,t=null;return r.onAdd=function(){t=document.createElement("div"),r.getPanes().floatPane.appendChild(t),m({element:t,view:r})},r.onRemove=function(){if(null!=t){var r=t.parentNode;null!=r&&r.removeChild(t),m(null)}},r.draw=function(){var t=r.getProjection();g.current.forEach((function(r,e){var o=r.props,i=o.lat,a=o.lng,c=v.current[e].current;if(null!=c){var u=t.fromLatLngToDivPixel(new n.LatLng(i,a));c.style.left=h(u.x)+"px",c.style.top=h(u.y)+"px"}}))},r.setMap(a),function(){r.setMap(null)}}}),[n,a]),null!=d&&null!=u&&null!=n){var b=d.view.getProjection();return p.createPortal(u.map((function(t,e){var o=b.fromLatLngToDivPixel(new n.LatLng(t.props.lat,t.props.lng));return null==v.current[e]&&(v.current[e]={current:null}),Object(i.c)("div",{key:t.key,ref:v.current[e],style:{position:"absolute",left:h(o.x),top:h(o.y),display:"grid",gridTemplate:"0/0"}},t,!0===r.debug&&Object(i.c)("div",{style:{position:"absolute",borderRadius:"100%",width:4,height:4,left:-2,top:-2,opacity:.8,boxShadow:"0 0 0 2px blue, 0 0 0 4px white, 0 0 0 6px blue"}}))})),d.element)}return null}}},[["/LQ+",1,2,3,0,4]]]);