(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{ckBT:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return a})),n.d(t,"GoogleMarker",(function(){return f})),n.d(t,"default",(function(){return p}));var r=n("q1tI"),u=n("sqll"),c=n("CZrd"),o=n("TOXp"),i=n("qKvR"),l=(r.createElement,{zoom:9,center:{lat:59.936,lng:30.314}}),a=!0,f=function(e){var t=e.lat,n=e.lng,c=Object(u.d)(),o=c.api,i=c.map;return r.useEffect((function(){if(o){var e=new o.Marker({map:i,position:{lat:t,lng:n}});return function(){e.setMap(null)}}}),[o,i,t,n]),null};function p(){var e=Object(c.b)();return Object(i.c)(o.g,{value:.75},e&&Object(i.c)(u.a,{api:e,options:l},Object(i.c)(f,{lat:l.center.lat,lng:l.center.lng})))}},evMQ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/google-marker",function(){return n("ckBT")}])},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},sqll:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return b}));var r=n("rePB"),u=n("ODXe"),c=n("q1tI"),o=n("qKvR");c.createElement;function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var l=c.createContext(null),a=(function(){var e={}}(),{width:"100%",height:"100%"}),f=c.forwardRef((function(e,t){var n=e.api,f=e.options,p=e.children,s=c.useRef(null),d=c.useRef(!0),b=c.useState(null),v=Object(u.a)(b,2),O=v[0],w=v[1];return c.useImperativeHandle(t,(function(){return O?O.map:null}),[O]),c.useEffect((function(){if(d.current&&s.current){var e=new n.Map(s.current,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},"function"===typeof f?f(s.current):f));return d.current=!1,w({map:e,api:n}),function(){}}}),[n,f]),Object(o.c)(c.Fragment,null,Object(o.c)("div",{style:a,ref:s}),O&&Object(o.c)(l.Provider,{value:O},p))})),p=function(){return c.useContext(l)},s=n("i8i4"),d=(c.createElement,function(e){return e.children}),b=function(e){var t=p(),n=t.api,r=t.map,i=c.useRef(2),l=c.Children.toArray(e.children||[]),a=c.useState(null),f=Object(u.a)(a,2),d=f[0],b=f[1],v=c.useRef([]),O=c.useRef([]),w=function(e){return Math.round(e*i.current)/i.current};if(c.useLayoutEffect((function(){v.current=l})),c.useEffect((function(){if(n){i.current=window.devicePixelRatio;var e=new n.OverlayView,t=null;return e.onAdd=function(){t=document.createElement("div"),e.getPanes().floatPane.appendChild(t),b({element:t,view:e})},e.onRemove=function(){if(null!=t){var e=t.parentNode;null!=e&&e.removeChild(t),b(null)}},e.draw=function(){var t=e.getProjection();v.current.forEach((function(e,r){var u=e.props,c=u.lat,o=u.lng,i=O.current[r].current;if(null!=i){var l=t.fromLatLngToDivPixel(new n.LatLng(c,o));i.style.left=w(l.x)+"px",i.style.top=w(l.y)+"px"}}))},e.setMap(r),function(){e.setMap(null)}}}),[n,r]),null!=d&&null!=l&&null!=n){var g=d.view.getProjection();return s.createPortal(l.map((function(t,r){var u=g.fromLatLngToDivPixel(new n.LatLng(t.props.lat,t.props.lng));return null==O.current[r]&&(O.current[r]={current:null}),Object(o.c)("div",{key:t.key,ref:O.current[r],style:{position:"absolute",left:w(u.x),top:w(u.y),display:"grid",gridTemplate:"0/0"}},t,!0===e.debug&&Object(o.c)("div",{style:{position:"absolute",borderRadius:"100%",width:4,height:4,left:-2,top:-2,opacity:.8,boxShadow:"0 0 0 2px blue, 0 0 0 4px white, 0 0 0 6px blue"}}))})),d.element)}return null}}},[["evMQ",1,2,3,0,4]]]);