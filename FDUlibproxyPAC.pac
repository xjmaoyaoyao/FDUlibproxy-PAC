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
	if (shExpMatch(url, "*.acm.org*")) {return "DIRECT";}
	if (shExpMatch(url, "*.aacrjournals.org*")) {return "DIRECT";}
	if (shExpMatch(url, "*.aip.org*")) {return "DIRECT";}
	if (shExpMatch(url, "*.agu.org*")) {return "DIRECT";}
	if (shExpMatch(url, "*.ams.org*")) {return "DIRECT";}
	if (shExpMatch(url, "*.jamanetwork.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.aps.org*")) {return "DIRECT";}
	if (shExpMatch(url, "*.physiology.org*")) {return "DIRECT";}
	if (shExpMatch(url, "*.asm.org*")) {return "DIRECT";}
	if (shExpMatch(url, "*.anatomy.tv*")) {return "DIRECT";}
	if (shExpMatch(url, "*.acs.org*")) {return "DIRECT";}
	if (shExpMatch(url, "*.annualreviews.org*")) {return "DIRECT";}
	if (shExpMatch(url, "*.arxiv.org*")) {return "DIRECT";}
	if (shExpMatch(url, "*.biomedcentral.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.bmj.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.calis.edu.cn*")) {return "DIRECT";}
	if (shExpMatch(url, "*.ambridge.org*")) {return "DIRECT";}
	if (shExpMatch(url, "*.chadwyck.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.ebscohost.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.emeraldinsight.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.eb.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.engineeringvillage.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.galegroup.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.heinonline.org*")) {return "DIRECT";}
	if (shExpMatch(url, "*.highwirepress.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.ieee.org*")) {return "DIRECT";}
	if (shExpMatch(url, "*.ingentaconnect.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.jove.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.intlpress.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.umich.edu*")) {return "DIRECT";}
	if (shExpMatch(url, "*.nstl.gov.cn*")) {return "DIRECT";}
	if (shExpMatch(url, "*.imf.org*")) {return "DIRECT";}
	if (shExpMatch(url, "*.tandfonline.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.jstor.org*")) {return "DIRECT";}
	if (shExpMatch(url, "*.calis.edu.cn*")) {return "DIRECT";}
	if (shExpMatch(url, "*.ams.org*")) {return "DIRECT";}
	if (shExpMatch(url, "*.oclc.org*")) {return "DIRECT";}
	if (shExpMatch(url, "*.osapublishing.org*")) {return "DIRECT";}
	if (shExpMatch(url, "*.degruyter.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.heinonline.org*")) {return "DIRECT";}
	if (shExpMatch(url, "*.oxfordscholarship.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.projecteuclid.org*")) {return "DIRECT";}
	if (shExpMatch(url, "*.jhu.edu*")) {return "DIRECT";}
	if (shExpMatch(url, "*.proquest.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.sagepub.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.scopus.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.siam.org 
	if (shExpMatch(url, "*.sslibrary.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.calis.edu.cn*")) {return "DIRECT";}
	
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
	if (shExpMatch(url, "*.dxj.com*")) {return "DIRECT";}
	if (shExpMatch(url, "*.jjwxc.net*")) {return "DIRECT";}
	if (shExpMatch(url, "*.bilibili.com*")) {return "DIRECT";}
	//其他的就用shadowsocks系统代理。127.0.0.1代表本地，1080是设置过的代理端口。
	//不知道什么是shadowsocks的朋友，没有翻墙需求的朋友，请把下面那句改成return "DIRECT"
	return "PROXY 127.0.0.1:1080"
}