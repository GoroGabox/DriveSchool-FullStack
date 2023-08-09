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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ShoppingProvider: function() { return /* binding */ ShoppingProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useAuthContext */ \"(app-pages-browser)/./src/hooks/useAuthContext.js\");\n/* __next_internal_client_entry_do_not_use__ default,ShoppingProvider auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ShoppingContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShoppingContext);\nconst ShoppingProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    let { user, authTokens } = (0,_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedProducts = JSON.parse(localStorage.getItem(\"cart\")) || [];\n        setProducts(savedProducts);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"cart\", JSON.stringify(products));\n        updateTotal();\n    }, [\n        products\n    ]);\n    const updateTotal = ()=>{\n        const newTotal = products.reduce((acc, product)=>{\n            return acc + product.quantity * product.price;\n        }, 0);\n        setTotal(newTotal);\n    };\n    const addToKart = (product)=>{\n        const productExist = products.find((item)=>item.id === product.id);\n        if (!productExist) {\n            const newProduct = {\n                id: product.id,\n                name: product.name,\n                price: product.price,\n                quantity: 1\n            };\n            setProducts([\n                ...products,\n                newProduct\n            ]);\n        }\n        router.push(\"/cart\");\n    };\n    const removeFromKart = (id)=>{\n        const updatedProducts = products.filter((product)=>product.id !== id);\n        setProducts(updatedProducts);\n    };\n    const increaseQuantity = (id)=>{\n        const updatedProducts = products.map((product)=>{\n            if (product.id === id) {\n                return {\n                    ...product,\n                    quantity: product.quantity + 1\n                };\n            }\n            return product;\n        });\n        setProducts(updatedProducts);\n    };\n    const decreaseQuantity = (id)=>{\n        const updatedProducts = products.map((product)=>{\n            if (product.id === id) {\n                return {\n                    ...product,\n                    quantity: Math.max(product.quantity - 1, 1)\n                };\n            }\n            return product;\n        });\n        setProducts(updatedProducts);\n    };\n    const pay = async ()=>{\n        if (user) {\n            for (const product of products){\n                await registerSale(product, user);\n            }\n            setProducts([]);\n        }\n        router.push(\"/register\");\n    };\n    const registerSale = async (product, user)=>{\n        try {\n            const saleData = {\n                student: user.user_id,\n                course: product.id,\n                date: new Date().toISOString().slice(0, 10),\n                price_paid: product.price * product.quantity,\n                pay_system: \"online\",\n                state: \"paid\"\n            };\n            console.log(JSON.stringify(saleData));\n            const response = await fetch(\"http://127.0.0.1:8000/api/v1/courses/sales/\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    Authorization: \"Bearer \".concat(authTokens.access)\n                },\n                body: JSON.stringify(saleData)\n            });\n            if (response.ok) {\n                router.push(\"/dashboard/student\");\n            } else {\n                alert(\"Something went wrong!\");\n            }\n        } catch (error) {\n            console.error(\"Error registering sale:\", error);\n        }\n    };\n    let contextData = {\n        products: products,\n        total: total,\n        addToKart: addToKart,\n        removeFromKart: removeFromKart,\n        increaseQuantity: increaseQuantity,\n        decreaseQuantity: decreaseQuantity,\n        pay: pay\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ShoppingContext.Provider, {\n        value: contextData,\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\Trabajo\\\\AlVolante Web-Rest-App\\\\frontend\\\\src\\\\context\\\\ShoppingContext.js\",\n        lineNumber: 132,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ShoppingProvider, \"zzMZo7Ry9y/VWFwvC9RrNBzaE2U=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext\n    ];\n});\n_c = ShoppingProvider;\nvar _c;\n$RefreshReg$(_c, \"ShoppingProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L1Nob3BwaW5nQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFMkQ7QUFDZjtBQUNhO0FBRXpELE1BQU1LLGdDQUFrQkwsb0RBQWFBLENBQUM7QUFDdEMsK0RBQWVLLGVBQWVBLEVBQUM7QUFFeEIsTUFBTUMsbUJBQW1CO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUMzQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQUM7SUFDbkMsTUFBTVcsU0FBU1QsMERBQVNBO0lBQ3hCLElBQUksRUFBRVUsSUFBSSxFQUFFQyxVQUFVLEVBQUUsR0FBR1YscUVBQWNBO0lBRXpDRixnREFBU0EsQ0FBQztRQUNSLE1BQU1hLGdCQUFnQkMsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUMsWUFBWSxFQUFFO1FBQ3BFVixZQUFZTTtJQUNkLEdBQUcsRUFBRTtJQUVMYixnREFBU0EsQ0FBQztRQUNSZ0IsYUFBYUUsT0FBTyxDQUFDLFFBQVFKLEtBQUtLLFNBQVMsQ0FBQ2I7UUFDNUNjO0lBQ0YsR0FBRztRQUFDZDtLQUFTO0lBRWIsTUFBTWMsY0FBYztRQUNsQixNQUFNQyxXQUFXZixTQUFTZ0IsTUFBTSxDQUFDLENBQUNDLEtBQUtDO1lBQ3JDLE9BQU9ELE1BQU1DLFFBQVFDLFFBQVEsR0FBR0QsUUFBUUUsS0FBSztRQUMvQyxHQUFHO1FBQ0hqQixTQUFTWTtJQUNYO0lBRUEsTUFBTU0sWUFBWSxDQUFDSDtRQUNqQixNQUFNSSxlQUFldEIsU0FBU3VCLElBQUksQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxFQUFFLEtBQUtQLFFBQVFPLEVBQUU7UUFDbkUsSUFBSSxDQUFDSCxjQUFjO1lBQ2pCLE1BQU1JLGFBQWE7Z0JBQ2pCRCxJQUFJUCxRQUFRTyxFQUFFO2dCQUNkRSxNQUFNVCxRQUFRUyxJQUFJO2dCQUNsQlAsT0FBT0YsUUFBUUUsS0FBSztnQkFDcEJELFVBQVU7WUFDWjtZQUNBbEIsWUFBWTttQkFBSUQ7Z0JBQVUwQjthQUFXO1FBQ3ZDO1FBQ0F0QixPQUFPd0IsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxNQUFNQyxpQkFBaUIsQ0FBQ0o7UUFDdEIsTUFBTUssa0JBQWtCOUIsU0FBUytCLE1BQU0sQ0FBQyxDQUFDYixVQUFZQSxRQUFRTyxFQUFFLEtBQUtBO1FBQ3BFeEIsWUFBWTZCO0lBQ2Q7SUFFQSxNQUFNRSxtQkFBbUIsQ0FBQ1A7UUFDeEIsTUFBTUssa0JBQWtCOUIsU0FBU2lDLEdBQUcsQ0FBQyxDQUFDZjtZQUNwQyxJQUFJQSxRQUFRTyxFQUFFLEtBQUtBLElBQUk7Z0JBQ3JCLE9BQU87b0JBQ0wsR0FBR1AsT0FBTztvQkFDVkMsVUFBVUQsUUFBUUMsUUFBUSxHQUFHO2dCQUMvQjtZQUNGO1lBQ0EsT0FBT0Q7UUFDVDtRQUNBakIsWUFBWTZCO0lBQ2Q7SUFFQSxNQUFNSSxtQkFBbUIsQ0FBQ1Q7UUFDeEIsTUFBTUssa0JBQWtCOUIsU0FBU2lDLEdBQUcsQ0FBQyxDQUFDZjtZQUNwQyxJQUFJQSxRQUFRTyxFQUFFLEtBQUtBLElBQUk7Z0JBQ3JCLE9BQU87b0JBQ0wsR0FBR1AsT0FBTztvQkFDVkMsVUFBVWdCLEtBQUtDLEdBQUcsQ0FBQ2xCLFFBQVFDLFFBQVEsR0FBRyxHQUFHO2dCQUMzQztZQUNGO1lBQ0EsT0FBT0Q7UUFDVDtRQUNBakIsWUFBWTZCO0lBQ2Q7SUFFQSxNQUFNTyxNQUFNO1FBQ1YsSUFBSWhDLE1BQU07WUFDUixLQUFLLE1BQU1hLFdBQVdsQixTQUFVO2dCQUM5QixNQUFNc0MsYUFBYXBCLFNBQVNiO1lBQzlCO1lBQ0FKLFlBQVksRUFBRTtRQUNoQjtRQUNBRyxPQUFPd0IsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxNQUFNVSxlQUFlLE9BQU9wQixTQUFTYjtRQUNuQyxJQUFJO1lBQ0YsTUFBTWtDLFdBQVc7Z0JBQ2ZDLFNBQVNuQyxLQUFLb0MsT0FBTztnQkFDckJDLFFBQVF4QixRQUFRTyxFQUFFO2dCQUNsQmtCLE1BQU0sSUFBSUMsT0FBT0MsV0FBVyxHQUFHQyxLQUFLLENBQUMsR0FBRztnQkFDeENDLFlBQVk3QixRQUFRRSxLQUFLLEdBQUdGLFFBQVFDLFFBQVE7Z0JBQzVDNkIsWUFBWTtnQkFDWkMsT0FBTztZQUNUO1lBQ0FDLFFBQVFDLEdBQUcsQ0FBQzNDLEtBQUtLLFNBQVMsQ0FBQzBCO1lBRTNCLE1BQU1hLFdBQVcsTUFBTUMsTUFBTSwrQ0FDM0I7Z0JBQ0VDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO29CQUNoQkMsZUFBZSxVQUE0QixPQUFsQmxELFdBQVdtRCxNQUFNO2dCQUM1QztnQkFDQUMsTUFBTWxELEtBQUtLLFNBQVMsQ0FBQzBCO1lBQ3ZCO1lBR0YsSUFBSWEsU0FBU08sRUFBRSxFQUFFO2dCQUNmdkQsT0FBT3dCLElBQUksQ0FBQztZQUNkLE9BQU87Z0JBQ0xnQyxNQUFNO1lBQ1I7UUFDRixFQUFFLE9BQU9DLE9BQU87WUFDZFgsUUFBUVcsS0FBSyxDQUFDLDJCQUEyQkE7UUFDM0M7SUFDRjtJQUVBLElBQUlDLGNBQWM7UUFDaEI5RCxVQUFVQTtRQUNWRSxPQUFPQTtRQUNQbUIsV0FBV0E7UUFDWFEsZ0JBQWdCQTtRQUNoQkcsa0JBQWtCQTtRQUNsQkUsa0JBQWtCQTtRQUNsQkcsS0FBS0E7SUFDUDtJQUVBLHFCQUNFLDhEQUFDeEMsZ0JBQWdCa0UsUUFBUTtRQUFDQyxPQUFPRjtrQkFDOUIvRDs7Ozs7O0FBR1AsRUFBRTtHQTlIV0Q7O1FBR0lILHNEQUFTQTtRQUNHQyxpRUFBY0E7OztLQUo5QkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvU2hvcHBpbmdDb250ZXh0LmpzP2M0MzkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlQXV0aENvbnRleHQgfSBmcm9tIFwiLi4vaG9va3MvdXNlQXV0aENvbnRleHRcIjtcclxuXHJcbmNvbnN0IFNob3BwaW5nQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XHJcbmV4cG9ydCBkZWZhdWx0IFNob3BwaW5nQ29udGV4dDtcclxuXHJcbmV4cG9ydCBjb25zdCBTaG9wcGluZ1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgbGV0IHsgdXNlciwgYXV0aFRva2VucyB9ID0gdXNlQXV0aENvbnRleHQoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNhdmVkUHJvZHVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydFwiKSkgfHwgW107XHJcbiAgICBzZXRQcm9kdWN0cyhzYXZlZFByb2R1Y3RzKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkocHJvZHVjdHMpKTtcclxuICAgIHVwZGF0ZVRvdGFsKCk7XHJcbiAgfSwgW3Byb2R1Y3RzXSk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVRvdGFsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3VG90YWwgPSBwcm9kdWN0cy5yZWR1Y2UoKGFjYywgcHJvZHVjdCkgPT4ge1xyXG4gICAgICByZXR1cm4gYWNjICsgcHJvZHVjdC5xdWFudGl0eSAqIHByb2R1Y3QucHJpY2U7XHJcbiAgICB9LCAwKTtcclxuICAgIHNldFRvdGFsKG5ld1RvdGFsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRUb0thcnQgPSAocHJvZHVjdCkgPT4ge1xyXG4gICAgY29uc3QgcHJvZHVjdEV4aXN0ID0gcHJvZHVjdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcHJvZHVjdC5pZCk7XHJcbiAgICBpZiAoIXByb2R1Y3RFeGlzdCkge1xyXG4gICAgICBjb25zdCBuZXdQcm9kdWN0ID0ge1xyXG4gICAgICAgIGlkOiBwcm9kdWN0LmlkLFxyXG4gICAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcclxuICAgICAgICBwcmljZTogcHJvZHVjdC5wcmljZSxcclxuICAgICAgICBxdWFudGl0eTogMSxcclxuICAgICAgfTtcclxuICAgICAgc2V0UHJvZHVjdHMoWy4uLnByb2R1Y3RzLCBuZXdQcm9kdWN0XSk7XHJcbiAgICB9XHJcbiAgICByb3V0ZXIucHVzaChcIi9jYXJ0XCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZUZyb21LYXJ0ID0gKGlkKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVkUHJvZHVjdHMgPSBwcm9kdWN0cy5maWx0ZXIoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgIT09IGlkKTtcclxuICAgIHNldFByb2R1Y3RzKHVwZGF0ZWRQcm9kdWN0cyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5jcmVhc2VRdWFudGl0eSA9IChpZCkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlZFByb2R1Y3RzID0gcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiB7XHJcbiAgICAgIGlmIChwcm9kdWN0LmlkID09PSBpZCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5wcm9kdWN0LFxyXG4gICAgICAgICAgcXVhbnRpdHk6IHByb2R1Y3QucXVhbnRpdHkgKyAxLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHByb2R1Y3Q7XHJcbiAgICB9KTtcclxuICAgIHNldFByb2R1Y3RzKHVwZGF0ZWRQcm9kdWN0cyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVjcmVhc2VRdWFudGl0eSA9IChpZCkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlZFByb2R1Y3RzID0gcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiB7XHJcbiAgICAgIGlmIChwcm9kdWN0LmlkID09PSBpZCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5wcm9kdWN0LFxyXG4gICAgICAgICAgcXVhbnRpdHk6IE1hdGgubWF4KHByb2R1Y3QucXVhbnRpdHkgLSAxLCAxKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwcm9kdWN0O1xyXG4gICAgfSk7XHJcbiAgICBzZXRQcm9kdWN0cyh1cGRhdGVkUHJvZHVjdHMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBheSA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIGZvciAoY29uc3QgcHJvZHVjdCBvZiBwcm9kdWN0cykge1xyXG4gICAgICAgIGF3YWl0IHJlZ2lzdGVyU2FsZShwcm9kdWN0LCB1c2VyKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRQcm9kdWN0cyhbXSk7ICAgICAgXHJcbiAgICB9XHJcbiAgICByb3V0ZXIucHVzaChcIi9yZWdpc3RlclwiKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlZ2lzdGVyU2FsZSA9IGFzeW5jIChwcm9kdWN0LCB1c2VyKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzYWxlRGF0YSA9IHtcclxuICAgICAgICBzdHVkZW50OiB1c2VyLnVzZXJfaWQsXHJcbiAgICAgICAgY291cnNlOiBwcm9kdWN0LmlkLFxyXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCksXHJcbiAgICAgICAgcHJpY2VfcGFpZDogcHJvZHVjdC5wcmljZSAqIHByb2R1Y3QucXVhbnRpdHksXHJcbiAgICAgICAgcGF5X3N5c3RlbTogXCJvbmxpbmVcIixcclxuICAgICAgICBzdGF0ZTogXCJwYWlkXCIsXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHNhbGVEYXRhKSk7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS92MS9jb3Vyc2VzL3NhbGVzL1wiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aFRva2Vucy5hY2Nlc3N9YCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzYWxlRGF0YSksXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvZGFzaGJvYXJkL3N0dWRlbnRcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZyFcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciByZWdpc3RlcmluZyBzYWxlOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbGV0IGNvbnRleHREYXRhID0ge1xyXG4gICAgcHJvZHVjdHM6IHByb2R1Y3RzLFxyXG4gICAgdG90YWw6IHRvdGFsLFxyXG4gICAgYWRkVG9LYXJ0OiBhZGRUb0thcnQsXHJcbiAgICByZW1vdmVGcm9tS2FydDogcmVtb3ZlRnJvbUthcnQsXHJcbiAgICBpbmNyZWFzZVF1YW50aXR5OiBpbmNyZWFzZVF1YW50aXR5LFxyXG4gICAgZGVjcmVhc2VRdWFudGl0eTogZGVjcmVhc2VRdWFudGl0eSxcclxuICAgIHBheTogcGF5LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2hvcHBpbmdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0RGF0YX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU2hvcHBpbmdDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VBdXRoQ29udGV4dCIsIlNob3BwaW5nQ29udGV4dCIsIlNob3BwaW5nUHJvdmlkZXIiLCJjaGlsZHJlbiIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJ0b3RhbCIsInNldFRvdGFsIiwicm91dGVyIiwidXNlciIsImF1dGhUb2tlbnMiLCJzYXZlZFByb2R1Y3RzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ1cGRhdGVUb3RhbCIsIm5ld1RvdGFsIiwicmVkdWNlIiwiYWNjIiwicHJvZHVjdCIsInF1YW50aXR5IiwicHJpY2UiLCJhZGRUb0thcnQiLCJwcm9kdWN0RXhpc3QiLCJmaW5kIiwiaXRlbSIsImlkIiwibmV3UHJvZHVjdCIsIm5hbWUiLCJwdXNoIiwicmVtb3ZlRnJvbUthcnQiLCJ1cGRhdGVkUHJvZHVjdHMiLCJmaWx0ZXIiLCJpbmNyZWFzZVF1YW50aXR5IiwibWFwIiwiZGVjcmVhc2VRdWFudGl0eSIsIk1hdGgiLCJtYXgiLCJwYXkiLCJyZWdpc3RlclNhbGUiLCJzYWxlRGF0YSIsInN0dWRlbnQiLCJ1c2VyX2lkIiwiY291cnNlIiwiZGF0ZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInNsaWNlIiwicHJpY2VfcGFpZCIsInBheV9zeXN0ZW0iLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJhY2Nlc3MiLCJib2R5Iiwib2siLCJhbGVydCIsImVycm9yIiwiY29udGV4dERhdGEiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/ShoppingContext.js\n"));

/***/ })

});