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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sells; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_useShoppingContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useShoppingContext */ \"(app-pages-browser)/./src/hooks/useShoppingContext.js\");\n/* harmony import */ var _components_Cursos_CursosList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Cursos/CursosList */ \"(app-pages-browser)/./src/components/Cursos/CursosList.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Sells() {\n    _s();\n    let { removeFromKart, products } = (0,_hooks_useShoppingContext__WEBPACK_IMPORTED_MODULE_1__.useShoppingContext)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen w-full flex-col items-center justify-evenly px-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: products.map((product)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\",\n                            children: product.name\n                        }, product.id, false, {\n                            fileName: \"E:\\\\Trabajo\\\\AlVolante Web-Rest-App\\\\frontend\\\\src\\\\app\\\\cart\\\\page.js\",\n                            lineNumber: 14,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>removeFromKart(curso),\n                            className: \"mt-5 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n                            children: \"Eliminar del carro\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Trabajo\\\\AlVolante Web-Rest-App\\\\frontend\\\\src\\\\app\\\\cart\\\\page.js\",\n                            lineNumber: 17,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Trabajo\\\\AlVolante Web-Rest-App\\\\frontend\\\\src\\\\app\\\\cart\\\\page.js\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"E:\\\\Trabajo\\\\AlVolante Web-Rest-App\\\\frontend\\\\src\\\\app\\\\cart\\\\page.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Trabajo\\\\AlVolante Web-Rest-App\\\\frontend\\\\src\\\\app\\\\cart\\\\page.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_s(Sells, \"CCgWmkAqgKAKZmU1ivBYa+bw9/s=\", false, function() {\n    return [\n        _hooks_useShoppingContext__WEBPACK_IMPORTED_MODULE_1__.useShoppingContext\n    ];\n});\n_c = Sells;\nvar _c;\n$RefreshReg$(_c, \"Sells\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY2FydC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVvRTtBQUNSO0FBRTdDLFNBQVNFOztJQUN0QixJQUFJLEVBQUVDLGNBQWMsRUFBRUMsUUFBUSxFQUFFLEdBQUdKLDZFQUFrQkE7SUFDckQscUJBQ0UsOERBQUNLO1FBQUtDLFdBQVU7a0JBQ2QsNEVBQUNDO3NCQUNFSCxTQUFTSSxHQUFHLENBQUMsQ0FBQ0M7Z0JBQ2IscUJBQ0UsOERBQUNGO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUlELFdBQVU7c0NBQ1pHLFFBQVFDLElBQUk7MkJBRFFELFFBQVFFLEVBQUU7Ozs7O3NDQUdqQyw4REFBQ0M7NEJBQ0NDLFNBQVMsSUFBTVYsZUFBZVc7NEJBQzlCUixXQUFVO3NDQUNYOzs7Ozs7Ozs7Ozs7WUFLUDs7Ozs7Ozs7Ozs7QUFJUjtHQXZCd0JKOztRQUNhRix5RUFBa0JBOzs7S0FEL0JFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY2FydC9wYWdlLmpzPzNmOWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTaG9wcGluZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlU2hvcHBpbmdDb250ZXh0XCI7XHJcbmltcG9ydCBDdXJzb3NMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0N1cnNvcy9DdXJzb3NMaXN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWxscygpIHtcclxuICBsZXQgeyByZW1vdmVGcm9tS2FydCwgcHJvZHVjdHMgfSA9IHVzZVNob3BwaW5nQ29udGV4dCgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiB3LWZ1bGwgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktZXZlbmx5IHB4LThcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIga2V5PXtwcm9kdWN0LmlkfT5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlRnJvbUthcnQoY3Vyc28pfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNSByb3VuZGVkLW1kIGJnLWluZGlnby02MDAgcHgtMy41IHB5LTIuNSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzaGFkb3ctc20gaG92ZXI6YmctaW5kaWdvLTUwMCBmb2N1cy12aXNpYmxlOm91dGxpbmUgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW9mZnNldC0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1pbmRpZ28tNjAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBFbGltaW5hciBkZWwgY2Fycm9cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTaG9wcGluZ0NvbnRleHQiLCJDdXJzb3NMaXN0IiwiU2VsbHMiLCJyZW1vdmVGcm9tS2FydCIsInByb2R1Y3RzIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsIm1hcCIsInByb2R1Y3QiLCJuYW1lIiwiaWQiLCJidXR0b24iLCJvbkNsaWNrIiwiY3Vyc28iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/cart/page.js\n"));

/***/ })

});