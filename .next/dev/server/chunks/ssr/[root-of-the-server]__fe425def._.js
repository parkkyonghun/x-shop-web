module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/components/Navbar.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "Navbar-module__cJzEcG__actions",
  "badge": "Navbar-module__cJzEcG__badge",
  "cartBtn": "Navbar-module__cJzEcG__cartBtn",
  "link": "Navbar-module__cJzEcG__link",
  "links": "Navbar-module__cJzEcG__links",
  "logo": "Navbar-module__cJzEcG__logo",
  "navbar": "Navbar-module__cJzEcG__navbar",
});
}),
"[project]/src/context/CartContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function CartProvider({ children }) {
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Simple persistence
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const saved = localStorage.getItem("cart");
        if (saved) {
            try {
                setItems(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to load cart", e);
            }
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        localStorage.setItem("cart", JSON.stringify(items));
    }, [
        items
    ]);
    const addToCart = (product)=>{
        setItems((prev)=>{
            const existing = prev.find((item)=>item.id === product.id);
            if (existing) {
                return prev.map((item)=>item.id === product.id ? {
                        ...item,
                        quantity: item.quantity + 1
                    } : item);
            }
            return [
                ...prev,
                {
                    ...product,
                    quantity: 1
                }
            ];
        });
    };
    const removeFromCart = (productId)=>{
        setItems((prev)=>prev.filter((item)=>item.id !== productId));
    };
    const clearCart = ()=>setItems([]);
    const total = items.reduce((sum, item)=>sum + item.price * item.quantity, 0);
    const count = items.reduce((sum, item)=>sum + item.quantity, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            items,
            addToCart,
            removeFromCart,
            clearCart,
            total,
            count
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/CartContext.tsx",
        lineNumber: 60,
        columnNumber: 9
    }, this);
}
function useCart() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
}),
"[project]/src/actions/data:fb468f [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "logoutAction",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"00766229f63a44a872730efe1e0feaa1d4289745df":"logoutAction"},"src/actions/auth.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("00766229f63a44a872730efe1e0feaa1d4289745df", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "logoutAction");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IGRiIGZyb20gXCJAL2xpYi9kYlwiO1xuaW1wb3J0IHsgY3JlYXRlU2Vzc2lvbiwgbG9nb3V0IH0gZnJvbSBcIkAvbGliL3Nlc3Npb25cIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XG4vLyBpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbi8vIFNpbmNlIHV1aWQgaXNuJ3QgaW5zdGFsbGVkLCBsZXQncyB1c2UgYSBzaW1wbGUgcmFuZG9tIHN0cmluZyBmb3Igbm93IG9yIGluc3RhbGwgaXQuXG4vLyBJJ2xsIHVzZSBjcnlwdG8ucmFuZG9tVVVJRCgpIHdoaWNoIGlzIG5hdGl2ZSBpbiBOb2RlID4gMTlcbmltcG9ydCBjcnlwdG8gZnJvbSBcImNyeXB0b1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJBY3Rpb24oZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KFwiZW1haWxcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwicGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuXG4gICAgaWYgKCFuYW1lIHx8ICFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWRcIiB9O1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHVzZXIgZXhpc3RzXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gZGIucHJlcGFyZShcIlNFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgZW1haWwgPSA/XCIpLmdldChlbWFpbCk7XG4gICAgaWYgKGV4aXN0aW5nVXNlcikge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJVc2VyIGFscmVhZHkgZXhpc3RzXCIgfTtcbiAgICB9XG5cbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG4gICAgY29uc3QgaWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuXG4gICAgLy8gSW5zZXJ0IHVzZXJcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBzdG10ID0gZGIucHJlcGFyZShcIklOU0VSVCBJTlRPIHVzZXJzIChpZCwgbmFtZSwgZW1haWwsIHBhc3N3b3JkKSBWQUxVRVMgKD8sID8sID8sID8pXCIpO1xuICAgICAgICBzdG10LnJ1bihpZCwgbmFtZSwgZW1haWwsIGhhc2hlZFBhc3N3b3JkKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJEYXRhYmFzZSBlcnJvclwiIH07XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHNlc3Npb25cbiAgICBhd2FpdCBjcmVhdGVTZXNzaW9uKHsgaWQsIG5hbWUsIGVtYWlsIH0pO1xuICAgIHJlZGlyZWN0KFwiL1wiKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luQWN0aW9uKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KFwiZW1haWxcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwicGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuXG4gICAgY29uc3QgdXNlcjogYW55ID0gZGIucHJlcGFyZShcIlNFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgZW1haWwgPSA/XCIpLmdldChlbWFpbCk7XG5cbiAgICBpZiAoIXVzZXIgfHwgIShhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZCkpKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIkludmFsaWQgY3JlZGVudGlhbHNcIiB9O1xuICAgIH1cblxuICAgIGF3YWl0IGNyZWF0ZVNlc3Npb24oeyBpZDogdXNlci5pZCwgbmFtZTogdXNlci5uYW1lLCBlbWFpbDogdXNlci5lbWFpbCwgYXZhdGFyOiB1c2VyLmF2YXRhciB9KTtcbiAgICByZWRpcmVjdChcIi9cIik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dvdXRBY3Rpb24oKSB7XG4gICAgYXdhaXQgbG9nb3V0KCk7XG4gICAgcmVkaXJlY3QoXCIvbG9naW5cIik7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im9SQTBEc0IseUxBQUEifQ==
}),
"[project]/src/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$data$3a$fb468f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/actions/data:fb468f [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
;
;
;
function Navbar({ user }) {
    const { count } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navbar} glass-panel`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo,
                children: "X-Shop"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].links,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link,
                        children: "Store"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 19,
                        columnNumber: 17
                    }, this),
                    user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/orders",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link,
                        children: "Orders"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 20,
                        columnNumber: 26
                    }, this),
                    user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/profile",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link,
                        children: "Profile"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 21,
                        columnNumber: 26
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actions,
                children: [
                    user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "1rem",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "0.9rem",
                                    color: "var(--primary)"
                                },
                                children: user.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 27,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                action: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$data$3a$fb468f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["logoutAction"],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "btn btn-secondary",
                                    style: {
                                        padding: "0.5rem 1rem",
                                        fontSize: "0.9rem"
                                    },
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 29,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 28,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 26,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/login",
                        className: "btn btn-secondary",
                        style: {
                            padding: "0.5rem 1rem",
                            fontSize: "0.9rem"
                        },
                        children: "Login"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 35,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/cart",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cartBtn,
                        children: [
                            "🛒",
                            count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badge,
                                children: count
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 41,
                                columnNumber: 35
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fe425def._.js.map