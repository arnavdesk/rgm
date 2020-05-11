webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/react-marker.js":
/*!*****************************!*\
  !*** ./src/react-marker.js ***!
  \*****************************/
/*! exports provided: Marker, Overlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Marker\", function() { return Marker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Overlay\", function() { return Overlay; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _google_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./google-map */ \"./src/google-map.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/ice/ext/npm/rgm/src/react-marker.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];\n\n\n\n\nvar Marker = function Marker(props) {\n  return props.children;\n};\n_c = Marker;\nvar Overlay = function Overlay(props) {\n  _s();\n\n  var _useMap = Object(_google_map__WEBPACK_IMPORTED_MODULE_3__[\"useMap\"])(),\n      api = _useMap.api,\n      map = _useMap.map; // because I have 2 ;-), doesnt matter here, will be set before 1st usage\n\n\n  var pixelRatioRef = react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"](2); // $FlowFixMe no block level $FlowFixMe so splitted on 2 lines\n\n  var anyChildren = react__WEBPACK_IMPORTED_MODULE_1__[\"Children\"].toArray(props.children || []);\n  var children = anyChildren;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"](null),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      overlay = _React$useState2[0],\n      setOverlay = _React$useState2[1];\n\n  var childrenLatLngRefs = react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"]([]);\n  var childrenDivRefs = react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"]([]);\n\n  var subPixelRound = function subPixelRound(v) {\n    return Math.round(v * pixelRatioRef.current) / pixelRatioRef.current;\n  }; // We can't use useEffect here because it causes glitches\n  // We need ref to access children in draw\n\n\n  react__WEBPACK_IMPORTED_MODULE_1__[\"useLayoutEffect\"](function () {\n    childrenLatLngRefs.current = children;\n    console.log('set', childrenDivRefs.current);\n  }); // Create overlay https://developers.google.com/maps/documentation/javascript/examples/overlay-simple\n\n  react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"](function () {\n    if (api) {\n      pixelRatioRef.current = window.devicePixelRatio;\n      var overlayView = new api.OverlayView();\n      var elt = null;\n\n      overlayView.onAdd = function () {\n        elt = document.createElement('div');\n        var panes = overlayView.getPanes(); // on all other panes there is issues with events like hover etc\n\n        panes.floatPane.appendChild(elt);\n        setOverlay({\n          element: elt,\n          view: overlayView\n        });\n      };\n\n      overlayView.onRemove = function () {\n        if (elt != null) {\n          var _elt = elt,\n              parentNode = _elt.parentNode;\n\n          if (parentNode != null) {\n            // same as panes.overlayMouseTarget.removeChild\n            parentNode.removeChild(elt);\n          }\n\n          setOverlay(null);\n        }\n      };\n\n      overlayView.draw = function () {\n        var projection = overlayView.getProjection();\n        var latLngs = childrenLatLngRefs.current;\n        latLngs.forEach(function (_ref, index) {\n          var _ref$props = _ref.props,\n              lat = _ref$props.lat,\n              lng = _ref$props.lng;\n          var childElt = childrenDivRefs.current[index].current;\n\n          if (childElt != null) {\n            var pos = projection.fromLatLngToDivPixel(new api.LatLng(lat, lng)); // Move react markers directly changing dom element position\n            // Element is created by us, not by library user, so no issues\n\n            childElt.style.left = subPixelRound(pos.x) + 'px';\n            childElt.style.top = subPixelRound(pos.y) + 'px';\n          }\n        });\n      };\n\n      overlayView.setMap(map);\n      return function () {\n        console.log('dispose');\n        overlayView.setMap(null);\n      };\n    }\n  }, [api, map]);\n\n  if (overlay != null && children != null && api != null) {\n    var projection = overlay.view.getProjection();\n    return react_dom__WEBPACK_IMPORTED_MODULE_2__[\"createPortal\"](children.map(function (ch, index) {\n      var pos = projection.fromLatLngToDivPixel(new api.LatLng(ch.props.lat, ch.props.lng)); // Its not a side effect, its just a cache for refs\n      // instead of creating it initially like Array(MAX_POSSIBLE_MARKERS), we just extend it here\n\n      if (childrenDivRefs.current[index] == null) {\n        childrenDivRefs.current[index] = {\n          current: null\n        };\n      }\n\n      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\", {\n        key: ch.key,\n        ref: childrenDivRefs.current[index],\n        style: {\n          position: 'absolute',\n          left: subPixelRound(pos.x),\n          top: subPixelRound(pos.y),\n          display: 'grid',\n          gridTemplate: '0/0'\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 128,\n          columnNumber: 11\n        }\n      }, ch, ( true) && props.debug === true && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\", {\n        style: {\n          position: 'absolute',\n          borderRadius: '100%',\n          width: 4,\n          height: 4,\n          left: -2,\n          top: -2,\n          opacity: 0.8,\n          boxShadow: '0 0 0 2px blue, 0 0 0 4px white, 0 0 0 6px blue'\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 143,\n          columnNumber: 17\n        }\n      }));\n    }), overlay.element);\n  }\n\n  return null;\n};\n\n_s(Overlay, \"F00XFvw7+2iegNCGaekic3KVwkU=\", false, function () {\n  return [_google_map__WEBPACK_IMPORTED_MODULE_3__[\"useMap\"]];\n});\n\n_c2 = Overlay;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Marker\");\n$RefreshReg$(_c2, \"Overlay\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3QtbWFya2VyLmpzP2ViZDYiXSwibmFtZXMiOlsiTWFya2VyIiwicHJvcHMiLCJjaGlsZHJlbiIsIk92ZXJsYXkiLCJ1c2VNYXAiLCJhcGkiLCJtYXAiLCJwaXhlbFJhdGlvUmVmIiwiUmVhY3QiLCJhbnlDaGlsZHJlbiIsInRvQXJyYXkiLCJvdmVybGF5Iiwic2V0T3ZlcmxheSIsImNoaWxkcmVuTGF0TG5nUmVmcyIsImNoaWxkcmVuRGl2UmVmcyIsInN1YlBpeGVsUm91bmQiLCJ2IiwiTWF0aCIsInJvdW5kIiwiY3VycmVudCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwib3ZlcmxheVZpZXciLCJPdmVybGF5VmlldyIsImVsdCIsIm9uQWRkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicGFuZXMiLCJnZXRQYW5lcyIsImZsb2F0UGFuZSIsImFwcGVuZENoaWxkIiwiZWxlbWVudCIsInZpZXciLCJvblJlbW92ZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImRyYXciLCJwcm9qZWN0aW9uIiwiZ2V0UHJvamVjdGlvbiIsImxhdExuZ3MiLCJmb3JFYWNoIiwiaW5kZXgiLCJsYXQiLCJsbmciLCJjaGlsZEVsdCIsInBvcyIsImZyb21MYXRMbmdUb0RpdlBpeGVsIiwiTGF0TG5nIiwic3R5bGUiLCJsZWZ0IiwieCIsInRvcCIsInkiLCJzZXRNYXAiLCJSZWFjdERPTSIsImNoIiwia2V5IiwicG9zaXRpb24iLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlIiwiZGVidWciLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsImhlaWdodCIsIm9wYWNpdHkiLCJib3hTaGFkb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBOztBQVFPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBd0I7QUFDNUMsU0FBT0EsS0FBSyxDQUFD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QUFPLElBQVA7QUFDRCxDQTdJTTs7R0FBTS9CLE87VUFDVUMsa0Q7OztNQURWRCxPIiwiZmlsZSI6Ii4vc3JjL3JlYWN0LW1hcmtlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyB1c2VNYXAgfSBmcm9tICcuL2dvb2dsZS1tYXAnO1xuXG50eXBlIE1hcmtlclByb3BzID0ge3xcbiAgbGF0OiBudW1iZXIsXG4gIGxuZzogbnVtYmVyLFxuICBjaGlsZHJlbjogUmVhY3QuTm9kZSxcbnx9O1xuXG5leHBvcnQgY29uc3QgTWFya2VyID0gKHByb3BzOiBNYXJrZXJQcm9wcykgPT4ge1xuICByZXR1cm4gcHJvcHMuY2hpbGRyZW47XG59O1xuXG50eXBlIE92ZXJsYXlQcm9wcyA9IHt8XG4gIGNoaWxkcmVuPzogUmVhY3QuQ2hpbGRyZW5BcnJheTxudWxsIHwgYm9vbGVhbiB8IFJlYWN0LkVsZW1lbnQ8dHlwZW9mIE1hcmtlcj4+LFxuICAvLyBEZWJ1ZyBpcyB1c2VkIHRvIGNlbnRlciBtYXJrZXJzIHJpZ2h0XG4gIGRlYnVnPzogYm9vbGVhbixcbnx9O1xuXG5leHBvcnQgY29uc3QgT3ZlcmxheSA9IChwcm9wczogT3ZlcmxheVByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYXBpLCBtYXAgfSA9IHVzZU1hcCgpO1xuICAvLyBiZWNhdXNlIEkgaGF2ZSAyIDstKSwgZG9lc250IG1hdHRlciBoZXJlLCB3aWxsIGJlIHNldCBiZWZvcmUgMXN0IHVzYWdlXG4gIGNvbnN0IHBpeGVsUmF0aW9SZWYgPSBSZWFjdC51c2VSZWYoMik7XG5cbiAgLy8gJEZsb3dGaXhNZSBubyBibG9jayBsZXZlbCAkRmxvd0ZpeE1lIHNvIHNwbGl0dGVkIG9uIDIgbGluZXNcbiAgY29uc3QgYW55Q2hpbGRyZW4gPSAoUmVhY3QuQ2hpbGRyZW4udG9BcnJheShwcm9wcy5jaGlsZHJlbiB8fCBbXSk6IGFueSk7XG5cbiAgY29uc3QgY2hpbGRyZW46ICRSZWFkT25seUFycmF5PFJlYWN0LkVsZW1lbnQ8dHlwZW9mIE1hcmtlcj4+ID0gYW55Q2hpbGRyZW47XG5cbiAgY29uc3QgW292ZXJsYXksIHNldE92ZXJsYXldID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgY2hpbGRyZW5MYXRMbmdSZWZzID0gUmVhY3QudXNlUmVmPFxuICAgICRSZWFkT25seUFycmF5PFJlYWN0LkVsZW1lbnQ8dHlwZW9mIE1hcmtlcj4+LFxuICA+KFtdKTtcblxuICBjb25zdCBjaGlsZHJlbkRpdlJlZnMgPSBSZWFjdC51c2VSZWYoW10pO1xuXG4gIGNvbnN0IHN1YlBpeGVsUm91bmQgPSB2ID0+XG4gICAgTWF0aC5yb3VuZCh2ICogcGl4ZWxSYXRpb1JlZi5jdXJyZW50KSAvIHBpeGVsUmF0aW9SZWYuY3VycmVudDtcblxuICAvLyBXZSBjYW4ndCB1c2UgdXNlRWZmZWN0IGhlcmUgYmVjYXVzZSBpdCBjYXVzZXMgZ2xpdGNoZXNcbiAgLy8gV2UgbmVlZCByZWYgdG8gYWNjZXNzIGNoaWxkcmVuIGluIGRyYXdcbiAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBjaGlsZHJlbkxhdExuZ1JlZnMuY3VycmVudCA9IGNoaWxkcmVuO1xuICAgIGNvbnNvbGUubG9nKCdzZXQnLCBjaGlsZHJlbkRpdlJlZnMuY3VycmVudCk7XG4gIH0pO1xuXG4gIC8vIENyZWF0ZSBvdmVybGF5IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L2V4YW1wbGVzL292ZXJsYXktc2ltcGxlXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFwaSkge1xuICAgICAgcGl4ZWxSYXRpb1JlZi5jdXJyZW50ID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cbiAgICAgIGNvbnN0IG92ZXJsYXlWaWV3ID0gbmV3IGFwaS5PdmVybGF5VmlldygpO1xuICAgICAgbGV0IGVsdCA9IG51bGw7XG5cbiAgICAgIG92ZXJsYXlWaWV3Lm9uQWRkID0gKCkgPT4ge1xuICAgICAgICBlbHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdmFyIHBhbmVzID0gb3ZlcmxheVZpZXcuZ2V0UGFuZXMoKTtcbiAgICAgICAgLy8gb24gYWxsIG90aGVyIHBhbmVzIHRoZXJlIGlzIGlzc3VlcyB3aXRoIGV2ZW50cyBsaWtlIGhvdmVyIGV0Y1xuICAgICAgICBwYW5lcy5mbG9hdFBhbmUuYXBwZW5kQ2hpbGQoZWx0KTtcblxuICAgICAgICBzZXRPdmVybGF5KHtcbiAgICAgICAgICBlbGVtZW50OiBlbHQsXG4gICAgICAgICAgdmlldzogb3ZlcmxheVZpZXcsXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgb3ZlcmxheVZpZXcub25SZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChlbHQgIT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHsgcGFyZW50Tm9kZSB9ID0gZWx0O1xuICAgICAgICAgIGlmIChwYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgcGFuZXMub3ZlcmxheU1vdXNlVGFyZ2V0LnJlbW92ZUNoaWxkXG4gICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsdCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNldE92ZXJsYXkobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIG92ZXJsYXlWaWV3LmRyYXcgPSAoKSA9PiB7XG4gICAgICAgIHZhciBwcm9qZWN0aW9uID0gb3ZlcmxheVZpZXcuZ2V0UHJvamVjdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IGxhdExuZ3MgPSBjaGlsZHJlbkxhdExuZ1JlZnMuY3VycmVudDtcblxuICAgICAgICBsYXRMbmdzLmZvckVhY2goKHsgcHJvcHM6IHsgbGF0LCBsbmcgfSB9LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgY3VycmVudDogY2hpbGRFbHQgfSA9IGNoaWxkcmVuRGl2UmVmcy5jdXJyZW50W2luZGV4XTtcbiAgICAgICAgICBpZiAoY2hpbGRFbHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcG9zID0gcHJvamVjdGlvbi5mcm9tTGF0TG5nVG9EaXZQaXhlbChcbiAgICAgICAgICAgICAgbmV3IGFwaS5MYXRMbmcobGF0LCBsbmcpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIE1vdmUgcmVhY3QgbWFya2VycyBkaXJlY3RseSBjaGFuZ2luZyBkb20gZWxlbWVudCBwb3NpdGlvblxuICAgICAgICAgICAgLy8gRWxlbWVudCBpcyBjcmVhdGVkIGJ5IHVzLCBub3QgYnkgbGlicmFyeSB1c2VyLCBzbyBubyBpc3N1ZXNcbiAgICAgICAgICAgIGNoaWxkRWx0LnN0eWxlLmxlZnQgPSBzdWJQaXhlbFJvdW5kKHBvcy54KSArICdweCc7XG4gICAgICAgICAgICBjaGlsZEVsdC5zdHlsZS50b3AgPSBzdWJQaXhlbFJvdW5kKHBvcy55KSArICdweCc7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIG92ZXJsYXlWaWV3LnNldE1hcChtYXApO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZGlzcG9zZScpO1xuICAgICAgICBvdmVybGF5Vmlldy5zZXRNYXAobnVsbCk7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW2FwaSwgbWFwXSk7XG5cbiAgaWYgKG92ZXJsYXkgIT0gbnVsbCAmJiBjaGlsZHJlbiAhPSBudWxsICYmIGFwaSAhPSBudWxsKSB7XG4gICAgY29uc3QgcHJvamVjdGlvbiA9IG92ZXJsYXkudmlldy5nZXRQcm9qZWN0aW9uKCk7XG5cbiAgICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKFxuICAgICAgY2hpbGRyZW4ubWFwKChjaCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcG9zID0gcHJvamVjdGlvbi5mcm9tTGF0TG5nVG9EaXZQaXhlbChcbiAgICAgICAgICBuZXcgYXBpLkxhdExuZyhjaC5wcm9wcy5sYXQsIGNoLnByb3BzLmxuZyksXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gSXRzIG5vdCBhIHNpZGUgZWZmZWN0LCBpdHMganVzdCBhIGNhY2hlIGZvciByZWZzXG4gICAgICAgIC8vIGluc3RlYWQgb2YgY3JlYXRpbmcgaXQgaW5pdGlhbGx5IGxpa2UgQXJyYXkoTUFYX1BPU1NJQkxFX01BUktFUlMpLCB3ZSBqdXN0IGV4dGVuZCBpdCBoZXJlXG4gICAgICAgIGlmIChjaGlsZHJlbkRpdlJlZnMuY3VycmVudFtpbmRleF0gPT0gbnVsbCkge1xuICAgICAgICAgIGNoaWxkcmVuRGl2UmVmcy5jdXJyZW50W2luZGV4XSA9IHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IChudWxsOiBudWxsIHwgSFRNTERpdkVsZW1lbnQpLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17Y2gua2V5fVxuICAgICAgICAgICAgcmVmPXtjaGlsZHJlbkRpdlJlZnMuY3VycmVudFtpbmRleF19XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgbGVmdDogc3ViUGl4ZWxSb3VuZChwb3MueCksXG4gICAgICAgICAgICAgIHRvcDogc3ViUGl4ZWxSb3VuZChwb3MueSksXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlOiAnMC8wJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NofVxuICAgICAgICAgICAgeyhwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nIHx8XG4gICAgICAgICAgICAgIHByb2Nlc3MuZW52LkRPQ1VNRU5UQVRJT04gPT09ICd0cnVlJykgJiZcbiAgICAgICAgICAgICAgcHJvcHMuZGVidWcgPT09IHRydWUgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTIsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTIsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOCxcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OlxuICAgICAgICAgICAgICAgICAgICAgICcwIDAgMCAycHggYmx1ZSwgMCAwIDAgNHB4IHdoaXRlLCAwIDAgMCA2cHggYmx1ZScsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KSxcbiAgICAgIG92ZXJsYXkuZWxlbWVudCxcbiAgICApO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/react-marker.js\n");

/***/ })

})