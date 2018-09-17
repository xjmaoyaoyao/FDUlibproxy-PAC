function FindProxyForURL(url, host) {
//proxy="自己学校/机构的代理服务器和端口"
	proxy = "PROXY libproxy.fudan.edu.cn:8080"
//shExpMatch后面跟括号，表示这是一个函数，括号中的内容代表函数手术输入值。这个函数是用来计算url是否等于逗号右边所规定的那个东西，函数的输出值是布尔运算TRUE/FALSE。
	if (shExpMatch(url, "*.nature.com*")) {return proxy;}
	if (shExpMatch(url, "*.springer.com*")) {return proxy;}
	if (shExpMatch(url, "*.ovid.com*")) {return proxy;}
	if (shExpMatch(url, "*.jamanetwork.com*")) {return proxy;}
	if (shExpMatch(url, "*.jpain.org*")) {return proxy;}
	if (shExpMatch(url, "*.clinicalkey.com*")) {return proxy;}
	if (shExpMatch(url, "*.sciencedirect.com*")) {return proxy;}
	if (shExpMatch(url, "*.thelancet.com*")) {return proxy;}
	if (shExpMatch(url, "*.njem.org*")) {return proxy;}
	if (shExpMatch(url, "*.lww.com*")) {return proxy;}
	if (shExpMatch(url, "*.doi.org*")) {return proxy;}
	if (shExpMatch(url, "*.oxfordscholarship.com*")) {return proxy;}
	if (shExpMatch(url, "*.pqdt.calis.edu.cn*")) {return proxy;}
	if (shExpMatch(url, "*.proquest.com*")) {return proxy;}
	if (shExpMatch(url, "*isiknowledge.com*")) {return proxy;}
	if (shExpMatch(url, "*.wiley.com*")) {return proxy;}
	if (shExpMatch(url, "*.cambridge.org*")) {return proxy;}
	if (shExpMatch(url, "*.sciencemag.org*")) {return proxy;}
	if (shExpMatch(url, "*.cqvip.*")) {return proxy;}
	if (shExpMatch(url, "*.cnki.*")) {return proxy;}
	if (shExpMatch(url, "*.wanfangdata.com.cn*")) {return proxy;}
	if (shExpMatch(url, "*.pnas.org*")) {return proxy;}
//其他的就用shadowsocks系统代理。127.0.0.1代表本地，1080是设置过的代理端口。不知道什么是shadowsocks的朋友，没有翻墙需求的朋友，请把下面那句改成return "DIRECT"
    return "PROXY 127.0.0.1:1080"
}