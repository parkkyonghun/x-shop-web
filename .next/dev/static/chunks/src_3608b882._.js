(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "products",
    ()=>products
]);
const products = [
    {
        id: "1",
        name: "Neon Quantum Headset",
        description: "Immersive audio experience with active noise cancellation and RBG lighting.",
        price: 299.99,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
        rating: 4.8
    },
    {
        id: "2",
        name: "CyberWatch Series X",
        description: "Advanced health tracking with holographic display interface.",
        price: 399.99,
        category: "Wearables",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
        rating: 4.6
    },
    {
        id: "3",
        name: "ErgoMech Keypad",
        description: "Split mechanical keyboard for ultimate programming efficiency.",
        price: 159.00,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b91add1?w=800&q=80",
        rating: 4.9
    },
    {
        id: "4",
        name: "Hololens Glasses",
        description: "AR glasses that overlay digital information on the real world.",
        price: 1200.00,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281e960?w=800&q=80",
        rating: 4.5
    },
    {
        id: "5",
        name: "Sonic Bass Speaker",
        description: "Portable 360-degree sound with deep bass technology.",
        price: 199.50,
        category: "Audio",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
        rating: 4.7
    },
    {
        id: "6",
        name: "Drone X1",
        description: "4K camera drone with autonomous follow modes.",
        price: 850.00,
        category: "Drones",
        image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=800&q=80",
        rating: 4.8
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProductCard.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "ProductCard-module__t53O_a__card",
  "category": "ProductCard-module__t53O_a__category",
  "content": "ProductCard-module__t53O_a__content",
  "description": "ProductCard-module__t53O_a__description",
  "footer": "ProductCard-module__t53O_a__footer",
  "image": "ProductCard-module__t53O_a__image",
  "imageWrapper": "ProductCard-module__t53O_a__imageWrapper",
  "price": "ProductCard-module__t53O_a__price",
  "title": "ProductCard-module__t53O_a__title",
});
}),
"[project]/src/components/ProductCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ProductCard.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ProductCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "63c8f3df4e3ea17e49ca6e0320b8e690ab20d918ab2b64b75b045815abd185ab") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "63c8f3df4e3ea17e49ca6e0320b8e690ab20d918ab2b64b75b045815abd185ab";
    }
    const { product } = t0;
    const { addToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    let t1;
    if ($[1] !== product.image || $[2] !== product.name) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrapper,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: product.image,
                alt: product.name,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].image
            }, void 0, false, {
                fileName: "[project]/src/components/ProductCard.tsx",
                lineNumber: 26,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProductCard.tsx",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[1] = product.image;
        $[2] = product.name;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== product.category) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].category,
            children: product.category
        }, void 0, false, {
            fileName: "[project]/src/components/ProductCard.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[4] = product.category;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== product.name) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
            children: product.name
        }, void 0, false, {
            fileName: "[project]/src/components/ProductCard.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[6] = product.name;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== product.description) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
            children: product.description
        }, void 0, false, {
            fileName: "[project]/src/components/ProductCard.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[8] = product.description;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== product.price) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].price,
            children: [
                "$",
                product.price
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProductCard.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[10] = product.price;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    const t6 = `add-to-cart-${product.id}`;
    let t7;
    if ($[12] !== addToCart || $[13] !== product) {
        t7 = ({
            "ProductCard[<button>.onClick]": ()=>addToCart(product)
        })["ProductCard[<button>.onClick]"];
        $[12] = addToCart;
        $[13] = product;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t6 || $[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            id: t6,
            className: "btn btn-primary",
            onClick: t7,
            children: "Add to Cart"
        }, void 0, false, {
            fileName: "[project]/src/components/ProductCard.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[15] = t6;
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== t5 || $[19] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
            children: [
                t5,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProductCard.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[18] = t5;
        $[19] = t8;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== t2 || $[22] !== t3 || $[23] !== t4 || $[24] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
            children: [
                t2,
                t3,
                t4,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProductCard.tsx",
            lineNumber: 97,
            columnNumber: 11
        }, this);
        $[21] = t2;
        $[22] = t3;
        $[23] = t4;
        $[24] = t9;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    let t11;
    if ($[26] !== t1 || $[27] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `glass-panel product-card ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card}`,
            children: [
                t1,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProductCard.tsx",
            lineNumber: 108,
            columnNumber: 11
        }, this);
        $[26] = t1;
        $[27] = t10;
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    return t11;
}
_s(ProductCard, "nl1GTXZ5w6qFMt4L7GEMTgZvsmk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "af6c01839ffaaf18cf0ee0a06f8d57570a5e7381c4546a0c41c874b1c4802065") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "af6c01839ffaaf18cf0ee0a06f8d57570a5e7381c4546a0c41c874b1c4802065";
    }
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            "All",
            ...Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].map(_HomeProductsMap)))
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const categories = t0;
    let t1;
    if ($[2] !== category || $[3] !== searchTerm) {
        t1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter({
            "Home[products.filter()]": (product)=>{
                const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
                const matchesCategory = category === "All" || product.category === category;
                return matchesSearch && matchesCategory;
            }
        }["Home[products.filter()]"]);
        $[2] = category;
        $[3] = searchTerm;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const filteredProducts = t1;
    let t2;
    let t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            padding: "4rem 0",
            textAlign: "center"
        };
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "heading-1",
            children: "Future of Commerce"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                fontSize: "1.2rem",
                color: "var(--muted)",
                maxWidth: "600px",
                margin: "0 auto 3rem"
            },
            children: "Discover the latest in tech, wearables, and holographic gear. Curated for the modern explorer."
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
        $[7] = t4;
    } else {
        t2 = $[5];
        t3 = $[6];
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            padding: "1.5rem",
            display: "flex",
            gap: "1rem",
            maxWidth: "700px",
            margin: "0 auto",
            flexWrap: "wrap",
            alignItems: "center"
        };
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "Home[<input>.onChange]": (e)=>setSearchTerm(e.target.value)
        })["Home[<input>.onChange]"];
        t7 = {
            flex: 1,
            minWidth: "200px",
            padding: "0.8rem",
            borderRadius: "0.5rem",
            border: "1px solid var(--border)",
            background: "var(--background)",
            color: "var(--foreground)"
        };
        $[9] = t6;
        $[10] = t7;
    } else {
        t6 = $[9];
        t7 = $[10];
    }
    let t8;
    if ($[11] !== searchTerm) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Search products...",
            value: searchTerm,
            onChange: t6,
            style: t7
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[11] = searchTerm;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t10;
    let t11;
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "Home[<select>.onChange]": (e_0)=>setCategory(e_0.target.value)
        })["Home[<select>.onChange]"];
        t10 = {
            padding: "0.8rem",
            borderRadius: "0.5rem",
            border: "1px solid var(--border)",
            background: "var(--background)",
            color: "var(--foreground)",
            minWidth: "150px"
        };
        t11 = categories.map(_HomeCategoriesMap);
        $[13] = t10;
        $[14] = t11;
        $[15] = t9;
    } else {
        t10 = $[13];
        t11 = $[14];
        t9 = $[15];
    }
    let t12;
    if ($[16] !== category) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            value: category,
            onChange: t9,
            style: t10,
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, this);
        $[16] = category;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== t12 || $[19] !== t8) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            style: t2,
            children: [
                t3,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass-panel",
                    style: t5,
                    children: [
                        t8,
                        t12
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 142,
                    columnNumber: 38
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[18] = t12;
        $[19] = t8;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = {
            marginBottom: "4rem"
        };
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    let t15;
    if ($[22] !== filteredProducts) {
        t15 = filteredProducts.length > 0 ? filteredProducts.map(_HomeFilteredProductsMap) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                gridColumn: "1 / -1",
                textAlign: "center",
                padding: "4rem",
                color: "var(--muted)"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "No products found matching your criteria."
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 165,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 160,
            columnNumber: 90
        }, this);
        $[22] = filteredProducts;
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    let t16;
    if ($[24] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "card-grid",
            style: t14,
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[24] = t15;
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    if ($[26] !== t13 || $[27] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                t13,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[26] = t13;
        $[27] = t16;
        $[28] = t17;
    } else {
        t17 = $[28];
    }
    return t17;
}
_s(Home, "/X3yZM8+v5iQwb8kKncPTC4r9V4=");
_c = Home;
function _HomeFilteredProductsMap(product_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        product: product_0
    }, product_0.id, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 191,
        columnNumber: 10
    }, this);
}
function _HomeCategoriesMap(cat) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: cat,
        children: cat
    }, cat, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 194,
        columnNumber: 10
    }, this);
}
function _HomeProductsMap(p) {
    return p.category;
}
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_3608b882._.js.map