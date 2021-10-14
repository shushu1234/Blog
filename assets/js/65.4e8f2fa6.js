(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{623:function(t,a,s){"use strict";s.r(a);var n=s(3),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("缓存对每一个 Python 程序员来说都是一个值得理解的重要概念。")]),t._v(" "),s("p",[t._v("简而言之，缓存就是利用编程技术将数据存储在临时位置，而不是每次都从源数据去检索。")]),t._v(" "),s("p",[t._v("此外，缓存能提升应用程序的性能，因为从临时位置访问数据总比从源数据（数据库，服务器等）获取来得快。")]),t._v(" "),s("p",[t._v("本篇文章主要探讨缓存在 Python 中是如何运作的。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://picbed.kimyang.cn/202109050845891.png",alt:""}})]),t._v(" "),s("p",[t._v("这对 Python 开发者来说是一个进阶的话题。如果你正在使用 Python 或打算使用它，那么你非常适合阅读本篇文章。")]),t._v(" "),s("p",[t._v("如果你想从入门到进阶地了解 Python 程序语言，那么我强烈推荐你阅读"),s("a",{attrs:{href:"https://medium.com/fintechexplained/everything-about-python-from-beginner-to-advance-level-227d52ef32d2",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇文章"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"文章主旨"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文章主旨"}},[t._v("#")]),t._v(" 文章主旨")]),t._v(" "),s("p",[t._v("在这篇文章中，我会解释缓存是什么，我们为什么需要缓存以及如何在 Python 中实现它。")]),t._v(" "),s("blockquote",[s("p",[t._v("当我们想要提高应用程序的性能时，就可以用到缓存。")])]),t._v(" "),s("p",[t._v("我将概述以下三个关键点：")]),t._v(" "),s("ol",[s("li",[t._v("什么是缓存以及为什么我们需要实现缓存？")]),t._v(" "),s("li",[t._v("缓存的规则是什么？")]),t._v(" "),s("li",[t._v("如何实现缓存？")])]),t._v(" "),s("p",[t._v("我将首先解释什么是缓存，为什么我们需要在我们的应用程序中引入缓存，以及如何实现缓存。")]),t._v(" "),s("h2",{attrs:{id:"_1-什么是缓存以及为什么我们需要实现缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是缓存以及为什么我们需要实现缓存"}},[t._v("#")]),t._v(" 1. 什么是缓存以及为什么我们需要实现缓存？")]),t._v(" "),s("p",[t._v("要想了解缓存是什么以及我们为什么需要缓存，试考虑以下场景：")]),t._v(" "),s("ul",[s("li",[t._v("我们正在用 Python 构建一个应用程序，它将向终端用户展示产品列表。")]),t._v(" "),s("li",[t._v("每天将有超过 100 个用户多次访问此应用程序。")]),t._v(" "),s("li",[t._v("该应用程序将托管在应用程序服务器上，并可在互联网上访问。")]),t._v(" "),s("li",[t._v("产品的资料将存储在数据库服务器中。")]),t._v(" "),s("li",[t._v("因此应用程序服务器将查询数据库以获取相关记录。")])]),t._v(" "),s("p",[t._v("下图展示了我们的目标应用程序是如何配置的：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://picbed.kimyang.cn/202109050845040.png",alt:""}})]),t._v(" "),s("p",[t._v("上图说明了应用程序服务器如何从数据库服务器获取数据。")]),t._v(" "),s("h3",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),s("p",[t._v("从数据库中获取数据是一个 I/O 密集型的操作。因此，它本质上是缓慢的。如果服务端需要频繁地发送请求但服务器响应跟不上请求的速度，那么我们可以将响应缓存在应用程序的内存中。")]),t._v(" "),s("p",[t._v("与其每次都查询数据库，我们可以将结果缓存，如下所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://picbed.kimyang.cn/202109050845001.png",alt:"数据存储在临时缓存中"}})]),t._v(" "),s("p",[t._v("获取数据的请求必须通过网线，响应也必须通过网线返回。")]),t._v(" "),s("p",[t._v("这本质上是缓慢的。因此，我们引入了缓存。")]),t._v(" "),s("blockquote",[s("p",[t._v("我们可以缓存结果以减少运算时间并节省计算机资源。")])]),t._v(" "),s("p",[t._v("缓存是一个临时存储位置。它以惰性载入的方式工作。")]),t._v(" "),s("p",[t._v("一开始，缓存是空的。当应用程序服务器从数据库服务器获取数据时，数据集将填充缓存。从那以后，后续的请求便能直接从缓存中获取数据。")]),t._v(" "),s("p",[t._v("我们还需要及时使缓存失效，以确保我们向终端用户显示最新信息。")]),t._v(" "),s("p",[t._v("本文的下一部分：缓存规则。")]),t._v(" "),s("h2",{attrs:{id:"_2-缓存规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-缓存规则"}},[t._v("#")]),t._v(" 2. 缓存规则")]),t._v(" "),s("p",[t._v("在我看来，缓存有三个规则。")]),t._v(" "),s("p",[t._v("在启用缓存之前，我们需要执行一个关键步骤 —— 分析应用程序。")]),t._v(" "),s("p",[t._v("因此，在应用程序中引入缓存之前的第一步是分析应用程序。")]),t._v(" "),s("p",[t._v("只有这样我们才能了解每个函数需要执行多长时间以及它被调用了多少次。")]),t._v(" "),s("p",[t._v("我在"),s("a",{attrs:{href:"https://medium.com/fintechexplained/advanced-python-learn-how-to-profile-python-code-1068055460f9",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("这篇文章")]),s("OutboundLink")],1),t._v("中解释了分析的艺术，我强烈将它推荐给大家。")]),t._v(" "),s("p",[t._v("分析完成后，我们需要确定需要缓存的内容。")]),t._v(" "),s("p",[t._v("我们需要一种能将输入链接到函数的输出的机制，并将它们存储在内存中。这就是缓存的第一条规则。")]),t._v(" "),s("h3",{attrs:{id:"_2-1-第一条规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-第一条规则"}},[t._v("#")]),t._v(" 2.1. 第一条规则：")]),t._v(" "),s("p",[t._v("第一条规则是确保目标函数确实需要很长时间才能返回输出，且它会频繁被执行但输出的更动不大。")]),t._v(" "),s("p",[t._v("我们不想为不需要很长时间才能完成的函数，或几乎不会在应用程序中调用的函数，或那些返回结果在源中频繁更改的函数引入缓存。")]),t._v(" "),s("p",[t._v("请牢记这条重要的规则。")]),t._v(" "),s("blockquote",[s("p",[t._v("适合缓存的候选 = 经常调用的函数，输出不经常变化并且需要很长时间执行。")])]),t._v(" "),s("p",[t._v("举例来说，如果一个函数被执行了 100 次，且该函数需要很长时间才能返回结果，并且它为给定的输入返回相同的结果，那么我们可以缓存它。")]),t._v(" "),s("p",[t._v("相反，如果函数返回的值在源中每秒更新一次，但我们每分钟才收到一个执行该函数的请求，那么我们得明白是否需要缓存这样的结果。这非常重要，因为这可能导致应用发送过时的数据给用户。这个例子可以帮助我们明白是否需要缓存，是否需要不同的通信通道、数据结构或序列化机制来更快地检索数据，例如通过 socket 使用二进制序列化器还是通过 HTTP 的 XML 序列化发送数据。")]),t._v(" "),s("p",[t._v("此外，知道何时使缓存失效并重新加载新数据到缓存也是非常重要的。")]),t._v(" "),s("h3",{attrs:{id:"_2-2-第二条规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-第二条规则"}},[t._v("#")]),t._v(" 2.2. 第二条规则：")]),t._v(" "),s("p",[t._v("第二条规则是确保从缓存中获取数据的速度比执行目标函数的速度更快。")]),t._v(" "),s("p",[t._v("如果实践缓存后对检索结果所需的时间有正面的影响，我们才应该引入缓存。")]),t._v(" "),s("blockquote",[s("p",[t._v("缓存应该比从当前数据源获取数据更快。")])]),t._v(" "),s("p",[t._v("因此，选择合适的数据结构（例如字典或 LRU 缓存）作为缓存的实例至关重要。")]),t._v(" "),s("h3",{attrs:{id:"_2-3-第三条规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-第三条规则"}},[t._v("#")]),t._v(" 2.3. 第三条规则：")]),t._v(" "),s("p",[t._v("第三个重要规则是关于内存占用，这很常被忽略。你执行的是 I/O 操作（例如查询数据库、网络服务），还是执行 CPU 密集型操作（例如处理数字和执行内存内计算）？")]),t._v(" "),s("p",[t._v("当我们缓存数据时，应用程序的内存占用会增加，因此选择合适的数据结构并且只缓存需要缓存的数据是至关重要的。")]),t._v(" "),s("p",[t._v("有时侯，我们得查询多个表来创建一个类的对象。然而，我们只需要在我们的应用程序中缓存基本属性。")]),t._v(" "),s("blockquote",[s("p",[t._v("缓存对内存占用有影响。")])]),t._v(" "),s("p",[t._v("例如，假设我们构建了一个报告面板，用于查询数据库并检索订单列表。为了让你有个大致的画面，我们假设面板上仅显示订单名称。")]),t._v(" "),s("p",[t._v("因此，我们可以只缓存每个订单的名称，而不是缓存整个订单对象。通常，架构师建议创建一个具有 "),s("code",[t._v("__slots__")]),t._v(" 属性的「瘦身版」数据传输对象（DTO）以减少内存占用。命名元组或 "),s("code",[t._v("dataclass")]),t._v(" 类也有同样的效果。（"),s("code",[t._v("dataclass")]),t._v(" 类是 Python 3.7 中新增的功能。）")]),t._v(" "),s("p",[t._v("本文的最后一部分：概述实现缓存的细节。")]),t._v(" "),s("h2",{attrs:{id:"_3-如何实现缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何实现缓存"}},[t._v("#")]),t._v(" 3. 如何实现缓存？")]),t._v(" "),s("p",[t._v("有多种方法可以实现缓存。")]),t._v(" "),s("p",[t._v("我们可以在 Python 进程中创建本地数据结构来构建缓存，或将缓存作为服务器充当代理并为请求提供服务。")]),t._v(" "),s("p",[t._v("Python 中有相应的内置工具，例如 "),s("code",[t._v("functools")]),t._v(" 库中的 "),s("code",[t._v("cached_property")]),t._v(" 装饰器。我将通过它来介绍缓存的实现。（仅适用于 Python 3.8 及更高版本。）")]),t._v(" "),s("p",[t._v("下面的代码段说明了 "),s("code",[t._v("cached_property")]),t._v(" 如何运作：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" functools "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cached_property\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FinTech")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@cached_property")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("因此，现在 "),s("code",[t._v("FinTech().run")]),t._v(" 已被缓存，并且 "),s("code",[t._v("list(range(1,100))")]),t._v(" 将只生成一次。但是，在实际场景中，我们几乎不需要缓存属性。")]),t._v(" "),s("p",[t._v("让我们看看其他方法。")]),t._v(" "),s("h3",{attrs:{id:"_3-1-字典方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-字典方法"}},[t._v("#")]),t._v(" 3.1. 字典方法")]),t._v(" "),s("p",[t._v("对于简单的用例，我们可以创建/使用映射数据结构（例如字典），将数据保存在内存中并使其使其可在全局范围内访问。")]),t._v(" "),s("p",[t._v("实现方式有多种，最简单的方法是创建一个单例模块，例如："),s("code",[t._v("config.py")]),t._v("。")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("config.py")]),t._v(" 中，我们可以创建一个字典类型的字段，该字段在开始时被填充一次。")]),t._v(" "),s("p",[t._v("以后我们便可以使用字典的字段来获取结果。")]),t._v(" "),s("p",[t._v("举例来说，看看下方的代码。")]),t._v(" "),s("p",[s("code",[t._v("config.py")]),t._v(" 带有 "),s("code",[t._v("cache")]),t._v(" 属性：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("cache "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("试想一下，我们的应用程序将通过 "),s("code",[t._v("get_prices(symbol, start_date, end_date)")]),t._v(" 函数查询雅虎财经的网络服务以获取公司的历史价格。")]),t._v(" "),s("p",[t._v("历史价格不会改变，因此我们不需要每次需要历史价格时都查询网络服务。我们可以在内存中缓存价格。")]),t._v(" "),s("p",[t._v("在内部实践中，函数 "),s("code",[t._v("get_prices(symbol, start_date, end_date)")]),t._v(" 可以在尝试返回结果之前检查数据是否在缓存中。")]),t._v(" "),s("p",[t._v("让我通过代码解释该策略。")]),t._v(" "),s("p",[t._v("下面的 "),s("code",[t._v("get_prices")]),t._v(" 函数接受一个名为 "),s("code",[t._v("companies")]),t._v(" 的参数。")]),t._v(" "),s("ol",[s("li",[t._v("首先，该函数创建一个开始和结束日期的变量，其中开始日期设为昨天，结束日期设为 12 天前。")]),t._v(" "),s("li",[t._v("然后它创建一个名为 "),s("code",[t._v("target_key")]),t._v(" 的元组类型变量。它的值唯一，由模块、函数、开始和结束日期组成。")]),t._v(" "),s("li",[t._v("该函数首先在 "),s("code",[t._v("config.cache")]),t._v(" 中查找键。如果它找到了，则检查 "),s("code",[t._v("cache")]),t._v(" 是否包含目标公司名称。")]),t._v(" "),s("li",[t._v("如果缓存中包含公司名称，它会从缓存中返回价格。")]),t._v(" "),s("li",[t._v("如果 "),s("code",[t._v("target_key")]),t._v(" 不在缓存中，那么它通过雅虎财经检索所有公司，并将价格保存在缓存中以备将来调用，最后返回价格。")])]),t._v(" "),s("p",[t._v("因此，基本概念是检查缓存中的目标键，如果不存在，则从源头获取它并在返回之前将其保存在缓存中。")]),t._v(" "),s("p",[t._v("这就是缓存的构建方式：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datetime\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" yfinance "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" yf\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" config\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_prices")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("companies"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    end_date "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datetime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("now"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" datetime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timedelta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("days"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    start_date "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" end_date "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" datetime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timedelta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("days"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    target_key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__name__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'_get_prices_'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                  start_date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strftime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%Y-%m-%d"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                  end_date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strftime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%Y-%m-%d"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" target_key "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        cached_prices "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("target_key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cached_prices 是一个字典，其中键为公司符号，值为价格。")]),t._v("\n        prices "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" company "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" companies"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对于每个公司，只获取未缓存的价格。")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" company "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" cached_prices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 我们已经缓存了价格。")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在局部变量中设置价格。")]),t._v("\n                prices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("company"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cached_prices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("company"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 去雅虎财经得到价格。")]),t._v("\n                yahoo_prices "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" yf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("download"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("company"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("start_date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" end"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("end_date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                prices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("company"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" yahoo_prices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Close'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                cached_prices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("company"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" prices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("company"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" prices\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        company_symbols "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lambda")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" companies"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        yahoo_prices "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" yf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("download"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("company_symbols"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("start_date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" end"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("end_date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 现在将其存储在缓存中以备将来使用。")]),t._v("\n        prices_per_company "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" yahoo_prices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Close'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_dict"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("target_key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" prices_per_company\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" prices_per_company\n")])])]),s("p",[t._v("上方的所选键包含开始日期和结束日期。你也可以在键中包含公司名称，存储 "),s("code",[t._v("（公司名称，开始日期，结束日期，函数名称）")]),t._v(" 作为键。")]),t._v(" "),s("p",[t._v("数据结构的键必须是唯一的，它可以是一个元组。")]),t._v(" "),s("p",[t._v("历史价格不会改变，因此不构建及时使缓存失效的逻辑也是安全的。")]),t._v(" "),s("p",[t._v("这个缓存是一个嵌套字典，因为其值是一个字典。它加快了查找的速度，使得操作的时间复杂度为 "),s("code",[t._v("O(1)")]),t._v("。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://medium.com/fintechexplained/time-complexities-of-python-data-structures-ddb7503790ef",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里有一篇很棒的文章"),s("OutboundLink")],1),t._v("，它以一种易于理解的方式解释了 Python 数据结构的时间复杂性。")]),t._v(" "),s("p",[t._v("有时键会变得太长，最好使用 MD5、SHA 等对其进行散列。但是，使用散列可能会发生冲突，使得两个字符串产生相同的散列。")]),t._v(" "),s("p",[t._v("我们也可以利用记忆化（memoisation）技术。")]),t._v(" "),s("p",[t._v("记忆化通常用于递归函数调用，中间结果存储在内存中，并在需要时返回。")]),t._v(" "),s("p",[t._v("因此我将介绍 LRU。")]),t._v(" "),s("h3",{attrs:{id:"_3-2-lru-算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-lru-算法"}},[t._v("#")]),t._v(" 3.2. LRU 算法")]),t._v(" "),s("p",[t._v("我们可以使用 Python 的内置 LRU 功能。")]),t._v(" "),s("p",[t._v("LRU 代表的是 Least Recently Used（最近最少使用）的算法。LRU 可依赖于函数的参数来缓存返回值。")]),t._v(" "),s("p",[t._v("LRU 在 CPU 密集型的递归操作中特别有用。")]),t._v(" "),s("p",[t._v("它本质上是一个装饰器："),s("a",{attrs:{href:"http://twitter.com/lru_cache",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("@lru_cache(maxsize, typed)")]),s("OutboundLink")],1),t._v("，我们可以用它来装饰我们的函数。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("maxsize")]),t._v(" 告诉装饰器缓存的最大大小（预设值为 128）。如果我们不想限制大小，那么只需将其设置为 "),s("code",[t._v("None")]),t._v("。")]),t._v(" "),s("li",[t._v("当缓存比较输入/输出时，"),s("code",[t._v("typed")]),t._v(" 用于指示是否要将不同数据类型下的相同值分别缓存。（如果 "),s("code",[t._v("typed")]),t._v(" 设置为 "),s("code",[t._v("True")]),t._v("，则不同类型的函数参数将分别缓存。例如，"),s("code",[t._v("f(3)")]),t._v(" 和 "),s("code",[t._v("f(3.0)")]),t._v(" 将被视为具有不同结果的不同调用。）")])]),t._v(" "),s("p",[t._v("当我们期望相同的输入有相同的输出时，这非常有用。")]),t._v(" "),s("p",[t._v("保存应用程序的所有数据到内存可能也会造成困扰。")]),t._v(" "),s("p",[t._v("在具有多个进程的分布式应用程序中，这可能会成为一个问题。这种情况下，将所有结果缓存在所有进程的内存中是不合适的。")]),t._v(" "),s("p",[t._v("一个很好的用例是当应用程序在一组机器上运行时，我们可以将缓存托管为服务。")]),t._v(" "),s("h3",{attrs:{id:"_3-3-服务式缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-服务式缓存"}},[t._v("#")]),t._v(" 3.3. 服务式缓存")]),t._v(" "),s("p",[t._v("第三个选项是将缓存数据作为外部服务托管。它充当代理服务器，负责所有的请求和响应，所有应用程序都可以通过它检索数据。")]),t._v(" "),s("p",[t._v("试考虑一下，我们正在构建一个与维基百科一样大的应用程序，预计它可以同时、并行地处理 1000 个请求。")]),t._v(" "),s("p",[t._v("我们需要一个缓存机制，并希望在服务器之间分配缓存。")]),t._v(" "),s("p",[t._v("我们可以使用 Memcached 来缓存数据。")]),t._v(" "),s("p",[t._v("Memcached 在 Linux 和 Windows 中非常流行，因为：")]),t._v(" "),s("ul",[s("li",[t._v("它可用于实现具有状态的记忆缓存。")]),t._v(" "),s("li",[t._v("它甚至可以跨服务器分布。")]),t._v(" "),s("li",[t._v("它使用起来非常简单，速度很快，并且被整个行业中的多个大型组织使用。")]),t._v(" "),s("li",[t._v("支持缓存数据自动过期。")])]),t._v(" "),s("p",[t._v("我们需要安装一个名为 "),s("code",[t._v("pymemcache")]),t._v(" 的 Python 库。")]),t._v(" "),s("p",[t._v("Memcached 要求将数据存储为字符串或二进制。因此，我们必须序列化缓存对象。当我们想要检索它们时，我们必须反序列化它们。")]),t._v(" "),s("p",[t._v("以下的代码段显示了我们如何启动和使用 Memcached：（在执行代码前，你需要下载 Memcached 并启动它。关于如何创建 "),s("code",[t._v("serialiser")]),t._v(" 和 "),s("code",[t._v("deserialiser")]),t._v("，请看"),s("a",{attrs:{href:"https://pymemcache.readthedocs.io/en/stable/apidoc/pymemcache.client.base.html#pymemcache.client.base.Client",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("。）")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pymemcache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("base "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Client\n\n\nclient "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" serialiser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deserialiser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nclient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blog'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'caching'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'publication'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fintechexplained'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nblog "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blog'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-4-问题-使缓存失效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-问题-使缓存失效"}},[t._v("#")]),t._v(" 3.4. 问题：使缓存失效")]),t._v(" "),s("p",[t._v("最后，我想快速地概述一个场景：当相同输入的函数输出频繁更改，且我们希望缩短结果的缓存时间。")]),t._v(" "),s("p",[t._v("试考虑两个应用程序在两个不同的应用程序服务器上运行的情况。")]),t._v(" "),s("p",[t._v("第一个应用程序从数据库服务器获取数据，第二个应用程序更新数据库服务器中的数据。数据被频繁获取，我们希望将数据缓存在第一个应用程序服务器中：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://picbed.kimyang.cn/202109050845905.png",alt:""}})]),t._v(" "),s("p",[t._v("这里有几种方法可以解决它：")]),t._v(" "),s("ul",[s("li",[t._v("每当存储新记录时，第二个应用服务器中的应用可以通知第一个应用服务器，以便刷新缓存。它可以将消息发布到第一个应用程序可以订阅的队列。")]),t._v(" "),s("li",[t._v("第一个应用服务器还可以对数据库服务器进行轻量级调用以查找上次更新数据的时间，然后它可以使用该时间来确定是否需要刷新缓存或从缓存中获取数据。")]),t._v(" "),s("li",[t._v("我们还可以添加一个超时来清除缓存，以便下一个请求可以重新加载它。它很容易实现，但不如我的上一个选项可靠。它可以通过 "),s("code",[t._v("signal")]),t._v(" 库实现，我们可以订阅一个 handler 到 "),s("code",[t._v("signal.alarm(timeout)")]),t._v("，并在 "),s("code",[t._v("timeout")]),t._v(" 被调用后，清除 handler 中的缓存。我们还可以运行后台线程来清除缓存，但是，确保你使用了适当的同步对象。")])]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("缓存是每个 Python 程序员和数据科学家都需要理解的重要概念。")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("原文地址："),s("a",{attrs:{href:"https://medium.com/fintechexplained/advanced-python-how-to-implement-caching-in-python-application-9d0a4136b845",target:"_blank",rel:"noopener noreferrer"}},[t._v("Advanced Python: How To Implement Caching In Python Application"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("原文作者："),s("a",{attrs:{href:"https://medium.com/@farhadmalik",target:"_blank",rel:"noopener noreferrer"}},[t._v("Farhad Malik"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("译文出自："),s("a",{attrs:{href:"https://github.com/xitu/gold-miner",target:"_blank",rel:"noopener noreferrer"}},[t._v("掘金翻译计划"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("本文永久链接："),s("a",{attrs:{href:"https://github.com/xitu/gold-miner/blob/master/article/2021/advanced-python-how-to-implement-caching-in-python-application.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/xitu/gold-miner/blob/master/article/2021/advanced-python-how-to-implement-caching-in-python-application.md"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("译者："),s("a",{attrs:{href:"https://github.com/jaredliw",target:"_blank",rel:"noopener noreferrer"}},[t._v("jaredliw"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("校对者："),s("a",{attrs:{href:"https://github.com/KimYangOfCat",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kim Yang"),s("OutboundLink")],1),t._v("、"),s("a",{attrs:{href:"https://github.com/greycodee",target:"_blank",rel:"noopener noreferrer"}},[t._v("greycodee"),s("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=e.exports}}]);