(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{487:function(s,a,t){"use strict";t.r(a);var r=t(24),n=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("strong",{staticClass:"old-blog"},[s._v("Mongodb安装")])]),s._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#本地安装mongodb"}},[s._v("本地安装mongodb")])]),t("li",[t("a",{attrs:{href:"#阿里云服务器安装mongodb"}},[s._v("阿里云服务器安装mongodb")])]),t("li",[t("a",{attrs:{href:"#数据库的操作"}},[s._v("数据库的操作")])])])]),t("p"),s._v(" "),t("h3",{attrs:{id:"本地安装mongodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地安装mongodb"}},[s._v("#")]),s._v(" 本地安装mongodb")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.mongodb.com/download-center/community",target:"_blank",rel:"noopener noreferrer"}},[s._v("安装地址"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("打开安装的目录，默认没有data,etc ,log 文件的")]),s._v(" "),t("p",[s._v("sudo mkdir -p /data/db")]),s._v(" "),t("p",[s._v("sudo chown -R zhf /data")]),s._v(" "),t("p",[s._v("./mongod 就可以启动了，但是全局不能使用，需要配置下")]),s._v(" "),t("p",[s._v("设置全局路径 ： echo 'export PATH=/Users/zhenfeng/mongodb/bin:$PATH'>>~/.bash_profile")]),s._v(" "),t("p",[s._v("在根路径source .bash_profile就生效了，查看是否成功")]),s._v(" "),t("p",[s._v("$PATH/ /是否有当前db 的目录")]),s._v(" "),t("p",[s._v("which mongod  //是否路径")]),s._v(" "),t("p",[s._v("问题：整好之后发现配置的环境变量（mongod）不起作用了，执行source .bash_profile后，mongod可以用了，但是终端全部关闭后，再输入mongod，就不起作用了。")]),s._v(" "),t("p",[t("strong",[s._v("解决方法")])]),s._v(" "),t("p",[s._v("执行vi ~/.zshrc打开.zshrc,将 source .bash_profile 粘贴到最下面，保存即可。或者直接open .bash_profile把里面的内容粘贴到.zshrc里面,保存重启即可。")]),s._v(" "),t("p",[s._v("接下来就是启动mongodb了,cmd+T 新建命令窗口，使用命令 "),t("code",[s._v("mongod")]),s._v(" 启动mongoDB server，启动成功后最后一行应该是端口号27017")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/24/16ae8fe807c8c514?w=636&h=266&f=png&s=111571",alt:""}})]),s._v(" "),t("p",[s._v("mongodb 启动成功，正等待着被连接。")]),s._v(" "),t("p",[s._v("cmd+T 新建命令窗口，执行 "),t("code",[s._v("mongo")]),s._v("，进入 mongodb 命令行模式：")]),s._v(" "),t("h3",{attrs:{id:"阿里云服务器安装mongodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#阿里云服务器安装mongodb"}},[s._v("#")]),s._v(" 阿里云服务器安装mongodb")]),s._v(" "),t("p",[s._v("1.下载mongodb")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 兼容性好")]),s._v("\ncurl "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("O "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("https")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("fastdl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mongodb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("linux"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("linux"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("x86_64"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.2")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".9")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tgz\n\ncurl "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("O "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("https")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("fastdl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mongodb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("linux"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("linux"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("x86_64"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".13")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tgz\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("2.解压")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[s._v("tar zxvf mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("linux"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("x86_64"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.2")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".9")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tgz\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# copy到usr目录下【使用规范】")]),s._v("\ncp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("macos"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("x86_64"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".13")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mongodb\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("3.创建数据文件夹和日志文件等")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[s._v("mkdir "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data\ntouch "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mongodb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log\ntouch "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mongodb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("conf\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mongodb.conf配置文件如下")]),s._v("\ndbpath"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data\nlogpath"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mongodb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log\nlogappend "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" \nport "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v(" \nfork "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auth")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("4.启动")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置全局变量")]),s._v("\nexport PATH"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pwd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PATH")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 跳转到")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启数据库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mongod "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("config "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mongodb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("conf\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mongod "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("dbpath"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("logpath"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mongodb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("logappend  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("fork\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭数据库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mongod "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("shutdown "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dbpath"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看是否开启")]),s._v("\nnetstat "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("lanp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" grep "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"27017"')]),s._v("\nps "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ef"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("grep mongod\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不能使用kill -9 杀死mongo")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 补救")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\nrm "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lock\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mongod  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("repair\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从0~65535全部是标准端口，但是从0~1024号端口是系统端口，用户无法修改")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从1025~65534端口是系统为用户预留的端口，而65535号端口为系统保留")]),s._v("\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("p",[s._v("5.创建完成后需要在阿里云控制台配置防火墙才能连接")]),s._v(" "),t("h3",{attrs:{id:"数据库的操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库的操作"}},[s._v("#")]),s._v(" 数据库的操作")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("导出数据库\n./mongoexport --port [port] --db test --collection users --out export.json")])]),s._v(" "),t("li",[t("p",[s._v("导入数据库\n./mongoimport -h 120.79.229.197:27-17 -d test -c scenics --file=./export.json")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);