 if(jg_aj.sj.loading)   jg_aj.tianji = jg_aj.sj.loading;


if (lurl.indexOf('https:') == 0) {
    htps = "https";
}
if (lurl.indexOf('http') == 0) {
    if (imgp == 'css/') imgp = '/css/';
}
if (window.js) windowjs = 1;
jg_aj.topproj= jg_aj.sj.idc.split('_')[0]; 
window.brows = navigator.userAgent.toLowerCase();
window.navig_pre = 'webkit';
window.navig = {
    version: (brows.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, '0'])[1],
    opera: (/opera/i.test(brows) ? (navig_pre = 'o') : false),
    firefox: (/firefox/i.test(brows) ? (navig_pre = 'moz') : false),
    ie: ((/msie/i.test(brows) && !/opera/.test(brows)) ? (navig_pre = 'ms') : false),
    chrome: /chrome/i.test(brows) && /webkit/i.test(brows) && /mozilla/i.test(brows),
    mozilla: ((/mozilla/i.test(brows) && !/(compatible|webkit)/.test(brows) && !this.chrome) ? (navig_pre = 'moz') : false),
    safari: ((/webkit/i.test(brows) && !(/chrome/i.test(brows)) && !(/android/i.test(brows))) ? (navig_pre = 'webkit') : false),
    weixin: (brows.match(/MicroMessenger/i) == "micromessenger" ? true : false)
};
try {
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
        WeixinJSBridge.call('hideToolbar');
    });
} catch (e) { };
if (lurl.indexOf('usfrom=ios') > -1 || navig.safari) {
    if (document.getElementById("jgviewport")) {
        window.iscale = ",initial-scale=0.66";
        if (window.screen.height == 667) iscale = 0.778; //i6
        if (window.screen.height == 736) iscale = 0.778; //i6p 
        //在iphone和ipad上，无论你给viewport设的宽的是多少，如果没有指定默认的缩放值，则iphone和ipad会自动计算这个缩放值，以达到当前页面不会出现横向滚动条(或者说viewport的宽度就是屏幕的宽度)的目的。
        document.getElementById("jgviewport").content = "width=540, user-scalable=0"; 
    }
}

window.jg_main=function() {
	try {
		if (jex().getv('sp', 0) == 1) {
			var box6 = document.getElementById("tji-m-box6")
			box6.setAttribute('data-orientation', 'portrait')
		}
	} catch (e) { };
	window['sok'] = 1;
	if(jg_aj.sj.eg==1){
		jex('#tji-m-box6').show();
	}else{
		jex('#tji-m-box2,#tji-m-box3').show();
	}
    jg_aj.editm = jex().getv('editm', 0);
    jex('html,body').css('min-height',jex().getch()+'px');
    if(!jex().isMobile() && jg_aj.sj.sp>0){ jex('body').css({'width':'640px','margin':'0 auto'}); }
    if( jex().getv('yxidc','-1') != '-1' ){ 
        jex('#tji-m-box2').css({'width':'100%','height':'100vh','z-index':'-2','border-radius':'0','top':'0','left':'0'});
        jex('#tji-m-box1,#tji-m-box4,#tji-m-box5').hide();
    }
    if( jex().getv('ref', '-1') !='-1' && jex("#ref_box").length==0){
        jex("body").append('<a id="ref_box" target="_self" href="'+decodeURIComponent(jex().getv('ref', '-1'))+'" style="position: absolute;left: 2%;top: 1%;width: 9%;height: 0;padding-bottom: 9%;z-index:999999;background:url(/css/backoringe.png) 50% 50%/100% no-repeat;"></a>');
    }
    if( jg_aj.sj && jg_aj.sj.close && jex().getv('role', '-1') =='-1'){
        //项目关闭
        jex('body').css('background','none').html('<div style="text-align:center;">' + jg_aj.sj.close + '</div>');
        return;
    }
    jg_msco2()
}
window.jg_msco2=function() {
	try {
                                
		if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
		   //判断是ios用户的时候执行某种操作
		   window.webkit&&window.webkit.messageHandlers.onPKLoading.postMessage('{}');
		} else if (/(Android)/i.test(navigator.userAgent)) {
		   //判断是安卓用户的时候执行某种操作
		   window.nativeApp&&window.nativeApp.onPKLoading('{}');
		} else {
			//其他类型的时候执行某种操作
		}
	 
	} catch (e) { 
		console.log(e);
		 
	}
    // window.nativeApp && window.nativeApp.onPKLoading && window.nativeApp.onPKLoading('{}');
    jaimain();
    if (jg_aj.sj.eg == 1) {
        egret.runEgret({ renderMode: "canvas", audioType: 0 });
        if(jex().getv("sp", 0) == 0)rewh();
    } else {
        if (jg_aj.sj.idc=='jai_body'){
            egret.runEgret({ renderMode: "canvas", audioType: 0 , calculateCanvasScaleFactor:function(context) {
                var backingStore = context.backingStorePixelRatio ||
                    context.webkitBackingStorePixelRatio ||
                    context.mozBackingStorePixelRatio ||
                    context.msBackingStorePixelRatio ||
                    context.oBackingStorePixelRatio ||
                    context.backingStorePixelRatio || 1;
                return (window.devicePixelRatio || 1) / backingStore;
            }}); 
            jex('#body_body').css('background','url('+jg_aj.sj.bgimg+')');
            //绑定点击事件
            jex('.tji-m-box4').on('click',function(){
                openDataBox(4);
            });
            try {
                if(buildapp){
                    app = new buildapp(editor, formatter);
                    app.load();
                    app.resize();
                }
            } catch (e) {}
        }
        //
        //如果是h5延迟15秒后显示报错按钮
        _setTimeout(function(){
            jex('#fiBtnBox').show();
        }, 15000);
    }
    voiceplay();
}
window.voiceplay=function() {
    if(jg_aj.sj.bgm != "") {
        var bgmFloat = jg_aj.sj.bgmFloat || 'left';
        var bgmPos = (bgmFloat == 'left' || bgmFloat == 'right')?("top:10px;" + bgmFloat + ":10px"):("left:"+bgmFloat.split(',')[0]+";top:" + bgmFloat.split(',')[1]);
        if(jex("#imgMopen").length==0){ 
            jex("body").append("<div style='position:absolute;" + bgmPos + ";z-index:9999999'><img id='imgMopen' src='http://image.kxtui.com/pg/fi/15128/1512818894921.png'/><img id='imgMclose' src='http://image.kxtui.com/pg/fi/15128/1512818894370.png' style='display:none'/></div>");
            document.getElementById("imgMopen").addEventListener("click", function(){
                bgmEle.pause();
                jex("#imgMopen").hide();
                jex("#imgMclose").show();
            });
            document.getElementById("imgMclose").addEventListener("click", function(){
                bgmEle.play();
                jex("#imgMopen").show();
                jex("#imgMclose").hide();
            });
        }
        var bgmEle = document.getElementById("media");
        bgmEle.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            bgmEle.play();
        }, false);
    }
}
window.rewh=function(){
    var whqu = window.innerHeight - window.innerWidth;
    if(window.innerWidth < window.innerHeight){
        jex("#bodybg").css({'width':window.innerHeight+'px','height':window.innerWidth+'px','transform':'rotate(90deg)','top':whqu*.5+'px','left':-whqu*.5+'px'});
    }
}
/**
*
*/
window.box7Play=function(){
    var blurl = jex().getUrl('tidus', db.idus, lurl);
    blurl = jex().getUrl('roomid', db.gett(), blurl);
    blurl = blurl.replace("code="+jex().getv('code',"-1"),"");
    blurl = blurl.replace("state="+jex().getv('state',"-1"),"");
    window.location.href = blurl;
}
//window.document=window.document||{};
if (!window.jex().isMobile()) {
    window.document.onkeydown = function (e) {
        if (jex().mye(e).ctrlKey == true && jex().mye(e).keyCode == 81) {//(parseInt(jg_aj.port)+1000)
            window.open(htps + '://' + jg_aj.wsip + ':8080/' + jg_aj.idus.replace(/α/, '-').replace(/β/, '_') + jex().getdatetime().substring(0, 15).replace(" ", "").replace(":", "") + ".html")
        }
        if (jex().mye(e).ctrlKey == true && jex().mye(e).keyCode == 73) {
            // var url = jex().getUrl('idc', sj.jui[T.findid(jg_aj.curproj + '_场景a')].pid);
            // url = jex().getUrl('eg', sj.clas[T.findid(jg_aj.curproj + '_场景a')].pid == 'tji-m-box6' ? 1 : '', url);
            // window.open(url)
        }
        if (jex().mye(e).ctrlKey == true && jex().mye(e).keyCode == 49) {        //Ctrl + 1
            e.preventDefault();
            if (crid && ceditv) {
                jex().jalert("<br><textarea id='ceditv' rows=8 cols=60 style='width:80%;'>" + ceditv + "</textarea><br><br>" + jex().ui({ w: 70, h: 30, z: 0, s: 0, ca: "完成|setEnValue()", class0: "x_b_f88712_f88712_fff_bd6000_bd6000_fff cent _f_14_b_200 _r_4" }), null, {}, null, 100);
            }
        }
    }
    window.setEnValue = function () {
        if (jex("[rid='" + crid + "'][en='" + cren + "']")[0].tagName == 'DIV' || jex("[rid='" + crid + "'][en='" + cren + "']")[0].tagName == 'div') {
            jex("[rid='" + crid + "'][en='" + cren + "']").html(jex('#ceditv').vale());
        } else {
            jex("[rid='" + crid + "'][en='" + cren + "']").val(jex('#ceditv').vale());
        }
        jex("[rid='" + crid + "'][en='" + cren + "']").attr('begineditf', 1).css("background", "#FFFF7E");
        jex().cls('ggk');
    }
}
window.onerror = function (errorInfo, fileName, rowNum, columnNum, typeError) {
	var errorTip = {
		"error": errorInfo,
		"source": fileName,
		"row": rowNum,
		"column": columnNum
	};
	var errorStack = "";
	if (arguments.length == 5) {
		errorStack = typeError.stack;
	}
	if (jg_aj.uibuild != 3) {
		console.log('当jg_aj.uibuild不为3时出错，认为是load失败');
		try {
			if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
			   //判断是ios用户的时候执行某种操作
			   window.webkit&&window.webkit.messageHandlers.onPKLoadFail.postMessage('{}');
			} else if (/(Android)/i.test(navigator.userAgent)) {
			   //判断是安卓用户的时候执行某种操作
			   window.nativeApp&&window.nativeApp.onPKLoadFail('{}');
			} else {
				//其他类型的时候执行某种操作
			}
		 
		} catch (e) {
			 
				 console.log(e);
		 
		}
		 
	}
	 
	console.log(JSON.stringify(errorTip));
 
};
console.log('navigator.userAgent: ' + navigator.userAgent);
 
 
function getTransformStyle(dom) {
	return `rotate(${dom._rotate || 0}deg) scaleX(${dom._scaleX == undefined ? 1 : dom._scaleX}) scaleY(${dom._scaleY == undefined ? 1 : dom._scaleY})`;
}
function getTransformOriginStyle(dom) {
	return `${(dom._anchorX == undefined ? 0.5 : dom._anchorX) * 100}% ${(dom._anchorY == undefined ? 0.5 : dom._anchorY) * 100}%`;
}
function getTransformTranslate(dom) {
	let transform = dom.style.transform, ret = { x: 0, y: 0 };
	let formatArray = [
		{ sign: 'translate(', si: 0 },
		{ sign: 'translate3d(', si: 0 },
		{ sign: 'matrix(', si: 4 },
		{ sign: 'matrix3d(', si: 12 }
	];
	for (let i = 0, len = formatArray.length; i < len; i++) {
		let f = formatArray[i], signi = transform.indexOf(f.sign);
		if (signi != -1) {
			let si = signi + f.sign.length,
				str = transform.substring(si, transform.indexOf(')', si)),
				stra = str.split(',');
			ret.x = parseFloat(stra[f.si].replace('px', '')) || 0;
			ret.y = parseFloat(stra[f.si + 1].replace('px', '')) || 0;
			break;
		}
	}
	return ret;
}

/**
 * TJH5是天姬H5端jui的前端对象，通过getter、setter实现白鹭对象已有的一些接口
 */
