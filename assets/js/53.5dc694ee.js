(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{614:function(t,e,r){"use strict";r.r(e);var o=r(3),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[r("img",{attrs:{src:"https://picbed.kimyang.cn/202109050837118.jpg",alt:""}})]),t._v(" "),r("h2",{attrs:{id:"css-网格编辑器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#css-网格编辑器"}},[t._v("#")]),t._v(" CSS 网格编辑器")]),t._v(" "),r("p",[r("code",[t._v("CSS Grid")]),t._v(" 编辑器是一个社区呼声很高的特性。现在你可以通过它来预览和创建 "),r("code",[t._v("CSS Grid")]),t._v(" 布局了。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://picbed.kimyang.cn/202109050838138.png",alt:"CSS Grid 编辑器"}})]),t._v(" "),r("p",[t._v("当页面上的 HTML 元素应用了 "),r("code",[t._v("display: grid")]),t._v(" 或者 "),r("code",[t._v("display: inline-grid")]),t._v(" 样式时，你可以在样式面板中看到一个图标在它的旁边。单击它就可以切换到 CSS grid 编辑器。在编辑器里，你可以通过屏幕上的图标预览页面的可能发生的变化。（比如："),r("code",[t._v("justify-content: space-around")]),t._v("），只需要点击一下就可以创建网格对应的外观布局。")]),t._v(" "),r("blockquote",[r("p",[t._v("Chromium issue: "),r("a",{attrs:{href:"https://crbug.com/1203241",target:"_blank",rel:"noopener noreferrer"}},[t._v("1203241"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"控制台支持-const-常量重复声明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#控制台支持-const-常量重复声明"}},[t._v("#")]),t._v(" 控制台支持 "),r("code",[t._v("const")]),t._v(" 常量重复声明")]),t._v(" "),r("p",[t._v("除了支持现有的 "),r("RouterLink",{attrs:{to:"/blog/new-in-devtools-80/#redeclarations"}},[r("code",[t._v("let")]),t._v(" 和 "),r("code",[t._v("class")]),t._v(" 重复声明")]),t._v("外，控制器现在也支持了 "),r("code",[t._v("const")]),t._v(" 常量的重复声明。无法重复声明常量对 web 开发者来说是一个令人头疼的问题，因为他们经常需要通过控制台来调试 JavaScript 代码。")],1),t._v(" "),r("p",[t._v("这样允许开发人员将代码直接复制到 DevTools 控制台，进而查看其工作原理或进行相关调试，对代码进行小范围修改，并且是在不刷新页面的情况下，对该过程进行重复。以前，如果代码中重复声明了 "),r("code",[t._v("const")]),t._v(" 绑定的常量，DevTools 是会抛出语法错误的。")]),t._v(" "),r("p",[t._v("可以参考下面的例子。在"),r("strong",[t._v("不同的 REPL 脚本")]),t._v("中支持 "),r("code",[t._v("const")]),t._v(" 常量的重复声明（参考变量 "),r("code",[t._v("a")]),t._v("）。需要注意的是，以下场景是不予支持的：")]),t._v(" "),r("ul",[r("li",[t._v("页面脚本中的 "),r("code",[t._v("const")]),t._v(" 重复声明，在 REPL 脚本中是不允许的")]),t._v(" "),r("li",[t._v("同一个 REPL 脚本中的 "),r("code",[t._v("const")]),t._v(" 变量，也是不允许重复声明的（参考变量 "),r("code",[t._v("b")]),t._v("）")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://picbed.kimyang.cn/202109050838058.png",alt:"const 变量重复声明"}})]),t._v(" "),r("blockquote",[r("p",[t._v("Chromium issue: "),r("a",{attrs:{href:"https://crbug.com/1076427",target:"_blank",rel:"noopener noreferrer"}},[t._v("1076427"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"源代码查看器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#源代码查看器"}},[t._v("#")]),t._v(" 源代码查看器")]),t._v(" "),r("p",[t._v("你可以在屏幕上查看页面元素的排列顺序，这可以更好地进行可访问性检查。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://picbed.kimyang.cn/202109050838780.png",alt:"源代码查看器"}})]),t._v(" "),r("p",[t._v("HTML 文档中内容的顺序对于搜索引擎优化和提升可访问性至关重要。新的 CSS 特性允许开发人员创建页面内容，这些新创建的内容，在屏幕上的顺序和原来 HTML 文档中的顺序大不相同。这会导致很大的可访问性问题，因为使用屏幕阅读器的用户可能获得和正常用户不同的内容，这是最可能使人感到困惑的用户体验。")]),t._v(" "),r("blockquote",[r("p",[t._v("Chromium issue: "),r("a",{attrs:{href:"https://crbug.com/1094406",target:"_blank",rel:"noopener noreferrer"}},[t._v("1094406"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"新的查看-iframe-的快捷方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#新的查看-iframe-的快捷方式"}},[t._v("#")]),t._v(" 新的查看 iframe 的快捷方式")]),t._v(" "),r("p",[t._v("通过右键单击元素面板中的 iframe 元素，并选择 "),r("strong",[t._v("Show iframe details")]),t._v(" 来查看 iframe 的详细信息。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://picbed.kimyang.cn/202109050838879.png",alt:"Show frame details"}})]),t._v(" "),r("p",[t._v("你可以在应用面板（Application）中查看 iframe 详细信息视图，在该面板中可以检查文档详细信息、安全性和隔离状态、权限策略等以调试可能存在的问题。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://picbed.kimyang.cn/202109050838311.png",alt:"Frame details view"}})]),t._v(" "),r("blockquote",[r("p",[t._v("Chromium issue: "),r("a",{attrs:{href:"https://crbug.com/1192084",target:"_blank",rel:"noopener noreferrer"}},[t._v("1192084"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"增强的-cors-调试支持"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#增强的-cors-调试支持"}},[t._v("#")]),t._v(" 增强的 CORS 调试支持")]),t._v(" "),r("p",[t._v("跨域资源共享（CORS）错误会展示在“问题”选项卡中。造成 CORS 错误的原因有很大。你可以单击展开每个问题来了解可能的原因和解决方法。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://picbed.kimyang.cn/202109050838267.png",alt:"CORS issues in the Issues tab"}})]),t._v(" "),r("blockquote",[r("p",[t._v("Chromium issue: "),r("a",{attrs:{href:"https://crbug.com/1141824",target:"_blank",rel:"noopener noreferrer"}},[t._v("1141824"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"network-面板更新"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#network-面板更新"}},[t._v("#")]),t._v(" Network 面板更新")]),t._v(" "),r("h3",{attrs:{id:"重命名-xhr-标签为-fetch-xhr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#重命名-xhr-标签为-fetch-xhr"}},[t._v("#")]),t._v(" 重命名 XHR 标签为 Fetch/XHR")]),t._v(" "),r("p",[t._v("XHR 标签现在被重命名为 "),r("strong",[t._v("Fetch/XHR")]),t._v("。这个变更更明确地说明来该过滤器同时包含了 "),r("a",{attrs:{href:"https://xhr.spec.whatwg.org/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("XMLHttpRequest")]),r("OutboundLink")],1),t._v(" 和 "),r("a",{attrs:{href:"https://fetch.spec.whatwg.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fetch API"),r("OutboundLink")],1),t._v(" 两种类型的网络请求。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://picbed.kimyang.cn/202109050838071.png",alt:"Fetch/XHR label"}})]),t._v(" "),r("blockquote",[r("p",[t._v("Chromium issue: "),r("a",{attrs:{href:"https://crbug.com/1201398",target:"_blank",rel:"noopener noreferrer"}},[t._v("1201398"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"network-面板中过滤新增-wasm-过滤类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#network-面板中过滤新增-wasm-过滤类型"}},[t._v("#")]),t._v(" Network 面板中过滤新增 Wasm 过滤类型")]),t._v(" "),r("p",[t._v("现在你可以单击新的 "),r("strong",[t._v("Wasm")]),t._v(" 按钮来过滤 Wasm 类型的网络请求。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://picbed.kimyang.cn/202109050838974.png",alt:"Filter by Wasm"}})]),t._v(" "),r("blockquote",[r("p",[t._v("Chromium issue: "),r("a",{attrs:{href:"https://crbug.com/1103638",target:"_blank",rel:"noopener noreferrer"}},[t._v("1103638"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"network-状态面板新增提示用户代理端设备选项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#network-状态面板新增提示用户代理端设备选项"}},[t._v("#")]),t._v(" Network 状态面板新增提示用户代理端设备选项")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://web.dev/user-agent-client-hints",target:"_blank",rel:"noopener noreferrer"}},[t._v("用户代理端提示"),r("OutboundLink")],1),t._v("（User-Agent Client Hints）现在迁移到 "),r("strong",[t._v("Network conditions")]),t._v(" 标签下的 "),r("strong",[t._v("User agent")]),t._v(" 字段中。")]),t._v(" "),r("p",[t._v("用户代理端提示（User-Agent Client Hints）是 Client Hints API 的一个新扩展，它允许开发人员以保护隐私和符合人体工程学的方式访问用户的浏览器信息。。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://picbed.kimyang.cn/202109050838450.png",alt:"Network 状态面板新增提示用户代理端设备选项"}})]),t._v(" "),r("blockquote",[r("p",[t._v("Chromium issue: "),r("a",{attrs:{href:"https://crbug.com/1174299",target:"_blank",rel:"noopener noreferrer"}},[t._v("1174299"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"在-issues-标签页中反馈兼容模式问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#在-issues-标签页中反馈兼容模式问题"}},[t._v("#")]),t._v(" 在 Issues 标签页中反馈兼容模式问题")]),t._v(" "),r("p",[t._v("DevTools 现在可以反馈"),r("a",{attrs:{href:"https://quirks.spec.whatwg.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("兼容模式"),r("OutboundLink")],1),t._v(" 和"),r("a",{attrs:{href:"https://dom.spec.whatwg.org/#concept-document-limited-quirks",target:"_blank",rel:"noopener noreferrer"}},[t._v("受限兼容模式"),r("OutboundLink")],1),t._v("问题。")]),t._v(" "),r("p",[t._v("兼容模式和受限兼容模式是网络标准制定之前就遗留下来的浏览器模式。这些模式模拟的是标准时代之前的布局行为，通常它们会产生意料之外的视觉效果。")]),t._v(" "),r("p",[t._v("当调试布局问题时，开发人员可能会误认为它们是由用户编写的 CSS 或 HTML bug 导致的问题，而真正的问题是页面所在的 Compat 模式。DevTools 提供了修复该问题的建议。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://picbed.kimyang.cn/202109050838279.png",alt:"Report Quirks mode issues in the Issues tab"}})]),t._v(" "),r("blockquote",[r("p",[t._v("Chromium issue: "),r("a",{attrs:{href:"https://crbug.com/622660",target:"_blank",rel:"noopener noreferrer"}},[t._v("622660"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"performance-面板中新增计算交集"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#performance-面板中新增计算交集"}},[t._v("#")]),t._v(" Performance 面板中新增计算交集")]),t._v(" "),r("p",[t._v("DevTools 现在可以在火焰图中展示"),r("strong",[t._v("计算交集")]),t._v("。这个变化可以帮助你识别"),r("a",{attrs:{href:"https://web.dev/intersectionobserver-v2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("交集观察"),r("OutboundLink")],1),t._v("事件，并调试其的性能开销。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://picbed.kimyang.cn/202109050838413.png",alt:"Compute Intersections in the Performance panel"}})]),t._v(" "),r("blockquote",[r("p",[t._v("Chromium issue: "),r("a",{attrs:{href:"https://crbug.com/1199137",target:"_blank",rel:"noopener noreferrer"}},[t._v("1199137"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"lighthouse-面板-7-5-版本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lighthouse-面板-7-5-版本"}},[t._v("#")]),t._v(" Lighthouse 面板 7.5 版本")]),t._v(" "),r("p",[t._v("Lighthouse 面板现在运行的是 7.5 版本了。由于 CSS images 的新特性 "),r("code",[t._v("aspect-ratio")]),t._v('，"缺少明确的宽带和高度（missing explicit width and height）" 的警告现在已经被移除，此前，Lighthouse 会对没有明确宽高的图像显示警告。')]),t._v(" "),r("p",[t._v("查看"),r("a",{attrs:{href:"https://github.com/GoogleChrome/lighthouse/releases/tag/v7.5.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("发布说明"),r("OutboundLink")],1),t._v("以获取完整的变更列表。")]),t._v(" "),r("blockquote",[r("p",[t._v("Chromium issue: "),r("a",{attrs:{href:"https://crbug.com/772558",target:"_blank",rel:"noopener noreferrer"}},[t._v("772558"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"调用栈弃用-restart-frame-上下文菜单"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#调用栈弃用-restart-frame-上下文菜单"}},[t._v("#")]),t._v(' 调用栈弃用 "Restart frame" 上下文菜单')]),t._v(" "),r("p",[r("strong",[t._v("Restart frame")]),t._v(" 选项已弃用。这个功能需要进一步完善才可以正常工作，目前它已经崩溃，并且经常如此。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://picbed.kimyang.cn/202109050839184.png",alt:"弃用 restart frame 上下文菜单"}})]),t._v(" "),r("blockquote",[r("p",[t._v("Chromium issue: "),r("a",{attrs:{href:"https://crbug.com/1203606",target:"_blank",rel:"noopener noreferrer"}},[t._v("1203606"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"实验阶段-协议监控器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实验阶段-协议监控器"}},[t._v("#")]),t._v(" [实验阶段] 协议监控器")]),t._v(" "),r("p",[t._v("如果要启用该实验性质功能，请开启 "),r("strong",[t._v("Settings")]),t._v(" > "),r("strong",[t._v("Experiments")]),t._v(" 下的 "),r("strong",[t._v("Protocol Monitor")]),t._v(" 选项。")]),t._v(" "),r("p",[t._v("Chrome DevTools 使用 "),r("a",{attrs:{href:"https://chromedevtools.github.io/devtools-protocol/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chrome DevTools 协议 (CDP)"),r("OutboundLink")],1),t._v(" 来检测、调试和配置 Chrome 浏览器。"),r("strong",[t._v("协议监控器")]),t._v(" 为你提供了一种查看所有 CDP 请求和 DevTools 响应的方法。")]),t._v(" "),r("p",[t._v("新增了两个功能，方便 CDP 测试：")]),t._v(" "),r("p",[t._v("一个是新的 "),r("strong",[t._v("Save")]),t._v(" 按钮允许你下载历史记录消息的 JSON 文件；一个是新的字段，允许你直接发送一个原始的 CDP 命令。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://picbed.kimyang.cn/202109050839329.png",alt:"协议监控"}})]),t._v(" "),r("blockquote",[r("p",[t._v("Chromium issues: "),r("a",{attrs:{href:"https://crbug.com/1204004",target:"_blank",rel:"noopener noreferrer"}},[t._v("1204004"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://crbug.com/1204466",target:"_blank",rel:"noopener noreferrer"}},[t._v("1204466"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"实验阶段-puppeteer-recorder"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实验阶段-puppeteer-recorder"}},[t._v("#")]),t._v(" [实验阶段] Puppeteer Recorder")]),t._v(" "),r("p",[t._v("如果要启用该实验性质功能，请开启 "),r("strong",[t._v("Settings")]),t._v(" > "),r("strong",[t._v("Experiments")]),t._v(" 下的 "),r("strong",[t._v("Recorder")]),t._v(" 选项。")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/blog/new-in-devtools-89/#record"}},[t._v("Puppeteer recorder")]),t._v(" 现在可以根据你和浏览器的交互生成一个操作步骤列表，而之前的 DevTools 则是直接生成一个 Puppeteer 脚本。添加了另一个新的 "),r("strong",[t._v("Export")]),t._v(" 按钮，允许你以 Puppeteer 脚本的形式导出这些步骤。")],1),t._v(" "),r("p",[t._v("记录完这些操作步骤后，你可以使用新的 "),r("strong",[t._v("Replay")]),t._v(" 按钮来重放这些步骤。可以按照这个"),r("RouterLink",{attrs:{to:"/blog/new-in-devtools-89/#record"}},[t._v("说明")]),t._v("来学习如何开始记录浏览器操作步骤。")],1),t._v(" "),r("p",[t._v("请注意，这是一个早期的实验功能。我们计划随着时间的推移改善和扩展 Recorder 的功能。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://picbed.kimyang.cn/202109050839508.png",alt:"Puppeteer Recorder"}})]),t._v(" "),r("blockquote",[r("p",[t._v("Chromium issue: "),r("a",{attrs:{href:"https://crbug.com/1199787",target:"_blank",rel:"noopener noreferrer"}},[t._v("1199787"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("ul",[r("li",[t._v("原文地址："),r("a",{attrs:{href:"https://developer.chrome.com/blog/new-in-devtools-92/",target:"_blank",rel:"noopener noreferrer"}},[t._v("What's New In DevTools (Chrome 92)"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("原文作者："),r("a",{attrs:{href:"https://jec.fyi/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jecelyn Yeen"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("译文出自："),r("a",{attrs:{href:"https://github.com/xitu/gold-miner",target:"_blank",rel:"noopener noreferrer"}},[t._v("掘金翻译计划"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("本文永久链接："),r("a",{attrs:{href:"https://github.com/xitu/gold-miner/blob/master/article/2021/new-in-devtools-92.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/xitu/gold-miner/blob/master/article/2021/new-in-devtools-92.md"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("译者："),r("a",{attrs:{href:"https://github.com/Usualminds",target:"_blank",rel:"noopener noreferrer"}},[t._v("Usualminds"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("校对者："),r("a",{attrs:{href:"https://github.com/KimYangOfCat",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kim Yang"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://github.com/Chorer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chorer"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://github.com/finalwhy",target:"_blank",rel:"noopener noreferrer"}},[t._v("finalwhy"),r("OutboundLink")],1)])])])])}),[],!1,null,null,null);e.default=s.exports}}]);