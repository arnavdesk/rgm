webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/google-map.js":
/*!***************************!*\
  !*** ./src/google-map.js ***!
  \***************************/
/*! exports provided: Map, useMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Map\", function() { return Map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useMap\", function() { return useMap; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/ice/ext/npm/rgm/src/google-map.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"];\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n// $FlowFixMe\nvar MapContext = react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"](null);\n\nvar warnOnce = function () {\n  var map = {};\n  return function (str) {\n    if (map[str] == null) {\n      map[str] = true;\n      console.warn(str.replace(/^\\s+/gm, ''));\n    }\n  };\n}();\n\nvar STYLE = {\n  width: '100%',\n  height: '100%'\n};\nvar Map = react__WEBPACK_IMPORTED_MODULE_2__[\"forwardRef\"](_c = _s(function (_ref, ref) {\n  _s();\n\n  var api = _ref.api,\n      options = _ref.options,\n      children = _ref.children;\n  var element = react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"](null);\n  var firstTimeRef = react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"](true);\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"](null),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      ctx = _React$useState2[0],\n      setCtx = _React$useState2[1];\n\n  if (true) {\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    var apiRef = react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"](api); // eslint-disable-next-line react-hooks/rules-of-hooks\n\n    var optionsRef = react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"](options);\n\n    if (apiRef.current !== api) {\n      warnOnce(\"\\n          \\\"api\\\" prop of <Map> element has changed.\\n\\n\\n          If it's desired behaviour please remount your component\\n          using key={hash(api)} on your component.\\n        \"); // Reinit map in case use has changed loader in dev\n\n      firstTimeRef.current = true;\n    } // JSON.stringify to work with React Refresh well\n\n\n    if (typeof options !== 'function' && JSON.stringify(optionsRef.current) !== JSON.stringify(options)) {\n      warnOnce(\"\\n          \\\"options\\\" prop of <Map> element has changed.\\n\\n          If it's desired behaviour please use imperative api, i.e.\\n          mapRef.current.apply(map =>  map.setOptions({...}));\\n        \"); // Reinit map in case user changed options to find proper option\n\n      firstTimeRef.current = true;\n    }\n  }\n\n  react__WEBPACK_IMPORTED_MODULE_2__[\"useImperativeHandle\"](ref, function () {\n    return ctx ? ctx.map : null;\n  }, [ctx]);\n  react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"](function () {\n    if (firstTimeRef.current && element.current) {\n      var map = new api.Map(element.current, // We clone options object because Google adding new fields into it\n      // this is not an expected behaviour in modern world ;-)\n      _objectSpread({}, typeof options === 'function' ? options(element.current) : options));\n      firstTimeRef.current = false;\n      setCtx({\n        map: map,\n        api: api\n      });\n      return function () {};\n    }\n  }, [api, options]);\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\", {\n    style: STYLE,\n    ref: element,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 9\n    }\n  }), ctx && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(MapContext.Provider, {\n    value: ctx,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 11\n    }\n  }, children));\n}, \"d/nlbQyOHdXC5DtcsNZMguY0MkE=\", false, function () {\n  return [react__WEBPACK_IMPORTED_MODULE_2__[\"useImperativeHandle\"]];\n}));\n_c2 = Map;\nvar useMap = function useMap() {\n  _s2();\n\n  return react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"](MapContext);\n};\n\n_s2(useMap, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Map$React.forwardRef\");\n$RefreshReg$(_c2, \"Map\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ29vZ2xlLW1hcC5qcz81NWVmIl0sIm5hbWVzIjpbIk1hcENvbnRleHQiLCJSZWFjdCIsIndhcm5PbmNlIiwibWFwIiwic3RyIiwiY29uc29sZSIsIndhcm4iLCJyZXBsYWNlIiwiU1RZTEUiLCJ3aWR0aCIsImhlaWdodCIsIk1hcCIsInJlZiIsImFwaSIsIm9wdGlvbnMiLCJjaGlsZHJlbiIsImVsZW1lbnQiLCJmaXJzdFRpbWVSZWYiLCJjdHgiLCJzZXRDdHgiLCJhcGlSZWYiLCJvcHRpb25zUmVmIiwiY3VycmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VNYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFvQkE7QUFDQSxJQUFNQSxVQUFVLEdBQUdDLG1EQUFBLENBQXFDLElBQXJDLENBQW5COztBQU1BLElBQU1DLFFBQVEsR0FBSSxZQUFNO0FBQ3RCLE1BQU1DLEdBQUcsR0FBRyxFQUFaO0FBRUEsU0FBTyxVQUFDQyxHQUFELEVBQWlCO0FBQ3RCLFFBQUlELEdBQUcsQ0FBQ0MsR0FBRCxDQUFILElBQVksSUFBaEIsRUFBc0I7QUFDcEJELFNBQUcsQ0FBQ0MsR0FBRCxDQUFILEdBQVcsSUFBWDtBQUNBQyxhQUFPLENBQUNDLElBQVIsQ0FBYUYsR0FBRyxDQUFDRyxPQUFKLENBQVksUUFBWixFQUFzQixFQUF0QixDQUFiO0FBQ0Q7QUFDRixHQUxEO0FBTUQsQ0FUZ0IsRUFBakI7O0FBV0EsSUFBTUMsS0FBSyxHQUFHO0FBQUVDLE9BQUssRUFBRSxNQUFUO0FBQWlCQyxRQUFNLEVBQUU7QUFBekIsQ0FBZDtBQUVPLElBQU1DLEdBQUcsR0FBR1YsZ0RBQUEsU0FDakIsZ0JBQTZCVyxHQUE3QixFQUFxQztBQUFBOztBQUFBLE1BQWxDQyxHQUFrQyxRQUFsQ0EsR0FBa0M7QUFBQSxNQUE3QkMsT0FBNkIsUUFBN0JBLE9BQTZCO0FBQUEsTUFBcEJDLFFBQW9CLFFBQXBCQSxRQUFvQjtBQUNuQyxNQUFNQyxPQUFPLEdBQUdmLDRDQUFBLENBQWEsSUFBYixDQUFoQjtBQUNBLE1BQU1nQixZQUFZLEdBQUdoQiw0Q0FBQSxDQUFhLElBQWIsQ0FBckI7O0FBRm1DLHdCQUdiQSw4Q0FBQSxDQUFzQyxJQUF0QyxDQUhhO0FBQUE7QUFBQSxNQUc1QmlCLEdBSDRCO0FBQUEsTUFHdkJDLE1BSHVCOztBQUtuQyxZQUEyQztBQUN6QztBQUNBLFFBQU1DLE1BQU0sR0FBR25CLDRDQUFBLENBQWFZLEdBQWIsQ0FBZixDQUZ5QyxDQUd6Qzs7QUFDQSxRQUFNUSxVQUFVLEdBQUdwQiw0Q0FBQSxDQUFhYSxPQUFiLENBQW5COztBQUVBLFFBQUlNLE1BQU0sQ0FBQ0UsT0FBUCxLQUFtQlQsR0FBdkIsRUFBNEI7QUFDMUJYLGNBQVEsK0xBQVIsQ0FEMEIsQ0FRMUI7O0FBQ0FlLGtCQUFZLENBQUNLLE9BQWIsR0FBdUIsSUFBdkI7QUFDRCxLQWhCd0MsQ0FrQnpDOzs7QUFDQSxRQUNFLE9BQU9SLE9BQVAsS0FBbUIsVUFBbkIsSUFDQVMsSUFBSSxDQUFDQyxTQUFMLENBQWVILFVBQVUsQ0FBQ0MsT0FBMUIsTUFBdUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVixPQUFmLENBRnpDLEVBR0U7QUFDQVosY0FBUSwrTUFBUixDQURBLENBT0E7O0FBQ0FlLGtCQUFZLENBQUNLLE9BQWIsR0FBdUIsSUFBdkI7QUFDRDtBQUNGOztBQUVEckIsMkRBQUEsQ0FBMEJXLEdBQTFCLEVBQStCO0FBQUEsV0FBT00sR0FBRyxHQUFHQSxHQUFHLENBQUNmLEdBQVAsR0FBYSxJQUF2QjtBQUFBLEdBQS9CLEVBQTZELENBQUNlLEdBQUQsQ0FBN0Q7QUFFQWpCLGlEQUFBLENBQWdCLFlBQU07QUFDcEIsUUFBSWdCLFlBQVksQ0FBQ0ssT0FBYixJQUF3Qk4sT0FBTyxDQUFDTSxPQUFwQyxFQUE2QztBQUMzQyxVQUFNbkIsR0FBRyxHQUFHLElBQUlVLEdBQUcsQ0FBQ0YsR0FBUixDQUNWSyxPQUFPLENBQUNNLE9BREUsRUFFVjtBQUNBO0FBSFUsd0JBS0osT0FBT1IsT0FBUCxLQUFtQixVQUFuQixHQUNBQSxPQUFPLENBQUNFLE9BQU8sQ0FBQ00sT0FBVCxDQURQLEdBRUFSLE9BUEksRUFBWjtBQVdBRyxrQkFBWSxDQUFDSyxPQUFiLEdBQXVCLEtBQXZCO0FBRUFILFlBQU0sQ0FBQztBQUFFaEIsV0FBRyxFQUFIQSxHQUFGO0FBQU9VLFdBQUcsRUFBSEE7QUFBUCxPQUFELENBQU47QUFFQSxhQUFPLFlBQU0sQ0FBRSxDQUFmO0FBQ0Q7QUFDRixHQW5CRCxFQW1CRyxDQUFDQSxHQUFELEVBQU1DLE9BQU4sQ0FuQkg7QUFxQkEsU0FDRSxnSEFDRTtBQUFLLFNBQUssRUFBRU4sS0FBWjtBQUFtQixPQUFHLEVBQUVRLE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVHRSxHQUFHLElBQ0YsMERBQUMsVUFBRCxDQUFZLFFBQVo7QUFBcUIsU0FBSyxFQUFFQSxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtDSCxRQUFsQyxDQUhKLENBREY7QUFRRCxDQXZFZ0I7QUFBQSxVQXdDZmQseURBeENlO0FBQUEsR0FBWjtNQUFNVSxHO0FBMEVOLElBQU1jLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUE7O0FBQUEsU0FBTXhCLGdEQUFBLENBQWlCRCxVQUFqQixDQUFOO0FBQUEsQ0FBZjs7SUFBTXlCLE0iLCJmaWxlIjoiLi9zcmMvZ29vZ2xlLW1hcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHtcbiAgR29vZ2xlTWFwLFxuICBHb29nbGVNYXBPcHRpb25zLFxuICBHb29nbGVNYXBzQXBpLFxufSBmcm9tICcuL2dvb2dsZS10eXBlcy5qcyc7XG5cbnR5cGUgTWFwUHJvcHMgPSB7fFxuICAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UvbWFwI01hcE9wdGlvbnNcbiAgb3B0aW9uczogR29vZ2xlTWFwT3B0aW9ucyB8IChIVE1MRGl2RWxlbWVudCA9PiBHb29nbGVNYXBPcHRpb25zKSxcbiAgLy8gd2luZG93Lmdvb2dsZS5tYXBzXG4gIGFwaTogR29vZ2xlTWFwc0FwaSxcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxufH07XG5cbnR5cGUgTWFwQ29udGV4dFR5cGUgPSB7fFxuICBhcGk6IEdvb2dsZU1hcHNBcGksXG4gIG1hcDogR29vZ2xlTWFwLFxufH07XG5cbi8vICRGbG93Rml4TWVcbmNvbnN0IE1hcENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PE1hcENvbnRleHRUeXBlPigobnVsbDogYW55KSk7XG5cbmV4cG9ydCB0eXBlIEdvb2dsZU1hcFJlZiA9IFJlYWN0LkVsZW1lbnRSZWY8XG4gIFJlYWN0LkFic3RyYWN0Q29tcG9uZW50PE1hcFByb3BzLCBHb29nbGVNYXA+LFxuPjtcblxuY29uc3Qgd2Fybk9uY2UgPSAoKCkgPT4ge1xuICBjb25zdCBtYXAgPSB7fTtcblxuICByZXR1cm4gKHN0cjogc3RyaW5nKSA9PiB7XG4gICAgaWYgKG1hcFtzdHJdID09IG51bGwpIHtcbiAgICAgIG1hcFtzdHJdID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUud2FybihzdHIucmVwbGFjZSgvXlxccysvZ20sICcnKSk7XG4gICAgfVxuICB9O1xufSkoKTtcblxuY29uc3QgU1RZTEUgPSB7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH07XG5cbmV4cG9ydCBjb25zdCBNYXAgPSBSZWFjdC5mb3J3YXJkUmVmPE1hcFByb3BzLCBHb29nbGVNYXA+KFxuICAoeyBhcGksIG9wdGlvbnMsIGNoaWxkcmVuIH0sIHJlZikgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gICAgY29uc3QgZmlyc3RUaW1lUmVmID0gUmVhY3QudXNlUmVmKHRydWUpO1xuICAgIGNvbnN0IFtjdHgsIHNldEN0eF0gPSBSZWFjdC51c2VTdGF0ZTxNYXBDb250ZXh0VHlwZSB8IG51bGw+KG51bGwpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgY29uc3QgYXBpUmVmID0gUmVhY3QudXNlUmVmKGFwaSk7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgIGNvbnN0IG9wdGlvbnNSZWYgPSBSZWFjdC51c2VSZWYob3B0aW9ucyk7XG5cbiAgICAgIGlmIChhcGlSZWYuY3VycmVudCAhPT0gYXBpKSB7XG4gICAgICAgIHdhcm5PbmNlKGBcbiAgICAgICAgICBcImFwaVwiIHByb3Agb2YgPE1hcD4gZWxlbWVudCBoYXMgY2hhbmdlZC5cblxuXG4gICAgICAgICAgSWYgaXQncyBkZXNpcmVkIGJlaGF2aW91ciBwbGVhc2UgcmVtb3VudCB5b3VyIGNvbXBvbmVudFxuICAgICAgICAgIHVzaW5nIGtleT17aGFzaChhcGkpfSBvbiB5b3VyIGNvbXBvbmVudC5cbiAgICAgICAgYCk7XG4gICAgICAgIC8vIFJlaW5pdCBtYXAgaW4gY2FzZSB1c2UgaGFzIGNoYW5nZWQgbG9hZGVyIGluIGRldlxuICAgICAgICBmaXJzdFRpbWVSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEpTT04uc3RyaW5naWZ5IHRvIHdvcmsgd2l0aCBSZWFjdCBSZWZyZXNoIHdlbGxcbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIG9wdGlvbnMgIT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkob3B0aW9uc1JlZi5jdXJyZW50KSAhPT0gSlNPTi5zdHJpbmdpZnkob3B0aW9ucylcbiAgICAgICkge1xuICAgICAgICB3YXJuT25jZShgXG4gICAgICAgICAgXCJvcHRpb25zXCIgcHJvcCBvZiA8TWFwPiBlbGVtZW50IGhhcyBjaGFuZ2VkLlxuXG4gICAgICAgICAgSWYgaXQncyBkZXNpcmVkIGJlaGF2aW91ciBwbGVhc2UgdXNlIGltcGVyYXRpdmUgYXBpLCBpLmUuXG4gICAgICAgICAgbWFwUmVmLmN1cnJlbnQuYXBwbHkobWFwID0+ICBtYXAuc2V0T3B0aW9ucyh7Li4ufSkpO1xuICAgICAgICBgKTtcbiAgICAgICAgLy8gUmVpbml0IG1hcCBpbiBjYXNlIHVzZXIgY2hhbmdlZCBvcHRpb25zIHRvIGZpbmQgcHJvcGVyIG9wdGlvblxuICAgICAgICBmaXJzdFRpbWVSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+IChjdHggPyBjdHgubWFwIDogbnVsbCksIFtjdHhdKTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoZmlyc3RUaW1lUmVmLmN1cnJlbnQgJiYgZWxlbWVudC5jdXJyZW50KSB7XG4gICAgICAgIGNvbnN0IG1hcCA9IG5ldyBhcGkuTWFwKFxuICAgICAgICAgIGVsZW1lbnQuY3VycmVudCxcbiAgICAgICAgICAvLyBXZSBjbG9uZSBvcHRpb25zIG9iamVjdCBiZWNhdXNlIEdvb2dsZSBhZGRpbmcgbmV3IGZpZWxkcyBpbnRvIGl0XG4gICAgICAgICAgLy8gdGhpcyBpcyBub3QgYW4gZXhwZWN0ZWQgYmVoYXZpb3VyIGluIG1vZGVybiB3b3JsZCA7LSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICAuLi4odHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgPyBvcHRpb25zKGVsZW1lbnQuY3VycmVudClcbiAgICAgICAgICAgICAgOiBvcHRpb25zKSxcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuXG4gICAgICAgIGZpcnN0VGltZVJlZi5jdXJyZW50ID0gZmFsc2U7XG5cbiAgICAgICAgc2V0Q3R4KHsgbWFwLCBhcGkgfSk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHt9O1xuICAgICAgfVxuICAgIH0sIFthcGksIG9wdGlvbnNdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZGl2IHN0eWxlPXtTVFlMRX0gcmVmPXtlbGVtZW50fSAvPlxuICAgICAgICB7Y3R4ICYmIChcbiAgICAgICAgICA8TWFwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y3R4fT57Y2hpbGRyZW59PC9NYXBDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfSxcbik7XG5cbmV4cG9ydCBjb25zdCB1c2VNYXAgPSAoKSA9PiBSZWFjdC51c2VDb250ZXh0KE1hcENvbnRleHQpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/google-map.js\n");

/***/ })

})