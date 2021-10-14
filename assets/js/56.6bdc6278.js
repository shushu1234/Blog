(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{616:function(t,a,s){"use strict";s.r(a);var n=s(3),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("Chrome 正在试验 CSS "),s("code",[t._v("@container")]),t._v(" 查询器功能，这是由 "),s("a",{attrs:{href:"https://css.oddbird.net/rwd/query/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oddbird"),s("OutboundLink")],1),t._v(" 的 "),s("a",{attrs:{href:"https://twitter.com/TerribleMia",target:"_blank",rel:"noopener noreferrer"}},[t._v("Miriam Suzanne"),s("OutboundLink")],1),t._v(" 和一群网络平台开发者支持的 CSS 工作组 "),s("a",{attrs:{href:"https://github.com/w3c/csswg-drafts/issues?q=is%3Aissue+label%3Acss-contain-3+",target:"_blank",rel:"noopener noreferrer"}},[t._v("Containment Level 3 规范"),s("OutboundLink")],1),t._v("。"),s("code",[t._v("@container")]),t._v(" 查询器使我们能够"),s("strong",[t._v("根据父容器的大小来设置元素的样式")]),t._v("。\n")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("@container")]),t._v(" API 不稳定，会受到语法变化的影响。如果你想要自己尝试一下，可能会遇到一些错误。请将这些错误报告给相应的浏览器引擎！"),s("strong",[t._v("报告错误的链接如下：")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://bugs.chromium.org/p/chromium/issues/list",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chrome"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://bugzilla.mozilla.org/home",target:"_blank",rel:"noopener noreferrer"}},[t._v("Firefox"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://bugs.webkit.org/query.cgi?format=specific&product=WebKit",target:"_blank",rel:"noopener noreferrer"}},[t._v("Safari"),s("OutboundLink")],1)])])]),t._v(" "),s("p",[t._v("你可以把这些想象成一个媒体查询（"),s("code",[t._v("@media")]),t._v("），但不是依靠 "),s("strong",[t._v("viewport")]),t._v(" 来调整样式，而是你的目标元素的父容器会调整这些样式。")]),t._v(" "),s("h2",{attrs:{id:"容器查询将是自-css3-以来-web-样式的最大变化-将会改变我们对-响应式设计-含义的看法。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器查询将是自-css3-以来-web-样式的最大变化-将会改变我们对-响应式设计-含义的看法。"}},[t._v("#")]),t._v(" 容器查询将是自 CSS3 以来 Web 样式的最大变化，将会改变我们对“响应式设计”含义的看法。")]),t._v(" "),s("p",[t._v("viewport 和用户代理不再是我们创建响应式布局和 UI 样式的唯一目标。通过容器查询，元素将能够定位自己的父元素并相应地应用自己的样式。这意味着存在于侧边栏、主体或头图中的相同元素可能会根据其可用大小和动态看起来完全不同。")]),t._v(" "),s("h2",{attrs:{id:"container-实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#container-实例"}},[t._v("#")]),t._v(" "),s("code",[t._v("@container")]),t._v(" 实例")]),t._v(" "),s("p",[t._v("在"),s("a",{attrs:{href:"https://codepen.io/una/pen/LYbvKpK",target:"_blank",rel:"noopener noreferrer"}},[t._v("本示例"),s("OutboundLink")],1),t._v("中，我在父级中使用了两张带有以下标记的卡片：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("card-container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("card"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("figure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" ..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("figure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("meta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("notes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("desc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("links"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("然后，我在将查询容器样式的父级（"),s("code",[t._v(".card-container")]),t._v("）上设置 Containment（"),s("a",{attrs:{href:"https://css-tricks.com/almanac/properties/c/contain/",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("contain")]),t._v(" 属性"),s("OutboundLink")],1),t._v("）。我还在 "),s("code",[t._v(".card-container")]),t._v(" 的父级上设置了一个相对网格布局，因此它的 "),s("code",[t._v("inline-size")]),t._v(" 将根据该网格而改变。这就是我使用 "),s("code",[t._v("@container")]),t._v(" 查询的内容：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".card-container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("contain")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" layout inline-size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("现在，我可以查询容器样式来调整样式！这与使用基于宽度的媒体查询设置样式的方式非常相似，当元素"),s("strong",[t._v("小于指定尺寸")]),t._v("时使用 "),s("code",[t._v("max-width")]),t._v(" 设置样式，当元素"),s("strong",[t._v("大于指定尺寸")]),t._v("时使用 "),s("code",[t._v("min-width")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 当父容器宽度小于 850px，\n不再显示 .links\n并且减小 .time 字体尺寸 */")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 850px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".links")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".time")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.25rem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 当父容器宽度小于 650px 时，\n减小 .card 元素之间的网格间距到 1rem */")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 650px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".card")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("gap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1rem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://picbed.kimyang.cn/202109050840057.gif",alt:"1"}})]),t._v(" "),s("h2",{attrs:{id:"容器查询-媒体查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器查询-媒体查询"}},[t._v("#")]),t._v(" 容器查询 + 媒体查询")]),t._v(" "),s("p",[t._v("容器查询的最佳功能之一是能够将 "),s("strong",[t._v("微观上的布局")]),t._v(" 与 "),s("strong",[t._v("宏观上的布局")]),t._v(" 分开。我们可以使用容器查询设置单个元素的样式，创建细微的微观布局，并使用媒体查询（宏布局）设置整个页面布局的样式。这创造了一个新的控制水平，使界面更具响应性。")]),t._v(" "),s("p",[t._v("这是"),s("a",{attrs:{href:"https://codepen.io/una/pen/RwodQZw",target:"_blank",rel:"noopener noreferrer"}},[t._v("另一个示例"),s("OutboundLink")],1),t._v("。它展示了使用媒体查询进行宏观布局（即日历从单面板到多面板）和微观布局（即日期布局/大小和事件边距/大小移动），以创建一个漂亮的和谐的查询。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://picbed.kimyang.cn/202109050840644.gif",alt:"2"}})]),t._v(" "),s("h2",{attrs:{id:"容器查询-css-网格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器查询-css-网格"}},[t._v("#")]),t._v(" 容器查询 + CSS 网格")]),t._v(" "),s("p",[t._v("我个人最喜欢的查看容器查询影响的方法之一是查看它们在网格中的工作方式。以下面的植物贸易 UI 为例：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://picbed.kimyang.cn/202109050840775.gif",alt:"3"}})]),t._v(" "),s("p",[t._v("本网站根本没有使用媒体查询。相反，我们只使用容器查询和 CSS 网格来在不同的视图中显示购物卡组件。")]),t._v(" "),s("p",[t._v("在产品网格中，布局使用了 "),s("code",[t._v("grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));")]),t._v(" 标记创建。这将创建一个布局，告诉卡片占用可用的小数空间，直到它们的大小达到 "),s("code",[t._v("230px")]),t._v("，然后下一格切换到下一行。你可以在 "),s("a",{attrs:{href:"http://1linelayouts.glitch.me",target:"_blank",rel:"noopener noreferrer"}},[t._v("1linelayouts.com"),s("OutboundLink")],1),t._v(" 上查看更多网格技巧。")]),t._v(" "),s("p",[t._v("然后，我们有一个容器查询，当卡片宽度小于 "),s("code",[t._v("350px")]),t._v(" 时，它会将卡片样式设置为采用垂直块布局，并通过应用 "),s("code",[t._v("display: flex")]),t._v("（默认情况下具有内联流）转换为水平内联布局。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 350px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".product-container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.5rem 0 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这意味着每张卡片"),s("strong",[t._v("拥有自己的响应式样式")]),t._v("。这是我们使用产品网格创建宏观布局以及使用产品卡片创建微观布局的另一个示例，酷毙了！")]),t._v(" "),s("h2",{attrs:{id:"用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),s("p",[t._v("为了使用"),s("code",[t._v("@container")]),t._v("，首先需要创建一个具有 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/contain",target:"_blank",rel:"noopener noreferrer"}},[t._v("Containment"),s("OutboundLink")],1),t._v(" 的父元素。为此，我们需要在父级上设置 "),s("code",[t._v("contain: layout inline-size")]),t._v("。因为我们目前只能将容器查询应用于内联轴，所以我们只可以使用 "),s("code",[t._v("inline-size")]),t._v("。这也可以防止我们的布局在块方向上中断。")]),t._v(" "),s("p",[t._v("设置 "),s("code",[t._v("contain: layout inline-size")]),t._v(" 会创建一个新的 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Containing_block",target:"_blank",rel:"noopener noreferrer"}},[t._v("Containment 块"),s("OutboundLink")],1),t._v(" 和新的"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context",target:"_blank",rel:"noopener noreferrer"}},[t._v("块格式上下文"),s("OutboundLink")],1),t._v("，让浏览器将其与布局的其余部分分开，现在我们就可以使用容器查询了！")]),t._v(" "),s("h2",{attrs:{id:"限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#限制"}},[t._v("#")]),t._v(" 限制")]),t._v(" "),s("p",[t._v("目前，您不能使用基于高度的容器查询，只能使用块轴方向上的查询。为了让网格子元素与 "),s("code",[t._v("@container")]),t._v(" 一起工作，我们需要添加一个容器元素。尽管如此，添加容器仍可让我们获得所需的效果。")]),t._v(" "),s("h2",{attrs:{id:"试试看"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#试试看"}},[t._v("#")]),t._v(" 试试看")]),t._v(" "),s("p",[t._v("您现在可以在 Chromium 中试验 "),s("code",[t._v("@container")]),t._v(" 属性，方法是导航到："),s("a",{attrs:{href:"https://www.google.com/chrome/canary/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chrome Canary"),s("OutboundLink")],1),t._v(" 中的 "),s("code",[t._v("chrome://flags")]),t._v(" 页面并打开 "),s("strong",[t._v("#experimental-container-queries")]),t._v(" 标志。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://picbed.kimyang.cn/202109050840468.png",alt:""}})]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("原文地址："),s("a",{attrs:{href:"https://css-tricks.com/next-gen-css-container/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Next Gen CSS: @container"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("原文作者："),s("a",{attrs:{href:"https://css-tricks.com/author/unakravets/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Una Kravets"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("译文出自："),s("a",{attrs:{href:"https://github.com/xitu/gold-miner",target:"_blank",rel:"noopener noreferrer"}},[t._v("掘金翻译计划"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("本文永久链接："),s("a",{attrs:{href:"https://github.com/xitu/gold-miner/blob/master/article/2021/next-gen-css-container.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/xitu/gold-miner/blob/master/article/2021/next-gen-css-containermd"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("译者："),s("a",{attrs:{href:"https://github.com/PassionPenguin",target:"_blank",rel:"noopener noreferrer"}},[t._v("霜羽 Hoarfroster"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("校对者："),s("a",{attrs:{href:"https://github.com/Chorer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chorer"),s("OutboundLink")],1),t._v("、"),s("a",{attrs:{href:"https://github.com/KimYangOfCat",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kim Yang"),s("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=e.exports}}]);