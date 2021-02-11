(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{367:function(t,a,s){"use strict";s.r(a);var n=s(42),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"从单页应用-spa-到服务器渲染-ssr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从单页应用-spa-到服务器渲染-ssr"}},[t._v("#")]),t._v(" 从单页应用(SPA)到服务器渲染(SSR)")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"情景回顾"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#情景回顾"}},[t._v("#")]),t._v(" 情景回顾")]),t._v(" "),s("p",[t._v("在学习Vue开发一个电商网站的管理后台时,使用到了一个组件 "),s("strong",[t._v("vue-quill-editor")]),t._v(" 主要是一个快捷的一个富文本编辑器")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://www.hualigs.cn/image/601cd239e1a5d.jpg",alt:""}})]),t._v(" "),s("p",[t._v("在使用这个组件的组件的时候看到了两种的使用方式分别是"),s("strong",[t._v("SPA")]),t._v("和"),s("strong",[t._v("SSR")]),t._v(",技术不够的我,只能面向百度编程🌍,那我们来看看是🐂是🐎吧！")]),t._v(" "),s("blockquote",[s("p",[t._v("本文分别从两者的概念，主要的不同，优劣势列举等等去分析SPA和SSR。")])]),t._v(" "),s("h2",{attrs:{id:"spa-single-page-web-application-单页面应用程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spa-single-page-web-application-单页面应用程序"}},[t._v("#")]),t._v(" SPA(Single Page Web Application)[单页面应用程序]")]),t._v(" "),s("h3",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("blockquote",[s("p",[t._v("单页Web应用就是只有一张Web页面的应用，是加载单个HTML 页面并在用户与应用程序交互时动态更新该页面的Web应用程序。也就是网页上通过hash(#)的变化来实现推动界面变化,通过不同的组件切换,展示所对应的功能模块,也避免了页面的重新加载")])]),t._v(" "),s("h3",{attrs:{id:"使用spa的主流框架-mvvm-model-view-viewmodel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用spa的主流框架-mvvm-model-view-viewmodel"}},[t._v("#")]),t._v(" 使用SPA的主流框架(MVVM:Model-View-ViewModel)")]),t._v(" "),s("ol",[s("li",[t._v("AngularJS")]),t._v(" "),s("li",[t._v("VueJS")]),t._v(" "),s("li",[t._v("backone")]),t._v(" "),s("li",[t._v("extjs")])]),t._v(" "),s("h4",{attrs:{id:"小知识点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小知识点"}},[t._v("#")]),t._v(" 小知识点")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("go target"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("i am target place"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- \n    点击a链接,文档会自动滚动到id为target的div区域中,运用在电商网站的楼层跳跃等实际当中\n    hash除了整个功能还有另一种含义:\n    指导浏览器行为但是不上传服务器\n\n    因为改变URL中的任何一个字符都会使浏览器重新去请求服务器,导致很多已经加载过的资源都会重新请求\n\n    简而言之:\n    [改变#后面的值不触发网页重载，但会记录到浏览器history中去。]\n --\x3e")]),t._v("\n")])])]),s("h3",{attrs:{id:"spa优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spa优点"}},[t._v("#")]),t._v(" SPA优点")]),t._v(" "),s("ol",[s("li",[t._v("很好的用户操作，用户不需要刷新页面，整个交互都通过AJAX向服务器发起请求,后通过服务器返回的内容进行下一步的操作")]),t._v(" "),s("li",[t._v("适合用于前后端分类开发,服务端提供API地址,前端使用对应服务的API地址和对应的请求方式,拿到数据对客户端进行渲染")])]),t._v(" "),s("h3",{attrs:{id:"spa缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spa缺点"}},[t._v("#")]),t._v(" SPA缺点")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("初次加载耗时多")]),t._v(" "),s("ul",[s("li",[t._v("在加载页面显示的时候加载打包文件，如果打包文件较大或者网速慢则用户体验不好，首屏时需要请求一次html，同时还要发送一次js请求，两次请求回来了，首屏才会展示出来。")])])]),t._v(" "),s("li",[s("p",[t._v("SEO(搜索引擎优化)不友好")]),t._v(" "),s("ul",[s("li",[t._v("因为搜索引擎只认识html里的内容，不认识js的内容，而单页应用的内容都是靠js渲染生成出来的，搜索引擎不识别这部分内容，也就不会给一个好的排名，会导致单页应用做出来的网页在百度和谷歌上的排名差。使用单页面应用将大大减少搜索引擎对网站的收录。")])])])]),t._v(" "),s("h3",{attrs:{id:"实现一个简单的基础的spa"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现一个简单的基础的spa"}},[t._v("#")]),t._v(" 实现一个简单的基础的SPA")]),t._v(" "),s("p",[t._v("主要通过 "),s("code",[t._v("onhashchange")]),t._v(" 事件,所以我们主要监听这个事件的触发即可实现")]),t._v(" "),s("p",[t._v("下面是一个利用$.ajax实现的单页面切换的例子：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onhashchange")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//监听hash值变化，实现页面变换")]),t._v("\n　　"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" hash"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n　　"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("changePage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("changePage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("hash")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n　　"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过不同的hash地址路由到对应的页面")]),t._v("\n　　"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n　　"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#index'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n　　　　url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'partials/list.html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n　　　　"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n　　"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#newpage'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n　　　　url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'partials/newpage.html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n　　　　"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n　　"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#edit'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n　　　　url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'partials/edit.html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n　　　　"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n　　"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#view'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n　　　　url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'partials/view.html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n　　　　"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n　　"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n　　$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//根据hash值选择页面")]),t._v("\n　　　　type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n　　　　url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n　　　　"),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n　　　　　　main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 服务器拿到响应数据再渲染")]),t._v("\n　　　　　"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n　　"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"ssr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssr"}},[t._v("#")]),t._v(" SSR")]),t._v(" "),s("p",[t._v("那在上面我们已经初步的了解了SPA的一些特别之处还有弊端\n那我们再来看看SSR又能够带给我们怎么样的特点呢")]),t._v(" "),s("p",[t._v("SSR: "),s("code",[t._v("Server-Side Render")]),t._v(" 服务端渲染")]),t._v(" "),s("p",[t._v("简单的说就是: 服务端直接渲染出"),s("code",[t._v("HTML")]),t._v("字符串模板,浏览器可以直接通过解析该字符串模板显示页面,因此首屏的内容不在依赖JavaScript的渲染！！！")]),t._v(" "),s("p",[t._v("就好像我不需要再通过JS动态切换,而是服务端已经渲染好,我直接拿来就是可以使用")]),t._v(" "),s("h3",{attrs:{id:"ssr优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssr优势"}},[t._v("#")]),t._v(" SSR优势")]),t._v(" "),s("ol",[s("li",[t._v("首屏加载时间：因为是 HTML 直出，浏览器可以直接解析该字符串模版显示页面。")]),t._v(" "),s("li",[t._v("SEO 友好：正是因为服务端渲染输出到浏览器的是完备的 html 字符串，使得搜索引擎 能抓取到真实的内容，利于 SEO。")])]),t._v(" "),s("h3",{attrs:{id:"ssr缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssr缺点"}},[t._v("#")]),t._v(" SSR缺点")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("虽然 SSR 能快速呈现页面，但是在 UI 框架（比如 React）加载成功之前，页面是没法进行 UI 交互的。")])]),t._v(" "),s("li",[s("p",[t._v("TTFB (Time To First Byte)，即第一字节时间会变长，因为 SSR 相对于 CSR 需要在服务端渲染出更多的 HTML 片段，因此加载时间会变长。")])]),t._v(" "),s("li",[s("p",[t._v("更多的服务器端负载。由于 SSR 需要依赖 Node.js 服务渲染页面，显然会比仅仅提供静态文件的 CSR 应用需要占用更多服务器 CPU 资源。以 React 为例，它的 renderToString() 方法是同步 CPU 绑定调用，这就意味着在它完成之前，服务器是无法处理其他请求的。因此在高并发场景，需要准备相应的服务器负载，并且做好缓存策略。")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.zyiz.net/upload/202003/17/202003171101347288.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("SPA:\n优点:")]),t._v(" "),s("ol",[s("li",[t._v("页面之间的切换快")]),t._v(" "),s("li",[t._v("一定程度上减少了后端服务器的压力")]),t._v(" "),s("li",[t._v("后端程序只需要提供API，不用管client是手机端还是PC端\n缺点:")]),t._v(" "),s("li",[t._v("首屏打开很慢，用户首次打开要下载SPA框架及应用程序的代码，然后再渲染页面")]),t._v(" "),s("li",[t._v("不利于SEO搜索引擎优化")])]),t._v(" "),s("p",[t._v("SSR:\n优点:")]),t._v(" "),s("ol",[s("li",[t._v("更快的响应时间，不用等待所有的js都下载完成，浏览器变成现实比较完整的页面")]),t._v(" "),s("li",[t._v("更好的SEO，我们可以将SEO的关键数据直接在后台就渲染成html，从而保证搜索引擎的爬虫能爬取到关键数据")])]),t._v(" "),s("p",[t._v("缺点:")]),t._v(" "),s("ol",[s("li",[t._v("占用更多的cpu和内存资源")]),t._v(" "),s("li",[t._v("一些常用的浏览器API无法使用，比如window，document，alert等，如果使用的话需要对运行环境加以判断")]),t._v(" "),s("li",[t._v("开发调试会比较麻烦，对SPA的一些组件的生命周期的管理会变得复杂，只会执行ComponentMount之前的生命周期，第三库使用受限，学习成本大。")])]),t._v(" "),s("h3",{attrs:{id:"为什么ssr比spa要快"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么ssr比spa要快"}},[t._v("#")]),t._v(" 为什么SSR比SPA要快")]),t._v(" "),s("h4",{attrs:{id:"服务端渲染路线"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染路线"}},[t._v("#")]),t._v(" 服务端渲染路线")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190712222152121.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5Mzg0Mzc5,size_16,color_FFFFFF,t_70",alt:""}})]),t._v(" "),s("h4",{attrs:{id:"客户端渲染路线"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端渲染路线"}},[t._v("#")]),t._v(" 客户端渲染路线")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190712222237582.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5Mzg0Mzc5,size_16,color_FFFFFF,t_70",alt:""}})]),t._v(" "),s("blockquote",[s("p",[t._v("服务器端渲染会先向后端请求数据，生成完整首屏HTML后返回给客户端")])]),t._v(" "),s("blockquote",[s("p",[t._v("客户端渲染会等待JS下载，解析完之后再向服务器请求数据，等待过程中是什么也没有的，所以会出现首屏白页的情况")])]),t._v(" "),s("h2",{attrs:{id:"参考文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),s("p",[t._v("这些文章都是我在搜索资源时,感觉能够很大程度帮助你理解一些概念，并通过简单的言语能够表达清晰,有需要的可以去查看")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://blog.csdn.net/qq_35746765/article/details/75304118",target:"_blank",rel:"noopener noreferrer"}},[t._v("单页面应用（SPA）的简单介绍"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1643309",target:"_blank",rel:"noopener noreferrer"}},[t._v("什么是 SSR"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/weixin_44757417/article/details/109586636",target:"_blank",rel:"noopener noreferrer"}},[t._v("简单了解SPA、SEO及CSR和SSR渲染方式"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/60975107",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSR VS CSR ,一次讲个通透"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);