"use strict";
window['生成Map'] = function (aj) {
    var arr = T.ini({ "name": "地板", cellSize: 80 }, aj); //
    if (!arr) {
        aj.cb && aj.cb();
        return 0;
    }
    var obj = arr[0], pobj = arr[1], a = arr[3];
    var namea = [].concat(a.name); //每个名字需要cd，这个待做。
    for (var _i = 0, namea_1 = namea; _i < namea_1.length; _i++) {
        var iname = namea_1[_i];
        hc[iname] = [];
    } //初始化
    var cl = obj.$children.length;
    for (var i = 0; i < cl; i++) {
        var zobj = obj.$children[i];
        for (var _a = 0, namea_2 = namea; _a < namea_2.length; _a++) {
            var iname = namea_2[_a];
            if (T.inname(zobj, iname.split('-'))) {
                var x = Math.floor((zobj.x - zobj.anchorOffsetX) / a.cellSize), y = Math.floor((zobj.y - zobj.anchorOffsetY) / a.cellSize);
                var wn = Math.floor(zobj.width / a.cellSize), hn = Math.floor(zobj.height / a.cellSize);
                for (var ww = 0; ww < wn; ww++) {
                    for (var hh = 0; hh < hn; hh++) {
                        hc[iname][x + ww] = hc[iname][x + ww] || [];
                        if (hc[iname][x + ww][y + hh]) {
                            hc[iname][x + ww][y + hh].push(zobj);
                        }
                        else {
                            hc[iname][x + ww][y + hh] = [zobj];
                        }
                    }
                }
                // break;
            }
        }
    }
};
window['func'] = function (I, aj) {
    T.tlog(I, 'steste0', aj);
};
window['找位置'] = function (aj) {
    var arr = T.ini({ obj: "元件项", "include": "", mapobj: "", maxi: 0, maxr: 50, send: 0, map: 1, "exclude": "", "x0": -1, "y0": -1, r1: 0, r2: 0.1, wn: 1, hn: 1 }, aj, 1); //obj:"元件项", maxi最大列数，>0: 指定范围内[x0,y0]到[x0+a.maxi,y0+a.maxr]搜索。maxr 最大行数.  x0,y0搜寻中心点位置，对于占多个格子的元件，比如床则是：wn=2 hn=2
    if (!arr) {
        return 0;
    }
    var obj = arr[0], pobj = arr[1], a = arr[3];
    a.cellSize = a.cellSize || obj.width;
    var namea = [];
    if (a.include)
        namea = namea.concat(a.include);
    if (a.exclude)
        namea = namea.concat(a.exclude);
    if (a.map)
        window.actt(a.mapobj || pobj, { "生成Map": { "name": namea } }); //window["生成Map"]({ obj: a.mapobj||pobj, "name": namea});   
    var ret = [], needfindwn = 0, needfindhn = 0;
    var wn = a.wn, hn = a.hn;
    if (a.hn instanceof Array) {
        needfindhn = a.hn[0] - 1;
        hn = a.hn[0];
    }
    else if (a.wn instanceof Array) {
        needfindwn = a.wn[0] - 1;
        wn = a.wn[0];
    }
    var dfun = function (xx, yy) {
        if (a.send) {
            var clasidc = sj.clas[obj.name];
            ret.push([xx, yy]);
            csend(["", { uri: { "x1": (xx + 0.5 * wn) * a.cellSize, wn: wn, hn: hn, "y1": (yy + 0.5 * hn) * a.cellSize } }, obj.name]);
            if (a.send == 1)
                return 1;
        }
        if (a.include) {
            if (hc[a.include][xx])
                ret = ret.concat(hc[a.include][xx][yy]);
        }
        else {
            ret.push([xx, yy]); //找附近的空位置
        }
        return 0;
    };
    if (a.maxi == 0 && (a.x0 != -1 || a.y0 != -1) && a.r1 == 0 && a.r2 == 0.1) {
        var i = a.x0, z = a.y0;
        if (!a.include || a.include && hc[a.include][i] && hc[a.include][i][z]) {
            if (a.exclude && hc[a.exclude][i] && !hc[a.exclude][i][z] || !a.exclude || !hc[a.exclude]) {
                dfun(i, z);
            }
        }
    }
    else {
        var maxi = 30;
        if (hc[a.include])
            maxi = hc[a.include].length;
        if (!a.include && maxi == 0)
            maxi = 30;
        maxi = a.maxi || maxi; // 
        var ifin = function (i, z) {
            if (!a.include || a.include && hc[a.include][i] && hc[a.include][i][z]) {
                if (a.exclude && hc[a.exclude][i] && !hc[a.exclude][i][z] || !a.exclude || !hc[a.exclude] || hc[a.exclude] && !hc[a.exclude][i]) {
                    return 1;
                }
            }
            return 0;
        };
        var bz = 0, bi = 0;
        if (a.maxi) {
            bz = a.y0;
            bi = a.x0;
        }
        for2: for (var z = bz; z < a.maxr + bz; z++) {
            for (var i = bi; i < maxi + bi; i++) {
                if (ifin(i, z)) {
                    var f = 1;
                    if (a.maxi == 0 && (a.x0 != -1 || a.y0 != -1)) {
                        var r = Math.sqrt((a.x0 - i) * (a.x0 - i) + (a.y0 - z) * (a.y0 - z));
                        if (!(r >= a.r1 && r <= a.r2))
                            f = 0;
                    }
                    else {
                        for3: for (var ww = 0; ww < wn; ww++) {
                            for (var hh = 0; hh < hn; hh++) {
                                if (!ifin(i + ww, z + hh)) {
                                    f = 0;
                                    break for3;
                                }
                                if (i + ww >= maxi + bi) {
                                    f = 0;
                                    break for3;
                                }
                                if (z + hh >= a.maxr + bz) {
                                    f = 0;
                                    break for3;
                                }
                            }
                        }
                    }
                    if (f && dfun(i, z))
                        break for2;
                }
            }
        }
    }
    if (ret.length == 0) {
        if (a.r3) {
            a.r2++;
            if (a.r2 <= a.r3) {
                window.actt(obj, { "找位置": a });
                return;
            }
        }
        if (needfindhn) {
            a.hn = needfindhn;
            console.log('找不到，且需要继续找wn:' + a.wn + ' hn:' + a.hn);
            window.actt(null, { "找位置": a });
            //window['找位置'](a);
            return;
        }
        else if (needfindwn) {
            a.wn = needfindwn;
            console.log('找不到，且需要继续找wn:' + a.wn + ' hn:' + a.hn);
            window.actt(null, { "找位置": a });
            //window['找位置'](a);
            return;
        }
        if (a.err) {
            window.actt(null, { "隐藏": { "tobj": "小窝_遮罩" } });
            window.actt(null, { "弹窗": { "msg": a.err } }); //window['弹窗'](a.err);
        }
    }
    if (aj.cb)
        aj.cb(ret);
    return ret;
};
window['toapp'] = function (e) {
    var a = T.merge({ type: "sendToJS", act: "改文字", arj: { obj: '场景a' } }, e);
    if (a.arj.msg == "{hx_login}") {
        a.arj.id = a.id || T._my()['环信'];
        a.arj.password = a.password || a.id || T._my()['环信'];
        a.arj.msg += a.arj.id + " : " + T._my()._id;
    }
    egret.ExternalInterface.call(a.type, "window.actt('" + a.arj.obj + "',{" + a.act + ":" + JSON.stringify(a.arj) + "})");
};
window['显示图片'] = function (e) {
    var arr = T.ini({ time: 1000, upsert: 0, loop: true, addy: 5, cb: function () { return 0; } }, e, 1);
    if (!arr) {
        a.cb();
        return 0;
    }
    var obj = arr[0], pobj = arr[1], a = arr[3];
    if (a.upsert == 2 || a.upsert && sj.clas[obj.name].style.bgimg == 'http://n.kxtui.com:8080/resource/assets/lgac/cjb/1544580397261.png') {
        if (!a.picid)
            a.picid = (sj.clas[obj.name]["前缀"] || "") + (sj.clas[obj.name].ca || obj.name.split('-')[0]) + "_" + db.getrd(5); //(T.ctrl()["关卡"]||"");
        window.actt(e.obj, { "调用相册": { ow: (a.ow != null ? a.ow : e.obj.width), picid: a.picid, upsert: a.upsert, domain: "http://www.kxtui.com", sj: 1 } });
    }
    else {
        jex('body').append('<div id="cli_dialog_div" style="background:rgba(0,0,0,0.5);width:100%;height:100%;z-index:10;position:relative;overflow:hidden"></div>');
        document.getElementById('cli_dialog_div').style = 'background:rgba(0,0,0,0.5);width:100%;height:100%;z-index:10;position:relative';
        jex('#cli_dialog_div').append('<img src="' + sj.clas[obj.name].style.bgimg + '" style="width:100%;z-index:999;position:absolute">');
        jex('#cli_dialog_div').append('<img src="https://n.gac.kim/resource/assets/gac/3.png" style="margin:0 auto;right:0;bottom:0;left:0;width:60;heigth:60;z-index:999;position:absolute" onclick="jex(\'#cli_dialog_div\').remove();jex(\'#cli_dialog_div\').remove()">');
    }
};
;
window['点击间隔'] = function (e) {
    var arr = T.ini({ time: 1000, count: 50, color: 0x000000, cb: function () { return 0; } }, e, 1);
    var obj = arr[0], pobj = arr[1], a = arr[3];
    obj.touchEnabled = false;
    obj.touchChildren = false;
    egret.setTimeout(function () {
        this.touchEnabled = true;
        obj.touchChildren = true;
    }, obj, a.time);
    if (a.dj) {
        var img = obj.imgurl;
        if (obj instanceof egret.DisplayObjectContainer) {
            img = obj.getChildByName(obj.name + "ziImg").imgurl;
        }
        var mask = new egret.Bitmap();
        mask.width = obj.width;
        mask.height = obj.height;
        Jui.getSingle().setImg(mask, img);
        pobj.addChild(mask);
        mask.x = obj.x - obj.anchorOffsetX;
        mask.y = obj.y - obj.anchorOffsetY;
        var shape = new egret.Shape();
        shape.width = obj.width;
        shape.heigh = obj.height;
        shape.x = obj.x - obj.anchorOffsetX + obj.width / 2;
        shape.y = obj.y - obj.anchorOffsetY + obj.height / 2;
        pobj.addChild(shape);
        shape.mask = mask;
        var angle = 360;
        var r = (obj.width > obj.height ? obj.width * 0.5 : obj.height * 0.5);
        var timer = new DateTimer(a.time / a.count, a.count + 1);
        var djjtimer_1 = function () {
            changeGraphics(angle);
            angle -= (360 / a.count);
            if (angle <= 0) {
                angle = 0;
            }
        };
        var endtimer_1 = function () {
            timer.stop();
            this[0].parent.removeChild(this[0]);
            this[1].parent.removeChild(this[1]);
            timer.removeEventListener(egret.TimerEvent.TIMER, djjtimer_1, shape);
            timer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, endtimer_1, [shape, mask]);
        };
        timer.addEventListener(egret.TimerEvent.TIMER, djjtimer_1, shape);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, endtimer_1, [shape, mask]);
        timer.start();
        function changeGraphics(angle) {
            shape.graphics.clear();
            console.log(angle * Math.PI / 180);
            shape.graphics.beginFill(a.color, 0.6);
            shape.graphics.moveTo(0, 0);
            shape.graphics.lineTo(200, 0);
            shape.graphics.drawArc(0, 0, r, 0, angle * Math.PI / 180, i == -1);
            shape.graphics.lineTo(0, 0);
            shape.graphics.endFill();
        }
    }
};
window['克隆对象'] = function (e) {
    var arr = T.ini({ addx: 0, addy: 0, bgimg: '' }, e);
    var obj = arr[0], pobj = arr[1], a = arr[3];
    if (!obj['克隆对象']) {
        var json = sj.clas[obj.name].style;
        json.obj = obj;
        json.pobj = obj;
        json.bgimg = a.bgimg;
        json._id = "fd";
        json.typ = sj.clas[obj.name].typ;
        var zobj = JuiData.getzi([json])[0];
        zobj.name = obj.name + '克隆';
        obj["克隆对象"] = zobj;
        obj.addChild(zobj);
        zobj.touchEnabled = true;
        //if(a['跟随'])window.actt(zobj,{"跟随":{"tarobj":obj,addx:a.addx,addy:a.addy}})
    }
    obj["克隆对象"].x = obj.anchorOffsetX + a.addx;
    obj["克隆对象"].y = obj.anchorOffsetY + a.addy;
    Jui.getSingle().setImg(obj["克隆对象"].$children[0], "http://image.kxtui.com/pg/fi/15109/1510977439026.png");
    var arr2 = T.findids("得分卡");
    var arr3 = T.findids("找不同圈").filter(function (o) { return sj.obj[o].y < 700; });
    if (obj.name == arr3[0])
        for (var i = 0; i < arr2.length; i++) {
            sj.obj[arr2[i]].visible = i < arr3.length ? true : false;
        }
};
window['找不同发射'] = function (e) {
    var arr = T.ini({ cd: 0 }, e);
    if (!(arr instanceof Array)) {
        return 1;
    }
    var obj = arr[0], pobj = arr[1], a = arr[3];
    var arr2 = T.findids("得分卡");
    var zobj;
    if (T.findObj("找不同_提示手指").visible)
        T.findObj("找不同_提示手指").visible = false;
    T.ctrl()['状态'] = 3;
    T.ctrl()['不同数'] = 0;
    for (var i = 0; i < arr2.length; i++) {
        if (sj.obj[arr2[i]].visible)
            T.ctrl()['不同数']++;
    }
    for (var i = 0; i < arr2.length; i++) {
        var node = sj.obj[arr2[i]];
        if (!node.bgimg.includes("1566464462751.png")) {
            zobj = node;
            if (i == T.ctrl()['不同数'] - 1)
                T.ctrl()['状态'] = 9;
            break;
        }
    }
    if (zobj) {
        var oobj = e.event.target;
        var x = (obj != oobj ? (obj.x + oobj.x - oobj.width * 0.5) : obj.x);
        var y = (obj != oobj ? (obj.y + oobj.y - oobj.height * 0.5) : obj.y);
        var json = sj.clas[obj.name].style;
        json.x = x;
        json.y = y;
        json.obj = obj;
        json.pobj = obj;
        json.bgimg = a.bgimg;
        json._id = "fd";
        json.typ = sj.clas[obj.name].typ;
        var dobj = JuiData.getzi([json])[0];
        dobj.name = obj.name + '子弹';
        zobj.bgimg = "http://image.kxtui.com/pg/fi/15664/1566464462751.png";
        pobj.addChild(dobj);
        var lizi_1 = window.actt(dobj, { "粒子特效": { png: "xingguang_png", json: "xingguang_json", x: dobj.x, y: dobj.y } });
        dobj["x0"] = dobj.x;
        dobj["y0"] = dobj.y;
        egret.Tween.get(dobj).to({ x: zobj.x, y: zobj.y }, Jui.getSingle().getTime(dobj.x, dobj.y, zobj.x, zobj.y, 1500), egret.Ease["sineOut"]).call(function () {
            this.parent.removeChild(this);
            Jui.getSingle().setImg(zobj, "http://image.kxtui.com/pg/fi/15664/1566464462751.png");
            if (T.findObj("找不同_提示语").visible) {
                var num = T.findObj("找不同_提示语").text.replace(/[^0-9]/ig, "");
                num = num * 1 - 1;
                T.findObj("找不同_提示语").text = "很好，再找出" + num + "个不同就能通关了";
            }
            if (T.ctrl()['状态'] == 9) {
                console.log("胜利并结束");
                T.func("结束弹窗页");
                var timerobj = sj.obj[T.findids("计时")];
                window.actt(timerobj, { "计时": { 'zs': false } });
            }
        }, dobj);
        var timerfun_1 = function () {
            lizi_1.emitterX = this.x - this["x0"];
            lizi_1.emitterY = this.y - this["y0"];
            if (!this.parent) {
                timer.removeEventListener(egret.TimerEvent.TIMER, timerfun_1, this);
                timer.stop();
                lizi_1.stop();
                egret.Tween.get(lizi_1).wait(500).call(function () { this.parent.removeChild(this); }, lizi_1);
            }
        };
        var timer = new DateTimer(20);
        dobj["mrtimer"] = timer;
        timer.addEventListener(egret.TimerEvent.TIMER, timerfun_1, dobj);
        timer.start();
    }
    else {
        console.log("结束");
    }
};
window['找不同点错'] = function (e) {
    var arr = T.ini({ time: -20, cd: 0 }, e);
    if (!(arr instanceof Array)) {
        return 1;
    }
    var obj = arr[0], pobj = arr[1], a = arr[3];
    if (T.ctrl()['状态'] == 9) {
        console.log("结束");
        T.func("结束弹窗页");
        var timerobj_1 = sj.obj[T.findids("计时")];
        window.actt(timerobj_1, { "计时": { 'zs': false } });
        return;
    }
    var timerobj = sj.obj[T.findids("计时")];
    if (a.time < 0) {
        var dobj_1 = new egret.Bitmap();
        Jui.getSingle().setImg(dobj_1, "x_png", 0.5);
        dobj_1.x = e.event.stageX;
        dobj_1.y = e.event.stageY;
        dobj_1.width = 100;
        dobj_1.height = 100;
        Main.i.addChild(dobj_1);
        egret.Tween.get(dobj_1).to({ scaleX: 0.4, scaleY: 0.4 }, 200);
        var text = JuiData.getzi([{ typ: 4, obj: Main.i, x: e.event.stageX, y: e.event.stageY, w: 130, h: 50, _id: "text", ca: a.time, pobj: Main.i, Textfield: { "textColor": "0xff0000", "size": 50, "textAlign": "center" } }])[0];
        text.name = "de";
        Main.i.addChild(text);
        var point = Jui.getSingle().getstagePoint(timerobj.anchorOffsetX, timerobj.anchorOffsetY, timerobj);
        egret.Tween.get(text).to({ y: dobj_1.y - 70 }, 150).wait(200).to({ x: point.x, y: point.y }, Jui.getSingle().getTime(dobj_1.x, dobj_1.y, point.x, point.y, 1400)).call(function () {
            this.parent.removeChild(this);
            dobj_1.parent.removeChild(dobj_1);
            var time0;
            var timestr;
            var type = 0;
            if (timerobj["curTime"]) {
                var n = timerobj.getChildByName(T.findids("计时") + 'zitext').text.split(':');
                time0 = n[0] * 60 + n[1] * 1;
                type = 1;
                timestr = T.time({ t: (time0 + a.time) * 1000, format: "mm:ss" });
            }
            else {
                time0 = timerobj.getChildByName(T.findids("计时") + 'zitext').text * 1;
                timestr = time0 + a.time + '';
            }
            if (time0 == '0' && a.time > 0)
                return;
            var time = Math.round(time0 + a.time);
            if (time <= 0) {
                time = 0;
                if (timerobj["curTime"]) {
                    timestr = '00:00';
                }
                else {
                    timestr = '0';
                }
                Jui.getSingle().actt(timerobj, timerobj, sj.clas[timerobj.name]['actt']['计时']['actt']);
                window.actt(timerobj, { "计时": { beginTime: time, type: type, "zs": false } });
            }
            else {
                window.actt(timerobj, { "计时": { beginTime: time, "type": type, "actt": sj.clas[timerobj.name]['actt']['计时']['actt'] } });
            }
            timerobj.getChildByName(T.findids("计时") + 'zitext').text = timestr;
        }, text);
    }
    else {
        var time0 = void 0;
        var timestr = void 0;
        var type = 0;
        if (timerobj["curTime"]) {
            var n = timerobj.getChildByName(T.findids("计时") + 'zitext').text.split(':');
            time0 = n[0] * 60 + n[1] * 1;
            type = 1;
            timestr = T.time({ t: (time0 + a.time) * 1000, format: "mm:ss" });
        }
        else {
            time0 = timerobj.getChildByName(T.findids("计时") + 'zitext').text * 1;
            timestr = time0 + a.time + '';
        }
        var time = Math.round(time0 + a.time);
        if (time < 0)
            time = 0;
        timerobj.getChildByName(T.findids("计时") + 'zitext').text = timestr;
        window.actt(timerobj, { "计时": { beginTime: time, "type": type, "actt": sj.clas[timerobj.name]['actt']['计时']['actt'] } });
    }
};
window['找不同换图'] = function (e) {
    var arr = T.ini({ img: "http://image.kxtui.com/pg/fi/15681/1568173505000.png", time: 1000, cb: function () { return 0; } }, e, 1);
    if (!(arr instanceof Array)) {
        return 1;
    }
    var obj = arr[0], pobj = arr[1], a = arr[3];
    Jui.getSingle().setImg(obj, a.img);
    Jui.getSingle().setImg(obj["克隆对象"].$children[0], a.img);
};
window['上下移动'] = function (aj) {
    var arr = T.ini({ time: 1000, loop: 1 }, aj);
    var obj = arr[0], a = arr[3];
    var act = [
        [{ "动作": "tween", "y": "39%", "time": a.time }],
        [{ "动作": "tween", "y": "40%", "time": a.time }],
        { loop: a.loop }
    ];
    T.dodz(arr[0], act);
};
window['走马灯抽奖'] = function (e) {
    var arr = T.ini({ time: 1000, cb: function () { return 0; } }, e);
    var obj = arr[0], pobj = arr[1], sobj = arr[2], a = arr[3];
    obj.curn = (obj.curn || 0) + 1;
    obj.curn > 8 && (obj.curn = 0);
    window.actt(obj, { '隐藏': { obj: sobj[obj.curn].name + '外框' } });
    obj.curn1 = obj.curn + 1;
    obj.curn1 > 8 && (obj.curn1 = 0);
    window.actt(obj, { '显示': { obj: sobj[obj.curn1].name + '外框' } });
    if (a.loop == 0)
        obj.curn = 0;
};
window['微信小游戏分享'] = function (aj) {
    /**
     * 封装微信小游戏中的分享相关的接口   具体api说明见微信文档 https://developers.weixin.qq.com/minigame/dev/api/share/wx.updateShareMenu.html
     * 当标题、图标传入空值时，微信小游戏有自己的默认值逻辑，具体参考微信文档
     * @param {Boolean} [show=false] - 为true时主动调用分享功能
     * @param {Boolean} vi - 控制在右上角按钮的菜单中，是否显示分享按钮
     * @param {Boolean} [withShareTicket=true] - 分享时是否带withShareTicket，具体作用参考微信文档
     * @param {String} [title=jg_aj.wx_share.title||''] - 分享标题
     * @param {String} [imgUrl=jg_aj.wx_share.imgUrl||''] - 分享图标（显示图片长宽比是 5:4）
     * @param {Object} [query=jg_aj.sj.query] - 相当于web链接中?后面的参数。(ps：微信小游戏接口中这个参数应是形如a=xx&b=xxx的字符串类型)
     */
    if (egret.Capabilities.runtimeType != "wxgame") {
        console.error("该方法仅在微信小游戏下可用");
        aj.cb && aj.cb();
        return 0;
    }
    jg_aj.wx_share = jg_aj.wx_share || {}; // 确保jg_aj.wx_share存在
    var a = T.merge({ show: false, withShareTicket: true, title: jg_aj.wx_share.title || '', imgUrl: jg_aj.wx_share.imgUrl || '', query: jg_aj.sj.query || {} }, aj);
    // 将a.query转换为微信所需的字符串格式
    a.query.tidus = jg_aj.idus;
    a.query = Object.keys(a.query).map(function (k) { return k + "=" + a.query[k]; }).join("&");
    var json = {
        withShareTicket: a.withShareTicket,
        query: a.query,
        imageUrl: a.imgUrl,
        title: a.title,
        complete: function () {
            a.cb && a.cb();
        }
    };
    if (a.show) {
        wx.shareAppMessage(json);
        jg_aj.sj["分享t"] = db.gett();
        a.cb && a.cb();
    }
    if (!a.show) {
        wx.onShareAppMessage(function () {
            return json;
        });
    }
    if (a.vi != undefined) {
        a.vi ? wx.showShareMenu(json) : wx.hideShareMenu(json);
    }
    return 1;
};
window['找不同显示提示'] = function (aj) {
    var a = T.merge({}, aj);
    var obj = T.findids("找不同圈").map(function (n) { return sj.obj[n]; }).find(function (o) { return o.touchEnabled && o.y < 700; });
    var f = T.findObj("提示手指");
    if (obj && f) {
        //T.undodz(f);
        // window.actt(f,{"呼吸":{}})
        //f.x = obj.x+50;
        //f.y = obj.y+50;
        window.actt(f, { "tween": { x: obj.x + 50, y: obj.y + 50, time: 500 } });
        f.visible = true;
    }
    a.cb && a.cb();
    return 1;
};
window['画个心'] = function (e) {
    if (!window['__extends']) {
        window.__reflect = (this && this.__reflect) || function (p, c, t) {
            p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
        };
        window.__extends = this && this.__extends || function __extends(t, e) {
            function r() {
                this.constructor = t;
            }
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i]);
            r.prototype = e.prototype, t.prototype = new r();
        };
        window.__define = this && this.__define || function (o, p, g, s) { Object.defineProperty(o, p, { configurable: true, enumerable: true, get: g, set: s }); };
    }
    var arr = T.ini({ num: 72, cd: 0, interval: 20, "bpng": "http://image.kxtui.com/pg/fi/15687/1568722247353.png", "size": 4, "color": 16711680, hb: 0, lw: 7, cb: function () { return 0; } }, e);
    var obj = arr[0], pobj = arr[1], a = arr[3];
    console.log("准备执行画个心");
    var heart = (obj instanceof egret.DisplayObjectContainer) && obj.getChildByName(obj.name + 'ziImg') ? obj.getChildByName(obj.name + 'ziImg') : obj;
    if (!heart.texture)
        return console.log("不能画图，请检查图片");
    if (!window.TextureContour) {
        var TextureContour = function (t, n) {
            if (n === void 0) { n = 5; }
            function e() {
                t.apply(this, arguments), this.checkNum = n, this.timer = new egret.Timer(20);
            }
            __extends(e, t);
            var i = (__define, e), s = i.prototype;
            return s.checkByAsync = function (heart, rander, drawShape, n) {
                if (n === void 0) { n = 5; }
                this.heart = heart;
                this.rander = rander;
                this.drawShape = drawShape;
                this.checkNum = n;
                this.count = 0;
                this.timer = new egret.Timer(50, heart.height / this.checkNum);
                this.timer.addEventListener(egret.TimerEvent.TIMER, this.check, this);
                this.timer.start();
            }, s.check = function () {
                var dscore = 0, count = 0;
                for (var zz = 0; this.count < this.heart.width - this.checkNum && zz < this.heart.height; zz += this.checkNum) {
                    var heartcolor = this.heart.texture.getPixels(this.count, zz, 1, 1);
                    var rancolor = this.rander.getPixels(this.count, zz, 1, 1);
                    if (heartcolor[1] != 0)
                        dscore++;
                    if (heartcolor[1] != 0 && rancolor[1] != 0) {
                        count++;
                        this.drawShape.graphics.beginFill(0xFFD700);
                        this.drawShape.graphics.drawRect(this.count, egret.Capabilities.renderMode == 'webgl' ? this.heart.height - zz : zz, this.checkNum, this.checkNum);
                        this.drawShape.graphics.endFill();
                    }
                    else if (heartcolor[1] == 0 && rancolor[1] != 0) {
                        count--;
                        this.drawShape.graphics.beginFill(0xFF0000);
                        this.drawShape.graphics.drawRect(this.count, egret.Capabilities.renderMode == 'webgl' ? this.heart.height - zz : zz, this.checkNum, this.checkNum);
                        this.drawShape.graphics.endFill();
                    }
                    else if (heartcolor[1] != 0 && rancolor[1] == 0) {
                        this.drawShape.graphics.beginFill(0xFF0000);
                        this.drawShape.graphics.drawRect(this.count, egret.Capabilities.renderMode == 'webgl' ? this.heart.height - zz : zz, this.checkNum, this.checkNum);
                        this.drawShape.graphics.endFill();
                    }
                }
                this.count += this.checkNum;
                this.dispatchEventWith(e.CHECKOENCOMPLETE, !1, { dscore: dscore, count: count });
                if (this.count >= this.heart.width - this.checkNum)
                    this.dispatchEventWith(e.CHECKCOMPLETE, !1, {});
            }, s.checkpAlpha = function (t) {
                var i = !1;
                return i = this.checkType == e.CHECKALPHA ? 0 == t : 0 != t;
            }, e.CHECKCOMPLETE = "checkcomplete", e.CHECKOENCOMPLETE = "checkonecomplete", e.CHECKLINE = "checkline", e.CHECKALPHA = "checkalpha", e;
        }(egret.EventDispatcher);
        egret.registerClass(TextureContour, "TextureContour");
        window.TextureContour = TextureContour;
    }
    if (!window.hxScene) {
        var hxScene = (function (_super) {
            __extends(hxScene, _super);
            function hxScene(obj, data) {
                var _this = _super.call(this) || this;
                this.obj = obj;
                this.data = data;
                _this.init();
                return _this;
            }
            hxScene.prototype.init = function () {
                this.arr = [];
                this.heart = (this.obj instanceof egret.DisplayObjectContainer) && this.obj.getChildByName(this.obj.name + 'ziImg') ? obj.getChildByName(obj.name + 'ziImg') : obj;
                this.width = this.heart.width;
                this.height = this.heart.height;
                this._drawTouch = new egret.Shape();
                this.jobj = this._drawTouch;
                if (this.data.hb) {
                    this.huabi = new egret.Bitmap();
                    this.huabi.width = 50;
                    this.huabi.height = 113;
                    Jui.getSingle().setImg(this.huabi, this.data.bpng);
                    this.bg = new egret.Bitmap();
                    this.bg.width = this.heart.width * 2;
                    this.bg.height = this.heart.height * 2;
                    Jui.getSingle().setImg(this.bg, "http://image.kxtui.com/pg/fi/14984/1498447880857.png", 0.5);
                    this.addChildAt(this.bg, 0);
                    this.bg.x = this.width * 0.5;
                    this.bg.y = this.height * 0.5;
                    this.jobj = this.bg;
                }
                this.addChild(this.drawBroad = new egret.Sprite), this.drawBroad.addChild(this._drawTip = new egret.Shape), this.drawBroad.addChild(this._drawShape = new egret.Shape), this.drawBroad.addChild(this._drawTouch), this.fristP = new egret.Point, this.heart.x = .5 * Main.i.stage.stageWidth, this.heart.y = .5 * Main.i.stage.stageHeight, this.heart.visible = !0, this._imgTg = new TextureContour, this._drawTg = new TextureContour, this._drawTg.addEventListener(TextureContour.CHECKOENCOMPLETE, this.oneComplete, this), this._drawTg.addEventListener(TextureContour.CHECKCOMPLETE, this.checkComplete, this), this.oneLineScore = 100 / this.data.num, this.jobj.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.drawBegin, this), this.jobj.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.drawMove, this), this.jobj.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.drawEnd, this), this.jobj.addEventListener(egret.TouchEvent.TOUCH_END, this.drawEnd, this), this._drawTouch.graphics.beginFill(0, 0), this._drawTouch.graphics.drawRect(0, 0, this.obj.width, this.obj.height), this.heart.x = .5 * this.obj.width, this.heart.y = .5 * this.obj.height, this.drawBroad.x = 0, this.drawBroad.y = 0;
                this._drawTouch.name = "监听板";
                this._drawShape.name = "画板";
                if (this.huabi)
                    this.addChild(this.huabi);
                this.allScore = 0,
                    this.ready();
            };
            hxScene.prototype.oneComplete = function (t) {
                this.dscore += t.data.dscore;
                this.count += t.data.count;
                this.allScore = this.count / this.dscore * 100;
                if (this.allScore < 0)
                    this.allScore = 0;
                console.log(this.allScore);
                if (T.findObj("提示语"))
                    T.findObj("提示语").text = Math.round(this.allScore) + '分';
            };
            hxScene.prototype.checkComplete = function () {
                var score = Math.round(this.allScore);
                this.jobj.touchEnabled = !1,
                    this._randerTexture.dispose();
                if (a.cb)
                    Jui.getSingle().actt(obj, obj, a.cb);
            };
            hxScene.prototype.drawBegin = function (t) {
                this["gettimer"] = egret.getTimer();
                var lx, ly;
                this["stageX"] = t.stageX;
                this["stageY"] = t.stageY;
                if (this.data.hb) {
                    this.huabi["x0"] = this.huabi.x;
                    this.huabi["y0"] = this.huabi.y;
                    lx = this.huabi.x;
                    ly = this.huabi.y;
                }
                else {
                    lx = t.localX;
                    ly = t.localY;
                }
                this.arr.push({ "x": lx, "y": ly });
                this.isDraw = true;
                this.fristP.x = lx, this.fristP.y = ly, this._drawShape.graphics.lineStyle(this.data.size, this.data.color), this._drawShape.graphics.moveTo(lx, ly);
            };
            hxScene.prototype.drawMove = function (t) {
                if (this.isDraw == true) {
                    var lx = void 0, ly = void 0;
                    var x1 = (this.data.hb ? this.huabi["x0"] : this.arr[this.arr.length - 1]["x"]) + t.stageX - this["stageX"];
                    var y1 = (this.data.hb ? this.huabi["y0"] : this.arr[this.arr.length - 1]["y"]) + t.stageY - this["stageY"];
                    var isok = false;
                    if (!this["jlx"] || !this["jly"] || Math.abs(x1 - this["jlx"]) > 4 || Math.abs(y1 - this["jly"]) > 4) {
                        isok = true;
                        this["jlx"] = x1;
                        this["jly"] = y1;
                    }
                    if (this.data.hb) {
                        this.huabi.x = x1;
                        this.huabi.y = y1;
                        lx = this.huabi.x;
                        ly = this.huabi.y;
                    }
                    else {
                        lx = t.localX;
                        ly = t.localY;
                    }
                    if (isok) {
                        this.arr.push({ "x": lx, "y": ly });
                        this._drawShape.graphics.lineTo(lx, ly);
                    }
                }
            };
            hxScene.prototype.drawEnd = function (t) {
                if (egret.getTimer() - this["gettimer"] < 500) {
                    var textobj = T.findObj("提示语");
                    textobj.text = "画图时间过短，请一笔画出图形";
                    egret.Tween.removeTweens(textobj);
                    egret.Tween.get(textobj).wait(100).to({ alpha: 0.2 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0.2 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0.2 }, 100).to({ alpha: 1 }, 100);
                    this._drawShape.graphics.clear();
                    this.arr = [];
                    return;
                }
                if (this.isDraw == true) {
                    var lx = void 0, ly = void 0;
                    if (this.data.hb) {
                        this.huabi.x = this.huabi["x0"] + t.stageX - this["stageX"];
                        this.huabi.y = this.huabi["y0"] + t.stageY - this["stageY"];
                        lx = this.huabi.x;
                        ly = this.huabi.y;
                    }
                    else {
                        lx = t.localX;
                        ly = t.localY;
                    }
                    this.arr.push({ "x": lx, "y": ly });
                    this.arr.push({ "x": this.fristP.x, "y": this.fristP.y });
                    this._drawShape.graphics.lineTo(lx, ly), this._drawShape.graphics.lineTo(this.fristP.x, this.fristP.y);
                    jg_aj["绘图数组"] = JSON.stringify(this.arr);
                    this._drawShape.graphics.clear();
                    var od = JSON.parse(jg_aj["绘图数组"]);
                    var color = this.heart.texture.getPixels(this.heart.width / 2, this.heart.height / 2, 1, 1);
                    color = Number(color[0]) * 65536 + Number(color[1]) * 256 + Number(color[2]);
                    this._drawShape.graphics.lineStyle(1, color);
                    this._drawShape.graphics.beginFill(color, 0.5);
                    this._drawShape.graphics.moveTo(od[0]["x"], od[0]["y"]);
                    for (var i = 1; i < od.length; i++) {
                        this._drawShape.graphics.lineTo(od[i]["x"], od[i]["y"]);
                    }
                    this._drawShape.graphics.endFill();
                    this._randerTexture = new egret.RenderTexture, this.jobj.touchEnabled = !1, this._randerTexture.drawToTexture(this._drawShape, new egret.Rectangle(0, 0, this.heart.width, this.heart.height)), this.heart.alpha = .8;
                    this.isDraw = false;
                    egret.Tween.removeTweens(this.heart);
                    egret.Tween.get(this.heart).to({ alpha: 0.8, scaleX: 1, scaleY: 1 }, 100);
                    this._drawTg.checkByAsync(this.heart, this._randerTexture, this._drawShape, this.data.lw);
                }
            };
            hxScene.prototype.ready = function () {
                this.allScore = 0;
                this.dscore = 0;
                this.count = 0;
                this.arr = [];
                this.jobj.touchEnabled = true;
                this._drawShape.graphics.clear();
                this._drawTip.graphics.clear();
                this.drawBroad.removeChildren(),
                    this.drawBroad.addChild(this._drawShape),
                    this.drawBroad.addChild(this._drawTouch),
                    this.drawBroad.addChild(this._drawTip);
                // for (var i = 0; i < this.drawBroad.$children.length; i++) {
                //   var zobj = this.drawBroad.$children[i];
                //   if (zobj.name == '线') {
                //     zobj.parent.removeChild(zobj);
                //     i--;
                //   }
                // }
                this.trueArr = this._imgTg.angleArr;
                var time = egret.getTimer();
                this.trueArr = this.obj['图像数组'] && jg_aj.idus != 'g8qRx5iixg9' ? JSON.parse(this.obj['图像数组']) : window.actt(this.heart, { "获取图像数组": { "num": this.data.num } });
                if (this.trueArr.length != this.data.num)
                    this.trueArr = window.actt(this.heart, { "获取图像数组": { "num": this.data.num } });
                if (jg_aj.idus == 'g8qRx5iixg9')
                    T.findObj("游戏窗azitext").text = JSON.stringify(this.trueArr);
                time = egret.getTimer() - time;
                console.log("获点耗时" + time);
                var len = this.trueArr.length;
                egret.Tween.get(this.heart).wait(time).to({ alpha: 1 }, 0).wait(3000).to({ alpha: 0 }, 200);
                if (this.data.hb) {
                    this.huabi.x = .5 * this.obj.width + this.trueArr[Math.floor(len * 3 / 4)].x;
                    this.huabi.y = .5 * this.obj.height + this.trueArr[Math.floor(len * 3 / 4)].y;
                }
                this._drawTip.graphics.lineStyle(1, 3355443), this._drawTip.graphics.moveTo(.5 * this.obj.width, .5 * this.obj.height), this._drawTip.graphics.lineTo(.5 * this.obj.width + this.trueArr[0].x, .5 * this.obj.height + this.trueArr[0].y), this._drawTip.graphics.moveTo(.5 * this.obj.width, .5 * this.obj.height), this._drawTip.graphics.lineTo(.5 * this.obj.width + this.trueArr[Math.floor(len / 4)].x, .5 * this.obj.height + this.trueArr[Math.floor(len / 4)].y), this._drawTip.graphics.moveTo(.5 * this.obj.width, .5 * this.obj.height), this._drawTip.graphics.lineTo(.5 * this.obj.width + this.trueArr[Math.floor(len / 2)].x, .5 * this.obj.height + this.trueArr[Math.floor(len / 2)].y), this._drawTip.graphics.moveTo(.5 * this.obj.width, .5 * this.obj.height), this._drawTip.graphics.lineTo(.5 * this.obj.width + this.trueArr[Math.floor(len * 3 / 4)].x, .5 * this.obj.height + this.trueArr[Math.floor(len * 3 / 4)].y);
                if (T._my()["当前关卡"] == 1000 && !this.shouzhi) {
                    T.findObj("提示语").text = "根据手指提示，一笔画出图形";
                    if (!this.shouzhi) {
                        this.shouzhi = new egret.Bitmap();
                        this.shouzhi.width = 70;
                        this.shouzhi.height = 113;
                        Jui.getSingle().setImg(this.shouzhi, "http://image.kxtui.com/pg/fi/15666/1566644485623.png");
                        this.addChild(this.shouzhi);
                    }
                    this.jobj.touchEnabled = false;
                    var tween = egret.Tween.get(this.shouzhi);
                    var x0, y0;
                    var i = Math.floor(len * 3 / 4);
                    this.shouzhi.x = .5 * this.obj.width + this.trueArr[i].x;
                    this.shouzhi.y = .5 * this.obj.height + this.trueArr[i].y;
                    this._drawShape.graphics.lineStyle(this.data.size, this.data.color);
                    this._drawShape.graphics.moveTo(this.shouzhi.x, this.shouzhi.y);
                    for (; i < this.trueArr.length; i++) {
                        var x1 = .5 * this.obj.width + this.trueArr[i].x;
                        var y1 = .5 * this.obj.height + this.trueArr[i].y;
                        tween.to({ x: x1, y: y1 }, Jui.getSingle().getTime(x0 || this.shouzhi.x, y0 || this.shouzhi.y, x1, y1, 300));
                        x0 = .5 * this.obj.width + this.trueArr[i].x;
                        y0 = .5 * this.obj.height + this.trueArr[i].y;
                        if (i == this.trueArr.length - 1)
                            i = -1;
                        if (i == Math.floor(len * 3 / 4) - 1)
                            break;
                    }
                    jg_aj.hgxtimer = egret.setInterval(function () {
                        this._drawShape.graphics.lineTo(this.shouzhi.x, this.shouzhi.y);
                    }, this, 20);
                    tween.call(function () {
                        egret.clearInterval(jg_aj.hgxtimer);
                        T.findObj("提示语").text = "这样就画出一个漂亮的心形了！";
                        egret.setTimeout(function () {
                            this.jobj.touchEnabled = true;
                            this._drawShape.graphics.clear();
                            this.removeChild(this.shouzhi);
                            T.findObj("提示语").text = "现在到你了，展示技术的时候到了！";
                        }, this, 2000);
                    }, this);
                }
            };
            return hxScene;
        }(egret.DisplayObjectContainer));
        __reflect(hxScene.prototype, "hxScene");
        window.hxScene = hxScene;
    }
    if (obj["xin"]) {
        //Jui.getSingle().removeObj(obj["xin"])
        obj["xin"].ready();
    }
    else {
        var xin = new window.hxScene(obj, a);
        obj["xin"] = xin;
        obj.addChild(xin);
    }
};
;
window['绘画高手提示'] = function (aj) {
    var a = T.merge({ time: 12000 }, aj);
    var obj = sj.obj[T.findids("图形")];
    egret.Tween.get(obj.getChildByName(obj.name + "ziImg")).to({ "alpha": 1 }, 200).wait(a.time).to({ "alpha": 0 }, 200);
    a.cb && a.cb();
    return 1;
};
window['显示绘图'] = function (e) {
    var arr = T.ini({ size: 3, time: 1000, color: 0xff00ff, cb: function () { return 0; } }, e, 1);
    var obj = arr[0], pobj = arr[1], a = arr[3];
    if (!sj.clas[obj.name]['图案'])
        return;
    var tobj = new egret.Shape();
    tobj.graphics.lineStyle(a.size, a.color);
    var data = JSON.parse(sj.clas[obj.name]['图案']);
    tobj.graphics.moveTo(data[0].x, data[0].y);
    for (var i = 0; i < data.length; i++) {
        tobj.graphics.lineTo(data[i].x, data[i].y);
    }
    tobj.graphics.lineTo(data[0].x, data[0].y);
    obj.addChild(tobj);
};
window['转换绘图'] = function (e) {
    var arr = T.ini({ time: 1000, cb: function () { return 0; } }, e, 1);
    var obj = arr[0], pobj = arr[1], a = arr[3];
    var bg = obj.getChildByName(obj.name + "ziImg");
    var hobj = new egret.RenderTexture();
    hobj.drawToTexture(bg, new egret.Rectangle(0, 0, bg.width, bg.height));
    bg.texture = hobj;
};
window['tween'] = function (aj) {
    var arr = T.ini({ time: 1000, sleep: 0, loop: 0, cb: function () { return 0; }, ease: null }, aj);
    if (!(arr instanceof Array)) {
        return 1;
    }
    var obj = arr[0], pobj = arr[1], a = arr[3];
    a.alpha == undefined && (a.alpha = obj.alpha);
    if (a.scale != undefined) {
        a.scaleX = a.scaleX || a.scale;
        a.scaleY = a.scaleY || a.scale;
    }
    a.time == '' && (a.time = 0);
    if (!T.isEgret(obj)) {
        obj = obj.dom;
        a.ease = easeFunc[a.ease || "sineIn"];
        var t = getTransformTranslate(obj);
        a.x != undefined && (a.x = a.x + t.x - arr[0].x); // 算出增量
        a.y != undefined && (a.y = a.y + t.y - arr[0].y);
        a.sleep *= 0.001;
        jg_aj.DEBUG && console.log(obj.id + jex().getdatetime((new Date).getTime(), 1) + ' ' + a.time + ' ' + a.sleep);
        //let myTimeline = new TimelineMax({});
        var cb_1 = a.cb;
        delete a.cb;
        var props_1 = {};
        var validatePropNames = ['x', 'y', 'scaleX', 'scaleY', 'rotation', 'alpha'];
        validatePropNames.forEach(function (n) { return a[n] != undefined && (props_1[n] = a[n]); });
        //console.error('obj:$1 props:$2',obj, props);
        _setTimeout(function () {
            (new TimelineMax({})).to(obj, a.time * 0.001, props_1)
                .addCallback(cb_1, "+=" + a.sleep)
                .call(myFunction);
        }, 0);
        //tl.progress(0),tl.remove()复原aj.recover
        function myFunction() {
            //if (a.loop != undefined) myTimeline.repeat(a.loop);
        }
    }
    else {
        jg_aj.DEBUG && console.log(obj.name + jex().getdatetime((new Date).getTime(), 1) + ' ' + a.time + ' ' + a.sleep);
        if (obj.world) {
            if (!(obj instanceof p2.Body)) {
                obj = obj["gt"];
            }
            a.x = a.x ? T.deval("x", obj.displays[0].parent, a) : undefined;
            a.y = a.y ? T.deval("y", obj.displays[0].parent, a) : undefined;
            a.x = P2Space.getSingle().convertEgretValueToP2(a.x);
            a.y = P2Space.getSingle().convertEgretY_To_P2Y(a.y);
            var x0 = (a.x || obj.position[0]);
            var y0 = (a.y || obj.position[1]);
            var d = Math.sqrt((x0 - obj.position[0]) * (x0 - obj.position[0]) + (y0 - obj.position[1]) * (y0 - obj.position[1]));
            var o = d / (a.jl || 0.1);
            a.rate = a.rate || (a.time / o);
            var num = a.time / a.rate;
            a.addx = a.x ? (a.x - obj.position[0]) / (num) : 0;
            a.addy = a.y ? (a.y - obj.position[1]) / (num) : 0;
            clearInterval(obj["objInterval"]);
            obj["objInterval"] = setInterval(function () {
                num--;
                a.x1 = obj.position[0] + a.addx;
                a.y1 = obj.position[1] + a.addy;
                obj.position = [a.x1, a.y1];
                if (num <= 0) {
                    clearInterval(obj["objInterval"]);
                    a.cb && a.cb();
                }
            }, a.rate);
        }
        else {
            var _action = egret.Tween.get(obj, { loop: a.loop }).to(a, a.time, egret.Ease[a.ease]).wait(a.sleep);
            a.loop ? a.cb() : _action.call(a.cb);
        }
    }
};
window['放大'] = function (e) {
    var arr = T.ini({ scaleX: 2, scaleY: 2, addscale: 0, ease: null, time: 500, "fd": 0 }, e);
    if (!arr) {
        e.cb();
        return 0;
    }
    var obj = arr[0], pobj = arr[1], a = arr[3];
    if (a.scale)
        a.scaleX = a.scaleY = a.scale;
    if (a.addscale) {
        a.scaleX = obj.scaleX + a.addscale;
        a.scaleY = obj.scaleY + a.addscale;
    }
    window.actt(obj, { "tween": a });
};
window['发射'] = function (aj) {
    var oaj = T.dcopy(aj);
    var arr = T.ini({
        num: 99999, touch: egret.TouchEvent.TOUCH_END, wlobj: "", wait: 0, send: 1,
        type: 1, intime: 500, speed: 300, dandao: 1, stop: 0, ptro: 0, zdro: 0, seed: "http://image.kxtui.com/pg/fi/15149/1514948666715.png", addy: -1000, addx: 400, addx2: 200, wuti: "zidan", ziro: 0, dandaopoint: [[], [0.5], [0.2, 0.8], [0.2, 0.5, 0.8], [0.2, 0.4, 0.6, 0.8], [0.1, 0.3, 0.5,
                0.7, 0.9]], cb: function () { return 0; }
    }, aj);
    if (!(arr instanceof Array)) {
        return 1;
    }
    if (!arr) {
        console.log("\u53D1\u5C04 \u6267\u884C\u5931\u8D25,id:" + aj.obj.name);
        return 0;
    }
    var obj = arr[0], pobj = arr[1], a = arr[3];
    if (!a.nr)
        obj.rotation = -90;
    var dandao = window.ifeval ? eval(a.dandao) : T.doeval(a.dandao);
    dandao = window["T"].clamp(parseInt(dandao), 1, 5); //子弹弹道 默认1
    var zu = a.dandaopoint[dandao];
    var wlobj = T.findObj(a.wlobj);
    if (a.tarobj)
        a.tarobj = T.findObj(a.tarobj);
    if (!hc["zidanshou"])
        hc["zidanshou"] = JuiData.getzi([{ typ: a.json ? 6 : 1, obj: obj, pobj: pobj, png: a.seed }], 20);
    if (obj["fs1timer"]) {
        obj["fs1timer"].stop();
        Jui.getSingle().removeObjEvent(obj["fs1timer"], egret.TimerEvent.TIMER, "fs1timerfun", this);
    }
    if (a.type == 1 || a.num > 1 || a.type == 3) {
        var timer = obj["fs1timer"];
        if (!timer) {
            timer = new DateTimer(a.intime, a.num + 1); //创建计时器  默认500毫秒发射一发子弹
            obj["fs1timer"] = timer; //计时器索引存于对象，以方便下次修改
        }
        else {
            timer.delay = a.intime; //设置发射时间间隔
            timer.currentCount = 0;
            timer.repeatCount = a.num + 1;
            console.error('timer重置了：' + timer.delay + " " + timer.currentCount + " " + timer.repeatCount);
        }
    }
    var cback = function (data) {
        if (this["endimg"]) {
            if (a["endjson"]) {
                Jui.getSingle().setMove(this.$children[0], a["endjson"], this["endimg"], 1, null, null, "", a["jnscx"], a["jnscy"], a["jnscax"], a["jnscay"]);
            }
            else {
                Jui.getSingle().setImg(this, this["endimg"], 0.5);
            }
            if (a.endsound)
                window.actt(this, { "播放音效": { url: a.endsound } }); //window['播放音效']({ obj: this, url: a.endsound });
            this.name = "_" + data;
            egret.setTimeout(function (data2) {
                if (this.parent) {
                    this.parent.removeChild(this);
                    if (!a["endjson"])
                        hc["zidanshou"].push(this);
                }
            }, this, 500);
        }
        else {
            Jui.getSingle().removeObj(this);
            if (!a["endjson"])
                hc["zidanshou"].push(this);
        }
    };
    var fs1timerfun = function (evevt) {
        for (var d = 1; d <= dandao; d++) {
            var zidan, dan;
            if (a.json) {
                dan = new egret.MovieClip();
                Jui.getSingle().setMove(dan, a.json, a.png, 1, null, null, "", a["jnscx"], a["jnscy"], a["jnscax"], a["jnscay"]);
                zidan = new BseBitmap(dan);
            }
            else {
                if (hc["zidanshou"].length > 0) {
                    zidan = hc["zidanshou"].shift();
                    zidan.texture = null;
                }
                else {
                    zidan = new egret.Bitmap();
                }
                Jui.getSingle().setImg(zidan, a.seed, 0.5);
            }
            pobj.addChildAt(zidan, pobj.$children.indexOf(obj));
            zidan.user = obj; //设置子弹归属
            if (a["endimg"] != undefined) {
                zidan["endimg"] = a["endimg"];
            }
            if (a.sound && d == 1)
                window.actt(zidan, { "播放音效": { url: a.sound } }); //window['播放音效']({ obj: zidan, url: a.sound });
            if (a.addy2) {
                zidan.x = obj.x - 150;
                zidan.y = obj.y - 110;
                zidan.x1 = zidan.x;
                zidan.y1 = zidan.y;
                zidan.x3 = a.addx + Math.floor(Math.random() * a.addx2);
                zidan.y3 = zidan.y + a.addy;
                if (obj.tpoint) {
                    zidan.x3 = obj.tpoint.x;
                    zidan.y3 = obj.tpoint.y;
                }
                zidan.x2 = zidan.x1 + (zidan.x3 - zidan.x1) / 2;
                zidan.y2 = zidan.y1 - (a.addy2);
                egret.Tween.get(zidan).to({ factor: 1 }, Jui.getSingle().getTime(zidan.x, zidan.y, zidan.x3, zidan.y3, a.speed + (Math.random() * a.wait)), egret.Ease[a.ease]).call(cback, zidan, [a.wuti]);
            }
            else if (wlobj) {
                var lx = obj.x;
                var ly = 100000 - obj.y;
                var sxsz = T.findObj('第几球zitext');
                if (sxsz && timer) {
                    sxsz.text = timer.repeatCount - timer.currentCount - 1;
                    if (timer.repeatCount <= timer.currentCount + 1) {
                        _setTimeout(function () { T.findObj({ include: '阻碍', exclude: '阻碍4', many: 1 }).map(function (i) { return i.position[1] += 1; }); }, 2000 + timer.repeatCount * 5);
                        a.stop = 1;
                        if (a.send) {
                            csend(["", { "dba": [jg_aj.curproj + "_第几球", { "结束": 1 }, "{idus:I}", {}] }, jg_aj.curproj + "_第几球"]);
                        }
                        else {
                            var scoreobj = T.findObj("玩家分数zitext");
                            if (scoreobj && parseInt(scoreobj.text) >= 5000 && !T.findObj("游戏说明").visible) {
                                T.findObj("游戏说明").visible = true;
                            }
                            if (T)
                                _setTimeout(function () {
                                    window.actt('发射器', { "发射": { type: 2, nr: 1, num: T._my('玩家')['等级'], wlobj: "游戏物理世界", intime: 150, send: 0, seed: "bullet3_png", exclude: ["zi"] } });
                                    //window['发射']({obj:'发射器',type: 2, nr: 1, num: T._my('玩家')['等级'], wlobj: "游戏物理世界", intime: 150,send:0,seed:"bullet3_png",exclude:["zi"]})
                                    sxsz.text = T._my('玩家')['等级'] + "";
                                    var arr = [[(5 + Math.floor(Math.random() * 95) + "%"), (90 + Math.floor(Math.random() * 4) + "%"), { id: '阻碍1', type: 3, rotation: Math.floor(Math.random() * 360) }],
                                        [(5 + Math.floor(Math.random() * 95) + "%"), (90 + Math.floor(Math.random() * 4) + "%"), { id: '阻碍2', type: 3, rotation: Math.floor(Math.random() * 360) }],
                                        [(5 + Math.floor(Math.random() * 95) + "%"), (90 + Math.floor(Math.random() * 4) + "%"), { id: '阻碍3', type: 3, rotation: Math.floor(Math.random() * 360) }]];
                                    T._ctrl()['波'] = T.findObj("游戏物理世界")['波'] ? T.findObj("游戏物理世界")['波'] += 1 : T.findObj("游戏物理世界")['波'] = 3;
                                    T._ctrl()["随机数组"] = [arr[Math.floor(Math.random() * arr.length)], arr[Math.floor(Math.random() * arr.length)]];
                                    //window['生成怪物']({obj:"左板刚体",sja: "随机数组", rate: 10000, cycle: 19000000,exclude:["zi"]})
                                    window.actt("左板刚体", { "生成怪物": { sja: "随机数组", rate: 10000, cycle: 19000000, exclude: ["zi"] } });
                                }, 2000 + timer.repeatCount * 5);
                        }
                    }
                }
                if (obj.tpoint) {
                    lx = obj.tpoint.x - obj.x;
                    ly = obj.tpoint.y - obj.y;
                }
                zidan.width = 24;
                zidan.height = 24;
                zidan.anchorOffsetX = zidan.width / 2;
                zidan.anchorOffsetY = zidan.height / 2;
                zidan.x = (obj.x - obj.anchorOffsetX) + (obj.width * zu[d - 1]);
                zidan.y = obj.y;
                var _x = obj.x + a.addx;
                var _y = obj.y + a.addy;
                if (obj.tpoint) {
                    _x = obj.tpoint.x;
                    _y = obj.tpoint.y;
                }
                var pos = new egret.Point(_x - zidan.x, _y - zidan.y);
                var angle = Math.atan2(pos.x, pos.y);
                var dis = 30;
                //var x=Math.ceil(Math.sin(angle)*dis);
                //var y=Math.ceil(Math.cos(angle)*dis);
                var x = (Math.sin(angle) * dis).toFixed(2) * 1;
                var y = (Math.cos(angle) * dis).toFixed(2) * 1;
                //wlobj.dispCtn.addChild(dan);
                var gt = P2Space.getSingle().addOneBall(wlobj.world, wlobj.dispCtn, zidan.x, zidan.y, 15, 0, p2.Body.DYNAMIC, zidan);
                gt.shapes[0].material = new p2.Material(Math.floor(Math.random() * 10000000 + 1));
                gt.mass = 0;
                gt.id = "6255" + Math.floor(Math.random() * 10000000 + 1);
                gt.name = gt.id;
                //gt.applyForce([danX, 0], [0, 0]);
                gt.applyImpulse([x, -y], [0, 0]); //.velocity[0] = danX;
                //gt.gravityScale = 0;
                //                 window['加弹力']({ "obj": gt });
                //                 window['刚体去碰撞']({obj:gt,target:"6255"})
                window.actt(gt, { "加弹力": {} });
                window.actt(gt, { "刚体去碰撞": { target: "6255" } });
            }
            else {
                zidan.name = "_" + a.wuti; //立刻产生碰撞
                if (a["addx"]) {
                    zidan.x = obj.x;
                    zidan.y = (obj.y - obj.anchorOffsetY) + (obj.height * zu[d - 1]);
                }
                else {
                    zidan.x = (obj.x - obj.anchorOffsetX) + (obj.width * zu[d - 1]);
                    zidan.y = obj.y;
                }
                var _y = zidan.y + a.addy;
                var _x = zidan.x + a.addx;
                if (obj.tpoint) {
                    _x = obj.tpoint.x;
                    _y = obj.tpoint.y;
                }
                else if (dandao > 2) {
                    var z = (dandao + 1) / 2;
                    if (a.addy || _y != obj.y) {
                        _x = _x + (d - z) * 100;
                    }
                    else {
                        _y = _y + (d - z) * 100;
                    }
                }
                if (!a.zdnro)
                    zidan.rotation = Jui.getSingle().fire(zidan.x, zidan.y, _x, _y) + a.ziro; //子弹旋转
                egret.Tween.get(zidan).to({ x: _x, y: _y }, Jui.getSingle().getTime(zidan.x, zidan.y, _x, _y, a.speed + (Math.random() * a.wait)), egret.Ease[a.ease]).call(cback, zidan, [a.wuti]);
            }
            if (!a["ptnxz"] && obj.tpoint)
                obj.rotation = Jui.getSingle().fire(zidan.x, zidan.y, obj.tpoint.x, obj.tpoint.y) + a.ptro; //炮台旋转
        }
    };
    var etfun = function () {
        timer.reset();
        Jui.getSingle().removeObjEvent(timer, egret.TimerEvent.TIMER, "fs1timerfun", obj);
        Jui.getSingle().removeObjEvent(timer, egret.TimerEvent.TIMER_COMPLETE, "etfun", obj);
    };
    if (a.type == 1 || a.type == 3) {
        if (a.stop == 0) {
            Jui.getSingle().addObjEventListener(obj, timer, egret.TimerEvent.TIMER, fs1timerfun, obj);
            Jui.getSingle().addObjEventListener(obj, timer, egret.TimerEvent.TIMER_COMPLETE, etfun, obj);
            timer.start();
            if (a.type == 3) {
                if (a.tarobj) {
                    obj.tpoint = new egret.Point(a.tarobj.x, a.tarobj.y);
                }
                else {
                    obj.tpoint = new egret.Point(a.x2, a.y2);
                }
            }
        }
    } //else {            
    if (T._ctrl("a").ai)
        jg_aj.ai = T._ctrl("a").ai;
    //  Jui.getSingle().removeObjEvent(pobj, egret.TouchEvent.TOUCH_BEGIN, "fs1timerfun", pobj, true);
    if (a.type == 2) {
        var fsdjfun = function (evevt) {
            if (a.stop == 1)
                return;
            var djpoint = Jui.getSingle().getziPoint(evevt.stageX, evevt.stageY, obj.parent);
            var point = Jui.getSingle().yssj(obj.x, obj.y, djpoint.x, djpoint.y);
            if (a["zd"])
                point = new egret.Point(djpoint.x, djpoint.y);
            obj.tpoint = point;
            if (a.num > 1 && a.num != 99999) {
                Jui.getSingle().addObjEventListener(obj, timer, egret.TimerEvent.TIMER, fs1timerfun, obj);
                Jui.getSingle().addObjEventListener(obj, timer, egret.TimerEvent.TIMER_COMPLETE, etfun, obj);
                timer.start();
            }
            else {
                fs1timerfun();
            }
            if (a.send && a.ex == undefined) {
                oaj.ex = evevt.stageX;
                oaj.ey = evevt.stageY;
                oaj.obj = obj.name;
                delete oaj.pobj;
                csend(["ss", { "ev": "发射( " + JSON.stringify(oaj) + " )" }, obj.name]);
            }
        };
        if (a.ex) {
            fsdjfun({ stageX: a.ex, stageY: a.ey });
        }
        else if (jg_aj.ai == 1) {
            if (!window["first"]) {
                window["first"] = 1;
                egret.setTimeout(function () { window.actt(T.findObj("游戏容器a"), { "弹一弹ai": {} }); }, this, Math.random() * 3000 + 6000);
            }
            else {
                window.actt(T.findObj("游戏容器a"), { "弹一弹ai": {} });
            }
        }
        else {
            if (!sj.clas[obj.name].idus || (sj.clas[obj.name].idus && sj.clas[obj.name].idus == jg_aj.idus)) {
                Jui.getSingle().removeObjEvent(pobj, a.touch, "fsdjfun", pobj);
                pobj.addEventListener(a.touch, fsdjfun, pobj);
            }
        }
    }
    //}
};
window['旋转'] = function (e) {
    var arr = T.ini({ time: 1000, loop: 99999, rotation: 360, cb: function () { return 0; } }, e);
    if (!arr) {
        console.log("tween\u6267\u884C\u5931\u8D25,id:" + e.obj.name);
        e.cb();
        return 0;
    }
    var obj = arr[0], a = arr[3];
    var act = [
        { "动作": "tween", "rotation": a.rotation, "time": a.time },
        { "loop": a.loop }
    ];
    T.dodz(obj, act, { clear: false });
    a.cb && a.cb();
    //tween(a);
    //a.cb && a.cb();
    // var action = e; action.time == undefined && (action.time = 1000);
    // let _action;
    // let _sleep = T.deval("sleep", e.obj.parent, action, { obj: e.obj }) || 0;
    // console.warn("旋转");
    // if (action["sole"]) {
    //     egret.Tween.removeTweens(e.obj);
    // }
    // _action = egret.Tween.get(e.obj, { loop: action["loop"] || false }).to({ rotation: (action["rotation"]||360) }, T.deval("time", e.obj.parent, action, { obj: e.obj }));
    // action["loop"] ? e.cb() : _action.call(e.cb);
};
window['翻转'] = function (e) {
    var arr = T.ini({ time: 1000, loop: 0, cb: function () { return 0; } }, e);
    if (!arr) {
        console.log("tween\u6267\u884C\u5931\u8D25,id:" + e.obj.name);
        e.cb();
        return 0;
    }
    var obj = arr[0], pobj = arr[1], a = arr[3];
    var _action;
    if (T.isEgret(obj)) {
        if (a["type"] == "上下") {
            _action = egret.Tween.get(obj, { loop: a.loop }).to({ scaleY: -1 }, a.time / 2).to({ scaleY: 1 }, a.time / 2);
        }
        else {
            _action = egret.Tween.get(obj, { loop: a.loop }).to({ scaleX: -1 }, a.time / 2).to({ scaleX: 1 }, a.time / 2);
        }
        a.loop ? a.cb() : _action.call(a.cb);
    }
    else {
        var doloop_1 = function () {
            //tween({obj:obj,"scaleX":(obj.scaleX==1?-1:1),"time":a.time,"cb":doloop})
            window.actt(obj, { "tween": { "scaleX": (obj.scaleX == 1 ? -1 : 1), "time": a.time, "cb": doloop_1 } });
            obj.scaleX = (obj.scaleX == 1 ? -1 : 1);
        };
        doloop_1();
        a.cb();
    }
};
window['震动'] = function (e) {
    var arr = T.ini({ time: 1000, loop: 0, eo: 0, rotation: [15, -15], cb: function () { return 0; } }, e);
    if (!(arr instanceof Array)) {
        return 1;
    }
    var obj = arr[0], pobj = arr[1], a = arr[3];
    var _action;
    _action = egret.Tween.get(obj, { loop: a.loop }).to({ rotation: (!a.eo ? obj.rotation : 0) + a.rotation[0] }, a.time / 4).to({ rotation: obj.rotation + 0 }, a.time / 4).to({ rotation: (!a.eo ? obj.rotation : 0) + a.rotation[1] }, a.time / 4).to({ rotation: (!a.eo ? obj.rotation : 0) + 0 }, a.time / 4);
    a.loop ? a.cb() : _action.call(a.cb);
};
window['落下'] = function (e) {
    var arr = T.ini({ time: 1000, loop: true, addy: 5, cb: function () { return 0; } }, e);
    if (!arr) {
        console.log("tween\u6267\u884C\u5931\u8D25,id:" + e.obj.name);
        e.cb();
        return 0;
    }
    var obj = arr[0], pobj = arr[1], a = arr[3];
    _action = egret.Tween.get(obj, { loop: true }).call(function (obj) { obj.y = obj.y + a.addy; }, this, [obj]);
    a.cb();
};
window['删除'] = function (e) {
    if (e.domid) {
        jex('#' + e.domid).remove();
        return;
    }
    var arr = T.ini({ time: 1000, cb: function () { return 0; }, type: 0 }, e);
    var obj = arr[0], a = arr[3];
    if (a.name)
        obj = T.findObj(a.name); //兼容不规范的命名
    if (obj && a["type"] == 0) {
        if (a.cleardata && obj.name.indexOf("-") > -1) {
            sj.jui[obj.name.split("-")[1]].data.splice([sj.jui[obj.name.split("-")[1]].data.findIndex(function (o) { return o._id == obj.name.split("-")[0]; })], 1);
        }
        if (T.isEgret(obj)) {
            if (obj.world) {
                Jui.getSingle().removeBody(obj);
            }
            else {
                Jui.getSingle().removeObj(obj);
            }
        }
        else {
            T.removeObj(obj);
        }
        if (egret.Capabilities.runtimeType == "web" && a.name && a.name.includes('分享页')) {
            jex('#jietuzi').remove();
        }
    }
    else if (a["type"] == 1) {
        if (T.isEgret(obj)) {
            Jui.getSingle().removeChildren(obj);
        }
        else {
            T.removeChildren(obj);
        }
    }
    else if (a["type"] == 2) {
        obj.oid = obj.name;
        obj.name = 'removed-' + (obj.name.split("-")[1]);
        obj.x = -1000;
        obj.y = -1000;
    }
    else if (a["type"] == 3) {
        if (obj.parent)
            obj.parent.removeChild(obj);
    }
    a.cb();
};
window['换图'] = function (e) {
    var arr = T.ini({ time: 1000, sleep: 0 }, e);
    if (!(arr instanceof Array)) {
        return 1;
    }
    //if (!arr) { console.log(`换图执行失败,id:${e.obj.name}`); e.cb(); return 0; }
    var obj = arr[0], a = arr[3];
    if (a.img != 0) {
        if (a.img.indexOf("(") == 0)
            a.img = (window.ifeval ? eval(a.img) : T.doeval(a.img));
        if (a.img.length == 13 && isNaN(a.img) == false) {
            a.img = "http://image.kxtui.com/pg/fi/" + (a.img + '').substring(0, 5) + "/" + a.img + ".png?";
        }
        if (a.img.indexOf('{') > -1) {
            var reg = /[\{]+([^\{\}]*)[\}]?/g;
            //var str = "userid  =  '{654}6546';pw = '123{456}789' ;";
            while (reg.exec(a.img)) {
                a.img = a.img.replace('{' + RegExp.$1 + '}', a[RegExp.$1]);
            }
        }
        // for (let o of objs) {
        var o = obj;
        if (a.send)
            csend(["", { dba: [o.name.split('-')[1].split('zi')[0], { 'style.bgimg': a.img }, { _id: obj.name.split('-')[0] }, {}] }, jg_aj.curproj + '_无']);
        if (T.isEgret(o)) {
            if (o instanceof egret.DisplayObjectContainer) {
                var zi = o.getChildByName(o.name + "ziImg");
                if (zi)
                    Jui.getSingle().setImg(zi, a.img);
            }
            else {
                Jui.getSingle().setImg(o, a.img);
            }
        }
        else {
            var bgimg = a.img.indexOf('_') != -1 ? jg_aj.res[a.img] : a.img;
            if (T.getp(o, "dom.style.background")) {
                jex().getv('csse', '') == 1 && alert(bgimg);
                bgimg.indexOf('url(') != 0 && (bgimg = 'url(' + bgimg + ')');
                o.dom.style.background = "" + bgimg + " 50% 50%/100% 100%";
            }
        }
        // }
    }
    a.cb && a.cb();
};
window['显隐'] = function (e) {
    var arr = T.ini({ time: 1000, vi: 1, ids: 0 }, e);
    var obj = arr[0], pobj = arr[1], a = arr[3];
    obj.visible = !obj.visible;
    a.cb && a.cb();
};
window['换帧动画'] = function (e) {
    var arr = T.ini({ time: 1000, sleep: 0 }, e);
    var obj = arr[0], pobj = arr[1], a = arr[3];
    if (!T.isEgret(obj)) {
        console.count('换帧动画H5');
        obj.janimation && obj.janimation.removeAction();
        var newAnimation_1 = new T.Janimation(jg_aj.res[a["png"]] || a["png"], jg_aj.res[a["json"]] || a["json"], obj.id, function () {
            newAnimation_1.playAction(0, 0, a["count"] == -1);
        });
        obj.janimation = newAnimation_1;
        e.cb();
        return 0;
    }
    //console.count('换帧动画egret')
    if (obj instanceof egret.DisplayObjectContainer)
        obj = obj.getChildByName(obj.name + "zimc");
    obj.stop();
    // var movie = new egret.MovieClipDataFactory(RES.getRes(action["json"]), RES.getRes(action["png"]))
    // obj.movieClipData = movie.generateMovieClipData();
    // //obj.anchorOffsetX = obj.width / 2;
    // //obj.anchorOffsetY = obj.height / 2;
    // obj.play(action["count"] || -1);
    Jui.getSingle().setMove(obj, a["json"] || obj.zjson, a["png"] || obj.zpng, a["count"] || obj.zcount, null, null, a["dz"] || obj.zdz, a["mcscx"] || null, a["mcscy"] || null);
    e.cb && e.cb();
};
window['更换显示状态'] = function (e) {
    var arr = T.ini({ time: 1000, sleep: 0 }, e);
    var obj = arr[0], pobj = arr[1], a = arr[3];
    a.name && (obj = sj.obj[T.findid(a.name)]);
    if (obj) {
        a.visible != undefined ? obj.visible = a.visible : obj.visible = !obj.visible;
    }
    _setTimeout(arr[3].cb, a.sleep);
};
window['执行代码'] = function (e) {
    var arr = T.ini({ time: 1000, sleep: 0 }, e);
    if (!arr) {
        console.log("\u6362\u56FE\u6267\u884C\u5931\u8D25,id:" + e.obj.name);
        e.cb();
        return 0;
    }
    var obj = arr[0], pobj = arr[1], a = arr[3];
    if (a.ssfun) {
        try {
            eval(a.ssfun);
        }
        catch (ex) {
            T.dofunc(a.ssfun);
        }
    }
    a.cb && a.cb();
};
window['网格放置'] = function (aj) {
    var arr = T.ini({}, aj, 1); //maxr 最大行数.  x0,y0搜寻中心点位置，
    if (!arr) {
        aj.cb && aj.cb();
        return 0;
    }
    var obj = arr[0], pobj = arr[1], a = arr[3];
    if (a.fw && obj.x0 && obj.y0) {
        obj.x = obj.x0;
        obj.y = obj.y0;
        return;
    }
    var roundx = a.roundx || a.round || obj.width;
    var lx = Math.floor((obj.x - obj.anchorOffsetX + roundx * 0.5) / roundx) * roundx + obj.anchorOffsetX;
    if (lx >= 0 && lx <= obj.parent.width)
        obj.x = lx;
    var roundy = a.roundy || a.round || obj.height;
    var ly = Math.floor((obj.y - obj.anchorOffsetY + roundy * 0.5) / roundy) * roundy + obj.anchorOffsetY;
    if (ly >= 0 && ly <= obj.parent.height)
        obj.y = ly;
    if (a.send)
        T.func(obj.name, { ev: 'dragstop', x1: obj.x, y1: obj.y });
};
window['跟随'] = function (aj) {
    var arr = T.ini({ ly: 1, lx: 1 }, aj);
    if (!arr) {
        aj.cb && aj.cb();
        return 0;
    }
    var obj = arr[0], a = arr[3];
    var zsobj = a.tarobj || T.findObj(a["gs"]);
    if (!zsobj) {
        if (obj["genshui"] && !hc["genshui"]) {
            Jui.getSingle().removeByValue(!hc["genshui"], obj["genshui"]);
            delete obj["genshui"];
        }
    }
    else if (obj["genshui"] && obj["genshui"] == zsobj) {
    }
    else if (obj["genshui"] && obj["genshui"] != zsobj) {
        obj["genshui"] = zsobj; //sj.obj[a["gs"]];
    }
    else {
        obj["genshui"] = zsobj; //sj.obj[a["gs"]];
        if (a["addx"]) {
            obj["genshuiaddx"] = a["addx"];
        }
        else {
            obj["genshuiaddx"] = 0;
        }
        if (a["addy"]) {
            obj["genshuiaddy"] = a["addy"];
        }
        else {
            obj["genshuiaddy"] = 0;
        }
        if (!hc["genshui"]) {
            hc["genshui"] = [];
        }
        else {
        }
        obj['lx'] = a.lx;
        obj['ly'] = a.ly;
        hc["genshui"].push(obj);
        var genshuifun = function (e) {
            for (var i = 0; i < hc["genshui"].length; i++) {
                var ls = hc["genshui"][i];
                if (ls.parent && ls["genshui"].parent) {
                    if (ls['lx'])
                        ls.x = ls["genshui"].x + ls["genshuiaddx"];
                    if (ls['ly'])
                        ls.y = ls["genshui"].y + ls["genshuiaddy"];
                }
                else {
                    hc["genshui"].splice(i, 1);
                    i--;
                }
            }
        };
        if (hc["genshui"].length == 1) {
            Main.i.addEventListener(egret.Event.ENTER_FRAME, genshuifun, this);
        }
    }
};
window['滑动'] = function (e) {
    var arr = T.ini({ x: e.obj.x, y: e.obj.y, w: e.obj.width, h: e.obj.height, objX: 0, objY: 0, ax: 0, ay: 0, HSP: "off", VSP: "on", overy: 100, hdw: 20, bounces: false, hd: 0, st: 0, autost: 0, hdbg: "http://image.kxtui.com/pg/fi/15121/1512183360406.png", hdbar: "http://image.kxtui.com/pg/fi/15121/1512183359993.png", time: 3000, cz: 0 }, e);
    //hdw  滑动侧边条的宽度 
    var obj = arr[0], pobj = arr[1], sobj = arr[2], a = arr[3];
    if (T.isEgret(obj)) {
        if (pobj.name.indexOf('fuSv') > -1)
            pobj = pobj.parent;
        var svobj = pobj.getChildByName(obj.name + "fuSv");
        if (!svobj) {
            svobj = new egret.ScrollView();
            svobj.name = obj.name + "fuSv";
            var n = pobj.$children.indexOf(obj);
            pobj.addChildAt(svobj, n);
            obj.parent.removeChild(obj);
        }
        else {
            svobj.scrollTop = 0;
        }
        svobj.x = T.deval('x', pobj, a);
        svobj.y = T.deval('y', pobj, a);
        svobj.width = T.deval('w', pobj, a);
        svobj.height = T.deval('h', pobj, a);
        svobj.anchorOffsetX = a.anchorOffsetX != null ? a.anchorOffsetX * svobj.width : svobj.width / 2;
        svobj.anchorOffsetY = a.anchorOffsetY != null ? a.anchorOffsetY * svobj.height : svobj.height / 2;
        svobj.horizontalScrollPolicy = a.HSP;
        svobj.oldHSP = a.HSP;
        svobj.verticalScrollPolicy = a.VSP;
        svobj.oldVSP = a.VSP;
        svobj.setContent(obj);
        obj.anchorOffsetX = obj.width * a.ax;
        obj.anchorOffsetY = obj.height * a.ay;
        obj.x = T.deval("objX", svobj, a); //a.objX;
        obj.y = T.deval("objY", svobj, a); //a.objY;
        if (a.cz)
            obj.parent.scrollLeft = 0;
        sj.obj[svobj.name] = svobj;
        sj.clas[svobj.name] = {};
        if (a.hdx) {
            svobj["ks"] = 1;
            var hdcbfun = function (e) {
                //this["y0"] = e.stageY;
                this['dy'] = 0;
            };
            var hdcmfun = function (e) {
                //console.log(e.stageY-this["y0"])
                if (!this['dy']) {
                    this["y0"] = e.stageY;
                    this['dy'] = 1;
                }
                if (e.stageY - this["y0"] < -50 && this["ks"] == 1) {
                    if (typeof a.hdx == "string") {
                        eval(a.hdx); // 类似 微信 显示小程序
                    }
                    if (typeof a.hdx == "object") {
                        window.actt(obj, a.hdx);
                    }
                    this["ks"] = 0;
                }
                else if ((svobj.scrollTop == 0 || svobj.scrollTop < 0) && !this["ks"]) {
                    if (typeof a.hds == "string") {
                        eval(a.hds);
                    }
                    if (typeof a.hds == "object") {
                        window.actt(obj, a.hds);
                    }
                    this["ks"] = 1;
                }
            };
            Jui.getSingle().removeObjEvent(svobj, egret.TouchEvent.TOUCH_END, "hdcbfun", svobj);
            svobj.addEventListener(egret.TouchEvent.TOUCH_END, hdcbfun, svobj);
            Jui.getSingle().removeObjEvent(svobj, egret.TouchEvent.TOUCH_MOVE, "hdcmfun", svobj);
            svobj.addEventListener(egret.TouchEvent.TOUCH_MOVE, hdcmfun, svobj);
        }
        if (a.oversend) {
            var hdjsfun = function () {
                var hdjl, dbjl, svjl;
                if (a.HSP == "on" && a.VSP == "off") {
                    hdjl = svobj.scrollLeft; //横向滑动距离
                    dbjl = obj.width;
                    svjl = svobj.width;
                }
                else {
                    hdjl = svobj.scrollTop;
                    dbjl = obj.height;
                    svjl = svobj.height;
                }
                if (dbjl < svjl)
                    dbjl = svjl;
                console.log('滑动超越距离' + (hdjl - dbjl + svjl));
                if ((hdjl - dbjl + svjl) > (a.overy)) {
                    if (T.cd("hdtime", a.time)) {
                        // if (a.oversend == 1) a.oversend = sj.jui.find(i => i.pid == obj.name)._id;
                        if (typeof a.ssfun == "object") {
                            window.actt(obj, a.ssfun);
                        }
                        else {
                            if (a.ssfun)
                                eval(a.ssfun);
                        }
                        if (a.oversend == 1) {
                            for (var _id in sj.jui) {
                                if (sj.jui[_id].pid == obj.name) {
                                    a.oversend = sj.jui[_id]._id;
                                    break;
                                }
                            }
                        }
                        if (a.oversend == 2 && T.findObj('GAC3_聊天标题zitext') && T.findObj('GAC3_聊天标题zitext').text != '我的') {
                            jg_aj.minichat = 1;
                            _setTimeout(function () { window.actt('聊天标题', { "群标题": {} }); }, 100);
                        }
                        else if (a.oversend == "no") {
                        }
                        else {
                            if (typeof a.oversend == "object") {
                                window.actt(obj, a.oversend);
                            }
                            else {
                                T.func(a.oversend);
                            }
                        }
                        console.log("超出范围");
                    }
                }
            };
            Jui.getSingle().removeObjEvent(svobj, egret.TouchEvent.TOUCH_END, "hdjsfun", svobj);
            svobj.addEventListener(egret.TouchEvent.TOUCH_END, hdjsfun, svobj);
        }
        svobj.bounces = a.bounces;
        if (a.hd) {
            var bg = JuiData.getzi([{ typ: 1, obj: obj, pobj: pobj, x: svobj.x - svobj.anchorOffsetX + svobj.width, y: svobj.y, w: a.hdw, h: svobj.height, _id: "scbg", png: a.hdbg }])[0];
            if (!bg.parent)
                pobj.addChild(bg);
            var mask = JuiData.getzi([{ typ: 1, obj: obj, pobj: pobj, x: svobj.x - svobj.anchorOffsetX + svobj.width, y: svobj.y, w: a.hdw, h: svobj.height, _id: "mask", png: a.hdbg }])[0];
            if (!mask.parent)
                pobj.addChild(mask);
            var bar = JuiData.getzi([{
                    typ: 1, obj: obj, anchorOffsetY: 0, pobj: pobj, x: svobj.x - svobj.anchorOffsetX + svobj.width, y: bg.y - bg.anchorOffsetY, w: a.hdw, h: bg.height *
                        (svobj.height / obj.height), _id: "scbar", png: a.hdbar
                }])[0];
            bar.mask = mask;
            if (a['9grid']) {
                bar.scale9Grid = new egret.Rectangle(a['9grid'].x, a['9grid'].y, a['9grid'].w, a['9grid'].h);
            }
            if (!bar.parent)
                pobj.addChild(bar);
            bar["sccy"] = bar.y;
            var bfun = function (e) {
                this[0]["scby"] = this[0].y;
                this[0]["scdy"] = e.stageY;
                this[3]["hd"] = 1;
            };
            var mfun = function (e) {
                var ly = this[0]["scby"] + (e.stageY - this[0]["scdy"]);
                if (ly > this[0]["sccy"] && (ly + this[0].height) < (this[1].y - this[1].anchorOffsetY + this[1].height)) {
                    this[0].y = ly;
                    this[3].setScrollTop(this[2].height * ((this[0].y - bar["sccy"]) / (this[3].height)));
                }
            };
            var efun = function (e) {
                this[3]["hd"] = 0;
            };
            bar.touchEnabled = true;
            Jui.getSingle().removeObjEvent(bar, egret.TouchEvent.TOUCH_BEGIN, bfun["name"], [bar, bg, obj, svobj]);
            Jui.getSingle().removeObjEvent(bar, egret.TouchEvent.TOUCH_BEGIN, mfun["name"], [bar, bg, obj, svobj]);
            Jui.getSingle().removeObjEvent(bar, egret.TouchEvent.TOUCH_END, efun["name"], [bar, bg, obj, svobj]);
            Jui.getSingle().removeObjEvent(bar, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, efun["name"], [bar, bg, obj, svobj]);
            bar.addEventListener(egret.TouchEvent.TOUCH_BEGIN, bfun, [bar, bg, obj, svobj]);
            bar.addEventListener(egret.TouchEvent.TOUCH_MOVE, mfun, [bar, bg, obj, svobj]);
            bar.addEventListener(egret.TouchEvent.TOUCH_END, efun, [bar, bg, obj, svobj]);
            bar.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, efun, [bar, bg, obj, svobj]);
            var gfun = function () {
                if (!this[3]["hd"]) {
                    this[0].y = bar["sccy"] + this[1].height * (this[3].scrollTop / this[2].height);
                }
            };
            Jui.getSingle().removeObjEvent(bar, egret.TouchEvent.CHANGE, gfun["name"], [bar, bg, obj, svobj]);
            svobj.addEventListener(egret.Event.CHANGE, gfun, [bar, bg, obj, svobj]);
        }
        setTimeout(function () { if (a.st)
            svobj.scrollTop = T.deval("st", obj, a); }, 300);
    }
    else {
        //从40index复制而来
        obj = obj.dom;
        obj.style.overflowX = a.HSP && a.HSP == 'off' ? 'hidden' : 'auto';
        obj.style.overflowY = a.VSP && a.VSP == 'off' ? 'hidden' : 'auto';
        //从40index复制而来 end
        //  let type = a.HSP ? (a.VSP ? 'scroll' : 'scrollLeft') : (a.VSP ? 'scrollTop' : '');
        // type && Draggable.create(`#${obj.id}`, { type, edgeResistance: 0.5, throwProps: true });
    }
    a.cb && a.cb();
    return 1;
};
window['播放音效'] = function (aj) {
    var arr = T.ini({ sleep: 0, count: 1, pauseTime: 0, resume: 0, cb: function () { return 0; }, stop: 0 }, aj);
    if (!(arr instanceof Array)) {
        return 1;
    }
    var obj = arr[0], a = arr[3];
    if (a.url.indexOf('(') == 0)
        a.url = (window.ifeval ? eval(a.url) : T.doeval(a.url));
    if (T.isEgret(obj)) {
        if (a.stop) {
            Jui.getSingle().stopMusic(obj);
        }
        else {
            Jui.getSingle().LoadMusic(a.url, obj, a.count, a.pauseTime, a.resume);
        }
    }
    else {
        if (a.stop) {
            T.stopAudio(a.url);
        }
        else {
            T.playAudio(a.url, aj.count == undefined ? 0 : a.count, a.url);
        }
    }
    //if(a.cb)a.cb()
    _setTimeout(a.cb, a.sleep);
};
window['文字阴影'] = function (aj) {
    var arr = T.ini({ scale: 2, qx: true, px: 50, py: 50 }, aj);
    if (!arr) {
        aj.cb && aj.cb();
        return 0;
    }
    var obj = arr[0], a = arr[3];
    jex(obj.dom).realshadow({
        followMouse: true,
        pageX: a.px, pageY: a.py,
        color: '0,0,0',
        type: 'text'
    });
};
window['阴影'] = function (aj) {
    var arr = T.ini({ scale: 2, qx: true, px: 50, py: 50, type: 'drop' }, aj);
    if (!arr) {
        aj.cb && aj.cb();
        return 0;
    }
    var obj = arr[0], a = arr[3];
    if (a.type == 'none') {
        return 0;
    }
    jex(obj.dom).realshadow({
        followMouse: a.qx,
        pageX: a.px, pageY: a.py,
        color: '0,0,0',
        type: a.type
    });
};
window['描边'] = function (aj) {
    /**
      * 描边
      * @param {json} aj
      * @param {int}  aj.zs      是否添加
      * @param {int}  aj.t       描边完成时间
      * @param {int}  aj.scolor  描边颜色
      * @param {int}  aj.sw      边大小
      */
    var arr = T.ini({ zs: 1, t: 1, scolor: "#eadd3a", sw: 2 }, aj);
    if (!arr) {
        aj.cb && aj.cb();
        return 0;
    }
    var obj = arr[0], a = arr[3];
    if (obj.svg == null) {
        return 0;
    }
    var pathObj = document.querySelector('#' + obj.id + ' svg path'); //path对象
    if (a.zs == 1) {
        var pathLength = pathObj.getTotalLength(); //得到path的总长度
        jex(pathObj).css({ "stroke": a.scolor, "stroke-width": a.sw, "stroke-dasharray": pathLength, "stroke-dashoffset": pathLength, "animation-duration": a.t + "s" }).attr("class", "tech");
    }
    else if (a.zs == 0) {
        jex(pathObj).attr("class", "");
    }
    return 1;
};
window['填充'] = function (aj) {
    var arr = T.ini({ img: 'http://www.kxtui.com/g/tji/resource/png/wave.gif', time: 1000, cb: function () { return 0; } }, aj);
    if (!arr) {
        aj.cb && aj.cb();
        return 0;
    }
    var obj = arr[0], a = arr[3], id = obj.id;
    jex(obj.bgsvg).html("<defs>\n        <pattern id=\"" + id + "zifill\" patternUnits=\"userSpaceOnUse\" width=\"100%\" height=\"100%\">\n            <image id=\"" + id + "\u586B\u5145image\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"" + a.img + "\" x=\"0\" y=\"100%\" width=\"100%\" height=\"100%\"></image>\n        </pattern>\n    </defs>" + jex(obj.bgsvg).html());
    jex(obj.bgsvg).find('[id$="zipath"]').attr({ 'fill': "url(#" + id + "zifill)", 'stroke': "#7fb7df" });
    (new TimelineMax).to(jex("#" + id + "\u586B\u5145image"), a.time * 0.001, { attr: { y: "0%" } });
    a.cb && a.cb();
};
window['横向排列'] = function (aj) {
    var arr = T.ini({ zs: 1, x: 0, y: 0, enter: '' }, aj);
    var obj = arr[0], a = arr[3];
    console.log('横向排列:' + obj.name);
    T.tzwz(obj, 0, a.x, a.y, a);
    a.cb && a.cb();
    return 1;
};
window['改变层级'] = function (aj) {
    var arr = T.ini({ ChildIndex: 1, cb: function () { return 0; } }, aj);
    if (!arr) {
        aj.cb && aj.cb();
        return 0;
    }
    var obj = arr[0], pobj = arr[1], a = arr[3];
    if (a.z)
        a.ChildIndex = a.z;
    if (obj.world) {
        obj = obj.displays[0];
        pobj = obj.parent;
    }
    pobj.setChildIndex(obj, a.ChildIndex);
    a.cb && a.cb();
};
window['计时'] = function (aj) {
    /**
     * 包含正计时与倒计时，每帧改变obj的text
     * @param {Boolean} aj.type - 为1 时间格式
     * @param {Boolean} aj.zs - 为false时停止计时器
     * @param {Number} [aj.time=1000] - 计时间隔（毫秒）
     * @param {Number} [aj.beginTime=10] - 时间，开始计时的时间（秒）
     * @param {Number} [aj.endTime=undefined] - 时间，结束计时的时间（秒），当endTime>beginTime时，认为是正计时
     * @param {String} aj.format - 改变obj的text的格式，将会把当前计时（秒）替换{time}
     * @param {Boolean} aj.restore - 是否恢复，即aj.zs为true，或者倒计时到0时，是否将text改为原来的ca
     * @param {Boolean} [aj.disable=false] - 是否在计时期间禁止点击
     * @param {Number} [aj.timestamp=db.gett()] - 计时的开始执行时间戳，用于同步服务器的时间，默认是当前时间
     * @param {Boolean} [aj.updateText=true] - 是否将时间更新到text
     */
    var arr = T.ini({ zs: true, time: 1000, beginTime: 10, format: '{time}', restore: false, disable: false, "tformat": "mm:ss", timestamp: db.gett(), updateText: true }, aj);
    if (!arr) {
        aj.cb && aj.cb();
        return 0;
    }
    var obj = arr[0], a = arr[3], starttime = db.gett() - 2; //如果不减去2，容易造成计数不连续
    var timername = obj.name + (obj.ridclas || '');
    jg_aj["计时starttime"] = jg_aj["计时starttime"] || {};
    jg_aj["计时starttime"][timername] = starttime;
    console.log(starttime + timername + " 计时 act 初始化时间 " + db.gett() + "db.t " + db.t + "db.t0 " + db.t0);
    a.beginTime = (a.beginTime + "").indexOf('(') == 0 ? (window.ifeval ? eval(a.beginTime) : T.doeval(a.beginTime)) : a.beginTime;
    var theobj = T.isEgret(obj) && (obj instanceof egret.DisplayObjectContainer) && obj.getChildByName(obj.name + 'zitext') ? obj.getChildByName(obj.name + 'zitext') : obj;
    // 没有传endTime时，若开始时间为0，认为是正计时，结束时间为一个很大的值。若开始时间不为0，认为是倒计时，结束时间为-1
    if (a.endTime == undefined)
        a.endTime = a.beginTime == 0 ? Number.MAX_SAFE_INTEGER : 0;
    var downtime = (a.beginTime - a.endTime > 0) ? 1 : -1; // 判断出是正计时还是倒计时
    // 根据a.timestamp计算真正的a.beginTime
    a.timestamp = typeof (a.timestamp) == "string" ? (a.timestamp.indexOf('(') == 0 ? (window.ifeval ? eval(a.timestamp) : T.doeval(a.timestamp)) : a.timestamp) : a.timestamp;
    a.beginTime = a.beginTime + downtime * (a.timestamp - db.gett()) * 0.001;
    obj.oldtext = theobj.text; // 保留初始文本
    var onclick = ""; // 保留点击事件（H5端）
    if (a.ssfun)
        obj.timessfun = a.ssfun;
    a.disable && (T.isEgret() ? obj.touchEnabled = false : (onclick = obj.dom.onclick, obj.dom.onclick = "")); // 取消点击监听
    // 如果已经到时间了，立刻回调
    if (a.beginTime + downtime * a.endTime <= 0) {
        console.log(timername + " 超时 结束计时 时间：" + a.beginTime + ' ' + jex().getdatetime(a.beginTime, 1));
        a.updateText && (theobj.text = a.format.replace('{time}', a.endTime));
        !a.zs && a.restore && (theobj.text = obj.oldtext || "");
        a.cb && a.cb();
        if (a.zs)
            return 1;
    }
    console.log(timername + " 开始计时 时间：" + a.beginTime + ' ' + jex().getdatetime(a.beginTime, 1));
    T.timer(obj, timername + "计时", { stop: !a.zs, time: a.time }, function () {
        var starttime = jg_aj["计时starttime"][timername];
        var curTime = a.beginTime - downtime * (db.gett() - starttime) * 0.001; // 计算出当前时间
        // console.log("时间："+curTime +" db.gett()-starttime="+(db.gett()+"-"+starttime+ "db.t "+db.t+"db.t0 "+db.t0 ));
        if (a.type != 1) {
            curTime = Math.floor(curTime);
        }
        else {
            curTime = Math.floor(curTime * 100) / 100;
        }
        (downtime == 1 && curTime < a.endTime || downtime == -1 && curTime > a.endTime) && (curTime = a.endTime); // 判断是否已超出结束时间
        var curTime2 = curTime;
        if (a.type == 1) {
            obj["curTime"] = curTime;
            console.log(curTime);
            curTime2 = T.time({ t: curTime * 1000, format: a.tformat });
            var n = curTime2.split(':');
            if (n.length == 3)
                curTime2 = n[0] + ":" + n[1] + ":" + ((n[2] / 100).toFixed(1)).replace(".", ""); //Math.floor(n[2]/100);
        }
        //  if(obj.ridclas=='元件_起点')console.log(timername+" curTime："+curTime+" ==a.endTime "+a.endTime)
        if (a.updateText)
            theobj.text = a.format.replace('{time}', curTime2); // 使用当前时间更改obj的文本
        if (curTime == a.endTime) {
            T.timer(obj, timername + "计时", { stop: true }); // 停止计时器
            a.restore && (theobj.text = obj.oldtext || ""); // 恢复初始文本
            a.disable && (T.isEgret() ? obj.touchEnabled = true : obj.dom.onclick = onclick); // 恢复点击监听
            //           if(a.loop&&T.findObj(obj.name)){//obj必须还存在 
            //             	 window.actt(null,{"计时":aj}) 
            //             	//window["计时"](aj);
            //           } 
            console.error(timername + " " + "正常结束计时 时间：" + a.beginTime + ' ' + jex().getdatetime(a.beginTime, 1));
            if (a.actt)
                Jui.getSingle().actt(obj, obj, a.actt);
            a.cb && a.cb();
        }
    });
    !a.zs && a.restore && (theobj.text = obj.oldtext || ""); // 删除计时时，若需要恢复，则恢复文案
    !downtime && a.cb && a.cb(); // 仅在非倒计时的情况下立即调用回调
};
window['表单'] = function (aj) {
    var arr = T.ini({ whe: "{'_id':_I.id}", t: '', q: {}, 'aj': { upsert: 1 }, idd: 'idd', curproj: '', encrypt: 'sha256', begineditf: 0 }, aj);
    if (!(arr instanceof Array)) {
        return 1;
    }
    var obj = arr[0], pobj = arr[1], a = arr[3];
    var idclas = '', errorMessage = '', propname = "";
    for (var name_1 in a) {
        if (!['obj', 'include', 'exclude', 'cb', 'event', 'if', 'whe', 'aj', 'q', 't', 'idd', 'curproj', 'begineditf', 'encrypt', 'loop', 'actname'].includes(name_1)) {
            var o = sj.obj[obj.name.split('_')[0] + '_' + name_1] || T.findObj(name_1) || jg_aj[name_1] || window[name_1] || jex().getv(name_1); //例如： window[name] = 表单:{"sj":{"wxres":"uri.wxres"}};    jex().getv(name) 表单:{"wxres":{"userInfo":""}}
            if (a.begineditf && o && !o.begineditf)
                o = null; //未修改保存 
            var props = a[name_1];
            if (typeof props == 'string')
                props = { 'ca': (props || 'uri') + '.' + name_1 };
            if (o) {
                for (var p in props) {
                    var key = window['表单'].MAP[p] || p;
                    if (props[p] == '')
                        props[p] = "uri." + name_1;
                    var ind = props[p].indexOf('.'); //玩家金币:{'ca':'玩家.金币'} name:{key: idclasname.propname}
                    var idclasname = props[p];
                    if (ind == -1 || key == '{eval}') {
                        propname = o.name.split('_')[1];
                        if (key == '{eval}')
                            idclasname = 'uri';
                    }
                    else {
                        propname = props[p].substring(ind + 1);
                        idclasname = props[p].substring(0, ind);
                    }
                    idclas = (idclasname == 'uri' || idclasname.indexOf("_") > 0) ? idclasname : ((a.curproj || jg_aj.topproj) + "_" + idclasname);
                    var value = o[key];
                    if (key == '{checked}')
                        value = T.findobjs({ checked: 1, id: name_1 }, a.idd);
                    if (key == '{time}')
                        value = new Date(o.text).getTime();
                    if (key == '{eval}')
                        value = (window.ifeval ? eval(props[p]) : T.doeval(props[p]));
                    if (key.indexOf("(") == 0)
                        value = (window.ifeval ? eval(key) : T.doeval(key));
                    var theclas = sj.clas[T.findid(o.name, { json: sj.clas })];
                    if (key == 'text' && T.isEgret(o) && theclas.typ == 3) {
                        value = (o.getChildByName(o.name + 'zitext') || { text: '' }).text;
                    }
                    // if(typeof value=="object") value=JSON.stringify(value); 2019.9.26 注释
                    if (isNaN(value) || (value + '').indexOf('0x') == 0 || theclas.style && (theclas.style.input == 2 || !theclas.style.input)) {
                        if (typeof value == "string")
                            value = value.trim();
                    }
                    else {
                        value = (value + '').indexOf('.') > -1 ? parseFloat(value) : parseInt(value);
                    }
                    // 加上 !theclas.style.input 因为类似 gac3的手机输入是 用锤子
                    if (a.isnum) {
                        value = value.indexOf('.') > -1 ? parseFloat(value) : parseInt(value);
                    }
                    if (name_1.includes("手机"))
                        value = value + '';
                    ['x', 'width'].includes(p) && (value = (value / pobj.width * 100).toFixed(2) + '%');
                    ['y', 'height'].includes(p) && (value = (value / pobj.height * 100).toFixed(2) + '%');
                    // 特殊处理 保护密码、邮箱、手机的jui
                    if (name_1.includes("密码") && (value + "").length < 32) {
                        a.q['密码长度'] = (value + "").length;
                        a.encrypt == 'sha256' && typeof (sha256) != 'undefined' && (value = sha256(value + ""));
                        a.encrypt == 'md5' && typeof (hex_md5) != 'undefined' && (value = hex_md5(value + ""));
                        if (T.findObj('密码打钩'))
                            T.findObj('密码打钩').visible && jex().cookie.set('pw', value); // 加密后的密码存在cookie
                        if (T.findObj('登录帐号'))
                            jex().cookie.set('account', T.findObj('登录帐号zitext').text); // 同时尝试保存登录帐号
                    }
                    if (name_1.includes("邮箱") && !T.isMailAddress(value)) {
                        jex().jalert("邮箱格式不对");
                        return 0;
                        a.cb && a.cb();
                    }
                    if (name_1.includes("手机") && (value + '').length != 11) {
                        jex().jalert("手机格式不对" + value);
                        return 0;
                        a.cb && a.cb();
                    }
                    a.q[propname] = value;
                }
            }
        }
    }
    var data = { "dba": [a.t || idclas, a.q, a.whe, a.aj] };
    csend(["", data, obj.name, jg_aj.Sneedi, jg_aj.Ci]);
    a.cb && a.cb();
};
window['表单'].MAP = {
    "ca": "text",
    "w": "width",
    "h": "height"
};
window['呼吸'] = function (aj) {
    var arr = T.ini({ scaleX: 1.2, scaleY: 1.2, time: 1000, loop: 999999 }, aj);
    if (!arr) {
        aj.cb && aj.cb();
        return 0;
    }
    var obj = arr[0], pobj = arr[1], a = arr[3];
    if (a.zs) {
        T.undodz(obj.name);
        return;
    }
    var osx = obj.scaleX, osy = obj.scaleY;
    //     let act = [
    //         //{"动作":"放大","scaleX":osx+a.scaleX,"scaleY":osy+a.scaleY,"time":a.time*0.5},
    //         //{"动作":"放大","scaleX":osx-a.scaleX,"scaleY":osy-a.scaleY,"time":a.time*0.5},
    //         { "动作": "tween", "scaleX": a.scaleX, "scaleY": a.scaleY, "time": a.time * 0.5 },
    //         { "动作": "tween", "scaleX": osx, "scaleY": osy, "time": a.time * 0.5 },
    //         { "loop": a.loop }
    //     ];
    //     T.dodz(obj, act, { clear: false });
    egret.Tween.get(obj, { loop: true }).to({ "scaleX": a.scaleX, "scaleY": a.scaleY }, a.time * 0.5).to({ "scaleX": osx, "scaleY": osy }, a.time * 0.5);
    a.cb && a.cb();
};
window['改文字'] = function (aj) {
    if (aj.subfun == '输入手机号' && window['输入手机号']) {
        window['输入手机号'](aj);
        return;
    }
    var arr = T.ini({ text: "", add: 0, attrname: "text" }, aj);
    if (!(arr instanceof Array)) {
        return 1;
    }
    var obj = arr[0], pobj = arr[1], a = arr[3];
    if (T.isEgret(obj) && obj instanceof egret.DisplayObjectContainer && a.attrname == "text") {
        obj = obj.getChildByName(obj.name + "zitext");
    }
    if (!obj)
        return;
    if (a.default)
        if (obj.text != a.default)
            return; //默认值？？
    if (obj.text == obj.mr)
        obj.text = "";
    if (a.fromobj) {
        var fromobj = T.findObj(a.fromobj);
        if (fromobj)
            a.text = fromobj.text || fromobj.getChildByName(fromobj.name + "zitext").text; //egret  无法直接 .text
    }
    if (!a.text && a.text != 0) {
        a.text = aj.obj.text;
    }
    var text = (a.text + "").indexOf('(') == 0 ? (window.ifeval ? eval(a.text) : T.doeval(a.text, obj)) : a.text;
    if (a.add) {
        if (text == '-') {
            obj.text = obj.text.substring(0, obj.text.length - 1);
        }
        else
            obj.text += text;
    }
    else {
        var attra = a.attrname.split(".");
        var theobj = (attra[0] == 'window' ? window : obj);
        if (attra.length == 1)
            theobj[attra[0]] = text;
        if (attra.length >= 3) {
            theobj[attra[1]] = theobj[attra[1]] || {};
            if (attra.length == 3)
                theobj[attra[1]][attra[2]] = text;
        }
        if (attra.length >= 4) {
            theobj[attra[1]][attra[2]] = theobj[attra[1]][attra[2]] || {};
            theobj[attra[1]][attra[2]][attra[3]] = text;
        }
    }
    if (a.bgcolor) {
        if (T.isEgret(obj)) {
            var aobj = obj.parent.getChildByName(obj.parent.name + "zibg");
            Jui.getSingle().setShape(aobj, 1, { "color": a.bgcolor, "x": aobj.x, "y": aobj.y, "w": aobj.width, "h": aobj.height });
        }
        else {
            obj.bgcolor = a.bgcolor;
        }
    }
    if (a.textColor) {
        if (T.isEgret(obj)) {
            obj.textColor = a.textColor;
        }
        else {
            jex('#' + obj.name + 'zitext_0').css('color', a.textColor.replace('0x', '#'));
        }
    }
    a.cb && a.cb();
    return 1;
};
window['刷新'] = function (aj) {
    aj = aj || {};
    // 在末尾加t=时间戳，不然在微信里不能生效。
    if (aj.zs) {
        aj.cb && aj.cb();
        return 1;
    }
    if (aj.redirectUrl) {
        window.location.href = aj.redirectUrl;
        aj.cb && aj.cb();
        return 1;
    }
    var shref = aj.url;
    if (aj.ymaid) {
        shref = jex().getUrl('ymaid', jex().cookie.get('aid'), aj.url);
        shref = jex().getUrl('nickname', encodeURIComponent(T._my()["昵称"]), shref);
        shref = jex().getUrl('headimgurl', encodeURIComponent(T._my()["头像"].split('//')[1]), shref);
        shref = jex().getUrl('mobi', T._my()["手机"], shref);
        shref = jex().getUrl('ref', encodeURIComponent(lurl), shref);
    }
    if (aj.ref) {
        //shref = jex().getUrl('t', Date.now(), aj.url || window.location.href);
        shref = jex().getUrl('ref', encodeURIComponent(lurl), aj.url);
    }
    if (jex().getv('from') == 'xcx' && document.location.protocol != 'https:') {
        //window['剪切板']({ obj: (aj.obj || '用户'), text: shref, sm: '已复制链接，请在浏览器中打开。' })
        window.actt((aj.obj || '用户'), { "剪切板": { text: shref, sm: '已复制链接，请在浏览器中打开。' } });
        return;
    }
    if (aj.target) {
        if (aj.target.indexOf('场景') > -1) {
            csend(["", { dba: ["用户", { "房间": jex().getv('roomid', '6666', shref) }, "{idus:I}", { "upsert": 1 }] }, jg_aj.curproj + "_" + aj.target]);
        }
        else {
            window.open(shref, aj.target);
        }
    }
    else {
        window.location.href = shref || window.location.href;
    }
    aj.cb && aj.cb();
    return 1;
};
window['准备'] = function (aj) {
    var a = T.merge({ limit: 100 }, aj);
    var kzrq = jg_aj.topproj + "_控制容器" + (a.abc || T.dqcj());
    if (T.ctrl()['准备数'] >= a.limit)
        return;
    if (T.ctrl()['房间'] != "1000")
        csend(["", { "ef": "s:邀请观战", "dba": [kzrq, { "准备[]": jg_aj.idus, "准备数()": "_r.准备.length" }, "{_id:{$ne:null}}", { retqa: ['准备数'] }] }, kzrq]);
    if (typeof YYStartGame != 'undefined')
        YYStartGame();
};
window['显示'] = function (e) {
    var arr = T.ini({ time: 1000, vi: 1 }, e);
    if (!(arr instanceof Array)) {
        return 1;
    }
    var obj = arr[0], pobj = arr[1], a = arr[3];
    if (!e.obj && obj.name.includes("游戏容器"))
        return;
    obj.$setVisible(a.vi ? true : false);
    var title = pobj ? pobj.$children.find(function (i) { return i.name == obj.name + 'zititle0'; }) : null;
    if (title)
        title.visible = a.vi ? true : false;
    if (a.cb)
        a.cb();
};
window['隐藏'] = function (e) {
    e.vi = 0;
    //window['显示'](e)
    window.actt(e.obj, { "显示": e });
};
window['换底色'] = function (aj) {
    /**
     * 将obj的底色换成给的值
     * @param {String} aj.color - 颜色字符串
     */
    var arr = T.ini({ color: "0xffffff", cb: function () { return 0; } }, aj);
    if (!arr) {
        aj.cb && aj.cb();
        return 0;
    }
    var obj = arr[0], a = arr[3];
    if (T.isEgret(obj)) {
        //console.log('白鹭未实现 换底色');
        var bgshape = obj.getChildByName(obj.name + "zibg");
        Jui.getSingle().setShape(bgshape, 2, { color: window["T"].color(a.color, "0x"), x: 0, y: 0, w: obj.width, h: obj.height });
        aj.cb && aj.cb();
        return 0;
    }
    else {
        // 暂不管svg的底色
        obj.dom.style.backgroundColor = T.color(a.color);
        aj.cb && aj.cb();
        return 1;
    }
};
window['调用相册'] = function (aj) {
    //qm：图片保存子目录，pg下的文件夹名字
    //picid：保存到oss上的图片名字 调用相册({"upsert":1,"picid":"hongbao","qm":"app",domain:"http://www.kxtui.com"})
    //例子：http://image.kxtui.com/pg/[qm]/[picid].png
    var arr = T.ini({ ow: aj.obj && aj.obj.width || 80, bili: 1, "upsert": 0, "picid": "", "qm": "", domain: "" }, aj);
    var obj = arr[0], pobj = arr[1], a = arr[3];
    if (window["windowjs"]) {
        toapp({ "actname": "toapp", "act": "换图", "arj": { "msg": "{photo}", "id": jg_aj.idus, "obj": obj.name, "img": "{img}", "picid": a.picid, "qm": a.qm, "send": a.upsert } });
        return;
    }
    var mime = { 'png': 'image/png', 'jpg': 'image/jpeg', 'jpeg': 'image/jpeg', 'bmp': 'image/bmp' };
    //var mime = { 'png': 'image/png', 'jpg': 'image/jpg', 'jpeg': 'image/jpg', 'bmp': 'image/bmp' };
    var selectedHandler;
    var thisRef;
    var tmpSelectFile = function (evt) {
        var file = evt.target.files[0];
        var type = file.type || a.type;
        if (!type) {
            type = mime[file.name.match(/\.([^\.]+)$/i)[1]];
        }
        EXIF.getData(file, function () {
            EXIF.getAllTags(file);
            Orientation = EXIF.getTag(file, 'Orientation');
            var reader = new FileReader();
            var tmpLoad = function () {
                var re = /^data:base64,/;
                var ret = this.result + '';
                if (re.test(ret))
                    ret = ret.replace(re, 'data:' + mime[type] + ';base64,');
                var image = new Image();
                image.src = ret;
                image.onload = function () {
                    var expectWidth = this.naturalWidth * a.bili;
                    var expectHeight = this.naturalHeight * a.bili;
                    if (a.Max && (expectHeight > a.Max || expectWidth > a.Max)) {
                        var bili = a.Max / expectHeight;
                        if (expectWidth > expectHeight) {
                            bili = a.Max / expectWidth;
                        }
                        expectWidth = expectWidth * bili;
                        expectHeight = expectHeight * bili;
                    }
                    var canvas = document.createElement("canvas");
                    var ctx = canvas.getContext("2d");
                    canvas.width = expectWidth;
                    canvas.height = expectHeight;
                    ctx.drawImage(this, 0, 0, expectWidth, expectHeight);
                    var base64 = null;
                    if (Orientation == 6) {
                        rotateImg(this, 'left', canvas, expectWidth, expectHeight);
                    }
                    else if (Orientation == 8) {
                        rotateImg(this, 'right', canvas, expectWidth, expectHeight);
                    }
                    else if (Orientation == 3) {
                        rotateImg(this, 'right', canvas, expectWidth, expectHeight); //转两次 
                        rotateImg(this, 'right', canvas, expectWidth, expectHeight);
                    }
                    base64 = canvas.toDataURL(type, 0.8);
                    var fext = type.replace('image/', '');
                    var yobj;
                    if (T.isEgret() && obj) {
                        if (obj instanceof egret.DisplayObjectContainer) {
                            yobj = obj;
                            obj = obj.getChildByName(obj.name + "ziImg");
                        } //设置base64图片
                        Jui.getSingle().setBase64Tu(obj, base64, a.ow);
                    }
                    else {
                        //window['换图']({ obj, "img": base64 })
                        window.actt(obj, { "换图": { "img": base64 } });
                    }
                    if (a.upsert) {
                        var picid_1 = (obj.name.split("-")[0] || jg_aj.idus);
                        if (obj.name.split("-").length == 1)
                            picid_1 = new Date().getTime();
                        uploader.uploadBase64({ dataStr: base64, picid: a.picid || picid_1, fext: fext, "domain": (a.domain || window.location.origin), qm: a.qm, func: function (img) {
                                fext = (fext == "jpeg" ? "jpg" + '?' + Date.now() : fext + '?' + Date.now());
                                var newImgSrc = uploader.getBase64Path({ picid: a.picid || picid_1, fext: fext, qm: a.qm });
                                console.log(newImgSrc);
                                obj.bgimg = newImgSrc;
                                //  T.findObj('截图页图片2').text=newImgSrc;
                                if (typeof a.ssfun == "object") {
                                    window.actt(obj, a.ssfun);
                                }
                                else {
                                    if (a.ssfun)
                                        eval(a.ssfun);
                                }
                                if (!a.nsj) {
                                    if (a.sj) {
                                        csend(["", { "dba": ["uri", { "bgimgpath": newImgSrc + "?" + Date.now() }, "{'_id':_I.id}", { "upsert": 1 }], "logs": 1 }, yobj.name]);
                                    }
                                    else {
                                        csend(["", { dba: [obj.name.split('-')[1].split('zi')[0], { 'style.bgimg': newImgSrc }, { _id: obj.name.split('-')[0] }, {}] }, jg_aj.curproj + '_无']);
                                    }
                                }
                                a.cb && a.cb();
                                // 表单({'whe':"{'idus':I}",'obj':obj,'截图页图片2':{'ca':'用户.绘图链接'}})
                            } });
                    }
                    else {
                        a.cb && a.cb();
                    }
                    var fileInput = document.getElementById("fileInput") || document.createElement("input");
                    fileInput.removeEventListener('change', tmpSelectFile);
                };
            };
            reader.onload = tmpLoad;
            reader.readAsDataURL(file);
        });
    };
    var selectImage = function () {
        var fileInput = document.getElementById("fileInput" + Math.random());
        if (fileInput == null) {
            fileInput = document.createElement("input");
            fileInput.id = "fileInput";
            fileInput.type = "file";
            fileInput.accept = "image/*";
            fileInput.style.height = "0px";
            fileInput.style.display = "block";
            fileInput.style.overflow = "hidden";
        }
        document.body.insertBefore(fileInput, document.body.firstChild);
        fileInput.addEventListener('change', tmpSelectFile, false);
        fileInput.click();
    };
    selectImage();
    function rotateImg(img, direction, canvas, width, height) {
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        //alert(img); 
        //最小与最大旋转方向，图片旋转4次后回到原方向   
        var min_step = 0;
        var max_step = 3;
        //var img = document.getElementById(pid);   
        if (img == null)
            return;
        //img的高度和宽度不能在img元素隐藏后获取，否则会出错   
        if (!height)
            height = img.height;
        if (!width)
            width = img.width;
        //var step = img.getAttribute('step');   
        var step = 2;
        if (step == null) {
            step = min_step;
        }
        if (direction == 'right') {
            step++;
            //旋转到原位置，即超过最大值   
            step > max_step && (step = min_step);
        }
        else {
            step--;
            step < min_step && (step = max_step);
        }
        //img.setAttribute('step', step);   
        /*var canvas = document.getElementById('pic_' + pid);
        if (canvas == null) {
            img.style.display = 'none';
            canvas = document.createElement('canvas');
            canvas.setAttribute('id', 'pic_' + pid);
            img.parentNode.appendChild(canvas);
        }  */
        //旋转角度以弧度值为参数   
        var degree = step * 90 * Math.PI / 180;
        var ctx = canvas.getContext('2d');
        switch (step) {
            case 0:
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0);
                break;
            case 1:
                canvas.width = height;
                canvas.height = width;
                ctx.rotate(degree);
                ctx.drawImage(img, 0, -height, width, height);
                break;
            case 2:
                canvas.width = width;
                canvas.height = height;
                ctx.rotate(degree);
                ctx.drawImage(img, -width, -height, width, height);
                break;
            case 3:
                canvas.width = height;
                canvas.height = width;
                ctx.rotate(degree);
                ctx.drawImage(img, -width, 0, width, height);
                break;
        }
    }
    return 1;
};
window['清空'] = function (e) {
    var arr = T.ini({ time: 1000, iftop: 0, cleardata: 0 }, e);
    var obj = arr[0], pobj = arr[1], sobj = arr[2], a = arr[3];
    var idclas = "";
    if (a.cleardata && sobj.length > 0) {
        idclas = sobj[0].name;
        if (idclas.indexOf('-') > -1)
            idclas = idclas.split('-')[1];
        if (sj.jui[idclas])
            sj.jui[idclas].data = [];
    }
    if (a.clearhtml) {
        for (var item in sj.obj) {
            if (item.split('-')[1] == idclas) {
                for (var ii in sj.obj) {
                    if (ii.split('-')[0] == item.split('-')[0]) {
                        delete sj.obj[ii];
                        delete sj.clas[ii];
                    }
                }
                delete sj.clas[item];
                delete sj.obj[item];
            }
        }
        jex(obj.dom).html('');
    }
    else {
        T.removeChildren(obj);
    }
    var fuSv = T.findObj(obj.name + 'fuSv');
    if (a.iftop == 1 && fuSv) {
        fuSv.scrollTop = 0;
        fuSv.scrollLeft = 0;
    }
    if (a.cb)
        a.cb();
};
window['时刻倒计'] = function (aj) {
    /**
     * 返回距离下一个规定时刻的时分秒
     * etime 毫秒  600000表示每个10分时刻 如 10：10：00   10：20：00   10：30：00
     */
    var arr = T.ini({ etime: 600000, ntime: 0, mycb: null }, aj);
    if (!arr) {
        aj.cb && aj.cb();
        return 0;
    }
    var obj = arr[0], pobj = arr[1], a = arr[3];
    var nextTime = a.ntime || (parseInt(db.gett() / a.etime) + 1) * a.etime; //下一个时刻
    if (a.ca)
        nextTime = sj.clas[obj.name].ca; //按当前存储的ca来计算
    var quTime = (nextTime - db.gett()) * 0.001; //当前时刻与规定时刻间隔多少秒
    jg_aj.timer = jg_aj.timer || {};
    if (jg_aj.timer[obj.name])
        clearInterval(jg_aj.timer[obj.name]);
    jg_aj.timer[obj.name] = setInterval(function () {
        var day = 0, hour = 0, minute = 0, second = 0; //时间默认值
        if (quTime > 0) {
            day = Math.floor(quTime / (60 * 60 * 24));
            hour = Math.floor(quTime / (60 * 60)) - (day * 24);
            minute = Math.floor(quTime / 60) - (day * 24 * 60) - (hour * 60);
            second = Math.floor(quTime) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
        }
        hour = day * 24 + hour;
        if (hour <= 9)
            hour = '0' + hour;
        if (minute <= 9)
            minute = '0' + minute;
        if (second <= 9)
            second = '0' + second;
        //将计算好的时间显示出来
        obj = T.isEgret(obj) && (obj instanceof egret.DisplayObjectContainer) && obj.getChildByName(obj.name + 'zitext') ? obj.getChildByName(obj.name + 'zitext') : obj;
        obj.text = ((hour > 0 ? (hour + ":") : "") + minute + ":" + second);
        quTime--;
        if (quTime <= 0) {
            clearInterval(jg_aj.timer[obj.name]);
            //aj.mycb && aj.mycb();
            //window['时刻倒计'](aj);
            window.actt(obj, { "时刻倒计": aj });
        }
    }, 1000);
    aj.cb && aj.cb();
    return 1;
};
window['剪切板'] = function (aj) {
    /**
     * 该方法将通过调用clipboard类库实现复制(某元件文字/指定文本)到剪切板的功能
     * 依赖于clipboard.min.js
   
     * @param {String} [aj.text] - 指定文本
     */
    var arr = T.ini({ "sm": "已复制到剪切板", "ssfun": "" }, aj);
    if (typeof (ClipboardJS) == 'undefined') {
        alert('依赖文件clipboard.min.js未加载 in 剪切板');
        aj.cb && aj.cb();
        return 0;
    }
    var obj = arr[0], pobj = arr[1], a = arr[3];
    var text = a.text || obj.text;
    a.eval && (text = (window.ifeval ? eval(a.eval) : T.doeval(a.eval)));
    if (T.isEgret(obj) && egret.Capabilities.runtimeType != "web" || jex().getv("csse4", '') == '4') {
        //window.toapp({obj,act:"弹窗",arj:{msg:"复制到剪切板成功 {clip}"+text+"{clip}" } });
        window.actt(obj, { "toapp": { act: "弹窗", arj: { msg: "复制到剪切板成功 {clip}" + text + "{clip}" } } });
        jex().jalert(a.sm);
        return;
    }
    // 由于该库必须由点击某个dom触发，这里创建一个临时的dom
    var dom = document.createElement('div');
    dom.setAttribute('data-clipboard-text', text);
    var clipboard = new ClipboardJS(dom);
    clipboard.on('success', function (e) {
        if (a.ssfun == "") {
            jex().jalert(a.sm);
            console.log(e);
        }
        else {
            if (typeof a.ssfun == "object") {
                window.actt(obj, a.ssfun);
            }
            else {
                if (a.ssfun)
                    eval(a.ssfun);
            }
        }
    });
    clipboard.on('error', function (e) {
        //
        if (a.ssfun == "") {
            jex().jalert('复制到剪切板失败');
        }
        else {
            if (typeof a.ssfun == "object") {
                window.actt(obj, a.ssfun);
            }
            else {
                if (a.ssfun)
                    eval(a.ssfun);
            }
        }
        console.log(e);
        //alert(JSON.stringify(e))
    });
    jex(dom).click();
    _setTimeout(function () {
        clipboard.destroy();
    }, 100);
    a.cb && a.cb();
    return 1;
};
window['退出登录'] = function (aj) {
    /**
    * 退出登录，通过分配一个新的aid然后刷新页面实现
    * @param {String} [idc=jg_aj.sj.idc] - 分配完aid后，传入jaimain的idc
    */
    var arr = T.ini({ idc: jg_aj.sj.idc, refresh: 1 }, aj);
    var obj = arr[0], pobj = arr[1], a = arr[3];
    jg_aj.Sneedi = 1;
    jg_aj.Ci = 1;
    ws.ifopen = 0;
    ws.close();
    //;T.mndj('信息关闭按钮');
    if (a.aid || a.newaid)
        jaimain(a.idc, a.aid || T.aid()); //需要切换指定aid，或设一个全新的aid才做！  
    if (db.gett() - jex().cookie.get("退出登录") < 5000)
        return;
    jex().cookie.set("退出登录", db.gett());
    if (a.refresh)
        setTimeout(function () { window.actt(null, { "刷新": { url: jex().getUrl('aid', '') } }); }, 50); //window['刷新']({url:jex().getUrl('aid','')});//去掉url上的强迫登录。
    return 1;
};
window['拖放'] = function (aj) {
    var arr = T.ini({ "bubbles": false, bili: 1, send: 0, swap: 1 }, aj);
    if (!arr) {
        aj.cb && aj.cb();
        return 0;
    }
    var obj = arr[0], pobj = arr[1], a = arr[3];
    var timer = obj["catimer"];
    var timerfun = function () {
        hc[this.name + "tf"] = true;
        pobj.parent.verticalScrollPolicy = pobj.parent.horizontalScrollPolicy = 'off';
        timer.reset();
        if (a.scale)
            this.scaleY = this.scaleX = a.scale;
    };
    var tftbfun = function (evevt) {
        this["nofunc"] = true;
        pobj.setChildIndex(this, -1);
        if (a.lp) {
            evevt.stopImmediatePropagation(); //拖放的时候，阻止后层的滑动
            if (!timer)
                timer = new DateTimer(500, 1);
            timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, timerfun, obj);
            timer.start();
        }
        else {
            hc[obj.name + "tf"] = true;
        }
        this['x0'] = this.x;
        this['y0'] = this.y;
        this['stageX'] = evevt.stageX;
        this['stageY'] = evevt.stageY;
        if (typeof a.bssfun == "object") {
            window.actt(obj, a.bssfun);
        }
        else {
            if (a.bssfun)
                eval(a.bssfun);
        }
        if (a.scale && !a.lp)
            this.scaleY = this.scaleX = a.scale;
    };
    var tftmfun = function (evevt) {
        console.log(hc[obj.name + "tf"]);
        if (hc[this.name + "tf"]) {
            if (a.lp)
                evevt.stopImmediatePropagation();
            var ly = evevt.stageY - this['stageY'];
            var lx = evevt.stageX - this['stageX'];
            this.x = this['x0'] + lx * a.bili / this.parent.scaleX;
            this.y = this['y0'] + ly * a.bili / this.parent.scaleY;
            if (a.k)
                this.x = 480 - a.k * this.y;
            if (a.send == 1 && T.ctrl('a')['准备数'] > 1)
                window["T"].func(this.name, { x1: this.x, y1: this.y, stopp: 200 });
            if (typeof a.mssfun == "object") {
                window.actt(obj, a.mssfun);
            }
            else {
                if (a.mssfun)
                    eval(a.mssfun);
            }
        }
    };
    var tftefun = function (evevt) {
        if (a.lp && timer) {
            pobj.parent.horizontalScrollPolicy = pobj.parent.oldHSP;
            pobj.parent.verticalScrollPolicy = pobj.parent.oldVSP;
            timer.reset();
        }
        if (a.scale) {
            this.scaleX = 1;
            this.scaleY = 1;
        }
        evevt.stopPropagation();
        hc[this.name + "tf"] = false;
        if (a.za && Jui.getSingle().AccurateHitTest(this, T.findObj(a.za))) {
            this.x = this['x0'];
            this.y = this['y0'];
        }
        if (typeof a.essfun == "object") {
            window.actt(obj, a.essfun);
        }
        else {
            if (a.bssfun)
                eval(a.essfun);
        }
        if (a.round) {
            var roundx = a.roundx || this.width;
            var lx = Math.floor((this.x) / roundx) * roundx + this.anchorOffsetX;
            if (lx >= 0 && lx <= this.parent.width)
                this.x = lx;
            var roundy = a.roundx || this.height;
            var ly = Math.floor((this.y) / roundy) * roundy + this.anchorOffsetY;
            if (ly >= 0 && ly <= this.parent.height)
                this.y = ly;
        }
        if (this.x == this["x0"] && this.y == this["y0"]) {
            this["nofunc"] = false; //当作是点击
            return;
        }
        //      var xx=Math.floor(this.x/this.width);
        //      var yy=Math.floor(this.y/this.height);
        //      var upobj,mergeobj;
        //       var ifup=0;
        //        if(a.up){//可以安放在另外一个元件上面
        //           for(let upobjname in a.up){
        //           	if(T.inname(obj,upobjname)){//发现本obj需要判断的
        //               	 upobj=	window.actt(null,{"找位置":{include:a.up[upobjname],x0:xx  ,y0: yy }})//window["找位置"]({include:a.up[upobjname],x0:xx  ,y0: yy  });
        //                 if( upobj.length==0){
        //                    this.x = this['x0'];  this.y = this['y0'];
        //                 	return;
        //                 }else{
        //                 	ifup=1;//找到安放
        //                 }
        //             }
        //           }
        //        }
        //       var  ifmerge=0;
        //        if(a.merge||obj.merge){//可以合并在另外一个元件里面         	 
        //           	if(obj.merge||T.inname(obj,a.merge)){//发现本obj需要判断的
        //               	 mergeobj=	window.actt(null,{"找位置":{include:a.merge||obj.ridclas.split('_')[1],x0: xx ,y0: yy }})//window["找位置"]({include:a.merge||obj.ridclas.split('_')[1],x0: xx ,y0: yy  });
        //                 if(mergeobj.length>=2){
        //                   var tobj=obj==mergeobj[0]?mergeobj[1]:mergeobj[0];
        //                   if(sj.clas[tobj.name]["等级"]==sj.clas[obj.name]["等级"]){
        //                   		//window["合并动画"]({obj:tobj,tobj:obj,send:1})
        //                     	window.actt(tobj,{"合并动画":{tobj:obj,send:1}})
        //                 		a.send=0;//合并中已经将本obj删除
        //                     	 ifmerge=1;
        //                   }    
        //                 }
        //             }          
        //        }          
        //            if( !ifmerge ){ //upobj.length==0 && 
        //              		var tobja= window.actt(null,{"找位置":{include:'元件项',x0: xx ,y0: yy}})//window["找位置"]({include:'元件项',x0: xx ,y0: yy  });
        //            			if(!ifup &&tobja &&tobja.length==2||ifup &&tobja.length==3 ) {
        //                       var tobj=obj==tobja[0]?tobja[1]:tobja[0];
        //                       //window["交换位置"]({obj,tobj,send:1});
        //                       window.actt(null,{"交换位置":{tobj,send:1}})
        //                       a.send=0;
        //                     }
        //            }
        //           if(obj.zg){
        //             var objs=window.actt(obj,{"找附近位置":{include:"地板",r1:0}})//windwo["找附近位置"]({include:"地板",r1:0,obj});
        //                  objs=objs.concat(window.actt(obj,{"找附近位置":{include:"地板",x0:Math.floor(obj.x0/obj.width),y0:Math.floor(obj.y0/obj.height)}}))//windwo["找附近位置"]({include:"地板",obj,x0:Math.floor(obj.x0/obj.width),y0:Math.floor(obj.y0/obj.height) }));             
        //               //window["生成围墙"]({obj,objs })
        //             	window.actt(obj,{"生成围墙":{objs}})
        //           }    
        if (a.send == 1) {
            T.func(this.name, { ev: 'dragstop', x1: this.x, y1: this.y });
        }
        //       	if(T.inname(obj,"地板")){
        //           	pobj.setChildIndex(this,1)
        //         }
    };
    var jobj = obj;
    if (a.jobj)
        jobj = T.findObj(a.jobj);
    Jui.getSingle().removeObjEvent(jobj, egret.TouchEvent.TOUCH_BEGIN, "tftbfun", obj);
    Jui.getSingle().removeObjEvent(jobj, egret.TouchEvent.TOUCH_MOVE, "tftmfun", obj);
    Jui.getSingle().removeObjEvent(jobj, egret.TouchEvent.TOUCH_END, "tftefun", obj);
    Jui.getSingle().removeObjEvent(jobj, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, "tftefun", obj);
    if (!a.stop && !obj.notf) {
        obj.addEventListener(egret.TouchEvent.TOUCH_BEGIN, tftbfun, obj, a.bubbles);
        jobj.addEventListener(egret.TouchEvent.TOUCH_MOVE, tftmfun, obj, a.bubbles);
        jobj.addEventListener(egret.TouchEvent.TOUCH_END, tftefun, obj, a.bubbles);
        jobj.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, tftefun, obj, a.bubbles);
    }
};
window['飘血效果'] = function (aj) {
    var arr = T.ini({ font: "ziti1_fnt", jhp: 1, wait: 1000, size: 30, textColor: "0xff0000", addy: 100, time: 700, addx: 100, bold: false }, aj);
    var obj = arr[0], pobj = arr[1], a = arr[3];
    a.jhp = [].concat(a.jhp);
    var hpText;
    if (a.font) {
        hpText = { typ: 10, font: a.font, x: obj.x, scaleX: 1.2, scaleY: 1.2, y: obj.y - obj.height / 2, Textfield: { textColor: 0xff0000, size: 30 }, ca: "" + a.jhp[0], obj: obj, pobj: obj.parent };
    }
    else {
        hpText = { typ: 4, x: obj.x, scaleX: 1.2, scaleY: 1.2, y: obj.y - obj.height / 2, Textfield: { textColor: a.textColor, size: a.size, bold: a.bold }, ca: "" + a.jhp[0], obj: obj, pobj: obj.parent };
    }
    var hpobj = JuiData.getzi([hpText], 1, true)[0];
    obj.parent.addChild(hpobj);
    hpobj.name = "zi_hp";
    if (a.loop) {
        hpobj.nextn = 0;
        egret.Tween.get(hpobj, { loop: true }).to({ alpha: 1 }).to({ x: hpobj.x + a.addx, y: hpobj.y + (Math.floor(Math.random() * a.addy - 50)), alpha: 0 }, 3000).wait(a.wait).call(function () {
            this.text = a.jhp[this.nextn % a.jhp.length];
            this.nextn++;
        }, hpobj);
    }
    else {
        egret.Tween.get(hpobj).to({ x: hpobj.x + a.addx, y: hpobj.y + (Math.floor(Math.random() * a.addy - 50)), alpha: 0 }, a.time).call(function () { Jui.getSingle().removeObj(this); }, hpobj);
    }
    a.cb && a.cb();
    return 1;
};
window['弹窗'] = function (e) {
    if (typeof e == "string")
        e = { msg: e };
    var arr = T.ini({ tarobj: jg_aj.topproj + "_弹窗", msg: '', menb: 0, margY: 20, ifgb: 1, btn: { '确定': "", "关闭": "" }, autoclose: 0, func: 0, autoAdjust: 1 }, e);
    if (!(arr instanceof Array)) {
        return 1;
    }
    var obj = arr[0], pobj = arr[1], a = arr[3];
    var tarobj = T.findObj(a.tarobj);
    if (!tarobj) {
        jex().jalert(a.msg, null, a);
        return;
    }
    var oname = tarobj.name.split('＃')[0];
    var menb = tarobj.getChildByName(oname + "zimenb");
    if (menb)
        menb.visible = a.menb ? true : false;
    window.actt(tarobj, { "显示": {} }); //window['显示']({ obj: tarobj });
    if (a.autoclose)
        _setTimeout(function () { window.actt(tarobj, { "隐藏": {} }); }, a.autoclose || 3000);
    T.isEgret(tarobj) && tarobj.parent.setChildIndex(tarobj, -1);
    if (a.titl)
        window.actt(oname + "标题", { "改文字": { text: a.titl } }); //window['改文字']({ obj: oname + "标题", text: a.titl });
    if (a.msg.indexOf('(') == 0)
        a.msg = (window.ifeval ? eval(a.msg) : T.doeval(a.msg));
    window.actt(oname + "正文", { "改文字": { text: a.msg || " " } }); //window['改文字']({ obj: oname + "正文", text: a.msg });
    //   window.actt("弹窗输入容器",{"清空":{}})
    if (typeof a.input == 'object') {
        var juia = sj.jui[jg_aj.topproj + "_" + "弹窗输入"];
        var h = T.findObj("弹窗输入容器").height;
        juia.data = [];
        for (var z in a.input) {
            var data = a.input[z];
            var d = { "_id": z, "style": { "vi": 1, "title": { "ca": z }, "Textfield": { "maxChars": data["长度"] || null, "restrict": data["类型"] || null } } };
            juia.data ? juia.data.push(d) : (juia.data = [].concat(d));
        }
        if (juia) {
            setJui([[""], [juia], jg_aj.topproj + "_无"]);
            T.isEgret(tarobj) && T.tzwz(T.findObj("弹窗输入容器"), 0, "20%", 0, { "marginY": a.margY, "adjustHeight": 1 });
        }
        h = T.findObj("弹窗输入容器").height - h;
        T.findObj("弹窗").height += h;
        T.findObj("弹窗ziImg") && (T.findObj("弹窗ziImg").height += h);
        T.findObj("弹窗按钮容器").y += h;
    }
    else if (a.input) {
        if (a.input != 1)
            T.findObj("弹窗输入zitext").maxChars = a.input;
        window.actt(oname + "输入容器", { "显示": {} });
        window.actt(oname + "输入", { "显示": {} }); //window['显示']({ obj: oname + "输入" });
        a.btn["关闭"] = a.btn["关闭"] || "uri()";
    }
    else {
        window.actt(oname + "输入容器", { "隐藏": {} }); //window['隐藏']({ obj: oname + "输入" });
    }
    T.findObj("弹窗按钮容器") && T.findObj("弹窗按钮容器").$children.forEach(function (child) { return child.visible = false; });
    T.findObj(oname + "确定").visible = a.btn["确定"] == "" ? false : true;
    T.findObj(oname + "关闭").visible = a.btn["关闭"] == "0" ? false : true;
    var pl = 0;
    for (var i in a.btn) {
        var tarobj_1 = T.findObj(oname + i);
        if (!tarobj_1) {
            pl = 1;
            var gwclas = sj.jui[jg_aj.topproj + "_" + "弹窗关闭"];
            var d = { "_id": i, "ca": i };
            gwclas.data = [].concat(d);
            setJui([[""], [gwclas], jg_aj.topproj + "_无"]);
            tarobj_1 = T.findObj(i + "-" + jg_aj.topproj + "_" + "弹窗关闭");
        }
        !['确定', '关闭'].includes(i) && (tarobj_1.visible = true);
        var tcfun = function () {
            var that = this + '';
            try {
                if (!T.isEgret(this) && !(typeof this == 'string'))
                    that = jex(this).attr('id').substr(-2); //原先使用e.target判断无效
            }
            catch (e) { }
            ;
            var sbtn = a.btn[that];
            if (typeof sbtn == 'object') {
                window.actt(obj, sbtn);
            }
            else {
                sbtn = sbtn + '';
                if (sbtn.indexOf("(") == -1) {
                    //无括号表示一个元件名
                    if (a.btn[that] != "") {
                        if ((a.btn[that] + '').indexOf('_') == -1)
                            a.btn[that] = jg_aj.topproj + "_" + a.btn[that];
                        if (e.obj && e.obj.name && e.obj.name.indexOf("-") > -1) {
                            T[a.func ? 'func' : 'mndj'](e.obj.name.split("-")[0] + "-" + a.btn[that]);
                        }
                        else {
                            T[a.func ? 'func' : 'mndj'](a.btn[that]);
                        }
                    }
                    //  } else if (sbtn == 'uri()') {//直接缓存到_I  
                    //      window['表单']({ obj, "弹窗输入": { 'ca': 'uri.' + (obj.ridclas || oname).split('_')[1] } })//"弹窗输入":""=="弹窗输入":{ca:'uri.弹窗输入'}
                }
                else if (sbtn == '表单()' || sbtn == 'uri()' || sbtn == '用户()') {
                    var bdjson = { obj: obj, whe: '{idus:I}' };
                    if (typeof a.input == 'object') {
                        for (var z in a.input) {
                            bdjson[z + "-" + jg_aj.topproj + "_弹窗输入"] = { 'ca': a.input[z].ca || (sbtn.split('()')[0] + '.' + z) };
                        }
                    }
                    else {
                        bdjson["弹窗输入"] = { 'ca': sbtn.split('()')[0] + '.' + (obj.ridclas || oname).split('_')[1] };
                    }
                    window.actt(obj, { "表单": bdjson }); //window['表单'](bdjson)
                }
                else {
                    eval(a.btn[that]);
                }
            }
        };
        if (window.Jui && T.isEgret(tarobj_1)) {
            Jui.getSingle().removeObjEvent(tarobj_1, egret.TouchEvent.TOUCH_TAP, "tcfun", i);
            tarobj_1.addEventListener(egret.TouchEvent.TOUCH_TAP, tcfun, i);
        }
        else {
            jex(tarobj_1.dom).off('click');
            jex(tarobj_1.dom).on('click', tcfun);
        }
    }
    //     window["actt"](jg_aj.topproj+"_弹窗关闭",{"显隐":{"vi":a.ifgb}});
    if (pl)
        T.tzwz(T.findObj("弹窗按钮容器"), 0, 0, 0, a);
    a.cb && a.cb();
};
window['手机震动'] = function (aj) {
    var arr = T.ini({ time: 100 }, aj);
    var obj = arr[0], pobj = arr[1], a = arr[3];
    if (window["windowjs"] == 2) {
        if (a.time < 400) {
            window[window["pf"]].vibrateShort();
        }
        else {
            window[window["pf"]].vibrateLong();
        }
        return;
    }
    else if (window["windowjs"] == 1) {
        //toapp({"act":"","arj":{"msg":"{vibrate}","time":400}})
        window.actt(null, { "toapp": { "act": "", "arj": { "msg": "{vibrate}", "time": 400 } } });
        return;
    }
    if (jex().isMobile() && navigator.vibrate)
        navigator.vibrate(a.time);
    a.cb && a.cb();
};
window['切换'] = function (aj) {
    var arr = T.ini({ func: 0, mndj: 0, showhide: 0, cd: 0 }, aj);
    var obj = arr[0], pobj = arr[1], a = arr[3];
    if (a.tarobj && a.tarobj.indexOf('topproj') == 0)
        a.tarobj = a.tarobj.replace('topproj', jg_aj.topproj);
    var tarobj = T.findObj(a.tarobj);
    if (a.tarobj && !tarobj) {
        if (a.tarobj == 'pobj.选中')
            tarobj = T.findObj(pobj['选中']);
    }
    a.send = a.send || a.csend;
    var argjson = {};
    if (a.xy)
        argjson = { x1: obj.x, y1: obj.y, ev: "uri" };
    if (a.func) {
        T.func(obj.name, argjson);
    }
    else if (a.mndj) {
        T.mndj(tarobj || obj);
    }
    else if (!tarobj || a.send == 2) {
        if (a.send) {
            if (a.tarobj && !a.tarobj.includes('_'))
                a.tarobj = jg_aj.curproj + '_' + a.tarobj;
            if (a.showhide && tarobj && tarobj.visible) {
            }
            else {
                csend(["", {}, a.tarobj || obj.name]);
            }
        }
        else {
            T.func(obj.name);
        }
    }
    if (a.showhide) {
        if (a.d) {
            idclas = T.hqyjm(tarobj.name);
            var tjui = sj.jui[idclas];
            var dd = sj.jui[T.hqyjm(pobj.name)].data.filter(function (jui) { return jui._id == obj.name.split('-')[0]; });
            tjui.data = T.dcopy(dd);
            if (jg_aj.lastxypid == pobj.name) {
                tarobj.visible = !tarobj.visible;
                return;
            }
            jg_aj.lastxypid = pobj.name;
            tjui.data[0].pid = pobj.name;
            tjui.data[0].style.vi = 1;
            tjui.data[0].style.y = obj.y;
            delete tjui.data[0].style.h;
            Jui.getSingle().removeObj(tarobj);
            var stra1 = getclass([tjui]);
            setJui([[], stra1]);
        }
        else {
            if (tarobj)
                window.actt(tarobj.name, { "显隐": {} });
        }
    }
    else {
        if (tarobj)
            window.actt(tarobj.name, { "显示": {} });
    }
    a.cb && a.cb();
    return 1;
};
window['粒子特效'] = function (aj) {
    var arr = T.ini({ count: -1 }, aj);
    if (!arr) {
        aj.cb && aj.cb();
        return 0;
    }
    var obj = arr[0], pobj = arr[1], a = arr[3];
    var jobj = pobj;
    if (a.tj)
        jobj = obj;
    var system = jobj.getChildByName(obj.name + "zilizi");
    if (system) {
        system.stop();
        jobj.removeChild(system);
    }
    var png;
    var json;
    var data = { png: png, json: json };
    a["png"] = window["T"].getResUrl(a["png"]);
    a["json"] = window["T"].getResUrl(a["json"]);
    if (a["png"].indexOf('/') > -1) {
        RES.getResByUrl(a["png"], function (png, url) {
            data.png = png;
            RES.getResByUrl(a["json"], function (json, url) {
                data.json = json;
                setdata(data);
                return system;
            }, data, RES.ResourceItem.TYPE_JSON);
        }, data, RES.ResourceItem.TYPE_IMAGE);
    }
    else {
        data.png = RES.getRes(a["png"]);
        data.json = RES.getRes(a["json"]);
        setdata(data);
        return system;
    }
    console.log(data);
    a.time == undefined && a.cb && a.cb();
    function setdata(data) {
        try {
            system = new particle.GravityParticleSystem(data.png, data.json);
            system.name = obj.name + "zilizi";
            system.x = obj.x;
            system.y = obj.y;
            if (a["emitterX"])
                system.emitterX = a["emitterX"];
            if (a["emitterY"])
                system.emitterY = a["emitterY"];
            if (a["maxParticles"])
                system.maxParticles = a["maxParticles"];
            if (a["emissionRate"])
                system.emissionRate = a["emissionRate"];
            system.anchorOffsetX = system.width / 2;
            system.anchorOffsetY = system.height / 2;
            if (a["lx"] != undefined)
                system.x = Jui.getSingle().deval("lx", jobj, a);
            if (a["ly"] != undefined)
                system.y = Jui.getSingle().deval("ly", jobj, a);
            if (a["x"])
                system.x = a["x"];
            if (a["y"])
                system.y = a["y"];
            if (a["wz"] == "hou") {
                pobj.addChildAt(system, 0);
                pobj.removeChild(e.obj);
                pobj.addChildAt(e.obj, -1);
            }
            else {
                jobj.addChild(system);
            }
            if (a["lzdata"]) {
                for (var i in a["lzdata"]) {
                    system[i] = a["lzdata"][i];
                }
            }
            system.start(a.count);
            if (a["time"]) {
                egret.setTimeout(function (system) {
                    system.stop();
                    if (system.parent && a.remove)
                        system.parent.removeChild(system);
                    a.cb && a.cb();
                }, this, a["time"], system);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
};
window['to微信'] = function (e) {
    // 具体api参考https://developers.weixin.qq.com/minigame/dev/api/
    if (egret.Capabilities.runtimeType != "wxgame" && egret.Capabilities.runtimeType != "qqgame") {
        console.error("该方法仅在微信/qq小游戏下可用");
        e.cb && e.cb();
        return 0;
    }
    var arr = T.ini({ classn: window["pf"] || "wx", bili: 0.55, type: "shareAppMessage", fileurl: "imageUrl", ajson: { query: {} }, cbname: "complete", attrname: "wxres" }, e);
    if (!(arr instanceof Array)) {
        return 1;
    }
    var obj = arr[0], a = arr[3];
    if (a.type.includes("share") || a.type.includes("Share")) {
        if (!a.ajson.imageUrl || typeof a.ajson.imageUrl == "object") {
            if (window.canvas && a.type.includes("share"))
                a.ajson.imageUrl = canvas.toTempFilePathSync(a.ajson.imageUrl || {});
        }
        a.ajson.query.tidus = jg_aj.idus;
        a.ajson.query = Object.keys(a.ajson.query).map(function (k) { return k + "=" + a.ajson.query[k]; }).join("&");
        if (a.type == 'shareAppMessage')
            jg_aj.sj["分享t"] = db.gett();
    }
    var actt = {};
    if (a.acttobj) {
        actt = a.acttobj;
    }
    if (['createBannerAd', 'createRewardedVideoAd', 'createInterstitialAd'].includes(a.type)) {
        if (a.vi != 0 && !window[a.ajson.adUnitId]) {
            if (a.type == 'createBannerAd') {
                var si = wx.getSystemInfoSync();
                // 对于宽高比过高的手机不执行广告  iphone 6p 414/736≈0.5625
                if (si.screenWidth / si.screenHeight > a.bili)
                    return 1;
                a.ajson.style = a.ajson.style || {};
                typeof (a.ajson.style.left) == 'string' && (a.ajson.style.left = T.deval("x", { width: si.screenWidth, height: si.screenHeight }, { "x": a.ajson.style.left }));
                typeof (a.ajson.style.top) == 'string' && (a.ajson.style.top = T.deval("y", { width: si.screenWidth, height: si.screenHeight }, { "y": a.ajson.style.top }));
                typeof (a.ajson.style.width) == 'string' && (a.ajson.style.width = T.deval("w", { width: si.screenWidth, height: si.screenHeight }, { "w": a.ajson.style.width }));
                typeof (a.ajson.style.height) == 'string' && (a.ajson.style.height = T.deval("h", { width: si.screenWidth, height: si.screenHeight }, { "h": a.ajson.style.height }));
            }
            window[a.ajson.adUnitId] = wx[a.type](a.ajson);
            window[a.ajson.adUnitId].onError && window[a.ajson.adUnitId].onError(function (err) {
                console.log("广告" + a.ajson.adUnitId + "报错", err);
                jg_aj.sj.wxerror = err;
                window.actt(obj, a.erracttobj);
            });
            window[a.ajson.adUnitId].onClose && window[a.ajson.adUnitId].onClose(function (res) {
                jg_aj.sj[a.attrname] = res;
                window.actt(obj, actt);
            });
        }
        if (a.vi != undefined && window[a.ajson.adUnitId]) {
            if (a.vi) {
                var proms = window[a.ajson.adUnitId].show();
                if (a.type == 'createRewardedVideoAd') {
                    proms.catch(function () {
                        // 失败重试
                        window[a.ajson.adUnitId].load()
                            .then(function () { return window[a.ajson.adUnitId].show(); })
                            .catch(function (err) {
                            console.log('激励视频 广告显示失败', err);
                        });
                    });
                }
                if (a.type == 'createInterstitialAd') {
                    proms.catch(function (err) {
                        console.error('插屏广告显示失败', err);
                    });
                }
            }
            else
                window[a.ajson.adUnitId].hide && window[a.ajson.adUnitId].hide();
        }
        return;
    }
    if (a.type == 'createUserInfoButton') {
        var si = wx.getSystemInfoSync();
        a.ajson.style = a.ajson.style || {};
        typeof (a.ajson.style.left) == 'string' && (a.ajson.style.left = T.deval("x", { width: si.screenWidth, height: si.screenHeight }, { "x": a.ajson.style.left }));
        typeof (a.ajson.style.top) == 'string' && (a.ajson.style.top = T.deval("y", { width: si.screenWidth, height: si.screenHeight }, { "y": a.ajson.style.top }));
        typeof (a.ajson.style.width) == 'string' && (a.ajson.style.width = T.deval("w", { width: si.screenWidth, height: si.screenHeight }, { "w": a.ajson.style.width }));
        typeof (a.ajson.style.height) == 'string' && (a.ajson.style.height = T.deval("h", { width: si.screenWidth, height: si.screenHeight }, { "h": a.ajson.style.height }));
        //         var btn = window['微信授权按钮'] = window['wx'].createUserInfoButton(a.ajson);
        //         btn.onTap(function (res) {
        //             jg_aj.sj[a.attrname] = res;
        //             window.actt(obj, actt);
        //             btn.destroy();
        //         });
        //         return;
    }
    var topobject = window[a.classn];
    if (a.classn.indexOf('.') > -1) {
        var classna = a.classn.split('.');
        topobject = window[classna[0]][classna[1]];
        if (classna.length == 3)
            topobject = window[classna[0]][classna[1]][classna[2]];
    }
    if (topobject && topobject[a.type]) {
        if (a.evt) {
            var btn = topobject[a.type](a.ajson);
            btn[a.evt](function (res) {
                jg_aj.sj[a.attrname] = res;
                window.actt(obj, actt);
                btn.destroy();
            });
            return;
        }
        if (a.cbname == "function") {
            topobject[a.type](function (res) {
                jg_aj.sj[a.attrname] = res;
                window.actt(obj, actt);
                if (a.ajson) {
                    if (!a.ajson[a.fileurl] || typeof a.ajson[a.fileurl] == "object") {
                        a.ajson[a.fileurl] = canvas.toTempFilePathSync(a.ajson[a.fileurl] || {});
                    }
                    console.log("a.ajson", a.ajson);
                    return a.ajson;
                }
            });
        }
        else {
            if (a.cbname)
                a.ajson[a.cbname] = function (res) { jg_aj.sj[a.attrname] = res; window.actt(obj, actt); };
            topobject[a.type](a.ajson);
        }
    }
    else {
        window.actt(obj, actt);
    }
};
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
        descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
} } return function (Constructor, protoProps, staticProps) { if (protoProps)
    defineProperties(Constructor.prototype, protoProps); if (staticProps)
    defineProperties(Constructor, staticProps); return Constructor; }; }();
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
} }
var binding = {};
(function () {
    //////////////////////////File:binding/compiler/structs/CallParams.js///////////////////////////
    var CallParams = function () {
        function CallParams() {
            _classCallCheck(this, CallParams);
            this.type = "callParams";
            this.list = [];
        }
        _createClass(CallParams, [{
                key: "addParam",
                value: function addParam(expr) {
                    this.list.push(expr);
                }
            }, {
                key: "addParamAt",
                value: function addParamAt(expr, index) {
                    this.list.splice(index, 0, expr);
                }
            }, {
                key: "checkPropertyBinding",
                value: function checkPropertyBinding(commonInfo) {
                    for (var i = 0; i < this.list.length; i++) {
                        this.list[i].checkPropertyBinding(commonInfo);
                    }
                }
            }, {
                key: "getValueList",
                value: function getValueList() {
                    var params = [];
                    for (var i = 0; i < this.list.length; i++) {
                        params.push(this.list[i].getValue());
                    }
                    return params;
                }
            }]);
        return CallParams;
    }();
    //////////////////////////End File:binding/compiler/structs/CallParams.js///////////////////////////
    //////////////////////////File:binding/compiler/structs/DeviceStmt.js///////////////////////////
    var DeviceStmt = function () {
        function DeviceStmt() {
            _classCallCheck(this, DeviceStmt);
        }
        _createClass(DeviceStmt, [{
                key: "checkPropertyBinding",
                value: function checkPropertyBinding(commonInfo) { }
            }, {
                key: "getValue",
                value: function getValue() {
                    return null;
                }
            }]);
        return DeviceStmt;
    }();
    //////////////////////////End File:binding/compiler/structs/DeviceStmt.js///////////////////////////
    //////////////////////////File:binding/compiler/structs/Expr.js///////////////////////////
    var Expr = function () {
        function Expr(type) {
            var expr1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var expr2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var expr3 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            _classCallCheck(this, Expr);
            this.type = type;
            this.expr1 = expr1;
            this.expr2 = expr2;
            this.expr3 = expr3;
            if (type == "int") {
                this.expr1 = parseInt(expr1);
            }
            if (type == "string") {
                this.expr1 = this.expr1.slice(1, this.expr1.length - 1);
            }
        }
        _createClass(Expr, [{
                key: "checkPropertyBinding",
                value: function checkPropertyBinding(commonInfo) {
                    if (this.type == "Atr") {
                        this.expr1.checkPropertyBinding(commonInfo);
                    }
                    else if (this.expr1 && (this.expr1 instanceof Expr || this.expr1 instanceof ExprAtr)) {
                        this.expr1.checkPropertyBinding(commonInfo);
                    }
                    if (this.type == "spfor") {
                        commonInfo.specialFor = this.expr1.getValue();
                    }
                    if (this.expr2 && (this.expr2 instanceof Expr || this.expr2 instanceof ExprAtr)) {
                        this.expr2.checkPropertyBinding(commonInfo);
                    }
                    if (this.expr3 && (this.expr3 instanceof Expr || this.expr3 instanceof ExprAtr)) {
                        this.expr3.checkPropertyBinding(commonInfo);
                    }
                    if (this.type == "spfor") {
                        commonInfo.specialFor = null;
                    }
                }
            }, {
                key: "getValue",
                value: function getValue(params) {
                    if (this.type == "Atr") {
                        return this.expr1.getValue(params);
                    }
                    if (this.type == "int") {
                        return this.expr1;
                    }
                    if (this.type == "0xint") {
                        return this.expr1;
                    }
                    if (this.type == "number") {
                        return +this.expr1;
                    }
                    if (this.type == "boolean") {
                        return this.expr1;
                    }
                    if (this.type == "string") {
                        return this.expr1;
                    }
                    if (this.type == "+a") {
                        return this.expr1.getValue(params);
                    }
                    if (this.type == "-a") {
                        return -this.expr1.getValue(params);
                    }
                    if (this.type == "!") {
                        return !this.expr1.getValue(params);
                    }
                    if (this.type == "*") {
                        return this.expr1.getValue(params) * this.expr2.getValue(params);
                    }
                    if (this.type == "/") {
                        return this.expr1.getValue(params) / this.expr2.getValue(params);
                    }
                    if (this.type == "%") {
                        return this.expr1.getValue(params) % this.expr2.getValue(params);
                    }
                    if (this.type == "+") {
                        return (params && params.inverse ? -1 : 1) * this.expr1.getValue(params) + this.expr2.getValue(params);
                    }
                    if (this.type == "-") {
                        if (this.expr2.type == "+") {
                            return this.expr1.getValue({ inverse: true }) - this.expr2.getValue({ inverse: true });
                        }
                        if (this.expr2.type == "-") {
                            return this.expr1.getValue({ inverse: true }) + this.expr2.getValue({ inverse: true });
                        }
                        return (params && params.inverse ? -1 : 1) * this.expr1.getValue(params) - this.expr2.getValue(params);
                    }
                    if (this.type == "<<") {
                        return this.expr1.getValue(params) << this.expr2.getValue(params);
                    }
                    if (this.type == ">>") {
                        return this.expr1.getValue(params) >> this.expr2.getValue(params);
                    }
                    if (this.type == ">>>") {
                        return this.expr1.getValue(params) >>> this.expr2.getValue(params);
                    }
                    if (this.type == ">") {
                        return this.expr1.getValue(params) > this.expr2.getValue(params);
                    }
                    if (this.type == "<") {
                        return this.expr1.getValue(params) < this.expr2.getValue(params);
                    }
                    if (this.type == ">=") {
                        return this.expr1.getValue(params) >= this.expr2.getValue(params);
                    }
                    if (this.type == "<=") {
                        return this.expr1.getValue(params) <= this.expr2.getValue(params);
                    }
                    if (this.type == "==") {
                        return this.expr1.getValue(params) == this.expr2.getValue(params);
                    }
                    if (this.type == "===") {
                        return this.expr1.getValue(params) === this.expr2.getValue(params);
                    }
                    if (this.type == "!==") {
                        return this.expr1.getValue(params) !== this.expr2.getValue(params);
                    }
                    if (this.type == "!=") {
                        return this.expr1.getValue(params) != this.expr2.getValue(params);
                    }
                    if (this.type == "&") {
                        return this.expr1.getValue(params) & this.expr2.getValue(params);
                    }
                    if (this.type == "~") {
                        return ~this.expr1.getValue(params);
                    }
                    if (this.type == "^") {
                        return this.expr1.getValue(params) ^ this.expr2.getValue(params);
                    }
                    if (this.type == "|") {
                        return this.expr1.getValue(params) | this.expr2.getValue(params);
                    }
                    if (this.type == "&&") {
                        return this.expr1.getValue(params) && this.expr2.getValue(params);
                    }
                    if (this.type == "||") {
                        return this.expr1.getValue(params) || this.expr2.getValue(params);
                    }
                    if (this.type == "=") {
                        this.expr1.setValue(this.expr2.getValue(params), params);
                        return this.expr1.getValue(params);
                    }
                    if (this.type == "*=") {
                        this.expr1.setValue(this.expr1.getValue(params) * this.expr2.getValue(params), params);
                        return this.expr1.getValue(params);
                    }
                    if (this.type == "/=") {
                        this.expr1.setValue(this.expr1.getValue(params) / this.expr2.getValue(params), params);
                        return this.expr1.getValue(params);
                    }
                    if (this.type == "%=") {
                        this.expr1.setValue(this.expr1.getValue(params) % this.expr2.getValue(params), params);
                        return this.expr1.getValue(params);
                    }
                    if (this.type == "&=") {
                        this.expr1.setValue(this.expr1.getValue(params) & this.expr2.getValue(params), params);
                        return this.expr1.getValue(params);
                    }
                    if (this.type == "+=") {
                        this.expr1.setValue(this.expr1.getValue(params) + this.expr2.getValue(params), params);
                        return this.expr1.getValue(params);
                    }
                    if (this.type == "-=") {
                        this.expr1.setValue(this.expr1.getValue(params) - this.expr2.getValue(params), params);
                        return this.expr1.getValue(params);
                    }
                    if (this.type == "||=") {
                        this.expr1.setValue(this.expr1.getValue(params) || this.expr2.getValue(params), params);
                        return this.expr1.getValue(params);
                    }
                    if (this.type == "<<=") {
                        this.expr1.setValue(this.expr1.getValue(params) << this.expr2.getValue(params), params);
                        return this.expr1.getValue(params);
                    }
                    if (this.type == ">>=") {
                        this.expr1.setValue(this.expr1.getValue(params) >> this.expr2.getValue(params), params);
                        return this.expr1.getValue(params);
                    }
                    if (this.type == "^=") {
                        this.expr1.setValue(this.expr1.getValue(params) ^ this.expr2.getValue(params), params);
                        return this.expr1.getValue(params);
                    }
                    if (this.type == "|=") {
                        this.expr1.setValue(this.expr1.getValue(params) | this.expr2.getValue(params), params);
                        return this.expr1.getValue(params);
                    }
                    if (this.type == "?:") {
                        return this.expr1.getValue(params) ? this.expr2.getValue(params) : this.expr3.getValue(params);
                    }
                    if (this.type == "spfor") {
                        var info = params || {};
                        info["$s"] = 0;
                        info["$len"] = this.expr1.getAttribute("length");
                        info["$i"] = null;
                        for (var i = 0; i < info["$len"]; i++) {
                            info["$i"] = this.expr1.getAttribute(i);
                            this.expr2.getValue(info);
                        }
                        return info.$s;
                    }
                    return null;
                }
            }, {
                key: "setValue",
                value: function setValue(val, params) {
                    if (this.type == "Atr") {
                        this.expr1.setValue(val, params);
                    }
                }
            }]);
        return Expr;
    }();
    //////////////////////////End File:binding/compiler/structs/Expr.js///////////////////////////
    //////////////////////////File:binding/compiler/structs/ExprAtr.js///////////////////////////
    var ExprAtr = function () {
        function ExprAtr() {
            _classCallCheck(this, ExprAtr);
            this.type = "attribute";
            this.list = [];
            this.equalBefore = false;
        }
        _createClass(ExprAtr, [{
                key: "addItem",
                value: function addItem(item) {
                    if (this.list.length == 0 && item.type == "id" && item.val == "this") {
                        return;
                    }
                    if (this.list.length == 0 && item.type == ".") {
                        item.type = "id";
                    }
                    this.list.push(item);
                }
            }, {
                key: "checkPropertyBinding",
                value: function checkPropertyBinding(commonInfo) {
                    var atr;
                    var getValue = false;
                    if (this.list[0].type == "()") {
                        this.list[0].val.checkPropertyBinding(commonInfo);
                    }
                    else if (this.list[0].type == "object") {
                        this.list[0].val.checkPropertyBinding(commonInfo);
                    }
                    else if (this.list[0].type == "id") {
                        if (commonInfo.specialFor && this.list[0].val == "$i") {
                            this.checkSpecialFor(commonInfo.specialFor, commonInfo.binding);
                        }
                        getValue = this.list[0].getValue;
                        var name = this.list[0].val;
                        if (name == "this") {
                            this.list.shift();
                        }
                        if (commonInfo.objects["this"] && commonInfo.objects["this"][name] != null) {
                            atr = commonInfo.objects["this"][name];
                            this.before = commonInfo.objects["this"];
                        }
                        else if (commonInfo.objects[name] != null) {
                            this.before = commonInfo.objects[name];
                            this.beforeClass = false;
                            this.equalBefore = true;
                        }
                        else if (commonInfo.classes[name] != null) {
                            this.before = commonInfo.classes[name];
                            this.beforeClass = true;
                            this.equalBefore = true;
                        }
                        else if (commonInfo.checks) {
                            for (var c = 0; c < commonInfo.checks.length; c++) {
                                try {
                                    atr = commonInfo.checks[c][name];
                                    if (atr) {
                                        this.before = commonInfo.checks[c];
                                    }
                                }
                                catch (e) {
                                    atr = null;
                                    this.before = null;
                                }
                                if (atr) {
                                    break;
                                }
                            }
                        }
                    }
                    for (var i = 1; i < this.list.length; i++) {
                        if (this.list[i].type == ".") {
                            if (atr) {
                                var atrName = this.list[i].val;
                                getValue = this.list[i].getValue;
                                try {
                                    atr = atr[atrName];
                                }
                                catch (e) {
                                    atr = null;
                                }
                            }
                        }
                        else if (this.list[i].type == "call") {
                            atr = null;
                            this.list[i].val.checkPropertyBinding(commonInfo);
                        }
                    }
                    /*if (atr && atr instanceof flower.Value && !getValue) {
                        this.value = atr;
                        commonInfo.result.push(atr);
                    }*/
                }
            }, {
                key: "getValue",
                value: function getValue(params) {
                    /*if (this.value) {
                        if (this.value instanceof flower.ArrayValue || this.value instanceof  flower.ObjectValue) {
                            return this.value;
                        } else {
                            return this.value.value;
                        }
                    }*/
                    var getValue = false;
                    var atr;
                    var lastAtr = null;
                    if (this.list[0].type == "()") {
                        atr = this.list[0].val.getValue(params);
                    }
                    else if (this.list[0].type == "object") {
                        atr = this.list[0].val.getValue(params);
                    }
                    else if (this.list[0].type == "id") {
                        if (params && params[this.list[0].val] != null) {
                            this.before = params;
                        }
                        getValue = this.list[0].getValue;
                        atr = this.before;
                        lastAtr = this.before;
                        if (!this.equalBefore) {
                            try {
                                atr = atr[this.list[0].val];
                            }
                            catch (e) {
                                return null;
                            }
                        }
                    }
                    for (var i = 1; i < this.list.length; i++) {
                        try {
                            if (this.list[i].type == ".") {
                                atr = atr[this.list[i].val];
                                getValue = this.list[i].getValue;
                            }
                            else if (this.list[i].type == "call") {
                                if (i == 2 && this.beforeClass) {
                                    atr = atr.apply(null, this.list[i].val.getValueList());
                                }
                                else {
                                    atr = atr.apply(lastAtr, this.list[i].val.getValueList());
                                }
                            }
                            if (i < this.list.length - 1 && this.list[i + 1].type == "call") {
                                continue;
                            }
                            lastAtr = atr;
                        }
                        catch (e) {
                            return null;
                        }
                    }
                    /*if (!getValue && atr instanceof flower.Value) {
                        atr = atr.value;
                    }*/
                    return atr;
                }
            }, {
                key: "setValue",
                value: function setValue(val, params) {
                    if (this.value) {
                        this.value.value = val;
                        return;
                    }
                    var atr;
                    if (this.list.length > 1) {
                        if (this.list[0].type == "id") {
                            if (params && params[this.list[0].val] != null) {
                                atr = params[this.list[0].val];
                            }
                            else {
                                try {
                                    atr = this.before[this.list[0].val];
                                }
                                catch (e) {
                                    return null;
                                }
                            }
                        }
                    }
                    else {
                        if (this.list[0].type == "id") {
                            if (params && params[this.list[0].val] != null) {
                                params[this.list[0].val] = val;
                            }
                            else {
                                try {
                                    this.before[this.list[0].val] = val;
                                }
                                catch (e) {
                                    return null;
                                }
                            }
                        }
                        return;
                    }
                    for (var i = 1; i < this.list.length; i++) {
                        try {
                            if (this.list[i].type == ".") {
                                if (i == this.list.length - 1) {
                                    atr[this.list[i].val] = val;
                                }
                                else {
                                    atr = atr[this.list[i].val];
                                }
                            }
                        }
                        catch (e) {
                            return;
                        }
                    }
                }
            }, {
                key: "getAttribute",
                value: function getAttribute(name) {
                    var val = this.getValue();
                    return val[name];
                }
            }, {
                key: "checkSpecialFor",
                value: function checkSpecialFor(list, binding) {
                    var checkItemListener = function checkItemListener(item, type) {
                        if (binding.hasDispose) {
                            return;
                        }
                        var atr = item;
                        for (var i = 1; i < this.list.length; i++) {
                            try {
                                if (this.list[i].type == ".") {
                                    atr = atr[this.list[i].val];
                                }
                                else if (this.list[i].type == "call") {
                                    if (i == 2 && this.beforeClass) {
                                        atr = atr.apply(null, this.list[i].val.getValueList());
                                    }
                                    else {
                                        atr = atr.apply(lastAtr, this.list[i].val.getValueList());
                                    }
                                }
                                if (i < this.list.length - 1 && this.list[i + 1].type == "call") {
                                    continue;
                                }
                            }
                            catch (e) {
                                return null;
                            }
                        }
                        /*if (atr instanceof flower.Value) {
                            binding["$" + type + "ValueListener"](atr);
                        }*/
                    };
                    if (this.list.length > 1) {
                        for (var i = 0; i < list.length; i++) {
                            checkItemListener.call(this, list[i], "add");
                        }
                    }
                    /*list.addListener(flower.Event.ADD, function (e) {
                        checkItemListener.call(this, e.data, "add");
                    },this);
                    list.addListener(flower.Event.REMOVE, function (e) {
                        checkItemListener.call(this, e.data, "remove");
                    },this);*/
                }
            }, {
                key: "print",
                value: function print() {
                    var content = "";
                    for (var i = 0; i < this.list.length; i++) {
                        content += this.list[i].val;
                    }
                    return content;
                }
            }]);
        return ExprAtr;
    }();
    //////////////////////////End File:binding/compiler/structs/ExprAtr.js///////////////////////////
    //////////////////////////File:binding/compiler/structs/ExprAtrItem.js///////////////////////////
    var ExprAtrItem = function ExprAtrItem(type, val) {
        var getValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        _classCallCheck(this, ExprAtrItem);
        this.type = type;
        this.val = val;
        this.getValue = getValue;
    };
    //////////////////////////End File:binding/compiler/structs/ExprAtrItem.js///////////////////////////
    //////////////////////////File:binding/compiler/structs/ExprStmt.js///////////////////////////
    var ExprStmt = function () {
        function ExprStmt(expr) {
            _classCallCheck(this, ExprStmt);
            this.type = "stmt_expr";
            this.expr = expr;
        }
        _createClass(ExprStmt, [{
                key: "checkPropertyBinding",
                value: function checkPropertyBinding(commonInfo) {
                    this.expr.checkPropertyBinding(commonInfo);
                }
            }, {
                key: "getValue",
                value: function getValue() {
                    return this.expr.getValue();
                }
            }]);
        return ExprStmt;
    }();
    //////////////////////////End File:binding/compiler/structs/ExprStmt.js///////////////////////////
    //////////////////////////File:binding/compiler/structs/ObjectAtr.js///////////////////////////
    var ObjectAtr = function () {
        function ObjectAtr(list) {
            _classCallCheck(this, ObjectAtr);
            this.list = list;
            for (var i = 0; i < list.length; i++) {
                list[i][0] = list[i][0].getValue();
            }
        }
        _createClass(ObjectAtr, [{
                key: "checkPropertyBinding",
                value: function checkPropertyBinding(commonInfo) {
                    for (var i = 0; i < this.list.length; i++) {
                        this.list[i][1].checkPropertyBinding(commonInfo);
                    }
                }
            }, {
                key: "getValue",
                value: function getValue() {
                    var val = {};
                    for (var i = 0; i < this.list.length; i++) {
                        val[this.list[i][0]] = this.list[i][1].getValue();
                    }
                    return val;
                }
            }]);
        return ObjectAtr;
    }();
    //////////////////////////End File:binding/compiler/structs/ObjectAtr.js///////////////////////////
    //////////////////////////File:binding/compiler/structs/ParserItem.js///////////////////////////
    var ParserItem = function ParserItem() {
        _classCallCheck(this, ParserItem);
    };
    //////////////////////////End File:binding/compiler/structs/ParserItem.js///////////////////////////
    //////////////////////////File:binding/compiler/structs/Stmts.js///////////////////////////
    var Stmts = function () {
        function Stmts() {
            _classCallCheck(this, Stmts);
            this.type = "stmts";
            this.list = [];
        }
        _createClass(Stmts, [{
                key: "addStmt",
                value: function addStmt(stmt) {
                    this.list.push(stmt);
                }
            }, {
                key: "addStmtAt",
                value: function addStmtAt(stmt, index) {
                    this.list.splice(index, 0, stmt);
                }
            }, {
                key: "checkPropertyBinding",
                value: function checkPropertyBinding(commonInfo) {
                    for (var i = 0; i < this.list.length; i++) {
                        this.list[i].checkPropertyBinding(commonInfo);
                    }
                }
            }, {
                key: "getValue",
                value: function getValue() {
                    var value;
                    for (var i = 0; i < this.list.length; i++) {
                        if (i == 0) {
                            value = this.list[i].getValue();
                        }
                        else {
                            this.list[i].getValue();
                        }
                    }
                    return value;
                }
            }]);
        return Stmts;
    }();
    //////////////////////////End File:binding/compiler/structs/Stmts.js///////////////////////////
    //////////////////////////File:binding/compiler/Compiler.js///////////////////////////
    var Compiler = function () {
        function Compiler() {
            _classCallCheck(this, Compiler);
            this._scanner = new Scanner();
            this._parser = new Parser();
        }
        _createClass(Compiler, [{
                key: "parserExpr",
                value: function parserExpr(content, checks, objects, classes, result, binding) {
                    var scanner = new Scanner();
                    var common = {
                        "content": content,
                        "objects": objects,
                        "classes": classes,
                        "checks": checks,
                        "ids": {},
                        "tokenValue": null,
                        "scanner": this._scanner,
                        "nodeStack": null,
                        "bindList": [],
                        "binding": binding
                    };
                    this._scanner.setCommonInfo(common);
                    this._parser.setCommonInfo(common);
                    this._parser.parser(content);
                    if (common.parserError) {
                        return null;
                    }
                    common.result = result;
                    common.expr = common.newNode.expval;
                    common.expr.checkPropertyBinding(common);
                    return common.expr;
                }
            }], [{
                key: "parserExpr",
                value: function parserExpr(content, checks, objects, classes, result, binding) {
                    if (!Compiler.ist) {
                        Compiler.ist = new Compiler();
                    }
                    return Compiler.ist.parserExpr(content, checks, objects, classes, result, binding);
                }
            }]);
        return Compiler;
    }();
    //////////////////////////End File:binding/compiler/Compiler.js///////////////////////////
    //////////////////////////File:binding/compiler/Parser.js///////////////////////////
    var Parser = function () {
        function Parser() {
            _classCallCheck(this, Parser);
            this.action = ParserTable.action;
            this.go = ParserTable.go;
            this.commonInfo = null;
        }
        _createClass(Parser, [{
                key: "setCommonInfo",
                value: function setCommonInfo(info) {
                    this.commonInfo = info;
                    this.commonInfo.tokenCount = 0;
                }
            }, {
                key: "parser",
                value: function parser(content) {
                    var commonInfo = this.commonInfo;
                    var scanner = this.commonInfo.scanner;
                    scanner.setTokenContent(content);
                    var token;
                    commonInfo.lastTokenPos = 0;
                    token = scanner.getNextToken();
                    var newNode = { "type": "leaf", "token": token, "value": commonInfo.tokenValue };
                    if (TokenType.TokenTrans[token])
                        token = commonInfo.tokenValue;
                    commonInfo.tokenCount++;
                    if (token == null) {
                        return null;
                    }
                    var state = 1;
                    var stack = [state];
                    var nodeStack = [];
                    commonInfo.nodeStack = nodeStack;
                    var i;
                    var action;
                    var popNodes;
                    var commonDebug = { "file": content };
                    while (true) {
                        if (this.action[state][token] == undefined) {
                            //flower.sys.$error(3008, content, this.getFilePosInfo(content, commonInfo.lastTokenPos));
                            commonInfo.parserError = true;
                            return false;
                        }
                        action = this.action[state][token];
                        if (action.a == 0) {
                            break;
                        }
                        else if (action.a == 1) {
                            popNodes = [];
                            i = action.c.exp;
                            while (i) {
                                stack.pop();
                                popNodes.push(nodeStack.pop());
                                i--;
                            }
                            popNodes.reverse();
                            commonInfo.newNode = {
                                "type": "node",
                                "create": action.c.id,
                                "nodes": popNodes,
                                "tokenPos": popNodes[0].tokenPos,
                                "debug": popNodes[0].debug
                            };
                            if (action.c.code) {
                                this.runProgrammer(action.c.id, commonInfo.newNode, popNodes);
                            }
                            state = stack[stack.length - 1];
                            state = this.go[state][action.c.head];
                            stack.push(state);
                            nodeStack.push(commonInfo.newNode);
                        }
                        else {
                            state = this.action[state][token].to;
                            stack.push(state);
                            nodeStack.push(newNode);
                            token = null;
                            newNode = null;
                        }
                        if (token == null && token != "$") {
                            commonInfo.lastTokenPos = commonInfo.tokenPos;
                            token = scanner.getNextToken();
                            commonInfo.tokenCount++;
                            if (token == null)
                                return false;
                            else
                                newNode = {
                                    "type": "leaf",
                                    "token": token,
                                    "value": commonInfo.tokenValue,
                                    "tokenPos": commonInfo.tokenPos,
                                    "debug": commonDebug
                                };
                            if (TokenType.TokenTrans[token])
                                token = commonInfo.tokenValue;
                        }
                    }
                    return true;
                }
            }, {
                key: "getFilePosInfo",
                value: function getFilePosInfo(content, pos) {
                    var line = 1;
                    var charPos = 1;
                    for (var i = 0; i < content.length && pos > 0; i++) {
                        charPos++;
                        if (content.charCodeAt(i) == 13) {
                            if (content.charCodeAt(i + 1) == 10) {
                                i++;
                                pos--;
                            }
                            charPos = 1;
                            line++;
                        }
                        else if (content.charCodeAt(i + 1) == 10) {
                            if (content.charCodeAt(i) == 13) {
                                i++;
                                pos--;
                            }
                            charPos = 1;
                            line++;
                        }
                        pos--;
                    }
                    return "第" + line + "行，第" + charPos + "个字符(后面10个):" + content.slice(charPos, charPos + 10);
                }
            }, {
                key: "runProgrammer",
                value: function runProgrammer(id, node, nodes) {
                    var common = this.commonInfo;
                    switch (id) {
                        case 1:
                            node.expval = nodes[0].expval;
                            break;
                        case 3:
                            node.expval = new Stmts();
                            node.expval.addStmt(nodes[0].expval);
                            break;
                        case 4:
                            node.expval = new ExprStmt(nodes[0].expval);
                            break;
                        case 5:
                            node.expval = new DeviceStmt();
                            break;
                        case 46:
                            node.expval = new Expr("Atr", nodes[0].expval);
                            break;
                        case 47:
                        case 67:
                            node.expval = new Expr("int", nodes[0].value);
                            break;
                        case 48:
                        case 68:
                            node.expval = new Expr("0xint", nodes[0].value);
                            break;
                        case 49:
                        case 69:
                            node.expval = new Expr("number", nodes[0].value);
                            break;
                        case 50:
                        case 70:
                            node.expval = new Expr("string", nodes[0].value);
                            break;
                        case 55:
                            node.expval = new ExprAtr();
                            node.expval.addItem(new ExprAtrItem("string", nodes[0].value));
                            break;
                        case 51:
                            node.expval = new Expr("boolean", "true");
                            break;
                        case 52:
                            node.expval = new Expr("boolean", "false");
                            break;
                        case 53:
                            node.expval = new Expr("null");
                            break;
                        case 56:
                            node.expval = new ExprAtr();
                            node.expval.addItem(new ExprAtrItem("id", nodes[0].value.name));
                            break;
                        case 57:
                            node.expval = new ExprAtr();
                            node.expval.addItem(new ExprAtrItem("object", nodes[0].expval));
                            break;
                        case 2:
                            node.expval = nodes[1].expval;
                            node.expval.addStmtAt(nodes[0].expval, 0);
                            break;
                        case 6:
                            node.expval = new Expr("-a", nodes[1].expval);
                            break;
                        case 7:
                            node.expval = new Expr("+a", nodes[1].expval);
                            break;
                        case 8:
                            node.expval = new Expr("!", nodes[1].expval);
                            break;
                        case 27:
                            node.expval = new Expr("~", nodes[1].expval);
                            break;
                        case 60:
                            node.expval = nodes[0].expval;
                            node.expval.addItem(new ExprAtrItem("call", nodes[1].expval));
                            break;
                        case 61:
                            node.expval = new ExprAtr();
                            node.expval.addItem(new ExprAtrItem("id", nodes[1].value.name, true));
                            break;
                        case 66:
                            node.expval = new Expr("string", nodes[0].value.name);
                            break;
                        case 84:
                        case 62:
                            node.expval = new ObjectAtr(nodes.length == 2 ? [] : nodes[1].expval);
                            break;
                        case 13:
                            node.expval = new Expr("-", nodes[0].expval, nodes[2].expval);
                            break;
                        case 12:
                            node.expval = new Expr("+", nodes[0].expval, nodes[2].expval);
                            break;
                        case 9:
                            node.expval = new Expr("*", nodes[0].expval, nodes[2].expval);
                            break;
                        case 10:
                            node.expval = new Expr("/", nodes[0].expval, nodes[2].expval);
                            break;
                        case 11:
                            node.expval = new Expr("%", nodes[0].expval, nodes[2].expval);
                            break;
                        case 14:
                            node.expval = new Expr("<<", nodes[0].expval, nodes[2].expval);
                            break;
                        case 15:
                            node.expval = new Expr(">>", nodes[0].expval, nodes[2].expval);
                            break;
                        case 16:
                            node.expval = new Expr("<<<", nodes[0].expval, nodes[2].expval);
                            break;
                        case 17:
                            node.expval = new Expr(">>>", nodes[0].expval, nodes[2].expval);
                            break;
                        case 18:
                            node.expval = new Expr(">", nodes[0].expval, nodes[2].expval);
                            break;
                        case 19:
                            node.expval = new Expr("<", nodes[0].expval, nodes[2].expval);
                            break;
                        case 32:
                            node.expval = new Expr("=", nodes[0].expval, nodes[2].expval);
                            break;
                        case 26:
                            node.expval = new Expr("&", nodes[0].expval, nodes[2].expval);
                            break;
                        case 28:
                            node.expval = new Expr("^", nodes[0].expval, nodes[2].expval);
                            break;
                        case 29:
                            node.expval = new Expr("|", nodes[0].expval, nodes[2].expval);
                            break;
                        case 30:
                            node.expval = new Expr("&&", nodes[0].expval, nodes[2].expval);
                            break;
                        case 31:
                            node.expval = new Expr("||", nodes[0].expval, nodes[2].expval);
                            break;
                        case 54:
                            node.expval = new ExprAtr();
                            node.expval.addItem(new ExprAtrItem("()", nodes[1].expval));
                            break;
                        case 73:
                            node.expval = new CallParams();
                            node.expval.addParam(nodes[0].expval);
                            break;
                        case 85:
                        case 71:
                            node.expval = nodes.length == 2 ? new CallParams() : nodes[1].expval;
                            break;
                        case 58:
                            node.expval = nodes[0].expval;
                            node.expval.addItem(new ExprAtrItem(".", nodes[2].value.name));
                            break;
                        case 38:
                            node.expval = new Expr("-=", nodes[0].expval, nodes[3].expval);
                            break;
                        case 37:
                            node.expval = new Expr("+=", nodes[0].expval, nodes[3].expval);
                            break;
                        case 25:
                            node.expval = new Expr("!=", nodes[0].expval, nodes[3].expval);
                            break;
                        case 33:
                            node.expval = new Expr("*=", nodes[0].expval, nodes[3].expval);
                            break;
                        case 34:
                            node.expval = new Expr("/=", nodes[0].expval, nodes[3].expval);
                            break;
                        case 35:
                            node.expval = new Expr("%=", nodes[0].expval, nodes[3].expval);
                            break;
                        case 40:
                            node.expval = new Expr("<<=", nodes[0].expval, nodes[3].expval);
                            break;
                        case 41:
                            node.expval = new Expr(">>=", nodes[0].expval, nodes[3].expval);
                            break;
                        case 20:
                            node.expval = new Expr(">=", nodes[0].expval, nodes[3].expval);
                            break;
                        case 21:
                            node.expval = new Expr("<=", nodes[0].expval, nodes[3].expval);
                            break;
                        case 22:
                            node.expval = new Expr("==", nodes[0].expval, nodes[3].expval);
                            break;
                        case 36:
                            node.expval = new Expr("&=", nodes[0].expval, nodes[3].expval);
                            break;
                        case 42:
                            node.expval = new Expr("^=", nodes[0].expval, nodes[3].expval);
                            break;
                        case 43:
                            node.expval = new Expr("|=", nodes[0].expval, nodes[3].expval);
                            break;
                        case 39:
                            node.expval = new Expr("||=", nodes[0].expval, nodes[3].expval);
                            break;
                        case 86:
                        case 72:
                            node.expval = nodes[2].expval;
                            node.expval.addParamAt(nodes[0].expval, 0);
                            break;
                        case 59:
                            node.expval = nodes[0].expval;
                            node.expval.addItem(new ExprAtrItem(".", nodes[3].value.name, true));
                            break;
                        case 64:
                            node.expval = [[nodes[0].expval, nodes[2].expval]];
                            break;
                        case 24:
                            node.expval = new Expr("!==", nodes[0].expval, nodes[4].expval);
                            break;
                        case 23:
                            node.expval = new Expr("===", nodes[0].expval, nodes[4].expval);
                            break;
                        case 44:
                            node.expval = new Expr("?:", nodes[0].expval, nodes[2].expval, nodes[4].expval);
                            break;
                        case 87:
                        case 63:
                            node.expval = [[nodes[0].expval, nodes[2].expval]];
                            node.expval = node.expval.concat(nodes.length == 4 ? [null] : nodes[4].expval);
                            break;
                        case 45:
                            node.expval = new Expr("spfor", nodes[2].expval, nodes[4].expval);
                            break;
                    }
                }
            }]);
        return Parser;
    }();
    //////////////////////////End File:binding/compiler/Parser.js///////////////////////////
    //////////////////////////File:binding/compiler/ParserTable.js///////////////////////////
    var ParserTable = function ParserTable() {
        _classCallCheck(this, ParserTable);
    };
    //////////////////////////End File:binding/compiler/ParserTable.js///////////////////////////
    //////////////////////////File:binding/compiler/Scanner.js///////////////////////////
    ParserTable.action = { 1: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, ",": { "a": 2, "to": 13 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 }, ";": { "a": 2, "to": 25 } }, 2: { "$": { "a": 1, "c": { "id": 1, "head": "start", "code": true, "exp": 1 } } }, 3: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, ",": { "a": 2, "to": 13 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 }, ";": { "a": 2, "to": 25 }, "$": { "a": 1, "c": { "id": 3, "head": "stmts", "code": true, "exp": 1 } } }, 4: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 2, "to": 42 }, "|": { "a": 2, "to": 43 }, "&&": { "a": 2, "to": 44 }, "||": { "a": 2, "to": 45 }, "?": { "a": 2, "to": 46 }, "~": { "a": 1, "c": { "id": 4, "head": "stmt", "code": true, "exp": 1 } }, "for": { "a": 1, "c": { "id": 4, "head": "stmt", "code": true, "exp": 1 } }, "(": { "a": 1, "c": { "id": 4, "head": "stmt", "code": true, "exp": 1 } }, "CString": { "a": 1, "c": { "id": 4, "head": "stmt", "code": true, "exp": 1 } }, "id": { "a": 1, "c": { "id": 4, "head": "stmt", "code": true, "exp": 1 } }, "{": { "a": 1, "c": { "id": 4, "head": "stmt", "code": true, "exp": 1 } }, "@": { "a": 1, "c": { "id": 4, "head": "stmt", "code": true, "exp": 1 } }, "CInt": { "a": 1, "c": { "id": 4, "head": "stmt", "code": true, "exp": 1 } }, "OXCInt": { "a": 1, "c": { "id": 4, "head": "stmt", "code": true, "exp": 1 } }, "CNumber": { "a": 1, "c": { "id": 4, "head": "stmt", "code": true, "exp": 1 } }, "true": { "a": 1, "c": { "id": 4, "head": "stmt", "code": true, "exp": 1 } }, "false": { "a": 1, "c": { "id": 4, "head": "stmt", "code": true, "exp": 1 } }, "null": { "a": 1, "c": { "id": 4, "head": "stmt", "code": true, "exp": 1 } }, ";": { "a": 1, "c": { "id": 4, "head": "stmt", "code": true, "exp": 1 } }, ",": { "a": 1, "c": { "id": 4, "head": "stmt", "code": true, "exp": 1 } }, "$": { "a": 1, "c": { "id": 4, "head": "stmt", "code": true, "exp": 1 } } }, 5: { "-": { "a": 1, "c": { "id": 5, "head": "stmt", "code": true, "exp": 1 } }, "+": { "a": 1, "c": { "id": 5, "head": "stmt", "code": true, "exp": 1 } }, "!": { "a": 1, "c": { "id": 5, "head": "stmt", "code": true, "exp": 1 } }, "~": { "a": 1, "c": { "id": 5, "head": "stmt", "code": true, "exp": 1 } }, "for": { "a": 1, "c": { "id": 5, "head": "stmt", "code": true, "exp": 1 } }, "(": { "a": 1, "c": { "id": 5, "head": "stmt", "code": true, "exp": 1 } }, "CString": { "a": 1, "c": { "id": 5, "head": "stmt", "code": true, "exp": 1 } }, "id": { "a": 1, "c": { "id": 5, "head": "stmt", "code": true, "exp": 1 } }, "{": { "a": 1, "c": { "id": 5, "head": "stmt", "code": true, "exp": 1 } }, "@": { "a": 1, "c": { "id": 5, "head": "stmt", "code": true, "exp": 1 } }, "CInt": { "a": 1, "c": { "id": 5, "head": "stmt", "code": true, "exp": 1 } }, "OXCInt": { "a": 1, "c": { "id": 5, "head": "stmt", "code": true, "exp": 1 } }, "CNumber": { "a": 1, "c": { "id": 5, "head": "stmt", "code": true, "exp": 1 } }, "true": { "a": 1, "c": { "id": 5, "head": "stmt", "code": true, "exp": 1 } }, "false": { "a": 1, "c": { "id": 5, "head": "stmt", "code": true, "exp": 1 } }, "null": { "a": 1, "c": { "id": 5, "head": "stmt", "code": true, "exp": 1 } }, ";": { "a": 1, "c": { "id": 5, "head": "stmt", "code": true, "exp": 1 } }, ",": { "a": 1, "c": { "id": 5, "head": "stmt", "code": true, "exp": 1 } }, "$": { "a": 1, "c": { "id": 5, "head": "stmt", "code": true, "exp": 1 } } }, 6: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 7: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 8: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 9: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 10: { "(": { "a": 2, "to": 51 } }, 11: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 12: { "(": { "a": 2, "to": 53 }, ".": { "a": 2, "to": 54 }, "-": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "+": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "!": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "~": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "for": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "CString": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "id": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "{": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "@": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "CInt": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "OXCInt": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "CNumber": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "true": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "false": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "null": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, ";": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, ",": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "$": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "*": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "/": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "%": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "<<": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, ">>": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "<<<": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, ">>>": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, ">": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "<": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "=": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "&": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "^": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "|": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "&&": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "||": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "?": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, ")": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, ":": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } }, "}": { "a": 1, "c": { "id": 46, "head": "expr", "code": true, "exp": 1 } } }, 13: { "-": { "a": 1, "c": { "id": 76, "head": "device", "code": false, "exp": 1 } }, "+": { "a": 1, "c": { "id": 76, "head": "device", "code": false, "exp": 1 } }, "!": { "a": 1, "c": { "id": 76, "head": "device", "code": false, "exp": 1 } }, "~": { "a": 1, "c": { "id": 76, "head": "device", "code": false, "exp": 1 } }, "for": { "a": 1, "c": { "id": 76, "head": "device", "code": false, "exp": 1 } }, "(": { "a": 1, "c": { "id": 76, "head": "device", "code": false, "exp": 1 } }, "CString": { "a": 1, "c": { "id": 76, "head": "device", "code": false, "exp": 1 } }, "id": { "a": 1, "c": { "id": 76, "head": "device", "code": false, "exp": 1 } }, "{": { "a": 1, "c": { "id": 76, "head": "device", "code": false, "exp": 1 } }, "@": { "a": 1, "c": { "id": 76, "head": "device", "code": false, "exp": 1 } }, "CInt": { "a": 1, "c": { "id": 76, "head": "device", "code": false, "exp": 1 } }, "OXCInt": { "a": 1, "c": { "id": 76, "head": "device", "code": false, "exp": 1 } }, "CNumber": { "a": 1, "c": { "id": 76, "head": "device", "code": false, "exp": 1 } }, "true": { "a": 1, "c": { "id": 76, "head": "device", "code": false, "exp": 1 } }, "false": { "a": 1, "c": { "id": 76, "head": "device", "code": false, "exp": 1 } }, "null": { "a": 1, "c": { "id": 76, "head": "device", "code": false, "exp": 1 } }, ";": { "a": 1, "c": { "id": 76, "head": "device", "code": false, "exp": 1 } }, ",": { "a": 1, "c": { "id": 76, "head": "device", "code": false, "exp": 1 } }, "$": { "a": 1, "c": { "id": 76, "head": "device", "code": false, "exp": 1 } } }, 14: { "-": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "+": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "!": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "~": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "for": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "(": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "CString": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "id": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "{": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "@": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "CInt": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "OXCInt": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "CNumber": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "true": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "false": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "null": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, ";": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, ",": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "$": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "*": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "/": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "%": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "<<": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, ">>": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "<<<": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, ">>>": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, ">": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "<": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "=": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "&": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "^": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "|": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "&&": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "||": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "?": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, ")": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, ":": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } }, "}": { "a": 1, "c": { "id": 47, "head": "expr", "code": true, "exp": 1 } } }, 15: { "-": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "+": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "!": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "~": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "for": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "(": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "CString": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "id": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "{": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "@": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "CInt": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "OXCInt": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "CNumber": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "true": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "false": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "null": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, ";": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, ",": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "$": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "*": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "/": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "%": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "<<": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, ">>": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "<<<": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, ">>>": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, ">": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "<": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "=": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "&": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "^": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "|": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "&&": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "||": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "?": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, ")": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, ":": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } }, "}": { "a": 1, "c": { "id": 48, "head": "expr", "code": true, "exp": 1 } } }, 16: { "-": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "+": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "!": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "~": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "for": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "(": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "CString": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "id": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "{": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "@": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "CInt": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "OXCInt": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "CNumber": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "true": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "false": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "null": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, ";": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, ",": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "$": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "*": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "/": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "%": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "<<": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, ">>": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "<<<": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, ">>>": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, ">": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "<": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "=": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "&": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "^": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "|": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "&&": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "||": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "?": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, ")": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, ":": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } }, "}": { "a": 1, "c": { "id": 49, "head": "expr", "code": true, "exp": 1 } } }, 17: { "-": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "+": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "!": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "~": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "for": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "(": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "CString": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "id": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "{": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "@": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "CInt": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "OXCInt": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "CNumber": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "true": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "false": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "null": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, ";": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, ",": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "$": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "*": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "/": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "%": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "<<": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, ">>": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "<<<": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, ">>>": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, ">": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "<": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "=": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "&": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "^": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "|": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "&&": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "||": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "?": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, ")": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, ":": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, "}": { "a": 1, "c": { "id": 50, "head": "expr", "code": true, "exp": 1 } }, ".": { "a": 1, "c": { "id": 55, "head": "atr", "code": true, "exp": 1 } } }, 18: { "-": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "+": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "!": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "~": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "for": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "(": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "CString": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "id": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "{": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "@": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "CInt": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "OXCInt": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "CNumber": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "true": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "false": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "null": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, ";": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, ",": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "$": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "*": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "/": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "%": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "<<": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, ">>": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "<<<": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, ">>>": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, ">": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "<": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "=": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "&": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "^": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "|": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "&&": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "||": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "?": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, ")": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, ":": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } }, "}": { "a": 1, "c": { "id": 51, "head": "expr", "code": true, "exp": 1 } } }, 19: { "-": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "+": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "!": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "~": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "for": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "(": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "CString": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "id": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "{": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "@": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "CInt": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "OXCInt": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "CNumber": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "true": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "false": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "null": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, ";": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, ",": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "$": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "*": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "/": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "%": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "<<": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, ">>": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "<<<": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, ">>>": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, ">": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "<": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "=": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "&": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "^": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "|": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "&&": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "||": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "?": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, ")": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, ":": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } }, "}": { "a": 1, "c": { "id": 52, "head": "expr", "code": true, "exp": 1 } } }, 20: { "-": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "+": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "!": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "~": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "for": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "(": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "CString": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "id": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "{": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "@": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "CInt": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "OXCInt": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "CNumber": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "true": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "false": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "null": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, ";": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, ",": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "$": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "*": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "/": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "%": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "<<": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, ">>": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "<<<": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, ">>>": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, ">": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "<": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "=": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "&": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "^": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "|": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "&&": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "||": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "?": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, ")": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, ":": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } }, "}": { "a": 1, "c": { "id": 53, "head": "expr", "code": true, "exp": 1 } } }, 21: { "-": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "+": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "!": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "~": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "for": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "(": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "CString": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "id": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "{": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "@": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "CInt": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "OXCInt": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "CNumber": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "true": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "false": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "null": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, ";": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, ",": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "$": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "*": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "/": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "%": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "<<": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, ">>": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "<<<": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, ">>>": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, ">": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "<": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "=": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "&": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "^": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "|": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "&&": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "||": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "?": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, ".": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, ")": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, ":": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } }, "}": { "a": 1, "c": { "id": 56, "head": "atr", "code": true, "exp": 1 } } }, 22: { "-": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "+": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "!": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "~": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "for": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "(": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "CString": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "id": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "{": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "@": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "CInt": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "OXCInt": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "CNumber": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "true": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "false": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "null": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, ";": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, ",": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "$": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "*": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "/": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "%": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "<<": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, ">>": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "<<<": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, ">>>": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, ">": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "<": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "=": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "&": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "^": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "|": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "&&": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "||": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "?": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, ".": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, ")": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, ":": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } }, "}": { "a": 1, "c": { "id": 57, "head": "atr", "code": true, "exp": 1 } } }, 23: { "id": { "a": 2, "to": 56 } }, 24: { "CInt": { "a": 2, "to": 57 }, "OXCInt": { "a": 2, "to": 58 }, "CNumber": { "a": 2, "to": 59 }, "CString": { "a": 2, "to": 60 }, "id": { "a": 2, "to": 61 }, "}": { "a": 2, "to": 63 } }, 25: { "-": { "a": 1, "c": { "id": 75, "head": "device", "code": false, "exp": 1 } }, "+": { "a": 1, "c": { "id": 75, "head": "device", "code": false, "exp": 1 } }, "!": { "a": 1, "c": { "id": 75, "head": "device", "code": false, "exp": 1 } }, "~": { "a": 1, "c": { "id": 75, "head": "device", "code": false, "exp": 1 } }, "for": { "a": 1, "c": { "id": 75, "head": "device", "code": false, "exp": 1 } }, "(": { "a": 1, "c": { "id": 75, "head": "device", "code": false, "exp": 1 } }, "CString": { "a": 1, "c": { "id": 75, "head": "device", "code": false, "exp": 1 } }, "id": { "a": 1, "c": { "id": 75, "head": "device", "code": false, "exp": 1 } }, "{": { "a": 1, "c": { "id": 75, "head": "device", "code": false, "exp": 1 } }, "@": { "a": 1, "c": { "id": 75, "head": "device", "code": false, "exp": 1 } }, "CInt": { "a": 1, "c": { "id": 75, "head": "device", "code": false, "exp": 1 } }, "OXCInt": { "a": 1, "c": { "id": 75, "head": "device", "code": false, "exp": 1 } }, "CNumber": { "a": 1, "c": { "id": 75, "head": "device", "code": false, "exp": 1 } }, "true": { "a": 1, "c": { "id": 75, "head": "device", "code": false, "exp": 1 } }, "false": { "a": 1, "c": { "id": 75, "head": "device", "code": false, "exp": 1 } }, "null": { "a": 1, "c": { "id": 75, "head": "device", "code": false, "exp": 1 } }, ";": { "a": 1, "c": { "id": 75, "head": "device", "code": false, "exp": 1 } }, ",": { "a": 1, "c": { "id": 75, "head": "device", "code": false, "exp": 1 } }, "$": { "a": 1, "c": { "id": 75, "head": "device", "code": false, "exp": 1 } } }, 26: { "$": { "a": 0 } }, 27: { "$": { "a": 1, "c": { "id": 2, "head": "stmts", "code": true, "exp": 2 } } }, 28: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "=": { "a": 2, "to": 66 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 29: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "=": { "a": 2, "to": 68 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 30: { "=": { "a": 2, "to": 69 } }, 31: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "=": { "a": 2, "to": 71 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 32: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "=": { "a": 2, "to": 73 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 33: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "=": { "a": 2, "to": 75 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 34: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "=": { "a": 2, "to": 77 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 35: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "=": { "a": 2, "to": 79 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 36: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 37: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 38: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "=": { "a": 2, "to": 83 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 39: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "=": { "a": 2, "to": 85 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 40: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "=": { "a": 2, "to": 87 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 41: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "=": { "a": 2, "to": 89 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 42: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "=": { "a": 2, "to": 91 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 43: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "=": { "a": 2, "to": 93 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 44: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 45: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "=": { "a": 2, "to": 96 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 46: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 47: { "-": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "+": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "!": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "*": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "/": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "%": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "<<": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, ">>": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "<<<": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, ">>>": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, ">": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "<": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "=": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "&": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "^": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "|": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "&&": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "||": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "?": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "~": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "for": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "(": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "CString": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "id": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "{": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "@": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "CInt": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "OXCInt": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "CNumber": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "true": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "false": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "null": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, ";": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, ",": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "$": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, ")": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, ":": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } }, "}": { "a": 1, "c": { "id": 6, "head": "expr", "code": true, "exp": 2 } } }, 48: { "-": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "+": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "!": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "*": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "/": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "%": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "<<": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, ">>": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "<<<": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, ">>>": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, ">": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "<": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "=": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "&": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "^": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "|": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "&&": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "||": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "?": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "~": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "for": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "(": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "CString": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "id": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "{": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "@": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "CInt": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "OXCInt": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "CNumber": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "true": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "false": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "null": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, ";": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, ",": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "$": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, ")": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, ":": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } }, "}": { "a": 1, "c": { "id": 7, "head": "expr", "code": true, "exp": 2 } } }, 49: { "-": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "+": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "!": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "*": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "/": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "%": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "<<": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, ">>": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "<<<": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, ">>>": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, ">": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "<": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "=": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "&": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "^": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "|": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "&&": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "||": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "?": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "~": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "for": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "(": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "CString": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "id": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "{": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "@": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "CInt": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "OXCInt": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "CNumber": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "true": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "false": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "null": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, ";": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, ",": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "$": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, ")": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, ":": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } }, "}": { "a": 1, "c": { "id": 8, "head": "expr", "code": true, "exp": 2 } } }, 50: { "-": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "+": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "!": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "*": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "/": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "%": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "<<": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, ">>": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "<<<": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, ">>>": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, ">": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "<": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "=": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "&": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "^": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "|": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "&&": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "||": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "?": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "~": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "for": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "(": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "CString": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "id": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "{": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "@": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "CInt": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "OXCInt": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "CNumber": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "true": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "false": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "null": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, ";": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, ",": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "$": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, ")": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, ":": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } }, "}": { "a": 1, "c": { "id": 27, "head": "expr", "code": true, "exp": 2 } } }, 51: { "(": { "a": 2, "to": 11 }, "CString": { "a": 2, "to": 99 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 52: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 2, "to": 42 }, "|": { "a": 2, "to": 43 }, "&&": { "a": 2, "to": 44 }, "||": { "a": 2, "to": 45 }, "?": { "a": 2, "to": 46 }, ")": { "a": 2, "to": 100 } }, 53: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, ")": { "a": 2, "to": 102 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 54: { "id": { "a": 2, "to": 104 }, "@": { "a": 2, "to": 105 } }, 55: { "-": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "+": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "!": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "~": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "for": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "(": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "CString": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "id": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "{": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "@": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "CInt": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "OXCInt": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "CNumber": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "true": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "false": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "null": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, ";": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, ",": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "$": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "*": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "/": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "%": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "<<": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, ">>": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "<<<": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, ">>>": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, ">": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "<": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "=": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "&": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "^": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "|": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "&&": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "||": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "?": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, ".": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, ")": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, ":": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } }, "}": { "a": 1, "c": { "id": 60, "head": "atr", "code": true, "exp": 2 } } }, 56: { "-": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "+": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "!": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "~": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "for": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "(": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "CString": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "id": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "{": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "@": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "CInt": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "OXCInt": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "CNumber": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "true": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "false": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "null": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, ";": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, ",": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "$": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "*": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "/": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "%": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "<<": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, ">>": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "<<<": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, ">>>": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, ">": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "<": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "=": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "&": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "^": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "|": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "&&": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "||": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "?": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, ".": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, ")": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, ":": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } }, "}": { "a": 1, "c": { "id": 61, "head": "atr", "code": true, "exp": 2 } } }, 57: { ":": { "a": 1, "c": { "id": 67, "head": "objectKey", "code": true, "exp": 1 } } }, 58: { ":": { "a": 1, "c": { "id": 68, "head": "objectKey", "code": true, "exp": 1 } } }, 59: { ":": { "a": 1, "c": { "id": 69, "head": "objectKey", "code": true, "exp": 1 } } }, 60: { ":": { "a": 1, "c": { "id": 70, "head": "objectKey", "code": true, "exp": 1 } } }, 61: { ":": { "a": 1, "c": { "id": 66, "head": "objectKey", "code": true, "exp": 1 } } }, 62: { "}": { "a": 2, "to": 106 } }, 63: { "-": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "+": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "!": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "~": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "for": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "(": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "CString": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "id": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "{": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "@": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "CInt": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "OXCInt": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "CNumber": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "true": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "false": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "null": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, ";": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, ",": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "$": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "*": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "/": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "%": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "<<": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, ">>": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "<<<": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, ">>>": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, ">": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "<": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "=": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "&": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "^": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "|": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "&&": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "||": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "?": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, ".": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, ")": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, ":": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } }, "}": { "a": 1, "c": { "id": 84, "head": "objValue", "code": true, "exp": 2 } } }, 64: { ":": { "a": 2, "to": 107 } }, 65: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, ">>": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, "<<<": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, ">>>": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, ">": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, "<": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, "=": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, "&": { "a": 2, "to": 41 }, "^": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, "|": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, "&&": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, "||": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, "?": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, "~": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, "for": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, "(": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, "CString": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, "id": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, "{": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, "@": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, "CInt": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, "OXCInt": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, "CNumber": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, "true": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, "false": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, "null": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, ";": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, ",": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, "$": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, ")": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, ":": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } }, "}": { "a": 1, "c": { "id": 13, "head": "expr", "code": true, "exp": 3 } } }, 66: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 67: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, ">>": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, "<<<": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, ">>>": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, ">": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, "<": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, "=": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, "&": { "a": 2, "to": 41 }, "^": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, "|": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, "&&": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, "||": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, "?": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, "~": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, "for": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, "(": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, "CString": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, "id": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, "{": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, "@": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, "CInt": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, "OXCInt": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, "CNumber": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, "true": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, "false": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, "null": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, ";": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, ",": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, "$": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, ")": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, ":": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } }, "}": { "a": 1, "c": { "id": 12, "head": "expr", "code": true, "exp": 3 } } }, 68: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 69: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "=": { "a": 2, "to": 111 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 70: { "-": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, "+": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, "!": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, ">>": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, "<<<": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, ">>>": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, ">": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, "<": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, "=": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, "&": { "a": 2, "to": 41 }, "^": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, "|": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, "&&": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, "||": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, "?": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, "~": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, "for": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, "(": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, "CString": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, "id": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, "{": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, "@": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, "CInt": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, "OXCInt": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, "CNumber": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, "true": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, "false": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, "null": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, ";": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, ",": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, "$": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, ")": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, ":": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } }, "}": { "a": 1, "c": { "id": 9, "head": "expr", "code": true, "exp": 3 } } }, 71: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 72: { "-": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, "+": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, "!": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, ">>": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, "<<<": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, ">>>": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, ">": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, "<": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, "=": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, "&": { "a": 2, "to": 41 }, "^": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, "|": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, "&&": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, "||": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, "?": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, "~": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, "for": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, "(": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, "CString": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, "id": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, "{": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, "@": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, "CInt": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, "OXCInt": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, "CNumber": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, "true": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, "false": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, "null": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, ";": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, ",": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, "$": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, ")": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, ":": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } }, "}": { "a": 1, "c": { "id": 10, "head": "expr", "code": true, "exp": 3 } } }, 73: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 74: { "-": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, "+": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, "!": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, ">>": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, "<<<": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, ">>>": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, ">": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, "<": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, "=": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, "&": { "a": 2, "to": 41 }, "^": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, "|": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, "&&": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, "||": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, "?": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, "~": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, "for": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, "(": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, "CString": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, "id": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, "{": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, "@": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, "CInt": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, "OXCInt": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, "CNumber": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, "true": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, "false": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, "null": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, ";": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, ",": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, "$": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, ")": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, ":": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } }, "}": { "a": 1, "c": { "id": 11, "head": "expr", "code": true, "exp": 3 } } }, 75: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 76: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, "<": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, "=": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, "&": { "a": 2, "to": 41 }, "^": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, "|": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, "&&": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, "||": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, "?": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, "~": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, "for": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, "(": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, "CString": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, "id": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, "{": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, "@": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, "CInt": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, "OXCInt": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, "CNumber": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, "true": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, "false": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, "null": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, ";": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, ",": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, "$": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, ")": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, ":": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } }, "}": { "a": 1, "c": { "id": 14, "head": "expr", "code": true, "exp": 3 } } }, 77: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 78: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, "<": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, "=": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, "&": { "a": 2, "to": 41 }, "^": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, "|": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, "&&": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, "||": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, "?": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, "~": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, "for": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, "(": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, "CString": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, "id": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, "{": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, "@": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, "CInt": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, "OXCInt": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, "CNumber": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, "true": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, "false": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, "null": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, ";": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, ",": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, "$": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, ")": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, ":": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } }, "}": { "a": 1, "c": { "id": 15, "head": "expr", "code": true, "exp": 3 } } }, 79: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 80: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, "<": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, "=": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, "&": { "a": 2, "to": 41 }, "^": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, "|": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, "&&": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, "||": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, "?": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, "~": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, "for": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, "(": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, "CString": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, "id": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, "{": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, "@": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, "CInt": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, "OXCInt": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, "CNumber": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, "true": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, "false": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, "null": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, ";": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, ",": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, "$": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, ")": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, ":": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } }, "}": { "a": 1, "c": { "id": 16, "head": "expr", "code": true, "exp": 3 } } }, 81: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, "<": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, "=": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, "&": { "a": 2, "to": 41 }, "^": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, "|": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, "&&": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, "||": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, "?": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, "~": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, "for": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, "(": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, "CString": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, "id": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, "{": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, "@": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, "CInt": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, "OXCInt": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, "CNumber": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, "true": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, "false": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, "null": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, ";": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, ",": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, "$": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, ")": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, ":": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } }, "}": { "a": 1, "c": { "id": 17, "head": "expr", "code": true, "exp": 3 } } }, 82: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 1, "c": { "id": 18, "head": "expr", "code": true, "exp": 3 } }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 1, "c": { "id": 18, "head": "expr", "code": true, "exp": 3 } }, "&": { "a": 2, "to": 41 }, "^": { "a": 1, "c": { "id": 18, "head": "expr", "code": true, "exp": 3 } }, "|": { "a": 1, "c": { "id": 18, "head": "expr", "code": true, "exp": 3 } }, "&&": { "a": 1, "c": { "id": 18, "head": "expr", "code": true, "exp": 3 } }, "||": { "a": 1, "c": { "id": 18, "head": "expr", "code": true, "exp": 3 } }, "?": { "a": 1, "c": { "id": 18, "head": "expr", "code": true, "exp": 3 } }, "~": { "a": 1, "c": { "id": 18, "head": "expr", "code": true, "exp": 3 } }, "for": { "a": 1, "c": { "id": 18, "head": "expr", "code": true, "exp": 3 } }, "(": { "a": 1, "c": { "id": 18, "head": "expr", "code": true, "exp": 3 } }, "CString": { "a": 1, "c": { "id": 18, "head": "expr", "code": true, "exp": 3 } }, "id": { "a": 1, "c": { "id": 18, "head": "expr", "code": true, "exp": 3 } }, "{": { "a": 1, "c": { "id": 18, "head": "expr", "code": true, "exp": 3 } }, "@": { "a": 1, "c": { "id": 18, "head": "expr", "code": true, "exp": 3 } }, "CInt": { "a": 1, "c": { "id": 18, "head": "expr", "code": true, "exp": 3 } }, "OXCInt": { "a": 1, "c": { "id": 18, "head": "expr", "code": true, "exp": 3 } }, "CNumber": { "a": 1, "c": { "id": 18, "head": "expr", "code": true, "exp": 3 } }, "true": { "a": 1, "c": { "id": 18, "head": "expr", "code": true, "exp": 3 } }, "false": { "a": 1, "c": { "id": 18, "head": "expr", "code": true, "exp": 3 } }, "null": { "a": 1, "c": { "id": 18, "head": "expr", "code": true, "exp": 3 } }, ";": { "a": 1, "c": { "id": 18, "head": "expr", "code": true, "exp": 3 } }, ",": { "a": 1, "c": { "id": 18, "head": "expr", "code": true, "exp": 3 } }, "$": { "a": 1, "c": { "id": 18, "head": "expr", "code": true, "exp": 3 } }, ")": { "a": 1, "c": { "id": 18, "head": "expr", "code": true, "exp": 3 } }, ":": { "a": 1, "c": { "id": 18, "head": "expr", "code": true, "exp": 3 } }, "}": { "a": 1, "c": { "id": 18, "head": "expr", "code": true, "exp": 3 } } }, 83: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 84: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 1, "c": { "id": 19, "head": "expr", "code": true, "exp": 3 } }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 1, "c": { "id": 19, "head": "expr", "code": true, "exp": 3 } }, "&": { "a": 2, "to": 41 }, "^": { "a": 1, "c": { "id": 19, "head": "expr", "code": true, "exp": 3 } }, "|": { "a": 1, "c": { "id": 19, "head": "expr", "code": true, "exp": 3 } }, "&&": { "a": 1, "c": { "id": 19, "head": "expr", "code": true, "exp": 3 } }, "||": { "a": 1, "c": { "id": 19, "head": "expr", "code": true, "exp": 3 } }, "?": { "a": 1, "c": { "id": 19, "head": "expr", "code": true, "exp": 3 } }, "~": { "a": 1, "c": { "id": 19, "head": "expr", "code": true, "exp": 3 } }, "for": { "a": 1, "c": { "id": 19, "head": "expr", "code": true, "exp": 3 } }, "(": { "a": 1, "c": { "id": 19, "head": "expr", "code": true, "exp": 3 } }, "CString": { "a": 1, "c": { "id": 19, "head": "expr", "code": true, "exp": 3 } }, "id": { "a": 1, "c": { "id": 19, "head": "expr", "code": true, "exp": 3 } }, "{": { "a": 1, "c": { "id": 19, "head": "expr", "code": true, "exp": 3 } }, "@": { "a": 1, "c": { "id": 19, "head": "expr", "code": true, "exp": 3 } }, "CInt": { "a": 1, "c": { "id": 19, "head": "expr", "code": true, "exp": 3 } }, "OXCInt": { "a": 1, "c": { "id": 19, "head": "expr", "code": true, "exp": 3 } }, "CNumber": { "a": 1, "c": { "id": 19, "head": "expr", "code": true, "exp": 3 } }, "true": { "a": 1, "c": { "id": 19, "head": "expr", "code": true, "exp": 3 } }, "false": { "a": 1, "c": { "id": 19, "head": "expr", "code": true, "exp": 3 } }, "null": { "a": 1, "c": { "id": 19, "head": "expr", "code": true, "exp": 3 } }, ";": { "a": 1, "c": { "id": 19, "head": "expr", "code": true, "exp": 3 } }, ",": { "a": 1, "c": { "id": 19, "head": "expr", "code": true, "exp": 3 } }, "$": { "a": 1, "c": { "id": 19, "head": "expr", "code": true, "exp": 3 } }, ")": { "a": 1, "c": { "id": 19, "head": "expr", "code": true, "exp": 3 } }, ":": { "a": 1, "c": { "id": 19, "head": "expr", "code": true, "exp": 3 } }, "}": { "a": 1, "c": { "id": 19, "head": "expr", "code": true, "exp": 3 } } }, 85: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 86: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 2, "to": 42 }, "|": { "a": 2, "to": 43 }, "&&": { "a": 2, "to": 44 }, "||": { "a": 2, "to": 45 }, "?": { "a": 2, "to": 46 }, "~": { "a": 1, "c": { "id": 32, "head": "expr", "code": true, "exp": 3 } }, "for": { "a": 1, "c": { "id": 32, "head": "expr", "code": true, "exp": 3 } }, "(": { "a": 1, "c": { "id": 32, "head": "expr", "code": true, "exp": 3 } }, "CString": { "a": 1, "c": { "id": 32, "head": "expr", "code": true, "exp": 3 } }, "id": { "a": 1, "c": { "id": 32, "head": "expr", "code": true, "exp": 3 } }, "{": { "a": 1, "c": { "id": 32, "head": "expr", "code": true, "exp": 3 } }, "@": { "a": 1, "c": { "id": 32, "head": "expr", "code": true, "exp": 3 } }, "CInt": { "a": 1, "c": { "id": 32, "head": "expr", "code": true, "exp": 3 } }, "OXCInt": { "a": 1, "c": { "id": 32, "head": "expr", "code": true, "exp": 3 } }, "CNumber": { "a": 1, "c": { "id": 32, "head": "expr", "code": true, "exp": 3 } }, "true": { "a": 1, "c": { "id": 32, "head": "expr", "code": true, "exp": 3 } }, "false": { "a": 1, "c": { "id": 32, "head": "expr", "code": true, "exp": 3 } }, "null": { "a": 1, "c": { "id": 32, "head": "expr", "code": true, "exp": 3 } }, ";": { "a": 1, "c": { "id": 32, "head": "expr", "code": true, "exp": 3 } }, ",": { "a": 1, "c": { "id": 32, "head": "expr", "code": true, "exp": 3 } }, "$": { "a": 1, "c": { "id": 32, "head": "expr", "code": true, "exp": 3 } }, ")": { "a": 1, "c": { "id": 32, "head": "expr", "code": true, "exp": 3 } }, ":": { "a": 1, "c": { "id": 32, "head": "expr", "code": true, "exp": 3 } }, "}": { "a": 1, "c": { "id": 32, "head": "expr", "code": true, "exp": 3 } } }, 87: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "=": { "a": 2, "to": 120 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 88: { "-": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "+": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "!": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "*": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "/": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "%": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "<<": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, ">>": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "<<<": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, ">>>": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, ">": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "<": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "=": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "&": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "^": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "|": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "&&": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "||": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "?": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "~": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "for": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "(": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "CString": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "id": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "{": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "@": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "CInt": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "OXCInt": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "CNumber": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "true": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "false": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "null": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, ";": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, ",": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "$": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, ")": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, ":": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } }, "}": { "a": 1, "c": { "id": 26, "head": "expr", "code": true, "exp": 3 } } }, 89: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 90: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 2, "to": 42 }, "|": { "a": 1, "c": { "id": 28, "head": "expr", "code": true, "exp": 3 } }, "&&": { "a": 1, "c": { "id": 28, "head": "expr", "code": true, "exp": 3 } }, "||": { "a": 1, "c": { "id": 28, "head": "expr", "code": true, "exp": 3 } }, "?": { "a": 1, "c": { "id": 28, "head": "expr", "code": true, "exp": 3 } }, "~": { "a": 1, "c": { "id": 28, "head": "expr", "code": true, "exp": 3 } }, "for": { "a": 1, "c": { "id": 28, "head": "expr", "code": true, "exp": 3 } }, "(": { "a": 1, "c": { "id": 28, "head": "expr", "code": true, "exp": 3 } }, "CString": { "a": 1, "c": { "id": 28, "head": "expr", "code": true, "exp": 3 } }, "id": { "a": 1, "c": { "id": 28, "head": "expr", "code": true, "exp": 3 } }, "{": { "a": 1, "c": { "id": 28, "head": "expr", "code": true, "exp": 3 } }, "@": { "a": 1, "c": { "id": 28, "head": "expr", "code": true, "exp": 3 } }, "CInt": { "a": 1, "c": { "id": 28, "head": "expr", "code": true, "exp": 3 } }, "OXCInt": { "a": 1, "c": { "id": 28, "head": "expr", "code": true, "exp": 3 } }, "CNumber": { "a": 1, "c": { "id": 28, "head": "expr", "code": true, "exp": 3 } }, "true": { "a": 1, "c": { "id": 28, "head": "expr", "code": true, "exp": 3 } }, "false": { "a": 1, "c": { "id": 28, "head": "expr", "code": true, "exp": 3 } }, "null": { "a": 1, "c": { "id": 28, "head": "expr", "code": true, "exp": 3 } }, ";": { "a": 1, "c": { "id": 28, "head": "expr", "code": true, "exp": 3 } }, ",": { "a": 1, "c": { "id": 28, "head": "expr", "code": true, "exp": 3 } }, "$": { "a": 1, "c": { "id": 28, "head": "expr", "code": true, "exp": 3 } }, ")": { "a": 1, "c": { "id": 28, "head": "expr", "code": true, "exp": 3 } }, ":": { "a": 1, "c": { "id": 28, "head": "expr", "code": true, "exp": 3 } }, "}": { "a": 1, "c": { "id": 28, "head": "expr", "code": true, "exp": 3 } } }, 91: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 92: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 2, "to": 42 }, "|": { "a": 2, "to": 43 }, "&&": { "a": 1, "c": { "id": 29, "head": "expr", "code": true, "exp": 3 } }, "||": { "a": 1, "c": { "id": 29, "head": "expr", "code": true, "exp": 3 } }, "?": { "a": 1, "c": { "id": 29, "head": "expr", "code": true, "exp": 3 } }, "~": { "a": 1, "c": { "id": 29, "head": "expr", "code": true, "exp": 3 } }, "for": { "a": 1, "c": { "id": 29, "head": "expr", "code": true, "exp": 3 } }, "(": { "a": 1, "c": { "id": 29, "head": "expr", "code": true, "exp": 3 } }, "CString": { "a": 1, "c": { "id": 29, "head": "expr", "code": true, "exp": 3 } }, "id": { "a": 1, "c": { "id": 29, "head": "expr", "code": true, "exp": 3 } }, "{": { "a": 1, "c": { "id": 29, "head": "expr", "code": true, "exp": 3 } }, "@": { "a": 1, "c": { "id": 29, "head": "expr", "code": true, "exp": 3 } }, "CInt": { "a": 1, "c": { "id": 29, "head": "expr", "code": true, "exp": 3 } }, "OXCInt": { "a": 1, "c": { "id": 29, "head": "expr", "code": true, "exp": 3 } }, "CNumber": { "a": 1, "c": { "id": 29, "head": "expr", "code": true, "exp": 3 } }, "true": { "a": 1, "c": { "id": 29, "head": "expr", "code": true, "exp": 3 } }, "false": { "a": 1, "c": { "id": 29, "head": "expr", "code": true, "exp": 3 } }, "null": { "a": 1, "c": { "id": 29, "head": "expr", "code": true, "exp": 3 } }, ";": { "a": 1, "c": { "id": 29, "head": "expr", "code": true, "exp": 3 } }, ",": { "a": 1, "c": { "id": 29, "head": "expr", "code": true, "exp": 3 } }, "$": { "a": 1, "c": { "id": 29, "head": "expr", "code": true, "exp": 3 } }, ")": { "a": 1, "c": { "id": 29, "head": "expr", "code": true, "exp": 3 } }, ":": { "a": 1, "c": { "id": 29, "head": "expr", "code": true, "exp": 3 } }, "}": { "a": 1, "c": { "id": 29, "head": "expr", "code": true, "exp": 3 } } }, 93: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 94: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 2, "to": 42 }, "|": { "a": 2, "to": 43 }, "&&": { "a": 2, "to": 44 }, "||": { "a": 1, "c": { "id": 30, "head": "expr", "code": true, "exp": 3 } }, "?": { "a": 1, "c": { "id": 30, "head": "expr", "code": true, "exp": 3 } }, "~": { "a": 1, "c": { "id": 30, "head": "expr", "code": true, "exp": 3 } }, "for": { "a": 1, "c": { "id": 30, "head": "expr", "code": true, "exp": 3 } }, "(": { "a": 1, "c": { "id": 30, "head": "expr", "code": true, "exp": 3 } }, "CString": { "a": 1, "c": { "id": 30, "head": "expr", "code": true, "exp": 3 } }, "id": { "a": 1, "c": { "id": 30, "head": "expr", "code": true, "exp": 3 } }, "{": { "a": 1, "c": { "id": 30, "head": "expr", "code": true, "exp": 3 } }, "@": { "a": 1, "c": { "id": 30, "head": "expr", "code": true, "exp": 3 } }, "CInt": { "a": 1, "c": { "id": 30, "head": "expr", "code": true, "exp": 3 } }, "OXCInt": { "a": 1, "c": { "id": 30, "head": "expr", "code": true, "exp": 3 } }, "CNumber": { "a": 1, "c": { "id": 30, "head": "expr", "code": true, "exp": 3 } }, "true": { "a": 1, "c": { "id": 30, "head": "expr", "code": true, "exp": 3 } }, "false": { "a": 1, "c": { "id": 30, "head": "expr", "code": true, "exp": 3 } }, "null": { "a": 1, "c": { "id": 30, "head": "expr", "code": true, "exp": 3 } }, ";": { "a": 1, "c": { "id": 30, "head": "expr", "code": true, "exp": 3 } }, ",": { "a": 1, "c": { "id": 30, "head": "expr", "code": true, "exp": 3 } }, "$": { "a": 1, "c": { "id": 30, "head": "expr", "code": true, "exp": 3 } }, ")": { "a": 1, "c": { "id": 30, "head": "expr", "code": true, "exp": 3 } }, ":": { "a": 1, "c": { "id": 30, "head": "expr", "code": true, "exp": 3 } }, "}": { "a": 1, "c": { "id": 30, "head": "expr", "code": true, "exp": 3 } } }, 95: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 2, "to": 42 }, "|": { "a": 2, "to": 43 }, "&&": { "a": 2, "to": 44 }, "||": { "a": 2, "to": 45 }, "?": { "a": 1, "c": { "id": 31, "head": "expr", "code": true, "exp": 3 } }, "~": { "a": 1, "c": { "id": 31, "head": "expr", "code": true, "exp": 3 } }, "for": { "a": 1, "c": { "id": 31, "head": "expr", "code": true, "exp": 3 } }, "(": { "a": 1, "c": { "id": 31, "head": "expr", "code": true, "exp": 3 } }, "CString": { "a": 1, "c": { "id": 31, "head": "expr", "code": true, "exp": 3 } }, "id": { "a": 1, "c": { "id": 31, "head": "expr", "code": true, "exp": 3 } }, "{": { "a": 1, "c": { "id": 31, "head": "expr", "code": true, "exp": 3 } }, "@": { "a": 1, "c": { "id": 31, "head": "expr", "code": true, "exp": 3 } }, "CInt": { "a": 1, "c": { "id": 31, "head": "expr", "code": true, "exp": 3 } }, "OXCInt": { "a": 1, "c": { "id": 31, "head": "expr", "code": true, "exp": 3 } }, "CNumber": { "a": 1, "c": { "id": 31, "head": "expr", "code": true, "exp": 3 } }, "true": { "a": 1, "c": { "id": 31, "head": "expr", "code": true, "exp": 3 } }, "false": { "a": 1, "c": { "id": 31, "head": "expr", "code": true, "exp": 3 } }, "null": { "a": 1, "c": { "id": 31, "head": "expr", "code": true, "exp": 3 } }, ";": { "a": 1, "c": { "id": 31, "head": "expr", "code": true, "exp": 3 } }, ",": { "a": 1, "c": { "id": 31, "head": "expr", "code": true, "exp": 3 } }, "$": { "a": 1, "c": { "id": 31, "head": "expr", "code": true, "exp": 3 } }, ")": { "a": 1, "c": { "id": 31, "head": "expr", "code": true, "exp": 3 } }, ":": { "a": 1, "c": { "id": 31, "head": "expr", "code": true, "exp": 3 } }, "}": { "a": 1, "c": { "id": 31, "head": "expr", "code": true, "exp": 3 } } }, 96: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 97: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 2, "to": 42 }, "|": { "a": 2, "to": 43 }, "&&": { "a": 2, "to": 44 }, "||": { "a": 2, "to": 45 }, "?": { "a": 2, "to": 46 }, ":": { "a": 2, "to": 125 } }, 98: { "(": { "a": 2, "to": 53 }, ",": { "a": 2, "to": 126 }, ".": { "a": 2, "to": 54 } }, 99: { ",": { "a": 1, "c": { "id": 55, "head": "atr", "code": true, "exp": 1 } }, ".": { "a": 1, "c": { "id": 55, "head": "atr", "code": true, "exp": 1 } }, "(": { "a": 1, "c": { "id": 55, "head": "atr", "code": true, "exp": 1 } } }, 100: { "-": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "+": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "!": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "~": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "for": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "(": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "CString": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "id": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "{": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "@": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "CInt": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "OXCInt": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "CNumber": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "true": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "false": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "null": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, ";": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, ",": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "$": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "*": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "/": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "%": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "<<": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, ">>": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "<<<": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, ">>>": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, ">": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "<": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "=": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "&": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "^": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "|": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "&&": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "||": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "?": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, ".": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, ")": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, ":": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } }, "}": { "a": 1, "c": { "id": 54, "head": "atr", "code": true, "exp": 3 } } }, 101: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 2, "to": 42 }, "|": { "a": 2, "to": 43 }, "&&": { "a": 2, "to": 44 }, "||": { "a": 2, "to": 45 }, "?": { "a": 2, "to": 46 }, ",": { "a": 2, "to": 127 }, ")": { "a": 1, "c": { "id": 73, "head": "callParams", "code": true, "exp": 1 } } }, 102: { "-": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "+": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "!": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "~": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "for": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "(": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "CString": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "id": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "{": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "@": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "CInt": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "OXCInt": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "CNumber": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "true": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "false": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "null": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, ";": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, ",": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "$": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "*": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "/": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "%": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "<<": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, ">>": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "<<<": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, ">>>": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, ">": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "<": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "=": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "&": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "^": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "|": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "&&": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "||": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "?": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, ".": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, ")": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, ":": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } }, "}": { "a": 1, "c": { "id": 85, "head": "funcCallEnd", "code": true, "exp": 2 } } }, 103: { ")": { "a": 2, "to": 128 } }, 104: { "-": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "+": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "!": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "~": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "for": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "(": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "CString": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "id": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "{": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "@": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "CInt": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "OXCInt": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "CNumber": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "true": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "false": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "null": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, ";": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, ",": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "$": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "*": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "/": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "%": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "<<": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, ">>": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "<<<": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, ">>>": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, ">": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "<": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "=": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "&": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "^": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "|": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "&&": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "||": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "?": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, ".": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, ")": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, ":": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } }, "}": { "a": 1, "c": { "id": 58, "head": "atr", "code": true, "exp": 3 } } }, 105: { "id": { "a": 2, "to": 129 } }, 106: { "-": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "+": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "!": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "~": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "for": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "(": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "CString": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "id": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "{": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "@": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "CInt": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "OXCInt": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "CNumber": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "true": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "false": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "null": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, ";": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, ",": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "$": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "*": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "/": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "%": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "<<": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, ">>": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "<<<": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, ">>>": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, ">": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "<": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "=": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "&": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "^": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "|": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "&&": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "||": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "?": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, ".": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, ")": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, ":": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } }, "}": { "a": 1, "c": { "id": 62, "head": "objValue", "code": true, "exp": 3 } } }, 107: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 108: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 2, "to": 42 }, "|": { "a": 2, "to": 43 }, "&&": { "a": 2, "to": 44 }, "||": { "a": 2, "to": 45 }, "?": { "a": 2, "to": 46 }, "~": { "a": 1, "c": { "id": 38, "head": "expr", "code": true, "exp": 4 } }, "for": { "a": 1, "c": { "id": 38, "head": "expr", "code": true, "exp": 4 } }, "(": { "a": 1, "c": { "id": 38, "head": "expr", "code": true, "exp": 4 } }, "CString": { "a": 1, "c": { "id": 38, "head": "expr", "code": true, "exp": 4 } }, "id": { "a": 1, "c": { "id": 38, "head": "expr", "code": true, "exp": 4 } }, "{": { "a": 1, "c": { "id": 38, "head": "expr", "code": true, "exp": 4 } }, "@": { "a": 1, "c": { "id": 38, "head": "expr", "code": true, "exp": 4 } }, "CInt": { "a": 1, "c": { "id": 38, "head": "expr", "code": true, "exp": 4 } }, "OXCInt": { "a": 1, "c": { "id": 38, "head": "expr", "code": true, "exp": 4 } }, "CNumber": { "a": 1, "c": { "id": 38, "head": "expr", "code": true, "exp": 4 } }, "true": { "a": 1, "c": { "id": 38, "head": "expr", "code": true, "exp": 4 } }, "false": { "a": 1, "c": { "id": 38, "head": "expr", "code": true, "exp": 4 } }, "null": { "a": 1, "c": { "id": 38, "head": "expr", "code": true, "exp": 4 } }, ";": { "a": 1, "c": { "id": 38, "head": "expr", "code": true, "exp": 4 } }, ",": { "a": 1, "c": { "id": 38, "head": "expr", "code": true, "exp": 4 } }, "$": { "a": 1, "c": { "id": 38, "head": "expr", "code": true, "exp": 4 } }, ")": { "a": 1, "c": { "id": 38, "head": "expr", "code": true, "exp": 4 } }, ":": { "a": 1, "c": { "id": 38, "head": "expr", "code": true, "exp": 4 } }, "}": { "a": 1, "c": { "id": 38, "head": "expr", "code": true, "exp": 4 } } }, 109: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 2, "to": 42 }, "|": { "a": 2, "to": 43 }, "&&": { "a": 2, "to": 44 }, "||": { "a": 2, "to": 45 }, "?": { "a": 2, "to": 46 }, "~": { "a": 1, "c": { "id": 37, "head": "expr", "code": true, "exp": 4 } }, "for": { "a": 1, "c": { "id": 37, "head": "expr", "code": true, "exp": 4 } }, "(": { "a": 1, "c": { "id": 37, "head": "expr", "code": true, "exp": 4 } }, "CString": { "a": 1, "c": { "id": 37, "head": "expr", "code": true, "exp": 4 } }, "id": { "a": 1, "c": { "id": 37, "head": "expr", "code": true, "exp": 4 } }, "{": { "a": 1, "c": { "id": 37, "head": "expr", "code": true, "exp": 4 } }, "@": { "a": 1, "c": { "id": 37, "head": "expr", "code": true, "exp": 4 } }, "CInt": { "a": 1, "c": { "id": 37, "head": "expr", "code": true, "exp": 4 } }, "OXCInt": { "a": 1, "c": { "id": 37, "head": "expr", "code": true, "exp": 4 } }, "CNumber": { "a": 1, "c": { "id": 37, "head": "expr", "code": true, "exp": 4 } }, "true": { "a": 1, "c": { "id": 37, "head": "expr", "code": true, "exp": 4 } }, "false": { "a": 1, "c": { "id": 37, "head": "expr", "code": true, "exp": 4 } }, "null": { "a": 1, "c": { "id": 37, "head": "expr", "code": true, "exp": 4 } }, ";": { "a": 1, "c": { "id": 37, "head": "expr", "code": true, "exp": 4 } }, ",": { "a": 1, "c": { "id": 37, "head": "expr", "code": true, "exp": 4 } }, "$": { "a": 1, "c": { "id": 37, "head": "expr", "code": true, "exp": 4 } }, ")": { "a": 1, "c": { "id": 37, "head": "expr", "code": true, "exp": 4 } }, ":": { "a": 1, "c": { "id": 37, "head": "expr", "code": true, "exp": 4 } }, "}": { "a": 1, "c": { "id": 37, "head": "expr", "code": true, "exp": 4 } } }, 110: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 1, "c": { "id": 25, "head": "expr", "code": true, "exp": 4 } }, "|": { "a": 1, "c": { "id": 25, "head": "expr", "code": true, "exp": 4 } }, "&&": { "a": 1, "c": { "id": 25, "head": "expr", "code": true, "exp": 4 } }, "||": { "a": 1, "c": { "id": 25, "head": "expr", "code": true, "exp": 4 } }, "?": { "a": 1, "c": { "id": 25, "head": "expr", "code": true, "exp": 4 } }, "~": { "a": 1, "c": { "id": 25, "head": "expr", "code": true, "exp": 4 } }, "for": { "a": 1, "c": { "id": 25, "head": "expr", "code": true, "exp": 4 } }, "(": { "a": 1, "c": { "id": 25, "head": "expr", "code": true, "exp": 4 } }, "CString": { "a": 1, "c": { "id": 25, "head": "expr", "code": true, "exp": 4 } }, "id": { "a": 1, "c": { "id": 25, "head": "expr", "code": true, "exp": 4 } }, "{": { "a": 1, "c": { "id": 25, "head": "expr", "code": true, "exp": 4 } }, "@": { "a": 1, "c": { "id": 25, "head": "expr", "code": true, "exp": 4 } }, "CInt": { "a": 1, "c": { "id": 25, "head": "expr", "code": true, "exp": 4 } }, "OXCInt": { "a": 1, "c": { "id": 25, "head": "expr", "code": true, "exp": 4 } }, "CNumber": { "a": 1, "c": { "id": 25, "head": "expr", "code": true, "exp": 4 } }, "true": { "a": 1, "c": { "id": 25, "head": "expr", "code": true, "exp": 4 } }, "false": { "a": 1, "c": { "id": 25, "head": "expr", "code": true, "exp": 4 } }, "null": { "a": 1, "c": { "id": 25, "head": "expr", "code": true, "exp": 4 } }, ";": { "a": 1, "c": { "id": 25, "head": "expr", "code": true, "exp": 4 } }, ",": { "a": 1, "c": { "id": 25, "head": "expr", "code": true, "exp": 4 } }, "$": { "a": 1, "c": { "id": 25, "head": "expr", "code": true, "exp": 4 } }, ")": { "a": 1, "c": { "id": 25, "head": "expr", "code": true, "exp": 4 } }, ":": { "a": 1, "c": { "id": 25, "head": "expr", "code": true, "exp": 4 } }, "}": { "a": 1, "c": { "id": 25, "head": "expr", "code": true, "exp": 4 } } }, 111: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 112: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 2, "to": 42 }, "|": { "a": 2, "to": 43 }, "&&": { "a": 2, "to": 44 }, "||": { "a": 2, "to": 45 }, "?": { "a": 2, "to": 46 }, "~": { "a": 1, "c": { "id": 33, "head": "expr", "code": true, "exp": 4 } }, "for": { "a": 1, "c": { "id": 33, "head": "expr", "code": true, "exp": 4 } }, "(": { "a": 1, "c": { "id": 33, "head": "expr", "code": true, "exp": 4 } }, "CString": { "a": 1, "c": { "id": 33, "head": "expr", "code": true, "exp": 4 } }, "id": { "a": 1, "c": { "id": 33, "head": "expr", "code": true, "exp": 4 } }, "{": { "a": 1, "c": { "id": 33, "head": "expr", "code": true, "exp": 4 } }, "@": { "a": 1, "c": { "id": 33, "head": "expr", "code": true, "exp": 4 } }, "CInt": { "a": 1, "c": { "id": 33, "head": "expr", "code": true, "exp": 4 } }, "OXCInt": { "a": 1, "c": { "id": 33, "head": "expr", "code": true, "exp": 4 } }, "CNumber": { "a": 1, "c": { "id": 33, "head": "expr", "code": true, "exp": 4 } }, "true": { "a": 1, "c": { "id": 33, "head": "expr", "code": true, "exp": 4 } }, "false": { "a": 1, "c": { "id": 33, "head": "expr", "code": true, "exp": 4 } }, "null": { "a": 1, "c": { "id": 33, "head": "expr", "code": true, "exp": 4 } }, ";": { "a": 1, "c": { "id": 33, "head": "expr", "code": true, "exp": 4 } }, ",": { "a": 1, "c": { "id": 33, "head": "expr", "code": true, "exp": 4 } }, "$": { "a": 1, "c": { "id": 33, "head": "expr", "code": true, "exp": 4 } }, ")": { "a": 1, "c": { "id": 33, "head": "expr", "code": true, "exp": 4 } }, ":": { "a": 1, "c": { "id": 33, "head": "expr", "code": true, "exp": 4 } }, "}": { "a": 1, "c": { "id": 33, "head": "expr", "code": true, "exp": 4 } } }, 113: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 2, "to": 42 }, "|": { "a": 2, "to": 43 }, "&&": { "a": 2, "to": 44 }, "||": { "a": 2, "to": 45 }, "?": { "a": 2, "to": 46 }, "~": { "a": 1, "c": { "id": 34, "head": "expr", "code": true, "exp": 4 } }, "for": { "a": 1, "c": { "id": 34, "head": "expr", "code": true, "exp": 4 } }, "(": { "a": 1, "c": { "id": 34, "head": "expr", "code": true, "exp": 4 } }, "CString": { "a": 1, "c": { "id": 34, "head": "expr", "code": true, "exp": 4 } }, "id": { "a": 1, "c": { "id": 34, "head": "expr", "code": true, "exp": 4 } }, "{": { "a": 1, "c": { "id": 34, "head": "expr", "code": true, "exp": 4 } }, "@": { "a": 1, "c": { "id": 34, "head": "expr", "code": true, "exp": 4 } }, "CInt": { "a": 1, "c": { "id": 34, "head": "expr", "code": true, "exp": 4 } }, "OXCInt": { "a": 1, "c": { "id": 34, "head": "expr", "code": true, "exp": 4 } }, "CNumber": { "a": 1, "c": { "id": 34, "head": "expr", "code": true, "exp": 4 } }, "true": { "a": 1, "c": { "id": 34, "head": "expr", "code": true, "exp": 4 } }, "false": { "a": 1, "c": { "id": 34, "head": "expr", "code": true, "exp": 4 } }, "null": { "a": 1, "c": { "id": 34, "head": "expr", "code": true, "exp": 4 } }, ";": { "a": 1, "c": { "id": 34, "head": "expr", "code": true, "exp": 4 } }, ",": { "a": 1, "c": { "id": 34, "head": "expr", "code": true, "exp": 4 } }, "$": { "a": 1, "c": { "id": 34, "head": "expr", "code": true, "exp": 4 } }, ")": { "a": 1, "c": { "id": 34, "head": "expr", "code": true, "exp": 4 } }, ":": { "a": 1, "c": { "id": 34, "head": "expr", "code": true, "exp": 4 } }, "}": { "a": 1, "c": { "id": 34, "head": "expr", "code": true, "exp": 4 } } }, 114: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 2, "to": 42 }, "|": { "a": 2, "to": 43 }, "&&": { "a": 2, "to": 44 }, "||": { "a": 2, "to": 45 }, "?": { "a": 2, "to": 46 }, "~": { "a": 1, "c": { "id": 35, "head": "expr", "code": true, "exp": 4 } }, "for": { "a": 1, "c": { "id": 35, "head": "expr", "code": true, "exp": 4 } }, "(": { "a": 1, "c": { "id": 35, "head": "expr", "code": true, "exp": 4 } }, "CString": { "a": 1, "c": { "id": 35, "head": "expr", "code": true, "exp": 4 } }, "id": { "a": 1, "c": { "id": 35, "head": "expr", "code": true, "exp": 4 } }, "{": { "a": 1, "c": { "id": 35, "head": "expr", "code": true, "exp": 4 } }, "@": { "a": 1, "c": { "id": 35, "head": "expr", "code": true, "exp": 4 } }, "CInt": { "a": 1, "c": { "id": 35, "head": "expr", "code": true, "exp": 4 } }, "OXCInt": { "a": 1, "c": { "id": 35, "head": "expr", "code": true, "exp": 4 } }, "CNumber": { "a": 1, "c": { "id": 35, "head": "expr", "code": true, "exp": 4 } }, "true": { "a": 1, "c": { "id": 35, "head": "expr", "code": true, "exp": 4 } }, "false": { "a": 1, "c": { "id": 35, "head": "expr", "code": true, "exp": 4 } }, "null": { "a": 1, "c": { "id": 35, "head": "expr", "code": true, "exp": 4 } }, ";": { "a": 1, "c": { "id": 35, "head": "expr", "code": true, "exp": 4 } }, ",": { "a": 1, "c": { "id": 35, "head": "expr", "code": true, "exp": 4 } }, "$": { "a": 1, "c": { "id": 35, "head": "expr", "code": true, "exp": 4 } }, ")": { "a": 1, "c": { "id": 35, "head": "expr", "code": true, "exp": 4 } }, ":": { "a": 1, "c": { "id": 35, "head": "expr", "code": true, "exp": 4 } }, "}": { "a": 1, "c": { "id": 35, "head": "expr", "code": true, "exp": 4 } } }, 115: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 2, "to": 42 }, "|": { "a": 2, "to": 43 }, "&&": { "a": 2, "to": 44 }, "||": { "a": 2, "to": 45 }, "?": { "a": 2, "to": 46 }, "~": { "a": 1, "c": { "id": 40, "head": "expr", "code": true, "exp": 4 } }, "for": { "a": 1, "c": { "id": 40, "head": "expr", "code": true, "exp": 4 } }, "(": { "a": 1, "c": { "id": 40, "head": "expr", "code": true, "exp": 4 } }, "CString": { "a": 1, "c": { "id": 40, "head": "expr", "code": true, "exp": 4 } }, "id": { "a": 1, "c": { "id": 40, "head": "expr", "code": true, "exp": 4 } }, "{": { "a": 1, "c": { "id": 40, "head": "expr", "code": true, "exp": 4 } }, "@": { "a": 1, "c": { "id": 40, "head": "expr", "code": true, "exp": 4 } }, "CInt": { "a": 1, "c": { "id": 40, "head": "expr", "code": true, "exp": 4 } }, "OXCInt": { "a": 1, "c": { "id": 40, "head": "expr", "code": true, "exp": 4 } }, "CNumber": { "a": 1, "c": { "id": 40, "head": "expr", "code": true, "exp": 4 } }, "true": { "a": 1, "c": { "id": 40, "head": "expr", "code": true, "exp": 4 } }, "false": { "a": 1, "c": { "id": 40, "head": "expr", "code": true, "exp": 4 } }, "null": { "a": 1, "c": { "id": 40, "head": "expr", "code": true, "exp": 4 } }, ";": { "a": 1, "c": { "id": 40, "head": "expr", "code": true, "exp": 4 } }, ",": { "a": 1, "c": { "id": 40, "head": "expr", "code": true, "exp": 4 } }, "$": { "a": 1, "c": { "id": 40, "head": "expr", "code": true, "exp": 4 } }, ")": { "a": 1, "c": { "id": 40, "head": "expr", "code": true, "exp": 4 } }, ":": { "a": 1, "c": { "id": 40, "head": "expr", "code": true, "exp": 4 } }, "}": { "a": 1, "c": { "id": 40, "head": "expr", "code": true, "exp": 4 } } }, 116: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 2, "to": 42 }, "|": { "a": 2, "to": 43 }, "&&": { "a": 2, "to": 44 }, "||": { "a": 2, "to": 45 }, "?": { "a": 2, "to": 46 }, "~": { "a": 1, "c": { "id": 41, "head": "expr", "code": true, "exp": 4 } }, "for": { "a": 1, "c": { "id": 41, "head": "expr", "code": true, "exp": 4 } }, "(": { "a": 1, "c": { "id": 41, "head": "expr", "code": true, "exp": 4 } }, "CString": { "a": 1, "c": { "id": 41, "head": "expr", "code": true, "exp": 4 } }, "id": { "a": 1, "c": { "id": 41, "head": "expr", "code": true, "exp": 4 } }, "{": { "a": 1, "c": { "id": 41, "head": "expr", "code": true, "exp": 4 } }, "@": { "a": 1, "c": { "id": 41, "head": "expr", "code": true, "exp": 4 } }, "CInt": { "a": 1, "c": { "id": 41, "head": "expr", "code": true, "exp": 4 } }, "OXCInt": { "a": 1, "c": { "id": 41, "head": "expr", "code": true, "exp": 4 } }, "CNumber": { "a": 1, "c": { "id": 41, "head": "expr", "code": true, "exp": 4 } }, "true": { "a": 1, "c": { "id": 41, "head": "expr", "code": true, "exp": 4 } }, "false": { "a": 1, "c": { "id": 41, "head": "expr", "code": true, "exp": 4 } }, "null": { "a": 1, "c": { "id": 41, "head": "expr", "code": true, "exp": 4 } }, ";": { "a": 1, "c": { "id": 41, "head": "expr", "code": true, "exp": 4 } }, ",": { "a": 1, "c": { "id": 41, "head": "expr", "code": true, "exp": 4 } }, "$": { "a": 1, "c": { "id": 41, "head": "expr", "code": true, "exp": 4 } }, ")": { "a": 1, "c": { "id": 41, "head": "expr", "code": true, "exp": 4 } }, ":": { "a": 1, "c": { "id": 41, "head": "expr", "code": true, "exp": 4 } }, "}": { "a": 1, "c": { "id": 41, "head": "expr", "code": true, "exp": 4 } } }, 117: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 1, "c": { "id": 20, "head": "expr", "code": true, "exp": 4 } }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 1, "c": { "id": 20, "head": "expr", "code": true, "exp": 4 } }, "&": { "a": 2, "to": 41 }, "^": { "a": 1, "c": { "id": 20, "head": "expr", "code": true, "exp": 4 } }, "|": { "a": 1, "c": { "id": 20, "head": "expr", "code": true, "exp": 4 } }, "&&": { "a": 1, "c": { "id": 20, "head": "expr", "code": true, "exp": 4 } }, "||": { "a": 1, "c": { "id": 20, "head": "expr", "code": true, "exp": 4 } }, "?": { "a": 1, "c": { "id": 20, "head": "expr", "code": true, "exp": 4 } }, "~": { "a": 1, "c": { "id": 20, "head": "expr", "code": true, "exp": 4 } }, "for": { "a": 1, "c": { "id": 20, "head": "expr", "code": true, "exp": 4 } }, "(": { "a": 1, "c": { "id": 20, "head": "expr", "code": true, "exp": 4 } }, "CString": { "a": 1, "c": { "id": 20, "head": "expr", "code": true, "exp": 4 } }, "id": { "a": 1, "c": { "id": 20, "head": "expr", "code": true, "exp": 4 } }, "{": { "a": 1, "c": { "id": 20, "head": "expr", "code": true, "exp": 4 } }, "@": { "a": 1, "c": { "id": 20, "head": "expr", "code": true, "exp": 4 } }, "CInt": { "a": 1, "c": { "id": 20, "head": "expr", "code": true, "exp": 4 } }, "OXCInt": { "a": 1, "c": { "id": 20, "head": "expr", "code": true, "exp": 4 } }, "CNumber": { "a": 1, "c": { "id": 20, "head": "expr", "code": true, "exp": 4 } }, "true": { "a": 1, "c": { "id": 20, "head": "expr", "code": true, "exp": 4 } }, "false": { "a": 1, "c": { "id": 20, "head": "expr", "code": true, "exp": 4 } }, "null": { "a": 1, "c": { "id": 20, "head": "expr", "code": true, "exp": 4 } }, ";": { "a": 1, "c": { "id": 20, "head": "expr", "code": true, "exp": 4 } }, ",": { "a": 1, "c": { "id": 20, "head": "expr", "code": true, "exp": 4 } }, "$": { "a": 1, "c": { "id": 20, "head": "expr", "code": true, "exp": 4 } }, ")": { "a": 1, "c": { "id": 20, "head": "expr", "code": true, "exp": 4 } }, ":": { "a": 1, "c": { "id": 20, "head": "expr", "code": true, "exp": 4 } }, "}": { "a": 1, "c": { "id": 20, "head": "expr", "code": true, "exp": 4 } } }, 118: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 1, "c": { "id": 21, "head": "expr", "code": true, "exp": 4 } }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 1, "c": { "id": 21, "head": "expr", "code": true, "exp": 4 } }, "&": { "a": 2, "to": 41 }, "^": { "a": 1, "c": { "id": 21, "head": "expr", "code": true, "exp": 4 } }, "|": { "a": 1, "c": { "id": 21, "head": "expr", "code": true, "exp": 4 } }, "&&": { "a": 1, "c": { "id": 21, "head": "expr", "code": true, "exp": 4 } }, "||": { "a": 1, "c": { "id": 21, "head": "expr", "code": true, "exp": 4 } }, "?": { "a": 1, "c": { "id": 21, "head": "expr", "code": true, "exp": 4 } }, "~": { "a": 1, "c": { "id": 21, "head": "expr", "code": true, "exp": 4 } }, "for": { "a": 1, "c": { "id": 21, "head": "expr", "code": true, "exp": 4 } }, "(": { "a": 1, "c": { "id": 21, "head": "expr", "code": true, "exp": 4 } }, "CString": { "a": 1, "c": { "id": 21, "head": "expr", "code": true, "exp": 4 } }, "id": { "a": 1, "c": { "id": 21, "head": "expr", "code": true, "exp": 4 } }, "{": { "a": 1, "c": { "id": 21, "head": "expr", "code": true, "exp": 4 } }, "@": { "a": 1, "c": { "id": 21, "head": "expr", "code": true, "exp": 4 } }, "CInt": { "a": 1, "c": { "id": 21, "head": "expr", "code": true, "exp": 4 } }, "OXCInt": { "a": 1, "c": { "id": 21, "head": "expr", "code": true, "exp": 4 } }, "CNumber": { "a": 1, "c": { "id": 21, "head": "expr", "code": true, "exp": 4 } }, "true": { "a": 1, "c": { "id": 21, "head": "expr", "code": true, "exp": 4 } }, "false": { "a": 1, "c": { "id": 21, "head": "expr", "code": true, "exp": 4 } }, "null": { "a": 1, "c": { "id": 21, "head": "expr", "code": true, "exp": 4 } }, ";": { "a": 1, "c": { "id": 21, "head": "expr", "code": true, "exp": 4 } }, ",": { "a": 1, "c": { "id": 21, "head": "expr", "code": true, "exp": 4 } }, "$": { "a": 1, "c": { "id": 21, "head": "expr", "code": true, "exp": 4 } }, ")": { "a": 1, "c": { "id": 21, "head": "expr", "code": true, "exp": 4 } }, ":": { "a": 1, "c": { "id": 21, "head": "expr", "code": true, "exp": 4 } }, "}": { "a": 1, "c": { "id": 21, "head": "expr", "code": true, "exp": 4 } } }, 119: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 1, "c": { "id": 22, "head": "expr", "code": true, "exp": 4 } }, "|": { "a": 1, "c": { "id": 22, "head": "expr", "code": true, "exp": 4 } }, "&&": { "a": 1, "c": { "id": 22, "head": "expr", "code": true, "exp": 4 } }, "||": { "a": 1, "c": { "id": 22, "head": "expr", "code": true, "exp": 4 } }, "?": { "a": 1, "c": { "id": 22, "head": "expr", "code": true, "exp": 4 } }, "~": { "a": 1, "c": { "id": 22, "head": "expr", "code": true, "exp": 4 } }, "for": { "a": 1, "c": { "id": 22, "head": "expr", "code": true, "exp": 4 } }, "(": { "a": 1, "c": { "id": 22, "head": "expr", "code": true, "exp": 4 } }, "CString": { "a": 1, "c": { "id": 22, "head": "expr", "code": true, "exp": 4 } }, "id": { "a": 1, "c": { "id": 22, "head": "expr", "code": true, "exp": 4 } }, "{": { "a": 1, "c": { "id": 22, "head": "expr", "code": true, "exp": 4 } }, "@": { "a": 1, "c": { "id": 22, "head": "expr", "code": true, "exp": 4 } }, "CInt": { "a": 1, "c": { "id": 22, "head": "expr", "code": true, "exp": 4 } }, "OXCInt": { "a": 1, "c": { "id": 22, "head": "expr", "code": true, "exp": 4 } }, "CNumber": { "a": 1, "c": { "id": 22, "head": "expr", "code": true, "exp": 4 } }, "true": { "a": 1, "c": { "id": 22, "head": "expr", "code": true, "exp": 4 } }, "false": { "a": 1, "c": { "id": 22, "head": "expr", "code": true, "exp": 4 } }, "null": { "a": 1, "c": { "id": 22, "head": "expr", "code": true, "exp": 4 } }, ";": { "a": 1, "c": { "id": 22, "head": "expr", "code": true, "exp": 4 } }, ",": { "a": 1, "c": { "id": 22, "head": "expr", "code": true, "exp": 4 } }, "$": { "a": 1, "c": { "id": 22, "head": "expr", "code": true, "exp": 4 } }, ")": { "a": 1, "c": { "id": 22, "head": "expr", "code": true, "exp": 4 } }, ":": { "a": 1, "c": { "id": 22, "head": "expr", "code": true, "exp": 4 } }, "}": { "a": 1, "c": { "id": 22, "head": "expr", "code": true, "exp": 4 } } }, 120: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 121: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 2, "to": 42 }, "|": { "a": 2, "to": 43 }, "&&": { "a": 2, "to": 44 }, "||": { "a": 2, "to": 45 }, "?": { "a": 2, "to": 46 }, "~": { "a": 1, "c": { "id": 36, "head": "expr", "code": true, "exp": 4 } }, "for": { "a": 1, "c": { "id": 36, "head": "expr", "code": true, "exp": 4 } }, "(": { "a": 1, "c": { "id": 36, "head": "expr", "code": true, "exp": 4 } }, "CString": { "a": 1, "c": { "id": 36, "head": "expr", "code": true, "exp": 4 } }, "id": { "a": 1, "c": { "id": 36, "head": "expr", "code": true, "exp": 4 } }, "{": { "a": 1, "c": { "id": 36, "head": "expr", "code": true, "exp": 4 } }, "@": { "a": 1, "c": { "id": 36, "head": "expr", "code": true, "exp": 4 } }, "CInt": { "a": 1, "c": { "id": 36, "head": "expr", "code": true, "exp": 4 } }, "OXCInt": { "a": 1, "c": { "id": 36, "head": "expr", "code": true, "exp": 4 } }, "CNumber": { "a": 1, "c": { "id": 36, "head": "expr", "code": true, "exp": 4 } }, "true": { "a": 1, "c": { "id": 36, "head": "expr", "code": true, "exp": 4 } }, "false": { "a": 1, "c": { "id": 36, "head": "expr", "code": true, "exp": 4 } }, "null": { "a": 1, "c": { "id": 36, "head": "expr", "code": true, "exp": 4 } }, ";": { "a": 1, "c": { "id": 36, "head": "expr", "code": true, "exp": 4 } }, ",": { "a": 1, "c": { "id": 36, "head": "expr", "code": true, "exp": 4 } }, "$": { "a": 1, "c": { "id": 36, "head": "expr", "code": true, "exp": 4 } }, ")": { "a": 1, "c": { "id": 36, "head": "expr", "code": true, "exp": 4 } }, ":": { "a": 1, "c": { "id": 36, "head": "expr", "code": true, "exp": 4 } }, "}": { "a": 1, "c": { "id": 36, "head": "expr", "code": true, "exp": 4 } } }, 122: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 2, "to": 42 }, "|": { "a": 2, "to": 43 }, "&&": { "a": 2, "to": 44 }, "||": { "a": 2, "to": 45 }, "?": { "a": 2, "to": 46 }, "~": { "a": 1, "c": { "id": 42, "head": "expr", "code": true, "exp": 4 } }, "for": { "a": 1, "c": { "id": 42, "head": "expr", "code": true, "exp": 4 } }, "(": { "a": 1, "c": { "id": 42, "head": "expr", "code": true, "exp": 4 } }, "CString": { "a": 1, "c": { "id": 42, "head": "expr", "code": true, "exp": 4 } }, "id": { "a": 1, "c": { "id": 42, "head": "expr", "code": true, "exp": 4 } }, "{": { "a": 1, "c": { "id": 42, "head": "expr", "code": true, "exp": 4 } }, "@": { "a": 1, "c": { "id": 42, "head": "expr", "code": true, "exp": 4 } }, "CInt": { "a": 1, "c": { "id": 42, "head": "expr", "code": true, "exp": 4 } }, "OXCInt": { "a": 1, "c": { "id": 42, "head": "expr", "code": true, "exp": 4 } }, "CNumber": { "a": 1, "c": { "id": 42, "head": "expr", "code": true, "exp": 4 } }, "true": { "a": 1, "c": { "id": 42, "head": "expr", "code": true, "exp": 4 } }, "false": { "a": 1, "c": { "id": 42, "head": "expr", "code": true, "exp": 4 } }, "null": { "a": 1, "c": { "id": 42, "head": "expr", "code": true, "exp": 4 } }, ";": { "a": 1, "c": { "id": 42, "head": "expr", "code": true, "exp": 4 } }, ",": { "a": 1, "c": { "id": 42, "head": "expr", "code": true, "exp": 4 } }, "$": { "a": 1, "c": { "id": 42, "head": "expr", "code": true, "exp": 4 } }, ")": { "a": 1, "c": { "id": 42, "head": "expr", "code": true, "exp": 4 } }, ":": { "a": 1, "c": { "id": 42, "head": "expr", "code": true, "exp": 4 } }, "}": { "a": 1, "c": { "id": 42, "head": "expr", "code": true, "exp": 4 } } }, 123: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 2, "to": 42 }, "|": { "a": 2, "to": 43 }, "&&": { "a": 2, "to": 44 }, "||": { "a": 2, "to": 45 }, "?": { "a": 2, "to": 46 }, "~": { "a": 1, "c": { "id": 43, "head": "expr", "code": true, "exp": 4 } }, "for": { "a": 1, "c": { "id": 43, "head": "expr", "code": true, "exp": 4 } }, "(": { "a": 1, "c": { "id": 43, "head": "expr", "code": true, "exp": 4 } }, "CString": { "a": 1, "c": { "id": 43, "head": "expr", "code": true, "exp": 4 } }, "id": { "a": 1, "c": { "id": 43, "head": "expr", "code": true, "exp": 4 } }, "{": { "a": 1, "c": { "id": 43, "head": "expr", "code": true, "exp": 4 } }, "@": { "a": 1, "c": { "id": 43, "head": "expr", "code": true, "exp": 4 } }, "CInt": { "a": 1, "c": { "id": 43, "head": "expr", "code": true, "exp": 4 } }, "OXCInt": { "a": 1, "c": { "id": 43, "head": "expr", "code": true, "exp": 4 } }, "CNumber": { "a": 1, "c": { "id": 43, "head": "expr", "code": true, "exp": 4 } }, "true": { "a": 1, "c": { "id": 43, "head": "expr", "code": true, "exp": 4 } }, "false": { "a": 1, "c": { "id": 43, "head": "expr", "code": true, "exp": 4 } }, "null": { "a": 1, "c": { "id": 43, "head": "expr", "code": true, "exp": 4 } }, ";": { "a": 1, "c": { "id": 43, "head": "expr", "code": true, "exp": 4 } }, ",": { "a": 1, "c": { "id": 43, "head": "expr", "code": true, "exp": 4 } }, "$": { "a": 1, "c": { "id": 43, "head": "expr", "code": true, "exp": 4 } }, ")": { "a": 1, "c": { "id": 43, "head": "expr", "code": true, "exp": 4 } }, ":": { "a": 1, "c": { "id": 43, "head": "expr", "code": true, "exp": 4 } }, "}": { "a": 1, "c": { "id": 43, "head": "expr", "code": true, "exp": 4 } } }, 124: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 2, "to": 42 }, "|": { "a": 2, "to": 43 }, "&&": { "a": 2, "to": 44 }, "||": { "a": 2, "to": 45 }, "?": { "a": 2, "to": 46 }, "~": { "a": 1, "c": { "id": 39, "head": "expr", "code": true, "exp": 4 } }, "for": { "a": 1, "c": { "id": 39, "head": "expr", "code": true, "exp": 4 } }, "(": { "a": 1, "c": { "id": 39, "head": "expr", "code": true, "exp": 4 } }, "CString": { "a": 1, "c": { "id": 39, "head": "expr", "code": true, "exp": 4 } }, "id": { "a": 1, "c": { "id": 39, "head": "expr", "code": true, "exp": 4 } }, "{": { "a": 1, "c": { "id": 39, "head": "expr", "code": true, "exp": 4 } }, "@": { "a": 1, "c": { "id": 39, "head": "expr", "code": true, "exp": 4 } }, "CInt": { "a": 1, "c": { "id": 39, "head": "expr", "code": true, "exp": 4 } }, "OXCInt": { "a": 1, "c": { "id": 39, "head": "expr", "code": true, "exp": 4 } }, "CNumber": { "a": 1, "c": { "id": 39, "head": "expr", "code": true, "exp": 4 } }, "true": { "a": 1, "c": { "id": 39, "head": "expr", "code": true, "exp": 4 } }, "false": { "a": 1, "c": { "id": 39, "head": "expr", "code": true, "exp": 4 } }, "null": { "a": 1, "c": { "id": 39, "head": "expr", "code": true, "exp": 4 } }, ";": { "a": 1, "c": { "id": 39, "head": "expr", "code": true, "exp": 4 } }, ",": { "a": 1, "c": { "id": 39, "head": "expr", "code": true, "exp": 4 } }, "$": { "a": 1, "c": { "id": 39, "head": "expr", "code": true, "exp": 4 } }, ")": { "a": 1, "c": { "id": 39, "head": "expr", "code": true, "exp": 4 } }, ":": { "a": 1, "c": { "id": 39, "head": "expr", "code": true, "exp": 4 } }, "}": { "a": 1, "c": { "id": 39, "head": "expr", "code": true, "exp": 4 } } }, 125: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 126: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 127: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 }, ")": { "a": 1, "c": { "id": 86, "head": "callParams", "code": true, "exp": 2 } } }, 128: { "-": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "+": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "!": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "~": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "for": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "(": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "CString": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "id": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "{": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "@": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "CInt": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "OXCInt": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "CNumber": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "true": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "false": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "null": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, ";": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, ",": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "$": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "*": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "/": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "%": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "<<": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, ">>": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "<<<": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, ">>>": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, ">": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "<": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "=": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "&": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "^": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "|": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "&&": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "||": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "?": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, ".": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, ")": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, ":": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } }, "}": { "a": 1, "c": { "id": 71, "head": "funcCallEnd", "code": true, "exp": 3 } } }, 129: { "-": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "+": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "!": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "~": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "for": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "(": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "CString": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "id": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "{": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "@": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "CInt": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "OXCInt": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "CNumber": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "true": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "false": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "null": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, ";": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, ",": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "$": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "*": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "/": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "%": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "<<": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, ">>": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "<<<": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, ">>>": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, ">": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "<": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "=": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "&": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "^": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "|": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "&&": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "||": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "?": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, ".": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, ")": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, ":": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } }, "}": { "a": 1, "c": { "id": 59, "head": "atr", "code": true, "exp": 4 } } }, 130: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 2, "to": 42 }, "|": { "a": 2, "to": 43 }, "&&": { "a": 2, "to": 44 }, "||": { "a": 2, "to": 45 }, "?": { "a": 2, "to": 46 }, ",": { "a": 2, "to": 137 }, "}": { "a": 1, "c": { "id": 64, "head": "objValueItems", "code": true, "exp": 3 } } }, 131: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 1, "c": { "id": 24, "head": "expr", "code": true, "exp": 5 } }, "|": { "a": 1, "c": { "id": 24, "head": "expr", "code": true, "exp": 5 } }, "&&": { "a": 1, "c": { "id": 24, "head": "expr", "code": true, "exp": 5 } }, "||": { "a": 1, "c": { "id": 24, "head": "expr", "code": true, "exp": 5 } }, "?": { "a": 1, "c": { "id": 24, "head": "expr", "code": true, "exp": 5 } }, "~": { "a": 1, "c": { "id": 24, "head": "expr", "code": true, "exp": 5 } }, "for": { "a": 1, "c": { "id": 24, "head": "expr", "code": true, "exp": 5 } }, "(": { "a": 1, "c": { "id": 24, "head": "expr", "code": true, "exp": 5 } }, "CString": { "a": 1, "c": { "id": 24, "head": "expr", "code": true, "exp": 5 } }, "id": { "a": 1, "c": { "id": 24, "head": "expr", "code": true, "exp": 5 } }, "{": { "a": 1, "c": { "id": 24, "head": "expr", "code": true, "exp": 5 } }, "@": { "a": 1, "c": { "id": 24, "head": "expr", "code": true, "exp": 5 } }, "CInt": { "a": 1, "c": { "id": 24, "head": "expr", "code": true, "exp": 5 } }, "OXCInt": { "a": 1, "c": { "id": 24, "head": "expr", "code": true, "exp": 5 } }, "CNumber": { "a": 1, "c": { "id": 24, "head": "expr", "code": true, "exp": 5 } }, "true": { "a": 1, "c": { "id": 24, "head": "expr", "code": true, "exp": 5 } }, "false": { "a": 1, "c": { "id": 24, "head": "expr", "code": true, "exp": 5 } }, "null": { "a": 1, "c": { "id": 24, "head": "expr", "code": true, "exp": 5 } }, ";": { "a": 1, "c": { "id": 24, "head": "expr", "code": true, "exp": 5 } }, ",": { "a": 1, "c": { "id": 24, "head": "expr", "code": true, "exp": 5 } }, "$": { "a": 1, "c": { "id": 24, "head": "expr", "code": true, "exp": 5 } }, ")": { "a": 1, "c": { "id": 24, "head": "expr", "code": true, "exp": 5 } }, ":": { "a": 1, "c": { "id": 24, "head": "expr", "code": true, "exp": 5 } }, "}": { "a": 1, "c": { "id": 24, "head": "expr", "code": true, "exp": 5 } } }, 132: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 1, "c": { "id": 23, "head": "expr", "code": true, "exp": 5 } }, "|": { "a": 1, "c": { "id": 23, "head": "expr", "code": true, "exp": 5 } }, "&&": { "a": 1, "c": { "id": 23, "head": "expr", "code": true, "exp": 5 } }, "||": { "a": 1, "c": { "id": 23, "head": "expr", "code": true, "exp": 5 } }, "?": { "a": 1, "c": { "id": 23, "head": "expr", "code": true, "exp": 5 } }, "~": { "a": 1, "c": { "id": 23, "head": "expr", "code": true, "exp": 5 } }, "for": { "a": 1, "c": { "id": 23, "head": "expr", "code": true, "exp": 5 } }, "(": { "a": 1, "c": { "id": 23, "head": "expr", "code": true, "exp": 5 } }, "CString": { "a": 1, "c": { "id": 23, "head": "expr", "code": true, "exp": 5 } }, "id": { "a": 1, "c": { "id": 23, "head": "expr", "code": true, "exp": 5 } }, "{": { "a": 1, "c": { "id": 23, "head": "expr", "code": true, "exp": 5 } }, "@": { "a": 1, "c": { "id": 23, "head": "expr", "code": true, "exp": 5 } }, "CInt": { "a": 1, "c": { "id": 23, "head": "expr", "code": true, "exp": 5 } }, "OXCInt": { "a": 1, "c": { "id": 23, "head": "expr", "code": true, "exp": 5 } }, "CNumber": { "a": 1, "c": { "id": 23, "head": "expr", "code": true, "exp": 5 } }, "true": { "a": 1, "c": { "id": 23, "head": "expr", "code": true, "exp": 5 } }, "false": { "a": 1, "c": { "id": 23, "head": "expr", "code": true, "exp": 5 } }, "null": { "a": 1, "c": { "id": 23, "head": "expr", "code": true, "exp": 5 } }, ";": { "a": 1, "c": { "id": 23, "head": "expr", "code": true, "exp": 5 } }, ",": { "a": 1, "c": { "id": 23, "head": "expr", "code": true, "exp": 5 } }, "$": { "a": 1, "c": { "id": 23, "head": "expr", "code": true, "exp": 5 } }, ")": { "a": 1, "c": { "id": 23, "head": "expr", "code": true, "exp": 5 } }, ":": { "a": 1, "c": { "id": 23, "head": "expr", "code": true, "exp": 5 } }, "}": { "a": 1, "c": { "id": 23, "head": "expr", "code": true, "exp": 5 } } }, 133: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 2, "to": 42 }, "|": { "a": 2, "to": 43 }, "&&": { "a": 2, "to": 44 }, "||": { "a": 2, "to": 45 }, "?": { "a": 1, "c": { "id": 44, "head": "expr", "code": true, "exp": 5 } }, "~": { "a": 1, "c": { "id": 44, "head": "expr", "code": true, "exp": 5 } }, "for": { "a": 1, "c": { "id": 44, "head": "expr", "code": true, "exp": 5 } }, "(": { "a": 1, "c": { "id": 44, "head": "expr", "code": true, "exp": 5 } }, "CString": { "a": 1, "c": { "id": 44, "head": "expr", "code": true, "exp": 5 } }, "id": { "a": 1, "c": { "id": 44, "head": "expr", "code": true, "exp": 5 } }, "{": { "a": 1, "c": { "id": 44, "head": "expr", "code": true, "exp": 5 } }, "@": { "a": 1, "c": { "id": 44, "head": "expr", "code": true, "exp": 5 } }, "CInt": { "a": 1, "c": { "id": 44, "head": "expr", "code": true, "exp": 5 } }, "OXCInt": { "a": 1, "c": { "id": 44, "head": "expr", "code": true, "exp": 5 } }, "CNumber": { "a": 1, "c": { "id": 44, "head": "expr", "code": true, "exp": 5 } }, "true": { "a": 1, "c": { "id": 44, "head": "expr", "code": true, "exp": 5 } }, "false": { "a": 1, "c": { "id": 44, "head": "expr", "code": true, "exp": 5 } }, "null": { "a": 1, "c": { "id": 44, "head": "expr", "code": true, "exp": 5 } }, ";": { "a": 1, "c": { "id": 44, "head": "expr", "code": true, "exp": 5 } }, ",": { "a": 1, "c": { "id": 44, "head": "expr", "code": true, "exp": 5 } }, "$": { "a": 1, "c": { "id": 44, "head": "expr", "code": true, "exp": 5 } }, ")": { "a": 1, "c": { "id": 44, "head": "expr", "code": true, "exp": 5 } }, ":": { "a": 1, "c": { "id": 44, "head": "expr", "code": true, "exp": 5 } }, "}": { "a": 1, "c": { "id": 44, "head": "expr", "code": true, "exp": 5 } } }, 134: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 2, "to": 42 }, "|": { "a": 2, "to": 43 }, "&&": { "a": 2, "to": 44 }, "||": { "a": 2, "to": 45 }, "?": { "a": 2, "to": 46 }, ")": { "a": 2, "to": 138 } }, 135: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 2, "to": 42 }, "|": { "a": 2, "to": 43 }, "&&": { "a": 2, "to": 44 }, "||": { "a": 2, "to": 45 }, "?": { "a": 2, "to": 46 }, ",": { "a": 2, "to": 127 }, ")": { "a": 1, "c": { "id": 73, "head": "callParams", "code": true, "exp": 1 } } }, 136: { ")": { "a": 1, "c": { "id": 72, "head": "callParams", "code": true, "exp": 3 } } }, 137: { "CInt": { "a": 2, "to": 57 }, "OXCInt": { "a": 2, "to": 58 }, "CNumber": { "a": 2, "to": 59 }, "CString": { "a": 2, "to": 60 }, "id": { "a": 2, "to": 61 }, "}": { "a": 1, "c": { "id": 87, "head": "objValueItems", "code": true, "exp": 4 } } }, 138: { "-": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "+": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "!": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "~": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "for": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "(": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "CString": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "id": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "{": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "@": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "CInt": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "OXCInt": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "CNumber": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "true": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "false": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "null": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, ";": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, ",": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "$": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "*": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "/": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "%": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "<<": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, ">>": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "<<<": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, ">>>": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, ">": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "<": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "=": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "&": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "^": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "|": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "&&": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "||": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "?": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, ")": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, ":": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } }, "}": { "a": 1, "c": { "id": 45, "head": "expr", "code": true, "exp": 6 } } }, 139: { "}": { "a": 1, "c": { "id": 63, "head": "objValueItems", "code": true, "exp": 5 } } }, 140: { ":": { "a": 2, "to": 141 } }, 141: { "-": { "a": 2, "to": 6 }, "+": { "a": 2, "to": 7 }, "!": { "a": 2, "to": 8 }, "~": { "a": 2, "to": 9 }, "for": { "a": 2, "to": 10 }, "(": { "a": 2, "to": 11 }, "CInt": { "a": 2, "to": 14 }, "OXCInt": { "a": 2, "to": 15 }, "CNumber": { "a": 2, "to": 16 }, "CString": { "a": 2, "to": 17 }, "true": { "a": 2, "to": 18 }, "false": { "a": 2, "to": 19 }, "null": { "a": 2, "to": 20 }, "id": { "a": 2, "to": 21 }, "@": { "a": 2, "to": 23 }, "{": { "a": 2, "to": 24 } }, 142: { "-": { "a": 2, "to": 28 }, "+": { "a": 2, "to": 29 }, "!": { "a": 2, "to": 30 }, "*": { "a": 2, "to": 31 }, "/": { "a": 2, "to": 32 }, "%": { "a": 2, "to": 33 }, "<<": { "a": 2, "to": 34 }, ">>": { "a": 2, "to": 35 }, "<<<": { "a": 2, "to": 36 }, ">>>": { "a": 2, "to": 37 }, ">": { "a": 2, "to": 38 }, "<": { "a": 2, "to": 39 }, "=": { "a": 2, "to": 40 }, "&": { "a": 2, "to": 41 }, "^": { "a": 2, "to": 42 }, "|": { "a": 2, "to": 43 }, "&&": { "a": 2, "to": 44 }, "||": { "a": 2, "to": 45 }, "?": { "a": 2, "to": 46 }, ",": { "a": 2, "to": 137 }, "}": { "a": 1, "c": { "id": 64, "head": "objValueItems", "code": true, "exp": 3 } } } };
    ParserTable.go = { 1: { "stmts": 2, "stmt": 3, "expr": 4, "device": 5, "atr": 12, "objValue": 22, "start": 26 }, 2: {}, 3: { "stmts": 27, "stmt": 3, "expr": 4, "device": 5, "atr": 12, "objValue": 22 }, 4: {}, 5: {}, 6: { "expr": 47, "atr": 12, "objValue": 22 }, 7: { "expr": 48, "atr": 12, "objValue": 22 }, 8: { "expr": 49, "atr": 12, "objValue": 22 }, 9: { "expr": 50, "atr": 12, "objValue": 22 }, 10: {}, 11: { "expr": 52, "atr": 12, "objValue": 22 }, 12: { "funcCallEnd": 55 }, 13: {}, 14: {}, 15: {}, 16: {}, 17: {}, 18: {}, 19: {}, 20: {}, 21: {}, 22: {}, 23: {}, 24: { "objValueItems": 62, "objectKey": 64 }, 25: {}, 26: {}, 27: {}, 28: { "expr": 65, "atr": 12, "objValue": 22 }, 29: { "expr": 67, "atr": 12, "objValue": 22 }, 30: {}, 31: { "expr": 70, "atr": 12, "objValue": 22 }, 32: { "expr": 72, "atr": 12, "objValue": 22 }, 33: { "expr": 74, "atr": 12, "objValue": 22 }, 34: { "expr": 76, "atr": 12, "objValue": 22 }, 35: { "expr": 78, "atr": 12, "objValue": 22 }, 36: { "expr": 80, "atr": 12, "objValue": 22 }, 37: { "expr": 81, "atr": 12, "objValue": 22 }, 38: { "expr": 82, "atr": 12, "objValue": 22 }, 39: { "expr": 84, "atr": 12, "objValue": 22 }, 40: { "expr": 86, "atr": 12, "objValue": 22 }, 41: { "expr": 88, "atr": 12, "objValue": 22 }, 42: { "expr": 90, "atr": 12, "objValue": 22 }, 43: { "expr": 92, "atr": 12, "objValue": 22 }, 44: { "expr": 94, "atr": 12, "objValue": 22 }, 45: { "expr": 95, "atr": 12, "objValue": 22 }, 46: { "expr": 97, "atr": 12, "objValue": 22 }, 47: {}, 48: {}, 49: {}, 50: {}, 51: { "atr": 98, "objValue": 22 }, 52: {}, 53: { "expr": 101, "atr": 12, "objValue": 22, "callParams": 103 }, 54: {}, 55: {}, 56: {}, 57: {}, 58: {}, 59: {}, 60: {}, 61: {}, 62: {}, 63: {}, 64: {}, 65: {}, 66: { "expr": 108, "atr": 12, "objValue": 22 }, 67: {}, 68: { "expr": 109, "atr": 12, "objValue": 22 }, 69: { "expr": 110, "atr": 12, "objValue": 22 }, 70: {}, 71: { "expr": 112, "atr": 12, "objValue": 22 }, 72: {}, 73: { "expr": 113, "atr": 12, "objValue": 22 }, 74: {}, 75: { "expr": 114, "atr": 12, "objValue": 22 }, 76: {}, 77: { "expr": 115, "atr": 12, "objValue": 22 }, 78: {}, 79: { "expr": 116, "atr": 12, "objValue": 22 }, 80: {}, 81: {}, 82: {}, 83: { "expr": 117, "atr": 12, "objValue": 22 }, 84: {}, 85: { "expr": 118, "atr": 12, "objValue": 22 }, 86: {}, 87: { "expr": 119, "atr": 12, "objValue": 22 }, 88: {}, 89: { "expr": 121, "atr": 12, "objValue": 22 }, 90: {}, 91: { "expr": 122, "atr": 12, "objValue": 22 }, 92: {}, 93: { "expr": 123, "atr": 12, "objValue": 22 }, 94: {}, 95: {}, 96: { "expr": 124, "atr": 12, "objValue": 22 }, 97: {}, 98: { "funcCallEnd": 55 }, 99: {}, 100: {}, 101: {}, 102: {}, 103: {}, 104: {}, 105: {}, 106: {}, 107: { "expr": 130, "atr": 12, "objValue": 22 }, 108: {}, 109: {}, 110: {}, 111: { "expr": 131, "atr": 12, "objValue": 22 }, 112: {}, 113: {}, 114: {}, 115: {}, 116: {}, 117: {}, 118: {}, 119: {}, 120: { "expr": 132, "atr": 12, "objValue": 22 }, 121: {}, 122: {}, 123: {}, 124: {}, 125: { "expr": 133, "atr": 12, "objValue": 22 }, 126: { "expr": 134, "atr": 12, "objValue": 22 }, 127: { "expr": 135, "atr": 12, "objValue": 22, "callParams": 136 }, 128: {}, 129: {}, 130: {}, 131: {}, 132: {}, 133: {}, 134: {}, 135: {}, 136: {}, 137: { "objValueItems": 139, "objectKey": 140 }, 138: {}, 139: {}, 140: {}, 141: { "expr": 142, "atr": 12, "objValue": 22 }, 142: {} };
    var Scanner = function () {
        function Scanner() {
            _classCallCheck(this, Scanner);
            this.start = ScannerTable.start;
            this.moves = ScannerTable.moves;
            this.endInfos = ScannerTable.endInfos;
            this.befores = ScannerTable.befores;
            this.inputs = ScannerTable.inputs;
            this.tokenPos = 0;
            this.tokenContent = null;
            this.tokenContentLength = 0;
            this.commonInfo = null;
            this.lastToken = null;
        }
        _createClass(Scanner, [{
                key: "setCommonInfo",
                value: function setCommonInfo(info) {
                    this.commonInfo = info;
                }
            }, {
                key: "setTokenContent",
                value: function setTokenContent(content) {
                    content += "\r\n";
                    this.tokenContent = content;
                    this.tokenPos = 0;
                    this.tokenContentLength = content.length;
                    this.lastToken = null;
                }
            }, {
                key: "getNextToken",
                value: function getNextToken() {
                    if (this.tokenContentLength == 0) {
                        return null;
                    }
                    var recordPos = this.tokenPos;
                    var ch;
                    var findStart = this.tokenPos;
                    var state = this.start;
                    var receiveStack = [];
                    var lastEndPos = -1;
                    var lastEndState = -1;
                    while (this.tokenPos < this.tokenContentLength) {
                        ch = this.tokenContent.charCodeAt(this.tokenPos);
                        if (ch == 92 && this.tokenPos < this.tokenContent.length) {
                            this.tokenPos++;
                        }
                        if (this.inputs[ch] == undefined) {
                            ch = 20013;
                        }
                        if (this.moves[state] == undefined || this.moves[state][ch] == undefined)
                            break;
                        state = this.moves[state][ch];
                        if (this.endInfos[state] != undefined) {
                            lastEndPos = this.tokenPos;
                            lastEndState = state;
                            receiveStack.push([this.tokenPos, state]);
                            if (this.endInfos[state] == true)
                                break;
                        }
                        this.tokenPos++;
                    }
                    var last;
                    if (receiveStack.length) {
                        while (receiveStack.length) {
                            last = receiveStack.pop();
                            lastEndPos = last[0];
                            lastEndState = last[1];
                            if (this.lastToken == null || this.befores[lastEndState] == undefined || this.befores[lastEndState] != undefined && this.befores[lastEndState][this.lastToken] != undefined) {
                                this.tokenPos = lastEndPos + 1;
                                var str = this.tokenContent.slice(findStart, this.tokenPos);
                                var result = this.getTokenComplete(lastEndState, str);
                                if (result == null)
                                    return this.getNextToken();
                                this.commonInfo.tokenPos = findStart;
                                if (TokenType.TokenTrans[result] != undefined)
                                    this.lastToken = this.commonInfo.tokenValue;
                                else
                                    this.lastToken = result;
                                return result;
                            }
                        }
                    }
                    if (this.tokenPos < this.tokenContent.length) { }
                    else {
                        this.commonInfo.tokenValue = null;
                        return TokenType.Type.endSign;
                    }
                    return null;
                }
            }, {
                key: "getFilePosInfo",
                value: function getFilePosInfo(content, pos) {
                    var line = 1;
                    var charPos = 1;
                    for (var i = 0; i < content.length && pos > 0; i++) {
                        charPos++;
                        if (content.charCodeAt(i) == 13) {
                            if (content.charCodeAt(i + 1) == 10) {
                                i++;
                                pos--;
                            }
                            charPos = 1;
                            line++;
                        }
                        else if (content.charCodeAt(i + 1) == 10) {
                            if (content.charCodeAt(i) == 13) {
                                i++;
                                pos--;
                            }
                            charPos = 1;
                            line++;
                        }
                        pos--;
                    }
                    return "第" + line + "行，第" + charPos + "个字符(后面10个):" + content.slice(charPos, charPos + 10);
                }
            }, {
                key: "installId",
                value: function installId(commonInfo, content) {
                    if (commonInfo.ids[content]) {
                        return commonInfo.ids[content];
                    }
                    var id = { "name": content };
                    commonInfo.ids[content] = id;
                    return id;
                }
            }, {
                key: "getTokenComplete",
                value: function getTokenComplete(token, content) {
                    this.commonInfo.tokenValue = null;
                    switch (token) {
                        case 1:
                            return null;
                        case 39:
                            return TokenType.Type["null"];
                        case 27:
                            return TokenType.Type["as"];
                        case 28:
                            return TokenType.Type["is"];
                        case 40:
                            return TokenType.Type["true"];
                        case 41:
                            return TokenType.Type["false"];
                        case 36:
                            return TokenType.Type["for"];
                        case 3:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 4:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 5:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 6:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 7:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 8:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 9:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 10:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 11:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 12:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 13:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 14:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 15:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 16:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 31:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 32:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 19:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 17:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 18:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 20:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 30:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 29:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 38:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 37:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 21:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 22:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 23:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 24:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 25:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["op"];
                        case 26:
                        case 44:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["valueInt"];
                        case 34:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["valueOxInt"];
                        case 33:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["valueNumber"];
                        case 35:
                            this.commonInfo.tokenValue = content;
                            return TokenType.Type["valueString"];
                        case 2:
                        case 43:
                        case 46:
                        case 47:
                        case 48:
                        case 49:
                        case 50:
                        case 51:
                        case 53:
                        case 54:
                        case 55:
                        case 56:
                        case 57:
                        case 58:
                            this.commonInfo.tokenValue = this.installId(this.commonInfo, content);
                            return TokenType.Type["id"];
                    }
                    return null;
                }
            }]);
        return Scanner;
    }();
    //////////////////////////End File:binding/compiler/Scanner.js///////////////////////////
    //////////////////////////File:binding/compiler/ScannerTable.js///////////////////////////
    var ScannerTable = function ScannerTable() {
        _classCallCheck(this, ScannerTable);
    };
    //////////////////////////End File:binding/compiler/ScannerTable.js///////////////////////////
    //////////////////////////File:binding/compiler/TokenType.js///////////////////////////
    ScannerTable.moves = { 0: { 9: 1, 10: 1, 13: 1, 32: 1, 33: 16, 34: 42, 36: 43, 37: 12, 38: 18, 39: 45, 40: 5, 41: 6, 42: 9, 43: 7, 44: 25, 45: 8, 46: 22, 47: 10, 48: 26, 49: 44, 50: 44, 51: 44, 52: 44, 53: 44, 54: 44, 55: 44, 56: 44, 57: 44, 58: 23, 59: 24, 60: 15, 61: 11, 62: 14, 63: 21, 64: 13, 65: 43, 66: 43, 67: 43, 68: 43, 69: 43, 70: 43, 71: 43, 72: 43, 73: 43, 74: 43, 75: 43, 76: 43, 77: 43, 78: 43, 79: 43, 80: 43, 81: 43, 82: 43, 83: 43, 84: 43, 85: 43, 86: 43, 87: 43, 88: 43, 89: 43, 90: 43, 94: 19, 95: 43, 97: 49, 98: 43, 99: 43, 100: 43, 101: 43, 102: 48, 103: 43, 104: 43, 105: 54, 106: 43, 107: 43, 108: 43, 109: 43, 110: 2, 111: 43, 112: 43, 113: 43, 114: 43, 115: 43, 116: 50, 117: 43, 118: 43, 119: 43, 120: 43, 121: 43, 122: 43, 123: 3, 124: 17, 125: 4, 126: 20, 12288: 1 }, 1: { 9: 1, 10: 1, 13: 1, 32: 1, 12288: 1 }, 2: { 48: 43, 49: 43, 50: 43, 51: 43, 52: 43, 53: 43, 54: 43, 55: 43, 56: 43, 57: 43, 65: 43, 66: 43, 67: 43, 68: 43, 69: 43, 70: 43, 71: 43, 72: 43, 73: 43, 74: 43, 75: 43, 76: 43, 77: 43, 78: 43, 79: 43, 80: 43, 81: 43, 82: 43, 83: 43, 84: 43, 85: 43, 86: 43, 87: 43, 88: 43, 89: 43, 90: 43, 95: 43, 97: 43, 98: 43, 99: 43, 100: 43, 101: 43, 102: 43, 103: 43, 104: 43, 105: 43, 106: 43, 107: 43, 108: 43, 109: 43, 110: 43, 111: 43, 112: 43, 113: 43, 114: 43, 115: 43, 116: 43, 117: 47, 118: 43, 119: 43, 120: 43, 121: 43, 122: 43 }, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {}, 10: {}, 11: {}, 12: {}, 13: {}, 14: { 62: 29 }, 15: { 60: 30 }, 16: {}, 17: { 124: 31 }, 18: { 38: 32 }, 19: {}, 20: {}, 21: {}, 22: { 48: 33, 49: 33, 50: 33, 51: 33, 52: 33, 53: 33, 54: 33, 55: 33, 56: 33, 57: 33 }, 23: {}, 24: {}, 25: {}, 26: { 46: 52, 48: 44, 49: 44, 50: 44, 51: 44, 52: 44, 53: 44, 54: 44, 55: 44, 56: 44, 57: 44, 88: 34, 120: 34 }, 27: { 48: 43, 49: 43, 50: 43, 51: 43, 52: 43, 53: 43, 54: 43, 55: 43, 56: 43, 57: 43, 65: 43, 66: 43, 67: 43, 68: 43, 69: 43, 70: 43, 71: 43, 72: 43, 73: 43, 74: 43, 75: 43, 76: 43, 77: 43, 78: 43, 79: 43, 80: 43, 81: 43, 82: 43, 83: 43, 84: 43, 85: 43, 86: 43, 87: 43, 88: 43, 89: 43, 90: 43, 95: 43, 97: 43, 98: 43, 99: 43, 100: 43, 101: 43, 102: 43, 103: 43, 104: 43, 105: 43, 106: 43, 107: 43, 108: 43, 109: 43, 110: 43, 111: 43, 112: 43, 113: 43, 114: 43, 115: 43, 116: 43, 117: 43, 118: 43, 119: 43, 120: 43, 121: 43, 122: 43 }, 28: { 48: 43, 49: 43, 50: 43, 51: 43, 52: 43, 53: 43, 54: 43, 55: 43, 56: 43, 57: 43, 65: 43, 66: 43, 67: 43, 68: 43, 69: 43, 70: 43, 71: 43, 72: 43, 73: 43, 74: 43, 75: 43, 76: 43, 77: 43, 78: 43, 79: 43, 80: 43, 81: 43, 82: 43, 83: 43, 84: 43, 85: 43, 86: 43, 87: 43, 88: 43, 89: 43, 90: 43, 95: 43, 97: 43, 98: 43, 99: 43, 100: 43, 101: 43, 102: 43, 103: 43, 104: 43, 105: 43, 106: 43, 107: 43, 108: 43, 109: 43, 110: 43, 111: 43, 112: 43, 113: 43, 114: 43, 115: 43, 116: 43, 117: 43, 118: 43, 119: 43, 120: 43, 121: 43, 122: 43 }, 29: { 62: 37 }, 30: { 60: 38 }, 31: {}, 32: {}, 33: { 48: 33, 49: 33, 50: 33, 51: 33, 52: 33, 53: 33, 54: 33, 55: 33, 56: 33, 57: 33 }, 34: { 48: 34, 49: 34, 50: 34, 51: 34, 52: 34, 53: 34, 54: 34, 55: 34, 56: 34, 57: 34, 65: 34, 66: 34, 67: 34, 68: 34, 69: 34, 70: 34, 97: 34, 98: 34, 99: 34, 100: 34, 101: 34, 102: 34 }, 35: {}, 36: { 48: 43, 49: 43, 50: 43, 51: 43, 52: 43, 53: 43, 54: 43, 55: 43, 56: 43, 57: 43, 65: 43, 66: 43, 67: 43, 68: 43, 69: 43, 70: 43, 71: 43, 72: 43, 73: 43, 74: 43, 75: 43, 76: 43, 77: 43, 78: 43, 79: 43, 80: 43, 81: 43, 82: 43, 83: 43, 84: 43, 85: 43, 86: 43, 87: 43, 88: 43, 89: 43, 90: 43, 95: 43, 97: 43, 98: 43, 99: 43, 100: 43, 101: 43, 102: 43, 103: 43, 104: 43, 105: 43, 106: 43, 107: 43, 108: 43, 109: 43, 110: 43, 111: 43, 112: 43, 113: 43, 114: 43, 115: 43, 116: 43, 117: 43, 118: 43, 119: 43, 120: 43, 121: 43, 122: 43 }, 37: {}, 38: {}, 39: { 48: 43, 49: 43, 50: 43, 51: 43, 52: 43, 53: 43, 54: 43, 55: 43, 56: 43, 57: 43, 65: 43, 66: 43, 67: 43, 68: 43, 69: 43, 70: 43, 71: 43, 72: 43, 73: 43, 74: 43, 75: 43, 76: 43, 77: 43, 78: 43, 79: 43, 80: 43, 81: 43, 82: 43, 83: 43, 84: 43, 85: 43, 86: 43, 87: 43, 88: 43, 89: 43, 90: 43, 95: 43, 97: 43, 98: 43, 99: 43, 100: 43, 101: 43, 102: 43, 103: 43, 104: 43, 105: 43, 106: 43, 107: 43, 108: 43, 109: 43, 110: 43, 111: 43, 112: 43, 113: 43, 114: 43, 115: 43, 116: 43, 117: 43, 118: 43, 119: 43, 120: 43, 121: 43, 122: 43 }, 40: { 48: 43, 49: 43, 50: 43, 51: 43, 52: 43, 53: 43, 54: 43, 55: 43, 56: 43, 57: 43, 65: 43, 66: 43, 67: 43, 68: 43, 69: 43, 70: 43, 71: 43, 72: 43, 73: 43, 74: 43, 75: 43, 76: 43, 77: 43, 78: 43, 79: 43, 80: 43, 81: 43, 82: 43, 83: 43, 84: 43, 85: 43, 86: 43, 87: 43, 88: 43, 89: 43, 90: 43, 95: 43, 97: 43, 98: 43, 99: 43, 100: 43, 101: 43, 102: 43, 103: 43, 104: 43, 105: 43, 106: 43, 107: 43, 108: 43, 109: 43, 110: 43, 111: 43, 112: 43, 113: 43, 114: 43, 115: 43, 116: 43, 117: 43, 118: 43, 119: 43, 120: 43, 121: 43, 122: 43 }, 41: { 48: 43, 49: 43, 50: 43, 51: 43, 52: 43, 53: 43, 54: 43, 55: 43, 56: 43, 57: 43, 65: 43, 66: 43, 67: 43, 68: 43, 69: 43, 70: 43, 71: 43, 72: 43, 73: 43, 74: 43, 75: 43, 76: 43, 77: 43, 78: 43, 79: 43, 80: 43, 81: 43, 82: 43, 83: 43, 84: 43, 85: 43, 86: 43, 87: 43, 88: 43, 89: 43, 90: 43, 95: 43, 97: 43, 98: 43, 99: 43, 100: 43, 101: 43, 102: 43, 103: 43, 104: 43, 105: 43, 106: 43, 107: 43, 108: 43, 109: 43, 110: 43, 111: 43, 112: 43, 113: 43, 114: 43, 115: 43, 116: 43, 117: 43, 118: 43, 119: 43, 120: 43, 121: 43, 122: 43 }, 42: { 9: 42, 10: 42, 13: 42, 32: 42, 33: 42, 34: 35, 36: 42, 37: 42, 38: 42, 39: 42, 40: 42, 41: 42, 42: 42, 43: 42, 44: 42, 45: 42, 46: 42, 47: 42, 48: 42, 49: 42, 50: 42, 51: 42, 52: 42, 53: 42, 54: 42, 55: 42, 56: 42, 57: 42, 58: 42, 59: 42, 60: 42, 61: 42, 62: 42, 63: 42, 64: 42, 65: 42, 66: 42, 67: 42, 68: 42, 69: 42, 70: 42, 71: 42, 72: 42, 73: 42, 74: 42, 75: 42, 76: 42, 77: 42, 78: 42, 79: 42, 80: 42, 81: 42, 82: 42, 83: 42, 84: 42, 85: 42, 86: 42, 87: 42, 88: 42, 89: 42, 90: 42, 94: 42, 95: 42, 97: 42, 98: 42, 99: 42, 100: 42, 101: 42, 102: 42, 103: 42, 104: 42, 105: 42, 106: 42, 107: 42, 108: 42, 109: 42, 110: 42, 111: 42, 112: 42, 113: 42, 114: 42, 115: 42, 116: 42, 117: 42, 118: 42, 119: 42, 120: 42, 121: 42, 122: 42, 123: 42, 124: 42, 125: 42, 126: 42, 12288: 42, 20013: 42 }, 43: { 48: 43, 49: 43, 50: 43, 51: 43, 52: 43, 53: 43, 54: 43, 55: 43, 56: 43, 57: 43, 65: 43, 66: 43, 67: 43, 68: 43, 69: 43, 70: 43, 71: 43, 72: 43, 73: 43, 74: 43, 75: 43, 76: 43, 77: 43, 78: 43, 79: 43, 80: 43, 81: 43, 82: 43, 83: 43, 84: 43, 85: 43, 86: 43, 87: 43, 88: 43, 89: 43, 90: 43, 95: 43, 97: 43, 98: 43, 99: 43, 100: 43, 101: 43, 102: 43, 103: 43, 104: 43, 105: 43, 106: 43, 107: 43, 108: 43, 109: 43, 110: 43, 111: 43, 112: 43, 113: 43, 114: 43, 115: 43, 116: 43, 117: 43, 118: 43, 119: 43, 120: 43, 121: 43, 122: 43 }, 44: { 46: 52, 48: 44, 49: 44, 50: 44, 51: 44, 52: 44, 53: 44, 54: 44, 55: 44, 56: 44, 57: 44 }, 45: { 9: 45, 10: 45, 13: 45, 32: 45, 33: 45, 34: 45, 36: 45, 37: 45, 38: 45, 39: 35, 40: 45, 41: 45, 42: 45, 43: 45, 44: 45, 45: 45, 46: 45, 47: 45, 48: 45, 49: 45, 50: 45, 51: 45, 52: 45, 53: 45, 54: 45, 55: 45, 56: 45, 57: 45, 58: 45, 59: 45, 60: 45, 61: 45, 62: 45, 63: 45, 64: 45, 65: 45, 66: 45, 67: 45, 68: 45, 69: 45, 70: 45, 71: 45, 72: 45, 73: 45, 74: 45, 75: 45, 76: 45, 77: 45, 78: 45, 79: 45, 80: 45, 81: 45, 82: 45, 83: 45, 84: 45, 85: 45, 86: 45, 87: 45, 88: 45, 89: 45, 90: 45, 94: 45, 95: 45, 97: 45, 98: 45, 99: 45, 100: 45, 101: 45, 102: 45, 103: 45, 104: 45, 105: 45, 106: 45, 107: 45, 108: 45, 109: 45, 110: 45, 111: 45, 112: 45, 113: 45, 114: 45, 115: 45, 116: 45, 117: 45, 118: 45, 119: 45, 120: 45, 121: 45, 122: 45, 123: 45, 124: 45, 125: 45, 126: 45, 12288: 45, 20013: 45 }, 46: { 48: 43, 49: 43, 50: 43, 51: 43, 52: 43, 53: 43, 54: 43, 55: 43, 56: 43, 57: 43, 65: 43, 66: 43, 67: 43, 68: 43, 69: 43, 70: 43, 71: 43, 72: 43, 73: 43, 74: 43, 75: 43, 76: 43, 77: 43, 78: 43, 79: 43, 80: 43, 81: 43, 82: 43, 83: 43, 84: 43, 85: 43, 86: 43, 87: 43, 88: 43, 89: 43, 90: 43, 95: 43, 97: 43, 98: 43, 99: 43, 100: 43, 101: 43, 102: 43, 103: 43, 104: 43, 105: 43, 106: 43, 107: 43, 108: 43, 109: 43, 110: 43, 111: 43, 112: 43, 113: 43, 114: 43, 115: 43, 116: 43, 117: 51, 118: 43, 119: 43, 120: 43, 121: 43, 122: 43 }, 47: { 48: 43, 49: 43, 50: 43, 51: 43, 52: 43, 53: 43, 54: 43, 55: 43, 56: 43, 57: 43, 65: 43, 66: 43, 67: 43, 68: 43, 69: 43, 70: 43, 71: 43, 72: 43, 73: 43, 74: 43, 75: 43, 76: 43, 77: 43, 78: 43, 79: 43, 80: 43, 81: 43, 82: 43, 83: 43, 84: 43, 85: 43, 86: 43, 87: 43, 88: 43, 89: 43, 90: 43, 95: 43, 97: 43, 98: 43, 99: 43, 100: 43, 101: 43, 102: 43, 103: 43, 104: 43, 105: 43, 106: 43, 107: 43, 108: 57, 109: 43, 110: 43, 111: 43, 112: 43, 113: 43, 114: 43, 115: 43, 116: 43, 117: 43, 118: 43, 119: 43, 120: 43, 121: 43, 122: 43 }, 48: { 48: 43, 49: 43, 50: 43, 51: 43, 52: 43, 53: 43, 54: 43, 55: 43, 56: 43, 57: 43, 65: 43, 66: 43, 67: 43, 68: 43, 69: 43, 70: 43, 71: 43, 72: 43, 73: 43, 74: 43, 75: 43, 76: 43, 77: 43, 78: 43, 79: 43, 80: 43, 81: 43, 82: 43, 83: 43, 84: 43, 85: 43, 86: 43, 87: 43, 88: 43, 89: 43, 90: 43, 95: 43, 97: 53, 98: 43, 99: 43, 100: 43, 101: 43, 102: 43, 103: 43, 104: 43, 105: 43, 106: 43, 107: 43, 108: 43, 109: 43, 110: 43, 111: 55, 112: 43, 113: 43, 114: 43, 115: 43, 116: 43, 117: 43, 118: 43, 119: 43, 120: 43, 121: 43, 122: 43 }, 49: { 48: 43, 49: 43, 50: 43, 51: 43, 52: 43, 53: 43, 54: 43, 55: 43, 56: 43, 57: 43, 65: 43, 66: 43, 67: 43, 68: 43, 69: 43, 70: 43, 71: 43, 72: 43, 73: 43, 74: 43, 75: 43, 76: 43, 77: 43, 78: 43, 79: 43, 80: 43, 81: 43, 82: 43, 83: 43, 84: 43, 85: 43, 86: 43, 87: 43, 88: 43, 89: 43, 90: 43, 95: 43, 97: 43, 98: 43, 99: 43, 100: 43, 101: 43, 102: 43, 103: 43, 104: 43, 105: 43, 106: 43, 107: 43, 108: 43, 109: 43, 110: 43, 111: 43, 112: 43, 113: 43, 114: 43, 115: 27, 116: 43, 117: 43, 118: 43, 119: 43, 120: 43, 121: 43, 122: 43 }, 50: { 48: 43, 49: 43, 50: 43, 51: 43, 52: 43, 53: 43, 54: 43, 55: 43, 56: 43, 57: 43, 65: 43, 66: 43, 67: 43, 68: 43, 69: 43, 70: 43, 71: 43, 72: 43, 73: 43, 74: 43, 75: 43, 76: 43, 77: 43, 78: 43, 79: 43, 80: 43, 81: 43, 82: 43, 83: 43, 84: 43, 85: 43, 86: 43, 87: 43, 88: 43, 89: 43, 90: 43, 95: 43, 97: 43, 98: 43, 99: 43, 100: 43, 101: 43, 102: 43, 103: 43, 104: 43, 105: 43, 106: 43, 107: 43, 108: 43, 109: 43, 110: 43, 111: 43, 112: 43, 113: 43, 114: 46, 115: 43, 116: 43, 117: 43, 118: 43, 119: 43, 120: 43, 121: 43, 122: 43 }, 51: { 48: 43, 49: 43, 50: 43, 51: 43, 52: 43, 53: 43, 54: 43, 55: 43, 56: 43, 57: 43, 65: 43, 66: 43, 67: 43, 68: 43, 69: 43, 70: 43, 71: 43, 72: 43, 73: 43, 74: 43, 75: 43, 76: 43, 77: 43, 78: 43, 79: 43, 80: 43, 81: 43, 82: 43, 83: 43, 84: 43, 85: 43, 86: 43, 87: 43, 88: 43, 89: 43, 90: 43, 95: 43, 97: 43, 98: 43, 99: 43, 100: 43, 101: 40, 102: 43, 103: 43, 104: 43, 105: 43, 106: 43, 107: 43, 108: 43, 109: 43, 110: 43, 111: 43, 112: 43, 113: 43, 114: 43, 115: 43, 116: 43, 117: 43, 118: 43, 119: 43, 120: 43, 121: 43, 122: 43 }, 52: { 48: 33, 49: 33, 50: 33, 51: 33, 52: 33, 53: 33, 54: 33, 55: 33, 56: 33, 57: 33 }, 53: { 48: 43, 49: 43, 50: 43, 51: 43, 52: 43, 53: 43, 54: 43, 55: 43, 56: 43, 57: 43, 65: 43, 66: 43, 67: 43, 68: 43, 69: 43, 70: 43, 71: 43, 72: 43, 73: 43, 74: 43, 75: 43, 76: 43, 77: 43, 78: 43, 79: 43, 80: 43, 81: 43, 82: 43, 83: 43, 84: 43, 85: 43, 86: 43, 87: 43, 88: 43, 89: 43, 90: 43, 95: 43, 97: 43, 98: 43, 99: 43, 100: 43, 101: 43, 102: 43, 103: 43, 104: 43, 105: 43, 106: 43, 107: 43, 108: 58, 109: 43, 110: 43, 111: 43, 112: 43, 113: 43, 114: 43, 115: 43, 116: 43, 117: 43, 118: 43, 119: 43, 120: 43, 121: 43, 122: 43 }, 54: { 48: 43, 49: 43, 50: 43, 51: 43, 52: 43, 53: 43, 54: 43, 55: 43, 56: 43, 57: 43, 65: 43, 66: 43, 67: 43, 68: 43, 69: 43, 70: 43, 71: 43, 72: 43, 73: 43, 74: 43, 75: 43, 76: 43, 77: 43, 78: 43, 79: 43, 80: 43, 81: 43, 82: 43, 83: 43, 84: 43, 85: 43, 86: 43, 87: 43, 88: 43, 89: 43, 90: 43, 95: 43, 97: 43, 98: 43, 99: 43, 100: 43, 101: 43, 102: 43, 103: 43, 104: 43, 105: 43, 106: 43, 107: 43, 108: 43, 109: 43, 110: 43, 111: 43, 112: 43, 113: 43, 114: 43, 115: 28, 116: 43, 117: 43, 118: 43, 119: 43, 120: 43, 121: 43, 122: 43 }, 55: { 48: 43, 49: 43, 50: 43, 51: 43, 52: 43, 53: 43, 54: 43, 55: 43, 56: 43, 57: 43, 65: 43, 66: 43, 67: 43, 68: 43, 69: 43, 70: 43, 71: 43, 72: 43, 73: 43, 74: 43, 75: 43, 76: 43, 77: 43, 78: 43, 79: 43, 80: 43, 81: 43, 82: 43, 83: 43, 84: 43, 85: 43, 86: 43, 87: 43, 88: 43, 89: 43, 90: 43, 95: 43, 97: 43, 98: 43, 99: 43, 100: 43, 101: 43, 102: 43, 103: 43, 104: 43, 105: 43, 106: 43, 107: 43, 108: 43, 109: 43, 110: 43, 111: 43, 112: 43, 113: 43, 114: 36, 115: 43, 116: 43, 117: 43, 118: 43, 119: 43, 120: 43, 121: 43, 122: 43 }, 56: { 48: 43, 49: 43, 50: 43, 51: 43, 52: 43, 53: 43, 54: 43, 55: 43, 56: 43, 57: 43, 65: 43, 66: 43, 67: 43, 68: 43, 69: 43, 70: 43, 71: 43, 72: 43, 73: 43, 74: 43, 75: 43, 76: 43, 77: 43, 78: 43, 79: 43, 80: 43, 81: 43, 82: 43, 83: 43, 84: 43, 85: 43, 86: 43, 87: 43, 88: 43, 89: 43, 90: 43, 95: 43, 97: 43, 98: 43, 99: 43, 100: 43, 101: 41, 102: 43, 103: 43, 104: 43, 105: 43, 106: 43, 107: 43, 108: 43, 109: 43, 110: 43, 111: 43, 112: 43, 113: 43, 114: 43, 115: 43, 116: 43, 117: 43, 118: 43, 119: 43, 120: 43, 121: 43, 122: 43 }, 57: { 48: 43, 49: 43, 50: 43, 51: 43, 52: 43, 53: 43, 54: 43, 55: 43, 56: 43, 57: 43, 65: 43, 66: 43, 67: 43, 68: 43, 69: 43, 70: 43, 71: 43, 72: 43, 73: 43, 74: 43, 75: 43, 76: 43, 77: 43, 78: 43, 79: 43, 80: 43, 81: 43, 82: 43, 83: 43, 84: 43, 85: 43, 86: 43, 87: 43, 88: 43, 89: 43, 90: 43, 95: 43, 97: 43, 98: 43, 99: 43, 100: 43, 101: 43, 102: 43, 103: 43, 104: 43, 105: 43, 106: 43, 107: 43, 108: 39, 109: 43, 110: 43, 111: 43, 112: 43, 113: 43, 114: 43, 115: 43, 116: 43, 117: 43, 118: 43, 119: 43, 120: 43, 121: 43, 122: 43 }, 58: { 48: 43, 49: 43, 50: 43, 51: 43, 52: 43, 53: 43, 54: 43, 55: 43, 56: 43, 57: 43, 65: 43, 66: 43, 67: 43, 68: 43, 69: 43, 70: 43, 71: 43, 72: 43, 73: 43, 74: 43, 75: 43, 76: 43, 77: 43, 78: 43, 79: 43, 80: 43, 81: 43, 82: 43, 83: 43, 84: 43, 85: 43, 86: 43, 87: 43, 88: 43, 89: 43, 90: 43, 95: 43, 97: 43, 98: 43, 99: 43, 100: 43, 101: 43, 102: 43, 103: 43, 104: 43, 105: 43, 106: 43, 107: 43, 108: 43, 109: 43, 110: 43, 111: 43, 112: 43, 113: 43, 114: 43, 115: 56, 116: 43, 117: 43, 118: 43, 119: 43, 120: 43, 121: 43, 122: 43 } };
    ScannerTable.start = 0;
    ScannerTable.endInfos = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false, 14: false, 15: false, 16: false, 17: false, 18: false, 19: false, 20: false, 21: false, 22: false, 23: false, 24: false, 25: false, 26: false, 27: false, 28: false, 29: false, 30: false, 31: false, 32: false, 33: false, 34: false, 35: false, 36: false, 37: false, 38: false, 39: false, 40: false, 41: false, 43: false, 44: false, 46: false, 47: false, 48: false, 49: false, 50: false, 51: false, 53: false, 54: false, 55: false, 56: false, 57: false, 58: false };
    ScannerTable.befores = {};
    ScannerTable.inputs = { 9: true, 10: true, 13: true, 32: true, 33: true, 34: true, 36: true, 37: true, 38: true, 39: true, 40: true, 41: true, 42: true, 43: true, 44: true, 45: true, 46: true, 47: true, 48: true, 49: true, 50: true, 51: true, 52: true, 53: true, 54: true, 55: true, 56: true, 57: true, 58: true, 59: true, 60: true, 61: true, 62: true, 63: true, 64: true, 65: true, 66: true, 67: true, 68: true, 69: true, 70: true, 71: true, 72: true, 73: true, 74: true, 75: true, 76: true, 77: true, 78: true, 79: true, 80: true, 81: true, 82: true, 83: true, 84: true, 85: true, 86: true, 87: true, 88: true, 89: true, 90: true, 94: true, 95: true, 97: true, 98: true, 99: true, 100: true, 101: true, 102: true, 103: true, 104: true, 105: true, 106: true, 107: true, 108: true, 109: true, 110: true, 111: true, 112: true, 113: true, 114: true, 115: true, 116: true, 117: true, 118: true, 119: true, 120: true, 121: true, 122: true, 123: true, 124: true, 125: true, 126: true, 12288: true, 20013: true };
    var TokenType = function TokenType() {
        _classCallCheck(this, TokenType);
    };
    //////////////////////////End File:binding/compiler/TokenType.js///////////////////////////
    //////////////////////////File:binding/Binding.js///////////////////////////
    TokenType.Type = {
        "endSign": "$",
        "public": "public",
        "private": "private",
        "protected": "protected",
        "final": "final",
        "dynamic": "dynamic",
        "internal": "internal",
        "class": "class",
        "interface": "interface",
        "extends": "extends",
        "implements": "implements",
        "import": "import",
        "var": "var",
        "static": "static",
        "const": "const",
        "function": "function",
        "override": "override",
        "void": "void",
        "return": "return",
        "package": "package",
        "flashProxy": "flash_proxy",
        "namespace": "namespace",
        "finally": "finally",
        "new": "new",
        "as": "as",
        "is": "is",
        "get": "get",
        "set": "set",
        "Vector": "Vector",
        "op": "op",
        "id": "id",
        "valueInt": "CInt",
        "valueOxInt": "OXCInt",
        "valueNumber": "CNumber",
        "valueString": "CString",
        "valueRegExp": "RegExp",
        "null": "null",
        "true": "true",
        "false": "false",
        "if": "if",
        "else": "else",
        "for": "for",
        "each": "each",
        "in": "in",
        "do": "do",
        "while": "while",
        "switch": "switch",
        "case": "case",
        "default": "default",
        "continue": "continue",
        "break": "break"
    };
    TokenType.TokenTrans = { "op": true };
    var Binding = function () {
        function Binding(thisObj, checks, property, content) {
            _classCallCheck(this, Binding);
            this.hasDispose = false;
            this.thisObj = thisObj;
            this.checks = checks = checks || [];
            this.property = property;
            this.content = content;
            if (checks && content.search("data") != -1) {
                for (var i = 0; i < checks.length; i++) {
                    var display = checks[i];
                    if (display.id) {
                        if (!Binding.changeList[display.id]) {
                            Binding.changeList[display.id] = [];
                        }
                        Binding.changeList[display.id].push(this);
                    }
                }
            }
            this.__bind(thisObj, checks.concat(), property, content);
        }
        _createClass(Binding, [{
                key: "$reset",
                value: function $reset() {
                    /*for (var i = 0; i < this.list.length; i++) {
                        this.list[i].removeListener(flower.Event.CHANGE, this.update, this);
                    }*/
                    this.__bind(this.thisObj, this.checks.concat(), this.property, this.content);
                }
            }, {
                key: "__bind",
                value: function __bind(thisObj, checks, property, content) {
                    this.list = [];
                    this.stmts = [];
                    this.singleValue = false;
                    var i;
                    if (checks == null) {
                        checks = Binding.bindingChecks.concat();
                    }
                    else {
                        for (i = 0; i < Binding.bindingChecks.length; i++) {
                            checks.push(Binding.bindingChecks[i]);
                        }
                    }
                    checks.push(thisObj);
                    var lastEnd = 0;
                    var parseError = false;
                    for (i = 0; i < content.length; i++) {
                        if (content.charAt(i) == "{") {
                            for (var j = i + 1; j < content.length; j++) {
                                if (content.charAt(j) == "{") {
                                    break;
                                }
                                if (content.charAt(j) == "}") {
                                    var bindContent = content.slice(i + 1, j);
                                    if (i == 0 && j == content.length - 1) {
                                        this.singleValue = true;
                                    }
                                    if (lastEnd < i) {
                                        this.stmts.push(content.slice(lastEnd, i));
                                    }
                                    lastEnd = j + 1;
                                    var stmt = Compiler.parserExpr(bindContent, checks, { "this": thisObj }, {
                                        /*"flower": flower,
                                        "Tween": flower.Tween,
                                        "Ease": flower.Ease,*/
                                        "Math": Math
                                    }, this.list, this);
                                    if (stmt == null) {
                                        parseError = true;
                                        break;
                                    }
                                    this.stmts.push(stmt);
                                    i = j;
                                    break;
                                }
                            }
                        }
                    }
                    if (parseError) {
                        thisObj[property] = content;
                        return;
                    }
                    if (lastEnd < content.length) {
                        this.stmts.push(content.slice(lastEnd, content.length));
                    }
                    this.thisObj = thisObj;
                    this.property = property;
                    for (i = 0; i < this.list.length; i++) {
                        for (j = 0; j < this.list.length; j++) {
                            if (i != j && this.list[i] == this.list[j]) {
                                this.list.splice(j, 1);
                                i = -1;
                                break;
                            }
                        }
                    }
                    /*for (i = 0; i < this.list.length; i++) {
                        this.list[i].addListener(flower.Event.CHANGE, this.update, this);
                    }*/
                    this.update();
                }
            }, {
                key: "$addValueListener",
                value: function $addValueListener(value) {
                    //value.addListener(flower.Event.CHANGE, this.update, this);
                }
            }, {
                key: "$removeValueListener",
                value: function $removeValueListener(value) {
                    //value.removeListener(flower.Event.CHANGE, this.update, this);
                }
            }, {
                key: "update",
                value: function update() {
                    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    var old = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    var value;
                    if (this.singleValue) {
                        try {
                            value = this.stmts[0].getValue();
                        }
                        catch (e) {
                            value = null;
                        }
                        this.thisObj[this.property] = value;
                    }
                    else {
                        var str = "";
                        for (var i = 0; i < this.stmts.length; i++) {
                            var expr = this.stmts[i];
                            if (expr instanceof Stmts) {
                                try {
                                    str += expr.getValue();
                                }
                                catch (e) {
                                    str += "null";
                                }
                            }
                            else {
                                str += expr;
                            }
                        }
                        this.thisObj[this.property] = str;
                    }
                }
            }, {
                key: "dispose",
                value: function dispose() {
                    this.hasDispose = true;
                    /*for (var i = 0; i < this.list.length; i++) {
                        this.list[i].removeListener(flower.Event.CHANGE, this.update, this);
                    }*/
                }
            }], [{
                key: "addBindingCheck",
                value: function addBindingCheck(check) {
                    for (var i = 0; i < Binding.bindingChecks.length; i++) {
                        if (Binding.bindingChecks[i] == check) {
                            return;
                        }
                    }
                    Binding.bindingChecks.push(check);
                }
            }, {
                key: "changeData",
                value: function changeData(display) {
                    var id = display.id;
                    var list = Binding.changeList[id];
                    if (list) {
                        for (var i = 0; i < list.length; i++) {
                            list[i].$reset();
                        }
                    }
                }
            }, {
                key: "removeChangeObject",
                value: function removeChangeObject(display) {
                    var id = display.id;
                    delete Binding.changeList[id];
                }
            }, {
                key: "clearBindingChecks",
                value: function clearBindingChecks() {
                    Binding.bindingChecks = null;
                    Binding.changeList = [];
                }
            }]);
        return Binding;
    }();
    Binding.bindingChecks = [];
    Binding.changeList = {};
    binding.eval = function (expr, params, funcs) {
        var obj = { value: null };
        if (params) {
            for (var i = 0; i < params.length; i++) {
                obj["$" + i] = params[i];
            }
        }
        if (!funcs) {
            funcs = {};
        }
        new Binding(obj, [obj, funcs], "value", "{" + expr + "}");
        return obj.value;
    };
    binding.Binding = Binding;
    //////////////////////////End File:binding/Binding.js///////////////////////////
})();
window.binding = binding;
console.log("export binding:", window.binding);
