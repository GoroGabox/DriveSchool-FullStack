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

/***/ "(app-pages-browser)/./src/context/ShoppingContext.js":
/*!****************************************!*\
  !*** ./src/context/ShoppingContext.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ShoppingProvider: function() { return /* binding */ ShoppingProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default,ShoppingProvider auto */ \nvar _s = $RefreshSig$();\n\nconst ShoppingContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShoppingContext);\nconst ShoppingProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Aquí puedes realizar cualquier lógica para recuperar los productos guardados en el almacenamiento local\n        // y actualizar el estado del carrito al cargar la página.\n        // Por ejemplo:\n        const savedProducts = JSON.parse(localStorage.getItem(\"cart\")) || [];\n        setProducts(savedProducts);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Aquí guardamos los productos en el almacenamiento local cada vez que cambie la lista de productos.\n        localStorage.setItem(\"cart\", JSON.stringify(products));\n    }, [\n        products\n    ]);\n    let addToKart = (product)=>{\n        const cursoExist = products.find((curso)=>curso.id === product.id);\n        if (condition) {}\n        setProducts([\n            ...products,\n            product\n        ]);\n    };\n    let removeFromKart = (id)=>{\n        const updatedProducts = products.filter((product)=>product.id !== id);\n        setProducts(updatedProducts);\n    };\n    let contextData = {\n        products: products,\n        addToKart: addToKart,\n        removeFromKart: removeFromKart\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ShoppingContext.Provider, {\n        value: contextData,\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\Trabajo\\\\AlVolante Web-Rest-App\\\\frontend\\\\src\\\\context\\\\ShoppingContext.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ShoppingProvider, \"yIMaXFJFJk3e4dtbshAaMPRShpc=\");\n_c = ShoppingProvider;\nvar _c;\n$RefreshReg$(_c, \"ShoppingProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L1Nob3BwaW5nQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFMkQ7QUFFM0QsTUFBTUcsZ0NBQWtCSCxvREFBYUEsQ0FBQztBQUN0QywrREFBZUcsZUFBZUEsRUFBQztBQUV4QixNQUFNQyxtQkFBbUI7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQzNDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNDQyxnREFBU0EsQ0FBQztRQUNSLDBHQUEwRztRQUMxRywwREFBMEQ7UUFDMUQsZUFBZTtRQUNmLE1BQU1NLGdCQUFnQkMsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUMsWUFBWSxFQUFFO1FBQ3BFTCxZQUFZQztJQUNkLEdBQUcsRUFBRTtJQUVMTixnREFBU0EsQ0FBQztRQUNSLHFHQUFxRztRQUNyR1MsYUFBYUUsT0FBTyxDQUFDLFFBQVFKLEtBQUtLLFNBQVMsQ0FBQ1I7SUFDOUMsR0FBRztRQUFDQTtLQUFTO0lBRWIsSUFBSVMsWUFBWSxDQUFDQztRQUNmLE1BQU1DLGFBQWFYLFNBQVNZLElBQUksQ0FBQyxDQUFDQyxRQUFRQSxNQUFNQyxFQUFFLEtBQUdKLFFBQVFJLEVBQUU7UUFDL0QsSUFBSUMsV0FBVyxDQUVmO1FBQ0FkLFlBQVk7ZUFBSUQ7WUFBVVU7U0FBUTtJQUNwQztJQUNBLElBQUlNLGlCQUFpQixDQUFDRjtRQUNwQixNQUFNRyxrQkFBa0JqQixTQUFTa0IsTUFBTSxDQUFDLENBQUNSLFVBQVlBLFFBQVFJLEVBQUUsS0FBS0E7UUFDcEViLFlBQVlnQjtJQUNkO0lBRUEsSUFBSUUsY0FBYztRQUNoQm5CLFVBQVVBO1FBQ1ZTLFdBQVdBO1FBQ1hPLGdCQUFnQkE7SUFDbEI7SUFFQSxxQkFDRSw4REFBQ25CLGdCQUFnQnVCLFFBQVE7UUFBQ0MsT0FBT0Y7a0JBQzlCcEI7Ozs7OztBQUdQLEVBQUU7R0F2Q1dEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L1Nob3BwaW5nQ29udGV4dC5qcz9jNDM5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgU2hvcHBpbmdDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuZXhwb3J0IGRlZmF1bHQgU2hvcHBpbmdDb250ZXh0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNob3BwaW5nUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBBcXXDrSBwdWVkZXMgcmVhbGl6YXIgY3VhbHF1aWVyIGzDs2dpY2EgcGFyYSByZWN1cGVyYXIgbG9zIHByb2R1Y3RvcyBndWFyZGFkb3MgZW4gZWwgYWxtYWNlbmFtaWVudG8gbG9jYWxcclxuICAgIC8vIHkgYWN0dWFsaXphciBlbCBlc3RhZG8gZGVsIGNhcnJpdG8gYWwgY2FyZ2FyIGxhIHDDoWdpbmEuXHJcbiAgICAvLyBQb3IgZWplbXBsbzpcclxuICAgIGNvbnN0IHNhdmVkUHJvZHVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykpIHx8IFtdO1xyXG4gICAgc2V0UHJvZHVjdHMoc2F2ZWRQcm9kdWN0cyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gQXF1w60gZ3VhcmRhbW9zIGxvcyBwcm9kdWN0b3MgZW4gZWwgYWxtYWNlbmFtaWVudG8gbG9jYWwgY2FkYSB2ZXogcXVlIGNhbWJpZSBsYSBsaXN0YSBkZSBwcm9kdWN0b3MuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KHByb2R1Y3RzKSk7XHJcbiAgfSwgW3Byb2R1Y3RzXSk7XHJcblxyXG4gIGxldCBhZGRUb0thcnQgPSAocHJvZHVjdCkgPT4ge1xyXG4gICAgY29uc3QgY3Vyc29FeGlzdCA9IHByb2R1Y3RzLmZpbmQoKGN1cnNvKT0+Y3Vyc28uaWQ9PT1wcm9kdWN0LmlkKVxyXG4gICAgaWYgKGNvbmRpdGlvbikge1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIHNldFByb2R1Y3RzKFsuLi5wcm9kdWN0cywgcHJvZHVjdF0pO1xyXG4gIH07XHJcbiAgbGV0IHJlbW92ZUZyb21LYXJ0ID0gKGlkKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVkUHJvZHVjdHMgPSBwcm9kdWN0cy5maWx0ZXIoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgIT09IGlkKTtcclxuICAgIHNldFByb2R1Y3RzKHVwZGF0ZWRQcm9kdWN0cyk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IGNvbnRleHREYXRhID0ge1xyXG4gICAgcHJvZHVjdHM6IHByb2R1Y3RzLFxyXG4gICAgYWRkVG9LYXJ0OiBhZGRUb0thcnQsXHJcbiAgICByZW1vdmVGcm9tS2FydDogcmVtb3ZlRnJvbUthcnQsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTaG9wcGluZ0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHREYXRhfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TaG9wcGluZ0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNob3BwaW5nQ29udGV4dCIsIlNob3BwaW5nUHJvdmlkZXIiLCJjaGlsZHJlbiIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJzYXZlZFByb2R1Y3RzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJhZGRUb0thcnQiLCJwcm9kdWN0IiwiY3Vyc29FeGlzdCIsImZpbmQiLCJjdXJzbyIsImlkIiwiY29uZGl0aW9uIiwicmVtb3ZlRnJvbUthcnQiLCJ1cGRhdGVkUHJvZHVjdHMiLCJmaWx0ZXIiLCJjb250ZXh0RGF0YSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/ShoppingContext.js\n"));

/***/ })

});