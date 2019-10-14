var egret = window.egret;var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
window.jg_aj = { "Sneedi": 1, "editm": 0, "Ci": 1, "heart": null, "galx": 10, "sj": { "_id": "G8RaVITx3WH", "cti": "zhaobutong", "idc": "找不同_游戏", "title": "找不同_游戏", "cjj": "找不同_游戏", "port": "", "eg": 1, "css": ["css/style.css?1546832165000"], "js": ["/js2/Binding.js?1546416275196", "/libs/{cti}/os.js?1546416275196", "/libs/{cti}/act.js?1547088460001", "/libs/js/30jex.js?1546862872000", "/libs/js/50T.js?1547175842001", "/js/egret.min.js?1522237116997", "/js3/main.min.js?1545640010001", "/js2/x_debug.js?1522237122128", "/libs/js/40index.js?1544441500001", "js/jweixin-1.2.0.js?1528694261000", "js2/exif.js?1546416463115", "js2/up.js?1546416332028"], "act": ["切换", "toapp", "拖放", "横向排列", "找位置", "生成Map", "显示图片", "调用相册", "网格放置", "克隆对象", "跟随", "执行代码", "找不同发射", "点击间隔", "找不同点错", "找不同换图", "粒子特效", "上下移动", "呼吸", "放大", "震动", "时刻倒计", "手机震动", "走马灯抽奖", "to微信", "微信小游戏分享", "找不同显示提示", "弹窗", "uri()", "播放音效", "tween", "发射"], "elmodifyd": 1566385623508, "sp": 1, "sync": 0, "bgm": "", "loop": 0, "icon": "", "logs": "", "ProJob": "", "bgimg": "", "heart": 0, "idus": "G8RD6y7FMWH", "created": 1567049614186, "modifier": "g8qOdj9sWg9", "wxappid": "wx78f6119a0dcb2b04", "wxsecret": "3a6dce4fc57d290127ae870544d1f0cd", "modifyd": 1567564211138 }, "ifsendok": 0, "psmode": 1, "tianji": { "bgUrl": "loadingbg_jpg", "barBgUrl": "ddds_png", "barUrl": "dsds_png", "barpoint": "125,600", "barw": 1025, "barh": 42 } };
window.shref = '';
window.ws = '', window.usfrom = '', window.windowjs = 0, window.oss_jsUrl = "http://oss.kxtui.cn", window.scoAppid = 'wx8612690fa5e2924d', window.curidc = jg_aj.sj.idc, window.htps = "http";
window.lurl = (window.location + '').replace("#rd", '').replace(/;amp;/g, '&');
window.editor = null, window.formatter = null, window.app, window.editor2 = null, window.formatter2 = null, window.app2 = {};
window.eg = jg_aj.sj.eg || 0;
window.ui = { 'ui': { all: { msgb: { cid: "msgb", ctn: "7|newvs", sx: 0, galx: 7, w: 60, h: 54, x: 0, y: 0, z: -2, s: 0, marg: 0, ncheck: 0, cfun: "j().cls()", ca: "||x_btnclose", class0: "x_noy", class1: "", class2: "", padd: 0, cta: "", ccl: "", cret: "html", ftxt: 0, checksj: "", idpg: 0, cxy: "", op: 0 } } } };
window.imgp = window.imgp || ('css/');
if (typeof jQuery == "undefined") {
    window.ZQuery = function (arg) {
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
    };
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
            if (nodeNames && nodeNames.length > 0) {
                var firstNodeName = nodeNames[0].substring(1);
                var firstNode = document.createElement(firstNodeName);
                var firstInfo = value.match(/<.*?>/)[0]; // 第一个节点中的属性信息
                /* TIM_LOGS 如果第一个节点有id属性 */
                var nodeId = firstInfo.match(/id=([' "])(?:(?!\1).)*?\1/);
                if (nodeId && nodeId.length > 0) {
                    nodeId = jex.trim(nodeId[0].split('=')[1]);
                    nodeId = nodeId.replace(/['"]/g, '');
                    firstNode.id = nodeId;
                }
                /* TIM_LOGS_END */
                for (var i = 0; i < this.elements.length; i++) {
                    this.elements[i].appendChild(firstNode);
                }
                /* TIM_LOGS 如果第一个节点有style属性 */
                var nodeAttr = ['style', 'src', 'width', 'height', 'onclick'];
                for (var _i = 0, nodeAttr_1 = nodeAttr; _i < nodeAttr_1.length; _i++) {
                    var fk = nodeAttr_1[_i];
                    var regStr = new RegExp(fk + '=([\' "])(?:(?!\\1).)*?\\1');
                    var nodeStyle = firstInfo.match(regStr);
                    if (nodeStyle && nodeStyle.length > 0) {
                        nodeStyle = jex.trim(nodeStyle[0].split('=')[1]);
                        //nodeStyle = nodeStyle.replace(/['"]/g,'');
                        nodeStyle = nodeStyle.slice(1, -1);
                        jex(firstNode).attr(fk, nodeStyle);
                    }
                }
                /* TIM_LOGS_END */
                /* TIM_LOGS 如果append多个节点 */
                var orderNodes = value.match(/(>.*).*(.*<)/);
                if (orderNodes && orderNodes.length > 0) {
                    orderNodes = jex.trim(orderNodes[0]).slice(1, -1); //  去掉收尾的 > <
                    orderNodes && (firstNode.innerHTML = orderNodes);
                }
                /* TIM_LOGS_END */
            }
            else {
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
    ZQuery.prototype.width = function () { return (this.elements[0] || {}).offsetWidth || 0; };
    ZQuery.prototype.height = function () { return (this.elements[0] || {}).offsetHeight || 0; };
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
    ZQuery.prototype.scrollLeft = function () { };
    ZQuery.prototype.scrollTop = function () { };
}
else {
    window.ZQuery = jQuery;
}
window.jex = function (arg) {
    if (typeof jQuery != 'undefined' && lurl.indexOf('csse3') > -1) {
        return new jQuery(arg);
    }
    else {
        return new ZQuery(arg);
    }
};
window.jex.fn = ZQuery.prototype;
window.jex.fn.extend = function (json) {
    for (var name in json) {
        ZQuery.prototype[name] = json[name];
    }
};
window.json2url = function (json) {
    var arr = [];
    for (var name in json) {
        arr.push(name + '=' + encodeURIComponent(json[name]));
    }
    return arr.join('&');
};
window.getStyle = function (obj, sName) {
    return (obj.currentStyle || getComputedStyle(obj, false))[sName];
};
window.addEvent = function (obj, sEv, fn) {
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
};
window.DOMReady = function (fn) {
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
};
window.getByClass = function (oParent, sClass) {
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
};
window.getByStr = function (aParent, str) {
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
};
window.jex.trim = function (value) {
    if (value) {
        return null == value ? "" : (value + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    }
    else {
        return value;
    }
};
window.jex.each = function (object, callback) {
    var type = (function () {
        switch (object.constructor) {
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
    if (type === 'Array' || type === 'NodeList') {
        // 由于存在类数组NodeList, 所以不能直接调用every方法
        [].every.call(object, function (v, i) {
            return callback.call(v, i, v) === false ? false : true;
        });
    }
    else if (type === 'Object') {
        for (var i in object) {
            if (callback.call(object[i], i, object[i]) === false) {
                break;
            }
        }
    }
};
window.getEle = function (str) {
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
};
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
ZQuery.prototype.ui = function (json, noreturn) {
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
    ZQuery.prototype.jcopy = function (json) {
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
    ZQuery.prototype.recss = function (cssn) {
        jex.each(cssn.split(','), function (i, n) {
            jex().recssa(n);
        });
    },
    ZQuery.prototype.recssa = function (cssn) {
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
    ZQuery.prototype.getaa = function (strid) {
        var strt = '';
        jex.each(strid.split(','), function (i, n) {
            strt = jex('#' + n).geta(ui.ui.all[n]);
        });
        return strt;
    },
    ZQuery.prototype.geta = function (json) {
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
    ZQuery.prototype.funmd = function (did) {
        if (jqueryex.ifmd == did || jqueryex.ifmd == 'msgb_0')
            return 0;
        return 1;
    },
    ZQuery.prototype.cls = function (clas) {
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
    ZQuery.prototype.inpstyle = function (json) {
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
    ZQuery.prototype.jalert = function (msg, ifzz, json, xx, yy) {
        json = json || {};
        msg = msg.replace(/erxxror/gi, '出错了');
        if (T && T.findObj(json.tobj || (jg_aj.sj.idc.split('_')[0] + '_弹窗'))) {
            json.msg = msg;
            json.menb = ifzz;
            json.tobj = jg_aj.sj.idc.split('_')[0] + '_弹窗';
            window.actt(json.tobj, { "弹窗": { msg: json.msg } });
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
    ZQuery.prototype.vali = function (lt) {
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
    ZQuery.prototype.stoppp = function (e) {
        var evt = e || window.event;
        if (evt)
            evt.stopPropagation ? evt.stopPropagation() : (evt.cancelBubble = true);
    },
    ZQuery.prototype.ccss = function (obj, cx, bg) {
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
    ZQuery.prototype.jgrepa = function (fn, fv, ret, fn2, fv2, fn3, fv3, fn4, fv4) {
        //json josn过滤，返回字符串数组值
        return this.jgrep(fn, fv, ret, fn2, fv2, fn3, fv3, fn4, fv4).split(',');
    },
    ZQuery.prototype.topr = function (n) {
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
    ZQuery.prototype.jsortj = function (sk, st) {
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
    ZQuery.prototype.jsort = function (sk, st) {
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
    ZQuery.prototype.jjoin = function (ja, jb) {
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
    ZQuery.prototype.ifequ = function (njson, fn, fv) {
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
            var str22 = (njson[fn] + '' + fv);
            if (window.ifeval ? eval(str22) : T.doeval(str22)) {
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
    ZQuery.prototype.jgrep = function (fn, fv, ret, fn2, fv2, fn3, fv3, fn4, fv4) {
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
    ZQuery.prototype.ifcheck = function () {
        //div按钮是否已选择
        if (this.attr('class').indexOf('y_') > -1)
            return 1;
        return 0;
    },
    ZQuery.prototype.mdown = function (e, obj, ncheck) {
        jqueryex.ifmd = jex(obj).attr('id');
        _setTimeout(function () { jqueryex.ifmd = 0; }, 500);
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
    ZQuery.prototype.uncheckd = function () {
        //div按钮取消选择
        if (this.attr('class'))
            this.attr('class', this.attr('class').replace(/y_/gi, "x_").replace(/z_/gi, "x_"));
        this.find("[class*='_']").each(function () {
            this.className = this.className.replace(/y_/gi, "x_").replace(/z_/gi, "x_");
        });
    },
    ZQuery.prototype.checkd = function () {
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
    ZQuery.prototype.week = function (s, bn, rn, cid) {
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
    ZQuery.prototype.dclk = function (s, cid, rn, sf) {
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
    ZQuery.prototype.fix = function (p) {
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
    ZQuery.prototype.showa = function () {
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
    ZQuery.prototype.hidea = function () {
        var wt = 26;
        jex(this).css({ width: '0px' }).hide();
        jex('#rtable').css({ 'width': wt + 'px' });
        jex('#rtable').fix({ r: 0, t: 49, f: 1 });
    },
    ZQuery.prototype.vale = function (attrn, c, sep) {
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
    ZQuery.prototype.mtsetid = function () {
        if (jex(this).attr('id') == '') {
            var tid = 'mt' + (Math.random() * 99999999 + '').split('.')[0];
            jex(this).attr('id', tid);
        }
        return jex(this).attr('id');
    },
    ZQuery.prototype.mtx = function () {
        return jex(this).offset().left;
    },
    ZQuery.prototype.mty = function () {
        return jex(this).offset().top;
    },
    ZQuery.prototype.mtxr = function () {
        return jex(this).offset().left + jex(this).outerWidth();
    },
    ZQuery.prototype.mtyb = function () {
        return jex(this).offset().top + jex(this).outerHeight();
    },
    ZQuery.prototype.heightsum = function () {
        var w = 0;
        jex(this).children().each(function () {
            w += jex(this).outerHeight();
        });
        return w;
    },
    ZQuery.prototype.widthsum = function () {
        var w = 0;
        jex(this).children().each(function () {
            w += jex(this).outerWidth();
        });
        return w;
    },
    ZQuery.prototype.delev = function (strv, strd) {
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
    ZQuery.prototype.getv = function (name, mrz, source) {
        var sjquery = jg_aj.sj.query;
        if (sjquery && typeof sjquery == 'object') {
            sjquery = JSON.stringify(window.jg_aj.sj.query).replace(/,/g, "&").replace(/:/g, "=").replace(/"/g, "").replace(/{/g, "").replace(/}/g, "");
        }
        var shref = source || sjquery || (window.location + "").replace(/;amp;/g, '&');
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
            var str = jex().getv('uri').replace(/\%3A/g, ':').replace(/\%2C/g, ',').replace(/\%27/g, "'");
            if (str.substring(0, 1) != "{")
                str = '{' + str + '}';
            var post_data = eval('(' + str + ')'); //T.doeval 无法做，因为换没有加载
            post_data[name] != undefined && (mrz = post_data[name]);
        }
        //var pathname=location.pathname;
        //if(name=='idc' || name=='eg')pathname=location.pathname.match(/^\/[^\/]+$/g)[0].substring(1);
        if ((mrz + '').indexOf('%') > -1)
            mrz = decodeURI(mrz);
        return mrz;
    },
    ZQuery.prototype.getas = function (n, uictn) {
        ui.ui.all[uictn].ca = '';
        for (var i = 0; i < n; i++) {
            ui.ui.all[uictn].ca += (i > 0 ? '`||' : '||');
        }
        return jex().geta(ui.ui.all[uictn]);
    },
    ZQuery.prototype.getnum = function (n, marg1, marg2) {
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
    ZQuery.prototype.getUrl = function (refername, v, source) {
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
    ZQuery.prototype.getcw = function () {
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
    ZQuery.prototype.getcwd = function () {
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
    ZQuery.prototype.getSM = function (typ) {
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
    ZQuery.prototype.getch = function () { return document.documentElement.clientHeight; },
    ZQuery.prototype.getsl = function () { return jex(document).scrollLeft(); },
    ZQuery.prototype.getst = function () { return jex(document).scrollTop(); },
    ZQuery.prototype.strzm = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    ZQuery.prototype.eachs = function (func) {
        var id = jex(this).attr('id');
        if (func != undefined)
            jex(this).children('[id^="' + id + '_"]').each(func);
        return jex(this).children('[id^="' + id + '_"]');
    },
    ZQuery.prototype.son = function () {
        var id = jex(this).attr('id');
        return jex(this).children('[id^="' + id + '_"]');
    },
    ZQuery.prototype.sson = function () {
        var id = jex(this).attr('id');
        return jex(this).children('[id^="s_' + id + '_"]');
    },
    ZQuery.prototype.son0 = function () {
        var id = jex(this).attr('id');
        return jex(this).son().children('[id^="' + id + '_"][id$="_0"]');
    },
    ZQuery.prototype.son1 = function () {
        var id = jex(this).attr('id');
        return jex(this).son().children('[id^="' + id + '_"][id$="_1"]');
    },
    ZQuery.prototype.son2 = function () {
        var id = jex(this).attr('id');
        return jex(this).son().children('[id^="' + id + '_"][id$="_2"]');
    },
    ZQuery.prototype.chdate = function (sdate) {
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
    ZQuery.prototype.datedel = function (sdate, s) {
        var dat = new Date(Date.parse(jex().chdate(sdate)) - s * 1000);
        return dat.getFullYear() + '-' + (dat.getMonth() + 1) + '-' + dat.getDate();
    },
    /**
     * 获得剩余时长
     * @param  {[int]} sec  剩余时间多少秒
     * @param  {[int]} op   默认是0，或者不传；大于0返回xx时xx分xx秒
     * @return {[string]}   返回换算后的时间
     */
    ZQuery.prototype.getshenyu = function (sec, op) {
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
    ZQuery.prototype.setRightBar = function (condiv, json) {
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
    ZQuery.prototype.setRightService = function () {
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
    ZQuery.prototype.gettimestamp = function (dt) {
        var dt = dt || jex().getdatetime();
        if (dt.indexOf("T", "") > -1)
            dt = dt.replace("T", " ");
        return new Date(dt).getTime();
    },
    ZQuery.prototype.getdatetime = function (s, msf, ifz) {
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
    ZQuery.prototype.getDayOfWeek = function (dt) {
        var dt = dt || db.gett();
        return new Date(dt).getDay();
    },
    ZQuery.prototype.getWeekStartDate = function (dt) {
        var dt = dt || db.gett();
        var dta = new Date(dt);
        if (dta.getDay() == 0) {
            return new Date(dta.getFullYear(), dta.getMonth(), (dta.getDate() - 7 - dta.getDay())).getTime() + 24 * 60 * 60 * 1000;
        }
        else {
            return new Date(dta.getFullYear(), dta.getMonth(), (dta.getDate() - dta.getDay())).getTime() + 24 * 60 * 60 * 1000;
        }
    },
    ZQuery.prototype.getMonthStartDate = function (dt) {
        var dt = dt || db.gett();
        var dta = new Date(dt);
        return new Date(dta.getFullYear(), dta.getMonth(), 1).getTime();
    },
    ZQuery.prototype.getMonthEndDate = function (dt) {
        var dt = dt || db.gett();
        var dta = new Date(dt);
        return new Date(dta.getFullYear(), dta.getMonth() + 1, 1).getTime() - 24 * 60 * 60 * 1000;
    },
    ZQuery.prototype.getWeekEndDate = function (dt) {
        var dt = dt || db.gett();
        var dta = new Date(dt);
        if (dta.getDay() == 0) {
            return new Date(dta.getFullYear(), dta.getMonth(), (dta.getDate() - dta.getDay())).getTime() + 24 * 60 * 60 * 1000;
        }
        else {
            return new Date(dta.getFullYear(), dta.getMonth(), (dta.getDate() + 7 - dta.getDay())).getTime() + 24 * 60 * 60 * 1000;
        }
    },
    ZQuery.prototype.getdatetimeago = function (ts, isdayd) {
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
    ZQuery.prototype.mye = function (e) { return e ? e : (window.event ? window.event : null); },
    ZQuery.prototype.e$ = function (e) { return mye(e).srcElement ? mye(e).srcElement : mye(e).target; },
    ZQuery.prototype.getex = function (e) { return mye(e).clientX + getsl(); },
    ZQuery.prototype.getey = function (e) { return mye(e).clientY + getst(); },
    ZQuery.prototype.getiframe = function (id, src, h) {
        //生成一个ifram
        h = h || '648px';
        //alert(src);
        return '<iframe id=' + id + ' name=' + id + '  src="' + src + '" scrolling="no" frameborder="0" marginheight="0" marginwidth="0" style="width:100%; height:' + h + '" ></iframe>';
    },
    ZQuery.prototype.getdiv = function (divid, p, bg, w, h, xx, yy, z, innerh, classn, pad) {
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
    ZQuery.prototype.zhezao = function (objid) {
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
    ZQuery.prototype.unselect = function (tg) {
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
    ZQuery.prototype._agent = navigator.userAgent.toLowerCase(),
    ZQuery.prototype.isTizen = function () {
        return this._agent.indexOf("tizen") >= 0;
    },
    ZQuery.prototype.isWindowsMobile = function () {
        return this._agent.indexOf("windows") >= 0 && this._agent.indexOf("mobile") >= 0 || this._agent.indexOf("iemobile") >= 0;
    },
    ZQuery.prototype.isIOS = function () {
        return this._agent.indexOf("ios") >= 0 || this._agent.indexOf("ipod") >= 0 || this._agent.indexOf("ipad") >= 0 || this._agent.indexOf("iphone") >= 0;
    },
    ZQuery.prototype.isIPAD = function () {
        return this._agent.indexOf("ipad") >= 0;
    },
    ZQuery.prototype.isFirefoxOS = function () {
        return !this.isAndroid() && this._agent.indexOf("firefox") >= 0 && this._agent.indexOf("mobile") >= 0;
    },
    ZQuery.prototype.isAndroid = function () {
        return this._agent.indexOf("android") >= 0;
    },
    ZQuery.prototype.isMobile = function () {
        return this.isAndroid() || this.isFirefoxOS() || this.isWindowsMobile() || this.isIOS();
    },
    ZQuery.prototype.isWeixin = function () {
        return (this._agent.match(/MicroMessenger/i) == "micromessenger" ? true : false);
    },
    ZQuery.prototype.isCardNo = function (code) {
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
    ZQuery.prototype.IsMobileNum = function (text) {
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
    ZQuery.prototype.IsMobileNumSer = function (jsons) {
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
    ZQuery.prototype.getWeekNumber = function (d) {
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
    ZQuery.prototype.delParam = function (url, paramKey) {
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
    ZQuery.prototype.randombt = function (min, max) {
        //范围内两者随机，换括最大值和最小值
        return Math.floor(min + Math.random() * (max - min));
    },
    /*数字类*/
    /*本地存储*/
    ZQuery.prototype.cookie = {
        set: function (name, value, ttl) {
            if (!window["windowjs"]) {
                if (ttl == undefined)
                    ttl = 1e3 * 3600 * 24 * 365;
                document.cookie = name + "=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT";
                var expires = new Date;
                expires.setTime(expires.getTime() + ttl);
                document.cookie = [name + "=" + value + "; ", "expires=" + expires.toGMTString() + "; ", "path=/"].join("");
            }
            else {
                egret.localStorage.setItem(name, value);
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
            }
            else {
                return egret.localStorage.getItem(name);
            }
            return undefined;
        },
        remove: function (name) {
            if (!window["windowjs"]) {
                var expires = new Date;
                expires.setTime(expires.getTime() - 1);
                document.cookie = name + "=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT";
            }
            else {
                egret.localStorage.removeItem(name);
            }
        }
    },
    //本地存储数据
    ZQuery.prototype.storage = window.localStorage ? {
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
    ZQuery.prototype.arrayUnique = function (a) {
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
    ZQuery.prototype.replaceAll = function (s, s1, s2) {
        return s.replace(new RegExp(s1, "gm"), s2);
    },
    /**
     * @method setStars
     * @description 星数评级
     * @param  {[int]} num 星数
     * @return {[String]}  返回生成的静态str
     */
    ZQuery.prototype.setStars = function (num) {
        var num = num || 0;
        var starStr = '';
        for (var i = 1; i <= num; i++) {
            starStr += '<img src="/css/xing.png" width="16%" style="margin:0 2%;"/>';
        }
        return starStr;
    },
    //解码
    ZQuery.prototype.html_decode = function (str) {
        var s = "";
        if (str.length == 0)
            return "";
        s = str.replace(/&lt;/g, "<");
        s = s.replace(/&gt;/g, ">");
        s = s.replace(/&amp;/g, "&");
        s = s.replace(/&nbsp;/g, "");
        return s;
    };
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
        if (typeof (Network) == 'undefined') {
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
        }
        else {
            var proms = Network[stype == "get" ? "httpget" : "httppost"](surl, encodeURI(sdata));
            proms.then(function (json) {
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
                .catch(function (err) {
                var XMLHttpRequest = err.xhr, textStatus = err.msg;
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
                json = eval(json.replace(/jpn/, ''));
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
            cp = Math.max(0, eval(grid.cpn[t] + (fx + "")));
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
if (jg_aj.sj.loading)
    jg_aj.tianji = jg_aj.sj.loading;
if (lurl.indexOf('https:') == 0) {
    htps = "https";
}
if (lurl.indexOf('http') == 0) {
    if (imgp == 'css/')
        imgp = '/css/';
}
if (window.js)
    windowjs = 1;
jg_aj.topproj = jg_aj.sj.idc.split('_')[0];
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
}
catch (e) { }
;
if (lurl.indexOf('usfrom=ios') > -1 || navig.safari) {
    if (document.getElementById("jgviewport")) {
        window.iscale = ",initial-scale=0.66";
        if (window.screen.height == 667)
            iscale = 0.778; //i6
        if (window.screen.height == 736)
            iscale = 0.778; //i6p 
        //在iphone和ipad上，无论你给viewport设的宽的是多少，如果没有指定默认的缩放值，则iphone和ipad会自动计算这个缩放值，以达到当前页面不会出现横向滚动条(或者说viewport的宽度就是屏幕的宽度)的目的。
        document.getElementById("jgviewport").content = "width=540, user-scalable=0";
    }
}
window.jg_main = function () {
    try {
        if (jex().getv('sp', 0) == 1) {
            var box6 = document.getElementById("tji-m-box6");
            box6.setAttribute('data-orientation', 'portrait');
        }
    }
    catch (e) { }
    ;
    window['sok'] = 1;
    if (jg_aj.sj.eg == 1) {
        jex('#tji-m-box6').show();
    }
    else {
        jex('#tji-m-box2,#tji-m-box3').show();
    }
    jg_aj.editm = jex().getv('editm', 0);
    jex('html,body').css('min-height', jex().getch() + 'px');
    if (!jex().isMobile() && jg_aj.sj.sp > 0) {
        jex('body').css({ 'width': '640px', 'margin': '0 auto' });
    }
    if (jex().getv('yxidc', '-1') != '-1') {
        jex('#tji-m-box2').css({ 'width': '100%', 'height': '100vh', 'z-index': '-2', 'border-radius': '0', 'top': '0', 'left': '0' });
        jex('#tji-m-box1,#tji-m-box4,#tji-m-box5').hide();
    }
    if (jex().getv('ref', '-1') != '-1' && jex("#ref_box").length == 0) {
        jex("body").append('<a id="ref_box" target="_self" href="' + decodeURIComponent(jex().getv('ref', '-1')) + '" style="position: absolute;left: 2%;top: 1%;width: 9%;height: 0;padding-bottom: 9%;z-index:999999;background:url(/css/backoringe.png) 50% 50%/100% no-repeat;"></a>');
    }
    if (jg_aj.sj && jg_aj.sj.close && jex().getv('role', '-1') == '-1') {
        //项目关闭
        jex('body').css('background', 'none').html('<div style="text-align:center;">' + jg_aj.sj.close + '</div>');
        return;
    }
    jg_msco2();
};
window.jg_msco2 = function () {
    try {
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            //判断是ios用户的时候执行某种操作
            window.webkit && window.webkit.messageHandlers.onPKLoading.postMessage('{}');
        }
        else if (/(Android)/i.test(navigator.userAgent)) {
            //判断是安卓用户的时候执行某种操作
            window.nativeApp && window.nativeApp.onPKLoading('{}');
        }
        else {
            //其他类型的时候执行某种操作
        }
    }
    catch (e) {
        console.log(e);
    }
    // window.nativeApp && window.nativeApp.onPKLoading && window.nativeApp.onPKLoading('{}');
    jaimain();
    if (jg_aj.sj.eg == 1) {
        egret.runEgret({ renderMode: "canvas", audioType: 0 });
        if (jex().getv("sp", 0) == 0)
            rewh();
    }
    else {
        if (jg_aj.sj.idc == 'jai_body') {
            egret.runEgret({ renderMode: "canvas", audioType: 0, calculateCanvasScaleFactor: function (context) {
                    var backingStore = context.backingStorePixelRatio ||
                        context.webkitBackingStorePixelRatio ||
                        context.mozBackingStorePixelRatio ||
                        context.msBackingStorePixelRatio ||
                        context.oBackingStorePixelRatio ||
                        context.backingStorePixelRatio || 1;
                    return (window.devicePixelRatio || 1) / backingStore;
                } });
            jex('#body_body').css('background', 'url(' + jg_aj.sj.bgimg + ')');
            //绑定点击事件
            jex('.tji-m-box4').on('click', function () {
                openDataBox(4);
            });
            try {
                if (buildapp) {
                    app = new buildapp(editor, formatter);
                    app.load();
                    app.resize();
                }
            }
            catch (e) { }
        }
        //
        //如果是h5延迟15秒后显示报错按钮
        _setTimeout(function () {
            jex('#fiBtnBox').show();
        }, 15000);
    }
    voiceplay();
};
window.voiceplay = function () {
    if (jg_aj.sj.bgm != "") {
        var bgmFloat = jg_aj.sj.bgmFloat || 'left';
        var bgmPos = (bgmFloat == 'left' || bgmFloat == 'right') ? ("top:10px;" + bgmFloat + ":10px") : ("left:" + bgmFloat.split(',')[0] + ";top:" + bgmFloat.split(',')[1]);
        if (jex("#imgMopen").length == 0) {
            jex("body").append("<div style='position:absolute;" + bgmPos + ";z-index:9999999'><img id='imgMopen' src='http://image.kxtui.com/pg/fi/15128/1512818894921.png'/><img id='imgMclose' src='http://image.kxtui.com/pg/fi/15128/1512818894370.png' style='display:none'/></div>");
            document.getElementById("imgMopen").addEventListener("click", function () {
                bgmEle.pause();
                jex("#imgMopen").hide();
                jex("#imgMclose").show();
            });
            document.getElementById("imgMclose").addEventListener("click", function () {
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
};
window.rewh = function () {
    var whqu = window.innerHeight - window.innerWidth;
    if (window.innerWidth < window.innerHeight) {
        jex("#bodybg").css({ 'width': window.innerHeight + 'px', 'height': window.innerWidth + 'px', 'transform': 'rotate(90deg)', 'top': whqu * .5 + 'px', 'left': -whqu * .5 + 'px' });
    }
};
/**
*
*/
window.box7Play = function () {
    var blurl = jex().getUrl('tidus', db.idus, lurl);
    blurl = jex().getUrl('roomid', db.gett(), blurl);
    blurl = blurl.replace("code=" + jex().getv('code', "-1"), "");
    blurl = blurl.replace("state=" + jex().getv('state', "-1"), "");
    window.location.href = blurl;
};
//window.document=window.document||{};
if (!window.jex().isMobile()) {
    window.document.onkeydown = function (e) {
        if (jex().mye(e).ctrlKey == true && jex().mye(e).keyCode == 81) {
            window.open(htps + '://' + jg_aj.wsip + ':8080/' + jg_aj.idus.replace(/α/, '-').replace(/β/, '_') + jex().getdatetime().substring(0, 15).replace(" ", "").replace(":", "") + ".html");
        }
        if (jex().mye(e).ctrlKey == true && jex().mye(e).keyCode == 73) {
            // var url = jex().getUrl('idc', sj.jui[T.findid(jg_aj.curproj + '_场景a')].pid);
            // url = jex().getUrl('eg', sj.clas[T.findid(jg_aj.curproj + '_场景a')].pid == 'tji-m-box6' ? 1 : '', url);
            // window.open(url)
        }
        if (jex().mye(e).ctrlKey == true && jex().mye(e).keyCode == 49) {
            e.preventDefault();
            if (crid && ceditv) {
                jex().jalert("<br><textarea id='ceditv' rows=8 cols=60 style='width:80%;'>" + ceditv + "</textarea><br><br>" + jex().ui({ w: 70, h: 30, z: 0, s: 0, ca: "完成|setEnValue()", class0: "x_b_f88712_f88712_fff_bd6000_bd6000_fff cent _f_14_b_200 _r_4" }), null, {}, null, 100);
            }
        }
    };
    window.setEnValue = function () {
        if (jex("[rid='" + crid + "'][en='" + cren + "']")[0].tagName == 'DIV' || jex("[rid='" + crid + "'][en='" + cren + "']")[0].tagName == 'div') {
            jex("[rid='" + crid + "'][en='" + cren + "']").html(jex('#ceditv').vale());
        }
        else {
            jex("[rid='" + crid + "'][en='" + cren + "']").val(jex('#ceditv').vale());
        }
        jex("[rid='" + crid + "'][en='" + cren + "']").attr('begineditf', 1).css("background", "#FFFF7E");
        jex().cls('ggk');
    };
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
                window.webkit && window.webkit.messageHandlers.onPKLoadFail.postMessage('{}');
            }
            else if (/(Android)/i.test(navigator.userAgent)) {
                //判断是安卓用户的时候执行某种操作
                window.nativeApp && window.nativeApp.onPKLoadFail('{}');
            }
            else {
                //其他类型的时候执行某种操作
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    console.log(JSON.stringify(errorTip));
};
console.log('navigator.userAgent: ' + navigator.userAgent);
function getTransformStyle(dom) {
    return "rotate(" + (dom._rotate || 0) + "deg) scaleX(" + (dom._scaleX == undefined ? 1 : dom._scaleX) + ") scaleY(" + (dom._scaleY == undefined ? 1 : dom._scaleY) + ")";
}
function getTransformOriginStyle(dom) {
    return (dom._anchorX == undefined ? 0.5 : dom._anchorX) * 100 + "% " + (dom._anchorY == undefined ? 0.5 : dom._anchorY) * 100 + "%";
}
function getTransformTranslate(dom) {
    var transform = dom.style.transform, ret = { x: 0, y: 0 };
    var formatArray = [
        { sign: 'translate(', si: 0 },
        { sign: 'translate3d(', si: 0 },
        { sign: 'matrix(', si: 4 },
        { sign: 'matrix3d(', si: 12 }
    ];
    for (var i = 0, len = formatArray.length; i < len; i++) {
        var f = formatArray[i], signi = transform.indexOf(f.sign);
        if (signi != -1) {
            var si = signi + f.sign.length, str = transform.substring(si, transform.indexOf(')', si)), stra = str.split(',');
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
    var _ctor = function (dom) {
        if (!dom) {
            console.log("\u4E0D\u5B58\u5728dom:" + dom + " in TJH5");
        }
        this.dom = dom;
        // 获取_rotate, _anchorX, _anchorY, _scaleX, _scaleY
        var transform = dom.style.transform, _rotate = transform.match(/rotate\(.*?deg\)/);
        this._rotate = _rotate ? parseFloat(_rotate[0].split('deg')[0].split('(')[1]) : 0;
        ['scaleX', 'scaleY'].forEach(function (p) {
            var v = transform.match(new RegExp(p + '\\(.*\\)'));
            this['_' + p] = v ? parseFloat(v[0].split(')')[0].split('(')[1]) : 1;
        }.bind(this));
        var origin = dom.style.transformOrigin.split(' ');
        ['_anchorX', '_anchorY'].forEach(function (p, i) {
            this[p] = origin[i] == undefined ? 0.5 : parseFloat(origin[p]);
            isNaN(this[p]) && (this[p] = 0.5);
        }.bind(this));
    };
    var p = _ctor.prototype;
    /* svg */
    p.__defineGetter__('svg', function () { return document.getElementById(this.id + "zisvg"); });
    /* bgsvg */
    p.__defineGetter__('bgsvg', function () { return document.getElementById(this.id + "zibgsvg"); });
    /* tag */
    p.__defineGetter__('tag', function () { return this.dom.tagName; });
    /* text */
    p.__defineSetter__('text', function (v) {
        var c = jex(this.dom).children("#" + this.name + "zitext_0");
        var clas = sj.clas[this.id] || {}, typ = clas.typ, ispassword = (clas.style || {}).input && this.name.includes('密码');
        if (typ == 12) {
            this.editor.setValue(v);
        }
        else if (ispassword) {
            c.val(v);
        }
        else if (c.length > 0) {
            c.text(v);
        }
        else {
            this.dom.innerText = v;
        }
    });
    p.__defineGetter__('text', function () {
        var c = jex(this.dom).children("#" + this.name + "zitext_0");
        var clas = sj.clas[this.id] || {}, typ = clas.typ, ispassword = (clas.style || {}).input && this.name.includes('密码'), ismutiline = clas.style.mutiline;
        return typ == 12 ? this.editor.getValue() : ispassword || ismutiline ? c.val() : c.text() || this.dom.innerText;
    });
    /* id */
    p.__defineGetter__('id', function () { return this.dom.id; });
    /* name */
    p.__defineGetter__('name', function () { return this.dom.id; });
    /* w */
    /* width */
    p.__defineGetter__('width', function () {
        var e = jex("#" + this.dom.id);
        return e == undefined ? 0 : e.width();
    });
    p.__defineSetter__('width', function (v) {
        var e = document.getElementById(this.dom.id); //jex(`#${this.dom.id}`).get(0);
        e.style.width = typeof (v) == 'string' && v[v.length - 1] == '%' ? v : parseFloat(v / jex(e.parentNode).width() * 100) + '%';
    });
    /* h */
    /* height */
    p.__defineGetter__('height', function () {
        var e = jex("#" + this.dom.id);
        return e == undefined ? 0 : e.height();
    });
    p.__defineSetter__('height', function (v) {
        var e = document.getElementById(this.dom.id); //jex(`#${this.dom.id}`).get(0);
        // 对于场景元件，用像素表示不用百分比，以解决输入时画面被挤压的问题
        e.style.height = typeof (v) == 'string' && v[v.length - 1] == '%' ? v : parseFloat(v / jex(e.parentNode).height() * 100) + '%';
    });
    /* x */
    p.__defineGetter__('x', function () {
        var parent = this.parent || { width: jex().getcw() };
        var xp = (parseFloat(this.dom.style.left) || 0); //drag后会是px
        if (this.dom.style.left.indexOf('%') > 0) {
            xp = (parseFloat(this.dom.style.left) || 0) * 0.01 * parent.width;
        }
        // let xp = (jex(this.dom).position()||{}).left || 0;
        return xp + getTransformTranslate(this.dom).x + this.width * this.anchorX; //  + getTransformTranslate(this.dom).x
    });
    p.__defineSetter__('x', function (v) {
        if (v == '{no}')
            return;
        var parent = this.parent || { width: jex().getcw() };
        this.dom.style.left = ((v - getTransformTranslate(this.dom).x - this.width * this.anchorX) / parent.width * 100).toFixed(2) + "%";
        //(new TimelineLite).set(this.dom, {x: 0});
    });
    /* y */
    p.__defineGetter__('y', function () {
        var parent = this.parent || { height: jex().getch() };
        var yp = (parseFloat(this.dom.style.top) || 0); //drag后会是px
        if (this.dom.style.top.indexOf('%') > 0) {
            yp = (parseFloat(this.dom.style.top) || 0) * 0.01 * parent.height;
        }
        // let yp = (jex(this.dom).position()||{}).top || 0;
        return yp + getTransformTranslate(this.dom).y + this.height * this.anchorY; //  + getTransformTranslate(this.dom).y
    });
    p.__defineSetter__('y', function (v) {
        if (v == '{no}')
            return;
        var parent = this.parent || { height: jex().getch() };
        this.dom.style.top = ((v - getTransformTranslate(this.dom).y - this.height * this.anchorY) / parent.height * 100).toFixed(2) + "%";
        //(new TimelineLite).set(this.dom, {y: 0});
    });
    /* $children */
    p.__defineGetter__('$children', function () {
        var ret = [], len = this.dom.children.length;
        for (var i = 0; i < len; i++)
            if (sj.obj[this.dom.children[i].id])
                ret.push(sj.obj[this.dom.children[i].id]);
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
        var url = jex(this.dom).css('background').match(/url\(.*\)/);
        url = url ? url[0].replace(/url\("?'?/, '').replace(/"?'?\)/, '') : '';
        var style = sj.clas[this.dom.id].style;
        return url || (style ? style.bgimg || '' : '');
    });
    /* bgcolor */
    p.__defineSetter__('bgcolor', function (v) { jex("#" + this.id + "zibgcolor").attr('fill', T.color(v, '#{r}{g}{b}')); });
    p.__defineGetter__('bgcolor', function () { return jex("#" + this.id + "zibgcolor").attr('fill') || ''; });
    /* textcolor */
    p.__defineSetter__('textcolor', function (v) { jex("#" + this.id + "zitext_0").css('color', T.color(v, '#{r}{g}{b}')); });
    p.__defineGetter__('textcolor', function () { return jex("#" + this.id + "zitext_0").css('color') || ''; });
    /* clas */
    // p.__defineGetter__('clas', function() { return sj.clas[this.id]; });
    /* methods */
    p.$setVisible = p.setVisible = function (visible) { this.dom.style.display = (visible ? (this._originDisplay || (sj.clas[this.name].style.input ? 'flex' : 'table')) : 'none'); };
    p.setChildIndex = function (child, index) { child.dom.style['z-index'] = index; };
    // p.getChildByName = name => jex(`#${name}`).get(0);
    p.getChildByName = function (name) {
        return this.$children.find(function (c) { return c.name == name; });
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
    var wsurl = (lurl.indexOf('/n.') == -1 ? location.hostname : location.hostname.replace('n.', 'a.')) || "";
    if (wsurl.indexOf('tool.egret') > -1 || wsurl.indexOf('127.0.0.1') > -1)
        wsurl = 'n.gac.kim:8018';
    var wsLink = (htps == 'http' && windowjs == 0 && window.ifeval != 0 ? 'ws' : 'wss') + '://' + (aj.wsip || jex().getv('wsip', wsurl)); //windowjs==2说明是微信小游戏 必须是 wss   ((htps.indexOf('https') > -1||windowjs==2 || window.ifeval==0) ? 'wss' : 'ws')
    wsLink.includes('yystatic') && (wsLink = ((htps.indexOf('https') > -1) ? 'wss' : 'ws') + '://120.78.78.204');
    var mrport = '8018';
    var ttaid = (jg_aj.roomid + '1'); // (jex().cookie.get("aid") || "a1");
    if (jg_aj.sj.port)
        mrport = jg_aj.sj.port + 0; // 2018/03/06  去掉端口0-3分流 (parseInt(ttaid.charAt(ttaid.search(/\d/))) % 3);
    // if (jg_aj.sj.nport) mrport = jg_aj.sj.port + (parseInt(jex().cookie.get("aid").charAt(jex().cookie.get("aid").search(/\d/))) % jg_aj.sj.nport);
    // 2018/07/03  改写端口映射规则
    if (jg_aj.sj.nport) {
        var aid2n = (funaid().split('_@_')[0]).split('').reduce(function (pre, cur) { return pre + cur.charCodeAt(); }, 0);
        mrport = jg_aj.sj.port + (aid2n % jg_aj.sj.nport);
    }
    if (lurl.indexOf('\/tja\/') > -1)
        mrport = '8018';
    if (aj.fport)
        mrport = aj.fport;
    if (wsLink.split(':').length == 2)
        wsLink += ":" + (aj.port || mrport);
    window.label && (window.label.text = wsLink);
    console.log("wsLink " + wsLink);
    var wsc = {};
    jg_aj.wsip = wsLink.split(':')[1].substring(2);
    jg_aj.port = parseInt(wsLink.split(':')[2]);
    if (!window.socket) {
        WebSocketool.i();
        window.socket.addEvent(function (e) {
            var rawStr = window.socket.socket.readUTF();
            var redata = rawStr.replace(/\},\{/g, '},\n{');
            if (rawStr.indexOf('"data"') == -1)
                redata = rawStr;
            console.log('收到:' + jex().getdatetime(0, 1) + redata); // !jex().isMobile() && 
            var stra = JSON.parse(rawStr);
            if (!(stra instanceof Array)) {
                var curidc = T.findid(stra._id, { onlyid: 1 });
                //stra=["",[{_id:curidc.split('-')[1],data:[{_id:stra._id,style:{x:stra.s[0]+"%",y:stra.s[1]+"%",time:stra.s[2]}}]}],curidc,-2,-2];
                //直接在这里找到obj并修改x,y可以进一步加速
                //console.log( JSON.stringify(stra));
                var obj = T.findObj(curidc);
                if (obj && !obj.isMoving) {
                    T.isEgret(obj) && egret.Tween.removeTweens(obj);
                    window["位移"]({ obj: obj, x: stra.s[0] + "%", y: stra.s[1] + "%", time: -1 }); //time: (stra.s[2] + '').split(".")[0] });
                }
                return;
            }
            var Si = parseInt(stra[3]);
            var gtCi = parseInt(stra[4]);
            if (gtCi > 0)
                jg_aj.okCi = gtCi;
            var rani = Math.random();
            if (rani < parseInt(jex().getv('duanxian', 0))) {
                console.log(rani + '模拟遗漏接收Si' + Si + 'Ci' + jg_aj.okCi);
                return;
            }
            if (Si > -1) {
                if (Si < jg_aj.Sneedi) {
                    jg_aj.Sneedi = Si + 1; //在保存_cod的时候，经常发生这种情况，所以增加这句
                    console.warn('在保存_cod的时候，经常发生这种情况，所以增加这句');
                    return;
                }
                else if (Si > jg_aj.Sneedi) {
                    csend(['resend', { idus: jg_aj.idus }, '']);
                }
                else {
                    jg_aj.Sneedi = Si + 1;
                }
            }
            if (jg_aj.reconnect && jg_aj.okCi == 2) {
                jg_aj.reconnect = false;
                console.log('重连，本次jui数据抛弃');
                return;
            }
            // T.tzwz中需要用到，如果传回来只有一个c且里面只有一个d
            stra[1] = stra[1] || [];
            jg_aj.tzwzp1 = stra[1].length == 1 && stra[1][0].data && stra[1][0].data.length == 1;
            jg_aj.stra0 = stra[0] = [].concat(stra[0]);
            jg_aj.stra1 = stra[1];
            if (jg_aj.idus == undefined && stra[0][2] && stra[0][2].includes('=')) {
                headev(stra[0][1] || ''); // 2018/07/06  改为即使错误也执行ev
                console.error('初始化idus前收到错误的信息，stra[0][2]:$1', stra[0][2]);
                return;
            }
            if (stra[0][1]) {
                if (typeof (stra[0][1]) == 'string') {
                    if (stra[0][1].length == 13 && stra[0][1].substring(0, 1) == 1) {
                        db.t = parseInt(stra[0][1]);
                        db.t0 = new Date().getTime();
                    }
                    else if (stra[0][1].includes(';;;')) {
                        headev(stra[0][1].split(';;;')[0]);
                        stra[0][1] = stra[0][1].split(';;;')[1];
                    }
                }
                else {
                    headev(stra[0][1], 1);
                }
            }
            if (stra[0][2]) {
                console.warn("\u6539\u53D8jg_aj.idus\uFF0Cjg_aj.idus: " + jg_aj.idus + "\uFF0C stra[0][2]: " + stra[0][2]);
                jg_aj.idus = jg_aj.idus || stra[0][2];
            }
            //sj.jui = sj.jui || {};
            if (typeof stra[1] == 'object' && stra[0][1] !== 'T.duibi()') {
                // T.mergea(sj.jui, stra[1]);
                stra[1].forEach(function (_jui, i) {
                    if (_jui.typ) {
                        sj.jui[_jui._id] = _jui;
                    }
                    else if (_jui._id.split('_')[1] != '无' && sj.jui[_jui._id]) {
                        //_jui._id.indexOf('_') == -1 && (_jui._id =  jg_aj.curproj+'_'+_jui._id );
                        //sj.jui[_jui._id] = sj.jui[_jui._id] || {}; 			
                        T.merge(sj.jui[_jui._id], _jui); //这时候新旧data都在sj.jui。 
                        var juidata = sj.jui[_jui._id].data;
                        if (juidata && juidata.length > _jui.data.length)
                            juidata = juidata.filter(function (d) { return _jui.data.some(function (dd) { return dd._id == d._id; }); }); //需要删除旧的多余的data。
                        stra[1][i] = T.dcopy(sj.jui[_jui._id], 'data'); //2018-12-16，lwf 不能去掉T.dcopy  否则旧的data会被juidata覆盖而失去	
                        stra[1][i].data = juidata;
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
                    if (window.crid)
                        T.duibi(stra[1], 1);
                    break;
                case 'dba':
                case "s":
                case "ps":
                case 'p':// 找出第一条jui的父亲
                    // alert('p')
                    var juia = stra[1];
                    if (juia.length > 0) {
                        if (stra[0][0].indexOf('s') > -1) {
                            if (stra[1][0].style && stra[1][0].style.noclas == 1 && stra[1][0].data && stra[1][0].data.length == 0) {
                            }
                            else {
                                stra[1] = getclass(stra[1]);
                            }
                        }
                        if (stra[0][0].indexOf('p') > -1) {
                            var pjui = sj.jui[stra[1][0].pid];
                            if (pjui)
                                stra[1].unshift(T.dcopy(pjui));
                            else
                                console.log("\u5728sj.jui\u4E2D\u627E\u4E0D\u5230" + pjui);
                        }
                    }
                case '':
                case 'jui':
                case 'not':
                default:
                    if (stra[0][0].indexOf("s:") == 0) {
                        var sjui = null, sstra = stra[0][0].substring(2).split(',');
                        for (var _sjui in sj.jui) {
                            if (sstra.includes(sj.jui[_sjui]._id.split('_')[1])) {
                                sjui = sj.jui[_sjui];
                                break;
                            }
                        }
                        if (sjui)
                            stra[1].push(sjui);
                    }
                    setJui(stra);
                    headev(stra[0][1] || '');
                    break;
            }
            // });
            if (stra[2] == '应用市场_body') {
                csend(["t", {}, "jai_天姬"]);
            }
            else if (stra[2] == 'jai_body') {
                csend(['', {}, jex().getv('yxidc', '应用市场_body')]);
            }
            else {
                csend();
            }
            if (jex('#jai_对话').html() == '对话')
                jex('#jai_对话').html('对话<div style="height:200px;overflow:auto;" id="jaimain"></div><input id="dhinp" type="text" onclick=jex().stoppp(); value="" style="position:absolute;left:0;bottom:0;width:480px" onkeypress="return onKeyPress(event)"><button type="button" onclick="word2word();jex().stoppp();" style="position:absolute;bottom:0;right:0">发送</button>');
        }, function (e) {
            ws = wsc = window.socket.socket;
            wsc.ifopen = 1;
            jg_aj.Sneedi = 1;
            jg_aj.Ci = 1;
            jg_aj.csenda = [];
            if (cb)
                cb();
        }, function (e) {
            wsc.ifclose = 1;
            wsc.ifopen = 0;
            try {
                if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                    //判断是ios用户的时候执行某种操作
                    window.webkit && window.webkit.messageHandlers.onPKExceptionFinish.postMessage('{}');
                }
                else if (/(Android)/i.test(navigator.userAgent)) {
                    //判断是安卓用户的时候执行某种操作
                    window.nativeApp && window.nativeApp.onPKExceptionFinish('{}');
                }
                else {
                    //其他类型的时候执行某种操作
                }
            }
            catch (e) {
                console.log(e);
            }
            console.log("ws closed" + ws.ifclose);
        }, function (e) {
            console.log('ws error:$1', e);
        });
    }
    window.socket.connect(wsLink);
    return wsc;
};
function getclass(json1, idclas) {
    var sobj = [json1[0]];
    var _loop_1 = function () {
        var pids = sobj.map(function (s) { return s._id; });
        sobj = T.objFilter(sj.jui, function (u) { return u.typ < 50 && pids.includes(u.pid); });
        json1 = json1.concat(sobj);
    };
    do {
        _loop_1();
    } while (sobj.length > 0);
    return json1;
}
// 2018/07/06  将解析ev的部分独立为一个方法
function headev(ev, bf) {
    if (jg_aj.uibuild == 3) {
        (ev + '').indexOf('{') == 0 && (ev = JSON.parse(ev));
        if (typeof ev == 'object') {
            var newev = ev;
            if (bf) {
                newev = {};
                for (var evi in ev) {
                    if (ev[evi].bf) {
                        newev[evi] = ev[evi];
                        delete ev[evi];
                    }
                }
            }
            var id = jg_aj.curproj + '_用户';
            if (jg_aj.stra1.length > 0)
                id = jg_aj.stra1[0]._id;
            if ((T.isEgret() || jg_aj.curbox == 'tji-m-box6') && !(id.includes('jai_'))) {
                var obj = T.findObj(id);
                Jui.getSingle().actt.apply(Jui.getSingle(), [obj, null, newev, 0]);
            }
            else {
                parseActt(id, newev, 0);
            }
        }
        else {
            (window.ifeval ? eval(ev) : T.doeval(ev));
        }
    }
    else {
        // console.error("等白鹭，延后100");
        _setTimeout(function () { headev(ev, bf); }, 500);
    }
}
jg_aj.straa = jg_aj.straa || [];
window.setJui = function (stra) {
    // alert('setJui')
    var stra1 = stra[1], stra0 = stra[0], stra2 = stra[2];
    if (jg_aj.uibuild == 1 || jg_aj.uibuild == 3) {
        var data = stra1.find(function (i) { return i._id.indexOf('_场景') > -1; });
        if (data && data.style && data.style.load && data.style.load != 1) {
            data.style.load = 1;
            jg_aj.uibuild = 2;
            Main.i.loading(data._id.split("场景")[1]);
        }
        else {
            jg_aj.uibuild = 3;
        }
    }
    jg_aj.uibuild == 3 && console.time && console.time('setJui');
    if (stra1[0] && stra1[0].typ > 50 && stra1[0].style.target == "tji-m-box6" && stra1[0].style.loading && jex().getv('eg', -1) != 1 && !loadingState && !stra1[0].loadingState) {
        loadingState = true;
        stra1[0].loadingState = true;
        Jui.getSingle().BuildUi(stra1[0], 1);
        jg_aj.uibuild = 0;
        Jui.getSingle().loading(stra1[0].style.loading["group"], function () { }, stra1[0].style.loading["resJson"] || "resource/default_jai.res.json");
    }
    if (typeof stra1 != "object" || stra0.includes('T.duibi()'))
        return;
    if (jg_aj.ready != 1 && stra1.length > 0 && stra1[0].typ == undefined && jex().getv('res', '') == '') {
        console.error('egret' + jg_aj.uibuild + '没准备好，或提前收到' + stra1.length);
        jg_aj.straa.push(stra);
        return;
    }
    if (jg_aj.uibuild == 3) {
        //    console.error("白鹭ok");
        if (jg_aj.sj.share == 1) {
            _setTimeout(function () {
                if (T._ctrl('a')["状态"] == 0 || T._ctrl('a')["状态"] == undefined) {
                    jex('#tji-m-box7').show();
                }
                if (T._ctrl('a')["状态"] >= 9) {
                    jex('.box7-arrow,.btn-invite').hide();
                    jex('#tji-m-box7,.btn-play,.tji-m-box7>p').show();
                }
                ;
            }, 2000);
        }
        if (stra1.length > 1 && stra1[0].typ > 50 && stra1[1].pid != stra1[0]._id) {
            // stra1.shift();
            if (stra0 instanceof Array) {
                stra0[1] == 'not' && (stra0[1] = '');
            }
            else {
                stra0 == 'not' && (stra0 = '');
            }
        }
        stra1.length == 2 && stra1[1].typ > 50 && stra1.splice(1, 1);
        if (stra2 && stra2.split('_')[0] != 'jai') {
            jg_aj.curproj = stra2.split('_')[0];
            console.log("jg_aj.curproj:" + jg_aj.curproj + "------------------");
            if (jg_aj.curproj.indexOf('-') > 0)
                jg_aj.curproj = jg_aj.curproj.split('-')[1];
        }
        if (stra1.some(function (i) { return i.style && i.style.target == 'tji-m-box6'; })) {
            jg_aj.curbox = 'tji-m-box6';
        }
        sj.curclas = {}; //本次clas集合
        if (stra1.length == 0)
            return;
        if ((T.isEgret() || jg_aj.curbox == 'tji-m-box6') && !(stra2 && stra2.includes('jai_'))) {
            parseJuia(stra0, stra1, {
                buildUIHandler: Jui.getSingle().BuildUi.bind(Jui.getSingle()),
                actHandler: function (d) {
                    var obj = sj.obj[d.id];
                    Jui.getSingle().act.apply(Jui.getSingle(), [{ obj: obj, actf: d.value, idx: d.idx }]);
                },
                acttHandler: function (d) {
                    var obj = sj.obj[d.id], pobj = obj && obj.parent;
                    Jui.getSingle().actt.apply(Jui.getSingle(), [obj, pobj, d.jui.actt, d.idx]);
                },
                ChildIndexHandler: function (d) {
                    try {
                        sj.obj[d.id] && sj.obj[d.id].parent && sj.obj[d.id].parent.setChildIndex(sj.obj[d.id], parseInt(d.value)), sj.obj[d.id]['oldz'] = d.value;
                    }
                    catch (error) {
                        console.log("当前操作对象：" + JSON.stringify(d));
                    }
                },
                funaHandler: function (d) {
                    var idx = d.idx;
                    var obj = sj.obj[d.id];
                    var funa = typeof (d.value) == 'object' ? d.value : { 'funa': d.value };
                    for (var i in funa)
                        (window.ifeval ? eval(funa[i]) : T.doeval(funa[i]));
                }
            });
        }
        else {
            //let parse = function () {
            parseJuia(stra0, stra1, {
                buildUIHandler: buildUI_h5,
                actHandler: function (d) { return parseAct(d.id, d.value, d.idx); },
                acttHandler: function (d) { return parseActt(d.id, d.value, d.idx); },
                ChildIndexHandler: function (d) { var obj = jex("#" + d.id).get(0); obj && (obj.style.zIndex = d.value); },
                funaHandler: function (d) {
                    var obj = sj.obj[d.id]; //jex(`#${d.id}`).get(0);
                    if (obj == undefined) {
                        console.log("H5 funaHandler \u5185obj\u4E3Aundefined, id:" + d.id);
                        return;
                    }
                    var funa = typeof (d.value) == 'object' ? d.value : { 'funa': d.value };
                    for (var i in funa)
                        (window.ifeval ? eval(funa[i]) : T.doeval(funa[i]));
                }
            });
            // H5端暂时直接把jai_body清掉
            var jaibody = document.getElementById('jai_body');
            // jaibody && jaibody.parentNode.removeChild(jaibody);
            jaibody && (jaibody.style.zIndex = -1);
            var yyscbody = document.getElementById('应用市场_body');
            yyscbody && (yyscbody.style.zIndex = 100);
        }
        if (jg_aj.ready != 1) {
            jg_aj.ready = 1;
            // console.error("补充执行 "+jg_aj.straa.length);
            jg_aj.straa.forEach(function (stra) { return setJui(stra); });
            jg_aj.straa = [];
        }
    }
    else {
        // console.error("等白鹭，延后100");
        _setTimeout(function () { setJui(stra); }, 100);
    }
    jg_aj.uibuild == 3 && console.time && console.timeEnd('setJui');
};
/**
 * load资源结束时请调用该方法
 */
var onFinishLoading = window.onFinishLoading = function () {
    console.log('加载资源完成 in onFinishLoading');
    try {
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            //判断是ios用户的时候执行某种操作 来汇
            window.webkit && window.webkit.messageHandlers.onPKFinishLoading.postMessage('{}');
        }
        else if (/(Android)/i.test(navigator.userAgent)) {
            //判断是安卓用户的时候执行某种操作
            window.nativeApp && window.nativeApp.onPKFinishLoading('{}');
        }
        else {
            //其他类型的时候执行某种操作
        }
    }
    catch (e) {
        console.log(e);
    }
};
var funaid = window.funaid = function (aid) {
    if (aid)
        jg_aj.idus = ""; //服务器指定新aid
    (jex().cookie.get('aid') || '').includes('%') && jex().cookie.set('aid', decodeURIComponent(jex().cookie.get('aid') || ''));
    aid = aid || jg_aj.sj.unionid || jg_aj.sj.openid || jex().cookie.get("aid") || T.aid();
    jex().cookie.set("aid", aid);
    jg_aj.aid = jex().getv('aid', aid); //url上指定的,是测试临时用的，不写入cookie
    return jg_aj.aid;
};
var fungetaid = window.fungetaid = function (aid, func) {
    if (aid)
        jg_aj.idus = ""; //服务器指定新aid
    (jex().cookie.get('aid') || '').includes('%') && jex().cookie.set('aid', decodeURIComponent(jex().cookie.get('aid') || ''));
    aid = aid || jg_aj.sj.unionid || jg_aj.sj.openid || jex().cookie.get("aid") || T.aid();
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
    if (func)
        func(jg_aj.aid);
    return jg_aj.aid;
    //}
};
var jaimain = window.jaimain = function (idc, aid, _aj) {
    var _caj = _aj || {};
    jex('#应用市场_body').length > 0 && jex('#应用市场_body').css('height', '100%');
    if (typeof (LOCAL_JUI) != 'undefined')
        return;
    if (window.ws && ws.connected && ws.ifopen == 0) {
        _setTimeout(function () { jaimain(idc, aid, _aj); }, 1000);
        return;
    }
    if (window.ws && ws.ifopen || !T.cd('jaimain', 1000)) {
        console.error("已阻止jaimain执行，因为：服务端可能多次返回调用jaimain的请求，造成'您的帐号在其他设备登录'的错误。");
        return;
    }
    var idclas = decodeURI(jex().getv('idc', idc || 'jai_body'));
    var mq = {};
    var mq1 = {};
    if (typeof (jg_wx) != 'undefined' && db.sj.fl && db.sj.fl.all[jg_wx.idfl] && db.sj.fl.all[jg_wx.idfl].cwxn) {
        mq = { "昵称": db.sj.fl.all[jg_wx.idfl].cwxn, "头像": db.sj.fl.all[jg_wx.idfl].chedimg };
    }
    if (jex().getv("nick", '') != '')
        mq["昵称"] = jex().getv("nick", '');
    //if (jex().getv("roomid", '') != '')//去掉这个判断 女神挖矿的url加了roomid=sg3则存储在了用户，当去掉roomid时候，无法恢复到1000，因此在客户端默认将 房间:'1000'发回来
    mq["房间"] = jex().getv("roomid", jex().getv("roomId", '1000')) + "";
    if (jex().getv("qu", '') != '')
        mq["区"] = parseInt(jex().getv("qu", 1000));
    if (jex().getv("from", '') != '')
        mq.from = jex().getv("from", ''); //2018.10.10增加from传参保存   -Tim
    if (jex().getv("code", '') != '')
        mq.code = jex().getv("code", ''); //2019.06.27增加code传参保存   -Fire	
    var uri = jex().getv("uri", '') || jex().getv("post_data", "");
    jg_aj.uri = "";
    if (uri != '') {
        //if(uri.indexOf('setsip')==0)uri='setsip:%27'+uri.split('setsip:')[1]+'%27';
        try {
            if (uri.indexOf(':') > 0 && uri.indexOf('{') != 0)
                uri = '{' + uri + '}';
            jg_aj.uri = mq.uri = (window.ifeval ? eval('(' + uri + ')') : JSON.parse(uri));
        }
        catch (err) {
            // 再decode一遍试试
            try {
                jg_aj.uri = mq.uri = (window.ifeval ? eval('(' + decodeURIComponent(uri) + ')') : JSON.parse(decodeURIComponent(uri)));
            }
            catch (err) {
                jg_aj.uri = mq.uri = uri;
            }
        }
    }
    if (jg_aj.sj.query && typeof jg_aj.sj.query == 'object') {
        jg_aj.uri = mq.uri = jg_aj.sj.query;
    }
    fungetaid(aid, function () {
        initws(function () {
            var sendobj = { aid: jg_aj.aid, '区': mq["区"], dba: ['用户', mq, '{idus:I}', { upsert: 1 }] };
            //if(jex().getv("logs", '')) sendobj.logs = jex().getv("logs", '');
            if (jg_aj.uri != "")
                sendobj.uri = jg_aj.uri; //将uri放入后端的 _I。弃用_my().uri
            jg_aj.roomid = mq["房间"] || '';
            if (jex().getv('usn', 0) != 0) {
                mq1 = { 'usn': jex().getv('usn', 0), 'ain': jex().getv('ain', 0) };
                sendobj.dba1 = ['控制容器a', mq1, '{_id:{$ne:null}}', { upsert: 1 }];
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
            var idc2bgcolor = {
                '熊猫爬树_图标': '#94cdff'
            };
            var _idc = decodeURI(jex().getv('idc', ''));
            if (idc2bgcolor[_idc]) {
                jex('#tji-m-box6').css('background', idc2bgcolor[_idc]);
            }
        }, _caj);
    });
};
var csend = window.csend = function (aj) {
    if (typeof (LOCAL_JUI) != 'undefined') {
        if (aj[1].id) {
            var ids = LOCAL_JUI.find(function (i) { return i._id == aj[1].id; }).ids;
            var arr = ids.map(function (i) { return LOCAL_JUI.find(function (k) { return k._id == i; }); });
            setJui(['', arr, '']);
            console.log('已有本地jui，直接setJui:' + JSON.stringify(arr));
        }
        return;
    }
    if (aj) {
        var curidc = aj[2];
        var data = aj[1] || {};
        if (curidc.indexOf('-') > 0 && sj.clas[curidc] && sj.clas[curidc].ridclas) {
            data.uri = data.uri || {};
            data.uri.cellpid = sj.clas[curidc].pid;
            if (T.cellid)
                data.uri.cellid = T.cellid.split('-')[0];
            if (sj.clas[curidc].idclas) {
                data.uri.appname = sj.clas[curidc].idclas.split('_')[0];
                aj[2] = curidc.split('-')[0] + '-' + sj.clas[curidc].ridclas;
            }
        }
        if (jg_aj.logout == 1) {
            window.actt(null, { "弹窗": { msg: '因为其他地方登录本账号，导致您已退出？确定重新登录吗？', btn: { '关闭': "刷新()", '确定': '1' } } });
            return;
        }
        if (jg_aj.heart) {
            egret.clearTimeout(jg_aj.heart);
            jg_aj.heart = null;
        }
        if (jex().getv('heart', jg_aj.sj.heart || '') == 1)
            jg_aj.heart = _setTimeout(function () { csend(["t", {}, "jai_天姬"]); }, 15000);
        if (aj[0] == 'ds' || aj[0] == 'ss') {
            var str = JSON.stringify(aj);
            console.log('csend(' + str + ')');
            if (ws.connected) {
                ws.writeUTF(str);
                ws.flush(str);
            }
            else {
                window.socket.close();
                jg_aj.reconnect = true;
                jaimain('login');
            }
            return;
        }
        if (jex().getv('res', '') != '')
            aj[1].res = jex().getv('res', '');
        var curtx = jex.trim(jex("input[t='editt'][en='tx']").val());
        if (curtx)
            aj[1].arg = curtx;
        if (aj[0] == 'resend') {
            //jg_aj.Ci = -Math.floor(Math.random(1000));
        }
        else {
            jg_aj.Ci++;
            aj[3] = jg_aj.Sneedi; //暂无作用
            aj[4] = jg_aj.Ci;
            if (aj[0] == 't' && jg_aj.csenda.length > 0) {
                //防止浏览器在后台的时候，时间变不正常，多个心跳不能加入缓存，
            }
            else {
                jg_aj.csenda.push(aj); //全部放入缓存
            }
        }
    }
    if (jg_aj.csenda.length > 0 && ((jg_aj.okCi + 1) >= jg_aj.csenda[0][4] || (new Date().getTime() - jg_aj.csendtime) >= 2000)) {
        aj = jg_aj.csenda.splice(0, 1)[0];
        if (jex().getv("logs", '') != '')
            aj[1].logs = jex().getv("logs", ''); // || (egret && egret.Capabilities.runtimeType!="web")
        var str = JSON.stringify(aj);
        console.log('〓〓〓' + jex().getdatetime(0, 1) + ' csend(' + str + ')'); //!jex().isMobile() && 
        if (str.indexOf('["",{},') == 0)
            str = "[" + str.substring(7);
        //if(aj[0]=='t')jg_aj.csendtime=new Date().getTime();
        jg_aj.csendtime = new Date().getTime();
        try {
            if (!ws || ws.connected) {
                //ws.send(str);
                waitForConnection(function () {
                    ws.writeUTF(str);
                    ws.flush(str);
                }, 500);
            }
            else {
                window.socket.close();
                jg_aj.reconnect = true;
                jaimain('login');
            }
        }
        catch (e) {
            window.socket.close();
            jg_aj.reconnect = true;
            jaimain('login');
        }
    }
    else {
        // alert('因为在等"' + (jg_aj.Ci) + '"返回，所以只是csenda.push(' + JSON.stringify(aj) + ')')
        if (aj)
            console.log('csend ' + JSON.stringify(aj) + ' 因为在等Ci="' + (jg_aj.Ci) + '" 所以只是csenda.push ');
    }
};
function waitForConnection(callback, interval) {
    // if (ws.readyState === 1) { // 白鹭里没这个东西
    if (true) {
        callback();
    }
    else {
        // optional: implement backoff for interval here  
        _setTimeout(function () {
            waitForConnection(callback, interval);
        }, interval);
    }
}
var isHengPing = window.isHengPing = function () {
    return jex().getcw() > jex().getch();
};
var setWindowReSize = window.setWindowReSize = function () {
    window.onresize = function () {
        Main && Main.i && Main.i.setScaleMode && Main.i.setScaleMode();
    };
};
/**
 * 返回jui森林
 * @param {Array.<Object>} juia - jui数组（该数组应确保父元件总在子元件前面）
 * @return {Object}
 */
var JuiForest = (function () {
    // 构造函数
    var _ctor = function (juia) {
        this.treeRoots = [];
        juia = [].concat(juia);
        while (juia.length) {
            var jui = juia.shift();
            this.treeRoots.push({ jui: jui, children: _getJuiChildrenNode(jui, juia) });
        }
    };
    var p = _ctor.prototype;
    /**
     * 按层遍历森林
     * @param {Function} onVisitNode - 形如(childJui, preArr) => preArr  遍历每一个节点的回调
     * @param {Function} onVisitLevelEnd - 形如(preArr, parentJui) => undefined  遍历一层后的回调
     */
    p.traverseByLevel = function (onVisitNode, onVisitLevelEnd) {
        for (var i = 0, l = this.treeRoots.length; i < l; i++) {
            var root = this.treeRoots[i];
            onVisitLevelEnd(onVisitNode(root.jui, []), root.jui);
            _traveseByLevel(root, onVisitNode, onVisitLevelEnd);
        }
    };
    function _traveseByLevel(parentNode, onVisitNode, onVisitLevelEnd) {
        onVisitLevelEnd(parentNode.children.reduce(function (pre, cur) { return onVisitNode(cur.jui, pre); }, []), parentNode.jui);
        parentNode.children.forEach(function (c) { return _traveseByLevel(c, onVisitNode, onVisitLevelEnd); });
    }
    function _getJuiChildrenNode(jui, juia) {
        var ret = [];
        for (var i = 0; i < juia.length; i++) {
            if (juia[i].pid == jui._id) {
                var child = juia.splice(i, 1)[0];
                ret.push({ jui: child, children: _getJuiChildrenNode(child, juia) });
                i--;
            }
        }
        return ret;
    }
    return _ctor;
}());
function band() { }
function getband(pid, vv, jui, pclas, i) {
    var ret = { _id: pid, pid: pid, pclasid: pclas._id, style: {} }; //
    if (vv != undefined) {
        vv = vv + '';
        if (vv.indexOf("http:") == 0 || ['_png', '_jpg', '.png', '.jpg'].some(function (s) { return vv.substr(vv.length - s.length) == s; })) {
            if (jui.style.input == 1) {
                ret.ca = vv;
            }
            else {
                ret.style.bgimg = vv;
            }
        }
        else {
            ret.ca = vv;
        }
    }
    return ret;
}
window.getbands = function (ret, vv, jui, pclas, i) {
    var jband = jui.actt && jui.actt.band || jui.style.band;
    if (jband) {
        var _vv = (window.ifeval ? eval(jband) : T.doeval(jband, pclas));
        if (pclas)
            if ((_vv + '' == 'NaN') || (_vv + '' == 'undefined')) {
                pclas = sj.clas[pclas.pid];
                if (pclas)
                    _vv = (window.ifeval ? eval(jband) : T.doeval(jband, pclas));
            }
        _vv = [].concat(_vv);
        for (var ii in jui.style) {
            if (typeof jui.style[ii] == "string" && /\{v/.test(jui.style[ii] + '')) {
                ret.style[ii] = replacev(jui.style[ii], _vv);
                if (ii == 'ca')
                    ret.ca = ret.style[ii];
            }
            else {
                if (/\{v/.test(JSON.stringify(jui.style[ii]))) {
                    ret.style[ii] = ret.style[ii] || {};
                    for (var iii in jui.style[ii]) {
                        if (typeof jui.style[ii][iii] == "string")
                            ret.style[ii][iii] = replacev(jui.style[ii][iii], _vv);
                    }
                }
            }
        }
    }
    return ret;
};
function replacev(str, _vv) {
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
    var defaultHandler = function () { return console.error("\u5B58\u5728\u672A\u5B9E\u73B0\u7684handler in parseJuia"); };
    var hdr = {};
    var p, iii = 0;
    var afterDo = { ChildIndex: [], act: [], actt: [], tx: [], funa: [] };
    for (p in afterDo)
        hdr[p + "Handler"] = defaultHandler;
    T.merge(hdr, handlers);
    var _juia = [].concat(juia);
    if (stra0[1] == 'not')
        _juia.shift(); // not事件不处理第一个jui
    var upda = [];
    if (stra0[1] && (stra0[1] + '').indexOf('upda:') >= 0)
        upda = eval(stra0[1].split(';')[1]);
    var juiForest = new JuiForest(_juia);
    var onVisitNode = function (_jui, pre) {
        _jui.style = _jui.style || {};
        if (_jui.ca && _jui.ca.indexOf("{") > -1)
            _jui.style.caFormat = _jui.ca;
        //===lwf 实现自动 band
        if ((!_jui.data || _jui.needband) && _jui.style.needband != '-1') {
            var pclasa = [];
            if (!['应用市场_应用容器', jg_aj.sj.idc].includes(_jui.pid) && !['弹窗', '场景a', '场景b'].includes(_jui.pid.split('_')[1]) || jg_aj.curproj == '应用市场') {
                pclasa = T.findids(_jui.pid, { json: sj.curclas }); //有可能吧很多没用的数据找回来			 
            }
            for (var i = 0; i < pclasa.length; i++) {
                var pidn = pclasa[i];
                var pclas = sj.clas[pidn];
                if (pclas && pidn.indexOf('-') > 0) {
                    var pclasname = pidn.split('_')[1];
                    var clasname = _jui._id.split('_')[1];
                    var _clasname = clasname.indexOf(pclasname) == 0 ? clasname.replace(pclasname, '') : clasname;
                    if (pclas.pclasid && sj.curclas[pclas.pid]) {
                        pclas = sj.clas[pclas.pid];
                        pclasname = pclas._id.split('_')[1];
                        _clasname = clasname.indexOf(pclasname) == 0 ? clasname.replace(pclasname, '') : clasname;
                        if (pclas && pclas.pclasid && sj.curclas[pclas.pid]) {
                            pclas = sj.curclas[pclas.pid];
                            pclasname = pclas._id.split('_')[1];
                            _clasname = clasname.indexOf(pclasname) == 0 ? clasname.replace(pclasname, '') : clasname;
                        }
                    }
                    _jui.needband = 1;
                    if (i == 0)
                        _jui.data = []; //2019.1.15重新清空				 
                    _jui.data.push(getband(pidn.split('-')[0], pclas[_clasname], _jui, pclas, i)); //找到对应相关属性 元件名称关联方式
                }
            }
        }
        //===========
        var _hecJuia = [_jui];
        if (_jui.data && _jui.data.length > 0) {
            //if(_jui.data[0]._id)_hecJuia = _jui.data.map(d => T.hec(_jui, d))//里面有做getbands()只要 actt.band有则会做
            if (_jui.data[0]._id) {
                _hecJuia = [];
                for (var i = 0; i < _jui.data.length; i++) {
                    var d = _jui.data[i];
                    _hecJuia.push(T.hec(_jui, d, i));
                }
            }
        }
        else if (_jui.style && _jui.style.noclas == 1)
            _hecJuia = []; //noclas=1确保不出现 无d的元件
        _hecJuia.forEach(function (ui, idx) {
            if (ui._id.indexOf("removed") > -1) {
                var oidObj = window["T"].objFilter(sj.obj, function (o) { return o.name == ui._id; })[0];
                if (oidObj) {
                    ui._id = oidObj.oid;
                    oidObj.name = ui._id;
                }
                else {
                    ui._id = 'a' + (ui.idname || db.getrd(5)) + '-' + ui._id.split('-')[1];
                }
            }
            if (ui.style.dele == 1) {
                T.removeObj(T.findObj(ui._id));
                return;
            } //删除
            sj.curclas[ui._id] = ui; //指定upda中没有，也需要保存到
            sj.clas[ui._id] = ui;
            if (upda && upda.length > 0) {
                if (upda.indexOf(ui._id.split('_')[1]) == -1)
                    return;
            }
            var ret = hdr.buildUIHandler(ui); // 具体生成一个jui
            typeof (ret) == 'string' && pre.push({ id: ui._id, pid: ui.pid, ret: ret, jui: ui });
            if (ui.style.title && ui.ca && !ui.style.hideCa && !ui.style.title.static && !T.isEgret()) {
                ui['funa'] = ui['funa'] || {};
                ui['funa']["title位移"] = "doAct({obj:new TJH5(document.getElementById('" + ui._id + "zititle_0')), \u52A8\u4F5C:'tween', y:'-0.3*{h}', time:300})";
            }
            for (var p_1 in afterDo)
                ui[p_1] && Object.keys(ui[p_1]).length > 0 && afterDo[p_1].push({ id: ui._id, value: ui[p_1], jui: ui, idx: idx }); // 将该jui的延后处理属性存入数组
            var ChildIndex = ui.style.ChildIndex || ui.style.z;
            ChildIndex != undefined && afterDo.ChildIndex.push({ id: ui._id, value: ChildIndex });
        });
        return pre;
    };
    var isEgret = 0;
    var onVisitLevelEnd = function (arr, parentJui) {
        if (arr.length == 0)
            return;
        var str = '', juia = [], pid = T.findid(arr[0].pid) || 'body_body';
        var createTJH5 = function (pid, juia) {
            if (!T.isEgret(sj.obj[pid]) || pid == 'body_body') {
                //				document.getElementById(pid == 'body_body' ? 'body_body' : pid).innerHTML = str;
                if (juia[0] && juia[0].afterdiv) {
                    jex(jex("[id^='" + juia[0].afterdiv + "']")[0]).after('<div id=' + juia[0].afterdiv + '_s>' + str + "</div>");
                }
                else {
                    jex(pid == 'body_body' ? '#body_body' : "#" + pid).append(str);
                }
                juia.forEach(function (jui) {
                    var id = jui._id;
                    var dom = document.getElementById(id);
                    if (!dom) {
                        //console.log(`找不到dom，id:${id}`);
                        return;
                    }
                    var obj = sj.obj[id] = sj.obj[id] ? (sj.obj[id].dom = dom, sj.obj[id]) : new TJH5(dom);
                    // 记录obj原始的display（如果是none，比如vi：0）则不记录
                    obj._originDisplay = jex(obj.dom).css('display') == "none" ? (obj._originDisplay || "") : jex(obj.dom).css('display');
                    var style = jui.style;
                    if (style && style.json && style.png) {
                        obj.janimation = new T.Janimation(jg_aj.res[jui.style.png], jg_aj.res[jui.style.json], id, function () {
                            obj.janimation.playAction(0, 0, 1);
                        });
                    }
                    // 特别处理typ 12（代码编辑器，目前仅在H5实现）
                    // 代码编辑器实现依赖于codemirror.js、javascript.js、codemirror.css
                    if (jui.typ == 12 && !T.isEgret(obj)) {
                        if (typeof (CodeMirror) == 'undefined') {
                            console.error("\u89E3\u6790typ12\u7684\u5143\u4EF6:" + obj.id + "\u65F6\u51FA\u9519\uFF0C\u6587\u4EF6codemirror.js\u672A\u88AB\u52A0\u8F7D");
                        }
                        else {
                            // 直接清掉对象中的html
                            obj.dom.innerHTML = "<textarea id=\"" + id + "zitext_0\"></textarea>";
                            var editor = obj.editor = CodeMirror.fromTextArea(document.querySelector("#" + id + "zitext_0"), {
                                mode: "javascript",
                                lineNumbers: true,
                                lineWrapping: true,
                                foldGutter: true,
                                gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
                            });
                            editor.foldCode(CodeMirror.Pos(0, 0));
                            editor.setSize('100%', '100%');
                            editor.setValue(jui.ca || '');
                            editor.setOption("extraKeys", {
                                "Ctrl-Enter": function (cm) {
                                    T.func(obj.id, { ev: 13 });
                                },
                                "Shift-Alt-F": function (cm) {
                                    var range = { from: cm.getCursor(true), to: cm.getCursor(false) };
                                    cm.autoFormatRange(range.from, range.to);
                                },
                                "Ctrl-/": function (cm) {
                                    console.log("ctrl-/，cm:", cm);
                                    var isComment = true;
                                    for (var i = cm.getCursor(true).line; i <= cm.getCursor(false).line; i++) {
                                        if (jex.trim(cm.getLine(i)).substr(0, 2) != '//') {
                                            isComment = false;
                                            break;
                                        }
                                    }
                                    var range = { from: cm.getCursor(true), to: cm.getCursor(false) };
                                    if (!isComment) {
                                        cm.lineComment(range.from, range.to);
                                    }
                                    else {
                                        cm.uncomment(range.from, range.to);
                                    }
                                }
                            });
                        }
                    }
                    // 如果有fun则执行
                    if (jui.fun) {
                        if (typeof jui.fun == "string") {
                            (window.ifeval ? eval(jui.fun) : T.doeval(jui.fun));
                        }
                        else {
                            parseActt(id, jui.fun);
                        }
                    }
                });
            }
            else {
                if (isEgret == 0)
                    isEgret = 1;
            }
        };
        arr.forEach(function (d) {
            var dpid = d.pid != 'body_body' ? T.findid(d.pid) : 'body_body';
            if (dpid == pid) {
                // ida.push(d.id);
                juia.push(d.jui);
                str += d.ret;
            }
            else {
                createTJH5(pid, juia);
                pid = dpid;
                str = d.ret;
                juia = [d.jui];
            }
        });
        createTJH5(pid, juia);
    };
    juiForest.traverseByLevel(onVisitNode, onVisitLevelEnd);
    for (p in afterDo) {
        var adp = afterDo[p];
        for (var i = adp.length; i--;)
            hdr[p + "Handler"](adp[i]);
    }
}
function buildUI_h5(jui) {
    'use strict';
    var str = "", type = jui.typ;
    if (type) {
        var typ = type;
        var class0 = jui.class0 || '';
        var style_1 = jui.style = jui.style || {};
        style_1.bgcolor == 'false' && (style_1.bgcolor = false); // 兼容字符串false
        var id = jui._id;
        if (type >= 54) {
            jg_aj.opid = id;
            if (style_1.target) {
                var curscene = T.findObj({ include: [jg_aj.curproj + '_场景'], exclude: ['应用市场', 'jai'] });
                curscene && T.removeObj(curscene);
            }
            else {
                T.removeChildren(sj.obj['应用市场_body']);
            }
        }
        if (style_1.keep) {
            var yjm = id.split('-')[1] || id;
            T.findids(yjm).forEach(function (o) { return T.removeObj(o); });
        }
        var isScroll = jui.actt && jui.actt['滑动']; // 是否有滑动
        if (isScroll) {
            var hd_1 = jui.actt['滑动'];
            ['x', 'y'].forEach(function (p) { return style_1[p] = hd_1[p] || style_1[p] || '50%'; });
            ['w', 'h'].forEach(function (p) { return style_1[p] = hd_1[p] || style_1[p] || '100%'; });
        }
        var stylea = [];
        jui.funa && sj.obj[id] && JSON.stringify(jui.funa).includes('tzwz') && sj.obj[id].removeChildren(); // 如果发现funa中有tzwz，自动清理容器内容
        type == 53 && (jui.pid = jg_aj.curproj + "_\u573A\u666F" + T.dqcj());
        var pid = T.findid(jui.pid);
        (type == 51 || type == 52) && (pid = jui.pid = 'body_body');
        if (style_1.target) {
            jex("#" + id).length > 0 && style_1.target != jg_aj.curbox && T.removeObj(sj.obj[id]);
            pid = jui.pid = jg_aj.curbox = style_1.target;
            if (type >= 54) {
                var sonobj = document.getElementById(pid).children;
                for (var _i = 0, sonobj_1 = sonobj; _i < sonobj_1.length; _i++) {
                    var n = sonobj_1[_i];
                    if (n.id)
                        if (n.id.indexOf('_场景') > -1 || n.id.indexOf(jg_aj.curproj + '_') == -1)
                            n.remove();
                }
            }
            jex('#tji-m-box1').addClass('layleft');
            jex('#' + pid).show();
            jex('#' + pid).css('visibility', 'visible');
            ['tji-m-box2', 'tji-m-box3', 'tji-m-box6'].forEach(function (i) { return i != style_1.target ? jex("#" + i).addClass('layright') : jex("#" + i).removeClass('layright'); });
        }
        var tag = jui.tag || (type < 50 ? sj.obj[pid] ? sj.obj[pid].tag : 'div' : 'div');
        var obj = { name: id };
        var pobj = sj.obj[pid] || { x: 0, y: 0, width: jex().getcw(), height: jex().getch(), $children: [] };
        jui.sid = type >= 54 ? id : sj.clas[pid] ? sj.clas[pid].sid : '应用市场_body';
        var sw = type >= 54 ? document.getElementById(pid).width : sj.obj[jui.sid] ? sj.obj[jui.sid].width : jex().getcw();
        var sh = type >= 54 ? document.getElementById(pid).height : sj.obj[jui.sid] ? sj.obj[jui.sid].height : jex().getch();
        var _w = obj.width = Math.max(T.deval('w', pobj, style_1, { obj: obj, sw: sw, sh: sh }), T.deval('minw', pobj, { minw: style_1.minwidth }, { obj: obj, sw: sw, sh: sh })); // 宽度（像素）
        jg_aj.curbox == 'tji-m-box3' && id.includes('游戏窗') && (_w = pobj.width);
        var _h = obj.height = Math.max(T.deval('h', pobj, style_1, { obj: obj, sw: sw, sh: sh }), T.deval('minh', pobj, { minh: style_1.minheight }, { obj: obj, sw: sw, sh: sh })); // 高度（像素）
        var _x = obj.x = T.deval('x', pobj, style_1, { obj: obj, sw: sw, sh: sh }); // x轴坐标（像素）
        var _y = obj.y = T.deval('y', pobj, style_1, { obj: obj, sw: sw, sh: sh }); // y轴坐标（像素）
        var _anchorX = style_1.anchorOffsetX == undefined ? 0.5 : T.deval('anchorOffsetX', pobj, style_1, { obj: obj, sw: sw, sh: sh }) / _w; // x轴锚点，通过transform-origin实现
        var _anchorY = style_1.anchorOffsetY == undefined ? 0.5 : T.deval('anchorOffsetY', pobj, style_1, { obj: obj, sw: sw, sh: sh }) / _h; // y轴锚点，通过transform-origin实现
        if (_anchorX != 0.5 || _anchorY != 0.5)
            stylea.push({ key: 'transform-origin', value: getTransformOriginStyle({ id: id, _anchorX: _anchorX, _anchorY: _anchorY }) });
        var _rotate = style_1.rotation || 0; // 旋转角度，通过transform实现
        var _scaleX = style_1.scaleX == undefined ? 1 : style_1.scaleX; // x轴比例，通过transform实现
        var _scaleY = style_1.scaleY == undefined ? 1 : style_1.scaleY; // y轴比例，通过transform实现
        if (_rotate != 0 || _scaleX != 1 || _scaleY != 1)
            stylea.push({ key: 'transform', value: getTransformStyle({ id: id, _rotate: _rotate, _scaleX: _scaleX, _scaleY: _scaleY }) });
        (style_1.right == undefined && style_1.left == undefined) && stylea.push({ key: 'left', value: ((_x - _anchorX * _w) / pobj.width * 100).toFixed(2) + "%" }); // 换算为百分比
        (style_1.top == undefined && style_1.bottom == undefined) && stylea.push({ key: 'top', value: ((_y - _anchorY * _h) / pobj.height * 100).toFixed(2) + "%" });
        style_1.width == undefined && stylea.push({ key: 'width', value: pobj.width ? (_w / pobj.width * 100).toFixed(2) + "%" : _w + "px" }); // 对于场景元件，用像素表示不用百分比，以解决输入时画面被挤压的问题
        style_1.height == undefined && stylea.push({ key: 'height', value: pobj.height ? (_h / pobj.height * 100).toFixed(2) + "%" : _h + "px" });
        // stylea.push({ key: 'height', value: id.includes('场景') ? `${_h}px` : `${(_h / pobj.height * 100).toFixed(2)}%` });
        //let visible = style.vi != undefined ? style.vi*1 : style.visible;
        var display = style_1.display || (style_1.input ? 'flex' : 'table');
        (isScroll || type == 51 || type == 52 || id.includes('jai_body')) && (display = 'block');
        //visible == undefined && (visible = true);
        //!(((visible + '') != '0') && ((visible + '') != 'false')) && (visible = false);
        style_1.display == undefined && stylea.push({ key: 'display', value: style_1.display || ((0 == style_1.vi || false == style_1.vi) ? 'none' : display) });
        (style_1.opacity == undefined && style_1.alpha != undefined) && stylea.push({ key: 'opacity', value: style_1.alpha });
        style_1.overflow == undefined && stylea.push({ key: 'overflow', value: style_1.mask ? 'hidden' : 'initial' });
        // 当有设置滚动时，用background-color来实现bgcolor（用svg的话，滚动时，下面就没背景色了）
        (style_1.line == undefined || isScroll) && stylea.push({ key: 'background-color', value: T.color(style_1.bgcolor, '#{r}{g}{b}') || '' });
        style_1.border && stylea.push({ key: 'border', value: 'solid 1px ' + (T.color(style_1.borderColor, '#{r}{g}{b}') || "#ffffff") });
        style_1.mask && style_1.mask.type == 1 && stylea.push({ key: 'border-radius', value: (style_1.mask.yuanjiao || 10) + "px" });
        (style_1.float == undefined && style_1.position == undefined) && stylea.push({ key: 'position', value: 'absolute' });
        var bgimg = '';
        if (style_1.bgimg) {
            bgimg = T.getResUrl(style_1.bgimg.includes('_') && style_1.bgimg.length < 20 && jg_aj.res[style_1.bgimg] ? jg_aj.res[style_1.bgimg] : style_1.bgimg);
            bgimg && !bgimg.includes('svg') && stylea.push({ key: 'background', value: "url(" + bgimg + ") 50% 50%/100% 100%" });
        }
        var bgcolor = T.color(style_1.bgcolor, '#{r}{g}{b}') || '';
        var hasIcon = style_1.path || (style_1.bgimg && style_1.bgimg.includes('.svg')); // 是否有图标（包括svg和path）
        var hasCa = jui.ca && !style_1.hideCa; // 是否有ca
        // let bgimg = style.bgimg ? style.bgimg.indexOf('_')!=-1 ? jg_aj.res[style.bgimg] : style.bgimg : '';
        var bgsvgStr = bgimg.includes('svg') || (bgcolor && style_1.line != undefined) || style_1.path ? buildBackground_svg({
            id: id, img: bgimg, color: isScroll ? '' : bgcolor, pathcolor: T.color(style_1.pathcolor, '#{r}{g}{b}') || '',
            w: _w, h: _h, line: style_1.line, path: style_1.path,
            padb: style_1.padb,
            padf: style_1.padf == undefined ? hasCa ? '30%' : '20%' : style_1.padf,
            offsetYf: style_1.iconOffsetY == undefined ? hasCa ? -10 : 0 : style_1.iconOffsetY
        }) : '';
        class0 && jex.each(class0.split(' '), function (i, n) { jex().recss(n); });
        // 2018/05/28  原来replace , 为"" 太粗暴，改为遍历style生成styleStr
        var styleStr = '';
        for (var _key in style_1)
            if (!['title', 'x', 'y', 'w', 'h', 'noclas', 'bgcolor', 'bgimg'].includes(_key))
                styleStr += _key + ':' + style_1[_key] + ';';
        //styleStr = styleStr.replace(/"/gi, "").replace(/{/gi, '').replace(/}/gi, '');	
        styleStr = "" + stylea.map(function (s) { return s.key + ':' + s.value; }).join(';') + ";" + styleStr;
        // 解析ca
        var fontSize = style_1.size || (hasIcon ? 12 : 14), lineCount = jui.ca ? (jui.ca + "").split('<br>').length : 1, lineHeight = fontSize; // hasIcon ? _h * 2 * 0.9 - fontSize : Math.min(fontSize * 2, _h / lineCount);
        //lineHeight = hasIcon ? _h*2*0.9-fontSize : _h/lineCount;
        if (jex().getv('langu', '') != '' && window.langu) {
            if (window.langu[jui.ca])
                jui.ca = window.langu[jui.ca][jex().getv('langu', '')];
        }
        var ziStyleJson = { 'font-size': fontSize * 0.05 + "rem", 'position': 'relative', 'overflow': 'hidden', 'overflow-wrap': 'break-word', 'word-break': 'break-all', 'line-height': (style_1.lineHeight || lineHeight) + "px", 'width': '100%', 'height': '100%', 'vertical-align': hasIcon ? 'bottom' : 'middle' }; //'width':'100%',
        !style_1.lineHeight && (ziStyleJson.display = display == 'table' ? 'table-cell' : 'block');
        fontSize < 12 && (ziStyleJson.transform = "scale(" + fontSize / 12 + ")"); // 由于谷歌浏览器限定最小字体为12px，比这个更小的时候，只能通过scale去修正
        if (style_1.textx != undefined)
            ziStyleJson.left = style_1.textx;
        if (style_1.texty != undefined)
            ziStyleJson.top = style_1.texty;
        if (style_1.textw)
            ziStyleJson.width = style_1.textw;
        if (style_1.texth)
            ziStyleJson.height = style_1.texth;
        if (style_1.textColor)
            ziStyleJson.color = T.color(style_1.textColor, '#{r}{g}{b}') || '#eee';
        if (style_1.bold)
            ziStyleJson['font-weight'] = 'bold';
        if (style_1.fontFamily)
            ziStyleJson['font-family'] = style_1.fontFamily;
        ziStyleJson['text-align'] = style_1.textAlign || 'center';
        var ziStr = ''; // 弱类（文本）
        //textStylea.forEach(i => ziStyleJson[i.key] = i.value);
        if (type != 1 && (![undefined, ""].includes(jui.ca) && !style_1.hideCa || type == 4) || style_1.input) {
            var inptyp = style_1.input;
            var ziAttr = {}, stag = 'span';
            // 2018/05/22  多行输入
            if (style_1.mutiline) {
                stag = 'textarea';
                ziStyleJson.resize = 'none';
                ziStyleJson.background = 'none';
                ziStyleJson.border = 'none';
            }
            // 2018/05/04  对于idclas中带"密码"的input特殊处理
            if (style_1.input && id.includes('密码')) {
                stag = 'input';
                ziAttr.type = 'password';
                ziStyleJson.border = 'none';
                ziStyleJson.background = 'none';
            }
            style_1.FOCUS_IN && (ziAttr.onfocus = style_1.FOCUS_IN);
            style_1.FOCUS_OUT && (ziAttr.onblur = style_1.FOCUS_OUT);
            style_1.CHANGE && (ziAttr.oninput = style_1.CHANGE);
            //ziAttr.onkeydown = `if(event.keyCode==13) return false;`; // 屏蔽回车，实现禁止换行
            if (inptyp && (inptyp + "").length > 1) {
                stag = 'input';
                ziAttr.type = inptyp;
                ziAttr.size = 3;
                ziStyleJson.border = 'none';
                ziStyleJson.background = 'none';
                ziStyleJson['font-size'] = style_1.size;
            }
            else if (inptyp) {
                ziAttr.contenteditable = 'true';
                //  2018/07/31  去掉判断，解决禁止换行失效问题 && " + inptyp + "===true
                ziAttr.onkeydown = " if(event.keyCode==13 && event.ctrlKey){T.func(id,{ev:13});return false;} if(event.keyCode==13) return false; "; // 屏蔽回车，实现禁止换行
            }
            ziStr = T.getdiv({
                parent: id, tag: stag, id: id + "zitext",
                attr: ziAttr,
                style: ziStyleJson,
                ca: (jui.style.caFormat || '{ca}').replace(/\{ca\}/g, jui.ca)
            });
            // ziStr = `<span id="${id}zitext" ${style.input||type==4?'contenteditable=true':''} onfocus="${style.FOCUS_IN}" onblur="${style.FOCUS_OUT}" oninput="${style.CHANGE}" style="${ziStyleStr}">${jui.ca}</span>`;
        }
        // if(style.hideCa) ziStr='';
        // 解析角标（foot）
        var zifootStyle = {};
        if (style_1.foot) {
            style_1.foot.w = style_1.foot.w || '100%';
            style_1.foot.h = style_1.foot.h || '100%';
            var img = style_1.foot.img, footimg = img.includes('_') && img.length < 20 ? jg_aj.res[img] : img;
            var _fw = T.deval('w', obj, style_1.foot), _fh = T.deval('h', obj, style_1.foot), _fx = T.deval('x', obj, style_1.foot), _fy = T.deval('y', obj, style_1.foot);
            zifootStyle.position = 'absolute';
            zifootStyle.left = (_fx - 0.5 * _fw) / obj.width * 100 + "%";
            zifootStyle.top = (_fy - 0.5 * _fh) / obj.height * 100 + "%";
            zifootStyle.width = _fw / obj.width * 100 + "%";
            zifootStyle.height = _fh / obj.height * 100 + "%";
            zifootStyle['z-index'] = "999";
            ziStr += T.getdiv({ parent: id, tag: 'img', id: id + "zifoot", attr: { src: "" + footimg }, style: zifootStyle });
            //`<img id="${id}zifoot" src="${footimg}" style="position:absolute;left:${(_fx-0.5*_fw)/obj.width*100}%;top:${(_fy-0.5*_fh)/obj.height*100}%;width:${_fw/obj.width*100}%;height:${_fh/obj.height*100}%;z-index:999"/>`;
        }
        var clickStr = "T.mndj('" + id + "');";
        // 解析title
        var zititleStyle = {};
        if (style_1.title) {
            var titleJson = typeof (style_1.title) == 'string' ? { ca: style_1.title } : style_1.title;
            zititleStyle = Object.assign(titleJson, {}); // 直接将style.title复制一份
            zititleStyle.position = zititleStyle.position || 'absolute';
            !zititleStyle.right && (zititleStyle.left = zititleStyle.left || "5%");
            // zititleStyle.top = `30%`;
            zititleStyle.top = zititleStyle.top || "0%";
            zititleStyle.width = zititleStyle.width || "35%";
            // zititleStyle.height = `33%`;
            zititleStyle.height = zititleStyle.height || "100%";
            zititleStyle.color = T.color(titleJson.color, '#{r}{g}{b}') || '#ffffff';
            _h && (zititleStyle['line-height'] = _h + "px"); // `${style.lineHeight || lineHeight}px`;
            zititleStyle['z-index'] = "999";
            zititleStyle['text-align'] = zititleStyle.textAlign || 'left';
            zititleStyle['font-size'] = (titleJson.size || '16') + 'px';
            ziStr += T.getdiv({ parent: id, tag: 'span', id: id + "zititle", ca: titleJson.ca, style: zititleStyle });
            if (!titleJson.static)
                clickStr += "doAct({obj:new TJH5(document.getElementById('" + id + "zititle_0')), \u52A8\u4F5C:'tween', y:'-0.3*{h}', time:300})";
            // clickStr += `doAct({obj:new TJH5(document.getElementById('${id}zititle_0')), 动作:'tween', y:'-0.2*{h}'})`;
            //`<img id="${id}zifoot" src="${footimg}" style="position:absolute;left:${(_fx-0.5*_fw)/obj.width*100}%;top:${(_fy-0.5*_fh)/obj.height*100}%;width:${_fw/obj.width*100}%;height:${_fh/obj.height*100}%;z-index:999"/>`;
        }
        // 解析file
        if (style_1.file) {
            var zifileStyle = {};
            var zifileAttr = {};
            zifileStyle.position = 'absolute';
            zifileStyle.top = '0';
            zifileStyle.right = '0';
            zifileStyle.width = _w + "px";
            zifileStyle.height = _h + "px";
            zifileStyle.margin = '0';
            zifileStyle.border = 'solid transparent';
            zifileStyle['border-width'] = "0 0 0 0";
            zifileStyle.opacity = '.0';
            zifileStyle.direction = 'ltr';
            zifileStyle.cursor = 'pointer';
            zifileAttr.type = 'file';
            zifileAttr.name = 'files[]';
            zifileAttr.accept = 'image/*';
            zifileAttr.multiple = 'multiple';
            zifileAttr.onchange = style_1.file.onchange || "jex().jalert(\"\u7167\u7247\u4E0A\u4F20\u4E2D..\",1,{ifgb:-1});handleFiles(this.files,0,-1,\"" + id + "ziinput_0\",function(n){let obj=T.findObj(\"" + id + "\");" + (style_1.file.cb || '') + "},1)";
            ziStr += T.getdiv({ parent: id, tag: 'input', id: id + "ziinput", ca: '', style: zifileStyle, attr: zifileAttr });
            jex('#preup-img_0').length == 0 && (ziStr += '<img id="preup-img_0" style="display:none;">');
        }
        if (jex('#' + id).length > 0) {
            if (class0)
                jex('#' + id).attr('class', class0);
            var thisobj = jex('#' + id).get(0);
            if (thisobj.parentNode.id != pid && jex("#" + pid).length > 0 && !jui.afterdiv) {
                if (_rotate != 0 || _scaleX != 1 || _scaleY != 1)
                    thisobj.style.transform = getTransformStyle({ id: id, _rotate: _rotate, _scaleX: _scaleX, _scaleY: _scaleY });
                jex("#" + pid).append(thisobj);
            }
            if (styleStr && styleStr.indexOf("x:no") == -1) {
                jex('#' + id).attr('style', styleStr);
                if (thisobj.style.transform)
                    TweenMax.set('#' + id, { x: 0, y: 0 }); // 使用TweenMax.set使jui复位 很多元件默认会transform
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
        }
        else {
            var strclick = 'if(jex().funmd(this)){jex(this).mdown(event,this,1);' + clickStr + ';}jex().stoppp();'; // stoppp不能删
            str += "<" + tag + " onfocus=\"grid.fover(this)\" onclick=\"" + strclick + "\" " + (jui.edit == 1 ? 'contenteditable=true' : '') + " class=\"" + class0 + "\" style=\"" + styleStr + "\" pid=" + jui.pid + " typ=" + typ + " id=" + id + ">" + bgsvgStr + ziStr + "</" + tag + ">";
            return str;
        }
    }
    else {
        console.log("\u5B58\u5728\u672A\u77E5\u7C7B\u578Baji.typ:" + type + ",_id:" + jui._id + " in buildUI");
        return '';
    }
}
;
function buildBackground_svg(aj) {
    var a = T.merge({ img: '', color: '', pathcolor: '', w: 0, h: 0, line: 4, path: '', padb: 0, padf: 10, offsetYf: 0 }, aj);
    var id = a.id, img = a.img, color = a.color, pathcolor = a.pathcolor, w = parseFloat(a.w.toFixed(2)), h = parseFloat(a.h.toFixed(2)), pb = a.padb, pf = typeof (a.padf) == 'string' ? parseFloat(a.padf) * 0.01 * Math.min(w, h) : a.padf, vw = w, vh = h;
    if (img.includes('.svg')) {
        var zibgsvg = jex("#" + id + "zibgsvg");
        if (zibgsvg.length > 0) {
            window["图标变形"]({ obj: id, path: img });
        }
        else {
            downSvg(img, function (svg) {
                if (!svg)
                    return;
                var bgsvg = document.getElementById(id + "zibgsvg");
                jex(svg).attr({ id: id + "zibgsvg", width: w - 2 * pf + "px", height: h - 2 * pf + "px" });
                jex(svg).css({ position: 'absolute', left: pf + "px", top: pf + a.offsetYf + "px", width: w - 2 * pf + "px", height: h - 2 * pf + "px" });
                bgsvg && (bgsvg.outerHTML = svg.outerHTML);
            });
        }
    }
    var bgcolorD = '';
    color == undefined && aj.line != undefined && (color = T.color(jg_aj.dqps[1]));
    a.path && (vw = vh = 1024, pathcolor = T.color(a.pathcolor || jg_aj.dqps[3]));
    color && (bgcolorD = getShapePathD(a));
    var strbg = '';
    if (img || a.path) {
        var zibgsvg = jex("#" + id + "zibgsvg");
        var zibgsvgAttr = { width: "" + (w - pf * 2), height: "" + (h - pf * 2), viewBox: "0 0 " + vw + " " + vh, style: "position:absolute;left:" + pf + "px;top:" + (pf + a.offsetYf) + "px" };
        var zibgsvgAttrStr = '';
        var content = (img && !img.includes('svg') ? "<defs>\n\t\t\t\t\t\t\t<pattern id=\"" + id + "ziImg\" width=\"100%\" height=\"100%\">\n\t\t\t\t\t\t\t\t<image xlink:href=\"" + img + "\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"></image>\n\t\t\t\t\t\t\t</pattern>\n\t\t\t\t\t\t</defs>" : '') + "\n\t\t\t\t\t\t" + (img ? img.includes('svg') ? "<path id=\"" + id + "ziicon\"></path>" : "<path fill=\"url(#" + id + "ziImg)\" d=\"M0 0L" + w + " 0L" + w + " " + h + "L0 " + h + "L0 0Z\"></path>" : '') + "\n\t\t\t\t\t\t" + (a.path ? "<path id=\"" + id + "zipath\" fill=\"" + pathcolor + "\" stroke-width=\"20\" stroke=\"" + pathcolor + "\" d=\"" + a.path + "\"></path>" : '');
        if (zibgsvg.length > 0) {
            zibgsvg.attr(zibgsvgAttr);
            window["图标变形"]({ obj: id, path: a.line });
            // zibgsvg.html(content);
        }
        else {
            for (var i in zibgsvgAttr)
                zibgsvgAttrStr += " " + i + "=\"" + zibgsvgAttr[i] + "\"";
        }
        strbg = "<svg id=\"" + id + "zibgsvg\"" + zibgsvgAttrStr + ">\n\t\t\t\t\t" + content + "\n\t\t\t\t</svg>";
    }
    var zisvg = jex("#" + id + "zisvg"), zisvgAttr = { width: "100%", height: "100%", viewBox: "0 0 " + w + " " + h, style: "position:absolute;left:0px;top:0px" };
    if (zisvg.length > 0) {
        zisvg.attr(zisvgAttr);
        zisvg.html(color ? "<path id=\"" + id + "zibgcolor\" fill=\"" + color + "\" d=\"" + bgcolorD + "\"></path>" : '');
    }
    return "<svg id=\"" + id + "zisvg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 " + w + " " + h + "\" style=\"position:absolute;left:0px;top:0px\">\n\t\t\t\t" + (color ? "<path id=\"" + id + "zibgcolor\" fill=\"" + color + "\" d=\"" + bgcolorD + "\"></path>" : '') + "\n\t\t\t</svg>" + strbg;
}
/**
 * 下载一个svg获取其中所有path的p，合并后的字符串将传入cb
 * @param {String} url - 下载的svg的路径
 * @param {Function} cb - 回调函数，形如 data => {}，data.d为合并后的path的d，data.viewBox，data.fill
 */
function downSvg(url, cb) {
    db.gajax(url, function (data) {
        cb && cb(jex.makeArray(jex(data)).find(function (i) { return i.tagName == 'svg'; }));
    });
}
/**
 * 根据宽高、padb值计算出形状path的d并返回
 * @return {String}
 */
function getShapePathD(aj) {
    var a = T.merge({ line: 4, w: 0, h: 0, padb: 0 }, aj), w = a.w, h = a.h, pb = a.padb;
    var C = 0.551915024494; // 贝塞尔曲线画圆时计算控制点的常量比例
    var bgcolorD = '', min = Math.min(w, h), r = 0.1 * min, or = r * C; // r为圆角矩形的半径，or为控制点偏移值
    a.line == 0 && (bgcolorD = "M" + w * 0.5 + " " + pb + "A" + (w * 0.5 - pb) + "," + (h * 0.5 - pb) + " 0,1,1 " + w * 0.5 + "," + (h - pb) + "A" + (w * 0.5 - pb) + "," + (h * 0.5 - pb) + " 0,1,1 " + w * 0.5 + " " + pb + "Z"); // 圆
    a.line == 4 && (bgcolorD = "M" + pb + " " + pb + "L" + (w - pb) + " " + pb + "L" + (w - pb) + " " + (h - pb) + "L" + pb + " " + (h - pb) + "L" + pb + " " + pb + "Z"); // 正方形
    a.line == 6 && (bgcolorD = "M" + w * 0.5 + " " + pb + "L" + (w - pb) + " " + 0.25 * h + "L" + (w - pb) + " " + 0.75 * h + "L" + w * 0.5 + " " + (h - pb) + "L" + pb + " " + 0.75 * h + "L" + pb + " " + 0.25 * h + "L" + w * 0.5 + " " + pb + "Z"); // 六边形
    a.line == '圆角矩形' && (bgcolorD = "M" + (r + pb) + " " + pb + "L" + (w - r - pb) + " " + pb + "C" + (w - r - pb + or) + "," + pb + " " + (w - pb) + "," + (r + pb - or) + " " + (w - pb) + "," + (r + pb) + "L" + (w - pb) + " " + (h - pb - r) + "C" + (w - pb) + "," + (h - r - pb + or) + " " + (w - r - pb + or) + "," + (h - pb) + " " + (w - r - pb) + "," + (h - pb) + "L" + (r + pb) + " " + (h - pb) + "C" + (r + pb - or) + "," + (h - pb) + " " + pb + "," + (h - r - pb + or) + " " + pb + "," + (h - pb - r) + "L" + pb + " " + (r + pb) + "C" + pb + "," + (r + pb - or) + " " + (r + pb - or) + "," + pb + " " + (r + pb) + "," + pb + "Z"); // 圆角矩形
    return bgcolorD;
}
function getNewPathD(d, ovb, nvb, ls) {
    var ow, oh, nw, nh; // 从ovb,nvb获取新旧w,h
    if (typeof (ovb) == 'string') {
        var ovba = ovb.split(' ').map(function (i) { return parseFloat(i); });
        ow = ovba[2];
        oh = ovba[3];
    }
    else {
        ow = ovb.w;
        oh = ovb.h;
    }
    if (typeof (nvb) == 'string') {
        var nvba = nvb.split(' ').map(function (i) { return parseFloat(i); });
        nw = nvba[2];
        nh = nvba[3];
    }
    else {
        nw = nvb.w;
        nh = nvb.h;
    }
    var sx = nw / ow, sy = nh / oh, i = false;
    !ls && (sx = sy = Math.min(sx, sy));
    return d.replace(/(?:\d*\.)?\d+/g, function (n) { i = !i; return (parseFloat(n) * (i ? sx : sy)).toFixed(4); });
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
    var actName = e["动作"]; // action
    if (actName.includes('弹性')) {
        actName = actName.replace('弹性', '');
        e.ease = e.ease || 'elasticOut';
    }
    if (actName.indexOf('逐个') == 0) {
        actName = actName.substring(2);
        var obj = e.obj;
        delete e.obj;
        var cb = e.cb;
        delete e.cb;
        var pa = T.son(obj, e).map(function (obj) { var p = T.dcopy(e); p.obj = obj; return p; });
        T.jgzx(window[actName], e.jgt || 300, cb, pa);
        return;
    }
    var todo = function () {
        delete e.delay; // 避免重复delay
        if (!window[actName]) {
            console.log("\u4E0D\u5B58\u5728\u51FD\u6570" + actName + " in doAct");
            return;
        }
        window[actName](e);
    };
    if (!e.delay)
        todo();
    else
        _setTimeout(todo, e.delay);
};
/**
 * 解析act
 */
function parseAct(id, act) {
    var obj = sj.obj[id]; //jex(`#${id}`).get(0);
    if (obj == undefined)
        return;
    obj.aclas || (obj.aclas = {});
    // 将原有的act数据清掉
    var aclasid;
    for (aclasid in obj.aclas) {
        if (aclasid != '_acts') {
            var pobj = sj.obj[T.findid(aclasid)];
            if (pobj) {
                pobj.clas || (pobj.clas = []);
                var idx = pobj.clas.indexOf(obj.id);
                if (idx > -1) {
                    pobj.clas.splice(idx, 1);
                }
            }
            else {
                console.log("\u89E3\u6790" + obj.id + "\u7684act\u65F6\uFF0C\u627E\u4E0D\u5230\u89E6\u53D1\u5BF9\u8C61" + aclasid + ",T.findid(aclasid):" + T.findid(aclasid));
            }
        }
    }
    // 解析新的act
    var removea = [], keys = Object.keys(act); // 解析完后要删除的key
    var singlePid = false;
    var _loop_2 = function (k) {
        aclasid = keys[k];
        var _act = [].concat(act[aclasid]); // 一系列动作
        if (aclasid == '_a') {
            T.dodz(obj, T.route2act(_act));
            return "continue";
        }
        var _p = _act[_act.length - 1] || {}; // 一系列动作参数
        if (_p instanceof Array || _p['动作'])
            _p = {};
        if (aclasid == '_acts') {
            _p["条件"] ? (window.ifeval ? eval(_p["条件"]) : T.doeval(_p["条件"])) && T.dodz(obj, _act) : T.dodz(obj, _act);
            return "continue";
        }
        if (['{父元件}', '{本元件}'].includes(aclasid) || aclasid[0] == '_') {
            var newkey = obj.name;
            if (aclasid == '{本元件}')
                singlePid = true;
            if (aclasid == '{父元件}')
                newkey = obj.parent.name;
            if (aclasid[0] == '_')
                newkey = jg_aj.curproj + aclasid;
            aclasid != newkey && (keys.splice(k + 1, 0, newkey), act[newkey] = _act); // keys.push(newkey)
            return "continue";
        }
        if (!_p.remove) {
            var pids = T.findid(aclasid, { many: true });
            singlePid && (pids = [obj.name]);
            // let pids = [T.findid(aclasid)];
            if (pids === aclasid) {
                console.log("\u89E3\u6790act\u65F6\uFF0C\u627E\u4E0D\u5230" + obj.id + "\u7684\u89E6\u53D1\u5BF9\u8C61" + aclasid + "\uFF0C\u4E00\u7CFB\u5217\u52A8\u4F5C:" + JSON.stringify(_act));
                return "continue";
            }
            pids.forEach(function (aclasid) {
                if (!_act[0]._id || aclasid.split('-')[0] == obj.name.split('-')[0]) {
                    var pobj = sj.obj[aclasid];
                    if (pobj) {
                        obj.aclas[aclasid] = _act;
                        pobj.clas || (pobj.clas = []);
                        pobj.clas.push(obj.id);
                    }
                }
            });
        }
        singlePid = false;
    };
    for (var k = 0; k < keys.length; k++) {
        _loop_2(k);
    }
}
window.actt = function (obj, aj) {
    var objname = obj;
    if (typeof obj == "string")
        obj = T.findObj(obj);
    if (T.isEgret()) {
        return Jui.getSingle().actt.apply(Jui.getSingle(), [obj, (obj ? obj.parent : null), aj]);
    }
    else {
        parseActt(obj ? obj.name : objname, aj);
    }
};
/**
 * 解析执行actt
 * @param {String} id - 添加特效的对象名
 * @param {Object} actt - 待解析的actt对象，里面可能包含多个actt
 */
function parseActt(id, actt, sxn) {
    'use strict';
    actt = actt || {};
    for (var i in actt) {
        if (typeof actt[i] == 'object') {
            if (i.indexOf("@") > -1)
                i = i.split("@")[0];
            var e = T.merge({ delay: 0, sleep: 0 }, actt[i]);
            if (!ifmy(e.my, sj.obj[id]))
                return;
            e.obj = e.obj || id;
            e.actname = i;
            e["动作"] = i;
            if (actt[i]._id0 && sxn != 0) {
                return;
            }
            if (!actt[i]._id || jg_aj.opid.split('-')[0] == e.obj.split('-')[0]) {
                try {
                    doAct(e);
                }
                catch (error) {
                    console.log("动作没正常完成：" + JSON.stringify(e));
                }
            }
        }
    }
}
var ifmy = window.ifmy = function (my, obj) {
    if (!my)
        return true;
    if (my == 1)
        return sj.clas[obj.name].idus == window["jg_aj"].idus;
    if (my.length > 2)
        return window["ifeval"] ? eval(my) : window["T"].doeval(my);
};
/**
* 区分白鹭跟h5的setTimeout
* @param {Functon} func  需要执行的函数
* @return {Number} time	 延迟时间
* @return {Object} [obj={}]	 白鹭需要用到的this
* @return {arr} [args=[]]	 函数参数
*/
var _setTimeout = window._setTimeout = function (func, time, obj, args) {
    if (obj === void 0) { obj = {}; }
    if (args === void 0) { args = []; }
    if (egret && egret.setTimeout && jg_aj.sj.eg) {
        return egret.setTimeout(func, obj, time, args);
    }
    else {
        setTimeout(func, time, args);
    }
};
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
};
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
};
/**
 * 点击对话项事件
 * @param {Object} objid - 对话项_id
 */
var tssplay = window.tssplay = function (objid, f) {
};
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
        var file_1 = files[cfileindex];
        var reader = new FileReader();
        reader.readAsDataURL(file_1);
        reader.onload = function (e) {
            var img = document.getElementById("preup-img_0");
            var width = 0, height = 0;
            var _cupload = function () {
                var func = function (i, n) {
                    var cpic = uploader.filesList[cfileindex].name.split(".")[0];
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
            if (file_1.type.indexOf("image") > -1 || file_1.type.indexOf("svg") > -1) {
                img.addEventListener('load', function () {
                    width = img.width;
                    height = img.height;
                    _cupload();
                });
            }
            else {
                _cupload();
            }
            img.src = e.target.result;
        };
    }
};
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
                };
            }
        });
    }
    else {
        jex().jalert('<div style="color:#000">请在微信中打开！！！</div>', null, { clas: "emp", bdcol: "#ff", embg: "#fff" }, null, 100);
    }
};
function outstanding(obj) {
    jex("#svgoutstand_0").remove();
    var cObj = jex(obj);
    var cObjw = jex(obj).width();
    var cObjh = jex(obj).height();
    var cObjp = cObjw * 2 + cObjh * 2 + 16;
    var cObjbr = jex(obj).css("border-radius").split("px")[0];
    if (cObjbr.indexOf("%") > -1)
        cObjbr = cObjbr.split("%") * 0.01 * cObjw;
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
};
function bigMap(url) {
    jex().jalert("<img src='" + url + "'/>");
}
var GetQueryString = window.GetQueryString = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
};
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
};
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
};
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
        }
        else {
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
    }
    catch (ex) { }
};
// 这是clipboard.js的代码
!function (t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e(); }(window, function () { return function (t) { function e(o) { if (n[o])
    return n[o].exports; var r = n[o] = { i: o, l: !1, exports: {} }; return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports; } var n = {}; return e.m = t, e.c = n, e.i = function (t) { return t; }, e.d = function (t, n, o) { e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: o }); }, e.n = function (t) { var n = t && t.__esModule ? function () { return t.default; } : function () { return t; }; return e.d(n, "a", n), n; }, e.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, e.p = "", e(e.s = 3); }([function (t, e, n) { var o, r, i; !function (a, c) { r = [t, n(7)], o = c, void 0 !== (i = "function" == typeof o ? o.apply(e, r) : o) && (t.exports = i); }(0, function (t, e) {
        "use strict";
        function n(t, e) { if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function"); }
        var o = function (t) { return t && t.__esModule ? t : { default: t }; }(e), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t; } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t; }, i = function () { function t(t, e) { for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        } } return function (e, n, o) { return n && t(e.prototype, n), o && t(e, o), e; }; }(), a = function () { function t(e) { n(this, t), this.resolveOptions(e), this.initSelection(); } return i(t, [{ key: "resolveOptions", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""; } }, { key: "initSelection", value: function () { this.text ? this.selectFake() : this.target && this.selectTarget(); } }, { key: "selectFake", value: function () { var t = this, e = "rtl" == document.documentElement.getAttribute("dir"); this.removeFake(), this.fakeHandlerCallback = function () { return t.removeFake(); }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px"; var n = window.pageYOffset || document.documentElement.scrollTop; this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, o.default)(this.fakeElem), this.copyText(); } }, { key: "removeFake", value: function () { this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null); } }, { key: "selectTarget", value: function () { this.selectedText = (0, o.default)(this.target), this.copyText(); } }, { key: "copyText", value: function () { var t = void 0; try {
                    t = document.execCommand(this.action);
                }
                catch (e) {
                    t = !1;
                } this.handleResult(t); } }, { key: "handleResult", value: function (t) { this.emitter.emit(t ? "success" : "error", { action: this.action, text: this.selectedText, trigger: this.trigger, clearSelection: this.clearSelection.bind(this) }); } }, { key: "clearSelection", value: function () { this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges(); } }, { key: "destroy", value: function () { this.removeFake(); } }, { key: "action", set: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy"; if (this._action = t, "copy" !== this._action && "cut" !== this._action)
                    throw new Error('Invalid "action" value, use either "copy" or "cut"'); }, get: function () { return this._action; } }, { key: "target", set: function (t) { if (void 0 !== t) {
                    if (!t || "object" !== (void 0 === t ? "undefined" : r(t)) || 1 !== t.nodeType)
                        throw new Error('Invalid "target" value, use a valid Element');
                    if ("copy" === this.action && t.hasAttribute("disabled"))
                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled")))
                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                    this._target = t;
                } }, get: function () { return this._target; } }]), t; }();
        t.exports = a;
    }); }, function (t, e, n) { function o(t, e, n) { if (!t && !e && !n)
        throw new Error("Missing required arguments"); if (!c.string(e))
        throw new TypeError("Second argument must be a String"); if (!c.fn(n))
        throw new TypeError("Third argument must be a Function"); if (c.node(t))
        return r(t, e, n); if (c.nodeList(t))
        return i(t, e, n); if (c.string(t))
        return a(t, e, n); throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList"); } function r(t, e, n) { return t.addEventListener(e, n), { destroy: function () { t.removeEventListener(e, n); } }; } function i(t, e, n) { return Array.prototype.forEach.call(t, function (t) { t.addEventListener(e, n); }), { destroy: function () { Array.prototype.forEach.call(t, function (t) { t.removeEventListener(e, n); }); } }; } function a(t, e, n) { return u(document.body, t, e, n); } var c = n(6), u = n(5); t.exports = o; }, function (t, e) { function n() { } n.prototype = { on: function (t, e, n) { var o = this.e || (this.e = {}); return (o[t] || (o[t] = [])).push({ fn: e, ctx: n }), this; }, once: function (t, e, n) { function o() { r.off(t, o), e.apply(n, arguments); } var r = this; return o._ = e, this.on(t, o, n); }, emit: function (t) { var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; for (o; o < r; o++)
            n[o].fn.apply(n[o].ctx, e); return this; }, off: function (t, e) { var n = this.e || (this.e = {}), o = n[t], r = []; if (o && e)
            for (var i = 0, a = o.length; i < a; i++)
                o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]); return r.length ? n[t] = r : delete n[t], this; } }, t.exports = n; }, function (t, e, n) { var o, r, i; !function (a, c) { r = [t, n(0), n(2), n(1)], o = c, void 0 !== (i = "function" == typeof o ? o.apply(e, r) : o) && (t.exports = i); }(0, function (t, e, n, o) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        function i(t, e) { if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function"); }
        function a(t, e) { if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e; }
        function c(t, e) { if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e); }
        function u(t, e) { var n = "data-clipboard-" + t; if (e.hasAttribute(n))
            return e.getAttribute(n); }
        var l = r(e), s = r(n), f = r(o), d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t; } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t; }, h = function () { function t(t, e) { for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        } } return function (e, n, o) { return n && t(e.prototype, n), o && t(e, o), e; }; }(), p = function (t) { function e(t, n) { i(this, e); var o = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this)); return o.resolveOptions(n), o.listenClick(t), o; } return c(e, t), h(e, [{ key: "resolveOptions", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === d(t.container) ? t.container : document.body; } }, { key: "listenClick", value: function (t) { var e = this; this.listener = (0, f.default)(t, "click", function (t) { return e.onClick(t); }); } }, { key: "onClick", value: function (t) { var e = t.delegateTarget || t.currentTarget; this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new l.default({ action: this.action(e), target: this.target(e), text: this.text(e), container: this.container, trigger: e, emitter: this }); } }, { key: "defaultAction", value: function (t) { return u("action", t); } }, { key: "defaultTarget", value: function (t) { var e = u("target", t); if (e)
                    return document.querySelector(e); } }, { key: "defaultText", value: function (t) { return u("text", t); } }, { key: "destroy", value: function () { this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null); } }], [{ key: "isSupported", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"], e = "string" == typeof t ? [t] : t, n = !!document.queryCommandSupported; return e.forEach(function (t) { n = n && !!document.queryCommandSupported(t); }), n; } }]), e; }(s.default);
        t.exports = p;
    }); }, function (t, e) { function n(t, e) { for (; t && t.nodeType !== o;) {
        if ("function" == typeof t.matches && t.matches(e))
            return t;
        t = t.parentNode;
    } } var o = 9; if ("undefined" != typeof Element && !Element.prototype.matches) {
        var r = Element.prototype;
        r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector;
    } t.exports = n; }, function (t, e, n) { function o(t, e, n, o, r) { var a = i.apply(this, arguments); return t.addEventListener(n, a, r), { destroy: function () { t.removeEventListener(n, a, r); } }; } function r(t, e, n, r, i) { return "function" == typeof t.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function (t) { return o(t, e, n, r, i); })); } function i(t, e, n, o) { return function (n) { n.delegateTarget = a(n.target, e), n.delegateTarget && o.call(t, n); }; } var a = n(4); t.exports = r; }, function (t, e) { e.node = function (t) { return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType; }, e.nodeList = function (t) { var n = Object.prototype.toString.call(t); return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in t && (0 === t.length || e.node(t[0])); }, e.string = function (t) { return "string" == typeof t || t instanceof String; }, e.fn = function (t) { return "[object Function]" === Object.prototype.toString.call(t); }; }, function (t, e) { function n(t) { var e; if ("SELECT" === t.nodeName)
        t.focus(), e = t.value;
    else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
        var n = t.hasAttribute("readonly");
        n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value;
    }
    else {
        t.hasAttribute("contenteditable") && t.focus();
        var o = window.getSelection(), r = document.createRange();
        r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), e = o.toString();
    } return e; } t.exports = n; }]); });
// 123
window.easeFunc = {
    'sineIn': 'Linear.easeNone',
    'sineOut': 'Power2.easeOut',
    'sineInOut': 'Power2.easeInOut',
    'backIn': 'Back.easeIn',
    'backOut': 'Back.easeOut',
    'backInOut': 'Back.easeInOut',
    'circIn': 'Circ.easeIn',
    'circOut': 'Circ.easeOut',
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
};
if (!window.android) {
    window.android = null;
}
window.CallNative = function (jsonObj) {
    var jsonString = JSON.stringify(jsonObj);
    //jex().jalert("1")
    if (android) {
        //jex().jalert("2"+'---'+jsonString)
        android.call(jsonString);
    }
    else if (jsonObj["method"] != "logInHx") {
        //jex().jalert("该功能需要在dapp上使用")
    }
};
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
            if (jg_aj.phototype == 1) {
                window['换图']({ obj: T.findObj(jg_aj.photo), img: jsonObj.imgUrl });
                jex().jalert("上传图片成功...");
            }
            else {
                csend(["", { "dba": ["聊天内容", { "图片区图片": jsonObj.imgUrl + '' }, "{_id:'" + jg_aj.photo.split('-')[0] + "'}", { "upsert": 1 }] }, jg_aj.curproj + "_游戏容器d"]);
                jex().jalert("上传图片成功，3秒后刷新...");
            }
            break;
        case 'startConference':
            jex().jalert('创建实时会议成功，会议id为' + jsonObj.conferenceId);
            outputLog(false, 'startConference', '创建实时会议成功，会议id为', jsonObj.conferenceId);
            break;
        case 'recvJoinConference':
            jex().jalert('收到实时会议邀请，id为' + jsonObj.conferenceId);
            outputLog(false, 'recvJoinConference', '收到实时会议邀请，id为', jsonObj.conferenceId);
            break;
        case 'joinConference':
            jex().jalert('已加入实时会议');
            outputLog(false, 'joinConference', '已加入实时会议');
            break;
        case 'inviteUser':
            jex().jalert('邀请' + jsonObj.userName + '加入会议');
            outputLog(false, 'inviteUser', '邀请', jsonObj.userName, '加入会议');
            break;
        case 'memberStatus':
            jex().jalert(jsonObj.userName + '已经' + (jsonObj.status === 'joined' ? '加入' : '离开') + '会议');
            outputLog(false, jsonObj.userName, '已经', (jsonObj.status === 'joined' ? '加入' : '离开'), '会议');
            break;
        case 'talkingMembers':
            if (jsonObj.talkingMembers) {
                //jex().jalert(jsonObj.talkingMembers.join(',')+'正在说话')
                $('#talking').text(jsonObj.talkingMembers.join(',') + '正在说话');
            }
            else {
                //$('#talking').text('');
            }
            break;
        case 'leaveConference':
            jex().jalert('已退出实时会议');
            outputLog(false, 'leaveConference', '已退出实时会议');
            break;
        case 'signUpHx':
            //jex().jalert('创建环信账号成功！')
            outputLog(false, 'logInHx', UserName, '创建环信账号成功！');
            break;
        case 'backPressed'://2018-6-19   增加返回键的捕捉
            if (jex('#女神养成记_场景h').length > 0) {
                CallNative({
                    method: 'finishActivity'
                });
            }
            else if (jex().getv('ref', 0) != 0 && jex('#ref_box').length > 0) {
                jex('#ref_box')[0].click();
            }
            else {
                T.mndj('女神养成记_首页按钮');
                window['显示']({ obj: '菜单层' });
            }
            break;
    }
};
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
            var o = Object(this);
            var len = o.length >>> 0;
            if (len === 0) {
                return false;
            }
            var n = fromIndex | 0;
            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
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
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S": this.getMilliseconds() //millisecond
        };
        if (/(y+)/.test(format))
            format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(format))
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] :
                    ("00" + o[k]).substr(("" + o[k]).length));
        return format;
    };
}
/**
 *
 */
window.funexe = function (text) {
    sj.obj['jai_命令编辑'].text = text;
    jex('#jai_命令编辑').val(text);
    T.func();
};
window.moltoggle = function (obj) {
    if (jg_aj.editm == 0) {
        jg_aj.editm = 1;
    }
    else {
        jg_aj.editm = 0;
    }
    var kzzx = (sj.obj['jai_控制中心']);
    if (kzzx) {
        if (T.isEgret(obj)) {
            kzzx.$setVisible(jg_aj.editm == 1);
        }
        else {
            kzzx.visible = (jg_aj.editm == 1);
        }
    }
    else {
        T.func(obj);
    }
};
/**
 *
 */
window.jpn = function (obj) {
    if (obj && obj.name) {
        var on = obj.name;
        if (on.indexOf('-') > 0)
            on = on.split('-')[1];
        if (on.indexOf("jai") == 0)
            return true;
        jg_aj.opid = obj.name;
        if (jg_aj.editm)
            T.func(jg_aj.opid);
    }
};
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
        return obj == undefined ? (jg_aj.sj && jg_aj.sj.eg == 1) : typeof (egret) != 'undefined' && (typeof (egret.HashObject) == 'function' && (obj instanceof egret.HashObject) || typeof (p2) != 'undefined' && typeof (p2.EventEmitter) == 'function' && (obj instanceof p2.EventEmitter));
    };
    /**
     * 对每个调用该方法的方法，记录调用时间。并根据传入的时间，返回调用冷却时长是否冷却完毕
     * @param {String} [name=arguments.callee.caller.name||'window'] - 调用方法名，默认自动取调用方法名（若为空则认为是由window调用）
     *                 PS: 由于严格模式下不允许访问arguments.callee，所以必须传入name参数
     * @param {Number} [cd=3000] - 冷却时长(ms)
     * @return {Boolean} - 是否冷却完毕
     */
    this.cd = function (name, cd) {
        if (cd === void 0) { cd = 3000; }
        name = name || 'window';
        var previousInvokeTime = T.cd.map[name] || 0, now = Date.now();
        if (now > previousInvokeTime + cd) {
            T.cd.map[name] = now;
            return true;
        }
        else {
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
                jex(newdiv).html(a.ca[ica]);
                //retdiv.push(newdiv);
                //str+=newdiv.outerHTML;
            }
            else {
                var sty = '', sattr = '';
                for (var i in a.style)
                    sty += ' ' + i + ':' + a.style[i] + ';';
                for (var i in a.attr)
                    sattr += ' ' + i + "='" + a.attr[i] + "' ";
                if (a.tag == 'input') {
                    str += '<' + a.tag + ' id=' + strid + " style='" + sty + "' " + sattr + ' value="' + a.ca[ica] + '" />';
                }
                else {
                    str += '<' + a.tag + ' id=' + strid + " style='" + sty + "' " + sattr + ">" + a.ca[ica] + "</" + a.tag + '>';
                }
            }
        }
        if (p != null) {
            if (retdiv.length > 0) {
                for (var item in retdiv) {
                    (item.parentNode != p) && p.appendChild(item);
                }
                return retdiv;
            }
            else {
                jex(p).append(str);
                return str;
            }
        }
        return str;
    };
    this.hec = function (obj1, obj2, i) {
        if (i === void 0) { i = 0; }
        if (Object.keys(obj1).length == 2 && obj1._id) {
            obj1 = sj.clas[obj2._id + '-' + obj1._id] || obj1;
            obj1._id = T.hqyjm(obj1._id);
            console.error("如果出现，则不能删除此段。obj1:" + JSON.stringify(obj1));
        }
        var objr;
        if (obj2.ridclas) {
            var rname = obj1._id + '＃' + obj2.ridclas.replace(/_/, '');
            objr = sj.jui[rname];
            if (!objr && sj.jui[obj2.ridclas]) {
                objr = sj.jui[rname] = T.dcopy(sj.jui[obj2.ridclas]);
            }
            if (objr && !objr.ifmerge) {
                if (obj1.act) {
                    objr.act = this.merge(this.dcopy(obj1.act), objr.act);
                }
                if (obj1.actt) {
                    objr.actt = this.merge(this.dcopy(obj1.actt), objr.actt);
                }
                if (obj1.style) {
                    objr.style = this.merge(this.dcopy(obj1.style), objr.style);
                }
                if (obj1.attr) {
                    objr.attr = this.merge(this.dcopy(obj1.attr), objr.attr);
                }
                if (obj1.func) {
                    objr.func = this.merge(this.dcopy(obj1.func), objr.func);
                }
                if (!objr.ca)
                    objr.ca = obj1.ca;
                objr.pid = obj1.pid;
                objr.ifmerge = 1;
            }
        }
        var aj = {};
        if (objr) {
            aj = this.dcopy(objr, "data");
        }
        else {
            aj = this.dcopy(obj1, "data");
        }
        aj.style = aj.style || {};
        for (var iii in obj2) {
            if (typeof (aj[iii]) == 'object' && typeof (obj2[iii]) == 'object') {
                this.merge(aj[iii], obj2[iii]);
            }
            else {
                if (iii != '_id' && aj[iii] != obj2[iii])
                    aj[iii] = obj2[iii];
                // window['T'].setp(aj, iii, obj2[iii]);
                //let _pa = (iii + '').split('.');
                //_pa.reduce((pre, cur, idx) => (idx != _pa.length - 1 ? pre[cur] || (pre[cur] = {}) : (pre[cur] = obj2[iii])), aj);
            }
            if (iii == 'pid') {
                if (obj2[iii].indexOf('-') > 0 || obj2[iii].indexOf('_游戏容器') > 0) {
                    obj2.style = obj2.style || {};
                    if (!aj.style.w || (aj.style.w + '').includes('%'))
                        aj.style.w = obj2.style.w = obj1.style.pidw || obj2.style.pidw || "100%"; // pidw指定座位中的宽度
                    if (!aj.style.h || (aj.style.h + '').includes('%'))
                        aj.style.h = obj2.style.h = obj1.style.pidh || obj2.style.pidh || "100%"; // pidh指定座位中的高度
                    aj[iii] = obj2[iii];
                }
                else {
                    if (obj2[iii] != obj1[iii])
                        aj[iii] = obj2[iii] + '-' + obj1[iii];
                } //站位
            }
        }
        aj._id = obj2._id + "-" + obj1._id;
        if (aj._id.includes('用户＃'))
            aj._id = aj._id.split('＃')[0]; //2019.1.26 确保用户的clas唯一 解决 GAC3_用户＃2
        var pclas = aj;
        if (obj2.pclasid) {
            pclas = sj.clas[obj2.pclasid];
        }
        //if(JSON.stringify(obj2.style).indexOf("{v")>0) 
        aj = getbands(aj, '', aj, pclas || aj, i); //ret,vv,jui, pclas,i
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
        var _style = T.dcopy(style); // 函数内部不修改外部数
        // 2018/07/02   去掉只对飞白鹭元件的判断
        // if (!T.isEgret(pobj)) {
        base == 'width' && (base = 'w', _style.w = _style.width);
        base == 'height' && (base = 'h', _style.h = _style.height);
        // }
        var _base = 0;
        if (pobj) { }
        else {
            console.log("aji");
            return 0;
        }
        if (['x', 'X'].some(function (n) { return base.includes(n); }) || base == "w" || base == "bgimgw")
            _base = pobj.width;
        if (['y', 'Y'].some(function (n) { return base.includes(n); }) || base == "h" || base == "bgimgh")
            _base = pobj.height;
        aj = aj || { ii: 0, iii: 0 };
        aj.obj = aj.obj || { width: 0, height: 0, name: '' };
        _style.x = _style.x == undefined ? '50%' : _style.x;
        _style.y = _style.y == undefined ? '50%' : _style.y;
        _style.w = _style.w == undefined ? (aj.obj.width + '') || '0' : _style.w;
        _style.h = _style.h == undefined ? (aj.obj.height + '') || '0' : _style.h;
        var ii = aj.ii || 0;
        var iii = aj.iii || 0;
        var ret = (_style[base] + '') || '0';
        if (ret == '{no}')
            return ret;
        ret == 'undefined' && (ret = '0');
        if (ret.indexOf('%') > 0) {
            ret = parseFloat(ret) * 0.01 * _base;
        }
        else {
            ret = ret.replace(/px/g, '');
            if (ret.indexOf('{') != -1) {
                // let _egret = jex().getv('eg', -1)==1;
                var _egret = T.isEgret(pobj);
                var _mw = jex().getcw();
                var _mh = jex().getch();
                var _cw = aj.sw || (_egret ? egret.MainContext.instance.stage.stageWidth : _mw);
                var _ch = aj.sh || (_egret ? egret.MainContext.instance.stage.stageHeight : _mh);
                var _cwh = Math.min(_cw, _ch);
                // let _pixOrPercent = ['{cwh}', '{cw}', '{ch}', '{w}', '{h}', '{pw}', '{ph}', '{px}', '{py}'].some(w => ret.indexOf(w) > 0);
                // cwh:canvas宽高的最小值
                ret = ret.replace(/\{cwh\}/g, _cwh);
                ret = ret.replace(/\{cw\}/g, _cw);
                ret = ret.replace(/\{ch\}/g, _ch);
                // 当前游戏窗的宽高（应用市场没有游戏窗）
                if (jg_aj.curproj != '应用市场' && (ret.includes('{ww}') || ret.includes('{wh}'))) {
                    var gameWindow = T.findObj('游戏窗' + T.dqcj()) || { width: _mw, height: _mh };
                    ret = ret.replace(/\{ww\}/g, gameWindow.width);
                    ret = ret.replace(/\{wh\}/g, gameWindow.height);
                }
                // 父亲的x,y,w,h
                ret = ret.replace(/\{pw\}/g, parseFloat(pobj ? (pobj.width || 0) : 0));
                ret = ret.replace(/\{ph\}/g, parseFloat(pobj ? (pobj.height || 0) : 0));
                if (ret.includes('{')) {
                    ret = ret.replace(/\{px\}/g, "(" + parseFloat(pobj ? (pobj.x || 0) : 0) + ")");
                    ret = ret.replace(/\{py\}/g, "(" + parseFloat(pobj ? (pobj.y || 0) : 0) + ")");
                    // 屏幕宽高
                    ret = ret.replace(/\{mw\}/g, _mw);
                    ret = ret.replace(/\{mh\}/g, _mh);
                    // 最近一次点击，相对与当前游戏容器坐标
                    ret = ret.replace(/\{ex\}/g, jg_aj.ex);
                    ret = ret.replace(/\{ey\}/g, jg_aj.ey);
                    // 父亲的x，y轴比例
                    ret = ret.replace(/\{pscalex\}/g, "(" + parseFloat(pobj ? (pobj.scaleX || 1) : 1) + ")");
                    ret = ret.replace(/\{pscaley\}/g, "(" + parseFloat(pobj ? (pobj.scaleY || 1) : 1) + ")");
                    // 父亲在屏幕的x,y
                    if (ret.indexOf('{psx}') != -1 || ret.indexOf('{psy}') != -1) {
                        var _psp = pobj.parent && _egret ? Jui.getSingle().getstagePoint(0.5 * pobj.width, 0.5 * pobj.height, pobj) : { x: pobj.x, y: pobj.y };
                        ret = ret.replace(/\{psx\}/g, "(" + parseFloat(_psp.x) + ")");
                        ret = ret.replace(/\{psy\}/g, "(" + parseFloat(_psp.y) + ")");
                    }
                    // idx - 该obj名字中的末尾数字
                    if (ret.indexOf('{idx}') != -1) {
                        var idx = T.geti(aj.obj.name);
                        idx == undefined && (idx = T.son(pobj, aj).indexOf(aj.obj) + 1);
                        ret = ret.replace(/\{idx\}/g, idx);
                    }
                    // len - aj传入的len，默认为pobj中除去名字中带'zi'的孩子总数
                    if (ret.indexOf('{len}') != -1) {
                        var len = aj.len || T.son(pobj, aj).length;
                        ret = ret.replace(/\{len\}/g, len);
                    }
                    ret.includes('{w}') && (ret = ret.replace(/\{w\}/g, !aj.obj.width ? ['w', 'width'].includes(base) ? 0 : parseFloat(T.deval('w', pobj, style, aj)) : aj.obj.width));
                    ret.includes('{h}') && (ret = ret.replace(/\{h\}/g, !aj.obj.height ? ['h', 'height'].includes(base) ? 0 : parseFloat(T.deval('h', pobj, style, aj)) : aj.obj.height));
                    ret = ret.replace(/\{sx\}/g, "(" + (aj.obj.scaleX == undefined ? 1 : aj.obj.scaleX) + ")");
                    ret = ret.replace(/\{sy\}/g, "(" + (aj.obj.scaleY == undefined ? 1 : aj.obj.scaleY) + ")");
                    ret = ret.replace(/\{rot\}/g, "(" + aj.obj.rotation + ")");
                    // 速度，用于循环移动
                    ret = ret.replace(/\{spd\}/g, "(" + (aj.speed == undefined ? 0.066 : aj.speed) + ")");
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
                    ret = ret.replace(/\{rs\}/g, "(" + (Math.random() < 0.5 ? -1 : 1) + ")");
                    ret = ret.replace(/\{x\}/g, "(" + (aj.obj.x || 0) + ")");
                    ret = ret.replace(/\{y\}/g, "(" + (aj.obj.y || 0) + ")");
                }
            }
            if (ret == '()' || ret == '(({w}))') {
                ret = '(0)';
            }
            if (/\{v[\d]\}/.test(ret) == false) {
                ret = parseFloat(isNaN(ret) ? T.doeval(ret) : ret);
            }
        }
        if (_style.bili) {
            if (T.isEgret()) {
                if (!_style.bilipt) {
                    if (base == 'w') {
                        ret = (aj.obj.height || T.deval('h', pobj, style, aj)) * _style.bili;
                    }
                }
                else {
                    if (base == 'w' && egret.MainContext.instance.stage.stageWidth / egret.MainContext.instance.stage.stageHeight >= _style.bili) {
                        ret = (aj.obj.height || T.deval('h', pobj, style, aj)) * _style.bili;
                    }
                    else if (base == 'h' && egret.MainContext.instance.stage.stageWidth / egret.MainContext.instance.stage.stageHeight < _style.bili) {
                        ret = (aj.obj.width || T.deval('w', pobj, style, aj)) / _style.bili;
                    }
                }
            }
            else {
                if (base == 'w') {
                    ret = (aj.obj.height || T.deval('h', pobj, style, aj)) * _style.bili;
                }
            }
        }
        return ret;
    };
    this.dofunc = function (ssfun) {
        var ssa = ssfun.split('(');
        if (window[ssa[0]]) {
            if (ssa.length > 1) {
                var arg = ssa[1].substring(0, ssa[1].length - 1);
                if (arg.indexOf(':') > 0) {
                    try {
                        arg = (window.ifeval ? eval('(' + arg + ')') : JSON.parse(arg));
                    }
                    catch (error) {
                        // 2018/12/05 尝试将arg处理成标准的json格式（指将'替换为"，并确保所有key被"包着），然后再尝试一次JSON.parse
                        try {
                            _arg = arg.replace(/'/g, '"').replace(/[{,]{1}[^":,]+:/g, function (str) {
                                return str[0] + '"' + str.substr(1, str.length - 2) + '"' + str[str.length - 1];
                            });
                            arg = JSON.parse(_arg);
                        }
                        catch (error2) {
                            // 还错就没救了
                        }
                    }
                }
                window[ssa[0]](arg);
            }
            else {
                window[ssa[0]];
            }
        }
    };
    this.doeval = function (str, pclas) {
        var arr = [];
        str = str + "";
        var ostr = str;
        var stra = str.split(/\n/);
        if (stra.length > 1) {
            var ret = '';
            stra.forEach(function (s, idx) {
                ret += T.doeval(s, pclas) + "\n";
            });
            return ret;
        }
        if (str.includes('db.gett()')) {
            str = str.replace('db.gett()', db.gett());
        }
        if (str.indexOf('[') == 0) {
            str.substring(1, str.length - 1).split(',').forEach(function (s, idx) {
                arr.push(T.doeval(s, pclas));
            });
            return arr;
        }
        if (str.indexOf('if(') == 0) {
            var strArr = str.split('else{');
            var i = strArr[0].match(/(if\()(.*)(\)\{)(.*)(\})/);
            if (T.doeval(i[2])) {
                T.dofunc(i[4]);
            }
            else {
                if (strArr.length > 1) {
                    T.dofunc(strArr[1].slice(0, -1));
                }
            }
        }
        //str = "T.fsdfs('dfdfw',0,1).fewfds=";
        //var t=str.match(pattern);
        var pa = str.match(/(pclas|jg_aj)\.([\u4e00-\u9fa5_a-zA-Z0-9]+)/g);
        pa && pa.forEach(function (s, idx) {
            var t = s.match(/(pclas|jg_aj)\.([\u4e00-\u9fa5_a-zA-Z0-9]+)/);
            var v = t[1] == "pclas" ? pclas[t[2]] : window[t[1]] && window[t[1]][t[2]];
            str = str.replace(s, typeof (v) == 'string' ? '"' + v + '"' : v);
        });
        var ta = str.match(/([a-zA-Z]+)((\(\))?)\.(\w+)(\()(.*?)(\)[\.]?)([\u4e00-\u9fa5_a-zA-Z0-9]*)/g);
        ta && ta.forEach(function (s, idx) {
            var t = s.match(/([a-zA-Z]+)((\(\))?)\.(\w+)(\()(.*?)(\)[\.]?)([\u4e00-\u9fa5_a-zA-Z0-9]*)/);
            var v = "";
            var strarg = [t[6]];
            if (strarg.indexOf("{") == 0) {
                strarg = [JSON.parse(t[6].replace(/'/g, '"'))];
            }
            else {
                strarg = t[6].split(/,(?=(?:[^']*(?:'[^']*')?[^']*)*$)/);
                strarg.forEach(function (ss, idnx) { if (ss.substring(0, 1) == '"' || ss.substring(0, 1) == "'")
                    strarg[idnx] = ss.substring(1, ss.length - 1); });
            }
            if (t[2] == "()") {
                v = window[t[1]]()[t[4]](strarg[0], strarg[1], strarg[2], strarg[3], strarg[4], strarg[5]);
            }
            else {
                v = window[t[1]][t[4]](strarg[0], strarg[1], strarg[2], strarg[3], strarg[4], strarg[5]);
            }
            if (v && t[8]) {
                if (t[8] != "substring" && t[8] != "replace" && t[8] != "toFixed") {
                    v = v[t[8]];
                    str = str.replace(s, typeof (v) == 'string' ? "'" + v + "'" : v); //
                }
                else {
                    str = "('" + v + "')." + t[8] + str.split(t[8])[1];
                }
            }
            else {
                str = str.replace(s, typeof (v) == 'string' ? "'" + v + "'" : v); //typeof(v)=='string'?"'"+v+"'": 2019.9.20 恢复加引号 因为 T.doeval("(T._ctrl().idus==jex().getv('idus'))?0:1")
            }
        });
        //if(t&&t.length>3)arr.push(T[t[2]](t[4].replace(/'/g,''))[t[6]]);
        // if(p&&p.length>0)arr.push(pclas[p[2]]);
        stra = str.split('.toFixed(');
        if (str.includes('substring'))
            stra = str.split('.substring(');
        var retd = binding.eval(stra[0], arr || []);
        if (retd == null)
            retd = stra[0];
        if (ta || pa)
            console.log("binding.eval " + ostr + " " + stra[0] + "  retd=" + retd);
        if (stra.length > 1) {
            if (str.includes('substring')) {
                var f = str.match(/(.substring\()(\d+)(\,?)(\d*)/);
                retd = f[4] ? retd.substring(parseInt(f[2]), parseInt(f[4])) : retd.substring(parseInt(f[2]));
            }
            else {
                var f = str.match(/(.toFixed\()(.*?)(\))/);
                if (f && typeof f[2] == "string")
                    f[2] = T.doeval(f[2], pclas);
                retd = retd.toFixed(f && f[2] || 0);
            }
        }
        return retd;
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
        aj.clear = aj.clear == undefined ? true : aj.clear;
        var _dzSymbol = Symbol(); // 这套动作的唯一识别id
        typeof (obj) == 'string' && (obj = T.findObj(obj));
        obj.dzSymbols ? obj.dzSymbols.push(_dzSymbol) : obj.dzSymbols = [_dzSymbol]; // 存储obj的所有dodz记录
        var _pn = ['x', 'y', 'width', 'height', 'scaleX', 'scaleY', 'alpha', 'rotation'];
        var _props = {}, id = obj.id;
        _pn.forEach(function (n) { return _props[n] = T.dcopy(obj[n]); });
        var _egret = T.isEgret(obj);
        aj.clear && _egret && egret.Tween.removeTweens(obj);
        acts = T.dcopy(acts);
        for (var i = acts.length, si = i; i--;) {
            var _act = acts[i];
            _act['条件'] != undefined && (acts.splice(i, (window.ifeval ? eval(_act['条件']) : T.doeval(_act['条件'])) ? 1 : si - i), si = i);
        }
        var __acts = [].concat(acts);
        var _p = __acts[__acts.length - 1] || {};
        if (_p instanceof Array || _p['动作']) {
            _p = {};
        }
        else {
            __acts.pop();
        }
        if (_p.t0) {
            var now = db.gett(), t0 = _p.t0, dt = now - t0, interval = _p.time || 1000;
            // console.log('now$1, t0$2', now, t0);
            var idx = Math.floor(dt / interval), mod = dt % interval;
            var sp = {}; // 起始位置
            if (idx < 0) {
                console.log('db.gett()$1比t0小$2', now, _p.t0);
                idx = 0;
            }
            if (idx < acts.length - 1) {
                sp = { x: acts[idx].x, y: acts[idx].y };
                sp.x = T.deval('x', obj.parent, sp, { obj: obj });
                sp.y = T.deval('y', obj.parent, sp, { obj: obj });
            }
            else {
                sp = { x: acts[acts.length - 1].x, y: acts[acts.length - 1].y };
                sp.x = T.deval('x', obj.parent, sp, { obj: obj });
                sp.y = T.deval('y', obj.parent, sp, { obj: obj });
                // console.error(`解析有t0的act$1时，调用时已超出执行时间，obj$2 in T.dodz`, acts, obj);
                return 0;
            }
            var ep = { x: acts[idx + 1].x, y: acts[idx + 1].y };
            ep.x = T.deval('x', obj.parent, ep, { obj: obj });
            ep.y = T.deval('y', obj.parent, ep, { obj: obj });
            obj.x = sp.x + (ep.x - sp.x) * mod / interval;
            obj.y = sp.y + (ep.y - sp.y) * mod / interval;
            // 生成新的acts
            acts = acts.slice(Math.max(1, idx));
            acts[0].time = interval - mod;
        }
        var _doActions = function (_acts) {
            var result, _i, _acts_1, ag, e_1, _delay;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        _i = 0, _acts_1 = _acts;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _acts_1.length)) return [3 /*break*/, 4];
                        ag = _acts_1[_i];
                        ag = [].concat(ag);
                        return [4 /*yield*/, T.ev(obj, ag, _dzSymbol)];
                    case 2:
                        result = _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_1 = _b.sent();
                        console.log(e_1);
                        return [3 /*break*/, 6];
                    case 6:
                        if (!obj.dzSymbols.includes(_dzSymbol))
                            return [2 /*return*/];
                        obj.dzSymbols.splice(obj.dzSymbols.indexOf(_dzSymbol), 1); // 把动作symbol去掉
                        if (_p.loop == true)
                            _p.loop = 10000;
                        if (_p.loop) {
                            _p.loop--;
                            _delay = T.deval("delay", obj.parent, _p, { obj: obj }) || 0;
                            if (obj["loopdodz"])
                                clearTimeout(obj["loopdodz"]);
                            obj["loopdodz"] = _setTimeout(function () {
                                _pn.forEach(function (n) { return obj[n] = _props[n]; });
                                T.dodz(obj, acts, aj);
                            }, _delay);
                        }
                        else {
                            aj.cb && aj.cb(obj, acts, aj);
                        }
                        return [2 /*return*/];
                }
            });
        };
        T.zsev(_doActions, [__acts]);
        if (aj.broadcast || _p.broadcast) {
            aj.broadcast = _p.broadcast = 0;
            var evobj = {};
            var id_1 = obj.name; //obj.name.split('-')[1] ||obj.name //, ev = `T.dodz('${id}',${JSON.stringify(acts)},${JSON.stringify(aj)})`;
            for (var k1 in acts) {
                // if (T.isEgret(acts[k1])) acts[k1] = acts[k1].name;
                for (var k2 in acts[k1]) {
                    if (acts[k1][k2] && T.isEgret(acts[k1][k2]))
                        acts[k1][k2] = acts[k1][k2].name;
                }
                evobj[acts[k1]['动作']] = acts[k1];
                evobj[acts[k1]['动作']].obj = id_1;
                //delete evobj[acts[k1]['动作']]['动作'];
            }
            // for (let k2 in aj) {
            //     if (T.isEgret(acts[k2])) acts[k2] = acts[k2].name;
            // }
            var sendss = { ev: evobj };
            if (aj.sendex)
                sendss.sendex = aj.sendex;
            if (aj.sendin)
                sendss.sendin = aj.sendin;
            csend(["ss", sendss, id_1]);
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
        var it = g.apply(this, args);
        function go(result) {
            if (result.done) {
                return result.value;
            }
            else {
                return result.value.then(function (value) { return go(it.next(value)); }, function (err) { return go(it.throw(err)); });
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
        var counter = 0;
        return new Promise(function (resolve, reject) {
            for (var _i = 0, actionGroup_1 = actionGroup; _i < actionGroup_1.length; _i++) {
                var a = actionGroup_1[_i];
                // a.obj = obj;
                a.obj = a.obj || obj;
                a.cb = function () {
                    // console.log(`${obj.name}的${a.动作}已完成`);
                    counter++;
                    if (counter == actionGroup.length)
                        resolve(true);
                };
                if (!obj.dzSymbols.includes(dzSymbol)) {
                    console.log('找不到动作symbol，停止dodz');
                    reject();
                }
                try {
                    T.isEgret(obj) ? Jui.getSingle().acts(a) : doAct(a);
                }
                catch (err) {
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
        var ret = [], _aj = aj || {};
        typeof (obj) == 'string' && (obj = T.findObj(obj));
        var _isContainer = (_aj.isContainer == undefined) ? obj.$children != undefined : _aj.isContainer;
        if (_aj.me != undefined)
            _isContainer = (1 - _aj.me);
        if (!_isContainer) {
            var yjm = T.hqyjm(obj.name); // 元件名
            _aj.include = _aj.include === undefined ? [yjm] : [yjm].concat(_aj.include); // 默认只排列与obj同名的元件
            var cpid_1 = (sj.jui[yjm] || {}).pid;
            var clasa = T.findid(yjm, { many: true }).map(function (id) { return sj.clas[id]; }).filter(function (clas) { return T.hqyjm(clas.pid) == cpid_1; });
            // 如果传回来只有一个c且里面只有一个d
            var p1 = jg_aj.tzwzp1;
            if (!aj._id0) {
                if (T.hqyjm(obj.parent.name) != cpid_1 || !p1 && (clasa.length == 0 || clasa.findIndex(function (clas) { return clas._id == obj.name; }) != 0))
                    return; //不重复执行
            }
            obj = obj.parent;
            _isContainer = true; // obj不是容器，则以obj.parent作为容器
        }
        _b = [x, y], _e = _b[0], x = _e === void 0 ? 0 : _e, _f = _b[1], y = _f === void 0 ? 0 : _f;
        _g = [T.deval('x', _isContainer ? obj : obj.parent, { x: x }, { obj: obj }), T.deval('y', _isContainer ? obj : obj.parent, { y: y }, { obj: obj })], _j = _g[0], x = _j === void 0 ? 0 : _j, _k = _g[1], y = _k === void 0 ? 0 : _k;
        var _l = [type, x, y], _o = _l[0], _type = _o === void 0 ? 0 : _o, _q = _l[1], _X = _q === void 0 ? 0 : _q, _u = _l[2], _Y = _u === void 0 ? 0 : _u;
        // 需要入场的时候
        if (_aj.jgt && _aj.enter) {
            var _v = [_X, _Y], _ex = _v[0], _ey = _v[1];
            _aj.enter == '上' && (_ey -= (obj.height || jex().getch()) * 2);
            _aj.enter == '下' && (_ey += (obj.height || jex().getch()) * 2);
            _aj.enter == '左' && (_ex -= (obj.height || jex().getcw()) * 2);
            _aj.enter == '右' && (_ex += (obj.height || jex().getcw()) * 2);
            if (typeof (_aj.enter) == 'object') {
                _ex += _aj.enter.x || 0;
                _ey += _aj.enter.y || 0;
            }
            var __aj_1 = T.dcopy(_aj);
            ['enter', 'jgt', 'dzt', 'ease', 'save'].forEach(function (p) { return delete __aj_1[p]; }); // 这些属性不能传过去
            T.tzwz(obj, type, _ex, _ey, __aj_1);
        }
        _aj.filterFunc = _aj.filterFunc == undefined ? (function (o) { return o.visible; }) : _aj.filterFunc; // 排除隐藏的孩子
        var objects = _isContainer ? T.son(obj, _aj) : [];
        if (obj['排列顺序'])
            objects.sort(function (a, b) { return obj['排列顺序'].indexOf(a.name) - obj['排列顺序'].indexOf(b.name); });
        if (typeof obj.length != 'undefined')
            objects = obj;
        var len = objects.length;
        var _egret = T.isEgret(obj);
        var _m = _aj.modify == undefined ? true : _aj.modify; // 是否修改属性
        var _x = [_aj.anchorX, _aj.anchorY], _y = _x[0], _ax = _y === void 0 ? 0.5 : _y, _z = _x[1], _ay = _z === void 0 ? 0.5 : _z;
        // 公共属性
        var _S = 1 + (_aj.zoomRate || 0); // 缩放速率
        var _s = 1; // 当前的缩放比例
        var _rt = 0; // 旋转角度
        var _A = 1 + (_aj.alphaRate || 0); // 透明度变化速率
        var _a = _A == 1 ? 1 : _A < 1 ? 1 : Math.pow((1 / _A), len); // 透明度
        !_egret && (_aj.jgt = _aj.jgt || 0, _aj.dzt = _aj.dzt || 0);
        // 矩阵排列 需要的属性
        var _sx = (_aj.sx || 'x,y').split(','); // 先横后竖还是先竖后横
        var _D = _sx[0].indexOf('x') != -1; // 横向为行，还是纵向为行
        var _d = _sx.map(function (d) { return d.indexOf('-') == -1 ? 1 : -1; }); // 对应的方向
        var _0 = [_aj.width == undefined ? _isContainer && obj.width : _aj.width, _aj.height == undefined ? _isContainer && obj.height : _aj.height], _1 = _0[0], _W = _1 === void 0 ? 0 : _1, _2 = _0[1], _H = _2 === void 0 ? 0 : _2; // 限制宽，高
        !_D && (_3 = [_H, _W], _W = _3[0], _H = _3[1], _3);
        var _4 = [T.deval('marginX', obj, _aj), T.deval('marginY', obj, _aj)], _5 = _4[0], _mc = _5 === void 0 ? 0 : _5, _6 = _4[1], _mr = _6 === void 0 ? 0 : _6; // 每列、行之间的外间隔
        !_D && (_7 = [_mr, _mc], _mc = _7[0], _mr = _7[1], _7);
        var _8 = [_aj.offsetX, _aj.offsetY], _9 = _8[0], _osc = _9 === void 0 ? 0 : _9, _10 = _8[1], _osr = _10 === void 0 ? 0 : _10; // 每列、行列偏差值
        !_D && (_11 = [_osr, _osc], _osc = _11[0], _osr = _11[1], _11);
        var _12 = [_X, _Y], _c = _12[0], _r = _12[1]; // 列开始位置，行开始位置
        // !_D && ([_c, _r] = [_r, _c]);
        var _13 = [0, 0], _rw = _13[0], _ch = _13[1]; // 行宽，列高
        var _rh = 0; // 行高
        var _curri = 0; // 当前行的index
        var _prsi = 0; // 上一行第一个obj的index
        var _prh = 0; // 上一行的高度
        // 随机屏幕外位置 需要的属性
        var WW = _egret ? egret.MainContext.instance.stage.stageWidth : jex().getcw();
        var WH = _egret ? egret.MainContext.instance.stage.stageHeight : jex().getch();
        // 极坐标排列 需要的属性
        var _14 = [_aj.beginAngle, _aj.endAngle], _15 = _14[0], _ba = _15 === void 0 ? 0 : _15, _16 = _14[1], _ea = _16 === void 0 ? 360 : _16; // 开始、结束角度
        var _radius = _aj.radius || 0;
        var _angle = (_ea - _ba) / len;
        var _childIndex = _isContainer ? objects.length : len;
        // 瀑布流排列 需要的属性
        var _col = _aj.col || 4; // 列数
        var _colha = new Array(_col); // 列高数组
        _colha.fill(0);
        var _colw = (_W - _mc * _col * 2) / _col; // 计算出列宽;
        switch (_type) {
            case 0: {
                // 如果发现所有对象加起来不能排满一行，则修改_mc至能排满一行
                var i = void 0;
                if (_aj.autoAdjust) {
                    var __ww = 0; // 用于统计宽度和
                    for (i = 0; i < len; i++) {
                        var o = objects[i];
                        var radian = Math.PI / 180 * o.rotation;
                        var _17 = [Math.abs(Math.sin(radian)), Math.abs(Math.cos(radian))], sin = _17[0], cos = _17[1];
                        var _w = _D ? sin * o.height + cos * o.width : cos * o.height + sin * o.width;
                        __ww += _w;
                        _rw += _w + 2 * _mc;
                        if (_rw > _W)
                            break;
                    }
                    _rw < _W && (_mc = (_W - __ww) / len * 0.5); // 更新_mc
                    _rw = 0;
                }
                // 正式开始排列
                for (i = 0; i < len; i++) {
                    var o = objects[i], _ret = {};
                    var __sx = _aj.scale != undefined ? _aj.scale : o.scaleX;
                    var __sy = _aj.scale != undefined ? _aj.scale : o.scaleY;
                    _ax != 0.5 && (o.x += o.width * _ax - o.anchorOffsetX);
                    _ay != 0.5 && (o.y += o.height * _ay - o.anchorOffsetY);
                    _ax != 0.5 || _ay != 0.5 && (_18 = [o.width * _ax, o.height * _ay], o.anchorOffsetX = _18[0], o.anchorOffsetY = _18[1], _18);
                    var radian = Math.PI / 180 * o.rotation;
                    var _19 = [Math.abs(Math.sin(radian)), Math.abs(Math.cos(radian))], sin = _19[0], cos = _19[1];
                    var _20 = [sin * o.height * __sy + cos * o.width * __sx, cos * o.height * __sy + sin * o.width * __sx], _w = _20[0], _h = _20[1];
                    !_D && (_21 = [_h, _w], _w = _21[0], _h = _21[1], _21);
                    var str = ('(' + _osc + ')').replace(/{n}/g, _w).replace(/{pn}/g, (i > _prsi ? ret[i - 1].w : 0)).replace(/{ci}/g, i - _prsi).replace(/{ri}/g, _curri);
                    var __osc = (window.ifeval ? eval(str) : T.doeval(str)) || 0;
                    if (_W && Math.floor(_w + _rw + _mc * 2 + __osc) > _W + 10 && i != _prsi) {
                        var str_1 = ('(' + _osr + ')').replace(/{n}/g, _rh).replace(/{pn}/g, _prh).replace(/{ri}/g, _curri);
                        var __osr_1 = (window.ifeval ? eval(str_1) : T.doeval(str_1)) || 0;
                        for (var k = _prsi; k < i && __osr_1 != 0; k++) {
                            _D ? ret[k].y += __osr_1 : ret[k].x += __osr_1;
                        }
                        _ch += _rh + __osr_1 + _mr * 2;
                        _prh = _rh;
                        _22 = [0, 0, 1, 0, i], _rh = _22[0], _rw = _22[1], _s = _22[2], __osc = _22[3], _prsi = _22[4];
                        // 重新计算正确的__osc
                        __osc = T.doeval(('(' + _osc + ')').replace(/{n}/g, _w).replace(/{pn}/g, (i > _prsi ? ret[i - 1].w : 0)).replace(/{ci}/g, 0).replace(/{ri}/g, _curri + 1)) || 0;
                        _curri++;
                    }
                    _aj.alpha != undefined && (_a = _aj.alpha);
                    _aj.scale != undefined && (_s = _aj.scale);
                    _rh = Math.max(_rh, _h);
                    // 2018/08/15 利用anchorOffset计算x,y
                    // [_ret.x, _ret.y, _ret.w, _ret.h, _ret.scaleX, _ret.scaleY, _ret.rotation, _ret.alpha] = [_c + _d[0] * (_rw + _mc + 0.5 * _w + __osc), _r + _d[1] * (_ch + _mr + 0.5 * _h), _w, _h, _s, _s, _rt, _a];
                    _23 = [(_D ? _c : _r) + _d[0] * (_rw + _mc + (_D ? o.anchorOffsetX : o.anchorOffsetY) + __osc), (_D ? _r : _c) + _d[1] * (_ch + _mr + (_D ? o.anchorOffsetY : o.anchorOffsetX)), _w, _h, __sx, __sy, _rt, _a], _ret.x = _23[0], _ret.y = _23[1], _ret.w = _23[2], _ret.h = _23[3], _ret.scaleX = _23[4], _ret.scaleY = _23[5], _ret.rotation = _23[6], _ret.alpha = _23[7];
                    _s *= _S;
                    _a *= _A;
                    !_D && (_24 = [_ret.y, _ret.x], _ret.x = _24[0], _ret.y = _24[1], _24);
                    if (_isContainer && _aj.adjustIndex)
                        obj.setChildIndex(o, --_childIndex);
                    ret.push(_ret);
                    _rw += _w + __osc + _mc * 2;
                }
                // 计算最后一行的offsetY
                var __osr = T.doeval(('(' + _osr + ')').replace(/{n}/g, _rh).replace(/{pn}/g, _prh).replace(/{ri}/g, _curri)) || 0;
                for (var k = _prsi; k < len && __osr != 0; k++) {
                    _D ? ret[k].y += __osr : ret[k].x += __osr;
                }
                // 如果是放在scrollview内的容器，则根据排列后的高度修改其高度
                if (_isContainer && _egret && (_aj.adjustHeight == undefined && obj.parent instanceof egret.ScrollView || _aj.adjustHeight)) {
                    obj[!_D ? 'width' : 'height'] = _ch + _rh + 100;
                    console.log('新ScrollView高度:' + (_ch + _rh + 100));
                }
                break;
            }
            case 1: {
                for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
                    var o = objects_1[_i];
                    o.x += o.width * _ax - o.anchorOffsetX;
                    o.y += o.height * _ay - o.anchorOffsetY;
                    _25 = [o.width * _ax, o.height * _ay], o.anchorOffsetX = _25[0], o.anchorOffsetY = _25[1];
                    var out = Math.max(o.width, o.height);
                    ret.push(randS() == -1 ? { x: 0.5 * WW + randS() * (0.5 * WW + out), y: randAB(-out, WH + out) } : { x: randAB(-out, WW + out), y: 0.5 * WH + randS() * (0.5 * WH + out) });
                }
                break;
            }
            case 2: {
                var _26 = [_aj.beginAngle, _aj.endAngle], _27 = _26[0], _ba_1 = _27 === void 0 ? 0 : _27, _28 = _26[1], _ea_1 = _28 === void 0 ? 360 : _28; // 开始、结束角度
                _angle = (_ea_1 - _ba_1) / (_radiusOffset == 0 && _ba_1 == (_ea_1 % 360) ? len : len - 1); // 考虑排列一圈时不要让首末元素重叠
                for (var i = 0; i < len; i++) {
                    var o = objects[i];
                    var _ret = {};
                    o.x += o.width * _ax - o.anchorOffsetX;
                    o.y += o.height * _ay - o.anchorOffsetY;
                    _29 = [o.width * _ax, o.height * _ay], o.anchorOffsetX = _29[0], o.anchorOffsetY = _29[1];
                    var radian = Math.PI / 180 * (_ba_1 + _angle * i);
                    _ret.rotation = _aj.rotation == undefined ? _ba_1 + _angle * i : _aj.rotation;
                    var __r = _radius + i * _radiusOffset;
                    _ret.x = __r * Math.cos(radian) + _X;
                    _ret.y = __r * Math.sin(radian) + _Y;
                    _30 = [_s, _s], _ret.scaleX = _30[0], _ret.scaleY = _30[1];
                    _ret.alpha = _a;
                    if (_isContainer)
                        obj.setChildIndex(o, --_childIndex);
                    ret.push(_ret);
                    _s *= _S;
                    _a *= _A;
                }
                break;
            }
            case 3: {
                _aj.plane = _aj.plane || 'xz';
                _D = _aj.plane == 'xz' ? true : (_aj.plane == 'yz' ? false : (console.log("unexpected _aj.plane:" + _aj.plane + " in T.tzwz()"), true));
                var _31 = [_aj.beginAngle, _aj.endAngle], _32 = _31[0], _ba_2 = _32 === void 0 ? 0 : _32, _33 = _31[1], _ea_2 = _33 === void 0 ? 360 : _33; // 开始、结束角度
                var half = len * 0.5;
                var _objects = [].concat(objects);
                // 因为需要调整z-index，调整前先将原objects的z-index记录下来
                obj.tzwzOriginIndex = _objects.map(function (o) { return ({ name: o.name, idx: o.parent.getChildIndex(o) }); });
                for (var i = 0; i < len; i++) {
                    var o = _objects[i];
                    var _ret = {};
                    o.x += o.width * _ax - o.anchorOffsetX;
                    o.y += o.height * _ay - o.anchorOffsetY;
                    _34 = [o.width * _ax, o.height * _ay], o.anchorOffsetX = _34[0], o.anchorOffsetY = _34[1];
                    var radian = Math.PI / 180 * (_ba_2 + _angle * i);
                    var _35 = [Math.sin(radian), Math.cos(radian)], sin = _35[0], cos = _35[1];
                    var tanTheta = 1; // 假定镜头正四棱截锥角度为45
                    var dist = _radius - _radius * cos;
                    var xrate = WW / (WW + 2 * dist * tanTheta);
                    var yrate = WH / (WH + 2 * dist * tanTheta);
                    var _36 = [sin * _radius * xrate, 0], _offsetX = _36[0], _offsetY = _36[1];
                    !_D && (_37 = [_offsetY, _offsetX], _offsetX = _37[0], _offsetY = _37[1], _37);
                    _38 = [_offsetX + _X, _offsetY + _Y], _ret.x = _38[0], _ret.y = _38[1];
                    // 2019/01/11 scale基于obj当前的scale
                    _39 = [cos * o.width * xrate / o.width * o.scaleX, Math.abs(o.height * yrate) / o.height * o.scaleY], _ret.scaleX = _39[0], _ret.scaleY = _39[1];
                    !_D && (_40 = [_ret.scaleY, _ret.scaleX], _ret.scaleX = _40[0], _ret.scaleY = _40[1], _40);
                    _ret.alpha = Math.pow(_A, (i > half ? len - i : i));
                    if (_isContainer)
                        obj.setChildIndex(o, len - 1 - (i > half ? (len - i) * 2 : i == 0 ? 0 : i * 2 - 1));
                    ret.push(_ret);
                }
                break;
            }
            case 4: {
                var _left = _colw * 0.5 + _mc;
                var _colW = _colw + _mc * 2;
                for (var _41 = 0, objects_2 = objects; _41 < objects_2.length; _41++) {
                    var o = objects_2[_41];
                    _ax != 0.5 && (o.x += o.width * _ax - o.anchorOffsetX);
                    _ay != 0.5 && (o.y += o.height * _ay - o.anchorOffsetY);
                    _ax != 0.5 || _ay != 0.5 && (_42 = [o.width * _ax, o.height * _ay], o.anchorOffsetX = _42[0], o.anchorOffsetY = _42[1], _42);
                    var _ret = {}, curci = _colha.reduce(function (pre, cur, i) { return cur * 1.1 < _colha[pre] ? i : pre; }, 0); // 找出最小列高的列序号，*1.1回避浮点数大小比较问题
                    var bili = _colw / (_D ? o.width : o.height);
                    bili != 1 && (_ret.scaleX = _ret.scaleY = bili);
                    _ret.x = _X + _left + _colW * curci;
                    _ret.y = _Y + _colha[curci] + o.height * bili * 0.5 + _mr;
                    _colha[curci] += o.height * bili + _mr * 2;
                    !_D && (_43 = [_ret.y, _ret.x], _ret.x = _43[0], _ret.y = _43[1], _43);
                    ret.push(_ret);
                }
                break;
            }
            case 5: {
                var i = void 0, _len = void 0, _ret = {};
                if (len > 0) {
                    _ret.x = _c;
                    _ret.y = _r;
                    _ret.w = objects[0].width;
                    _ret.h = objects[0].height;
                    _ret.scaleX = _ret.scaleY = 1;
                    _ret.alpha = 1;
                    obj.setChildIndex(objects[0], len);
                }
                ret.push(_ret);
                for (i = 1, _len = Math.floor(len / 2) + 1; i < _len; i++) {
                    var o = objects[i];
                    _ret = {};
                    var rate = Math.pow(1.7, -i * i); // 利用指数函数模拟
                    var preRet = ret[i - 1];
                    _ret.x = preRet.x + (preRet.w + o.width) * 0.5;
                    _ret.y = preRet.y;
                    _ret.w = o.width;
                    _ret.h = o.height;
                    _ret.scaleX = preRet.scaleX * rate;
                    _ret.scaleY = preRet.scaleY * rate;
                    _ret.alpha = preRet.alpha * rate * 0.7;
                    obj.setChildIndex(o, len - i);
                    ret.push(_ret);
                }
                for (i = len - 1, _len = Math.floor(len / 2) + 1; i >= _len; i--) {
                    var o = objects[i];
                    _ret = {};
                    var rate = Math.pow(1.7, -(len - i) * (len - i)); // 利用指数函数模拟
                    var preRet = i == len - 1 ? ret[0] : ret[i + 1];
                    _ret.x = preRet.x - (preRet.w + o.width) * 0.5;
                    _ret.y = preRet.y;
                    _ret.w = o.width;
                    _ret.h = o.height;
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
        if (_aj.jgt != undefined) {
            var pa = objects.map(function (o, i) {
                var act = [];
                if (_aj.save) {
                    if (parseInt(o.x) != parseInt(ret[i].x) || parseInt(o.y) != parseInt(ret[i].y))
                        T.func(o.name, { x1: ret[i].x, y1: ret[i].y });
                }
                _b = ['(' + ret[i].x + ')', '(' + ret[i].y + ')'], ret[i].x = _b[0], ret[i].y = _b[1];
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
                var _b;
            });
            T.jgzx(T.dodz, _aj.jgt, _aj.cb, pa);
        }
        else if (_m) {
            objects.forEach(function (o, i) {
                var mask = _isContainer ? obj.getChildByName(o.name + 'zimask') : null;
                if (mask) {
                    T.merge(mask, ret[i]);
                    mask.x = ret[i].x - o.x;
                    mask.y = ret[i].y - o.y;
                }
                if (_aj.save) {
                    if (parseInt(o.x) != parseInt(ret[i].x) || parseInt(o.y) != parseInt(ret[i].y))
                        T.func(o.name, { x1: ret[i].x, y1: ret[i].y });
                }
                T.merge(o, ret[i]);
                _aj.onPerFinish && _aj.onPerFinish(o);
            });
            _aj.cb && _aj.cb();
        }
        return ret;
        var _b, _e, _f, _g, _j, _k, _3, _7, _11, _18, _21, _22, _23, _24, _25, _29, _30, _34, _37, _38, _39, _40, _42, _43;
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
        }
        else {
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
        if (!pobj)
            return [];
        var _aj = aj || {};
        _aj.include && (_aj.include = [].concat(_aj.include));
        if (_aj.exclude != "")
            _aj.exclude != undefined ? (_aj.exclude = [].concat(_aj.exclude)) : _aj.exclude = ['zi'];
        if (pobj.$children) {
            return pobj.$children.filter(function (o) {
                var ret = true;
                if (_aj.filterFunc)
                    ret = _aj.filterFunc(o);
                if (ret)
                    ret = (_aj.exclude ? _aj.exclude.every(function (ex) { return (_aj.fullname ? o.name : T.hqyjm(o.name)).indexOf(ex) == -1; }) : true);
                if (ret)
                    ret = (_aj.include ? _aj.include.some(function (i) { return (_aj.fullname ? o.name : T.hqyjm(o.name)).indexOf(i) != -1; }) : true);
                return ret;
            });
        }
        else {
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
        var _egret = T.isEgret(obj);
        if (_egret) {
            var funcName = timerName + "func";
            if (obj[timerName]) {
                obj[timerName].stop();
            }
            else if (!aj.stop) {
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
        }
        else {
            var funcName = timerName + "func";
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
    this.ini = function (defaults, aj, notson) {
        // 获取cd的tag（执行对象名+act名）
        aj.actname = aj.actname || defaults.actname;
        var cd = aj.cd == undefined ? defaults.cd : aj.cd;
        if (cd) {
            var cdTag = (T.findObj(aj.tobj ? [].concat(aj.tobj)[0] : aj.obj || defaults.obj) || {}).name + (aj.actname ? aj.actname : T.ini.caller.name || "anonymous");
            if (!T.cd(cdTag, cd))
                if (egret.Capabilities.runtimeType == "qqgame") {
                    return { type: "cd", msg: "T.ini 存在cd，且在冷却时间，不执行动作" };
                }
                else {
                    throw { type: "cd", msg: "T.ini 存在cd，且在冷却时间，不执行动作" };
                }
        }
        var caller = aj.actname ? window[aj.actname] : T.ini.caller;
        if (aj.delay) {
            setTimeout(function () {
                var _aj = {};
                _aj = T.dcopy(aj);
                delete _aj.delay;
                caller(_aj);
            }, aj.delay);
            if (egret.Capabilities.runtimeType == "qqgame") {
                return { type: "delay", msg: "T.ini 存在delay，setTimeout " + aj.delay + "ms后执行" };
            }
            else {
                throw { type: "delay", msg: "T.ini 存在delay，setTimeout " + aj.delay + "ms后执行" };
            }
        }
        if (defaults.obj && !aj.obj)
            aj.obj = defaults.obj; // 当用户未给出obj的时候，取动作里的默认设置
        if (defaults.tobj && !aj.tobj)
            aj.tobj = defaults.tobj;
        var obj = aj.obj || jg_aj.stra1[0] && jg_aj.stra1[0]._id || jg_aj.curproj + "_游戏容器" + T.dqcj();
        ; // 2019.4.16 发现 隐藏的对象 如果没有，若以游戏容器为默认对象，会把它隐藏了。但如果不加默认对象，很多地方出错
        var cb = aj.cb || defaults.cb;
        //if(obj==undefined){
        //            cb && cb();
        //            throw {type:"error", msg:"T.ini 找不到obj"};
        //        }
        if (typeof obj == 'string')
            obj = sj.obj[T.findid(obj)];
        if (aj.obj && !obj) {
            cb && cb();
            if (egret.Capabilities.runtimeType == "qqgame") {
                return { type: "error", msg: "T.ini 既指定obj又找不到obj: " + aj.obj };
            }
            else {
                throw { type: "error", msg: "T.ini 既指定obj又找不到obj: " + aj.obj };
            }
        }
        var objs = (aj.tobj && (typeof aj.tobj == "string" || aj.tobj instanceof Array)) ? ([].concat(aj.tobj).reduce(function (pre, cur) { return pre.concat(T.findids(cur).map(function (id) { return sj.obj[id]; })); }, [])) : [obj];
        if (typeof aj.tobj == 'object' && !(aj.tobj instanceof Array))
            objs = [aj.tobj];
        if (!aj.fromTini && objs.length > 1) {
            objs.forEach(function (o) {
                console.log("T.ini " + o.name);
                //let _aj = Object.assign({}, aj, {obj:o, tobj:o.name, fromTini:1});
                var _aj = {};
                _aj = T.dcopy(aj);
                _aj.oldobj = _aj.obj;
                _aj.obj = o;
                _aj.tobj = o.name;
                _aj.fromTini = 1;
                caller(_aj);
            });
            cb && cb();
            if (egret.Capabilities.runtimeType == "qqgame") {
                return { type: "tobj", msg: "T.ini obj:" + (obj ? obj.name : "") + " 存在tobj:" + (aj.tobj.length ? aj.tobj : aj.tobj.name) + "，调用caller" };
            }
            else {
                throw { type: "tobj", msg: "T.ini obj:" + (obj ? obj.name : "") + " 存在tobj:" + (aj.tobj.length ? aj.tobj : aj.tobj.name) + "，调用caller" };
            }
        }
        if (aj.tobj && objs.length == 0) {
            cb && cb();
            if (egret.Capabilities.runtimeType == "qqgame") {
                return { type: "error", msg: "T.ini 找不到tobj" + aj.tobj };
            }
            else {
                throw { type: "error", msg: "T.ini 找不到tobj" + aj.tobj };
            }
        }
        var oldobj = obj;
        if (aj.tobj && objs.length == 1) {
            obj = objs[0];
        }
        var pobj = obj ? obj.parent : null;
        var a = T.merge(defaults, aj, (obj && pobj) ? [obj, pobj] : undefined);
        if (a.tobj && objs.length == 1) {
            a.oldobj = oldobj;
            a.obj = objs[0];
        }
        var sobj = [];
        if (!notson && obj)
            sobj = T.son(obj, a);
        if (aj.if != undefined) {
            if (!aj.if) {
                cb && cb();
                if (egret.Capabilities.runtimeType == "qqgame") {
                    return { type: "if", msg: "if 不通过" };
                }
                else {
                    throw { type: "if", msg: "if 不通过" };
                }
            }
            if (aj.if == 1 && obj && sj.clas[obj.name].idus && sj.clas[obj.name].idus != jg_aj.idus) {
                cb && cb();
                if (egret.Capabilities.runtimeType == "qqgame") {
                    return { type: "if", msg: "if 不通过" + sj.clas[obj.name].idus };
                }
                else {
                    throw { type: "if", msg: "if 不通过" + sj.clas[obj.name].idus };
                }
            }
            var ajif = aj.if + '';
            if (ajif.length > 2)
                if (window.ifeval ? eval(ajif) : T.doeval(ajif, obj)) {
                    console.log('通过aj.if:' + ajif);
                }
                else {
                    cb && cb();
                    if (egret.Capabilities.runtimeType == "qqgame") {
                        return { type: "if", msg: "if 不通过: eval(" + ajif };
                    }
                    else {
                        throw { type: "if", msg: "if 不通过: eval(" + ajif };
                    }
                }
        }
        if (!aj.fromTini && aj.loop) {
            var _aj_1 = {};
            _aj_1 = T.dcopy(aj);
            setTimeout(function () {
                if (_aj_1.loop--) {
                    if (!T.isEgret(obj) && !document.getElementById(obj.name))
                        return; //当h5换场景以后，对象不存在 则不循环。
                    caller(_aj_1);
                }
            }, aj.interval || 50);
            //throw {type:"loop", msg:"T.ini 存在loop，setInterval "+aj.interval+"ms"};
        }
        return [obj, pobj, sobj, a];
    };
    this.obj = function (aj) {
        aj = aj || {};
        typeof (aj) == 'string' && (aj = { obj: aj });
        var obj, pobj, objType = typeof (aj.obj);
        if (objType == 'object') {
            obj = aj.obj;
        }
        else if (objType == 'string') {
            obj = sj.obj[T.findid(aj.obj)];
        }
        if (obj == undefined)
            return false;
        pobj = obj.parent;
        return [obj, pobj];
    };
    this._ctrl = function (abc) {
        var ctrl = sj.clas[T.findid('控制容器' + (abc || T.dqcj()), { room: T.my()['房间'] })];
        if (ctrl == undefined)
            console.error('找不到"控制容器' + abc + '"的clas in T._ctrl');
        return ctrl; //(ctrl || { data: [] }).data[0] || {};
    };
    this.ctrl = function (abc) {
        return T._ctrl(abc);
    };
    /**
     * 返回sj.clas中idus为jg_aj.idus的clas对象
     * @param {String} [clasname="用户"] - 查找的元件名
     * @return {Object}
     */
    this._my = function (clasname) {
        if (clasname === void 0) { clasname = "用户"; }
        var _c = sj.clas[T.findid(clasname || "用户", { many: 1, idus: jg_aj.idus })];
        if (_c === undefined)
            console.error("\u627E\u4E0D\u5230\"" + clasname + "(idus:'" + jg_aj.idus + "')\"\u7684clas in T._my");
        return _c || {};
    };
    this.my = function () {
        return T._my();
    };
    this.inname = function (obj, name) {
        var aname = [].concat(name);
        for (var _i = 0, aname_1 = aname; _i < aname_1.length; _i++) {
            var iname = aname_1[_i];
            try {
                if (obj.name.split('_')[1].indexOf(iname) > -1 || obj.ridclas && obj.ridclas.split('_')[1].indexOf(iname) > -1)
                    return true;
            }
            catch (e) {
                console.log(e + "obj.name:" + obj.name + " obj.ridclas:" + obj.ridclas);
            }
        }
        ;
        return false;
    };
    this.findmyid = function (id, aj) {
        aj = aj || {};
        aj.idus = jg_aj.idus;
        return T.findid(id, aj);
    };
    this.findids = function (id, aj) {
        aj = aj || {};
        var idArr = [];
        if (typeof (id) == 'string') {
            aj.many = true;
            return T.findid(id, aj);
        }
        if (id instanceof Array) {
            for (var _i = 0, id_2 = id; _i < id_2.length; _i++) {
                var d = id_2[_i];
                idArr.push(T.findid(d, aj));
            }
            return idArr;
        }
        return [];
    };
    this.findid = function (id, aj) {
        'use strict';
        var _id = id, a = aj || {};
        if (!a.json || Object.getOwnPropertyNames(a.json).length == 0)
            a.json = sj.clas;
        a.many = a.many || 0;
        if (typeof (id) != 'string')
            return a.many ? [] : id;
        if (["whe", "idd", "q", "obj", "cb", "exclude", "include"].indexOf(id) > -1)
            return a.many ? [] : id;
        if (!a.onlyid) {
            if (id.indexOf('topproj') == 0) {
                id = id.replace('topproj', jg_aj.topproj);
            }
            else {
                id.indexOf('_') < 1 && (id = jg_aj.curproj + '_' + id.replace('_', ''));
            }
        }
        var hasData = id.split('-')[1] != undefined;
        var yjm = T.hqyjm(id);
        var dataa = [];
        if (!a.many && a.json[id] && !a.idus)
            return id;
        for (var i in a.json) {
            var ife = 0;
            if (a.onlyid) {
                if (i.indexOf(id) == 0)
                    return i;
            }
            else {
                if (i.split('＃')[0] == id.split('＃')[0]) {
                    ife = 1; //if (a.many) dataa.push(i); else return i;
                }
                else if (hasData && !a.many) {
                    if (yjm == i.split('＃')[0])
                        ife = 1; //dataa.push(i); // 找到不带d的,id这个时候有d
                }
                else if (T.hqyjm(i) == yjm) {
                    ife = 1; //dataa.push(i); // 找到带d的
                }
                else if (a.json[i].ridclas) {
                    if (a.json[i].ridclas.split('_')[1] == id.split('_')[1])
                        ife = 1;
                }
                if (ife == 0 && a.json[i].idclas) {
                    if (a.json[i].idclas == yjm)
                        ife = 1;
                }
                if (a.room && ife)
                    if (sj.clas[i]['房间'] && sj.clas[i]['房间'] != a.room)
                        ife = 0;
                if (a.idus && ife)
                    if (sj.clas[i].idus != a.idus)
                        ife = 0;
                if (ife) {
                    if (a.many)
                        dataa.push(i);
                    else
                        return i;
                }
            }
        }
        //if (a.idus) dataa = dataa.filter(n => sj.clas[n].idus == a.idus);
        if (dataa.length == 0) {
            if (["游戏容器", "控制容器", "场景", "游戏窗", "游戏层"].includes(_id)) {
                return T.findid(id + T.dqcj(), a);
            }
            if (!a.findtproj && jg_aj.curproj != jg_aj.topproj) {
                a.findtproj = 1;
                return T.findid(jg_aj.topproj + '_' + (id.indexOf('_') > -1 ? id.split('_')[1] : id), a);
            }
            console.log("\u65E0\u6CD5\u5728json\u4E2D\u627E\u5230\u4E0E" + id + "\u6709\u5173\u7684\u5BF9\u8C61 in T.findid");
            return a.many ? [] : _id;
        }
        else {
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
        var id = '';
        if (typeof (obj) == 'string') {
            id = T.findid(obj);
        }
        else if (obj && obj.name) {
            id = obj.name;
        }
        // id = T.findid(id);
        var _obj = sj.obj[id];
        var _clas = sj.clas[id];
        if (id != '' && _obj && _clas) {
            obj = _obj;
            console.log("\u6A21\u62DF\u70B9\u51FB:" + id);
            // 先模拟act
            if (_obj.clas) {
                _obj.clas.forEach(function (c) {
                    var clas = sj.obj[c];
                    if (clas && clas.aclas && clas.aclas[id]) {
                        T.dodz(clas, clas.aclas[id]);
                    }
                });
            }
            if (typeof (_clas.func) == 'object') {
                Jui.getSingle().actt(obj, obj.parent, _clas.func);
                if (_clas.func.jpn) {
                }
                else {
                    window['T'].func(obj.name, { stopp: 50 });
                }
                return;
            }
            // 再模拟func
            var func = _clas.func ? typeof (_clas.func) == 'string' ? { 'anonymous': _clas.func } : _clas.func : { 'anonymous': "T.func(this,{stopp:50})" };
            for (var key in func) {
                if (key == 'jpn') {
                    jpn(obj);
                }
                else {
                    var str = func[key].replace(/this/gi, "'" + id + "'");
                    if (!str.includes('(')) {
                        T.mndj(str);
                        continue;
                    }
                    if (str == 'jpn()')
                        str = 'jpn(obj)';
                    if (!str.includes('jpn'))
                        jex().stoppp();
                    (window.ifeval ? eval(str) : T.doeval(str));
                }
            }
        }
        else {
            console.log("error: \u627E\u4E0D\u5230\u8BE5\u5BF9\u8C61\uFF0Cid:" + id + ",sj.obj[id]:" + sj.obj[id]);
        }
    };
    this.mncsend = function (obj, ev, opid, editm) {
        'use strict';
        var id = '';
        if (typeof (obj) == 'string') {
            id = obj;
        }
        else if (obj && obj.name) {
            id = obj.name;
        }
        sj.clas[id] && sj.clas[id].oid && (id = sj.clas[id].oid);
        var _opid = opid || (id.indexOf('-') != -1 ? id.split('-')[1] : id);
        var _editm = editm || 0;
        id != '' && opid != '' && csend(["", { "editm": _editm, "id": id, "ev": ev || "not" }, id, jg_aj.Sneedi, jg_aj.Ci]) && console.log("\u6A21\u62DFcsend:" + id);
    };
    this.znps = function (c, color, _level) {
        'use strict';
        color = color || jg_aj.dqps;
        _level = _level || 0;
        var _zs = color[0], _cs = color[1], _zis = color[2], _fsa = color.slice(3); // 主色，容器色，字体色，...副色（元件色）
        var len = c.$children.length;
        var _ci = 0; // 这一层颜色序数
        if (T.isEgret(c)) {
            for (var i = 0; i < len; i++) {
                var _c = c.$children[i];
                if (sj.clas[_c.name] && sj.clas[_c.name].typ >= 50) {
                    continue;
                }
                else if (_c.name.indexOf('zibg') != -1 && _c instanceof egret.Shape) {
                    var _color = _level > 0 ? _fsa[_ci % _fsa.length] : _zs;
                    var _colorHex = _color.toString(16);
                    _c.graphics.clear();
                    _c.graphics.beginFill(_color);
                    _c.graphics.drawRect(0, 0, c.width, c.height);
                    _c.graphics.endFill();
                    _ci++;
                }
                else if (_c instanceof egret.TextField) {
                    _c.$setTextColor(_zis);
                }
                else if (_c instanceof egret.DisplayObjectContainer) {
                    var __fsa = [].concat(_fsa);
                    var _len = __fsa.length;
                    var tail = __fsa.splice(_ci % _len, _len - _ci % _len);
                    var newColor = [_zs, _zis].concat(tail.concat(__fsa));
                    if (T.znps(_c, newColor, _level + 1))
                        _ci++;
                }
                else {
                    // 其他暂不处理
                }
            }
        }
        else {
            c.id.includes('游戏容器') && jg_aj.psmode == 1 && !c.bgcolor && (c.bgcolor = _zs);
            for (var _i = 0, _b = c.$children; _i < _b.length; _i++) {
                var _c = _b[_i];
                var bgmodify = jg_aj.psmode == 1 && (!_c.bgcolor || _c.bgcolor == '#000000');
                var txtmodify = jg_aj.psmode == 1 && (!_c.textcolor || _c.textcolor == '#000000');
                if (_c.$children.length > 0) {
                    bgmodify && (_c.bgcolor = _cs);
                    T.znps(_c, color, _level + 1);
                }
                else {
                    bgmodify && (_c.bgcolor = _fsa[_ci % _fsa.length]);
                    txtmodify && (_c.textcolor = _zis);
                    _ci++;
                }
            }
        }
        return _ci;
    };
    // 一些默认色值
    this.znps.COLOR = {
        RAINBOW: [0xffffff, 0x000000, 0xea2a29, 0xf16729, 0xf89322, 0xffcf14, 0xffea0d, 0x87b11d, 0x008253, 0x3277b5, 0x4c549f, 0x764394, 0xca0d86],
        RED: [0xffffff, 0x000000, 0xdf0000, 0xbf0000, 0x9f0000, 0x7f0000, 0x5f0000, 0x3f0000, 0x1f0000],
        GREEN: [0xffffff, 0x000000, 0x00df00, 0x00bf00, 0x009f00, 0x007f00, 0x005f00, 0x003f00, 0x001f00],
        BLUE: [0xffffff, 0x000000, 0x0000df, 0x0000bf, 0x00009f, 0x00007f, 0x00005f, 0x00003f, 0x00001f],
        Aries: [0xeafaf9, 0x88d6ec, 0x333333, 0xbbbbbb, 0xffba7e, 0xdedb70, 0x6adadb, 0xff7374, 0x5ccee6],
        Color: [0xeafaf9, 0x88d6ec, 0x333333, 0xe75aa5, 0x8f4ef0, 0x5bd543, 0xf7bd42, 0x52c7ce, 0x308bf7, 0xf0535b]
    };
    this.color = function (rawData, format, aj) {
        'use strict';
        var type = typeof (rawData), rgba = [0, 0, 0, 255];
        format = format || '#{r}{g}{b}';
        format == '0x' && (format = '0x{r}{g}{b}'); // 自动补全'0x'
        format == '#' && (format = '#{r}{g}{b}'); // 自动补全'#'
        format == 'rgb' && (format = 'rgb({r},{g},{b})'); // 自动补全'rgb'
        format == 'rgba' && (format = 'rgba({r},{g},{b},{a})'); // 自动补全'rgba'
        if (rawData instanceof Array) {
            for (var i = rawData.length; i--;)
                rgba[i] = rawData[i] || 0;
        }
        else if (['string', 'number'].includes(type)) {
            if (type == 'string') {
                var _rd_1 = '';
                if (rawData[0] == '#') {
                    _rd_1 = rawData.substring(1);
                }
                else if (rawData.indexOf('0x') == 0) {
                    _rd_1 = rawData.substring(2);
                }
                else {
                    console.log("\u672A\u77E5\u6570\u636E\u683C\u5F0F in T.color");
                }
                var n_1 = [3, 4].includes(_rd_1.length) ? 1 : [6, 8].includes(_rd_1.length) ? 2 : undefined;
                n_1 && (rgba = rgba.map(function (c, i) { return parseInt('0x' + (_rd_1.substr(i * n_1, n_1) || 'ff')); }));
            }
            else {
                var c = rawData;
                if (!isNaN(c) && c >= 0 && c <= 0xffffff)
                    rgba = [Math.floor(c >> 16), Math.floor((c % 0x10000) >> 8), Math.floor(c % 0x100)];
            }
            // let c = parseInt(rawData);
            // if(isNaN(c) || c<0 || c>0xffffff) { /*console.log(`输入数据rawData:${rawData}不正确 in T.color`);*/ return rawData; }
            // rgb = [Math.floor(c/0x10000), Math.floor((c%0x10000)/0x100), Math.floor(c%0x100)];
        }
        else {
            // console.error(`暂不支持该输入格式，rawData %o，将返回rawData in T.color`, rawData);
            rawData = 0x000000;
            return rawData;
        }
        (format.includes('#') || format.includes('0x')) && (rgba = rgba.map(function (n) { n = n.toString(16); n.length < 2 && (n = '0' + n); return n; }));
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
        var a = T.merge({ t: 0, format: 'auto' }, aj || {});
        if (a.format == 'auto') {
            var ret = '', _t = {}, count = 3;
            _t['天'] = Math.floor(a.t / 86400000);
            a.t = a.t % 86400000;
            _t['时'] = Math.floor(a.t / 3600000);
            a.t = a.t % 3600000;
            _t['分'] = Math.floor(a.t / 60000);
            a.t = a.t % 60000;
            _t['秒'] = Math.floor(a.t / 1000);
            for (var i in _t)
                count && _t[i] != 0 && (ret += "" + _t[i] + i, count--);
            return ret;
        }
        return (new Date(a.t)).format(a.format);
    };
    /**
     * 获取某个属性
     * @param
     */
    this.getp = function (base, prop) {
        if (typeof (base) != 'object')
            return false;
        var _pa = (prop + '').split('.');
        for (var _i = 0, _pa_1 = _pa; _i < _pa_1.length; _i++) {
            var p = _pa_1[_i];
            base = base[p];
            if (base == undefined)
                return false;
        }
        return true;
    };
    /**
     * 正确设置属性
     * @param {Object} obj - 需要设置属性的对象
     * @param {String} prop - 设置的属性，如"style.bgimg"
     * @param {any} value - 设置的值
     */
    this.setp = function (obj, prop, value) {
        var _pa = (prop + '').split('.');
        _pa.reduce(function (pre, cur, idx) { return (idx != _pa.length - 1 ? pre[cur] || (pre[cur] = {}) : (pre[cur] = value)); }, obj);
    };
    /**
     *
     */
    this.mergea = function (data, json, deepLevel) {
        if (deepLevel === void 0) { deepLevel = 999; }
        try {
            var _loop_3 = function (i) {
                if (typeof (json[i]) !== 'object' || json[i]._id === undefined) {
                    data.push(T.dcopy(json[i]));
                }
                else {
                    json[i]._id.includes("＃") && (json[i]._id = json[i]._id.split("＃")[0]);
                    var lai = data.findIndex(function (ii) { return ii._id === json[i]._id; });
                    var la = data[lai];
                    if (la) {
                        if (deepLevel === 0 || json[i].typ) {
                            data[lai] !== json[i] && (data[lai] = json[i]);
                        }
                        else {
                            T.merge(la, json[i], [], deepLevel - 1);
                        }
                        console.log("T.mergea,找到并合并：_id:" + json[i]._id); //+JSON.stringify(la)
                    }
                    else {
                        data.push(json[i]);
                    }
                }
            };
            for (var i = 0; i < json.length; i++) {
                _loop_3(i);
            }
        }
        catch (ex) {
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
    this.merge = function (obj, json, objArr, deepLevel) {
        if (deepLevel === void 0) { deepLevel = 999; }
        if (typeof (obj) !== 'object') {
            console.error("error: obj(" + obj + ") is not an object");
            return false;
        }
        if (typeof (json) !== 'object' && json !== '{remove}') {
            console.warn("error: json(" + json + ") is not an object");
            return obj;
        }
        // 需要T.deval计算的属性名
        var _egret = T.isEgret(obj);
        objArr = objArr || [];
        var i, devalProp = ['x', 'y', 'addx', 'addy', 'w', 'width', 'h', 'height', 'scaleX', 'scaleY', 'rotation', 'time', 'sleep', 'delay'];
        var visited = []; // 遍历过的属性
        for (i in json) {
            if (json[i] !== null && typeof (json[i]) === 'object') {
                if (json[i] instanceof HTMLElement || T.isEgret(json[i])) {
                    obj[i] = json[i];
                }
                else {
                    if (i === 'data' && (obj[i] instanceof Array)) {
                        T.mergea(obj[i], json[i]);
                    }
                    else if (typeof (obj[i]) !== 'object') {
                        obj[i] !== json[i] && (obj[i] = json[i]);
                    }
                    else {
                        json[i] instanceof Array && (obj[i] = [].concat(obj[i]));
                        deepLevel === 0 ? obj[i] = json[i] : T.merge(obj[i], json[i], [], deepLevel - 1);
                    }
                }
            }
            else {
                visited.push(i);
                if (json[i] === '{remove}') {
                    if (typeof (obj[i]) === 'object') {
                        if (obj[i] instanceof Array) {
                            obj[i] = [];
                        }
                        else {
                            obj[i] = {};
                        }
                    }
                    else {
                        delete obj[i];
                    }
                }
                else if (json[i] && json[i].includes && json[i].includes("＃")) {
                    obj[i] = json[i].split("＃")[0];
                }
                else if (json[i] !== undefined) {
                    obj[i] = (objArr[0] && objArr[1] && devalProp.includes(i) ? T.deval(i, objArr[1], json, { obj: objArr[0] }) : json[i]);
                }
            }
        }
        function _deepDeval(json, visited, objArr) {
            if (T.isEgret(json))
                return;
            for (var i_1 in json) {
                var p = json[i_1];
                var _egret_1 = T.isEgret(p);
                if (typeof (p) == 'object' && !_egret_1 && !(p instanceof TJH5) && !(p instanceof HTMLElement)) {
                    _deepDeval(p, visited, objArr);
                }
                else if (!visited.includes(i_1) && devalProp.includes(i_1)) {
                    json[i_1] = T.deval(i_1, objArr[1], json, { obj: objArr[0] });
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
        var id = typeof (obj) == 'string' ? obj : typeof (obj) == 'object' ? obj.name : '';
        obj = T.findObj(id);
        if (!obj) {
            console.log("\u627E\u4E0D\u5230\u5BF9\u8C61id:" + id + " in T.removeObj");
            return false;
        }
        id = obj.name;
        var children = obj.$children || [];
        children.forEach(function (c) { return T.removeObj(c); });
        delete sj.obj[id];
        delete sj.clas[id];
        var dom = obj.dom;
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
            var exclude = ['zi']; //['ziImg', 'zibg', 'zitext', 'mask'];
            aj.exclude && (exclude = aj.exclude.concat(ex));
            var _loop_4 = function (t, s) {
                var name_1 = c.getChildAt(s).name;
                if (!exclude.some(function (e) { return name_1.indexOf(e) != -1; })) {
                    Jui.getSingle().removeObj(c.getChildAt(s));
                }
            };
            for (var t = c.$children, s = t.length - 1; s >= 0; s--) {
                _loop_4(t, s);
            }
            delete c.tChildren;
        }
        else {
            T.son(c, aj).forEach(function (s) { return T.removeObj(s); });
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
        var len = (fa instanceof Array && fa.length) || (ta && typeof (ta) != 'string' && ta.length) || (pa && pa.length) || (oa && oa.length) || 0;
        if (len == 0)
            return;
        var _fa = fa instanceof Array ? fa : new Array(len).fill(fa);
        var _ta = ta instanceof Array ? ta : new Array(len).fill(ta || 0);
        var _pa = pa instanceof Array ? pa : new Array(len).fill(pa);
        var _oa = oa instanceof Array ? oa : new Array(len).fill(oa || window);
        var i = 0;
        if (ta == 0) {
            for (; i < len; i++)
                _fa[i].apply(_oa[i], [].concat(_pa[i]));
            return;
        }
        function _next() {
            _fa[i].apply(_oa[i], [].concat(_pa[i]));
            if (i < len) {
                // console.log(_ta[i] + '毫秒后执行下一步 in T.jgzx');
                if (i != len - 1) {
                    if (typeof (_ta[i]) == 'string') {
                        var str = _ta[i].replace(/\{idx\}/g, i);
                        _ta[i] = parseFloat((window.ifeval ? eval(str) : T.doeval(str)));
                    }
                    ;
                    _setTimeout(_next, _ta[i]);
                    i++;
                }
                else {
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
        var obj = sj.obj[arr[0]._id];
        if (obj) {
            // 获取需要播动画的对象
            var objs = [];
            if (arr[0].data && arr[0].data.length > 0) {
                objs = objs.concat(arr[0].data.map(function (d) { return d._id + '-' + arr[0]._id; })[0]);
            }
            else {
                objs.push(arr[0]._id);
            }
            var pa = [];
            pa = objs.map(function (n) { return sj.obj[n]; }).map(function (o) {
                var pos = Jui.getSingle().getstagePoint(.5 * o.width, .5 * o.height, o);
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
        var dt = to - from;
        return dt < 0.01 ? to : from + dt * r;
    };
    this.jczl = function (pobj, aj) {
        'use strict';
        var _aj = aj || {};
        var g = _aj.g || { x: 0, y: 0.005 };
        var sl = pobj.$children.filter(function (c) { return c.bottom != undefined; }); // 受力对象
        var t = 20;
        T.timer(pobj, "重力场", { time: t }, function () {
            var dm = pobj.$children.filter(function (c) { return c.top != undefined; }); // 地面对象
            sl.forEach(function (o) {
                var ground = dm.find(function (d) { return d.left <= o.x && o.x <= d.right; });
                var top = ground == undefined ? pobj.height + o.height : ground.top;
                var above = o.bottom <= top;
                g.x && (o.x += o.speed.x * t + 0.5 * g.x * t * t);
                g.y && (above ? o.y = Math.min(o.y + o.speed.y * t + 0.5 * g.y * t * t, top - o.height + o.anchorOffsetY) : o.y += o.speed.y * t + 0.5 * g.y * t * t);
                o.speed.x += g.x * t;
                o.speed.y += g.y * t;
                if (o.bottom == top) {
                    o.speed = { x: 0, y: 0 };
                }
            });
        });
    };
    this.dcopy = function (obj, exclude) {
        'use strict';
        return (function _deepCopy(obj, _ex) {
            if (typeof (obj) != 'object')
                return obj;
            if (obj instanceof HTMLElement)
                return obj.cloneNode(true);
            if (_ex.indexOf(obj) != -1)
                return obj;
            _ex.push(obj);
            var ret = obj instanceof Array ? [] : {};
            for (var i in obj) {
                if (i != exclude) {
                    if (typeof obj[i] == 'object' && !T.isEgret(obj[i]) && !(obj[i] instanceof TJH5)) {
                        ret[i] = _deepCopy(obj[i], _ex);
                    }
                    else
                        ret[i] = obj[i];
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
        if (aj == undefined || aj == '')
            return null;
        if (typeof (aj) == 'string') {
            if (aj.indexOf('zitext') > 1 || aj.indexOf('ziImg') > 1) {
                var ifimg = (aj.indexOf('ziImg') > 1 ? 1 : 0);
                aj = aj.replace(/zitext/, '').replace(/ziImg/, '');
                var fobj = sj.obj[T.findid(aj)];
                try {
                    if (fobj && T.isEgret(fobj))
                        fobj = fobj.getChildByName(T.findid(aj) + (ifimg ? 'ziImg' : 'zitext'));
                }
                catch (error) { }
                return fobj || null;
            }
            return sj.obj[T.findid(aj)] || null;
        }
        if (aj instanceof TJH5 || T.isEgret(aj))
            return aj;
        var a = T.merge({ include: '', exclude: ['zi'], json: sj.obj, many: false }, aj || {});
        a.include = [].concat(a.include);
        a.exclude = [].concat(a.exclude);
        var ret = [];
        var _loop_5 = function (i) {
            if (a.include.some(function (v) { return i.includes(v); }) && a.exclude.every(function (v) { return !i.includes(v); })) {
                ret.push(a.json[i]);
                if (!a.many)
                    return "break";
            }
        };
        for (var i in a.json) {
            var state_1 = _loop_5(i);
            if (state_1 === "break")
                break;
        }
        return a.many ? ret : ret[0] || null;
    };
    this.findobjs = function (aj, retn) {
        var ret = [];
        for (var i in sj.obj) {
            var f = 1;
            for (var n in aj) {
                if (n == 'id') {
                    if (sj.obj[i]['name'].split('_')[1] != (aj[n]))
                        f = 0;
                }
                else {
                    if (jex().ifequ(sj.obj[i], n, aj[n]) == 0)
                        f = 0;
                }
            }
            if (f) {
                if (retn) {
                    if (retn == 'ca') {
                        ret.push(sj.clas[i][retn]);
                    }
                    else {
                        retn == 'idd' ? ret.push(sj.obj[i].name.split('-')[0]) : ret.push(sj.obj[i][retn]);
                    }
                }
                else {
                    ret.push(sj.obj[i]);
                }
            }
        }
        return ret;
    };
    this.objFilter = function (obj, cb) {
        if (obj === void 0) { obj = {}; }
        var ret = [];
        for (var o in obj)
            cb && cb(obj[o]) && ret.push(obj[o]);
        return ret;
    };
    this.isMy = function (obj) {
        var clas = typeof (obj) == 'string' ? sj.clas[obj] : sj.clas[obj.name];
        if (!clas)
            console.log('找不到obj:$1 的clas in T.isMy', obj);
        return !(clas && clas.idus != undefined && clas.idus != jg_aj.idus);
    };
    //当前场景的abc	
    var dqcj = this.dqcj = function () {
        var nam = T.findObj({ include: [jg_aj.curproj + '_场景'], exclude: ['应用市场', 'jai'] });
        if (!nam) {
            nam = T.findObj({ include: [jg_aj.sj.idc.split('_')[0] + '_场景'], exclude: ['应用市场', 'jai'] });
        }
        if (!nam) {
            console.error('找不到当前场景');
            return '';
        }
        var findd = nam.name.match(/[a-z]$/);
        if (findd == null)
            return '';
        return findd[0];
    };
    this.setArr = function (arr, f) {
        try {
            if (arr == "") {
                dfdsf = 1;
            }
            f = [].concat(f);
            for (var i = 0; i < f.length; i++) {
                if (f[i] != null) {
                    if (arr.indexOf(f[i]) == -1)
                        arr.push(f[i]);
                }
            }
        }
        catch (ex) {
        }
    };
    this.route2act = function (route) {
        var _r = [].concat(route), len = _r.length;
        if (len % 2 != 1) {
            console.log("\u8DEF\u7EBF\u6570\u7EC4$1\u957F\u5EA6\u4E0D\u4E3A\u5355\u6570", _r);
            return [];
        }
        var ret = [], _p = _r[0];
        for (var i = 1; i < len; i += 2) {
            ret.push({ '动作': 'tween', x: _r[i] + "%", y: _r[i + 1] + "%", time: i == 1 ? 0 : (_p.time || 1000) });
        }
        return ret.concat(_p);
    };
    this.getPx = function (aj) {
        var a = T.merge({ len: 50, angle: 90 }, aj);
        var p1 = a.p1, p2 = a.p2, len = a.len, dx = p2.x - p1.x, dy = p2.y - p1.y;
        if (a.pt) {
            a.angle = Math.sign((a.pt.y - p1.y) * dx - (a.pt.x - p1.x) * dy) * Math.abs(a.angle);
        }
        var rad = a.angle / 180 * Math.PI, sin = Math.sin(rad), cos = Math.cos(rad);
        var px = { x: len * cos, y: len * sin };
        rad = Math.atan(dy / dx || Number.MAX_VALUE);
        var sign = dy < 0 && dx < 0 || dx < 0 && dy > 0 ? -1 : 1;
        sin = sign * Math.sin(rad);
        cos = sign * Math.cos(rad);
        return { x: px.x * cos - px.y * sin + p1.x, y: px.x * sin + px.y * cos + p1.y };
        // return {x:p2.x+(p1.x-p2.x)*0.5*cos-(p1.y-p2.y)*0.5*sin, y:p2.y+(p1.y-p2.y)*0.5*cos+(p1.x-p2.x)*0.5*sin};
        // return {x:p1.x+(p2.x-p1.x)*0.5*cos-(p2.y-p1.y)*0.5*sin, y:p1.y+(p2.y-p1.y)*0.5*cos+(p2.x-p1.x)*0.5*sin};
    };
    this.getResUrl = function (rawUrl, prefix) {
        if (rawUrl === void 0) { rawUrl = ''; }
        if (prefix === void 0) { prefix = 'http://image.kxtui.com/pg/fi/'; }
        if (typeof rawUrl != 'string') {
            console.error('unexpected rawUrl:$1 in T.getResUrl', rawUrl);
            return rawUrl;
        }
        if (rawUrl[0] == '/')
            return location.origin + rawUrl;
        if (rawUrl.includes('/') || rawUrl.includes('_') && !rawUrl.includes('.'))
            return rawUrl;
        var ua = rawUrl.split('.'), head = ua[0], tail = ua[1];
        if (ua.length > 2 || head.length == 13 && !/^[0-9]+$/.test(head)) {
            console.error("unexpected rawUrl:" + rawUrl + " in T.getResUrl");
            return rawUrl;
        }
        return prefix + head.slice(0, 5) + '/' + rawUrl;
    };
    this.func = function (curidc, aj) {
        aj = aj || {};
        if (curidc && curidc.indexOf('zitext') > 0)
            curidc = curidc.split('zitext')[0];
        if (!curidc.includes("_"))
            curidc = jg_aj.curproj + "_" + curidc;
        var ev = aj.ev || '';
        if (aj.stopp) {
            if (new Date().getTime() - sj.stopp < aj.stopp)
                return;
            sj.stopp = new Date().getTime();
        }
        var sai = "";
        if (sj.obj['jai_命令编辑'])
            sai = sj.obj['jai_命令编辑'].text;
        //if (sj.obj['jai_操作对象']) jg_aj.opid = sj.obj['jai_操作对象'].text;  //默认以显示为准，但是下面的指令前缀会更改  
        if (sai.indexOf("[_") == 0 || sai.indexOf("[d_") == 0) {
            if (!jg_aj.curproj)
                alert("jg_aj.curproj:" + jg_aj.curproj);
            jg_aj.opid = jg_aj.curproj + "_" + sai.split("]")[0].split("_")[1]; //"[_游戏容器][树]左移：1"  全都取第一个[]中的值，就全是游戏容器。  2018-1-29  Tim   (sai.split("]").length>2?sai.split("]")[1].split("[")[1]:sai.split("]")[0].split("_")[1])
            var s = ['场景', '游戏层', '游戏窗', '控制容器', '游戏容器'].find(function (s) { return sai.indexOf("[_" + s + "]") == 0; });
            if (s)
                sai = sai.replace(s, s + T.dqcj());
            if (!sj.clas[jg_aj.opid]) {
                var tid = T.findid(sai.split("]")[0].substring(1)); //  2018-1-29  Tim(sai.split("]").length>2?sai.split("]")[1]:sai.split("]")[0])
                if (tid.indexOf('-') > 0) {
                    // [_轮播图]轮播突出 默认选中clas 如果要选中data则 [d_轮播图]
                    if (sai.indexOf("[_") == 0)
                        tid = tid.split('-')[1];
                }
                if (tid.indexOf('jai') == -1)
                    jg_aj.opid = tid;
            }
            sj.obj['jai_命令编辑'].text = sai.substring(sai.indexOf(']') + 1);
            aj.tempedit = 2;
            aj.stopp = 0;
            T.func(jg_aj.opid, aj); //jg_aj.curproj +"_游戏容器"
            return;
        }
        if (sai.indexOf("操作") == 0) {
            sj.obj['jai_命令编辑'].text = '';
            jg_aj.opid = sai.split("：")[1];
            aj.tempedit = '0';
            aj.stopp = 0;
            T.func(jg_aj.opid, aj);
            return;
        }
        if (sai.indexOf("选择：") == 0) {
            sj.obj['jai_命令编辑'].text = '';
            jg_aj.opid = sai.split("：")[1];
            aj.tempedit = 2;
            T.func(jg_aj.opid, aj);
            return;
        }
        if (sai != '' && sai.indexOf("逐一") >= 0) {
            var fanwei_1 = sai.match(/\[[^\[\]]*\]/);
            fanwei_1 == null ? fanwei_1 = '[]' : fanwei_1 = fanwei_1[0];
            sai = sai.replace(fanwei_1, '');
            fanwei_1 = fanwei_1.substring(1, fanwei_1.length - 1);
            var opobj = null;
            for (var c in sj.obj) {
                if (c.indexOf('jai') == -1 && c.indexOf(jg_aj.opid) != -1) {
                    opobj = sj.obj[c];
                    jg_aj.opid = c;
                    break;
                }
            }
            var objs = (opobj ? (opobj.parent ? opobj.parent.$children : []) : []).filter(function (o) { return !['zi', 'ass'].some(function (i) { return o.name.indexOf(i) != -1; }) && o.name.indexOf(fanwei_1) != -1; });
            var order_1 = sj.obj['jai_命令编辑'].text = sai.replace('逐一', '');
            var hasCounter_1 = ['换图', '换辅图'].some(function (n) { return order_1.indexOf(n) != -1; });
            var counter_1 = 0;
            T.jgzx(function (curidc) {
                jg_aj.opid = curidc;
                sj.obj['jai_命令编辑'].text = order_1 + (hasCounter_1 ? '：' + counter_1++ : '');
                aj.tempedit = 2;
                aj.stopp = 0;
                jg_aj.editm = 2;
                T.func(curidc, aj);
            }, 2000, function () { jg_aj.editm = 0; }, objs);
            sj.obj['jai_命令编辑'].text = '';
            return;
        }
        var _saia = sai.split('：');
        if (sai.indexOf("新增元件") != -1 && _saia.length >= 2) {
            var _saia_1 = sai.split('：');
            var times = parseInt(_saia_1[2]) || 1;
            var _sai_1 = _saia_1[0] + "：" + _saia_1[1];
            var pa_1 = [];
            for (var n = 1; n <= times; n++)
                pa_1.push(n);
            pa_1 = pa_1.map(function (i) { return [['', { "editm": 1, "id": jg_aj.opid, "ai": _sai_1 + (pa_1.length > 1 ? i : ''), ev: "T.xztjdz()" }, 'jai_执行']]; });
            T.jgzx(csend, 1000, null, pa_1);
            sj.obj['jai_命令编辑'].text = '';
            return;
        }
        if (sai.indexOf("新增") == 0) {
            var order_2 = sj.obj['jai_命令编辑'].text = "新增";
            var count = sai.substring(2).match(/^[0-9]*[1-9][0-9]*/);
            count = parseInt((count ? count[0] : [0])[0]) || 0;
            if (count > 0) {
                T.jgzx(function () {
                    sj.obj['jai_命令编辑'].text = order_2;
                    T.func(objName, aj);
                }, 900, null, new Array(count));
                sj.obj['jai_命令编辑'].text = '';
                return;
            }
            // 算出新增的位置，并调用天姬动画
            var pos = { x: 0, y: 0 };
            var obj = sj.obj[T.findid(jg_aj.opid)];
            if (sj.obj["jai_天姬"] && obj) {
                jg_aj.uibuild = 0;
                window['激光']({
                    obj: sj.obj["jai_天姬"], tobj: obj, cb: function () {
                        jg_aj.uibuild = 1;
                        console.log('jg_aj.uibuild改为1');
                    }
                });
                // 强调({obj});
            }
        }
        //======================================================================================data==============
        var data = {};
        if (jg_aj.opid != curidc) {
            jg_aj.opid = curidc; //扩展中有对jai的过滤
            if (sj.obj['jai_命令编辑']) {
                sj.obj['jai_命令编辑'].text = "";
                sj.obj['jai_代码'] && sj.obj['jai_代码'].removeChildren();
            }
        }
        var ropid = jg_aj.opid;
        var curidclas = ropid.indexOf('-') != -1 ? ropid.split('-')[1] : ropid;
        if (curidc == 'jai_执行')
            ropid = curidclas; //执行，只对元件修改
        if (ropid != curidc && curidc != 'jai_控制中心开关')
            data.id = ropid;
        var editm = aj.tempedit || jg_aj.editm;
        if (editm)
            data.editm = editm;
        if (sai) {
            data.ai = sai;
            sai.indexOf("逐一") == 0 && (data.ai = sai.substring(2));
        }
        var dh = sj.obj['jai_对话输入'] ? sj.obj['jai_对话输入'].text : '';
        if (dh)
            data.dh = dh;
        var x1 = aj['x1'] || '';
        var y1 = aj["y1"] || '';
        if (x1 != '' || y1 != '' || ev == 'jui' || ev == 'dba' || ev > 0) {
            var pobj = sj.obj[curidc] && sj.obj[curidc].parent || sj.obj[jg_aj.topproj + '_游戏容器' + T.dqcj()];
            var newx1 = parseInt(x1 / pobj.width * 100);
            var newy1 = parseInt(y1 / pobj.height * 100);
            ev = ev || 'ds';
            if (ev == 13) {
                ev = "save";
                data.fname = "save/" + curidc.split('-')[0];
                data.text = encodeURI(T.findObj(curidc).text.replace(/\+/g, '+').replace(/\&/g, '&'));
                // data.text = encodeURI(j('#' + curidc + 'zitext_0').vale().replace(/\+/g, '+').replace(/\&/g, '&'));
            }
            else if (ev == 'ds') {
                data = [newx1, newy1, aj.time || '100'];
                curidc = curidc.split('-')[0];
            }
            else if (ev == 'uri') {
                data.uri = { x: x1, y: y1 };
            }
            else {
                var strw = sj.jui[curidclas] && sj.jui[curidclas].style.w + '' || '';
                if (x1) {
                    aj['style.x'] = isNaN(strw) ? (newx1 + '%') : x1;
                    delete aj.x;
                }
                if (y1) {
                    aj['style.y'] = isNaN(strw) ? (newy1 + '%') : y1;
                    delete aj.y;
                }
                delete aj.ev;
                data.dba = ['clas', aj, { _id: curidc }];
                if (curidc.indexOf("-") > 0) {
                    data.dba = [sj.clas[curidc].idclas || curidc.split('-')[1], aj, { _id: curidc.split('-')[0] }];
                }
            }
        }
        else if (curidc == 'jai_保存') {
            var q = eval(sj.obj[curidclas + '.json-jai_json编辑'].text == "" ? "" : '(' + sj.obj[curidclas + '.json-jai_json编辑'].text + ')');
            jex(sj.obj['' + aj.idclas + ''].$children).each(function (i, item) {
                var ida = item.name.split('-')[0].split('.');
                var v = item.text;
                //if(sj.obj[item).vale('begineditf')==1)ida.push(1)
                if (v && v.indexOf('/') != 0 && ida.length > 1 && ida[1] != 'json') {
                    q[ida[1]] = q[ida[1]] || [];
                    q[ida[1]].push(v);
                }
            });
            data = { ai: "保存：" + JSON.stringify(q), id: jg_aj.opid };
        }
        else if (curidc == 'jai_数据') {
            ev = "data";
            data = { "t": (jex("input[t='editt'][en='tn']").val() || "_cod"), "whe": (jex("input[t='editt'][en='tw']").val() || ""), "aj": { "limit": 15, "sort": { "idclas": 1, "顺序": 1 } } };
        }
        else if (curidc == 'jai_更多') {
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
        if (aj.cb) {
            if (jg_aj.editm == 0 || jg_aj.editm == 1 && curidc.indexOf('jai') == 0)
                (window.ifeval ? eval(aj.cb) : T.doeval(aj.cb));
        } //自动更新对话窗，在jai_对话发送
        jg_aj.curidc = curidc;
        if (typeof (LOCAL_JUI) == 'undefined')
            csend([ev, data, curidc]);
        /**延时填写编辑器内容 */
        _setTimeout(function () {
            if ("undefined" != typeof app) {
                app.formatterToEditor && app.formatterToEditor();
            }
        }, 2000);
        if (sj.obj['jai_命令编辑'])
            sj.obj['jai_命令编辑'].text = "";
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
    };
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
    this.connEach = function (r) {
    };
    this.proList = function (op) {
    };
    this.arr2json = function (Arr) {
        var ret = {};
        if (typeof (Arr) == 'object')
            for (var _i = 0, Arr_1 = Arr; _i < Arr_1.length; _i++) {
                var n = Arr_1[_i];
                ret[n._id] = n;
            }
        return ret;
    };
    /////////////////////////////////////
    //
    ////////////////////////////////////
    this.faceAid = "118ea0078b2c490a8be8ef296907af94"; //EyeKey接口id
    this.faceKey = "97ded79c474049189228f648b2715bfd"; //EyeKey接口密钥
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
    this.randomString = function (len) {
        if (len === void 0) { len = 32; }
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
        }
        else {
            console.log("\u56FE\u7247ID\u4E0D\u5B8C\u6574");
        }
    };
    this.showMyWords = function () {
        if (T.isEgret(sj.obj[T.findid("jai_我的气泡")])) {
            sj.obj[T.findid("jai_我的气泡")].$children[1].text = sj.obj[T.findid("jai_对话输入")].text;
        }
        else {
            sj.obj[T.findid("jai_我的气泡")].text = sj.obj[T.findid("jai_对话输入")].text;
            // sj.obj["jai_我的气泡"] 
        }
        sj.obj[T.findid("jai_对话输入")].text = '';
    };
    this.getx = function (obj) {
        var x = ((jex(obj.dom).position() || {}).left || 0) + obj.width * obj.anchorX;
        if (jex('[id*="_游戏容器"]').attr('style').indexOf("rotate(180deg)") > 0)
            x = jex('[id*="_游戏容器"]').width() - x;
        return x;
    };
    this.gety = function (obj) {
        var y = ((jex(obj.dom).position() || {}).top || 0) + obj.height * obj.anchorY;
        if (jex('[id*="_游戏容器"]').attr('style').indexOf("rotate(180deg)") > 0)
            y = jex('[id*="_游戏容器"]').height() - y;
        return y;
    };
    /**
     * 返回弱对象
     * @ajArr   弱对象参数组
     * @count   返回对象数量
     * @not     是否不查找父类是否有同名的弱对象
     */
    this.getzi = function (ajArr, count, not) {
        if (ajArr === void 0) { ajArr = []; }
        if (count === void 0) { count = 1; }
        if (not === void 0) { not = false; }
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
                }
                else if (aj.typ == 3) {
                    obj = new egret.DisplayObjectContainer();
                }
                else if (aj.typ == 4) {
                    obj = new egret.TextField();
                    for (var i_2 in aj["Textfield"]) {
                        obj[i_2] = aj["Textfield"][i_2];
                    }
                    obj.text = aj.ca;
                }
                else if (aj.typ == 6) {
                    obj = new egret.MovieClip();
                    var w = window["T"].deval("w", aj.pobj, aj);
                    var h = window["T"].deval("h", aj.height, aj);
                    var scaleX = aj["scaleX"];
                    var scaleY = aj["scaleY"];
                    Jui.getSingle().setMove(obj, aj["json"], aj["png"], aj["count"], w, h, aj["dz"], scaleX, scaleY);
                }
                else if (aj.typ == 7) {
                    obj = new egret.Shape();
                    if (aj["shapeType"] == 1) {
                        obj.graphics.lineStyle(aj.chu || 3, window["T"].color(aj.bgcolor || 0, "0x"));
                        obj.graphics.moveTo(Jui.getSingle().deval("x0", aj.pobj, aj), Jui.getSingle().deval("y0", aj.pobj, aj));
                        obj.graphics.lineTo(Jui.getSingle().deval("x1", aj.pobj, aj), Jui.getSingle().deval("y1", aj.pobj, aj));
                    }
                    else if (aj["shapeType"] == 2) {
                        obj.graphics.beginFill(window["T"].color(aj.bgcolor || 0, "0x"), aj.alpha || 1);
                        obj.graphics.drawCircle(Jui.getSingle().deval("x", aj.pobj, aj), Jui.getSingle().deval("y", aj.pobj, aj), Jui.getSingle().deval("r", aj.pobj, aj));
                        obj.graphics.endFill();
                    }
                    else {
                        obj.graphics.beginFill(window["T"].color(aj.bgcolor || 0, "0x"), aj.alpha || 1);
                        obj.graphics.drawRect(Jui.getSingle().deval("x", aj.pobj, aj), Jui.getSingle().deval("y", aj.pobj, aj), Jui.getSingle().deval("w", aj.pobj, aj), Jui.getSingle().deval("h", aj.height, aj));
                        obj.graphics.endFill();
                    }
                }
                else if (aj.typ == "血条") {
                    var hpbar = new egret.Shape();
                    hpbar.graphics.beginFill(0xff0000, 1);
                    hpbar.graphics.drawRect(0, 0, Jui.getSingle().deval("w", aj.pobj, aj), Jui.getSingle().deval("h", aj.pobj, aj));
                    hpbar.graphics.endFill();
                    obj = new HP(hpbar, aj.hp);
                    //Jui.getSingle().actt({obj:obj,pobj:aj.pobj,data:{"actt":{"跟随":{"gs":aj.obj.name}}}})
                }
                else if (aj.typ == 10) {
                    obj = new egret.BitmapText();
                    obj.font = RES.getRes(aj.font || "rankfont1_fnt");
                    obj.text = aj.ca;
                }
            }
            else {
                obj = aj.pobj.getChildByName(aj.obj.name + (aj._id || "") + i + "zi");
            }
            if (aj.x != undefined)
                obj.x = Jui.getSingle().deval("x", aj.pobj, aj); //aj.x;
            if (aj.y != undefined)
                obj.y = Jui.getSingle().deval("y", aj.pobj, aj); //aj.y;
            if (aj.w != undefined)
                obj.width = Jui.getSingle().deval("w", aj.pobj, aj); //aj.w;
            if (aj.h != undefined)
                obj.height = Jui.getSingle().deval("h", aj.pobj, aj); //aj.h;
            aj["anchorOffsetX"] != undefined ? obj.anchorOffsetX = obj.width * aj["anchorOffsetX"] : obj.anchorOffsetX = obj.width * 0.5;
            aj["anchorOffsetY"] != undefined ? obj.anchorOffsetY = obj.width * aj["anchorOffsetY"] : obj.anchorOffsetY = obj.height * 0.5;
            if (aj["scaleX"])
                obj.scaleX = aj["scaleX"];
            if (aj["scaleY"])
                obj.scaleY = aj["scaleY"];
            if (aj["visible"])
                obj.visible = aj["visible"];
            if (aj["alpha"])
                obj.alpha = aj["alpha"];
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
                    Jui.getSingle().setUrlImg(zibg, aj.bgimg);
                }
                if (aj.ca != undefined && aj.ca != "") {
                    var ziText = new egret.TextField();
                    obj.addChild(ziText);
                    ziText.name = "zitext";
                    ziText.width = obj.width;
                    ziText.height = obj.height;
                    for (var i_3 in aj["Textfield"]) {
                        obj[i_3] = aj["Textfield"][i_3];
                    }
                }
            }
            obj.name = aj.obj.name + (aj._id || "") + i + "zi";
            objArr.push(obj);
        }
        return objArr;
    };
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
                    if (that.div.css("background-image") != ("url(" + that.imgurl + ")"))
                        that.div.css({ "background": "", "background-size": "auto auto", "background-image": "url(" + that.imgurl + ")" });
                    //补充帧图初始位置参数   2018-6-13   Tim
                    var curRes = that.jsonData.res[Object.keys(that.jsonData.res)[0]];
                    var curFrames = that.jsonData.mc[Object.keys(that.jsonData.mc)[0]].frames[0];
                    that.div.css({ "width": curRes.w + "px", "height": curRes.h + "px", "background-position": "-" + curRes.x + "px -" + curRes.y + "px", "transform": "translateX(" + curFrames.x + "px) translateY(" + curFrames.y + "px)" });
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
            var actionIndex = dhLabels.findIndex(function (l) { return l.name == actionName; });
            if (actionIndex != -1) {
                var that = this;
                var dhframe = dhLabels[actionIndex]["frame"] - 1;
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
            }
            else {
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
    if (window.AudioContext)
        wa.context = new (window.AudioContext || window.webkitAudioContext)();
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
            }
            else {
                wa.stopAudio(name);
                wa.playAudio(name, loop, url, cb);
                // console.log("audio "+name+" is being played");
            }
        }
        else {
            if (url) {
                wa.downloadAndInitAudio(url, name, function (wa) {
                    wa.playAudio(name, loop, url, cb);
                });
            }
            else {
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
        }
        else {
            console.log("audio " + name + " is not exist");
        }
    };
    // 下载并初始化音频
    this.downloadAndInitAudio = wa.downloadAndInitAudio = function (url, name, cb) {
        var xhr = new XMLHttpRequest(); //通过XHR下载音频文件
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function (e) {
            wa.context.decodeAudioData(this.response, function (buffer) {
                var audio = {};
                audio.buffer = buffer; //告诉该源播放何物
                audio.playingState = 0;
                wa.sources[name] = audio;
                cb && cb(wa);
            }, function (e) {
                console.log('Error decoding file', e);
            });
        };
        xhr.send();
    };
    // 将汉字转拼音
    this.pinyin = this.word2pinyin = function (str) { return pinyin.getFullChars(str).toLowerCase(); };
    // 判断字符串是否符合邮箱格式
    this.isMailAddress = function (str) { return typeof (str) == 'string' && str.match(/([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/igm); };
    // 判断是否手机号
    this.isPhoneNumber = function (str) {
        str = typeof (str) == "number" ? str + "" : typeof (str) == "string" ? str : "";
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
        return (n + "").replace(/^(\d+)((\.\d+)?)$/, function (s, s1, s2) { return s1.replace(/\d{1,3}(?=(\d{3})+$)/g, "$&,") + s2; });
    };
    this.safeWxApi = function (apiName, onsuccess, onfail) {
        console.log("进入T.safeWxApi");
        onfail = onfail || onsuccess;
        var todo = function () {
            wx.ready(function () {
                jg_aj.wxinit = 1;
                if (apiName) {
                    var apiList_1 = [].concat(apiName);
                    wx.checkJsApi({
                        jsApiList: apiList_1,
                        success: function (res) {
                            apiList_1.every(function (api) { return res.checkResult[api]; }) ? onsuccess && onsuccess() : onfail && onfail();
                        }
                    });
                }
                else {
                    onsuccess && onsuccess();
                }
            });
        };
        if (!jg_aj.wxinit) {
            // 请求get_config获取签名等wx.config所需的参数
            console.log("通过db.jp请求/wx/get_config接口");
            db.jp('https://n.kxtui.com/wx/get_config?projName=' + jg_aj.sj.cti + '&url=' + encodeURIComponent(location.href.split('#')[0]), function (i, json) {
                if (json.error) {
                    console.console('请求get_config出错，err：' + json.msg + ' in 微信分享');
                    onfail && onfail();
                }
                else {
                    console.log('准备调用wx.config，参数：' + JSON.stringify(json.msg));
                    wx.config(json.msg);
                    todo();
                    wx.error(function (res) {
                        jg_aj.wxinit = 0;
                        console.error('微信js-sdk出错，res：' + JSON.stringify(res));
                        onfail && onfail();
                    });
                }
            });
        }
        else {
            todo();
        }
    };
    this.strLimit = function (str, limit, ellipsis) {
        var _str = str.substring(0, limit);
        ellipsis = ellipsis == undefined ? true : ellipsis;
        return str.length <= limit ? str : _str + (ellipsis ? '...' : '');
    };
    this.getUrl = function (aj) {
        var _url = aj.url || location.href;
        var cl = aj.clearList || [];
        var pj = aj.paramsJson || {};
        cl.forEach(function (c) { _url = jex().getUrl(c, '', _url); });
        for (var k in pj)
            _url = jex().getUrl(k, pj[k], _url);
        return _url;
    };
}
;
window.T = new Ts();
try {
    eval("1==1");
    window.ifeval = parseInt(jex().getv('eval', 1));
}
catch (e) {
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
    console.time && console.time('opid.setter ' + v);
    var curidc = v;
    if (v.indexOf('-') > 0)
        curidc = v.split('-')[1];
    if (curidc.indexOf('jai') == 0 && curidc != 'jai昵称_昵称' && curidc != 'jai_场景项') {
        return;
    }
    if (v && this._opid !== v && jg_aj.editm > 0 && (db.gett() - jg_aj.jgtime > 1000)) {
        jg_aj.jgtime = db.gett();
        var obj = sj.obj[T.findid(v)];
        if (sj.obj["jai_天姬"] && obj) {
            window['激光']({ obj: sj.obj["jai_天姬"], tobj: obj });
            // 强调({obj})
        }
    }
    this._opid = v;
    console.timeEnd && console.timeEnd('opid.setter ' + v);
});
/**
 * 从网上找的将汉字翻译为拼音的方法
 * http://www.jb51.net/article/100860.htm
 */
window.pinyin = (function () {
    var Pinyin = function (ops) {
        this.initialize(ops);
    }, options = {
        checkPolyphone: false,
        charcase: 'default'
    };
    Pinyin.fn = Pinyin.prototype = {
        init: function (ops) {
            this.options = extend(options, ops);
        },
        initialize: function (ops) {
            this.init(ops);
            this.char_dict = "YDYQSXMWZSSXJBYMGCCZQPSSQBYCDSCDQLDYLYBSSJGYZZJJFKCCLZDHWDWZJLJPFYYNWJJTMYHZWZHFLZPPQHGSCYYYNJQYXXGJHHSDSJNKKTMOMLCRXYPSNQSECCQZGGLLYJLMYZZSECYKYYHQWJSSGGYXYZYJWWKDJHYCHMYXJTLXJYQBYXZLDWRDJRWYSRLDZJPCBZJJBRCFTLECZSTZFXXZHTRQHYBDLYCZSSYMMRFMYQZPWWJJYFCRWFDFZQPYDDWYXKYJAWJFFXYPSFTZYHHYZYSWCJYXSCLCXXWZZXNBGNNXBXLZSZSBSGPYSYZDHMDZBQBZCWDZZYYTZHBTSYYBZGNTNXQYWQSKBPHHLXGYBFMJEBJHHGQTJCYSXSTKZHLYCKGLYSMZXYALMELDCCXGZYRJXSDLTYZCQKCNNJWHJTZZCQLJSTSTBNXBTYXCEQXGKWJYFLZQLYHYXSPSFXLMPBYSXXXYDJCZYLLLSJXFHJXPJBTFFYABYXBHZZBJYZLWLCZGGBTSSMDTJZXPTHYQTGLJSCQFZKJZJQNLZWLSLHDZBWJNCJZYZSQQYCQYRZCJJWYBRTWPYFTWEXCSKDZCTBZHYZZYYJXZCFFZZMJYXXSDZZOTTBZLQWFCKSZSXFYRLNYJMBDTHJXSQQCCSBXYYTSYFBXDZTGBCNSLCYZZPSAZYZZSCJCSHZQYDXLBPJLLMQXTYDZXSQJTZPXLCGLQTZWJBHCTSYJSFXYEJJTLBGXSXJMYJQQPFZASYJNTYDJXKJCDJSZCBARTDCLYJQMWNQNCLLLKBYBZZSYHQQLTWLCCXTXLLZNTYLNEWYZYXCZXXGRKRMTCNDNJTSYYSSDQDGHSDBJGHRWRQLYBGLXHLGTGXBQJDZPYJSJYJCTMRNYMGRZJCZGJMZMGXMPRYXKJNYMSGMZJYMKMFXMLDTGFBHCJHKYLPFMDXLQJJSMTQGZSJLQDLDGJYCALCMZCSDJLLNXDJFFFFJCZFMZFFPFKHKGDPSXKTACJDHHZDDCRRCFQYJKQCCWJDXHWJLYLLZGCFCQDSMLZPBJJPLSBCJGGDCKKDEZSQCCKJGCGKDJTJDLZYCXKLQSCGJCLTFPCQCZGWPJDQYZJJBYJHSJDZWGFSJGZKQCCZLLPSPKJGQJHZZLJPLGJGJJTHJJYJZCZMLZLYQBGJWMLJKXZDZNJQSYZMLJLLJKYWXMKJLHSKJGBMCLYYMKXJQLBMLLKMDXXKWYXYSLMLPSJQQJQXYXFJTJDXMXXLLCXQBSYJBGWYMBGGBCYXPJYGPEPFGDJGBHBNSQJYZJKJKHXQFGQZKFHYGKHDKLLSDJQXPQYKYBNQSXQNSZSWHBSXWHXWBZZXDMNSJBSBKBBZKLYLXGWXDRWYQZMYWSJQLCJXXJXKJEQXSCYETLZHLYYYSDZPAQYZCMTLSHTZCFYZYXYLJSDCJQAGYSLCQLYYYSHMRQQKLDXZSCSSSYDYCJYSFSJBFRSSZQSBXXPXJYSDRCKGJLGDKZJZBDKTCSYQPYHSTCLDJDHMXMCGXYZHJDDTMHLTXZXYLYMOHYJCLTYFBQQXPFBDFHHTKSQHZYYWCNXXCRWHOWGYJLEGWDQCWGFJYCSNTMYTOLBYGWQWESJPWNMLRYDZSZTXYQPZGCWXHNGPYXSHMYQJXZTDPPBFYHZHTJYFDZWKGKZBLDNTSXHQEEGZZYLZMMZYJZGXZXKHKSTXNXXWYLYAPSTHXDWHZYMPXAGKYDXBHNHXKDPJNMYHYLPMGOCSLNZHKXXLPZZLBMLSFBHHGYGYYGGBHSCYAQTYWLXTZQCEZYDQDQMMHTKLLSZHLSJZWFYHQSWSCWLQAZYNYTLSXTHAZNKZZSZZLAXXZWWCTGQQTDDYZTCCHYQZFLXPSLZYGPZSZNGLNDQTBDLXGTCTAJDKYWNSYZLJHHZZCWNYYZYWMHYCHHYXHJKZWSXHZYXLYSKQYSPSLYZWMYPPKBYGLKZHTYXAXQSYSHXASMCHKDSCRSWJPWXSGZJLWWSCHSJHSQNHCSEGNDAQTBAALZZMSSTDQJCJKTSCJAXPLGGXHHGXXZCXPDMMHLDGTYBYSJMXHMRCPXXJZCKZXSHMLQXXTTHXWZFKHCCZDYTCJYXQHLXDHYPJQXYLSYYDZOZJNYXQEZYSQYAYXWYPDGXDDXSPPYZNDLTWRHXYDXZZJHTCXMCZLHPYYYYMHZLLHNXMYLLLMDCPPXHMXDKYCYRDLTXJCHHZZXZLCCLYLNZSHZJZZLNNRLWHYQSNJHXYNTTTKYJPYCHHYEGKCTTWLGQRLGGTGTYGYHPYHYLQYQGCWYQKPYYYTTTTLHYHLLTYTTSPLKYZXGZWGPYDSSZZDQXSKCQNMJJZZBXYQMJRTFFBTKHZKBXLJJKDXJTLBWFZPPTKQTZTGPDGNTPJYFALQMKGXBDCLZFHZCLLLLADPMXDJHLCCLGYHDZFGYDDGCYYFGYDXKSSEBDHYKDKDKHNAXXYBPBYYHXZQGAFFQYJXDMLJCSQZLLPCHBSXGJYNDYBYQSPZWJLZKSDDTACTBXZDYZYPJZQSJNKKTKNJDJGYYPGTLFYQKASDNTCYHBLWDZHBBYDWJRYGKZYHEYYFJMSDTYFZJJHGCXPLXHLDWXXJKYTCYKSSSMTWCTTQZLPBSZDZWZXGZAGYKTYWXLHLSPBCLLOQMMZSSLCMBJCSZZKYDCZJGQQDSMCYTZQQLWZQZXSSFPTTFQMDDZDSHDTDWFHTDYZJYQJQKYPBDJYYXTLJHDRQXXXHAYDHRJLKLYTWHLLRLLRCXYLBWSRSZZSYMKZZHHKYHXKSMDSYDYCJPBZBSQLFCXXXNXKXWYWSDZYQOGGQMMYHCDZTTFJYYBGSTTTYBYKJDHKYXBELHTYPJQNFXFDYKZHQKZBYJTZBXHFDXKDASWTAWAJLDYJSFHBLDNNTNQJTJNCHXFJSRFWHZFMDRYJYJWZPDJKZYJYMPCYZNYNXFBYTFYFWYGDBNZZZDNYTXZEMMQBSQEHXFZMBMFLZZSRXYMJGSXWZJSPRYDJSJGXHJJGLJJYNZZJXHGXKYMLPYYYCXYTWQZSWHWLYRJLPXSLSXMFSWWKLCTNXNYNPSJSZHDZEPTXMYYWXYYSYWLXJQZQXZDCLEEELMCPJPCLWBXSQHFWWTFFJTNQJHJQDXHWLBYZNFJLALKYYJLDXHHYCSTYYWNRJYXYWTRMDRQHWQCMFJDYZMHMYYXJWMYZQZXTLMRSPWWCHAQBXYGZYPXYYRRCLMPYMGKSJSZYSRMYJSNXTPLNBAPPYPYLXYYZKYNLDZYJZCZNNLMZHHARQMPGWQTZMXXMLLHGDZXYHXKYXYCJMFFYYHJFSBSSQLXXNDYCANNMTCJCYPRRNYTYQNYYMBMSXNDLYLYSLJRLXYSXQMLLYZLZJJJKYZZCSFBZXXMSTBJGNXYZHLXNMCWSCYZYFZLXBRNNNYLBNRTGZQYSATSWRYHYJZMZDHZGZDWYBSSCSKXSYHYTXXGCQGXZZSHYXJSCRHMKKBXCZJYJYMKQHZJFNBHMQHYSNJNZYBKNQMCLGQHWLZNZSWXKHLJHYYBQLBFCDSXDLDSPFZPSKJYZWZXZDDXJSMMEGJSCSSMGCLXXKYYYLNYPWWWGYDKZJGGGZGGSYCKNJWNJPCXBJJTQTJWDSSPJXZXNZXUMELPXFSXTLLXCLJXJJLJZXCTPSWXLYDHLYQRWHSYCSQYYBYAYWJJJQFWQCQQCJQGXALDBZZYJGKGXPLTZYFXJLTPADKYQHPMATLCPDCKBMTXYBHKLENXDLEEGQDYMSAWHZMLJTWYGXLYQZLJEEYYBQQFFNLYXRDSCTGJGXYYNKLLYQKCCTLHJLQMKKZGCYYGLLLJDZGYDHZWXPYSJBZKDZGYZZHYWYFQYTYZSZYEZZLYMHJJHTSMQWYZLKYYWZCSRKQYTLTDXWCTYJKLWSQZWBDCQYNCJSRSZJLKCDCDTLZZZACQQZZDDXYPLXZBQJYLZLLLQDDZQJYJYJZYXNYYYNYJXKXDAZWYRDLJYYYRJLXLLDYXJCYWYWNQCCLDDNYYYNYCKCZHXXCCLGZQJGKWPPCQQJYSBZZXYJSQPXJPZBSBDSFNSFPZXHDWZTDWPPTFLZZBZDMYYPQJRSDZSQZSQXBDGCPZSWDWCSQZGMDHZXMWWFYBPDGPHTMJTHZSMMBGZMBZJCFZWFZBBZMQCFMBDMCJXLGPNJBBXGYHYYJGPTZGZMQBQTCGYXJXLWZKYDPDYMGCFTPFXYZTZXDZXTGKMTYBBCLBJASKYTSSQYYMSZXFJEWLXLLSZBQJJJAKLYLXLYCCTSXMCWFKKKBSXLLLLJYXTYLTJYYTDPJHNHNNKBYQNFQYYZBYYESSESSGDYHFHWTCJBSDZZTFDMXHCNJZYMQWSRYJDZJQPDQBBSTJGGFBKJBXTGQHNGWJXJGDLLTHZHHYYYYYYSXWTYYYCCBDBPYPZYCCZYJPZYWCBDLFWZCWJDXXHYHLHWZZXJTCZLCDPXUJCZZZLYXJJTXPHFXWPYWXZPTDZZBDZCYHJHMLXBQXSBYLRDTGJRRCTTTHYTCZWMXFYTWWZCWJWXJYWCSKYBZSCCTZQNHXNWXXKHKFHTSWOCCJYBCMPZZYKBNNZPBZHHZDLSYDDYTYFJPXYNGFXBYQXCBHXCPSXTYZDMKYSNXSXLHKMZXLYHDHKWHXXSSKQYHHCJYXGLHZXCSNHEKDTGZXQYPKDHEXTYKCNYMYYYPKQYYYKXZLTHJQTBYQHXBMYHSQCKWWYLLHCYYLNNEQXQWMCFBDCCMLJGGXDQKTLXKGNQCDGZJWYJJLYHHQTTTNWCHMXCXWHWSZJYDJCCDBQCDGDNYXZTHCQRXCBHZTQCBXWGQWYYBXHMBYMYQTYEXMQKYAQYRGYZSLFYKKQHYSSQYSHJGJCNXKZYCXSBXYXHYYLSTYCXQTHYSMGSCPMMGCCCCCMTZTASMGQZJHKLOSQYLSWTMXSYQKDZLJQQYPLSYCZTCQQPBBQJZCLPKHQZYYXXDTDDTSJCXFFLLCHQXMJLWCJCXTSPYCXNDTJSHJWXDQQJSKXYAMYLSJHMLALYKXCYYDMNMDQMXMCZNNCYBZKKYFLMCHCMLHXRCJJHSYLNMTJZGZGYWJXSRXCWJGJQHQZDQJDCJJZKJKGDZQGJJYJYLXZXXCDQHHHEYTMHLFSBDJSYYSHFYSTCZQLPBDRFRZTZYKYWHSZYQKWDQZRKMSYNBCRXQBJYFAZPZZEDZCJYWBCJWHYJBQSZYWRYSZPTDKZPFPBNZTKLQYHBBZPNPPTYZZYBQNYDCPJMMCYCQMCYFZZDCMNLFPBPLNGQJTBTTNJZPZBBZNJKLJQYLNBZQHKSJZNGGQSZZKYXSHPZSNBCGZKDDZQANZHJKDRTLZLSWJLJZLYWTJNDJZJHXYAYNCBGTZCSSQMNJPJYTYSWXZFKWJQTKHTZPLBHSNJZSYZBWZZZZLSYLSBJHDWWQPSLMMFBJDWAQYZTCJTBNNWZXQXCDSLQGDSDPDZHJTQQPSWLYYJZLGYXYZLCTCBJTKTYCZJTQKBSJLGMGZDMCSGPYNJZYQYYKNXRPWSZXMTNCSZZYXYBYHYZAXYWQCJTLLCKJJTJHGDXDXYQYZZBYWDLWQCGLZGJGQRQZCZSSBCRPCSKYDZNXJSQGXSSJMYDNSTZTPBDLTKZWXQWQTZEXNQCZGWEZKSSBYBRTSSSLCCGBPSZQSZLCCGLLLZXHZQTHCZMQGYZQZNMCOCSZJMMZSQPJYGQLJYJPPLDXRGZYXCCSXHSHGTZNLZWZKJCXTCFCJXLBMQBCZZWPQDNHXLJCTHYZLGYLNLSZZPCXDSCQQHJQKSXZPBAJYEMSMJTZDXLCJYRYYNWJBNGZZTMJXLTBSLYRZPYLSSCNXPHLLHYLLQQZQLXYMRSYCXZLMMCZLTZSDWTJJLLNZGGQXPFSKYGYGHBFZPDKMWGHCXMSGDXJMCJZDYCABXJDLNBCDQYGSKYDQTXDJJYXMSZQAZDZFSLQXYJSJZYLBTXXWXQQZBJZUFBBLYLWDSLJHXJYZJWTDJCZFQZQZZDZSXZZQLZCDZFJHYSPYMPQZMLPPLFFXJJNZZYLSJEYQZFPFZKSYWJJJHRDJZZXTXXGLGHYDXCSKYSWMMZCWYBAZBJKSHFHJCXMHFQHYXXYZFTSJYZFXYXPZLCHMZMBXHZZSXYFYMNCWDABAZLXKTCSHHXKXJJZJSTHYGXSXYYHHHJWXKZXSSBZZWHHHCWTZZZPJXSNXQQJGZYZYWLLCWXZFXXYXYHXMKYYSWSQMNLNAYCYSPMJKHWCQHYLAJJMZXHMMCNZHBHXCLXTJPLTXYJHDYYLTTXFSZHYXXSJBJYAYRSMXYPLCKDUYHLXRLNLLSTYZYYQYGYHHSCCSMZCTZQXKYQFPYYRPFFLKQUNTSZLLZMWWTCQQYZWTLLMLMPWMBZSSTZRBPDDTLQJJBXZCSRZQQYGWCSXFWZLXCCRSZDZMCYGGDZQSGTJSWLJMYMMZYHFBJDGYXCCPSHXNZCSBSJYJGJMPPWAFFYFNXHYZXZYLREMZGZCYZSSZDLLJCSQFNXZKPTXZGXJJGFMYYYSNBTYLBNLHPFZDCYFBMGQRRSSSZXYSGTZRNYDZZCDGPJAFJFZKNZBLCZSZPSGCYCJSZLMLRSZBZZLDLSLLYSXSQZQLYXZLSKKBRXBRBZCYCXZZZEEYFGKLZLYYHGZSGZLFJHGTGWKRAAJYZKZQTSSHJJXDCYZUYJLZYRZDQQHGJZXSSZBYKJPBFRTJXLLFQWJHYLQTYMBLPZDXTZYGBDHZZRBGXHWNJTJXLKSCFSMWLSDQYSJTXKZSCFWJLBXFTZLLJZLLQBLSQMQQCGCZFPBPHZCZJLPYYGGDTGWDCFCZQYYYQYSSCLXZSKLZZZGFFCQNWGLHQYZJJCZLQZZYJPJZZBPDCCMHJGXDQDGDLZQMFGPSYTSDYFWWDJZJYSXYYCZCYHZWPBYKXRYLYBHKJKSFXTZJMMCKHLLTNYYMSYXYZPYJQYCSYCWMTJJKQYRHLLQXPSGTLYYCLJSCPXJYZFNMLRGJJTYZBXYZMSJYJHHFZQMSYXRSZCWTLRTQZSSTKXGQKGSPTGCZNJSJCQCXHMXGGZTQYDJKZDLBZSXJLHYQGGGTHQSZPYHJHHGYYGKGGCWJZZYLCZLXQSFTGZSLLLMLJSKCTBLLZZSZMMNYTPZSXQHJCJYQXYZXZQZCPSHKZZYSXCDFGMWQRLLQXRFZTLYSTCTMJCXJJXHJNXTNRZTZFQYHQGLLGCXSZSJDJLJCYDSJTLNYXHSZXCGJZYQPYLFHDJSBPCCZHJJJQZJQDYBSSLLCMYTTMQTBHJQNNYGKYRQYQMZGCJKPDCGMYZHQLLSLLCLMHOLZGDYYFZSLJCQZLYLZQJESHNYLLJXGJXLYSYYYXNBZLJSSZCQQCJYLLZLTJYLLZLLBNYLGQCHXYYXOXCXQKYJXXXYKLXSXXYQXCYKQXQCSGYXXYQXYGYTQOHXHXPYXXXULCYEYCHZZCBWQBBWJQZSCSZSSLZYLKDESJZWMYMCYTSDSXXSCJPQQSQYLYYZYCMDJDZYWCBTJSYDJKCYDDJLBDJJSODZYSYXQQYXDHHGQQYQHDYXWGMMMAJDYBBBPPBCMUUPLJZSMTXERXJMHQNUTPJDCBSSMSSSTKJTSSMMTRCPLZSZMLQDSDMJMQPNQDXCFYNBFSDQXYXHYAYKQYDDLQYYYSSZBYDSLNTFQTZQPZMCHDHCZCWFDXTMYQSPHQYYXSRGJCWTJTZZQMGWJJTJHTQJBBHWZPXXHYQFXXQYWYYHYSCDYDHHQMNMTMWCPBSZPPZZGLMZFOLLCFWHMMSJZTTDHZZYFFYTZZGZYSKYJXQYJZQBHMBZZLYGHGFMSHPZFZSNCLPBQSNJXZSLXXFPMTYJYGBXLLDLXPZJYZJYHHZCYWHJYLSJEXFSZZYWXKZJLUYDTMLYMQJPWXYHXSKTQJEZRPXXZHHMHWQPWQLYJJQJJZSZCPHJLCHHNXJLQWZJHBMZYXBDHHYPZLHLHLGFWLCHYYTLHJXCJMSCPXSTKPNHQXSRTYXXTESYJCTLSSLSTDLLLWWYHDHRJZSFGXTSYCZYNYHTDHWJSLHTZDQDJZXXQHGYLTZPHCSQFCLNJTCLZPFSTPDYNYLGMJLLYCQHYSSHCHYLHQYQTMZYPBYWRFQYKQSYSLZDQJMPXYYSSRHZJNYWTQDFZBWWTWWRXCWHGYHXMKMYYYQMSMZHNGCEPMLQQMTCWCTMMPXJPJJHFXYYZSXZHTYBMSTSYJTTQQQYYLHYNPYQZLCYZHZWSMYLKFJXLWGXYPJYTYSYXYMZCKTTWLKSMZSYLMPWLZWXWQZSSAQSYXYRHSSNTSRAPXCPWCMGDXHXZDZYFJHGZTTSBJHGYZSZYSMYCLLLXBTYXHBBZJKSSDMALXHYCFYGMQYPJYCQXJLLLJGSLZGQLYCJCCZOTYXMTMTTLLWTGPXYMZMKLPSZZZXHKQYSXCTYJZYHXSHYXZKXLZWPSQPYHJWPJPWXQQYLXSDHMRSLZZYZWTTCYXYSZZSHBSCCSTPLWSSCJCHNLCGCHSSPHYLHFHHXJSXYLLNYLSZDHZXYLSXLWZYKCLDYAXZCMDDYSPJTQJZLNWQPSSSWCTSTSZLBLNXSMNYYMJQBQHRZWTYYDCHQLXKPZWBGQYBKFCMZWPZLLYYLSZYDWHXPSBCMLJBSCGBHXLQHYRLJXYSWXWXZSLDFHLSLYNJLZYFLYJYCDRJLFSYZFSLLCQYQFGJYHYXZLYLMSTDJCYHBZLLNWLXXYGYYHSMGDHXXHHLZZJZXCZZZCYQZFNGWPYLCPKPYYPMCLQKDGXZGGWQBDXZZKZFBXXLZXJTPJPTTBYTSZZDWSLCHZHSLTYXHQLHYXXXYYZYSWTXZKHLXZXZPYHGCHKCFSYHUTJRLXFJXPTZTWHPLYXFCRHXSHXKYXXYHZQDXQWULHYHMJTBFLKHTXCWHJFWJCFPQRYQXCYYYQYGRPYWSGSUNGWCHKZDXYFLXXHJJBYZWTSXXNCYJJYMSWZJQRMHXZWFQSYLZJZGBHYNSLBGTTCSYBYXXWXYHXYYXNSQYXMQYWRGYQLXBBZLJSYLPSYTJZYHYZAWLRORJMKSCZJXXXYXCHDYXRYXXJDTSQFXLYLTSFFYXLMTYJMJUYYYXLTZCSXQZQHZXLYYXZHDNBRXXXJCTYHLBRLMBRLLAXKYLLLJLYXXLYCRYLCJTGJCMTLZLLCYZZPZPCYAWHJJFYBDYYZSMPCKZDQYQPBPCJPDCYZMDPBCYYDYCNNPLMTMLRMFMMGWYZBSJGYGSMZQQQZTXMKQWGXLLPJGZBQCDJJJFPKJKCXBLJMSWMDTQJXLDLPPBXCWRCQFBFQJCZAHZGMYKPHYYHZYKNDKZMBPJYXPXYHLFPNYYGXJDBKXNXHJMZJXSTRSTLDXSKZYSYBZXJLXYSLBZYSLHXJPFXPQNBYLLJQKYGZMCYZZYMCCSLCLHZFWFWYXZMWSXTYNXJHPYYMCYSPMHYSMYDYSHQYZCHMJJMZCAAGCFJBBHPLYZYLXXSDJGXDHKXXTXXNBHRMLYJSLTXMRHNLXQJXYZLLYSWQGDLBJHDCGJYQYCMHWFMJYBMBYJYJWYMDPWHXQLDYGPDFXXBCGJSPCKRSSYZJMSLBZZJFLJJJLGXZGYXYXLSZQYXBEXYXHGCXBPLDYHWETTWWCJMBTXCHXYQXLLXFLYXLLJLSSFWDPZSMYJCLMWYTCZPCHQEKCQBWLCQYDPLQPPQZQFJQDJHYMMCXTXDRMJWRHXCJZYLQXDYYNHYYHRSLSRSYWWZJYMTLTLLGTQCJZYABTCKZCJYCCQLJZQXALMZYHYWLWDXZXQDLLQSHGPJFJLJHJABCQZDJGTKHSSTCYJLPSWZLXZXRWGLDLZRLZXTGSLLLLZLYXXWGDZYGBDPHZPBRLWSXQBPFDWOFMWHLYPCBJCCLDMBZPBZZLCYQXLDOMZBLZWPDWYYGDSTTHCSQSCCRSSSYSLFYBFNTYJSZDFNDPDHDZZMBBLSLCMYFFGTJJQWFTMTPJWFNLBZCMMJTGBDZLQLPYFHYYMJYLSDCHDZJWJCCTLJCLDTLJJCPDDSQDSSZYBNDBJLGGJZXSXNLYCYBJXQYCBYLZCFZPPGKCXZDZFZTJJFJSJXZBNZYJQTTYJYHTYCZHYMDJXTTMPXSPLZCDWSLSHXYPZGTFMLCJTYCBPMGDKWYCYZCDSZZYHFLYCTYGWHKJYYLSJCXGYWJCBLLCSNDDBTZBSCLYZCZZSSQDLLMQYYHFSLQLLXFTYHABXGWNYWYYPLLSDLDLLBJCYXJZMLHLJDXYYQYTDLLLBUGBFDFBBQJZZMDPJHGCLGMJJPGAEHHBWCQXAXHHHZCHXYPHJAXHLPHJPGPZJQCQZGJJZZUZDMQYYBZZPHYHYBWHAZYJHYKFGDPFQSDLZMLJXKXGALXZDAGLMDGXMWZQYXXDXXPFDMMSSYMPFMDMMKXKSYZYSHDZKXSYSMMZZZMSYDNZZCZXFPLSTMZDNMXCKJMZTYYMZMZZMSXHHDCZJEMXXKLJSTLWLSQLYJZLLZJSSDPPMHNLZJCZYHMXXHGZCJMDHXTKGRMXFWMCGMWKDTKSXQMMMFZZYDKMSCLCMPCGMHSPXQPZDSSLCXKYXTWLWJYAHZJGZQMCSNXYYMMPMLKJXMHLMLQMXCTKZMJQYSZJSYSZHSYJZJCDAJZYBSDQJZGWZQQXFKDMSDJLFWEHKZQKJPEYPZYSZCDWYJFFMZZYLTTDZZEFMZLBNPPLPLPEPSZALLTYLKCKQZKGENQLWAGYXYDPXLHSXQQWQCQXQCLHYXXMLYCCWLYMQYSKGCHLCJNSZKPYZKCQZQLJPDMDZHLASXLBYDWQLWDNBQCRYDDZTJYBKBWSZDXDTNPJDTCTQDFXQQMGNXECLTTBKPWSLCTYQLPWYZZKLPYGZCQQPLLKCCYLPQMZCZQCLJSLQZDJXLDDHPZQDLJJXZQDXYZQKZLJCYQDYJPPYPQYKJYRMPCBYMCXKLLZLLFQPYLLLMBSGLCYSSLRSYSQTMXYXZQZFDZUYSYZTFFMZZSMZQHZSSCCMLYXWTPZGXZJGZGSJSGKDDHTQGGZLLBJDZLCBCHYXYZHZFYWXYZYMSDBZZYJGTSMTFXQYXQSTDGSLNXDLRYZZLRYYLXQHTXSRTZNGZXBNQQZFMYKMZJBZYMKBPNLYZPBLMCNQYZZZSJZHJCTZKHYZZJRDYZHNPXGLFZTLKGJTCTSSYLLGZRZBBQZZKLPKLCZYSSUYXBJFPNJZZXCDWXZYJXZZDJJKGGRSRJKMSMZJLSJYWQSKYHQJSXPJZZZLSNSHRNYPZTWCHKLPSRZLZXYJQXQKYSJYCZTLQZYBBYBWZPQDWWYZCYTJCJXCKCWDKKZXSGKDZXWWYYJQYYTCYTDLLXWKCZKKLCCLZCQQDZLQLCSFQCHQHSFSMQZZLNBJJZBSJHTSZDYSJQJPDLZCDCWJKJZZLPYCGMZWDJJBSJQZSYZYHHXJPBJYDSSXDZNCGLQMBTSFSBPDZDLZNFGFJGFSMPXJQLMBLGQCYYXBQKDJJQYRFKZTJDHCZKLBSDZCFJTPLLJGXHYXZCSSZZXSTJYGKGCKGYOQXJPLZPBPGTGYJZGHZQZZLBJLSQFZGKQQJZGYCZBZQTLDXRJXBSXXPZXHYZYCLWDXJJHXMFDZPFZHQHQMQGKSLYHTYCGFRZGNQXCLPDLBZCSCZQLLJBLHBZCYPZZPPDYMZZSGYHCKCPZJGSLJLNSCDSLDLXBMSTLDDFJMKDJDHZLZXLSZQPQPGJLLYBDSZGQLBZLSLKYYHZTTNTJYQTZZPSZQZTLLJTYYLLQLLQYZQLBDZLSLYYZYMDFSZSNHLXZNCZQZPBWSKRFBSYZMTHBLGJPMCZZLSTLXSHTCSYZLZBLFEQHLXFLCJLYLJQCBZLZJHHSSTBRMHXZHJZCLXFNBGXGTQJCZTMSFZKJMSSNXLJKBHSJXNTNLZDNTLMSJXGZJYJCZXYJYJWRWWQNZTNFJSZPZSHZJFYRDJSFSZJZBJFZQZZHZLXFYSBZQLZSGYFTZDCSZXZJBQMSZKJRHYJZCKMJKHCHGTXKXQGLXPXFXTRTYLXJXHDTSJXHJZJXZWZLCQSBTXWXGXTXXHXFTSDKFJHZYJFJXRZSDLLLTQSQQZQWZXSYQTWGWBZCGZLLYZBCLMQQTZHZXZXLJFRMYZFLXYSQXXJKXRMQDZDMMYYBSQBHGZMWFWXGMXLZPYYTGZYCCDXYZXYWGSYJYZNBHPZJSQSYXSXRTFYZGRHZTXSZZTHCBFCLSYXZLZQMZLMPLMXZJXSFLBYZMYQHXJSXRXSQZZZSSLYFRCZJRCRXHHZXQYDYHXSJJHZCXZBTYNSYSXJBQLPXZQPYMLXZKYXLXCJLCYSXXZZLXDLLLJJYHZXGYJWKJRWYHCPSGNRZLFZWFZZNSXGXFLZSXZZZBFCSYJDBRJKRDHHGXJLJJTGXJXXSTJTJXLYXQFCSGSWMSBCTLQZZWLZZKXJMLTMJYHSDDBXGZHDLBMYJFRZFSGCLYJBPMLYSMSXLSZJQQHJZFXGFQFQBPXZGYYQXGZTCQWYLTLGWSGWHRLFSFGZJMGMGBGTJFSYZZGZYZAFLSSPMLPFLCWBJZCLJJMZLPJJLYMQDMYYYFBGYGYZMLYZDXQYXRQQQHSYYYQXYLJTYXFSFSLLGNQCYHYCWFHCCCFXPYLYPLLZYXXXXXKQHHXSHJZCFZSCZJXCPZWHHHHHAPYLQALPQAFYHXDYLUKMZQGGGDDESRNNZLTZGCHYPPYSQJJHCLLJTOLNJPZLJLHYMHEYDYDSQYCDDHGZUNDZCLZYZLLZNTNYZGSLHSLPJJBDGWXPCDUTJCKLKCLWKLLCASSTKZZDNQNTTLYYZSSYSSZZRYLJQKCQDHHCRXRZYDGRGCWCGZQFFFPPJFZYNAKRGYWYQPQXXFKJTSZZXSWZDDFBBXTBGTZKZNPZZPZXZPJSZBMQHKCYXYLDKLJNYPKYGHGDZJXXEAHPNZKZTZCMXCXMMJXNKSZQNMNLWBWWXJKYHCPSTMCSQTZJYXTPCTPDTNNPGLLLZSJLSPBLPLQHDTNJNLYYRSZFFJFQWDPHZDWMRZCCLODAXNSSNYZRESTYJWJYJDBCFXNMWTTBYLWSTSZGYBLJPXGLBOCLHPCBJLTMXZLJYLZXCLTPNCLCKXTPZJSWCYXSFYSZDKNTLBYJCYJLLSTGQCBXRYZXBXKLYLHZLQZLNZCXWJZLJZJNCJHXMNZZGJZZXTZJXYCYYCXXJYYXJJXSSSJSTSSTTPPGQTCSXWZDCSYFPTFBFHFBBLZJCLZZDBXGCXLQPXKFZFLSYLTUWBMQJHSZBMDDBCYSCCLDXYCDDQLYJJWMQLLCSGLJJSYFPYYCCYLTJANTJJPWYCMMGQYYSXDXQMZHSZXPFTWWZQSWQRFKJLZJQQYFBRXJHHFWJJZYQAZMYFRHCYYBYQWLPEXCCZSTYRLTTDMQLYKMBBGMYYJPRKZNPBSXYXBHYZDJDNGHPMFSGMWFZMFQMMBCMZZCJJLCNUXYQLMLRYGQZCYXZLWJGCJCGGMCJNFYZZJHYCPRRCMTZQZXHFQGTJXCCJEAQCRJYHPLQLSZDJRBCQHQDYRHYLYXJSYMHZYDWLDFRYHBPYDTSSCNWBXGLPZMLZZTQSSCPJMXXYCSJYTYCGHYCJWYRXXLFEMWJNMKLLSWTXHYYYNCMMCWJDQDJZGLLJWJRKHPZGGFLCCSCZMCBLTBHBQJXQDSPDJZZGKGLFQYWBZYZJLTSTDHQHCTCBCHFLQMPWDSHYYTQWCNZZJTLBYMBPDYYYXSQKXWYYFLXXNCWCXYPMAELYKKJMZZZBRXYYQJFLJPFHHHYTZZXSGQQMHSPGDZQWBWPJHZJDYSCQWZKTXXSQLZYYMYSDZGRXCKKUJLWPYSYSCSYZLRMLQSYLJXBCXTLWDQZPCYCYKPPPNSXFYZJJRCEMHSZMSXLXGLRWGCSTLRSXBZGBZGZTCPLUJLSLYLYMTXMTZPALZXPXJTJWTCYYZLBLXBZLQMYLXPGHDSLSSDMXMBDZZSXWHAMLCZCPJMCNHJYSNSYGCHSKQMZZQDLLKABLWJXSFMOCDXJRRLYQZKJMYBYQLYHETFJZFRFKSRYXFJTWDSXXSYSQJYSLYXWJHSNLXYYXHBHAWHHJZXWMYLJCSSLKYDZTXBZSYFDXGXZJKHSXXYBSSXDPYNZWRPTQZCZENYGCXQFJYKJBZMLJCMQQXUOXSLYXXLYLLJDZBTYMHPFSTTQQWLHOKYBLZZALZXQLHZWRRQHLSTMYPYXJJXMQSJFNBXYXYJXXYQYLTHYLQYFMLKLJTMLLHSZWKZHLJMLHLJKLJSTLQXYLMBHHLNLZXQJHXCFXXLHYHJJGBYZZKBXSCQDJQDSUJZYYHZHHMGSXCSYMXFEBCQWWRBPYYJQTYZCYQYQQZYHMWFFHGZFRJFCDPXNTQYZPDYKHJLFRZXPPXZDBBGZQSTLGDGYLCQMLCHHMFYWLZYXKJLYPQHSYWMQQGQZMLZJNSQXJQSYJYCBEHSXFSZPXZWFLLBCYYJDYTDTHWZSFJMQQYJLMQXXLLDTTKHHYBFPWTYYSQQWNQWLGWDEBZWCMYGCULKJXTMXMYJSXHYBRWFYMWFRXYQMXYSZTZZTFYKMLDHQDXWYYNLCRYJBLPSXCXYWLSPRRJWXHQYPHTYDNXHHMMYWYTZCSQMTSSCCDALWZTCPQPYJLLQZYJSWXMZZMMYLMXCLMXCZMXMZSQTZPPQQBLPGXQZHFLJJHYTJSRXWZXSCCDLXTYJDCQJXSLQYCLZXLZZXMXQRJMHRHZJBHMFLJLMLCLQNLDXZLLLPYPSYJYSXCQQDCMQJZZXHNPNXZMEKMXHYKYQLXSXTXJYYHWDCWDZHQYYBGYBCYSCFGPSJNZDYZZJZXRZRQJJYMCANYRJTLDPPYZBSTJKXXZYPFDWFGZZRPYMTNGXZQBYXNBUFNQKRJQZMJEGRZGYCLKXZDSKKNSXKCLJSPJYYZLQQJYBZSSQLLLKJXTBKTYLCCDDBLSPPFYLGYDTZJYQGGKQTTFZXBDKTYYHYBBFYTYYBCLPDYTGDHRYRNJSPTCSNYJQHKLLLZSLYDXXWBCJQSPXBPJZJCJDZFFXXBRMLAZHCSNDLBJDSZBLPRZTSWSBXBCLLXXLZDJZSJPYLYXXYFTFFFBHJJXGBYXJPMMMPSSJZJMTLYZJXSWXTYLEDQPJMYGQZJGDJLQJWJQLLSJGJGYGMSCLJJXDTYGJQJQJCJZCJGDZZSXQGSJGGCXHQXSNQLZZBXHSGZXCXYLJXYXYYDFQQJHJFXDHCTXJYRXYSQTJXYEFYYSSYYJXNCYZXFXMSYSZXYYSCHSHXZZZGZZZGFJDLTYLNPZGYJYZYYQZPBXQBDZTZCZYXXYHHSQXSHDHGQHJHGYWSZTMZMLHYXGEBTYLZKQWYTJZRCLEKYSTDBCYKQQSAYXCJXWWGSBHJYZYDHCSJKQCXSWXFLTYNYZPZCCZJQTZWJQDZZZQZLJJXLSBHPYXXPSXSHHEZTXFPTLQYZZXHYTXNCFZYYHXGNXMYWXTZSJPTHHGYMXMXQZXTSBCZYJYXXTYYZYPCQLMMSZMJZZLLZXGXZAAJZYXJMZXWDXZSXZDZXLEYJJZQBHZWZZZQTZPSXZTDSXJJJZNYAZPHXYYSRNQDTHZHYYKYJHDZXZLSWCLYBZYECWCYCRYLCXNHZYDZYDYJDFRJJHTRSQTXYXJRJHOJYNXELXSFSFJZGHPZSXZSZDZCQZBYYKLSGSJHCZSHDGQGXYZGXCHXZJWYQWGYHKSSEQZZNDZFKWYSSTCLZSTSYMCDHJXXYWEYXCZAYDMPXMDSXYBSQMJMZJMTZQLPJYQZCGQHXJHHLXXHLHDLDJQCLDWBSXFZZYYSCHTYTYYBHECXHYKGJPXHHYZJFXHWHBDZFYZBCAPNPGNYDMSXHMMMMAMYNBYJTMPXYYMCTHJBZYFCGTYHWPHFTWZZEZSBZEGPFMTSKFTYCMHFLLHGPZJXZJGZJYXZSBBQSCZZLZCCSTPGXMJSFTCCZJZDJXCYBZLFCJSYZFGSZLYBCWZZBYZDZYPSWYJZXZBDSYUXLZZBZFYGCZXBZHZFTPBGZGEJBSTGKDMFHYZZJHZLLZZGJQZLSFDJSSCBZGPDLFZFZSZYZYZSYGCXSNXXCHCZXTZZLJFZGQSQYXZJQDCCZTQCDXZJYQJQCHXZTDLGSCXZSYQJQTZWLQDQZTQCHQQJZYEZZZPBWKDJFCJPZTYPQYQTTYNLMBDKTJZPQZQZZFPZSBNJLGYJDXJDZZKZGQKXDLPZJTCJDQBXDJQJSTCKNXBXZMSLYJCQMTJQWWCJQNJNLLLHJCWQTBZQYDZCZPZZDZYDDCYZZZCCJTTJFZDPRRTZTJDCQTQZDTJNPLZBCLLCTZSXKJZQZPZLBZRBTJDCXFCZDBCCJJLTQQPLDCGZDBBZJCQDCJWYNLLZYZCCDWLLXWZLXRXNTQQCZXKQLSGDFQTDDGLRLAJJTKUYMKQLLTZYTDYYCZGJWYXDXFRSKSTQTENQMRKQZHHQKDLDAZFKYPBGGPZREBZZYKZZSPEGJXGYKQZZZSLYSYYYZWFQZYLZZLZHWCHKYPQGNPGBLPLRRJYXCCSYYHSFZFYBZYYTGZXYLXCZWXXZJZBLFFLGSKHYJZEYJHLPLLLLCZGXDRZELRHGKLZZYHZLYQSZZJZQLJZFLNBHGWLCZCFJYSPYXZLZLXGCCPZBLLCYBBBBUBBCBPCRNNZCZYRBFSRLDCGQYYQXYGMQZWTZYTYJXYFWTEHZZJYWLCCNTZYJJZDEDPZDZTSYQJHDYMBJNYJZLXTSSTPHNDJXXBYXQTZQDDTJTDYYTGWSCSZQFLSHLGLBCZPHDLYZJYCKWTYTYLBNYTSDSYCCTYSZYYEBHEXHQDTWNYGYCLXTSZYSTQMYGZAZCCSZZDSLZCLZRQXYYELJSBYMXSXZTEMBBLLYYLLYTDQYSHYMRQWKFKBFXNXSBYCHXBWJYHTQBPBSBWDZYLKGZSKYHXQZJXHXJXGNLJKZLYYCDXLFYFGHLJGJYBXQLYBXQPQGZTZPLNCYPXDJYQYDYMRBESJYYHKXXSTMXRCZZYWXYQYBMCLLYZHQYZWQXDBXBZWZMSLPDMYSKFMZKLZCYQYCZLQXFZZYDQZPZYGYJYZMZXDZFYFYTTQTZHGSPCZMLCCYTZXJCYTJMKSLPZHYSNZLLYTPZCTZZCKTXDHXXTQCYFKSMQCCYYAZHTJPCYLZLYJBJXTPNYLJYYNRXSYLMMNXJSMYBCSYSYLZYLXJJQYLDZLPQBFZZBLFNDXQKCZFYWHGQMRDSXYCYTXNQQJZYYPFZXDYZFPRXEJDGYQBXRCNFYYQPGHYJDYZXGRHTKYLNWDZNTSMPKLBTHBPYSZBZTJZSZZJTYYXZPHSSZZBZCZPTQFZMYFLYPYBBJQXZMXXDJMTSYSKKBJZXHJCKLPSMKYJZCXTMLJYXRZZQSLXXQPYZXMKYXXXJCLJPRMYYGADYSKQLSNDHYZKQXZYZTCGHZTLMLWZYBWSYCTBHJHJFCWZTXWYTKZLXQSHLYJZJXTMPLPYCGLTBZZTLZJCYJGDTCLKLPLLQPJMZPAPXYZLKKTKDZCZZBNZDYDYQZJYJGMCTXLTGXSZLMLHBGLKFWNWZHDXUHLFMKYSLGXDTWWFRJEJZTZHYDXYKSHWFZCQSHKTMQQHTZHYMJDJSKHXZJZBZZXYMPAGQMSTPXLSKLZYNWRTSQLSZBPSPSGZWYHTLKSSSWHZZLYYTNXJGMJSZSUFWNLSOZTXGXLSAMMLBWLDSZYLAKQCQCTMYCFJBSLXCLZZCLXXKSBZQCLHJPSQPLSXXCKSLNHPSFQQYTXYJZLQLDXZQJZDYYDJNZPTUZDSKJFSLJHYLZSQZLBTXYDGTQFDBYAZXDZHZJNHHQBYKNXJJQCZMLLJZKSPLDYCLBBLXKLELXJLBQYCXJXGCNLCQPLZLZYJTZLJGYZDZPLTQCSXFDMNYCXGBTJDCZNBGBQYQJWGKFHTNPYQZQGBKPBBYZMTJDYTBLSQMPSXTBNPDXKLEMYYCJYNZCTLDYKZZXDDXHQSHDGMZSJYCCTAYRZLPYLTLKXSLZCGGEXCLFXLKJRTLQJAQZNCMBYDKKCXGLCZJZXJHPTDJJMZQYKQSECQZDSHHADMLZFMMZBGNTJNNLGBYJBRBTMLBYJDZXLCJLPLDLPCQDHLXZLYCBLCXZZJADJLNZMMSSSMYBHBSQKBHRSXXJMXSDZNZPXLGBRHWGGFCXGMSKLLTSJYYCQLTSKYWYYHYWXBXQYWPYWYKQLSQPTNTKHQCWDQKTWPXXHCPTHTWUMSSYHBWCRWXHJMKMZNGWTMLKFGHKJYLSYYCXWHYECLQHKQHTTQKHFZLDXQWYZYYDESBPKYRZPJFYYZJCEQDZZDLATZBBFJLLCXDLMJSSXEGYGSJQXCWBXSSZPDYZCXDNYXPPZYDLYJCZPLTXLSXYZYRXCYYYDYLWWNZSAHJSYQYHGYWWAXTJZDAXYSRLTDPSSYYFNEJDXYZHLXLLLZQZSJNYQYQQXYJGHZGZCYJCHZLYCDSHWSHJZYJXCLLNXZJJYYXNFXMWFPYLCYLLABWDDHWDXJMCXZTZPMLQZHSFHZYNZTLLDYWLSLXHYMMYLMBWWKYXYADTXYLLDJPYBPWUXJMWMLLSAFDLLYFLBHHHBQQLTZJCQJLDJTFFKMMMBYTHYGDCQRDDWRQJXNBYSNWZDBYYTBJHPYBYTTJXAAHGQDQTMYSTQXKBTZPKJLZRBEQQSSMJJBDJOTGTBXPGBKTLHQXJJJCTHXQDWJLWRFWQGWSHCKRYSWGFTGYGBXSDWDWRFHWYTJJXXXJYZYSLPYYYPAYXHYDQKXSHXYXGSKQHYWFDDDPPLCJLQQEEWXKSYYKDYPLTJTHKJLTCYYHHJTTPLTZZCDLTHQKZXQYSTEEYWYYZYXXYYSTTJKLLPZMCYHQGXYHSRMBXPLLNQYDQHXSXXWGDQBSHYLLPJJJTHYJKYPPTHYYKTYEZYENMDSHLCRPQFDGFXZPSFTLJXXJBSWYYSKSFLXLPPLBBBLBSFXFYZBSJSSYLPBBFFFFSSCJDSTZSXZRYYSYFFSYZYZBJTBCTSBSDHRTJJBYTCXYJEYLXCBNEBJDSYXYKGSJZBXBYTFZWGENYHHTHZHHXFWGCSTBGXKLSXYWMTMBYXJSTZSCDYQRCYTWXZFHMYMCXLZNSDJTTTXRYCFYJSBSDYERXJLJXBBDEYNJGHXGCKGSCYMBLXJMSZNSKGXFBNBPTHFJAAFXYXFPXMYPQDTZCXZZPXRSYWZDLYBBKTYQPQJPZYPZJZNJPZJLZZFYSBTTSLMPTZRTDXQSJEHBZYLZDHLJSQMLHTXTJECXSLZZSPKTLZKQQYFSYGYWPCPQFHQHYTQXZKRSGTTSQCZLPTXCDYYZXSQZSLXLZMYCPCQBZYXHBSXLZDLTCDXTYLZJYYZPZYZLTXJSJXHLPMYTXCQRBLZSSFJZZTNJYTXMYJHLHPPLCYXQJQQKZZSCPZKSWALQSBLCCZJSXGWWWYGYKTJBBZTDKHXHKGTGPBKQYSLPXPJCKBMLLXDZSTBKLGGQKQLSBKKTFXRMDKBFTPZFRTBBRFERQGXYJPZSSTLBZTPSZQZSJDHLJQLZBPMSMMSXLQQNHKNBLRDDNXXDHDDJCYYGYLXGZLXSYGMQQGKHBPMXYXLYTQWLWGCPBMQXCYZYDRJBHTDJYHQSHTMJSBYPLWHLZFFNYPMHXXHPLTBQPFBJWQDBYGPNZTPFZJGSDDTQSHZEAWZZYLLTYYBWJKXXGHLFKXDJTMSZSQYNZGGSWQSPHTLSSKMCLZXYSZQZXNCJDQGZDLFNYKLJCJLLZLMZZNHYDSSHTHZZLZZBBHQZWWYCRZHLYQQJBEYFXXXWHSRXWQHWPSLMSSKZTTYGYQQWRSLALHMJTQJSMXQBJJZJXZYZKXBYQXBJXSHZTSFJLXMXZXFGHKZSZGGYLCLSARJYHSLLLMZXELGLXYDJYTLFBHBPNLYZFBBHPTGJKWETZHKJJXZXXGLLJLSTGSHJJYQLQZFKCGNNDJSSZFDBCTWWSEQFHQJBSAQTGYPQLBXBMMYWXGSLZHGLZGQYFLZBYFZJFRYSFMBYZHQGFWZSYFYJJPHZBYYZFFWODGRLMFTWLBZGYCQXCDJYGZYYYYTYTYDWEGAZYHXJLZYYHLRMGRXXZCLHNELJJTJTPWJYBJJBXJJTJTEEKHWSLJPLPSFYZPQQBDLQJJTYYQLYZKDKSQJYYQZLDQTGJQYZJSUCMRYQTHTEJMFCTYHYPKMHYZWJDQFHYYXWSHCTXRLJHQXHCCYYYJLTKTTYTMXGTCJTZAYYOCZLYLBSZYWJYTSJYHBYSHFJLYGJXXTMZYYLTXXYPZLXYJZYZYYPNHMYMDYYLBLHLSYYQQLLNJJYMSOYQBZGDLYXYLCQYXTSZEGXHZGLHWBLJHEYXTWQMAKBPQCGYSHHEGQCMWYYWLJYJHYYZLLJJYLHZYHMGSLJLJXCJJYCLYCJPCPZJZJMMYLCQLNQLJQJSXYJMLSZLJQLYCMMHCFMMFPQQMFYLQMCFFQMMMMHMZNFHHJGTTHHKHSLNCHHYQDXTMMQDCYZYXYQMYQYLTDCYYYZAZZCYMZYDLZFFFMMYCQZWZZMABTBYZTDMNZZGGDFTYPCGQYTTSSFFWFDTZQSSYSTWXJHXYTSXXYLBYQHWWKXHZXWZNNZZJZJJQJCCCHYYXBZXZCYZTLLCQXYNJYCYYCYNZZQYYYEWYCZDCJYCCHYJLBTZYYCQWMPWPYMLGKDLDLGKQQBGYCHJXY";
            this.full_dict = { "a": "\u554a\u963f\u9515", "ai": "\u57c3\u6328\u54ce\u5509\u54c0\u7691\u764c\u853c\u77ee\u827e\u788d\u7231\u9698\u8bf6\u6371\u55f3\u55cc\u5ad2\u7477\u66a7\u7839\u953f\u972d", "an": "\u978d\u6c28\u5b89\u4ffa\u6309\u6697\u5cb8\u80fa\u6848\u8c19\u57ef\u63de\u72b4\u5eb5\u6849\u94f5\u9e4c\u9878\u9eef", "ang": "\u80ae\u6602\u76ce", "ao": "\u51f9\u6556\u71ac\u7ff1\u8884\u50b2\u5965\u61ca\u6fb3\u5773\u62d7\u55f7\u5662\u5c99\u5ed2\u9068\u5aaa\u9a9c\u8071\u87af\u93ca\u9ccc\u93d6", "ba": "\u82ad\u634c\u6252\u53ed\u5427\u7b06\u516b\u75a4\u5df4\u62d4\u8dcb\u9776\u628a\u8019\u575d\u9738\u7f62\u7238\u8307\u83dd\u8406\u636d\u5c9c\u705e\u6777\u94af\u7c91\u9c85\u9b43", "bai": "\u767d\u67cf\u767e\u6446\u4f70\u8d25\u62dc\u7a17\u859c\u63b0\u97b4", "ban": "\u6591\u73ed\u642c\u6273\u822c\u9881\u677f\u7248\u626e\u62cc\u4f34\u74e3\u534a\u529e\u7eca\u962a\u5742\u8c73\u94a3\u7622\u764d\u8228", "bang": "\u90a6\u5e2e\u6886\u699c\u8180\u7ed1\u68d2\u78c5\u868c\u9551\u508d\u8c24\u84a1\u8783", "bao": "\u82de\u80de\u5305\u8912\u96f9\u4fdd\u5821\u9971\u5b9d\u62b1\u62a5\u66b4\u8c79\u9c8d\u7206\u52f9\u8446\u5b80\u5b62\u7172\u9e28\u8913\u8db5\u9f85", "bo": "\u5265\u8584\u73bb\u83e0\u64ad\u62e8\u94b5\u6ce2\u535a\u52c3\u640f\u94c2\u7b94\u4f2f\u5e1b\u8236\u8116\u818a\u6e24\u6cca\u9a73\u4eb3\u8543\u5575\u997d\u6a97\u64d8\u7934\u94b9\u9e41\u7c38\u8ddb", "bei": "\u676f\u7891\u60b2\u5351\u5317\u8f88\u80cc\u8d1d\u94a1\u500d\u72c8\u5907\u60eb\u7119\u88ab\u5b5b\u9642\u90b6\u57e4\u84d3\u5457\u602b\u6096\u789a\u9e4e\u8919\u943e", "ben": "\u5954\u82ef\u672c\u7b28\u755a\u574c\u951b", "beng": "\u5d29\u7ef7\u752d\u6cf5\u8e66\u8ff8\u552a\u5623\u750f", "bi": "\u903c\u9f3b\u6bd4\u9119\u7b14\u5f7c\u78a7\u84d6\u853d\u6bd5\u6bd9\u6bd6\u5e01\u5e87\u75f9\u95ed\u655d\u5f0a\u5fc5\u8f9f\u58c1\u81c2\u907f\u965b\u5315\u4ef3\u4ffe\u8298\u835c\u8378\u5421\u54d4\u72f4\u5eb3\u610e\u6ed7\u6fde\u5f3c\u59a3\u5a62\u5b16\u74a7\u8d32\u7540\u94cb\u79d5\u88e8\u7b5a\u7b85\u7be6\u822d\u895e\u8df8\u9ac0", "bian": "\u97ad\u8fb9\u7f16\u8d2c\u6241\u4fbf\u53d8\u535e\u8fa8\u8fa9\u8fab\u904d\u533e\u5f01\u82c4\u5fed\u6c74\u7f0f\u7178\u782d\u78a5\u7a39\u7a86\u8759\u7b3e\u9cca", "biao": "\u6807\u5f6a\u8198\u8868\u5a4a\u9aa0\u98d1\u98d9\u98da\u706c\u9556\u9573\u762d\u88f1\u9cd4", "bie": "\u9cd6\u618b\u522b\u762a\u8e69\u9cd8", "bin": "\u5f6c\u658c\u6fd2\u6ee8\u5bbe\u6448\u50a7\u6d5c\u7f24\u73a2\u6ba1\u8191\u9554\u9acc\u9b13", "bing": "\u5175\u51b0\u67c4\u4e19\u79c9\u997c\u70b3\u75c5\u5e76\u7980\u90b4\u6452\u7ee0\u678b\u69df\u71f9", "bu": "\u6355\u535c\u54fa\u8865\u57e0\u4e0d\u5e03\u6b65\u7c3f\u90e8\u6016\u62ca\u535f\u900b\u74ff\u6661\u949a\u91ad", "ca": "\u64e6\u5693\u7924", "cai": "\u731c\u88c1\u6750\u624d\u8d22\u776c\u8e29\u91c7\u5f69\u83dc\u8521", "can": "\u9910\u53c2\u8695\u6b8b\u60ed\u60e8\u707f\u9a96\u74a8\u7cb2\u9eea", "cang": "\u82cd\u8231\u4ed3\u6ca7\u85cf\u4f27", "cao": "\u64cd\u7cd9\u69fd\u66f9\u8349\u8279\u5608\u6f15\u87ac\u825a", "ce": "\u5395\u7b56\u4fa7\u518c\u6d4b\u5202\u5e3b\u607b", "ceng": "\u5c42\u8e6d\u564c", "cha": "\u63d2\u53c9\u832c\u8336\u67e5\u78b4\u643d\u5bdf\u5c94\u5dee\u8be7\u7339\u9987\u6c4a\u59f9\u6748\u6942\u69ce\u6aab\u9497\u9538\u9572\u8869", "chai": "\u62c6\u67f4\u8c7a\u4faa\u8308\u7625\u867f\u9f87", "chan": "\u6400\u63ba\u8749\u998b\u8c17\u7f20\u94f2\u4ea7\u9610\u98a4\u5181\u8c04\u8c36\u8487\u5edb\u5fcf\u6f7a\u6fb6\u5b71\u7fbc\u5a75\u5b17\u9aa3\u89c7\u7985\u9561\u88e3\u87fe\u8e94", "chang": "\u660c\u7316\u573a\u5c1d\u5e38\u957f\u507f\u80a0\u5382\u655e\u7545\u5531\u5021\u4f25\u9b2f\u82cc\u83d6\u5f9c\u6005\u60dd\u960a\u5a3c\u5ae6\u6636\u6c05\u9cb3", "chao": "\u8d85\u6284\u949e\u671d\u5632\u6f6e\u5de2\u5435\u7092\u600a\u7ec9\u6641\u8016", "che": "\u8f66\u626f\u64a4\u63a3\u5f7b\u6f88\u577c\u5c6e\u7817", "chen": "\u90f4\u81e3\u8fb0\u5c18\u6668\u5ff1\u6c89\u9648\u8d81\u886c\u79f0\u8c0c\u62bb\u55d4\u5bb8\u741b\u6987\u809c\u80c2\u789c\u9f80", "cheng": "\u6491\u57ce\u6a59\u6210\u5448\u4e58\u7a0b\u60e9\u6f84\u8bda\u627f\u901e\u9a8b\u79e4\u57d5\u5d4a\u5fb5\u6d48\u67a8\u67fd\u6a18\u665f\u584d\u77a0\u94d6\u88ce\u86cf\u9172", "chi": "\u5403\u75f4\u6301\u5319\u6c60\u8fdf\u5f1b\u9a70\u803b\u9f7f\u4f88\u5c3a\u8d64\u7fc5\u65a5\u70bd\u50ba\u5880\u82aa\u830c\u640b\u53f1\u54e7\u557b\u55e4\u5f73\u996c\u6cb2\u5ab8\u6555\u80dd\u7719\u7735\u9e31\u761b\u892b\u86a9\u87ad\u7b1e\u7bea\u8c49\u8e05\u8e1f\u9b51", "chong": "\u5145\u51b2\u866b\u5d07\u5ba0\u833a\u5fe1\u61a7\u94f3\u825f", "chou": "\u62bd\u916c\u7574\u8e0c\u7a20\u6101\u7b79\u4ec7\u7ef8\u7785\u4e11\u4fe6\u5733\u5e31\u60c6\u6eb4\u59af\u7633\u96e0\u9c8b", "chu": "\u81ed\u521d\u51fa\u6a71\u53a8\u8e87\u9504\u96cf\u6ec1\u9664\u695a\u7840\u50a8\u77d7\u6410\u89e6\u5904\u4e8d\u520d\u61b7\u7ecc\u6775\u696e\u6a17\u870d\u8e70\u9edc", "chuan": "\u63e3\u5ddd\u7a7f\u693d\u4f20\u8239\u5598\u4e32\u63be\u821b\u60f4\u9044\u5ddb\u6c1a\u948f\u9569\u8221", "chuang": "\u75ae\u7a97\u5e62\u5e8a\u95ef\u521b\u6006", "chui": "\u5439\u708a\u6376\u9524\u5782\u9672\u68f0\u69cc", "chun": "\u6625\u693f\u9187\u5507\u6df3\u7eaf\u8822\u4fc3\u83bc\u6c8c\u80ab\u6710\u9e51\u877d", "chuo": "\u6233\u7ef0\u851f\u8fb6\u8f8d\u955e\u8e14\u9f8a", "ci": "\u75b5\u8328\u78c1\u96cc\u8f9e\u6148\u74f7\u8bcd\u6b64\u523a\u8d50\u6b21\u8360\u5472\u5d6f\u9e5a\u8785\u7ccd\u8d91", "cong": "\u806a\u8471\u56f1\u5306\u4ece\u4e1b\u506c\u82c1\u6dd9\u9aa2\u742e\u7481\u679e", "cu": "\u51d1\u7c97\u918b\u7c07\u731d\u6b82\u8e59", "cuan": "\u8e7f\u7be1\u7a9c\u6c46\u64ba\u6615\u7228", "cui": "\u6467\u5d14\u50ac\u8106\u7601\u7cb9\u6dec\u7fe0\u8403\u60b4\u7480\u69b1\u96b9", "cun": "\u6751\u5b58\u5bf8\u78cb\u5fd6\u76b4", "cuo": "\u64ae\u6413\u63aa\u632b\u9519\u539d\u811e\u9509\u77ec\u75e4\u9e7e\u8e49\u8e9c", "da": "\u642d\u8fbe\u7b54\u7629\u6253\u5927\u8037\u54d2\u55d2\u601b\u59b2\u75b8\u8921\u7b2a\u977c\u9791", "dai": "\u5446\u6b79\u50a3\u6234\u5e26\u6b86\u4ee3\u8d37\u888b\u5f85\u902e\u6020\u57ed\u7519\u5454\u5cb1\u8fe8\u902f\u9a80\u7ed0\u73b3\u9edb", "dan": "\u803d\u62c5\u4e39\u5355\u90f8\u63b8\u80c6\u65e6\u6c2e\u4f46\u60ee\u6de1\u8bde\u5f39\u86cb\u4ebb\u510b\u5369\u840f\u5556\u6fb9\u6a90\u6b9a\u8d55\u7708\u7605\u8043\u7baa", "dang": "\u5f53\u6321\u515a\u8361\u6863\u8c20\u51fc\u83ea\u5b95\u7800\u94db\u88c6", "dao": "\u5200\u6363\u8e48\u5012\u5c9b\u7977\u5bfc\u5230\u7a3b\u60bc\u9053\u76d7\u53e8\u5541\u5fc9\u6d2e\u6c18\u7118\u5fd1\u7e9b", "de": "\u5fb7\u5f97\u7684\u951d", "deng": "\u8e6c\u706f\u767b\u7b49\u77aa\u51f3\u9093\u5654\u5d9d\u6225\u78f4\u956b\u7c26", "di": "\u5824\u4f4e\u6ef4\u8fea\u654c\u7b1b\u72c4\u6da4\u7fdf\u5ae1\u62b5\u5e95\u5730\u8482\u7b2c\u5e1d\u5f1f\u9012\u7f14\u6c10\u7c74\u8bcb\u8c1b\u90b8\u577b\u839c\u837b\u5600\u5a23\u67e2\u68e3\u89cc\u7825\u78b2\u7747\u955d\u7f9d\u9ab6", "dian": "\u98a0\u6382\u6ec7\u7898\u70b9\u5178\u975b\u57ab\u7535\u4f43\u7538\u5e97\u60e6\u5960\u6dc0\u6bbf\u4e36\u963d\u576b\u57dd\u5dc5\u73b7\u765c\u766b\u7c1f\u8e2e", "diao": "\u7889\u53fc\u96d5\u51cb\u5201\u6389\u540a\u9493\u8c03\u8f7a\u94de\u8729\u7c9c\u8c82", "die": "\u8dcc\u7239\u789f\u8776\u8fed\u8c0d\u53e0\u4f5a\u57a4\u581e\u63f2\u558b\u6e2b\u8f76\u7252\u74de\u8936\u800b\u8e40\u9cbd\u9cce", "ding": "\u4e01\u76ef\u53ee\u9489\u9876\u9f0e\u952d\u5b9a\u8ba2\u4e22\u4ec3\u5576\u738e\u815a\u7887\u753a\u94e4\u7594\u8035\u914a", "dong": "\u4e1c\u51ac\u8463\u61c2\u52a8\u680b\u4f97\u606b\u51bb\u6d1e\u578c\u549a\u5cbd\u5cd2\u5902\u6c21\u80e8\u80f4\u7850\u9e2b", "dou": "\u515c\u6296\u6597\u9661\u8c46\u9017\u75d8\u8538\u94ad\u7aa6\u7aac\u86aa\u7bfc\u9161", "du": "\u90fd\u7763\u6bd2\u728a\u72ec\u8bfb\u5835\u7779\u8d4c\u675c\u9540\u809a\u5ea6\u6e21\u5992\u828f\u561f\u6e0e\u691f\u6a50\u724d\u8839\u7b03\u9ad1\u9ee9", "duan": "\u7aef\u77ed\u953b\u6bb5\u65ad\u7f0e\u5f56\u6934\u7145\u7c16", "dui": "\u5806\u5151\u961f\u5bf9\u603c\u619d\u7893", "dun": "\u58a9\u5428\u8e72\u6566\u987f\u56e4\u949d\u76fe\u9041\u7096\u7818\u7905\u76f9\u9566\u8db8", "duo": "\u6387\u54c6\u591a\u593a\u579b\u8eb2\u6735\u8dfa\u8235\u5241\u60f0\u5815\u5484\u54da\u7f0d\u67c1\u94ce\u88f0\u8e31", "e": "\u86fe\u5ce8\u9e45\u4fc4\u989d\u8bb9\u5a25\u6076\u5384\u627c\u904f\u9102\u997f\u5669\u8c14\u57a9\u57ad\u82ca\u83aa\u843c\u5443\u6115\u5c59\u5a40\u8f6d\u66f7\u816d\u786a\u9507\u9537\u9e57\u989a\u9cc4", "en": "\u6069\u84bd\u6441\u5514\u55ef", "er": "\u800c\u513f\u8033\u5c14\u9975\u6d31\u4e8c\u8d30\u8fe9\u73e5\u94d2\u9e38\u9c95", "fa": "\u53d1\u7f5a\u7b4f\u4f10\u4e4f\u9600\u6cd5\u73d0\u57a1\u781d", "fan": "\u85e9\u5e06\u756a\u7ffb\u6a0a\u77fe\u9492\u7e41\u51e1\u70e6\u53cd\u8fd4\u8303\u8d29\u72af\u996d\u6cdb\u8629\u5e61\u72ad\u68b5\u6535\u71d4\u7548\u8e6f", "fang": "\u574a\u82b3\u65b9\u80aa\u623f\u9632\u59a8\u4eff\u8bbf\u7eba\u653e\u531a\u90a1\u5f77\u94ab\u822b\u9c82", "fei": "\u83f2\u975e\u5561\u98de\u80a5\u532a\u8bfd\u5420\u80ba\u5e9f\u6cb8\u8d39\u82be\u72d2\u60b1\u6ddd\u5983\u7ecb\u7eef\u69a7\u8153\u6590\u6249\u7953\u7829\u9544\u75f1\u871a\u7bda\u7fe1\u970f\u9cb1", "fen": "\u82ac\u915a\u5429\u6c1b\u5206\u7eb7\u575f\u711a\u6c7e\u7c89\u594b\u4efd\u5fff\u6124\u7caa\u507e\u7035\u68fc\u610d\u9cbc\u9f22", "feng": "\u4e30\u5c01\u67ab\u8702\u5cf0\u950b\u98ce\u75af\u70fd\u9022\u51af\u7f1d\u8bbd\u5949\u51e4\u4ff8\u9146\u8451\u6ca3\u781c", "fu": "\u4f5b\u5426\u592b\u6577\u80a4\u5b75\u6276\u62c2\u8f90\u5e45\u6c1f\u7b26\u4f0f\u4fd8\u670d\u6d6e\u6daa\u798f\u88b1\u5f17\u752b\u629a\u8f85\u4fef\u91dc\u65a7\u812f\u8151\u5e9c\u8150\u8d74\u526f\u8986\u8d4b\u590d\u5085\u4ed8\u961c\u7236\u8179\u8d1f\u5bcc\u8ba3\u9644\u5987\u7f1a\u5490\u5310\u51eb\u90db\u8299\u82fb\u832f\u83a9\u83d4\u544b\u5e5e\u6ecf\u8274\u5b5a\u9a78\u7ec2\u6874\u8d59\u9efb\u9efc\u7f58\u7a03\u99a5\u864d\u86a8\u8709\u8760\u876e\u9eb8\u8dba\u8dd7\u9cc6", "ga": "\u5676\u560e\u86e4\u5c2c\u5477\u5c15\u5c1c\u65ee\u9486", "gai": "\u8be5\u6539\u6982\u9499\u76d6\u6e89\u4e10\u9654\u5793\u6224\u8d45\u80f2", "gan": "\u5e72\u7518\u6746\u67d1\u7aff\u809d\u8d76\u611f\u79c6\u6562\u8d63\u5769\u82f7\u5c34\u64c0\u6cd4\u6de6\u6f89\u7ec0\u6a44\u65f0\u77f8\u75b3\u9150", "gang": "\u5188\u521a\u94a2\u7f38\u809b\u7eb2\u5c97\u6e2f\u6206\u7f61\u9883\u7b7b", "gong": "\u6760\u5de5\u653b\u529f\u606d\u9f9a\u4f9b\u8eac\u516c\u5bab\u5f13\u5de9\u6c5e\u62f1\u8d21\u5171\u857b\u5efe\u54a3\u73d9\u80b1\u86a3\u86e9\u89e5", "gao": "\u7bd9\u768b\u9ad8\u818f\u7f94\u7cd5\u641e\u9550\u7a3f\u544a\u777e\u8bf0\u90dc\u84bf\u85c1\u7f1f\u69d4\u69c1\u6772\u9506", "ge": "\u54e5\u6b4c\u6401\u6208\u9e3d\u80f3\u7599\u5272\u9769\u845b\u683c\u9601\u9694\u94ec\u4e2a\u5404\u9b32\u4ee1\u54ff\u5865\u55dd\u7ea5\u643f\u8188\u784c\u94ea\u9549\u88bc\u988c\u867c\u8238\u9abc\u9ac2", "gei": "\u7ed9", "gen": "\u6839\u8ddf\u4e98\u831b\u54cf\u826e", "geng": "\u8015\u66f4\u5e9a\u7fb9\u57c2\u803f\u6897\u54fd\u8d53\u9ca0", "gou": "\u94a9\u52fe\u6c9f\u82df\u72d7\u57a2\u6784\u8d2d\u591f\u4f5d\u8bdf\u5ca3\u9058\u5abe\u7f11\u89cf\u5f40\u9e32\u7b31\u7bdd\u97b2", "gu": "\u8f9c\u83c7\u5495\u7b8d\u4f30\u6cbd\u5b64\u59d1\u9f13\u53e4\u86ca\u9aa8\u8c37\u80a1\u6545\u987e\u56fa\u96c7\u560f\u8bc2\u83f0\u54cc\u5d2e\u6c69\u688f\u8f71\u726f\u727f\u80cd\u81cc\u6bc2\u77bd\u7f5f\u94b4\u9522\u74e0\u9e2a\u9e44\u75fc\u86c4\u9164\u89da\u9cb4\u9ab0\u9e58", "gua": "\u522e\u74dc\u5250\u5be1\u6302\u8902\u5366\u8bd6\u5471\u681d\u9e39", "guai": "\u4e56\u62d0\u602a\u54d9", "guan": "\u68fa\u5173\u5b98\u51a0\u89c2\u7ba1\u9986\u7f50\u60ef\u704c\u8d2f\u500c\u839e\u63bc\u6dab\u76e5\u9e73\u9ccf", "guang": "\u5149\u5e7f\u901b\u72b7\u6844\u80f1\u7592", "gui": "\u7470\u89c4\u572d\u7845\u5f52\u9f9f\u95fa\u8f68\u9b3c\u8be1\u7678\u6842\u67dc\u8dea\u8d35\u523d\u5326\u523f\u5e8b\u5b84\u59ab\u6867\u7085\u6677\u7688\u7c0b\u9c91\u9cdc", "gun": "\u8f8a\u6eda\u68cd\u4e28\u886e\u7ef2\u78d9\u9ca7", "guo": "\u9505\u90ed\u56fd\u679c\u88f9\u8fc7\u9998\u8803\u57da\u63b4\u5459\u56d7\u5e3c\u5d1e\u7313\u6901\u8662\u951e\u8052\u872e\u873e\u8748", "ha": "\u54c8", "hai": "\u9ab8\u5b69\u6d77\u6c26\u4ea5\u5bb3\u9a87\u54b4\u55e8\u988f\u91a2", "han": "\u9163\u61a8\u90af\u97e9\u542b\u6db5\u5bd2\u51fd\u558a\u7f55\u7ff0\u64bc\u634d\u65f1\u61be\u608d\u710a\u6c57\u6c49\u9097\u83e1\u6496\u961a\u701a\u6657\u7113\u9894\u86b6\u9f3e", "hen": "\u592f\u75d5\u5f88\u72e0\u6068", "hang": "\u676d\u822a\u6c86\u7ed7\u73e9\u6841", "hao": "\u58d5\u568e\u8c6a\u6beb\u90dd\u597d\u8017\u53f7\u6d69\u8585\u55e5\u5686\u6fe0\u704f\u660a\u7693\u98a2\u869d", "he": "\u5475\u559d\u8377\u83cf\u6838\u79be\u548c\u4f55\u5408\u76d2\u8c89\u9602\u6cb3\u6db8\u8d6b\u8910\u9e64\u8d3a\u8bc3\u52be\u58d1\u85ff\u55d1\u55ec\u9616\u76cd\u86b5\u7fee", "hei": "\u563f\u9ed1", "heng": "\u54fc\u4ea8\u6a2a\u8861\u6052\u8a07\u8605", "hong": "\u8f70\u54c4\u70d8\u8679\u9e3f\u6d2a\u5b8f\u5f18\u7ea2\u9ec9\u8ba7\u836d\u85a8\u95f3\u6cd3", "hou": "\u5589\u4faf\u7334\u543c\u539a\u5019\u540e\u5820\u5f8c\u9005\u760a\u7bcc\u7cc7\u9c8e\u9aba", "hu": "\u547c\u4e4e\u5ffd\u745a\u58f6\u846b\u80e1\u8774\u72d0\u7cca\u6e56\u5f27\u864e\u552c\u62a4\u4e92\u6caa\u6237\u51b1\u553f\u56eb\u5cb5\u7322\u6019\u60da\u6d52\u6ef9\u7425\u69f2\u8f77\u89f3\u70c0\u7173\u623d\u6248\u795c\u9e55\u9e71\u7b0f\u9190\u659b", "hua": "\u82b1\u54d7\u534e\u733e\u6ed1\u753b\u5212\u5316\u8bdd\u5290\u6d4d\u9a85\u6866\u94e7\u7a1e", "huai": "\u69d0\u5f8a\u6000\u6dee\u574f\u8fd8\u8e1d", "huan": "\u6b22\u73af\u6853\u7f13\u6362\u60a3\u5524\u75ea\u8c62\u7115\u6da3\u5ba6\u5e7b\u90c7\u5942\u57b8\u64d0\u571c\u6d39\u6d63\u6f36\u5bf0\u902d\u7f33\u953e\u9ca9\u9b1f", "huang": "\u8352\u614c\u9ec4\u78fa\u8757\u7c27\u7687\u51f0\u60f6\u714c\u6643\u5e4c\u604d\u8c0e\u968d\u5fa8\u6e5f\u6f62\u9051\u749c\u8093\u7640\u87e5\u7bc1\u9cc7", "hui": "\u7070\u6325\u8f89\u5fbd\u6062\u86d4\u56de\u6bc1\u6094\u6167\u5349\u60e0\u6666\u8d3f\u79fd\u4f1a\u70e9\u6c47\u8bb3\u8bf2\u7ed8\u8bd9\u8334\u835f\u8559\u54d5\u5599\u96b3\u6d04\u5f57\u7f0b\u73f2\u6656\u605a\u867a\u87ea\u9ebe", "hun": "\u8364\u660f\u5a5a\u9b42\u6d51\u6df7\u8be8\u9984\u960d\u6eb7\u7f17", "huo": "\u8c41\u6d3b\u4f19\u706b\u83b7\u6216\u60d1\u970d\u8d27\u7978\u6509\u56af\u5925\u94ac\u952a\u956c\u8020\u8816", "ji": "\u51fb\u573e\u57fa\u673a\u7578\u7a3d\u79ef\u7b95\u808c\u9965\u8ff9\u6fc0\u8ba5\u9e21\u59ec\u7ee9\u7f09\u5409\u6781\u68d8\u8f91\u7c4d\u96c6\u53ca\u6025\u75be\u6c72\u5373\u5ac9\u7ea7\u6324\u51e0\u810a\u5df1\u84df\u6280\u5180\u5b63\u4f0e\u796d\u5242\u60b8\u6d4e\u5bc4\u5bc2\u8ba1\u8bb0\u65e2\u5fcc\u9645\u5993\u7ee7\u7eaa\u5c45\u4e0c\u4e69\u525e\u4f76\u4f74\u8114\u58bc\u82a8\u82b0\u8401\u84ba\u857a\u638e\u53fd\u54ad\u54dc\u5527\u5c8c\u5d74\u6d0e\u5f50\u5c50\u9aa5\u757f\u7391\u696b\u6b9b\u621f\u6222\u8d4d\u89ca\u7284\u9f51\u77f6\u7f81\u5d47\u7a37\u7620\u7635\u866e\u7b08\u7b04\u66a8\u8dfb\u8dfd\u9701\u9c9a\u9cab\u9afb\u9e82", "jia": "\u5609\u67b7\u5939\u4f73\u5bb6\u52a0\u835a\u988a\u8d3e\u7532\u94be\u5047\u7a3c\u4ef7\u67b6\u9a7e\u5ac1\u4f3d\u90cf\u62ee\u5cac\u6d43\u8fe6\u73c8\u621b\u80db\u605d\u94d7\u9553\u75c2\u86f1\u7b33\u8888\u8dcf", "jian": "\u6b7c\u76d1\u575a\u5c16\u7b3a\u95f4\u714e\u517c\u80a9\u8270\u5978\u7f04\u8327\u68c0\u67ec\u78b1\u7877\u62e3\u6361\u7b80\u4fed\u526a\u51cf\u8350\u69db\u9274\u8df5\u8d31\u89c1\u952e\u7bad\u4ef6\u5065\u8230\u5251\u996f\u6e10\u6e85\u6da7\u5efa\u50ed\u8c0f\u8c2b\u83c5\u84b9\u641b\u56dd\u6e54\u8e47\u8b07\u7f23\u67a7\u67d9\u6957\u620b\u622c\u726e\u728d\u6bfd\u8171\u7751\u950f\u9e63\u88e5\u7b15\u7bb4\u7fe6\u8dbc\u8e3a\u9ca3\u97af", "jiang": "\u50f5\u59dc\u5c06\u6d46\u6c5f\u7586\u848b\u6868\u5956\u8bb2\u5320\u9171\u964d\u8333\u6d1a\u7edb\u7f30\u729f\u7913\u8029\u7ce8\u8c47", "jiao": "\u8549\u6912\u7901\u7126\u80f6\u4ea4\u90ca\u6d47\u9a84\u5a07\u56bc\u6405\u94f0\u77eb\u4fa5\u811a\u72e1\u89d2\u997a\u7f34\u7ede\u527f\u6559\u9175\u8f7f\u8f83\u53eb\u4f7c\u50ec\u832d\u6322\u564d\u5ce4\u5fbc\u59e3\u7e9f\u656b\u768e\u9e6a\u86df\u91ae\u8de4\u9c9b", "jie": "\u7a96\u63ed\u63a5\u7686\u79f8\u8857\u9636\u622a\u52ab\u8282\u6854\u6770\u6377\u776b\u7aed\u6d01\u7ed3\u89e3\u59d0\u6212\u85c9\u82a5\u754c\u501f\u4ecb\u75a5\u8beb\u5c4a\u5048\u8ba6\u8bd8\u5588\u55df\u736c\u5a55\u5b51\u6840\u7352\u78a3\u9534\u7596\u88b7\u9889\u86a7\u7faf\u9c92\u9ab1\u9aeb", "jin": "\u5dfe\u7b4b\u65a4\u91d1\u4eca\u6d25\u895f\u7d27\u9526\u4ec5\u8c28\u8fdb\u9773\u664b\u7981\u8fd1\u70ec\u6d78\u5c3d\u537a\u8369\u5807\u5664\u9991\u5ed1\u5997\u7f19\u747e\u69ff\u8d46\u89d0\u9485\u9513\u887f\u77dc", "jing": "\u52b2\u8346\u5162\u830e\u775b\u6676\u9cb8\u4eac\u60ca\u7cbe\u7cb3\u7ecf\u4e95\u8b66\u666f\u9888\u9759\u5883\u656c\u955c\u5f84\u75c9\u9756\u7adf\u7ade\u51c0\u522d\u5106\u9631\u83c1\u734d\u61ac\u6cfe\u8ff3\u5f2a\u5a67\u80bc\u80eb\u8148\u65cc", "jiong": "\u70af\u7a98\u5182\u8fe5\u6243", "jiu": "\u63ea\u7a76\u7ea0\u7396\u97ed\u4e45\u7078\u4e5d\u9152\u53a9\u6551\u65e7\u81fc\u8205\u548e\u5c31\u759a\u50e6\u557e\u9604\u67e9\u6855\u9e6b\u8d73\u9b0f", "ju": "\u97a0\u62d8\u72d9\u75bd\u9a79\u83ca\u5c40\u5480\u77e9\u4e3e\u6cae\u805a\u62d2\u636e\u5de8\u5177\u8ddd\u8e1e\u952f\u4ff1\u53e5\u60e7\u70ac\u5267\u5028\u8bb5\u82e3\u82f4\u8392\u63ac\u907d\u5c66\u741a\u67b8\u6910\u6998\u6989\u6a58\u728b\u98d3\u949c\u9514\u7aad\u88fe\u8d84\u91b5\u8e3d\u9f83\u96ce\u97ab", "juan": "\u6350\u9e43\u5a1f\u5026\u7737\u5377\u7ee2\u9104\u72f7\u6d93\u684a\u8832\u9529\u954c\u96bd", "jue": "\u6485\u652b\u6289\u6398\u5014\u7235\u89c9\u51b3\u8bc0\u7edd\u53a5\u5282\u8c32\u77cd\u8568\u5658\u5d1b\u7357\u5b53\u73cf\u6877\u6a5b\u721d\u9562\u8e76\u89d6", "jun": "\u5747\u83cc\u94a7\u519b\u541b\u5cfb\u4fca\u7ae3\u6d5a\u90e1\u9a8f\u6343\u72fb\u76b2\u7b60\u9e87", "ka": "\u5580\u5496\u5361\u4f67\u5494\u80e9", "ke": "\u54af\u5777\u82db\u67ef\u68f5\u78d5\u9897\u79d1\u58f3\u54b3\u53ef\u6e34\u514b\u523b\u5ba2\u8bfe\u5ca2\u606a\u6e98\u9a92\u7f02\u73c2\u8f72\u6c2a\u778c\u94b6\u75b4\u7aa0\u874c\u9ac1", "kai": "\u5f00\u63e9\u6977\u51ef\u6168\u5240\u57b2\u8488\u5ffe\u607a\u94e0\u950e", "kan": "\u520a\u582a\u52d8\u574e\u780d\u770b\u4f83\u51f5\u83b0\u83b6\u6221\u9f9b\u77b0", "kang": "\u5eb7\u6177\u7ce0\u625b\u6297\u4ea2\u7095\u5751\u4f09\u95f6\u94aa", "kao": "\u8003\u62f7\u70e4\u9760\u5c3b\u6832\u7292\u94d0", "ken": "\u80af\u5543\u57a6\u6073\u57a0\u88c9\u9880", "keng": "\u542d\u5fd0\u94ff", "kong": "\u7a7a\u6050\u5b54\u63a7\u5025\u5d06\u7b9c", "kou": "\u62a0\u53e3\u6263\u5bc7\u82a4\u853b\u53e9\u770d\u7b58", "ku": "\u67af\u54ed\u7a9f\u82e6\u9177\u5e93\u88e4\u5233\u5800\u55be\u7ed4\u9ab7", "kua": "\u5938\u57ae\u630e\u8de8\u80ef\u4f89", "kuai": "\u5757\u7b77\u4fa9\u5feb\u84af\u90d0\u8489\u72ef\u810d", "kuan": "\u5bbd\u6b3e\u9acb", "kuang": "\u5321\u7b50\u72c2\u6846\u77ff\u7736\u65f7\u51b5\u8bd3\u8bf3\u909d\u5739\u593c\u54d0\u7ea9\u8d36", "kui": "\u4e8f\u76d4\u5cbf\u7aa5\u8475\u594e\u9b41\u5080\u9988\u6127\u6e83\u9997\u532e\u5914\u9697\u63c6\u55b9\u559f\u609d\u6126\u9615\u9035\u668c\u777d\u8069\u8770\u7bd1\u81fe\u8dec", "kun": "\u5764\u6606\u6346\u56f0\u6083\u9603\u7428\u951f\u918c\u9cb2\u9ae1", "kuo": "\u62ec\u6269\u5ed3\u9614\u86de", "la": "\u5783\u62c9\u5587\u8721\u814a\u8fa3\u5566\u524c\u647a\u908b\u65ef\u782c\u760c", "lai": "\u83b1\u6765\u8d56\u5d03\u5f95\u6d9e\u6fd1\u8d49\u7750\u94fc\u765e\u7c41", "lan": "\u84dd\u5a6a\u680f\u62e6\u7bee\u9611\u5170\u6f9c\u8c30\u63fd\u89c8\u61d2\u7f06\u70c2\u6ee5\u5549\u5c9a\u61d4\u6f24\u6984\u6593\u7f71\u9567\u8934", "lang": "\u7405\u6994\u72fc\u5eca\u90ce\u6717\u6d6a\u83a8\u8497\u5577\u9606\u9512\u7a02\u8782", "lao": "\u635e\u52b3\u7262\u8001\u4f6c\u59e5\u916a\u70d9\u6d9d\u5520\u5d02\u6833\u94d1\u94f9\u75e8\u91aa", "le": "\u52d2\u4e50\u808b\u4ec2\u53fb\u561e\u6cd0\u9cd3", "lei": "\u96f7\u956d\u857e\u78ca\u7d2f\u5121\u5792\u64c2\u7c7b\u6cea\u7fb8\u8bd4\u837d\u54a7\u6f2f\u5ad8\u7f27\u6a91\u8012\u9179", "ling": "\u68f1\u51b7\u62ce\u73b2\u83f1\u96f6\u9f84\u94c3\u4f36\u7f9a\u51cc\u7075\u9675\u5cad\u9886\u53e6\u4ee4\u9143\u5844\u82d3\u5464\u56f9\u6ce0\u7eeb\u67c3\u68c2\u74f4\u8046\u86c9\u7fce\u9cae", "leng": "\u695e\u6123", "li": "\u5398\u68a8\u7281\u9ece\u7bf1\u72f8\u79bb\u6f13\u7406\u674e\u91cc\u9ca4\u793c\u8389\u8354\u540f\u6817\u4e3d\u5389\u52b1\u783e\u5386\u5229\u5088\u4f8b\u4fd0\u75e2\u7acb\u7c92\u6ca5\u96b6\u529b\u7483\u54e9\u4fea\u4fda\u90e6\u575c\u82c8\u8385\u84e0\u85dc\u6369\u5456\u5533\u55b1\u7301\u6ea7\u6fa7\u9026\u5a0c\u5ae0\u9a8a\u7f21\u73de\u67a5\u680e\u8f79\u623e\u783a\u8a48\u7f79\u9502\u9e42\u75a0\u75ac\u86ce\u870a\u8821\u7b20\u7be5\u7c9d\u91b4\u8dde\u96f3\u9ca1\u9ce2\u9ee7", "lian": "\u4fe9\u8054\u83b2\u8fde\u9570\u5ec9\u601c\u6d9f\u5e18\u655b\u8138\u94fe\u604b\u70bc\u7ec3\u631b\u8539\u5941\u6f4b\u6fc2\u5a08\u740f\u695d\u6b93\u81c1\u81a6\u88e2\u880a\u9ca2", "liang": "\u7cae\u51c9\u6881\u7cb1\u826f\u4e24\u8f86\u91cf\u667e\u4eae\u8c05\u589a\u690b\u8e09\u9753\u9b49", "liao": "\u64a9\u804a\u50da\u7597\u71ce\u5be5\u8fbd\u6f66\u4e86\u6482\u9563\u5ed6\u6599\u84fc\u5c25\u5639\u7360\u5bee\u7f2d\u948c\u9e69\u8022", "lie": "\u5217\u88c2\u70c8\u52a3\u730e\u51bd\u57d2\u6d0c\u8d94\u8e90\u9b23", "lin": "\u7433\u6797\u78f7\u9716\u4e34\u90bb\u9cde\u6dcb\u51db\u8d41\u541d\u853a\u5d99\u5eea\u9074\u6aa9\u8f9a\u77b5\u7cbc\u8e8f\u9e9f", "liu": "\u6e9c\u7409\u69b4\u786b\u998f\u7559\u5218\u7624\u6d41\u67f3\u516d\u62a1\u507b\u848c\u6cd6\u6d4f\u905b\u9a9d\u7efa\u65d2\u7198\u950d\u954f\u9e68\u938f", "long": "\u9f99\u804b\u5499\u7b3c\u7abf\u9686\u5784\u62e2\u9647\u5f04\u5785\u830f\u6cf7\u73d1\u680a\u80e7\u783b\u7643", "lou": "\u697c\u5a04\u6402\u7bd3\u6f0f\u964b\u55bd\u5d5d\u9542\u7618\u8027\u877c\u9ac5", "lu": "\u82a6\u5362\u9885\u5e90\u7089\u63b3\u5364\u864f\u9c81\u9e93\u788c\u9732\u8def\u8d42\u9e7f\u6f5e\u7984\u5f55\u9646\u622e\u5786\u6445\u64b8\u565c\u6cf8\u6e0c\u6f09\u7490\u680c\u6a79\u8f73\u8f82\u8f98\u6c07\u80ea\u9565\u9e2c\u9e6d\u7c0f\u823b\u9c88", "lv": "\u9a74\u5415\u94dd\u4fa3\u65c5\u5c65\u5c61\u7f15\u8651\u6c2f\u5f8b\u7387\u6ee4\u7eff\u634b\u95fe\u6988\u8182\u7a06\u891b", "luan": "\u5ce6\u5b6a\u6ee6\u5375\u4e71\u683e\u9e3e\u92ae", "lue": "\u63a0\u7565\u950a", "lun": "\u8f6e\u4f26\u4ed1\u6ca6\u7eb6\u8bba\u56f5", "luo": "\u841d\u87ba\u7f57\u903b\u9523\u7ba9\u9aa1\u88f8\u843d\u6d1b\u9a86\u7edc\u502e\u8366\u645e\u7321\u6cfa\u6924\u8136\u9559\u7630\u96d2", "ma": "\u5988\u9ebb\u739b\u7801\u8682\u9a6c\u9a82\u561b\u5417\u551b\u72b8\u5b37\u6769\u9ebd", "mai": "\u57cb\u4e70\u9ea6\u5356\u8fc8\u8109\u52a2\u836c\u54aa\u973e", "man": "\u7792\u9992\u86ee\u6ee1\u8513\u66fc\u6162\u6f2b\u8c29\u5881\u5e54\u7f26\u71b3\u9558\u989f\u87a8\u9cd7\u9794", "mang": "\u8292\u832b\u76f2\u5fd9\u83bd\u9099\u6f2d\u6726\u786d\u87d2", "meng": "\u6c13\u840c\u8499\u6aac\u76df\u9530\u731b\u68a6\u5b5f\u52d0\u750d\u77a2\u61f5\u791e\u867b\u8722\u8813\u824b\u8268\u9efe", "miao": "\u732b\u82d7\u63cf\u7784\u85d0\u79d2\u6e3a\u5e99\u5999\u55b5\u9088\u7f08\u7f2a\u676a\u6dfc\u7707\u9e4b\u8731", "mao": "\u8305\u951a\u6bdb\u77db\u94c6\u536f\u8302\u5192\u5e3d\u8c8c\u8d38\u4f94\u88a4\u52d6\u8306\u5cc1\u7441\u6634\u7266\u8004\u65c4\u61cb\u7780\u86d1\u8765\u87ca\u9ae6", "me": "\u4e48", "mei": "\u73ab\u679a\u6885\u9176\u9709\u7164\u6ca1\u7709\u5a92\u9541\u6bcf\u7f8e\u6627\u5bd0\u59b9\u5a9a\u5776\u8393\u5d4b\u7338\u6d7c\u6e44\u6963\u9545\u9e5b\u8882\u9b45", "men": "\u95e8\u95f7\u4eec\u626a\u739f\u7116\u61d1\u9494", "mi": "\u772f\u919a\u9761\u7cdc\u8ff7\u8c1c\u5f25\u7c73\u79d8\u89c5\u6ccc\u871c\u5bc6\u5e42\u8288\u5196\u8c27\u863c\u5627\u7315\u736f\u6c68\u5b93\u5f2d\u8112\u6549\u7cf8\u7e3b\u9e8b", "mian": "\u68c9\u7720\u7ef5\u5195\u514d\u52c9\u5a29\u7f05\u9762\u6c94\u6e4e\u817c\u7704", "mie": "\u8511\u706d\u54a9\u881b\u7bfe", "min": "\u6c11\u62bf\u76bf\u654f\u60af\u95fd\u82e0\u5cb7\u95f5\u6cef\u73c9", "ming": "\u660e\u879f\u9e23\u94ed\u540d\u547d\u51a5\u8317\u6e9f\u669d\u7791\u9169", "miu": "\u8c2c", "mo": "\u6478\u6479\u8611\u6a21\u819c\u78e8\u6469\u9b54\u62b9\u672b\u83ab\u58a8\u9ed8\u6cab\u6f20\u5bde\u964c\u8c1f\u8309\u84e6\u998d\u5aeb\u9546\u79e3\u763c\u8031\u87c6\u8c8a\u8c98", "mou": "\u8c0b\u725f\u67d0\u53b6\u54de\u5a7a\u7738\u936a", "mu": "\u62c7\u7261\u4ea9\u59c6\u6bcd\u5893\u66ae\u5e55\u52df\u6155\u6728\u76ee\u7766\u7267\u7a46\u4eeb\u82dc\u5452\u6c90\u6bea\u94bc", "na": "\u62ff\u54ea\u5450\u94a0\u90a3\u5a1c\u7eb3\u5185\u637a\u80ad\u954e\u8872\u7bac", "nai": "\u6c16\u4e43\u5976\u8010\u5948\u9f10\u827f\u8418\u67f0", "nan": "\u5357\u7537\u96be\u56ca\u5583\u56e1\u6960\u8169\u877b\u8d67", "nao": "\u6320\u8111\u607c\u95f9\u5b6c\u57b4\u7331\u7459\u7847\u94d9\u86f2", "ne": "\u6dd6\u5462\u8bb7", "nei": "\u9981", "nen": "\u5ae9\u80fd\u6798\u6041", "ni": "\u59ae\u9713\u502a\u6ce5\u5c3c\u62df\u4f60\u533f\u817b\u9006\u6eba\u4f32\u576d\u730a\u6029\u6ee0\u6635\u65ce\u7962\u615d\u7768\u94cc\u9cb5", "nian": "\u852b\u62c8\u5e74\u78be\u64b5\u637b\u5ff5\u5eff\u8f87\u9ecf\u9c87\u9cb6", "niang": "\u5a18\u917f", "niao": "\u9e1f\u5c3f\u8311\u5b32\u8132\u8885", "nie": "\u634f\u8042\u5b7d\u556e\u954a\u954d\u6d85\u4e5c\u9667\u8616\u55eb\u8080\u989e\u81ec\u8e51", "nin": "\u60a8\u67e0", "ning": "\u72de\u51dd\u5b81\u62e7\u6cde\u4f5e\u84e5\u549b\u752f\u804d", "niu": "\u725b\u626d\u94ae\u7ebd\u72c3\u5ff8\u599e\u86b4", "nong": "\u8113\u6d53\u519c\u4fac", "nu": "\u5974\u52aa\u6012\u5476\u5e11\u5f29\u80ec\u5b65\u9a7d", "nv": "\u5973\u6067\u9495\u8844", "nuan": "\u6696", "nuenue": "\u8650", "nue": "\u759f\u8c11", "nuo": "\u632a\u61e6\u7cef\u8bfa\u50a9\u6426\u558f\u9518", "ou": "\u54e6\u6b27\u9e25\u6bb4\u85d5\u5455\u5076\u6ca4\u6004\u74ef\u8026", "pa": "\u556a\u8db4\u722c\u5e15\u6015\u7436\u8469\u7b62", "pai": "\u62cd\u6392\u724c\u5f98\u6e43\u6d3e\u4ff3\u848e", "pan": "\u6500\u6f58\u76d8\u78d0\u76fc\u7554\u5224\u53db\u723f\u6cee\u88a2\u897b\u87e0\u8e52", "pang": "\u4e53\u5e9e\u65c1\u802a\u80d6\u6ec2\u9004", "pao": "\u629b\u5486\u5228\u70ae\u888d\u8dd1\u6ce1\u530f\u72cd\u5e96\u812c\u75b1", "pei": "\u5478\u80da\u57f9\u88f4\u8d54\u966a\u914d\u4f69\u6c9b\u638a\u8f94\u5e14\u6de0\u65c6\u952b\u9185\u9708", "pen": "\u55b7\u76c6\u6e53", "peng": "\u7830\u62a8\u70f9\u6f8e\u5f6d\u84ec\u68da\u787c\u7bf7\u81a8\u670b\u9e4f\u6367\u78b0\u576f\u580b\u562d\u6026\u87db", "pi": "\u7812\u9739\u6279\u62ab\u5288\u7435\u6bd7\u5564\u813e\u75b2\u76ae\u5339\u75de\u50fb\u5c41\u8b6c\u4e15\u9674\u90b3\u90eb\u572e\u9f19\u64d7\u567c\u5e80\u5ab2\u7eb0\u6787\u7513\u7765\u7f74\u94cd\u75e6\u7656\u758b\u868d\u8c94", "pian": "\u7bc7\u504f\u7247\u9a97\u8c1d\u9a88\u728f\u80fc\u890a\u7fe9\u8e41", "piao": "\u98d8\u6f02\u74e2\u7968\u527d\u560c\u5ad6\u7f25\u6b8d\u779f\u87b5", "pie": "\u6487\u77a5\u4e3f\u82e4\u6c15", "pin": "\u62fc\u9891\u8d2b\u54c1\u8058\u62da\u59d8\u5ad4\u6980\u725d\u98a6", "ping": "\u4e52\u576a\u82f9\u840d\u5e73\u51ed\u74f6\u8bc4\u5c4f\u4fdc\u5a09\u67b0\u9c86", "po": "\u5761\u6cfc\u9887\u5a46\u7834\u9b44\u8feb\u7c95\u53f5\u9131\u6ea5\u73c0\u948b\u94b7\u76a4\u7b38", "pou": "\u5256\u88d2\u8e23", "pu": "\u6251\u94fa\u4ec6\u8386\u8461\u83e9\u84b2\u57d4\u6734\u5703\u666e\u6d66\u8c31\u66dd\u7011\u530d\u5657\u6fee\u749e\u6c06\u9564\u9568\u8e7c", "qi": "\u671f\u6b3a\u6816\u621a\u59bb\u4e03\u51c4\u6f06\u67d2\u6c8f\u5176\u68cb\u5947\u6b67\u7566\u5d0e\u8110\u9f50\u65d7\u7948\u7941\u9a91\u8d77\u5c82\u4e5e\u4f01\u542f\u5951\u780c\u5668\u6c14\u8fc4\u5f03\u6c7d\u6ce3\u8bab\u4e9f\u4e93\u573b\u8291\u840b\u847a\u5601\u5c7a\u5c90\u6c54\u6dc7\u9a90\u7eee\u742a\u7426\u675e\u6864\u69ed\u6b39\u797a\u61a9\u789b\u86f4\u871e\u7da6\u7dae\u8dbf\u8e4a\u9ccd\u9e92", "qia": "\u6390\u6070\u6d3d\u845c", "qian": "\u7275\u6266\u948e\u94c5\u5343\u8fc1\u7b7e\u4edf\u8c26\u4e7e\u9ed4\u94b1\u94b3\u524d\u6f5c\u9063\u6d45\u8c34\u5811\u5d4c\u6b20\u6b49\u4f65\u9621\u828a\u82a1\u8368\u63ae\u5c8d\u60ad\u614a\u9a9e\u6434\u8930\u7f31\u6920\u80b7\u6106\u94a4\u8654\u7b9d", "qiang": "\u67aa\u545b\u8154\u7f8c\u5899\u8537\u5f3a\u62a2\u5af1\u6a2f\u6217\u709d\u9516\u9535\u956a\u8941\u8723\u7f9f\u8deb\u8dc4", "qiao": "\u6a47\u9539\u6572\u6084\u6865\u77a7\u4e54\u4fa8\u5de7\u9798\u64ac\u7fd8\u5ced\u4fcf\u7a8d\u5281\u8bee\u8c2f\u835e\u6100\u6194\u7f32\u6a35\u6bf3\u7857\u8df7\u9792", "qie": "\u5207\u8304\u4e14\u602f\u7a83\u90c4\u553c\u60ec\u59be\u6308\u9532\u7ba7", "qin": "\u94a6\u4fb5\u4eb2\u79e6\u7434\u52e4\u82b9\u64d2\u79bd\u5bdd\u6c81\u82a9\u84c1\u8572\u63ff\u5423\u55ea\u5659\u6eb1\u6a8e\u8793\u887e", "qing": "\u9752\u8f7b\u6c22\u503e\u537f\u6e05\u64ce\u6674\u6c30\u60c5\u9877\u8bf7\u5e86\u5029\u82d8\u570a\u6aa0\u78ec\u873b\u7f44\u7b90\u8b26\u9cad\u9ee5", "qiong": "\u743c\u7a77\u909b\u8315\u7a79\u7b47\u928e", "qiu": "\u79cb\u4e18\u90b1\u7403\u6c42\u56da\u914b\u6cc5\u4fc5\u6c3d\u5def\u827d\u72b0\u6e6b\u9011\u9052\u6978\u8d47\u9e20\u866c\u86af\u8764\u88d8\u7cd7\u9cc5\u9f3d", "qu": "\u8d8b\u533a\u86c6\u66f2\u8eaf\u5c48\u9a71\u6e20\u53d6\u5a36\u9f8b\u8da3\u53bb\u8bce\u52ac\u8556\u8627\u5c96\u8862\u9612\u74a9\u89d1\u6c0d\u795b\u78f2\u766f\u86d0\u883c\u9eb4\u77bf\u9ee2", "quan": "\u5708\u98a7\u6743\u919b\u6cc9\u5168\u75ca\u62f3\u72ac\u5238\u529d\u8be0\u8343\u737e\u609b\u7efb\u8f81\u754e\u94e8\u8737\u7b4c\u9b08", "que": "\u7f3a\u7094\u7638\u5374\u9e4a\u69b7\u786e\u96c0\u9619\u60ab", "qun": "\u88d9\u7fa4\u9021", "ran": "\u7136\u71c3\u5189\u67d3\u82d2\u9aef", "rang": "\u74e4\u58e4\u6518\u56b7\u8ba9\u79b3\u7a70", "rao": "\u9976\u6270\u7ed5\u835b\u5a06\u6861", "ruo": "\u60f9\u82e5\u5f31", "re": "\u70ed\u504c", "ren": "\u58ec\u4ec1\u4eba\u5fcd\u97e7\u4efb\u8ba4\u5203\u598a\u7eab\u4ede\u834f\u845a\u996a\u8f6b\u7a14\u887d", "reng": "\u6254\u4ecd", "ri": "\u65e5", "rong": "\u620e\u8338\u84c9\u8363\u878d\u7194\u6eb6\u5bb9\u7ed2\u5197\u5d58\u72e8\u7f1b\u6995\u877e", "rou": "\u63c9\u67d4\u8089\u7cc5\u8e42\u97a3", "ru": "\u8339\u8815\u5112\u5b7a\u5982\u8fb1\u4e73\u6c5d\u5165\u8925\u84d0\u85b7\u5685\u6d33\u6ebd\u6fe1\u94f7\u8966\u98a5", "ruan": "\u8f6f\u962e\u670a", "rui": "\u854a\u745e\u9510\u82ae\u8564\u777f\u868b", "run": "\u95f0\u6da6", "sa": "\u6492\u6d12\u8428\u5345\u4ee8\u6332\u98d2", "sai": "\u816e\u9cc3\u585e\u8d5b\u567b", "san": "\u4e09\u53c1\u4f1e\u6563\u5f61\u9993\u6c35\u6bf5\u7cc1\u9730", "sang": "\u6851\u55d3\u4e27\u6421\u78c9\u98a1", "sao": "\u6414\u9a9a\u626b\u5ac2\u57fd\u81ca\u7619\u9ccb", "se": "\u745f\u8272\u6da9\u556c\u94e9\u94ef\u7a51", "sen": "\u68ee", "seng": "\u50e7", "sha": "\u838e\u7802\u6740\u5239\u6c99\u7eb1\u50bb\u5565\u715e\u810e\u6b43\u75e7\u88df\u970e\u9ca8", "shai": "\u7b5b\u6652\u917e", "shan": "\u73ca\u82eb\u6749\u5c71\u5220\u717d\u886b\u95ea\u9655\u64c5\u8d61\u81b3\u5584\u6c55\u6247\u7f2e\u5261\u8baa\u912f\u57cf\u829f\u6f78\u59d7\u9a9f\u81bb\u9490\u759d\u87ee\u8222\u8dda\u9cdd", "shang": "\u5892\u4f24\u5546\u8d4f\u664c\u4e0a\u5c1a\u88f3\u57a7\u7ef1\u6b87\u71b5\u89de", "shao": "\u68a2\u634e\u7a0d\u70e7\u828d\u52fa\u97f6\u5c11\u54e8\u90b5\u7ecd\u52ad\u82d5\u6f72\u86f8\u7b24\u7b72\u8244", "she": "\u5962\u8d4a\u86c7\u820c\u820d\u8d66\u6444\u5c04\u6151\u6d89\u793e\u8bbe\u538d\u4f58\u731e\u7572\u9e9d", "shen": "\u7837\u7533\u547b\u4f38\u8eab\u6df1\u5a20\u7ec5\u795e\u6c88\u5ba1\u5a76\u751a\u80be\u614e\u6e17\u8bdc\u8c02\u5432\u54c2\u6e16\u6939\u77e7\u8703", "sheng": "\u58f0\u751f\u7525\u7272\u5347\u7ef3\u7701\u76db\u5269\u80dc\u5723\u4e1e\u6e11\u5ab5\u771a\u7b19", "shi": "\u5e08\u5931\u72ee\u65bd\u6e7f\u8bd7\u5c38\u8671\u5341\u77f3\u62fe\u65f6\u4ec0\u98df\u8680\u5b9e\u8bc6\u53f2\u77e2\u4f7f\u5c4e\u9a76\u59cb\u5f0f\u793a\u58eb\u4e16\u67ff\u4e8b\u62ed\u8a93\u901d\u52bf\u662f\u55dc\u566c\u9002\u4ed5\u4f8d\u91ca\u9970\u6c0f\u5e02\u6043\u5ba4\u89c6\u8bd5\u8c25\u57d8\u83b3\u84cd\u5f11\u5511\u9963\u8f7c\u8006\u8d33\u70bb\u793b\u94c8\u94ca\u87ab\u8210\u7b6e\u8c55\u9ca5\u9cba", "shou": "\u6536\u624b\u9996\u5b88\u5bff\u6388\u552e\u53d7\u7626\u517d\u624c\u72e9\u7ef6\u824f", "shu": "\u852c\u67a2\u68b3\u6b8a\u6292\u8f93\u53d4\u8212\u6dd1\u758f\u4e66\u8d4e\u5b70\u719f\u85af\u6691\u66d9\u7f72\u8700\u9ecd\u9f20\u5c5e\u672f\u8ff0\u6811\u675f\u620d\u7ad6\u5885\u5eb6\u6570\u6f31\u6055\u500f\u587e\u83fd\u5fc4\u6cad\u6d91\u6f8d\u59dd\u7ebe\u6bf9\u8167\u6bb3\u956f\u79eb\u9e6c", "shua": "\u5237\u800d\u5530\u6dae", "shuai": "\u6454\u8870\u7529\u5e05\u87c0", "shuan": "\u6813\u62f4\u95e9", "shuang": "\u971c\u53cc\u723d\u5b40", "shui": "\u8c01\u6c34\u7761\u7a0e", "shun": "\u542e\u77ac\u987a\u821c\u6042", "shuo": "\u8bf4\u7855\u6714\u70c1\u84b4\u6420\u55cd\u6fef\u5981\u69ca\u94c4", "si": "\u65af\u6495\u5636\u601d\u79c1\u53f8\u4e1d\u6b7b\u8086\u5bfa\u55e3\u56db\u4f3a\u4f3c\u9972\u5df3\u53ae\u4fdf\u5155\u83e5\u549d\u6c5c\u6cd7\u6f8c\u59d2\u9a77\u7f0c\u7940\u7960\u9536\u9e36\u801c\u86f3\u7b25", "song": "\u677e\u8038\u6002\u9882\u9001\u5b8b\u8bbc\u8bf5\u51c7\u83d8\u5d27\u5d69\u5fea\u609a\u6dde\u7ae6", "sou": "\u641c\u8258\u64de\u55fd\u53df\u55d6\u55fe\u998a\u6eb2\u98d5\u778d\u953c\u878b", "su": "\u82cf\u9165\u4fd7\u7d20\u901f\u7c9f\u50f3\u5851\u6eaf\u5bbf\u8bc9\u8083\u5919\u8c21\u850c\u55c9\u612b\u7c0c\u89eb\u7a23", "suan": "\u9178\u849c\u7b97", "sui": "\u867d\u968b\u968f\u7ee5\u9ad3\u788e\u5c81\u7a57\u9042\u96a7\u795f\u84d1\u51ab\u8c07\u6fc9\u9083\u71e7\u772d\u7762", "sun": "\u5b59\u635f\u7b0b\u836a\u72f2\u98e7\u69ab\u8de3\u96bc", "suo": "\u68ad\u5506\u7f29\u7410\u7d22\u9501\u6240\u5522\u55e6\u5a11\u686b\u7743\u7fa7", "ta": "\u584c\u4ed6\u5b83\u5979\u5854\u736d\u631e\u8e4b\u8e0f\u95fc\u6ebb\u9062\u69bb\u6c93", "tai": "\u80ce\u82d4\u62ac\u53f0\u6cf0\u915e\u592a\u6001\u6c70\u90b0\u85b9\u80bd\u70b1\u949b\u8dc6\u9c90", "tan": "\u574d\u644a\u8d2a\u762b\u6ee9\u575b\u6a80\u75f0\u6f6d\u8c2d\u8c08\u5766\u6bef\u8892\u78b3\u63a2\u53f9\u70ad\u90ef\u8548\u6619\u94bd\u952c\u8983", "tang": "\u6c64\u5858\u642a\u5802\u68e0\u819b\u5510\u7cd6\u50a5\u9967\u6e8f\u746d\u94f4\u9557\u8025\u8797\u87b3\u7fb0\u91a3", "thang": "\u5018\u8eba\u6dcc", "theng": "\u8d9f\u70eb", "tao": "\u638f\u6d9b\u6ed4\u7ee6\u8404\u6843\u9003\u6dd8\u9676\u8ba8\u5957\u6311\u9f17\u5555\u97ec\u9955", "te": "\u7279", "teng": "\u85e4\u817e\u75bc\u8a8a\u6ed5", "ti": "\u68af\u5254\u8e22\u9511\u63d0\u9898\u8e44\u557c\u4f53\u66ff\u568f\u60d5\u6d95\u5243\u5c49\u8351\u608c\u9016\u7ee8\u7f07\u9e48\u88fc\u918d", "tian": "\u5929\u6dfb\u586b\u7530\u751c\u606c\u8214\u8146\u63ad\u5fdd\u9617\u6b84\u754b\u94bf\u86ba", "tiao": "\u6761\u8fe2\u773a\u8df3\u4f7b\u7967\u94eb\u7a95\u9f86\u9ca6", "tie": "\u8d34\u94c1\u5e16\u841c\u992e", "ting": "\u5385\u542c\u70c3\u6c40\u5ef7\u505c\u4ead\u5ead\u633a\u8247\u839b\u8476\u5a77\u6883\u8713\u9706", "tong": "\u901a\u6850\u916e\u77b3\u540c\u94dc\u5f64\u7ae5\u6876\u6345\u7b52\u7edf\u75db\u4f5f\u50ee\u4edd\u833c\u55f5\u6078\u6f7c\u783c", "tou": "\u5077\u6295\u5934\u900f\u4ea0", "tu": "\u51f8\u79c3\u7a81\u56fe\u5f92\u9014\u6d82\u5c60\u571f\u5410\u5154\u580d\u837c\u83df\u948d\u9174", "tuan": "\u6e4d\u56e2\u7583", "tui": "\u63a8\u9893\u817f\u8715\u892a\u9000\u5fd2\u717a", "tun": "\u541e\u5c6f\u81c0\u9968\u66be\u8c5a\u7a80", "tuo": "\u62d6\u6258\u8131\u9e35\u9640\u9a6e\u9a7c\u692d\u59a5\u62d3\u553e\u4e47\u4f57\u5768\u5eb9\u6cb1\u67dd\u7823\u7ba8\u8204\u8dce\u9f0d", "wa": "\u6316\u54c7\u86d9\u6d3c\u5a03\u74e6\u889c\u4f64\u5a32\u817d", "wai": "\u6b6a\u5916", "wan": "\u8c4c\u5f2f\u6e7e\u73a9\u987d\u4e38\u70f7\u5b8c\u7897\u633d\u665a\u7696\u60cb\u5b9b\u5a49\u4e07\u8155\u525c\u8284\u82cb\u83c0\u7ea8\u7efe\u742c\u8118\u7579\u873f\u7ba2", "wang": "\u6c6a\u738b\u4ea1\u6789\u7f51\u5f80\u65fa\u671b\u5fd8\u5984\u7f54\u5c22\u60d8\u8f8b\u9b4d", "wei": "\u5a01\u5dcd\u5fae\u5371\u97e6\u8fdd\u6845\u56f4\u552f\u60df\u4e3a\u6f4d\u7ef4\u82c7\u840e\u59d4\u4f1f\u4f2a\u5c3e\u7eac\u672a\u851a\u5473\u754f\u80c3\u5582\u9b4f\u4f4d\u6e2d\u8c13\u5c09\u6170\u536b\u502d\u504e\u8bff\u9688\u8473\u8587\u5e0f\u5e37\u5d34\u5d6c\u7325\u732c\u95f1\u6ca9\u6d27\u6da0\u9036\u5a13\u73ae\u97ea\u8ece\u709c\u7168\u71a8\u75ff\u8249\u9c94", "wen": "\u761f\u6e29\u868a\u6587\u95fb\u7eb9\u543b\u7a33\u7d0a\u95ee\u520e\u6120\u960c\u6c76\u74ba\u97eb\u6b81\u96ef", "weng": "\u55e1\u7fc1\u74ee\u84ca\u8579", "wo": "\u631d\u8717\u6da1\u7a9d\u6211\u65a1\u5367\u63e1\u6c83\u83b4\u5e44\u6e25\u674c\u809f\u9f8c", "wu": "\u5deb\u545c\u94a8\u4e4c\u6c61\u8bec\u5c4b\u65e0\u829c\u68a7\u543e\u5434\u6bcb\u6b66\u4e94\u6342\u5348\u821e\u4f0d\u4fae\u575e\u620a\u96fe\u6664\u7269\u52ff\u52a1\u609f\u8bef\u5140\u4ef5\u9622\u90ac\u572c\u82b4\u5e91\u6003\u5fe4\u6d6f\u5be4\u8fd5\u59a9\u9a9b\u727e\u7110\u9e49\u9e5c\u8708\u92c8\u9f2f", "xi": "\u6614\u7199\u6790\u897f\u7852\u77fd\u6670\u563b\u5438\u9521\u727a\u7a00\u606f\u5e0c\u6089\u819d\u5915\u60dc\u7184\u70ef\u6eaa\u6c50\u7280\u6a84\u88ad\u5e2d\u4e60\u5ab3\u559c\u94e3\u6d17\u7cfb\u9699\u620f\u7ec6\u50d6\u516e\u96b0\u90d7\u831c\u8478\u84f0\u595a\u550f\u5f99\u9969\u960b\u6d60\u6dc5\u5c63\u5b09\u73ba\u6a28\u66e6\u89cb\u6b37\u71b9\u798a\u79a7\u94b8\u7699\u7a78\u8725\u87cb\u823e\u7fb2\u7c9e\u7fd5\u91af\u9f37", "xia": "\u778e\u867e\u5323\u971e\u8f96\u6687\u5ce1\u4fa0\u72ed\u4e0b\u53a6\u590f\u5413\u6380\u846d\u55c4\u72ce\u9050\u7455\u7856\u7615\u7f45\u9ee0", "xian": "\u9528\u5148\u4ed9\u9c9c\u7ea4\u54b8\u8d24\u8854\u8237\u95f2\u6d8e\u5f26\u5acc\u663e\u9669\u73b0\u732e\u53bf\u817a\u9985\u7fa1\u5baa\u9677\u9650\u7ebf\u51bc\u85d3\u5c98\u7303\u66b9\u5a34\u6c19\u7946\u9e47\u75eb\u86ac\u7b45\u7c7c\u9170\u8df9", "xiang": "\u76f8\u53a2\u9576\u9999\u7bb1\u8944\u6e58\u4e61\u7fd4\u7965\u8be6\u60f3\u54cd\u4eab\u9879\u5df7\u6a61\u50cf\u5411\u8c61\u8297\u8459\u9977\u5ea0\u9aa7\u7f03\u87d3\u9c9e\u98e8", "xiao": "\u8427\u785d\u9704\u524a\u54ee\u56a3\u9500\u6d88\u5bb5\u6dc6\u6653\u5c0f\u5b5d\u6821\u8096\u5578\u7b11\u6548\u54d3\u54bb\u5d24\u6f47\u900d\u9a81\u7ee1\u67ad\u67b5\u7b71\u7bab\u9b48", "xie": "\u6954\u4e9b\u6b47\u874e\u978b\u534f\u631f\u643a\u90aa\u659c\u80c1\u8c10\u5199\u68b0\u5378\u87f9\u61c8\u6cc4\u6cfb\u8c22\u5c51\u5055\u4eb5\u52f0\u71ee\u85a4\u64b7\u5ee8\u7023\u9082\u7ec1\u7f2c\u69ad\u698d\u6b59\u8e9e", "xin": "\u85aa\u82af\u950c\u6b23\u8f9b\u65b0\u5ffb\u5fc3\u4fe1\u8845\u56df\u99a8\u8398\u6b46\u94fd\u946b", "xing": "\u661f\u8165\u7329\u60fa\u5174\u5211\u578b\u5f62\u90a2\u884c\u9192\u5e78\u674f\u6027\u59d3\u9649\u8347\u8365\u64e4\u60bb\u784e", "xiong": "\u5144\u51f6\u80f8\u5308\u6c79\u96c4\u718a\u828e", "xiu": "\u4f11\u4fee\u7f9e\u673d\u55c5\u9508\u79c0\u8896\u7ee3\u83a0\u5cab\u9990\u5ea5\u9e3a\u8c85\u9af9", "xu": "\u589f\u620c\u9700\u865a\u5618\u987b\u5f90\u8bb8\u84c4\u9157\u53d9\u65ed\u5e8f\u755c\u6064\u7d6e\u5a7f\u7eea\u7eed\u8bb4\u8be9\u5729\u84ff\u6035\u6d2b\u6e86\u987c\u6829\u7166\u7809\u76f1\u80e5\u7cc8\u9191", "xuan": "\u8f69\u55a7\u5ba3\u60ac\u65cb\u7384\u9009\u7663\u7729\u7eda\u5107\u8c16\u8431\u63ce\u9994\u6ceb\u6d35\u6e32\u6f29\u7487\u6966\u6684\u70ab\u714a\u78b9\u94c9\u955f\u75c3", "xue": "\u9774\u859b\u5b66\u7a74\u96ea\u8840\u5671\u6cf6\u9cd5", "xun": "\u52cb\u718f\u5faa\u65ec\u8be2\u5bfb\u9a6f\u5de1\u6b89\u6c5b\u8bad\u8baf\u900a\u8fc5\u5dfd\u57d9\u8340\u85b0\u5ccb\u5f87\u6d54\u66db\u7aa8\u91ba\u9c9f", "ya": "\u538b\u62bc\u9e26\u9e2d\u5440\u4e2b\u82bd\u7259\u869c\u5d16\u8859\u6daf\u96c5\u54d1\u4e9a\u8bb6\u4f22\u63e0\u5416\u5c88\u8fd3\u5a05\u740a\u6860\u6c29\u7811\u775a\u75d6", "yan": "\u7109\u54bd\u9609\u70df\u6df9\u76d0\u4e25\u7814\u8712\u5ca9\u5ef6\u8a00\u989c\u960e\u708e\u6cbf\u5944\u63a9\u773c\u884d\u6f14\u8273\u5830\u71d5\u538c\u781a\u96c1\u5501\u5f66\u7130\u5bb4\u8c1a\u9a8c\u53a3\u9765\u8d5d\u4fe8\u5043\u5156\u8ba0\u8c33\u90fe\u9122\u82ab\u83f8\u5d26\u6079\u95eb\u960f\u6d07\u6e6e\u6edf\u598d\u5ae3\u7430\u664f\u80ed\u814c\u7131\u7f68\u7b75\u917d\u9b47\u990d\u9f39", "yang": "\u6b83\u592e\u9e2f\u79e7\u6768\u626c\u4f6f\u75a1\u7f8a\u6d0b\u9633\u6c27\u4ef0\u75d2\u517b\u6837\u6f3e\u5f89\u600f\u6cf1\u7080\u70ca\u6059\u86d8\u9785", "yao": "\u9080\u8170\u5996\u7476\u6447\u5c27\u9065\u7a91\u8c23\u59da\u54ac\u8200\u836f\u8981\u8000\u592d\u723b\u5406\u5d3e\u5fad\u7039\u5e7a\u73e7\u6773\u66dc\u80b4\u9e5e\u7a88\u7e47\u9cd0", "ye": "\u6930\u564e\u8036\u7237\u91ce\u51b6\u4e5f\u9875\u6396\u4e1a\u53f6\u66f3\u814b\u591c\u6db2\u8c12\u90ba\u63f6\u9980\u6654\u70e8\u94d8", "yi": "\u4e00\u58f9\u533b\u63d6\u94f1\u4f9d\u4f0a\u8863\u9890\u5937\u9057\u79fb\u4eea\u80f0\u7591\u6c82\u5b9c\u59e8\u5f5d\u6905\u8681\u501a\u5df2\u4e59\u77e3\u4ee5\u827a\u6291\u6613\u9091\u5c79\u4ebf\u5f79\u81c6\u9038\u8084\u75ab\u4ea6\u88d4\u610f\u6bc5\u5fc6\u4e49\u76ca\u6ea2\u8be3\u8bae\u8c0a\u8bd1\u5f02\u7ffc\u7fcc\u7ece\u5208\u5293\u4f7e\u8bd2\u572a\u572f\u57f8\u61ff\u82e1\u858f\u5f08\u5955\u6339\u5f0b\u5453\u54a6\u54bf\u566b\u5cc4\u5db7\u7317\u9974\u603f\u6021\u6092\u6f2a\u8fe4\u9a7f\u7f22\u6baa\u8d3b\u65d6\u71a0\u9487\u9552\u9571\u75cd\u7617\u7654\u7fca\u8864\u8734\u8223\u7fbf\u7ff3\u914f\u9edf", "yin": "\u8335\u836b\u56e0\u6bb7\u97f3\u9634\u59fb\u541f\u94f6\u6deb\u5bc5\u996e\u5c39\u5f15\u9690\u5370\u80e4\u911e\u5819\u831a\u5591\u72fa\u5924\u6c24\u94df\u763e\u8693\u972a\u9f88", "ying": "\u82f1\u6a31\u5a74\u9e70\u5e94\u7f28\u83b9\u8424\u8425\u8367\u8747\u8fce\u8d62\u76c8\u5f71\u9896\u786c\u6620\u5b34\u90e2\u8314\u83ba\u8426\u6484\u5624\u81ba\u6ee2\u6f46\u701b\u745b\u748e\u6979\u9e66\u763f\u988d\u7f42", "yo": "\u54df\u5537", "yong": "\u62e5\u4f63\u81c3\u75c8\u5eb8\u96cd\u8e0a\u86f9\u548f\u6cf3\u6d8c\u6c38\u607f\u52c7\u7528\u4fd1\u58c5\u5889\u6175\u9095\u955b\u752c\u9cd9\u9954", "you": "\u5e7d\u4f18\u60a0\u5fe7\u5c24\u7531\u90ae\u94c0\u72b9\u6cb9\u6e38\u9149\u6709\u53cb\u53f3\u4f51\u91c9\u8bf1\u53c8\u5e7c\u5363\u6538\u4f91\u83b8\u5466\u56ff\u5ba5\u67da\u7337\u7256\u94d5\u75a3\u8763\u9c7f\u9edd\u9f2c", "yu": "\u8fc2\u6de4\u4e8e\u76c2\u6986\u865e\u611a\u8206\u4f59\u4fde\u903e\u9c7c\u6109\u6e1d\u6e14\u9685\u4e88\u5a31\u96e8\u4e0e\u5c7f\u79b9\u5b87\u8bed\u7fbd\u7389\u57df\u828b\u90c1\u5401\u9047\u55bb\u5cea\u5fa1\u6108\u6b32\u72f1\u80b2\u8a89\u6d74\u5bd3\u88d5\u9884\u8c6b\u9a6d\u79ba\u6bd3\u4f1b\u4fe3\u8c00\u8c15\u8438\u84e3\u63c4\u5581\u5704\u5709\u5d5b\u72f3\u996b\u5ebe\u9608\u59aa\u59a4\u7ea1\u745c\u6631\u89ce\u8174\u6b24\u65bc\u715c\u71e0\u807f\u94b0\u9e46\u7610\u7600\u7ab3\u8753\u7afd\u8201\u96e9\u9f89", "yuan": "\u9e33\u6e0a\u51a4\u5143\u57a3\u8881\u539f\u63f4\u8f95\u56ed\u5458\u5706\u733f\u6e90\u7f18\u8fdc\u82d1\u613f\u6028\u9662\u586c\u6c85\u5a9b\u7457\u6a7c\u7230\u7722\u9e22\u8788\u9f0b", "yue": "\u66f0\u7ea6\u8d8a\u8dc3\u94a5\u5cb3\u7ca4\u6708\u60a6\u9605\u9fa0\u6a3e\u5216\u94ba", "yun": "\u8018\u4e91\u90e7\u5300\u9668\u5141\u8fd0\u8574\u915d\u6655\u97f5\u5b55\u90d3\u82b8\u72c1\u607d\u7ead\u6b92\u6600\u6c32", "za": "\u531d\u7838\u6742\u62f6\u5482", "zai": "\u683d\u54c9\u707e\u5bb0\u8f7d\u518d\u5728\u54b1\u5d3d\u753e", "zan": "\u6512\u6682\u8d5e\u74d2\u661d\u7c2a\u7ccc\u8db1\u933e", "zang": "\u8d43\u810f\u846c\u5958\u6215\u81e7", "zao": "\u906d\u7cdf\u51ff\u85fb\u67a3\u65e9\u6fa1\u86a4\u8e81\u566a\u9020\u7682\u7076\u71e5\u5523\u7f2b", "ze": "\u8d23\u62e9\u5219\u6cfd\u4ec4\u8d5c\u5567\u8fee\u6603\u7b2e\u7ba6\u8234", "zei": "\u8d3c", "zen": "\u600e\u8c2e", "zeng": "\u589e\u618e\u66fe\u8d60\u7f2f\u7511\u7f7e\u9503", "zha": "\u624e\u55b3\u6e23\u672d\u8f67\u94e1\u95f8\u7728\u6805\u69a8\u548b\u4e4d\u70b8\u8bc8\u63f8\u5412\u54a4\u54f3\u600d\u781f\u75c4\u86b1\u9f44", "zhai": "\u6458\u658b\u5b85\u7a84\u503a\u5be8\u7826", "zhan": "\u77bb\u6be1\u8a79\u7c98\u6cbe\u76cf\u65a9\u8f97\u5d2d\u5c55\u8638\u6808\u5360\u6218\u7ad9\u6e5b\u7efd\u8c35\u640c\u65c3", "zhang": "\u6a1f\u7ae0\u5f70\u6f33\u5f20\u638c\u6da8\u6756\u4e08\u5e10\u8d26\u4ed7\u80c0\u7634\u969c\u4ec9\u9123\u5e5b\u5d82\u7350\u5adc\u748b\u87d1", "zhao": "\u62db\u662d\u627e\u6cbc\u8d75\u7167\u7f69\u5146\u8087\u53ec\u722a\u8bcf\u68f9\u948a\u7b0a", "zhe": "\u906e\u6298\u54f2\u86f0\u8f99\u8005\u9517\u8517\u8fd9\u6d59\u8c2a\u966c\u67d8\u8f84\u78d4\u9e67\u891a\u8707\u8d6d", "zhen": "\u73cd\u659f\u771f\u7504\u7827\u81fb\u8d1e\u9488\u4fa6\u6795\u75b9\u8bca\u9707\u632f\u9547\u9635\u7f1c\u6862\u699b\u8f78\u8d48\u80d7\u6715\u796f\u755b\u9e29", "zheng": "\u84b8\u6323\u7741\u5f81\u72f0\u4e89\u6014\u6574\u62ef\u6b63\u653f\u5e27\u75c7\u90d1\u8bc1\u8be4\u5ce5\u94b2\u94ee\u7b5d", "zhi": "\u829d\u679d\u652f\u5431\u8718\u77e5\u80a2\u8102\u6c41\u4e4b\u7ec7\u804c\u76f4\u690d\u6b96\u6267\u503c\u4f84\u5740\u6307\u6b62\u8dbe\u53ea\u65e8\u7eb8\u5fd7\u631a\u63b7\u81f3\u81f4\u7f6e\u5e1c\u5cd9\u5236\u667a\u79e9\u7a1a\u8d28\u7099\u75d4\u6ede\u6cbb\u7a92\u536e\u965f\u90c5\u57f4\u82b7\u646d\u5e19\u5fee\u5f58\u54ab\u9a98\u6809\u67b3\u6800\u684e\u8f75\u8f7e\u6534\u8d3d\u81a3\u7949\u7957\u9ef9\u96c9\u9e37\u75e3\u86ed\u7d77\u916f\u8dd6\u8e2c\u8e2f\u8c78\u89ef", "zhong": "\u4e2d\u76c5\u5fe0\u949f\u8877\u7ec8\u79cd\u80bf\u91cd\u4ef2\u4f17\u51a2\u953a\u87bd\u8202\u822f\u8e35", "zhou": "\u821f\u5468\u5dde\u6d32\u8bcc\u7ca5\u8f74\u8098\u5e1a\u5492\u76b1\u5b99\u663c\u9aa4\u5544\u7740\u501c\u8bf9\u836e\u9b3b\u7ea3\u80c4\u78a1\u7c40\u8233\u914e\u9cb7", "zhu": "\u73e0\u682a\u86db\u6731\u732a\u8bf8\u8bdb\u9010\u7af9\u70db\u716e\u62c4\u77a9\u5631\u4e3b\u8457\u67f1\u52a9\u86c0\u8d2e\u94f8\u7b51\u4f4f\u6ce8\u795d\u9a7b\u4f2b\u4f8f\u90be\u82ce\u8331\u6d19\u6e1a\u6f74\u9a7a\u677c\u69e0\u6a65\u70b7\u94e2\u75b0\u7603\u86b0\u7afa\u7bb8\u7fe5\u8e85\u9e88", "zhua": "\u6293", "zhuai": "\u62fd", "zhuan": "\u4e13\u7816\u8f6c\u64b0\u8d5a\u7bc6\u629f\u556d\u989b", "zhuang": "\u6869\u5e84\u88c5\u5986\u649e\u58ee\u72b6\u4e2c", "zhui": "\u690e\u9525\u8ffd\u8d58\u5760\u7f00\u8411\u9a93\u7f12", "zhun": "\u8c06\u51c6", "zhuo": "\u6349\u62d9\u5353\u684c\u7422\u8301\u914c\u707c\u6d4a\u502c\u8bfc\u5ef4\u855e\u64e2\u555c\u6d5e\u6dbf\u6753\u712f\u799a\u65ab", "zi": "\u5179\u54a8\u8d44\u59ff\u6ecb\u6dc4\u5b5c\u7d2b\u4ed4\u7c7d\u6ed3\u5b50\u81ea\u6e0d\u5b57\u8c18\u5d6b\u59ca\u5b73\u7f01\u6893\u8f8e\u8d40\u6063\u7726\u9531\u79ed\u8014\u7b2b\u7ca2\u89dc\u8a3e\u9cbb\u9aed", "zong": "\u9b03\u68d5\u8e2a\u5b97\u7efc\u603b\u7eb5\u8159\u7cbd", "zou": "\u90b9\u8d70\u594f\u63cd\u9139\u9cb0", "zu": "\u79df\u8db3\u5352\u65cf\u7956\u8bc5\u963b\u7ec4\u4fce\u83f9\u5550\u5f82\u9a75\u8e74", "zuan": "\u94bb\u7e82\u6525\u7f35", "zui": "\u5634\u9189\u6700\u7f6a", "zun": "\u5c0a\u9075\u6499\u6a3d\u9cdf", "zuo": "\u6628\u5de6\u4f50\u67de\u505a\u4f5c\u5750\u5ea7\u961d\u963c\u80d9\u795a\u9162", "cou": "\u85ae\u6971\u8f8f\u8160", "nang": "\u652e\u54dd\u56d4\u9995\u66e9", "o": "\u5594", "dia": "\u55f2", "chuai": "\u562c\u81aa\u8e39", "cen": "\u5c91\u6d94", "diu": "\u94e5", "nou": "\u8028", "fou": "\u7f36", "bia": "\u9adf" };
            this.polyphone = { "19969": "DZ", "19975": "WM", "19988": "QJ", "20048": "YL", "20056": "SC", "20060": "NM", "20094": "QG", "20127": "QJ", "20167": "QC", "20193": "YG", "20250": "KH", "20256": "ZC", "20282": "SC", "20285": "QJG", "20291": "TD", "20314": "YD", "20340": "NE", "20375": "TD", "20389": "YJ", "20391": "CZ", "20415": "PB", "20446": "YS", "20447": "SQ", "20504": "TC", "20608": "KG", "20854": "QJ", "20857": "ZC", "20911": "PF", "20504": "TC", "20608": "KG", "20854": "QJ", "20857": "ZC", "20911": "PF", "20985": "AW", "21032": "PB", "21048": "XQ", "21049": "SC", "21089": "YS", "21119": "JC", "21242": "SB", "21273": "SC", "21305": "YP", "21306": "QO", "21330": "ZC", "21333": "SDC", "21345": "QK", "21378": "CA", "21397": "SC", "21414": "XS", "21442": "SC", "21477": "JG", "21480": "TD", "21484": "ZS", "21494": "YX", "21505": "YX", "21512": "HG", "21523": "XH", "21537": "PB", "21542": "PF", "21549": "KH", "21571": "E", "21574": "DA", "21588": "TD", "21589": "O", "21618": "ZC", "21621": "KHA", "21632": "ZJ", "21654": "KG", "21679": "LKG", "21683": "KH", "21710": "A", "21719": "YH", "21734": "WOE", "21769": "A", "21780": "WN", "21804": "XH", "21834": "A", "21899": "ZD", "21903": "RN", "21908": "WO", "21939": "ZC", "21956": "SA", "21964": "YA", "21970": "TD", "22003": "A", "22031": "JG", "22040": "XS", "22060": "ZC", "22066": "ZC", "22079": "MH", "22129": "XJ", "22179": "XA", "22237": "NJ", "22244": "TD", "22280": "JQ", "22300": "YH", "22313": "XW", "22331": "YQ", "22343": "YJ", "22351": "PH", "22395": "DC", "22412": "TD", "22484": "PB", "22500": "PB", "22534": "ZD", "22549": "DH", "22561": "PB", "22612": "TD", "22771": "KQ", "22831": "HB", "22841": "JG", "22855": "QJ", "22865": "XQ", "23013": "ML", "23081": "WM", "23487": "SX", "23558": "QJ", "23561": "YW", "23586": "YW", "23614": "YW", "23615": "SN", "23631": "PB", "23646": "ZS", "23663": "ZT", "23673": "YG", "23762": "TD", "23769": "ZS", "23780": "QJ", "23884": "QK", "24055": "XH", "24113": "DC", "24162": "ZC", "24191": "GA", "24273": "QJ", "24324": "NL", "24377": "TD", "24378": "QJ", "24439": "PF", "24554": "ZS", "24683": "TD", "24694": "WE", "24733": "LK", "24925": "TN", "25094": "ZG", "25100": "XQ", "25103": "XH", "25153": "PB", "25170": "PB", "25179": "KG", "25203": "PB", "25240": "ZS", "25282": "FB", "25303": "NA", "25324": "KG", "25341": "ZY", "25373": "WZ", "25375": "XJ", "25384": "A", "25457": "A", "25528": "SD", "25530": "SC", "25552": "TD", "25774": "ZC", "25874": "ZC", "26044": "YW", "26080": "WM", "26292": "PB", "26333": "PB", "26355": "ZY", "26366": "CZ", "26397": "ZC", "26399": "QJ", "26415": "ZS", "26451": "SB", "26526": "ZC", "26552": "JG", "26561": "TD", "26588": "JG", "26597": "CZ", "26629": "ZS", "26638": "YL", "26646": "XQ", "26653": "KG", "26657": "XJ", "26727": "HG", "26894": "ZC", "26937": "ZS", "26946": "ZC", "26999": "KJ", "27099": "KJ", "27449": "YQ", "27481": "XS", "27542": "ZS", "27663": "ZS", "27748": "TS", "27784": "SC", "27788": "ZD", "27795": "TD", "27812": "O", "27850": "PB", "27852": "MB", "27895": "SL", "27898": "PL", "27973": "QJ", "27981": "KH", "27986": "HX", "27994": "XJ", "28044": "YC", "28065": "WG", "28177": "SM", "28267": "QJ", "28291": "KH", "28337": "ZQ", "28463": "TL", "28548": "DC", "28601": "TD", "28689": "PB", "28805": "JG", "28820": "QG", "28846": "PB", "28952": "TD", "28975": "ZC", "29100": "A", "29325": "QJ", "29575": "SL", "29602": "FB", "30010": "TD", "30044": "CX", "30058": "PF", "30091": "YSP", "30111": "YN", "30229": "XJ", "30427": "SC", "30465": "SX", "30631": "YQ", "30655": "QJ", "30684": "QJG", "30707": "SD", "30729": "XH", "30796": "LG", "30917": "PB", "31074": "NM", "31085": "JZ", "31109": "SC", "31181": "ZC", "31192": "MLB", "31293": "JQ", "31400": "YX", "31584": "YJ", "31896": "ZN", "31909": "ZY", "31995": "XJ", "32321": "PF", "32327": "ZY", "32418": "HG", "32420": "XQ", "32421": "HG", "32438": "LG", "32473": "GJ", "32488": "TD", "32521": "QJ", "32527": "PB", "32562": "ZSQ", "32564": "JZ", "32735": "ZD", "32793": "PB", "33071": "PF", "33098": "XL", "33100": "YA", "33152": "PB", "33261": "CX", "33324": "BP", "33333": "TD", "33406": "YA", "33426": "WM", "33432": "PB", "33445": "JG", "33486": "ZN", "33493": "TS", "33507": "QJ", "33540": "QJ", "33544": "ZC", "33564": "XQ", "33617": "YT", "33632": "QJ", "33636": "XH", "33637": "YX", "33694": "WG", "33705": "PF", "33728": "YW", "33882": "SR", "34067": "WM", "34074": "YW", "34121": "QJ", "34255": "ZC", "34259": "XL", "34425": "JH", "34430": "XH", "34485": "KH", "34503": "YS", "34532": "HG", "34552": "XS", "34558": "YE", "34593": "ZL", "34660": "YQ", "34892": "XH", "34928": "SC", "34999": "QJ", "35048": "PB", "35059": "SC", "35098": "ZC", "35203": "TQ", "35265": "JX", "35299": "JX", "35782": "SZ", "35828": "YS", "35830": "E", "35843": "TD", "35895": "YG", "35977": "MH", "36158": "JG", "36228": "QJ", "36426": "XQ", "36466": "DC", "36710": "JC", "36711": "ZYG", "36767": "PB", "36866": "SK", "36951": "YW", "37034": "YX", "37063": "XH", "37218": "ZC", "37325": "ZC", "38063": "PB", "38079": "TD", "38085": "QY", "38107": "DC", "38116": "TD", "38123": "YD", "38224": "HG", "38241": "XTC", "38271": "ZC", "38415": "YE", "38426": "KH", "38461": "YD", "38463": "AE", "38466": "PB", "38477": "XJ", "38518": "YT", "38551": "WK", "38585": "ZC", "38704": "XS", "38739": "LJ", "38761": "GJ", "38808": "SQ", "39048": "JG", "39049": "XJ", "39052": "HG", "39076": "CZ", "39271": "XT", "39534": "TD", "39552": "TD", "39584": "PB", "39647": "SB", "39730": "LG", "39748": "TPB", "40109": "ZQ", "40479": "ND", "40516": "HG", "40536": "HG", "40583": "QJ", "40765": "YQ", "40784": "QJ", "40840": "YK", "40863": "QJG" };
        },
        // 提取拼音, 返回首字母大写形式
        getFullChars: function (str) {
            var result = '', name;
            var reg = new RegExp('[a-zA-Z0-9\- ]');
            for (var i = 0, len = str.length; i < len; i++) {
                var ch = str.substr(i, 1), unicode = ch.charCodeAt(0);
                if (unicode > 40869 || unicode < 19968) {
                    result += ch;
                }
                else {
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
                }
                else {
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
!function (globals) { var _imports = {}; function padLeft(orig, len) { if (orig.length > len) {
    return orig;
} return Array(len - orig.length + 1).join("0") + orig; } _imports.bytesToHex = function (bytes) { return bytes.map(function (x) { return padLeft(x.toString(16), 2); }).join(""); }; var convertString = { bytesToString: function (bytes) { return bytes.map(function (x) { return String.fromCharCode(x); }).join(""); }, stringToBytes: function (str) { return str.split("").map(function (x) { return x.charCodeAt(0); }); } }; convertString.UTF8 = { bytesToString: function (bytes) { return decodeURIComponent(escape(convertString.bytesToString(bytes))); }, stringToBytes: function (str) { return convertString.stringToBytes(unescape(encodeURIComponent(str))); } }; _imports.convertString = convertString; globals.sha256 = sha256; var K = []; !function () { function isPrime(n) { var sqrtN = Math.sqrt(n); for (var factor = 2; factor <= sqrtN; factor++) {
    if (!(n % factor)) {
        return false;
    }
} return true; } function getFractionalBits(n) { return ((n - (n | 0)) * 4294967296) | 0; } var n = 2; var nPrime = 0; while (nPrime < 64) {
    if (isPrime(n)) {
        K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));
        nPrime++;
    }
    n++;
} }(); var bytesToWords = function (bytes) { var words = []; for (var i = 0, b = 0; i < bytes.length; i++, b += 8) {
    words[b >>> 5] |= bytes[i] << (24 - b % 32);
} return words; }; var wordsToBytes = function (words) { var bytes = []; for (var b = 0; b < words.length * 32; b += 8) {
    bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 255);
} return bytes; }; var W = []; var processBlock = function (H, M, offset) { var a = H[0], b = H[1], c = H[2], d = H[3]; var e = H[4], f = H[5], g = H[6], h = H[7]; for (var i = 0; i < 64; i++) {
    if (i < 16) {
        W[i] = M[offset + i] | 0;
    }
    else {
        var gamma0x = W[i - 15];
        var gamma0 = ((gamma0x << 25) | (gamma0x >>> 7)) ^ ((gamma0x << 14) | (gamma0x >>> 18)) ^ (gamma0x >>> 3);
        var gamma1x = W[i - 2];
        var gamma1 = ((gamma1x << 15) | (gamma1x >>> 17)) ^ ((gamma1x << 13) | (gamma1x >>> 19)) ^ (gamma1x >>> 10);
        W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
    }
    var ch = (e & f) ^ (~e & g);
    var maj = (a & b) ^ (a & c) ^ (b & c);
    var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
    var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7) | (e >>> 25));
    var t1 = h + sigma1 + ch + K[i] + W[i];
    var t2 = sigma0 + maj;
    h = g;
    g = f;
    f = e;
    e = (d + t1) | 0;
    d = c;
    c = b;
    b = a;
    a = (t1 + t2) | 0;
} H[0] = (H[0] + a) | 0; H[1] = (H[1] + b) | 0; H[2] = (H[2] + c) | 0; H[3] = (H[3] + d) | 0; H[4] = (H[4] + e) | 0; H[5] = (H[5] + f) | 0; H[6] = (H[6] + g) | 0; H[7] = (H[7] + h) | 0; }; function sha256(message, options) { if (message.constructor === String) {
    message = _imports.convertString.UTF8.stringToBytes(message);
} var H = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]; var m = bytesToWords(message); var l = message.length * 8; m[l >> 5] |= 128 << (24 - l % 32); m[((l + 64 >> 9) << 4) + 15] = l; for (var i = 0; i < m.length; i += 16) {
    processBlock(H, m, i);
} var digestbytes = wordsToBytes(H); return options && options.asBytes ? digestbytes : options && options.asString ? _imports.convertString.bytesToString(digestbytes) : _imports.bytesToHex(digestbytes); } sha256.x2 = function (message, options) { return sha256(sha256(message, { asBytes: true }), options); }; }(window);
