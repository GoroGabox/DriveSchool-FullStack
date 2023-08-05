"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/cursos/page",{

/***/ "(app-pages-browser)/./src/context/ShoppingContext.js":
/*!****************************************!*\
  !*** ./src/context/ShoppingContext.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ShoppingProvider: function() { return /* binding */ ShoppingProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default,ShoppingProvider auto */ \nvar _s = $RefreshSig$();\n\nconst ShoppingContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShoppingContext);\nconst ShoppingProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Aquí puedes realizar cualquier lógica para recuperar los productos guardados en el almacenamiento local\n        // y actualizar el estado del carrito al cargar la página.\n        // Por ejemplo:\n        const savedProducts = JSON.parse(localStorage.getItem(\"cart\")) || [];\n        setProducts(savedProducts);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Aquí guardamos los productos en el almacenamiento local cada vez que cambie la lista de productos.\n        localStorage.setItem(\"cart\", JSON.stringify(products));\n    }, [\n        products\n    ]);\n    let addToKart = (product)=>{\n        const cursoExist = products.find((cur)=>product.id === product.id);\n        setProducts([\n            ...products,\n            product\n        ]);\n    };\n    let removeFromKart = (id)=>{\n        const updatedProducts = products.filter((product)=>product.id !== id);\n        setProducts(updatedProducts);\n    };\n    let contextData = {\n        products: products,\n        addToKart: addToKart,\n        removeFromKart: removeFromKart\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ShoppingContext.Provider, {\n        value: contextData,\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\Trabajo\\\\AlVolante Web-Rest-App\\\\frontend\\\\src\\\\context\\\\ShoppingContext.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ShoppingProvider, \"yIMaXFJFJk3e4dtbshAaMPRShpc=\");\n_c = ShoppingProvider;\nvar _c;\n$RefreshReg$(_c, \"ShoppingProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L1Nob3BwaW5nQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFMkQ7QUFFM0QsTUFBTUcsZ0NBQWtCSCxvREFBYUEsQ0FBQztBQUN0QywrREFBZUcsZUFBZUEsRUFBQztBQUV4QixNQUFNQyxtQkFBbUI7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQzNDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNDQyxnREFBU0EsQ0FBQztRQUNSLDBHQUEwRztRQUMxRywwREFBMEQ7UUFDMUQsZUFBZTtRQUNmLE1BQU1NLGdCQUFnQkMsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUMsWUFBWSxFQUFFO1FBQ3BFTCxZQUFZQztJQUNkLEdBQUcsRUFBRTtJQUVMTixnREFBU0EsQ0FBQztRQUNSLHFHQUFxRztRQUNyR1MsYUFBYUUsT0FBTyxDQUFDLFFBQVFKLEtBQUtLLFNBQVMsQ0FBQ1I7SUFDOUMsR0FBRztRQUFDQTtLQUFTO0lBRWIsSUFBSVMsWUFBWSxDQUFDQztRQUNmLE1BQU1DLGFBQWFYLFNBQVNZLElBQUksQ0FBQyxDQUFDQyxNQUFNSCxRQUFRSSxFQUFFLEtBQUdKLFFBQVFJLEVBQUU7UUFDL0RiLFlBQVk7ZUFBSUQ7WUFBVVU7U0FBUTtJQUNwQztJQUNBLElBQUlLLGlCQUFpQixDQUFDRDtRQUNwQixNQUFNRSxrQkFBa0JoQixTQUFTaUIsTUFBTSxDQUFDLENBQUNQLFVBQVlBLFFBQVFJLEVBQUUsS0FBS0E7UUFDcEViLFlBQVllO0lBQ2Q7SUFFQSxJQUFJRSxjQUFjO1FBQ2hCbEIsVUFBVUE7UUFDVlMsV0FBV0E7UUFDWE0sZ0JBQWdCQTtJQUNsQjtJQUVBLHFCQUNFLDhEQUFDbEIsZ0JBQWdCc0IsUUFBUTtRQUFDQyxPQUFPRjtrQkFDOUJuQjs7Ozs7O0FBR1AsRUFBRTtHQXBDV0Q7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvU2hvcHBpbmdDb250ZXh0LmpzP2M0MzkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBTaG9wcGluZ0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5leHBvcnQgZGVmYXVsdCBTaG9wcGluZ0NvbnRleHQ7XHJcblxyXG5leHBvcnQgY29uc3QgU2hvcHBpbmdQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEFxdcOtIHB1ZWRlcyByZWFsaXphciBjdWFscXVpZXIgbMOzZ2ljYSBwYXJhIHJlY3VwZXJhciBsb3MgcHJvZHVjdG9zIGd1YXJkYWRvcyBlbiBlbCBhbG1hY2VuYW1pZW50byBsb2NhbFxyXG4gICAgLy8geSBhY3R1YWxpemFyIGVsIGVzdGFkbyBkZWwgY2Fycml0byBhbCBjYXJnYXIgbGEgcMOhZ2luYS5cclxuICAgIC8vIFBvciBlamVtcGxvOlxyXG4gICAgY29uc3Qgc2F2ZWRQcm9kdWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSkgfHwgW107XHJcbiAgICBzZXRQcm9kdWN0cyhzYXZlZFByb2R1Y3RzKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBBcXXDrSBndWFyZGFtb3MgbG9zIHByb2R1Y3RvcyBlbiBlbCBhbG1hY2VuYW1pZW50byBsb2NhbCBjYWRhIHZleiBxdWUgY2FtYmllIGxhIGxpc3RhIGRlIHByb2R1Y3Rvcy5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkocHJvZHVjdHMpKTtcclxuICB9LCBbcHJvZHVjdHNdKTtcclxuXHJcbiAgbGV0IGFkZFRvS2FydCA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICBjb25zdCBjdXJzb0V4aXN0ID0gcHJvZHVjdHMuZmluZCgoY3VyKT0+cHJvZHVjdC5pZD09PXByb2R1Y3QuaWQpXHJcbiAgICBzZXRQcm9kdWN0cyhbLi4ucHJvZHVjdHMsIHByb2R1Y3RdKTtcclxuICB9O1xyXG4gIGxldCByZW1vdmVGcm9tS2FydCA9IChpZCkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlZFByb2R1Y3RzID0gcHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkICE9PSBpZCk7XHJcbiAgICBzZXRQcm9kdWN0cyh1cGRhdGVkUHJvZHVjdHMpO1xyXG4gIH07XHJcblxyXG4gIGxldCBjb250ZXh0RGF0YSA9IHtcclxuICAgIHByb2R1Y3RzOiBwcm9kdWN0cyxcclxuICAgIGFkZFRvS2FydDogYWRkVG9LYXJ0LFxyXG4gICAgcmVtb3ZlRnJvbUthcnQ6IHJlbW92ZUZyb21LYXJ0LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2hvcHBpbmdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0RGF0YX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU2hvcHBpbmdDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTaG9wcGluZ0NvbnRleHQiLCJTaG9wcGluZ1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwic2F2ZWRQcm9kdWN0cyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWRkVG9LYXJ0IiwicHJvZHVjdCIsImN1cnNvRXhpc3QiLCJmaW5kIiwiY3VyIiwiaWQiLCJyZW1vdmVGcm9tS2FydCIsInVwZGF0ZWRQcm9kdWN0cyIsImZpbHRlciIsImNvbnRleHREYXRhIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/ShoppingContext.js\n"));

/***/ })

});