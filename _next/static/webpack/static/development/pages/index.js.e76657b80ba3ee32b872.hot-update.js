webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Rgm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rgm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rgm */ \"./src/rgm.js\");\n/* harmony import */ var _dev_src_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dev-src/hooks */ \"./dev-src/hooks.js\");\n/* harmony import */ var _dev_src_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dev-src/controls */ \"./dev-src/controls.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nvar _jsxFileName = \"/Users/ice/ext/npm/rgm/pages/index.js\",\n    _s = $RefreshSig$(),\n    _this = undefined;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\"; }\n\n/**\n * <!-- {\"order\": 1} -->\n *\n * # RGM - React Google Map\n *\n * Tiny but very powerful React Google Map.\n * It allows you to render any React component on the Google Map,\n * and provides easy access to native google map api.\n *\n * Minimal example.\n */\n\n\n\n // https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions\n\n\nvar MAP_OPTIONS = {\n  zoom: 9,\n  center: {\n    lat: 59.936,\n    lng: 30.314\n  },\n  gestureHandling: 'greedy',\n  clickableIcons: false,\n  disableDefaultUI: true\n};\nvar __N_SSG = true;\nfunction Rgm() {\n  _s();\n\n  var api = Object(_dev_src_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useGoogleApiLoader\"])();\n  console.log(21211);\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_dev_src_controls__WEBPACK_IMPORTED_MODULE_3__[\"Ratio\"], {\n    value: 3 / 4,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, api && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(rgm__WEBPACK_IMPORTED_MODULE_1__[\"Map\"], {\n    api: api,\n    options: MAP_OPTIONS,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(rgm__WEBPACK_IMPORTED_MODULE_1__[\"Overlay\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(rgm__WEBPACK_IMPORTED_MODULE_1__[\"Marker\"], {\n    lat: MAP_OPTIONS.center.lat,\n    lng: MAP_OPTIONS.center.lng,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(CircleMarker, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 15\n    }\n  })))));\n}\n\n_s(Rgm, \"//oo/L5gihJ5yV1THVei418lYHE=\", false, function () {\n  return [_dev_src_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useGoogleApiLoader\"]];\n});\n\n_c = Rgm;\n\nvar _ref = false ? undefined : {\n  name: \"12b2mk0-CircleMarker\",\n  styles: \"place-self:center center;width:50px;height:50px;border-radius:100%;background-color:white;border:3px solid red;display:flex;align-items:center;justify-content:center;;label:CircleMarker;\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pY2UvZXh0L25wbS9yZ20vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RZIiwiZmlsZSI6Ii9Vc2Vycy9pY2UvZXh0L25wbS9yZ20vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG4vKipcbiAqIDwhLS0ge1wib3JkZXJcIjogMX0gLS0+XG4gKlxuICogIyBSR00gLSBSZWFjdCBHb29nbGUgTWFwXG4gKlxuICogVGlueSBidXQgdmVyeSBwb3dlcmZ1bCBSZWFjdCBHb29nbGUgTWFwLlxuICogSXQgYWxsb3dzIHlvdSB0byByZW5kZXIgYW55IFJlYWN0IGNvbXBvbmVudCBvbiB0aGUgR29vZ2xlIE1hcCxcbiAqIGFuZCBwcm92aWRlcyBlYXN5IGFjY2VzcyB0byBuYXRpdmUgZ29vZ2xlIG1hcCBhcGkuXG4gKlxuICogTWluaW1hbCBleGFtcGxlLlxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1hcCwgT3ZlcmxheSwgTWFya2VyIH0gZnJvbSAncmdtJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgdXNlR29vZ2xlQXBpTG9hZGVyIH0gZnJvbSAnLi4vZGV2LXNyYy9ob29rcyc7XG5pbXBvcnQgeyBSYXRpbyB9IGZyb20gJy4uL2Rldi1zcmMvY29udHJvbHMnO1xuXG4vLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UvbWFwI01hcE9wdGlvbnNcbmNvbnN0IE1BUF9PUFRJT05TID0ge1xuICB6b29tOiA5LFxuICBjZW50ZXI6IHtcbiAgICBsYXQ6IDU5LjkzNixcbiAgICBsbmc6IDMwLjMxNCxcbiAgfSxcbiAgZ2VzdHVyZUhhbmRsaW5nOiAnZ3JlZWR5JyxcbiAgY2xpY2thYmxlSWNvbnM6IGZhbHNlLFxuICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmdtKCkge1xuICBjb25zdCBhcGkgPSB1c2VHb29nbGVBcGlMb2FkZXIoKTtcblxuICBjb25zb2xlLmxvZygyMTIxMSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmF0aW8gdmFsdWU9ezMgLyA0fT5cbiAgICAgIHthcGkgJiYgKFxuICAgICAgICA8TWFwIGFwaT17YXBpfSBvcHRpb25zPXtNQVBfT1BUSU9OU30+XG4gICAgICAgICAgPE92ZXJsYXk+XG4gICAgICAgICAgICA8TWFya2VyIGxhdD17TUFQX09QVElPTlMuY2VudGVyLmxhdH0gbG5nPXtNQVBfT1BUSU9OUy5jZW50ZXIubG5nfT5cbiAgICAgICAgICAgICAgPENpcmNsZU1hcmtlciAvPlxuICAgICAgICAgICAgPC9NYXJrZXI+XG4gICAgICAgICAgPC9PdmVybGF5PlxuICAgICAgICA8L01hcD5cbiAgICAgICl9XG4gICAgPC9SYXRpbz5cbiAgKTtcbn1cblxuY29uc3QgQ2lyY2xlTWFya2VyID0gKCkgPT4gKFxuICA8ZGl2XG4gICAgY3NzPXtjc3NgXG4gICAgICBwbGFjZS1zZWxmOiBjZW50ZXIgY2VudGVyO1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGB9XG4gID5cbiAgICBSR01cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIC8vIFRoZSBiZXN0IGlzIHRvIHBsYWNlIHRoaXMgbWV0aG9kIGF0IF9hcHAuanMgYnV0IHRoaXMgZG9lc24ndCB3b3JrIG5vd1xuICBjb25zdCBkb2MgPSBhd2FpdCBpbXBvcnQoJy4uL2Rldi1zcmMvZG9jJyk7XG4gIHJldHVybiBkb2MuZ2V0U3RhdGljUHJvcHMoKTtcbn07XG4iXX0= */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar CircleMarker = function CircleMarker() {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\", {\n    css: _ref,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 3\n    }\n  }, \"RGM\");\n};\n\n_c2 = CircleMarker;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Rgm\");\n$RefreshReg$(_c2, \"CircleMarker\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIk1BUF9PUFRJT05TIiwiem9vbSIsImNlbnRlciIsImxhdCIsImxuZyIsImdlc3R1cmVIYW5kbGluZyIsImNsaWNrYWJsZUljb25zIiwiZGlzYWJsZURlZmF1bHRVSSIsIlJnbSIsImFwaSIsInVzZUdvb2dsZUFwaUxvYWRlciIsImNvbnNvbGUiLCJsb2ciLCJDaXJjbGVNYXJrZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUVBO0NBR0E7OztBQUNBLElBQU1BLFdBQVcsR0FBRztBQUNsQkMsTUFBSSxFQUFFLENBRFk7QUFFbEJDLFFBQU0sRUFBRTtBQUNOQyxPQUFHLEVBQUUsTUFEQztBQUVOQyxPQUFHLEVBQUU7QUFGQyxHQUZVO0FBTWxCQyxpQkFBZSxFQUFFLFFBTkM7QUFPbEJDLGdCQUFjLEVBQUUsS0FQRTtBQVFsQkMsa0JBQWdCLEVBQUU7QUFSQSxDQUFwQjs7QUFXZSxTQUFTQyxHQUFULEdBQWU7QUFBQTs7QUFDNUIsTUFBTUMsR0FBRyxHQUFHQyx5RUFBa0IsRUFBOUI7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWjtBQUVBLFNBQ0UsMERBQUMsdURBQUQ7QUFBTyxTQUFLLEVBQUUsSUFBSSxDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILEdBQUcsSUFDRiwwREFBQyx1Q0FBRDtBQUFLLE9BQUcsRUFBRUEsR0FBVjtBQUFlLFdBQU8sRUFBRVQsV0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLDBEQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwwREFBQywwQ0FBRDtBQUFRLE9BQUcsRUFBRUEsV0FBVyxDQUFDRSxNQUFaLENBQW1CQyxHQUFoQztBQUFxQyxPQUFHLEVBQUVILFdBQVcsQ0FBQ0UsTUFBWixDQUFtQkUsR0FBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLDBEQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERixDQUZKLENBREY7QUFhRDs7R0FsQnVCSSxHO1VBQ1ZFLGlFOzs7S0FEVUYsRzs7Ozs7Ozs7O0FBb0J4QixJQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFNBQ25CO0FBQ0UsT0FBRyxNQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEbUI7QUFBQSxDQUFyQjs7TUFBTUEsWSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuLyoqXG4gKiA8IS0tIHtcIm9yZGVyXCI6IDF9IC0tPlxuICpcbiAqICMgUkdNIC0gUmVhY3QgR29vZ2xlIE1hcFxuICpcbiAqIFRpbnkgYnV0IHZlcnkgcG93ZXJmdWwgUmVhY3QgR29vZ2xlIE1hcC5cbiAqIEl0IGFsbG93cyB5b3UgdG8gcmVuZGVyIGFueSBSZWFjdCBjb21wb25lbnQgb24gdGhlIEdvb2dsZSBNYXAsXG4gKiBhbmQgcHJvdmlkZXMgZWFzeSBhY2Nlc3MgdG8gbmF0aXZlIGdvb2dsZSBtYXAgYXBpLlxuICpcbiAqIE1pbmltYWwgZXhhbXBsZS5cbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNYXAsIE92ZXJsYXksIE1hcmtlciB9IGZyb20gJ3JnbSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IHVzZUdvb2dsZUFwaUxvYWRlciB9IGZyb20gJy4uL2Rldi1zcmMvaG9va3MnO1xuaW1wb3J0IHsgUmF0aW8gfSBmcm9tICcuLi9kZXYtc3JjL2NvbnRyb2xzJztcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlL21hcCNNYXBPcHRpb25zXG5jb25zdCBNQVBfT1BUSU9OUyA9IHtcbiAgem9vbTogOSxcbiAgY2VudGVyOiB7XG4gICAgbGF0OiA1OS45MzYsXG4gICAgbG5nOiAzMC4zMTQsXG4gIH0sXG4gIGdlc3R1cmVIYW5kbGluZzogJ2dyZWVkeScsXG4gIGNsaWNrYWJsZUljb25zOiBmYWxzZSxcbiAgZGlzYWJsZURlZmF1bHRVSTogdHJ1ZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJnbSgpIHtcbiAgY29uc3QgYXBpID0gdXNlR29vZ2xlQXBpTG9hZGVyKCk7XG5cbiAgY29uc29sZS5sb2coMjEyMTEpO1xuXG4gIHJldHVybiAoXG4gICAgPFJhdGlvIHZhbHVlPXszIC8gNH0+XG4gICAgICB7YXBpICYmIChcbiAgICAgICAgPE1hcCBhcGk9e2FwaX0gb3B0aW9ucz17TUFQX09QVElPTlN9PlxuICAgICAgICAgIDxPdmVybGF5PlxuICAgICAgICAgICAgPE1hcmtlciBsYXQ9e01BUF9PUFRJT05TLmNlbnRlci5sYXR9IGxuZz17TUFQX09QVElPTlMuY2VudGVyLmxuZ30+XG4gICAgICAgICAgICAgIDxDaXJjbGVNYXJrZXIgLz5cbiAgICAgICAgICAgIDwvTWFya2VyPlxuICAgICAgICAgIDwvT3ZlcmxheT5cbiAgICAgICAgPC9NYXA+XG4gICAgICApfVxuICAgIDwvUmF0aW8+XG4gICk7XG59XG5cbmNvbnN0IENpcmNsZU1hcmtlciA9ICgpID0+IChcbiAgPGRpdlxuICAgIGNzcz17Y3NzYFxuICAgICAgcGxhY2Utc2VsZjogY2VudGVyIGNlbnRlcjtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBgfVxuICA+XG4gICAgUkdNXG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICAvLyBUaGUgYmVzdCBpcyB0byBwbGFjZSB0aGlzIG1ldGhvZCBhdCBfYXBwLmpzIGJ1dCB0aGlzIGRvZXNuJ3Qgd29yayBub3dcbiAgY29uc3QgZG9jID0gYXdhaXQgaW1wb3J0KCcuLi9kZXYtc3JjL2RvYycpO1xuICByZXR1cm4gZG9jLmdldFN0YXRpY1Byb3BzKCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})