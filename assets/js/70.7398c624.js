(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{628:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://picbed.kimyang.cn/202109050848241.jpeg",alt:""}}),t._v(" "),t._v("\n当我在做业余项目库时，我需要表示一个缺失的值。在过去，我习惯在设置中使用 "),a("code",[t._v("nullable")]),t._v(" 方法，而当我想要更多的控制时，则使用 "),a("code",[t._v("Option")]),t._v(" 方法。")]),t._v(" "),a("p",[t._v("在这种情况下，我觉得两者都不合适，所以我想出了一个不同的方法，并在本文中分享出来。")]),t._v(" "),a("h2",{attrs:{id:"nullable-方法的不足之处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nullable-方法的不足之处"}},[t._v("#")]),t._v(" "),a("code",[t._v("nullable")]),t._v(" 方法的不足之处")]),t._v(" "),a("p",[a("code",[t._v("nullable")]),t._v(" 方法表示当有一个值时，它是一个字符串、一个数字或一个对象；当没有值时，使用 "),a("code",[t._v("null")]),t._v(" 或 "),a("code",[t._v("undefined")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("提示")]),t._v("：如果你在 "),a("code",[t._v("TypeScript")]),t._v(" 中使用 "),a("code",[t._v("nullable")]),t._v(" 类型，请确保开启了 "),a("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#strictNullChecks",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("strictNullChecks")]),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("p",[t._v("这通常是可行的。")]),t._v(" "),a("p",[t._v("通常来说，有两种情况是不可以的：")]),t._v(" "),a("p",[t._v("1、这个值可以是 "),a("code",[t._v("null")]),t._v("，也可以是 "),a("code",[t._v("undefined")]),t._v("。这些都是有效的 JavaScript 代码，可以在很多场景使用它们。\n2、你想添加一些高级逻辑，到处写 "),a("code",[t._v("x == null")]),t._v(" 会很麻烦。")]),t._v(" "),a("p",[t._v("在我的示例中，我正在处理一个 "),a("code",[t._v("Promise")]),t._v(" 的输出，它可以返回任何内容。而且我可以预见到，这两个空缺值最终都会被返回。")]),t._v(" "),a("p",[t._v("通常来说，问题 1 和 2 有相同的解决方案：使用一个实现 "),a("code",[t._v("Option")]),t._v(" 类型的库。")]),t._v(" "),a("h2",{attrs:{id:"option-方法的冗余之处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-方法的冗余之处"}},[t._v("#")]),t._v(" "),a("code",[t._v("Option")]),t._v(" 方法的冗余之处")]),t._v(" "),a("p",[a("code",[t._v("Option")]),t._v(" 类型有两种可能性：要么没有值（"),a("code",[t._v("None")]),t._v(" 或 "),a("code",[t._v("Nothing")]),t._v("），要么有一个值（"),a("code",[t._v("Some")]),t._v(" 或 "),a("code",[t._v("Just")]),t._v("）。")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("JavaScript")]),t._v(" 或 "),a("code",[t._v("TypeScript")]),t._v(" 中，这意味着引入一个新的结构来包装这个值。最常见的是一个带有属性 "),a("code",[t._v("tag")]),t._v("（标签）的对象，定义了它可能是什么。")]),t._v(" "),a("p",[t._v("这就是你如何在 "),a("code",[t._v("TypeScript")]),t._v(" 中快速实现 "),a("code",[t._v("Option")]),t._v(" 方法：")]),t._v(" "),a("div",{staticClass:"language-TypeScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Option"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" tag"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'none'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" tag"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'some'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("通常情况下，你会使用一个定义了类型的库，再附带使用一堆有用的工具。"),a("a",{attrs:{href:"https://dev.to/ryanleecode/practical-guide-to-fp-ts-option-map-flatten-chain-6d5",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里有一个关于我最喜欢的 "),a("code",[t._v("fp-ts")]),t._v(" 库中的 "),a("code",[t._v("Option")]),t._v(" 介绍"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/robinpokorny/promise-throttle-all",target:"_blank",rel:"noopener noreferrer"}},[t._v("我正在建立的这个库"),a("OutboundLink")],1),t._v("很小，没有任何依赖，而且没有必要使用任何 "),a("code",[t._v("Option")]),t._v(" 工具。因此，引入一个 "),a("code",[t._v("Option")]),t._v(" 库将是多余的。")]),t._v(" "),a("p",[t._v("有一段时间，我在考虑对 "),a("code",[t._v("Option")]),t._v(" 进行内联，也就是从头开始编码。对于我的用例来说，这只是几行而已。不过，这将使库的逻辑变得有点复杂。")]),t._v(" "),a("p",[t._v("然后，我有了一个更好的想法！")]),t._v(" "),a("h2",{attrs:{id:"使用-symbol-代替-null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-symbol-代替-null"}},[t._v("#")]),t._v(" 使用 Symbol 代替 null")]),t._v(" "),a("p",[t._v("回到 "),a("code",[t._v("Nullable")]),t._v("，无法解决的问题是 "),a("code",[t._v("null")]),t._v("（或 "),a("code",[t._v("undefined")]),t._v("）是全局的，它是一个等于自身的值，对每个人都是一样的。")]),t._v(" "),a("p",[t._v("如果你返回 "),a("code",[t._v("null")]),t._v("，我也返回 "),a("code",[t._v("null")]),t._v("，以后就不可能找到 "),a("code",[t._v("null")]),t._v(" 的来源了。")]),t._v(" "),a("p",[t._v("换句话说，永远只有一个实例。为了解决这个问题，我们需要有一个新的 "),a("code",[t._v("null")]),t._v(" 实例。")]),t._v(" "),a("p",[t._v("当然，我们可以使用一个空对象。在 "),a("code",[t._v("JavaScript")]),t._v(" 中，每个对象都是一个新的实例，不等于任何其他对象。")]),t._v(" "),a("p",[t._v("但是，在 "),a("code",[t._v("ES6")]),t._v(" 中，我们得到了一个新的基元："),a("code",[t._v("Symbol")]),t._v("。（这里有一些"),a("a",{attrs:{href:"https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于 "),a("code",[t._v("Symbols")]),t._v(" 的介绍"),a("OutboundLink")],1),t._v("）")]),t._v(" "),a("p",[t._v("我所做的是使用 "),a("code",[t._v("Symbol")]),t._v(" 表示一个新的常量，代表一个缺失的值。")]),t._v(" "),a("div",{staticClass:"language-TypeScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" None "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("让我们来看下有哪些好处：")]),t._v(" "),a("ul",[a("li",[t._v("它是一个简单的值，不需要封装")]),t._v(" "),a("li",[t._v("其他的都被当作数据来处理")]),t._v(" "),a("li",[t._v("这是一个私有的 "),a("code",[t._v("None")]),t._v("，不能在别处重新创建")]),t._v(" "),a("li",[t._v("它在我们的代码之外没有任何意义")]),t._v(" "),a("li",[t._v("标签使调试变得更容易")])]),t._v(" "),a("p",[t._v("特别是第一点允许使用 "),a("code",[t._v("None")]),t._v(" 作为 "),a("code",[t._v("null")]),t._v("。请看一些使用示例：")]),t._v(" "),a("div",{staticClass:"language-TypeScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("isNone")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("unknown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" None\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("hasNone")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("unknown")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n  arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("some")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" None"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" map "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" None\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" None"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" None\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"symbols-通常当作是-nulls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#symbols-通常当作是-nulls"}},[t._v("#")]),t._v(" "),a("code",[t._v("Symbols")]),t._v(" 通常当作是 "),a("code",[t._v("nulls")])]),t._v(" "),a("p",[a("code",[t._v("Symbols")]),t._v(" 也有一些缺点。")]),t._v(" "),a("p",[t._v("首先，开发环境必须"),a("a",{attrs:{href:"https://caniuse.com/mdn-javascript_builtins_symbol",target:"_blank",rel:"noopener noreferrer"}},[t._v("支持 ES6 的 Symbols"),a("OutboundLink")],1),t._v("。在我看来这很罕见，这意味着 "),a("code",[t._v("Node.js")]),t._v(" 版本不低于 "),a("code",[t._v("0.12")]),t._v("（不要与 "),a("code",[t._v("v12")]),t._v(" 混淆）。")]),t._v(" "),a("p",[t._v("第二，存在着序列化或反序列化的问题。有趣的是，"),a("code",[t._v("Symbols")]),t._v(" 的行为和 "),a("code",[t._v("undefined")]),t._v(" 完全一样。")]),t._v(" "),a("div",{staticClass:"language-TypeScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// -> "{}"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// -> "[null,null]"')]),t._v("\n")])])]),a("p",[t._v("所以，关于这个实例的信息当然会丢失。然而，由于它的行为类似于原生的缺失值："),a("code",[t._v("undefined")]),t._v("，使得它很适合代表一个自定义的缺失值。")]),t._v(" "),a("p",[t._v("相比之下，"),a("code",[t._v("Option")]),t._v(" 是基于结构而非实例的。任何 "),a("code",[t._v("tag")]),t._v(" 属性设置为 "),a("code",[t._v("none")]),t._v(" 的对象都被认为是无，这使得序列化和反序列化变得更加容易。")]),t._v(" "),a("h2",{attrs:{id:"本文总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本文总结"}},[t._v("#")]),t._v(" 本文总结")]),t._v(" "),a("p",[t._v("我对这种模式相当满意。在不需要对属性进行高级操作的地方，这似乎是一个比 "),a("code",[t._v("null")]),t._v(" 更安全的选择。")]),t._v(" "),a("p",[t._v("也许，如果这个自定义符号应该在模块或库外泄漏，我会避免它。")]),t._v(" "),a("p",[t._v("我特别喜欢用变量名和符号标签，我可以传达缺失值的领域含义。在我的项目库中，它代表着 "),a("code",[t._v("promise")]),t._v(" 没有被解决。")]),t._v(" "),a("div",{staticClass:"language-TypeScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" notSettled "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("not-settled")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("代码中有可能出现不同领域含义的多个缺失值。")]),t._v(" "),a("p",[t._v("让我知道你对这种用法的看法：它是 "),a("code",[t._v("null")]),t._v(" 的一个很好的替代吗？每个人都应该总是使用一个 "),a("code",[t._v("Option")]),t._v(" 吗？")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("原文地址："),a("a",{attrs:{href:"https://javascript.plainenglish.io/replace-null-with-es6-symbols-c0e77d74542e",target:"_blank",rel:"noopener noreferrer"}},[t._v("Replace null with ES6 Symbols"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("原文作者："),a("a",{attrs:{href:"https://medium.com/@robinpokorny",target:"_blank",rel:"noopener noreferrer"}},[t._v("Robin Pokorny"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("译文出自："),a("a",{attrs:{href:"https://github.com/xitu/gold-miner",target:"_blank",rel:"noopener noreferrer"}},[t._v("掘金翻译计划"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("本文永久链接："),a("a",{attrs:{href:"https://github.com/xitu/gold-miner/blob/master/article/2021/replace-null-with-es6-symbols.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/xitu/gold-miner/blob/master/article/2021/replace-null-with-es6-symbols.md"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("译者："),a("a",{attrs:{href:"https://github.com/zenblofe",target:"_blank",rel:"noopener noreferrer"}},[t._v("Z招锦"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("校对者："),a("a",{attrs:{href:"https://github.com/KimYangOfCat",target:"_blank",rel:"noopener noreferrer"}},[t._v("KimYangOfCat"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"https://github.com/jaredliw",target:"_blank",rel:"noopener noreferrer"}},[t._v("jaredliw"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);s.default=e.exports}}]);