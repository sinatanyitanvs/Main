    window.shref = '';    
	window.ws = '', window.usfrom = '', window.windowjs = 0,  window.oss_jsUrl = "http://oss.kxtui.cn", window.scoAppid = 'wx8612690fa5e2924d', window.curidc = jg_aj.sj.idc, window.htps = "http";
    window.lurl = (window.location+'').replace("#rd",'').replace(/;amp;/g,'&');
    window.editor = null, window.formatter = null, window.app, window.editor2 = null, window.formatter2 = null, window.app2 = {};
    window.eg = jg_aj.sj.eg || 0;
	window.ui={'ui':{all:{msgb:{cid:"msgb",ctn:"7|newvs",sx:0,galx:7,w:60,h:54,x:0,y:0,z:-2,s:0,marg:0,ncheck:0,cfun:"j().cls()",ca:"||x_btnclose",class0:"x_noy",class1:"",class2:"",padd:0,cta:"",ccl:"",cret:"html",ftxt:0,checksj:"",idpg:0,cxy:"",op:0}}}}; 
    window.imgp = window.imgp||('css/'); 
if (typeof jQuery == "undefined") {
window.ZQuery = function(arg) {
    this.elements = []; //存东西
    this.domString = ''; //保存字符串标签
    if (typeof arg == 'function') {
        DOMReady(arg);
    }
    else if (typeof arg == 'string' || arg instanceof String) {
        if (arg.indexOf('<') != -1) {
            this.domString = arg;
        }
        else {
            this.elements = getEle(arg);
            this.length = this.elements.length;
        }
    }
    else {
        this.elements.push(arg);
        this.length = this.elements.length;
    }
}
ZQuery.prototype.css = function (name, value) {
    if (arguments.length == 2) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].style[name] = value;
        }
    }
    else {
        if (typeof name == 'string') {
            return getStyle(this.elements[0], name);
        }
        else {
            var json = name;
            for (var name in json) {
                for (var i = 0; i < this.elements.length; i++) {
                    this.elements[i].style[name] = json[name];
                }
            }
        }
    }
};
ZQuery.prototype.attr = function (name, value) {
    if (this.elements.length == 0) {
        return undefined;
    }
    if (arguments.length == 2) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].setAttribute(name, value);
        }
    }
    else {
        if (typeof name == 'string') {
            return this.elements[0].getAttribute(name);
        }
        else {
            var json = name;
            for (var name in json) {
                for (var i = 0; i < this.elements.length; i++) {
                    this.elements[i].setAttribute(name, json[name]);
                }
            }
        }
    }
};
ZQuery.prototype.addClass = function (sClass) {
    var re = new RegExp('\\b' + sClass + '\\b', 'g');
    for (var i = 0; i < this.elements.length; i++) {
        if (this.elements[i].className) {
            if (this.elements[i].className.search(re) == -1) {
                this.elements[i].className += ' ' + sClass;
            }
        }
        else {
            this.elements[i].className = sClass;
        }
        this.elements[i].className = this.elements[i].className.replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ');
    }
    return this;
};
ZQuery.prototype.removeClass = function (sClass) {
    var re = new RegExp('\\b' + sClass + '\\b', 'g');
    for (var i = 0; i < this.elements.length; i++) {
        if (this.elements[i].className) {
            this.elements[i].className = this.elements[i].className.replace(re, '');
            this.elements[i].className = this.elements[i].className.replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ');
            if (this.elements[i].className == '') {
                this.elements[i].removeAttribute('class');
            }
        }
    }
    return this;
};
ZQuery.prototype.html = function (value) {
    if (this.elements.length == 0) {
        return undefined;
    }
    if (value || value == '') {
        //设置
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].innerHTML = value;
        }
    }
    else {
        return this.elements[0].innerHTML;
    }
};
ZQuery.prototype.append = function (value) {
    if (this.elements.length == 0) {
        return undefined;
    }
    if (value) {
        var nodeNames = value.match(/<\w+/);
        if(nodeNames && nodeNames.length > 0){
            var firstNodeName = nodeNames[0].substring(1);
            var firstNode = document.createElement(firstNodeName);
            var firstInfo = value.match(/<.*?>/)[0];                // 第一个节点中的属性信息
            /* TIM_LOGS 如果第一个节点有id属性 */
            var nodeId = firstInfo.match(/id=([' "])(?:(?!\1).)*?\1/);
            if(nodeId && nodeId.length > 0){
                nodeId = jex.trim(nodeId[0].split('=')[1]);
                nodeId = nodeId.replace(/['"]/g,'');
                firstNode.id = nodeId;
            }
            /* TIM_LOGS_END */
            for (var i = 0; i < this.elements.length; i++) {
                this.elements[i].appendChild(firstNode);
            }
            /* TIM_LOGS 如果第一个节点有style属性 */
            var nodeAttr = ['style', 'src', 'width', 'height', 'onclick'];
            for(var fk of nodeAttr){
                var regStr = new RegExp(fk+'=([\' "])(?:(?!\\1).)*?\\1');
                var nodeStyle = firstInfo.match(regStr);
                if(nodeStyle && nodeStyle.length > 0){
                    nodeStyle = jex.trim(nodeStyle[0].split('=')[1]);
                    //nodeStyle = nodeStyle.replace(/['"]/g,'');
                    nodeStyle = nodeStyle.slice(1,-1);
                    jex(firstNode).attr(fk,nodeStyle);
                }
            }
            /* TIM_LOGS_END */
            /* TIM_LOGS 如果append多个节点 */
            var orderNodes = value.match(/(>.*).*(.*<)/);
            if(orderNodes && orderNodes.length > 0){
                orderNodes = jex.trim(orderNodes[0]).slice(1,-1);   //  去掉收尾的 > <
                orderNodes && (firstNode.innerHTML = orderNodes);
            }
            /* TIM_LOGS_END */
        }else{
            this.elements[0].appendChild(document.createTextNode(value));
        }
    }
    else {
        return this.elements[0].innerHTML;
    }
};
ZQuery.prototype.prepend = ZQuery.prototype.append;
// ZQuery.prototype.prepend = function (value) {
//     if (this.elements.length == 0) {
//         return undefined;
//     }
//     if (value || value == '') {
//         for (var i = 0; i < this.elements.length; i++) {
//             this.elements[i].innerHTML = value + this.elements[i].innerHTML;
//         }
//     }
//     else {
//         return this.elements[0].innerHTML;
//     }
// };
ZQuery.prototype.width = function () { return (this.elements[0]||{}).offsetWidth||0; }
ZQuery.prototype.height = function () { return (this.elements[0]||{}).offsetHeight||0; }

ZQuery.prototype.val = function (value) {
    if (this.elements.length == 0) {
        return undefined;
    }
    if (value || value == '') {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].value = value;
        }
    }
    else {
        return this.elements[0].value;
    }
};
ZQuery.prototype.show = function () {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.display = 'block';
    }
    return this;
};
 
ZQuery.prototype.hide = function () {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.display = 'none';
    }
    return this;
};
;
'click mouseover mouseout mousedown mouseup mousemove mouseenter mouseleave change keydown keyup contextmenu'.replace(/\w+/g, function (str) {
    ZQuery.prototype[str] = function (fn) {
        for (var i = 0; i < this.elements.length; i++) {
            addEvent(this.elements[i], str, fn);
        }
    };
});
ZQuery.prototype.get = function (n) {
    for (var i = 0; i < this.elements.length; i++) {
        if (i == n) {
            return this.elements[i];
        }
    }
};
 
ZQuery.prototype.index = function () {
    var aSiblings = this.elements[0].parentNode.children;
    for (var i = 0; i < aSiblings.length; i++) {
        if (aSiblings[i] == this.elements[0]) {
            return i;
        }
    }
};
ZQuery.prototype.hover = function (fn1, fn2) {
    for (var i = 0; i < this.elements.length; i++) {
        jex(this.elements[i]).mouseenter(fn1);
        jex(this.elements[i]).mouseleave(fn2);
    }
};
ZQuery.prototype.toggle = function () {
    var args = arguments;
    var _this = this;
    for (var i = 0; i < this.elements.length; i++) {
        ;
        (function (count) {
            jex(_this.elements[i]).click(function (ev) {
                args[count % args.length].call(this, ev);
                count++;
            });
        })(0);
    }
};
 
 
ZQuery.prototype.remove = function () {
    if (this.elements && this.elements.length > 0) {
        var oParent = this.elements[0].parentNode;
        for (var i = 0; i < this.elements.length; i++) {
            oParent.removeChild(this.elements[i]);
        }
    }
    return this;
};
ZQuery.prototype.scrollLeft = function () {};
ZQuery.prototype.scrollTop = function () {};
} else {
	window.ZQuery = jQuery;
}
window.jex = function(arg) {
	if(typeof jQuery !='undefined' && lurl.indexOf('csse3')>-1){
		 return new jQuery(arg);
	}else{
    	return new ZQuery(arg);
	}
};
  
window.jex.fn = ZQuery.prototype;
window.jex.fn.extend = function (json) {
    for (var name in json) {
        ZQuery.prototype[name] = json[name];
    }
};
window.json2url = function(json) {
    var arr = [];
    for (var name in json) {
        arr.push(name + '=' + encodeURIComponent(json[name]));
    }
    return arr.join('&');
}
  
