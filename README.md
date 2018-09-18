# FDUlibproxy-PAC
整个PAC文件的作用就是给浏览器指个路，让它知道什么样的文件走什么样的代理
再也不用断网联网点来点去设服务器，此刻尽享丝滑

配合chrome插件Proxy SwitchyOmega，可以用来无缝下载全文文献（by我校代理服务器），以及配合ss魔法上网。这四舍五入一下简直相当于我会写JavaScript（又膨胀了
用其他浏览器的同学也能找到相应的代理配置页面，具体情况自己摸索，我不太熟


已经在使用shadowsocks翻墙上网的同学，请复制→https://raw.githubusercontent.com/xjmaoyaoyao/FDUlibproxy-PAC/master/FDUlibproxyPAC.pac
没在使用其他任何工具翻墙上网的同学，请复制noFANQIANG版PAC链接→https://raw.githubusercontent.com/xjmaoyaoyao/FDUlibproxy-PAC/master/FDUlibproxyPAC_noFANQIANG.pac
对于用其他方法翻墙的同学：sorry，不了解你们用的工具所以不可能写出适合你们的代码
		
打开SwitchyOmega选项，新建PAC profile ，在上面那个小框中粘贴你所复制的连接，点击Download Profile Now即可。
第一次使用时需要输入学号和密码。
从此获得丝滑文献体验。


也可以自己改代码啦：下载后缀名为pac的待修改文件，用文本编辑器or代码编辑器等软件打开，按照代码中的注释进行修改

非复旦的同学可以按照注释改成自己机构的代理服务器和端口
非医学类的专业自己按照格式添加数据库地址

改完后复制代码到SwitchyOmega的PAC profile界面，在下面那个大框中复制改好的代码，点左边apply changes即可。 

