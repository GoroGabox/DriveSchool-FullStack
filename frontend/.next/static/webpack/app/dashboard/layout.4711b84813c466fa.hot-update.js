"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/layout",{

/***/ "(app-pages-browser)/./src/utils/PrivateRoute.js":
/*!***********************************!*\
  !*** ./src/utils/PrivateRoute.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useAuthContext */ \"(app-pages-browser)/./src/hooks/useAuthContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ var _s = $RefreshSig$();\n\n\nconst PrivateRoute = (param)=>{\n    let { children } = param;\n    _s();\n    let { user } = (0,_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_1__.useAuthContext)();\n    console.log(user);\n    if (user) {\n        if (user.user_type == \"student\") {\n            return (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.redirect)(\"/dashboard/student\");\n        }\n        if (user.user_type == \"seller\") {\n            return (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.redirect)(\"/dashboard/seller\");\n        }\n        if (user.user_type == \"professor\") {\n            return (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.redirect)(\"/dashboard/professor\");\n        }\n    }\n    return (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.redirect)(\"/login\");\n    return children;\n};\n_s(PrivateRoute, \"E3A4Z1umPxUwUr1MhXzPwmHHqrw=\", false, function() {\n    return [\n        _hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_1__.useAuthContext\n    ];\n});\n_c = PrivateRoute;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PrivateRoute);\nvar _c;\n$RefreshReg$(_c, \"PrivateRoute\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy91dGlscy9Qcml2YXRlUm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDMkM7QUFDYztBQUV6RCxNQUFNRSxlQUFlO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUNoQyxJQUFJLEVBQUVDLElBQUksRUFBRSxHQUFHSCxxRUFBY0E7SUFDN0JJLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixJQUFJQSxNQUFNO1FBQ1IsSUFBSUEsS0FBS0csU0FBUyxJQUFJLFdBQVc7WUFDL0IsT0FBT1AseURBQVFBLENBQUM7UUFDbEI7UUFDQSxJQUFJSSxLQUFLRyxTQUFTLElBQUksVUFBVTtZQUM5QixPQUFPUCx5REFBUUEsQ0FBQztRQUNsQjtRQUNBLElBQUlJLEtBQUtHLFNBQVMsSUFBSSxhQUFhO1lBQ2pDLE9BQU9QLHlEQUFRQSxDQUFDO1FBQ2xCO0lBQ0o7SUFDQSxPQUFPQSx5REFBUUEsQ0FBQztJQUNkLE9BQU9HO0FBQ1Q7R0FoQk1EOztRQUNXRCxpRUFBY0E7OztLQUR6QkM7QUFrQk4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL1ByaXZhdGVSb3V0ZS5qcz9mYWRhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VBdXRoQ29udGV4dCB9IGZyb20gXCIuLi9ob29rcy91c2VBdXRoQ29udGV4dFwiO1xuXG5jb25zdCBQcml2YXRlUm91dGUgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGxldCB7IHVzZXIgfSA9IHVzZUF1dGhDb250ZXh0KCk7XG4gIGNvbnNvbGUubG9nKHVzZXIpO1xuICBpZiAodXNlcikge1xuICAgIGlmICh1c2VyLnVzZXJfdHlwZSA9PSBcInN0dWRlbnRcIikge1xuICAgICAgcmV0dXJuIHJlZGlyZWN0KFwiL2Rhc2hib2FyZC9zdHVkZW50XCIpO1xuICAgIH1cbiAgICBpZiAodXNlci51c2VyX3R5cGUgPT0gXCJzZWxsZXJcIikge1xuICAgICAgcmV0dXJuIHJlZGlyZWN0KFwiL2Rhc2hib2FyZC9zZWxsZXJcIik7XG4gICAgfVxuICAgIGlmICh1c2VyLnVzZXJfdHlwZSA9PSBcInByb2Zlc3NvclwiKSB7XG4gICAgICByZXR1cm4gcmVkaXJlY3QoXCIvZGFzaGJvYXJkL3Byb2Zlc3NvclwiKTtcbiAgICB9XG59XG5yZXR1cm4gcmVkaXJlY3QoXCIvbG9naW5cIik7XG4gIHJldHVybiBjaGlsZHJlbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaXZhdGVSb3V0ZTtcbiJdLCJuYW1lcyI6WyJyZWRpcmVjdCIsInVzZUF1dGhDb250ZXh0IiwiUHJpdmF0ZVJvdXRlIiwiY2hpbGRyZW4iLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInVzZXJfdHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/utils/PrivateRoute.js\n"));

/***/ })

});