var TJH5 = window.TJH5 = (function () {
	'use strict';
	let _ctor = function (dom) {
		if (!dom) {
			console.log(`不存在dom:${dom} in TJH5`);
		}
		this.dom = dom;
		// 获取_rotate, _anchorX, _anchorY, _scaleX, _scaleY
		let transform = dom.style.transform, _rotate = transform.match(/rotate\(.*?deg\)/);
		this._rotate = _rotate ? parseFloat(_rotate[0].split('deg')[0].split('(')[1]) : 0;
		['scaleX', 'scaleY'].forEach(function (p) {
			let v = transform.match(new RegExp(p + '\\(.*\\)'));
			this['_' + p] = v ? parseFloat(v[0].split(')')[0].split('(')[1]) : 1;
		}.bind(this));
		let origin = dom.style.transformOrigin.split(' ');
		['_anchorX', '_anchorY'].forEach(function (p, i) {
			this[p] = origin[i] == undefined ? 0.5 : parseFloat(origin[p]);
			isNaN(this[p]) && (this[p] = 0.5);
		}.bind(this));
	};

	let p = _ctor.prototype;
	/* svg */
	p.__defineGetter__('svg', function () { return document.getElementById(`${this.id}zisvg`); });
	/* bgsvg */
	p.__defineGetter__('bgsvg', function () { return document.getElementById(`${this.id}zibgsvg`); });
	/* tag */
	p.__defineGetter__('tag', function () { return this.dom.tagName; });
	/* text */
	p.__defineSetter__('text', function (v) {
		let c = jex(this.dom).children(`#${this.name}zitext_0`);
		let clas = sj.clas[this.id]||{}, typ = clas.typ, ispassword = (clas.style||{}).input && this.name.includes('密码');
		if (typ==12) {
			this.editor.setValue(v)
		} else if (ispassword) {
			c.val(v);
		} else if (c.length > 0) {
			c.text(v);
		} else {
			this.dom.innerText = v;
		}
	});
	p.__defineGetter__('text', function () {
		let c = jex(this.dom).children(`#${this.name}zitext_0`);
		let clas = sj.clas[this.id]||{},
			typ = clas.typ,
			ispassword = (clas.style||{}).input && this.name.includes('密码'),
			ismutiline = clas.style.mutiline;
		return typ==12 ? this.editor.getValue() : ispassword||ismutiline ? c.val() : c.text() || this.dom.innerText;
	});
	/* id */
	p.__defineGetter__('id', function () { return this.dom.id });
	/* name */
	p.__defineGetter__('name', function () { return this.dom.id });
	/* w */
	/* width */
	p.__defineGetter__('width', function () {
		let e = jex(`#${this.dom.id}`);
		return e == undefined ? 0 : e.width();
	});
	p.__defineSetter__('width', function (v) {
		let e = document.getElementById(this.dom.id); //jex(`#${this.dom.id}`).get(0);
		e.style.width = typeof (v) == 'string' && v[v.length - 1] == '%' ? v : parseFloat(v / jex(e.parentNode).width() * 100) + '%';
	});
	/* h */
	/* height */
	p.__defineGetter__('height', function () {
		let e = jex(`#${this.dom.id}`);
		return e == undefined ? 0 : e.height();
	});
	p.__defineSetter__('height', function (v) {
		let e = document.getElementById(this.dom.id); //jex(`#${this.dom.id}`).get(0);
		// 对于场景元件，用像素表示不用百分比，以解决输入时画面被挤压的问题
		 
		e.style.height = typeof (v) == 'string' && v[v.length - 1] == '%' ? v : parseFloat(v / jex(e.parentNode).height() * 100) + '%';
		 
	});
	/* x */
	p.__defineGetter__('x', function () { // 此处建立在每个H5元素必有style.left属性，且style.left必为'xx%'形式
		let parent = this.parent || { width: jex().getcw() };
		var xp = (parseFloat(this.dom.style.left) || 0);//drag后会是px
		if (this.dom.style.left.indexOf('%') > 0) {
			xp = (parseFloat(this.dom.style.left) || 0) * 0.01 * parent.width;
		}
		// let xp = (jex(this.dom).position()||{}).left || 0;
		return xp + getTransformTranslate(this.dom).x + this.width * this.anchorX; //  + getTransformTranslate(this.dom).x
	});
	p.__defineSetter__('x', function (v) {
		if (v == '{no}') return;
		let parent = this.parent || { width: jex().getcw() };
		this.dom.style.left = `${((v - getTransformTranslate(this.dom).x - this.width * this.anchorX) / parent.width * 100).toFixed(2)}%`;
		//(new TimelineLite).set(this.dom, {x: 0});
	});
	/* y */
	p.__defineGetter__('y', function () { // 此处建立在每个H5元素必有style.top属性，且style.top必为'xx%'形式
		let parent = this.parent || { height: jex().getch() };
		var yp = (parseFloat(this.dom.style.top) || 0);//drag后会是px
		if (this.dom.style.top.indexOf('%') > 0) {
			yp = (parseFloat(this.dom.style.top) || 0) * 0.01 * parent.height;
		}
		// let yp = (jex(this.dom).position()||{}).top || 0;
		return yp + getTransformTranslate(this.dom).y + this.height * this.anchorY; //  + getTransformTranslate(this.dom).y
	});
	p.__defineSetter__('y', function (v) {
		if (v == '{no}') return;
		let parent = this.parent || { height: jex().getch() };
		this.dom.style.top = `${((v - getTransformTranslate(this.dom).y - this.height * this.anchorY) / parent.height * 100).toFixed(2)}%`;
		//(new TimelineLite).set(this.dom, {y: 0});
	});
	/* $children */
	p.__defineGetter__('$children', function () {
		let ret = [], len = this.dom.children.length;
		for (let i = 0; i < len; i++) if (sj.obj[this.dom.children[i].id]) ret.push(sj.obj[this.dom.children[i].id]);
		return ret;
	});
	p.__defineGetter__('parent', function () {
		if (!this.dom.parentNode) {
			return null;
		}
		return sj.obj[this.dom.parentNode.id];
	});
	/* alpha */
	p.__defineSetter__('alpha', function (v) { this.dom.style.opacity = v; });
	p.__defineGetter__('alpha', function () { return parseFloat(this.dom.style.opacity) || 1; });
	/* rotation */
	p.__defineSetter__('rotation', function (v) { this._rotate != v && (this._rotate = v, this.dom.style.transform = getTransformStyle(this)); });
	p.__defineGetter__('rotation', function () { return this._rotate || 0; });
	/* anchorX */
	p.__defineSetter__('anchorX', function (v) { this._anchorX != v && (this._anchorX = v, this.dom.style.transformOrigin = getTransformOriginStyle(this)); });
	p.__defineGetter__('anchorX', function () { return this._anchorX == undefined ? 0.5 : this._anchorX; });
	/* anchorY */
	p.__defineSetter__('anchorY', function (v) { this._anchorY != v && (this._anchorY = v, this.dom.style.transformOrigin = getTransformOriginStyle(this)); });
	p.__defineGetter__('anchorY', function () { return this._anchorY == undefined ? 0.5 : this._anchorY; });
	/* anchorOffsetX */
	p.__defineSetter__('anchorOffsetX', function (v) { this.anchorX = v / this.width; });
	p.__defineGetter__('anchorOffsetX', function () { return (this._anchorX == undefined ? 0.5 : this._anchorX) * this.width; });
	/* anchorOffsetY */
	p.__defineSetter__('anchorOffsetY', function (v) { this.anchorY = v / this.height; });
	p.__defineGetter__('anchorOffsetY', function () { return (this._anchorY == undefined ? 0.5 : this._anchorY) * this.height; });
	/* scaleX */
	p.__defineSetter__('scaleX', function (v) { this._scaleX != v && (this._scaleX = v, this.dom.style.transform = getTransformStyle(this)); });
	p.__defineGetter__('scaleX', function () { return this._scaleX == undefined ? 1 : this._scaleX; });
	/* scaleY */
	p.__defineSetter__('scaleY', function (v) { this._scaleY != v && (this._scaleY = v, this.dom.style.transform = getTransformStyle(this)); });
	p.__defineGetter__('scaleY', function () { return this._scaleY == undefined ? 1 : this._scaleY; });
	/* visible */
	p.__defineSetter__('visible', function (v) { this.dom.style.display = (v ? (this._originDisplay || (sj.clas[this.name].style.input ? 'flex' : 'table')) : 'none'); });
	p.__defineGetter__('visible', function () { return this.dom.style.display != 'none'; });
	/* bgimg */
	p.__defineGetter__('bgimg', function () {
		let url = jex(this.dom).css('background').match(/url\(.*\)/);
		url = url ? url[0].replace(/url\("?'?/,'').replace(/"?'?\)/,'') : '';
		let style = sj.clas[this.dom.id].style;
		return url || (style ? style.bgimg || '' : '');
	});
	/* bgcolor */
	p.__defineSetter__('bgcolor', function (v) { jex(`#${this.id}zibgcolor`).attr('fill', T.color(v, '#{r}{g}{b}')); });
	p.__defineGetter__('bgcolor', function () { return jex(`#${this.id}zibgcolor`).attr('fill') || ''; });
	/* textcolor */
	p.__defineSetter__('textcolor', function (v) { jex(`#${this.id}zitext_0`).css('color', T.color(v, '#{r}{g}{b}')); });
	p.__defineGetter__('textcolor', function () { return jex(`#${this.id}zitext_0`).css('color') || ''; });
	/* clas */
	// p.__defineGetter__('clas', function() { return sj.clas[this.id]; });
	/* methods */
	p.$setVisible = p.setVisible = function (visible) { this.dom.style.display = (visible ? (this._originDisplay || (sj.clas[this.name].style.input ? 'flex' : 'table')) : 'none'); };
	p.setChildIndex = function (child, index) { child.dom.style['z-index'] = index; }
	// p.getChildByName = name => jex(`#${name}`).get(0);
	p.getChildByName = function (name) {
		return this.$children.find(c => c.name == name);
	};
	p.removeChild = function (obj) {
		obj.dom.innerHTML = '';
		this.dom.removeChild(obj.dom);
	};
	p.removeChildren = function () {
		this.dom.innerHTML = '';
	};

	return _ctor;
}());

jg_aj = jg_aj || window.jg_aj; // global
lurl = lurl || window.lurl; // global
jg_aj.version = '2017111803'; // 版本号，用于刷新缓存
jg_aj.respath = 'resource/'; // 资源文件路径
lurl.includes('www.kxtui') && (jg_aj.respath = '/g/tji/resource/');
jg_aj.csenda = [];
jg_aj.okCi = 1;
jg_aj.curbox = 'tji-m-box1';
var windowsaa = 0;

jg_aj.uibuild = jex().getv('eg', -1) == 1 ? 0 : 1;


var initws = window.initws = function (cb, aj) {
	// alert('准备initws')

	aj = aj || {};
	var wsurl=(lurl.indexOf('/n.') == -1 ? location.hostname : location.hostname.replace('n.','a.'))||"";
	if(wsurl.indexOf('tool.egret')>-1|| wsurl.indexOf('127.0.0.1')>-1)wsurl='n.gac.kim:8018';
	var wsLink = (htps=='http'&& windowjs==0 && window.ifeval!=0? 'ws' : 'wss') + '://' + (aj.wsip || jex().getv('wsip', wsurl));//windowjs==2说明是微信小游戏 必须是 wss   ((htps.indexOf('https') > -1||windowjs==2 || window.ifeval==0) ? 'wss' : 'ws')
	wsLink.includes('yystatic') && (wsLink = ((htps.indexOf('https') > -1) ? 'wss' : 'ws') + '://120.78.78.204');
	var mrport = '8018';
	var ttaid = (jg_aj.roomid + '1'); // (jex().cookie.get("aid") || "a1");

	if (jg_aj.sj.port) mrport = jg_aj.sj.port + 0; // 2018/03/06  去掉端口0-3分流 (parseInt(ttaid.charAt(ttaid.search(/\d/))) % 3);
	// if (jg_aj.sj.nport) mrport = jg_aj.sj.port + (parseInt(jex().cookie.get("aid").charAt(jex().cookie.get("aid").search(/\d/))) % jg_aj.sj.nport);
	// 2018/07/03  改写端口映射规则
	if (jg_aj.sj.nport) {
		var aid2n =(funaid().split('_@_')[0]).split('').reduce((pre,cur)=>pre+cur.charCodeAt(),0);
 		mrport = jg_aj.sj.port + (aid2n%jg_aj.sj.nport);
	}
	if (lurl.indexOf('\/tja\/') > -1) mrport = '8018';
	if(aj.fport) mrport = aj.fport;
	if(wsLink.split(':').length == 2) wsLink += ":" + (aj.port || mrport);
  
	window.label&&(window.label.text=wsLink);
	console.log("wsLink " + wsLink);
	var wsc = {};
	jg_aj.wsip = wsLink.split(':')[1].substring(2);
	jg_aj.port = parseInt(wsLink.split(':')[2]);
	if(!window.socket){
	WebSocketool.i();
	window.socket.addEvent(function (e) { // 收到数据
		 
		var rawStr = window.socket.socket.readUTF();
        var redata = rawStr.replace(/\},\{/g, '},\n{');
		if (rawStr.indexOf('"data"') == -1) redata = rawStr;
		console.log('收到:' + jex().getdatetime(0, 1) + redata); // !jex().isMobile() && 

		var stra = JSON.parse(rawStr);
		if (!(stra instanceof Array)) {//简化的消息格式，
			var curidc = T.findid(stra._id, { onlyid: 1 });
			//stra=["",[{_id:curidc.split('-')[1],data:[{_id:stra._id,style:{x:stra.s[0]+"%",y:stra.s[1]+"%",time:stra.s[2]}}]}],curidc,-2,-2];
			//直接在这里找到obj并修改x,y可以进一步加速
			//console.log( JSON.stringify(stra));
			let obj = T.findObj(curidc);
			if (obj && !obj.isMoving) {
				T.isEgret(obj) && egret.Tween.removeTweens(obj);
				window["位移"]({ obj, x: stra.s[0] + "%", y: stra.s[1] + "%", time:-1})//time: (stra.s[2] + '').split(".")[0] });
			}
			return;
		}

		var Si = parseInt(stra[3]);
		var gtCi = parseInt(stra[4]);
		if (gtCi > 0) jg_aj.okCi = gtCi;
		var rani = Math.random();
		if (rani < parseInt(jex().getv('duanxian', 0))) {
			console.log(rani + '模拟遗漏接收Si' + Si + 'Ci' + jg_aj.okCi);
			return;
		}
		if (Si > -1) {
			if (Si < jg_aj.Sneedi) {//
				jg_aj.Sneedi = Si + 1;//在保存_cod的时候，经常发生这种情况，所以增加这句
				console.warn('在保存_cod的时候，经常发生这种情况，所以增加这句');
				return;
			} else if (Si > jg_aj.Sneedi) {//大于我需要的，说明漏了
				csend(['resend', { idus: jg_aj.idus }, ''])
			} else {
				jg_aj.Sneedi = Si + 1;
			}
		}

		if (jg_aj.reconnect && jg_aj.okCi == 2) {
			jg_aj.reconnect = false;
			console.log('重连，本次jui数据抛弃');
			return;
		}

 
		// T.tzwz中需要用到，如果传回来只有一个c且里面只有一个d
		stra[1]=stra[1]||[];
		jg_aj.tzwzp1 = stra[1].length == 1 && stra[1][0].data && stra[1][0].data.length == 1;
		jg_aj.stra0 = stra[0] = [].concat(stra[0]);
 		jg_aj.stra1 = stra[1];
		if (jg_aj.idus == undefined && stra[0][2] && stra[0][2].includes('=')) {
			headev(stra[0][1] || ''); // 2018/07/06  改为即使错误也执行ev
			console.error('初始化idus前收到错误的信息，stra[0][2]:$1', stra[0][2]);
			return;
		}
		if(stra[0][1]){//2019.2.13提前执行的headev 提前到这里
			 if(typeof(stra[0][1])=='string'){
				 
				 if (stra[0][1].length == 13 && stra[0][1].substring(0, 1) == 1) {
					db.t = parseInt(stra[0][1]);
					db.t0 = new Date().getTime();
					 
				}else if(stra[0][1].includes(';;;')){
					headev(stra[0][1].split(';;;')[0]); 
					stra[0][1]=stra[0][1].split(';;;')[1]
				}
			}else{
				headev(stra[0][1],1)
			}
		}
		if (stra[0][2]) {
			console.warn(`改变jg_aj.idus，jg_aj.idus: ${jg_aj.idus}， stra[0][2]: ${stra[0][2]}`);
			jg_aj.idus = jg_aj.idus || stra[0][2];
		}
		//sj.jui = sj.jui || {};
		if (typeof stra[1] == 'object' && stra[0][1] !== 'T.duibi()') {
			
			// T.mergea(sj.jui, stra[1]);
			stra[1].forEach(function (_jui, i) {
 
                if ( _jui.typ ) { //  如果是完整的jui则，直接赋值引用，注意：data不会累积           //_jui["事件"] == undefined && && _jui._id != '应用市场_body'
					sj.jui[_jui._id] =  _jui;
				}else if(_jui._id.split('_')[1]!='无' && sj.jui[_jui._id]){
					//_jui._id.indexOf('_') == -1 && (_jui._id =  jg_aj.curproj+'_'+_jui._id );
					//sj.jui[_jui._id] = sj.jui[_jui._id] || {}; 			
					 T.merge(sj.jui[_jui._id], _jui); //这时候新旧data都在sj.jui。 
					 var juidata=sj.jui[_jui._id].data;
					 if(juidata && juidata.length> _jui.data.length)juidata=juidata.filter(d => _jui.data.some(dd => dd._id == d._id));//需要删除旧的多余的data。
					 stra[1][i] = T.dcopy(sj.jui[_jui._id],'data'); //2018-12-16，lwf 不能去掉T.dcopy  否则旧的data会被juidata覆盖而失去	
					 stra[1][i].data=juidata;			 
				}


			});
		}

		// stra[0].forEach(function(ev) {
		//  switch (ev) {
		switch (stra[0][0]) {
			case "n":
				break;
			case "t":
				db.ty = Math.floor((new Date().getTime() - jg_aj.csendtime) * 0.5);
				break;
			case "ss":

				break;
			
			case 'duibi':
				
				console.log('类似新增回调');
				if(window.crid)T.duibi(stra[1], 1);
				break;
			case 'dba':				
			
			case "s":
			case "ps":
			case 'p': // 找出第一条jui的父亲
				// alert('p')
				let juia = stra[1];
				if (juia.length > 0) {
					if (stra[0][0].indexOf('s') > -1) {
						if (stra[1][0].style && stra[1][0].style.noclas == 1 && stra[1][0].data && stra[1][0].data.length == 0) { //父元件如果是noclas，则传递 data：[]时候，孩子不需要解析
						} else {
							stra[1]=getclass(stra[1]);							 
						}
					}
					if (stra[0][0].indexOf('p') > -1) {
					 
						let pjui = sj.jui[stra[1][0].pid];
						if (pjui)
							stra[1].unshift(T.dcopy(pjui));
						else
							console.log(`在sj.jui中找不到${pjui}`);
					}
				}
			case '':
			case 'jui':
			case 'not': 
			default:
				if(stra[0][0].indexOf("s:")==0){
					 
					let sjui = null, sstra = stra[0][0].substring(2).split(',');
					for (let _sjui in sj.jui) {
						if (sstra.includes(sj.jui[_sjui]._id.split('_')[1])) {
							sjui = sj.jui[_sjui];
							break;
						}
					}
					if (sjui) stra[1].push(sjui);
				}
				 
				
					 
					setJui(stra);
					headev(stra[0][1]||'');
				 
				break;
		}
		// });
		if (stra[2] == '应用市场_body') {
			csend(["t", {}, "jai_天姬"]);
		} else if (stra[2] == 'jai_body') {
			csend(['', {}, jex().getv('yxidc', '应用市场_body')]);
		} else {
			csend();
		}
		if (jex('#jai_对话').html() == '对话') jex('#jai_对话').html('对话<div style="height:200px;overflow:auto;" id="jaimain"></div><input id="dhinp" type="text" onclick=jex().stoppp(); value="" style="position:absolute;left:0;bottom:0;width:480px" onkeypress="return onKeyPress(event)"><button type="button" onclick="word2word();jex().stoppp();" style="position:absolute;bottom:0;right:0">发送</button>');
    }, function (e) { // 打开链接
		ws = wsc = window.socket.socket;
		wsc.ifopen = 1;
		jg_aj.Sneedi = 1;
		jg_aj.Ci = 1;
		jg_aj.csenda = [];
		if (cb) cb();
    }, function (e) { // 关闭链接
        wsc.ifclose = 1;
		wsc.ifopen = 0;
		try {
		  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
			 //判断是ios用户的时候执行某种操作
			 window.webkit&&window.webkit.messageHandlers.onPKExceptionFinish.postMessage('{}');
		  } else if (/(Android)/i.test(navigator.userAgent)) {
			 //判断是安卓用户的时候执行某种操作
			 window.nativeApp&&window.nativeApp.onPKExceptionFinish('{}');
		  } else {
			  //其他类型的时候执行某种操作
		  }
		 
		} catch (e) {
                                                console.log(e);
			 
		}
		console.log("ws closed" + ws.ifclose);
		 
    }, function (e) { // 异常
        console.log('ws error:$1', e);
    });
		}
    window.socket.connect(wsLink);
	return wsc;
};

function getclass(json1,idclas){
	var sobj = [json1[0]];
	do {
		let pids = sobj.map(s => s._id);								 
		sobj = T.objFilter(sj.jui, u => u.typ<50 && pids.includes(u.pid));
		json1 = json1.concat(sobj); 
	} while(sobj.length>0)
	
	return json1
}
// 2018/07/06  将解析ev的部分独立为一个方法
function headev(ev,bf) {//有bf表示 参数中有bf相等才做，提前做
	

	if (jg_aj.uibuild == 3) {
		(ev + '').indexOf('{') == 0 && (ev = JSON.parse(ev))
		if (typeof ev == 'object') {
			let newev=ev;
			if(bf){
				newev={};
				for(let evi in ev){
					if(ev[evi].bf){
						newev[evi]=ev[evi];
						delete ev[evi];
					} 
				}
			}
			let id = jg_aj.curproj + '_用户';
			if (jg_aj.stra1.length > 0) id = jg_aj.stra1[0]._id;

			if ((T.isEgret() || jg_aj.curbox == 'tji-m-box6') && !(id.includes('jai_'))) {
				var obj = T.findObj(id);
				Jui.getSingle().actt.apply(Jui.getSingle(), [obj, null, newev, 0]);
			} else {
				parseActt(id, newev, 0)
			}


		} else {
			(window.ifeval ? eval(ev) : T.doeval(ev))
		}
	} else {
		// console.error("等白鹭，延后100");
		_setTimeout(function () { headev(ev,bf) }, 500);
	}
}
jg_aj.straa = jg_aj.straa || [];
window.setJui = function(stra) {
	// alert('setJui')
	let stra1 = stra[1], stra0 = stra[0], stra2 = stra[2];
	if(jg_aj.uibuild == 1||jg_aj.uibuild ==3){
		let data = stra1.find(i=>i._id.indexOf('_场景')>-1);
		if(data&&data.style&&data.style.load&&data.style.load!=1){
			data.style.load = 1;
			jg_aj.uibuild =2;
			Main.i.loading(data._id.split("场景")[1]);
		}else{
			jg_aj.uibuild =3;
		}
	}

	jg_aj.uibuild == 3 && console.time &&console.time('setJui');
	
	if (stra1[0] && stra1[0].typ > 50 && stra1[0].style.target == "tji-m-box6" && stra1[0].style.loading && jex().getv('eg', -1) != 1 && !loadingState && !stra1[0].loadingState) {
		loadingState = true;
		stra1[0].loadingState = true;
		Jui.getSingle().BuildUi(stra1[0], 1);
		jg_aj.uibuild = 0;
		Jui.getSingle().loading(stra1[0].style.loading["group"],function(){},stra1[0].style.loading["resJson"]||"resource/default_jai.res.json")
	}
	if (typeof stra1 != "object" || stra0.includes('T.duibi()')) return;
	if (jg_aj.ready != 1 && stra1.length > 0 && stra1[0].typ == undefined && jex().getv('res','')=='') {
		console.error('egret' + jg_aj.uibuild + '没准备好，或提前收到' + stra1.length);
		jg_aj.straa.push(stra);
		return;
	}
	if (jg_aj.uibuild == 3) { // 白鹭准备好时uibuild=1，第一段有typ的jui执行完ready=1
		//    console.error("白鹭ok");
		if (jg_aj.sj.share == 1) {			//非YY且有share字段
			_setTimeout(function () {
				if (T._ctrl('a')["状态"] == 0 || T._ctrl('a')["状态"] == undefined) { jex('#tji-m-box7').show(); }
				if (T._ctrl('a')["状态"] >= 9) { jex('.box7-arrow,.btn-invite').hide(); jex('#tji-m-box7,.btn-play,.tji-m-box7>p').show() };
			}, 2000);
		}
		if (stra1.length > 1 && stra1[0].typ > 50 && stra1[1].pid != stra1[0]._id) {
			// stra1.shift();
			if (stra0 instanceof Array) {
				stra0[1] == 'not' && (stra0[1] = '');
			} else {
				stra0 == 'not' && (stra0 = '');
			}
		}
		stra1.length == 2 && stra1[1].typ > 50 && stra1.splice(1, 1);
		if (stra2 && stra2.split('_')[0] != 'jai') {
			jg_aj.curproj = stra2.split('_')[0];		
				
			 
			console.log("jg_aj.curproj:"+jg_aj.curproj + "------------------")
			if (jg_aj.curproj.indexOf('-') > 0) jg_aj.curproj = jg_aj.curproj.split('-')[1];
		}
		if (stra1.some(i => i.style && i.style.target == 'tji-m-box6')) { // 只要传回来的jui数组中有target为tji-m-box6的，即认为是白鹭的项目
			jg_aj.curbox = 'tji-m-box6';
		}
		 
		sj.curclas = {};//本次clas集合
		if(stra1.length==0)return; 

		if ((T.isEgret() || jg_aj.curbox == 'tji-m-box6') && !(stra2 && stra2.includes('jai_'))) {// && !stra[0]._id.includes('jai_')
			parseJuia(stra0, stra1, {
				 
				buildUIHandler: Jui.getSingle().BuildUi.bind(Jui.getSingle()),
				actHandler: function (d) {
					var obj = sj.obj[d.id];					 
					Jui.getSingle().act.apply(Jui.getSingle(), [{ obj, actf: d.value, idx:d.idx }]);
				},
				acttHandler: function (d) {
					var obj = sj.obj[d.id], pobj = obj && obj.parent;
					 
					Jui.getSingle().actt.apply(Jui.getSingle(), [obj, pobj, d.jui.actt, d.idx]);
				},
				ChildIndexHandler: function (d) {
					try {
						sj.obj[d.id] && sj.obj[d.id].parent && sj.obj[d.id].parent.setChildIndex(sj.obj[d.id], parseInt(d.value)),sj.obj[d.id]['oldz']=d.value;
					} catch (error) {
						console.log("当前操作对象：" + JSON.stringify(d));
					}
				},
				 
				funaHandler: function (d) {
					let idx = d.idx;
					let obj = sj.obj[d.id];
					let funa = typeof (d.value) == 'object' ? d.value : { 'funa': d.value };
					for (let i in funa) (window.ifeval? eval(funa[i]): T.doeval(funa[i])) ;
				}
			});
		} else {

			//let parse = function () {
				parseJuia(stra0, stra1, {					 
					buildUIHandler: buildUI_h5,
					actHandler: d => parseAct(d.id, d.value,d.idx),
					acttHandler: d => parseActt(d.id, d.value,d.idx),
					ChildIndexHandler: d => { let obj = jex(`#${d.id}`).get(0); obj && (obj.style.zIndex = d.value) },
					funaHandler: function (d) {
						let obj = sj.obj[d.id];//jex(`#${d.id}`).get(0);
						if (obj == undefined) {
							console.log(`H5 funaHandler 内obj为undefined, id:${d.id}`);
							return;
						}
						let funa = typeof (d.value) == 'object' ? d.value : { 'funa': d.value };
						for (let i in funa) (window.ifeval? eval(funa[i]): T.doeval(funa[i]));
					} 
				});
				// H5端暂时直接把jai_body清掉
				let jaibody = document.getElementById('jai_body');
				// jaibody && jaibody.parentNode.removeChild(jaibody);
				jaibody && (jaibody.style.zIndex = -1);
				let yyscbody = document.getElementById('应用市场_body');
				yyscbody && (yyscbody.style.zIndex = 100);

 
		}

		if (jg_aj.ready != 1) {
			jg_aj.ready = 1;
			// console.error("补充执行 "+jg_aj.straa.length);
			jg_aj.straa.forEach(stra => setJui(stra));
			jg_aj.straa = [];
		}


	} else {
		// console.error("等白鹭，延后100");
		_setTimeout(function () { setJui(stra) }, 100);
	}
	jg_aj.uibuild == 3 && console.time &&console.timeEnd('setJui');
}

/**
 * load资源结束时请调用该方法
 */
var onFinishLoading = window.onFinishLoading = function() {
	console.log('加载资源完成 in onFinishLoading');
	try {

		  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
			 //判断是ios用户的时候执行某种操作 来汇
			window.webkit && window.webkit.messageHandlers.onPKFinishLoading.postMessage('{}');
		  } else if (/(Android)/i.test(navigator.userAgent)) {
			 //判断是安卓用户的时候执行某种操作
			 window.nativeApp&&window.nativeApp.onPKFinishLoading('{}');
		  } else {
			  //其他类型的时候执行某种操作
		  }
		 
	} catch (e) {
		 
			 console.log(e);
		 
	}
 
}

