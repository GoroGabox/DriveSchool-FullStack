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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sells; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_useShoppingContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useShoppingContext */ \"(app-pages-browser)/./src/hooks/useShoppingContext.js\");\n/* harmony import */ var _components_Cursos_CursosList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Cursos/CursosList */ \"(app-pages-browser)/./src/components/Cursos/CursosList.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Sells() {\n    _s();\n    let { removeFromKart, products } = (0,_hooks_useShoppingContext__WEBPACK_IMPORTED_MODULE_1__.useShoppingContext)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen w-full flex-col items-center justify-evenly px-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: products.map((product)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: product.name\n                }, product.id, false, {\n                    fileName: \"E:\\\\Trabajo\\\\AlVolante Web-Rest-App\\\\frontend\\\\src\\\\app\\\\cart\\\\page.js\",\n                    lineNumber: 13,\n                    columnNumber: 15\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"E:\\\\Trabajo\\\\AlVolante Web-Rest-App\\\\frontend\\\\src\\\\app\\\\cart\\\\page.js\",\n            lineNumber: 10,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Trabajo\\\\AlVolante Web-Rest-App\\\\frontend\\\\src\\\\app\\\\cart\\\\page.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_s(Sells, \"CCgWmkAqgKAKZmU1ivBYa+bw9/s=\", false, function() {\n    return [\n        _hooks_useShoppingContext__WEBPACK_IMPORTED_MODULE_1__.useShoppingContext\n    ];\n});\n_c = Sells;\nvar _c;\n$RefreshReg$(_c, \"Sells\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY2FydC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVvRTtBQUNUO0FBRTVDLFNBQVNFOztJQUN0QixJQUFJLEVBQUVDLGNBQWMsRUFBRUMsUUFBUSxFQUFFLEdBQUdKLDZFQUFrQkE7SUFDckQscUJBQ0UsOERBQUNLO1FBQUtDLFdBQVU7a0JBQ1osNEVBQUNDO3NCQUNFSCxTQUFTSSxHQUFHLENBQUMsQ0FBQ0M7Z0JBQ2IscUJBQ0UsOERBQUNGO29CQUFJRCxXQUFVOzhCQUFxQkcsUUFBUUMsSUFBSTttQkFBekJELFFBQVFFLEVBQUU7Ozs7O1lBRXJDOzs7Ozs7Ozs7OztBQUlWO0dBYndCVDs7UUFDYUYseUVBQWtCQTs7O0tBRC9CRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NhcnQvcGFnZS5qcz8zZjliIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU2hvcHBpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVNob3BwaW5nQ29udGV4dFwiO1xyXG5pbXBvcnQgQ3Vyc29zTGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0N1cnNvcy9DdXJzb3NMaXN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VsbHMoKSB7XHJcbiAgbGV0IHsgcmVtb3ZlRnJvbUthcnQsIHByb2R1Y3RzIH0gPSB1c2VTaG9wcGluZ0NvbnRleHQoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gdy1mdWxsIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWV2ZW5seSBweC04XCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpPT57XHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIGtleT17cHJvZHVjdC5pZH0+e3Byb2R1Y3QubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcbilcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU2hvcHBpbmdDb250ZXh0IiwiQ3Vyc29zTGlzdCIsIlNlbGxzIiwicmVtb3ZlRnJvbUthcnQiLCJwcm9kdWN0cyIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJtYXAiLCJwcm9kdWN0IiwibmFtZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/cart/page.js\n"));

/***/ })

});