// 123
window.easeFunc = {                            //效果链接：https://greensock.com/customease
    'sineIn': 'Linear.easeNone',              //从慢缓慢加速
    'sineOut': 'Power2.easeOut',              //从快缓慢减速
    'sineInOut': 'Power2.easeInOut',          //从满缓慢加速到中间点后缓慢减速
    'backIn': 'Back.easeIn',                  //稍微慢速后退后快速向前
    'backOut': 'Back.easeOut',                //快速向前超越终点后缓慢退回终点
    'backInOut': 'Back.easeInOut',            //稍微后退后快速向前超越终点后缓慢退回终点
    'circIn': 'Circ.easeIn',                  //慢速加速到中点后快速加速到终点
    'circOut': 'Circ.easeOut',                //
    'circInOut': 'Circ.easeInOut',
    'bounceIn': 'Bounce.easeIn',
    'bounceOut': 'Bounce.easeOut',
    'bounceInOut': 'Bounce.easeInOut',
    'elasticIn': 'Elastic.easeIn',
    'elasticOut': 'Elastic.easeOut',
    'elasticInOut': 'Elastic.easeInOut',
    'quadIn': 'Power1.easeIn',
    'quadOut': 'Power1.easeOut',
    'quadInOut': 'Power1.easeInOut',
    'cubicIn': 'Expo.easeIn',
    'cubicOut': 'Expo.easeOut',
    'cubicInOut': 'Expo.easeInOut'
}
if(!window.android){
    window.android = null;
}
window.CallNative = function (jsonObj) {
        var jsonString = JSON.stringify(jsonObj);
		//jex().jalert("1")
        if (android) {
			//jex().jalert("2"+'---'+jsonString)
            android.call(jsonString);
        }else if(jsonObj["method"]!="logInHx"){
			//jex().jalert("该功能需要在dapp上使用")
		}
}
window.NativeCallback = function (jsonString) {
	console.log('NativeCallback', jsonString);
    var jsonObj = JSON.parse(jsonString);
    //if(jsonObj.method!='talkingMembers' || jsonObj.method!='photo')jex().jalert(jg_aj.idus+"---"+jsonObj.method+jsonObj.result)
	if (jsonObj.result !== 'OK') {
		outputLog(true, jsonObj.method, jsonObj.result);
		return;
	}
	switch (jsonObj.method) {
		case 'logInHx':
		//jex().jalert('登录环信成功');
      outputLog(false, 'logInHx', UserName, '登录环信成功！');
      break;
    	case 'photo':
		//jex().jalert(JSON.stringify(jsonObj))
		    if(jg_aj.phototype==1){
                window['换图']({obj:T.findObj(jg_aj.photo),img:jsonObj.imgUrl});
				 
				jex().jalert("上传图片成功...");
			}else{
				csend(["",{"dba": ["聊天内容", {"图片区图片":jsonObj.imgUrl+''}, "{_id:'"+jg_aj.photo.split('-')[0]+"'}", { "upsert": 1 }]},jg_aj.curproj+"_游戏容器d"]);
				jex().jalert("上传图片成功，3秒后刷新...");
			}
            
			break;
		case 'startConference':
		jex().jalert('创建实时会议成功，会议id为'+jsonObj.conferenceId);
      		outputLog(false, 'startConference', '创建实时会议成功，会议id为', jsonObj.conferenceId);
			
      		break;
		case 'recvJoinConference':
		jex().jalert('收到实时会议邀请，id为'+jsonObj.conferenceId);
      		outputLog(false, 'recvJoinConference', '收到实时会议邀请，id为', jsonObj.conferenceId);
			
      		break;
    	case 'joinConference':
		jex().jalert('已加入实时会议')
      		outputLog(false, 'joinConference', '已加入实时会议');
			
      		break;
    	case 'inviteUser':
		jex().jalert('邀请'+jsonObj.userName+'加入会议')
      		outputLog(false, 'inviteUser', '邀请', jsonObj.userName, '加入会议');
			
      		break;
    	case 'memberStatus':
		jex().jalert(jsonObj.userName+'已经'+(jsonObj.status==='joined'?'加入':'离开')+'会议')
      		outputLog(false, jsonObj.userName, '已经',
        	(jsonObj.status==='joined'?'加入':'离开'),'会议');
			
      		break;
    	case 'talkingMembers':
      		if (jsonObj.talkingMembers) {
				//jex().jalert(jsonObj.talkingMembers.join(',')+'正在说话')
        		$('#talking').text(jsonObj.talkingMembers.join(',')+'正在说话');
				
      		} else {
        		//$('#talking').text('');
      		}
			
      		break;
		case 'leaveConference':
		jex().jalert('已退出实时会议')
      		outputLog(false, 'leaveConference', '已退出实时会议');
			
      		break;
		case 'signUpHx':
			//jex().jalert('创建环信账号成功！')
      		outputLog(false, 'logInHx', UserName, '创建环信账号成功！');
              break;
        case 'backPressed':                     //2018-6-19   增加返回键的捕捉
            if (jex('#女神养成记_场景h').length > 0) {                              //在女神首页
                CallNative({
                    method: 'finishActivity'
                });
            } else if (jex().getv('ref', 0) != 0 && jex('#ref_box').length > 0) {   //不在女神首页，有ref，有返回按钮
                jex('#ref_box')[0].click();
            } else {                                                            //不在女神首页，没有ref，没有返回按钮
                T.mndj('女神养成记_首页按钮');
                window['显示']({obj:'菜单层'});
            }
            break;
	}
	
}
/**
 * Array.prototype.includes polyfill
 * https://tc39.github.io/ecma262/#sec-array.prototype.includes
 */