var funaid = window.funaid = function(aid){
	if(aid)jg_aj.idus="";//服务器指定新aid
	(jex().cookie.get('aid')||'').includes('%') && jex().cookie.set('aid', decodeURIComponent(jex().cookie.get('aid')||''));
	aid = aid|| jg_aj.sj.unionid|| jg_aj.sj.openid|| jex().cookie.get("aid") ||  T.aid();	  
 
	jex().cookie.set("aid", aid);
	
	jg_aj.aid = jex().getv('aid', aid); //url上指定的,是测试临时用的，不写入cookie
 	return jg_aj.aid ;
	
}
var fungetaid = window.fungetaid = function (aid,func){
	if(aid)jg_aj.idus="";//服务器指定新aid
	(jex().cookie.get('aid')||'').includes('%') && jex().cookie.set('aid', decodeURIComponent(jex().cookie.get('aid')||''));
	aid = aid||jg_aj.sj.unionid|| jg_aj.sj.openid|| jex().cookie.get("aid") ||  T.aid();	  
	// if(aid.indexOf('_@_')==-1){
 	// 	db.jp('https://g.gac.kim/getaid.jsp',function(i, json){
	// 		if(json.aid!='')aid=json.aid.split('|')[0]
	// 		jex().cookie.set("aid", aid);
	// 		jg_aj.aid = jex().getv('aid', aid); // 
	// 		if(func)func(jg_aj.aid )
	// 	},"","",false);
	// }else{
	
		jex().cookie.set("aid", aid);
		jg_aj.aid = jex().getv('aid', aid); //url上指定的,是测试临时用的，不写入cookie
		if(func)func(jg_aj.aid)
		return jg_aj.aid ;
	//}
	
}
var jaimain = window.jaimain = function(idc, aid, _aj) {
	var _caj = _aj || {};
	jex('#应用市场_body').length>0 && jex('#应用市场_body').css('height','100%');
	if (typeof (LOCAL_JUI) != 'undefined') return;
	if(window.ws && ws.connected && ws.ifopen==0){//关闭过程中，
		_setTimeout(function(){jaimain(idc, aid, _aj)},1000);
		return;
	}
	if (window.ws && ws.ifopen || !T.cd('jaimain',1000)) {
		console.error("已阻止jaimain执行，因为：服务端可能多次返回调用jaimain的请求，造成'您的帐号在其他设备登录'的错误。")
		return
	}
	
	var idclas = decodeURI(jex().getv('idc', idc || 'jai_body'));
	var mq = {}; var mq1 = {};
	if (typeof (jg_wx) != 'undefined' && db.sj.fl && db.sj.fl.all[jg_wx.idfl] && db.sj.fl.all[jg_wx.idfl].cwxn) {
		mq = { "昵称": db.sj.fl.all[jg_wx.idfl].cwxn, "头像": db.sj.fl.all[jg_wx.idfl].chedimg };
	}
	
	if (jex().getv("nick", '') != '') mq["昵称"] = jex().getv("nick", '');
	//if (jex().getv("roomid", '') != '')//去掉这个判断 女神挖矿的url加了roomid=sg3则存储在了用户，当去掉roomid时候，无法恢复到1000，因此在客户端默认将 房间:'1000'发回来
	 mq["房间"] = jex().getv("roomid", jex().getv("roomId", '1000')) + "";
	if (jex().getv("qu", '') != '') mq["区"] = parseInt(jex().getv("qu", 1000));
	if (jex().getv("from", '') != '') mq.from = jex().getv("from", '');				//2018.10.10增加from传参保存   -Tim
	if (jex().getv("code", '') != '') mq.code = jex().getv("code", '');				//2019.06.27增加code传参保存   -Fire	
	var uri=jex().getv("uri", '')||jex().getv("post_data", "");
	jg_aj.uri = "";
	if (uri != '') { // 用来传目标房间等更多其他参数
		//if(uri.indexOf('setsip')==0)uri='setsip:%27'+uri.split('setsip:')[1]+'%27';
		try { //  
		   if(uri.indexOf(':')>0&& uri.indexOf('{')!=0) uri='{'+uri+'}';
			jg_aj.uri = mq.uri = (window.ifeval? eval('('+uri+')'): JSON.parse(uri) ) ;
		} catch (err) {
			// 再decode一遍试试
			try {
				jg_aj.uri = mq.uri = (window.ifeval? eval('('+decodeURIComponent(uri)+')'): JSON.parse(decodeURIComponent(uri)) ) ;
			} catch (err) { // 出错就认为uri是一个字符串
				jg_aj.uri = mq.uri = uri;
			}
		}
	}
	if (jg_aj.sj.query && typeof jg_aj.sj.query =='object') {
      jg_aj.uri = mq.uri =  jg_aj.sj.query;
    }
 	
	fungetaid(aid,function(){			
			initws(function () {
				let sendobj = { aid: jg_aj.aid,'区':mq["区"], dba: ['用户', mq, '{idus:I}', { upsert: 1 }] }
				//if(jex().getv("logs", '')) sendobj.logs = jex().getv("logs", '');
				if(jg_aj.uri!="")sendobj.uri=jg_aj.uri;//将uri放入后端的 _I。弃用_my().uri
				jg_aj.roomid = mq["房间"] || '';
				if (jex().getv('usn', 0) != 0) {
					mq1 = { 'usn': jex().getv('usn', 0), 'ain': jex().getv('ain', 0) }
					sendobj.dba1 = ['控制容器a', mq1, '{_id:{$ne:null}}', { upsert: 1 }]
				}
		
			
				if (idc == 'login') {
					console.log('断线重连中！');
					//jex().jalert('断线重连中！');
					jg_aj.Sneedi = 1;
					jg_aj.Ci = 1;
					jg_aj.csenda = [];
		
				}
				csend(['', sendobj, idclas]);
		
				//if (jex().getv("cb", '') != '') _setTimeout(function () {let str=(decodeURI(jex().getv("cb", '')));(window.ifeval? eval(str): T.doeval(str)) }, 1000)
		
				if (jex().getv("eg", 0) == 0 && jex().getv("pic", 0) == 1) {
					//_setTimeout(function () { mapStorage(); }, 2000);
					jex("#file1").show();
				}
				if (jex().getv("eg", 0) == 0 && jex().getv("upload", 0) == 1) {
					//_setTimeout(function () { mapStorage(); }, 2000);
					jex("#resUpload").show();
				}
				// 根据idc帮box6赋个颜色
				let idc2bgcolor = {
					'熊猫爬树_图标': '#94cdff'
				};
				let _idc = decodeURI(jex().getv('idc', ''));
				if (idc2bgcolor[_idc]) {
					jex('#tji-m-box6').css('background', idc2bgcolor[_idc]);
				}
			}, _caj);
	})
}

