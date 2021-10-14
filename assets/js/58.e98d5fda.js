(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{618:function(t,s,a){"use strict";a.r(s);var e=a(3),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("code",[t._v("!default")]),t._v(" 是一个 Sass 标志，表明对一个变量进行 "),a("strong",[t._v("条件赋值")]),t._v(" —— 只有在变量未定义或为 "),a("code",[t._v("null")]),t._v(" 时才赋值。例如以下代码片段：")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$variable")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token statement keyword"}},[t._v("!default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("对于 Sass 编译器来说，这一行表示：")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("仅当")]),t._v(" "),a("code",[t._v("$variable")]),t._v(" 没有被赋值时，将 "),a("code",[t._v("'test'")]),t._v(" 赋值给 "),a("code",[t._v("$variable")]),t._v("。")])]),t._v(" "),a("p",[t._v("这里有一个反例，说明了 "),a("code",[t._v("!default")]),t._v(" 标志的条件赋值行为的另一种情况：")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$variable")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$variable")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token statement keyword"}},[t._v("!default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $variable 仍然为 `hello world`")]),t._v("\n")])])]),a("p",[t._v("运行这两行后，"),a("code",[t._v("$variable")]),t._v(" 的值仍然是第 1 行原始赋值的 "),a("code",[t._v("'hello world'")]),t._v("。在这种情况下，第 2 行中 "),a("code",[t._v("!default")]),t._v(" 的赋值将被忽略，因为已经提供了一个值，就不需要默认值。")]),t._v(" "),a("h2",{attrs:{id:"样式库和-use-with"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样式库和-use-with"}},[t._v("#")]),t._v(" 样式库和 "),a("code",[t._v("@use...with")])]),t._v(" "),a("p",[t._v("Sass 中的 "),a("code",[t._v("!default")]),t._v(" 主要是为了方便样式库的使用，并方便地将它们包含到下游应用程序或项目中。通过将一些变量指定为 "),a("code",[t._v("!default")]),t._v("，样式库可以允许导入的应用程序自定义或调整这些变量值，而不需要再完全地 fork 一份样式库。换句话说，"),a("code",[t._v("!default")]),t._v(" 的变量本质上是作为修改样式库代码行为的 "),a("em",[t._v("参数")]),t._v("。")]),t._v(" "),a("p",[t._v("Sass 有一个专门用于此目的的特殊语法，它将样式表与相关的变量组合在一起：")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// style.scss")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'library'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token module-modifier keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$foo")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$bar")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'world'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这个语句的功能 "),a("em",[t._v("几乎")]),t._v(" 相同于变量赋值后跟一个 "),a("code",[t._v("@import")]),t._v("，如下所示:")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// style.scss - 一种不太常用的导入 `library.scss` 配置的方式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$foo")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$bar")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'library'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这里重要的区别以及原因是，关于覆盖的"),a("strong",[t._v("范围")]),t._v("， "),a("code",[t._v("@use...with")]),t._v(" 是可自取的。 "),a("code",[t._v("with")]),t._v(" 代码块让 Sass 编译器和任何阅读源代码的人都清楚地知道，这些覆盖仅仅适用于在 "),a("code",[t._v("library.scss")]),t._v(" 中定义和使用的变量。使用这种方法可以保持全局作用域的整洁，并有助于减少不同库之间的变量命名冲突。")]),t._v(" "),a("h2",{attrs:{id:"最常用的例子-自定义主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最常用的例子-自定义主题"}},[t._v("#")]),t._v(" 最常用的例子：自定义主题")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// library.scss")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$color-primary")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" royalblue "),a("span",{pre:!0,attrs:{class:"token statement keyword"}},[t._v("!default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$color-secondary")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" salmon "),a("span",{pre:!0,attrs:{class:"token statement keyword"}},[t._v("!default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// style.scss")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'library'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token module-modifier keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$color-primary")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" seagreen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$color-secondary")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lemonchiffon\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这一特性最常见的例子之一是 "),a("strong",[t._v("主题")]),t._v(" 的实现。主题色可以用 Sass 变量来定义，然后用 "),a("code",[t._v("!default")]),t._v(" 允许自定义的主题色，为其他样式兜底（甚至包括混合或覆盖这些颜色）。")]),t._v(" "),a("p",[t._v("Bootstrap 使用 "),a("code",[t._v("!default")]),t._v(" 标志设置每一项变量，来导出它的"),a("a",{attrs:{href:"https://github.com/twbs/bootstrap/blob/main/scss/_variables.scss",target:"_blank",rel:"noopener noreferrer"}},[t._v("整个 Sass 变量 API"),a("OutboundLink")],1),t._v("，包括主题调色板，以及其他共享值，如间距，边框，字体设置，甚至动画渐变方法和时间。这是 "),a("code",[t._v("!default")]),t._v(" 提供的灵活性的最好例子之一，即使是在一个非常全面的样式框架中。")]),t._v(" "),a("p",[t._v("在现代网络应用中，这种行为本身就可以被"),a("a",{attrs:{href:"https://css-tricks.com/a-complete-guide-to-custom-properties/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS 用户属性"),a("OutboundLink")],1),t._v("和"),a("a",{attrs:{href:"https://css-tricks.com/a-complete-guide-to-custom-properties/#h-custom-property-fallbacks",target:"_blank",rel:"noopener noreferrer"}},[t._v("回退参数"),a("OutboundLink")],1),t._v("复制使用。如果您的工具链还没有使用 Sass，那么现代 CSS 可能已经足够用于主题化的目的。然而，我们将检查那些只能使用 Sass "),a("code",[t._v("!default")]),t._v(" 的两个例子。")]),t._v(" "),a("h2",{attrs:{id:"用例-2-加载网页字体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用例-2-加载网页字体"}},[t._v("#")]),t._v(" 用例 2：加载网页字体")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// library.scss")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$disable-font-cdn")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token statement keyword"}},[t._v("!default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("not "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$disable-font-cdn")]),t._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://fonts.googleapis.com/css2?family=Public+Sans&display=swap'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// style.scss")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'library'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token module-modifier keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$disable-font-cdn")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 没有额外的 http 请求")]),t._v("\n")])])]),a("p",[t._v("当 Sass 在 CSS 生命周期中利用它的预处理器时，它开始显示它的优势。假设你公司设计系统的样式库使用了自定义的网页字体。它从谷歌的 CDN 加载——理想的情况是尽快得到资源——但尽管如此，你公司的体验团队对页面加载时间仍然非常关心；每一毫秒对于他们的应用来说都很重要。")]),t._v(" "),a("p",[t._v("为了解决这个问题，你可以在你的样式库中引入一个可选的 "),a("strong",[t._v("布尔")]),t._v(" 标志（与第一个例子中的 CSS 颜色值略有不同）。当默认值设置为 "),a("code",[t._v("false")]),t._v(" 时，你可以在 Sass "),a("code",[t._v("@if")]),t._v(" 语句中检查这个特性标志，然后再运行消耗较大的操作，比如外部 HTTP 请求。你的库的普通用户甚至不需要知道这个选项的存在——为他们工作提供默认行为，他们自动从 CDN 加载字体，而其他团队可以访问切换他们需要的，以微调和优化页面加载。")]),t._v(" "),a("p",[t._v("一个 CSS 变量不足以解决这个问题——尽管 "),a("code",[t._v("font-family")]),t._v(" 可以被覆盖，但 HTTP 请求加载了未使用的字体。")]),t._v(" "),a("h2",{attrs:{id:"用例-3-调试间隔标记可视化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用例-3-调试间隔标记可视化"}},[t._v("#")]),t._v(" 用例 3：调试间隔标记可视化")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://picbed.kimyang.cn/202109050841151.png",alt:""}})]),t._v(" "),a("p",[a("a",{attrs:{href:"https://codepen.io/nathanbabcock/project/editor/AYYygg",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看演示"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("code",[t._v("!default")]),t._v(" 的特性标志也可以用来创建调试工具，以便在开发过程中使用。在本例中，可视化调试工具为间距标记创建颜色编码的覆盖。该基础是一组根据“T恤尺寸”（即“xs”或“最小码”到“xl”/“超大码”）升格定义的间距标记。从这个单一的标记集合，Sass "),a("code",[t._v("@each")]),t._v(" 循环生成实用程序类的每个组合，将特定标志应用于每边（分别为上、右、下和左，或同时应用所有四个）的 padding 或 margin。")]),t._v(" "),a("p",[t._v("因为这些选择器都是在嵌套循环中动态构造的，并且只有一个 "),a("code",[t._v("!default")]),t._v(" 标志可以将渲染行为从标准（margin 加 padding）切换到彩色调试视图（相同的尺寸使用相同大小的透明边框）。这种颜色编码的视图可能看起来非常类似于设计师移交给开发的可交付成果和线框图——特别是如果你已经对设计和开发们共享了相同的间距值。将视觉调试视图与模型并排可以快速直观地发现差异，以及调试更复杂的样式问题，如"),a("a",{attrs:{href:"https://css-tricks.com/what-you-should-know-about-collapsing-margins/",target:"_blank",rel:"noopener noreferrer"}},[t._v("margin 塌陷"),a("OutboundLink")],1),t._v("行为。")]),t._v(" "),a("p",[t._v("再次说明——当此代码被编译为生产代码时，调试可视化将不会出现在结果 CSS 中的任何地方，因为它将被相应的 margin 或 padding 语句完全取代。")]),t._v(" "),a("h2",{attrs:{id:"进一步阅读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进一步阅读"}},[t._v("#")]),t._v(" 进一步阅读")]),t._v(" "),a("p",[t._v("这些只是 Sass "),a("code",[t._v("!default")]),t._v(" 的几个例子。当你将该技术应用于自己的项目时，请参考这些文档资源和使用示例。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://sass-lang.com/documentation/variables#default-values",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("!default")]),t._v(" 文档"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://sass-lang.com/documentation/at-rules/use#configuration",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("@use with")]),t._v(" 文档"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://getbootstrap.com/docs/4.0/getting-started/theming/#variable-defaults",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bootstrap 中的变量默认值"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://thoughtbot.com/blog/sass-default",target:"_blank",rel:"noopener noreferrer"}},[t._v("一个 Sass "),a("code",[t._v("default")]),t._v(" 使用案例"),a("OutboundLink")],1),t._v(" (thoughtbot)")])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("原文地址："),a("a",{attrs:{href:"https://css-tricks.com/creating-stylesheet-feature-flags-with-sass-default/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Creating Stylesheet Feature Flags With Sass !default"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("原文作者："),a("a",{attrs:{href:"https://css-tricks.com/author/nathanbabcock/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nathan Babcock"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("译文出自："),a("a",{attrs:{href:"https://github.com/xitu/gold-miner",target:"_blank",rel:"noopener noreferrer"}},[t._v("掘金翻译计划"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("本文永久链接："),a("a",{attrs:{href:"https://github.com/xitu/gold-miner/blob/master/article/2021/creating-stylesheet-feature-flags-with-sass-default.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/xitu/gold-miner/blob/master/article/2021/creating-stylesheet-feature-flags-with-sass-default.md"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("译者："),a("a",{attrs:{href:"https://github.com/Gesj-yean",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gesj-yean"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("校对者："),a("a",{attrs:{href:"https://github.com/KimYangOfCat",target:"_blank",rel:"noopener noreferrer"}},[t._v("KimYangOfCat"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/nia3y",target:"_blank",rel:"noopener noreferrer"}},[t._v("nia3y"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);s.default=r.exports}}]);