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

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"93580eeb4827\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NWE1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjkzNTgwZWViNDgyN1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/context/ShoppingContext.js":
/*!****************************************!*\
  !*** ./src/context/ShoppingContext.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ShoppingProvider: function() { return /* binding */ ShoppingProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useAuthContext */ \"(app-pages-browser)/./src/hooks/useAuthContext.js\");\n/* __next_internal_client_entry_do_not_use__ default,ShoppingProvider auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ShoppingContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShoppingContext);\nconst ShoppingProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    let { user, authTokens } = (0,_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedProducts = JSON.parse(localStorage.getItem(\"cart\")) || [];\n        setProducts(savedProducts);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"cart\", JSON.stringify(products));\n        updateTotal();\n    }, [\n        products\n    ]);\n    const updateTotal = ()=>{\n        const newTotal = products.reduce((acc, product)=>{\n            return acc + product.quantity * product.price;\n        }, 0);\n        setTotal(newTotal);\n    };\n    const addToKart = (product)=>{\n        const productExist = products.find((item)=>item.id === product.id);\n        if (!productExist) {\n            const newProduct = {\n                id: product.id,\n                name: product.name,\n                price: product.price,\n                quantity: 1\n            };\n            setProducts([\n                ...products,\n                newProduct\n            ]);\n        }\n        router.push(\"/cart\");\n    };\n    const removeFromKart = (id)=>{\n        const updatedProducts = products.filter((product)=>product.id !== id);\n        setProducts(updatedProducts);\n    };\n    const increaseQuantity = (id)=>{\n        const updatedProducts = products.map((product)=>{\n            if (product.id === id) {\n                return {\n                    ...product,\n                    quantity: product.quantity + 1\n                };\n            }\n            return product;\n        });\n        setProducts(updatedProducts);\n    };\n    const decreaseQuantity = (id)=>{\n        const updatedProducts = products.map((product)=>{\n            if (product.id === id) {\n                return {\n                    ...product,\n                    quantity: Math.max(product.quantity - 1, 1)\n                };\n            }\n            return product;\n        });\n        setProducts(updatedProducts);\n    };\n    const pay = async ()=>{\n        for (const product of products){\n            await registerSale(product, user);\n        }\n        setProducts([]);\n    };\n    const registerSale = async (product, user)=>{\n        try {\n            const saleData = {\n                student: user.user_id,\n                course: product.id,\n                date: new Date().toISOString().slice(0, 10),\n                price_paid: product.price * product.quantity,\n                pay_system: \"online\",\n                state: \"paid\"\n            };\n            console.log(JSON.stringify(saleData));\n            const response = await fetch(\"http://127.0.0.1:8000/api/v1/courses/sales/\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    Authorization: \"Bearer \".concat(authTokens.access)\n                },\n                body: JSON.stringify(saleData)\n            });\n            if (response.ok) {\n                router.push(\"/dashboard/student\");\n            } else {\n                alert(\"Something went wrong!\");\n            }\n        } catch (error) {\n            console.error(\"Error registering sale:\", error);\n        }\n    };\n    let contextData = {\n        products: products,\n        total: total,\n        addToKart: addToKart,\n        removeFromKart: removeFromKart,\n        increaseQuantity: increaseQuantity,\n        decreaseQuantity: decreaseQuantity,\n        pay: pay\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ShoppingContext.Provider, {\n        value: contextData,\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\Trabajo\\\\AlVolante Web-Rest-App\\\\frontend\\\\src\\\\context\\\\ShoppingContext.js\",\n        lineNumber: 130,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ShoppingProvider, \"zzMZo7Ry9y/VWFwvC9RrNBzaE2U=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext\n    ];\n});\n_c = ShoppingProvider;\nvar _c;\n$RefreshReg$(_c, \"ShoppingProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L1Nob3BwaW5nQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFMkQ7QUFDZjtBQUNhO0FBRXpELE1BQU1LLGdDQUFrQkwsb0RBQWFBLENBQUM7QUFDdEMsK0RBQWVLLGVBQWVBLEVBQUM7QUFFeEIsTUFBTUMsbUJBQW1CO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUMzQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQUM7SUFDbkMsTUFBTVcsU0FBU1QsMERBQVNBO0lBQ3hCLElBQUksRUFBRVUsSUFBSSxFQUFFQyxVQUFVLEVBQUUsR0FBR1YscUVBQWNBO0lBRXpDRixnREFBU0EsQ0FBQztRQUNSLE1BQU1hLGdCQUFnQkMsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUMsWUFBWSxFQUFFO1FBQ3BFVixZQUFZTTtJQUNkLEdBQUcsRUFBRTtJQUVMYixnREFBU0EsQ0FBQztRQUNSZ0IsYUFBYUUsT0FBTyxDQUFDLFFBQVFKLEtBQUtLLFNBQVMsQ0FBQ2I7UUFDNUNjO0lBQ0YsR0FBRztRQUFDZDtLQUFTO0lBRWIsTUFBTWMsY0FBYztRQUNsQixNQUFNQyxXQUFXZixTQUFTZ0IsTUFBTSxDQUFDLENBQUNDLEtBQUtDO1lBQ3JDLE9BQU9ELE1BQU1DLFFBQVFDLFFBQVEsR0FBR0QsUUFBUUUsS0FBSztRQUMvQyxHQUFHO1FBQ0hqQixTQUFTWTtJQUNYO0lBRUEsTUFBTU0sWUFBWSxDQUFDSDtRQUNqQixNQUFNSSxlQUFldEIsU0FBU3VCLElBQUksQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxFQUFFLEtBQUtQLFFBQVFPLEVBQUU7UUFDbkUsSUFBSSxDQUFDSCxjQUFjO1lBQ2pCLE1BQU1JLGFBQWE7Z0JBQ2pCRCxJQUFJUCxRQUFRTyxFQUFFO2dCQUNkRSxNQUFNVCxRQUFRUyxJQUFJO2dCQUNsQlAsT0FBT0YsUUFBUUUsS0FBSztnQkFDcEJELFVBQVU7WUFDWjtZQUNBbEIsWUFBWTttQkFBSUQ7Z0JBQVUwQjthQUFXO1FBQ3ZDO1FBQ0F0QixPQUFPd0IsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxNQUFNQyxpQkFBaUIsQ0FBQ0o7UUFDdEIsTUFBTUssa0JBQWtCOUIsU0FBUytCLE1BQU0sQ0FBQyxDQUFDYixVQUFZQSxRQUFRTyxFQUFFLEtBQUtBO1FBQ3BFeEIsWUFBWTZCO0lBQ2Q7SUFFQSxNQUFNRSxtQkFBbUIsQ0FBQ1A7UUFDeEIsTUFBTUssa0JBQWtCOUIsU0FBU2lDLEdBQUcsQ0FBQyxDQUFDZjtZQUNwQyxJQUFJQSxRQUFRTyxFQUFFLEtBQUtBLElBQUk7Z0JBQ3JCLE9BQU87b0JBQ0wsR0FBR1AsT0FBTztvQkFDVkMsVUFBVUQsUUFBUUMsUUFBUSxHQUFHO2dCQUMvQjtZQUNGO1lBQ0EsT0FBT0Q7UUFDVDtRQUNBakIsWUFBWTZCO0lBQ2Q7SUFFQSxNQUFNSSxtQkFBbUIsQ0FBQ1Q7UUFDeEIsTUFBTUssa0JBQWtCOUIsU0FBU2lDLEdBQUcsQ0FBQyxDQUFDZjtZQUNwQyxJQUFJQSxRQUFRTyxFQUFFLEtBQUtBLElBQUk7Z0JBQ3JCLE9BQU87b0JBQ0wsR0FBR1AsT0FBTztvQkFDVkMsVUFBVWdCLEtBQUtDLEdBQUcsQ0FBQ2xCLFFBQVFDLFFBQVEsR0FBRyxHQUFHO2dCQUMzQztZQUNGO1lBQ0EsT0FBT0Q7UUFDVDtRQUNBakIsWUFBWTZCO0lBQ2Q7SUFFQSxNQUFNTyxNQUFNO1FBRVYsS0FBSyxNQUFNbkIsV0FBV2xCLFNBQVU7WUFDOUIsTUFBTXNDLGFBQWFwQixTQUFTYjtRQUM5QjtRQUNBSixZQUFZLEVBQUU7SUFDaEI7SUFFQSxNQUFNcUMsZUFBZSxPQUFPcEIsU0FBU2I7UUFDbkMsSUFBSTtZQUNGLE1BQU1rQyxXQUFXO2dCQUNmQyxTQUFTbkMsS0FBS29DLE9BQU87Z0JBQ3JCQyxRQUFReEIsUUFBUU8sRUFBRTtnQkFDbEJrQixNQUFNLElBQUlDLE9BQU9DLFdBQVcsR0FBR0MsS0FBSyxDQUFDLEdBQUc7Z0JBQ3hDQyxZQUFZN0IsUUFBUUUsS0FBSyxHQUFHRixRQUFRQyxRQUFRO2dCQUM1QzZCLFlBQVk7Z0JBQ1pDLE9BQU87WUFDVDtZQUNBQyxRQUFRQyxHQUFHLENBQUMzQyxLQUFLSyxTQUFTLENBQUMwQjtZQUUzQixNQUFNYSxXQUFXLE1BQU1DLE1BQU0sK0NBQzNCO2dCQUNFQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtvQkFDaEJDLGVBQWUsVUFBNEIsT0FBbEJsRCxXQUFXbUQsTUFBTTtnQkFDNUM7Z0JBQ0FDLE1BQU1sRCxLQUFLSyxTQUFTLENBQUMwQjtZQUN2QjtZQUdGLElBQUlhLFNBQVNPLEVBQUUsRUFBRTtnQkFDZnZELE9BQU93QixJQUFJLENBQUM7WUFDZCxPQUFPO2dCQUNMZ0MsTUFBTTtZQUNSO1FBQ0YsRUFBRSxPQUFPQyxPQUFPO1lBQ2RYLFFBQVFXLEtBQUssQ0FBQywyQkFBMkJBO1FBQzNDO0lBQ0Y7SUFFQSxJQUFJQyxjQUFjO1FBQ2hCOUQsVUFBVUE7UUFDVkUsT0FBT0E7UUFDUG1CLFdBQVdBO1FBQ1hRLGdCQUFnQkE7UUFDaEJHLGtCQUFrQkE7UUFDbEJFLGtCQUFrQkE7UUFDbEJHLEtBQUtBO0lBQ1A7SUFFQSxxQkFDRSw4REFBQ3hDLGdCQUFnQmtFLFFBQVE7UUFBQ0MsT0FBT0Y7a0JBQzlCL0Q7Ozs7OztBQUdQLEVBQUU7R0E1SFdEOztRQUdJSCxzREFBU0E7UUFDR0MsaUVBQWNBOzs7S0FKOUJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L1Nob3BwaW5nQ29udGV4dC5qcz9jNDM5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZUF1dGhDb250ZXh0IH0gZnJvbSBcIi4uL2hvb2tzL3VzZUF1dGhDb250ZXh0XCI7XHJcblxyXG5jb25zdCBTaG9wcGluZ0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5leHBvcnQgZGVmYXVsdCBTaG9wcGluZ0NvbnRleHQ7XHJcblxyXG5leHBvcnQgY29uc3QgU2hvcHBpbmdQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGxldCB7IHVzZXIsIGF1dGhUb2tlbnMgfSA9IHVzZUF1dGhDb250ZXh0KCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzYXZlZFByb2R1Y3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIikpIHx8IFtdO1xyXG4gICAgc2V0UHJvZHVjdHMoc2F2ZWRQcm9kdWN0cyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KHByb2R1Y3RzKSk7XHJcbiAgICB1cGRhdGVUb3RhbCgpO1xyXG4gIH0sIFtwcm9kdWN0c10pO1xyXG5cclxuICBjb25zdCB1cGRhdGVUb3RhbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1RvdGFsID0gcHJvZHVjdHMucmVkdWNlKChhY2MsIHByb2R1Y3QpID0+IHtcclxuICAgICAgcmV0dXJuIGFjYyArIHByb2R1Y3QucXVhbnRpdHkgKiBwcm9kdWN0LnByaWNlO1xyXG4gICAgfSwgMCk7XHJcbiAgICBzZXRUb3RhbChuZXdUb3RhbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkVG9LYXJ0ID0gKHByb2R1Y3QpID0+IHtcclxuICAgIGNvbnN0IHByb2R1Y3RFeGlzdCA9IHByb2R1Y3RzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHByb2R1Y3QuaWQpO1xyXG4gICAgaWYgKCFwcm9kdWN0RXhpc3QpIHtcclxuICAgICAgY29uc3QgbmV3UHJvZHVjdCA9IHtcclxuICAgICAgICBpZDogcHJvZHVjdC5pZCxcclxuICAgICAgICBuYW1lOiBwcm9kdWN0Lm5hbWUsXHJcbiAgICAgICAgcHJpY2U6IHByb2R1Y3QucHJpY2UsXHJcbiAgICAgICAgcXVhbnRpdHk6IDEsXHJcbiAgICAgIH07XHJcbiAgICAgIHNldFByb2R1Y3RzKFsuLi5wcm9kdWN0cywgbmV3UHJvZHVjdF0pO1xyXG4gICAgfVxyXG4gICAgcm91dGVyLnB1c2goXCIvY2FydFwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW1vdmVGcm9tS2FydCA9IChpZCkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlZFByb2R1Y3RzID0gcHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkICE9PSBpZCk7XHJcbiAgICBzZXRQcm9kdWN0cyh1cGRhdGVkUHJvZHVjdHMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluY3JlYXNlUXVhbnRpdHkgPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZWRQcm9kdWN0cyA9IHByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4ge1xyXG4gICAgICBpZiAocHJvZHVjdC5pZCA9PT0gaWQpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4ucHJvZHVjdCxcclxuICAgICAgICAgIHF1YW50aXR5OiBwcm9kdWN0LnF1YW50aXR5ICsgMSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwcm9kdWN0O1xyXG4gICAgfSk7XHJcbiAgICBzZXRQcm9kdWN0cyh1cGRhdGVkUHJvZHVjdHMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlY3JlYXNlUXVhbnRpdHkgPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZWRQcm9kdWN0cyA9IHByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4ge1xyXG4gICAgICBpZiAocHJvZHVjdC5pZCA9PT0gaWQpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4ucHJvZHVjdCxcclxuICAgICAgICAgIHF1YW50aXR5OiBNYXRoLm1heChwcm9kdWN0LnF1YW50aXR5IC0gMSwgMSksXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcHJvZHVjdDtcclxuICAgIH0pO1xyXG4gICAgc2V0UHJvZHVjdHModXBkYXRlZFByb2R1Y3RzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwYXkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBcclxuICAgIGZvciAoY29uc3QgcHJvZHVjdCBvZiBwcm9kdWN0cykge1xyXG4gICAgICBhd2FpdCByZWdpc3RlclNhbGUocHJvZHVjdCwgdXNlcik7XHJcbiAgICB9XHJcbiAgICBzZXRQcm9kdWN0cyhbXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVnaXN0ZXJTYWxlID0gYXN5bmMgKHByb2R1Y3QsIHVzZXIpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHNhbGVEYXRhID0ge1xyXG4gICAgICAgIHN0dWRlbnQ6IHVzZXIudXNlcl9pZCxcclxuICAgICAgICBjb3Vyc2U6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSxcclxuICAgICAgICBwcmljZV9wYWlkOiBwcm9kdWN0LnByaWNlICogcHJvZHVjdC5xdWFudGl0eSxcclxuICAgICAgICBwYXlfc3lzdGVtOiBcIm9ubGluZVwiLFxyXG4gICAgICAgIHN0YXRlOiBcInBhaWRcIixcclxuICAgICAgfTtcclxuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoc2FsZURhdGEpKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3YxL2NvdXJzZXMvc2FsZXMvXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthdXRoVG9rZW5zLmFjY2Vzc31gLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHNhbGVEYXRhKSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmQvc3R1ZGVudFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlZ2lzdGVyaW5nIHNhbGU6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBsZXQgY29udGV4dERhdGEgPSB7XHJcbiAgICBwcm9kdWN0czogcHJvZHVjdHMsXHJcbiAgICB0b3RhbDogdG90YWwsXHJcbiAgICBhZGRUb0thcnQ6IGFkZFRvS2FydCxcclxuICAgIHJlbW92ZUZyb21LYXJ0OiByZW1vdmVGcm9tS2FydCxcclxuICAgIGluY3JlYXNlUXVhbnRpdHk6IGluY3JlYXNlUXVhbnRpdHksXHJcbiAgICBkZWNyZWFzZVF1YW50aXR5OiBkZWNyZWFzZVF1YW50aXR5LFxyXG4gICAgcGF5OiBwYXksXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTaG9wcGluZ0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHREYXRhfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TaG9wcGluZ0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInVzZUF1dGhDb250ZXh0IiwiU2hvcHBpbmdDb250ZXh0IiwiU2hvcHBpbmdQcm92aWRlciIsImNoaWxkcmVuIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsInRvdGFsIiwic2V0VG90YWwiLCJyb3V0ZXIiLCJ1c2VyIiwiYXV0aFRva2VucyIsInNhdmVkUHJvZHVjdHMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInVwZGF0ZVRvdGFsIiwibmV3VG90YWwiLCJyZWR1Y2UiLCJhY2MiLCJwcm9kdWN0IiwicXVhbnRpdHkiLCJwcmljZSIsImFkZFRvS2FydCIsInByb2R1Y3RFeGlzdCIsImZpbmQiLCJpdGVtIiwiaWQiLCJuZXdQcm9kdWN0IiwibmFtZSIsInB1c2giLCJyZW1vdmVGcm9tS2FydCIsInVwZGF0ZWRQcm9kdWN0cyIsImZpbHRlciIsImluY3JlYXNlUXVhbnRpdHkiLCJtYXAiLCJkZWNyZWFzZVF1YW50aXR5IiwiTWF0aCIsIm1heCIsInBheSIsInJlZ2lzdGVyU2FsZSIsInNhbGVEYXRhIiwic3R1ZGVudCIsInVzZXJfaWQiLCJjb3Vyc2UiLCJkYXRlIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic2xpY2UiLCJwcmljZV9wYWlkIiwicGF5X3N5c3RlbSIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImFjY2VzcyIsImJvZHkiLCJvayIsImFsZXJ0IiwiZXJyb3IiLCJjb250ZXh0RGF0YSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/ShoppingContext.js\n"));

/***/ })

});