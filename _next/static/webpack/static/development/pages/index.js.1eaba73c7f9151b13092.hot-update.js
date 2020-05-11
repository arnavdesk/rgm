webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Rgm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rgm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rgm */ \"./src/rgm.js\");\n/* harmony import */ var _dev_src_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dev-src/hooks */ \"./dev-src/hooks.js\");\n/* harmony import */ var _dev_src_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dev-src/controls */ \"./dev-src/controls.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nvar _jsxFileName = \"/Users/ice/ext/npm/rgm/pages/index.js\",\n    _s = $RefreshSig$(),\n    _this = undefined;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\"; }\n\n/**\n * <!-- {\"order\": 1} -->\n *\n * # RGM - React Google Map\n *\n * Tiny but very powerful React Google Map.\n * It allows you to render any React component on the Google Map,\n * and provides easy access to native google map api.\n *\n * Minimal example.\n */\n\n\n\n // https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions\n\n\nvar MAP_OPTIONS = {\n  zoom: 9,\n  center: {\n    lat: 59.936,\n    lng: 30.314\n  },\n  gestureHandling: 'greedy',\n  clickableIcons: false,\n  disableDefaultUI: true\n};\nvar __N_SSG = true;\nfunction Rgm() {\n  _s();\n\n  var api = Object(_dev_src_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useGoogleApiLoader\"])();\n  var options = react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"](function () {\n    return MAP_OPTIONS;\n  }, []);\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_dev_src_controls__WEBPACK_IMPORTED_MODULE_3__[\"Ratio\"], {\n    value: 3 / 4,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, api && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(rgm__WEBPACK_IMPORTED_MODULE_1__[\"Map\"], {\n    api: api,\n    options: options,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(rgm__WEBPACK_IMPORTED_MODULE_1__[\"Overlay\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(rgm__WEBPACK_IMPORTED_MODULE_1__[\"Marker\"], {\n    lat: MAP_OPTIONS.center.lat,\n    lng: MAP_OPTIONS.center.lng,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(CircleMarker, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 15\n    }\n  })))));\n}\n\n_s(Rgm, \"snDnfGa02Cw33llgLw1bUXf4pcQ=\", false, function () {\n  return [_dev_src_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useGoogleApiLoader\"]];\n});\n\n_c = Rgm;\n\nvar _ref = false ? undefined : {\n  name: \"12b2mk0-CircleMarker\",\n  styles: \"place-self:center center;width:50px;height:50px;border-radius:100%;background-color:white;border:3px solid red;display:flex;align-items:center;justify-content:center;;label:CircleMarker;\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pY2UvZXh0L25wbS9yZ20vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RZIiwiZmlsZSI6Ii9Vc2Vycy9pY2UvZXh0L25wbS9yZ20vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG4vKipcbiAqIDwhLS0ge1wib3JkZXJcIjogMX0gLS0+XG4gKlxuICogIyBSR00gLSBSZWFjdCBHb29nbGUgTWFwXG4gKlxuICogVGlueSBidXQgdmVyeSBwb3dlcmZ1bCBSZWFjdCBHb29nbGUgTWFwLlxuICogSXQgYWxsb3dzIHlvdSB0byByZW5kZXIgYW55IFJlYWN0IGNvbXBvbmVudCBvbiB0aGUgR29vZ2xlIE1hcCxcbiAqIGFuZCBwcm92aWRlcyBlYXN5IGFjY2VzcyB0byBuYXRpdmUgZ29vZ2xlIG1hcCBhcGkuXG4gKlxuICogTWluaW1hbCBleGFtcGxlLlxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1hcCwgT3ZlcmxheSwgTWFya2VyIH0gZnJvbSAncmdtJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgdXNlR29vZ2xlQXBpTG9hZGVyIH0gZnJvbSAnLi4vZGV2LXNyYy9ob29rcyc7XG5pbXBvcnQgeyBSYXRpbyB9IGZyb20gJy4uL2Rldi1zcmMvY29udHJvbHMnO1xuXG4vLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UvbWFwI01hcE9wdGlvbnNcbmNvbnN0IE1BUF9PUFRJT05TID0ge1xuICB6b29tOiA5LFxuICBjZW50ZXI6IHtcbiAgICBsYXQ6IDU5LjkzNixcbiAgICBsbmc6IDMwLjMxNCxcbiAgfSxcbiAgZ2VzdHVyZUhhbmRsaW5nOiAnZ3JlZWR5JyxcbiAgY2xpY2thYmxlSWNvbnM6IGZhbHNlLFxuICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmdtKCkge1xuICBjb25zdCBhcGkgPSB1c2VHb29nbGVBcGlMb2FkZXIoKTtcbiAgY29uc3Qgb3B0aW9ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gTUFQX09QVElPTlMsIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8UmF0aW8gdmFsdWU9ezMgLyA0fT5cbiAgICAgIHthcGkgJiYgKFxuICAgICAgICA8TWFwIGFwaT17YXBpfSBvcHRpb25zPXtvcHRpb25zfT5cbiAgICAgICAgICA8T3ZlcmxheT5cbiAgICAgICAgICAgIDxNYXJrZXIgbGF0PXtNQVBfT1BUSU9OUy5jZW50ZXIubGF0fSBsbmc9e01BUF9PUFRJT05TLmNlbnRlci5sbmd9PlxuICAgICAgICAgICAgICA8Q2lyY2xlTWFya2VyIC8+XG4gICAgICAgICAgICA8L01hcmtlcj5cbiAgICAgICAgICA8L092ZXJsYXk+XG4gICAgICAgIDwvTWFwPlxuICAgICAgKX1cbiAgICA8L1JhdGlvPlxuICApO1xufVxuXG5jb25zdCBDaXJjbGVNYXJrZXIgPSAoKSA9PiAoXG4gIDxkaXZcbiAgICBjc3M9e2Nzc2BcbiAgICAgIHBsYWNlLXNlbGY6IGNlbnRlciBjZW50ZXI7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYH1cbiAgPlxuICAgIFJHTVxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgLy8gVGhlIGJlc3QgaXMgdG8gcGxhY2UgdGhpcyBtZXRob2QgYXQgX2FwcC5qcyBidXQgdGhpcyBkb2Vzbid0IHdvcmsgbm93XG4gIGNvbnN0IGRvYyA9IGF3YWl0IGltcG9ydCgnLi4vZGV2LXNyYy9kb2MnKTtcbiAgcmV0dXJuIGRvYy5nZXRTdGF0aWNQcm9wcygpO1xufTtcbiJdfQ== */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar CircleMarker = function CircleMarker() {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\", {\n    css: _ref,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 3\n    }\n  }, \"RGM\");\n};\n\n_c2 = CircleMarker;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Rgm\");\n$RefreshReg$(_c2, \"CircleMarker\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIk1BUF9PUFRJT05TIiwiem9vbSIsImNlbnRlciIsImxhdCIsImxuZyIsImdlc3R1cmVIYW5kbGluZyIsImNsaWNrYWJsZUljb25zIiwiZGlzYWJsZURlZmF1bHRVSSIsIlJnbSIsImFwaSIsInVzZUdvb2dsZUFwaUxvYWRlciIsIm9wdGlvbnMiLCJSZWFjdCIsIkNpcmNsZU1hcmtlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBRUE7Q0FHQTs7O0FBQ0EsSUFBTUEsV0FBVyxHQUFHO0FBQ2xCQyxNQUFJLEVBQUUsQ0FEWTtBQUVsQkMsUUFBTSxFQUFFO0FBQ05DLE9BQUcsRUFBRSxNQURDO0FBRU5DLE9BQUcsRUFBRTtBQUZDLEdBRlU7QUFNbEJDLGlCQUFlLEVBQUUsUUFOQztBQU9sQkMsZ0JBQWMsRUFBRSxLQVBFO0FBUWxCQyxrQkFBZ0IsRUFBRTtBQVJBLENBQXBCOztBQVdlLFNBQVNDLEdBQVQsR0FBZTtBQUFBOztBQUM1QixNQUFNQyxHQUFHLEdBQUdDLHlFQUFrQixFQUE5QjtBQUNBLE1BQU1DLE9BQU8sR0FBR0MsNkNBQUEsQ0FBYztBQUFBLFdBQU1aLFdBQU47QUFBQSxHQUFkLEVBQWlDLEVBQWpDLENBQWhCO0FBQ0EsU0FDRSwwREFBQyx1REFBRDtBQUFPLFNBQUssRUFBRSxJQUFJLENBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1MsR0FBRyxJQUNGLDBEQUFDLHVDQUFEO0FBQUssT0FBRyxFQUFFQSxHQUFWO0FBQWUsV0FBTyxFQUFFRSxPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLDBEQUFDLDBDQUFEO0FBQVEsT0FBRyxFQUFFWCxXQUFXLENBQUNFLE1BQVosQ0FBbUJDLEdBQWhDO0FBQXFDLE9BQUcsRUFBRUgsV0FBVyxDQUFDRSxNQUFaLENBQW1CRSxHQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLENBRkosQ0FERjtBQWFEOztHQWhCdUJJLEc7VUFDVkUsaUU7OztLQURVRixHOzs7Ozs7Ozs7QUFrQnhCLElBQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsU0FDbkI7QUFDRSxPQUFHLE1BREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURtQjtBQUFBLENBQXJCOztNQUFNQSxZIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG4vKipcbiAqIDwhLS0ge1wib3JkZXJcIjogMX0gLS0+XG4gKlxuICogIyBSR00gLSBSZWFjdCBHb29nbGUgTWFwXG4gKlxuICogVGlueSBidXQgdmVyeSBwb3dlcmZ1bCBSZWFjdCBHb29nbGUgTWFwLlxuICogSXQgYWxsb3dzIHlvdSB0byByZW5kZXIgYW55IFJlYWN0IGNvbXBvbmVudCBvbiB0aGUgR29vZ2xlIE1hcCxcbiAqIGFuZCBwcm92aWRlcyBlYXN5IGFjY2VzcyB0byBuYXRpdmUgZ29vZ2xlIG1hcCBhcGkuXG4gKlxuICogTWluaW1hbCBleGFtcGxlLlxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1hcCwgT3ZlcmxheSwgTWFya2VyIH0gZnJvbSAncmdtJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgdXNlR29vZ2xlQXBpTG9hZGVyIH0gZnJvbSAnLi4vZGV2LXNyYy9ob29rcyc7XG5pbXBvcnQgeyBSYXRpbyB9IGZyb20gJy4uL2Rldi1zcmMvY29udHJvbHMnO1xuXG4vLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UvbWFwI01hcE9wdGlvbnNcbmNvbnN0IE1BUF9PUFRJT05TID0ge1xuICB6b29tOiA5LFxuICBjZW50ZXI6IHtcbiAgICBsYXQ6IDU5LjkzNixcbiAgICBsbmc6IDMwLjMxNCxcbiAgfSxcbiAgZ2VzdHVyZUhhbmRsaW5nOiAnZ3JlZWR5JyxcbiAgY2xpY2thYmxlSWNvbnM6IGZhbHNlLFxuICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmdtKCkge1xuICBjb25zdCBhcGkgPSB1c2VHb29nbGVBcGlMb2FkZXIoKTtcbiAgY29uc3Qgb3B0aW9ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gTUFQX09QVElPTlMsIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8UmF0aW8gdmFsdWU9ezMgLyA0fT5cbiAgICAgIHthcGkgJiYgKFxuICAgICAgICA8TWFwIGFwaT17YXBpfSBvcHRpb25zPXtvcHRpb25zfT5cbiAgICAgICAgICA8T3ZlcmxheT5cbiAgICAgICAgICAgIDxNYXJrZXIgbGF0PXtNQVBfT1BUSU9OUy5jZW50ZXIubGF0fSBsbmc9e01BUF9PUFRJT05TLmNlbnRlci5sbmd9PlxuICAgICAgICAgICAgICA8Q2lyY2xlTWFya2VyIC8+XG4gICAgICAgICAgICA8L01hcmtlcj5cbiAgICAgICAgICA8L092ZXJsYXk+XG4gICAgICAgIDwvTWFwPlxuICAgICAgKX1cbiAgICA8L1JhdGlvPlxuICApO1xufVxuXG5jb25zdCBDaXJjbGVNYXJrZXIgPSAoKSA9PiAoXG4gIDxkaXZcbiAgICBjc3M9e2Nzc2BcbiAgICAgIHBsYWNlLXNlbGY6IGNlbnRlciBjZW50ZXI7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYH1cbiAgPlxuICAgIFJHTVxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgLy8gVGhlIGJlc3QgaXMgdG8gcGxhY2UgdGhpcyBtZXRob2QgYXQgX2FwcC5qcyBidXQgdGhpcyBkb2Vzbid0IHdvcmsgbm93XG4gIGNvbnN0IGRvYyA9IGF3YWl0IGltcG9ydCgnLi4vZGV2LXNyYy9kb2MnKTtcbiAgcmV0dXJuIGRvYy5nZXRTdGF0aWNQcm9wcygpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})