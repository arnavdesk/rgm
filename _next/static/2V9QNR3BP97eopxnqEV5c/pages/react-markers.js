(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"/LQ+":function(r,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/react-markers",function(){return n("P7Je")}])},"/vpQ":function(r,t,n){"use strict";function e(r,t){if(null==r)return{};var n,e,o={},c=Object.keys(r);for(e=0;e<c.length;e++)n=c[e],t.indexOf(n)>=0||(o[n]=r[n]);return o}n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return P}));var o=n("wx14"),c=n("q1tI"),i=n("qKvR"),a=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.literal,e=t.overlap,o=n?r:["&"].concat(r);function c(r){if("object"!==typeof r||null==r)return[];if(Array.isArray(r))return r.map(c);var t={},i={},a={};return Object.keys(r).forEach((function(p){var u=r[p];if(!Array.isArray(u)&&n&&(u=[u]),(n||Array.isArray(u))&&38!==p.charCodeAt(0)){var s=void 0;u.forEach((function(r,c){if((!e||s!==r)&&null!=r)if(s=r,0!==c||n)if(void 0===t[o[c]]){var i;t[o[c]]=((i={})[p]=r,i)}else t[o[c]][p]=r;else a[p]=r}))}else"object"===typeof u?i[p]=c(u):a[p]=u})),o.forEach((function(r){t[r]&&(a[r]=t[r])})),Object.assign(a,i),a}return function(){for(var r=arguments.length,t=Array(r),n=0;n<r;n++)t[n]=arguments[n];return t.map(c)}},p=Object(c.createContext)({breakpoints:[768,1280,1920],spaces:[0,4,8,16,32,64,128,256]}),u=function(r){return"screen and (min-width: "+("number"===typeof r?Math.ceil(r/16)+"em":r)+")"},s=(p.Provider,function(r){var t=r.breakpoints.map((function(r){return"@media "+u(r)})),n=a(t),e=function(r){return function(t){var n=Object(o.a)({},t[0]);return t.slice(1).forEach((function(t,e){n[r[e]]=t})),n}}(t);return function(r){return Array.isArray(r)?e(r):n(r)}}),f=function(){var r=Object(c.useContext)(p),t=Object(c.useMemo)((function(){return s(r)}),[r]),n=function(t){return Array.isArray(t)?t.map((function(t){return d(t,r)})):d(t,r)},e=function(r){return t({paddingTop:n(r)})},o=function(r){return t({paddingRight:n(r)})},i=function(r){return t({paddingBottom:n(r)})},a=function(r){return t({paddingLeft:n(r)})},u=function(r){return t({marginTop:n(r)})},f=function(r){return t({marginRight:n(r)})},l=function(r){return t({marginBottom:n(r)})},m=function(r){return t({marginLeft:n(r)})};return{media:t,pt:e,pr:o,pb:i,pl:a,px:function(r){return[a(r),o(r)]},py:function(r){return[e(r),i(r)]},p:function(r){return[e(r),o(r),i(r),a(r)]},mt:u,mr:f,mb:l,ml:m,mx:function(r){return[m(r),f(r)]},my:function(r){return[u(r),l(r)]},m:function(r){return[u(r),f(r),l(r),m(r)]}}},l=function(r,t){return r},m=function(r){return"number"===typeof r?function(r){return 0===r?0:100*r+"%"}(Math.max(0,Math.min(r,1))):r},d=function(r,t){var n,e=t.spaces;if("number"===typeof r){var o=e.length-1,c=Math.max(-o,Math.min(r,o));return n=c,(Number(n>0)-Number(n<0)||+n)*e[Math.abs(c)]}return r},g=[{prop:"width",transform:m},{prop:"height",transform:m}],b=[{prop:"p",cssProp:"paddingTop",transform:d},{prop:"p",cssProp:"paddingRight",transform:d},{prop:"p",cssProp:"paddingBottom",transform:d},{prop:"p",cssProp:"paddingLeft",transform:d},{prop:"ph",cssProp:"paddingLeft",transform:d},{prop:"ph",cssProp:"paddingRight",transform:d},{prop:"px",cssProp:"paddingLeft",transform:d},{prop:"px",cssProp:"paddingRight",transform:d},{prop:"pv",cssProp:"paddingTop",transform:d},{prop:"pv",cssProp:"paddingBottom",transform:d},{prop:"py",cssProp:"paddingTop",transform:d},{prop:"py",cssProp:"paddingBottom",transform:d},{prop:"pt",cssProp:"paddingTop",transform:d},{prop:"pr",cssProp:"paddingRight",transform:d},{prop:"pb",cssProp:"paddingBottom",transform:d},{prop:"pl",cssProp:"paddingLeft",transform:d},{prop:"m",cssProp:"marginTop",transform:d},{prop:"m",cssProp:"marginRight",transform:d},{prop:"m",cssProp:"marginBottom",transform:d},{prop:"m",cssProp:"marginLeft",transform:d},{prop:"mh",cssProp:"marginLeft",transform:d},{prop:"mh",cssProp:"marginRight",transform:d},{prop:"mx",cssProp:"marginLeft",transform:d},{prop:"mx",cssProp:"marginRight",transform:d},{prop:"mv",cssProp:"marginTop",transform:d},{prop:"mv",cssProp:"marginBottom",transform:d},{prop:"my",cssProp:"marginTop",transform:d},{prop:"my",cssProp:"marginBottom",transform:d},{prop:"mt",cssProp:"marginTop",transform:d},{prop:"mr",cssProp:"marginRight",transform:d},{prop:"mb",cssProp:"marginBottom",transform:d},{prop:"ml",cssProp:"marginLeft",transform:d}],v=[{prop:"flexGrow"},{prop:"flexShrink"},{prop:"flexBasis"},{prop:"justifySelf"},{prop:"alignSelf"},{prop:"order"}],h=[{prop:"alignItems"},{prop:"alignContent"},{prop:"justifyItems"},{prop:"justifyContent"},{prop:"flexWrap"},{prop:"flexDirection"}],O=function(r,t){var n={};for(var e in r)-1===t.indexOf(e)&&(n[e]=r[e]);return n},j=function(r){return r.prop},y=function(r,t,n){for(var e={},o=function(o){var c=n[o],i=c.prop,a=c.cssProp,p=void 0===a?i:a,u=c.transform,s=void 0===u?l:u,f=r[i];null!=f&&(e[p]=Array.isArray(f)?f.map((function(r){return s(r,t)})):s(f,t))},c=0;c<n.length;c+=1)o(c);return e},w=Object(c.forwardRef)((function(r,t){var n=r.as,a=void 0===n?"div":n,u=r.css,s=r.children,l=e(r,["as","css","children"]),m=Object(c.useContext)(p),d=f().media,h=[].concat(g,b,v),w=y(l,m,h),P=O(l,h.map(j));return Object(i.c)(a,Object(o.a)({ref:t,css:[{boxSizing:"border-box",minWidth:0,minHeight:0},u,d(w)]},P),null==s?null:s)}));w.displayName="Box";var P=Object(c.forwardRef)((function(r,t){var n=r.as,a=void 0===n?"div":n,u=r.css,s=r.children,l=e(r,["as","css","children"]),m=Object(c.useContext)(p),d=f().media,w=[].concat(g,b,v,h),P=y(l,m,w),x=O(l,w.map(j));return Object(i.c)(a,Object(o.a)({ref:t,css:[{display:"flex",boxSizing:"border-box",minWidth:0,minHeight:0},u,d(P)]},x),null==s?null:s)}));P.displayName="Flex"},P7Je:function(r,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return f})),n.d(t,"default",(function(){return l}));var e=n("ODXe"),o=n("q1tI"),c=n("sqll"),i=n("/vpQ"),a=n("CZrd"),p=n("TOXp"),u=n("qKvR"),s=(o.createElement,{zoom:9,center:{lat:59.936,lng:30.314},gestureHandling:"greedy",clickableIcons:!1}),f=!0;function l(){var r=Object(a.b)(),t=o.useState(!0),n=Object(e.a)(t,2),f=n[0],l=n[1],b=o.useState("end"),v=Object(e.a)(b,2),h=v[0],O=v[1],j=o.useState("center"),y=Object(e.a)(j,2),w=y[0],P=y[1];return Object(u.c)("div",null,Object(u.c)(i.b,{p:3,alignItems:"baseline"},Object(u.c)(p.a,{id:"debug",value:f,onChange:l},"Debug"),Object(u.c)(i.a,{width:"8px"}),Object(u.c)(p.h,{value:h,onChange:O,options:["start","center","end"]}),Object(u.c)(i.a,{width:"8px"}),Object(u.c)(p.h,{value:w,onChange:P,options:["start","center","end"]})),Object(u.c)(p.g,{value:.75},r&&Object(u.c)(c.a,{api:r,options:s},Object(u.c)(c.c,{debug:f},Object(u.c)(c.b,{lat:s.center.lat,lng:s.center.lng},Object(u.c)(m,{style:{alignSelf:h,justifySelf:w},size:48,color:"red"})),Object(u.c)(c.b,{lat:s.center.lat+.1,lng:s.center.lng+.3},Object(u.c)(d,{style:{alignSelf:h,justifySelf:w},size:48,color:"Fuchsia"})),Object(u.c)(c.b,{lat:s.center.lat-.1,lng:s.center.lng-.3},Object(u.c)(g,{style:{alignSelf:h,justifySelf:w},size:48,color:"OrangeRed"}))))))}var m=function(r){var t=r.size,n=r.color,e=r.style;return Object(u.c)("svg",{style:e,xmlns:"http://www.w3.org/2000/svg",height:t,width:t,viewBox:"2 2 20 20",fill:n},Object(u.c)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),Object(u.c)("path",{d:"M0 0h24v24H0z",fill:"none"}))},d=function(r){var t=r.size,n=r.color,e=r.style;return Object(u.c)("svg",{style:e,xmlns:"http://www.w3.org/2000/svg",height:t,viewBox:"0 0 24 24",width:t,fill:n},Object(u.c)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(u.c)("path",{d:"M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"}))},g=function(r){var t=r.size,n=r.color,e=r.style;return Object(u.c)("svg",{style:e,xmlns:"http://www.w3.org/2000/svg",height:t,viewBox:"3 3 18 18",width:t,fill:n},Object(u.c)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(u.c)("path",{d:"M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"}))}},rePB:function(r,t,n){"use strict";function e(r,t,n){return t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}n.d(t,"a",(function(){return e}))},sqll:function(r,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return d}));var e=n("rePB"),o=n("ODXe"),c=n("q1tI"),i=n("qKvR");c.createElement;function a(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.push.apply(n,e)}return n}var p=c.createContext(null),u=(function(){var r={}}(),{width:"100%",height:"100%"}),s=c.forwardRef((function(r,t){var n=r.api,s=r.options,f=r.children,l=c.useRef(null),m=c.useRef(!0),d=c.useState(null),g=Object(o.a)(d,2),b=g[0],v=g[1];return c.useImperativeHandle(t,(function(){return b?b.map:null}),[b]),c.useEffect((function(){if(m.current&&l.current){var r=new n.Map(l.current,function(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(e.a)(r,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(n,t))}))}return r}({},"function"===typeof s?s(l.current):s));return m.current=!1,v({map:r,api:n}),function(){}}}),[n,s]),Object(i.c)(c.Fragment,null,Object(i.c)("div",{style:u,ref:l}),b&&Object(i.c)(p.Provider,{value:b},f))})),f=function(){return c.useContext(p)},l=n("i8i4"),m=(c.createElement,function(r){return r.children}),d=function(r){var t=f(),n=t.api,e=t.map,a=c.useRef(2),p=c.Children.toArray(r.children||[]),u=c.useState(null),s=Object(o.a)(u,2),m=s[0],d=s[1],g=c.useRef([]),b=c.useRef([]),v=function(r){return Math.round(r*a.current)/a.current};if(c.useLayoutEffect((function(){g.current=p})),c.useEffect((function(){if(n){a.current=window.devicePixelRatio;var r=new n.OverlayView,t=null;return r.onAdd=function(){t=document.createElement("div"),r.getPanes().floatPane.appendChild(t),d({element:t,view:r})},r.onRemove=function(){if(null!=t){var r=t.parentNode;null!=r&&r.removeChild(t),d(null)}},r.draw=function(){var t=r.getProjection();g.current.forEach((function(r,e){var o=r.props,c=o.lat,i=o.lng,a=b.current[e].current;if(null!=a){var p=t.fromLatLngToDivPixel(new n.LatLng(c,i));a.style.left=v(p.x)+"px",a.style.top=v(p.y)+"px"}}))},r.setMap(e),function(){r.setMap(null)}}}),[n,e]),null!=m&&null!=p&&null!=n){var h=m.view.getProjection();return l.createPortal(p.map((function(t,e){var o=h.fromLatLngToDivPixel(new n.LatLng(t.props.lat,t.props.lng));return null==b.current[e]&&(b.current[e]={current:null}),Object(i.c)("div",{key:t.key,ref:b.current[e],style:{position:"absolute",left:v(o.x),top:v(o.y),display:"grid",gridTemplate:"0/0"}},t,!0===r.debug&&Object(i.c)("div",{style:{position:"absolute",borderRadius:"100%",width:4,height:4,left:-2,top:-2,opacity:.8,boxShadow:"0 0 0 2px blue, 0 0 0 4px white, 0 0 0 6px blue"}}))})),m.element)}return null}}},[["/LQ+",1,2,3,0,4]]]);