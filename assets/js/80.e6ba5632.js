(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{638:function(t,v,_){"use strict";_.r(v);var o=_(3),s=Object(o.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("过年回家一趟，才知道家里的网络是有多么的垃圾～各种网站被墙，即使拥有小飞机也解决不了任何问题，毕竟家里的网速也是硬伤，时常会因为各种网络时延长丢包！！于是乎，我就踏上了这寻找各种网络问题解决办法的旅途，其中一些有好的解决办法便搬运一下，以借朋友参考～")]),t._v(" "),_("h1",{attrs:{id:"github-网络连接失败"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#github-网络连接失败"}},[t._v("#")]),t._v(" GitHub 网络连接失败")]),t._v(" "),_("p",[t._v("首先来看遇到的问题:")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://picbed.kimyang.cn/202109050823960.jpeg",alt:"各种网络报错"}})]),t._v(" "),_("p",[t._v("不仅仅是在游览器中如此，在终端中运行 wget 和 curl 亦是如此。。。甚至git push 一段代码都会被卡～")]),t._v(" "),_("h2",{attrs:{id:"游览器下载网络代理的解决方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#游览器下载网络代理的解决方法"}},[t._v("#")]),t._v(" 游览器下载网络代理的解决方法")]),t._v(" "),_("p",[t._v("这是最基本的问题，解决方法很多，此处就不再赘述！（买飞机厂服务或自己搭建服务也都是可以的）这个问题解决了，你才有可能尝试下面的一些方法。")]),t._v(" "),_("p",[t._v("如果你已经确定自己有了小飞机，但是网络下载依旧失败，首先检查自己是否开启了小飞机服务，然后检查网络代理模式，若是PAC模式，可以尝试切换到全局模式后再次尝试～毕竟PAC代理规则也难免抽风！")]),t._v(" "),_("h2",{attrs:{id:"git-push-失败的解决方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git-push-失败的解决方案"}},[t._v("#")]),t._v(" git push 失败的解决方案")]),t._v(" "),_("p",[_("strong",[t._v("给你的 git 配置网络代理")])]),t._v(" "),_("p",[t._v("注意此处只是给你的 git 设置网络代理，而非终端！")]),t._v(" "),_("p",[t._v("首先打开你的小飞机，查看你的小飞机监听的本地端口号：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly90dmExLnNpbmFpbWcuY24vbGFyZ2UvMDA4Mnp5YnBneTFnYnplOGIzd29vajMwY3owOGR3ZXUuanBn?x-oss-process=image/format,png",alt:"查看端口号"}})]),t._v(" "),_("p",[t._v("打开终端，输入以下命令：")]),t._v(" "),_("p",[_("code",[t._v('git config --global http.proxy "127.0.0.1:1086"')])]),t._v(" "),_("p",[_("code",[t._v('git config --global https.proxy "127.0.0.1:1086"')])]),t._v(" "),_("p",[t._v("至此，git 的网络代理设置完成，仅需两个命令！为确保一定走代理路线，建议将小飞机的代理模式开为全局模式。PAC模式可能会因为代理规则未包括GitHub而导致 git push 失败！")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly90dmExLnNpbmFpbWcuY24vbGFyZ2UvMDA4Mnp5YnBneTFnYnplOGJ6a2JhajMwNzQwZGFnbTIuanBn?x-oss-process=image/format,png",alt:"全局模式"}})]),t._v(" "),_("h2",{attrs:{id:"终端代理设置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#终端代理设置"}},[t._v("#")]),t._v(" 终端代理设置")]),t._v(" "),_("p",[t._v("上面的 git 代理设置只能保证 git 命令的网络请求走代理路线，而在终端使用其他命令却依旧是国内网络路线。所以想让终端其他所有命令的网络请求也走代理路线，需尝试一下方法：")]),t._v(" "),_("p",[t._v("首先要做的依旧是查询你的飞机的代理监听端口，方法在上文中有，自行查看。")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("临时使用代理：\n直接在终端运行一下命令：\n"),_("code",[t._v("export http_proxy=http://127.0.01:1086")])]),t._v(" "),_("p",[_("code",[t._v("export https_proxy=http://127.0.01:1086")])]),t._v(" "),_("p",[t._v("这个办法的好处是简单直接，只对当前终端有效，退出就失效，不会影响电脑环境配置。")]),t._v(" "),_("p",[t._v("如果你用的是 ss 代理，在当前终端运行以下命令：")]),t._v(" "),_("p",[_("code",[t._v("export ALL_PROXY=socks5://127.0.0.1:1086")])]),t._v(" "),_("p",[t._v("那么 "),_("code",[t._v("wget")]),t._v(" "),_("code",[t._v("curl")]),t._v(" 这类网络命令都会经过 ss 代理.")])]),t._v(" "),_("li",[_("p",[t._v("长期使用：")]),t._v(" "),_("p",[t._v("将代理配置直接写入Shell配置文件中"),_("code",[t._v(".bashrc")]),t._v("或者"),_("code",[t._v(".zshrc")]),t._v("\t，这个办法的好处是把代理服务器永久保存了，下次也可以直接用了。")]),t._v(" "),_("p",[t._v("直接在"),_("code",[t._v(".bashrc")]),t._v("或者"),_("code",[t._v(".zshrc")]),t._v("中添加以下内容：")]),t._v(" "),_("p",[_("code",[t._v('export http_proxy="socks5://127.0.0.1:1086"')])]),t._v(" "),_("p",[_("code",[t._v('export https_proxy="socks5://127.0.0.1:1086”')])]),t._v(" "),_("p",[t._v("然后 "),_("code",[t._v("ESC")]),t._v(" 后"),_("code",[t._v(":wq")]),t._v(" 保存文件，接着在终端中执行\n"),_("code",[t._v("source ~/.bashrc")])])]),t._v(" "),_("li",[_("p",[t._v("利用 proxychains 在终端使用 socks5 代理\n这个博主写得较为详细，推荐"),_("a",{attrs:{href:"%5Bhttps://blog.fazero.me/2015/08/31/%E5%88%A9%E7%94%A8proxychains%E5%9C%A8%E7%BB%88%E7%AB%AF%E4%BD%BF%E7%94%A8socks5%E4%BB%A3%E7%90%86/%5D(https://blog.fazero.me/2015/08/31/%E5%88%A9%E7%94%A8proxychains%E5%9C%A8%E7%BB%88%E7%AB%AF%E4%BD%BF%E7%94%A8socks5%E4%BB%A3%E7%90%86/)"}},[t._v("《利用 proxychains 在终端使用 socks5 代理》")])])])]),t._v(" "),_("p",[_("strong",[t._v("提示：终端开启网络代理是有一定的安全风险的")])]),t._v(" "),_("h1",{attrs:{id:"google-账号无法同步"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#google-账号无法同步"}},[t._v("#")]),t._v(" Google 账号无法同步")]),t._v(" "),_("p",[t._v("今日，我尝试使用了一段时间的 W0indows PC, 下载 Chrome 游览器之后，竟然遇到了账号无法登陆和同步的问题！即使我开启了小飞机，设置了全局模式，亦然！！！！")]),t._v(" "),_("p",[t._v("经过一顿搜索后，尝试成功的方法中最简单的便是 "),_("a",{attrs:{href:"https://chrome.google.com/webstore/category/extensions?hl=zh-CN",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chrome 同步助手"),_("OutboundLink")],1),t._v("，在Google 网上商店下载成功后，使用其默认的代理路线就能帮助你登陆和同步账号～")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly90dmExLnNpbmFpbWcuY24vbGFyZ2UvMDA4Mnp5YnBneTFnYnplOGN6NGF5ajMwOWEwNXlhYTUuanBn?x-oss-process=image/format,png",alt:"Chrome同步助手"}})]),t._v(" "),_("p",[t._v("没有同步助手的同学，可以在这个"),_("a",{attrs:{href:"https://chromecj.com/productivity/2019-01/1792/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门"),_("OutboundLink")],1),t._v("去下载～")]),t._v(" "),_("p",[t._v("至此，网络问题基本得以解决～")]),t._v(" "),_("p",[t._v("Have fun for you!")])])}),[],!1,null,null,null);v.default=s.exports}}]);