"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/cart/page",{

/***/ "(app-pages-browser)/./src/app/cart/page.js":
/*!******************************!*\
  !*** ./src/app/cart/page.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sells; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_useShoppingContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useShoppingContext */ \"(app-pages-browser)/./src/hooks/useShoppingContext.js\");\n/* harmony import */ var _components_Cursos_CursosList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Cursos/CursosList */ \"(app-pages-browser)/./src/components/Cursos/CursosList.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Sells() {\n    _s();\n    let { removeFromKart, products } = (0,_hooks_useShoppingContext__WEBPACK_IMPORTED_MODULE_1__.useShoppingContext)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen w-full flex-col items-center justify-evenly px-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: products.map((product)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\",\n                            children: product.name\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Trabajo\\\\AlVolante Web-Rest-App\\\\frontend\\\\src\\\\app\\\\cart\\\\page.js\",\n                            lineNumber: 14,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\",\n                            children: product.name\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Trabajo\\\\AlVolante Web-Rest-App\\\\frontend\\\\src\\\\app\\\\cart\\\\page.js\",\n                            lineNumber: 17,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>removeFromKart(product.id),\n                            className: \"mt-5 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n                            children: \"Eliminar del carro\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Trabajo\\\\AlVolante Web-Rest-App\\\\frontend\\\\src\\\\app\\\\cart\\\\page.js\",\n                            lineNumber: 20,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, product.id, true, {\n                    fileName: \"E:\\\\Trabajo\\\\AlVolante Web-Rest-App\\\\frontend\\\\src\\\\app\\\\cart\\\\page.js\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"E:\\\\Trabajo\\\\AlVolante Web-Rest-App\\\\frontend\\\\src\\\\app\\\\cart\\\\page.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Trabajo\\\\AlVolante Web-Rest-App\\\\frontend\\\\src\\\\app\\\\cart\\\\page.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_s(Sells, \"CCgWmkAqgKAKZmU1ivBYa+bw9/s=\", false, function() {\n    return [\n        _hooks_useShoppingContext__WEBPACK_IMPORTED_MODULE_1__.useShoppingContext\n    ];\n});\n_c = Sells;\nvar _c;\n$RefreshReg$(_c, \"Sells\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY2FydC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVvRTtBQUNSO0FBRTdDLFNBQVNFOztJQUN0QixJQUFJLEVBQUVDLGNBQWMsRUFBRUMsUUFBUSxFQUFFLEdBQUdKLDZFQUFrQkE7SUFDckQscUJBQ0UsOERBQUNLO1FBQUtDLFdBQVU7a0JBQ2QsNEVBQUNDO3NCQUNFSCxTQUFTSSxHQUFHLENBQUMsQ0FBQ0M7Z0JBQ2IscUJBQ0UsOERBQUNGOztzQ0FDQyw4REFBQ0E7NEJBQUlELFdBQVU7c0NBQ1pHLFFBQVFDLElBQUk7Ozs7OztzQ0FFZiw4REFBQ0g7NEJBQUlELFdBQVU7c0NBQ1pHLFFBQVFDLElBQUk7Ozs7OztzQ0FFZiw4REFBQ0M7NEJBQ0NDLFNBQVMsSUFBTVQsZUFBZU0sUUFBUUksRUFBRTs0QkFDeENQLFdBQVU7c0NBQ1g7Ozs7Ozs7bUJBVk9HLFFBQVFJLEVBQUU7Ozs7O1lBZXhCOzs7Ozs7Ozs7OztBQUlSO0dBMUJ3Qlg7O1FBQ2FGLHlFQUFrQkE7OztLQUQvQkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jYXJ0L3BhZ2UuanM/M2Y5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVNob3BwaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VTaG9wcGluZ0NvbnRleHRcIjtcclxuaW1wb3J0IEN1cnNvc0xpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ3Vyc29zL0N1cnNvc0xpc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlbGxzKCkge1xyXG4gIGxldCB7IHJlbW92ZUZyb21LYXJ0LCBwcm9kdWN0cyB9ID0gdXNlU2hvcHBpbmdDb250ZXh0KCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIHctZnVsbCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1ldmVubHkgcHgtOFwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtwcm9kdWN0LmlkfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiID5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiA+XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUZyb21LYXJ0KHByb2R1Y3QuaWQpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNSByb3VuZGVkLW1kIGJnLWluZGlnby02MDAgcHgtMy41IHB5LTIuNSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzaGFkb3ctc20gaG92ZXI6YmctaW5kaWdvLTUwMCBmb2N1cy12aXNpYmxlOm91dGxpbmUgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW9mZnNldC0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1pbmRpZ28tNjAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBFbGltaW5hciBkZWwgY2Fycm9cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTaG9wcGluZ0NvbnRleHQiLCJDdXJzb3NMaXN0IiwiU2VsbHMiLCJyZW1vdmVGcm9tS2FydCIsInByb2R1Y3RzIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsIm1hcCIsInByb2R1Y3QiLCJuYW1lIiwiYnV0dG9uIiwib25DbGljayIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/cart/page.js\n"));

/***/ })

});