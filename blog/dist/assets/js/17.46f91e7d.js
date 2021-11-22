(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{387:function(s,t,a){"use strict";a.r(t);var e=a(24),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("strong",{staticClass:"old-blog"},[s._v("MAC整理")])]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#mac整理"}},[s._v("MAC整理")])]),a("li",[a("a",{attrs:{href:"#配置sudo免密码"}},[s._v("配置sudo免密码")])]),a("li",[a("a",{attrs:{href:"#sudo报错信息-etc-sudoers-is-world-writable"}},[s._v("sudo报错信息 /etc/sudoers is world writable")])]),a("li",[a("a",{attrs:{href:"#mac下安装homebrew"}},[s._v("mac下安装Homebrew")])]),a("li",[a("a",{attrs:{href:"#mac安装autojump"}},[s._v("mac安装autojump")])]),a("li",[a("a",{attrs:{href:"#mac-终端-oh-my-zsh-配置"}},[s._v("Mac 终端 oh-my-zsh 配置")])]),a("li",[a("a",{attrs:{href:"#mac下sshpass-不能使用"}},[s._v("mac下sshpass 不能使用")])]),a("li",[a("a",{attrs:{href:"#mac设置git的分支记录"}},[s._v("mac设置git的分支记录")])]),a("li",[a("a",{attrs:{href:"#允许安装未知来源"}},[s._v("允许安装未知来源")])]),a("li",[a("a",{attrs:{href:"#微信助手"}},[s._v("微信助手")])]),a("li",[a("a",{attrs:{href:"#添加webstrom的主题"}},[s._v("添加WebStrom的主题")])]),a("li",[a("a",{attrs:{href:"#vscode"}},[s._v("VSCode")])])])]),a("p"),s._v(" "),a("h3",{attrs:{id:"mac整理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac整理"}},[s._v("#")]),s._v(" MAC整理")]),s._v(" "),a("h3",{attrs:{id:"配置sudo免密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置sudo免密码"}},[s._v("#")]),s._v(" 配置sudo免密码")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/u011046452/article/details/90140936",target:"_blank",rel:"noopener noreferrer"}},[s._v("创建root账户"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("code",[s._v("1.")]),s._v(" 需要在/etc/sudoers中配置。\n"),a("br"),s._v("\n这个文件的权限是只读，配置之前需要加写权限。\n"),a("br"),s._v(" "),a("code",[s._v("sudo chmod u+w /etc/sudoers")])]),s._v(" "),a("p",[a("code",[s._v("2.")]),s._v(" 打开命令窗口\n"),a("code",[s._v("sudo visudo 或者 sudo vi /etc/sudoers")])]),s._v(" "),a("p",[s._v("按i(insert)开启插入编辑模式")]),s._v(" "),a("p",[a("code",[s._v("将 #%admin ALL=(ALL) ALL 替换为 %admin ALL=(ALL) NOPASSWD: ALL")])]),s._v(" "),a("p",[s._v("修改后按esc键，退出编辑模式，最后按住Shift+ ZZ 保存退出")]),s._v(" "),a("p",[a("code",[s._v("3.")]),s._v(" 既然原来权限是r/r/只读的,修改之后最好也改回来。")]),s._v(" "),a("p",[a("code",[s._v("sudo chmod u-w /etc/sudoers")])]),s._v(" "),a("h3",{attrs:{id:"sudo报错信息-etc-sudoers-is-world-writable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sudo报错信息-etc-sudoers-is-world-writable"}},[s._v("#")]),s._v(" sudo报错信息 /etc/sudoers is world writable")]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("错误信息")]),s._v(" "),a("p",[s._v("sudo: /etc/sudoers is world writable\n"),a("br"),s._v("\nsudo: no valid sudoers sources found, quitting\n"),a("br"),s._v("\nsudo: unable to initialize policy plugin")])]),s._v(" "),a("p",[s._v("今天误操作修改了/etc/sudoers的权限，将它的权限改成了777，结果就导致执行所有sudo的命令都报错。\n"),a("br"),s._v(" "),a("code",[s._v("sudo: /etc/sudoers is world writable sudo: no valid sudoers sources found, quitting")]),s._v(" "),a("br"),s._v("\n想重新把它的权限修改回去，但是执行"),a("code",[s._v("chmod 440 /etc/sudoers")]),s._v("后却发现报错为：\n"),a("br"),s._v(" "),a("code",[s._v("chmod: Unable to change file mode on /etc/sudoers: Operation not permitted")]),s._v(" "),a("br"),s._v("\n这就尴尬了，改不回去。\n"),a("br"),s._v("\n最后通过疯狂的百度谷歌，找到了一些解决方法，但是有些方法说的太简单了，还是走了好多冤枉路，现总结如下：\n"),a("br"),s._v(" "),a("code",[s._v("1.")]),s._v(" 在Mac中启动root账户 "),a("a",{attrs:{href:"https://jingyan.baidu.com/article/49711c619e7620fa441b7ca8.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("启动root"),a("OutboundLink")],1),s._v(" "),a("br"),s._v(" "),a("code",[s._v("2.")]),s._v(" 切换到root用户，修改 /etc/sudoers的权限\n"),a("br")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 无法使用chmod修改权限")]),s._v("\nls "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("la "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sudoers\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rwxrwxrwx  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v("  wheel  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1371")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sudoers\nchmod "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("440")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sudoers\nchmod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Unable to change file mode on "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sudoers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Operation not permitted\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到root用户")]),s._v("\n su\nPassword"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("你自己设置的密码\nsh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.2")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls -l /etc/sudoers")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rwxrwxrwx  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v("  wheel  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1371")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sudoers\nsh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.2")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod 0440 /etc/sudoers")]),s._v("\nsh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.2")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls -l /etc/sudoers")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v("  wheel  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1371")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sudoers\nsh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.2")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# exit")]),s._v("\n\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h3",{attrs:{id:"mac下安装homebrew"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac下安装homebrew"}},[s._v("#")]),s._v(" mac下安装Homebrew")]),s._v(" "),a("p",[s._v("安装 "),a("a",{attrs:{href:"https://brew.sh/index_zh-cn",target:"_blank",rel:"noopener noreferrer"}},[s._v("Homebrew"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用方式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 wget  ")]),s._v("\nbrew install wget\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 yum   ")]),s._v("\nbrew install yum\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"mac安装autojump"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac安装autojump"}},[s._v("#")]),s._v(" mac安装autojump")]),s._v(" "),a("p",[s._v("要知道autojump是什么，我们得先来了解一下shell，bash和zsh。\n"),a("br")]),s._v(" "),a("p",[a("strong",[s._v("shell")]),s._v("就是我们经常说的shell命令，其实就是一个c语言编写的程序，用户在命令行键入命令，经过shell解释后传送给操作系统（内核）执行。")]),s._v(" "),a("p",[a("strong",[s._v("1. bash")])]),s._v(" "),a("p",[s._v("bash (Bourne-Again Shell) 是大多数Linux系统以及Mac OS X默认的shell，换句话说，bash是shell的实例。")]),s._v(" "),a("p",[a("strong",[s._v("2. zsh")])]),s._v(" "),a("p",[s._v("虽然Linux和Mac OS X默认使用的几乎都是bash，但真正强大的shell其实是深藏不露的zsh，俗称终极shell。它兼容了bash，还有各种强大的功能")]),s._v(" "),a("p",[a("strong",[s._v("autojump")])]),s._v(" "),a("p",[s._v("autojump是一个命令行工具，它可以使用快捷命令，直接跳转到配置好的目录，而不用管现在身在何处，依赖zsh。")]),s._v(" "),a("p",[a("code",[s._v("echo $SHELL")]),s._v("可以查看用的哪个shell（bash or zsh）")]),s._v(" "),a("p",[s._v("查看系统安装的所有shell有哪些 "),a("code",[s._v("cat /etc/shells")])]),s._v(" "),a("p",[s._v("将zsh设置成默认的shell："),a("code",[s._v("chsh -s /bin/zsh")]),s._v(" (重启shell)")]),s._v(" "),a("p",[s._v("安装autojump："),a("code",[s._v("brew install autojump")]),s._v("（确保有brew）")]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v("vim .zshrc")]),s._v("打开.zshrc（有些人会找不到.zshrc这个文件，其实安装了zsh才会有.zshrc ，在默认打开的终端目录下。可以打开终端并且ls -a查看）。")]),s._v(" "),a("p",[s._v("a. 找到 plugins=，在后面添加autojump："),a("code",[s._v("plugins=(git autojump)")])]),s._v(" "),a("p",[s._v("b. 新开一行，添加："),a("code",[s._v("[[ -s $(brew --prefix)/etc/profile.d/autojump.sh ]] && . $(brew --prefix)/etc/profile.d/autojump.sh")])]),s._v(" "),a("p",[s._v("c. :wq保存退出，重启终端。")]),s._v(" "),a("h3",{attrs:{id:"mac-终端-oh-my-zsh-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac-终端-oh-my-zsh-配置"}},[s._v("#")]),s._v(" Mac 终端 oh-my-zsh 配置")]),s._v(" "),a("p",[s._v("Mac 终端默认 shell 为 "),a("code",[s._v("bash")]),s._v("。")]),s._v(" "),a("p",[s._v("主要介绍使用 zsh 以及 oh-my-zsh 的配置。")]),s._v(" "),a("p",[a("strong",[s._v("使用 zsh")])]),s._v(" "),a("p",[s._v("查看当前使用的 shell")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[s._v("echo "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SHELL")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /bin/bash")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("使用 brew 更新 zsh")])]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[s._v("brew install zsh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("切换为 zsh")])]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[s._v("chsh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("zsh "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启shell")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("重启终端即可使用 "),a("code",[s._v("zsh")])]),s._v(" "),a("p",[a("strong",[s._v("1.安装")])]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[s._v("sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("2.主题")])]),s._v(" "),a("p",[a("code",[s._v("vim ~/.zshrc")])]),s._v(" "),a("p",[s._v("配置项 "),a("code",[s._v("ZSH_THEME")]),s._v(" 即为 oh-my-zsh 的主题配置，oh-my-zsh 的 GitHub Wiki 页面提供了 "),a("a",{attrs:{href:"https://github.com/robbyrussell/oh-my-zsh/wiki/themes",target:"_blank",rel:"noopener noreferrer"}},[s._v("主题列表"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("更新配置"),a("code",[s._v("source ~/.zshrc")])]),s._v(" "),a("p",[a("strong",[s._v("3.自动补全插件")])]),s._v(" "),a("p",[a("a",{attrs:{href:"http://mimosa-pudica.net/src/incr-0.2.zsh",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载 incr 自动补全插件"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("将插件放在 oh-my-zsh 自定义插件目录中 "),a("code",[s._v("~/.oh-my-zsh/custom/plugins")])]),s._v(" "),a("p",[s._v("在配置文件结束添加：")]),s._v(" "),a("p",[a("code",[s._v("source $ZSH/custom/plugins/incr/incr*.zsh")])]),s._v(" "),a("p",[s._v("更新配置"),a("code",[s._v("source ~/.zshrc")])]),s._v(" "),a("p",[a("strong",[s._v("4.自动提示功能插件")])]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[s._v("git clone git"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("zsh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("users"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("zsh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("autosuggestions "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ZSH_CUSTOM")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("zsh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("autosuggestions\nvi "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("zshrc  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[s._v("plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  git \n  zsh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("autosuggestions\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("更新配置"),a("code",[s._v("source ~/.zshrc")])]),s._v(" "),a("p",[a("strong",[s._v("5.安装zsh-syntax-highlighting语法高亮插件")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/zsh-users/zsh-syntax-highlighting",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[s._v("git clone "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("https")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("zsh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("users"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("zsh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("syntax"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("highlighting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("git \necho "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"source ${(q-)PWD}/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("ZDOTDIR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HOME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("zshrc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("更新配置"),a("code",[s._v("source ~/.zshrc")])]),s._v(" "),a("p",[a("strong",[s._v("在编辑器内配置")])]),s._v(" "),a("p",[s._v("在终端配置好后，打开编辑器发现仍是bash，")]),s._v(" "),a("p",[s._v("在您喜欢的编辑器中打开您的bashrc文件")]),s._v(" "),a("p",[a("code",[s._v("sudo vim ~/.bash_profile")])]),s._v(" "),a("p",[s._v("然后添加文件顶部添加")]),s._v(" "),a("p",[a("code",[s._v("exec zsh")])]),s._v(" "),a("p",[s._v("每次加载终端并运行zsh shell时，它都会执行命令。")]),s._v(" "),a("h3",{attrs:{id:"mac下sshpass-不能使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac下sshpass-不能使用"}},[s._v("#")]),s._v(" mac下sshpass 不能使用")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在官网下载源码包（最新的是1.06)")]),s._v("\nwget "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("https")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sourceforge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("net"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("projects"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sshpass"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("files"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sshpass"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.06")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sshpass"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.06")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gz"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("download\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压")]),s._v("\ntar xvzf sshpass"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.05")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gz\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("configure\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果此处失败安装 **xcode-select –install**")]),s._v("\nmake\nsudo make install\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"mac设置git的分支记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac设置git的分支记录"}},[s._v("#")]),s._v(" mac设置git的分支记录")]),s._v(" "),a("p",[a("code",[s._v("基于bash,zsh下不能使用")])]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.进入你的home目录")]),s._v("\ncd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.编辑.bash_profile")]),s._v("\nvi "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bash_profile\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3.将下面的代码加入到文件的最后处")]),s._v("\n\nfind_git_branch "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    local dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" head\n    until "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$dir"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ef "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" do\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("f "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$dir/.git/HEAD"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" then\n            head"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$dir/.git/HEAD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$head")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\\ refs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("heads"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" then\n                git_branch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" → ${head#*/*/}"')]),s._v("\n            elif "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$head")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" then\n                git_branch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" → (detached)"')]),s._v("\n            else\n                git_branch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" → (unknow)"')]),s._v("\n            fi\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n        fi\n        dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../$dir"')]),s._v("\n    done\n    git_branch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nPROMPT_COMMAND"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"find_git_branch; $PROMPT_COMMAND"')]),s._v("\nblack"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\[\\e[1;30m\\]'")]),s._v("\nred"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\[\\e[1;31m\\]'")]),s._v("\ngreen"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\[\\e[1;32m\\]'")]),s._v("\nyellow"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\[\\e[1;33m\\]'")]),s._v("\nblue"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\[\\e[1;34m\\]'")]),s._v("\nmagenta"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\[\\e[1;35m\\]'")]),s._v("\ncyan"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\[\\e[1;36m\\]'")]),s._v("\nwhite"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\[\\e[1;37m\\]'")]),s._v("\nnormal"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\[\\e[m\\]'")]),s._v("\n\nPS1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$white[$magenta\\u$white@$green\\h$white:$cyan\\w$yellow\\$git_branch$white]\\$ $normal"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4.保存退出")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5.执行加载命令")]),s._v("\nsource "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bash_profile\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 6.完成")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br")])]),a("h3",{attrs:{id:"允许安装未知来源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#允许安装未知来源"}},[s._v("#")]),s._v(" 允许安装未知来源")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[s._v("sudo spctl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("disable\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"微信助手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微信助手"}},[s._v("#")]),s._v(" 微信助手")]),s._v(" "),a("p",[s._v("跳转这个链接，有教程，"),a("a",{attrs:{href:"https://github.com/lmk123/oh-my-wechat#oh-my-wechat",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/lmk123/oh-my-wechat#oh-my-wechat"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"添加webstrom的主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加webstrom的主题"}},[s._v("#")]),s._v(" 添加WebStrom的主题")]),s._v(" "),a("p",[s._v("先到这里下载喜欢的主题"),a("a",{attrs:{href:"http://color-themes.com/?view=index",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://color-themes.com/?view=index"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("然后打开ws,左上角打开"),a("code",[s._v("File-> Import Settings->选择jar文件")])]),s._v(" "),a("h3",{attrs:{id:"vscode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vscode"}},[s._v("#")]),s._v(" VSCode")]),s._v(" "),a("p",[a("strong",[s._v("添加"),a("code",[s._v("code+文件")]),s._v("打开VSCode")])]),s._v(" "),a("p",[s._v("安装code：打开VSCode –> command+shift+p –> 输入shell command –> 点击提示Shell Command: Install ‘code’ command in PATH运行")])])}),[],!1,null,null,null);t.default=r.exports}}]);