var csend = window.csend = function (aj) {
	if (typeof (LOCAL_JUI) != 'undefined') { // 不需要与nodejs交互
		if (aj[1].id) {
			let ids = LOCAL_JUI.find(i => i._id == aj[1].id).ids;
			let arr = ids.map(i => LOCAL_JUI.find(k => k._id == i));
			setJui(['', arr, '']);
			console.log('已有本地jui，直接setJui:' + JSON.stringify(arr));
		}
		return;
	}
	if (aj) {
		var curidc=aj[2];
		var data=aj[1]||{};
		if(curidc.indexOf('-')>0&&sj.clas[curidc]&&sj.clas[curidc].ridclas){   //实际后端执行ridclas的代码     	 
            data.uri=data.uri||{};
			data.uri.cellpid= sj.clas[curidc].pid;
			if(T.cellid)data.uri.cellid=T.cellid.split('-')[0];
			if(sj.clas[curidc].idclas){ 
				data.uri.appname= sj.clas[curidc].idclas.split('_')[0];			
            	aj[2]=curidc.split('-')[0]+'-'+sj.clas[curidc].ridclas;
			}
			
        }
		
		if (jg_aj.logout == 1){window.actt(null,{"弹窗":{msg:'因为其他地方登录本账号，导致您已退出？确定重新登录吗？',btn:{'关闭':"刷新()",'确定':'1'}}}); return;}
		if (jg_aj.heart) {//心跳
			egret.clearTimeout(jg_aj.heart);
			jg_aj.heart = null;
		}
		if (jex().getv('heart', jg_aj.sj.heart||'') == 1) jg_aj.heart = _setTimeout(function () { csend(["t", {}, "jai_天姬"]); }, 15000);

		if (aj[0] == 'ds' || aj[0] == 'ss') {//非验证 快速通信
			var str = JSON.stringify(aj);
			console.log('csend(' + str + ')');
			if (ws.connected) {
				ws.writeUTF(str);
				ws.flush(str);
			} else {
				window.socket.close();
				jg_aj.reconnect = true;
				jaimain('login');

			}
			return;
		}
		if (jex().getv('res', '') != '') aj[1].res = jex().getv('res', '');
		var curtx = jex.trim(jex("input[t='editt'][en='tx']").val());
		if (curtx) aj[1].arg = curtx;
		if (aj[0] == 'resend') {//2018.5.22 发现重发机制未能实现
			//jg_aj.Ci = -Math.floor(Math.random(1000));
		} else {
			jg_aj.Ci++;
			aj[3] = jg_aj.Sneedi;//暂无作用
			aj[4] = jg_aj.Ci;
			if(aj[0] == 't' && jg_aj.csenda.length>0){
				//防止浏览器在后台的时候，时间变不正常，多个心跳不能加入缓存，
			}else{
				jg_aj.csenda.push(aj);//全部放入缓存
			}

		}
	}
	if (jg_aj.csenda.length > 0 && ((jg_aj.okCi + 1) >= jg_aj.csenda[0][4] || (new Date().getTime() - jg_aj.csendtime) >= 2000)) {//发送
		aj = jg_aj.csenda.splice(0, 1)[0];
		if (jex().getv("logs", '') != '') aj[1].logs = jex().getv("logs", ''); // || (egret && egret.Capabilities.runtimeType!="web")
		var str = JSON.stringify(aj);
		console.log('〓〓〓'+ jex().getdatetime(0, 1)+' csend(' + str + ')'); //!jex().isMobile() && 
		if (str.indexOf('["",{},') == 0) str = "[" + str.substring(7);
		//if(aj[0]=='t')jg_aj.csendtime=new Date().getTime();
		jg_aj.csendtime = new Date().getTime();

		try {
			if (!ws || ws.connected) {
				//ws.send(str);
				waitForConnection(function () { // 预防上一次消息正在发送的问题，详见：http://blog.csdn.net/u014520745/article/details/52912958
					ws.writeUTF(str);
					ws.flush(str);
				}, 500);
			} else {
				window.socket.close();
				jg_aj.reconnect = true;
				jaimain('login');

			}
		} catch (e) {
			window.socket.close();
			jg_aj.reconnect = true;
			jaimain('login');
		}

	} else {
		// alert('因为在等"' + (jg_aj.Ci) + '"返回，所以只是csenda.push(' + JSON.stringify(aj) + ')')
		if (aj) console.log('csend '+JSON.stringify(aj)+' 因为在等Ci="' + (jg_aj.Ci) + '" 所以只是csenda.push ')
	}
}

function waitForConnection(callback, interval) {
	// if (ws.readyState === 1) { // 白鹭里没这个东西
	if (true) {
		callback();
	} else {
		// optional: implement backoff for interval here  
		_setTimeout(function () {
			waitForConnection(callback, interval);
		}, interval);
	}
}

var isHengPing = window.isHengPing = function() {
	return jex().getcw() > jex().getch();
}
var setWindowReSize = window.setWindowReSize = function() {
	window.onresize = function () {
		Main && Main.i && Main.i.setScaleMode && Main.i.setScaleMode();
	}
}

/**
 * 返回jui森林
 * @param {Array.<Object>} juia - jui数组（该数组应确保父元件总在子元件前面）
 * @return {Object}
 */
