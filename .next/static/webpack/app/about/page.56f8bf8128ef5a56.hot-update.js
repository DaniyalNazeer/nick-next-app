"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/about/page",{

/***/ "(app-pages-browser)/./app/base-layout/base-layout.js":
/*!****************************************!*\
  !*** ./app/base-layout/base-layout.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layouts_header_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layouts/header/index */ \"(app-pages-browser)/./app/components/layouts/header/index.js\");\n/* harmony import */ var _components_layouts_footer_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts/footer/index */ \"(app-pages-browser)/./app/components/layouts/footer/index.js\");\n\n\n\n\n// Header & Footer Endpoint Start\nconst getData = async (context)=>{\n    const url = \"\".concat(\"https://allycapitalgroup.chiccolacreative.com\", \"/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer\");\n    try {\n        const res = await fetch(url);\n        const HeaderFooter = await res.json();\n        return HeaderFooter;\n    } catch (error) {}\n};\n// Header & Footer Endpoint End\n// Home portfolios Section Endpoint End\nconst BaseLayout = async (param)=>{\n    let { children } = param;\n    const { data: { header, footer } } = await getData();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_header_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                data: header\n            }, void 0, false, {\n                fileName: \"E:\\\\xampp\\\\htdocs\\\\nick\\\\nick-next-app\\\\app\\\\base-layout\\\\base-layout.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_footer_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                data: footer\n            }, void 0, false, {\n                fileName: \"E:\\\\xampp\\\\htdocs\\\\nick\\\\nick-next-app\\\\app\\\\base-layout\\\\base-layout.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\xampp\\\\htdocs\\\\nick\\\\nick-next-app\\\\app\\\\base-layout\\\\base-layout.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_c = BaseLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseLayout);\nvar _c;\n$RefreshReg$(_c, \"BaseLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9iYXNlLWxheW91dC9iYXNlLWxheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQStCO0FBQ3dCO0FBQ0E7QUFLdkQsaUNBQWlDO0FBRWpDLE1BQU1HLFVBQVUsT0FBT0M7SUFFckIsTUFBTUMsTUFBTSxHQUE4QyxPQUEzQ0MsK0NBQTBDLEVBQUM7SUFFMUQsSUFBSTtRQUNGLE1BQU1HLE1BQU0sTUFBTUMsTUFBTUw7UUFDeEIsTUFBTU0sZUFBZSxNQUFNRixJQUFJRyxJQUFJO1FBQ25DLE9BQU9EO0lBQ1QsRUFBRSxPQUFPRSxPQUFPLENBQUM7QUFDbkI7QUFFQSwrQkFBK0I7QUFhL0IsdUNBQXVDO0FBR3ZDLE1BQU1DLGFBQWE7UUFBTyxFQUFDQyxRQUFRLEVBQUM7SUFDbEMsTUFBTSxFQUNKQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFDLEVBQ3hCLEdBQUcsTUFBTWY7SUFVVixxQkFDRSw4REFBQ2dCOzswQkFDQyw4REFBQ2xCLHdFQUFNQTtnQkFBQ2UsTUFBTUM7Ozs7OztZQUNuQkY7MEJBQ0ssOERBQUNiLHdFQUFNQTtnQkFBQ2MsTUFBTUU7Ozs7Ozs7Ozs7OztBQUdwQjtLQXBCTUo7QUFzQk4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Jhc2UtbGF5b3V0L2Jhc2UtbGF5b3V0LmpzPzFhNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXRzL2hlYWRlci9pbmRleCdcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dHMvZm9vdGVyL2luZGV4J1xyXG5cclxuIFxyXG5cclxuXHJcbi8vIEhlYWRlciAmIEZvb3RlciBFbmRwb2ludCBTdGFydFxyXG5cclxuY29uc3QgZ2V0RGF0YSA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgXHJcbiAgY29uc3QgdXJsID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfV09SRFBSRVNTX1NJVEVfVVJMfS93cC1qc29uL3JhZS92MS9oZWFkZXItZm9vdGVyP2hlYWRlcl9sb2NhdGlvbl9pZD1oY21zLW1lbnUtaGVhZGVyJmZvb3Rlcl9sb2NhdGlvbl9pZD1oY21zLW1lbnUtZm9vdGVyYDtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCBIZWFkZXJGb290ZXIgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIEhlYWRlckZvb3RlcjtcclxuICB9IGNhdGNoIChlcnJvcikge31cclxufTtcclxuXHJcbi8vIEhlYWRlciAmIEZvb3RlciBFbmRwb2ludCBFbmRcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gSG9tZSBwb3J0Zm9saW9zIFNlY3Rpb24gRW5kcG9pbnQgRW5kXHJcblxyXG5cclxuY29uc3QgQmFzZUxheW91dCA9IGFzeW5jICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgZGF0YTogeyBoZWFkZXIsIGZvb3Rlcn0sXHJcbiAgfSA9IGF3YWl0IGdldERhdGEoKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXIgZGF0YT17aGVhZGVyfSAvPlxyXG57Y2hpbGRyZW59XHJcbiAgICAgIDxGb290ZXIgZGF0YT17Zm9vdGVyfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VMYXlvdXQ7XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkhlYWRlciIsIkZvb3RlciIsImdldERhdGEiLCJjb250ZXh0IiwidXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1dPUkRQUkVTU19TSVRFX1VSTCIsInJlcyIsImZldGNoIiwiSGVhZGVyRm9vdGVyIiwianNvbiIsImVycm9yIiwiQmFzZUxheW91dCIsImNoaWxkcmVuIiwiZGF0YSIsImhlYWRlciIsImZvb3RlciIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/base-layout/base-layout.js\n"));

/***/ })

});