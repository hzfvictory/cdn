(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{482:function(s,a,t){"use strict";t.r(a);var n=t(24),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("strong",{staticClass:"old-blog"},[s._v("云服务器配置")])]),s._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#装机"}},[s._v("装机")])]),t("li",[t("a",{attrs:{href:"#添加、删除虚拟主机使用教程"}},[s._v("添加、删除虚拟主机使用教程")]),t("ul",[t("li",[t("a",{attrs:{href:"#lnmp相关软件安装目录"}},[s._v("LNMP相关软件安装目录")])]),t("li",[t("a",{attrs:{href:"#lnmp相关配置文件位置"}},[s._v("LNMP相关配置文件位置")])])])]),t("li",[t("a",{attrs:{href:"#修改linux-root-后面的别名"}},[s._v("修改linux root@后面的别名")])]),t("li",[t("a",{attrs:{href:"#operation-not-permitted-错误问题"}},[s._v("Operation Not Permitted 错误问题")])]),t("li",[t("a",{attrs:{href:"#安装node"}},[s._v("安装node")])])])]),t("p"),s._v(" "),t("h3",{attrs:{id:"装机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#装机"}},[s._v("#")]),s._v(" 装机")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://lnmp.org/faq/lnmp-vhost-add-howto.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("LNMP文档"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"添加、删除虚拟主机使用教程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加、删除虚拟主机使用教程"}},[s._v("#")]),s._v(" 添加、删除虚拟主机使用教程")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果输入有错误需要删除时，可以按住Ctrl再按Backspace键进行删除。")]),s._v("\nlnmp vhost add \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列表")]),s._v("\nlnmp vhost list\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除网站会先列出当前已有虚拟主机，按提示输入要删除的虚拟主机域名 回车确认。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里只是删除虚拟主机配置文件，网站文件并不会删除需要自己删除。")]),s._v("\nlnmp vhost del\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h4",{attrs:{id:"lnmp相关软件安装目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lnmp相关软件安装目录"}},[s._v("#")]),s._v(" LNMP相关软件安装目录")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Nginx 目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认网站目录 : 0.9版本为 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("wwwroot"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1.0及以后版本为 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("wwwroot"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Nginx日志目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("wwwlogs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h4",{attrs:{id:"lnmp相关配置文件位置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lnmp相关配置文件位置"}},[s._v("#")]),s._v(" LNMP相关配置文件位置")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Nginx主配置(默认虚拟主机)文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("conf"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("conf\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 虚拟主机配置文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("conf"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("vhost"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("域名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("conf\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# MySQL配置文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("my"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cnf\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"修改linux-root-后面的别名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改linux-root-后面的别名"}},[s._v("#")]),s._v(" 修改linux root@后面的别名")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[s._v("vi "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("hostname  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启服务器")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"operation-not-permitted-错误问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#operation-not-permitted-错误问题"}},[s._v("#")]),s._v(" Operation Not Permitted 错误问题")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[s._v("chattr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("i "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nrm "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rf "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"安装node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装node"}},[s._v("#")]),s._v(" 安装node")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[s._v("yum install "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("y node \nnode "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("v  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# v6.17.1")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 版本升级")]),s._v("\nnpm i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g n\nrm "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node\nn stable  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最稳定的版本")]),s._v("\nln "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("s "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node\nnode "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("v  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# v12.14.0")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);