(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{480:function(a,t,s){"use strict";s.r(t);var n=s(24),r=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[s("strong",{staticClass:"old-blog"},[a._v("yarn & npm")])]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#node升级"}},[a._v("node升级")])]),s("li",[s("a",{attrs:{href:"#升级包"}},[a._v("升级包")])]),s("li",[s("a",{attrs:{href:"#yarn-切换源"}},[a._v("yarn 切换源")])]),s("li",[s("a",{attrs:{href:"#npm-切换源"}},[a._v("npm 切换源")])]),s("li",[s("a",{attrs:{href:"#你必须知道的yarn"}},[a._v("你必须知道的yarn")]),s("ul",[s("li",[s("a",{attrs:{href:"#yarn优势"}},[a._v("yarn优势")])]),s("li",[s("a",{attrs:{href:"#yarn指令"}},[a._v("yarn指令")])])])]),s("li",[s("a",{attrs:{href:"#参考文章"}},[a._v("参考文章")])])])]),s("p"),a._v(" "),s("h3",{attrs:{id:"node升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node升级"}},[a._v("#")]),a._v(" node升级")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("1、window系统升级node就只有到node官网下载window安装包来覆盖之前的node\n2、mac升级node版本\n   npm i -g n \n   n 12.9.1 //指定版本升级\n   n latest //安装最新版本\n   n stable //安装最稳定的版本\n")])])]),s("h3",{attrs:{id:"升级包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#升级包"}},[a._v("#")]),a._v(" 升级包")]),a._v(" "),s("p",[s("code",[a._v("1")])]),a._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("npm install "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("g npm"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("check    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//安装全局的包")]),a._v("\nnpm update "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("g        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//全部安装不建议用")]),a._v("\nnpm update "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//单个安装")]),a._v("\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[s("code",[a._v("2")])]),a._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("yarn global add npm"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("check"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("updates  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//安装全局的包")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//ncu  查看所有可以安装的包")]),a._v("\nsudo ncu "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("u "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//这个只是改变package里面的版本 不会更新包")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//所以要sudo ncu -u <name> && sudo yarn ")]),a._v("\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("p",[s("code",[a._v("3推荐")])]),a._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("yarn upgrade"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("interactive "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("latest "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//需要手动选择升级的依赖包，按空格键选择，a 键切换所有，i 键反选选择")]),a._v("\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[s("code",[a._v("4")])]),a._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("yarn upgrade react "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("latest "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//yarn upgrade 更新依赖包时yarn.lock更新但package.json不同步更新版本信息,网上说会同步更新，我试了下，未更新，具体看你们")]),a._v("\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"yarn-切换源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yarn-切换源"}},[a._v("#")]),a._v(" yarn 切换源")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("1、`查看一下当前源`\nyarn config get registry\n2、`切换为淘宝源`\nyarn config set registry https://registry.npm.taobao.org\n3、`或者切换为自带的`\nyarn config set registry https://registry.yarnpkg.com\n")])])]),s("h3",{attrs:{id:"npm-切换源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-切换源"}},[a._v("#")]),a._v(" npm 切换源")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("1、`全局配置切换到淘宝源`\n npm config set registry https://registry.npm.taobao.org  \n2、`检测是否切换到了淘宝源`\n npm info underscore\n")])])]),s("h3",{attrs:{id:"你必须知道的yarn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#你必须知道的yarn"}},[a._v("#")]),a._v(" 你必须知道的yarn")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://code.fb.com/web/yarn-a-new-package-manager-for-javascript/",target:"_blank",rel:"noopener noreferrer"}},[a._v("yarn的起源"),s("OutboundLink")],1),a._v("已经解释了为什么要创建一个新的javascript包管理器，这里笔者也推荐大家从npm切换为yarn。npm4就不说了，速度太慢了，npm5借鉴了很多yarn的机制，比如简单的版本锁、重写cache模块等，减少了与yarn的差距。但依然有些地方做的不如yarn,"),s("a",{attrs:{href:"https://jobs.stratsys.com/blog/posts/9244-npm5-vs-yarn-which-one-is-better",target:"_blank",rel:"noopener noreferrer"}},[a._v("这篇文章"),s("OutboundLink")],1),a._v("记录了npm5和yarn的实验对比，结论是：在没有缓存时，yarn和npm5速度差不多；在有缓存时，yarn比npm5快2倍。")]),a._v(" "),s("h4",{attrs:{id:"yarn优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yarn优势"}},[a._v("#")]),a._v(" yarn优势")]),a._v(" "),s("p",[a._v("以下针对npm5前:")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("yarn 离线安装。")]),a._v("\n下载的时候 Yarn 缓存了所有的包以至于不需要再次从网络下载")]),a._v(" "),s("li",[s("code",[a._v("yarn并行下载，使得时间更快。")]),a._v("\n通过并行操作最大限度地提高资源利用率，以至于再次下载的时候安装时间比之前更快。npm5之前是等上一个安装完后再执行下一个，串行下载。")]),a._v(" "),s("li",[s("code",[a._v("yarn锁包yarn-lock，保证引用包正确。")]),a._v("\nyarn.lock 文件准确的锁定了所有被下载和项目依赖的包版本。通过这个文件，你能确定你的工程师团队的每一位成员都能安装准确的包，并且可以更容易的部署，而没有意外 bug出现。")])]),a._v(" "),s("h4",{attrs:{id:"yarn指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yarn指令"}},[a._v("#")]),a._v(" yarn指令")]),a._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("yarn bin")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[a._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" 打印出执行脚本的位置，可以被yarn run执行。相当于npm bin\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("yarn login/yarn publish")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[a._v("`")])]),a._v(" npm登录和发布。相当于npm login"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("npm publish\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("yarn cache clean")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[a._v("`")])]),a._v("，清除缓存，相当于npm cache clean。\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("yarn list")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[a._v("`")])]),a._v(" 列出当前所有依赖的包\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("yarn config list")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[a._v("`")])]),a._v(" 显示所有配置设置\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h3",{attrs:{id:"参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[a._v("#")]),a._v(" 参考文章")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://auth0.com/blog/five-things-you-can-do-with-yarn/",target:"_blank",rel:"noopener noreferrer"}},[a._v("5 things you can do with Yarn"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://yarnpkg.com/en/docs/cli/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Yarn - CLI Introduction"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/XdOPPay8fpNBiH2ExW_EyQ",target:"_blank",rel:"noopener noreferrer"}},[a._v("Node.js 中的依赖管理"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);