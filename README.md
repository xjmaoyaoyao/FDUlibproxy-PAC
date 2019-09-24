# FDUlibproxy-PAC
整个PAC文件的作用就是给浏览器指个路，让它知道什么样的文件走什么样的代理

## 再也不用断网联网点来点去设服务器，此刻尽享丝滑，先做准备工作↓↓↓

配合chrome插件Proxy SwitchyOmega（https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif?utm_source=chrome-ntp-icon ），可以用来无缝下载全文文献（by我校代理服务器）

以及配合shadowsocks（https://github.com/shadowsocks/shadowsocks-windows ）翻墙上网

翻不了墙的同学请在https://github.com/FelisCatus/SwitchyOmega/releases/download/v2.5.20/SwitchyOmega_Chromium.crx 下载Proxy SwitchyOmega安装至Chrome浏览器。


## 希望同学们搞定了Chrome浏览器、Switchyproxy插件（、以及Shadowsocks翻墙）之后，可以开始以下的正式教程

已经在使用shadowsocks翻墙上网的同学，请直接复制连接→https://raw.githubusercontent.com/xjmaoyaoyao/FDUlibproxy-PAC/master/FDUlibproxyPAC.pac

没在使用任何工具翻墙上网的同学，请复制noFANQIANG版PAC链接→https://raw.githubusercontent.com/xjmaoyaoyao/FDUlibproxy-PAC/master/FDUlibproxyPAC_noFANQIANG.pac

2019.9.24更新了v2ray-socks5代理版本的：https://raw.githubusercontent.com/xjmaoyaoyao/FDUlibproxy-PAC/master/FDUlibproxyPAC_SOCKS5.pac
		
打开SwitchyOmega选项，新建PAC profile（情景模式） ，在上面那个小框中粘贴你所复制的连接，点击Download Profile Now即可。
第一次使用时需要输入学号和密码。
从此获得丝滑文献体验。


## 也可以自己改代码啦：

下载后缀名为pac的待修改文件，用文本编辑器or代码编辑器等软件打开，按照代码中的注释进行修改

非复旦的同学可以按照注释改成自己机构的代理服务器和端口；非医学类的专业自己按照格式添加数据库地址

改完后复制代码到SwitchyOmega的PAC profile界面，在下面那个大框中复制改好的代码，点左边apply changes即可。 

# GitHub是一个好网站！
