//整个PAC文件其实就是一段JavaScript代码
//里面只有一个函数定义：FindProxyForURL，括号内是函数的输入值：url和主机
//函数的输出是指定直接连接或代理服务器
//整个PAC文件的作用就是给浏览器指个路，让它知道什么样的文件走什么样的代理
//再也不用断网联网点来点去设服务器，此刻尽享丝滑
function FindProxyForURL(url, host) {
	//proxy="自己学校/机构的代理服务器和端口"，不是复旦的朋友可以改
	proxy = "PROXY libproxy.fudan.edu.cn:8080"
	//shExpMatch后面跟括号，表示这是一个函数，括号中的内容代表函数输入值。
	//这个函数是用来计算url是否等于逗号右边所规定的那个东西，函数的输出值是布尔运算TRUE/FALSE。
	//觉得不够可以自己再加，要么上GitHub的issue给我提意见，我及时改
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
	if (shExpMatch(url, "*.oup.com*")) {return proxy;}
	if (shExpMatch(url, "*.cshlp.org*")) {return proxy;}
	if (shExpMatch(url, "*.biomedcentral.com*")) {return proxy;}
	if (shExpMatch(url, "*.karger.com*")) {return proxy;}
	if (shExpMatch(url, "*.liebertpub.com*")) {return proxy;}
	if (shExpMatch(url, "*.tandfonline.com*")) {return proxy;}
	if (shExpMatch(url, "*.embopress.org*")) {return proxy;}
	if (shExpMatch(url, "*.jneurosci.org*")) {return proxy;}
	if (shExpMatch(url, "*.asahq.org*")) {return proxy;}	
	if (shExpMatch(url, "*.webofknowledge.com*")) {return proxy;}
	if (shExpMatch(url, "*.neurology.org*")) {return proxy;}
	if (shExpMatch(url, "*.europepmc.org*")) {return proxy;}
	if (shExpMatch(url, "*.plos.org*")) {return proxy;}
	if (shExpMatch(url, "*.hindawi.com*")) {return proxy;}
	if (shExpMatch(url, "*.karger.com*")) {return proxy;}
	//不翻墙的朋友，其他url走直连
	//为什么你会在这种信息时代不翻墙啦？！
    return "DIRECT"
}