var JuiForest = (function () {
	// 构造函数
	let _ctor = function (juia) {
		this.treeRoots = [];
		juia = [].concat(juia);
		while (juia.length) {
			let jui = juia.shift();
			this.treeRoots.push({ jui, children: _getJuiChildrenNode(jui, juia) });
		}
	};

	let p = _ctor.prototype;
	/**
	 * 按层遍历森林
	 * @param {Function} onVisitNode - 形如(childJui, preArr) => preArr  遍历每一个节点的回调
	 * @param {Function} onVisitLevelEnd - 形如(preArr, parentJui) => undefined  遍历一层后的回调
	 */
	p.traverseByLevel = function (onVisitNode, onVisitLevelEnd) {
		for (let i = 0, l = this.treeRoots.length; i < l; i++) {
			let root = this.treeRoots[i];
			onVisitLevelEnd(onVisitNode(root.jui, []), root.jui);
			_traveseByLevel(root, onVisitNode, onVisitLevelEnd);
		}
	};

	function _traveseByLevel(parentNode, onVisitNode, onVisitLevelEnd) {
		onVisitLevelEnd(parentNode.children.reduce((pre, cur) => onVisitNode(cur.jui, pre), []), parentNode.jui);
		parentNode.children.forEach(c => _traveseByLevel(c, onVisitNode, onVisitLevelEnd));
	}
	function _getJuiChildrenNode(jui, juia) {
		let ret = [];
		for (let i = 0; i < juia.length; i++) {
			if (juia[i].pid == jui._id) {
				let child = juia.splice(i, 1)[0];
				ret.push({ jui: child, children: _getJuiChildrenNode(child, juia) });
				i--;
			}
		}
		return ret;
	}

	return _ctor;
}());
function band(){}
function getband(pid, vv, jui, pclas,i) {
	var ret = { _id: pid, pid,pclasid:pclas._id, style: {} };//
	if (vv != undefined) {
		vv = vv + '';
		if (vv.indexOf("http:") == 0 || ['_png', '_jpg', '.png', '.jpg'].some(s => vv.substr(vv.length - s.length) == s)) {
			if (jui.style.input == 1) { ret.ca = vv } else { ret.style.bgimg = vv; }
		} else {
			ret.ca = vv
		}
	}
	return ret;
	 
}
window.getbands=function(ret,vv,jui, pclas,i) {
	var jband=jui.actt&&jui.actt.band||jui.style.band;
	if (jband) {
		let _vv = (window.ifeval? eval(jband): T.doeval(jband,pclas));
		if(pclas)if ((_vv + '' == 'NaN') || (_vv + '' == 'undefined')) {
			pclas = sj.clas[pclas.pid];
			if (pclas) _vv =(window.ifeval? eval(jband): T.doeval(jband,pclas)) 
		}
		_vv= [].concat(_vv);
		for (var ii in jui.style) { 
			
				if(typeof jui.style[ii] =="string" && /\{v/.test(jui.style[ii] + '')){
				
					ret.style[ii] = replacev(jui.style[ii],_vv);
					if (ii == 'ca') ret.ca =ret.style[ii] ;
				}else{
					if( /\{v/.test(JSON.stringify(jui.style[ii])) ){
					  ret.style[ii]=ret.style[ii]||{}
					  for (var iii in jui.style[ii]) {
						  if(typeof jui.style[ii][iii] =="string") ret.style[ii][iii] = replacev(jui.style[ii][iii],_vv);
					  }
					}
					
				}
			
		}

	}

	return ret
}
function replacev(str,_vv){
	if (/\{v/.test(str)) {
				 
		str = str.replace(/{v0}/gi, _vv[0]);
		str = str.replace(/{v1}/gi, _vv[1]);
		str = str.replace(/{v2}/gi, _vv[2]);
		str = str.replace(/{v3}/gi, _vv[3]);
			 
	}
	return str;
}
/**
 * 通用解析jui数据数组，具体解析方法从handlers传入
 * @param {Array.<Object>} juia - 从服务器获取的jui数组
 * @param {String} event - 从服务器发回来的事件名
 * @param {Object} handlers - 存储具体处理数据的方法的对象
 */
function parseJuia(stra0, juia, handlers) {
	'use strict';
	let defaultHandler = () => console.error(`存在未实现的handler in parseJuia`);
	let hdr = {};
	let p, iii = 0;
	let afterDo = { ChildIndex: [], act: [], actt: [], tx: [], funa: [] };
	for (p in afterDo) hdr[`${p}Handler`] = defaultHandler;
	T.merge(hdr, handlers);
	let _juia = [].concat(juia);
	if (stra0[1] == 'not') _juia.shift(); // not事件不处理第一个jui
	let upda = [];
	if (stra0[1] && (stra0[1]+'').indexOf('upda:') >= 0) upda =  eval(stra0[1].split(';')[1])
	let juiForest = new JuiForest(_juia);
	let onVisitNode = function (_jui, pre) {
		
		 _jui.style = _jui.style || {};
		if (_jui.ca && _jui.ca.indexOf("{") > -1) _jui.style.caFormat = _jui.ca;

		//===lwf 实现自动 band
		if ((!_jui.data || _jui.needband) && _jui.style.needband!='-1') {//根据父元件的数据来生成data  _jui.style.needband==-1 表示类似 英雄角色 没有_reco 的时候，不能被当弱元件看待
			let pclasa =[];
			
			if( !['应用市场_应用容器',jg_aj.sj.idc].includes(_jui.pid)  && !['弹窗','场景a','场景b'].includes(_jui.pid.split('_')[1])  || jg_aj.curproj=='应用市场' ){
				pclasa=T.findids(_jui.pid, { json: sj.curclas });//有可能吧很多没用的数据找回来			 
			}

			for (var i = 0; i < pclasa.length; i++) {		//for(var i in pclasa)   for in 会遍历数组中的可枚举属性，改为for .length
				var pidn = pclasa[i];
				var pclas = sj.clas[pidn];
				if (pclas&&pidn.indexOf('-') > 0) {//父元件有d  pclasid是额外模拟的 原来的判断方式，对于 屏蔽 但 使用pclas.消息数（） 这种无效
					var pclasname = pidn.split('_')[1];
					var clasname = _jui._id.split('_')[1];
					var _clasname = clasname.indexOf(pclasname) == 0 ? clasname.replace(pclasname, '') : clasname;

					if (pclas.pclasid && sj.curclas[pclas.pid]) {//额外模拟的 需要找祖父
						pclas = sj.clas[pclas.pid];
                        pclasname = pclas._id.split('_')[1];
						_clasname = clasname.indexOf(pclasname) == 0 ? clasname.replace(pclasname, '') : clasname;
						if (pclas&&pclas.pclasid && sj.curclas[pclas.pid]) {//额外模拟的 需要找zeng祖父
							pclas = sj.curclas[pclas.pid];
                            pclasname = pclas._id.split('_')[1];
							_clasname = clasname.indexOf(pclasname) == 0 ? clasname.replace(pclasname, '') : clasname;
						}
					}
					_jui.needband = 1;
					if (i == 0) _jui.data = [];//2019.1.15重新清空				 
					
					_jui.data.push(getband(pidn.split('-')[0], pclas[_clasname], _jui, pclas, i)) //找到对应相关属性 元件名称关联方式
				}
			}
		} 
		 
		//===========
		var _hecJuia = [_jui];
		if (_jui.data && _jui.data.length > 0) {// 有d就合成，没d就处理c
			//if(_jui.data[0]._id)_hecJuia = _jui.data.map(d => T.hec(_jui, d))//里面有做getbands()只要 actt.band有则会做
			if(_jui.data[0]._id){//文杰 2019年4月4号修改
				_hecJuia = [];
				for(var i =0;i<_jui.data.length;i++){
					let d = _jui.data[i];
					_hecJuia.push(T.hec(_jui, d,i));
				}
			}
			 
		} else  if (_jui.style && _jui.style.noclas == 1) _hecJuia = [];//noclas=1确保不出现 无d的元件
		 

		_hecJuia.forEach(function (ui, idx) {
			 
			if (ui._id.indexOf("removed") > -1) {
				var oidObj = window["T"].objFilter(sj.obj, o => o.name == ui._id)[0];
				if (oidObj) {
					ui._id = oidObj.oid;
					oidObj.name = ui._id;
				} else {
					ui._id = 'a' + (ui.idname||db.getrd(5)) + '-' + ui._id.split('-')[1];
				}
			}
			if (ui.style.dele == 1) { T.removeObj(T.findObj(ui._id)); return; }//删除
			 
			sj.curclas[ui._id] = ui;//指定upda中没有，也需要保存到
			sj.clas[ui._id] = ui;
			if (upda && upda.length > 0) {//指定 更新的元件，对于 复杂数据表单，如果只更新来其中一个属性，则只需要解析这个元件
				if (upda.indexOf(ui._id.split('_')[1]) == -1) return;
			}

			let ret = hdr.buildUIHandler(ui); // 具体生成一个jui
			typeof (ret) == 'string' && pre.push({ id: ui._id, pid: ui.pid, ret, jui: ui });

			if (ui.style.title && ui.ca && !ui.style.hideCa && !ui.style.title.static && !T.isEgret()) {
				ui['funa'] = ui['funa'] || {};
				ui['funa']["title位移"] = `doAct({obj:new TJH5(document.getElementById('${ui._id}zititle_0')), 动作:'tween', y:'-0.3*{h}', time:300})`;

			}
			for (let p in afterDo) ui[p] && Object.keys(ui[p]).length>0 && afterDo[p].push({ id: ui._id, value: ui[p], jui: ui , idx}); // 将该jui的延后处理属性存入数组
			let ChildIndex = ui.style.ChildIndex || ui.style.z;
			ChildIndex != undefined && afterDo.ChildIndex.push({ id: ui._id, value: ChildIndex });

		});
		return pre;
	};
	var isEgret = 0;
	let onVisitLevelEnd = function (arr, parentJui) {
		if (arr.length == 0) return;
		let str = '', juia = [], pid = T.findid(arr[0].pid) || 'body_body';
		let createTJH5 = function (pid, juia) {
			if (!T.isEgret(sj.obj[pid]) || pid == 'body_body') {
				//				document.getElementById(pid == 'body_body' ? 'body_body' : pid).innerHTML = str;
				if(juia[0]&&juia[0].afterdiv){
					jex(jex(`[id^='${juia[0].afterdiv}']`)[0]).after('<div id='+juia[0].afterdiv+'_s>'+str+"</div>");
				}else{
					jex(pid == 'body_body' ? '#body_body' : `#${pid}`).append(str);
				}
				juia.forEach(function (jui) {
					let id = jui._id;
					let dom = document.getElementById(id);
					if (!dom) {
						//console.log(`找不到dom，id:${id}`);
						return;
					}
					let obj = sj.obj[id] = sj.obj[id] ? (sj.obj[id].dom = dom, sj.obj[id]) : new TJH5(dom);
					// 记录obj原始的display（如果是none，比如vi：0）则不记录
					obj._originDisplay = jex(obj.dom).css('display')=="none" ? (obj._originDisplay||"") : jex(obj.dom).css('display');
					let style = jui.style;
					if (style && style.json && style.png) {
						obj.janimation = new T.Janimation(jg_aj.res[jui.style.png], jg_aj.res[jui.style.json], id, function () {
							obj.janimation.playAction(0, 0, 1);
						});
					}
					// 特别处理typ 12（代码编辑器，目前仅在H5实现）
					// 代码编辑器实现依赖于codemirror.js、javascript.js、codemirror.css
					if (jui.typ == 12 && !T.isEgret(obj)) {
						if (typeof (CodeMirror) == 'undefined') {
							console.error(`解析typ12的元件:${obj.id}时出错，文件codemirror.js未被加载`);
						} else {
							// 直接清掉对象中的html
							obj.dom.innerHTML = `<textarea id="${id}zitext_0"></textarea>`;
							let editor = obj.editor = CodeMirror.fromTextArea(document.querySelector(`#${id}zitext_0`), {
								mode: "javascript",
								lineNumbers: true,
								lineWrapping: true,
								foldGutter: true,
								gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
							});
							editor.foldCode(CodeMirror.Pos(0, 0));
							editor.setSize('100%', '100%');
							editor.setValue(jui.ca||'');
							editor.setOption("extraKeys", {
								"Ctrl-Enter": function(cm) { // 快捷方式保存
									T.func(obj.id, {ev:13});
								},
								"Shift-Alt-F": function(cm) { // 格式化选定区域
									let range = { from: cm.getCursor(true), to: cm.getCursor(false) };
									cm.autoFormatRange(range.from, range.to);
								},
								"Ctrl-/": function(cm) { // 注释/取消注释选定区域
									console.log("ctrl-/，cm:",cm);
									let isComment = true;
									for (let i = cm.getCursor(true).line; i <= cm.getCursor(false).line; i++) {
										if (jex.trim(cm.getLine(i)).substr(0,2)!='//') {
											isComment = false;
											break;
										}
									}
									let range = { from: cm.getCursor(true), to: cm.getCursor(false) };
									if (!isComment) {
										cm.lineComment(range.from, range.to);
									} else {
										cm.uncomment(range.from, range.to);
									}
								}
							});
						}
					}
					// 如果有fun则执行
					if (jui.fun) {//清空孩子		
						if (typeof jui.fun == "string") { (window.ifeval? eval(jui.fun): T.doeval(jui.fun)); } else {
							parseActt(id, jui.fun);
						}
					}
				});
			} else {
				if (isEgret == 0) isEgret = 1;
			}
		};
		arr.forEach(function (d) {
			let dpid = d.pid != 'body_body' ? T.findid(d.pid) : 'body_body';
			if (dpid == pid) {
				// ida.push(d.id);
				juia.push(d.jui);
				str += d.ret;
			} else {
				createTJH5(pid, juia);
				pid = dpid;
				str = d.ret;
				juia = [d.jui];
			}
		});
		createTJH5(pid, juia);
	};
	juiForest.traverseByLevel(onVisitNode, onVisitLevelEnd);
	for (p in afterDo) { // 生成jui后的属性解析，倒叙执行（先孩子后父亲）
		let adp = afterDo[p];
		for (let i = adp.length; i--;) hdr[`${p}Handler`](adp[i]);
	}
}

 
function buildUI_h5(jui) {
	'use strict';
	let str = "", type = jui.typ;
	if (type) {
		let typ = type;
		let class0 = jui.class0 || '';
		let style = jui.style = jui.style || {};
		style.bgcolor == 'false' && (style.bgcolor = false); // 兼容字符串false
		let id = jui._id;
		if (type >= 54) {
			jg_aj.opid = id;
			if (style.target) {
				let curscene = T.findObj({ include: [jg_aj.curproj + '_场景'], exclude: ['应用市场', 'jai'] });
				curscene && T.removeObj(curscene);
			} else {
				T.removeChildren(sj.obj['应用市场_body']);
			}
		}
		if (style.keep) { // 有keep时，认为只保留最新的d生成的jui
			let yjm = id.split('-')[1] || id;
			T.findids(yjm).forEach(o => T.removeObj(o));
		}
		let isScroll = jui.actt && jui.actt['滑动']; // 是否有滑动
		if (isScroll) { // 有滑动时，实际的xywh为滑动里的设值
			let hd = jui.actt['滑动'];
			['x', 'y'].forEach(p => style[p] = hd[p] || style[p] || '50%');
			['w', 'h'].forEach(p => style[p] = hd[p] || style[p] || '100%');
		}
		let stylea = [];

	 
	 
		jui.funa && sj.obj[id] && JSON.stringify(jui.funa).includes('tzwz') && sj.obj[id].removeChildren();// 如果发现funa中有tzwz，自动清理容器内容


		type == 53 && (jui.pid = `${jg_aj.curproj}_场景${T.dqcj()}`);
		let pid = T.findid(jui.pid);
		(type == 51 || type == 52) && (pid = jui.pid = 'body_body');
		if (style.target) {
			jex(`#${id}`).length > 0 && style.target != jg_aj.curbox && T.removeObj(sj.obj[id]);
			pid = jui.pid = jg_aj.curbox = style.target;
			if (type >= 54) {
				var sonobj = document.getElementById(pid).children;
				for (let n of sonobj) {
					if(n.id)if (n.id.indexOf('_场景') > -1 || n.id.indexOf(jg_aj.curproj + '_') == -1) n.remove();
				}


			}
			jex('#tji-m-box1').addClass('layleft');
			jex('#'+pid).show();
			jex('#'+pid).css('visibility', 'visible');
			['tji-m-box2', 'tji-m-box3', 'tji-m-box6'].forEach(i => i != style.target ? jex(`#${i}`).addClass('layright') : jex(`#${i}`).removeClass('layright'));
		}
		let tag = jui.tag || (type < 50 ? sj.obj[pid] ? sj.obj[pid].tag : 'div' : 'div');
		let obj = { name: id };
		let pobj = sj.obj[pid] || { x: 0, y: 0, width: jex().getcw(), height: jex().getch(), $children: [] };
		jui.sid = type >= 54 ? id : sj.clas[pid] ? sj.clas[pid].sid : '应用市场_body';
		let sw = type >= 54 ? document.getElementById(pid).width : sj.obj[jui.sid] ? sj.obj[jui.sid].width : jex().getcw();
		let sh = type >= 54 ? document.getElementById(pid).height : sj.obj[jui.sid] ? sj.obj[jui.sid].height : jex().getch();
		let _w = obj.width = Math.max(T.deval('w', pobj, style, { obj, sw, sh }), T.deval('minw', pobj, { minw: style.minwidth }, { obj, sw, sh })); // 宽度（像素）
		jg_aj.curbox == 'tji-m-box3' && id.includes('游戏窗') && (_w = pobj.width);
		let _h = obj.height = Math.max(T.deval('h', pobj, style, { obj, sw, sh }), T.deval('minh', pobj, { minh: style.minheight }, { obj, sw, sh })); // 高度（像素）
		let _x = obj.x = T.deval('x', pobj, style, { obj, sw, sh }); // x轴坐标（像素）
		let _y = obj.y = T.deval('y', pobj, style, { obj, sw, sh }); // y轴坐标（像素）
		let _anchorX = style.anchorOffsetX == undefined ? 0.5 : T.deval('anchorOffsetX', pobj, style, { obj, sw, sh }) / _w; // x轴锚点，通过transform-origin实现
		let _anchorY = style.anchorOffsetY == undefined ? 0.5 : T.deval('anchorOffsetY', pobj, style, { obj, sw, sh }) / _h; // y轴锚点，通过transform-origin实现
		if (_anchorX != 0.5 || _anchorY != 0.5) stylea.push({ key: 'transform-origin', value: getTransformOriginStyle({ id, _anchorX, _anchorY }) });
		let _rotate = style.rotation || 0; // 旋转角度，通过transform实现
		let _scaleX = style.scaleX == undefined ? 1 : style.scaleX; // x轴比例，通过transform实现
		let _scaleY = style.scaleY == undefined ? 1 : style.scaleY; // y轴比例，通过transform实现
		if (_rotate != 0 || _scaleX != 1 || _scaleY != 1) stylea.push({ key: 'transform', value: getTransformStyle({ id, _rotate, _scaleX, _scaleY }) });
		(style.right==undefined && style.left==undefined) && stylea.push({ key: 'left', value: `${((_x - _anchorX * _w) / pobj.width * 100).toFixed(2)}%` }); // 换算为百分比
		(style.top==undefined && style.bottom==undefined) && stylea.push({ key: 'top', value: `${((_y - _anchorY * _h) / pobj.height * 100).toFixed(2)}%` });
		style.width==undefined && stylea.push({ key: 'width', value: pobj.width ? `${(_w / pobj.width * 100).toFixed(2)}%` : `${_w}px` });// 对于场景元件，用像素表示不用百分比，以解决输入时画面被挤压的问题
		
		style.height==undefined && stylea.push({ key: 'height', value: pobj.height ? `${(_h / pobj.height * 100).toFixed(2)}%` : `${_h}px` });
		// stylea.push({ key: 'height', value: id.includes('场景') ? `${_h}px` : `${(_h / pobj.height * 100).toFixed(2)}%` });
		//let visible = style.vi != undefined ? style.vi*1 : style.visible;
		var display =style.display || (style.input?'flex':'table'); 
		 
		(isScroll || type == 51 || type == 52 || id.includes('jai_body') ) && (display = 'block');
		//visible == undefined && (visible = true);
		//!(((visible + '') != '0') && ((visible + '') != 'false')) && (visible = false);
	 
		style.display == undefined && stylea.push({ key: 'display', value: style.display || ((0==style.vi||false==style.vi) ?  'none':display)});

		(style.opacity == undefined && style.alpha != undefined) && stylea.push({ key: 'opacity', value: style.alpha });
		style.overflow == undefined && stylea.push({ key: 'overflow', value: style.mask ? 'hidden' : 'initial' });
		// 当有设置滚动时，用background-color来实现bgcolor（用svg的话，滚动时，下面就没背景色了）
		(style.line == undefined || isScroll) && stylea.push({ key: 'background-color', value: T.color(style.bgcolor, '#{r}{g}{b}') || '' });
		style.border && stylea.push({ key: 'border', value: 'solid 1px ' + (T.color(style.borderColor, '#{r}{g}{b}') || "#ffffff") });
		style.mask && style.mask.type == 1 && stylea.push({ key: 'border-radius', value: `${style.mask.yuanjiao || 10}px` });
		(style.float == undefined && style.position == undefined) && stylea.push({ key: 'position', value: 'absolute' });
		let bgimg = '';
		if (style.bgimg) { // 背景图
			bgimg = T.getResUrl(style.bgimg.includes('_') && style.bgimg.length < 20 && jg_aj.res[style.bgimg] ? jg_aj.res[style.bgimg] : style.bgimg);
		 
			bgimg && !bgimg.includes('svg') && stylea.push({ key: 'background', value: `url(${bgimg}) 50% 50%/100% 100%` });
		}
		let bgcolor = T.color(style.bgcolor, '#{r}{g}{b}') || '';
		let hasIcon = style.path || (style.bgimg && style.bgimg.includes('.svg')); // 是否有图标（包括svg和path）
		let hasCa = jui.ca && !style.hideCa; // 是否有ca
		// let bgimg = style.bgimg ? style.bgimg.indexOf('_')!=-1 ? jg_aj.res[style.bgimg] : style.bgimg : '';
		let bgsvgStr = bgimg.includes('svg') || (bgcolor && style.line != undefined) || style.path ? buildBackground_svg({
			id, img: bgimg, color: isScroll ? '' : bgcolor, pathcolor: T.color(style.pathcolor, '#{r}{g}{b}') || '',
			w: _w, h: _h, line: style.line, path: style.path,
			padb: style.padb,
			padf: style.padf == undefined ? hasCa ? '30%' : '20%' : style.padf,
			offsetYf: style.iconOffsetY == undefined ? hasCa ? -10 : 0 : style.iconOffsetY
		}) : '';
		class0 && jex.each(class0.split(' '), function (i, n) { jex().recss(n); });
	 
		// 2018/05/28  原来replace , 为"" 太粗暴，改为遍历style生成styleStr
	 
		let styleStr = '';
		for (let _key in style) if(!['title','x','y','w','h','noclas','bgcolor','bgimg'].includes(_key)) styleStr += _key+':'+style[_key]+';'
		//styleStr = styleStr.replace(/"/gi, "").replace(/{/gi, '').replace(/}/gi, '');	
		styleStr =  `${stylea.map(s => s.key + ':' + s.value).join(';')}` + ";" + styleStr;
		
		
		
		// 解析ca
		let fontSize = style.size || (hasIcon ? 12 : 14),
		
			lineCount = jui.ca ? (jui.ca + "").split('<br>').length : 1,
			lineHeight = fontSize; // hasIcon ? _h * 2 * 0.9 - fontSize : Math.min(fontSize * 2, _h / lineCount);
		//lineHeight = hasIcon ? _h*2*0.9-fontSize : _h/lineCount;
		if(jex().getv('langu','')!='' && window.langu){
			if(window.langu[jui.ca])jui.ca= window.langu[jui.ca][jex().getv('langu','')];
		}
		var ziStyleJson = { 'font-size': `${fontSize * 0.05}rem`, 'position': 'relative', 'overflow': 'hidden', 'overflow-wrap': 'break-word', 'word-break': 'break-all', 'line-height': `${style.lineHeight || lineHeight}px`, 'width': '100%', 'height': '100%', 'vertical-align': hasIcon ? 'bottom' : 'middle' };//'width':'100%',
		!style.lineHeight && (ziStyleJson.display= display=='table'?'table-cell':'block');
		fontSize < 12 && (ziStyleJson.transform = `scale(${fontSize / 12})`); // 由于谷歌浏览器限定最小字体为12px，比这个更小的时候，只能通过scale去修正
		if (style.textx!= undefined) ziStyleJson.left = style.textx;
		if (style.texty!= undefined) ziStyleJson.top = style.texty;
		if (style.textw) ziStyleJson.width = style.textw;
		if (style.texth) ziStyleJson.height = style.texth;
		if(style.textColor)ziStyleJson.color = T.color(style.textColor, '#{r}{g}{b}') ||'#eee';
		if (style.bold) ziStyleJson['font-weight'] = 'bold';
		if (style.fontFamily) ziStyleJson['font-family'] = style.fontFamily;
		ziStyleJson['text-align'] = style.textAlign || 'center';

		var ziStr = ''; // 弱类（文本）

		//textStylea.forEach(i => ziStyleJson[i.key] = i.value);
		if (type != 1 && (![undefined,""].includes(jui.ca) && !style.hideCa || type == 4) || style.input) {
			let inptyp = style.input;
			let ziAttr = {}, stag = 'span';
			// 2018/05/22  多行输入
			if (style.mutiline) {
				stag = 'textarea';
				ziStyleJson.resize = 'none';
				ziStyleJson.background = 'none';
				ziStyleJson.border = 'none';
			}

			// 2018/05/04  对于idclas中带"密码"的input特殊处理
			if (style.input && id.includes('密码')) {
				stag = 'input';
				ziAttr.type = 'password';
				ziStyleJson.border='none';
				ziStyleJson.background='none';
				
			}

			style.FOCUS_IN && (ziAttr.onfocus = style.FOCUS_IN);
			style.FOCUS_OUT && (ziAttr.onblur = style.FOCUS_OUT);
			style.CHANGE && (ziAttr.oninput = style.CHANGE);
			//ziAttr.onkeydown = `if(event.keyCode==13) return false;`; // 屏蔽回车，实现禁止换行
			if (inptyp&&(inptyp+"").length>1) {
				stag = 'input';
				ziAttr.type = inptyp;
				ziAttr.size = 3;
				ziStyleJson.border='none';
				ziStyleJson.background='none';
				ziStyleJson['font-size']=style.size;
			} else if (inptyp) {
				ziAttr.contenteditable = 'true'
				//  2018/07/31  去掉判断，解决禁止换行失效问题 && " + inptyp + "===true
				ziAttr.onkeydown = " if(event.keyCode==13 && event.ctrlKey){T.func(id,{ev:13});return false;} if(event.keyCode==13) return false; " // 屏蔽回车，实现禁止换行
			}
			ziStr = T.getdiv({
				parent: id, tag: stag, id: `${id}zitext`,
				attr: ziAttr,
				style: ziStyleJson,
				ca: (jui.style.caFormat || '{ca}').replace(/\{ca\}/g, jui.ca)
			});
			// ziStr = `<span id="${id}zitext" ${style.input||type==4?'contenteditable=true':''} onfocus="${style.FOCUS_IN}" onblur="${style.FOCUS_OUT}" oninput="${style.CHANGE}" style="${ziStyleStr}">${jui.ca}</span>`;
		}
		// if(style.hideCa) ziStr='';
		// 解析角标（foot）
		let zifootStyle = {};
		if (style.foot) {
			style.foot.w = style.foot.w || '100%'
			style.foot.h = style.foot.h || '100%'
			let img = style.foot.img, footimg = img.includes('_') && img.length < 20 ? jg_aj.res[img] : img;
			let _fw = T.deval('w', obj, style.foot), _fh = T.deval('h', obj, style.foot), _fx = T.deval('x', obj, style.foot), _fy = T.deval('y', obj, style.foot);
			zifootStyle.position = 'absolute';
			zifootStyle.left = `${(_fx - 0.5 * _fw) / obj.width * 100}%`;
			zifootStyle.top = `${(_fy - 0.5 * _fh) / obj.height * 100}%`;
			zifootStyle.width = `${_fw / obj.width * 100}%`;
			zifootStyle.height = `${_fh / obj.height * 100}%`;
			zifootStyle['z-index'] = `999`;
			ziStr += T.getdiv({ parent: id, tag: 'img', id: `${id}zifoot`, attr: { src: `${footimg}` }, style: zifootStyle });
			//`<img id="${id}zifoot" src="${footimg}" style="position:absolute;left:${(_fx-0.5*_fw)/obj.width*100}%;top:${(_fy-0.5*_fh)/obj.height*100}%;width:${_fw/obj.width*100}%;height:${_fh/obj.height*100}%;z-index:999"/>`;
		}
		let clickStr = `T.mndj('${id}');`;
		// 解析title
		let zititleStyle = {};
		if (style.title) {
			let titleJson = typeof (style.title) == 'string' ? { ca: style.title } : style.title;
			zititleStyle = Object.assign(titleJson, {}); // 直接将style.title复制一份
			zititleStyle.position = zititleStyle.position || 'absolute';
			!zititleStyle.right && (zititleStyle.left = zititleStyle.left || `5%`);
			// zititleStyle.top = `30%`;
			zititleStyle.top = zititleStyle.top || `0%`;
			zititleStyle.width = zititleStyle.width || `35%`;
			// zititleStyle.height = `33%`;
			zititleStyle.height = zititleStyle.height || `100%`;
			zititleStyle.color = T.color(titleJson.color, '#{r}{g}{b}') || '#ffffff';
			_h && (zititleStyle['line-height'] = `${_h}px`); // `${style.lineHeight || lineHeight}px`;
			zititleStyle['z-index'] = `999`;
			zititleStyle['text-align'] = zititleStyle.textAlign || 'left';
			zititleStyle['font-size'] = (titleJson.size || '16') + 'px';
			ziStr += T.getdiv({ parent: id, tag: 'span', id: `${id}zititle`, ca: titleJson.ca, style: zititleStyle });
			if (!titleJson.static) clickStr += `doAct({obj:new TJH5(document.getElementById('${id}zititle_0')), 动作:'tween', y:'-0.3*{h}', time:300})`;
			// clickStr += `doAct({obj:new TJH5(document.getElementById('${id}zititle_0')), 动作:'tween', y:'-0.2*{h}'})`;
			//`<img id="${id}zifoot" src="${footimg}" style="position:absolute;left:${(_fx-0.5*_fw)/obj.width*100}%;top:${(_fy-0.5*_fh)/obj.height*100}%;width:${_fw/obj.width*100}%;height:${_fh/obj.height*100}%;z-index:999"/>`;
		}
		// 解析file
		if (style.file) { //  
			let zifileStyle = {};
			let zifileAttr = {};
			zifileStyle.position = 'absolute';
			zifileStyle.top = '0';
			zifileStyle.right = '0';
			zifileStyle.width = `${_w}px`;
			zifileStyle.height = `${_h}px`;
			zifileStyle.margin = '0';
			zifileStyle.border = 'solid transparent';
			zifileStyle['border-width'] = `0 0 0 0`;
			zifileStyle.opacity = '.0';
			zifileStyle.direction = 'ltr';
			zifileStyle.cursor = 'pointer';
			zifileAttr.type = 'file';
			zifileAttr.name = 'files[]';
			zifileAttr.accept = 'image/*';
			zifileAttr.multiple = 'multiple';
			zifileAttr.onchange = style.file.onchange || `jex().jalert("照片上传中..",1,{ifgb:-1});handleFiles(this.files,0,-1,"${id}ziinput_0",function(n){let obj=T.findObj("${id}");${style.file.cb || ''}},1)`;
			ziStr += T.getdiv({ parent: id, tag: 'input', id: `${id}ziinput`, ca: '', style: zifileStyle, attr: zifileAttr });
			jex('#preup-img_0').length == 0 && (ziStr += '<img id="preup-img_0" style="display:none;">');
		}

		if (jex('#' + id).length > 0) {
			if (class0) jex('#' + id).attr('class', class0);

			let thisobj = jex('#' + id).get(0);
			if (thisobj.parentNode.id != pid && jex(`#${pid}`).length > 0 && !jui.afterdiv) { // pid发生变化
				if (_rotate != 0 || _scaleX != 1 || _scaleY != 1)thisobj.style.transform = getTransformStyle({ id, _rotate, _scaleX, _scaleY });
				jex(`#${pid}`).append(thisobj);
			}
			
			if (styleStr && styleStr.indexOf("x:no") == -1) {
				jex('#' + id).attr('style', styleStr);
				if(thisobj.style.transform) TweenMax.set('#' + id, { x: 0, y: 0 });  // 使用TweenMax.set使jui复位 很多元件默认会transform
			}
			// jex('#' + id).html(bgsvgStr+ziStr);//10.3 lwf 取消注释
			// let zitext = jex(`#${id}zitext`);
			// if(zitext.length>0) {
			// 	zitext.attr({
			// 		onfocus: `${style.FOCUS_IN}`,
			// 		onblur: `${style.FOCUS_OUT}`,
			// 		oninput: `${style.CHANGE}`,
			// 		style: ziStyleStr,
			// 		contenteditable: style.input||type==4 ? 'true' : 'false'
			// 	});
			// 	zitext.html(jui.ca);
			// } else {
			// 	jex('#' + id).append(ziStr);
			// }
			return '';
		} else {
			let strclick = 'if(jex().funmd(this)){jex(this).mdown(event,this,1);' + clickStr + ';}jex().stoppp();'; // stoppp不能删
			str += `<${tag} onfocus="grid.fover(this)" onclick="${strclick}" ${jui.edit == 1 ? 'contenteditable=true' : ''} class="${class0}" style="${styleStr}" pid=${jui.pid} typ=${typ} id=${id}>${bgsvgStr}${ziStr}</${tag}>`;
			return str;
		}
	} else {
		console.log(`存在未知类型aji.typ:${type},_id:${jui._id} in buildUI`);
		return '';
	}
};

 
function buildBackground_svg(aj) {
	let a = T.merge({ img: '', color: '', pathcolor: '', w: 0, h: 0, line: 4, path: '', padb: 0, padf: 10, offsetYf: 0 }, aj)
	let id = a.id, img = a.img, color = a.color, pathcolor = a.pathcolor,
		w = parseFloat(a.w.toFixed(2)), h = parseFloat(a.h.toFixed(2)), pb = a.padb,
		pf = typeof (a.padf) == 'string' ? parseFloat(a.padf) * 0.01 * Math.min(w, h) : a.padf, vw = w, vh = h;
	if (img.includes('.svg')) {
		let zibgsvg = jex(`#${id}zibgsvg`);
		if (zibgsvg.length > 0) {
			window["图标变形"]({ obj: id, path: img });
		} else {
			downSvg(img, function (svg) {
				if (!svg) return;
				let bgsvg = document.getElementById(`${id}zibgsvg`);
				jex(svg).attr({ id: `${id}zibgsvg`, width: `${w - 2 * pf}px`, height: `${h - 2 * pf}px` });
				jex(svg).css({ position: 'absolute', left: `${pf}px`, top: `${pf + a.offsetYf}px`, width: `${w - 2 * pf}px`, height: `${h - 2 * pf}px` });
				bgsvg && (bgsvg.outerHTML = svg.outerHTML);
			});
		}
	}
	let bgcolorD = '';
	color == undefined && aj.line != undefined && (color = T.color(jg_aj.dqps[1]));
	a.path && (vw = vh = 1024, pathcolor = T.color(a.pathcolor || jg_aj.dqps[3]));
	color && (bgcolorD = getShapePathD(a));
	var strbg = '';
	if (img || a.path) {
		let zibgsvg = jex(`#${id}zibgsvg`);
		let zibgsvgAttr = { width: `${w - pf * 2}`, height: `${h - pf * 2}`, viewBox: `0 0 ${vw} ${vh}`, style: `position:absolute;left:${pf}px;top:${pf + a.offsetYf}px` };
		let zibgsvgAttrStr = '';
		let content = `${img && !img.includes('svg') ? `<defs>
							<pattern id="${id}ziImg" width="100%" height="100%">
								<image xlink:href="${img}" x="0" y="0" width="100%" height="100%"></image>
							</pattern>
						</defs>` : ''}
						${img ? img.includes('svg') ? `<path id="${id}ziicon"></path>` : `<path fill="url(#${id}ziImg)" d="M0 0L${w} 0L${w} ${h}L0 ${h}L0 0Z"></path>` : ''}
						${a.path ? `<path id="${id}zipath" fill="${pathcolor}" stroke-width="20" stroke="${pathcolor}" d="${a.path}"></path>` : ''}`;
		if (zibgsvg.length > 0) {
			zibgsvg.attr(zibgsvgAttr);
			window["图标变形"]({ obj: id, path: a.line });
			// zibgsvg.html(content);
		} else {
			for (let i in zibgsvgAttr) zibgsvgAttrStr += ` ${i}="${zibgsvgAttr[i]}"`;
		}
		strbg = `<svg id="${id}zibgsvg"${zibgsvgAttrStr}>
					${content}
				</svg>`;
	}
	let zisvg = jex(`#${id}zisvg`), zisvgAttr = { width: "100%", height: "100%", viewBox: `0 0 ${w} ${h}`, style: `position:absolute;left:0px;top:0px` };
	if (zisvg.length > 0) {
		zisvg.attr(zisvgAttr);
		zisvg.html(color ? `<path id="${id}zibgcolor" fill="${color}" d="${bgcolorD}"></path>` : '');
	}
	return `<svg id="${id}zisvg" width="100%" height="100%" viewBox="0 0 ${w} ${h}" style="position:absolute;left:0px;top:0px">
				${color ? `<path id="${id}zibgcolor" fill="${color}" d="${bgcolorD}"></path>` : ''}
			</svg>`+ strbg;
}

/**
 * 下载一个svg获取其中所有path的p，合并后的字符串将传入cb
 * @param {String} url - 下载的svg的路径
 * @param {Function} cb - 回调函数，形如 data => {}，data.d为合并后的path的d，data.viewBox，data.fill
 */
function downSvg(url, cb) {
	db.gajax(url, function (data) {
		cb && cb(jex.makeArray(jex(data)).find(i => i.tagName == 'svg'));
	});
}

/**
 * 根据宽高、padb值计算出形状path的d并返回
 * @return {String}
 */
function getShapePathD(aj) {
	let a = T.merge({ line: 4, w: 0, h: 0, padb: 0 }, aj), w = a.w, h = a.h, pb = a.padb;
	const C = 0.551915024494; // 贝塞尔曲线画圆时计算控制点的常量比例
	let bgcolorD = '', min = Math.min(w, h), r = 0.1 * min, or = r * C; // r为圆角矩形的半径，or为控制点偏移值
	a.line == 0 && (bgcolorD = `M${w * 0.5} ${pb}A${w * 0.5 - pb},${h * 0.5 - pb} 0,1,1 ${w * 0.5},${h - pb}A${w * 0.5 - pb},${h * 0.5 - pb} 0,1,1 ${w * 0.5} ${pb}Z`); // 圆
	a.line == 4 && (bgcolorD = `M${pb} ${pb}L${w - pb} ${pb}L${w - pb} ${h - pb}L${pb} ${h - pb}L${pb} ${pb}Z`); // 正方形
	a.line == 6 && (bgcolorD = `M${w * 0.5} ${pb}L${w - pb} ${0.25 * h}L${w - pb} ${0.75 * h}L${w * 0.5} ${h - pb}L${pb} ${0.75 * h}L${pb} ${0.25 * h}L${w * 0.5} ${pb}Z`); // 六边形
	a.line == '圆角矩形' && (bgcolorD = `M${r + pb} ${pb}L${w - r - pb} ${pb}C${w - r - pb + or},${pb} ${w - pb},${r + pb - or} ${w - pb},${r + pb}L${w - pb} ${h - pb - r}C${w - pb},${h - r - pb + or} ${w - r - pb + or},${h - pb} ${w - r - pb},${h - pb}L${r + pb} ${h - pb}C${r + pb - or},${h - pb} ${pb},${h - r - pb + or} ${pb},${h - pb - r}L${pb} ${r + pb}C${pb},${r + pb - or} ${r + pb - or},${pb} ${r + pb},${pb}Z`); // 圆角矩形
	return bgcolorD;
}

 
function getNewPathD(d, ovb, nvb, ls) {
	let ow, oh, nw, nh; // 从ovb,nvb获取新旧w,h
	if (typeof (ovb) == 'string') { let ovba = ovb.split(' ').map(i => parseFloat(i)); ow = ovba[2]; oh = ovba[3]; } else { ow = ovb.w; oh = ovb.h; }
	if (typeof (nvb) == 'string') { let nvba = nvb.split(' ').map(i => parseFloat(i)); nw = nvba[2]; nh = nvba[3]; } else { nw = nvb.w; nh = nvb.h; }
	let sx = nw / ow, sy = nh / oh, i = false;
	!ls && (sx = sy = Math.min(sx, sy));
	return d.replace(/(?:\d*\.)?\d+/g, n => { i = !i; return (parseFloat(n) * (i ? sx : sy)).toFixed(4) });
}

/**
 * 执行act
 */
var doAct = window.doAct = function (e) {
	'use strict';
	typeof (e.obj) == 'string' && (e.obj = T.findObj(e.obj));
	// if(!T.isEgret(e.obj)) {
	// 	let obj = e.obj.dom;
	// 	let classa = jex(obj).attr('class').split(' ').filter(n=>!n.includes('galert'));
	// 	jex(obj).attr('class', classa.join(' '));
	// }
	let actName = e["动作"]; // action
	if (actName.includes('弹性')) {
		actName = actName.replace('弹性', '');
		e.ease = e.ease || 'elasticOut';
	}
	if (actName.indexOf('逐个') == 0) { // 如果有逐个字眼，则改为用间隔执行调用底下的孩子做动作
		actName = actName.substring(2);
		let obj = e.obj;
		delete e.obj;
		let cb = e.cb;
		delete e.cb;
		let pa = T.son(obj, e).map(obj => { let p = T.dcopy(e); p.obj = obj; return p; });
		T.jgzx(window[actName], e.jgt || 300, cb, pa);
		return;
	}
	let todo = function () {
		delete e.delay; // 避免重复delay
		 
				if (!window[actName]) { console.log(`不存在函数${actName} in doAct`); return; }
				window[actName](e)
			 
		 
	};
	if (!e.delay) todo();
	else _setTimeout(todo, e.delay);
}

/**
 * 解析act
 */
function parseAct(id, act) {
	let obj = sj.obj[id];//jex(`#${id}`).get(0);
	if (obj == undefined) return;
	obj.aclas || (obj.aclas = {});
	// 将原有的act数据清掉
	let aclasid;
	for (aclasid in obj.aclas) {
		if (aclasid != '_acts') {
			let pobj = sj.obj[T.findid(aclasid)];
			if (pobj) {
				pobj.clas || (pobj.clas = []);
				let idx = pobj.clas.indexOf(obj.id);
				if (idx > -1) {
					pobj.clas.splice(idx, 1);
				}
			} else {
				console.log(`解析${obj.id}的act时，找不到触发对象${aclasid},T.findid(aclasid):${T.findid(aclasid)}`);
			}
		}
	}
	// 解析新的act
	let removea = [], keys = Object.keys(act); // 解析完后要删除的key
	let singlePid = false;
	for (let k = 0; k < keys.length; k++) {
		aclasid = keys[k];
		let _act = [].concat(act[aclasid]); // 一系列动作
		if (aclasid == '_a') { // 路线型act
			T.dodz(obj, T.route2act(_act));
			continue;
		}
		let _p = _act[_act.length - 1] || {}; // 一系列动作参数
		if (_p instanceof Array || _p['动作']) _p = {};
		if (aclasid == '_acts') {
			_p["条件"] ? (window.ifeval? eval(_p["条件"]): T.doeval(_p["条件"])) && T.dodz(obj, _act) : T.dodz(obj, _act);
			continue;
		}
		if (['{父元件}', '{本元件}'].includes(aclasid) || aclasid[0] == '_') {
			let newkey = obj.name;
			if (aclasid == '{本元件}') singlePid = true;
			if (aclasid == '{父元件}') newkey = obj.parent.name;
			if (aclasid[0] == '_') newkey = jg_aj.curproj + aclasid;
			aclasid != newkey && (keys.splice(k+1,0,newkey), act[newkey] = _act); // keys.push(newkey)
			continue;
		}
		if (!_p.remove) { // 有remove代表删除该动作，实际不需要处理，因为前面已经把旧的都清了
			let pids = T.findid(aclasid, { many: true });
			singlePid && (pids = [obj.name]);
			// let pids = [T.findid(aclasid)];
			if (pids === aclasid) {
				console.log(`解析act时，找不到${obj.id}的触发对象${aclasid}，一系列动作:${JSON.stringify(_act)}`); continue;
			}
			pids.forEach(function (aclasid) {
				if (!_act[0]._id || aclasid.split('-')[0] == obj.name.split('-')[0]) {

					let pobj = sj.obj[aclasid];
					if (pobj) {
						obj.aclas[aclasid] = _act;
						pobj.clas || (pobj.clas = []);
						pobj.clas.push(obj.id);
					}
				}
			});
		}
		singlePid = false;
	}
}
 window.actt=function(obj,aj){ //aj是actt格式
	let objname=obj;
	if(typeof obj == "string")obj = T.findObj(obj);
	if (T.isEgret()){
		return Jui.getSingle().actt.apply(Jui.getSingle(), [obj,(obj?obj.parent:null),aj])
	}else{
		parseActt(obj?obj.name:objname, aj)
	}
}
/**
 * 解析执行actt
 * @param {String} id - 添加特效的对象名
 * @param {Object} actt - 待解析的actt对象，里面可能包含多个actt
 */
function parseActt(id, actt,sxn) {//sxn 兄弟中的第几个
	'use strict';
	actt = actt || {};
	for (let i in actt) {
		if(typeof actt[i]=='object' ){
		  if(i.indexOf("@")>-1)i = i.split("@")[0];
		  let e = T.merge({ delay: 0, sleep: 0 }, actt[i]);
		  if (!ifmy(e.my,sj.obj[id]))return;
		  e.obj =e.obj || id;
		  e.actname=i; 
		  e["动作"] = i;
		  if (actt[i]._id0 && sxn!=0){
			   return;					
		  }
		  if (!actt[i]._id || jg_aj.opid.split('-')[0] == e.obj.split('-')[0]) {
			 try{
			  doAct(e);
			 }catch(error) {
				console.log("动作没正常完成：" + JSON.stringify(e));
			}
		  }

		}
		 
	}
}

var ifmy = window.ifmy = function(my,obj){
        if(!my)return true;
        if(my == 1) return sj.clas[obj.name].idus == window["jg_aj"].idus;
        if(my.length>2)return window["ifeval"]? eval(my): window["T"].doeval(my);
}
/**
* 区分白鹭跟h5的setTimeout
* @param {Functon} func  需要执行的函数
* @return {Number} time	 延迟时间
* @return {Object} [obj={}]	 白鹭需要用到的this
* @return {arr} [args=[]]	 函数参数
*/
 var _setTimeout = window._setTimeout = function(func,time,obj={},args=[]){
        if(egret&&egret.setTimeout&&jg_aj.sj.eg){
			return egret.setTimeout(func,obj,time,args);
		}else{
			setTimeout(func,time,args);
		}
}

var onKeyPress = window.onKeyPress = function (e) {
	var keyCode = null;

	if (e.which)
		keyCode = e.which;
	else if (e.keyCode)
		keyCode = e.keyCode;

	if (keyCode == 13) {
		word2word();
		return false;
	}
	return true;
}
var tssnum = 0;
var autotss = window.autotss = function (strHuiData) {
	tssnum++;
	if (tssnum > 1) {
		// jg_TTS.doPlay({
		// 	'audioId': 'media', 'str': strHuiData, 'vcn': 'vixy', 'retURL': 0, func: function (data) {
		// 		//alert('===========efef'+data.result);
		// 		if (data.result == -1) {
		// 			//转换失败,取消内容

		// 		} else if (data.result == 1) {
		// 			//正在播放内容，网络加载中，可不做处理

		// 		} else if (data.result == 0) {
		// 			//音频正在播放,
		// 		} else if (data.result == 3) {
		// 			//调用白鹭播放data.url
		// 			console.log(data.url);
		// 			Main.i.loadSound(data.url);
		// 		}
		// 		//alert(data.msg);
		// 	}
		// });
	}
}
/**
 * 点击对话项事件
 * @param {Object} objid - 对话项_id
 */
var tssplay = window.tssplay = function (objid, f) {
	 
}

 

 
var cfileindex;
var cpicid;
var cfileid;
var conSingleUploadComplete;

var handleFiles = window.handleFiles = function (files, fileindex, picid, fileid, onSingleUploadComplete) {
	conSingleUploadComplete = onSingleUploadComplete || null;
	cfileindex = fileindex || 0;
	cpicid = picid || 0;
	cfileid = fileid || null;
	if (files.length) {
		let file = files[cfileindex];
		let reader = new FileReader();

		reader.readAsDataURL(file);
		reader.onload = function (e) {
			let img = document.getElementById("preup-img_0");
			let width = 0, height = 0;
			let _cupload = function () {
				let func = function (i, n) {
					let cpic = uploader.filesList[cfileindex].name.split(".")[0];
					//{findex: 0, fn: "http://image.kxtui.com/pg/fi/14890/1489060394913.png", ifoss: 1, created: "1489060394913", idfi: "286330"}
					if (cpicid == 0) {
						csend(["", { dba: ['图片', { 'url': n.fn, 'name': (cpic.split("_")[0] || ''), 'style': (cpic.split("_")[1] || ''), 'w': width, 'h': height, 'val': 100 }], idus: jex().getv('idus', 'a10002') }, "jai图库_上传图片"]);
					}
					conSingleUploadComplete && conSingleUploadComplete(n);
				};
				uploader.startUpload(cfileindex, ("&ifSavefi=0" + (cpicid > 0 ? "&oid=" + cpicid : "")), func, cfileid, function () {
					if (cfileindex < uploader.filesList.length - 1) {
						handleFiles(uploader.filesList, cfileindex * 1 + 1);
					}
					// if (cfileindex == uploader.filesList.length - 1) { alert("上传完成"); }
				}, "http://www.kxtui.com");
			};
			if (file.type.indexOf("image") > -1 || file.type.indexOf("svg") > -1) {
				img.addEventListener('load', function () {
					width = img.width;
					height = img.height;
					_cupload();
				});
			} else {
				_cupload();
			}
			img.src = e.target.result;
		};
	}
}

/**
*	微信上传
*/
var weixinImgUrl;
var wxPicture = window.wxPicture = function () {
	if (navig.weixin) {
		uploader.wxupload({
			'func': function (a, b) {
				var c = b.fn;
				//alert("cc:"+c);
				weixinImgUrl = htps + "://" + domain + "/" + c.replaceAll("s", "2") + "?1";
				var img = new Image();
				img.src = weixinImgUrl;
				img.onload = function () {
					var editCanvas = document.createElement('canvas');
					editCanvas.width = 540;
					editCanvas.height = 540 / img.width * img.height;
					var ctx = editCanvas.getContext("2d");
					ctx.fillStyle = "rgba(255, 255, 255, 1)";
					ctx.fillRect(0, 0, 540, 540 / img.width * img.height);
					ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, 540, 540 / img.width * img.height);
					var nnimage = editCanvas.toDataURL("image/png");
					b.fn = nnimage;
					//alert("fn:"+b.fn);
					mrih(b);
				}
			}
		});
	}
	else {
		jex().jalert('<div style="color:#000">请在微信中打开！！！</div>', null, { clas: "emp", bdcol: "#ff", embg: "#fff" }, null, 100);
	}
}

 
function outstanding(obj) {
	jex("#svgoutstand_0").remove();
	var cObj = jex(obj);
	var cObjw = jex(obj).width();
	var cObjh = jex(obj).height();
	var cObjp = cObjw * 2 + cObjh * 2 + 16;
	var cObjbr = jex(obj).css("border-radius").split("px")[0];
	if (cObjbr.indexOf("%") > -1) cObjbr = cObjbr.split("%") * 0.01 * cObjw;

	var intext = '<rect id="pathd" fill="none" stroke="#ff0000" stroke-width="4px" width="100%" height="100%" rx="' + (cObjbr > 0 ? cObjbr : 10) + '" ry="' + (cObjbr > 0 ? cObjbr : 10) + '" style="stroke-dasharray: ' + (cObjp - 40) + ' 40;stroke-dashoffset: ' + cObjp + ';animation-duration: 2s;"></rect>';

	var str = T.getdiv({ tag: 'svg', id: 'svgoutstand', ca: intext, style: { width: cObjw * 1 + 4 + "px", height: cObjh * 1 + 4 + "px", top: (cObj.css("top").split("px")[0] - 2) + "px", left: (cObj.css("left").split("px")[0] - 2) + "px" }, attr: { width: cObjw - 1 + 4 + "px", height: cObjh * 1 + 4 + "px", preserveAspectRatio: "none", xmlns: "http://www.w3.org/2000/svg", version: "1.1", class: "fdown" } });

	jex(obj).before(str);
}

/**
 * 
 */
var nowfocs = 1;
var endtime = 0;
var voiInt = [];
var changefun = window.changefun = function () {
	console.log("changefun");
	endtime = db.gett();
}
 
  
 
 
function bigMap(url) {
	jex().jalert("<img src='" + url + "'/>");
}

  
 
var GetQueryString = window.GetQueryString = function (name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return null;
}


var GetWsUrl = window.GetWsUrl = function () {
	var wsdomain = GetQueryString("websocketdomain");
	var port = GetQueryString("port");
	var sign = GetQueryString("sign");
	var nonstr = GetQueryString("nonstr");
	var timestamp = GetQueryString("timestamp");
	var post_data = GetQueryString("post_data");

	var obj = JSON.parse(post_data);
	var gameid = obj.gameid;
	var roomid = obj.roomid;

	var ws_url = "ws://" + wsdomain + ":" + port + "/" + gameid + "/" + roomid +
		"?nonstr=" + nonstr + "&sign=" + sign +
		"&timestamp=" + timestamp + "&post_data=" + post_data;

	return ws_url;
}
var GetWssUrl = window.GetWssUrl = function () {
	var wsdomain = GetQueryString("websocketdomain");
	var port = GetQueryString("port");
	var sign = GetQueryString("sign");
	var nonstr = GetQueryString("nonstr");
	var timestamp = GetQueryString("timestamp");
	var post_data = GetQueryString("post_data");

	var obj = JSON.parse(post_data);
	var gameid = obj.gameid;
	var roomid = obj.roomid;

	var ws_url = "wss://" + wsdomain + ":" + port + "/" + gameid + "/" + roomid +
		"?nonstr=" + nonstr + "&sign=" + sign +
		"&timestamp=" + timestamp + "&post_data=" + post_data;

	return ws_url;
}

 
var jg_lSto = window.jg_lSto = function (f, n, v, ttl) {
	try {
		if (window.localStorage) {
			switch (f) {
			case 1:
				localStorage.setItem(n, v);
				break;
			case 2:
				return localStorage.getItem(n);
				break;
			case 3:
				localStorage.removeItem(n);
				break;
			}
		} else {
			switch (f) {
			case 1:
				if (ttl == undefined)
					ttl = 1e3 * 3600 * 24 * 365;
				document.cookie = n + "=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT";
				var expires = new Date;
				expires.setTime(expires.getTime() + ttl);
				document.cookie = [n + "=" + v + "; ", "expires=" + expires.toGMTString() + "; ", "path=/"].join("");
				break;
			case 2:
				var cookie = document.cookie.split("; ");
				for (var i in cookie) {
					var spl = cookie[i].split("=");
					if (spl.length == 2 && spl[0] == n) {
						return spl[1];
					}
				}
				return null;
				break;
			case 3:
				var expires = new Date;
				expires.setTime(expires.getTime() - 1);
				document.cookie = n + "=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT";
				break;
			}
		}
	} catch (ex) {}
}
// 这是clipboard.js的代码
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(window,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){var o,r,i;!function(a,c){r=[t,n(7)],o=c,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(t){return t&&t.__esModule?t:{default:t}}(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=function(){function t(e){n(this,t),this.resolveOptions(e),this.initSelection()}return i(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=a})},function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(t))return r(t,e,n);if(c.nodeList(t))return i(t,e,n);if(c.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function r(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function i(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return u(document.body,t,e,n)}var c=n(6),u=n(5);t.exports=o},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){r.off(t,o),e.apply(n,arguments)}var r=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;for(o;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n},function(t,e,n){var o,r,i;!function(a,c){r=[t,n(0),n(2),n(1)],o=c,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e,n,o){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var l=r(e),s=r(n),f=r(o),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),p=function(t){function e(t,n){i(this,e);var o=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return c(e,t),h(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===d(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,f.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return u("action",t)}},{key:"defaultTarget",value:function(t){var e=u("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return u("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(s.default);t.exports=p})},function(t,e){function n(t,e){for(;t&&t.nodeType!==o;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var o=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}t.exports=n},function(t,e,n){function o(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function r(t,e,n,r,i){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return o(t,e,n,r,i)}))}function i(t,e,n,o){return function(n){n.delegateTarget=a(n.target,e),n.delegateTarget&&o.call(t,n)}}var a=n(4);t.exports=r},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}t.exports=n}])});