window.getStyle = function(obj, sName) {
    return (obj.currentStyle || getComputedStyle(obj, false))[sName];
}
window.addEvent =function(obj, sEv, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(sEv, function (ev) {
            var oEvent = ev || event;
            if (fn.call(obj, oEvent) == false) {
                oEvent.cancelBubble = true;
                oEvent.preventDefault && oEvent.preventDefault();
            }
        }, false);
    }
    else {
        obj.attachEvent('on' + sEv, function () {
            var oEvent = ev || event;
            if (fn.call(obj, oEvent) == false) {
                oEvent.cancelBubble = true;
                return false;
            }
        });
    }
}
window.DOMReady = function(fn) {
    if (document.addEventListener) {
        addEvent(document, 'DOMContentLoaded', function () {
            fn && fn();
        });
    }
    else {
        addEvent(document, 'onreadystatechange', function () {
            if (document.readyState == 'complete') {
                fn && fn();
            }
        });
    }
}
window.getByClass = function(oParent, sClass) {
    if (oParent.getElementsByClassName) {
        return oParent.getElementsByClassName(sClass);
    }
    else {
        var aResult = [];
        var aEle = oParent.getElementsByTagName('*');
        var re = new RegExp('\\b' + sClass + '\\b', 'g');
        for (var i = 0; i < aEle.length; i++) {
            if (aEle[i].className.search(re) != -1) {
                aResult.push(aEle[i]);
            }
        }
        return aResult;
    }
}
window.getByStr = function(aParent, str) {
    var aChild = [];
    //遍历父级
    for (var i = 0; i < aParent.length; i++) {
        switch (str.charAt(0)) {
            case '#':
                //#id
                aChild.push(document.getElementById(str.substring(1)));
                break;
            case '.':
                //.class
                var aEle = getByClass(aParent[i], str.substring(1));
                for (var j = 0; j < aEle.length; j++) {
                    aChild.push(aEle[j]);
                }
                break;
            default:
                if (/^\w+\.\w+$/.test(str)) {
                    //筛选
                    //li.on
                    var arr = str.split('.');
                    var re = new RegExp('\\b' + arr[1] + '\\b', 'g');
                    var aEle = aParent[i].getElementsByTagName(arr[0]);
                    for (var j = 0; j < aEle.length; j++) {
                        if (aEle[j].className.search(re) != -1) {
                            aChild.push(aEle[j]);
                        }
                    }
                }
                else if (/^\w+\[\w+\=\w+\]$/.test(str)) {
                    //属性
                    var arr = str.split(/\[|\=|\]/);
                    var aEle = aParent[i].getElementsByTagName(arr[0]);
                    for (var j = 0; j < aEle.length; j++) {
                        if (aEle[j].getAttribute(arr[1]) == arr[2]) {
                            aChild.push(aEle[j]);
                        }
                    }
                }
                else if (/^\w+\:\w+(\(\d+\))?$/.test(str)) {
                    var arr = str.split(/\:|\(|\)/);
                    var aEle = aParent[i].getElementsByTagName(arr[0]);
                    switch (arr[1]) {
                        case 'first':
                            aChild.push(aEle[0]);
                            break;
                        case 'last':
                            aChild.push(aEle[aEle.length - 1]);
                            break;
                        case 'even':
                            for (var j = 0; j < aEle.length; j += 2) {
                                aChild.push(aEle[j]);
                            }
                            break;
                        case 'odd':
                            for (var j = 1; j < aEle.length; j += 2) {
                                aChild.push(aEle[j]);
                            }
                            break;
                        case 'eq':
                            aChild.push(aEle[arr[2]]);
                            break;
                        case 'lt':
                            for (var j = 0; j < arr[2]; j++) {
                                aChild.push(aEle[j]);
                            }
                            break;
                        case 'gt':
                            for (var j = parseInt(arr[2]) + 1; j < aEle.length; j++) {
                                aChild.push(aEle[j]);
                            }
                            break;
                    }
                }
                else {
                    //标签
                    var aEle = aParent[i].getElementsByTagName(str);
                    for (var j = 0; j < aEle.length; j++) {
                        aChild.push(aEle[j]);
                    }
                }
                break;
        }
    }
    return aChild;
}
window.jex.trim = function (value) {
    if (value) {
        return null == value ? "" : (value + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    } else {
        return value;
    }
};
window.jex.each = function(object, callback) {
  var type = (function(){
    switch (object.constructor){
      case Object:
          return 'Object';
          break;
      case Array:
          return 'Array';
          break;
      case NodeList:
          return 'NodeList';
          break;
      default:
          return 'null';
          break;
  }
  })();
  // 为数组或类数组时, 返回: index, value
  if(type === 'Array' || type === 'NodeList'){
    // 由于存在类数组NodeList, 所以不能直接调用every方法
    [].every.call(object, function(v, i){
        return callback.call(v, i, v) === false ? false : true;
    });
  }
  // 为对象格式时,返回:key, value
  else if(type === 'Object'){
    for(var i in object){
        if(callback.call(object[i], i, object[i]) === false){
            break;
        }
    }
  }
}
window.getEle = function(str) {
    var arr = str.replace(/^\s+|\s+$/g, '').split(/\s+/);
    var aParent = [document];
    var aChild = [];
    for (var i = 0; i < arr.length; i++) {
        aChild = getByStr(aParent, arr[i]);
        if (aChild[0] == null) {
            aChild = [];
        }
        //这一次获取到的子级，是下一次获取的父级
        aParent = aChild;
    }
    return aChild;
}
 
window.jqueryex = {
    ifmd: 0,
    cssls: ',',
    white: ['', 'c', 'fff', 'fff', 'a7a7a7', 'fff', 'f2f2f2', '555'],
    brown: ['', 'c', 'a67337', '8a5520', 'fff', '8a5520', '5c3a19', 'fff'],
    gray: ['', 'c', 'fafafa', 'f1f1f1', '2f3e46', 'e1e1e1', 'ccc', '222'],
    yellow: ['', 'c', 'd1d744', 'bbbf39', 'fff', 'dadd50', 'c0c442', 'fff'],
    blue: ['', 'c', '4db5fe', '3c9be2', 'fff', '3795D8', '002F50', 'fff'],
    blue2: ['', 'c', '46cad9', '46cad9', 'fff', '007483', '008696', 'fff'],
    blue3: ['', 'c', 'fff', 'fff', '46cad9', '46cad9', '46cad9', 'fff'],
    black: ['', 'c', '3c3c3c', '111', 'fff', '272727', '585858', 'fff'],
    red: ['', 'c', 'd74444', 'c43a3a', 'fff', 'e25c5c', 'cc4646', 'fff'],
    red2: ['', 'c', 'ff7878', 'ff7878', 'fff', 'ea5c5c', 'ea5c5c', 'fff'],
    rede: ['', 'c', '', '', 'ff7878', 'ff7878', 'ff7878', 'fff'],
    orange: ['', 'c', 'f79f1c', 'D68635', 'fff', 'C4811E', '8D5706', 'fff'],
    orange2: ['', 'c', 'f08a62', 'f08a62', 'fff', 'e85521', 'e85521', 'fff'],
    orange3: ['', 'c', 'c33e02', 'c33e02', 'fff', 'e85521', 'e85521', 'fff'],
    orange4: ['', 'c', 'fff', 'fff', 'FB8C47', 'FB8C47', 'FB8C47', 'fff'],
    green: ['', 'c', '8dd845', '6fbb31', 'fff', 'fb6334', 'A03414', 'fff'],
    pink: ['', 'c', 'd745a4', 'bd368d', 'fff', 'ea6abd', 'bd368d', 'fff'],
    purple: ['', 'c', '9246d7', '8339c2', 'fff', 'a35de6', '7733be', 'fff'],
    empty: ['', 'c', '', '', 'fff', 'fff', 'f2f2f2', '555'],
    emptywx: ['', 'c', '', '', 'fff', '', '', '555']
};

    /**
     * @method ui
     * @description 用于按钮的生成，具体用法参考UI界面
     * @param  {[type]} json     [description]
     * @param  {[type]} noreturn [description]
     * @return {[type]}          [description]
     */
    ZQuery.prototype.ui=function (json, noreturn) {
        var json1 = { "w": 120, "h": 40, "x": 0, "y": 0, "z": -1, "s": 5, "marg": 0, "ncheck": 1, "cfun": "", "class0": "x_c_gray _f_22 cent _r_5__bbb", "cret": "html" };
        if (json.w <= 80 && json.w > 10) {
            if (!json.h) {
                json1.h = 30;
            }
            json1.class0 = "x_c_gray _f_18 cent _r_5__ccc";
        }
        json.cid = json.cid || 'btn' + db.getrd(4);
        ui.ui.all[json.cid] = jex().jcopy(ui.ui.all[json.fid] || json1);
        jex.each(json, function (i, n) {
            ui.ui.all[json.cid][i] = n;
        });
        if (noreturn)
            return;
        return jex('#' + json.cid).geta(ui.ui.all[json.cid]);
    },
    /**
     * @method jcopy
     * @description 复制json数据
     * @param  {[json]} json [description]
     * @return {[json]}      [description]
     */
    ZQuery.prototype.jcopy=function (json) {
        var rjson = {};
        jex.each(json, function (i, n) {
            rjson[i] = n;
        });
        return rjson;
    },
     
    //restyle，样式生成
    /**
     * @method recss
     * @description 动态生成样式，具体百度recss
     * @param  {[type]} cssn [description]
     * @return {[type]}      [description]
     */
    ZQuery.prototype.recss=function (cssn) {
        jex.each(cssn.split(','), function (i, n) {
            jex().recssa(n);
        });
    },
    ZQuery.prototype.recssa=function (cssn) {
        if (jqueryex.cssls.indexOf(',' + cssn + ',') > -1) {
            return;
        }
        jqueryex.cssls += cssn + ',';
        var json = {};
        var cca = cssn.split('_');
        var ifpre = []; //是否要厂商
        var cssyz = '';
        if (cssn.indexOf('x_') == 0)
            cssyz = ',.' + cssn.replace('x_', 'y_') + ',.' + cssn.replace('x_', 'z_');
        var cn = '.' + cssn + cssyz;
        if (cca[1] == 's') {
            var ss = '';
            if (cca[2])
                ss = (cca[4] || '0') + ' ' + (cca[5] || '3px') + ' ' + (cca[6] || '6px') + ' #' + cca[2];
            if (cca[3])
                if (cca[3].indexOf('in') == 0)
                    ss += (ss.length > 0 ? ',' : ' ') + 'inset ' + (cca[4] || '0') + ' ' + (cca[5] || '2px') + ' ' + (cca[6] || '4px') + ' #' + cca[3].substring(2);
            json[cn] = { 'box-shadow': ss };
            if (navig_pre)
                ifpre = [navig_pre];
        }
        else if (cca[1] == 'f') {
            json[cn] = { 'font-size': (cca[2].indexOf('vw') > -1 ? (cca[2].substring(0, cca[2].length - 2) + 'vw') : (cca[2] + 'px')), 'font-weight': cca[3] == 'b' ? 'bold' : 'normal' };
            if (cca[4])
                json[cn]['line-height'] = cca[4].indexOf('p') > 0 ? (cca[4] + 'x') : (cca[4] + '%');
        }
        else if (cca[1] == 'w') {
            json[cn] = { 'display': 'block', 'width': cca[2] + 'px', 'height': cca[3] + 'px' };
        }
        else if (cca[1] == 'sk') {
            json[cn] = { 'transform': 'skew(' + cca[2] + 'deg)' };
            if (navig_pre)
                ifpre = [navig_pre];
        }
        else if (cca[1] == 'ro') {
            json[cn] = { 'transform': 'rotate(' + cca[2] + 'deg)' };
            if (navig_pre)
                ifpre = [navig_pre];
        }
        else if (cca[1] == 'r') {
            json[cn] = {};
            var ss = '';
            if (cca[4]) {
                if (cca[3]) {
                    if (cca[3].indexOf('t') > -1)
                        json[cn]['border-top'] = 'solid #' + cca[4] + ' ' + (cca[5] || '1') + 'px';
                    if (cca[3].indexOf('b') > -1)
                        json[cn]['border-bottom'] = 'solid #' + cca[4] + ' ' + (cca[5] || '1') + 'px';
                    if (cca[3].indexOf('r') > -1)
                        json[cn]['border-right'] = 'solid #' + cca[4] + ' ' + (cca[5] || '1') + 'px';
                    if (cca[3].indexOf('l') > -1)
                        json[cn]['border-left'] = 'solid #' + cca[4] + ' ' + (cca[5] || '1') + 'px';
                }
                else {
                    json[cn]['border'] = 'solid #' + cca[4] + ' ' + (cca[5] || '1') + 'px';
                }
            }
            var rav = cca[2].length > 3 ? (cca[2].substring(0, 2) + '%') : (cca[2] + 'px');
            if (cca[2].indexOf('p') > 0)
                rav = cca[2].replace(/p/g, 'px ');
            if (cca[2])
                json[cn]['border-radius'] = rav;
            /*if(cca[4]){
                json[cn]['border'+ss]='solid #'+cca[4]+' '+(cca[5]||'1')+'px';
            }*/
            if (cssyz != '') {
                json[cssyz.substring(1)] = {};
                if (cca[7]) {
                    if (cca[6].indexOf('t') > -1)
                        json[cssyz.substring(1)]['border-top'] = 'solid #' + cca[7] + ' ' + (cca[5] || '1') + 'px';
                    if (cca[6].indexOf('b') > -1)
                        json[cssyz.substring(1)]['border-bottom'] = 'solid #' + cca[7] + ' ' + (cca[5] || '1') + 'px';
                    if (cca[6].indexOf('r') > -1)
                        json[cssyz.substring(1)]['border-right'] = 'solid #' + cca[7] + ' ' + (cca[5] || '1') + 'px';
                    if (cca[6].indexOf('l') > -1)
                        json[cssyz.substring(1)]['border-left'] = 'solid #' + cca[7] + ' ' + (cca[5] || '1') + 'px';
                }
                else {
                    json[cssyz.substring(1)]['border'] = 'solid #' + cca[7] + ' ' + (cca[5] || '1') + 'px';
                }
            }
            if (navig_pre)
                ifpre = [navig_pre];
        }
        else if (cca[1] == 'b' || cca[1] == 'bl' || cca[1] == 'c') {
            if (cca[1] == 'c')
                cca = jqueryex[cca[2]];
            var qzs = 'linear-gradient(' + (cca[1] == 'bl' ? 'left,' : '');
            var va = [qzs + '#' + cca[2] + ',#' + cca[3] + ')'];
            if (navig_pre)
                va[1] = '-' + navig_pre + '-' + qzs + '#' + cca[2] + ',#' + cca[3] + ')';
            json[cn] = { 'background-color': '#' + cca[3], 'background-image': va, 'color': '#' + cca[4] };
            if (navig_pre == 'ms')
                json[cn] = { 'background-color': '#' + cca[3], 'color': '#' + cca[4] };
            if (cssyz != '') {
                va = [qzs + '#' + cca[5] + ',#' + cca[6] + ')'];
                if (navig_pre)
                    va[1] = '-' + navig_pre + '-' + qzs + '#' + cca[5] + ',#' + cca[6] + ')';
                json[cssyz.substring(1)] = { 'background-color': '#' + cca[6], 'background-image': va, 'color': '#' + cca[7] };
                if (navig_pre == 'ms')
                    json[cssyz.substring(1)] = { 'background-color': '#' + cca[6], 'color': '#' + cca[7] };
            }
        }
        else if (cca[1] == 'd') {
            json[cn] = {};
            json[cn]['animation-iteration-count'] = cca[2] || 'infinite'; //次数 （默认循环）
            json[cn]['animation-duration'] = (cca[3] || '2') + 's'; //周期（默认2s）
            json[cn]['animation-timing-function'] = cca[4] || 'ease'; //贝塞尔曲线（默认ease）
            json[cn]['animation-delay'] = (cca[5] || '0') + 's'; //延时（默认0s）
            if (navig_pre)
                ifpre = [navig_pre];
        }
        if (window.restyle)
            restyle(json, ifpre);
    },
    ZQuery.prototype.getaa=function (strid) {
        var strt = '';
        jex.each(strid.split(','), function (i, n) {
            strt = jex('#' + n).geta(ui.ui.all[n]);
        });
        return strt;
    },
    ZQuery.prototype.geta=function (json) {
        if (!json) {
            return;
        }
        var stra = new Array();
        var ifyh = ''; //是否在参数加引号
        var cid = json.cid;
        if (json.cta) {
            stra = json.csj[json.cta].all;
            ifyh = "'";
        }
        if (json.ca)
            stra = json.ca;
        stra = (typeof (stra) == "string") ? stra.split('`') : stra;
        if (json.ftxt) {
            if (jex(this).children().length == (json.s ? 2 : 1) * stra.length) {
                jex.each(stra, function (i, n) {
                    var na = (typeof (n) == "string") ? n.split('|') : n;
                    jex("#" + cid + "_" + i + "_0").text(na[0]);
                });
                return;
            }
        }
        var tag = json.tag || 'div'; //默认子元素为div
        if (cid.indexOf("td") == 0)
            tag = "td";
        var bg = json.cbg || '';
        var strdivs = "", s1 = "", sleft = "", sright = "";
        var w = json.w || 0;
        var hh = json.h || 0;
        if (w == 0 && cid.indexOf('week') > -1)
            w = Math.max(66, Math.floor(jex(this).width() / 7) - 3);
        if (w != 0)
            if (w < -1) {
                s1 += " width:" + (-w) + "%;";
            }
            else {
                s1 += " width:" + w + "px;";
            }
        if (hh != 0)
            if (hh < -1) {
                s1 += " height:" + (-hh) + "%;";
            }
            else {
                s1 += " height:" + hh + "px;";
            }
        var z = json.z || 0;
        var y = json.y || 0;
        var x = json.x || 0;
        var s = json.s || 0;
        var op = json.op || 1;
        var marg = json.marg || 0;
        var class0 = json.class0 || '';
        var class1 = json.class1 || '';
        var class2 = json.class2 || '';
        if ((class0 + ' ' + class1 + ' ' + class2).indexOf('_') > -1) {
            jex.each((class0 + ' ' + class1 + ' ' + class2).split(' '), function (i, n) {
                jex().recss(n);
            });
        }
        var maxi = -2;
        if (json.maxi != undefined)
            maxi = json.maxi; //不能用|| 考虑 0的情况
        var cxy = json.cxy || '';
        var yclass0 = class0.replace(/x_/gi, "y_");
        var yclass1 = class1.replace(/x_/gi, "y_");
        var yclass2 = class2.replace(/x_/gi, "y_");
        if (z > 0 || z < -2) {
            if (x < 0 && y < 0) {
                s1 += "right:" + (-(x + 1)) + ((x + '').indexOf('%') > 0 ? "" : "px") + ";bottom:" + (y + 1) + ((y + '').indexOf('%') > 0 ? "" : "px") + ";";
            }
            else {
                s1 += "left:" + x + ((x + '').indexOf('%') > 0 ? "" : "px") + ";top:" + y + ((y + '').indexOf('%') > 0 ? "" : "px") + ";";
            }
            s1 += "z-index:" + z + ";position:absolute;";
        }
        else {
            if (z != 0)
                s1 += "float:" + (z == -1 ? "left" : "right") + ";";
            s1 += "position:relative;";
        }
        var padd = json.padd || 0;
        if (padd > 0)
            s1 += "padding:" + padd + "px;";
        if (padd < 0)
            s1 += "margin-right:" + padd + "px;";
        if (marg)
            s1 += "margin:" + marg + "px;";
        if (class1) {
            if (class1.indexOf('topc') > -1) {
                s1 += "padding-top:27px;";
            }
            if (class1.indexOf('top2c') > -1) {
                s1 += "padding-top:23px;";
            }
            if (class1.indexOf('top') == -1) {
                s1 += "padding-left:27px;";
            }
            if (class1.indexOf('_check_radio') > -1) {
                class1 = json.ncheck == 1 ? class1.replace(/_check_radio/, "_radio") : class1.replace(/_check_radio/, "_check");
            }
        }
        //if(class2.indexOf('rightm')>-1){s1+="padding-right:35px;";}
        //if (class1 || class2||marg) {  };
        if (op != 1) {
            s1 += "alpha(opacity = " + 100 * op + ");opacity:" + op + ";";
        }
        ;
        var idx = 0;
        if (json.cret == 'append') {
            idx = this.children('[id^="' + cid + '"]').length;
        }
        var sfunc = json.cfun || '';
        var tgt = '';
        var shref = '';
        if (sfunc.indexOf('[') == 0) {
            if (cid.indexOf("aa") == 0)
                tag = "a"; //根据cid命名判断子元素是否更改
            tgt = sfunc.split(']')[0].substring(1);
            shref = sfunc.split(']')[1];
            if (windowjs || jex().getv('aid', '') != '') { }
            else {
                if (tgt.indexOf("_") != 0)
                    if (document.getElementById(tgt) == null)
                        tgt = "_blank";
                shref = shref.replace('file:\/\/\/sdcard\/.cyt7\/', 'http:\/\/' + window.domain + "\/");
            }
        }
        var sclicktt = "onclick";
        var ifignore = 0; //是否忽略 maxi
        jex.each(stra, function (i, n) {
            if (ifignore == 0) {
                var nclass0 = class0;
                nclass1 = class1;
                nclass2 = class2;
                if (json.checksj) {
                    if (json.checksj.all[i]) {
                        nclass0 = yclass0;
                        nclass1 = yclass1;
                        nclass2 = yclass2;
                    }
                }
                if (class0.indexOf('{') > -1) {
                    fieldn = class0.split('{')[1].split('}')[0];
                    var reg = new RegExp("{" + fieldn + "}", "g");
                    nclass0 = nclass0.replace(reg, n[fieldn]);
                }
                if (nclass0.indexOf('rr') > -1) {
                    if (idx == 0)
                        nclass0 = nclass0.replace(/rr/gi, "r");
                    if (nclass0.indexOf('rr5t') > -1) {
                        if (idx == stra.length - 1)
                            nclass0 = nclass0 + (z == -1 ? " r5tr" : " r5tl");
                    }
                    else {
                        if (idx == stra.length - 1)
                            nclass0 = nclass0 + (z == -1 ? " r5r" : " r5l");
                    }
                }
                if (idx == stra.length - 1)
                    nclass0 = nclass0.replace(/nr/gi, "").replace(/nl/gi, "");
                var s2 = "", sattr = '';
                var na = (typeof (n) == "string") ? n.split('|') : (typeof (n) == "number") ? (i + '[' + n + ']').split('|') : n;
                var ncid = cid + '_' + i;
                var strtemp = '<' + tag + ' id="' + ncid + '" i="' + i + '" ';
                var na0 = (na[0] || na['inhtml'] || '&nbsp;') + '';
                if (na0.indexOf('<bR>') > -1) {
                    strtemp = "<div style='height:" + json.h + "px;padding:" + (padd + 1) + "px;' id=br_" + cid + "_" + idx + ">" + na0 + "</div>";
                }
                else {
                    if (json.cta)
                        sattr += " t='" + json.cta + "' ";
                    if (json.ccl)
                        sattr += " en='" + json.ccl + "' ";
                    if (na.length > 1 || json.cfun) {
                       
                            sattr += " onmouseover=\"jex(this).ccss(this," + x + ",'" + bg + "')\"";
                        
                        na1 = na[1] || '';
                        //if(oper==1)na1=na[1]+"["+code.vsrole[na[2]]+"]"||''; 
                        if (sfunc || na1) {
                            if (sfunc.indexOf('[') == 0) {
                                sshref = shref + (na.length > 1 ? na[1] : (ifyh + i + ifyh)); //4.5 调测苹果的时候，把"'"+i+"'"改成""+i+""
                                if ((windowjs || jex().getv('aid', '') != '') && lurl.indexOf('http:') != 0) {
                                    sattr += " " + sclicktt + "=\"if(jex().funmd('" + ncid + "')){jqueryex.ifmd='" + ncid + "';window.js.httpurl('" + tgt + "','" + sshref + "');_setTimeout('jqueryex.ifmd=0',500)}\"";
                                }
                                else {
                                    sattr += ' target="' + tgt + '" href="' + sshref + '"';
                                }
                            }
                            if ((na1 + '').indexOf('(') > 0 || sfunc.indexOf('(') > 0)
                                sattr += " " + sclicktt + "=\"if(jex().funmd('" + ncid + "')){jex(this).mdown(event,this," + json.ncheck + ");" + ((na1 + '').indexOf('(') > 0 ? na1 : '') + ";" + (sfunc.indexOf('[') == 0 ? "" : sfunc) + "}\" ";
                            
                        }
                        s2 += "cursor:pointer;";
                    }
                    else {
                        s2 += 'cursor:default;';
                    }
                    if (na.length > 2 && na[2] != '') {
                        if (json.class1 && nclass0.indexOf(' 2 ') == -1) {
                            nclass1 = nclass1 + " " + na[2];
                        }
                        else {
                            nclass0 = nclass0 + " " + na[2];
                        }
                    }
                    var na3 = '';
                    if (na.length > 3) {
                        na3 = na[3];
                    }
                    //添加背景图片
                    if (na.length > 4) {
                        s2 += " background-image:url(" + na[4] + ");";
                    }
                    if (bg.indexOf('-') > 0) {
                        na0 = grid.rb(cid, i, bg, json.h, na0, class0);
                    }
                    if (bg.indexOf('x/') == 0) {
                        s2 += " background-image:url(" + bg + imgext + ");";
                    }
                    if (class0.indexOf('numimg') > -1) {
                        na0 = jex().getnum(na0);
                    }
                    if (json.w || json.h) {
                        na0 = '<span id=' + cid + '_' + i + '_0 class=b style="overflow:hidden;white-space: nowrap;' + (json.h > 700 ? 'height:100%;' : '') + '">' + na0 + '</span>';
                    }
                    else {
                        na0 = '<span id=' + cid + '_' + i + '_0>' + na0 + '</span>';
                    }
                    if (json.class1) {
                        sleft = '<span id=' + cid + '_' + i + '_1 class=" ' + (nclass1.indexOf('ic_') == -1 ? 'x_ic ' : '') + nclass1 + '" ></span>';
                    }
                    if (json.class2) {
                        sright = '<span style="line-height:100%;' + (json.class2.indexOf('topl') > -1 ? "" : "padding:2px;") + '" class="' + nclass2 + '" id=' + cid + '_' + i + '_2>' + na3 + '</span>';
                    }
                    strtemp += ' class="' + nclass0 + '" style="overflow:visible;' + s1 + s2 + '" ' + sattr + ' >' + sleft + na0 + sright + "</" + tag + ">";
                }
                strdivs += strtemp;
                if (s > 0) {
                    if (z == -1 || z == -2) {
                        strdivs += '<div style="width:' + json.s + 'px;' + (json.h > 0 ? "height:" + json.h + "px;" : "") + ' float:' + (z == -1 ? "left" : "right") + '" id=s_' + cid + '_' + i + '>&nbsp;</div>';
                    }
                    if (z == 0) {
                        strdivs += '<div style="height:' + json.s + 'px;' + (json.w > 0 ? "width:" + json.w + "px;" : "") + '" id=s_' + cid + '_' + i + '></div>';
                    }
                }
                idx = idx + 1;
            }
            if (maxi != -2) {
                if (maxi == i)
                    ifignore = 1;
            }
        });
        if (jex(this).length > 0) {
            if (json.cret == 'html')
                if (this.html() != strdivs)
                    this.html(strdivs);
            if (json.cret == 'append')
                this.append(strdivs);
            if (cxy.indexOf("x") == 0 || cxy.indexOf("y") == 0)
                jex(this).drags(cxy); //预先初始化确保cfun中的this有效
            jex(this).attr('n', idx);
        }
        return strdivs;
    },
    ZQuery.prototype.funmd=function (did) {
        if (jqueryex.ifmd == did || jqueryex.ifmd == 'msgb_0')
            return 0;
        return 1;
    },
    ZQuery.prototype.cls=function (clas) {
        clas = clas || 'mishu';
        //_setTimeout(function(){
        //jex('#mishudiv,#msgdiv,#guide'+clas).fadeOut(100,function(){
        jex('#mishudiv,#msgdiv,#guide' + clas).hide();
        _setTimeout(function () {
            jex('#divzhezao,#divzhezao1,#divzhezao2,#divzhezao3,#divdianwo').hide();
        }, 100);
        //});
        //},400);
    },
 
    /**
     * @method inpstyle
     * @description 自定义input，textarea输入框样式
     * @param  {[json]} json  对样式的设置等json传参包含宽w，高h，背景图路径img，输入框默认提示tip，输入框id，父元素conid，字颜色col，表单类别type
     * @example
     * <br>日期时间：jex().inpstyle({type:"datetime-local",w:276,h:55,tip:jex().getdatetime(db.gett(),null,1).replace(" ","T"),id:"movedate",col:"#fff",clas:"_r_1__9b2d86_2 fleft _f_22",img:"/css/opa.png"});<br>输入框：inpstyle({w:460,h:52,tip:jg_gettxt(4),id:"moven",img:jg_getpng(11),col:"#C28D0B"})<br>编辑框：inpstyle({type:"textarea",w:460,h:90,tip:jg_gettxt(7),id:"movecjj",col:"#fff"})
     */
    ZQuery.prototype.inpstyle=function (json) {
        var cjson = json || {};
        var sw = cjson.w || 100;
        var sh = cjson.h || 36;
        var simg = cjson.img || "";
        var stip = cjson.tip || "";
        var sid = cjson.id || "";
        var conid = cjson.conid || "";
        var col = cjson.col || "#000";
        var type = cjson.type || "text";
        var clas = cjson.clas || "";
        var clasinp = cjson.clasinp || "";
        var evnt = cjson.evnt || "if(jex(this).val()==\'" + stip + "\'){jex(this).val(\'\')}";
        var evnt1 = cjson.evnt1 || "";
        var evnt2 = cjson.evnt2 || "";
        var evnt3 = cjson.evnt3 || "";
        var cproperty = cjson.cproperty || "";
        var str = '<div class="' + clas + '" style="width:' + sw + 'px;height:' + sh + 'px;' + (simg != "" ? "background-image:url(" + simg + ");" : "") + 'background-size: contain;"><' + (type == "textarea" ? type : "input") + ' id="' + sid + '" class="' + clasinp + '" type="' + type + '" ' + cproperty + ' onfocus="' + evnt + '" onchange="' + evnt1 + '" onblur="' + evnt2 + '" onkeyup="' + evnt3 + '" style="width:' + (sw * .95) + 'px;height:' + (sh * .9) + 'px;font-size: 16px;font-weight: bold;' + ((simg == "" && clas == "") ? "" : "background:transparent;border: none;-webkit-border: none;outline: none;") + 'color:' + col + '" value="' + stip + '"' + (type == "textarea" ? ">" + stip + "</textarea>" : " />") + '</div>';
        if (conid != "") {
            jex("#" + conid).html(str);
        }
        else {
            return str;
        }
    },
    
    ZQuery.prototype.jalert=function (msg, ifzz, json, xx, yy) {
        json = json || {};
        msg = msg.replace(/erxxror/gi, '出错了');
        if (T && T.findObj(json.tobj || (jg_aj.sj.idc.split('_')[0] + '_弹窗'))) {
            json.msg = msg;
            json.menb = ifzz;
            json.tobj = jg_aj.sj.idc.split('_')[0] + '_弹窗';
            window.actt(json.tobj,{ "弹窗":{msg:json.msg}});
            return;
        }
        var msgid = json.msgid || '';
        var ifgb = json.ifgb || 1;
        var ifms = json.ifms || 1;
        var clas = json.clas || ('ggk');
        var titl = json.titl || '';
        var alerw = json.alerw || '433px';
        var alerh = json.alerh || '100%';
        var bdcol = json.bdcol || '#6B6B6B';
        var embg = json.embg || 'url(/css/opa11.png)';
        var ifclick = json.ifclick || 0; //参数传入ifclick，用于强制改变弹出框关闭按钮事件为onclick
        var strgb = "";
        var sfd = jex().cookie.get('bzxs' + msgid);
        if (sfd == '1')
            return;
        var x = xx || (jex().getsl() + (jex().getcw() - (clas == 'mishu' ? 407 : (clas == 'blackclas' ? 470 : 461))) * 0.5);
        if (xx == 0)
            x = xx;
        var y = yy || (jex().getst() + (jex().getch() - 173) * 0.5);
        if (jex(this).length > 0) {
           // jex().zhezao(jex(this).attr('id'));
            x = jex(this).mtx() + jex(this).width() - 130;
            y = jex(this).mty() + jex(this).height() - 130;
            if (y > 420)
                y = jex(this).mty() - 360;
            if (x > 100)
                x = 100;
        }
        if (ifzz)
            jex().zhezao('1');
        if (ifgb == 1) {
            ui.ui.all['msgb'].cfun = "jex().stoppp();jex().cls('" + clas + "');";
            if (json.gbfun)
                ui.ui.all['msgb'].cfun += json.gbfun;
            strgb = '<div style="width:3px;' + ((clas != "mishu") ? "margin-top:-22px" : "margin-top:-35px") + ';overflow:visible">' + jex().ui({ ca: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||x_btnclose" + clas, ccl: "", cfun: ui.ui.all['msgb'].cfun, checksj: "", cid: "msgb", class0: "x_noy", ftxt: 0, h: 54, w: 60, z: -2, cxy: (ifclick == 1 ? "-2" : "") }) + '</div>'; //jex().geta(ui.ui.all['msgb'])
        }
        var did = 'msgdiv';
        if (clas != 'mishu')
            did = 'msgdiv_' + clas;
        var fons = json.fons || 'yaheif wei18';
        var titlcol = json.titlcol || '#000';
        if (clas == 'ggk')
            fons = 'f22 cent';
        if (clas == 'ui3b') {
            fons = 'f22 cent';
            titlcol = '#ff7878';
        }
        if (document.getElementById("msg_" + clas)) {
            document.getElementById("msg_" + clas).innerHTML = msg;
            document.getElementById("guide" + clas).style.display = '';
            return;
        }
        if (clas == 'emp') {
            msg = '<div id="' + did + '" style="width:' + alerw + ';height:' + alerh + ';background:' + embg + ';border:4px solid ' + bdcol + ';-webkit-border:4px solid ' + bdcol + ';border-radius:10px;-webkit-border-radius:10px;color:' + titlcol + ';padding:41px 10px 20px;position:relative;background-size: cover;">' + (ifgb == 1 ? "<div class='cent' style='position:absolute;top:0px;right:8px;width:60px;height:50px;cursor: pointer;font-weight: bold;color:#FF5454;font-size: 35px;' onclick=jex().cls('emp')>ㄨ</div>" : "") + '<div style="font-size:20px;margin-top:-27px;" class="cent">' + titl + '</div><div id="msg_' + clas + '" style="min-width: 240px;" class="cent">' + msg + '</div></div>';
        }
        else {
            msg = '<div id=' + did + ' style="position:absolute; line-height:20%"><table width="' + (navig.ie ? '480px' : '100%') + '" border="0" cellspacing="0" cellpadding="0"><tr><td style="background:#ffffff;line-height: 140%;border-radius: 5px;border: 2px solid #ddd;box-sizing: border-box;" ><div class="cent yaheif _f_20" style="color:' + titlcol + '">' + titl + '</div><div id=msg_' + clas + ' style="min-width: 240px;" class="' + fons + ' ">' + msg + '</div></td><td  width=4px valign=top>' + strgb + '</td></tr></table></div>';
        }
        var yjh = 33;
        var z = 99999;
        //if(clas!='mishu'&&clas!='ggk'&&clas!='emp')z=99998;
        jex().getdiv('guide' + clas, null, '', 407, 0, x, y, z, msg, '', 0);
        if (json.jobj)
            json.jobj.appendTo("#msg_" + clas);
    },
    ZQuery.prototype.vali=function (lt) {
        lt = lt || 'left';
        var pw = jex(this).parent().width() * 0.5;
        if (lt == 'top') {
            pw = jex(this).parent().height() * 0.5;
        }
        var ixy = jex(this).position()[lt];
        var marg = ui.ui.all[jex(this).attr('id')].marg;
        if (ixy > pw && ixy < 2 * pw)
            return -1;
        var jsobj = jex(this).children('[id^="' + jex(this).attr('id') + '"]');
        var jg = jsobj.length;
        jsobj.each(function (i, n) {
            var dtemp = jex(this).position()[lt];
            var sw = jex(this).outerWidth();
            if (lt == 'top') {
                sw = jex(this).outerHeight();
            }
            if (Math.round(pw * 2 / sw) % 2 == 0) {
                if ((dtemp + ixy <= pw + sw * 0.5 + marg))
                    jg = i;
            }
            else {
                if ((dtemp + ixy <= pw))
                    jg = i;
            }
        });
        return jg;
    },
    ZQuery.prototype.stoppp=function (e) {
        var evt = e || window.event;
        if (evt)
            evt.stopPropagation ? evt.stopPropagation() : (evt.cancelBubble = true);
    },
    ZQuery.prototype.ccss=function (obj, cx, bg) {
        var classno = obj.className, bg = bg || '';
        if (classno.indexOf('-noz') > -1) {
            return;
        }
        if (classno.indexOf('x_') > -1) {
            obj.className = obj.className.replace(/x_/gi, "z_");
            var jobjs = jex(obj).children();
            jobjs.each(function () {
                this.className = this.className.replace(/x_/gi, "z_");
            });
            obj.onmouseout = function () {
                if (this.className.indexOf('y_') == -1)
                    this.className = this.className.replace(/z_/gi, "x_");
                jobjs.each(function () {
                    if (this.className.indexOf('y_') == -1)
                        this.className = this.className.replace(/z_/gi, "x_");
                });
            };
        }
    },
 
    ZQuery.prototype.jgrepa=function (fn, fv, ret, fn2, fv2, fn3, fv3, fn4, fv4) {
        //json josn过滤，返回字符串数组值
        return this.jgrep(fn, fv, ret, fn2, fv2, fn3, fv3, fn4, fv4).split(',');
    },
    ZQuery.prototype.topr=function (n) {
        var rn = 0;
        var retn = this[0];
        if (this[0].sx) {
            if (this[0].sx[n] == 0) {
                retn = this[0]['d'] || {};
            }
            else {
                retn = this[0][this[0].sx[n]];
            }
        }
        else {
            j.each(this[0], function (iii, nnn) {
                if (rn == n) {
                    retn = nnn;
                }
                rn++;
            });
        }
        return retn;
    },
    ZQuery.prototype.jsortj= function (sk, st) {
        var arrJson = new Array();
        j.each(this[0], function (k, v) {
            arrJson.push(v);
            if (v['id'] == undefined)
                v['id'] = k;
        });
        function AscSort(n1, n2) {
            return n1[sk] == n2[sk] ? 0 : (n1[sk] > n2[sk] ? 1 : -1);
        }
        ;
        function DescSort(n1, n2) {
            return n1[sk] == n2[sk] ? 0 : (n1[sk] > n2[sk] ? -1 : 1);
        }
        ;
        if (st == 0) {
            arrJson = arrJson.sort(AscSort);
        }
        else {
            arrJson = arrJson.sort(DescSort);
        }
        var sxArr = [];
        for (var i = 0; i < arrJson.length; i++) {
            sxArr.push(arrJson[i].id);
        }
        this[0].sx = sxArr;
    },
    ZQuery.prototype.jsort= function (sk, st) {
        function AscSort(n1, n2) {
            return n1[sk] == n2[sk] ? 0 : (n1[sk] > n2[sk] ? 1 : -1);
        }
        ;
        function DescSort(n1, n2) {
            return n1[sk] == n2[sk] ? 0 : (n1[sk] > n2[sk] ? -1 : 1);
        }
        ;
        if (st == 0) {
            return this.sort(AscSort);
        }
        else {
            return this.sort(DescSort);
        }
    },
    ZQuery.prototype.jjoin=function (ja, jb) {
        var retjson = {};
        jex.each(ja, function (iii, nnn) {
            retjson[iii] = nnn;
        });
        j.each(jb, function (iii, nnn) {
            retjson[iii] = nnn;
        });
        retjson['sx'] = ja.sx.concat(jb.sx);
        return retjson;
    },
    ZQuery.prototype.ifequ=function (njson, fn, fv) {
        if (njson[fn] == fv) {
            if (njson[fn] === "" && fv == 0) {
                return 0;
            }
            else {
                return 1;
            }
        }
        fv = (fv + '');
        if (fv.indexOf('>') == 0 || fv.indexOf('<') == 0 || fv.indexOf('!') == 0) {
			var str22=(njson[fn] + '' + fv);
            if (window.ifeval? eval(str22): T.doeval(str22)) {
                return 1;
            }
            else {
                return 0;
            }
        }
        if (fn == fv)
            return 1;
        return 0;
    },
     
    ZQuery.prototype.jgrep= function (fn, fv, ret, fn2, fv2, fn3, fv3, fn4, fv4) {
        //json josn过滤 返回过滤后的json
        var str = "";
        renumb = 0;
        var retjson = {};
        j.each(this[0], function (iii, nnn) {
            var f2 = 1;
            var f3 = 1;
            var f4 = 1;
            if (fn2)
                if (jex().ifequ(nnn, fn2, fv2) == 0)
                    f2 = 0;
            if (fn3)
                if (jex().ifequ(nnn, fn3, fv3) == 0)
                    f3 = 0;
            if (fn4)
                if (jex().ifequ(nnn, fn4, fv4) == 0)
                    f4 = 0;
            if (jex().ifequ(nnn, fn, fv) && f2 && f3 && f4) {
                if (ret) {
                    if (ret == 'json0') {
                        retjson = nnn;
                        return false;
                    }
                    else if (ret == 'json') {
                        retjson[iii] = nnn;
                        if (retjson['sx'] == null)
                            retjson['sx'] = [];
                        retjson['sx'].push(iii);
                        //str+=','+iii;
                    }
                    else {
                        if (typeof (nnn[ret]) == 'number') {
                            renumb = renumb + nnn[ret];
                        }
                        str += ',' + nnn[ret];
                    }
                }
                else {
                    str += ',' + iii;
                }
            }
        });
        if (ret == 'json' || ret == 'json0') {
            //if(str)retjson['sx']=str.substring(1).split(',');
            return retjson;
        }
        return renumb + str;
    },
 
    ZQuery.prototype.ifcheck= function () {
        //div按钮是否已选择
        if (this.attr('class').indexOf('y_') > -1)
            return 1;
        return 0;
    },
    ZQuery.prototype.mdown= function (e, obj, ncheck) {
        jqueryex.ifmd = jex(obj).attr('id');
        _setTimeout(function () {jqueryex.ifmd=0;}, 500);
        var classno = obj.className;
        this.blur();
        ncheck = ncheck || (classno.indexOf('radio') > -1 ? 1 : 99);
        if (ncheck == -1)
            return;
        if (jex(obj).attr('menuqx') == 'no') {
            alert('您无权使用本功能！');
            return;
        }
        if (jex().mye(e).button == 2) {
            document.oncontextmenu = function () { return false; };
            if (obj.title == '')
                return;
        }
        var cobjid = this.parent().children('[class*="y_"]').vale('id');
        if (ncheck == 1 || ncheck == -2) {
            if (cobjid != '')
                jex('#' + cobjid).uncheckd();
            this.checkd();
        }
        if (ncheck == -2) {
            _setTimeout(function () {
                var cobjid = jex(obj).parent().children('[class*="y_"]').vale('id');
                jex('#' + cobjid).uncheckd();
            }, 500);
        }
        if (ncheck > 1) {
            if (obj.className.indexOf('y_') > -1) {
                this.uncheckd();
            }
            else {
                if (cobjid.split(',').length >= ncheck) {
                    jex().jalert('最多只能选择' + ncheck + '个！');
                    return;
                }
                this.checkd();
            }
        }
    },
 
    ZQuery.prototype.uncheckd= function () {
        //div按钮取消选择
        if (this.attr('class'))
            this.attr('class', this.attr('class').replace(/y_/gi, "x_").replace(/z_/gi, "x_"));
        this.find("[class*='_']").each(function () {
            this.className = this.className.replace(/y_/gi, "x_").replace(/z_/gi, "x_");
        });
    },
 
   ZQuery.prototype.checkd= function () {
        //div按钮选择
        var oclass = this.attr('class');
        if (oclass) {
            if (oclass.indexOf('_noy') > -1) {
                this.attr('class', this.attr('class').replace(/x_/gi, "z_"));
                this.attr('class', this.attr('class').replace("x_noy", "y_noy").replace("z_noy", "y_noy"));
                this.find("[class*='_']").each(function () {
                    this.className = this.className.replace("x_noy", "y_noy").replace("z_noy", "y_noy").replace(/x_/gi, "z_");
                });
            }
            else {
                this.attr('class', this.attr('class').replace(/z_/gi, "y_").replace(/x_/gi, "y_"));
                this.find("[class*='_']").each(function () {
                    this.className = this.className.replace(/z_/gi, "y_").replace(/x_/gi, "y_");
                });
            }
        }
    },
    ZQuery.prototype.week= function (s, bn, rn, cid) {
        var dat0 = dat = new Date(db.gett());
        if (s) {
            dat = new Date(parseFloat(s));
        }
        else {
            s = dat.getTime();
        }
        var bd = dat;
        if (bn) {
            bd = new Date((parseFloat(s) + bn * 7 * 24 * 3600 * 1000));
        }
        else {
            bd = new Date((parseFloat(s) - (dat.getDate() + 7) * 24 * 3600 * 1000));
        }
        var day = bd.getDay();
        var bs = 0, es = 0;
        var cajson = {};
        var sf = -1;
        for (var r = 1; r < rn; r++) {
            for (var i = 0; i < 7; i++) {
                var news = bd.getTime() - (day - i - 7 * r) * 24 * 3600 * 1000;
                var cd = new Date(news);
                var strd = cd.getFullYear() + '-' + (cd.getMonth() + 1) + '-' + cd.getDate();
                //if(jex('[i="'+strd+'"]').length==0){
                if (es == 0)
                    bs = news - 24 * 3600 * 1000;
                es = news + 24 * 3600 * 1000;
                strc = "";
                if (cd.getFullYear() == dat.getFullYear() && cd.getMonth() == dat.getMonth()) {
                    if (cd.getDate() == dat.getDate()) {
                        strc = "hd hdlk hdtbx";
                    }
                    else {
                        strc = "hdtbx";
                    }
                    sf = 0;
                }
                else {
                    if (sf == 0)
                        sf = 1;
                    strc = 'hdtb';
                }
                var na0 = cd.getDate();
                //if(na0==1)na0=(cd.getMonth()+1)+'月'+na0;
                cajson[strd] = [na0, 'jex(this).dclk(\'' + news + '\',\'' + cid + '\',' + rn + ',' + sf + ')', strc];
                //}
            }
        }
        if (es != 0)
            jex('#' + cid).attr('bs', bs).attr('es', es);
        return cajson;
    },
    ZQuery.prototype.dclk= function (s, cid, rn, sf) {
        ui.ui.all[cid].ca = jex('#').week(s, null, rn, cid);
        var dat = new Date(parseFloat(s));
        var sdat = dat.getFullYear() + '-' + (dat.getMonth() + 1) + '-';
        var firstd = jex('#' + cid).children()[0];
        var curm = parseInt(jex('#' + cid).attr('month'));
        if (curm != dat.getMonth() + 1) {
            jex('#' + cid).children('.x_yellow,.z_yellow').removeClass('x_yellow').removeClass('z_yellow');
        }
        var mfd = 0;
        if (sf != -1)
            mfd = jex('[i="' + sdat + '1"]').offset().top - jex(firstd).offset().top - jex(firstd).height();
        if (sf == 0) {
            if (curm != dat.getMonth() + 1)
                jex('#' + cid).children('[i^="' + sdat + '"]').addClass('x_yellow');
            jex("#" + cid).animate({ 'top': -mfd }, 400);
        }
        else {
            jex('#' + cid).children('[i^="' + sdat + '"]').addClass('x_yellow');
        }
        if (sf == -1) {
            jex('#' + cid).prepend(jex('#' + cid).geta(ui.ui.all[cid]));
            jex("#" + cid).css({ 'top': -jex(firstd).offset().top });
            jex("#" + cid).animate({ 'top': 0 }, 400, function () {
            });
        }
        if (sf == 1) {
            jex('#' + cid).append(jex('#' + cid).geta(ui.ui.all[cid]));
            jex("#" + cid).animate({ 'top': -mfd }, 400, function () {
            });
        }
        jex('#' + cid).attr('month', (dat.getMonth() + 1));
        this.checkd();
    },
 
    ZQuery.prototype.fix= function (p) {
        if (this.length != 1)
            return false;
        /*
        p=json参数说明
     
        r：右边距（窗口右边距，不写为靠左浮动）
        l：左边距（距离父级对象的左边距） "r"和"l"只能有其中一个参数
        t：上边距（默认贴着底边，0是贴着顶边）
        f：1表示固定（不写或者0表示滚动）
        */
        var d = document, dd = d.documentElement, db = d.body, w = window, o = jex(this).get(0), ie6 = /msie 6/i.test(navigator.userAgent), style, timer;
        if (o) {
            cssPub = ";position:fixed;" + (p.t != undefined ? 'top:' + p.t + 'px;' : 'bottom:0;');
            if (p.r != undefined && p.l == undefined) {
                o.style.cssText += cssPub + ('right:' + p.r + 'px;');
                if (o.style.left != null)
                    o.style.left = null;
            }
            else {
                o.style.cssText += cssPub + ('left:' + p.l + 'px;');
            }
        }
    },
    ZQuery.prototype.showa= function () {
        jex(this).css('width', '240px').show();
        if (document.getElementById('ltd3') == null)
            return;
        var wt = 26;
        if (document.getElementById('ltd1').style.display != 'none')
            wt += 240;
        if (document.getElementById('ltd2').style.display != 'none')
            wt += 240;
        if (document.getElementById('ltd3').style.display != 'none') {
            wt += 280;
            if (tk.cityxn > 2)
                wt += 220;
        }
        jex('#rtable').css({ 'width': wt + 'px' });
        jex('#rtable').fix({ r: 0, t: 49, f: 1 });
        //jex(this).animate({width:'220px'},300).show();
    },
    ZQuery.prototype.hidea= function () {
        var wt = 26;
        jex(this).css({ width: '0px' }).hide();
        jex('#rtable').css({ 'width': wt + 'px' });
        jex('#rtable').fix({ r: 0, t: 49, f: 1 });
    },
 
    ZQuery.prototype.vale= function (attrn, c, sep) {
        if (this.length == 0)
            return '';
        if (this.length > 1) {
            var se = '';
            var sen = 0;
            this.each(function () {
                if (attrn) {
                    if (c) {
                        sen += parseFloat(jex(this).attr(attrn));
                    }
                    else {
                        if (jex(this).attr(attrn))
                            se += (sep || ',') + (jex(this).attr(attrn));
                    }
                }
                else {
                    se += (sep || ',') + jex(this).vale();
                    if (c) {
                        sen += parseFloat(jex(this).vale());
                    }
                }
            });
            if (c)
                return sen;
            return se.substring(1);
        }
        else {
            var rets = '';
            if (attrn) {
                return this.attr(attrn);
            }
            else if (this.attr('contenteditable')) {
                rets = this.html();
            }
            else if (this.val() || this.is('input') || this.is('textarea')) {
                var d = this.val();
                if (this.attr('v')) {
                    d = this.attr('v');
                }
                rets = (d);
            }
            else {
                rets = this.html();
            }
            ;
            return jex.trim(rets);
        }
    },
    ZQuery.prototype.mtsetid= function () {
        if (jex(this).attr('id') == '') {
            var tid = 'mt' + (Math.random() * 99999999 + '').split('.')[0];
            jex(this).attr('id', tid);
        }
        return jex(this).attr('id');
    },
 
    ZQuery.prototype.mtx= function () {
        return jex(this).offset().left;
    },
 
   ZQuery.prototype.mty= function () {
        return jex(this).offset().top;
    },
 
   ZQuery.prototype.mtxr= function () {
        return jex(this).offset().left + jex(this).outerWidth();
    },
 
    ZQuery.prototype.mtyb= function () {
        return jex(this).offset().top + jex(this).outerHeight();
    },
    ZQuery.prototype.heightsum= function () {
        var w = 0;
        jex(this).children().each(function () {
            w += jex(this).outerHeight();
        });
        return w;
    },
    ZQuery.prototype.widthsum= function () {
        var w = 0;
        jex(this).children().each(function () {
            w += jex(this).outerWidth();
        });
        return w;
    },
    ZQuery.prototype.delev= function (strv, strd) {
        var s = "";
        j.each(strv.split("，"), function (i, n) {
            if (n != strd)
                s += "，" + n;
        });
        if (s != '')
            s = s.substring(1);
        return s;
    },
    /**
     * @method getv
     * @description 获得浏览器URL地址的参数值
     * @param  {[string]} name   参数名
     * @param  {[obj]} mrz    默认值
     * @param  {[string]} source 地址源，默认当前URL
     * @return {[string]}        返回参数值
     * @example
     * var i=jex().getv('idcm',-1);
     * if(i!=-1)alert('ddd')
     *
     */
    ZQuery.prototype.getv= function (name, mrz, source) {
		let sjquery=jg_aj.sj.query
		if(sjquery && typeof sjquery =='object'){sjquery = JSON.stringify(window.jg_aj.sj.query).replace(/,/g, "&").replace(/:/g, "=").replace(/"/g, "").replace(/{/g, "").replace(/}/g, "");}
          var shref = source ||sjquery|| (window.location + "").replace(/;amp;/g, '&');
		  shref = shref.replace(/&amp;/gi, '&');
		  if (shref.indexOf('#') > 0) {
			  var shrefa = shref.split('#');
			  if (shrefa[1].indexOf('=') == -1)
				  shref = shrefa[0];
			  if (shref.indexOf('#rd') > 0)
				  shref = shref.replace(/#rd/g, "&");
		  }
		  var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
		  var ifurlval = 0;
		  if (reg.test(shref)) {
			  var ress = RegExp.$2;
			  if (ress != "" && ress != "null" && ress != 'undefined') {
				  ifurlval = 1;
				  mrz = RegExp.$2;
			  }
		  }
		  if (ifurlval == 0 && jg_aj.sj[name] != undefined)
			  mrz = jg_aj.sj[name];
			  
		  if (name != 'uri' && ifurlval == 0 && jex().getv('uri', '') != '') {
			  var str =  jex().getv('uri').replace(/\%3A/g, ':').replace(/\%2C/g, ',').replace(/\%27/g, "'");
			  if(str.substring(0,1)!="{")str='{' +str+ '}'
			  var  post_data= eval('(' +str + ')');  //T.doeval 无法做，因为换没有加载
			  post_data[name] != undefined && (mrz = post_data[name]);
		  }
		  //var pathname=location.pathname;
		  //if(name=='idc' || name=='eg')pathname=location.pathname.match(/^\/[^\/]+$/g)[0].substring(1);

		  if ((mrz + '').indexOf('%') > -1)
			  mrz = decodeURI(mrz);
		  return mrz;
    },
    ZQuery.prototype.getas= function (n, uictn) {
        ui.ui.all[uictn].ca = '';
        for (var i = 0; i < n; i++) {
            ui.ui.all[uictn].ca += (i > 0 ? '`||' : '||');
        }
        return jex().geta(ui.ui.all[uictn]);
    },
    ZQuery.prototype.getnum= function (n, marg1, marg2) {
        var cmarg1 = marg1 || 18;
        var cmarg2 = marg2 || -5;
        var cnum = n + "";
        var strt = '';
        for (var i = 0; i < cnum.length; i++) {
            var nums = cnum.charAt(i);
            strt += ('<span class="num num' + nums + ' fleft" style="margin-left:' + (i > 0 ? cmarg2 : (cnum.length == 2 ? 0 : cmarg1)) + 'px;"></span>');
        }
        return strt;
    },
    /**
     * @method getUrl
     * @description 添加或者替换URL参数，有修改无添加
     * @param  {[type]} refername 参数名
     * @param  {[type]} v         值
     * @param  {[type]} source    源地址
     * @return {[type]}           修改后的URL地址
     * @example
     * var shlink=jex().getUrl('tidus',db.idus,lurl);
     */
    ZQuery.prototype.getUrl= function (refername, v, source) {
        var shref = window.location + '';
        //if($('divmain'))if(jex('#divmain').attr('surl')!='')shref=jex('#divmain').attr('surl');
        if (source)
            shref = source;
        if (refername.indexOf("||") > 0) {
            refernamea = refername.split("||");
            shref = refernamea[0];
            refername = refernamea[1];
        }
        var myArray = refername.split(",");
        var vArray = (v + '').split(",");
        if (myArray.length == 1) {
            vArray[0] = v;
        }
        jex.each(myArray, function (i, n) {
            var bc = shref.indexOf(n + "=");
            if (bc > 0) {
                band = shref.indexOf("&", bc);
                shref = shref.substring(0, bc) + n + "=" + vArray[i] + (band > 0 ? shref.substring(band, shref.length) : "");
            }
            else {
                var jh = '';
                if (shref.indexOf('#') > -1) {
                    var shrefa = shref.split('#');
                    shref = shrefa[0];
                    jh = '#' + shrefa[1];
                }
                shref += (shref.indexOf("?") > -1 ? "&" : "?") + n + "=" + vArray[i] + jh;
            }
        });
        return shref;
    },
    /**
     * @method getcw
     * @description 获得当前浏览器的宽度
     * @return {[type]} [description]
     * @example
     * var cw=jex().getcw()
     */
    ZQuery.prototype.getcw=function () {
        var rv = document.documentElement.clientWidth;
        //if(jex("canvas").length>0)rv=Math.max(jex("canvas").width(),rv); 
        return rv;
    },
    /**
     * @method getcwd
     * @description 获得当前的宽度,适应PC及手机
     * @return {[type]} [description]
     * @example
     * var str='<div style="width:'+jex().getcwd+'px;><canvas id="gameCanvas" width="480" height="'+jex().getch()+'"></canvas></div>';
     */
    ZQuery.prototype.getcwd= function () {
        var rv = Math.min(540, jex().getcw());
        /*if(jex().isMobile()){
            rv=jex().getcw();
        }*/
        return rv;
    },

    /**
     * @method getSM
     * @description 返回各种引擎的缩放模式
     * @param {[number]} [typ] 1 cocos 2 egret
     * @return {[type]} [description]
     * @example
     * //egret
     * context.stage.scaleMode=jex().getSM(2)
     * //cocos
     * cc.view.setDesignResolutionSize(540, 900, jex().getSM(1));
     */
    ZQuery.prototype.getSM= function (typ) {
        var w = jex().getcwd();
        if (jex().isMobile() || w < 540) {
            if (typ == 1) {
                return cc.ResolutionPolicy.FIXED_HEIGHT;
            }
            else if (typ == 2) {
                return egret.StageScaleMode.SHOW_ALL;
            }
        }
        else {
            if (typ == 1) {
                return cc.ResolutionPolicy.FIXED_HEIGHT;
            }
            else if (typ == 2) {
                return egret.StageScaleMode.SHOW_ALL;
            }
        }
    },
    /**
     * @method getch
     * @description 获得当前浏览器的高度
     * @return {[type]} [description]
     * @example
     * var cw=jex().getch()
     */
    ZQuery.prototype.getch= function () { return document.documentElement.clientHeight; },
    ZQuery.prototype.getsl= function () { return jex(document).scrollLeft(); },
    ZQuery.prototype.getst= function () { return jex(document).scrollTop(); },
    ZQuery.prototype.strzm= 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    ZQuery.prototype.eachs= function (func) {
        var id = jex(this).attr('id');
        if (func != undefined)
            jex(this).children('[id^="' + id + '_"]').each(func);
        return jex(this).children('[id^="' + id + '_"]');
    },
    ZQuery.prototype.son= function () {
        var id = jex(this).attr('id');
        return jex(this).children('[id^="' + id + '_"]');
    },
    ZQuery.prototype.sson= function () {
        var id = jex(this).attr('id');
        return jex(this).children('[id^="s_' + id + '_"]');
    },
    ZQuery.prototype.son0= function () {
        var id = jex(this).attr('id');
        return jex(this).son().children('[id^="' + id + '_"][id$="_0"]');
    },
    ZQuery.prototype.son1= function () {
        var id = jex(this).attr('id');
        return jex(this).son().children('[id^="' + id + '_"][id$="_1"]');
    },
    ZQuery.prototype.son2= function () {
        var id = jex(this).attr('id');
        return jex(this).son().children('[id^="' + id + '_"][id$="_2"]');
    },
    ZQuery.prototype.chdate= function (sdate) {
        var newsdate = sdate.replace(/-0/gi, '-');
        var da1 = newsdate.split(/[-\s:]/);
        if (da1.length > 3) {
            if (da1.length > 5) {
                return new Date(da1[0], parseInt(da1[1]) - 1, da1[2], da1[3], da1[4], da1[5]);
            }
            else {
                return new Date(da1[0], parseInt(da1[1]) - 1, da1[2], da1[3], da1[4], "00");
            }
        }
        else {
            return new Date(da1[0], parseInt(da1[1]) - 1, da1[2], "00", "00", "00");
        }
    },
    ZQuery.prototype.datedel= function (sdate, s) {
        var dat = new Date(Date.parse(jex().chdate(sdate)) - s * 1000);
        return dat.getFullYear() + '-' + (dat.getMonth() + 1) + '-' + dat.getDate();
    },
    /**
     * 获得剩余时长
     * @param  {[int]} sec  剩余时间多少秒
     * @param  {[int]} op   默认是0，或者不传；大于0返回xx时xx分xx秒
     * @return {[string]}   返回换算后的时间
     */
    ZQuery.prototype.getshenyu= function (sec, op) {
        var sec = Math.floor(sec);
        var op = op || 0;
        if (op == 0) {
            if (sec > 60 && sec < 3600)
                return Math.floor(sec / 60) + '分' + (sec % 60) + '秒';
            if (sec > 3600 && sec < 3600 * 24)
                return Math.floor(sec / 3600) + '小时' + Math.floor((sec % 3600) / 60) + '分';
            if (sec > 3600 * 24)
                return Math.floor(sec / (24 * 3600)) + '天' + Math.floor((sec % (24 * 3600)) / 3600) + '小时';
            return sec + '秒';
        }
        if (op > 0) {
            return Math.floor((sec) / 3600) + '小时' + Math.floor((sec % 3600) / 60) + '分' + Math.floor(sec % 60) + '秒';
        }
    },
    ZQuery.prototype.setRightBar= function (condiv, json) {
        var barJson = { 1: { code: "0", url: "http:\/\/shang.qq.com/wpa/qunwpa?idkey=907dbc3457cd88c4555c8d1aa9197a1819f78bc2a4b8221a39a7f23e8b023b76", pic1: "/css/kx01.jpg", pic2: "/css/kxx01.jpg", func: "", id: "sidebar1" }, 2: { code: "1", url: "", pic1: "/css/kx02.jpg", pic2: "/css/kxx02.jpg", func: "", id: "sidebar2" }, 3: { code: "0", url: "http:\/\/tieba.baidu.com/f?kw=%E5%BC%80%E5%BF%83%E6%8E%A8&qq-pf-to=pcqq.c2c", pic1: "/css/kx03.jpg", pic2: "/css/kxx03.jpg", func: "", id: "sidebar3" }, 4: { code: "0", url: "", pic1: "/css/kx04.jpg", pic2: "/css/kxx04.jpg", func: "jex('html,body').animate({scrollTop:0},600);", id: "sidebar4" } };
        if (typeof (json) != "undefined") {
            barJson = json;
        }
        var barStr = "<ul style='margin:0;padding:0;'>";
        j.each(barJson, function (k, n) {
            if (n.code == "1") {
                barStr += '<li class="sideBarli"><a style="height: 49px;float: right;display: block;min-width: 47px;max-width: 131px;" target="_blank" class="weixin" ' + (n.url.length > 0 ? 'href="' + n.url + '"' : '') + ' ' + (typeof (n.func) != "undefined" ? ('onclick=' + n.func) : '') + '><img id="' + n.id + '_1" width="47" height="49" class="b" style="float:right;"><img id="' + n.id + '_2" width="145" height="240" class="h" style="float: right; display: none;"></a></li>';
            }
            else {
                barStr += '<li class="sideBarli"><a style="height: 49px;float: right;display: block;min-width: 47px;max-width: 131px;" target="_blank" ' + (n.url.length > 0 ? 'href="' + n.url + '"' : '') + ' ' + (typeof (n.func) != "undefined" ? ('onclick=' + n.func) : '') + '><img id="' + n.id + '_1" width="131" height="49" class="h" style="margin-right: -143px; float: right; display: none;"><img id="' + n.id + '_2" width="47" height="49" class="b" style="float: right; display: block;"></a></li>';
            }
        });
        barStr += "</ul>";
        jex("#" + condiv).html(barStr);
        jex("#" + condiv + " a").hover(function () {
            if (jex(this).prop("className") == "weixin") {
                jex(this).children("img.h").show();
            }
            else {
                jex(this).children("img.h").show();
                jex(this).children("img.b").hide();
                jex(this).children("img.h").animate({ marginRight: '0px' }, 'slow');
            }
        }, function () {
            if (jex(this).prop("className") == "weixin") {
                jex(this).children("img.h").hide('slow');
            }
            else {
                jex(this).children("img.h").animate({ marginRight: '-143px' }, 'slow', function () { jex(this).hide(); jex(this).next("img.b").show(); });
            }
        });
    },
    ZQuery.prototype.setRightService= function () {
        var curtime = db.gett();
        var today = curtime - (curtime % 86400000);
        var is911 = ((today + 36000000) < curtime && (today + 54000000) > curtime) ? 1 : 0;
        var serviceStr = '<div id="serviceBox" class="service-box" style="font-size: 14px; width: 180px;position: fixed;top: 50%;margin-top: -270px; right: -180px;z-index: 214748364643;transition:right 1s;-webkit-transition: right 1s; text-align: center;background: #fff;box-shadow: inset 0px 0px 4px #999;box-sizing: border-box;padding:20px 20px;">' +
            '<div id="btnService" class="btn-consult" style="cursor: pointer; width: 40px;height: 120px;background: #fff;box-sizing: border-box;box-shadow: inset 0px 0px 2px #999 ;color: #f39800;position: absolute;left: -40px;top:0;">' +
            '<p style="font-size:14px;line-height:20px; text-align: center;width: 20px;margin: 6px 0 0 10px;">在线咨询</p>' +
            '<i class="arrow-left" style="position: absolute;left: 15px;bottom: 10px;width:0; height:0; border-top:8px solid transparent;border-bottom:8px solid transparent; border-right:8px solid #f39800;"></i>' +
            '</div>' +
            '<div id="btnService2" class="btn-consult" style="cursor: pointer; width: 40px;height: 120px;background: #fff;box-sizing: border-box;box-shadow: inset 0px 0px 2px #999 ;color: #f39800;position: absolute;left: -40px;top:130px;">' +
            '<p style="font-size:14px;line-height:19px; text-align: center;width: 20px;margin: 2px 0 0 10px;">付费定制服务</p>' +
            '</div>' +
            '<div id="detail1" class="h1"><img src="/g/www/img/ico-dh.png"><br>' +
            '<p style="font-size:14px;background: #fff;color: #f39800;line-height: 30px;height: 30px;margin: 3px 0;">&nbsp;' + (is911 ? "18818804183" : "020-28133830") + '&nbsp;</p><br>' +
            '<p style="font-size:14px;color: #f39800;margin: 3px 0;">09:00~23:00</p><br>' +
            '<p style="font-size:14px;background: #fff;color: #f39800;line-height: 30px;height: 30px;margin: 3px 0;">QQ：1452668373</p>' +
            '<p style="font-size:14px;background: #fff;color: #f39800;line-height: 30px;height: 30px;margin: 3px 0;">QQ：568427768</p>' +
            '<br>' +
            '<a style="font-size:14px;display: inline-block;width: 100%;height: 30px;line-height: 30px;background: #f39800;color: #fff;margin-top: 10px;" class="btn-service" target="_blank" href="http:\/\/jingyan.baidu.com\/article\/63f2362820e7120208ab3de7.html?qq-pf-to=pcqq.c2c">制作教程</a>' +
            '<div class="serviceCode"></div></div>' +
            '<div id="detail2"  class="h1"><img src="/g/www/img/ico-dh.png"><br>' +
            '<p style="font-size:14px;background: #fff;color: #f39800;line-height: 30px;height: 30px;margin: 3px 0;">' + (is911 ? "18818804183" : "020-28133830") + '</p><br>' +
            '<p style="margin-top: 10px;"><img src="/g/www/img/ico-qq.png"></p>' +
            '<p style="font-size:14px;background: #fff;color: #f39800;line-height: 30px;margin: 3px 0;">QQ：1452668373<br>QQ：568427768<br>QQ：2778940123<br></p>' +
            '</div>' +
            '</div>';
        jex("body").append(serviceStr);
        jex("#btnService").click(function () {
            if (jex("#serviceBox").css("right") == "0px" && jex("#detail1").css("display") != "none") {
                jex("#serviceBox").css("right", "-180px");
            }
            else {
                jex("#serviceBox").css("right", "0px");
                jex("#detail1").show();
                jex("#detail2").hide();
            }
        });
        jex("#btnService2").click(function () {
            if (jex("#serviceBox").css("right") == "0px" && jex("#detail2").css("display") != "none") {
                jex("#serviceBox").css("right", "-180px");
            }
            else {
                jex("#serviceBox").css("right", "0px");
                jex("#detail2").show();
                jex("#detail1").hide();
            }
        });
    },
 
    ZQuery.prototype.gettimestamp= function (dt) {
        var dt = dt || jex().getdatetime();
        if (dt.indexOf("T", "") > -1)
            dt = dt.replace("T", " ");
        return new Date(dt).getTime();
    },
 
    ZQuery.prototype.getdatetime= function (s, msf, ifz) {
        //时间 获得当前日期，字符串
        var dta = new Date();
        if (s) {
            if ((s + '').length < 9)
                s = dta.getTime() + s * 1000;
            s = parseInt(s);
            dta = new Date(s);
        }
        var sss = '';
        if (msf)
            sss = ':' + dta.getSeconds();
        if (ifz) {
            return dta.getFullYear() + '-' + (dta.getMonth() + 1) + '-' + dta.getDate() + ' ' + dta.getHours() + ':' + dta.getMinutes() + sss;
        }
        var month = dta.getMonth() + 1 < 10 ? "0" + (dta.getMonth() + 1) : dta.getMonth() + 1;
        var currentDate = dta.getDate() < 10 ? "0" + dta.getDate() : dta.getDate();
        var currentHours = dta.getHours() < 10 ? "0" + dta.getHours() : dta.getHours();
        var currentMinutes = dta.getMinutes() < 10 ? "0" + dta.getMinutes() : dta.getMinutes();
        if (msf)
            sss = ':' + (dta.getSeconds() < 10 ? "0" + dta.getSeconds() : dta.getSeconds());
        return dta.getFullYear() + "-" + month + "-" + currentDate + ' ' + currentHours + ':' + currentMinutes + sss;
    },
 
    ZQuery.prototype.getDayOfWeek= function (dt) {
        var dt = dt || db.gett();
        return new Date(dt).getDay();
    },
 
    ZQuery.prototype.getWeekStartDate= function (dt) {
        var dt = dt || db.gett();
        var dta = new Date(dt);
        if (dta.getDay() == 0) {
            return new Date(dta.getFullYear(), dta.getMonth(), (dta.getDate() - 7 - dta.getDay())).getTime() + 24 * 60 * 60 * 1000;
        }
        else {
            return new Date(dta.getFullYear(), dta.getMonth(), (dta.getDate() - dta.getDay())).getTime() + 24 * 60 * 60 * 1000;
        }
    },
 
    ZQuery.prototype.getMonthStartDate= function (dt) {
        var dt = dt || db.gett();
        var dta = new Date(dt);
        return new Date(dta.getFullYear(), dta.getMonth(), 1).getTime();
    },
 
    ZQuery.prototype.getMonthEndDate= function (dt) {
        var dt = dt || db.gett();
        var dta = new Date(dt);
        return new Date(dta.getFullYear(), dta.getMonth() + 1, 1).getTime() - 24 * 60 * 60 * 1000;
    },
 
    ZQuery.prototype.getWeekEndDate= function (dt) {
        var dt = dt || db.gett();
        var dta = new Date(dt);
        if (dta.getDay() == 0) {
            return new Date(dta.getFullYear(), dta.getMonth(), (dta.getDate() - dta.getDay())).getTime() + 24 * 60 * 60 * 1000;
        }
        else {
            return new Date(dta.getFullYear(), dta.getMonth(), (dta.getDate() + 7 - dta.getDay())).getTime() + 24 * 60 * 60 * 1000;
        }
    },
 
    ZQuery.prototype.getdatetimeago= function (ts, isdayd) {
        //时间  获得过去多少时间
        var nts = db.gett();
        var dfts = nts - ts;
        if (dfts < 0)
            return "";
        var ye = dfts / (86400000 * 30 * 12);
        var mc = dfts / (86400000 * 30);
        var wc = dfts / (86400000 * 7);
        var dc = dfts / 86400000;
        var hc = dfts / 3600000;
        var mic = dfts / 60000;
        var result = "";
        if (isdayd) {
            if (ye >= 3) {
                result = parseInt(ye) + "周岁";
                var v = dfts % (86400000 * 30 * 12) / (86400000 * 30);
                if (v > 1) {
                    result += parseInt(v) + "个月";
                }
            }
            else if (mc > 1) {
                result = parseInt(mc) + "个月";
                var v = dfts % (86400000 * 30) / (86400000);
                if (v > 10) {
                    result += parseInt(v) + "天";
                }
                else {
                    result += "零" + parseInt(v) + "天";
                }
            }
            else {
                if (dc >= 1) {
                    result = "出生" + parseInt(dc) + "天";
                }
                else {
                    result = "0天";
                }
            }
        }
        else {
            if (mc >= 1) {
                result = parseInt(mc) + "个月前";
            }
            else if (wc >= 1) {
                result = parseInt(wc) + "周前";
            }
            else if (dc >= 1) {
                result = parseInt(dc) + "天前";
            }
            else if (hc >= 1) {
                result = parseInt(hc) + "小时前";
            }
            else if (mic >= 1) {
                result = parseInt(mic) + "分钟前";
            }
            else {
                result = "刚刚";
            }
        }
        return result;
    },
    ZQuery.prototype.mye= function (e) { return e ? e : (window.event ? window.event : null); },
    ZQuery.prototype.e$= function (e) { return mye(e).srcElement ? mye(e).srcElement : mye(e).target; },
    ZQuery.prototype.getex= function (e) { return mye(e).clientX + getsl(); },
    ZQuery.prototype.getey= function (e) { return mye(e).clientY + getst(); },
    ZQuery.prototype.getiframe= function (id, src, h) {
        //生成一个ifram
        h = h || '648px';
        //alert(src);
        return '<iframe id=' + id + ' name=' + id + '  src="' + src + '" scrolling="no" frameborder="0" marginheight="0" marginwidth="0" style="width:100%; height:' + h + '" ></iframe>';
    },
    ZQuery.prototype.getdiv= function (divid, p, bg, w, h, xx, yy, z, innerh, classn, pad) {
        var newdiv;
        if (document.getElementById(divid)) {
            newdiv = document.getElementById(divid);
        }
        else {
            newdiv = document.createElement("div");
            newdiv.id = divid;
            if (p == null)
                document.body.appendChild(newdiv);
        }
        if (p != null) {
            if (newdiv.parentNode != p)
                p.appendChild(newdiv);
        }
        var ns = (newdiv.style);
        if (w == 0 && h == 0) {
            ns.overflow = 'visible';
        }
        else {
            if (w < 0) {
                w = -w;
                ns.overflow = 'hidden';
            }
            if (w > 0)
                ns.width = w + 'px';
            if (h > 0)
                ns.height = h + 'px';
        }
        ns.position = 'absolute';
        if (xx != -1)
            ns.left = xx + 'px';
        if (yy != -1)
            ns.top = yy + 'px';
        if (ns.zIndex != z)
            ns.zIndex = z;
        if (pad > 0)
            ns.paddingTop = ns.paddingLeft = pad + 'px';
        if (newdiv.innerHTML != innerh && innerh != 'keep')
            newdiv.innerHTML = innerh;
        if (ns.display == 'none')
            ns.display = 'block';
        if (classn)
            newdiv.className = classn;
        bg = bg + '';
        if (bg != "") {
            if (bg.substring(0, 1) == "#") {
                ns.background = bg;
            }
            else {
                if (bg.substring(0, 1) != '_' && bg.substring(0, 1) != '-') {
                    ns.backgroundImage = 'url(' + imgp + bg + ')';
                }
                else {
                    ns.backgroundImage = 'url(' + imgp + '_' + bg.substring(1) + '.gif)';
                    newdiv.onmouseover = function () {
                        if (ns.backgroundImage.indexOf('-') == -1)
                            ns.backgroundImage = 'url(' + imgp + bg.substring(1) + '.png)';
                        this.onmouseout = function () {
                            if (ns.backgroundImage.indexOf('-') == -1)
                                ns.backgroundImage = 'url(' + imgp + '_' + bg.substring(1) + '.png)';
                        };
                        if (bg.substring(0, 1) == '-') {
                            this.onmouseup = function () {
                                ns.backgroundImage = 'url(' + imgp + (ns.backgroundImage.indexOf('-') > 0 ? '_' : '-') + bg.substring(1) + '.png)';
                            };
                        }
                    };
                }
            }
        }
        return newdiv;
    },
    ZQuery.prototype.zhezao= function (objid) {
        //生成遮罩层
        var w = Math.max(jex().getcw(), jex(document).width()) - 3;
        var h = Math.max(jex().getch(), jex(document).height());
        var jobj = jex('#' + objid);
        if (jobj.length > 0) {
            var skw = jobj.outerWidth();
            skh = jobj.outerHeight();
            skx = jobj.mtx();
            sky = jobj.mty();
            if (skx < 0 || sky < 0)
                return;
            if (skx == 0)
                skx = 1;
            jex().getdiv('divzhezao', null, '', w, sky, 0, 0, 99990, '', 'opa11', 0);
            jex().getdiv('divzhezao1', null, '', Math.max(1, w - skx - skw), skh, skx + skw, sky, 99990, '', 'opa11', 0);
            jex().getdiv('divzhezao2', null, '', w, Math.max(1, h - sky - skh), 0, sky + skh, 99990, '', 'opa11', 0);
            jex().getdiv('divzhezao3', null, '', skx, skh, 0, sky, 99990, '', 'opa11', 0);
            jex().getdiv('skdiv0', null, '#f00', skw, 3, skx, sky, 99990, '', 'opa11', 0);
            jex().getdiv('skdiv2', null, '#f00', skw, 3, skx, sky + skh - 3, 99990, '', 'opa11', 0);
            jex('#divzhezao1').css('border-left', '#f00 2px solid');
            jex('#divzhezao3').css('border-right', '#f00 2px solid');
        }
        else {
            if (objid == '1')
                jex().getdiv('divzhezao', null, '', w, h, 0, 0, 99995, '', 'opa11', 0, '');
        }
    },
    /**
     * @method unselect
     * @description 禁止DIV或者页面不能选择
     * @param  {[string]} tg div的ID如果不传表示禁止整个document选择
     * @return {[type]}    [description]
     * @example
     * jex().unselect();
     */
    ZQuery.prototype.unselect= function (tg) {
        //禁卡页面选择事件
        if (tg) {
            jex("#" + tg).bind("contextmenu", function () { return false; });
            jex("#" + tg).bind("selectstart", function () { return false; });
        }
        else {
            jex(document).bind("contextmenu", function () { return false; });
            jex(document).bind("selectstart", function () { return false; });
        }
    },
    /*操作系统判断*/
    ZQuery.prototype._agent= navigator.userAgent.toLowerCase(),
    ZQuery.prototype.isTizen= function () {
        return this._agent.indexOf("tizen") >= 0;
    },
 
    ZQuery.prototype.isWindowsMobile= function () {
        return this._agent.indexOf("windows") >= 0 && this._agent.indexOf("mobile") >= 0 || this._agent.indexOf("iemobile") >= 0;
    },
 
    ZQuery.prototype.isIOS= function () {
        return this._agent.indexOf("ios") >= 0 || this._agent.indexOf("ipod") >= 0 || this._agent.indexOf("ipad") >= 0 || this._agent.indexOf("iphone") >= 0;
    },
    ZQuery.prototype.isIPAD= function () {
        return this._agent.indexOf("ipad") >= 0;
    },
 
    ZQuery.prototype.isFirefoxOS= function () {
        return !this.isAndroid() && this._agent.indexOf("firefox") >= 0 && this._agent.indexOf("mobile") >= 0;
    },
 
    ZQuery.prototype.isAndroid= function () {
        return this._agent.indexOf("android") >= 0;
    },
 
    ZQuery.prototype.isMobile= function () {
        return this.isAndroid() || this.isFirefoxOS() || this.isWindowsMobile() || this.isIOS();
    },
    ZQuery.prototype.isWeixin= function () {
        return (this._agent.match(/MicroMessenger/i) == "micromessenger" ? true : false);
    },
 
    ZQuery.prototype.isCardNo= function (code) {
 
        var city = [11, 12, 13, 14, 15, 21, 22, 23, 31, 32, 33, 34, 35, 36, 37, 41, 42, 43, 44, 45, 46, 50, 51, 52, 53, 54, 61, 62, 63, 64, 65, 71, 81, 82, 91];
        var tip = "";
        var pass = true;
        if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
            pass = false;
        }
        else if (!city.indexOf(code.substr(0, 2))) {
            pass = false;
        }
        else {
            if (code.length == 18) {
                code = code.split('');
                var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
                var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
                var sum = 0;
                var ai = 0;
                var wi = 0;
                for (var i = 0; i < 17; i++) {
                    ai = code[i];
                    wi = factor[i];
                    sum += ai * wi;
                }
                var last = parity[sum % 11];
                if (parity[sum % 11] != code[17]) {
                    pass = false;
                }
            }
        }
        return pass;
    },
    //判断text参数是否是手机格式
    //返回值为0，则不是手机格式
    //返回值为1，则是移动手机号码
    //返回值为2，则是联通手机号码
    //返回值为3，则是电信手机号码
    ZQuery.prototype.IsMobileNum= function (text) {
        var _emp = /^\s*|\s*$/g;
        var text = text || "";
        text = text.replace(_emp, "");
        var _d = /^1(3[3])|(8[019])\d{8}$/;
        var _l = /^1(3[0-2]|5[56]|8[56]|4[5]|7[6]|6[6])\d{8}$/;
        var _y = /^1(3[4-9]|5[012789]|8[23478]|4[7]|7[8])\d{8}$/;
        if (_d.test(text)) {
            return 3;
        }
        else if (_l.test(text)) {
            return 2;
        }
        else if (_y.test(text)) {
            return 1;
        }
        if (text.length == 11) {
            //加入判断 
            if (text.indexOf("153") == 0 || text.indexOf("177") == 0)
                return 3;
        }
        return 0;
    },
    /**
     * @method isCardNo
     * @description 检测手机号码等的归属地及运营商类别
     * @param  json
     * @param  json.ctel 电话号码
     * @param  json.func 回调
     * @param  json.op 0无须进行匹配检测，1根据内容进行判断
     * @param  json.lx 0,不判断结果，1检测是否为移动，2检测联通，3检测是否为电信号码，默认0
     * @param  json.cma 需匹配的区域名，默认为空，不检测，"广东" "北京" "广东市"，省（直辖市）为两个字，如果是省下级市，直接输入三个字，“广州市”
     * @return json 返回数据，{result:1,lx:0,data:{}}  返回数据，result:表示检测结果（符合条件或者不符合,-1表示没有数据返回），lx:0未知，1移动，2联通，3电信，data:表示从数据库中获得的数据
     * @example
     * jex().isCardNo();
     */
    ZQuery.prototype.IsMobileNumSer= function (jsons) {
        var ctel = jsons.ctel || "";
        var iflx = jsons.lx || 0;
        var cma = jsons.cma || "";
        if (ctel.length < 7) {
            alert("手机号码不正确");
            return;
        }
        var querCtel = ctel.substring(0, 7);
        db.sajax("mobiles|mobilessp", "all|all", "cmb='" + querCtel + "'|mb=" + querCtel + " or mb=" + ctel, "", function (i, json) {
            var result = -1;
            var presult = -1;
            if (json['mobilessp'] && json['mobilessp'].a.maxr > 0) {
                presult = json['mobilessp'].a.maxr;
            }
            if (json['mobiles'] && json['mobiles'].a.maxr > 0) {
                var idmobile = json['mobiles'].all.sx[0];
                var obj = json['mobiles'].all[idmobile];
                if (cma != "") {
                    if (obj.cma.indexOf(cma) > -1) {
                        result = 1;
                    }
                    else {
                        result = 0;
                    }
                }
                if (iflx != -1) {
                    var newlx = 0;
                    var cmt = obj.cmt;
                    if (cmt.indexOf("电信") > -1) {
                        newlx = 3;
                    }
                    else if (cmt.indexOf("联通") > -1) {
                        newlx = 2;
                    }
                    else if (cmt.indexOf("移动") > -1) {
                        newlx = 1;
                    }
                    if (iflx > 0) {
                        //需要判断结果
                        if (result == 1 || result == -1) {
                            if (iflx == newlx) {
                                result = 1;
                            }
                            else {
                                result = 0;
                            }
                        }
                    }
                }
                db.dofunc(jsons.func, { result: result, presult: presult, lx: newlx, data: obj });
            }
            else {
                db.dofunc(jsons.func, { result: -1, lx: 0, presult: presult, data: {} });
            }
        });
    },
    /**
     *
     *
     */
    ZQuery.prototype.getWeekNumber= function (d) {
        d = new Date(d);
        d.setHours(0, 0, 0);
        d.setDate(d.getDate() + 4 - (d.getDay() || 7));
        var yearStart = new Date(d.getFullYear(), 0, 1);
        var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
        var getFullYear = d.getFullYear();
        var getWeekNo = weekNo;
        return getWeekNo;
    },

    /**
      * 删除某个传参
      */
     ZQuery.prototype.delParam= function (url, paramKey) {
        var urlParam = url.substr(url.indexOf("?") + 1);
        var beforeUrl = url.substr(0, url.indexOf("?"));
        var nextUrl = "";
        var arr = new Array();
        if (urlParam != "") {
            var urlParamArr = urlParam.split("&");
            for (var i = 0; i < urlParamArr.length; i++) {
                var paramArr = urlParamArr[i].split("=");
                if (paramArr[0] != paramKey) {
                    arr.push(urlParamArr[i]);
                }
            }
        }
        if (arr.length > 0) {
            nextUrl = "?" + arr.join("&");
        }
        if (beforeUrl != '')
            url = beforeUrl + nextUrl;
        return url;
    },
    /*操作系统判断*/
    /*数字类*/
    /**
     * @method randombt
     * @description 范围内随机数据
     * @param  {[int]} min 最小值
     * @param  {[int]} max 最大值
     * @return {[int]}     [description]
     * @example
     * jex().randombt(0,5);
     */
    ZQuery.prototype.randombt= function (min, max) {
        //范围内两者随机，换括最大值和最小值
        return Math.floor(min + Math.random() * (max - min));
    },
    /*数字类*/
    /*本地存储*/
    ZQuery.prototype.cookie= {
        set: function (name, value, ttl) {
            if (!window["windowjs"]) {
                if (ttl == undefined)
                    ttl = 1e3 * 3600 * 24 * 365;
                document.cookie = name + "=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT";
                var expires = new Date;
                expires.setTime(expires.getTime() + ttl);
                document.cookie = [name + "=" + value + "; ", "expires=" + expires.toGMTString() + "; ", "path=/"].join("");
            }else{
                egret.localStorage.setItem(name,value)
            }
        },
        get: function (name) {
            if (!window["windowjs"]) {
                var cookie = document.cookie.split("; ");
                for (var i in cookie) {
                    if (typeof (cookie[i]) == 'string') {
                        var spl = cookie[i].split("=");
                        if (spl.length == 2 && spl[0] == name) {
                            return spl[1];
                        }
                    }
                }
            } else {
                return egret.localStorage.getItem(name)
            }
            return undefined;
        },
        remove: function (name) {
            if (!window["windowjs"]) {
                var expires = new Date;
                expires.setTime(expires.getTime() - 1);
                document.cookie = name + "=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT";
            }else{
                egret.localStorage.removeItem(name);
            }
        }
    },
    //本地存储数据
    ZQuery.prototype.storage= window.localStorage ? {
        getItem: function (item) {
            try {
                return window.localStorage.getItem(item);
            }
            catch (e) {
                return null;
            }
        },
        setItem: function (item, value) {
            try {
                window.localStorage.setItem(item, value);
            }
            catch (e) {
                console.log("Local storage issue: " + e);
            }
        },
        removeItem: function (item) {
            window.localStorage.removeItem(item);
        }
    } : {
        getItem: function (item) {
            return jex().cookie.get(item);
        },
        setItem: function (item, value) {
            jex().cookie.set(item, value);
        },
        removeItem: function (item) {
            jex().cookie.remove(item);
        }
    },
 
    ZQuery.prototype.arrayUnique= function (a) {
        //数据去重复
        for (var i = 0; i < a.length; i++) {
            var j1 = i + 1;
            while (a[j1]) {
                if (a[i] == a[j1]) {
                    a.splice(j1, 1);
                }
                else {
                    j1++;
                }
            }
        }
    },
    /*数组类*/
    ZQuery.prototype.replaceAll= function (s, s1, s2) {
        return s.replace(new RegExp(s1, "gm"), s2);
    },
    /**
     * @method setStars
     * @description 星数评级
     * @param  {[int]} num 星数
     * @return {[String]}  返回生成的静态str
     */
    ZQuery.prototype.setStars= function (num) {
        var num = num || 0;
        var starStr = '';
        for (var i = 1; i <= num; i++) {
            starStr += '<img src="/css/xing.png" width="16%" style="margin:0 2%;"/>';
        }
        return starStr;
    },
    //解码
    ZQuery.prototype.html_decode= function (str) {
        var s = "";
        if (str.length == 0)
            return "";
        s = str.replace(/&lt;/g, "<");
        s = s.replace(/&gt;/g, ">");
        s = s.replace(/&amp;/g, "&");
        s = s.replace(/&nbsp;/g, "");
        return s;
    }

 
window.db = function () {
 
    this.us = null;
 
    this.vs = null;
    this.sj = this.sj || {};
 
    this.idus = 0;
    this.t = 0; //showidus中
    this.ty = 100; //网络延时
    this.t0 = 0; //本地时间  
    this.tjp = 0; //上次试图连服务器的时间。
 
    this.role = 0;
 
    this.vip = 0;
    this.coid = '';
    this.htma = new Array();
    this.wbid = 0;
    this.nw = 1; //网络状态
    this.ifjp = 0;
    this.downf = 0;
    this.curdiv = 1;
    this.historya = new Array();
    this.curh = -1; //当前历史位置
 
    this.gett = function () {
        return db.t + (new Date().getTime() - db.t0) + db.ty;
    };
 
    this.gets = function () {
        return (db.gett() + 8 * 3600000) % (24 * 3600000);
    };
    this.getdzeros = function () {
        return db.gett() - db.gets();
    };
    this.getd = function (h) {
        h = h || 0;
        return jex().getdatetime(db.gett() - h * 3600000).split(' ')[0];
    };
    
   
    this.strzm = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
   
    
    this.setv = function (r, t) {
        j.each(r, function (i, n) {
            jex('[t="' + t + '"][en="' + i + '"]').html(n);
        });
    };
    
  
 
    this.jp = function (surl, func, argj, sdata, syn) {
        var sasync = true;
        if (syn === false)
            sasync = false;
        jg_aj.ssurl = surl + sdata;
        if ((jg_aj.ssurl).indexOf('jg_dofunc') > 0) {
            db.dofunc(func, {});
            return;
        }
        if (db.ifjp == 1 && (db.gett() - db.tjp < 5000)) {
            if (db.role > 7)
                jex().jalert('操作过快，上次读取操作还未完成！');
            console.log('操作过快，上次读取操作还未完成！');
            return;
        }
        db.ifjp = 1; //正在执行
        db.tjp = db.gett();
        var djRco = jex().getv('rco', -1, surl);
        
        
        if (surl.indexOf('setdomain=') > -1 || (window.location + '').indexOf('stdm=') > -1) {
            var ym = 'cyt86.com';
            var stdm = jex().getv('stdm', ''); //浏览器url设定
            var sdm = jex().getv('setdomain', stdm, surl); //根据surl来改变
            if (sdm == '')
                sdm = domain.split('.')[0];
            if (surl.indexOf('http') == 0) {
                surla = surl.split('\/');
                surl = surl.substring(surla[2].length + 7);
                ym = surla[2].substring(surla[2].indexOf('.') + 1);
            }
            if (surl.indexOf('\/') != 0)
                surl = '\/' + surl;
            if (sdm == '7') {
                surl = 'http:\/\/9.gzggo.com' + surl;
            }
            else {
                surl = 'http:\/\/' + sdm + '.' + ym + surl;
            }
        }
        else {
            //if(lurl.indexOf('csse2')>-1)alert('db.jp::::：'+window.location+'=====surl:'+surl);
            if ((window.location + '').indexOf('http') != 0) {
                if (surl.indexOf('http') != 0) {
                    if (lurl.indexOf('csse2') > -1)
                        alert('db.js::::不是http开头：' + surl);
                    surl = '\/' + surl;
                }
            }
        }
        if (surl.indexOf('\/') != 0 && surl.indexOf('http') != 0)
            surl = '\/' + surl;
        if (surl.indexOf('?') > 0) {
            var ifr = jex('iframe').length;
            if (ifr > 0)
                surl += '&iframe=' + ifr + jex('iframe').vale('id');
        }
        var ifcache = false;
        if (surl.indexOf('wr.jsp') > -1)
            ifcache = true;
        var ww1 = 46;
        var hh1 = 46;
        _setTimeout(function () {
            if (db.ifjp == 1) {
                jex().getdiv('ajax-loader', null, 'ajax-loader.png', ww1, hh1, jex().getsl() + jex().getcw() * 0.5 - ww1 * 0.5, jex().getst() + jex().getch() * 0.5 - hh1 * 0.5, 999100, '');
                jex('#ajax-loader').click(function () { jex('#ajax-loader').hide(); });
            }
        }, 1000);
        var stype = "get";
        if (sdata) {
            stype = "POST";
            sdata += '&decode2=1'; //解决post的乱码问题
        }
        else {
            sdata = '';
        }
        /*if(db.sj)if(db.sj.wf){
         j.each(db.sj.wf.all,function(i,n){
           surl=surl.replace(n.cdm+'.cyt86.com',n.cip);
         });
        }*/
        //  if(lurl.indexOf('csse')>-1)jex().jalert(surl)
        if (lurl.indexOf('csse2') > -1)
            alert('j.ajax::::：' + window.location + '=====surl:' + surl);
        // 旧版白鹭没有Network 用回旧的方式
        if (typeof(Network) == 'undefined') {
            j.ajax({
                type: stype, async: sasync, url: surl, dataType: "jsonp",
                data: encodeURI(sdata),
                jsonp: "callbackparam", jsonpCallback: "jpn",
                success: function (json) {
                    db.ifjp = 0; //执行完毕
                    jex('#ajax-loader').hide();
                    if (json.upd) {
                        if (json.upd[0]) {
                            if (json.upd[0].res.indexOf('erxxror') > -1) {
                                var ifreturn = 1;
                                sres = json.upd[0].res.replace(/erxxror/gi, '对不起。');
                                if (sres.indexOf('nore') > -1 || jg_aj.ssurl.indexOf('nore') > -1)
                                    ifreturn = 0;
                                sres = json.upd[0].res.replace(/erxxror/gi, '对不起。').replace(/nore/gi, '');

                                if (ifreturn)
                                    return;
                            }
                        } /*else{
                      
                      }*/
                    }
                    
                    if (surl.indexOf('merge=no') == -1)
                        json = db.merge(json, argj);
                    db.dofunc(func, json);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    jex('#ajax-loader').hide();
                    sres = '';
                    if (textStatus == 'parsererror')
                        sres = '数据格式不匹配！';
                    if (textStatus == 'notmodified')
                        sres = '没有新数据！';
                    if (textStatus == 'timeout')
                        sres = '网络不给力，连接超时了！';
                    if (textStatus == 'error') {
                        sres = XMLHttpRequest.readyState + '网络不给力！' + XMLHttpRequest.status;
                    }
                    // jex().jalert(sres);return; 
                }
            });
        } else { // 使用白鹭Network代替$.ajax
            let proms = Network[stype=="get" ? "httpget" : "httppost"](surl, encodeURI(sdata));
            proms.then(json => {
                db.ifjp = 0; //执行完毕
                jex('#ajax-loader').hide();
                if (json.upd) {
                    if (json.upd[0]) {
                        if (json.upd[0].res.indexOf('erxxror') > -1) {
                            var ifreturn = 1;
                            sres = json.upd[0].res.replace(/erxxror/gi, '对不起。');
                            if (sres.indexOf('nore') > -1 || jg_aj.ssurl.indexOf('nore') > -1)
                                ifreturn = 0;
                            sres = json.upd[0].res.replace(/erxxror/gi, '对不起。').replace(/nore/gi, '');
                            
                            if (ifreturn)
                                return;
                        }
                    } /*else{
                    
                    }*/
                }
                
                if (surl.indexOf('merge=no') == -1)
                    json = db.merge(json, argj);
                db.dofunc(func, json);
            })
            .catch(err => {
                let XMLHttpRequest = err.xhr, textStatus = err.msg;
                jex('#ajax-loader').hide();
                sres = '';
                if (textStatus == 'parsererror')
                    sres = '数据格式不匹配！';
                if (textStatus == 'notmodified')
                    sres = '没有新数据！';
                if (textStatus == 'timeout')
                    sres = '网络不给力，连接超时了！';
                if (textStatus == 'error') {
                    sres = XMLHttpRequest.readyState + '网络不给力！' + XMLHttpRequest.status;
                }
            });
        }
    };
 
    this.gajax = function (surl, func, data) {
        var data = data || {};
        if (typeof (func) == "string") {
            j.ajax({ url: surl, dataType: 'text', cache: false, success: function (data) { T.doeval(func); } }).error(function () { });
        }
        else {
            if (window.OpSphinx) {
                var payObj = new OpSphinx();
                payObj.invoke("test", surl, func);
            }
            else {
                if (windowjs == 1 && lurl.indexOf('http') != 0) {
                    func(window.js.getf(surl));
                }
                else {
                    j.ajax({ url: surl, type: (j.isEmptyObject(data) ? "GET" : "POST"), dataType: 'text', data: data, cache: false, success: func }).error(function (XMLHttpRequest, textStatus, errorThrown) {
                        if (surl.indexOf('ifgs.txt') > -1) {
                            db.dofunc(func, '');
                        }
                        else {
                            alert(textStatus + errorThrown + surl);
                        }
                    });
                }
            }
        }
    };
    this.merge = function (json, argj) {
        if (db.sj == null) {
            db.sj = json;
        }
        else {
            jex.each(json, function (i, n) {
                if (db.sj[i] == null) {
                    db.sj[i] = n;
                }
                else {
                    if (typeof (n) != 'string' && typeof (n) != "number")
                        jex.each(n, function (ii, nn) {
                            if (typeof (nn) == "string") {
                                var a = 1;
                                db.sj[i][ii] = nn;
                            }
                            else {
                                if (db.sj[i][ii] == null) {
                                    db.sj[i][ii] = nn;
                                }
                                else {
                                    if (nn.sx) {
                                        if (db.sj[i][ii].sx) {
                                            jex.each(nn.sx, function (iii, nnn) {
                                                var dbsxStr = "," + db.sj[i][ii].sx.toString() + ",";
                                                if (dbsxStr.indexOf(',' + nnn + ',') == -1) {
                                                    db.sj[i][ii].sx.push(nnn);
                                                }
                                            });
                                        }
                                        else {
                                            db.sj[i][ii].sx = nn.sx;
                                        }
                                    }
                                    jex.each(nn, function (iii, nnn) {
                                        if ((i + '').indexOf('upd') == -1) {
                                            if (argj)
                                                if (argj[i]) {
                                                    if (argj[i] == 1) {
                                                        if (db.sj[i][ii][iii] != null) {
                                                            delete nn[iii];
                                                        }
                                                    }
                                                }
                                        }
                                        db.sj[i][ii][iii] = nnn;
                                    });
                                }
                            }
                        });
                }
            });
        }
        return json;
    };
    this.geturi = function (t, rid) {
        var stemp = '';
        jex('[t="' + t + '"][rid="' + rid + '"]').each(function () {
            en = jex(this).attr('en');
            if (en) {
                stemp += '&' + en + "=" + jex(this).vale() + "";
            }
        });
        return encodeURI(stemp.substring(1));
    };
 
    this.encode = function (str, f) {
        if (f) {
            str = str.replace(/\n/g, '<BR>').replace(/"/g, '``').replace(/#/g, '＃').replace(/&/g, ';amp;');
        }
        else {
            str = str.replace(/\n/g, '<BR>').replace(/"/g, '``').replace(/#/g, '＃').replace(/&/g, ';amp;').replace(/'/g, '\\\'');
        }
        return encodeURI(str).replace(/\+/g, '%2b');
    };
    this.qx = function (showf, cidus) {
        var sms = '';
        var dbidus = db.idus || window.idus;
        //if(window.idus)dbidus=idus;
        if (dbidus < 1000) {
            sms = "您尚未登录！";
        }
        else {
        }
        if (cidus) {
            if (cidus != dbidus)
                sms = "这不是属于您的，无法操作!";
        }
        if (showf == 1 && sms)
            funalert(sms, '', 6);
        return sms;
    };
 
    this.sajax = function (t, q, w, a, func, arg, notqx) {
        if (notqx == null)
            if (db.qx(1) != '')
                return;
        arg = arg || '&option=001';
        var s = '';
        var ta = t.split('|');
        var qa = q.split('|');
        var wa = w.split('|');
        var aa = a.split('|');
        j.each(qa, function (i, n) {
            if (ta.length > i)
                s += '&t' + i + '=' + ta[i];
            s += '&q' + i + '=' + db.encode(qa[i], 1).replace(/\=/g, '7fs39').replace(/\,/g, '7g2j9');
            if (wa.length > i)
                s += '&w' + i + '=' + encodeURI(wa[i]).replace(/\+/g, '%2b');
            if (aa.length > i)
                s += '&a' + i + '=' + aa[i];
        });
        var url = 'db.jsp?idpg=' + idpg + '&n=' + qa.length + s + arg;
        var data = "";
        if ((window.location + '').indexOf(domain) == 7 && (window.location + '').indexOf('urltypeget') == -1) {
            data = 'idpg=' + idpg + '&n=' + qa.length + s + arg; //提示超长，实际不会
            url = '/db.jsp';
        }
        db.jp(url, func, {}, data);
    };
 
    this.dofunc = function (func, json) {
        if (typeof (func) == "string") {
             eval(func);
            return;
        }
        if (typeof (func) == "function") {
            var a = new Array();
            if (typeof (json) == "string")
                json =  eval(json.replace(/jpn/, ''));
            a[0] = json;
            jex.each(a, func);
        }
    };
    this.sqajax = function (json, cid, repl, func, arg, notqx) {
        if (notqx == null)
            if (db.qx(1) != '')
                return;
        if (1 == 1) {
            var tidcm = jg_aj.tidcm || '';
            var idcm = idcm || '';
            var url = 'db.jsp?cid=' + cid + '&idpg=' + idpg + '&idcm=' + (jg_aj.idcm || idcm || '') + '&tidcm=' + tidcm;
            if (arg)
                url += arg;
            srepl = JSON.stringify(repl);
            if (typeof (json) == 'string')
                url += '&sqctn=' + json;
            srepl = srepl.substring(1, srepl.length - 1);
            url += '&repl=' + srepl;
            db.jp(url, func, {});
            return;
        }
    };
 
    this.dbajax = function (strt, rid, func, arg, notqx) {
        if (notqx == null)
            if (window.tk)
                if (tk.qx(1) != '')
                    return;
        var s = '';
        var idx = 0;
        j.each(strt.split('|'), function (i, t) {
            var rida = jex('[t="' + t + '"][begineditf="1"]').vale('rid').split(',').unique();
            j.each(rida, function (ii, nn) {
                var stemp = '';
                var ifall = 1;
                jex('[t="' + t + '"][rid="' + nn + '"]').each(function () {
                    var en = jex(this).attr('en');
                    if (jex(this).attr('begineditf') == '1') {
                        if (en) {
                            var vel = jex(this).vale();
                            if (db.getft(en) == 'number' && en != 'aid') {
                                stemp += ',' + en + "=" + vel + "";
                            }
                            else {
                                stemp += ',' + en + "='" + db.encode(vel) + "'";
                            }
                        }
                    }
                    else {
                        if (en != 'xuhao' && en != 'id')
                            ifall = 0;
                    }
                });
                //===11.9补充新增时候的同步功能修正，，
                var q_hz = '';
                var w_hz = '';
                if ((window.location + '').indexOf(domain) == -1 && ifall == 1) {
                    if (t.split('@')[0] == 'tj') {
                        w_hz = ' and f1=-3';
                        q_hz = ',f1=1';
                    }
                    else {
                        s += '&a' + idx + '=1'; //如无则新增,且指定id
                    }
                }
                if (((nn + '').indexOf('nr') == 0 || arg.indexOf('&ifnr=nr') > -1) && t.split('@')[0] == 'tj')
                    s += '&a' + idx + '=3'; //本地新增tj
                //============  11.9补充tj新增时候的同步修正功能 结束
                var strq = (stemp.substring(1) + q_hz);
                if (strq.length > 2) {
                    s += '&q' + idx + '=' + strq;
                    if (nn.indexOf('nr') != 0 && arg.indexOf('&ifnr=nr') == -1)
                        s += '&w' + idx + '=id=' + nn + w_hz;
                    s += '&t' + idx + '=' + t.split('@')[0].split('_')[0];
                    idx = idx + 1;
                }
            });
        });
        if (arg)
            s += arg;
        var url = '/db.jsp?idpg=' + idpg + '&idcm=' + (jg_aj.idcm || '') + '&tidcm=' + (jg_aj.tidcm || '') + '&n=' + (idx) + s;
        var data = "";
        if ((window.location + '').indexOf(domain) == 7) {
            data = 'idpg=' + idpg + '&n=' + (idx) + s; //提示超长，实际不会
            url = '/db.jsp';
        }
        db.jp(url, func, {}, data);
    };
    this.getft = function (fieldname) {
        if (fieldname.indexOf('c') == 0)
            return 'char';
        if (fieldname.indexOf('date') > -1)
            return 'date';
        return 'number';
    };
 
    this.getrd = function (n) {
        var rad = '', sjs = 13;
        for (var i = 0; i < n; i++) {
            if (i == 0) {
                sjs = Math.floor(Math.random() * 104) % 52;
            }
            else {
                sjs = Math.floor(Math.random() * 124) % 62;
            }
            rad += db.strzm.substring(sjs, sjs + 1);
        }
        return rad;
    };
    this.getnrid = function () {
        return ('nr' + Math.random() * 999999).split('.')[0];
    };
    this.ldb = '';
};
 
window.grid = function () {
    this.curr = 0;
    this.newtoptb = function (id, tdclas, strinner) {
        var w = jex().getv('wid', '1200px');
        return '<table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td>&nbsp;</td><td  id=' + id + '_t>' + '</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td width="' + w + '" class="' + tdclas + '" id=' + id + '>' + strinner + '</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td  id=' + id + '_b>' + '</td><td>&nbsp;</td></tr></table>';
    };
    this.cwin = function (divid, p, bg, w, h, x, y, z, innerh, titl, classn, ww, ifgb, ifzz) {
        getdiv(divid, p, '', w, h, x, y, z, grid.rb(divid + '_d', 0, bg, h, '<div>' + titl + '</div>' + innerh, classn, ww, ifgb), '', '', 0, '');
        if (ifzz)
            funzhezao();
    };
    this.rb = function (tbid, i, bg, h, strinner, classn, ww, ifgb) {
        var bga = bg.split('-');
        var wb = ww || '9';
        var imgext = imgext || ".png";
        var strgb = '';
        if (ifgb)
            strgb = '<div style="float:right;margin-top:-15px;height:25px;width:26px">' + buildtb('gb_' + tbid, null, 'x/a26', 26, 25, 0, 0, 0, ' |hideobja("' + tbid.split('_')[0] + '");hideobja("zhezao")', 'xtb', 0, '') + '</div>';
        if (bga[1] == 1) {
            return "<table width=100% id=" + tbid + " border=0 cellpadding=0 cellspacing=0><tr><td height=" + h + "px width=" + wb + "px style='background:url(b/" + bga[0] + imgext + ")'></td><td style='background:url(b/" + bga[0] + "1" + imgext + ")' class='" + classn + "'>" + strinner + "</td><td width=" + wb + "px style='background:url(b/" + bga[0] + imgext + ") right'>" + strgb + "</td></tr></table>";
        }
        if (bga[1] == 3) {
            var strt = strb = strr = strl = ''; //<img src=css/spacer.gif>
            return "<div id=r3c2" + tbid + "_" + i + " style='background:url(b/" + bga[0] + "1" + imgext + ") top;overflow:hidden;height:" + wb + "px;margin-left:" + wb + "px;margin-right:" + wb + "px'></div><div style='background:url(b/" + bga[0] + imgext + ") left top;overflow:hidden;height:" + wb + "px;width:" + wb + "px;float:left;margin-top:-" + wb + "px'></div><div style='background:url(b/" + bga[0] + imgext + ") right top;overflow:hidden;height:" + wb + "px;width:" + wb + "px;float:right;margin-top:-" + wb + "px'></div>" + "<table width=100%  border=0 cellpadding=0 cellspacing=0><tr><td  width=" + wb + "px style='background:url(b/" + bga[0] + "2" + imgext + ")'>" + strr + "</td><td style='background:url(b/" + bga[0] + "0.png)' " + ((h == 0) ? "" : "height=" + (h - 2 * wb) + "px") + "><div   class='" + classn + "' id=r2c2" + tbid + "_" + i + ">" + strgb + strinner + "</div></td><td style='width:" + wb + "px;background:url(b/" + bga[0] + "2" + imgext + ") right'>" + strl + "</td></tr></table><div id=r3c2" + tbid + "_" + i + " style='background:url(b/" + bga[0] + "1" + imgext + ") bottom;overflow:hidden;height:14px;margin-left:" + wb + "px;margin-right:" + wb + "px'></div><div style='background:url(b/" + bga[0] + imgext + ") left bottom;overflow:hidden;height:14px;width:" + wb + "px;float:left;margin-top:-14px'></div><div style='background:url(b/" + bga[0] + imgext + ") right bottom;overflow:hidden;height:14px;width:" + wb + "px;float:right;margin-top:-14px'></div>" + strb;
        }
    };
    this.newtb = function (id, tdclas, strinner, wtb, strinner1) {
        var wtb = wtb || '100%';
        var strnewtb = '<table class="' + tdclas + '" width="' + wtb + '" border=0 cellpadding=0 cellspacing=0 id=' + id + '><tr>';
        if (strinner1)
            strnewtb += '<td id=tdleft_' + id + ' valign="top">' + strinner1 + '</td>';
        strnewtb += '<td valign="top" style="border-left:1px solid #333" >' + strinner + '</td>';
        return strnewtb + "</tr></table>";
    };
    this.newhtb = function (id, tdclas, innera, strtr, wtb) {
        var wtb = wtb || '100%';
        var wtbs = wtb;
        if (wtb.indexOf('%') == -1)
            wtbs = wtb + 'px';
        var strnewtb = '<table width="100%" border="0px" cellpadding="0px" cellspacing="0px" ><tr id=' + id + '>';
        for (var i = 0; i < innera.length; i++) {
            var strw = '';
            if (i < innera.length - 1) {
                strw = 'width:' + (wtb / innera.length) + 'px';
                if (wtb.indexOf('%') > 0)
                    strw = 'width:' + (100 / innera.length) + '%';
            }
            if (i == 0 && innera[i].indexOf('editallr') > 0)
                strw = 'width:40px';
            strnewtb += '<td class="gridtd ' + tdclas + '" style="' + strw + ';border-left:1px solid #aaa;border-top:1px solid #aaa;" onclick=inivi(this) valign="top">' + innera[i] + '</td>';
        }
        return strnewtb + "</tr>" + strtr + "</table>";
    };
    this.escedit = function (id, t) {
        jex('[t="' + t + '"][en="xuhao"][rid="' + id + '"]').uncheckd();
        jex('[t="' + t + '"][rid="' + id + '"][begineditf="1"]').css({ 'color': '#000', 'background': '#fff' });
        jex('[t="' + t + '"][rid="' + id + '"][begineditf="1"]').attr('begineditf', '0');
    };
    this.editallr = function (obj) {
        if (jex(obj).ifcheck()) {
            jex('.x_check[id="xh_0_1"]').each(function () {
                grid.editall(jex(this).parent().parent().vale('rid'), jex(this).parent().parent().vale('t'));
            });
        }
        else {
            jex('.y_check[id="xh_0_1"]').each(function () {
                grid.escedit(jex(this).parent().parent().vale('rid'), jex(this).parent().parent().vale('t'));
            });
        }
    };
    this.editall = function (id, t) {
        jex('[t="' + t + '"][rid="' + id + '"]').css({ 'color': '#000', 'backgroundColor': '#FFFF99' });
        jex('[t="' + t + '"][rid="' + id + '"]').attr('begineditf', '1');
        jex('[t="' + t + '"][en="xuhao"][rid="' + id + '"]').children().checkd();
        jex('[t="' + t + '"][en="xuhao"][rid="' + id + '"]').attr('begineditf', '0');
        jex('[t="' + t + '"][en="xuhao"][rid="' + id + '"]').css({ 'backgroundColor': '#fff' });
        if ((t.split('@')[0]) == 'tj')
            jex('[t="' + t + '"][en="id"][rid="' + id + '"]').attr('begineditf', '0');
        if ((t.split('@')[0]) == 'tj')
            jex('[t="' + t + '"][en="id"][rid="' + id + '"]').css({ 'backgroundColor': '#fff' });
    };
    this.save = function (idmn, f, ifnr) {
        var strt = idmn;
        if (!isNaN(idmn)) {
            strt = db.sj.mn.all[idmn].ct;
            if (db.sj.mn.all[idmn].csq)
                strt += "|" + db.sj.mn.all[idmn].cq.replace(/,/gi, '|');
        }
        var lurl = (window.location + '');
        if (f) { }
        else {
            if (lurl.indexOf('http:') == 0)
                domain = window.location.host;
        }
        db.dbajax(strt, '', function (i, json) {
            if (json.upd[0].res == 'ok') {
                if (f) {
                    okn = '';
                    rida = rid.split(',');
                    j.each(json.upd, function (i, n) {
                        if (n.cont == 0)
                            okn += ',' + rida[i];
                        if (n.id)
                            if (n.id != rida[i])
                                okn += ',id错位' + n.id + '!=' + rida[i];
                    });
                    if (okn == '') {
                        alert(rid + '保存到：' + domain);
                    }
                    else {
                        alert('id=' + okn + '没有保存！');
                    }
                }
                else {
                    j.each(strt.split('|'), function (i, t) {
                        var rid = jex('[t="' + t + '"][begineditf="1"]').vale('rid');
                        var rida = rid.split(',').unique();
                        if (lurl.indexOf('grid') > -1)
                            if (rid.indexOf('nr') > -1)
                                window.location.replace(window.location);
                        j.each(rida, function (i, n) { grid.escedit(n, t); });
                    });
                }
                if (strt.indexOf('vi') > -1) {
                    alert("VI表中如果涉及到新增加字段，需要在各个域名下保存一下，增加的数据，才能够在服务器上生效，数据才能够正常获取");
                }
            }
        }, '&option=01&ifnr=' + (ifnr || ''), 1);
    };
    this.xhclick = function (obj) {
        var rid = jex(obj).parent().attr('rid');
        if (jex(obj).ifcheck()) {
            this.curr = rid;
        }
        else {
            grid.escedit(rid, jex(obj).parent().attr('t'));
            this.curr = 0;
        }
    };
    this.gettr = function (t, i, n, editm, c1, c2, ifxh, style) {
        var strxh = '', strtr = '';
        if (ifxh) {
            strxh = "<td  t=" + t + " en=xuhao  rid=" + i + ">" + jex().ui({ cid: 'xh', class0: 'x_noy', ca: "|grid.xhclick(this)", w: 8, s: 0, h: 22, class1: 'x_check leftm', ncheck: 99 }) + "</td>";
            if (editm == 2)
                strxh = "<td>" + i + "</td>";
        }
        strtr = grid.gettri(t, i, n, editm, c1, c2, ifxh, style);
        return '<tr t=' + t + ' cd=' + i + '>' + strxh + strtr + '</tr>';
    };
    this.retr = function (t, i, n) {
        jex('tr[cd="' + i + '"][t="' + t + '"]').html(grid.gettri(t, i, n, 0, 0, 0, 0, 11));
    };
    this.gettri = function (t, i, n, editm, c1, c2, ifxh, style) {
        var jlmb = '';
        if (style == 0) {
            var s = '';
            var fa = sj[t].f.split(',');
            j.each(fa, function (ii, en) {
                if (ii >= c1 && ii < c2) {
                    if (editm == 1)
                        s += '<td  >' + grid.inp(t, en, '', i, n) + '</td>';
                    var vl = n[en];
                    if (en == 'modifyd' || en == 'created' || en == 'logind' || en == 'shouqud') {
                        vl = jex().getdatetime(vl);
                    }
                    if (editm == 2)
                        s += '<td  t=' + t + ' en=' + en + ' rid=' + i + ' class=' + (fa.length == (ii + 1) ? "td3" : "td2") + '>' + vl + '</td>';
                }
            });
            return s;
        }
        if (style > 10) {
            if (ifxh == 1)
                return '';
            if (t == 'co')
                return '<td>' + gettime(n.modifyd).split('月')[1] + code['rco'][n.rco] + ' ' + n.n0 + '币</td><td>' + n.n4 + '</td>';
        }
    };
    this.showrw = function (id) {
        parent.showobja('ltd3');
        parent.jex("#bbbc").width(470);
        parent.jex('#ltd3').html(getiframe('iltd3', 'w.jsp?t=rw&id=' + id));
    };
    this.inp = function (t, en, zw, rid, n, clsn, cid) {
        var clsn = clsn || "input2";
        var cid = cid || "";
        var v = (n ? (typeof (n) != 'object' ? n : n[en]) : '');
        var vl = v + "";
        var strv = '';
        var h = 22;
        if (clsn.indexOf(' r') > -1)
            h = 35;
        if (en == 'id' && t == 'vi@2')
            vl = rid;
        if (en == 'modifyd' || en == 'created' || en == 'logind' || en == 'shouqud') {
            vl = jex().getdatetime(vl, 1);
            strv = ' v=' + v;
        }
        if (cid != "") {
            cid = cid + en;
        }
        var str1 = "<input onfocus='grid.fover(this)' " + strv + " value='" + vl + "' type='" + (en.indexOf("cpw") == 0 ? "password" : ((typeof (n) == 'number' && en != 'modifyd' && en != 'created') ? "number" : "text")) + "' t='" + t + "' en='" + en + "' rid=" + rid + " style='box-sizing: initial;height:" + h + "px; line-height:" + h + "px; padding-left:3px;padding-right:2%;width:95%;" + (h > 30 ? "font-size:20px;" : "") + "' class='" + clsn + "' >";
        if (zw) {
            vl = ((vl + "").indexOf("gzggo.com") > -1 ? "" : vl);
            str1 = '<div style="position: relative;margin: 0 auto;">'
                + '<input ' + (cid == "" ? "" : ("id=" + cid)) + ' type="' + (en.indexOf('cpw') == 0 ? "password" : (en.indexOf('id') == 0 ? "tel" : ((typeof (n) == 'number' && en != 'modifyd' && en != 'created') ? "number" : "text"))) + '" autocomplete="off" onfocus=grid.fover(this)  onblur=grid.offover(this) ' + strv + ' value="' + vl + '"  type="' + (en.indexOf('cpw') == 0 ? "password" : (typeof (n) == 'number' ? "number" : "text")) + '" t="' + t + '" en="' + en + '" rid="' + rid + '" class="ui3inputclas" ' + ((zw == 'QQ' || zw == '更改密码' || zw == '昵称(企业名称)') ? 'style="padding: 10px 0px 10px 18px;"' : '') + '>'
                + '<span class="ui3spanclas" onclick=grid.foveri(this) ondblclick="grid.dbfoveri(this)" style="color: #' + (vl == "" ? "999" : "12a5f8") + ';top: ' + (vl == "" ? 18 : -4) + 'px;' + (lurl.indexOf('tji') > -1 ? 'font-size:13px' : '') + '">' + zw + '</span>'
                + ((en == '_id' || en == 'idclas') && !jg_aj.ifGL ? '<span style="position: absolute;top: -2px;right: 16px;cursor: pointer;color: #fff;background:#608FEE;font-size: 14px;border-radius: 4px;line-height: 150%;padding: 0 3px;" onclick=T.connEach("' + vl + '")>关联</span>' : '')
                + '<span onclick=' + (en == '_id' ? 'deleteMap("' + rid + '")' : 'deleteCol("' + rid + '","' + en + '")') + ' style="position: absolute;top: -4px;right: 0px;cursor: pointer;color: #999;">×</span>'
                + '</div>';
        }
        if (en == 'cfun' && t == "fn" || (vl + "").indexOf("'") > -1 || (vl + "").indexOf("{") > -1 || (vl + "").indexOf("[") > -1 || (vl + "").indexOf('"') > -1) {
            str1 = '<div style="position: relative;margin: 0 auto;"><div contenteditable="true" onfocus="grid.fover(this)" onblur=grid.offover(this) ' + strv + '  t="' + t + '" en="' + en + '" rid="' + rid + '" style="height:' + Math.min(150, (vl.split('<BR>').length * 37)) + 'px; border: 1px solid #999;color: #333;font-size:12px;box-sizing: initial;padding-left:3px;padding-right:2%;width:95%;overflow:auto;margin: 10px 0 2px 0;text-align: left;background:#fff;" class="' + clsn + '" >' + vl.replace(/│/g, '|').replace(/\<BR\>/g, '\n').replace(/＃/g, '#').replace(/``/g, '"') + '</div><span class="ui3spanclas" onclick="grid.foveri(this)" ondblclick="grid.dbfoveri(this)" style="color: #12a5f8;top: -14px;background: url(/g/lining/css/white01.png);' + (lurl.indexOf('tji') > -1 ? 'font-size:13px' : '') + '">' + zw + '</span>'
                + ((en == '_id' || en == 'idclas') && !jg_aj.ifGL ? '<span style="position: absolute;top: -2px;right: 16px;cursor: pointer;color: #fff;background:#608FEE;font-size: 14px;border-radius: 4px;line-height: 150%;padding: 0 3px;" onclick=T.connEach("' + vl + '")>关联</span>' : '')
                + '<span onclick=' + (en == '_id' ? 'deleteMap("' + rid + '")' : 'deleteCol("' + rid + '","' + en + '")') + ' style="position: absolute;top: -14px;right: 0px;cursor: pointer;color: #999;">×</span>'
                + '</div>';
            if (lurl.indexOf("grid.jsp") > -1) {
                str1 = '<textarea onfocus="grid.fover(this)" ' + strv + '  t="' + t + '" en="' + en + '" rid="' + rid + '" style="height:' + Math.min(150, (vl.split('<BR>').length * 23)) + 'px; border: 1px solid #999;color: #333;font-size:12px;box-sizing: initial;padding-left:3px;padding-right:2%;width:95%;overflow:auto;" class="' + clsn + '" >' + vl.replace(/│/g, '|').replace(/\<BR\>/g, '\n').replace(/＃/g, '#').replace(/``/g, '"') + '</textarea>';
            }
        }
        return str1;
    };
    this.beginedit = function (obj) {
        var t = jex(obj).attr('t');
        var en = jex(obj).attr('en');
        var rid = jex(obj).attr('rid');
        jex('#btn' + t + '_1').show();
        if (db.sj.mn) {
            j.each(db.sj.mn.all, function (i, n) {
                if ((n.cq + ',').indexOf(t + ',') > -1)
                    jex('[onclick*="grid.save(' + i + ')"]').show();
            });
        }
        if (obj.className == 'input4') {
        }
        else {
            if (obj.style.backgroundColor != '#FFFF7E') {
                obj.style.backgroundColor = '#FFFF7E';
                jex(obj).css({ "background": "-webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#FFFF7E))" });
            }
        }
        jex(obj).attr('begineditf', '1');
        jex('[t="' + t + '"][en="xuhao"][rid="' + rid + '"]').children().checkd();
        return true;
    };
    this.offover = function (obj) {
        var spant = jex(obj).next().css('top');
        var inpval = jex(obj).val();
        if (spant == '-4px' && inpval == "") {
            jex(obj).next().css({ 'top': '18px', 'color': '#999' });
        }
    };
    this.foveri = function (obj) {
        if (jex("[t='editt'][en='tw']:input").length > 0) {
            //jex("[t='editt'][en='tw']:input").val(obj.innerText+":");
            if (jex(obj).html() == "_id") {
                jex("#s_codEBtn_3").html(jex(obj).siblings("input").attr("rid")).css('color', '#000');
            }
        }
        else {
            grid.fover(jex(obj).siblings("input"));
            jex(jex(obj).siblings("input")).focus();
        }
    };
    this.dbfoveri = function (obj) {
        if (jex("[t='editt'][en='tw']:input").length > 0) {
            jex("[t='editt'][en='tw']:input").val(obj.innerText + ":\/\/");
        }
        else {
            grid.fover(jex(obj).siblings("input"));
            jex(jex(obj).siblings("input")).focus();
        }
    };
    this.fover = function (obj) {
        var spant = jex(obj).next().css('top');
        if (spant == '18px') {
            jex(obj).next().css({ 'top': '-4px', 'color': '#12a5f8' });
        }
        crid = jex(obj).attr('rid');
        cren = jex(obj).attr('en');
        ceditv = jex(obj).vale();
        jex('#hx').css('top', jex(obj).position().top + jex(obj).height() + 3).show();
        jex('#texta').val(jex(obj).val());
        jex('#texta').attr('finds', '[t="' + jex(obj).attr('t') + '"][en="' + jex(obj).attr('en') + '"][rid="' + crid + '"]');
        if (jex(obj).attr('en') == 'id' && jex(obj).attr('t') == 'pg@1') {
            window.open("grid.jsp?t=cm@1&waa0=idpg=" + jex(obj).vale() + "%20order%20by%20modifyd%20desc&ft=&psize=200&idpg=21&editm=1&wid=100%", "_blank");
        }
        if (jex("#divjedit").length > 0 && jex("#pageTitle").length > 0 && jex("#guideemp").css("display") != "none") {
            app.formatterToEditor();
        }
        if (this.curr > 0) {
            jex('[t="' + t + '"][rid="' + crid + '"]').each(function () {
                en = jex(this).attr('en');
                if (jex(this).vale() != jex('[t="' + t + '"][en="' + en + '"][rid="' + grid.curr + '"]').vale()) {
                    jex(this).css('color', 'red');
                }
            });
            jex(obj).dblclick(function () {
                jex('[t="' + t + '"][rid="' + crid + '"]').each(function () {
                    en = jex(this).attr('en');
                    cv = jex('[t="' + t + '"][en="' + en + '"][rid="' + grid.curr + '"]').vale();
                    if (jex(this).vale() != cv && en != 'id' && en != 'ctn') {
                        grid.beginedit(this);
                        jex(this).val(cv);
                    }
                });
            });
        }
        obj.onkeyup = function (e) {
            var sobjval = jex(obj).vale();
            if (sobjval && sobjval.indexOf('##') >= 0 || sobjval.indexOf('···') >= 0 || sobjval.indexOf('```') >= 0) {
                grid.pastexls(obj);
            }
            if (jex(obj).vale().indexOf('、、') >= 0) {
                if (jex(obj).context.tagName == 'INPUT')
                    jex(obj).val(jex(obj).vale().replace('、、', '\/\/'));
                if (jex(obj).context.tagName == 'DIV')
                    jex(obj).html(jex(obj).vale().replace('、、', '\/\/'));
            }
            if (jex(obj).vale().indexOf('‘') >= 0 || jex(obj).vale().indexOf('’') >= 0 || jex(obj).vale().indexOf('“') >= 0 || jex(obj).vale().indexOf('”') >= 0) {
                if (jex(obj).context.tagName == 'INPUT')
                    jex(obj).val(jex(obj).vale().replace(/‘/g, '\'').replace(/’/g, '\'').replace(/“/g, '"').replace(/”/g, '"'));
                if (jex(obj).context.tagName == 'DIV')
                    jex(obj).html(jex(obj).vale().replace(/‘/g, '\'').replace(/’/g, '\'').replace(/“/g, '"').replace(/”/g, '"'));
            }
        };
        obj.onchange = obj.onkeydown = function (e) {
            //hideobja('selediv|zhezao');
            if (jex().mye(e).ctrlKey == true && jex().mye(e).keyCode == 86 || jex().mye(e).ctrlKey == true && jex().mye(e).keyCode == 88 || jex().mye(e).ctrlKey != true) {
                if (grid.beginedit(this) == false)
                    return false;
            }
            var t = jex(obj).attr('t');
            var rid = jex(obj).attr('rid');
            if (t == 'editt' && rid == 0) {
                if (jex().mye(e).keyCode == 13 || jex().mye(e).keyCode == 116) {
                    var comingPort = jex("input[t='editt'][en='port']").vale() || '';
                    if (comingPort != '') {
                        console.warn('即将切换node端口为：' + comingPort);
                        jg_aj.Sneedi = 1;
                        ws.ifopen = 0;
                        ws.close();
                        jaimain(jg_aj.sj.idc, jex().cookie.get("aid"), { fport: comingPort });
                        jex("input[t='editt'][en='port']").val('');
                    }
                    else {
                        T.searchmogo();
                    }
                }
                if (jex().mye(e).keyCode == 116) {
                    if (window.event) {
                        try {
                            jex().mye(e).keyCode = 0;
                        }
                        catch (e) { }
                        e.returnValue = false;
                    }
                    else {
                        e.preventDefault();
                    }
                }
            }
            if (jex().mye(e).ctrlKey == true && jex().mye(e).keyCode == 46) {
                /* if (document.getElementById('duibisave_' + rid + '_1')) {
                      document.getElementById('duibisave_' + rid + '_1').click();
                    }*/
            }
            if (jex().mye(e).ctrlKey == true && jex().mye(e).keyCode == 13) {
                if (document.getElementById('save' + t)) {
                    navig == "fox" ? document.getElementById('save' + t).onclick() : document.getElementById('save' + t).click();
                }
                if (document.getElementById('duibisave_' + rid + '_0')) {
                    document.getElementById('duibisave_' + rid + '_0').click();
                }
            }
            if (jex().mye(e).keyCode == 13)
                jex(obj).next().focus();
        };
    };
    this.addr = function (t, n) {
        var rid = 'nr' + (Math.random() + '').substring(0, 6);
        var ss = grid.gettr(t, rid, '', 1, 0, 3, 1, 0);
        jex('[id="tabl_' + t + '"]').after(ss);
        jex('[id="tab_' + t + '"]').after(grid.gettr(t, rid, '', 1, 3, 99, 0, 0));
    };
    this.cpn = {};
    this.psize = {};
    this.menu = function (t, wid, wy, editm, idmn) {
        var wy = Math.floor(sj[t].a.maxr / parseInt(jex().getv('psize', 10)));
        if (wy > 0) {
            if (jex('#tableb' + t).length == 0)
                jex('#table' + t).after("<div class='clearfix' id=tableb" + t + "></div>");
            var curPageNo = parseInt(jex().getv('curPageNo', 0));
            grid.cpn[t] = grid.cpn[t] || curPageNo;
            jex('#tableb' + t + '').html(jex().ui({ cid: 'tableb' + t + '', w: 80, h: 26, ca: '首页|grid.nextp(this,0,' + idmn + ')`上页|grid.nextp(this,-1,' + idmn + ')`' + ((grid.cpn[t] + 1) || 1) + "`下页|grid.nextp(this,'+1'," + idmn + ")`" + (wy + 1) + '页|grid.nextp(this,' + wy + ',' + idmn + ')' }));
        }
        if (jex('#tablet' + t).length == 0)
            jex('#table' + t).before("<div class='clearfix' id=tablet" + t + "></div>");
        // var str3="<td  class=x_blue onmouseover=jex().ccss(this,1) onclick=grid.addr('" + t + "') id=add" + t + "  > 新增</td><td style='display:none;' class=xmtdr onmouseover=chcss(this,1) onclick=tianjia('" + t + "') id=tianjia" + t + "  > 添加</td> <td id=tsinfo" + t + " style='color:red; padding:3px' ></td> <td   class=x_blue onmouseover=jex().ccss(this,1) onclick=grid.save('" + t + "') id=save" + t + "    >保存</td><td   class=x_blue onmouseover=jex().ccss(this,1) onclick=grid.save('" + t + "',0,'nr') id=newsave" + t + "  style='display:none;'  >保存为新行</td><td   class=x_blue onmouseover=jex().ccss(this,1) onclick=grid.del('" + t + "') id=del" + t + " style='display:;'   >删除</td>";
        // var stablebg="<table  border=0   cellspacing=0 cellpadding=4px><tr>"+str3+"</tr></table>";
        var ckey = '';
        if (idmn) {
            ckey = (db.sj.mn.all[idmn] && db.sj.mn.all[idmn].ckey || '');
            editm = (db.sj.mn.all[idmn] && db.sj.mn.all[idmn].editm || 1);
        }
        var stridmn = idmn || t;
        stablebg = jex().ui({ cid: 'btn' + t, w: 55, ca: "新增|grid.addr('" + t + "')`保存|grid.save(" + (idmn || ("'" + t + "'")) + ")`<input type=text id=ckey" + stridmn + " value='" + ckey + "' style='height:25px;border:0'>`搜索|grid.soso(" + (idmn || ("'" + t + "'")) + ")" });
        jex('#tablet' + t).html(stablebg);
        jex('#btn' + t + '_1').hide();
        jex('#btn' + t + '_2').css({ "width": "inherit" });
        if (editm != 1)
            jex('#btn' + t + '_0').hide();
        // 
    };
    this.nextp = function (obj, fx, idmn) {
        var cp = fx;
        var t = jex(obj).attr('id').split('_')[0].substring(6);
        if ((fx + "").substring(0, 1) == '-' || (fx + "").substring(0, 1) == '+')
            cp = Math.max(0,  eval(grid.cpn[t] + (fx + "")));
        if (lurl.indexOf('grid') > -1) {
            window.location = jex().getUrl('curPageNo', cp);
        }
        else {
            db.sj.mn.all[idmn].curPageNo = cp;
            grid.funmn(idmn);
        }
    };
    this.soso = function (idmn) {
        var aj = db.sj.mn.all[idmn];
        var t = aj.ct || 'cm';
        aj.curPageNo = 0;
        grid.cpn[t] = 0;
        grid.funmn(idmn);
    };
    this.funmn = function (idmn) {
        var aj = db.sj.mn.all[idmn];
        var t = aj.ct || 'cm';
        if (t.indexOf("(") > -1) {
            db.dofunc(t);
            return;
        }
        var qaa = (aj.cq || "all:id") + "|(ccl)all";
        var cgz = aj.cgz || "";
        aj.cw = (aj.cw || "1=1 ");
        var sscw = "";
        var ckey = jex('#ckey' + idmn).vale();
        aj.ckey = ckey;
        if (ckey) {
            var fa = [];
            j.each(db.sj[aj.ct].all, function (i, n) {
                j.each(n, function (ii, nn) {
                    fa.push(ii);
                });
                db.sj[aj.ct].f = fa.join();
                if (1 == 1)
                    return false;
            });
            var nskey = 0;
            j.each(fa, function (i, n) {
                if (isNaN(ckey)) {
                    if (n.indexOf("c") == 0)
                        sscw += " or " + n + " like '{p}" + ckey + "{p}'";
                }
                else {
                    if (n.indexOf("id") == 0)
                        sscw += " or " + n + "=" + ckey + "";
                }
                nskey++;
                if (nskey > 5)
                    return false;
            });
            if (sscw != '')
                sscw = " and (" + sscw.substring(3) + ")";
        }
        var cpn = aj.curPageNo || parseInt(jex().getv('curPageNo', 0));
        grid.cpn[t] = cpn;
        var psize = (aj.psize || 10);
        var cww = aj.cw + sscw + " order by " + (aj.csx || " id desc ") + " limit " + (cpn * psize) + "," + (psize);
        var swvi = "|cta='" + t.split("_")[0] + "' and cgz='" + cgz + "'";
        if (cgz.length == 0)
            swvi = "|cta='" + t.split("_")[0] + "'";
        var opt = "021";
        if (t.indexOf("vs"))
            opt = "011";
        if (aj.csq) {
            jex().getall(jg_aj.html[idmn].m, aj.div || 'divmain', 'table' + t, {
                sqajax: aj.csq, option: '&option=021', swhe: { whe: cww }, func: function () {
                    grid.menu(t, 0, 0, 1, idmn);
                    if (jg_aj.html[idmn].t)
                        jex('#table' + t).before(jg_aj.html[idmn].t);
                }
            }, aj.ct, aj.cq, aj.csid, '', '', '', false);
            ;
        }
        else {
            db.sajax(t + "|vi", qaa, (cww) + swvi, '01', function (i, jsn) {
                sj[t] = db.sj[t];
                sj.vi = db.sj.vi;
                grid.build('table' + t, aj.div || 'divmain', t, aj.editm || 1, '', jsn[t]);
            }, '&option=' + opt + '&idpg=' + idpg + '&idcm=' + (jg_aj.idcm || idcm || '') + '&tidcm=' + (jg_aj.tidcm || ''));
        }
        // window.location='grid.jsp?t='+n[0]+'&waa0='+(n[2]||"1=1")+n[3]+'&ft='+n[4]+'&psize='+(n[5]||26)+'&idpg=21&editm=1&wid=100%';
    };
    this.build = function (gridid, divid, t, editm, style, jsn) {
        var gdl = jex().getv('gdl', 3);
        var json = jsn || sj[t];
        var dividw = jex('#' + divid).width();
        var innera = new Array();
        var innera1 = new Array();
        innera[0] = '<div class=tdtop style="width:100%">&nbsp;信息</div>';
        innera[1] = '<div class=tdtop style="width:40px">&nbsp;</div>';
        innera1[0] = jex().ui({ cid: 'xh' + t, ca: "|grid.editallr(this)", w: 8, s: 0, h: 22, class1: 'x_check leftm', ncheck: 99 });
        if (t == 'vi@2') {
            sj[t].f += (',id');
        }
        if (editm > 0) {
            j.each(json.f.split(','), function (ii, nn) {
                var wb = '100%';
                var snn = nn;
                if (sj.vi)
                    if (sj.vi.all[nn]) {
                        if (sj.vi.all[nn].cwi)
                            wb = (sj.vi.all[nn].cwi) + 'px';
                        if (nn != 'sx')
                            snn = sj.vi.all[nn].ctn;
                        if (lurl.indexOf("grid.jsp") > -1)
                            snn = nn + snn;
                    }
                if (wb != '-1px') {
                    if (ii < gdl) {
                        innera1[ii + 1] = '<div class=tdtop ccl=' + nn + ' title=' + snn + ' style="width:' + wb + ';text-align:center;overflow:hidden;height:26px">' + snn + '</div>';
                    }
                    else {
                        innera[ii - gdl] = '<div class=tdtop ccl=' + nn + ' title=' + snn + ' style="width:' + wb + ';text-align:center;overflow:hidden;height:26px">' + snn + '</div>';
                    }
                }
            });
        }
        var strtr = '';
        strtrl = '';
        strxh = '';
        if (json) {
            j.each(json.all, function (i, n) {
                strtrl += grid.gettr(t, i, n, editm, 0, gdl, 1, style);
                strtr += grid.gettr(t, i, n, editm, gdl, 99, 0, style);
            });
        }
        var inners = grid.newhtb('tab_' + t, '', innera, strtr, '100%');
        var innersl = grid.newhtb('tabl_' + t, '', innera1, strtrl, '360');
        var strgrid = grid.newtb('table' + t, 'ccc', '<div id=tdou_' + t + ' style="' + (style > 10 ? '' : 'overflow-x:auto;') + '">' + inners + '</div>', '', innersl);
        document.getElementById(divid).innerHTML = strgrid;
        if (style > 10)
            jex('#tdleft_table' + t).hide();
        var realw = dividw - jex('#tdleft_table' + t).width() - 8;
        document.getElementById('tdou_' + t).style.width = (realw + 'px');
        //jex('#td'+gridid).children().sortable();;
        grid.menu(t, 'divmain', '', editm);
        if (sj[t].a.maxr == 0) {
            jex('.gridtd').css('border-bottom', '#333 1px solid');
            if (jex('#datatishi_' + t).length == 0)
                jex('#table' + t).after("<div id=datatishi_" + t + " class='cent div1'>无数据</div>");
        }
        if (jex('.tdtop').resizable) {
            jex('.tdtop').resizable({
                handles: 'e',
                stop: function (event, ui) {
                    db.sajax('vi', "cwi='" + jex(ui.element[0]).width() + "'", "cta='" + t.split('@')[0] + "' and ccl='" + jex(ui.element[0]).attr('ccl') + "'", "", function () { });
                },
                resize: function (e, ui) {
                    jex(ui.element[0]).parent().width(jex(ui.element[0]).width());
                }
            });
        }
    };
    this.pastexls = function (obj) {
        var en = jex(obj).attr('en');
        var t = jex(obj).attr('t');
        var rid = jex(obj).attr('rid');
        var rv = obj.value.replace('##', '');
        var ra = rv.split('\n');
        var ca = ra[0].split(' ');
        if (ra.length + ca.length > 4)
            //if(confirm('发现'+(ra.length-1)+'行'+ca.length+'列数据,是否自动按表格模式粘帖？\n'+rv)){
            if (jex('input[t="' + t + '"][en="' + en + '"]').length < ra.length - 1) {
                alert('请先新增足够的行。');
                return;
            }
        var n = 0;
        var begf = 0;
        j.each(jex('input[t="' + t + '"][en="' + en + '"]'), function () {
            if (jex(this).attr('rid') == rid) {
                begf = 1;
            }
            if (n < ca.length && begf == 1) {
                if (grid.beginedit(this) == false)
                    return false;
                jex(this).val(ca[n]);
                n++;
            }
        });
        //}
    };
};
 
window.grid = new window.grid();
window.db = new window.db(); 
