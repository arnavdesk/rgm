(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{B1n1:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/geojson",function(){return n("FskC")}])},BsWD:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("a3WO");function o(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},CZrd:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("ODXe");var o=n("q1tI"),a=new Map,i=new Map,u={emitter:{events:{},emit(e,...t){for(let n of this.events[e]||[])n(...t)},on(e,t){return(this.events[e]=this.events[e]||[]).push(t),()=>this.events[e]=this.events[e].filter(e=>e!==t)}},api:null,error:null},c=document.getElementsByTagName("head")[0],l=c.insertBefore;c.insertBefore=function(e,t){e.href&&e.href.indexOf("//fonts.googleapis.com/css?family=Roboto")>-1||l.call(c,e,t)},window.gm_authFailure=function(){u.error=new Error("Gmap encountered auth error. See console for more details."),u.api=null,u.emitter.emit("change")},window.rgm_mapLoaded=function(){null==u.error&&(u.api=window.google.maps),u.emitter.emit("change")};var f=function(){var e=o.useState(u.api),t=Object(r.a)(e,2),n=t[0],c=t[1],l="AIzaSyBC4njLnT0Gr9Lo_necn1pHL5OdzSMHXHY";var f=function(e){var t=o.useState("loading"),n=Object(r.a)(t,2),u=n[0],c=n[1];return o.useEffect((function(){var t=!0,n=function(){a.set(e,"done"),t&&c("done")},r=function(){a.set(e,"failed"),t&&c("failed")},o=a.get(e);if(null==o){var u=document.createElement("script");u.async=!0,u.defer=!0,u.importance="low",u.src=e,u.addEventListener("load",n),u.addEventListener("error",r),a.set(e,"loading"),i.set(e,u),document.body&&document.body.appendChild(u)}if("loading"===o){var l=i.get(e);if(l)return l.addEventListener("load",n),l.addEventListener("error",r),function(){l.removeEventListener("load",n),l.removeEventListener("error",r)}}return"done"===o&&c("done"),"failed"===o&&c("failed"),function(){t=!1}}),[e]),u}("https://maps.googleapis.com/maps/api/js?key=".concat(l,"&libraries=places&callback=rgm_mapLoaded"));return o.useEffect((function(){return null==n&&null!=u.api&&c(u.api),u.emitter.on("change",(function(){c(u.api)}))}),[n,f]),n}},FskC:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return p})),n.d(t,"default",(function(){return v}));var r=n("KQm4"),o=n("q1tI"),a=n("tjUo"),i=n("CZrd"),u=n("TOXp"),c=n("qKvR"),l=(o.createElement,{zoom:13,center:{lat:46.22212,lng:6.14156},gestureHandling:"greedy",clickableIcons:!1}),f={fillColor:"transparent",strokeColor:"white",strokeWeight:6,strokeOpacity:1,cursor:"hand"},s={fillColor:"transparent",strokeColor:"blue",strokeWeight:2,strokeOpacity:1,cursor:"hand"},d=function(e){var t=e.children,n=Object(a.d)().map;return o.useEffect((function(){if(n){var e=f,o=n.data.addListener("addfeature",(function(t){n.data.overrideStyle(t.feature,e)})),a=[];return a.push.apply(a,Object(r.a)(n.data.addGeoJson(t))),e=s,a.push.apply(a,Object(r.a)(n.data.addGeoJson(t))),o.remove(),function(){a.forEach((function(e){return n.data.remove(e)}))}}}),[n,t]),null},p=!0;function v(){var e=Object(i.a)();return Object(c.c)(u.g,{value:.75},e&&Object(c.c)(a.a,{api:e,options:l},Object(c.c)(d,null,m)))}var m={type:"Feature",geometry:{type:"MultiPolygon",coordinates:[[[[6.166701,46.224467],[6.165925,46.222455],[6.1619,46.215224],[6.155766,46.217359],[6.151245,46.216282],[6.151087,46.215332],[6.150485,46.215169],[6.1509,46.214227],[6.150811,46.214036],[6.14938,46.214312],[6.149151,46.214004],[6.1494,46.213891],[6.148978,46.213333],[6.149199,46.213245],[6.149111,46.213092],[6.148458,46.213299],[6.148611,46.213478],[6.148046,46.213725],[6.14791,46.213552],[6.146289,46.214207],[6.146402,46.214354],[6.146021,46.214516],[6.145856,46.214388],[6.145229,46.214795],[6.145365,46.214889],[6.144523,46.215537],[6.140424,46.215467],[6.140431,46.214992],[6.140001,46.214473],[6.140495,46.21431],[6.140344,46.213461],[6.139154,46.211822],[6.138298,46.212118],[6.137611,46.212103],[6.137077,46.212714],[6.136788,46.212579],[6.136173,46.21166],[6.136793,46.21125],[6.136433,46.210877],[6.135918,46.210767],[6.136631,46.210466],[6.136455,46.210278],[6.135874,46.210503],[6.135143,46.210281],[6.135855,46.209982],[6.135933,46.208969],[6.135134,46.20892],[6.135138,46.20837],[6.1349,46.208432],[6.134884,46.208718],[6.133399,46.209087],[6.133291,46.20889],[6.132011,46.209076],[6.131403,46.209387],[6.131373,46.209693],[6.130356,46.210561],[6.129696,46.210564],[6.12969,46.210818],[6.129369,46.21082],[6.129375,46.211045],[6.129688,46.211046],[6.129688,46.211504],[6.12927,46.211496],[6.129271,46.212405],[6.129008,46.212523],[6.129764,46.213246],[6.129716,46.213667],[6.128841,46.213665],[6.127625,46.214193],[6.126112,46.214342],[6.125746,46.214032],[6.123964,46.214867],[6.124292,46.215172],[6.121739,46.215671],[6.119726,46.216991],[6.120624,46.217769],[6.122338,46.216739],[6.123393,46.21744],[6.124565,46.217508],[6.125727,46.218289],[6.126099,46.218014],[6.127509,46.219169],[6.128824,46.220001],[6.129532,46.219521],[6.129983,46.219778],[6.129575,46.22013],[6.130436,46.220747],[6.130256,46.220853],[6.130676,46.221195],[6.130523,46.221425],[6.130902,46.221833],[6.13211,46.221023],[6.13235,46.221201],[6.132201,46.221296],[6.133093,46.221871],[6.132963,46.221989],[6.133836,46.222724],[6.132913,46.223371],[6.133926,46.224313],[6.132755,46.22515],[6.131471,46.22413],[6.131008,46.224101],[6.129367,46.225315],[6.128872,46.225032],[6.127637,46.22607],[6.127951,46.226179],[6.128475,46.225855],[6.130178,46.227029],[6.12872,46.228056],[6.127686,46.227353],[6.126543,46.22806],[6.127468,46.228897],[6.127947,46.2286],[6.128718,46.228867],[6.131004,46.230645],[6.131211,46.230302],[6.132606,46.230318],[6.133546,46.231009],[6.133079,46.231614],[6.132808,46.231513],[6.132062,46.232115],[6.132336,46.232319],[6.131997,46.232603],[6.132238,46.232774],[6.131869,46.233055],[6.132281,46.233307],[6.132955,46.23278],[6.134405,46.233909],[6.135986,46.234248],[6.136307,46.234193],[6.137361,46.233404],[6.13613,46.232762],[6.136964,46.231991],[6.138166,46.231296],[6.135923,46.230627],[6.136604,46.230069],[6.13744,46.228493],[6.137943,46.228181],[6.139237,46.228034],[6.13947,46.228662],[6.138837,46.228839],[6.138821,46.22961],[6.138533,46.230292],[6.142864,46.2293],[6.143428,46.230636],[6.143698,46.230099],[6.145883,46.228727],[6.145576,46.227293],[6.146152,46.226945],[6.146293,46.227101],[6.146995,46.226354],[6.148206,46.226053],[6.148941,46.227792],[6.166701,46.224467]]]]}}},KQm4:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("a3WO");var o=n("BsWD");function a(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},ODXe:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("BsWD");function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},a3WO:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},tjUo:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return d}));var r=n("ODXe"),o=n("q1tI"),a=n("qKvR"),i=(o.createElement,o.createContext(null)),u=(function(){var e={}}(),{width:"100%",height:"100%"}),c=o.forwardRef((function(e,t){var n=o.useRef(null),c=o.useRef(!1),l=o.useState(null),f=Object(r.a)(l,2),s=f[0],d=f[1];o.useImperativeHandle(t,(function(){return s}),[s]),o.useEffect((function(){if(n.current&&!c.current){var t=new e.api.Map(n.current,"function"===typeof e.options?e.options(n.current):e.options);return c.current=!0,d(t),function(){}}}),[e.api,e.options]);var p=o.useMemo((function(){return{map:s,api:e.api}}),[s,e.api]);return Object(a.c)(i.Provider,{value:p},Object(a.c)("div",{style:u,ref:n}),s&&e.children)})),l=function(){return o.useContext(i)},f=n("i8i4"),s=(o.createElement,function(e){return e.children}),d=function(e){var t,n=l(),i=n.api,u=n.map,c=o.useRef(2),s=o.Children.toArray(null!==(t=e.children)&&void 0!==t?t:[]),d=o.useState(null),p=Object(r.a)(d,2),v=p[0],m=p[1],y=o.useRef([]),b=o.useRef([]),h=function(e){return Math.round(e*c.current)/c.current};if(o.useLayoutEffect((function(){y.current=s.map((function(e){return{lat:e.props.lat,lng:e.props.lng}}))})),o.useEffect((function(){if(i){c.current=window.devicePixelRatio;var e=new i.OverlayView,t=null;return e.onAdd=function(){t=document.createElement("div"),e.getPanes().floatPane.appendChild(t),m({element:t,view:e})},e.onRemove=function(){if(null!=t){var e=t.parentNode;null!=e&&e.removeChild(t),m(null)}},e.draw=function(){var t=e.getProjection();y.current.forEach((function(e,n){var r=e.lat,o=e.lng,a=b.current[n].current;if(null!=a){var u=t.fromLatLngToDivPixel(new i.LatLng(r,o));a.style.left=h(u.x)+"px",a.style.top=h(u.y)+"px"}}))},e.setMap(u),function(){e.setMap(null)}}}),[i,u]),null!=v&&null!=s&&null!=i){var g=v.view.getProjection();return f.createPortal(s.map((function(t,n){var r=g.fromLatLngToDivPixel(new i.LatLng(t.props.lat,t.props.lng));return null==b.current[n]&&(b.current[n]={current:null}),Object(a.c)("div",{key:t.key,ref:b.current[n],style:{position:"absolute",left:h(r.x),top:h(r.y),display:"grid",gridTemplate:"0/0"}},t,!0===e.debug&&Object(a.c)("div",{style:{position:"absolute",borderRadius:"100%",width:4,height:4,left:-2,top:-2,opacity:.8,boxShadow:"0 0 0 2px blue, 0 0 0 4px white, 0 0 0 6px blue"}}))})),v.element)}return null}}},[["B1n1",1,2,3,0,4]]]);