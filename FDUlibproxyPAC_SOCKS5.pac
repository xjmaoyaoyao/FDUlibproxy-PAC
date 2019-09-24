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
	if (shExpMatch(url, "*.biomedcentral.com*")) {return proxy;}
	if (shExpMatch(url, "*.wolterskluwer.com*")) {return proxy;}
	if (shExpMatch(url, "*.itextbook.cn*")) {return proxy;}
	if (shExpMatch(url, "*.acm.org*")) {return proxy;}
	if (shExpMatch(url, "*.aacrjournals.org*")) {return proxy;}
	if (shExpMatch(url, "*.aip.org*")) {return proxy;}
	if (shExpMatch(url, "*.agu.org*")) {return proxy;}
	if (shExpMatch(url, "*.ams.org*")) {return proxy;}
	if (shExpMatch(url, "*.jamanetwork.com*")) {return proxy;}
	if (shExpMatch(url, "*.aps.org*")) {return proxy;}
	if (shExpMatch(url, "*.physiology.org*")) {return proxy;}
	if (shExpMatch(url, "*.asm.org*")) {return proxy;}
	if (shExpMatch(url, "*.anatomy.tv*")) {return proxy;}
	if (shExpMatch(url, "*.acs.org*")) {return proxy;}
	if (shExpMatch(url, "*.annualreviews.org*")) {return proxy;}
	if (shExpMatch(url, "*.arxiv.org*")) {return proxy;}
	if (shExpMatch(url, "*.biomedcentral.com*")) {return proxy;}
	if (shExpMatch(url, "*.bmj.com*")) {return proxy;}
	if (shExpMatch(url, "*.calis.edu.cn*")) {return proxy;}
	if (shExpMatch(url, "*.ambridge.org*")) {return proxy;}
	if (shExpMatch(url, "*.chadwyck.com*")) {return proxy;}
	if (shExpMatch(url, "*.ebscohost.com*")) {return proxy;}
	if (shExpMatch(url, "*.emeraldinsight.com*")) {return proxy;}
	if (shExpMatch(url, "*.eb.com*")) {return proxy;}
	if (shExpMatch(url, "*.engineeringvillage.com*")) {return proxy;}
	if (shExpMatch(url, "*.galegroup.com*")) {return proxy;}
	if (shExpMatch(url, "*.heinonline.org*")) {return proxy;}
	if (shExpMatch(url, "*.highwirepress.com*")) {return proxy;}
	if (shExpMatch(url, "*.ieee.org*")) {return proxy;}
	if (shExpMatch(url, "*.ingentaconnect.com*")) {return proxy;}
	if (shExpMatch(url, "*.jove.com*")) {return proxy;}
	if (shExpMatch(url, "*.intlpress.com*")) {return proxy;}
	if (shExpMatch(url, "*.umich.edu*")) {return proxy;}
	if (shExpMatch(url, "*.nstl.gov.cn*")) {return proxy;}
	if (shExpMatch(url, "*.imf.org*")) {return proxy;}
	if (shExpMatch(url, "*.tandfonline.com*")) {return proxy;}
	if (shExpMatch(url, "*.jstor.org*")) {return proxy;}
	if (shExpMatch(url, "*.calis.edu.cn*")) {return proxy;}
	if (shExpMatch(url, "*.ams.org*")) {return proxy;}
	if (shExpMatch(url, "*.oclc.org*")) {return proxy;}
	if (shExpMatch(url, "*.osapublishing.org*")) {return proxy;}
	if (shExpMatch(url, "*.degruyter.com*")) {return proxy;}
	if (shExpMatch(url, "*.heinonline.org*")) {return proxy;}
	if (shExpMatch(url, "*.oxfordscholarship.com*")) {return proxy;}
	if (shExpMatch(url, "*.projecteuclid.org*")) {return proxy;}
	if (shExpMatch(url, "*.jhu.edu*")) {return proxy;}
	if (shExpMatch(url, "*.proquest.com*")) {return proxy;}
	if (shExpMatch(url, "*.sagepub.com*")) {return proxy;}
	if (shExpMatch(url, "*.scopus.com*")) {return proxy;}
	if (shExpMatch(url, "*.siam.org*")) {return proxy;} 
	if (shExpMatch(url, "*.sslibrary.com*")) {return proxy;}
	if (shExpMatch(url, "*.calis.edu.cn*")) {return proxy;}

	if (shExpMatch(url, "*.elsevier.com*")) {return proxy;}

	//接下来是常用的国内网站（并不常用），走直接连接
	if (shExpMatch(url, "*.baidu.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.sina.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.163.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.taobao.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.tmall.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.jd.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.weibo.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.qq.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.fudan.edu.cn*")) {return "DIRECT";}
	if (shExpMatch(url, "*.zhihu.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.jianshu.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.dxy.cn*")) {return "DIRECT";}
	if (shExpMatch(url, "*.jjwxc.net*")) {return "DIRECT";}
	if (shExpMatch(url, "*.bilibili.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*researchgate.net*")) {return "DIRECT";}

	if (shExpMatch(url, "*.youku.com*")) {return "DIRECT";}

	//v2ray翻墙，本地默认是socks5代理，端口1080
	return "SOCKS5 127.0.0.1:1080"
}