if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
        value: function (searchElement, fromIndex) {
            'use strict';
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            let o = Object(this);
            let len = o.length >>> 0;
            if (len === 0) {
                return false;
            }
            let n = fromIndex | 0;
            let k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
            while (k < len) {
                if (o[k] === searchElement) {
                    return true;
                }
                k++;
            }
            return false;
        }
    });
}
// 扩展原生Date.format
if (!Date.prototype.format) {
    Date.prototype.format = function (format) {
        let o = {
            "M+": this.getMonth() + 1, //month
            "d+": this.getDate(), //day
            "h+": this.getHours(), //hour
            "m+": this.getMinutes(), //minute
            "s+": this.getSeconds(), //second
            "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
            "S": this.getMilliseconds() //millisecond
        }
        if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
            (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (let k in o) if (new RegExp("(" + k + ")").test(format))
            format = format.replace(RegExp.$1,
                RegExp.$1.length == 1 ? o[k] :
                    ("00" + o[k]).substr(("" + o[k]).length));
        return format;
    }
}
/**
 * 
 */
window.funexe = function (text) {
    sj.obj['jai_命令编辑'].text = text;
    jex('#jai_命令编辑').val(text);
    T.func();
}

window.moltoggle = function (obj) {
    if (jg_aj.editm == 0) {
        jg_aj.editm = 1;
    } else {
        jg_aj.editm = 0;
    }
    var kzzx = (sj.obj['jai_控制中心']);

    if (kzzx) {
        if (T.isEgret(obj)) {
            kzzx.$setVisible(jg_aj.editm == 1);
        } else {
            kzzx.visible = (jg_aj.editm == 1);
        }
    } else {
        T.func(obj);
    }

}
/**
 * 
 */
window.jpn = function(obj) {
    if (obj && obj.name) {
        let on = obj.name;
        if (on.indexOf('-') > 0) on = on.split('-')[1];
        if (on.indexOf("jai") == 0) return true;
        jg_aj.opid = obj.name;
        if (jg_aj.editm) T.func(jg_aj.opid)
    }
}

/**
 * ------------------------------------------------------------------
 * T模块：包含前端可调用各种方法
 * ------------------------------------------------------------------
 */
function Ts() {
    /**
     * 根据传入的对象判断是否白鹭
     * @param {Object} [obj] - 任意对象
     * @return {Boolean}
     */
    this.isEgret = function (obj) {
        return obj == undefined ? (jg_aj.sj && jg_aj.sj.eg==1) : typeof (egret) != 'undefined' && (typeof (egret.HashObject) == 'function' && (obj instanceof egret.HashObject) || typeof(p2)!='undefined' && typeof(p2.EventEmitter)=='function'&&(obj instanceof p2.EventEmitter));
    };
    /**
     * 对每个调用该方法的方法，记录调用时间。并根据传入的时间，返回调用冷却时长是否冷却完毕
     * @param {String} [name=arguments.callee.caller.name||'window'] - 调用方法名，默认自动取调用方法名（若为空则认为是由window调用）
     *                 PS: 由于严格模式下不允许访问arguments.callee，所以必须传入name参数
     * @param {Number} [cd=3000] - 冷却时长(ms)
     * @return {Boolean} - 是否冷却完毕
     */
    this.cd = function (name, cd = 3000) {
        name = name || 'window';
        let previousInvokeTime = T.cd.map[name] || 0, now = Date.now();
        if (now > previousInvokeTime + cd) {
            T.cd.map[name] = now;
            return true;
        } else {
            // console.log(`冷却中，已阻止${name}执行 in T.cd`);
            return false;
        }
    };
    this.cd.map = {}; // 用于存储方法最近被调用的时间戳
	/**
	 * 创建一个H5对象
	 */
    this.getdiv = function (aj) {
        var a = T.merge({ tag: "div", ca: " ", style: { width: '10%', height: '10%', position: 'absolute' }, attr: {}, id: 'dom' + db.getrd(4), p: null }, aj);
        var retdiv = [];
        var str = '';
        var p = a.parent;
        typeof p == 'string' && (p = document.getElementById(p));
        typeof a.ca == 'string' && (a.ca = a.ca.split('`'));
        for (var ica in a.ca) {
            var strid = a.id + '_' + ica;
            if (document.getElementById(strid)) {
                var newdiv = document.getElementById(strid);
                for (var i in a.style) {
                    newdiv.style[i] = a.style[i];
                }
                for (var i in a.attr) {
                    newdiv[i] = a.attr[i];
                }
                jex(newdiv).html(a.ca[ica])
                //retdiv.push(newdiv);
                //str+=newdiv.outerHTML;
            } else {
                var sty = '', sattr = '';
                for (var i in a.style) sty += ' ' + i + ':' + a.style[i] + ';'
                for (var i in a.attr) sattr += ' ' + i + "='" + a.attr[i] + "' ";
                if(a.tag=='input'){
                    str += '<' + a.tag + ' id=' + strid + " style='" + sty + "' " + sattr + ' value="' + a.ca[ica] + '" />'
                }else{
                    str += '<' + a.tag + ' id=' + strid + " style='" + sty + "' " + sattr + ">" + a.ca[ica] + "</" + a.tag + '>'
                }
            }
        }
        if (p != null) {
            if (retdiv.length > 0) {
                for (var item in retdiv) {
                    (item.parentNode != p) && p.appendChild(item);
                }
                return retdiv;
            } else {
                jex(p).append(str);
                return str;
            }
        }
        return str;

    };
    this.hec = function (obj1, obj2,i=0) {
		if(  Object.keys(obj1).length == 2 && obj1._id ) {
			obj1 = sj.clas[obj2._id + '-' + obj1._id] || obj1;
        	obj1._id = T.hqyjm(obj1._id);
			console.error("如果出现，则不能删除此段。obj1:"+ JSON.stringify(obj1))
		}
		
        var objr;
		 
		 if(obj2.ridclas){
			var rname=obj1._id+'＃'+obj2.ridclas.replace(/_/,'');
			 
			objr=sj.jui[rname];
			if(!objr&&sj.jui[obj2.ridclas]){
				 
				objr=sj.jui[rname]=T.dcopy(sj.jui[obj2.ridclas])
			}
			if(objr && !objr.ifmerge){
			  if(obj1.act){ objr.act=this.merge(this.dcopy(obj1.act),objr.act)}
			  if(obj1.actt){ objr.actt=this.merge(this.dcopy(obj1.actt),objr.actt)}
			  if(obj1.style){ objr.style=this.merge(this.dcopy(obj1.style),objr.style)}
              if(obj1.attr){ objr.attr=this.merge(this.dcopy(obj1.attr),objr.attr)}
              if(obj1.func){ objr.func=this.merge(this.dcopy(obj1.func),objr.func)}
			  
			  if(!objr.ca)objr.ca=obj1.ca;
			  objr.pid=obj1.pid;
			  objr.ifmerge=1
			}		
			 
		}
		 var aj  ={};
		 if(objr){
			 aj  =   this.dcopy(objr,"data");
		 }else{
			 aj  =   this.dcopy(obj1,"data");
		  }
		 
		aj.style = aj.style || {};
		
		  
        for (var iii in obj2) {
            
                if (typeof (aj[iii]) == 'object' && typeof (obj2[iii]) == 'object') {
                    this.merge(aj[iii], obj2[iii]);
                } else {
					if(iii!='_id'&&aj[iii]!=obj2[iii])aj[iii]=obj2[iii];
                    // window['T'].setp(aj, iii, obj2[iii]);
                    //let _pa = (iii + '').split('.');
                    //_pa.reduce((pre, cur, idx) => (idx != _pa.length - 1 ? pre[cur] || (pre[cur] = {}) : (pre[cur] = obj2[iii])), aj);
                }
            
            if (iii == 'pid') {
                if (obj2[iii].indexOf('-') > 0||obj2[iii].indexOf('_游戏容器') > 0) {
                    obj2.style = obj2.style || {};
                   
                    if(!aj.style.w||(aj.style.w+'').includes('%'))
					 aj.style.w = obj2.style.w = obj1.style.pidw||obj2.style.pidw || "100%"; // pidw指定座位中的宽度
                    if(!aj.style.h||(aj.style.h+'').includes('%'))
					 aj.style.h = obj2.style.h = obj1.style.pidh ||obj2.style.pidh || "100%"; // pidh指定座位中的高度
                    aj[iii] = obj2[iii];
                } else {
                    if (obj2[iii] != obj1[iii]) aj[iii] = obj2[iii] + '-' + obj1[iii];
                }    //站位


            }
        }
        aj._id = obj2._id + "-" + obj1._id;
		if(aj._id.includes('用户＃'))aj._id=aj._id.split('＃')[0];//2019.1.26 确保用户的clas唯一 解决 GAC3_用户＃2
		let pclas=aj;
		if(obj2.pclasid){  
			pclas=sj.clas[obj2.pclasid];
		} 
			//if(JSON.stringify(obj2.style).indexOf("{v")>0) 
		aj=getbands(aj,'',aj,pclas||aj,i);  //ret,vv,jui, pclas,i
		
		
        return aj;
    };
    /**
     * 模拟执行换图指令
     * @param {String} url - 替换的图片的链接
     * @return {Boolean} 是否成功
     */
    this.ht = function (url) {
        // var si = bg.indexOf('url(');
        // var ei = si!=-1 ? bg.indexOf(')', si) : -1;
        // if(si==ei) return false;
        sj.obj['jai_命令编辑'].text = ('换图：' + url);
        T.func();
        sj.obj['jai_命令编辑'].text = ('');
        return true;
    };
    /**
     * 返回传入字符串在所提供的参数环境下解析得到的数字
     * @param {Number} base - x y w h
     * @param {String} pobj - 父对象
     * @param {Object} style - aji.style或者类似style的对象
     * @param {Number} aj.ii - data序号
     * @param {Number} aj.iii - clas序号
     * @return {Number}
     */
    this.deval = function (base, pobj, style, aj) {
        'use strict';
		style = style || { x: 0, y: 0, w: 0, h: 0 };
        let _style = T.dcopy(style); // 函数内部不修改外部数
        // 2018/07/02   去掉只对飞白鹭元件的判断
        // if (!T.isEgret(pobj)) {
            base=='width' && (base='w', _style.w=_style.width);
            base=='height' && (base='h', _style.h=_style.height);
        // }
        let _base = 0;
        if (pobj) { } else {
            console.log("aji")
            return 0;
        }
        if (['x', 'X'].some(n => base.includes(n)) || base == "w"||base=="bgimgw") _base = pobj.width;
        if (['y', 'Y'].some(n => base.includes(n)) || base == "h"||base=="bgimgh") _base = pobj.height;
        aj = aj || { ii: 0, iii: 0 };
        aj.obj = aj.obj || { width: 0, height: 0, name: '' };
		
        _style.x = _style.x == undefined ? '50%' : _style.x;
        _style.y = _style.y == undefined ? '50%' : _style.y;
        _style.w = _style.w == undefined ? (aj.obj.width + '') || '0' : _style.w;
        _style.h = _style.h == undefined ? (aj.obj.height + '') || '0' : _style.h;
        let ii = aj.ii || 0;
        let iii = aj.iii || 0;

        let retbackup;
        let ret = retbackup = (_style[base] + '') || '0';
        if (ret == '{no}') return ret;
        ret == 'undefined' && (ret = '0');
        if (ret.indexOf('%') >0){
		  
            ret = parseFloat(ret) * 0.01 * _base;
        }else{
            ret = ret.replace(/px/g, '');
            if (ret.indexOf('{') != -1) {
                // let _egret = jex().getv('eg', -1)==1;
                let _egret = T.isEgret(pobj);
				let _mw = jex().getcw();
               	let _mh = jex().getch();
                let _cw = aj.sw || (_egret ? egret.MainContext.instance.stage.stageWidth : _mw);
                let _ch = aj.sh || (_egret ? egret.MainContext.instance.stage.stageHeight : _mh);
                let _cwh = Math.min(_cw, _ch);


                // let _pixOrPercent = ['{cwh}', '{cw}', '{ch}', '{w}', '{h}', '{pw}', '{ph}', '{px}', '{py}'].some(w => ret.indexOf(w) > 0);
                // cwh:canvas宽高的最小值
                ret = ret.replace(/\{cwh\}/g, _cwh);
                ret = ret.replace(/\{cw\}/g, _cw);
                ret = ret.replace(/\{ch\}/g, _ch);
                // 当前游戏窗的宽高（应用市场没有游戏窗）
                if (jg_aj.curproj != '应用市场' && ( ret.includes('{ww}') ||  ret.includes('{wh}' ))) {

                    let gameWindow = T.findObj('游戏窗' + T.dqcj()) || { width: _mw, height: _mh };
                    ret = ret.replace(/\{ww\}/g, gameWindow.width);
                    ret = ret.replace(/\{wh\}/g, gameWindow.height);
                }
                // 父亲的x,y,w,h
                ret = ret.replace(/\{pw\}/g, parseFloat(pobj ? (pobj.width || 0) : 0));
                ret = ret.replace(/\{ph\}/g, parseFloat(pobj ? (pobj.height || 0) : 0));
				if (ret.includes('{')) {
						 ret = ret.replace(/\{px\}/g, `(${parseFloat(pobj ? (pobj.x || 0) : 0)})`);
						  ret = ret.replace(/\{py\}/g, `(${parseFloat(pobj ? (pobj.y || 0) : 0)})`);
						  
						   // 屏幕宽高
						  ret = ret.replace(/\{mw\}/g, _mw);
						  ret = ret.replace(/\{mh\}/g, _mh);
						  // 最近一次点击，相对与当前游戏容器坐标
						  ret = ret.replace(/\{ex\}/g, jg_aj.ex);
						  ret = ret.replace(/\{ey\}/g, jg_aj.ey);
		  
						  // 父亲的x，y轴比例
						  ret = ret.replace(/\{pscalex\}/g, `(${parseFloat(pobj ? (pobj.scaleX || 1) : 1)})`);
						  ret = ret.replace(/\{pscaley\}/g, `(${parseFloat(pobj ? (pobj.scaleY || 1) : 1)})`);
						  // 父亲在屏幕的x,y
						  if (ret.indexOf('{psx}') != -1 || ret.indexOf('{psy}') != -1) {
							  let _psp = pobj.parent && _egret ? Jui.getSingle().getstagePoint(0.5 * pobj.width, 0.5 * pobj.height, pobj) : { x: pobj.x, y: pobj.y };
							  ret = ret.replace(/\{psx\}/g, `(${parseFloat(_psp.x)})`);
							  ret = ret.replace(/\{psy\}/g, `(${parseFloat(_psp.y)})`);
						  }
						  
						   // idx - 该obj名字中的末尾数字
						  if (ret.indexOf('{idx}') != -1) {
							  let idx = T.geti(aj.obj.name);
							  idx == undefined && (idx = T.son(pobj, aj).indexOf(aj.obj) + 1);
							  ret = ret.replace(/\{idx\}/g, idx);
						  }
						  // len - aj传入的len，默认为pobj中除去名字中带'zi'的孩子总数
						  if (ret.indexOf('{len}') != -1) {
							  let len = aj.len || T.son(pobj, aj).length;
							  ret = ret.replace(/\{len\}/g, len);
						  }
						  
						  
						  ret.includes('{w}') && (ret = ret.replace(/\{w\}/g, !aj.obj.width ? ['w', 'width'].includes(base) ? 0 : parseFloat(T.deval('w', pobj, style, aj)) : aj.obj.width));
						  ret.includes('{h}') && (ret = ret.replace(/\{h\}/g, !aj.obj.height ? ['h', 'height'].includes(base) ? 0 : parseFloat(T.deval('h', pobj, style, aj)) : aj.obj.height));
						  ret = ret.replace(/\{sx\}/g, `(${aj.obj.scaleX == undefined ? 1 : aj.obj.scaleX})`);
						  ret = ret.replace(/\{sy\}/g, `(${aj.obj.scaleY == undefined ? 1 : aj.obj.scaleY})`);
						  ret = ret.replace(/\{rot\}/g, `(${aj.obj.rotation})`);
						  // 速度，用于循环移动
						  ret = ret.replace(/\{spd\}/g, `(${aj.speed == undefined ? 0.066 : aj.speed})`);
						  // if (!['w', 'h'].includes(base)) {
						  //     ret.includes('{w}') && (ret = ret.replace(/\{w\}/g, aj.obj.width || parseFloat(T.deval('w', pobj, style, aj) || 0)));
						  //     ret.includes('{h}') && (ret = ret.replace(/\{h\}/g, aj.obj.height || parseFloat(T.deval('h', pobj, style, aj) || 0)));
						  // } else {
						  //     ret = ret.replace(/\{w\}/g, '');
						  //     ret = ret.replace(/\{h\}/g, '');
						  // }
						  // 各种随机
						  // 0~1浮点数
						  ret = ret.replace(/\{r\}/g, Math.random());
						  // -1或1
						  ret = ret.replace(/\{rs\}/g, `(${(Math.random() < 0.5 ? -1 : 1)})`);
		  
						  ret = ret.replace(/\{x\}/g, `(${aj.obj.x || 0})`);
						  ret = ret.replace(/\{y\}/g, `(${aj.obj.y || 0})`);
				}
            }
            if (ret == '()' || ret == '(({w}))') {
                ret = '(0)';
            }
            if (/\{v[\d]\}/.test(ret)==false) { //不包括 {v0} {v1}
				ret = parseFloat(isNaN(ret)?T.doeval(ret):ret);
			}
          
        }
		if(_style.bili){
			if(T.isEgret()){
				if(!_style.bilipt){
					if(base == 'w'){
						ret = (aj.obj.height || T.deval('h', pobj, style, aj)) * _style.bili;
					}
				}else{
					if(base == 'w'&&egret.MainContext.instance.stage.stageWidth/egret.MainContext.instance.stage.stageHeight>=_style.bili){
						ret = (aj.obj.height || T.deval('h', pobj, style, aj)) * _style.bili;
					}else if(base == 'h'&&egret.MainContext.instance.stage.stageWidth/egret.MainContext.instance.stage.stageHeight<_style.bili){
						ret = (aj.obj.width || T.deval('w', pobj, style, aj)) / _style.bili;
					}
				}
			}else{
				if(base == 'w'){
					ret = (aj.obj.height || T.deval('h', pobj, style, aj)) * _style.bili;
				}
			}
        }
        if (ret==null || ret!=ret) return retbackup;
        return ret;
    };
    this.dofunc =function(ssfun){
        var ssa=ssfun.split('(');
    	if(	window[ssa[0]]){
			 if(ssa.length>1){
				  var arg=ssa[1].substring(0,ssa[1].length-1);
				  if(arg.indexOf(':')>0){
					  try{
						  arg= (window.ifeval? eval('('+arg+')'): JSON.parse(arg)  ) ;
					  }catch(error){
                        // 2018/12/05 尝试将arg处理成标准的json格式（指将'替换为"，并确保所有key被"包着），然后再尝试一次JSON.parse
                        try {
                            _arg = arg.replace(/'/g,'"').replace(/[{,]{1}[^":,]+:/g, function (str) {
                                return str[0] + '"' + str.substr(1, str.length-2) + '"' + str[str.length-1];
                            });
                            arg = JSON.parse(_arg);
                        } catch (error2) {
                            // 还错就没救了
                        }
                      }
	  
				  }
				 window[ssa[0]](arg);
			 }else{
				 window[ssa[0]]
			 }
        }
    };
    this.doeval = function (str,pclas) {
        var arr=[]; 
		str=str+"";
		var ostr=str;
		var stra=str.split(/\n/);
		if(stra.length>1){
			var ret='';
			stra.forEach((s,idx) => {
				ret+=T.doeval(s,pclas)+"\n";
			});
			return ret;
		}
		 if(str.includes('db.gett()')) {
		 	str=str.replace('db.gett()',db.gett());
		 }
        if(str.indexOf('[')==0) {
			str.substring(1,str.length-1).split(',').forEach((s,idx) => {
				arr.push(T.doeval(s,pclas));
			})
			return arr;
		}
        if(str.indexOf('if(')==0){
            var strArr=str.split('else{');
            var i = strArr[0].match(/(if\()(.*)(\)\{)(.*)(\})/);
            if(T.doeval(i[2])){
                T.dofunc(i[4]);
            }else{
                if(strArr.length>1){
                    T.dofunc(strArr[1].slice(0,-1));
                }
            }
        }
	 
		//str = "T.fsdfs('dfdfw',0,1).fewfds=";
        //var t=str.match(pattern);
		 var pa = str.match(/(pclas|jg_aj)\.([\u4e00-\u9fa5_a-zA-Z0-9]+)/g);
		pa && pa.forEach((s,idx) => {
			let t = s.match(/(pclas|jg_aj)\.([\u4e00-\u9fa5_a-zA-Z0-9]+)/);
			let v = t[1]=="pclas"? pclas[t[2]]: window[t[1]]&&window[t[1]][t[2]];
			str = str.replace(s, typeof(v)=='string'?'"'+v+'"':v);
		});	
		
		
		var ta = str.match(/([a-zA-Z]+)((\(\))?)\.(\w+)(\()(.*?)(\)[\.]?)([\u4e00-\u9fa5_a-zA-Z0-9]*)/g);
		ta && ta.forEach((s,idx) => {
			let t = s.match(/([a-zA-Z]+)((\(\))?)\.(\w+)(\()(.*?)(\)[\.]?)([\u4e00-\u9fa5_a-zA-Z0-9]*)/);
			let v = "";
			
			 var strarg=[t[6]];
			if (strarg.indexOf("{")==0){
			  strarg = [JSON.parse(t[6].replace(/'/g, '"'))];
			}else{
			  strarg = t[6].split(/,(?=(?:[^']*(?:'[^']*')?[^']*)*$)/);
			  strarg.forEach((ss,idnx)=>{ if(ss.substring(0,1)=='"'||ss.substring(0,1)=="'") strarg[idnx]=ss.substring(1,ss.length-1) })	 
			}
            if (t[2] == "()") {
              v = window[t[1]]()[t[4]](strarg[0],strarg[1],strarg[2],strarg[3],strarg[4],strarg[5]);
            }
            else {
              v = window[t[1]][t[4]](strarg[0],strarg[1],strarg[2],strarg[3],strarg[4],strarg[5]);
            }
			
			if(v && t[8] ){
				if( t[8]!="substring" && t[8]!="replace" && t[8]!="toFixed" ){				
				 	v =v[t[8]];
					str = str.replace(s, typeof(v)=='string'?"'"+v+"'":v);//
				}else{
					str ="('"+v+"')."+ t[8]+str.split(t[8])[1];
				}
			}else{  
				str = str.replace(s, typeof(v)=='string'?"'"+v+"'":v);//typeof(v)=='string'?"'"+v+"'": 2019.9.20 恢复加引号 因为 T.doeval("(T._ctrl().idus==jex().getv('idus'))?0:1")
				 
			}
		});
       	
		
		
		//if(t&&t.length>3)arr.push(T[t[2]](t[4].replace(/'/g,''))[t[6]]);
       // if(p&&p.length>0)arr.push(pclas[p[2]]);
         stra=str.split('.toFixed(');
		if(str.includes('substring')) stra=str.split('.substring(');
        var retd= binding.eval(stra[0],arr||[]);
		if(retd==null)retd=stra[0];
		if(ta||pa)console.log("binding.eval "+ostr+" "+stra[0]+"  retd="+retd);
        if(stra.length>1){
           
			if(str.includes('substring'))  {
				 var f = str.match(/(.substring\()(\d+)(\,?)(\d*)/);
				 retd=f[4]?retd.substring(parseInt(f[2]),parseInt(f[4])):retd.substring(parseInt(f[2]));
			}else{
				 var f = str.match(/(.toFixed\()(.*?)(\))/);
				 if(f && typeof f[2]=="string") f[2]=T.doeval(f[2],pclas);
				  retd=retd.toFixed(f&&f[2]||0);
			}
          
        }
        return retd
    };
    /**
     * 停止obj上的所有dodz
     */
    this.undodz = function (obj) {
        'use strict';
        typeof (obj) == 'string' && (obj = T.findObj(obj));
		if (obj) {
			obj.dzSymbols = [];
        	T.isEgret(obj) ? egret.Tween.removeTweens(obj) : '';
		}
    };
    /**
     * 执行一系列动作
     * @param {Object} obj - 执行一系列动作的对象
     * @param {Array} acts - 一系列动作，数组内不同元素的动作阻塞执行，同一元素内的动作非阻塞执行
     * @param {Boolean} aj.broadcast - 是否将动作已广播的方式传给服务器
     * @param {Boolean} [aj.clear=true] - 是否将obj身上的tween动画去除
     */
    this.dodz = function (obj, acts, aj) {
        'use strict';
        //console.time('T.dodz');
        aj = aj || {};
        aj.clear = aj.clear==undefined ? true : aj.clear;
        let _dzSymbol = Symbol(); // 这套动作的唯一识别id
        typeof (obj) == 'string' && (obj = T.findObj(obj));
        obj.dzSymbols ? obj.dzSymbols.push(_dzSymbol) : obj.dzSymbols = [_dzSymbol]; // 存储obj的所有dodz记录

        let _pn = ['x', 'y', 'width', 'height', 'scaleX', 'scaleY', 'alpha', 'rotation'];
        let _props = {}, id = obj.id;
        _pn.forEach(n => _props[n] = T.dcopy(obj[n]));
        let _egret = T.isEgret(obj);
        aj.clear && _egret && egret.Tween.removeTweens(obj);
        acts = T.dcopy(acts);
        for (let i = acts.length, si = i; i--;) {
            let _act = acts[i];
            _act['条件']!=undefined && (acts.splice(i, (window.ifeval? eval(_act['条件']): T.doeval(_act['条件']))  ? 1 : si - i), si = i);
        }
        let __acts = [].concat(acts);
        let _p = __acts[__acts.length - 1] || {};
        if (_p instanceof Array || _p['动作']) {
            _p = {};
        } else {
            __acts.pop();
        }
        if (_p.t0) { // 有t0，认为是需要严格根据时间执行的，计算此刻obj的位置
            let now = db.gett(), t0 = _p.t0, dt = now - t0, interval = _p.time || 1000;
            // console.log('now$1, t0$2', now, t0);
            let idx = Math.floor(dt / interval), mod = dt % interval;
            let sp = {}; // 起始位置
            if (idx < 0) {
                console.log('db.gett()$1比t0小$2', now, _p.t0);
                idx = 0;
            }
            if (idx < acts.length - 1) {
                sp = { x: acts[idx].x, y: acts[idx].y };
                sp.x = T.deval('x', obj.parent, sp, { obj });
                sp.y = T.deval('y', obj.parent, sp, { obj });
            } else {
                sp = { x: acts[acts.length - 1].x, y: acts[acts.length - 1].y };
                sp.x = T.deval('x', obj.parent, sp, { obj });
                sp.y = T.deval('y', obj.parent, sp, { obj });
                // console.error(`解析有t0的act$1时，调用时已超出执行时间，obj$2 in T.dodz`, acts, obj);
                return 0;
            }
            let ep = { x: acts[idx + 1].x, y: acts[idx + 1].y };
            ep.x = T.deval('x', obj.parent, ep, { obj });
            ep.y = T.deval('y', obj.parent, ep, { obj });

            obj.x = sp.x + (ep.x - sp.x) * mod / interval;
            obj.y = sp.y + (ep.y - sp.y) * mod / interval;
            // 生成新的acts
            acts = acts.slice(Math.max(1, idx));
            acts[0].time = interval - mod;
        }
 
        let _doActions = function* (_acts) {
            let result;
            try {
                for (let ag of _acts) {
                    ag = [].concat(ag);
                    result = yield T.ev(obj, ag, _dzSymbol);
                }
            } catch (e) {
                console.log(e);
            }
            if (!obj.dzSymbols.includes(_dzSymbol)) return;
            obj.dzSymbols.splice(obj.dzSymbols.indexOf(_dzSymbol), 1); // 把动作symbol去掉
			if(_p.loop==true)_p.loop=10000;
            if (_p.loop) {
				_p.loop--;
                let _delay = T.deval("delay", obj.parent, _p, { obj }) || 0;
                if(obj["loopdodz"])clearTimeout(obj["loopdodz"]);
                obj["loopdodz"]=_setTimeout(function () {
                    _pn.forEach(n => obj[n] = _props[n]);
                    T.dodz(obj, acts, aj);
                }, _delay);
            } else {
                aj.cb && aj.cb(obj, acts, aj);
            }
        }
        T.zsev(_doActions, [__acts]);
		
		 if (aj.broadcast || _p.broadcast) { // 广播该动作
            aj.broadcast = _p.broadcast = 0;
			let evobj={};
            let id = obj.name//obj.name.split('-')[1] ||obj.name //, ev = `T.dodz('${id}',${JSON.stringify(acts)},${JSON.stringify(aj)})`;
            for (let k1 in acts) {
                // if (T.isEgret(acts[k1])) acts[k1] = acts[k1].name;
                for (let k2 in acts[k1]) {
                    if (acts[k1][k2]&&T.isEgret(acts[k1][k2])) acts[k1][k2] = acts[k1][k2].name;
                }
				evobj[acts[k1]['动作']]=acts[k1];
				evobj[acts[k1]['动作']].obj=id;
				//delete evobj[acts[k1]['动作']]['动作'];
            }
            // for (let k2 in aj) {
            //     if (T.isEgret(acts[k2])) acts[k2] = acts[k2].name;
            // }
            
			
 			let sendss={ev:evobj};
			if(aj.sendex) sendss.sendex=aj.sendex;
			if(aj.sendin) sendss.sendin=aj.sendin;
			
            csend(["ss", sendss, id]);
        }
        //console.timeEnd('T.dodz');
        // console.log('$1', acts);
    };
    /**
     * 阻塞执行生成器函数内的所有步骤
     * @param {GeneratorFunction} g - 生成器函数
     * @param {Array} args - 参数数组，这里注意，如果只有一个参数且该参数为数组，应传入[array]而不是直接传array
     */
    this.zsev = function (g, args) {
        'use strict';
        args = [].concat(args);
        let it = g.apply(this, args);
        function go(result) {
            if (result.done) {
                return result.value;
            } else {
                return result.value.then(
                    value => go(it.next(value)),
                    err => go(it.throw(err))
                );
            }
        }
        go(it.next());
    };
    /**
     * 返回一个Promise对象，非阻塞执行一组动作，都完成后操作成功
     * @param {Object} obj - 执行一组动作的对象
     * @param {Array} actionGroup - 一组异步执行的动作
     * @return {Promise}
     */
    this.ev = function (obj, actionGroup, dzSymbol) {
        'use strict';
        let counter = 0;
        return new Promise(function (resolve, reject) {
            for (let a of actionGroup) {
                // a.obj = obj;
                a.obj = a.obj || obj;
                a.cb = function () {
                    // console.log(`${obj.name}的${a.动作}已完成`);
                    counter++;
                    if (counter == actionGroup.length) resolve(true);
                };
                if (!obj.dzSymbols.includes(dzSymbol)) { console.log('找不到动作symbol，停止dodz'); reject(); }
                try {
                    T.isEgret(obj) ? Jui.getSingle().acts(a) : doAct(a);
                } catch (err) {
                    console.log(err);
                }
            }
        });
    };

    /**
     * 返回调整所给的对象的位置
     * @param {Array.<TJH5|egret.HashObject>|TJH5|egret.HashObject|String} objects - 需要定位的对象数组或者容器或对象名
     * @param {Number} type - 调整规则 {0:矩阵排列,1:随机屏幕外位置,2:极坐标排列,3:伪3d（xy平面极坐标）排列,4:瀑布流}
     * @param {Number} x - 起始x轴坐标
     * @param {Number} y - 起始y轴坐标
     * @param {Object} aj - 额外数据 {sx:'x,-y',width,height,marginX,marginY,anchorX,anchorY,offsetX,offsetY,beginAngle,endAngle,radius,radiusOffset,modify,zoomRate,alphaRate,dzt,jgt,cb,include,exclude,plane,col}
     * @param {String} aj.sx - 该参数仅用于矩阵排列，用于规定排序顺序，默认'x,-y'，代表先由左到右，再由上到下排列
     * @param {Number} aj.width,aj.height - 表示排列的范围，默认为容器的width和height，若没有容器，则为0
     * @param {Number} aj.marginX=0,aj.marginY=0 - 表示排列的对象之间的间隔，如marginX=5，-5-obj1-5--5-obj2-5...，即obj1与obj2之间相距10
     * @param {Number} aj.anchorX=0.5,aj.anchorY=0.5 - 表示排列对象的锚点，取值范围[0,1]
     * @param {Number|String} aj.offsetX=0,aj.offsetY=0 - 表示每行、列偏差值，类似T.deval，会将{n}替换为该对象的w或h，{pn}替换为同一行中上一个对象的w或h，{ci}替换为当前列序号(这个只在offsetX中存在)，{ri}替换为当前行序号。应用实例可参考clas表的_id:'jai_对话集'
     * @param {Number} aj.rotation - 表示排列后的旋转角度，仅用于极坐标排列，如不设则旋转角为排列后的结果
     * @param {Number} aj.beginAngle=0,aj.endAngle=360 - 代表排列始末角度，仅用于极坐标排列、伪3d排列
     * @param {Number} aj.raidus=0 - 半径，仅用于极坐标排列、伪3d排列，代表半径
     * @param {Number} aj.raidusOffset=0 - 半径偏移，仅用于极坐标排列，第i个排列元素的半径为aj.radius+i*ai.raidusOffset
     * @param {Boolean} aj.modify=true - 是否将排列后的属性修改到参与排列的白鹭对象
     * @param {Number|String} aj.alpha - 直接控制最终透明度
     * @param {Number|String} aj.scale - 直接控制最终比例
     * @param {Number} aj.zoomRate=0 - 缩放速率，仅用于矩阵排列、极坐标排列，第i个排列元素的scale为(1+aj.zoomRate)**i
     * @param {Number} aj.alphaRate=0 - 透明度速率，用于矩阵排列、极坐标排列、伪3d排列，第i个排列元素的scale为(1+aj.alphaRate)**i
     * @param {Number} aj.dzt=0 - 动作执行时间，当有值时，排列产生的属性修改将会以tween动画的形式修改
     * @param {Number} aj.jgt=0 - 间隔执行时间，表示每个tween动画之间间隔多少时间被执行
     * @param {String|Array} aj.include=[], aj.exclude=['zi'] - 用于筛选obj中的孩子
     * @param {String} aj.plane='xz' - 平面，仅用于伪3d排列，目前只能为['xz','yz']中的一个，用于决定在哪个平面排列
     * @param {Boolean} aj.save - 是否将调整后的位置存入服务器，目前只在静态改变位置时生效
     * @param {Function} aj.onPerFinish - 每个对象调整位置后的回调，形如(o) => {}，o为调整的对象
     * @param {String} aj.dz='tween' - 动作方法
     * @param {String} aj.ease='' - 缓动
     * @param {String|Object} aj.enter='' - 表示从哪个方向入场，当enter为对象时，表示一个坐标，必须有x,y属性，即形如{x,y}
     * @param {Boolean} aj.isContainer=true - 表示传入的obj是否容器，若不是，则以obj.parent作为容器进行排列
     * @param {Boolean} aj.adjustIndex=false - 表示是否调整childIndex
     * @param {Boolean} aj.autoAdjust=false - 是否自动调整（为真时，若排列对象不满一行，则自动调整marginX至能均匀铺满一行）
     * @param {Boolean} aj.adjustHeight=undefined - 是否调整容器高度（不设此值时，如果父容器为带滑动的元件（egret.ScrollView）则默认为true）
     * @return {Array}
     */
    this.tzwz = function (obj, type, x, y, aj) {
        'use strict';
        let ret = [], _aj = aj || {};
        typeof (obj) == 'string' && (obj = T.findObj(obj));
        let _isContainer = (_aj.isContainer == undefined) ? obj.$children!=undefined : _aj.isContainer;
		if(_aj.me!= undefined)_isContainer=(1-_aj.me);
        if (!_isContainer) { // obj不是容器的情况，默认认为以obj的父亲为容器，对obj同元件名的元件排列
            let yjm = T.hqyjm(obj.name); // 元件名
            _aj.include = _aj.include === undefined ? [yjm] : [yjm].concat(_aj.include); // 默认只排列与obj同名的元件
            let cpid = (sj.jui[yjm] || {}).pid;
            let clasa = T.findid(yjm, { many: true }).map(id => sj.clas[id]).filter(clas => T.hqyjm(clas.pid) == cpid);
            // 如果传回来只有一个c且里面只有一个d
            let p1 = jg_aj.tzwzp1;
            if(!aj._id0){//已经有统一的排除重复了
				if (T.hqyjm(obj.parent.name) != cpid || !p1 && (clasa.length == 0 || clasa.findIndex(clas => clas._id == obj.name) != 0)) return; //不重复执行
			}
            obj = obj.parent;
            _isContainer = true; // obj不是容器，则以obj.parent作为容器
        }
        [x = 0, y = 0] = [x, y];
        [x = 0, y = 0] = [T.deval('x', _isContainer ? obj:obj.parent, { x }, { obj }), T.deval('y', _isContainer ? obj:obj.parent, { y }, { obj })];
        let [_type = 0, _X = 0, _Y = 0] = [type, x, y];
        // 需要入场的时候
        if (_aj.jgt && _aj.enter) {
            let [_ex, _ey] = [_X, _Y];
            _aj.enter == '上' && (_ey -= (obj.height||jex().getch()) * 2);
            _aj.enter == '下' && (_ey += (obj.height||jex().getch()) * 2);
            _aj.enter == '左' && (_ex -= (obj.height||jex().getcw()) * 2);
            _aj.enter == '右' && (_ex += (obj.height||jex().getcw()) * 2);
            if (typeof (_aj.enter) == 'object') {
                _ex += _aj.enter.x || 0;
                _ey += _aj.enter.y || 0;
            }
            let __aj = T.dcopy(_aj);
            ['enter', 'jgt', 'dzt', 'ease', 'save'].forEach(p => delete __aj[p]); // 这些属性不能传过去
            T.tzwz(obj, type, _ex, _ey, __aj);
        }
        _aj.filterFunc = _aj.filterFunc==undefined ? (o => o.visible) : _aj.filterFunc; // 排除隐藏的孩子
        let objects = _isContainer ? T.son(obj, _aj) : [];
        if (obj['排列顺序']) objects.sort((a, b) => { return obj['排列顺序'].indexOf(a.name) - obj['排列顺序'].indexOf(b.name); });
        if (typeof obj.length != 'undefined') objects = obj;
        let len = objects.length;
        let _egret = T.isEgret(obj);
        let _m = _aj.modify == undefined ? true : _aj.modify; // 是否修改属性
        let [_ax = 0.5, _ay = 0.5] = [_aj.anchorX, _aj.anchorY];
        // 公共属性
        let _S = 1 + (_aj.zoomRate || 0); // 缩放速率
        let _s = 1; // 当前的缩放比例
        let _rt = 0; // 旋转角度
        let _A = 1 + (_aj.alphaRate || 0); // 透明度变化速率
        let _a = _A == 1 ? 1 : _A < 1 ? 1 : Math.pow((1 / _A), len); // 透明度
        !_egret && (_aj.jgt = _aj.jgt || 0, _aj.dzt = _aj.dzt || 0);
        // 矩阵排列 需要的属性
        let _sx = (_aj.sx || 'x,y').split(','); // 先横后竖还是先竖后横
        let _D = _sx[0].indexOf('x') != -1; // 横向为行，还是纵向为行
        let _d = _sx.map(d => d.indexOf('-') == -1 ? 1 : -1); // 对应的方向
        let [_W = 0, _H = 0] = [_aj.width == undefined ? _isContainer && obj.width : _aj.width, _aj.height == undefined ? _isContainer && obj.height : _aj.height]; // 限制宽，高
        !_D && ([_W, _H] = [_H, _W]);
        let [_mc = 0, _mr = 0] = [T.deval('marginX', obj, _aj), T.deval('marginY', obj, _aj)]; // 每列、行之间的外间隔
        !_D && ([_mc, _mr] = [_mr, _mc]);
        let [_osc = 0, _osr = 0] = [_aj.offsetX, _aj.offsetY]; // 每列、行列偏差值
        !_D && ([_osc, _osr] = [_osr, _osc]);
        let [_c, _r] = [_X, _Y]; // 列开始位置，行开始位置
        // !_D && ([_c, _r] = [_r, _c]);
        let [_rw, _ch] = [0, 0]; // 行宽，列高
        let _rh = 0; // 行高
        let _curri = 0; // 当前行的index
        let _prsi = 0; // 上一行第一个obj的index
        let _prh = 0; // 上一行的高度
        // 随机屏幕外位置 需要的属性
        let WW = _egret ? egret.MainContext.instance.stage.stageWidth : jex().getcw();
        let WH = _egret ? egret.MainContext.instance.stage.stageHeight : jex().getch();
        // 极坐标排列 需要的属性
        let [_ba = 0, _ea = 360] = [_aj.beginAngle, _aj.endAngle]; // 开始、结束角度
        let _radius = _aj.radius || 0;
        let _angle = (_ea - _ba) / len;
        let _childIndex = _isContainer ? objects.length : len;
        // 瀑布流排列 需要的属性
        let _col = _aj.col || 4; // 列数
        let _colha = new Array(_col); // 列高数组
        _colha.fill(0);
        let _colw = (_W - _mc * _col * 2) / _col; // 计算出列宽;
        switch (_type) {
            case 0: { // 矩阵排列
                // 如果发现所有对象加起来不能排满一行，则修改_mc至能排满一行
                let i;
                if (_aj.autoAdjust) {
                    let __ww = 0; // 用于统计宽度和
                    for (i = 0; i < len; i++) {
                        let o = objects[i];
                        let radian = Math.PI / 180 * o.rotation;
                        let [sin, cos] = [Math.abs(Math.sin(radian)), Math.abs(Math.cos(radian))];
                        let _w = _D ? sin * o.height + cos * o.width : cos * o.height + sin * o.width;
                        __ww += _w;
                        _rw += _w + 2 * _mc;
                        if (_rw > _W) break;
                    }
                    _rw < _W && (_mc = (_W - __ww) / len * 0.5); // 更新_mc
                    _rw = 0;
                }
                // 正式开始排列
                for (i = 0; i < len; i++) {
                    let o = objects[i], _ret = {};
                    let __sx = _aj.scale != undefined ? _aj.scale : o.scaleX;
                    let __sy = _aj.scale != undefined ? _aj.scale : o.scaleY;
                    _ax != 0.5 && (o.x += o.width * _ax - o.anchorOffsetX);
                    _ay != 0.5 && (o.y += o.height * _ay - o.anchorOffsetY);
                    _ax != 0.5 || _ay != 0.5 && ([o.anchorOffsetX, o.anchorOffsetY] = [o.width * _ax, o.height * _ay]);
                    let radian = Math.PI / 180 * o.rotation;
                    let [sin, cos] = [Math.abs(Math.sin(radian)), Math.abs(Math.cos(radian))];
                    let [_w, _h] = [sin * o.height * __sy + cos * o.width * __sx, cos * o.height * __sy + sin * o.width * __sx];
                    !_D && ([_w, _h] = [_h, _w]);
					let str=('(' + _osc + ')').replace(/{n}/g, _w).replace(/{pn}/g, (i > _prsi ? ret[i - 1].w : 0)).replace(/{ci}/g, i - _prsi).replace(/{ri}/g, _curri);
 					
                    let __osc = (window.ifeval? eval(str): T.doeval(str)) || 0;
                    if (_W && Math.floor(_w + _rw + _mc * 2 + __osc) > _W + 10 && i != _prsi) { // 是否换行。如果这行第一个obj就超出了宽度限制，也不换行，不然就死循环了
					    let str= ('(' + _osr + ')').replace(/{n}/g, _rh).replace(/{pn}/g, _prh).replace(/{ri}/g, _curri); 
                        let __osr = (window.ifeval? eval(str): T.doeval(str)) || 0;
                        for (let k = _prsi; k < i && __osr != 0; k++) {
                            _D ? ret[k].y += __osr : ret[k].x += __osr;
                        }
                        _ch += _rh + __osr + _mr * 2;
                        _prh = _rh;
                        [_rh, _rw, _s, __osc, _prsi] = [0, 0, 1, 0, i];
                        // 重新计算正确的__osc
                        __osc = T.doeval(('(' + _osc + ')').replace(/{n}/g, _w).replace(/{pn}/g, (i > _prsi ? ret[i - 1].w : 0)).replace(/{ci}/g, 0).replace(/{ri}/g, _curri + 1)) || 0;
                        _curri++;
                    }
                    _aj.alpha != undefined && (_a = _aj.alpha);
                    _aj.scale != undefined && (_s = _aj.scale);
                    _rh = Math.max(_rh, _h);
                    // 2018/08/15 利用anchorOffset计算x,y
                    // [_ret.x, _ret.y, _ret.w, _ret.h, _ret.scaleX, _ret.scaleY, _ret.rotation, _ret.alpha] = [_c + _d[0] * (_rw + _mc + 0.5 * _w + __osc), _r + _d[1] * (_ch + _mr + 0.5 * _h), _w, _h, _s, _s, _rt, _a];
                    [_ret.x, _ret.y, _ret.w, _ret.h, _ret.scaleX, _ret.scaleY, _ret.rotation, _ret.alpha] = [(_D?_c:_r) + _d[0] * (_rw + _mc + (_D?o.anchorOffsetX:o.anchorOffsetY) + __osc), (_D?_r:_c) + _d[1] * (_ch + _mr + (_D?o.anchorOffsetY:o.anchorOffsetX)), _w, _h, __sx, __sy, _rt, _a];
                    _s *= _S;
                    _a *= _A;
                    !_D && ([_ret.x, _ret.y] = [_ret.y, _ret.x]);
                    if (_isContainer && _aj.adjustIndex) obj.setChildIndex(o, --_childIndex);
                    ret.push(_ret);
                    _rw += _w + __osc + _mc * 2;
                }
                // 计算最后一行的offsetY
                let __osr = T.doeval(('(' + _osr + ')').replace(/{n}/g, _rh).replace(/{pn}/g, _prh).replace(/{ri}/g, _curri)) || 0;
                for (let k = _prsi; k < len && __osr != 0; k++) {
                    _D ? ret[k].y += __osr : ret[k].x += __osr;
                }
                // 如果是放在scrollview内的容器，则根据排列后的高度修改其高度
                if (_isContainer && _egret && (_aj.adjustHeight==undefined && obj.parent instanceof egret.ScrollView || _aj.adjustHeight)) {
                    obj[!_D ? 'width' : 'height'] = _ch + _rh + 100; console.log('新ScrollView高度:' + (_ch + _rh + 100));
                }
                break;
            }
            case 1: { // 随机屏幕外位置
                for (let o of objects) {
                    o.x += o.width * _ax - o.anchorOffsetX;
                    o.y += o.height * _ay - o.anchorOffsetY;
                    [o.anchorOffsetX, o.anchorOffsetY] = [o.width * _ax, o.height * _ay];
                    let out = Math.max(o.width, o.height);
                    ret.push(randS() == -1 ? { x: 0.5 * WW + randS() * (0.5 * WW + out), y: randAB(-out, WH + out) } : { x: randAB(-out, WW + out), y: 0.5 * WH + randS() * (0.5 * WH + out) });
                }
                break;
            }
            case 2: { // 极坐标排列
                let [_ba = 0, _ea = 360] = [_aj.beginAngle, _aj.endAngle]; // 开始、结束角度
                _angle = (_ea - _ba) / (_radiusOffset == 0 && _ba == (_ea % 360) ? len : len - 1); // 考虑排列一圈时不要让首末元素重叠
                for (let i = 0; i < len; i++) {
                    let o = objects[i];
                    let _ret = {};
                    o.x += o.width * _ax - o.anchorOffsetX;
                    o.y += o.height * _ay - o.anchorOffsetY;
                    [o.anchorOffsetX, o.anchorOffsetY] = [o.width * _ax, o.height * _ay];
                    let radian = Math.PI / 180 * (_ba + _angle * i);
                    _ret.rotation = _aj.rotation == undefined ? _ba + _angle * i : _aj.rotation;
                    let __r = _radius + i * _radiusOffset;
                    _ret.x = __r * Math.cos(radian) + _X;
                    _ret.y = __r * Math.sin(radian) + _Y;
                    [_ret.scaleX, _ret.scaleY] = [_s, _s];
                    _ret.alpha = _a;
                    if (_isContainer) obj.setChildIndex(o, --_childIndex);
                    ret.push(_ret);
                    _s *= _S;
                    _a *= _A;
                }
                break;
            }
            case 3: { // 伪3d，xz或yz平面极坐标
                _aj.plane = _aj.plane || 'xz';
                _D = _aj.plane == 'xz' ? true : (_aj.plane == 'yz' ? false : (console.log(`unexpected _aj.plane:${_aj.plane} in T.tzwz()`), true));
                let [_ba = 0, _ea = 360] = [_aj.beginAngle, _aj.endAngle]; // 开始、结束角度
                let half = len * 0.5;
                let _objects = [].concat(objects);
                // 因为需要调整z-index，调整前先将原objects的z-index记录下来
                obj.tzwzOriginIndex = _objects.map(o => ({name: o.name, idx: o.parent.getChildIndex(o)}));
                for (let i = 0; i < len; i++) {
                    let o = _objects[i];
                    let _ret = {};
                    o.x += o.width * _ax - o.anchorOffsetX;
                    o.y += o.height * _ay - o.anchorOffsetY;
                    [o.anchorOffsetX, o.anchorOffsetY] = [o.width * _ax, o.height * _ay];
                    let radian = Math.PI / 180 * (_ba + _angle * i);
                    let [sin, cos] = [Math.sin(radian), Math.cos(radian)];
                    let tanTheta = 1; // 假定镜头正四棱截锥角度为45
                    let dist = _radius - _radius * cos;
                    let xrate = WW / (WW + 2 * dist * tanTheta);
                    let yrate = WH / (WH + 2 * dist * tanTheta);
                    let [_offsetX, _offsetY] = [sin * _radius * xrate, 0];
                    !_D && ([_offsetX, _offsetY] = [_offsetY, _offsetX]);
                    [_ret.x, _ret.y] = [_offsetX + _X, _offsetY + _Y];
                    // 2019/01/11 scale基于obj当前的scale
                    [_ret.scaleX, _ret.scaleY] = [cos * o.width * xrate / o.width * o.scaleX, Math.abs(o.height * yrate) / o.height * o.scaleY];
                    !_D && ([_ret.scaleX, _ret.scaleY] = [_ret.scaleY, _ret.scaleX]);
                    _ret.alpha = Math.pow(_A, (i > half ? len - i : i));
                    if (_isContainer) obj.setChildIndex(o, len - 1 - (i > half ? (len - i) * 2 : i == 0 ? 0 : i * 2 - 1));
                    ret.push(_ret);
                }
                break;
            }
            case 4: { // 瀑布流排列
                let _left = _colw * 0.5 + _mc;
                let _colW = _colw + _mc * 2;
                for (let o of objects) {
                    _ax != 0.5 && (o.x += o.width * _ax - o.anchorOffsetX);
                    _ay != 0.5 && (o.y += o.height * _ay - o.anchorOffsetY);
                    _ax != 0.5 || _ay != 0.5 && ([o.anchorOffsetX, o.anchorOffsetY] = [o.width * _ax, o.height * _ay]);
                    let _ret = {}, curci = _colha.reduce((pre, cur, i) => cur * 1.1 < _colha[pre] ? i : pre, 0); // 找出最小列高的列序号，*1.1回避浮点数大小比较问题
                    let bili = _colw / (_D ? o.width : o.height);
                    bili != 1 && (_ret.scaleX = _ret.scaleY = bili);
                    _ret.x = _X + _left + _colW * curci;
                    _ret.y = _Y + _colha[curci] + o.height * bili * 0.5 + _mr;
                    _colha[curci] += o.height * bili + _mr * 2;
                    !_D && ([_ret.x, _ret.y] = [_ret.y, _ret.x]);
                    ret.push(_ret);
                }
                break;
            }
            case 5: { // 不知道叫什么排列（两边分布排列？）
                let i, _len, _ret = {};
                if (len > 0) {
                    _ret.x = _c; _ret.y = _r;
                    _ret.w = objects[0].width; _ret.h = objects[0].height;
                    _ret.scaleX = _ret.scaleY = 1;
                    _ret.alpha = 1;
                    obj.setChildIndex(objects[0], len);
                }
                ret.push(_ret);
                for (i = 1, _len = Math.floor(len / 2) + 1; i < _len; i++) { // 先排右半边
                    let o = objects[i];
                    _ret = {};
                    let rate = Math.pow(1.7, -i * i); // 利用指数函数模拟
                    let preRet = ret[i - 1];
                    _ret.x = preRet.x + (preRet.w + o.width) * 0.5;
                    _ret.y = preRet.y; _ret.w = o.width; _ret.h = o.height;
                    _ret.scaleX = preRet.scaleX * rate;
                    _ret.scaleY = preRet.scaleY * rate;
                    _ret.alpha = preRet.alpha * rate * 0.7;
                    obj.setChildIndex(o, len - i);
                    ret.push(_ret);
                }
                for (i = len - 1, _len = Math.floor(len / 2) + 1; i >= _len; i--) { // 再排左半边
                    let o = objects[i];
                    _ret = {};
                    let rate = Math.pow(1.7, -(len - i) * (len - i)); // 利用指数函数模拟
                    let preRet = i == len - 1 ? ret[0] : ret[i + 1];
                    _ret.x = preRet.x - (preRet.w + o.width) * 0.5;
                    _ret.y = preRet.y; _ret.w = o.width; _ret.h = o.height;
                    _ret.scaleX = preRet.scaleX * rate;
                    _ret.scaleY = preRet.scaleY * rate;
                    _ret.alpha = preRet.alpha * rate * 0.7;
                    obj.setChildIndex(o, i - _len);
                    ret[i] = _ret;
                }
                break;
            }
            default:
                console.log('error: unexpected _type :' + _type + ' in T.tzwz()');
        }
        if (_aj.jgt != undefined) { // 如果要修改
            let pa = objects.map(function (o, i) {
                let act = [];
                if (_aj.save) { // 是否将调整后的位置存入服务器
                    if (parseInt(o.x) != parseInt(ret[i].x) || parseInt(o.y) != parseInt(ret[i].y))
                        T.func(o.name, { x1: ret[i].x, y1: ret[i].y });
                }
                [ret[i].x, ret[i].y] = ['(' + ret[i].x + ')', '(' + ret[i].y + ')'];
                _aj.alpha != undefined && (ret[i].alpha = _aj.alpha);
                _aj.scale != undefined && (ret[i].scaleX = ret[i].scaleY = _aj.scale);
                _aj.rotation != undefined && (ret[i].rotation = _aj.rotation);
                return [o, [T.merge({
                    '动作': _aj.dz || 'tween', time: _aj.dzt || 0, ease: _aj.ease || ''
                }, ret[i])], {
                        cb: _aj.onPerFinish ? function () {
                            _aj.onPerFinish(o);
                        } : undefined
                    }];
            });
            T.jgzx(T.dodz, _aj.jgt, _aj.cb, pa);
        } else if (_m) { // 如果没有设置时间，直接改变obj的属性
            objects.forEach(function (o, i) {
                let mask = _isContainer ? obj.getChildByName(o.name + 'zimask') : null;
                if (mask) {
                    T.merge(mask, ret[i]);
                    mask.x = ret[i].x - o.x;
                    mask.y = ret[i].y - o.y;
                }
                if (_aj.save) { // 是否将调整后的位置存入服务器
                    if (parseInt(o.x) != parseInt(ret[i].x) || parseInt(o.y) != parseInt(ret[i].y))
                        T.func(o.name, { x1: ret[i].x, y1: ret[i].y });
                }
                T.merge(o, ret[i]);
                _aj.onPerFinish && _aj.onPerFinish(o);
            });
            _aj.cb && _aj.cb();
        }
        return ret;
    };

	/**
     * 获取元件名
     * 返回元件名
     * @param {String} _id - 可能带有data、#之类的_id    （已改为不排除—1）
     * @return {String}
     */
    this.hqyjm = function (_id) {
        var retid = typeof (_id) == 'string' ? (_id.split('-')[1] || _id).split('＃')[0] : _id; // .split('—')[0]
        if (retid) {
        } else {
            //console.log('hqyjm:::' + _id)
        }
        return retid;
    };

    /**
     * 获取元件名中的数字
     * @param {String} _id - jui名
     */
    this.geti = function (_id) {
        return parseInt((T.hqyjm(_id).split('#')[0].split('—')[0].match(/[0-9]*[1-9][0-9]*$/) || [''])[0]) || undefined;
    };

 
    this.son = function (pobj, aj) {
        if (!pobj) return [];
        let _aj = aj || {};
        _aj.include && (_aj.include = [].concat(_aj.include));
		if(_aj.exclude!="")    _aj.exclude!=undefined ? (_aj.exclude = [].concat(_aj.exclude)) : _aj.exclude = ['zi'];
        if (pobj.$children) {
            return pobj.$children.filter(o => {
				let ret=true;
				if(_aj.filterFunc)ret= _aj.filterFunc(o);				 
				if(ret)ret=(_aj.exclude ?_aj.exclude.every(ex => (_aj.fullname ? o.name : T.hqyjm(o.name)).indexOf(ex) == -1) : true);
				if(ret)ret=(_aj.include ? _aj.include.some(i => (_aj.fullname ? o.name : T.hqyjm(o.name)).indexOf(i) != -1) : true);
				return ret;
				})
        } else {
            return [];
        }

    };

    /**
     * 设置一个定时器
     * @param {EgretObject} obj - 添加定时器的白鹭对象
     * @param {String} timerName - 定时器名字，当obj中已有timerName的定时器时，会先将已有的清掉再创建新的定时器
     * @param {Object} aj - 额外参数{time}
     * @param {Number} aj.time=20 - 间隔事件(ms)
     * @param {Boolean} aj.stop=false - 是否停止计时器
     * @param {Function} func - 回调函数
     */
    this.timer = function (obj, timerName, aj, func) {
        'use strict';
        aj = aj || {};
        let _egret = T.isEgret(obj);
        if (_egret) {//_egret
            let funcName = timerName + `func`;
            if (obj[timerName]) {
                obj[timerName].stop();
            } else if (!aj.stop) {
                obj[timerName] = new DateTimer(aj.time == undefined ? 20 : aj.time);
            }
            if (obj[funcName]) {
                obj[timerName].removeEventListener(egret.TimerEvent.TIMER, obj[funcName], obj);
                obj[funcName] = undefined;
            }
            if (!aj.stop) {
                obj[funcName] = func;
                obj[timerName].addEventListener(egret.TimerEvent.TIMER, obj[funcName], obj);
                obj[timerName].start();
            }
        } else {
            let funcName = timerName + `func`;
            if (obj[funcName] || aj.stop) {
                TweenMax.ticker.removeEventListener('tick', obj[funcName]);
                obj[funcName] = null;
            }
            if (!obj[funcName] && !aj.stop) {
                obj[funcName] = func;
                TweenMax.ticker.addEventListener('tick', func);
            }
        }
    };

 
    this.ini = function (defaults, aj, notson) {//notson=1，不需要找孩子
        // 获取cd的tag（执行对象名+act名）
        aj.actname = aj.actname || defaults.actname;
        let cd = aj.cd==undefined ? defaults.cd : aj.cd;
        if ( cd  ) { //jex().getv("csse", 0) &&
			let cdTag = (T.findObj(aj.tobj?[].concat(aj.tobj)[0]:aj.obj||defaults.obj)||{}).name + (aj.actname ? aj.actname:T.ini.caller.name||"anonymous");
            if( !T.cd(cdTag, cd))
                if(egret.Capabilities.runtimeType == "qqgame") {
                    return {type:"cd", msg:"T.ini 存在cd，且在冷却时间，不执行动作"};
                } else {
                    throw {type:"cd", msg:"T.ini 存在cd，且在冷却时间，不执行动作"};
                }
        }
        let caller = aj.actname ? window[aj.actname] : T.ini.caller;
        
        if ( aj.delay) { //jex().getv("csse", 0) &&
            setTimeout(function () {
                let _aj = {};
                _aj = T.dcopy(aj);
                delete _aj.delay;
                caller(_aj);
            }, aj.delay);
            if(egret.Capabilities.runtimeType == "qqgame") {
                return {type:"delay", msg:"T.ini 存在delay，setTimeout "+aj.delay+"ms后执行"};
            } else {
                throw {type:"delay", msg:"T.ini 存在delay，setTimeout "+aj.delay+"ms后执行"};
            }
        }
        if (defaults.obj && !aj.obj) aj.obj = defaults.obj; // 当用户未给出obj的时候，取动作里的默认设置
		if (defaults.tobj && !aj.tobj) aj.tobj = defaults.tobj;
        let obj = aj.obj||jg_aj.stra1[0]&&jg_aj.stra1[0]._id||jg_aj.curproj+"_游戏容器"+T.dqcj();;// 2019.4.16 发现 隐藏的对象 如果没有，若以游戏容器为默认对象，会把它隐藏了。但如果不加默认对象，很多地方出错
		  let cb = aj.cb || defaults.cb;
		//if(obj==undefined){
//            cb && cb();
//            throw {type:"error", msg:"T.ini 找不到obj"};
//        }
        if (typeof obj == 'string') obj = sj.obj[T.findid(obj)];
      
        if (aj.obj && !obj) {
            cb && cb();
            if(egret.Capabilities.runtimeType == "qqgame") {
                return {type:"error", msg:"T.ini 既指定obj又找不到obj: "+aj.obj};
            } else {
                throw {type:"error", msg:"T.ini 既指定obj又找不到obj: "+aj.obj};
            }
        }

        let objs = (aj.tobj && (typeof aj.tobj == "string" || aj.tobj instanceof Array)) ? ([].concat(aj.tobj).reduce((pre, cur) => pre.concat(T.findids(cur).map(id => sj.obj[id])), [])) : [obj];
        if (typeof aj.tobj == 'object' && !(aj.tobj instanceof Array)) objs = [aj.tobj];
        if (!aj.fromTini && objs.length > 1) { // 2019/02/12 处理tobj，以tobj代替obj调用caller
            objs.forEach(o => {
                console.log("T.ini "+o.name);
                //let _aj = Object.assign({}, aj, {obj:o, tobj:o.name, fromTini:1});
                let _aj = {};
                _aj = T.dcopy(aj);
                _aj.oldobj = _aj.obj;
                _aj.obj = o;
                _aj.tobj = o.name;
                _aj.fromTini = 1;
				caller(_aj);
            });
            cb && cb();
            if(egret.Capabilities.runtimeType == "qqgame") {
                return {type:"tobj", msg:"T.ini obj:"+(obj?obj.name:"")+" 存在tobj:"+(aj.tobj.length?aj.tobj:aj.tobj.name)+"，调用caller"};
            } else {
                throw {type:"tobj", msg:"T.ini obj:"+(obj?obj.name:"")+" 存在tobj:"+(aj.tobj.length?aj.tobj:aj.tobj.name)+"，调用caller"};
            }
        }
        if (aj.tobj && objs.length == 0) {
            cb && cb();
            if(egret.Capabilities.runtimeType == "qqgame") {
                return {type:"error", msg:"T.ini 找不到tobj"+aj.tobj};
            } else {
                throw {type:"error", msg:"T.ini 找不到tobj"+aj.tobj};
            }
        }
		let oldobj=obj;
		if (aj.tobj && objs.length == 1) {
           obj = objs[0];
        }
		
		let pobj = obj ? obj.parent : null;
        let a = T.merge(defaults, aj, (obj && pobj) ? [obj, pobj] : undefined);
		
		if (a.tobj && objs.length == 1) {
            a.oldobj = oldobj;
            a.obj =  objs[0];			
        }
      
        let sobj = [];
        if (!notson && obj) sobj = T.son(obj, a);
         
        if (aj.if!=undefined ) { // 权限的条件
            if (!aj.if) { 
                cb && cb();
                if(egret.Capabilities.runtimeType == "qqgame") {
                    return {type:"if", msg:"if 不通过"};
                } else {
                    throw {type:"if", msg:"if 不通过"};
                }
            }
            if (aj.if == 1 && obj && sj.clas[obj.name].idus && sj.clas[obj.name].idus != jg_aj.idus) {
                cb && cb();
                if(egret.Capabilities.runtimeType == "qqgame") {
                    return {type:"if", msg:"if 不通过"+sj.clas[obj.name].idus};
                } else {
                    throw {type:"if", msg:"if 不通过"+sj.clas[obj.name].idus};
                }
            }
			let ajif=aj.if+'';
            if (ajif.length > 2){ 
				var pclas=obj;
				if (window.ifeval ? eval(ajif) : T.doeval(ajif,obj)) { 
					console.log('通过aj.if:'+ajif)
				} else {
					cb && cb();
					if(egret.Capabilities.runtimeType == "qqgame") {
						return {type:"if", msg:"if 不通过: eval(" + ajif};
					} else {
						throw {type:"if", msg:"if 不通过: eval(" + ajif};
					}
				
				}
			}
        }
		if ( !aj.fromTini && aj.loop ) { //jex().getv("csse", 0) &&
            let _aj = {};
            _aj = T.dcopy(aj);
            setTimeout(function () {
                if (_aj.loop--) {
					if(!T.isEgret(obj) && !document.getElementById(obj.name)  ) return //当h5换场景以后，对象不存在 则不循环。
                    caller(_aj);
                }
            }, aj.interval||50);
            //throw {type:"loop", msg:"T.ini 存在loop，setInterval "+aj.interval+"ms"};
        }
        return [obj, pobj, sobj, a];
    };

 
    this.obj = function (aj) {
        aj = aj || {};
        typeof (aj) == 'string' && (aj = { obj: aj });
        let obj, pobj, objType = typeof (aj.obj);
        if (objType == 'object') {
            obj = aj.obj;
        } else if (objType == 'string') {
            obj = sj.obj[T.findid(aj.obj)];
        }
        if (obj == undefined) return false;
        pobj = obj.parent;
        return [obj, pobj];
    };
    this._ctrl = function (abc) {
        let ctrl = sj.clas[T.findid('控制容器' + (abc||T.dqcj()), {room: T.my()['房间'] } )];
        if (ctrl == undefined) console.error('找不到"控制容器' + abc + '"的clas in T._ctrl');
        return ctrl//(ctrl || { data: [] }).data[0] || {};
     };
    this.ctrl = function (abc) {
		return T._ctrl(abc);
	};
	
	
    /**
     * 返回sj.clas中idus为jg_aj.idus的clas对象
     * @param {String} [clasname="用户"] - 查找的元件名
     * @return {Object}
     */
    this._my = function (clasname = "用户") {
        let _c = sj.clas[T.findid(clasname||"用户", { many: 1, idus: jg_aj.idus })];
        if (_c === undefined) console.error(`找不到"${clasname}(idus:'${jg_aj.idus}')"的clas in T._my`);
        return _c || {};
    };
	this.my = function () {
		return T._my();
	};
	this.inname= function (obj, name) {
		var aname=[].concat(name)
		for(let iname of aname) {
		  try{
		  if(obj.name.split('_')[1].indexOf(iname)>-1||obj.ridclas&&obj.ridclas.split('_')[1].indexOf(iname)>-1)return true;
		  } catch (e) {
               console.log(e + "obj.name:" +obj.name+ " obj.ridclas:"+obj.ridclas );
          }
		}; 
		 return false
	};
    this.findmyid = function (id, aj) {
        aj = aj || {};
        aj.idus = jg_aj.idus;
        return T.findid(id, aj)
    }
    this.findids = function (id, aj) {
        aj = aj || {};
        var idArr = [];
        if(typeof(id)=='string'){  
            aj.many = true;
            return T.findid(id, aj);
        }
		if(id instanceof Array){
            for(let d of id){
                idArr.push(T.findid(d, aj));
            }
            return idArr;
        }
		return [];        
    }
 
    this.findid = function (id, aj) {
        'use strict';
        let _id = id, a = aj || {};
        
		if(!a.json || Object.getOwnPropertyNames(a.json).length==0 ) a.json =sj.clas; 
		a.many = a.many || 0;
        if (typeof (id) != 'string') return a.many ? [] : id;
		if(["whe","idd","q","obj","cb","exclude","include"].indexOf(id)>-1)return a.many ? [] : id;
		
        if (!a.onlyid) {
			if(id.indexOf('topproj')==0){
				id = id.replace('topproj',jg_aj.topproj);
			}else{
				id.indexOf('_') < 1 && (id = jg_aj.curproj + '_' + id.replace('_', '')); 
			}
		}
        let hasData = id.split('-')[1] != undefined;
        let yjm = T.hqyjm(id);
        let dataa = [];
	    if(!a.many&&a.json[id] && !a.idus) return id;
        for (let i in a.json) {
			var ife=0;
            if (a.onlyid) {
                if (i.indexOf(id) == 0) return i
            } else {
                if (i.split('＃')[0] == id.split('＃')[0]) { // 全匹配优先 如 id=Qβmqc7tOi-应用市场_用户,json中有[应用市场_用户,Qβmqc7tOi-应用市场_用户#1,twedfsfsf-应用市场_用户]
                    ife=1;//if (a.many) dataa.push(i); else return i;
                   
                } else if (hasData && !a.many) {
                    if(yjm == i.split('＃')[0]) ife=1;//dataa.push(i); // 找到不带d的,id这个时候有d
					
				}else if(T.hqyjm(i) == yjm){ //d中可能会有zi				
					ife=1;//dataa.push(i); // 找到带d的
                }else if(a.json[i].ridclas){
					if(a.json[i].ridclas.split('_')[1]==id.split('_')[1] )ife=1;
                }
                if(ife==0&&a.json[i].idclas){
					if(a.json[i].idclas==yjm )ife=1;
				}
				if (a.room && ife) if(sj.clas[i]['房间'] && sj.clas[i]['房间'] != a.room) ife=0;
				if (a.idus && ife) if(sj.clas[i].idus != a.idus) ife=0;
            	if(ife){if (a.many) dataa.push(i); else return i;}
			}
        }
        //if (a.idus) dataa = dataa.filter(n => sj.clas[n].idus == a.idus);
        if (dataa.length == 0) {
			if(["游戏容器","控制容器","场景","游戏窗","游戏层"].includes(_id)){
				 return  T.findid(id+T.dqcj(),a);
          	}
            if( !a.findtproj && jg_aj.curproj!=jg_aj.topproj ){//多个项目混合应用的情况，继续找topproj 
				a.findtproj=1; 
               return  T.findid(jg_aj.topproj+'_'+(id.indexOf('_')>-1?id.split('_')[1]:id),a);
            }
            console.log(`无法在json中找到与${id}有关的对象 in T.findid`);
            return a.many ? [] : _id;
        } else {
            return a.many === true ? dataa : dataa.slice(aj.index || 0, (aj.index || 0) + a.many);             
        }
    };

    /**
     * 模拟点击
     * @param {EgretObject|String} obj - 白鹭对象或对象的名字
     */
    this.mndj = function (obj) {
        'use strict';
        // 找到点击的类名
        let id = '';
        if (typeof (obj) == 'string') {
            id = T.findid(obj);
        } else if (obj && obj.name) {
            id = obj.name;
        }
        // id = T.findid(id);
        let _obj = sj.obj[id];
        let _clas = sj.clas[id];
        if (id != '' && _obj && _clas) {
            obj = _obj;
            console.log(`模拟点击:${id}`)
            // 先模拟act
            if (_obj.clas) {
                _obj.clas.forEach(function (c) {
                    let clas = sj.obj[c];
                    if (clas && clas.aclas && clas.aclas[id]) {
                        T.dodz(clas, clas.aclas[id]);
                    }
                });
            }
			
			if (typeof (_clas.func) == 'object') {
				  Jui.getSingle().actt(obj, obj.parent, _clas.func);
				  if (_clas.func.jpn) {
				  } else {
					  window['T'].func(obj.name, { stopp: 50 });
				  }
				  return;
             }
			
            // 再模拟func
            let func = _clas.func ? typeof (_clas.func) == 'string' ? { 'anonymous': _clas.func } : _clas.func : { 'anonymous': "T.func(this,{stopp:50})" };
            for (let key in func) {			
				
				if(key=='jpn'){
					jpn(obj);
				}else{
                    let str = func[key].replace(/this/gi, "'" + id + "'");
                    if (!str.includes('(')) {
                        T.mndj(str);
                        continue;
                    }
                    if (str == 'jpn()') str = 'jpn(obj)';
                    if (!str.includes('jpn')) jex().stoppp();
                    (window.ifeval? eval(str): T.doeval(str)) ;
                }
            }
        } else {
            console.log(`error: 找不到该对象，id:${id},sj.obj[id]:${sj.obj[id]}`);
        }
    };

 
    this.mncsend = function (obj, ev, opid, editm) {
        'use strict';
        let id = '';
        if (typeof (obj) == 'string') {
            id = obj;
        } else if (obj && obj.name) {
            id = obj.name;
        }
        sj.clas[id] && sj.clas[id].oid && (id = sj.clas[id].oid);
        let _opid = opid || (id.indexOf('-') != -1 ? id.split('-')[1] : id);
        let _editm = editm || 0;
        id != '' && opid != '' && csend(["", { "editm": _editm, "id": id, "ev": ev || "not" }, id, jg_aj.Sneedi, jg_aj.Ci]) && console.log(`模拟csend:${id}`);
    };

  
    this.znps = function (c, color, _level) {
        'use strict';
        color = color || jg_aj.dqps;
        _level = _level || 0;
        let [_zs, _cs, _zis, ..._fsa] = color; // 主色，容器色，字体色，...副色（元件色）
        let len = c.$children.length;
        let _ci = 0; // 这一层颜色序数
        if (T.isEgret(c)) {
            for (let i = 0; i < len; i++) {
                let _c = c.$children[i];
                if (sj.clas[_c.name] && sj.clas[_c.name].typ >= 50) {
                    continue;
                } else if (_c.name.indexOf('zibg') != -1 && _c instanceof egret.Shape) {
                    let _color = _level > 0 ? _fsa[_ci % _fsa.length] : _zs;
                    let _colorHex = _color.toString(16);
                    _c.graphics.clear();
                    _c.graphics.beginFill(_color);
                    _c.graphics.drawRect(0, 0, c.width, c.height);
                    _c.graphics.endFill();
                    _ci++;
                } else if (_c instanceof egret.TextField) {
                    _c.$setTextColor(_zis);
                } else if (_c instanceof egret.DisplayObjectContainer) {
                    let __fsa = [].concat(_fsa)
                    let _len = __fsa.length;
                    let tail = __fsa.splice(_ci % _len, _len - _ci % _len);

                    let newColor = [_zs, _zis].concat(tail.concat(__fsa));
                    if (T.znps(_c, newColor, _level + 1)) _ci++;
                } else {
                    // 其他暂不处理
                }
            }
        } else {
            c.id.includes('游戏容器') && jg_aj.psmode == 1 && !c.bgcolor && (c.bgcolor = _zs);
            for (let _c of c.$children) {
                let bgmodify = jg_aj.psmode == 1 && (!_c.bgcolor || _c.bgcolor == '#000000');
                let txtmodify = jg_aj.psmode == 1 && (!_c.textcolor || _c.textcolor == '#000000');
                if (_c.$children.length > 0) { // 有孩子则认为是容器，否则，认为是底层元件
                    bgmodify && (_c.bgcolor = _cs);
                    T.znps(_c, color, _level + 1);
                } else {
                    bgmodify && (_c.bgcolor = _fsa[_ci % _fsa.length]);
                    txtmodify && (_c.textcolor = _zis);
                    _ci++;
                }
            }
        }
        return _ci;
    }
    // 一些默认色值
    this.znps.COLOR = { // 大背景色,容器色,字体色,元件色
        RAINBOW: [0xffffff, 0x000000, 0xea2a29, 0xf16729, 0xf89322, 0xffcf14, 0xffea0d, 0x87b11d, 0x008253, 0x3277b5, 0x4c549f, 0x764394, 0xca0d86],
        RED: [0xffffff, 0x000000, 0xdf0000, 0xbf0000, 0x9f0000, 0x7f0000, 0x5f0000, 0x3f0000, 0x1f0000],
        GREEN: [0xffffff, 0x000000, 0x00df00, 0x00bf00, 0x009f00, 0x007f00, 0x005f00, 0x003f00, 0x001f00],
        BLUE: [0xffffff, 0x000000, 0x0000df, 0x0000bf, 0x00009f, 0x00007f, 0x00005f, 0x00003f, 0x00001f],
        Aries: [0xeafaf9, 0x88d6ec, 0x333333, 0xbbbbbb, 0xffba7e, 0xdedb70, 0x6adadb, 0xff7374, 0x5ccee6],
        Color: [0xeafaf9, 0x88d6ec, 0x333333, 0xe75aa5, 0x8f4ef0, 0x5bd543, 0xf7bd42, 0x52c7ce, 0x308bf7, 0xf0535b]
    };

    
    this.color = function (rawData, format, aj) {
        'use strict';
        let type = typeof (rawData), rgba = [0, 0, 0, 255];
        format = format || '#{r}{g}{b}';
        format == '0x' && (format = '0x{r}{g}{b}'); // 自动补全'0x'
        format == '#' && (format = '#{r}{g}{b}'); // 自动补全'#'
        format == 'rgb' && (format = 'rgb({r},{g},{b})'); // 自动补全'rgb'
        format == 'rgba' && (format = 'rgba({r},{g},{b},{a})'); // 自动补全'rgba'
        if (rawData instanceof Array) {
            for (let i = rawData.length; i--;) rgba[i] = rawData[i] || 0;
        } else if (['string', 'number'].includes(type)) {
            if (type == 'string') {
                let _rd = '';
                if (rawData[0] == '#') {
                    _rd = rawData.substring(1)
                } else if (rawData.indexOf('0x') == 0) {
                    _rd = rawData.substring(2)
                } else {
                    console.log(`未知数据格式 in T.color`);
                }
                let n = [3,4].includes(_rd.length) ? 1 : [6,8].includes(_rd.length) ? 2 : undefined;
                n && (rgba = rgba.map((c, i) => parseInt('0x' + (_rd.substr(i * n, n)||'ff'))));
            } else {
                let c = rawData;
                if (!isNaN(c) && c >= 0 && c <= 0xffffff)
                    rgba = [Math.floor(c >> 16), Math.floor((c % 0x10000) >> 8), Math.floor(c % 0x100)];
            }
            // let c = parseInt(rawData);
            // if(isNaN(c) || c<0 || c>0xffffff) { /*console.log(`输入数据rawData:${rawData}不正确 in T.color`);*/ return rawData; }
            // rgb = [Math.floor(c/0x10000), Math.floor((c%0x10000)/0x100), Math.floor(c%0x100)];
        } else {
            // console.error(`暂不支持该输入格式，rawData %o，将返回rawData in T.color`, rawData);
			rawData = 0x000000;
            return rawData;
        }
        (format.includes('#') || format.includes('0x')) && (rgba = rgba.map(n => { n = n.toString(16); n.length < 2 && (n = '0' + n); return n; }));
        format.includes('rgb') && (rgba[3] /= 255);
        return format.replace('{r}', rgba[0]).replace('{g}', rgba[1]).replace('{b}', rgba[2]).replace('{a}', rgba[3]);
    };

    /**
     * 返回格式化时间字符串
     * @param {Number} aj.t=0 - 时间戳
     * @param {String} aj.format='auto' - 自定义时间格式，默认auto:根据时间戳大小自动调整
     *                                    yy:年 MM:月 dd:日 hh:时 mm:分 ss:秒 qq:季 S:毫秒
     */
    this.time = function (aj) {
        typeof (aj) == 'number' && (aj = { t: aj });
        let a = T.merge({ t: 0, format: 'auto' }, aj || {});
        if (a.format == 'auto') {
            let ret = '', _t = {}, count = 3;
            _t['天'] = Math.floor(a.t / 86400000);
            a.t = a.t % 86400000;
            _t['时'] = Math.floor(a.t / 3600000);
            a.t = a.t % 3600000;
            _t['分'] = Math.floor(a.t / 60000);
            a.t = a.t % 60000;
            _t['秒'] = Math.floor(a.t / 1000);
            for (let i in _t) count && _t[i] != 0 && (ret += `${_t[i]}${i}`, count--);
            return ret;
        }
        return (new Date(a.t)).format(a.format);
    };

    /**
     * 获取某个属性
     * @param 
     */
    this.getp = function (base, prop) {
        if (typeof (base) != 'object') return false;
        let _pa = (prop + '').split('.');
        for (let p of _pa) { base = base[p]; if (base == undefined) return false; }
        return true;
    };
    /**
     * 正确设置属性
     * @param {Object} obj - 需要设置属性的对象
     * @param {String} prop - 设置的属性，如"style.bgimg"
     * @param {any} value - 设置的值
     */
    this.setp = function (obj, prop, value) {
        let _pa = (prop + '').split('.');
        _pa.reduce((pre, cur, idx) => (idx != _pa.length - 1 ? pre[cur] || (pre[cur] = {}) : (pre[cur] = value)), obj);
    };

    /**
     * 
     */
    this.mergea = function (data, json, deepLevel = 999) {
        try {
            for (let i = 0; i<json.length; i++) {
                if (typeof (json[i]) !== 'object' || json[i]._id === undefined) { // 2018.01.11 雍沛 - 考虑没有_id的情况
                    data.push(T.dcopy(json[i]));
                } else {
					json[i]._id.includes("＃") && (json[i]._id = json[i]._id.split("＃")[0]);
                    let lai = data.findIndex(ii => ii._id === json[i]._id);
                    let la = data[lai];
                    if (la) {
                        if (deepLevel === 0 || json[i].typ) { // 有typ就直接覆盖
                            data[lai] !== json[i] && (data[lai] = json[i]);
                        } else {
                            T.merge(la, json[i], [], deepLevel-1);
                        }
						console.log("T.mergea,找到并合并：_id:"+json[i]._id)//+JSON.stringify(la)
                    } else {
                    
                        data.push(json[i]);
                    }
                }
            }
        } catch (ex) {
            console.log(ex);
        }
    };
    /**
     * 将json中的属性合并到obj（递归遍历json）
     * @param {Object} obj - 主对象
     * @param {Object} json - 被合并的对象
     * @param {Object} objArr [obj,pobj] - 父对象（可选参数）
     * @param {Number} [deepLevel=999] - 最高递归层数
	 
     */
    this.merge = function (obj, json, objArr, deepLevel = 999) {
        if (typeof (obj) !== 'object' ) {
            console.error(`error: obj(${obj}) is not an object`);
            return false;
        }
        if (typeof (json) !== 'object' && json !== '{remove}') {
            console.warn(`error: json(${json}) is not an object`);
            return obj;
        }
        // 需要T.deval计算的属性名
        let _egret = T.isEgret(obj);
        objArr = objArr || [];
        let i, devalProp = ['x', 'y', 'addx', 'addy', 'w', 'width', 'h', 'height', 'scaleX', 'scaleY', 'rotation', 'time', 'sleep', 'delay'];
        let visited = []; // 遍历过的属性
        for (i in json) {
            if (json[i] !== null && typeof (json[i]) === 'object') {
                if (json[i] instanceof HTMLElement || T.isEgret(json[i])) { // 这里有可能会导致改到传入的值
                    obj[i] = json[i];
                } else {
                    if (i === 'data' && (obj[i] instanceof Array)) {
                        T.mergea(obj[i], json[i]);
                    } else if (typeof (obj[i]) !== 'object') { // 这里有可能会导致改到传入的值    2017/12/20前obj[i] == undefined
                        obj[i] !== json[i] && (obj[i] = json[i]);
                    } else {
                        json[i] instanceof Array && (obj[i] = [].concat(obj[i]))
                        deepLevel===0 ? obj[i] = json[i] : T.merge(obj[i], json[i], [], deepLevel-1);
                    }
                }
            } else {
                visited.push(i);
                if (json[i] === '{remove}') {
                    if (typeof (obj[i]) === 'object') {
                        if (obj[i] instanceof Array) {
                            obj[i] = [];
                        } else {
                            obj[i] = {};
                        }
                    } else {
                        delete obj[i];
                    }
                } else if (json[i] && json[i].includes && json[i].includes("＃")) {
                    obj[i] = json[i].split("＃")[0];
                }else if( json[i] !== undefined ){
                        obj[i] = (objArr[0] && objArr[1] && devalProp.includes(i) ? T.deval(i, objArr[1], json, { obj: objArr[0] }) : json[i]);
                }
            }
        }
        function _deepDeval(json, visited, objArr) {
            if (T.isEgret(json)) return;
            for (let i in json) {
                let p = json[i];
                let _egret = T.isEgret(p);
                if (typeof (p) == 'object' && !_egret && !(p instanceof TJH5) && !(p instanceof HTMLElement)) {
                    _deepDeval(p, visited, objArr);
                } else if (!visited.includes(i) && devalProp.includes(i)) {
                    json[i] = T.deval(i, objArr[1], json, { obj: objArr[0] });
                }
            }
        }
        objArr[0] && !objArr[1] && (objArr[1] = { x: jex().getcw() * 0.5, y: jex().getch() * 0.5, width: jex().getcw(), height: jex().getch() }); // 如果存在obj，可是他没父亲，则伪造一个带宽高的对象，以屏幕宽高为宽高
        objArr[0] && objArr[1] && _deepDeval(obj, visited, objArr);
        return obj;
    };

    /**
     * 删除一个对象
     * @param {String|Object} obj - 对象或对象的id 
     */
    this.removeObj = function (obj) {
		if (T.isEgret(obj)) {
			Jui.getSingle().removeObj(obj);
			return;
		}
        let id = typeof (obj) == 'string' ? obj : typeof (obj) == 'object' ? obj.name : '';
        obj = T.findObj(id);
        if (!obj) { console.log(`找不到对象id:${id} in T.removeObj`); return false; }
		id = obj.name;
        let children = obj.$children || [];
        children.forEach(c => T.removeObj(c));
        delete sj.obj[id];
        delete sj.clas[id];
        
        let dom = obj.dom;
        if (dom && dom.parentNode && dom.parentNode.id) {
            obj.dom.parentNode.removeChild(obj.dom);
        }
    };

    /**
     * 移除容器中的除去名字中包含某些字符外的孩子
     * @param {Object} c - 容器
     * @param {Array} ex - 不会被移除的孩子的关键词
     */
    this.removeChildren = function (c, aj) {
        aj = aj || {};
        if (T.isEgret(c)) {
            let exclude = ['zi'];//['ziImg', 'zibg', 'zitext', 'mask'];
            aj.exclude && (exclude = aj.exclude.concat(ex));
            for (let t = c.$children, s = t.length - 1; s >= 0; s--) {
                let name = c.getChildAt(s).name;
                if (!exclude.some(e => name.indexOf(e) != -1)) {
                    Jui.getSingle().removeObj(c.getChildAt(s))
                }
            }
            delete c.tChildren;
        } else {
            T.son(c, aj).forEach(s => T.removeObj(s));
        }
    };

    /**
     * 间隔执行
     * 按照所给时间间隔执行函数
     * @param {Array} fa - 函数数组，所有要做的方法
     * @param {Array} ta - 时间数组，每个方法做完多少毫秒后做下一个方法。如果只传一个元素，会自动补全数组
     * @param {Function} cb - 回调函数，所有方法做完后被执行
     * @param {Array} pa - 函数参数数组（arguments）的数组，每个元素是对应的函数的参数数组（arguments）。如果只传一个元素，会自动补全数组
     * @param {Array} oa - 函数调用对象数组
     */
    this.jgzx = function (fa, ta, cb, pa, oa) {
        'use strict';
        let len = (fa instanceof Array && fa.length) || (ta && typeof (ta) != 'string' && ta.length) || (pa && pa.length) || (oa && oa.length) || 0;
        
        if (len == 0) return;
        let _fa = fa instanceof Array ? fa : new Array(len).fill(fa);
        let _ta = ta instanceof Array ? ta : new Array(len).fill(ta || 0);
        let _pa = pa instanceof Array ? pa : new Array(len).fill(pa);
        let _oa = oa instanceof Array ? oa : new Array(len).fill(oa || window);
        let i = 0;
        if (ta == 0) {
            for (; i < len; i++) _fa[i].apply(_oa[i], [].concat(_pa[i]));
            return;
        }
        function _next() {
            _fa[i].apply(_oa[i], [].concat(_pa[i]));
            if (i < len) {
                // console.log(_ta[i] + '毫秒后执行下一步 in T.jgzx');
                if (i != len - 1) {
				
                    if(typeof (_ta[i]) == 'string' ){let str=_ta[i].replace(/\{idx\}/g, i);_ta[i] = parseFloat((window.ifeval? eval(str): T.doeval(str))) };
                    _setTimeout(_next, _ta[i]);
                    i++;
                } else {
                   // jg_aj.DEBUG && console.log('所有方法执行完毕 in T.jgzx');
                    cb && cb();
                }
            }
        }
        _next();
    };

    /**
     * 新增天姬动作
     * 对接收到的第一个jui播放一个天姬激光动画
     * @param {Array} arr - 接收到的jui数组
     */
    this.xztjdz = function (arr) {
        setJui(arr);
        let obj = sj.obj[arr[0]._id];
        if (obj) {
            // 获取需要播动画的对象
            let objs = [];
            if (arr[0].data && arr[0].data.length > 0) { // 改成只取第一条data
                objs = objs.concat(arr[0].data.map(d => d._id + '-' + arr[0]._id)[0]);
            } else {
                objs.push(arr[0]._id);
            }
            let pa = [];
            pa = objs.map(n => sj.obj[n]).map(function (o) {
                let pos = Jui.getSingle().getstagePoint(.5 * o.width, .5 * o.height, o);
                return [pos.x, pos.y, "转身手指黑板正面", o];
            });
            T.jgzx(Jui.getSingle().dz, 1000, null, pa, Jui.getSingle());
        }
    };

    /**
     * 返回n在区间[min, max]中的最近值
     */
    this.clamp = function (n, min, max) {
        return n < min ? min : n > max ? max : n;
    };

    /**
     * 线性插值
     * @param {Number} from - 起始值
     * @param {Number} to - 终止值
     * @param r - 比率
     * @return {Number} - from和to之间r比率的数字
     */
    this.lerp = function (from, to, r) {
        let dt = to - from;
        return dt < 0.01 ? to : from + dt * r;
    }

    
    this.jczl = function (pobj, aj) {
        'use strict';
        let _aj = aj || {};
        let g = _aj.g || { x: 0, y: 0.005 };
        let sl = pobj.$children.filter(c => c.bottom != undefined); // 受力对象
        let t = 20;
        T.timer(pobj, "重力场", { time: t }, function () {
            let dm = pobj.$children.filter(c => c.top != undefined); // 地面对象
            sl.forEach(function (o) {
                let ground = dm.find(d => d.left <= o.x && o.x <= d.right);
                let top = ground == undefined ? pobj.height + o.height : ground.top;
                let above = o.bottom <= top;
                g.x && (o.x += o.speed.x * t + 0.5 * g.x * t * t);
                g.y && (above ? o.y = Math.min(o.y + o.speed.y * t + 0.5 * g.y * t * t, top - o.height + o.anchorOffsetY) : o.y += o.speed.y * t + 0.5 * g.y * t * t);
                o.speed.x += g.x * t;
                o.speed.y += g.y * t;
                if (o.bottom == top) {
                    o.speed = { x: 0, y: 0 };
                }
            });
        });
    }

 
    this.dcopy = function (obj,exclude) {
        'use strict';
        return (function _deepCopy(obj, _ex) {
            if (typeof (obj) != 'object') return obj;
            if (obj instanceof HTMLElement) return obj.cloneNode(true);
            if (_ex.indexOf(obj) != -1) return obj;
            _ex.push(obj);
            let ret = obj instanceof Array ? [] : {};
            for (let i in obj){
                if(i!=exclude){
                if( typeof obj[i] =='object' && !T.isEgret(obj[i]) && !(obj[i] instanceof TJH5) ) {// 不深复制白鹭对象以及TJH5对象
                   ret[i] = _deepCopy(obj[i], _ex);					 
                }else ret[i] = obj[i];
				}
            }
            return ret;
        }(obj, []));
    };
    /**
     * 随机[0,a)或者[a,b)整数
     */
    this.rand = function (a, b) {
        b == undefined && (b = a, a = 0);
        return Math.floor(a + Math.random() * (b - a));
    };
    /**
     * 随机[0,a)或者[a,b)浮点数
     */
    var randAB = this.randAB = function (a, b) {
        b == undefined && (b = a, a = 0);
        return a + Math.random() * (b - a);
    };
    /**
     * 随机(-1,1)
     */
    var randS = this.randS = function () {
        return Math.random() < 0.5 ? -1 : 1;
    };

   
    this.findObj = function (aj) {
        if (aj == undefined || aj == '') return null;
        if (typeof (aj) == 'string') { 
			if(aj.indexOf('zitext')>1||aj.indexOf('ziImg')>1) {
				var ifimg=(aj.indexOf('ziImg')>1?1:0);
				aj=aj.replace(/zitext/,'').replace(/ziImg/,'');
				var fobj=sj.obj[T.findid(aj)];
				try {
					
				 if(fobj && T.isEgret(fobj) )fobj= fobj.getChildByName(T.findid(aj)+(ifimg?'ziImg':'zitext'));
				}catch(error){}
				return fobj||null;
			}
			return sj.obj[T.findid(aj)] || null;
			
		}
        if (aj instanceof TJH5 || T.isEgret(aj)) return aj;
        let a = T.merge({ include: '', exclude: ['zi'], json: sj.obj, many: false}, aj || {});
        a.include = [].concat(a.include); a.exclude = [].concat(a.exclude);
        let ret = [];
        for (let i in a.json)
            if (a.include.some(v => i.includes(v)) && a.exclude.every(v => !i.includes(v))) {
                ret.push(a.json[i]);
                if (!a.many) break;
            }
        return a.many ? ret : ret[0]||null;
    };
	
	 this.findobjs = function (aj,retn) {
		let ret = [];
        for (let i in sj.obj) {
			var f=1;
			 for (let n in aj) {
				 if(n=='id'){
					if(sj.obj[i]['name'].split('_')[1]!=(aj[n]))f=0 ;
				 }else{
					 
				   if(jex().ifequ(sj.obj[i], n, aj[n]) == 0) f=0;
				 }
			 }
		  if(f){
			  if(retn){
                  if(retn=='ca'){
                    ret.push(sj.clas[i][retn]);
                  }else{
                    retn=='idd'?ret.push(sj.obj[i].name.split('-')[0]):ret.push(sj.obj[i][retn]);
                  }
			  }else{ret.push(sj.obj[i]);
			  }
		  }
	     }
		 return ret;
	 }

     
    this.objFilter = function (obj = {}, cb) {
        let ret = [];
        for (let o in obj) cb && cb(obj[o]) && ret.push(obj[o]);
        return ret;
    };

     
    this.isMy = function (obj) {
        let clas = typeof (obj) == 'string' ? sj.clas[obj] : sj.clas[obj.name];
        if (!clas) console.log('找不到obj:$1 的clas in T.isMy', obj);
        return !(clas && clas.idus != undefined && clas.idus != jg_aj.idus);
    };

    //当前场景的abc	
    var dqcj = this.dqcj = function () {
        var nam = T.findObj({ include: [jg_aj.curproj + '_场景'], exclude: ['应用市场', 'jai'] });
		if (!nam) {
			 nam = T.findObj({ include: [jg_aj.sj.idc.split('_')[0] + '_场景'], exclude: ['应用市场', 'jai'] });
		}	

        if (!nam) {
            console.error('找不到当前场景'); return '';
        }
        var findd = nam.name.match(/[a-z]$/);
        if (findd == null) return '';
        return findd[0];
    }
	this.setArr = function (arr, f) {//数组中如无则push,合并数组
		try {
			if (arr == "") {
				dfdsf = 1;
			}
			f = [].concat(f);
			for (var i = 0; i < f.length; i++) {
				if (f[i] != null) {
					if (arr.indexOf(f[i]) == -1) arr.push(f[i]);
				}
			}

		} catch (ex) {
			
		}

	};

  
    this.route2act = function (route) {
        let _r = [].concat(route), len = _r.length;
        if (len % 2 != 1) { console.log(`路线数组$1长度不为单数`, _r); return []; }
        let ret = [], _p = _r[0];
        for (let i = 1; i < len; i += 2) {
            ret.push({ '动作': 'tween', x: `${_r[i]}%`, y: `${_r[i + 1]}%`, time: i == 1 ? 0 : (_p.time || 1000) });
        }
        return ret.concat(_p);
    }

 
    this.getPx = function (aj) { // 一道数学题，不知道怎么取名好
        let a = T.merge({ len: 50, angle: 90 }, aj);
        let p1 = a.p1, p2 = a.p2, len = a.len, dx = p2.x - p1.x, dy = p2.y - p1.y;
        if (a.pt) { // 有目标点时，算出应该取正角度还是负角度
            a.angle = Math.sign((a.pt.y - p1.y) * dx - (a.pt.x - p1.x) * dy) * Math.abs(a.angle);
        }
        let rad = a.angle / 180 * Math.PI, sin = Math.sin(rad), cos = Math.cos(rad);
        let px = { x: len * cos, y: len * sin };
        rad = Math.atan(dy / dx || Number.MAX_VALUE);
        let sign = dy < 0 && dx < 0 || dx < 0 && dy > 0 ? -1 : 1;
        sin = sign * Math.sin(rad);
        cos = sign * Math.cos(rad);
        return { x: px.x * cos - px.y * sin + p1.x, y: px.x * sin + px.y * cos + p1.y };
        // return {x:p2.x+(p1.x-p2.x)*0.5*cos-(p1.y-p2.y)*0.5*sin, y:p2.y+(p1.y-p2.y)*0.5*cos+(p1.x-p2.x)*0.5*sin};
        // return {x:p1.x+(p2.x-p1.x)*0.5*cos-(p2.y-p1.y)*0.5*sin, y:p1.y+(p2.y-p1.y)*0.5*cos+(p2.x-p1.x)*0.5*sin};
    };

 
    this.getResUrl = function (rawUrl = '', prefix = 'http://image.kxtui.com/pg/fi/') {
        if (typeof rawUrl != 'string') { console.error('unexpected rawUrl:$1 in T.getResUrl', rawUrl); return rawUrl; }
        if (rawUrl[0] == '/') return location.origin + rawUrl;
        if (rawUrl.includes('/') || rawUrl.includes('_') && !rawUrl.includes('.')) return rawUrl;
        let ua = rawUrl.split('.'), head = ua[0], tail = ua[1];
        if (ua.length > 2 || head.length == 13 && !/^[0-9]+$/.test(head)) { console.error(`unexpected rawUrl:${rawUrl} in T.getResUrl`); return rawUrl; }
        return prefix + head.slice(0, 5) + '/' + rawUrl;
    };
 
    this.func = function (curidc, aj) {
         
        aj = aj || {};
  	 
        if (curidc && curidc.indexOf('zitext') > 0) curidc = curidc.split('zitext')[0];
        if(!curidc.includes("_")) curidc = jg_aj.curproj + "_" + curidc;
       
        var ev = aj.ev || '';
        if (aj.stopp) {
            if (new Date().getTime() - sj.stopp < aj.stopp) return;

            sj.stopp = new Date().getTime();
        }
        var sai = "";
        if (sj.obj['jai_命令编辑']) sai = sj.obj['jai_命令编辑'].text;
        //if (sj.obj['jai_操作对象']) jg_aj.opid = sj.obj['jai_操作对象'].text;  //默认以显示为准，但是下面的指令前缀会更改  
        if (sai.indexOf("[_") == 0 || sai.indexOf("[d_") == 0) {
            if (!jg_aj.curproj) alert("jg_aj.curproj:" + jg_aj.curproj);
            jg_aj.opid = jg_aj.curproj + "_" + sai.split("]")[0].split("_")[1];//"[_游戏容器][树]左移：1"  全都取第一个[]中的值，就全是游戏容器。  2018-1-29  Tim   (sai.split("]").length>2?sai.split("]")[1].split("[")[1]:sai.split("]")[0].split("_")[1])
            let s = ['场景', '游戏层', '游戏窗', '控制容器', '游戏容器'].find(s => sai.indexOf(`[_${s}]`) == 0);
            if (s) sai = sai.replace(s, s + T.dqcj());
            if (!sj.clas[jg_aj.opid]) {
                var tid = T.findid(sai.split("]")[0].substring(1)); //  2018-1-29  Tim(sai.split("]").length>2?sai.split("]")[1]:sai.split("]")[0])
                if (tid.indexOf('-') > 0) {
                    // [_轮播图]轮播突出 默认选中clas 如果要选中data则 [d_轮播图]
                    if (sai.indexOf("[_") == 0) tid = tid.split('-')[1];
                }
                if (tid.indexOf('jai') == -1) jg_aj.opid = tid;
            }

            sj.obj['jai_命令编辑'].text = sai.substring(sai.indexOf(']') + 1);
            aj.tempedit = 2; aj.stopp = 0;
            T.func(jg_aj.opid, aj);//jg_aj.curproj +"_游戏容器"
            return;
        }
        if (sai.indexOf("操作") == 0) {
            sj.obj['jai_命令编辑'].text = '';
            jg_aj.opid = sai.split("：")[1];
            aj.tempedit = '0'; aj.stopp = 0;
            T.func(jg_aj.opid, aj);
            return;
        }
        if (sai.indexOf("选择：") == 0) {
            sj.obj['jai_命令编辑'].text = '';
            jg_aj.opid = sai.split("：")[1];
            aj.tempedit = 2;
            T.func(jg_aj.opid, aj)
            return;
        }

        if (sai != '' && sai.indexOf("逐一") >= 0) { // 让所有兄弟依次执行命令
            let fanwei = sai.match(/\[[^\[\]]*\]/);
            fanwei == null ? fanwei = '[]' : fanwei = fanwei[0];
            sai = sai.replace(fanwei, '');
            fanwei = fanwei.substring(1, fanwei.length - 1);
            let opobj = null;

            for (let c in sj.obj) {
                if (c.indexOf('jai') == -1 && c.indexOf(jg_aj.opid) != -1) {
                    opobj = sj.obj[c];
                    jg_aj.opid = c;
                    break;
                }
            }
            let objs = (opobj ? (opobj.parent ? opobj.parent.$children : []) : []).filter(o => !['zi', 'ass'].some(i => o.name.indexOf(i) != -1) && o.name.indexOf(fanwei) != -1);
            let order = sj.obj['jai_命令编辑'].text = sai.replace('逐一', '');
            let hasCounter = ['换图', '换辅图'].some(n => order.indexOf(n) != -1);
            let counter = 0;
            T.jgzx(function (curidc) {
                jg_aj.opid = curidc;
                sj.obj['jai_命令编辑'].text = order + (hasCounter ? '：' + counter++ : '');
                aj.tempedit = 2; aj.stopp = 0;
                jg_aj.editm = 2;
                T.func(curidc, aj);
            }, 2000, function () { jg_aj.editm = 0; }, objs);
            sj.obj['jai_命令编辑'].text = '';
            return;
        }
        let _saia = sai.split('：');
        if (sai.indexOf("新增元件") != -1 && _saia.length >= 2) {
            let _saia = sai.split('：');
            let times = parseInt(_saia[2]) || 1;
            let _sai = _saia[0] + "：" + _saia[1];
            let pa = [];
            for (let n = 1; n <= times; n++) pa.push(n);
            pa = pa.map(i => [['', { "editm": 1, "id": jg_aj.opid, "ai": _sai + (pa.length > 1 ? i : ''), ev: "T.xztjdz()" }, 'jai_执行']]);
            T.jgzx(csend, 1000, null, pa);
            sj.obj['jai_命令编辑'].text = '';
            return;
        }
        if (sai.indexOf("新增") == 0) { // 检查是否有量词

            let order = sj.obj['jai_命令编辑'].text = "新增";
            let count = sai.substring(2).match(/^[0-9]*[1-9][0-9]*/);
            count = parseInt((count ? count[0] : [0])[0]) || 0;
            if (count > 0) {
                T.jgzx(function () {
                    sj.obj['jai_命令编辑'].text = order;
                    T.func(objName, aj);
                }, 900, null, new Array(count));
                sj.obj['jai_命令编辑'].text = '';
                return;
            }
            // 算出新增的位置，并调用天姬动画
            let pos = { x: 0, y: 0 };
            let obj = sj.obj[T.findid(jg_aj.opid)];
            if (sj.obj["jai_天姬"] && obj) {
                jg_aj.uibuild = 0;
                window['激光']({
                    obj: sj.obj["jai_天姬"], tobj: obj, cb: function () {
                        jg_aj.uibuild = 1; console.log('jg_aj.uibuild改为1');
                    }
                });
                // 强调({obj});
            }
        }

         //======================================================================================data==============
        var data = {};

        if (jg_aj.opid != curidc) {
            jg_aj.opid = curidc;//扩展中有对jai的过滤
            if (sj.obj['jai_命令编辑']) {
                sj.obj['jai_命令编辑'].text = "";
                sj.obj['jai_代码'] && sj.obj['jai_代码'].removeChildren();
            }
        }
        
		var ropid = jg_aj.opid;
        let curidclas = ropid.indexOf('-') != -1 ? ropid.split('-')[1] : ropid;

        if (curidc == 'jai_执行') ropid = curidclas;	//执行，只对元件修改
        if (ropid != curidc&&curidc!='jai_控制中心开关') data.id = ropid;

        var editm = aj.tempedit || jg_aj.editm;
        if (editm) data.editm = editm;


        if (sai) {
            data.ai = sai;
            sai.indexOf("逐一") == 0 && (data.ai = sai.substring(2));
        }
        var dh = sj.obj['jai_对话输入'] ? sj.obj['jai_对话输入'].text : '';
        if (dh) data.dh = dh;
        var x1 = aj['x1'] || '';
        var y1 = aj["y1"] || '';

        if (x1 != '' || y1 != '' || ev == 'jui' || ev == 'dba' || ev > 0) {			//jui表示想往curidc中存aj.ev之外的属性
            var pobj = sj.obj[curidc]&&sj.obj[curidc].parent || sj.obj[jg_aj.topproj+'_游戏容器'+T.dqcj()];
            var newx1 = parseInt(x1 / pobj.width * 100);
            var newy1 = parseInt(y1 / pobj.height * 100);
            ev = ev || 'ds';
            if (ev == 13) {
                ev = "save";
                data.fname = "save/"+curidc.split('-')[0];
                data.text = encodeURI(T.findObj(curidc).text.replace(/\+/g, '+').replace(/\&/g, '&'));
                // data.text = encodeURI(j('#' + curidc + 'zitext_0').vale().replace(/\+/g, '+').replace(/\&/g, '&'));
            } else if (ev == 'ds') {
                data = [newx1, newy1, aj.time || '100'];
                curidc = curidc.split('-')[0];
			 } else if (ev == 'uri') {
				 data.uri={x:x1,y:y1};
            } else {
				var strw=sj.jui[curidclas]&&sj.jui[curidclas].style.w+''||'';
                if (x1) { aj['style.x'] = isNaN(strw)?(newx1 + '%'):x1; delete aj.x; }
                if (y1) { aj['style.y'] = isNaN(strw)?(newy1 + '%'):y1; delete aj.y; }
                delete aj.ev;
                data.dba = ['clas', aj, { _id: curidc }]
                if (curidc.indexOf("-") > 0) {
					 
   					 
                    data.dba = [sj.clas[curidc].idclas||curidc.split('-')[1], aj, { _id: curidc.split('-')[0] }]
                }
            }

        } else if (curidc == 'jai_保存') {

            var q =  eval(sj.obj[curidclas + '.json-jai_json编辑'].text == "" ? "" : '(' + sj.obj[curidclas + '.json-jai_json编辑'].text + ')');
            jex(sj.obj['' + aj.idclas + ''].$children).each(function (i, item) {
                var ida = item.name.split('-')[0].split('.')
                var v = item.text;
                //if(sj.obj[item).vale('begineditf')==1)ida.push(1)
                if (v && v.indexOf('/') != 0 && ida.length > 1 && ida[1] != 'json') {
                    q[ida[1]] = q[ida[1]] || [];
                    q[ida[1]].push(v)
                }
            })
            data = { ai: "保存：" + JSON.stringify(q), id: jg_aj.opid }

        } else if (curidc == 'jai_数据') {
            ev = "data";
            data = { "t": (jex("input[t='editt'][en='tn']").val() || "_cod"), "whe": (jex("input[t='editt'][en='tw']").val() || ""), "aj": { "limit": 15, "sort": { "idclas": 1, "顺序": 1 } } };
        } else if (curidc == 'jai_更多') {
            _setTimeout(function () {
                jex("input[t='editt'][en='tn']").attr("value", curidclas);
                jex("#duibiMain input[t],#duibiMain div[t]").attr("t", curidclas);
            }, 1000);
            ev = "data";
            data = { "t": curidclas, "whe": (""), "aj": { "limit": 15, "sort": { "idclas": 1, "顺序": 1 } } };
            if (!T.isEgret()) {
                jex(".tji-m-box4").removeClass("laydown4");
            }
        }

        if (aj.cb) { if (jg_aj.editm == 0 || jg_aj.editm == 1 && curidc.indexOf('jai') == 0) (window.ifeval? eval(aj.cb): T.doeval(aj.cb))   }//自动更新对话窗，在jai_对话发送
     	 jg_aj.curidc = curidc;
  		   

        if (typeof (LOCAL_JUI) == 'undefined')   csend([ev, data, curidc]);
        
        /**延时填写编辑器内容 */
       
        _setTimeout(function () {
            if ("undefined" != typeof app) {
                app.formatterToEditor && app.formatterToEditor();
            }
        }, 2000);
        if (sj.obj['jai_命令编辑']) sj.obj['jai_命令编辑'].text = "";
    };
	/**
     * 对比data
     */
    this.duibi = function (obj, op) { };
    this.searchmogo = function (op) { };
    this.pagego = function (op) { };
 
    this.save_cod = function (id, op) { 
    };
    this.escedit = function (id, t) {
        grid.escedit(id, t);
    }
    /**
     * op:0保存全部修改，1新增全部，2同步全部
     */
    this.saveAll_cod = function (op) { };
    this.csse_cod = function () { };
    this.editTn = function (curt) { };
    this.editTw = function (curt) { };
    this.toggleData = function (op) { };
    this.fillSearchHis = function () { 
    };
   
    this.connEach = function ( r ) {
     
    };
  
    this.proList = function ( op ) { 
    };
 
    this.arr2json = function (Arr) {
        let ret = {};
        if (typeof (Arr) == 'object')
            for (let n of Arr) {                          //遍历数组
                ret[n._id] = n;
            }
        return ret;
    };
    /////////////////////////////////////
    //
    ////////////////////////////////////
    this.faceAid = "118ea0078b2c490a8be8ef296907af94";        //EyeKey接口id
    this.faceKey = "97ded79c474049189228f648b2715bfd";        //EyeKey接口密钥
    this.faceCheck = function (url, func) {
        if (url) {
            db.gajax("http://api.eyekey.com/face/Check/checking?app_id=" + T.faceAid + "&app_key=" + T.faceKey + "&url=" + url, function (data) {
                var ret = JSON.parse(data);
                if (ret.face) {
                    // ret["face"][0].face_id
                    // ret["face"][0]["attribute"].age
                    // ret["face"][0]["attribute"].gender
                    console.log("年龄" + ret["face"][0]["attribute"].age + "，性别" + ret["face"][0]["attribute"].gender + "，ID" + ret["face"][0].face_id);
                    if (typeof (func) != "undefined") {
                        db.dofunc(func, { "age": ret["face"][0]["attribute"].age, "sex": ret["face"][0]["attribute"].gender, "faceid": ret["face"][0].face_id });
                    }
                }
            });
        }
    };
 
    this.randomString = function (len = 32) {
        var ochars = 'ABCDEFGHIJKMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
        var maxPos = ochars.length;
        var pwd = '';
        for (var i = 0; i < len; i++) {
            pwd += ochars.charAt(T.rand(maxPos));
        }
        return pwd;
    };
    /**
     * 计算两个Face的相似度，分值百分制。
     * @return {string} faceid1 - EyeKey系统中的图片ID
     * @return {string} faceid2 - EyeKey系统中的图片ID
     */
    this.faceCompare = function (faceid1, faceid2, func) {
        if (faceid1 && faceid2) {
            db.gajax("http://api.eyekey.com/face/Match/match_compare?app_id=" + T.faceAid + "&app_key=" + T.faceKey + "&face_id1=" + faceid1 + "&face_id2=" + faceid2, function (data) {
                var ret = JSON.parse(data);
                // similarity：[float] 0~100之间的实数，表示两个face的相似性
                console.log(ret["similarity"]);
                if (typeof (func) != "undefined") {
                    db.dofunc(func, { "similarity": (ret["similarity"] ? ret["similarity"] : parseInt(Math.random() * 20 + 20, 10)) });
                }
            });
        } else {
            console.log(`图片ID不完整`);
        }
    };
    this.showMyWords = function () {
        if (T.isEgret(sj.obj[T.findid("jai_我的气泡")])) {
            sj.obj[T.findid("jai_我的气泡")].$children[1].text = sj.obj[T.findid("jai_对话输入")].text;
        } else {
            sj.obj[T.findid("jai_我的气泡")].text = sj.obj[T.findid("jai_对话输入")].text;
            // sj.obj["jai_我的气泡"] 
        }
        sj.obj[T.findid("jai_对话输入")].text = '';
    };
    this.getx = function (obj) {
        var x = ((jex(obj.dom).position() || {}).left || 0) + obj.width * obj.anchorX;
        if (jex('[id*="_游戏容器"]').attr('style').indexOf("rotate(180deg)") > 0) x = jex('[id*="_游戏容器"]').width() - x;
        return x;
    };
    this.gety = function (obj) {
        var y = ((jex(obj.dom).position() || {}).top || 0) + obj.height * obj.anchorY;
        if (jex('[id*="_游戏容器"]').attr('style').indexOf("rotate(180deg)") > 0) y = jex('[id*="_游戏容器"]').height() - y;
        return y;
    };
    /**
     * 返回弱对象
     * @ajArr   弱对象参数组
     * @count   返回对象数量
     * @not     是否不查找父类是否有同名的弱对象
     */
    this.getzi = function (ajArr = [], count = 1, not = false) {
        var objArr = [];
        ajArr.length > count ? count = ajArr.length : count = count;
        for (var i = 0; i < count; i++) {
            if (i == ajArr.length) {
                i = ajArr.length - 1;
                count--;
            }
            var aj = ajArr[i];
            var obj;
            if (!aj.pobj.getChildByName(aj.obj.name + (aj._id || "") + i + "zi") || not) {
                if (aj.typ == 1) {
                    obj = new egret.Bitmap();
                    Jui.getSingle().setImg(obj, aj["png"]);
                } else if (aj.typ == 3) {
                    obj = new egret.DisplayObjectContainer();
                } else if (aj.typ == 4) {
                    obj = new egret.TextField();
                    for (let i in aj["Textfield"]) {
                        obj[i] = aj["Textfield"][i];
                    }
                    obj.text = aj.ca;
                } else if (aj.typ == 6) {
                    obj = new egret.MovieClip();
                    let w = window["T"].deval("w", aj.pobj, aj);
                    let h = window["T"].deval("h", aj.height, aj);
                    let scaleX = aj["scaleX"];
                    let scaleY = aj["scaleY"];
                    Jui.getSingle().setMove(obj, aj["json"], aj["png"], aj["count"], w, h, aj["dz"], scaleX, scaleY);
                } else if (aj.typ == 7) {
                    obj = new egret.Shape();
                    if (aj["shapeType"] == 1) {
                        obj.graphics.lineStyle(aj.chu || 3, window["T"].color(aj.bgcolor || 0, "0x"));
                        obj.graphics.moveTo(Jui.getSingle().deval("x0", aj.pobj, aj), Jui.getSingle().deval("y0", aj.pobj, aj));
                        obj.graphics.lineTo(Jui.getSingle().deval("x1", aj.pobj, aj), Jui.getSingle().deval("y1", aj.pobj, aj));
                    } else if (aj["shapeType"] == 2) {
                        obj.graphics.beginFill(window["T"].color(aj.bgcolor || 0, "0x"), aj.alpha || 1);
                        obj.graphics.drawCircle(Jui.getSingle().deval("x", aj.pobj, aj), Jui.getSingle().deval("y", aj.pobj, aj), Jui.getSingle().deval("r", aj.pobj, aj))
                        obj.graphics.endFill();
                    } else {
                        obj.graphics.beginFill(window["T"].color(aj.bgcolor || 0, "0x"), aj.alpha || 1);
                        obj.graphics.drawRect(Jui.getSingle().deval("x", aj.pobj, aj), Jui.getSingle().deval("y", aj.pobj, aj), Jui.getSingle().deval("w", aj.pobj, aj), Jui.getSingle().deval("h", aj.height, aj));
                        obj.graphics.endFill();
                    }
                } else if (aj.typ == "血条") {
                    var hpbar = new egret.Shape();
                    hpbar.graphics.beginFill(0xff0000, 1);
                    hpbar.graphics.drawRect(0, 0, Jui.getSingle().deval("w", aj.pobj, aj), Jui.getSingle().deval("h", aj.pobj, aj));
                    hpbar.graphics.endFill();
                    obj = new HP(hpbar, aj.hp);
                    //Jui.getSingle().actt({obj:obj,pobj:aj.pobj,data:{"actt":{"跟随":{"gs":aj.obj.name}}}})
                } else if (aj.typ == 10) {
                    obj = new egret.BitmapText();
                    obj.font = RES.getRes(aj.font || "rankfont1_fnt");
                    obj.text = aj.ca;
                }
            } else {
                obj = aj.pobj.getChildByName(aj.obj.name + (aj._id || "") + i + "zi")
            }
            if (aj.x != undefined) obj.x = Jui.getSingle().deval("x", aj.pobj, aj)//aj.x;
            if (aj.y != undefined) obj.y = Jui.getSingle().deval("y", aj.pobj, aj)//aj.y;
            if (aj.w != undefined) obj.width = Jui.getSingle().deval("w", aj.pobj, aj)//aj.w;
            if (aj.h != undefined) obj.height = Jui.getSingle().deval("h", aj.pobj, aj)//aj.h;
            aj["anchorOffsetX"] != undefined ? obj.anchorOffsetX = obj.width * aj["anchorOffsetX"] : obj.anchorOffsetX = obj.width * 0.5;
            aj["anchorOffsetY"] != undefined ? obj.anchorOffsetY = obj.width * aj["anchorOffsetY"] : obj.anchorOffsetY = obj.height * 0.5;
            if (aj["scaleX"]) obj.scaleX = aj["scaleX"];
            if (aj["scaleY"]) obj.scaleY = aj["scaleY"];
            if (aj["visible"]) obj.visible = aj["visible"];
            if (aj["alpha"]) obj.alpha = aj["alpha"];


            if (aj.typ == 3) {
                if (aj.bgcolor) {
                    var zicolor = new egret.Shape();
                    obj.addChild(zicolor);
                    zicolor.name = "zibgcolor";
                    zicolor.graphics.clear();
                    zicolor.graphics.beginFill(window["T"].color(aj.bgcolor, "0x"));
                    zicolor.graphics.drawRect(0, 0, obj.width, obj.height);
                    zicolor.graphics.endFill();
                }
                if (aj.bgimg) {
                    var zibg = new egret.Bitmap();
                    zibg.width = obj.width;
                    zibg.height = obj.height;
                    obj.addChild(zibg);
                    zibg.name = "zibgimg";
                    Jui.getSingle().setUrlImg(zibg, aj.bgimg)
                }
                if (aj.ca != undefined && aj.ca != "") {
                    var ziText = new egret.TextField();
                    obj.addChild(ziText);
                    ziText.name = "zitext";
                    ziText.width = obj.width;
                    ziText.height = obj.height;
                    for (let i in aj["Textfield"]) {
                        obj[i] = aj["Textfield"][i];
                    }
                }
            }
             
            obj.name = aj.obj.name + (aj._id || "") + i + "zi";
            objArr.push(obj);
        }
        return objArr;
    }
    
    // 帧动画
    this.Janimation = function (imgurl, jsonurl, divid, func) {
        this.imgurl = imgurl;
        this.jsonurl = jsonurl;
        this.div = jex('#' + divid);
        this.jsonData = null;
        this.actionTimer = null;
        this.objName = null;
        this.actionName = null;
        this.isLoop = null;
        this.initAction(func);
    };
    this.Janimation.prototype = {
        initAction: function (func) {
            var that = this;
            j.getJSON(this.jsonurl, function (data) {
                that.jsonData = data;
                if (that.jsonData != undefined) {
                    if(that.div.css("background-image")!=("url(" + that.imgurl + ")"))that.div.css({ "background": "", "background-size": "auto auto", "background-image": "url(" + that.imgurl + ")" });
					//补充帧图初始位置参数   2018-6-13   Tim
					var curRes = that.jsonData.res[Object.keys(that.jsonData.res)[0]];
					var curFrames = that.jsonData.mc[Object.keys(that.jsonData.mc)[0]].frames[0];
					that.div.css({ "width":curRes.w+"px","height":curRes.h+"px","background-position":"-"+curRes.x+"px -"+curRes.y+"px","transform":"translateX("+curFrames.x+"px) translateY("+curFrames.y+"px)"});
                    func();
                }
            });
        },
        playAction: function (objName, actionName, loop, cb) {
            clearInterval(this.actionTimer);
            this.objName = objName = objName || Object.keys(this.jsonData["mc"])[0];
            var dhLabels = this.jsonData["mc"][objName]["labels"];
            this.actionName = actionName = actionName || dhLabels[0].name;
            this.isLoop = loop || 0;
            var dhLabels = this.jsonData["mc"][objName]["labels"];
            var dhFrames = this.jsonData["mc"][objName]["frames"];
            var dhRes = this.jsonData["res"];
            var actionIndex = dhLabels.findIndex(l => l.name == actionName);
            if (actionIndex != -1) {
                var that = this;
                var dhframe = dhLabels[actionIndex]["frame"]-1;
                var dhend = dhLabels[actionIndex]["end"] - 2;
                var ii = dhframe;
                var curres;
                this.actionTimer = setInterval(function () {
                    if (ii >= dhend) {
                        ii = dhframe;
                        if (!that.isLoop) {
                            cb && cb();
                            clearInterval(that.actionTimer);
                            return;
                        }
                    }
                    curres = dhRes[dhFrames[ii]["res"]];
                    that.div.css({
                        "width": curres["w"] + "px",
                        "height": curres["h"] + "px",
                        "background-position": "-" + curres["x"] + "px -" + curres["y"] + "px",
                        "transform": "translateX(" + dhFrames[ii]["x"] + "px) translateY(" + dhFrames[ii]["y"] + "px)",
                        "-webkit-transform": "translateX(" + dhFrames[ii]["x"] + "px) translateY(" + dhFrames[ii]["y"] + "px)"
                    }).show();
                    ii++;
                }, 50);

            } else {
                console.log("没找到" + actionName + "动作");
            }

        },
        stopAction: function () {
            clearInterval(this.actionTimer);
        },
        reAction: function () {
            this.playAction(this.objName, this.actionName, this.isLoop);
        },
        removeAction: function () {
            clearInterval(this.actionTimer);
            delete this;
        }
    };
    // 声音
    this.webaudio = {
        context: null,
        sources: {}
    };
    var wa = this.webaudio;
    if(window.AudioContext)wa.context = new (window.AudioContext || window.webkitAudioContext)();
    // 播放name音频，如果此音频未被加载，则用url作为路径加载，然后再播放
    // loop控制是否循环播放
    this.playAudio = wa.playAudio = function (name, loop, url, cb) {
        var audio = wa.sources[name];
        if (audio) {
            if (audio.playingState == 0) {
                audio.playingState = 1;
                var source = wa.context.createBufferSource();
                source.connect(wa.context.destination);
                source.buffer = audio.buffer;
                source.loop = loop || false;
                source.onended = function (e) {
                    audio.playingState = 0;
                    cb && cb();
                };
                source.start();
                audio.source = source;
            } else {
                wa.stopAudio(name);
                wa.playAudio(name, loop, url, cb);
                // console.log("audio "+name+" is being played");
            }
        } else {
            if (url) {
                wa.downloadAndInitAudio(url, name, function (wa) {
                    wa.playAudio(name, loop, url, cb);
                });
            } else {
                console.log("audio " + name + " not exist");
            }
        }
    };
    // 停止name音频播放
    this.stopAudio = wa.stopAudio = function (name) {
        var audio = wa.sources[name];
        if (audio) {
            audio.source && audio.playingState == 1 && audio.source.stop(0);
            audio.playingState = 0;
        } else {
            console.log("audio " + name + " is not exist");
        }
    };
    // 下载并初始化音频
    this.downloadAndInitAudio = wa.downloadAndInitAudio = function (url, name, cb) {
        var xhr = new XMLHttpRequest(); //通过XHR下载音频文件
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function (e) { //下载完成
            wa.context.decodeAudioData(this.response, function (buffer) {
                var audio = {};
                audio.buffer = buffer;//告诉该源播放何物
                audio.playingState = 0;
                wa.sources[name] = audio;
                cb && cb(wa);
            }, function (e) { //解码出错时的回调函数
                console.log('Error decoding file', e);
            });
        };
        xhr.send();
    };
    // 将汉字转拼音
    this.pinyin = this.word2pinyin = (str) => pinyin.getFullChars(str).toLowerCase();
    // 判断字符串是否符合邮箱格式
    this.isMailAddress = (str) => typeof(str)=='string' && str.match(/([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/igm);
    // 判断是否手机号
    this.isPhoneNumber = function (str) {
        str = typeof(str)=="number" ? str+"" : typeof(str)=="string" ? str : "";
        return jex().IsMobileNum(str);
    };
    // 生成一个aid
    this.aid = function () {
        return db.getrd(6) + Date.now();
    };
    // 千分位格式化数字 参考自http://www.jb51.net/article/89550.htm
    // @param {String|Number} n - 数字
    // @return {String}
    this.qfw = function (n) {
    　　return (n+"").replace(/^(\d+)((\.\d+)?)$/,function(s,s1,s2){return s1.replace(/\d{1,3}(?=(\d{3})+$)/g,"$&,")+s2;});
    };
   
    this.safeWxApi = function (apiName, onsuccess, onfail) {
        console.log("进入T.safeWxApi");
        onfail = onfail || onsuccess;
        let todo = function () {
            wx.ready(function () {
                jg_aj.wxinit = 1;
                if (apiName) {
                    let apiList = [].concat(apiName);
                    wx.checkJsApi({
                        jsApiList: apiList,
                        success: function (res) {
                            apiList.every(function(api){return res.checkResult[api];}) ? onsuccess&&onsuccess() : onfail&&onfail();
                        }
                    });
                } else {
                    onsuccess && onsuccess();
                }
            });
        };
        if (!jg_aj.wxinit) { // 微信未初始化，则进行初始化
            // 请求get_config获取签名等wx.config所需的参数
            console.log("通过db.jp请求/wx/get_config接口");
            db.jp('https://n.kxtui.com/wx/get_config?projName='+jg_aj.sj.cti+'&url='+encodeURIComponent(location.href.split('#')[0]), function (i, json) {
                if (json.error) {
                    console.console('请求get_config出错，err：'+json.msg+' in 微信分享');
                    onfail && onfail();
                } else {
                    console.log('准备调用wx.config，参数：'+JSON.stringify(json.msg));
                    wx.config(json.msg);
                    todo();
                    wx.error(function (res) {
                        jg_aj.wxinit = 0;
                        console.error('微信js-sdk出错，res：'+JSON.stringify(res));
                        onfail && onfail();
                    });
                }
            });
        } else {
            todo();
        }
    };
   
    this.strLimit = function (str, limit, ellipsis) {
        let _str = str.substring(0, limit);
        ellipsis = ellipsis==undefined ? true : ellipsis;
        return str.length<=limit ? str : _str + (ellipsis?'...':'');
    };
  
    this.getUrl = function (aj) {
        let _url = aj.url || location.href;
        let cl = aj.clearList || [];
        let pj = aj.paramsJson || {};
        cl.forEach(function (c) { _url = jex().getUrl(c, '', _url); });
        for (let k in pj) _url = jex().getUrl(k, pj[k], _url);
        return _url;
    };
};
window.T = new Ts();
try{
    eval("1==1");
    window.ifeval = parseInt(jex().getv('eval',1));
	
}catch(e){
    window.ifeval = 0;
}

jg_aj = jg_aj || {};
jg_aj.jgtime = 0;
jg_aj.dqps = window.T.znps.COLOR.Color;
// 帮jg_aj.opid加一个setter，当值被改变时触发天姬动画

jg_aj.__defineGetter__('opid', function () { return this._opid; });
jg_aj.__defineSetter__('opid', function (v) {
    'use strict';
    v = v || '';
    console.time&&console.time('opid.setter ' + v);
    var curidc = v;
    if (v.indexOf('-') > 0) curidc = v.split('-')[1];
    if (curidc.indexOf('jai') == 0 && curidc != 'jai昵称_昵称' && curidc != 'jai_场景项') {
        return;
    }
    if (v && this._opid !== v && jg_aj.editm > 0 && (db.gett() - jg_aj.jgtime > 1000)) {
        jg_aj.jgtime = db.gett();
        let obj = sj.obj[T.findid(v)];
        if (sj.obj["jai_天姬"] && obj) {
            window['激光']({ obj: sj.obj["jai_天姬"], tobj: obj });
            // 强调({obj})
        }
    }
    this._opid = v;

    console.timeEnd&&console.timeEnd('opid.setter ' + v);
});

/** 
 * 从网上找的将汉字翻译为拼音的方法
 * http://www.jb51.net/article/100860.htm
 */ 
window.pinyin = (function () {
    var Pinyin = function (ops) {
        this.initialize(ops);
    },
        options = {
            checkPolyphone: false,
            charcase: 'default'
        };
    Pinyin.fn = Pinyin.prototype = {
        init: function (ops) {
            this.options = extend(options, ops);
        },
        initialize: function (ops) {
            this.init(ops);
            this.char_dict = "YDYQSXMWZSSXJBYMGCCZQPSSQBYCDSCDQLDYLYBSSJGYZZJJFKCCLZDHWDWZJLJPFYYNWJJTMYHZWZHFLZPPQHGSCYYYNJQYXXGJHHSDSJNKKTMOMLCRXYPSNQSECCQZGGLLYJLMYZZSECYKYYHQWJSSGGYXYZYJWWKDJHYCHMYXJTLXJYQBYXZLDWRDJRWYSRLDZJPCBZJJBRCFTLECZSTZFXXZHTRQHYBDLYCZSSYMMRFMYQZPWWJJYFCRWFDFZQPYDDWYXKYJAWJFFXYPSFTZYHHYZYSWCJYXSCLCXXWZZXNBGNNXBXLZSZSBSGPYSYZDHMDZBQBZCWDZZYYTZHBTSYYBZGNTNXQYWQSKBPHHLXGYBFMJEBJHHGQTJCYSXSTKZHLYCKGLYSMZXYALMELDCCXGZYRJXSDLTYZCQKCNNJWHJTZZCQLJSTSTBNXBTYXCEQXGKWJYFLZQLYHYXSPSFXLMPBYSXXXYDJCZYLLLSJXFHJXPJBTFFYABYXBHZZBJYZLWLCZGGBTSSMDTJZXPTHYQTGLJSCQFZKJZJQNLZWLSLHDZBWJNCJZYZSQQYCQYRZCJJWYBRTWPYFTWEXCSKDZCTBZHYZZYYJXZCFFZZMJYXXSDZZOTTBZLQWFCKSZSXFYRLNYJMBDTHJXSQQCCSBXYYTSYFBXDZTGBCNSLCYZZPSAZYZZSCJCSHZQYDXLBPJLLMQXTYDZXSQJTZPXLCGLQTZWJBHCTSYJSFXYEJJTLBGXSXJMYJQQPFZASYJNTYDJXKJCDJSZCBARTDCLYJQMWNQNCLLLKBYBZZSYHQQLTWLCCXTXLLZNTYLNEWYZYXCZXXGRKRMTCNDNJTSYYSSDQDGHSDBJGHRWRQLYBGLXHLGTGXBQJDZPYJSJYJCTMRNYMGRZJCZGJMZMGXMPRYXKJNYMSGMZJYMKMFXMLDTGFBHCJHKYLPFMDXLQJJSMTQGZSJLQDLDGJYCALCMZCSDJLLNXDJFFFFJCZFMZFFPFKHKGDPSXKTACJDHHZDDCRRCFQYJKQCCWJDXHWJLYLLZGCFCQDSMLZPBJJPLSBCJGGDCKKDEZSQCCKJGCGKDJTJDLZYCXKLQSCGJCLTFPCQCZGWPJDQYZJJBYJHSJDZWGFSJGZKQCCZLLPSPKJGQJHZZLJPLGJGJJTHJJYJZCZMLZLYQBGJWMLJKXZDZNJQSYZMLJLLJKYWXMKJLHSKJGBMCLYYMKXJQLBMLLKMDXXKWYXYSLMLPSJQQJQXYXFJTJDXMXXLLCXQBSYJBGWYMBGGBCYXPJYGPEPFGDJGBHBNSQJYZJKJKHXQFGQZKFHYGKHDKLLSDJQXPQYKYBNQSXQNSZSWHBSXWHXWBZZXDMNSJBSBKBBZKLYLXGWXDRWYQZMYWSJQLCJXXJXKJEQXSCYETLZHLYYYSDZPAQYZCMTLSHTZCFYZYXYLJSDCJQAGYSLCQLYYYSHMRQQKLDXZSCSSSYDYCJYSFSJBFRSSZQSBXXPXJYSDRCKGJLGDKZJZBDKTCSYQPYHSTCLDJDHMXMCGXYZHJDDTMHLTXZXYLYMOHYJCLTYFBQQXPFBDFHHTKSQHZYYWCNXXCRWHOWGYJLEGWDQCWGFJYCSNTMYTOLBYGWQWESJPWNMLRYDZSZTXYQPZGCWXHNGPYXSHMYQJXZTDPPBFYHZHTJYFDZWKGKZBLDNTSXHQEEGZZYLZMMZYJZGXZXKHKSTXNXXWYLYAPSTHXDWHZYMPXAGKYDXBHNHXKDPJNMYHYLPMGOCSLNZHKXXLPZZLBMLSFBHHGYGYYGGBHSCYAQTYWLXTZQCEZYDQDQMMHTKLLSZHLSJZWFYHQSWSCWLQAZYNYTLSXTHAZNKZZSZZLAXXZWWCTGQQTDDYZTCCHYQZFLXPSLZYGPZSZNGLNDQTBDLXGTCTAJDKYWNSYZLJHHZZCWNYYZYWMHYCHHYXHJKZWSXHZYXLYSKQYSPSLYZWMYPPKBYGLKZHTYXAXQSYSHXASMCHKDSCRSWJPWXSGZJLWWSCHSJHSQNHCSEGNDAQTBAALZZMSSTDQJCJKTSCJAXPLGGXHHGXXZCXPDMMHLDGTYBYSJMXHMRCPXXJZCKZXSHMLQXXTTHXWZFKHCCZDYTCJYXQHLXDHYPJQXYLSYYDZOZJNYXQEZYSQYAYXWYPDGXDDXSPPYZNDLTWRHXYDXZZJHTCXMCZLHPYYYYMHZLLHNXMYLLLMDCPPXHMXDKYCYRDLTXJCHHZZXZLCCLYLNZSHZJZZLNNRLWHYQSNJHXYNTTTKYJPYCHHYEGKCTTWLGQRLGGTGTYGYHPYHYLQYQGCWYQKPYYYTTTTLHYHLLTYTTSPLKYZXGZWGPYDSSZZDQXSKCQNMJJZZBXYQMJRTFFBTKHZKBXLJJKDXJTLBWFZPPTKQTZTGPDGNTPJYFALQMKGXBDCLZFHZCLLLLADPMXDJHLCCLGYHDZFGYDDGCYYFGYDXKSSEBDHYKDKDKHNAXXYBPBYYHXZQGAFFQYJXDMLJCSQZLLPCHBSXGJYNDYBYQSPZWJLZKSDDTACTBXZDYZYPJZQSJNKKTKNJDJGYYPGTLFYQKASDNTCYHBLWDZHBBYDWJRYGKZYHEYYFJMSDTYFZJJHGCXPLXHLDWXXJKYTCYKSSSMTWCTTQZLPBSZDZWZXGZAGYKTYWXLHLSPBCLLOQMMZSSLCMBJCSZZKYDCZJGQQDSMCYTZQQLWZQZXSSFPTTFQMDDZDSHDTDWFHTDYZJYQJQKYPBDJYYXTLJHDRQXXXHAYDHRJLKLYTWHLLRLLRCXYLBWSRSZZSYMKZZHHKYHXKSMDSYDYCJPBZBSQLFCXXXNXKXWYWSDZYQOGGQMMYHCDZTTFJYYBGSTTTYBYKJDHKYXBELHTYPJQNFXFDYKZHQKZBYJTZBXHFDXKDASWTAWAJLDYJSFHBLDNNTNQJTJNCHXFJSRFWHZFMDRYJYJWZPDJKZYJYMPCYZNYNXFBYTFYFWYGDBNZZZDNYTXZEMMQBSQEHXFZMBMFLZZSRXYMJGSXWZJSPRYDJSJGXHJJGLJJYNZZJXHGXKYMLPYYYCXYTWQZSWHWLYRJLPXSLSXMFSWWKLCTNXNYNPSJSZHDZEPTXMYYWXYYSYWLXJQZQXZDCLEEELMCPJPCLWBXSQHFWWTFFJTNQJHJQDXHWLBYZNFJLALKYYJLDXHHYCSTYYWNRJYXYWTRMDRQHWQCMFJDYZMHMYYXJWMYZQZXTLMRSPWWCHAQBXYGZYPXYYRRCLMPYMGKSJSZYSRMYJSNXTPLNBAPPYPYLXYYZKYNLDZYJZCZNNLMZHHARQMPGWQTZMXXMLLHGDZXYHXKYXYCJMFFYYHJFSBSSQLXXNDYCANNMTCJCYPRRNYTYQNYYMBMSXNDLYLYSLJRLXYSXQMLLYZLZJJJKYZZCSFBZXXMSTBJGNXYZHLXNMCWSCYZYFZLXBRNNNYLBNRTGZQYSATSWRYHYJZMZDHZGZDWYBSSCSKXSYHYTXXGCQGXZZSHYXJSCRHMKKBXCZJYJYMKQHZJFNBHMQHYSNJNZYBKNQMCLGQHWLZNZSWXKHLJHYYBQLBFCDSXDLDSPFZPSKJYZWZXZDDXJSMMEGJSCSSMGCLXXKYYYLNYPWWWGYDKZJGGGZGGSYCKNJWNJPCXBJJTQTJWDSSPJXZXNZXUMELPXFSXTLLXCLJXJJLJZXCTPSWXLYDHLYQRWHSYCSQYYBYAYWJJJQFWQCQQCJQGXALDBZZYJGKGXPLTZYFXJLTPADKYQHPMATLCPDCKBMTXYBHKLENXDLEEGQDYMSAWHZMLJTWYGXLYQZLJEEYYBQQFFNLYXRDSCTGJGXYYNKLLYQKCCTLHJLQMKKZGCYYGLLLJDZGYDHZWXPYSJBZKDZGYZZHYWYFQYTYZSZYEZZLYMHJJHTSMQWYZLKYYWZCSRKQYTLTDXWCTYJKLWSQZWBDCQYNCJSRSZJLKCDCDTLZZZACQQZZDDXYPLXZBQJYLZLLLQDDZQJYJYJZYXNYYYNYJXKXDAZWYRDLJYYYRJLXLLDYXJCYWYWNQCCLDDNYYYNYCKCZHXXCCLGZQJGKWPPCQQJYSBZZXYJSQPXJPZBSBDSFNSFPZXHDWZTDWPPTFLZZBZDMYYPQJRSDZSQZSQXBDGCPZSWDWCSQZGMDHZXMWWFYBPDGPHTMJTHZSMMBGZMBZJCFZWFZBBZMQCFMBDMCJXLGPNJBBXGYHYYJGPTZGZMQBQTCGYXJXLWZKYDPDYMGCFTPFXYZTZXDZXTGKMTYBBCLBJASKYTSSQYYMSZXFJEWLXLLSZBQJJJAKLYLXLYCCTSXMCWFKKKBSXLLLLJYXTYLTJYYTDPJHNHNNKBYQNFQYYZBYYESSESSGDYHFHWTCJBSDZZTFDMXHCNJZYMQWSRYJDZJQPDQBBSTJGGFBKJBXTGQHNGWJXJGDLLTHZHHYYYYYYSXWTYYYCCBDBPYPZYCCZYJPZYWCBDLFWZCWJDXXHYHLHWZZXJTCZLCDPXUJCZZZLYXJJTXPHFXWPYWXZPTDZZBDZCYHJHMLXBQXSBYLRDTGJRRCTTTHYTCZWMXFYTWWZCWJWXJYWCSKYBZSCCTZQNHXNWXXKHKFHTSWOCCJYBCMPZZYKBNNZPBZHHZDLSYDDYTYFJPXYNGFXBYQXCBHXCPSXTYZDMKYSNXSXLHKMZXLYHDHKWHXXSSKQYHHCJYXGLHZXCSNHEKDTGZXQYPKDHEXTYKCNYMYYYPKQYYYKXZLTHJQTBYQHXBMYHSQCKWWYLLHCYYLNNEQXQWMCFBDCCMLJGGXDQKTLXKGNQCDGZJWYJJLYHHQTTTNWCHMXCXWHWSZJYDJCCDBQCDGDNYXZTHCQRXCBHZTQCBXWGQWYYBXHMBYMYQTYEXMQKYAQYRGYZSLFYKKQHYSSQYSHJGJCNXKZYCXSBXYXHYYLSTYCXQTHYSMGSCPMMGCCCCCMTZTASMGQZJHKLOSQYLSWTMXSYQKDZLJQQYPLSYCZTCQQPBBQJZCLPKHQZYYXXDTDDTSJCXFFLLCHQXMJLWCJCXTSPYCXNDTJSHJWXDQQJSKXYAMYLSJHMLALYKXCYYDMNMDQMXMCZNNCYBZKKYFLMCHCMLHXRCJJHSYLNMTJZGZGYWJXSRXCWJGJQHQZDQJDCJJZKJKGDZQGJJYJYLXZXXCDQHHHEYTMHLFSBDJSYYSHFYSTCZQLPBDRFRZTZYKYWHSZYQKWDQZRKMSYNBCRXQBJYFAZPZZEDZCJYWBCJWHYJBQSZYWRYSZPTDKZPFPBNZTKLQYHBBZPNPPTYZZYBQNYDCPJMMCYCQMCYFZZDCMNLFPBPLNGQJTBTTNJZPZBBZNJKLJQYLNBZQHKSJZNGGQSZZKYXSHPZSNBCGZKDDZQANZHJKDRTLZLSWJLJZLYWTJNDJZJHXYAYNCBGTZCSSQMNJPJYTYSWXZFKWJQTKHTZPLBHSNJZSYZBWZZZZLSYLSBJHDWWQPSLMMFBJDWAQYZTCJTBNNWZXQXCDSLQGDSDPDZHJTQQPSWLYYJZLGYXYZLCTCBJTKTYCZJTQKBSJLGMGZDMCSGPYNJZYQYYKNXRPWSZXMTNCSZZYXYBYHYZAXYWQCJTLLCKJJTJHGDXDXYQYZZBYWDLWQCGLZGJGQRQZCZSSBCRPCSKYDZNXJSQGXSSJMYDNSTZTPBDLTKZWXQWQTZEXNQCZGWEZKSSBYBRTSSSLCCGBPSZQSZLCCGLLLZXHZQTHCZMQGYZQZNMCOCSZJMMZSQPJYGQLJYJPPLDXRGZYXCCSXHSHGTZNLZWZKJCXTCFCJXLBMQBCZZWPQDNHXLJCTHYZLGYLNLSZZPCXDSCQQHJQKSXZPBAJYEMSMJTZDXLCJYRYYNWJBNGZZTMJXLTBSLYRZPYLSSCNXPHLLHYLLQQZQLXYMRSYCXZLMMCZLTZSDWTJJLLNZGGQXPFSKYGYGHBFZPDKMWGHCXMSGDXJMCJZDYCABXJDLNBCDQYGSKYDQTXDJJYXMSZQAZDZFSLQXYJSJZYLBTXXWXQQZBJZUFBBLYLWDSLJHXJYZJWTDJCZFQZQZZDZSXZZQLZCDZFJHYSPYMPQZMLPPLFFXJJNZZYLSJEYQZFPFZKSYWJJJHRDJZZXTXXGLGHYDXCSKYSWMMZCWYBAZBJKSHFHJCXMHFQHYXXYZFTSJYZFXYXPZLCHMZMBXHZZSXYFYMNCWDABAZLXKTCSHHXKXJJZJSTHYGXSXYYHHHJWXKZXSSBZZWHHHCWTZZZPJXSNXQQJGZYZYWLLCWXZFXXYXYHXMKYYSWSQMNLNAYCYSPMJKHWCQHYLAJJMZXHMMCNZHBHXCLXTJPLTXYJHDYYLTTXFSZHYXXSJBJYAYRSMXYPLCKDUYHLXRLNLLSTYZYYQYGYHHSCCSMZCTZQXKYQFPYYRPFFLKQUNTSZLLZMWWTCQQYZWTLLMLMPWMBZSSTZRBPDDTLQJJBXZCSRZQQYGWCSXFWZLXCCRSZDZMCYGGDZQSGTJSWLJMYMMZYHFBJDGYXCCPSHXNZCSBSJYJGJMPPWAFFYFNXHYZXZYLREMZGZCYZSSZDLLJCSQFNXZKPTXZGXJJGFMYYYSNBTYLBNLHPFZDCYFBMGQRRSSSZXYSGTZRNYDZZCDGPJAFJFZKNZBLCZSZPSGCYCJSZLMLRSZBZZLDLSLLYSXSQZQLYXZLSKKBRXBRBZCYCXZZZEEYFGKLZLYYHGZSGZLFJHGTGWKRAAJYZKZQTSSHJJXDCYZUYJLZYRZDQQHGJZXSSZBYKJPBFRTJXLLFQWJHYLQTYMBLPZDXTZYGBDHZZRBGXHWNJTJXLKSCFSMWLSDQYSJTXKZSCFWJLBXFTZLLJZLLQBLSQMQQCGCZFPBPHZCZJLPYYGGDTGWDCFCZQYYYQYSSCLXZSKLZZZGFFCQNWGLHQYZJJCZLQZZYJPJZZBPDCCMHJGXDQDGDLZQMFGPSYTSDYFWWDJZJYSXYYCZCYHZWPBYKXRYLYBHKJKSFXTZJMMCKHLLTNYYMSYXYZPYJQYCSYCWMTJJKQYRHLLQXPSGTLYYCLJSCPXJYZFNMLRGJJTYZBXYZMSJYJHHFZQMSYXRSZCWTLRTQZSSTKXGQKGSPTGCZNJSJCQCXHMXGGZTQYDJKZDLBZSXJLHYQGGGTHQSZPYHJHHGYYGKGGCWJZZYLCZLXQSFTGZSLLLMLJSKCTBLLZZSZMMNYTPZSXQHJCJYQXYZXZQZCPSHKZZYSXCDFGMWQRLLQXRFZTLYSTCTMJCXJJXHJNXTNRZTZFQYHQGLLGCXSZSJDJLJCYDSJTLNYXHSZXCGJZYQPYLFHDJSBPCCZHJJJQZJQDYBSSLLCMYTTMQTBHJQNNYGKYRQYQMZGCJKPDCGMYZHQLLSLLCLMHOLZGDYYFZSLJCQZLYLZQJESHNYLLJXGJXLYSYYYXNBZLJSSZCQQCJYLLZLTJYLLZLLBNYLGQCHXYYXOXCXQKYJXXXYKLXSXXYQXCYKQXQCSGYXXYQXYGYTQOHXHXPYXXXULCYEYCHZZCBWQBBWJQZSCSZSSLZYLKDESJZWMYMCYTSDSXXSCJPQQSQYLYYZYCMDJDZYWCBTJSYDJKCYDDJLBDJJSODZYSYXQQYXDHHGQQYQHDYXWGMMMAJDYBBBPPBCMUUPLJZSMTXERXJMHQNUTPJDCBSSMSSSTKJTSSMMTRCPLZSZMLQDSDMJMQPNQDXCFYNBFSDQXYXHYAYKQYDDLQYYYSSZBYDSLNTFQTZQPZMCHDHCZCWFDXTMYQSPHQYYXSRGJCWTJTZZQMGWJJTJHTQJBBHWZPXXHYQFXXQYWYYHYSCDYDHHQMNMTMWCPBSZPPZZGLMZFOLLCFWHMMSJZTTDHZZYFFYTZZGZYSKYJXQYJZQBHMBZZLYGHGFMSHPZFZSNCLPBQSNJXZSLXXFPMTYJYGBXLLDLXPZJYZJYHHZCYWHJYLSJEXFSZZYWXKZJLUYDTMLYMQJPWXYHXSKTQJEZRPXXZHHMHWQPWQLYJJQJJZSZCPHJLCHHNXJLQWZJHBMZYXBDHHYPZLHLHLGFWLCHYYTLHJXCJMSCPXSTKPNHQXSRTYXXTESYJCTLSSLSTDLLLWWYHDHRJZSFGXTSYCZYNYHTDHWJSLHTZDQDJZXXQHGYLTZPHCSQFCLNJTCLZPFSTPDYNYLGMJLLYCQHYSSHCHYLHQYQTMZYPBYWRFQYKQSYSLZDQJMPXYYSSRHZJNYWTQDFZBWWTWWRXCWHGYHXMKMYYYQMSMZHNGCEPMLQQMTCWCTMMPXJPJJHFXYYZSXZHTYBMSTSYJTTQQQYYLHYNPYQZLCYZHZWSMYLKFJXLWGXYPJYTYSYXYMZCKTTWLKSMZSYLMPWLZWXWQZSSAQSYXYRHSSNTSRAPXCPWCMGDXHXZDZYFJHGZTTSBJHGYZSZYSMYCLLLXBTYXHBBZJKSSDMALXHYCFYGMQYPJYCQXJLLLJGSLZGQLYCJCCZOTYXMTMTTLLWTGPXYMZMKLPSZZZXHKQYSXCTYJZYHXSHYXZKXLZWPSQPYHJWPJPWXQQYLXSDHMRSLZZYZWTTCYXYSZZSHBSCCSTPLWSSCJCHNLCGCHSSPHYLHFHHXJSXYLLNYLSZDHZXYLSXLWZYKCLDYAXZCMDDYSPJTQJZLNWQPSSSWCTSTSZLBLNXSMNYYMJQBQHRZWTYYDCHQLXKPZWBGQYBKFCMZWPZLLYYLSZYDWHXPSBCMLJBSCGBHXLQHYRLJXYSWXWXZSLDFHLSLYNJLZYFLYJYCDRJLFSYZFSLLCQYQFGJYHYXZLYLMSTDJCYHBZLLNWLXXYGYYHSMGDHXXHHLZZJZXCZZZCYQZFNGWPYLCPKPYYPMCLQKDGXZGGWQBDXZZKZFBXXLZXJTPJPTTBYTSZZDWSLCHZHSLTYXHQLHYXXXYYZYSWTXZKHLXZXZPYHGCHKCFSYHUTJRLXFJXPTZTWHPLYXFCRHXSHXKYXXYHZQDXQWULHYHMJTBFLKHTXCWHJFWJCFPQRYQXCYYYQYGRPYWSGSUNGWCHKZDXYFLXXHJJBYZWTSXXNCYJJYMSWZJQRMHXZWFQSYLZJZGBHYNSLBGTTCSYBYXXWXYHXYYXNSQYXMQYWRGYQLXBBZLJSYLPSYTJZYHYZAWLRORJMKSCZJXXXYXCHDYXRYXXJDTSQFXLYLTSFFYXLMTYJMJUYYYXLTZCSXQZQHZXLYYXZHDNBRXXXJCTYHLBRLMBRLLAXKYLLLJLYXXLYCRYLCJTGJCMTLZLLCYZZPZPCYAWHJJFYBDYYZSMPCKZDQYQPBPCJPDCYZMDPBCYYDYCNNPLMTMLRMFMMGWYZBSJGYGSMZQQQZTXMKQWGXLLPJGZBQCDJJJFPKJKCXBLJMSWMDTQJXLDLPPBXCWRCQFBFQJCZAHZGMYKPHYYHZYKNDKZMBPJYXPXYHLFPNYYGXJDBKXNXHJMZJXSTRSTLDXSKZYSYBZXJLXYSLBZYSLHXJPFXPQNBYLLJQKYGZMCYZZYMCCSLCLHZFWFWYXZMWSXTYNXJHPYYMCYSPMHYSMYDYSHQYZCHMJJMZCAAGCFJBBHPLYZYLXXSDJGXDHKXXTXXNBHRMLYJSLTXMRHNLXQJXYZLLYSWQGDLBJHDCGJYQYCMHWFMJYBMBYJYJWYMDPWHXQLDYGPDFXXBCGJSPCKRSSYZJMSLBZZJFLJJJLGXZGYXYXLSZQYXBEXYXHGCXBPLDYHWETTWWCJMBTXCHXYQXLLXFLYXLLJLSSFWDPZSMYJCLMWYTCZPCHQEKCQBWLCQYDPLQPPQZQFJQDJHYMMCXTXDRMJWRHXCJZYLQXDYYNHYYHRSLSRSYWWZJYMTLTLLGTQCJZYABTCKZCJYCCQLJZQXALMZYHYWLWDXZXQDLLQSHGPJFJLJHJABCQZDJGTKHSSTCYJLPSWZLXZXRWGLDLZRLZXTGSLLLLZLYXXWGDZYGBDPHZPBRLWSXQBPFDWOFMWHLYPCBJCCLDMBZPBZZLCYQXLDOMZBLZWPDWYYGDSTTHCSQSCCRSSSYSLFYBFNTYJSZDFNDPDHDZZMBBLSLCMYFFGTJJQWFTMTPJWFNLBZCMMJTGBDZLQLPYFHYYMJYLSDCHDZJWJCCTLJCLDTLJJCPDDSQDSSZYBNDBJLGGJZXSXNLYCYBJXQYCBYLZCFZPPGKCXZDZFZTJJFJSJXZBNZYJQTTYJYHTYCZHYMDJXTTMPXSPLZCDWSLSHXYPZGTFMLCJTYCBPMGDKWYCYZCDSZZYHFLYCTYGWHKJYYLSJCXGYWJCBLLCSNDDBTZBSCLYZCZZSSQDLLMQYYHFSLQLLXFTYHABXGWNYWYYPLLSDLDLLBJCYXJZMLHLJDXYYQYTDLLLBUGBFDFBBQJZZMDPJHGCLGMJJPGAEHHBWCQXAXHHHZCHXYPHJAXHLPHJPGPZJQCQZGJJZZUZDMQYYBZZPHYHYBWHAZYJHYKFGDPFQSDLZMLJXKXGALXZDAGLMDGXMWZQYXXDXXPFDMMSSYMPFMDMMKXKSYZYSHDZKXSYSMMZZZMSYDNZZCZXFPLSTMZDNMXCKJMZTYYMZMZZMSXHHDCZJEMXXKLJSTLWLSQLYJZLLZJSSDPPMHNLZJCZYHMXXHGZCJMDHXTKGRMXFWMCGMWKDTKSXQMMMFZZYDKMSCLCMPCGMHSPXQPZDSSLCXKYXTWLWJYAHZJGZQMCSNXYYMMPMLKJXMHLMLQMXCTKZMJQYSZJSYSZHSYJZJCDAJZYBSDQJZGWZQQXFKDMSDJLFWEHKZQKJPEYPZYSZCDWYJFFMZZYLTTDZZEFMZLBNPPLPLPEPSZALLTYLKCKQZKGENQLWAGYXYDPXLHSXQQWQCQXQCLHYXXMLYCCWLYMQYSKGCHLCJNSZKPYZKCQZQLJPDMDZHLASXLBYDWQLWDNBQCRYDDZTJYBKBWSZDXDTNPJDTCTQDFXQQMGNXECLTTBKPWSLCTYQLPWYZZKLPYGZCQQPLLKCCYLPQMZCZQCLJSLQZDJXLDDHPZQDLJJXZQDXYZQKZLJCYQDYJPPYPQYKJYRMPCBYMCXKLLZLLFQPYLLLMBSGLCYSSLRSYSQTMXYXZQZFDZUYSYZTFFMZZSMZQHZSSCCMLYXWTPZGXZJGZGSJSGKDDHTQGGZLLBJDZLCBCHYXYZHZFYWXYZYMSDBZZYJGTSMTFXQYXQSTDGSLNXDLRYZZLRYYLXQHTXSRTZNGZXBNQQZFMYKMZJBZYMKBPNLYZPBLMCNQYZZZSJZHJCTZKHYZZJRDYZHNPXGLFZTLKGJTCTSSYLLGZRZBBQZZKLPKLCZYSSUYXBJFPNJZZXCDWXZYJXZZDJJKGGRSRJKMSMZJLSJYWQSKYHQJSXPJZZZLSNSHRNYPZTWCHKLPSRZLZXYJQXQKYSJYCZTLQZYBBYBWZPQDWWYZCYTJCJXCKCWDKKZXSGKDZXWWYYJQYYTCYTDLLXWKCZKKLCCLZCQQDZLQLCSFQCHQHSFSMQZZLNBJJZBSJHTSZDYSJQJPDLZCDCWJKJZZLPYCGMZWDJJBSJQZSYZYHHXJPBJYDSSXDZNCGLQMBTSFSBPDZDLZNFGFJGFSMPXJQLMBLGQCYYXBQKDJJQYRFKZTJDHCZKLBSDZCFJTPLLJGXHYXZCSSZZXSTJYGKGCKGYOQXJPLZPBPGTGYJZGHZQZZLBJLSQFZGKQQJZGYCZBZQTLDXRJXBSXXPZXHYZYCLWDXJJHXMFDZPFZHQHQMQGKSLYHTYCGFRZGNQXCLPDLBZCSCZQLLJBLHBZCYPZZPPDYMZZSGYHCKCPZJGSLJLNSCDSLDLXBMSTLDDFJMKDJDHZLZXLSZQPQPGJLLYBDSZGQLBZLSLKYYHZTTNTJYQTZZPSZQZTLLJTYYLLQLLQYZQLBDZLSLYYZYMDFSZSNHLXZNCZQZPBWSKRFBSYZMTHBLGJPMCZZLSTLXSHTCSYZLZBLFEQHLXFLCJLYLJQCBZLZJHHSSTBRMHXZHJZCLXFNBGXGTQJCZTMSFZKJMSSNXLJKBHSJXNTNLZDNTLMSJXGZJYJCZXYJYJWRWWQNZTNFJSZPZSHZJFYRDJSFSZJZBJFZQZZHZLXFYSBZQLZSGYFTZDCSZXZJBQMSZKJRHYJZCKMJKHCHGTXKXQGLXPXFXTRTYLXJXHDTSJXHJZJXZWZLCQSBTXWXGXTXXHXFTSDKFJHZYJFJXRZSDLLLTQSQQZQWZXSYQTWGWBZCGZLLYZBCLMQQTZHZXZXLJFRMYZFLXYSQXXJKXRMQDZDMMYYBSQBHGZMWFWXGMXLZPYYTGZYCCDXYZXYWGSYJYZNBHPZJSQSYXSXRTFYZGRHZTXSZZTHCBFCLSYXZLZQMZLMPLMXZJXSFLBYZMYQHXJSXRXSQZZZSSLYFRCZJRCRXHHZXQYDYHXSJJHZCXZBTYNSYSXJBQLPXZQPYMLXZKYXLXCJLCYSXXZZLXDLLLJJYHZXGYJWKJRWYHCPSGNRZLFZWFZZNSXGXFLZSXZZZBFCSYJDBRJKRDHHGXJLJJTGXJXXSTJTJXLYXQFCSGSWMSBCTLQZZWLZZKXJMLTMJYHSDDBXGZHDLBMYJFRZFSGCLYJBPMLYSMSXLSZJQQHJZFXGFQFQBPXZGYYQXGZTCQWYLTLGWSGWHRLFSFGZJMGMGBGTJFSYZZGZYZAFLSSPMLPFLCWBJZCLJJMZLPJJLYMQDMYYYFBGYGYZMLYZDXQYXRQQQHSYYYQXYLJTYXFSFSLLGNQCYHYCWFHCCCFXPYLYPLLZYXXXXXKQHHXSHJZCFZSCZJXCPZWHHHHHAPYLQALPQAFYHXDYLUKMZQGGGDDESRNNZLTZGCHYPPYSQJJHCLLJTOLNJPZLJLHYMHEYDYDSQYCDDHGZUNDZCLZYZLLZNTNYZGSLHSLPJJBDGWXPCDUTJCKLKCLWKLLCASSTKZZDNQNTTLYYZSSYSSZZRYLJQKCQDHHCRXRZYDGRGCWCGZQFFFPPJFZYNAKRGYWYQPQXXFKJTSZZXSWZDDFBBXTBGTZKZNPZZPZXZPJSZBMQHKCYXYLDKLJNYPKYGHGDZJXXEAHPNZKZTZCMXCXMMJXNKSZQNMNLWBWWXJKYHCPSTMCSQTZJYXTPCTPDTNNPGLLLZSJLSPBLPLQHDTNJNLYYRSZFFJFQWDPHZDWMRZCCLODAXNSSNYZRESTYJWJYJDBCFXNMWTTBYLWSTSZGYBLJPXGLBOCLHPCBJLTMXZLJYLZXCLTPNCLCKXTPZJSWCYXSFYSZDKNTLBYJCYJLLSTGQCBXRYZXBXKLYLHZLQZLNZCXWJZLJZJNCJHXMNZZGJZZXTZJXYCYYCXXJYYXJJXSSSJSTSSTTPPGQTCSXWZDCSYFPTFBFHFBBLZJCLZZDBXGCXLQPXKFZFLSYLTUWBMQJHSZBMDDBCYSCCLDXYCDDQLYJJWMQLLCSGLJJSYFPYYCCYLTJANTJJPWYCMMGQYYSXDXQMZHSZXPFTWWZQSWQRFKJLZJQQYFBRXJHHFWJJZYQAZMYFRHCYYBYQWLPEXCCZSTYRLTTDMQLYKMBBGMYYJPRKZNPBSXYXBHYZDJDNGHPMFSGMWFZMFQMMBCMZZCJJLCNUXYQLMLRYGQZCYXZLWJGCJCGGMCJNFYZZJHYCPRRCMTZQZXHFQGTJXCCJEAQCRJYHPLQLSZDJRBCQHQDYRHYLYXJSYMHZYDWLDFRYHBPYDTSSCNWBXGLPZMLZZTQSSCPJMXXYCSJYTYCGHYCJWYRXXLFEMWJNMKLLSWTXHYYYNCMMCWJDQDJZGLLJWJRKHPZGGFLCCSCZMCBLTBHBQJXQDSPDJZZGKGLFQYWBZYZJLTSTDHQHCTCBCHFLQMPWDSHYYTQWCNZZJTLBYMBPDYYYXSQKXWYYFLXXNCWCXYPMAELYKKJMZZZBRXYYQJFLJPFHHHYTZZXSGQQMHSPGDZQWBWPJHZJDYSCQWZKTXXSQLZYYMYSDZGRXCKKUJLWPYSYSCSYZLRMLQSYLJXBCXTLWDQZPCYCYKPPPNSXFYZJJRCEMHSZMSXLXGLRWGCSTLRSXBZGBZGZTCPLUJLSLYLYMTXMTZPALZXPXJTJWTCYYZLBLXBZLQMYLXPGHDSLSSDMXMBDZZSXWHAMLCZCPJMCNHJYSNSYGCHSKQMZZQDLLKABLWJXSFMOCDXJRRLYQZKJMYBYQLYHETFJZFRFKSRYXFJTWDSXXSYSQJYSLYXWJHSNLXYYXHBHAWHHJZXWMYLJCSSLKYDZTXBZSYFDXGXZJKHSXXYBSSXDPYNZWRPTQZCZENYGCXQFJYKJBZMLJCMQQXUOXSLYXXLYLLJDZBTYMHPFSTTQQWLHOKYBLZZALZXQLHZWRRQHLSTMYPYXJJXMQSJFNBXYXYJXXYQYLTHYLQYFMLKLJTMLLHSZWKZHLJMLHLJKLJSTLQXYLMBHHLNLZXQJHXCFXXLHYHJJGBYZZKBXSCQDJQDSUJZYYHZHHMGSXCSYMXFEBCQWWRBPYYJQTYZCYQYQQZYHMWFFHGZFRJFCDPXNTQYZPDYKHJLFRZXPPXZDBBGZQSTLGDGYLCQMLCHHMFYWLZYXKJLYPQHSYWMQQGQZMLZJNSQXJQSYJYCBEHSXFSZPXZWFLLBCYYJDYTDTHWZSFJMQQYJLMQXXLLDTTKHHYBFPWTYYSQQWNQWLGWDEBZWCMYGCULKJXTMXMYJSXHYBRWFYMWFRXYQMXYSZTZZTFYKMLDHQDXWYYNLCRYJBLPSXCXYWLSPRRJWXHQYPHTYDNXHHMMYWYTZCSQMTSSCCDALWZTCPQPYJLLQZYJSWXMZZMMYLMXCLMXCZMXMZSQTZPPQQBLPGXQZHFLJJHYTJSRXWZXSCCDLXTYJDCQJXSLQYCLZXLZZXMXQRJMHRHZJBHMFLJLMLCLQNLDXZLLLPYPSYJYSXCQQDCMQJZZXHNPNXZMEKMXHYKYQLXSXTXJYYHWDCWDZHQYYBGYBCYSCFGPSJNZDYZZJZXRZRQJJYMCANYRJTLDPPYZBSTJKXXZYPFDWFGZZRPYMTNGXZQBYXNBUFNQKRJQZMJEGRZGYCLKXZDSKKNSXKCLJSPJYYZLQQJYBZSSQLLLKJXTBKTYLCCDDBLSPPFYLGYDTZJYQGGKQTTFZXBDKTYYHYBBFYTYYBCLPDYTGDHRYRNJSPTCSNYJQHKLLLZSLYDXXWBCJQSPXBPJZJCJDZFFXXBRMLAZHCSNDLBJDSZBLPRZTSWSBXBCLLXXLZDJZSJPYLYXXYFTFFFBHJJXGBYXJPMMMPSSJZJMTLYZJXSWXTYLEDQPJMYGQZJGDJLQJWJQLLSJGJGYGMSCLJJXDTYGJQJQJCJZCJGDZZSXQGSJGGCXHQXSNQLZZBXHSGZXCXYLJXYXYYDFQQJHJFXDHCTXJYRXYSQTJXYEFYYSSYYJXNCYZXFXMSYSZXYYSCHSHXZZZGZZZGFJDLTYLNPZGYJYZYYQZPBXQBDZTZCZYXXYHHSQXSHDHGQHJHGYWSZTMZMLHYXGEBTYLZKQWYTJZRCLEKYSTDBCYKQQSAYXCJXWWGSBHJYZYDHCSJKQCXSWXFLTYNYZPZCCZJQTZWJQDZZZQZLJJXLSBHPYXXPSXSHHEZTXFPTLQYZZXHYTXNCFZYYHXGNXMYWXTZSJPTHHGYMXMXQZXTSBCZYJYXXTYYZYPCQLMMSZMJZZLLZXGXZAAJZYXJMZXWDXZSXZDZXLEYJJZQBHZWZZZQTZPSXZTDSXJJJZNYAZPHXYYSRNQDTHZHYYKYJHDZXZLSWCLYBZYECWCYCRYLCXNHZYDZYDYJDFRJJHTRSQTXYXJRJHOJYNXELXSFSFJZGHPZSXZSZDZCQZBYYKLSGSJHCZSHDGQGXYZGXCHXZJWYQWGYHKSSEQZZNDZFKWYSSTCLZSTSYMCDHJXXYWEYXCZAYDMPXMDSXYBSQMJMZJMTZQLPJYQZCGQHXJHHLXXHLHDLDJQCLDWBSXFZZYYSCHTYTYYBHECXHYKGJPXHHYZJFXHWHBDZFYZBCAPNPGNYDMSXHMMMMAMYNBYJTMPXYYMCTHJBZYFCGTYHWPHFTWZZEZSBZEGPFMTSKFTYCMHFLLHGPZJXZJGZJYXZSBBQSCZZLZCCSTPGXMJSFTCCZJZDJXCYBZLFCJSYZFGSZLYBCWZZBYZDZYPSWYJZXZBDSYUXLZZBZFYGCZXBZHZFTPBGZGEJBSTGKDMFHYZZJHZLLZZGJQZLSFDJSSCBZGPDLFZFZSZYZYZSYGCXSNXXCHCZXTZZLJFZGQSQYXZJQDCCZTQCDXZJYQJQCHXZTDLGSCXZSYQJQTZWLQDQZTQCHQQJZYEZZZPBWKDJFCJPZTYPQYQTTYNLMBDKTJZPQZQZZFPZSBNJLGYJDXJDZZKZGQKXDLPZJTCJDQBXDJQJSTCKNXBXZMSLYJCQMTJQWWCJQNJNLLLHJCWQTBZQYDZCZPZZDZYDDCYZZZCCJTTJFZDPRRTZTJDCQTQZDTJNPLZBCLLCTZSXKJZQZPZLBZRBTJDCXFCZDBCCJJLTQQPLDCGZDBBZJCQDCJWYNLLZYZCCDWLLXWZLXRXNTQQCZXKQLSGDFQTDDGLRLAJJTKUYMKQLLTZYTDYYCZGJWYXDXFRSKSTQTENQMRKQZHHQKDLDAZFKYPBGGPZREBZZYKZZSPEGJXGYKQZZZSLYSYYYZWFQZYLZZLZHWCHKYPQGNPGBLPLRRJYXCCSYYHSFZFYBZYYTGZXYLXCZWXXZJZBLFFLGSKHYJZEYJHLPLLLLCZGXDRZELRHGKLZZYHZLYQSZZJZQLJZFLNBHGWLCZCFJYSPYXZLZLXGCCPZBLLCYBBBBUBBCBPCRNNZCZYRBFSRLDCGQYYQXYGMQZWTZYTYJXYFWTEHZZJYWLCCNTZYJJZDEDPZDZTSYQJHDYMBJNYJZLXTSSTPHNDJXXBYXQTZQDDTJTDYYTGWSCSZQFLSHLGLBCZPHDLYZJYCKWTYTYLBNYTSDSYCCTYSZYYEBHEXHQDTWNYGYCLXTSZYSTQMYGZAZCCSZZDSLZCLZRQXYYELJSBYMXSXZTEMBBLLYYLLYTDQYSHYMRQWKFKBFXNXSBYCHXBWJYHTQBPBSBWDZYLKGZSKYHXQZJXHXJXGNLJKZLYYCDXLFYFGHLJGJYBXQLYBXQPQGZTZPLNCYPXDJYQYDYMRBESJYYHKXXSTMXRCZZYWXYQYBMCLLYZHQYZWQXDBXBZWZMSLPDMYSKFMZKLZCYQYCZLQXFZZYDQZPZYGYJYZMZXDZFYFYTTQTZHGSPCZMLCCYTZXJCYTJMKSLPZHYSNZLLYTPZCTZZCKTXDHXXTQCYFKSMQCCYYAZHTJPCYLZLYJBJXTPNYLJYYNRXSYLMMNXJSMYBCSYSYLZYLXJJQYLDZLPQBFZZBLFNDXQKCZFYWHGQMRDSXYCYTXNQQJZYYPFZXDYZFPRXEJDGYQBXRCNFYYQPGHYJDYZXGRHTKYLNWDZNTSMPKLBTHBPYSZBZTJZSZZJTYYXZPHSSZZBZCZPTQFZMYFLYPYBBJQXZMXXDJMTSYSKKBJZXHJCKLPSMKYJZCXTMLJYXRZZQSLXXQPYZXMKYXXXJCLJPRMYYGADYSKQLSNDHYZKQXZYZTCGHZTLMLWZYBWSYCTBHJHJFCWZTXWYTKZLXQSHLYJZJXTMPLPYCGLTBZZTLZJCYJGDTCLKLPLLQPJMZPAPXYZLKKTKDZCZZBNZDYDYQZJYJGMCTXLTGXSZLMLHBGLKFWNWZHDXUHLFMKYSLGXDTWWFRJEJZTZHYDXYKSHWFZCQSHKTMQQHTZHYMJDJSKHXZJZBZZXYMPAGQMSTPXLSKLZYNWRTSQLSZBPSPSGZWYHTLKSSSWHZZLYYTNXJGMJSZSUFWNLSOZTXGXLSAMMLBWLDSZYLAKQCQCTMYCFJBSLXCLZZCLXXKSBZQCLHJPSQPLSXXCKSLNHPSFQQYTXYJZLQLDXZQJZDYYDJNZPTUZDSKJFSLJHYLZSQZLBTXYDGTQFDBYAZXDZHZJNHHQBYKNXJJQCZMLLJZKSPLDYCLBBLXKLELXJLBQYCXJXGCNLCQPLZLZYJTZLJGYZDZPLTQCSXFDMNYCXGBTJDCZNBGBQYQJWGKFHTNPYQZQGBKPBBYZMTJDYTBLSQMPSXTBNPDXKLEMYYCJYNZCTLDYKZZXDDXHQSHDGMZSJYCCTAYRZLPYLTLKXSLZCGGEXCLFXLKJRTLQJAQZNCMBYDKKCXGLCZJZXJHPTDJJMZQYKQSECQZDSHHADMLZFMMZBGNTJNNLGBYJBRBTMLBYJDZXLCJLPLDLPCQDHLXZLYCBLCXZZJADJLNZMMSSSMYBHBSQKBHRSXXJMXSDZNZPXLGBRHWGGFCXGMSKLLTSJYYCQLTSKYWYYHYWXBXQYWPYWYKQLSQPTNTKHQCWDQKTWPXXHCPTHTWUMSSYHBWCRWXHJMKMZNGWTMLKFGHKJYLSYYCXWHYECLQHKQHTTQKHFZLDXQWYZYYDESBPKYRZPJFYYZJCEQDZZDLATZBBFJLLCXDLMJSSXEGYGSJQXCWBXSSZPDYZCXDNYXPPZYDLYJCZPLTXLSXYZYRXCYYYDYLWWNZSAHJSYQYHGYWWAXTJZDAXYSRLTDPSSYYFNEJDXYZHLXLLLZQZSJNYQYQQXYJGHZGZCYJCHZLYCDSHWSHJZYJXCLLNXZJJYYXNFXMWFPYLCYLLABWDDHWDXJMCXZTZPMLQZHSFHZYNZTLLDYWLSLXHYMMYLMBWWKYXYADTXYLLDJPYBPWUXJMWMLLSAFDLLYFLBHHHBQQLTZJCQJLDJTFFKMMMBYTHYGDCQRDDWRQJXNBYSNWZDBYYTBJHPYBYTTJXAAHGQDQTMYSTQXKBTZPKJLZRBEQQSSMJJBDJOTGTBXPGBKTLHQXJJJCTHXQDWJLWRFWQGWSHCKRYSWGFTGYGBXSDWDWRFHWYTJJXXXJYZYSLPYYYPAYXHYDQKXSHXYXGSKQHYWFDDDPPLCJLQQEEWXKSYYKDYPLTJTHKJLTCYYHHJTTPLTZZCDLTHQKZXQYSTEEYWYYZYXXYYSTTJKLLPZMCYHQGXYHSRMBXPLLNQYDQHXSXXWGDQBSHYLLPJJJTHYJKYPPTHYYKTYEZYENMDSHLCRPQFDGFXZPSFTLJXXJBSWYYSKSFLXLPPLBBBLBSFXFYZBSJSSYLPBBFFFFSSCJDSTZSXZRYYSYFFSYZYZBJTBCTSBSDHRTJJBYTCXYJEYLXCBNEBJDSYXYKGSJZBXBYTFZWGENYHHTHZHHXFWGCSTBGXKLSXYWMTMBYXJSTZSCDYQRCYTWXZFHMYMCXLZNSDJTTTXRYCFYJSBSDYERXJLJXBBDEYNJGHXGCKGSCYMBLXJMSZNSKGXFBNBPTHFJAAFXYXFPXMYPQDTZCXZZPXRSYWZDLYBBKTYQPQJPZYPZJZNJPZJLZZFYSBTTSLMPTZRTDXQSJEHBZYLZDHLJSQMLHTXTJECXSLZZSPKTLZKQQYFSYGYWPCPQFHQHYTQXZKRSGTTSQCZLPTXCDYYZXSQZSLXLZMYCPCQBZYXHBSXLZDLTCDXTYLZJYYZPZYZLTXJSJXHLPMYTXCQRBLZSSFJZZTNJYTXMYJHLHPPLCYXQJQQKZZSCPZKSWALQSBLCCZJSXGWWWYGYKTJBBZTDKHXHKGTGPBKQYSLPXPJCKBMLLXDZSTBKLGGQKQLSBKKTFXRMDKBFTPZFRTBBRFERQGXYJPZSSTLBZTPSZQZSJDHLJQLZBPMSMMSXLQQNHKNBLRDDNXXDHDDJCYYGYLXGZLXSYGMQQGKHBPMXYXLYTQWLWGCPBMQXCYZYDRJBHTDJYHQSHTMJSBYPLWHLZFFNYPMHXXHPLTBQPFBJWQDBYGPNZTPFZJGSDDTQSHZEAWZZYLLTYYBWJKXXGHLFKXDJTMSZSQYNZGGSWQSPHTLSSKMCLZXYSZQZXNCJDQGZDLFNYKLJCJLLZLMZZNHYDSSHTHZZLZZBBHQZWWYCRZHLYQQJBEYFXXXWHSRXWQHWPSLMSSKZTTYGYQQWRSLALHMJTQJSMXQBJJZJXZYZKXBYQXBJXSHZTSFJLXMXZXFGHKZSZGGYLCLSARJYHSLLLMZXELGLXYDJYTLFBHBPNLYZFBBHPTGJKWETZHKJJXZXXGLLJLSTGSHJJYQLQZFKCGNNDJSSZFDBCTWWSEQFHQJBSAQTGYPQLBXBMMYWXGSLZHGLZGQYFLZBYFZJFRYSFMBYZHQGFWZSYFYJJPHZBYYZFFWODGRLMFTWLBZGYCQXCDJYGZYYYYTYTYDWEGAZYHXJLZYYHLRMGRXXZCLHNELJJTJTPWJYBJJBXJJTJTEEKHWSLJPLPSFYZPQQBDLQJJTYYQLYZKDKSQJYYQZLDQTGJQYZJSUCMRYQTHTEJMFCTYHYPKMHYZWJDQFHYYXWSHCTXRLJHQXHCCYYYJLTKTTYTMXGTCJTZAYYOCZLYLBSZYWJYTSJYHBYSHFJLYGJXXTMZYYLTXXYPZLXYJZYZYYPNHMYMDYYLBLHLSYYQQLLNJJYMSOYQBZGDLYXYLCQYXTSZEGXHZGLHWBLJHEYXTWQMAKBPQCGYSHHEGQCMWYYWLJYJHYYZLLJJYLHZYHMGSLJLJXCJJYCLYCJPCPZJZJMMYLCQLNQLJQJSXYJMLSZLJQLYCMMHCFMMFPQQMFYLQMCFFQMMMMHMZNFHHJGTTHHKHSLNCHHYQDXTMMQDCYZYXYQMYQYLTDCYYYZAZZCYMZYDLZFFFMMYCQZWZZMABTBYZTDMNZZGGDFTYPCGQYTTSSFFWFDTZQSSYSTWXJHXYTSXXYLBYQHWWKXHZXWZNNZZJZJJQJCCCHYYXBZXZCYZTLLCQXYNJYCYYCYNZZQYYYEWYCZDCJYCCHYJLBTZYYCQWMPWPYMLGKDLDLGKQQBGYCHJXY"
            this.full_dict = { "a": "\u554a\u963f\u9515", "ai": "\u57c3\u6328\u54ce\u5509\u54c0\u7691\u764c\u853c\u77ee\u827e\u788d\u7231\u9698\u8bf6\u6371\u55f3\u55cc\u5ad2\u7477\u66a7\u7839\u953f\u972d", "an": "\u978d\u6c28\u5b89\u4ffa\u6309\u6697\u5cb8\u80fa\u6848\u8c19\u57ef\u63de\u72b4\u5eb5\u6849\u94f5\u9e4c\u9878\u9eef", "ang": "\u80ae\u6602\u76ce", "ao": "\u51f9\u6556\u71ac\u7ff1\u8884\u50b2\u5965\u61ca\u6fb3\u5773\u62d7\u55f7\u5662\u5c99\u5ed2\u9068\u5aaa\u9a9c\u8071\u87af\u93ca\u9ccc\u93d6", "ba": "\u82ad\u634c\u6252\u53ed\u5427\u7b06\u516b\u75a4\u5df4\u62d4\u8dcb\u9776\u628a\u8019\u575d\u9738\u7f62\u7238\u8307\u83dd\u8406\u636d\u5c9c\u705e\u6777\u94af\u7c91\u9c85\u9b43", "bai": "\u767d\u67cf\u767e\u6446\u4f70\u8d25\u62dc\u7a17\u859c\u63b0\u97b4", "ban": "\u6591\u73ed\u642c\u6273\u822c\u9881\u677f\u7248\u626e\u62cc\u4f34\u74e3\u534a\u529e\u7eca\u962a\u5742\u8c73\u94a3\u7622\u764d\u8228", "bang": "\u90a6\u5e2e\u6886\u699c\u8180\u7ed1\u68d2\u78c5\u868c\u9551\u508d\u8c24\u84a1\u8783", "bao": "\u82de\u80de\u5305\u8912\u96f9\u4fdd\u5821\u9971\u5b9d\u62b1\u62a5\u66b4\u8c79\u9c8d\u7206\u52f9\u8446\u5b80\u5b62\u7172\u9e28\u8913\u8db5\u9f85", "bo": "\u5265\u8584\u73bb\u83e0\u64ad\u62e8\u94b5\u6ce2\u535a\u52c3\u640f\u94c2\u7b94\u4f2f\u5e1b\u8236\u8116\u818a\u6e24\u6cca\u9a73\u4eb3\u8543\u5575\u997d\u6a97\u64d8\u7934\u94b9\u9e41\u7c38\u8ddb", "bei": "\u676f\u7891\u60b2\u5351\u5317\u8f88\u80cc\u8d1d\u94a1\u500d\u72c8\u5907\u60eb\u7119\u88ab\u5b5b\u9642\u90b6\u57e4\u84d3\u5457\u602b\u6096\u789a\u9e4e\u8919\u943e", "ben": "\u5954\u82ef\u672c\u7b28\u755a\u574c\u951b", "beng": "\u5d29\u7ef7\u752d\u6cf5\u8e66\u8ff8\u552a\u5623\u750f", "bi": "\u903c\u9f3b\u6bd4\u9119\u7b14\u5f7c\u78a7\u84d6\u853d\u6bd5\u6bd9\u6bd6\u5e01\u5e87\u75f9\u95ed\u655d\u5f0a\u5fc5\u8f9f\u58c1\u81c2\u907f\u965b\u5315\u4ef3\u4ffe\u8298\u835c\u8378\u5421\u54d4\u72f4\u5eb3\u610e\u6ed7\u6fde\u5f3c\u59a3\u5a62\u5b16\u74a7\u8d32\u7540\u94cb\u79d5\u88e8\u7b5a\u7b85\u7be6\u822d\u895e\u8df8\u9ac0", "bian": "\u97ad\u8fb9\u7f16\u8d2c\u6241\u4fbf\u53d8\u535e\u8fa8\u8fa9\u8fab\u904d\u533e\u5f01\u82c4\u5fed\u6c74\u7f0f\u7178\u782d\u78a5\u7a39\u7a86\u8759\u7b3e\u9cca", "biao": "\u6807\u5f6a\u8198\u8868\u5a4a\u9aa0\u98d1\u98d9\u98da\u706c\u9556\u9573\u762d\u88f1\u9cd4", "bie": "\u9cd6\u618b\u522b\u762a\u8e69\u9cd8", "bin": "\u5f6c\u658c\u6fd2\u6ee8\u5bbe\u6448\u50a7\u6d5c\u7f24\u73a2\u6ba1\u8191\u9554\u9acc\u9b13", "bing": "\u5175\u51b0\u67c4\u4e19\u79c9\u997c\u70b3\u75c5\u5e76\u7980\u90b4\u6452\u7ee0\u678b\u69df\u71f9", "bu": "\u6355\u535c\u54fa\u8865\u57e0\u4e0d\u5e03\u6b65\u7c3f\u90e8\u6016\u62ca\u535f\u900b\u74ff\u6661\u949a\u91ad", "ca": "\u64e6\u5693\u7924", "cai": "\u731c\u88c1\u6750\u624d\u8d22\u776c\u8e29\u91c7\u5f69\u83dc\u8521", "can": "\u9910\u53c2\u8695\u6b8b\u60ed\u60e8\u707f\u9a96\u74a8\u7cb2\u9eea", "cang": "\u82cd\u8231\u4ed3\u6ca7\u85cf\u4f27", "cao": "\u64cd\u7cd9\u69fd\u66f9\u8349\u8279\u5608\u6f15\u87ac\u825a", "ce": "\u5395\u7b56\u4fa7\u518c\u6d4b\u5202\u5e3b\u607b", "ceng": "\u5c42\u8e6d\u564c", "cha": "\u63d2\u53c9\u832c\u8336\u67e5\u78b4\u643d\u5bdf\u5c94\u5dee\u8be7\u7339\u9987\u6c4a\u59f9\u6748\u6942\u69ce\u6aab\u9497\u9538\u9572\u8869", "chai": "\u62c6\u67f4\u8c7a\u4faa\u8308\u7625\u867f\u9f87", "chan": "\u6400\u63ba\u8749\u998b\u8c17\u7f20\u94f2\u4ea7\u9610\u98a4\u5181\u8c04\u8c36\u8487\u5edb\u5fcf\u6f7a\u6fb6\u5b71\u7fbc\u5a75\u5b17\u9aa3\u89c7\u7985\u9561\u88e3\u87fe\u8e94", "chang": "\u660c\u7316\u573a\u5c1d\u5e38\u957f\u507f\u80a0\u5382\u655e\u7545\u5531\u5021\u4f25\u9b2f\u82cc\u83d6\u5f9c\u6005\u60dd\u960a\u5a3c\u5ae6\u6636\u6c05\u9cb3", "chao": "\u8d85\u6284\u949e\u671d\u5632\u6f6e\u5de2\u5435\u7092\u600a\u7ec9\u6641\u8016", "che": "\u8f66\u626f\u64a4\u63a3\u5f7b\u6f88\u577c\u5c6e\u7817", "chen": "\u90f4\u81e3\u8fb0\u5c18\u6668\u5ff1\u6c89\u9648\u8d81\u886c\u79f0\u8c0c\u62bb\u55d4\u5bb8\u741b\u6987\u809c\u80c2\u789c\u9f80", "cheng": "\u6491\u57ce\u6a59\u6210\u5448\u4e58\u7a0b\u60e9\u6f84\u8bda\u627f\u901e\u9a8b\u79e4\u57d5\u5d4a\u5fb5\u6d48\u67a8\u67fd\u6a18\u665f\u584d\u77a0\u94d6\u88ce\u86cf\u9172", "chi": "\u5403\u75f4\u6301\u5319\u6c60\u8fdf\u5f1b\u9a70\u803b\u9f7f\u4f88\u5c3a\u8d64\u7fc5\u65a5\u70bd\u50ba\u5880\u82aa\u830c\u640b\u53f1\u54e7\u557b\u55e4\u5f73\u996c\u6cb2\u5ab8\u6555\u80dd\u7719\u7735\u9e31\u761b\u892b\u86a9\u87ad\u7b1e\u7bea\u8c49\u8e05\u8e1f\u9b51", "chong": "\u5145\u51b2\u866b\u5d07\u5ba0\u833a\u5fe1\u61a7\u94f3\u825f", "chou": "\u62bd\u916c\u7574\u8e0c\u7a20\u6101\u7b79\u4ec7\u7ef8\u7785\u4e11\u4fe6\u5733\u5e31\u60c6\u6eb4\u59af\u7633\u96e0\u9c8b", "chu": "\u81ed\u521d\u51fa\u6a71\u53a8\u8e87\u9504\u96cf\u6ec1\u9664\u695a\u7840\u50a8\u77d7\u6410\u89e6\u5904\u4e8d\u520d\u61b7\u7ecc\u6775\u696e\u6a17\u870d\u8e70\u9edc", "chuan": "\u63e3\u5ddd\u7a7f\u693d\u4f20\u8239\u5598\u4e32\u63be\u821b\u60f4\u9044\u5ddb\u6c1a\u948f\u9569\u8221", "chuang": "\u75ae\u7a97\u5e62\u5e8a\u95ef\u521b\u6006", "chui": "\u5439\u708a\u6376\u9524\u5782\u9672\u68f0\u69cc", "chun": "\u6625\u693f\u9187\u5507\u6df3\u7eaf\u8822\u4fc3\u83bc\u6c8c\u80ab\u6710\u9e51\u877d", "chuo": "\u6233\u7ef0\u851f\u8fb6\u8f8d\u955e\u8e14\u9f8a", "ci": "\u75b5\u8328\u78c1\u96cc\u8f9e\u6148\u74f7\u8bcd\u6b64\u523a\u8d50\u6b21\u8360\u5472\u5d6f\u9e5a\u8785\u7ccd\u8d91", "cong": "\u806a\u8471\u56f1\u5306\u4ece\u4e1b\u506c\u82c1\u6dd9\u9aa2\u742e\u7481\u679e", "cu": "\u51d1\u7c97\u918b\u7c07\u731d\u6b82\u8e59", "cuan": "\u8e7f\u7be1\u7a9c\u6c46\u64ba\u6615\u7228", "cui": "\u6467\u5d14\u50ac\u8106\u7601\u7cb9\u6dec\u7fe0\u8403\u60b4\u7480\u69b1\u96b9", "cun": "\u6751\u5b58\u5bf8\u78cb\u5fd6\u76b4", "cuo": "\u64ae\u6413\u63aa\u632b\u9519\u539d\u811e\u9509\u77ec\u75e4\u9e7e\u8e49\u8e9c", "da": "\u642d\u8fbe\u7b54\u7629\u6253\u5927\u8037\u54d2\u55d2\u601b\u59b2\u75b8\u8921\u7b2a\u977c\u9791", "dai": "\u5446\u6b79\u50a3\u6234\u5e26\u6b86\u4ee3\u8d37\u888b\u5f85\u902e\u6020\u57ed\u7519\u5454\u5cb1\u8fe8\u902f\u9a80\u7ed0\u73b3\u9edb", "dan": "\u803d\u62c5\u4e39\u5355\u90f8\u63b8\u80c6\u65e6\u6c2e\u4f46\u60ee\u6de1\u8bde\u5f39\u86cb\u4ebb\u510b\u5369\u840f\u5556\u6fb9\u6a90\u6b9a\u8d55\u7708\u7605\u8043\u7baa", "dang": "\u5f53\u6321\u515a\u8361\u6863\u8c20\u51fc\u83ea\u5b95\u7800\u94db\u88c6", "dao": "\u5200\u6363\u8e48\u5012\u5c9b\u7977\u5bfc\u5230\u7a3b\u60bc\u9053\u76d7\u53e8\u5541\u5fc9\u6d2e\u6c18\u7118\u5fd1\u7e9b", "de": "\u5fb7\u5f97\u7684\u951d", "deng": "\u8e6c\u706f\u767b\u7b49\u77aa\u51f3\u9093\u5654\u5d9d\u6225\u78f4\u956b\u7c26", "di": "\u5824\u4f4e\u6ef4\u8fea\u654c\u7b1b\u72c4\u6da4\u7fdf\u5ae1\u62b5\u5e95\u5730\u8482\u7b2c\u5e1d\u5f1f\u9012\u7f14\u6c10\u7c74\u8bcb\u8c1b\u90b8\u577b\u839c\u837b\u5600\u5a23\u67e2\u68e3\u89cc\u7825\u78b2\u7747\u955d\u7f9d\u9ab6", "dian": "\u98a0\u6382\u6ec7\u7898\u70b9\u5178\u975b\u57ab\u7535\u4f43\u7538\u5e97\u60e6\u5960\u6dc0\u6bbf\u4e36\u963d\u576b\u57dd\u5dc5\u73b7\u765c\u766b\u7c1f\u8e2e", "diao": "\u7889\u53fc\u96d5\u51cb\u5201\u6389\u540a\u9493\u8c03\u8f7a\u94de\u8729\u7c9c\u8c82", "die": "\u8dcc\u7239\u789f\u8776\u8fed\u8c0d\u53e0\u4f5a\u57a4\u581e\u63f2\u558b\u6e2b\u8f76\u7252\u74de\u8936\u800b\u8e40\u9cbd\u9cce", "ding": "\u4e01\u76ef\u53ee\u9489\u9876\u9f0e\u952d\u5b9a\u8ba2\u4e22\u4ec3\u5576\u738e\u815a\u7887\u753a\u94e4\u7594\u8035\u914a", "dong": "\u4e1c\u51ac\u8463\u61c2\u52a8\u680b\u4f97\u606b\u51bb\u6d1e\u578c\u549a\u5cbd\u5cd2\u5902\u6c21\u80e8\u80f4\u7850\u9e2b", "dou": "\u515c\u6296\u6597\u9661\u8c46\u9017\u75d8\u8538\u94ad\u7aa6\u7aac\u86aa\u7bfc\u9161", "du": "\u90fd\u7763\u6bd2\u728a\u72ec\u8bfb\u5835\u7779\u8d4c\u675c\u9540\u809a\u5ea6\u6e21\u5992\u828f\u561f\u6e0e\u691f\u6a50\u724d\u8839\u7b03\u9ad1\u9ee9", "duan": "\u7aef\u77ed\u953b\u6bb5\u65ad\u7f0e\u5f56\u6934\u7145\u7c16", "dui": "\u5806\u5151\u961f\u5bf9\u603c\u619d\u7893", "dun": "\u58a9\u5428\u8e72\u6566\u987f\u56e4\u949d\u76fe\u9041\u7096\u7818\u7905\u76f9\u9566\u8db8", "duo": "\u6387\u54c6\u591a\u593a\u579b\u8eb2\u6735\u8dfa\u8235\u5241\u60f0\u5815\u5484\u54da\u7f0d\u67c1\u94ce\u88f0\u8e31", "e": "\u86fe\u5ce8\u9e45\u4fc4\u989d\u8bb9\u5a25\u6076\u5384\u627c\u904f\u9102\u997f\u5669\u8c14\u57a9\u57ad\u82ca\u83aa\u843c\u5443\u6115\u5c59\u5a40\u8f6d\u66f7\u816d\u786a\u9507\u9537\u9e57\u989a\u9cc4", "en": "\u6069\u84bd\u6441\u5514\u55ef", "er": "\u800c\u513f\u8033\u5c14\u9975\u6d31\u4e8c\u8d30\u8fe9\u73e5\u94d2\u9e38\u9c95", "fa": "\u53d1\u7f5a\u7b4f\u4f10\u4e4f\u9600\u6cd5\u73d0\u57a1\u781d", "fan": "\u85e9\u5e06\u756a\u7ffb\u6a0a\u77fe\u9492\u7e41\u51e1\u70e6\u53cd\u8fd4\u8303\u8d29\u72af\u996d\u6cdb\u8629\u5e61\u72ad\u68b5\u6535\u71d4\u7548\u8e6f", "fang": "\u574a\u82b3\u65b9\u80aa\u623f\u9632\u59a8\u4eff\u8bbf\u7eba\u653e\u531a\u90a1\u5f77\u94ab\u822b\u9c82", "fei": "\u83f2\u975e\u5561\u98de\u80a5\u532a\u8bfd\u5420\u80ba\u5e9f\u6cb8\u8d39\u82be\u72d2\u60b1\u6ddd\u5983\u7ecb\u7eef\u69a7\u8153\u6590\u6249\u7953\u7829\u9544\u75f1\u871a\u7bda\u7fe1\u970f\u9cb1", "fen": "\u82ac\u915a\u5429\u6c1b\u5206\u7eb7\u575f\u711a\u6c7e\u7c89\u594b\u4efd\u5fff\u6124\u7caa\u507e\u7035\u68fc\u610d\u9cbc\u9f22", "feng": "\u4e30\u5c01\u67ab\u8702\u5cf0\u950b\u98ce\u75af\u70fd\u9022\u51af\u7f1d\u8bbd\u5949\u51e4\u4ff8\u9146\u8451\u6ca3\u781c", "fu": "\u4f5b\u5426\u592b\u6577\u80a4\u5b75\u6276\u62c2\u8f90\u5e45\u6c1f\u7b26\u4f0f\u4fd8\u670d\u6d6e\u6daa\u798f\u88b1\u5f17\u752b\u629a\u8f85\u4fef\u91dc\u65a7\u812f\u8151\u5e9c\u8150\u8d74\u526f\u8986\u8d4b\u590d\u5085\u4ed8\u961c\u7236\u8179\u8d1f\u5bcc\u8ba3\u9644\u5987\u7f1a\u5490\u5310\u51eb\u90db\u8299\u82fb\u832f\u83a9\u83d4\u544b\u5e5e\u6ecf\u8274\u5b5a\u9a78\u7ec2\u6874\u8d59\u9efb\u9efc\u7f58\u7a03\u99a5\u864d\u86a8\u8709\u8760\u876e\u9eb8\u8dba\u8dd7\u9cc6", "ga": "\u5676\u560e\u86e4\u5c2c\u5477\u5c15\u5c1c\u65ee\u9486", "gai": "\u8be5\u6539\u6982\u9499\u76d6\u6e89\u4e10\u9654\u5793\u6224\u8d45\u80f2", "gan": "\u5e72\u7518\u6746\u67d1\u7aff\u809d\u8d76\u611f\u79c6\u6562\u8d63\u5769\u82f7\u5c34\u64c0\u6cd4\u6de6\u6f89\u7ec0\u6a44\u65f0\u77f8\u75b3\u9150", "gang": "\u5188\u521a\u94a2\u7f38\u809b\u7eb2\u5c97\u6e2f\u6206\u7f61\u9883\u7b7b", "gong": "\u6760\u5de5\u653b\u529f\u606d\u9f9a\u4f9b\u8eac\u516c\u5bab\u5f13\u5de9\u6c5e\u62f1\u8d21\u5171\u857b\u5efe\u54a3\u73d9\u80b1\u86a3\u86e9\u89e5", "gao": "\u7bd9\u768b\u9ad8\u818f\u7f94\u7cd5\u641e\u9550\u7a3f\u544a\u777e\u8bf0\u90dc\u84bf\u85c1\u7f1f\u69d4\u69c1\u6772\u9506", "ge": "\u54e5\u6b4c\u6401\u6208\u9e3d\u80f3\u7599\u5272\u9769\u845b\u683c\u9601\u9694\u94ec\u4e2a\u5404\u9b32\u4ee1\u54ff\u5865\u55dd\u7ea5\u643f\u8188\u784c\u94ea\u9549\u88bc\u988c\u867c\u8238\u9abc\u9ac2", "gei": "\u7ed9", "gen": "\u6839\u8ddf\u4e98\u831b\u54cf\u826e", "geng": "\u8015\u66f4\u5e9a\u7fb9\u57c2\u803f\u6897\u54fd\u8d53\u9ca0", "gou": "\u94a9\u52fe\u6c9f\u82df\u72d7\u57a2\u6784\u8d2d\u591f\u4f5d\u8bdf\u5ca3\u9058\u5abe\u7f11\u89cf\u5f40\u9e32\u7b31\u7bdd\u97b2", "gu": "\u8f9c\u83c7\u5495\u7b8d\u4f30\u6cbd\u5b64\u59d1\u9f13\u53e4\u86ca\u9aa8\u8c37\u80a1\u6545\u987e\u56fa\u96c7\u560f\u8bc2\u83f0\u54cc\u5d2e\u6c69\u688f\u8f71\u726f\u727f\u80cd\u81cc\u6bc2\u77bd\u7f5f\u94b4\u9522\u74e0\u9e2a\u9e44\u75fc\u86c4\u9164\u89da\u9cb4\u9ab0\u9e58", "gua": "\u522e\u74dc\u5250\u5be1\u6302\u8902\u5366\u8bd6\u5471\u681d\u9e39", "guai": "\u4e56\u62d0\u602a\u54d9", "guan": "\u68fa\u5173\u5b98\u51a0\u89c2\u7ba1\u9986\u7f50\u60ef\u704c\u8d2f\u500c\u839e\u63bc\u6dab\u76e5\u9e73\u9ccf", "guang": "\u5149\u5e7f\u901b\u72b7\u6844\u80f1\u7592", "gui": "\u7470\u89c4\u572d\u7845\u5f52\u9f9f\u95fa\u8f68\u9b3c\u8be1\u7678\u6842\u67dc\u8dea\u8d35\u523d\u5326\u523f\u5e8b\u5b84\u59ab\u6867\u7085\u6677\u7688\u7c0b\u9c91\u9cdc", "gun": "\u8f8a\u6eda\u68cd\u4e28\u886e\u7ef2\u78d9\u9ca7", "guo": "\u9505\u90ed\u56fd\u679c\u88f9\u8fc7\u9998\u8803\u57da\u63b4\u5459\u56d7\u5e3c\u5d1e\u7313\u6901\u8662\u951e\u8052\u872e\u873e\u8748", "ha": "\u54c8", "hai": "\u9ab8\u5b69\u6d77\u6c26\u4ea5\u5bb3\u9a87\u54b4\u55e8\u988f\u91a2", "han": "\u9163\u61a8\u90af\u97e9\u542b\u6db5\u5bd2\u51fd\u558a\u7f55\u7ff0\u64bc\u634d\u65f1\u61be\u608d\u710a\u6c57\u6c49\u9097\u83e1\u6496\u961a\u701a\u6657\u7113\u9894\u86b6\u9f3e", "hen": "\u592f\u75d5\u5f88\u72e0\u6068", "hang": "\u676d\u822a\u6c86\u7ed7\u73e9\u6841", "hao": "\u58d5\u568e\u8c6a\u6beb\u90dd\u597d\u8017\u53f7\u6d69\u8585\u55e5\u5686\u6fe0\u704f\u660a\u7693\u98a2\u869d", "he": "\u5475\u559d\u8377\u83cf\u6838\u79be\u548c\u4f55\u5408\u76d2\u8c89\u9602\u6cb3\u6db8\u8d6b\u8910\u9e64\u8d3a\u8bc3\u52be\u58d1\u85ff\u55d1\u55ec\u9616\u76cd\u86b5\u7fee", "hei": "\u563f\u9ed1", "heng": "\u54fc\u4ea8\u6a2a\u8861\u6052\u8a07\u8605", "hong": "\u8f70\u54c4\u70d8\u8679\u9e3f\u6d2a\u5b8f\u5f18\u7ea2\u9ec9\u8ba7\u836d\u85a8\u95f3\u6cd3", "hou": "\u5589\u4faf\u7334\u543c\u539a\u5019\u540e\u5820\u5f8c\u9005\u760a\u7bcc\u7cc7\u9c8e\u9aba", "hu": "\u547c\u4e4e\u5ffd\u745a\u58f6\u846b\u80e1\u8774\u72d0\u7cca\u6e56\u5f27\u864e\u552c\u62a4\u4e92\u6caa\u6237\u51b1\u553f\u56eb\u5cb5\u7322\u6019\u60da\u6d52\u6ef9\u7425\u69f2\u8f77\u89f3\u70c0\u7173\u623d\u6248\u795c\u9e55\u9e71\u7b0f\u9190\u659b", "hua": "\u82b1\u54d7\u534e\u733e\u6ed1\u753b\u5212\u5316\u8bdd\u5290\u6d4d\u9a85\u6866\u94e7\u7a1e", "huai": "\u69d0\u5f8a\u6000\u6dee\u574f\u8fd8\u8e1d", "huan": "\u6b22\u73af\u6853\u7f13\u6362\u60a3\u5524\u75ea\u8c62\u7115\u6da3\u5ba6\u5e7b\u90c7\u5942\u57b8\u64d0\u571c\u6d39\u6d63\u6f36\u5bf0\u902d\u7f33\u953e\u9ca9\u9b1f", "huang": "\u8352\u614c\u9ec4\u78fa\u8757\u7c27\u7687\u51f0\u60f6\u714c\u6643\u5e4c\u604d\u8c0e\u968d\u5fa8\u6e5f\u6f62\u9051\u749c\u8093\u7640\u87e5\u7bc1\u9cc7", "hui": "\u7070\u6325\u8f89\u5fbd\u6062\u86d4\u56de\u6bc1\u6094\u6167\u5349\u60e0\u6666\u8d3f\u79fd\u4f1a\u70e9\u6c47\u8bb3\u8bf2\u7ed8\u8bd9\u8334\u835f\u8559\u54d5\u5599\u96b3\u6d04\u5f57\u7f0b\u73f2\u6656\u605a\u867a\u87ea\u9ebe", "hun": "\u8364\u660f\u5a5a\u9b42\u6d51\u6df7\u8be8\u9984\u960d\u6eb7\u7f17", "huo": "\u8c41\u6d3b\u4f19\u706b\u83b7\u6216\u60d1\u970d\u8d27\u7978\u6509\u56af\u5925\u94ac\u952a\u956c\u8020\u8816", "ji": "\u51fb\u573e\u57fa\u673a\u7578\u7a3d\u79ef\u7b95\u808c\u9965\u8ff9\u6fc0\u8ba5\u9e21\u59ec\u7ee9\u7f09\u5409\u6781\u68d8\u8f91\u7c4d\u96c6\u53ca\u6025\u75be\u6c72\u5373\u5ac9\u7ea7\u6324\u51e0\u810a\u5df1\u84df\u6280\u5180\u5b63\u4f0e\u796d\u5242\u60b8\u6d4e\u5bc4\u5bc2\u8ba1\u8bb0\u65e2\u5fcc\u9645\u5993\u7ee7\u7eaa\u5c45\u4e0c\u4e69\u525e\u4f76\u4f74\u8114\u58bc\u82a8\u82b0\u8401\u84ba\u857a\u638e\u53fd\u54ad\u54dc\u5527\u5c8c\u5d74\u6d0e\u5f50\u5c50\u9aa5\u757f\u7391\u696b\u6b9b\u621f\u6222\u8d4d\u89ca\u7284\u9f51\u77f6\u7f81\u5d47\u7a37\u7620\u7635\u866e\u7b08\u7b04\u66a8\u8dfb\u8dfd\u9701\u9c9a\u9cab\u9afb\u9e82", "jia": "\u5609\u67b7\u5939\u4f73\u5bb6\u52a0\u835a\u988a\u8d3e\u7532\u94be\u5047\u7a3c\u4ef7\u67b6\u9a7e\u5ac1\u4f3d\u90cf\u62ee\u5cac\u6d43\u8fe6\u73c8\u621b\u80db\u605d\u94d7\u9553\u75c2\u86f1\u7b33\u8888\u8dcf", "jian": "\u6b7c\u76d1\u575a\u5c16\u7b3a\u95f4\u714e\u517c\u80a9\u8270\u5978\u7f04\u8327\u68c0\u67ec\u78b1\u7877\u62e3\u6361\u7b80\u4fed\u526a\u51cf\u8350\u69db\u9274\u8df5\u8d31\u89c1\u952e\u7bad\u4ef6\u5065\u8230\u5251\u996f\u6e10\u6e85\u6da7\u5efa\u50ed\u8c0f\u8c2b\u83c5\u84b9\u641b\u56dd\u6e54\u8e47\u8b07\u7f23\u67a7\u67d9\u6957\u620b\u622c\u726e\u728d\u6bfd\u8171\u7751\u950f\u9e63\u88e5\u7b15\u7bb4\u7fe6\u8dbc\u8e3a\u9ca3\u97af", "jiang": "\u50f5\u59dc\u5c06\u6d46\u6c5f\u7586\u848b\u6868\u5956\u8bb2\u5320\u9171\u964d\u8333\u6d1a\u7edb\u7f30\u729f\u7913\u8029\u7ce8\u8c47", "jiao": "\u8549\u6912\u7901\u7126\u80f6\u4ea4\u90ca\u6d47\u9a84\u5a07\u56bc\u6405\u94f0\u77eb\u4fa5\u811a\u72e1\u89d2\u997a\u7f34\u7ede\u527f\u6559\u9175\u8f7f\u8f83\u53eb\u4f7c\u50ec\u832d\u6322\u564d\u5ce4\u5fbc\u59e3\u7e9f\u656b\u768e\u9e6a\u86df\u91ae\u8de4\u9c9b", "jie": "\u7a96\u63ed\u63a5\u7686\u79f8\u8857\u9636\u622a\u52ab\u8282\u6854\u6770\u6377\u776b\u7aed\u6d01\u7ed3\u89e3\u59d0\u6212\u85c9\u82a5\u754c\u501f\u4ecb\u75a5\u8beb\u5c4a\u5048\u8ba6\u8bd8\u5588\u55df\u736c\u5a55\u5b51\u6840\u7352\u78a3\u9534\u7596\u88b7\u9889\u86a7\u7faf\u9c92\u9ab1\u9aeb", "jin": "\u5dfe\u7b4b\u65a4\u91d1\u4eca\u6d25\u895f\u7d27\u9526\u4ec5\u8c28\u8fdb\u9773\u664b\u7981\u8fd1\u70ec\u6d78\u5c3d\u537a\u8369\u5807\u5664\u9991\u5ed1\u5997\u7f19\u747e\u69ff\u8d46\u89d0\u9485\u9513\u887f\u77dc", "jing": "\u52b2\u8346\u5162\u830e\u775b\u6676\u9cb8\u4eac\u60ca\u7cbe\u7cb3\u7ecf\u4e95\u8b66\u666f\u9888\u9759\u5883\u656c\u955c\u5f84\u75c9\u9756\u7adf\u7ade\u51c0\u522d\u5106\u9631\u83c1\u734d\u61ac\u6cfe\u8ff3\u5f2a\u5a67\u80bc\u80eb\u8148\u65cc", "jiong": "\u70af\u7a98\u5182\u8fe5\u6243", "jiu": "\u63ea\u7a76\u7ea0\u7396\u97ed\u4e45\u7078\u4e5d\u9152\u53a9\u6551\u65e7\u81fc\u8205\u548e\u5c31\u759a\u50e6\u557e\u9604\u67e9\u6855\u9e6b\u8d73\u9b0f", "ju": "\u97a0\u62d8\u72d9\u75bd\u9a79\u83ca\u5c40\u5480\u77e9\u4e3e\u6cae\u805a\u62d2\u636e\u5de8\u5177\u8ddd\u8e1e\u952f\u4ff1\u53e5\u60e7\u70ac\u5267\u5028\u8bb5\u82e3\u82f4\u8392\u63ac\u907d\u5c66\u741a\u67b8\u6910\u6998\u6989\u6a58\u728b\u98d3\u949c\u9514\u7aad\u88fe\u8d84\u91b5\u8e3d\u9f83\u96ce\u97ab", "juan": "\u6350\u9e43\u5a1f\u5026\u7737\u5377\u7ee2\u9104\u72f7\u6d93\u684a\u8832\u9529\u954c\u96bd", "jue": "\u6485\u652b\u6289\u6398\u5014\u7235\u89c9\u51b3\u8bc0\u7edd\u53a5\u5282\u8c32\u77cd\u8568\u5658\u5d1b\u7357\u5b53\u73cf\u6877\u6a5b\u721d\u9562\u8e76\u89d6", "jun": "\u5747\u83cc\u94a7\u519b\u541b\u5cfb\u4fca\u7ae3\u6d5a\u90e1\u9a8f\u6343\u72fb\u76b2\u7b60\u9e87", "ka": "\u5580\u5496\u5361\u4f67\u5494\u80e9", "ke": "\u54af\u5777\u82db\u67ef\u68f5\u78d5\u9897\u79d1\u58f3\u54b3\u53ef\u6e34\u514b\u523b\u5ba2\u8bfe\u5ca2\u606a\u6e98\u9a92\u7f02\u73c2\u8f72\u6c2a\u778c\u94b6\u75b4\u7aa0\u874c\u9ac1", "kai": "\u5f00\u63e9\u6977\u51ef\u6168\u5240\u57b2\u8488\u5ffe\u607a\u94e0\u950e", "kan": "\u520a\u582a\u52d8\u574e\u780d\u770b\u4f83\u51f5\u83b0\u83b6\u6221\u9f9b\u77b0", "kang": "\u5eb7\u6177\u7ce0\u625b\u6297\u4ea2\u7095\u5751\u4f09\u95f6\u94aa", "kao": "\u8003\u62f7\u70e4\u9760\u5c3b\u6832\u7292\u94d0", "ken": "\u80af\u5543\u57a6\u6073\u57a0\u88c9\u9880", "keng": "\u542d\u5fd0\u94ff", "kong": "\u7a7a\u6050\u5b54\u63a7\u5025\u5d06\u7b9c", "kou": "\u62a0\u53e3\u6263\u5bc7\u82a4\u853b\u53e9\u770d\u7b58", "ku": "\u67af\u54ed\u7a9f\u82e6\u9177\u5e93\u88e4\u5233\u5800\u55be\u7ed4\u9ab7", "kua": "\u5938\u57ae\u630e\u8de8\u80ef\u4f89", "kuai": "\u5757\u7b77\u4fa9\u5feb\u84af\u90d0\u8489\u72ef\u810d", "kuan": "\u5bbd\u6b3e\u9acb", "kuang": "\u5321\u7b50\u72c2\u6846\u77ff\u7736\u65f7\u51b5\u8bd3\u8bf3\u909d\u5739\u593c\u54d0\u7ea9\u8d36", "kui": "\u4e8f\u76d4\u5cbf\u7aa5\u8475\u594e\u9b41\u5080\u9988\u6127\u6e83\u9997\u532e\u5914\u9697\u63c6\u55b9\u559f\u609d\u6126\u9615\u9035\u668c\u777d\u8069\u8770\u7bd1\u81fe\u8dec", "kun": "\u5764\u6606\u6346\u56f0\u6083\u9603\u7428\u951f\u918c\u9cb2\u9ae1", "kuo": "\u62ec\u6269\u5ed3\u9614\u86de", "la": "\u5783\u62c9\u5587\u8721\u814a\u8fa3\u5566\u524c\u647a\u908b\u65ef\u782c\u760c", "lai": "\u83b1\u6765\u8d56\u5d03\u5f95\u6d9e\u6fd1\u8d49\u7750\u94fc\u765e\u7c41", "lan": "\u84dd\u5a6a\u680f\u62e6\u7bee\u9611\u5170\u6f9c\u8c30\u63fd\u89c8\u61d2\u7f06\u70c2\u6ee5\u5549\u5c9a\u61d4\u6f24\u6984\u6593\u7f71\u9567\u8934", "lang": "\u7405\u6994\u72fc\u5eca\u90ce\u6717\u6d6a\u83a8\u8497\u5577\u9606\u9512\u7a02\u8782", "lao": "\u635e\u52b3\u7262\u8001\u4f6c\u59e5\u916a\u70d9\u6d9d\u5520\u5d02\u6833\u94d1\u94f9\u75e8\u91aa", "le": "\u52d2\u4e50\u808b\u4ec2\u53fb\u561e\u6cd0\u9cd3", "lei": "\u96f7\u956d\u857e\u78ca\u7d2f\u5121\u5792\u64c2\u7c7b\u6cea\u7fb8\u8bd4\u837d\u54a7\u6f2f\u5ad8\u7f27\u6a91\u8012\u9179", "ling": "\u68f1\u51b7\u62ce\u73b2\u83f1\u96f6\u9f84\u94c3\u4f36\u7f9a\u51cc\u7075\u9675\u5cad\u9886\u53e6\u4ee4\u9143\u5844\u82d3\u5464\u56f9\u6ce0\u7eeb\u67c3\u68c2\u74f4\u8046\u86c9\u7fce\u9cae", "leng": "\u695e\u6123", "li": "\u5398\u68a8\u7281\u9ece\u7bf1\u72f8\u79bb\u6f13\u7406\u674e\u91cc\u9ca4\u793c\u8389\u8354\u540f\u6817\u4e3d\u5389\u52b1\u783e\u5386\u5229\u5088\u4f8b\u4fd0\u75e2\u7acb\u7c92\u6ca5\u96b6\u529b\u7483\u54e9\u4fea\u4fda\u90e6\u575c\u82c8\u8385\u84e0\u85dc\u6369\u5456\u5533\u55b1\u7301\u6ea7\u6fa7\u9026\u5a0c\u5ae0\u9a8a\u7f21\u73de\u67a5\u680e\u8f79\u623e\u783a\u8a48\u7f79\u9502\u9e42\u75a0\u75ac\u86ce\u870a\u8821\u7b20\u7be5\u7c9d\u91b4\u8dde\u96f3\u9ca1\u9ce2\u9ee7", "lian": "\u4fe9\u8054\u83b2\u8fde\u9570\u5ec9\u601c\u6d9f\u5e18\u655b\u8138\u94fe\u604b\u70bc\u7ec3\u631b\u8539\u5941\u6f4b\u6fc2\u5a08\u740f\u695d\u6b93\u81c1\u81a6\u88e2\u880a\u9ca2", "liang": "\u7cae\u51c9\u6881\u7cb1\u826f\u4e24\u8f86\u91cf\u667e\u4eae\u8c05\u589a\u690b\u8e09\u9753\u9b49", "liao": "\u64a9\u804a\u50da\u7597\u71ce\u5be5\u8fbd\u6f66\u4e86\u6482\u9563\u5ed6\u6599\u84fc\u5c25\u5639\u7360\u5bee\u7f2d\u948c\u9e69\u8022", "lie": "\u5217\u88c2\u70c8\u52a3\u730e\u51bd\u57d2\u6d0c\u8d94\u8e90\u9b23", "lin": "\u7433\u6797\u78f7\u9716\u4e34\u90bb\u9cde\u6dcb\u51db\u8d41\u541d\u853a\u5d99\u5eea\u9074\u6aa9\u8f9a\u77b5\u7cbc\u8e8f\u9e9f", "liu": "\u6e9c\u7409\u69b4\u786b\u998f\u7559\u5218\u7624\u6d41\u67f3\u516d\u62a1\u507b\u848c\u6cd6\u6d4f\u905b\u9a9d\u7efa\u65d2\u7198\u950d\u954f\u9e68\u938f", "long": "\u9f99\u804b\u5499\u7b3c\u7abf\u9686\u5784\u62e2\u9647\u5f04\u5785\u830f\u6cf7\u73d1\u680a\u80e7\u783b\u7643", "lou": "\u697c\u5a04\u6402\u7bd3\u6f0f\u964b\u55bd\u5d5d\u9542\u7618\u8027\u877c\u9ac5", "lu": "\u82a6\u5362\u9885\u5e90\u7089\u63b3\u5364\u864f\u9c81\u9e93\u788c\u9732\u8def\u8d42\u9e7f\u6f5e\u7984\u5f55\u9646\u622e\u5786\u6445\u64b8\u565c\u6cf8\u6e0c\u6f09\u7490\u680c\u6a79\u8f73\u8f82\u8f98\u6c07\u80ea\u9565\u9e2c\u9e6d\u7c0f\u823b\u9c88", "lv": "\u9a74\u5415\u94dd\u4fa3\u65c5\u5c65\u5c61\u7f15\u8651\u6c2f\u5f8b\u7387\u6ee4\u7eff\u634b\u95fe\u6988\u8182\u7a06\u891b", "luan": "\u5ce6\u5b6a\u6ee6\u5375\u4e71\u683e\u9e3e\u92ae", "lue": "\u63a0\u7565\u950a", "lun": "\u8f6e\u4f26\u4ed1\u6ca6\u7eb6\u8bba\u56f5", "luo": "\u841d\u87ba\u7f57\u903b\u9523\u7ba9\u9aa1\u88f8\u843d\u6d1b\u9a86\u7edc\u502e\u8366\u645e\u7321\u6cfa\u6924\u8136\u9559\u7630\u96d2", "ma": "\u5988\u9ebb\u739b\u7801\u8682\u9a6c\u9a82\u561b\u5417\u551b\u72b8\u5b37\u6769\u9ebd", "mai": "\u57cb\u4e70\u9ea6\u5356\u8fc8\u8109\u52a2\u836c\u54aa\u973e", "man": "\u7792\u9992\u86ee\u6ee1\u8513\u66fc\u6162\u6f2b\u8c29\u5881\u5e54\u7f26\u71b3\u9558\u989f\u87a8\u9cd7\u9794", "mang": "\u8292\u832b\u76f2\u5fd9\u83bd\u9099\u6f2d\u6726\u786d\u87d2", "meng": "\u6c13\u840c\u8499\u6aac\u76df\u9530\u731b\u68a6\u5b5f\u52d0\u750d\u77a2\u61f5\u791e\u867b\u8722\u8813\u824b\u8268\u9efe", "miao": "\u732b\u82d7\u63cf\u7784\u85d0\u79d2\u6e3a\u5e99\u5999\u55b5\u9088\u7f08\u7f2a\u676a\u6dfc\u7707\u9e4b\u8731", "mao": "\u8305\u951a\u6bdb\u77db\u94c6\u536f\u8302\u5192\u5e3d\u8c8c\u8d38\u4f94\u88a4\u52d6\u8306\u5cc1\u7441\u6634\u7266\u8004\u65c4\u61cb\u7780\u86d1\u8765\u87ca\u9ae6", "me": "\u4e48", "mei": "\u73ab\u679a\u6885\u9176\u9709\u7164\u6ca1\u7709\u5a92\u9541\u6bcf\u7f8e\u6627\u5bd0\u59b9\u5a9a\u5776\u8393\u5d4b\u7338\u6d7c\u6e44\u6963\u9545\u9e5b\u8882\u9b45", "men": "\u95e8\u95f7\u4eec\u626a\u739f\u7116\u61d1\u9494", "mi": "\u772f\u919a\u9761\u7cdc\u8ff7\u8c1c\u5f25\u7c73\u79d8\u89c5\u6ccc\u871c\u5bc6\u5e42\u8288\u5196\u8c27\u863c\u5627\u7315\u736f\u6c68\u5b93\u5f2d\u8112\u6549\u7cf8\u7e3b\u9e8b", "mian": "\u68c9\u7720\u7ef5\u5195\u514d\u52c9\u5a29\u7f05\u9762\u6c94\u6e4e\u817c\u7704", "mie": "\u8511\u706d\u54a9\u881b\u7bfe", "min": "\u6c11\u62bf\u76bf\u654f\u60af\u95fd\u82e0\u5cb7\u95f5\u6cef\u73c9", "ming": "\u660e\u879f\u9e23\u94ed\u540d\u547d\u51a5\u8317\u6e9f\u669d\u7791\u9169", "miu": "\u8c2c", "mo": "\u6478\u6479\u8611\u6a21\u819c\u78e8\u6469\u9b54\u62b9\u672b\u83ab\u58a8\u9ed8\u6cab\u6f20\u5bde\u964c\u8c1f\u8309\u84e6\u998d\u5aeb\u9546\u79e3\u763c\u8031\u87c6\u8c8a\u8c98", "mou": "\u8c0b\u725f\u67d0\u53b6\u54de\u5a7a\u7738\u936a", "mu": "\u62c7\u7261\u4ea9\u59c6\u6bcd\u5893\u66ae\u5e55\u52df\u6155\u6728\u76ee\u7766\u7267\u7a46\u4eeb\u82dc\u5452\u6c90\u6bea\u94bc", "na": "\u62ff\u54ea\u5450\u94a0\u90a3\u5a1c\u7eb3\u5185\u637a\u80ad\u954e\u8872\u7bac", "nai": "\u6c16\u4e43\u5976\u8010\u5948\u9f10\u827f\u8418\u67f0", "nan": "\u5357\u7537\u96be\u56ca\u5583\u56e1\u6960\u8169\u877b\u8d67", "nao": "\u6320\u8111\u607c\u95f9\u5b6c\u57b4\u7331\u7459\u7847\u94d9\u86f2", "ne": "\u6dd6\u5462\u8bb7", "nei": "\u9981", "nen": "\u5ae9\u80fd\u6798\u6041", "ni": "\u59ae\u9713\u502a\u6ce5\u5c3c\u62df\u4f60\u533f\u817b\u9006\u6eba\u4f32\u576d\u730a\u6029\u6ee0\u6635\u65ce\u7962\u615d\u7768\u94cc\u9cb5", "nian": "\u852b\u62c8\u5e74\u78be\u64b5\u637b\u5ff5\u5eff\u8f87\u9ecf\u9c87\u9cb6", "niang": "\u5a18\u917f", "niao": "\u9e1f\u5c3f\u8311\u5b32\u8132\u8885", "nie": "\u634f\u8042\u5b7d\u556e\u954a\u954d\u6d85\u4e5c\u9667\u8616\u55eb\u8080\u989e\u81ec\u8e51", "nin": "\u60a8\u67e0", "ning": "\u72de\u51dd\u5b81\u62e7\u6cde\u4f5e\u84e5\u549b\u752f\u804d", "niu": "\u725b\u626d\u94ae\u7ebd\u72c3\u5ff8\u599e\u86b4", "nong": "\u8113\u6d53\u519c\u4fac", "nu": "\u5974\u52aa\u6012\u5476\u5e11\u5f29\u80ec\u5b65\u9a7d", "nv": "\u5973\u6067\u9495\u8844", "nuan": "\u6696", "nuenue": "\u8650", "nue": "\u759f\u8c11", "nuo": "\u632a\u61e6\u7cef\u8bfa\u50a9\u6426\u558f\u9518", "ou": "\u54e6\u6b27\u9e25\u6bb4\u85d5\u5455\u5076\u6ca4\u6004\u74ef\u8026", "pa": "\u556a\u8db4\u722c\u5e15\u6015\u7436\u8469\u7b62", "pai": "\u62cd\u6392\u724c\u5f98\u6e43\u6d3e\u4ff3\u848e", "pan": "\u6500\u6f58\u76d8\u78d0\u76fc\u7554\u5224\u53db\u723f\u6cee\u88a2\u897b\u87e0\u8e52", "pang": "\u4e53\u5e9e\u65c1\u802a\u80d6\u6ec2\u9004", "pao": "\u629b\u5486\u5228\u70ae\u888d\u8dd1\u6ce1\u530f\u72cd\u5e96\u812c\u75b1", "pei": "\u5478\u80da\u57f9\u88f4\u8d54\u966a\u914d\u4f69\u6c9b\u638a\u8f94\u5e14\u6de0\u65c6\u952b\u9185\u9708", "pen": "\u55b7\u76c6\u6e53", "peng": "\u7830\u62a8\u70f9\u6f8e\u5f6d\u84ec\u68da\u787c\u7bf7\u81a8\u670b\u9e4f\u6367\u78b0\u576f\u580b\u562d\u6026\u87db", "pi": "\u7812\u9739\u6279\u62ab\u5288\u7435\u6bd7\u5564\u813e\u75b2\u76ae\u5339\u75de\u50fb\u5c41\u8b6c\u4e15\u9674\u90b3\u90eb\u572e\u9f19\u64d7\u567c\u5e80\u5ab2\u7eb0\u6787\u7513\u7765\u7f74\u94cd\u75e6\u7656\u758b\u868d\u8c94", "pian": "\u7bc7\u504f\u7247\u9a97\u8c1d\u9a88\u728f\u80fc\u890a\u7fe9\u8e41", "piao": "\u98d8\u6f02\u74e2\u7968\u527d\u560c\u5ad6\u7f25\u6b8d\u779f\u87b5", "pie": "\u6487\u77a5\u4e3f\u82e4\u6c15", "pin": "\u62fc\u9891\u8d2b\u54c1\u8058\u62da\u59d8\u5ad4\u6980\u725d\u98a6", "ping": "\u4e52\u576a\u82f9\u840d\u5e73\u51ed\u74f6\u8bc4\u5c4f\u4fdc\u5a09\u67b0\u9c86", "po": "\u5761\u6cfc\u9887\u5a46\u7834\u9b44\u8feb\u7c95\u53f5\u9131\u6ea5\u73c0\u948b\u94b7\u76a4\u7b38", "pou": "\u5256\u88d2\u8e23", "pu": "\u6251\u94fa\u4ec6\u8386\u8461\u83e9\u84b2\u57d4\u6734\u5703\u666e\u6d66\u8c31\u66dd\u7011\u530d\u5657\u6fee\u749e\u6c06\u9564\u9568\u8e7c", "qi": "\u671f\u6b3a\u6816\u621a\u59bb\u4e03\u51c4\u6f06\u67d2\u6c8f\u5176\u68cb\u5947\u6b67\u7566\u5d0e\u8110\u9f50\u65d7\u7948\u7941\u9a91\u8d77\u5c82\u4e5e\u4f01\u542f\u5951\u780c\u5668\u6c14\u8fc4\u5f03\u6c7d\u6ce3\u8bab\u4e9f\u4e93\u573b\u8291\u840b\u847a\u5601\u5c7a\u5c90\u6c54\u6dc7\u9a90\u7eee\u742a\u7426\u675e\u6864\u69ed\u6b39\u797a\u61a9\u789b\u86f4\u871e\u7da6\u7dae\u8dbf\u8e4a\u9ccd\u9e92", "qia": "\u6390\u6070\u6d3d\u845c", "qian": "\u7275\u6266\u948e\u94c5\u5343\u8fc1\u7b7e\u4edf\u8c26\u4e7e\u9ed4\u94b1\u94b3\u524d\u6f5c\u9063\u6d45\u8c34\u5811\u5d4c\u6b20\u6b49\u4f65\u9621\u828a\u82a1\u8368\u63ae\u5c8d\u60ad\u614a\u9a9e\u6434\u8930\u7f31\u6920\u80b7\u6106\u94a4\u8654\u7b9d", "qiang": "\u67aa\u545b\u8154\u7f8c\u5899\u8537\u5f3a\u62a2\u5af1\u6a2f\u6217\u709d\u9516\u9535\u956a\u8941\u8723\u7f9f\u8deb\u8dc4", "qiao": "\u6a47\u9539\u6572\u6084\u6865\u77a7\u4e54\u4fa8\u5de7\u9798\u64ac\u7fd8\u5ced\u4fcf\u7a8d\u5281\u8bee\u8c2f\u835e\u6100\u6194\u7f32\u6a35\u6bf3\u7857\u8df7\u9792", "qie": "\u5207\u8304\u4e14\u602f\u7a83\u90c4\u553c\u60ec\u59be\u6308\u9532\u7ba7", "qin": "\u94a6\u4fb5\u4eb2\u79e6\u7434\u52e4\u82b9\u64d2\u79bd\u5bdd\u6c81\u82a9\u84c1\u8572\u63ff\u5423\u55ea\u5659\u6eb1\u6a8e\u8793\u887e", "qing": "\u9752\u8f7b\u6c22\u503e\u537f\u6e05\u64ce\u6674\u6c30\u60c5\u9877\u8bf7\u5e86\u5029\u82d8\u570a\u6aa0\u78ec\u873b\u7f44\u7b90\u8b26\u9cad\u9ee5", "qiong": "\u743c\u7a77\u909b\u8315\u7a79\u7b47\u928e", "qiu": "\u79cb\u4e18\u90b1\u7403\u6c42\u56da\u914b\u6cc5\u4fc5\u6c3d\u5def\u827d\u72b0\u6e6b\u9011\u9052\u6978\u8d47\u9e20\u866c\u86af\u8764\u88d8\u7cd7\u9cc5\u9f3d", "qu": "\u8d8b\u533a\u86c6\u66f2\u8eaf\u5c48\u9a71\u6e20\u53d6\u5a36\u9f8b\u8da3\u53bb\u8bce\u52ac\u8556\u8627\u5c96\u8862\u9612\u74a9\u89d1\u6c0d\u795b\u78f2\u766f\u86d0\u883c\u9eb4\u77bf\u9ee2", "quan": "\u5708\u98a7\u6743\u919b\u6cc9\u5168\u75ca\u62f3\u72ac\u5238\u529d\u8be0\u8343\u737e\u609b\u7efb\u8f81\u754e\u94e8\u8737\u7b4c\u9b08", "que": "\u7f3a\u7094\u7638\u5374\u9e4a\u69b7\u786e\u96c0\u9619\u60ab", "qun": "\u88d9\u7fa4\u9021", "ran": "\u7136\u71c3\u5189\u67d3\u82d2\u9aef", "rang": "\u74e4\u58e4\u6518\u56b7\u8ba9\u79b3\u7a70", "rao": "\u9976\u6270\u7ed5\u835b\u5a06\u6861", "ruo": "\u60f9\u82e5\u5f31", "re": "\u70ed\u504c", "ren": "\u58ec\u4ec1\u4eba\u5fcd\u97e7\u4efb\u8ba4\u5203\u598a\u7eab\u4ede\u834f\u845a\u996a\u8f6b\u7a14\u887d", "reng": "\u6254\u4ecd", "ri": "\u65e5", "rong": "\u620e\u8338\u84c9\u8363\u878d\u7194\u6eb6\u5bb9\u7ed2\u5197\u5d58\u72e8\u7f1b\u6995\u877e", "rou": "\u63c9\u67d4\u8089\u7cc5\u8e42\u97a3", "ru": "\u8339\u8815\u5112\u5b7a\u5982\u8fb1\u4e73\u6c5d\u5165\u8925\u84d0\u85b7\u5685\u6d33\u6ebd\u6fe1\u94f7\u8966\u98a5", "ruan": "\u8f6f\u962e\u670a", "rui": "\u854a\u745e\u9510\u82ae\u8564\u777f\u868b", "run": "\u95f0\u6da6", "sa": "\u6492\u6d12\u8428\u5345\u4ee8\u6332\u98d2", "sai": "\u816e\u9cc3\u585e\u8d5b\u567b", "san": "\u4e09\u53c1\u4f1e\u6563\u5f61\u9993\u6c35\u6bf5\u7cc1\u9730", "sang": "\u6851\u55d3\u4e27\u6421\u78c9\u98a1", "sao": "\u6414\u9a9a\u626b\u5ac2\u57fd\u81ca\u7619\u9ccb", "se": "\u745f\u8272\u6da9\u556c\u94e9\u94ef\u7a51", "sen": "\u68ee", "seng": "\u50e7", "sha": "\u838e\u7802\u6740\u5239\u6c99\u7eb1\u50bb\u5565\u715e\u810e\u6b43\u75e7\u88df\u970e\u9ca8", "shai": "\u7b5b\u6652\u917e", "shan": "\u73ca\u82eb\u6749\u5c71\u5220\u717d\u886b\u95ea\u9655\u64c5\u8d61\u81b3\u5584\u6c55\u6247\u7f2e\u5261\u8baa\u912f\u57cf\u829f\u6f78\u59d7\u9a9f\u81bb\u9490\u759d\u87ee\u8222\u8dda\u9cdd", "shang": "\u5892\u4f24\u5546\u8d4f\u664c\u4e0a\u5c1a\u88f3\u57a7\u7ef1\u6b87\u71b5\u89de", "shao": "\u68a2\u634e\u7a0d\u70e7\u828d\u52fa\u97f6\u5c11\u54e8\u90b5\u7ecd\u52ad\u82d5\u6f72\u86f8\u7b24\u7b72\u8244", "she": "\u5962\u8d4a\u86c7\u820c\u820d\u8d66\u6444\u5c04\u6151\u6d89\u793e\u8bbe\u538d\u4f58\u731e\u7572\u9e9d", "shen": "\u7837\u7533\u547b\u4f38\u8eab\u6df1\u5a20\u7ec5\u795e\u6c88\u5ba1\u5a76\u751a\u80be\u614e\u6e17\u8bdc\u8c02\u5432\u54c2\u6e16\u6939\u77e7\u8703", "sheng": "\u58f0\u751f\u7525\u7272\u5347\u7ef3\u7701\u76db\u5269\u80dc\u5723\u4e1e\u6e11\u5ab5\u771a\u7b19", "shi": "\u5e08\u5931\u72ee\u65bd\u6e7f\u8bd7\u5c38\u8671\u5341\u77f3\u62fe\u65f6\u4ec0\u98df\u8680\u5b9e\u8bc6\u53f2\u77e2\u4f7f\u5c4e\u9a76\u59cb\u5f0f\u793a\u58eb\u4e16\u67ff\u4e8b\u62ed\u8a93\u901d\u52bf\u662f\u55dc\u566c\u9002\u4ed5\u4f8d\u91ca\u9970\u6c0f\u5e02\u6043\u5ba4\u89c6\u8bd5\u8c25\u57d8\u83b3\u84cd\u5f11\u5511\u9963\u8f7c\u8006\u8d33\u70bb\u793b\u94c8\u94ca\u87ab\u8210\u7b6e\u8c55\u9ca5\u9cba", "shou": "\u6536\u624b\u9996\u5b88\u5bff\u6388\u552e\u53d7\u7626\u517d\u624c\u72e9\u7ef6\u824f", "shu": "\u852c\u67a2\u68b3\u6b8a\u6292\u8f93\u53d4\u8212\u6dd1\u758f\u4e66\u8d4e\u5b70\u719f\u85af\u6691\u66d9\u7f72\u8700\u9ecd\u9f20\u5c5e\u672f\u8ff0\u6811\u675f\u620d\u7ad6\u5885\u5eb6\u6570\u6f31\u6055\u500f\u587e\u83fd\u5fc4\u6cad\u6d91\u6f8d\u59dd\u7ebe\u6bf9\u8167\u6bb3\u956f\u79eb\u9e6c", "shua": "\u5237\u800d\u5530\u6dae", "shuai": "\u6454\u8870\u7529\u5e05\u87c0", "shuan": "\u6813\u62f4\u95e9", "shuang": "\u971c\u53cc\u723d\u5b40", "shui": "\u8c01\u6c34\u7761\u7a0e", "shun": "\u542e\u77ac\u987a\u821c\u6042", "shuo": "\u8bf4\u7855\u6714\u70c1\u84b4\u6420\u55cd\u6fef\u5981\u69ca\u94c4", "si": "\u65af\u6495\u5636\u601d\u79c1\u53f8\u4e1d\u6b7b\u8086\u5bfa\u55e3\u56db\u4f3a\u4f3c\u9972\u5df3\u53ae\u4fdf\u5155\u83e5\u549d\u6c5c\u6cd7\u6f8c\u59d2\u9a77\u7f0c\u7940\u7960\u9536\u9e36\u801c\u86f3\u7b25", "song": "\u677e\u8038\u6002\u9882\u9001\u5b8b\u8bbc\u8bf5\u51c7\u83d8\u5d27\u5d69\u5fea\u609a\u6dde\u7ae6", "sou": "\u641c\u8258\u64de\u55fd\u53df\u55d6\u55fe\u998a\u6eb2\u98d5\u778d\u953c\u878b", "su": "\u82cf\u9165\u4fd7\u7d20\u901f\u7c9f\u50f3\u5851\u6eaf\u5bbf\u8bc9\u8083\u5919\u8c21\u850c\u55c9\u612b\u7c0c\u89eb\u7a23", "suan": "\u9178\u849c\u7b97", "sui": "\u867d\u968b\u968f\u7ee5\u9ad3\u788e\u5c81\u7a57\u9042\u96a7\u795f\u84d1\u51ab\u8c07\u6fc9\u9083\u71e7\u772d\u7762", "sun": "\u5b59\u635f\u7b0b\u836a\u72f2\u98e7\u69ab\u8de3\u96bc", "suo": "\u68ad\u5506\u7f29\u7410\u7d22\u9501\u6240\u5522\u55e6\u5a11\u686b\u7743\u7fa7", "ta": "\u584c\u4ed6\u5b83\u5979\u5854\u736d\u631e\u8e4b\u8e0f\u95fc\u6ebb\u9062\u69bb\u6c93", "tai": "\u80ce\u82d4\u62ac\u53f0\u6cf0\u915e\u592a\u6001\u6c70\u90b0\u85b9\u80bd\u70b1\u949b\u8dc6\u9c90", "tan": "\u574d\u644a\u8d2a\u762b\u6ee9\u575b\u6a80\u75f0\u6f6d\u8c2d\u8c08\u5766\u6bef\u8892\u78b3\u63a2\u53f9\u70ad\u90ef\u8548\u6619\u94bd\u952c\u8983", "tang": "\u6c64\u5858\u642a\u5802\u68e0\u819b\u5510\u7cd6\u50a5\u9967\u6e8f\u746d\u94f4\u9557\u8025\u8797\u87b3\u7fb0\u91a3", "thang": "\u5018\u8eba\u6dcc", "theng": "\u8d9f\u70eb", "tao": "\u638f\u6d9b\u6ed4\u7ee6\u8404\u6843\u9003\u6dd8\u9676\u8ba8\u5957\u6311\u9f17\u5555\u97ec\u9955", "te": "\u7279", "teng": "\u85e4\u817e\u75bc\u8a8a\u6ed5", "ti": "\u68af\u5254\u8e22\u9511\u63d0\u9898\u8e44\u557c\u4f53\u66ff\u568f\u60d5\u6d95\u5243\u5c49\u8351\u608c\u9016\u7ee8\u7f07\u9e48\u88fc\u918d", "tian": "\u5929\u6dfb\u586b\u7530\u751c\u606c\u8214\u8146\u63ad\u5fdd\u9617\u6b84\u754b\u94bf\u86ba", "tiao": "\u6761\u8fe2\u773a\u8df3\u4f7b\u7967\u94eb\u7a95\u9f86\u9ca6", "tie": "\u8d34\u94c1\u5e16\u841c\u992e", "ting": "\u5385\u542c\u70c3\u6c40\u5ef7\u505c\u4ead\u5ead\u633a\u8247\u839b\u8476\u5a77\u6883\u8713\u9706", "tong": "\u901a\u6850\u916e\u77b3\u540c\u94dc\u5f64\u7ae5\u6876\u6345\u7b52\u7edf\u75db\u4f5f\u50ee\u4edd\u833c\u55f5\u6078\u6f7c\u783c", "tou": "\u5077\u6295\u5934\u900f\u4ea0", "tu": "\u51f8\u79c3\u7a81\u56fe\u5f92\u9014\u6d82\u5c60\u571f\u5410\u5154\u580d\u837c\u83df\u948d\u9174", "tuan": "\u6e4d\u56e2\u7583", "tui": "\u63a8\u9893\u817f\u8715\u892a\u9000\u5fd2\u717a", "tun": "\u541e\u5c6f\u81c0\u9968\u66be\u8c5a\u7a80", "tuo": "\u62d6\u6258\u8131\u9e35\u9640\u9a6e\u9a7c\u692d\u59a5\u62d3\u553e\u4e47\u4f57\u5768\u5eb9\u6cb1\u67dd\u7823\u7ba8\u8204\u8dce\u9f0d", "wa": "\u6316\u54c7\u86d9\u6d3c\u5a03\u74e6\u889c\u4f64\u5a32\u817d", "wai": "\u6b6a\u5916", "wan": "\u8c4c\u5f2f\u6e7e\u73a9\u987d\u4e38\u70f7\u5b8c\u7897\u633d\u665a\u7696\u60cb\u5b9b\u5a49\u4e07\u8155\u525c\u8284\u82cb\u83c0\u7ea8\u7efe\u742c\u8118\u7579\u873f\u7ba2", "wang": "\u6c6a\u738b\u4ea1\u6789\u7f51\u5f80\u65fa\u671b\u5fd8\u5984\u7f54\u5c22\u60d8\u8f8b\u9b4d", "wei": "\u5a01\u5dcd\u5fae\u5371\u97e6\u8fdd\u6845\u56f4\u552f\u60df\u4e3a\u6f4d\u7ef4\u82c7\u840e\u59d4\u4f1f\u4f2a\u5c3e\u7eac\u672a\u851a\u5473\u754f\u80c3\u5582\u9b4f\u4f4d\u6e2d\u8c13\u5c09\u6170\u536b\u502d\u504e\u8bff\u9688\u8473\u8587\u5e0f\u5e37\u5d34\u5d6c\u7325\u732c\u95f1\u6ca9\u6d27\u6da0\u9036\u5a13\u73ae\u97ea\u8ece\u709c\u7168\u71a8\u75ff\u8249\u9c94", "wen": "\u761f\u6e29\u868a\u6587\u95fb\u7eb9\u543b\u7a33\u7d0a\u95ee\u520e\u6120\u960c\u6c76\u74ba\u97eb\u6b81\u96ef", "weng": "\u55e1\u7fc1\u74ee\u84ca\u8579", "wo": "\u631d\u8717\u6da1\u7a9d\u6211\u65a1\u5367\u63e1\u6c83\u83b4\u5e44\u6e25\u674c\u809f\u9f8c", "wu": "\u5deb\u545c\u94a8\u4e4c\u6c61\u8bec\u5c4b\u65e0\u829c\u68a7\u543e\u5434\u6bcb\u6b66\u4e94\u6342\u5348\u821e\u4f0d\u4fae\u575e\u620a\u96fe\u6664\u7269\u52ff\u52a1\u609f\u8bef\u5140\u4ef5\u9622\u90ac\u572c\u82b4\u5e91\u6003\u5fe4\u6d6f\u5be4\u8fd5\u59a9\u9a9b\u727e\u7110\u9e49\u9e5c\u8708\u92c8\u9f2f", "xi": "\u6614\u7199\u6790\u897f\u7852\u77fd\u6670\u563b\u5438\u9521\u727a\u7a00\u606f\u5e0c\u6089\u819d\u5915\u60dc\u7184\u70ef\u6eaa\u6c50\u7280\u6a84\u88ad\u5e2d\u4e60\u5ab3\u559c\u94e3\u6d17\u7cfb\u9699\u620f\u7ec6\u50d6\u516e\u96b0\u90d7\u831c\u8478\u84f0\u595a\u550f\u5f99\u9969\u960b\u6d60\u6dc5\u5c63\u5b09\u73ba\u6a28\u66e6\u89cb\u6b37\u71b9\u798a\u79a7\u94b8\u7699\u7a78\u8725\u87cb\u823e\u7fb2\u7c9e\u7fd5\u91af\u9f37", "xia": "\u778e\u867e\u5323\u971e\u8f96\u6687\u5ce1\u4fa0\u72ed\u4e0b\u53a6\u590f\u5413\u6380\u846d\u55c4\u72ce\u9050\u7455\u7856\u7615\u7f45\u9ee0", "xian": "\u9528\u5148\u4ed9\u9c9c\u7ea4\u54b8\u8d24\u8854\u8237\u95f2\u6d8e\u5f26\u5acc\u663e\u9669\u73b0\u732e\u53bf\u817a\u9985\u7fa1\u5baa\u9677\u9650\u7ebf\u51bc\u85d3\u5c98\u7303\u66b9\u5a34\u6c19\u7946\u9e47\u75eb\u86ac\u7b45\u7c7c\u9170\u8df9", "xiang": "\u76f8\u53a2\u9576\u9999\u7bb1\u8944\u6e58\u4e61\u7fd4\u7965\u8be6\u60f3\u54cd\u4eab\u9879\u5df7\u6a61\u50cf\u5411\u8c61\u8297\u8459\u9977\u5ea0\u9aa7\u7f03\u87d3\u9c9e\u98e8", "xiao": "\u8427\u785d\u9704\u524a\u54ee\u56a3\u9500\u6d88\u5bb5\u6dc6\u6653\u5c0f\u5b5d\u6821\u8096\u5578\u7b11\u6548\u54d3\u54bb\u5d24\u6f47\u900d\u9a81\u7ee1\u67ad\u67b5\u7b71\u7bab\u9b48", "xie": "\u6954\u4e9b\u6b47\u874e\u978b\u534f\u631f\u643a\u90aa\u659c\u80c1\u8c10\u5199\u68b0\u5378\u87f9\u61c8\u6cc4\u6cfb\u8c22\u5c51\u5055\u4eb5\u52f0\u71ee\u85a4\u64b7\u5ee8\u7023\u9082\u7ec1\u7f2c\u69ad\u698d\u6b59\u8e9e", "xin": "\u85aa\u82af\u950c\u6b23\u8f9b\u65b0\u5ffb\u5fc3\u4fe1\u8845\u56df\u99a8\u8398\u6b46\u94fd\u946b", "xing": "\u661f\u8165\u7329\u60fa\u5174\u5211\u578b\u5f62\u90a2\u884c\u9192\u5e78\u674f\u6027\u59d3\u9649\u8347\u8365\u64e4\u60bb\u784e", "xiong": "\u5144\u51f6\u80f8\u5308\u6c79\u96c4\u718a\u828e", "xiu": "\u4f11\u4fee\u7f9e\u673d\u55c5\u9508\u79c0\u8896\u7ee3\u83a0\u5cab\u9990\u5ea5\u9e3a\u8c85\u9af9", "xu": "\u589f\u620c\u9700\u865a\u5618\u987b\u5f90\u8bb8\u84c4\u9157\u53d9\u65ed\u5e8f\u755c\u6064\u7d6e\u5a7f\u7eea\u7eed\u8bb4\u8be9\u5729\u84ff\u6035\u6d2b\u6e86\u987c\u6829\u7166\u7809\u76f1\u80e5\u7cc8\u9191", "xuan": "\u8f69\u55a7\u5ba3\u60ac\u65cb\u7384\u9009\u7663\u7729\u7eda\u5107\u8c16\u8431\u63ce\u9994\u6ceb\u6d35\u6e32\u6f29\u7487\u6966\u6684\u70ab\u714a\u78b9\u94c9\u955f\u75c3", "xue": "\u9774\u859b\u5b66\u7a74\u96ea\u8840\u5671\u6cf6\u9cd5", "xun": "\u52cb\u718f\u5faa\u65ec\u8be2\u5bfb\u9a6f\u5de1\u6b89\u6c5b\u8bad\u8baf\u900a\u8fc5\u5dfd\u57d9\u8340\u85b0\u5ccb\u5f87\u6d54\u66db\u7aa8\u91ba\u9c9f", "ya": "\u538b\u62bc\u9e26\u9e2d\u5440\u4e2b\u82bd\u7259\u869c\u5d16\u8859\u6daf\u96c5\u54d1\u4e9a\u8bb6\u4f22\u63e0\u5416\u5c88\u8fd3\u5a05\u740a\u6860\u6c29\u7811\u775a\u75d6", "yan": "\u7109\u54bd\u9609\u70df\u6df9\u76d0\u4e25\u7814\u8712\u5ca9\u5ef6\u8a00\u989c\u960e\u708e\u6cbf\u5944\u63a9\u773c\u884d\u6f14\u8273\u5830\u71d5\u538c\u781a\u96c1\u5501\u5f66\u7130\u5bb4\u8c1a\u9a8c\u53a3\u9765\u8d5d\u4fe8\u5043\u5156\u8ba0\u8c33\u90fe\u9122\u82ab\u83f8\u5d26\u6079\u95eb\u960f\u6d07\u6e6e\u6edf\u598d\u5ae3\u7430\u664f\u80ed\u814c\u7131\u7f68\u7b75\u917d\u9b47\u990d\u9f39", "yang": "\u6b83\u592e\u9e2f\u79e7\u6768\u626c\u4f6f\u75a1\u7f8a\u6d0b\u9633\u6c27\u4ef0\u75d2\u517b\u6837\u6f3e\u5f89\u600f\u6cf1\u7080\u70ca\u6059\u86d8\u9785", "yao": "\u9080\u8170\u5996\u7476\u6447\u5c27\u9065\u7a91\u8c23\u59da\u54ac\u8200\u836f\u8981\u8000\u592d\u723b\u5406\u5d3e\u5fad\u7039\u5e7a\u73e7\u6773\u66dc\u80b4\u9e5e\u7a88\u7e47\u9cd0", "ye": "\u6930\u564e\u8036\u7237\u91ce\u51b6\u4e5f\u9875\u6396\u4e1a\u53f6\u66f3\u814b\u591c\u6db2\u8c12\u90ba\u63f6\u9980\u6654\u70e8\u94d8", "yi": "\u4e00\u58f9\u533b\u63d6\u94f1\u4f9d\u4f0a\u8863\u9890\u5937\u9057\u79fb\u4eea\u80f0\u7591\u6c82\u5b9c\u59e8\u5f5d\u6905\u8681\u501a\u5df2\u4e59\u77e3\u4ee5\u827a\u6291\u6613\u9091\u5c79\u4ebf\u5f79\u81c6\u9038\u8084\u75ab\u4ea6\u88d4\u610f\u6bc5\u5fc6\u4e49\u76ca\u6ea2\u8be3\u8bae\u8c0a\u8bd1\u5f02\u7ffc\u7fcc\u7ece\u5208\u5293\u4f7e\u8bd2\u572a\u572f\u57f8\u61ff\u82e1\u858f\u5f08\u5955\u6339\u5f0b\u5453\u54a6\u54bf\u566b\u5cc4\u5db7\u7317\u9974\u603f\u6021\u6092\u6f2a\u8fe4\u9a7f\u7f22\u6baa\u8d3b\u65d6\u71a0\u9487\u9552\u9571\u75cd\u7617\u7654\u7fca\u8864\u8734\u8223\u7fbf\u7ff3\u914f\u9edf", "yin": "\u8335\u836b\u56e0\u6bb7\u97f3\u9634\u59fb\u541f\u94f6\u6deb\u5bc5\u996e\u5c39\u5f15\u9690\u5370\u80e4\u911e\u5819\u831a\u5591\u72fa\u5924\u6c24\u94df\u763e\u8693\u972a\u9f88", "ying": "\u82f1\u6a31\u5a74\u9e70\u5e94\u7f28\u83b9\u8424\u8425\u8367\u8747\u8fce\u8d62\u76c8\u5f71\u9896\u786c\u6620\u5b34\u90e2\u8314\u83ba\u8426\u6484\u5624\u81ba\u6ee2\u6f46\u701b\u745b\u748e\u6979\u9e66\u763f\u988d\u7f42", "yo": "\u54df\u5537", "yong": "\u62e5\u4f63\u81c3\u75c8\u5eb8\u96cd\u8e0a\u86f9\u548f\u6cf3\u6d8c\u6c38\u607f\u52c7\u7528\u4fd1\u58c5\u5889\u6175\u9095\u955b\u752c\u9cd9\u9954", "you": "\u5e7d\u4f18\u60a0\u5fe7\u5c24\u7531\u90ae\u94c0\u72b9\u6cb9\u6e38\u9149\u6709\u53cb\u53f3\u4f51\u91c9\u8bf1\u53c8\u5e7c\u5363\u6538\u4f91\u83b8\u5466\u56ff\u5ba5\u67da\u7337\u7256\u94d5\u75a3\u8763\u9c7f\u9edd\u9f2c", "yu": "\u8fc2\u6de4\u4e8e\u76c2\u6986\u865e\u611a\u8206\u4f59\u4fde\u903e\u9c7c\u6109\u6e1d\u6e14\u9685\u4e88\u5a31\u96e8\u4e0e\u5c7f\u79b9\u5b87\u8bed\u7fbd\u7389\u57df\u828b\u90c1\u5401\u9047\u55bb\u5cea\u5fa1\u6108\u6b32\u72f1\u80b2\u8a89\u6d74\u5bd3\u88d5\u9884\u8c6b\u9a6d\u79ba\u6bd3\u4f1b\u4fe3\u8c00\u8c15\u8438\u84e3\u63c4\u5581\u5704\u5709\u5d5b\u72f3\u996b\u5ebe\u9608\u59aa\u59a4\u7ea1\u745c\u6631\u89ce\u8174\u6b24\u65bc\u715c\u71e0\u807f\u94b0\u9e46\u7610\u7600\u7ab3\u8753\u7afd\u8201\u96e9\u9f89", "yuan": "\u9e33\u6e0a\u51a4\u5143\u57a3\u8881\u539f\u63f4\u8f95\u56ed\u5458\u5706\u733f\u6e90\u7f18\u8fdc\u82d1\u613f\u6028\u9662\u586c\u6c85\u5a9b\u7457\u6a7c\u7230\u7722\u9e22\u8788\u9f0b", "yue": "\u66f0\u7ea6\u8d8a\u8dc3\u94a5\u5cb3\u7ca4\u6708\u60a6\u9605\u9fa0\u6a3e\u5216\u94ba", "yun": "\u8018\u4e91\u90e7\u5300\u9668\u5141\u8fd0\u8574\u915d\u6655\u97f5\u5b55\u90d3\u82b8\u72c1\u607d\u7ead\u6b92\u6600\u6c32", "za": "\u531d\u7838\u6742\u62f6\u5482", "zai": "\u683d\u54c9\u707e\u5bb0\u8f7d\u518d\u5728\u54b1\u5d3d\u753e", "zan": "\u6512\u6682\u8d5e\u74d2\u661d\u7c2a\u7ccc\u8db1\u933e", "zang": "\u8d43\u810f\u846c\u5958\u6215\u81e7", "zao": "\u906d\u7cdf\u51ff\u85fb\u67a3\u65e9\u6fa1\u86a4\u8e81\u566a\u9020\u7682\u7076\u71e5\u5523\u7f2b", "ze": "\u8d23\u62e9\u5219\u6cfd\u4ec4\u8d5c\u5567\u8fee\u6603\u7b2e\u7ba6\u8234", "zei": "\u8d3c", "zen": "\u600e\u8c2e", "zeng": "\u589e\u618e\u66fe\u8d60\u7f2f\u7511\u7f7e\u9503", "zha": "\u624e\u55b3\u6e23\u672d\u8f67\u94e1\u95f8\u7728\u6805\u69a8\u548b\u4e4d\u70b8\u8bc8\u63f8\u5412\u54a4\u54f3\u600d\u781f\u75c4\u86b1\u9f44", "zhai": "\u6458\u658b\u5b85\u7a84\u503a\u5be8\u7826", "zhan": "\u77bb\u6be1\u8a79\u7c98\u6cbe\u76cf\u65a9\u8f97\u5d2d\u5c55\u8638\u6808\u5360\u6218\u7ad9\u6e5b\u7efd\u8c35\u640c\u65c3", "zhang": "\u6a1f\u7ae0\u5f70\u6f33\u5f20\u638c\u6da8\u6756\u4e08\u5e10\u8d26\u4ed7\u80c0\u7634\u969c\u4ec9\u9123\u5e5b\u5d82\u7350\u5adc\u748b\u87d1", "zhao": "\u62db\u662d\u627e\u6cbc\u8d75\u7167\u7f69\u5146\u8087\u53ec\u722a\u8bcf\u68f9\u948a\u7b0a", "zhe": "\u906e\u6298\u54f2\u86f0\u8f99\u8005\u9517\u8517\u8fd9\u6d59\u8c2a\u966c\u67d8\u8f84\u78d4\u9e67\u891a\u8707\u8d6d", "zhen": "\u73cd\u659f\u771f\u7504\u7827\u81fb\u8d1e\u9488\u4fa6\u6795\u75b9\u8bca\u9707\u632f\u9547\u9635\u7f1c\u6862\u699b\u8f78\u8d48\u80d7\u6715\u796f\u755b\u9e29", "zheng": "\u84b8\u6323\u7741\u5f81\u72f0\u4e89\u6014\u6574\u62ef\u6b63\u653f\u5e27\u75c7\u90d1\u8bc1\u8be4\u5ce5\u94b2\u94ee\u7b5d", "zhi": "\u829d\u679d\u652f\u5431\u8718\u77e5\u80a2\u8102\u6c41\u4e4b\u7ec7\u804c\u76f4\u690d\u6b96\u6267\u503c\u4f84\u5740\u6307\u6b62\u8dbe\u53ea\u65e8\u7eb8\u5fd7\u631a\u63b7\u81f3\u81f4\u7f6e\u5e1c\u5cd9\u5236\u667a\u79e9\u7a1a\u8d28\u7099\u75d4\u6ede\u6cbb\u7a92\u536e\u965f\u90c5\u57f4\u82b7\u646d\u5e19\u5fee\u5f58\u54ab\u9a98\u6809\u67b3\u6800\u684e\u8f75\u8f7e\u6534\u8d3d\u81a3\u7949\u7957\u9ef9\u96c9\u9e37\u75e3\u86ed\u7d77\u916f\u8dd6\u8e2c\u8e2f\u8c78\u89ef", "zhong": "\u4e2d\u76c5\u5fe0\u949f\u8877\u7ec8\u79cd\u80bf\u91cd\u4ef2\u4f17\u51a2\u953a\u87bd\u8202\u822f\u8e35", "zhou": "\u821f\u5468\u5dde\u6d32\u8bcc\u7ca5\u8f74\u8098\u5e1a\u5492\u76b1\u5b99\u663c\u9aa4\u5544\u7740\u501c\u8bf9\u836e\u9b3b\u7ea3\u80c4\u78a1\u7c40\u8233\u914e\u9cb7", "zhu": "\u73e0\u682a\u86db\u6731\u732a\u8bf8\u8bdb\u9010\u7af9\u70db\u716e\u62c4\u77a9\u5631\u4e3b\u8457\u67f1\u52a9\u86c0\u8d2e\u94f8\u7b51\u4f4f\u6ce8\u795d\u9a7b\u4f2b\u4f8f\u90be\u82ce\u8331\u6d19\u6e1a\u6f74\u9a7a\u677c\u69e0\u6a65\u70b7\u94e2\u75b0\u7603\u86b0\u7afa\u7bb8\u7fe5\u8e85\u9e88", "zhua": "\u6293", "zhuai": "\u62fd", "zhuan": "\u4e13\u7816\u8f6c\u64b0\u8d5a\u7bc6\u629f\u556d\u989b", "zhuang": "\u6869\u5e84\u88c5\u5986\u649e\u58ee\u72b6\u4e2c", "zhui": "\u690e\u9525\u8ffd\u8d58\u5760\u7f00\u8411\u9a93\u7f12", "zhun": "\u8c06\u51c6", "zhuo": "\u6349\u62d9\u5353\u684c\u7422\u8301\u914c\u707c\u6d4a\u502c\u8bfc\u5ef4\u855e\u64e2\u555c\u6d5e\u6dbf\u6753\u712f\u799a\u65ab", "zi": "\u5179\u54a8\u8d44\u59ff\u6ecb\u6dc4\u5b5c\u7d2b\u4ed4\u7c7d\u6ed3\u5b50\u81ea\u6e0d\u5b57\u8c18\u5d6b\u59ca\u5b73\u7f01\u6893\u8f8e\u8d40\u6063\u7726\u9531\u79ed\u8014\u7b2b\u7ca2\u89dc\u8a3e\u9cbb\u9aed", "zong": "\u9b03\u68d5\u8e2a\u5b97\u7efc\u603b\u7eb5\u8159\u7cbd", "zou": "\u90b9\u8d70\u594f\u63cd\u9139\u9cb0", "zu": "\u79df\u8db3\u5352\u65cf\u7956\u8bc5\u963b\u7ec4\u4fce\u83f9\u5550\u5f82\u9a75\u8e74", "zuan": "\u94bb\u7e82\u6525\u7f35", "zui": "\u5634\u9189\u6700\u7f6a", "zun": "\u5c0a\u9075\u6499\u6a3d\u9cdf", "zuo": "\u6628\u5de6\u4f50\u67de\u505a\u4f5c\u5750\u5ea7\u961d\u963c\u80d9\u795a\u9162", "cou": "\u85ae\u6971\u8f8f\u8160", "nang": "\u652e\u54dd\u56d4\u9995\u66e9", "o": "\u5594", "dia": "\u55f2", "chuai": "\u562c\u81aa\u8e39", "cen": "\u5c91\u6d94", "diu": "\u94e5", "nou": "\u8028", "fou": "\u7f36", "bia": "\u9adf" };

            this.polyphone = { "19969": "DZ", "19975": "WM", "19988": "QJ", "20048": "YL", "20056": "SC", "20060": "NM", "20094": "QG", "20127": "QJ", "20167": "QC", "20193": "YG", "20250": "KH", "20256": "ZC", "20282": "SC", "20285": "QJG", "20291": "TD", "20314": "YD", "20340": "NE", "20375": "TD", "20389": "YJ", "20391": "CZ", "20415": "PB", "20446": "YS", "20447": "SQ", "20504": "TC", "20608": "KG", "20854": "QJ", "20857": "ZC", "20911": "PF", "20504": "TC", "20608": "KG", "20854": "QJ", "20857": "ZC", "20911": "PF", "20985": "AW", "21032": "PB", "21048": "XQ", "21049": "SC", "21089": "YS", "21119": "JC", "21242": "SB", "21273": "SC", "21305": "YP", "21306": "QO", "21330": "ZC", "21333": "SDC", "21345": "QK", "21378": "CA", "21397": "SC", "21414": "XS", "21442": "SC", "21477": "JG", "21480": "TD", "21484": "ZS", "21494": "YX", "21505": "YX", "21512": "HG", "21523": "XH", "21537": "PB", "21542": "PF", "21549": "KH", "21571": "E", "21574": "DA", "21588": "TD", "21589": "O", "21618": "ZC", "21621": "KHA", "21632": "ZJ", "21654": "KG", "21679": "LKG", "21683": "KH", "21710": "A", "21719": "YH", "21734": "WOE", "21769": "A", "21780": "WN", "21804": "XH", "21834": "A", "21899": "ZD", "21903": "RN", "21908": "WO", "21939": "ZC", "21956": "SA", "21964": "YA", "21970": "TD", "22003": "A", "22031": "JG", "22040": "XS", "22060": "ZC", "22066": "ZC", "22079": "MH", "22129": "XJ", "22179": "XA", "22237": "NJ", "22244": "TD", "22280": "JQ", "22300": "YH", "22313": "XW", "22331": "YQ", "22343": "YJ", "22351": "PH", "22395": "DC", "22412": "TD", "22484": "PB", "22500": "PB", "22534": "ZD", "22549": "DH", "22561": "PB", "22612": "TD", "22771": "KQ", "22831": "HB", "22841": "JG", "22855": "QJ", "22865": "XQ", "23013": "ML", "23081": "WM", "23487": "SX", "23558": "QJ", "23561": "YW", "23586": "YW", "23614": "YW", "23615": "SN", "23631": "PB", "23646": "ZS", "23663": "ZT", "23673": "YG", "23762": "TD", "23769": "ZS", "23780": "QJ", "23884": "QK", "24055": "XH", "24113": "DC", "24162": "ZC", "24191": "GA", "24273": "QJ", "24324": "NL", "24377": "TD", "24378": "QJ", "24439": "PF", "24554": "ZS", "24683": "TD", "24694": "WE", "24733": "LK", "24925": "TN", "25094": "ZG", "25100": "XQ", "25103": "XH", "25153": "PB", "25170": "PB", "25179": "KG", "25203": "PB", "25240": "ZS", "25282": "FB", "25303": "NA", "25324": "KG", "25341": "ZY", "25373": "WZ", "25375": "XJ", "25384": "A", "25457": "A", "25528": "SD", "25530": "SC", "25552": "TD", "25774": "ZC", "25874": "ZC", "26044": "YW", "26080": "WM", "26292": "PB", "26333": "PB", "26355": "ZY", "26366": "CZ", "26397": "ZC", "26399": "QJ", "26415": "ZS", "26451": "SB", "26526": "ZC", "26552": "JG", "26561": "TD", "26588": "JG", "26597": "CZ", "26629": "ZS", "26638": "YL", "26646": "XQ", "26653": "KG", "26657": "XJ", "26727": "HG", "26894": "ZC", "26937": "ZS", "26946": "ZC", "26999": "KJ", "27099": "KJ", "27449": "YQ", "27481": "XS", "27542": "ZS", "27663": "ZS", "27748": "TS", "27784": "SC", "27788": "ZD", "27795": "TD", "27812": "O", "27850": "PB", "27852": "MB", "27895": "SL", "27898": "PL", "27973": "QJ", "27981": "KH", "27986": "HX", "27994": "XJ", "28044": "YC", "28065": "WG", "28177": "SM", "28267": "QJ", "28291": "KH", "28337": "ZQ", "28463": "TL", "28548": "DC", "28601": "TD", "28689": "PB", "28805": "JG", "28820": "QG", "28846": "PB", "28952": "TD", "28975": "ZC", "29100": "A", "29325": "QJ", "29575": "SL", "29602": "FB", "30010": "TD", "30044": "CX", "30058": "PF", "30091": "YSP", "30111": "YN", "30229": "XJ", "30427": "SC", "30465": "SX", "30631": "YQ", "30655": "QJ", "30684": "QJG", "30707": "SD", "30729": "XH", "30796": "LG", "30917": "PB", "31074": "NM", "31085": "JZ", "31109": "SC", "31181": "ZC", "31192": "MLB", "31293": "JQ", "31400": "YX", "31584": "YJ", "31896": "ZN", "31909": "ZY", "31995": "XJ", "32321": "PF", "32327": "ZY", "32418": "HG", "32420": "XQ", "32421": "HG", "32438": "LG", "32473": "GJ", "32488": "TD", "32521": "QJ", "32527": "PB", "32562": "ZSQ", "32564": "JZ", "32735": "ZD", "32793": "PB", "33071": "PF", "33098": "XL", "33100": "YA", "33152": "PB", "33261": "CX", "33324": "BP", "33333": "TD", "33406": "YA", "33426": "WM", "33432": "PB", "33445": "JG", "33486": "ZN", "33493": "TS", "33507": "QJ", "33540": "QJ", "33544": "ZC", "33564": "XQ", "33617": "YT", "33632": "QJ", "33636": "XH", "33637": "YX", "33694": "WG", "33705": "PF", "33728": "YW", "33882": "SR", "34067": "WM", "34074": "YW", "34121": "QJ", "34255": "ZC", "34259": "XL", "34425": "JH", "34430": "XH", "34485": "KH", "34503": "YS", "34532": "HG", "34552": "XS", "34558": "YE", "34593": "ZL", "34660": "YQ", "34892": "XH", "34928": "SC", "34999": "QJ", "35048": "PB", "35059": "SC", "35098": "ZC", "35203": "TQ", "35265": "JX", "35299": "JX", "35782": "SZ", "35828": "YS", "35830": "E", "35843": "TD", "35895": "YG", "35977": "MH", "36158": "JG", "36228": "QJ", "36426": "XQ", "36466": "DC", "36710": "JC", "36711": "ZYG", "36767": "PB", "36866": "SK", "36951": "YW", "37034": "YX", "37063": "XH", "37218": "ZC", "37325": "ZC", "38063": "PB", "38079": "TD", "38085": "QY", "38107": "DC", "38116": "TD", "38123": "YD", "38224": "HG", "38241": "XTC", "38271": "ZC", "38415": "YE", "38426": "KH", "38461": "YD", "38463": "AE", "38466": "PB", "38477": "XJ", "38518": "YT", "38551": "WK", "38585": "ZC", "38704": "XS", "38739": "LJ", "38761": "GJ", "38808": "SQ", "39048": "JG", "39049": "XJ", "39052": "HG", "39076": "CZ", "39271": "XT", "39534": "TD", "39552": "TD", "39584": "PB", "39647": "SB", "39730": "LG", "39748": "TPB", "40109": "ZQ", "40479": "ND", "40516": "HG", "40536": "HG", "40583": "QJ", "40765": "YQ", "40784": "QJ", "40840": "YK", "40863": "QJG" };
        },
        // 提取拼音, 返回首字母大写形式
        getFullChars: function (str) {
            if (!str) return '';
            var result = '', name;
            var reg = new RegExp('[a-zA-Z0-9\- ]');
            for (var i = 0, len = str.length; i < len; i++) {
                var ch = str.substr(i, 1), unicode = ch.charCodeAt(0);
                if (unicode > 40869 || unicode < 19968) {
                    result += ch;
                } else {
                    name = this._getFullChar(ch);
                    if (name !== false) {
                        result += name;
                    }
                }
            }
            return result;
        },
        // 提取首字母，返回大写形式
        getCamelChars: function (str) {
            if (typeof (str) !== 'string')
                throw new Error(-1, "函数getFisrt需要字符串类型参数!");
            var chars = []; //保存中间结果的数组
            for (var i = 0, len = str.length; i < len; i++) {
                //获得unicode码
                var ch = str.charAt(i);
                //检查该unicode码是否在处理范围之内,在则返回该码对映汉字的拼音首字母,不在则调用其它函数处理
                chars.push(this._getChar(ch));
            }
            //处理arrResult,返回所有可能的拼音首字母串数组
            return this._getResult(chars);
        },
        // 提取拼音
        _getFullChar: function (str) {
            for (var key in this.full_dict) {
                if (-1 !== this.full_dict[key].indexOf(str)) {
                    return this._capitalize(key);
                }
            }
            return false;
        },
        // 首字母大写
        _capitalize: function (str) {
            if (str.length > 0) {
                var first = str.substr(0, 1).toUpperCase();
                var spare = str.substr(1, str.length);
                return first + spare;
            }
        },
        _getChar: function (ch) {
            var unicode = ch.charCodeAt(0);
            //如果不在汉字处理范围之内,返回原字符,也可以调用自己的处理函数
            if (unicode > 40869 || unicode < 19968)
                return ch; //dealWithOthers(ch);
            //检查是否是多音字,是按多音字处理,不是就直接在strChineseFirstPY字符串中找对应的首字母
            if (!this.options.checkPolyphone)
                return this.char_dict.charAt(unicode - 19968);
            return this.polyphone[unicode] ? this.polyphone[unicode] : this.char_dict.charAt(unicode - 19968);
        },
        _getResult: function (chars) {
            if (!this.options.checkPolyphone)
                return chars.join('');
            var result = [''];
            for (var i = 0, len = chars.length; i < len; i++) {
                var str = chars[i], strlen = str.length;
                if (strlen == 1) {
                    for (var j = 0; j < result.length; j++) {
                        result[k] += str;
                    }
                } else {
                    var swap1 = result.slice(0);
                    result = [];
                    for (var j = 0; j < strlen; j++) {
                        //复制一个相同的arrRslt
                        var swap2 = swap1.slice(0);
                        //把当前字符str[k]添加到每个元素末尾
                        for (var k = 0; k < swap2.length; k++) {
                            swap2[k] += str.charAt(j);
                        }
                        //把复制并修改后的数组连接到arrRslt上
                        result = result.concat(swap2);
                    }
                }
            }
            return result;
        }
    };
    var extend = function (dst, src) {
        for (var property in src) {
            dst[property] = src[property];
        }
        return dst;
    };
    return new Pinyin(arguments);
})();

!function (globals) { var _imports = {}; function padLeft(orig, len) { if (orig.length > len) { return orig } return Array(len - orig.length + 1).join("0") + orig } _imports.bytesToHex = function (bytes) { return bytes.map(function (x) { return padLeft(x.toString(16), 2) }).join("") }; var convertString = { bytesToString: function (bytes) { return bytes.map(function (x) { return String.fromCharCode(x) }).join("") }, stringToBytes: function (str) { return str.split("").map(function (x) { return x.charCodeAt(0) }) } }; convertString.UTF8 = { bytesToString: function (bytes) { return decodeURIComponent(escape(convertString.bytesToString(bytes))) }, stringToBytes: function (str) { return convertString.stringToBytes(unescape(encodeURIComponent(str))) } }; _imports.convertString = convertString; globals.sha256 = sha256; var K = []; !function () { function isPrime(n) { var sqrtN = Math.sqrt(n); for (var factor = 2; factor <= sqrtN; factor++) { if (!(n % factor)) { return false } } return true } function getFractionalBits(n) { return ((n - (n | 0)) * 4294967296) | 0 } var n = 2; var nPrime = 0; while (nPrime < 64) { if (isPrime(n)) { K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3)); nPrime++ } n++ } } (); var bytesToWords = function (bytes) { var words = []; for (var i = 0, b = 0; i < bytes.length; i++ , b += 8) { words[b >>> 5] |= bytes[i] << (24 - b % 32) } return words }; var wordsToBytes = function (words) { var bytes = []; for (var b = 0; b < words.length * 32; b += 8) { bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 255) } return bytes }; var W = []; var processBlock = function (H, M, offset) { var a = H[0], b = H[1], c = H[2], d = H[3]; var e = H[4], f = H[5], g = H[6], h = H[7]; for (var i = 0; i < 64; i++) { if (i < 16) { W[i] = M[offset + i] | 0 } else { var gamma0x = W[i - 15]; var gamma0 = ((gamma0x << 25) | (gamma0x >>> 7)) ^ ((gamma0x << 14) | (gamma0x >>> 18)) ^ (gamma0x >>> 3); var gamma1x = W[i - 2]; var gamma1 = ((gamma1x << 15) | (gamma1x >>> 17)) ^ ((gamma1x << 13) | (gamma1x >>> 19)) ^ (gamma1x >>> 10); W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16] } var ch = (e & f) ^ (~e & g); var maj = (a & b) ^ (a & c) ^ (b & c); var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22)); var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7) | (e >>> 25)); var t1 = h + sigma1 + ch + K[i] + W[i]; var t2 = sigma0 + maj; h = g; g = f; f = e; e = (d + t1) | 0; d = c; c = b; b = a; a = (t1 + t2) | 0 } H[0] = (H[0] + a) | 0; H[1] = (H[1] + b) | 0; H[2] = (H[2] + c) | 0; H[3] = (H[3] + d) | 0; H[4] = (H[4] + e) | 0; H[5] = (H[5] + f) | 0; H[6] = (H[6] + g) | 0; H[7] = (H[7] + h) | 0 }; function sha256(message, options) { if (message.constructor === String) { message = _imports.convertString.UTF8.stringToBytes(message) } var H = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]; var m = bytesToWords(message); var l = message.length * 8; m[l >> 5] |= 128 << (24 - l % 32); m[((l + 64 >> 9) << 4) + 15] = l; for (var i = 0; i < m.length; i += 16) { processBlock(H, m, i) } var digestbytes = wordsToBytes(H); return options && options.asBytes ? digestbytes : options && options.asString ? _imports.convertString.bytesToString(digestbytes) : _imports.bytesToHex(digestbytes) } sha256.x2 = function (message, options) { return sha256(sha256(message, { asBytes: true }), options) } } (window);