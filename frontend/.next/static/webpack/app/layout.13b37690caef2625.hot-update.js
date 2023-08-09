"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/context/ShoppingContext.js":
/*!****************************************!*\
  !*** ./src/context/ShoppingContext.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ShoppingProvider: function() { return /* binding */ ShoppingProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useAuthContext */ \"(app-pages-browser)/./src/hooks/useAuthContext.js\");\n/* __next_internal_client_entry_do_not_use__ default,ShoppingProvider auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ShoppingContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShoppingContext);\nconst ShoppingProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    let { user, authTokens } = (0,_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedProducts = JSON.parse(localStorage.getItem(\"cart\")) || [];\n        setProducts(savedProducts);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"cart\", JSON.stringify(products));\n        updateTotal();\n    }, [\n        products\n    ]);\n    const updateTotal = ()=>{\n        const newTotal = products.reduce((acc, product)=>{\n            return acc + product.quantity * product.price;\n        }, 0);\n        setTotal(newTotal);\n    };\n    const addToKart = (product)=>{\n        const productExist = products.find((item)=>item.id === product.id);\n        if (!productExist) {\n            const newProduct = {\n                id: product.id,\n                name: product.name,\n                price: product.price,\n                quantity: 1\n            };\n            setProducts([\n                ...products,\n                newProduct\n            ]);\n        }\n        router.push(\"/cart\");\n    };\n    const removeFromKart = (id)=>{\n        const updatedProducts = products.filter((product)=>product.id !== id);\n        setProducts(updatedProducts);\n    };\n    const increaseQuantity = (id)=>{\n        const updatedProducts = products.map((product)=>{\n            if (product.id === id) {\n                return {\n                    ...product,\n                    quantity: product.quantity + 1\n                };\n            }\n            return product;\n        });\n        setProducts(updatedProducts);\n    };\n    const decreaseQuantity = (id)=>{\n        const updatedProducts = products.map((product)=>{\n            if (product.id === id) {\n                return {\n                    ...product,\n                    quantity: Math.max(product.quantity - 1, 1)\n                };\n            }\n            return product;\n        });\n        setProducts(updatedProducts);\n    };\n    const pay = async ()=>{\n        if (!authTokens) {\n            for (const product of products){\n                await registerSale(product, user);\n            }\n            setProducts([]);\n        }\n        router.push(\"/register\");\n    };\n    const registerSale = async (product, user)=>{\n        try {\n            const saleData = {\n                student: user.user_id,\n                course: product.id,\n                date: new Date().toISOString().slice(0, 10),\n                price_paid: product.price * product.quantity,\n                pay_system: \"online\",\n                state: \"paid\"\n            };\n            console.log(JSON.stringify(saleData));\n            const response = await fetch(\"http://127.0.0.1:8000/api/v1/courses/sales/\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    Authorization: \"Bearer \".concat(authTokens.access)\n                },\n                body: JSON.stringify(saleData)\n            });\n            if (response.ok) {\n                router.push(\"/dashboard/student\");\n            } else {\n                alert(\"Something went wrong!\");\n            }\n        } catch (error) {\n            console.error(\"Error registering sale:\", error);\n        }\n    };\n    let contextData = {\n        products: products,\n        total: total,\n        addToKart: addToKart,\n        removeFromKart: removeFromKart,\n        increaseQuantity: increaseQuantity,\n        decreaseQuantity: decreaseQuantity,\n        pay: pay\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ShoppingContext.Provider, {\n        value: contextData,\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\Trabajo\\\\AlVolante Web-Rest-App\\\\frontend\\\\src\\\\context\\\\ShoppingContext.js\",\n        lineNumber: 132,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ShoppingProvider, \"zzMZo7Ry9y/VWFwvC9RrNBzaE2U=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext\n    ];\n});\n_c = ShoppingProvider;\nvar _c;\n$RefreshReg$(_c, \"ShoppingProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L1Nob3BwaW5nQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFMkQ7QUFDZjtBQUNhO0FBRXpELE1BQU1LLGdDQUFrQkwsb0RBQWFBLENBQUM7QUFDdEMsK0RBQWVLLGVBQWVBLEVBQUM7QUFFeEIsTUFBTUMsbUJBQW1CO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUMzQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQUM7SUFDbkMsTUFBTVcsU0FBU1QsMERBQVNBO0lBQ3hCLElBQUksRUFBRVUsSUFBSSxFQUFFQyxVQUFVLEVBQUUsR0FBR1YscUVBQWNBO0lBRXpDRixnREFBU0EsQ0FBQztRQUNSLE1BQU1hLGdCQUFnQkMsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUMsWUFBWSxFQUFFO1FBQ3BFVixZQUFZTTtJQUNkLEdBQUcsRUFBRTtJQUVMYixnREFBU0EsQ0FBQztRQUNSZ0IsYUFBYUUsT0FBTyxDQUFDLFFBQVFKLEtBQUtLLFNBQVMsQ0FBQ2I7UUFDNUNjO0lBQ0YsR0FBRztRQUFDZDtLQUFTO0lBRWIsTUFBTWMsY0FBYztRQUNsQixNQUFNQyxXQUFXZixTQUFTZ0IsTUFBTSxDQUFDLENBQUNDLEtBQUtDO1lBQ3JDLE9BQU9ELE1BQU1DLFFBQVFDLFFBQVEsR0FBR0QsUUFBUUUsS0FBSztRQUMvQyxHQUFHO1FBQ0hqQixTQUFTWTtJQUNYO0lBRUEsTUFBTU0sWUFBWSxDQUFDSDtRQUNqQixNQUFNSSxlQUFldEIsU0FBU3VCLElBQUksQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxFQUFFLEtBQUtQLFFBQVFPLEVBQUU7UUFDbkUsSUFBSSxDQUFDSCxjQUFjO1lBQ2pCLE1BQU1JLGFBQWE7Z0JBQ2pCRCxJQUFJUCxRQUFRTyxFQUFFO2dCQUNkRSxNQUFNVCxRQUFRUyxJQUFJO2dCQUNsQlAsT0FBT0YsUUFBUUUsS0FBSztnQkFDcEJELFVBQVU7WUFDWjtZQUNBbEIsWUFBWTttQkFBSUQ7Z0JBQVUwQjthQUFXO1FBQ3ZDO1FBQ0F0QixPQUFPd0IsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxNQUFNQyxpQkFBaUIsQ0FBQ0o7UUFDdEIsTUFBTUssa0JBQWtCOUIsU0FBUytCLE1BQU0sQ0FBQyxDQUFDYixVQUFZQSxRQUFRTyxFQUFFLEtBQUtBO1FBQ3BFeEIsWUFBWTZCO0lBQ2Q7SUFFQSxNQUFNRSxtQkFBbUIsQ0FBQ1A7UUFDeEIsTUFBTUssa0JBQWtCOUIsU0FBU2lDLEdBQUcsQ0FBQyxDQUFDZjtZQUNwQyxJQUFJQSxRQUFRTyxFQUFFLEtBQUtBLElBQUk7Z0JBQ3JCLE9BQU87b0JBQ0wsR0FBR1AsT0FBTztvQkFDVkMsVUFBVUQsUUFBUUMsUUFBUSxHQUFHO2dCQUMvQjtZQUNGO1lBQ0EsT0FBT0Q7UUFDVDtRQUNBakIsWUFBWTZCO0lBQ2Q7SUFFQSxNQUFNSSxtQkFBbUIsQ0FBQ1Q7UUFDeEIsTUFBTUssa0JBQWtCOUIsU0FBU2lDLEdBQUcsQ0FBQyxDQUFDZjtZQUNwQyxJQUFJQSxRQUFRTyxFQUFFLEtBQUtBLElBQUk7Z0JBQ3JCLE9BQU87b0JBQ0wsR0FBR1AsT0FBTztvQkFDVkMsVUFBVWdCLEtBQUtDLEdBQUcsQ0FBQ2xCLFFBQVFDLFFBQVEsR0FBRyxHQUFHO2dCQUMzQztZQUNGO1lBQ0EsT0FBT0Q7UUFDVDtRQUNBakIsWUFBWTZCO0lBQ2Q7SUFFQSxNQUFNTyxNQUFNO1FBQ1YsSUFBSSxDQUFDL0IsWUFBWTtZQUNmLEtBQUssTUFBTVksV0FBV2xCLFNBQVU7Z0JBQzlCLE1BQU1zQyxhQUFhcEIsU0FBU2I7WUFDOUI7WUFDQUosWUFBWSxFQUFFO1FBQ2hCO1FBQ0FHLE9BQU93QixJQUFJLENBQUM7SUFDZDtJQUVBLE1BQU1VLGVBQWUsT0FBT3BCLFNBQVNiO1FBQ25DLElBQUk7WUFDRixNQUFNa0MsV0FBVztnQkFDZkMsU0FBU25DLEtBQUtvQyxPQUFPO2dCQUNyQkMsUUFBUXhCLFFBQVFPLEVBQUU7Z0JBQ2xCa0IsTUFBTSxJQUFJQyxPQUFPQyxXQUFXLEdBQUdDLEtBQUssQ0FBQyxHQUFHO2dCQUN4Q0MsWUFBWTdCLFFBQVFFLEtBQUssR0FBR0YsUUFBUUMsUUFBUTtnQkFDNUM2QixZQUFZO2dCQUNaQyxPQUFPO1lBQ1Q7WUFDQUMsUUFBUUMsR0FBRyxDQUFDM0MsS0FBS0ssU0FBUyxDQUFDMEI7WUFFM0IsTUFBTWEsV0FBVyxNQUFNQyxNQUFNLCtDQUMzQjtnQkFDRUMsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7b0JBQ2hCQyxlQUFlLFVBQTRCLE9BQWxCbEQsV0FBV21ELE1BQU07Z0JBQzVDO2dCQUNBQyxNQUFNbEQsS0FBS0ssU0FBUyxDQUFDMEI7WUFDdkI7WUFHRixJQUFJYSxTQUFTTyxFQUFFLEVBQUU7Z0JBQ2Z2RCxPQUFPd0IsSUFBSSxDQUFDO1lBQ2QsT0FBTztnQkFDTGdDLE1BQU07WUFDUjtRQUNGLEVBQUUsT0FBT0MsT0FBTztZQUNkWCxRQUFRVyxLQUFLLENBQUMsMkJBQTJCQTtRQUMzQztJQUNGO0lBRUEsSUFBSUMsY0FBYztRQUNoQjlELFVBQVVBO1FBQ1ZFLE9BQU9BO1FBQ1BtQixXQUFXQTtRQUNYUSxnQkFBZ0JBO1FBQ2hCRyxrQkFBa0JBO1FBQ2xCRSxrQkFBa0JBO1FBQ2xCRyxLQUFLQTtJQUNQO0lBRUEscUJBQ0UsOERBQUN4QyxnQkFBZ0JrRSxRQUFRO1FBQUNDLE9BQU9GO2tCQUM5Qi9EOzs7Ozs7QUFHUCxFQUFFO0dBOUhXRDs7UUFHSUgsc0RBQVNBO1FBQ0dDLGlFQUFjQTs7O0tBSjlCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9TaG9wcGluZ0NvbnRleHQuanM/YzQzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoQ29udGV4dCB9IGZyb20gXCIuLi9ob29rcy91c2VBdXRoQ29udGV4dFwiO1xyXG5cclxuY29uc3QgU2hvcHBpbmdDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuZXhwb3J0IGRlZmF1bHQgU2hvcHBpbmdDb250ZXh0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNob3BwaW5nUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBsZXQgeyB1c2VyLCBhdXRoVG9rZW5zIH0gPSB1c2VBdXRoQ29udGV4dCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc2F2ZWRQcm9kdWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0XCIpKSB8fCBbXTtcclxuICAgIHNldFByb2R1Y3RzKHNhdmVkUHJvZHVjdHMpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeShwcm9kdWN0cykpO1xyXG4gICAgdXBkYXRlVG90YWwoKTtcclxuICB9LCBbcHJvZHVjdHNdKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlVG90YWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUb3RhbCA9IHByb2R1Y3RzLnJlZHVjZSgoYWNjLCBwcm9kdWN0KSA9PiB7XHJcbiAgICAgIHJldHVybiBhY2MgKyBwcm9kdWN0LnF1YW50aXR5ICogcHJvZHVjdC5wcmljZTtcclxuICAgIH0sIDApO1xyXG4gICAgc2V0VG90YWwobmV3VG90YWwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFRvS2FydCA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICBjb25zdCBwcm9kdWN0RXhpc3QgPSBwcm9kdWN0cy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwcm9kdWN0LmlkKTtcclxuICAgIGlmICghcHJvZHVjdEV4aXN0KSB7XHJcbiAgICAgIGNvbnN0IG5ld1Byb2R1Y3QgPSB7XHJcbiAgICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgbmFtZTogcHJvZHVjdC5uYW1lLFxyXG4gICAgICAgIHByaWNlOiBwcm9kdWN0LnByaWNlLFxyXG4gICAgICAgIHF1YW50aXR5OiAxLFxyXG4gICAgICB9O1xyXG4gICAgICBzZXRQcm9kdWN0cyhbLi4ucHJvZHVjdHMsIG5ld1Byb2R1Y3RdKTtcclxuICAgIH1cclxuICAgIHJvdXRlci5wdXNoKFwiL2NhcnRcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlRnJvbUthcnQgPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZWRQcm9kdWN0cyA9IHByb2R1Y3RzLmZpbHRlcigocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCAhPT0gaWQpO1xyXG4gICAgc2V0UHJvZHVjdHModXBkYXRlZFByb2R1Y3RzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpbmNyZWFzZVF1YW50aXR5ID0gKGlkKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVkUHJvZHVjdHMgPSBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHtcclxuICAgICAgaWYgKHByb2R1Y3QuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnByb2R1Y3QsXHJcbiAgICAgICAgICBxdWFudGl0eTogcHJvZHVjdC5xdWFudGl0eSArIDEsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcHJvZHVjdDtcclxuICAgIH0pO1xyXG4gICAgc2V0UHJvZHVjdHModXBkYXRlZFByb2R1Y3RzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWNyZWFzZVF1YW50aXR5ID0gKGlkKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVkUHJvZHVjdHMgPSBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHtcclxuICAgICAgaWYgKHByb2R1Y3QuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnByb2R1Y3QsXHJcbiAgICAgICAgICBxdWFudGl0eTogTWF0aC5tYXgocHJvZHVjdC5xdWFudGl0eSAtIDEsIDEpLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHByb2R1Y3Q7XHJcbiAgICB9KTtcclxuICAgIHNldFByb2R1Y3RzKHVwZGF0ZWRQcm9kdWN0cyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGF5ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFhdXRoVG9rZW5zKSB7XHJcbiAgICAgIGZvciAoY29uc3QgcHJvZHVjdCBvZiBwcm9kdWN0cykge1xyXG4gICAgICAgIGF3YWl0IHJlZ2lzdGVyU2FsZShwcm9kdWN0LCB1c2VyKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRQcm9kdWN0cyhbXSk7ICAgICAgXHJcbiAgICB9XHJcbiAgICByb3V0ZXIucHVzaCgnL3JlZ2lzdGVyJylcclxuICB9O1xyXG5cclxuICBjb25zdCByZWdpc3RlclNhbGUgPSBhc3luYyAocHJvZHVjdCwgdXNlcikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgc2FsZURhdGEgPSB7XHJcbiAgICAgICAgc3R1ZGVudDogdXNlci51c2VyX2lkLFxyXG4gICAgICAgIGNvdXJzZTogcHJvZHVjdC5pZCxcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLFxyXG4gICAgICAgIHByaWNlX3BhaWQ6IHByb2R1Y3QucHJpY2UgKiBwcm9kdWN0LnF1YW50aXR5LFxyXG4gICAgICAgIHBheV9zeXN0ZW06IFwib25saW5lXCIsXHJcbiAgICAgICAgc3RhdGU6IFwicGFpZFwiLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShzYWxlRGF0YSkpO1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdjEvY291cnNlcy9zYWxlcy9cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2F1dGhUb2tlbnMuYWNjZXNzfWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc2FsZURhdGEpLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZC9zdHVkZW50XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmchXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVnaXN0ZXJpbmcgc2FsZTpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGxldCBjb250ZXh0RGF0YSA9IHtcclxuICAgIHByb2R1Y3RzOiBwcm9kdWN0cyxcclxuICAgIHRvdGFsOiB0b3RhbCxcclxuICAgIGFkZFRvS2FydDogYWRkVG9LYXJ0LFxyXG4gICAgcmVtb3ZlRnJvbUthcnQ6IHJlbW92ZUZyb21LYXJ0LFxyXG4gICAgaW5jcmVhc2VRdWFudGl0eTogaW5jcmVhc2VRdWFudGl0eSxcclxuICAgIGRlY3JlYXNlUXVhbnRpdHk6IGRlY3JlYXNlUXVhbnRpdHksXHJcbiAgICBwYXk6IHBheSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNob3BwaW5nQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dERhdGF9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1Nob3BwaW5nQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwidXNlQXV0aENvbnRleHQiLCJTaG9wcGluZ0NvbnRleHQiLCJTaG9wcGluZ1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwidG90YWwiLCJzZXRUb3RhbCIsInJvdXRlciIsInVzZXIiLCJhdXRoVG9rZW5zIiwic2F2ZWRQcm9kdWN0cyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidXBkYXRlVG90YWwiLCJuZXdUb3RhbCIsInJlZHVjZSIsImFjYyIsInByb2R1Y3QiLCJxdWFudGl0eSIsInByaWNlIiwiYWRkVG9LYXJ0IiwicHJvZHVjdEV4aXN0IiwiZmluZCIsIml0ZW0iLCJpZCIsIm5ld1Byb2R1Y3QiLCJuYW1lIiwicHVzaCIsInJlbW92ZUZyb21LYXJ0IiwidXBkYXRlZFByb2R1Y3RzIiwiZmlsdGVyIiwiaW5jcmVhc2VRdWFudGl0eSIsIm1hcCIsImRlY3JlYXNlUXVhbnRpdHkiLCJNYXRoIiwibWF4IiwicGF5IiwicmVnaXN0ZXJTYWxlIiwic2FsZURhdGEiLCJzdHVkZW50IiwidXNlcl9pZCIsImNvdXJzZSIsImRhdGUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzbGljZSIsInByaWNlX3BhaWQiLCJwYXlfc3lzdGVtIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYWNjZXNzIiwiYm9keSIsIm9rIiwiYWxlcnQiLCJlcnJvciIsImNvbnRleHREYXRhIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/ShoppingContext.js\n"));

/***/ })

});